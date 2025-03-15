export const AerodromeLpTarget2 = {
  name: 'AerodromeLpTarget2' as const,
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
        "name": "_gauge",
        "type": "address",
        "internalType": "contract IGauge"
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
  },
  {
    "type": "error",
    "name": "UnsupportedToken",
    "inputs": []
  }
] as const,
  bytecode: '0x6102a060405234801562000011575f80fd5b5060405162004211380380620042118339810160408190526200003491620001ac565b60015f5582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815190920151909152805160409081015161016052905160609081015161018052908501518216610240529093015161026052908216610220521661028052620002f8565b60405161020081016001600160401b03811182821017156200011957634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b038116811462000136575f80fd5b919050565b5f608082840312156200014c575f80fd5b604051608081016001600160401b03811182821017156200017b57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a0811215620001c1575f80fd5b61026080821215620001d1575f80fd5b620001db620000e9565b9150620001e8866200011f565b8252620001f8602087016200011f565b60208301526200020b604087016200011f565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620002768188016200011f565b908301526101806200028a8782016200011f565b908301526101a06200029e8782016200011f565b908301526101c0620002b28782016200011f565b908301526101e0620002c7888883016200013b565b8184015250819450620002dc8187016200011f565b93505050620002ef61028085016200011f565b90509250925092565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613d5f620004b25f395f81816116f8015261176901525f50505f50505f610c2801525f50505f818160f9015281816103020152612dab01525f818161152f01528181611d3301528181611d960152818161251d0152818161299b015281816129d701528181612bc80152612d8501525f81816107e601528181610d8201528181610dc401528181610eb60152818161131c0152818161137a0152612d5f01525f61195d01525f8181611a7e0152818161260e015281816126860152612ec301525f81816109a301528181610e370152818161141501528181611a52015261265a01525f8181610e16015281816125da0152612e7f01525f818161080701528181610d6001528181610de501528181610ed7015281816112fa0152818161139b0152612dd101525f81816101d301528181610396015281816108e1015261344f01525f81816106a7015281816107230152818161079701528181610862015261089a01525f50505f81816116cb015261172c0152613d5f5ff3fe608060405260043610610028575f3560e01c8063cba2e58d1461002c578063dbbe807014610058575b5f80fd5b61003f61003a3660046137e3565b61006b565b6040805192835260208301919091520160405180910390f35b61003f6100663660046137e3565b610087565b5f8061007986868686610095565b915091505b94509492505050565b5f80610079868686866102bc565b5f8061009f610531565b600654610100900460ff16156100c8576040516321081abf60e01b815260040160405180910390fd5b6100d0610559565b6100d98361057a565b5f806100e588866105b2565b90925090505f6100f58383610683565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101385760405163211ddda360e11b815260040160405180910390fd5b86821015610159576040516342af972b60e01b815260040160405180910390fd5b5f6101626106a0565b90506101728184600460016106d0565b505f805f6101808787610d34565b919a5091945090925090508b8810156101ac5760405163c972651760e01b815260040160405180910390fd5b8160095f8282546101bd9190613851565b909155506101ce9050844283610f13565b6101f87f000000000000000000000000000000000000000000000000000000000000000085613851565b98506102068389888c61104c565b5f61021260018b6111e3565b905061022b8161022560208e018e613878565b8b611217565b8d8a8a898e8561023e6020830183613878565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a86888661027b60408801602089016138a0565b8961028960408a018a6138bb565b60405161029c9796959493929190613926565b60405180910390a350909b50505050505050505050505061007e60015f55565b5f806102c6610531565b600654610100900460ff16156102ef576040516321081abf60e01b815260040160405180910390fd5b6102f7610559565b6103008361057a565b7f00000000000000000000000000000000000000000000000000000000000000008610156103415760405163211ddda360e11b815260040160405180910390fd5b5f61034a6112bc565b90508481101561036d576040516342af972b60e01b815260040160405180910390fd5b5f6103766106a0565b90505f61038e6103846106a0565b84600460016106d0565b90505f6103bb7f000000000000000000000000000000000000000000000000000000000000000084613851565b90505f805f806103cc8e89886112ce565b60098054949850929650909450925083915f906103ea908490613851565b909155506103fb9050874283610f13565b61040d610408858a611450565b611464565b610418906001613851565b9350505f61042784898d6114d8565b9050808d101561044a5760405163c972651760e01b815260040160405180910390fd5b610454818c6105b2565b508e905061046481858b89611509565b5f6104706002886111e3565b90508c61048a826104846020840184613878565b85611217565b858b868461049b6020860186613878565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d860408b0160208c016138a0565b6104ec896104e68a8d613966565b90610683565b8d6104fa60408e018e6138bb565b60405161050e989796959493929190613979565b60405180910390a350989d50939b50505050505050505050505061007e60015f55565b60025f540361055357604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b341561057857604051631574f9f360e01b815260040160405180910390fd5b565b5f6105886020830183613878565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b815f806105c560408501602086016138a0565b156105ea576105e0856105db60408701876138bb565b6116bc565b9093509050610602565b5034610602856105fd60408701876138bb565b6117d7565b61060a6112bc565b9150801561067a576040515f90339083908381818185875af1925050503d805f8114610651576040519150601f19603f3d011682016040523d82523d5f602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f6106978383670de0b6b3a76400006117f0565b90505b92915050565b5f6106cb427f000000000000000000000000000000000000000000000000000000000000000061180b565b905090565b5f84815260086020526040812060018101546001600160801b03161515806106f757504286115b1561071057600101546001600160801b03169050610d2c565b5f805f61071b6106a0565b90505f6107487f00000000000000000000000000000000000000000000000000000000000000008b613851565b90505b818110156107bc575f818152600860205260409020600101546001600160801b03168015610794575f828152600860205260409020549094506001600160801b031692506107bc565b507f00000000000000000000000000000000000000000000000000000000000000000161074b565b835f0361082e5788935061082b6107d1611820565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611840565b92505b506108388361185f565b6001850180546001600160801b0319166001600160801b039290921691909117905561088e6108877f00000000000000000000000000000000000000000000000000000000000000008b613966565b8a84610f13565b6108cc896108c66108bf7f000000000000000000000000000000000000000000000000000000000000000083613851565b429061188c565b84610f13565b6108d5886118a0565b505f90506008816109067f00000000000000000000000000000000000000000000000000000000000000008d613966565b815260208101919091526040015f908120600101546001600160801b0316915061093160028c6111e3565b5f818152600b60205260408120549192508c8c8315610a7257600192505f8061095d86898d865f611a3d565b915091508060095f8282546109729190613851565b9091555061098d9050865f8461098781611b0a565b88611b33565b6109978183613851565b91506109c786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611caa565b91506109db6109d68385610683565b611cf3565b600680546002906109fc9084906201000090046001600160701b03166139c0565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a298261185f565b60068054601090610a4b908490600160801b90046001600160801b03166139e0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610a7e6001846111e3565b5f818152600b60205260409020549091508015610b8957600194505f80610aa9838b8f886001611a3d565b915091508060095f828254610abe9190613851565b90915550610ad99050835f84610ad381611b0a565b8a611d1c565b610ae38183613966565b9150610af26109d68387610683565b60068054600290610b139084906201000090046001600160701b03166139c0565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b408261185f565b60068054601090610b62908490600160801b90046001600160801b03166139e0565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bc257610bb4610b9b87611b0a565b610ba483611b0a565b610bae9190613a00565b5f611f0c565b8e610bbf8482611f4b565b50505b5f610bcc8461213a565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c82573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ca69190613a1f565b90506001600160a01b03811615610d1a57610d175a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b0386169392919061227c565b50505b509b9d50505050505050505050505050505b949350505050565b5f805f805f610d41611820565b600254909150610da6908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612302565b600254909450610e09908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611840565b9150610e608785610e5b857f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061232d565b612391565b15610e6d57610e6d6123d2565b610e79878588856123eb565b91965094509250670de0b6b3a7640000610efb610e968784613851565b600254610eb4908890600160801b90046001600160801b0316613966565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611840565b1115610f0957610f096123d2565b5092959194509250565b5f83815260086020526040902054600160801b90046001600160801b0316808303610f3e5750505050565b5f848152600860205260408120546001600160801b031690819003610f9657610f668361185f565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611013565b610fe7610fe2670de0b6b3a7640000610faf8886613966565b610fb99190613a3a565b85670de0b6b3a7640000610fcd878a613966565b610fd79190613a3a565b859291906001612433565b61185f565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61101c8461185f565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661108e610fe282611078670de0b6b3a764000086613a3a565b6005546001600160801b03169190886001612433565b600580546001600160801b0319166001600160801b03929092169190911790556110b78561185f565b600280545f906110d19084906001600160801b03166139e0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110fe8461185f565b60028054601090611120908490600160801b90046001600160801b0316613a51565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061114d8461185f565b61115790826139e0565b600380546001600160801b03808416600160801b02911617905590505f61117d836124d7565b905061119b8161118c87611b0a565b6111969084613a71565b611f0c565b6111a484612517565b6111b0576111b06123d2565b5f6111ba85612576565b9050806111da57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b5f6001600160f81b0382111561120c5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290611248908490613851565b90915550505f838152600b60205260408120805483929061126a908490613851565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6106cb670de0b6b3a7640000611464565b5f805f805f6112db611820565b600254909150611340908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612582565b93508761134d85896125a2565b111561135b5761135b6123d2565b6002545f9081906113bf908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611840565b93506113d58a670de0b6b3a7640000868c6125b6565b509193509091506113e890508183613966565b6113f29087613966565b95508861143f816114398d611407868c613966565b8d61141287826126c2565b877f00000000000000000000000000000000000000000000000000000000000000006126d7565b906125a2565b975090945050505093509350935093565b5f61069783670de0b6b3a7640000846126f7565b60405163b88fed9f60e01b8152600481018290525f9073__$2547229b0150c03f930e3c2db66c5de7b3$__9063b88fed9f90602401602060405180830381865af41580156114b4573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061069a9190613a98565b5f6114e960408301602084016138a0565b156114f5575082611502565b6114ff848461271a565b90505b9392505050565b6002546001600160801b031683811015611525576115256123d2565b60045490849003907f00000000000000000000000000000000000000000000000000000000000000009061155d908390600f0b61272e565b101561156b5761156b6123d2565b6004546115b590610fe290600160801b90046001600160801b0316611598670de0b6b3a764000086613a3a565b600554600160801b90046001600160801b03169190896001612433565b600580546001600160801b03928316600160801b0292169190911790556115db8161185f565b600280546001600160801b0319166001600160801b03929092169190911790556116048561185f565b60028054601090611626908490600160801b90046001600160801b03166139e0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116538561185f565b60048054601090611675908490600160801b90046001600160801b03166139e0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f6116a3836124d7565b905061119b816116b288611b0a565b6111969084613a00565b5f806116f36001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612753565b6117537f0000000000000000000000000000000000000000000000000000000000000000611722876001613851565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691906127c0565b60405163b6b55f2560e01b8152600481018690527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b6b55f25906024015f604051808303815f87803b1580156117b2575f80fd5b505af11580156117c4573d5f803e3d5ffd5b50505050845f915091505b935093915050565b60405163350b944160e11b815260040160405180910390fd5b5f825f190484118302158202611804575f80fd5b5091020490565b5f6118168284613ac3565b6106979084613966565b6002546004545f916106cb916001600160801b0390911690600f0b61272e565b5f611856826118508588886117f0565b9061284f565b95945050505050565b5f6001600160801b0382111561188857604051630f0af95160e11b815260040160405180910390fd5b5090565b5f81831161189a5782610697565b50919050565b6006545f9081906118c2908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b03169250905081811115611a38575f6118eb8383613966565b90506118fa610fe28286611450565b6006805460109061191c908490600160801b90046001600160801b0316613a51565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611954858361271a90919063ffffffff16565b90505f611981827f0000000000000000000000000000000000000000000000000000000000000000610683565b90508060095f8282546119949190613851565b909155506119a490508183613966565b91506119af8261185f565b600280545f906119c99084906001600160801b03166139e0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506119f6826128b4565b600480545f90611a0a908490600f0b613ad6565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611a49878561271a565b91505f611a76837f0000000000000000000000000000000000000000000000000000000000000000610683565b9050611aa2817f0000000000000000000000000000000000000000000000000000000000000000610683565b91508315611ac557611ab48282613966565b611abe9084613966565b9250611adc565b611acf8282613966565b611ad99084613851565b92505b86861015611aff57611aef8387896117f0565b9250611afc8287896117f0565b91505b509550959350505050565b5f6001600160ff1b038211156118885760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611b7b610fe282611b5f670de0b6b3a764000086613a3a565b600554600160801b90046001600160801b031691908a5f612433565b600580546001600160801b03928316600160801b029216919091179055611ba18661185f565b611bab9082613a51565b600480546001600160801b03928316600160801b029216919091179055611bd18461185f565b600280545f90611beb9084906001600160801b03166139e0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c18836128dd565b600480545f90611c2c908490600f0b613ad6565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611c5c8561185f565b60028054601090611c7e908490600160801b90046001600160801b0316613a51565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80611cc184611cbb8a888a6117f0565b9061271a565b9050611cce8884866117f0565b611cd89082613851565b905086811115611ce85786810391505b509695505050505050565b5f6001600160701b038211156118885760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611d5e57507f0000000000000000000000000000000000000000000000000000000000000000611d5c8583613966565b105b15611d6b57611d6b6123d2565b6004549084900390600f0b611d808482613a00565b905083611d8c86611b0a565b138015611dc157507f0000000000000000000000000000000000000000000000000000000000000000611dbf838361272e565b105b15611dce57611dce6123d2565b600354600160801b90046001600160801b0316611e0f610fe282611dfa670de0b6b3a764000088613a3a565b6005546001600160801b031691908c5f612433565b600580546001600160801b0319166001600160801b0392909216919091179055611e398882613966565b9050611e448161185f565b600380546001600160801b03928316600160801b029216919091179055611e6a8361185f565b600280546001600160801b0319166001600160801b0392909216919091179055611e93826128dd565b600480546001600160801b0319166001600160801b0392909216919091179055611ebc8761185f565b60028054601090611ede908490600160801b90046001600160801b03166139e0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611f2790610fe2906001600160801b03168484612918565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611f95916001600160801b031690613966565b9050805f03611fa857600191505061069a565b5f611fb28561297a565b9050805f03611fc65760019250505061069a565b5f80611fd3838589612a15565b9150915080611fe8575f94505050505061069a565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401612023929190613b81565b6040805180830381865af415801561203d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120619190613bf6565b9150915061207f61207182611b0a565b61207a90613c18565b612b82565b925082612094575f965050505050505061069a565b61209d8261185f565b600780545f906120b79084906001600160801b03166139e0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506120e48161185f565b60078054601090612106908490600160801b90046001600160801b03166139e0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61216187612d16565b6040518263ffffffff1660e01b815260040161217d9190613c32565b6040805180830381865af4158015612197573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906121bb9190613c41565b91509150806121d057505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161223591613851565b61223f9190613966565b9050805f0361225557505f958695509350505050565b5f808711612263575f61226e565b61226e8488846117f0565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561229f5761229f613c6f565b6040519080825280601f01601f1916602001820160405280156122c9576020820181803683370190505b5090505f808751602089018b8e8ef191503d9250868311156122e9578692505b828152825f602083013e90999098509650505050505050565b5f61232287878761231b88670de0b6b3a7640000613966565b8787612e50565b979650505050505050565b5f6114ff61236d61234684670de0b6b3a7640000613966565b611439670de0b6b3a764000061235c818a611450565b6123669190613966565b87906125a2565b61237f90670de0b6b3a7640000613851565b611cbb84670de0b6b3a7640000613966565b5f806123c78561239f611820565b6123a99190613851565b600254610eb4908790600160801b90046001600160801b0316613966565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f805f805f6123fb898789612e72565b909250905061240a8289613966565b97505f61241882888a6117f0565b9050612424818b613966565b9a989950979650505050505050565b5f825f03612442575084611856565b8115612494576124736124558487613851565b61245f8587610683565b612469888a610683565b611cbb9190613851565b90505f612480858861188c565b90508082101561248e578091505b50611856565b8285036124a257505f611856565b6124cd6124af8487613966565b6124b985876125a2565b6124c3888a610683565b611cbb9190613966565b9695505050505050565b5f6124fc600b5f6124e96002866111e3565b81526020019081526020015f2054611b0a565b61250d600b5f6124e96001876111e3565b61069a9190613a00565b5f6125427f0000000000000000000000000000000000000000000000000000000000000000836125a2565b60035461255891906001600160801b0316613851565b60025461256e906001600160801b031684610683565b101592915050565b5f61069a826004611f4b565b5f61232287878761259b88670de0b6b3a7640000613966565b8787612ef1565b5f6106978383670de0b6b3a76400006126f7565b5f80808061260687866125ff8b6114396125d88c670de0b6b3a7640000613966565b7f0000000000000000000000000000000000000000000000000000000000000000906125a2565b91906126f7565b9350612632847f0000000000000000000000000000000000000000000000000000000000000000610683565b91505f61265261264a89670de0b6b3a7640000613966565b8a90886126f7565b905061267e817f00000000000000000000000000000000000000000000000000000000000000006125a2565b93506126aa847f0000000000000000000000000000000000000000000000000000000000000000610683565b6126b49084613851565b915050945094509450949050565b5f8183116126d05781610697565b5090919050565b5f806126ee846126e88a888a6126f7565b90611450565b9050611cce8884865b5f825f19048411830215820261270b575f80fd5b50910281810615159190040190565b5f61069783670de0b6b3a7640000846117f0565b5f8061273a8484612f01565b90925090508061274c5761274c6123d2565b5092915050565b6040516001600160a01b0384811660248301528381166044830152606482018390526127ba9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612f39565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526128118482612fa4565b6127ba576040516001600160a01b0384811660248301525f604483015261284591869182169063095ea7b390606401612788565b6127ba8482612f39565b5f815f036128665750670de0b6b3a764000061069a565b825f0361287457505f61069a565b5f61287e83611b0a565b90505f61289261288d86611b0a565b613041565b90508181026128a9670de0b6b3a764000082613c83565b90506124cd81613266565b5f60016001607f1b038211156118885760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b03198212806128fa575060016001607f1b0382135b156118885760405163a5353be560e01b815260040160405180910390fd5b5f80612924845f6133f8565b61292e845f6133f8565b6129389190613a00565b90505f8113156129535761294c8186613851565b9450612971565b5f8112156129715761296481613c18565b61296e9086613966565b94505b50929392505050565b6003545f908190612994906001600160801b031684611450565b90506129c07f000000000000000000000000000000000000000000000000000000000000000082613851565b6002546001600160801b0316111561189a576002547f000000000000000000000000000000000000000000000000000000000000000090612a0b9083906001600160801b0316613966565b6115029190613966565b612a1d613744565b5f80612a2884612d16565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612a629190613c32565b6040805180830381865af4158015612a7c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612aa09190613c41565b9350905082612ab457505f91506117cf9050565b5f612ada612ad584610160015185610140015161068390919063ffffffff16565b611b0a565b612afa612ad58561012001518661010001516125a290919063ffffffff16565b612b049190613a00565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612c38573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612c5c9190613caf565b935093509350935080612c7757505f98975050505050505050565b868414612ca857612c878461185f565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612cd957612cb8836128dd565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612d0757612ce98261185f565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612d1e61378e565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612e169116613406565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612e4892900416613406565b905292915050565b5f80612e6088888888888861347a565b909250905080611ce857611ce86123d2565b5f80612ebb8561143985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612eb1818c611450565b6114399190613966565b9150612ee7827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b5f80612e6088888888888861353e565b5f805f83612f0e86611b0a565b612f189190613a00565b90505f811215612f2e575f80925092505061067c565b946001945092505050565b5f612f4d6001600160a01b038416836135fa565b905080515f14158015612f71575080806020019051810190612f6f9190613ce2565b155b15612f9f57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b5f805f846001600160a01b031684604051612fbf9190613cfd565b5f604051808303815f865af19150503d805f8114612ff8576040519150601f19603f3d011682016040523d82523d5f602084013e612ffd565b606091505b50915091508180156130275750805115806130275750808060200190518101906130279190613ce2565b80156118565750505050506001600160a01b03163b151590565b5f8082136130625760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130e59084901c611b0a565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361327f57505f919050565b680755bf798b4a1bf1e582126132a8576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906124cd74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611b0a565b5f8183136126d05781610697565b5f80670de0b6b3a76400006134196106a0565b6134239190613a3a565b9050808311613432575f61343c565b61343c8184613966565b9150611502613473670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613a3a565b839061271a565b5f805f61348a8989888888613607565b90506134a48661185061349d8a8d613851565b8790610683565b98506134b1858a866117f0565b9850888110156134c7575f809250925050613533565b888103670de0b6b3a764000081106134fc576134f56134ee670de0b6b3a764000089611450565b829061284f565b9050613514565b6135116134ee670de0b6b3a76400008961271a565b90505b80891015613529575f80935093505050613533565b8803925060019150505b965096945050505050565b5f805f61354e8989888888613607565b905061355e86611850898b613851565b975087811015613574575f809250925050613533565b8781036135828186886126f7565b9050670de0b6b3a764000081106135af576135a86134ee670de0b6b3a764000089611450565b90506135c7565b6135c46134ee670de0b6b3a76400008961271a565b90505b6135d18186611450565b9050808a10156135e8575f80935093505050613533565b90980398600198509650505050505050565b606061069783835f613635565b5f613612858561284f565b61362b61362386611850868b6125a2565b8590856126f7565b6124cd9190613851565b60608147101561365a5760405163cd78605960e01b8152306004820152602401612f96565b5f80856001600160a01b031684866040516136759190613cfd565b5f6040518083038185875af1925050503d805f81146136af576040519150601f19603f3d011682016040523d82523d5f602084013e6136b4565b606091505b50915091506124cd8683836060826136d4576136cf8261371b565b611502565b81511580156136eb57506001600160a01b0384163b155b1561371457604051639996b31560e01b81526001600160a01b0385166004820152602401612f96565b5080611502565b80511561372b5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061375861378e565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f80608085870312156137f6575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613821575f80fd5b850160608188031215613832575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561069a5761069a61383d565b6001600160a01b03811681146105af575f80fd5b5f60208284031215613888575f80fd5b813561150281613864565b80151581146105af575f80fd5b5f602082840312156138b0575f80fd5b813561150281613893565b5f808335601e198436030181126138d0575f80fd5b83018035915067ffffffffffffffff8211156138ea575f80fd5b60200191503681900382131561067c575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201525f61395960c0830184866138fe565b9998505050505050505050565b8181038181111561069a5761069a61383d565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f6139b260e0830184866138fe565b9a9950505050505050505050565b6001600160701b0381811683821601908082111561274c5761274c61383d565b6001600160801b0381811683821601908082111561274c5761274c61383d565b8181035f83128015838313168383128216171561274c5761274c61383d565b5f60208284031215613a2f575f80fd5b815161150281613864565b808202811582820484141761069a5761069a61383d565b6001600160801b0382811682821603908082111561274c5761274c61383d565b8082018281125f831280158216821582161715613a9057613a9061383d565b505092915050565b5f60208284031215613aa8575f80fd5b5051919050565b634e487b7160e01b5f52601260045260245ffd5b5f82613ad157613ad1613aaf565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069a5761069a61383d565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050613b94828551613b03565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613c07575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613c2c57613c2c61383d565b505f0390565b610180810161069a8284613b03565b5f8060408385031215613c52575f80fd5b825191506020830151613c6481613893565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f82613c9157613c91613aaf565b600160ff1b82145f1984141615613caa57613caa61383d565b500590565b5f805f8060808587031215613cc2575f80fd5b845193506020850151925060408501519150606085015161383281613893565b5f60208284031215613cf2575f80fd5b815161150281613893565b5f82515f5b81811015613d1c5760208186018101518583015201613d02565b505f92019182525091905056fea2646970667358221220d4d6fef1547ba5e0338a30d4fad2f95947e88ba5a7798dc8bf677615f34e76c064736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
  "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
} as const
};
