---
id: "LruSimpleCache"
title: "Class: LruSimpleCache<TValue, TKey>"
sidebar_label: "LruSimpleCache"
sidebar_position: 0
custom_edit_url: null
---

An LRU (Least Recently Used) implementation of the `SimpleCache` interface.
This class wraps around the
[lru-cache](https://www.npmjs.com/package/lru-cache) library to provide LRU
caching capabilities conforming to the `SimpleCache` interface.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TValue` | extends `NonNullable`<`unknown`\> = `NonNullable`<`unknown`\> | The type of value to be stored in the cache. |
| `TKey` | extends [`SimpleCacheKey`](../#simplecachekey) = [`SimpleCacheKey`](../#simplecachekey) | The type of key used to access values in the cache. |

## Implements

- [`SimpleCache`](../interfaces/SimpleCache.md)<`TValue`, `TKey`\>

## Constructors

### constructor

• **new LruSimpleCache**<`TValue`, `TKey`\>(`options`)

Initializes a new instance of the LruSimpleCache with specified options.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TValue` | extends `Object` = {} |
| `TKey` | extends [`SimpleCacheKey`](../#simplecachekey) = [`SimpleCacheKey`](../#simplecachekey) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Options`<`string`, `TValue`, `void`\> | Configuration options for the underlying LRUCache. |

#### Defined in

[packages/hyperdrive-sdk/src/cache/LruSimpleCache.ts:26](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/cache/LruSimpleCache.ts#L26)

## Methods

### clear

▸ **clear**(): `void`

Removes all of the mappings from this cache.

#### Returns

`void`

#### Implementation of

[SimpleCache](../interfaces/SimpleCache.md).[clear](../interfaces/SimpleCache.md#clear)

#### Defined in

[packages/hyperdrive-sdk/src/cache/LruSimpleCache.ts:42](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/cache/LruSimpleCache.ts#L42)

___

### delete

▸ **delete**(`key`): `boolean`

Removes the mapping for the specified key from this cache if present.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TKey` |

#### Returns

`boolean`

#### Implementation of

[SimpleCache](../interfaces/SimpleCache.md).[delete](../interfaces/SimpleCache.md#delete)

#### Defined in

[packages/hyperdrive-sdk/src/cache/LruSimpleCache.ts:38](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/cache/LruSimpleCache.ts#L38)

___

### find

▸ **find**(`predicate`): `undefined` \| `TValue`

Returns the the first value from the cache that the specified predicate
matches, or undefined if no match is found.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `TValue`, `key`: `TKey`) => `boolean` | A function to test each key-value pair in the cache. |

#### Returns

`undefined` \| `TValue`

#### Implementation of

[SimpleCache](../interfaces/SimpleCache.md).[find](../interfaces/SimpleCache.md#find)

#### Defined in

[packages/hyperdrive-sdk/src/cache/LruSimpleCache.ts:46](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/cache/LruSimpleCache.ts#L46)

___

### get

▸ **get**(`key`): `undefined` \| `TValue`

Retrieves the value associated with the specified key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TKey` |

#### Returns

`undefined` \| `TValue`

#### Implementation of

[SimpleCache](../interfaces/SimpleCache.md).[get](../interfaces/SimpleCache.md#get)

#### Defined in

[packages/hyperdrive-sdk/src/cache/LruSimpleCache.ts:30](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/cache/LruSimpleCache.ts#L30)

___

### set

▸ **set**(`key`, `value`): `void`

Associates the specified value with the specified key in the cache. If the
cache previously contained a mapping for the key, the old value is
replaced.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TKey` |
| `value` | `TValue` |

#### Returns

`void`

#### Implementation of

[SimpleCache](../interfaces/SimpleCache.md).[set](../interfaces/SimpleCache.md#set)

#### Defined in

[packages/hyperdrive-sdk/src/cache/LruSimpleCache.ts:34](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/cache/LruSimpleCache.ts#L34)
