export const CornConversions = {
  name: 'CornConversions' as const,
  abi: [
  {
    "type": "function",
    "name": "convertToBase",
    "inputs": [
      {
        "name": "_shareAmount",
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
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "convertToShares",
    "inputs": [
      {
        "name": "_baseAmount",
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
    "stateMutability": "pure"
  }
] as const,
  bytecode: '0x60ac610034600b8282823980515f1a60731461002857634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603c575f3560e01c8063b88fed9f146040578063c6e6f592146040575b5f80fd5b604e604b3660046060565b90565b60405190815260200160405180910390f35b5f60208284031215606f575f80fd5b503591905056fea2646970667358221220b9d26028c7b4c6a20d26496e9e331e5d123bedaf97958cf869de383f28cec77d64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "convertToBase(uint256)": "b88fed9f",
  "convertToShares(uint256)": "c6e6f592"
} as const
};
