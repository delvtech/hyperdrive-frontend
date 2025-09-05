import { ZERO_ADDRESS } from "@delvtech/drift";
import {
  ALICE,
  BOB,
  createStubBlock,
  createStubEvents,
} from "@delvtech/drift/testing";
import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import type { ClosedLong } from "src/exports";
import { hyperdriveAbi } from "src/hyperdrive/abi";
import { decodeAssetFromTransferSingleEventData } from "src/hyperdrive/assetId/decodeAssetFromTransferSingleEventData";
import { MockHyperdrive } from "src/hyperdrive/testing/MockHyperdrive";
import {
  stubPoolConfig30Days,
  stubPoolConfig7Days,
} from "src/hyperdrive/testing/PoolConfig";
import { stubPoolInfo } from "src/hyperdrive/testing/PoolInfo";
import { assert, expect, test } from "vitest";

test("getVersion should return the parsed version of the mock.contract", async () => {
  const mock = new MockHyperdrive();

  mock.contract.onRead("version").resolves("v1.0.14");

  const value = await mock.getVersion();
  expect(value).toEqual({
    major: 1,
    minor: 0,
    patch: 14,
    string: "v1.0.14",
  });
});

// The sdk should return the exact PoolConfig from the mock.contracts. It should not
// do any conversions or transformations, eg: converting seconds to ms,
// formatting bigints, etc..
test("getPoolConfig should return the PoolConfig from the mock.contract as-is", async () => {
  const mock = new MockHyperdrive();

  // stub out the mock.contract call the sdk is going to make
  mock.contract.onRead("getPoolConfig").resolves(stubPoolConfig7Days);

  // The sdk should return the correct data
  const value = await mock.getPoolConfig();
  expect(value).toBe(stubPoolConfig7Days);
});

// The sdk should return the exact PoolInfo from the mock.contracts. It should not do
// any conversions or transformations, eg: converting seconds into ms,
// formatting bigints, etc..
test("getPoolInfo should return the PoolInfo from the mock.contract as-is", async () => {
  const mock = new MockHyperdrive();

  mock.contract.onRead("getPoolInfo").resolves(stubPoolInfo);

  const value = await mock.getPoolInfo();
  expect(value).toBe(stubPoolInfo);
});

// The sdk should return the exact APR from the mock.contracts. It should not do any
// conversions or transformations, eg: formatting bigints, etc..
test("getFixedRate should get the fixed rate as-is", async () => {
  const mock = new MockHyperdrive();

  // These are necessary to stub, but the values won't be used since we stub
  // calculateAPRFromReserves directly
  mock.contract.onRead("getPoolConfig").resolves(stubPoolConfig7Days);
  mock.contract.onRead("getPoolInfo").resolves(stubPoolInfo);

  const value = await mock.getFixedApr();
  expect(value).toBe(50000000000000000n);
});

test("getTradingVolume should get the trading volume in terms of bonds", async () => {
  const mock = new MockHyperdrive();

  mock.contract.onGetEvents("OpenLong").resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "OpenLong",
      events: [
        {
          args: {
            extraData: "0x",
            assetId: 1n,
            amount: parseFixed("1").bigint,
            bondAmount: parseFixed("1.3").bigint,
            maturityTime: 1729209600n,
            vaultSharePrice: 1n,
            asBase: false,
            trader: BOB,
          },
        },
        {
          args: {
            extraData: "0x",
            assetId: 2n,
            amount: parseFixed("1").bigint,
            bondAmount: parseFixed("1.4").bigint,
            maturityTime: 1733961600n,
            asBase: false,
            trader: ALICE,
            vaultSharePrice: 0n,
          },
        },
      ],
    }),
  );

  mock.contract.onGetEvents("CloseLong").resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "CloseLong",
      events: [
        {
          args: {
            extraData: "0x",
            assetId: 1n,
            maturityTime: 123456789n,
            trader: BOB,
            destination: BOB,
            // received back 1 base
            asBase: true,
            amount: parseFixed("1").bigint,
            vaultSharePrice: 0n,
            // closed out 0.9 bonds
            bondAmount: parseFixed("0.9").bigint,
          },
        },
      ],
    }),
  );

  mock.contract.onGetEvents("OpenShort").resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "OpenShort",
      events: [
        {
          args: {
            extraData: "0x",
            assetId: 3n,
            amount: parseFixed("1").bigint,
            bondAmount: parseFixed("100").bigint,
            maturityTime: 1729296000n,
            vaultSharePrice: 1n,
            asBase: false,
            baseProceeds: parseFixed("100").bigint,
            trader: BOB,
          },
        },
        {
          args: {
            extraData: "0x",
            assetId: 4n,
            amount: parseFixed("2").bigint,
            bondAmount: parseFixed("190").bigint,
            maturityTime: 1729296000n,
            vaultSharePrice: 1n,
            asBase: false,
            baseProceeds: parseFixed("190").bigint,
            trader: BOB,
          },
        },
      ],
    }),
  );

  mock.contract.onGetEvents("CloseShort").resolves([]);

  const value = await mock.getTradingVolume();

  expect(value).toEqual({
    shortVolume: parseFixed("290").bigint, // sum of bondAmount in short events
    longVolume: parseFixed("3.6").bigint, // sum of bondAmount in long events
    totalVolume: parseFixed("293.6").bigint,
  });
});

test("getShortAccruedYield should return the amount of yield a non-mature position has earned", async () => {
  const mock = new MockHyperdrive();

  mock.drift.onGetBlock().resolves(createStubBlock({ timestamp: 100n }));

  mock.contract.onRead("getPoolConfig").resolves({
    ...stubPoolConfig7Days,
    positionDuration: 86400n, // one day in seconds
    checkpointDuration: 86400n, // one day in seconds
  });

  // The pool info gives us the current price
  mock.contract.onRead("getPoolInfo").resolves({
    ...stubPoolInfo,
    vaultSharePrice: parseFixed("1.01").bigint,
  });

  // The checkpoint gives us the price when the bond was opened
  mock.contract.onRead("getCheckpoint").resolves({
    vaultSharePrice: parseFixed("1.008").bigint,
    weightedSpotPrice: 0n,
    lastWeightedSpotPriceUpdateTime: 0n,
  });

  const accruedYield = await mock.getShortAccruedYield({
    checkpointTime: 0n,
    bondAmount: parseFixed("100").bigint,
  });

  // If you opened a short position on 100 bonds at a previous checkpoint price
  // of 1.008 and the current price is 1.01, your accrued profit would
  // be 0.20.
  expect(accruedYield).toEqual(parseFixed("0.20").bigint);
});

