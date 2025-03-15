export const RsETHLineaTarget4 = {
  name: 'RsETHLineaTarget4' as const,
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
        "name": "__rsETHPool",
        "type": "address",
        "internalType": "contract IRSETHPoolV2"
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
  },
  {
    "type": "error",
    "name": "UnsupportedToken",
    "inputs": []
  }
] as const,
  bytecode: '0x6102a060405234801562000011575f80fd5b50604051620031f8380380620031f88339810160408190526200003491620001ac565b60015f5582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815190920151909152805160409081015161016052905160609081015161018052908501518216610240529093015161026052908216610220521661028052620002f8565b60405161020081016001600160401b03811182821017156200011957634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b038116811462000136575f80fd5b919050565b5f608082840312156200014c575f80fd5b604051608081016001600160401b03811182821017156200017b57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a0811215620001c1575f80fd5b61026080821215620001d1575f80fd5b620001db620000e9565b9150620001e8866200011f565b8252620001f8602087016200011f565b60208301526200020b604087016200011f565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620002768188016200011f565b908301526101806200028a8782016200011f565b908301526101a06200029e8782016200011f565b908301526101c0620002b28782016200011f565b908301526101e0620002c7888883016200013b565b8184015250819450620002dc8187016200011f565b93505050620002ef61028085016200011f565b90509250925092565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051612de96200040f5f395f818161108901526121f501525f50505f50505f61099201525f50505f818161025f0152611efe01525f818161175e015281816117c101528181611aee01528181611b2a01528181611d1b0152611ed801525f81816105500152611eb201525f61134001525f61149501525f818161070d015261146901525f50505f81816105710152611f2401525f818161064b015261235b01525f81816101e2015281816104160152818161048d01528181610501015281816105cc015261060401525f61225c01525f5050612de95ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c8063074a6de914610043578063414f826d1461006f578063cbc1343414610084575b5f80fd5b6100566100513660046128a4565b610097565b6040805192835260208301919091520160405180910390f35b61008261007d3660046128f6565b6100b1565b005b6100566100923660046128a4565b6100bf565b5f806100a48585856100cc565b915091505b935093915050565b6100bb828261018e565b5050565b5f806100a485858561024a565b5f806100d6610398565b6100df836103c0565b5f6100e86103f8565b90506100ff6100f561040f565b826004600161043a565b5061010d3387838888610a9e565b909350915061011f602085018561292a565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561015d60408b0160208c01612952565b61016a60408c018c61296d565b60405161017c969594939291906129d8565b60405180910390a3506100a960015f55565b610196610398565b5f61019f6103f8565b5f848152600860205260409020600101549091506001600160801b0316156101d2576101cb8183610bdd565b5050610241565b5f6101db61040f565b90506102077f000000000000000000000000000000000000000000000000000000000000000085612a25565b15158061021357508381105b156102315760405163ecd29e8160e01b815260040160405180910390fd5b61023d8483855f61043a565b5050505b6100bb60015f55565b5f80610254610398565b61025d836103c0565b7f000000000000000000000000000000000000000000000000000000000000000085101561029e5760405163211ddda360e11b815260040160405180910390fd5b5f6102a76103f8565b90506102b46100f561040f565b506102c05f3388610dcd565b6102db600360f81b6102d5602087018761292a565b88610ea4565b5f6102f56102ec602087018761292a565b88848989610a9e565b90945090506103048188612a4c565b92505f61031083610f41565b509050610320602087018761292a565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761035e60408d0160208e01612952565b8a888e8060400190610370919061296d565b604051610384989796959493929190612a5f565b60405180910390a35050506100a960015f55565b60025f54036103ba57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f6103ce602083018361292a565b6001600160a01b0316036103f55760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f61040a670de0b6b3a7640000611083565b905090565b5f61040a427f00000000000000000000000000000000000000000000000000000000000000006110ae565b5f84815260086020526040812060018101546001600160801b031615158061046157504286115b1561047a57600101546001600160801b03169050610a96565b5f805f61048561040f565b90505f6104b27f00000000000000000000000000000000000000000000000000000000000000008b612aa6565b90505b81811015610526575f818152600860205260409020600101546001600160801b031680156104fe575f828152600860205260409020549094506001600160801b03169250610526565b507f0000000000000000000000000000000000000000000000000000000000000000016104b5565b835f036105985788935061059561053b6110ca565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006110ea565b92505b506105a283611109565b6001850180546001600160801b0319166001600160801b03929092169190911790556105f86105f17f00000000000000000000000000000000000000000000000000000000000000008b612a4c565b8a84611136565b610636896106306106297f000000000000000000000000000000000000000000000000000000000000000083612aa6565b429061126f565b84611136565b61063f88611283565b505f90506008816106707f00000000000000000000000000000000000000000000000000000000000000008d612a4c565b815260208101919091526040015f908120600101546001600160801b0316915061069b60028c611420565b5f818152600b60205260408120549192508c8c83156107dc57600192505f806106c786898d865f611454565b915091508060095f8282546106dc9190612aa6565b909155506106f79050865f846106f181611521565b8861154a565b6107018183612aa6565b915061073186838a8e877f00000000000000000000000000000000000000000000000000000000000000006116c1565b9150610745610740838561170a565b61171e565b600680546002906107669084906201000090046001600160701b0316612ab9565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061079382611109565b600680546010906107b5908490600160801b90046001600160801b0316612ad9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f6107e8600184611420565b5f818152600b602052604090205490915080156108f357600194505f80610813838b8f886001611454565b915091508060095f8282546108289190612aa6565b909155506108439050835f8461083d81611521565b8a611747565b61084d8183612a4c565b915061085c610740838761170a565b6006805460029061087d9084906201000090046001600160701b0316612ab9565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108aa82611109565b600680546010906108cc908490600160801b90046001600160801b0316612ad9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b841561092c5761091e61090587611521565b61090e83611521565b6109189190612af9565b5f611937565b8e6109298482610bdd565b50505b5f61093684610f41565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109ec573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a109190612b18565b90506001600160a01b03811615610a8457610a815a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190611976565b50505b509b9d50505050505050505050505050505b949350505050565b5f80610aa9856119fc565b505060075485906001600160801b031680821115610ace57806001600160801b031691505b815f03610ae1575f809250925050610bd3565b610af0600360f81b8984610dcd565b6007545f90610b159084906001600160801b03600160801b9091048116908516611a08565b9050610b2083611109565b610b2a9083612b33565b600780546001600160801b0319166001600160801b0392909216919091179055610b5381611109565b60078054601090610b75908490600160801b90046001600160801b0316612b33565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ba4818887611a23565b9350610bb08684611ab9565b841015610bd05760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610c27916001600160801b031690612a4c565b9050805f03610c3a576001915050610dc7565b5f610c4485611acd565b9050805f03610c5857600192505050610dc7565b5f80610c65838589611b68565b9150915080610c7a575f945050505050610dc7565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610cb5929190612bd1565b6040805180830381865af4158015610ccf573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cf39190612c46565b91509150610d11610d0382611521565b610d0c90612c68565b611cd5565b925082610d26575f9650505050505050610dc7565b610d2f82611109565b600780545f90610d499084906001600160801b0316612ad9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d7681611109565b60078054601090610d98908490600160801b90046001600160801b0316612ad9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610e0f57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610e51908490612a4c565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290610ed5908490612aa6565b90915550505f838152600b602052604081208054839290610ef7908490612aa6565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610e97565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610f6887611e69565b6040518263ffffffff1660e01b8152600401610f849190612c82565b6040805180830381865af4158015610f9e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fc29190612c91565b9150915080610fd757505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161103c91612aa6565b6110469190612a4c565b9050805f0361105c57505f958695509350505050565b5f80871161106a575f611075565b611075848884611a08565b976001975095505050505050565b5f610dc77f000000000000000000000000000000000000000000000000000000000000000083611fa3565b5f6110b98284612a25565b6110c39084612a4c565b9392505050565b6002546004545f9161040a916001600160801b0390911690600f0b611fba565b5f611100826110fa858888611a08565b90611fdf565b95945050505050565b5f6001600160801b0382111561113257604051630f0af95160e11b815260040160405180910390fd5b5090565b5f83815260086020526040902054600160801b90046001600160801b03168083036111615750505050565b5f848152600860205260408120546001600160801b0316908190036111b95761118983611109565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611236565b61120a611205670de0b6b3a76400006111d28886612a4c565b6111dc9190612cbf565b85670de0b6b3a76400006111f0878a612a4c565b6111fa9190612cbf565b85929190600161204e565b611109565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61123f84611109565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f81831161127d57826110c3565b50919050565b6006545f9081906112a5908490600160801b90046001600160801b031661170a565b6006546201000090046001600160701b0316925090508181111561141b575f6112ce8383612a4c565b90506112dd61120582866120e8565b600680546010906112ff908490600160801b90046001600160801b0316612b33565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61133785836120fc90919063ffffffff16565b90505f611364827f000000000000000000000000000000000000000000000000000000000000000061170a565b90508060095f8282546113779190612aa6565b9091555061138790508183612a4c565b915061139282611109565b600280545f906113ac9084906001600160801b0316612ad9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506113d982612110565b600480545f906113ed908490600f0b612cd6565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b038211156114495760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f8061146087856120fc565b91505f61148d837f000000000000000000000000000000000000000000000000000000000000000061170a565b90506114b9817f000000000000000000000000000000000000000000000000000000000000000061170a565b915083156114dc576114cb8282612a4c565b6114d59084612a4c565b92506114f3565b6114e68282612a4c565b6114f09084612aa6565b92505b8686101561151657611506838789611a08565b9250611513828789611a08565b91505b509550959350505050565b5f6001600160ff1b038211156111325760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b031661159261120582611576670de0b6b3a764000086612cbf565b600554600160801b90046001600160801b031691908a5f61204e565b600580546001600160801b03928316600160801b0292169190911790556115b886611109565b6115c29082612b33565b600480546001600160801b03928316600160801b0292169190911790556115e884611109565b600280545f906116029084906001600160801b0316612ad9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061162f83612139565b600480545f90611643908490600f0b612cd6565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061167385611109565b60028054601090611695908490600160801b90046001600160801b0316612b33565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f806116d8846116d28a888a611a08565b906120fc565b90506116e5888486611a08565b6116ef9082612aa6565b9050868111156116ff5786810391505b509695505050505050565b5f6110c38383670de0b6b3a7640000611a08565b5f6001600160701b038211156111325760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061178957507f00000000000000000000000000000000000000000000000000000000000000006117878583612a4c565b105b1561179657611796612174565b6004549084900390600f0b6117ab8482612af9565b9050836117b786611521565b1380156117ec57507f00000000000000000000000000000000000000000000000000000000000000006117ea8383611fba565b105b156117f9576117f9612174565b600354600160801b90046001600160801b031661183a61120582611825670de0b6b3a764000088612cbf565b6005546001600160801b031691908c5f61204e565b600580546001600160801b0319166001600160801b03929092169190911790556118648882612a4c565b905061186f81611109565b600380546001600160801b03928316600160801b02921691909117905561189583611109565b600280546001600160801b0319166001600160801b03929092169190911790556118be82612139565b600480546001600160801b0319166001600160801b03929092169190911790556118e787611109565b60028054601090611909908490600160801b90046001600160801b0316612ad9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461195290611205906001600160801b0316848461218d565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f60605f805f8661ffff1667ffffffffffffffff81111561199957611999612d03565b6040519080825280601f01601f1916602001820160405280156119c3576020820181803683370190505b5090505f808751602089018b8e8ef191503d9250868311156119e3578692505b828152825f602083013e90999098509650505050505050565b5f610dc7826004610bdd565b5f825f190484118302158202611a1c575f80fd5b5091020490565b5f80611a2f858561170a565b9050611a3a816121ef565b9450845f03611a4c575f9150506110c3565b849150611a5f6040840160208501612952565b15611a8e57611a8785611a75602086018661292a565b611a82604087018761296d565b61221a565b9150611ab1565b611ab185611a9f602086018661292a565b611aac604087018761296d565b612234565b509392505050565b5f6110c38383670de0b6b3a76400006122ef565b6003545f908190611ae7906001600160801b0316846120e8565b9050611b137f000000000000000000000000000000000000000000000000000000000000000082612aa6565b6002546001600160801b0316111561127d576002547f000000000000000000000000000000000000000000000000000000000000000090611b5e9083906001600160801b0316612a4c565b6110c39190612a4c565b611b70612805565b5f80611b7b84611e69565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611bb59190612c82565b6040805180830381865af4158015611bcf573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611bf39190612c91565b9350905082611c0757505f91506100a99050565b5f611c2d611c2884610160015185610140015161170a90919063ffffffff16565b611521565b611c4d611c28856101200151866101000151611ab990919063ffffffff16565b611c579190612af9565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611d8b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611daf9190612d17565b935093509350935080611dca57505f98975050505050505050565b868414611dfb57611dda84611109565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611e2c57611e0b83612139565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611e5a57611e3c82611109565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611e7161284f565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191611f699116612312565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192611f9b92900416612312565b905292915050565b5f80611fae84612386565b9050610a96838261170a565b5f80611fc684846123e7565b909250905080611fd857611fd8612174565b5092915050565b5f815f03611ff65750670de0b6b3a7640000610dc7565b825f0361200457505f610dc7565b5f61200e83611521565b90505f61202261201d86611521565b612422565b9050818102612039670de0b6b3a764000082612d55565b905061204481612647565b9695505050505050565b5f825f0361205d575084611100565b81156120af5761208e6120708487612aa6565b61207a858761170a565b612084888a61170a565b6116d29190612aa6565b90505f61209b858861126f565b9050808210156120a9578091505b50611100565b8285036120bd57505f611100565b6120446120ca8487612a4c565b6120d48587611ab9565b6120de888a61170a565b6116d29190612a4c565b5f6110c383670de0b6b3a7640000846122ef565b5f6110c383670de0b6b3a764000084611a08565b5f60016001607f1b038211156111325760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b0319821280612156575060016001607f1b0382135b156111325760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b5f80612199845f6127d9565b6121a3845f6127d9565b6121ad9190612af9565b90505f8113156121c8576121c18186612aa6565b94506121e6565b5f8112156121e6576121d981612c68565b6121e39086612a4c565b94505b50929392505050565b5f610dc77f0000000000000000000000000000000000000000000000000000000000000000836127ee565b5f60405163350b944160e11b815260040160405180910390fd5b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018690525f917f00000000000000000000000000000000000000000000000000000000000000009091169063a9059cbb906044016020604051808303815f875af11580156122a4573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906122c89190612d81565b9050806122e8576040516312171d8360e31b815260040160405180910390fd5b5050505050565b5f825f190484118302158202612303575f80fd5b50910281810615159190040190565b5f80670de0b6b3a764000061232561040f565b61232f9190612cbf565b905080831161233e575f612348565b6123488184612a4c565b91506110c361237f670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612cbf565b83906120fc565b5f816001600160a01b031663679aefce6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156123c3573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610dc79190612d9c565b5f805f836123f486611521565b6123fe9190612af9565b90505f811215612414575f80925092505061241b565b9150600190505b9250929050565b5f8082136124435760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906124c69084901c611521565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361266057505f919050565b680755bf798b4a1bf1e58212612689576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061204474029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611521565b5f8183136127e757816110c3565b5090919050565b5f806127f984612386565b9050610a9683826120fc565b60405180610120016040528061281961284f565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f606084860312156128b6575f80fd5b8335925060208401359150604084013567ffffffffffffffff8111156128da575f80fd5b8401606081870312156128eb575f80fd5b809150509250925092565b5f8060408385031215612907575f80fd5b50508035926020909101359150565b6001600160a01b03811681146103f5575f80fd5b5f6020828403121561293a575f80fd5b81356110c381612916565b80151581146103f5575f80fd5b5f60208284031215612962575f80fd5b81356110c381612945565b5f808335601e19843603018112612982575f80fd5b83018035915067ffffffffffffffff82111561299c575f80fd5b60200191503681900382131561241b575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201525f612a0560a0830184866129b0565b98975050505050505050565b634e487b7160e01b5f52601260045260245ffd5b5f82612a3357612a33612a11565b500690565b634e487b7160e01b5f52601160045260245ffd5b81810381811115610dc757610dc7612a38565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f612a9860e0830184866129b0565b9a9950505050505050505050565b80820180821115610dc757610dc7612a38565b6001600160701b03818116838216019080821115611fd857611fd8612a38565b6001600160801b03818116838216019080821115611fd857611fd8612a38565b8181035f831280158383131683831282161715611fd857611fd8612a38565b5f60208284031215612b28575f80fd5b81516110c381612916565b6001600160801b03828116828216039080821115611fd857611fd8612a38565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050612be4828551612b53565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215612c57575f80fd5b505080516020909101519092909150565b5f600160ff1b8201612c7c57612c7c612a38565b505f0390565b6101808101610dc78284612b53565b5f8060408385031215612ca2575f80fd5b825191506020830151612cb481612945565b809150509250929050565b8082028115828204841417610dc757610dc7612a38565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610dc757610dc7612a38565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215612d2a575f80fd5b8451935060208501519250604085015191506060850151612d4a81612945565b939692955090935050565b5f82612d6357612d63612a11565b600160ff1b82145f1984141615612d7c57612d7c612a38565b500590565b5f60208284031215612d91575f80fd5b81516110c381612945565b5f60208284031215612dac575f80fd5b505191905056fea2646970667358221220929fe2a5c8256aceea52af7669ccc0a89ada88f9cb3384ed4afb03ef095c282a64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "checkpoint(uint256,uint256)": "414f826d",
  "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
  "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
} as const
};
