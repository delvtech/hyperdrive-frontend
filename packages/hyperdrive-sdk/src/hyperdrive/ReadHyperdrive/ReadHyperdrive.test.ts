import { expect, test } from "vitest";
import * as dnum from "dnum";
import { simplePoolConfig } from "src/pool/testing/PoolConfig";
import { simplePoolInfo } from "src/pool/testing/PoolInfo";
import { ALICE, BOB } from "src/base/testing/accounts";
import { CheckpointEvent } from "src/pool/Checkpoint";
import { setupReadHyperdrive } from "./testing/setupReadHyperdrive";
import { decodeAssetFromTransferSingleEventData } from "src/pool/decodeAssetFromTransferSingleEventData";
import { ZERO_ADDRESS } from "src/base/numbers";

// The sdk should return the exact PoolConfig from the contracts. It should not
// do any conversions or transformations, eg: converting seconds to ms,
// formatting bigints, etc..
test("getPoolConfig should return the PoolConfig from the contract as-is", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();

  // stub out the contract call the sdk is going to make
  contract.stubRead({
    functionName: "getPoolConfig",
    value: simplePoolConfig,
  });

  // The sdk should return the correct data
  const value = await readHyperdrive.getPoolConfig();
  expect(value).toBe(simplePoolConfig);
});

// The sdk should return the exact PoolInfo from the contracts. It should not do
// any conversions or transformations, eg: converting seconds into ms,
// formatting bigints, etc..
test("getPoolInfo should return the PoolInfo from the contract as-is", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();

  contract.stubRead({
    functionName: "getPoolInfo",
    value: simplePoolInfo,
  });

  const value = await readHyperdrive.getPoolInfo();
  expect(value).toBe(simplePoolInfo);
});

// The sdk should return the exact APR from the contracts. It should not do any
// conversions or transformations, eg: formatting bigints, etc..
test("getFixedRate should get the fixed rate as-is", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();

  // These are necessary to stub, but the values won't be used since we stub
  // calculateAPRFromReserves directly
  contract.stubRead({
    functionName: "getPoolConfig",
    value: simplePoolConfig,
  });
  contract.stubRead({
    functionName: "getPoolInfo",
    value: simplePoolInfo,
  });

  const value = await readHyperdrive.getSpotRate();
  expect(value).toBe(50000000000000000n);
});

test("getTradingVolume should get the trading volume in terms of bonds", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();

  contract.stubEvents(
    "OpenLong",
    {
      fromBlock: "earliest",
      toBlock: "latest",
    },
    [
      {
        eventName: "OpenLong",
        args: {
          assetId: 1n,
          baseAmount: dnum.from("1", 18)[0],
          bondAmount: dnum.from("1.3", 18)[0],
          maturityTime: 1729209600n,
          vaultShareAmount: 1n,
          asBase: false,
          trader: BOB,
        },
      },
      {
        eventName: "OpenLong",
        args: {
          assetId: 2n,
          baseAmount: dnum.from("1", 18)[0],
          bondAmount: dnum.from("1.4", 18)[0],
          maturityTime: 1733961600n,
          vaultShareAmount: 1n,
          asBase: false,
          trader: ALICE,
        },
      },
    ],
  );

  contract.stubEvents(
    "OpenShort",
    {
      fromBlock: "earliest",
      toBlock: "latest",
    },
    [
      {
        eventName: "OpenShort",
        args: {
          assetId: 3n,
          baseAmount: dnum.from("1", 18)[0],
          bondAmount: dnum.from("100", 18)[0],
          maturityTime: 1729296000n,
          vaultShareAmount: 1n,
          asBase: false,
          baseProceeds: dnum.from("100", 18)[0],
          trader: BOB,
        },
      },
      {
        eventName: "OpenShort",
        args: {
          assetId: 4n,
          baseAmount: dnum.from("2", 18)[0],
          bondAmount: dnum.from("190", 18)[0],
          maturityTime: 1729296000n,
          vaultShareAmount: 1n,
          asBase: false,
          baseProceeds: dnum.from("190", 18)[0],
          trader: BOB,
        },
      },
    ],
  );

  const value = await readHyperdrive.getTradingVolume({
    fromBlock: "earliest",
    toBlock: "latest",
  });

  expect(value).toEqual({
    shortVolume: dnum.from("290", 18)[0], // sum of bondAmount in short events
    longVolume: dnum.from("2.7", 18)[0], // sum of bondAmount in long events
    totalVolume: dnum.from("292.7", 18)[0],
  });
});

