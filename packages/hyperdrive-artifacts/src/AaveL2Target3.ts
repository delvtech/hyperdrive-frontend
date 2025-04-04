export const AaveL2Target3 = {
  name: 'AaveL2Target3' as const,
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
  bytecode: '0x6102a060405234801562000011575f80fd5b5060405162004a2438038062004a2483398101604081905262000034916200055e565b60015f5581516001600160a01b039081166080908152602080850151831660a0818152928601516101a052918501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815183015190528051604090810151610160529051606090810151610180528187015185166102405286015161026052928416610220528251633a9ae92360e11b815292519192637535d24692600480830193928290030181865afa15801562000110573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000136919062000698565b6001600160a01b0390811661028081905260805162000159921690600162000161565b505062000705565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001bb90859083906200022c16565b6200022657604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021a918691620002d616565b620002268482620002d6565b50505050565b5f805f846001600160a01b031684604051620002499190620006b6565b5f604051808303815f865af19150503d805f811462000284576040519150601f19603f3d011682016040523d82523d5f602084013e62000289565b606091505b5091509150818015620002b7575080511580620002b7575080806020019051810190620002b79190620006e4565b8015620002cd57505f856001600160a01b03163b115b95945050505050565b5f620002ec6001600160a01b0384168362000347565b905080515f1415801562000313575080806020019051810190620003119190620006e4565b155b156200034257604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200035683835f6200035d565b9392505050565b606081471015620003845760405163cd78605960e01b815230600482015260240162000339565b5f80856001600160a01b03168486604051620003a19190620006b6565b5f6040518083038185875af1925050503d805f8114620003dd576040519150601f19603f3d011682016040523d82523d5f602084013e620003e2565b606091505b509092509050620003f5868383620003ff565b9695505050505050565b6060826200041857620004128262000463565b62000356565b81511580156200043057506001600160a01b0384163b155b156200045b57604051639996b31560e01b81526001600160a01b038516600482015260240162000339565b508062000356565b805115620004745780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b0381118282101715620004c057634e487b7160e01b5f52604160045260245ffd5b60405290565b6001600160a01b03811681146200048d575f80fd5b8051620004e881620004c6565b919050565b5f60808284031215620004fe575f80fd5b604051608081016001600160401b03811182821017156200052d57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f8082840361028081121562000572575f80fd5b6102608082121562000582575f80fd5b6200058c62000490565b91506200059985620004db565b8252620005a960208601620004db565b6020830152620005bc60408601620004db565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e083015261010080860151818401525061012080860151818401525061014080860151818401525061016062000627818701620004db565b908301526101806200063b868201620004db565b908301526101a06200064f868201620004db565b908301526101c062000663868201620004db565b908301526101e06200067887878301620004ed565b81840152508193506200068d818601620004db565b925050509250929050565b5f60208284031215620006a9575f80fd5b81516200035681620004c6565b5f82515f5b81811015620006d75760208186018101518583015201620006bb565b505f920191825250919050565b5f60208284031215620006f5575f80fd5b8151801515811462000356575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051614127620008fd5f395f818161198801528181611a2801528181612d6901528181612e210152612e6d01525f50505f50505f6112ab01525f81816102f801528181610327015261035401525f818160d90152818161059601526116c101525f81816108320152818161091d015281816109ad01528181610ab2015281816115930152818161169b0152818161216e015281816121d101528181612a7a01528181612f8a0152612fc601525f8181610139015281816108a201528181610e690152818161145c015281816114bf01528181611504015261167501525f611d7f01525f8181611ed4015261321501525f81816110260152611ea801525f6131cb01525f818161017b015281816108f501528181610e8a0152818161142c0152818161148f0152818161152501526116e701525f818161015a0152818161022f015281816102cd015281816106d5015281816108cf01528181610f640152612a1001525f818161028d01528181610d2f01528181610da601528181610e1a01528181610ee50152610f1d01525f611aa101525f818161195b015281816119bc015281816119e901528181612e000152612e4c01526141275ff3fe608060405260043610610028575f3560e01c80634c2ac1d91461002c57806377d05ff414610051575b5f80fd5b61003f61003a366004613992565b610064565b60405190815260200160405180910390f35b61003f61005f3660046139f1565b61007e565b5f6100728686868686610094565b90505b95945050505050565b5f61008a8484846107de565b90505b9392505050565b5f61009d610b8c565b600654610100900460ff16156100c6576040516321081abf60e01b815260040160405180910390fd5b6100ce610bb4565b6100d782610bd5565b7f00000000000000000000000000000000000000000000000000000000000000008610156101185760405163211ddda360e11b815260040160405180910390fd5b5f61019f610124610c0d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c32565b9050848110806101ae57508381115b156101cc57604051633b61151160e11b815260040160405180910390fd5b5f806101d88986610c57565b915091505f6101e5610d28565b90506101f5818360046001610d53565b506002546004546003545f92839261025e926001600160801b0380841693600f9390930b92600160801b90048116918991166102596102547f00000000000000000000000000000000000000000000000000000000000000008b613a51565b6113b7565b6113fd565b915091508061028057604051630552b01360e31b815260040160405180910390fd5b8b5f6102f16008826102b27f000000000000000000000000000000000000000000000000000000000000000089613a64565b815260208101919091526040015f20546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000611601565b905061031d7f000000000000000000000000000000000000000000000000000000000000000082613a51565b88118061037c57507f00000000000000000000000000000000000000000000000000000000000000008111801561037c57506103797f000000000000000000000000000000000000000000000000000000000000000082613a64565b88105b1561039a57604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490916103e5916001600160801b0390911690613a64565b5f808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061041f908390613a51565b90505f805f61042d8a61162c565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610467908490600401613af5565b602060405180830381865af4158015610482573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104a69190613b04565b91506104b96104b48c611766565b611793565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161051a91859101613af5565b602060405180830381865af4158015610535573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105599190613b04565b92508183101561057c5760405163184d952160e11b815260040160405180910390fd5b610592848361058b8187613a64565b91906117b9565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105d55760405163211ddda360e11b815260040160405180910390fd5b508f6105e1868e6117d4565b10156106005760405163c972651760e01b815260040160405180910390fd5b61061c5f8e5f0160208101906106169190613b2f565b8e6117e8565b6106258961188d565b95508561064557604051638bdf918d60e01b815260040160405180910390fd5b5f8890505f8d9050368f90505f8c90505f6106ff60025f015f9054906101000a90046001600160801b03166001600160801b0316600280015f9054906101000a9004600f0b600f0b60025f0160109054906101000a90046001600160801b03166001600160801b03168560026001015f9054906101000a90046001600160801b03166001600160801b03166102597f00000000000000000000000000000000000000000000000000000000000000008c6102549190613a51565b9b5090508a158061071857506107158c5f611899565b81125b1561073657604051630552b01360e31b815260040160405180910390fd5b5f881561074d5761074887848b6117b9565b61074f565b5f5b905061075e6020850185613b2f565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d8661079b60408a0160208b01613b57565b866107a960408c018c613b72565b6040516107bc9796959493929190613bb5565b60405180910390a2505050505050505050505050505050505061007560015f55565b5f6107e7610b8c565b6107ef610bb4565b6107f882610bd5565b60065460ff161561081c57604051637983c05160e01b815260040160405180910390fd5b5f806108288685610c57565b90925090506108587f00000000000000000000000000000000000000000000000000000000000000006002613c08565b82101561087857604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393505f908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610981573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109a59190613c1f565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109d684846118ad565b10156109f55760405163216f4ab160e21b815260040160405180910390fd5b5f80610a05858585895f806113fd565b91509150801580610a1557505f82125b15610a3357604051630552b01360e31b815260040160405180910390fd5b610a3c856118d2565b600280546001600160801b0319166001600160801b0392909216919091179055610a65846118fb565b600480546001600160801b0319166001600160801b0392909216919091179055610a8e836118d2565b600280546001600160801b03928316600160801b029216919091179055610ad65f807f00000000000000000000000000000000000000000000000000000000000000006117e8565b610aed5f610ae760208c018c613b2f565b8a6117e8565b610b02610af8610d28565b8760046001610d53565b508a8a8a610b136020820182613b2f565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b506040870160208801613b57565b87610b5e6040890189613b72565b604051610b719796959493929190613bb5565b60405180910390a25050505050505050505061008d60015f55565b60025f5403610bae57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b3415610bd357604051631574f9f360e01b815260040160405180910390fd5b565b5f610be36020830183613b2f565b6001600160a01b031603610c0a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6002546004545f91610c2d916001600160801b0390911690600f0b6118ad565b905090565b5f80610c4087878786611936565b9050610c4c8185611601565b979650505050505050565b815f80610c6a6040850160208601613b57565b15610c8f57610c8585610c806040870187613b72565b61194c565b9093509050610ca7565b5034610ca785610ca26040870187613b72565b611a9f565b610caf611b54565b91508015610d1f576040515f90339083908381818185875af1925050503d805f8114610cf6576040519150601f19603f3d011682016040523d82523d5f602084013e610cfb565b606091505b5050905080610d1d576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f610c2d427f0000000000000000000000000000000000000000000000000000000000000000611b66565b5f84815260086020526040812060018101546001600160801b0316151580610d7a57504286115b15610d9357600101546001600160801b031690506113af565b5f805f610d9e610d28565b90505f610dcb7f00000000000000000000000000000000000000000000000000000000000000008b613a51565b90505b81811015610e3f575f818152600860205260409020600101546001600160801b03168015610e17575f828152600860205260409020549094506001600160801b03169250610e3f565b507f000000000000000000000000000000000000000000000000000000000000000001610dce565b835f03610eb157889350610eae610e54610c0d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611936565b92505b50610ebb836118d2565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f11610f0a7f00000000000000000000000000000000000000000000000000000000000000008b613a64565b8a84611b7b565b610f4f89610f49610f427f000000000000000000000000000000000000000000000000000000000000000083613a51565b4290611cb4565b84611b7b565b610f5888611cc2565b505f9050600881610f897f00000000000000000000000000000000000000000000000000000000000000008d613a64565b815260208101919091526040015f908120600101546001600160801b03169150610fb460028c611e5f565b5f818152600b60205260408120549192508c8c83156110f557600192505f80610fe086898d865f611e93565b915091508060095f828254610ff59190613a51565b909155506110109050865f8461100a81611766565b88611f60565b61101a8183613a51565b915061104a86838a8e877f00000000000000000000000000000000000000000000000000000000000000006120d7565b915061105e611059838561211a565b61212e565b6006805460029061107f9084906201000090046001600160701b0316613c4a565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110ac826118d2565b600680546010906110ce908490600160801b90046001600160801b0316613c6a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f611101600184611e5f565b5f818152600b6020526040902054909150801561120c57600194505f8061112c838b8f886001611e93565b915091508060095f8282546111419190613a51565b9091555061115c9050835f8461115681611766565b8a612157565b6111668183613a64565b9150611175611059838761211a565b600680546002906111969084906201000090046001600160701b0316613c4a565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506111c3826118d2565b600680546010906111e5908490600160801b90046001600160801b0316613c6a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156112455761123761121e87611766565b61122783611766565b6112319190613c8a565b5f612347565b8e6112428482612386565b50505b5f61124f84612575565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611305573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113299190613cb9565b90506001600160a01b0381161561139d5761139a5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906126b7565b50505b509b9d50505050505050505050505050505b949350505050565b5f6113dc600b5f6113c9600286611e5f565b81526020019081526020015f2054611766565b6113ed600b5f6113c9600187611e5f565b6113f79190613c8a565b92915050565b5f805f8061140b8a8a61273f565b9150915080611421575f809350935050506115f6565b5f611480838a6114597f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613a64565b8b7f0000000000000000000000000000000000000000000000000000000000000000612777565b5090505f6114e3848b846114bc7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613a64565b8d7f0000000000000000000000000000000000000000000000000000000000000000612830565b5090508115806114f1575080155b156114fc57505f9050805b5f611549858c7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611936565b905061155783838c846128ea565b509093505f9050611568848f613a51565b90505f6115888b8b61157987611766565b611583908e613cd4565b612932565b90508b6115bd6115b87f000000000000000000000000000000000000000000000000000000000000000083612994565b611766565b6115c683611766565b6115d36115b8868561211a565b6115dd9190613c8a565b6115e79190613c8a565b60019950995050505050505050505b965096945050505050565b5f61008d61161484846301e133806129a4565b61162685670de0b6b3a7640000613a64565b906117d4565b6116346138e3565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161172c91166129c7565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261175e929004166129c7565b905292915050565b5f6001600160ff1b0382111561178f5760405163396ea70160e11b815260040160405180910390fd5b5090565b61179c81612a34565b610c0a57604051635044b7f560e01b815260040160405180910390fd5b5f825f1904841183021582026117cd575f80fd5b5091020490565b5f61008d83670de0b6b3a7640000846117b9565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290611819908490613a51565b90915550505f838152600b60205260408120805483929061183b908490613a51565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6113f7826004612386565b5f8183136118a7578261008d565b50919050565b5f806118b9848461273f565b9092509050806118cb576118cb612bc8565b5092915050565b5f6001600160801b0382111561178f57604051630f0af95160e11b815260040160405180910390fd5b5f60016001607f1b0319821280611918575060016001607f1b0382135b1561178f5760405163a5353be560e01b815260040160405180910390fd5b5f610075826119468588886117b9565b90612be1565b5f806119836001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612c50565b6119e37f00000000000000000000000000000000000000000000000000000000000000006119b2876001613a51565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612cb7565b5f611a0f7f0000000000000000000000000000000000000000000000000000000000000000875f612d46565b6040516303de9ce160e61b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f7a73840906024015f604051808303815f87803b158015611a71575f80fd5b505af1158015611a83573d5f803e3d5ffd5b50505050611a9086612dfa565b5f92509250505b935093915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166323b872dd3330611ad987612e46565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303815f875af1158015611b2a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b4e9190613cfb565b50505050565b5f610c2d670de0b6b3a7640000612e46565b5f611b718284613d2a565b61008d9084613a64565b5f83815260086020526040902054600160801b90046001600160801b0316808303611ba65750505050565b5f848152600860205260408120546001600160801b031690819003611bfe57611bce836118d2565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611c7b565b611c4f611c4a670de0b6b3a7640000611c178886613a64565b611c219190613c08565b85670de0b6b3a7640000611c35878a613a64565b611c3f9190613c08565b859291906001612e92565b6118d2565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611c84846118d2565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f8183116118a7578261008d565b6006545f908190611ce4908490600160801b90046001600160801b031661211a565b6006546201000090046001600160701b03169250905081811115611e5a575f611d0d8383613a64565b9050611d1c611c4a8286612f2c565b60068054601090611d3e908490600160801b90046001600160801b0316613d3d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611d7685836117d490919063ffffffff16565b90505f611da3827f000000000000000000000000000000000000000000000000000000000000000061211a565b90508060095f828254611db69190613a51565b90915550611dc690508183613a64565b9150611dd1826118d2565b600280545f90611deb9084906001600160801b0316613c6a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e1882612f40565b600480545f90611e2c908490600f0b613d5d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b03821115611e885760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f80611e9f87856117d4565b91505f611ecc837f000000000000000000000000000000000000000000000000000000000000000061211a565b9050611ef8817f000000000000000000000000000000000000000000000000000000000000000061211a565b91508315611f1b57611f0a8282613a64565b611f149084613a64565b9250611f32565b611f258282613a64565b611f2f9084613a51565b92505b86861015611f5557611f458387896117b9565b9250611f528287896117b9565b91505b509550959350505050565b600454600160801b90046001600160801b0316611fa8611c4a82611f8c670de0b6b3a764000086613c08565b600554600160801b90046001600160801b031691908a5f612e92565b600580546001600160801b03928316600160801b029216919091179055611fce866118d2565b611fd89082613d3d565b600480546001600160801b03928316600160801b029216919091179055611ffe846118d2565b600280545f906120189084906001600160801b0316613c6a565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612045836118fb565b600480545f90612059908490600f0b613d5d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550612089856118d2565b600280546010906120ab908490600160801b90046001600160801b0316613d3d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f806120e8846116268a888a6117b9565b90506120f58884866117b9565b6120ff9082613a51565b90508681111561210f5786810391505b509695505050505050565b5f61008d8383670de0b6b3a76400006117b9565b5f6001600160701b0382111561178f5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061219957507f00000000000000000000000000000000000000000000000000000000000000006121978583613a64565b105b156121a6576121a6612bc8565b6004549084900390600f0b6121bb8482613c8a565b9050836121c786611766565b1380156121fc57507f00000000000000000000000000000000000000000000000000000000000000006121fa83836118ad565b105b1561220957612209612bc8565b600354600160801b90046001600160801b031661224a611c4a82612235670de0b6b3a764000088613c08565b6005546001600160801b031691908c5f612e92565b600580546001600160801b0319166001600160801b03929092169190911790556122748882613a64565b905061227f816118d2565b600380546001600160801b03928316600160801b0292169190911790556122a5836118d2565b600280546001600160801b0319166001600160801b03929092169190911790556122ce826118fb565b600480546001600160801b0319166001600160801b03929092169190911790556122f7876118d2565b60028054601090612319908490600160801b90046001600160801b0316613c6a565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461236290611c4a906001600160801b03168484612932565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e754354909182916123d0916001600160801b031690613a64565b9050805f036123e35760019150506113f7565b5f6123ed85612f69565b9050805f03612401576001925050506113f7565b5f8061240e838589613004565b9150915080612423575f9450505050506113f7565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161245e929190613d8a565b6040805180830381865af4158015612478573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061249c9190613dff565b915091506124ba6124ac82611766565b6124b590613e21565b612a34565b9250826124cf575f96505050505050506113f7565b6124d8826118d2565b600780545f906124f29084906001600160801b0316613c6a565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061251f816118d2565b60078054601090612541908490600160801b90046001600160801b0316613c6a565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61259c8761162c565b6040518263ffffffff1660e01b81526004016125b89190613af5565b6040805180830381865af41580156125d2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906125f69190613e3b565b915091508061260b57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161267091613a51565b61267a9190613a64565b9050805f0361269057505f958695509350505050565b5f80871161269e575f6126a9565b6126a98488846117b9565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff8111156126da576126da613e69565b6040519080825280601f01601f191660200182016040528015612704576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612724578692505b828152825f602083013e9093509150505b9550959350505050565b5f805f8361274c86611766565b6127569190613c8a565b90505f81121561276c575f809250925050610d21565b946001945092505050565b5f805f612787888888888861316c565b90505f6127b1670de0b6b3a76400006127a08888612f2c565b6127aa9190613a51565b83906117d4565b9050670de0b6b3a764000081106127e5576127de6127d7670de0b6b3a7640000896117d4565b8290612be1565b90506127fd565b6127fa6127d7670de0b6b3a764000089612f2c565b90505b61280781866117d4565b90508881101561281e575f80935093505050612735565b97909703976001975095505050505050565b5f805f612840898988888861319a565b905061285a866119466128538a8d613a51565b879061211a565b9850612867858a866117b9565b98508881101561287d575f8092509250506115f6565b888103670de0b6b3a764000081106128ab576128a46127d7670de0b6b3a764000089612f2c565b90506128c3565b6128c06127d7670de0b6b3a7640000896117d4565b90505b808910156128d8575f809350935050506115f6565b90970398600198509650505050505050565b5f805f805f6128fa8987896131be565b90925090506129098289613a64565b97505f61291782888a6117b9565b9050612923818b613a64565b9a989950979650505050505050565b5f8061293e845f613243565b612948845f613243565b6129529190613c8a565b90505f81131561296d576129668186613a51565b945061298b565b5f81121561298b5761297e81613e21565b6129889086613a64565b94505b50929392505050565b5f61008d8383670de0b6b3a76400005b5f825f1904841183021582026129b8575f80fd5b50910281810615159190040190565b5f80670de0b6b3a76400006129da610d28565b6129e49190613c08565b90508083116129f3575f6129fd565b6129fd8184613a64565b915061008d6127aa670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613c08565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612aea573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612b0e9190613e7d565b935093509350935080612b2957505f98975050505050505050565b868414612b5a57612b39846118d2565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612b8b57612b6a836118fb565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612bb957612b9b826118d2565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f815f03612bf85750670de0b6b3a76400006113f7565b825f03612c0657505f6113f7565b5f612c1083611766565b90505f612c24612c1f86611766565b613258565b9050818102612c3b670de0b6b3a764000082613ebb565b9050612c468161347d565b9695505050505050565b6040516001600160a01b038481166024830152838116604483015260648201839052611b4e9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061360f565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052612d08848261367a565b611b4e576040516001600160a01b0384811660248301525f6044830152612d3c91869182169063095ea7b390606401612c85565b611b4e848261360f565b6040516335ea6a7560e01b81526001600160a01b0384811660048301525f9182917f000000000000000000000000000000000000000000000000000000000000000016906335ea6a75906024016101e060405180830381865afa158015612daf573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612dd39190613fa4565b60e0015190505f612de3856118d2565b60101b609085901b01919091019150509392505050565b5f6113f77f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084613717565b5f6113f77f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008461373a565b5f825f03612ea1575084610075565b8115612ef357612ed2612eb48487613a51565b612ebe858761211a565b612ec8888a61211a565b6116269190613a51565b90505f612edf8588611cb4565b905080821015612eed578091505b50610075565b828503612f0157505f610075565b610072612f0e8487613a64565b612f188587612994565b612f22888a61211a565b6116269190613a64565b5f61008d83670de0b6b3a7640000846129a4565b5f60016001607f1b0382111561178f5760405163a5353be560e01b815260040160405180910390fd5b6003545f908190612f83906001600160801b031684612f2c565b9050612faf7f000000000000000000000000000000000000000000000000000000000000000082613a51565b6002546001600160801b031611156118a7576002547f000000000000000000000000000000000000000000000000000000000000000090612ffa9083906001600160801b0316613a64565b61008d9190613a64565b61300c613938565b5f806130178461162c565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016130519190613af5565b6040805180830381865af415801561306b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061308f9190613e3b565b93509050826130a357505f9150611a979050565b5f6130c46115b884610160015185610140015161211a90919063ffffffff16565b6130e46115b885610120015186610100015161299490919063ffffffff16565b6130ee9190613c8a565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b5f6131778585612be1565b61319061318886611946868b61211a565b8590856117b9565b6100729190613a51565b5f6131a58585612be1565b6131906131b686611946868b612994565b8590856129a4565b5f8061320d8561320785817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006131fd818c612f2c565b6132079190613a64565b90612994565b9150613239827f000000000000000000000000000000000000000000000000000000000000000061211a565b9050935093915050565b5f818313613251578161008d565b5090919050565b5f8082136132795760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906132fc9084901c611766565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361349657505f919050565b680755bf798b4a1bf1e582126134bf576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612c4674029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611766565b5f6136236001600160a01b0384168361375c565b905080515f141580156136475750808060200190518101906136459190613cfb565b155b1561367557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b5f805f846001600160a01b03168460405161369591906140c5565b5f604051808303815f865af19150503d805f81146136ce576040519150601f19603f3d011682016040523d82523d5f602084013e6136d3565b606091505b50915091508180156136fd5750805115806136fd5750808060200190518101906136fd9190613cfb565b80156100755750505050506001600160a01b03163b151590565b5f61008a6b033b2e3c9fd0803ce80000006137328686613769565b8491906117b9565b5f61008a6137488585613769565b83906b033b2e3c9fd0803ce80000006117b9565b606061008d83835f6137d4565b60405163d15e005360e01b81526001600160a01b0383811660048301525f919083169063d15e005390602401602060405180830381865afa1580156137b0573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061008d9190613b04565b6060814710156137f95760405163cd78605960e01b815230600482015260240161366c565b5f80856001600160a01b0316848660405161381491906140c5565b5f6040518083038185875af1925050503d805f811461384e576040519150601f19603f3d011682016040523d82523d5f602084013e613853565b606091505b5091509150612c468683836060826138735761386e826138ba565b61008d565b815115801561388a57506001600160a01b0384163b155b156138b357604051639996b31560e01b81526001600160a01b038516600482015260240161366c565b508061008d565b8051156138ca5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b60405180610120016040528061394c6138e3565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f606082840312156118a7575f80fd5b5f805f805f60a086880312156139a6575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156139d8575f80fd5b6139e488828901613982565b9150509295509295909350565b5f805f60608486031215613a03575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115613a27575f80fd5b613a3386828701613982565b9150509250925092565b634e487b7160e01b5f52601160045260245ffd5b808201808211156113f7576113f7613a3d565b818103818111156113f7576113f7613a3d565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016113f78284613a77565b5f60208284031215613b14575f80fd5b5051919050565b6001600160a01b0381168114610c0a575f80fd5b5f60208284031215613b3f575f80fd5b813561008d81613b1b565b8015158114610c0a575f80fd5b5f60208284031215613b67575f80fd5b813561008d81613b4a565b5f808335601e19843603018112613b87575f80fd5b83018035915067ffffffffffffffff821115613ba1575f80fd5b602001915036819003821315610d21575f80fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e08301375f81830160e090810191909152601f909201601f191601019695505050505050565b80820281158282048414176113f7576113f7613a3d565b5f805f60608486031215613c31575f80fd5b8351925060208401519150604084015190509250925092565b6001600160701b038181168382160190808211156118cb576118cb613a3d565b6001600160801b038181168382160190808211156118cb576118cb613a3d565b8181035f8312801583831316838312821617156118cb576118cb613a3d565b8051613cb481613b1b565b919050565b5f60208284031215613cc9575f80fd5b815161008d81613b1b565b8082018281125f831280158216821582161715613cf357613cf3613a3d565b505092915050565b5f60208284031215613d0b575f80fd5b815161008d81613b4a565b634e487b7160e01b5f52601260045260245ffd5b5f82613d3857613d38613d16565b500690565b6001600160801b038281168282160390808211156118cb576118cb613a3d565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156113f7576113f7613a3d565b5f6102a082019050613d9d828551613a77565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613e10575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613e3557613e35613a3d565b505f0390565b5f8060408385031215613e4c575f80fd5b825191506020830151613e5e81613b4a565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215613e90575f80fd5b8451935060208501519250604085015191506060850151613eb081613b4a565b939692955090935050565b5f82613ec957613ec9613d16565b600160ff1b82145f1984141615613ee257613ee2613a3d565b500590565b6040516101e0810167ffffffffffffffff81118282101715613f1757634e487b7160e01b5f52604160045260245ffd5b60405290565b5f60208284031215613f2d575f80fd5b6040516020810181811067ffffffffffffffff82111715613f5c57634e487b7160e01b5f52604160045260245ffd5b6040529151825250919050565b80516001600160801b0381168114613cb4575f80fd5b805164ffffffffff81168114613cb4575f80fd5b805161ffff81168114613cb4575f80fd5b5f6101e08284031215613fb5575f80fd5b613fbd613ee7565b613fc78484613f1d565b8152613fd560208401613f69565b6020820152613fe660408401613f69565b6040820152613ff760608401613f69565b606082015261400860808401613f69565b608082015261401960a08401613f69565b60a082015261402a60c08401613f7f565b60c082015261403b60e08401613f93565b60e082015261010061404e818501613ca9565b90820152610120614060848201613ca9565b90820152610140614072848201613ca9565b90820152610160614084848201613ca9565b90820152610180614096848201613f69565b908201526101a06140a8848201613f69565b908201526101c06140ba848201613f69565b908201529392505050565b5f82515f5b818110156140e457602081860181015185830152016140ca565b505f92019182525091905056fea2646970667358221220240c2ea458335572db19ff928f12ef3e08e3b8d82eff8e0d6d0dd98fcb62d0e964736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
  "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
} as const
};
