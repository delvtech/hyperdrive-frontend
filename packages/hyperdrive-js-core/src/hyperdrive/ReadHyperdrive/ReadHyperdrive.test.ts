import * as dnum from "dnum";
import { ALICE, BOB } from "src/base/testing/accounts";
import { CheckpointEvent } from "src/checkpoint/types";
import { setupReadHyperdrive } from "src/hyperdrive/ReadHyperdrive/testing/setupReadHyperdrive";
import { decodeAssetFromTransferSingleEventData } from "src/pool/decodeAssetFromTransferSingleEventData";
import {
  simplePoolConfig30Days,
  simplePoolConfig7Days,
} from "src/pool/testing/PoolConfig";
import { simplePoolInfo } from "src/pool/testing/PoolInfo";
import { expect, test } from "vitest";

// The sdk should return the exact PoolConfig from the contracts. It should not
// do any conversions or transformations, eg: converting seconds to ms,
// formatting bigints, etc..
test("getPoolConfig should return the PoolConfig from the contract as-is", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();

  // stub out the contract call the sdk is going to make
  contract.stubRead({
    functionName: "getPoolConfig",
    value: simplePoolConfig7Days,
  });

  // The sdk should return the correct data
  const value = await readHyperdrive.getPoolConfig();
  expect(value).toBe(simplePoolConfig7Days);
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
    value: simplePoolConfig7Days,
  });
  contract.stubRead({
    functionName: "getPoolInfo",
    value: simplePoolInfo,
  });

  const value = await readHyperdrive.getFixedApr();
  expect(value).toBe(50000000000000000n);
});

