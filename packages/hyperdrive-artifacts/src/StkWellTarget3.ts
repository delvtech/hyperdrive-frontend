export const StkWellTarget3 = {
  name: 'StkWellTarget3' as const,
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
  bytecode: '0x61028060405234801562000011575f80fd5b5060405162004119380380620041198339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613c6f620004aa5f395f50505f50505f6112ab01525f81816102f801528181610327015261035401525f818160d90152818161059601526116c101525f81816108320152818161091d015281816109ad01528181610ab2015281816115930152818161169b015281816120c101528181612124015281816129cd01528181612d9e0152612dda01525f8181610139015281816108a201528181610e690152818161145c015281816114bf01528181611504015261167501525f611cd201525f8181611e27015261302901525f81816110260152611dfb01525f612fdf01525f818161017b015281816108f501528181610e8a0152818161142c0152818161148f0152818161152501526116e701525f818161015a0152818161022f015281816102cd015281816106d5015281816108cf01528181610f64015261296301525f818161028d01528181610d2f01528181610da601528181610e1a01528181610ee50152610f1d01525f8181611988015281816119ff0152611a7a01525f818161195b01526119bc0152613c6f5ff3fe608060405260043610610028575f3560e01c80634c2ac1d91461002c57806377d05ff414610051575b5f80fd5b61003f61003a3660046136c8565b610064565b60405190815260200160405180910390f35b61003f61005f366004613727565b61007e565b5f6100728686868686610094565b90505b95945050505050565b5f61008a8484846107de565b90505b9392505050565b5f61009d610b8c565b600654610100900460ff16156100c6576040516321081abf60e01b815260040160405180910390fd5b6100ce610bb4565b6100d782610bd5565b7f00000000000000000000000000000000000000000000000000000000000000008610156101185760405163211ddda360e11b815260040160405180910390fd5b5f61019f610124610c0d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c32565b9050848110806101ae57508381115b156101cc57604051633b61151160e11b815260040160405180910390fd5b5f806101d88986610c57565b915091505f6101e5610d28565b90506101f5818360046001610d53565b506002546004546003545f92839261025e926001600160801b0380841693600f9390930b92600160801b90048116918991166102596102547f00000000000000000000000000000000000000000000000000000000000000008b613787565b6113b7565b6113fd565b915091508061028057604051630552b01360e31b815260040160405180910390fd5b8b5f6102f16008826102b27f00000000000000000000000000000000000000000000000000000000000000008961379a565b815260208101919091526040015f20546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000611601565b905061031d7f000000000000000000000000000000000000000000000000000000000000000082613787565b88118061037c57507f00000000000000000000000000000000000000000000000000000000000000008111801561037c57506103797f00000000000000000000000000000000000000000000000000000000000000008261379a565b88105b1561039a57604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490916103e5916001600160801b039091169061379a565b5f808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061041f908390613787565b90505f805f61042d8a61162c565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa1569061046790849060040161382b565b602060405180830381865af4158015610482573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104a6919061383a565b91506104b96104b48c611766565b611793565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161051a9185910161382b565b602060405180830381865af4158015610535573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610559919061383a565b92508183101561057c5760405163184d952160e11b815260040160405180910390fd5b610592848361058b818761379a565b91906117b9565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105d55760405163211ddda360e11b815260040160405180910390fd5b508f6105e1868e6117d4565b10156106005760405163c972651760e01b815260040160405180910390fd5b61061c5f8e5f0160208101906106169190613865565b8e6117e8565b6106258961188d565b95508561064557604051638bdf918d60e01b815260040160405180910390fd5b5f8890505f8d9050368f90505f8c90505f6106ff60025f015f9054906101000a90046001600160801b03166001600160801b0316600280015f9054906101000a9004600f0b600f0b60025f0160109054906101000a90046001600160801b03166001600160801b03168560026001015f9054906101000a90046001600160801b03166001600160801b03166102597f00000000000000000000000000000000000000000000000000000000000000008c6102549190613787565b9b5090508a158061071857506107158c5f611899565b81125b1561073657604051630552b01360e31b815260040160405180910390fd5b5f881561074d5761074887848b6117b9565b61074f565b5f5b905061075e6020850185613865565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d8661079b60408a0160208b0161388d565b866107a960408c018c6138a8565b6040516107bc97969594939291906138eb565b60405180910390a2505050505050505050505050505050505061007560015f55565b5f6107e7610b8c565b6107ef610bb4565b6107f882610bd5565b60065460ff161561081c57604051637983c05160e01b815260040160405180910390fd5b5f806108288685610c57565b90925090506108587f0000000000000000000000000000000000000000000000000000000000000000600261393e565b82101561087857604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393505f908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610981573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109a59190613955565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109d684846118ad565b10156109f55760405163216f4ab160e21b815260040160405180910390fd5b5f80610a05858585895f806113fd565b91509150801580610a1557505f82125b15610a3357604051630552b01360e31b815260040160405180910390fd5b610a3c856118d2565b600280546001600160801b0319166001600160801b0392909216919091179055610a65846118fb565b600480546001600160801b0319166001600160801b0392909216919091179055610a8e836118d2565b600280546001600160801b03928316600160801b029216919091179055610ad65f807f00000000000000000000000000000000000000000000000000000000000000006117e8565b610aed5f610ae760208c018c613865565b8a6117e8565b610b02610af8610d28565b8760046001610d53565b508a8a8a610b136020820182613865565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b50604087016020880161388d565b87610b5e60408901896138a8565b604051610b7197969594939291906138eb565b60405180910390a25050505050505050505061008d60015f55565b60025f5403610bae57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b3415610bd357604051631574f9f360e01b815260040160405180910390fd5b565b5f610be36020830183613865565b6001600160a01b031603610c0a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6002546004545f91610c2d916001600160801b0390911690600f0b6118ad565b905090565b5f80610c4087878786611936565b9050610c4c8185611601565b979650505050505050565b815f80610c6a604085016020860161388d565b15610c8f57610c8585610c8060408701876138a8565b61194c565b9093509050610ca7565b5034610ca785610ca260408701876138a8565b611a6d565b610caf611aa7565b91508015610d1f576040515f90339083908381818185875af1925050503d805f8114610cf6576040519150601f19603f3d011682016040523d82523d5f602084013e610cfb565b606091505b5050905080610d1d576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f610c2d427f0000000000000000000000000000000000000000000000000000000000000000611ab9565b5f84815260086020526040812060018101546001600160801b0316151580610d7a57504286115b15610d9357600101546001600160801b031690506113af565b5f805f610d9e610d28565b90505f610dcb7f00000000000000000000000000000000000000000000000000000000000000008b613787565b90505b81811015610e3f575f818152600860205260409020600101546001600160801b03168015610e17575f828152600860205260409020549094506001600160801b03169250610e3f565b507f000000000000000000000000000000000000000000000000000000000000000001610dce565b835f03610eb157889350610eae610e54610c0d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611936565b92505b50610ebb836118d2565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f11610f0a7f00000000000000000000000000000000000000000000000000000000000000008b61379a565b8a84611ace565b610f4f89610f49610f427f000000000000000000000000000000000000000000000000000000000000000083613787565b4290611c07565b84611ace565b610f5888611c15565b505f9050600881610f897f00000000000000000000000000000000000000000000000000000000000000008d61379a565b815260208101919091526040015f908120600101546001600160801b03169150610fb460028c611db2565b5f818152600b60205260408120549192508c8c83156110f557600192505f80610fe086898d865f611de6565b915091508060095f828254610ff59190613787565b909155506110109050865f8461100a81611766565b88611eb3565b61101a8183613787565b915061104a86838a8e877f000000000000000000000000000000000000000000000000000000000000000061202a565b915061105e611059838561206d565b612081565b6006805460029061107f9084906201000090046001600160701b0316613980565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110ac826118d2565b600680546010906110ce908490600160801b90046001600160801b03166139a0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f611101600184611db2565b5f818152600b6020526040902054909150801561120c57600194505f8061112c838b8f886001611de6565b915091508060095f8282546111419190613787565b9091555061115c9050835f8461115681611766565b8a6120aa565b611166818361379a565b9150611175611059838761206d565b600680546002906111969084906201000090046001600160701b0316613980565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506111c3826118d2565b600680546010906111e5908490600160801b90046001600160801b03166139a0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156112455761123761121e87611766565b61122783611766565b61123191906139c0565b5f61229a565b8e61124284826122d9565b50505b5f61124f846124c8565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611305573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061132991906139df565b90506001600160a01b0381161561139d5761139a5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b0386169392919061260a565b50505b509b9d50505050505050505050505050505b949350505050565b5f6113dc600b5f6113c9600286611db2565b81526020019081526020015f2054611766565b6113ed600b5f6113c9600187611db2565b6113f791906139c0565b92915050565b5f805f8061140b8a8a612692565b9150915080611421575f809350935050506115f6565b5f611480838a6114597f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061379a565b8b7f00000000000000000000000000000000000000000000000000000000000000006126ca565b5090505f6114e3848b846114bc7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061379a565b8d7f0000000000000000000000000000000000000000000000000000000000000000612783565b5090508115806114f1575080155b156114fc57505f9050805b5f611549858c7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611936565b905061155783838c8461283d565b509093505f9050611568848f613787565b90505f6115888b8b61157987611766565b611583908e6139fa565b612885565b90508b6115bd6115b87f0000000000000000000000000000000000000000000000000000000000000000836128e7565b611766565b6115c683611766565b6115d36115b8868561206d565b6115dd91906139c0565b6115e791906139c0565b60019950995050505050505050505b965096945050505050565b5f61008d61161484846301e133806128f7565b61162685670de0b6b3a764000061379a565b906117d4565b611634613619565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161172c911661291a565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261175e9290041661291a565b905292915050565b5f6001600160ff1b0382111561178f5760405163396ea70160e11b815260040160405180910390fd5b5090565b61179c81612987565b610c0a57604051635044b7f560e01b815260040160405180910390fd5b5f825f1904841183021582026117cd575f80fd5b5091020490565b5f61008d83670de0b6b3a7640000846117b9565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290611819908490613787565b90915550505f838152600b60205260408120805483929061183b908490613787565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6113f78260046122d9565b5f8183136118a7578261008d565b50919050565b5f806118b98484612692565b9092509050806118cb576118cb612b1b565b5092915050565b5f6001600160801b0382111561178f57604051630f0af95160e11b815260040160405180910390fd5b5f60016001607f1b0319821280611918575060016001607f1b0382135b1561178f5760405163a5353be560e01b815260040160405180910390fd5b5f610075826119468588886117b9565b90612b34565b5f806119836001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612ba3565b6119e37f00000000000000000000000000000000000000000000000000000000000000006119b2876001613787565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612c10565b6040516356e4bb9760e11b8152306004820152602481018690527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063adc9772e906044015f604051808303815f87803b158015611a48575f80fd5b505af1158015611a5a573d5f803e3d5ffd5b508794505f93505050505b935093915050565b611aa26001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086612ba3565b505050565b5f610c2d670de0b6b3a7640000612c9f565b5f611ac48284613a35565b61008d908461379a565b5f83815260086020526040902054600160801b90046001600160801b0316808303611af95750505050565b5f848152600860205260408120546001600160801b031690819003611b5157611b21836118d2565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611bce565b611ba2611b9d670de0b6b3a7640000611b6a888661379a565b611b74919061393e565b85670de0b6b3a7640000611b88878a61379a565b611b92919061393e565b859291906001612ca6565b6118d2565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611bd7846118d2565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f8183116118a7578261008d565b6006545f908190611c37908490600160801b90046001600160801b031661206d565b6006546201000090046001600160701b03169250905081811115611dad575f611c60838361379a565b9050611c6f611b9d8286612d40565b60068054601090611c91908490600160801b90046001600160801b0316613a48565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611cc985836117d490919063ffffffff16565b90505f611cf6827f000000000000000000000000000000000000000000000000000000000000000061206d565b90508060095f828254611d099190613787565b90915550611d199050818361379a565b9150611d24826118d2565b600280545f90611d3e9084906001600160801b03166139a0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611d6b82612d54565b600480545f90611d7f908490600f0b613a68565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b03821115611ddb5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f80611df287856117d4565b91505f611e1f837f000000000000000000000000000000000000000000000000000000000000000061206d565b9050611e4b817f000000000000000000000000000000000000000000000000000000000000000061206d565b91508315611e6e57611e5d828261379a565b611e67908461379a565b9250611e85565b611e78828261379a565b611e829084613787565b92505b86861015611ea857611e988387896117b9565b9250611ea58287896117b9565b91505b509550959350505050565b600454600160801b90046001600160801b0316611efb611b9d82611edf670de0b6b3a76400008661393e565b600554600160801b90046001600160801b031691908a5f612ca6565b600580546001600160801b03928316600160801b029216919091179055611f21866118d2565b611f2b9082613a48565b600480546001600160801b03928316600160801b029216919091179055611f51846118d2565b600280545f90611f6b9084906001600160801b03166139a0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f98836118fb565b600480545f90611fac908490600f0b613a68565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611fdc856118d2565b60028054601090611ffe908490600160801b90046001600160801b0316613a48565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f8061203b846116268a888a6117b9565b90506120488884866117b9565b6120529082613787565b9050868111156120625786810391505b509695505050505050565b5f61008d8383670de0b6b3a76400006117b9565b5f6001600160701b0382111561178f5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806120ec57507f00000000000000000000000000000000000000000000000000000000000000006120ea858361379a565b105b156120f9576120f9612b1b565b6004549084900390600f0b61210e84826139c0565b90508361211a86611766565b13801561214f57507f000000000000000000000000000000000000000000000000000000000000000061214d83836118ad565b105b1561215c5761215c612b1b565b600354600160801b90046001600160801b031661219d611b9d82612188670de0b6b3a76400008861393e565b6005546001600160801b031691908c5f612ca6565b600580546001600160801b0319166001600160801b03929092169190911790556121c7888261379a565b90506121d2816118d2565b600380546001600160801b03928316600160801b0292169190911790556121f8836118d2565b600280546001600160801b0319166001600160801b0392909216919091179055612221826118fb565b600480546001600160801b0319166001600160801b039290921691909117905561224a876118d2565b6002805460109061226c908490600160801b90046001600160801b03166139a0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6003546122b590611b9d906001600160801b03168484612885565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291612323916001600160801b03169061379a565b9050805f036123365760019150506113f7565b5f61234085612d7d565b9050805f03612354576001925050506113f7565b5f80612361838589612e18565b9150915080612376575f9450505050506113f7565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016123b1929190613a95565b6040805180830381865af41580156123cb573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906123ef9190613b0a565b9150915061240d6123ff82611766565b61240890613b2c565b612987565b925082612422575f96505050505050506113f7565b61242b826118d2565b600780545f906124459084906001600160801b03166139a0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612472816118d2565b60078054601090612494908490600160801b90046001600160801b03166139a0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6124ef8761162c565b6040518263ffffffff1660e01b815260040161250b919061382b565b6040805180830381865af4158015612525573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906125499190613b46565b915091508061255e57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916125c391613787565b6125cd919061379a565b9050805f036125e357505f958695509350505050565b5f8087116125f1575f6125fc565b6125fc8488846117b9565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561262d5761262d613b74565b6040519080825280601f01601f191660200182016040528015612657576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612677578692505b828152825f602083013e9093509150505b9550959350505050565b5f805f8361269f86611766565b6126a991906139c0565b90505f8112156126bf575f809250925050610d21565b946001945092505050565b5f805f6126da8888888888612f80565b90505f612704670de0b6b3a76400006126f38888612d40565b6126fd9190613787565b83906117d4565b9050670de0b6b3a764000081106127385761273161272a670de0b6b3a7640000896117d4565b8290612b34565b9050612750565b61274d61272a670de0b6b3a764000089612d40565b90505b61275a81866117d4565b905088811015612771575f80935093505050612688565b97909703976001975095505050505050565b5f805f6127938989888888612fae565b90506127ad866119466127a68a8d613787565b879061206d565b98506127ba858a866117b9565b9850888110156127d0575f8092509250506115f6565b888103670de0b6b3a764000081106127fe576127f761272a670de0b6b3a764000089612d40565b9050612816565b61281361272a670de0b6b3a7640000896117d4565b90505b8089101561282b575f809350935050506115f6565b90970398600198509650505050505050565b5f805f805f61284d898789612fd2565b909250905061285c828961379a565b97505f61286a82888a6117b9565b9050612876818b61379a565b9a989950979650505050505050565b5f80612891845f613057565b61289b845f613057565b6128a591906139c0565b90505f8113156128c0576128b98186613787565b94506128de565b5f8112156128de576128d181613b2c565b6128db908661379a565b94505b50929392505050565b5f61008d8383670de0b6b3a76400005b5f825f19048411830215820261290b575f80fd5b50910281810615159190040190565b5f80670de0b6b3a764000061292d610d28565b612937919061393e565b9050808311612946575f612950565b612950818461379a565b915061008d6126fd670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061393e565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a3d573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612a619190613b88565b935093509350935080612a7c57505f98975050505050505050565b868414612aad57612a8c846118d2565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612ade57612abd836118fb565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612b0c57612aee826118d2565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f815f03612b4b5750670de0b6b3a76400006113f7565b825f03612b5957505f6113f7565b5f612b6383611766565b90505f612b77612b7286611766565b61306c565b9050818102612b8e670de0b6b3a764000082613bc6565b9050612b9981613291565b9695505050505050565b6040516001600160a01b038481166024830152838116604483015260648201839052612c0a9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050613423565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052612c618482613489565b612c0a576040516001600160a01b0384811660248301525f6044830152612c9591869182169063095ea7b390606401612bd8565b612c0a8482613423565b5f816113f7565b5f825f03612cb5575084610075565b8115612d0757612ce6612cc88487613787565b612cd2858761206d565b612cdc888a61206d565b6116269190613787565b90505f612cf38588611c07565b905080821015612d01578091505b50610075565b828503612d1557505f610075565b610072612d22848761379a565b612d2c85876128e7565b612d36888a61206d565b611626919061379a565b5f61008d83670de0b6b3a7640000846128f7565b5f60016001607f1b0382111561178f5760405163a5353be560e01b815260040160405180910390fd5b6003545f908190612d97906001600160801b031684612d40565b9050612dc37f000000000000000000000000000000000000000000000000000000000000000082613787565b6002546001600160801b031611156118a7576002547f000000000000000000000000000000000000000000000000000000000000000090612e0e9083906001600160801b031661379a565b61008d919061379a565b612e2061366e565b5f80612e2b8461162c565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612e65919061382b565b6040805180830381865af4158015612e7f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612ea39190613b46565b9350905082612eb757505f9150611a659050565b5f612ed86115b884610160015185610140015161206d90919063ffffffff16565b612ef86115b88561012001518661010001516128e790919063ffffffff16565b612f0291906139c0565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b5f612f8b8585612b34565b612fa4612f9c86611946868b61206d565b8590856117b9565b6100729190613787565b5f612fb98585612b34565b612fa4612fca86611946868b6128e7565b8590856128f7565b5f806130218561301b85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613011818c612d40565b61301b919061379a565b906128e7565b915061304d827f000000000000000000000000000000000000000000000000000000000000000061206d565b9050935093915050565b5f818313613065578161008d565b5090919050565b5f80821361308d5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906131109084901c611766565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e1982136132aa57505f919050565b680755bf798b4a1bf1e582126132d3576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612b9974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611766565b5f6134376001600160a01b03841683613526565b905080515f1415801561345b5750808060200190518101906134599190613bf2565b155b15611aa257604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b5f805f846001600160a01b0316846040516134a49190613c0d565b5f604051808303815f865af19150503d805f81146134dd576040519150601f19603f3d011682016040523d82523d5f602084013e6134e2565b606091505b509150915081801561350c57508051158061350c57508080602001905181019061350c9190613bf2565b80156100755750505050506001600160a01b03163b151590565b606061008d83835f845f80856001600160a01b0316848660405161354a9190613c0d565b5f6040518083038185875af1925050503d805f8114613584576040519150601f19603f3d011682016040523d82523d5f602084013e613589565b606091505b5091509150612b998683836060826135a9576135a4826135f0565b61008d565b81511580156135c057506001600160a01b0384163b155b156135e957604051639996b31560e01b81526001600160a01b0385166004820152602401613480565b508061008d565b8051156136005780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b604051806101200160405280613682613619565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f606082840312156118a7575f80fd5b5f805f805f60a086880312156136dc575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff81111561370e575f80fd5b61371a888289016136b8565b9150509295509295909350565b5f805f60608486031215613739575f80fd5b8335925060208401359150604084013567ffffffffffffffff81111561375d575f80fd5b613769868287016136b8565b9150509250925092565b634e487b7160e01b5f52601160045260245ffd5b808201808211156113f7576113f7613773565b818103818111156113f7576113f7613773565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016113f782846137ad565b5f6020828403121561384a575f80fd5b5051919050565b6001600160a01b0381168114610c0a575f80fd5b5f60208284031215613875575f80fd5b813561008d81613851565b8015158114610c0a575f80fd5b5f6020828403121561389d575f80fd5b813561008d81613880565b5f808335601e198436030181126138bd575f80fd5b83018035915067ffffffffffffffff8211156138d7575f80fd5b602001915036819003821315610d21575f80fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e08301375f81830160e090810191909152601f909201601f191601019695505050505050565b80820281158282048414176113f7576113f7613773565b5f805f60608486031215613967575f80fd5b8351925060208401519150604084015190509250925092565b6001600160701b038181168382160190808211156118cb576118cb613773565b6001600160801b038181168382160190808211156118cb576118cb613773565b8181035f8312801583831316838312821617156118cb576118cb613773565b5f602082840312156139ef575f80fd5b815161008d81613851565b8082018281125f831280158216821582161715613a1957613a19613773565b505092915050565b634e487b7160e01b5f52601260045260245ffd5b5f82613a4357613a43613a21565b500690565b6001600160801b038281168282160390808211156118cb576118cb613773565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156113f7576113f7613773565b5f6102a082019050613aa88285516137ad565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613b1b575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613b4057613b40613773565b505f0390565b5f8060408385031215613b57575f80fd5b825191506020830151613b6981613880565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215613b9b575f80fd5b8451935060208501519250604085015191506060850151613bbb81613880565b939692955090935050565b5f82613bd457613bd4613a21565b600160ff1b82145f1984141615613bed57613bed613773565b500590565b5f60208284031215613c02575f80fd5b815161008d81613880565b5f82515f5b81811015613c2c5760208186018101518583015201613c12565b505f92019182525091905056fea2646970667358221220fe6a7f7adfc55609ab26bec39d48db86801e3163e89b98e7864c4323d37b429e64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
  "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
} as const
};
