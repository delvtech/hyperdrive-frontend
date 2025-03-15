export const RETHTarget0 = {
  name: 'RETHTarget0' as const,
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
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
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
  }
] as const,
  bytecode: '0x61028060405234801562000011575f80fd5b5060405162003f1e38038062003f1e8339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613ad6620004485f395f8181610ee301526124ac01525f8181610eb4015261246f01525f8181610d9001528181611013015281816110a10152818161112f015281816111bd015281816117c60152818161185c01528181611a1e015281816120360152818161210a015261225b01525f610f7b01525f8181610f55015261265101525f8181610f2f015261262b01525f8181610f09015261260501525f6112c801525f6112a201525f61127c01525f61125601525f8181610fed015261267701525f8181610fa1015281816114530152612a7701525f8181610fc70152612cad01525f818161022f0152818161081301528181610e8501528181611fab01528181612736015281816127c001528181612b970152612c7f01525f8181610e5601526113f00152613ad65ff3fe60806040526004361061021f575f3560e01c806360246c881161011e578063bd85b039116100a8578063cf210e651161006d578063cf210e65146106ad578063d8165743146106cc578063e44808bc146106ed578063e985e9c51461070c578063fba560081461072b575f80fd5b8063bd85b0391461061b578063becee9c31461063a578063c55dae6314610666578063c69e16ad1461067a578063c6e6f5921461068e575f80fd5b80639cd241af116100ee5780639cd241af14610580578063a22cb4651461059f578063ab033ea9146105be578063b0d96580146105db578063b88fed9f146105fc575f80fd5b806360246c881461050e5780637180c8ca1461052f5780637ecebe001461054d578063950c5d031461056c575f80fd5b806320fc4881116101aa5780633e691db91161016f5780633e691db91461046e57806346fbf68e1461048d5780634e41a1fb146104bc5780634ed2d6ac146104db57806354fd4d50146104fa575f80fd5b806320fc48811461039757806321ff32a9146103e8578063313ce567146104155780633656eec21461043b5780633a98ef391461045a575f80fd5b806306fdde03116101f057806306fdde03146102fa5780630a4e14931461030e57806314e5f07b1461033a57806317fad7fc146103595780631c0f12b614610378575f80fd5b8062ad800c1461027357806301681a62146102a857806302329a29146102c757806304baa00b146102e6575f80fd5b3661026f57336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461026d576040516312171d8360e31b815260040160405180910390fd5b005b5f80fd5b34801561027e575f80fd5b5061029261028d366004612ee5565b610766565b60405161029f9190612f49565b60405180910390f35b3480156102b3575f80fd5b5061026d6102c2366004612f6f565b61079d565b3480156102d2575f80fd5b5061026d6102e1366004612f97565b6107a6565b3480156102f1575f80fd5b506102926107af565b348015610305575f80fd5b506102926107ee565b348015610319575f80fd5b50610322610805565b6040516001600160a01b03909116815260200161029f565b348015610345575f80fd5b5061026d610354366004612fb2565b610844565b348015610364575f80fd5b5061026d610373366004613088565b610860565b348015610383575f80fd5b5061026d610392366004613117565b610876565b3480156103a2575f80fd5b506103b66103b1366004612ee5565b610889565b6040805182516001600160801b039081168252602080850151821690830152928201519092169082015260600161029f565b3480156103f3575f80fd5b5061040761040236600461315c565b6108f2565b60405190815260200161029f565b348015610420575f80fd5b50610429610937565b60405160ff909116815260200161029f565b348015610446575f80fd5b5061040761045536600461319b565b61094e565b348015610465575f80fd5b50610407610986565b348015610479575f80fd5b506104076104883660046131c9565b6109a4565b348015610498575f80fd5b506104ac6104a7366004612f6f565b6109ae565b604051901515815260200161029f565b3480156104c7575f80fd5b506102926104d6366004612ee5565b6109cd565b3480156104e6575f80fd5b5061026d6104f5366004613200565b6109db565b348015610505575f80fd5b50610292610a29565b348015610519575f80fd5b50610522610a5e565b60405161029f9190613247565b34801561053a575f80fd5b5061026d6105493660046132e8565b5050565b348015610558575f80fd5b50610407610567366004612f6f565b610d57565b348015610577575f80fd5b50610322610d82565b34801561058b575f80fd5b5061026d61059a366004613314565b610dc1565b3480156105aa575f80fd5b5061026d6105b93660046132e8565b610dd2565b3480156105c9575f80fd5b5061026d6105d8366004612f6f565b50565b3480156105e6575f80fd5b506105ef610e3d565b60405161029f9190613349565b348015610607575f80fd5b50610407610616366004612ee5565b6112fd565b348015610626575f80fd5b50610407610635366004612ee5565b61130a565b348015610645575f80fd5b5061065961065436600461346f565b61132b565b60405161029f91906134ae565b348015610671575f80fd5b506103226113e2565b348015610685575f80fd5b50610407611421565b348015610699575f80fd5b506104076106a8366004612ee5565b61143a565b3480156106b8575f80fd5b506104076106c7366004612ee5565b611447565b3480156106d7575f80fd5b506106e061147d565b60405161029f91906134f1565b3480156106f8575f80fd5b5061026d610707366004613602565b611588565b348015610717575f80fd5b506104ac61072636600461365d565b6115d0565b348015610736575f80fd5b5061073f611613565b6040805182516001600160801b03908116825260209384015116928101929092520161029f565b606061079861077483611671565b6040516020016107849190612f49565b604051602081830303815290604052611797565b919050565b6105d8816117bb565b6105d881611a1c565b60606107eb6040518060400160405280600e81526020016d524554484879706572647269766560901b8152506040516020016107849190612f49565b90565b60606107eb60016040516020016107849190613689565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916107eb9101610784565b610855898989898989898989611b34565b505050505050505050565b61086e868686868686611d26565b505050505050565b6108838484848433611dd9565b50505050565b604080516060810182525f808252602082018190529181019190915261079860085f8481526020019081526020015f20604051602001610784919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b5f838152600d602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526109309101610784565b9392505050565b60408051601260208201525f916107eb9101610784565b5f828152600a602090815260408083206001600160a01b03851684528252808320548151928301526109809101610784565b92915050565b5f6107eb610992611f94565b60405160200161078491815260200190565b5f61098082612021565b5f6107986109bb83612257565b60408051911515602083015201610784565b606061079861077483612335565b836109e581612431565b6001600160a01b0316336001600160a01b031614610a1657604051632aab8bd360e01b815260040160405180910390fd5b610a22858585856124ee565b5050505050565b60606107eb60405180604001604052806007815260200166076312e302e32360cc1b8152506040516020016107849190612f49565b610ac8604051806101e001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f610ad161255a565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654939450926001600160801b0390921691610b3b919061375e565b610b459190613771565b90505f8215610c545773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610b718561256c565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610c20573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c449190613784565b509050610c5181846126f6565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201525f906101a081018415610d2457610d1f848661270a565b610d26565b5f5b81526003546001600160801b0316602091820152604051919250610d509161078491849101613247565b5050505090565b6001600160a01b0381165f908152600e60209081526040808320548151928301526107989101610784565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916107eb9101610784565b610dcd838383336124ee565b505050565b335f818152600c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610e45612e11565b6107eb6040518061020001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa15801561106d573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061109191906137b2565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110fb573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061111f91906137b2565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611189573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111ad91906137b2565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611217573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061123b91906137b2565b6001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016107849190613349565b5f6107986109928361271e565b5f818152600b60209081526040808320548151928301526107989101610784565b60605f8267ffffffffffffffff811115611347576113476137cd565b604051908082528060200260200182016040528015611370578160200160208202803683370190505b5090505f5b838110156113c6575f858583818110611390576113906137e1565b9050602002013590505f81549050808484815181106113b1576113b16137e1565b60209081029190910101525050600101611375565b506113db8160405160200161078491906134ae565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916107eb9101610784565b5f6107eb60095460405160200161078491815260200190565b5f610798610992836127a8565b5f6107986109926114787f00000000000000000000000000000000000000000000000000000000000000008561375e565b6127f7565b60408051610180810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526107eb6002604051602001610784919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461159281612431565b6001600160a01b0316336001600160a01b0316146115c357604051632aab8bd360e01b815260040160405180910390fd5b61086e8686868686611dd9565b6001600160a01b038281165f908152600c60209081526040808320938516835292815282822054835160ff90911615159181019190915290916109809101610784565b604080518082019091525f80825260208201526040805180820182526007546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526107eb90606001610784565b606060f882901c6001600160f81b0383165f61168c82612837565b90505f8360038111156116a1576116a1613736565b036116d3576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061178f565b60018360038111156116e7576116e7613736565b0361171357806040516020016116fd91906137f5565b604051602081830303815290604052935061178f565b600283600381111561172757611727613736565b0361173d57806040516020016116fd919061382d565b600383600381111561175157611751613736565b0361178f576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016117b29190612f49565b60405180910390fd5b6117c36128e9565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611820573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061184491906137b2565b9050336001600160a01b038216148015906118f057507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156118b6573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118da91906137b2565b6001600160a01b0316336001600160a01b031614155b8015611902575061190033612257565b155b1561191f576040516282b42960e81b815260040160405180910390fd5b5f611928611f94565b6040516370a0823160e01b81523060048201529091505f906001600160a01b038516906370a0823190602401602060405180830381865afa15801561196f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119939190613866565b90506119a96001600160a01b0385168483612911565b816119b2611f94565b146119d0576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a35050506105d860015f55565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a78573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611a9c91906137b2565b6001600160a01b0316336001600160a01b031614158015611ac35750611ac133612257565b155b15611ae0576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a590611b2990831515815260200190565b60405180910390a150565b83421115611b555760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b038716611b7c5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781165f818152600e602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f1981840301815282825280516020918201205f80855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611c66573d5f803e3d5ffd5b505050602060405103519050886001600160a01b0316816001600160a01b031614611ca457604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981165f818152600e6020908152604080832080546001019055600c8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b0386161580611d4357506001600160a01b038516155b15611d615760405163f0dd15fd60e01b815260040160405180910390fd5b828114611d815760405163174861a760e31b815260040160405180910390fd5b5f5b83811015611dd057611dc8858583818110611da057611da06137e1565b905060200201358888868686818110611dbb57611dbb6137e1565b9050602002013533611dd9565b600101611d83565b50505050505050565b6001600160a01b0384161580611df657506001600160a01b038316155b15611e145760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611ed4576001600160a01b038085165f908152600c602090815260408083209385168352929052205460ff16611ed4575f858152600d602090815260408083206001600160a01b03808916855290835281842090851684529091529020545f198114611ed2575f868152600d602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611ecc908490613771565b90915550505b505b5f858152600a602090815260408083206001600160a01b038816845290915281208054849290611f05908490613771565b90915550505f858152600a602090815260408083206001600160a01b038716845290915281208054849290611f3b90849061375e565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6040516370a0823160e01b81523060048201525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611ff8573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061201c9190613866565b905090565b5f61202a6128e9565b61203382612963565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612090573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120b491906137b2565b90506001600160a01b0381166120cd6020850185612f6f565b6001600160a01b0316146120f457604051630ad13b3360e21b815260040160405180910390fd5b336001600160a01b0382161480159061219e57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015612164573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061218891906137b2565b6001600160a01b0316336001600160a01b031614155b80156121b057506121ae33612257565b155b156121cd576040516282b42960e81b815260040160405180910390fd5b5f6121d661255a565b600980545f9091559091506121ec818387612998565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a6038361858461222b60408a0160208b01612f97565b60408051938452602084019290925215159082015260600160405180910390a250505061079860015f55565b5f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a64c90bf6040518163ffffffff1660e01b81526004015f60405180830381865afa1580156122b4573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526122db919081019061387d565b90505f5b815181101561232c57836001600160a01b0316828281518110612304576123046137e1565b60200260200101516001600160a01b031603612324575060019392505050565b6001016122df565b505f9392505050565b606060f882901c6001600160f81b0383165f61235082612837565b90505f83600381111561236557612365613736565b03612397576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061178f565b60018360038111156123ab576123ab613736565b036123c157806040516020016116fd919061393d565b60028360038111156123d5576123d5613736565b036123eb57806040516020016116fd9190613974565b60038360038111156123ff576123ff613736565b0361178f57505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b5f848152600d602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b5f61201c670de0b6b3a764000061271e565b6125c46040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916126bc9116612a2e565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926126ee92900416612a2e565b905292915050565b5f6109308383670de0b6b3a7640000612aa2565b5f61093083670de0b6b3a764000084612aa2565b604051638b32fa2360e01b8152600481018290525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa23906024015b602060405180830381865afa158015612784573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109809190613866565b6040516321a3781f60e11b8152600481018290525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690634346f03e90602401612769565b5f61281c600b5f612809600286612abd565b81526020019081526020015f2054612af1565b61282d600b5f612809600187612abd565b610980919061399f565b60408051604e80825260808201909252606091905f90826020820181803683370190505090505f5b84156128db57612870600a866139d2565b61287b90603061375e565b60f81b82600161288b8487613771565b6128959190613771565b815181106128a5576128a56137e1565b60200101906001600160f81b03191690815f1a905350806128c5816139e5565b91506128d49050600a866139fd565b945061285f565b918290030190815292915050565b60025f540361290b57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610dcd908490612b1e565b5f6129716020830183612f6f565b6001600160a01b0316036105d85760405163f0dd15fd60e01b815260040160405180910390fd5b5f806129a485856126f6565b90506129af816127a8565b9450845f036129c1575f915050610930565b8491506129d46040840160208501612f97565b15612a03576129fc856129ea6020860186612f6f565b6129f76040870187613a10565b612b7f565b9150612a26565b612a2685612a146020860186612f6f565b612a216040870187613a10565b612c72565b509392505050565b5f80670de0b6b3a7640000612a41612ca6565b612a4b9190613a53565b9050808311612a5a575f612a64565b612a648184613771565b9150610930612a9b670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613a53565b839061270a565b5f825f190484118302158202612ab6575f80fd5b5091020490565b5f6001600160f81b03821115612ae65760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f6001600160ff1b03821115612b1a5760405163396ea70160e11b815260040160405180910390fd5b5090565b5f612b326001600160a01b03841683612cd1565b905080515f14158015612b56575080806020019051810190612b549190613a6a565b155b15610dcd57604051635274afe760e01b81526001600160a01b03841660048201526024016117b2565b604051630852cd8d60e31b8152600481018590525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c68906024015f604051808303815f87803b158015612be0575f80fd5b505af1158015612bf2573d5f803e3d5ffd5b505050504790505f846001600160a01b0316826040515f6040518083038185875af1925050503d805f8114612c42576040519150601f19603f3d011682016040523d82523d5f602084013e612c47565b606091505b5050905080612c69576040516312171d8360e31b815260040160405180910390fd5b50949350505050565b6108836001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612911565b5f61201c427f0000000000000000000000000000000000000000000000000000000000000000612cde565b606061093083835f612cf3565b5f612ce982846139d2565b6109309084613771565b606081471015612d185760405163cd78605960e01b81523060048201526024016117b2565b5f80856001600160a01b03168486604051612d339190613a85565b5f6040518083038185875af1925050503d805f8114612d6d576040519150601f19603f3d011682016040523d82523d5f602084013e612d72565b606091505b5091509150612d82868383612d8c565b9695505050505050565b606082612da157612d9c82612de8565b610930565b8151158015612db857506001600160a01b0384163b155b15612de157604051639996b31560e01b81526001600160a01b03851660048201526024016117b2565b5080610930565b805115612df85780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b03168152602001612ee060405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f60208284031215612ef5575f80fd5b5035919050565b5f5b83811015612f16578181015183820152602001612efe565b50505f910152565b5f8151808452612f35816020860160208601612efc565b601f01601f19169290920160200192915050565b602081525f6109306020830184612f1e565b6001600160a01b03811681146105d8575f80fd5b5f60208284031215612f7f575f80fd5b813561093081612f5b565b80151581146105d8575f80fd5b5f60208284031215612fa7575f80fd5b813561093081612f8a565b5f805f805f805f805f6101208a8c031215612fcb575f80fd5b8935985060208a0135975060408a0135612fe481612f5b565b965060608a0135612ff481612f5b565b955060808a013561300481612f8a565b945060a08a0135935060c08a013560ff81168114613020575f80fd5b8093505060e08a013591506101008a013590509295985092959850929598565b5f8083601f840112613050575f80fd5b50813567ffffffffffffffff811115613067575f80fd5b6020830191508360208260051b8501011115613081575f80fd5b9250929050565b5f805f805f806080878903121561309d575f80fd5b86356130a881612f5b565b955060208701356130b881612f5b565b9450604087013567ffffffffffffffff808211156130d4575f80fd5b6130e08a838b01613040565b909650945060608901359150808211156130f8575f80fd5b5061310589828a01613040565b979a9699509497509295939492505050565b5f805f806080858703121561312a575f80fd5b84359350602085013561313c81612f5b565b9250604085013561314c81612f5b565b9396929550929360600135925050565b5f805f6060848603121561316e575f80fd5b83359250602084013561318081612f5b565b9150604084013561319081612f5b565b809150509250925092565b5f80604083850312156131ac575f80fd5b8235915060208301356131be81612f5b565b809150509250929050565b5f602082840312156131d9575f80fd5b813567ffffffffffffffff8111156131ef575f80fd5b820160608185031215610930575f80fd5b5f805f8060808587031215613213575f80fd5b84359350602085013561322581612f5b565b925060408501359150606085013561323c81612f5b565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b5f80604083850312156132f9575f80fd5b823561330481612f5b565b915060208301356131be81612f8a565b5f805f60608486031215613326575f80fd5b83359250602084013561333881612f5b565b929592945050506040919091013590565b81516001600160a01b031681526102608101602083015161337560208401826001600160a01b03169052565b50604083015161339060408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151613402828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b5f8060208385031215613480575f80fd5b823567ffffffffffffffff811115613496575f80fd5b6134a285828601613040565b90969095509350505050565b602080825282518282018190525f9190848201906040850190845b818110156134e5578351835292840192918401916001016134c9565b50909695505050505050565b81516001600160801b031681526101808101602083015161351d60208401826001600160801b03169052565b50604083015161353860408401826001600160801b03169052565b50606083015161355360608401826001600160801b03169052565b5060808301516135686080840182600f0b9052565b5060a083015161358360a08401826001600160801b03169052565b5060c083015161359e60c08401826001600160801b03169052565b5060e08301516135b960e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b03811682850152613467565b5f805f805f60a08688031215613616575f80fd5b85359450602086013561362881612f5b565b9350604086013561363881612f5b565b925060608601359150608086013561364f81612f5b565b809150509295509295909350565b5f806040838503121561366e575f80fd5b823561367981612f5b565b915060208301356131be81612f5b565b5f60208083525f84545f60018260011c915060018316806136ab57607f831692505b6020831081036136c957634e487b7160e01b5f52602260045260245ffd5b60208801839052604088018180156136e857600181146136fe57613727565b60ff198616825284151560051b82019650613727565b5f8b8152602090205f5b8681101561372157815484820152908501908901613708565b83019750505b50949998505050505050505050565b634e487b7160e01b5f52602160045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b808201808211156109805761098061374a565b818103818111156109805761098061374a565b5f8060408385031215613795575f80fd5b8251915060208301516131be81612f8a565b805161079881612f5b565b5f602082840312156137c2575f80fd5b815161093081612f5b565b634e487b7160e01b5f52604160045260245ffd5b634e487b7160e01b5f52603260045260245ffd5b700243cb832b9323934bb32902637b7339d1607d1b81525f8251613820816011850160208701612efc565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b81525f8251613859816012850160208701612efc565b9190910160120192915050565b5f60208284031215613876575f80fd5b5051919050565b5f602080838503121561388e575f80fd5b825167ffffffffffffffff808211156138a5575f80fd5b818501915085601f8301126138b8575f80fd5b8151818111156138ca576138ca6137cd565b8060051b604051601f19603f830116810181811085821117156138ef576138ef6137cd565b60405291825284820192508381018501918883111561390c575f80fd5b938501935b8285101561393157613922856137a7565b84529385019392850192613911565b98975050505050505050565b6f242ca822a9222924ab2296a627a7239d60811b81525f8251613967816010850160208701612efc565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81525f8251613820816011850160208701612efc565b8181035f8312801583831316838312821617156113db576113db61374a565b634e487b7160e01b5f52601260045260245ffd5b5f826139e0576139e06139be565b500690565b5f600182016139f6576139f661374a565b5060010190565b5f82613a0b57613a0b6139be565b500490565b5f808335601e19843603018112613a25575f80fd5b83018035915067ffffffffffffffff821115613a3f575f80fd5b602001915036819003821315613081575f80fd5b80820281158282048414176109805761098061374a565b5f60208284031215613a7a575f80fd5b815161093081612f8a565b5f8251613a96818460208701612efc565b919091019291505056fea26469706673582212205635ffdb595f622a4a876e1c3bdc25b3ffcc8f074660c4b424e7c06eaee9d35064736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
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