test("getTradingVolume should get the trading volume in terms of bonds", async () => {
  const { contract, readHyperdrive } = setupReadHyperdrive();

  contract.stubEvents("OpenLong", {}, [
    {
      eventName: "OpenLong",
      args: {
        extraData: "0x",
        assetId: 1n,
        amount: dnum.from("1", 18)[0],
        bondAmount: dnum.from("1.3", 18)[0],
        maturityTime: 1729209600n,
        vaultSharePrice: 1n,
        asBase: false,
        trader: BOB,
      },
    },
    {
      eventName: "OpenLong",
      args: {
        extraData: "0x",
        assetId: 2n,
        amount: dnum.from("1", 18)[0],
        bondAmount: dnum.from("1.4", 18)[0],
        maturityTime: 1733961600n,
        asBase: false,
        trader: ALICE,
        vaultSharePrice: 0n,
      },
    },
  ]);

  contract.stubEvents("CloseLong", {}, [
    {
      eventName: "CloseLong",
      args: {
        extraData: "0x",
        assetId: 1n,
        maturityTime: 123456789n,
        trader: BOB,
        destination: BOB,
        // received back 1 base
        asBase: true,
        amount: dnum.from("1", 18)[0],
        vaultSharePrice: 0n,
        // closed out 0.9 bonds
        bondAmount: dnum.from("0.9", 18)[0],
      },
    },
  ]);

  contract.stubEvents("OpenShort", {}, [
    {
      eventName: "OpenShort",
      args: {
        extraData: "0x",
        assetId: 3n,
        amount: dnum.from("1", 18)[0],
        bondAmount: dnum.from("100", 18)[0],
        maturityTime: 1729296000n,
        vaultSharePrice: 1n,
        asBase: false,
        baseProceeds: dnum.from("100", 18)[0],
        trader: BOB,
      },
    },
    {
      eventName: "OpenShort",
      args: {
        extraData: "0x",
        assetId: 4n,
        amount: dnum.from("2", 18)[0],
        bondAmount: dnum.from("190", 18)[0],
        maturityTime: 1729296000n,
        vaultSharePrice: 1n,
        asBase: false,
        baseProceeds: dnum.from("190", 18)[0],
        trader: BOB,
      },
    },
  ]);

  contract.stubEvents("CloseShort", {}, []);

  const value = await readHyperdrive.getTradingVolume();

  expect(value).toEqual({
    shortVolume: dnum.from("290", 18)[0], // sum of bondAmount in short events
    longVolume: dnum.from("3.6", 18)[0], // sum of bondAmount in long events
    totalVolume: dnum.from("293.6", 18)[0],
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
      ...simplePoolConfig7Days,
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
    value: {
      vaultSharePrice: dnum.from("1.008", 18)[0],
      weightedSpotPrice: 0n,
      lastWeightedSpotPriceUpdateTime: 0n,
    },
  });

  const accruedYield = await readHyperdrive.getShortAccruedYield({
    checkpointTime: 0n,
    bondAmount: dnum.from("100", 18)[0],
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
      ...simplePoolConfig7Days,
      positionDuration: 86400n, // one day in seconds
      checkpointDuration: 86400n, // one day in seconds
    },
  });

  // This checkpoint gives us the price when the short was opened
  contract.stubRead({
    functionName: "getCheckpoint",
    args: { _checkpointTime: 1n },
    value: {
      vaultSharePrice: dnum.from("1.008", 18)[0],
      weightedSpotPrice: 0n,
      lastWeightedSpotPriceUpdateTime: 0n,
    },
  });

  // This checkpoint gives us the price when the shorts matured
  contract.stubRead({
    functionName: "getCheckpoint",
    args: { _checkpointTime: 86401n },
    value: {
      vaultSharePrice: dnum.from("1.01", 18)[0],
      weightedSpotPrice: 0n,
      lastWeightedSpotPriceUpdateTime: 0n,
    },
  });

  const accruedYield = await readHyperdrive.getShortAccruedYield({
    checkpointTime: 1n,
    bondAmount: dnum.from("100", 18)[0],
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
  contract.stubEvents("CreateCheckpoint", undefined, checkPointEvents);

  const events = await readHyperdrive.getCheckpointEvents();

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
  contract.stubEvents("OpenLong", { filter: { trader: BOB } }, [
    {
      eventName: "OpenLong",
      args: {
        extraData: "0x",
        assetId: 1n,
        // paid for in base
        amount: dnum.from("1", 18)[0],
        vaultSharePrice: dnum.from("1.1", 18)[0],
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
        extraData: "0x",
        assetId: 1n,
        // paid for in base
        amount: dnum.from("1", 18)[0],
        vaultSharePrice: 1n,
        // received bonds
        bondAmount: dnum.from("1.4", 18)[0],
        maturityTime: timestamp,
        asBase: true,
        trader: BOB,
      },
    },
  ]);
  contract.stubEvents("CloseLong", { filter: { trader: BOB } }, []);

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
  contract.stubEvents("OpenLong", { filter: { trader: BOB } }, [
    {
      eventName: "OpenLong",
      args: {
        extraData: "0x",
        assetId: 1n,
        // paid for in shares
        vaultSharePrice: dnum.from("1.15", 18)[0],
        amount: dnum.from("1", 18)[0],
        // received bonds
        bondAmount: dnum.from("1.3", 18)[0],
        maturityTime: timestamp,
        asBase: false,
        trader: BOB,
      },
    },
    {
      eventName: "OpenLong",
      args: {
        extraData: "0x",
        assetId: 1n,
        // paid for in shares
        vaultSharePrice: dnum.from("1.2", 18)[0],
        amount: dnum.from("1", 18)[0],
        // received bonds
        bondAmount: dnum.from("1.4", 18)[0],
        maturityTime: timestamp,
        asBase: false,
        trader: BOB,
      },
    },
  ]);

  // Bob has not closed the position at all, these are just stubbed out
  contract.stubEvents("CloseLong", { filter: { trader: BOB } }, []);
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
  contract.stubEvents("OpenLong", { filter: { trader: BOB } }, [
    {
      eventName: "OpenLong",
      args: {
        extraData: "0x",
        assetId: 1n,
        // paid for in base
        amount: dnum.from("1", 18)[0],
        vaultSharePrice: dnum.from("1.1", 18)[0],

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
        extraData: "0x",
        assetId: 1n,
        // paid for in base
        amount: dnum.from("1", 18)[0],
        vaultSharePrice: dnum.from("1.1", 18)[0],
        // received bonds
        bondAmount: dnum.from("1.4", 18)[0],
        maturityTime: timestamp,
        asBase: true,
        trader: BOB,
      },
    },
  ]);
  contract.stubEvents("CloseLong", { filter: { trader: BOB } }, [
    {
      eventName: "CloseLong",
      args: {
        extraData: "0x",
        assetId: 1n,
        maturityTime: timestamp,
        trader: BOB,
        destination: BOB,

        // received back 1 base
        asBase: true,
        amount: dnum.from("1", 18)[0],
        vaultSharePrice: dnum.from("1.1", 18)[0],

        // closed out 0.9 bonds
        bondAmount: dnum.from("0.9", 18)[0],
      },
    },
  ]);

  // mints
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
  contract.stubEvents("OpenLong", { filter: { trader: BOB } }, [
    {
      eventName: "OpenLong",
      args: {
        extraData: "0x",
        assetId: 1n,
        // paid for in base
        amount: dnum.from("1", 18)[0],
        vaultSharePrice: dnum.from("1.1", 18)[0],

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
        extraData: "0x",
        assetId: 1n,
        // paid for in base
        amount: dnum.from("1", 18)[0],
        vaultSharePrice: dnum.from("1.1", 18)[0],
        // received bonds
        bondAmount: dnum.from("1.4", 18)[0],
        maturityTime: timestamp,
        asBase: true,
        trader: BOB,
      },
    },
  ]);
  contract.stubEvents("CloseLong", { filter: { trader: BOB } }, [
    {
      eventName: "CloseLong",
      args: {
        extraData: "0x",
        assetId: 1n,
        maturityTime: timestamp,
        trader: BOB,
        destination: BOB,

        // received back 1 base
        asBase: true,
        amount: dnum.from("1", 18)[0],
        vaultSharePrice: dnum.from("1.1", 18)[0],

        // closed out 0.9 bonds
        bondAmount: dnum.from("0.9", 18)[0],
      },
    },
  ]);

  contract.stubEvents("OpenLong", { filter: { trader: BOB } }, [
    {
      eventName: "OpenLong",
      args: {
        extraData: "0x",
        assetId: 1n,
        // paid for in base
        amount: dnum.from("1", 18)[0],
        vaultSharePrice: dnum.from("1.1", 18)[0],

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
        extraData: "0x",
        assetId: 1n,
        // paid for in base
        amount: dnum.from("1", 18)[0],
        vaultSharePrice: dnum.from("1.1", 18)[0],
        // received bonds
        bondAmount: dnum.from("1.4", 18)[0],
        maturityTime: timestamp,
        asBase: true,
        trader: BOB,
      },
    },
  ]);

  contract.stubEvents("CloseLong", { filter: { trader: BOB } }, [
    {
      eventName: "CloseLong",
      args: {
        extraData: "0x",
        assetId: 1n,
        maturityTime: timestamp,
        trader: BOB,
        destination: BOB,

        // received back 2.5 base
        asBase: true,
        amount: dnum.from("2.5", 18)[0],
        vaultSharePrice: dnum.from("1.19", 18)[0],

        // closed out 2.7 bonds
        bondAmount: dnum.from("2.7", 18)[0],
      },
    },
  ]);
  const value = await readHyperdrive.getOpenLongs({ account: BOB });

  expect(value).toEqual([]);
});

test("getOpenLongs should handle when user fully closes then re-opens a position in the same checkpoint", async () => {
  // Description:
  // Bob opens a Long, then fully closes it at a loss. Then he re-opens a long
  // in the same checkpoint, resulting in a single position with new accounting
  // (ie: the previous loss is not factored in).

  const { contract, readHyperdrive } = setupReadHyperdrive();

  contract.stubEvents("OpenLong", { filter: { trader: BOB } }, [
    {
      args: {
        extraData: "0x",
        trader: BOB,
        assetId:
          452312848583266388373324160190187140051835877600158453279131187532625961856n,
        maturityTime: 1715299200n,
        amount: dnum.from("2000", 18)[0],
        vaultSharePrice: dnum.from("1.0002871459674", 18)[0],
        asBase: true,
        bondAmount: dnum.from("2020.518819362004558105", 18)[0],
      },
      blockNumber: 1n,
      data: "0x00000000000000000000000000000000000000000000000000000000663d638000000000000000000000000000000000000000000000006c6b935b8bbd40000000000000000000000000000000000000000000000000006c639ba602f70a9a7f000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000006d8854d90acff06119",
      eventName: "OpenLong",
      transactionHash:
        "0x8b938ee12cc519b7a76debcad41aab61ef3de2cecc8a858adea7575671b1d9b4",
    },
    {
      args: {
        extraData: "0x",
        trader: BOB,
        assetId:
          452312848583266388373324160190187140051835877600158453279131187532625961856n,
        maturityTime: 1715299200n,
        amount: dnum.from("9.0931", 18)[0],
        vaultSharePrice: dnum.from("1.0003519789758", 18)[0],
        asBase: true,
        bondAmount: dnum.from("9.196435772384927298", 18)[0],
      },
      blockNumber: 3n,
      data: "0x00000000000000000000000000000000000000000000000000000000663d63800000000000000000000000000000000000000000000000007e312e45cf1ac0000000000000000000000000000000000000000000000000007e25d062e6d4586900000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000007fa04d9c34b2de42",
      eventName: "OpenLong",
      transactionHash:
        "0x5130c7a919f7303343e102020705cfe3db2ab5ca200410d119cef296c4693621",
    } as const,
  ]);

  contract.stubEvents("CloseLong", { filter: { trader: BOB } }, [
    {
      args: {
        extraData: "0x",
        trader: BOB,
        destination: BOB,
        assetId:
          452312848583266388373324160190187140051835877600158453279131187532625961856n,
        maturityTime: 1715299200n,
        amount: dnum.from("1998.524066158245200112", 18)[0],
        vaultSharePrice: dnum.from("1.0002973144644", 18)[0],
        asBase: true,
        bondAmount: dnum.from("2020.518819362004558105", 18)[0],
      },
      blockNumber: 2n,
      data: "0x00000000000000000000000000000000000000000000000000000000663d638000000000000000000000000000000000000000000000006c5717c9895f7a40f000000000000000000000000000000000000000000000006c4ed96d6708a25d07000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000006d8854d90acff06119",
      eventName: "CloseLong",
      transactionHash:
        "0x8fff6dfc2498356b665542c5517e895dd6c0364e2fa9bf011d373781dad22655",
    },
  ]);

  const value = await readHyperdrive.getOpenLongs({ account: BOB });

  expect(value).toEqual([
    {
      assetId:
        452312848583266388373324160190187140051835877600158453279131187532625961856n,
      baseAmountPaid: dnum.from("9.0931", 18)[0],
      bondAmount: dnum.from("9.196435772384927298", 18)[0],
      maturity: 1715299200n,
    },
  ]);
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
  contract.stubEvents("OpenLong", { filter: { trader: BOB } }, [
    {
      eventName: "OpenLong",
      args: {
        extraData: "0x",
        assetId: 1n,
        // paid for in base
        asBase: true,
        amount: dnum.from("2", 18)[0],
        vaultSharePrice: dnum.from("1.1", 18)[0],
        // received bonds
        bondAmount: dnum.from("2.2", 18)[0],
        maturityTime: timestamp,
        trader: BOB,
      },
    },
  ]);

  contract.stubEvents("CloseLong", { filter: { trader: BOB } }, [
    {
      eventName: "CloseLong",
      blockNumber: 5n,
      args: {
        extraData: "0x",
        assetId: 1n,
        maturityTime: timestamp,
        trader: BOB,
        destination: BOB,

        // received back 0.8 shares
        asBase: false,
        amount: dnum.from("0.88", 18)[0],
        vaultSharePrice: dnum.from("1.1", 18)[0],

        // closed out 1.1 bonds
        bondAmount: dnum.from("1.1", 18)[0],
      },
    },
  ]);

  const value = await readHyperdrive.getOpenLongs({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      baseAmountPaid: dnum.from("1.032", 18)[0],
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
  contract.stubEvents("OpenLong", { filter: { trader: BOB } }, [
    {
      eventName: "OpenLong",
      args: {
        extraData: "0x",
        assetId: 1n,
        // paid for in base
        amount: dnum.from("2", 18)[0],
        vaultSharePrice: dnum.from("1.1", 18)[0],

        // received bonds
        bondAmount: dnum.from("2.2", 18)[0],
        maturityTime: timestamp,
        asBase: true,
        trader: BOB,
      },
    },
  ]);

  contract.stubEvents("CloseLong", { filter: { trader: BOB } }, [
    {
      eventName: "CloseLong",
      blockNumber: 5n,
      args: {
        extraData: "0x",
        assetId: 1n,
        maturityTime: timestamp,
        trader: BOB,
        destination: BOB,

        // received back 2 shares, and no base
        asBase: false,
        amount: dnum.from("2.2", 18)[0],
        vaultSharePrice: dnum.from("1.1", 18)[0],

        // closed out 2.2 bonds
        bondAmount: dnum.from("2.2", 18)[0],
      },
    },
  ]);

  const value = await readHyperdrive.getOpenLongs({ account: BOB });

  expect(value).toEqual([]);
});

test("getClosedLongs should account for closing out to base", async () => {
  // Description:
  // Bob closes a long position of 2 bonds and receives back 2.2 base.
  const { contract, readHyperdrive, network } = setupReadHyperdrive();

  const eventData =
    "0x0100000000000000000000000000000000000000000000000000000065d65640000000000000000000000000000000000000000000000001bc82c3277b2dc665";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);

  contract.stubEvents("CloseLong", { filter: { trader: BOB } }, [
    {
      eventName: "CloseLong",
      blockNumber: 5n,
      args: {
        extraData: "0x",
        assetId: 1n,
        maturityTime: timestamp,
        trader: BOB,
        destination: BOB,

        // received back 2.2 base, and no shares
        asBase: true,
        amount: dnum.from("2.2", 18)[0],
        vaultSharePrice: dnum.from("2.0", 18)[0],

        // closed out 2.0 bonds
        bondAmount: dnum.from("2.0", 18)[0],
      },
    },
  ]);
  network.stubGetBlock({ value: { timestamp: 123456789n, blockNumber: 5n } });
  const value = await readHyperdrive.getClosedLongs({ account: BOB });
  expect(value).toEqual([
    {
      assetId: 1n,
      baseAmount: dnum.from("2.2", 18)[0],
      baseAmountPaid: 0n,
      bondAmount: dnum.from("2.0", 18)[0],
      closedTimestamp: 123456789n,
      maturity: 1708545600n,
    },
  ]);
});

test("getClosedLongs should account for closing out to shares", async () => {
  // Description:
  // Bob closes a long position of 2 bonds and receives back 1.9 shares. Shares
  // are worth 1.1 base at the time he closes, therefore his closed position is
  // valued at 2.09 base.
  const { contract, readHyperdrive, network } = setupReadHyperdrive();

  const eventData =
    "0x0100000000000000000000000000000000000000000000000000000065d65640000000000000000000000000000000000000000000000001bc82c3277b2dc665";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);

  contract.stubEvents("CloseLong", { filter: { trader: BOB } }, [
    {
      eventName: "CloseLong",
      blockNumber: 5n,
      args: {
        extraData: "0x",
        assetId: 1n,
        maturityTime: timestamp,
        trader: BOB,
        destination: BOB,

        // received back 1.9 shares, and no base
        asBase: false,
        vaultSharePrice: dnum.from("1.1", 18)[0],
        amount: dnum.from("1.9", 18)[0],

        // closed out 2 bonds
        bondAmount: dnum.from("2.0", 18)[0],
      },
    },
  ]);

  // getBlock gives us the timestamp of when he closed the position
  network.stubGetBlock({ value: { timestamp: 123456789n, blockNumber: 5n } });

  const value = await readHyperdrive.getClosedLongs({ account: BOB });
  expect(value).toEqual([
    {
      assetId: 1n,
      baseAmount: dnum.from("2.09", 18)[0],
      baseAmountPaid: 0n,
      bondAmount: dnum.from("2.0", 18)[0],
      closedTimestamp: 123456789n,
      maturity: 1708545600n,
    },
  ]);
});

test("getOpenShorts should account for shorts opened with base", async () => {
  // Description:
  // Bob opens up a short position for 100 bonds over 2 txs in the same
  // checkpoint, for a total cost of around 1.44 base.

  const { contract, readHyperdrive, network } = setupReadHyperdrive();

  contract.stubRead({
    functionName: "getPoolConfig",
    value: simplePoolConfig30Days,
  });
  contract.stubEvents("OpenShort", { filter: { trader: BOB } }, [
    {
      eventName: "OpenShort",
      blockNumber: 1n,
      args: {
        extraData: "0x",
        trader: BOB,
        assetId: 1n,
        maturityTime: 1716336000n,
        amount: dnum.from("0.725310333032516405", 18)[0],
        vaultSharePrice: dnum.from("0.721996107012129147", 18)[0],
        asBase: true,
        baseProceeds: dnum.from("49.288354060447513457", 18)[0],
        bondAmount: dnum.from("50", 18)[0],
      },
    },
    {
      eventName: "OpenShort",
      blockNumber: 2n,
      args: {
        extraData: "0x",
        trader: BOB,
        assetId: 1n,
        maturityTime: 1716336000n,
        amount: dnum.from("0.72527013345635719", 18)[0],
        vaultSharePrice: dnum.from("0.721952948135251528", 18)[0],
        asBase: true,
        baseProceeds: dnum.from("49.288611983218631127", 18)[0],
        bondAmount: dnum.from("50", 18)[0],
      },
    },
  ]);

  contract.stubEvents("CloseShort", { filter: { trader: BOB } }, []);

  network.stubGetBlock({
    value: {
      timestamp: 1713801432n,
      blockNumber: 1n,
    },
  });

  const value = await readHyperdrive.getOpenShorts({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      checkpointTime: 1713798000n,
      baseAmountPaid: dnum.from("1.450580466488873595", 18)[0],
      bondAmount: dnum.from("100", 18)[0],
      baseProceeds: dnum.from("98.576966043666144584", 18)[0],
      fixedRatePaid: dnum.from("0.175635145784387390", 18)[0],
      hyperdriveAddress: "0x0000000000000000000000000000000000000000",
      maturity: 1716336000n,
      openedTimestamp: 1713801432n,
    },
  ]);
});

