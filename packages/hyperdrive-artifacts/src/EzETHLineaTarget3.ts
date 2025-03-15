export const EzETHLineaTarget3 = {
  name: 'EzETHLineaTarget3' as const,
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
        "name": "__xRenzoDeposit",
        "type": "address",
        "internalType": "contract IXRenzoDeposit"
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
  bytecode: '0x6102a060405234801562000011575f80fd5b5060405162003e2d38038062003e2d8339810160408190526200003491620001ac565b60015f5582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815190920151909152805160409081015161016052905160609081015161018052908501518216610240529093015161026052908216610220521661028052620002f8565b60405161020081016001600160401b03811182821017156200011957634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b038116811462000136575f80fd5b919050565b5f608082840312156200014c575f80fd5b604051608081016001600160401b03811182821017156200017b57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a0811215620001c1575f80fd5b61026080821215620001d1575f80fd5b620001db620000e9565b9150620001e8866200011f565b8252620001f8602087016200011f565b60208301526200020b604087016200011f565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620002768188016200011f565b908301526101806200028a8782016200011f565b908301526101a06200029e8782016200011f565b908301526101c0620002b28782016200011f565b908301526101e0620002c7888883016200013b565b8184015250819450620002dc8187016200011f565b93505050620002ef61028085016200011f565b90509250925092565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613978620004b55f395f612b2501525f50505f50505f6112ab01525f81816102f801528181610327015261035401525f818160d90152818161059601526116c101525f81816108320152818161091d015281816109ad01528181610ab2015281816115930152818161169b0152818161203d015281816120a00152818161294901528181612c420152612c7e01525f8181610139015281816108a201528181610e690152818161145c015281816114bf01528181611504015261167501525f611c4e01525f8181611da30152612ed401525f81816110260152611d7701525f612e8a01525f818161017b015281816108f501528181610e8a0152818161142c0152818161148f0152818161152501526116e701525f818161015a0152818161022f015281816102cd015281816106d5015281816108cf01528181610f6401526128df01525f818161028d01528181610d2f01528181610da601528181610e1a01528181610ee50152610f1d01525f61198b01525f50506139785ff3fe608060405260043610610028575f3560e01c80634c2ac1d91461002c57806377d05ff414610051575b5f80fd5b61003f61003a3660046133fd565b610064565b60405190815260200160405180910390f35b61003f61005f36600461345c565b61007e565b5f6100728686868686610094565b90505b95945050505050565b5f61008a8484846107de565b90505b9392505050565b5f61009d610b8c565b600654610100900460ff16156100c6576040516321081abf60e01b815260040160405180910390fd5b6100ce610bb4565b6100d782610bd5565b7f00000000000000000000000000000000000000000000000000000000000000008610156101185760405163211ddda360e11b815260040160405180910390fd5b5f61019f610124610c0d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c32565b9050848110806101ae57508381115b156101cc57604051633b61151160e11b815260040160405180910390fd5b5f806101d88986610c57565b915091505f6101e5610d28565b90506101f5818360046001610d53565b506002546004546003545f92839261025e926001600160801b0380841693600f9390930b92600160801b90048116918991166102596102547f00000000000000000000000000000000000000000000000000000000000000008b6134bc565b6113b7565b6113fd565b915091508061028057604051630552b01360e31b815260040160405180910390fd5b8b5f6102f16008826102b27f0000000000000000000000000000000000000000000000000000000000000000896134cf565b815260208101919091526040015f20546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000611601565b905061031d7f0000000000000000000000000000000000000000000000000000000000000000826134bc565b88118061037c57507f00000000000000000000000000000000000000000000000000000000000000008111801561037c57506103797f0000000000000000000000000000000000000000000000000000000000000000826134cf565b88105b1561039a57604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490916103e5916001600160801b03909116906134cf565b5f808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061041f9083906134bc565b90505f805f61042d8a61162c565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610467908490600401613560565b602060405180830381865af4158015610482573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104a6919061356f565b91506104b96104b48c611766565b611793565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161051a91859101613560565b602060405180830381865af4158015610535573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610559919061356f565b92508183101561057c5760405163184d952160e11b815260040160405180910390fd5b610592848361058b81876134cf565b91906117b9565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105d55760405163211ddda360e11b815260040160405180910390fd5b508f6105e1868e6117d4565b10156106005760405163c972651760e01b815260040160405180910390fd5b61061c5f8e5f016020810190610616919061359a565b8e6117e8565b6106258961188d565b95508561064557604051638bdf918d60e01b815260040160405180910390fd5b5f8890505f8d9050368f90505f8c90505f6106ff60025f015f9054906101000a90046001600160801b03166001600160801b0316600280015f9054906101000a9004600f0b600f0b60025f0160109054906101000a90046001600160801b03166001600160801b03168560026001015f9054906101000a90046001600160801b03166001600160801b03166102597f00000000000000000000000000000000000000000000000000000000000000008c61025491906134bc565b9b5090508a158061071857506107158c5f611899565b81125b1561073657604051630552b01360e31b815260040160405180910390fd5b5f881561074d5761074887848b6117b9565b61074f565b5f5b905061075e602085018561359a565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d8661079b60408a0160208b016135c2565b866107a960408c018c6135dd565b6040516107bc9796959493929190613620565b60405180910390a2505050505050505050505050505050505061007560015f55565b5f6107e7610b8c565b6107ef610bb4565b6107f882610bd5565b60065460ff161561081c57604051637983c05160e01b815260040160405180910390fd5b5f806108288685610c57565b90925090506108587f00000000000000000000000000000000000000000000000000000000000000006002613673565b82101561087857604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393505f908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610981573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109a5919061368a565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109d684846118ad565b10156109f55760405163216f4ab160e21b815260040160405180910390fd5b5f80610a05858585895f806113fd565b91509150801580610a1557505f82125b15610a3357604051630552b01360e31b815260040160405180910390fd5b610a3c856118d2565b600280546001600160801b0319166001600160801b0392909216919091179055610a65846118fb565b600480546001600160801b0319166001600160801b0392909216919091179055610a8e836118d2565b600280546001600160801b03928316600160801b029216919091179055610ad65f807f00000000000000000000000000000000000000000000000000000000000000006117e8565b610aed5f610ae760208c018c61359a565b8a6117e8565b610b02610af8610d28565b8760046001610d53565b508a8a8a610b13602082018261359a565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b5060408701602088016135c2565b87610b5e60408901896135dd565b604051610b719796959493929190613620565b60405180910390a25050505050505050505061008d60015f55565b60025f5403610bae57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b3415610bd357604051631574f9f360e01b815260040160405180910390fd5b565b5f610be3602083018361359a565b6001600160a01b031603610c0a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6002546004545f91610c2d916001600160801b0390911690600f0b6118ad565b905090565b5f80610c4087878786611936565b9050610c4c8185611601565b979650505050505050565b815f80610c6a60408501602086016135c2565b15610c8f57610c8585610c8060408701876135dd565b61194c565b9093509050610ca7565b5034610ca785610ca260408701876135dd565b611967565b610caf611a23565b91508015610d1f576040515f90339083908381818185875af1925050503d805f8114610cf6576040519150601f19603f3d011682016040523d82523d5f602084013e610cfb565b606091505b5050905080610d1d576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f610c2d427f0000000000000000000000000000000000000000000000000000000000000000611a35565b5f84815260086020526040812060018101546001600160801b0316151580610d7a57504286115b15610d9357600101546001600160801b031690506113af565b5f805f610d9e610d28565b90505f610dcb7f00000000000000000000000000000000000000000000000000000000000000008b6134bc565b90505b81811015610e3f575f818152600860205260409020600101546001600160801b03168015610e17575f828152600860205260409020549094506001600160801b03169250610e3f565b507f000000000000000000000000000000000000000000000000000000000000000001610dce565b835f03610eb157889350610eae610e54610c0d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611936565b92505b50610ebb836118d2565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f11610f0a7f00000000000000000000000000000000000000000000000000000000000000008b6134cf565b8a84611a4a565b610f4f89610f49610f427f0000000000000000000000000000000000000000000000000000000000000000836134bc565b4290611b83565b84611a4a565b610f5888611b91565b505f9050600881610f897f00000000000000000000000000000000000000000000000000000000000000008d6134cf565b815260208101919091526040015f908120600101546001600160801b03169150610fb460028c611d2e565b5f818152600b60205260408120549192508c8c83156110f557600192505f80610fe086898d865f611d62565b915091508060095f828254610ff591906134bc565b909155506110109050865f8461100a81611766565b88611e2f565b61101a81836134bc565b915061104a86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611fa6565b915061105e6110598385611fe9565b611ffd565b6006805460029061107f9084906201000090046001600160701b03166136b5565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110ac826118d2565b600680546010906110ce908490600160801b90046001600160801b03166136d5565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f611101600184611d2e565b5f818152600b6020526040902054909150801561120c57600194505f8061112c838b8f886001611d62565b915091508060095f82825461114191906134bc565b9091555061115c9050835f8461115681611766565b8a612026565b61116681836134cf565b91506111756110598387611fe9565b600680546002906111969084906201000090046001600160701b03166136b5565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506111c3826118d2565b600680546010906111e5908490600160801b90046001600160801b03166136d5565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156112455761123761121e87611766565b61122783611766565b61123191906136f5565b5f612216565b8e6112428482612255565b50505b5f61124f84612444565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611305573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113299190613714565b90506001600160a01b0381161561139d5761139a5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612586565b50505b509b9d50505050505050505050505050505b949350505050565b5f6113dc600b5f6113c9600286611d2e565b81526020019081526020015f2054611766565b6113ed600b5f6113c9600187611d2e565b6113f791906136f5565b92915050565b5f805f8061140b8a8a61260e565b9150915080611421575f809350935050506115f6565b5f611480838a6114597f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006134cf565b8b7f0000000000000000000000000000000000000000000000000000000000000000612646565b5090505f6114e3848b846114bc7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006134cf565b8d7f00000000000000000000000000000000000000000000000000000000000000006126ff565b5090508115806114f1575080155b156114fc57505f9050805b5f611549858c7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611936565b905061155783838c846127b9565b509093505f9050611568848f6134bc565b90505f6115888b8b61157987611766565b611583908e61372f565b612801565b90508b6115bd6115b87f000000000000000000000000000000000000000000000000000000000000000083612863565b611766565b6115c683611766565b6115d36115b88685611fe9565b6115dd91906136f5565b6115e791906136f5565b60019950995050505050505050505b965096945050505050565b5f61008d61161484846301e13380612873565b61162685670de0b6b3a76400006134cf565b906117d4565b61163461334e565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161172c9116612896565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261175e92900416612896565b905292915050565b5f6001600160ff1b0382111561178f5760405163396ea70160e11b815260040160405180910390fd5b5090565b61179c81612903565b610c0a57604051635044b7f560e01b815260040160405180910390fd5b5f825f1904841183021582026117cd575f80fd5b5091020490565b5f61008d83670de0b6b3a7640000846117b9565b5f838152600a602090815260408083206001600160a01b0386168452909152812080548392906118199084906134bc565b90915550505f838152600b60205260408120805483929061183b9084906134bc565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6113f7826004612255565b5f8183136118a7578261008d565b50919050565b5f806118b9848461260e565b9092509050806118cb576118cb612a97565b5092915050565b5f6001600160801b0382111561178f57604051630f0af95160e11b815260040160405180910390fd5b5f60016001607f1b0319821280611918575060016001607f1b0382135b1561178f5760405163a5353be560e01b815260040160405180910390fd5b5f610075826119468588886117b9565b90612ab0565b5f8060405163350b944160e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018490525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303815f875af11580156119d9573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119fd9190613756565b905080611a1d576040516312171d8360e31b815260040160405180910390fd5b50505050565b5f610c2d670de0b6b3a7640000612b1f565b5f611a408284613785565b61008d90846134cf565b5f83815260086020526040902054600160801b90046001600160801b0316808303611a755750505050565b5f848152600860205260408120546001600160801b031690819003611acd57611a9d836118d2565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611b4a565b611b1e611b19670de0b6b3a7640000611ae688866134cf565b611af09190613673565b85670de0b6b3a7640000611b04878a6134cf565b611b0e9190613673565b859291906001612b4a565b6118d2565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611b53846118d2565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f8183116118a7578261008d565b6006545f908190611bb3908490600160801b90046001600160801b0316611fe9565b6006546201000090046001600160701b03169250905081811115611d29575f611bdc83836134cf565b9050611beb611b198286612be4565b60068054601090611c0d908490600160801b90046001600160801b0316613798565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611c4585836117d490919063ffffffff16565b90505f611c72827f0000000000000000000000000000000000000000000000000000000000000000611fe9565b90508060095f828254611c8591906134bc565b90915550611c95905081836134cf565b9150611ca0826118d2565b600280545f90611cba9084906001600160801b03166136d5565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ce782612bf8565b600480545f90611cfb908490600f0b6137b8565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b03821115611d575760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f80611d6e87856117d4565b91505f611d9b837f0000000000000000000000000000000000000000000000000000000000000000611fe9565b9050611dc7817f0000000000000000000000000000000000000000000000000000000000000000611fe9565b91508315611dea57611dd982826134cf565b611de390846134cf565b9250611e01565b611df482826134cf565b611dfe90846134bc565b92505b86861015611e2457611e148387896117b9565b9250611e218287896117b9565b91505b509550959350505050565b600454600160801b90046001600160801b0316611e77611b1982611e5b670de0b6b3a764000086613673565b600554600160801b90046001600160801b031691908a5f612b4a565b600580546001600160801b03928316600160801b029216919091179055611e9d866118d2565b611ea79082613798565b600480546001600160801b03928316600160801b029216919091179055611ecd846118d2565b600280545f90611ee79084906001600160801b03166136d5565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f14836118fb565b600480545f90611f28908490600f0b6137b8565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611f58856118d2565b60028054601090611f7a908490600160801b90046001600160801b0316613798565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80611fb7846116268a888a6117b9565b9050611fc48884866117b9565b611fce90826134bc565b905086811115611fde5786810391505b509695505050505050565b5f61008d8383670de0b6b3a76400006117b9565b5f6001600160701b0382111561178f5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061206857507f000000000000000000000000000000000000000000000000000000000000000061206685836134cf565b105b1561207557612075612a97565b6004549084900390600f0b61208a84826136f5565b90508361209686611766565b1380156120cb57507f00000000000000000000000000000000000000000000000000000000000000006120c983836118ad565b105b156120d8576120d8612a97565b600354600160801b90046001600160801b0316612119611b1982612104670de0b6b3a764000088613673565b6005546001600160801b031691908c5f612b4a565b600580546001600160801b0319166001600160801b039290921691909117905561214388826134cf565b905061214e816118d2565b600380546001600160801b03928316600160801b029216919091179055612174836118d2565b600280546001600160801b0319166001600160801b039290921691909117905561219d826118fb565b600480546001600160801b0319166001600160801b03929092169190911790556121c6876118d2565b600280546010906121e8908490600160801b90046001600160801b03166136d5565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461223190611b19906001600160801b03168484612801565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543549091829161229f916001600160801b0316906134cf565b9050805f036122b25760019150506113f7565b5f6122bc85612c21565b9050805f036122d0576001925050506113f7565b5f806122dd838589612cbc565b91509150806122f2575f9450505050506113f7565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b815260040161232d9291906137e5565b6040805180830381865af4158015612347573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061236b919061385a565b9150915061238961237b82611766565b6123849061387c565b612903565b92508261239e575f96505050505050506113f7565b6123a7826118d2565b600780545f906123c19084906001600160801b03166136d5565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506123ee816118d2565b60078054601090612410908490600160801b90046001600160801b03166136d5565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61246b8761162c565b6040518263ffffffff1660e01b81526004016124879190613560565b6040805180830381865af41580156124a1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906124c59190613896565b91509150806124da57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161253f916134bc565b61254991906134cf565b9050805f0361255f57505f958695509350505050565b5f80871161256d575f612578565b6125788488846117b9565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff8111156125a9576125a96138c4565b6040519080825280601f01601f1916602001820160405280156125d3576020820181803683370190505b5090505f808751602089018b8e8ef191503d9250868311156125f3578692505b828152825f602083013e9093509150505b9550959350505050565b5f805f8361261b86611766565b61262591906136f5565b90505f81121561263b575f809250925050610d21565b946001945092505050565b5f805f6126568888888888612e2b565b90505f612680670de0b6b3a764000061266f8888612be4565b61267991906134bc565b83906117d4565b9050670de0b6b3a764000081106126b4576126ad6126a6670de0b6b3a7640000896117d4565b8290612ab0565b90506126cc565b6126c96126a6670de0b6b3a764000089612be4565b90505b6126d681866117d4565b9050888110156126ed575f80935093505050612604565b97909703976001975095505050505050565b5f805f61270f8989888888612e59565b9050612729866119466127228a8d6134bc565b8790611fe9565b9850612736858a866117b9565b98508881101561274c575f8092509250506115f6565b888103670de0b6b3a7640000811061277a576127736126a6670de0b6b3a764000089612be4565b9050612792565b61278f6126a6670de0b6b3a7640000896117d4565b90505b808910156127a7575f809350935050506115f6565b90970398600198509650505050505050565b5f805f805f6127c9898789612e7d565b90925090506127d882896134cf565b97505f6127e682888a6117b9565b90506127f2818b6134cf565b9a989950979650505050505050565b5f8061280d845f612f02565b612817845f612f02565b61282191906136f5565b90505f81131561283c5761283581866134bc565b945061285a565b5f81121561285a5761284d8161387c565b61285790866134cf565b94505b50929392505050565b5f61008d8383670de0b6b3a76400005b5f825f190484118302158202612887575f80fd5b50910281810615159190040190565b5f80670de0b6b3a76400006128a9610d28565b6128b39190613673565b90508083116128c2575f6128cc565b6128cc81846134cf565b915061008d612679670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613673565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af41580156129b9573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906129dd91906138d8565b9350935093509350806129f857505f98975050505050505050565b868414612a2957612a08846118d2565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612a5a57612a39836118fb565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612a8857612a6a826118d2565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f815f03612ac75750670de0b6b3a76400006113f7565b825f03612ad557505f6113f7565b5f612adf83611766565b90505f612af3612aee86611766565b612f17565b9050818102612b0a670de0b6b3a764000082613916565b9050612b158161313c565b9695505050505050565b5f6113f77f0000000000000000000000000000000000000000000000000000000000000000836132ce565b5f825f03612b59575084610075565b8115612bab57612b8a612b6c84876134bc565b612b768587611fe9565b612b80888a611fe9565b61162691906134bc565b90505f612b978588611b83565b905080821015612ba5578091505b50610075565b828503612bb957505f610075565b610072612bc684876134cf565b612bd08587612863565b612bda888a611fe9565b61162691906134cf565b5f61008d83670de0b6b3a764000084612873565b5f60016001607f1b0382111561178f5760405163a5353be560e01b815260040160405180910390fd5b6003545f908190612c3b906001600160801b031684612be4565b9050612c677f0000000000000000000000000000000000000000000000000000000000000000826134bc565b6002546001600160801b031611156118a7576002547f000000000000000000000000000000000000000000000000000000000000000090612cb29083906001600160801b03166134cf565b61008d91906134cf565b612cc46133a3565b5f80612ccf8461162c565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612d099190613560565b6040805180830381865af4158015612d23573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612d479190613896565b9350905082612d5b57505f9150612e239050565b5f612d7c6115b8846101600151856101400151611fe990919063ffffffff16565b612d9c6115b885610120015186610100015161286390919063ffffffff16565b612da691906136f5565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b5f612e368585612ab0565b612e4f612e4786611946868b611fe9565b8590856117b9565b61007291906134bc565b5f612e648585612ab0565b612e4f612e7586611946868b612863565b859085612873565b5f80612ecc85612ec685817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612ebc818c612be4565b612ec691906134cf565b90612863565b9150612ef8827f0000000000000000000000000000000000000000000000000000000000000000611fe9565b9050935093915050565b5f818313612f10578161008d565b5090919050565b5f808213612f385760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612fbb9084901c611766565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361315557505f919050565b680755bf798b4a1bf1e5821261317e576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612b1574029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611766565b5f806132d9846132e5565b90506113af8382611fe9565b5f80826001600160a01b03166396f0bd616040518163ffffffff1660e01b81526004016040805180830381865afa158015613322573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190613346919061385a565b509392505050565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061012001604052806133b761334e565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f606082840312156118a7575f80fd5b5f805f805f60a08688031215613411575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115613443575f80fd5b61344f888289016133ed565b9150509295509295909350565b5f805f6060848603121561346e575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115613492575f80fd5b61349e868287016133ed565b9150509250925092565b634e487b7160e01b5f52601160045260245ffd5b808201808211156113f7576113f76134a8565b818103818111156113f7576113f76134a8565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016113f782846134e2565b5f6020828403121561357f575f80fd5b5051919050565b6001600160a01b0381168114610c0a575f80fd5b5f602082840312156135aa575f80fd5b813561008d81613586565b8015158114610c0a575f80fd5b5f602082840312156135d2575f80fd5b813561008d816135b5565b5f808335601e198436030181126135f2575f80fd5b83018035915067ffffffffffffffff82111561360c575f80fd5b602001915036819003821315610d21575f80fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e08301375f81830160e090810191909152601f909201601f191601019695505050505050565b80820281158282048414176113f7576113f76134a8565b5f805f6060848603121561369c575f80fd5b8351925060208401519150604084015190509250925092565b6001600160701b038181168382160190808211156118cb576118cb6134a8565b6001600160801b038181168382160190808211156118cb576118cb6134a8565b8181035f8312801583831316838312821617156118cb576118cb6134a8565b5f60208284031215613724575f80fd5b815161008d81613586565b8082018281125f83128015821682158216171561374e5761374e6134a8565b505092915050565b5f60208284031215613766575f80fd5b815161008d816135b5565b634e487b7160e01b5f52601260045260245ffd5b5f8261379357613793613771565b500690565b6001600160801b038281168282160390808211156118cb576118cb6134a8565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156113f7576113f76134a8565b5f6102a0820190506137f88285516134e2565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f806040838503121561386b575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613890576138906134a8565b505f0390565b5f80604083850312156138a7575f80fd5b8251915060208301516138b9816135b5565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f805f80608085870312156138eb575f80fd5b845193506020850151925060408501519150606085015161390b816135b5565b939692955090935050565b5f8261392457613924613771565b600160ff1b82145f198414161561393d5761393d6134a8565b50059056fea264697066735822122094312e6095c3f8c3bc7bbcc9e2b97f76c2982a6067293e8ee56f615eb947fb7e64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
  "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
} as const
};
