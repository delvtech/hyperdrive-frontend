export const StakingUSDSTarget2 = {
  name: 'StakingUSDSTarget2' as const,
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
  bytecode: '0x6102a060405234801562000011575f80fd5b50604051620045a9380380620045a98339810160408190526200003491620004ef565b60015f81905583516001600160a01b039081166080818152602080880151841660a0908152918801516101a052908701516101c05260c0808801516101e090815260e0808a015161020052610120808b0151909352610100808b0151909152610140808b0151909152908901805151909252815190920151909152805160409081015161016052905160609081015161018052908701518316610240528601516102605281851661022052908316610280528291620000f69190839062000100565b505050506200068a565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200015a9085908390620001cb16565b620001c557604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001b99186916200027516565b620001c5848262000275565b50505050565b5f805f846001600160a01b031684604051620001e891906200063b565b5f604051808303815f865af19150503d805f811462000223576040519150601f19603f3d011682016040523d82523d5f602084013e62000228565b606091505b5091509150818015620002565750805115806200025657508080602001905181019062000256919062000669565b80156200026c57505f856001600160a01b03163b115b95945050505050565b5f6200028b6001600160a01b03841683620002e6565b905080515f14158015620002b2575080806020019051810190620002b0919062000669565b155b15620002e157604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b6060620002f583835f620002fc565b9392505050565b606081471015620003235760405163cd78605960e01b8152306004820152602401620002d8565b5f80856001600160a01b031684866040516200034091906200063b565b5f6040518083038185875af1925050503d805f81146200037c576040519150601f19603f3d011682016040523d82523d5f602084013e62000381565b606091505b509092509050620003948683836200039e565b9695505050505050565b606082620003b757620003b18262000402565b620002f5565b8151158015620003cf57506001600160a01b0384163b155b15620003fa57604051639996b31560e01b81526001600160a01b0385166004820152602401620002d8565b5080620002f5565b805115620004135780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405161020081016001600160401b03811182821017156200045c57634e487b7160e01b5f52604160045260245ffd5b60405290565b80516001600160a01b038116811462000479575f80fd5b919050565b5f608082840312156200048f575f80fd5b604051608081016001600160401b0381118282101715620004be57634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f805f8385036102a081121562000504575f80fd5b6102608082121562000514575f80fd5b6200051e6200042c565b91506200052b8662000462565b82526200053b6020870162000462565b60208301526200054e6040870162000462565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620005b981880162000462565b90830152610180620005cd87820162000462565b908301526101a0620005e187820162000462565b908301526101c0620005f587820162000462565b908301526101e06200060a888883016200047e565b81840152508194506200061f81870162000462565b9350505062000632610280850162000462565b90509250925092565b5f82515f5b818110156200065c576020818601810151858301520162000640565b505f920191825250919050565b5f602082840312156200067a575f80fd5b81518015158114620002f5575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516102605161028051613d65620008445f395f81816116f8015261176f01525f50505f50505f610c2801525f50505f818160f9015281816103020152612db101525f818161152f01528181611d3901528181611d9c01528181612523015281816129a1015281816129dd01528181612bce0152612d8b01525f81816107e601528181610d8201528181610dc401528181610eb60152818161131c0152818161137a0152612d6501525f61196301525f8181611a84015281816126140152818161268c0152612ec901525f81816109a301528181610e370152818161141501528181611a58015261266001525f8181610e16015281816125e00152612e8501525f818161080701528181610d6001528181610de501528181610ed7015281816112fa0152818161139b0152612dd701525f81816101d301528181610396015281816108e1015261345501525f81816106a7015281816107230152818161079701528181610862015261089a01525f50505f81816116cb015261172c0152613d655ff3fe608060405260043610610028575f3560e01c8063cba2e58d1461002c578063dbbe807014610058575b5f80fd5b61003f61003a3660046137e9565b61006b565b6040805192835260208301919091520160405180910390f35b61003f6100663660046137e9565b610087565b5f8061007986868686610095565b915091505b94509492505050565b5f80610079868686866102bc565b5f8061009f610531565b600654610100900460ff16156100c8576040516321081abf60e01b815260040160405180910390fd5b6100d0610559565b6100d98361057a565b5f806100e588866105b2565b90925090505f6100f58383610683565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101385760405163211ddda360e11b815260040160405180910390fd5b86821015610159576040516342af972b60e01b815260040160405180910390fd5b5f6101626106a0565b90506101728184600460016106d0565b505f805f6101808787610d34565b919a5091945090925090508b8810156101ac5760405163c972651760e01b815260040160405180910390fd5b8160095f8282546101bd9190613857565b909155506101ce9050844283610f13565b6101f87f000000000000000000000000000000000000000000000000000000000000000085613857565b98506102068389888c61104c565b5f61021260018b6111e3565b905061022b8161022560208e018e61387e565b8b611217565b8d8a8a898e8561023e602083018361387e565b6001600160a01b03167f7fc9757758f4c7f2eb9f011c4500beb349847d2f2acbdd5ffce3e2f01e79903a86888661027b60408801602089016138a6565b8961028960408a018a6138c1565b60405161029c979695949392919061392c565b60405180910390a350909b50505050505050505050505061007e60015f55565b5f806102c6610531565b600654610100900460ff16156102ef576040516321081abf60e01b815260040160405180910390fd5b6102f7610559565b6103008361057a565b7f00000000000000000000000000000000000000000000000000000000000000008610156103415760405163211ddda360e11b815260040160405180910390fd5b5f61034a6112bc565b90508481101561036d576040516342af972b60e01b815260040160405180910390fd5b5f6103766106a0565b90505f61038e6103846106a0565b84600460016106d0565b90505f6103bb7f000000000000000000000000000000000000000000000000000000000000000084613857565b90505f805f806103cc8e89886112ce565b60098054949850929650909450925083915f906103ea908490613857565b909155506103fb9050874283610f13565b61040d610408858a611450565b611464565b610418906001613857565b9350505f61042784898d6114d8565b9050808d101561044a5760405163c972651760e01b815260040160405180910390fd5b610454818c6105b2565b508e905061046481858b89611509565b5f6104706002886111e3565b90508c61048a82610484602084018461387e565b85611217565b858b868461049b602086018661387e565b6001600160a01b03167ffa6dd2e3e152dbc3fe91196c0b8aa871c26fd7a1d07de126ec3159fd4ede2c758d8a866104d860408b0160208c016138a6565b6104ec896104e68a8d61396c565b90610683565b8d6104fa60408e018e6138c1565b60405161050e98979695949392919061397f565b60405180910390a350989d50939b50505050505050505050505061007e60015f55565b60025f540361055357604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b341561057857604051631574f9f360e01b815260040160405180910390fd5b565b5f610588602083018361387e565b6001600160a01b0316036105af5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b815f806105c560408501602086016138a6565b156105ea576105e0856105db60408701876138c1565b6116bc565b9093509050610602565b5034610602856105fd60408701876138c1565b6117dd565b61060a6112bc565b9150801561067a576040515f90339083908381818185875af1925050503d805f8114610651576040519150601f19603f3d011682016040523d82523d5f602084013e610656565b606091505b5050905080610678576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f6106978383670de0b6b3a76400006117f6565b90505b92915050565b5f6106cb427f0000000000000000000000000000000000000000000000000000000000000000611811565b905090565b5f84815260086020526040812060018101546001600160801b03161515806106f757504286115b1561071057600101546001600160801b03169050610d2c565b5f805f61071b6106a0565b90505f6107487f00000000000000000000000000000000000000000000000000000000000000008b613857565b90505b818110156107bc575f818152600860205260409020600101546001600160801b03168015610794575f828152600860205260409020549094506001600160801b031692506107bc565b507f00000000000000000000000000000000000000000000000000000000000000000161074b565b835f0361082e5788935061082b6107d1611826565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611846565b92505b5061083883611865565b6001850180546001600160801b0319166001600160801b039290921691909117905561088e6108877f00000000000000000000000000000000000000000000000000000000000000008b61396c565b8a84610f13565b6108cc896108c66108bf7f000000000000000000000000000000000000000000000000000000000000000083613857565b4290611892565b84610f13565b6108d5886118a6565b505f90506008816109067f00000000000000000000000000000000000000000000000000000000000000008d61396c565b815260208101919091526040015f908120600101546001600160801b0316915061093160028c6111e3565b5f818152600b60205260408120549192508c8c8315610a7257600192505f8061095d86898d865f611a43565b915091508060095f8282546109729190613857565b9091555061098d9050865f8461098781611b10565b88611b39565b6109978183613857565b91506109c786838a8e877f0000000000000000000000000000000000000000000000000000000000000000611cb0565b91506109db6109d68385610683565b611cf9565b600680546002906109fc9084906201000090046001600160701b03166139c6565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a2982611865565b60068054601090610a4b908490600160801b90046001600160801b03166139e6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610a7e6001846111e3565b5f818152600b60205260409020549091508015610b8957600194505f80610aa9838b8f886001611a43565b915091508060095f828254610abe9190613857565b90915550610ad99050835f84610ad381611b10565b8a611d22565b610ae3818361396c565b9150610af26109d68387610683565b60068054600290610b139084906201000090046001600160701b03166139c6565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610b4082611865565b60068054601090610b62908490600160801b90046001600160801b03166139e6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610bc257610bb4610b9b87611b10565b610ba483611b10565b610bae9190613a06565b5f611f12565b8e610bbf8482611f51565b50505b5f610bcc84612140565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c82573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ca69190613a25565b90506001600160a01b03811615610d1a57610d175a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612282565b50505b509b9d50505050505050505050505050505b949350505050565b5f805f805f610d41611826565b600254909150610da6908290600160801b90046001600160801b0316897f00000000000000000000000000000000000000000000000000000000000000008a7f0000000000000000000000000000000000000000000000000000000000000000612308565b600254909450610e09908290600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611846565b9150610e608785610e5b857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612333565b612397565b15610e6d57610e6d6123d8565b610e79878588856123f1565b91965094509250670de0b6b3a7640000610efb610e968784613857565b600254610eb4908890600160801b90046001600160801b031661396c565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611846565b1115610f0957610f096123d8565b5092959194509250565b5f83815260086020526040902054600160801b90046001600160801b0316808303610f3e5750505050565b5f848152600860205260408120546001600160801b031690819003610f9657610f6683611865565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611013565b610fe7610fe2670de0b6b3a7640000610faf888661396c565b610fb99190613a40565b85670de0b6b3a7640000610fcd878a61396c565b610fd79190613a40565b859291906001612439565b611865565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61101c84611865565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600354600160801b90046001600160801b031661108e610fe282611078670de0b6b3a764000086613a40565b6005546001600160801b03169190886001612439565b600580546001600160801b0319166001600160801b03929092169190911790556110b785611865565b600280545f906110d19084906001600160801b03166139e6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110fe84611865565b60028054601090611120908490600160801b90046001600160801b0316613a57565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061114d84611865565b61115790826139e6565b600380546001600160801b03808416600160801b02911617905590505f61117d836124dd565b905061119b8161118c87611b10565b6111969084613a77565b611f12565b6111a48461251d565b6111b0576111b06123d8565b5f6111ba8561257c565b9050806111da57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b5f6001600160f81b0382111561120c5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290611248908490613857565b90915550505f838152600b60205260408120805483929061126a908490613857565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6106cb670de0b6b3a7640000611464565b5f805f805f6112db611826565b600254909150611340908290600160801b90046001600160801b03168a7f00000000000000000000000000000000000000000000000000000000000000008b7f0000000000000000000000000000000000000000000000000000000000000000612588565b93508761134d85896125a8565b111561135b5761135b6123d8565b6002545f9081906113bf908490600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611846565b93506113d58a670de0b6b3a7640000868c6125bc565b509193509091506113e89050818361396c565b6113f2908761396c565b95508861143f816114398d611407868c61396c565b8d61141287826126c8565b877f00000000000000000000000000000000000000000000000000000000000000006126dd565b906125a8565b975090945050505093509350935093565b5f61069783670de0b6b3a7640000846126fd565b60405163b88fed9f60e01b8152600481018290525f9073__$27b302b103d10b9a6b3339aabd1a10a718$__9063b88fed9f90602401602060405180830381865af41580156114b4573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061069a9190613a9e565b5f6114e960408301602084016138a6565b156114f5575082611502565b6114ff8484612720565b90505b9392505050565b6002546001600160801b031683811015611525576115256123d8565b60045490849003907f00000000000000000000000000000000000000000000000000000000000000009061155d908390600f0b612734565b101561156b5761156b6123d8565b6004546115b590610fe290600160801b90046001600160801b0316611598670de0b6b3a764000086613a40565b600554600160801b90046001600160801b03169190896001612439565b600580546001600160801b03928316600160801b0292169190911790556115db81611865565b600280546001600160801b0319166001600160801b039290921691909117905561160485611865565b60028054601090611626908490600160801b90046001600160801b03166139e6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061165385611865565b60048054601090611675908490600160801b90046001600160801b03166139e6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f6116a3836124dd565b905061119b816116b288611b10565b6111969084613a06565b5f806116f36001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612759565b6117537f0000000000000000000000000000000000000000000000000000000000000000611722876001613857565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691906127c6565b6040516342ea02c160e01b8152600481018690525f60248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342ea02c1906044015f604051808303815f87803b1580156117b8575f80fd5b505af11580156117ca573d5f803e3d5ffd5b50505050845f915091505b935093915050565b60405163350b944160e11b815260040160405180910390fd5b5f825f19048411830215820261180a575f80fd5b5091020490565b5f61181c8284613ac9565b610697908461396c565b6002546004545f916106cb916001600160801b0390911690600f0b612734565b5f61185c826118568588886117f6565b90612855565b95945050505050565b5f6001600160801b0382111561188e57604051630f0af95160e11b815260040160405180910390fd5b5090565b5f8183116118a05782610697565b50919050565b6006545f9081906118c8908490600160801b90046001600160801b0316610683565b6006546201000090046001600160701b03169250905081811115611a3e575f6118f1838361396c565b9050611900610fe28286611450565b60068054601090611922908490600160801b90046001600160801b0316613a57565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f61195a858361272090919063ffffffff16565b90505f611987827f0000000000000000000000000000000000000000000000000000000000000000610683565b90508060095f82825461199a9190613857565b909155506119aa9050818361396c565b91506119b582611865565b600280545f906119cf9084906001600160801b03166139e6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506119fc826128ba565b600480545f90611a10908490600f0b613adc565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611a4f8785612720565b91505f611a7c837f0000000000000000000000000000000000000000000000000000000000000000610683565b9050611aa8817f0000000000000000000000000000000000000000000000000000000000000000610683565b91508315611acb57611aba828261396c565b611ac4908461396c565b9250611ae2565b611ad5828261396c565b611adf9084613857565b92505b86861015611b0557611af58387896117f6565b9250611b028287896117f6565b91505b509550959350505050565b5f6001600160ff1b0382111561188e5760405163396ea70160e11b815260040160405180910390fd5b600454600160801b90046001600160801b0316611b81610fe282611b65670de0b6b3a764000086613a40565b600554600160801b90046001600160801b031691908a5f612439565b600580546001600160801b03928316600160801b029216919091179055611ba786611865565b611bb19082613a57565b600480546001600160801b03928316600160801b029216919091179055611bd784611865565b600280545f90611bf19084906001600160801b03166139e6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c1e836128e3565b600480545f90611c32908490600f0b613adc565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611c6285611865565b60028054601090611c84908490600160801b90046001600160801b0316613a57565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f80611cc784611cc18a888a6117f6565b90612720565b9050611cd48884866117f6565b611cde9082613857565b905086811115611cee5786810391505b509695505050505050565b5f6001600160701b0382111561188e5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b031683811080611d6457507f0000000000000000000000000000000000000000000000000000000000000000611d62858361396c565b105b15611d7157611d716123d8565b6004549084900390600f0b611d868482613a06565b905083611d9286611b10565b138015611dc757507f0000000000000000000000000000000000000000000000000000000000000000611dc58383612734565b105b15611dd457611dd46123d8565b600354600160801b90046001600160801b0316611e15610fe282611e00670de0b6b3a764000088613a40565b6005546001600160801b031691908c5f612439565b600580546001600160801b0319166001600160801b0392909216919091179055611e3f888261396c565b9050611e4a81611865565b600380546001600160801b03928316600160801b029216919091179055611e7083611865565b600280546001600160801b0319166001600160801b0392909216919091179055611e99826128e3565b600480546001600160801b0319166001600160801b0392909216919091179055611ec287611865565b60028054601090611ee4908490600160801b90046001600160801b03166139e6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b600354611f2d90610fe2906001600160801b0316848461291e565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611f9b916001600160801b03169061396c565b9050805f03611fae57600191505061069a565b5f611fb885612980565b9050805f03611fcc5760019250505061069a565b5f80611fd9838589612a1b565b9150915080611fee575f94505050505061069a565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401612029929190613b87565b6040805180830381865af4158015612043573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120679190613bfc565b9150915061208561207782611b10565b61208090613c1e565b612b88565b92508261209a575f965050505050505061069a565b6120a382611865565b600780545f906120bd9084906001600160801b03166139e6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506120ea81611865565b6007805460109061210c908490600160801b90046001600160801b03166139e6565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61216787612d1c565b6040518263ffffffff1660e01b81526004016121839190613c38565b6040805180830381865af415801561219d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906121c19190613c47565b91509150806121d657505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b03169161223b91613857565b612245919061396c565b9050805f0361225b57505f958695509350505050565b5f808711612269575f612274565b6122748488846117f6565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff8111156122a5576122a5613c75565b6040519080825280601f01601f1916602001820160405280156122cf576020820181803683370190505b5090505f808751602089018b8e8ef191503d9250868311156122ef578692505b828152825f602083013e90999098509650505050505050565b5f61232887878761232188670de0b6b3a764000061396c565b8787612e56565b979650505050505050565b5f6114ff61237361234c84670de0b6b3a764000061396c565b611439670de0b6b3a7640000612362818a611450565b61236c919061396c565b87906125a8565b61238590670de0b6b3a7640000613857565b611cc184670de0b6b3a764000061396c565b5f806123cd856123a5611826565b6123af9190613857565b600254610eb4908790600160801b90046001600160801b031661396c565b909210949350505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f805f805f612401898789612e78565b9092509050612410828961396c565b97505f61241e82888a6117f6565b905061242a818b61396c565b9a989950979650505050505050565b5f825f0361244857508461185c565b811561249a5761247961245b8487613857565b6124658587610683565b61246f888a610683565b611cc19190613857565b90505f6124868588611892565b905080821015612494578091505b5061185c565b8285036124a857505f61185c565b6124d36124b5848761396c565b6124bf85876125a8565b6124c9888a610683565b611cc1919061396c565b9695505050505050565b5f612502600b5f6124ef6002866111e3565b81526020019081526020015f2054611b10565b612513600b5f6124ef6001876111e3565b61069a9190613a06565b5f6125487f0000000000000000000000000000000000000000000000000000000000000000836125a8565b60035461255e91906001600160801b0316613857565b600254612574906001600160801b031684610683565b101592915050565b5f61069a826004611f51565b5f6123288787876125a188670de0b6b3a764000061396c565b8787612ef7565b5f6106978383670de0b6b3a76400006126fd565b5f80808061260c87866126058b6114396125de8c670de0b6b3a764000061396c565b7f0000000000000000000000000000000000000000000000000000000000000000906125a8565b91906126fd565b9350612638847f0000000000000000000000000000000000000000000000000000000000000000610683565b91505f61265861265089670de0b6b3a764000061396c565b8a90886126fd565b9050612684817f00000000000000000000000000000000000000000000000000000000000000006125a8565b93506126b0847f0000000000000000000000000000000000000000000000000000000000000000610683565b6126ba9084613857565b915050945094509450949050565b5f8183116126d65781610697565b5090919050565b5f806126f4846126ee8a888a6126fd565b90611450565b9050611cd48884865b5f825f190484118302158202612711575f80fd5b50910281810615159190040190565b5f61069783670de0b6b3a7640000846117f6565b5f806127408484612f07565b909250905080612752576127526123d8565b5092915050565b6040516001600160a01b0384811660248301528381166044830152606482018390526127c09186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612f3f565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526128178482612faa565b6127c0576040516001600160a01b0384811660248301525f604483015261284b91869182169063095ea7b39060640161278e565b6127c08482612f3f565b5f815f0361286c5750670de0b6b3a764000061069a565b825f0361287a57505f61069a565b5f61288483611b10565b90505f61289861289386611b10565b613047565b90508181026128af670de0b6b3a764000082613c89565b90506124d38161326c565b5f60016001607f1b0382111561188e5760405163a5353be560e01b815260040160405180910390fd5b5f60016001607f1b0319821280612900575060016001607f1b0382135b1561188e5760405163a5353be560e01b815260040160405180910390fd5b5f8061292a845f6133fe565b612934845f6133fe565b61293e9190613a06565b90505f811315612959576129528186613857565b9450612977565b5f8112156129775761296a81613c1e565b612974908661396c565b94505b50929392505050565b6003545f90819061299a906001600160801b031684611450565b90506129c67f000000000000000000000000000000000000000000000000000000000000000082613857565b6002546001600160801b031611156118a0576002547f000000000000000000000000000000000000000000000000000000000000000090612a119083906001600160801b031661396c565b611502919061396c565b612a2361374a565b5f80612a2e84612d1c565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612a689190613c38565b6040805180830381865af4158015612a82573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612aa69190613c47565b9350905082612aba57505f91506117d59050565b5f612ae0612adb84610160015185610140015161068390919063ffffffff16565b611b10565b612b00612adb8561012001518661010001516125a890919063ffffffff16565b612b0a9190613a06565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612c3e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612c629190613cb5565b935093509350935080612c7d57505f98975050505050505050565b868414612cae57612c8d84611865565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612cdf57612cbe836128e3565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612d0d57612cef82611865565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612d24613794565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612e1c911661340c565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612e4e9290041661340c565b905292915050565b5f80612e66888888888888613480565b909250905080611cee57611cee6123d8565b5f80612ec18561143985817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612eb7818c611450565b611439919061396c565b9150612eed827f0000000000000000000000000000000000000000000000000000000000000000610683565b9050935093915050565b5f80612e66888888888888613544565b5f805f83612f1486611b10565b612f1e9190613a06565b90505f811215612f34575f80925092505061067c565b946001945092505050565b5f612f536001600160a01b03841683613600565b905080515f14158015612f77575080806020019051810190612f759190613ce8565b155b15612fa557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b5f805f846001600160a01b031684604051612fc59190613d03565b5f604051808303815f865af19150503d805f8114612ffe576040519150601f19603f3d011682016040523d82523d5f602084013e613003565b606091505b509150915081801561302d57508051158061302d57508080602001905181019061302d9190613ce8565b801561185c5750505050506001600160a01b03163b151590565b5f8082136130685760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906130eb9084901c611b10565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361328557505f919050565b680755bf798b4a1bf1e582126132ae576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906124d374029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611b10565b5f8183136126d65781610697565b5f80670de0b6b3a764000061341f6106a0565b6134299190613a40565b9050808311613438575f613442565b613442818461396c565b9150611502613479670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613a40565b8390612720565b5f805f613490898988888861360d565b90506134aa866118566134a38a8d613857565b8790610683565b98506134b7858a866117f6565b9850888110156134cd575f809250925050613539565b888103670de0b6b3a76400008110613502576134fb6134f4670de0b6b3a764000089611450565b8290612855565b905061351a565b6135176134f4670de0b6b3a764000089612720565b90505b8089101561352f575f80935093505050613539565b8803925060019150505b965096945050505050565b5f805f613554898988888861360d565b905061356486611856898b613857565b97508781101561357a575f809250925050613539565b8781036135888186886126fd565b9050670de0b6b3a764000081106135b5576135ae6134f4670de0b6b3a764000089611450565b90506135cd565b6135ca6134f4670de0b6b3a764000089612720565b90505b6135d78186611450565b9050808a10156135ee575f80935093505050613539565b90980398600198509650505050505050565b606061069783835f61363b565b5f6136188585612855565b61363161362986611856868b6125a8565b8590856126fd565b6124d39190613857565b6060814710156136605760405163cd78605960e01b8152306004820152602401612f9c565b5f80856001600160a01b0316848660405161367b9190613d03565b5f6040518083038185875af1925050503d805f81146136b5576040519150601f19603f3d011682016040523d82523d5f602084013e6136ba565b606091505b50915091506124d38683836060826136da576136d582613721565b611502565b81511580156136f157506001600160a01b0384163b155b1561371a57604051639996b31560e01b81526001600160a01b0385166004820152602401612f9c565b5080611502565b8051156137315780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60405180610120016040528061375e613794565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f80608085870312156137fc575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613827575f80fd5b850160608188031215613838575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561069a5761069a613843565b6001600160a01b03811681146105af575f80fd5b5f6020828403121561388e575f80fd5b81356115028161386a565b80151581146105af575f80fd5b5f602082840312156138b6575f80fd5b813561150281613899565b5f808335601e198436030181126138d6575f80fd5b83018035915067ffffffffffffffff8211156138f0575f80fd5b60200191503681900382131561067c575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b878152866020820152856040820152841515606082015283608082015260c060a08201525f61395f60c083018486613904565b9998505050505050505050565b8181038181111561069a5761069a613843565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f6139b860e083018486613904565b9a9950505050505050505050565b6001600160701b0381811683821601908082111561275257612752613843565b6001600160801b0381811683821601908082111561275257612752613843565b8181035f83128015838313168383128216171561275257612752613843565b5f60208284031215613a35575f80fd5b81516115028161386a565b808202811582820484141761069a5761069a613843565b6001600160801b0382811682821603908082111561275257612752613843565b8082018281125f831280158216821582161715613a9657613a96613843565b505092915050565b5f60208284031215613aae575f80fd5b5051919050565b634e487b7160e01b5f52601260045260245ffd5b5f82613ad757613ad7613ab5565b500690565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561069a5761069a613843565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050613b9a828551613b09565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613c0d575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613c3257613c32613843565b505f0390565b610180810161069a8284613b09565b5f8060408385031215613c58575f80fd5b825191506020830151613c6a81613899565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f82613c9757613c97613ab5565b600160ff1b82145f1984141615613cb057613cb0613843565b500590565b5f805f8060808587031215613cc8575f80fd5b845193506020850151925060408501519150606085015161383881613899565b5f60208284031215613cf8575f80fd5b815161150281613899565b5f82515f5b81811015613d225760208186018101518583015201613d08565b505f92019182525091905056fea2646970667358221220c7e2feba07542200016a39155ae6061f21c5e701d8284d1b5bc5b64dd882b4ed64736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
  "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070"
} as const
};
