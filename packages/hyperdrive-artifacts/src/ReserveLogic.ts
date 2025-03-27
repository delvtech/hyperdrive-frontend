export const ReserveLogic = {
  name: 'ReserveLogic' as const,
  abi: [
  {
    "type": "event",
    "name": "ReserveDataUpdated",
    "inputs": [
      {
        "name": "reserve",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "liquidityRate",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "stableBorrowRate",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "variableBorrowRate",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "liquidityIndex",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "variableBorrowIndex",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  }
] as const,
  bytecode: '0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f80fdfea2646970667358221220649567c74e7f8112bbcfcd979bfe83753bd705e5a883f230badb8f081c5b6a9064736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {} as const
};
