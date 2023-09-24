---
id: "ICachedReadWriteContract"
title: "Interface: ICachedReadWriteContract<TAbi>"
sidebar_label: "ICachedReadWriteContract"
sidebar_position: 0
custom_edit_url: null
---

Interface for a writable contract that also provides caching capabilities.
This extends both readable cached contracts and writable contracts.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends `Abi` = `Abi` |

## Hierarchy

- [`ICachedReadContract`](ICachedReadContract.md)<`TAbi`\>

- [`IReadWriteContract`](IReadWriteContract.md)<`TAbi`\>

  ↳ **`ICachedReadWriteContract`**

## Implemented by

- [`CachedReadWriteContract`](../classes/CachedReadWriteContract.md)

## Properties

### abi

• **abi**: `TAbi`

#### Inherited from

[IReadWriteContract](IReadWriteContract.md).[abi](IReadWriteContract.md#abi)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:16](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/Contract.ts#L16)

___

### address

• **address**: \`0x${string}\`

#### Inherited from

[IReadWriteContract](IReadWriteContract.md).[address](IReadWriteContract.md#address)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:17](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/Contract.ts#L17)

___

### clearCache

• **clearCache**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[ICachedReadContract](ICachedReadContract.md).[clearCache](ICachedReadContract.md#clearcache)

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts:26](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts#L26)

___

### deleteRead

• **deleteRead**: (...`args`: [functionName: FunctionName<TAbi\>, args: { [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["inputs"][K], "inputs"\> }[K] }, options?: ContractReadOptions]) => `void`

#### Type declaration

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [functionName: FunctionName<TAbi\>, args: { [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["inputs"][K], "inputs"\> }[K] }, options?: ContractReadOptions] |

##### Returns

`void`

#### Inherited from

[ICachedReadContract](ICachedReadContract.md).[deleteRead](ICachedReadContract.md#deleteread)

#### Defined in

[packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts:25](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/cached/CachedReadContract.ts#L25)

## Methods

### getEvents

▸ **getEvents**<`TEventName`\>(`eventName`, `options?`): `Promise`<[`ContractEvent`](ContractEvent.md)<`TAbi`, `TEventName`\>[]\>

Retrieves specified events from the contract.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventName` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `TEventName` |
| `options?` | [`ContractGetEventsOptions`](ContractGetEventsOptions.md)<`TAbi`, `TEventName`\> |

#### Returns

`Promise`<[`ContractEvent`](ContractEvent.md)<`TAbi`, `TEventName`\>[]\>

#### Inherited from

[IReadWriteContract](IReadWriteContract.md).[getEvents](IReadWriteContract.md#getevents)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:42](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/Contract.ts#L42)

___

### read

▸ **read**<`TFunctionName`\>(`functionName`, `args`, `options?`): `Promise`<{ [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["outputs"][K], "outputs"\> }[K] }\>

Reads a specified function from the contract.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TFunctionName` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | `TFunctionName` |
| `args` | { [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["inputs"][K], "inputs"\> }[K] } |
| `options?` | [`ContractReadOptions`](../modules.md#contractreadoptions) |

#### Returns

`Promise`<{ [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["outputs"][K], "outputs"\> }[K] }\>

#### Inherited from

[IReadWriteContract](IReadWriteContract.md).[read](IReadWriteContract.md#read)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:22](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/Contract.ts#L22)

___

### simulateWrite

▸ **simulateWrite**<`TFunctionName`\>(`functionName`, `args`, `options?`): `Promise`<{ [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["outputs"][K], "outputs"\> }[K] }\>

Simulates a write operation on a specified function of the contract.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TFunctionName` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | `TFunctionName` |
| `args` | { [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["inputs"][K], "inputs"\> }[K] } |
| `options?` | [`ContractWriteOptions`](ContractWriteOptions.md) |

#### Returns

`Promise`<{ [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["outputs"][K], "outputs"\> }[K] }\>

#### Inherited from

[IReadWriteContract](IReadWriteContract.md).[simulateWrite](IReadWriteContract.md#simulatewrite)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:31](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/Contract.ts#L31)

___

### write

▸ **write**<`TFunctionName`\>(`functionName`, `args`, `options?`): `Promise`<{ [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["outputs"][K], "outputs"\> }[K] }\>

Writes to a specified function on the contract.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TFunctionName` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | `TFunctionName` |
| `args` | { [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["inputs"][K], "inputs"\> }[K] } |
| `options?` | [`ContractWriteOptionsWithCallback`](ContractWriteOptionsWithCallback.md) |

#### Returns

`Promise`<{ [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["outputs"][K], "outputs"\> }[K] }\>

#### Inherited from

[IReadWriteContract](IReadWriteContract.md).[write](IReadWriteContract.md#write)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:57](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/Contract.ts#L57)