test("getOpenShorts should account for shorts opened with shares", async () => {
  // Description:
  // Bob opens up a short position for 100 bonds over 2 txs in the same
  // checkpoint, for a total cost of around 1.44 shares.

  const { contract, readHyperdrive, network } = setupReadHyperdrive();

  contract.stubRead({
    functionName: "getPoolConfig",
    value: simplePoolConfig30Days,
  });
  contract.stubEvents("OpenShort", { filter: { trader: BOB } }, [
    {
      eventName: "OpenShort",
      blockNumber: 1n,
      args: {
        extraData: "0x",
        trader: BOB,
        assetId: 1n,
        maturityTime: 1716336000n,
        amount: dnum.from("0.721996107012129147", 18)[0],
        vaultSharePrice: dnum.from("1.004590365499", 18)[0],
        asBase: false,
        baseProceeds: dnum.from("49.288354060447513457", 18)[0],
        bondAmount: dnum.from("50", 18)[0],
      },
    },
    {
      eventName: "OpenShort",
      blockNumber: 2n,
      args: {
        extraData: "0x",
        trader: BOB,
        assetId: 1n,
        maturityTime: 1716336000n,
        amount: dnum.from("0.721952948135251528", 18)[0],
        vaultSharePrice: dnum.from("1.004594738936", 18)[0],
        asBase: false,
        baseProceeds: dnum.from("49.288611983218631127", 18)[0],
        bondAmount: dnum.from("50", 18)[0],
      },
    },
  ]);

  contract.stubEvents("CloseShort", { filter: { trader: BOB } }, []);

  network.stubGetBlock({
    value: {
      timestamp: 1713801432n,
      blockNumber: 1n,
    },
  });

  const value = await readHyperdrive.getOpenShorts({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      checkpointTime: 1713798000n,
      baseAmountPaid: dnum.from("1.450580466488178492", 18)[0],
      bondAmount: dnum.from("100", 18)[0],
      baseProceeds: dnum.from("98.576966043666144584", 18)[0],
      fixedRatePaid: dnum.from("0.175635145784387390", 18)[0],
      hyperdriveAddress: "0x0000000000000000000000000000000000000000",
      maturity: 1716336000n,
      openedTimestamp: 1713801432n,
    },
  ]);
});

