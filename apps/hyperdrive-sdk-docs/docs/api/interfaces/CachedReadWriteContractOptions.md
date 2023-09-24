---
id: "CachedReadWriteContractOptions"
title: "Interface: CachedReadWriteContractOptions<TAbi>"
sidebar_label: "CachedReadWriteContractOptions"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends `Abi` = `Abi` |

## Hierarchy

- [`CachedReadContractOptions`](CachedReadContractOptions.md)<`TAbi`\>

  ↳ **`CachedReadWriteContractOptions`**

## Properties

### cache

• `Optional` **cache**: [`SimpleCache`](SimpleCache.md)<`any`, [`SimpleCacheKey`](../modules.md#simplecachekey)\>

#### Inherited from

[CachedReadContractOptions](CachedReadContractOptions.md).[cache](CachedReadContractOptions.md#cache)

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts:34](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts#L34)

___

### contract

• **contract**: [`IReadWriteContract`](IReadWriteContract.md)<`TAbi`\>

#### Overrides

[CachedReadContractOptions](CachedReadContractOptions.md).[contract](CachedReadContractOptions.md#contract)

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadWriteContract.ts:27](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/cached/CachedReadWriteContract.ts#L27)

___

### id

• `Optional` **id**: `string`

An ID to distinguish this instance from others. Used to prefix to all cache
keys.

#### Inherited from

[CachedReadContractOptions](CachedReadContractOptions.md).[id](CachedReadContractOptions.md#id)

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts:39](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts#L39)
