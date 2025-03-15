export const ERC4626Target3 = {
  name: 'ERC4626Target3' as const,
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
    "name": "UpdateLiquidityFailed",
    "inputs": []
  }
] as const,
  bytecode: '0x61028060405234801562000011575f80fd5b50604051620041c2380380620041c28339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613d11620004b15f395f50505f50505f6112ab01525f81816102f801528181610327015261035401525f818160d90152818161059601526116c101525f81816108320152818161091d015281816109ad01528181610ab2015281816115930152818161169b015281816120d601528181612139015281816129e201528181612dd70152612e1301525f8181610139015281816108a201528181610e690152818161145c015281816114bf01528181611504015261167501525f611ce701525f8181611e3c015261306201525f81816110260152611e1001525f61301801525f818161017b015281816108f501528181610e8a0152818161142c0152818161148f0152818161152501526116e701525f818161015a0152818161022f015281816102cd015281816106d5015281816108cf01528181610f64015261297801525f818161028d01528181610d2f01528181610da601528181610e1a01528181610ee50152610f1d01525f818161198801528181611a0101528181611a8f0152612cba01525f818161195b01526119bc0152613d115ff3fe608060405260043610610028575f3560e01c80634c2ac1d91461002c57806377d05ff414610051575b5f80fd5b61003f61003a36600461376a565b610064565b60405190815260200160405180910390f35b61003f61005f3660046137c9565b61007e565b5f6100728686868686610094565b90505b95945050505050565b5f61008a8484846107de565b90505b9392505050565b5f61009d610b8c565b600654610100900460ff16156100c6576040516321081abf60e01b815260040160405180910390fd5b6100ce610bb4565b6100d782610bd5565b7f00000000000000000000000000000000000000000000000000000000000000008610156101185760405163211ddda360e11b815260040160405180910390fd5b5f61019f610124610c0d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c32565b9050848110806101ae57508381115b156101cc57604051633b61151160e11b815260040160405180910390fd5b5f806101d88986610c57565b915091505f6101e5610d28565b90506101f5818360046001610d53565b506002546004546003545f92839261025e926001600160801b0380841693600f9390930b92600160801b90048116918991166102596102547f00000000000000000000000000000000000000000000000000000000000000008b613829565b6113b7565b6113fd565b915091508061028057604051630552b01360e31b815260040160405180910390fd5b8b5f6102f16008826102b27f00000000000000000000000000000000000000000000000000000000000000008961383c565b815260208101919091526040015f20546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000611601565b905061031d7f000000000000000000000000000000000000000000000000000000000000000082613829565b88118061037c57507f00000000000000000000000000000000000000000000000000000000000000008111801561037c57506103797f00000000000000000000000000000000000000000000000000000000000000008261383c565b88105b1561039a57604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490916103e5916001600160801b039091169061383c565b5f808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061041f908390613829565b90505f805f61042d8a61162c565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906104679084906004016138cd565b602060405180830381865af4158015610482573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104a691906138dc565b91506104b96104b48c611766565b611793565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161051a918591016138cd565b602060405180830381865af4158015610535573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061055991906138dc565b92508183101561057c5760405163184d952160e11b815260040160405180910390fd5b610592848361058b818761383c565b91906117b9565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105d55760405163211ddda360e11b815260040160405180910390fd5b508f6105e1868e6117d4565b10156106005760405163c972651760e01b815260040160405180910390fd5b61061c5f8e5f0160208101906106169190613907565b8e6117e8565b6106258961188d565b95508561064557604051638bdf918d60e01b815260040160405180910390fd5b5f8890505f8d9050368f90505f8c90505f6106ff60025f015f9054906101000a90046001600160801b03166001600160801b0316600280015f9054906101000a9004600f0b600f0b60025f0160109054906101000a90046001600160801b03166001600160801b03168560026001015f9054906101000a90046001600160801b03166001600160801b03166102597f00000000000000000000000000000000000000000000000000000000000000008c6102549190613829565b9b5090508a158061071857506107158c5f611899565b81125b1561073657604051630552b01360e31b815260040160405180910390fd5b5f881561074d5761074887848b6117b9565b61074f565b5f5b905061075e6020850185613907565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d8661079b60408a0160208b0161392f565b866107a960408c018c61394a565b6040516107bc979695949392919061398d565b60405180910390a2505050505050505050505050505050505061007560015f55565b5f6107e7610b8c565b6107ef610bb4565b6107f882610bd5565b60065460ff161561081c57604051637983c05160e01b815260040160405180910390fd5b5f806108288685610c57565b90925090506108587f000000000000000000000000000000000000000000000000000000000000000060026139e0565b82101561087857604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393505f908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610981573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109a591906139f7565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109d684846118ad565b10156109f55760405163216f4ab160e21b815260040160405180910390fd5b5f80610a05858585895f806113fd565b91509150801580610a1557505f82125b15610a3357604051630552b01360e31b815260040160405180910390fd5b610a3c856118d2565b600280546001600160801b0319166001600160801b0392909216919091179055610a65846118fb565b600480546001600160801b0319166001600160801b0392909216919091179055610a8e836118d2565b600280546001600160801b03928316600160801b029216919091179055610ad65f807f00000000000000000000000000000000000000000000000000000000000000006117e8565b610aed5f610ae760208c018c613907565b8a6117e8565b610b02610af8610d28565b8760046001610d53565b508a8a8a610b136020820182613907565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b50604087016020880161392f565b87610b5e604089018961394a565b604051610b71979695949392919061398d565b60405180910390a25050505050505050505061008d60015f55565b60025f5403610bae57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b3415610bd357604051631574f9f360e01b815260040160405180910390fd5b565b5f610be36020830183613907565b6001600160a01b031603610c0a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6002546004545f91610c2d916001600160801b0390911690600f0b6118ad565b905090565b5f80610c4087878786611936565b9050610c4c8185611601565b979650505050505050565b815f80610c6a604085016020860161392f565b15610c8f57610c8585610c80604087018761394a565b61194c565b9093509050610ca7565b5034610ca785610ca2604087018761394a565b611a82565b610caf611abc565b91508015610d1f576040515f90339083908381818185875af1925050503d805f8114610cf6576040519150601f19603f3d011682016040523d82523d5f602084013e610cfb565b606091505b5050905080610d1d576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f610c2d427f0000000000000000000000000000000000000000000000000000000000000000611ace565b5f84815260086020526040812060018101546001600160801b0316151580610d7a57504286115b15610d9357600101546001600160801b031690506113af565b5f805f610d9e610d28565b90505f610dcb7f00000000000000000000000000000000000000000000000000000000000000008b613829565b90505b81811015610e3f575f818152600860205260409020600101546001600160801b03168015610e17575f828152600860205260409020549094506001600160801b03169250610e3f565b507f000000000000000000000000000000000000000000000000000000000000000001610dce565b835f03610eb157889350610eae610e54610c0d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611936565b92505b50610ebb836118d2565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f11610f0a7f00000000000000000000000000000000000000000000000000000000000000008b61383c565b8a84611ae3565b610f4f89610f49610f427f000000000000000000000000000000000000000000000000000000000000000083613829565b4290611c1c565b84611ae3565b610f5888611c2a565b505f9050600881610f897f00000000000000000000000000000000000000000000000000000000000000008d61383c565b815260208101919091526040015f908120600101546001600160801b03169150610fb460028c611dc7565b5f818152600b60205260408120549192508c8c83156110f557600192505f80610fe086898d865f611dfb565b915091508060095f828254610ff59190613829565b909155506110109050865f8461100a81611766565b88611ec8565b61101a8183613829565b915061104a86838a8e877f000000000000000000000000000000000000000000000000000000000000000061203f565b915061105e6110598385612082565b612096565b6006805460029061107f9084906201000090046001600160701b0316613a22565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110ac826118d2565b600680546010906110ce908490600160801b90046001600160801b0316613a42565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f611101600184611dc7565b5f818152600b6020526040902054909150801561120c57600194505f8061112c838b8f886001611dfb565b915091508060095f8282546111419190613829565b9091555061115c9050835f8461115681611766565b8a6120bf565b611166818361383c565b91506111756110598387612082565b600680546002906111969084906201000090046001600160701b0316613a22565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506111c3826118d2565b600680546010906111e5908490600160801b90046001600160801b0316613a42565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156112455761123761121e87611766565b61122783611766565b6112319190613a62565b5f6122af565b8e61124284826122ee565b50505b5f61124f846124dd565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611305573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113299190613a81565b90506001600160a01b0381161561139d5761139a5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b0386169392919061261f565b50505b509b9d50505050505050505050505050505b949350505050565b5f6113dc600b5f6113c9600286611dc7565b81526020019081526020015f2054611766565b6113ed600b5f6113c9600187611dc7565b6113f79190613a62565b92915050565b5f805f8061140b8a8a6126a7565b9150915080611421575f809350935050506115f6565b5f611480838a6114597f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061383c565b8b7f00000000000000000000000000000000000000000000000000000000000000006126df565b5090505f6114e3848b846114bc7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061383c565b8d7f0000000000000000000000000000000000000000000000000000000000000000612798565b5090508115806114f1575080155b156114fc57505f9050805b5f611549858c7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611936565b905061155783838c84612852565b509093505f9050611568848f613829565b90505f6115888b8b61157987611766565b611583908e613a9c565b61289a565b90508b6115bd6115b87f0000000000000000000000000000000000000000000000000000000000000000836128fc565b611766565b6115c683611766565b6115d36115b88685612082565b6115dd9190613a62565b6115e79190613a62565b60019950995050505050505050505b965096945050505050565b5f61008d61161484846301e1338061290c565b61162685670de0b6b3a764000061383c565b906117d4565b6116346136bb565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161172c911661292f565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261175e9290041661292f565b905292915050565b5f6001600160ff1b0382111561178f5760405163396ea70160e11b815260040160405180910390fd5b5090565b61179c8161299c565b610c0a57604051635044b7f560e01b815260040160405180910390fd5b5f825f1904841183021582026117cd575f80fd5b5091020490565b5f61008d83670de0b6b3a7640000846117b9565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290611819908490613829565b90915550505f838152600b60205260408120805483929061183b908490613829565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6113f78260046122ee565b5f8183136118a7578261008d565b50919050565b5f806118b984846126a7565b9092509050806118cb576118cb612b30565b5092915050565b5f6001600160801b0382111561178f57604051630f0af95160e11b815260040160405180910390fd5b5f60016001607f1b0319821280611918575060016001607f1b0382135b1561178f5760405163a5353be560e01b815260040160405180910390fd5b5f610075826119468588886117b9565b90612b49565b5f806119836001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612bb8565b6119e37f00000000000000000000000000000000000000000000000000000000000000006119b2876001613829565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612c25565b604051636e553f6560e01b8152600481018690523060248201525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303815f875af1158015611a4f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611a7391906138dc565b92505f9150505b935093915050565b611ab76001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612bb8565b505050565b5f610c2d670de0b6b3a7640000612cb4565b5f611ad98284613ad7565b61008d908461383c565b5f83815260086020526040902054600160801b90046001600160801b0316808303611b0e5750505050565b5f848152600860205260408120546001600160801b031690819003611b6657611b36836118d2565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611be3565b611bb7611bb2670de0b6b3a7640000611b7f888661383c565b611b8991906139e0565b85670de0b6b3a7640000611b9d878a61383c565b611ba791906139e0565b859291906001612cdf565b6118d2565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611bec846118d2565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f8183116118a7578261008d565b6006545f908190611c4c908490600160801b90046001600160801b0316612082565b6006546201000090046001600160701b03169250905081811115611dc2575f611c75838361383c565b9050611c84611bb28286612d79565b60068054601090611ca6908490600160801b90046001600160801b0316613aea565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611cde85836117d490919063ffffffff16565b90505f611d0b827f0000000000000000000000000000000000000000000000000000000000000000612082565b90508060095f828254611d1e9190613829565b90915550611d2e9050818361383c565b9150611d39826118d2565b600280545f90611d539084906001600160801b0316613a42565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611d8082612d8d565b600480545f90611d94908490600f0b613b0a565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b03821115611df05760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f80611e0787856117d4565b91505f611e34837f0000000000000000000000000000000000000000000000000000000000000000612082565b9050611e60817f0000000000000000000000000000000000000000000000000000000000000000612082565b91508315611e8357611e72828261383c565b611e7c908461383c565b9250611e9a565b611e8d828261383c565b611e979084613829565b92505b86861015611ebd57611ead8387896117b9565b9250611eba8287896117b9565b91505b509550959350505050565b600454600160801b90046001600160801b0316611f10611bb282611ef4670de0b6b3a7640000866139e0565b600554600160801b90046001600160801b031691908a5f612cdf565b600580546001600160801b03928316600160801b029216919091179055611f36866118d2565b611f409082613aea565b600480546001600160801b03928316600160801b029216919091179055611f66846118d2565b600280545f90611f809084906001600160801b0316613a42565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611fad836118fb565b600480545f90611fc1908490600f0b613b0a565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611ff1856118d2565b60028054601090612013908490600160801b90046001600160801b0316613aea565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80612050846116268a888a6117b9565b905061205d8884866117b9565b6120679082613829565b9050868111156120775786810391505b509695505050505050565b5f61008d8383670de0b6b3a76400006117b9565b5f6001600160701b0382111561178f5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061210157507f00000000000000000000000000000000000000000000000000000000000000006120ff858361383c565b105b1561210e5761210e612b30565b6004549084900390600f0b6121238482613a62565b90508361212f86611766565b13801561216457507f000000000000000000000000000000000000000000000000000000000000000061216283836118ad565b105b1561217157612171612b30565b600354600160801b90046001600160801b03166121b2611bb28261219d670de0b6b3a7640000886139e0565b6005546001600160801b031691908c5f612cdf565b600580546001600160801b0319166001600160801b03929092169190911790556121dc888261383c565b90506121e7816118d2565b600380546001600160801b03928316600160801b02921691909117905561220d836118d2565b600280546001600160801b0319166001600160801b0392909216919091179055612236826118fb565b600480546001600160801b0319166001600160801b039290921691909117905561225f876118d2565b60028054601090612281908490600160801b90046001600160801b0316613a42565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6003546122ca90611bb2906001600160801b0316848461289a565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291612338916001600160801b03169061383c565b9050805f0361234b5760019150506113f7565b5f61235585612db6565b9050805f03612369576001925050506113f7565b5f80612376838589612e51565b915091508061238b575f9450505050506113f7565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016123c6929190613b37565b6040805180830381865af41580156123e0573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906124049190613bac565b9150915061242261241482611766565b61241d90613bce565b61299c565b925082612437575f96505050505050506113f7565b612440826118d2565b600780545f9061245a9084906001600160801b0316613a42565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612487816118d2565b600780546010906124a9908490600160801b90046001600160801b0316613a42565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6125048761162c565b6040518263ffffffff1660e01b815260040161252091906138cd565b6040805180830381865af415801561253a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061255e9190613be8565b915091508061257357505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916125d891613829565b6125e2919061383c565b9050805f036125f857505f958695509350505050565b5f808711612606575f612611565b6126118488846117b9565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561264257612642613c16565b6040519080825280601f01601f19166020018201604052801561266c576020820181803683370190505b5090505f808751602089018b8e8ef191503d92508683111561268c578692505b828152825f602083013e9093509150505b9550959350505050565b5f805f836126b486611766565b6126be9190613a62565b90505f8112156126d4575f809250925050610d21565b946001945092505050565b5f805f6126ef8888888888612fb9565b90505f612719670de0b6b3a76400006127088888612d79565b6127129190613829565b83906117d4565b9050670de0b6b3a7640000811061274d5761274661273f670de0b6b3a7640000896117d4565b8290612b49565b9050612765565b61276261273f670de0b6b3a764000089612d79565b90505b61276f81866117d4565b905088811015612786575f8093509350505061269d565b97909703976001975095505050505050565b5f805f6127a88989888888612fe7565b90506127c2866119466127bb8a8d613829565b8790612082565b98506127cf858a866117b9565b9850888110156127e5575f8092509250506115f6565b888103670de0b6b3a764000081106128135761280c61273f670de0b6b3a764000089612d79565b905061282b565b61282861273f670de0b6b3a7640000896117d4565b90505b80891015612840575f809350935050506115f6565b90970398600198509650505050505050565b5f805f805f61286289878961300b565b9092509050612871828961383c565b97505f61287f82888a6117b9565b905061288b818b61383c565b9a989950979650505050505050565b5f806128a6845f613090565b6128b0845f613090565b6128ba9190613a62565b90505f8113156128d5576128ce8186613829565b94506128f3565b5f8112156128f3576128e681613bce565b6128f0908661383c565b94505b50929392505050565b5f61008d8383670de0b6b3a76400005b5f825f190484118302158202612920575f80fd5b50910281810615159190040190565b5f80670de0b6b3a7640000612942610d28565b61294c91906139e0565b905080831161295b575f612965565b612965818461383c565b915061008d612712670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006139e0565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a52573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612a769190613c2a565b935093509350935080612a9157505f98975050505050505050565b868414612ac257612aa1846118d2565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612af357612ad2836118fb565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612b2157612b03826118d2565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f815f03612b605750670de0b6b3a76400006113f7565b825f03612b6e57505f6113f7565b5f612b7883611766565b90505f612b8c612b8786611766565b6130a5565b9050818102612ba3670de0b6b3a764000082613c68565b9050612bae816132ca565b9695505050505050565b6040516001600160a01b038481166024830152838116604483015260648201839052612c1f9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061345c565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052612c7684826134c2565b612c1f576040516001600160a01b0384811660248301525f6044830152612caa91869182169063095ea7b390606401612bed565b612c1f848261345c565b5f6113f77f00000000000000000000000000000000000000000000000000000000000000008361355f565b5f825f03612cee575084610075565b8115612d4057612d1f612d018487613829565b612d0b8587612082565b612d15888a612082565b6116269190613829565b90505f612d2c8588611c1c565b905080821015612d3a578091505b50610075565b828503612d4e57505f610075565b610072612d5b848761383c565b612d6585876128fc565b612d6f888a612082565b611626919061383c565b5f61008d83670de0b6b3a76400008461290c565b5f60016001607f1b0382111561178f5760405163a5353be560e01b815260040160405180910390fd5b6003545f908190612dd0906001600160801b031684612d79565b9050612dfc7f000000000000000000000000000000000000000000000000000000000000000082613829565b6002546001600160801b031611156118a7576002547f000000000000000000000000000000000000000000000000000000000000000090612e479083906001600160801b031661383c565b61008d919061383c565b612e59613710565b5f80612e648461162c565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612e9e91906138cd565b6040805180830381865af4158015612eb8573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612edc9190613be8565b9350905082612ef057505f9150611a7a9050565b5f612f116115b884610160015185610140015161208290919063ffffffff16565b612f316115b88561012001518661010001516128fc90919063ffffffff16565b612f3b9190613a62565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b5f612fc48585612b49565b612fdd612fd586611946868b612082565b8590856117b9565b6100729190613829565b5f612ff28585612b49565b612fdd61300386611946868b6128fc565b85908561290c565b5f8061305a8561305485817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061304a818c612d79565b613054919061383c565b906128fc565b9150613086827f0000000000000000000000000000000000000000000000000000000000000000612082565b9050935093915050565b5f81831361309e578161008d565b5090919050565b5f8082136130c65760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906131499084901c611766565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e1982136132e357505f919050565b680755bf798b4a1bf1e5821261330c576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612bae74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611766565b5f6134706001600160a01b038416836135c8565b905080515f141580156134945750808060200190518101906134929190613c94565b155b15611ab757604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b5f805f846001600160a01b0316846040516134dd9190613caf565b5f604051808303815f865af19150503d805f8114613516576040519150601f19603f3d011682016040523d82523d5f602084013e61351b565b606091505b50915091508180156135455750805115806135455750808060200190518101906135459190613c94565b80156100755750505050506001600160a01b03163b151590565b6040516303d1689d60e11b8152600481018290525f906001600160a01b038416906307a2d13a90602401602060405180830381865afa1580156135a4573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061008d91906138dc565b606061008d83835f845f80856001600160a01b031684866040516135ec9190613caf565b5f6040518083038185875af1925050503d805f8114613626576040519150601f19603f3d011682016040523d82523d5f602084013e61362b565b606091505b5091509150612bae86838360608261364b5761364682613692565b61008d565b815115801561366257506001600160a01b0384163b155b1561368b57604051639996b31560e01b81526001600160a01b03851660048201526024016134b9565b508061008d565b8051156136a25780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061012001604052806137246136bb565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f606082840312156118a7575f80fd5b5f805f805f60a0868803121561377e575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156137b0575f80fd5b6137bc8882890161375a565b9150509295509295909350565b5f805f606084860312156137db575f80fd5b8335925060208401359150604084013567ffffffffffffffff8111156137ff575f80fd5b61380b8682870161375a565b9150509250925092565b634e487b7160e01b5f52601160045260245ffd5b808201808211156113f7576113f7613815565b818103818111156113f7576113f7613815565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016113f7828461384f565b5f602082840312156138ec575f80fd5b5051919050565b6001600160a01b0381168114610c0a575f80fd5b5f60208284031215613917575f80fd5b813561008d816138f3565b8015158114610c0a575f80fd5b5f6020828403121561393f575f80fd5b813561008d81613922565b5f808335601e1984360301811261395f575f80fd5b83018035915067ffffffffffffffff821115613979575f80fd5b602001915036819003821315610d21575f80fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e08301375f81830160e090810191909152601f909201601f191601019695505050505050565b80820281158282048414176113f7576113f7613815565b5f805f60608486031215613a09575f80fd5b8351925060208401519150604084015190509250925092565b6001600160701b038181168382160190808211156118cb576118cb613815565b6001600160801b038181168382160190808211156118cb576118cb613815565b8181035f8312801583831316838312821617156118cb576118cb613815565b5f60208284031215613a91575f80fd5b815161008d816138f3565b8082018281125f831280158216821582161715613abb57613abb613815565b505092915050565b634e487b7160e01b5f52601260045260245ffd5b5f82613ae557613ae5613ac3565b500690565b6001600160801b038281168282160390808211156118cb576118cb613815565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156113f7576113f7613815565b5f6102a082019050613b4a82855161384f565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613bbd575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613be257613be2613815565b505f0390565b5f8060408385031215613bf9575f80fd5b825191506020830151613c0b81613922565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215613c3d575f80fd5b8451935060208501519250604085015191506060850151613c5d81613922565b939692955090935050565b5f82613c7657613c76613ac3565b600160ff1b82145f1984141615613c8f57613c8f613815565b500590565b5f60208284031215613ca4575f80fd5b815161008d81613922565b5f82515f5b81811015613cce5760208186018101518583015201613cb4565b505f92019182525091905056fea264697066735822122009f2d2e973becd4368ede2511076c749a97f867026cf8faea5963c9744be37b364736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
  "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
} as const
};