test("getShortAccruedYield should return the amount of yield a mature position has earned", async () => {
  const mock = new MockHyperdrive();

  mock.contract.onRead("getPoolConfig").resolves({
    ...stubPoolConfig7Days,
    positionDuration: 86400n, // one day in seconds
    checkpointDuration: 86400n, // one day in seconds
  });

  // This checkpoint gives us the price when the short was opened
  mock.contract.onRead("getCheckpoint", { _checkpointTime: 1n }).resolves({
    vaultSharePrice: parseFixed("1.008").bigint,
    weightedSpotPrice: 0n,
    lastWeightedSpotPriceUpdateTime: 0n,
  });

  // This checkpoint gives us the price when the shorts matured
  mock.contract.onRead("getCheckpoint", { _checkpointTime: 86401n }).resolves({
    vaultSharePrice: parseFixed("1.01").bigint,
    weightedSpotPrice: 0n,
    lastWeightedSpotPriceUpdateTime: 0n,
  });

  const accruedYield = await mock.getShortAccruedYield({
    checkpointTime: 1n,
    bondAmount: parseFixed("100").bigint,
  });

  // If you opened a short position on 100 bonds at a previous checkpoint price
  // of 1.008 and the price was 1.01 at maturity, your accrued profit would
  // be 0.20.
  expect(accruedYield).toEqual(parseFixed("0.20").bigint);
});

test("getCheckpointEvents should return an array of CheckpointEvents", async () => {
  const mock = new MockHyperdrive();
  const checkPointEvents = createStubEvents({
    abi: hyperdriveAbi,
    eventName: "CreateCheckpoint",
    events: [
      {
        args: {
          vaultSharePrice: 423890n,
          checkpointVaultSharePrice: 423890n,
          checkpointTime: 1699480800n,
          lpSharePrice: 1000276463406900050n,
          maturedLongs: 1010694n,
          maturedShorts: 0n,
        },
      },
      {
        args: {
          vaultSharePrice: 1000378348050038939n,
          checkpointVaultSharePrice: 1000378348050038939n,
          checkpointTime: 1729299000n,
          lpSharePrice: 80120n,
          maturedLongs: 923162n,
          maturedShorts: 230904n,
        },
      },
    ],
  });
  mock.contract.onGetEvents("CreateCheckpoint").resolves(checkPointEvents);

  const events = await mock.getCheckpointEvents();

  expect(events).toEqual(checkPointEvents);
});

// opened with base
test("getOpenLongs should account for longs opened with base", async () => {
  // Description:
  // Bob opens up a long position over 2 txs in the same checkpoint, for a total
  // cost 2 base, and receiving 2.7 bonds. As a result, he should now have
  // an open position with the 2.7 bonds and a total cost of 2 base.

  const mock = new MockHyperdrive();

  const eventData =
    "0x0100000000000000000000000000000000000000000000000000000065d65640000000000000000000000000000000000000000000000001bc82c3277b2dc665";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);
  mock.contract.onGetEvents("OpenLong", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "OpenLong",
      events: [
        {
          args: {
            extraData: "0x",
            assetId: 1n,
            // paid for in base
            amount: parseFixed("1").bigint,
            vaultSharePrice: parseFixed("1.1").bigint,
            // received bonds
            bondAmount: parseFixed("1.3").bigint,
            maturityTime: timestamp,
            asBase: true,
            trader: BOB,
          },
        },
        {
          args: {
            extraData: "0x",
            assetId: 1n,
            // paid for in base
            amount: parseFixed("1").bigint,
            vaultSharePrice: 1n,
            // received bonds
            bondAmount: parseFixed("1.4").bigint,
            maturityTime: timestamp,
            asBase: true,
            trader: BOB,
          },
        },
      ],
    }),
  );
  mock.contract
    .onGetEvents("CloseLong", { filter: { trader: BOB } })
    .resolves([]);

  const value = await mock.getOpenLongs({ account: BOB });

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

  const mock = new MockHyperdrive();

  const eventData =
    "0x0100000000000000000000000000000000000000000000000000000065d65640000000000000000000000000000000000000000000000001bc82c3277b2dc665";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);
  mock.contract.onGetEvents("OpenLong", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "OpenLong",
      events: [
        {
          args: {
            extraData: "0x",
            assetId: 1n,
            // paid for in shares
            vaultSharePrice: parseFixed("1.15").bigint,
            amount: parseFixed("1").bigint,
            // received bonds
            bondAmount: parseFixed("1.3").bigint,
            maturityTime: timestamp,
            asBase: false,
            trader: BOB,
          },
        },
        {
          args: {
            extraData: "0x",
            assetId: 1n,
            // paid for in shares
            vaultSharePrice: parseFixed("1.2").bigint,
            amount: parseFixed("1").bigint,
            // received bonds
            bondAmount: parseFixed("1.4").bigint,
            maturityTime: timestamp,
            asBase: false,
            trader: BOB,
          },
        },
      ],
    }),
  );

  // Bob has not closed the position at all, these are just stubbed out
  mock.contract
    .onGetEvents("CloseLong", { filter: { trader: BOB } })
    .resolves([]);
  const value = await mock.getOpenLongs({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      baseAmountPaid: parseFixed("2.35").bigint, // Bob paid in shares, for the equivalent cost of 2.35 base
      bondAmount: parseFixed("2.7").bigint, // Bob received a total of 2.7 bond
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

  const mock = new MockHyperdrive();

  const eventData =
    "0x0100000000000000000000000000000000000000000000000000000065d65640000000000000000000000000000000000000000000000001bc82c3277b2dc665";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);
  mock.contract.onGetEvents("OpenLong", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "OpenLong",
      events: [
        {
          args: {
            extraData: "0x",
            assetId: 1n,
            // paid for in base
            amount: parseFixed("1").bigint,
            vaultSharePrice: parseFixed("1.1").bigint,

            // received bonds
            bondAmount: parseFixed("1.3").bigint,
            maturityTime: timestamp,
            asBase: true,
            trader: BOB,
          },
        },
        {
          args: {
            extraData: "0x",
            assetId: 1n,
            // paid for in base
            amount: parseFixed("1").bigint,
            vaultSharePrice: parseFixed("1.1").bigint,
            // received bonds
            bondAmount: parseFixed("1.4").bigint,
            maturityTime: timestamp,
            asBase: true,
            trader: BOB,
          },
        },
      ],
    }),
  );
  mock.contract.onGetEvents("CloseLong", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "CloseLong",
      events: [
        {
          args: {
            extraData: "0x",
            assetId: 1n,
            maturityTime: timestamp,
            trader: BOB,
            destination: BOB,

            // received back 1 base
            asBase: true,
            amount: parseFixed("1").bigint,
            vaultSharePrice: parseFixed("1.1").bigint,

            // closed out 0.9 bonds
            bondAmount: parseFixed("0.9").bigint,
          },
        },
      ],
    }),
  );

  // mints
  const value = await mock.getOpenLongs({ account: BOB });

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

  const mock = new MockHyperdrive();

  const eventData =
    "0x0100000000000000000000000000000000000000000000000000000065d65640000000000000000000000000000000000000000000000001bc82c3277b2dc665";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);
  mock.contract.onGetEvents("OpenLong", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "OpenLong",
      events: [
        {
          args: {
            extraData: "0x",
            assetId: 1n,
            // paid for in base
            amount: parseFixed("1").bigint,
            vaultSharePrice: parseFixed("1.1").bigint,

            // received bonds
            bondAmount: parseFixed("1.3").bigint,
            maturityTime: timestamp,
            asBase: true,
            trader: BOB,
          },
        },
        {
          args: {
            extraData: "0x",
            assetId: 1n,
            // paid for in base
            amount: parseFixed("1").bigint,
            vaultSharePrice: parseFixed("1.1").bigint,
            // received bonds
            bondAmount: parseFixed("1.4").bigint,
            maturityTime: timestamp,
            asBase: true,
            trader: BOB,
          },
        },
      ],
    }),
  );
  mock.contract.onGetEvents("CloseLong", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "CloseLong",
      events: [
        {
          args: {
            extraData: "0x",
            assetId: 1n,
            maturityTime: timestamp,
            trader: BOB,
            destination: BOB,

            // received back 1 base
            asBase: true,
            amount: parseFixed("1").bigint,
            vaultSharePrice: parseFixed("1.1").bigint,

            // closed out 0.9 bonds
            bondAmount: parseFixed("0.9").bigint,
          },
        },
      ],
    }),
  );

  mock.contract.onGetEvents("OpenLong", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "OpenLong",
      events: [
        {
          args: {
            extraData: "0x",
            assetId: 1n,
            // paid for in base
            amount: parseFixed("1").bigint,
            vaultSharePrice: parseFixed("1.1").bigint,

            // received bonds
            bondAmount: parseFixed("1.3").bigint,
            maturityTime: timestamp,
            asBase: true,
            trader: BOB,
          },
        },
        {
          args: {
            extraData: "0x",
            assetId: 1n,
            // paid for in base
            amount: parseFixed("1").bigint,
            vaultSharePrice: parseFixed("1.1").bigint,
            // received bonds
            bondAmount: parseFixed("1.4").bigint,
            maturityTime: timestamp,
            asBase: true,
            trader: BOB,
          },
        },
      ],
    }),
  );

  mock.contract.onGetEvents("CloseLong", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "CloseLong",
      events: [
        {
          args: {
            extraData: "0x",
            assetId: 1n,
            maturityTime: timestamp,
            trader: BOB,
            destination: BOB,

            // received back 2.5 base
            asBase: true,
            amount: parseFixed("2.5").bigint,
            vaultSharePrice: parseFixed("1.19").bigint,

            // closed out 2.7 bonds
            bondAmount: parseFixed("2.7").bigint,
          },
        },
      ],
    }),
  );
  const value = await mock.getOpenLongs({ account: BOB });

  expect(value).toEqual([]);
});