test("getOpenShorts should account for shorts partially closed to base", async () => {
  // Description:
  // Bob shorts 50 bonds for a total cost of 0.73 base.  He then partially
  // closes this position, redeeming 25 bonds for 0.36 base. As a result, he has 25
  // bonds left with a total cost of 0.37 base.
  const { contract, readHyperdrive, network } = setupReadHyperdrive();

  contract.stubRead({
    functionName: "getPoolConfig",
    value: simplePoolConfig30Days,
  });

  const events = [
    {
      eventName: "OpenShort",
      blockNumber: 1n,
      args: {
        extraData: "0x",
        trader: BOB,
        assetId: 1n,
        maturityTime: 1716336000n,
        amount: dnum.from("0.725310333032516405", 18)[0],
        vaultSharePrice: dnum.from("0.721996107012129147", 18)[0],
        asBase: true,
        baseProceeds: dnum.from("49.288354060447513457", 18)[0],
        bondAmount: dnum.from("50", 18)[0],
      },
    },
    {
      eventName: "CloseShort",
      blockNumber: 2n,
      args: {
        extraData: "0x",
        trader: BOB,
        destination: BOB,
        assetId: 1n,
        maturityTime: 1716336000n,
        amount: dnum.from("0.357390566309610627", 18)[0],
        vaultSharePrice: dnum.from("0.355730805024955393", 18)[0],
        asBase: true,
        basePayment: dnum.from("24.651318786405479294", 18)[0],
        bondAmount: dnum.from("25", 18)[0],
      },
    },
  ] as const;

  contract.stubEvents("OpenShort", { filter: { trader: BOB } }, [events[0]]);
  contract.stubEvents("CloseShort", { filter: { trader: BOB } }, [events[1]]);

  network.stubGetBlock({ value: { timestamp: 123456789n, blockNumber: 5n } });
  const value = await readHyperdrive.getOpenShorts({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      bondAmount: dnum.from("25", 18)[0],
      baseAmountPaid: dnum.from("0.367919766722905778", 18)[0],
      baseProceeds: dnum.from("24.637035274042034163", 18)[0],
      checkpointTime: 123454800n,
      hyperdriveAddress: "0x0000000000000000000000000000000000000000",
      fixedRatePaid: dnum.from("0.179245221000329770", 18)[0],
      maturity: 1716336000n,
      openedTimestamp: 123456789n,
    },
  ]);
});

