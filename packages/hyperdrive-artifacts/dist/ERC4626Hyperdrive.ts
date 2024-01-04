export const ERC4626Hyperdrive = 
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
          "name": "__pool",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "_targets",
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
    }
  ],
  "bytecode": {
    "object": "0x61030060405260016000553480156200001757600080fd5b50604051620019c6380380620019c68339810160408190526200003a91620006ff565b8187878787878480600001516001600160a01b03166080816001600160a01b0316815250506103e88160800151101562000087576040516349db44f560e01b815260040160405180910390fd5b60808101516101a05260a08101516101c05260e0810151600003620000bf57604051635428734d60e01b815260040160405180910390fd5b60e08101805160a0525160c08201511080620000ef57508060e001518160c00151620000ec919062000871565b15155b156200010e5760405163253fffcf60e11b815260040160405180910390fd5b60c081810151905261010081015160e052606081015161018052610120810151600880546001600160a01b0319166001600160a01b03928316179055610140820151166101e05261016081015151670de0b6b3a76400001080620001825750670de0b6b3a764000081610160015160200151115b806200019e5750670de0b6b3a764000081610160015160400151115b15620001bd576040516322f72cc360e11b815260040160405180910390fd5b610160818101805151610100528051602090810151610120528151604090810151610140529151606090810151909352808401516001600160a01b039081166102005293820151610220528784166102405286841661026052858416610280529284166102a0528051808201825260018152603160f81b9084015280517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd938101939093527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc690830152469082015230608082015260a00160408051601f1981840301815291905280516020909101206102c0525050506001600160a01b039092166102e05250620002d090506200047a565b876060015114620002f4576040516355f2a42f60e01b815260040160405180910390fd5b6102e0516001600160a01b03166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000336573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200035c919062000894565b6001600160a01b031687600001516001600160a01b0316146200039257604051630722152560e11b815260040160405180910390fd5b6102e0518751620003b1916001600160a01b03909116906001620004f8565b60005b81518110156200046c576000828281518110620003d557620003d5620008bb565b602002602001015190506102e0516001600160a01b0316816001600160a01b031614806200041657506080516001600160a01b0316816001600160a01b0316145b15620004355760405163350b944160e11b815260040160405180910390fd5b6001600160a01b03166000908152601060205260409020805460ff19166001179055806200046381620008d1565b915050620003b4565b505050505050505062000913565b6102e0516040516303d1689d60e11b8152670de0b6b3a764000060048201526000916001600160a01b0316906307a2d13a90602401602060405180830381865afa158015620004cd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004f39190620008f9565b905090565b600060405163095ea7b360e01b8152836004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080620005745760405162461bcd60e51b815260206004820152600e60248201526d1054141493d59157d1905253115160921b604482015260640160405180910390fd5b50505050565b634e487b7160e01b600052604160045260246000fd5b60405161018081016001600160401b0381118282101715620005b657620005b66200057a565b60405290565b6001600160a01b0381168114620005d257600080fd5b50565b8051620005e281620005bc565b919050565b600060808284031215620005fa57600080fd5b604051608081016001600160401b03811182821017156200061f576200061f6200057a565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600082601f8301126200066257600080fd5b815160206001600160401b03808311156200068157620006816200057a565b8260051b604051601f19603f83011681018181108482111715620006a957620006a96200057a565b604052938452858101830193838101925087851115620006c857600080fd5b83870191505b84821015620006f4578151620006e481620005bc565b83529183019190830190620006ce565b979650505050505050565b60008060008060008060008789036102a08112156200071d57600080fd5b6101e0808212156200072e57600080fd5b6200073862000590565b9150620007458a620005d5565b82526200075560208b01620005d5565b602083015260408a0151604083015260608a0151606083015260808a0151608083015260a08a015160a083015260c08a015160c083015260e08a015160e0830152610100808b01518184015250610120620007b2818c01620005d5565b90830152610140620007c68b8201620005d5565b90830152610160620007db8c8c8301620005e7565b8184015250819850620007f0818b01620005d5565b97505050620008036102008901620005d5565b9450620008146102208901620005d5565b9350620008256102408901620005d5565b9250620008366102608901620005d5565b6102808901519092506001600160401b038111156200085457600080fd5b620008628a828b0162000650565b91505092959891949750929550565b6000826200088f57634e487b7160e01b600052601260045260246000fd5b500690565b600060208284031215620008a757600080fd5b8151620008b481620005bc565b9392505050565b634e487b7160e01b600052603260045260246000fd5b600060018201620008f257634e487b7160e01b600052601160045260246000fd5b5060010190565b6000602082840312156200090c57600080fd5b5051919050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c0516102e051610f8662000a406000396000505060008181610423015261078401526000818161055f01526106c00152600081816105180152818161092b015261098f0152600081816105b30152818161062a0152818161075301526108d00152600081816101b301528181610375015281816105fa0152818161065c0152818161068e015281816106f40152818161072301528181610815015281816108f9015261095e01526000505060005050600050506000505060005050600050506000505060005050600050506000505060005050600050506000505060005050610f866000f3fe60806040526004361061019c5760003560e01c80639032c726116100ec578063cbc134341161008a578063ded0623111610064578063ded06231146103af578063e44808bc14610581578063eac3e799146105a1578063ed64bab2146105d55761019c565b8063cbc13434146102e9578063d899e1121461054d578063dbbe80701461053a5761019c565b8063a22cb465116100c6578063a22cb46514610480578063a6e8a85914610506578063ab033ea9146102ac578063cba2e58d1461053a5761019c565b80639032c726146104b35780639aa68462146104d35780639cd241af146104e65761019c565b806329b23fc1116101595780633e691db9116101335780633e691db9146104455780634ed2d6ac146104655780637180c8ca1461048057806377d05ff4146104a05761019c565b806329b23fc1146103af57806330adf81f146103dd5780633644e515146104115761019c565b806301681a62146102ac57806302329a29146102ce578063074a6de9146102e957806317fad7fc146103235780631c0f12b61461034357806321b57d5314610363575b3480156101a857600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516101eb9291906109cb565b600060405180830381855af49150503d8060008114610226576040519150601f19603f3d011682016040523d82523d6000602084013e61022b565b606091505b5091509150811561024f57604051638bb0a34b60e01b815260040160405180910390fd5b600061025a826109db565b90506001600160e01b03198116636e64089360e11b1461027c57815160208301fd5b81516003198101600484019081529261029d91810160200190602401610a4c565b80519650602001945050505050f35b3480156102b857600080fd5b506102cc6102c7366004610b11565b6105f5565b005b3480156102da57600080fd5b506102cc6102c7366004610b4a565b3480156102f557600080fd5b50610309610304366004610b77565b610622565b604080519283526020830191909152015b60405180910390f35b34801561032f57600080fd5b506102cc61033e366004610c13565b610657565b34801561034f57600080fd5b506102cc61035e366004610ca8565b610689565b34801561036f57600080fd5b506103977f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161031a565b3480156103bb57600080fd5b506103cf6103ca366004610cf0565b6106b9565b60405190815260200161031a565b3480156103e957600080fd5b506103cf7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561041d57600080fd5b506103cf7f000000000000000000000000000000000000000000000000000000000000000081565b34801561045157600080fd5b506103cf610460366004610d4a565b6106ed565b34801561047157600080fd5b506102cc61035e366004610d87565b34801561048c57600080fd5b506102cc61049b366004610dd1565b61071e565b6103cf6104ae366004610b77565b61074c565b3480156104bf57600080fd5b506102cc6104ce366004610e06565b61077f565b6103cf6104e1366004610cf0565b6108c9565b3480156104f257600080fd5b506102cc610501366004610e84565b6108f4565b34801561051257600080fd5b506103977f000000000000000000000000000000000000000000000000000000000000000081565b610309610548366004610cf0565b610923565b34801561055957600080fd5b506103977f000000000000000000000000000000000000000000000000000000000000000081565b34801561058d57600080fd5b506102cc61059c366004610ebc565b610959565b3480156105ad57600080fd5b506103977f000000000000000000000000000000000000000000000000000000000000000081565b3480156105e157600080fd5b506102cc6105f0366004610f1b565b61098a565b61061e7f00000000000000000000000000000000000000000000000000000000000000006109af565b5050565b60008061064e7f00000000000000000000000000000000000000000000000000000000000000006109af565b50935093915050565b6106807f00000000000000000000000000000000000000000000000000000000000000006109af565b50505050505050565b6106b27f00000000000000000000000000000000000000000000000000000000000000006109af565b5050505050565b60006106e47f00000000000000000000000000000000000000000000000000000000000000006109af565b50949350505050565b60006107187f00000000000000000000000000000000000000000000000000000000000000006109af565b50919050565b6107477f00000000000000000000000000000000000000000000000000000000000000006109af565b505050565b60006107777f00000000000000000000000000000000000000000000000000000000000000006109af565b509392505050565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b1790525161086f9190610f34565b600060405180830381855af49150503d80600081146108aa576040519150601f19603f3d011682016040523d82523d6000602084013e6108af565b606091505b5091509150816108c157805160208201fd5b805160208201f35b60006106e47f00000000000000000000000000000000000000000000000000000000000000006109af565b61091d7f00000000000000000000000000000000000000000000000000000000000000006109af565b50505050565b60008061094f7f00000000000000000000000000000000000000000000000000000000000000006109af565b5094509492505050565b6109827f00000000000000000000000000000000000000000000000000000000000000006109af565b505050505050565b61061e7f00000000000000000000000000000000000000000000000000000000000000005b6060600080836001600160a01b031660003660405161086f9291905b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015610a0a5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610a43578181015183820152602001610a2b565b50506000910152565b600060208284031215610a5e57600080fd5b815167ffffffffffffffff80821115610a7657600080fd5b818401915084601f830112610a8a57600080fd5b815181811115610a9c57610a9c610a12565b604051601f8201601f19908116603f01168101908382118183101715610ac457610ac4610a12565b81604052828152876020848701011115610add57600080fd5b610aee836020830160208801610a28565b979650505050505050565b6001600160a01b0381168114610b0e57600080fd5b50565b600060208284031215610b2357600080fd5b8135610b2e81610af9565b9392505050565b80358015158114610b4557600080fd5b919050565b600060208284031215610b5c57600080fd5b610b2e82610b35565b60006060828403121561071857600080fd5b600080600060608486031215610b8c57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115610bb157600080fd5b610bbd86828701610b65565b9150509250925092565b60008083601f840112610bd957600080fd5b50813567ffffffffffffffff811115610bf157600080fd5b6020830191508360208260051b8501011115610c0c57600080fd5b9250929050565b60008060008060008060808789031215610c2c57600080fd5b8635610c3781610af9565b95506020870135610c4781610af9565b9450604087013567ffffffffffffffff80821115610c6457600080fd5b610c708a838b01610bc7565b90965094506060890135915080821115610c8957600080fd5b50610c9689828a01610bc7565b979a9699509497509295939492505050565b60008060008060808587031215610cbe57600080fd5b843593506020850135610cd081610af9565b92506040850135610ce081610af9565b9396929550929360600135925050565b60008060008060808587031215610d0657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115610d3257600080fd5b610d3e87828801610b65565b91505092959194509250565b600060208284031215610d5c57600080fd5b813567ffffffffffffffff811115610d7357600080fd5b610d7f84828501610b65565b949350505050565b60008060008060808587031215610d9d57600080fd5b843593506020850135610daf81610af9565b9250604085013591506060850135610dc681610af9565b939692955090935050565b60008060408385031215610de457600080fd5b8235610def81610af9565b9150610dfd60208401610b35565b90509250929050565b600080600080600080600060e0888a031215610e2157600080fd5b8735610e2c81610af9565b96506020880135610e3c81610af9565b9550610e4a60408901610b35565b945060608801359350608088013560ff81168114610e6757600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080600060608486031215610e9957600080fd5b833592506020840135610eab81610af9565b929592945050506040919091013590565b600080600080600060a08688031215610ed457600080fd5b853594506020860135610ee681610af9565b93506040860135610ef681610af9565b9250606086013591506080860135610f0d81610af9565b809150509295509295909350565b600060208284031215610f2d57600080fd5b5035919050565b60008251610f46818460208701610a28565b919091019291505056fea264697066735822122046c61e4046461a7f5189781b71277313710ed6d0a5810546a8d4f74c7ae1a1cb64736f6c63430008130033",
    "sourceMap": "949:3383:8:-:0;;;454:1:98;429:26;;1751:1795:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2068:6;1999:7;2008:8;2018;2028;2038;2831:7:0;5081::49;:17;;;-1:-1:-1;;;;;5068:30:49;;;-1:-1:-1;;;;;5068:30:49;;;;;5658:3;5627:7;:28;;;:34;5623:113;;;5684:41;;-1:-1:-1;;;5684:41:49;;;;;;;;;;;5623:113;5769:28;;;;5745:52;;6085:32;;;;6057:60;;6282:26;;;;6312:1;6282:31;6278:108;;6336:39;;-1:-1:-1;;;6336:39:49;;;;;;;;;;;6278:108;6417:26;;;;;6395:48;;6497:26;6470:24;;;;:53;;:127;;;6566:7;:26;;;6539:7;:24;;;:53;;;;:::i;:::-;:58;;6470:127;6453:224;;;6629:37;;-1:-1:-1;;;6629:37:49;;;;;;;;;;;6453:224;6706:24;;;;;6686:44;;6755:19;;;;6740:34;;6805:25;;;;6784:46;;6854:18;;;;6840:11;:32;;-1:-1:-1;;;;;;6840:32:49;-1:-1:-1;;;;;6840:32:49;;;;;;6898:20;;;;6882:36;;;6988:12;;;;:18;7009:4;-1:-1:-1;;6988:65:49;;;7049:4;7029:7;:12;;;:17;;;:24;6988:65;:113;;;;7097:4;7069:7;:12;;;:25;;;:32;6988:113;6971:204;;;7133:31;;-1:-1:-1;;;7133:31:49;;;;;;;;;;;6971:204;7196:12;;;;;;:18;7184:30;;7235:12;;:17;;;;;7224:28;;7281:12;;-1:-1:-1;7281:25:49;;;;7262:44;;7339:12;;-1:-1:-1;7339:29:49;;;;7316:52;;;-1:-1:-1;;;7445:21:49;-1:-1:-1;;;;;7428:38:49;;;;;-1:-1:-1;;;7494:22:49;7476:40;;2894:18:0;;::::1;;::::0;2922;;::::1;;::::0;2950;;::::1;;::::0;2978;;::::1;;::::0;3560:10;;;;::::1;::::0;;::::1;::::0;;-1:-1:-1;;;3560:10:0;;::::1;::::0;3383:264;;3411:121:::1;3383:264:::0;;::::1;4723:25:161::0;;;;3550:21:0;4764:18:161;;;4757:34;3589:13:0::1;4807:18:161::0;;;4800:34;3628:4:0::1;4850:18:161::0;;;4843:60;4695:19;;3383:264:0::1;::::0;;-1:-1:-1;;3383:264:0;;::::1;::::0;;;;;;3360:297;;3383:264:::1;3360:297:::0;;::::1;::::0;3341:316:::1;::::0;-1:-1:-1;;;;;;;;1489:14:7;;;;;-1:-1:-1;2594:16:8::2;::::0;-1:-1:-1;2594:14:8::2;:16::i;:::-;2565:7;:25;;;:45;2561:121;;2633:38;;-1:-1:-1::0;;;2633:38:8::2;;;;;;;;;;;2561:121;2734:5;;-1:-1:-1::0;;;;;2725:21:8::2;;:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;2695:53:8::2;2703:7;:17;;;-1:-1:-1::0;;;;;2695:53:8::2;;2691:121;;2771:30;;-1:-1:-1::0;;;2771:30:8::2;;;;;;;;;;;2691:121;3024:5;::::0;2984:17;;2970:64:::2;::::0;-1:-1:-1;;;;;2970:45:8;;::::2;::::0;3032:1:::2;2970:45;:64::i;:::-;3195:9;3190:350;3214:8;:15;3210:1;:19;3190:350;;;3250:14;3267:8;3276:1;3267:11;;;;;;;;:::i;:::-;;;;;;;3250:28;;3340:5;;-1:-1:-1::0;;;;;3313:33:8::2;3321:6;-1:-1:-1::0;;;;;3313:33:8::2;;:91;;;;3393:10;;-1:-1:-1::0;;;;;3366:38:8::2;3374:6;-1:-1:-1::0;;;;;3366:38:8::2;;3313:91;3292:197;;;3444:30;;-1:-1:-1::0;;;3444:30:8::2;;;;;;;;;;;3292:197;-1:-1:-1::0;;;;;3502:20:8::2;;::::0;;;:12:::2;:20;::::0;;;;:27;;-1:-1:-1;;3502:27:8::2;3525:4;3502:27;::::0;;3231:3;::::2;::::0;::::2;:::i;:::-;;;;3190:350;;;;1751:1795:::0;;;;;;;949:3383;;5108:117:7;5192:5;;:26;;-1:-1:-1;;;5192:26:7;;150:4:51;5192:26:7;;;5693:25:161;5166:7:7;;-1:-1:-1;;;;;5192:21:7;;;;5666:18:161;;5192:26:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5185:33;;5108:117;:::o;4455:1497:99:-;4566:12;4736:4;4730:11;-1:-1:-1;;;4859:17:99;4852:93;4992:2;4988:1;4969:17;4965:25;4958:37;5072:6;5067:2;5048:17;5044:26;5037:42;5874:2;5871:1;5867:2;5848:17;5845:1;5838:5;5831;5826:51;5395:16;5388:24;5382:2;5364:16;5361:24;5357:1;5353;5347:8;5344:15;5340:46;5337:76;5137:754;5126:765;;;5919:7;5911:34;;;;-1:-1:-1;;;5911:34:99;;6120:2:161;5911:34:99;;;6102:21:161;6159:2;6139:18;;;6132:30;-1:-1:-1;;;6178:18:161;;;6171:44;6232:18;;5911:34:99;;;;;;;;4556:1396;4455:1497;;;:::o;14:127:161:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:250;213:2;207:9;255:6;243:19;;-1:-1:-1;;;;;277:34:161;;313:22;;;274:62;271:88;;;339:18;;:::i;:::-;375:2;368:22;146:250;:::o;401:139::-;-1:-1:-1;;;;;484:31:161;;474:42;;464:70;;530:1;527;520:12;464:70;401:139;:::o;545:154::-;632:13;;654:39;632:13;654:39;:::i;:::-;545:154;;;:::o;704:584::-;766:5;814:4;802:9;797:3;793:19;789:30;786:50;;;832:1;829;822:12;786:50;865:2;859:9;907:4;895:17;;-1:-1:-1;;;;;927:34:161;;963:22;;;924:62;921:88;;;989:18;;:::i;:::-;1029:10;1025:2;1018:22;;1058:6;1049:15;;1094:9;1088:16;1080:6;1073:32;1159:2;1148:9;1144:18;1138:25;1133:2;1125:6;1121:15;1114:50;1218:2;1207:9;1203:18;1197:25;1192:2;1184:6;1180:15;1173:50;1277:2;1266:9;1262:18;1256:25;1251:2;1243:6;1239:15;1232:50;;704:584;;;;:::o;1293:982::-;1358:5;1411:3;1404:4;1396:6;1392:17;1388:27;1378:55;;1429:1;1426;1419:12;1378:55;1452:13;;1484:4;-1:-1:-1;;;;;1537:10:161;;;1534:36;;;1550:18;;:::i;:::-;1596:2;1593:1;1589:10;1628:2;1622:9;1691:2;1687:7;1682:2;1678;1674:11;1670:25;1662:6;1658:38;1746:6;1734:10;1731:22;1726:2;1714:10;1711:18;1708:46;1705:72;;;1757:18;;:::i;:::-;1793:2;1786:22;1843:18;;;1919:15;;;1915:24;;;1877:15;;;;-1:-1:-1;1951:15:161;;;1948:35;;;1979:1;1976;1969:12;1948:35;2015:2;2007:6;2003:15;1992:26;;2027:218;2043:6;2038:3;2035:15;2027:218;;;2116:3;2110:10;2133:39;2166:5;2133:39;:::i;:::-;2185:18;;2223:12;;;;2060;;;;2027:218;;;2263:6;1293:982;-1:-1:-1;;;;;;;1293:982:161:o;2280:1993::-;2474:6;2482;2490;2498;2506;2514;2522;2566:9;2557:7;2553:23;2596:3;2592:2;2588:12;2585:32;;;2613:1;2610;2603:12;2585:32;2636:6;2662:2;2658;2654:11;2651:31;;;2678:1;2675;2668:12;2651:31;2704:17;;:::i;:::-;2691:30;;2744:48;2782:9;2744:48;:::i;:::-;2737:5;2730:63;2825:57;2878:2;2867:9;2863:18;2825:57;:::i;:::-;2820:2;2813:5;2809:14;2802:81;2936:2;2925:9;2921:18;2915:25;2910:2;2903:5;2899:14;2892:49;2994:2;2983:9;2979:18;2973:25;2968:2;2961:5;2957:14;2950:49;3053:3;3042:9;3038:19;3032:26;3026:3;3019:5;3015:15;3008:51;3113:3;3102:9;3098:19;3092:26;3086:3;3079:5;3075:15;3068:51;3173:3;3162:9;3158:19;3152:26;3146:3;3139:5;3135:15;3128:51;3233:3;3222:9;3218:19;3212:26;3206:3;3199:5;3195:15;3188:51;3258:3;3314:2;3303:9;3299:18;3293:25;3288:2;3281:5;3277:14;3270:49;;3338:3;3373:57;3426:2;3415:9;3411:18;3373:57;:::i;:::-;3357:14;;;3350:81;3450:3;3485:57;3523:18;;;3485:57;:::i;:::-;3469:14;;;3462:81;3562:3;3597:62;3651:7;3631:18;;;3597:62;:::i;:::-;3592:2;3585:5;3581:14;3574:86;;3679:5;3669:15;;3703:57;3756:2;3745:9;3741:18;3703:57;:::i;:::-;3693:67;;;;3779:58;3832:3;3821:9;3817:19;3779:58;:::i;:::-;3769:68;;3856:58;3909:3;3898:9;3894:19;3856:58;:::i;:::-;3846:68;;3933:58;3986:3;3975:9;3971:19;3933:58;:::i;:::-;3923:68;;4010:58;4063:3;4052:9;4048:19;4010:58;:::i;:::-;4112:3;4097:19;;4091:26;4000:68;;-1:-1:-1;;;;;;4129:30:161;;4126:50;;;4172:1;4169;4162:12;4126:50;4195:72;4259:7;4250:6;4239:9;4235:22;4195:72;:::i;:::-;4185:82;;;2280:1993;;;;;;;;;;:::o;4278:209::-;4310:1;4336;4326:132;;4380:10;4375:3;4371:20;4368:1;4361:31;4415:4;4412:1;4405:15;4443:4;4440:1;4433:15;4326:132;-1:-1:-1;4472:9:161;;4278:209::o;4914:259::-;4984:6;5037:2;5025:9;5016:7;5012:23;5008:32;5005:52;;;5053:1;5050;5043:12;5005:52;5085:9;5079:16;5104:39;5137:5;5104:39;:::i;:::-;5162:5;4914:259;-1:-1:-1;;;4914:259:161:o;5178:127::-;5239:10;5234:3;5230:20;5227:1;5220:31;5270:4;5267:1;5260:15;5294:4;5291:1;5284:15;5310:232;5349:3;5370:17;;;5367:140;;5429:10;5424:3;5420:20;5417:1;5410:31;5464:4;5461:1;5454:15;5492:4;5489:1;5482:15;5367:140;-1:-1:-1;5534:1:161;5523:13;;5310:232::o;5729:184::-;5799:6;5852:2;5840:9;5831:7;5827:23;5823:32;5820:52;;;5868:1;5865;5858:12;5820:52;-1:-1:-1;5891:16:161;;5729:184;-1:-1:-1;5729:184:161:o;5918:338::-;949:3383:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x60806040526004361061019c5760003560e01c80639032c726116100ec578063cbc134341161008a578063ded0623111610064578063ded06231146103af578063e44808bc14610581578063eac3e799146105a1578063ed64bab2146105d55761019c565b8063cbc13434146102e9578063d899e1121461054d578063dbbe80701461053a5761019c565b8063a22cb465116100c6578063a22cb46514610480578063a6e8a85914610506578063ab033ea9146102ac578063cba2e58d1461053a5761019c565b80639032c726146104b35780639aa68462146104d35780639cd241af146104e65761019c565b806329b23fc1116101595780633e691db9116101335780633e691db9146104455780634ed2d6ac146104655780637180c8ca1461048057806377d05ff4146104a05761019c565b806329b23fc1146103af57806330adf81f146103dd5780633644e515146104115761019c565b806301681a62146102ac57806302329a29146102ce578063074a6de9146102e957806317fad7fc146103235780631c0f12b61461034357806321b57d5314610363575b3480156101a857600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516101eb9291906109cb565b600060405180830381855af49150503d8060008114610226576040519150601f19603f3d011682016040523d82523d6000602084013e61022b565b606091505b5091509150811561024f57604051638bb0a34b60e01b815260040160405180910390fd5b600061025a826109db565b90506001600160e01b03198116636e64089360e11b1461027c57815160208301fd5b81516003198101600484019081529261029d91810160200190602401610a4c565b80519650602001945050505050f35b3480156102b857600080fd5b506102cc6102c7366004610b11565b6105f5565b005b3480156102da57600080fd5b506102cc6102c7366004610b4a565b3480156102f557600080fd5b50610309610304366004610b77565b610622565b604080519283526020830191909152015b60405180910390f35b34801561032f57600080fd5b506102cc61033e366004610c13565b610657565b34801561034f57600080fd5b506102cc61035e366004610ca8565b610689565b34801561036f57600080fd5b506103977f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161031a565b3480156103bb57600080fd5b506103cf6103ca366004610cf0565b6106b9565b60405190815260200161031a565b3480156103e957600080fd5b506103cf7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561041d57600080fd5b506103cf7f000000000000000000000000000000000000000000000000000000000000000081565b34801561045157600080fd5b506103cf610460366004610d4a565b6106ed565b34801561047157600080fd5b506102cc61035e366004610d87565b34801561048c57600080fd5b506102cc61049b366004610dd1565b61071e565b6103cf6104ae366004610b77565b61074c565b3480156104bf57600080fd5b506102cc6104ce366004610e06565b61077f565b6103cf6104e1366004610cf0565b6108c9565b3480156104f257600080fd5b506102cc610501366004610e84565b6108f4565b34801561051257600080fd5b506103977f000000000000000000000000000000000000000000000000000000000000000081565b610309610548366004610cf0565b610923565b34801561055957600080fd5b506103977f000000000000000000000000000000000000000000000000000000000000000081565b34801561058d57600080fd5b506102cc61059c366004610ebc565b610959565b3480156105ad57600080fd5b506103977f000000000000000000000000000000000000000000000000000000000000000081565b3480156105e157600080fd5b506102cc6105f0366004610f1b565b61098a565b61061e7f00000000000000000000000000000000000000000000000000000000000000006109af565b5050565b60008061064e7f00000000000000000000000000000000000000000000000000000000000000006109af565b50935093915050565b6106807f00000000000000000000000000000000000000000000000000000000000000006109af565b50505050505050565b6106b27f00000000000000000000000000000000000000000000000000000000000000006109af565b5050505050565b60006106e47f00000000000000000000000000000000000000000000000000000000000000006109af565b50949350505050565b60006107187f00000000000000000000000000000000000000000000000000000000000000006109af565b50919050565b6107477f00000000000000000000000000000000000000000000000000000000000000006109af565b505050565b60006107777f00000000000000000000000000000000000000000000000000000000000000006109af565b509392505050565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b1790525161086f9190610f34565b600060405180830381855af49150503d80600081146108aa576040519150601f19603f3d011682016040523d82523d6000602084013e6108af565b606091505b5091509150816108c157805160208201fd5b805160208201f35b60006106e47f00000000000000000000000000000000000000000000000000000000000000006109af565b61091d7f00000000000000000000000000000000000000000000000000000000000000006109af565b50505050565b60008061094f7f00000000000000000000000000000000000000000000000000000000000000006109af565b5094509492505050565b6109827f00000000000000000000000000000000000000000000000000000000000000006109af565b505050505050565b61061e7f00000000000000000000000000000000000000000000000000000000000000005b6060600080836001600160a01b031660003660405161086f9291905b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015610a0a5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610a43578181015183820152602001610a2b565b50506000910152565b600060208284031215610a5e57600080fd5b815167ffffffffffffffff80821115610a7657600080fd5b818401915084601f830112610a8a57600080fd5b815181811115610a9c57610a9c610a12565b604051601f8201601f19908116603f01168101908382118183101715610ac457610ac4610a12565b81604052828152876020848701011115610add57600080fd5b610aee836020830160208801610a28565b979650505050505050565b6001600160a01b0381168114610b0e57600080fd5b50565b600060208284031215610b2357600080fd5b8135610b2e81610af9565b9392505050565b80358015158114610b4557600080fd5b919050565b600060208284031215610b5c57600080fd5b610b2e82610b35565b60006060828403121561071857600080fd5b600080600060608486031215610b8c57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115610bb157600080fd5b610bbd86828701610b65565b9150509250925092565b60008083601f840112610bd957600080fd5b50813567ffffffffffffffff811115610bf157600080fd5b6020830191508360208260051b8501011115610c0c57600080fd5b9250929050565b60008060008060008060808789031215610c2c57600080fd5b8635610c3781610af9565b95506020870135610c4781610af9565b9450604087013567ffffffffffffffff80821115610c6457600080fd5b610c708a838b01610bc7565b90965094506060890135915080821115610c8957600080fd5b50610c9689828a01610bc7565b979a9699509497509295939492505050565b60008060008060808587031215610cbe57600080fd5b843593506020850135610cd081610af9565b92506040850135610ce081610af9565b9396929550929360600135925050565b60008060008060808587031215610d0657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115610d3257600080fd5b610d3e87828801610b65565b91505092959194509250565b600060208284031215610d5c57600080fd5b813567ffffffffffffffff811115610d7357600080fd5b610d7f84828501610b65565b949350505050565b60008060008060808587031215610d9d57600080fd5b843593506020850135610daf81610af9565b9250604085013591506060850135610dc681610af9565b939692955090935050565b60008060408385031215610de457600080fd5b8235610def81610af9565b9150610dfd60208401610b35565b90509250929050565b600080600080600080600060e0888a031215610e2157600080fd5b8735610e2c81610af9565b96506020880135610e3c81610af9565b9550610e4a60408901610b35565b945060608801359350608088013560ff81168114610e6757600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080600060608486031215610e9957600080fd5b833592506020840135610eab81610af9565b929592945050506040919091013590565b600080600080600060a08688031215610ed457600080fd5b853594506020860135610ee681610af9565b93506040860135610ef681610af9565b9250606086013591506080860135610f0d81610af9565b809150509295509295909350565b600060208284031215610f2d57600080fd5b5035919050565b60008251610f46818460208701610a28565b919091019291505056fea264697066735822122046c61e4046461a7f5189781b71277313710ed6d0a5810546a8d4f74c7ae1a1cb64736f6c63430008130033",
    "sourceMap": "949:3383:8:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4047:12:0;4201;4215:23;4242:7;-1:-1:-1;;;;;4242:20:0;4263:5;;4242:27;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4200:69;;;;4283:7;4279:76;;;4313:31;;-1:-1:-1;;;4313:31:0;;;;;;;;;;;4279:76;4364:15;4382:18;4389:10;4382:18;:::i;:::-;4364:36;-1:-1:-1;;;;;;;4414:43:0;;-1:-1:-1;;;4414:43:0;4410:160;;4534:10;4528:17;4523:2;4511:10;4507:19;4500:46;4410:160;4771:17;;-1:-1:-1;;4767:25:0;;4790:1;4745:20;;4738:55;;;4745:20;4872:31;;;;;;;;;;:::i;:::-;949:3383:8;;;-1:-1:-1;949:3383:8;;;-1:-1:-1;;;;;949:3383:8;4263:67;;;;;;;;;;-1:-1:-1;4263:67:8;;;;;:::i;:::-;;:::i;:::-;;7750:65:0;;;;;;;;;;-1:-1:-1;7750:65:0;;;;;:::i;7038:181::-;;;;;;;;;;-1:-1:-1;7038:181:0;;;;;:::i;:::-;;:::i;:::-;;;;3544:25:161;;;3600:2;3585:18;;3578:34;;;;3517:18;7038:181:0;;;;;;;;9300:167;;;;;;;;;;-1:-1:-1;9300:167:0;;;;;:::i;:::-;;:::i;8221:102::-;;;;;;;;;;-1:-1:-1;8221:102:0;;;;;:::i;:::-;;:::i;1431:32::-;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5776:32:161;;;5758:51;;5746:2;5731:18;1431:32:0;5612:203:161;5784:177:0;;;;;;;;;;-1:-1:-1;5784:177:0;;;;;:::i;:::-;;:::i;:::-;;;6532:25:161;;;6520:2;6505:18;5784:177:0;6386::161;2033:174:0;;;;;;;;;;;;2083:124;2033:174;;2271:41;;;;;;;;;;;;;;;7539:136;;;;;;;;;;-1:-1:-1;7539:136:0;;;;;:::i;:::-;;:::i;8736:107::-;;;;;;;;;;-1:-1:-1;8736:107:0;;;;;:::i;8036:78::-;;;;;;;;;;-1:-1:-1;8036:78:0;;;;;:::i;:::-;;:::i;6064:168::-;;;;;;:::i;:::-;;:::i;10656:868::-;;;;;;;;;;-1:-1:-1;10656:868:0;;;;;:::i;:::-;;:::i;6300:187::-;;;;;;:::i;:::-;;:::i;9133:92::-;;;;;;;;;;-1:-1:-1;9133:92:0;;;;;:::i;:::-;;:::i;1751:32::-;;;;;;;;;;;;;;;5002:192;;;;;;:::i;:::-;;:::i;1911:32::-;;;;;;;;;;;;;;;8452:163;;;;;;;;;;-1:-1:-1;8452:163:0;;;;;:::i;:::-;;:::i;1591:32::-;;;;;;;;;;;;;;;7306:73;;;;;;;;;;-1:-1:-1;7306:73:0;;;;;:::i;:::-;;:::i;4263:67:8:-;4305:18;4315:7;4305:9;:18::i;:::-;;4263:67;:::o;7038:181:0:-;7166:7;7175;7194:18;7204:7;7194:9;:18::i;:::-;;7038:181;;;;;;:::o;9300:167::-;9442:18;9452:7;9442:9;:18::i;:::-;;9300:167;;;;;;:::o;8221:102::-;8298:18;8308:7;8298:9;:18::i;:::-;;8221:102;;;;:::o;5784:177::-;5917:7;5936:18;5946:7;5936:9;:18::i;:::-;;5784:177;;;;;;:::o;7539:136::-;7631:7;7650:18;7660:7;7650:9;:18::i;:::-;;7539:136;;;:::o;8036:78::-;8089:18;8099:7;8089:9;:18::i;:::-;;8036:78;;:::o;6064:168::-;6188:7;6207:18;6217:7;6207:9;:18::i;:::-;;6064:168;;;;;:::o;10656:868::-;10928:373;;11030:16;10928:373;;;10733:25:161;2083:124:0;10774:18:161;;;10767:34;-1:-1:-1;;;;;10875:15:161;;;10855:18;;;10848:43;10927:15;;;10907:18;;;10900:43;10987:14;;10980:22;10959:19;;;10952:51;11019:19;;;11012:35;;;11096:4;11084:17;;11063:19;;;11056:46;11118:19;;;11111:35;;;11162:19;;;11155:35;;;10857:12:0;;;;10894:7;:20;;10705:19:161;;10928:373:0;;;-1:-1:-1;;10928:373:0;;;;;;;;;;;;;;-1:-1:-1;;;;;10928:373:0;-1:-1:-1;;;10928:373:0;;;10894:417;;;10928:373;10894:417;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10856:455;;;;11326:7;11321:117;;11406:6;11400:13;11395:2;11387:6;11383:15;11376:38;11321:117;11500:6;11494:13;11489:2;11481:6;11477:15;11470:38;6300:187;6443:7;6462:18;6472:7;6462:9;:18::i;9133:92::-;9200:18;9210:7;9200:9;:18::i;:::-;;9133:92;;;:::o;5002:192::-;5141:7;5150;5169:18;5179:7;5169:9;:18::i;:::-;;5002:192;;;;;;;:::o;8452:163::-;8590:18;8600:7;8590:9;:18::i;:::-;;8452:163;;;;;:::o;7306:73::-;7354:18;7364:7;11802:359;11856:12;11881;11895:19;11918:7;-1:-1:-1;;;;;11918:20:0;11939:8;;11918:30;;;;;;14:271:161;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:161:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:161;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:250;873:1;883:113;897:6;894:1;891:13;883:113;;;973:11;;;967:18;954:11;;;947:39;919:2;912:10;883:113;;;-1:-1:-1;;1030:1:161;1012:16;;1005:27;788:250::o;1043:896::-;1122:6;1175:2;1163:9;1154:7;1150:23;1146:32;1143:52;;;1191:1;1188;1181:12;1143:52;1224:9;1218:16;1253:18;1294:2;1286:6;1283:14;1280:34;;;1310:1;1307;1300:12;1280:34;1348:6;1337:9;1333:22;1323:32;;1393:7;1386:4;1382:2;1378:13;1374:27;1364:55;;1415:1;1412;1405:12;1364:55;1444:2;1438:9;1466:2;1462;1459:10;1456:36;;;1472:18;;:::i;:::-;1547:2;1541:9;1515:2;1601:13;;-1:-1:-1;;1597:22:161;;;1621:2;1593:31;1589:40;1577:53;;;1645:18;;;1665:22;;;1642:46;1639:72;;;1691:18;;:::i;:::-;1731:10;1727:2;1720:22;1766:2;1758:6;1751:18;1806:7;1801:2;1796;1792;1788:11;1784:20;1781:33;1778:53;;;1827:1;1824;1817:12;1778:53;1840:68;1905:2;1900;1892:6;1888:15;1883:2;1879;1875:11;1840:68;:::i;:::-;1927:6;1043:896;-1:-1:-1;;;;;;;1043:896:161:o;1944:139::-;-1:-1:-1;;;;;2027:31:161;;2017:42;;2007:70;;2073:1;2070;2063:12;2007:70;1944:139;:::o;2088:270::-;2162:6;2215:2;2203:9;2194:7;2190:23;2186:32;2183:52;;;2231:1;2228;2221:12;2183:52;2270:9;2257:23;2289:39;2322:5;2289:39;:::i;:::-;2347:5;2088:270;-1:-1:-1;;;2088:270:161:o;2363:160::-;2428:20;;2484:13;;2477:21;2467:32;;2457:60;;2513:1;2510;2503:12;2457:60;2363:160;;;:::o;2528:180::-;2584:6;2637:2;2625:9;2616:7;2612:23;2608:32;2605:52;;;2653:1;2650;2643:12;2605:52;2676:26;2692:9;2676:26;:::i;2713:155::-;2773:5;2818:2;2809:6;2804:3;2800:16;2796:25;2793:45;;;2834:1;2831;2824:12;2873:492;2977:6;2985;2993;3046:2;3034:9;3025:7;3021:23;3017:32;3014:52;;;3062:1;3059;3052:12;3014:52;3098:9;3085:23;3075:33;;3155:2;3144:9;3140:18;3127:32;3117:42;;3210:2;3199:9;3195:18;3182:32;3237:18;3229:6;3226:30;3223:50;;;3269:1;3266;3259:12;3223:50;3292:67;3351:7;3342:6;3331:9;3327:22;3292:67;:::i;:::-;3282:77;;;2873:492;;;;;:::o;3623:367::-;3686:8;3696:6;3750:3;3743:4;3735:6;3731:17;3727:27;3717:55;;3768:1;3765;3758:12;3717:55;-1:-1:-1;3791:20:161;;3834:18;3823:30;;3820:50;;;3866:1;3863;3856:12;3820:50;3903:4;3895:6;3891:17;3879:29;;3963:3;3956:4;3946:6;3943:1;3939:14;3931:6;3927:27;3923:38;3920:47;3917:67;;;3980:1;3977;3970:12;3917:67;3623:367;;;;;:::o;3995:1066::-;4135:6;4143;4151;4159;4167;4175;4228:3;4216:9;4207:7;4203:23;4199:33;4196:53;;;4245:1;4242;4235:12;4196:53;4284:9;4271:23;4303:39;4336:5;4303:39;:::i;:::-;4361:5;-1:-1:-1;4418:2:161;4403:18;;4390:32;4431:41;4390:32;4431:41;:::i;:::-;4491:7;-1:-1:-1;4549:2:161;4534:18;;4521:32;4572:18;4602:14;;;4599:34;;;4629:1;4626;4619:12;4599:34;4668:70;4730:7;4721:6;4710:9;4706:22;4668:70;:::i;:::-;4757:8;;-1:-1:-1;4642:96:161;-1:-1:-1;4845:2:161;4830:18;;4817:32;;-1:-1:-1;4861:16:161;;;4858:36;;;4890:1;4887;4880:12;4858:36;;4929:72;4993:7;4982:8;4971:9;4967:24;4929:72;:::i;:::-;3995:1066;;;;-1:-1:-1;3995:1066:161;;-1:-1:-1;3995:1066:161;;5020:8;;3995:1066;-1:-1:-1;;;3995:1066:161:o;5066:541::-;5152:6;5160;5168;5176;5229:3;5217:9;5208:7;5204:23;5200:33;5197:53;;;5246:1;5243;5236:12;5197:53;5282:9;5269:23;5259:33;;5342:2;5331:9;5327:18;5314:32;5355:39;5388:5;5355:39;:::i;:::-;5413:5;-1:-1:-1;5470:2:161;5455:18;;5442:32;5483:41;5442:32;5483:41;:::i;:::-;5066:541;;;;-1:-1:-1;5543:7:161;;5597:2;5582:18;5569:32;;-1:-1:-1;;5066:541:161:o;5820:561::-;5933:6;5941;5949;5957;6010:3;5998:9;5989:7;5985:23;5981:33;5978:53;;;6027:1;6024;6017:12;5978:53;6063:9;6050:23;6040:33;;6120:2;6109:9;6105:18;6092:32;6082:42;;6171:2;6160:9;6156:18;6143:32;6133:42;;6226:2;6215:9;6211:18;6198:32;6253:18;6245:6;6242:30;6239:50;;;6285:1;6282;6275:12;6239:50;6308:67;6367:7;6358:6;6347:9;6343:22;6308:67;:::i;:::-;6298:77;;;5820:561;;;;;;;:::o;6750:356::-;6836:6;6889:2;6877:9;6868:7;6864:23;6860:32;6857:52;;;6905:1;6902;6895:12;6857:52;6945:9;6932:23;6978:18;6970:6;6967:30;6964:50;;;7010:1;7007;7000:12;6964:50;7033:67;7092:7;7083:6;7072:9;7068:22;7033:67;:::i;:::-;7023:77;6750:356;-1:-1:-1;;;;6750:356:161:o;7111:541::-;7197:6;7205;7213;7221;7274:3;7262:9;7253:7;7249:23;7245:33;7242:53;;;7291:1;7288;7281:12;7242:53;7327:9;7314:23;7304:33;;7387:2;7376:9;7372:18;7359:32;7400:39;7433:5;7400:39;:::i;:::-;7458:5;-1:-1:-1;7510:2:161;7495:18;;7482:32;;-1:-1:-1;7566:2:161;7551:18;;7538:32;7579:41;7538:32;7579:41;:::i;:::-;7111:541;;;;-1:-1:-1;7111:541:161;;-1:-1:-1;;7111:541:161:o;7657:323::-;7722:6;7730;7783:2;7771:9;7762:7;7758:23;7754:32;7751:52;;;7799:1;7796;7789:12;7751:52;7838:9;7825:23;7857:39;7890:5;7857:39;:::i;:::-;7915:5;-1:-1:-1;7939:35:161;7970:2;7955:18;;7939:35;:::i;:::-;7929:45;;7657:323;;;;;:::o;7985:845::-;8093:6;8101;8109;8117;8125;8133;8141;8194:3;8182:9;8173:7;8169:23;8165:33;8162:53;;;8211:1;8208;8201:12;8162:53;8250:9;8237:23;8269:39;8302:5;8269:39;:::i;:::-;8327:5;-1:-1:-1;8384:2:161;8369:18;;8356:32;8397:41;8356:32;8397:41;:::i;:::-;8457:7;-1:-1:-1;8483:35:161;8514:2;8499:18;;8483:35;:::i;:::-;8473:45;;8565:2;8554:9;8550:18;8537:32;8527:42;;8621:3;8610:9;8606:19;8593:33;8670:4;8661:7;8657:18;8648:7;8645:31;8635:59;;8690:1;8687;8680:12;8635:59;7985:845;;;;-1:-1:-1;7985:845:161;;;;8713:7;8767:3;8752:19;;8739:33;;-1:-1:-1;8819:3:161;8804:19;;;8791:33;;7985:845;-1:-1:-1;;7985:845:161:o;8835:391::-;8912:6;8920;8928;8981:2;8969:9;8960:7;8956:23;8952:32;8949:52;;;8997:1;8994;8987:12;8949:52;9033:9;9020:23;9010:33;;9093:2;9082:9;9078:18;9065:32;9106:39;9139:5;9106:39;:::i;:::-;8835:391;;9164:5;;-1:-1:-1;;;9216:2:161;9201:18;;;;9188:32;;8835:391::o;9491:691::-;9586:6;9594;9602;9610;9618;9671:3;9659:9;9650:7;9646:23;9642:33;9639:53;;;9688:1;9685;9678:12;9639:53;9724:9;9711:23;9701:33;;9784:2;9773:9;9769:18;9756:32;9797:39;9830:5;9797:39;:::i;:::-;9855:5;-1:-1:-1;9912:2:161;9897:18;;9884:32;9925:41;9884:32;9925:41;:::i;:::-;9985:7;-1:-1:-1;10039:2:161;10024:18;;10011:32;;-1:-1:-1;10095:3:161;10080:19;;10067:33;10109:41;10067:33;10109:41;:::i;:::-;10169:7;10159:17;;;9491:691;;;;;;;;:::o;10187:180::-;10246:6;10299:2;10287:9;10278:7;10274:23;10270:32;10267:52;;;10315:1;10312;10305:12;10267:52;-1:-1:-1;10338:23:161;;10187:180;-1:-1:-1;10187:180:161:o;11201:287::-;11330:3;11368:6;11362:13;11384:66;11443:6;11438:3;11431:4;11423:6;11419:17;11384:66;:::i;:::-;11466:16;;;;;11201:287;-1:-1:-1;;11201:287:161:o",
    "linkReferences": {},
    "immutableReferences": {
      "37": [
        {
          "start": 435,
          "length": 32
        },
        {
          "start": 885,
          "length": 32
        },
        {
          "start": 1530,
          "length": 32
        },
        {
          "start": 1628,
          "length": 32
        },
        {
          "start": 1678,
          "length": 32
        },
        {
          "start": 1780,
          "length": 32
        },
        {
          "start": 1827,
          "length": 32
        },
        {
          "start": 2069,
          "length": 32
        },
        {
          "start": 2297,
          "length": 32
        },
        {
          "start": 2398,
          "length": 32
        }
      ],
      "40": [
        {
          "start": 1459,
          "length": 32
        },
        {
          "start": 1578,
          "length": 32
        },
        {
          "start": 1875,
          "length": 32
        },
        {
          "start": 2256,
          "length": 32
        }
      ],
      "43": [
        {
          "start": 1304,
          "length": 32
        },
        {
          "start": 2347,
          "length": 32
        },
        {
          "start": 2447,
          "length": 32
        }
      ],
      "46": [
        {
          "start": 1375,
          "length": 32
        },
        {
          "start": 1728,
          "length": 32
        }
      ],
      "55": [
        {
          "start": 1059,
          "length": 32
        },
        {
          "start": 1924,
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
    "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
    "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
    "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070",
    "pause(bool)": "02329a29",
    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
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
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"_target0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target2\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target3\",\"type\":\"address\"},{\"internalType\":\"contract IERC4626\",\"name\":\"__pool\",\"type\":\"address\"},{\"internalType\":\"address[]\",\"name\":\"_targets\",\"type\":\"address[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"InvalidBaseToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsupportedToken\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"collectGovernanceFee((address,bool,bytes))\":{\"returns\":{\"_0\":\"proceeds The amount of base collected.\"}},\"constructor\":{\"params\":{\"__pool\":\"The ERC4626 compatible yield source.\",\"_config\":\"The configuration of the Hyperdrive pool.\",\"_target0\":\"The target0 address.\",\"_target1\":\"The target1 address.\",\"_target2\":\"The target2 address.\",\"_target3\":\"The target3 address.\",\"_targets\":\"The addresses that can be swept by governance. This        allows governance to collect rewards derived from incentive        programs while also preventing edge cases where `sweep` is used        to access the pool or base tokens.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"sweep(address)\":{\"details\":\"WARN: The entire balance of any of the sweep targets can be swept      by governance. If these sweep targets provide access to the base or      pool token, then governance has the ability to rug the pool.WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\"}},\"title\":\"ERC4626Hyperdrive\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"notice\":\"This contract's EIP712 domain separator.\"},\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"addLiquidity(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another\"},\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Instantiates Hyperdrive with a ERC4626 vault as the yield source.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"sweep(address)\":{\"notice\":\"Some yield sources [eg Morpho] pay rewards directly to this         contract but we can't handle distributing them internally so we         sweep to the fee collector address to then redistribute to users.\"},\"target0()\":{\"notice\":\"The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions.\"},\"target1()\":{\"notice\":\"The target1 address. This is a logic contract that contains all         some stateful functions.\"},\"target2()\":{\"notice\":\"The target2 address. This is a logic contract that contains all         some stateful functions.\"},\"target3()\":{\"notice\":\"The target3 address. This is a logic contract that contains all         some stateful functions.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"notice\":\"A Hyperdrive instance that uses a ERC4626 vault as the yield source.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/ERC4626Hyperdrive.sol\":\"ERC4626Hyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x6179a7a5d516ba70894c081b0d3001f5eb95bd98ba693c6626d7d44743812056\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://35f3a3e7cff3b8fd657b5aa4bebeb5c6df3b9d6a83b58a3d86887339ceed1843\",\"dweb:/ipfs/QmdC36TA11uyQ5S2ZMsRrcv81RPuHs8tZCzNwWgwkvzPoY\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0xe5889a0b6c43131543029af4368ee0ac4631b8281425766e07a38b590eecb8db\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://80497d157827cab2d7cefb429e9d1e2ac977ed8d1435a03c1b5d0f4d0d1861ba\",\"dweb:/ipfs/QmcW4fVGHaaRa5MYDaajynxj1uU3mcAauBVXfmJCi3FbMq\"]},\"contracts/src/instances/ERC4626Base.sol\":{\"keccak256\":\"0xc5e11f70a3e769fd322e4f02858a46f92c8434623a9af5c2454e0efba7fd9e7f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://658dd5495159b0e0c00d5d9b6ac8bd7b699cfbf0f429b3c6fdd6b8505010ce37\",\"dweb:/ipfs/QmSVi7t74sawCx4AqA1Mr9zLLps8R8vGbqfkTs4V9jVjgx\"]},\"contracts/src/instances/ERC4626Hyperdrive.sol\":{\"keccak256\":\"0x01bf1f36abeb7698f16e327d37fef0f295f5b234d85b51b9c1fbc361bd240c92\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8c2018afc98ccee8f4ba7f4d1ebd725720c523eed82782d50df472ea3f94d662\",\"dweb:/ipfs/QmZEs8vXxqBHJCWmb17xWVHrih9W6hcSMxhfT3bkvKT12P\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc\",\"dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0xe7076ded0fe36ac72c946258bc3183bebb6f1567cd0ce5d55720de84988f5312\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b84d02ec55ccbee1491ce25a2b890e7c371dd251cb69c2cc818179e49ddef780\",\"dweb:/ipfs/QmcXWYPF2Hy6w3TLqmegYiUj5pL9i9PqH44USV4Px9sk2k\"]},\"contracts/src/interfaces/IERC4626HyperdriveCore.sol\":{\"keccak256\":\"0xcea74eaf829d241754f74a8c2223fef0ec83459252d2aaedcd860bae538620c9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://464f58076e112b73957147b2abb52c85b1b806b306fa2d490d0e74f993ffe5a8\",\"dweb:/ipfs/QmNf3EACwEDsB7X1G1geLeqenR1xJHd9zGvSeZJ9f2nSmp\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0xa63f6d3d8b87fcf27202f4ea8609762ef695b9919e4907522930738eb2dcde7e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db88312fa9fed33207e1974d91f714ed8cbbe4a4a1d0e54a6ee5c15a8949f4fb\",\"dweb:/ipfs/QmSYCCuc6Xkh6oibhW5ovdQRhvT5nV4Hxj3Q2xEhjzYyWE\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8\",\"dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17\",\"dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x21d3173693bcb6ba589a0cda73f57c3c06af39af22308e3b3142f9e639f526e4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://54aacd825c1fbc109428040e43dd45f531a769c016e8362311bf18e209a34a0e\",\"dweb:/ipfs/QmV1CwV1MUREgLn83CEykLybihbM1f1ogh8p2Y6owZv91e\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0xb9ab7ab09e4e95f5e187418921f41f3b6d652c5a0889624b660495491ffc4148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7a05317c1fd4996fece6de20a672006163f31f9ae32fa23a855bbe8e89f573f2\",\"dweb:/ipfs/Qmf5kG78Za6KjSyRXeE8dFqdAE4T3BxhRQUXFKUkuuGGqK\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0xbdd9d63dcc57a2f23d2fd66a3f0440a220fb31664a1d99443a9e80b053393261\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6a16611ca56bf2c2360d39bfc9611d547b9ac76c80c9560e0a33a89958ee6eca\",\"dweb:/ipfs/QmQJUCU7HgydjvdKtJVte3wHitgwaK3BG6cN3FBm9FM5sy\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x863819651e0c159fc8aa27a357458c9ef3cd641287ff80382f566b6f839f795d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5b4675409abd6f0361b568e0912a8c430e601dbbae68961ca5d5ac5d5dcc3b8a\",\"dweb:/ipfs/QmRgL5Nvsb425tUxqMkC8tqHwyDzW5qmkf7UB2pkwf87uU\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xbcf204d47761b8da37b0dd1ac6a7a3226d98ad95972acdf9300476a3010b95e2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://756faa29691a56068a330d2de06febe4b7c286ee8ddaee40b1670e723350fbb0\",\"dweb:/ipfs/QmTixXWCvS5uLH6dd3U2PWKya9YZuEm5duNRGdQBDzwo6V\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x61b9f8eb5795fda17a5c35264f53879a7ef022e02b865b015bdb9f5811db6ba5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9498f4bfd969d78634da2b0a89b10f88ac467f52d565d9b62561dcc569ad00cd\",\"dweb:/ipfs/QmZdGwc5ezJf2qv8yheoTVF3UTfWJnh6FtAAq7wufhPZ5R\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xd4ea004cc74fba458e72066541257426e95f1b00ba0b25d53c7c0fce1726d991\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://35c8c8b5bfe4f71c1a5175c1d6549aff9352feec558f3816c9e02d1cab1e1a88\",\"dweb:/ipfs/QmY7qydf5ofXdVJWPeb4bUTtHCn7oWymcTY2RCpZSuSWKM\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xe150223822098026c7ce734cd68848e45b47b92b024d34bc25886e9c6af6ec67\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6590e590f4af53d55e81e06ba8d53346cfce71ce1fa8d1833141f273d74c8a8f\",\"dweb:/ipfs/QmTM582joUpK7KBDWvwWEBi4XT3Qt9x8VLkhwPYj8Qu93o\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xd87293bc10dfe09707a042bf05091baf40ba344bdca141bd99b62256a7611817\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f6eadd454c6671c26bd22095c31a3bbaea7083df9aa6548dbaba32a4907e336\",\"dweb:/ipfs/QmY1jMW9DuAk9CSfVS6MsG5onqjZHKzdBrv2TcHvj9yKj4\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x077931150bcba5b99dedcd9038f3fbeef9c9230046dc4649c457d75d4be32a5c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2a48e4046f7ae8acb965d0f8d79767f4f4c70c1a6a8d3cf635482587412d33fd\",\"dweb:/ipfs/QmcY8FbffppqTMBiMwniXG9R8i8eQoVJuLqqTXgpuiXyUr\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x2f9511684820be7510155adfe3c2c2ef7e2583472946bae37f379bac801fc263\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7e9a84e4168448e3320a6682c8ba248c8b51757df173b86507e9aba4b6167247\",\"dweb:/ipfs/QmSonetYBP22Fnc8HrcaTxAA1Zg2PCR5ptPiEp22sA77Ka\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4\",\"dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU\"]}},\"version\":1}",
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
              "name": "__pool",
              "type": "address"
            },
            {
              "internalType": "address[]",
              "name": "_targets",
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
          "constructor": {
            "params": {
              "__pool": "The ERC4626 compatible yield source.",
              "_config": "The configuration of the Hyperdrive pool.",
              "_target0": "The target0 address.",
              "_target1": "The target1 address.",
              "_target2": "The target2 address.",
              "_target3": "The target3 address.",
              "_targets": "The addresses that can be swept by governance. This        allows governance to collect rewards derived from incentive        programs while also preventing edge cases where `sweep` is used        to access the pool or base tokens."
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
          "constructor": {
            "notice": "Instantiates Hyperdrive with a ERC4626 vault as the yield source."
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
        "contracts/src/instances/ERC4626Hyperdrive.sol": "ERC4626Hyperdrive"
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
    "absolutePath": "contracts/src/instances/ERC4626Hyperdrive.sol",
    "id": 3020,
    "exportedSymbols": {
      "ERC20": [
        63690
      ],
      "ERC4626Base": [
        2846
      ],
      "ERC4626Hyperdrive": [
        3019
      ],
      "FixedPointMath": [
        11134
      ],
      "Hyperdrive": [
        563
      ],
      "IERC20": [
        3872
      ],
      "IERC4626": [
        4097
      ],
      "IERC4626Hyperdrive": [
        4112
      ],
      "IHyperdrive": [
        4675
      ],
      "SafeTransferLib": [
        63999
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:4294:8",
    "nodes": [
      {
        "id": 2848,
        "nodeType": "PragmaDirective",
        "src": "39:23:8",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 2850,
        "nodeType": "ImportDirective",
        "src": "64:49:8",
        "nodes": [],
        "absolutePath": "lib/solmate/src/tokens/ERC20.sol",
        "file": "solmate/tokens/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3020,
        "sourceUnit": 63691,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2849,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63690,
              "src": "73:5:8",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2852,
        "nodeType": "ImportDirective",
        "src": "114:68:8",
        "nodes": [],
        "absolutePath": "lib/solmate/src/utils/SafeTransferLib.sol",
        "file": "solmate/utils/SafeTransferLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3020,
        "sourceUnit": 64000,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2851,
              "name": "SafeTransferLib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63999,
              "src": "123:15:8",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2854,
        "nodeType": "ImportDirective",
        "src": "183:56:8",
        "nodes": [],
        "absolutePath": "contracts/src/external/Hyperdrive.sol",
        "file": "../external/Hyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3020,
        "sourceUnit": 564,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2853,
              "name": "Hyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 563,
              "src": "192:10:8",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2856,
        "nodeType": "ImportDirective",
        "src": "240:50:8",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "../interfaces/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3020,
        "sourceUnit": 3873,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2855,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3872,
              "src": "249:6:8",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2858,
        "nodeType": "ImportDirective",
        "src": "291:54:8",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC4626.sol",
        "file": "../interfaces/IERC4626.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3020,
        "sourceUnit": 4098,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2857,
              "name": "IERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4097,
              "src": "300:8:8",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2860,
        "nodeType": "ImportDirective",
        "src": "346:60:8",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3020,
        "sourceUnit": 4676,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2859,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4675,
              "src": "355:11:8",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2862,
        "nodeType": "ImportDirective",
        "src": "407:74:8",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC4626Hyperdrive.sol",
        "file": "../interfaces/IERC4626Hyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3020,
        "sourceUnit": 4113,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2861,
              "name": "IERC4626Hyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4112,
              "src": "416:18:8",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2864,
        "nodeType": "ImportDirective",
        "src": "482:65:8",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3020,
        "sourceUnit": 11135,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2863,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 11134,
              "src": "491:14:8",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2866,
        "nodeType": "ImportDirective",
        "src": "548:48:8",
        "nodes": [],
        "absolutePath": "contracts/src/instances/ERC4626Base.sol",
        "file": "./ERC4626Base.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3020,
        "sourceUnit": 2847,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2865,
              "name": "ERC4626Base",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 2846,
              "src": "557:11:8",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3019,
        "nodeType": "ContractDefinition",
        "src": "949:3383:8",
        "nodes": [
          {
            "id": 2874,
            "nodeType": "UsingForDirective",
            "src": "1009:33:8",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 2872,
              "name": "FixedPointMath",
              "nameLocations": [
                "1015:14:8"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 11134,
              "src": "1015:14:8"
            },
            "typeName": {
              "id": 2873,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1034:7:8",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 2878,
            "nodeType": "UsingForDirective",
            "src": "1047:32:8",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 2875,
              "name": "SafeTransferLib",
              "nameLocations": [
                "1053:15:8"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 63999,
              "src": "1053:15:8"
            },
            "typeName": {
              "id": 2877,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 2876,
                "name": "ERC20",
                "nameLocations": [
                  "1073:5:8"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 63690,
                "src": "1073:5:8"
              },
              "referencedDeclaration": 63690,
              "src": "1073:5:8",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$63690",
                "typeString": "contract ERC20"
              }
            }
          },
          {
            "id": 3006,
            "nodeType": "FunctionDefinition",
            "src": "1751:1795:8",
            "nodes": [],
            "body": {
              "id": 3005,
              "nodeType": "Block",
              "src": "2080:1466:8",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2913,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 2909,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2882,
                        "src": "2565:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 2910,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2573:17:8",
                      "memberName": "initialSharePrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4433,
                      "src": "2565:25:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 2911,
                        "name": "_pricePerShare",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          2828
                        ],
                        "referencedDeclaration": 2828,
                        "src": "2594:14:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 2912,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2594:16:8",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2565:45:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2920,
                  "nodeType": "IfStatement",
                  "src": "2561:121:8",
                  "trueBody": {
                    "id": 2919,
                    "nodeType": "Block",
                    "src": "2612:70:8",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2914,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "2633:11:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2916,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2645:24:8",
                            "memberName": "InvalidInitialSharePrice",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4529,
                            "src": "2633:36:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2917,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2633:38:8",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2918,
                        "nodeType": "RevertStatement",
                        "src": "2626:45:8"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 2931,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 2923,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2882,
                            "src": "2703:7:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 2924,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2711:9:8",
                          "memberName": "baseToken",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4424,
                          "src": "2703:17:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$3872",
                            "typeString": "contract IERC20"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IERC20_$3872",
                            "typeString": "contract IERC20"
                          }
                        ],
                        "id": 2922,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2695:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 2921,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2695:7:8",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 2925,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2695:26:8",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "arguments": [
                            {
                              "id": 2927,
                              "name": "_pool",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2658,
                              "src": "2734:5:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC4626_$4097",
                                "typeString": "contract IERC4626"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IERC4626_$4097",
                                "typeString": "contract IERC4626"
                              }
                            ],
                            "id": 2926,
                            "name": "IERC4626",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4097,
                            "src": "2725:8:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC4626_$4097_$",
                              "typeString": "type(contract IERC4626)"
                            }
                          },
                          "id": 2928,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2725:15:8",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC4626_$4097",
                            "typeString": "contract IERC4626"
                          }
                        },
                        "id": 2929,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2741:5:8",
                        "memberName": "asset",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3966,
                        "src": "2725:21:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_address_$",
                          "typeString": "function () view external returns (address)"
                        }
                      },
                      "id": 2930,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2725:23:8",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2695:53:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2938,
                  "nodeType": "IfStatement",
                  "src": "2691:121:8",
                  "trueBody": {
                    "id": 2937,
                    "nodeType": "Block",
                    "src": "2750:62:8",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2932,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "2771:11:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2934,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2783:16:8",
                            "memberName": "InvalidBaseToken",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4523,
                            "src": "2771:28:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2935,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2771:30:8",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2936,
                        "nodeType": "RevertStatement",
                        "src": "2764:37:8"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 2949,
                            "name": "_pool",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2658,
                            "src": "3024:5:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC4626_$4097",
                              "typeString": "contract IERC4626"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC4626_$4097",
                              "typeString": "contract IERC4626"
                            }
                          ],
                          "id": 2948,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3016:7:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 2947,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3016:7:8",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 2950,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3016:14:8",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "31",
                        "id": 2951,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3032:1:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 2942,
                                  "name": "_config",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2882,
                                  "src": "2984:7:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                                    "typeString": "struct IHyperdrive.PoolConfig memory"
                                  }
                                },
                                "id": 2943,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "2992:9:8",
                                "memberName": "baseToken",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 4424,
                                "src": "2984:17:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$3872",
                                  "typeString": "contract IERC20"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_IERC20_$3872",
                                  "typeString": "contract IERC20"
                                }
                              ],
                              "id": 2941,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2976:7:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 2940,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "2976:7:8",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 2944,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2976:26:8",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 2939,
                          "name": "ERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63690,
                          "src": "2970:5:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20_$63690_$",
                            "typeString": "type(contract ERC20)"
                          }
                        },
                        "id": 2945,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2970:33:8",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$63690",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 2946,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3004:11:8",
                      "memberName": "safeApprove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 63998,
                      "src": "2970:45:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$63690_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$63690_$",
                        "typeString": "function (contract ERC20,address,uint256)"
                      }
                    },
                    "id": 2952,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2970:64:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2953,
                  "nodeType": "ExpressionStatement",
                  "src": "2970:64:8"
                },
                {
                  "body": {
                    "id": 3003,
                    "nodeType": "Block",
                    "src": "3236:304:8",
                    "statements": [
                      {
                        "assignments": [
                          2966
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 2966,
                            "mutability": "mutable",
                            "name": "target",
                            "nameLocation": "3258:6:8",
                            "nodeType": "VariableDeclaration",
                            "scope": 3003,
                            "src": "3250:14:8",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "typeName": {
                              "id": 2965,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "3250:7:8",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 2970,
                        "initialValue": {
                          "baseExpression": {
                            "id": 2967,
                            "name": "_targets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2896,
                            "src": "3267:8:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 2969,
                          "indexExpression": {
                            "id": 2968,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2955,
                            "src": "3276:1:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3267:11:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3250:28:8"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 2989,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 2979,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 2973,
                                  "name": "target",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2966,
                                  "src": "3321:6:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 2972,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3313:7:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 2971,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3313:7:8",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 2974,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3313:15:8",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "arguments": [
                                {
                                  "id": 2977,
                                  "name": "_pool",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2658,
                                  "src": "3340:5:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IERC4626_$4097",
                                    "typeString": "contract IERC4626"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IERC4626_$4097",
                                    "typeString": "contract IERC4626"
                                  }
                                ],
                                "id": 2976,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3332:7:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 2975,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3332:7:8",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 2978,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3332:14:8",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "3313:33:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "||",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 2988,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 2982,
                                  "name": "target",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2966,
                                  "src": "3374:6:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 2981,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3366:7:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 2980,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3366:7:8",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 2983,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3366:15:8",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "arguments": [
                                {
                                  "id": 2986,
                                  "name": "_baseToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9815,
                                  "src": "3393:10:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IERC20_$3872",
                                    "typeString": "contract IERC20"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IERC20_$3872",
                                    "typeString": "contract IERC20"
                                  }
                                ],
                                "id": 2985,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3385:7:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 2984,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3385:7:8",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 2987,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3385:19:8",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "3366:38:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "3313:91:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 2996,
                        "nodeType": "IfStatement",
                        "src": "3292:197:8",
                        "trueBody": {
                          "id": 2995,
                          "nodeType": "Block",
                          "src": "3419:70:8",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "id": 2990,
                                    "name": "IHyperdrive",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4675,
                                    "src": "3444:11:8",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                      "typeString": "type(contract IHyperdrive)"
                                    }
                                  },
                                  "id": 2992,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "3456:16:8",
                                  "memberName": "UnsupportedToken",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 4567,
                                  "src": "3444:28:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 2993,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3444:30:8",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 2994,
                              "nodeType": "RevertStatement",
                              "src": "3437:37:8"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 3001,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 2997,
                              "name": "_isSweepable",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2663,
                              "src": "3502:12:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 2999,
                            "indexExpression": {
                              "id": 2998,
                              "name": "target",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2966,
                              "src": "3515:6:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3502:20:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 3000,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3525:4:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "3502:27:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 3002,
                        "nodeType": "ExpressionStatement",
                        "src": "3502:27:8"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2961,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2958,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2955,
                      "src": "3210:1:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 2959,
                        "name": "_targets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2896,
                        "src": "3214:8:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 2960,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3223:6:8",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "3214:15:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3210:19:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 3004,
                  "initializationExpression": {
                    "assignments": [
                      2955
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 2955,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "3203:1:8",
                        "nodeType": "VariableDeclaration",
                        "scope": 3004,
                        "src": "3195:9:8",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2954,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3195:7:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 2957,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 2956,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3207:1:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3195:13:8"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 2963,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3231:3:8",
                      "subExpression": {
                        "id": 2962,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2955,
                        "src": "3231:1:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 2964,
                    "nodeType": "ExpressionStatement",
                    "src": "3231:3:8"
                  },
                  "nodeType": "ForStatement",
                  "src": "3190:350:8"
                }
              ]
            },
            "documentation": {
              "id": 2879,
              "nodeType": "StructuredDocumentation",
              "src": "1085:661:8",
              "text": "@notice Instantiates Hyperdrive with a ERC4626 vault as the yield source.\n @param _config The configuration of the Hyperdrive pool.\n @param _target0 The target0 address.\n @param _target1 The target1 address.\n @param _target2 The target2 address.\n @param _target3 The target3 address.\n @param __pool The ERC4626 compatible yield source.\n @param _targets The addresses that can be swept by governance. This\n        allows governance to collect rewards derived from incentive\n        programs while also preventing edge cases where `sweep` is used\n        to access the pool or base tokens."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 2899,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2882,
                    "src": "1999:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  {
                    "id": 2900,
                    "name": "_target0",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2884,
                    "src": "2008:8:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 2901,
                    "name": "_target1",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2886,
                    "src": "2018:8:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 2902,
                    "name": "_target2",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2888,
                    "src": "2028:8:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 2903,
                    "name": "_target3",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2890,
                    "src": "2038:8:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 2904,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 2898,
                  "name": "Hyperdrive",
                  "nameLocations": [
                    "1988:10:8"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 563,
                  "src": "1988:10:8"
                },
                "nodeType": "ModifierInvocation",
                "src": "1988:59:8"
              },
              {
                "arguments": [
                  {
                    "id": 2906,
                    "name": "__pool",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2893,
                    "src": "2068:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$4097",
                      "typeString": "contract IERC4626"
                    }
                  }
                ],
                "id": 2907,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 2905,
                  "name": "ERC4626Base",
                  "nameLocations": [
                    "2056:11:8"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 2846,
                  "src": "2056:11:8"
                },
                "nodeType": "ModifierInvocation",
                "src": "2056:19:8"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 2897,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2882,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "1802:7:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 3006,
                  "src": "1772:37:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 2881,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2880,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "1772:11:8",
                        "1784:10:8"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4459,
                      "src": "1772:22:8"
                    },
                    "referencedDeclaration": 4459,
                    "src": "1772:22:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2884,
                  "mutability": "mutable",
                  "name": "_target0",
                  "nameLocation": "1827:8:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 3006,
                  "src": "1819:16:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2883,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1819:7:8",
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
                  "id": 2886,
                  "mutability": "mutable",
                  "name": "_target1",
                  "nameLocation": "1853:8:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 3006,
                  "src": "1845:16:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2885,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1845:7:8",
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
                  "id": 2888,
                  "mutability": "mutable",
                  "name": "_target2",
                  "nameLocation": "1879:8:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 3006,
                  "src": "1871:16:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2887,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1871:7:8",
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
                  "id": 2890,
                  "mutability": "mutable",
                  "name": "_target3",
                  "nameLocation": "1905:8:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 3006,
                  "src": "1897:16:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2889,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1897:7:8",
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
                  "id": 2893,
                  "mutability": "mutable",
                  "name": "__pool",
                  "nameLocation": "1932:6:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 3006,
                  "src": "1923:15:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC4626_$4097",
                    "typeString": "contract IERC4626"
                  },
                  "typeName": {
                    "id": 2892,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2891,
                      "name": "IERC4626",
                      "nameLocations": [
                        "1923:8:8"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4097,
                      "src": "1923:8:8"
                    },
                    "referencedDeclaration": 4097,
                    "src": "1923:8:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$4097",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2896,
                  "mutability": "mutable",
                  "name": "_targets",
                  "nameLocation": "1965:8:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 3006,
                  "src": "1948:25:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 2894,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1948:7:8",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 2895,
                    "nodeType": "ArrayTypeName",
                    "src": "1948:9:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1762:217:8"
            },
            "returnParameters": {
              "id": 2908,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2080:0:8"
            },
            "scope": 3019,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 3018,
            "nodeType": "FunctionDefinition",
            "src": "4263:67:8",
            "nodes": [],
            "body": {
              "id": 3017,
              "nodeType": "Block",
              "src": "4295:35:8",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 3014,
                        "name": "target0",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37,
                        "src": "4315:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 3013,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 562,
                      "src": "4305:9:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 3015,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4305:18:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 3016,
                  "nodeType": "ExpressionStatement",
                  "src": "4305:18:8"
                }
              ]
            },
            "documentation": {
              "id": 3007,
              "nodeType": "StructuredDocumentation",
              "src": "3552:706:8",
              "text": "@notice Some yield sources [eg Morpho] pay rewards directly to this\n         contract but we can't handle distributing them internally so we\n         sweep to the fee collector address to then redistribute to users.\n @dev WARN: The entire balance of any of the sweep targets can be swept\n      by governance. If these sweep targets provide access to the base or\n      pool token, then governance has the ability to rug the pool.\n @dev WARN: It is unlikely but possible that there is a selector overlap\n      with 'transferFrom'. Any integrating contracts should be checked\n      for that, as it may result in an unexpected call from this address."
            },
            "functionSelector": "01681a62",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sweep",
            "nameLocation": "4272:5:8",
            "parameters": {
              "id": 3011,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3010,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 3018,
                  "src": "4278:6:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$3872",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 3009,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 3008,
                      "name": "IERC20",
                      "nameLocations": [
                        "4278:6:8"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3872,
                      "src": "4278:6:8"
                    },
                    "referencedDeclaration": 3872,
                    "src": "4278:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$3872",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4277:8:8"
            },
            "returnParameters": {
              "id": 3012,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4295:0:8"
            },
            "scope": 3019,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 2868,
              "name": "Hyperdrive",
              "nameLocations": [
                "979:10:8"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 563,
              "src": "979:10:8"
            },
            "id": 2869,
            "nodeType": "InheritanceSpecifier",
            "src": "979:10:8"
          },
          {
            "baseName": {
              "id": 2870,
              "name": "ERC4626Base",
              "nameLocations": [
                "991:11:8"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2846,
              "src": "991:11:8"
            },
            "id": 2871,
            "nodeType": "InheritanceSpecifier",
            "src": "991:11:8"
          }
        ],
        "canonicalName": "ERC4626Hyperdrive",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 2867,
          "nodeType": "StructuredDocumentation",
          "src": "598:351:8",
          "text": "@author DELV\n @title ERC4626Hyperdrive\n @notice A Hyperdrive instance that uses a ERC4626 vault as the yield source.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
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
        "name": "ERC4626Hyperdrive",
        "nameLocation": "958:17:8",
        "scope": 3020,
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
  "id": 8
} as const;
