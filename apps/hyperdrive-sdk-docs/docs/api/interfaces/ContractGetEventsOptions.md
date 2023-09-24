---
id: "ContractGetEventsOptions"
title: "Interface: ContractGetEventsOptions<TAbi, TEventName>"
sidebar_label: "ContractGetEventsOptions"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends `Abi` |
| `TEventName` | extends [`EventName`](../modules.md#eventname)<`TAbi`\> = [`EventName`](../modules.md#eventname)<`TAbi`\> |

## Properties

### filter

• `Optional` **filter**: `Partial`<`EventInputToPrimitiveTypes`<`Extract`<`Extract`<`Extract`<`Extract`<`TAbi`[`number`], { `type`: ``"event"``  }\>, { `name`: `TEventName`  }\>[``"inputs"``][`number`], `DetailedAbiInput`\>, { `indexed`: ``true``  }\>\>\>

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:77](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/contract/Contract.ts#L77)

___

### fromBlock

• `Optional` **fromBlock**: `bigint` \| `BlockTag`

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:78](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/contract/Contract.ts#L78)

___

### toBlock

• `Optional` **toBlock**: `bigint` \| `BlockTag`

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:79](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/contract/Contract.ts#L79)