test("getOpenShorts should account for shorts fully closed to base", async () => {
  // Description:
  // Bob opens up a short position, then completely closes this position, As a
  // result, he no longer has any open short positions.
  const { contract, readHyperdrive, network } = setupReadHyperdrive();

  contract.stubRead({
    functionName: "getPoolConfig",
    value: simplePoolConfig30Days,
  });

  const events = [
    {
      eventName: "OpenShort",
      blockNumber: 1n,
      args: {
        extraData: "0x",
        trader: BOB,
        assetId: 1n,
        maturityTime: 1716336000n,
        amount: dnum.from("0.725310333032516405", 18)[0],
        vaultSharePrice: dnum.from("0.721996107012129147", 18)[0],
        asBase: true,
        baseProceeds: dnum.from("49.288354060447513457", 18)[0],
        bondAmount: dnum.from("50", 18)[0],
      },
    },
    {
      eventName: "CloseShort",
      blockNumber: 2n,
      args: {
        extraData: "0x",
        trader: BOB,
        destination: BOB,
        assetId: 1n,
        maturityTime: 1716336000n,
        amount: dnum.from("0.357390566309610627", 18)[0],
        vaultSharePrice: dnum.from("0.355730805024955393", 18)[0],
        asBase: true,
        basePayment: dnum.from("24.651318786405479294", 18)[0],
        bondAmount: dnum.from("50", 18)[0],
      },
    },
  ] as const;

  contract.stubEvents("OpenShort", { filter: { trader: BOB } }, [events[0]]);
  contract.stubEvents("CloseShort", { filter: { trader: BOB } }, [events[1]]);

  network.stubGetBlock({ value: { timestamp: 123456789n, blockNumber: 5n } });
  const value = await readHyperdrive.getOpenShorts({ account: BOB });

  expect(value).toEqual([]);
});

test("getOpenShorts should account for shorts partially closed to shares", async () => {
  // Description:
  // Bob shorts 50 bonds for a total cost of 0.73 base.  He then partially
  // closes this position, redeeming 25 bonds for 0.36 shares. As a result, he
  // has 25 bonds left with a total cost of 0.37 base.
  const { contract, readHyperdrive, network } = setupReadHyperdrive();

  contract.stubRead({
    functionName: "getPoolConfig",
    value: simplePoolConfig30Days,
  });

  const events = [
    {
      eventName: "OpenShort",
      blockNumber: 1n,
      args: {
        extraData: "0x",
        trader: BOB,
        assetId: 1n,
        maturityTime: 1716336000n,
        amount: dnum.from("0.725310333032516405", 18)[0],
        vaultSharePrice: dnum.from("1.004590365499", 18)[0],
        asBase: true,
        baseProceeds: dnum.from("49.288354060447513457", 18)[0],
        bondAmount: dnum.from("50", 18)[0],
      },
    },
    {
      eventName: "CloseShort",
      blockNumber: 2n,
      args: {
        extraData: "0x",
        trader: BOB,
        destination: BOB,
        assetId: 1n,
        maturityTime: 1716336000n,
        amount: dnum.from("0.355730805024955393", 18)[0],
        vaultSharePrice: dnum.from("1.004665778901", 18)[0],
        asBase: false,
        basePayment: dnum.from("24.651318786405479294", 18)[0],
        bondAmount: dnum.from("25", 18)[0],
      },
    },
  ] as const;

  contract.stubEvents("OpenShort", { filter: { trader: BOB } }, [events[0]]);
  contract.stubEvents("CloseShort", { filter: { trader: BOB } }, [events[1]]);

  network.stubGetBlock({ value: { timestamp: 123456789n, blockNumber: 5n } });
  const value = await readHyperdrive.getOpenShorts({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      bondAmount: dnum.from("25", 18)[0],
      baseAmountPaid: dnum.from("0.367919766723039831", 18)[0],
      baseProceeds: dnum.from("24.637035274042034163", 18)[0],
      checkpointTime: 123454800n,
      hyperdriveAddress: "0x0000000000000000000000000000000000000000",
      fixedRatePaid: dnum.from("0.179245221000329770", 18)[0],
      maturity: 1716336000n,
      openedTimestamp: 123456789n,
    },
  ]);
});