test("getOpenLongs should handle when user fully closes then re-opens a position in the same checkpoint", async () => {
  // Description:
  // Bob opens a Long, then fully closes it at a loss. Then he re-opens a long
  // in the same checkpoint, resulting in a single position with new accounting
  // (ie: the previous loss is not factored in).

  const mock = new MockHyperdrive();

  mock.contract.onGetEvents("OpenLong", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "OpenLong",
      events: [
        {
          args: {
            extraData: "0x",
            trader: BOB,
            assetId:
              452312848583266388373324160190187140051835877600158453279131187532625961856n,
            maturityTime: 1715299200n,
            amount: parseFixed("2000").bigint,
            vaultSharePrice: parseFixed("1.0002871459674").bigint,
            asBase: true,
            bondAmount: parseFixed("2020.518819362004558105").bigint,
          },
          blockNumber: 1n,
          data: "0x00000000000000000000000000000000000000000000000000000000663d638000000000000000000000000000000000000000000000006c6b935b8bbd40000000000000000000000000000000000000000000000000006c639ba602f70a9a7f000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000006d8854d90acff06119",
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
            amount: parseFixed("9.0931").bigint,
            vaultSharePrice: parseFixed("1.0003519789758").bigint,
            asBase: true,
            bondAmount: parseFixed("9.196435772384927298").bigint,
          },
          blockNumber: 3n,
          data: "0x00000000000000000000000000000000000000000000000000000000663d63800000000000000000000000000000000000000000000000007e312e45cf1ac0000000000000000000000000000000000000000000000000007e25d062e6d4586900000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000007fa04d9c34b2de42",
          transactionHash:
            "0x5130c7a919f7303343e102020705cfe3db2ab5ca200410d119cef296c4693621",
        } as const,
      ],
    }),
  );

  mock.contract.onGetEvents("CloseLong", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "CloseLong",
      events: [
        {
          args: {
            extraData: "0x",
            trader: BOB,
            destination: BOB,
            assetId:
              452312848583266388373324160190187140051835877600158453279131187532625961856n,
            maturityTime: 1715299200n,
            amount: parseFixed("1998.524066158245200112").bigint,
            vaultSharePrice: parseFixed("1.0002973144644").bigint,
            asBase: true,
            bondAmount: parseFixed("2020.518819362004558105").bigint,
          },
          blockNumber: 2n,
          data: "0x00000000000000000000000000000000000000000000000000000000663d638000000000000000000000000000000000000000000000006c5717c9895f7a40f000000000000000000000000000000000000000000000006c4ed96d6708a25d07000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000006d8854d90acff06119",
          transactionHash:
            "0x8fff6dfc2498356b665542c5517e895dd6c0364e2fa9bf011d373781dad22655",
        },
      ],
    }),
  );

  const value = await mock.getOpenLongs({ account: BOB });

  expect(value).toEqual([
    {
      assetId:
        452312848583266388373324160190187140051835877600158453279131187532625961856n,
      baseAmountPaid: parseFixed("9.0931").bigint,
      bondAmount: parseFixed("9.196435772384927298").bigint,
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

  const mock = new MockHyperdrive();

  const eventData =
    "0x0100000000000000000000000000000000000000000000000000000065d65640000000000000000000000000000000000000000000000001bc82c3277b2dc665";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);
  mock.contract.onGetEvents("OpenLong", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "OpenLong",
      events: [
        {
          args: {
            extraData: "0x",
            assetId: 1n,
            // paid for in base
            asBase: true,
            amount: parseFixed("2").bigint,
            vaultSharePrice: parseFixed("1.1").bigint,
            // received bonds
            bondAmount: parseFixed("2.2").bigint,
            maturityTime: timestamp,
            trader: BOB,
          },
        },
      ],
    }),
  );

  mock.contract.onGetEvents("CloseLong", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "CloseLong",
      events: [
        {
          blockNumber: 5n,
          args: {
            extraData: "0x",
            assetId: 1n,
            maturityTime: timestamp,
            trader: BOB,
            destination: BOB,

            // received back 0.8 shares
            asBase: false,
            amount: parseFixed("0.88").bigint,
            vaultSharePrice: parseFixed("1.1").bigint,

            // closed out 1.1 bonds
            bondAmount: parseFixed("1.1").bigint,
          },
        },
      ],
    }),
  );

  const value = await mock.getOpenLongs({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      baseAmountPaid: parseFixed("1.032").bigint,
      bondAmount: parseFixed("1.1").bigint,
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
  const mock = new MockHyperdrive();

  const eventData =
    "0x0100000000000000000000000000000000000000000000000000000065d65640000000000000000000000000000000000000000000000001bc82c3277b2dc665";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);
  mock.contract.onGetEvents("OpenLong", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "OpenLong",
      events: [
        {
          args: {
            extraData: "0x",
            assetId: 1n,
            // paid for in base
            amount: parseFixed("2").bigint,
            vaultSharePrice: parseFixed("1.1").bigint,

            // received bonds
            bondAmount: parseFixed("2.2").bigint,
            maturityTime: timestamp,
            asBase: true,
            trader: BOB,
          },
        },
      ],
    }),
  );

  mock.contract.onGetEvents("CloseLong", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "CloseLong",
      events: [
        {
          blockNumber: 5n,
          args: {
            extraData: "0x",
            assetId: 1n,
            maturityTime: timestamp,
            trader: BOB,
            destination: BOB,

            // received back 2 shares, and no base
            asBase: false,
            amount: parseFixed("2.2").bigint,
            vaultSharePrice: parseFixed("1.1").bigint,

            // closed out 2.2 bonds
            bondAmount: parseFixed("2.2").bigint,
          },
        },
      ],
    }),
  );

  const value = await mock.getOpenLongs({ account: BOB });

  expect(value).toEqual([]);
});

