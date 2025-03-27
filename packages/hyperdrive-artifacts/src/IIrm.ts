export const IIrm = {
  name: 'IIrm' as const,
  abi: [
  {
    "type": "function",
    "name": "borrowRate",
    "inputs": [
      {
        "name": "marketParams",
        "type": "tuple",
        "internalType": "struct MarketParams",
        "components": [
          {
            "name": "loanToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "collateralToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "oracle",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "irm",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "lltv",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "market",
        "type": "tuple",
        "internalType": "struct Market",
        "components": [
          {
            "name": "totalSupplyAssets",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "totalSupplyShares",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "totalBorrowAssets",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "totalBorrowShares",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "lastUpdate",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "fee",
            "type": "uint128",
            "internalType": "uint128"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "borrowRateView",
    "inputs": [
      {
        "name": "marketParams",
        "type": "tuple",
        "internalType": "struct MarketParams",
        "components": [
          {
            "name": "loanToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "collateralToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "oracle",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "irm",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "lltv",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "market",
        "type": "tuple",
        "internalType": "struct Market",
        "components": [
          {
            "name": "totalSupplyAssets",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "totalSupplyShares",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "totalBorrowAssets",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "totalBorrowShares",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "lastUpdate",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "fee",
            "type": "uint128",
            "internalType": "uint128"
          }
        ]
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
  bytecode: '0x' as `0x${string}`,
  methodIdentifiers: {
  "borrowRate((address,address,address,address,uint256),(uint128,uint128,uint128,uint128,uint128,uint128))": "9451fed4",
  "borrowRateView((address,address,address,address,uint256),(uint128,uint128,uint128,uint128,uint128,uint128))": "8c00bf6b"
} as const
};