test("getOpenShorts should account for shorts fully closed to shares", async () => {
  // Description:
  // Bob opens up a short position, then completely closes this position, As a
  // result, he no longer has any open short positions.

  const { contract, readHyperdrive, network } = setupReadHyperdrive();

  contract.stubRead({
    functionName: "getPoolConfig",
    value: simplePoolConfig30Days,
  });
  const events = [
    {
      eventName: "OpenShort",
      blockNumber: 1n,
      args: {
        extraData: "0x",
        trader: BOB,
        assetId: 1n,
        maturityTime: 1716336000n,
        amount: dnum.from("0.725310333032516405", 18)[0],
        vaultSharePrice: dnum.from("1.004590365499", 18)[0],
        asBase: true,
        baseProceeds: dnum.from("49.288354060447513457", 18)[0],
        bondAmount: dnum.from("50", 18)[0],
      },
    },
    {
      eventName: "CloseShort",
      blockNumber: 2n,
      args: {
        extraData: "0x",
        trader: BOB,
        destination: BOB,
        assetId: 1n,
        maturityTime: 1716336000n,
        vaultSharePrice: dnum.from("1.004665778901", 18)[0],
        amount: dnum.from("0.355730805024955393", 18)[0],
        asBase: false,
        basePayment: dnum.from("24.651318786405479294", 18)[0],
        bondAmount: dnum.from("50", 18)[0],
      },
    },
  ] as const;

  contract.stubEvents("OpenShort", { filter: { trader: BOB } }, [events[0]]);
  contract.stubEvents("CloseShort", { filter: { trader: BOB } }, [events[1]]);

  network.stubGetBlock({ value: { timestamp: 123456789n, blockNumber: 5n } });
  const value = await readHyperdrive.getOpenShorts({ account: BOB });

  expect(value).toEqual([]);
});

test("getOpenShorts should handle when user fully closes then re-opens a position in the same checkpoint", async () => {
  // Description:
  // Bob opens a Short, then fully closes it at a loss. Then he re-opens a short
  // in the same checkpoint, resulting in a single position with new accounting
  // (ie: the previous loss is not factored in).

  const { contract, network, readHyperdrive } = setupReadHyperdrive();
  contract.stubRead({
    functionName: "getPoolConfig",
    value: simplePoolConfig30Days,
  });
  // pool info to get the price of shares at the time he closes the short
  contract.stubRead({
    functionName: "getPoolInfo",
    value: { ...simplePoolInfo, vaultSharePrice: dnum.from("1.1", 18)[0] },
    options: { blockNumber: 5n },
  });

  // Stub the timestamp so getOpenShorts can construct the checkpoint id
  network.stubGetBlock({
    value: {
      timestamp: 123456789n,
      // this blockNumber is unused, but setting this to 3n, as there should be
      // 3 blocks in this test flow
      blockNumber: 3n,
    },
  });

  const events = [
    {
      eventName: "OpenShort",
      blockNumber: 1n,
      args: {
        extraData: "0x",
        trader: BOB,
        assetId: 1n,
        maturityTime: 1716336000n,
        amount: dnum.from("0.725310333032516405", 18)[0],
        vaultSharePrice: dnum.from("1.004590365499", 18)[0],
        asBase: true,
        baseProceeds: dnum.from("49.288354060447513457", 18)[0],
        bondAmount: dnum.from("50", 18)[0],
      },
    },
    {
      eventName: "CloseShort",
      blockNumber: 2n,
      args: {
        extraData: "0x",
        trader: BOB,
        destination: BOB,
        assetId: 1n,
        maturityTime: 1716336000n,
        amount: dnum.from("0.355730805024955393", 18)[0],
        vaultSharePrice: dnum.from("1.004665778901", 18)[0],
        asBase: false,
        basePayment: dnum.from("24.651318786405479294", 18)[0],
        bondAmount: dnum.from("50", 18)[0],
      },
    },
    {
      eventName: "OpenShort",
      blockNumber: 3n,
      args: {
        extraData: "0x",
        trader: BOB,
        assetId: 1n,
        maturityTime: 1716336000n,
        amount: dnum.from("0.725310333032516405", 18)[0],
        vaultSharePrice: dnum.from("1.004590365499", 18)[0],
        asBase: true,
        baseProceeds: dnum.from("49.288354060447513457", 18)[0],
        bondAmount: dnum.from("50", 18)[0],
      },
    },
  ] as const;

  contract.stubEvents("OpenShort", { filter: { trader: BOB } }, [
    events[0],
    events[2],
  ]);

  contract.stubEvents("CloseShort", { filter: { trader: BOB } }, [events[1]]);

  const value = await readHyperdrive.getOpenShorts({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      baseAmountPaid: dnum.from("0.725310333032516405", 18)[0],
      bondAmount: dnum.from("50", 18)[0],
      baseProceeds: dnum.from("49.288354060447513457", 18)[0],
      fixedRatePaid: dnum.from("0.175667439018216348", 18)[0],
      maturity: 1716336000n,
      checkpointTime: 123454800n,
      openedTimestamp: 123456789n,
      hyperdriveAddress: readHyperdrive.contract.address,
    },
  ]);
});

test("getClosedShorts should account for shorts closed to base", async () => {
  // Description:
  // Bob completely closes his position, redeeming 100 shorted bonds for 2 base.
  const { contract, readHyperdrive, network } = setupReadHyperdrive();
  const eventData =
    "0x0200000000000000000000000000000000000000000000000000000065d76f800000000000000000000000000000000000000000000000056bc75e2d63100000";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);

  contract.stubRead({
    functionName: "getPoolConfig",
    value: simplePoolConfig7Days,
  });

  contract.stubEvents("CloseShort", { filter: { trader: BOB } }, [
    {
      eventName: "CloseShort",
      args: {
        extraData: "0x",
        assetId: 1n,
        asBase: true,
        amount: dnum.from("2", 18)[0], // closed out to base
        vaultSharePrice: dnum.from("1.8", 18)[0], // did not close out to shares
        bondAmount: dnum.from("100", 18)[0],
        maturityTime: timestamp,
        trader: BOB,
        destination: BOB,
        basePayment: dnum.from("2", 18)[0], // did not close out to base
      },
    },
  ]);

  network.stubGetBlock({ value: { timestamp: 123456789n, blockNumber: 5n } });

  const value = await readHyperdrive.getClosedShorts({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      baseAmountReceived: dnum.from("2", 18)[0],
      bondAmount: dnum.from("100", 18)[0],
      checkpointTime: 123454800n,
      closedTimestamp: 123456789n,
      hyperdriveAddress: "0x0000000000000000000000000000000000000000",
      maturity: 1708617600n,
    },
  ]);
});

