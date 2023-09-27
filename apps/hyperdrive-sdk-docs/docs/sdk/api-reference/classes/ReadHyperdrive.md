---
id: "ReadHyperdrive"
title: "Class: ReadHyperdrive"
sidebar_label: "ReadHyperdrive"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`ReadHyperdrive`**

  ↳ [`ReadWriteHyperdrive`](ReadWriteHyperdrive.md)

## Implements

- `IReadHyperdrive`

## Methods

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

IReadHyperdrive.getClosedLongs

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:658](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L658)

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

IReadHyperdrive.getClosedLpShares

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:804](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L804)

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

IReadHyperdrive.getClosedShorts

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:696](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L696)

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

IReadHyperdrive.getFixedRate

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:321](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L321)

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

IReadHyperdrive.getLiquidity

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:340](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L340)

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

IReadHyperdrive.getLongPrice

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:384](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L384)

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

IReadHyperdrive.getLpShares

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:789](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L789)

___

### getMaxLong

▸ **getMaxLong**(`options?`): `Promise`<{ `maxBaseIn`: `bigint` ; `maxBondsOut`: `bigint`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) |

#### Returns

`Promise`<{ `maxBaseIn`: `bigint` ; `maxBondsOut`: `bigint`  }\>

#### Implementation of

IReadHyperdrive.getMaxLong

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:758](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L758)

___

### getMaxShort

▸ **getMaxShort**(`options?`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadHyperdrive.getMaxShort

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:735](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L735)

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

IReadHyperdrive.getOpenLongs

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:428](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L428)

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

IReadHyperdrive.getOpenShorts

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:545](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L545)

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

IReadHyperdrive.getPoolConfig

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:311](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L311)

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

IReadHyperdrive.getPoolInfo

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:316](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L316)

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

IReadHyperdrive.getRedeemedWithdrawalShares

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:847](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L847)

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

IReadHyperdrive.getTradingVolume

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:353](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L353)

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

IReadHyperdrive.getWithdrawalShares

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:832](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L832)

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

IReadHyperdrive.previewAddLiquidity

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:971](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L971)

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

IReadHyperdrive.previewCloseLong

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:919](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L919)

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

IReadHyperdrive.previewCloseShort

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:942](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L942)

___

### previewOpenLong

▸ **previewOpenLong**(`«destructured»`): `Promise`<{ `bondProceeds`: `bigint` ; `maturityTime`: `bigint`  }\>

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

`Promise`<{ `bondProceeds`: `bigint` ; `maturityTime`: `bigint`  }\>

#### Implementation of

IReadHyperdrive.previewOpenLong

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:877](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L877)

___

### previewOpenShort

▸ **previewOpenShort**(`«destructured»`): `Promise`<{ `maturityTime`: `bigint` ; `traderDeposit`: `bigint`  }\>

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

`Promise`<{ `maturityTime`: `bigint` ; `traderDeposit`: `bigint`  }\>

#### Implementation of

IReadHyperdrive.previewOpenShort

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:898](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L898)

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

IReadHyperdrive.previewRedeemWithdrawalShares

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:1016](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L1016)

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

IReadHyperdrive.previewRemoveLiquidity

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:994](https://github.com/delvtech/hyperdrive-monorepo/blob/de09d2d/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L994)
