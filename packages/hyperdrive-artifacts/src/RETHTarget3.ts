export const RETHTarget3 = {
  name: 'RETHTarget3' as const,
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
    "name": "addLiquidity",
    "inputs": [
      {
        "name": "_contribution",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minLpSharePrice",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minApr",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_maxApr",
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
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "initialize",
    "inputs": [
      {
        "name": "_contribution",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_apr",
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
    "name": "BelowMinimumContribution",
    "inputs": []
  },
  {
    "type": "error",
    "name": "CircuitBreakerTriggered",
    "inputs": []
  },
  {
    "type": "error",
    "name": "DecreasedPresentValueWhenAddingLiquidity",
    "inputs": []
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
    "name": "InvalidApr",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidEffectiveShareReserves",
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
    "name": "PoolAlreadyInitialized",
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
  },
  {
    "type": "error",
    "name": "UpdateLiquidityFailed",
    "inputs": []
  }
] as const,
  bytecode: '0x61028060405234801562000011575f80fd5b5060405162003fac38038062003fac8339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613b0c620004a05f395f50505f50505f6112fe01525f818161034b0152818161037a01526103a701525f818161012c015281816105e9015261171401525f81816108850152818161097001528181610a0001528181610b05015281816115e6015281816116ee0152818161200e015281816120710152818161291a01528181612cd10152612d0d01525f818161018c015281816108f501528181610ebc015281816114af015281816115120152818161155701526116c801525f611c1f01525f8181611d740152612f6301525f81816110790152611d4801525f612f1901525f81816101ce0152818161094801528181610edd0152818161147f015281816114e201528181611578015261173a01525f81816101ad0152818161028201528181610320015281816107280152818161092201528181610fb701526128b001525f81816102e001528181610d8201528181610df901528181610e6d01528181610f380152610f7001525f8181603b015281816119c70152612b6801525f5050613b0c5ff3fe60806040526004361061002b575f3560e01c80634c2ac1d91461007f57806377d05ff4146100a4575f80fd5b3661007b57336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610079576040516312171d8360e31b815260040160405180910390fd5b005b5f80fd5b61009261008d366004613565565b6100b7565b60405190815260200160405180910390f35b6100926100b23660046135c4565b6100d1565b5f6100c586868686866100e7565b90505b95945050505050565b5f6100dd848484610831565b90505b9392505050565b5f6100f0610bdf565b600654610100900460ff1615610119576040516321081abf60e01b815260040160405180910390fd5b610121610c07565b61012a82610c28565b7f000000000000000000000000000000000000000000000000000000000000000086101561016b5760405163211ddda360e11b815260040160405180910390fd5b5f6101f2610177610c60565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c85565b90508481108061020157508381115b1561021f57604051633b61151160e11b815260040160405180910390fd5b5f8061022b8986610caa565b915091505f610238610d7b565b9050610248818360046001610da6565b506002546004546003545f9283926102b1926001600160801b0380841693600f9390930b92600160801b90048116918991166102ac6102a77f00000000000000000000000000000000000000000000000000000000000000008b613624565b61140a565b611450565b91509150806102d357604051630552b01360e31b815260040160405180910390fd5b8b5f6103446008826103057f000000000000000000000000000000000000000000000000000000000000000089613637565b815260208101919091526040015f20546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000611654565b90506103707f000000000000000000000000000000000000000000000000000000000000000082613624565b8811806103cf57507f0000000000000000000000000000000000000000000000000000000000000000811180156103cf57506103cc7f000000000000000000000000000000000000000000000000000000000000000082613637565b88105b156103ed57604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543549091610438916001600160801b0390911690613637565b5f808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765491925090610472908390613624565b90505f805f6104808a61167f565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906104ba9084906004016136c8565b602060405180830381865af41580156104d5573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104f991906136d7565b915061050c6105078c6117b9565b6117e6565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161056d918591016136c8565b602060405180830381865af4158015610588573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105ac91906136d7565b9250818310156105cf5760405163184d952160e11b815260040160405180910390fd5b6105e584836105de8187613637565b919061180c565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156106285760405163211ddda360e11b815260040160405180910390fd5b508f610634868e611827565b10156106535760405163c972651760e01b815260040160405180910390fd5b61066f5f8e5f0160208101906106699190613702565b8e61183b565b610678896118e0565b95508561069857604051638bdf918d60e01b815260040160405180910390fd5b5f8890505f8d9050368f90505f8c90505f61075260025f015f9054906101000a90046001600160801b03166001600160801b0316600280015f9054906101000a9004600f0b600f0b60025f0160109054906101000a90046001600160801b03166001600160801b03168560026001015f9054906101000a90046001600160801b03166001600160801b03166102ac7f00000000000000000000000000000000000000000000000000000000000000008c6102a79190613624565b9b5090508a158061076b57506107688c5f6118ec565b81125b1561078957604051630552b01360e31b815260040160405180910390fd5b5f88156107a05761079b87848b61180c565b6107a2565b5f5b90506107b16020850185613702565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d866107ee60408a0160208b0161372a565b866107fc60408c018c613745565b60405161080f9796959493929190613788565b60405180910390a250505050505050505050505050505050506100c860015f55565b5f61083a610bdf565b610842610c07565b61084b82610c28565b60065460ff161561086f57604051637983c05160e01b815260040160405180910390fd5b5f8061087b8685610caa565b90925090506108ab7f000000000000000000000000000000000000000000000000000000000000000060026137db565b8210156108cb57604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393505f908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156109d4573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109f891906137f2565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610a298484611900565b1015610a485760405163216f4ab160e21b815260040160405180910390fd5b5f80610a58858585895f80611450565b91509150801580610a6857505f82125b15610a8657604051630552b01360e31b815260040160405180910390fd5b610a8f85611925565b600280546001600160801b0319166001600160801b0392909216919091179055610ab88461194e565b600480546001600160801b0319166001600160801b0392909216919091179055610ae183611925565b600280546001600160801b03928316600160801b029216919091179055610b295f807f000000000000000000000000000000000000000000000000000000000000000061183b565b610b405f610b3a60208c018c613702565b8a61183b565b610b55610b4b610d7b565b8760046001610da6565b508a8a8a610b666020820182613702565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610ba3604087016020880161372a565b87610bb16040890189613745565b604051610bc49796959493929190613788565b60405180910390a2505050505050505050506100e060015f55565b60025f5403610c0157604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b3415610c2657604051631574f9f360e01b815260040160405180910390fd5b565b5f610c366020830183613702565b6001600160a01b031603610c5d5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6002546004545f91610c80916001600160801b0390911690600f0b611900565b905090565b5f80610c9387878786611989565b9050610c9f8185611654565b979650505050505050565b815f80610cbd604085016020860161372a565b15610ce257610cd885610cd36040870187613745565b61199f565b9093509050610cfa565b5034610cfa85610cf56040870187613745565b6119ba565b610d026119f4565b91508015610d72576040515f90339083908381818185875af1925050503d805f8114610d49576040519150601f19603f3d011682016040523d82523d5f602084013e610d4e565b606091505b5050905080610d70576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f610c80427f0000000000000000000000000000000000000000000000000000000000000000611a06565b5f84815260086020526040812060018101546001600160801b0316151580610dcd57504286115b15610de657600101546001600160801b03169050611402565b5f805f610df1610d7b565b90505f610e1e7f00000000000000000000000000000000000000000000000000000000000000008b613624565b90505b81811015610e92575f818152600860205260409020600101546001600160801b03168015610e6a575f828152600860205260409020549094506001600160801b03169250610e92565b507f000000000000000000000000000000000000000000000000000000000000000001610e21565b835f03610f0457889350610f01610ea7610c60565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611989565b92505b50610f0e83611925565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f64610f5d7f00000000000000000000000000000000000000000000000000000000000000008b613637565b8a84611a1b565b610fa289610f9c610f957f000000000000000000000000000000000000000000000000000000000000000083613624565b4290611b54565b84611a1b565b610fab88611b62565b505f9050600881610fdc7f00000000000000000000000000000000000000000000000000000000000000008d613637565b815260208101919091526040015f908120600101546001600160801b0316915061100760028c611cff565b5f818152600b60205260408120549192508c8c831561114857600192505f8061103386898d865f611d33565b915091508060095f8282546110489190613624565b909155506110639050865f8461105d816117b9565b88611e00565b61106d8183613624565b915061109d86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611f77565b91506110b16110ac8385611fba565b611fce565b600680546002906110d29084906201000090046001600160701b031661381d565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110ff82611925565b60068054601090611121908490600160801b90046001600160801b031661383d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f611154600184611cff565b5f818152600b6020526040902054909150801561125f57600194505f8061117f838b8f886001611d33565b915091508060095f8282546111949190613624565b909155506111af9050835f846111a9816117b9565b8a611ff7565b6111b98183613637565b91506111c86110ac8387611fba565b600680546002906111e99084906201000090046001600160701b031661381d565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061121682611925565b60068054601090611238908490600160801b90046001600160801b031661383d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156112985761128a611271876117b9565b61127a836117b9565b611284919061385d565b5f6121e7565b8e6112958482612226565b50505b5f6112a284612415565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611358573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061137c919061387c565b90506001600160a01b038116156113f0576113ed5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612557565b50505b509b9d50505050505050505050505050505b949350505050565b5f61142f600b5f61141c600286611cff565b81526020019081526020015f20546117b9565b611440600b5f61141c600187611cff565b61144a919061385d565b92915050565b5f805f8061145e8a8a6125df565b9150915080611474575f80935093505050611649565b5f6114d3838a6114ac7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613637565b8b7f0000000000000000000000000000000000000000000000000000000000000000612617565b5090505f611536848b8461150f7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613637565b8d7f00000000000000000000000000000000000000000000000000000000000000006126d0565b509050811580611544575080155b1561154f57505f9050805b5f61159c858c7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611989565b90506115aa83838c8461278a565b509093505f90506115bb848f613624565b90505f6115db8b8b6115cc876117b9565b6115d6908e613897565b6127d2565b90508b61161061160b7f000000000000000000000000000000000000000000000000000000000000000083612834565b6117b9565b611619836117b9565b61162661160b8685611fba565b611630919061385d565b61163a919061385d565b60019950995050505050505050505b965096945050505050565b5f6100e061166784846301e13380612844565b61167985670de0b6b3a7640000613637565b90611827565b6116876134b6565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161177f9116612867565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926117b192900416612867565b905292915050565b5f6001600160ff1b038211156117e25760405163396ea70160e11b815260040160405180910390fd5b5090565b6117ef816128d4565b610c5d57604051635044b7f560e01b815260040160405180910390fd5b5f825f190484118302158202611820575f80fd5b5091020490565b5f6100e083670de0b6b3a76400008461180c565b5f838152600a602090815260408083206001600160a01b03861684529091528120805483929061186c908490613624565b90915550505f838152600b60205260408120805483929061188e908490613624565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f61144a826004612226565b5f8183136118fa57826100e0565b50919050565b5f8061190c84846125df565b90925090508061191e5761191e612a68565b5092915050565b5f6001600160801b038211156117e257604051630f0af95160e11b815260040160405180910390fd5b5f60016001607f1b031982128061196b575060016001607f1b0382135b156117e25760405163a5353be560e01b815260040160405180910390fd5b5f6100c88261199985888861180c565b90612a81565b5f8060405163350b944160e11b815260040160405180910390fd5b6119ef6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612af0565b505050565b5f610c80670de0b6b3a7640000612b50565b5f611a1182846138d2565b6100e09084613637565b5f83815260086020526040902054600160801b90046001600160801b0316808303611a465750505050565b5f848152600860205260408120546001600160801b031690819003611a9e57611a6e83611925565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611b1b565b611aef611aea670de0b6b3a7640000611ab78886613637565b611ac191906137db565b85670de0b6b3a7640000611ad5878a613637565b611adf91906137db565b859291906001612bd9565b611925565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611b2484611925565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f8183116118fa57826100e0565b6006545f908190611b84908490600160801b90046001600160801b0316611fba565b6006546201000090046001600160701b03169250905081811115611cfa575f611bad8383613637565b9050611bbc611aea8286612c73565b60068054601090611bde908490600160801b90046001600160801b03166138e5565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611c16858361182790919063ffffffff16565b90505f611c43827f0000000000000000000000000000000000000000000000000000000000000000611fba565b90508060095f828254611c569190613624565b90915550611c6690508183613637565b9150611c7182611925565b600280545f90611c8b9084906001600160801b031661383d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611cb882612c87565b600480545f90611ccc908490600f0b613905565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b03821115611d285760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f80611d3f8785611827565b91505f611d6c837f0000000000000000000000000000000000000000000000000000000000000000611fba565b9050611d98817f0000000000000000000000000000000000000000000000000000000000000000611fba565b91508315611dbb57611daa8282613637565b611db49084613637565b9250611dd2565b611dc58282613637565b611dcf9084613624565b92505b86861015611df557611de583878961180c565b9250611df282878961180c565b91505b509550959350505050565b600454600160801b90046001600160801b0316611e48611aea82611e2c670de0b6b3a7640000866137db565b600554600160801b90046001600160801b031691908a5f612bd9565b600580546001600160801b03928316600160801b029216919091179055611e6e86611925565b611e7890826138e5565b600480546001600160801b03928316600160801b029216919091179055611e9e84611925565b600280545f90611eb89084906001600160801b031661383d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ee58361194e565b600480545f90611ef9908490600f0b613905565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611f2985611925565b60028054601090611f4b908490600160801b90046001600160801b03166138e5565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80611f88846116798a888a61180c565b9050611f9588848661180c565b611f9f9082613624565b905086811115611faf5786810391505b509695505050505050565b5f6100e08383670de0b6b3a764000061180c565b5f6001600160701b038211156117e25760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061203957507f00000000000000000000000000000000000000000000000000000000000000006120378583613637565b105b1561204657612046612a68565b6004549084900390600f0b61205b848261385d565b905083612067866117b9565b13801561209c57507f000000000000000000000000000000000000000000000000000000000000000061209a8383611900565b105b156120a9576120a9612a68565b600354600160801b90046001600160801b03166120ea611aea826120d5670de0b6b3a7640000886137db565b6005546001600160801b031691908c5f612bd9565b600580546001600160801b0319166001600160801b03929092169190911790556121148882613637565b905061211f81611925565b600380546001600160801b03928316600160801b02921691909117905561214583611925565b600280546001600160801b0319166001600160801b039290921691909117905561216e8261194e565b600480546001600160801b0319166001600160801b039290921691909117905561219787611925565b600280546010906121b9908490600160801b90046001600160801b031661383d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461220290611aea906001600160801b031684846127d2565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291612270916001600160801b031690613637565b9050805f0361228357600191505061144a565b5f61228d85612cb0565b9050805f036122a15760019250505061144a565b5f806122ae838589612d4b565b91509150806122c3575f94505050505061144a565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016122fe929190613932565b6040805180830381865af4158015612318573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061233c91906139a7565b9150915061235a61234c826117b9565b612355906139c9565b6128d4565b92508261236f575f965050505050505061144a565b61237882611925565b600780545f906123929084906001600160801b031661383d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506123bf81611925565b600780546010906123e1908490600160801b90046001600160801b031661383d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61243c8761167f565b6040518263ffffffff1660e01b815260040161245891906136c8565b6040805180830381865af4158015612472573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061249691906139e3565b91509150806124ab57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161251091613624565b61251a9190613637565b9050805f0361253057505f958695509350505050565b5f80871161253e575f612549565b61254984888461180c565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561257a5761257a613a11565b6040519080825280601f01601f1916602001820160405280156125a4576020820181803683370190505b5090505f808751602089018b8e8ef191503d9250868311156125c4578692505b828152825f602083013e9093509150505b9550959350505050565b5f805f836125ec866117b9565b6125f6919061385d565b90505f81121561260c575f809250925050610d74565b946001945092505050565b5f805f6126278888888888612eba565b90505f612651670de0b6b3a76400006126408888612c73565b61264a9190613624565b8390611827565b9050670de0b6b3a764000081106126855761267e612677670de0b6b3a764000089611827565b8290612a81565b905061269d565b61269a612677670de0b6b3a764000089612c73565b90505b6126a78186611827565b9050888110156126be575f809350935050506125d5565b97909703976001975095505050505050565b5f805f6126e08989888888612ee8565b90506126fa866119996126f38a8d613624565b8790611fba565b9850612707858a8661180c565b98508881101561271d575f809250925050611649565b888103670de0b6b3a7640000811061274b57612744612677670de0b6b3a764000089612c73565b9050612763565b612760612677670de0b6b3a764000089611827565b90505b80891015612778575f80935093505050611649565b90970398600198509650505050505050565b5f805f805f61279a898789612f0c565b90925090506127a98289613637565b97505f6127b782888a61180c565b90506127c3818b613637565b9a989950979650505050505050565b5f806127de845f612f91565b6127e8845f612f91565b6127f2919061385d565b90505f81131561280d576128068186613624565b945061282b565b5f81121561282b5761281e816139c9565b6128289086613637565b94505b50929392505050565b5f6100e08383670de0b6b3a76400005b5f825f190484118302158202612858575f80fd5b50910281810615159190040190565b5f80670de0b6b3a764000061287a610d7b565b61288491906137db565b9050808311612893575f61289d565b61289d8184613637565b91506100e061264a670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006137db565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af415801561298a573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906129ae9190613a25565b9350935093509350806129c957505f98975050505050505050565b8684146129fa576129d984611925565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612a2b57612a0a8361194e565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612a5957612a3b82611925565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f815f03612a985750670de0b6b3a764000061144a565b825f03612aa657505f61144a565b5f612ab0836117b9565b90505f612ac4612abf866117b9565b612fa6565b9050818102612adb670de0b6b3a764000082613a63565b9050612ae6816131cb565b9695505050505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052612b4a90859061335d565b50505050565b604051638b32fa2360e01b8152600481018290525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638b32fa2390602401602060405180830381865afa158015612bb5573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061144a91906136d7565b5f825f03612be85750846100c8565b8115612c3a57612c19612bfb8487613624565b612c058587611fba565b612c0f888a611fba565b6116799190613624565b90505f612c268588611b54565b905080821015612c34578091505b506100c8565b828503612c4857505f6100c8565b6100c5612c558487613637565b612c5f8587612834565b612c69888a611fba565b6116799190613637565b5f6100e083670de0b6b3a764000084612844565b5f60016001607f1b038211156117e25760405163a5353be560e01b815260040160405180910390fd5b6003545f908190612cca906001600160801b031684612c73565b9050612cf67f000000000000000000000000000000000000000000000000000000000000000082613624565b6002546001600160801b031611156118fa576002547f000000000000000000000000000000000000000000000000000000000000000090612d419083906001600160801b0316613637565b6100e09190613637565b612d5361350b565b5f80612d5e8461167f565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612d9891906136c8565b6040805180830381865af4158015612db2573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612dd691906139e3565b9350905082612dea57505f9150612eb29050565b5f612e0b61160b846101600151856101400151611fba90919063ffffffff16565b612e2b61160b85610120015186610100015161283490919063ffffffff16565b612e35919061385d565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b5f612ec58585612a81565b612ede612ed686611999868b611fba565b85908561180c565b6100c59190613624565b5f612ef38585612a81565b612ede612f0486611999868b612834565b859085612844565b5f80612f5b85612f5585817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612f4b818c612c73565b612f559190613637565b90612834565b9150612f87827f0000000000000000000000000000000000000000000000000000000000000000611fba565b9050935093915050565b5f818313612f9f57816100e0565b5090919050565b5f808213612fc75760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061304a9084901c6117b9565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e1982136131e457505f919050565b680755bf798b4a1bf1e5821261320d576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612ae674029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c6117b9565b5f6133716001600160a01b038416836133c3565b905080515f141580156133955750808060200190518101906133939190613a8f565b155b156119ef57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b60606100e083835f845f80856001600160a01b031684866040516133e79190613aaa565b5f6040518083038185875af1925050503d805f8114613421576040519150601f19603f3d011682016040523d82523d5f602084013e613426565b606091505b5091509150612ae6868383606082613446576134418261348d565b6100e0565b815115801561345d57506001600160a01b0384163b155b1561348657604051639996b31560e01b81526001600160a01b03851660048201526024016133ba565b50806100e0565b80511561349d5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b60405180610120016040528061351f6134b6565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f606082840312156118fa575f80fd5b5f805f805f60a08688031215613579575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156135ab575f80fd5b6135b788828901613555565b9150509295509295909350565b5f805f606084860312156135d6575f80fd5b8335925060208401359150604084013567ffffffffffffffff8111156135fa575f80fd5b61360686828701613555565b9150509250925092565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561144a5761144a613610565b8181038181111561144a5761144a613610565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b610180810161144a828461364a565b5f602082840312156136e7575f80fd5b5051919050565b6001600160a01b0381168114610c5d575f80fd5b5f60208284031215613712575f80fd5b81356100e0816136ee565b8015158114610c5d575f80fd5b5f6020828403121561373a575f80fd5b81356100e08161371d565b5f808335601e1984360301811261375a575f80fd5b83018035915067ffffffffffffffff821115613774575f80fd5b602001915036819003821315610d74575f80fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e08301375f81830160e090810191909152601f909201601f191601019695505050505050565b808202811582820484141761144a5761144a613610565b5f805f60608486031215613804575f80fd5b8351925060208401519150604084015190509250925092565b6001600160701b0381811683821601908082111561191e5761191e613610565b6001600160801b0381811683821601908082111561191e5761191e613610565b8181035f83128015838313168383128216171561191e5761191e613610565b5f6020828403121561388c575f80fd5b81516100e0816136ee565b8082018281125f8312801582168215821617156138b6576138b6613610565b505092915050565b634e487b7160e01b5f52601260045260245ffd5b5f826138e0576138e06138be565b500690565b6001600160801b0382811682821603908082111561191e5761191e613610565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561144a5761144a613610565b5f6102a08201905061394582855161364a565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f80604083850312156139b8575f80fd5b505080516020909101519092909150565b5f600160ff1b82016139dd576139dd613610565b505f0390565b5f80604083850312156139f4575f80fd5b825191506020830151613a068161371d565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215613a38575f80fd5b8451935060208501519250604085015191506060850151613a588161371d565b939692955090935050565b5f82613a7157613a716138be565b600160ff1b82145f1984141615613a8a57613a8a613610565b500590565b5f60208284031215613a9f575f80fd5b81516100e08161371d565b5f82515f5b81811015613ac95760208186018101518583015201613aaf565b505f92019182525091905056fea264697066735822122016bc1dd98e1cdb81a8b81346581ae20cf8640245ca4af02c7ccba487fe5c401864736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
  "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
} as const
};
