---
id: "CachedReadWriteContract"
title: "Class: CachedReadWriteContract<TAbi>"
sidebar_label: "CachedReadWriteContract"
sidebar_position: 0
custom_edit_url: null
---

Provides a cached wrapper around an Ethereum writable contract. This class is
useful for both reading (with caching) and writing to a contract. It extends
the functionality provided by CachedReadContract by adding write
capabilities.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends `Abi` = `Abi` |

## Hierarchy

- [`CachedReadContract`](CachedReadContract.md)<`TAbi`\>

  ↳ **`CachedReadWriteContract`**

## Implements

- [`ICachedReadWriteContract`](../interfaces/ICachedReadWriteContract.md)<`TAbi`\>

## Constructors

### constructor

• **new CachedReadWriteContract**<`TAbi`\>(`«destructured»`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends `Abi` = `Abi` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`CachedReadWriteContractOptions`](../interfaces/CachedReadWriteContractOptions.md)<`TAbi`\> |

#### Overrides

[CachedReadContract](CachedReadContract.md).[constructor](CachedReadContract.md#constructor)

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadWriteContract.ts:43](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/contract/cached/CachedReadWriteContract.ts#L43)

## Properties

### abi

• `Readonly` **abi**: `TAbi`

#### Implementation of

[ICachedReadWriteContract](../interfaces/ICachedReadWriteContract.md).[abi](../interfaces/ICachedReadWriteContract.md#abi)

#### Inherited from

[CachedReadContract](CachedReadContract.md).[abi](CachedReadContract.md#abi)

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts:56](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts#L56)

___

### address

• `Readonly` **address**: \`0x${string}\`

#### Implementation of

[ICachedReadWriteContract](../interfaces/ICachedReadWriteContract.md).[address](../interfaces/ICachedReadWriteContract.md#address)

#### Inherited from

[CachedReadContract](CachedReadContract.md).[address](CachedReadContract.md#address)

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts:55](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts#L55)

## Methods

### clearCache

▸ **clearCache**(): `void`

Clears the entire cache.

#### Returns

`void`

#### Implementation of

[ICachedReadWriteContract](../interfaces/ICachedReadWriteContract.md).[clearCache](../interfaces/ICachedReadWriteContract.md#clearcache)

#### Inherited from

[CachedReadContract](CachedReadContract.md).[clearCache](CachedReadContract.md#clearcache)

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts:152](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts#L152)

___

### deleteRead

▸ **deleteRead**<`TFunctionName`\>(`functionName`, `args`, `options?`): `void`

Deletes a specific read from the cache.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TFunctionName` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | `TFunctionName` |
| `args` | { [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["inputs"][K], "inputs"\> }[K] } |
| `options?` | [`ContractReadOptions`](../#contractreadoptions) |

#### Returns

`void`

**`Example`**

```ts
const cachedContract = new CachedReadContract({ contract: myContract });
const result1 = await cachedContract.read("functionName", args);
const result2 = await cachedContract.read("functionName", args); // Fetched from cache

cachedContract.deleteRead("functionName", args);
const result3 = await cachedContract.read("functionName", args); // Fetched from contract
```

#### Implementation of

[ICachedReadWriteContract](../interfaces/ICachedReadWriteContract.md).[deleteRead](../interfaces/ICachedReadWriteContract.md#deleteread)

#### Inherited from

[CachedReadContract](CachedReadContract.md).[deleteRead](CachedReadContract.md#deleteread)

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts:108](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts#L108)

___

### getEvents

▸ **getEvents**<`TEventName`\>(`eventName`, `options?`): `Promise`<[`ContractEvent`](../interfaces/ContractEvent.md)<`TAbi`, `TEventName`\>[]\>

Gets events from the contract. First checks the cache, and if not present,
fetches from the contract and then caches the result.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventName` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `TEventName` |
| `options?` | [`ContractGetEventsOptions`](../interfaces/ContractGetEventsOptions.md)<`TAbi`, `TEventName`\> |

#### Returns

`Promise`<[`ContractEvent`](../interfaces/ContractEvent.md)<`TAbi`, `TEventName`\>[]\>

#### Implementation of

[ICachedReadWriteContract](../interfaces/ICachedReadWriteContract.md).[getEvents](../interfaces/ICachedReadWriteContract.md#getevents)

#### Inherited from

[CachedReadContract](CachedReadContract.md).[getEvents](CachedReadContract.md#getevents)

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts:131](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts#L131)

___

### read

▸ **read**<`TFunctionName`\>(`functionName`, `args`, `options?`): `Promise`<{ [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["outputs"][K], "outputs"\> }[K] }\>

Reads data from the contract. First checks the cache, and if not present,
fetches from the contract and then caches the result.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TFunctionName` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | `TFunctionName` |
| `args` | { [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["inputs"][K], "inputs"\> }[K] } |
| `options?` | [`ContractReadOptions`](../#contractreadoptions) |

#### Returns

`Promise`<{ [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["outputs"][K], "outputs"\> }[K] }\>

#### Implementation of

[ICachedReadWriteContract](../interfaces/ICachedReadWriteContract.md).[read](../interfaces/ICachedReadWriteContract.md#read)

#### Inherited from

[CachedReadContract](CachedReadContract.md).[read](CachedReadContract.md#read)

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts:76](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts#L76)

___

### simulateWrite

▸ **simulateWrite**<`TFunctionName`\>(`fn`, `args`, `options?`): `Promise`<{ [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["outputs"][K], "outputs"\> }[K] }\>

Simulates a contract write operation. This method directly delegates
to the underlying contract without interacting with the cache.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TFunctionName` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TFunctionName` |
| `args` | { [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["inputs"][K], "inputs"\> }[K] } |
| `options?` | [`ContractWriteOptions`](../interfaces/ContractWriteOptions.md) |

#### Returns

`Promise`<{ [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["outputs"][K], "outputs"\> }[K] }\>

#### Implementation of

[ICachedReadWriteContract](../interfaces/ICachedReadWriteContract.md).[simulateWrite](../interfaces/ICachedReadWriteContract.md#simulatewrite)

#### Inherited from

[CachedReadContract](CachedReadContract.md).[simulateWrite](CachedReadContract.md#simulatewrite)

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts:160](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts#L160)

___

### write

▸ **write**<`TFunctionName`\>(`fn`, `args`, `options?`): `Promise`<{ [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["outputs"][K], "outputs"\> }[K] }\>

Writes data to the contract. This method directly delegates to the
underlying contract without interacting with the cache since writes
inherently modify state and cannot be cached.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TFunctionName` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TFunctionName` |
| `args` | { [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["inputs"][K], "inputs"\> }[K] } |
| `options?` | [`ContractWriteOptions`](../interfaces/ContractWriteOptions.md) |

#### Returns

`Promise`<{ [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["outputs"][K], "outputs"\> }[K] }\>

#### Implementation of

[ICachedReadWriteContract](../interfaces/ICachedReadWriteContract.md).[write](../interfaces/ICachedReadWriteContract.md#write)

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadWriteContract.ts:53](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/contract/cached/CachedReadWriteContract.ts#L53)
