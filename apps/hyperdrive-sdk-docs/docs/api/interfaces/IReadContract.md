---
id: "IReadContract"
title: "Interface: IReadContract<TAbi>"
sidebar_label: "IReadContract"
sidebar_position: 0
custom_edit_url: null
---

Interface representing a readable contract with specified ABI.
Provides methods to read and simulate write operations on the contract.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends `Abi` = `Abi` |

## Hierarchy

- **`IReadContract`**

  ↳ [`IReadWriteContract`](IReadWriteContract.md)

  ↳ [`ICachedReadContract`](ICachedReadContract.md)

## Properties

### abi

• **abi**: `TAbi`

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:16](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/contract/Contract.ts#L16)

___

### address

• **address**: \`0x${string}\`

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:17](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/contract/Contract.ts#L17)

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

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:42](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/contract/Contract.ts#L42)

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
| `options?` | [`ContractReadOptions`](../#contractreadoptions) |

#### Returns

`Promise`<{ [K in string \| number \| symbol]: { [K in string \| number \| symbol]: AbiParameterToPrimitiveType<Extract<Extract<TAbi[number], Object\>, Object\>["outputs"][K], "outputs"\> }[K] }\>

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:22](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/contract/Contract.ts#L22)

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

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:31](https://github.com/delvtech/hyperdrive-monorepo/blob/e9b3f15/packages/hyperdrive-sdk/src/contract/Contract.ts#L31)
