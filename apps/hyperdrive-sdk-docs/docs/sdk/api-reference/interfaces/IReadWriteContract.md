---
id: "IReadWriteContract"
title: "Interface: IReadWriteContract<TAbi>"
sidebar_label: "IReadWriteContract"
sidebar_position: 0
custom_edit_url: null
---

Interface representing a writable contract with specified ABI.
Extends IReadContract to also include write operations.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends `Abi` = `Abi` |

## Hierarchy

- [`IReadContract`](IReadContract.md)<`TAbi`\>

  ↳ **`IReadWriteContract`**

  ↳↳ [`ICachedReadWriteContract`](ICachedReadWriteContract.md)

## Properties

### abi

• **abi**: `TAbi`

#### Inherited from

[IReadContract](IReadContract.md).[abi](IReadContract.md#abi)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:16](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/contract/Contract.ts#L16)

___

### address

• **address**: \`0x${string}\`

#### Inherited from

[IReadContract](IReadContract.md).[address](IReadContract.md#address)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:17](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/contract/Contract.ts#L17)

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

[IReadContract](IReadContract.md).[getEvents](IReadContract.md#getevents)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:42](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/contract/Contract.ts#L42)

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

[IReadContract](IReadContract.md).[read](IReadContract.md#read)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:22](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/contract/Contract.ts#L22)

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

[IReadContract](IReadContract.md).[simulateWrite](IReadContract.md#simulatewrite)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:31](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/contract/Contract.ts#L31)

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

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:57](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/contract/Contract.ts#L57)
