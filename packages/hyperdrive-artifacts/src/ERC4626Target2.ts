export const ERC4626Target2 = {
  name: 'ERC4626Target2' as const,
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
    "name": "openLong",
    "inputs": [
      {
        "name": "_amount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minOutput",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minVaultSharePrice",
        "type": "uint256",
        "internalType": "uint256"
      },
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
        "name": "_bondAmount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_maxDeposit",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minVaultSharePrice",
        "type": "uint256",
        "internalType": "uint256"
      },
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
    "name": "DistributeExcessIdleFailed",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ExpInvalidExponent",
    "inputs": []
  },
  {
    "type": "error",
    "name": "FailedInnerCall",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InsufficientLiquidity",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidTimestamp",
    "inputs": []
  },
  {
    "type": "error",
    "name": "LnInvalidInput",
    "inputs": []
  },
  {
    "type": "error",
    "name": "MinimumSharePrice",
    "inputs": []
  },
  {
    "type": "error",
    "name": "MinimumTransactionAmount",
    "inputs": []
  },
  {
    "type": "error",
    "name": "NotPayable",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OutputLimit",
    "inputs": []
  },
  {
    "type": "error",
    "name": "PoolIsPaused",
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
    "name": "TransferFailed",
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
    "name": "UnsafeCastToUint112",
    "inputs": []
  },
  {
    "type": "error",
    "name": "UnsafeCastToUint128",
    "inputs": []
  }
] as const,
  bytecode: '0x61028060405234801562000011575f80fd5b5060405162004256380380620042568339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613db6620004a05f395f50505f50505f610c2801525f50505f818160f9015281816103020152612e0701525f81816114e601528181611d2601528181611d8901528181612510015281816129f701528181612a3301528181612c240152612de101525f81816107e601528181610d8201528181610dc401528181610eb60152818161131c0152818161137a0152612dbb01525f61195001525f8181611a7101528181612601015281816126790152612f1f01525f81816109a301528181610e370152818161141501528181611a45015261264d01525f8181610e16015281816125cd0152612edb01525f818161080701528181610d6001528181610de501528181610ed7015281816112fa0152818161139b0152612e2d01525f81816101d301528181610396015281816108e101526134a601525f81816106a7015281816107230152818161079701528181610862015261089a01525f818161146a015281816116af0152818161172801526117b601525f818161168201526116e30152613db65ff3fe608060405260043610610028575f3560e01c8063cba2e58d1461002c578063dbbe807014610058575b5f80fd5b61003f61003a36600461383a565b61006b565b6040805192835260208301919091520160405180910390f35b61003f61006636600461383a565b610087565b5f8061007986868686610095565b915091505b94509492505050565b5f80610079868686866102bc565b5f8061009f610531565b600654610100900460ff16156100c8576040516321081abf60e01b815260040160405180910390fd5b6100d0610559565b6100d98361057a565b5f806100e588866105b2565b90925090505f6100f58383610683565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101385760405163211ddda360e11b815260040160405180910390fd5b86821015610159576040516342af972b60e01b815260040160405180910390fd5b5f6101626106a0565b90506101728184600460016106d0565b505f805f6101808787610d34565b919a5091945090925090508b8810156101ac5760405163c972651760e01b815260040160405180910390fd5b8160095f8282546101bd91906138a8565b909155506101ce9050844283610f13565b6101f87f0000000000000000000000000000000000000000000000000000000000000000856138a8565b98506102068389888c61104c565b5f61021260018b6111e3565b905061022b8161022560208e018e6138cf565b8b611217565b8d8a8a898e8561023e60208301836138cf565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a86888661027b60408801602089016138f7565b8961028960408a018a613912565b60405161029c979695949392919061397d565b60405180910390a350909b50505050505050505050505061007e60015f55565b5f806102c6610531565b600654610100900460ff16156102ef576040516321081abf60e01b815260040160405180910390fd5b6102f7610559565b6103008361057a565b7f00000000000000000000000000000000000000000000000000000000000000008610156103415760405163211ddda360e11b815260040160405180910390fd5b5f61034a6112bc565b90508481101561036d576040516342af972b60e01b815260040160405180910390fd5b5f6103766106a0565b90505f61038e6103846106a0565b84600460016106d0565b90505f6103bb7f0000000000000000000000000000000000000000000000000000000000000000846138a8565b90505f805f806103cc8e89886112ce565b60098054949850929650909450925083915f906103ea9084906138a8565b909155506103fb9050874283610f13565b61040d610408858a611450565b611464565b6104189060016138a8565b9350505f61042784898d61148f565b9050808d101561044a5760405163c972651760e01b815260040160405180910390fd5b610454818c6105b2565b508e905061046481858b896114c0565b5f6104706002886111e3565b90508c61048a8261048460208401846138cf565b85611217565b858b868461049b60208601866138cf565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d860408b0160208c016138f7565b6104ec896104e68a8d6139bd565b90610683565b8d6104fa60408e018e613912565b60405161050e9897969594939291906139d0565b60405180910390a350989d50939b50505050505050505050505061007e60015f55565b60025f540361055357604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b341561057857604051631574f9f360e01b815260040160405180910390fd5b565b5f61058860208301836138cf565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b815f806105c560408501602086016138f7565b156105ea576105e0856105db6040870187613912565b611673565b9093509050610602565b5034610602856105fd6040870187613912565b6117a9565b61060a6112bc565b9150801561067a576040515f90339083908381818185875af1925050503d805f8114610651576040519150601f19603f3d011682016040523d82523d5f602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f6106978383670de0b6b3a76400006117e3565b90505b92915050565b5f6106cb427f00000000000000000000000000000000000000000000000000000000000000006117fe565b905090565b5f84815260086020526040812060018101546001600160801b03161515806106f757504286115b1561071057600101546001600160801b03169050610d2c565b5f805f61071b6106a0565b90505f6107487f00000000000000000000000000000000000000000000000000000000000000008b6138a8565b90505b818110156107bc575f818152600860205260409020600101546001600160801b03168015610794575f828152600860205260409020549094506001600160801b031692506107bc565b507f00000000000000000000000000000000000000000000000000000000000000000161074b565b835f0361082e5788935061082b6107d1611813565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611833565b92505b5061083883611852565b6001850180546001600160801b0319166001600160801b039290921691909117905561088e6108877f00000000000000000000000000000000000000000000000000000000000000008b6139bd565b8a84610f13565b6108cc896108c66108bf7f0000000000000000000000000000000000000000000000000000000000000000836138a8565b429061187f565b84610f13565b6108d588611893565b505f90506008816109067f00000000000000000000000000000000000000000000000000000000000000008d6139bd565b815260208101919091526040015f908120600101546001600160801b0316915061093160028c6111e3565b5f818152600b60205260408120549192508c8c8315610a7257600192505f8061095d86898d865f611a30565b915091508060095f82825461097291906138a8565b9091555061098d9050865f8461098781611afd565b88611b26565b61099781836138a8565b91506109c786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611c9d565b91506109db6109d68385610683565b611ce6565b600680546002906109fc9084906201000090046001600160701b0316613a17565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a2982611852565b60068054601090610a4b908490600160801b90046001600160801b0316613a37565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610a7e6001846111e3565b5f818152600b60205260409020549091508015610b8957600194505f80610aa9838b8f886001611a30565b915091508060095f828254610abe91906138a8565b90915550610ad99050835f84610ad381611afd565b8a611d0f565b610ae381836139bd565b9150610af26109d68387610683565b60068054600290610b139084906201000090046001600160701b0316613a17565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b4082611852565b60068054601090610b62908490600160801b90046001600160801b0316613a37565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bc257610bb4610b9b87611afd565b610ba483611afd565b610bae9190613a57565b5f611eff565b8e610bbf8482611f3e565b50505b5f610bcc8461212d565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c82573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ca69190613a76565b90506001600160a01b03811615610d1a57610d175a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b0386169392919061226f565b50505b509b9d50505050505050505050505050505b949350505050565b5f805f805f610d41611813565b600254909150610da6908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006122f5565b600254909450610e09908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611833565b9150610e608785610e5b857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612320565b612384565b15610e6d57610e6d6123c5565b610e79878588856123de565b91965094509250670de0b6b3a7640000610efb610e9687846138a8565b600254610eb4908890600160801b90046001600160801b03166139bd565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611833565b1115610f0957610f096123c5565b5092959194509250565b5f83815260086020526040902054600160801b90046001600160801b0316808303610f3e5750505050565b5f848152600860205260408120546001600160801b031690819003610f9657610f6683611852565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611013565b610fe7610fe2670de0b6b3a7640000610faf88866139bd565b610fb99190613a91565b85670de0b6b3a7640000610fcd878a6139bd565b610fd79190613a91565b859291906001612426565b611852565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61101c84611852565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661108e610fe282611078670de0b6b3a764000086613a91565b6005546001600160801b03169190886001612426565b600580546001600160801b0319166001600160801b03929092169190911790556110b785611852565b600280545f906110d19084906001600160801b0316613a37565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110fe84611852565b60028054601090611120908490600160801b90046001600160801b0316613aa8565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061114d84611852565b6111579082613a37565b600380546001600160801b03808416600160801b02911617905590505f61117d836124ca565b905061119b8161118c87611afd565b6111969084613ac8565b611eff565b6111a48461250a565b6111b0576111b06123c5565b5f6111ba85612569565b9050806111da57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b5f6001600160f81b0382111561120c5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b0386168452909152812080548392906112489084906138a8565b90915550505f838152600b60205260408120805483929061126a9084906138a8565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6106cb670de0b6b3a7640000611464565b5f805f805f6112db611813565b600254909150611340908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612575565b93508761134d8589612595565b111561135b5761135b6123c5565b6002545f9081906113bf908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611833565b93506113d58a670de0b6b3a7640000868c6125a9565b509193509091506113e8905081836139bd565b6113f290876139bd565b95508861143f816114398d611407868c6139bd565b8d61141287826126b5565b877f00000000000000000000000000000000000000000000000000000000000000006126ca565b90612595565b975090945050505093509350935093565b5f61069783670de0b6b3a7640000846126ea565b5f61069a7f00000000000000000000000000000000000000000000000000000000000000008361270d565b5f6114a060408301602084016138f7565b156114ac5750826114b9565b6114b68484612776565b90505b9392505050565b6002546001600160801b0316838110156114dc576114dc6123c5565b60045490849003907f000000000000000000000000000000000000000000000000000000000000000090611514908390600f0b61278a565b1015611522576115226123c5565b60045461156c90610fe290600160801b90046001600160801b031661154f670de0b6b3a764000086613a91565b600554600160801b90046001600160801b03169190896001612426565b600580546001600160801b03928316600160801b02921691909117905561159281611852565b600280546001600160801b0319166001600160801b03929092169190911790556115bb85611852565b600280546010906115dd908490600160801b90046001600160801b0316613a37565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061160a85611852565b6004805460109061162c908490600160801b90046001600160801b0316613a37565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61165a836124ca565b905061119b8161166988611afd565b6111969084613a57565b5f806116aa6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330886127af565b61170a7f00000000000000000000000000000000000000000000000000000000000000006116d98760016138a8565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016919061281c565b604051636e553f6560e01b8152600481018690523060248201525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303815f875af1158015611776573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061179a9190613aef565b92505f9150505b935093915050565b6117de6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330866127af565b505050565b5f825f1904841183021582026117f7575f80fd5b5091020490565b5f6118098284613b1a565b61069790846139bd565b6002546004545f916106cb916001600160801b0390911690600f0b61278a565b5f611849826118438588886117e3565b906128ab565b95945050505050565b5f6001600160801b0382111561187b57604051630f0af95160e11b815260040160405180910390fd5b5090565b5f81831161188d5782610697565b50919050565b6006545f9081906118b5908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b03169250905081811115611a2b575f6118de83836139bd565b90506118ed610fe28286611450565b6006805460109061190f908490600160801b90046001600160801b0316613aa8565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611947858361277690919063ffffffff16565b90505f611974827f0000000000000000000000000000000000000000000000000000000000000000610683565b90508060095f82825461198791906138a8565b90915550611997905081836139bd565b91506119a282611852565b600280545f906119bc9084906001600160801b0316613a37565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506119e982612910565b600480545f906119fd908490600f0b613b2d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611a3c8785612776565b91505f611a69837f0000000000000000000000000000000000000000000000000000000000000000610683565b9050611a95817f0000000000000000000000000000000000000000000000000000000000000000610683565b91508315611ab857611aa782826139bd565b611ab190846139bd565b9250611acf565b611ac282826139bd565b611acc90846138a8565b92505b86861015611af257611ae28387896117e3565b9250611aef8287896117e3565b91505b509550959350505050565b5f6001600160ff1b0382111561187b5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611b6e610fe282611b52670de0b6b3a764000086613a91565b600554600160801b90046001600160801b031691908a5f612426565b600580546001600160801b03928316600160801b029216919091179055611b9486611852565b611b9e9082613aa8565b600480546001600160801b03928316600160801b029216919091179055611bc484611852565b600280545f90611bde9084906001600160801b0316613a37565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c0b83612939565b600480545f90611c1f908490600f0b613b2d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611c4f85611852565b60028054601090611c71908490600160801b90046001600160801b0316613aa8565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80611cb484611cae8a888a6117e3565b90612776565b9050611cc18884866117e3565b611ccb90826138a8565b905086811115611cdb5786810391505b509695505050505050565b5f6001600160701b0382111561187b5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611d5157507f0000000000000000000000000000000000000000000000000000000000000000611d4f85836139bd565b105b15611d5e57611d5e6123c5565b6004549084900390600f0b611d738482613a57565b905083611d7f86611afd565b138015611db457507f0000000000000000000000000000000000000000000000000000000000000000611db2838361278a565b105b15611dc157611dc16123c5565b600354600160801b90046001600160801b0316611e02610fe282611ded670de0b6b3a764000088613a91565b6005546001600160801b031691908c5f612426565b600580546001600160801b0319166001600160801b0392909216919091179055611e2c88826139bd565b9050611e3781611852565b600380546001600160801b03928316600160801b029216919091179055611e5d83611852565b600280546001600160801b0319166001600160801b0392909216919091179055611e8682612939565b600480546001600160801b0319166001600160801b0392909216919091179055611eaf87611852565b60028054601090611ed1908490600160801b90046001600160801b0316613a37565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611f1a90610fe2906001600160801b03168484612974565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611f88916001600160801b0316906139bd565b9050805f03611f9b57600191505061069a565b5f611fa5856129d6565b9050805f03611fb95760019250505061069a565b5f80611fc6838589612a71565b9150915080611fdb575f94505050505061069a565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401612016929190613bd8565b6040805180830381865af4158015612030573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120549190613c4d565b9150915061207261206482611afd565b61206d90613c6f565b612bde565b925082612087575f965050505050505061069a565b61209082611852565b600780545f906120aa9084906001600160801b0316613a37565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506120d781611852565b600780546010906120f9908490600160801b90046001600160801b0316613a37565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61215487612d72565b6040518263ffffffff1660e01b81526004016121709190613c89565b6040805180830381865af415801561218a573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906121ae9190613c98565b91509150806121c357505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b031691612228916138a8565b61223291906139bd565b9050805f0361224857505f958695509350505050565b5f808711612256575f612261565b6122618488846117e3565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561229257612292613cc6565b6040519080825280601f01601f1916602001820160405280156122bc576020820181803683370190505b5090505f808751602089018b8e8ef191503d9250868311156122dc578692505b828152825f602083013e90999098509650505050505050565b5f61231587878761230e88670de0b6b3a76400006139bd565b8787612eac565b979650505050505050565b5f6114b661236061233984670de0b6b3a76400006139bd565b611439670de0b6b3a764000061234f818a611450565b61235991906139bd565b8790612595565b61237290670de0b6b3a76400006138a8565b611cae84670de0b6b3a76400006139bd565b5f806123ba85612392611813565b61239c91906138a8565b600254610eb4908790600160801b90046001600160801b03166139bd565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f805f805f6123ee898789612ece565b90925090506123fd82896139bd565b97505f61240b82888a6117e3565b9050612417818b6139bd565b9a989950979650505050505050565b5f825f03612435575084611849565b81156124875761246661244884876138a8565b6124528587610683565b61245c888a610683565b611cae91906138a8565b90505f612473858861187f565b905080821015612481578091505b50611849565b82850361249557505f611849565b6124c06124a284876139bd565b6124ac8587612595565b6124b6888a610683565b611cae91906139bd565b9695505050505050565b5f6124ef600b5f6124dc6002866111e3565b81526020019081526020015f2054611afd565b612500600b5f6124dc6001876111e3565b61069a9190613a57565b5f6125357f000000000000000000000000000000000000000000000000000000000000000083612595565b60035461254b91906001600160801b03166138a8565b600254612561906001600160801b031684610683565b101592915050565b5f61069a826004611f3e565b5f61231587878761258e88670de0b6b3a76400006139bd565b8787612f4d565b5f6106978383670de0b6b3a76400006126ea565b5f8080806125f987866125f28b6114396125cb8c670de0b6b3a76400006139bd565b7f000000000000000000000000000000000000000000000000000000000000000090612595565b91906126ea565b9350612625847f0000000000000000000000000000000000000000000000000000000000000000610683565b91505f61264561263d89670de0b6b3a76400006139bd565b8a90886126ea565b9050612671817f0000000000000000000000000000000000000000000000000000000000000000612595565b935061269d847f0000000000000000000000000000000000000000000000000000000000000000610683565b6126a790846138a8565b915050945094509450949050565b5f8183116126c35781610697565b5090919050565b5f806126e1846126db8a888a6126ea565b90611450565b9050611cc18884865b5f825f1904841183021582026126fe575f80fd5b50910281810615159190040190565b6040516303d1689d60e11b8152600481018290525f906001600160a01b038416906307a2d13a90602401602060405180830381865afa158015612752573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106979190613aef565b5f61069783670de0b6b3a7640000846117e3565b5f806127968484612f5d565b9092509050806127a8576127a86123c5565b5092915050565b6040516001600160a01b0384811660248301528381166044830152606482018390526128169186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612f95565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261286d8482612ffb565b612816576040516001600160a01b0384811660248301525f60448301526128a191869182169063095ea7b3906064016127e4565b6128168482612f95565b5f815f036128c25750670de0b6b3a764000061069a565b825f036128d057505f61069a565b5f6128da83611afd565b90505f6128ee6128e986611afd565b613098565b9050818102612905670de0b6b3a764000082613cda565b90506124c0816132bd565b5f60016001607f1b0382111561187b5760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b0319821280612956575060016001607f1b0382135b1561187b5760405163a5353be560e01b815260040160405180910390fd5b5f80612980845f61344f565b61298a845f61344f565b6129949190613a57565b90505f8113156129af576129a881866138a8565b94506129cd565b5f8112156129cd576129c081613c6f565b6129ca90866139bd565b94505b50929392505050565b6003545f9081906129f0906001600160801b031684611450565b9050612a1c7f0000000000000000000000000000000000000000000000000000000000000000826138a8565b6002546001600160801b0316111561188d576002547f000000000000000000000000000000000000000000000000000000000000000090612a679083906001600160801b03166139bd565b6114b991906139bd565b612a7961379b565b5f80612a8484612d72565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612abe9190613c89565b6040805180830381865af4158015612ad8573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612afc9190613c98565b9350905082612b1057505f91506117a19050565b5f612b36612b3184610160015185610140015161068390919063ffffffff16565b611afd565b612b56612b3185610120015186610100015161259590919063ffffffff16565b612b609190613a57565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612c94573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612cb89190613d06565b935093509350935080612cd357505f98975050505050505050565b868414612d0457612ce384611852565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612d3557612d1483612939565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612d6357612d4582611852565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612d7a6137e5565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612e72911661345d565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612ea49290041661345d565b905292915050565b5f80612ebc8888888888886134d1565b909250905080611cdb57611cdb6123c5565b5f80612f178561143985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612f0d818c611450565b61143991906139bd565b9150612f43827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b5f80612ebc888888888888613595565b5f805f83612f6a86611afd565b612f749190613a57565b90505f811215612f8a575f80925092505061067c565b946001945092505050565b5f612fa96001600160a01b03841683613651565b905080515f14158015612fcd575080806020019051810190612fcb9190613d39565b155b156117de57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b5f805f846001600160a01b0316846040516130169190613d54565b5f604051808303815f865af19150503d805f811461304f576040519150601f19603f3d011682016040523d82523d5f602084013e613054565b606091505b509150915081801561307e57508051158061307e57508080602001905181019061307e9190613d39565b80156118495750505050506001600160a01b03163b151590565b5f8082136130b95760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061313c9084901c611afd565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e1982136132d657505f919050565b680755bf798b4a1bf1e582126132ff576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906124c074029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611afd565b5f8183136126c35781610697565b5f80670de0b6b3a76400006134706106a0565b61347a9190613a91565b9050808311613489575f613493565b61349381846139bd565b91506114b96134ca670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613a91565b8390612776565b5f805f6134e1898988888861365e565b90506134fb866118436134f48a8d6138a8565b8790610683565b9850613508858a866117e3565b98508881101561351e575f80925092505061358a565b888103670de0b6b3a764000081106135535761354c613545670de0b6b3a764000089611450565b82906128ab565b905061356b565b613568613545670de0b6b3a764000089612776565b90505b80891015613580575f8093509350505061358a565b8803925060019150505b965096945050505050565b5f805f6135a5898988888861365e565b90506135b586611843898b6138a8565b9750878110156135cb575f80925092505061358a565b8781036135d98186886126ea565b9050670de0b6b3a76400008110613606576135ff613545670de0b6b3a764000089611450565b905061361e565b61361b613545670de0b6b3a764000089612776565b90505b6136288186611450565b9050808a101561363f575f8093509350505061358a565b90980398600198509650505050505050565b606061069783835f61368c565b5f61366985856128ab565b61368261367a86611843868b612595565b8590856126ea565b6124c091906138a8565b6060814710156136b15760405163cd78605960e01b8152306004820152602401612ff2565b5f80856001600160a01b031684866040516136cc9190613d54565b5f6040518083038185875af1925050503d805f8114613706576040519150601f19603f3d011682016040523d82523d5f602084013e61370b565b606091505b50915091506124c086838360608261372b5761372682613772565b6114b9565b815115801561374257506001600160a01b0384163b155b1561376b57604051639996b31560e01b81526001600160a01b0385166004820152602401612ff2565b50806114b9565b8051156137825780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806137af6137e5565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f806080858703121561384d575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613878575f80fd5b850160608188031215613889575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561069a5761069a613894565b6001600160a01b03811681146105af575f80fd5b5f602082840312156138df575f80fd5b81356114b9816138bb565b80151581146105af575f80fd5b5f60208284031215613907575f80fd5b81356114b9816138ea565b5f808335601e19843603018112613927575f80fd5b83018035915067ffffffffffffffff821115613941575f80fd5b60200191503681900382131561067c575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201525f6139b060c083018486613955565b9998505050505050505050565b8181038181111561069a5761069a613894565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f613a0960e083018486613955565b9a9950505050505050505050565b6001600160701b038181168382160190808211156127a8576127a8613894565b6001600160801b038181168382160190808211156127a8576127a8613894565b8181035f8312801583831316838312821617156127a8576127a8613894565b5f60208284031215613a86575f80fd5b81516114b9816138bb565b808202811582820484141761069a5761069a613894565b6001600160801b038281168282160390808211156127a8576127a8613894565b8082018281125f831280158216821582161715613ae757613ae7613894565b505092915050565b5f60208284031215613aff575f80fd5b5051919050565b634e487b7160e01b5f52601260045260245ffd5b5f82613b2857613b28613b06565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069a5761069a613894565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050613beb828551613b5a565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613c5e575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613c8357613c83613894565b505f0390565b610180810161069a8284613b5a565b5f8060408385031215613ca9575f80fd5b825191506020830151613cbb816138ea565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f82613ce857613ce8613b06565b600160ff1b82145f1984141615613d0157613d01613894565b500590565b5f805f8060808587031215613d19575f80fd5b8451935060208501519250604085015191506060850151613889816138ea565b5f60208284031215613d49575f80fd5b81516114b9816138ea565b5f82515f5b81811015613d735760208186018101518583015201613d59565b505f92019182525091905056fea26469706673582212208a4ab4c94830f5d2444fc1295aa78da62a176036a4136e87b4edecc32d6b841164736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
  "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
} as const
};
