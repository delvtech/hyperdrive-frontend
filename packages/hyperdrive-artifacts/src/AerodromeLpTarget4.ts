export const AerodromeLpTarget4 = {
  name: 'AerodromeLpTarget4' as const,
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
        "name": "_gauge",
        "type": "address",
        "internalType": "contract IGauge"
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
  bytecode: '0x6102a060405234801562000011575f80fd5b5060405162003388380380620033888339810160408190526200003491620001ac565b60015f5582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815190920151909152805160409081015161016052905160609081015161018052908501518216610240529093015161026052908216610220521661028052620002f8565b60405161020081016001600160401b03811182821017156200011957634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b038116811462000136575f80fd5b919050565b5f608082840312156200014c575f80fd5b604051608081016001600160401b03811182821017156200017b57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a0811215620001c1575f80fd5b61026080821215620001d1575f80fd5b620001db620000e9565b9150620001e8866200011f565b8252620001f8602087016200011f565b60208301526200020b604087016200011f565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620002768188016200011f565b908301526101806200028a8782016200011f565b908301526101a06200029e8782016200011f565b908301526101c0620002b28782016200011f565b908301526101e0620002c7888883016200013b565b8184015250819450620002dc8187016200011f565b93505050620002ef61028085016200011f565b90509250925092565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051612f80620004085f395f61227401525f50505f50505f61099201525f50505f818161025f0152611f4801525f81816117a80152818161180b01528181611b3801528181611b7401528181611d650152611f2201525f81816105500152611efc01525f61138a01525f6114df01525f818161070d01526114b301525f50505f81816105710152611f6e01525f818161064b015261238e01525f81816101e2015281816104160152818161048d01528181610501015281816105cc015261060401525f50505f6122e00152612f805ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c8063074a6de914610043578063414f826d1461006f578063cbc1343414610084575b5f80fd5b610056610051366004612a0f565b610097565b6040805192835260208301919091520160405180910390f35b61008261007d366004612a61565b6100b1565b005b610056610092366004612a0f565b6100bf565b5f806100a48585856100cc565b915091505b935093915050565b6100bb828261018e565b5050565b5f806100a485858561024a565b5f806100d6610398565b6100df836103c0565b5f6100e86103f8565b90506100ff6100f561040f565b826004600161043a565b5061010d3387838888610a9e565b909350915061011f6020850185612a95565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561015d60408b0160208c01612abd565b61016a60408c018c612ad8565b60405161017c96959493929190612b43565b60405180910390a3506100a960015f55565b610196610398565b5f61019f6103f8565b5f848152600860205260409020600101549091506001600160801b0316156101d2576101cb8183610bdd565b5050610241565b5f6101db61040f565b90506102077f000000000000000000000000000000000000000000000000000000000000000085612b90565b15158061021357508381105b156102315760405163ecd29e8160e01b815260040160405180910390fd5b61023d8483855f61043a565b5050505b6100bb60015f55565b5f80610254610398565b61025d836103c0565b7f000000000000000000000000000000000000000000000000000000000000000085101561029e5760405163211ddda360e11b815260040160405180910390fd5b5f6102a76103f8565b90506102b46100f561040f565b506102c05f3388610dcd565b6102db600360f81b6102d56020870187612a95565b88610ea4565b5f6102f56102ec6020870187612a95565b88848989610a9e565b90945090506103048188612bb7565b92505f61031083610f41565b5090506103206020870187612a95565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761035e60408d0160208e01612abd565b8a888e80604001906103709190612ad8565b604051610384989796959493929190612bca565b60405180910390a35050506100a960015f55565b60025f54036103ba57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f6103ce6020830183612a95565b6001600160a01b0316036103f55760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f61040a670de0b6b3a7640000611083565b905090565b5f61040a427f00000000000000000000000000000000000000000000000000000000000000006110f8565b5f84815260086020526040812060018101546001600160801b031615158061046157504286115b1561047a57600101546001600160801b03169050610a96565b5f805f61048561040f565b90505f6104b27f00000000000000000000000000000000000000000000000000000000000000008b612c11565b90505b81811015610526575f818152600860205260409020600101546001600160801b031680156104fe575f828152600860205260409020549094506001600160801b03169250610526565b507f0000000000000000000000000000000000000000000000000000000000000000016104b5565b835f036105985788935061059561053b611114565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611134565b92505b506105a283611153565b6001850180546001600160801b0319166001600160801b03929092169190911790556105f86105f17f00000000000000000000000000000000000000000000000000000000000000008b612bb7565b8a84611180565b610636896106306106297f000000000000000000000000000000000000000000000000000000000000000083612c11565b42906112b9565b84611180565b61063f886112cd565b505f90506008816106707f00000000000000000000000000000000000000000000000000000000000000008d612bb7565b815260208101919091526040015f908120600101546001600160801b0316915061069b60028c61146a565b5f818152600b60205260408120549192508c8c83156107dc57600192505f806106c786898d865f61149e565b915091508060095f8282546106dc9190612c11565b909155506106f79050865f846106f18161156b565b88611594565b6107018183612c11565b915061073186838a8e877f000000000000000000000000000000000000000000000000000000000000000061170b565b91506107456107408385611754565b611768565b600680546002906107669084906201000090046001600160701b0316612c24565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061079382611153565b600680546010906107b5908490600160801b90046001600160801b0316612c44565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f6107e860018461146a565b5f818152600b602052604090205490915080156108f357600194505f80610813838b8f88600161149e565b915091508060095f8282546108289190612c11565b909155506108439050835f8461083d8161156b565b8a611791565b61084d8183612bb7565b915061085c6107408387611754565b6006805460029061087d9084906201000090046001600160701b0316612c24565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108aa82611153565b600680546010906108cc908490600160801b90046001600160801b0316612c44565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b841561092c5761091e6109058761156b565b61090e8361156b565b6109189190612c64565b5f611981565b8e6109298482610bdd565b50505b5f61093684610f41565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109ec573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a109190612c83565b90506001600160a01b03811615610a8457610a815a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906119c0565b50505b509b9d50505050505050505050505050505b949350505050565b5f80610aa985611a46565b505060075485906001600160801b031680821115610ace57806001600160801b031691505b815f03610ae1575f809250925050610bd3565b610af0600360f81b8984610dcd565b6007545f90610b159084906001600160801b03600160801b9091048116908516611a52565b9050610b2083611153565b610b2a9083612c9e565b600780546001600160801b0319166001600160801b0392909216919091179055610b5381611153565b60078054601090610b75908490600160801b90046001600160801b0316612c9e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ba4818887611a6d565b9350610bb08684611b03565b841015610bd05760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610c27916001600160801b031690612bb7565b9050805f03610c3a576001915050610dc7565b5f610c4485611b17565b9050805f03610c5857600192505050610dc7565b5f80610c65838589611bb2565b9150915080610c7a575f945050505050610dc7565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610cb5929190612d3c565b6040805180830381865af4158015610ccf573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cf39190612db1565b91509150610d11610d038261156b565b610d0c90612dd3565b611d1f565b925082610d26575f9650505050505050610dc7565b610d2f82611153565b600780545f90610d499084906001600160801b0316612c44565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d7681611153565b60078054601090610d98908490600160801b90046001600160801b0316612c44565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610e0f57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610e51908490612bb7565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290610ed5908490612c11565b90915550505f838152600b602052604081208054839290610ef7908490612c11565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610e97565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610f6887611eb3565b6040518263ffffffff1660e01b8152600401610f849190612ded565b6040805180830381865af4158015610f9e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fc29190612dfc565b9150915080610fd757505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161103c91612c11565b6110469190612bb7565b9050805f0361105c57505f958695509350505050565b5f80871161106a575f611075565b611075848884611a52565b976001975095505050505050565b60405163b88fed9f60e01b8152600481018290525f9073__$2547229b0150c03f930e3c2db66c5de7b3$__9063b88fed9f906024015b602060405180830381865af41580156110d4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610dc79190612e2a565b5f6111038284612b90565b61110d9084612bb7565b9392505050565b6002546004545f9161040a916001600160801b0390911690600f0b611fed565b5f61114a82611144858888611a52565b90612012565b95945050505050565b5f6001600160801b0382111561117c57604051630f0af95160e11b815260040160405180910390fd5b5090565b5f83815260086020526040902054600160801b90046001600160801b03168083036111ab5750505050565b5f848152600860205260408120546001600160801b031690819003611203576111d383611153565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611280565b61125461124f670de0b6b3a764000061121c8886612bb7565b6112269190612e41565b85670de0b6b3a764000061123a878a612bb7565b6112449190612e41565b859291906001612081565b611153565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61128984611153565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f8183116112c7578261110d565b50919050565b6006545f9081906112ef908490600160801b90046001600160801b0316611754565b6006546201000090046001600160701b03169250905081811115611465575f6113188383612bb7565b905061132761124f828661211b565b60068054601090611349908490600160801b90046001600160801b0316612c9e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611381858361212f90919063ffffffff16565b90505f6113ae827f0000000000000000000000000000000000000000000000000000000000000000611754565b90508060095f8282546113c19190612c11565b909155506113d190508183612bb7565b91506113dc82611153565b600280545f906113f69084906001600160801b0316612c44565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061142382612143565b600480545f90611437908490600f0b612e58565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b038211156114935760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f806114aa878561212f565b91505f6114d7837f0000000000000000000000000000000000000000000000000000000000000000611754565b9050611503817f0000000000000000000000000000000000000000000000000000000000000000611754565b91508315611526576115158282612bb7565b61151f9084612bb7565b925061153d565b6115308282612bb7565b61153a9084612c11565b92505b8686101561156057611550838789611a52565b925061155d828789611a52565b91505b509550959350505050565b5f6001600160ff1b0382111561117c5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b03166115dc61124f826115c0670de0b6b3a764000086612e41565b600554600160801b90046001600160801b031691908a5f612081565b600580546001600160801b03928316600160801b02921691909117905561160286611153565b61160c9082612c9e565b600480546001600160801b03928316600160801b02921691909117905561163284611153565b600280545f9061164c9084906001600160801b0316612c44565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116798361216c565b600480545f9061168d908490600f0b612e58565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506116bd85611153565b600280546010906116df908490600160801b90046001600160801b0316612c9e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f806117228461171c8a888a611a52565b9061212f565b905061172f888486611a52565b6117399082612c11565b9050868111156117495786810391505b509695505050505050565b5f61110d8383670de0b6b3a7640000611a52565b5f6001600160701b0382111561117c5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806117d357507f00000000000000000000000000000000000000000000000000000000000000006117d18583612bb7565b105b156117e0576117e06121a7565b6004549084900390600f0b6117f58482612c64565b9050836118018661156b565b13801561183657507f00000000000000000000000000000000000000000000000000000000000000006118348383611fed565b105b15611843576118436121a7565b600354600160801b90046001600160801b031661188461124f8261186f670de0b6b3a764000088612e41565b6005546001600160801b031691908c5f612081565b600580546001600160801b0319166001600160801b03929092169190911790556118ae8882612bb7565b90506118b981611153565b600380546001600160801b03928316600160801b0292169190911790556118df83611153565b600280546001600160801b0319166001600160801b03929092169190911790556119088261216c565b600480546001600160801b0319166001600160801b039290921691909117905561193187611153565b60028054601090611953908490600160801b90046001600160801b0316612c44565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461199c9061124f906001600160801b031684846121c0565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f60605f805f8661ffff1667ffffffffffffffff8111156119e3576119e3612e85565b6040519080825280601f01601f191660200182016040528015611a0d576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115611a2d578692505b828152825f602083013e90999098509650505050505050565b5f610dc7826004610bdd565b5f825f190484118302158202611a66575f80fd5b5091020490565b5f80611a798585611754565b9050611a8481612222565b9450845f03611a96575f91505061110d565b849150611aa96040840160208501612abd565b15611ad857611ad185611abf6020860186612a95565b611acc6040870187612ad8565b61225c565b9150611afb565b611afb85611ae96020860186612a95565b611af66040870187612ad8565b612309565b509392505050565b5f61110d8383670de0b6b3a7640000612322565b6003545f908190611b31906001600160801b03168461211b565b9050611b5d7f000000000000000000000000000000000000000000000000000000000000000082612c11565b6002546001600160801b031611156112c7576002547f000000000000000000000000000000000000000000000000000000000000000090611ba89083906001600160801b0316612bb7565b61110d9190612bb7565b611bba612970565b5f80611bc584611eb3565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611bff9190612ded565b6040805180830381865af4158015611c19573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611c3d9190612dfc565b9350905082611c5157505f91506100a99050565b5f611c77611c7284610160015185610140015161175490919063ffffffff16565b61156b565b611c97611c72856101200151866101000151611b0390919063ffffffff16565b611ca19190612c64565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611dd5573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611df99190612e99565b935093509350935080611e1457505f98975050505050505050565b868414611e4557611e2484611153565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611e7657611e558361216c565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611ea457611e8682611153565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611ebb6129ba565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191611fb39116612345565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192611fe592900416612345565b905292915050565b5f80611ff984846123b9565b90925090508061200b5761200b6121a7565b5092915050565b5f815f036120295750670de0b6b3a7640000610dc7565b825f0361203757505f610dc7565b5f6120418361156b565b90505f6120556120508661156b565b6123f4565b905081810261206c670de0b6b3a764000082612ed7565b905061207781612619565b9695505050505050565b5f825f0361209057508461114a565b81156120e2576120c16120a38487612c11565b6120ad8587611754565b6120b7888a611754565b61171c9190612c11565b90505f6120ce85886112b9565b9050808210156120dc578091505b5061114a565b8285036120f057505f61114a565b6120776120fd8487612bb7565b6121078587611b03565b612111888a611754565b61171c9190612bb7565b5f61110d83670de0b6b3a764000084612322565b5f61110d83670de0b6b3a764000084611a52565b5f60016001607f1b0382111561117c5760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b0319821280612189575060016001607f1b0382135b1561117c5760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b5f806121cc845f6127ab565b6121d6845f6127ab565b6121e09190612c64565b90505f8113156121fb576121f48186612c11565b9450612219565b5f8112156122195761220c81612dd3565b6122169086612bb7565b94505b50929392505050565b6040516363737ac960e11b8152600481018290525f9073__$2547229b0150c03f930e3c2db66c5de7b3$__9063c6e6f592906024016110b9565b604051632e1a7d4d60e01b8152600481018590525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d906024015f604051808303815f87803b1580156122bd575f80fd5b505af11580156122cf573d5f803e3d5ffd5b506122199250506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016905085876127c0565b60405163350b944160e11b815260040160405180910390fd5b5f825f190484118302158202612336575f80fd5b50910281810615159190040190565b5f80670de0b6b3a764000061235861040f565b6123629190612e41565b9050808311612371575f61237b565b61237b8184612bb7565b915061110d6123b2670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612e41565b839061212f565b5f805f836123c68661156b565b6123d09190612c64565b90505f8112156123e6575f8092509250506123ed565b9150600190505b9250929050565b5f8082136124155760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906124989084901c61156b565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361263257505f919050565b680755bf798b4a1bf1e5821261265b576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061207774029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61156b565b5f8183136127b9578161110d565b5090919050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052612812908490612817565b505050565b5f61282b6001600160a01b0384168361287d565b905080515f1415801561284f57508080602001905181019061284d9190612f03565b155b1561281257604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b606061110d83835f845f80856001600160a01b031684866040516128a19190612f1e565b5f6040518083038185875af1925050503d805f81146128db576040519150601f19603f3d011682016040523d82523d5f602084013e6128e0565b606091505b5091509150612077868383606082612900576128fb82612947565b61110d565b815115801561291757506001600160a01b0384163b155b1561294057604051639996b31560e01b81526001600160a01b0385166004820152602401612874565b508061110d565b8051156129575780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806129846129ba565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f60608486031215612a21575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115612a45575f80fd5b840160608187031215612a56575f80fd5b809150509250925092565b5f8060408385031215612a72575f80fd5b50508035926020909101359150565b6001600160a01b03811681146103f5575f80fd5b5f60208284031215612aa5575f80fd5b813561110d81612a81565b80151581146103f5575f80fd5b5f60208284031215612acd575f80fd5b813561110d81612ab0565b5f808335601e19843603018112612aed575f80fd5b83018035915067ffffffffffffffff821115612b07575f80fd5b6020019150368190038213156123ed575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201525f612b7060a083018486612b1b565b98975050505050505050565b634e487b7160e01b5f52601260045260245ffd5b5f82612b9e57612b9e612b7c565b500690565b634e487b7160e01b5f52601160045260245ffd5b81810381811115610dc757610dc7612ba3565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f612c0360e083018486612b1b565b9a9950505050505050505050565b80820180821115610dc757610dc7612ba3565b6001600160701b0381811683821601908082111561200b5761200b612ba3565b6001600160801b0381811683821601908082111561200b5761200b612ba3565b8181035f83128015838313168383128216171561200b5761200b612ba3565b5f60208284031215612c93575f80fd5b815161110d81612a81565b6001600160801b0382811682821603908082111561200b5761200b612ba3565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050612d4f828551612cbe565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215612dc2575f80fd5b505080516020909101519092909150565b5f600160ff1b8201612de757612de7612ba3565b505f0390565b6101808101610dc78284612cbe565b5f8060408385031215612e0d575f80fd5b825191506020830151612e1f81612ab0565b809150509250929050565b5f60208284031215612e3a575f80fd5b5051919050565b8082028115828204841417610dc757610dc7612ba3565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610dc757610dc7612ba3565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215612eac575f80fd5b8451935060208501519250604085015191506060850151612ecc81612ab0565b939692955090935050565b5f82612ee557612ee5612b7c565b600160ff1b82145f1984141615612efe57612efe612ba3565b500590565b5f60208284031215612f13575f80fd5b815161110d81612ab0565b5f82515f5b81811015612f3d5760208186018101518583015201612f23565b505f92019182525091905056fea26469706673582212207f8a80ab1cb14340506caba01813356ee6936a77d84cd4a622ab0d724812deba64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "checkpoint(uint256,uint256)": "414f826d",
  "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
  "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
} as const
};
