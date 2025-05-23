export const EETHTarget3 = {
  name: 'EETHTarget3' as const,
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
        "name": "_liquidityPool",
        "type": "address",
        "internalType": "contract ILiquidityPool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "_liquidityPool",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract ILiquidityPool"
      }
    ],
    "stateMutability": "view"
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
  bytecode: '0x6102a060405234801562000011575f80fd5b5060405162004026380380620040268339810160408190526200003491620001ac565b60015f5582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815190920151909152805160409081015161016052905160609081015161018052908501518216610240529093015161026052908216610220521661028052620002f8565b60405161020081016001600160401b03811182821017156200011957634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b038116811462000136575f80fd5b919050565b5f608082840312156200014c575f80fd5b604051608081016001600160401b03811182821017156200017b57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a0811215620001c1575f80fd5b61026080821215620001d1575f80fd5b620001db620000e9565b9150620001e8866200011f565b8252620001f8602087016200011f565b60208301526200020b604087016200011f565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620002768188016200011f565b908301526101806200028a8782016200011f565b908301526101a06200029e8782016200011f565b908301526101c0620002b28782016200011f565b908301526101e0620002c7888883016200013b565b8184015250819450620002dc8187016200011f565b93505050620002ef61028085016200011f565b90509250925092565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613b55620004d15f395f818160480152818161199c0152612c8901525f50505f50505f81816112d101526119cc01525f81816103470152818161037601526103a301525f8181610128015281816105e501526116e701525f818161087901528181610964015281816109f401528181610af9015281816115b9015281816116c1015281816121a10152818161220401528181612aad01528181612dc70152612e0301525f8181610188015281816108e901528181610e8f01528181611482015281816114e50152818161152a015261169b01525f611db201525f8181611f07015261305201525f818161104c0152611edb01525f61300801525f81816101ca0152818161093c01528181610eb001528181611452015281816114b50152818161154b015261170d01525f81816101a90152818161027e0152818161031c015281816107240152818161091601528181610f8a0152612a4301525f81816102dc01528181610d5501528181610dcc01528181610e4001528181610f0b0152610f4301525f8181611af60152612caa01525f5050613b555ff3fe608060405260043610610033575f3560e01c8063207deba0146100375780634c2ac1d91461008757806377d05ff4146100a8575b5f80fd5b348015610042575f80fd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b61009a6100953660046135da565b6100bb565b60405190815260200161007e565b61009a6100b6366004613639565b6100d5565b5f6100c986868686866100eb565b90505b95945050505050565b5f6100e184848461082d565b90505b9392505050565b5f6100f4610bd3565b600654610100900460ff161561011d576040516321081abf60e01b815260040160405180910390fd5b61012682610bfb565b7f00000000000000000000000000000000000000000000000000000000000000008610156101675760405163211ddda360e11b815260040160405180910390fd5b5f6101ee610173610c33565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c58565b9050848110806101fd57508381115b1561021b57604051633b61151160e11b815260040160405180910390fd5b5f806102278986610c7d565b915091505f610234610d4e565b9050610244818360046001610d79565b506002546004546003545f9283926102ad926001600160801b0380841693600f9390930b92600160801b90048116918991166102a86102a37f00000000000000000000000000000000000000000000000000000000000000008b613699565b6113dd565b611423565b91509150806102cf57604051630552b01360e31b815260040160405180910390fd5b8b5f6103406008826103017f0000000000000000000000000000000000000000000000000000000000000000896136ac565b815260208101919091526040015f20546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000611627565b905061036c7f000000000000000000000000000000000000000000000000000000000000000082613699565b8811806103cb57507f0000000000000000000000000000000000000000000000000000000000000000811180156103cb57506103c87f0000000000000000000000000000000000000000000000000000000000000000826136ac565b88105b156103e957604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543549091610434916001600160801b03909116906136ac565b5f808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061046e908390613699565b90505f805f61047c8a611652565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa156906104b690849060040161373d565b602060405180830381865af41580156104d1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104f5919061374c565b91506105086105038c61178c565b6117b9565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa156916105699185910161373d565b602060405180830381865af4158015610584573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105a8919061374c565b9250818310156105cb5760405163184d952160e11b815260040160405180910390fd5b6105e184836105da81876136ac565b91906117df565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156106245760405163211ddda360e11b815260040160405180910390fd5b508f610630868e6117fa565b101561064f5760405163c972651760e01b815260040160405180910390fd5b61066b5f8e5f0160208101906106659190613777565b8e61180e565b610674896118b3565b95508561069457604051638bdf918d60e01b815260040160405180910390fd5b5f8890505f8d9050368f90505f8c90505f61074e60025f015f9054906101000a90046001600160801b03166001600160801b0316600280015f9054906101000a9004600f0b600f0b60025f0160109054906101000a90046001600160801b03166001600160801b03168560026001015f9054906101000a90046001600160801b03166001600160801b03166102a87f00000000000000000000000000000000000000000000000000000000000000008c6102a39190613699565b9b5090508a158061076757506107648c5f6118bf565b81125b1561078557604051630552b01360e31b815260040160405180910390fd5b5f881561079c5761079787848b6117df565b61079e565b5f5b90506107ad6020850185613777565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d866107ea60408a0160208b0161379f565b866107f860408c018c6137ba565b60405161080b97969594939291906137fd565b60405180910390a250505050505050505050505050505050506100cc60015f55565b5f610836610bd3565b61083f82610bfb565b60065460ff161561086357604051637983c05160e01b815260040160405180910390fd5b5f8061086f8685610c7d565b909250905061089f7f00000000000000000000000000000000000000000000000000000000000000006002613850565b8210156108bf57604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393505f908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af41580156109c8573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109ec9190613867565b9250925092507f0000000000000000000000000000000000000000000000000000000000000000610a1d84846118d3565b1015610a3c5760405163216f4ab160e21b815260040160405180910390fd5b5f80610a4c858585895f80611423565b91509150801580610a5c57505f82125b15610a7a57604051630552b01360e31b815260040160405180910390fd5b610a83856118f8565b600280546001600160801b0319166001600160801b0392909216919091179055610aac84611921565b600480546001600160801b0319166001600160801b0392909216919091179055610ad5836118f8565b600280546001600160801b03928316600160801b029216919091179055610b1d5f807f000000000000000000000000000000000000000000000000000000000000000061180e565b610b345f610b2e60208c018c613777565b8a61180e565b610b49610b3f610d4e565b8760046001610d79565b508a8a8a610b5a6020820182613777565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b97604087016020880161379f565b87610ba560408901896137ba565b604051610bb897969594939291906137fd565b60405180910390a2505050505050505050506100e460015f55565b60025f5403610bf557604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f610c096020830183613777565b6001600160a01b031603610c305760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6002546004545f91610c53916001600160801b0390911690600f0b6118d3565b905090565b5f80610c668787878661195c565b9050610c728185611627565b979650505050505050565b815f80610c90604085016020860161379f565b15610cb557610cab85610ca660408701876137ba565b611972565b9093509050610ccd565b5034610ccd85610cc860408701876137ba565b611abd565b610cd5611b87565b91508015610d45576040515f90339083908381818185875af1925050503d805f8114610d1c576040519150601f19603f3d011682016040523d82523d5f602084013e610d21565b606091505b5050905080610d43576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f610c53427f0000000000000000000000000000000000000000000000000000000000000000611b99565b5f84815260086020526040812060018101546001600160801b0316151580610da057504286115b15610db957600101546001600160801b031690506113d5565b5f805f610dc4610d4e565b90505f610df17f00000000000000000000000000000000000000000000000000000000000000008b613699565b90505b81811015610e65575f818152600860205260409020600101546001600160801b03168015610e3d575f828152600860205260409020549094506001600160801b03169250610e65565b507f000000000000000000000000000000000000000000000000000000000000000001610df4565b835f03610ed757889350610ed4610e7a610c33565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061195c565b92505b50610ee1836118f8565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f37610f307f00000000000000000000000000000000000000000000000000000000000000008b6136ac565b8a84611bae565b610f7589610f6f610f687f000000000000000000000000000000000000000000000000000000000000000083613699565b4290611ce7565b84611bae565b610f7e88611cf5565b505f9050600881610faf7f00000000000000000000000000000000000000000000000000000000000000008d6136ac565b815260208101919091526040015f908120600101546001600160801b03169150610fda60028c611e92565b5f818152600b60205260408120549192508c8c831561111b57600192505f8061100686898d865f611ec6565b915091508060095f82825461101b9190613699565b909155506110369050865f846110308161178c565b88611f93565b6110408183613699565b915061107086838a8e877f000000000000000000000000000000000000000000000000000000000000000061210a565b915061108461107f838561214d565b612161565b600680546002906110a59084906201000090046001600160701b0316613892565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110d2826118f8565b600680546010906110f4908490600160801b90046001600160801b03166138b2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f611127600184611e92565b5f818152600b6020526040902054909150801561123257600194505f80611152838b8f886001611ec6565b915091508060095f8282546111679190613699565b909155506111829050835f8461117c8161178c565b8a61218a565b61118c81836136ac565b915061119b61107f838761214d565b600680546002906111bc9084906201000090046001600160701b0316613892565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506111e9826118f8565b6006805460109061120b908490600160801b90046001600160801b03166138b2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b841561126b5761125d6112448761178c565b61124d8361178c565b61125791906138d2565b5f61237a565b8e61126884826123b9565b50505b5f611275846125a8565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa15801561132b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061134f91906138f1565b90506001600160a01b038116156113c3576113c05a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b038616939291906126ea565b50505b509b9d50505050505050505050505050505b949350505050565b5f611402600b5f6113ef600286611e92565b81526020019081526020015f205461178c565b611413600b5f6113ef600187611e92565b61141d91906138d2565b92915050565b5f805f806114318a8a612772565b9150915080611447575f8093509350505061161c565b5f6114a6838a61147f7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006136ac565b8b7f00000000000000000000000000000000000000000000000000000000000000006127aa565b5090505f611509848b846114e27f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006136ac565b8d7f0000000000000000000000000000000000000000000000000000000000000000612863565b509050811580611517575080155b1561152257505f9050805b5f61156f858c7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061195c565b905061157d83838c8461291d565b509093505f905061158e848f613699565b90505f6115ae8b8b61159f8761178c565b6115a9908e61390c565b612965565b90508b6115e36115de7f0000000000000000000000000000000000000000000000000000000000000000836129c7565b61178c565b6115ec8361178c565b6115f96115de868561214d565b61160391906138d2565b61160d91906138d2565b60019950995050505050505050505b965096945050505050565b5f6100e461163a84846301e133806129d7565b61164c85670de0b6b3a76400006136ac565b906117fa565b61165a61352b565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161175291166129fa565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192611784929004166129fa565b905292915050565b5f6001600160ff1b038211156117b55760405163396ea70160e11b815260040160405180910390fd5b5090565b6117c281612a67565b610c3057604051635044b7f560e01b815260040160405180910390fd5b5f825f1904841183021582026117f3575f80fd5b5091020490565b5f6100e483670de0b6b3a7640000846117df565b5f838152600a602090815260408083206001600160a01b03861684529091528120805483929061183f908490613699565b90915550505f838152600b602052604081208054839290611861908490613699565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f61141d8260046123b9565b5f8183136118cd57826100e4565b50919050565b5f806118df8484612772565b9092509050806118f1576118f1612bfb565b5092915050565b5f6001600160801b038211156117b557604051630f0af95160e11b815260040160405180910390fd5b5f60016001607f1b031982128061193e575060016001607f1b0382135b156117b55760405163a5353be560e01b815260040160405180910390fd5b5f6100cc8261196c8588886117df565b90612c14565b5f8084341015611995576040516312171d8360e31b815260040160405180910390fd5b84340390507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f340fa01867f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a26573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611a4a91906138f1565b6040516001600160e01b031960e085901b1681526001600160a01b03909116600482015260240160206040518083038185885af1158015611a8d573d5f803e3d5ffd5b50505050506040513d601f19601f82011682018060405250810190611ab2919061374c565b91505b935093915050565b5f611ac784612c83565b6040516323b872dd60e01b8152336004820152306024820152604481018290529091505f906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd906064016020604051808303815f875af1158015611b3c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b609190613933565b905080611b80576040516312171d8360e31b815260040160405180910390fd5b5050505050565b5f610c53670de0b6b3a7640000612c83565b5f611ba48284613962565b6100e490846136ac565b5f83815260086020526040902054600160801b90046001600160801b0316808303611bd95750505050565b5f848152600860205260408120546001600160801b031690819003611c3157611c01836118f8565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611cae565b611c82611c7d670de0b6b3a7640000611c4a88866136ac565b611c549190613850565b85670de0b6b3a7640000611c68878a6136ac565b611c729190613850565b859291906001612ccf565b6118f8565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611cb7846118f8565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f8183116118cd57826100e4565b6006545f908190611d17908490600160801b90046001600160801b031661214d565b6006546201000090046001600160701b03169250905081811115611e8d575f611d4083836136ac565b9050611d4f611c7d8286612d69565b60068054601090611d71908490600160801b90046001600160801b0316613975565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611da985836117fa90919063ffffffff16565b90505f611dd6827f000000000000000000000000000000000000000000000000000000000000000061214d565b90508060095f828254611de99190613699565b90915550611df9905081836136ac565b9150611e04826118f8565b600280545f90611e1e9084906001600160801b03166138b2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e4b82612d7d565b600480545f90611e5f908490600f0b613995565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b03821115611ebb5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f80611ed287856117fa565b91505f611eff837f000000000000000000000000000000000000000000000000000000000000000061214d565b9050611f2b817f000000000000000000000000000000000000000000000000000000000000000061214d565b91508315611f4e57611f3d82826136ac565b611f4790846136ac565b9250611f65565b611f5882826136ac565b611f629084613699565b92505b86861015611f8857611f788387896117df565b9250611f858287896117df565b91505b509550959350505050565b600454600160801b90046001600160801b0316611fdb611c7d82611fbf670de0b6b3a764000086613850565b600554600160801b90046001600160801b031691908a5f612ccf565b600580546001600160801b03928316600160801b029216919091179055612001866118f8565b61200b9082613975565b600480546001600160801b03928316600160801b029216919091179055612031846118f8565b600280545f9061204b9084906001600160801b03166138b2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061207883611921565b600480545f9061208c908490600f0b613995565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506120bc856118f8565b600280546010906120de908490600160801b90046001600160801b0316613975565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f8061211b8461164c8a888a6117df565b90506121288884866117df565b6121329082613699565b9050868111156121425786810391505b509695505050505050565b5f6100e48383670de0b6b3a76400006117df565b5f6001600160701b038211156117b55760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b0316838110806121cc57507f00000000000000000000000000000000000000000000000000000000000000006121ca85836136ac565b105b156121d9576121d9612bfb565b6004549084900390600f0b6121ee84826138d2565b9050836121fa8661178c565b13801561222f57507f000000000000000000000000000000000000000000000000000000000000000061222d83836118d3565b105b1561223c5761223c612bfb565b600354600160801b90046001600160801b031661227d611c7d82612268670de0b6b3a764000088613850565b6005546001600160801b031691908c5f612ccf565b600580546001600160801b0319166001600160801b03929092169190911790556122a788826136ac565b90506122b2816118f8565b600380546001600160801b03928316600160801b0292169190911790556122d8836118f8565b600280546001600160801b0319166001600160801b039290921691909117905561230182611921565b600480546001600160801b0319166001600160801b039290921691909117905561232a876118f8565b6002805460109061234c908490600160801b90046001600160801b03166138b2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461239590611c7d906001600160801b03168484612965565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291612403916001600160801b0316906136ac565b9050805f0361241657600191505061141d565b5f61242085612da6565b9050805f036124345760019250505061141d565b5f80612441838589612e41565b9150915080612456575f94505050505061141d565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016124919291906139c2565b6040805180830381865af41580156124ab573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906124cf9190613a37565b915091506124ed6124df8261178c565b6124e890613a59565b612a67565b925082612502575f965050505050505061141d565b61250b826118f8565b600780545f906125259084906001600160801b03166138b2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612552816118f8565b60078054601090612574908490600160801b90046001600160801b03166138b2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6125cf87611652565b6040518263ffffffff1660e01b81526004016125eb919061373d565b6040805180830381865af4158015612605573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906126299190613a73565b915091508061263e57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916126a391613699565b6126ad91906136ac565b9050805f036126c357505f958695509350505050565b5f8087116126d1575f6126dc565b6126dc8488846117df565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561270d5761270d613aa1565b6040519080825280601f01601f191660200182016040528015612737576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612757578692505b828152825f602083013e9093509150505b9550959350505050565b5f805f8361277f8661178c565b61278991906138d2565b90505f81121561279f575f809250925050610d47565b946001945092505050565b5f805f6127ba8888888888612fa9565b90505f6127e4670de0b6b3a76400006127d38888612d69565b6127dd9190613699565b83906117fa565b9050670de0b6b3a764000081106128185761281161280a670de0b6b3a7640000896117fa565b8290612c14565b9050612830565b61282d61280a670de0b6b3a764000089612d69565b90505b61283a81866117fa565b905088811015612851575f80935093505050612768565b97909703976001975095505050505050565b5f805f6128738989888888612fd7565b905061288d8661196c6128868a8d613699565b879061214d565b985061289a858a866117df565b9850888110156128b0575f80925092505061161c565b888103670de0b6b3a764000081106128de576128d761280a670de0b6b3a764000089612d69565b90506128f6565b6128f361280a670de0b6b3a7640000896117fa565b90505b8089101561290b575f8093509350505061161c565b90970398600198509650505050505050565b5f805f805f61292d898789612ffb565b909250905061293c82896136ac565b97505f61294a82888a6117df565b9050612956818b6136ac565b9a989950979650505050505050565b5f80612971845f613080565b61297b845f613080565b61298591906138d2565b90505f8113156129a0576129998186613699565b94506129be565b5f8112156129be576129b181613a59565b6129bb90866136ac565b94505b50929392505050565b5f6100e48383670de0b6b3a76400005b5f825f1904841183021582026129eb575f80fd5b50910281810615159190040190565b5f80670de0b6b3a7640000612a0d610d4e565b612a179190613850565b9050808311612a26575f612a30565b612a3081846136ac565b91506100e46127dd670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613850565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b1d573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612b419190613ab5565b935093509350935080612b5c57505f98975050505050505050565b868414612b8d57612b6c846118f8565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612bbe57612b9d83611921565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612bec57612bce826118f8565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f815f03612c2b5750670de0b6b3a764000061141d565b825f03612c3957505f61141d565b5f612c438361178c565b90505f612c57612c528661178c565b613095565b9050818102612c6e670de0b6b3a764000082613af3565b9050612c79816132ba565b9695505050505050565b5f61141d7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008461344c565b5f825f03612cde5750846100cc565b8115612d3057612d0f612cf18487613699565b612cfb858761214d565b612d05888a61214d565b61164c9190613699565b90505f612d1c8588611ce7565b905080821015612d2a578091505b506100cc565b828503612d3e57505f6100cc565b6100c9612d4b84876136ac565b612d5585876129c7565b612d5f888a61214d565b61164c91906136ac565b5f6100e483670de0b6b3a7640000846129d7565b5f60016001607f1b038211156117b55760405163a5353be560e01b815260040160405180910390fd5b6003545f908190612dc0906001600160801b031684612d69565b9050612dec7f000000000000000000000000000000000000000000000000000000000000000082613699565b6002546001600160801b031611156118cd576002547f000000000000000000000000000000000000000000000000000000000000000090612e379083906001600160801b03166136ac565b6100e491906136ac565b612e49613580565b5f80612e5484611652565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612e8e919061373d565b6040805180830381865af4158015612ea8573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612ecc9190613a73565b9350905082612ee057505f9150611ab59050565b5f612f016115de84610160015185610140015161214d90919063ffffffff16565b612f216115de8561012001518661010001516129c790919063ffffffff16565b612f2b91906138d2565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b5f612fb48585612c14565b612fcd612fc58661196c868b61214d565b8590856117df565b6100c99190613699565b5f612fe28585612c14565b612fcd612ff38661196c868b6129c7565b8590856129d7565b5f8061304a8561304485817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061303a818c612d69565b61304491906136ac565b906129c7565b9150613076827f000000000000000000000000000000000000000000000000000000000000000061214d565b9050935093915050565b5f81831361308e57816100e4565b5090919050565b5f8082136130b65760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906131399084901c61178c565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e1982136132d357505f919050565b680755bf798b4a1bf1e582126132fc576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612c7974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61178c565b5f80836001600160a01b0316633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa15801561348a573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906134ae919061374c565b9050805f036134c0575f9150506100e4565b6100cc856001600160a01b03166337cfdaca6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156134ff573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190613523919061374c565b8490836117df565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b60405180610120016040528061359461352b565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f606082840312156118cd575f80fd5b5f805f805f60a086880312156135ee575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115613620575f80fd5b61362c888289016135ca565b9150509295509295909350565b5f805f6060848603121561364b575f80fd5b8335925060208401359150604084013567ffffffffffffffff81111561366f575f80fd5b61367b868287016135ca565b9150509250925092565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561141d5761141d613685565b8181038181111561141d5761141d613685565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b610180810161141d82846136bf565b5f6020828403121561375c575f80fd5b5051919050565b6001600160a01b0381168114610c30575f80fd5b5f60208284031215613787575f80fd5b81356100e481613763565b8015158114610c30575f80fd5b5f602082840312156137af575f80fd5b81356100e481613792565b5f808335601e198436030181126137cf575f80fd5b83018035915067ffffffffffffffff8211156137e9575f80fd5b602001915036819003821315610d47575f80fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e08301375f81830160e090810191909152601f909201601f191601019695505050505050565b808202811582820484141761141d5761141d613685565b5f805f60608486031215613879575f80fd5b8351925060208401519150604084015190509250925092565b6001600160701b038181168382160190808211156118f1576118f1613685565b6001600160801b038181168382160190808211156118f1576118f1613685565b8181035f8312801583831316838312821617156118f1576118f1613685565b5f60208284031215613901575f80fd5b81516100e481613763565b8082018281125f83128015821682158216171561392b5761392b613685565b505092915050565b5f60208284031215613943575f80fd5b81516100e481613792565b634e487b7160e01b5f52601260045260245ffd5b5f826139705761397061394e565b500690565b6001600160801b038281168282160390808211156118f1576118f1613685565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561141d5761141d613685565b5f6102a0820190506139d58285516136bf565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613a48575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613a6d57613a6d613685565b505f0390565b5f8060408385031215613a84575f80fd5b825191506020830151613a9681613792565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f805f8060808587031215613ac8575f80fd5b8451935060208501519250604085015191506060850151613ae881613792565b939692955090935050565b5f82613b0157613b0161394e565b600160ff1b82145f1984141615613b1a57613b1a613685565b50059056fea26469706673582212204442c3eda2a6f096d77ed7a23fb0bf1e50b232c55d90611835b6ef96e5674e0264736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "_liquidityPool()": "207deba0",
  "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
  "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
} as const
};
