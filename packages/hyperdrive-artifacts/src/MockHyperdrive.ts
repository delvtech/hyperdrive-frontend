export const MockHyperdrive = {
  name: 'MockHyperdrive' as const,
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
    "type": "fallback",
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "PERMIT_TYPEHASH",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "__external_transferFrom",
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
    "name": "__setBalanceOf",
    "inputs": [
      {
        "name": "_tokenId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_who",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "accrue",
    "inputs": [
      {
        "name": "time",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "apr",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "addLiquidity",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
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
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "batchTransferFrom",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
        "type": "uint256[]",
        "internalType": "uint256[]"
      },
      {
        "name": "",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "burn",
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
    "name": "calculateFeesGivenBonds",
    "inputs": [
      {
        "name": "_bondAmount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_normalizedTimeRemaining",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_spotPrice",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "vaultSharePrice",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "totalCurveFee",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "totalFlatFee",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "governanceCurveFee",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "totalGovernanceFee",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "calculateFeesGivenShares",
    "inputs": [
      {
        "name": "_shareAmount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_spotPrice",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "vaultSharePrice",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "curveFee",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "governanceCurveFee",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "calculateIdleShareReserves",
    "inputs": [
      {
        "name": "_vaultSharePrice",
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
    "name": "calculateOpenLong",
    "inputs": [
      {
        "name": "_shareAmount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_vaultSharePrice",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "shareReservesDelta",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "bondReservesDelta",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "totalGovernanceFee",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "spotPrice",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "calculateTimeRemaining",
    "inputs": [
      {
        "name": "_maturityTime",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "timeRemaining",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "calculateTimeRemainingScaled",
    "inputs": [
      {
        "name": "_maturityTime",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "timeRemaining",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "checkpoint",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "closeLong",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
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
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "closeShort",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
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
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "collectGovernanceFee",
    "inputs": [
      {
        "name": "",
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
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "domainSeparator",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getTotalShares",
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
    "name": "initialize",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
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
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "latestCheckpoint",
    "inputs": [],
    "outputs": [
      {
        "name": "checkpointTime",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "mint",
    "inputs": [
      {
        "name": "tokenID",
        "type": "uint256",
        "internalType": "uint256"
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
    "name": "openLong",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
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
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "openShort",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
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
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "pause",
    "inputs": [
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
    "name": "permitForAll",
    "inputs": [
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
    "name": "redeemWithdrawalShares",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
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
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
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
    "name": "removeLiquidity",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
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
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
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
    "name": "setApproval",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
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
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
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
    "name": "setApprovalForAll",
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
    "name": "setLongExposure",
    "inputs": [
      {
        "name": "longExposure",
        "type": "uint128",
        "internalType": "uint128"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setMarketState",
    "inputs": [
      {
        "name": "_marketState_",
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
    "name": "setReserves",
    "inputs": [
      {
        "name": "shareReserves",
        "type": "uint128",
        "internalType": "uint128"
      },
      {
        "name": "bondReserves",
        "type": "uint128",
        "internalType": "uint128"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setTotalShares",
    "inputs": [
      {
        "name": "_totalShares",
        "type": "uint256",
        "internalType": "uint256"
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
        "name": "",
        "type": "address",
        "internalType": "contract IERC20"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "target0",
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
    "name": "target1",
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
    "name": "target2",
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
    "name": "target3",
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
    "name": "target4",
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
    "name": "transferFrom",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
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
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      },
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
    "name": "updateLiquidity",
    "inputs": [
      {
        "name": "_shareReservesDelta",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
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
    "name": "ExpInvalidExponent",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InsufficientBalance",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InsufficientLiquidity",
    "inputs": []
  },
  {
    "type": "error",
    "name": "LnInvalidInput",
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
    "name": "UnexpectedSuccess",
    "inputs": []
  },
  {
    "type": "error",
    "name": "UnsafeCastToInt128",
    "inputs": []
  },
  {
    "type": "error",
    "name": "UnsafeCastToInt256",
    "inputs": []
  },
  {
    "type": "error",
    "name": "UnsafeCastToUint128",
    "inputs": []
  },
  {
    "type": "error",
    "name": "UpdateLiquidityFailed",
    "inputs": []
  }
] as const,
  bytecode: '0x61032060405234801562000011575f80fd5b506040516201732c3803806201732c833981016040819052620000349162000369565b6040518060400160405280600e81526020016d4d6f636b4879706572647269766560901b815250828284846040516200006d9062000260565b6200007a929190620004a3565b604051809103905ff08015801562000094573d5f803e3d5ffd5b508585604051620000a5906200026e565b620000b2929190620004a3565b604051809103905ff080158015620000cc573d5f803e3d5ffd5b508686604051620000dd906200027c565b620000ea929190620004a3565b604051809103905ff08015801562000104573d5f803e3d5ffd5b50878760405162000115906200028a565b62000122929190620004a3565b604051809103905ff0801580156200013c573d5f803e3d5ffd5b5088886040516200014d9062000298565b6200015a929190620004a3565b604051809103905ff08015801562000174573d5f803e3d5ffd5b5060015f81905587516001600160a01b0390811660809081526020808b0151831660a0908152918b01516101a052908a01516101c05260c0808b01516101e090815260e0808d015161020052610120808e0151909352610100808e0151909152610140808e0151909152908c01805151909252815190920151909152805160409081015161016052905160609081015161018052908a0151821661024052890151610260528716610220526200022b898262000661565b506001600160a01b03948516610280529284166102a0529083166102c05282166102e0521661030052506200072d9350505050565b6140d7806200355c83390190565b614103806200763383390190565b614390806200b73683390190565b614328806200fac683390190565b61353e8062013dee83390190565b634e487b7160e01b5f52604160045260245ffd5b60405161020081016001600160401b0381118282101715620002e057620002e0620002a6565b60405290565b80516001600160a01b0381168114620002fd575f80fd5b919050565b5f6080828403121562000313575f80fd5b604051608081016001600160401b0381118282101715620003385762000338620002a6565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f808284036102808112156200037d575f80fd5b610260808212156200038d575f80fd5b62000397620002ba565b9150620003a485620002e6565b8252620003b460208601620002e6565b6020830152620003c760408601620002e6565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e083015261010080860151818401525061012080860151818401525061014080860151818401525061016062000432818701620002e6565b9083015261018062000446868201620002e6565b908301526101a06200045a868201620002e6565b908301526101c06200046e868201620002e6565b908301526101e0620004838787830162000302565b818401525081935062000498818601620002e6565b925050509250929050565b82516001600160a01b0316815261028081016020840151620004d060208401826001600160a01b03169052565b506040840151620004ec60408401826001600160a01b03169052565b50606084015160608301526080840151608083015260a084015160a083015260c084015160c083015260e084015160e0830152610100808501518184015250610120808501518184015250610140808501518184015250610160808501516200055f828501826001600160a01b03169052565b5050610180848101516001600160a01b03908116918401919091526101a0808601518216908401526101c0808601518216908401526101e09485015180519584019590955260208501516102008401526040850151610220840152606090940151610240830152919092166102609092019190915290565b600181811c90821680620005ec57607f821691505b6020821081036200060b57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200065c57805f5260205f20601f840160051c81016020851015620006385750805b601f840160051c820191505b8181101562000659575f815560010162000644565b50505b505050565b81516001600160401b038111156200067d576200067d620002a6565b62000695816200068e8454620005d7565b8462000611565b602080601f831160018114620006cb575f8415620006b35750858301515b5f19600386901b1c1916600185901b17855562000725565b5f85815260208120601f198616915b82811015620006fb57888601518255948401946001909101908401620006da565b50858210156200071957878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e05161030051612c9b620008c15f395f818161090301528181610a490152610b6201525f818161087e01528181610b910152610dae01525f818161078b0152610fa601525f81816108d00152610b0001525f81816102900152818161044801528181610a1a01528181610a7b01528181610aad01528181610b3301528181610d6901528181610df501528181610f560152610fd901525f50505f50505f50505f50505f50505f81816118b2015281816118ee0152611bf101525f818161163201528181611674015261176601525f50505f818161110f0152818161118701526114bf01525f818161115b01526116e701525f81816110d50152818161147b01526116c601525f818161161001528181611695015261178701525f8181611443015261197501525f6115c001525f50505f8181610bef01528181610c860152610cf40152612c9b5ff3fe60806040526004361061027c575f3560e01c8063907c0f921161014e578063ca6d38f7116100c0578063ded0623111610079578063ded06231146104c1578063e44808bc146108a0578063eac3e799146108bf578063f3f70707146108f2578063f45cf2e014610925578063f698da2514610a015761027c565b8063ca6d38f714610827578063cba2e58d14610846578063cbc13434146103c0578063d5002f2e14610859578063d899e1121461086d578063dbbe8070146108465761027c565b8063a22cb46511610112578063a22cb4651461061c578063a6e8a8591461077a578063a77384c1146107ad578063ab033ea914610385578063b1b4b170146107cc578063b4f8da39146107eb5761027c565b8063907c0f92146106ca57806394a97cdb146106de5780639bd334981461071d5780639cd241af1461073c5780639eea5f661461075b5761027c565b80634c2ac1d9116101f25780637180c8ca116101ab5780637180c8ca1461061c57806371f88b7c1461063b57806377d05ff41461065a5780638120a3e21461066d578063836a10401461068c5780639032c726146106ab5761027c565b80634c2ac1d91461055f5780634ed2d6ac1461057257806358af4a0a1461058c57806368096239146105ab57806368c2ecb8146105ca578063702db0eb146105e95761027c565b806321b57d531161024457806321b57d531461043757806322d5506b1461048257806329b23fc1146104c157806330adf81f146104ee5780633e691db914610521578063414f826d146105405761027c565b806301681a621461038557806302329a29146103a6578063074a6de9146103c057806317fad7fc146103f95780631c0f12b614610418575b348015610287575f80fd5b505f3660605f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516102c8929190612399565b5f60405180830381855af49150503d805f8114610300576040519150601f19603f3d011682016040523d82523d5f602084013e610305565b606091505b5091509150811561032957604051638bb0a34b60e01b815260040160405180910390fd5b5f610333826123a8565b90506001600160e01b03198116636e64089360e11b1461035557815160208301fd5b8151600319810160048401908152926103769181016020019060240161243f565b80519650602001945050505050f35b348015610390575f80fd5b506103a461039f3660046124f0565b610a15565b005b3480156103b1575f80fd5b506103a461039f366004612528565b3480156103cb575f80fd5b506103df6103da366004612553565b610a42565b604080519283526020830191909152015b60405180910390f35b348015610404575f80fd5b506103a46104133660046125e0565b610a76565b348015610423575f80fd5b506103a461043236600461266f565b610aa8565b348015610442575f80fd5b5061046a7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016103f0565b34801561048d575f80fd5b506104a161049c3660046126b4565b610ad8565b6040805194855260208501939093529183015260608201526080016103f0565b3480156104cc575f80fd5b506104e06104db3660046126e3565b610afa565b6040519081526020016103f0565b3480156104f9575f80fd5b506104e07f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561052c575f80fd5b506104e061053b366004612739565b610b2d565b34801561054b575f80fd5b506103a461055a36600461276b565b610b5d565b6104e061056d36600461278b565b610b8b565b34801561057d575f80fd5b506103a46104323660046127ea565b348015610597575f80fd5b506103a46105a6366004612831565b610bbf565b3480156105b6575f80fd5b506103a46105c536600461276b565b610bcc565b3480156105d5575f80fd5b506104e06105e436600461288c565b610d54565b3480156105f4575f80fd5b506103a46106033660046128b9565b6001600160801b03908116600160801b02911617600255565b348015610627575f80fd5b506103a46106363660046128ea565b610d64565b348015610646575f80fd5b506103df610655366004612921565b610d8d565b6104e0610668366004612553565b610da8565b348015610678575f80fd5b506103a461068736600461288c565b610dda565b348015610697575f80fd5b506103a46106a636600461294a565b610de6565b3480156106b6575f80fd5b506103a46106c536600461297f565b610df1565b3480156106d5575f80fd5b506104e0610f25565b3480156106e9575f80fd5b506103a46106f836600461294a565b5f928352600a602090815260408085206001600160a01b039094168552929052912055565b348015610728575f80fd5b506104a161073736600461276b565b610f33565b348015610747575f80fd5b506103a461075636600461294a565b610f51565b348015610766575f80fd5b506103a461077536600461294a565b610f80565b348015610785575f80fd5b5061046a7f000000000000000000000000000000000000000000000000000000000000000081565b3480156107b8575f80fd5b506103a46107c736600461288c565b600f55565b3480156107d7575f80fd5b506104e06107e636600461288c565b610f8b565b3480156107f6575f80fd5b506103a46108053660046129f9565b600380546001600160801b0319166001600160801b0392909216919091179055565b348015610832575f80fd5b506104e061084136600461288c565b610f95565b6103df6108543660046126e3565b610f9f565b348015610864575f80fd5b50600f546104e0565b348015610878575f80fd5b5061046a7f000000000000000000000000000000000000000000000000000000000000000081565b3480156108ab575f80fd5b506103a46108ba366004612831565b610fd4565b3480156108ca575f80fd5b5061046a7f000000000000000000000000000000000000000000000000000000000000000081565b3480156108fd575f80fd5b5061046a7f000000000000000000000000000000000000000000000000000000000000000081565b348015610930575f80fd5b506103a461093f366004612a39565b805160208201516001600160801b03918216600160801b91831682021760025560408301516060840151908316908316820217600355608083015160a084015190831690831682021760045560c083015160e084015190831690831682021760055561010080840151600680546101208701516101408801516101609098015161ffff1990921693151561ff001916939093179215159093029190911761ffff16620100006001600160701b0390961695909502841694909417921602179055565b348015610a0c575f80fd5b506104e0611005565b610a3e7f0000000000000000000000000000000000000000000000000000000000000000611093565b5050565b5f80610a6d7f0000000000000000000000000000000000000000000000000000000000000000611093565b50935093915050565b610a9f7f0000000000000000000000000000000000000000000000000000000000000000611093565b50505050505050565b610ad17f0000000000000000000000000000000000000000000000000000000000000000611093565b5050505050565b5f805f80610ae8888888886110b1565b929b919a509850909650945050505050565b5f610b247f0000000000000000000000000000000000000000000000000000000000000000611093565b50949350505050565b5f610b577f0000000000000000000000000000000000000000000000000000000000000000611093565b50919050565b610b867f0000000000000000000000000000000000000000000000000000000000000000611093565b505050565b5f610bb57f0000000000000000000000000000000000000000000000000000000000000000611093565b5095945050505050565b610ad185858585856111c3565b6040516370a0823160e01b81523060048201525f90610c5f906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610c34573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c589190612b23565b838561137e565b9150505f811315610ce2576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f19906044015b5f604051808303815f87803b158015610cd0575f80fd5b505af1158015610a9f573d5f803e3d5ffd5b5f811215610b86576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac30610d2384612b4e565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401610cb9565b5f610d5e82611418565b92915050565b610b867f0000000000000000000000000000000000000000000000000000000000000000611093565b5f80610d9a85858561146e565b90925090505b935093915050565b5f610dd27f0000000000000000000000000000000000000000000000000000000000000000611093565b509392505050565b610de3816114ed565b50565b610b86838383611513565b5f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610e25611005565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b17905251610ece9190612b68565b5f60405180830381855af49150503d805f8114610f06576040519150601f19603f3d011682016040523d82523d5f602084013e610f0b565b606091505b509150915081610f1d57805160208201fd5b805160208201f35b5f610f2e6115b9565b905090565b5f805f80610f4186866115e4565b9299919850965090945092505050565b610f7a7f0000000000000000000000000000000000000000000000000000000000000000611093565b50505050565b610b868383836117c3565b5f610d5e82611891565b5f610d5e8261192c565b5f80610fca7f0000000000000000000000000000000000000000000000000000000000000000611093565b5094509492505050565b610ffd7f0000000000000000000000000000000000000000000000000000000000000000611093565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b60605f80836001600160a01b03165f36604051610ece929190612399565b5f80808061110787866111008b6110fa6110d38c670de0b6b3a7640000612b83565b7f0000000000000000000000000000000000000000000000000000000000000000906119a0565b906119a0565b91906119b0565b9350611133847f00000000000000000000000000000000000000000000000000000000000000006119d3565b91505f61115361114b89670de0b6b3a7640000612b83565b8a90886119b0565b905061117f817f00000000000000000000000000000000000000000000000000000000000000006119a0565b93506111ab847f00000000000000000000000000000000000000000000000000000000000000006119d3565b6111b59084612b96565b915050945094509450949050565b6001600160a01b03841615806111e057506001600160a01b038316155b156111fe5760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146112be576001600160a01b038085165f908152600c602090815260408083209385168352929052205460ff166112be575f858152600d602090815260408083206001600160a01b03808916855290835281842090851684529091529020545f1981146112bc575f868152600d602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906112b6908490612b83565b90915550505b505b5f858152600a602090815260408083206001600160a01b0388168452909152812080548492906112ef908490612b83565b90915550505f858152600a602090815260408083206001600160a01b038716845290915281208054849290611325908490612b96565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b5f808061138f846301e133806119e7565b90505f6113b2825f88126113a357876113ac565b6113ac88612b4e565b906119d3565b90505f8613156113e4576113cf6113c8826119fb565b88906119d3565b93506113db8785612b83565b92505050610da0565b5f86121561140b576113ff6113f8826119fb565b88906119e7565b93506113db8785612ba9565b5094955f95509350505050565b5f806114226115b9565b9050808311611431575f61143b565b61143b8184612b83565b9150611467827f00000000000000000000000000000000000000000000000000000000000000006119e7565b9392505050565b5f806114b7856110fa85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006114ad818c611b97565b6110fa9190612b83565b91506114e3827f00000000000000000000000000000000000000000000000000000000000000006119d3565b9050935093915050565b6114f681611bab565b610de357604051635044b7f560e01b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290611544908490612b96565b90915550505f838152600b602052604081208054839290611566908490612b96565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b5f610f2e427f0000000000000000000000000000000000000000000000000000000000000000611d3f565b5f805f805f6115f1611d54565b600254909150611656908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000611d74565b6002549094506116b9908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d9f565b9150611710878561170b857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611dbe565b611e30565b1561171d5761171d611e71565b61172987858885611e8a565b91965094509250670de0b6b3a76400006117ab6117468784612b96565b600254611764908890600160801b90046001600160801b0316612b83565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611d9f565b11156117b9576117b9611e71565b5092959194509250565b5f838152600a602090815260408083206001600160a01b038616845290915290205481111561180557604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290611847908490612b83565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291016115ac565b6003545f9081906118ab906001600160801b031684611b97565b90506118d77f000000000000000000000000000000000000000000000000000000000000000082612b96565b6002546001600160801b03161115610b57576002547f0000000000000000000000000000000000000000000000000000000000000000906119229083906001600160801b0316612b83565b6114679190612b83565b5f80670de0b6b3a764000061193f6115b9565b6119499190612bc8565b9050808311611958575f611962565b6119628184612b83565b9150611467611999670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612bc8565b83906119e7565b5f6114678383670de0b6b3a76400005b5f825f1904841183021582026119c4575f80fd5b50910281810615159190040190565b5f6114678383670de0b6b3a7640000611ed2565b5f61146783670de0b6b3a764000084611ed2565b5f680248ce36a70cb26b3e198213611a1457505f919050565b680755bf798b4a1bf1e58212611a3d576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190611b8d74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611eed565b9695505050505050565b5f61146783670de0b6b3a7640000846119b0565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611c61573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611c859190612bf3565b935093509350935080611ca057505f98975050505050505050565b868414611cd157611cb084611f1a565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611d0257611ce183611f43565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611d3057611d1282611f1a565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b5f611d4a8284612c26565b6114679084612b83565b6002546004545f91610f2e916001600160801b0390911690600f0b611f90565b5f611d94878787611d8d88670de0b6b3a7640000612b83565b8787611fb5565b979650505050505050565b5f611db582611daf858888611ed2565b90611fe2565b95945050505050565b5f611e28611dfe611dd784670de0b6b3a7640000612b83565b6110fa670de0b6b3a7640000611ded818a611b97565b611df79190612b83565b87906119a0565b611e1090670de0b6b3a7640000612b96565b611e2284670de0b6b3a7640000612b83565b906119e7565b949350505050565b5f80611e6685611e3e611d54565b611e489190612b96565b600254611764908790600160801b90046001600160801b0316612b83565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f805f805f611e9a89878961146e565b9092509050611ea98289612b83565b97505f611eb782888a611ed2565b9050611ec3818b612b83565b9a989950979650505050505050565b5f825f190484118302158202611ee6575f80fd5b5091020490565b5f6001600160ff1b03821115611f165760405163396ea70160e11b815260040160405180910390fd5b5090565b5f6001600160801b03821115611f1657604051630f0af95160e11b815260040160405180910390fd5b5f6f7fffffffffffffffffffffffffffffff19821280611f7257506f7fffffffffffffffffffffffffffffff82135b15611f165760405163a5353be560e01b815260040160405180910390fd5b5f80611f9c8484612047565b909250905080611fae57611fae611e71565b5092915050565b5f80611fc5888888888888612082565b909250905080611fd757611fd7611e71565b509695505050505050565b5f815f03611ff95750670de0b6b3a7640000610d5e565b825f0361200757505f610d5e565b5f61201183611eed565b90505f61202561202086611eed565b612146565b905081810261203c670de0b6b3a764000082612c39565b9050611b8d816119fb565b5f805f8361205486611eed565b61205e9190612ba9565b90505f811215612074575f80925092505061207b565b9150600190505b9250929050565b5f805f612092898988888861236b565b90506120ac86611daf6120a58a8d612b96565b87906119d3565b98506120b9858a86611ed2565b9850888110156120cf575f80925092505061213b565b888103670de0b6b3a76400008110612104576120fd6120f6670de0b6b3a764000089611b97565b8290611fe2565b905061211c565b6121196120f6670de0b6b3a7640000896119e7565b90505b80891015612131575f8093509350505061213b565b8803925060019150505b965096945050505050565b5f8082136121675760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906121ea9084901c611eed565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f6123768585611fe2565b61238f61238786611daf868b6119a0565b8590856119b0565b611b8d9190612b96565b818382375f9101908152919050565b805160208201516001600160e01b031980821692919060048310156123d75780818460040360031b1b83161693505b505050919050565b634e487b7160e01b5f52604160045260245ffd5b604051610180810167ffffffffffffffff81118282101715612417576124176123df565b60405290565b5f5b8381101561243757818101518382015260200161241f565b50505f910152565b5f6020828403121561244f575f80fd5b815167ffffffffffffffff80821115612466575f80fd5b818401915084601f830112612479575f80fd5b81518181111561248b5761248b6123df565b604051601f8201601f19908116603f011681019083821181831017156124b3576124b36123df565b816040528281528760208487010111156124cb575f80fd5b611d9483602083016020880161241d565b6001600160a01b0381168114610de3575f80fd5b5f60208284031215612500575f80fd5b8135611467816124dc565b8015158114610de3575f80fd5b80356125238161250b565b919050565b5f60208284031215612538575f80fd5b81356114678161250b565b5f60608284031215610b57575f80fd5b5f805f60608486031215612565575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115612589575f80fd5b61259586828701612543565b9150509250925092565b5f8083601f8401126125af575f80fd5b50813567ffffffffffffffff8111156125c6575f80fd5b6020830191508360208260051b850101111561207b575f80fd5b5f805f805f80608087890312156125f5575f80fd5b8635612600816124dc565b95506020870135612610816124dc565b9450604087013567ffffffffffffffff8082111561262c575f80fd5b6126388a838b0161259f565b90965094506060890135915080821115612650575f80fd5b5061265d89828a0161259f565b979a9699509497509295939492505050565b5f805f8060808587031215612682575f80fd5b843593506020850135612694816124dc565b925060408501356126a4816124dc565b9396929550929360600135925050565b5f805f80608085870312156126c7575f80fd5b5050823594602084013594506040840135936060013592509050565b5f805f80608085870312156126f6575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115612721575f80fd5b61272d87828801612543565b91505092959194509250565b5f60208284031215612749575f80fd5b813567ffffffffffffffff81111561275f575f80fd5b611e2884828501612543565b5f806040838503121561277c575f80fd5b50508035926020909101359150565b5f805f805f60a0868803121561279f575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156127d1575f80fd5b6127dd88828901612543565b9150509295509295909350565b5f805f80608085870312156127fd575f80fd5b84359350602085013561280f816124dc565b9250604085013591506060850135612826816124dc565b939692955090935050565b5f805f805f60a08688031215612845575f80fd5b853594506020860135612857816124dc565b93506040860135612867816124dc565b925060608601359150608086013561287e816124dc565b809150509295509295909350565b5f6020828403121561289c575f80fd5b5035919050565b80356001600160801b0381168114612523575f80fd5b5f80604083850312156128ca575f80fd5b6128d3836128a3565b91506128e1602084016128a3565b90509250929050565b5f80604083850312156128fb575f80fd5b8235612906816124dc565b915060208301356129168161250b565b809150509250929050565b5f805f60608486031215612933575f80fd5b505081359360208301359350604090920135919050565b5f805f6060848603121561295c575f80fd5b83359250602084013561296e816124dc565b929592945050506040919091013590565b5f805f805f805f60e0888a031215612995575f80fd5b87356129a0816124dc565b965060208801356129b0816124dc565b955060408801356129c08161250b565b945060608801359350608088013560ff811681146129dc575f80fd5b9699959850939692959460a0840135945060c09093013592915050565b5f60208284031215612a09575f80fd5b611467826128a3565b8035600f81900b8114612523575f80fd5b80356001600160701b0381168114612523575f80fd5b5f6101808284031215612a4a575f80fd5b612a526123f3565b612a5b836128a3565b8152612a69602084016128a3565b6020820152612a7a604084016128a3565b6040820152612a8b606084016128a3565b6060820152612a9c60808401612a12565b6080820152612aad60a084016128a3565b60a0820152612abe60c084016128a3565b60c0820152612acf60e084016128a3565b60e0820152610100612ae2818501612518565b90820152610120612af4848201612518565b90820152610140612b06848201612a23565b90820152610160612b188482016128a3565b908201529392505050565b5f60208284031215612b33575f80fd5b5051919050565b634e487b7160e01b5f52601160045260245ffd5b5f600160ff1b8201612b6257612b62612b3a565b505f0390565b5f8251612b7981846020870161241d565b9190910192915050565b81810381811115610d5e57610d5e612b3a565b80820180821115610d5e57610d5e612b3a565b8181035f831280158383131683831282161715611fae57611fae612b3a565b8082028115828204841417610d5e57610d5e612b3a565b634e487b7160e01b5f52601260045260245ffd5b5f805f8060808587031215612c06575f80fd5b84519350602085015192506040850151915060608501516128268161250b565b5f82612c3457612c34612bdf565b500690565b5f82612c4757612c47612bdf565b600160ff1b82145f1984141615612c6057612c60612b3a565b50059056fea26469706673582212200c2ceb5350630b57ee6744a11efdf3865d3d67a62c0e0390d4cd7f3e3594547264736f6c6343000816003361028060405234801562000011575f80fd5b50604051620040d7380380620040d78339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613c73620004645f395f8181610d7b015261233401525f8181610d4c01526122f701525f8181610c2801528181610eab01528181610f3901528181610fc70152818161105501528181611645015281816116db0152818161189d01528181611ebe01528181611f9201526120e301525f610e1301525f8181610ded01526124d901525f8181610dc701526124b301525f8181610da1015261248d01525f61116001525f61113a01525f61111401525f6110ee01525f8181610e8501526124ff01525f8181610e39015281816112d20152612a0201525f8181610e5f0152612e2601525f81816106110152610d1d01525f818161073b01528181610cee0152818161128801528181611e36015281816125c001528181612609015281816126b6015281816126ff01528181612b5c01528181612c0501528181612ceb0152612d940152613c735ff3fe608060405234801561000f575f80fd5b5060043610610233575f3560e01c806360246c8811610135578063bd85b039116100b4578063cf210e6511610079578063cf210e65146104e7578063d8165743146104fa578063e44808bc1461050f578063e985e9c514610522578063fba5600814610535575f80fd5b8063bd85b03914610499578063becee9c3146104ac578063c55dae63146104cc578063c69e16ad1461042a578063c6e6f592146104d4575f80fd5b80639cd241af116100fa5780639cd241af1461043a578063a22cb4651461044d578063ab033ea914610460578063b0d9658014610471578063b88fed9f14610486575f80fd5b806360246c88146103f05780637180c8ca146104055780637ecebe00146104175780638e67f87e1461042a578063950c5d0314610432575f80fd5b806320fc4881116101c15780633e691db9116101865780633e691db91461038c57806346fbf68e1461039f5780634e41a1fb146103c25780634ed2d6ac146103d557806354fd4d50146103e8575f80fd5b806320fc4881146102f157806321ff32a914610336578063313ce567146103575780633656eec2146103715780633a98ef3914610384575f80fd5b806306fdde031161020757806306fdde03146102905780630a4e14931461029857806314e5f07b146102b857806317fad7fc146102cb5780631c0f12b6146102de575f80fd5b8062ad800c1461023757806301681a621461026057806302329a291461027557806304baa00b14610288575b5f80fd5b61024a61024536600461305e565b610564565b60405161025791906130c2565b60405180910390f35b61027361026e3660046130e8565b61059b565b005b610273610283366004613110565b6105a4565b61024a6105ad565b61024a6105ec565b6102a0610603565b6040516001600160a01b039091168152602001610257565b6102736102c6366004613139565b610642565b6102736102d936600461320a565b61065e565b6102736102ec366004613299565b610674565b6103046102ff36600461305e565b610687565b6040805182516001600160801b0390811682526020808501518216908301529282015190921690820152606001610257565b6103496103443660046132de565b6106f0565b604051908152602001610257565b61035f610735565b60405160ff9091168152602001610257565b61034961037f36600461331d565b6107cd565b610349610805565b61034961039a36600461334b565b610823565b6103b26103ad3660046130e8565b61082d565b6040519015158152602001610257565b61024a6103d036600461305e565b61084c565b6102736103e3366004613382565b61085a565b61024a6108a8565b6103f86108dd565b60405161025791906133c9565b61027361041336600461346a565b5050565b6103496104253660046130e8565b610bd6565b610349610c01565b6102a0610c1a565b610273610448366004613496565b610c59565b61027361045b36600461346a565b610c6a565b61027361046e3660046130e8565b50565b610479610cd5565b60405161025791906134cb565b61034961049436600461305e565b611195565b6103496104a736600461305e565b6111a2565b6104bf6104ba3660046135f1565b6111c3565b6040516102579190613630565b6102a061127a565b6103496104e236600461305e565b6112b9565b6103496104f536600461305e565b6112c6565b6105026112fc565b6040516102579190613673565b61027361051d366004613784565b611407565b6103b26105303660046137df565b61144f565b61053d611492565b6040805182516001600160801b039081168252602093840151169281019290925201610257565b6060610596610572836114f0565b60405160200161058291906130c2565b604051602081830303815290604052611616565b919050565b61046e8161163a565b61046e8161189b565b60606105e96040518060400160405280600e81526020016d4d6f636b4879706572647269766560901b81525060405160200161058291906130c2565b90565b60606105e96001604051602001610582919061380b565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105e99101610582565b6106538989898989898989896119b3565b505050505050505050565b61066c868686868686611ba5565b505050505050565b6106818484848433611c58565b50505050565b604080516060810182525f808252602082018190529181019190915261059660085f8481526020019081526020015f20604051602001610582919081546001600160801b03808216835260809190911c6020830152600190920154909116604082015260600190565b5f838152600d602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261072e9101610582565b9392505050565b5f6105e97f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610795573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107b991906138b8565b6040805160ff909216602083015201610582565b5f828152600a602090815260408083206001600160a01b03851684528252808320548151928301526107ff9101610582565b92915050565b5f6105e9610811611e13565b60405160200161058291815260200190565b5f6107ff82611ea9565b5f61059661083a836120df565b60408051911515602083015201610582565b6060610596610572836121bd565b83610864816122b9565b6001600160a01b0316336001600160a01b03161461089557604051632aab8bd360e01b815260040160405180910390fd5b6108a185858585612376565b5050505050565b60606105e960405180604001604052806007815260200166076312e302e32360cc1b81525060405160200161058291906130c2565b610947604051806101e001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f6109506123e2565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654939450926001600160801b03909216916109ba91906138fb565b6109c4919061390e565b90505f8215610ad35773__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6109f0856123f4565b6040805160e084811b6001600160e01b03191682528351600483015260208401516024830152918301516044820152606083015160648201526080830151608482015260a083015160a482015260c083015160c48201529082015160e482015261010082015161010482015261012082015161012482015261014082015161014482015261016090910151610164820152610184016040805180830381865af4158015610a9f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ac39190613921565b509050610ad0818461257e565b90505b604080516101e0810182526002546001600160801b038082168352600454600f81900b60208501526006546001600160701b036201000082041695850195909552600160801b9485900482166060850152918490048116608084015260a0830186905260c08301879052600354849004811660e0840152600554808216610100850152918490048116610120840152908390048116610140830152600754808216610160840152929092049091166101808201525f906101a081018415610ba357610b9e8486612592565b610ba5565b5f5b81526003546001600160801b0316602091820152604051919250610bcf91610582918491016133c9565b5050505090565b6001600160a01b0381165f908152600e60209081526040808320548151928301526105969101610582565b5f6105e960095460405160200161058291815260200190565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105e99101610582565b610c6583838333612376565b505050565b335f818152600c602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610cdd612f8a565b6105e96040518061020001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f05573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f29919061394f565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f93573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fb7919061394f565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa158015611021573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611045919061394f565b6001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110af573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110d3919061394f565b6001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081525081525060405160200161058291906134cb565b5f610596610811836125a6565b5f818152600b60209081526040808320548151928301526105969101610582565b60605f8267ffffffffffffffff8111156111df576111df61396a565b604051908082528060200260200182016040528015611208578160200160208202803683370190505b5090505f5b8381101561125e575f8585838181106112285761122861397e565b9050602002013590505f81549050808484815181106112495761124961397e565b6020908102919091010152505060010161120d565b50611273816040516020016105829190613630565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201525f916105e99101610582565b5f6105966108118361269c565b5f6105966108116112f77f0000000000000000000000000000000000000000000000000000000000000000856138fb565b612782565b60408051610180810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081018290526101608101919091526105e96002604051602001610582919081546001600160801b038082168352608091821c602084015260018401548082166040850152821c60608401526002840154600f81900b83850152821c60a0840152600384015490811660c0840152811c60e083015260049092015460ff8082161515610100840152600882901c1615156101208301526001600160701b03601082901c1661014083015290911c6101608201526101800190565b84611411816122b9565b6001600160a01b0316336001600160a01b03161461144257604051632aab8bd360e01b815260040160405180910390fd5b61066c8686868686611c58565b6001600160a01b038281165f908152600c60209081526040808320938516835292815282822054835160ff90911615159181019190915290916107ff9101610582565b604080518082019091525f80825260208201526040805180820182526007546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526105e990606001610582565b606060f882901c6001600160f81b0383165f61150b826127c2565b90505f836003811115611520576115206138d3565b03611552576040518060400160405280600d81526020016c048797065726472697665204c5609c1b815250935061160e565b6001836003811115611566576115666138d3565b03611592578060405160200161157c9190613992565b604051602081830303815290604052935061160e565b60028360038111156115a6576115a66138d3565b036115bc578060405160200161157c91906139ca565b60038360038111156115d0576115d06138d3565b0361160e576040518060400160405280601b81526020017f48797065726472697665205769746864726177616c205368617265000000000081525093505b505050919050565b80604051636e64089360e11b815260040161163191906130c2565b60405180910390fd5b611642612874565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310780f736040518163ffffffff1660e01b8152600401602060405180830381865afa15801561169f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116c3919061394f565b9050336001600160a01b0382161480159061176f57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611735573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611759919061394f565b6001600160a01b0316336001600160a01b031614155b8015611781575061177f336120df565b155b1561179e576040516282b42960e81b815260040160405180910390fd5b5f6117a7611e13565b6040516370a0823160e01b81523060048201529091505f906001600160a01b038516906370a0823190602401602060405180830381865afa1580156117ee573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118129190613a03565b90506118286001600160a01b038516848361289c565b81611831611e13565b1461184f576040516313dd85ff60e31b815260040160405180910390fd5b836001600160a01b0316836001600160a01b03167f951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e09660405160405180910390a350505061046e60015f55565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156118f7573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061191b919061394f565b6001600160a01b0316336001600160a01b0316141580156119425750611940336120df565b155b1561195f576040516282b42960e81b815260040160405180910390fd5b600680548215156101000261ff00199091161790556040517f7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5906119a890831515815260200190565b60405180910390a150565b834211156119d45760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166119fb5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781165f818152600e602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f1981840301815282825280516020918201205f80855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611ae5573d5f803e3d5ffd5b505050602060405103519050886001600160a01b0316816001600160a01b031614611b2357604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038981165f818152600e6020908152604080832080546001019055600c8252808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b0386161580611bc257506001600160a01b038516155b15611be05760405163f0dd15fd60e01b815260040160405180910390fd5b828114611c005760405163174861a760e31b815260040160405180910390fd5b5f5b83811015611c4f57611c47858583818110611c1f57611c1f61397e565b905060200201358888868686818110611c3a57611c3a61397e565b9050602002013533611c58565b600101611c02565b50505050505050565b6001600160a01b0384161580611c7557506001600160a01b038316155b15611c935760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611d53576001600160a01b038085165f908152600c602090815260408083209385168352929052205460ff16611d53575f858152600d602090815260408083206001600160a01b03808916855290835281842090851684529091529020545f198114611d51575f868152600d602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611d4b90849061390e565b90915550505b505b5f858152600a602090815260408083206001600160a01b038816845290915281208054849290611d8490849061390e565b90915550505f858152600a602090815260408083206001600160a01b038716845290915281208054849290611dba9084906138fb565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6040516370a0823160e01b81523060048201525f90611ea4906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611e7b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e9f9190613a03565b61269c565b905090565b5f611eb2612874565b611ebb826128ee565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611f18573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f3c919061394f565b90506001600160a01b038116611f5560208501856130e8565b6001600160a01b031614611f7c57604051630ad13b3360e21b815260040160405180910390fd5b336001600160a01b0382161480159061202657507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e33315556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611fec573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612010919061394f565b6001600160a01b0316336001600160a01b031614155b80156120385750612036336120df565b155b15612055576040516282b42960e81b815260040160405180910390fd5b5f61205e6123e2565b600980545f909155909150612074818387612923565b93506001600160a01b0383167f3e5eb8642141e29a1b4e5c28b467396f814c1698e1adfc3ff327ddb9a603836185846120b360408a0160208b01613110565b60408051938452602084019290925215159082015260600160405180910390a250505061059660015f55565b5f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a64c90bf6040518163ffffffff1660e01b81526004015f60405180830381865afa15801561213c573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526121639190810190613a1a565b90505f5b81518110156121b457836001600160a01b031682828151811061218c5761218c61397e565b60200260200101516001600160a01b0316036121ac575060019392505050565b600101612167565b505f9392505050565b606060f882901c6001600160f81b0383165f6121d8826127c2565b90505f8360038111156121ed576121ed6138d3565b0361221f576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b815250935061160e565b6001836003811115612233576122336138d3565b03612249578060405160200161157c9190613ada565b600283600381111561225d5761225d6138d3565b03612273578060405160200161157c9190613b11565b6003836003811115612287576122876138d3565b0361160e57505060408051808201909152600d81526c485950455244524956452d575360981b60208201529392505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b5f848152600d602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b5f611ea4670de0b6b3a76400006125a6565b61244c6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161254491166129b9565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612576929004166129b9565b905292915050565b5f61072e8383670de0b6b3a7640000612a2d565b5f61072e83670de0b6b3a764000084612a2d565b5f8073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016125f457504761267d565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612656573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061267a9190613a03565b90505b600f545f0361268c575f61072e565b600f5461072e9084908390612a2d565b5f8073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016126ea575047612773565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561274c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906127709190613a03565b90505b600f5461072e90849083612a2d565b5f6127a7600b5f612794600286612a48565b81526020019081526020015f2054612a7c565b6127b8600b5f612794600187612a48565b6107ff9190613b3c565b60408051604e80825260808201909252606091905f90826020820181803683370190505090505f5b8415612866576127fb600a86613b6f565b6128069060306138fb565b60f81b826001612816848761390e565b612820919061390e565b815181106128305761283061397e565b60200101906001600160f81b03191690815f1a9053508061285081613b82565b915061285f9050600a86613b9a565b94506127ea565b918290030190815292915050565b60025f540361289657604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c65908490612aa9565b5f6128fc60208301836130e8565b6001600160a01b03160361046e5760405163f0dd15fd60e01b815260040160405180910390fd5b5f8061292f858561257e565b905061293a8161269c565b9450845f0361294c575f91505061072e565b84915061295f6040840160208501613110565b1561298e576129878561297560208601866130e8565b6129826040870187613bad565b612b0a565b91506129b1565b6129b18561299f60208601866130e8565b6129ac6040870187613bad565b612c9a565b509392505050565b5f80670de0b6b3a76400006129cc612e1f565b6129d69190613bf0565b90508083116129e5575f6129ef565b6129ef818461390e565b915061072e612a26670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613bf0565b8390612592565b5f825f190484118302158202612a41575f80fd5b5091020490565b5f6001600160f81b03821115612a715760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f6001600160ff1b03821115612aa55760405163396ea70160e11b815260040160405180910390fd5b5090565b5f612abd6001600160a01b03841683612e4a565b905080515f14158015612ae1575080806020019051810190612adf9190613c07565b155b15610c6557604051635274afe760e01b81526001600160a01b0384166004820152602401611631565b5f600f548511612b1a5784612b1e565b600f545b94505f612b2a866125a6565b905085600f5f828254612b3d919061390e565b909155505f905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612bdf576040516001600160a01b0387169083905f81818185875af1925050503d805f8114612bcf576040519150601f19603f3d011682016040523d82523d5f602084013e612bd4565b606091505b505080915050612c72565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303815f875af1158015612c4b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612c6f9190613c07565b90505b80612c90576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b600f548411612ca95783612cad565b600f545b93505f612cb9856125a6565b905084600f5f828254612ccc919061390e565b909155505f905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612d6e576040516001600160a01b0386169083905f81818185875af1925050503d805f8114612d5e576040519150601f19603f3d011682016040523d82523d5f602084013e612d63565b606091505b505080915050612e01565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303815f875af1158015612dda573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612dfe9190613c07565b90505b8061066c576040516312171d8360e31b815260040160405180910390fd5b5f611ea4427f0000000000000000000000000000000000000000000000000000000000000000612e57565b606061072e83835f612e6c565b5f612e628284613b6f565b61072e908461390e565b606081471015612e915760405163cd78605960e01b8152306004820152602401611631565b5f80856001600160a01b03168486604051612eac9190613c22565b5f6040518083038185875af1925050503d805f8114612ee6576040519150601f19603f3d011682016040523d82523d5f602084013e612eeb565b606091505b5091509150612efb868383612f05565b9695505050505050565b606082612f1a57612f1582612f61565b61072e565b8151158015612f3157506001600160a01b0384163b155b15612f5a57604051639996b31560e01b81526001600160a01b0385166004820152602401611631565b508061072e565b805115612f715780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061020001604052805f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f80191681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b031681526020015f6001600160a01b0316815260200161305960405180608001604052805f81526020015f81526020015f81526020015f81525090565b905290565b5f6020828403121561306e575f80fd5b5035919050565b5f5b8381101561308f578181015183820152602001613077565b50505f910152565b5f81518084526130ae816020860160208601613075565b601f01601f19169290920160200192915050565b602081525f61072e6020830184613097565b6001600160a01b038116811461046e575f80fd5b5f602082840312156130f8575f80fd5b813561072e816130d4565b801515811461046e575f80fd5b5f60208284031215613120575f80fd5b813561072e81613103565b60ff8116811461046e575f80fd5b5f805f805f805f805f6101208a8c031215613152575f80fd5b8935985060208a0135975060408a013561316b816130d4565b965060608a013561317b816130d4565b955060808a013561318b81613103565b945060a08a0135935060c08a01356131a28161312b565b8093505060e08a013591506101008a013590509295985092959850929598565b5f8083601f8401126131d2575f80fd5b50813567ffffffffffffffff8111156131e9575f80fd5b6020830191508360208260051b8501011115613203575f80fd5b9250929050565b5f805f805f806080878903121561321f575f80fd5b863561322a816130d4565b9550602087013561323a816130d4565b9450604087013567ffffffffffffffff80821115613256575f80fd5b6132628a838b016131c2565b9096509450606089013591508082111561327a575f80fd5b5061328789828a016131c2565b979a9699509497509295939492505050565b5f805f80608085870312156132ac575f80fd5b8435935060208501356132be816130d4565b925060408501356132ce816130d4565b9396929550929360600135925050565b5f805f606084860312156132f0575f80fd5b833592506020840135613302816130d4565b91506040840135613312816130d4565b809150509250925092565b5f806040838503121561332e575f80fd5b823591506020830135613340816130d4565b809150509250929050565b5f6020828403121561335b575f80fd5b813567ffffffffffffffff811115613371575f80fd5b82016060818503121561072e575f80fd5b5f805f8060808587031215613395575f80fd5b8435935060208501356133a7816130d4565b92506040850135915060608501356133be816130d4565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a080830151908201526101c091820151918101919091526101e00190565b5f806040838503121561347b575f80fd5b8235613486816130d4565b9150602083013561334081613103565b5f805f606084860312156134a8575f80fd5b8335925060208401356134ba816130d4565b929592945050506040919091013590565b81516001600160a01b03168152610260810160208301516134f760208401826001600160a01b03169052565b50604083015161351260408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151613584828501826001600160a01b03169052565b5050610180838101516001600160a01b03908116918401919091526101a0808501518216908401526101c080850151909116908301526101e0808401518051828501526020810151610200850152604081015161022085015260608101516102408501525b505092915050565b5f8060208385031215613602575f80fd5b823567ffffffffffffffff811115613618575f80fd5b613624858286016131c2565b90969095509350505050565b602080825282518282018190525f9190848201906040850190845b818110156136675783518352928401929184019160010161364b565b50909695505050505050565b81516001600160801b031681526101808101602083015161369f60208401826001600160801b03169052565b5060408301516136ba60408401826001600160801b03169052565b5060608301516136d560608401826001600160801b03169052565b5060808301516136ea6080840182600f0b9052565b5060a083015161370560a08401826001600160801b03169052565b5060c083015161372060c08401826001600160801b03169052565b5060e083015161373b60e08401826001600160801b03169052565b506101008381015115159083015261012080840151151590830152610140808401516001600160701b031690830152610160808401516001600160801b038116828501526135e9565b5f805f805f60a08688031215613798575f80fd5b8535945060208601356137aa816130d4565b935060408601356137ba816130d4565b92506060860135915060808601356137d1816130d4565b809150509295509295909350565b5f80604083850312156137f0575f80fd5b82356137fb816130d4565b91506020830135613340816130d4565b5f60208083525f84545f60018260011c9150600183168061382d57607f831692505b60208310810361384b57634e487b7160e01b5f52602260045260245ffd5b602088018390526040880181801561386a5760018114613880576138a9565b60ff198616825284151560051b820196506138a9565b5f8b8152602090205f5b868110156138a35781548482015290850190890161388a565b83019750505b50949998505050505050505050565b5f602082840312156138c8575f80fd5b815161072e8161312b565b634e487b7160e01b5f52602160045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b808201808211156107ff576107ff6138e7565b818103818111156107ff576107ff6138e7565b5f8060408385031215613932575f80fd5b82519150602083015161334081613103565b8051610596816130d4565b5f6020828403121561395f575f80fd5b815161072e816130d4565b634e487b7160e01b5f52604160045260245ffd5b634e487b7160e01b5f52603260045260245ffd5b700243cb832b9323934bb32902637b7339d1607d1b81525f82516139bd816011850160208701613075565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b81525f82516139f6816012850160208701613075565b9190910160120192915050565b5f60208284031215613a13575f80fd5b5051919050565b5f6020808385031215613a2b575f80fd5b825167ffffffffffffffff80821115613a42575f80fd5b818501915085601f830112613a55575f80fd5b815181811115613a6757613a6761396a565b8060051b604051601f19603f83011681018181108582111715613a8c57613a8c61396a565b604052918252848201925083810185019188831115613aa9575f80fd5b938501935b82851015613ace57613abf85613944565b84529385019392850192613aae565b98975050505050505050565b6f242ca822a9222924ab2296a627a7239d60811b81525f8251613b04816010850160208701613075565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81525f82516139bd816011850160208701613075565b8181035f831280158383131683831282161715611273576112736138e7565b634e487b7160e01b5f52601260045260245ffd5b5f82613b7d57613b7d613b5b565b500690565b5f60018201613b9357613b936138e7565b5060010190565b5f82613ba857613ba8613b5b565b500490565b5f808335601e19843603018112613bc2575f80fd5b83018035915067ffffffffffffffff821115613bdc575f80fd5b602001915036819003821315613203575f80fd5b80820281158282048414176107ff576107ff6138e7565b5f60208284031215613c17575f80fd5b815161072e81613103565b5f8251613c33818460208701613075565b919091019291505056fea264697066735822122021b09f56eae2e6401e682ea513847aab1fe9991d765a55efc881bef2565b0f3b64736f6c6343000816003361028060405234801562000011575f80fd5b5060405162004103380380620041038339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613c666200049d5f395f50505f50505f610b2e01525f50505f818160a9015281816103140152612f3c01525f818161139301528181611791015281816117f401528181612b2501528181612b6101528181612d590152612f1601525f81816106ec01528181610da501528181610dec01528181610fab015281816115fa015281816116470152612ef001525f611ba501525f8181611cc601528181612307015261237f01525f81816108a901528181610f4301528181611c9a015261235301525f8181610e3e01526122cd01525f818161070d01528181610d8301528181610e0d01528181610fcc015281816115d8015281816116680152612f6201525f81816107e701528181610ec4015281816116ef015281816121a6015261348601525f81816105b2015281816106290152818161069d0152818161076801526107a001525f50505f8181611984015281816119cd015281816125e30152818161262c01528181612701015281816127aa0152818161289001526129390152613c665ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c806329b23fc114610038578063ded062311461005d575b5f80fd5b61004b610046366004613716565b610070565b60405190815260200160405180910390f35b61004b61006b366004613716565b610088565b5f61007d85858585610095565b90505b949350505050565b5f61007d85858585610300565b5f61009e610534565b6100a78261055c565b7f00000000000000000000000000000000000000000000000000000000000000008410156100e85760405163211ddda360e11b815260040160405180910390fd5b5f6100f1610594565b905085421015610116576101106101066105ab565b82600460016105d6565b50610126565b6101248682600460016105d6565b505b61013b610134600288610c39565b3387610c6d565b5f805f805f8061014c8b888e610d43565b9550955095509550955095505f8c90508c421015610208578260095f8282546101759190613784565b9091555061018d90506101866105ab565b428461102b565b61019a8c88878785611164565b5f6101a48e6112db565b90506101c26101b28e611321565b6101bc9083613797565b8261134e565b6101cb8961138d565b6101d7576101d76113ec565b5f6101e18a611405565b90508061020157604051638bdf918d60e01b815260040160405180910390fd5b505061021f565b6102128689611411565b955061021d88611405565b505b5f61022b878a8d6114ed565b90508b81101561024e5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61025e600288610c39565b61026b60208301836137ca565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102a96040890160208a016137f2565b6102bd8a6102b78d8f613784565b90611584565b8d6102cb60408c018c61380d565b6040516102df989796959493929190613878565b60405180910390a450939c5050505050505050505050505061008060015f55565b5f610309610534565b6103128261055c565b7f00000000000000000000000000000000000000000000000000000000000000008410156103535760405163211ddda360e11b815260040160405180910390fd5b5f61035c610594565b905085421015610377576103716101066105ab565b50610387565b6103858682600460016105d6565b505b610395610134600188610c39565b5f805f805f806103a68b888e611598565b9550955095509550955095505f8c90508c421015610455578260095f8282546103cf9190613784565b909155506103e090506101866105ab565b6103ed8c8887878561177a565b5f6103f7826112db565b905061040f6104058e611321565b6101bc90836138bf565b6104188961138d565b610424576104246113ec565b5f61042e8a611405565b90508061044e57604051638bdf918d60e01b815260040160405180910390fd5b505061046c565b61045f8689611411565b955061046a88611405565b505b5f610478878a8d6114ed565b90508b81101561049b5760405163c972651760e01b815260040160405180910390fd5b8c898c6104a9600186610c39565b6104b660208301836137ca565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee52678888876104f46040890160208a016137f2565b8a61050260408b018b61380d565b60405161051597969594939291906138e6565b60405180910390a450919a505050505050505050505061008060015f55565b60025f540361055657604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f61056a60208301836137ca565b6001600160a01b0316036105915760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f6105a6670de0b6b3a764000061196a565b905090565b5f6105a6427f0000000000000000000000000000000000000000000000000000000000000000611a60565b5f84815260086020526040812060018101546001600160801b03161515806105fd57504286115b1561061657600101546001600160801b03169050610080565b5f805f6106216105ab565b90505f61064e7f00000000000000000000000000000000000000000000000000000000000000008b613784565b90505b818110156106c2575f818152600860205260409020600101546001600160801b0316801561069a575f828152600860205260409020549094506001600160801b031692506106c2565b507f000000000000000000000000000000000000000000000000000000000000000001610651565b835f03610734578893506107316106d7611a75565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a95565b92505b5061073e83611aab565b6001850180546001600160801b0319166001600160801b039290921691909117905561079461078d7f00000000000000000000000000000000000000000000000000000000000000008b613926565b8a8461102b565b6107d2896107cc6107c57f000000000000000000000000000000000000000000000000000000000000000083613784565b4290611ad4565b8461102b565b6107db88611ae8565b505f905060088161080c7f00000000000000000000000000000000000000000000000000000000000000008d613926565b815260208101919091526040015f908120600101546001600160801b0316915061083760028c610c39565b5f818152600b60205260408120549192508c8c831561097857600192505f8061086386898d865f611c85565b915091508060095f8282546108789190613784565b909155506108939050865f8461088d81611321565b88611164565b61089d8183613784565b91506108cd86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d52565b91506108e16108dc8385611584565b611d9b565b600680546002906109029084906201000090046001600160701b0316613939565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061092f82611aab565b60068054601090610951908490600160801b90046001600160801b0316613959565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610984600184610c39565b5f818152600b60205260409020549091508015610a8f57600194505f806109af838b8f886001611c85565b915091508060095f8282546109c49190613784565b909155506109df9050835f846109d981611321565b8a61177a565b6109e98183613926565b91506109f86108dc8387611584565b60068054600290610a199084906201000090046001600160701b0316613939565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a4682611aab565b60068054601090610a68908490600160801b90046001600160801b0316613959565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610ac857610aba610aa187611321565b610aaa83611321565b610ab49190613797565b5f61134e565b8e610ac58482611dc4565b50505b5f610ad284611fb3565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b88573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bac9190613979565b90506001600160a01b03811615610c2057610c1d5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906120f5565b50505b509b9d5050505050505050505050505050949350505050565b5f6001600160f81b03821115610c625760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610caf57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610cf1908490613926565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f805f805f805f80610d53611a75565b90505f610d5f8a61217b565b6002549091508c908c90610dc9908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f00000000000000000000000000000000000000000000000000000000000000006121ca565b600254919d509a50909550610e31908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a95565b9550610e67858c610e62897f0000000000000000000000000000000000000000000000000000000000000000612239565b612268565b15610e7457610e746113ec565b5f805f610e8385878b876122a9565b9c5091945092509050610e968184613926565b610ea09089613784565b9750610eac8284613784565b610eb6908d613784565b9b505050505050505f60085f7f00000000000000000000000000000000000000000000000000000000000000008c610eee9190613926565b815260208101919091526040015f908120600101546001600160801b03169150428b11610f34575f8b8152600860205260409020600101546001600160801b0316610f36565b8b5b90508b610f678e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611d52565b9950610f73878a613926565b9850670de0b6b3a7640000610ff0610f8b8787613784565b600254610fa9908f90600160801b90046001600160801b0316613926565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a95565b1115610ffe57610ffe6113ec565b61100d8a8a878a87875f6123bb565b939d50919b5090995090975050505050505093975093979195509350565b5f83815260086020526040902054600160801b90046001600160801b03168083036110565750505050565b5f848152600860205260408120546001600160801b0316908190036110ae5761107e83611aab565b5f86815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561112b565b6110ff6110fa670de0b6b3a76400006110c78886613926565b6110d19190613994565b85670de0b6b3a76400006110e5878a613926565b6110ef9190613994565b859291906001612457565b611aab565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61113484611aab565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111ac6110fa82611190670de0b6b3a764000086613994565b600554600160801b90046001600160801b031691908a5f612457565b600580546001600160801b03928316600160801b0292169190911790556111d286611aab565b6111dc90826139ab565b600480546001600160801b03928316600160801b02921691909117905561120284611aab565b600280545f9061121c9084906001600160801b0316613959565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611249836124fd565b600480545f9061125d908490600f0b6139cb565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061128d85611aab565b600280546010906112af908490600160801b90046001600160801b03166139ab565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f611300600b5f6112ed600286610c39565b81526020019081526020015f2054611321565b611311600b5f6112ed600187610c39565b61131b9190613797565b92915050565b5f6001600160ff1b0382111561134a5760405163396ea70160e11b815260040160405180910390fd5b5090565b600354611369906110fa906001600160801b03168484612538565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f6113b87f00000000000000000000000000000000000000000000000000000000000000008361259a565b6003546113ce91906001600160801b0316613784565b6002546113e4906001600160801b031684611584565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f61131b826004611dc4565b5f805f61141d84611ae8565b90925090505f61142d8686611584565b905081831115611445576114428683856125ae565b95505b8281101561145757808303925061145b565b5f92505b61146483611d9b565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156114b7578690036114ba565b505f5b6114c381611aab565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b5f806114f98585611584565b9050611504816125c9565b9450845f03611516575f91505061157d565b84915061152960408401602085016137f2565b15611558576115518561153f60208601866137ca565b61154c604087018761380d565b6126af565b915061157b565b61157b8561156960208601866137ca565b611576604087018761380d565b61283f565b505b9392505050565b5f61157d8383670de0b6b3a76400006125ae565b5f805f805f805f806115a8611a75565b90505f6115b48a61217b565b6002549091508b908d9061161e908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f00000000000000000000000000000000000000000000000000000000000000006129cc565b600254919d509b509095505f908190819061168c908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a95565b985061169a84878b886122a9565b9c5091945090925090506116ae8284613926565b6116b89089613926565b97506116c48184613784565b6116ce908e613926565b9c506116da8a8e613784565b9b50505050505050506117648686838660085f7f00000000000000000000000000000000000000000000000000000000000000008f6117199190613926565b815260208101919091526040015f20600101546001600160801b0316428e1161175b575f8e8152600860205260409020600101546001600160801b031661175d565b8e5b60016123bb565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b0316838110806117bc57507f00000000000000000000000000000000000000000000000000000000000000006117ba8583613926565b105b156117c9576117c96113ec565b6004549084900390600f0b6117de8482613797565b9050836117ea86611321565b13801561181f57507f000000000000000000000000000000000000000000000000000000000000000061181d8383612a1f565b105b1561182c5761182c6113ec565b600354600160801b90046001600160801b031661186d6110fa82611858670de0b6b3a764000088613994565b6005546001600160801b031691908c5f612457565b600580546001600160801b0319166001600160801b03929092169190911790556118978882613926565b90506118a281611aab565b600380546001600160801b03928316600160801b0292169190911790556118c883611aab565b600280546001600160801b0319166001600160801b03929092169190911790556118f1826124fd565b600480546001600160801b0319166001600160801b039290921691909117905561191a87611aab565b6002805460109061193c908490600160801b90046001600160801b0316613959565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b5f8073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016119b8575047611a41565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611a1a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611a3e91906139f8565b90505b600f545f03611a50575f61157d565b600f5461157d90849083906125ae565b5f611a6b8284613a23565b61157d9084613926565b6002546004545f916105a6916001600160801b0390911690600f0b612a1f565b5f61007d82611aa58588886125ae565b90612a44565b5f6001600160801b0382111561134a57604051630f0af95160e11b815260040160405180910390fd5b5f818311611ae2578261157d565b50919050565b6006545f908190611b0a908490600160801b90046001600160801b0316611584565b6006546201000090046001600160701b03169250905081811115611c80575f611b338383613926565b9050611b426110fa8286612ab3565b60068054601090611b64908490600160801b90046001600160801b03166139ab565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611b9c8583612ac790919063ffffffff16565b90505f611bc9827f0000000000000000000000000000000000000000000000000000000000000000611584565b90508060095f828254611bdc9190613784565b90915550611bec90508183613926565b9150611bf782611aab565b600280545f90611c119084906001600160801b0316613959565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c3e82612adb565b600480545f90611c52908490600f0b6139cb565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611c918785612ac7565b91505f611cbe837f0000000000000000000000000000000000000000000000000000000000000000611584565b9050611cea817f0000000000000000000000000000000000000000000000000000000000000000611584565b91508315611d0d57611cfc8282613926565b611d069084613926565b9250611d24565b611d178282613926565b611d219084613784565b92505b86861015611d4757611d378387896125ae565b9250611d448287896125ae565b91505b509550959350505050565b5f80611d6984611d638a888a6125ae565b90612ac7565b9050611d768884866125ae565b611d809082613784565b905086811115611d905786810391505b509695505050505050565b5f6001600160701b0382111561134a5760405163086b151760e11b815260040160405180910390fd5b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611e0e916001600160801b031690613926565b9050805f03611e2157600191505061131b565b5f611e2b85612b04565b9050805f03611e3f5760019250505061131b565b5f80611e4c838589612b9f565b9150915080611e61575f94505050505061131b565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e9c929190613ab4565b6040805180830381865af4158015611eb6573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611eda9190613b29565b91509150611ef8611eea82611321565b611ef390613b4b565b612d13565b925082611f0d575f965050505050505061131b565b611f1682611aab565b600780545f90611f309084906001600160801b0316613959565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f5d81611aab565b60078054601090611f7f908490600160801b90046001600160801b0316613959565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611fda87612ea7565b6040518263ffffffff1660e01b8152600401611ff69190613b65565b6040805180830381865af4158015612010573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120349190613b74565b915091508061204957505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916120ae91613784565b6120b89190613926565b9050805f036120ce57505f958695509350505050565b5f8087116120dc575f6120e7565b6120e78488846125ae565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561211857612118613ba2565b6040519080825280601f01601f191660200182016040528015612142576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612162578692505b828152825f602083013e90999098509650505050505050565b5f806121856105ab565b9050808311612194575f61219e565b61219e8184613926565b915061157d827f0000000000000000000000000000000000000000000000000000000000000000612ac7565b5f80806121ea6121e288670de0b6b3a7640000613926565b899087612fe1565b9050861561222c576121fc888861259a565b915061221d8a8a846122168a670de0b6b3a7640000613926565b8989613004565b92506122298382613784565b90505b9750975097945050505050565b5f61225661224f84670de0b6b3a7640000613926565b839061259a565b61157d90670de0b6b3a7640000613926565b5f8061229e85612276611a75565b6122809190613784565b600254610fa9908790600160801b90046001600160801b0316613926565b909210949350505050565b5f8080806122ff87866122f88b6122f26122cb8c670de0b6b3a7640000613926565b7f00000000000000000000000000000000000000000000000000000000000000009061259a565b9061259a565b9190612fe1565b935061232b847f0000000000000000000000000000000000000000000000000000000000000000611584565b91505f61234b61234389670de0b6b3a7640000613926565b8a9088612fe1565b9050612377817f000000000000000000000000000000000000000000000000000000000000000061259a565b93506123a3847f0000000000000000000000000000000000000000000000000000000000000000611584565b6123ad9084613784565b915050945094509450949050565b5f805f805f80888810156124275786156123dd576123da8d898b6125ae565b9c505b6123e88c898b6125ae565b9b506123f38b611321565b6123fc8d611321565b6124069190613797565b90506124138b898b6125ae565b9a506124208a898b6125ae565b9950612446565b6124308b611321565b6124398d611321565b6124439190613797565b90505b9b9c9a9b999a975050505050505050565b5f825f036124665750846124f4565b81156124b8576124976124798487613784565b6124838587611584565b61248d888a611584565b611d639190613784565b90505f6124a48588611ad4565b9050808210156124b2578091505b506124f4565b8285036124c657505f6124f4565b6124f16124d38487613926565b6124dd858761259a565b6124e7888a611584565b611d639190613926565b90505b95945050505050565b5f60016001607f1b031982128061251a575060016001607f1b0382135b1561134a5760405163a5353be560e01b815260040160405180910390fd5b5f80612544845f613026565b61254e845f613026565b6125589190613797565b90505f8113156125735761256c8186613784565b9450612591565b5f8112156125915761258481613b4b565b61258e9086613926565b94505b50929392505050565b5f61157d8383670de0b6b3a7640000612fe1565b5f825f1904841183021582026125c2575f80fd5b5091020490565b5f8073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016126175750476126a0565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612679573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061269d91906139f8565b90505b600f5461157d908490836125ae565b5f600f5485116126bf57846126c3565b600f545b94505f6126cf8661196a565b905085600f5f8282546126e29190613926565b909155505f905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612784576040516001600160a01b0387169083905f81818185875af1925050503d805f8114612774576040519150601f19603f3d011682016040523d82523d5f602084013e612779565b606091505b505080915050612817565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303815f875af11580156127f0573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906128149190613bb6565b90505b80612835576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b600f54841161284e5783612852565b600f545b93505f61285e8561196a565b905084600f5f8282546128719190613926565b909155505f905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612913576040516001600160a01b0386169083905f81818185875af1925050503d805f8114612903576040519150601f19603f3d011682016040523d82523d5f602084013e612908565b606091505b5050809150506129a6565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303815f875af115801561297f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906129a39190613bb6565b90505b806129c4576040516312171d8360e31b815260040160405180910390fd5b505050505050565b5f80806129ec6129e488670de0b6b3a7640000613926565b8990876125ae565b9050861561222c576129fe8888611584565b915061221d8a8a84612a188a670de0b6b3a7640000613926565b898961303b565b5f80612a2b848461304b565b909250905080612a3d57612a3d6113ec565b5092915050565b5f815f03612a5b5750670de0b6b3a764000061131b565b825f03612a6957505f61131b565b5f612a7383611321565b90505f612a87612a8286611321565b613086565b9050818102612a9e670de0b6b3a764000082613bd1565b9050612aa9816132ab565b9695505050505050565b5f61157d83670de0b6b3a764000084612fe1565b5f61157d83670de0b6b3a7640000846125ae565b5f60016001607f1b0382111561134a5760405163a5353be560e01b815260040160405180910390fd5b6003545f908190612b1e906001600160801b031684612ab3565b9050612b4a7f000000000000000000000000000000000000000000000000000000000000000082613784565b6002546001600160801b03161115611ae2576002547f000000000000000000000000000000000000000000000000000000000000000090612b959083906001600160801b0316613926565b61157d9190613926565b612ba7613677565b5f80612bb284612ea7565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612bec9190613b65565b6040805180830381865af4158015612c06573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612c2a9190613b74565b9350905082612c3e57505f9150612d0b9050565b5f612c64612c5f84610160015185610140015161158490919063ffffffff16565b611321565b612c84612c5f85610120015186610100015161259a90919063ffffffff16565b612c8e9190613797565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612dc9573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612ded9190613bfd565b935093509350935080612e0857505f98975050505050505050565b868414612e3957612e1884611aab565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612e6a57612e49836124fd565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612e9857612e7a82611aab565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612eaf6136c1565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612fa7911661343d565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612fd99290041661343d565b905292915050565b5f825f190484118302158202612ff5575f80fd5b50910281810615159190040190565b5f806130148888888888886134b1565b909250905080611d9057611d906113ec565b5f818313613034578161157d565b5090919050565b5f8061301488888888888861358d565b5f805f8361305886611321565b6130629190613797565b90505f811215613078575f80925092505061307f565b9150600190505b9250929050565b5f8082136130a75760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061312a9084901c611321565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e1982136132c457505f919050565b680755bf798b4a1bf1e582126132ed576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612aa974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611321565b5f80670de0b6b3a76400006134506105ab565b61345a9190613994565b9050808311613469575f613473565b6134738184613926565b915061157d6134aa670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613994565b8390612ac7565b5f805f6134c18989888888613649565b9050868810156134d7575f809250925050613582565b96869003966134e68887612a44565b9750878110156134fc575f809250925050613582565b87810361350a818688612fe1565b9050670de0b6b3a7640000811061353e57613537613530670de0b6b3a764000089612ab3565b8290612a44565b9050613556565b613553613530670de0b6b3a764000089612ac7565b90505b6135608186612ab3565b905089811015613577575f80935093505050613582565b899003925060019150505b965096945050505050565b5f805f61359d8989888888613649565b90506135ad86611aa5898b613784565b9750878110156135c3575f809250925050613582565b8781036135d1818688612fe1565b9050670de0b6b3a764000081106135fe576135f7613530670de0b6b3a764000089612ab3565b9050613616565b613613613530670de0b6b3a764000089612ac7565b90505b6136208186612ab3565b9050808a1015613637575f80935093505050613582565b90980398600198509650505050505050565b5f6136548585612a44565b61366d61366586611aa5868b61259a565b859085612fe1565b6124f19190613784565b60405180610120016040528061368b6136c1565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f8060808587031215613729575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613754575f80fd5b850160608188031215613765575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561131b5761131b613770565b8181035f831280158383131683831282161715612a3d57612a3d613770565b6001600160a01b0381168114610591575f80fd5b5f602082840312156137da575f80fd5b813561157d816137b6565b8015158114610591575f80fd5b5f60208284031215613802575f80fd5b813561157d816137e5565b5f808335601e19843603018112613822575f80fd5b83018035915067ffffffffffffffff82111561383c575f80fd5b60200191503681900382131561307f575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f6138b160e083018486613850565b9a9950505050505050505050565b8082018281125f8312801582168215821617156138de576138de613770565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a08201525f61391960c083018486613850565b9998505050505050505050565b8181038181111561131b5761131b613770565b6001600160701b03818116838216019080821115612a3d57612a3d613770565b6001600160801b03818116838216019080821115612a3d57612a3d613770565b5f60208284031215613989575f80fd5b815161157d816137b6565b808202811582820484141761131b5761131b613770565b6001600160801b03828116828216039080821115612a3d57612a3d613770565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561131b5761131b613770565b5f60208284031215613a08575f80fd5b5051919050565b634e487b7160e01b5f52601260045260245ffd5b5f82613a3157613a31613a0f565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050613ac7828551613a36565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613b3a575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613b5f57613b5f613770565b505f0390565b610180810161131b8284613a36565b5f8060408385031215613b85575f80fd5b825191506020830151613b97816137e5565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f60208284031215613bc6575f80fd5b815161157d816137e5565b5f82613bdf57613bdf613a0f565b600160ff1b82145f1984141615613bf857613bf8613770565b500590565b5f805f8060808587031215613c10575f80fd5b8451935060208501519250604085015191506060850151613765816137e556fea264697066735822122034da2b5732f62280d0c6e2269d467a1f7828d6d5aff85ef3b012edddfc43472564736f6c6343000816003361028060405234801562000011575f80fd5b5060405162004390380380620043908339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613ebb620004d55f395f50505f50505f610c7301525f50505f818160f901528181610302015261315701525f81816115f9015281816120f501528181612158015281816128df01528181612d4701528181612d8301528181612f74015261313101525f818161083101528181610dcd01528181610e0f01528181610f0101528181611367015281816113c50152818161199c01528181611a2b015261310b01525f611d1f01525f8181611e40015281816129d001528181612a48015261326f01525f81816109ee01528181610e820152818161146001528181611e140152612a1c01525f8181610e610152818161299c015261322b01525f818161085201528181610dab01528181610e3001528181610f2201528181611345015281816113e6015261317d01525f81816101d3015281816103960152818161092c01526136f301525f81816106f20152818161076e015281816107e2015281816108ad01526108e501525f50505f818161055b015281816114c901528181611512015281816117a1015281816117ea01528181611879015281816118fa01528181611a9601528181611b1701528181612b2f0152612b780152613ebb5ff3fe608060405260043610610028575f3560e01c8063cba2e58d1461002c578063dbbe807014610058575b5f80fd5b61003f61003a36600461396b565b61006b565b6040805192835260208301919091520160405180910390f35b61003f61006636600461396b565b610087565b5f8061007986868686610095565b915091505b94509492505050565b5f80610079868686866102bc565b5f8061009f610531565b600654610100900460ff16156100c8576040516321081abf60e01b815260040160405180910390fd5b6100d0610559565b6100d9836105c5565b5f806100e588866105fd565b90925090505f6100f583836106ce565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101385760405163211ddda360e11b815260040160405180910390fd5b86821015610159576040516342af972b60e01b815260040160405180910390fd5b5f6101626106eb565b905061017281846004600161071b565b505f805f6101808787610d7f565b919a5091945090925090508b8810156101ac5760405163c972651760e01b815260040160405180910390fd5b8160095f8282546101bd91906139d9565b909155506101ce9050844283610f5e565b6101f87f0000000000000000000000000000000000000000000000000000000000000000856139d9565b98506102068389888c611097565b5f61021260018b61122e565b905061022b8161022560208e018e613a00565b8b611262565b8d8a8a898e8561023e6020830183613a00565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a86888661027b6040880160208901613a28565b8961028960408a018a613a43565b60405161029c9796959493929190613aae565b60405180910390a350909b50505050505050505050505061007e60015f55565b5f806102c6610531565b600654610100900460ff16156102ef576040516321081abf60e01b815260040160405180910390fd5b6102f7610559565b610300836105c5565b7f00000000000000000000000000000000000000000000000000000000000000008610156103415760405163211ddda360e11b815260040160405180910390fd5b5f61034a611307565b90508481101561036d576040516342af972b60e01b815260040160405180910390fd5b5f6103766106eb565b90505f61038e6103846106eb565b846004600161071b565b90505f6103bb7f0000000000000000000000000000000000000000000000000000000000000000846139d9565b90505f805f806103cc8e8988611319565b60098054949850929650909450925083915f906103ea9084906139d9565b909155506103fb9050874283610f5e565b61040d610408858a61149b565b6114af565b6104189060016139d9565b9350505f61042784898d6115ac565b9050808d101561044a5760405163c972651760e01b815260040160405180910390fd5b610454818c6105fd565b508e905061046481858b896115d3565b5f61047060028861122e565b90508c61048a826104846020840184613a00565b85611262565b858b868461049b6020860186613a00565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d860408b0160208c01613a28565b6104ec896104e68a8d613aee565b906106ce565b8d6104fa60408e018e613a43565b60405161050e989796959493929190613b01565b60405180910390a350989d50939b50505050505050505050505061007e60015f55565b60025f540361055357604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906105a557503415155b156105c357604051631574f9f360e01b815260040160405180910390fd5b565b5f6105d36020830183613a00565b6001600160a01b0316036105fa5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b815f806106106040850160208601613a28565b156106355761062b856106266040870187613a43565b611786565b909350905061064d565b503461064d856106486040870187613a43565b611a10565b610655611307565b915080156106c5576040515f90339083908381818185875af1925050503d805f811461069c576040519150601f19603f3d011682016040523d82523d5f602084013e6106a1565b606091505b50509050806106c3576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f6106e28383670de0b6b3a7640000611bb2565b90505b92915050565b5f610716427f0000000000000000000000000000000000000000000000000000000000000000611bcd565b905090565b5f84815260086020526040812060018101546001600160801b031615158061074257504286115b1561075b57600101546001600160801b03169050610d77565b5f805f6107666106eb565b90505f6107937f00000000000000000000000000000000000000000000000000000000000000008b6139d9565b90505b81811015610807575f818152600860205260409020600101546001600160801b031680156107df575f828152600860205260409020549094506001600160801b03169250610807565b507f000000000000000000000000000000000000000000000000000000000000000001610796565b835f036108795788935061087661081c611be2565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611c02565b92505b5061088383611c21565b6001850180546001600160801b0319166001600160801b03929092169190911790556108d96108d27f00000000000000000000000000000000000000000000000000000000000000008b613aee565b8a84610f5e565b6109178961091161090a7f0000000000000000000000000000000000000000000000000000000000000000836139d9565b4290611c4e565b84610f5e565b61092088611c62565b505f90506008816109517f00000000000000000000000000000000000000000000000000000000000000008d613aee565b815260208101919091526040015f908120600101546001600160801b0316915061097c60028c61122e565b5f818152600b60205260408120549192508c8c8315610abd57600192505f806109a886898d865f611dff565b915091508060095f8282546109bd91906139d9565b909155506109d89050865f846109d281611ecc565b88611ef5565b6109e281836139d9565b9150610a1286838a8e877f000000000000000000000000000000000000000000000000000000000000000061206c565b9150610a26610a2183856106ce565b6120b5565b60068054600290610a479084906201000090046001600160701b0316613b48565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a7482611c21565b60068054601090610a96908490600160801b90046001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610ac960018461122e565b5f818152600b60205260409020549091508015610bd457600194505f80610af4838b8f886001611dff565b915091508060095f828254610b0991906139d9565b90915550610b249050835f84610b1e81611ecc565b8a6120de565b610b2e8183613aee565b9150610b3d610a2183876106ce565b60068054600290610b5e9084906201000090046001600160701b0316613b48565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b8b82611c21565b60068054601090610bad908490600160801b90046001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c0d57610bff610be687611ecc565b610bef83611ecc565b610bf99190613b88565b5f6122ce565b8e610c0a848261230d565b50505b5f610c17846124fc565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ccd573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cf19190613ba7565b90506001600160a01b03811615610d6557610d625a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b0386169392919061263e565b50505b509b9d50505050505050505050505050505b949350505050565b5f805f805f610d8c611be2565b600254909150610df1908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006126c4565b600254909450610e54908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611c02565b9150610eab8785610ea6857f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006126ef565b612753565b15610eb857610eb8612794565b610ec4878588856127ad565b91965094509250670de0b6b3a7640000610f46610ee187846139d9565b600254610eff908890600160801b90046001600160801b0316613aee565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611c02565b1115610f5457610f54612794565b5092959194509250565b5f83815260086020526040902054600160801b90046001600160801b0316808303610f895750505050565b5f848152600860205260408120546001600160801b031690819003610fe157610fb183611c21565b5f86815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561105e565b61103261102d670de0b6b3a7640000610ffa8886613aee565b6110049190613bc2565b85670de0b6b3a7640000611018878a613aee565b6110229190613bc2565b8592919060016127f5565b611c21565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61106784611c21565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110d961102d826110c3670de0b6b3a764000086613bc2565b6005546001600160801b031691908860016127f5565b600580546001600160801b0319166001600160801b039290921691909117905561110285611c21565b600280545f9061111c9084906001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061114984611c21565b6002805460109061116b908490600160801b90046001600160801b0316613bd9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061119884611c21565b6111a29082613b68565b600380546001600160801b03808416600160801b02911617905590505f6111c883612899565b90506111e6816111d787611ecc565b6111e19084613bf9565b6122ce565b6111ef846128d9565b6111fb576111fb612794565b5f61120585612938565b90508061122557604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b5f6001600160f81b038211156112575760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b0386168452909152812080548392906112939084906139d9565b90915550505f838152600b6020526040812080548392906112b59084906139d9565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f610716670de0b6b3a76400006114af565b5f805f805f611326611be2565b60025490915061138b908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612944565b9350876113988589612964565b11156113a6576113a6612794565b6002545f90819061140a908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611c02565b93506114208a670de0b6b3a7640000868c612978565b5091935090915061143390508183613aee565b61143d9087613aee565b95508861148a816114848d611452868c613aee565b8d61145d8782612a84565b877f0000000000000000000000000000000000000000000000000000000000000000612a99565b90612964565b975090945050505093509350935093565b5f6106e283670de0b6b3a764000084612ab9565b5f8073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016114fd575047611586565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561155f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115839190613c20565b90505b600f545f03611595575f6115a5565b600f546115a59084908390611bb2565b9392505050565b5f6115bd6040830160208401613a28565b156115c95750826115a5565b610d778484612adc565b6002546001600160801b0316838110156115ef576115ef612794565b60045490849003907f000000000000000000000000000000000000000000000000000000000000000090611627908390600f0b612af0565b101561163557611635612794565b60045461167f9061102d90600160801b90046001600160801b0316611662670de0b6b3a764000086613bc2565b600554600160801b90046001600160801b031691908960016127f5565b600580546001600160801b03928316600160801b0292169190911790556116a581611c21565b600280546001600160801b0319166001600160801b03929092169190911790556116ce85611c21565b600280546010906116f0908490600160801b90046001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061171d85611c21565b6004805460109061173f908490600160801b90046001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61176d83612899565b90506111e68161177c88611ecc565b6111e19084613b88565b5f808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016117d557504761185e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611837573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061185b9190613c20565b90505b60015f73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016118d857873410156118c7576040516312171d8360e31b815260040160405180910390fd5b6118d18834613aee565b905061196f565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303815f875af1158015611948573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061196c9190613c37565b91505b8161198d576040516312171d8360e31b815260040160405180910390fd5b600f545f036119d1576119c0887f0000000000000000000000000000000000000000000000000000000000000000612adc565b600f81905594509250611a08915050565b600f545f906119e2908a9086611bb2565b905080600f5f8282546119f591906139d9565b90915550909550909350611a0892505050565b935093915050565b5f611a1a846114af565b9050600f545f03611a5757611a4f817f0000000000000000000000000000000000000000000000000000000000000000612adc565b600f55611a7b565b5f611a6182612b15565b905080600f5f828254611a7491906139d9565b9091555050505b60015f73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611af55782341015611ae4576040516312171d8360e31b815260040160405180910390fd5b611aee8334613aee565b9050611b8c565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303815f875af1158015611b65573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b899190613c37565b91505b81611baa576040516312171d8360e31b815260040160405180910390fd5b505050505050565b5f825f190484118302158202611bc6575f80fd5b5091020490565b5f611bd88284613c66565b6106e29084613aee565b6002546004545f91610716916001600160801b0390911690600f0b612af0565b5f611c1882611c12858888611bb2565b90612bfb565b95945050505050565b5f6001600160801b03821115611c4a57604051630f0af95160e11b815260040160405180910390fd5b5090565b5f818311611c5c57826106e2565b50919050565b6006545f908190611c84908490600160801b90046001600160801b03166106ce565b6006546201000090046001600160701b03169250905081811115611dfa575f611cad8383613aee565b9050611cbc61102d828661149b565b60068054601090611cde908490600160801b90046001600160801b0316613bd9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611d168583612adc90919063ffffffff16565b90505f611d43827f00000000000000000000000000000000000000000000000000000000000000006106ce565b90508060095f828254611d5691906139d9565b90915550611d6690508183613aee565b9150611d7182611c21565b600280545f90611d8b9084906001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611db882612c60565b600480545f90611dcc908490600f0b613c79565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611e0b8785612adc565b91505f611e38837f00000000000000000000000000000000000000000000000000000000000000006106ce565b9050611e64817f00000000000000000000000000000000000000000000000000000000000000006106ce565b91508315611e8757611e768282613aee565b611e809084613aee565b9250611e9e565b611e918282613aee565b611e9b90846139d9565b92505b86861015611ec157611eb1838789611bb2565b9250611ebe828789611bb2565b91505b509550959350505050565b5f6001600160ff1b03821115611c4a5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611f3d61102d82611f21670de0b6b3a764000086613bc2565b600554600160801b90046001600160801b031691908a5f6127f5565b600580546001600160801b03928316600160801b029216919091179055611f6386611c21565b611f6d9082613bd9565b600480546001600160801b03928316600160801b029216919091179055611f9384611c21565b600280545f90611fad9084906001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611fda83612c89565b600480545f90611fee908490600f0b613c79565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061201e85611c21565b60028054601090612040908490600160801b90046001600160801b0316613bd9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f806120838461207d8a888a611bb2565b90612adc565b9050612090888486611bb2565b61209a90826139d9565b9050868111156120aa5786810391505b509695505050505050565b5f6001600160701b03821115611c4a5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061212057507f000000000000000000000000000000000000000000000000000000000000000061211e8583613aee565b105b1561212d5761212d612794565b6004549084900390600f0b6121428482613b88565b90508361214e86611ecc565b13801561218357507f00000000000000000000000000000000000000000000000000000000000000006121818383612af0565b105b1561219057612190612794565b600354600160801b90046001600160801b03166121d161102d826121bc670de0b6b3a764000088613bc2565b6005546001600160801b031691908c5f6127f5565b600580546001600160801b0319166001600160801b03929092169190911790556121fb8882613aee565b905061220681611c21565b600380546001600160801b03928316600160801b02921691909117905561222c83611c21565b600280546001600160801b0319166001600160801b039290921691909117905561225582612c89565b600480546001600160801b0319166001600160801b039290921691909117905561227e87611c21565b600280546010906122a0908490600160801b90046001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6003546122e99061102d906001600160801b03168484612cc4565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291612357916001600160801b031690613aee565b9050805f0361236a5760019150506106e5565b5f61237485612d26565b9050805f03612388576001925050506106e5565b5f80612395838589612dc1565b91509150806123aa575f9450505050506106e5565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016123e5929190613d24565b6040805180830381865af41580156123ff573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906124239190613d99565b9150915061244161243382611ecc565b61243c90613dbb565b612f2e565b925082612456575f96505050505050506106e5565b61245f82611c21565b600780545f906124799084906001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506124a681611c21565b600780546010906124c8908490600160801b90046001600160801b0316613b68565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e612523876130c2565b6040518263ffffffff1660e01b815260040161253f9190613dd5565b6040805180830381865af4158015612559573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061257d9190613de4565b915091508061259257505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916125f7916139d9565b6126019190613aee565b9050805f0361261757505f958695509350505050565b5f808711612625575f612630565b612630848884611bb2565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561266157612661613e12565b6040519080825280601f01601f19166020018201604052801561268b576020820181803683370190505b5090505f808751602089018b8e8ef191503d9250868311156126ab578692505b828152825f602083013e90999098509650505050505050565b5f6126e48787876126dd88670de0b6b3a7640000613aee565b87876131fc565b979650505050505050565b5f610d7761272f61270884670de0b6b3a7640000613aee565b611484670de0b6b3a764000061271e818a61149b565b6127289190613aee565b8790612964565b61274190670de0b6b3a76400006139d9565b61207d84670de0b6b3a7640000613aee565b5f8061278985612761611be2565b61276b91906139d9565b600254610eff908790600160801b90046001600160801b0316613aee565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f805f805f6127bd89878961321e565b90925090506127cc8289613aee565b97505f6127da82888a611bb2565b90506127e6818b613aee565b9a989950979650505050505050565b5f825f03612804575084611c18565b81156128565761283561281784876139d9565b61282185876106ce565b61282b888a6106ce565b61207d91906139d9565b90505f6128428588611c4e565b905080821015612850578091505b50611c18565b82850361286457505f611c18565b61288f6128718487613aee565b61287b8587612964565b612885888a6106ce565b61207d9190613aee565b9695505050505050565b5f6128be600b5f6128ab60028661122e565b81526020019081526020015f2054611ecc565b6128cf600b5f6128ab60018761122e565b6106e59190613b88565b5f6129047f000000000000000000000000000000000000000000000000000000000000000083612964565b60035461291a91906001600160801b03166139d9565b600254612930906001600160801b0316846106ce565b101592915050565b5f6106e582600461230d565b5f6126e487878761295d88670de0b6b3a7640000613aee565b878761329d565b5f6106e28383670de0b6b3a7640000612ab9565b5f8080806129c887866129c18b61148461299a8c670de0b6b3a7640000613aee565b7f000000000000000000000000000000000000000000000000000000000000000090612964565b9190612ab9565b93506129f4847f00000000000000000000000000000000000000000000000000000000000000006106ce565b91505f612a14612a0c89670de0b6b3a7640000613aee565b8a9088612ab9565b9050612a40817f0000000000000000000000000000000000000000000000000000000000000000612964565b9350612a6c847f00000000000000000000000000000000000000000000000000000000000000006106ce565b612a7690846139d9565b915050945094509450949050565b5f818311612a9257816106e2565b5090919050565b5f80612ab084612aaa8a888a612ab9565b9061149b565b90506120908884865b5f825f190484118302158202612acd575f80fd5b50910281810615159190040190565b5f6106e283670de0b6b3a764000084611bb2565b5f80612afc84846132ad565b909250905080612b0e57612b0e612794565b5092915050565b5f8073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612b63575047612bec565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612bc5573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612be99190613c20565b90505b600f546115a590849083611bb2565b5f815f03612c125750670de0b6b3a76400006106e5565b825f03612c2057505f6106e5565b5f612c2a83611ecc565b90505f612c3e612c3986611ecc565b6132e5565b9050818102612c55670de0b6b3a764000082613e26565b905061288f8161350a565b5f60016001607f1b03821115611c4a5760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b0319821280612ca6575060016001607f1b0382135b15611c4a5760405163a5353be560e01b815260040160405180910390fd5b5f80612cd0845f61369c565b612cda845f61369c565b612ce49190613b88565b90505f811315612cff57612cf881866139d9565b9450612d1d565b5f811215612d1d57612d1081613dbb565b612d1a9086613aee565b94505b50929392505050565b6003545f908190612d40906001600160801b03168461149b565b9050612d6c7f0000000000000000000000000000000000000000000000000000000000000000826139d9565b6002546001600160801b03161115611c5c576002547f000000000000000000000000000000000000000000000000000000000000000090612db79083906001600160801b0316613aee565b6115a59190613aee565b612dc96138cc565b5f80612dd4846130c2565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612e0e9190613dd5565b6040805180830381865af4158015612e28573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612e4c9190613de4565b9350905082612e6057505f9150611a089050565b5f612e86612e818461016001518561014001516106ce90919063ffffffff16565b611ecc565b612ea6612e8185610120015186610100015161296490919063ffffffff16565b612eb09190613b88565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612fe4573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906130089190613e52565b93509350935093508061302357505f98975050505050505050565b8684146130545761303384611c21565b600280546001600160801b0319166001600160801b03929092169190911790555b8583146130855761306483612c89565b600480546001600160801b0319166001600160801b03929092169190911790555b8482146130b35761309582611c21565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6130ca613916565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916131c291166136aa565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926131f4929004166136aa565b905292915050565b5f8061320c88888888888861371e565b9092509050806120aa576120aa612794565b5f806132678561148485817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061325d818c61149b565b6114849190613aee565b9150613293827f00000000000000000000000000000000000000000000000000000000000000006106ce565b9050935093915050565b5f8061320c8888888888886137e2565b5f805f836132ba86611ecc565b6132c49190613b88565b90505f8112156132da575f8092509250506106c7565b946001945092505050565b5f8082136133065760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906133899084901c611ecc565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361352357505f919050565b680755bf798b4a1bf1e5821261354c576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061288f74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611ecc565b5f818313612a9257816106e2565b5f80670de0b6b3a76400006136bd6106eb565b6136c79190613bc2565b90508083116136d6575f6136e0565b6136e08184613aee565b91506115a5613717670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613bc2565b8390612adc565b5f805f61372e898988888861389e565b905061374886611c126137418a8d6139d9565b87906106ce565b9850613755858a86611bb2565b98508881101561376b575f8092509250506137d7565b888103670de0b6b3a764000081106137a057613799613792670de0b6b3a76400008961149b565b8290612bfb565b90506137b8565b6137b5613792670de0b6b3a764000089612adc565b90505b808910156137cd575f809350935050506137d7565b8803925060019150505b965096945050505050565b5f805f6137f2898988888861389e565b905061380286611c12898b6139d9565b975087811015613818575f8092509250506137d7565b878103613826818688612ab9565b9050670de0b6b3a764000081106138535761384c613792670de0b6b3a76400008961149b565b905061386b565b613868613792670de0b6b3a764000089612adc565b90505b613875818661149b565b9050808a101561388c575f809350935050506137d7565b90980398600198509650505050505050565b5f6138a98585612bfb565b6138c26138ba86611c12868b612964565b859085612ab9565b61288f91906139d9565b6040518061012001604052806138e0613916565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f806080858703121561397e575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156139a9575f80fd5b8501606081880312156139ba575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b808201808211156106e5576106e56139c5565b6001600160a01b03811681146105fa575f80fd5b5f60208284031215613a10575f80fd5b81356115a5816139ec565b80151581146105fa575f80fd5b5f60208284031215613a38575f80fd5b81356115a581613a1b565b5f808335601e19843603018112613a58575f80fd5b83018035915067ffffffffffffffff821115613a72575f80fd5b6020019150368190038213156106c7575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201525f613ae160c083018486613a86565b9998505050505050505050565b818103818111156106e5576106e56139c5565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f613b3a60e083018486613a86565b9a9950505050505050505050565b6001600160701b03818116838216019080821115612b0e57612b0e6139c5565b6001600160801b03818116838216019080821115612b0e57612b0e6139c5565b8181035f831280158383131683831282161715612b0e57612b0e6139c5565b5f60208284031215613bb7575f80fd5b81516115a5816139ec565b80820281158282048414176106e5576106e56139c5565b6001600160801b03828116828216039080821115612b0e57612b0e6139c5565b8082018281125f831280158216821582161715613c1857613c186139c5565b505092915050565b5f60208284031215613c30575f80fd5b5051919050565b5f60208284031215613c47575f80fd5b81516115a581613a1b565b634e487b7160e01b5f52601260045260245ffd5b5f82613c7457613c74613c52565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106e5576106e56139c5565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050613d37828551613ca6565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613daa575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613dcf57613dcf6139c5565b505f0390565b61018081016106e58284613ca6565b5f8060408385031215613df5575f80fd5b825191506020830151613e0781613a1b565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f82613e3457613e34613c52565b600160ff1b82145f1984141615613e4d57613e4d6139c5565b500590565b5f805f8060808587031215613e65575f80fd5b84519350602085015192506040850151915060608501516139ba81613a1b56fea2646970667358221220866c28df534d8c8a6e0f290d5c82cfde44a3eecea72f04a3e4f9fe6dc2d78f5f64736f6c6343000816003361028060405234801562000011575f80fd5b5060405162004328380380620043288339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613e42620004e65f395f50505f50505f6112f601525f81816102f801528181610327015261035401525f818160d901528181610596015261170c01525f81816108320152818161091d015281816109ad01528181610ab2015281816115de015281816116e6015281816123dd0152818161244001528181612ce90152818161319301526131cf01525f8181610139015281816108a201528181610eb4015281816114a70152818161150a0152818161154f015281816116c001528181611bad0152611c3c01525f611fee01525f8181612143015261341e01525f8181611071015261211701525f6133d401525f818161017b015281816108f501528181610ed501528181611477015281816114da01528181611570015261173201525f818161015a0152818161022f015281816102cd015281816106d5015281816108cf01528181610faf0152612c7f01525f818161028d01528181610d7a01528181610df101528181610e6501528181610f300152610f6801525f50505f8181610bb6015281816119b2015281816119fb01528181611a8a01528181611b0b01528181611ca701528181611d2801528181612ed901528181612f2201528181612fcf01526130180152613e425ff3fe608060405260043610610028575f3560e01c80634c2ac1d91461002c57806377d05ff414610051575b5f80fd5b61003f61003a3660046138c7565b610064565b60405190815260200160405180910390f35b61003f61005f366004613926565b61007e565b5f6100728686868686610094565b90505b95945050505050565b5f61008a8484846107de565b90505b9392505050565b5f61009d610b8c565b600654610100900460ff16156100c6576040516321081abf60e01b815260040160405180910390fd5b6100ce610bb4565b6100d782610c20565b7f00000000000000000000000000000000000000000000000000000000000000008610156101185760405163211ddda360e11b815260040160405180910390fd5b5f61019f610124610c58565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c7d565b9050848110806101ae57508381115b156101cc57604051633b61151160e11b815260040160405180910390fd5b5f806101d88986610ca2565b915091505f6101e5610d73565b90506101f5818360046001610d9e565b506002546004546003545f92839261025e926001600160801b0380841693600f9390930b92600160801b90048116918991166102596102547f00000000000000000000000000000000000000000000000000000000000000008b613986565b611402565b611448565b915091508061028057604051630552b01360e31b815260040160405180910390fd5b8b5f6102f16008826102b27f000000000000000000000000000000000000000000000000000000000000000089613999565b815260208101919091526040015f20546001600160801b03167f000000000000000000000000000000000000000000000000000000000000000061164c565b905061031d7f000000000000000000000000000000000000000000000000000000000000000082613986565b88118061037c57507f00000000000000000000000000000000000000000000000000000000000000008111801561037c57506103797f000000000000000000000000000000000000000000000000000000000000000082613999565b88105b1561039a57604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490916103e5916001600160801b0390911690613999565b5f808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061041f908390613986565b90505f805f61042d8a611677565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610467908490600401613a2a565b602060405180830381865af4158015610482573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104a69190613a39565b91506104b96104b48c6117b1565b6117de565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161051a91859101613a2a565b602060405180830381865af4158015610535573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105599190613a39565b92508183101561057c5760405163184d952160e11b815260040160405180910390fd5b610592848361058b8187613999565b9190611804565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105d55760405163211ddda360e11b815260040160405180910390fd5b508f6105e1868e61181f565b10156106005760405163c972651760e01b815260040160405180910390fd5b61061c5f8e5f0160208101906106169190613a64565b8e611833565b610625896118d8565b95508561064557604051638bdf918d60e01b815260040160405180910390fd5b5f8890505f8d9050368f90505f8c90505f6106ff60025f015f9054906101000a90046001600160801b03166001600160801b0316600280015f9054906101000a9004600f0b600f0b60025f0160109054906101000a90046001600160801b03166001600160801b03168560026001015f9054906101000a90046001600160801b03166001600160801b03166102597f00000000000000000000000000000000000000000000000000000000000000008c6102549190613986565b9b5090508a158061071857506107158c5f6118e4565b81125b1561073657604051630552b01360e31b815260040160405180910390fd5b5f881561074d5761074887848b611804565b61074f565b5f5b905061075e6020850185613a64565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d8661079b60408a0160208b01613a8c565b866107a960408c018c613aa7565b6040516107bc9796959493929190613aea565b60405180910390a2505050505050505050505050505050505061007560015f55565b5f6107e7610b8c565b6107ef610bb4565b6107f882610c20565b60065460ff161561081c57604051637983c05160e01b815260040160405180910390fd5b5f806108288685610ca2565b90925090506108587f00000000000000000000000000000000000000000000000000000000000000006002613b3d565b82101561087857604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393505f908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610981573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109a59190613b54565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109d684846118f8565b10156109f55760405163216f4ab160e21b815260040160405180910390fd5b5f80610a05858585895f80611448565b91509150801580610a1557505f82125b15610a3357604051630552b01360e31b815260040160405180910390fd5b610a3c8561191d565b600280546001600160801b0319166001600160801b0392909216919091179055610a6584611946565b600480546001600160801b0319166001600160801b0392909216919091179055610a8e8361191d565b600280546001600160801b03928316600160801b029216919091179055610ad65f807f0000000000000000000000000000000000000000000000000000000000000000611833565b610aed5f610ae760208c018c613a64565b8a611833565b610b02610af8610d73565b8760046001610d9e565b508a8a8a610b136020820182613a64565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b506040870160208801613a8c565b87610b5e6040890189613aa7565b604051610b719796959493929190613aea565b60405180910390a25050505050505050505061008d60015f55565b60025f5403610bae57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14801590610c0057503415155b15610c1e57604051631574f9f360e01b815260040160405180910390fd5b565b5f610c2e6020830183613a64565b6001600160a01b031603610c555760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6002546004545f91610c78916001600160801b0390911690600f0b6118f8565b905090565b5f80610c8b87878786611981565b9050610c97818561164c565b979650505050505050565b815f80610cb56040850160208601613a8c565b15610cda57610cd085610ccb6040870187613aa7565b611997565b9093509050610cf2565b5034610cf285610ced6040870187613aa7565b611c21565b610cfa611dc3565b91508015610d6a576040515f90339083908381818185875af1925050503d805f8114610d41576040519150601f19603f3d011682016040523d82523d5f602084013e610d46565b606091505b5050905080610d68576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f610c78427f0000000000000000000000000000000000000000000000000000000000000000611dd5565b5f84815260086020526040812060018101546001600160801b0316151580610dc557504286115b15610dde57600101546001600160801b031690506113fa565b5f805f610de9610d73565b90505f610e167f00000000000000000000000000000000000000000000000000000000000000008b613986565b90505b81811015610e8a575f818152600860205260409020600101546001600160801b03168015610e62575f828152600860205260409020549094506001600160801b03169250610e8a565b507f000000000000000000000000000000000000000000000000000000000000000001610e19565b835f03610efc57889350610ef9610e9f610c58565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611981565b92505b50610f068361191d565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f5c610f557f00000000000000000000000000000000000000000000000000000000000000008b613999565b8a84611dea565b610f9a89610f94610f8d7f000000000000000000000000000000000000000000000000000000000000000083613986565b4290611f23565b84611dea565b610fa388611f31565b505f9050600881610fd47f00000000000000000000000000000000000000000000000000000000000000008d613999565b815260208101919091526040015f908120600101546001600160801b03169150610fff60028c6120ce565b5f818152600b60205260408120549192508c8c831561114057600192505f8061102b86898d865f612102565b915091508060095f8282546110409190613986565b9091555061105b9050865f84611055816117b1565b886121cf565b6110658183613986565b915061109586838a8e877f0000000000000000000000000000000000000000000000000000000000000000612346565b91506110a96110a48385612389565b61239d565b600680546002906110ca9084906201000090046001600160701b0316613b7f565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110f78261191d565b60068054601090611119908490600160801b90046001600160801b0316613b9f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f61114c6001846120ce565b5f818152600b6020526040902054909150801561125757600194505f80611177838b8f886001612102565b915091508060095f82825461118c9190613986565b909155506111a79050835f846111a1816117b1565b8a6123c6565b6111b18183613999565b91506111c06110a48387612389565b600680546002906111e19084906201000090046001600160701b0316613b7f565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061120e8261191d565b60068054601090611230908490600160801b90046001600160801b0316613b9f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b841561129057611282611269876117b1565b611272836117b1565b61127c9190613bbf565b5f6125b6565b8e61128d84826125f5565b50505b5f61129a846127e4565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611350573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113749190613bde565b90506001600160a01b038116156113e8576113e55a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612926565b50505b509b9d50505050505050505050505050505b949350505050565b5f611427600b5f6114146002866120ce565b81526020019081526020015f20546117b1565b611438600b5f6114146001876120ce565b6114429190613bbf565b92915050565b5f805f806114568a8a6129ae565b915091508061146c575f80935093505050611641565b5f6114cb838a6114a47f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613999565b8b7f00000000000000000000000000000000000000000000000000000000000000006129e6565b5090505f61152e848b846115077f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613999565b8d7f0000000000000000000000000000000000000000000000000000000000000000612a9f565b50905081158061153c575080155b1561154757505f9050805b5f611594858c7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611981565b90506115a283838c84612b59565b509093505f90506115b3848f613986565b90505f6115d38b8b6115c4876117b1565b6115ce908e613bf9565b612ba1565b90508b6116086116037f000000000000000000000000000000000000000000000000000000000000000083612c03565b6117b1565b611611836117b1565b61161e6116038685612389565b6116289190613bbf565b6116329190613bbf565b60019950995050505050505050505b965096945050505050565b5f61008d61165f84846301e13380612c13565b61167185670de0b6b3a7640000613999565b9061181f565b61167f613818565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916117779116612c36565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926117a992900416612c36565b905292915050565b5f6001600160ff1b038211156117da5760405163396ea70160e11b815260040160405180910390fd5b5090565b6117e781612ca3565b610c5557604051635044b7f560e01b815260040160405180910390fd5b5f825f190484118302158202611818575f80fd5b5091020490565b5f61008d83670de0b6b3a764000084611804565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290611864908490613986565b90915550505f838152600b602052604081208054839290611886908490613986565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6114428260046125f5565b5f8183136118f2578261008d565b50919050565b5f8061190484846129ae565b90925090508061191657611916612e37565b5092915050565b5f6001600160801b038211156117da57604051630f0af95160e11b815260040160405180910390fd5b5f60016001607f1b0319821280611963575060016001607f1b0382135b156117da5760405163a5353be560e01b815260040160405180910390fd5b5f61007582611991858888611804565b90612e50565b5f808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016119e6575047611a6f565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611a48573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611a6c9190613a39565b90505b60015f73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611ae95787341015611ad8576040516312171d8360e31b815260040160405180910390fd5b611ae28834613999565b9050611b80565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303815f875af1158015611b59573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b7d9190613c20565b91505b81611b9e576040516312171d8360e31b815260040160405180910390fd5b600f545f03611be257611bd1887f000000000000000000000000000000000000000000000000000000000000000061181f565b600f81905594509250611c19915050565b600f545f90611bf3908a9086611804565b905080600f5f828254611c069190613986565b90915550909550909350611c1992505050565b935093915050565b5f611c2b84612ebf565b9050600f545f03611c6857611c60817f000000000000000000000000000000000000000000000000000000000000000061181f565b600f55611c8c565b5f611c7282612fb5565b905080600f5f828254611c859190613986565b9091555050505b60015f73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611d065782341015611cf5576040516312171d8360e31b815260040160405180910390fd5b611cff8334613999565b9050611d9d565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303815f875af1158015611d76573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611d9a9190613c20565b91505b81611dbb576040516312171d8360e31b815260040160405180910390fd5b505050505050565b5f610c78670de0b6b3a7640000612ebf565b5f611de08284613c4f565b61008d9084613999565b5f83815260086020526040902054600160801b90046001600160801b0316808303611e155750505050565b5f848152600860205260408120546001600160801b031690819003611e6d57611e3d8361191d565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611eea565b611ebe611eb9670de0b6b3a7640000611e868886613999565b611e909190613b3d565b85670de0b6b3a7640000611ea4878a613999565b611eae9190613b3d565b85929190600161309b565b61191d565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611ef38461191d565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f8183116118f2578261008d565b6006545f908190611f53908490600160801b90046001600160801b0316612389565b6006546201000090046001600160701b031692509050818111156120c9575f611f7c8383613999565b9050611f8b611eb98286613135565b60068054601090611fad908490600160801b90046001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611fe5858361181f90919063ffffffff16565b90505f612012827f0000000000000000000000000000000000000000000000000000000000000000612389565b90508060095f8282546120259190613986565b9091555061203590508183613999565b91506120408261191d565b600280545f9061205a9084906001600160801b0316613b9f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061208782613149565b600480545f9061209b908490600f0b613c82565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b038211156120f75760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f8061210e878561181f565b91505f61213b837f0000000000000000000000000000000000000000000000000000000000000000612389565b9050612167817f0000000000000000000000000000000000000000000000000000000000000000612389565b9150831561218a576121798282613999565b6121839084613999565b92506121a1565b6121948282613999565b61219e9084613986565b92505b868610156121c4576121b4838789611804565b92506121c1828789611804565b91505b509550959350505050565b600454600160801b90046001600160801b0316612217611eb9826121fb670de0b6b3a764000086613b3d565b600554600160801b90046001600160801b031691908a5f61309b565b600580546001600160801b03928316600160801b02921691909117905561223d8661191d565b6122479082613c62565b600480546001600160801b03928316600160801b02921691909117905561226d8461191d565b600280545f906122879084906001600160801b0316613b9f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506122b483611946565b600480545f906122c8908490600f0b613c82565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506122f88561191d565b6002805460109061231a908490600160801b90046001600160801b0316613c62565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80612357846116718a888a611804565b9050612364888486611804565b61236e9082613986565b90508681111561237e5786810391505b509695505050505050565b5f61008d8383670de0b6b3a7640000611804565b5f6001600160701b038211156117da5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061240857507f00000000000000000000000000000000000000000000000000000000000000006124068583613999565b105b1561241557612415612e37565b6004549084900390600f0b61242a8482613bbf565b905083612436866117b1565b13801561246b57507f000000000000000000000000000000000000000000000000000000000000000061246983836118f8565b105b1561247857612478612e37565b600354600160801b90046001600160801b03166124b9611eb9826124a4670de0b6b3a764000088613b3d565b6005546001600160801b031691908c5f61309b565b600580546001600160801b0319166001600160801b03929092169190911790556124e38882613999565b90506124ee8161191d565b600380546001600160801b03928316600160801b0292169190911790556125148361191d565b600280546001600160801b0319166001600160801b039290921691909117905561253d82611946565b600480546001600160801b0319166001600160801b03929092169190911790556125668761191d565b60028054601090612588908490600160801b90046001600160801b0316613b9f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6003546125d190611eb9906001600160801b03168484612ba1565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543549091829161263f916001600160801b031690613999565b9050805f03612652576001915050611442565b5f61265c85613172565b9050805f0361267057600192505050611442565b5f8061267d83858961320d565b9150915080612692575f945050505050611442565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016126cd929190613caf565b6040805180830381865af41580156126e7573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061270b9190613d24565b9150915061272961271b826117b1565b61272490613d46565b612ca3565b92508261273e575f9650505050505050611442565b6127478261191d565b600780545f906127619084906001600160801b0316613b9f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061278e8161191d565b600780546010906127b0908490600160801b90046001600160801b0316613b9f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61280b87611677565b6040518263ffffffff1660e01b81526004016128279190613a2a565b6040805180830381865af4158015612841573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906128659190613d60565b915091508061287a57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916128df91613986565b6128e99190613999565b9050805f036128ff57505f958695509350505050565b5f80871161290d575f612918565b612918848884611804565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561294957612949613d8e565b6040519080825280601f01601f191660200182016040528015612973576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612993578692505b828152825f602083013e9093509150505b9550959350505050565b5f805f836129bb866117b1565b6129c59190613bbf565b90505f8112156129db575f809250925050610d6c565b946001945092505050565b5f805f6129f68888888888613375565b90505f612a20670de0b6b3a7640000612a0f8888613135565b612a199190613986565b839061181f565b9050670de0b6b3a76400008110612a5457612a4d612a46670de0b6b3a76400008961181f565b8290612e50565b9050612a6c565b612a69612a46670de0b6b3a764000089613135565b90505b612a76818661181f565b905088811015612a8d575f809350935050506129a4565b97909703976001975095505050505050565b5f805f612aaf89898888886133a3565b9050612ac986611991612ac28a8d613986565b8790612389565b9850612ad6858a86611804565b985088811015612aec575f809250925050611641565b888103670de0b6b3a76400008110612b1a57612b13612a46670de0b6b3a764000089613135565b9050612b32565b612b2f612a46670de0b6b3a76400008961181f565b90505b80891015612b47575f80935093505050611641565b90970398600198509650505050505050565b5f805f805f612b698987896133c7565b9092509050612b788289613999565b97505f612b8682888a611804565b9050612b92818b613999565b9a989950979650505050505050565b5f80612bad845f61344c565b612bb7845f61344c565b612bc19190613bbf565b90505f811315612bdc57612bd58186613986565b9450612bfa565b5f811215612bfa57612bed81613d46565b612bf79086613999565b94505b50929392505050565b5f61008d8383670de0b6b3a76400005b5f825f190484118302158202612c27575f80fd5b50910281810615159190040190565b5f80670de0b6b3a7640000612c49610d73565b612c539190613b3d565b9050808311612c62575f612c6c565b612c6c8184613999565b915061008d612a19670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613b3d565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612d59573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612d7d9190613da2565b935093509350935080612d9857505f98975050505050505050565b868414612dc957612da88461191d565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612dfa57612dd983611946565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612e2857612e0a8261191d565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f815f03612e675750670de0b6b3a7640000611442565b825f03612e7557505f611442565b5f612e7f836117b1565b90505f612e93612e8e866117b1565b613461565b9050818102612eaa670de0b6b3a764000082613de0565b9050612eb581613686565b9695505050505050565b5f8073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612f0d575047612f96565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612f6f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612f939190613a39565b90505b600f545f03612fa5575f61008d565b600f5461008d9084908390611804565b5f8073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161300357504761308c565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015613065573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906130899190613a39565b90505b600f5461008d90849083611804565b5f825f036130aa575084610075565b81156130fc576130db6130bd8487613986565b6130c78587612389565b6130d1888a612389565b6116719190613986565b90505f6130e88588611f23565b9050808210156130f6578091505b50610075565b82850361310a57505f610075565b6100726131178487613999565b6131218587612c03565b61312b888a612389565b6116719190613999565b5f61008d83670de0b6b3a764000084612c13565b5f60016001607f1b038211156117da5760405163a5353be560e01b815260040160405180910390fd5b6003545f90819061318c906001600160801b031684613135565b90506131b87f000000000000000000000000000000000000000000000000000000000000000082613986565b6002546001600160801b031611156118f2576002547f0000000000000000000000000000000000000000000000000000000000000000906132039083906001600160801b0316613999565b61008d9190613999565b61321561386d565b5f8061322084611677565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161325a9190613a2a565b6040805180830381865af4158015613274573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906132989190613d60565b93509050826132ac57505f9150611c199050565b5f6132cd61160384610160015185610140015161238990919063ffffffff16565b6132ed611603856101200151866101000151612c0390919063ffffffff16565b6132f79190613bbf565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b5f6133808585612e50565b61339961339186611991868b612389565b859085611804565b6100729190613986565b5f6133ae8585612e50565b6133996133bf86611991868b612c03565b859085612c13565b5f806134168561341085817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613406818c613135565b6134109190613999565b90612c03565b9150613442827f0000000000000000000000000000000000000000000000000000000000000000612389565b9050935093915050565b5f81831361345a578161008d565b5090919050565b5f8082136134825760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906135059084901c6117b1565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361369f57505f919050565b680755bf798b4a1bf1e582126136c8576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612eb574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6117b1565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b604051806101200160405280613881613818565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f606082840312156118f2575f80fd5b5f805f805f60a086880312156138db575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561390d575f80fd5b613919888289016138b7565b9150509295509295909350565b5f805f60608486031215613938575f80fd5b8335925060208401359150604084013567ffffffffffffffff81111561395c575f80fd5b613968868287016138b7565b9150509250925092565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561144257611442613972565b8181038181111561144257611442613972565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b610180810161144282846139ac565b5f60208284031215613a49575f80fd5b5051919050565b6001600160a01b0381168114610c55575f80fd5b5f60208284031215613a74575f80fd5b813561008d81613a50565b8015158114610c55575f80fd5b5f60208284031215613a9c575f80fd5b813561008d81613a7f565b5f808335601e19843603018112613abc575f80fd5b83018035915067ffffffffffffffff821115613ad6575f80fd5b602001915036819003821315610d6c575f80fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e08301375f81830160e090810191909152601f909201601f191601019695505050505050565b808202811582820484141761144257611442613972565b5f805f60608486031215613b66575f80fd5b8351925060208401519150604084015190509250925092565b6001600160701b0381811683821601908082111561191657611916613972565b6001600160801b0381811683821601908082111561191657611916613972565b8181035f83128015838313168383128216171561191657611916613972565b5f60208284031215613bee575f80fd5b815161008d81613a50565b8082018281125f831280158216821582161715613c1857613c18613972565b505092915050565b5f60208284031215613c30575f80fd5b815161008d81613a7f565b634e487b7160e01b5f52601260045260245ffd5b5f82613c5d57613c5d613c3b565b500690565b6001600160801b0382811682821603908082111561191657611916613972565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561144257611442613972565b5f6102a082019050613cc28285516139ac565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613d35575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613d5a57613d5a613972565b505f0390565b5f8060408385031215613d71575f80fd5b825191506020830151613d8381613a7f565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215613db5575f80fd5b8451935060208501519250604085015191506060850151613dd581613a7f565b939692955090935050565b5f82613dee57613dee613c3b565b600160ff1b82145f1984141615613e0757613e07613972565b50059056fea2646970667358221220d426ba5f7020e09bbfea80f6e77d21cc660f32b25d7e2adec3c6a8f1dc6df22d64736f6c6343000816003361028060405234801562000011575f80fd5b506040516200353e3803806200353e8339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613128620004165f395f50505f50505f61099201525f50505f818161025f0152611fc901525f81816118290152818161188c01528181611bb901528181611bf501528181611de60152611fa301525f81816105500152611f7d01525f61140b01525f61156001525f818161070d015261153401525f50505f81816105710152611fef01525f818161064b015261271201525f81816101e2015281816104160152818161048d01528181610501015281816105cc015261060401525f50505f818161109d015281816110e6015281816122bd01528181612306015281816123db015281816124840152818161256a015261261301526131285ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c8063074a6de914610043578063414f826d1461006f578063cbc1343414610084575b5f80fd5b610056610051366004612be3565b610097565b6040805192835260208301919091520160405180910390f35b61008261007d366004612c35565b6100b1565b005b610056610092366004612be3565b6100bf565b5f806100a48585856100cc565b915091505b935093915050565b6100bb828261018e565b5050565b5f806100a485858561024a565b5f806100d6610398565b6100df836103c0565b5f6100e86103f8565b90506100ff6100f561040f565b826004600161043a565b5061010d3387838888610a9e565b909350915061011f6020850185612c69565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561015d60408b0160208c01612c91565b61016a60408c018c612cac565b60405161017c96959493929190612d17565b60405180910390a3506100a960015f55565b610196610398565b5f61019f6103f8565b5f848152600860205260409020600101549091506001600160801b0316156101d2576101cb8183610bdd565b5050610241565b5f6101db61040f565b90506102077f000000000000000000000000000000000000000000000000000000000000000085612d64565b15158061021357508381105b156102315760405163ecd29e8160e01b815260040160405180910390fd5b61023d8483855f61043a565b5050505b6100bb60015f55565b5f80610254610398565b61025d836103c0565b7f000000000000000000000000000000000000000000000000000000000000000085101561029e5760405163211ddda360e11b815260040160405180910390fd5b5f6102a76103f8565b90506102b46100f561040f565b506102c05f3388610dcd565b6102db600360f81b6102d56020870187612c69565b88610ea4565b5f6102f56102ec6020870187612c69565b88848989610a9e565b90945090506103048188612d8b565b92505f61031083610f41565b5090506103206020870187612c69565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761035e60408d0160208e01612c91565b8a888e80604001906103709190612cac565b604051610384989796959493929190612d9e565b60405180910390a35050506100a960015f55565b60025f54036103ba57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f6103ce6020830183612c69565b6001600160a01b0316036103f55760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f61040a670de0b6b3a7640000611083565b905090565b5f61040a427f0000000000000000000000000000000000000000000000000000000000000000611180565b5f84815260086020526040812060018101546001600160801b031615158061046157504286115b1561047a57600101546001600160801b03169050610a96565b5f805f61048561040f565b90505f6104b27f00000000000000000000000000000000000000000000000000000000000000008b612de5565b90505b81811015610526575f818152600860205260409020600101546001600160801b031680156104fe575f828152600860205260409020549094506001600160801b03169250610526565b507f0000000000000000000000000000000000000000000000000000000000000000016104b5565b835f036105985788935061059561053b611195565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006111b5565b92505b506105a2836111d4565b6001850180546001600160801b0319166001600160801b03929092169190911790556105f86105f17f00000000000000000000000000000000000000000000000000000000000000008b612d8b565b8a84611201565b610636896106306106297f000000000000000000000000000000000000000000000000000000000000000083612de5565b429061133a565b84611201565b61063f8861134e565b505f90506008816106707f00000000000000000000000000000000000000000000000000000000000000008d612d8b565b815260208101919091526040015f908120600101546001600160801b0316915061069b60028c6114eb565b5f818152600b60205260408120549192508c8c83156107dc57600192505f806106c786898d865f61151f565b915091508060095f8282546106dc9190612de5565b909155506106f79050865f846106f1816115ec565b88611615565b6107018183612de5565b915061073186838a8e877f000000000000000000000000000000000000000000000000000000000000000061178c565b915061074561074083856117d5565b6117e9565b600680546002906107669084906201000090046001600160701b0316612df8565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610793826111d4565b600680546010906107b5908490600160801b90046001600160801b0316612e18565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f6107e86001846114eb565b5f818152600b602052604090205490915080156108f357600194505f80610813838b8f88600161151f565b915091508060095f8282546108289190612de5565b909155506108439050835f8461083d816115ec565b8a611812565b61084d8183612d8b565b915061085c61074083876117d5565b6006805460029061087d9084906201000090046001600160701b0316612df8565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108aa826111d4565b600680546010906108cc908490600160801b90046001600160801b0316612e18565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b841561092c5761091e610905876115ec565b61090e836115ec565b6109189190612e38565b5f611a02565b8e6109298482610bdd565b50505b5f61093684610f41565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109ec573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a109190612e57565b90506001600160a01b03811615610a8457610a815a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190611a41565b50505b509b9d50505050505050505050505050505b949350505050565b5f80610aa985611ac7565b505060075485906001600160801b031680821115610ace57806001600160801b031691505b815f03610ae1575f809250925050610bd3565b610af0600360f81b8984610dcd565b6007545f90610b159084906001600160801b03600160801b9091048116908516611ad3565b9050610b20836111d4565b610b2a9083612e72565b600780546001600160801b0319166001600160801b0392909216919091179055610b53816111d4565b60078054601090610b75908490600160801b90046001600160801b0316612e72565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ba4818887611aee565b9350610bb08684611b84565b841015610bd05760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610c27916001600160801b031690612d8b565b9050805f03610c3a576001915050610dc7565b5f610c4485611b98565b9050805f03610c5857600192505050610dc7565b5f80610c65838589611c33565b9150915080610c7a575f945050505050610dc7565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610cb5929190612f10565b6040805180830381865af4158015610ccf573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cf39190612f85565b91509150610d11610d03826115ec565b610d0c90612fa7565b611da0565b925082610d26575f9650505050505050610dc7565b610d2f826111d4565b600780545f90610d499084906001600160801b0316612e18565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d76816111d4565b60078054601090610d98908490600160801b90046001600160801b0316612e18565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610e0f57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610e51908490612d8b565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290610ed5908490612de5565b90915550505f838152600b602052604081208054839290610ef7908490612de5565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610e97565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610f6887611f34565b6040518263ffffffff1660e01b8152600401610f849190612fc1565b6040805180830381865af4158015610f9e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fc29190612fd0565b9150915080610fd757505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161103c91612de5565b6110469190612d8b565b9050805f0361105c57505f958695509350505050565b5f80871161106a575f611075565b611075848884611ad3565b976001975095505050505050565b5f8073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016110d157504761115a565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611133573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111579190612ffe565b90505b600f545f03611169575f611179565b600f546111799084908390611ad3565b9392505050565b5f61118b8284612d64565b6111799084612d8b565b6002546004545f9161040a916001600160801b0390911690600f0b61206e565b5f6111cb826111c5858888611ad3565b90612093565b95945050505050565b5f6001600160801b038211156111fd57604051630f0af95160e11b815260040160405180910390fd5b5090565b5f83815260086020526040902054600160801b90046001600160801b031680830361122c5750505050565b5f848152600860205260408120546001600160801b03169081900361128457611254836111d4565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611301565b6112d56112d0670de0b6b3a764000061129d8886612d8b565b6112a79190613015565b85670de0b6b3a76400006112bb878a612d8b565b6112c59190613015565b859291906001612102565b6111d4565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61130a846111d4565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f8183116113485782611179565b50919050565b6006545f908190611370908490600160801b90046001600160801b03166117d5565b6006546201000090046001600160701b031692509050818111156114e6575f6113998383612d8b565b90506113a86112d0828661219c565b600680546010906113ca908490600160801b90046001600160801b0316612e72565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61140285836121b090919063ffffffff16565b90505f61142f827f00000000000000000000000000000000000000000000000000000000000000006117d5565b90508060095f8282546114429190612de5565b9091555061145290508183612d8b565b915061145d826111d4565b600280545f906114779084906001600160801b0316612e18565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114a4826121c4565b600480545f906114b8908490600f0b61302c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b038211156115145760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f8061152b87856121b0565b91505f611558837f00000000000000000000000000000000000000000000000000000000000000006117d5565b9050611584817f00000000000000000000000000000000000000000000000000000000000000006117d5565b915083156115a7576115968282612d8b565b6115a09084612d8b565b92506115be565b6115b18282612d8b565b6115bb9084612de5565b92505b868610156115e1576115d1838789611ad3565b92506115de828789611ad3565b91505b509550959350505050565b5f6001600160ff1b038211156111fd5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b031661165d6112d082611641670de0b6b3a764000086613015565b600554600160801b90046001600160801b031691908a5f612102565b600580546001600160801b03928316600160801b029216919091179055611683866111d4565b61168d9082612e72565b600480546001600160801b03928316600160801b0292169190911790556116b3846111d4565b600280545f906116cd9084906001600160801b0316612e18565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116fa836121ed565b600480545f9061170e908490600f0b61302c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061173e856111d4565b60028054601090611760908490600160801b90046001600160801b0316612e72565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f806117a38461179d8a888a611ad3565b906121b0565b90506117b0888486611ad3565b6117ba9082612de5565b9050868111156117ca5786810391505b509695505050505050565b5f6111798383670de0b6b3a7640000611ad3565b5f6001600160701b038211156111fd5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061185457507f00000000000000000000000000000000000000000000000000000000000000006118528583612d8b565b105b1561186157611861612228565b6004549084900390600f0b6118768482612e38565b905083611882866115ec565b1380156118b757507f00000000000000000000000000000000000000000000000000000000000000006118b5838361206e565b105b156118c4576118c4612228565b600354600160801b90046001600160801b03166119056112d0826118f0670de0b6b3a764000088613015565b6005546001600160801b031691908c5f612102565b600580546001600160801b0319166001600160801b039290921691909117905561192f8882612d8b565b905061193a816111d4565b600380546001600160801b03928316600160801b029216919091179055611960836111d4565b600280546001600160801b0319166001600160801b0392909216919091179055611989826121ed565b600480546001600160801b0319166001600160801b03929092169190911790556119b2876111d4565b600280546010906119d4908490600160801b90046001600160801b0316612e18565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611a1d906112d0906001600160801b03168484612241565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f60605f805f8661ffff1667ffffffffffffffff811115611a6457611a64613059565b6040519080825280601f01601f191660200182016040528015611a8e576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115611aae578692505b828152825f602083013e90999098509650505050505050565b5f610dc7826004610bdd565b5f825f190484118302158202611ae7575f80fd5b5091020490565b5f80611afa85856117d5565b9050611b05816122a3565b9450845f03611b17575f915050611179565b849150611b2a6040840160208501612c91565b15611b5957611b5285611b406020860186612c69565b611b4d6040870187612cac565b612389565b9150611b7c565b611b7c85611b6a6020860186612c69565b611b776040870187612cac565b612519565b509392505050565b5f6111798383670de0b6b3a76400006126a6565b6003545f908190611bb2906001600160801b03168461219c565b9050611bde7f000000000000000000000000000000000000000000000000000000000000000082612de5565b6002546001600160801b03161115611348576002547f000000000000000000000000000000000000000000000000000000000000000090611c299083906001600160801b0316612d8b565b6111799190612d8b565b611c3b612b44565b5f80611c4684611f34565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611c809190612fc1565b6040805180830381865af4158015611c9a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611cbe9190612fd0565b9350905082611cd257505f91506100a99050565b5f611cf8611cf38461016001518561014001516117d590919063ffffffff16565b6115ec565b611d18611cf3856101200151866101000151611b8490919063ffffffff16565b611d229190612e38565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611e56573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e7a919061306d565b935093509350935080611e9557505f98975050505050505050565b868414611ec657611ea5846111d4565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611ef757611ed6836121ed565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611f2557611f07826111d4565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611f3c612b8e565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161203491166126c9565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612066929004166126c9565b905292915050565b5f8061207a848461273d565b90925090508061208c5761208c612228565b5092915050565b5f815f036120aa5750670de0b6b3a7640000610dc7565b825f036120b857505f610dc7565b5f6120c2836115ec565b90505f6120d66120d1866115ec565b612778565b90508181026120ed670de0b6b3a7640000826130ab565b90506120f88161299d565b9695505050505050565b5f825f036121115750846111cb565b8115612163576121426121248487612de5565b61212e85876117d5565b612138888a6117d5565b61179d9190612de5565b90505f61214f858861133a565b90508082101561215d578091505b506111cb565b82850361217157505f6111cb565b6120f861217e8487612d8b565b6121888587611b84565b612192888a6117d5565b61179d9190612d8b565b5f61117983670de0b6b3a7640000846126a6565b5f61117983670de0b6b3a764000084611ad3565b5f60016001607f1b038211156111fd5760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b031982128061220a575060016001607f1b0382135b156111fd5760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b5f8061224d845f612b2f565b612257845f612b2f565b6122619190612e38565b90505f81131561227c576122758186612de5565b945061229a565b5f81121561229a5761228d81612fa7565b6122979086612d8b565b94505b50929392505050565b5f8073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016122f157504761237a565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612353573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906123779190612ffe565b90505b600f5461117990849083611ad3565b5f600f548511612399578461239d565b600f545b94505f6123a986611083565b905085600f5f8282546123bc9190612d8b565b909155505f905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161245e576040516001600160a01b0387169083905f81818185875af1925050503d805f811461244e576040519150601f19603f3d011682016040523d82523d5f602084013e612453565b606091505b5050809150506124f1565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303815f875af11580156124ca573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906124ee91906130d7565b90505b8061250f576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b600f548411612528578361252c565b600f545b93505f61253885611083565b905084600f5f82825461254b9190612d8b565b909155505f905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016125ed576040516001600160a01b0386169083905f81818185875af1925050503d805f81146125dd576040519150601f19603f3d011682016040523d82523d5f602084013e6125e2565b606091505b505080915050612680565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303815f875af1158015612659573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061267d91906130d7565b90505b8061269e576040516312171d8360e31b815260040160405180910390fd5b505050505050565b5f825f1904841183021582026126ba575f80fd5b50910281810615159190040190565b5f80670de0b6b3a76400006126dc61040f565b6126e69190613015565b90508083116126f5575f6126ff565b6126ff8184612d8b565b9150611179612736670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613015565b83906121b0565b5f805f8361274a866115ec565b6127549190612e38565b90505f81121561276a575f809250925050612771565b9150600190505b9250929050565b5f8082136127995760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061281c9084901c6115ec565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e1982136129b657505f919050565b680755bf798b4a1bf1e582126129df576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906120f874029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6115ec565b5f818313612b3d5781611179565b5090919050565b604051806101200160405280612b58612b8e565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f60608486031215612bf5575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115612c19575f80fd5b840160608187031215612c2a575f80fd5b809150509250925092565b5f8060408385031215612c46575f80fd5b50508035926020909101359150565b6001600160a01b03811681146103f5575f80fd5b5f60208284031215612c79575f80fd5b813561117981612c55565b80151581146103f5575f80fd5b5f60208284031215612ca1575f80fd5b813561117981612c84565b5f808335601e19843603018112612cc1575f80fd5b83018035915067ffffffffffffffff821115612cdb575f80fd5b602001915036819003821315612771575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201525f612d4460a083018486612cef565b98975050505050505050565b634e487b7160e01b5f52601260045260245ffd5b5f82612d7257612d72612d50565b500690565b634e487b7160e01b5f52601160045260245ffd5b81810381811115610dc757610dc7612d77565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f612dd760e083018486612cef565b9a9950505050505050505050565b80820180821115610dc757610dc7612d77565b6001600160701b0381811683821601908082111561208c5761208c612d77565b6001600160801b0381811683821601908082111561208c5761208c612d77565b8181035f83128015838313168383128216171561208c5761208c612d77565b5f60208284031215612e67575f80fd5b815161117981612c55565b6001600160801b0382811682821603908082111561208c5761208c612d77565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050612f23828551612e92565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215612f96575f80fd5b505080516020909101519092909150565b5f600160ff1b8201612fbb57612fbb612d77565b505f0390565b6101808101610dc78284612e92565b5f8060408385031215612fe1575f80fd5b825191506020830151612ff381612c84565b809150509250929050565b5f6020828403121561300e575f80fd5b5051919050565b8082028115828204841417610dc757610dc7612d77565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610dc757610dc7612d77565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215613080575f80fd5b84519350602085015192506040850151915060608501516130a081612c84565b939692955090935050565b5f826130b9576130b9612d50565b600160ff1b82145f19841416156130d2576130d2612d77565b500590565b5f602082840312156130e7575f80fd5b815161117981612c8456fea2646970667358221220447241d7c17f715a7a63f28f726648ecebf427bf0f52c23015bdee4f602c749c64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "PERMIT_TYPEHASH()": "30adf81f",
  "__external_transferFrom(uint256,address,address,uint256,address)": "58af4a0a",
  "__setBalanceOf(uint256,address,uint256)": "94a97cdb",
  "accrue(uint256,int256)": "68096239",
  "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
  "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
  "burn(uint256,address,uint256)": "9eea5f66",
  "calculateFeesGivenBonds(uint256,uint256,uint256,uint256)": "22d5506b",
  "calculateFeesGivenShares(uint256,uint256,uint256)": "71f88b7c",
  "calculateIdleShareReserves(uint256)": "b1b4b170",
  "calculateOpenLong(uint256,uint256)": "9bd33498",
  "calculateTimeRemaining(uint256)": "68c2ecb8",
  "calculateTimeRemainingScaled(uint256)": "ca6d38f7",
  "checkpoint(uint256,uint256)": "414f826d",
  "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
  "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
  "collectGovernanceFee((address,bool,bytes))": "3e691db9",
  "domainSeparator()": "f698da25",
  "getTotalShares()": "d5002f2e",
  "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
  "latestCheckpoint()": "907c0f92",
  "mint(uint256,address,uint256)": "836a1040",
  "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
  "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070",
  "pause(bool)": "02329a29",
  "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
  "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
  "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434",
  "setApproval(uint256,address,uint256)": "9cd241af",
  "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
  "setApprovalForAll(address,bool)": "a22cb465",
  "setGovernance(address)": "ab033ea9",
  "setLongExposure(uint128)": "b4f8da39",
  "setMarketState((uint128,uint128,uint128,uint128,int128,uint128,uint128,uint128,bool,bool,uint112,uint128))": "f45cf2e0",
  "setPauser(address,bool)": "7180c8ca",
  "setReserves(uint128,uint128)": "702db0eb",
  "setTotalShares(uint256)": "a77384c1",
  "sweep(address)": "01681a62",
  "target0()": "21b57d53",
  "target1()": "eac3e799",
  "target2()": "a6e8a859",
  "target3()": "d899e112",
  "target4()": "f3f70707",
  "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
  "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
  "updateLiquidity(int256)": "8120a3e2"
} as const
};