test("getClosedLongs should account for closing out to base", async () => {
  // Description:
  // Bob closes a long position of 2 bonds and receives back 2.2 base.
  const mock = new MockHyperdrive();
  const eventData =
    "0x0100000000000000000000000000000000000000000000000000000065d65640000000000000000000000000000000000000000000000001bc82c3277b2dc665";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);

  mock.contract.onGetEvents("CloseLong", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "CloseLong",
      events: [
        {
          blockNumber: 5n,
          args: {
            extraData: "0x",
            assetId: 1n,
            maturityTime: timestamp,
            trader: BOB,
            destination: BOB,

            // received back 2.2 base, and no shares
            asBase: true,
            amount: parseFixed("2.2").bigint,
            vaultSharePrice: parseFixed("2.0").bigint,

            // closed out 2.0 bonds
            bondAmount: parseFixed("2.0").bigint,
          },
        },
      ],
    }),
  );
  mock.drift.onGetBlock().resolves(createStubBlock({ timestamp: 123456789n }));

  const value = await mock.getClosedLongs({ account: BOB });
  expect(value).toEqual([
    {
      assetId: 1n,
      baseAmount: parseFixed("2.2").bigint,
      bondAmount: parseFixed("2.0").bigint,
      closedTimestamp: 123456789n,
      maturity: 1708545600n,
    },
  ] satisfies ClosedLong[]);
});

test("getClosedLongs should account for closing out to shares", async () => {
  // Description:
  // Bob closes a long position of 2 bonds and receives back 1.9 shares. Shares
  // are worth 1.1 base at the time he closes, therefore his closed position is
  // valued at 2.09 base.
  const mock = new MockHyperdrive();

  const eventData =
    "0x0100000000000000000000000000000000000000000000000000000065d65640000000000000000000000000000000000000000000000001bc82c3277b2dc665";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);

  mock.contract.onGetEvents("CloseLong", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "CloseLong",
      events: [
        {
          blockNumber: 5n,
          args: {
            extraData: "0x",
            assetId: 1n,
            maturityTime: timestamp,
            trader: BOB,
            destination: BOB,

            // received back 1.9 shares, and no base
            asBase: false,
            vaultSharePrice: parseFixed("1.1").bigint,
            amount: parseFixed("1.9").bigint,

            // closed out 2 bonds
            bondAmount: parseFixed("2.0").bigint,
          },
        },
      ],
    }),
  );

  // getBlock gives us the timestamp of when he closed the position
  mock.drift.onGetBlock().resolves(createStubBlock({ timestamp: 123456789n }));

  const value = await mock.getClosedLongs({ account: BOB });
  expect(value).toEqual([
    {
      assetId: 1n,
      baseAmount: parseFixed("2.09").bigint,
      bondAmount: parseFixed("2.0").bigint,
      closedTimestamp: 123456789n,
      maturity: 1708545600n,
    },
  ] satisfies ClosedLong[]);
});

test("getOpenShorts should account for shorts opened with base", async () => {
  // Description:
  // Bob opens up a short position for 100 bonds over 2 txs in the same
  // checkpoint, for a total cost of around 1.44 base.

  const mock = new MockHyperdrive();

  mock.contract.onRead("getPoolConfig").resolves(stubPoolConfig30Days);
  mock.contract.onGetEvents("OpenShort", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "OpenShort",
      events: [
        {
          blockNumber: 1n,
          args: {
            extraData: "0x",
            trader: BOB,
            assetId: 1n,
            maturityTime: 1716336000n,
            amount: parseFixed("0.725310333032516405").bigint,
            vaultSharePrice: parseFixed("0.721996107012129147").bigint,
            asBase: true,
            baseProceeds: parseFixed("49.288354060447513457").bigint,
            bondAmount: parseFixed("50").bigint,
          },
        },
        {
          blockNumber: 2n,
          args: {
            extraData: "0x",
            trader: BOB,
            assetId: 1n,
            maturityTime: 1716336000n,
            amount: parseFixed("0.72527013345635719").bigint,
            vaultSharePrice: parseFixed("0.721952948135251528").bigint,
            asBase: true,
            baseProceeds: parseFixed("49.288611983218631127").bigint,
            bondAmount: parseFixed("50").bigint,
          },
        },
      ],
    }),
  );

  mock.contract
    .onGetEvents("CloseShort", { filter: { trader: BOB } })
    .resolves([]);

  mock.drift.onGetBlock().resolves(createStubBlock({ timestamp: 1713801432n }));

  const value = await mock.getOpenShorts({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      checkpointTime: 1713798000n,
      baseAmountPaid: parseFixed("1.450580466488873595").bigint,
      bondAmount: parseFixed("100").bigint,
      baseProceeds: parseFixed("98.576966043666144584").bigint,
      fixedRatePaid: parseFixed("0.175635145784387390").bigint,
      hyperdriveAddress: ZERO_ADDRESS,
      maturity: 1716336000n,
      openedTimestamp: 1713801432n,
    },
  ]);
});

