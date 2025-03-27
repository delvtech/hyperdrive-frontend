export const StkWellTarget2 = {
  name: 'StkWellTarget2' as const,
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
  bytecode: '0x61028060405234801562000011575f80fd5b5060405162004196380380620041968339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613cfd620004995f395f50505f50505f610c2801525f50505f818160f9015281816103020152612d6501525f81816114c201528181611ced01528181611d50015281816124d7015281816129550152818161299101528181612b820152612d3f01525f81816107e601528181610d8201528181610dc401528181610eb60152818161131c0152818161137a0152612d1901525f61191701525f8181611a38015281816125c8015281816126400152612e7d01525f81816109a301528181610e370152818161141501528181611a0c015261261401525f8181610e16015281816125940152612e3901525f818161080701528181610d6001528181610de501528181610ed7015281816112fa0152818161139b0152612d8b01525f81816101d301528181610396015281816108e1015261340401525f81816106a7015281816107230152818161079701528181610862015261089a01525f818161168b01528181611702015261177d01525f818161165e01526116bf0152613cfd5ff3fe608060405260043610610028575f3560e01c8063cba2e58d1461002c578063dbbe807014610058575b5f80fd5b61003f61003a366004613798565b61006b565b6040805192835260208301919091520160405180910390f35b61003f610066366004613798565b610087565b5f8061007986868686610095565b915091505b94509492505050565b5f80610079868686866102bc565b5f8061009f610531565b600654610100900460ff16156100c8576040516321081abf60e01b815260040160405180910390fd5b6100d0610559565b6100d98361057a565b5f806100e588866105b2565b90925090505f6100f58383610683565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101385760405163211ddda360e11b815260040160405180910390fd5b86821015610159576040516342af972b60e01b815260040160405180910390fd5b5f6101626106a0565b90506101728184600460016106d0565b505f805f6101808787610d34565b919a5091945090925090508b8810156101ac5760405163c972651760e01b815260040160405180910390fd5b8160095f8282546101bd9190613806565b909155506101ce9050844283610f13565b6101f87f000000000000000000000000000000000000000000000000000000000000000085613806565b98506102068389888c61104c565b5f61021260018b6111e3565b905061022b8161022560208e018e61382d565b8b611217565b8d8a8a898e8561023e602083018361382d565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a86888661027b6040880160208901613855565b8961028960408a018a613870565b60405161029c97969594939291906138db565b60405180910390a350909b50505050505050505050505061007e60015f55565b5f806102c6610531565b600654610100900460ff16156102ef576040516321081abf60e01b815260040160405180910390fd5b6102f7610559565b6103008361057a565b7f00000000000000000000000000000000000000000000000000000000000000008610156103415760405163211ddda360e11b815260040160405180910390fd5b5f61034a6112bc565b90508481101561036d576040516342af972b60e01b815260040160405180910390fd5b5f6103766106a0565b90505f61038e6103846106a0565b84600460016106d0565b90505f6103bb7f000000000000000000000000000000000000000000000000000000000000000084613806565b90505f805f806103cc8e89886112ce565b60098054949850929650909450925083915f906103ea908490613806565b909155506103fb9050874283610f13565b61040d610408858a611450565b611464565b610418906001613806565b9350505f61042784898d61146b565b9050808d101561044a5760405163c972651760e01b815260040160405180910390fd5b610454818c6105b2565b508e905061046481858b8961149c565b5f6104706002886111e3565b90508c61048a82610484602084018461382d565b85611217565b858b868461049b602086018661382d565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d860408b0160208c01613855565b6104ec896104e68a8d61391b565b90610683565b8d6104fa60408e018e613870565b60405161050e98979695949392919061392e565b60405180910390a350989d50939b50505050505050505050505061007e60015f55565b60025f540361055357604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b341561057857604051631574f9f360e01b815260040160405180910390fd5b565b5f610588602083018361382d565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b815f806105c56040850160208601613855565b156105ea576105e0856105db6040870187613870565b61164f565b9093509050610602565b5034610602856105fd6040870187613870565b611770565b61060a6112bc565b9150801561067a576040515f90339083908381818185875af1925050503d805f8114610651576040519150601f19603f3d011682016040523d82523d5f602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f6106978383670de0b6b3a76400006117aa565b90505b92915050565b5f6106cb427f00000000000000000000000000000000000000000000000000000000000000006117c5565b905090565b5f84815260086020526040812060018101546001600160801b03161515806106f757504286115b1561071057600101546001600160801b03169050610d2c565b5f805f61071b6106a0565b90505f6107487f00000000000000000000000000000000000000000000000000000000000000008b613806565b90505b818110156107bc575f818152600860205260409020600101546001600160801b03168015610794575f828152600860205260409020549094506001600160801b031692506107bc565b507f00000000000000000000000000000000000000000000000000000000000000000161074b565b835f0361082e5788935061082b6107d16117da565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117fa565b92505b5061083883611819565b6001850180546001600160801b0319166001600160801b039290921691909117905561088e6108877f00000000000000000000000000000000000000000000000000000000000000008b61391b565b8a84610f13565b6108cc896108c66108bf7f000000000000000000000000000000000000000000000000000000000000000083613806565b4290611846565b84610f13565b6108d58861185a565b505f90506008816109067f00000000000000000000000000000000000000000000000000000000000000008d61391b565b815260208101919091526040015f908120600101546001600160801b0316915061093160028c6111e3565b5f818152600b60205260408120549192508c8c8315610a7257600192505f8061095d86898d865f6119f7565b915091508060095f8282546109729190613806565b9091555061098d9050865f8461098781611ac4565b88611aed565b6109978183613806565b91506109c786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611c64565b91506109db6109d68385610683565b611cad565b600680546002906109fc9084906201000090046001600160701b0316613975565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a2982611819565b60068054601090610a4b908490600160801b90046001600160801b0316613995565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610a7e6001846111e3565b5f818152600b60205260409020549091508015610b8957600194505f80610aa9838b8f8860016119f7565b915091508060095f828254610abe9190613806565b90915550610ad99050835f84610ad381611ac4565b8a611cd6565b610ae3818361391b565b9150610af26109d68387610683565b60068054600290610b139084906201000090046001600160701b0316613975565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b4082611819565b60068054601090610b62908490600160801b90046001600160801b0316613995565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bc257610bb4610b9b87611ac4565b610ba483611ac4565b610bae91906139b5565b5f611ec6565b8e610bbf8482611f05565b50505b5f610bcc846120f4565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c82573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ca691906139d4565b90506001600160a01b03811615610d1a57610d175a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612236565b50505b509b9d50505050505050505050505050505b949350505050565b5f805f805f610d416117da565b600254909150610da6908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006122bc565b600254909450610e09908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117fa565b9150610e608785610e5b857f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006122e7565b61234b565b15610e6d57610e6d61238c565b610e79878588856123a5565b91965094509250670de0b6b3a7640000610efb610e968784613806565b600254610eb4908890600160801b90046001600160801b031661391b565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117fa565b1115610f0957610f0961238c565b5092959194509250565b5f83815260086020526040902054600160801b90046001600160801b0316808303610f3e5750505050565b5f848152600860205260408120546001600160801b031690819003610f9657610f6683611819565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611013565b610fe7610fe2670de0b6b3a7640000610faf888661391b565b610fb991906139ef565b85670de0b6b3a7640000610fcd878a61391b565b610fd791906139ef565b8592919060016123ed565b611819565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61101c84611819565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661108e610fe282611078670de0b6b3a7640000866139ef565b6005546001600160801b031691908860016123ed565b600580546001600160801b0319166001600160801b03929092169190911790556110b785611819565b600280545f906110d19084906001600160801b0316613995565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110fe84611819565b60028054601090611120908490600160801b90046001600160801b0316613a06565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061114d84611819565b6111579082613995565b600380546001600160801b03808416600160801b02911617905590505f61117d83612491565b905061119b8161118c87611ac4565b6111969084613a26565b611ec6565b6111a4846124d1565b6111b0576111b061238c565b5f6111ba85612530565b9050806111da57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b5f6001600160f81b0382111561120c5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290611248908490613806565b90915550505f838152600b60205260408120805483929061126a908490613806565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6106cb670de0b6b3a7640000611464565b5f805f805f6112db6117da565b600254909150611340908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f000000000000000000000000000000000000000000000000000000000000000061253c565b93508761134d858961255c565b111561135b5761135b61238c565b6002545f9081906113bf908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117fa565b93506113d58a670de0b6b3a7640000868c612570565b509193509091506113e89050818361391b565b6113f2908761391b565b95508861143f816114398d611407868c61391b565b8d611412878261267c565b877f0000000000000000000000000000000000000000000000000000000000000000612691565b9061255c565b975090945050505093509350935093565b5f61069783670de0b6b3a7640000846126b1565b5f8161069a565b5f61147c6040830160208401613855565b15611488575082611495565b61149284846126d4565b90505b9392505050565b6002546001600160801b0316838110156114b8576114b861238c565b60045490849003907f0000000000000000000000000000000000000000000000000000000000000000906114f0908390600f0b6126e8565b10156114fe576114fe61238c565b60045461154890610fe290600160801b90046001600160801b031661152b670de0b6b3a7640000866139ef565b600554600160801b90046001600160801b031691908960016123ed565b600580546001600160801b03928316600160801b02921691909117905561156e81611819565b600280546001600160801b0319166001600160801b039290921691909117905561159785611819565b600280546010906115b9908490600160801b90046001600160801b0316613995565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506115e685611819565b60048054601090611608908490600160801b90046001600160801b0316613995565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61163683612491565b905061119b8161164588611ac4565b61119690846139b5565b5f806116866001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308861270d565b6116e67f00000000000000000000000000000000000000000000000000000000000000006116b5876001613806565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016919061277a565b6040516356e4bb9760e11b8152306004820152602481018690527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063adc9772e906044015f604051808303815f87803b15801561174b575f80fd5b505af115801561175d573d5f803e3d5ffd5b508794505f93505050505b935093915050565b6117a56001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308661270d565b505050565b5f825f1904841183021582026117be575f80fd5b5091020490565b5f6117d08284613a61565b610697908461391b565b6002546004545f916106cb916001600160801b0390911690600f0b6126e8565b5f6118108261180a8588886117aa565b90612809565b95945050505050565b5f6001600160801b0382111561184257604051630f0af95160e11b815260040160405180910390fd5b5090565b5f8183116118545782610697565b50919050565b6006545f90819061187c908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b031692509050818111156119f2575f6118a5838361391b565b90506118b4610fe28286611450565b600680546010906118d6908490600160801b90046001600160801b0316613a06565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61190e85836126d490919063ffffffff16565b90505f61193b827f0000000000000000000000000000000000000000000000000000000000000000610683565b90508060095f82825461194e9190613806565b9091555061195e9050818361391b565b915061196982611819565b600280545f906119839084906001600160801b0316613995565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506119b08261286e565b600480545f906119c4908490600f0b613a74565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611a0387856126d4565b91505f611a30837f0000000000000000000000000000000000000000000000000000000000000000610683565b9050611a5c817f0000000000000000000000000000000000000000000000000000000000000000610683565b91508315611a7f57611a6e828261391b565b611a78908461391b565b9250611a96565b611a89828261391b565b611a939084613806565b92505b86861015611ab957611aa98387896117aa565b9250611ab68287896117aa565b91505b509550959350505050565b5f6001600160ff1b038211156118425760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611b35610fe282611b19670de0b6b3a7640000866139ef565b600554600160801b90046001600160801b031691908a5f6123ed565b600580546001600160801b03928316600160801b029216919091179055611b5b86611819565b611b659082613a06565b600480546001600160801b03928316600160801b029216919091179055611b8b84611819565b600280545f90611ba59084906001600160801b0316613995565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611bd283612897565b600480545f90611be6908490600f0b613a74565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611c1685611819565b60028054601090611c38908490600160801b90046001600160801b0316613a06565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80611c7b84611c758a888a6117aa565b906126d4565b9050611c888884866117aa565b611c929082613806565b905086811115611ca25786810391505b509695505050505050565b5f6001600160701b038211156118425760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611d1857507f0000000000000000000000000000000000000000000000000000000000000000611d16858361391b565b105b15611d2557611d2561238c565b6004549084900390600f0b611d3a84826139b5565b905083611d4686611ac4565b138015611d7b57507f0000000000000000000000000000000000000000000000000000000000000000611d7983836126e8565b105b15611d8857611d8861238c565b600354600160801b90046001600160801b0316611dc9610fe282611db4670de0b6b3a7640000886139ef565b6005546001600160801b031691908c5f6123ed565b600580546001600160801b0319166001600160801b0392909216919091179055611df3888261391b565b9050611dfe81611819565b600380546001600160801b03928316600160801b029216919091179055611e2483611819565b600280546001600160801b0319166001600160801b0392909216919091179055611e4d82612897565b600480546001600160801b0319166001600160801b0392909216919091179055611e7687611819565b60028054601090611e98908490600160801b90046001600160801b0316613995565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611ee190610fe2906001600160801b031684846128d2565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611f4f916001600160801b03169061391b565b9050805f03611f6257600191505061069a565b5f611f6c85612934565b9050805f03611f805760019250505061069a565b5f80611f8d8385896129cf565b9150915080611fa2575f94505050505061069a565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611fdd929190613b1f565b6040805180830381865af4158015611ff7573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061201b9190613b94565b9150915061203961202b82611ac4565b61203490613bb6565b612b3c565b92508261204e575f965050505050505061069a565b61205782611819565b600780545f906120719084906001600160801b0316613995565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061209e81611819565b600780546010906120c0908490600160801b90046001600160801b0316613995565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61211b87612cd0565b6040518263ffffffff1660e01b81526004016121379190613bd0565b6040805180830381865af4158015612151573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906121759190613bdf565b915091508061218a57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916121ef91613806565b6121f9919061391b565b9050805f0361220f57505f958695509350505050565b5f80871161221d575f612228565b6122288488846117aa565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561225957612259613c0d565b6040519080825280601f01601f191660200182016040528015612283576020820181803683370190505b5090505f808751602089018b8e8ef191503d9250868311156122a3578692505b828152825f602083013e90999098509650505050505050565b5f6122dc8787876122d588670de0b6b3a764000061391b565b8787612e0a565b979650505050505050565b5f61149261232761230084670de0b6b3a764000061391b565b611439670de0b6b3a7640000612316818a611450565b612320919061391b565b879061255c565b61233990670de0b6b3a7640000613806565b611c7584670de0b6b3a764000061391b565b5f80612381856123596117da565b6123639190613806565b600254610eb4908790600160801b90046001600160801b031661391b565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f805f805f6123b5898789612e2c565b90925090506123c4828961391b565b97505f6123d282888a6117aa565b90506123de818b61391b565b9a989950979650505050505050565b5f825f036123fc575084611810565b811561244e5761242d61240f8487613806565b6124198587610683565b612423888a610683565b611c759190613806565b90505f61243a8588611846565b905080821015612448578091505b50611810565b82850361245c57505f611810565b612487612469848761391b565b612473858761255c565b61247d888a610683565b611c75919061391b565b9695505050505050565b5f6124b6600b5f6124a36002866111e3565b81526020019081526020015f2054611ac4565b6124c7600b5f6124a36001876111e3565b61069a91906139b5565b5f6124fc7f00000000000000000000000000000000000000000000000000000000000000008361255c565b60035461251291906001600160801b0316613806565b600254612528906001600160801b031684610683565b101592915050565b5f61069a826004611f05565b5f6122dc87878761255588670de0b6b3a764000061391b565b8787612eab565b5f6106978383670de0b6b3a76400006126b1565b5f8080806125c087866125b98b6114396125928c670de0b6b3a764000061391b565b7f00000000000000000000000000000000000000000000000000000000000000009061255c565b91906126b1565b93506125ec847f0000000000000000000000000000000000000000000000000000000000000000610683565b91505f61260c61260489670de0b6b3a764000061391b565b8a90886126b1565b9050612638817f000000000000000000000000000000000000000000000000000000000000000061255c565b9350612664847f0000000000000000000000000000000000000000000000000000000000000000610683565b61266e9084613806565b915050945094509450949050565b5f81831161268a5781610697565b5090919050565b5f806126a8846126a28a888a6126b1565b90611450565b9050611c888884865b5f825f1904841183021582026126c5575f80fd5b50910281810615159190040190565b5f61069783670de0b6b3a7640000846117aa565b5f806126f48484612ebb565b9092509050806127065761270661238c565b5092915050565b6040516001600160a01b0384811660248301528381166044830152606482018390526127749186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612ef3565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526127cb8482612f59565b612774576040516001600160a01b0384811660248301525f60448301526127ff91869182169063095ea7b390606401612742565b6127748482612ef3565b5f815f036128205750670de0b6b3a764000061069a565b825f0361282e57505f61069a565b5f61283883611ac4565b90505f61284c61284786611ac4565b612ff6565b9050818102612863670de0b6b3a764000082613c21565b90506124878161321b565b5f60016001607f1b038211156118425760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b03198212806128b4575060016001607f1b0382135b156118425760405163a5353be560e01b815260040160405180910390fd5b5f806128de845f6133ad565b6128e8845f6133ad565b6128f291906139b5565b90505f81131561290d576129068186613806565b945061292b565b5f81121561292b5761291e81613bb6565b612928908661391b565b94505b50929392505050565b6003545f90819061294e906001600160801b031684611450565b905061297a7f000000000000000000000000000000000000000000000000000000000000000082613806565b6002546001600160801b03161115611854576002547f0000000000000000000000000000000000000000000000000000000000000000906129c59083906001600160801b031661391b565b611495919061391b565b6129d76136f9565b5f806129e284612cd0565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612a1c9190613bd0565b6040805180830381865af4158015612a36573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612a5a9190613bdf565b9350905082612a6e57505f91506117689050565b5f612a94612a8f84610160015185610140015161068390919063ffffffff16565b611ac4565b612ab4612a8f85610120015186610100015161255c90919063ffffffff16565b612abe91906139b5565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612bf2573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612c169190613c4d565b935093509350935080612c3157505f98975050505050505050565b868414612c6257612c4184611819565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612c9357612c7283612897565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612cc157612ca382611819565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612cd8613743565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612dd091166133bb565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612e02929004166133bb565b905292915050565b5f80612e1a88888888888861342f565b909250905080611ca257611ca261238c565b5f80612e758561143985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612e6b818c611450565b611439919061391b565b9150612ea1827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b5f80612e1a8888888888886134f3565b5f805f83612ec886611ac4565b612ed291906139b5565b90505f811215612ee8575f80925092505061067c565b946001945092505050565b5f612f076001600160a01b038416836135af565b905080515f14158015612f2b575080806020019051810190612f299190613c80565b155b156117a557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b5f805f846001600160a01b031684604051612f749190613c9b565b5f604051808303815f865af19150503d805f8114612fad576040519150601f19603f3d011682016040523d82523d5f602084013e612fb2565b606091505b5091509150818015612fdc575080511580612fdc575080806020019051810190612fdc9190613c80565b80156118105750505050506001600160a01b03163b151590565b5f8082136130175760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061309a9084901c611ac4565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361323457505f919050565b680755bf798b4a1bf1e5821261325d576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061248774029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611ac4565b5f81831361268a5781610697565b5f80670de0b6b3a76400006133ce6106a0565b6133d891906139ef565b90508083116133e7575f6133f1565b6133f1818461391b565b9150611495613428670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006139ef565b83906126d4565b5f805f61343f89898888886135bc565b90506134598661180a6134528a8d613806565b8790610683565b9850613466858a866117aa565b98508881101561347c575f8092509250506134e8565b888103670de0b6b3a764000081106134b1576134aa6134a3670de0b6b3a764000089611450565b8290612809565b90506134c9565b6134c66134a3670de0b6b3a7640000896126d4565b90505b808910156134de575f809350935050506134e8565b8803925060019150505b965096945050505050565b5f805f61350389898888886135bc565b90506135138661180a898b613806565b975087811015613529575f8092509250506134e8565b8781036135378186886126b1565b9050670de0b6b3a764000081106135645761355d6134a3670de0b6b3a764000089611450565b905061357c565b6135796134a3670de0b6b3a7640000896126d4565b90505b6135868186611450565b9050808a101561359d575f809350935050506134e8565b90980398600198509650505050505050565b606061069783835f6135ea565b5f6135c78585612809565b6135e06135d88661180a868b61255c565b8590856126b1565b6124879190613806565b60608147101561360f5760405163cd78605960e01b8152306004820152602401612f50565b5f80856001600160a01b0316848660405161362a9190613c9b565b5f6040518083038185875af1925050503d805f8114613664576040519150601f19603f3d011682016040523d82523d5f602084013e613669565b606091505b509150915061248786838360608261368957613684826136d0565b611495565b81511580156136a057506001600160a01b0384163b155b156136c957604051639996b31560e01b81526001600160a01b0385166004820152602401612f50565b5080611495565b8051156136e05780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061370d613743565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f80608085870312156137ab575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156137d6575f80fd5b8501606081880312156137e7575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561069a5761069a6137f2565b6001600160a01b03811681146105af575f80fd5b5f6020828403121561383d575f80fd5b813561149581613819565b80151581146105af575f80fd5b5f60208284031215613865575f80fd5b813561149581613848565b5f808335601e19843603018112613885575f80fd5b83018035915067ffffffffffffffff82111561389f575f80fd5b60200191503681900382131561067c575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201525f61390e60c0830184866138b3565b9998505050505050505050565b8181038181111561069a5761069a6137f2565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f61396760e0830184866138b3565b9a9950505050505050505050565b6001600160701b03818116838216019080821115612706576127066137f2565b6001600160801b03818116838216019080821115612706576127066137f2565b8181035f831280158383131683831282161715612706576127066137f2565b5f602082840312156139e4575f80fd5b815161149581613819565b808202811582820484141761069a5761069a6137f2565b6001600160801b03828116828216039080821115612706576127066137f2565b8082018281125f831280158216821582161715613a4557613a456137f2565b505092915050565b634e487b7160e01b5f52601260045260245ffd5b5f82613a6f57613a6f613a4d565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069a5761069a6137f2565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050613b32828551613aa1565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613ba5575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613bca57613bca6137f2565b505f0390565b610180810161069a8284613aa1565b5f8060408385031215613bf0575f80fd5b825191506020830151613c0281613848565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f82613c2f57613c2f613a4d565b600160ff1b82145f1984141615613c4857613c486137f2565b500590565b5f805f8060808587031215613c60575f80fd5b84519350602085015192506040850151915060608501516137e781613848565b5f60208284031215613c90575f80fd5b815161149581613848565b5f82515f5b81811015613cba5760208186018101518583015201613ca0565b505f92019182525091905056fea26469706673582212202f3840ca9d2d251a546a9a39da85edafecb5271f52281acf5358c2b703b8b7fb64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
  "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
} as const
};
