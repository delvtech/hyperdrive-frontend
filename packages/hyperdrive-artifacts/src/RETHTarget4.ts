export const RETHTarget4 = {
  name: 'RETHTarget4' as const,
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
    "name": "checkpoint",
    "inputs": [
      {
        "name": "_checkpointTime",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_maxIterations",
        "type": "uint256",
        "internalType": "uint256"
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
        "name": "_withdrawalShares",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minOutputPerShare",
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
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "removeLiquidity",
    "inputs": [
      {
        "name": "_lpShares",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minOutputPerShare",
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
    "name": "InvalidCheckpointTime",
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
    "name": "MinimumTransactionAmount",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OutputLimit",
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
  bytecode: '0x61028060405234801562000011575f80fd5b506040516200347a3803806200347a8339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161307a620004005f395f50505f50505f6109fb01525f50505f81816102c80152611fc601525f81816118260152818161188901528181611bb601528181611bf201528181611de30152611fa001525f81816105b90152611f7a01525f61140801525f61155d01525f8181610776015261153101525f50505f81816105da0152611fec01525f81816106b4015261248801525f818161024b0152818161047f015281816104f60152818161056a01528181610635015261066d01525f8181604601528181611104015281816122b80152818161230701526123ef01525f505061307a5ff3fe608060405260043610610036575f3560e01c8063074a6de91461008a578063414f826d146100c2578063cbc13434146100e1575f80fd5b3661008657336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610084576040516312171d8360e31b815260040160405180910390fd5b005b5f80fd5b348015610095575f80fd5b506100a96100a4366004612b09565b610100565b6040805192835260208301919091520160405180910390f35b3480156100cd575f80fd5b506100846100dc366004612b5b565b61011a565b3480156100ec575f80fd5b506100a96100fb366004612b09565b610128565b5f8061010d858585610135565b915091505b935093915050565b61012482826101f7565b5050565b5f8061010d8585856102b3565b5f8061013f610401565b61014883610429565b5f610151610461565b905061016861015e610478565b82600460016104a3565b506101763387838888610b07565b90935091506101886020850185612b8f565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b588486856101c660408b0160208c01612bb7565b6101d360408c018c612bd2565b6040516101e596959493929190612c3d565b60405180910390a35061011260015f55565b6101ff610401565b5f610208610461565b5f848152600860205260409020600101549091506001600160801b03161561023b576102348183610c46565b50506102aa565b5f610244610478565b90506102707f000000000000000000000000000000000000000000000000000000000000000085612c8a565b15158061027c57508381105b1561029a5760405163ecd29e8160e01b815260040160405180910390fd5b6102a68483855f6104a3565b5050505b61012460015f55565b5f806102bd610401565b6102c683610429565b7f00000000000000000000000000000000000000000000000000000000000000008510156103075760405163211ddda360e11b815260040160405180910390fd5b5f610310610461565b905061031d61015e610478565b506103295f3388610e36565b610344600360f81b61033e6020870187612b8f565b88610f0d565b5f61035e6103556020870187612b8f565b88848989610b07565b909450905061036d8188612cb1565b92505f61037983610faa565b5090506103896020870187612b8f565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a88876103c760408d0160208e01612bb7565b8a888e80604001906103d99190612bd2565b6040516103ed989796959493929190612cc4565b60405180910390a350505061011260015f55565b60025f540361042357604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f6104376020830183612b8f565b6001600160a01b03160361045e5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f610473670de0b6b3a76400006110ec565b905090565b5f610473427f0000000000000000000000000000000000000000000000000000000000000000611176565b5f84815260086020526040812060018101546001600160801b03161515806104ca57504286115b156104e357600101546001600160801b03169050610aff565b5f805f6104ee610478565b90505f61051b7f00000000000000000000000000000000000000000000000000000000000000008b612d0b565b90505b8181101561058f575f818152600860205260409020600101546001600160801b03168015610567575f828152600860205260409020549094506001600160801b0316925061058f565b507f00000000000000000000000000000000000000000000000000000000000000000161051e565b835f03610601578893506105fe6105a4611192565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006111b2565b92505b5061060b836111d1565b6001850180546001600160801b0319166001600160801b039290921691909117905561066161065a7f00000000000000000000000000000000000000000000000000000000000000008b612cb1565b8a846111fe565b61069f896106996106927f000000000000000000000000000000000000000000000000000000000000000083612d0b565b4290611337565b846111fe565b6106a88861134b565b505f90506008816106d97f00000000000000000000000000000000000000000000000000000000000000008d612cb1565b815260208101919091526040015f908120600101546001600160801b0316915061070460028c6114e8565b5f818152600b60205260408120549192508c8c831561084557600192505f8061073086898d865f61151c565b915091508060095f8282546107459190612d0b565b909155506107609050865f8461075a816115e9565b88611612565b61076a8183612d0b565b915061079a86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611789565b91506107ae6107a983856117d2565b6117e6565b600680546002906107cf9084906201000090046001600160701b0316612d1e565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107fc826111d1565b6006805460109061081e908490600160801b90046001600160801b0316612d3e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f6108516001846114e8565b5f818152600b6020526040902054909150801561095c57600194505f8061087c838b8f88600161151c565b915091508060095f8282546108919190612d0b565b909155506108ac9050835f846108a6816115e9565b8a61180f565b6108b68183612cb1565b91506108c56107a983876117d2565b600680546002906108e69084906201000090046001600160701b0316612d1e565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610913826111d1565b60068054601090610935908490600160801b90046001600160801b0316612d3e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156109955761098761096e876115e9565b610977836115e9565b6109819190612d5e565b5f6119ff565b8e6109928482610c46565b50505b5f61099f84610faa565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a55573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a799190612d7d565b90506001600160a01b03811615610aed57610aea5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190611a3e565b50505b509b9d50505050505050505050505050505b949350505050565b5f80610b1285611ac4565b505060075485906001600160801b031680821115610b3757806001600160801b031691505b815f03610b4a575f809250925050610c3c565b610b59600360f81b8984610e36565b6007545f90610b7e9084906001600160801b03600160801b9091048116908516611ad0565b9050610b89836111d1565b610b939083612d98565b600780546001600160801b0319166001600160801b0392909216919091179055610bbc816111d1565b60078054601090610bde908490600160801b90046001600160801b0316612d98565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c0d818887611aeb565b9350610c198684611b81565b841015610c395760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610c90916001600160801b031690612cb1565b9050805f03610ca3576001915050610e30565b5f610cad85611b95565b9050805f03610cc157600192505050610e30565b5f80610cce838589611c30565b9150915080610ce3575f945050505050610e30565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610d1e929190612e36565b6040805180830381865af4158015610d38573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d5c9190612eab565b91509150610d7a610d6c826115e9565b610d7590612ecd565b611d9d565b925082610d8f575f9650505050505050610e30565b610d98826111d1565b600780545f90610db29084906001600160801b0316612d3e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ddf816111d1565b60078054601090610e01908490600160801b90046001600160801b0316612d3e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610e7857604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610eba908490612cb1565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290610f3e908490612d0b565b90915550505f838152600b602052604081208054839290610f60908490612d0b565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610f00565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610fd187611f31565b6040518263ffffffff1660e01b8152600401610fed9190612ee7565b6040805180830381865af4158015611007573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061102b9190612ef6565b915091508061104057505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916110a591612d0b565b6110af9190612cb1565b9050805f036110c557505f958695509350505050565b5f8087116110d3575f6110de565b6110de848884611ad0565b976001975095505050505050565b604051638b32fa2360e01b8152600481018290525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa23906024015b602060405180830381865afa158015611152573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e309190612f24565b5f6111818284612c8a565b61118b9084612cb1565b9392505050565b6002546004545f91610473916001600160801b0390911690600f0b61206b565b5f6111c8826111c2858888611ad0565b90612090565b95945050505050565b5f6001600160801b038211156111fa57604051630f0af95160e11b815260040160405180910390fd5b5090565b5f83815260086020526040902054600160801b90046001600160801b03168083036112295750505050565b5f848152600860205260408120546001600160801b03169081900361128157611251836111d1565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790556112fe565b6112d26112cd670de0b6b3a764000061129a8886612cb1565b6112a49190612f3b565b85670de0b6b3a76400006112b8878a612cb1565b6112c29190612f3b565b8592919060016120ff565b6111d1565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611307846111d1565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f818311611345578261118b565b50919050565b6006545f90819061136d908490600160801b90046001600160801b03166117d2565b6006546201000090046001600160701b031692509050818111156114e3575f6113968383612cb1565b90506113a56112cd8286612199565b600680546010906113c7908490600160801b90046001600160801b0316612d98565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f6113ff85836121ad90919063ffffffff16565b90505f61142c827f00000000000000000000000000000000000000000000000000000000000000006117d2565b90508060095f82825461143f9190612d0b565b9091555061144f90508183612cb1565b915061145a826111d1565b600280545f906114749084906001600160801b0316612d3e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114a1826121c1565b600480545f906114b5908490600f0b612f52565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b038211156115115760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f8061152887856121ad565b91505f611555837f00000000000000000000000000000000000000000000000000000000000000006117d2565b9050611581817f00000000000000000000000000000000000000000000000000000000000000006117d2565b915083156115a4576115938282612cb1565b61159d9084612cb1565b92506115bb565b6115ae8282612cb1565b6115b89084612d0b565b92505b868610156115de576115ce838789611ad0565b92506115db828789611ad0565b91505b509550959350505050565b5f6001600160ff1b038211156111fa5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b031661165a6112cd8261163e670de0b6b3a764000086612f3b565b600554600160801b90046001600160801b031691908a5f6120ff565b600580546001600160801b03928316600160801b029216919091179055611680866111d1565b61168a9082612d98565b600480546001600160801b03928316600160801b0292169190911790556116b0846111d1565b600280545f906116ca9084906001600160801b0316612d3e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116f7836121ea565b600480545f9061170b908490600f0b612f52565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061173b856111d1565b6002805460109061175d908490600160801b90046001600160801b0316612d98565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f806117a08461179a8a888a611ad0565b906121ad565b90506117ad888486611ad0565b6117b79082612d0b565b9050868111156117c75786810391505b509695505050505050565b5f61118b8383670de0b6b3a7640000611ad0565b5f6001600160701b038211156111fa5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061185157507f000000000000000000000000000000000000000000000000000000000000000061184f8583612cb1565b105b1561185e5761185e612225565b6004549084900390600f0b6118738482612d5e565b90508361187f866115e9565b1380156118b457507f00000000000000000000000000000000000000000000000000000000000000006118b2838361206b565b105b156118c1576118c1612225565b600354600160801b90046001600160801b03166119026112cd826118ed670de0b6b3a764000088612f3b565b6005546001600160801b031691908c5f6120ff565b600580546001600160801b0319166001600160801b039290921691909117905561192c8882612cb1565b9050611937816111d1565b600380546001600160801b03928316600160801b02921691909117905561195d836111d1565b600280546001600160801b0319166001600160801b0392909216919091179055611986826121ea565b600480546001600160801b0319166001600160801b03929092169190911790556119af876111d1565b600280546010906119d1908490600160801b90046001600160801b0316612d3e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611a1a906112cd906001600160801b0316848461223e565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f60605f805f8661ffff1667ffffffffffffffff811115611a6157611a61612f7f565b6040519080825280601f01601f191660200182016040528015611a8b576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115611aab578692505b828152825f602083013e90999098509650505050505050565b5f610e30826004610c46565b5f825f190484118302158202611ae4575f80fd5b5091020490565b5f80611af785856117d2565b9050611b02816122a0565b9450845f03611b14575f91505061118b565b849150611b276040840160208501612bb7565b15611b5657611b4f85611b3d6020860186612b8f565b611b4a6040870187612bd2565b6122ef565b9150611b79565b611b7985611b676020860186612b8f565b611b746040870187612bd2565b6123e2565b509392505050565b5f61118b8383670de0b6b3a764000061241c565b6003545f908190611baf906001600160801b031684612199565b9050611bdb7f000000000000000000000000000000000000000000000000000000000000000082612d0b565b6002546001600160801b03161115611345576002547f000000000000000000000000000000000000000000000000000000000000000090611c269083906001600160801b0316612cb1565b61118b9190612cb1565b611c38612a6a565b5f80611c4384611f31565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611c7d9190612ee7565b6040805180830381865af4158015611c97573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611cbb9190612ef6565b9350905082611ccf57505f91506101129050565b5f611cf5611cf08461016001518561014001516117d290919063ffffffff16565b6115e9565b611d15611cf0856101200151866101000151611b8190919063ffffffff16565b611d1f9190612d5e565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611e53573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e779190612f93565b935093509350935080611e9257505f98975050505050505050565b868414611ec357611ea2846111d1565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611ef457611ed3836121ea565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611f2257611f04826111d1565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611f39612ab4565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612031911661243f565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926120639290041661243f565b905292915050565b5f8061207784846124b3565b90925090508061208957612089612225565b5092915050565b5f815f036120a75750670de0b6b3a7640000610e30565b825f036120b557505f610e30565b5f6120bf836115e9565b90505f6120d36120ce866115e9565b6124ee565b90508181026120ea670de0b6b3a764000082612fd1565b90506120f581612713565b9695505050505050565b5f825f0361210e5750846111c8565b81156121605761213f6121218487612d0b565b61212b85876117d2565b612135888a6117d2565b61179a9190612d0b565b90505f61214c8588611337565b90508082101561215a578091505b506111c8565b82850361216e57505f6111c8565b6120f561217b8487612cb1565b6121858587611b81565b61218f888a6117d2565b61179a9190612cb1565b5f61118b83670de0b6b3a76400008461241c565b5f61118b83670de0b6b3a764000084611ad0565b5f60016001607f1b038211156111fa5760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b0319821280612207575060016001607f1b0382135b156111fa5760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b5f8061224a845f6128a5565b612254845f6128a5565b61225e9190612d5e565b90505f811315612279576122728186612d0b565b9450612297565b5f8112156122975761228a81612ecd565b6122949086612cb1565b94505b50929392505050565b6040516321a3781f60e11b8152600481018290525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690634346f03e90602401611137565b604051630852cd8d60e31b8152600481018590525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c68906024015f604051808303815f87803b158015612350575f80fd5b505af1158015612362573d5f803e3d5ffd5b505050504790505f846001600160a01b0316826040515f6040518083038185875af1925050503d805f81146123b2576040519150601f19603f3d011682016040523d82523d5f602084013e6123b7565b606091505b50509050806123d9576040516312171d8360e31b815260040160405180910390fd5b50949350505050565b6124166001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684866128ba565b50505050565b5f825f190484118302158202612430575f80fd5b50910281810615159190040190565b5f80670de0b6b3a7640000612452610478565b61245c9190612f3b565b905080831161246b575f612475565b6124758184612cb1565b915061118b6124ac670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612f3b565b83906121ad565b5f805f836124c0866115e9565b6124ca9190612d5e565b90505f8112156124e0575f8092509250506124e7565b9150600190505b9250929050565b5f80821361250f5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906125929084901c6115e9565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361272c57505f919050565b680755bf798b4a1bf1e58212612755576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906120f574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6115e9565b5f8183136128b3578161118b565b5090919050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261290c908490612911565b505050565b5f6129256001600160a01b03841683612977565b905080515f141580156129495750808060200190518101906129479190612ffd565b155b1561290c57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b606061118b83835f845f80856001600160a01b0316848660405161299b9190613018565b5f6040518083038185875af1925050503d805f81146129d5576040519150601f19603f3d011682016040523d82523d5f602084013e6129da565b606091505b50915091506120f58683836060826129fa576129f582612a41565b61118b565b8151158015612a1157506001600160a01b0384163b155b15612a3a57604051639996b31560e01b81526001600160a01b038516600482015260240161296e565b508061118b565b805115612a515780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b604051806101200160405280612a7e612ab4565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f60608486031215612b1b575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115612b3f575f80fd5b840160608187031215612b50575f80fd5b809150509250925092565b5f8060408385031215612b6c575f80fd5b50508035926020909101359150565b6001600160a01b038116811461045e575f80fd5b5f60208284031215612b9f575f80fd5b813561118b81612b7b565b801515811461045e575f80fd5b5f60208284031215612bc7575f80fd5b813561118b81612baa565b5f808335601e19843603018112612be7575f80fd5b83018035915067ffffffffffffffff821115612c01575f80fd5b6020019150368190038213156124e7575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201525f612c6a60a083018486612c15565b98975050505050505050565b634e487b7160e01b5f52601260045260245ffd5b5f82612c9857612c98612c76565b500690565b634e487b7160e01b5f52601160045260245ffd5b81810381811115610e3057610e30612c9d565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f612cfd60e083018486612c15565b9a9950505050505050505050565b80820180821115610e3057610e30612c9d565b6001600160701b0381811683821601908082111561208957612089612c9d565b6001600160801b0381811683821601908082111561208957612089612c9d565b8181035f83128015838313168383128216171561208957612089612c9d565b5f60208284031215612d8d575f80fd5b815161118b81612b7b565b6001600160801b0382811682821603908082111561208957612089612c9d565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050612e49828551612db8565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215612ebc575f80fd5b505080516020909101519092909150565b5f600160ff1b8201612ee157612ee1612c9d565b505f0390565b6101808101610e308284612db8565b5f8060408385031215612f07575f80fd5b825191506020830151612f1981612baa565b809150509250929050565b5f60208284031215612f34575f80fd5b5051919050565b8082028115828204841417610e3057610e30612c9d565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610e3057610e30612c9d565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215612fa6575f80fd5b8451935060208501519250604085015191506060850151612fc681612baa565b939692955090935050565b5f82612fdf57612fdf612c76565b600160ff1b82145f1984141615612ff857612ff8612c9d565b500590565b5f6020828403121561300d575f80fd5b815161118b81612baa565b5f82515f5b81811015613037576020818601810151858301520161301d565b505f92019182525091905056fea2646970667358221220c16c759df72c05ed1ec85de39eaa73d89abddbbf590a5fbbced3e5b55130147864736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "checkpoint(uint256,uint256)": "414f826d",
  "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
  "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
} as const
};
