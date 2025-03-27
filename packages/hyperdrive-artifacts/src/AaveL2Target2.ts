export const AaveL2Target2 = {
  name: 'AaveL2Target2' as const,
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
  bytecode: '0x6102a060405234801562000011575f80fd5b5060405162004a8f38038062004a8f83398101604081905262000034916200055e565b60015f5581516001600160a01b039081166080908152602080850151831660a0818152928601516101a052918501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815183015190528051604090810151610160529051606090810151610180528187015185166102405286015161026052928416610220528251633a9ae92360e11b815292519192637535d24692600480830193928290030181865afa15801562000110573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000136919062000698565b6001600160a01b0390811661028081905260805162000159921690600162000161565b505062000705565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001bb90859083906200022c16565b6200022657604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021a918691620002d616565b620002268482620002d6565b50505050565b5f805f846001600160a01b031684604051620002499190620006b6565b5f604051808303815f865af19150503d805f811462000284576040519150601f19603f3d011682016040523d82523d5f602084013e62000289565b606091505b5091509150818015620002b7575080511580620002b7575080806020019051810190620002b79190620006e4565b8015620002cd57505f856001600160a01b03163b115b95945050505050565b5f620002ec6001600160a01b0384168362000347565b905080515f1415801562000313575080806020019051810190620003119190620006e4565b155b156200034257604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200035683835f6200035d565b9392505050565b606081471015620003845760405163cd78605960e01b815230600482015260240162000339565b5f80856001600160a01b03168486604051620003a19190620006b6565b5f6040518083038185875af1925050503d805f8114620003dd576040519150601f19603f3d011682016040523d82523d5f602084013e620003e2565b606091505b509092509050620003f5868383620003ff565b9695505050505050565b6060826200041857620004128262000463565b62000356565b81511580156200043057506001600160a01b0384163b155b156200045b57604051639996b31560e01b81526001600160a01b038516600482015260240162000339565b508062000356565b805115620004745780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b0381118282101715620004c057634e487b7160e01b5f52604160045260245ffd5b60405290565b6001600160a01b03811681146200048d575f80fd5b8051620004e881620004c6565b919050565b5f60808284031215620004fe575f80fd5b604051608081016001600160401b03811182821017156200052d57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f8082840361028081121562000572575f80fd5b6102608082121562000582575f80fd5b6200058c62000490565b91506200059985620004db565b8252620005a960208601620004db565b6020830152620005bc60408601620004db565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e083015261010080860151818401525061012080860151818401525061014080860151818401525061016062000627818701620004db565b908301526101806200063b868201620004db565b908301526101a06200064f868201620004db565b908301526101c062000663868201620004db565b908301526101e06200067887878301620004ed565b81840152508193506200068d818601620004db565b925050509250929050565b5f60208284031215620006a9575f80fd5b81516200035681620004c6565b5f82515f5b81811015620006d75760208186018101518583015201620006bb565b505f920191825250919050565b5f60208284031215620006f5575f80fd5b8151801515811462000356575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516141a3620008ec5f395f818161148b015281816116d0015281816117700152818161293a01526129f201525f50505f50505f610c2801525f50505f818160f9015281816103020152612f7301525f818161150701528181611ddf01528181611e42015281816125c901528181612b6301528181612b9f01528181612d900152612f4d01525f81816107e601528181610d8201528181610dc401528181610eb60152818161131c0152818161137a0152612f2701525f611a0901525f8181611b2a015281816126ba01528181612732015261308b01525f81816109a301528181610e370152818161141501528181611afe015261270601525f8181610e1601528181612686015261304701525f818161080701528181610d6001528181610de501528181610ed7015281816112fa0152818161139b0152612f9901525f81816101d301528181610396015281816108e101526136a501525f81816106a7015281816107230152818161079701528181610862015261089a01525f6117e901525f818161146a015281816116a3015281816117040152818161173101526129d101526141a35ff3fe608060405260043610610028575f3560e01c8063cba2e58d1461002c578063dbbe807014610058575b5f80fd5b61003f61003a366004613a39565b61006b565b6040805192835260208301919091520160405180910390f35b61003f610066366004613a39565b610087565b5f8061007986868686610095565b915091505b94509492505050565b5f80610079868686866102bc565b5f8061009f610531565b600654610100900460ff16156100c8576040516321081abf60e01b815260040160405180910390fd5b6100d0610559565b6100d98361057a565b5f806100e588866105b2565b90925090505f6100f58383610683565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101385760405163211ddda360e11b815260040160405180910390fd5b86821015610159576040516342af972b60e01b815260040160405180910390fd5b5f6101626106a0565b90506101728184600460016106d0565b505f805f6101808787610d34565b919a5091945090925090508b8810156101ac5760405163c972651760e01b815260040160405180910390fd5b8160095f8282546101bd9190613aa7565b909155506101ce9050844283610f13565b6101f87f000000000000000000000000000000000000000000000000000000000000000085613aa7565b98506102068389888c61104c565b5f61021260018b6111e3565b905061022b8161022560208e018e613ace565b8b611217565b8d8a8a898e8561023e6020830183613ace565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a86888661027b6040880160208901613af6565b8961028960408a018a613b11565b60405161029c9796959493929190613b7c565b60405180910390a350909b50505050505050505050505061007e60015f55565b5f806102c6610531565b600654610100900460ff16156102ef576040516321081abf60e01b815260040160405180910390fd5b6102f7610559565b6103008361057a565b7f00000000000000000000000000000000000000000000000000000000000000008610156103415760405163211ddda360e11b815260040160405180910390fd5b5f61034a6112bc565b90508481101561036d576040516342af972b60e01b815260040160405180910390fd5b5f6103766106a0565b90505f61038e6103846106a0565b84600460016106d0565b90505f6103bb7f000000000000000000000000000000000000000000000000000000000000000084613aa7565b90505f805f806103cc8e89886112ce565b60098054949850929650909450925083915f906103ea908490613aa7565b909155506103fb9050874283610f13565b61040d610408858a611450565b611464565b610418906001613aa7565b9350505f61042784898d6114b0565b9050808d101561044a5760405163c972651760e01b815260040160405180910390fd5b610454818c6105b2565b508e905061046481858b896114e1565b5f6104706002886111e3565b90508c61048a826104846020840184613ace565b85611217565b858b868461049b6020860186613ace565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d860408b0160208c01613af6565b6104ec896104e68a8d613bbc565b90610683565b8d6104fa60408e018e613b11565b60405161050e989796959493929190613bcf565b60405180910390a350989d50939b50505050505050505050505061007e60015f55565b60025f540361055357604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b341561057857604051631574f9f360e01b815260040160405180910390fd5b565b5f6105886020830183613ace565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b815f806105c56040850160208601613af6565b156105ea576105e0856105db6040870187613b11565b611694565b9093509050610602565b5034610602856105fd6040870187613b11565b6117e7565b61060a6112bc565b9150801561067a576040515f90339083908381818185875af1925050503d805f8114610651576040519150601f19603f3d011682016040523d82523d5f602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f6106978383670de0b6b3a764000061189c565b90505b92915050565b5f6106cb427f00000000000000000000000000000000000000000000000000000000000000006118b7565b905090565b5f84815260086020526040812060018101546001600160801b03161515806106f757504286115b1561071057600101546001600160801b03169050610d2c565b5f805f61071b6106a0565b90505f6107487f00000000000000000000000000000000000000000000000000000000000000008b613aa7565b90505b818110156107bc575f818152600860205260409020600101546001600160801b03168015610794575f828152600860205260409020549094506001600160801b031692506107bc565b507f00000000000000000000000000000000000000000000000000000000000000000161074b565b835f0361082e5788935061082b6107d16118cc565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006118ec565b92505b506108388361190b565b6001850180546001600160801b0319166001600160801b039290921691909117905561088e6108877f00000000000000000000000000000000000000000000000000000000000000008b613bbc565b8a84610f13565b6108cc896108c66108bf7f000000000000000000000000000000000000000000000000000000000000000083613aa7565b4290611938565b84610f13565b6108d58861194c565b505f90506008816109067f00000000000000000000000000000000000000000000000000000000000000008d613bbc565b815260208101919091526040015f908120600101546001600160801b0316915061093160028c6111e3565b5f818152600b60205260408120549192508c8c8315610a7257600192505f8061095d86898d865f611ae9565b915091508060095f8282546109729190613aa7565b9091555061098d9050865f8461098781611bb6565b88611bdf565b6109978183613aa7565b91506109c786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d56565b91506109db6109d68385610683565b611d9f565b600680546002906109fc9084906201000090046001600160701b0316613c16565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a298261190b565b60068054601090610a4b908490600160801b90046001600160801b0316613c36565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610a7e6001846111e3565b5f818152600b60205260409020549091508015610b8957600194505f80610aa9838b8f886001611ae9565b915091508060095f828254610abe9190613aa7565b90915550610ad99050835f84610ad381611bb6565b8a611dc8565b610ae38183613bbc565b9150610af26109d68387610683565b60068054600290610b139084906201000090046001600160701b0316613c16565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b408261190b565b60068054601090610b62908490600160801b90046001600160801b0316613c36565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bc257610bb4610b9b87611bb6565b610ba483611bb6565b610bae9190613c56565b5f611fb8565b8e610bbf8482611ff7565b50505b5f610bcc846121e6565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c82573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ca69190613c85565b90506001600160a01b03811615610d1a57610d175a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612328565b50505b509b9d50505050505050505050505050505b949350505050565b5f805f805f610d416118cc565b600254909150610da6908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006123ae565b600254909450610e09908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006118ec565b9150610e608785610e5b857f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006123d9565b61243d565b15610e6d57610e6d61247e565b610e7987858885612497565b91965094509250670de0b6b3a7640000610efb610e968784613aa7565b600254610eb4908890600160801b90046001600160801b0316613bbc565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006118ec565b1115610f0957610f0961247e565b5092959194509250565b5f83815260086020526040902054600160801b90046001600160801b0316808303610f3e5750505050565b5f848152600860205260408120546001600160801b031690819003610f9657610f668361190b565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611013565b610fe7610fe2670de0b6b3a7640000610faf8886613bbc565b610fb99190613ca0565b85670de0b6b3a7640000610fcd878a613bbc565b610fd79190613ca0565b8592919060016124df565b61190b565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61101c8461190b565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661108e610fe282611078670de0b6b3a764000086613ca0565b6005546001600160801b031691908860016124df565b600580546001600160801b0319166001600160801b03929092169190911790556110b78561190b565b600280545f906110d19084906001600160801b0316613c36565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110fe8461190b565b60028054601090611120908490600160801b90046001600160801b0316613cb7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061114d8461190b565b6111579082613c36565b600380546001600160801b03808416600160801b02911617905590505f61117d83612583565b905061119b8161118c87611bb6565b6111969084613cd7565b611fb8565b6111a4846125c3565b6111b0576111b061247e565b5f6111ba85612622565b9050806111da57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b5f6001600160f81b0382111561120c5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290611248908490613aa7565b90915550505f838152600b60205260408120805483929061126a908490613aa7565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6106cb670de0b6b3a7640000611464565b5f805f805f6112db6118cc565b600254909150611340908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f000000000000000000000000000000000000000000000000000000000000000061262e565b93508761134d858961264e565b111561135b5761135b61247e565b6002545f9081906113bf908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006118ec565b93506113d58a670de0b6b3a7640000868c612662565b509193509091506113e890508183613bbc565b6113f29087613bbc565b95508861143f816114398d611407868c613bbc565b8d611412878261276e565b877f0000000000000000000000000000000000000000000000000000000000000000612783565b9061264e565b975090945050505093509350935093565b5f61069783670de0b6b3a7640000846127a3565b5f61069a7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000846127c6565b5f6114c16040830160208401613af6565b156114cd5750826114da565b6114d784846127e8565b90505b9392505050565b6002546001600160801b0316838110156114fd576114fd61247e565b60045490849003907f000000000000000000000000000000000000000000000000000000000000000090611535908390600f0b6127fc565b10156115435761154361247e565b60045461158d90610fe290600160801b90046001600160801b0316611570670de0b6b3a764000086613ca0565b600554600160801b90046001600160801b031691908960016124df565b600580546001600160801b03928316600160801b0292169190911790556115b38161190b565b600280546001600160801b0319166001600160801b03929092169190911790556115dc8561190b565b600280546010906115fe908490600160801b90046001600160801b0316613c36565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061162b8561190b565b6004805460109061164d908490600160801b90046001600160801b0316613c36565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61167b83612583565b905061119b8161168a88611bb6565b6111969084613c56565b5f806116cb6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612821565b61172b7f00000000000000000000000000000000000000000000000000000000000000006116fa876001613aa7565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612888565b5f6117577f0000000000000000000000000000000000000000000000000000000000000000875f612917565b6040516303de9ce160e61b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f7a73840906024015f604051808303815f87803b1580156117b9575f80fd5b505af11580156117cb573d5f803e3d5ffd5b505050506117d8866129cb565b5f92509250505b935093915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166323b872dd333061182187611464565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303815f875af1158015611872573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118969190613cfe565b50505050565b5f825f1904841183021582026118b0575f80fd5b5091020490565b5f6118c28284613d2d565b6106979084613bbc565b6002546004545f916106cb916001600160801b0390911690600f0b6127fc565b5f611902826118fc85888861189c565b90612a17565b95945050505050565b5f6001600160801b0382111561193457604051630f0af95160e11b815260040160405180910390fd5b5090565b5f8183116119465782610697565b50919050565b6006545f90819061196e908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b03169250905081811115611ae4575f6119978383613bbc565b90506119a6610fe28286611450565b600680546010906119c8908490600160801b90046001600160801b0316613cb7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611a0085836127e890919063ffffffff16565b90505f611a2d827f0000000000000000000000000000000000000000000000000000000000000000610683565b90508060095f828254611a409190613aa7565b90915550611a5090508183613bbc565b9150611a5b8261190b565b600280545f90611a759084906001600160801b0316613c36565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611aa282612a7c565b600480545f90611ab6908490600f0b613d40565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611af587856127e8565b91505f611b22837f0000000000000000000000000000000000000000000000000000000000000000610683565b9050611b4e817f0000000000000000000000000000000000000000000000000000000000000000610683565b91508315611b7157611b608282613bbc565b611b6a9084613bbc565b9250611b88565b611b7b8282613bbc565b611b859084613aa7565b92505b86861015611bab57611b9b83878961189c565b9250611ba882878961189c565b91505b509550959350505050565b5f6001600160ff1b038211156119345760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611c27610fe282611c0b670de0b6b3a764000086613ca0565b600554600160801b90046001600160801b031691908a5f6124df565b600580546001600160801b03928316600160801b029216919091179055611c4d8661190b565b611c579082613cb7565b600480546001600160801b03928316600160801b029216919091179055611c7d8461190b565b600280545f90611c979084906001600160801b0316613c36565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611cc483612aa5565b600480545f90611cd8908490600f0b613d40565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611d088561190b565b60028054601090611d2a908490600160801b90046001600160801b0316613cb7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80611d6d84611d678a888a61189c565b906127e8565b9050611d7a88848661189c565b611d849082613aa7565b905086811115611d945786810391505b509695505050505050565b5f6001600160701b038211156119345760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611e0a57507f0000000000000000000000000000000000000000000000000000000000000000611e088583613bbc565b105b15611e1757611e1761247e565b6004549084900390600f0b611e2c8482613c56565b905083611e3886611bb6565b138015611e6d57507f0000000000000000000000000000000000000000000000000000000000000000611e6b83836127fc565b105b15611e7a57611e7a61247e565b600354600160801b90046001600160801b0316611ebb610fe282611ea6670de0b6b3a764000088613ca0565b6005546001600160801b031691908c5f6124df565b600580546001600160801b0319166001600160801b0392909216919091179055611ee58882613bbc565b9050611ef08161190b565b600380546001600160801b03928316600160801b029216919091179055611f168361190b565b600280546001600160801b0319166001600160801b0392909216919091179055611f3f82612aa5565b600480546001600160801b0319166001600160801b0392909216919091179055611f688761190b565b60028054601090611f8a908490600160801b90046001600160801b0316613c36565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611fd390610fe2906001600160801b03168484612ae0565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291612041916001600160801b031690613bbc565b9050805f0361205457600191505061069a565b5f61205e85612b42565b9050805f036120725760019250505061069a565b5f8061207f838589612bdd565b9150915080612094575f94505050505061069a565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016120cf929190613deb565b6040805180830381865af41580156120e9573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061210d9190613e60565b9150915061212b61211d82611bb6565b61212690613e82565b612d4a565b925082612140575f965050505050505061069a565b6121498261190b565b600780545f906121639084906001600160801b0316613c36565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506121908161190b565b600780546010906121b2908490600160801b90046001600160801b0316613c36565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61220d87612ede565b6040518263ffffffff1660e01b81526004016122299190613e9c565b6040805180830381865af4158015612243573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906122679190613eab565b915091508061227c57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916122e191613aa7565b6122eb9190613bbc565b9050805f0361230157505f958695509350505050565b5f80871161230f575f61231a565b61231a84888461189c565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561234b5761234b613ed9565b6040519080825280601f01601f191660200182016040528015612375576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612395578692505b828152825f602083013e90999098509650505050505050565b5f6123ce8787876123c788670de0b6b3a7640000613bbc565b8787613018565b979650505050505050565b5f6114d76124196123f284670de0b6b3a7640000613bbc565b611439670de0b6b3a7640000612408818a611450565b6124129190613bbc565b879061264e565b61242b90670de0b6b3a7640000613aa7565b611d6784670de0b6b3a7640000613bbc565b5f806124738561244b6118cc565b6124559190613aa7565b600254610eb4908790600160801b90046001600160801b0316613bbc565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f805f805f6124a789878961303a565b90925090506124b68289613bbc565b97505f6124c482888a61189c565b90506124d0818b613bbc565b9a989950979650505050505050565b5f825f036124ee575084611902565b81156125405761251f6125018487613aa7565b61250b8587610683565b612515888a610683565b611d679190613aa7565b90505f61252c8588611938565b90508082101561253a578091505b50611902565b82850361254e57505f611902565b61257961255b8487613bbc565b612565858761264e565b61256f888a610683565b611d679190613bbc565b9695505050505050565b5f6125a8600b5f6125956002866111e3565b81526020019081526020015f2054611bb6565b6125b9600b5f6125956001876111e3565b61069a9190613c56565b5f6125ee7f00000000000000000000000000000000000000000000000000000000000000008361264e565b60035461260491906001600160801b0316613aa7565b60025461261a906001600160801b031684610683565b101592915050565b5f61069a826004611ff7565b5f6123ce87878761264788670de0b6b3a7640000613bbc565b87876130b9565b5f6106978383670de0b6b3a76400006127a3565b5f8080806126b287866126ab8b6114396126848c670de0b6b3a7640000613bbc565b7f00000000000000000000000000000000000000000000000000000000000000009061264e565b91906127a3565b93506126de847f0000000000000000000000000000000000000000000000000000000000000000610683565b91505f6126fe6126f689670de0b6b3a7640000613bbc565b8a90886127a3565b905061272a817f000000000000000000000000000000000000000000000000000000000000000061264e565b9350612756847f0000000000000000000000000000000000000000000000000000000000000000610683565b6127609084613aa7565b915050945094509450949050565b5f81831161277c5781610697565b5090919050565b5f8061279a846127948a888a6127a3565b90611450565b9050611d7a8884865b5f825f1904841183021582026127b7575f80fd5b50910281810615159190040190565b5f6114d76127d485856130c9565b83906b033b2e3c9fd0803ce800000061189c565b5f61069783670de0b6b3a76400008461189c565b5f806128088484613134565b90925090508061281a5761281a61247e565b5092915050565b6040516001600160a01b0384811660248301528381166044830152606482018390526118969186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505061316c565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526128d984826131d7565b611896576040516001600160a01b0384811660248301525f604483015261290d91869182169063095ea7b390606401612856565b611896848261316c565b6040516335ea6a7560e01b81526001600160a01b0384811660048301525f9182917f000000000000000000000000000000000000000000000000000000000000000016906335ea6a75906024016101e060405180830381865afa158015612980573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906129a49190613faa565b60e0015190505f6129b48561190b565b60101b609085901b01919091019150509392505050565b5f61069a7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084613274565b5f815f03612a2e5750670de0b6b3a764000061069a565b825f03612a3c57505f61069a565b5f612a4683611bb6565b90505f612a5a612a5586611bb6565b613297565b9050818102612a71670de0b6b3a7640000826140cb565b9050612579816134bc565b5f60016001607f1b038211156119345760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b0319821280612ac2575060016001607f1b0382135b156119345760405163a5353be560e01b815260040160405180910390fd5b5f80612aec845f61364e565b612af6845f61364e565b612b009190613c56565b90505f811315612b1b57612b148186613aa7565b9450612b39565b5f811215612b3957612b2c81613e82565b612b369086613bbc565b94505b50929392505050565b6003545f908190612b5c906001600160801b031684611450565b9050612b887f000000000000000000000000000000000000000000000000000000000000000082613aa7565b6002546001600160801b03161115611946576002547f000000000000000000000000000000000000000000000000000000000000000090612bd39083906001600160801b0316613bbc565b6114da9190613bbc565b612be561399a565b5f80612bf084612ede565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612c2a9190613e9c565b6040805180830381865af4158015612c44573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612c689190613eab565b9350905082612c7c57505f91506117df9050565b5f612ca2612c9d84610160015185610140015161068390919063ffffffff16565b611bb6565b612cc2612c9d85610120015186610100015161264e90919063ffffffff16565b612ccc9190613c56565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612e00573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612e2491906140f7565b935093509350935080612e3f57505f98975050505050505050565b868414612e7057612e4f8461190b565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612ea157612e8083612aa5565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612ecf57612eb18261190b565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612ee66139e4565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612fde911661365c565b81526004546001600160801b03600160801b91829004811660208401526005546040909301926130109290041661365c565b905292915050565b5f806130288888888888886136d0565b909250905080611d9457611d9461247e565b5f806130838561143985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613079818c611450565b6114399190613bbc565b91506130af827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b5f80613028888888888888613794565b60405163d15e005360e01b81526001600160a01b0383811660048301525f919083169063d15e005390602401602060405180830381865afa158015613110573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610697919061412a565b5f805f8361314186611bb6565b61314b9190613c56565b90505f811215613161575f80925092505061067c565b946001945092505050565b5f6131806001600160a01b03841683613850565b905080515f141580156131a45750808060200190518101906131a29190613cfe565b155b156131d257604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b5f805f846001600160a01b0316846040516131f29190614141565b5f604051808303815f865af19150503d805f811461322b576040519150601f19603f3d011682016040523d82523d5f602084013e613230565b606091505b509150915081801561325a57508051158061325a57508080602001905181019061325a9190613cfe565b80156119025750505050506001600160a01b03163b151590565b5f6114d76b033b2e3c9fd0803ce800000061328f86866130c9565b84919061189c565b5f8082136132b85760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061333b9084901c611bb6565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e1982136134d557505f919050565b680755bf798b4a1bf1e582126134fe576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061257974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611bb6565b5f81831361277c5781610697565b5f80670de0b6b3a764000061366f6106a0565b6136799190613ca0565b9050808311613688575f613692565b6136928184613bbc565b91506114da6136c9670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613ca0565b83906127e8565b5f805f6136e0898988888861385d565b90506136fa866118fc6136f38a8d613aa7565b8790610683565b9850613707858a8661189c565b98508881101561371d575f809250925050613789565b888103670de0b6b3a764000081106137525761374b613744670de0b6b3a764000089611450565b8290612a17565b905061376a565b613767613744670de0b6b3a7640000896127e8565b90505b8089101561377f575f80935093505050613789565b8803925060019150505b965096945050505050565b5f805f6137a4898988888861385d565b90506137b4866118fc898b613aa7565b9750878110156137ca575f809250925050613789565b8781036137d88186886127a3565b9050670de0b6b3a76400008110613805576137fe613744670de0b6b3a764000089611450565b905061381d565b61381a613744670de0b6b3a7640000896127e8565b90505b6138278186611450565b9050808a101561383e575f80935093505050613789565b90980398600198509650505050505050565b606061069783835f61388b565b5f6138688585612a17565b613881613879866118fc868b61264e565b8590856127a3565b6125799190613aa7565b6060814710156138b05760405163cd78605960e01b81523060048201526024016131c9565b5f80856001600160a01b031684866040516138cb9190614141565b5f6040518083038185875af1925050503d805f8114613905576040519150601f19603f3d011682016040523d82523d5f602084013e61390a565b606091505b509150915061257986838360608261392a5761392582613971565b6114da565b815115801561394157506001600160a01b0384163b155b1561396a57604051639996b31560e01b81526001600160a01b03851660048201526024016131c9565b50806114da565b8051156139815780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806139ae6139e4565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f8060808587031215613a4c575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613a77575f80fd5b850160608188031215613a88575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561069a5761069a613a93565b6001600160a01b03811681146105af575f80fd5b5f60208284031215613ade575f80fd5b81356114da81613aba565b80151581146105af575f80fd5b5f60208284031215613b06575f80fd5b81356114da81613ae9565b5f808335601e19843603018112613b26575f80fd5b83018035915067ffffffffffffffff821115613b40575f80fd5b60200191503681900382131561067c575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201525f613baf60c083018486613b54565b9998505050505050505050565b8181038181111561069a5761069a613a93565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f613c0860e083018486613b54565b9a9950505050505050505050565b6001600160701b0381811683821601908082111561281a5761281a613a93565b6001600160801b0381811683821601908082111561281a5761281a613a93565b8181035f83128015838313168383128216171561281a5761281a613a93565b8051613c8081613aba565b919050565b5f60208284031215613c95575f80fd5b81516114da81613aba565b808202811582820484141761069a5761069a613a93565b6001600160801b0382811682821603908082111561281a5761281a613a93565b8082018281125f831280158216821582161715613cf657613cf6613a93565b505092915050565b5f60208284031215613d0e575f80fd5b81516114da81613ae9565b634e487b7160e01b5f52601260045260245ffd5b5f82613d3b57613d3b613d19565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069a5761069a613a93565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050613dfe828551613d6d565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613e71575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613e9657613e96613a93565b505f0390565b610180810161069a8284613d6d565b5f8060408385031215613ebc575f80fd5b825191506020830151613ece81613ae9565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b6040516101e0810167ffffffffffffffff81118282101715613f1d57634e487b7160e01b5f52604160045260245ffd5b60405290565b5f60208284031215613f33575f80fd5b6040516020810181811067ffffffffffffffff82111715613f6257634e487b7160e01b5f52604160045260245ffd5b6040529151825250919050565b80516001600160801b0381168114613c80575f80fd5b805164ffffffffff81168114613c80575f80fd5b805161ffff81168114613c80575f80fd5b5f6101e08284031215613fbb575f80fd5b613fc3613eed565b613fcd8484613f23565b8152613fdb60208401613f6f565b6020820152613fec60408401613f6f565b6040820152613ffd60608401613f6f565b606082015261400e60808401613f6f565b608082015261401f60a08401613f6f565b60a082015261403060c08401613f85565b60c082015261404160e08401613f99565b60e0820152610100614054818501613c75565b90820152610120614066848201613c75565b90820152610140614078848201613c75565b9082015261016061408a848201613c75565b9082015261018061409c848201613f6f565b908201526101a06140ae848201613f6f565b908201526101c06140c0848201613f6f565b908201529392505050565b5f826140d9576140d9613d19565b600160ff1b82145f19841416156140f2576140f2613a93565b500590565b5f805f806080858703121561410a575f80fd5b8451935060208501519250604085015191506060850151613a8881613ae9565b5f6020828403121561413a575f80fd5b5051919050565b5f82515f5b818110156141605760208186018101518583015201614146565b505f92019182525091905056fea2646970667358221220167400bc588532cc8df7943a9e082f55da37916aff9e4d400878aedacb4cbc9b64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
  "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
} as const
};