test("getClosedShorts should account for shorts closed to shares", async () => {
  // Description:
  // Bob completely closes his position, redeeming 100 shorted bonds for 1.1 shares.
  // Shares are worth 1.1 base at the time he closes, therefore his closed position
  // is valued at 1.21 base.
  const { contract, readHyperdrive, network } = setupReadHyperdrive();
  const eventData =
    "0x0200000000000000000000000000000000000000000000000000000065d76f800000000000000000000000000000000000000000000000056bc75e2d63100000";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);

  contract.stubRead({
    functionName: "getPoolConfig",
    value: simplePoolConfig7Days,
  });

  contract.stubEvents("CloseShort", { filter: { trader: BOB } }, [
    {
      eventName: "CloseShort",
      blockNumber: 5n,
      args: {
        extraData: "0x",
        assetId: 1n,
        asBase: false,
        vaultSharePrice: dnum.from("1.1", 18)[0],
        amount: dnum.from("1.1", 18)[0], // closed out to shares
        bondAmount: dnum.from("100", 18)[0],
        maturityTime: timestamp,
        trader: BOB,
        destination: BOB,
        basePayment: dnum.from("1.21", 18)[0],
      },
    },
  ]);

  network.stubGetBlock({ value: { timestamp: 123456789n, blockNumber: 5n } });

  const value = await readHyperdrive.getClosedShorts({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      baseAmountReceived: dnum.from("1.21", 18)[0],
      bondAmount: dnum.from("100", 18)[0],
      checkpointTime: 123454800n,
      closedTimestamp: 123456789n,
      hyperdriveAddress: "0x0000000000000000000000000000000000000000",
      maturity: 1708617600n,
    },
  ]);
});

test("getOpenLpPosition should return zero when a position is fully closed", async () => {
  // Description:
  // Bob opens up an lp position, receiving 498 LP shares, depositing 500 base.
  // Bob then closes all of his 498 LP shares, receiving 499 base (he lost
  // 1 base on this position) Bob is left with 0 LP shares and 0 base paid in his
  // current LP position.

  const { contract, readHyperdrive, network } = setupReadHyperdrive();
  contract.stubRead({
    functionName: "getPoolInfo",
    value: simplePoolInfo,
  });
  contract.stubSimulateWrite("removeLiquidity", {
    proceeds: dnum.from("100", 18)[0],
    withdrawalShares: 0n,
  });
  network.stubGetBlock({ value: { timestamp: 123456789n, blockNumber: 175n } });
  contract.stubEvents("AddLiquidity", { filter: { provider: BOB } }, [
    {
      eventName: "AddLiquidity",
      blockNumber: 174n,
      args: {
        extraData: "0x",
        asBase: true,
        amount: dnum.from("500", 18)[0],
        lpAmount: dnum.from("498", 18)[0],
        lpSharePrice: dnum.from("1.000000590811771717", 18)[0],
        provider: "0x020a898437E9c9DCdF3c2ffdDB94E759C0DAdFB6",
        vaultSharePrice: dnum.from("498.570512905658351934", 18)[0],
      },
    },
  ]);

  contract.stubEvents("RemoveLiquidity", { filter: { provider: BOB } }, [
    {
      eventName: "RemoveLiquidity",
      blockNumber: 175n,
      args: {
        extraData: "0x",
        asBase: true,
        amount: dnum.from("499", 18)[0],
        lpAmount: dnum.from("498", 18)[0],
        lpSharePrice: dnum.from("1.002867781011873985", 18)[0],
        provider: "0x020a898437E9c9DCdF3c2ffdDB94E759C0DAdFB6",
        vaultSharePrice: dnum.from("498.567723245858722697", 18)[0],
        withdrawalShareAmount: 0n,
        destination: BOB,
      },
    },
  ]);

  const value = await readHyperdrive.getOpenLpPosition({ account: BOB });
  expect(value).toEqual({
    lpShareBalance: dnum.from("0", 18)[0],
    baseAmountPaid: dnum.from("0", 18)[0],
    baseValue: dnum.from("0", 18)[0],
    sharesValue: dnum.from("0", 18)[0],
  });
});

test("getOpenLpPosition should return the current lpShareBalance and baseAmountPaid", async () => {
  // Description:
  // Bob opens up an lp position, receiving 498 LP shares, depositing 500 base.
  // Bob then closes his entire position of 498 LP shares, receiving 499 base
  // (he lost 1 base on this position). Then he opens up a new LP position,
  // receiving 99 LP shares, depositing 100 base. Bob now has with 99 LP
  // shares and 100 base paid in his current LP position.

  const { contract, readHyperdrive, network } = setupReadHyperdrive();
  network.stubGetBlock({ value: { timestamp: 123456789n, blockNumber: 175n } });
  contract.stubSimulateWrite("removeLiquidity", {
    proceeds: dnum.from("100", 18)[0],
    withdrawalShares: 0n,
  });
  contract.stubRead({
    functionName: "getPoolInfo",
    value: simplePoolInfo,
  });
  contract.stubEvents("AddLiquidity", { filter: { provider: BOB } }, [
    {
      eventName: "AddLiquidity",
      blockNumber: 174n,
      args: {
        extraData: "0x",
        asBase: true,
        amount: dnum.from("500", 18)[0],
        lpAmount: dnum.from("498", 18)[0],
        lpSharePrice: dnum.from("1.000000590811771717", 18)[0],
        provider: "0x020a898437E9c9DCdF3c2ffdDB94E759C0DAdFB6",
        vaultSharePrice: dnum.from("1.002867171358", 18)[0],
      },
    },
    {
      eventName: "AddLiquidity",
      blockNumber: 176n,
      args: {
        extraData: "0x",
        asBase: true,
        amount: dnum.from("100", 18)[0],
        lpAmount: dnum.from("99", 18)[0],
        lpSharePrice: dnum.from("1.000000576182752684", 18)[0],
        provider: "0x020a898437E9c9DCdF3c2ffdDB94E759C0DAdFB6",
        vaultSharePrice: dnum.from("1.002867314461", 18)[0],
      },
    },
  ]);

  contract.stubEvents("RemoveLiquidity", { filter: { provider: BOB } }, [
    {
      eventName: "RemoveLiquidity",
      blockNumber: 175n,
      args: {
        extraData: "0x",
        asBase: true,
        amount: dnum.from("499", 18)[0],
        lpAmount: dnum.from("498", 18)[0],
        lpSharePrice: dnum.from("1.002867781011873985", 18)[0],
        provider: "0x020a898437E9c9DCdF3c2ffdDB94E759C0DAdFB6",
        vaultSharePrice: dnum.from("1.0008670371827", 18)[0],
        withdrawalShareAmount: 0n,
        destination: BOB,
      },
    },
  ]);

  const value = await readHyperdrive.getOpenLpPosition({ account: BOB });
  expect(value).toEqual({
    lpShareBalance: dnum.from("99", 18)[0],
    baseAmountPaid: dnum.from("100", 18)[0],
    baseValue: dnum.from("100", 18)[0],
    sharesValue: dnum.from("100", 18)[0],
  });
});