test("getShortAccruedYield should return the amount of yield a non-mature position has earned", async () => {
  const { contract, network, readHyperdrive } = setupReadHyperdrive();

  network.stubGetBlock({
    value: { blockNumber: 1n, timestamp: 100n },
  });

  contract.stubRead({
    functionName: "getPoolConfig",
    value: {
      ...simplePoolConfig,
      positionDuration: 86400n, // one day in seconds
      checkpointDuration: 86400n, // one day in seconds
    },
  });

  // The pool info gives us the current price
  contract.stubRead({
    functionName: "getPoolInfo",
    value: { ...simplePoolInfo, vaultSharePrice: dnum.from("1.01", 18)[0] },
  });

  // The checkpoint gives us the price when the bond was opened
  contract.stubRead({
    functionName: "getCheckpoint",
    value: { vaultSharePrice: dnum.from("1.008", 18)[0] },
  });

  const accruedYield = await readHyperdrive.getShortAccruedYield({
    checkpointId: 0n,
    bondAmount: dnum.from("100", 18)[0],
    decimals: 18,
  });

  // If you opened a short position on 100 bonds at a previous checkpoint price
  // of 1.008 and the current price is 1.01, your accrued profit would
  // be 0.20.
  expect(accruedYield).toEqual(dnum.from("0.20", 18)[0]);
});

test("getShortAccruedYield should return the amount of yield a mature position has earned", async () => {
  const { network, contract, readHyperdrive } = setupReadHyperdrive();

  network.stubGetBlock({
    value: { blockNumber: 1n, timestamp: 1699503565n },
  });
  contract.stubRead({
    functionName: "getPoolConfig",
    value: {
      ...simplePoolConfig,
      positionDuration: 86400n, // one day in seconds
      checkpointDuration: 86400n, // one day in seconds
    },
  });

  // This checkpoint gives us the price when the short was opened
  contract.stubRead({
    functionName: "getCheckpoint",
    args: 1n,
    value: { vaultSharePrice: dnum.from("1.008", 18)[0] },
  });

  // This checkpoint gives us the price when the shorts matured
  contract.stubRead({
    functionName: "getCheckpoint",
    args: 86401n,
    value: { vaultSharePrice: dnum.from("1.01", 18)[0] },
  });

  const accruedYield = await readHyperdrive.getShortAccruedYield({
    checkpointId: 1n,
    bondAmount: dnum.from("100", 18)[0],
    decimals: 18,
  });

  // If you opened a short position on 100 bonds at a previous checkpoint price
  // of 1.008 and the price was 1.01 at maturity, your accrued profit would
  // be 0.20.
  expect(accruedYield).toEqual(dnum.from("0.20", 18)[0]);
});

test("getCheckpointEvents should return an array of CheckpointEvents", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();
  const checkPointEvents = [
    {
      eventName: "CreateCheckpoint",
      args: {
        vaultSharePrice: 423890n,
        checkpointTime: 1699480800n,
        lpSharePrice: 1000276463406900050n,
        maturedLongs: 1010694n,
        maturedShorts: 0n,
      },
    },
    {
      eventName: "CreateCheckpoint",
      args: {
        sharePrice: 1000378348050038939n,
        checkpointTime: 1729299000n,
        lpSharePrice: 80120n,
        maturedLongs: 923162n,
        maturedShorts: 230904n,
      },
    },
  ] as CheckpointEvent[];
  contract.stubEvents(
    "CreateCheckpoint",
    { fromBlock: undefined, toBlock: undefined },
    checkPointEvents,
  );

  const events = await readHyperdrive.getCheckpointEvents({
    fromBlock: undefined,
    toBlock: undefined,
  });

  expect(events).toEqual(checkPointEvents);
});