test("getOpenShorts should account for shorts opened with shares", async () => {
  // Description:
  // Bob opens up a short position for 100 bonds over 2 txs in the same
  // checkpoint, for a total cost of around 1.44 shares.

  const mock = new MockHyperdrive();

  mock.contract.onRead("getPoolConfig").resolves(stubPoolConfig30Days);
  mock.contract.onGetEvents("OpenShort", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "OpenShort",
      events: [
        {
          blockNumber: 1n,
          args: {
            extraData: "0x",
            trader: BOB,
            assetId: 1n,
            maturityTime: 1716336000n,
            amount: parseFixed("0.721996107012129147").bigint,
            vaultSharePrice: parseFixed("1.004590365499").bigint,
            asBase: false,
            baseProceeds: parseFixed("49.288354060447513457").bigint,
            bondAmount: parseFixed("50").bigint,
          },
        },
        {
          blockNumber: 2n,
          args: {
            extraData: "0x",
            trader: BOB,
            assetId: 1n,
            maturityTime: 1716336000n,
            amount: parseFixed("0.721952948135251528").bigint,
            vaultSharePrice: parseFixed("1.004594738936").bigint,
            asBase: false,
            baseProceeds: parseFixed("49.288611983218631127").bigint,
            bondAmount: parseFixed("50").bigint,
          },
        },
      ],
    }),
  );

  mock.contract
    .onGetEvents("CloseShort", { filter: { trader: BOB } })
    .resolves([]);

  mock.drift.onGetBlock().resolves(createStubBlock({ timestamp: 1713801432n }));

  const value = await mock.getOpenShorts({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      checkpointTime: 1713798000n,
      baseAmountPaid: parseFixed("1.450580466488178492").bigint,
      bondAmount: parseFixed("100").bigint,
      baseProceeds: parseFixed("98.576966043666144584").bigint,
      fixedRatePaid: parseFixed("0.175635145784387390").bigint,
      hyperdriveAddress: ZERO_ADDRESS,
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
  const mock = new MockHyperdrive();

  mock.contract.onRead("getPoolConfig").resolves(stubPoolConfig30Days);

  mock.contract.onGetEvents("OpenShort", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "OpenShort",
      events: [
        {
          blockNumber: 1n,
          args: {
            extraData: "0x",
            trader: BOB,
            assetId: 1n,
            maturityTime: 1716336000n,
            amount: parseFixed("0.725310333032516405").bigint,
            vaultSharePrice: parseFixed("0.721996107012129147").bigint,
            asBase: true,
            baseProceeds: parseFixed("49.288354060447513457").bigint,
            bondAmount: parseFixed("50").bigint,
          },
        },
      ],
    }),
  );
  mock.contract.onGetEvents("CloseShort", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "CloseShort",
      events: [
        {
          blockNumber: 2n,
          args: {
            extraData: "0x",
            trader: BOB,
            destination: BOB,
            assetId: 1n,
            maturityTime: 1716336000n,
            amount: parseFixed("0.357390566309610627").bigint,
            vaultSharePrice: parseFixed("0.355730805024955393").bigint,
            asBase: true,
            basePayment: parseFixed("24.651318786405479294").bigint,
            bondAmount: parseFixed("25").bigint,
          },
        },
      ],
    }),
  );

  mock.drift.onGetBlock().resolves(createStubBlock({ timestamp: 123456789n }));
  const value = await mock.getOpenShorts({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      bondAmount: parseFixed("25").bigint,
      baseAmountPaid: parseFixed("0.367919766722905778").bigint,
      baseProceeds: parseFixed("24.637035274042034163").bigint,
      checkpointTime: 123454800n,
      hyperdriveAddress: ZERO_ADDRESS,
      fixedRatePaid: parseFixed("0.179245221000329770").bigint,
      maturity: 1716336000n,
      openedTimestamp: 123456789n,
    },
  ]);
});

test("getOpenShorts should account for shorts fully closed to base", async () => {
  // Description:
  // Bob opens up a short position, then completely closes this position, As a
  // result, he no longer has any open short positions.
  const mock = new MockHyperdrive();

  mock.contract.onRead("getPoolConfig").resolves(stubPoolConfig30Days);

  mock.contract.onGetEvents("OpenShort", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "OpenShort",
      events: [
        {
          blockNumber: 1n,
          args: {
            extraData: "0x",
            trader: BOB,
            assetId: 1n,
            maturityTime: 1716336000n,
            amount: parseFixed("0.725310333032516405").bigint,
            vaultSharePrice: parseFixed("0.721996107012129147").bigint,
            asBase: true,
            baseProceeds: parseFixed("49.288354060447513457").bigint,
            bondAmount: parseFixed("50").bigint,
          },
        },
      ],
    }),
  );
  mock.contract.onGetEvents("CloseShort", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "CloseShort",
      events: [
        {
          blockNumber: 2n,
          args: {
            extraData: "0x",
            trader: BOB,
            destination: BOB,
            assetId: 1n,
            maturityTime: 1716336000n,
            amount: parseFixed("0.357390566309610627").bigint,
            vaultSharePrice: parseFixed("0.355730805024955393").bigint,
            asBase: true,
            basePayment: parseFixed("24.651318786405479294").bigint,
            bondAmount: parseFixed("50").bigint,
          },
        },
      ],
    }),
  );

  const value = await mock.getOpenShorts({ account: BOB });

  expect(value).toEqual([]);
});

test("getOpenShorts should account for shorts partially closed to shares", async () => {
  // Description:
  // Bob shorts 50 bonds for a total cost of 0.73 base.  He then partially
  // closes this position, redeeming 25 bonds for 0.36 shares. As a result, he
  // has 25 bonds left with a total cost of 0.37 base.
  const mock = new MockHyperdrive();

  mock.contract.onRead("getPoolConfig").resolves(stubPoolConfig30Days);

  mock.contract.onGetEvents("OpenShort", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "OpenShort",
      events: [
        {
          blockNumber: 1n,
          args: {
            extraData: "0x",
            trader: BOB,
            assetId: 1n,
            maturityTime: 1716336000n,
            amount: parseFixed("0.725310333032516405").bigint,
            vaultSharePrice: parseFixed("1.004590365499").bigint,
            asBase: true,
            baseProceeds: parseFixed("49.288354060447513457").bigint,
            bondAmount: parseFixed("50").bigint,
          },
        },
      ],
    }),
  );
  mock.contract.onGetEvents("CloseShort", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "CloseShort",
      events: [
        {
          blockNumber: 2n,
          args: {
            extraData: "0x",
            trader: BOB,
            destination: BOB,
            assetId: 1n,
            maturityTime: 1716336000n,
            amount: parseFixed("0.355730805024955393").bigint,
            vaultSharePrice: parseFixed("1.004665778901").bigint,
            asBase: false,
            basePayment: parseFixed("24.651318786405479294").bigint,
            bondAmount: parseFixed("25").bigint,
          },
        },
      ],
    }),
  );

  mock.drift.onGetBlock().resolves(createStubBlock({ timestamp: 123456789n }));
  const value = await mock.getOpenShorts({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      bondAmount: parseFixed("25").bigint,
      baseAmountPaid: parseFixed("0.367919766723039831").bigint,
      baseProceeds: parseFixed("24.637035274042034163").bigint,
      checkpointTime: 123454800n,
      hyperdriveAddress: ZERO_ADDRESS,
      fixedRatePaid: parseFixed("0.179245221000329770").bigint,
      maturity: 1716336000n,
      openedTimestamp: 123456789n,
    },
  ]);
});

