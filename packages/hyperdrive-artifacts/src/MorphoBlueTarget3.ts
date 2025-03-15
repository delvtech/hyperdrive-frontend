export const MorphoBlueTarget3 = {
  name: 'MorphoBlueTarget3' as const,
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
  },
  {
    "type": "error",
    "name": "UpdateLiquidityFailed",
    "inputs": []
  }
] as const,
  bytecode: '0x61032060405234801562000011575f80fd5b5060405162004922380380620049228339810160408190526200003491620005c8565b60015f81905583516001600160a01b039081166080818152602080880151841660a0908152828901516101a0528801516101c05260c0808901516101e090815260e0808b015161020052610120808c0151909352610100808c0151909152610140808c0151909152908a0180515190925281518301519052805160409081015161016052905160609081015161018052818a0151861661024052808a01516102605285891661022052875186166102808190529288015186166102a0529087015185166102c0528601519093166102e0528401516103005283926200011a929062000124565b5050505062000764565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200017e9085908390620001ef16565b620001e957604080516001600160a01b03851660248201525f6044808301919091528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620001dd9186916200029916565b620001e9848262000299565b50505050565b5f805f846001600160a01b0316846040516200020c919062000715565b5f604051808303815f865af19150503d805f811462000247576040519150601f19603f3d011682016040523d82523d5f602084013e6200024c565b606091505b50915091508180156200027a5750805115806200027a5750808060200190518101906200027a919062000743565b80156200029057505f856001600160a01b03163b115b95945050505050565b5f620002af6001600160a01b038416836200030a565b905080515f14158015620002d6575080806020019051810190620002d4919062000743565b155b156200030557604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b60606200031983835f62000320565b9392505050565b606081471015620003475760405163cd78605960e01b8152306004820152602401620002fc565b5f80856001600160a01b0316848660405162000364919062000715565b5f6040518083038185875af1925050503d805f8114620003a0576040519150601f19603f3d011682016040523d82523d5f602084013e620003a5565b606091505b509092509050620003b8868383620003c2565b9695505050505050565b606082620003db57620003d58262000426565b62000319565b8151158015620003f357506001600160a01b0384163b155b156200041e57604051639996b31560e01b81526001600160a01b0385166004820152602401620002fc565b508062000319565b805115620004375780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b50565b60405161020081016001600160401b03811182821017156200048357634e487b7160e01b5f52604160045260245ffd5b60405290565b6001600160a01b038116811462000450575f80fd5b8051620004ab8162000489565b919050565b5f60808284031215620004c1575f80fd5b604051608081016001600160401b0381118282101715620004f057634e487b7160e01b5f52604160045260245ffd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b5f60a0828403121562000532575f80fd5b60405160a081016001600160401b03811182821017156200056157634e487b7160e01b5f52604160045260245ffd5b80604052508091508251620005768162000489565b81526020830151620005888162000489565b602082015260408301516200059d8162000489565b60408201526060830151620005b28162000489565b6060820152608092830151920191909152919050565b5f805f838503610320811215620005dd575f80fd5b61026080821215620005ed575f80fd5b620005f762000453565b915062000604866200049e565b825262000614602087016200049e565b602083015262000627604087016200049e565b6040830152606086015160608301526080860151608083015260a086015160a083015260c086015160c083015260e086015160e0830152610100808701518184015250610120808701518184015250610140808701518184015250610160620006928188016200049e565b90830152610180620006a68782016200049e565b908301526101a0620006ba8782016200049e565b908301526101c0620006ce8782016200049e565b908301526101e0620006e388888301620004b0565b8184015250819450620006f88187016200049e565b935050506200070c85610280860162000521565b90509250925092565b5f82515f5b818110156200073657602081860181015185830152016200071a565b505f920191825250919050565b5f6020828403121562000754575f80fd5b8151801515811462000319575f80fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e05161030051613f9a620009885f395f8181611adb0152612ea101525f8181611aac0152612e7a01525f8181611a7d0152612e5201525f8181611a4e0152612e2a01525f8181611988015281816119e50152612dda01525f50505f50505f6112ab01525f81816102f801528181610327015261035401525f818160d90152818161059601526116c101525f81816108320152818161091d015281816109ad01528181610ab2015281816115930152818161169b015281816121e50152818161224801528181612af101528181613024015261306001525f8181610139015281816108a201528181610e690152818161145c015281816114bf01528181611504015261167501525f611df601525f8181611f4b01526132af01525f81816110260152611f1f01525f61326501525f818161017b015281816108f501528181610e8a0152818161142c0152818161148f0152818161152501526116e701525f818161015a0152818161022f015281816102cd015281816106d5015281816108cf01528181610f640152612a8701525f818161028d01528181610d2f01528181610da601528181610e1a01528181610ee50152610f1d01525f50505f818161195b015281816119bc01528181611a1f0152612e020152613f9a5ff3fe608060405260043610610028575f3560e01c80634c2ac1d91461002c57806377d05ff414610051575b5f80fd5b61003f61003a366004613953565b610064565b60405190815260200160405180910390f35b61003f61005f3660046139b2565b61007e565b5f6100728686868686610094565b90505b95945050505050565b5f61008a8484846107de565b90505b9392505050565b5f61009d610b8c565b600654610100900460ff16156100c6576040516321081abf60e01b815260040160405180910390fd5b6100ce610bb4565b6100d782610bd5565b7f00000000000000000000000000000000000000000000000000000000000000008610156101185760405163211ddda360e11b815260040160405180910390fd5b5f61019f610124610c0d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610c32565b9050848110806101ae57508381115b156101cc57604051633b61151160e11b815260040160405180910390fd5b5f806101d88986610c57565b915091505f6101e5610d28565b90506101f5818360046001610d53565b506002546004546003545f92839261025e926001600160801b0380841693600f9390930b92600160801b90048116918991166102596102547f00000000000000000000000000000000000000000000000000000000000000008b613a12565b6113b7565b6113fd565b915091508061028057604051630552b01360e31b815260040160405180910390fd5b8b5f6102f16008826102b27f000000000000000000000000000000000000000000000000000000000000000089613a25565b815260208101919091526040015f20546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000611601565b905061031d7f000000000000000000000000000000000000000000000000000000000000000082613a12565b88118061037c57507f00000000000000000000000000000000000000000000000000000000000000008111801561037c57506103797f000000000000000000000000000000000000000000000000000000000000000082613a25565b88105b1561039a57604051630552b01360e31b815260040160405180910390fd5b50600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490916103e5916001600160801b0390911690613a25565b5f808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76549192509061041f908390613a12565b90505f805f61042d8a61162c565b604051635f9d50ab60e11b815290915073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063bf3aa15690610467908490600401613ab6565b602060405180830381865af4158015610482573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104a69190613ac5565b91506104b96104b48c611766565b611793565b6002546001600160801b03808216835260048054600f0b6020850152600160801b9092041660408084019190915251635f9d50ab60e11b815273__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9163bf3aa1569161051a91859101613ab6565b602060405180830381865af4158015610535573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105599190613ac5565b92508183101561057c5760405163184d952160e11b815260040160405180910390fd5b610592848361058b8187613a25565b91906117b9565b9c507f00000000000000000000000000000000000000000000000000000000000000008d10156105d55760405163211ddda360e11b815260040160405180910390fd5b508f6105e1868e6117d4565b10156106005760405163c972651760e01b815260040160405180910390fd5b61061c5f8e5f0160208101906106169190613af0565b8e6117e8565b6106258961188d565b95508561064557604051638bdf918d60e01b815260040160405180910390fd5b5f8890505f8d9050368f90505f8c90505f6106ff60025f015f9054906101000a90046001600160801b03166001600160801b0316600280015f9054906101000a9004600f0b600f0b60025f0160109054906101000a90046001600160801b03166001600160801b03168560026001015f9054906101000a90046001600160801b03166001600160801b03166102597f00000000000000000000000000000000000000000000000000000000000000008c6102549190613a12565b9b5090508a158061071857506107158c5f611899565b81125b1561073657604051630552b01360e31b815260040160405180910390fd5b5f881561074d5761074887848b6117b9565b61074f565b5f5b905061075e6020850185613af0565b6001600160a01b03167fdcc4a01cea4510bd52201cebc8cd2d47d60429b35d68329abc591a70aa2efabf868d8661079b60408a0160208b01613b18565b866107a960408c018c613b33565b6040516107bc9796959493929190613b76565b60405180910390a2505050505050505050505050505050505061007560015f55565b5f6107e7610b8c565b6107ef610bb4565b6107f882610bd5565b60065460ff161561081c57604051637983c05160e01b815260040160405180910390fd5b5f806108288685610c57565b90925090506108587f00000000000000000000000000000000000000000000000000000000000000006002613bc9565b82101561087857604051632afb507160e21b815260040160405180910390fd5b6006805460ff1916600117905560405163594f0e8f60e11b815260048101839052602481018290527f00000000000000000000000000000000000000000000000000000000000000006044820152606481018690527f000000000000000000000000000000000000000000000000000000000000000060848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260027f000000000000000000000000000000000000000000000000000000000000000002830393505f908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063b29e1d1e9060c401606060405180830381865af4158015610981573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109a59190613be0565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006109d684846118ad565b10156109f55760405163216f4ab160e21b815260040160405180910390fd5b5f80610a05858585895f806113fd565b91509150801580610a1557505f82125b15610a3357604051630552b01360e31b815260040160405180910390fd5b610a3c856118d2565b600280546001600160801b0319166001600160801b0392909216919091179055610a65846118fb565b600480546001600160801b0319166001600160801b0392909216919091179055610a8e836118d2565b600280546001600160801b03928316600160801b029216919091179055610ad65f807f00000000000000000000000000000000000000000000000000000000000000006117e8565b610aed5f610ae760208c018c613af0565b8a6117e8565b610b02610af8610d28565b8760046001610d53565b508a8a8a610b136020820182613af0565b6001600160a01b03167f4931b9953a65531203c17d9abe77870a3e49d8b13af522ec3321c18b5abb8af38c858c610b506040870160208801613b18565b87610b5e6040890189613b33565b604051610b719796959493929190613b76565b60405180910390a25050505050505050505061008d60015f55565b60025f5403610bae57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b3415610bd357604051631574f9f360e01b815260040160405180910390fd5b565b5f610be36020830183613af0565b6001600160a01b031603610c0a5760405163f0dd15fd60e01b815260040160405180910390fd5b50565b6002546004545f91610c2d916001600160801b0390911690600f0b6118ad565b905090565b5f80610c4087878786611936565b9050610c4c8185611601565b979650505050505050565b815f80610c6a6040850160208601613b18565b15610c8f57610c8585610c806040870187613b33565b61194c565b9093509050610ca7565b5034610ca785610ca26040870187613b33565b611bb2565b610caf611bcb565b91508015610d1f576040515f90339083908381818185875af1925050503d805f8114610cf6576040519150601f19603f3d011682016040523d82523d5f602084013e610cfb565b606091505b5050905080610d1d576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b5f610c2d427f0000000000000000000000000000000000000000000000000000000000000000611bdd565b5f84815260086020526040812060018101546001600160801b0316151580610d7a57504286115b15610d9357600101546001600160801b031690506113af565b5f805f610d9e610d28565b90505f610dcb7f00000000000000000000000000000000000000000000000000000000000000008b613a12565b90505b81811015610e3f575f818152600860205260409020600101546001600160801b03168015610e17575f828152600860205260409020549094506001600160801b03169250610e3f565b507f000000000000000000000000000000000000000000000000000000000000000001610dce565b835f03610eb157889350610eae610e54610c0d565b600254600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611936565b92505b50610ebb836118d2565b6001850180546001600160801b0319166001600160801b0392909216919091179055610f11610f0a7f00000000000000000000000000000000000000000000000000000000000000008b613a25565b8a84611bf2565b610f4f89610f49610f427f000000000000000000000000000000000000000000000000000000000000000083613a12565b4290611d2b565b84611bf2565b610f5888611d39565b505f9050600881610f897f00000000000000000000000000000000000000000000000000000000000000008d613a25565b815260208101919091526040015f908120600101546001600160801b03169150610fb460028c611ed6565b5f818152600b60205260408120549192508c8c83156110f557600192505f80610fe086898d865f611f0a565b915091508060095f828254610ff59190613a12565b909155506110109050865f8461100a81611766565b88611fd7565b61101a8183613a12565b915061104a86838a8e877f000000000000000000000000000000000000000000000000000000000000000061214e565b915061105e6110598385612191565b6121a5565b6006805460029061107f9084906201000090046001600160701b0316613c0b565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506110ac826118d2565b600680546010906110ce908490600160801b90046001600160801b0316613c2b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b5f611101600184611ed6565b5f818152600b6020526040902054909150801561120c57600194505f8061112c838b8f886001611f0a565b915091508060095f8282546111419190613a12565b9091555061115c9050835f8461115681611766565b8a6121ce565b6111668183613a25565b91506111756110598387612191565b600680546002906111969084906201000090046001600160701b0316613c0b565b92506101000a8154816001600160701b0302191690836001600160701b031602179055506111c3826118d2565b600680546010906111e5908490600160801b90046001600160801b0316613c2b565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555050505b84156112455761123761121e87611766565b61122783611766565b6112319190613c4b565b5f6123be565b8e61124284826123fd565b50505b5f61124f846125ec565b50604080518e815260208101879052908101899052606081018490526080810182905290915085907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25f8f90505f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f25964586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611305573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113299190613c6a565b90506001600160a01b0381161561139d5761139a5a604051336024820152604481018a905284151560648201525f90819060840160408051601f198184030181529190526020810180516001600160e01b0316633488a6a760e11b1790526001600160a01b0386169392919061272e565b50505b509b9d50505050505050505050505050505b949350505050565b5f6113dc600b5f6113c9600286611ed6565b81526020019081526020015f2054611766565b6113ed600b5f6113c9600187611ed6565b6113f79190613c4b565b92915050565b5f805f8061140b8a8a6127b6565b9150915080611421575f809350935050506115f6565b5f611480838a6114597f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613a25565b8b7f00000000000000000000000000000000000000000000000000000000000000006127ee565b5090505f6114e3848b846114bc7f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613a25565b8d7f00000000000000000000000000000000000000000000000000000000000000006128a7565b5090508115806114f1575080155b156114fc57505f9050805b5f611549858c7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611936565b905061155783838c84612961565b509093505f9050611568848f613a12565b90505f6115888b8b61157987611766565b611583908e613c85565b6129a9565b90508b6115bd6115b87f000000000000000000000000000000000000000000000000000000000000000083612a0b565b611766565b6115c683611766565b6115d36115b88685612191565b6115dd9190613c4b565b6115e79190613c4b565b60019950995050505050505050505b965096945050505050565b5f61008d61161484846301e13380612a1b565b61162685670de0b6b3a7640000613a25565b906117d4565b6116346138a4565b60408051610180810182526002546001600160801b038082168352600454600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e0830152600354048216610100820152600554909161012083019161172c9116612a3e565b81526004546001600160801b03600160801b918290048116602084015260055460409093019261175e92900416612a3e565b905292915050565b5f6001600160ff1b0382111561178f5760405163396ea70160e11b815260040160405180910390fd5b5090565b61179c81612aab565b610c0a57604051635044b7f560e01b815260040160405180910390fd5b5f825f1904841183021582026117cd575f80fd5b5091020490565b5f61008d83670de0b6b3a7640000846117b9565b5f838152600a602090815260408083206001600160a01b038616845290915281208054839290611819908490613a12565b90915550505f838152600b60205260408120805483929061183b908490613a12565b909155505060408051848152602081018390526001600160a01b038416915f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b5f6113f78260046123fd565b5f8183136118a7578261008d565b50919050565b5f806118b984846127b6565b9092509050806118cb576118cb612c3f565b5092915050565b5f6001600160801b0382111561178f57604051630f0af95160e11b815260040160405180910390fd5b5f60016001607f1b0319821280611918575060016001607f1b0382135b1561178f5760405163a5353be560e01b815260040160405180910390fd5b5f610075826119468588886117b9565b90612c58565b5f806119836001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333088612cc7565b6119e37f00000000000000000000000000000000000000000000000000000000000000006119b2876001613a12565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612d34565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a99aad896040518060a001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f0000000000000000000000000000000000000000000000000000000000000000815250875f305f67ffffffffffffffff811115611b1957611b19613cac565b6040519080825280601f01601f191660200182016040528015611b43576020820181803683370190505b506040518663ffffffff1660e01b8152600401611b64959493929190613ce2565b60408051808303815f875af1158015611b7f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611ba39190613d71565b92505f9150505b935093915050565b60405163350b944160e11b815260040160405180910390fd5b5f610c2d670de0b6b3a7640000612dc3565b5f611be88284613da7565b61008d9084613a25565b5f83815260086020526040902054600160801b90046001600160801b0316808303611c1d5750505050565b5f848152600860205260408120546001600160801b031690819003611c7557611c45836118d2565b5f86815260086020526040902080546001600160801b0319166001600160801b0392909216919091179055611cf2565b611cc6611cc1670de0b6b3a7640000611c8e8886613a25565b611c989190613bc9565b85670de0b6b3a7640000611cac878a613a25565b611cb69190613bc9565b859291906001612f2c565b6118d2565b5f86815260086020526040902080546001600160801b0319166001600160801b03929092169190911790555b611cfb846118d2565b5f9586526008602052604090952080546001600160801b03968716600160801b0296169590951790945550505050565b5f8183116118a7578261008d565b6006545f908190611d5b908490600160801b90046001600160801b0316612191565b6006546201000090046001600160701b03169250905081811115611ed1575f611d848383613a25565b9050611d93611cc18286612fc6565b60068054601090611db5908490600160801b90046001600160801b0316613dba565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505f611ded85836117d490919063ffffffff16565b90505f611e1a827f0000000000000000000000000000000000000000000000000000000000000000612191565b90508060095f828254611e2d9190613a12565b90915550611e3d90508183613a25565b9150611e48826118d2565b600280545f90611e629084906001600160801b0316613c2b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e8f82612fda565b600480545f90611ea3908490600f0b613dda565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b5f6001600160f81b03821115611eff5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b5f80611f1687856117d4565b91505f611f43837f0000000000000000000000000000000000000000000000000000000000000000612191565b9050611f6f817f0000000000000000000000000000000000000000000000000000000000000000612191565b91508315611f9257611f818282613a25565b611f8b9084613a25565b9250611fa9565b611f9c8282613a25565b611fa69084613a12565b92505b86861015611fcc57611fbc8387896117b9565b9250611fc98287896117b9565b91505b509550959350505050565b600454600160801b90046001600160801b031661201f611cc182612003670de0b6b3a764000086613bc9565b600554600160801b90046001600160801b031691908a5f612f2c565b600580546001600160801b03928316600160801b029216919091179055612045866118d2565b61204f9082613dba565b600480546001600160801b03928316600160801b029216919091179055612075846118d2565b600280545f9061208f9084906001600160801b0316613c2b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506120bc836118fb565b600480545f906120d0908490600f0b613dda565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550612100856118d2565b60028054601090612122908490600160801b90046001600160801b0316613dba565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b5f8061215f846116268a888a6117b9565b905061216c8884866117b9565b6121769082613a12565b9050868111156121865786810391505b509695505050505050565b5f61008d8383670de0b6b3a76400006117b9565b5f6001600160701b0382111561178f5760405163086b151760e11b815260040160405180910390fd5b6002546001600160801b03168381108061221057507f000000000000000000000000000000000000000000000000000000000000000061220e8583613a25565b105b1561221d5761221d612c3f565b6004549084900390600f0b6122328482613c4b565b90508361223e86611766565b13801561227357507f000000000000000000000000000000000000000000000000000000000000000061227183836118ad565b105b1561228057612280612c3f565b600354600160801b90046001600160801b03166122c1611cc1826122ac670de0b6b3a764000088613bc9565b6005546001600160801b031691908c5f612f2c565b600580546001600160801b0319166001600160801b03929092169190911790556122eb8882613a25565b90506122f6816118d2565b600380546001600160801b03928316600160801b02921691909117905561231c836118d2565b600280546001600160801b0319166001600160801b0392909216919091179055612345826118fb565b600480546001600160801b0319166001600160801b039290921691909117905561236e876118d2565b60028054601090612390908490600160801b90046001600160801b0316613c2b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b6003546123d990611cc1906001600160801b031684846129a9565b600380546001600160801b0319166001600160801b03929092169190911790555050565b600754600360f81b5f908152600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e75435490918291612447916001600160801b031690613a25565b9050805f0361245a5760019150506113f7565b5f61246485613003565b9050805f03612478576001925050506113f7565b5f8061248583858961309e565b915091508061249a575f9450505050506113f7565b5f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__632c03ef68858a6040518363ffffffff1660e01b81526004016124d5929190613e07565b6040805180830381865af41580156124ef573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906125139190613d71565b9150915061253161252382611766565b61252c90613e7c565b612aab565b925082612546575f96505050505050506113f7565b61254f826118d2565b600780545f906125699084906001600160801b0316613c2b565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612596816118d2565b600780546010906125b8908490600160801b90046001600160801b0316613c2b565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506001965050505050505092915050565b5f805f8073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e6126138761162c565b6040518263ffffffff1660e01b815260040161262f9190613ab6565b6040805180830381865af4158015612649573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061266d9190613e96565b915091508061268257505f9485945092505050565b600754600b6020527f3ae204c42bf80d9df0ca83c69a5573417a7a5570428fcb513b3a0276db3e7543545f8080527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f765490926001600160801b0316916126e791613a12565b6126f19190613a25565b9050805f0361270757505f958695509350505050565b5f808711612715575f612720565b6127208488846117b9565b976001975095505050505050565b5f60605f805f8661ffff1667ffffffffffffffff81111561275157612751613cac565b6040519080825280601f01601f19166020018201604052801561277b576020820181803683370190505b5090505f808751602089018b8e8ef191503d92508683111561279b578692505b828152825f602083013e9093509150505b9550959350505050565b5f805f836127c386611766565b6127cd9190613c4b565b90505f8112156127e3575f809250925050610d21565b946001945092505050565b5f805f6127fe8888888888613206565b90505f612828670de0b6b3a76400006128178888612fc6565b6128219190613a12565b83906117d4565b9050670de0b6b3a7640000811061285c5761285561284e670de0b6b3a7640000896117d4565b8290612c58565b9050612874565b61287161284e670de0b6b3a764000089612fc6565b90505b61287e81866117d4565b905088811015612895575f809350935050506127ac565b97909703976001975095505050505050565b5f805f6128b78989888888613234565b90506128d1866119466128ca8a8d613a12565b8790612191565b98506128de858a866117b9565b9850888110156128f4575f8092509250506115f6565b888103670de0b6b3a764000081106129225761291b61284e670de0b6b3a764000089612fc6565b905061293a565b61293761284e670de0b6b3a7640000896117d4565b90505b8089101561294f575f809350935050506115f6565b90970398600198509650505050505050565b5f805f805f612971898789613258565b90925090506129808289613a25565b97505f61298e82888a6117b9565b905061299a818b613a25565b9a989950979650505050505050565b5f806129b5845f6132dd565b6129bf845f6132dd565b6129c99190613c4b565b90505f8113156129e4576129dd8186613a12565b9450612a02565b5f811215612a02576129f581613e7c565b6129ff9086613a25565b94505b50929392505050565b5f61008d8383670de0b6b3a76400005b5f825f190484118302158202612a2f575f80fd5b50910281810615159190040190565b5f80670de0b6b3a7640000612a51610d28565b612a5b9190613bc9565b9050808311612a6a575f612a74565b612a748184613a25565b915061008d612821670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613bc9565b6002546004805460405163685a2be760e11b81526001600160801b03808516938201849052600f9290920b60248201819052600160801b909404909116604482018190527f00000000000000000000000000000000000000000000000000000000000000006064830152608482018590525f9391849081908190819073__$2b4fa6f02a36eedfe41c65e8dd342257d3$__9063d0b457ce9060a401608060405180830381865af4158015612b61573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612b859190613ec4565b935093509350935080612ba057505f98975050505050505050565b868414612bd157612bb0846118d2565b600280546001600160801b0319166001600160801b03929092169190911790555b858314612c0257612be1836118fb565b600480546001600160801b0319166001600160801b03929092169190911790555b848214612c3057612c12826118d2565b600280546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b60405163bb55fd2760e01b815260040160405180910390fd5b5f815f03612c6f5750670de0b6b3a76400006113f7565b825f03612c7d57505f6113f7565b5f612c8783611766565b90505f612c9b612c9686611766565b6132f2565b9050818102612cb2670de0b6b3a764000082613f02565b9050612cbd81613517565b9695505050505050565b6040516001600160a01b038481166024830152838116604483015260648201839052612d2e9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506136a9565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052612d858482613714565b612d2e576040516001600160a01b0384811660248301525f6044830152612db991869182169063095ea7b390606401612cfc565b612d2e84826136a9565b6040516303c2063f60e41b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527f0000000000000000000000000000000000000000000000000000000000000000811660648301527f00000000000000000000000000000000000000000000000000000000000000001660848201527f000000000000000000000000000000000000000000000000000000000000000060a482015260c481018290525f9073__$04b283107449142c3a86c88d1d4ad5a326$__90633c2063f09060e401602060405180830381865af4158015612f08573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113f79190613ac5565b5f825f03612f3b575084610075565b8115612f8d57612f6c612f4e8487613a12565b612f588587612191565b612f62888a612191565b6116269190613a12565b90505f612f798588611d2b565b905080821015612f87578091505b50610075565b828503612f9b57505f610075565b610072612fa88487613a25565b612fb28587612a0b565b612fbc888a612191565b6116269190613a25565b5f61008d83670de0b6b3a764000084612a1b565b5f60016001607f1b0382111561178f5760405163a5353be560e01b815260040160405180910390fd5b6003545f90819061301d906001600160801b031684612fc6565b90506130497f000000000000000000000000000000000000000000000000000000000000000082613a12565b6002546001600160801b031611156118a7576002547f0000000000000000000000000000000000000000000000000000000000000000906130949083906001600160801b0316613a25565b61008d9190613a25565b6130a66138f9565b5f806130b18461162c565b90505f73__$2b4fa6f02a36eedfe41c65e8dd342257d3$__635a1b419e836040518263ffffffff1660e01b81526004016130eb9190613ab6565b6040805180830381865af4158015613105573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906131299190613e96565b935090508261313d57505f9150611baa9050565b5f61315e6115b884610160015185610140015161219190919063ffffffff16565b61317e6115b8856101200151866101000151612a0b90919063ffffffff16565b6131889190613c4b565b60408051610120810182528581526020808201959095525f8052600b85527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f7654818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b5f6132118585612c58565b61322a61322286611946868b612191565b8590856117b9565b6100729190613a12565b5f61323f8585612c58565b61322a61325086611946868b612a0b565b859085612a1b565b5f806132a7856132a185817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613297818c612fc6565b6132a19190613a25565b90612a0b565b91506132d3827f0000000000000000000000000000000000000000000000000000000000000000612191565b9050935093915050565b5f8183136132eb578161008d565b5090919050565b5f8082136133135760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f198201906133969084901c611766565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b5f680248ce36a70cb26b3e19821361353057505f919050565b680755bf798b4a1bf1e58212613559576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b0591505f60606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b018181059550929350909190612cbd74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611766565b5f6136bd6001600160a01b038416836137b1565b905080515f141580156136e15750808060200190518101906136df9190613f2e565b155b1561370f57604051635274afe760e01b81526001600160a01b03841660048201526024015b60405180910390fd5b505050565b5f805f846001600160a01b03168460405161372f9190613f49565b5f604051808303815f865af19150503d805f8114613768576040519150601f19603f3d011682016040523d82523d5f602084013e61376d565b606091505b50915091508180156137975750805115806137975750808060200190518101906137979190613f2e565b80156100755750505050506001600160a01b03163b151590565b606061008d83835f845f80856001600160a01b031684866040516137d59190613f49565b5f6040518083038185875af1925050503d805f811461380f576040519150601f19603f3d011682016040523d82523d5f602084013e613814565b606091505b5091509150612cbd8683836060826138345761382f8261387b565b61008d565b815115801561384b57506001600160a01b0384163b155b1561387457604051639996b31560e01b81526001600160a01b0385166004820152602401613706565b508061008d565b80511561388b5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6040518061018001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b60405180610120016040528061390d6138a4565b81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81526020015f81525090565b5f606082840312156118a7575f80fd5b5f805f805f60a08688031215613967575f80fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff811115613999575f80fd5b6139a588828901613943565b9150509295509295909350565b5f805f606084860312156139c4575f80fd5b8335925060208401359150604084013567ffffffffffffffff8111156139e8575f80fd5b6139f486828701613943565b9150509250925092565b634e487b7160e01b5f52601160045260245ffd5b808201808211156113f7576113f76139fe565b818103818111156113f7576113f76139fe565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152506101608082015181840152505050565b61018081016113f78284613a38565b5f60208284031215613ad5575f80fd5b5051919050565b6001600160a01b0381168114610c0a575f80fd5b5f60208284031215613b00575f80fd5b813561008d81613adc565b8015158114610c0a575f80fd5b5f60208284031215613b28575f80fd5b813561008d81613b0b565b5f808335601e19843603018112613b48575f80fd5b83018035915067ffffffffffffffff821115613b62575f80fd5b602001915036819003821315610d21575f80fd5b878152866020820152856040820152841515606082015283608082015260c060a08201528160c0820152818360e08301375f81830160e090810191909152601f909201601f191601019695505050505050565b80820281158282048414176113f7576113f76139fe565b5f805f60608486031215613bf2575f80fd5b8351925060208401519150604084015190509250925092565b6001600160701b038181168382160190808211156118cb576118cb6139fe565b6001600160801b038181168382160190808211156118cb576118cb6139fe565b8181035f8312801583831316838312821617156118cb576118cb6139fe565b5f60208284031215613c7a575f80fd5b815161008d81613adc565b8082018281125f831280158216821582161715613ca457613ca46139fe565b505092915050565b634e487b7160e01b5f52604160045260245ffd5b5f5b83811015613cda578181015183820152602001613cc2565b50505f910152565b5f61012060018060a01b038089511684528060208a01511660208501528060408a01511660408501528060608a0151166060850152608089015160808501528760a08501528660c085015280861660e08501525080610100840152835180828501526101409150613d598183860160208801613cc0565b601f01601f1916929092019091019695505050505050565b5f8060408385031215613d82575f80fd5b505080516020909101519092909150565b634e487b7160e01b5f52601260045260245ffd5b5f82613db557613db5613d93565b500690565b6001600160801b038281168282160390808211156118cb576118cb6139fe565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156113f7576113f76139fe565b5f6102a082019050613e1a828551613a38565b602084015161018083015260408401516101a083015260608401516101c083015260808401516101e083015260a084015161020083015260c084015161022083015260e084015161024083015261010090930151610260820152610280015290565b5f600160ff1b8201613e9057613e906139fe565b505f0390565b5f8060408385031215613ea7575f80fd5b825191506020830151613eb981613b0b565b809150509250929050565b5f805f8060808587031215613ed7575f80fd5b8451935060208501519250604085015191506060850151613ef781613b0b565b939692955090935050565b5f82613f1057613f10613d93565b600160ff1b82145f1984141615613f2957613f296139fe565b500590565b5f60208284031215613f3e575f80fd5b815161008d81613b0b565b5f8251613f5a818460208701613cc0565b919091019291505056fea2646970667358221220ec306bb8f4343276c8def9dcf6f7c4a9933054a7f4b0480cee211ce23a8b741764736f6c63430008160033' as `0x${string}`,
  methodIdentifiers: {
  "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
  "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4"
} as const
};