// opened with base
test("getOpenLongs should account for longs opened with base", async () => {
  // Description:
  // Bob opens up a long position over 2 txs in the same checkpoint, for a total
  // cost 2 base, and receiving 2.7 bonds. As a result, he should now have
  // an open position with the 2.7 bonds and a total cost of 2 base.

  const { contract, readHyperdrive } = setupReadHyperdrive();

  const eventData =
    "0x0100000000000000000000000000000000000000000000000000000065d65640000000000000000000000000000000000000000000000001bc82c3277b2dc665";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);
  contract.stubEvents(
    "OpenLong",
    { filter: { trader: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        eventName: "OpenLong",
        args: {
          assetId: 1n,
          // paid for in base
          baseAmount: dnum.from("1", 18)[0],
          vaultShareAmount: 0n,
          // received bonds
          bondAmount: dnum.from("1.3", 18)[0],
          maturityTime: timestamp,
          asBase: true,
          trader: BOB,
        },
      },
      {
        eventName: "OpenLong",
        args: {
          assetId: 1n,
          // paid for in base
          baseAmount: dnum.from("1", 18)[0],
          vaultShareAmount: 0n,
          // received bonds
          bondAmount: dnum.from("1.4", 18)[0],
          maturityTime: timestamp,
          asBase: true,
          trader: BOB,
        },
      },
    ],
  );
  contract.stubEvents(
    "CloseLong",
    { filter: { trader: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [],
  );

  // mints or transfers to
  contract.stubEvents(
    "TransferSingle",
    { filter: { to: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        data: eventData,
        args: {
          from: ZERO_ADDRESS,
          to: BOB,
          id: 1n,
          value: dnum.from("1.3", 18)[0],
          operator: BOB,
        },
        eventName: "TransferSingle",
      },
      {
        args: {
          from: ZERO_ADDRESS,
          to: BOB,
          id: 1n,
          value: dnum.from("1.4", 18)[0],
          operator: BOB,
        },
        data: eventData,
        eventName: "TransferSingle",
      },
    ],
  );

  // mints or transfers to
  contract.stubEvents(
    "TransferSingle",
    { filter: { from: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [],
  );
  const value = await readHyperdrive.getOpenLongs({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      baseAmountPaid: 2000000000000000000n, // Bob paid 2 base over 2 txs that opened a long
      bondAmount: 2700000000000000000n, // Bob received a total of 2.7 bonds from these txs
      maturity: 1708545600n,
    },
  ]);
});
test("getOpenLongs should account for longs opened with shares", async () => {
  // Description:
  // Bob opens up a long position over 2 txs, for a total cost 2 shares, and
  // receiving 2.7 bonds. As a result, he should now have an open position with
  // the 2.7 bonds and a total cost of 2.35 base. (because 1 share = 1.15 base in
  // the first tx, and 1 share = 1.2 base in the second tx)

  const { contract, readHyperdrive } = setupReadHyperdrive();

  const eventData =
    "0x0100000000000000000000000000000000000000000000000000000065d65640000000000000000000000000000000000000000000000001bc82c3277b2dc665";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);
  contract.stubEvents(
    "OpenLong",
    { filter: { trader: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        eventName: "OpenLong",
        blockNumber: 5n,
        args: {
          assetId: 1n,
          // paid for in shares
          baseAmount: 0n,
          vaultShareAmount: dnum.from("1", 18)[0],
          // received bonds
          bondAmount: dnum.from("1.3", 18)[0],
          maturityTime: timestamp,
          asBase: false,
          trader: BOB,
        },
      },
      {
        eventName: "OpenLong",
        blockNumber: 12n,
        args: {
          assetId: 1n,
          // paid for in shares
          baseAmount: 0n,
          vaultShareAmount: dnum.from("1", 18)[0],
          // received bonds
          bondAmount: dnum.from("1.4", 18)[0],
          maturityTime: timestamp,
          asBase: false,
          trader: BOB,
        },
      },
    ],
  );

  contract.stubRead({
    functionName: "getPoolInfo",
    value: { ...simplePoolInfo, vaultSharePrice: dnum.from("1.15", 18)[0] },
    options: { blockNumber: 5n },
  });
  contract.stubRead({
    functionName: "getPoolInfo",
    value: { ...simplePoolInfo, vaultSharePrice: dnum.from("1.20", 18)[0] },
    options: { blockNumber: 12n },
  });

  // Matching TransferSingle event for OpenLong
  contract.stubEvents(
    "TransferSingle",
    { filter: { to: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        data: eventData,
        args: {
          from: ZERO_ADDRESS,
          to: BOB,
          id: 1n,
          value: dnum.from("1.3", 18)[0],
          operator: BOB,
        },
        eventName: "TransferSingle",
        blockNumber: 5n,
      },
      {
        data: eventData,
        args: {
          from: ZERO_ADDRESS,
          to: BOB,
          id: 1n,
          value: dnum.from("1.4", 18)[0],
          operator: BOB,
        },
        eventName: "TransferSingle",
        blockNumber: 12n,
      },
    ],
  );

  // Bob has not closed the position at all, these are just stubbed out
  contract.stubEvents(
    "CloseLong",
    { filter: { trader: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [],
  );
  contract.stubEvents(
    "TransferSingle",
    { filter: { from: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [],
  );
  const value = await readHyperdrive.getOpenLongs({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      baseAmountPaid: dnum.from("2.35", 18)[0], // Bob paid in shares, for the equivalent cost of 2.35 base
      bondAmount: dnum.from("2.7", 18)[0], // Bob received a total of 2.7 bond
      maturity: 1708545600n,
    },
  ]);
});
test("getOpenLongs should account for longs partially closed to base", async () => {
  // Description:
  // Bob opens up a long position over 2 txs in the same checkpoint, for a total
  // cost 2 base, and receiving 2.7 bonds. He then partially closes this
  // position, redeeming 0.9 bonds for 1 base. As a result, he should now have
  // an open position with the remaining 1.8 bonds  and a total cost of 1 base.

  const { contract, readHyperdrive } = setupReadHyperdrive();

  const eventData =
    "0x0100000000000000000000000000000000000000000000000000000065d65640000000000000000000000000000000000000000000000001bc82c3277b2dc665";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);
  contract.stubEvents(
    "OpenLong",
    { filter: { trader: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        eventName: "OpenLong",
        args: {
          assetId: 1n,
          // paid for in base
          baseAmount: dnum.from("1", 18)[0],
          vaultShareAmount: 0n,
          // received bonds
          bondAmount: dnum.from("1.3", 18)[0],
          maturityTime: timestamp,
          asBase: true,
          trader: BOB,
        },
      },
      {
        eventName: "OpenLong",
        args: {
          assetId: 1n,
          // paid for in base
          baseAmount: dnum.from("1", 18)[0],
          vaultShareAmount: 0n,
          // received bonds
          bondAmount: dnum.from("1.4", 18)[0],
          maturityTime: timestamp,
          asBase: true,
          trader: BOB,
        },
      },
    ],
  );
  contract.stubEvents(
    "CloseLong",
    { filter: { trader: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        eventName: "CloseLong",
        args: {
          assetId: 1n,
          maturityTime: timestamp,
          trader: BOB,

          // received back 1 base, and no vault shares
          asBase: true,
          baseAmount: dnum.from("1", 18)[0],
          vaultShareAmount: 0n,

          // closed out 0.9 bonds
          bondAmount: dnum.from("0.9", 18)[0],
        },
      },
    ],
  );

  // mints
  contract.stubEvents(
    "TransferSingle",
    { filter: { to: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        data: eventData,
        args: {
          from: ZERO_ADDRESS,
          to: BOB,
          id: 1n,
          value: dnum.from("1.3", 18)[0],
          operator: BOB,
        },
        eventName: "TransferSingle",
      },
      {
        args: {
          from: ZERO_ADDRESS,
          to: BOB,
          id: 1n,
          value: dnum.from("1.4", 18)[0],
          operator: BOB,
        },
        data: eventData,
        eventName: "TransferSingle",
      },
    ],
  );

  // redeems
  contract.stubEvents(
    "TransferSingle",
    { filter: { from: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        args: {
          from: BOB,
          to: ZERO_ADDRESS,
          id: 1n,
          value: dnum.from("0.9", 18)[0],
          operator: BOB,
        },
        data: eventData,
        eventName: "TransferSingle",
      },
    ],
  );
  const value = await readHyperdrive.getOpenLongs({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      baseAmountPaid: 1000000000000000000n, // Bob has now paid 1 base total
      bondAmount: 1800000000000000000n, // Bob currently hold 1.8 bonds
      maturity: 1708545600n,
    },
  ]);
});

test("getOpenLongs should account for longs fully closed to base", async () => {
  // Description:
  // Bob opens up a long position over 2 txs in the same checkpoint, for a total
  // cost 2 base, and receiving 2.7 bonds. He then completely closes this
  // position, redeeming 2.7 bonds for 2.5 base. As a result, he no longer has
  // any open long positions.

  const { contract, readHyperdrive } = setupReadHyperdrive();

  const eventData =
    "0x0100000000000000000000000000000000000000000000000000000065d65640000000000000000000000000000000000000000000000001bc82c3277b2dc665";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);
  contract.stubEvents(
    "OpenLong",
    { filter: { trader: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        eventName: "OpenLong",
        args: {
          assetId: 1n,
          // paid for in base
          baseAmount: dnum.from("1", 18)[0],
          vaultShareAmount: 0n,
          // received bonds
          bondAmount: dnum.from("1.3", 18)[0],
          maturityTime: timestamp,
          asBase: true,
          trader: BOB,
        },
      },
      {
        eventName: "OpenLong",
        args: {
          assetId: 1n,
          // paid for in base
          baseAmount: dnum.from("1", 18)[0],
          vaultShareAmount: 0n,
          // received bonds
          bondAmount: dnum.from("1.4", 18)[0],
          maturityTime: timestamp,
          asBase: true,
          trader: BOB,
        },
      },
    ],
  );
  // matching TransferSingle events for OpenLong
  contract.stubEvents(
    "TransferSingle",
    { filter: { to: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        data: eventData,
        args: {
          from: ZERO_ADDRESS,
          to: BOB,
          id: 1n,
          value: dnum.from("1.3", 18)[0],
          operator: BOB,
        },
        eventName: "TransferSingle",
      },
      {
        args: {
          from: ZERO_ADDRESS,
          to: BOB,
          id: 1n,
          value: dnum.from("1.4", 18)[0],
          operator: BOB,
        },
        data: eventData,
        eventName: "TransferSingle",
      },
    ],
  );

  contract.stubEvents(
    "CloseLong",
    { filter: { trader: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        eventName: "CloseLong",
        args: {
          assetId: 1n,
          maturityTime: timestamp,
          trader: BOB,

          // received back 2.5 base, and no vault shares
          asBase: true,
          baseAmount: dnum.from("2.5", 18)[0],
          vaultShareAmount: 0n,

          // closed out 2.7 bonds
          bondAmount: dnum.from("2.7", 18)[0],
        },
      },
    ],
  );
  // Matching TransferSingle events for CloseLong
  contract.stubEvents(
    "TransferSingle",
    { filter: { from: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        args: {
          from: BOB,
          to: ZERO_ADDRESS,
          id: 1n,
          value: dnum.from("2.7", 18)[0],
          operator: BOB,
        },
        data: eventData,
        eventName: "TransferSingle",
      },
    ],
  );
  const value = await readHyperdrive.getOpenLongs({ account: BOB });

  expect(value).toEqual([]);
});

test("getOpenLongs should account for longs partially closed to shares", async () => {
  // Description:
  // Bob opens up a long position, for a total cost 2 base, and receiving 2.2
  // bonds. He then closes half of this position, redeeming 1.1 bonds for 0.8
  // shares. Shares are worth 1.1 base at the time he closes, As a result, he
  // has 1.1 bonds left with a total cost paid of 1.12 base.

  const { contract, readHyperdrive } = setupReadHyperdrive();

  const eventData =
    "0x0100000000000000000000000000000000000000000000000000000065d65640000000000000000000000000000000000000000000000001bc82c3277b2dc665";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);
  contract.stubEvents(
    "OpenLong",
    { filter: { trader: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        eventName: "OpenLong",
        args: {
          assetId: 1n,
          // paid for in base
          baseAmount: dnum.from("2", 18)[0],
          vaultShareAmount: 0n,
          // received bonds
          bondAmount: dnum.from("2.2", 18)[0],
          maturityTime: timestamp,
          asBase: true,
          trader: BOB,
        },
      },
    ],
  );
  // matching TransferSingle events for OpenLong
  contract.stubEvents(
    "TransferSingle",
    { filter: { to: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        data: eventData,
        args: {
          from: ZERO_ADDRESS,
          to: BOB,
          id: 1n,
          value: dnum.from("2.2", 18)[0],
          operator: BOB,
        },
        eventName: "TransferSingle",
      },
    ],
  );

  contract.stubEvents(
    "CloseLong",
    { filter: { trader: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        eventName: "CloseLong",
        blockNumber: 5n,
        args: {
          assetId: 1n,
          maturityTime: timestamp,
          trader: BOB,

          // received back 0.8 shares, and no base
          asBase: false,
          baseAmount: 0n,
          vaultShareAmount: dnum.from("0.8", 18)[0],

          // closed out 1.1 bonds
          bondAmount: dnum.from("1.1", 18)[0],
        },
      },
    ],
  );
  // Matching TransferSingle events for CloseLong
  contract.stubEvents(
    "TransferSingle",
    { filter: { from: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        args: {
          from: BOB,
          to: ZERO_ADDRESS,
          id: 1n,
          value: dnum.from("1.1", 18)[0],
          operator: BOB,
        },
        data: eventData,
        eventName: "TransferSingle",
      },
    ],
  );
  // pool info to get the price of shares at the time he closes out to 0.8 shares
  contract.stubRead({
    functionName: "getPoolInfo",
    value: { ...simplePoolInfo, vaultSharePrice: dnum.from("1.1", 18)[0] },
    options: { blockNumber: 5n },
  });
  const value = await readHyperdrive.getOpenLongs({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      baseAmountPaid: dnum.from("1.12", 18)[0],
      bondAmount: dnum.from("1.1", 18)[0],
      maturity: 1708545600n,
    },
  ]);
});

