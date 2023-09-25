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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:663](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L663)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:818](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L818)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:701](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L701)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:327](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L327)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:346](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L346)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:389](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L389)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:803](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L803)

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

IReadHyperdrive.getMaxLong

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:768](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L768)

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

IReadHyperdrive.getMaxShort

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:740](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L740)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:433](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L433)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:550](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L550)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:317](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L317)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:322](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L322)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:861](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L861)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:359](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L359)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:846](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L846)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:985](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L985)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:933](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L933)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:956](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L956)

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

IReadHyperdrive.previewOpenLong

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:891](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L891)

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

IReadHyperdrive.previewOpenShort

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:912](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L912)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:1030](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L1030)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:1008](https://github.com/delvtech/hyperdrive-monorepo/blob/4f356e4/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L1008)
