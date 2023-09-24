---
id: "SimpleCache"
title: "Interface: SimpleCache<TValue, TKey>"
sidebar_label: "SimpleCache"
sidebar_position: 0
custom_edit_url: null
---

Represents a simple caching mechanism with basic operations such as
get, set, delete, clear, and find.

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TValue` | `any` | The type of value to be stored in the cache. |
| `TKey` | extends [`SimpleCacheKey`](../modules.md#simplecachekey) = [`SimpleCacheKey`](../modules.md#simplecachekey) | The type of key used to access values in the cache. Must be a serializable value to ensure consistency and predictability. |

## Implemented by

- [`LruSimpleCache`](../classes/LruSimpleCache.md)

## Properties

### clear

• **clear**: () => `void`

#### Type declaration

▸ (): `void`

Removes all of the mappings from this cache.

##### Returns

`void`

#### Defined in

[packages/hyperdrive-sdk/src/cache/SimpleCache.ts:33](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/cache/SimpleCache.ts#L33)

___

### delete

• **delete**: (`key`: `TKey`) => `void`

#### Type declaration

▸ (`key`): `void`

Removes the mapping for the specified key from this cache if present.

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TKey` |

##### Returns

`void`

#### Defined in

[packages/hyperdrive-sdk/src/cache/SimpleCache.ts:28](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/cache/SimpleCache.ts#L28)

___

### find

• **find**: (`predicate`: (`value`: `TValue`, `key`: `TKey`) => `boolean`) => `undefined` \| `TValue`

#### Type declaration

▸ (`predicate`): `undefined` \| `TValue`

Returns the the first value from the cache that the specified predicate
matches, or undefined if no match is found.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `TValue`, `key`: `TKey`) => `boolean` | A function to test each key-value pair in the cache. |

##### Returns

`undefined` \| `TValue`

#### Defined in

[packages/hyperdrive-sdk/src/cache/SimpleCache.ts:41](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/cache/SimpleCache.ts#L41)

___

### get

• **get**: (`key`: `TKey`) => `undefined` \| `TValue`

#### Type declaration

▸ (`key`): `undefined` \| `TValue`

Retrieves the value associated with the specified key.

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TKey` |

##### Returns

`undefined` \| `TValue`

#### Defined in

[packages/hyperdrive-sdk/src/cache/SimpleCache.ts:16](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/cache/SimpleCache.ts#L16)

___

### set

• **set**: (`key`: `TKey`, `value`: `TValue`) => `void`

#### Type declaration

▸ (`key`, `value`): `void`

Associates the specified value with the specified key in the cache. If the
cache previously contained a mapping for the key, the old value is
replaced.

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TKey` |
| `value` | `TValue` |

##### Returns

`void`

#### Defined in

[packages/hyperdrive-sdk/src/cache/SimpleCache.ts:23](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/cache/SimpleCache.ts#L23)
