---
id: "ContractWriteOptionsWithCallback"
title: "Interface: ContractWriteOptionsWithCallback"
sidebar_label: "ContractWriteOptionsWithCallback"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`ContractWriteOptions`](ContractWriteOptions.md)

  ↳ **`ContractWriteOptionsWithCallback`**

## Properties

### accessList

• `Optional` **accessList**: { `address`: \`0x${string}\` ; `storageKeys`: \`0x${string}\`[]  }[]

EIP-2930 access list

#### Inherited from

[ContractWriteOptions](ContractWriteOptions.md).[accessList](ContractWriteOptions.md#accesslist)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:145](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/contract/Contract.ts#L145)

___

### chainId

• `Optional` **chainId**: `bigint`

Chain ID that this transaction is valid on.

#### Inherited from

[ContractWriteOptions](ContractWriteOptions.md).[chainId](ContractWriteOptions.md#chainid)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:152](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/contract/Contract.ts#L152)

___

### from

• `Optional` **from**: \`0x${string}\`

#### Inherited from

[ContractWriteOptions](ContractWriteOptions.md).[from](ContractWriteOptions.md#from)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:122](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/contract/Contract.ts#L122)

___

### gas

• `Optional` **gas**: `bigint`

Gas limit

#### Inherited from

[ContractWriteOptions](ContractWriteOptions.md).[gas](ContractWriteOptions.md#gas)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:126](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/contract/Contract.ts#L126)

___

### gasPrice

• `Optional` **gasPrice**: `bigint`

The gas price willing to be paid by the sender in wei

#### Inherited from

[ContractWriteOptions](ContractWriteOptions.md).[gasPrice](ContractWriteOptions.md#gasprice)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:132](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/contract/Contract.ts#L132)

___

### input

• `Optional` **input**: \`0x${string}\`

#### Inherited from

[ContractWriteOptions](ContractWriteOptions.md).[input](ContractWriteOptions.md#input)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:128](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/contract/Contract.ts#L128)

___

### maxFeePerGas

• `Optional` **maxFeePerGas**: `bigint`

The maximum total fee per gas the sender is willing to pay (includes the
network / base fee and miner / priority fee) in wei

#### Inherited from

[ContractWriteOptions](ContractWriteOptions.md).[maxFeePerGas](ContractWriteOptions.md#maxfeepergas)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:141](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/contract/Contract.ts#L141)

___

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: `bigint`

Maximum fee per gas the sender is willing to pay to miners in wei

#### Inherited from

[ContractWriteOptions](ContractWriteOptions.md).[maxPriorityFeePerGas](ContractWriteOptions.md#maxpriorityfeepergas)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:136](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/contract/Contract.ts#L136)

___

### nonce

• `Optional` **nonce**: `bigint`

#### Inherited from

[ContractWriteOptions](ContractWriteOptions.md).[nonce](ContractWriteOptions.md#nonce)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:120](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/contract/Contract.ts#L120)

___

### onSubmitted

• `Optional` **onSubmitted**: (`hash`: \`0x${string}\`) => `void`

#### Type declaration

▸ (`hash`): `void`

Called when a transaction is submitted on chain.

##### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | \`0x${string}\` |

##### Returns

`void`

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:159](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/contract/Contract.ts#L159)

___

### to

• `Optional` **to**: \`0x${string}\`

#### Inherited from

[ContractWriteOptions](ContractWriteOptions.md).[to](ContractWriteOptions.md#to)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:121](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/contract/Contract.ts#L121)

___

### type

• `Optional` **type**: \`0x${string}\`

#### Inherited from

[ContractWriteOptions](ContractWriteOptions.md).[type](ContractWriteOptions.md#type)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:119](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/contract/Contract.ts#L119)

___

### value

• `Optional` **value**: `bigint`

#### Inherited from

[ContractWriteOptions](ContractWriteOptions.md).[value](ContractWriteOptions.md#value)

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:127](https://github.com/delvtech/hyperdrive-monorepo/blob/3e85835/packages/hyperdrive-sdk/src/contract/Contract.ts#L127)
