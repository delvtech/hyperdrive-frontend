export const MorphoBlueHyperdrive = {
  name: 'MorphoBlueHyperdrive' as const,
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
  bytecode: '0x6103c060405234801562000011575f80fd5b5060405162001bc638038062001bc6833981016040819052620000349162000784565b60015f81905588516001600160a01b0390811660809081526020808c0151831660a0908152918c01516101a052908b01516101c05260c0808c01516101e090815260e0808e015161020052610120808f0151909352610100808f0151909152610140808f0151909152908d01805151909252815190920151909152805160409081015161016052905160609081015161018052908b01518216610240528a01516102605288166102205281908a908a908a908a908a908a908a908a90620000fc898262000941565b506001600160a01b03948516610280529284166102a0529083166102c05282166102e052811661030052845181166103208190526020860151821661034052604086015182166103605260608601518216610380526080808701516103a0525162000171955090911692509050600162000181565b5050505050505050505062000a4b565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001db90859083906200024c16565b6200024657604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200023a918691620002f616565b620002468482620002f6565b50505050565b5f805f846001600160a01b03168460405162000269919062000a0d565b5f604051808303815f865af19150503d805f8114620002a4576040519150601f19603f3d011682016040523d82523d5f602084013e620002a9565b606091505b5091509150818015620002d7575080511580620002d7575080806020019051810190620002d7919062000a2a565b8015620002ed57505f856001600160a01b03163b115b95945050505050565b5f6200030c6001600160a01b0384168362000367565b905080515f141580156200033357508080602001905181019062000331919062000a2a565b155b156200036257604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200037683835f6200037d565b9392505050565b606081471015620003a45760405163cd78605960e01b815230600482015260240162000359565b5f80856001600160a01b03168486604051620003c1919062000a0d565b5f6040518083038185875af1925050503d805f8114620003fd576040519150601f19603f3d011682016040523d82523d5f602084013e62000402565b606091505b509092509050620004158683836200041f565b9695505050505050565b6060826200043857620004328262000483565b62000376565b81511580156200045057506001600160a01b0384163b155b156200047b57604051639996b31560e01b81526001600160a01b038516600482015260240162000359565b508062000376565b805115620004945780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b634e487b7160e01b5f52604160045260245ffd5b60405161020081016001600160401b0381118282101715620004ea57620004ea620004b0565b60405290565b604051601f8201601f191681016001600160401b03811182821017156200051b576200051b620004b0565b604052919050565b5f5b838110156200053f57818101518382015260200162000525565b50505f910152565b6001600160a01b0381168114620004ad575f80fd5b8051620005698162000547565b919050565b5f608082840312156200057f575f80fd5b604051608081016001600160401b0381118282101715620005a457620005a4620004b0565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f6102608284031215620005e7575f80fd5b620005f1620004c4565b9050620005fe826200055c565b81526200060e602083016200055c565b602082015262000621604083016200055c565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101606200068c8184016200055c565b90820152610180620006a08382016200055c565b908201526101a0620006b48382016200055c565b908201526101c0620006c88382016200055c565b908201526101e0620006dd848483016200056e565b9082015292915050565b5f60a08284031215620006f8575f80fd5b60405160a081016001600160401b03811182821017156200071d576200071d620004b0565b80604052508091508251620007328162000547565b81526020830151620007448162000547565b60208201526040830151620007598162000547565b604082015260608301516200076e8162000547565b6060820152608092830151920191909152919050565b5f805f805f805f805f6103e08a8c0312156200079e575f80fd5b89516001600160401b0380821115620007b5575f80fd5b818c0191508c601f830112620007c9575f80fd5b815181811115620007de57620007de620004b0565b620007f3601f8201601f1916602001620004f0565b91508082528d60208285010111156200080a575f80fd5b6200081d81602084016020860162000523565b5099506200083190508b60208c01620005d5565b9750620008426102808b016200055c565b9650620008536102a08b016200055c565b9550620008646102c08b016200055c565b9450620008756102e08b016200055c565b9350620008866103008b016200055c565b9250620008976103208b016200055c565b9150620008a98b6103408c01620006e7565b90509295985092959850929598565b600181811c90821680620008cd57607f821691505b602082108103620008ec57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200036257805f5260205f20601f840160051c81016020851015620009195750805b601f840160051c820191505b818110156200093a575f815560010162000925565b5050505050565b81516001600160401b038111156200095d576200095d620004b0565b62000975816200096e8454620008b8565b84620008f2565b602080601f831160018114620009ab575f8415620009935750858301515b5f19600386901b1c1916600185901b17855562000a05565b5f85815260208120601f198616915b82811015620009db57888601518255948401946001909101908401620009ba565b5085821015620009f957878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b5f825162000a2081846020870162000523565b9190910192915050565b5f6020828403121562000a3b575f80fd5b8151801515811462000376575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e05161030051610320516103405161036051610380516103a05161104162000b855f395f50505f50505f50505f50505f50505f81816105d30152818161063d015261073401525f818161054e0152818161076301526107c001525f8181610508015261095601525f81816105a001526106d201525f81816101ca015281816103820152818161060e0152818161066f015281816106a10152818161070501528181610796015281816107f001528181610925015261098901525f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50505f50506110415ff3fe6080604052600436106101b6575f3560e01c80639032c726116100eb578063d899e11211610089578063e44808bc11610063578063e44808bc14610570578063eac3e7991461058f578063f3f70707146105c2578063f698da25146105f5576101b6565b8063d899e1121461053d578063dbbe80701461052a578063ded06231146103bc576101b6565b8063a6e8a859116100c5578063a6e8a859146104f7578063ab033ea9146102bf578063cba2e58d1461052a578063cbc13434146102fa576101b6565b80639032c726146104b95780639cd241af146104d8578063a22cb46514610487576101b6565b806330adf81f116101585780634c2ac1d9116101325780634c2ac1d91461045a5780634ed2d6ac1461046d5780637180c8ca1461048757806377d05ff4146104a6576101b6565b806330adf81f146103e95780633e691db91461041c578063414f826d1461043b576101b6565b806317fad7fc1161019457806317fad7fc146103335780631c0f12b61461035257806321b57d531461037157806329b23fc1146103bc576101b6565b806301681a62146102bf57806302329a29146102e0578063074a6de9146102fa575b3480156101c1575f80fd5b505f3660605f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168585604051610202929190610a5d565b5f60405180830381855af49150503d805f811461023a576040519150601f19603f3d011682016040523d82523d5f602084013e61023f565b606091505b5091509150811561026357604051638bb0a34b60e01b815260040160405180910390fd5b5f61026d82610a6c565b90506001600160e01b03198116636e64089360e11b1461028f57815160208301fd5b8151600319810160048401908152926102b091810160200190602401610ad9565b80519650602001945050505050f35b3480156102ca575f80fd5b506102de6102d9366004610b98565b610609565b005b3480156102eb575f80fd5b506102de6102d9366004610bce565b348015610305575f80fd5b50610319610314366004610bf7565b610636565b604080519283526020830191909152015b60405180910390f35b34801561033e575f80fd5b506102de61034d366004610c8b565b61066a565b34801561035d575f80fd5b506102de61036c366004610d1a565b61069c565b34801561037c575f80fd5b506103a47f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161032a565b3480156103c7575f80fd5b506103db6103d6366004610d5f565b6106cc565b60405190815260200161032a565b3480156103f4575f80fd5b506103db7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b348015610427575f80fd5b506103db610436366004610db5565b6106ff565b348015610446575f80fd5b506102de610455366004610def565b61072f565b6103db610468366004610e0f565b61075d565b348015610478575f80fd5b506102de61036c366004610e6e565b348015610492575f80fd5b506102de6104a1366004610eb5565b610791565b6103db6104b4366004610bf7565b6107ba565b3480156104c4575f80fd5b506102de6104d3366004610ee8565b6107ec565b3480156104e3575f80fd5b506102de6104f2366004610f60565b610920565b348015610502575f80fd5b506103a47f000000000000000000000000000000000000000000000000000000000000000081565b610319610538366004610d5f565b61094f565b348015610548575f80fd5b506103a47f000000000000000000000000000000000000000000000000000000000000000081565b34801561057b575f80fd5b506102de61058a366004610f95565b610984565b34801561059a575f80fd5b506103a47f000000000000000000000000000000000000000000000000000000000000000081565b3480156105cd575f80fd5b506103a47f000000000000000000000000000000000000000000000000000000000000000081565b348015610600575f80fd5b506103db6109b5565b6106327f0000000000000000000000000000000000000000000000000000000000000000610a43565b5050565b5f806106617f0000000000000000000000000000000000000000000000000000000000000000610a43565b50935093915050565b6106937f0000000000000000000000000000000000000000000000000000000000000000610a43565b50505050505050565b6106c57f0000000000000000000000000000000000000000000000000000000000000000610a43565b5050505050565b5f6106f67f0000000000000000000000000000000000000000000000000000000000000000610a43565b50949350505050565b5f6107297f0000000000000000000000000000000000000000000000000000000000000000610a43565b50919050565b6107587f0000000000000000000000000000000000000000000000000000000000000000610a43565b505050565b5f6107877f0000000000000000000000000000000000000000000000000000000000000000610a43565b5095945050505050565b6107587f0000000000000000000000000000000000000000000000000000000000000000610a43565b5f6107e47f0000000000000000000000000000000000000000000000000000000000000000610a43565b509392505050565b5f807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108206109b5565b60405160248101919091527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b03808c1660648301528a16608482015288151560a482015260c4810188905260ff871660e4820152610104810186905261012481018590526101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b179052516108c99190610ff0565b5f60405180830381855af49150503d805f8114610901576040519150601f19603f3d011682016040523d82523d5f602084013e610906565b606091505b50915091508161091857805160208201fd5b805160208201f35b6109497f0000000000000000000000000000000000000000000000000000000000000000610a43565b50505050565b5f8061097a7f0000000000000000000000000000000000000000000000000000000000000000610a43565b5094509492505050565b6109ad7f0000000000000000000000000000000000000000000000000000000000000000610a43565b505050505050565b60408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681840152466060820152306080808301919091528351808303909101815260a0909101909252815191012090565b60605f80836001600160a01b03165f366040516108c99291905b818382375f9101908152919050565b805160208201516001600160e01b03198082169291906004831015610a9b5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b5f52604160045260245ffd5b5f5b83811015610ad1578181015183820152602001610ab9565b50505f910152565b5f60208284031215610ae9575f80fd5b815167ffffffffffffffff80821115610b00575f80fd5b818401915084601f830112610b13575f80fd5b815181811115610b2557610b25610aa3565b604051601f8201601f19908116603f01168101908382118183101715610b4d57610b4d610aa3565b81604052828152876020848701011115610b65575f80fd5b610b76836020830160208801610ab7565b979650505050505050565b6001600160a01b0381168114610b95575f80fd5b50565b5f60208284031215610ba8575f80fd5b8135610bb381610b81565b9392505050565b80358015158114610bc9575f80fd5b919050565b5f60208284031215610bde575f80fd5b610bb382610bba565b5f60608284031215610729575f80fd5b5f805f60608486031215610c09575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115610c2d575f80fd5b610c3986828701610be7565b9150509250925092565b5f8083601f840112610c53575f80fd5b50813567ffffffffffffffff811115610c6a575f80fd5b6020830191508360208260051b8501011115610c84575f80fd5b9250929050565b5f805f805f8060808789031215610ca0575f80fd5b8635610cab81610b81565b95506020870135610cbb81610b81565b9450604087013567ffffffffffffffff80821115610cd7575f80fd5b610ce38a838b01610c43565b90965094506060890135915080821115610cfb575f80fd5b50610d0889828a01610c43565b979a9699509497509295939492505050565b5f805f8060808587031215610d2d575f80fd5b843593506020850135610d3f81610b81565b92506040850135610d4f81610b81565b9396929550929360600135925050565b5f805f8060808587031215610d72575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115610d9d575f80fd5b610da987828801610be7565b91505092959194509250565b5f60208284031215610dc5575f80fd5b813567ffffffffffffffff811115610ddb575f80fd5b610de784828501610be7565b949350505050565b5f8060408385031215610e00575f80fd5b50508035926020909101359150565b5f805f805f60a08688031215610e23575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115610e55575f80fd5b610e6188828901610be7565b9150509295509295909350565b5f805f8060808587031215610e81575f80fd5b843593506020850135610e9381610b81565b9250604085013591506060850135610eaa81610b81565b939692955090935050565b5f8060408385031215610ec6575f80fd5b8235610ed181610b81565b9150610edf60208401610bba565b90509250929050565b5f805f805f805f60e0888a031215610efe575f80fd5b8735610f0981610b81565b96506020880135610f1981610b81565b9550610f2760408901610bba565b945060608801359350608088013560ff81168114610f43575f80fd5b9699959850939692959460a0840135945060c09093013592915050565b5f805f60608486031215610f72575f80fd5b833592506020840135610f8481610b81565b929592945050506040919091013590565b5f805f805f60a08688031215610fa9575f80fd5b853594506020860135610fbb81610b81565b93506040860135610fcb81610b81565b9250606086013591506080860135610fe281610b81565b809150509295509295909350565b5f8251611001818460208701610ab7565b919091019291505056fea26469706673582212200d8196f95a1a51f359d1eddbb91236c7cd2eb0ff49311c64d4bcb61e046c2a3064736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "PERMIT_TYPEHASH()": "30adf81f",
  "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
  "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
  "checkpoint(uint256,uint256)": "414f826d",
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
