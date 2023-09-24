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

[ReadHyperdrive](ReadHyperdrive.md).[constructor](ReadHyperdrive.md#constructor)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:225](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L225)

## Properties

### contract

• `Protected` `Readonly` **contract**: [`IReadWriteHyperdriveContract`](../modules.md#ireadwritehyperdrivecontract)

#### Overrides

[ReadHyperdrive](ReadHyperdrive.md).[contract](ReadHyperdrive.md#contract)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:223](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L223)

___

### mathContract

• `Protected` `Readonly` **mathContract**: `IReadHyperdriveMathContract`

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[mathContract](ReadHyperdrive.md#mathcontract)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:307](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L307)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:369](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L369)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:230](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L230)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:311](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L311)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:340](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L340)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:651](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L651)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:806](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L806)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:689](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L689)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:324](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L324)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:343](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L343)

___

### getLongPrice

▸ **getLongPrice**(`options?`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadWriteHyperdrive.getLongPrice

#### Inherited from

[ReadHyperdrive](ReadHyperdrive.md).[getLongPrice](ReadHyperdrive.md#getlongprice)

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:377](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L377)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:791](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L791)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:756](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L756)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:728](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L728)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:421](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L421)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:538](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L538)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:314](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L314)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:319](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L319)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:849](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L849)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:356](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L356)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:834](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L834)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:241](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L241)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:263](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L263)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:289](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L289)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:237](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L237)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:973](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L973)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:921](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L921)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:944](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L944)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:879](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L879)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:900](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L900)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:1018](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L1018)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:996](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L996)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:418](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L418)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts:397](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/hyperdrive/ReadWriteHyperdrive.ts#L397)
