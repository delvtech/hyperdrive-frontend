export const StakingUSDSTarget1 = {
  name: 'StakingUSDSTarget1' as const,
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
        "name": "__stakingUSDS",
        "type": "address",
        "internalType": "contract IStakingUSDS"
      }
    ],
    "stateMutability": "nonpayable"
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
  bytecode: '0x6102a060405234801562000011575f80fd5b50604051620042e8380380620042e88339810160408190526200003491620004ef565b60015f81905583516001600160a01b039081166080818152602080880151841660a0908152918801516101a052908701516101c05260c0808801516101e090815260e0808a015161020052610120808b0151909352610100808b0151909152610140808b0151909152908901805151909252815190920151909152805160409081015161016052905160609081015161018052908701518316610240528601516102605281851661022052908316610280528291620000f69190839062000100565b505050506200068a565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200015a9085908390620001cb16565b620001c557604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001b99186916200027516565b620001c5848262000275565b50505050565b5f805f846001600160a01b031684604051620001e891906200063b565b5f604051808303815f865af19150503d805f811462000223576040519150601f19603f3d011682016040523d82523d5f602084013e62000228565b606091505b5091509150818015620002565750805115806200025657508080602001905181019062000256919062000669565b80156200026c57505f856001600160a01b03163b115b95945050505050565b5f6200028b6001600160a01b03841683620002e6565b905080515f14158015620002b2575080806020019051810190620002b0919062000669565b155b15620002e157604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6060620002f583835f620002fc565b9392505050565b606081471015620003235760405163cd78605960e01b8152306004820152602401620002d8565b5f80856001600160a01b031684866040516200034091906200063b565b5f6040518083038185875af1925050503d805f81146200037c576040519150601f19603f3d011682016040523d82523d5f602084013e62000381565b606091505b509092509050620003948683836200039e565b9695505050505050565b606082620003b757620003b18262000402565b620002f5565b8151158015620003cf57506001600160a01b0384163b155b15620003fa57604051639996b31560e01b81526001600160a01b0385166004820152602401620002d8565b5080620002f5565b805115620004135780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405161020081016001600160401b03811182821017156200045c57634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b038116811462000479575f80fd5b919050565b5f608082840312156200048f575f80fd5b604051608081016001600160401b0381118282101715620004be57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a081121562000504575f80fd5b6102608082121562000514575f80fd5b6200051e6200042c565b91506200052b8662000462565b82526200053b6020870162000462565b60208301526200054e6040870162000462565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620005b981880162000462565b90830152610180620005cd87820162000462565b908301526101a0620005e187820162000462565b908301526101c0620005f587820162000462565b908301526101e06200060a888883016200047e565b81840152508194506200061f81870162000462565b9350505062000632610280850162000462565b90509250925092565b5f82515f5b818110156200065c576020818601810151858301520162000640565b505f920191825250919050565b5f602082840312156200067a575f80fd5b81518015158114620002f5575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613ac7620008215f395f61259a01525f50505f50505f610b2e01525f50505f818160a9015281816103140152612bc101525f818161139301528181611791015281816117f4015281816127aa015281816127e6015281816129de0152612b9b01525f81816106ec01528181610da501528181610dec01528181610fab015281816115fa015281816116470152612b7501525f611b2401525f8181611c450152818161228601526122fe01525f81816108a901528181610f4301528181611c1901526122d201525f8181610e3e015261224c01525f818161070d01528181610d8301528181610e0d01528181610fcc015281816115d8015281816116680152612be701525f81816107e701528181610ec4015281816116ef01528181612125015261316201525f81816105b2015281816106290152818161069d0152818161076801526107a001525f50505f6126110152613ac75ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c806329b23fc114610038578063ded062311461005d575b5f80fd5b61004b61004636600461354b565b610070565b60405190815260200160405180910390f35b61004b61006b36600461354b565b610088565b5f61007d85858585610095565b90505b949350505050565b5f61007d85858585610300565b5f61009e610534565b6100a78261055c565b7f00000000000000000000000000000000000000000000000000000000000000008410156100e85760405163211ddda360e11b815260040160405180910390fd5b5f6100f1610594565b905085421015610116576101106101066105ab565b82600460016105d6565b50610126565b6101248682600460016105d6565b505b61013b610134600288610c39565b3387610c6d565b5f805f805f8061014c8b888e610d43565b9550955095509550955095505f8c90508c421015610208578260095f82825461017591906135b9565b9091555061018d90506101866105ab565b428461102b565b61019a8c88878785611164565b5f6101a48e6112db565b90506101c26101b28e611321565b6101bc90836135cc565b8261134e565b6101cb8961138d565b6101d7576101d76113ec565b5f6101e18a611405565b90508061020157604051638bdf918d60e01b815260040160405180910390fd5b505061021f565b6102128689611411565b955061021d88611405565b505b5f61022b878a8d6114ed565b90508b81101561024e5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61025e600288610c39565b61026b60208301836135ff565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102a96040890160208a01613627565b6102bd8a6102b78d8f6135b9565b90611584565b8d6102cb60408c018c613642565b6040516102df9897969594939291906136ad565b60405180910390a450939c5050505050505050505050505061008060015f55565b5f610309610534565b6103128261055c565b7f00000000000000000000000000000000000000000000000000000000000000008410156103535760405163211ddda360e11b815260040160405180910390fd5b5f61035c610594565b905085421015610377576103716101066105ab565b50610387565b6103858682600460016105d6565b505b610395610134600188610c39565b5f805f805f806103a68b888e611598565b9550955095509550955095505f8c90508c421015610455578260095f8282546103cf91906135b9565b909155506103e090506101866105ab565b6103ed8c8887878561177a565b5f6103f7826112db565b905061040f6104058e611321565b6101bc90836136f4565b6104188961138d565b610424576104246113ec565b5f61042e8a611405565b90508061044e57604051638bdf918d60e01b815260040160405180910390fd5b505061046c565b61045f8689611411565b955061046a88611405565b505b5f610478878a8d6114ed565b90508b81101561049b5760405163c972651760e01b815260040160405180910390fd5b8c898c6104a9600186610c39565b6104b660208301836135ff565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee52678888876104f46040890160208a01613627565b8a61050260408b018b613642565b604051610515979695949392919061371b565b60405180910390a450919a505050505050505050505061008060015f55565b60025f540361055657604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f61056a60208301836135ff565b6001600160a01b0316036105915760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f6105a6670de0b6b3a764000061196a565b905090565b5f6105a6427f00000000000000000000000000000000000000000000000000000000000000006119df565b5f84815260086020526040812060018101546001600160801b03161515806105fd57504286115b1561061657600101546001600160801b03169050610080565b5f805f6106216105ab565b90505f61064e7f00000000000000000000000000000000000000000000000000000000000000008b6135b9565b90505b818110156106c2575f818152600860205260409020600101546001600160801b0316801561069a575f828152600860205260409020549094506001600160801b031692506106c2565b507f000000000000000000000000000000000000000000000000000000000000000001610651565b835f03610734578893506107316106d76119f4565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a14565b92505b5061073e83611a2a565b6001850180546001600160801b0319166001600160801b039290921691909117905561079461078d7f00000000000000000000000000000000000000000000000000000000000000008b61375b565b8a8461102b565b6107d2896107cc6107c57f0000000000000000000000000000000000000000000000000000000000000000836135b9565b4290611a53565b8461102b565b6107db88611a67565b505f905060088161080c7f00000000000000000000000000000000000000000000000000000000000000008d61375b565b815260208101919091526040015f908120600101546001600160801b0316915061083760028c610c39565b5f818152600b60205260408120549192508c8c831561097857600192505f8061086386898d865f611c04565b915091508060095f82825461087891906135b9565b909155506108939050865f8461088d81611321565b88611164565b61089d81836135b9565b91506108cd86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611cd1565b91506108e16108dc8385611584565b611d1a565b600680546002906109029084906201000090046001600160701b031661376e565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061092f82611a2a565b60068054601090610951908490600160801b90046001600160801b031661378e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610984600184610c39565b5f818152600b60205260409020549091508015610a8f57600194505f806109af838b8f886001611c04565b915091508060095f8282546109c491906135b9565b909155506109df9050835f846109d981611321565b8a61177a565b6109e9818361375b565b91506109f86108dc8387611584565b60068054600290610a199084906201000090046001600160701b031661376e565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a4682611a2a565b60068054601090610a68908490600160801b90046001600160801b031661378e565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610ac857610aba610aa187611321565b610aaa83611321565b610ab491906135cc565b5f61134e565b8e610ac58482611d43565b50505b5f610ad284611f32565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b88573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bac91906137ae565b90506001600160a01b03811615610c2057610c1d5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612074565b50505b509b9d5050505050505050505050505050949350505050565b5f6001600160f81b03821115610c625760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610caf57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610cf190849061375b565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f805f805f805f80610d536119f4565b90505f610d5f8a6120fa565b6002549091508c908c90610dc9908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f0000000000000000000000000000000000000000000000000000000000000000612149565b600254919d509a50909550610e31908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a14565b9550610e67858c610e62897f00000000000000000000000000000000000000000000000000000000000000006121b8565b6121e7565b15610e7457610e746113ec565b5f805f610e8385878b87612228565b9c5091945092509050610e96818461375b565b610ea090896135b9565b9750610eac82846135b9565b610eb6908d6135b9565b9b505050505050505f60085f7f00000000000000000000000000000000000000000000000000000000000000008c610eee919061375b565b815260208101919091526040015f908120600101546001600160801b03169150428b11610f34575f8b8152600860205260409020600101546001600160801b0316610f36565b8b5b90508b610f678e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611cd1565b9950610f73878a61375b565b9850670de0b6b3a7640000610ff0610f8b87876135b9565b600254610fa9908f90600160801b90046001600160801b031661375b565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a14565b1115610ffe57610ffe6113ec565b61100d8a8a878a87875f61233a565b939d50919b5090995090975050505050505093975093979195509350565b5f83815260086020526040902054600160801b90046001600160801b03168083036110565750505050565b5f848152600860205260408120546001600160801b0316908190036110ae5761107e83611a2a565b5f86815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561112b565b6110ff6110fa670de0b6b3a76400006110c7888661375b565b6110d191906137c9565b85670de0b6b3a76400006110e5878a61375b565b6110ef91906137c9565b8592919060016123d6565b611a2a565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61113484611a2a565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111ac6110fa82611190670de0b6b3a7640000866137c9565b600554600160801b90046001600160801b031691908a5f6123d6565b600580546001600160801b03928316600160801b0292169190911790556111d286611a2a565b6111dc90826137e0565b600480546001600160801b03928316600160801b02921691909117905561120284611a2a565b600280545f9061121c9084906001600160801b031661378e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112498361247c565b600480545f9061125d908490600f0b613800565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061128d85611a2a565b600280546010906112af908490600160801b90046001600160801b03166137e0565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f611300600b5f6112ed600286610c39565b81526020019081526020015f2054611321565b611311600b5f6112ed600187610c39565b61131b91906135cc565b92915050565b5f6001600160ff1b0382111561134a5760405163396ea70160e11b815260040160405180910390fd5b5090565b600354611369906110fa906001600160801b031684846124b7565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f6113b87f000000000000000000000000000000000000000000000000000000000000000083612519565b6003546113ce91906001600160801b03166135b9565b6002546113e4906001600160801b031684611584565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f61131b826004611d43565b5f805f61141d84611a67565b90925090505f61142d8686611584565b9050818311156114455761144286838561252d565b95505b8281101561145757808303925061145b565b5f92505b61146483611d1a565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156114b7578690036114ba565b505f5b6114c381611a2a565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b5f806114f98585611584565b905061150481612548565b9450845f03611516575f91505061157d565b8491506115296040840160208501613627565b15611558576115518561153f60208601866135ff565b61154c6040870187613642565b612582565b915061157b565b61157b8561156960208601866135ff565b6115766040870187613642565b612638565b505b9392505050565b5f61157d8383670de0b6b3a764000061252d565b5f805f805f805f806115a86119f4565b90505f6115b48a6120fa565b6002549091508b908d9061161e908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f0000000000000000000000000000000000000000000000000000000000000000612651565b600254919d509b509095505f908190819061168c908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a14565b985061169a84878b88612228565b9c5091945090925090506116ae828461375b565b6116b8908961375b565b97506116c481846135b9565b6116ce908e61375b565b9c506116da8a8e6135b9565b9b50505050505050506117648686838660085f7f00000000000000000000000000000000000000000000000000000000000000008f611719919061375b565b815260208101919091526040015f20600101546001600160801b0316428e1161175b575f8e8152600860205260409020600101546001600160801b031661175d565b8e5b600161233a565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b0316838110806117bc57507f00000000000000000000000000000000000000000000000000000000000000006117ba858361375b565b105b156117c9576117c96113ec565b6004549084900390600f0b6117de84826135cc565b9050836117ea86611321565b13801561181f57507f000000000000000000000000000000000000000000000000000000000000000061181d83836126a4565b105b1561182c5761182c6113ec565b600354600160801b90046001600160801b031661186d6110fa82611858670de0b6b3a7640000886137c9565b6005546001600160801b031691908c5f6123d6565b600580546001600160801b0319166001600160801b0392909216919091179055611897888261375b565b90506118a281611a2a565b600380546001600160801b03928316600160801b0292169190911790556118c883611a2a565b600280546001600160801b0319166001600160801b03929092169190911790556118f18261247c565b600480546001600160801b0319166001600160801b039290921691909117905561191a87611a2a565b6002805460109061193c908490600160801b90046001600160801b031661378e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60405163b88fed9f60e01b8152600481018290525f9073__$27b302b103d10b9a6b3339aabd1a10a718$__9063b88fed9f906024015b602060405180830381865af41580156119bb573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061131b919061382d565b5f6119ea8284613858565b61157d908461375b565b6002546004545f916105a6916001600160801b0390911690600f0b6126a4565b5f61007d82611a2485888861252d565b906126c9565b5f6001600160801b0382111561134a57604051630f0af95160e11b815260040160405180910390fd5b5f818311611a61578261157d565b50919050565b6006545f908190611a89908490600160801b90046001600160801b0316611584565b6006546201000090046001600160701b03169250905081811115611bff575f611ab2838361375b565b9050611ac16110fa8286612738565b60068054601090611ae3908490600160801b90046001600160801b03166137e0565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611b1b858361274c90919063ffffffff16565b90505f611b48827f0000000000000000000000000000000000000000000000000000000000000000611584565b90508060095f828254611b5b91906135b9565b90915550611b6b9050818361375b565b9150611b7682611a2a565b600280545f90611b909084906001600160801b031661378e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611bbd82612760565b600480545f90611bd1908490600f0b613800565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611c10878561274c565b91505f611c3d837f0000000000000000000000000000000000000000000000000000000000000000611584565b9050611c69817f0000000000000000000000000000000000000000000000000000000000000000611584565b91508315611c8c57611c7b828261375b565b611c85908461375b565b9250611ca3565b611c96828261375b565b611ca090846135b9565b92505b86861015611cc657611cb683878961252d565b9250611cc382878961252d565b91505b509550959350505050565b5f80611ce884611ce28a888a61252d565b9061274c565b9050611cf588848661252d565b611cff90826135b9565b905086811115611d0f5786810391505b509695505050505050565b5f6001600160701b0382111561134a5760405163086b151760e11b815260040160405180910390fd5b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611d8d916001600160801b03169061375b565b9050805f03611da057600191505061131b565b5f611daa85612789565b9050805f03611dbe5760019250505061131b565b5f80611dcb838589612824565b9150915080611de0575f94505050505061131b565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611e1b9291906138e9565b6040805180830381865af4158015611e35573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e59919061395e565b91509150611e77611e6982611321565b611e7290613980565b612998565b925082611e8c575f965050505050505061131b565b611e9582611a2a565b600780545f90611eaf9084906001600160801b031661378e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611edc81611a2a565b60078054601090611efe908490600160801b90046001600160801b031661378e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e611f5987612b2c565b6040518263ffffffff1660e01b8152600401611f75919061399a565b6040805180830381865af4158015611f8f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611fb391906139a9565b9150915080611fc857505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161202d916135b9565b612037919061375b565b9050805f0361204d57505f958695509350505050565b5f80871161205b575f612066565b61206684888461252d565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff811115612097576120976139d7565b6040519080825280601f01601f1916602001820160405280156120c1576020820181803683370190505b5090505f808751602089018b8e8ef191503d9250868311156120e1578692505b828152825f602083013e90999098509650505050505050565b5f806121046105ab565b9050808311612113575f61211d565b61211d818461375b565b915061157d827f000000000000000000000000000000000000000000000000000000000000000061274c565b5f808061216961216188670de0b6b3a764000061375b565b899087612c66565b905086156121ab5761217b8888612519565b915061219c8a8a846121958a670de0b6b3a764000061375b565b8989612c89565b92506121a883826135b9565b90505b9750975097945050505050565b5f6121d56121ce84670de0b6b3a764000061375b565b8390612519565b61157d90670de0b6b3a764000061375b565b5f8061221d856121f56119f4565b6121ff91906135b9565b600254610fa9908790600160801b90046001600160801b031661375b565b909210949350505050565b5f80808061227e87866122778b61227161224a8c670de0b6b3a764000061375b565b7f000000000000000000000000000000000000000000000000000000000000000090612519565b90612519565b9190612c66565b93506122aa847f0000000000000000000000000000000000000000000000000000000000000000611584565b91505f6122ca6122c289670de0b6b3a764000061375b565b8a9088612c66565b90506122f6817f0000000000000000000000000000000000000000000000000000000000000000612519565b9350612322847f0000000000000000000000000000000000000000000000000000000000000000611584565b61232c90846135b9565b915050945094509450949050565b5f805f805f80888810156123a657861561235c576123598d898b61252d565b9c505b6123678c898b61252d565b9b506123728b611321565b61237b8d611321565b61238591906135cc565b90506123928b898b61252d565b9a5061239f8a898b61252d565b99506123c5565b6123af8b611321565b6123b88d611321565b6123c291906135cc565b90505b9b9c9a9b999a975050505050505050565b5f825f036123e5575084612473565b8115612437576124166123f884876135b9565b6124028587611584565b61240c888a611584565b611ce291906135b9565b90505f6124238588611a53565b905080821015612431578091505b50612473565b82850361244557505f612473565b612470612452848761375b565b61245c8587612519565b612466888a611584565b611ce2919061375b565b90505b95945050505050565b5f60016001607f1b0319821280612499575060016001607f1b0382135b1561134a5760405163a5353be560e01b815260040160405180910390fd5b5f806124c3845f612cab565b6124cd845f612cab565b6124d791906135cc565b90505f8113156124f2576124eb81866135b9565b9450612510565b5f8112156125105761250381613980565b61250d908661375b565b94505b50929392505050565b5f61157d8383670de0b6b3a7640000612c66565b5f825f190484118302158202612541575f80fd5b5091020490565b6040516363737ac960e11b8152600481018290525f9073__$27b302b103d10b9a6b3339aabd1a10a718$__9063c6e6f592906024016119a0565b604051632e1a7d4d60e01b8152600481018590525f907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d906024015f604051808303815f87803b1580156125e3575f80fd5b505af11580156125f5573d5f803e3d5ffd5b505050506126028561196a565b90506100806001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168583612cc0565b60405163350b944160e11b815260040160405180910390fd5b5f808061267161266988670de0b6b3a764000061375b565b89908761252d565b905086156121ab576126838888611584565b915061219c8a8a8461269d8a670de0b6b3a764000061375b565b8989612d17565b5f806126b08484612d27565b9092509050806126c2576126c26113ec565b5092915050565b5f815f036126e05750670de0b6b3a764000061131b565b825f036126ee57505f61131b565b5f6126f883611321565b90505f61270c61270786611321565b612d62565b9050818102612723670de0b6b3a7640000826139eb565b905061272e81612f87565b9695505050505050565b5f61157d83670de0b6b3a764000084612c66565b5f61157d83670de0b6b3a76400008461252d565b5f60016001607f1b0382111561134a5760405163a5353be560e01b815260040160405180910390fd5b6003545f9081906127a3906001600160801b031684612738565b90506127cf7f0000000000000000000000000000000000000000000000000000000000000000826135b9565b6002546001600160801b03161115611a61576002547f00000000000000000000000000000000000000000000000000000000000000009061281a9083906001600160801b031661375b565b61157d919061375b565b61282c6134ac565b5f8061283784612b2c565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612871919061399a565b6040805180830381865af415801561288b573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906128af91906139a9565b93509050826128c357505f91506129909050565b5f6128e96128e484610160015185610140015161158490919063ffffffff16565b611321565b6129096128e485610120015186610100015161251990919063ffffffff16565b61291391906135cc565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612a4e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612a729190613a17565b935093509350935080612a8d57505f98975050505050505050565b868414612abe57612a9d84611a2a565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612aef57612ace8361247c565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612b1d57612aff82611a2a565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612b346134f6565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612c2c9116613119565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612c5e92900416613119565b905292915050565b5f825f190484118302158202612c7a575f80fd5b50910281810615159190040190565b5f80612c9988888888888861318d565b909250905080611d0f57611d0f6113ec565b5f818313612cb9578161157d565b5090919050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052612d12908490613269565b505050565b5f80612c998888888888886132cf565b5f805f83612d3486611321565b612d3e91906135cc565b90505f811215612d54575f809250925050612d5b565b9150600190505b9250929050565b5f808213612d835760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f19820190612e069084901c611321565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e198213612fa057505f919050565b680755bf798b4a1bf1e58212612fc9576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b01818105955092935090919061272e74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611321565b5f80670de0b6b3a764000061312c6105ab565b61313691906137c9565b9050808311613145575f61314f565b61314f818461375b565b915061157d613186670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006137c9565b839061274c565b5f805f61319d898988888861338b565b9050868810156131b3575f80925092505061325e565b96869003966131c288876126c9565b9750878110156131d8575f80925092505061325e565b8781036131e6818688612c66565b9050670de0b6b3a7640000811061321a5761321361320c670de0b6b3a764000089612738565b82906126c9565b9050613232565b61322f61320c670de0b6b3a76400008961274c565b90505b61323c8186612738565b905089811015613253575f8093509350505061325e565b899003925060019150505b965096945050505050565b5f61327d6001600160a01b038416836133b9565b905080515f141580156132a157508080602001905181019061329f9190613a4a565b155b15612d1257604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b5f805f6132df898988888861338b565b90506132ef86611a24898b6135b9565b975087811015613305575f80925092505061325e565b878103613313818688612c66565b9050670de0b6b3a764000081106133405761333961320c670de0b6b3a764000089612738565b9050613358565b61335561320c670de0b6b3a76400008961274c565b90505b6133628186612738565b9050808a1015613379575f8093509350505061325e565b90980398600198509650505050505050565b5f61339685856126c9565b6133af6133a786611a24868b612519565b859085612c66565b61247091906135b9565b606061157d83835f845f80856001600160a01b031684866040516133dd9190613a65565b5f6040518083038185875af1925050503d805f8114613417576040519150601f19603f3d011682016040523d82523d5f602084013e61341c565b606091505b509150915061272e86838360608261343c5761343782613483565b61157d565b815115801561345357506001600160a01b0384163b155b1561347c57604051639996b31560e01b81526001600160a01b03851660048201526024016132c6565b508061157d565b8051156134935780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061012001604052806134c06134f6565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f806080858703121561355e575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613589575f80fd5b85016060818803121561359a575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561131b5761131b6135a5565b8181035f8312801583831316838312821617156126c2576126c26135a5565b6001600160a01b0381168114610591575f80fd5b5f6020828403121561360f575f80fd5b813561157d816135eb565b8015158114610591575f80fd5b5f60208284031215613637575f80fd5b813561157d8161361a565b5f808335601e19843603018112613657575f80fd5b83018035915067ffffffffffffffff821115613671575f80fd5b602001915036819003821315612d5b575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f6136e660e083018486613685565b9a9950505050505050505050565b8082018281125f831280158216821582161715613713576137136135a5565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a08201525f61374e60c083018486613685565b9998505050505050505050565b8181038181111561131b5761131b6135a5565b6001600160701b038181168382160190808211156126c2576126c26135a5565b6001600160801b038181168382160190808211156126c2576126c26135a5565b5f602082840312156137be575f80fd5b815161157d816135eb565b808202811582820484141761131b5761131b6135a5565b6001600160801b038281168282160390808211156126c2576126c26135a5565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561131b5761131b6135a5565b5f6020828403121561383d575f80fd5b5051919050565b634e487b7160e01b5f52601260045260245ffd5b5f8261386657613866613844565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a0820190506138fc82855161386b565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f806040838503121561396f575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613994576139946135a5565b505f0390565b610180810161131b828461386b565b5f80604083850312156139ba575f80fd5b8251915060208301516139cc8161361a565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f826139f9576139f9613844565b600160ff1b82145f1984141615613a1257613a126135a5565b500590565b5f805f8060808587031215613a2a575f80fd5b845193506020850151925060408501519150606085015161359a8161361a565b5f60208284031215613a5a575f80fd5b815161157d8161361a565b5f82515f5b81811015613a845760208186018101518583015201613a6a565b505f92019182525091905056fea26469706673582212200173bd7545cd27b4a9728b29985fadba0f54ed9a0ebc434d05160ad1c694059464736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
  "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
} as const
};