test("getOpenLongs should account for longs fully closed to shares", async () => {
  // Description:
  // Bob opens up a long position, for a total cost 2 base, and receiving 2.2
  // bonds. He then closes the entirety of this position to shares at a time
  // when shares are worth 1.1 base. As a result, he gets back 2 shares, for a
  // value of 2.2 base.
  const { contract, readHyperdrive } = setupReadHyperdrive();

  const eventData =
    "0x0100000000000000000000000000000000000000000000000000000065d65640000000000000000000000000000000000000000000000001bc82c3277b2dc665";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);
  contract.stubEvents(
    "OpenLong",
    { filter: { trader: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        eventName: "OpenLong",
        args: {
          assetId: 1n,
          // paid for in base
          baseAmount: dnum.from("2", 18)[0],
          vaultShareAmount: 0n,
          // received bonds
          bondAmount: dnum.from("2.2", 18)[0],
          maturityTime: timestamp,
          asBase: true,
          trader: BOB,
        },
      },
    ],
  );
  // matching TransferSingle events for OpenLong
  contract.stubEvents(
    "TransferSingle",
    { filter: { to: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        data: eventData,
        args: {
          from: ZERO_ADDRESS,
          to: BOB,
          id: 1n,
          value: dnum.from("2.2", 18)[0],
          operator: BOB,
        },
        eventName: "TransferSingle",
      },
    ],
  );

  contract.stubEvents(
    "CloseLong",
    { filter: { trader: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        eventName: "CloseLong",
        blockNumber: 5n,
        args: {
          assetId: 1n,
          maturityTime: timestamp,
          trader: BOB,

          // received back 2 shares, and no base
          asBase: false,
          baseAmount: 0n,
          vaultShareAmount: dnum.from("2.0", 18)[0],

          // closed out 2.2 bonds
          bondAmount: dnum.from("2.2", 18)[0],
        },
      },
    ],
  );
  // Matching TransferSingle events for CloseLong
  contract.stubEvents(
    "TransferSingle",
    { filter: { from: BOB }, fromBlock: "earliest", toBlock: "latest" },
    [
      {
        args: {
          from: BOB,
          to: ZERO_ADDRESS,
          id: 1n,
          value: dnum.from("2.2", 18)[0],
          operator: BOB,
        },
        data: eventData,
        eventName: "TransferSingle",
      },
    ],
  );
  // pool info to get the price of shares at the time he closes out to 0.8 shares
  contract.stubRead({
    functionName: "getPoolInfo",
    value: { ...simplePoolInfo, vaultSharePrice: dnum.from("1.1", 18)[0] },
    options: { blockNumber: 5n },
  });
  const value = await readHyperdrive.getOpenLongs({ account: BOB });

  expect(value).toEqual([]);
});
