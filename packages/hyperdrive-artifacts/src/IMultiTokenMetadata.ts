export const IMultiTokenMetadata = {
  name: 'IMultiTokenMetadata' as const,
  abi: [
  {
    "type": "function",
    "name": "PERMIT_TYPEHASH",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "domainSeparator",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  }
] as const,
  bytecode: '0x' as `0x${string}`,
  methodIdentifiers: {
  "PERMIT_TYPEHASH()": "30adf81f",
  "domainSeparator()": "f698da25"
} as const
};
