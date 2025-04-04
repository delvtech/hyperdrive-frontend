export const MorphoBlueTarget1 = {
  name: 'MorphoBlueTarget1' as const,
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
        "name": "_params",
        "type": "tuple",
        "internalType": "struct IMorphoBlueHyperdrive.MorphoBlueParams",
        "components": [
          {
            "name": "morpho",
            "type": "address",
            "internalType": "contract IMorpho"
          },
          {
            "name": "collateralToken",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "oracle",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "irm",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "lltv",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
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
  bytecode: '0x61032060405234801562000011575f80fd5b5060405162004565380380620045658339810160408190526200003491620005c8565b60015f81905583516001600160a01b039081166080818152602080880151841660a0908152828901516101a0528801516101c05260c0808901516101e090815260e0808b015161020052610120808c0151909352610100808c0151909152610140808c0151909152908a0180515190925281518301519052805160409081015161016052905160609081015161018052818a0151861661024052808a01516102605285891661022052875186166102808190529288015186166102a0529087015185166102c0528601519093166102e0528401516103005283926200011a929062000124565b5050505062000764565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200017e9085908390620001ef16565b620001e957604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001dd9186916200029916565b620001e9848262000299565b50505050565b5f805f846001600160a01b0316846040516200020c919062000715565b5f604051808303815f865af19150503d805f811462000247576040519150601f19603f3d011682016040523d82523d5f602084013e6200024c565b606091505b50915091508180156200027a5750805115806200027a5750808060200190518101906200027a919062000743565b80156200029057505f856001600160a01b03163b115b95945050505050565b5f620002af6001600160a01b038416836200030a565b905080515f14158015620002d6575080806020019051810190620002d4919062000743565b155b156200030557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200031983835f62000320565b9392505050565b606081471015620003475760405163cd78605960e01b8152306004820152602401620002fc565b5f80856001600160a01b0316848660405162000364919062000715565b5f6040518083038185875af1925050503d805f8114620003a0576040519150601f19603f3d011682016040523d82523d5f602084013e620003a5565b606091505b509092509050620003b8868383620003c2565b9695505050505050565b606082620003db57620003d58262000426565b62000319565b8151158015620003f357506001600160a01b0384163b155b156200041e57604051639996b31560e01b81526001600160a01b0385166004820152602401620002fc565b508062000319565b805115620004375780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b03811182821017156200048357634e487b7160e01b5f52604160045260245ffd5b60405290565b6001600160a01b038116811462000450575f80fd5b8051620004ab8162000489565b919050565b5f60808284031215620004c1575f80fd5b604051608081016001600160401b0381118282101715620004f057634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f60a0828403121562000532575f80fd5b60405160a081016001600160401b03811182821017156200056157634e487b7160e01b5f52604160045260245ffd5b80604052508091508251620005768162000489565b81526020830151620005888162000489565b602082015260408301516200059d8162000489565b60408201526060830151620005b28162000489565b6060820152608092830151920191909152919050565b5f805f838503610320811215620005dd575f80fd5b61026080821215620005ed575f80fd5b620005f762000453565b915062000604866200049e565b825262000614602087016200049e565b602083015262000627604087016200049e565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620006928188016200049e565b90830152610180620006a68782016200049e565b908301526101a0620006ba8782016200049e565b908301526101c0620006ce8782016200049e565b908301526101e0620006e388888301620004b0565b8184015250819450620006f88187016200049e565b935050506200070c85610280860162000521565b90509250925092565b5f82515f5b818110156200073657602081860181015185830152016200071a565b505f920191825250919050565b5f6020828403121562000754575f80fd5b8151801515811462000319575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e05161030051613bee620009775f395f8181611a45015281816126f2015261282701525f8181611a23015281816126d001526127f801525f8181611a01015281816126ae01526127c901525f81816119df0152818161268c015261279a01525f818161199b01528181612648015261273101525f50505f50505f610b2e01525f50505f818160a9015281816103140152612e9c01525f818161139301528181611791015281816117f401528181612a8501528181612ac101528181612cb90152612e7601525f81816106ec01528181610da501528181610dec01528181610fab015281816115fa015281816116470152612e5001525f611bf301525f8181611d140152818161235501526123cd01525f81816108a901528181610f4301528181611ce801526123a101525f8181610e3e015261231b01525f818161070d01528181610d8301528181610e0d01528181610fcc015281816115d8015281816116680152612ec201525f81816107e701528181610ec4015281816116ef015281816121f401526133e601525f81816105b2015281816106290152818161069d0152818161076801526107a001525f50505f81816119bd0152818161266a015261276b0152613bee5ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c806329b23fc114610038578063ded062311461005d575b5f80fd5b61004b610046366004613676565b610070565b60405190815260200160405180910390f35b61004b61006b366004613676565b610088565b5f61007d85858585610095565b90505b949350505050565b5f61007d85858585610300565b5f61009e610534565b6100a78261055c565b7f00000000000000000000000000000000000000000000000000000000000000008410156100e85760405163211ddda360e11b815260040160405180910390fd5b5f6100f1610594565b905085421015610116576101106101066105ab565b82600460016105d6565b50610126565b6101248682600460016105d6565b505b61013b610134600288610c39565b3387610c6d565b5f805f805f8061014c8b888e610d43565b9550955095509550955095505f8c90508c421015610208578260095f82825461017591906136e4565b9091555061018d90506101866105ab565b428461102b565b61019a8c88878785611164565b5f6101a48e6112db565b90506101c26101b28e611321565b6101bc90836136f7565b8261134e565b6101cb8961138d565b6101d7576101d76113ec565b5f6101e18a611405565b90508061020157604051638bdf918d60e01b815260040160405180910390fd5b505061021f565b6102128689611411565b955061021d88611405565b505b5f61022b878a8d6114ed565b90508b81101561024e5760405163c972651760e01b815260040160405180910390fd5b8c86858b8e61025e600288610c39565b61026b602083018361372a565b6001600160a01b0316337ff87a3de08b9fe89d655d6731088496cf5f5da0abd455e9f7cdc5f0c717f209e58a8a876102a96040890160208a01613752565b6102bd8a6102b78d8f6136e4565b90611584565b8d6102cb60408c018c61376d565b6040516102df9897969594939291906137d8565b60405180910390a450939c5050505050505050505050505061008060015f55565b5f610309610534565b6103128261055c565b7f00000000000000000000000000000000000000000000000000000000000000008410156103535760405163211ddda360e11b815260040160405180910390fd5b5f61035c610594565b905085421015610377576103716101066105ab565b50610387565b6103858682600460016105d6565b505b610395610134600188610c39565b5f805f805f806103a68b888e611598565b9550955095509550955095505f8c90508c421015610455578260095f8282546103cf91906136e4565b909155506103e090506101866105ab565b6103ed8c8887878561177a565b5f6103f7826112db565b905061040f6104058e611321565b6101bc908361381f565b6104188961138d565b610424576104246113ec565b5f61042e8a611405565b90508061044e57604051638bdf918d60e01b815260040160405180910390fd5b505061046c565b61045f8689611411565b955061046a88611405565b505b5f610478878a8d6114ed565b90508b81101561049b5760405163c972651760e01b815260040160405180910390fd5b8c898c6104a9600186610c39565b6104b6602083018361372a565b6001600160a01b0316337f3b2c44173852b22d1ecf7784963c2bab6d4dd07e64ed560f818f144d72ee52678888876104f46040890160208a01613752565b8a61050260408b018b61376d565b6040516105159796959493929190613846565b60405180910390a450919a505050505050505050505061008060015f55565b60025f540361055657604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b5f61056a602083018361372a565b6001600160a01b0316036105915760405163f0dd15fd60e01b815260040160405180910390fd5b50565b5f6105a6670de0b6b3a764000061196a565b905090565b5f6105a6427f0000000000000000000000000000000000000000000000000000000000000000611aae565b5f84815260086020526040812060018101546001600160801b03161515806105fd57504286115b1561061657600101546001600160801b03169050610080565b5f805f6106216105ab565b90505f61064e7f00000000000000000000000000000000000000000000000000000000000000008b6136e4565b90505b818110156106c2575f818152600860205260409020600101546001600160801b0316801561069a575f828152600860205260409020549094506001600160801b031692506106c2565b507f000000000000000000000000000000000000000000000000000000000000000001610651565b835f03610734578893506107316106d7611ac3565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ae3565b92505b5061073e83611af9565b6001850180546001600160801b0319166001600160801b039290921691909117905561079461078d7f00000000000000000000000000000000000000000000000000000000000000008b613886565b8a8461102b565b6107d2896107cc6107c57f0000000000000000000000000000000000000000000000000000000000000000836136e4565b4290611b22565b8461102b565b6107db88611b36565b505f905060088161080c7f00000000000000000000000000000000000000000000000000000000000000008d613886565b815260208101919091526040015f908120600101546001600160801b0316915061083760028c610c39565b5f818152600b60205260408120549192508c8c831561097857600192505f8061086386898d865f611cd3565b915091508060095f82825461087891906136e4565b909155506108939050865f8461088d81611321565b88611164565b61089d81836136e4565b91506108cd86838a8e877f0000000000000000000000000000000000000000000000000000000000000000611da0565b91506108e16108dc8385611584565b611de9565b600680546002906109029084906201000090046001600160701b0316613899565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061092f82611af9565b60068054601090610951908490600160801b90046001600160801b03166138b9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f610984600184610c39565b5f818152600b60205260409020549091508015610a8f57600194505f806109af838b8f886001611cd3565b915091508060095f8282546109c491906136e4565b909155506109df9050835f846109d981611321565b8a61177a565b6109e98183613886565b91506109f86108dc8387611584565b60068054600290610a199084906201000090046001600160701b0316613899565b92506101000a8154816001600160701b0302191690836001600160701b03160217905550610a4682611af9565b60068054601090610a68908490600160801b90046001600160801b03166138b9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b8415610ac857610aba610aa187611321565b610aaa83611321565b610ab491906136f7565b5f61134e565b8e610ac58482611e12565b50505b5f610ad284612001565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b88573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bac91906138d9565b90506001600160a01b03811615610c2057610c1d5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b03861693929190612143565b50505b509b9d5050505050505050505050505050949350505050565b5f6001600160f81b03821115610c625760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f838152600a602090815260408083206001600160a01b0386168452909152902054811115610caf57604051631e9acf1760e31b815260040160405180910390fd5b5f838152600a602090815260408083206001600160a01b0386168452825280832080548590039055858352600b90915281208054839290610cf1908490613886565b909155505060408051848152602081018390525f916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f805f805f805f80610d53611ac3565b90505f610d5f8a6121c9565b6002549091508c908c90610dc9908590600160801b90046001600160801b031684867f0000000000000000000000000000000000000000000000000000000000000000867f0000000000000000000000000000000000000000000000000000000000000000612218565b600254919d509a50909550610e31908590600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ae3565b9550610e67858c610e62897f0000000000000000000000000000000000000000000000000000000000000000612287565b6122b6565b15610e7457610e746113ec565b5f805f610e8385878b876122f7565b9c5091945092509050610e968184613886565b610ea090896136e4565b9750610eac82846136e4565b610eb6908d6136e4565b9b505050505050505f60085f7f00000000000000000000000000000000000000000000000000000000000000008c610eee9190613886565b815260208101919091526040015f908120600101546001600160801b03169150428b11610f34575f8b8152600860205260409020600101546001600160801b0316610f36565b8b5b90508b610f678e8a8585857f0000000000000000000000000000000000000000000000000000000000000000611da0565b9950610f73878a613886565b9850670de0b6b3a7640000610ff0610f8b87876136e4565b600254610fa9908f90600160801b90046001600160801b0316613886565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ae3565b1115610ffe57610ffe6113ec565b61100d8a8a878a87875f612409565b939d50919b5090995090975050505050505093975093979195509350565b5f83815260086020526040902054600160801b90046001600160801b03168083036110565750505050565b5f848152600860205260408120546001600160801b0316908190036110ae5761107e83611af9565b5f86815260086020526040902080546001600160801b0319166001600160801b039290921691909117905561112b565b6110ff6110fa670de0b6b3a76400006110c78886613886565b6110d191906138f4565b85670de0b6b3a76400006110e5878a613886565b6110ef91906138f4565b8592919060016124a5565b611af9565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b61113484611af9565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b600454600160801b90046001600160801b03166111ac6110fa82611190670de0b6b3a7640000866138f4565b600554600160801b90046001600160801b031691908a5f6124a5565b600580546001600160801b03928316600160801b0292169190911790556111d286611af9565b6111dc908261390b565b600480546001600160801b03928316600160801b02921691909117905561120284611af9565b600280545f9061121c9084906001600160801b03166138b9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506112498361254b565b600480545f9061125d908490600f0b61392b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061128d85611af9565b600280546010906112af908490600160801b90046001600160801b031661390b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f611300600b5f6112ed600286610c39565b81526020019081526020015f2054611321565b611311600b5f6112ed600187610c39565b61131b91906136f7565b92915050565b5f6001600160ff1b0382111561134a5760405163396ea70160e11b815260040160405180910390fd5b5090565b600354611369906110fa906001600160801b03168484612586565b600380546001600160801b0319166001600160801b03929092169190911790555050565b5f6113b87f0000000000000000000000000000000000000000000000000000000000000000836125e8565b6003546113ce91906001600160801b03166136e4565b6002546113e4906001600160801b031684611584565b101592915050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f61131b826004611e12565b5f805f61141d84611b36565b90925090505f61142d8686611584565b905081831115611445576114428683856125fc565b95505b8281101561145757808303925061145b565b5f92505b61146483611de9565b600680546001600160701b039290921662010000026fffffffffffffffffffffffffffff00001990921691909117908190556001600160801b03600160801b90910416808710156114b7578690036114ba565b505f5b6114c381611af9565b600680546001600160801b03928316600160801b0292169190911790555085935050505092915050565b5f806114f98585611584565b905061150481612617565b9450845f03611516575f91505061157d565b8491506115296040840160208501613752565b15611558576115518561153f602086018661372a565b61154c604087018761376d565b61271c565b915061157b565b61157b85611569602086018661372a565b611576604087018761376d565b612913565b505b9392505050565b5f61157d8383670de0b6b3a76400006125fc565b5f805f805f805f806115a8611ac3565b90505f6115b48a6121c9565b6002549091508b908d9061161e908590600160801b90046001600160801b031683867f0000000000000000000000000000000000000000000000000000000000000000877f000000000000000000000000000000000000000000000000000000000000000061292c565b600254919d509b509095505f908190819061168c908890600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ae3565b985061169a84878b886122f7565b9c5091945090925090506116ae8284613886565b6116b89089613886565b97506116c481846136e4565b6116ce908e613886565b9c506116da8a8e6136e4565b9b50505050505050506117648686838660085f7f00000000000000000000000000000000000000000000000000000000000000008f6117199190613886565b815260208101919091526040015f20600101546001600160801b0316428e1161175b575f8e8152600860205260409020600101546001600160801b031661175d565b8e5b6001612409565b9a9e939d50919b50909950929650945050505050565b6002546001600160801b0316838110806117bc57507f00000000000000000000000000000000000000000000000000000000000000006117ba8583613886565b105b156117c9576117c96113ec565b6004549084900390600f0b6117de84826136f7565b9050836117ea86611321565b13801561181f57507f000000000000000000000000000000000000000000000000000000000000000061181d838361297f565b105b1561182c5761182c6113ec565b600354600160801b90046001600160801b031661186d6110fa82611858670de0b6b3a7640000886138f4565b6005546001600160801b031691908c5f6124a5565b600580546001600160801b0319166001600160801b03929092169190911790556118978882613886565b90506118a281611af9565b600380546001600160801b03928316600160801b0292169190911790556118c883611af9565b600280546001600160801b0319166001600160801b03929092169190911790556118f18261254b565b600480546001600160801b0319166001600160801b039290921691909117905561191a87611af9565b6002805460109061193c908490600160801b90046001600160801b03166138b9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6040516303c2063f60e41b81525f9073__$04b283107449142c3a86c88d1d4ad5a326$__90633c2063f090611a6f907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b90600401613958565b602060405180830381865af4158015611a8a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061131b919061399b565b5f611ab982846139c6565b61157d9084613886565b6002546004545f916105a6916001600160801b0390911690600f0b61297f565b5f61007d82611af38588886125fc565b906129a4565b5f6001600160801b0382111561134a57604051630f0af95160e11b815260040160405180910390fd5b5f818311611b30578261157d565b50919050565b6006545f908190611b58908490600160801b90046001600160801b0316611584565b6006546201000090046001600160701b03169250905081811115611cce575f611b818383613886565b9050611b906110fa8286612a13565b60068054601090611bb2908490600160801b90046001600160801b031661390b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611bea8583612a2790919063ffffffff16565b90505f611c17827f0000000000000000000000000000000000000000000000000000000000000000611584565b90508060095f828254611c2a91906136e4565b90915550611c3a90508183613886565b9150611c4582611af9565b600280545f90611c5f9084906001600160801b03166138b9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c8c82612a3b565b600480545f90611ca0908490600f0b61392b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f80611cdf8785612a27565b91505f611d0c837f0000000000000000000000000000000000000000000000000000000000000000611584565b9050611d38817f0000000000000000000000000000000000000000000000000000000000000000611584565b91508315611d5b57611d4a8282613886565b611d549084613886565b9250611d72565b611d658282613886565b611d6f90846136e4565b92505b86861015611d9557611d858387896125fc565b9250611d928287896125fc565b91505b509550959350505050565b5f80611db784611db18a888a6125fc565b90612a27565b9050611dc48884866125fc565b611dce90826136e4565b905086811115611dde5786810391505b509695505050505050565b5f6001600160701b0382111561134a5760405163086b151760e11b815260040160405180910390fd5b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291611e5c916001600160801b031690613886565b9050805f03611e6f57600191505061131b565b5f611e7985612a64565b9050805f03611e8d5760019250505061131b565b5f80611e9a838589612aff565b9150915080611eaf575f94505050505061131b565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b8152600401611eea929190613a57565b6040805180830381865af4158015611f04573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f289190613acc565b91509150611f46611f3882611321565b611f4190613aee565b612c73565b925082611f5b575f965050505050505061131b565b611f6482611af9565b600780545f90611f7e9084906001600160801b03166138b9565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611fab81611af9565b60078054601090611fcd908490600160801b90046001600160801b03166138b9565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e61202887612e07565b6040518263ffffffff1660e01b81526004016120449190613b08565b6040805180830381865af415801561205e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120829190613b17565b915091508061209757505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916120fc916136e4565b6121069190613886565b9050805f0361211c57505f958695509350505050565b5f80871161212a575f612135565b6121358488846125fc565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561216657612166613b45565b6040519080825280601f01601f191660200182016040528015612190576020820181803683370190505b5090505f808751602089018b8e8ef191503d9250868311156121b0578692505b828152825f602083013e90999098509650505050505050565b5f806121d36105ab565b90508083116121e2575f6121ec565b6121ec8184613886565b915061157d827f0000000000000000000000000000000000000000000000000000000000000000612a27565b5f808061223861223088670de0b6b3a7640000613886565b899087612f41565b9050861561227a5761224a88886125e8565b915061226b8a8a846122648a670de0b6b3a7640000613886565b8989612f64565b925061227783826136e4565b90505b9750975097945050505050565b5f6122a461229d84670de0b6b3a7640000613886565b83906125e8565b61157d90670de0b6b3a7640000613886565b5f806122ec856122c4611ac3565b6122ce91906136e4565b600254610fa9908790600160801b90046001600160801b0316613886565b909210949350505050565b5f80808061234d87866123468b6123406123198c670de0b6b3a7640000613886565b7f0000000000000000000000000000000000000000000000000000000000000000906125e8565b906125e8565b9190612f41565b9350612379847f0000000000000000000000000000000000000000000000000000000000000000611584565b91505f61239961239189670de0b6b3a7640000613886565b8a9088612f41565b90506123c5817f00000000000000000000000000000000000000000000000000000000000000006125e8565b93506123f1847f0000000000000000000000000000000000000000000000000000000000000000611584565b6123fb90846136e4565b915050945094509450949050565b5f805f805f808888101561247557861561242b576124288d898b6125fc565b9c505b6124368c898b6125fc565b9b506124418b611321565b61244a8d611321565b61245491906136f7565b90506124618b898b6125fc565b9a5061246e8a898b6125fc565b9950612494565b61247e8b611321565b6124878d611321565b61249191906136f7565b90505b9b9c9a9b999a975050505050505050565b5f825f036124b4575084612542565b8115612506576124e56124c784876136e4565b6124d18587611584565b6124db888a611584565b611db191906136e4565b90505f6124f28588611b22565b905080821015612500578091505b50612542565b82850361251457505f612542565b61253f6125218487613886565b61252b85876125e8565b612535888a611584565b611db19190613886565b90505b95945050505050565b5f60016001607f1b0319821280612568575060016001607f1b0382135b1561134a5760405163a5353be560e01b815260040160405180910390fd5b5f80612592845f612f86565b61259c845f612f86565b6125a691906136f7565b90505f8113156125c1576125ba81866136e4565b94506125df565b5f8112156125df576125d281613aee565b6125dc9086613886565b94505b50929392505050565b5f61157d8383670de0b6b3a7640000612f41565b5f825f190484118302158202612610575f80fd5b5091020490565b6040516349124ca360e01b81525f9073__$04b283107449142c3a86c88d1d4ad5a326$__906349124ca390611a6f907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b90600401613958565b5f806127278661196a565b9050801561290a577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635c2bea496040518060a001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000008152506128528961196a565b604080516001600160e01b031960e086901b16815283516001600160a01b0390811660048301526020850151811660248301529184015182166044820152606084015182166064820152608090930151608484015260a48301919091525f60c48301523060e483015288166101048201526101240160408051808303815f875af11580156128e2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906129069190613acc565b5091505b50949350505050565b60405163350b944160e11b815260040160405180910390fd5b5f808061294c61294488670de0b6b3a7640000613886565b8990876125fc565b9050861561227a5761295e8888611584565b915061226b8a8a846129788a670de0b6b3a7640000613886565b8989612f9b565b5f8061298b8484612fab565b90925090508061299d5761299d6113ec565b5092915050565b5f815f036129bb5750670de0b6b3a764000061131b565b825f036129c957505f61131b565b5f6129d383611321565b90505f6129e76129e286611321565b612fe6565b90508181026129fe670de0b6b3a764000082613b59565b9050612a098161320b565b9695505050505050565b5f61157d83670de0b6b3a764000084612f41565b5f61157d83670de0b6b3a7640000846125fc565b5f60016001607f1b0382111561134a5760405163a5353be560e01b815260040160405180910390fd5b6003545f908190612a7e906001600160801b031684612a13565b9050612aaa7f0000000000000000000000000000000000000000000000000000000000000000826136e4565b6002546001600160801b03161115611b30576002547f000000000000000000000000000000000000000000000000000000000000000090612af59083906001600160801b0316613886565b61157d9190613886565b612b076135d7565b5f80612b1284612e07565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b8152600401612b4c9190613b08565b6040805180830381865af4158015612b66573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612b8a9190613b17565b9350905082612b9e57505f9150612c6b9050565b5f612bc4612bbf84610160015185610140015161158490919063ffffffff16565b611321565b612be4612bbf8561012001518661010001516125e890919063ffffffff16565b612bee91906136f7565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765481830152606081018a9052608081018b905260a0810192909252845160c08301529284015160e08201529290910151610100830152509150600190505b935093915050565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612d29573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612d4d9190613b85565b935093509350935080612d6857505f98975050505050505050565b868414612d9957612d7884611af9565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612dca57612da98361254b565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612df857612dda82611af9565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b612e0f613621565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e08301526003540482166101008201526005549091610120830191612f07911661339d565b81526004546001600160801b03600160801b9182900481166020840152600554604090930192612f399290041661339d565b905292915050565b5f825f190484118302158202612f55575f80fd5b50910281810615159190040190565b5f80612f74888888888888613411565b909250905080611dde57611dde6113ec565b5f818313612f94578161157d565b5090919050565b5f80612f748888888888886134ed565b5f805f83612fb886611321565b612fc291906136f7565b90505f811215612fd8575f809250925050612fdf565b9150600190505b9250929050565b5f8082136130075760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061308a9084901c611321565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361322457505f919050565b680755bf798b4a1bf1e5821261324d576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612a0974029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611321565b5f80670de0b6b3a76400006133b06105ab565b6133ba91906138f4565b90508083116133c9575f6133d3565b6133d38184613886565b915061157d61340a670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006138f4565b8390612a27565b5f805f61342189898888886135a9565b905086881015613437575f8092509250506134e2565b968690039661344688876129a4565b97508781101561345c575f8092509250506134e2565b87810361346a818688612f41565b9050670de0b6b3a7640000811061349e57613497613490670de0b6b3a764000089612a13565b82906129a4565b90506134b6565b6134b3613490670de0b6b3a764000089612a27565b90505b6134c08186612a13565b9050898110156134d7575f809350935050506134e2565b899003925060019150505b965096945050505050565b5f805f6134fd89898888886135a9565b905061350d86611af3898b6136e4565b975087811015613523575f8092509250506134e2565b878103613531818688612f41565b9050670de0b6b3a7640000811061355e57613557613490670de0b6b3a764000089612a13565b9050613576565b613573613490670de0b6b3a764000089612a27565b90505b6135808186612a13565b9050808a1015613597575f809350935050506134e2565b90980398600198509650505050505050565b5f6135b485856129a4565b6135cd6135c586611af3868b6125e8565b859085612f41565b61253f91906136e4565b6040518061012001604052806135eb613621565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f805f8060808587031215613689575f80fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156136b4575f80fd5b8501606081880312156136c5575f80fd5b939692955090935050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561131b5761131b6136d0565b8181035f83128015838313168383128216171561299d5761299d6136d0565b6001600160a01b0381168114610591575f80fd5b5f6020828403121561373a575f80fd5b813561157d81613716565b8015158114610591575f80fd5b5f60208284031215613762575f80fd5b813561157d81613745565b5f808335601e19843603018112613782575f80fd5b83018035915067ffffffffffffffff82111561379c575f80fd5b602001915036819003821315612fdf575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b88815287602082015286604082015285151560608201528460808201528360a082015260e060c08201525f61381160e0830184866137b0565b9a9950505050505050505050565b8082018281125f83128015821682158216171561383e5761383e6136d0565b505092915050565b878152866020820152856040820152841515606082015283608082015260c060a08201525f61387960c0830184866137b0565b9998505050505050505050565b8181038181111561131b5761131b6136d0565b6001600160701b0381811683821601908082111561299d5761299d6136d0565b6001600160801b0381811683821601908082111561299d5761299d6136d0565b5f602082840312156138e9575f80fd5b815161157d81613716565b808202811582820484141761131b5761131b6136d0565b6001600160801b0382811682821603908082111561299d5761299d6136d0565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561131b5761131b6136d0565b6001600160a01b039788168152958716602087015293861660408601529185166060850152909316608083015260a082019290925260c081019190915260e00190565b5f602082840312156139ab575f80fd5b5051919050565b634e487b7160e01b5f52601260045260245ffd5b5f826139d4576139d46139b2565b500690565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b5f6102a082019050613a6a8285516139d9565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f8060408385031215613add575f80fd5b505080516020909101519092909150565b5f600160ff1b8201613b0257613b026136d0565b505f0390565b610180810161131b82846139d9565b5f8060408385031215613b28575f80fd5b825191506020830151613b3a81613745565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f82613b6757613b676139b2565b600160ff1b82145f1984141615613b8057613b806136d0565b500590565b5f805f8060808587031215613b98575f80fd5b84519350602085015192506040850151915060608501516136c58161374556fea264697066735822122001c4ba6afe118458024ff398fcad07cc71cdc619ef6d859bbcc2953d78563d6864736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
  "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
} as const
};
