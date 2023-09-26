---
id: "ReadWriteHyperdrive"
title: "Class: ReadWriteHyperdrive"
sidebar_label: "ReadWriteHyperdrive"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`ReadHyperdrive`](ReadHyperdrive.md)

  ↳ **`ReadWriteHyperdrive`**

## Implements

- `IReadWriteHyperdrive`

## Constructors

### constructor

• **new ReadWriteHyperdrive**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `ReadWriteHyperdriveOptions` |

#### Overrides

ReadHyperdrive.constructor

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:225](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L225)

## Methods

### addLiquidity

▸ **addLiquidity**(`«destructured»`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asUnderlying?` | `boolean` |
| › `contribution` | `bigint` |
| › `destination` | \`0x${string}\` |
| › `maxAPR` | `bigint` |
| › `minAPR` | `bigint` |
| › `options?` | [`ContractWriteOptionsWithCallback`](../interfaces/ContractWriteOptionsWithCallback.md) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.addLiquidity

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:369](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L369)

___

### checkpoint

▸ **checkpoint**(`time`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |
| `options?` | [`ContractWriteOptions`](../interfaces/ContractWriteOptions.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

IReadWriteHyperdrive.checkpoint

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:230](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L230)

___

### closeLong

▸ **closeLong**(`«destructured»`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asUnderlying?` | `boolean` |
| › `bondAmountIn` | `bigint` |
| › `destination` | \`0x${string}\` |
| › `long` | [`Long`](../interfaces/Long.md) |
| › `minBaseAmountOut` | `bigint` |
| › `options?` | [`ContractWriteOptionsWithCallback`](../interfaces/ContractWriteOptionsWithCallback.md) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.closeLong

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:311](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L311)

___

### closeShort

▸ **closeShort**(`«destructured»`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asUnderlying?` | `boolean` |
| › `bondAmountIn` | `bigint` |
| › `destination` | \`0x${string}\` |
| › `minBaseAmountOut` | `bigint` |
| › `options?` | [`ContractWriteOptionsWithCallback`](../interfaces/ContractWriteOptionsWithCallback.md) |
| › `short` | `Short` |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.closeShort

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:340](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L340)

___

### getClosedLongs

▸ **getClosedLongs**(`«destructured»`): `Promise`<[`ClosedLong`](../interfaces/ClosedLong.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `account` | \`0x${string}\` |
| › `options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) |

#### Returns

`Promise`<[`ClosedLong`](../interfaces/ClosedLong.md)[]\>

#### Implementation of

IReadWriteHyperdrive.getClosedLongs

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[getClosedLongs](ReadHyperdrive.md#getclosedlongs)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:664](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L664)

___

### getClosedLpShares

▸ **getClosedLpShares**(`«destructured»`): `Promise`<`ClosedLpShares`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `account` | \`0x${string}\` |
| › `options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) |

#### Returns

`Promise`<`ClosedLpShares`[]\>

#### Implementation of

IReadWriteHyperdrive.getClosedLpShares

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[getClosedLpShares](ReadHyperdrive.md#getclosedlpshares)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:819](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L819)

___

### getClosedShorts

▸ **getClosedShorts**(`«destructured»`): `Promise`<`ClosedShort`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `account` | \`0x${string}\` |
| › `options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) |

#### Returns

`Promise`<`ClosedShort`[]\>

#### Implementation of

