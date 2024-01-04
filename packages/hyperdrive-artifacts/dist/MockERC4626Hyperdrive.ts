export const MockERC4626Hyperdrive = 
{
  "abi": [
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "contract IERC20",
              "name": "baseToken",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "linkerFactory",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "linkerCodeHash",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "initialSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumShareReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumTransactionAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "positionDuration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "checkpointDuration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timeStretch",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "governance",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "feeCollector",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "curve",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "flat",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "governanceLP",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "governanceZombie",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IHyperdrive.Fees",
              "name": "fees",
              "type": "tuple"
            }
          ],
          "internalType": "struct IHyperdrive.PoolConfig",
          "name": "_config",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "_target0",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_target1",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_target2",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_target3",
          "type": "address"
        },
        {
          "internalType": "contract IERC4626",
          "name": "_pool",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "_sweepTargets",
          "type": "address[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "InvalidBaseToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidCheckpointDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidFeeAmounts",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidInitialSharePrice",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMinimumShareReserves",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidPositionDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnexpectedSuccess",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsupportedToken",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpSharePrice",
          "type": "uint256"
        }
      ],
      "name": "AddLiquidity",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "assetId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bondAmount",
          "type": "uint256"
        }
      ],
      "name": "CloseLong",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "assetId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bondAmount",
          "type": "uint256"
        }
      ],
      "name": "CloseShort",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "collector",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fees",
          "type": "uint256"
        }
      ],
      "name": "CollectGovernanceFee",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "checkpointTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturedShorts",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturedLongs",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpSharePrice",
          "type": "uint256"
        }
      ],
      "name": "CreateCheckpoint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "newGovernance",
          "type": "address"
        }
      ],
      "name": "GovernanceUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "apr",
          "type": "uint256"
        }
      ],
      "name": "Initialize",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "assetId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bondAmount",
          "type": "uint256"
        }
      ],
      "name": "OpenLong",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "assetId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bondAmount",
          "type": "uint256"
        }
      ],
      "name": "OpenShort",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "newPauser",
          "type": "address"
        }
      ],
      "name": "PauserUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "withdrawalShareAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        }
      ],
      "name": "RedeemWithdrawalShares",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "withdrawalShareAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpSharePrice",
          "type": "uint256"
        }
      ],
      "name": "RemoveLiquidity",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "TransferSingle",
      "type": "event"
    },
    {
      "stateMutability": "nonpayable",
      "type": "fallback"
    },
    {
      "inputs": [],
      "name": "DOMAIN_SEPARATOR",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PERMIT_TYPEHASH",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "addLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "name": "batchTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "checkpoint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "closeLong",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "closeShort",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "collectGovernanceFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "deposit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "sharesMinted",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "initialize",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "openLong",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "openShort",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_approved",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "permitForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pricePerShare",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "redeemWithdrawalShares",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "",
          "type": "tuple"
        }
      ],
      "name": "removeLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "setApproval",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "setApprovalBridge",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "setGovernance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "name": "setPauser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "name": "sweep",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "target0",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "target1",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "target2",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "target3",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "transferFromBridge",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_shares",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "withdraw",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountWithdrawn",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x61030060405260016000553480156200001757600080fd5b5060405162001fd038038062001fd08339810160408190526200003a916200070d565b868686868686868187878787878480600001516001600160a01b03166080816001600160a01b0316815250506103e8816080015110156200008e576040516349db44f560e01b815260040160405180910390fd5b60808101516101a05260a08101516101c05260e0810151600003620000c657604051635428734d60e01b815260040160405180910390fd5b60e08101805160a0525160c08201511080620000f657508060e001518160c00151620000f391906200087f565b15155b15620001155760405163253fffcf60e11b815260040160405180910390fd5b60c081810151905261010081015160e052606081015161018052610120810151600880546001600160a01b0319166001600160a01b03928316179055610140820151166101e05261016081015151670de0b6b3a76400001080620001895750670de0b6b3a764000081610160015160200151115b80620001a55750670de0b6b3a764000081610160015160400151115b15620001c4576040516322f72cc360e11b815260040160405180910390fd5b610160818101805151610100528051602090810151610120528151604090810151610140529151606090810151909352808401516001600160a01b039081166102005293820151610220528784166102405286841661026052858416610280529284166102a0528051808201825260018152603160f81b9084015280517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd938101939093527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc690830152469082015230608082015260a00160408051601f1981840301815291905280516020909101206102c0525050506001600160a01b039092166102e05250620002d7905062000488565b876060015114620002fb576040516355f2a42f60e01b815260040160405180910390fd5b6102e0516001600160a01b03166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200033d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003639190620008a2565b6001600160a01b031687600001516001600160a01b0316146200039957604051630722152560e11b815260040160405180910390fd5b6102e0518751620003b8916001600160a01b0390911690600162000506565b60005b815181101562000473576000828281518110620003dc57620003dc620008c9565b602002602001015190506102e0516001600160a01b0316816001600160a01b031614806200041d57506080516001600160a01b0316816001600160a01b0316145b156200043c5760405163350b944160e11b815260040160405180910390fd5b6001600160a01b03166000908152601060205260409020805460ff19166001179055806200046a81620008df565b915050620003bb565b50505050505050505050505050505062000921565b6102e0516040516303d1689d60e11b8152670de0b6b3a764000060048201526000916001600160a01b0316906307a2d13a90602401602060405180830381865afa158015620004db573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000501919062000907565b905090565b600060405163095ea7b360e01b8152836004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080620005825760405162461bcd60e51b815260206004820152600e60248201526d1054141493d59157d1905253115160921b604482015260640160405180910390fd5b50505050565b634e487b7160e01b600052604160045260246000fd5b60405161018081016001600160401b0381118282101715620005c457620005c462000588565b60405290565b6001600160a01b0381168114620005e057600080fd5b50565b8051620005f081620005ca565b919050565b6000608082840312156200060857600080fd5b604051608081016001600160401b03811182821017156200062d576200062d62000588565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600082601f8301126200067057600080fd5b815160206001600160401b03808311156200068f576200068f62000588565b8260051b604051601f19603f83011681018181108482111715620006b757620006b762000588565b604052938452858101830193838101925087851115620006d657600080fd5b83870191505b8482101562000702578151620006f281620005ca565b83529183019190830190620006dc565b979650505050505050565b60008060008060008060008789036102a08112156200072b57600080fd5b6101e0808212156200073c57600080fd5b620007466200059e565b9150620007538a620005e3565b82526200076360208b01620005e3565b602083015260408a0151604083015260608a0151606083015260808a0151608083015260a08a015160a083015260c08a015160c083015260e08a015160e0830152610100808b01518184015250610120620007c0818c01620005e3565b90830152610140620007d48b8201620005e3565b90830152610160620007e98c8c8301620005f5565b8184015250819850620007fe818b01620005e3565b97505050620008116102008901620005e3565b9450620008226102208901620005e3565b9350620008336102408901620005e3565b9250620008446102608901620005e3565b6102808901519092506001600160401b038111156200086257600080fd5b620008708a828b016200065e565b91505092959891949750929550565b6000826200089d57634e487b7160e01b600052601260045260246000fd5b500690565b600060208284031215620008b557600080fd5b8151620008c281620005ca565b9392505050565b634e487b7160e01b600052603260045260246000fd5b6000600182016200090057634e487b7160e01b600052601160045260246000fd5b5060010190565b6000602082840312156200091a57600080fd5b5051919050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e05161155262000a7e60003960008181610b0e01528181610b4f01528181610bdb01528181610c3401528181610cd80152610da201526000818161045401526108230152600081816105e5015261074601526000818161057e015281816109d90152610a52015260008181610639015281816106b0015281816107d9015261097e0152600081816101e4015281816103a601528181610680015281816106e2015281816107140152818161077a015281816107a9015281816108b4015281816109a70152610a2101526000505060005050600050506000505060005050600050506000505060005050600050506000505060005050600050506000505060008181610ab70152610aec01526115526000f3fe6080604052600436106101cd5760003560e01c806399530b06116100f7578063cbc1343411610095578063ded0623111610064578063ded06231146103e0578063e44808bc14610607578063eac3e79914610627578063ed64bab21461065b576101cd565b8063cbc134341461031a578063d55cefec146105b3578063d899e112146105d3578063dbbe8070146105a0576101cd565b8063a22cb465116100d1578063a22cb465146104b1578063a6e8a8591461056c578063ab033ea9146102dd578063cba2e58d146105a0576101cd565b806399530b06146105245780639aa68462146105395780639cd241af1461054c576101cd565b806330adf81f1161016f5780637180c8ca1161013e5780637180c8ca146104b157806377d05ff4146104d1578063829555d4146104e45780639032c72614610504576101cd565b806330adf81f1461040e5780633644e515146104425780633e691db9146104765780634ed2d6ac14610496576101cd565b806317fad7fc116101ab57806317fad7fc146103545780631c0f12b61461037457806321b57d531461039457806329b23fc1146103e0576101cd565b806301681a62146102dd57806302329a29146102ff578063074a6de91461031a575b3480156101d957600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161021c929190610f47565b600060405180830381855af49150503d8060008114610257576040519150601f19603f3d011682016040523d82523d6000602084013e61025c565b606091505b5091509150811561028057604051638bb0a34b60e01b815260040160405180910390fd5b600061028b82610f57565b90506001600160e01b03198116636e64089360e11b146102ad57815160208301fd5b8151600319810160048401908152926102ce91810160200190602401610fc8565b80519650602001945050505050f35b3480156102e957600080fd5b506102fd6102f836600461108d565b61067b565b005b34801561030b57600080fd5b506102fd6102f83660046110c6565b34801561032657600080fd5b5061033a6103353660046110f3565b6106a8565b604080519283526020830191909152015b60405180910390f35b34801561036057600080fd5b506102fd61036f366004611188565b6106dd565b34801561038057600080fd5b506102fd61038f36600461121d565b61070f565b3480156103a057600080fd5b506103c87f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161034b565b3480156103ec57600080fd5b506104006103fb366004611265565b61073f565b60405190815260200161034b565b34801561041a57600080fd5b506104007f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561044e57600080fd5b506104007f000000000000000000000000000000000000000000000000000000000000000081565b34801561048257600080fd5b506104006104913660046112bf565b610773565b3480156104a257600080fd5b506102fd61038f3660046112fc565b3480156104bd57600080fd5b506102fd6104cc366004611346565b6107a4565b6104006104df3660046110f3565b6107d2565b3480156104f057600080fd5b5061033a6104ff366004611372565b610805565b34801561051057600080fd5b506102fd61051f3660046113b9565b61081e565b34801561053057600080fd5b50610400610968565b610400610547366004611265565b610977565b34801561055857600080fd5b506102fd610567366004611437565b6109a2565b34801561057857600080fd5b506103c87f000000000000000000000000000000000000000000000000000000000000000081565b61033a6105ae366004611265565b6109d1565b3480156105bf57600080fd5b506104006105ce366004611372565b610a07565b3480156105df57600080fd5b506103c87f000000000000000000000000000000000000000000000000000000000000000081565b34801561061357600080fd5b506102fd61062236600461146f565b610a1c565b34801561063357600080fd5b506103c87f000000000000000000000000000000000000000000000000000000000000000081565b34801561066757600080fd5b506102fd6106763660046114ce565b610a4d565b6106a47f0000000000000000000000000000000000000000000000000000000000000000610a72565b5050565b6000806106d47f0000000000000000000000000000000000000000000000000000000000000000610a72565b50935093915050565b6107067f0000000000000000000000000000000000000000000000000000000000000000610a72565b50505050505050565b6107387f0000000000000000000000000000000000000000000000000000000000000000610a72565b5050505050565b600061076a7f0000000000000000000000000000000000000000000000000000000000000000610a72565b50949350505050565b600061079e7f0000000000000000000000000000000000000000000000000000000000000000610a72565b50919050565b6107cd7f0000000000000000000000000000000000000000000000000000000000000000610a72565b505050565b60006107fd7f0000000000000000000000000000000000000000000000000000000000000000610a72565b509392505050565b6000806108128484610a92565b915091505b9250929050565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b1790525161090e91906114e7565b600060405180830381855af49150503d8060008114610949576040519150601f19603f3d011682016040523d82523d6000602084013e61094e565b606091505b50915091508161096057805160208201fd5b805160208201f35b6000610972610c14565b905090565b600061076a7f0000000000000000000000000000000000000000000000000000000000000000610a72565b6109cb7f0000000000000000000000000000000000000000000000000000000000000000610a72565b50505050565b6000806109fd7f0000000000000000000000000000000000000000000000000000000000000000610a72565b5094509492505050565b6000610a138383610ca7565b90505b92915050565b610a457f0000000000000000000000000000000000000000000000000000000000000000610a72565b505050505050565b6106a47f00000000000000000000000000000000000000000000000000000000000000005b6060600080836001600160a01b031660003660405161090e929190610f47565b600080610aa560408401602085016110c6565b15610bcb57610adf6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333087610dd0565b610b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000086610e58565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015610ba0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc49190611503565b9150610c03565b839150610c036001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085610dd0565b610c0b610c14565b90509250929050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015610c83573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109729190611503565b600082600003610cb957506000610a16565b610cc960408301602084016110c6565b15610d88576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba08765284610d0b602086018661108d565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af1158015610d5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d819190611503565b9050610a16565b610dc9610d98602084018461108d565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169085610ecf565b5090919050565b60006040516323b872dd60e01b81528460048201528360248201528260448201526020600060648360008a5af13d15601f3d11600160005114161716915050806107385760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b60448201526064015b60405180910390fd5b600060405163095ea7b360e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806109cb5760405162461bcd60e51b815260206004820152600e60248201526d1054141493d59157d1905253115160921b6044820152606401610e4f565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806109cb5760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610e4f565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015610f865780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610fbf578181015183820152602001610fa7565b50506000910152565b600060208284031215610fda57600080fd5b815167ffffffffffffffff80821115610ff257600080fd5b818401915084601f83011261100657600080fd5b81518181111561101857611018610f8e565b604051601f8201601f19908116603f0116810190838211818310171561104057611040610f8e565b8160405282815287602084870101111561105957600080fd5b61106a836020830160208801610fa4565b979650505050505050565b6001600160a01b038116811461108a57600080fd5b50565b60006020828403121561109f57600080fd5b81356110aa81611075565b9392505050565b803580151581146110c157600080fd5b919050565b6000602082840312156110d857600080fd5b610a13826110b1565b60006060828403121561079e57600080fd5b60008060006060848603121561110857600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561112d57600080fd5b611139868287016110e1565b9150509250925092565b60008083601f84011261115557600080fd5b50813567ffffffffffffffff81111561116d57600080fd5b6020830191508360208260051b850101111561081757600080fd5b600080600080600080608087890312156111a157600080fd5b86356111ac81611075565b955060208701356111bc81611075565b9450604087013567ffffffffffffffff808211156111d957600080fd5b6111e58a838b01611143565b909650945060608901359150808211156111fe57600080fd5b5061120b89828a01611143565b979a9699509497509295939492505050565b6000806000806080858703121561123357600080fd5b84359350602085013561124581611075565b9250604085013561125581611075565b9396929550929360600135925050565b6000806000806080858703121561127b57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156112a757600080fd5b6112b3878288016110e1565b91505092959194509250565b6000602082840312156112d157600080fd5b813567ffffffffffffffff8111156112e857600080fd5b6112f4848285016110e1565b949350505050565b6000806000806080858703121561131257600080fd5b84359350602085013561132481611075565b925060408501359150606085013561133b81611075565b939692955090935050565b6000806040838503121561135957600080fd5b823561136481611075565b9150610c0b602084016110b1565b6000806040838503121561138557600080fd5b82359150602083013567ffffffffffffffff8111156113a357600080fd5b6113af858286016110e1565b9150509250929050565b600080600080600080600060e0888a0312156113d457600080fd5b87356113df81611075565b965060208801356113ef81611075565b95506113fd604089016110b1565b945060608801359350608088013560ff8116811461141a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060006060848603121561144c57600080fd5b83359250602084013561145e81611075565b929592945050506040919091013590565b600080600080600060a0868803121561148757600080fd5b85359450602086013561149981611075565b935060408601356114a981611075565b92506060860135915060808601356114c081611075565b809150509295509295909350565b6000602082840312156114e057600080fd5b5035919050565b600082516114f9818460208701610fa4565b9190910192915050565b60006020828403121561151557600080fd5b505191905056fea26469706673582212200f72c8b6e2917cdf75aeb303b99240643a6e02f724189652ad7c2d45f691b20264736f6c63430008130033",
    "sourceMap": "324:1119:64:-:0;;;454:1:98;429:26;;382:430:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;654:7;675:8;697;719;741;763:5;782:13;2068:6:8;1999:7;2008:8;2018;2028;2038;2831:7:0;5081::49;:17;;;-1:-1:-1;;;;;5068:30:49;;;-1:-1:-1;;;;;5068:30:49;;;;;5658:3;5627:7;:28;;;:34;5623:113;;;5684:41;;-1:-1:-1;;;5684:41:49;;;;;;;;;;;5623:113;5769:28;;;;5745:52;;6085:32;;;;6057:60;;6282:26;;;;6312:1;6282:31;6278:108;;6336:39;;-1:-1:-1;;;6336:39:49;;;;;;;;;;;6278:108;6417:26;;;;;6395:48;;6497:26;6470:24;;;;:53;;:127;;;6566:7;:26;;;6539:7;:24;;;:53;;;;:::i;:::-;:58;;6470:127;6453:224;;;6629:37;;-1:-1:-1;;;6629:37:49;;;;;;;;;;;6453:224;6706:24;;;;;6686:44;;6755:19;;;;6740:34;;6805:25;;;;6784:46;;6854:18;;;;6840:11;:32;;-1:-1:-1;;;;;;6840:32:49;-1:-1:-1;;;;;6840:32:49;;;;;;6898:20;;;;6882:36;;;6988:12;;;;:18;7009:4;-1:-1:-1;;6988:65:49;;;7049:4;7029:7;:12;;;:17;;;:24;6988:65;:113;;;;7097:4;7069:7;:12;;;:25;;;:32;6988:113;6971:204;;;7133:31;;-1:-1:-1;;;7133:31:49;;;;;;;;;;;6971:204;7196:12;;;;;;:18;7184:30;;7235:12;;:17;;;;;7224:28;;7281:12;;-1:-1:-1;7281:25:49;;;;7262:44;;7339:12;;-1:-1:-1;7339:29:49;;;;7316:52;;;-1:-1:-1;;;7445:21:49;-1:-1:-1;;;;;7428:38:49;;;;;-1:-1:-1;;;7494:22:49;7476:40;;2894:18:0;;::::1;;::::0;2922;;::::1;;::::0;2950;;::::1;;::::0;2978;;::::1;;::::0;3560:10;;;;::::1;::::0;;::::1;::::0;;-1:-1:-1;;;3560:10:0;;::::1;::::0;3383:264;;3411:121:::1;3383:264:::0;;::::1;4723:25:161::0;;;;3550:21:0;4764:18:161;;;4757:34;3589:13:0::1;4807:18:161::0;;;4800:34;3628:4:0::1;4850:18:161::0;;;4843:60;4695:19;;3383:264:0::1;::::0;;-1:-1:-1;;3383:264:0;;::::1;::::0;;;;;;3360:297;;3383:264:::1;3360:297:::0;;::::1;::::0;3341:316:::1;::::0;-1:-1:-1;;;;;;;;1489:14:7;;;;;-1:-1:-1;2594:16:8::2;::::0;-1:-1:-1;2594:14:8::2;:16::i;:::-;2565:7;:25;;;:45;2561:121;;2633:38;;-1:-1:-1::0;;;2633:38:8::2;;;;;;;;;;;2561:121;2734:5;;-1:-1:-1::0;;;;;2725:21:8::2;;:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;2695:53:8::2;2703:7;:17;;;-1:-1:-1::0;;;;;2695:53:8::2;;2691:121;;2771:30;;-1:-1:-1::0;;;2771:30:8::2;;;;;;;;;;;2691:121;3024:5;::::0;2984:17;;2970:64:::2;::::0;-1:-1:-1;;;;;2970:45:8;;::::2;::::0;3032:1:::2;2970:45;:64::i;:::-;3195:9;3190:350;3214:8;:15;3210:1;:19;3190:350;;;3250:14;3267:8;3276:1;3267:11;;;;;;;;:::i;:::-;;;;;;;3250:28;;3340:5;;-1:-1:-1::0;;;;;3313:33:8::2;3321:6;-1:-1:-1::0;;;;;3313:33:8::2;;:91;;;;3393:10;;-1:-1:-1::0;;;;;3366:38:8::2;3374:6;-1:-1:-1::0;;;;;3366:38:8::2;;3313:91;3292:197;;;3444:30;;-1:-1:-1::0;;;3444:30:8::2;;;;;;;;;;;3292:197;-1:-1:-1::0;;;;;3502:20:8::2;;::::0;;;:12:::2;:20;::::0;;;;:27;;-1:-1:-1;;3502:27:8::2;3525:4;3502:27;::::0;;3231:3;::::2;::::0;::::2;:::i;:::-;;;;3190:350;;;;1751:1795:::0;;;;;;;382:430:64;;;;;;;324:1119;;5108:117:7;5192:5;;:26;;-1:-1:-1;;;5192:26:7;;150:4:51;5192:26:7;;;5693:25:161;5166:7:7;;-1:-1:-1;;;;;5192:21:7;;;;5666:18:161;;5192:26:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5185:33;;5108:117;:::o;4455:1497:99:-;4566:12;4736:4;4730:11;-1:-1:-1;;;4859:17:99;4852:93;4992:2;4988:1;4969:17;4965:25;4958:37;5072:6;5067:2;5048:17;5044:26;5037:42;5874:2;5871:1;5867:2;5848:17;5845:1;5838:5;5831;5826:51;5395:16;5388:24;5382:2;5364:16;5361:24;5357:1;5353;5347:8;5344:15;5340:46;5337:76;5137:754;5126:765;;;5919:7;5911:34;;;;-1:-1:-1;;;5911:34:99;;6120:2:161;5911:34:99;;;6102:21:161;6159:2;6139:18;;;6132:30;-1:-1:-1;;;6178:18:161;;;6171:44;6232:18;;5911:34:99;;;;;;;;4556:1396;4455:1497;;;:::o;14:127:161:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:250;213:2;207:9;255:6;243:19;;-1:-1:-1;;;;;277:34:161;;313:22;;;274:62;271:88;;;339:18;;:::i;:::-;375:2;368:22;146:250;:::o;401:139::-;-1:-1:-1;;;;;484:31:161;;474:42;;464:70;;530:1;527;520:12;464:70;401:139;:::o;545:154::-;632:13;;654:39;632:13;654:39;:::i;:::-;545:154;;;:::o;704:584::-;766:5;814:4;802:9;797:3;793:19;789:30;786:50;;;832:1;829;822:12;786:50;865:2;859:9;907:4;895:17;;-1:-1:-1;;;;;927:34:161;;963:22;;;924:62;921:88;;;989:18;;:::i;:::-;1029:10;1025:2;1018:22;;1058:6;1049:15;;1094:9;1088:16;1080:6;1073:32;1159:2;1148:9;1144:18;1138:25;1133:2;1125:6;1121:15;1114:50;1218:2;1207:9;1203:18;1197:25;1192:2;1184:6;1180:15;1173:50;1277:2;1266:9;1262:18;1256:25;1251:2;1243:6;1239:15;1232:50;;704:584;;;;:::o;1293:982::-;1358:5;1411:3;1404:4;1396:6;1392:17;1388:27;1378:55;;1429:1;1426;1419:12;1378:55;1452:13;;1484:4;-1:-1:-1;;;;;1537:10:161;;;1534:36;;;1550:18;;:::i;:::-;1596:2;1593:1;1589:10;1628:2;1622:9;1691:2;1687:7;1682:2;1678;1674:11;1670:25;1662:6;1658:38;1746:6;1734:10;1731:22;1726:2;1714:10;1711:18;1708:46;1705:72;;;1757:18;;:::i;:::-;1793:2;1786:22;1843:18;;;1919:15;;;1915:24;;;1877:15;;;;-1:-1:-1;1951:15:161;;;1948:35;;;1979:1;1976;1969:12;1948:35;2015:2;2007:6;2003:15;1992:26;;2027:218;2043:6;2038:3;2035:15;2027:218;;;2116:3;2110:10;2133:39;2166:5;2133:39;:::i;:::-;2185:18;;2223:12;;;;2060;;;;2027:218;;;2263:6;1293:982;-1:-1:-1;;;;;;;1293:982:161:o;2280:1993::-;2474:6;2482;2490;2498;2506;2514;2522;2566:9;2557:7;2553:23;2596:3;2592:2;2588:12;2585:32;;;2613:1;2610;2603:12;2585:32;2636:6;2662:2;2658;2654:11;2651:31;;;2678:1;2675;2668:12;2651:31;2704:17;;:::i;:::-;2691:30;;2744:48;2782:9;2744:48;:::i;:::-;2737:5;2730:63;2825:57;2878:2;2867:9;2863:18;2825:57;:::i;:::-;2820:2;2813:5;2809:14;2802:81;2936:2;2925:9;2921:18;2915:25;2910:2;2903:5;2899:14;2892:49;2994:2;2983:9;2979:18;2973:25;2968:2;2961:5;2957:14;2950:49;3053:3;3042:9;3038:19;3032:26;3026:3;3019:5;3015:15;3008:51;3113:3;3102:9;3098:19;3092:26;3086:3;3079:5;3075:15;3068:51;3173:3;3162:9;3158:19;3152:26;3146:3;3139:5;3135:15;3128:51;3233:3;3222:9;3218:19;3212:26;3206:3;3199:5;3195:15;3188:51;3258:3;3314:2;3303:9;3299:18;3293:25;3288:2;3281:5;3277:14;3270:49;;3338:3;3373:57;3426:2;3415:9;3411:18;3373:57;:::i;:::-;3357:14;;;3350:81;3450:3;3485:57;3523:18;;;3485:57;:::i;:::-;3469:14;;;3462:81;3562:3;3597:62;3651:7;3631:18;;;3597:62;:::i;:::-;3592:2;3585:5;3581:14;3574:86;;3679:5;3669:15;;3703:57;3756:2;3745:9;3741:18;3703:57;:::i;:::-;3693:67;;;;3779:58;3832:3;3821:9;3817:19;3779:58;:::i;:::-;3769:68;;3856:58;3909:3;3898:9;3894:19;3856:58;:::i;:::-;3846:68;;3933:58;3986:3;3975:9;3971:19;3933:58;:::i;:::-;3923:68;;4010:58;4063:3;4052:9;4048:19;4010:58;:::i;:::-;4112:3;4097:19;;4091:26;4000:68;;-1:-1:-1;;;;;;4129:30:161;;4126:50;;;4172:1;4169;4162:12;4126:50;4195:72;4259:7;4250:6;4239:9;4235:22;4195:72;:::i;:::-;4185:82;;;2280:1993;;;;;;;;;;:::o;4278:209::-;4310:1;4336;4326:132;;4380:10;4375:3;4371:20;4368:1;4361:31;4415:4;4412:1;4405:15;4443:4;4440:1;4433:15;4326:132;-1:-1:-1;4472:9:161;;4278:209::o;4914:259::-;4984:6;5037:2;5025:9;5016:7;5012:23;5008:32;5005:52;;;5053:1;5050;5043:12;5005:52;5085:9;5079:16;5104:39;5137:5;5104:39;:::i;:::-;5162:5;4914:259;-1:-1:-1;;;4914:259:161:o;5178:127::-;5239:10;5234:3;5230:20;5227:1;5220:31;5270:4;5267:1;5260:15;5294:4;5291:1;5284:15;5310:232;5349:3;5370:17;;;5367:140;;5429:10;5424:3;5420:20;5417:1;5410:31;5464:4;5461:1;5454:15;5492:4;5489:1;5482:15;5367:140;-1:-1:-1;5534:1:161;5523:13;;5310:232::o;5729:184::-;5799:6;5852:2;5840:9;5831:7;5827:23;5823:32;5820:52;;;5868:1;5865;5858:12;5820:52;-1:-1:-1;5891:16:161;;5729:184;-1:-1:-1;5729:184:161:o;5918:338::-;324:1119:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052600436106101cd5760003560e01c806399530b06116100f7578063cbc1343411610095578063ded0623111610064578063ded06231146103e0578063e44808bc14610607578063eac3e79914610627578063ed64bab21461065b576101cd565b8063cbc134341461031a578063d55cefec146105b3578063d899e112146105d3578063dbbe8070146105a0576101cd565b8063a22cb465116100d1578063a22cb465146104b1578063a6e8a8591461056c578063ab033ea9146102dd578063cba2e58d146105a0576101cd565b806399530b06146105245780639aa68462146105395780639cd241af1461054c576101cd565b806330adf81f1161016f5780637180c8ca1161013e5780637180c8ca146104b157806377d05ff4146104d1578063829555d4146104e45780639032c72614610504576101cd565b806330adf81f1461040e5780633644e515146104425780633e691db9146104765780634ed2d6ac14610496576101cd565b806317fad7fc116101ab57806317fad7fc146103545780631c0f12b61461037457806321b57d531461039457806329b23fc1146103e0576101cd565b806301681a62146102dd57806302329a29146102ff578063074a6de91461031a575b3480156101d957600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161021c929190610f47565b600060405180830381855af49150503d8060008114610257576040519150601f19603f3d011682016040523d82523d6000602084013e61025c565b606091505b5091509150811561028057604051638bb0a34b60e01b815260040160405180910390fd5b600061028b82610f57565b90506001600160e01b03198116636e64089360e11b146102ad57815160208301fd5b8151600319810160048401908152926102ce91810160200190602401610fc8565b80519650602001945050505050f35b3480156102e957600080fd5b506102fd6102f836600461108d565b61067b565b005b34801561030b57600080fd5b506102fd6102f83660046110c6565b34801561032657600080fd5b5061033a6103353660046110f3565b6106a8565b604080519283526020830191909152015b60405180910390f35b34801561036057600080fd5b506102fd61036f366004611188565b6106dd565b34801561038057600080fd5b506102fd61038f36600461121d565b61070f565b3480156103a057600080fd5b506103c87f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161034b565b3480156103ec57600080fd5b506104006103fb366004611265565b61073f565b60405190815260200161034b565b34801561041a57600080fd5b506104007f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561044e57600080fd5b506104007f000000000000000000000000000000000000000000000000000000000000000081565b34801561048257600080fd5b506104006104913660046112bf565b610773565b3480156104a257600080fd5b506102fd61038f3660046112fc565b3480156104bd57600080fd5b506102fd6104cc366004611346565b6107a4565b6104006104df3660046110f3565b6107d2565b3480156104f057600080fd5b5061033a6104ff366004611372565b610805565b34801561051057600080fd5b506102fd61051f3660046113b9565b61081e565b34801561053057600080fd5b50610400610968565b610400610547366004611265565b610977565b34801561055857600080fd5b506102fd610567366004611437565b6109a2565b34801561057857600080fd5b506103c87f000000000000000000000000000000000000000000000000000000000000000081565b61033a6105ae366004611265565b6109d1565b3480156105bf57600080fd5b506104006105ce366004611372565b610a07565b3480156105df57600080fd5b506103c87f000000000000000000000000000000000000000000000000000000000000000081565b34801561061357600080fd5b506102fd61062236600461146f565b610a1c565b34801561063357600080fd5b506103c87f000000000000000000000000000000000000000000000000000000000000000081565b34801561066757600080fd5b506102fd6106763660046114ce565b610a4d565b6106a47f0000000000000000000000000000000000000000000000000000000000000000610a72565b5050565b6000806106d47f0000000000000000000000000000000000000000000000000000000000000000610a72565b50935093915050565b6107067f0000000000000000000000000000000000000000000000000000000000000000610a72565b50505050505050565b6107387f0000000000000000000000000000000000000000000000000000000000000000610a72565b5050505050565b600061076a7f0000000000000000000000000000000000000000000000000000000000000000610a72565b50949350505050565b600061079e7f0000000000000000000000000000000000000000000000000000000000000000610a72565b50919050565b6107cd7f0000000000000000000000000000000000000000000000000000000000000000610a72565b505050565b60006107fd7f0000000000000000000000000000000000000000000000000000000000000000610a72565b509392505050565b6000806108128484610a92565b915091505b9250929050565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b1790525161090e91906114e7565b600060405180830381855af49150503d8060008114610949576040519150601f19603f3d011682016040523d82523d6000602084013e61094e565b606091505b50915091508161096057805160208201fd5b805160208201f35b6000610972610c14565b905090565b600061076a7f0000000000000000000000000000000000000000000000000000000000000000610a72565b6109cb7f0000000000000000000000000000000000000000000000000000000000000000610a72565b50505050565b6000806109fd7f0000000000000000000000000000000000000000000000000000000000000000610a72565b5094509492505050565b6000610a138383610ca7565b90505b92915050565b610a457f0000000000000000000000000000000000000000000000000000000000000000610a72565b505050505050565b6106a47f00000000000000000000000000000000000000000000000000000000000000005b6060600080836001600160a01b031660003660405161090e929190610f47565b600080610aa560408401602085016110c6565b15610bcb57610adf6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333087610dd0565b610b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000086610e58565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015610ba0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc49190611503565b9150610c03565b839150610c036001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085610dd0565b610c0b610c14565b90509250929050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015610c83573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109729190611503565b600082600003610cb957506000610a16565b610cc960408301602084016110c6565b15610d88576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba08765284610d0b602086018661108d565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af1158015610d5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d819190611503565b9050610a16565b610dc9610d98602084018461108d565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169085610ecf565b5090919050565b60006040516323b872dd60e01b81528460048201528360248201528260448201526020600060648360008a5af13d15601f3d11600160005114161716915050806107385760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b60448201526064015b60405180910390fd5b600060405163095ea7b360e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806109cb5760405162461bcd60e51b815260206004820152600e60248201526d1054141493d59157d1905253115160921b6044820152606401610e4f565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806109cb5760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610e4f565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015610f865780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610fbf578181015183820152602001610fa7565b50506000910152565b600060208284031215610fda57600080fd5b815167ffffffffffffffff80821115610ff257600080fd5b818401915084601f83011261100657600080fd5b81518181111561101857611018610f8e565b604051601f8201601f19908116603f0116810190838211818310171561104057611040610f8e565b8160405282815287602084870101111561105957600080fd5b61106a836020830160208801610fa4565b979650505050505050565b6001600160a01b038116811461108a57600080fd5b50565b60006020828403121561109f57600080fd5b81356110aa81611075565b9392505050565b803580151581146110c157600080fd5b919050565b6000602082840312156110d857600080fd5b610a13826110b1565b60006060828403121561079e57600080fd5b60008060006060848603121561110857600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561112d57600080fd5b611139868287016110e1565b9150509250925092565b60008083601f84011261115557600080fd5b50813567ffffffffffffffff81111561116d57600080fd5b6020830191508360208260051b850101111561081757600080fd5b600080600080600080608087890312156111a157600080fd5b86356111ac81611075565b955060208701356111bc81611075565b9450604087013567ffffffffffffffff808211156111d957600080fd5b6111e58a838b01611143565b909650945060608901359150808211156111fe57600080fd5b5061120b89828a01611143565b979a9699509497509295939492505050565b6000806000806080858703121561123357600080fd5b84359350602085013561124581611075565b9250604085013561125581611075565b9396929550929360600135925050565b6000806000806080858703121561127b57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156112a757600080fd5b6112b3878288016110e1565b91505092959194509250565b6000602082840312156112d157600080fd5b813567ffffffffffffffff8111156112e857600080fd5b6112f4848285016110e1565b949350505050565b6000806000806080858703121561131257600080fd5b84359350602085013561132481611075565b925060408501359150606085013561133b81611075565b939692955090935050565b6000806040838503121561135957600080fd5b823561136481611075565b9150610c0b602084016110b1565b6000806040838503121561138557600080fd5b82359150602083013567ffffffffffffffff8111156113a357600080fd5b6113af858286016110e1565b9150509250929050565b600080600080600080600060e0888a0312156113d457600080fd5b87356113df81611075565b965060208801356113ef81611075565b95506113fd604089016110b1565b945060608801359350608088013560ff8116811461141a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060006060848603121561144c57600080fd5b83359250602084013561145e81611075565b929592945050506040919091013590565b600080600080600060a0868803121561148757600080fd5b85359450602086013561149981611075565b935060408601356114a981611075565b92506060860135915060808601356114c081611075565b809150509295509295909350565b6000602082840312156114e057600080fd5b5035919050565b600082516114f9818460208701610fa4565b9190910192915050565b60006020828403121561151557600080fd5b505191905056fea26469706673582212200f72c8b6e2917cdf75aeb303b99240643a6e02f724189652ad7c2d45f691b20264736f6c63430008130033",
    "sourceMap": "324:1119:64:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4047:12:0;4201;4215:23;4242:7;-1:-1:-1;;;;;4242:20:0;4263:5;;4242:27;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4200:69;;;;4283:7;4279:76;;;4313:31;;-1:-1:-1;;;4313:31:0;;;;;;;;;;;4279:76;4364:15;4382:18;4389:10;4382:18;:::i;:::-;4364:36;-1:-1:-1;;;;;;;4414:43:0;;-1:-1:-1;;;4414:43:0;4410:160;;4534:10;4528:17;4523:2;4511:10;4507:19;4500:46;4410:160;4771:17;;-1:-1:-1;;4767:25:0;;4790:1;4745:20;;4738:55;;;4745:20;4872:31;;;;;;;;;;:::i;:::-;324:1119:64;;;-1:-1:-1;324:1119:64;;;-1:-1:-1;;;;;324:1119:64;4263:67:8;;;;;;;;;;-1:-1:-1;4263:67:8;;;;;:::i;:::-;;:::i;:::-;;7750:65:0;;;;;;;;;;-1:-1:-1;7750:65:0;;;;;:::i;7038:181::-;;;;;;;;;;-1:-1:-1;7038:181:0;;;;;:::i;:::-;;:::i;:::-;;;;3544:25:161;;;3600:2;3585:18;;3578:34;;;;3517:18;7038:181:0;;;;;;;;9300:167;;;;;;;;;;-1:-1:-1;9300:167:0;;;;;:::i;:::-;;:::i;8221:102::-;;;;;;;;;;-1:-1:-1;8221:102:0;;;;;:::i;:::-;;:::i;1431:32::-;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5776:32:161;;;5758:51;;5746:2;5731:18;1431:32:0;5612:203:161;5784:177:0;;;;;;;;;;-1:-1:-1;5784:177:0;;;;;:::i;:::-;;:::i;:::-;;;6532:25:161;;;6520:2;6505:18;5784:177:0;6386::161;2033:174:0;;;;;;;;;;;;2083:124;2033:174;;2271:41;;;;;;;;;;;;;;;7539:136;;;;;;;;;;-1:-1:-1;7539:136:0;;;;;:::i;:::-;;:::i;8736:107::-;;;;;;;;;;-1:-1:-1;8736:107:0;;;;;:::i;8036:78::-;;;;;;;;;;-1:-1:-1;8036:78:0;;;;;:::i;:::-;;:::i;6064:168::-;;;;;;:::i;:::-;;:::i;818:204:64:-;;;;;;;;;;-1:-1:-1;818:204:64;;;;;:::i;:::-;;:::i;10656:868:0:-;;;;;;;;;;-1:-1:-1;10656:868:0;;;;;:::i;:::-;;:::i;1335:106:64:-;;;;;;;;;;;;;:::i;6300:187:0:-;;;;;;:::i;:::-;;:::i;9133:92::-;;;;;;;;;;-1:-1:-1;9133:92:0;;;;;:::i;:::-;;:::i;1751:32::-;;;;;;;;;;;;;;;5002:192;;;;;;:::i;:::-;;:::i;1028:189:64:-;;;;;;;;;;-1:-1:-1;1028:189:64;;;;;:::i;:::-;;:::i;1911:32:0:-;;;;;;;;;;;;;;;8452:163;;;;;;;;;;-1:-1:-1;8452:163:0;;;;;:::i;:::-;;:::i;1591:32::-;;;;;;;;;;;;;;;7306:73;;;;;;;;;;-1:-1:-1;7306:73:0;;;;;:::i;:::-;;:::i;4263:67:8:-;4305:18;4315:7;4305:9;:18::i;:::-;;4263:67;:::o;7038:181:0:-;7166:7;7175;7194:18;7204:7;7194:9;:18::i;:::-;;7038:181;;;;;;:::o;9300:167::-;9442:18;9452:7;9442:9;:18::i;:::-;;9300:167;;;;;;:::o;8221:102::-;8298:18;8308:7;8298:9;:18::i;:::-;;8221:102;;;;:::o;5784:177::-;5917:7;5936:18;5946:7;5936:9;:18::i;:::-;;5784:177;;;;;;:::o;7539:136::-;7631:7;7650:18;7660:7;7650:9;:18::i;:::-;;7539:136;;;:::o;8036:78::-;8089:18;8099:7;8089:9;:18::i;:::-;;8036:78;;:::o;6064:168::-;6188:7;6207:18;6217:7;6207:9;:18::i;:::-;;6064:168;;;;;:::o;818:204:64:-;929:20;951:18;988:27;997:7;1006:8;988;:27::i;:::-;981:34;;;;818:204;;;;;;:::o;10656:868:0:-;10928:373;;11030:16;10928:373;;;11162:25:161;2083:124:0;11203:18:161;;;11196:34;-1:-1:-1;;;;;11304:15:161;;;11284:18;;;11277:43;11356:15;;;11336:18;;;11329:43;11416:14;;11409:22;11388:19;;;11381:51;11448:19;;;11441:35;;;11525:4;11513:17;;11492:19;;;11485:46;11547:19;;;11540:35;;;11591:19;;;11584:35;;;10857:12:0;;;;10894:7;:20;;11134:19:161;;10928:373:0;;;-1:-1:-1;;10928:373:0;;;;;;;;;;;;;;-1:-1:-1;;;;;10928:373:0;-1:-1:-1;;;10928:373:0;;;10894:417;;;10928:373;10894:417;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10856:455;;;;11326:7;11321:117;;11406:6;11400:13;11395:2;11387:6;11383:15;11376:38;11321:117;11500:6;11494:13;11489:2;11481:6;11477:15;11470:38;1335:106:64;1381:18;1418:16;:14;:16::i;:::-;1411:23;;1335:106;:::o;6300:187:0:-;6443:7;6462:18;6472:7;6462:9;:18::i;9133:92::-;9200:18;9210:7;9200:9;:18::i;:::-;;9133:92;;;:::o;5002:192::-;5141:7;5150;5169:18;5179:7;5169:9;:18::i;:::-;;5002:192;;;;;;;:::o;1028:189:64:-;1140:23;1182:28;1192:7;1201:8;1182:9;:28::i;:::-;1175:35;;1028:189;;;;;:::o;8452:163:0:-;8590:18;8600:7;8590:9;:18::i;:::-;;8452:163;;;;;:::o;7306:73::-;7354:18;7364:7;11802:359;11856:12;11881;11895:19;11918:7;-1:-1:-1;;;;;11918:20:0;11939:8;;11918:30;;;;;;;:::i;2227:1135:7:-;2350:20;;2406:15;;;;;;;;:::i;:::-;2402:915;;;2489:141;-1:-1:-1;;;;;2503:10:7;2489:43;2550:10;2586:4;2609:7;2489:43;:141::i;:::-;2700:63;-1:-1:-1;;;;;2714:10:7;2700:38;2747:5;2755:7;2700:38;:63::i;:::-;2792:37;;-1:-1:-1;;;2792:37:7;;;;;12096:25:161;;;2823:4:7;12137:18:161;;;12130:60;2792:5:7;-1:-1:-1;;;;;2792:13:7;;;;12069:18:161;;2792:37:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2777:52;;2402:915;;;3083:7;;-1:-1:-1;3165:141:7;-1:-1:-1;;;;;3179:5:7;3165:38;3221:10;3257:4;3083:7;3165:38;:141::i;:::-;3339:16;:14;:16::i;:::-;3326:29;;2227:1135;;;;;:::o;5108:117::-;5192:26;;-1:-1:-1;;;5192:26:7;;150:4:51;5192:26:7;;;6532:25:161;5166:7:7;;5192:5;-1:-1:-1;;;;;5192:21:7;;;;6505:18:161;;5192:26:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;4129:794::-;4253:23;4365:7;4376:1;4365:12;4361:51;;-1:-1:-1;4400:1:7;4393:8;;4361:51;4426:15;;;;;;;;:::i;:::-;4422:495;;;-1:-1:-1;;;;;4594:5:7;:12;;4624:7;4649:20;;;;:8;:20;:::i;:::-;4594:120;;-1:-1:-1;;;;;;4594:120:7;;;;;;;;;;12592:25:161;;;;-1:-1:-1;;;;;12691:15:161;12671:18;;;12664:43;4695:4:7;12723:18:161;;;12716:43;12565:18;;4594:120:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4576:138;;4422:495;;;4802:65;4837:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;4816:5:7;4802:34;;4859:7;4802:34;:65::i;:::-;-1:-1:-1;4899:7:7;;4129:794;-1:-1:-1;4129:794:7:o;1328:1616:99:-;1466:12;1636:4;1630:11;-1:-1:-1;;;1759:17:99;1752:93;1892:4;1888:1;1869:17;1865:25;1858:39;1976:2;1971;1952:17;1948:26;1941:38;2056:6;2051:2;2032:17;2028:26;2021:42;2860:2;2857:1;2852:3;2833:17;2830:1;2823:5;2816;2811:52;2379:16;2372:24;2366:2;2348:16;2345:24;2341:1;2337;2331:8;2328:15;2324:46;2321:76;2121:756;2110:767;;;2905:7;2897:40;;;;-1:-1:-1;;;2897:40:99;;12972:2:161;2897:40:99;;;12954:21:161;13011:2;12991:18;;;12984:30;-1:-1:-1;;;13030:18:161;;;13023:50;13090:18;;2897:40:99;;;;;;;;4455:1497;4566:12;4736:4;4730:11;-1:-1:-1;;;4859:17:99;4852:93;4992:2;4988:1;4969:17;4965:25;4958:37;5072:6;5067:2;5048:17;5044:26;5037:42;5874:2;5871:1;5867:2;5848:17;5845:1;5838:5;5831;5826:51;5395:16;5388:24;5382:2;5364:16;5361:24;5357:1;5353;5347:8;5344:15;5340:46;5337:76;5137:754;5126:765;;;5919:7;5911:34;;;;-1:-1:-1;;;5911:34:99;;13321:2:161;5911:34:99;;;13303:21:161;13360:2;13340:18;;;13333:30;-1:-1:-1;;;13379:18:161;;;13372:44;13433:18;;5911:34:99;13119:338:161;2950:1499:99;3062:12;3232:4;3226:11;-1:-1:-1;;;3355:17:99;3348:93;3488:2;3484:1;3465:17;3461:25;3454:37;3568:6;3563:2;3544:17;3540:26;3533:42;4370:2;4367:1;4363:2;4344:17;4341:1;4334:5;4327;4322:51;3891:16;3884:24;3878:2;3860:16;3857:24;3853:1;3849;3843:8;3840:15;3836:46;3833:76;3633:754;3622:765;;;4415:7;4407:35;;;;-1:-1:-1;;;4407:35:99;;13664:2:161;4407:35:99;;;13646:21:161;13703:2;13683:18;;;13676:30;-1:-1:-1;;;13722:18:161;;;13715:45;13777:18;;4407:35:99;13462:339:161;14:271;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:161:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:161;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:250;873:1;883:113;897:6;894:1;891:13;883:113;;;973:11;;;967:18;954:11;;;947:39;919:2;912:10;883:113;;;-1:-1:-1;;1030:1:161;1012:16;;1005:27;788:250::o;1043:896::-;1122:6;1175:2;1163:9;1154:7;1150:23;1146:32;1143:52;;;1191:1;1188;1181:12;1143:52;1224:9;1218:16;1253:18;1294:2;1286:6;1283:14;1280:34;;;1310:1;1307;1300:12;1280:34;1348:6;1337:9;1333:22;1323:32;;1393:7;1386:4;1382:2;1378:13;1374:27;1364:55;;1415:1;1412;1405:12;1364:55;1444:2;1438:9;1466:2;1462;1459:10;1456:36;;;1472:18;;:::i;:::-;1547:2;1541:9;1515:2;1601:13;;-1:-1:-1;;1597:22:161;;;1621:2;1593:31;1589:40;1577:53;;;1645:18;;;1665:22;;;1642:46;1639:72;;;1691:18;;:::i;:::-;1731:10;1727:2;1720:22;1766:2;1758:6;1751:18;1806:7;1801:2;1796;1792;1788:11;1784:20;1781:33;1778:53;;;1827:1;1824;1817:12;1778:53;1840:68;1905:2;1900;1892:6;1888:15;1883:2;1879;1875:11;1840:68;:::i;:::-;1927:6;1043:896;-1:-1:-1;;;;;;;1043:896:161:o;1944:139::-;-1:-1:-1;;;;;2027:31:161;;2017:42;;2007:70;;2073:1;2070;2063:12;2007:70;1944:139;:::o;2088:270::-;2162:6;2215:2;2203:9;2194:7;2190:23;2186:32;2183:52;;;2231:1;2228;2221:12;2183:52;2270:9;2257:23;2289:39;2322:5;2289:39;:::i;:::-;2347:5;2088:270;-1:-1:-1;;;2088:270:161:o;2363:160::-;2428:20;;2484:13;;2477:21;2467:32;;2457:60;;2513:1;2510;2503:12;2457:60;2363:160;;;:::o;2528:180::-;2584:6;2637:2;2625:9;2616:7;2612:23;2608:32;2605:52;;;2653:1;2650;2643:12;2605:52;2676:26;2692:9;2676:26;:::i;2713:155::-;2773:5;2818:2;2809:6;2804:3;2800:16;2796:25;2793:45;;;2834:1;2831;2824:12;2873:492;2977:6;2985;2993;3046:2;3034:9;3025:7;3021:23;3017:32;3014:52;;;3062:1;3059;3052:12;3014:52;3098:9;3085:23;3075:33;;3155:2;3144:9;3140:18;3127:32;3117:42;;3210:2;3199:9;3195:18;3182:32;3237:18;3229:6;3226:30;3223:50;;;3269:1;3266;3259:12;3223:50;3292:67;3351:7;3342:6;3331:9;3327:22;3292:67;:::i;:::-;3282:77;;;2873:492;;;;;:::o;3623:367::-;3686:8;3696:6;3750:3;3743:4;3735:6;3731:17;3727:27;3717:55;;3768:1;3765;3758:12;3717:55;-1:-1:-1;3791:20:161;;3834:18;3823:30;;3820:50;;;3866:1;3863;3856:12;3820:50;3903:4;3895:6;3891:17;3879:29;;3963:3;3956:4;3946:6;3943:1;3939:14;3931:6;3927:27;3923:38;3920:47;3917:67;;;3980:1;3977;3970:12;3995:1066;4135:6;4143;4151;4159;4167;4175;4228:3;4216:9;4207:7;4203:23;4199:33;4196:53;;;4245:1;4242;4235:12;4196:53;4284:9;4271:23;4303:39;4336:5;4303:39;:::i;:::-;4361:5;-1:-1:-1;4418:2:161;4403:18;;4390:32;4431:41;4390:32;4431:41;:::i;:::-;4491:7;-1:-1:-1;4549:2:161;4534:18;;4521:32;4572:18;4602:14;;;4599:34;;;4629:1;4626;4619:12;4599:34;4668:70;4730:7;4721:6;4710:9;4706:22;4668:70;:::i;:::-;4757:8;;-1:-1:-1;4642:96:161;-1:-1:-1;4845:2:161;4830:18;;4817:32;;-1:-1:-1;4861:16:161;;;4858:36;;;4890:1;4887;4880:12;4858:36;;4929:72;4993:7;4982:8;4971:9;4967:24;4929:72;:::i;:::-;3995:1066;;;;-1:-1:-1;3995:1066:161;;-1:-1:-1;3995:1066:161;;5020:8;;3995:1066;-1:-1:-1;;;3995:1066:161:o;5066:541::-;5152:6;5160;5168;5176;5229:3;5217:9;5208:7;5204:23;5200:33;5197:53;;;5246:1;5243;5236:12;5197:53;5282:9;5269:23;5259:33;;5342:2;5331:9;5327:18;5314:32;5355:39;5388:5;5355:39;:::i;:::-;5413:5;-1:-1:-1;5470:2:161;5455:18;;5442:32;5483:41;5442:32;5483:41;:::i;:::-;5066:541;;;;-1:-1:-1;5543:7:161;;5597:2;5582:18;5569:32;;-1:-1:-1;;5066:541:161:o;5820:561::-;5933:6;5941;5949;5957;6010:3;5998:9;5989:7;5985:23;5981:33;5978:53;;;6027:1;6024;6017:12;5978:53;6063:9;6050:23;6040:33;;6120:2;6109:9;6105:18;6092:32;6082:42;;6171:2;6160:9;6156:18;6143:32;6133:42;;6226:2;6215:9;6211:18;6198:32;6253:18;6245:6;6242:30;6239:50;;;6285:1;6282;6275:12;6239:50;6308:67;6367:7;6358:6;6347:9;6343:22;6308:67;:::i;:::-;6298:77;;;5820:561;;;;;;;:::o;6750:356::-;6836:6;6889:2;6877:9;6868:7;6864:23;6860:32;6857:52;;;6905:1;6902;6895:12;6857:52;6945:9;6932:23;6978:18;6970:6;6967:30;6964:50;;;7010:1;7007;7000:12;6964:50;7033:67;7092:7;7083:6;7072:9;7068:22;7033:67;:::i;:::-;7023:77;6750:356;-1:-1:-1;;;;6750:356:161:o;7111:541::-;7197:6;7205;7213;7221;7274:3;7262:9;7253:7;7249:23;7245:33;7242:53;;;7291:1;7288;7281:12;7242:53;7327:9;7314:23;7304:33;;7387:2;7376:9;7372:18;7359:32;7400:39;7433:5;7400:39;:::i;:::-;7458:5;-1:-1:-1;7510:2:161;7495:18;;7482:32;;-1:-1:-1;7566:2:161;7551:18;;7538:32;7579:41;7538:32;7579:41;:::i;:::-;7111:541;;;;-1:-1:-1;7111:541:161;;-1:-1:-1;;7111:541:161:o;7657:323::-;7722:6;7730;7783:2;7771:9;7762:7;7758:23;7754:32;7751:52;;;7799:1;7796;7789:12;7751:52;7838:9;7825:23;7857:39;7890:5;7857:39;:::i;:::-;7915:5;-1:-1:-1;7939:35:161;7970:2;7955:18;;7939:35;:::i;7985:424::-;8080:6;8088;8141:2;8129:9;8120:7;8116:23;8112:32;8109:52;;;8157:1;8154;8147:12;8109:52;8193:9;8180:23;8170:33;;8254:2;8243:9;8239:18;8226:32;8281:18;8273:6;8270:30;8267:50;;;8313:1;8310;8303:12;8267:50;8336:67;8395:7;8386:6;8375:9;8371:22;8336:67;:::i;:::-;8326:77;;;7985:424;;;;;:::o;8414:845::-;8522:6;8530;8538;8546;8554;8562;8570;8623:3;8611:9;8602:7;8598:23;8594:33;8591:53;;;8640:1;8637;8630:12;8591:53;8679:9;8666:23;8698:39;8731:5;8698:39;:::i;:::-;8756:5;-1:-1:-1;8813:2:161;8798:18;;8785:32;8826:41;8785:32;8826:41;:::i;:::-;8886:7;-1:-1:-1;8912:35:161;8943:2;8928:18;;8912:35;:::i;:::-;8902:45;;8994:2;8983:9;8979:18;8966:32;8956:42;;9050:3;9039:9;9035:19;9022:33;9099:4;9090:7;9086:18;9077:7;9074:31;9064:59;;9119:1;9116;9109:12;9064:59;8414:845;;;;-1:-1:-1;8414:845:161;;;;9142:7;9196:3;9181:19;;9168:33;;-1:-1:-1;9248:3:161;9233:19;;;9220:33;;8414:845;-1:-1:-1;;8414:845:161:o;9264:391::-;9341:6;9349;9357;9410:2;9398:9;9389:7;9385:23;9381:32;9378:52;;;9426:1;9423;9416:12;9378:52;9462:9;9449:23;9439:33;;9522:2;9511:9;9507:18;9494:32;9535:39;9568:5;9535:39;:::i;:::-;9264:391;;9593:5;;-1:-1:-1;;;9645:2:161;9630:18;;;;9617:32;;9264:391::o;9920:691::-;10015:6;10023;10031;10039;10047;10100:3;10088:9;10079:7;10075:23;10071:33;10068:53;;;10117:1;10114;10107:12;10068:53;10153:9;10140:23;10130:33;;10213:2;10202:9;10198:18;10185:32;10226:39;10259:5;10226:39;:::i;:::-;10284:5;-1:-1:-1;10341:2:161;10326:18;;10313:32;10354:41;10313:32;10354:41;:::i;:::-;10414:7;-1:-1:-1;10468:2:161;10453:18;;10440:32;;-1:-1:-1;10524:3:161;10509:19;;10496:33;10538:41;10496:33;10538:41;:::i;:::-;10598:7;10588:17;;;9920:691;;;;;;;;:::o;10616:180::-;10675:6;10728:2;10716:9;10707:7;10703:23;10699:32;10696:52;;;10744:1;10741;10734:12;10696:52;-1:-1:-1;10767:23:161;;10616:180;-1:-1:-1;10616:180:161:o;11630:287::-;11759:3;11797:6;11791:13;11813:66;11872:6;11867:3;11860:4;11852:6;11848:17;11813:66;:::i;:::-;11895:16;;;;;11630:287;-1:-1:-1;;11630:287:161:o;12201:184::-;12271:6;12324:2;12312:9;12303:7;12299:23;12295:32;12292:52;;;12340:1;12337;12330:12;12292:52;-1:-1:-1;12363:16:161;;12201:184;-1:-1:-1;12201:184:161:o",
    "linkReferences": {},
    "immutableReferences": {
      "2658": [
        {
          "start": 2830,
          "length": 32
        },
        {
          "start": 2895,
          "length": 32
        },
        {
          "start": 3035,
          "length": 32
        },
        {
          "start": 3124,
          "length": 32
        },
        {
          "start": 3288,
          "length": 32
        },
        {
          "start": 3490,
          "length": 32
        }
      ],
      "37": [
        {
          "start": 484,
          "length": 32
        },
        {
          "start": 934,
          "length": 32
        },
        {
          "start": 1664,
          "length": 32
        },
        {
          "start": 1762,
          "length": 32
        },
        {
          "start": 1812,
          "length": 32
        },
        {
          "start": 1914,
          "length": 32
        },
        {
          "start": 1961,
          "length": 32
        },
        {
          "start": 2228,
          "length": 32
        },
        {
          "start": 2471,
          "length": 32
        },
        {
          "start": 2593,
          "length": 32
        }
      ],
      "40": [
        {
          "start": 1593,
          "length": 32
        },
        {
          "start": 1712,
          "length": 32
        },
        {
          "start": 2009,
          "length": 32
        },
        {
          "start": 2430,
          "length": 32
        }
      ],
      "43": [
        {
          "start": 1406,
          "length": 32
        },
        {
          "start": 2521,
          "length": 32
        },
        {
          "start": 2642,
          "length": 32
        }
      ],
      "46": [
        {
          "start": 1509,
          "length": 32
        },
        {
          "start": 1862,
          "length": 32
        }
      ],
      "55": [
        {
          "start": 1108,
          "length": 32
        },
        {
          "start": 2083,
          "length": 32
        }
      ],
      "9815": [
        {
          "start": 2743,
          "length": 32
        },
        {
          "start": 2796,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "DOMAIN_SEPARATOR()": "3644e515",
    "PERMIT_TYPEHASH()": "30adf81f",
    "addLiquidity(uint256,uint256,uint256,(address,bool,bytes))": "9aa68462",
    "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
    "checkpoint(uint256)": "ed64bab2",
    "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
    "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
    "collectGovernanceFee((address,bool,bytes))": "3e691db9",
    "deposit(uint256,(address,bool,bytes))": "829555d4",
    "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
    "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
    "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070",
    "pause(bool)": "02329a29",
    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
    "pricePerShare()": "99530b06",
    "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
    "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434",
    "setApproval(uint256,address,uint256)": "9cd241af",
    "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
    "setApprovalForAll(address,bool)": "a22cb465",
    "setGovernance(address)": "ab033ea9",
    "setPauser(address,bool)": "7180c8ca",
    "sweep(address)": "01681a62",
    "target0()": "21b57d53",
    "target1()": "eac3e799",
    "target2()": "a6e8a859",
    "target3()": "d899e112",
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
    "withdraw(uint256,(address,bool,bytes))": "d55cefec"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"_target0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target2\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target3\",\"type\":\"address\"},{\"internalType\":\"contract IERC4626\",\"name\":\"_pool\",\"type\":\"address\"},{\"internalType\":\"address[]\",\"name\":\"_sweepTargets\",\"type\":\"address[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"InvalidBaseToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsupportedToken\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"sharesMinted\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pricePerShare\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountWithdrawn\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"collectGovernanceFee((address,bool,bytes))\":{\"returns\":{\"_0\":\"proceeds The amount of base collected.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"pricePerShare()\":{\"returns\":{\"sharePrice\":\"The current share price.\"}},\"sweep(address)\":{\"details\":\"WARN: The entire balance of any of the sweep targets can be swept      by governance. If these sweep targets provide access to the base or      pool token, then governance has the ability to rug the pool.WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"notice\":\"This contract's EIP712 domain separator.\"},\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"addLiquidity(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another\"},\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"},\"pricePerShare()\":{\"notice\":\"Loads the share price from the yield source\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"sweep(address)\":{\"notice\":\"Some yield sources [eg Morpho] pay rewards directly to this         contract but we can't handle distributing them internally so we         sweep to the fee collector address to then redistribute to users.\"},\"target0()\":{\"notice\":\"The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions.\"},\"target1()\":{\"notice\":\"The target1 address. This is a logic contract that contains all         some stateful functions.\"},\"target2()\":{\"notice\":\"The target2 address. This is a logic contract that contains all         some stateful functions.\"},\"target3()\":{\"notice\":\"The target3 address. This is a logic contract that contains all         some stateful functions.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockERC4626Hyperdrive.sol\":\"MockERC4626Hyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x6179a7a5d516ba70894c081b0d3001f5eb95bd98ba693c6626d7d44743812056\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://35f3a3e7cff3b8fd657b5aa4bebeb5c6df3b9d6a83b58a3d86887339ceed1843\",\"dweb:/ipfs/QmdC36TA11uyQ5S2ZMsRrcv81RPuHs8tZCzNwWgwkvzPoY\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0xe5889a0b6c43131543029af4368ee0ac4631b8281425766e07a38b590eecb8db\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://80497d157827cab2d7cefb429e9d1e2ac977ed8d1435a03c1b5d0f4d0d1861ba\",\"dweb:/ipfs/QmcW4fVGHaaRa5MYDaajynxj1uU3mcAauBVXfmJCi3FbMq\"]},\"contracts/src/instances/ERC4626Base.sol\":{\"keccak256\":\"0xc5e11f70a3e769fd322e4f02858a46f92c8434623a9af5c2454e0efba7fd9e7f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://658dd5495159b0e0c00d5d9b6ac8bd7b699cfbf0f429b3c6fdd6b8505010ce37\",\"dweb:/ipfs/QmSVi7t74sawCx4AqA1Mr9zLLps8R8vGbqfkTs4V9jVjgx\"]},\"contracts/src/instances/ERC4626Hyperdrive.sol\":{\"keccak256\":\"0x01bf1f36abeb7698f16e327d37fef0f295f5b234d85b51b9c1fbc361bd240c92\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8c2018afc98ccee8f4ba7f4d1ebd725720c523eed82782d50df472ea3f94d662\",\"dweb:/ipfs/QmZEs8vXxqBHJCWmb17xWVHrih9W6hcSMxhfT3bkvKT12P\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc\",\"dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0xe7076ded0fe36ac72c946258bc3183bebb6f1567cd0ce5d55720de84988f5312\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b84d02ec55ccbee1491ce25a2b890e7c371dd251cb69c2cc818179e49ddef780\",\"dweb:/ipfs/QmcXWYPF2Hy6w3TLqmegYiUj5pL9i9PqH44USV4Px9sk2k\"]},\"contracts/src/interfaces/IERC4626HyperdriveCore.sol\":{\"keccak256\":\"0xcea74eaf829d241754f74a8c2223fef0ec83459252d2aaedcd860bae538620c9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://464f58076e112b73957147b2abb52c85b1b806b306fa2d490d0e74f993ffe5a8\",\"dweb:/ipfs/QmNf3EACwEDsB7X1G1geLeqenR1xJHd9zGvSeZJ9f2nSmp\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0xa63f6d3d8b87fcf27202f4ea8609762ef695b9919e4907522930738eb2dcde7e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db88312fa9fed33207e1974d91f714ed8cbbe4a4a1d0e54a6ee5c15a8949f4fb\",\"dweb:/ipfs/QmSYCCuc6Xkh6oibhW5ovdQRhvT5nV4Hxj3Q2xEhjzYyWE\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8\",\"dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17\",\"dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x21d3173693bcb6ba589a0cda73f57c3c06af39af22308e3b3142f9e639f526e4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://54aacd825c1fbc109428040e43dd45f531a769c016e8362311bf18e209a34a0e\",\"dweb:/ipfs/QmV1CwV1MUREgLn83CEykLybihbM1f1ogh8p2Y6owZv91e\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0xb9ab7ab09e4e95f5e187418921f41f3b6d652c5a0889624b660495491ffc4148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7a05317c1fd4996fece6de20a672006163f31f9ae32fa23a855bbe8e89f573f2\",\"dweb:/ipfs/Qmf5kG78Za6KjSyRXeE8dFqdAE4T3BxhRQUXFKUkuuGGqK\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0xbdd9d63dcc57a2f23d2fd66a3f0440a220fb31664a1d99443a9e80b053393261\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6a16611ca56bf2c2360d39bfc9611d547b9ac76c80c9560e0a33a89958ee6eca\",\"dweb:/ipfs/QmQJUCU7HgydjvdKtJVte3wHitgwaK3BG6cN3FBm9FM5sy\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x863819651e0c159fc8aa27a357458c9ef3cd641287ff80382f566b6f839f795d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5b4675409abd6f0361b568e0912a8c430e601dbbae68961ca5d5ac5d5dcc3b8a\",\"dweb:/ipfs/QmRgL5Nvsb425tUxqMkC8tqHwyDzW5qmkf7UB2pkwf87uU\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xbcf204d47761b8da37b0dd1ac6a7a3226d98ad95972acdf9300476a3010b95e2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://756faa29691a56068a330d2de06febe4b7c286ee8ddaee40b1670e723350fbb0\",\"dweb:/ipfs/QmTixXWCvS5uLH6dd3U2PWKya9YZuEm5duNRGdQBDzwo6V\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x61b9f8eb5795fda17a5c35264f53879a7ef022e02b865b015bdb9f5811db6ba5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9498f4bfd969d78634da2b0a89b10f88ac467f52d565d9b62561dcc569ad00cd\",\"dweb:/ipfs/QmZdGwc5ezJf2qv8yheoTVF3UTfWJnh6FtAAq7wufhPZ5R\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xd4ea004cc74fba458e72066541257426e95f1b00ba0b25d53c7c0fce1726d991\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://35c8c8b5bfe4f71c1a5175c1d6549aff9352feec558f3816c9e02d1cab1e1a88\",\"dweb:/ipfs/QmY7qydf5ofXdVJWPeb4bUTtHCn7oWymcTY2RCpZSuSWKM\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xe150223822098026c7ce734cd68848e45b47b92b024d34bc25886e9c6af6ec67\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6590e590f4af53d55e81e06ba8d53346cfce71ce1fa8d1833141f273d74c8a8f\",\"dweb:/ipfs/QmTM582joUpK7KBDWvwWEBi4XT3Qt9x8VLkhwPYj8Qu93o\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xd87293bc10dfe09707a042bf05091baf40ba344bdca141bd99b62256a7611817\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f6eadd454c6671c26bd22095c31a3bbaea7083df9aa6548dbaba32a4907e336\",\"dweb:/ipfs/QmY1jMW9DuAk9CSfVS6MsG5onqjZHKzdBrv2TcHvj9yKj4\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x077931150bcba5b99dedcd9038f3fbeef9c9230046dc4649c457d75d4be32a5c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2a48e4046f7ae8acb965d0f8d79767f4f4c70c1a6a8d3cf635482587412d33fd\",\"dweb:/ipfs/QmcY8FbffppqTMBiMwniXG9R8i8eQoVJuLqqTXgpuiXyUr\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x2f9511684820be7510155adfe3c2c2ef7e2583472946bae37f379bac801fc263\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7e9a84e4168448e3320a6682c8ba248c8b51757df173b86507e9aba4b6167247\",\"dweb:/ipfs/QmSonetYBP22Fnc8HrcaTxAA1Zg2PCR5ptPiEp22sA77Ka\"]},\"contracts/test/MockERC4626Hyperdrive.sol\":{\"keccak256\":\"0xe64116969e1e66b755c46482a9f2870b3a7784629e69f9a43dc56ba1e37c2ca2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1c64262669aab34536e656fce5072299ecd673972e03c7466ecbc8a5da8f8a0c\",\"dweb:/ipfs/QmedjG6S7SdJnua1n6N5yK4dT5vRbHKNxqSjHxZKH6xyFz\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4\",\"dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "struct IHyperdrive.PoolConfig",
              "name": "_config",
              "type": "tuple",
              "components": [
                {
                  "internalType": "contract IERC20",
                  "name": "baseToken",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "linkerFactory",
                  "type": "address"
                },
                {
                  "internalType": "bytes32",
                  "name": "linkerCodeHash",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "initialSharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minimumShareReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minimumTransactionAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "positionDuration",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "checkpointDuration",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "timeStretch",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "governance",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "feeCollector",
                  "type": "address"
                },
                {
                  "internalType": "struct IHyperdrive.Fees",
                  "name": "fees",
                  "type": "tuple",
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "curve",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "flat",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "governanceLP",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "governanceZombie",
                      "type": "uint256"
                    }
                  ]
                }
              ]
            },
            {
              "internalType": "address",
              "name": "_target0",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_target1",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_target2",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_target3",
              "type": "address"
            },
            {
              "internalType": "contract IERC4626",
              "name": "_pool",
              "type": "address"
            },
            {
              "internalType": "address[]",
              "name": "_sweepTargets",
              "type": "address[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidBaseToken"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidCheckpointDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidFeeAmounts"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidInitialSharePrice"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMinimumShareReserves"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidPositionDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnexpectedSuccess"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnsupportedToken"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "provider",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "lpAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "lpSharePrice",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "AddLiquidity",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Approval",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "ApprovalForAll",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "trader",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assetId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "bondAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CloseLong",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "trader",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assetId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "bondAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CloseShort",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "collector",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "fees",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CollectGovernanceFee",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "checkpointTime",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "maturedShorts",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "maturedLongs",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "lpSharePrice",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CreateCheckpoint",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newGovernance",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "GovernanceUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "provider",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "lpAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "apr",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Initialize",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "trader",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assetId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "bondAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "OpenLong",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "trader",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assetId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "bondAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "OpenShort",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newPauser",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "PauserUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "provider",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "withdrawalShareAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "RedeemWithdrawalShares",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "provider",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "lpAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "withdrawalShareAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "lpSharePrice",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "RemoveLiquidity",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "TransferSingle",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "fallback"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "DOMAIN_SEPARATOR",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "PERMIT_TYPEHASH",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "addLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "batchTransferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "checkpoint"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "closeLong",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "closeShort",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "collectGovernanceFee",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "deposit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "sharesMinted",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "initialize",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "openLong",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "openShort",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "pause"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_approved",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "permitForAll"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "pricePerShare",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "redeemWithdrawalShares",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "removeLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApproval"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApprovalBridge"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApprovalForAll"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setGovernance"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setPauser"
        },
        {
          "inputs": [
            {
              "internalType": "contract IERC20",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "sweep"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "target0",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "target1",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "target2",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "target3",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFromBridge"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_shares",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "withdraw",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountWithdrawn",
              "type": "uint256"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "collectGovernanceFee((address,bool,bytes))": {
            "returns": {
              "_0": "proceeds The amount of base collected."
            }
          },
          "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
            "details": "The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.",
            "params": {
              "_approved": "A boolean of the approval status to set to.",
              "deadline": "The timestamp which the signature must be submitted by        to be valid.",
              "owner": "The owner of the account which is having the new approval set.",
              "r": "The r component of the ECDSA signature.",
              "s": "The s component of the ECDSA signature.",
              "spender": "The address which will be allowed to spend owner's tokens.",
              "v": "Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28."
            }
          },
          "pricePerShare()": {
            "returns": {
              "sharePrice": "The current share price."
            }
          },
          "sweep(address)": {
            "details": "WARN: The entire balance of any of the sweep targets can be swept      by governance. If these sweep targets provide access to the base or      pool token, then governance has the ability to rug the pool.WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address."
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "DOMAIN_SEPARATOR()": {
            "notice": "This contract's EIP712 domain separator."
          },
          "PERMIT_TYPEHASH()": {
            "notice": "The typehash used to calculate the EIP712 hash for `permitForAll`."
          },
          "addLiquidity(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Allows LPs to supply liquidity for LP shares."
          },
          "batchTransferFrom(address,address,uint256[],uint256[])": {
            "notice": "Transfers several assets from one account to another"
          },
          "checkpoint(uint256)": {
            "notice": "Allows anyone to mint a new checkpoint."
          },
          "closeLong(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Closes a long position with a specified maturity time."
          },
          "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Closes a short position with a specified maturity time."
          },
          "collectGovernanceFee((address,bool,bytes))": {
            "notice": "This function collects the governance fees accrued by the pool."
          },
          "initialize(uint256,uint256,(address,bool,bytes))": {
            "notice": "Allows the first LP to initialize the market with a target APR."
          },
          "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Opens a long position."
          },
          "openShort(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Opens a short position."
          },
          "pause(bool)": {
            "notice": "Allows an authorized address to pause this contract."
          },
          "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
            "notice": "Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature."
          },
          "pricePerShare()": {
            "notice": "Loads the share price from the yield source"
          },
          "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": {
            "notice": "Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw."
          },
          "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
            "notice": "Allows an LP to burn shares and withdraw from the pool."
          },
          "setApproval(uint256,address,uint256)": {
            "notice": "Allows a user to set an approval for an individual asset with         specific amount."
          },
          "setApprovalBridge(uint256,address,uint256,address)": {
            "notice": "Allows the compatibility linking contract to forward calls to         set asset approvals."
          },
          "setApprovalForAll(address,bool)": {
            "notice": "Allows a user to approve an operator to use all of their assets."
          },
          "setGovernance(address)": {
            "notice": "Allows governance to change governance."
          },
          "setPauser(address,bool)": {
            "notice": "Allows governance to change the pauser status of an address."
          },
          "sweep(address)": {
            "notice": "Some yield sources [eg Morpho] pay rewards directly to this         contract but we can't handle distributing them internally so we         sweep to the fee collector address to then redistribute to users."
          },
          "target0()": {
            "notice": "The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions."
          },
          "target1()": {
            "notice": "The target1 address. This is a logic contract that contains all         some stateful functions."
          },
          "target2()": {
            "notice": "The target2 address. This is a logic contract that contains all         some stateful functions."
          },
          "target3()": {
            "notice": "The target3 address. This is a logic contract that contains all         some stateful functions."
          },
          "transferFrom(uint256,address,address,uint256)": {
            "notice": "Transfers an amount of assets from the source to the destination."
          },
          "transferFromBridge(uint256,address,address,uint256,address)": {
            "notice": "Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge."
          }
        },
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "forge-std/=lib/forge-std/src/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "contracts/test/MockERC4626Hyperdrive.sol": "MockERC4626Hyperdrive"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/external/Hyperdrive.sol": {
        "keccak256": "0x6179a7a5d516ba70894c081b0d3001f5eb95bd98ba693c6626d7d44743812056",
        "urls": [
          "bzz-raw://35f3a3e7cff3b8fd657b5aa4bebeb5c6df3b9d6a83b58a3d86887339ceed1843",
          "dweb:/ipfs/QmdC36TA11uyQ5S2ZMsRrcv81RPuHs8tZCzNwWgwkvzPoY"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/external/HyperdriveTarget0.sol": {
        "keccak256": "0xe5889a0b6c43131543029af4368ee0ac4631b8281425766e07a38b590eecb8db",
        "urls": [
          "bzz-raw://80497d157827cab2d7cefb429e9d1e2ac977ed8d1435a03c1b5d0f4d0d1861ba",
          "dweb:/ipfs/QmcW4fVGHaaRa5MYDaajynxj1uU3mcAauBVXfmJCi3FbMq"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/instances/ERC4626Base.sol": {
        "keccak256": "0xc5e11f70a3e769fd322e4f02858a46f92c8434623a9af5c2454e0efba7fd9e7f",
        "urls": [
          "bzz-raw://658dd5495159b0e0c00d5d9b6ac8bd7b699cfbf0f429b3c6fdd6b8505010ce37",
          "dweb:/ipfs/QmSVi7t74sawCx4AqA1Mr9zLLps8R8vGbqfkTs4V9jVjgx"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/instances/ERC4626Hyperdrive.sol": {
        "keccak256": "0x01bf1f36abeb7698f16e327d37fef0f295f5b234d85b51b9c1fbc361bd240c92",
        "urls": [
          "bzz-raw://8c2018afc98ccee8f4ba7f4d1ebd725720c523eed82782d50df472ea3f94d662",
          "dweb:/ipfs/QmZEs8vXxqBHJCWmb17xWVHrih9W6hcSMxhfT3bkvKT12P"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4",
        "urls": [
          "bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36",
          "dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC4626.sol": {
        "keccak256": "0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf",
        "urls": [
          "bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc",
          "dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia"
        ],
        "license": "GPL-2.0-or-later"
      },
      "contracts/src/interfaces/IERC4626Hyperdrive.sol": {
        "keccak256": "0xe7076ded0fe36ac72c946258bc3183bebb6f1567cd0ce5d55720de84988f5312",
        "urls": [
          "bzz-raw://b84d02ec55ccbee1491ce25a2b890e7c371dd251cb69c2cc818179e49ddef780",
          "dweb:/ipfs/QmcXWYPF2Hy6w3TLqmegYiUj5pL9i9PqH44USV4Px9sk2k"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC4626HyperdriveCore.sol": {
        "keccak256": "0xcea74eaf829d241754f74a8c2223fef0ec83459252d2aaedcd860bae538620c9",
        "urls": [
          "bzz-raw://464f58076e112b73957147b2abb52c85b1b806b306fa2d490d0e74f993ffe5a8",
          "dweb:/ipfs/QmNf3EACwEDsB7X1G1geLeqenR1xJHd9zGvSeZJ9f2nSmp"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC4626HyperdriveRead.sol": {
        "keccak256": "0xa63f6d3d8b87fcf27202f4ea8609762ef695b9919e4907522930738eb2dcde7e",
        "urls": [
          "bzz-raw://db88312fa9fed33207e1974d91f714ed8cbbe4a4a1d0e54a6ee5c15a8949f4fb",
          "dweb:/ipfs/QmSYCCuc6Xkh6oibhW5ovdQRhvT5nV4Hxj3Q2xEhjzYyWE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787",
        "urls": [
          "bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8",
          "dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveCore.sol": {
        "keccak256": "0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d",
        "urls": [
          "bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85",
          "dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b",
        "urls": [
          "bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17",
          "dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad",
        "urls": [
          "bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6",
          "dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenCore.sol": {
        "keccak256": "0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d",
        "urls": [
          "bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8",
          "dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb",
        "urls": [
          "bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f",
          "dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4",
        "urls": [
          "bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6",
          "dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveAdmin.sol": {
        "keccak256": "0x21d3173693bcb6ba589a0cda73f57c3c06af39af22308e3b3142f9e639f526e4",
        "urls": [
          "bzz-raw://54aacd825c1fbc109428040e43dd45f531a769c016e8362311bf18e209a34a0e",
          "dweb:/ipfs/QmV1CwV1MUREgLn83CEykLybihbM1f1ogh8p2Y6owZv91e"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveBase.sol": {
        "keccak256": "0xb9ab7ab09e4e95f5e187418921f41f3b6d652c5a0889624b660495491ffc4148",
        "urls": [
          "bzz-raw://7a05317c1fd4996fece6de20a672006163f31f9ae32fa23a855bbe8e89f573f2",
          "dweb:/ipfs/Qmf5kG78Za6KjSyRXeE8dFqdAE4T3BxhRQUXFKUkuuGGqK"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveCheckpoint.sol": {
        "keccak256": "0xbdd9d63dcc57a2f23d2fd66a3f0440a220fb31664a1d99443a9e80b053393261",
        "urls": [
          "bzz-raw://6a16611ca56bf2c2360d39bfc9611d547b9ac76c80c9560e0a33a89958ee6eca",
          "dweb:/ipfs/QmQJUCU7HgydjvdKtJVte3wHitgwaK3BG6cN3FBm9FM5sy"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveLP.sol": {
        "keccak256": "0x863819651e0c159fc8aa27a357458c9ef3cd641287ff80382f566b6f839f795d",
        "urls": [
          "bzz-raw://5b4675409abd6f0361b568e0912a8c430e601dbbae68961ca5d5ac5d5dcc3b8a",
          "dweb:/ipfs/QmRgL5Nvsb425tUxqMkC8tqHwyDzW5qmkf7UB2pkwf87uU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveLong.sol": {
        "keccak256": "0xbcf204d47761b8da37b0dd1ac6a7a3226d98ad95972acdf9300476a3010b95e2",
        "urls": [
          "bzz-raw://756faa29691a56068a330d2de06febe4b7c286ee8ddaee40b1670e723350fbb0",
          "dweb:/ipfs/QmTixXWCvS5uLH6dd3U2PWKya9YZuEm5duNRGdQBDzwo6V"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveMultiToken.sol": {
        "keccak256": "0x61b9f8eb5795fda17a5c35264f53879a7ef022e02b865b015bdb9f5811db6ba5",
        "urls": [
          "bzz-raw://9498f4bfd969d78634da2b0a89b10f88ac467f52d565d9b62561dcc569ad00cd",
          "dweb:/ipfs/QmZdGwc5ezJf2qv8yheoTVF3UTfWJnh6FtAAq7wufhPZ5R"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveShort.sol": {
        "keccak256": "0xd4ea004cc74fba458e72066541257426e95f1b00ba0b25d53c7c0fce1726d991",
        "urls": [
          "bzz-raw://35c8c8b5bfe4f71c1a5175c1d6549aff9352feec558f3816c9e02d1cab1e1a88",
          "dweb:/ipfs/QmY7qydf5ofXdVJWPeb4bUTtHCn7oWymcTY2RCpZSuSWKM"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveStorage.sol": {
        "keccak256": "0xe150223822098026c7ce734cd68848e45b47b92b024d34bc25886e9c6af6ec67",
        "urls": [
          "bzz-raw://6590e590f4af53d55e81e06ba8d53346cfce71ce1fa8d1833141f273d74c8a8f",
          "dweb:/ipfs/QmTM582joUpK7KBDWvwWEBi4XT3Qt9x8VLkhwPYj8Qu93o"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/AssetId.sol": {
        "keccak256": "0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a",
        "urls": [
          "bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a",
          "dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639",
        "urls": [
          "bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d",
          "dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0xd87293bc10dfe09707a042bf05091baf40ba344bdca141bd99b62256a7611817",
        "urls": [
          "bzz-raw://8f6eadd454c6671c26bd22095c31a3bbaea7083df9aa6548dbaba32a4907e336",
          "dweb:/ipfs/QmY1jMW9DuAk9CSfVS6MsG5onqjZHKzdBrv2TcHvj9yKj4"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/LPMath.sol": {
        "keccak256": "0x077931150bcba5b99dedcd9038f3fbeef9c9230046dc4649c457d75d4be32a5c",
        "urls": [
          "bzz-raw://2a48e4046f7ae8acb965d0f8d79767f4f4c70c1a6a8d3cf635482587412d33fd",
          "dweb:/ipfs/QmcY8FbffppqTMBiMwniXG9R8i8eQoVJuLqqTXgpuiXyUr"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/SafeCast.sol": {
        "keccak256": "0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f",
        "urls": [
          "bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5",
          "dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/YieldSpaceMath.sol": {
        "keccak256": "0x2f9511684820be7510155adfe3c2c2ef7e2583472946bae37f379bac801fc263",
        "urls": [
          "bzz-raw://7e9a84e4168448e3320a6682c8ba248c8b51757df173b86507e9aba4b6167247",
          "dweb:/ipfs/QmSonetYBP22Fnc8HrcaTxAA1Zg2PCR5ptPiEp22sA77Ka"
        ],
        "license": "Apache-2.0"
      },
      "contracts/test/MockERC4626Hyperdrive.sol": {
        "keccak256": "0xe64116969e1e66b755c46482a9f2870b3a7784629e69f9a43dc56ba1e37c2ca2",
        "urls": [
          "bzz-raw://1c64262669aab34536e656fce5072299ecd673972e03c7466ecbc8a5da8f8a0c",
          "dweb:/ipfs/QmedjG6S7SdJnua1n6N5yK4dT5vRbHKNxqSjHxZKH6xyFz"
        ],
        "license": "Apache-2.0"
      },
      "lib/solmate/src/tokens/ERC20.sol": {
        "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
        "urls": [
          "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
          "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/utils/ReentrancyGuard.sol": {
        "keccak256": "0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01",
        "urls": [
          "bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800",
          "dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/utils/SafeTransferLib.sol": {
        "keccak256": "0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a",
        "urls": [
          "bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4",
          "dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/test/MockERC4626Hyperdrive.sol",
    "id": 16888,
    "exportedSymbols": {
      "ERC4626Hyperdrive": [
        3019
      ],
      "IERC4626": [
        4097
      ],
      "IHyperdrive": [
        4675
      ],
      "MockERC4626Hyperdrive": [
        16887
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:1405:64",
    "nodes": [
      {
        "id": 16806,
        "nodeType": "PragmaDirective",
        "src": "39:23:64",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 16810,
        "nodeType": "ImportDirective",
        "src": "64:105:64",
        "nodes": [],
        "absolutePath": "contracts/src/instances/ERC4626Hyperdrive.sol",
        "file": "contracts/src/instances/ERC4626Hyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 16888,
        "sourceUnit": 3020,
        "symbolAliases": [
          {
            "foreign": {
              "id": 16807,
              "name": "ERC4626Hyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3019,
              "src": "73:17:64",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 16808,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4675,
              "src": "92:11:64",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 16809,
              "name": "IERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4097,
              "src": "105:8:64",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 16887,
        "nodeType": "ContractDefinition",
        "src": "324:1119:64",
        "nodes": [
          {
            "id": 16842,
            "nodeType": "FunctionDefinition",
            "src": "382:430:64",
            "nodes": [],
            "body": {
              "id": 16841,
              "nodeType": "Block",
              "src": "810:2:64",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 16832,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16815,
                    "src": "654:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  {
                    "id": 16833,
                    "name": "_target0",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16817,
                    "src": "675:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 16834,
                    "name": "_target1",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16819,
                    "src": "697:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 16835,
                    "name": "_target2",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16821,
                    "src": "719:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 16836,
                    "name": "_target3",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16823,
                    "src": "741:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 16837,
                    "name": "_pool",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16826,
                    "src": "763:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$4097",
                      "typeString": "contract IERC4626"
                    }
                  },
                  {
                    "id": 16838,
                    "name": "_sweepTargets",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 16829,
                    "src": "782:13:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  }
                ],
                "id": 16839,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 16831,
                  "name": "ERC4626Hyperdrive",
                  "nameLocations": [
                    "623:17:64"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 3019,
                  "src": "623:17:64"
                },
                "nodeType": "ModifierInvocation",
                "src": "623:182:64"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 16830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16815,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "433:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 16842,
                  "src": "403:37:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 16814,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 16813,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "403:11:64",
                        "415:10:64"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4459,
                      "src": "403:22:64"
                    },
                    "referencedDeclaration": 4459,
                    "src": "403:22:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16817,
                  "mutability": "mutable",
                  "name": "_target0",
                  "nameLocation": "458:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 16842,
                  "src": "450:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16816,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "450:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16819,
                  "mutability": "mutable",
                  "name": "_target1",
                  "nameLocation": "484:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 16842,
                  "src": "476:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16818,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "476:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16821,
                  "mutability": "mutable",
                  "name": "_target2",
                  "nameLocation": "510:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 16842,
                  "src": "502:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16820,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "502:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16823,
                  "mutability": "mutable",
                  "name": "_target3",
                  "nameLocation": "536:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 16842,
                  "src": "528:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16822,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "528:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16826,
                  "mutability": "mutable",
                  "name": "_pool",
                  "nameLocation": "563:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 16842,
                  "src": "554:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC4626_$4097",
                    "typeString": "contract IERC4626"
                  },
                  "typeName": {
                    "id": 16825,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 16824,
                      "name": "IERC4626",
                      "nameLocations": [
                        "554:8:64"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4097,
                      "src": "554:8:64"
                    },
                    "referencedDeclaration": 4097,
                    "src": "554:8:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$4097",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16829,
                  "mutability": "mutable",
                  "name": "_sweepTargets",
                  "nameLocation": "595:13:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 16842,
                  "src": "578:30:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 16827,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "578:7:64",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 16828,
                    "nodeType": "ArrayTypeName",
                    "src": "578:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "393:221:64"
            },
            "returnParameters": {
              "id": 16840,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "810:0:64"
            },
            "scope": 16887,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 16860,
            "nodeType": "FunctionDefinition",
            "src": "818:204:64",
            "nodes": [],
            "body": {
              "id": 16859,
              "nodeType": "Block",
              "src": "971:51:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 16855,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16844,
                        "src": "997:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 16856,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16847,
                        "src": "1006:8:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      ],
                      "id": 16854,
                      "name": "_deposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2761
                      ],
                      "referencedDeclaration": 2761,
                      "src": "988:8:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$4512_calldata_ptr_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)"
                      }
                    },
                    "id": 16857,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "988:27:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 16853,
                  "id": 16858,
                  "nodeType": "Return",
                  "src": "981:34:64"
                }
              ]
            },
            "functionSelector": "829555d4",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nameLocation": "827:7:64",
            "parameters": {
              "id": 16848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16844,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "852:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 16860,
                  "src": "844:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16843,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "844:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16847,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "898:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 16860,
                  "src": "869:37:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 16846,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 16845,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "869:11:64",
                        "881:7:64"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4512,
                      "src": "869:19:64"
                    },
                    "referencedDeclaration": 4512,
                    "src": "869:19:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$4512_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "834:78:64"
            },
            "returnParameters": {
              "id": 16853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16850,
                  "mutability": "mutable",
                  "name": "sharesMinted",
                  "nameLocation": "937:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 16860,
                  "src": "929:20:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16849,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "929:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16852,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "959:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 16860,
                  "src": "951:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16851,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "951:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "928:42:64"
            },
            "scope": 16887,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 16876,
            "nodeType": "FunctionDefinition",
            "src": "1028:189:64",
            "nodes": [],
            "body": {
              "id": 16875,
              "nodeType": "Block",
              "src": "1165:52:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 16871,
                        "name": "_shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16862,
                        "src": "1192:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 16872,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16865,
                        "src": "1201:8:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      ],
                      "id": 16870,
                      "name": "_withdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2815
                      ],
                      "referencedDeclaration": 2815,
                      "src": "1182:9:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$4512_calldata_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,struct IHyperdrive.Options calldata) returns (uint256)"
                      }
                    },
                    "id": 16873,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1182:28:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16869,
                  "id": 16874,
                  "nodeType": "Return",
                  "src": "1175:35:64"
                }
              ]
            },
            "functionSelector": "d55cefec",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "1037:8:64",
            "parameters": {
              "id": 16866,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16862,
                  "mutability": "mutable",
                  "name": "_shares",
                  "nameLocation": "1063:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 16876,
                  "src": "1055:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16861,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1055:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16865,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "1109:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 16876,
                  "src": "1080:37:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 16864,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 16863,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "1080:11:64",
                        "1092:7:64"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4512,
                      "src": "1080:19:64"
                    },
                    "referencedDeclaration": 4512,
                    "src": "1080:19:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$4512_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1045:78:64"
            },
            "returnParameters": {
              "id": 16869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16868,
                  "mutability": "mutable",
                  "name": "amountWithdrawn",
                  "nameLocation": "1148:15:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 16876,
                  "src": "1140:23:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16867,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1140:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1139:25:64"
            },
            "scope": 16887,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 16886,
            "nodeType": "FunctionDefinition",
            "src": "1335:106:64",
            "nodes": [],
            "body": {
              "id": 16885,
              "nodeType": "Block",
              "src": "1401:40:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 16882,
                      "name": "_pricePerShare",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2828
                      ],
                      "referencedDeclaration": 2828,
                      "src": "1418:14:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 16883,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1418:16:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16881,
                  "id": 16884,
                  "nodeType": "Return",
                  "src": "1411:23:64"
                }
              ]
            },
            "documentation": {
              "id": 16877,
              "nodeType": "StructuredDocumentation",
              "src": "1223:107:64",
              "text": "@notice Loads the share price from the yield source\n @return sharePrice The current share price."
            },
            "functionSelector": "99530b06",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pricePerShare",
            "nameLocation": "1344:13:64",
            "parameters": {
              "id": 16878,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1357:2:64"
            },
            "returnParameters": {
              "id": 16881,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16880,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1389:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 16886,
                  "src": "1381:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16879,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1381:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1380:20:64"
            },
            "scope": 16887,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 16811,
              "name": "ERC4626Hyperdrive",
              "nameLocations": [
                "358:17:64"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 3019,
              "src": "358:17:64"
            },
            "id": 16812,
            "nodeType": "InheritanceSpecifier",
            "src": "358:17:64"
          }
        ],
        "canonicalName": "MockERC4626Hyperdrive",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          16887,
          3019,
          2846,
          563,
          6845,
          9792,
          8477,
          7648,
          8937,
          5464,
          6406,
          10066,
          63914,
          4833,
          5205
        ],
        "name": "MockERC4626Hyperdrive",
        "nameLocation": "333:21:64",
        "scope": 16888,
        "usedErrors": [
          4523,
          4527,
          4529,
          4533,
          4535,
          4539,
          4567,
          4593
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 64
} as const;
