---
id: "CachedReadContractOptions"
title: "Interface: CachedReadContractOptions<TAbi>"
sidebar_label: "CachedReadContractOptions"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends `Abi` = `Abi` |

## Hierarchy

- **`CachedReadContractOptions`**

  ↳ [`CachedReadWriteContractOptions`](CachedReadWriteContractOptions.md)

## Properties

### cache

• `Optional` **cache**: [`SimpleCache`](SimpleCache.md)<`any`, [`SimpleCacheKey`](../modules.md#simplecachekey)\>

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts:34](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts#L34)

___

### contract

• **contract**: [`IReadContract`](IReadContract.md)<`TAbi`\>

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts:33](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts#L33)

___

### id

• `Optional` **id**: `string`

An ID to distinguish this instance from others. Used to prefix to all cache
keys.

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts:39](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts#L39)
