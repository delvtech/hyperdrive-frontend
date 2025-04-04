export const RETHTarget2 = {
  name: 'RETHTarget2' as const,
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
  },
  {
    "type": "error",
    "name": "UnsupportedToken",
    "inputs": []
  }
] as const,
  bytecode: '0x61028060405234801562000011575f80fd5b5060405162004040380380620040408339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613bb16200048f5f395f50505f50505f610c7b01525f50505f818161014c015281816103550152612c9f01525f818161159701528181611cbc01528181611d1f015281816124a601528181612888015281816128c401528181612abc0152612c7901525f818161083901528181610dd501528181610e1701528181610f090152818161136f015281816113cd0152612c5301525f6118e601525f8181611a07015281816125970152818161260f0152612db701525f81816109f601528181610e8a01528181611468015281816119db01526125e301525f8181610e69015281816125630152612d7301525f818161085a01528181610db301528181610e3801528181610f2a0152818161134d015281816113ee0152612cc501525f8181610226015281816103e90152818161093401526132a101525f81816106fa01528181610776015281816107ea015281816108b501526108ed01525f8181603b015281816114cf015261174c01525f5050613bb15ff3fe60806040526004361061002b575f3560e01c8063cba2e58d1461007f578063dbbe8070146100ab575f80fd5b3661007b57336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610079576040516312171d8360e31b815260040160405180910390fd5b005b5f80fd5b61009261008d366004613635565b6100be565b6040805192835260208301919091520160405180910390f35b6100926100b9366004613635565b6100da565b5f806100cc868686866100e8565b915091505b94509492505050565b5f806100cc8686868661030f565b5f806100f2610584565b600654610100900460ff161561011b576040516321081abf60e01b815260040160405180910390fd5b6101236105ac565b61012c836105cd565b5f806101388886610605565b90925090505f61014883836106d6565b90507f000000000000000000000000000000000000000000000000000000000000000081101561018b5760405163211ddda360e11b815260040160405180910390fd5b868210156101ac576040516342af972b60e01b815260040160405180910390fd5b5f6101b56106f3565b90506101c5818460046001610723565b505f805f6101d38787610d87565b919a5091945090925090508b8810156101ff5760405163c972651760e01b815260040160405180910390fd5b8160095f82825461021091906136a3565b909155506102219050844283610f66565b61024b7f0000000000000000000000000000000000000000000000000000000000000000856136a3565b98506102598389888c61109f565b5f61026560018b611236565b905061027e8161027860208e018e6136ca565b8b61126a565b8d8a8a898e8561029160208301836136ca565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102ce60408801602089016136f2565b896102dc60408a018a61370d565b6040516102ef9796959493929190613778565b60405180910390a350909b5050505050505050505050506100d160015f55565b5f80610319610584565b600654610100900460ff1615610342576040516321081abf60e01b815260040160405180910390fd5b61034a6105ac565b610353836105cd565b7f00000000000000000000000000000000000000000000000000000000000000008610156103945760405163211ddda360e11b815260040160405180910390fd5b5f61039d61130f565b9050848110156103c0576040516342af972b60e01b815260040160405180910390fd5b5f6103c96106f3565b90505f6103e16103d76106f3565b8460046001610723565b90505f61040e7f0000000000000000000000000000000000000000000000000000000000000000846136a3565b90505f805f8061041f8e8988611321565b60098054949850929650909450925083915f9061043d9084906136a3565b9091555061044e9050874283610f66565b61046061045b858a6114a3565b6114b7565b61046b9060016136a3565b9350505f61047a84898d611540565b9050808d101561049d5760405163c972651760e01b815260040160405180910390fd5b6104a7818c610605565b508e90506104b781858b89611571565b5f6104c3600288611236565b90508c6104dd826104d760208401846136ca565b8561126a565b858b86846104ee60208601866136ca565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a8661052b60408b0160208c016136f2565b61053f896105398a8d6137b8565b906106d6565b8d61054d60408e018e61370d565b6040516105619897969594939291906137cb565b60405180910390a350989d50939b5050505050505050505050506100d160015f55565b60025f54036105a657604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b34156105cb57604051631574f9f360e01b815260040160405180910390fd5b565b5f6105db60208301836136ca565b6001600160a01b0316036106025760405163f0dd15fd60e01b815260040160405180910390fd5b50565b815f8061061860408501602086016136f2565b1561063d576106338561062e604087018761370d565b611724565b9093509050610655565b503461065585610650604087018761370d565b61173f565b61065d61130f565b915080156106cd576040515f90339083908381818185875af1925050503d805f81146106a4576040519150601f19603f3d011682016040523d82523d5f602084013e6106a9565b606091505b50509050806106cb576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f6106ea8383670de0b6b3a7640000611779565b90505b92915050565b5f61071e427f0000000000000000000000000000000000000000000000000000000000000000611794565b905090565b5f84815260086020526040812060018101546001600160801b031615158061074a57504286115b1561076357600101546001600160801b03169050610d7f565b5f805f61076e6106f3565b90505f61079b7f00000000000000000000000000000000000000000000000000000000000000008b6136a3565b90505b8181101561080f575f818152600860205260409020600101546001600160801b031680156107e7575f828152600860205260409020549094506001600160801b0316925061080f565b507f00000000000000000000000000000000000000000000000000000000000000000161079e565b835f036108815788935061087e6108246117a9565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117c9565b92505b5061088b836117e8565b6001850180546001600160801b0319166001600160801b03929092169190911790556108e16108da7f00000000000000000000000000000000000000000000000000000000000000008b6137b8565b8a84610f66565b61091f896109196109127f0000000000000000000000000000000000000000000000000000000000000000836136a3565b4290611815565b84610f66565b61092888611829565b505f90506008816109597f00000000000000000000000000000000000000000000000000000000000000008d6137b8565b815260208101919091526040015f908120600101546001600160801b0316915061098460028c611236565b5f818152600b60205260408120549192508c8c8315610ac557600192505f806109b086898d865f6119c6565b915091508060095f8282546109c591906136a3565b909155506109e09050865f846109da81611a93565b88611abc565b6109ea81836136a3565b9150610a1a86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611c33565b9150610a2e610a2983856106d6565b611c7c565b60068054600290610a4f9084906201000090046001600160701b0316613812565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a7c826117e8565b60068054601090610a9e908490600160801b90046001600160801b0316613832565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610ad1600184611236565b5f818152600b60205260409020549091508015610bdc57600194505f80610afc838b8f8860016119c6565b915091508060095f828254610b1191906136a3565b90915550610b2c9050835f84610b2681611a93565b8a611ca5565b610b3681836137b8565b9150610b45610a2983876106d6565b60068054600290610b669084906201000090046001600160701b0316613812565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b93826117e8565b60068054601090610bb5908490600160801b90046001600160801b0316613832565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610c1557610c07610bee87611a93565b610bf783611a93565b610c019190613852565b5f611e95565b8e610c128482611ed4565b50505b5f610c1f846120c3565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cd5573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cf99190613871565b90506001600160a01b03811615610d6d57610d6a5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612205565b50505b509b9d50505050505050505050505050505b949350505050565b5f805f805f610d946117a9565b600254909150610df9908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f000000000000000000000000000000000000000000000000000000000000000061228b565b600254909450610e5c908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117c9565b9150610eb38785610eae857f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006122b6565b61231a565b15610ec057610ec061235b565b610ecc87858885612374565b91965094509250670de0b6b3a7640000610f4e610ee987846136a3565b600254610f07908890600160801b90046001600160801b03166137b8565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117c9565b1115610f5c57610f5c61235b565b5092959194509250565b5f83815260086020526040902054600160801b90046001600160801b0316808303610f915750505050565b5f848152600860205260408120546001600160801b031690819003610fe957610fb9836117e8565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611066565b61103a611035670de0b6b3a764000061100288866137b8565b61100c919061388c565b85670de0b6b3a7640000611020878a6137b8565b61102a919061388c565b8592919060016123bc565b6117e8565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61106f846117e8565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110e1611035826110cb670de0b6b3a76400008661388c565b6005546001600160801b031691908860016123bc565b600580546001600160801b0319166001600160801b039290921691909117905561110a856117e8565b600280545f906111249084906001600160801b0316613832565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611151846117e8565b60028054601090611173908490600160801b90046001600160801b03166138a3565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506111a0846117e8565b6111aa9082613832565b600380546001600160801b03808416600160801b02911617905590505f6111d083612460565b90506111ee816111df87611a93565b6111e990846138c3565b611e95565b6111f7846124a0565b6112035761120361235b565b5f61120d856124ff565b90508061122d57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b5f6001600160f81b0382111561125f5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b03861684529091528120805483929061129b9084906136a3565b90915550505f838152600b6020526040812080548392906112bd9084906136a3565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f61071e670de0b6b3a76400006114b7565b5f805f805f61132e6117a9565b600254909150611393908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f000000000000000000000000000000000000000000000000000000000000000061250b565b9350876113a0858961252b565b11156113ae576113ae61235b565b6002545f908190611412908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006117c9565b93506114288a670de0b6b3a7640000868c61253f565b5091935090915061143b905081836137b8565b61144590876137b8565b9550886114928161148c8d61145a868c6137b8565b8d611465878261264b565b877f0000000000000000000000000000000000000000000000000000000000000000612660565b9061252b565b975090945050505093509350935093565b5f6106ea83670de0b6b3a764000084612680565b604051638b32fa2360e01b8152600481018290525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa2390602401602060405180830381865afa15801561151c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106ed91906138ea565b5f61155160408301602084016136f2565b1561155d57508261156a565b61156784846126a3565b90505b9392505050565b6002546001600160801b03168381101561158d5761158d61235b565b60045490849003907f0000000000000000000000000000000000000000000000000000000000000000906115c5908390600f0b6126b7565b10156115d3576115d361235b565b60045461161d9061103590600160801b90046001600160801b0316611600670de0b6b3a76400008661388c565b600554600160801b90046001600160801b031691908960016123bc565b600580546001600160801b03928316600160801b029216919091179055611643816117e8565b600280546001600160801b0319166001600160801b039290921691909117905561166c856117e8565b6002805460109061168e908490600160801b90046001600160801b0316613832565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116bb856117e8565b600480546010906116dd908490600160801b90046001600160801b0316613832565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61170b83612460565b90506111ee8161171a88611a93565b6111e99084613852565b5f8060405163350b944160e11b815260040160405180910390fd5b6117746001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330866126dc565b505050565b5f825f19048411830215820261178d575f80fd5b5091020490565b5f61179f8284613915565b6106ea90846137b8565b6002546004545f9161071e916001600160801b0390911690600f0b6126b7565b5f6117df826117d9858888611779565b9061273c565b95945050505050565b5f6001600160801b0382111561181157604051630f0af95160e11b815260040160405180910390fd5b5090565b5f81831161182357826106ea565b50919050565b6006545f90819061184b908490600160801b90046001600160801b03166106d6565b6006546201000090046001600160701b031692509050818111156119c1575f61187483836137b8565b905061188361103582866114a3565b600680546010906118a5908490600160801b90046001600160801b03166138a3565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f6118dd85836126a390919063ffffffff16565b90505f61190a827f00000000000000000000000000000000000000000000000000000000000000006106d6565b90508060095f82825461191d91906136a3565b9091555061192d905081836137b8565b9150611938826117e8565b600280545f906119529084906001600160801b0316613832565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061197f826127a1565b600480545f90611993908490600f0b613928565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f806119d287856126a3565b91505f6119ff837f00000000000000000000000000000000000000000000000000000000000000006106d6565b9050611a2b817f00000000000000000000000000000000000000000000000000000000000000006106d6565b91508315611a4e57611a3d82826137b8565b611a4790846137b8565b9250611a65565b611a5882826137b8565b611a6290846136a3565b92505b86861015611a8857611a78838789611779565b9250611a85828789611779565b91505b509550959350505050565b5f6001600160ff1b038211156118115760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611b0461103582611ae8670de0b6b3a76400008661388c565b600554600160801b90046001600160801b031691908a5f6123bc565b600580546001600160801b03928316600160801b029216919091179055611b2a866117e8565b611b3490826138a3565b600480546001600160801b03928316600160801b029216919091179055611b5a846117e8565b600280545f90611b749084906001600160801b0316613832565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ba1836127ca565b600480545f90611bb5908490600f0b613928565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611be5856117e8565b60028054601090611c07908490600160801b90046001600160801b03166138a3565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80611c4a84611c448a888a611779565b906126a3565b9050611c57888486611779565b611c6190826136a3565b905086811115611c715786810391505b509695505050505050565b5f6001600160701b038211156118115760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611ce757507f0000000000000000000000000000000000000000000000000000000000000000611ce585836137b8565b105b15611cf457611cf461235b565b6004549084900390600f0b611d098482613852565b905083611d1586611a93565b138015611d4a57507f0000000000000000000000000000000000000000000000000000000000000000611d4883836126b7565b105b15611d5757611d5761235b565b600354600160801b90046001600160801b0316611d9861103582611d83670de0b6b3a76400008861388c565b6005546001600160801b031691908c5f6123bc565b600580546001600160801b0319166001600160801b0392909216919091179055611dc288826137b8565b9050611dcd816117e8565b600380546001600160801b03928316600160801b029216919091179055611df3836117e8565b600280546001600160801b0319166001600160801b0392909216919091179055611e1c826127ca565b600480546001600160801b0319166001600160801b0392909216919091179055611e45876117e8565b60028054601090611e67908490600160801b90046001600160801b0316613832565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611eb090611035906001600160801b03168484612805565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611f1e916001600160801b0316906137b8565b9050805f03611f315760019150506106ed565b5f611f3b85612867565b9050805f03611f4f576001925050506106ed565b5f80611f5c838589612902565b9150915080611f71575f9450505050506106ed565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611fac9291906139d3565b6040805180830381865af4158015611fc6573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611fea9190613a48565b91509150612008611ffa82611a93565b61200390613a6a565b612a76565b92508261201d575f96505050505050506106ed565b612026826117e8565b600780545f906120409084906001600160801b0316613832565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061206d816117e8565b6007805460109061208f908490600160801b90046001600160801b0316613832565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6120ea87612c0a565b6040518263ffffffff1660e01b81526004016121069190613a84565b6040805180830381865af4158015612120573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906121449190613a93565b915091508061215957505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916121be916136a3565b6121c891906137b8565b9050805f036121de57505f958695509350505050565b5f8087116121ec575f6121f7565b6121f7848884611779565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561222857612228613ac1565b6040519080825280601f01601f191660200182016040528015612252576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612272578692505b828152825f602083013e90999098509650505050505050565b5f6122ab8787876122a488670de0b6b3a76400006137b8565b8787612d44565b979650505050505050565b5f6115676122f66122cf84670de0b6b3a76400006137b8565b61148c670de0b6b3a76400006122e5818a6114a3565b6122ef91906137b8565b879061252b565b61230890670de0b6b3a76400006136a3565b611c4484670de0b6b3a76400006137b8565b5f80612350856123286117a9565b61233291906136a3565b600254610f07908790600160801b90046001600160801b03166137b8565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f805f805f612384898789612d66565b909250905061239382896137b8565b97505f6123a182888a611779565b90506123ad818b6137b8565b9a989950979650505050505050565b5f825f036123cb5750846117df565b811561241d576123fc6123de84876136a3565b6123e885876106d6565b6123f2888a6106d6565b611c4491906136a3565b90505f6124098588611815565b905080821015612417578091505b506117df565b82850361242b57505f6117df565b61245661243884876137b8565b612442858761252b565b61244c888a6106d6565b611c4491906137b8565b9695505050505050565b5f612485600b5f612472600286611236565b81526020019081526020015f2054611a93565b612496600b5f612472600187611236565b6106ed9190613852565b5f6124cb7f00000000000000000000000000000000000000000000000000000000000000008361252b565b6003546124e191906001600160801b03166136a3565b6002546124f7906001600160801b0316846106d6565b101592915050565b5f6106ed826004611ed4565b5f6122ab87878761252488670de0b6b3a76400006137b8565b8787612de5565b5f6106ea8383670de0b6b3a7640000612680565b5f80808061258f87866125888b61148c6125618c670de0b6b3a76400006137b8565b7f00000000000000000000000000000000000000000000000000000000000000009061252b565b9190612680565b93506125bb847f00000000000000000000000000000000000000000000000000000000000000006106d6565b91505f6125db6125d389670de0b6b3a76400006137b8565b8a9088612680565b9050612607817f000000000000000000000000000000000000000000000000000000000000000061252b565b9350612633847f00000000000000000000000000000000000000000000000000000000000000006106d6565b61263d90846136a3565b915050945094509450949050565b5f81831161265957816106ea565b5090919050565b5f80612677846126718a888a612680565b906114a3565b9050611c578884865b5f825f190484118302158202612694575f80fd5b50910281810615159190040190565b5f6106ea83670de0b6b3a764000084611779565b5f806126c38484612df5565b9092509050806126d5576126d561235b565b5092915050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052612736908590612e2d565b50505050565b5f815f036127535750670de0b6b3a76400006106ed565b825f0361276157505f6106ed565b5f61276b83611a93565b90505f61277f61277a86611a93565b612e93565b9050818102612796670de0b6b3a764000082613ad5565b9050612456816130b8565b5f60016001607f1b038211156118115760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b03198212806127e7575060016001607f1b0382135b156118115760405163a5353be560e01b815260040160405180910390fd5b5f80612811845f61324a565b61281b845f61324a565b6128259190613852565b90505f8113156128405761283981866136a3565b945061285e565b5f81121561285e5761285181613a6a565b61285b90866137b8565b94505b50929392505050565b6003545f908190612881906001600160801b0316846114a3565b90506128ad7f0000000000000000000000000000000000000000000000000000000000000000826136a3565b6002546001600160801b03161115611823576002547f0000000000000000000000000000000000000000000000000000000000000000906128f89083906001600160801b03166137b8565b61156a91906137b8565b61290a613596565b5f8061291584612c0a565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161294f9190613a84565b6040805180830381865af4158015612969573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061298d9190613a93565b93509050826129a157505f9150612a6e9050565b5f6129c76129c28461016001518561014001516106d690919063ffffffff16565b611a93565b6129e76129c285610120015186610100015161252b90919063ffffffff16565b6129f19190613852565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b2c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612b509190613b01565b935093509350935080612b6b57505f98975050505050505050565b868414612b9c57612b7b846117e8565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612bcd57612bac836127ca565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612bfb57612bdd826117e8565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612c126135e0565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612d0a9116613258565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612d3c92900416613258565b905292915050565b5f80612d548888888888886132cc565b909250905080611c7157611c7161235b565b5f80612daf8561148c85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612da5818c6114a3565b61148c91906137b8565b9150612ddb827f00000000000000000000000000000000000000000000000000000000000000006106d6565b9050935093915050565b5f80612d54888888888888613390565b5f805f83612e0286611a93565b612e0c9190613852565b90505f811215612e22575f8092509250506106cf565b946001945092505050565b5f612e416001600160a01b0384168361344c565b905080515f14158015612e65575080806020019051810190612e639190613b34565b155b1561177457604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b5f808213612eb45760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612f379084901c611a93565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e1982136130d157505f919050565b680755bf798b4a1bf1e582126130fa576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061245674029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611a93565b5f81831361265957816106ea565b5f80670de0b6b3a764000061326b6106f3565b613275919061388c565b9050808311613284575f61328e565b61328e81846137b8565b915061156a6132c5670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061388c565b83906126a3565b5f805f6132dc8989888888613459565b90506132f6866117d96132ef8a8d6136a3565b87906106d6565b9850613303858a86611779565b985088811015613319575f809250925050613385565b888103670de0b6b3a7640000811061334e57613347613340670de0b6b3a7640000896114a3565b829061273c565b9050613366565b613363613340670de0b6b3a7640000896126a3565b90505b8089101561337b575f80935093505050613385565b8803925060019150505b965096945050505050565b5f805f6133a08989888888613459565b90506133b0866117d9898b6136a3565b9750878110156133c6575f809250925050613385565b8781036133d4818688612680565b9050670de0b6b3a76400008110613401576133fa613340670de0b6b3a7640000896114a3565b9050613419565b613416613340670de0b6b3a7640000896126a3565b90505b61342381866114a3565b9050808a101561343a575f80935093505050613385565b90980398600198509650505050505050565b60606106ea83835f613487565b5f613464858561273c565b61347d613475866117d9868b61252b565b859085612680565b61245691906136a3565b6060814710156134ac5760405163cd78605960e01b8152306004820152602401612e8a565b5f80856001600160a01b031684866040516134c79190613b4f565b5f6040518083038185875af1925050503d805f8114613501576040519150601f19603f3d011682016040523d82523d5f602084013e613506565b606091505b5091509150612456868383606082613526576135218261356d565b61156a565b815115801561353d57506001600160a01b0384163b155b1561356657604051639996b31560e01b81526001600160a01b0385166004820152602401612e8a565b508061156a565b80511561357d5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806135aa6135e0565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f8060808587031215613648575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613673575f80fd5b850160608188031215613684575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b808201808211156106ed576106ed61368f565b6001600160a01b0381168114610602575f80fd5b5f602082840312156136da575f80fd5b813561156a816136b6565b8015158114610602575f80fd5b5f60208284031215613702575f80fd5b813561156a816136e5565b5f808335601e19843603018112613722575f80fd5b83018035915067ffffffffffffffff82111561373c575f80fd5b6020019150368190038213156106cf575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201525f6137ab60c083018486613750565b9998505050505050505050565b818103818111156106ed576106ed61368f565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f61380460e083018486613750565b9a9950505050505050505050565b6001600160701b038181168382160190808211156126d5576126d561368f565b6001600160801b038181168382160190808211156126d5576126d561368f565b8181035f8312801583831316838312821617156126d5576126d561368f565b5f60208284031215613881575f80fd5b815161156a816136b6565b80820281158282048414176106ed576106ed61368f565b6001600160801b038281168282160390808211156126d5576126d561368f565b8082018281125f8312801582168215821617156138e2576138e261368f565b505092915050565b5f602082840312156138fa575f80fd5b5051919050565b634e487b7160e01b5f52601260045260245ffd5b5f8261392357613923613901565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106ed576106ed61368f565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a0820190506139e6828551613955565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613a59575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613a7e57613a7e61368f565b505f0390565b61018081016106ed8284613955565b5f8060408385031215613aa4575f80fd5b825191506020830151613ab6816136e5565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f82613ae357613ae3613901565b600160ff1b82145f1984141615613afc57613afc61368f565b500590565b5f805f8060808587031215613b14575f80fd5b8451935060208501519250604085015191506060850151613684816136e5565b5f60208284031215613b44575f80fd5b815161156a816136e5565b5f82515f5b81811015613b6e5760208186018101518583015201613b54565b505f92019182525091905056fea264697066735822122047b238710ac289c637a699cb1c245d96419af6fc92d3a63ea6dfddea4568736864736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
  "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
} as const
};