test("getOpenShorts should account for shorts fully closed to shares", async () => {
  // Description:
  // Bob opens up a short position, then completely closes this position, As a
  // result, he no longer has any open short positions.

  const mock = new MockHyperdrive();

  mock.contract.onRead("getPoolConfig").resolves(stubPoolConfig30Days);

  mock.contract.onGetEvents("OpenShort", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "OpenShort",
      events: [
        {
          blockNumber: 1n,
          args: {
            extraData: "0x",
            trader: BOB,
            assetId: 1n,
            maturityTime: 1716336000n,
            amount: parseFixed("0.725310333032516405").bigint,
            vaultSharePrice: parseFixed("1.004590365499").bigint,
            asBase: true,
            baseProceeds: parseFixed("49.288354060447513457").bigint,
            bondAmount: parseFixed("50").bigint,
          },
        },
      ],
    }),
  );
  mock.contract.onGetEvents("CloseShort", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "CloseShort",
      events: [
        {
          blockNumber: 2n,
          args: {
            extraData: "0x",
            trader: BOB,
            destination: BOB,
            assetId: 1n,
            maturityTime: 1716336000n,
            vaultSharePrice: parseFixed("1.004665778901").bigint,
            amount: parseFixed("0.355730805024955393").bigint,
            asBase: false,
            basePayment: parseFixed("24.651318786405479294").bigint,
            bondAmount: parseFixed("50").bigint,
          },
        },
      ],
    }),
  );

  const value = await mock.getOpenShorts({ account: BOB });

  expect(value).toEqual([]);
});

test("getOpenShorts should handle when user fully closes then re-opens a position in the same checkpoint", async () => {
  // Description:
  // Bob opens a Short, then fully closes it at a loss. Then he re-opens a short
  // in the same checkpoint, resulting in a single position with new accounting
  // (ie: the previous loss is not factored in).

  const mock = new MockHyperdrive();
  mock.contract.onRead("getPoolConfig").resolves(stubPoolConfig30Days);
  // pool info to get the price of shares at the time he closes the short
  mock.contract
    .onRead("getPoolInfo", {}, { block: 5n })
    .resolves({ ...stubPoolInfo, vaultSharePrice: parseFixed("1.1").bigint });

  // Stub the timestamp so getOpenShorts can construct the checkpoint id
  mock.drift.onGetBlock().resolves(createStubBlock({ timestamp: 123456789n }));

  mock.contract.onGetEvents("OpenShort", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "OpenShort",
      events: [
        {
          blockNumber: 1n,
          args: {
            extraData: "0x",
            trader: BOB,
            assetId: 1n,
            maturityTime: 1716336000n,
            amount: parseFixed("0.725310333032516405").bigint,
            vaultSharePrice: parseFixed("1.004590365499").bigint,
            asBase: true,
            baseProceeds: parseFixed("49.288354060447513457").bigint,
            bondAmount: parseFixed("50").bigint,
          },
        },
        {
          blockNumber: 3n,
          args: {
            extraData: "0x",
            trader: BOB,
            assetId: 1n,
            maturityTime: 1716336000n,
            amount: parseFixed("0.725310333032516405").bigint,
            vaultSharePrice: parseFixed("1.004590365499").bigint,
            asBase: true,
            baseProceeds: parseFixed("49.288354060447513457").bigint,
            bondAmount: parseFixed("50").bigint,
          },
        },
      ],
    }),
  );

  mock.contract.onGetEvents("CloseShort", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "CloseShort",
      events: [
        {
          blockNumber: 2n,
          args: {
            extraData: "0x",
            trader: BOB,
            destination: BOB,
            assetId: 1n,
            maturityTime: 1716336000n,
            amount: parseFixed("0.355730805024955393").bigint,
            vaultSharePrice: parseFixed("1.004665778901").bigint,
            asBase: false,
            basePayment: parseFixed("24.651318786405479294").bigint,
            bondAmount: parseFixed("50").bigint,
          },
        },
      ],
    }),
  );

  const value = await mock.getOpenShorts({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      baseAmountPaid: parseFixed("0.725310333032516405").bigint,
      bondAmount: parseFixed("50").bigint,
      baseProceeds: parseFixed("49.288354060447513457").bigint,
      fixedRatePaid: parseFixed("0.175667439018216348").bigint,
      maturity: 1716336000n,
      checkpointTime: 123454800n,
      openedTimestamp: 123456789n,
      hyperdriveAddress: mock.contract.address,
    },
  ]);
});

test("getShortBondsGivenDeposit & previewOpenShort should align within a given tolerance", async () => {
  const mock = new MockHyperdrive();
  mock.contract.onRead("getPoolConfig").resolves(stubPoolConfig30Days);
  mock.contract.onRead("getPoolInfo").resolves(stubPoolInfo);
  mock.contract.onRead("getCheckpointExposure").resolves(0n);
  mock.contract.onRead("getCheckpoint").resolves({
    vaultSharePrice: parseFixed(1.05).bigint,
    weightedSpotPrice: 0n,
    lastWeightedSpotPriceUpdateTime: 0n,
  });

  const targetDeposit = parseFixed(1.123);
  const tolerance = fixed(1e9);
  const amountOfBondsToShort = await mock.getShortBondsGivenDeposit({
    amountIn: targetDeposit.bigint,
    asBase: true,
    tolerance: tolerance.bigint,
  });
  const { traderDeposit } = await mock.previewOpenShort({
    amountOfBondsToShort,
    asBase: true,
  });

  assert(targetDeposit.absDiff(traderDeposit).lte(tolerance));
});

