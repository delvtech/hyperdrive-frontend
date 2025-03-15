export const EETHTarget4 = {
  name: 'EETHTarget4' as const,
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
        "name": "_liquidityPool",
        "type": "address",
        "internalType": "contract ILiquidityPool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "_liquidityPool",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract ILiquidityPool"
      }
    ],
    "stateMutability": "view"
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
  },
  {
    "type": "error",
    "name": "UnsupportedToken",
    "inputs": []
  }
] as const,
  bytecode: '0x6102a060405234801562000011575f80fd5b50604051620033a8380380620033a88339810160408190526200003491620001ac565b60015f5582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815190920151909152805160409081015161016052905160609081015161018052908501518216610240529093015161026052908216610220521661028052620002f8565b60405161020081016001600160401b03811182821017156200011957634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b038116811462000136575f80fd5b919050565b5f608082840312156200014c575f80fd5b604051608081016001600160401b03811182821017156200017b57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a0811215620001c1575f80fd5b61026080821215620001d1575f80fd5b620001db620000e9565b9150620001e8866200011f565b8252620001f8602087016200011f565b60208301526200020b604087016200011f565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620002768188016200011f565b908301526101806200028a8782016200011f565b908301526101a06200029e8782016200011f565b908301526101c0620002b28782016200011f565b908301526101e0620002c7888883016200013b565b8184015250819450620002dc8187016200011f565b93505050620002ef61028085016200011f565b90509250925092565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051612f85620004235f395f81816080015281816110d4015261232901525f50505f50505f6109dd01525f50505f81816102aa0152611f6a01525f81816117ca0152818161182d01528181611b5a01528181611b9601528181611d870152611f4401525f818161059b0152611f1e01525f6113ac01525f61150101525f818161075801526114d501525f50505f81816105bc0152611f9001525f818161069601526124bc01525f818161022d01528181610461015281816104d80152818161054c01528181610617015261064f01525f81816110f50152818161234a01526123be01525f5050612f855ff3fe608060405234801561000f575f80fd5b506004361061004a575f3560e01c8063074a6de91461004e578063207deba01461007b578063414f826d146100ba578063cbc13434146100cf575b5f80fd5b61006161005c366004612a40565b6100e2565b604080519283526020830191909152015b60405180910390f35b6100a27f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610072565b6100cd6100c8366004612a92565b6100fc565b005b6100616100dd366004612a40565b61010a565b5f806100ef858585610117565b915091505b935093915050565b61010682826101d9565b5050565b5f806100ef858585610295565b5f806101216103e3565b61012a8361040b565b5f610133610443565b905061014a61014061045a565b8260046001610485565b506101583387838888610ae9565b909350915061016a6020850185612ac6565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b588486856101a860408b0160208c01612aee565b6101b560408c018c612b09565b6040516101c796959493929190612b74565b60405180910390a3506100f460015f55565b6101e16103e3565b5f6101ea610443565b5f848152600860205260409020600101549091506001600160801b03161561021d576102168183610c28565b505061028c565b5f61022661045a565b90506102527f000000000000000000000000000000000000000000000000000000000000000085612bc1565b15158061025e57508381105b1561027c5760405163ecd29e8160e01b815260040160405180910390fd5b6102888483855f610485565b5050505b61010660015f55565b5f8061029f6103e3565b6102a88361040b565b7f00000000000000000000000000000000000000000000000000000000000000008510156102e95760405163211ddda360e11b815260040160405180910390fd5b5f6102f2610443565b90506102ff61014061045a565b5061030b5f3388610e18565b610326600360f81b6103206020870187612ac6565b88610eef565b5f6103406103376020870187612ac6565b88848989610ae9565b909450905061034f8188612be8565b92505f61035b83610f8c565b50905061036b6020870187612ac6565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a88876103a960408d0160208e01612aee565b8a888e80604001906103bb9190612b09565b6040516103cf989796959493929190612bfb565b60405180910390a35050506100f460015f55565b60025f540361040557604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f6104196020830183612ac6565b6001600160a01b0316036104405760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f610455670de0b6b3a76400006110ce565b905090565b5f610455427f000000000000000000000000000000000000000000000000000000000000000061111a565b5f84815260086020526040812060018101546001600160801b03161515806104ac57504286115b156104c557600101546001600160801b03169050610ae1565b5f805f6104d061045a565b90505f6104fd7f00000000000000000000000000000000000000000000000000000000000000008b612c42565b90505b81811015610571575f818152600860205260409020600101546001600160801b03168015610549575f828152600860205260409020549094506001600160801b03169250610571565b507f000000000000000000000000000000000000000000000000000000000000000001610500565b835f036105e3578893506105e0610586611136565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611156565b92505b506105ed83611175565b6001850180546001600160801b0319166001600160801b039290921691909117905561064361063c7f00000000000000000000000000000000000000000000000000000000000000008b612be8565b8a846111a2565b6106818961067b6106747f000000000000000000000000000000000000000000000000000000000000000083612c42565b42906112db565b846111a2565b61068a886112ef565b505f90506008816106bb7f00000000000000000000000000000000000000000000000000000000000000008d612be8565b815260208101919091526040015f908120600101546001600160801b031691506106e660028c61148c565b5f818152600b60205260408120549192508c8c831561082757600192505f8061071286898d865f6114c0565b915091508060095f8282546107279190612c42565b909155506107429050865f8461073c8161158d565b886115b6565b61074c8183612c42565b915061077c86838a8e877f000000000000000000000000000000000000000000000000000000000000000061172d565b915061079061078b8385611776565b61178a565b600680546002906107b19084906201000090046001600160701b0316612c55565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506107de82611175565b60068054601090610800908490600160801b90046001600160801b0316612c75565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f61083360018461148c565b5f818152600b6020526040902054909150801561093e57600194505f8061085e838b8f8860016114c0565b915091508060095f8282546108739190612c42565b9091555061088e9050835f846108888161158d565b8a6117b3565b6108988183612be8565b91506108a761078b8387611776565b600680546002906108c89084906201000090046001600160701b0316612c55565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108f582611175565b60068054601090610917908490600160801b90046001600160801b0316612c75565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610977576109696109508761158d565b6109598361158d565b6109639190612c95565b5f6119a3565b8e6109748482610c28565b50505b5f61098184610f8c565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a37573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a5b9190612cb4565b90506001600160a01b03811615610acf57610acc5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906119e2565b50505b509b9d50505050505050505050505050505b949350505050565b5f80610af485611a68565b505060075485906001600160801b031680821115610b1957806001600160801b031691505b815f03610b2c575f809250925050610c1e565b610b3b600360f81b8984610e18565b6007545f90610b609084906001600160801b03600160801b9091048116908516611a74565b9050610b6b83611175565b610b759083612ccf565b600780546001600160801b0319166001600160801b0392909216919091179055610b9e81611175565b60078054601090610bc0908490600160801b90046001600160801b0316612ccf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610bef818887611a8f565b9350610bfb8684611b25565b841015610c1b5760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610c72916001600160801b031690612be8565b9050805f03610c85576001915050610e12565b5f610c8f85611b39565b9050805f03610ca357600192505050610e12565b5f80610cb0838589611bd4565b9150915080610cc5575f945050505050610e12565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610d00929190612d6d565b6040805180830381865af4158015610d1a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d3e9190612de2565b91509150610d5c610d4e8261158d565b610d5790612e04565b611d41565b925082610d71575f9650505050505050610e12565b610d7a82611175565b600780545f90610d949084906001600160801b0316612c75565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610dc181611175565b60078054601090610de3908490600160801b90046001600160801b0316612c75565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610e5a57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610e9c908490612be8565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290610f20908490612c42565b90915550505f838152600b602052604081208054839290610f42908490612c42565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610ee2565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610fb387611ed5565b6040518263ffffffff1660e01b8152600401610fcf9190612e1e565b6040805180830381865af4158015610fe9573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061100d9190612e2d565b915091508061102257505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161108791612c42565b6110919190612be8565b9050805f036110a757505f958695509350505050565b5f8087116110b5575f6110c0565b6110c0848884611a74565b976001975095505050505050565b5f610e127f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008461200f565b5f6111258284612bc1565b61112f9084612be8565b9392505050565b6002546004545f91610455916001600160801b0390911690600f0b6120ee565b5f61116c82611166858888611a74565b90612113565b95945050505050565b5f6001600160801b0382111561119e57604051630f0af95160e11b815260040160405180910390fd5b5090565b5f83815260086020526040902054600160801b90046001600160801b03168083036111cd5750505050565b5f848152600860205260408120546001600160801b031690819003611225576111f583611175565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790556112a2565b611276611271670de0b6b3a764000061123e8886612be8565b6112489190612e5b565b85670de0b6b3a764000061125c878a612be8565b6112669190612e5b565b859291906001612182565b611175565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6112ab84611175565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f8183116112e9578261112f565b50919050565b6006545f908190611311908490600160801b90046001600160801b0316611776565b6006546201000090046001600160701b03169250905081811115611487575f61133a8383612be8565b9050611349611271828661221c565b6006805460109061136b908490600160801b90046001600160801b0316612ccf565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f6113a3858361223090919063ffffffff16565b90505f6113d0827f0000000000000000000000000000000000000000000000000000000000000000611776565b90508060095f8282546113e39190612c42565b909155506113f390508183612be8565b91506113fe82611175565b600280545f906114189084906001600160801b0316612c75565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061144582612244565b600480545f90611459908490600f0b612e72565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b038211156114b55760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f806114cc8785612230565b91505f6114f9837f0000000000000000000000000000000000000000000000000000000000000000611776565b9050611525817f0000000000000000000000000000000000000000000000000000000000000000611776565b91508315611548576115378282612be8565b6115419084612be8565b925061155f565b6115528282612be8565b61155c9084612c42565b92505b8686101561158257611572838789611a74565b925061157f828789611a74565b91505b509550959350505050565b5f6001600160ff1b0382111561119e5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b03166115fe611271826115e2670de0b6b3a764000086612e5b565b600554600160801b90046001600160801b031691908a5f612182565b600580546001600160801b03928316600160801b02921691909117905561162486611175565b61162e9082612ccf565b600480546001600160801b03928316600160801b02921691909117905561165484611175565b600280545f9061166e9084906001600160801b0316612c75565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061169b8361226d565b600480545f906116af908490600f0b612e72565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506116df85611175565b60028054601090611701908490600160801b90046001600160801b0316612ccf565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f806117448461173e8a888a611a74565b90612230565b9050611751888486611a74565b61175b9082612c42565b90508681111561176b5786810391505b509695505050505050565b5f61112f8383670de0b6b3a7640000611a74565b5f6001600160701b0382111561119e5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806117f557507f00000000000000000000000000000000000000000000000000000000000000006117f38583612be8565b105b15611802576118026122a8565b6004549084900390600f0b6118178482612c95565b9050836118238661158d565b13801561185857507f000000000000000000000000000000000000000000000000000000000000000061185683836120ee565b105b15611865576118656122a8565b600354600160801b90046001600160801b03166118a661127182611891670de0b6b3a764000088612e5b565b6005546001600160801b031691908c5f612182565b600580546001600160801b0319166001600160801b03929092169190911790556118d08882612be8565b90506118db81611175565b600380546001600160801b03928316600160801b02921691909117905561190183611175565b600280546001600160801b0319166001600160801b039290921691909117905561192a8261226d565b600480546001600160801b0319166001600160801b039290921691909117905561195387611175565b60028054601090611975908490600160801b90046001600160801b0316612c75565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6003546119be90611271906001600160801b031684846122c1565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f60605f805f8661ffff1667ffffffffffffffff811115611a0557611a05612e9f565b6040519080825280601f01601f191660200182016040528015611a2f576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115611a4f578692505b828152825f602083013e90999098509650505050505050565b5f610e12826004610c28565b5f825f190484118302158202611a88575f80fd5b5091020490565b5f80611a9b8585611776565b9050611aa681612323565b9450845f03611ab8575f91505061112f565b849150611acb6040840160208501612aee565b15611afa57611af385611ae16020860186612ac6565b611aee6040870187612b09565b61236f565b9150611b1d565b611b1d85611b0b6020860186612ac6565b611b186040870187612b09565b612389565b509392505050565b5f61112f8383670de0b6b3a7640000612450565b6003545f908190611b53906001600160801b03168461221c565b9050611b7f7f000000000000000000000000000000000000000000000000000000000000000082612c42565b6002546001600160801b031611156112e9576002547f000000000000000000000000000000000000000000000000000000000000000090611bca9083906001600160801b0316612be8565b61112f9190612be8565b611bdc6129a1565b5f80611be784611ed5565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611c219190612e1e565b6040805180830381865af4158015611c3b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611c5f9190612e2d565b9350905082611c7357505f91506100f49050565b5f611c99611c9484610160015185610140015161177690919063ffffffff16565b61158d565b611cb9611c94856101200151866101000151611b2590919063ffffffff16565b611cc39190612c95565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611df7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e1b9190612eb3565b935093509350935080611e3657505f98975050505050505050565b868414611e6757611e4684611175565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611e9857611e778361226d565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611ec657611ea882611175565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611edd6129eb565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191611fd59116612473565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261200792900416612473565b905292915050565b5f80836001600160a01b0316633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa15801561204d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120719190612ef1565b9050805f03612083575f91505061112f565b61116c856001600160a01b03166337cfdaca6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156120c2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120e69190612ef1565b849083611a74565b5f806120fa84846124e7565b90925090508061210c5761210c6122a8565b5092915050565b5f815f0361212a5750670de0b6b3a7640000610e12565b825f0361213857505f610e12565b5f6121428361158d565b90505f6121566121518661158d565b612522565b905081810261216d670de0b6b3a764000082612f08565b905061217881612747565b9695505050505050565b5f825f0361219157508461116c565b81156121e3576121c26121a48487612c42565b6121ae8587611776565b6121b8888a611776565b61173e9190612c42565b90505f6121cf85886112db565b9050808210156121dd578091505b5061116c565b8285036121f157505f61116c565b6121786121fe8487612be8565b6122088587611b25565b612212888a611776565b61173e9190612be8565b5f61112f83670de0b6b3a764000084612450565b5f61112f83670de0b6b3a764000084611a74565b5f60016001607f1b0382111561119e5760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b031982128061228a575060016001607f1b0382135b1561119e5760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b5f806122cd845f6128d9565b6122d7845f6128d9565b6122e19190612c95565b90505f8113156122fc576122f58186612c42565b945061231a565b5f81121561231a5761230d81612e04565b6123179086612be8565b94505b50929392505050565b5f610e127f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000846128ee565b5f60405163350b944160e11b815260040160405180910390fd5b5f612393856110ce565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018390529192505f917f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303815f875af1158015612404573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906124289190612f34565b905080612448576040516312171d8360e31b815260040160405180910390fd5b505050505050565b5f825f190484118302158202612464575f80fd5b50910281810615159190040190565b5f80670de0b6b3a764000061248661045a565b6124909190612e5b565b905080831161249f575f6124a9565b6124a98184612be8565b915061112f6124e0670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612e5b565b8390612230565b5f805f836124f48661158d565b6124fe9190612c95565b90505f811215612514575f80925092505061251b565b9150600190505b9250929050565b5f8082136125435760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906125c69084901c61158d565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361276057505f919050565b680755bf798b4a1bf1e58212612789576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061217874029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61158d565b5f8183136128e7578161112f565b5090919050565b5f80846001600160a01b03166337cfdaca6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561292c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906129509190612ef1565b9050805f03612962575f91505061112f565b61116c846001600160a01b0316633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa1580156120c2573d5f803e3d5ffd5b6040518061012001604052806129b56129eb565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f60608486031215612a52575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115612a76575f80fd5b840160608187031215612a87575f80fd5b809150509250925092565b5f8060408385031215612aa3575f80fd5b50508035926020909101359150565b6001600160a01b0381168114610440575f80fd5b5f60208284031215612ad6575f80fd5b813561112f81612ab2565b8015158114610440575f80fd5b5f60208284031215612afe575f80fd5b813561112f81612ae1565b5f808335601e19843603018112612b1e575f80fd5b83018035915067ffffffffffffffff821115612b38575f80fd5b60200191503681900382131561251b575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201525f612ba160a083018486612b4c565b98975050505050505050565b634e487b7160e01b5f52601260045260245ffd5b5f82612bcf57612bcf612bad565b500690565b634e487b7160e01b5f52601160045260245ffd5b81810381811115610e1257610e12612bd4565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f612c3460e083018486612b4c565b9a9950505050505050505050565b80820180821115610e1257610e12612bd4565b6001600160701b0381811683821601908082111561210c5761210c612bd4565b6001600160801b0381811683821601908082111561210c5761210c612bd4565b8181035f83128015838313168383128216171561210c5761210c612bd4565b5f60208284031215612cc4575f80fd5b815161112f81612ab2565b6001600160801b0382811682821603908082111561210c5761210c612bd4565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050612d80828551612cef565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215612df3575f80fd5b505080516020909101519092909150565b5f600160ff1b8201612e1857612e18612bd4565b505f0390565b6101808101610e128284612cef565b5f8060408385031215612e3e575f80fd5b825191506020830151612e5081612ae1565b809150509250929050565b8082028115828204841417610e1257610e12612bd4565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610e1257610e12612bd4565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215612ec6575f80fd5b8451935060208501519250604085015191506060850151612ee681612ae1565b939692955090935050565b5f60208284031215612f01575f80fd5b5051919050565b5f82612f1657612f16612bad565b600160ff1b82145f1984141615612f2f57612f2f612bd4565b500590565b5f60208284031215612f44575f80fd5b815161112f81612ae156fea26469706673582212209e9db331913f1dd6fb168cb5030c609ae43e200ef2d9b0b169ea046ca21ea35464736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "_liquidityPool()": "207deba0",
  "checkpoint(uint256,uint256)": "414f826d",
  "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
  "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
} as const
};
