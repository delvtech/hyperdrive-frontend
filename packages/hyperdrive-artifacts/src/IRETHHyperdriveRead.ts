export const IRETHHyperdriveRead = {
  abi: [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "baseToken",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_checkpointTime",
        "type": "uint256"
      }
    ],
    "name": "getCheckpoint",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint128",
            "name": "weightedSpotPrice",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "lastWeightedSpotPriceUpdateTime",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "vaultSharePrice",
            "type": "uint128"
          }
        ],
        "internalType": "struct IHyperdrive.Checkpoint",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_checkpointTime",
        "type": "uint256"
      }
    ],
    "name": "getCheckpointExposure",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMarketState",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint128",
            "name": "shareReserves",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "bondReserves",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "longExposure",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "longsOutstanding",
            "type": "uint128"
          },
          {
            "internalType": "int128",
            "name": "shareAdjustment",
            "type": "int128"
          },
          {
            "internalType": "uint128",
            "name": "shortsOutstanding",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "longAverageMaturityTime",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "shortAverageMaturityTime",
            "type": "uint128"
          },
          {
            "internalType": "bool",
            "name": "isInitialized",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isPaused",
            "type": "bool"
          },
          {
            "internalType": "uint112",
            "name": "zombieBaseProceeds",
            "type": "uint112"
          },
          {
            "internalType": "uint128",
            "name": "zombieShareReserves",
            "type": "uint128"
          }
        ],
        "internalType": "struct IHyperdrive.MarketState",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPoolConfig",
    "outputs": [
      {
        "components": [
          {
            "internalType": "contract IERC20",
            "name": "baseToken",
            "type": "address"
          },
          {
            "internalType": "contract IERC20",
            "name": "vaultSharesToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "linkerFactory",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "linkerCodeHash",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "initialVaultSharePrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minimumShareReserves",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minimumTransactionAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "circuitBreakerDelta",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "positionDuration",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "checkpointDuration",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeStretch",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "governance",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "feeCollector",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "sweepCollector",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "curve",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "flat",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "governanceLP",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "governanceZombie",
                "type": "uint256"
              }
            ],
            "internalType": "struct IHyperdrive.Fees",
            "name": "fees",
            "type": "tuple"
          }
        ],
        "internalType": "struct IHyperdrive.PoolConfig",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPoolInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "shareReserves",
            "type": "uint256"
          },
          {
            "internalType": "int256",
            "name": "shareAdjustment",
            "type": "int256"
          },
          {
            "internalType": "uint256",
            "name": "zombieBaseProceeds",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "zombieShareReserves",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "bondReserves",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lpTotalSupply",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "vaultSharePrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "longsOutstanding",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "longAverageMaturityTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "shortsOutstanding",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "shortAverageMaturityTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "withdrawalSharesReadyToWithdraw",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "withdrawalSharesProceeds",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lpSharePrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "longExposure",
            "type": "uint256"
          }
        ],
        "internalType": "struct IHyperdrive.PoolInfo",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getUncollectedGovernanceFees",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getWithdrawPool",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint128",
            "name": "readyToWithdraw",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "proceeds",
            "type": "uint128"
          }
        ],
        "internalType": "struct IHyperdrive.WithdrawPool",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_account",
        "type": "address"
      }
    ],
    "name": "isPauser",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "_slots",
        "type": "uint256[]"
      }
    ],
    "name": "load",
    "outputs": [
      {
        "internalType": "bytes32[]",
        "name": "",
        "type": "bytes32[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "nonces",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "perTokenApprovals",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rocketStorage",
    "outputs": [
      {
        "internalType": "contract IRocketStorage",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vaultSharesToken",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "version",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  }
] as const,
  bytecode: '0x' as `0x${string}`,
  methodIdentifiers: {
  "balanceOf(uint256,address)": "3656eec2",
  "baseToken()": "c55dae63",
  "decimals()": "313ce567",
  "getCheckpoint(uint256)": "20fc4881",
  "getCheckpointExposure(uint256)": "cf210e65",
  "getMarketState()": "d8165743",
  "getPoolConfig()": "b0d96580",
  "getPoolInfo()": "60246c88",
  "getUncollectedGovernanceFees()": "c69e16ad",
  "getWithdrawPool()": "fba56008",
  "isApprovedForAll(address,address)": "e985e9c5",
  "isPauser(address)": "46fbf68e",
  "load(uint256[])": "becee9c3",
  "name()": "06fdde03",
  "name(uint256)": "00ad800c",
  "nonces(address)": "7ecebe00",
  "perTokenApprovals(uint256,address,address)": "21ff32a9",
  "rocketStorage()": "67601a8e",
  "symbol(uint256)": "4e41a1fb",
  "totalSupply(uint256)": "bd85b039",
  "vaultSharesToken()": "0a4e1493",
  "version()": "54fd4d50"
} as const
};
