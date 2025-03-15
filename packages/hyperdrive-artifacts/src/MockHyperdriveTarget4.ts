export const MockHyperdriveTarget4 = {
  name: 'MockHyperdriveTarget4' as const,
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
  bytecode: '0x61028060405234801562000011575f80fd5b506040516200353e3803806200353e8339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613128620004165f395f50505f50505f61099201525f50505f818161025f0152611fc901525f81816118290152818161188c01528181611bb901528181611bf501528181611de60152611fa301525f81816105500152611f7d01525f61140b01525f61156001525f818161070d015261153401525f50505f81816105710152611fef01525f818161064b015261271201525f81816101e2015281816104160152818161048d01528181610501015281816105cc015261060401525f50505f818161109d015281816110e6015281816122bd01528181612306015281816123db015281816124840152818161256a015261261301526131285ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c8063074a6de914610043578063414f826d1461006f578063cbc1343414610084575b5f80fd5b610056610051366004612be3565b610097565b6040805192835260208301919091520160405180910390f35b61008261007d366004612c35565b6100b1565b005b610056610092366004612be3565b6100bf565b5f806100a48585856100cc565b915091505b935093915050565b6100bb828261018e565b5050565b5f806100a485858561024a565b5f806100d6610398565b6100df836103c0565b5f6100e86103f8565b90506100ff6100f561040f565b826004600161043a565b5061010d3387838888610a9e565b909350915061011f6020850185612c69565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561015d60408b0160208c01612c91565b61016a60408c018c612cac565b60405161017c96959493929190612d17565b60405180910390a3506100a960015f55565b610196610398565b5f61019f6103f8565b5f848152600860205260409020600101549091506001600160801b0316156101d2576101cb8183610bdd565b5050610241565b5f6101db61040f565b90506102077f000000000000000000000000000000000000000000000000000000000000000085612d64565b15158061021357508381105b156102315760405163ecd29e8160e01b815260040160405180910390fd5b61023d8483855f61043a565b5050505b6100bb60015f55565b5f80610254610398565b61025d836103c0565b7f000000000000000000000000000000000000000000000000000000000000000085101561029e5760405163211ddda360e11b815260040160405180910390fd5b5f6102a76103f8565b90506102b46100f561040f565b506102c05f3388610dcd565b6102db600360f81b6102d56020870187612c69565b88610ea4565b5f6102f56102ec6020870187612c69565b88848989610a9e565b90945090506103048188612d8b565b92505f61031083610f41565b5090506103206020870187612c69565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761035e60408d0160208e01612c91565b8a888e80604001906103709190612cac565b604051610384989796959493929190612d9e565b60405180910390a35050506100a960015f55565b60025f54036103ba57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f6103ce6020830183612c69565b6001600160a01b0316036103f55760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f61040a670de0b6b3a7640000611083565b905090565b5f61040a427f0000000000000000000000000000000000000000000000000000000000000000611180565b5f84815260086020526040812060018101546001600160801b031615158061046157504286115b1561047a57600101546001600160801b03169050610a96565b5f805f61048561040f565b90505f6104b27f00000000000000000000000000000000000000000000000000000000000000008b612de5565b90505b81811015610526575f818152600860205260409020600101546001600160801b031680156104fe575f828152600860205260409020549094506001600160801b03169250610526565b507f0000000000000000000000000000000000000000000000000000000000000000016104b5565b835f036105985788935061059561053b611195565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006111b5565b92505b506105a2836111d4565b6001850180546001600160801b0319166001600160801b03929092169190911790556105f86105f17f00000000000000000000000000000000000000000000000000000000000000008b612d8b565b8a84611201565b610636896106306106297f000000000000000000000000000000000000000000000000000000000000000083612de5565b429061133a565b84611201565b61063f8861134e565b505f90506008816106707f00000000000000000000000000000000000000000000000000000000000000008d612d8b565b815260208101919091526040015f908120600101546001600160801b0316915061069b60028c6114eb565b5f818152600b60205260408120549192508c8c83156107dc57600192505f806106c786898d865f61151f565b915091508060095f8282546106dc9190612de5565b909155506106f79050865f846106f1816115ec565b88611615565b6107018183612de5565b915061073186838a8e877f000000000000000000000000000000000000000000000000000000000000000061178c565b915061074561074083856117d5565b6117e9565b600680546002906107669084906201000090046001600160701b0316612df8565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610793826111d4565b600680546010906107b5908490600160801b90046001600160801b0316612e18565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f6107e86001846114eb565b5f818152600b602052604090205490915080156108f357600194505f80610813838b8f88600161151f565b915091508060095f8282546108289190612de5565b909155506108439050835f8461083d816115ec565b8a611812565b61084d8183612d8b565b915061085c61074083876117d5565b6006805460029061087d9084906201000090046001600160701b0316612df8565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108aa826111d4565b600680546010906108cc908490600160801b90046001600160801b0316612e18565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b841561092c5761091e610905876115ec565b61090e836115ec565b6109189190612e38565b5f611a02565b8e6109298482610bdd565b50505b5f61093684610f41565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109ec573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a109190612e57565b90506001600160a01b03811615610a8457610a815a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190611a41565b50505b509b9d50505050505050505050505050505b949350505050565b5f80610aa985611ac7565b505060075485906001600160801b031680821115610ace57806001600160801b031691505b815f03610ae1575f809250925050610bd3565b610af0600360f81b8984610dcd565b6007545f90610b159084906001600160801b03600160801b9091048116908516611ad3565b9050610b20836111d4565b610b2a9083612e72565b600780546001600160801b0319166001600160801b0392909216919091179055610b53816111d4565b60078054601090610b75908490600160801b90046001600160801b0316612e72565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ba4818887611aee565b9350610bb08684611b84565b841015610bd05760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610c27916001600160801b031690612d8b565b9050805f03610c3a576001915050610dc7565b5f610c4485611b98565b9050805f03610c5857600192505050610dc7565b5f80610c65838589611c33565b9150915080610c7a575f945050505050610dc7565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610cb5929190612f10565b6040805180830381865af4158015610ccf573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cf39190612f85565b91509150610d11610d03826115ec565b610d0c90612fa7565b611da0565b925082610d26575f9650505050505050610dc7565b610d2f826111d4565b600780545f90610d499084906001600160801b0316612e18565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d76816111d4565b60078054601090610d98908490600160801b90046001600160801b0316612e18565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610e0f57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610e51908490612d8b565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290610ed5908490612de5565b90915550505f838152600b602052604081208054839290610ef7908490612de5565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610e97565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610f6887611f34565b6040518263ffffffff1660e01b8152600401610f849190612fc1565b6040805180830381865af4158015610f9e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fc29190612fd0565b9150915080610fd757505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161103c91612de5565b6110469190612d8b565b9050805f0361105c57505f958695509350505050565b5f80871161106a575f611075565b611075848884611ad3565b976001975095505050505050565b5f8073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016110d157504761115a565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611133573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111579190612ffe565b90505b600f545f03611169575f611179565b600f546111799084908390611ad3565b9392505050565b5f61118b8284612d64565b6111799084612d8b565b6002546004545f9161040a916001600160801b0390911690600f0b61206e565b5f6111cb826111c5858888611ad3565b90612093565b95945050505050565b5f6001600160801b038211156111fd57604051630f0af95160e11b815260040160405180910390fd5b5090565b5f83815260086020526040902054600160801b90046001600160801b031680830361122c5750505050565b5f848152600860205260408120546001600160801b03169081900361128457611254836111d4565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611301565b6112d56112d0670de0b6b3a764000061129d8886612d8b565b6112a79190613015565b85670de0b6b3a76400006112bb878a612d8b565b6112c59190613015565b859291906001612102565b6111d4565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61130a846111d4565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f8183116113485782611179565b50919050565b6006545f908190611370908490600160801b90046001600160801b03166117d5565b6006546201000090046001600160701b031692509050818111156114e6575f6113998383612d8b565b90506113a86112d0828661219c565b600680546010906113ca908490600160801b90046001600160801b0316612e72565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61140285836121b090919063ffffffff16565b90505f61142f827f00000000000000000000000000000000000000000000000000000000000000006117d5565b90508060095f8282546114429190612de5565b9091555061145290508183612d8b565b915061145d826111d4565b600280545f906114779084906001600160801b0316612e18565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114a4826121c4565b600480545f906114b8908490600f0b61302c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b038211156115145760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f8061152b87856121b0565b91505f611558837f00000000000000000000000000000000000000000000000000000000000000006117d5565b9050611584817f00000000000000000000000000000000000000000000000000000000000000006117d5565b915083156115a7576115968282612d8b565b6115a09084612d8b565b92506115be565b6115b18282612d8b565b6115bb9084612de5565b92505b868610156115e1576115d1838789611ad3565b92506115de828789611ad3565b91505b509550959350505050565b5f6001600160ff1b038211156111fd5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b031661165d6112d082611641670de0b6b3a764000086613015565b600554600160801b90046001600160801b031691908a5f612102565b600580546001600160801b03928316600160801b029216919091179055611683866111d4565b61168d9082612e72565b600480546001600160801b03928316600160801b0292169190911790556116b3846111d4565b600280545f906116cd9084906001600160801b0316612e18565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116fa836121ed565b600480545f9061170e908490600f0b61302c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061173e856111d4565b60028054601090611760908490600160801b90046001600160801b0316612e72565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f806117a38461179d8a888a611ad3565b906121b0565b90506117b0888486611ad3565b6117ba9082612de5565b9050868111156117ca5786810391505b509695505050505050565b5f6111798383670de0b6b3a7640000611ad3565b5f6001600160701b038211156111fd5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061185457507f00000000000000000000000000000000000000000000000000000000000000006118528583612d8b565b105b1561186157611861612228565b6004549084900390600f0b6118768482612e38565b905083611882866115ec565b1380156118b757507f00000000000000000000000000000000000000000000000000000000000000006118b5838361206e565b105b156118c4576118c4612228565b600354600160801b90046001600160801b03166119056112d0826118f0670de0b6b3a764000088613015565b6005546001600160801b031691908c5f612102565b600580546001600160801b0319166001600160801b039290921691909117905561192f8882612d8b565b905061193a816111d4565b600380546001600160801b03928316600160801b029216919091179055611960836111d4565b600280546001600160801b0319166001600160801b0392909216919091179055611989826121ed565b600480546001600160801b0319166001600160801b03929092169190911790556119b2876111d4565b600280546010906119d4908490600160801b90046001600160801b0316612e18565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611a1d906112d0906001600160801b03168484612241565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f60605f805f8661ffff1667ffffffffffffffff811115611a6457611a64613059565b6040519080825280601f01601f191660200182016040528015611a8e576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115611aae578692505b828152825f602083013e90999098509650505050505050565b5f610dc7826004610bdd565b5f825f190484118302158202611ae7575f80fd5b5091020490565b5f80611afa85856117d5565b9050611b05816122a3565b9450845f03611b17575f915050611179565b849150611b2a6040840160208501612c91565b15611b5957611b5285611b406020860186612c69565b611b4d6040870187612cac565b612389565b9150611b7c565b611b7c85611b6a6020860186612c69565b611b776040870187612cac565b612519565b509392505050565b5f6111798383670de0b6b3a76400006126a6565b6003545f908190611bb2906001600160801b03168461219c565b9050611bde7f000000000000000000000000000000000000000000000000000000000000000082612de5565b6002546001600160801b03161115611348576002547f000000000000000000000000000000000000000000000000000000000000000090611c299083906001600160801b0316612d8b565b6111799190612d8b565b611c3b612b44565b5f80611c4684611f34565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611c809190612fc1565b6040805180830381865af4158015611c9a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611cbe9190612fd0565b9350905082611cd257505f91506100a99050565b5f611cf8611cf38461016001518561014001516117d590919063ffffffff16565b6115ec565b611d18611cf3856101200151866101000151611b8490919063ffffffff16565b611d229190612e38565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611e56573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e7a919061306d565b935093509350935080611e9557505f98975050505050505050565b868414611ec657611ea5846111d4565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611ef757611ed6836121ed565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611f2557611f07826111d4565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611f3c612b8e565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161203491166126c9565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612066929004166126c9565b905292915050565b5f8061207a848461273d565b90925090508061208c5761208c612228565b5092915050565b5f815f036120aa5750670de0b6b3a7640000610dc7565b825f036120b857505f610dc7565b5f6120c2836115ec565b90505f6120d66120d1866115ec565b612778565b90508181026120ed670de0b6b3a7640000826130ab565b90506120f88161299d565b9695505050505050565b5f825f036121115750846111cb565b8115612163576121426121248487612de5565b61212e85876117d5565b612138888a6117d5565b61179d9190612de5565b90505f61214f858861133a565b90508082101561215d578091505b506111cb565b82850361217157505f6111cb565b6120f861217e8487612d8b565b6121888587611b84565b612192888a6117d5565b61179d9190612d8b565b5f61117983670de0b6b3a7640000846126a6565b5f61117983670de0b6b3a764000084611ad3565b5f60016001607f1b038211156111fd5760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b031982128061220a575060016001607f1b0382135b156111fd5760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b5f8061224d845f612b2f565b612257845f612b2f565b6122619190612e38565b90505f81131561227c576122758186612de5565b945061229a565b5f81121561229a5761228d81612fa7565b6122979086612d8b565b94505b50929392505050565b5f8073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016122f157504761237a565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612353573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906123779190612ffe565b90505b600f5461117990849083611ad3565b5f600f548511612399578461239d565b600f545b94505f6123a986611083565b905085600f5f8282546123bc9190612d8b565b909155505f905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161245e576040516001600160a01b0387169083905f81818185875af1925050503d805f811461244e576040519150601f19603f3d011682016040523d82523d5f602084013e612453565b606091505b5050809150506124f1565b60405163a9059cbb60e01b81526001600160a01b038781166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303815f875af11580156124ca573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906124ee91906130d7565b90505b8061250f576040516312171d8360e31b815260040160405180910390fd5b5095945050505050565b600f548411612528578361252c565b600f545b93505f61253885611083565b905084600f5f82825461254b9190612d8b565b909155505f905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016125ed576040516001600160a01b0386169083905f81818185875af1925050503d805f81146125dd576040519150601f19603f3d011682016040523d82523d5f602084013e6125e2565b606091505b505080915050612680565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303815f875af1158015612659573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061267d91906130d7565b90505b8061269e576040516312171d8360e31b815260040160405180910390fd5b505050505050565b5f825f1904841183021582026126ba575f80fd5b50910281810615159190040190565b5f80670de0b6b3a76400006126dc61040f565b6126e69190613015565b90508083116126f5575f6126ff565b6126ff8184612d8b565b9150611179612736670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613015565b83906121b0565b5f805f8361274a866115ec565b6127549190612e38565b90505f81121561276a575f809250925050612771565b9150600190505b9250929050565b5f8082136127995760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061281c9084901c6115ec565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e1982136129b657505f919050565b680755bf798b4a1bf1e582126129df576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906120f874029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6115ec565b5f818313612b3d5781611179565b5090919050565b604051806101200160405280612b58612b8e565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f60608486031215612bf5575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115612c19575f80fd5b840160608187031215612c2a575f80fd5b809150509250925092565b5f8060408385031215612c46575f80fd5b50508035926020909101359150565b6001600160a01b03811681146103f5575f80fd5b5f60208284031215612c79575f80fd5b813561117981612c55565b80151581146103f5575f80fd5b5f60208284031215612ca1575f80fd5b813561117981612c84565b5f808335601e19843603018112612cc1575f80fd5b83018035915067ffffffffffffffff821115612cdb575f80fd5b602001915036819003821315612771575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201525f612d4460a083018486612cef565b98975050505050505050565b634e487b7160e01b5f52601260045260245ffd5b5f82612d7257612d72612d50565b500690565b634e487b7160e01b5f52601160045260245ffd5b81810381811115610dc757610dc7612d77565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f612dd760e083018486612cef565b9a9950505050505050505050565b80820180821115610dc757610dc7612d77565b6001600160701b0381811683821601908082111561208c5761208c612d77565b6001600160801b0381811683821601908082111561208c5761208c612d77565b8181035f83128015838313168383128216171561208c5761208c612d77565b5f60208284031215612e67575f80fd5b815161117981612c55565b6001600160801b0382811682821603908082111561208c5761208c612d77565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050612f23828551612e92565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215612f96575f80fd5b505080516020909101519092909150565b5f600160ff1b8201612fbb57612fbb612d77565b505f0390565b6101808101610dc78284612e92565b5f8060408385031215612fe1575f80fd5b825191506020830151612ff381612c84565b809150509250929050565b5f6020828403121561300e575f80fd5b5051919050565b8082028115828204841417610dc757610dc7612d77565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610dc757610dc7612d77565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215613080575f80fd5b84519350602085015192506040850151915060608501516130a081612c84565b939692955090935050565b5f826130b9576130b9612d50565b600160ff1b82145f19841416156130d2576130d2612d77565b500590565b5f602082840312156130e7575f80fd5b815161117981612c8456fea2646970667358221220447241d7c17f715a7a63f28f726648ecebf427bf0f52c23015bdee4f602c749c64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "checkpoint(uint256,uint256)": "414f826d",
  "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
  "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
} as const
};
