---
id: "ContractWriteOptions"
title: "Interface: ContractWriteOptions"
sidebar_label: "ContractWriteOptions"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`ContractWriteOptions`**

  ↳ [`ContractWriteOptionsWithCallback`](ContractWriteOptionsWithCallback.md)

## Properties

### accessList

• `Optional` **accessList**: { `address`: \`0x${string}\` ; `storageKeys`: \`0x${string}\`[]  }[]

EIP-2930 access list

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:145](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/Contract.ts#L145)

___

### chainId

• `Optional` **chainId**: `bigint`

Chain ID that this transaction is valid on.

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:152](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/Contract.ts#L152)

___

### from

• `Optional` **from**: \`0x${string}\`

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:122](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/Contract.ts#L122)

___

### gas

• `Optional` **gas**: `bigint`

Gas limit

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:126](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/Contract.ts#L126)

___

### gasPrice

• `Optional` **gasPrice**: `bigint`

The gas price willing to be paid by the sender in wei

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:132](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/Contract.ts#L132)

___

### input

• `Optional` **input**: \`0x${string}\`

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:128](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/Contract.ts#L128)

___

### maxFeePerGas

• `Optional` **maxFeePerGas**: `bigint`

The maximum total fee per gas the sender is willing to pay (includes the
network / base fee and miner / priority fee) in wei

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:141](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/Contract.ts#L141)

___

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: `bigint`

Maximum fee per gas the sender is willing to pay to miners in wei

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:136](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/Contract.ts#L136)

___

### nonce

• `Optional` **nonce**: `bigint`

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:120](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/Contract.ts#L120)

___

### to

• `Optional` **to**: \`0x${string}\`

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:121](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/Contract.ts#L121)

___

### type

• `Optional` **type**: \`0x${string}\`

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:119](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/Contract.ts#L119)

___

### value

• `Optional` **value**: `bigint`

#### Defined in

[packages/hyperdrive-sdk/src/contract/Contract.ts:127](https://github.com/delvtech/hyperdrive-monorepo/blob/75f770a/packages/hyperdrive-sdk/src/contract/Contract.ts#L127)
