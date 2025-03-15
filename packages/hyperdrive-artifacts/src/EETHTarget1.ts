export const EETHTarget1 = {
  name: 'EETHTarget1' as const,
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
    "name": "closeLong",
    "inputs": [
      {
        "name": "_maturityTime",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_bondAmount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minOutput",
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
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "closeShort",
    "inputs": [
      {
        "name": "_maturityTime",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_bondAmount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minOutput",
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
    "stateMutability": "nonpayable"
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
    "name": "InsufficientBalance",
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
  }
] as const,
  bytecode: '0x6102a060405234801562000011575f80fd5b5060405162003f6d38038062003f6d8339810160408190526200003491620001ac565b60015f5582516001600160a01b039081166080908152602080860151831660a0908152918601516101a052908501516101c05260c0808601516101e090815260e08088015161020052610120808901519093526101008089015190915261014080890151909152908701805151909252815190920151909152805160409081015161016052905160609081015161018052908501518216610240529093015161026052908216610220521661028052620002f8565b60405161020081016001600160401b03811182821017156200011957634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b038116811462000136575f80fd5b919050565b5f608082840312156200014c575f80fd5b604051608081016001600160401b03811182821017156200017b57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a0811215620001c1575f80fd5b61026080821215620001d1575f80fd5b620001db620000e9565b9150620001e8866200011f565b8252620001f8602087016200011f565b60208301526200020b604087016200011f565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620002768188016200011f565b908301526101806200028a8782016200011f565b908301526101a06200029e8782016200011f565b908301526101c0620002b28782016200011f565b908301526101e0620002c7888883016200013b565b8184015250819450620002dc8187016200011f565b93505050620002ef61028085016200011f565b90509250925092565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613ac3620004aa5f395f81816048015281816119bb015261257001525f50505f50505f610b7901525f50505f818160f40152818161035f0152612ce601525f81816113de015281816117dc0152818161183f015281816128cf0152818161290b01528181612b030152612cc001525f818161073701528181610df001528181610e3701528181610ff601528181611645015281816116920152612c9a01525f611b4601525f8181611c67015281816122a8015261232001525f81816108f401528181610f8e01528181611c3b01526122f401525f8181610e89015261226e01525f818161075801528181610dce01528181610e580152818161101701528181611623015281816116b30152612d0c01525f818161083201528181610f0f0152818161173a0152818161214701526132e301525f81816105fd01528181610674015281816106e8015281816107b301526107eb01525f81816119dc01528181612591015261260501525f5050613ac35ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c8063207deba01461004357806329b23fc114610087578063ded06231146100a8575b5f80fd5b61006a7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b61009a610095366004613573565b6100bb565b60405190815260200161007e565b61009a6100b6366004613573565b6100d3565b5f6100c8858585856100e0565b90505b949350505050565b5f6100c88585858561034b565b5f6100e961057f565b6100f2826105a7565b7f00000000000000000000000000000000000000000000000000000000000000008410156101335760405163211ddda360e11b815260040160405180910390fd5b5f61013c6105df565b9050854210156101615761015b6101516105f6565b8260046001610621565b50610171565b61016f868260046001610621565b505b61018661017f600288610c84565b3387610cb8565b5f805f805f806101978b888e610d8e565b9550955095509550955095505f8c90508c421015610253578260095f8282546101c091906135e1565b909155506101d890506101d16105f6565b4284611076565b6101e58c888787856111af565b5f6101ef8e611326565b905061020d6101fd8e61136c565b61020790836135f4565b82611399565b610216896113d8565b61022257610222611437565b5f61022c8a611450565b90508061024c57604051638bdf918d60e01b815260040160405180910390fd5b505061026a565b61025d868961145c565b955061026888611450565b505b5f610276878a8d611538565b90508b8110156102995760405163c972651760e01b815260040160405180910390fd5b8c86858b8e6102a9600288610c84565b6102b66020830183613627565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102f46040890160208a0161364f565b6103088a6103028d8f6135e1565b906115cf565b8d61031660408c018c61366a565b60405161032a9897969594939291906136d5565b60405180910390a450939c505050505050505050505050506100cb60015f55565b5f61035461057f565b61035d826105a7565b7f000000000000000000000000000000000000000000000000000000000000000084101561039e5760405163211ddda360e11b815260040160405180910390fd5b5f6103a76105df565b9050854210156103c2576103bc6101516105f6565b506103d2565b6103d0868260046001610621565b505b6103e061017f600188610c84565b5f805f805f806103f18b888e6115e3565b9550955095509550955095505f8c90508c4210156104a0578260095f82825461041a91906135e1565b9091555061042b90506101d16105f6565b6104388c888787856117c5565b5f61044282611326565b905061045a6104508e61136c565b610207908361371c565b610463896113d8565b61046f5761046f611437565b5f6104798a611450565b90508061049957604051638bdf918d60e01b815260040160405180910390fd5b50506104b7565b6104aa868961145c565b95506104b588611450565b505b5f6104c3878a8d611538565b90508b8110156104e65760405163c972651760e01b815260040160405180910390fd5b8c898c6104f4600186610c84565b6105016020830183613627565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee526788888761053f6040890160208a0161364f565b8a61054d60408b018b61366a565b6040516105609796959493929190613743565b60405180910390a450919a50505050505050505050506100cb60015f55565b60025f54036105a157604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f6105b56020830183613627565b6001600160a01b0316036105dc5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f6105f1670de0b6b3a76400006119b5565b905090565b5f6105f1427f0000000000000000000000000000000000000000000000000000000000000000611a01565b5f84815260086020526040812060018101546001600160801b031615158061064857504286115b1561066157600101546001600160801b031690506100cb565b5f805f61066c6105f6565b90505f6106997f00000000000000000000000000000000000000000000000000000000000000008b6135e1565b90505b8181101561070d575f818152600860205260409020600101546001600160801b031680156106e5575f828152600860205260409020549094506001600160801b0316925061070d565b507f00000000000000000000000000000000000000000000000000000000000000000161069c565b835f0361077f5788935061077c610722611a16565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a36565b92505b5061078983611a4c565b6001850180546001600160801b0319166001600160801b03929092169190911790556107df6107d87f00000000000000000000000000000000000000000000000000000000000000008b613783565b8a84611076565b61081d896108176108107f0000000000000000000000000000000000000000000000000000000000000000836135e1565b4290611a75565b84611076565b61082688611a89565b505f90506008816108577f00000000000000000000000000000000000000000000000000000000000000008d613783565b815260208101919091526040015f908120600101546001600160801b0316915061088260028c610c84565b5f818152600b60205260408120549192508c8c83156109c357600192505f806108ae86898d865f611c26565b915091508060095f8282546108c391906135e1565b909155506108de9050865f846108d88161136c565b886111af565b6108e881836135e1565b915061091886838a8e877f0000000000000000000000000000000000000000000000000000000000000000611cf3565b915061092c61092783856115cf565b611d3c565b6006805460029061094d9084906201000090046001600160701b0316613796565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061097a82611a4c565b6006805460109061099c908490600160801b90046001600160801b03166137b6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f6109cf600184610c84565b5f818152600b60205260409020549091508015610ada57600194505f806109fa838b8f886001611c26565b915091508060095f828254610a0f91906135e1565b90915550610a2a9050835f84610a248161136c565b8a6117c5565b610a348183613783565b9150610a4361092783876115cf565b60068054600290610a649084906201000090046001600160701b0316613796565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a9182611a4c565b60068054601090610ab3908490600160801b90046001600160801b03166137b6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610b1357610b05610aec8761136c565b610af58361136c565b610aff91906135f4565b5f611399565b8e610b108482611d65565b50505b5f610b1d84611f54565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bd3573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bf791906137d6565b90506001600160a01b03811615610c6b57610c685a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612096565b50505b509b9d5050505050505050505050505050949350505050565b5f6001600160f81b03821115610cad5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610cfa57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610d3c908490613783565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f805f805f805f80610d9e611a16565b90505f610daa8a61211c565b6002549091508c908c90610e14908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f000000000000000000000000000000000000000000000000000000000000000061216b565b600254919d509a50909550610e7c908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a36565b9550610eb2858c610ead897f00000000000000000000000000000000000000000000000000000000000000006121da565b612209565b15610ebf57610ebf611437565b5f805f610ece85878b8761224a565b9c5091945092509050610ee18184613783565b610eeb90896135e1565b9750610ef782846135e1565b610f01908d6135e1565b9b505050505050505f60085f7f00000000000000000000000000000000000000000000000000000000000000008c610f399190613783565b815260208101919091526040015f908120600101546001600160801b03169150428b11610f7f575f8b8152600860205260409020600101546001600160801b0316610f81565b8b5b90508b610fb28e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611cf3565b9950610fbe878a613783565b9850670de0b6b3a764000061103b610fd687876135e1565b600254610ff4908f90600160801b90046001600160801b0316613783565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a36565b111561104957611049611437565b6110588a8a878a87875f61235c565b939d50919b5090995090975050505050505093975093979195509350565b5f83815260086020526040902054600160801b90046001600160801b03168083036110a15750505050565b5f848152600860205260408120546001600160801b0316908190036110f9576110c983611a4c565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611176565b61114a611145670de0b6b3a76400006111128886613783565b61111c91906137f1565b85670de0b6b3a7640000611130878a613783565b61113a91906137f1565b8592919060016123f8565b611a4c565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61117f84611a4c565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111f7611145826111db670de0b6b3a7640000866137f1565b600554600160801b90046001600160801b031691908a5f6123f8565b600580546001600160801b03928316600160801b02921691909117905561121d86611a4c565b6112279082613808565b600480546001600160801b03928316600160801b02921691909117905561124d84611a4c565b600280545f906112679084906001600160801b03166137b6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112948361249e565b600480545f906112a8908490600f0b613828565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506112d885611a4c565b600280546010906112fa908490600160801b90046001600160801b0316613808565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f61134b600b5f611338600286610c84565b81526020019081526020015f205461136c565b61135c600b5f611338600187610c84565b61136691906135f4565b92915050565b5f6001600160ff1b038211156113955760405163396ea70160e11b815260040160405180910390fd5b5090565b6003546113b490611145906001600160801b031684846124d9565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f6114037f00000000000000000000000000000000000000000000000000000000000000008361253b565b60035461141991906001600160801b03166135e1565b60025461142f906001600160801b0316846115cf565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f611366826004611d65565b5f805f61146884611a89565b90925090505f61147886866115cf565b9050818311156114905761148d86838561254f565b95505b828110156114a25780830392506114a6565b5f92505b6114af83611d3c565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b909104168087101561150257869003611505565b505f5b61150e81611a4c565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b5f8061154485856115cf565b905061154f8161256a565b9450845f03611561575f9150506115c8565b849150611574604084016020850161364f565b156115a35761159c8561158a6020860186613627565b611597604087018761366a565b6125b6565b91506115c6565b6115c6856115b46020860186613627565b6115c1604087018761366a565b6125d0565b505b9392505050565b5f6115c88383670de0b6b3a764000061254f565b5f805f805f805f806115f3611a16565b90505f6115ff8a61211c565b6002549091508b908d90611669908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f0000000000000000000000000000000000000000000000000000000000000000612697565b600254919d509b509095505f90819081906116d7908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a36565b98506116e584878b8861224a565b9c5091945090925090506116f98284613783565b6117039089613783565b975061170f81846135e1565b611719908e613783565b9c506117258a8e6135e1565b9b50505050505050506117af8686838660085f7f00000000000000000000000000000000000000000000000000000000000000008f6117649190613783565b815260208101919091526040015f20600101546001600160801b0316428e116117a6575f8e8152600860205260409020600101546001600160801b03166117a8565b8e5b600161235c565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b03168381108061180757507f00000000000000000000000000000000000000000000000000000000000000006118058583613783565b105b1561181457611814611437565b6004549084900390600f0b61182984826135f4565b9050836118358661136c565b13801561186a57507f000000000000000000000000000000000000000000000000000000000000000061186883836126ea565b105b1561187757611877611437565b600354600160801b90046001600160801b03166118b8611145826118a3670de0b6b3a7640000886137f1565b6005546001600160801b031691908c5f6123f8565b600580546001600160801b0319166001600160801b03929092169190911790556118e28882613783565b90506118ed81611a4c565b600380546001600160801b03928316600160801b02921691909117905561191383611a4c565b600280546001600160801b0319166001600160801b039290921691909117905561193c8261249e565b600480546001600160801b0319166001600160801b039290921691909117905561196587611a4c565b60028054601090611987908490600160801b90046001600160801b03166137b6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b5f6113667f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008461270f565b5f611a0c8284613869565b6115c89084613783565b6002546004545f916105f1916001600160801b0390911690600f0b6126ea565b5f6100c882611a4685888861254f565b906127ee565b5f6001600160801b0382111561139557604051630f0af95160e11b815260040160405180910390fd5b5f818311611a8357826115c8565b50919050565b6006545f908190611aab908490600160801b90046001600160801b03166115cf565b6006546201000090046001600160701b03169250905081811115611c21575f611ad48383613783565b9050611ae3611145828661285d565b60068054601090611b05908490600160801b90046001600160801b0316613808565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611b3d858361287190919063ffffffff16565b90505f611b6a827f00000000000000000000000000000000000000000000000000000000000000006115cf565b90508060095f828254611b7d91906135e1565b90915550611b8d90508183613783565b9150611b9882611a4c565b600280545f90611bb29084906001600160801b03166137b6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611bdf82612885565b600480545f90611bf3908490600f0b613828565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611c328785612871565b91505f611c5f837f00000000000000000000000000000000000000000000000000000000000000006115cf565b9050611c8b817f00000000000000000000000000000000000000000000000000000000000000006115cf565b91508315611cae57611c9d8282613783565b611ca79084613783565b9250611cc5565b611cb88282613783565b611cc290846135e1565b92505b86861015611ce857611cd883878961254f565b9250611ce582878961254f565b91505b509550959350505050565b5f80611d0a84611d048a888a61254f565b90612871565b9050611d1788848661254f565b611d2190826135e1565b905086811115611d315786810391505b509695505050505050565b5f6001600160701b038211156113955760405163086b151760e11b815260040160405180910390fd5b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611daf916001600160801b031690613783565b9050805f03611dc2576001915050611366565b5f611dcc856128ae565b9050805f03611de057600192505050611366565b5f80611ded838589612949565b9150915080611e02575f945050505050611366565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e3d9291906138fa565b6040805180830381865af4158015611e57573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e7b919061396f565b91509150611e99611e8b8261136c565b611e9490613991565b612abd565b925082611eae575f9650505050505050611366565b611eb782611a4c565b600780545f90611ed19084906001600160801b03166137b6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611efe81611a4c565b60078054601090611f20908490600160801b90046001600160801b03166137b6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611f7b87612c51565b6040518263ffffffff1660e01b8152600401611f9791906139ab565b6040805180830381865af4158015611fb1573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611fd591906139ba565b9150915080611fea57505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161204f916135e1565b6120599190613783565b9050805f0361206f57505f958695509350505050565b5f80871161207d575f612088565b61208884888461254f565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff8111156120b9576120b96139e8565b6040519080825280601f01601f1916602001820160405280156120e3576020820181803683370190505b5090505f808751602089018b8e8ef191503d925086831115612103578692505b828152825f602083013e90999098509650505050505050565b5f806121266105f6565b9050808311612135575f61213f565b61213f8184613783565b91506115c8827f0000000000000000000000000000000000000000000000000000000000000000612871565b5f808061218b61218388670de0b6b3a7640000613783565b899087612d8b565b905086156121cd5761219d888861253b565b91506121be8a8a846121b78a670de0b6b3a7640000613783565b8989612dae565b92506121ca83826135e1565b90505b9750975097945050505050565b5f6121f76121f084670de0b6b3a7640000613783565b839061253b565b6115c890670de0b6b3a7640000613783565b5f8061223f85612217611a16565b61222191906135e1565b600254610ff4908790600160801b90046001600160801b0316613783565b909210949350505050565b5f8080806122a087866122998b61229361226c8c670de0b6b3a7640000613783565b7f00000000000000000000000000000000000000000000000000000000000000009061253b565b9061253b565b9190612d8b565b93506122cc847f00000000000000000000000000000000000000000000000000000000000000006115cf565b91505f6122ec6122e489670de0b6b3a7640000613783565b8a9088612d8b565b9050612318817f000000000000000000000000000000000000000000000000000000000000000061253b565b9350612344847f00000000000000000000000000000000000000000000000000000000000000006115cf565b61234e90846135e1565b915050945094509450949050565b5f805f805f80888810156123c857861561237e5761237b8d898b61254f565b9c505b6123898c898b61254f565b9b506123948b61136c565b61239d8d61136c565b6123a791906135f4565b90506123b48b898b61254f565b9a506123c18a898b61254f565b99506123e7565b6123d18b61136c565b6123da8d61136c565b6123e491906135f4565b90505b9b9c9a9b999a975050505050505050565b5f825f03612407575084612495565b81156124595761243861241a84876135e1565b61242485876115cf565b61242e888a6115cf565b611d0491906135e1565b90505f6124458588611a75565b905080821015612453578091505b50612495565b82850361246757505f612495565b6124926124748487613783565b61247e858761253b565b612488888a6115cf565b611d049190613783565b90505b95945050505050565b5f60016001607f1b03198212806124bb575060016001607f1b0382135b156113955760405163a5353be560e01b815260040160405180910390fd5b5f806124e5845f612dd0565b6124ef845f612dd0565b6124f991906135f4565b90505f8113156125145761250d81866135e1565b9450612532565b5f8112156125325761252581613991565b61252f9086613783565b94505b50929392505050565b5f6115c88383670de0b6b3a7640000612d8b565b5f825f190484118302158202612563575f80fd5b5091020490565b5f6113667f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000084612de5565b5f60405163350b944160e11b815260040160405180910390fd5b5f6125da856119b5565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018390529192505f917f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303815f875af115801561264b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061266f91906139fc565b90508061268f576040516312171d8360e31b815260040160405180910390fd5b505050505050565b5f80806126b76126af88670de0b6b3a7640000613783565b89908761254f565b905086156121cd576126c988886115cf565b91506121be8a8a846126e38a670de0b6b3a7640000613783565b8989612e98565b5f806126f68484612ea8565b90925090508061270857612708611437565b5092915050565b5f80836001600160a01b0316633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa15801561274d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906127719190613a17565b9050805f03612783575f9150506115c8565b612495856001600160a01b03166337cfdaca6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156127c2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906127e69190613a17565b84908361254f565b5f815f036128055750670de0b6b3a7640000611366565b825f0361281357505f611366565b5f61281d8361136c565b90505f61283161282c8661136c565b612ee3565b9050818102612848670de0b6b3a764000082613a2e565b905061285381613108565b9695505050505050565b5f6115c883670de0b6b3a764000084612d8b565b5f6115c883670de0b6b3a76400008461254f565b5f60016001607f1b038211156113955760405163a5353be560e01b815260040160405180910390fd5b6003545f9081906128c8906001600160801b03168461285d565b90506128f47f0000000000000000000000000000000000000000000000000000000000000000826135e1565b6002546001600160801b03161115611a83576002547f00000000000000000000000000000000000000000000000000000000000000009061293f9083906001600160801b0316613783565b6115c89190613783565b6129516134d4565b5f8061295c84612c51565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b815260040161299691906139ab565b6040805180830381865af41580156129b0573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906129d491906139ba565b93509050826129e857505f9150612ab59050565b5f612a0e612a098461016001518561014001516115cf90919063ffffffff16565b61136c565b612a2e612a0985610120015186610100015161253b90919063ffffffff16565b612a3891906135f4565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b73573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612b979190613a5a565b935093509350935080612bb257505f98975050505050505050565b868414612be357612bc284611a4c565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612c1457612bf38361249e565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612c4257612c2482611a4c565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612c5961351e565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612d51911661329a565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612d839290041661329a565b905292915050565b5f825f190484118302158202612d9f575f80fd5b50910281810615159190040190565b5f80612dbe88888888888861330e565b909250905080611d3157611d31611437565b5f818313612dde57816115c8565b5090919050565b5f80846001600160a01b03166337cfdaca6040518163ffffffff1660e01b8152600401602060405180830381865afa158015612e23573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612e479190613a17565b9050805f03612e59575f9150506115c8565b612495846001600160a01b0316633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa1580156127c2573d5f803e3d5ffd5b5f80612dbe8888888888886133ea565b5f805f83612eb58661136c565b612ebf91906135f4565b90505f811215612ed5575f809250925050612edc565b9150600190505b9250929050565b5f808213612f045760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612f879084901c61136c565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361312157505f919050565b680755bf798b4a1bf1e5821261314a576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061285374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c61136c565b5f80670de0b6b3a76400006132ad6105f6565b6132b791906137f1565b90508083116132c6575f6132d0565b6132d08184613783565b91506115c8613307670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006137f1565b8390612871565b5f805f61331e89898888886134a6565b905086881015613334575f8092509250506133df565b968690039661334388876127ee565b975087811015613359575f8092509250506133df565b878103613367818688612d8b565b9050670de0b6b3a7640000811061339b5761339461338d670de0b6b3a76400008961285d565b82906127ee565b90506133b3565b6133b061338d670de0b6b3a764000089612871565b90505b6133bd818661285d565b9050898110156133d4575f809350935050506133df565b899003925060019150505b965096945050505050565b5f805f6133fa89898888886134a6565b905061340a86611a46898b6135e1565b975087811015613420575f8092509250506133df565b87810361342e818688612d8b565b9050670de0b6b3a7640000811061345b5761345461338d670de0b6b3a76400008961285d565b9050613473565b61347061338d670de0b6b3a764000089612871565b90505b61347d818661285d565b9050808a1015613494575f809350935050506133df565b90980398600198509650505050505050565b5f6134b185856127ee565b6134ca6134c286611a46868b61253b565b859085612d8b565b61249291906135e1565b6040518061012001604052806134e861351e565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f8060808587031215613586575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156135b1575f80fd5b8501606081880312156135c2575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b80820180821115611366576113666135cd565b8181035f831280158383131683831282161715612708576127086135cd565b6001600160a01b03811681146105dc575f80fd5b5f60208284031215613637575f80fd5b81356115c881613613565b80151581146105dc575f80fd5b5f6020828403121561365f575f80fd5b81356115c881613642565b5f808335601e1984360301811261367f575f80fd5b83018035915067ffffffffffffffff821115613699575f80fd5b602001915036819003821315612edc575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f61370e60e0830184866136ad565b9a9950505050505050505050565b8082018281125f83128015821682158216171561373b5761373b6135cd565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a08201525f61377660c0830184866136ad565b9998505050505050505050565b81810381811115611366576113666135cd565b6001600160701b03818116838216019080821115612708576127086135cd565b6001600160801b03818116838216019080821115612708576127086135cd565b5f602082840312156137e6575f80fd5b81516115c881613613565b8082028115828204841417611366576113666135cd565b6001600160801b03828116828216039080821115612708576127086135cd565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715611366576113666135cd565b634e487b7160e01b5f52601260045260245ffd5b5f8261387757613877613855565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a08201905061390d82855161387c565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613980575f80fd5b505080516020909101519092909150565b5f600160ff1b82016139a5576139a56135cd565b505f0390565b6101808101611366828461387c565b5f80604083850312156139cb575f80fd5b8251915060208301516139dd81613642565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f60208284031215613a0c575f80fd5b81516115c881613642565b5f60208284031215613a27575f80fd5b5051919050565b5f82613a3c57613a3c613855565b600160ff1b82145f1984141615613a5557613a556135cd565b500590565b5f805f8060808587031215613a6d575f80fd5b84519350602085015192506040850151915060608501516135c28161364256fea26469706673582212203f265796572d49c5992cd5e50258665290b8552cf9f47ee2a97e50b62c346e6b64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "_liquidityPool()": "207deba0",
  "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
  "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
} as const
};
