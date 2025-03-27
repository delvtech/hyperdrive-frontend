export const IsolationModeLogic = {
  name: 'IsolationModeLogic' as const,
  abi: [
  {
    "type": "event",
    "name": "IsolationModeTotalDebtUpdated",
    "inputs": [
      {
        "name": "asset",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "totalDebt",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  }
] as const,
  bytecode: '0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f80fdfea2646970667358221220c170b3081f9db79231c9a778cf578b6f91949997cf2eb4b07eb95309c94484e964736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {} as const
};
