export const StETHTarget3 = {
  name: 'StETHTarget3' as const,
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
  bytecode: '0x61028060405234801562000011575f80fd5b5060405162003eb838038062003eb88339810160408190526200003491620001a5565b60015f5581516001600160a01b039081166080908152602080850151831660a0908152918501516101a052908401516101c05260c0808501516101e090815260e080870151610200526101208088015190935261010080880151909152610140808801519091529086018051519092528151909201519091528051604090810151610160529051606090810151610180529084015182166102405290920151610260521661022052620002df565b60405161020081016001600160401b03811182821017156200011257634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b03811681146200012f575f80fd5b919050565b5f6080828403121562000145575f80fd5b604051608081016001600160401b03811182821017156200017457634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f80828403610280811215620001b9575f80fd5b61026080821215620001c9575f80fd5b620001d3620000e2565b9150620001e08562000118565b8252620001f06020860162000118565b6020830152620002036040860162000118565b6040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101408086015181840152506101606200026e81870162000118565b908301526101806200028286820162000118565b908301526101a06200029686820162000118565b908301526101c0620002aa86820162000118565b908301526101e0620002bf8787830162000134565b8184015250819350620002d481860162000118565b925050509250929050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613a11620004a75f395f50505f50505f818161127a015261197501525f81816102f00152818161031f015261034c01525f818160d10152818161058e015261169001525f81816108220152818161090d0152818161099d01528181610aa2015281816115620152818161166a0152818161211a0152818161217d01528181612a2601528181612d7d0152612db901525f81816101310152818161089201528181610e380152818161142b0152818161148e015281816114d3015261164401525f611d2b01525f8181611e80015261300801525f8181610ff50152611e5401525f612fbe01525f8181610173015281816108e501528181610e59015281816113fb0152818161145e015281816114f401526116b601525f818161015201528181610227015281816102c5015281816106cd015281816108bf01528181610f3301526129bc01525f818161028501528181610cfe01528181610d7501528181610de901528181610eb40152610eec01525f818161194501528181611a880152612c1401525f5050613a115ff3fe608060405260043610610028575f3560e01c80634c2ac1d91461002c57806377d05ff414610051575b5f80fd5b61003f61003a3660046134b1565b610064565b60405190815260200160405180910390f35b61003f61005f366004613510565b61007e565b5f6100728686868686610094565b90505b95945050505050565b5f61008a8484846107d6565b90505b9392505050565b5f61009d610b7c565b600654610100900460ff16156100c6576040516321081abf60e01b815260040160405180910390fd5b6100cf82610ba4565b7f00000000000000000000000000000000000000000000000000000000000000008610156101105760405163211ddda360e11b815260040160405180910390fd5b5f61019761011c610bdc565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c01565b9050848110806101a657508381115b156101c457604051633b61151160e11b815260040160405180910390fd5b5f806101d08986610c26565b915091505f6101dd610cf7565b90506101ed818360046001610d22565b506002546004546003545f928392610256926001600160801b0380841693600f9390930b92600160801b900481169189911661025161024c7f00000000000000000000000000000000000000000000000000000000000000008b613570565b611386565b6113cc565b915091508061027857604051630552b01360e31b815260040160405180910390fd5b8b5f6102e96008826102aa7f000000000000000000000000000000000000000000000000000000000000000089613583565b815260208101919091526040015f20546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000006115d0565b90506103157f000000000000000000000000000000000000000000000000000000000000000082613570565b88118061037457507f00000000000000000000000000000000000000000000000000000000000000008111801561037457506103717f000000000000000000000000000000000000000000000000000000000000000082613583565b88105b1561039257604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490916103dd916001600160801b0390911690613583565b5f808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765491925090610417908390613570565b90505f805f6104258a6115fb565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa1569061045f908490600401613614565b602060405180830381865af415801561047a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061049e9190613623565b91506104b16104ac8c611735565b611762565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161051291859101613614565b602060405180830381865af415801561052d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105519190613623565b9250818310156105745760405163184d952160e11b815260040160405180910390fd5b61058a84836105838187613583565b9190611788565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105cd5760405163211ddda360e11b815260040160405180910390fd5b508f6105d9868e6117a3565b10156105f85760405163c972651760e01b815260040160405180910390fd5b6106145f8e5f01602081019061060e919061364e565b8e6117b7565b61061d8961185c565b95508561063d57604051638bdf918d60e01b815260040160405180910390fd5b5f8890505f8d9050368f90505f8c90505f6106f760025f015f9054906101000a90046001600160801b03166001600160801b0316600280015f9054906101000a9004600f0b600f0b60025f0160109054906101000a90046001600160801b03166001600160801b03168560026001015f9054906101000a90046001600160801b03166001600160801b03166102517f00000000000000000000000000000000000000000000000000000000000000008c61024c9190613570565b9b5090508a1580610710575061070d8c5f611868565b81125b1561072e57604051630552b01360e31b815260040160405180910390fd5b5f88156107455761074087848b611788565b610747565b5f5b9050610756602085018561364e565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d8661079360408a0160208b01613676565b866107a160408c018c613691565b6040516107b497969594939291906136d4565b60405180910390a2505050505050505050505050505050505061007560015f55565b5f6107df610b7c565b6107e882610ba4565b60065460ff161561080c57604051637983c05160e01b815260040160405180910390fd5b5f806108188685610c26565b90925090506108487f00000000000000000000000000000000000000000000000000000000000000006002613727565b82101561086857604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393505f908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610971573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610995919061373e565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109c6848461187c565b10156109e55760405163216f4ab160e21b815260040160405180910390fd5b5f806109f5858585895f806113cc565b91509150801580610a0557505f82125b15610a2357604051630552b01360e31b815260040160405180910390fd5b610a2c856118a1565b600280546001600160801b0319166001600160801b0392909216919091179055610a55846118ca565b600480546001600160801b0319166001600160801b0392909216919091179055610a7e836118a1565b600280546001600160801b03928316600160801b029216919091179055610ac65f807f00000000000000000000000000000000000000000000000000000000000000006117b7565b610add5f610ad760208c018c61364e565b8a6117b7565b610af2610ae8610cf7565b8760046001610d22565b508a8a8a610b03602082018261364e565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b406040870160208801613676565b87610b4e6040890189613691565b604051610b6197969594939291906136d4565b60405180910390a25050505050505050505061008d60015f55565b60025f5403610b9e57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f610bb2602083018361364e565b6001600160a01b031603610bd95760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6002546004545f91610bfc916001600160801b0390911690600f0b61187c565b905090565b5f80610c0f87878786611905565b9050610c1b81856115d0565b979650505050505050565b815f80610c396040850160208601613676565b15610c5e57610c5485610c4f6040870187613691565b61191b565b9093509050610c76565b5034610c7685610c716040870187613691565b611a66565b610c7e611b00565b91508015610cee576040515f90339083908381818185875af1925050503d805f8114610cc5576040519150601f19603f3d011682016040523d82523d5f602084013e610cca565b606091505b5050905080610cec576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f610bfc427f0000000000000000000000000000000000000000000000000000000000000000611b12565b5f84815260086020526040812060018101546001600160801b0316151580610d4957504286115b15610d6257600101546001600160801b0316905061137e565b5f805f610d6d610cf7565b90505f610d9a7f00000000000000000000000000000000000000000000000000000000000000008b613570565b90505b81811015610e0e575f818152600860205260409020600101546001600160801b03168015610de6575f828152600860205260409020549094506001600160801b03169250610e0e565b507f000000000000000000000000000000000000000000000000000000000000000001610d9d565b835f03610e8057889350610e7d610e23610bdc565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611905565b92505b50610e8a836118a1565b6001850180546001600160801b0319166001600160801b0392909216919091179055610ee0610ed97f00000000000000000000000000000000000000000000000000000000000000008b613583565b8a84611b27565b610f1e89610f18610f117f000000000000000000000000000000000000000000000000000000000000000083613570565b4290611c60565b84611b27565b610f2788611c6e565b505f9050600881610f587f00000000000000000000000000000000000000000000000000000000000000008d613583565b815260208101919091526040015f908120600101546001600160801b03169150610f8360028c611e0b565b5f818152600b60205260408120549192508c8c83156110c457600192505f80610faf86898d865f611e3f565b915091508060095f828254610fc49190613570565b90915550610fdf9050865f84610fd981611735565b88611f0c565b610fe98183613570565b915061101986838a8e877f0000000000000000000000000000000000000000000000000000000000000000612083565b915061102d61102883856120c6565b6120da565b6006805460029061104e9084906201000090046001600160701b0316613769565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061107b826118a1565b6006805460109061109d908490600160801b90046001600160801b0316613789565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f6110d0600184611e0b565b5f818152600b602052604090205490915080156111db57600194505f806110fb838b8f886001611e3f565b915091508060095f8282546111109190613570565b9091555061112b9050835f8461112581611735565b8a612103565b6111358183613583565b915061114461102883876120c6565b600680546002906111659084906201000090046001600160701b0316613769565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550611192826118a1565b600680546010906111b4908490600160801b90046001600160801b0316613789565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415611214576112066111ed87611735565b6111f683611735565b61120091906137a9565b5f6122f3565b8e6112118482612332565b50505b5f61121e84612521565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112d4573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112f891906137c8565b90506001600160a01b0381161561136c576113695a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612663565b50505b509b9d50505050505050505050505050505b949350505050565b5f6113ab600b5f611398600286611e0b565b81526020019081526020015f2054611735565b6113bc600b5f611398600187611e0b565b6113c691906137a9565b92915050565b5f805f806113da8a8a6126eb565b91509150806113f0575f809350935050506115c5565b5f61144f838a6114287f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613583565b8b7f0000000000000000000000000000000000000000000000000000000000000000612723565b5090505f6114b2848b8461148b7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613583565b8d7f00000000000000000000000000000000000000000000000000000000000000006127dc565b5090508115806114c0575080155b156114cb57505f9050805b5f611518858c7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611905565b905061152683838c84612896565b509093505f9050611537848f613570565b90505f6115578b8b61154887611735565b611552908e6137e3565b6128de565b90508b61158c6115877f000000000000000000000000000000000000000000000000000000000000000083612940565b611735565b61159583611735565b6115a261158786856120c6565b6115ac91906137a9565b6115b691906137a9565b60019950995050505050505050505b965096945050505050565b5f61008d6115e384846301e13380612950565b6115f585670de0b6b3a7640000613583565b906117a3565b611603613402565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260035404821661010082015260055490916101208301916116fb9116612973565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261172d92900416612973565b905292915050565b5f6001600160ff1b0382111561175e5760405163396ea70160e11b815260040160405180910390fd5b5090565b61176b816129e0565b610bd957604051635044b7f560e01b815260040160405180910390fd5b5f825f19048411830215820261179c575f80fd5b5091020490565b5f61008d83670de0b6b3a764000084611788565b5f838152600a602090815260408083206001600160a01b0386168452909152812080548392906117e8908490613570565b90915550505f838152600b60205260408120805483929061180a908490613570565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6113c6826004612332565b5f818313611876578261008d565b50919050565b5f8061188884846126eb565b90925090508061189a5761189a612b74565b5092915050565b5f6001600160801b0382111561175e57604051630f0af95160e11b815260040160405180910390fd5b5f60016001607f1b03198212806118e7575060016001607f1b0382135b1561175e5760405163a5353be560e01b815260040160405180910390fd5b5f61007582611915858888611788565b90612b8d565b5f808434101561193e576040516312171d8360e31b815260040160405180910390fd5b84340390507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a1903eab867f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156119cf573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119f391906137c8565b6040516001600160e01b031960e085901b1681526001600160a01b03909116600482015260240160206040518083038185885af1158015611a36573d5f803e3d5ffd5b50505050506040513d601f19601f82011682018060405250810190611a5b9190613623565b91505b935093915050565b604051636d78045960e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636d780459906064016020604051808303815f875af1158015611ad6573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611afa9190613623565b50505050565b5f610bfc670de0b6b3a7640000612bfc565b5f611b1d828461381e565b61008d9084613583565b5f83815260086020526040902054600160801b90046001600160801b0316808303611b525750505050565b5f848152600860205260408120546001600160801b031690819003611baa57611b7a836118a1565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611c27565b611bfb611bf6670de0b6b3a7640000611bc38886613583565b611bcd9190613727565b85670de0b6b3a7640000611be1878a613583565b611beb9190613727565b859291906001612c85565b6118a1565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611c30846118a1565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f818311611876578261008d565b6006545f908190611c90908490600160801b90046001600160801b03166120c6565b6006546201000090046001600160701b03169250905081811115611e06575f611cb98383613583565b9050611cc8611bf68286612d1f565b60068054601090611cea908490600160801b90046001600160801b0316613831565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611d2285836117a390919063ffffffff16565b90505f611d4f827f00000000000000000000000000000000000000000000000000000000000000006120c6565b90508060095f828254611d629190613570565b90915550611d7290508183613583565b9150611d7d826118a1565b600280545f90611d979084906001600160801b0316613789565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611dc482612d33565b600480545f90611dd8908490600f0b613851565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b03821115611e345760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f80611e4b87856117a3565b91505f611e78837f00000000000000000000000000000000000000000000000000000000000000006120c6565b9050611ea4817f00000000000000000000000000000000000000000000000000000000000000006120c6565b91508315611ec757611eb68282613583565b611ec09084613583565b9250611ede565b611ed18282613583565b611edb9084613570565b92505b86861015611f0157611ef1838789611788565b9250611efe828789611788565b91505b509550959350505050565b600454600160801b90046001600160801b0316611f54611bf682611f38670de0b6b3a764000086613727565b600554600160801b90046001600160801b031691908a5f612c85565b600580546001600160801b03928316600160801b029216919091179055611f7a866118a1565b611f849082613831565b600480546001600160801b03928316600160801b029216919091179055611faa846118a1565b600280545f90611fc49084906001600160801b0316613789565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ff1836118ca565b600480545f90612005908490600f0b613851565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550612035856118a1565b60028054601090612057908490600160801b90046001600160801b0316613831565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80612094846115f58a888a611788565b90506120a1888486611788565b6120ab9082613570565b9050868111156120bb5786810391505b509695505050505050565b5f61008d8383670de0b6b3a7640000611788565b5f6001600160701b0382111561175e5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061214557507f00000000000000000000000000000000000000000000000000000000000000006121438583613583565b105b1561215257612152612b74565b6004549084900390600f0b61216784826137a9565b90508361217386611735565b1380156121a857507f00000000000000000000000000000000000000000000000000000000000000006121a6838361187c565b105b156121b5576121b5612b74565b600354600160801b90046001600160801b03166121f6611bf6826121e1670de0b6b3a764000088613727565b6005546001600160801b031691908c5f612c85565b600580546001600160801b0319166001600160801b03929092169190911790556122208882613583565b905061222b816118a1565b600380546001600160801b03928316600160801b029216919091179055612251836118a1565b600280546001600160801b0319166001600160801b039290921691909117905561227a826118ca565b600480546001600160801b0319166001600160801b03929092169190911790556122a3876118a1565b600280546010906122c5908490600160801b90046001600160801b0316613789565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461230e90611bf6906001600160801b031684846128de565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543549091829161237c916001600160801b031690613583565b9050805f0361238f5760019150506113c6565b5f61239985612d5c565b9050805f036123ad576001925050506113c6565b5f806123ba838589612df7565b91509150806123cf575f9450505050506113c6565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161240a92919061387e565b6040805180830381865af4158015612424573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061244891906138f3565b9150915061246661245882611735565b61246190613915565b6129e0565b92508261247b575f96505050505050506113c6565b612484826118a1565b600780545f9061249e9084906001600160801b0316613789565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506124cb816118a1565b600780546010906124ed908490600160801b90046001600160801b0316613789565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e612548876115fb565b6040518263ffffffff1660e01b81526004016125649190613614565b6040805180830381865af415801561257e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906125a2919061392f565b91509150806125b757505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161261c91613570565b6126269190613583565b9050805f0361263c57505f958695509350505050565b5f80871161264a575f612655565b612655848884611788565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff8111156126865761268661395d565b6040519080825280601f01601f1916602001820160405280156126b0576020820181803683370190505b5090505f808751602089018b8e8ef191503d9250868311156126d0578692505b828152825f602083013e9093509150505b9550959350505050565b5f805f836126f886611735565b61270291906137a9565b90505f811215612718575f809250925050610cf0565b946001945092505050565b5f805f6127338888888888612f5f565b90505f61275d670de0b6b3a764000061274c8888612d1f565b6127569190613570565b83906117a3565b9050670de0b6b3a764000081106127915761278a612783670de0b6b3a7640000896117a3565b8290612b8d565b90506127a9565b6127a6612783670de0b6b3a764000089612d1f565b90505b6127b381866117a3565b9050888110156127ca575f809350935050506126e1565b97909703976001975095505050505050565b5f805f6127ec8989888888612f8d565b9050612806866119156127ff8a8d613570565b87906120c6565b9850612813858a86611788565b985088811015612829575f8092509250506115c5565b888103670de0b6b3a7640000811061285757612850612783670de0b6b3a764000089612d1f565b905061286f565b61286c612783670de0b6b3a7640000896117a3565b90505b80891015612884575f809350935050506115c5565b90970398600198509650505050505050565b5f805f805f6128a6898789612fb1565b90925090506128b58289613583565b97505f6128c382888a611788565b90506128cf818b613583565b9a989950979650505050505050565b5f806128ea845f613036565b6128f4845f613036565b6128fe91906137a9565b90505f811315612919576129128186613570565b9450612937565b5f8112156129375761292a81613915565b6129349086613583565b94505b50929392505050565b5f61008d8383670de0b6b3a76400005b5f825f190484118302158202612964575f80fd5b50910281810615159190040190565b5f80670de0b6b3a7640000612986610cf7565b6129909190613727565b905080831161299f575f6129a9565b6129a98184613583565b915061008d612756670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613727565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a96573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612aba9190613971565b935093509350935080612ad557505f98975050505050505050565b868414612b0657612ae5846118a1565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612b3757612b16836118ca565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612b6557612b47826118a1565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f815f03612ba45750670de0b6b3a76400006113c6565b825f03612bb257505f6113c6565b5f612bbc83611735565b90505f612bd0612bcb86611735565b61304b565b9050818102612be7670de0b6b3a7640000826139af565b9050612bf281613270565b9695505050505050565b604051630f451f7160e31b8152600481018290525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637a28fb8890602401602060405180830381865afa158015612c61573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113c69190613623565b5f825f03612c94575084610075565b8115612ce657612cc5612ca78487613570565b612cb185876120c6565b612cbb888a6120c6565b6115f59190613570565b90505f612cd28588611c60565b905080821015612ce0578091505b50610075565b828503612cf457505f610075565b610072612d018487613583565b612d0b8587612940565b612d15888a6120c6565b6115f59190613583565b5f61008d83670de0b6b3a764000084612950565b5f60016001607f1b0382111561175e5760405163a5353be560e01b815260040160405180910390fd5b6003545f908190612d76906001600160801b031684612d1f565b9050612da27f000000000000000000000000000000000000000000000000000000000000000082613570565b6002546001600160801b03161115611876576002547f000000000000000000000000000000000000000000000000000000000000000090612ded9083906001600160801b0316613583565b61008d9190613583565b612dff613457565b5f80612e0a846115fb565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612e449190613614565b6040805180830381865af4158015612e5e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612e82919061392f565b9350905082612e9657505f9150611a5e9050565b5f612eb76115878461016001518561014001516120c690919063ffffffff16565b612ed761158785610120015186610100015161294090919063ffffffff16565b612ee191906137a9565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b5f612f6a8585612b8d565b612f83612f7b86611915868b6120c6565b859085611788565b6100729190613570565b5f612f988585612b8d565b612f83612fa986611915868b612940565b859085612950565b5f8061300085612ffa85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612ff0818c612d1f565b612ffa9190613583565b90612940565b915061302c827f00000000000000000000000000000000000000000000000000000000000000006120c6565b9050935093915050565b5f818313613044578161008d565b5090919050565b5f80821361306c5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130ef9084901c611735565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361328957505f919050565b680755bf798b4a1bf1e582126132b2576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612bf274029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611735565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b60405180610120016040528061346b613402565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f60608284031215611876575f80fd5b5f805f805f60a086880312156134c5575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8111156134f7575f80fd5b613503888289016134a1565b9150509295509295909350565b5f805f60608486031215613522575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115613546575f80fd5b613552868287016134a1565b9150509250925092565b634e487b7160e01b5f52601160045260245ffd5b808201808211156113c6576113c661355c565b818103818111156113c6576113c661355c565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016113c68284613596565b5f60208284031215613633575f80fd5b5051919050565b6001600160a01b0381168114610bd9575f80fd5b5f6020828403121561365e575f80fd5b813561008d8161363a565b8015158114610bd9575f80fd5b5f60208284031215613686575f80fd5b813561008d81613669565b5f808335601e198436030181126136a6575f80fd5b83018035915067ffffffffffffffff8211156136c0575f80fd5b602001915036819003821315610cf0575f80fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e08301375f81830160e090810191909152601f909201601f191601019695505050505050565b80820281158282048414176113c6576113c661355c565b5f805f60608486031215613750575f80fd5b8351925060208401519150604084015190509250925092565b6001600160701b0381811683821601908082111561189a5761189a61355c565b6001600160801b0381811683821601908082111561189a5761189a61355c565b8181035f83128015838313168383128216171561189a5761189a61355c565b5f602082840312156137d8575f80fd5b815161008d8161363a565b8082018281125f8312801582168215821617156138025761380261355c565b505092915050565b634e487b7160e01b5f52601260045260245ffd5b5f8261382c5761382c61380a565b500690565b6001600160801b0382811682821603908082111561189a5761189a61355c565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156113c6576113c661355c565b5f6102a082019050613891828551613596565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613904575f80fd5b505080516020909101519092909150565b5f600160ff1b82016139295761392961355c565b505f0390565b5f8060408385031215613940575f80fd5b82519150602083015161395281613669565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215613984575f80fd5b84519350602085015192506040850151915060608501516139a481613669565b939692955090935050565b5f826139bd576139bd61380a565b600160ff1b82145f19841416156139d6576139d661355c565b50059056fea26469706673582212208458dfed66f8b87f8b7842cb4fd793a0429b184dce770725fe150df075b96c2a64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
  "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
} as const
};
