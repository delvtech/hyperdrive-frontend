export const EETHTarget0 = {
  name: 'EETHTarget0' as const,
  abi: [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_config",
        "type": "tuple",
        "internalType": "struct IHyperdrive.PoolConfig",
        "components": [
          {
            "name": "baseToken",
            "type": "address",
            "internalType": "contract IERC20"
          },
          {
            "name": "vaultSharesToken",
            "type": "address",
            "internalType": "contract IERC20"
          },
          {
            "name": "linkerFactory",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "linkerCodeHash",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "initialVaultSharePrice",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "minimumShareReserves",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "minimumTransactionAmount",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "circuitBreakerDelta",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "positionDuration",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "checkpointDuration",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "timeStretch",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "governance",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "feeCollector",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "sweepCollector",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "checkpointRewarder",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "fees",
            "type": "tuple",
            "internalType": "struct IHyperdrive.Fees",
            "components": [
              {
                "name": "curve",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "flat",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "governanceLP",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "governanceZombie",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          }
        ]
      },
      {
        "name": "__adminController",
        "type": "address",
        "internalType": "contract IHyperdriveAdminController"
      },
      {
        "name": "_liquidityPool",
        "type": "address",
        "internalType": "contract ILiquidityPool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "_liquidityPool",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract ILiquidityPool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "adminController",
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
    "name": "balanceOf",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "account",
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
    "name": "baseToken",
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
    "name": "batchTransferFrom",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "ids",
        "type": "uint256[]",
        "internalType": "uint256[]"
      },
      {
        "name": "values",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "collectGovernanceFee",
    "inputs": [
      {
        "name": "_options",
        "type": "tuple",
        "internalType": "struct IHyperdrive.Options",
        "components": [
          {
            "name": "destination",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "asBase",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "extraData",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "proceeds",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
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
    "stateMutability": "view"
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
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "decimals",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint8",
        "internalType": "uint8"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "getCheckpoint",
    "inputs": [
      {
        "name": "_checkpointTime",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct IHyperdrive.Checkpoint",
        "components": [
          {
            "name": "weightedSpotPrice",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "lastWeightedSpotPriceUpdateTime",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "vaultSharePrice",
            "type": "uint128",
            "internalType": "uint128"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getCheckpointExposure",
    "inputs": [
      {
        "name": "_checkpointTime",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getMarketState",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct IHyperdrive.MarketState",
        "components": [
          {
            "name": "shareReserves",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "bondReserves",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "longExposure",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "longsOutstanding",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "shareAdjustment",
            "type": "int128",
            "internalType": "int128"
          },
          {
            "name": "shortsOutstanding",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "longAverageMaturityTime",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "shortAverageMaturityTime",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "isInitialized",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "isPaused",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "zombieBaseProceeds",
            "type": "uint112",
            "internalType": "uint112"
          },
          {
            "name": "zombieShareReserves",
            "type": "uint128",
            "internalType": "uint128"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getPoolConfig",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct IHyperdrive.PoolConfig",
        "components": [
          {
            "name": "baseToken",
            "type": "address",
            "internalType": "contract IERC20"
          },
          {
            "name": "vaultSharesToken",
            "type": "address",
            "internalType": "contract IERC20"
          },
          {
            "name": "linkerFactory",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "linkerCodeHash",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "initialVaultSharePrice",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "minimumShareReserves",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "minimumTransactionAmount",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "circuitBreakerDelta",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "positionDuration",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "checkpointDuration",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "timeStretch",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "governance",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "feeCollector",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "sweepCollector",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "checkpointRewarder",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "fees",
            "type": "tuple",
            "internalType": "struct IHyperdrive.Fees",
            "components": [
              {
                "name": "curve",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "flat",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "governanceLP",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "governanceZombie",
                "type": "uint256",
                "internalType": "uint256"
              }
            ]
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getPoolInfo",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct IHyperdrive.PoolInfo",
        "components": [
          {
            "name": "shareReserves",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "shareAdjustment",
            "type": "int256",
            "internalType": "int256"
          },
          {
            "name": "zombieBaseProceeds",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "zombieShareReserves",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "bondReserves",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "lpTotalSupply",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "vaultSharePrice",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "longsOutstanding",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "longAverageMaturityTime",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "shortsOutstanding",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "shortAverageMaturityTime",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "withdrawalSharesReadyToWithdraw",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "withdrawalSharesProceeds",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "lpSharePrice",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "longExposure",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getUncollectedGovernanceFees",
    "inputs": [],
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
    "name": "getWithdrawPool",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct IHyperdrive.WithdrawPool",
        "components": [
          {
            "name": "readyToWithdraw",
            "type": "uint128",
            "internalType": "uint128"
          },
          {
            "name": "proceeds",
            "type": "uint128",
            "internalType": "uint128"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isApprovedForAll",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "operator",
        "type": "address",
        "internalType": "address"
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
  },
  {
    "type": "function",
    "name": "isPauser",
    "inputs": [
      {
        "name": "_account",
        "type": "address",
        "internalType": "address"
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
  },
  {
    "type": "function",
    "name": "kind",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "liquidityPool",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract ILiquidityPool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "load",
    "inputs": [
      {
        "name": "_slots",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "name",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "name",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "nonces",
    "inputs": [
      {
        "name": "account",
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
    "name": "pause",
    "inputs": [
      {
        "name": "_status",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "perTokenApprovals",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "spender",
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
    "name": "permitForAll",
    "inputs": [
      {
        "name": "domainSeparator",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "permitTypeHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "owner",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "spender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_approved",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "deadline",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "v",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "r",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "s",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setApproval",
    "inputs": [
      {
        "name": "tokenID",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "operator",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setApprovalBridge",
    "inputs": [
      {
        "name": "tokenID",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "operator",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "caller",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setApprovalForAll",
    "inputs": [
      {
        "name": "operator",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "approved",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setGovernance",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setPauser",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "sweep",
    "inputs": [
      {
        "name": "_target",
        "type": "address",
        "internalType": "contract IERC20"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "symbol",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "totalShares",
    "inputs": [],
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
    "name": "totalSupply",
    "inputs": [
      {
        "name": "tokenId",
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
    "name": "transferFrom",
    "inputs": [
      {
        "name": "tokenID",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "from",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferFromBridge",
    "inputs": [
      {
        "name": "tokenID",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "from",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "caller",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "vaultSharesToken",
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
    "name": "version",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "event",
    "name": "AddLiquidity",
    "inputs": [
      {
        "name": "provider",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "lpAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "vaultSharePrice",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "asBase",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      },
      {
        "name": "lpSharePrice",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "extraData",
        "type": "bytes",
        "indexed": false,
        "internalType": "bytes"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Approval",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "spender",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "value",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ApprovalForAll",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "operator",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "approved",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CloseLong",
    "inputs": [
      {
        "name": "trader",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "destination",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "assetId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "maturityTime",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "vaultSharePrice",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "asBase",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      },
      {
        "name": "bondAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "extraData",
        "type": "bytes",
        "indexed": false,
        "internalType": "bytes"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CloseShort",
    "inputs": [
      {
        "name": "trader",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "destination",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "assetId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "maturityTime",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "vaultSharePrice",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "asBase",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      },
      {
        "name": "basePayment",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "bondAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "extraData",
        "type": "bytes",
        "indexed": false,
        "internalType": "bytes"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CollectGovernanceFee",
    "inputs": [
      {
        "name": "collector",
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
        "name": "vaultSharePrice",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "asBase",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CreateCheckpoint",
    "inputs": [
      {
        "name": "checkpointTime",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "checkpointVaultSharePrice",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "vaultSharePrice",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "maturedShorts",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "maturedLongs",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "lpSharePrice",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Initialize",
    "inputs": [
      {
        "name": "provider",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "lpAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "vaultSharePrice",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "asBase",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      },
      {
        "name": "apr",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "extraData",
        "type": "bytes",
        "indexed": false,
        "internalType": "bytes"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OpenLong",
    "inputs": [
      {
        "name": "trader",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "assetId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "maturityTime",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "vaultSharePrice",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "asBase",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      },
      {
        "name": "bondAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "extraData",
        "type": "bytes",
        "indexed": false,
        "internalType": "bytes"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OpenShort",
    "inputs": [
      {
        "name": "trader",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "assetId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "maturityTime",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "vaultSharePrice",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "asBase",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      },
      {
        "name": "baseProceeds",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "bondAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "extraData",
        "type": "bytes",
        "indexed": false,
        "internalType": "bytes"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PauseStatusUpdated",
    "inputs": [
      {
        "name": "isPaused",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RedeemWithdrawalShares",
    "inputs": [
      {
        "name": "provider",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "destination",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "withdrawalShareAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "vaultSharePrice",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "asBase",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      },
      {
        "name": "extraData",
        "type": "bytes",
        "indexed": false,
        "internalType": "bytes"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RemoveLiquidity",
    "inputs": [
      {
        "name": "provider",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "destination",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "lpAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "vaultSharePrice",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "asBase",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      },
      {
        "name": "withdrawalShareAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "lpSharePrice",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "extraData",
        "type": "bytes",
        "indexed": false,
        "internalType": "bytes"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Sweep",
    "inputs": [
      {
        "name": "collector",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "target",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TransferSingle",
    "inputs": [
      {
        "name": "operator",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "from",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "id",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "value",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "AddressEmptyCode",
    "inputs": [
      {
        "name": "target",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "AddressInsufficientBalance",
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
    "name": "BatchInputLengthMismatch",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ExpiredDeadline",
    "inputs": []
  },
  {
    "type": "error",
    "name": "FailedInnerCall",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidERC20Bridge",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidFeeDestination",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidSignature",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidTimestamp",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ReentrancyGuardReentrantCall",
    "inputs": []
  },
  {
    "type": "error",
    "name": "RestrictedZeroAddress",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ReturnData",
    "inputs": [
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ]
  },
  {
    "type": "error",
    "name": "SafeERC20FailedOperation",
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
    "name": "SweepFailed",
    "inputs": []
  },
  {
    "type": "error",
    "name": "TransferFailed",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Unauthorized",
    "inputs": []
  },
  {
    "type": "error",
    "name": "UnsafeCastToInt256",
    "inputs": []
  },
  {
    "type": "error",
    "name": "UnsupportedToken",
    "inputs": []
  }
] as const,
  bytecode: '0x6102a060405234801562000011575f80fd5b5060405162003ecb38038062003ecb8339810160408190526200003491620001ac565b60015f5582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815190920151909152805160409081015161016052905160609081015161018052908501518216610240529093015161026052908216610220521661028052620002f8565b60405161020081016001600160401b03811182821017156200011957634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b038116811462000136575f80fd5b919050565b5f608082840312156200014c575f80fd5b604051608081016001600160401b03811182821017156200017b57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a0811215620001c1575f80fd5b61026080821215620001d1575f80fd5b620001db620000e9565b9150620001e8866200011f565b8252620001f8602087016200011f565b60208301526200020b604087016200011f565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620002768188016200011f565b908301526101806200028a8782016200011f565b908301526101a06200029e8782016200011f565b908301526101c0620002b28782016200011f565b908301526101e0620002c7888883016200013b565b8184015250819450620002dc8187016200011f565b93505050620002ef61028085016200011f565b90509250925092565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613a59620004725f395f818161030101528181610b9d0152818161259b01526125e701525f8181610d5a015261232301525f8181610d2b01526122e601525f8181610c0701528181610e8a01528181610f1801528181610fa6015281816110340152818161163d015281816116d30152818161189501528181611ead01528181611f8101526120d201525f610df201525f8181610dcc01526124c801525f8181610da601526124a201525f8181610d80015261247c01525f61113f01525f61111901525f6110f301525f6110cd01525f8181610e6401526124ee01525f8181610e18015281816112ca01526128ad01525f8181610e3e0152612c3001525f818161064b01528181610cfc01528181611e22015281816125bc015281816126080152612b9f01525f8181610ccd01526112670152613a595ff3fe608060405234801561000f575f80fd5b506004361061023e575f3560e01c806360246c8811610135578063bd85b039116100b4578063cf210e6511610079578063cf210e6514610521578063d816574314610534578063e44808bc14610549578063e985e9c51461055c578063fba560081461056f575f80fd5b8063bd85b039146104cb578063becee9c3146104de578063c55dae63146104fe578063c69e16ad14610506578063c6e6f5921461050e575f80fd5b80639cd241af116100fa5780639cd241af1461046c578063a22cb4651461047f578063ab033ea914610492578063b0d96580146104a3578063b88fed9f146104b8575f80fd5b806360246c8814610422578063665a11ca146104375780637180c8ca1461043f5780637ecebe0014610451578063950c5d0314610464575f80fd5b806320fc4881116101c15780633e691db9116101865780633e691db9146103be57806346fbf68e146103d15780634e41a1fb146103f45780634ed2d6ac1461040757806354fd4d501461041a575f80fd5b806320fc48811461032357806321ff32a914610368578063313ce567146103895780633656eec2146103a35780633a98ef39146103b6575f80fd5b80630a4e1493116102075780630a4e1493146102a357806314e5f07b146102c357806317fad7fc146102d65780631c0f12b6146102e9578063207deba0146102fc575f80fd5b8062ad800c1461024257806301681a621461026b57806302329a291461028057806304baa00b1461029357806306fdde031461029b575b5f80fd5b610255610250366004612e68565b61059e565b6040516102629190612ecc565b60405180910390f35b61027e610279366004612ef2565b6105d5565b005b61027e61028e366004612f1a565b6105de565b6102556105e7565b610255610626565b6102ab61063d565b6040516001600160a01b039091168152602001610262565b61027e6102d1366004612f35565b61067c565b61027e6102e436600461300b565b610698565b61027e6102f736600461309a565b6106ae565b6102ab7f000000000000000000000000000000000000000000000000000000000000000081565b610336610331366004612e68565b6106c1565b6040805182516001600160801b0390811682526020808501518216908301529282015190921690820152606001610262565b61037b6103763660046130df565b61072a565b604051908152602001610262565b61039161076f565b60405160ff9091168152602001610262565b61037b6103b136600461311e565b610786565b61037b6107be565b61037b6103cc36600461314c565b6107dc565b6103e46103df366004612ef2565b6107e6565b6040519015158152602001610262565b610255610402366004612e68565b610805565b61027e610415366004613183565b610813565b610255610861565b61042a610896565b60405161026291906131ca565b6102ab610b8f565b61027e61044d36600461326b565b5050565b61037b61045f366004612ef2565b610bce565b6102ab610bf9565b61027e61047a366004613297565b610c38565b61027e61048d36600461326b565b610c49565b61027e6104a0366004612ef2565b50565b6104ab610cb4565b60405161026291906132cc565b61037b6104c6366004612e68565b611174565b61037b6104d9366004612e68565b611181565b6104f16104ec3660046133f2565b6111a2565b6040516102629190613431565b6102ab611259565b61037b611298565b61037b61051c366004612e68565b6112b1565b61037b61052f366004612e68565b6112be565b61053c6112f4565b6040516102629190613474565b61027e610557366004613585565b6113ff565b6103e461056a3660046135e0565b611447565b61057761148a565b6040805182516001600160801b039081168252602093840151169281019290925201610262565b60606105d06105ac836114e8565b6040516020016105bc9190612ecc565b60405160208183030381529060405261160e565b919050565b6104a081611632565b6104a081611893565b60606106236040518060400160405280600e81526020016d454554484879706572647269766560901b8152506040516020016105bc9190612ecc565b90565b606061062360016040516020016105bc919061360c565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f9161062391016105bc565b61068d8989898989898989896119ab565b505050505050505050565b6106a6868686868686611b9d565b505050505050565b6106bb8484848433611c50565b50505050565b604080516060810182525f80825260208201819052918101919091526105d060085f8481526020019081526020015f206040516020016105bc919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b5f838152600d602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261076891016105bc565b9392505050565b60408051601260208201525f9161062391016105bc565b5f828152600a602090815260408083206001600160a01b03851684528252808320548151928301526107b891016105bc565b92915050565b5f6106236107ca611e0b565b6040516020016105bc91815260200190565b5f6107b882611e98565b5f6105d06107f3836120ce565b604080519115156020830152016105bc565b60606105d06105ac836121ac565b8361081d816122a8565b6001600160a01b0316336001600160a01b03161461084e57604051632aab8bd360e01b815260040160405180910390fd5b61085a85858585612365565b5050505050565b606061062360405180604001604052806007815260200166076312e302e32360cc1b8152506040516020016105bc9190612ecc565b610900604051806101e001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f6109096123d1565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654939450926001600160801b039092169161097391906136e1565b61097d91906136f4565b90505f8215610a8c5773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6109a9856123e3565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610a58573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a7c9190613707565b509050610a89818461256d565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201525f906101a081018415610b5c57610b578486612581565b610b5e565b5f5b81526003546001600160801b0316602091820152604051919250610b88916105bc918491016131ca565b5050505090565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f9161062391016105bc565b6001600160a01b0381165f908152600e60209081526040808320548151928301526105d091016105bc565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f9161062391016105bc565b610c4483838333612365565b505050565b335f818152600c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610cbc612d94565b6106236040518061020001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ee4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f089190613735565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f72573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f969190613735565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611000573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110249190613735565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa15801561108e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110b29190613735565b6001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016105bc91906132cc565b5f6105d06107ca83612595565b5f818152600b60209081526040808320548151928301526105d091016105bc565b60605f8267ffffffffffffffff8111156111be576111be613750565b6040519080825280602002602001820160405280156111e7578160200160208202803683370190505b5090505f5b8381101561123d575f85858381811061120757611207613764565b9050602002013590505f815490508084848151811061122857611228613764565b602090810291909101015250506001016111ec565b50611252816040516020016105bc9190613431565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f9161062391016105bc565b5f6106236009546040516020016105bc91815260200190565b5f6105d06107ca836125e1565b5f6105d06107ca6112ef7f0000000000000000000000000000000000000000000000000000000000000000856136e1565b61262d565b60408051610180810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915261062360026040516020016105bc919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84611409816122a8565b6001600160a01b0316336001600160a01b03161461143a57604051632aab8bd360e01b815260040160405180910390fd5b6106a68686868686611c50565b6001600160a01b038281165f908152600c60209081526040808320938516835292815282822054835160ff90911615159181019190915290916107b891016105bc565b604080518082019091525f80825260208201526040805180820182526007546001600160801b03808216808452600160801b9092048116602093840190815284519384019290925290511691810191909152610623906060016105bc565b606060f882901c6001600160f81b0383165f6115038261266d565b90505f836003811115611518576115186136b9565b0361154a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611606565b600183600381111561155e5761155e6136b9565b0361158a57806040516020016115749190613778565b6040516020818303038152906040529350611606565b600283600381111561159e5761159e6136b9565b036115b4578060405160200161157491906137b0565b60038360038111156115c8576115c86136b9565b03611606576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016116299190612ecc565b60405180910390fd5b61163a61271f565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611697573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116bb9190613735565b9050336001600160a01b0382161480159061176757507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa15801561172d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117519190613735565b6001600160a01b0316336001600160a01b031614155b80156117795750611777336120ce565b155b15611796576040516282b42960e81b815260040160405180910390fd5b5f61179f611e0b565b6040516370a0823160e01b81523060048201529091505f906001600160a01b038516906370a0823190602401602060405180830381865afa1580156117e6573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061180a91906137e9565b90506118206001600160a01b0385168483612747565b81611829611e0b565b14611847576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050506104a060015f55565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156118ef573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119139190613735565b6001600160a01b0316336001600160a01b03161415801561193a5750611938336120ce565b155b15611957576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906119a090831515815260200190565b60405180910390a150565b834211156119cc5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166119f35760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781165f818152600e602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f1981840301815282825280516020918201205f80855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611add573d5f803e3d5ffd5b505050602060405103519050886001600160a01b0316816001600160a01b031614611b1b57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981165f818152600e6020908152604080832080546001019055600c8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b0386161580611bba57506001600160a01b038516155b15611bd85760405163f0dd15fd60e01b815260040160405180910390fd5b828114611bf85760405163174861a760e31b815260040160405180910390fd5b5f5b83811015611c4757611c3f858583818110611c1757611c17613764565b905060200201358888868686818110611c3257611c32613764565b9050602002013533611c50565b600101611bfa565b50505050505050565b6001600160a01b0384161580611c6d57506001600160a01b038316155b15611c8b5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611d4b576001600160a01b038085165f908152600c602090815260408083209385168352929052205460ff16611d4b575f858152600d602090815260408083206001600160a01b03808916855290835281842090851684529091529020545f198114611d49575f868152600d602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611d439084906136f4565b90915550505b505b5f858152600a602090815260408083206001600160a01b038816845290915281208054849290611d7c9084906136f4565b90915550505f858152600a602090815260408083206001600160a01b038716845290915281208054849290611db29084906136e1565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6040516370a0823160e01b81523060048201525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611e6f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e9391906137e9565b905090565b5f611ea161271f565b611eaa82612799565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611f07573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f2b9190613735565b90506001600160a01b038116611f446020850185612ef2565b6001600160a01b031614611f6b57604051630ad13b3360e21b815260040160405180910390fd5b336001600160a01b0382161480159061201557507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611fdb573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611fff9190613735565b6001600160a01b0316336001600160a01b031614155b80156120275750612025336120ce565b155b15612044576040516282b42960e81b815260040160405180910390fd5b5f61204d6123d1565b600980545f9091559091506120638183876127ce565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a603836185846120a260408a0160208b01612f1a565b60408051938452602084019290925215159082015260600160405180910390a25050506105d060015f55565b5f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a64c90bf6040518163ffffffff1660e01b81526004015f60405180830381865afa15801561212b573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526121529190810190613800565b90505f5b81518110156121a357836001600160a01b031682828151811061217b5761217b613764565b60200260200101516001600160a01b03160361219b575060019392505050565b600101612156565b505f9392505050565b606060f882901c6001600160f81b0383165f6121c78261266d565b90505f8360038111156121dc576121dc6136b9565b0361220e576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611606565b6001836003811115612222576122226136b9565b03612238578060405160200161157491906138c0565b600283600381111561224c5761224c6136b9565b03612262578060405160200161157491906138f7565b6003836003811115612276576122766136b9565b0361160657505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b5f848152600d602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b5f611e93670de0b6b3a7640000612595565b61243b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916125339116612864565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261256592900416612864565b905292915050565b5f6107688383670de0b6b3a76400006128d8565b5f61076883670de0b6b3a7640000846128d8565b5f6107b87f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000846128f3565b5f6107b87f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000846129db565b5f612652600b5f61263f600286612a8e565b81526020019081526020015f2054612ac2565b612663600b5f61263f600187612a8e565b6107b89190613922565b60408051604e80825260808201909252606091905f90826020820181803683370190505090505f5b8415612711576126a6600a86613955565b6126b19060306136e1565b60f81b8260016126c184876136f4565b6126cb91906136f4565b815181106126db576126db613764565b60200101906001600160f81b03191690815f1a905350806126fb81613968565b915061270a9050600a86613980565b9450612695565b918290030190815292915050565b60025f540361274157604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c44908490612aef565b5f6127a76020830183612ef2565b6001600160a01b0316036104a05760405163f0dd15fd60e01b815260040160405180910390fd5b5f806127da858561256d565b90506127e5816125e1565b9450845f036127f7575f915050610768565b84915061280a6040840160208501612f1a565b1561283957612832856128206020860186612ef2565b61282d6040870187613993565b612b50565b915061285c565b61285c8561284a6020860186612ef2565b6128576040870187613993565b612b6a565b509392505050565b5f80670de0b6b3a7640000612877612c29565b61288191906139d6565b9050808311612890575f61289a565b61289a81846136f4565b91506107686128d1670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006139d6565b8390612581565b5f825f1904841183021582026128ec575f80fd5b5091020490565b5f80836001600160a01b0316633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa158015612931573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061295591906137e9565b9050805f03612967575f915050610768565b6129d2856001600160a01b03166337cfdaca6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156129a6573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906129ca91906137e9565b8490836128d8565b95945050505050565b5f80846001600160a01b03166337cfdaca6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612a19573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612a3d91906137e9565b9050805f03612a4f575f915050610768565b6129d2846001600160a01b0316633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa1580156129a6573d5f803e3d5ffd5b5f6001600160f81b03821115612ab75760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f6001600160ff1b03821115612aeb5760405163396ea70160e11b815260040160405180910390fd5b5090565b5f612b036001600160a01b03841683612c54565b905080515f14158015612b27575080806020019051810190612b2591906139ed565b155b15610c4457604051635274afe760e01b81526001600160a01b0384166004820152602401611629565b5f60405163350b944160e11b815260040160405180910390fd5b5f612b7485612595565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018390529192505f917f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303815f875af1158015612be5573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612c0991906139ed565b9050806106a6576040516312171d8360e31b815260040160405180910390fd5b5f611e93427f0000000000000000000000000000000000000000000000000000000000000000612c61565b606061076883835f612c76565b5f612c6c8284613955565b61076890846136f4565b606081471015612c9b5760405163cd78605960e01b8152306004820152602401611629565b5f80856001600160a01b03168486604051612cb69190613a08565b5f6040518083038185875af1925050503d805f8114612cf0576040519150601f19603f3d011682016040523d82523d5f602084013e612cf5565b606091505b5091509150612d05868383612d0f565b9695505050505050565b606082612d2457612d1f82612d6b565b610768565b8151158015612d3b57506001600160a01b0384163b155b15612d6457604051639996b31560e01b81526001600160a01b0385166004820152602401611629565b5080610768565b805115612d7b5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b03168152602001612e6360405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f60208284031215612e78575f80fd5b5035919050565b5f5b83811015612e99578181015183820152602001612e81565b50505f910152565b5f8151808452612eb8816020860160208601612e7f565b601f01601f19169290920160200192915050565b602081525f6107686020830184612ea1565b6001600160a01b03811681146104a0575f80fd5b5f60208284031215612f02575f80fd5b813561076881612ede565b80151581146104a0575f80fd5b5f60208284031215612f2a575f80fd5b813561076881612f0d565b5f805f805f805f805f6101208a8c031215612f4e575f80fd5b8935985060208a0135975060408a0135612f6781612ede565b965060608a0135612f7781612ede565b955060808a0135612f8781612f0d565b945060a08a0135935060c08a013560ff81168114612fa3575f80fd5b8093505060e08a013591506101008a013590509295985092959850929598565b5f8083601f840112612fd3575f80fd5b50813567ffffffffffffffff811115612fea575f80fd5b6020830191508360208260051b8501011115613004575f80fd5b9250929050565b5f805f805f8060808789031215613020575f80fd5b863561302b81612ede565b9550602087013561303b81612ede565b9450604087013567ffffffffffffffff80821115613057575f80fd5b6130638a838b01612fc3565b9096509450606089013591508082111561307b575f80fd5b5061308889828a01612fc3565b979a9699509497509295939492505050565b5f805f80608085870312156130ad575f80fd5b8435935060208501356130bf81612ede565b925060408501356130cf81612ede565b9396929550929360600135925050565b5f805f606084860312156130f1575f80fd5b83359250602084013561310381612ede565b9150604084013561311381612ede565b809150509250925092565b5f806040838503121561312f575f80fd5b82359150602083013561314181612ede565b809150509250929050565b5f6020828403121561315c575f80fd5b813567ffffffffffffffff811115613172575f80fd5b820160608185031215610768575f80fd5b5f805f8060808587031215613196575f80fd5b8435935060208501356131a881612ede565b92506040850135915060608501356131bf81612ede565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b5f806040838503121561327c575f80fd5b823561328781612ede565b9150602083013561314181612f0d565b5f805f606084860312156132a9575f80fd5b8335925060208401356132bb81612ede565b929592945050506040919091013590565b81516001600160a01b03168152610260810160208301516132f860208401826001600160a01b03169052565b50604083015161331360408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151613385828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b5f8060208385031215613403575f80fd5b823567ffffffffffffffff811115613419575f80fd5b61342585828601612fc3565b90969095509350505050565b602080825282518282018190525f9190848201906040850190845b818110156134685783518352928401929184019160010161344c565b50909695505050505050565b81516001600160801b03168152610180810160208301516134a060208401826001600160801b03169052565b5060408301516134bb60408401826001600160801b03169052565b5060608301516134d660608401826001600160801b03169052565b5060808301516134eb6080840182600f0b9052565b5060a083015161350660a08401826001600160801b03169052565b5060c083015161352160c08401826001600160801b03169052565b5060e083015161353c60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b038116828501526133ea565b5f805f805f60a08688031215613599575f80fd5b8535945060208601356135ab81612ede565b935060408601356135bb81612ede565b92506060860135915060808601356135d281612ede565b809150509295509295909350565b5f80604083850312156135f1575f80fd5b82356135fc81612ede565b9150602083013561314181612ede565b5f60208083525f84545f60018260011c9150600183168061362e57607f831692505b60208310810361364c57634e487b7160e01b5f52602260045260245ffd5b602088018390526040880181801561366b5760018114613681576136aa565b60ff198616825284151560051b820196506136aa565b5f8b8152602090205f5b868110156136a45781548482015290850190890161368b565b83019750505b50949998505050505050505050565b634e487b7160e01b5f52602160045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b808201808211156107b8576107b86136cd565b818103818111156107b8576107b86136cd565b5f8060408385031215613718575f80fd5b82519150602083015161314181612f0d565b80516105d081612ede565b5f60208284031215613745575f80fd5b815161076881612ede565b634e487b7160e01b5f52604160045260245ffd5b634e487b7160e01b5f52603260045260245ffd5b700243cb832b9323934bb32902637b7339d1607d1b81525f82516137a3816011850160208701612e7f565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b81525f82516137dc816012850160208701612e7f565b9190910160120192915050565b5f602082840312156137f9575f80fd5b5051919050565b5f6020808385031215613811575f80fd5b825167ffffffffffffffff80821115613828575f80fd5b818501915085601f83011261383b575f80fd5b81518181111561384d5761384d613750565b8060051b604051601f19603f8301168101818110858211171561387257613872613750565b60405291825284820192508381018501918883111561388f575f80fd5b938501935b828510156138b4576138a58561372a565b84529385019392850192613894565b98975050505050505050565b6f242ca822a9222924ab2296a627a7239d60811b81525f82516138ea816010850160208701612e7f565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81525f82516137a3816011850160208701612e7f565b8181035f831280158383131683831282161715611252576112526136cd565b634e487b7160e01b5f52601260045260245ffd5b5f8261396357613963613941565b500690565b5f60018201613979576139796136cd565b5060010190565b5f8261398e5761398e613941565b500490565b5f808335601e198436030181126139a8575f80fd5b83018035915067ffffffffffffffff8211156139c2575f80fd5b602001915036819003821315613004575f80fd5b80820281158282048414176107b8576107b86136cd565b5f602082840312156139fd575f80fd5b815161076881612f0d565b5f8251613a19818460208701612e7f565b919091019291505056fea2646970667358221220a4da0a409a8b75edd252732149e3bac45fdc18f6f99be5583c4d690df15b996c64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "_liquidityPool()": "207deba0",
  "adminController()": "950c5d03",
  "balanceOf(uint256,address)": "3656eec2",
  "baseToken()": "c55dae63",
  "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
  "collectGovernanceFee((address,bool,bytes))": "3e691db9",
  "convertToBase(uint256)": "b88fed9f",
  "convertToShares(uint256)": "c6e6f592",
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
  "kind()": "04baa00b",
  "liquidityPool()": "665a11ca",
  "load(uint256[])": "becee9c3",
  "name()": "06fdde03",
  "name(uint256)": "00ad800c",
  "nonces(address)": "7ecebe00",
  "pause(bool)": "02329a29",
  "perTokenApprovals(uint256,address,address)": "21ff32a9",
  "permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)": "14e5f07b",
  "setApproval(uint256,address,uint256)": "9cd241af",
  "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
  "setApprovalForAll(address,bool)": "a22cb465",
  "setGovernance(address)": "ab033ea9",
  "setPauser(address,bool)": "7180c8ca",
  "sweep(address)": "01681a62",
  "symbol(uint256)": "4e41a1fb",
  "totalShares()": "3a98ef39",
  "totalSupply(uint256)": "bd85b039",
  "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
  "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
  "vaultSharesToken()": "0a4e1493",
  "version()": "54fd4d50"
} as const
};
