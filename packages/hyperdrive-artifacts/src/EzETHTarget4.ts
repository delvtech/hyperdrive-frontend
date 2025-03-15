export const EzETHTarget4 = {
  name: 'EzETHTarget4' as const,
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
        "name": "_restakeManager",
        "type": "address",
        "internalType": "contract IRestakeManager"
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
  },
  {
    "type": "error",
    "name": "UnsupportedToken",
    "inputs": []
  }
] as const,
  bytecode: '0x6102c060405234801562000011575f80fd5b506040516200366b3803806200366b83398101604081905262000034916200022a565b60015f5582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281518301519052805160409081015161016052905160609081015161018052818701518416610240528601516102605282851661022052918316610280819052825163224a19a960e21b815292518493919263892866a492600480820193918290030181865afa1580156200011b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000141919062000376565b6001600160a01b03166102a052506200039b92505050565b60405161020081016001600160401b03811182821017156200018957634e487b7160e01b5f52604160045260245ffd5b60405290565b6001600160a01b0381168114620001a4575f80fd5b50565b8051620001b4816200018f565b919050565b5f60808284031215620001ca575f80fd5b604051608081016001600160401b0381118282101715620001f957634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a08112156200023f575f80fd5b610260808212156200024f575f80fd5b6200025962000159565b91506200026686620001a7565b82526200027660208701620001a7565b60208301526200028960408701620001a7565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620002f4818801620001a7565b9083015261018062000308878201620001a7565b908301526101a06200031c878201620001a7565b908301526101c062000330878201620001a7565b908301526101e06200034588888301620001b9565b81840152508194506200035a818701620001a7565b935050506200036d6102808501620001a7565b90509250925092565b5f6020828403121562000387575f80fd5b815162000394816200018f565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a05161319a620004d15f395f8181611089015261236d01525f81816110aa015261238e01525f50505f50505f61099201525f50505f818161025f0152611f4001525f81816117a00152818161180301528181611b3001528181611b6c01528181611d5d0152611f1a01525f81816105500152611ef401525f61138201525f6114d701525f818161070d01526114ab01525f50505f81816105710152611f6601525f818161064b01526124f101525f81816101e2015281816104160152818161048d01528181610501015281816105cc015261060401525f81816110cb015281816123af015261241401525f505061319a5ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c8063074a6de914610043578063414f826d1461006f578063cbc1343414610084575b5f80fd5b610056610051366004612ac9565b610097565b6040805192835260208301919091520160405180910390f35b61008261007d366004612b1b565b6100b1565b005b610056610092366004612ac9565b6100bf565b5f806100a48585856100cc565b915091505b935093915050565b6100bb828261018e565b5050565b5f806100a485858561024a565b5f806100d6610398565b6100df836103c0565b5f6100e86103f8565b90506100ff6100f561040f565b826004600161043a565b5061010d3387838888610a9e565b909350915061011f6020850185612b4f565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561015d60408b0160208c01612b77565b61016a60408c018c612b92565b60405161017c96959493929190612bfd565b60405180910390a3506100a960015f55565b610196610398565b5f61019f6103f8565b5f848152600860205260409020600101549091506001600160801b0316156101d2576101cb8183610bdd565b5050610241565b5f6101db61040f565b90506102077f000000000000000000000000000000000000000000000000000000000000000085612c4a565b15158061021357508381105b156102315760405163ecd29e8160e01b815260040160405180910390fd5b61023d8483855f61043a565b5050505b6100bb60015f55565b5f80610254610398565b61025d836103c0565b7f000000000000000000000000000000000000000000000000000000000000000085101561029e5760405163211ddda360e11b815260040160405180910390fd5b5f6102a76103f8565b90506102b46100f561040f565b506102c05f3388610dcd565b6102db600360f81b6102d56020870187612b4f565b88610ea4565b5f6102f56102ec6020870187612b4f565b88848989610a9e565b90945090506103048188612c71565b92505f61031083610f41565b5090506103206020870187612b4f565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761035e60408d0160208e01612b77565b8a888e80604001906103709190612b92565b604051610384989796959493929190612c84565b60405180910390a35050506100a960015f55565b60025f54036103ba57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f6103ce6020830183612b4f565b6001600160a01b0316036103f55760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f61040a670de0b6b3a7640000611083565b905090565b5f61040a427f00000000000000000000000000000000000000000000000000000000000000006110f0565b5f84815260086020526040812060018101546001600160801b031615158061046157504286115b1561047a57600101546001600160801b03169050610a96565b5f805f61048561040f565b90505f6104b27f00000000000000000000000000000000000000000000000000000000000000008b612ccb565b90505b81811015610526575f818152600860205260409020600101546001600160801b031680156104fe575f828152600860205260409020549094506001600160801b03169250610526565b507f0000000000000000000000000000000000000000000000000000000000000000016104b5565b835f036105985788935061059561053b61110c565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061112c565b92505b506105a28361114b565b6001850180546001600160801b0319166001600160801b03929092169190911790556105f86105f17f00000000000000000000000000000000000000000000000000000000000000008b612c71565b8a84611178565b610636896106306106297f000000000000000000000000000000000000000000000000000000000000000083612ccb565b42906112b1565b84611178565b61063f886112c5565b505f90506008816106707f00000000000000000000000000000000000000000000000000000000000000008d612c71565b815260208101919091526040015f908120600101546001600160801b0316915061069b60028c611462565b5f818152600b60205260408120549192508c8c83156107dc57600192505f806106c786898d865f611496565b915091508060095f8282546106dc9190612ccb565b909155506106f79050865f846106f181611563565b8861158c565b6107018183612ccb565b915061073186838a8e877f0000000000000000000000000000000000000000000000000000000000000000611703565b9150610745610740838561174c565b611760565b600680546002906107669084906201000090046001600160701b0316612cde565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107938261114b565b600680546010906107b5908490600160801b90046001600160801b0316612cfe565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f6107e8600184611462565b5f818152600b602052604090205490915080156108f357600194505f80610813838b8f886001611496565b915091508060095f8282546108289190612ccb565b909155506108439050835f8461083d81611563565b8a611789565b61084d8183612c71565b915061085c610740838761174c565b6006805460029061087d9084906201000090046001600160701b0316612cde565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108aa8261114b565b600680546010906108cc908490600160801b90046001600160801b0316612cfe565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b841561092c5761091e61090587611563565b61090e83611563565b6109189190612d1e565b5f611979565b8e6109298482610bdd565b50505b5f61093684610f41565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109ec573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a109190612d3d565b90506001600160a01b03811615610a8457610a815a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906119b8565b50505b509b9d50505050505050505050505050505b949350505050565b5f80610aa985611a3e565b505060075485906001600160801b031680821115610ace57806001600160801b031691505b815f03610ae1575f809250925050610bd3565b610af0600360f81b8984610dcd565b6007545f90610b159084906001600160801b03600160801b9091048116908516611a4a565b9050610b208361114b565b610b2a9083612d58565b600780546001600160801b0319166001600160801b0392909216919091179055610b538161114b565b60078054601090610b75908490600160801b90046001600160801b0316612d58565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ba4818887611a65565b9350610bb08684611afb565b841015610bd05760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610c27916001600160801b031690612c71565b9050805f03610c3a576001915050610dc7565b5f610c4485611b0f565b9050805f03610c5857600192505050610dc7565b5f80610c65838589611baa565b9150915080610c7a575f945050505050610dc7565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610cb5929190612df6565b6040805180830381865af4158015610ccf573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cf39190612e6b565b91509150610d11610d0382611563565b610d0c90612e8d565b611d17565b925082610d26575f9650505050505050610dc7565b610d2f8261114b565b600780545f90610d499084906001600160801b0316612cfe565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d768161114b565b60078054601090610d98908490600160801b90046001600160801b0316612cfe565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610e0f57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610e51908490612c71565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290610ed5908490612ccb565b90915550505f838152600b602052604081208054839290610ef7908490612ccb565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610e97565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610f6887611eab565b6040518263ffffffff1660e01b8152600401610f849190612ea7565b6040805180830381865af4158015610f9e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fc29190612eb6565b9150915080610fd757505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161103c91612ccb565b6110469190612c71565b9050805f0361105c57505f958695509350505050565b5f80871161106a575f611075565b611075848884611a4a565b976001975095505050505050565b5f610dc77f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000085611fe5565b5f6110fb8284612c4a565b6111059084612c71565b9392505050565b6002546004545f9161040a916001600160801b0390911690600f0b612132565b5f6111428261113c858888611a4a565b90612157565b95945050505050565b5f6001600160801b0382111561117457604051630f0af95160e11b815260040160405180910390fd5b5090565b5f83815260086020526040902054600160801b90046001600160801b03168083036111a35750505050565b5f848152600860205260408120546001600160801b0316908190036111fb576111cb8361114b565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611278565b61124c611247670de0b6b3a76400006112148886612c71565b61121e9190612ee4565b85670de0b6b3a7640000611232878a612c71565b61123c9190612ee4565b8592919060016121c6565b61114b565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6112818461114b565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f8183116112bf5782611105565b50919050565b6006545f9081906112e7908490600160801b90046001600160801b031661174c565b6006546201000090046001600160701b0316925090508181111561145d575f6113108383612c71565b905061131f6112478286612260565b60068054601090611341908490600160801b90046001600160801b0316612d58565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611379858361227490919063ffffffff16565b90505f6113a6827f000000000000000000000000000000000000000000000000000000000000000061174c565b90508060095f8282546113b99190612ccb565b909155506113c990508183612c71565b91506113d48261114b565b600280545f906113ee9084906001600160801b0316612cfe565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061141b82612288565b600480545f9061142f908490600f0b612efb565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b0382111561148b5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f806114a28785612274565b91505f6114cf837f000000000000000000000000000000000000000000000000000000000000000061174c565b90506114fb817f000000000000000000000000000000000000000000000000000000000000000061174c565b9150831561151e5761150d8282612c71565b6115179084612c71565b9250611535565b6115288282612c71565b6115329084612ccb565b92505b8686101561155857611548838789611a4a565b9250611555828789611a4a565b91505b509550959350505050565b5f6001600160ff1b038211156111745760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b03166115d4611247826115b8670de0b6b3a764000086612ee4565b600554600160801b90046001600160801b031691908a5f6121c6565b600580546001600160801b03928316600160801b0292169190911790556115fa8661114b565b6116049082612d58565b600480546001600160801b03928316600160801b02921691909117905561162a8461114b565b600280545f906116449084906001600160801b0316612cfe565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611671836122b1565b600480545f90611685908490600f0b612efb565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506116b58561114b565b600280546010906116d7908490600160801b90046001600160801b0316612d58565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f8061171a846117148a888a611a4a565b90612274565b9050611727888486611a4a565b6117319082612ccb565b9050868111156117415786810391505b509695505050505050565b5f6111058383670de0b6b3a7640000611a4a565b5f6001600160701b038211156111745760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806117cb57507f00000000000000000000000000000000000000000000000000000000000000006117c98583612c71565b105b156117d8576117d86122ec565b6004549084900390600f0b6117ed8482612d1e565b9050836117f986611563565b13801561182e57507f000000000000000000000000000000000000000000000000000000000000000061182c8383612132565b105b1561183b5761183b6122ec565b600354600160801b90046001600160801b031661187c61124782611867670de0b6b3a764000088612ee4565b6005546001600160801b031691908c5f6121c6565b600580546001600160801b0319166001600160801b03929092169190911790556118a68882612c71565b90506118b18161114b565b600380546001600160801b03928316600160801b0292169190911790556118d78361114b565b600280546001600160801b0319166001600160801b0392909216919091179055611900826122b1565b600480546001600160801b0319166001600160801b03929092169190911790556119298761114b565b6002805460109061194b908490600160801b90046001600160801b0316612cfe565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461199490611247906001600160801b03168484612305565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f60605f805f8661ffff1667ffffffffffffffff8111156119db576119db612f28565b6040519080825280601f01601f191660200182016040528015611a05576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115611a25578692505b828152825f602083013e90999098509650505050505050565b5f610dc7826004610bdd565b5f825f190484118302158202611a5e575f80fd5b5091020490565b5f80611a71858561174c565b9050611a7c81612367565b9450845f03611a8e575f915050611105565b849150611aa16040840160208501612b77565b15611ad057611ac985611ab76020860186612b4f565b611ac46040870187612b92565b6123d4565b9150611af3565b611af385611ae16020860186612b4f565b611aee6040870187612b92565b6123ee565b509392505050565b5f6111058383670de0b6b3a7640000612485565b6003545f908190611b29906001600160801b031684612260565b9050611b557f000000000000000000000000000000000000000000000000000000000000000082612ccb565b6002546001600160801b031611156112bf576002547f000000000000000000000000000000000000000000000000000000000000000090611ba09083906001600160801b0316612c71565b6111059190612c71565b611bb2612a2a565b5f80611bbd84611eab565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611bf79190612ea7565b6040805180830381865af4158015611c11573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611c359190612eb6565b9350905082611c4957505f91506100a99050565b5f611c6f611c6a84610160015185610140015161174c90919063ffffffff16565b611563565b611c8f611c6a856101200151866101000151611afb90919063ffffffff16565b611c999190612d1e565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611dcd573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611df19190612f3c565b935093509350935080611e0c57505f98975050505050505050565b868414611e3d57611e1c8461114b565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611e6e57611e4d836122b1565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611e9c57611e7e8261114b565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611eb3612a74565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191611fab91166124a8565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192611fdd929004166124a8565b905292915050565b5f80846001600160a01b031663ff9969cd6040518163ffffffff1660e01b81526004015f60405180830381865afa158015612022573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052612049919081019061302f565b925050505f846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561208a573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120ae9190613106565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091506001600160a01b0388169063c5c83cb0906064015b602060405180830381865afa158015612103573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906121279190613106565b979650505050505050565b5f8061213e848461251c565b909250905080612150576121506122ec565b5092915050565b5f815f0361216e5750670de0b6b3a7640000610dc7565b825f0361217c57505f610dc7565b5f61218683611563565b90505f61219a61219586611563565b612557565b90508181026121b1670de0b6b3a76400008261311d565b90506121bc8161277c565b9695505050505050565b5f825f036121d5575084611142565b8115612227576122066121e88487612ccb565b6121f2858761174c565b6121fc888a61174c565b6117149190612ccb565b90505f61221385886112b1565b905080821015612221578091505b50611142565b82850361223557505f611142565b6121bc6122428487612c71565b61224c8587611afb565b612256888a61174c565b6117149190612c71565b5f61110583670de0b6b3a764000084612485565b5f61110583670de0b6b3a764000084611a4a565b5f60016001607f1b038211156111745760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b03198212806122ce575060016001607f1b0382135b156111745760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b5f80612311845f61290e565b61231b845f61290e565b6123259190612d1e565b90505f811315612340576123398186612ccb565b945061235e565b5f81121561235e5761235181612e8d565b61235b9086612c71565b94505b50929392505050565b5f610dc77f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000085612923565b5f60405163350b944160e11b815260040160405180910390fd5b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303815f875af115801561245a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061247e9190613149565b5050505050565b5f825f190484118302158202612499575f80fd5b50910281810615159190040190565b5f80670de0b6b3a76400006124bb61040f565b6124c59190612ee4565b90508083116124d4575f6124de565b6124de8184612c71565b9150611105612515670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612ee4565b8390612274565b5f805f8361252986611563565b6125339190612d1e565b90505f811215612549575f809250925050612550565b9150600190505b9250929050565b5f8082136125785760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906125fb9084901c611563565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361279557505f919050565b680755bf798b4a1bf1e582126127be576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906121bc74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611563565b5f81831361291c5781611105565b5090919050565b5f80846001600160a01b031663ff9969cd6040518163ffffffff1660e01b81526004015f60405180830381865afa158015612960573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052612987919081019061302f565b925050505f846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156129c8573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906129ec9190613106565b6040516347b4373560e11b81526004810184905260248101869052604481018290529091506001600160a01b03881690638f686e6a906064016120e8565b604051806101200160405280612a3e612a74565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f60608486031215612adb575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115612aff575f80fd5b840160608187031215612b10575f80fd5b809150509250925092565b5f8060408385031215612b2c575f80fd5b50508035926020909101359150565b6001600160a01b03811681146103f5575f80fd5b5f60208284031215612b5f575f80fd5b813561110581612b3b565b80151581146103f5575f80fd5b5f60208284031215612b87575f80fd5b813561110581612b6a565b5f808335601e19843603018112612ba7575f80fd5b83018035915067ffffffffffffffff821115612bc1575f80fd5b602001915036819003821315612550575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201525f612c2a60a083018486612bd5565b98975050505050505050565b634e487b7160e01b5f52601260045260245ffd5b5f82612c5857612c58612c36565b500690565b634e487b7160e01b5f52601160045260245ffd5b81810381811115610dc757610dc7612c5d565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f612cbd60e083018486612bd5565b9a9950505050505050505050565b80820180821115610dc757610dc7612c5d565b6001600160701b0381811683821601908082111561215057612150612c5d565b6001600160801b0381811683821601908082111561215057612150612c5d565b8181035f83128015838313168383128216171561215057612150612c5d565b5f60208284031215612d4d575f80fd5b815161110581612b3b565b6001600160801b0382811682821603908082111561215057612150612c5d565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050612e09828551612d78565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215612e7c575f80fd5b505080516020909101519092909150565b5f600160ff1b8201612ea157612ea1612c5d565b505f0390565b6101808101610dc78284612d78565b5f8060408385031215612ec7575f80fd5b825191506020830151612ed981612b6a565b809150509250929050565b8082028115828204841417610dc757610dc7612c5d565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610dc757610dc7612c5d565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215612f4f575f80fd5b8451935060208501519250604085015191506060850151612f6f81612b6a565b939692955090935050565b604051601f8201601f1916810167ffffffffffffffff81118282101715612fa357612fa3612f28565b604052919050565b5f67ffffffffffffffff821115612fc457612fc4612f28565b5060051b60200190565b5f82601f830112612fdd575f80fd5b81516020612ff2612fed83612fab565b612f7a565b8083825260208201915060208460051b870101935086841115613013575f80fd5b602086015b848110156117415780518352918301918301613018565b5f805f60608486031215613041575f80fd5b835167ffffffffffffffff80821115613058575f80fd5b818601915086601f83011261306b575f80fd5b8151602061307b612fed83612fab565b82815260059290921b8401810191818101908a841115613099575f80fd5b8286015b848110156130cf578051868111156130b3575f80fd5b6130c18d86838b0101612fce565b84525091830191830161309d565b50918901519197509093505050808211156130e8575f80fd5b506130f586828701612fce565b925050604084015190509250925092565b5f60208284031215613116575f80fd5b5051919050565b5f8261312b5761312b612c36565b600160ff1b82145f198414161561314457613144612c5d565b500590565b5f60208284031215613159575f80fd5b815161110581612b6a56fea26469706673582212209adc030b7845d4b70c323028550690ac57e118a8b436dd2524b31c36cf6e087464736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "checkpoint(uint256,uint256)": "414f826d",
  "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
  "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
} as const
};
