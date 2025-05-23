export const StakingUSDSTarget0 = {
  name: 'StakingUSDSTarget0' as const,
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
        "name": "__stakingUSDS",
        "type": "address",
        "internalType": "contract IStakingUSDS"
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
    "name": "stakingUSDS",
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
  bytecode: '0x6102a060405234801562000011575f80fd5b5060405162004145380380620041458339810160408190526200003491620004ef565b60015f81905583516001600160a01b039081166080818152602080880151841660a0908152918801516101a052908701516101c05260c0808801516101e090815260e0808a015161020052610120808b0151909352610100808b0151909152610140808b0151909152908901805151909252815190920151909152805160409081015161016052905160609081015161018052908701518316610240528601516102605281851661022052908316610280528291620000f69190839062000100565b505050506200068a565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200015a9085908390620001cb16565b620001c557604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001b99186916200027516565b620001c5848262000275565b50505050565b5f805f846001600160a01b031684604051620001e891906200063b565b5f604051808303815f865af19150503d805f811462000223576040519150601f19603f3d011682016040523d82523d5f602084013e62000228565b606091505b5091509150818015620002565750805115806200025657508080602001905181019062000256919062000669565b80156200026c57505f856001600160a01b03163b115b95945050505050565b5f6200028b6001600160a01b03841683620002e6565b905080515f14158015620002b2575080806020019051810190620002b0919062000669565b155b15620002e157604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6060620002f583835f620002fc565b9392505050565b606081471015620003235760405163cd78605960e01b8152306004820152602401620002d8565b5f80856001600160a01b031684866040516200034091906200063b565b5f6040518083038185875af1925050503d805f81146200037c576040519150601f19603f3d011682016040523d82523d5f602084013e62000381565b606091505b509092509050620003948683836200039e565b9695505050505050565b606082620003b757620003b18262000402565b620002f5565b8151158015620003cf57506001600160a01b0384163b155b15620003fa57604051639996b31560e01b81526001600160a01b0385166004820152602401620002d8565b5080620002f5565b805115620004135780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405161020081016001600160401b03811182821017156200045c57634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b038116811462000479575f80fd5b919050565b5f608082840312156200048f575f80fd5b604051608081016001600160401b0381118282101715620004be57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a081121562000504575f80fd5b6102608082121562000514575f80fd5b6200051e6200042c565b91506200052b8662000462565b82526200053b6020870162000462565b60208301526200054e6040870162000462565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620005b981880162000462565b90830152610180620005cd87820162000462565b908301526101a0620005e187820162000462565b908301526101c0620005f587820162000462565b908301526101e06200060a888883016200047e565b81840152508194506200061f81870162000462565b9350505062000632610280850162000462565b90509250925092565b5f82515f5b818110156200065c576020818601810151858301520162000640565b505f920191825250919050565b5f602082840312156200067a575f80fd5b81518015158114620002f5575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613956620007ef5f395f818161065f01528181611e840152612a4301525f8181610db0015261238201525f8181610d81015261234501525f8181610c5d01528181610ee001528181610f6e01528181610ffc0152818161108a0152818161169301528181611729015281816118eb01528181611f0c01528181611fe0015261213101525f610e4801525f8181610e22015261252701525f8181610dfc015261250101525f8181610dd601526124db01525f61119501525f61116f01525f61114901525f61112301525f8181610eba015261254d01525f8181610e6e01528181611320015261292301525f8181610e940152612b0901525f81816106200152610d5201525f818161078901528181610d23015281816112bd0152612aba01526139565ff3fe608060405234801561000f575f80fd5b5060043610610233575f3560e01c806354fd4d5011610135578063bd85b039116100b4578063cf210e6511610079578063cf210e65146104ef578063d816574314610502578063e44808bc14610517578063e985e9c51461052a578063fba560081461053d575f80fd5b8063bd85b03914610499578063becee9c3146104ac578063c55dae63146104cc578063c69e16ad146104d4578063c6e6f592146104dc575f80fd5b80639cd241af116100fa5780639cd241af1461043a578063a22cb4651461044d578063ab033ea914610460578063b0d9658014610471578063b88fed9f14610486575f80fd5b806354fd4d50146103f057806360246c88146103f85780637180c8ca1461040d5780637ecebe001461041f578063950c5d0314610432575f80fd5b80631c0f12b6116101c15780633a98ef39116101865780633a98ef391461038c5780633e691db91461039457806346fbf68e146103a75780634e41a1fb146103ca5780634ed2d6ac146103dd575f80fd5b80631c0f12b6146102e657806320fc4881146102f957806321ff32a91461033e578063313ce5671461035f5780633656eec214610379575f80fd5b806306fdde031161020757806306fdde03146102905780630a4e14931461029857806310cded21146102b857806314e5f07b146102c057806317fad7fc146102d3575f80fd5b8062ad800c1461023757806301681a621461026057806302329a291461027557806304baa00b14610288575b5f80fd5b61024a610245366004612d41565b61056c565b6040516102579190612da5565b60405180910390f35b61027361026e366004612dcb565b6105a3565b005b610273610283366004612df3565b6105ac565b61024a6105b5565b61024a6105fb565b6102a0610612565b6040516001600160a01b039091168152602001610257565b6102a0610651565b6102736102ce366004612e1c565b610690565b6102736102e1366004612eed565b6106ac565b6102736102f4366004612f7c565b6106c2565b61030c610307366004612d41565b6106d5565b6040805182516001600160801b0390811682526020808501518216908301529282015190921690820152606001610257565b61035161034c366004612fc1565b61073e565b604051908152602001610257565b610367610783565b60405160ff9091168152602001610257565b610351610387366004613000565b61081b565b610351610853565b6103516103a236600461302e565b610871565b6103ba6103b5366004612dcb565b61087b565b6040519015158152602001610257565b61024a6103d8366004612d41565b61089a565b6102736103eb366004613065565b6108a8565b61024a6108f6565b61040061092b565b60405161025791906130ac565b61027361041b36600461314d565b5050565b61035161042d366004612dcb565b610c24565b6102a0610c4f565b610273610448366004613179565b610c8e565b61027361045b36600461314d565b610c9f565b61027361046e366004612dcb565b50565b610479610d0a565b60405161025791906131ae565b610351610494366004612d41565b6111ca565b6103516104a7366004612d41565b6111d7565b6104bf6104ba3660046132d4565b6111f8565b6040516102579190613313565b6102a06112af565b6103516112ee565b6103516104ea366004612d41565b611307565b6103516104fd366004612d41565b611314565b61050a61134a565b6040516102579190613356565b610273610525366004613467565b611455565b6103ba6105383660046134c2565b61149d565b6105456114e0565b6040805182516001600160801b039081168252602093840151169281019290925201610257565b606061059e61057a8361153e565b60405160200161058a9190612da5565b604051602081830303815290604052611664565b919050565b61046e81611688565b61046e816118e9565b60606105f8604051806040016040528060158152602001745374616b696e67555344534879706572647269766560581b81525060405160200161058a9190612da5565b90565b60606105f8600160405160200161058a91906134ee565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105f8910161058a565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105f8910161058a565b6106a1898989898989898989611a01565b505050505050505050565b6106ba868686868686611bf3565b505050505050565b6106cf8484848433611ca6565b50505050565b604080516060810182525f808252602082018190529181019190915261059e60085f8481526020019081526020015f2060405160200161058a919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b5f838152600d602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261077c910161058a565b9392505050565b5f6105f87f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107e3573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610807919061359b565b6040805160ff90921660208301520161058a565b5f828152600a602090815260408083206001600160a01b038516845282528083205481519283015261084d910161058a565b92915050565b5f6105f861085f611e61565b60405160200161058a91815260200190565b5f61084d82611ef7565b5f61059e6108888361212d565b6040805191151560208301520161058a565b606061059e61057a8361220b565b836108b281612307565b6001600160a01b0316336001600160a01b0316146108e357604051632aab8bd360e01b815260040160405180910390fd5b6108ef858585856123c4565b5050505050565b60606105f860405180604001604052806007815260200166076312e302e32360cc1b81525060405160200161058a9190612da5565b610995604051806101e001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f61099e612430565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654939450926001600160801b0390921691610a0891906135de565b610a1291906135f1565b90505f8215610b215773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610a3e85612442565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610aed573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b119190613604565b509050610b1e81846125cc565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201525f906101a081018415610bf157610bec84866125e0565b610bf3565b5f5b81526003546001600160801b0316602091820152604051919250610c1d9161058a918491016130ac565b5050505090565b6001600160a01b0381165f908152600e602090815260408083205481519283015261059e910161058a565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105f8910161058a565b610c9a838383336123c4565b505050565b335f818152600c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610d12612c6d565b6105f86040518061020001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f3a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f5e9190613632565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610fc8573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fec9190613632565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611056573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061107a9190613632565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110e4573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111089190613632565b6001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081525081525060405160200161058a91906131ae565b5f61059e61085f836125f4565b5f818152600b602090815260408083205481519283015261059e910161058a565b60605f8267ffffffffffffffff8111156112145761121461364d565b60405190808252806020026020018201604052801561123d578160200160208202803683370190505b5090505f5b83811015611293575f85858381811061125d5761125d613661565b9050602002013590505f815490508084848151811061127e5761127e613661565b60209081029190910101525050600101611242565b506112a88160405160200161058a9190613313565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105f8910161058a565b5f6105f860095460405160200161058a91815260200190565b5f61059e61085f83612669565b5f61059e61085f6113457f0000000000000000000000000000000000000000000000000000000000000000856135de565b6126a3565b60408051610180810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526105f8600260405160200161058a919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b8461145f81612307565b6001600160a01b0316336001600160a01b03161461149057604051632aab8bd360e01b815260040160405180910390fd5b6106ba8686868686611ca6565b6001600160a01b038281165f908152600c60209081526040808320938516835292815282822054835160ff909116151591810191909152909161084d910161058a565b604080518082019091525f80825260208201526040805180820182526007546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105f89060600161058a565b606060f882901c6001600160f81b0383165f611559826126e3565b90505f83600381111561156e5761156e6135b6565b036115a0576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061165c565b60018360038111156115b4576115b46135b6565b036115e057806040516020016115ca9190613675565b604051602081830303815290604052935061165c565b60028360038111156115f4576115f46135b6565b0361160a57806040516020016115ca91906136ad565b600383600381111561161e5761161e6135b6565b0361165c576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b815260040161167f9190612da5565b60405180910390fd5b611690612795565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116ed573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117119190613632565b9050336001600160a01b038216148015906117bd57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611783573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117a79190613632565b6001600160a01b0316336001600160a01b031614155b80156117cf57506117cd3361212d565b155b156117ec576040516282b42960e81b815260040160405180910390fd5b5f6117f5611e61565b6040516370a0823160e01b81523060048201529091505f906001600160a01b038516906370a0823190602401602060405180830381865afa15801561183c573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061186091906136e6565b90506118766001600160a01b03851684836127bd565b8161187f611e61565b1461189d576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a350505061046e60015f55565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611945573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119699190613632565b6001600160a01b0316336001600160a01b031614158015611990575061198e3361212d565b155b156119ad576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906119f690831515815260200190565b60405180910390a150565b83421115611a225760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b038716611a495760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781165f818152600e602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f1981840301815282825280516020918201205f80855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611b33573d5f803e3d5ffd5b505050602060405103519050886001600160a01b0316816001600160a01b031614611b7157604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981165f818152600e6020908152604080832080546001019055600c8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b0386161580611c1057506001600160a01b038516155b15611c2e5760405163f0dd15fd60e01b815260040160405180910390fd5b828114611c4e5760405163174861a760e31b815260040160405180910390fd5b5f5b83811015611c9d57611c95858583818110611c6d57611c6d613661565b905060200201358888868686818110611c8857611c88613661565b9050602002013533611ca6565b600101611c50565b50505050505050565b6001600160a01b0384161580611cc357506001600160a01b038316155b15611ce15760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611da1576001600160a01b038085165f908152600c602090815260408083209385168352929052205460ff16611da1575f858152600d602090815260408083206001600160a01b03808916855290835281842090851684529091529020545f198114611d9f575f868152600d602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611d999084906135f1565b90915550505b505b5f858152600a602090815260408083206001600160a01b038816845290915281208054849290611dd29084906135f1565b90915550505f858152600a602090815260408083206001600160a01b038716845290915281208054849290611e089084906135de565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6040516370a0823160e01b81523060048201525f90611ef2906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611ec9573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611eed91906136e6565b612669565b905090565b5f611f00612795565b611f098261280f565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611f66573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f8a9190613632565b90506001600160a01b038116611fa36020850185612dcb565b6001600160a01b031614611fca57604051630ad13b3360e21b815260040160405180910390fd5b336001600160a01b0382161480159061207457507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa15801561203a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061205e9190613632565b6001600160a01b0316336001600160a01b031614155b801561208657506120843361212d565b155b156120a3576040516282b42960e81b815260040160405180910390fd5b5f6120ac612430565b600980545f9091559091506120c2818387612844565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a6038361858461210160408a0160208b01612df3565b60408051938452602084019290925215159082015260600160405180910390a250505061059e60015f55565b5f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a64c90bf6040518163ffffffff1660e01b81526004015f60405180830381865afa15801561218a573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526121b191908101906136fd565b90505f5b815181101561220257836001600160a01b03168282815181106121da576121da613661565b60200260200101516001600160a01b0316036121fa575060019392505050565b6001016121b5565b505f9392505050565b606060f882901c6001600160f81b0383165f612226826126e3565b90505f83600381111561223b5761223b6135b6565b0361226d576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061165c565b6001836003811115612281576122816135b6565b0361229757806040516020016115ca91906137bd565b60028360038111156122ab576122ab6135b6565b036122c157806040516020016115ca91906137f4565b60038360038111156122d5576122d56135b6565b0361165c57505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b5f848152600d602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b5f611ef2670de0b6b3a76400006125f4565b61249a6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161259291166128da565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926125c4929004166128da565b905292915050565b5f61077c8383670de0b6b3a764000061294e565b5f61077c83670de0b6b3a76400008461294e565b60405163b88fed9f60e01b8152600481018290525f9073__$27b302b103d10b9a6b3339aabd1a10a718$__9063b88fed9f906024015b602060405180830381865af4158015612645573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061084d91906136e6565b6040516363737ac960e11b8152600481018290525f9073__$27b302b103d10b9a6b3339aabd1a10a718$__9063c6e6f5929060240161262a565b5f6126c8600b5f6126b5600286612969565b81526020019081526020015f205461299d565b6126d9600b5f6126b5600187612969565b61084d919061381f565b60408051604e80825260808201909252606091905f90826020820181803683370190505090505f5b84156127875761271c600a86613852565b6127279060306135de565b60f81b82600161273784876135f1565b61274191906135f1565b8151811061275157612751613661565b60200101906001600160f81b03191690815f1a9053508061277181613865565b91506127809050600a8661387d565b945061270b565b918290030190815292915050565b60025f54036127b757604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c9a9084906129ca565b5f61281d6020830183612dcb565b6001600160a01b03160361046e5760405163f0dd15fd60e01b815260040160405180910390fd5b5f8061285085856125cc565b905061285b81612669565b9450845f0361286d575f91505061077c565b8491506128806040840160208501612df3565b156128af576128a8856128966020860186612dcb565b6128a36040870187613890565b612a2b565b91506128d2565b6128d2856128c06020860186612dcb565b6128cd6040870187613890565b612ae9565b509392505050565b5f80670de0b6b3a76400006128ed612b02565b6128f791906138d3565b9050808311612906575f612910565b61291081846135f1565b915061077c612947670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006138d3565b83906125e0565b5f825f190484118302158202612962575f80fd5b5091020490565b5f6001600160f81b038211156129925760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f6001600160ff1b038211156129c65760405163396ea70160e11b815260040160405180910390fd5b5090565b5f6129de6001600160a01b03841683612b2d565b905080515f14158015612a02575080806020019051810190612a0091906138ea565b155b15610c9a57604051635274afe760e01b81526001600160a01b038416600482015260240161167f565b604051632e1a7d4d60e01b8152600481018590525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d906024015f604051808303815f87803b158015612a8c575f80fd5b505af1158015612a9e573d5f803e3d5ffd5b50505050612aab856125f4565b9050612ae16001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001685836127bd565b949350505050565b60405163350b944160e11b815260040160405180910390fd5b5f611ef2427f0000000000000000000000000000000000000000000000000000000000000000612b3a565b606061077c83835f612b4f565b5f612b458284613852565b61077c90846135f1565b606081471015612b745760405163cd78605960e01b815230600482015260240161167f565b5f80856001600160a01b03168486604051612b8f9190613905565b5f6040518083038185875af1925050503d805f8114612bc9576040519150601f19603f3d011682016040523d82523d5f602084013e612bce565b606091505b5091509150612bde868383612be8565b9695505050505050565b606082612bfd57612bf882612c44565b61077c565b8151158015612c1457506001600160a01b0384163b155b15612c3d57604051639996b31560e01b81526001600160a01b038516600482015260240161167f565b508061077c565b805115612c545780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b03168152602001612d3c60405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f60208284031215612d51575f80fd5b5035919050565b5f5b83811015612d72578181015183820152602001612d5a565b50505f910152565b5f8151808452612d91816020860160208601612d58565b601f01601f19169290920160200192915050565b602081525f61077c6020830184612d7a565b6001600160a01b038116811461046e575f80fd5b5f60208284031215612ddb575f80fd5b813561077c81612db7565b801515811461046e575f80fd5b5f60208284031215612e03575f80fd5b813561077c81612de6565b60ff8116811461046e575f80fd5b5f805f805f805f805f6101208a8c031215612e35575f80fd5b8935985060208a0135975060408a0135612e4e81612db7565b965060608a0135612e5e81612db7565b955060808a0135612e6e81612de6565b945060a08a0135935060c08a0135612e8581612e0e565b8093505060e08a013591506101008a013590509295985092959850929598565b5f8083601f840112612eb5575f80fd5b50813567ffffffffffffffff811115612ecc575f80fd5b6020830191508360208260051b8501011115612ee6575f80fd5b9250929050565b5f805f805f8060808789031215612f02575f80fd5b8635612f0d81612db7565b95506020870135612f1d81612db7565b9450604087013567ffffffffffffffff80821115612f39575f80fd5b612f458a838b01612ea5565b90965094506060890135915080821115612f5d575f80fd5b50612f6a89828a01612ea5565b979a9699509497509295939492505050565b5f805f8060808587031215612f8f575f80fd5b843593506020850135612fa181612db7565b92506040850135612fb181612db7565b9396929550929360600135925050565b5f805f60608486031215612fd3575f80fd5b833592506020840135612fe581612db7565b91506040840135612ff581612db7565b809150509250925092565b5f8060408385031215613011575f80fd5b82359150602083013561302381612db7565b809150509250929050565b5f6020828403121561303e575f80fd5b813567ffffffffffffffff811115613054575f80fd5b82016060818503121561077c575f80fd5b5f805f8060808587031215613078575f80fd5b84359350602085013561308a81612db7565b92506040850135915060608501356130a181612db7565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b5f806040838503121561315e575f80fd5b823561316981612db7565b9150602083013561302381612de6565b5f805f6060848603121561318b575f80fd5b83359250602084013561319d81612db7565b929592945050506040919091013590565b81516001600160a01b03168152610260810160208301516131da60208401826001600160a01b03169052565b5060408301516131f560408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151613267828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b5f80602083850312156132e5575f80fd5b823567ffffffffffffffff8111156132fb575f80fd5b61330785828601612ea5565b90969095509350505050565b602080825282518282018190525f9190848201906040850190845b8181101561334a5783518352928401929184019160010161332e565b50909695505050505050565b81516001600160801b031681526101808101602083015161338260208401826001600160801b03169052565b50604083015161339d60408401826001600160801b03169052565b5060608301516133b860608401826001600160801b03169052565b5060808301516133cd6080840182600f0b9052565b5060a08301516133e860a08401826001600160801b03169052565b5060c083015161340360c08401826001600160801b03169052565b5060e083015161341e60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b038116828501526132cc565b5f805f805f60a0868803121561347b575f80fd5b85359450602086013561348d81612db7565b9350604086013561349d81612db7565b92506060860135915060808601356134b481612db7565b809150509295509295909350565b5f80604083850312156134d3575f80fd5b82356134de81612db7565b9150602083013561302381612db7565b5f60208083525f84545f60018260011c9150600183168061351057607f831692505b60208310810361352e57634e487b7160e01b5f52602260045260245ffd5b602088018390526040880181801561354d57600181146135635761358c565b60ff198616825284151560051b8201965061358c565b5f8b8152602090205f5b868110156135865781548482015290850190890161356d565b83019750505b50949998505050505050505050565b5f602082840312156135ab575f80fd5b815161077c81612e0e565b634e487b7160e01b5f52602160045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b8082018082111561084d5761084d6135ca565b8181038181111561084d5761084d6135ca565b5f8060408385031215613615575f80fd5b82519150602083015161302381612de6565b805161059e81612db7565b5f60208284031215613642575f80fd5b815161077c81612db7565b634e487b7160e01b5f52604160045260245ffd5b634e487b7160e01b5f52603260045260245ffd5b700243cb832b9323934bb32902637b7339d1607d1b81525f82516136a0816011850160208701612d58565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b81525f82516136d9816012850160208701612d58565b9190910160120192915050565b5f602082840312156136f6575f80fd5b5051919050565b5f602080838503121561370e575f80fd5b825167ffffffffffffffff80821115613725575f80fd5b818501915085601f830112613738575f80fd5b81518181111561374a5761374a61364d565b8060051b604051601f19603f8301168101818110858211171561376f5761376f61364d565b60405291825284820192508381018501918883111561378c575f80fd5b938501935b828510156137b1576137a285613627565b84529385019392850192613791565b98975050505050505050565b6f242ca822a9222924ab2296a627a7239d60811b81525f82516137e7816010850160208701612d58565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81525f82516136a0816011850160208701612d58565b8181035f8312801583831316838312821617156112a8576112a86135ca565b634e487b7160e01b5f52601260045260245ffd5b5f826138605761386061383e565b500690565b5f60018201613876576138766135ca565b5060010190565b5f8261388b5761388b61383e565b500490565b5f808335601e198436030181126138a5575f80fd5b83018035915067ffffffffffffffff8211156138bf575f80fd5b602001915036819003821315612ee6575f80fd5b808202811582820484141761084d5761084d6135ca565b5f602082840312156138fa575f80fd5b815161077c81612de6565b5f8251613916818460208701612d58565b919091019291505056fea26469706673582212200089b3b744b4839e293dee142b1ff3995f5352bc527e32755694c11b7bdcf83164736f6c63430008160033' as `0x${string}`,
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
  "stakingUSDS()": "10cded21",
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
