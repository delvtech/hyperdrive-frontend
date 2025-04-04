export const EzETHTarget3 = {
  name: 'EzETHTarget3' as const,
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
        "name": "_restakeManager",
        "type": "address",
        "internalType": "contract IRestakeManager"
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
  bytecode: '0x6102c060405234801562000011575f80fd5b506040516200414e3803806200414e83398101604081905262000034916200022a565b60015f5582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e0808801516102005261012080890151909352610100808901519091526101408089015190915290870180515190925281518301519052805160409081015161016052905160609081015161018052818701518416610240528601516102605282851661022052918316610280819052825163224a19a960e21b815292518493919263892866a492600480820193918290030181865afa1580156200011b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000141919062000376565b6001600160a01b03166102a052506200039b92505050565b60405161020081016001600160401b03811182821017156200018957634e487b7160e01b5f52604160045260245ffd5b60405290565b6001600160a01b0381168114620001a4575f80fd5b50565b8051620001b4816200018f565b919050565b5f60808284031215620001ca575f80fd5b604051608081016001600160401b0381118282101715620001f957634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a08112156200023f575f80fd5b610260808212156200024f575f80fd5b6200025962000159565b91506200026686620001a7565b82526200027660208701620001a7565b60208301526200028960408701620001a7565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620002f4818801620001a7565b9083015261018062000308878201620001a7565b908301526101a06200031c878201620001a7565b908301526101c062000330878201620001a7565b908301526101e06200034588888301620001b9565b81840152508194506200035a818701620001a7565b935050506200036d6102808501620001a7565b90509250925092565b5f6020828403121562000387575f80fd5b815162000394816200018f565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a051613be5620005695f395f612b0301525f612b2401525f50505f50505f6112ab01525f81816102f801528181610327015261035401525f818160d90152818161059601526116c101525f81816108320152818161091d015281816109ad01528181610ab2015281816115930152818161169b0152818161201b0152818161207e0152818161292701528181612c620152612c9e01525f8181610139015281816108a201528181610e690152818161145c015281816114bf01528181611504015261167501525f611c2c01525f8181611d810152612ef401525f81816110260152611d5501525f612eaa01525f818161017b015281816108f501528181610e8a0152818161142c0152818161148f0152818161152501526116e701525f818161015a0152818161022f015281816102cd015281816106d5015281816108cf01528181610f6401526128bd01525f818161028d01528181610d2f01528181610da601528181610e1a01528181610ee50152610f1d01525f81816119890152612b4501525f5050613be55ff3fe608060405260043610610028575f3560e01c80634c2ac1d91461002c57806377d05ff414610051575b5f80fd5b61003f61003a3660046134de565b610064565b60405190815260200160405180910390f35b61003f61005f36600461353d565b61007e565b5f6100728686868686610094565b90505b95945050505050565b5f61008a8484846107de565b90505b9392505050565b5f61009d610b8c565b600654610100900460ff16156100c6576040516321081abf60e01b815260040160405180910390fd5b6100ce610bb4565b6100d782610bd5565b7f00000000000000000000000000000000000000000000000000000000000000008610156101185760405163211ddda360e11b815260040160405180910390fd5b5f61019f610124610c0d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c32565b9050848110806101ae57508381115b156101cc57604051633b61151160e11b815260040160405180910390fd5b5f806101d88986610c57565b915091505f6101e5610d28565b90506101f5818360046001610d53565b506002546004546003545f92839261025e926001600160801b0380841693600f9390930b92600160801b90048116918991166102596102547f00000000000000000000000000000000000000000000000000000000000000008b61359d565b6113b7565b6113fd565b915091508061028057604051630552b01360e31b815260040160405180910390fd5b8b5f6102f16008826102b27f0000000000000000000000000000000000000000000000000000000000000000896135b0565b815260208101919091526040015f20546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000611601565b905061031d7f00000000000000000000000000000000000000000000000000000000000000008261359d565b88118061037c57507f00000000000000000000000000000000000000000000000000000000000000008111801561037c57506103797f0000000000000000000000000000000000000000000000000000000000000000826135b0565b88105b1561039a57604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490916103e5916001600160801b03909116906135b0565b5f808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061041f90839061359d565b90505f805f61042d8a61162c565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610467908490600401613641565b602060405180830381865af4158015610482573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104a69190613650565b91506104b96104b48c611766565b611793565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161051a91859101613641565b602060405180830381865af4158015610535573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105599190613650565b92508183101561057c5760405163184d952160e11b815260040160405180910390fd5b610592848361058b81876135b0565b91906117b9565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105d55760405163211ddda360e11b815260040160405180910390fd5b508f6105e1868e6117d4565b10156106005760405163c972651760e01b815260040160405180910390fd5b61061c5f8e5f016020810190610616919061367b565b8e6117e8565b6106258961188d565b95508561064557604051638bdf918d60e01b815260040160405180910390fd5b5f8890505f8d9050368f90505f8c90505f6106ff60025f015f9054906101000a90046001600160801b03166001600160801b0316600280015f9054906101000a9004600f0b600f0b60025f0160109054906101000a90046001600160801b03166001600160801b03168560026001015f9054906101000a90046001600160801b03166001600160801b03166102597f00000000000000000000000000000000000000000000000000000000000000008c610254919061359d565b9b5090508a158061071857506107158c5f611899565b81125b1561073657604051630552b01360e31b815260040160405180910390fd5b5f881561074d5761074887848b6117b9565b61074f565b5f5b905061075e602085018561367b565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d8661079b60408a0160208b016136a3565b866107a960408c018c6136be565b6040516107bc9796959493929190613701565b60405180910390a2505050505050505050505050505050505061007560015f55565b5f6107e7610b8c565b6107ef610bb4565b6107f882610bd5565b60065460ff161561081c57604051637983c05160e01b815260040160405180910390fd5b5f806108288685610c57565b90925090506108587f00000000000000000000000000000000000000000000000000000000000000006002613754565b82101561087857604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393505f908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610981573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109a5919061376b565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109d684846118ad565b10156109f55760405163216f4ab160e21b815260040160405180910390fd5b5f80610a05858585895f806113fd565b91509150801580610a1557505f82125b15610a3357604051630552b01360e31b815260040160405180910390fd5b610a3c856118d2565b600280546001600160801b0319166001600160801b0392909216919091179055610a65846118fb565b600480546001600160801b0319166001600160801b0392909216919091179055610a8e836118d2565b600280546001600160801b03928316600160801b029216919091179055610ad65f807f00000000000000000000000000000000000000000000000000000000000000006117e8565b610aed5f610ae760208c018c61367b565b8a6117e8565b610b02610af8610d28565b8760046001610d53565b508a8a8a610b13602082018261367b565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b5060408701602088016136a3565b87610b5e60408901896136be565b604051610b719796959493929190613701565b60405180910390a25050505050505050505061008d60015f55565b60025f5403610bae57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b3415610bd357604051631574f9f360e01b815260040160405180910390fd5b565b5f610be3602083018361367b565b6001600160a01b031603610c0a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6002546004545f91610c2d916001600160801b0390911690600f0b6118ad565b905090565b5f80610c4087878786611936565b9050610c4c8185611601565b979650505050505050565b815f80610c6a60408501602086016136a3565b15610c8f57610c8585610c8060408701876136be565b61194c565b9093509050610ca7565b5034610ca785610ca260408701876136be565b611967565b610caf611a01565b91508015610d1f576040515f90339083908381818185875af1925050503d805f8114610cf6576040519150601f19603f3d011682016040523d82523d5f602084013e610cfb565b606091505b5050905080610d1d576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f610c2d427f0000000000000000000000000000000000000000000000000000000000000000611a13565b5f84815260086020526040812060018101546001600160801b0316151580610d7a57504286115b15610d9357600101546001600160801b031690506113af565b5f805f610d9e610d28565b90505f610dcb7f00000000000000000000000000000000000000000000000000000000000000008b61359d565b90505b81811015610e3f575f818152600860205260409020600101546001600160801b03168015610e17575f828152600860205260409020549094506001600160801b03169250610e3f565b507f000000000000000000000000000000000000000000000000000000000000000001610dce565b835f03610eb157889350610eae610e54610c0d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611936565b92505b50610ebb836118d2565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f11610f0a7f00000000000000000000000000000000000000000000000000000000000000008b6135b0565b8a84611a28565b610f4f89610f49610f427f00000000000000000000000000000000000000000000000000000000000000008361359d565b4290611b61565b84611a28565b610f5888611b6f565b505f9050600881610f897f00000000000000000000000000000000000000000000000000000000000000008d6135b0565b815260208101919091526040015f908120600101546001600160801b03169150610fb460028c611d0c565b5f818152600b60205260408120549192508c8c83156110f557600192505f80610fe086898d865f611d40565b915091508060095f828254610ff5919061359d565b909155506110109050865f8461100a81611766565b88611e0d565b61101a818361359d565b915061104a86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611f84565b915061105e6110598385611fc7565b611fdb565b6006805460029061107f9084906201000090046001600160701b0316613796565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110ac826118d2565b600680546010906110ce908490600160801b90046001600160801b03166137b6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f611101600184611d0c565b5f818152600b6020526040902054909150801561120c57600194505f8061112c838b8f886001611d40565b915091508060095f828254611141919061359d565b9091555061115c9050835f8461115681611766565b8a612004565b61116681836135b0565b91506111756110598387611fc7565b600680546002906111969084906201000090046001600160701b0316613796565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506111c3826118d2565b600680546010906111e5908490600160801b90046001600160801b03166137b6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156112455761123761121e87611766565b61122783611766565b61123191906137d6565b5f6121f4565b8e6112428482612233565b50505b5f61124f84612422565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611305573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061132991906137f5565b90506001600160a01b0381161561139d5761139a5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612564565b50505b509b9d50505050505050505050505050505b949350505050565b5f6113dc600b5f6113c9600286611d0c565b81526020019081526020015f2054611766565b6113ed600b5f6113c9600187611d0c565b6113f791906137d6565b92915050565b5f805f8061140b8a8a6125ec565b9150915080611421575f809350935050506115f6565b5f611480838a6114597f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006135b0565b8b7f0000000000000000000000000000000000000000000000000000000000000000612624565b5090505f6114e3848b846114bc7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006135b0565b8d7f00000000000000000000000000000000000000000000000000000000000000006126dd565b5090508115806114f1575080155b156114fc57505f9050805b5f611549858c7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611936565b905061155783838c84612797565b509093505f9050611568848f61359d565b90505f6115888b8b61157987611766565b611583908e613810565b6127df565b90508b6115bd6115b87f000000000000000000000000000000000000000000000000000000000000000083612841565b611766565b6115c683611766565b6115d36115b88685611fc7565b6115dd91906137d6565b6115e791906137d6565b60019950995050505050505050505b965096945050505050565b5f61008d61161484846301e13380612851565b61162685670de0b6b3a76400006135b0565b906117d4565b61163461342f565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161172c9116612874565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261175e92900416612874565b905292915050565b5f6001600160ff1b0382111561178f5760405163396ea70160e11b815260040160405180910390fd5b5090565b61179c816128e1565b610c0a57604051635044b7f560e01b815260040160405180910390fd5b5f825f1904841183021582026117cd575f80fd5b5091020490565b5f61008d83670de0b6b3a7640000846117b9565b5f838152600a602090815260408083206001600160a01b03861684529091528120805483929061181990849061359d565b90915550505f838152600b60205260408120805483929061183b90849061359d565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6113f7826004612233565b5f8183136118a7578261008d565b50919050565b5f806118b984846125ec565b9092509050806118cb576118cb612a75565b5092915050565b5f6001600160801b0382111561178f57604051630f0af95160e11b815260040160405180910390fd5b5f60016001607f1b0319821280611918575060016001607f1b0382135b1561178f5760405163a5353be560e01b815260040160405180910390fd5b5f610075826119468588886117b9565b90612a8e565b5f8060405163350b944160e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303815f875af11580156119d7573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119fb9190613837565b50505050565b5f610c2d670de0b6b3a7640000612afd565b5f611a1e8284613866565b61008d90846135b0565b5f83815260086020526040902054600160801b90046001600160801b0316808303611a535750505050565b5f848152600860205260408120546001600160801b031690819003611aab57611a7b836118d2565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611b28565b611afc611af7670de0b6b3a7640000611ac488866135b0565b611ace9190613754565b85670de0b6b3a7640000611ae2878a6135b0565b611aec9190613754565b859291906001612b6a565b6118d2565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611b31846118d2565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f8183116118a7578261008d565b6006545f908190611b91908490600160801b90046001600160801b0316611fc7565b6006546201000090046001600160701b03169250905081811115611d07575f611bba83836135b0565b9050611bc9611af78286612c04565b60068054601090611beb908490600160801b90046001600160801b0316613879565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611c2385836117d490919063ffffffff16565b90505f611c50827f0000000000000000000000000000000000000000000000000000000000000000611fc7565b90508060095f828254611c63919061359d565b90915550611c73905081836135b0565b9150611c7e826118d2565b600280545f90611c989084906001600160801b03166137b6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611cc582612c18565b600480545f90611cd9908490600f0b613899565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b03821115611d355760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f80611d4c87856117d4565b91505f611d79837f0000000000000000000000000000000000000000000000000000000000000000611fc7565b9050611da5817f0000000000000000000000000000000000000000000000000000000000000000611fc7565b91508315611dc857611db782826135b0565b611dc190846135b0565b9250611ddf565b611dd282826135b0565b611ddc908461359d565b92505b86861015611e0257611df28387896117b9565b9250611dff8287896117b9565b91505b509550959350505050565b600454600160801b90046001600160801b0316611e55611af782611e39670de0b6b3a764000086613754565b600554600160801b90046001600160801b031691908a5f612b6a565b600580546001600160801b03928316600160801b029216919091179055611e7b866118d2565b611e859082613879565b600480546001600160801b03928316600160801b029216919091179055611eab846118d2565b600280545f90611ec59084906001600160801b03166137b6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ef2836118fb565b600480545f90611f06908490600f0b613899565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611f36856118d2565b60028054601090611f58908490600160801b90046001600160801b0316613879565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80611f95846116268a888a6117b9565b9050611fa28884866117b9565b611fac908261359d565b905086811115611fbc5786810391505b509695505050505050565b5f61008d8383670de0b6b3a76400006117b9565b5f6001600160701b0382111561178f5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061204657507f000000000000000000000000000000000000000000000000000000000000000061204485836135b0565b105b1561205357612053612a75565b6004549084900390600f0b61206884826137d6565b90508361207486611766565b1380156120a957507f00000000000000000000000000000000000000000000000000000000000000006120a783836118ad565b105b156120b6576120b6612a75565b600354600160801b90046001600160801b03166120f7611af7826120e2670de0b6b3a764000088613754565b6005546001600160801b031691908c5f612b6a565b600580546001600160801b0319166001600160801b039290921691909117905561212188826135b0565b905061212c816118d2565b600380546001600160801b03928316600160801b029216919091179055612152836118d2565b600280546001600160801b0319166001600160801b039290921691909117905561217b826118fb565b600480546001600160801b0319166001600160801b03929092169190911790556121a4876118d2565b600280546010906121c6908490600160801b90046001600160801b03166137b6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461220f90611af7906001600160801b031684846127df565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543549091829161227d916001600160801b0316906135b0565b9050805f036122905760019150506113f7565b5f61229a85612c41565b9050805f036122ae576001925050506113f7565b5f806122bb838589612cdc565b91509150806122d0575f9450505050506113f7565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161230b9291906138c6565b6040805180830381865af4158015612325573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612349919061393b565b9150915061236761235982611766565b6123629061395d565b6128e1565b92508261237c575f96505050505050506113f7565b612385826118d2565b600780545f9061239f9084906001600160801b03166137b6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506123cc816118d2565b600780546010906123ee908490600160801b90046001600160801b03166137b6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6124498761162c565b6040518263ffffffff1660e01b81526004016124659190613641565b6040805180830381865af415801561247f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906124a39190613977565b91509150806124b857505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161251d9161359d565b61252791906135b0565b9050805f0361253d57505f958695509350505050565b5f80871161254b575f612556565b6125568488846117b9565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff811115612587576125876139a5565b6040519080825280601f01601f1916602001820160405280156125b1576020820181803683370190505b5090505f808751602089018b8e8ef191503d9250868311156125d1578692505b828152825f602083013e9093509150505b9550959350505050565b5f805f836125f986611766565b61260391906137d6565b90505f811215612619575f809250925050610d21565b946001945092505050565b5f805f6126348888888888612e4b565b90505f61265e670de0b6b3a764000061264d8888612c04565b612657919061359d565b83906117d4565b9050670de0b6b3a764000081106126925761268b612684670de0b6b3a7640000896117d4565b8290612a8e565b90506126aa565b6126a7612684670de0b6b3a764000089612c04565b90505b6126b481866117d4565b9050888110156126cb575f809350935050506125e2565b97909703976001975095505050505050565b5f805f6126ed8989888888612e79565b9050612707866119466127008a8d61359d565b8790611fc7565b9850612714858a866117b9565b98508881101561272a575f8092509250506115f6565b888103670de0b6b3a7640000811061275857612751612684670de0b6b3a764000089612c04565b9050612770565b61276d612684670de0b6b3a7640000896117d4565b90505b80891015612785575f809350935050506115f6565b90970398600198509650505050505050565b5f805f805f6127a7898789612e9d565b90925090506127b682896135b0565b97505f6127c482888a6117b9565b90506127d0818b6135b0565b9a989950979650505050505050565b5f806127eb845f612f22565b6127f5845f612f22565b6127ff91906137d6565b90505f81131561281a57612813818661359d565b9450612838565b5f8112156128385761282b8161395d565b61283590866135b0565b94505b50929392505050565b5f61008d8383670de0b6b3a76400005b5f825f190484118302158202612865575f80fd5b50910281810615159190040190565b5f80670de0b6b3a7640000612887610d28565b6128919190613754565b90508083116128a0575f6128aa565b6128aa81846135b0565b915061008d612657670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613754565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612997573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906129bb91906139b9565b9350935093509350806129d657505f98975050505050505050565b868414612a07576129e6846118d2565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612a3857612a17836118fb565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612a6657612a48826118d2565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f815f03612aa55750670de0b6b3a76400006113f7565b825f03612ab357505f6113f7565b5f612abd83611766565b90505f612ad1612acc86611766565b612f37565b9050818102612ae8670de0b6b3a7640000826139f7565b9050612af38161315c565b9695505050505050565b5f6113f77f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000856132ee565b5f825f03612b79575084610075565b8115612bcb57612baa612b8c848761359d565b612b968587611fc7565b612ba0888a611fc7565b611626919061359d565b90505f612bb78588611b61565b905080821015612bc5578091505b50610075565b828503612bd957505f610075565b610072612be684876135b0565b612bf08587612841565b612bfa888a611fc7565b61162691906135b0565b5f61008d83670de0b6b3a764000084612851565b5f60016001607f1b0382111561178f5760405163a5353be560e01b815260040160405180910390fd5b6003545f908190612c5b906001600160801b031684612c04565b9050612c877f00000000000000000000000000000000000000000000000000000000000000008261359d565b6002546001600160801b031611156118a7576002547f000000000000000000000000000000000000000000000000000000000000000090612cd29083906001600160801b03166135b0565b61008d91906135b0565b612ce4613484565b5f80612cef8461162c565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612d299190613641565b6040805180830381865af4158015612d43573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612d679190613977565b9350905082612d7b57505f9150612e439050565b5f612d9c6115b8846101600151856101400151611fc790919063ffffffff16565b612dbc6115b885610120015186610100015161284190919063ffffffff16565b612dc691906137d6565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b5f612e568585612a8e565b612e6f612e6786611946868b611fc7565b8590856117b9565b610072919061359d565b5f612e848585612a8e565b612e6f612e9586611946868b612841565b859085612851565b5f80612eec85612ee685817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612edc818c612c04565b612ee691906135b0565b90612841565b9150612f18827f0000000000000000000000000000000000000000000000000000000000000000611fc7565b9050935093915050565b5f818313612f30578161008d565b5090919050565b5f808213612f585760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612fdb9084901c611766565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361317557505f919050565b680755bf798b4a1bf1e5821261319e576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612af374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611766565b5f80846001600160a01b031663ff9969cd6040518163ffffffff1660e01b81526004015f60405180830381865afa15801561332b573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526133529190810190613ad8565b925050505f846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015613393573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906133b79190613650565b604051630c5c83cb60e41b81526004810186905260248101829052604481018490529091506001600160a01b0388169063c5c83cb090606401602060405180830381865afa15801561340b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c4c9190613650565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b60405180610120016040528061349861342f565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f606082840312156118a7575f80fd5b5f805f805f60a086880312156134f2575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115613524575f80fd5b613530888289016134ce565b9150509295509295909350565b5f805f6060848603121561354f575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115613573575f80fd5b61357f868287016134ce565b9150509250925092565b634e487b7160e01b5f52601160045260245ffd5b808201808211156113f7576113f7613589565b818103818111156113f7576113f7613589565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016113f782846135c3565b5f60208284031215613660575f80fd5b5051919050565b6001600160a01b0381168114610c0a575f80fd5b5f6020828403121561368b575f80fd5b813561008d81613667565b8015158114610c0a575f80fd5b5f602082840312156136b3575f80fd5b813561008d81613696565b5f808335601e198436030181126136d3575f80fd5b83018035915067ffffffffffffffff8211156136ed575f80fd5b602001915036819003821315610d21575f80fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e08301375f81830160e090810191909152601f909201601f191601019695505050505050565b80820281158282048414176113f7576113f7613589565b5f805f6060848603121561377d575f80fd5b8351925060208401519150604084015190509250925092565b6001600160701b038181168382160190808211156118cb576118cb613589565b6001600160801b038181168382160190808211156118cb576118cb613589565b8181035f8312801583831316838312821617156118cb576118cb613589565b5f60208284031215613805575f80fd5b815161008d81613667565b8082018281125f83128015821682158216171561382f5761382f613589565b505092915050565b5f60208284031215613847575f80fd5b815161008d81613696565b634e487b7160e01b5f52601260045260245ffd5b5f8261387457613874613852565b500690565b6001600160801b038281168282160390808211156118cb576118cb613589565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156113f7576113f7613589565b5f6102a0820190506138d98285516135c3565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f806040838503121561394c575f80fd5b505080516020909101519092909150565b5f600160ff1b820161397157613971613589565b505f0390565b5f8060408385031215613988575f80fd5b82519150602083015161399a81613696565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f805f80608085870312156139cc575f80fd5b84519350602085015192506040850151915060608501516139ec81613696565b939692955090935050565b5f82613a0557613a05613852565b600160ff1b82145f1984141615613a1e57613a1e613589565b500590565b604051601f8201601f1916810167ffffffffffffffff81118282101715613a4c57613a4c6139a5565b604052919050565b5f67ffffffffffffffff821115613a6d57613a6d6139a5565b5060051b60200190565b5f82601f830112613a86575f80fd5b81516020613a9b613a9683613a54565b613a23565b8083825260208201915060208460051b870101935086841115613abc575f80fd5b602086015b84811015611fbc5780518352918301918301613ac1565b5f805f60608486031215613aea575f80fd5b835167ffffffffffffffff80821115613b01575f80fd5b818601915086601f830112613b14575f80fd5b81516020613b24613a9683613a54565b82815260059290921b8401810191818101908a841115613b42575f80fd5b8286015b84811015613b7857805186811115613b5c575f80fd5b613b6a8d86838b0101613a77565b845250918301918301613b46565b5091890151919750909350505080821115613b91575f80fd5b50613b9e86828701613a77565b92505060408401519050925092509256fea264697066735822122099aaad782d31747b0c0a6b731b5950e310787763c2cd6a0acb10e229320e942864736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
  "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
} as const
};
