export const EETHTarget2 = {
  name: 'EETHTarget2' as const,
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
  bytecode: '0x6102a060405234801562000011575f80fd5b5060405162004091380380620040918339810160408190526200003491620001ac565b60015f5582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815190920151909152805160409081015161016052905160609081015161018052908501518216610240529093015161026052908216610220521661028052620002f8565b60405161020081016001600160401b03811182821017156200011957634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b038116811462000136575f80fd5b919050565b5f608082840312156200014c575f80fd5b604051608081016001600160401b03811182821017156200017b57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a0811215620001c1575f80fd5b61026080821215620001d1575f80fd5b620001db620000e9565b9150620001e8866200011f565b8252620001f8602087016200011f565b60208301526200020b604087016200011f565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620002768188016200011f565b908301526101806200028a8782016200011f565b908301526101a06200029e8782016200011f565b908301526101c0620002b28782016200011f565b908301526101e0620002c7888883016200013b565b8184015250819450620002dc8187016200011f565b93505050620002ef61028085016200011f565b90509250925092565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613bd1620004c05f395f818160480152818161149001526116e401525f50505f50505f8181610c4e015261171401525f50505f8181610148015281816103490152612e6d01525f818161152d01528181611e1201528181611e75015281816125fc01528181612a5d01528181612a9901528181612c8a0152612e4701525f818161080c01528181610da801528181610dea01528181610edc01528181611342015281816113a00152612e2101525f611a3c01525f8181611b5d015281816126ed015281816127650152612f8501525f81816109c901528181610e5d0152818161143b01528181611b31015261273901525f8181610e3c015281816126b90152612f4101525f818161082d01528181610d8601528181610e0b01528181610efd01528181611320015281816113c10152612e9301525f8181610222015281816103dd01528181610907015261340901525f81816106cd01528181610749015281816107bd0152818161088801526108c001525f81816114b1015261183e01525f5050613bd15ff3fe608060405260043610610033575f3560e01c8063207deba014610037578063cba2e58d14610087578063dbbe8070146100af575b5f80fd5b348015610042575f80fd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b61009a610095366004613681565b6100c2565b6040805192835260208301919091520161007e565b61009a6100bd366004613681565b6100de565b5f806100d0868686866100ec565b915091505b94509492505050565b5f806100d08686868661030b565b5f806100f6610578565b600654610100900460ff161561011f576040516321081abf60e01b815260040160405180910390fd5b610128836105a0565b5f8061013488866105d8565b90925090505f61014483836106a9565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101875760405163211ddda360e11b815260040160405180910390fd5b868210156101a8576040516342af972b60e01b815260040160405180910390fd5b5f6101b16106c6565b90506101c18184600460016106f6565b505f805f6101cf8787610d5a565b919a5091945090925090508b8810156101fb5760405163c972651760e01b815260040160405180910390fd5b8160095f82825461020c91906136ef565b9091555061021d9050844283610f39565b6102477f0000000000000000000000000000000000000000000000000000000000000000856136ef565b98506102558389888c611072565b5f61026160018b611209565b905061027a8161027460208e018e613716565b8b61123d565b8d8a8a898e8561028d6020830183613716565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a8688866102ca604088016020890161373e565b896102d860408a018a613759565b6040516102eb97969594939291906137c4565b60405180910390a350909b5050505050505050505050506100d560015f55565b5f80610315610578565b600654610100900460ff161561033e576040516321081abf60e01b815260040160405180910390fd5b610347836105a0565b7f00000000000000000000000000000000000000000000000000000000000000008610156103885760405163211ddda360e11b815260040160405180910390fd5b5f6103916112e2565b9050848110156103b4576040516342af972b60e01b815260040160405180910390fd5b5f6103bd6106c6565b90505f6103d56103cb6106c6565b84600460016106f6565b90505f6104027f0000000000000000000000000000000000000000000000000000000000000000846136ef565b90505f805f806104138e89886112f4565b60098054949850929650909450925083915f906104319084906136ef565b909155506104429050874283610f39565b61045461044f858a611476565b61148a565b61045f9060016136ef565b9350505f61046e84898d6114d6565b9050808d10156104915760405163c972651760e01b815260040160405180910390fd5b61049b818c6105d8565b508e90506104ab81858b89611507565b5f6104b7600288611209565b90508c6104d1826104cb6020840184613716565b8561123d565b858b86846104e26020860186613716565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a8661051f60408b0160208c0161373e565b6105338961052d8a8d613804565b906106a9565b8d61054160408e018e613759565b604051610555989796959493929190613817565b60405180910390a350989d50939b5050505050505050505050506100d560015f55565b60025f540361059a57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f6105ae6020830183613716565b6001600160a01b0316036105d55760405163f0dd15fd60e01b815260040160405180910390fd5b50565b815f806105eb604085016020860161373e565b1561061057610606856106016040870187613759565b6116ba565b9093509050610628565b5034610628856106236040870187613759565b611805565b6106306112e2565b915080156106a0576040515f90339083908381818185875af1925050503d805f8114610677576040519150601f19603f3d011682016040523d82523d5f602084013e61067c565b606091505b505090508061069e576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f6106bd8383670de0b6b3a76400006118cf565b90505b92915050565b5f6106f1427f00000000000000000000000000000000000000000000000000000000000000006118ea565b905090565b5f84815260086020526040812060018101546001600160801b031615158061071d57504286115b1561073657600101546001600160801b03169050610d52565b5f805f6107416106c6565b90505f61076e7f00000000000000000000000000000000000000000000000000000000000000008b6136ef565b90505b818110156107e2575f818152600860205260409020600101546001600160801b031680156107ba575f828152600860205260409020549094506001600160801b031692506107e2565b507f000000000000000000000000000000000000000000000000000000000000000001610771565b835f03610854578893506108516107f76118ff565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061191f565b92505b5061085e8361193e565b6001850180546001600160801b0319166001600160801b03929092169190911790556108b46108ad7f00000000000000000000000000000000000000000000000000000000000000008b613804565b8a84610f39565b6108f2896108ec6108e57f0000000000000000000000000000000000000000000000000000000000000000836136ef565b429061196b565b84610f39565b6108fb8861197f565b505f905060088161092c7f00000000000000000000000000000000000000000000000000000000000000008d613804565b815260208101919091526040015f908120600101546001600160801b0316915061095760028c611209565b5f818152600b60205260408120549192508c8c8315610a9857600192505f8061098386898d865f611b1c565b915091508060095f82825461099891906136ef565b909155506109b39050865f846109ad81611be9565b88611c12565b6109bd81836136ef565b91506109ed86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611d89565b9150610a016109fc83856106a9565b611dd2565b60068054600290610a229084906201000090046001600160701b031661385e565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a4f8261193e565b60068054601090610a71908490600160801b90046001600160801b031661387e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610aa4600184611209565b5f818152600b60205260409020549091508015610baf57600194505f80610acf838b8f886001611b1c565b915091508060095f828254610ae491906136ef565b90915550610aff9050835f84610af981611be9565b8a611dfb565b610b098183613804565b9150610b186109fc83876106a9565b60068054600290610b399084906201000090046001600160701b031661385e565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b668261193e565b60068054601090610b88908490600160801b90046001600160801b031661387e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610be857610bda610bc187611be9565b610bca83611be9565b610bd4919061389e565b5f611feb565b8e610be5848261202a565b50505b5f610bf284612219565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ca8573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ccc91906138bd565b90506001600160a01b03811615610d4057610d3d5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b0386169392919061235b565b50505b509b9d50505050505050505050505050505b949350505050565b5f805f805f610d676118ff565b600254909150610dcc908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f00000000000000000000000000000000000000000000000000000000000000006123e1565b600254909450610e2f908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061191f565b9150610e868785610e81857f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061240c565b612470565b15610e9357610e936124b1565b610e9f878588856124ca565b91965094509250670de0b6b3a7640000610f21610ebc87846136ef565b600254610eda908890600160801b90046001600160801b0316613804565b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061191f565b1115610f2f57610f2f6124b1565b5092959194509250565b5f83815260086020526040902054600160801b90046001600160801b0316808303610f645750505050565b5f848152600860205260408120546001600160801b031690819003610fbc57610f8c8361193e565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611039565b61100d611008670de0b6b3a7640000610fd58886613804565b610fdf91906138d8565b85670de0b6b3a7640000610ff3878a613804565b610ffd91906138d8565b859291906001612512565b61193e565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b6110428461193e565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b03166110b46110088261109e670de0b6b3a7640000866138d8565b6005546001600160801b03169190886001612512565b600580546001600160801b0319166001600160801b03929092169190911790556110dd8561193e565b600280545f906110f79084906001600160801b031661387e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506111248461193e565b60028054601090611146908490600160801b90046001600160801b03166138ef565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506111738461193e565b61117d908261387e565b600380546001600160801b03808416600160801b02911617905590505f6111a3836125b6565b90506111c1816111b287611be9565b6111bc908461390f565b611feb565b6111ca846125f6565b6111d6576111d66124b1565b5f6111e085612655565b90508061120057604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b5f6001600160f81b038211156112325760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b03861684529091528120805483929061126e9084906136ef565b90915550505f838152600b6020526040812080548392906112909084906136ef565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6106f1670de0b6b3a764000061148a565b5f805f805f6113016118ff565b600254909150611366908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612661565b9350876113738589612681565b1115611381576113816124b1565b6002545f9081906113e5908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061191f565b93506113fb8a670de0b6b3a7640000868c612695565b5091935090915061140e90508183613804565b6114189087613804565b9550886114658161145f8d61142d868c613804565b8d61143887826127a1565b877f00000000000000000000000000000000000000000000000000000000000000006127b6565b90612681565b975090945050505093509350935093565b5f6106bd83670de0b6b3a7640000846127d6565b5f6106c07f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000846127f9565b5f6114e7604083016020840161373e565b156114f3575082611500565b6114fd84846128d8565b90505b9392505050565b6002546001600160801b031683811015611523576115236124b1565b60045490849003907f00000000000000000000000000000000000000000000000000000000000000009061155b908390600f0b6128ec565b1015611569576115696124b1565b6004546115b39061100890600160801b90046001600160801b0316611596670de0b6b3a7640000866138d8565b600554600160801b90046001600160801b03169190896001612512565b600580546001600160801b03928316600160801b0292169190911790556115d98161193e565b600280546001600160801b0319166001600160801b03929092169190911790556116028561193e565b60028054601090611624908490600160801b90046001600160801b031661387e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506116518561193e565b60048054601090611673908490600160801b90046001600160801b031661387e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f6116a1836125b6565b90506111c1816116b088611be9565b6111bc908461389e565b5f80843410156116dd576040516312171d8360e31b815260040160405180910390fd5b84340390507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f340fa01867f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c415b95c6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561176e573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061179291906138bd565b6040516001600160e01b031960e085901b1681526001600160a01b03909116600482015260240160206040518083038185885af11580156117d5573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906117fa9190613936565b91505b935093915050565b5f61180f8461148a565b6040516323b872dd60e01b8152336004820152306024820152604481018290529091505f906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd906064016020604051808303815f875af1158015611884573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118a8919061394d565b9050806118c8576040516312171d8360e31b815260040160405180910390fd5b5050505050565b5f825f1904841183021582026118e3575f80fd5b5091020490565b5f6118f5828461397c565b6106bd9084613804565b6002546004545f916106f1916001600160801b0390911690600f0b6128ec565b5f6119358261192f8588886118cf565b90612911565b95945050505050565b5f6001600160801b0382111561196757604051630f0af95160e11b815260040160405180910390fd5b5090565b5f81831161197957826106bd565b50919050565b6006545f9081906119a1908490600160801b90046001600160801b03166106a9565b6006546201000090046001600160701b03169250905081811115611b17575f6119ca8383613804565b90506119d96110088286611476565b600680546010906119fb908490600160801b90046001600160801b03166138ef565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611a3385836128d890919063ffffffff16565b90505f611a60827f00000000000000000000000000000000000000000000000000000000000000006106a9565b90508060095f828254611a7391906136ef565b90915550611a8390508183613804565b9150611a8e8261193e565b600280545f90611aa89084906001600160801b031661387e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ad582612976565b600480545f90611ae9908490600f0b61398f565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611b2887856128d8565b91505f611b55837f00000000000000000000000000000000000000000000000000000000000000006106a9565b9050611b81817f00000000000000000000000000000000000000000000000000000000000000006106a9565b91508315611ba457611b938282613804565b611b9d9084613804565b9250611bbb565b611bae8282613804565b611bb890846136ef565b92505b86861015611bde57611bce8387896118cf565b9250611bdb8287896118cf565b91505b509550959350505050565b5f6001600160ff1b038211156119675760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611c5a61100882611c3e670de0b6b3a7640000866138d8565b600554600160801b90046001600160801b031691908a5f612512565b600580546001600160801b03928316600160801b029216919091179055611c808661193e565b611c8a90826138ef565b600480546001600160801b03928316600160801b029216919091179055611cb08461193e565b600280545f90611cca9084906001600160801b031661387e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611cf78361299f565b600480545f90611d0b908490600f0b61398f565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611d3b8561193e565b60028054601090611d5d908490600160801b90046001600160801b03166138ef565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80611da084611d9a8a888a6118cf565b906128d8565b9050611dad8884866118cf565b611db790826136ef565b905086811115611dc75786810391505b509695505050505050565b5f6001600160701b038211156119675760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611e3d57507f0000000000000000000000000000000000000000000000000000000000000000611e3b8583613804565b105b15611e4a57611e4a6124b1565b6004549084900390600f0b611e5f848261389e565b905083611e6b86611be9565b138015611ea057507f0000000000000000000000000000000000000000000000000000000000000000611e9e83836128ec565b105b15611ead57611ead6124b1565b600354600160801b90046001600160801b0316611eee61100882611ed9670de0b6b3a7640000886138d8565b6005546001600160801b031691908c5f612512565b600580546001600160801b0319166001600160801b0392909216919091179055611f188882613804565b9050611f238161193e565b600380546001600160801b03928316600160801b029216919091179055611f498361193e565b600280546001600160801b0319166001600160801b0392909216919091179055611f728261299f565b600480546001600160801b0319166001600160801b0392909216919091179055611f9b8761193e565b60028054601090611fbd908490600160801b90046001600160801b031661387e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60035461200690611008906001600160801b031684846129da565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291612074916001600160801b031690613804565b9050805f036120875760019150506106c0565b5f61209185612a3c565b9050805f036120a5576001925050506106c0565b5f806120b2838589612ad7565b91509150806120c7575f9450505050506106c0565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401612102929190613a3a565b6040805180830381865af415801561211c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906121409190613aaf565b9150915061215e61215082611be9565b61215990613ad1565b612c44565b925082612173575f96505050505050506106c0565b61217c8261193e565b600780545f906121969084906001600160801b031661387e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506121c38161193e565b600780546010906121e5908490600160801b90046001600160801b031661387e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61224087612dd8565b6040518263ffffffff1660e01b815260040161225c9190613aeb565b6040805180830381865af4158015612276573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061229a9190613afa565b91509150806122af57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b031691612314916136ef565b61231e9190613804565b9050805f0361233457505f958695509350505050565b5f808711612342575f61234d565b61234d8488846118cf565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561237e5761237e613b28565b6040519080825280601f01601f1916602001820160405280156123a8576020820181803683370190505b5090505f808751602089018b8e8ef191503d9250868311156123c8578692505b828152825f602083013e90999098509650505050505050565b5f6124018787876123fa88670de0b6b3a7640000613804565b8787612f12565b979650505050505050565b5f6114fd61244c61242584670de0b6b3a7640000613804565b61145f670de0b6b3a764000061243b818a611476565b6124459190613804565b8790612681565b61245e90670de0b6b3a76400006136ef565b611d9a84670de0b6b3a7640000613804565b5f806124a68561247e6118ff565b61248891906136ef565b600254610eda908790600160801b90046001600160801b0316613804565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f805f805f6124da898789612f34565b90925090506124e98289613804565b97505f6124f782888a6118cf565b9050612503818b613804565b9a989950979650505050505050565b5f825f03612521575084611935565b81156125735761255261253484876136ef565b61253e85876106a9565b612548888a6106a9565b611d9a91906136ef565b90505f61255f858861196b565b90508082101561256d578091505b50611935565b82850361258157505f611935565b6125ac61258e8487613804565b6125988587612681565b6125a2888a6106a9565b611d9a9190613804565b9695505050505050565b5f6125db600b5f6125c8600286611209565b81526020019081526020015f2054611be9565b6125ec600b5f6125c8600187611209565b6106c0919061389e565b5f6126217f000000000000000000000000000000000000000000000000000000000000000083612681565b60035461263791906001600160801b03166136ef565b60025461264d906001600160801b0316846106a9565b101592915050565b5f6106c082600461202a565b5f61240187878761267a88670de0b6b3a7640000613804565b8787612fb3565b5f6106bd8383670de0b6b3a76400006127d6565b5f8080806126e587866126de8b61145f6126b78c670de0b6b3a7640000613804565b7f000000000000000000000000000000000000000000000000000000000000000090612681565b91906127d6565b9350612711847f00000000000000000000000000000000000000000000000000000000000000006106a9565b91505f61273161272989670de0b6b3a7640000613804565b8a90886127d6565b905061275d817f0000000000000000000000000000000000000000000000000000000000000000612681565b9350612789847f00000000000000000000000000000000000000000000000000000000000000006106a9565b61279390846136ef565b915050945094509450949050565b5f8183116127af57816106bd565b5090919050565b5f806127cd846127c78a888a6127d6565b90611476565b9050611dad8884865b5f825f1904841183021582026127ea575f80fd5b50910281810615159190040190565b5f80836001600160a01b0316633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa158015612837573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061285b9190613936565b9050805f0361286d575f915050611500565b611935856001600160a01b03166337cfdaca6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156128ac573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906128d09190613936565b8490836118cf565b5f6106bd83670de0b6b3a7640000846118cf565b5f806128f88484612fc3565b90925090508061290a5761290a6124b1565b5092915050565b5f815f036129285750670de0b6b3a76400006106c0565b825f0361293657505f6106c0565b5f61294083611be9565b90505f61295461294f86611be9565b612ffb565b905081810261296b670de0b6b3a764000082613b3c565b90506125ac81613220565b5f60016001607f1b038211156119675760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b03198212806129bc575060016001607f1b0382135b156119675760405163a5353be560e01b815260040160405180910390fd5b5f806129e6845f6133b2565b6129f0845f6133b2565b6129fa919061389e565b90505f811315612a1557612a0e81866136ef565b9450612a33565b5f811215612a3357612a2681613ad1565b612a309086613804565b94505b50929392505050565b6003545f908190612a56906001600160801b031684611476565b9050612a827f0000000000000000000000000000000000000000000000000000000000000000826136ef565b6002546001600160801b03161115611979576002547f000000000000000000000000000000000000000000000000000000000000000090612acd9083906001600160801b0316613804565b6115009190613804565b612adf6135e2565b5f80612aea84612dd8565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612b249190613aeb565b6040805180830381865af4158015612b3e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612b629190613afa565b9350905082612b7657505f91506117fd9050565b5f612b9c612b978461016001518561014001516106a990919063ffffffff16565b611be9565b612bbc612b9785610120015186610100015161268190919063ffffffff16565b612bc6919061389e565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612cfa573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612d1e9190613b68565b935093509350935080612d3957505f98975050505050505050565b868414612d6a57612d498461193e565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612d9b57612d7a8361299f565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612dc957612dab8261193e565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612de061362c565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612ed891166133c0565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612f0a929004166133c0565b905292915050565b5f80612f22888888888888613434565b909250905080611dc757611dc76124b1565b5f80612f7d8561145f85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612f73818c611476565b61145f9190613804565b9150612fa9827f00000000000000000000000000000000000000000000000000000000000000006106a9565b9050935093915050565b5f80612f228888888888886134f8565b5f805f83612fd086611be9565b612fda919061389e565b90505f811215612ff0575f8092509250506106a2565b946001945092505050565b5f80821361301c5760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061309f9084901c611be9565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361323957505f919050565b680755bf798b4a1bf1e58212613262576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906125ac74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611be9565b5f8183136127af57816106bd565b5f80670de0b6b3a76400006133d36106c6565b6133dd91906138d8565b90508083116133ec575f6133f6565b6133f68184613804565b915061150061342d670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006138d8565b83906128d8565b5f805f61344489898888886135b4565b905061345e8661192f6134578a8d6136ef565b87906106a9565b985061346b858a866118cf565b985088811015613481575f8092509250506134ed565b888103670de0b6b3a764000081106134b6576134af6134a8670de0b6b3a764000089611476565b8290612911565b90506134ce565b6134cb6134a8670de0b6b3a7640000896128d8565b90505b808910156134e3575f809350935050506134ed565b8803925060019150505b965096945050505050565b5f805f61350889898888886135b4565b90506135188661192f898b6136ef565b97508781101561352e575f8092509250506134ed565b87810361353c8186886127d6565b9050670de0b6b3a76400008110613569576135626134a8670de0b6b3a764000089611476565b9050613581565b61357e6134a8670de0b6b3a7640000896128d8565b90505b61358b8186611476565b9050808a10156135a2575f809350935050506134ed565b90980398600198509650505050505050565b5f6135bf8585612911565b6135d86135d08661192f868b612681565b8590856127d6565b6125ac91906136ef565b6040518061012001604052806135f661362c565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f8060808587031215613694575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156136bf575f80fd5b8501606081880312156136d0575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b808201808211156106c0576106c06136db565b6001600160a01b03811681146105d5575f80fd5b5f60208284031215613726575f80fd5b813561150081613702565b80151581146105d5575f80fd5b5f6020828403121561374e575f80fd5b813561150081613731565b5f808335601e1984360301811261376e575f80fd5b83018035915067ffffffffffffffff821115613788575f80fd5b6020019150368190038213156106a2575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201525f6137f760c08301848661379c565b9998505050505050505050565b818103818111156106c0576106c06136db565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f61385060e08301848661379c565b9a9950505050505050505050565b6001600160701b0381811683821601908082111561290a5761290a6136db565b6001600160801b0381811683821601908082111561290a5761290a6136db565b8181035f83128015838313168383128216171561290a5761290a6136db565b5f602082840312156138cd575f80fd5b815161150081613702565b80820281158282048414176106c0576106c06136db565b6001600160801b0382811682821603908082111561290a5761290a6136db565b8082018281125f83128015821682158216171561392e5761392e6136db565b505092915050565b5f60208284031215613946575f80fd5b5051919050565b5f6020828403121561395d575f80fd5b815161150081613731565b634e487b7160e01b5f52601260045260245ffd5b5f8261398a5761398a613968565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156106c0576106c06136db565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050613a4d8285516139bc565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613ac0575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613ae557613ae56136db565b505f0390565b61018081016106c082846139bc565b5f8060408385031215613b0b575f80fd5b825191506020830151613b1d81613731565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f82613b4a57613b4a613968565b600160ff1b82145f1984141615613b6357613b636136db565b500590565b5f805f8060808587031215613b7b575f80fd5b84519350602085015192506040850151915060608501516136d08161373156fea2646970667358221220059bf0099f9f65942f2b523ba2b81b1e97a86f6165c63f203c3c9fd9eae7251164736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "_liquidityPool()": "207deba0",
  "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
  "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
} as const
};
