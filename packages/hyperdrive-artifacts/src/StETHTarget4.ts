export const StETHTarget4 = {
  name: 'StETHTarget4' as const,
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
  bytecode: '0x61028060405234801562000011575f80fd5b5060405162003191380380620031918339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051612d9e620003f35f395f50505f50505f61099201525f50505f818161025f0152611f5d01525f81816117bd0152818161182001528181611b4d01528181611b8901528181611d7a0152611f3701525f81816105500152611f1101525f61139f01525f6114f401525f818161070d01526114c801525f50505f81816105710152611f8301525f818161064b01526123a301525f81816101e2015281816104160152818161048d01528181610501015281816105cc015261060401525f818161109b0152818161224f01526122c601525f5050612d9e5ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c8063074a6de914610043578063414f826d1461006f578063cbc1343414610084575b5f80fd5b610056610051366004612874565b610097565b6040805192835260208301919091520160405180910390f35b61008261007d3660046128c6565b6100b1565b005b610056610092366004612874565b6100bf565b5f806100a48585856100cc565b915091505b935093915050565b6100bb828261018e565b5050565b5f806100a485858561024a565b5f806100d6610398565b6100df836103c0565b5f6100e86103f8565b90506100ff6100f561040f565b826004600161043a565b5061010d3387838888610a9e565b909350915061011f60208501856128fa565b6001600160a01b0316337f07210cf9a89fae8012341fdc131255728787856379269f07c2e41c23b3c09b5884868561015d60408b0160208c01612922565b61016a60408c018c61293d565b60405161017c969594939291906129a8565b60405180910390a3506100a960015f55565b610196610398565b5f61019f6103f8565b5f848152600860205260409020600101549091506001600160801b0316156101d2576101cb8183610bdd565b5050610241565b5f6101db61040f565b90506102077f0000000000000000000000000000000000000000000000000000000000000000856129f5565b15158061021357508381105b156102315760405163ecd29e8160e01b815260040160405180910390fd5b61023d8483855f61043a565b5050505b6100bb60015f55565b5f80610254610398565b61025d836103c0565b7f000000000000000000000000000000000000000000000000000000000000000085101561029e5760405163211ddda360e11b815260040160405180910390fd5b5f6102a76103f8565b90506102b46100f561040f565b506102c05f3388610dcd565b6102db600360f81b6102d560208701876128fa565b88610ea4565b5f6102f56102ec60208701876128fa565b88848989610a9e565b90945090506103048188612a1c565b92505f61031083610f41565b50905061032060208701876128fa565b6001600160a01b0316337f1c7999deb68182de77ce89d32f82d0e13eb042921b2bfa9f35aa1c43f62f261e8a888761035e60408d0160208e01612922565b8a888e8060400190610370919061293d565b604051610384989796959493929190612a2f565b60405180910390a35050506100a960015f55565b60025f54036103ba57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f6103ce60208301836128fa565b6001600160a01b0316036103f55760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f61040a670de0b6b3a7640000611083565b905090565b5f61040a427f000000000000000000000000000000000000000000000000000000000000000061110d565b5f84815260086020526040812060018101546001600160801b031615158061046157504286115b1561047a57600101546001600160801b03169050610a96565b5f805f61048561040f565b90505f6104b27f00000000000000000000000000000000000000000000000000000000000000008b612a76565b90505b81811015610526575f818152600860205260409020600101546001600160801b031680156104fe575f828152600860205260409020549094506001600160801b03169250610526565b507f0000000000000000000000000000000000000000000000000000000000000000016104b5565b835f036105985788935061059561053b611129565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611149565b92505b506105a283611168565b6001850180546001600160801b0319166001600160801b03929092169190911790556105f86105f17f00000000000000000000000000000000000000000000000000000000000000008b612a1c565b8a84611195565b610636896106306106297f000000000000000000000000000000000000000000000000000000000000000083612a76565b42906112ce565b84611195565b61063f886112e2565b505f90506008816106707f00000000000000000000000000000000000000000000000000000000000000008d612a1c565b815260208101919091526040015f908120600101546001600160801b0316915061069b60028c61147f565b5f818152600b60205260408120549192508c8c83156107dc57600192505f806106c786898d865f6114b3565b915091508060095f8282546106dc9190612a76565b909155506106f79050865f846106f181611580565b886115a9565b6107018183612a76565b915061073186838a8e877f0000000000000000000000000000000000000000000000000000000000000000611720565b91506107456107408385611769565b61177d565b600680546002906107669084906201000090046001600160701b0316612a89565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061079382611168565b600680546010906107b5908490600160801b90046001600160801b0316612aa9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f6107e860018461147f565b5f818152600b602052604090205490915080156108f357600194505f80610813838b8f8860016114b3565b915091508060095f8282546108289190612a76565b909155506108439050835f8461083d81611580565b8a6117a6565b61084d8183612a1c565b915061085c6107408387611769565b6006805460029061087d9084906201000090046001600160701b0316612a89565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506108aa82611168565b600680546010906108cc908490600160801b90046001600160801b0316612aa9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b841561092c5761091e61090587611580565b61090e83611580565b6109189190612ac9565b5f611996565b8e6109298482610bdd565b50505b5f61093684610f41565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109ec573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a109190612ae8565b90506001600160a01b03811615610a8457610a815a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906119d5565b50505b509b9d50505050505050505050505050505b949350505050565b5f80610aa985611a5b565b505060075485906001600160801b031680821115610ace57806001600160801b031691505b815f03610ae1575f809250925050610bd3565b610af0600360f81b8984610dcd565b6007545f90610b159084906001600160801b03600160801b9091048116908516611a67565b9050610b2083611168565b610b2a9083612b03565b600780546001600160801b0319166001600160801b0392909216919091179055610b5381611168565b60078054601090610b75908490600160801b90046001600160801b0316612b03565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ba4818887611a82565b9350610bb08684611b18565b841015610bd05760405163c972651760e01b815260040160405180910390fd5b50505b9550959350505050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291610c27916001600160801b031690612a1c565b9050805f03610c3a576001915050610dc7565b5f610c4485611b2c565b9050805f03610c5857600192505050610dc7565b5f80610c65838589611bc7565b9150915080610c7a575f945050505050610dc7565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401610cb5929190612ba1565b6040805180830381865af4158015610ccf573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cf39190612c16565b91509150610d11610d0382611580565b610d0c90612c38565b611d34565b925082610d26575f9650505050505050610dc7565b610d2f82611168565b600780545f90610d499084906001600160801b0316612aa9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d7681611168565b60078054601090610d98908490600160801b90046001600160801b0316612aa9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600196505050505050505b92915050565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610e0f57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610e51908490612a1c565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290610ed5908490612a76565b90915550505f838152600b602052604081208054839290610ef7908490612a76565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610e97565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e610f6887611ec8565b6040518263ffffffff1660e01b8152600401610f849190612c52565b6040805180830381865af4158015610f9e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fc29190612c61565b9150915080610fd757505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161103c91612a76565b6110469190612a1c565b9050805f0361105c57505f958695509350505050565b5f80871161106a575f611075565b611075848884611a67565b976001975095505050505050565b604051630f451f7160e31b8152600481018290525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb88906024015b602060405180830381865afa1580156110e9573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610dc79190612c8f565b5f61111882846129f5565b6111229084612a1c565b9392505050565b6002546004545f9161040a916001600160801b0390911690600f0b612002565b5f61115f82611159858888611a67565b90612027565b95945050505050565b5f6001600160801b0382111561119157604051630f0af95160e11b815260040160405180910390fd5b5090565b5f83815260086020526040902054600160801b90046001600160801b03168083036111c05750505050565b5f848152600860205260408120546001600160801b031690819003611218576111e883611168565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611295565b611269611264670de0b6b3a76400006112318886612a1c565b61123b9190612ca6565b85670de0b6b3a764000061124f878a612a1c565b6112599190612ca6565b859291906001612096565b611168565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61129e84611168565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f8183116112dc5782611122565b50919050565b6006545f908190611304908490600160801b90046001600160801b0316611769565b6006546201000090046001600160701b0316925090508181111561147a575f61132d8383612a1c565b905061133c6112648286612130565b6006805460109061135e908490600160801b90046001600160801b0316612b03565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611396858361214490919063ffffffff16565b90505f6113c3827f0000000000000000000000000000000000000000000000000000000000000000611769565b90508060095f8282546113d69190612a76565b909155506113e690508183612a1c565b91506113f182611168565b600280545f9061140b9084906001600160801b0316612aa9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061143882612158565b600480545f9061144c908490600f0b612cbd565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b038211156114a85760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f806114bf8785612144565b91505f6114ec837f0000000000000000000000000000000000000000000000000000000000000000611769565b9050611518817f0000000000000000000000000000000000000000000000000000000000000000611769565b9150831561153b5761152a8282612a1c565b6115349084612a1c565b9250611552565b6115458282612a1c565b61154f9084612a76565b92505b8686101561157557611565838789611a67565b9250611572828789611a67565b91505b509550959350505050565b5f6001600160ff1b038211156111915760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b03166115f1611264826115d5670de0b6b3a764000086612ca6565b600554600160801b90046001600160801b031691908a5f612096565b600580546001600160801b03928316600160801b02921691909117905561161786611168565b6116219082612b03565b600480546001600160801b03928316600160801b02921691909117905561164784611168565b600280545f906116619084906001600160801b0316612aa9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061168e83612181565b600480545f906116a2908490600f0b612cbd565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506116d285611168565b600280546010906116f4908490600160801b90046001600160801b0316612b03565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80611737846117318a888a611a67565b90612144565b9050611744888486611a67565b61174e9082612a76565b90508681111561175e5786810391505b509695505050505050565b5f6111228383670de0b6b3a7640000611a67565b5f6001600160701b038211156111915760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806117e857507f00000000000000000000000000000000000000000000000000000000000000006117e68583612a1c565b105b156117f5576117f56121bc565b6004549084900390600f0b61180a8482612ac9565b90508361181686611580565b13801561184b57507f00000000000000000000000000000000000000000000000000000000000000006118498383612002565b105b15611858576118586121bc565b600354600160801b90046001600160801b031661189961126482611884670de0b6b3a764000088612ca6565b6005546001600160801b031691908c5f612096565b600580546001600160801b0319166001600160801b03929092169190911790556118c38882612a1c565b90506118ce81611168565b600380546001600160801b03928316600160801b0292169190911790556118f483611168565b600280546001600160801b0319166001600160801b039290921691909117905561191d82612181565b600480546001600160801b0319166001600160801b039290921691909117905561194687611168565b60028054601090611968908490600160801b90046001600160801b0316612aa9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6003546119b190611264906001600160801b031684846121d5565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f60605f805f8661ffff1667ffffffffffffffff8111156119f8576119f8612cea565b6040519080825280601f01601f191660200182016040528015611a22576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115611a42578692505b828152825f602083013e90999098509650505050505050565b5f610dc7826004610bdd565b5f825f190484118302158202611a7b575f80fd5b5091020490565b5f80611a8e8585611769565b9050611a9981612237565b9450845f03611aab575f915050611122565b849150611abe6040840160208501612922565b15611aed57611ae685611ad460208601866128fa565b611ae1604087018761293d565b612286565b9150611b10565b611b1085611afe60208601866128fa565b611b0b604087018761293d565b6122a0565b509392505050565b5f6111228383670de0b6b3a7640000612337565b6003545f908190611b46906001600160801b031684612130565b9050611b727f000000000000000000000000000000000000000000000000000000000000000082612a76565b6002546001600160801b031611156112dc576002547f000000000000000000000000000000000000000000000000000000000000000090611bbd9083906001600160801b0316612a1c565b6111229190612a1c565b611bcf6127d5565b5f80611bda84611ec8565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401611c149190612c52565b6040805180830381865af4158015611c2e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611c529190612c61565b9350905082611c6657505f91506100a99050565b5f611c8c611c8784610160015185610140015161176990919063ffffffff16565b611580565b611cac611c87856101200151866101000151611b1890919063ffffffff16565b611cb69190612ac9565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015611dea573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e0e9190612cfe565b935093509350935080611e2957505f98975050505050505050565b868414611e5a57611e3984611168565b600280546001600160801b0319166001600160801b03929092169190911790555b858314611e8b57611e6a83612181565b600480546001600160801b0319166001600160801b03929092169190911790555b848214611eb957611e9b82611168565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b611ed061281f565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191611fc8911661235a565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192611ffa9290041661235a565b905292915050565b5f8061200e84846123ce565b909250905080612020576120206121bc565b5092915050565b5f815f0361203e5750670de0b6b3a7640000610dc7565b825f0361204c57505f610dc7565b5f61205683611580565b90505f61206a61206586611580565b612409565b9050818102612081670de0b6b3a764000082612d3c565b905061208c8161262e565b9695505050505050565b5f825f036120a557508461115f565b81156120f7576120d66120b88487612a76565b6120c28587611769565b6120cc888a611769565b6117319190612a76565b90505f6120e385886112ce565b9050808210156120f1578091505b5061115f565b82850361210557505f61115f565b61208c6121128487612a1c565b61211c8587611b18565b612126888a611769565b6117319190612a1c565b5f61112283670de0b6b3a764000084612337565b5f61112283670de0b6b3a764000084611a67565b5f60016001607f1b038211156111915760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b031982128061219e575060016001607f1b0382135b156111915760405163a5353be560e01b815260040160405180910390fd5b60405163bb55fd2760e01b815260040160405180910390fd5b5f806121e1845f6127c0565b6121eb845f6127c0565b6121f59190612ac9565b90505f811315612210576122098186612a76565b945061222e565b5f81121561222e5761222181612c38565b61222b9086612a1c565b94505b50929392505050565b604051631920845160e01b8152600481018290525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906319208451906024016110ce565b5f60405163350b944160e11b815260040160405180910390fd5b604051638fcb4e5b60e01b81526001600160a01b038481166004830152602482018690527f00000000000000000000000000000000000000000000000000000000000000001690638fcb4e5b906044016020604051808303815f875af115801561230c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906123309190612c8f565b5050505050565b5f825f19048411830215820261234b575f80fd5b50910281810615159190040190565b5f80670de0b6b3a764000061236d61040f565b6123779190612ca6565b9050808311612386575f612390565b6123908184612a1c565b91506111226123c7670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000612ca6565b8390612144565b5f805f836123db86611580565b6123e59190612ac9565b90505f8112156123fb575f809250925050612402565b9150600190505b9250929050565b5f80821361242a5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906124ad9084901c611580565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361264757505f919050565b680755bf798b4a1bf1e58212612670576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061208c74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611580565b5f8183136127ce5781611122565b5090919050565b6040518061012001604052806127e961281f565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f60608486031215612886575f80fd5b8335925060208401359150604084013567ffffffffffffffff8111156128aa575f80fd5b8401606081870312156128bb575f80fd5b809150509250925092565b5f80604083850312156128d7575f80fd5b50508035926020909101359150565b6001600160a01b03811681146103f5575f80fd5b5f6020828403121561290a575f80fd5b8135611122816128e6565b80151581146103f5575f80fd5b5f60208284031215612932575f80fd5b813561112281612915565b5f808335601e19843603018112612952575f80fd5b83018035915067ffffffffffffffff82111561296c575f80fd5b602001915036819003821315612402575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b868152856020820152846040820152831515606082015260a060808201525f6129d560a083018486612980565b98975050505050505050565b634e487b7160e01b5f52601260045260245ffd5b5f82612a0357612a036129e1565b500690565b634e487b7160e01b5f52601160045260245ffd5b81810381811115610dc757610dc7612a08565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f612a6860e083018486612980565b9a9950505050505050505050565b80820180821115610dc757610dc7612a08565b6001600160701b0381811683821601908082111561202057612020612a08565b6001600160801b0381811683821601908082111561202057612020612a08565b8181035f83128015838313168383128216171561202057612020612a08565b5f60208284031215612af8575f80fd5b8151611122816128e6565b6001600160801b0382811682821603908082111561202057612020612a08565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050612bb4828551612b23565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215612c27575f80fd5b505080516020909101519092909150565b5f600160ff1b8201612c4c57612c4c612a08565b505f0390565b6101808101610dc78284612b23565b5f8060408385031215612c72575f80fd5b825191506020830151612c8481612915565b809150509250929050565b5f60208284031215612c9f575f80fd5b5051919050565b8082028115828204841417610dc757610dc7612a08565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610dc757610dc7612a08565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215612d11575f80fd5b8451935060208501519250604085015191506060850151612d3181612915565b939692955090935050565b5f82612d4a57612d4a6129e1565b600160ff1b82145f1984141615612d6357612d63612a08565b50059056fea2646970667358221220be7a22da37318f020356b9ab49167cd7b14be322f414bf80b573bd522816defc64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "checkpoint(uint256,uint256)": "414f826d",
  "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
  "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
} as const
};
