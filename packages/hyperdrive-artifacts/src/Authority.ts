export const Authority = {
  name: 'Authority' as const,
  abi: [
  {
    "type": "function",
    "name": "canCall",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "target",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "functionSig",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  }
] as const,
  bytecode: '0x' as `0x${string}`,
  methodIdentifiers: {
  "canCall(address,address,bytes4)": "b7009613"
} as const
};
