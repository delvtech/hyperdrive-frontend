export const ICornSilo = {
  name: 'ICornSilo' as const,
  abi: [
  {
    "type": "function",
    "name": "addApprovedToken",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "bridgeAllTokens",
    "inputs": [
      {
        "name": "recipient",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "cost",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "maxGas",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "gasPriceBid",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "bridgeToken",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "recipient",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "maxGas",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "gasPriceBid",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "deposit",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "assets",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "shares",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "depositFor",
    "inputs": [
      {
        "name": "recipient",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "assets",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "shares",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "enableBridge",
    "inputs": [
      {
        "name": "gatewayRouter",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "erc20Inbox",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "swapFacilityVault",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "from18DecimalsToAssetDecimals",
    "inputs": [
      {
        "name": "amountIn18Decimals",
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
  },
  {
    "type": "function",
    "name": "fromAssetDecimalsTo18Decimals",
    "inputs": [
      {
        "name": "amount",
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
  },
  {
    "type": "function",
    "name": "getApprovedTokens",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getGatewayRouter",
    "inputs": [],
    "outputs": [
      {
        "name": "gatewayRouter",
        "type": "address",
        "internalType": "contract IGatewayRouter"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "mintAndDepositBitcorn",
    "inputs": [
      {
        "name": "assets",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "shares",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "mintAndDepositBitcornFor",
    "inputs": [
      {
        "name": "recipient",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "assets",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "shares",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "pause",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "redeemAll",
    "inputs": [],
    "outputs": [
      {
        "name": "approvedTokens",
        "type": "address[]",
        "internalType": "address[]"
      },
      {
        "name": "depositedAssets",
        "type": "uint256[]",
        "internalType": "uint256[]"
      },
      {
        "name": "bitcornShares",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "minterAssetReturned",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "redeemBitcorn",
    "inputs": [
      {
        "name": "shares",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "assets",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "redeemToken",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "shares",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "assets",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "sharesOf",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
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
  },
  {
    "type": "function",
    "name": "totalShares",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
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
  },
  {
    "type": "function",
    "name": "unpause",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "BridgeEnabled",
    "inputs": [
      {
        "name": "gatewayRouter",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "swapFacilityVault",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokenBridged",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "recipient",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "maxGas",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "gasPriceBid",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "data",
        "type": "bytes",
        "indexed": false,
        "internalType": "bytes"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokenDeposited",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "token",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "assets",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "shares",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokenWithdrawn",
    "inputs": [
      {
        "name": "user",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "token",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "assets",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "shares",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "BelowOneSatoshiOfShares",
    "inputs": [
      {
        "name": "shares",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "oneSatoshiOfBitcornShares",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "BitcornMinterAssetMustNotBeApprovedToken",
    "inputs": [
      {
        "name": "bitcornMinterAsset",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "BitcornMustNotBeApprovedToken",
    "inputs": [
      {
        "name": "bitcorn",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "BridgeIsEnabled",
    "inputs": []
  },
  {
    "type": "error",
    "name": "BridgeIsNotSet",
    "inputs": []
  },
  {
    "type": "error",
    "name": "BridgeNotEnabled",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InsufficientBitcornSharesToBridge",
    "inputs": [
      {
        "name": "cachedShares",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "requiredShares",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "InsufficientShares",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "cachedShares",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "shares",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "SharesNotMultipleOfOneSatoshi",
    "inputs": [
      {
        "name": "bitcornShares",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "oneSatoshiOfBitcornShares",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "TokenAlreadyApproved",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "TokenNotApproved",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "WithdrawalFeeAboveMax",
    "inputs": [
      {
        "name": "fee",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "ZeroDeposit",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ZeroShares",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ZeroSharesForAnyToken",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ZeroWithdraw",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      }
    ]
  }
] as const,
  bytecode: '0x' as `0x${string}`,
  methodIdentifiers: {
  "addApprovedToken(address)": "cd10534b",
  "bridgeAllTokens(address,uint256,uint256,uint256,bytes)": "3d169812",
  "bridgeToken(address,address,uint256,uint256,bytes)": "b9d64e9f",
  "deposit(address,uint256)": "47e7ef24",
  "depositFor(address,address,uint256)": "b3db428b",
  "enableBridge(address,address,address)": "15ec1f6f",
  "from18DecimalsToAssetDecimals(uint256)": "789680f4",
  "fromAssetDecimalsTo18Decimals(uint256)": "101ab12c",
  "getApprovedTokens()": "6afc0c5f",
  "getGatewayRouter()": "87f0cf2e",
  "mintAndDepositBitcorn(uint256)": "ce75d53e",
  "mintAndDepositBitcornFor(address,uint256)": "55ae9046",
  "pause()": "8456cb59",
  "redeemAll()": "2f4350c2",
  "redeemBitcorn(uint256)": "bdafe351",
  "redeemToken(address,uint256)": "830cbbbd",
  "sharesOf(address,address)": "0a7292f5",
  "totalShares(address)": "bf6b874e",
  "unpause()": "3f4ba83a"
} as const
};
