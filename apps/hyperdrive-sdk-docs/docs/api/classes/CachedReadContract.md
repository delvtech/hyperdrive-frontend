---
id: "CachedReadContract"
title: "Class: CachedReadContract<TAbi>"
sidebar_label: "CachedReadContract"
sidebar_position: 0
custom_edit_url: null
---

A wrapped Ethereum contract reader that provides caching capabilities. Useful
for reducing the number of actual reads from a contract by caching and
reusing previous read results.

**`Example`**

```ts
const cachedContract = new CachedReadContract({ contract: myContract });
const result1 = await cachedContract.read("functionName", args);
const result2 = await cachedContract.read("functionName", args); // Fetched from cache
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends `Abi` = `Abi` |

## Hierarchy

- **`CachedReadContract`**

  ↳ [`CachedReadWriteContract`](CachedReadWriteContract.md)

## Implements

- [`ICachedReadContract`](../interfaces/ICachedReadContract.md)<`TAbi`\>

## Constructors

### constructor

• **new CachedReadContract**<`TAbi`\>(`«destructured»`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends `Abi` = `Abi` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`CachedReadContractOptions`](../interfaces/CachedReadContractOptions.md)<`TAbi`\> |

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts:64](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts#L64)

## Properties

### abi

• `Readonly` **abi**: `TAbi`

#### Implementation of

[ICachedReadContract](../interfaces/ICachedReadContract.md).[abi](../interfaces/ICachedReadContract.md#abi)

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts:56](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts#L56)

___

### address

• `Readonly` **address**: \`0x${string}\`

#### Implementation of

[ICachedReadContract](../interfaces/ICachedReadContract.md).[address](../interfaces/ICachedReadContract.md#address)

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts:55](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts#L55)

## Methods

### clearCache

▸ **clearCache**(): `void`

Clears the entire cache.

#### Returns

`void`

#### Implementation of

[ICachedReadContract](../interfaces/ICachedReadContract.md).[clearCache](../interfaces/ICachedReadContract.md#clearcache)

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

[ICachedReadContract](../interfaces/ICachedReadContract.md).[deleteRead](../interfaces/ICachedReadContract.md#deleteread)

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

[ICachedReadContract](../interfaces/ICachedReadContract.md).[getEvents](../interfaces/ICachedReadContract.md#getevents)

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

[ICachedReadContract](../interfaces/ICachedReadContract.md).[read](../interfaces/ICachedReadContract.md#read)

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

[ICachedReadContract](../interfaces/ICachedReadContract.md).[simulateWrite](../interfaces/ICachedReadContract.md#simulatewrite)

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts:160](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts#L160)
