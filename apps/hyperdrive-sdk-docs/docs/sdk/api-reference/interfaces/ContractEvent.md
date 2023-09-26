---
id: "ContractEvent"
title: "Interface: ContractEvent<TAbi, TEventName>"
sidebar_label: "ContractEvent"
sidebar_position: 0
custom_edit_url: null
---

A strongly typed event object based on an abi

## Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends `Abi` |
| `TEventName` | extends [`EventName`](../modules.md#eventname)<`TAbi`\> = [`EventName`](../modules.md#eventname)<`TAbi`\> |

## Properties

### args

• **args**: [`EventArgs`](../modules.md#eventargs)<`TAbi`, `TEventName`\>

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:90](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/contract/Contract.ts#L90)

___

### blockNumber

• `Optional` **blockNumber**: `bigint`

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:92](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/contract/Contract.ts#L92)

___

### data

• `Optional` **data**: \`0x${string}\`

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:91](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/contract/Contract.ts#L91)

___

### eventName

• **eventName**: `TEventName`

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:89](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/contract/Contract.ts#L89)

___

### transactionHash

• `Optional` **transactionHash**: \`0x${string}\`

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:93](https://github.com/delvtech/hyperdrive-monorepo/blob/ad69d2e/packages/hyperdrive-sdk/src/contract/Contract.ts#L93)
