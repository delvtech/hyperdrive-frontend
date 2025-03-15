export const IInitializableAToken = {
  name: 'IInitializableAToken' as const,
  abi: [
  {
    "type": "function",
    "name": "initialize",
    "inputs": [
      {
        "name": "pool",
        "type": "address",
        "internalType": "contract IPool"
      },
      {
        "name": "treasury",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "underlyingAsset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "incentivesController",
        "type": "address",
        "internalType": "contract IAaveIncentivesController"
      },
      {
        "name": "aTokenDecimals",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "aTokenName",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "aTokenSymbol",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "params",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "Initialized",
    "inputs": [
      {
        "name": "underlyingAsset",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "pool",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "treasury",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "incentivesController",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "aTokenDecimals",
        "type": "uint8",
        "indexed": false,
        "internalType": "uint8"
      },
      {
        "name": "aTokenName",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "aTokenSymbol",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "params",
        "type": "bytes",
        "indexed": false,
        "internalType": "bytes"
      }
    ],
    "anonymous": false
  }
] as const,
  bytecode: '0x' as `0x${string}`,
  methodIdentifiers: {
  "initialize(address,address,address,address,uint8,string,string,bytes)": "183fb413"
} as const
};
