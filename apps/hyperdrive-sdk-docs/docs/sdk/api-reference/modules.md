---
id: "modules"
title: "@hyperdrive/sdk"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [ReadHyperdrive](classes/ReadHyperdrive.md)
- [ReadWriteHyperdrive](classes/ReadWriteHyperdrive.md)

## Interfaces

- [ClosedLong](interfaces/ClosedLong.md)
- [ClosedLpShares](interfaces/ClosedLpShares.md)
- [ClosedShort](interfaces/ClosedShort.md)
- [Long](interfaces/Long.md)
- [OpenShort](interfaces/OpenShort.md)
- [RedeemedWithdrawalShares](interfaces/RedeemedWithdrawalShares.md)
- [Short](interfaces/Short.md)

## Type Aliases

### Checkpoint

Ƭ **Checkpoint**: `FunctionReturnType`<typeof `IHyperdrive.abi`, ``"getCheckpoint"``\>[``0``]

#### Defined in

[hyperdrive-sdk/src/pool/Checkpoint.ts:4](https://github.com/delvtech/hyperdrive-monorepo/blob/05d4ad8/packages/hyperdrive-sdk/src/pool/Checkpoint.ts#L4)

___

### IHyperdriveContract

Ƭ **IHyperdriveContract**: `ICachedContract`<typeof `IHyperdrive.abi`\>

Represents a contract utilizing the Hyperdrive ABI that includes caching

#### Defined in

[hyperdrive-sdk/src/hyperdrive/HyperdriveContract.ts:18](https://github.com/delvtech/hyperdrive-monorepo/blob/05d4ad8/packages/hyperdrive-sdk/src/hyperdrive/HyperdriveContract.ts#L18)

___

### IReadHyperdriveContract

Ƭ **IReadHyperdriveContract**: `ICachedReadContract`<typeof `IHyperdrive.abi`\>

#### Defined in

[hyperdrive-sdk/src/hyperdrive/HyperdriveContract.ts:8](https://github.com/delvtech/hyperdrive-monorepo/blob/05d4ad8/packages/hyperdrive-sdk/src/hyperdrive/HyperdriveContract.ts#L8)

___

### IReadWriteHyperdriveContract

Ƭ **IReadWriteHyperdriveContract**: `ICachedReadWriteContract`<typeof `IHyperdrive.abi`\>

#### Defined in

[hyperdrive-sdk/src/hyperdrive/HyperdriveContract.ts:11](https://github.com/delvtech/hyperdrive-monorepo/blob/05d4ad8/packages/hyperdrive-sdk/src/hyperdrive/HyperdriveContract.ts#L11)

___

### PoolConfig

Ƭ **PoolConfig**: `FunctionReturnType`<typeof `IHyperdrive.abi`, ``"getPoolConfig"``\>[``0``]

#### Defined in

[hyperdrive-sdk/src/pool/PoolConfig.ts:7](https://github.com/delvtech/hyperdrive-monorepo/blob/05d4ad8/packages/hyperdrive-sdk/src/pool/PoolConfig.ts#L7)

___

### PoolInfo

Ƭ **PoolInfo**: `FunctionReturnType`<typeof `IHyperdrive.abi`, ``"getPoolInfo"``\>[``0``]

#### Defined in

[hyperdrive-sdk/src/pool/PoolInfo.ts:7](https://github.com/delvtech/hyperdrive-monorepo/blob/05d4ad8/packages/hyperdrive-sdk/src/pool/PoolInfo.ts#L7)

## Functions

### adjustAmountByPercentage

▸ **adjustAmountByPercentage**(`«destructured»`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `bigint` |
| › `decimals` | `number` |

#### Returns

`bigint`

#### Defined in

[hyperdrive-sdk/src/base/adjustAmountByPercentage.ts:1](https://github.com/delvtech/hyperdrive-monorepo/blob/05d4ad8/packages/hyperdrive-sdk/src/base/adjustAmountByPercentage.ts#L1)

___

### calculateFixedRateFromOpenLong

▸ **calculateFixedRateFromOpenLong**(`«destructured»`): `bigint`

From alex:

APR (fixed rate)
t = term length in year fractions (0.5 = 6 months)
p0 = base amount
p1 = bond amount
r = ((p1 / p0) - 1) / t

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `baseAmount` | `bigint` |
| › `bondAmount` | `bigint` |
| › `decimals` | `number` |
| › `positionDuration` | `bigint` |

#### Returns

`bigint`

#### Defined in

[hyperdrive-sdk/src/longs/calculateFixedRateFromOpenLong.ts:11](https://github.com/delvtech/hyperdrive-monorepo/blob/05d4ad8/packages/hyperdrive-sdk/src/longs/calculateFixedRateFromOpenLong.ts#L11)

___

### calculateMatureLongYieldAfterFees

▸ **calculateMatureLongYieldAfterFees**(`«destructured»`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `baseAmountPaid` | `bigint` |
| › `bondAmount` | `bigint` |
| › `decimals` | `number` |
| › `flatFee` | `bigint` |

#### Returns

`bigint`

#### Defined in

[hyperdrive-sdk/src/longs/calculateMatureLongYieldAfterFees.ts:2](https://github.com/delvtech/hyperdrive-monorepo/blob/05d4ad8/packages/hyperdrive-sdk/src/longs/calculateMatureLongYieldAfterFees.ts#L2)

___

### getCheckpointId

▸ **getCheckpointId**(`blockTimestamp`, `checkpointDuration`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTimestamp` | `bigint` |
| `checkpointDuration` | `bigint` |

#### Returns

`bigint`

#### Defined in

[hyperdrive-sdk/src/pool/getCheckpointId.ts:1](https://github.com/delvtech/hyperdrive-monorepo/blob/05d4ad8/packages/hyperdrive-sdk/src/pool/getCheckpointId.ts#L1)

___

### multiplyBigInt

▸ **multiplyBigInt**(`values`, `decimals`): `bigint`

Multiply an array of bigints together and preserve the correct scaling for
decimals.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `bigint`[] | The bigints to multiply. |
| `decimals` | `number` | The number of decimal places the bigints are scaled to. |

#### Returns

`bigint`

**`Example`**

```ts
// 5.00 * .50 = 2.50
multiplyBigInt([500n, 50n], 2);
// 250n

@deprecated use dnum instead

#### Defined in

[hyperdrive-sdk/src/base/multiplyBigInt/multiplyBigInt.ts:17](https://github.com/delvtech/hyperdrive-monorepo/blob/05d4ad8/packages/hyperdrive-sdk/src/base/multiplyBigInt/multiplyBigInt.ts#L17)
