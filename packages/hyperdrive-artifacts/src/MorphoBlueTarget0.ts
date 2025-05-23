export const MorphoBlueTarget0 = {
  name: 'MorphoBlueTarget0' as const,
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
        "name": "_params",
        "type": "tuple",
        "internalType": "struct IMorphoBlueHyperdrive.MorphoBlueParams",
        "components": [
          {
            "name": "morpho",
            "type": "address",
            "internalType": "contract IMorpho"
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
      }
    ],
    "stateMutability": "nonpayable"
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
    "name": "collateralToken",
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
    "stateMutability": "view"
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
    "name": "id",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "Id"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "irm",
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
    "name": "lltv",
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
    "name": "oracle",
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
    "name": "vault",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IMorpho"
      }
    ],
    "stateMutability": "view"
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
  bytecode: '0x61032060405234801562000011575f80fd5b5060405162004a0a38038062004a0a8339810160408190526200003491620005c8565b60015f81905583516001600160a01b039081166080818152602080880151841660a0908152828901516101a0528801516101c05260c0808901516101e090815260e0808b015161020052610120808c0151909352610100808c0151909152610140808c0151909152908a0180515190925281518301519052805160409081015161016052905160609081015161018052818a0151861661024052808a01516102605285891661022052875186166102808190529288015186166102a0529087015185166102c0528601519093166102e0528401516103005283926200011a929062000124565b5050505062000764565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200017e9085908390620001ef16565b620001e957604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001dd9186916200029916565b620001e9848262000299565b50505050565b5f805f846001600160a01b0316846040516200020c919062000715565b5f604051808303815f865af19150503d805f811462000247576040519150601f19603f3d011682016040523d82523d5f602084013e6200024c565b606091505b50915091508180156200027a5750805115806200027a5750808060200190518101906200027a919062000743565b80156200029057505f856001600160a01b03163b115b95945050505050565b5f620002af6001600160a01b038416836200030a565b905080515f14158015620002d6575080806020019051810190620002d4919062000743565b155b156200030557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200031983835f62000320565b9392505050565b606081471015620003475760405163cd78605960e01b8152306004820152602401620002fc565b5f80856001600160a01b0316848660405162000364919062000715565b5f6040518083038185875af1925050503d805f8114620003a0576040519150601f19603f3d011682016040523d82523d5f602084013e620003a5565b606091505b509092509050620003b8868383620003c2565b9695505050505050565b606082620003db57620003d58262000426565b62000319565b8151158015620003f357506001600160a01b0384163b155b156200041e57604051639996b31560e01b81526001600160a01b0385166004820152602401620002fc565b508062000319565b805115620004375780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b03811182821017156200048357634e487b7160e01b5f52604160045260245ffd5b60405290565b6001600160a01b038116811462000450575f80fd5b8051620004ab8162000489565b919050565b5f60808284031215620004c1575f80fd5b604051608081016001600160401b0381118282101715620004f057634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f60a0828403121562000532575f80fd5b60405160a081016001600160401b03811182821017156200056157634e487b7160e01b5f52604160045260245ffd5b80604052508091508251620005768162000489565b81526020830151620005888162000489565b602082015260408301516200059d8162000489565b60408201526060830151620005b28162000489565b6060820152608092830151920191909152919050565b5f805f838503610320811215620005dd575f80fd5b61026080821215620005ed575f80fd5b620005f762000453565b915062000604866200049e565b825262000614602087016200049e565b602083015262000627604087016200049e565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620006928188016200049e565b90830152610180620006a68782016200049e565b908301526101a0620006ba8782016200049e565b908301526101c0620006ce8782016200049e565b908301526101e0620006e388888301620004b0565b8184015250819450620006f88187016200049e565b935050506200070c85610280860162000521565b90509250925092565b5f82515f5b818110156200073657602081860181015185830152016200071a565b505f920191825250919050565b5f6020828403121562000754575f80fd5b8151801515811462000319575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e05161030051614063620009a75f395f818161076301528181610eae015281816121a801528181612a1801528181612b5c015261301901525f81816107e701528181610e7f01528181612179015281816129f601528181612b3a0152612fea01525f8181610cc701528181610e500152818161214a015281816129d401528181612b180152612fbb01525f8181610e21015281816113a50152818161211b015281816129b201528181612af60152612f8c01525f8181611758015281816120af0152818161296e01528181612ab20152612f2301525f8181610f7d01526126c601525f8181610f4e015261268901525f8181610d31015281816110ad0152818161113b015281816111c901528181611257015281816118de0152818161197401528181611b360152818161225001528181612324015261247501525f61101501525f8181610fef015261287001525f8181610fc9015261284a01525f8181610fa3015261282401525f61136201525f61133c01525f61131601525f6112f001525f8181611087015261289601525f818161103b0152818161152c0152612e0601525f8181611061015261312501525f818161067e0152610f1f01525f818161081e01528181610df201528181610ef0015281816114c9015281816120ec0152818161299001528181612ad40152612f5d01526140635ff3fe608060405234801561000f575f80fd5b506004361061026a575f3560e01c80637180c8ca1161014b578063bd85b039116100bf578063cf210e6511610084578063cf210e6514610546578063d816574314610559578063e44808bc1461056e578063e985e9c514610581578063fba5600814610594578063fbfa77cf146105c3575f80fd5b8063bd85b039146104f0578063becee9c314610503578063c55dae6314610523578063c69e16ad1461052b578063c6e6f59214610533575f80fd5b8063a22cb46511610110578063a22cb46514610494578063ab033ea9146104a7578063af640d0f146104b8578063b0d96580146104c0578063b2016bd4146104d5578063b88fed9f146104dd575f80fd5b80637180c8ca1461044c5780637dc0d1d01461045e5780637ecebe0014610466578063950c5d03146104795780639cd241af14610481575f80fd5b806321ff32a9116101e25780633e691db9116101a75780633e691db9146103d357806346fbf68e146103e65780634e41a1fb146104095780634ed2d6ac1461041c57806354fd4d501461042f57806360246c8814610437575f80fd5b806321ff32a91461038357806328e8fe7d14610396578063313ce5671461039e5780633656eec2146103b85780633a98ef39146103cb575f80fd5b80630a4e1493116102335780630a4e1493146102cf57806314e5f07b146102ef57806317fad7fc146103025780631c0f12b61461031557806320fc488114610328578063217b7ffe1461036d575f80fd5b8062ad800c1461026e57806301681a621461029757806302329a29146102ac57806304baa00b146102bf57806306fdde03146102c7575b5f80fd5b61028161027c36600461335d565b6105cb565b60405161028e91906133c1565b60405180910390f35b6102aa6102a53660046133e7565b610602565b005b6102aa6102ba36600461340f565b61060b565b610281610614565b610281610659565b6102d7610670565b6040516001600160a01b03909116815260200161028e565b6102aa6102fd366004613438565b6106af565b6102aa610310366004613509565b6106cb565b6102aa610323366004613598565b6106e1565b61033b61033636600461335d565b6106f4565b6040805182516001600160801b039081168252602080850151821690830152928201519092169082015260600161028e565b61037561075d565b60405190815260200161028e565b6103756103913660046135dd565b610794565b6102d76107d9565b6103a6610818565b60405160ff909116815260200161028e565b6103756103c636600461361c565b6108b0565b6103756108e8565b6103756103e136600461364a565b610906565b6103f96103f43660046133e7565b610910565b604051901515815260200161028e565b61028161041736600461335d565b61092f565b6102aa61042a366004613681565b61093d565b61028161098b565b61043f6109c0565b60405161028e91906136c8565b6102aa61045a366004613769565b5050565b6102d7610cb9565b6103756104743660046133e7565b610cf8565b6102d7610d23565b6102aa61048f366004613795565b610d62565b6102aa6104a2366004613769565b610d73565b6102aa6104b53660046133e7565b50565b610375610dde565b6104c8610ed7565b60405161028e91906137ca565b6102d7611397565b6103756104eb36600461335d565b6113d6565b6103756104fe36600461335d565b6113e3565b6105166105113660046138f0565b611404565b60405161028e919061392f565b6102d76114bb565b6103756114fa565b61037561054136600461335d565b611513565b61037561055436600461335d565b611520565b610561611556565b60405161028e9190613972565b6102aa61057c366004613a83565b611661565b6103f961058f366004613ade565b6116a9565b61059c6116ec565b6040805182516001600160801b03908116825260209384015116928101929092520161028e565b6102d761174a565b60606105fd6105d983611789565b6040516020016105e991906133c1565b6040516020818303038152906040526118af565b919050565b6104b5816118d3565b6104b581611b34565b6060610656604051806040016040528060148152602001734d6f7270686f426c75654879706572647269766560601b8152506040516020016105e991906133c1565b90565b606061065660016040516020016105e99190613b0a565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f9161065691016105e9565b6106c0898989898989898989611c4c565b505050505050505050565b6106d9868686868686611e3e565b505050505050565b6106ee8484848433611ef1565b50505050565b604080516060810182525f80825260208201819052918101919091526105fd60085f8481526020019081526020015f206040516020016105e9919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b5f6106567f00000000000000000000000000000000000000000000000000000000000000006040516020016105e991815260200190565b5f838152600d602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526107d291016105e9565b9392505050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f9161065691016105e9565b5f6106567f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610878573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061089c9190613bb7565b6040805160ff9092166020830152016105e9565b5f828152600a602090815260408083206001600160a01b03851684528252808320548151928301526108e291016105e9565b92915050565b5f6106566108f46120ac565b6040516020016105e991815260200190565b5f6108e28261223b565b5f6105fd61091d83612471565b604080519115156020830152016105e9565b60606105fd6105d98361254f565b836109478161264b565b6001600160a01b0316336001600160a01b03161461097857604051632aab8bd360e01b815260040160405180910390fd5b61098485858585612708565b5050505050565b606061065660405180604001604052806007815260200166076312e302e32360cc1b8152506040516020016105e991906133c1565b610a2a604051806101e001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f610a33612774565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654939450926001600160801b0390921691610a9d9190613bfa565b610aa79190613c0d565b90505f8215610bb65773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610ad38561278b565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610b82573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ba69190613c20565b509050610bb38184612915565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201525f906101a081018415610c8657610c818486612929565b610c88565b5f5b81526003546001600160801b0316602091820152604051919250610cb2916105e9918491016136c8565b5050505090565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f9161065691016105e9565b6001600160a01b0381165f908152600e60209081526040808320548151928301526105fd91016105e9565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f9161065691016105e9565b610d6e83838333612708565b505050565b335f818152600c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b5f6106566108f46040518060a001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081525060a0902090565b610edf613289565b6106566040518061020001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611107573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061112b9190613c43565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611195573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111b99190613c43565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611223573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112479190613c43565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112b1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112d59190613c43565b6001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016105e991906137ca565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f9161065691016105e9565b5f6105fd6108f48361293d565b5f818152600b60209081526040808320548151928301526105fd91016105e9565b60605f8267ffffffffffffffff81111561142057611420613c5e565b604051908082528060200260200182016040528015611449578160200160208202803683370190505b5090505f5b8381101561149f575f85858381811061146957611469613c72565b9050602002013590505f815490508084848151811061148a5761148a613c72565b6020908102919091010152505060010161144e565b506114b4816040516020016105e9919061392f565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f9161065691016105e9565b5f6106566009546040516020016105e991815260200190565b5f6105fd6108f483612a81565b5f6105fd6108f46115517f000000000000000000000000000000000000000000000000000000000000000085613bfa565b612b86565b60408051610180810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915261065660026040516020016105e9919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461166b8161264b565b6001600160a01b0316336001600160a01b03161461169c57604051632aab8bd360e01b815260040160405180910390fd5b6106d98686868686611ef1565b6001600160a01b038281165f908152600c60209081526040808320938516835292815282822054835160ff90911615159181019190915290916108e291016105e9565b604080518082019091525f80825260208201526040805180820182526007546001600160801b03808216808452600160801b9092048116602093840190815284519384019290925290511691810191909152610656906060016105e9565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f9161065691016105e9565b606060f882901c6001600160f81b0383165f6117a482612bc6565b90505f8360038111156117b9576117b9613bd2565b036117eb576040518060400160405280600d81526020016c048797065726472697665204c5609c1b81525093506118a7565b60018360038111156117ff576117ff613bd2565b0361182b57806040516020016118159190613c86565b60405160208183030381529060405293506118a7565b600283600381111561183f5761183f613bd2565b0361185557806040516020016118159190613cbe565b600383600381111561186957611869613bd2565b036118a7576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016118ca91906133c1565b60405180910390fd5b6118db612c78565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611938573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061195c9190613c43565b9050336001600160a01b03821614801590611a0857507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156119ce573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119f29190613c43565b6001600160a01b0316336001600160a01b031614155b8015611a1a5750611a1833612471565b155b15611a37576040516282b42960e81b815260040160405180910390fd5b5f611a406120ac565b6040516370a0823160e01b81523060048201529091505f906001600160a01b038516906370a0823190602401602060405180830381865afa158015611a87573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611aab9190613cf7565b9050611ac16001600160a01b0385168483612ca0565b81611aca6120ac565b14611ae8576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050506104b560015f55565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611b90573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611bb49190613c43565b6001600160a01b0316336001600160a01b031614158015611bdb5750611bd933612471565b155b15611bf8576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a590611c4190831515815260200190565b60405180910390a150565b83421115611c6d5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b038716611c945760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781165f818152600e602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f1981840301815282825280516020918201205f80855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611d7e573d5f803e3d5ffd5b505050602060405103519050886001600160a01b0316816001600160a01b031614611dbc57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981165f818152600e6020908152604080832080546001019055600c8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b0386161580611e5b57506001600160a01b038516155b15611e795760405163f0dd15fd60e01b815260040160405180910390fd5b828114611e995760405163174861a760e31b815260040160405180910390fd5b5f5b83811015611ee857611ee0858583818110611eb857611eb8613c72565b905060200201358888868686818110611ed357611ed3613c72565b9050602002013533611ef1565b600101611e9b565b50505050505050565b6001600160a01b0384161580611f0e57506001600160a01b038316155b15611f2c5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611fec576001600160a01b038085165f908152600c602090815260408083209385168352929052205460ff16611fec575f858152600d602090815260408083206001600160a01b03808916855290835281842090851684529091529020545f198114611fea575f868152600d602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611fe4908490613c0d565b90915550505b505b5f858152600a602090815260408083206001600160a01b03881684529091528120805484929061201d908490613c0d565b90915550505f858152600a602090815260408083206001600160a01b038716845290915281208054849290612053908490613bfa565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166393c520626121d16040518060a001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081525060a0902090565b6040516001600160e01b031960e084901b1681526004810191909152306024820152604401606060405180830381865afa158015612211573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906122359190613d55565b51919050565b5f612244612c78565b61224d82612cf2565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156122aa573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906122ce9190613c43565b90506001600160a01b0381166122e760208501856133e7565b6001600160a01b03161461230e57604051630ad13b3360e21b815260040160405180910390fd5b336001600160a01b038216148015906123b857507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa15801561237e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906123a29190613c43565b6001600160a01b0316336001600160a01b031614155b80156123ca57506123c833612471565b155b156123e7576040516282b42960e81b815260040160405180910390fd5b5f6123f0612774565b600980545f909155909150612406818387612d27565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a6038361858461244560408a0160208b0161340f565b60408051938452602084019290925215159082015260600160405180910390a25050506105fd60015f55565b5f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a64c90bf6040518163ffffffff1660e01b81526004015f60405180830381865afa1580156124ce573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526124f59190810190613db8565b90505f5b815181101561254657836001600160a01b031682828151811061251e5761251e613c72565b60200260200101516001600160a01b03160361253e575060019392505050565b6001016124f9565b505f9392505050565b606060f882901c6001600160f81b0383165f61256a82612bc6565b90505f83600381111561257f5761257f613bd2565b036125b1576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b81525093506118a7565b60018360038111156125c5576125c5613bd2565b036125db57806040516020016118159190613e65565b60028360038111156125ef576125ef613bd2565b0361260557806040516020016118159190613e9c565b600383600381111561261957612619613bd2565b036118a757505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b5f848152600d602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b5f612786670de0b6b3a764000061293d565b905090565b6127e36040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916128db9116612dbd565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261290d92900416612dbd565b905292915050565b5f6107d28383670de0b6b3a7640000612e31565b5f6107d283670de0b6b3a764000084612e31565b6040516303c2063f60e41b81525f9073__$04b283107449142c3a86c88d1d4ad5a326$__90633c2063f090612a42907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b90600401613ec7565b602060405180830381865af4158015612a5d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108e29190613cf7565b6040516349124ca360e01b81525f9073__$04b283107449142c3a86c88d1d4ad5a326$__906349124ca390612a42907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b90600401613ec7565b5f612bab600b5f612b98600286612e4c565b81526020019081526020015f2054612e80565b612bbc600b5f612b98600187612e4c565b6108e29190613f0a565b60408051604e80825260808201909252606091905f90826020820181803683370190505090505f5b8415612c6a57612bff600a86613f3d565b612c0a906030613bfa565b60f81b826001612c1a8487613c0d565b612c249190613c0d565b81518110612c3457612c34613c72565b60200101906001600160f81b03191690815f1a90535080612c5481613f50565b9150612c639050600a86613f68565b9450612bee565b918290030190815292915050565b60025f5403612c9a57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610d6e908490612ead565b5f612d0060208301836133e7565b6001600160a01b0316036104b55760405163f0dd15fd60e01b815260040160405180910390fd5b5f80612d338585612915565b9050612d3e81612a81565b9450845f03612d50575f9150506107d2565b849150612d63604084016020850161340f565b15612d9257612d8b85612d7960208601866133e7565b612d866040870187613f7b565b612f0e565b9150612db5565b612db585612da360208601866133e7565b612db06040870187613f7b565b613105565b509392505050565b5f80670de0b6b3a7640000612dd061311e565b612dda9190613fbe565b9050808311612de9575f612df3565b612df38184613c0d565b91506107d2612e2a670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613fbe565b8390612929565b5f825f190484118302158202612e45575f80fd5b5091020490565b5f6001600160f81b03821115612e755760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f6001600160ff1b03821115612ea95760405163396ea70160e11b815260040160405180910390fd5b5090565b5f612ec16001600160a01b03841683613149565b905080515f14158015612ee5575080806020019051810190612ee39190613fd5565b155b15610d6e57604051635274afe760e01b81526001600160a01b03841660048201526024016118ca565b5f80612f198661293d565b905080156130fc577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635c2bea496040518060a001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000008152506130448961293d565b604080516001600160e01b031960e086901b16815283516001600160a01b0390811660048301526020850151811660248301529184015182166044820152606084015182166064820152608090930151608484015260a48301919091525f60c48301523060e483015288166101048201526101240160408051808303815f875af11580156130d4573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906130f89190613ff0565b5091505b50949350505050565b60405163350b944160e11b815260040160405180910390fd5b5f612786427f0000000000000000000000000000000000000000000000000000000000000000613156565b60606107d283835f61316b565b5f6131618284613f3d565b6107d29084613c0d565b6060814710156131905760405163cd78605960e01b81523060048201526024016118ca565b5f80856001600160a01b031684866040516131ab9190614012565b5f6040518083038185875af1925050503d805f81146131e5576040519150601f19603f3d011682016040523d82523d5f602084013e6131ea565b606091505b50915091506131fa868383613204565b9695505050505050565b6060826132195761321482613260565b6107d2565b815115801561323057506001600160a01b0384163b155b1561325957604051639996b31560e01b81526001600160a01b03851660048201526024016118ca565b50806107d2565b8051156132705780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b0316815260200161335860405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f6020828403121561336d575f80fd5b5035919050565b5f5b8381101561338e578181015183820152602001613376565b50505f910152565b5f81518084526133ad816020860160208601613374565b601f01601f19169290920160200192915050565b602081525f6107d26020830184613396565b6001600160a01b03811681146104b5575f80fd5b5f602082840312156133f7575f80fd5b81356107d2816133d3565b80151581146104b5575f80fd5b5f6020828403121561341f575f80fd5b81356107d281613402565b60ff811681146104b5575f80fd5b5f805f805f805f805f6101208a8c031215613451575f80fd5b8935985060208a0135975060408a013561346a816133d3565b965060608a013561347a816133d3565b955060808a013561348a81613402565b945060a08a0135935060c08a01356134a18161342a565b8093505060e08a013591506101008a013590509295985092959850929598565b5f8083601f8401126134d1575f80fd5b50813567ffffffffffffffff8111156134e8575f80fd5b6020830191508360208260051b8501011115613502575f80fd5b9250929050565b5f805f805f806080878903121561351e575f80fd5b8635613529816133d3565b95506020870135613539816133d3565b9450604087013567ffffffffffffffff80821115613555575f80fd5b6135618a838b016134c1565b90965094506060890135915080821115613579575f80fd5b5061358689828a016134c1565b979a9699509497509295939492505050565b5f805f80608085870312156135ab575f80fd5b8435935060208501356135bd816133d3565b925060408501356135cd816133d3565b9396929550929360600135925050565b5f805f606084860312156135ef575f80fd5b833592506020840135613601816133d3565b91506040840135613611816133d3565b809150509250925092565b5f806040838503121561362d575f80fd5b82359150602083013561363f816133d3565b809150509250929050565b5f6020828403121561365a575f80fd5b813567ffffffffffffffff811115613670575f80fd5b8201606081850312156107d2575f80fd5b5f805f8060808587031215613694575f80fd5b8435935060208501356136a6816133d3565b92506040850135915060608501356136bd816133d3565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b5f806040838503121561377a575f80fd5b8235613785816133d3565b9150602083013561363f81613402565b5f805f606084860312156137a7575f80fd5b8335925060208401356137b9816133d3565b929592945050506040919091013590565b81516001600160a01b03168152610260810160208301516137f660208401826001600160a01b03169052565b50604083015161381160408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151613883828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b5f8060208385031215613901575f80fd5b823567ffffffffffffffff811115613917575f80fd5b613923858286016134c1565b90969095509350505050565b602080825282518282018190525f9190848201906040850190845b818110156139665783518352928401929184019160010161394a565b50909695505050505050565b81516001600160801b031681526101808101602083015161399e60208401826001600160801b03169052565b5060408301516139b960408401826001600160801b03169052565b5060608301516139d460608401826001600160801b03169052565b5060808301516139e96080840182600f0b9052565b5060a0830151613a0460a08401826001600160801b03169052565b5060c0830151613a1f60c08401826001600160801b03169052565b5060e0830151613a3a60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b038116828501526138e8565b5f805f805f60a08688031215613a97575f80fd5b853594506020860135613aa9816133d3565b93506040860135613ab9816133d3565b9250606086013591506080860135613ad0816133d3565b809150509295509295909350565b5f8060408385031215613aef575f80fd5b8235613afa816133d3565b9150602083013561363f816133d3565b5f60208083525f84545f60018260011c91506001831680613b2c57607f831692505b602083108103613b4a57634e487b7160e01b5f52602260045260245ffd5b6020880183905260408801818015613b695760018114613b7f57613ba8565b60ff198616825284151560051b82019650613ba8565b5f8b8152602090205f5b86811015613ba257815484820152908501908901613b89565b83019750505b50949998505050505050505050565b5f60208284031215613bc7575f80fd5b81516107d28161342a565b634e487b7160e01b5f52602160045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b808201808211156108e2576108e2613be6565b818103818111156108e2576108e2613be6565b5f8060408385031215613c31575f80fd5b82519150602083015161363f81613402565b5f60208284031215613c53575f80fd5b81516107d2816133d3565b634e487b7160e01b5f52604160045260245ffd5b634e487b7160e01b5f52603260045260245ffd5b700243cb832b9323934bb32902637b7339d1607d1b81525f8251613cb1816011850160208701613374565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b81525f8251613cea816012850160208701613374565b9190910160120192915050565b5f60208284031215613d07575f80fd5b5051919050565b604051601f8201601f1916810167ffffffffffffffff81118282101715613d3757613d37613c5e565b604052919050565b80516001600160801b03811681146105fd575f80fd5b5f60608284031215613d65575f80fd5b6040516060810181811067ffffffffffffffff82111715613d8857613d88613c5e565b60405282518152613d9b60208401613d3f565b6020820152613dac60408401613d3f565b60408201529392505050565b5f6020808385031215613dc9575f80fd5b825167ffffffffffffffff80821115613de0575f80fd5b818501915085601f830112613df3575f80fd5b815181811115613e0557613e05613c5e565b8060051b9150613e16848301613d0e565b8181529183018401918481019088841115613e2f575f80fd5b938501935b83851015613e595784519250613e49836133d3565b8282529385019390850190613e34565b98975050505050505050565b6f242ca822a9222924ab2296a627a7239d60811b81525f8251613e8f816010850160208701613374565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81525f8251613cb1816011850160208701613374565b6001600160a01b039788168152958716602087015293861660408601529185166060850152909316608083015260a082019290925260c081019190915260e00190565b8181035f8312801583831316838312821617156114b4576114b4613be6565b634e487b7160e01b5f52601260045260245ffd5b5f82613f4b57613f4b613f29565b500690565b5f60018201613f6157613f61613be6565b5060010190565b5f82613f7657613f76613f29565b500490565b5f808335601e19843603018112613f90575f80fd5b83018035915067ffffffffffffffff821115613faa575f80fd5b602001915036819003821315613502575f80fd5b80820281158282048414176108e2576108e2613be6565b5f60208284031215613fe5575f80fd5b81516107d281613402565b5f8060408385031215614001575f80fd5b505080516020909101519092909150565b5f8251614023818460208701613374565b919091019291505056fea26469706673582212204cc79012074297f68544d022452c11f2196c5affb9c9eb9e24d2474f9fa30fb464736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "adminController()": "950c5d03",
  "balanceOf(uint256,address)": "3656eec2",
  "baseToken()": "c55dae63",
  "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
  "collateralToken()": "b2016bd4",
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
  "id()": "af640d0f",
  "irm()": "28e8fe7d",
  "isApprovedForAll(address,address)": "e985e9c5",
  "isPauser(address)": "46fbf68e",
  "kind()": "04baa00b",
  "lltv()": "217b7ffe",
  "load(uint256[])": "becee9c3",
  "name()": "06fdde03",
  "name(uint256)": "00ad800c",
  "nonces(address)": "7ecebe00",
  "oracle()": "7dc0d1d0",
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
  "vault()": "fbfa77cf",
  "vaultSharesToken()": "0a4e1493",
  "version()": "54fd4d50"
} as const
};
