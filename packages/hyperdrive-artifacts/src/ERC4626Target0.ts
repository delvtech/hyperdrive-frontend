export const ERC4626Target0 = {
  name: 'ERC4626Target0' as const,
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
  bytecode: '0x61028060405234801562000011575f80fd5b5060405162003ecc38038062003ecc8339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613a76620004565f395f8181610d5a015261232301525f8181610d2b01526122e601525f8181610c0701528181610e8a01528181610f1801528181610fa6015281816110340152818161163d015281816116d30152818161189501528181611ead01528181611f8101526120d201525f610df201525f8181610dcc01526124c801525f8181610da601526124a201525f8181610d80015261247c01525f61113f01525f61111901525f6110f301525f6110cd01525f8181610e6401526124ee01525f8181610e18015281816112ca015261286b01525f8181610e3e0152612c2901525f818161060901528181610cfc01528181611e220152818161259b015281816125c601528181612ac70152612bfb01525f818161073301528181610ccd0152818161126701528181612a2f0152612b5e0152613a765ff3fe608060405234801561000f575f80fd5b5060043610610228575f3560e01c806360246c881161012a578063bd85b039116100b4578063cf210e6511610079578063cf210e65146104dc578063d8165743146104ef578063e44808bc14610504578063e985e9c514610517578063fba560081461052a575f80fd5b8063bd85b03914610486578063becee9c314610499578063c55dae63146104b9578063c69e16ad146104c1578063c6e6f592146104c9575f80fd5b80639cd241af116100fa5780639cd241af14610427578063a22cb4651461043a578063ab033ea91461044d578063b0d965801461045e578063b88fed9f14610473575f80fd5b806360246c88146103e55780637180c8ca146103fa5780637ecebe001461040c578063950c5d031461041f575f80fd5b806320fc4881116101b65780633e691db91161017b5780633e691db91461038157806346fbf68e146103945780634e41a1fb146103b75780634ed2d6ac146103ca57806354fd4d50146103dd575f80fd5b806320fc4881146102e657806321ff32a91461032b578063313ce5671461034c5780633656eec2146103665780633a98ef3914610379575f80fd5b806306fdde03116101fc57806306fdde03146102855780630a4e14931461028d57806314e5f07b146102ad57806317fad7fc146102c05780631c0f12b6146102d3575f80fd5b8062ad800c1461022c57806301681a621461025557806302329a291461026a57806304baa00b1461027d575b5f80fd5b61023f61023a366004612e61565b610559565b60405161024c9190612ec5565b60405180910390f35b610268610263366004612eeb565b610590565b005b610268610278366004612f13565b610599565b61023f6105a2565b61023f6105e4565b6102956105fb565b6040516001600160a01b03909116815260200161024c565b6102686102bb366004612f3c565b61063a565b6102686102ce36600461300d565b610656565b6102686102e136600461309c565b61066c565b6102f96102f4366004612e61565b61067f565b6040805182516001600160801b039081168252602080850151821690830152928201519092169082015260600161024c565b61033e6103393660046130e1565b6106e8565b60405190815260200161024c565b61035461072d565b60405160ff909116815260200161024c565b61033e610374366004613120565b6107c5565b61033e6107fd565b61033e61038f36600461314e565b61081b565b6103a76103a2366004612eeb565b610825565b604051901515815260200161024c565b61023f6103c5366004612e61565b610844565b6102686103d8366004613185565b610852565b61023f6108a0565b6103ed6108d5565b60405161024c91906131cc565b61026861040836600461326d565b5050565b61033e61041a366004612eeb565b610bce565b610295610bf9565b610268610435366004613299565b610c38565b61026861044836600461326d565b610c49565b61026861045b366004612eeb565b50565b610466610cb4565b60405161024c91906132ce565b61033e610481366004612e61565b611174565b61033e610494366004612e61565b611181565b6104ac6104a73660046133f4565b6111a2565b60405161024c9190613433565b610295611259565b61033e611298565b61033e6104d7366004612e61565b6112b1565b61033e6104ea366004612e61565b6112be565b6104f76112f4565b60405161024c9190613476565b610268610512366004613587565b6113ff565b6103a76105253660046135e2565b611447565b61053261148a565b6040805182516001600160801b03908116825260209384015116928101929092520161024c565b606061058b610567836114e8565b6040516020016105779190612ec5565b60405160208183030381529060405261160e565b919050565b61045b81611632565b61045b81611893565b60606105e160405180604001604052806011815260200170455243343632364879706572647269766560781b8152506040516020016105779190612ec5565b90565b60606105e16001604051602001610577919061360e565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105e19101610577565b61064b8989898989898989896119ab565b505050505050505050565b610664868686868686611b9d565b505050505050565b6106798484848433611c50565b50505050565b604080516060810182525f808252602082018190529181019190915261058b60085f8481526020019081526020015f20604051602001610577919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b5f838152600d602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526107269101610577565b9392505050565b5f6105e17f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561078d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107b191906136bb565b6040805160ff909216602083015201610577565b5f828152600a602090815260408083206001600160a01b03851684528252808320548151928301526107f79101610577565b92915050565b5f6105e1610809611e0b565b60405160200161057791815260200190565b5f6107f782611e98565b5f61058b610832836120ce565b60408051911515602083015201610577565b606061058b610567836121ac565b8361085c816122a8565b6001600160a01b0316336001600160a01b03161461088d57604051632aab8bd360e01b815260040160405180910390fd5b61089985858585612365565b5050505050565b60606105e160405180604001604052806007815260200166076312e302e32360cc1b8152506040516020016105779190612ec5565b61093f604051806101e001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f6109486123d1565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654939450926001600160801b03909216916109b291906136fe565b6109bc9190613711565b90505f8215610acb5773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6109e8856123e3565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610a97573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610abb9190613724565b509050610ac8818461256d565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201525f906101a081018415610b9b57610b968486612581565b610b9d565b5f5b81526003546001600160801b0316602091820152604051919250610bc791610577918491016131cc565b5050505090565b6001600160a01b0381165f908152600e602090815260408083205481519283015261058b9101610577565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105e19101610577565b610c4483838333612365565b505050565b335f818152600c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610cbc612d8d565b6105e16040518061020001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ee4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f089190613752565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f72573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f969190613752565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611000573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110249190613752565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa15801561108e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110b29190613752565b6001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081525081525060405160200161057791906132ce565b5f61058b61080983612595565b5f818152600b602090815260408083205481519283015261058b9101610577565b60605f8267ffffffffffffffff8111156111be576111be61376d565b6040519080825280602002602001820160405280156111e7578160200160208202803683370190505b5090505f5b8381101561123d575f85858381811061120757611207613781565b9050602002013590505f815490508084848151811061122857611228613781565b602090810291909101015250506001016111ec565b50611252816040516020016105779190613433565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105e19101610577565b5f6105e160095460405160200161057791815260200190565b5f61058b610809836125c0565b5f61058b6108096112ef7f0000000000000000000000000000000000000000000000000000000000000000856136fe565b6125eb565b60408051610180810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526105e16002604051602001610577919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84611409816122a8565b6001600160a01b0316336001600160a01b03161461143a57604051632aab8bd360e01b815260040160405180910390fd5b6106648686868686611c50565b6001600160a01b038281165f908152600c60209081526040808320938516835292815282822054835160ff90911615159181019190915290916107f79101610577565b604080518082019091525f80825260208201526040805180820182526007546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105e190606001610577565b606060f882901c6001600160f81b0383165f6115038261262b565b90505f836003811115611518576115186136d6565b0361154a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611606565b600183600381111561155e5761155e6136d6565b0361158a57806040516020016115749190613795565b6040516020818303038152906040529350611606565b600283600381111561159e5761159e6136d6565b036115b4578060405160200161157491906137cd565b60038360038111156115c8576115c86136d6565b03611606576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b81526004016116299190612ec5565b60405180910390fd5b61163a6126dd565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611697573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116bb9190613752565b9050336001600160a01b0382161480159061176757507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa15801561172d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117519190613752565b6001600160a01b0316336001600160a01b031614155b80156117795750611777336120ce565b155b15611796576040516282b42960e81b815260040160405180910390fd5b5f61179f611e0b565b6040516370a0823160e01b81523060048201529091505f906001600160a01b038516906370a0823190602401602060405180830381865afa1580156117e6573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061180a9190613806565b90506118206001600160a01b0385168483612705565b81611829611e0b565b14611847576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a350505061045b60015f55565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156118ef573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119139190613752565b6001600160a01b0316336001600160a01b03161415801561193a5750611938336120ce565b155b15611957576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906119a090831515815260200190565b60405180910390a150565b834211156119cc5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166119f35760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781165f818152600e602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f1981840301815282825280516020918201205f80855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611add573d5f803e3d5ffd5b505050602060405103519050886001600160a01b0316816001600160a01b031614611b1b57604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981165f818152600e6020908152604080832080546001019055600c8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b0386161580611bba57506001600160a01b038516155b15611bd85760405163f0dd15fd60e01b815260040160405180910390fd5b828114611bf85760405163174861a760e31b815260040160405180910390fd5b5f5b83811015611c4757611c3f858583818110611c1757611c17613781565b905060200201358888868686818110611c3257611c32613781565b9050602002013533611c50565b600101611bfa565b50505050505050565b6001600160a01b0384161580611c6d57506001600160a01b038316155b15611c8b5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611d4b576001600160a01b038085165f908152600c602090815260408083209385168352929052205460ff16611d4b575f858152600d602090815260408083206001600160a01b03808916855290835281842090851684529091529020545f198114611d49575f868152600d602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611d43908490613711565b90915550505b505b5f858152600a602090815260408083206001600160a01b038816845290915281208054849290611d7c908490613711565b90915550505f858152600a602090815260408083206001600160a01b038716845290915281208054849290611db29084906136fe565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6040516370a0823160e01b81523060048201525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611e6f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e939190613806565b905090565b5f611ea16126dd565b611eaa82612757565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611f07573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f2b9190613752565b90506001600160a01b038116611f446020850185612eeb565b6001600160a01b031614611f6b57604051630ad13b3360e21b815260040160405180910390fd5b336001600160a01b0382161480159061201557507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611fdb573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611fff9190613752565b6001600160a01b0316336001600160a01b031614155b80156120275750612025336120ce565b155b15612044576040516282b42960e81b815260040160405180910390fd5b5f61204d6123d1565b600980545f90915590915061206381838761278c565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a603836185846120a260408a0160208b01612f13565b60408051938452602084019290925215159082015260600160405180910390a250505061058b60015f55565b5f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a64c90bf6040518163ffffffff1660e01b81526004015f60405180830381865afa15801561212b573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052612152919081019061381d565b90505f5b81518110156121a357836001600160a01b031682828151811061217b5761217b613781565b60200260200101516001600160a01b03160361219b575060019392505050565b600101612156565b505f9392505050565b606060f882901c6001600160f81b0383165f6121c78261262b565b90505f8360038111156121dc576121dc6136d6565b0361220e576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611606565b6001836003811115612222576122226136d6565b03612238578060405160200161157491906138dd565b600283600381111561224c5761224c6136d6565b0361226257806040516020016115749190613914565b6003836003811115612276576122766136d6565b0361160657505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b5f848152600d602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b5f611e93670de0b6b3a7640000612595565b61243b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916125339116612822565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261256592900416612822565b905292915050565b5f6107268383670de0b6b3a7640000612896565b5f61072683670de0b6b3a764000084612896565b5f6107f77f0000000000000000000000000000000000000000000000000000000000000000836128b1565b5f6107f77f00000000000000000000000000000000000000000000000000000000000000008361291b565b5f612610600b5f6125fd60028661294a565b81526020019081526020015f205461297e565b612621600b5f6125fd60018761294a565b6107f7919061393f565b60408051604e80825260808201909252606091905f90826020820181803683370190505090505f5b84156126cf57612664600a86613972565b61266f9060306136fe565b60f81b82600161267f8487613711565b6126899190613711565b8151811061269957612699613781565b60200101906001600160f81b03191690815f1a905350806126b981613985565b91506126c89050600a8661399d565b9450612653565b918290030190815292915050565b60025f54036126ff57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c449084906129ab565b5f6127656020830183612eeb565b6001600160a01b03160361045b5760405163f0dd15fd60e01b815260040160405180910390fd5b5f80612798858561256d565b90506127a3816125c0565b9450845f036127b5575f915050610726565b8491506127c86040840160208501612f13565b156127f7576127f0856127de6020860186612eeb565b6127eb60408701876139b0565b612a0c565b915061281a565b61281a856128086020860186612eeb565b61281560408701876139b0565b612bee565b509392505050565b5f80670de0b6b3a7640000612835612c22565b61283f91906139f3565b905080831161284e575f612858565b6128588184613711565b915061072661288f670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006139f3565b8390612581565b5f825f1904841183021582026128aa575f80fd5b5091020490565b6040516303d1689d60e11b8152600481018290525f906001600160a01b038416906307a2d13a906024015b602060405180830381865afa1580156128f7573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107269190613806565b6040516363737ac960e11b8152600481018290525f906001600160a01b0384169063c6e6f592906024016128dc565b5f6001600160f81b038211156129735760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f6001600160ff1b038211156129a75760405163396ea70160e11b815260040160405180910390fd5b5090565b5f6129bf6001600160a01b03841683612c4d565b905080515f141580156129e35750808060200190518101906129e19190613a0a565b155b15610c4457604051635274afe760e01b81526001600160a01b0384166004820152602401611629565b6040516370a0823160e01b81526001600160a01b0384811660048301525f9182917f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015612a74573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612a989190613806565b604051635d043b2960e11b8152600481018890526001600160a01b0387811660248301523060448301529192507f00000000000000000000000000000000000000000000000000000000000000009091169063ba087652906064016020604051808303815f875af1158015612b0f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612b339190613806565b9150612b3f82826136fe565b6040516370a0823160e01b81526001600160a01b0387811660048301527f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015612ba3573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612bc79190613806565b14612be55760405163350b944160e11b815260040160405180910390fd5b50949350505050565b6106796001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486612705565b5f611e93427f0000000000000000000000000000000000000000000000000000000000000000612c5a565b606061072683835f612c6f565b5f612c658284613972565b6107269084613711565b606081471015612c945760405163cd78605960e01b8152306004820152602401611629565b5f80856001600160a01b03168486604051612caf9190613a25565b5f6040518083038185875af1925050503d805f8114612ce9576040519150601f19603f3d011682016040523d82523d5f602084013e612cee565b606091505b5091509150612cfe868383612d08565b9695505050505050565b606082612d1d57612d1882612d64565b610726565b8151158015612d3457506001600160a01b0384163b155b15612d5d57604051639996b31560e01b81526001600160a01b0385166004820152602401611629565b5080610726565b805115612d745780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b03168152602001612e5c60405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f60208284031215612e71575f80fd5b5035919050565b5f5b83811015612e92578181015183820152602001612e7a565b50505f910152565b5f8151808452612eb1816020860160208601612e78565b601f01601f19169290920160200192915050565b602081525f6107266020830184612e9a565b6001600160a01b038116811461045b575f80fd5b5f60208284031215612efb575f80fd5b813561072681612ed7565b801515811461045b575f80fd5b5f60208284031215612f23575f80fd5b813561072681612f06565b60ff8116811461045b575f80fd5b5f805f805f805f805f6101208a8c031215612f55575f80fd5b8935985060208a0135975060408a0135612f6e81612ed7565b965060608a0135612f7e81612ed7565b955060808a0135612f8e81612f06565b945060a08a0135935060c08a0135612fa581612f2e565b8093505060e08a013591506101008a013590509295985092959850929598565b5f8083601f840112612fd5575f80fd5b50813567ffffffffffffffff811115612fec575f80fd5b6020830191508360208260051b8501011115613006575f80fd5b9250929050565b5f805f805f8060808789031215613022575f80fd5b863561302d81612ed7565b9550602087013561303d81612ed7565b9450604087013567ffffffffffffffff80821115613059575f80fd5b6130658a838b01612fc5565b9096509450606089013591508082111561307d575f80fd5b5061308a89828a01612fc5565b979a9699509497509295939492505050565b5f805f80608085870312156130af575f80fd5b8435935060208501356130c181612ed7565b925060408501356130d181612ed7565b9396929550929360600135925050565b5f805f606084860312156130f3575f80fd5b83359250602084013561310581612ed7565b9150604084013561311581612ed7565b809150509250925092565b5f8060408385031215613131575f80fd5b82359150602083013561314381612ed7565b809150509250929050565b5f6020828403121561315e575f80fd5b813567ffffffffffffffff811115613174575f80fd5b820160608185031215610726575f80fd5b5f805f8060808587031215613198575f80fd5b8435935060208501356131aa81612ed7565b92506040850135915060608501356131c181612ed7565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b5f806040838503121561327e575f80fd5b823561328981612ed7565b9150602083013561314381612f06565b5f805f606084860312156132ab575f80fd5b8335925060208401356132bd81612ed7565b929592945050506040919091013590565b81516001600160a01b03168152610260810160208301516132fa60208401826001600160a01b03169052565b50604083015161331560408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151613387828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b5f8060208385031215613405575f80fd5b823567ffffffffffffffff81111561341b575f80fd5b61342785828601612fc5565b90969095509350505050565b602080825282518282018190525f9190848201906040850190845b8181101561346a5783518352928401929184019160010161344e565b50909695505050505050565b81516001600160801b03168152610180810160208301516134a260208401826001600160801b03169052565b5060408301516134bd60408401826001600160801b03169052565b5060608301516134d860608401826001600160801b03169052565b5060808301516134ed6080840182600f0b9052565b5060a083015161350860a08401826001600160801b03169052565b5060c083015161352360c08401826001600160801b03169052565b5060e083015161353e60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b038116828501526133ec565b5f805f805f60a0868803121561359b575f80fd5b8535945060208601356135ad81612ed7565b935060408601356135bd81612ed7565b92506060860135915060808601356135d481612ed7565b809150509295509295909350565b5f80604083850312156135f3575f80fd5b82356135fe81612ed7565b9150602083013561314381612ed7565b5f60208083525f84545f60018260011c9150600183168061363057607f831692505b60208310810361364e57634e487b7160e01b5f52602260045260245ffd5b602088018390526040880181801561366d5760018114613683576136ac565b60ff198616825284151560051b820196506136ac565b5f8b8152602090205f5b868110156136a65781548482015290850190890161368d565b83019750505b50949998505050505050505050565b5f602082840312156136cb575f80fd5b815161072681612f2e565b634e487b7160e01b5f52602160045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b808201808211156107f7576107f76136ea565b818103818111156107f7576107f76136ea565b5f8060408385031215613735575f80fd5b82519150602083015161314381612f06565b805161058b81612ed7565b5f60208284031215613762575f80fd5b815161072681612ed7565b634e487b7160e01b5f52604160045260245ffd5b634e487b7160e01b5f52603260045260245ffd5b700243cb832b9323934bb32902637b7339d1607d1b81525f82516137c0816011850160208701612e78565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b81525f82516137f9816012850160208701612e78565b9190910160120192915050565b5f60208284031215613816575f80fd5b5051919050565b5f602080838503121561382e575f80fd5b825167ffffffffffffffff80821115613845575f80fd5b818501915085601f830112613858575f80fd5b81518181111561386a5761386a61376d565b8060051b604051601f19603f8301168101818110858211171561388f5761388f61376d565b6040529182528482019250838101850191888311156138ac575f80fd5b938501935b828510156138d1576138c285613747565b845293850193928501926138b1565b98975050505050505050565b6f242ca822a9222924ab2296a627a7239d60811b81525f8251613907816010850160208701612e78565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81525f82516137c0816011850160208701612e78565b8181035f831280158383131683831282161715611252576112526136ea565b634e487b7160e01b5f52601260045260245ffd5b5f826139805761398061395e565b500690565b5f60018201613996576139966136ea565b5060010190565b5f826139ab576139ab61395e565b500490565b5f808335601e198436030181126139c5575f80fd5b83018035915067ffffffffffffffff8211156139df575f80fd5b602001915036819003821315613006575f80fd5b80820281158282048414176107f7576107f76136ea565b5f60208284031215613a1a575f80fd5b815161072681612f06565b5f8251613a36818460208701612e78565b919091019291505056fea26469706673582212208ecbb73f3dbe342fbbec123e3afd4fb8df745caac1be231983ac9e9586ae09c664736f6c63430008160033' as `0x${string}`,
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