test("getClosedShorts should account for shorts closed to base", async () => {
  // Description:
  // Bob completely closes his position, redeeming 100 shorted bonds for 2 base.
  const mock = new MockHyperdrive();
  const eventData =
    "0x0200000000000000000000000000000000000000000000000000000065d76f800000000000000000000000000000000000000000000000056bc75e2d63100000";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);

  mock.contract.onRead("getPoolConfig").resolves(stubPoolConfig7Days);

  mock.contract.onGetEvents("CloseShort", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "CloseShort",
      events: [
        {
          args: {
            extraData: "0x",
            assetId: 1n,
            asBase: true,
            amount: parseFixed("2").bigint, // closed out to base
            vaultSharePrice: parseFixed("1.8").bigint, // did not close out to shares
            bondAmount: parseFixed("100").bigint,
            maturityTime: timestamp,
            trader: BOB,
            destination: BOB,
            basePayment: parseFixed("2").bigint, // did not close out to base
          },
        },
      ],
    }),
  );

  mock.drift.onGetBlock().resolves(createStubBlock({ timestamp: 123456789n }));

  const value = await mock.getClosedShorts({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      baseAmountReceived: parseFixed("2").bigint,
      bondAmount: parseFixed("100").bigint,
      checkpointTime: 123454800n,
      closedTimestamp: 123456789n,
      hyperdriveAddress: ZERO_ADDRESS,
      maturity: 1708617600n,
    },
  ]);
});