IReadWriteHyperdrive.getClosedShorts

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[getClosedShorts](ReadHyperdrive.md#getclosedshorts)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:702](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L702)

___

### getFixedRate

▸ **getFixedRate**(`options?`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.getFixedRate

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[getFixedRate](ReadHyperdrive.md#getfixedrate)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:327](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L327)

___

### getLiquidity

▸ **getLiquidity**(`options?`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.getLiquidity

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[getLiquidity](ReadHyperdrive.md#getliquidity)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:346](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L346)

___

### getLongPrice

▸ **getLongPrice**(`options?`): `Promise`<`bigint`\>

Gets the spot price of a long

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) | The read options |

#### Returns

`Promise`<`bigint`\>

the spot price of a long
```ts
  const longPrice = await readHyperdrive.getLongPrice();
```

#### Implementation of

IReadWriteHyperdrive.getLongPrice

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[getLongPrice](ReadHyperdrive.md#getlongprice)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:390](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L390)

___

### getLpShares

▸ **getLpShares**(`«destructured»`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `account` | \`0x${string}\` |
| › `options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.getLpShares

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[getLpShares](ReadHyperdrive.md#getlpshares)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:804](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L804)

___

### getMaxLong

▸ **getMaxLong**(`options?`): `Promise`<{ `formattedMaxBaseIn`: `string` ; `formattedMaxBondsOut`: `string` ; `maxBaseIn`: `bigint` ; `maxBondsOut`: `bigint`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) |

#### Returns

`Promise`<{ `formattedMaxBaseIn`: `string` ; `formattedMaxBondsOut`: `string` ; `maxBaseIn`: `bigint` ; `maxBondsOut`: `bigint`  }\>

#### Implementation of

IReadWriteHyperdrive.getMaxLong

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[getMaxLong](ReadHyperdrive.md#getmaxlong)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:769](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L769)

___

### getMaxShort

▸ **getMaxShort**(`options?`): `Promise`<{ `formatted`: `string` ; `maxBondsOut`: `bigint`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) |

#### Returns

`Promise`<{ `formatted`: `string` ; `maxBondsOut`: `bigint`  }\>

#### Implementation of

IReadWriteHyperdrive.getMaxShort

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[getMaxShort](ReadHyperdrive.md#getmaxshort)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:741](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L741)

___

### getOpenLongs

▸ **getOpenLongs**(`account`): `Promise`<[`Long`](../interfaces/Long.md)[]\>

Gets the active longs opened by a specific user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `Object` | The user's address |
| `account.account` | \`0x${string}\` | - |
| `account.options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) | - |

#### Returns

`Promise`<[`Long`](../interfaces/Long.md)[]\>

the active longs opened by a specific user

#### Implementation of

IReadWriteHyperdrive.getOpenLongs

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[getOpenLongs](ReadHyperdrive.md#getopenlongs)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:434](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L434)

___

### getOpenShorts

▸ **getOpenShorts**(`account`): `Promise`<`OpenShort`[]\>

Gets the active shorts opened by a specific user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `Object` | The user's address |
| `account.account` | \`0x${string}\` | - |
| `account.options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) | - |

#### Returns

`Promise`<`OpenShort`[]\>

the active shorts opened by a specific user

#### Implementation of

IReadWriteHyperdrive.getOpenShorts

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[getOpenShorts](ReadHyperdrive.md#getopenshorts)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:551](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L551)

___

### getPoolConfig

▸ **getPoolConfig**(`options?`): `Promise`<`PoolConfig`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) |

#### Returns

`Promise`<`PoolConfig`\>

#### Implementation of

IReadWriteHyperdrive.getPoolConfig

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[getPoolConfig](ReadHyperdrive.md#getpoolconfig)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:317](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L317)

___

### getPoolInfo

▸ **getPoolInfo**(`options?`): `Promise`<`PoolInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) |

#### Returns

`Promise`<`PoolInfo`\>

#### Implementation of

IReadWriteHyperdrive.getPoolInfo

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[getPoolInfo](ReadHyperdrive.md#getpoolinfo)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:322](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L322)

___

### getRedeemedWithdrawalShares

▸ **getRedeemedWithdrawalShares**(`«destructured»`): `Promise`<`RedeemedWithdrawalShares`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `account` | \`0x${string}\` |
| › `options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) |

#### Returns

`Promise`<`RedeemedWithdrawalShares`[]\>

#### Implementation of

IReadWriteHyperdrive.getRedeemedWithdrawalShares

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[getRedeemedWithdrawalShares](ReadHyperdrive.md#getredeemedwithdrawalshares)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:862](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L862)

___

### getTradingVolume

▸ **getTradingVolume**(`options?`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.fromBlock?` | `bigint` \| `BlockTag` |
| `options.toBlock?` | `bigint` \| `BlockTag` |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.getTradingVolume

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[getTradingVolume](ReadHyperdrive.md#gettradingvolume)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:359](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L359)

___

### getWithdrawalShares

▸ **getWithdrawalShares**(`«destructured»`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `account` | \`0x${string}\` |
| › `options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.getWithdrawalShares

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[getWithdrawalShares](ReadHyperdrive.md#getwithdrawalshares)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:847](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L847)

___

### initialize

▸ **initialize**(`args`, `options?`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.apr` | `bigint` |
| `args.asUnderlying?` | `boolean` |
| `args.contribution` | `bigint` |
| `args.destination` | \`0x${string}\` |
| `options?` | [`ContractWriteOptions`](../interfaces/ContractWriteOptions.md) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.initialize

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:241](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L241)

___

### openLong

▸ **openLong**(`«destructured»`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asUnderlying?` | `boolean` |
| › `baseAmount` | `bigint` |
| › `bondAmountOut` | `bigint` |
| › `destination` | \`0x${string}\` |
| › `options?` | [`ContractWriteOptionsWithCallback`](../interfaces/ContractWriteOptionsWithCallback.md) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.openLong

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:263](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L263)

___

### openShort

▸ **openShort**(`«destructured»`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asUnderlying?` | `boolean` |
| › `bondAmount` | `bigint` |
| › `destination` | \`0x${string}\` |
| › `maxDeposit` | `bigint` |
| › `options?` | [`ContractWriteOptionsWithCallback`](../interfaces/ContractWriteOptionsWithCallback.md) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.openShort

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:289](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L289)

___

### pause

▸ **pause**(`paused`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `paused` | `boolean` |
| `options?` | [`ContractWriteOptions`](../interfaces/ContractWriteOptions.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

IReadWriteHyperdrive.pause

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:237](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L237)

___

### previewAddLiquidity

▸ **previewAddLiquidity**(`«destructured»`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asUnderlying` | `boolean` |
| › `contribution` | `bigint` |
| › `destination` | \`0x${string}\` |
| › `maxAPR` | `bigint` |
| › `minAPR` | `bigint` |
| › `options?` | [`ContractWriteOptions`](../interfaces/ContractWriteOptions.md) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.previewAddLiquidity

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[previewAddLiquidity](ReadHyperdrive.md#previewaddliquidity)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:986](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L986)

___

### previewCloseLong

▸ **previewCloseLong**(`«destructured»`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asUnderlying` | `boolean` |
| › `bondAmountIn` | `bigint` |
| › `destination` | \`0x${string}\` |
| › `maturityTime` | `bigint` |
| › `minBaseAmountOut` | `bigint` |
| › `options?` | [`ContractWriteOptions`](../interfaces/ContractWriteOptions.md) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.previewCloseLong

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[previewCloseLong](ReadHyperdrive.md#previewcloselong)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:934](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L934)

___

### previewCloseShort

▸ **previewCloseShort**(`«destructured»`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asUnderlying` | `boolean` |
| › `destination` | \`0x${string}\` |
| › `maturityTime` | `bigint` |
| › `minBaseAmountOut` | `bigint` |
| › `options?` | [`ContractWriteOptions`](../interfaces/ContractWriteOptions.md) |
| › `shortAmountIn` | `bigint` |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.previewCloseShort

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[previewCloseShort](ReadHyperdrive.md#previewcloseshort)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:957](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L957)

___

### previewOpenLong

▸ **previewOpenLong**(`«destructured»`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asUnderlying` | `boolean` |
| › `baseAmount` | `bigint` |
| › `destination` | \`0x${string}\` |
| › `minBondAmountOut` | `bigint` |
| › `options?` | [`ContractWriteOptions`](../interfaces/ContractWriteOptions.md) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.previewOpenLong

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[previewOpenLong](ReadHyperdrive.md#previewopenlong)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:892](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L892)

___

### previewOpenShort

▸ **previewOpenShort**(`«destructured»`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amountOfBondsToShort` | `bigint` |
| › `asUnderlying` | `boolean` |
| › `destination` | \`0x${string}\` |
| › `maxBaseAmountIn` | `bigint` |
| › `options?` | [`ContractWriteOptions`](../interfaces/ContractWriteOptions.md) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.previewOpenShort

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[previewOpenShort](ReadHyperdrive.md#previewopenshort)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:913](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L913)

___

### previewRedeemWithdrawalShares

▸ **previewRedeemWithdrawalShares**(`«destructured»`): `Promise`<{ `baseAmountOut`: `bigint` ; `sharesRedeemed`: `bigint`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asUnderlying` | `boolean` |
| › `destination` | \`0x${string}\` |
| › `minBaseAmountOutPerShare` | `bigint` |
| › `options?` | [`ContractWriteOptions`](../interfaces/ContractWriteOptions.md) |
| › `withdrawalSharesIn` | `bigint` |

#### Returns

`Promise`<{ `baseAmountOut`: `bigint` ; `sharesRedeemed`: `bigint`  }\>

#### Implementation of

IReadWriteHyperdrive.previewRedeemWithdrawalShares

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[previewRedeemWithdrawalShares](ReadHyperdrive.md#previewredeemwithdrawalshares)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:1031](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L1031)

___

### previewRemoveLiquidity

▸ **previewRemoveLiquidity**(`«destructured»`): `Promise`<{ `baseAmountOut`: `bigint` ; `withdrawalSharesOut`: `bigint`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asUnderlying` | `boolean` |
| › `destination` | \`0x${string}\` |
| › `lpSharesIn` | `bigint` |
| › `minBaseAmountOut` | `bigint` |
| › `options?` | [`ContractWriteOptions`](../interfaces/ContractWriteOptions.md) |

#### Returns

`Promise`<{ `baseAmountOut`: `bigint` ; `withdrawalSharesOut`: `bigint`  }\>

#### Implementation of

IReadWriteHyperdrive.previewRemoveLiquidity

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[previewRemoveLiquidity](ReadHyperdrive.md#previewremoveliquidity)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:1009](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L1009)

___

### redeemWithdrawalShares

▸ **redeemWithdrawalShares**(`«destructured»`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asUnderlying?` | `boolean` |
| › `destination` | \`0x${string}\` |
| › `minBaseAmountOutPerShare` | `bigint` |
| › `options?` | [`ContractWriteOptionsWithCallback`](../interfaces/ContractWriteOptionsWithCallback.md) |
| › `withdrawalSharesIn` | `bigint` |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.redeemWithdrawalShares

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:418](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L418)

___

### removeLiquidity

▸ **removeLiquidity**(`«destructured»`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asUnderlying?` | `boolean` |
| › `destination` | \`0x${string}\` |
| › `lpSharesIn` | `bigint` |
| › `minBaseAmountOut` | `bigint` |
| › `options?` | [`ContractWriteOptionsWithCallback`](../interfaces/ContractWriteOptionsWithCallback.md) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.removeLiquidity

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:397](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L397)
