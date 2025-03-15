export const EtchingVault = {
  name: 'EtchingVault' as const,
  abi: [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_baseToken_",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_vaultSharePrice_",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "asset",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "convertToAssets",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  }
] as const,
  bytecode: '0x60c060405234801561000f575f80fd5b5060405161019138038061019183398101604081905261002e91610044565b6001600160a01b0390911660805260a05261007b565b5f8060408385031215610055575f80fd5b82516001600160a01b038116811461006b575f80fd5b6020939093015192949293505050565b60805160a05160f96100985f395f604201525f6084015260f95ff3fe6080604052348015600e575f80fd5b50600436106030575f3560e01c806307a2d13a14603457806338d52e0f146077575b5f80fd5b6064603f36600460ad565b507f000000000000000000000000000000000000000000000000000000000000000090565b6040519081526020015b60405180910390f35b6040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152602001606e565b5f6020828403121560bc575f80fd5b503591905056fea264697066735822122096e50bd5dc98c6d2bcb55b4e1b306bf05c1561d1057b9b404154025d00a265f464736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "asset()": "38d52e0f",
  "convertToAssets(uint256)": "07a2d13a"
} as const
};
