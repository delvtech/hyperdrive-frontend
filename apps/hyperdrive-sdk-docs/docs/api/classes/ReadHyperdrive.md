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

## Constructors

### constructor

• **new ReadHyperdrive**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `ReadHyperdriveOptions` |

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:309](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L309)

## Methods

### getClosedLongs

▸ **getClosedLongs**(`«destructured»`): `Promise`<[`ClosedLong`](../interfaces/ClosedLong.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `account` | \`0x${string}\` |
| › `options?` | [`ContractReadOptions`](../#contractreadoptions) |

#### Returns

`Promise`<[`ClosedLong`](../interfaces/ClosedLong.md)[]\>

#### Implementation of

IReadHyperdrive.getClosedLongs

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:660](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L660)

___

### getClosedLpShares

▸ **getClosedLpShares**(`«destructured»`): `Promise`<`ClosedLpShares`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `account` | \`0x${string}\` |
| › `options?` | [`ContractReadOptions`](../#contractreadoptions) |

#### Returns

`Promise`<`ClosedLpShares`[]\>

#### Implementation of

IReadHyperdrive.getClosedLpShares

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:815](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L815)

___

### getClosedShorts

▸ **getClosedShorts**(`«destructured»`): `Promise`<`ClosedShort`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `account` | \`0x${string}\` |
| › `options?` | [`ContractReadOptions`](../#contractreadoptions) |

#### Returns

`Promise`<`ClosedShort`[]\>

#### Implementation of

IReadHyperdrive.getClosedShorts

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:698](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L698)

___

### getFixedRate

▸ **getFixedRate**(`options?`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ContractReadOptions`](../#contractreadoptions) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadHyperdrive.getFixedRate

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:324](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L324)

___

### getLiquidity

▸ **getLiquidity**(`options?`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ContractReadOptions`](../#contractreadoptions) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadHyperdrive.getLiquidity

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:343](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L343)

___

### getLongPrice

▸ **getLongPrice**(`options?`): `Promise`<`bigint`\>

Gets the spot price of a long

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`ContractReadOptions`](../#contractreadoptions) | The read options |

#### Returns

`Promise`<`bigint`\>

the spot price of a long
```ts
  const longPrice = await readHyperdrive.getLongPrice();
```

#### Implementation of

IReadHyperdrive.getLongPrice

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:386](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L386)

___

### getLpShares

▸ **getLpShares**(`«destructured»`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `account` | \`0x${string}\` |
| › `options?` | [`ContractReadOptions`](../#contractreadoptions) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadHyperdrive.getLpShares

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:800](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L800)

___

### getMaxLong

▸ **getMaxLong**(`options?`): `Promise`<{ `formattedMaxBaseIn`: `string` ; `formattedMaxBondsOut`: `string` ; `maxBaseIn`: `bigint` ; `maxBondsOut`: `bigint`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ContractReadOptions`](../#contractreadoptions) |

#### Returns

`Promise`<{ `formattedMaxBaseIn`: `string` ; `formattedMaxBondsOut`: `string` ; `maxBaseIn`: `bigint` ; `maxBondsOut`: `bigint`  }\>

#### Implementation of

IReadHyperdrive.getMaxLong

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:765](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L765)

___

### getMaxShort

▸ **getMaxShort**(`options?`): `Promise`<{ `formatted`: `string` ; `maxBondsOut`: `bigint`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ContractReadOptions`](../#contractreadoptions) |

#### Returns

`Promise`<{ `formatted`: `string` ; `maxBondsOut`: `bigint`  }\>

#### Implementation of

IReadHyperdrive.getMaxShort

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:737](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L737)

___

### getOpenLongs

▸ **getOpenLongs**(`account`): `Promise`<[`Long`](../interfaces/Long.md)[]\>

Gets the active longs opened by a specific user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `Object` | The user's address |
| `account.account` | \`0x${string}\` | - |
| `account.options?` | [`ContractReadOptions`](../#contractreadoptions) | - |

#### Returns

`Promise`<[`Long`](../interfaces/Long.md)[]\>

the active longs opened by a specific user

#### Implementation of

IReadHyperdrive.getOpenLongs

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:430](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L430)

___

### getOpenShorts

▸ **getOpenShorts**(`account`): `Promise`<`OpenShort`[]\>

Gets the active shorts opened by a specific user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `Object` | The user's address |
| `account.account` | \`0x${string}\` | - |
| `account.options?` | [`ContractReadOptions`](../#contractreadoptions) | - |

#### Returns

`Promise`<`OpenShort`[]\>

the active shorts opened by a specific user

#### Implementation of

IReadHyperdrive.getOpenShorts

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:547](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L547)

___

### getPoolConfig

▸ **getPoolConfig**(`options?`): `Promise`<`PoolConfig`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ContractReadOptions`](../#contractreadoptions) |

#### Returns

`Promise`<`PoolConfig`\>

#### Implementation of

IReadHyperdrive.getPoolConfig

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:314](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L314)

___

### getPoolInfo

▸ **getPoolInfo**(`options?`): `Promise`<`PoolInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ContractReadOptions`](../#contractreadoptions) |

#### Returns

`Promise`<`PoolInfo`\>

#### Implementation of

IReadHyperdrive.getPoolInfo

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:319](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L319)

___

### getRedeemedWithdrawalShares

▸ **getRedeemedWithdrawalShares**(`«destructured»`): `Promise`<`RedeemedWithdrawalShares`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `account` | \`0x${string}\` |
| › `options?` | [`ContractReadOptions`](../#contractreadoptions) |

#### Returns

`Promise`<`RedeemedWithdrawalShares`[]\>

#### Implementation of

IReadHyperdrive.getRedeemedWithdrawalShares

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:858](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L858)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:356](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L356)

___

### getWithdrawalShares

▸ **getWithdrawalShares**(`«destructured»`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `account` | \`0x${string}\` |
| › `options?` | [`ContractReadOptions`](../#contractreadoptions) |

#### Returns

`Promise`<`bigint`\>

#### Implementation of

IReadHyperdrive.getWithdrawalShares

#### Defined in

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:843](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L843)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:982](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L982)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:930](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L930)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:953](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L953)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:888](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L888)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:909](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L909)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:1027](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L1027)

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

[packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts:1005](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/hyperdrive/ReadHyperdrive.ts#L1005)
