export const StakingUSDSHyperdrive = {
  name: 'StakingUSDSHyperdrive' as const,
  abi: [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "__name",
        "type": "string",
        "internalType": "string"
      },
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
        "name": "_target0",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_target1",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_target2",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_target3",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_target4",
        "type": "address",
        "internalType": "address"
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
    "name": "claimRewards",
    "inputs": [],
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
    "name": "FailedInnerCall",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ReentrancyGuardReentrantCall",
    "inputs": []
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
    "name": "UnexpectedSuccess",
    "inputs": []
  }
] as const,
  bytecode: '0x61034060405234801562000011575f80fd5b5060405162001b5d38038062001b5d8339810160408190526200003491620006ac565b60015f81905588516001600160a01b0390811660809081526020808c0151831660a0908152918c01516101a052908b01516101c05260c0808c01516101e090815260e0808e015161020052610120808f0151909352610100808f0151909152610140808f0151909152908d01805151909252815190920151909152805160409081015161016052905160609081015161018052908b01518216610240528a01516102605288166102205281908a908a908a908a908a908a908a908a90620000fc898262000868565b506001600160a01b03948516610280529284166102a0529083166102c05282166102e05281166103005284811661032052608051620001449450169150839050600162000154565b5050505050505050505062000972565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001ae90859083906200021f16565b6200021957604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200020d918691620002c916565b620002198482620002c9565b50505050565b5f805f846001600160a01b0316846040516200023c919062000934565b5f604051808303815f865af19150503d805f811462000277576040519150601f19603f3d011682016040523d82523d5f602084013e6200027c565b606091505b5091509150818015620002aa575080511580620002aa575080806020019051810190620002aa919062000951565b8015620002c057505f856001600160a01b03163b115b95945050505050565b5f620002df6001600160a01b038416836200033a565b905080515f141580156200030657508080602001905181019062000304919062000951565b155b156200033557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200034983835f62000350565b9392505050565b606081471015620003775760405163cd78605960e01b81523060048201526024016200032c565b5f80856001600160a01b0316848660405162000394919062000934565b5f6040518083038185875af1925050503d805f8114620003d0576040519150601f19603f3d011682016040523d82523d5f602084013e620003d5565b606091505b509092509050620003e8868383620003f2565b9695505050505050565b6060826200040b57620004058262000456565b62000349565b81511580156200042357506001600160a01b0384163b155b156200044e57604051639996b31560e01b81526001600160a01b03851660048201526024016200032c565b508062000349565b805115620004675780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b634e487b7160e01b5f52604160045260245ffd5b60405161020081016001600160401b0381118282101715620004ba57620004ba62000480565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620004eb57620004eb62000480565b604052919050565b5f5b838110156200050f578181015183820152602001620004f5565b50505f910152565b80516001600160a01b03811681146200052e575f80fd5b919050565b5f6080828403121562000544575f80fd5b604051608081016001600160401b038111828210171562000569576200056962000480565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f6102608284031215620005ac575f80fd5b620005b662000494565b9050620005c38262000517565b8152620005d36020830162000517565b6020820152620005e66040830162000517565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101606200065181840162000517565b908201526101806200066583820162000517565b908201526101a06200067983820162000517565b908201526101c06200068d83820162000517565b908201526101e0620006a28484830162000533565b9082015292915050565b5f805f805f805f805f6103608a8c031215620006c6575f80fd5b89516001600160401b0380821115620006dd575f80fd5b818c0191508c601f830112620006f1575f80fd5b81518181111562000706576200070662000480565b6200071b601f8201601f1916602001620004c0565b91508082528d602082850101111562000732575f80fd5b62000745816020840160208601620004f3565b5099506200075990508b60208c016200059a565b97506200076a6102808b0162000517565b96506200077b6102a08b0162000517565b95506200078c6102c08b0162000517565b94506200079d6102e08b0162000517565b9350620007ae6103008b0162000517565b9250620007bf6103208b0162000517565b9150620007d06103408b0162000517565b90509295985092959850929598565b600181811c90821680620007f457607f821691505b6020821081036200081357634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200033557805f5260205f20601f840160051c81016020851015620008405750805b601f840160051c820191505b8181101562000861575f81556001016200084c565b5050505050565b81516001600160401b0381111562000884576200088462000480565b6200089c81620008958454620007df565b8462000819565b602080601f831160018114620008d2575f8415620008ba5750858301515b5f19600386901b1c1916600185901b1785556200092c565b5f85815260208120601f198616915b828110156200090257888601518255948401946001909101908401620008e1565b50858210156200092057878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b5f825162000947818460208701620004f3565b9190910192915050565b5f6020828403121562000962575f80fd5b8151801515811462000349575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e05161030051610320516110ca62000a935f395f61072001525f81816105f20152818161065c01526107c301525f818161056d015281816107f2015261084f01525f818161052701526109df01525f81816105bf01526106f101525f81816101d50152818161038d0152818161062d0152818161068e015281816106c001528181610794015281816108250152818161087f015281816109b40152610a1201525f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50506110ca5ff3fe6080604052600436106101c1575f3560e01c806377d05ff4116100f6578063cbc1343411610094578063e44808bc11610063578063e44808bc1461058f578063eac3e799146105ae578063f3f70707146105e1578063f698da2514610614576101c1565b8063cbc1343414610305578063d899e1121461055c578063dbbe807014610549578063ded06231146103c7576101c1565b8063a22cb465116100d0578063a22cb465146104a6578063a6e8a85914610516578063ab033ea9146102ca578063cba2e58d14610549576101c1565b806377d05ff4146104c55780639032c726146104d85780639cd241af146104f7576101c1565b806330adf81f11610163578063414f826d1161013d578063414f826d1461045a5780634c2ac1d9146104795780634ed2d6ac1461048c5780637180c8ca146104a6576101c1565b806330adf81f146103f4578063372500ab146104275780633e691db91461043b576101c1565b806317fad7fc1161019f57806317fad7fc1461033e5780631c0f12b61461035d57806321b57d531461037c57806329b23fc1146103c7576101c1565b806301681a62146102ca57806302329a29146102eb578063074a6de914610305575b3480156101cc575f80fd5b505f3660605f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161020d929190610ae6565b5f60405180830381855af49150503d805f8114610245576040519150601f19603f3d011682016040523d82523d5f602084013e61024a565b606091505b5091509150811561026e57604051638bb0a34b60e01b815260040160405180910390fd5b5f61027882610af5565b90506001600160e01b03198116636e64089360e11b1461029a57815160208301fd5b8151600319810160048401908152926102bb91810160200190602401610b62565b80519650602001945050505050f35b3480156102d5575f80fd5b506102e96102e4366004610c21565b610628565b005b3480156102f6575f80fd5b506102e96102e4366004610c57565b348015610310575f80fd5b5061032461031f366004610c80565b610655565b604080519283526020830191909152015b60405180910390f35b348015610349575f80fd5b506102e9610358366004610d14565b610689565b348015610368575f80fd5b506102e9610377366004610da3565b6106bb565b348015610387575f80fd5b506103af7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610335565b3480156103d2575f80fd5b506103e66103e1366004610de8565b6106eb565b604051908152602001610335565b3480156103ff575f80fd5b506103e67f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b348015610432575f80fd5b506102e961071e565b348015610446575f80fd5b506103e6610455366004610e3e565b61078e565b348015610465575f80fd5b506102e9610474366004610e78565b6107be565b6103e6610487366004610e98565b6107ec565b348015610497575f80fd5b506102e9610377366004610ef7565b3480156104b1575f80fd5b506102e96104c0366004610f3e565b610820565b6103e66104d3366004610c80565b610849565b3480156104e3575f80fd5b506102e96104f2366004610f71565b61087b565b348015610502575f80fd5b506102e9610511366004610fe9565b6109af565b348015610521575f80fd5b506103af7f000000000000000000000000000000000000000000000000000000000000000081565b610324610557366004610de8565b6109d8565b348015610567575f80fd5b506103af7f000000000000000000000000000000000000000000000000000000000000000081565b34801561059a575f80fd5b506102e96105a936600461101e565b610a0d565b3480156105b9575f80fd5b506103af7f000000000000000000000000000000000000000000000000000000000000000081565b3480156105ec575f80fd5b506103af7f000000000000000000000000000000000000000000000000000000000000000081565b34801561061f575f80fd5b506103e6610a3e565b6106517f0000000000000000000000000000000000000000000000000000000000000000610acc565b5050565b5f806106807f0000000000000000000000000000000000000000000000000000000000000000610acc565b50935093915050565b6106b27f0000000000000000000000000000000000000000000000000000000000000000610acc565b50505050505050565b6106e47f0000000000000000000000000000000000000000000000000000000000000000610acc565b5050505050565b5f6107157f0000000000000000000000000000000000000000000000000000000000000000610acc565b50949350505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633d18b9126040518163ffffffff1660e01b81526004015f604051808303815f87803b158015610776575f80fd5b505af1158015610788573d5f803e3d5ffd5b50505050565b5f6107b87f0000000000000000000000000000000000000000000000000000000000000000610acc565b50919050565b6107e77f0000000000000000000000000000000000000000000000000000000000000000610acc565b505050565b5f6108167f0000000000000000000000000000000000000000000000000000000000000000610acc565b5095945050505050565b6107e77f0000000000000000000000000000000000000000000000000000000000000000610acc565b5f6108737f0000000000000000000000000000000000000000000000000000000000000000610acc565b509392505050565b5f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108af610a3e565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b179052516109589190611079565b5f60405180830381855af49150503d805f8114610990576040519150601f19603f3d011682016040523d82523d5f602084013e610995565b606091505b5091509150816109a757805160208201fd5b805160208201f35b6107887f0000000000000000000000000000000000000000000000000000000000000000610acc565b5f80610a037f0000000000000000000000000000000000000000000000000000000000000000610acc565b5094509492505050565b610a367f0000000000000000000000000000000000000000000000000000000000000000610acc565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b60605f80836001600160a01b03165f366040516109589291905b818382375f9101908152919050565b805160208201516001600160e01b03198082169291906004831015610b245780818460040360031b1b83161693505b505050919050565b634e487b7160e01b5f52604160045260245ffd5b5f5b83811015610b5a578181015183820152602001610b42565b50505f910152565b5f60208284031215610b72575f80fd5b815167ffffffffffffffff80821115610b89575f80fd5b818401915084601f830112610b9c575f80fd5b815181811115610bae57610bae610b2c565b604051601f8201601f19908116603f01168101908382118183101715610bd657610bd6610b2c565b81604052828152876020848701011115610bee575f80fd5b610bff836020830160208801610b40565b979650505050505050565b6001600160a01b0381168114610c1e575f80fd5b50565b5f60208284031215610c31575f80fd5b8135610c3c81610c0a565b9392505050565b80358015158114610c52575f80fd5b919050565b5f60208284031215610c67575f80fd5b610c3c82610c43565b5f606082840312156107b8575f80fd5b5f805f60608486031215610c92575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115610cb6575f80fd5b610cc286828701610c70565b9150509250925092565b5f8083601f840112610cdc575f80fd5b50813567ffffffffffffffff811115610cf3575f80fd5b6020830191508360208260051b8501011115610d0d575f80fd5b9250929050565b5f805f805f8060808789031215610d29575f80fd5b8635610d3481610c0a565b95506020870135610d4481610c0a565b9450604087013567ffffffffffffffff80821115610d60575f80fd5b610d6c8a838b01610ccc565b90965094506060890135915080821115610d84575f80fd5b50610d9189828a01610ccc565b979a9699509497509295939492505050565b5f805f8060808587031215610db6575f80fd5b843593506020850135610dc881610c0a565b92506040850135610dd881610c0a565b9396929550929360600135925050565b5f805f8060808587031215610dfb575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115610e26575f80fd5b610e3287828801610c70565b91505092959194509250565b5f60208284031215610e4e575f80fd5b813567ffffffffffffffff811115610e64575f80fd5b610e7084828501610c70565b949350505050565b5f8060408385031215610e89575f80fd5b50508035926020909101359150565b5f805f805f60a08688031215610eac575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115610ede575f80fd5b610eea88828901610c70565b9150509295509295909350565b5f805f8060808587031215610f0a575f80fd5b843593506020850135610f1c81610c0a565b9250604085013591506060850135610f3381610c0a565b939692955090935050565b5f8060408385031215610f4f575f80fd5b8235610f5a81610c0a565b9150610f6860208401610c43565b90509250929050565b5f805f805f805f60e0888a031215610f87575f80fd5b8735610f9281610c0a565b96506020880135610fa281610c0a565b9550610fb060408901610c43565b945060608801359350608088013560ff81168114610fcc575f80fd5b9699959850939692959460a0840135945060c09093013592915050565b5f805f60608486031215610ffb575f80fd5b83359250602084013561100d81610c0a565b929592945050506040919091013590565b5f805f805f60a08688031215611032575f80fd5b85359450602086013561104481610c0a565b9350604086013561105481610c0a565b925060608601359150608086013561106b81610c0a565b809150509295509295909350565b5f825161108a818460208701610b40565b919091019291505056fea2646970667358221220148f01b3d5d9281e495e93c29dd46580ed72cd70f06b04f46203bd26f3718aad64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "PERMIT_TYPEHASH()": "30adf81f",
  "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
  "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
  "checkpoint(uint256,uint256)": "414f826d",
  "claimRewards()": "372500ab",
  "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
  "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
  "collectGovernanceFee((address,bool,bytes))": "3e691db9",
  "domainSeparator()": "f698da25",
  "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
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
  "setPauser(address,bool)": "7180c8ca",
  "sweep(address)": "01681a62",
  "target0()": "21b57d53",
  "target1()": "eac3e799",
  "target2()": "a6e8a859",
  "target3()": "d899e112",
  "target4()": "f3f70707",
  "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
  "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
} as const
};