test("getClosedLpShares should account for LP shares closed to base", async () => {
  // Description:
  // Bob completely closes his LP position of 5 LP shares and receives back
  // base.
  const { contract, readHyperdrive, network } = setupReadHyperdrive();

  contract.stubEvents("RemoveLiquidity", { filter: { provider: BOB } }, [
    {
      eventName: "RemoveLiquidity",
      blockNumber: 5n,
      args: {
        extraData: "0x",
        asBase: true,
        amount: dnum.from("10", 18)[0],
        vaultSharePrice: dnum.from("9", 18)[0],
        provider: BOB,
        withdrawalShareAmount: 0n,
        lpAmount: dnum.from("5", 18)[0],
        lpSharePrice: dnum.from("2", 18)[0],
        destination: BOB,
      },
    },
  ]);

  network.stubGetBlock({ value: { timestamp: 123456789n, blockNumber: 5n } });

  const closedLpShares = await readHyperdrive.getClosedLpShares({
    account: BOB,
  });
  expect(closedLpShares).toEqual([
    {
      lpAmount: dnum.from("5", 18)[0],
      baseAmount: dnum.from("10", 18)[0],
      lpSharePrice: dnum.from("2", 18)[0],
      withdrawalShareAmount: 0n,
      closedTimestamp: 123456789n,
    },
  ]);
});

test("getClosedLpShares should account for LP shares closed to vault shares", async () => {
  // Description:
  // Bob completely closes his LP position of 5 LP shares and receives back
  // shares.
  const { contract, readHyperdrive, network } = setupReadHyperdrive();

  contract.stubEvents("RemoveLiquidity", { filter: { provider: BOB } }, [
    {
      eventName: "RemoveLiquidity",
      blockNumber: 5n,
      args: {
        extraData: "0x",
        asBase: false,
        amount: dnum.from("9", 18)[0],
        vaultSharePrice: dnum.from("1.1", 18)[0],
        provider: BOB,
        withdrawalShareAmount: 0n,
        lpAmount: dnum.from("5", 18)[0],
        lpSharePrice: dnum.from("2", 18)[0],
        destination: BOB,
      },
    },
  ]);

  network.stubGetBlock({ value: { timestamp: 123456789n, blockNumber: 5n } });

  const closedLpShares = await readHyperdrive.getClosedLpShares({
    account: BOB,
  });
  expect(closedLpShares).toEqual([
    {
      lpAmount: dnum.from("5", 18)[0],
      baseAmount: dnum.from("9.9", 18)[0],
      withdrawalShareAmount: 0n,
      lpSharePrice: dnum.from("2", 18)[0],
      closedTimestamp: 123456789n,
    },
  ]);
});

test("getRedeemedWithdrawalShares should account for withdrawal shares closed to base", async () => {
  // Description:
  // Bob completely redeems 5 withdrawal shares and receives 10 base.
  const { contract, readHyperdrive, network } = setupReadHyperdrive();

  contract.stubEvents("RedeemWithdrawalShares", { filter: { provider: BOB } }, [
    {
      eventName: "RedeemWithdrawalShares",
      blockNumber: 5n,
      args: {
        extraData: "0x",
        asBase: true,
        amount: dnum.from("10", 18)[0],
        vaultSharePrice: dnum.from("9.8", 18)[0],
        provider: BOB,
        withdrawalShareAmount: dnum.from("5", 18)[0],
        destination: BOB,
      },
    },
  ]);

  network.stubGetBlock({ value: { timestamp: 123456789n, blockNumber: 5n } });

  const redeemedWithdrawalShares =
    await readHyperdrive.getRedeemedWithdrawalShares({
      account: BOB,
    });
  expect(redeemedWithdrawalShares).toEqual([
    {
      hyperdriveAddress: "0x0000000000000000000000000000000000000000",
      baseAmount: dnum.from("10", 18)[0],
      withdrawalShareAmount: dnum.from("5", 18)[0],
      redeemedTimestamp: 123456789n,
    },
  ]);
});
test("getRedeemedWithdrawalShares should account for withdrawal shares closed to vault shares", async () => {
  // Description:
  // Bob completely redeems 5 withdrawal shares and receives 8 shares that are worth 10 base.
  const { contract, readHyperdrive, network } = setupReadHyperdrive();

  contract.stubEvents("RedeemWithdrawalShares", { filter: { provider: BOB } }, [
    {
      eventName: "RedeemWithdrawalShares",
      blockNumber: 5n,
      args: {
        extraData: "0x",
        asBase: false,
        vaultSharePrice: dnum.from("1.25", 18)[0],
        amount: dnum.from("8", 18)[0],
        provider: BOB,
        withdrawalShareAmount: dnum.from("5", 18)[0],
        destination: BOB,
      },
    },
  ]);

  network.stubGetBlock({ value: { timestamp: 123456789n, blockNumber: 5n } });

  const redeemedWithdrawalShares =
    await readHyperdrive.getRedeemedWithdrawalShares({
      account: BOB,
    });
  expect(redeemedWithdrawalShares).toEqual([
    {
      hyperdriveAddress: "0x0000000000000000000000000000000000000000",
      baseAmount: dnum.from("10", 18)[0],
      withdrawalShareAmount: dnum.from("5", 18)[0],
      redeemedTimestamp: 123456789n,
    },
  ]);
});