test("getClosedShorts should account for shorts closed to shares", async () => {
  // Description:
  // Bob completely closes his position, redeeming 100 shorted bonds for 1.1 shares.
  // Shares are worth 1.1 base at the time he closes, therefore his closed position
  // is valued at 1.21 base.
  const mock = new MockHyperdrive();
  const eventData =
    "0x0200000000000000000000000000000000000000000000000000000065d76f800000000000000000000000000000000000000000000000056bc75e2d63100000";
  const { timestamp } = decodeAssetFromTransferSingleEventData(eventData);

  mock.contract.onRead("getPoolConfig").resolves(stubPoolConfig7Days);

  mock.contract.onGetEvents("CloseShort", { filter: { trader: BOB } }).resolves(
    createStubEvents({
      abi: hyperdriveAbi,
      eventName: "CloseShort",
      events: [
        {
          blockNumber: 5n,
          args: {
            extraData: "0x",
            assetId: 1n,
            asBase: false,
            vaultSharePrice: parseFixed("1.1").bigint,
            amount: parseFixed("1.1").bigint, // closed out to shares
            bondAmount: parseFixed("100").bigint,
            maturityTime: timestamp,
            trader: BOB,
            destination: BOB,
            basePayment: parseFixed("1.21").bigint,
          },
        },
      ],
    }),
  );

  mock.drift.onGetBlock().resolves(createStubBlock({ timestamp: 123456789n }));

  const value = await mock.getClosedShorts({ account: BOB });

  expect(value).toEqual([
    {
      assetId: 1n,
      baseAmountReceived: parseFixed("1.21").bigint,
      bondAmount: parseFixed("100").bigint,
      checkpointTime: 123454800n,
      closedTimestamp: 123456789n,
      hyperdriveAddress: ZERO_ADDRESS,
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

  const mock = new MockHyperdrive();
  mock.contract.onRead("getPoolInfo").resolves(stubPoolInfo);
  mock.contract.onSimulateWrite("removeLiquidity").resolves({
    proceeds: parseFixed("100").bigint,
    withdrawalShares: 0n,
  });
  mock.contract
    .onGetEvents("AddLiquidity", { filter: { provider: BOB } })
    .resolves(
      createStubEvents({
        abi: hyperdriveAbi,
        eventName: "AddLiquidity",
        events: [
          {
            blockNumber: 174n,
            args: {
              extraData: "0x",
              asBase: true,
              amount: parseFixed("500").bigint,
              lpAmount: parseFixed("498").bigint,
              lpSharePrice: parseFixed("1.000000590811771717").bigint,
              provider: "0x020a898437E9c9DCdF3c2ffdDB94E759C0DAdFB6",
              vaultSharePrice: parseFixed("498.570512905658351934").bigint,
            },
          },
        ],
      }),
    );

  mock.contract
    .onGetEvents("RemoveLiquidity", { filter: { provider: BOB } })
    .resolves(
      createStubEvents({
        abi: hyperdriveAbi,
        eventName: "RemoveLiquidity",
        events: [
          {
            blockNumber: 175n,
            args: {
              extraData: "0x",
              asBase: true,
              amount: parseFixed("499").bigint,
              lpAmount: parseFixed("498").bigint,
              lpSharePrice: parseFixed("1.002867781011873985").bigint,
              provider: "0x020a898437E9c9DCdF3c2ffdDB94E759C0DAdFB6",
              vaultSharePrice: parseFixed("498.567723245858722697").bigint,
              withdrawalShareAmount: 0n,
              destination: BOB,
            },
          },
        ],
      }),
    );

  const value = await mock.getOpenLpPosition({
    account: BOB,
    asBase: false,
  });
  expect(value).toEqual({
    lpShareBalance: parseFixed("0").bigint,
    baseAmountPaid: parseFixed("0").bigint,
    baseValue: parseFixed("0").bigint,
    sharesValue: parseFixed("0").bigint,
  });
});

test("getOpenLpPosition should return the current lpShareBalance and baseAmountPaid", async () => {
  // Description:
  // Bob opens up an lp position, receiving 498 LP shares, depositing 500 base.
  // Bob then closes his entire position of 498 LP shares, receiving 499 base
  // (he lost 1 base on this position). Then he opens up a new LP position,
  // receiving 99 LP shares, depositing 100 base. Bob now has with 99 LP
  // shares and 100 base paid in his current LP position.

  const mock = new MockHyperdrive();
  mock.contract.onSimulateWrite("removeLiquidity").resolves({
    proceeds: parseFixed("100").bigint,
    withdrawalShares: 0n,
  });
  mock.contract.onRead("getPoolInfo").resolves(stubPoolInfo);
  mock.contract
    .onRead("convertToBase")
    .callsFake(
      async ({ args }) =>
        fixed(args._shareAmount).mul(stubPoolInfo.vaultSharePrice).bigint,
    );
  mock.contract
    .onRead("convertToShares")
    .callsFake(
      async ({ args }) =>
        fixed(args._baseAmount).div(stubPoolInfo.vaultSharePrice).bigint,
    );
  mock.contract
    .onGetEvents("AddLiquidity", { filter: { provider: BOB } })
    .resolves(
      createStubEvents({
        abi: hyperdriveAbi,
        eventName: "AddLiquidity",
        events: [
          {
            blockNumber: 174n,
            args: {
              extraData: "0x",
              asBase: true,
              amount: parseFixed("500").bigint,
              lpAmount: parseFixed("498").bigint,
              lpSharePrice: parseFixed("1.000000590811771717").bigint,
              provider: "0x020a898437E9c9DCdF3c2ffdDB94E759C0DAdFB6",
              vaultSharePrice: parseFixed("1.002867171358").bigint,
            },
          },
          {
            blockNumber: 176n,
            args: {
              extraData: "0x",
              asBase: true,
              amount: parseFixed("100").bigint,
              lpAmount: parseFixed("99").bigint,
              lpSharePrice: parseFixed("1.000000576182752684").bigint,
              provider: "0x020a898437E9c9DCdF3c2ffdDB94E759C0DAdFB6",
              vaultSharePrice: parseFixed("1.002867314461").bigint,
            },
          },
        ],
      }),
    );

  mock.contract
    .onGetEvents("RemoveLiquidity", { filter: { provider: BOB } })
    .resolves(
      createStubEvents({
        abi: hyperdriveAbi,
        eventName: "RemoveLiquidity",
        events: [
          {
            blockNumber: 175n,
            args: {
              extraData: "0x",
              asBase: true,
              amount: parseFixed("499").bigint,
              lpAmount: parseFixed("498").bigint,
              lpSharePrice: parseFixed("1.002867781011873985").bigint,
              provider: "0x020a898437E9c9DCdF3c2ffdDB94E759C0DAdFB6",
              vaultSharePrice: parseFixed("1.0008670371827").bigint,
              withdrawalShareAmount: 0n,
              destination: BOB,
            },
          },
        ],
      }),
    );

  const value = await mock.getOpenLpPosition({
    account: BOB,
    asBase: false,
  });
  expect(value).toEqual({
    lpShareBalance: parseFixed("99").bigint,
    baseAmountPaid: parseFixed("100").bigint,
    baseValue: parseFixed("100").bigint,
    sharesValue: parseFixed("100").bigint,
  });
});

test("getClosedLpShares should account for LP shares closed to base", async () => {
  // Description:
  // Bob completely closes his LP position of 5 LP shares and receives back
  // base.
  const mock = new MockHyperdrive();

  mock.contract
    .onGetEvents("RemoveLiquidity", { filter: { provider: BOB } })
    .resolves(
      createStubEvents({
        abi: hyperdriveAbi,
        eventName: "RemoveLiquidity",
        events: [
          {
            blockNumber: 5n,
            args: {
              extraData: "0x",
              asBase: true,
              amount: parseFixed("10").bigint,
              vaultSharePrice: parseFixed("9").bigint,
              provider: BOB,
              withdrawalShareAmount: 0n,
              lpAmount: parseFixed("5").bigint,
              lpSharePrice: parseFixed("2").bigint,
              destination: BOB,
            },
          },
        ],
      }),
    );

  mock.drift.onGetBlock().resolves(createStubBlock({ timestamp: 123456789n }));

  const closedLpShares = await mock.getClosedLpShares({
    account: BOB,
  });
  expect(closedLpShares).toEqual([
    {
      lpAmount: parseFixed("5").bigint,
      baseAmount: parseFixed("10").bigint,
      lpSharePrice: parseFixed("2").bigint,
      withdrawalShareAmount: 0n,
      closedTimestamp: 123456789n,
    },
  ]);
});

test("getClosedLpShares should account for LP shares closed to vault shares", async () => {
  // Description:
  // Bob completely closes his LP position of 5 LP shares and receives back
  // shares.
  const mock = new MockHyperdrive();

  mock.contract
    .onGetEvents("RemoveLiquidity", { filter: { provider: BOB } })
    .resolves(
      createStubEvents({
        abi: hyperdriveAbi,
        eventName: "RemoveLiquidity",
        events: [
          {
            blockNumber: 5n,
            args: {
              extraData: "0x",
              asBase: false,
              amount: parseFixed("9").bigint,
              vaultSharePrice: parseFixed("1.1").bigint,
              provider: BOB,
              withdrawalShareAmount: 0n,
              lpAmount: parseFixed("5").bigint,
              lpSharePrice: parseFixed("2").bigint,
              destination: BOB,
            },
          },
        ],
      }),
    );

  mock.drift.onGetBlock().resolves(createStubBlock({ timestamp: 123456789n }));

  const closedLpShares = await mock.getClosedLpShares({
    account: BOB,
  });
  expect(closedLpShares).toEqual([
    {
      lpAmount: parseFixed("5").bigint,
      baseAmount: parseFixed("9.9").bigint,
      withdrawalShareAmount: 0n,
      lpSharePrice: parseFixed("2").bigint,
      closedTimestamp: 123456789n,
    },
  ]);
});

test("getRedeemedWithdrawalShares should account for withdrawal shares closed to base", async () => {
  // Description:
  // Bob completely redeems 5 withdrawal shares and receives 10 base.
  const mock = new MockHyperdrive();

  mock.contract
    .onGetEvents("RedeemWithdrawalShares", { filter: { provider: BOB } })
    .resolves(
      createStubEvents({
        abi: hyperdriveAbi,
        eventName: "RedeemWithdrawalShares",
        events: [
          {
            blockNumber: 5n,
            args: {
              extraData: "0x",
              asBase: true,
              amount: parseFixed("10").bigint,
              vaultSharePrice: parseFixed("9.8").bigint,
              provider: BOB,
              withdrawalShareAmount: parseFixed("5").bigint,
              destination: BOB,
            },
          },
        ],
      }),
    );

  mock.drift.onGetBlock().resolves(createStubBlock({ timestamp: 123456789n }));

  const redeemedWithdrawalShares = await mock.getRedeemedWithdrawalShares({
    account: BOB,
  });
  expect(redeemedWithdrawalShares).toEqual([
    {
      hyperdriveAddress: ZERO_ADDRESS,
      baseAmount: parseFixed("10").bigint,
      withdrawalShareAmount: parseFixed("5").bigint,
      redeemedTimestamp: 123456789n,
    },
  ]);
});
test("getRedeemedWithdrawalShares should account for withdrawal shares closed to vault shares", async () => {
  // Description:
  // Bob completely redeems 5 withdrawal shares and receives 8 shares that are worth 10 base.
  const mock = new MockHyperdrive();

  mock.contract
    .onGetEvents("RedeemWithdrawalShares", { filter: { provider: BOB } })
    .resolves(
      createStubEvents({
        abi: hyperdriveAbi,
        eventName: "RedeemWithdrawalShares",
        events: [
          {
            blockNumber: 5n,
            args: {
              extraData: "0x",
              asBase: false,
              vaultSharePrice: parseFixed("1.25").bigint,
              amount: parseFixed("8").bigint,
              provider: BOB,
              withdrawalShareAmount: parseFixed("5").bigint,
              destination: BOB,
            },
          },
        ],
      }),
    );

  mock.drift.onGetBlock().resolves(createStubBlock({ timestamp: 123456789n }));

  const redeemedWithdrawalShares = await mock.getRedeemedWithdrawalShares({
    account: BOB,
  });
  expect(redeemedWithdrawalShares).toEqual([
    {
      hyperdriveAddress: ZERO_ADDRESS,
      baseAmount: parseFixed("10").bigint,
      withdrawalShareAmount: parseFixed("5").bigint,
      redeemedTimestamp: 123456789n,
    },
  ]);
});
