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
                  "name": "governance",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IHyperdrive.Fees",
              "name": "fees",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "oracleSize",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "updateGap",
              "type": "uint256"
            }
          ],
          "internalType": "struct IHyperdrive.PoolConfig",
          "name": "_config",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "_dataProvider",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_linkerCodeHash",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_linkerFactory",
          "type": "address"
        },
        {
          "internalType": "contract IERC4626",
          "name": "_pool",
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
      "name": "ApprovalFailed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BaseBufferExceedsShareReserves",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BatchInputLengthMismatch",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BelowMinimumContribution",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExpiredDeadline",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FixedPointMath_InvalidExponent",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FixedPointMath_InvalidInput",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidApr",
      "type": "error"
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
      "name": "InvalidCheckpointTime",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidERC20Bridge",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidFeeAmounts",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidFeeDestination",
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
      "name": "InvalidShareReserves",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidSignature",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidTimestamp",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidTradeSize",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MinimumSharePrice",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MinimumTransactionAmount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NegativeInterest",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NegativePresentValue",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotPayable",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OutputLimit",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Paused",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PoolAlreadyInitialized",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RestrictedZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Unauthorized",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnexpectedSuccess",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsafeCastToInt128",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsafeCastToUint128",
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
          "name": "baseFees",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
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
          "name": "_contribution",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minApr",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxApr",
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
      "name": "addLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "lpShares",
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
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
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
          "name": "_checkpointTime",
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
          "name": "_maturityTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bondAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
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
          "name": "_maturityTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bondAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
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
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "collectGovernanceFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "proceeds",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "dataProvider",
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
          "name": "_contribution",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_apr",
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
      "name": "initialize",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "lpShares",
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
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minSharePrice",
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
      "name": "openLong",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bondProceeds",
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
          "name": "_bondAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxDeposit",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minSharePrice",
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
          "name": "_status",
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
          "name": "_withdrawalShares",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutputPerShare",
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
      "name": "redeemWithdrawalShares",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "proceeds",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "withdrawalSharesRedeemed",
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
          "name": "_lpShares",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
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
      "name": "removeLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "proceeds",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "withdrawalShares",
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
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
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
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "caller",
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
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
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
          "name": "_who",
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
          "name": "who",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "status",
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
          "name": "_target",
          "type": "address"
        }
      ],
      "name": "sweep",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
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
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "caller",
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
    "object": "0x6102a060405260016000553480156200001757600080fd5b5060405162006ed038038062006ed08339810160408190526200003a916200076f565b6001600160a01b03808616608052831660a05260c084905260408051808201825260018152603160f81b6020918201529051879187918791879185918591859185918591859185918591620000f6917f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd917fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6914691309101938452602084019290925260408301526001600160a01b0316606082015260800190565b60408051601f19818403018152918152815160209092019190912060e05284516001600160a01b0316610100528401516103e8111592506200014e915050576040516349db44f560e01b815260040160405180910390fd5b60408101516101a05260608101516101c05260a08101516000036200018657604051635428734d60e01b815260040160405180910390fd5b60a081018051610120525160808201511080620001b757508060a001518160800151620001b49190620008bb565b15155b15620001d65760405163253fffcf60e11b815260040160405180910390fd5b60808101516101405260c08101516101605260208101516101805260e0810151601180546001600160a01b0319166001600160a01b03928316179055610100820151166102405261012081015151670de0b6b3a764000010806200024a5750670de0b6b3a764000081610120015160200151115b80620002665750670de0b6b3a764000081610120015160400151115b1562000285576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101e0528051602001516102005251604001516102205261016001516102605260005b84610140015181101562000330576040805180820190915263ffffffff4281168252600060208301818152601280546001818101835591909352935190516001600160e01b0316640100000000029216919091177fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec34449091015501620002b0565b5050506001600160a01b0388166102805250620003539450506200057692505050565b86602001511462000377576040516355f2a42f60e01b815260040160405180910390fd5b816001600160a01b03166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015620003b6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003dc9190620008de565b6001600160a01b031686600001516001600160a01b0316146200041257604051630722152560e11b815260040160405180910390fd5b85516102805160405163095ea7b360e01b81526001600160a01b039182166004820152600019602482015291169063095ea7b3906044016020604051808303816000875af115801562000469573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200048f919062000905565b620004ad576040516340b27c2160e11b815260040160405180910390fd5b60005b815181101562000569576000828281518110620004d157620004d162000929565b60200260200101519050610280516001600160a01b0316816001600160a01b03161480620005135750610100516001600160a01b0316816001600160a01b0316145b15620005325760405163350b944160e11b815260040160405180910390fd5b6001600160a01b03166000908152601460205260409020805460ff191660011790558062000560816200093f565b915050620004b0565b5050505050505062000981565b610280516040516303d1689d60e11b8152670de0b6b3a764000060048201526000916001600160a01b0316906307a2d13a90602401602060405180830381865afa158015620005c9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005ef919062000967565b905090565b634e487b7160e01b600052604160045260246000fd5b60405161018081016001600160401b0381118282101715620006305762000630620005f4565b60405290565b6001600160a01b03811681146200064c57600080fd5b50565b80516200065c8162000636565b919050565b6000606082840312156200067457600080fd5b604051606081016001600160401b0381118282101715620006995762000699620005f4565b80604052508091508251815260208301516020820152604083015160408201525092915050565b600082601f830112620006d257600080fd5b815160206001600160401b0380831115620006f157620006f1620005f4565b8260051b604051601f19603f83011681018181108482111715620007195762000719620005f4565b6040529384528581018301938381019250878511156200073857600080fd5b83870191505b8482101562000764578151620007548162000636565b835291830191908301906200073e565b979650505050505050565b6000806000806000808688036102608112156200078b57600080fd5b6101c0808212156200079c57600080fd5b620007a66200060a565b9150620007b3896200064f565b82526020890151602083015260408901516040830152606089015160608301526080890151608083015260a089015160a083015260c089015160c0830152620007ff60e08a016200064f565b60e083015261010062000814818b016200064f565b90830152610120620008298b8b830162000661565b81840152506101808901516101408301526101a089015161016083015281975062000856818a016200064f565b965050506101e087015193506200087161020088016200064f565b92506200088261022088016200064f565b6102408801519092506001600160401b03811115620008a057600080fd5b620008ae89828a01620006c0565b9150509295509295509295565b600082620008d957634e487b7160e01b600052601260045260246000fd5b500690565b600060208284031215620008f157600080fd5b8151620008fe8162000636565b9392505050565b6000602082840312156200091857600080fd5b81518015158114620008fe57600080fd5b634e487b7160e01b600052603260045260246000fd5b6000600182016200096057634e487b7160e01b600052601160045260246000fd5b5060010190565b6000602082840312156200097a57600080fd5b5051919050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516162cd62000c03600039600081816121a401528181612716015281816127e0015281816132c2015261335801526000614a350152600081816105b0015281816106c001528181610c6b01528181610ce50152610d5301526000818161466e01528181614bc601528181614c3f0152615250015260008181612c3c01528181613f74015281816146420152614c13015260008181612b1901528181613ae601528181614b99015261520c015260008181610a1d015281816113b8015281816117c80152818161199801528181611bc50152611dc6015260008181610ef901528181610f4401528181611046015281816135b5015281816138df0152818161392e015281816144f5015281816147220152818161475e0152615285015260008181610fb50152818161141901528181612a7a01528181612ac70152818161358f01528181613aa601528181613eb90152818161426701526149c9015260008181610ff80152818161145b01528181612a5801528181612ae8015281816135db01528181613a8401528181613e970152818161424501526149ea015260008181610ae201528181610fd70152818161143a0152818161189601528181611c5201528181611e83015281816122bb015281816123d701528181612bc201528181612e1501528181614304015281816148bb0152614f5201526000818161204c015281816120f501526122230152600061327e01526000818161038b01526111e8015260006131890152600061314c01526000818161016201526104c501526162cd6000f3fe60806040526004361061014b5760003560e01c80639032c726116100b6578063cba2e58d1161006f578063cba2e58d146104ff578063cbc1343414610512578063dbbe807014610532578063ded0623114610545578063e44808bc14610565578063ed64bab2146105855761014b565b80639032c726146104205780639aa68462146104405780639cd241af14610453578063a22cb46514610473578063ab033ea914610493578063b334ed86146104b35761014b565b806330adf81f1161010857806330adf81f146103455780633644e515146103795780633e691db9146103ad5780634ed2d6ac146103cd5780637180c8ca146103ed57806377d05ff41461040d5761014b565b806301681a621461025b57806302329a291461027d578063074a6de91461029d57806317fad7fc146102d75780631c0f12b6146102f757806329b23fc114610317575b34801561015757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161019a929190615a86565b600060405180830381855af49150503d80600081146101d5576040519150601f19603f3d011682016040523d82523d6000602084013e6101da565b606091505b509150915081156101fe57604051638bb0a34b60e01b815260040160405180910390fd5b600061020982615a96565b90506001600160e01b03198116636e64089360e11b1461022b57815160208301fd5b81516003198101600484019081529261024c91810160200190602401615b07565b80519650602001945050505050f35b34801561026757600080fd5b5061027b610276366004615bc1565b6105a5565b005b34801561028957600080fd5b5061027b610298366004615bec565b6106e9565b3480156102a957600080fd5b506102bd6102b8366004615c1b565b610732565b604080519283526020830191909152015b60405180910390f35b3480156102e357600080fd5b5061027b6102f2366004615cb0565b61092c565b34801561030357600080fd5b5061027b610312366004615d45565b6109e0565b34801561032357600080fd5b50610337610332366004615d8d565b6109f3565b6040519081526020016102ce565b34801561035157600080fd5b506103377f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561038557600080fd5b506103377f000000000000000000000000000000000000000000000000000000000000000081565b3480156103b957600080fd5b506103376103c8366004615de7565b610c39565b3480156103d957600080fd5b5061027b6103e8366004615e1c565b610dc8565b3480156103f957600080fd5b5061027b610408366004615e66565b610e16565b61033761041b366004615c1b565b610e8e565b34801561042c57600080fd5b5061027b61043b366004615e9f565b61110e565b61033761044e366004615d8d565b61135d565b34801561045f57600080fd5b5061027b61046e366004615f1f565b61165a565b34801561047f57600080fd5b5061027b61048e366004615e66565b61166b565b34801561049f57600080fd5b5061027b6104ae366004615bc1565b6116d7565b3480156104bf57600080fd5b506104e77f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016102ce565b6102bd61050d366004615d8d565b61174b565b34801561051e57600080fd5b506102bd61052d366004615c1b565b61196c565b6102bd610540366004615d8d565b611b68565b34801561055157600080fd5b50610337610560366004615d8d565b611d9c565b34801561057157600080fd5b5061027b610580366004615f57565b611fcb565b34801561059157600080fd5b5061027b6105a0366004615fb6565b61201b565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015906105ee5750336000908152600f602052604090205460ff16155b1561060b576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03811660009081526014602052604090205460ff166106445760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa15801561068b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106af9190615fcf565b90506106e56001600160a01b0383167f000000000000000000000000000000000000000000000000000000000000000083612121565b5050565b336000908152600f602052604090205460ff16610718576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b6000806000546001146107605760405162461bcd60e51b815260040161075790615fe8565b60405180910390fd5b6002600090815561076f612184565b905061078261077c61221c565b82612252565b5061078c81612541565b600d548692506001600160801b0316808311156107b057806001600160801b031692505b826000036107c65760008093509350505061091d565b6107d5600360f81b3385612604565b600d546001600160801b03600160801b9091048116906000906107fd908690849086166126ad565b9050610808856126cb565b6108129084616022565b600d80546001600160801b0319166001600160801b039290921691909117905561083b816126cb565b600d805460109061085d908490600160801b90046001600160801b0316616022565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061088b81886126f5565b955085610898898761280e565b11156108b75760405163c972651760e01b815260040160405180910390fd5b6108c46020880188615bc1565b6001600160a01b03167f7986a4c20efd1390450c45fb0b11e794754bdce25f47ab5488efc8104169f754866108f9848861280e565b604080519283526020830191909152810187905260600160405180910390a2505050505b60016000559094909350915050565b6001600160a01b038616158061094957506001600160a01b038516155b156109675760405163f0dd15fd60e01b815260040160405180910390fd5b8281146109875760405163174861a760e31b815260040160405180910390fd5b60005b838110156109d7576109cf8585838181106109a7576109a7616049565b9050602002013588888686868181106109c2576109c2616049565b905060200201353361282a565b60010161098a565b50505050505050565b6109ed848484843361282a565b50505050565b60008054600114610a165760405162461bcd60e51b815260040161075790615fe8565b60026000557f0000000000000000000000000000000000000000000000000000000000000000841015610a5c5760405163211ddda360e11b815260040160405180910390fd5b6000610a66612184565b9050610a728682612252565b50610a88610a816002886129eb565b3387612604565b600080600080600080610a9c8b888e612a20565b949a509298509096509450925090508a8c8842821115610b6d578360106000828254610ac8919061605f565b90915550610adb9050838a898886612c94565b6000610b077f000000000000000000000000000000000000000000000000000000000000000084616072565b6000818152600e6020526040812054919250600160801b909104600f0b90610b3a9086908a908e908d9089908990612e0e565b6000828152600e6020526040902054610b6190600f83810b91600160801b9004900b612fb7565b610b6a83612541565b50505b6000610b79898e6126f5565b90508c6000610b89838e846130de565b90508f811015610bac5760405163c972651760e01b815260040160405180910390fd5b610bb76002866129eb565b8f6000016020810190610bca9190615bc1565b6040805188815260208101859052908101879052606081018990526001600160a01b0391909116907f32f37298489a8da0fde394937191ad6035015dd8a04bc97c304d59858e3bfd679060800160405180910390a3505060016000559f9e505050505050505050505050505050565b60008054600114610c5c5760405162461bcd60e51b815260040161075790615fe8565b60026000556001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016610c986020840184615bc1565b6001600160a01b031614610cbf57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600f602052604090205460ff16158015610d085750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610d1f57506011546001600160a01b03163314155b15610d3c576040516282b42960e81b815260040160405180910390fd5b601080546000909155610d4f81846126f5565b91507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa766eca44ec2dc18727bd04ada80599917cad7a27cf6a765026b2f1d0ce5c4ee83610da5612184565b6040805192835260208301919091520160405180910390a2506001600055919050565b83610dd28161310e565b6001600160a01b0316336001600160a01b031614610e0357604051632aab8bd360e01b815260040160405180910390fd5b610e0f858585856131cb565b5050505050565b6011546001600160a01b03163314610e40576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b60008054600114610eb15760405162461bcd60e51b815260040161075790615fe8565b6002600055610ebe613238565b600c5460ff1615610ee257604051637983c05160e01b815260040160405180910390fd5b600080610eef8685613259565b9092509050610f1f7f00000000000000000000000000000000000000000000000000000000000000006002616085565b821015610f3f57604051632afb507160e21b815260040160405180910390fd5b610f6a7f00000000000000000000000000000000000000000000000000000000000000006002616085565b610f749083616072565b600c805460ff191660011790559250610f8c826126cb565b600880546001600160801b0319166001600160801b039290921691909117905561102161101c837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000613392565b6126cb565b600880546001600160801b03928316600160801b02921691909117905561106a6000807f00000000000000000000000000000000000000000000000000000000000000006133f6565b611082600061107c6020870187615bc1565b856133f6565b61108d61077c61221c565b50600061109b8783876130de565b90506110aa6020860186615bc1565b6040805186815260208101849052908101849052606081018890526001600160a01b0391909116907fd93ddcd36a9d44373680f40bd3bcafe3c7e738748e10c90213e70453cff442319060800160405180910390a250505060016000559392505050565b8342111561112f5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166111565760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611282573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146112c057604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038916600090815260076020526040812080549091906112e69061609c565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b600080546001146113805760405162461bcd60e51b815260040161075790615fe8565b6002600055600c54610100900460ff16156113ae576040516313d0ff5960e31b815260040160405180910390fd5b6113b6613238565b7f00000000000000000000000000000000000000000000000000000000000000008510156113f75760405163211ddda360e11b815260040160405180910390fd5b600061147f611404613496565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006134b7565b90508481108061148e57508381115b156114ac57604051633b61151160e11b815260040160405180910390fd5b6000806114b98886613259565b915091506114c861077c61221c565b50600d54600360f81b60009081526002602052600080516020616258833981519152549091611502916001600160801b0390911690616072565b60008080526002602052600080516020616278833981519152549192509061152b90839061605f565b9050600080600061153b866134f2565b905061154681613658565b9150611551876138c6565b6008546001600160801b038082168352600954600f0b6020840152600160801b90910416604082015261158381613658565b925061159b84836115948187616072565b91906126ad565b98506115b7905060006115b160208c018c615bc1565b8a6133f6565b6115c085612541565b600083156115d7576115d28285613a48565b6115da565b60005b90506115e960208b018b615bc1565b6001600160a01b03167fd92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e502396098a61161e8a8a61280e565b60408051928352602083019190915281018990526060810184905260800160405180910390a25050600160005550949998505050505050505050565b611666838383336131cb565b505050565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6011546001600160a01b03163314611701576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000806000546001146117705760405162461bcd60e51b815260040161075790615fe8565b6002600055600c54610100900460ff161561179e576040516313d0ff5960e31b815260040160405180910390fd5b6117a6613238565b6000806117b38886613259565b9150915060006117c48983886130de565b90507f00000000000000000000000000000000000000000000000000000000000000008110156118075760405163211ddda360e11b815260040160405180910390fd5b86821015611828576040516342af972b60e01b815260040160405180910390fd5b600061183261221c565b905061183e8184612252565b50600080600061184e8787613a5d565b909a5091945092509050878c11156118795760405163c972651760e01b815260040160405180910390fd5b806010600082825461188b919061605f565b909155506118bb90507f00000000000000000000000000000000000000000000000000000000000000008561605f565b98506118cb83898489888e613b81565b60006118d860018b6129eb565b90506118f1816118eb60208e018e615bc1565b8b6133f6565b806118ff60208d018d615bc1565b604080518d8152602081018a90529081018a9052606081018c90526001600160a01b0391909116907f8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda6869060800160405180910390a350505050505050506001600055909590945092505050565b6000806000546001146119915760405162461bcd60e51b815260040161075790615fe8565b60026000557f00000000000000000000000000000000000000000000000000000000000000008510156119d75760405163211ddda360e11b815260040160405180910390fd5b60006119e1612184565b90506119ee61077c61221c565b506119f881612541565b600260205260008051602061627883398151915254600d54600360f81b6000908152600080516020616258833981519152549091611a41916001600160801b0390911690616072565b90506000611a4f828461605f565b9050611a5d6000338b612604565b600080611a6d8b87858888613d6f565b9098509092509050611a90600360f81b611a8a60208c018c615bc1565b896133f6565b611a9a828a6126f5565b97506000611aa989888c6130de565b9050888b1115611acc5760405163c972651760e01b815260040160405180910390fd5b60008415611ae357611ade8386613a48565b611ae6565b60005b9050611af560208c018c615bc1565b604080518f8152602081018590529081018a9052606081018b9052608081018390526001600160a01b0391909116907fae97bda5fb1ee457c0490e5804bc10c54ab31a1fd9b01e2f85a1855072150be89060a00160405180910390a2505050505050505060016000559094909350915050565b600080600054600114611b8d5760405162461bcd60e51b815260040161075790615fe8565b6002600055600c54610100900460ff1615611bbb576040516313d0ff5960e31b815260040160405180910390fd5b611bc3613238565b7f0000000000000000000000000000000000000000000000000000000000000000861015611c045760405163211ddda360e11b815260040160405180910390fd5b6000611c0e612184565b905084811015611c31576040516342af972b60e01b815260040160405180910390fd5b6000611c3b61221c565b90506000611c498284612252565b90506000611c777f00000000000000000000000000000000000000000000000000000000000000008461605f565b90506000806000611c898d8887613e71565b9094509092509050611c9c82888c613fa7565b91508060106000828254611cb0919061605f565b909155505050808b1015611cd75760405163c972651760e01b815260040160405180910390fd5b6000611ce3828b613259565b509050611cf28d848987613fcf565b6000611cff6002866129eb565b90508d611d1982611d1360208f018f615bc1565b836133f6565b81611d2760208e018e615bc1565b6001600160a01b03167f80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef9588611d5c878e61280e565b60408051928352602083019190915281018d90526060810185905260800160405180910390a35050600160005550919b919a509098505050505050505050565b60008054600114611dbf5760405162461bcd60e51b815260040161075790615fe8565b60026000557f0000000000000000000000000000000000000000000000000000000000000000841015611e055760405163211ddda360e11b815260040160405180910390fd5b6000611e0f612184565b9050611e1b8682612252565b50611e2a610a816001886129eb565b600080600080600080611e3e8b888e61420d565b95509550955095509550955060008c90508c421015611f07578160106000828254611e69919061605f565b90915550611e7c90508c88878685614389565b6000611ea87f000000000000000000000000000000000000000000000000000000000000000083616072565b6000818152600e6020526040902054909150600160801b9004600f0b611ed48e878b8a878f6001612e0e565b6000828152600e6020526040902054611efb90600f83810b91600160801b9004900b612fb7565b611f048a612541565b50505b6000611f13878c6126f5565b90506000611f22828b8e6130de565b9050808d1115611f455760405163c972651760e01b815260040160405180910390fd5b8d611f516001856129eb565b611f5e60208f018f615bc1565b60408051878152602081018690529081018e9052606081018490526001600160a01b0391909116907f4c68e40241b8ae371bc7dae7035400158b60d0b7d69b35477b693759bb2c0ca09060800160405180910390a3505060016000559d9c50505050505050505050505050565b84611fd58161310e565b6001600160a01b0316336001600160a01b03161461200657604051632aab8bd360e01b815260040160405180910390fd5b612013868686868661282a565b505050505050565b6000818152600e60205260409020546001600160801b03161561203b5750565b600061204561221c565b90506120717f0000000000000000000000000000000000000000000000000000000000000000836160cb565b15158061207d57508181105b1561209b5760405163ecd29e8160e01b815260040160405180910390fd5b8082036120b357611666816120ae612184565b612252565b815b6000818152600e60205260409020546001600160801b03168282036120df576120dc612184565b90505b80156120ef57610e0f8482612252565b5061211a7f00000000000000000000000000000000000000000000000000000000000000008261605f565b90506120b5565b6040516001600160a01b03831660248201526044810182905261166690849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152614556565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa1580156121f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122179190615fcf565b905090565b60006122487f0000000000000000000000000000000000000000000000000000000000000000426160cb565b6122179042616072565b6000828152600e6020526040812080546001600160801b031615158061227757504284115b1561228d57546001600160801b0316905061253b565b612296836126cb565b81546001600160801b0319166001600160801b03919091161781556000600e816122e07f000000000000000000000000000000000000000000000000000000000000000088616072565b815260208101919091526040016000908120546001600160801b031691506123096002876129eb565b600081815260026020526040812054919250811561236257600080612331848a88600061462b565b915091508060106000828254612347919061605f565b9091555061235b905084600084808e612c94565b6001925050505b600061236f60018a6129eb565b60008181526002602052604090205490915080156123ca57600080612397838c8a600161462b565b9150915080601060008282546123ad919061605f565b909155508c90506123c2846000858085614389565b600195505050505b82156124485760006123fc7f00000000000000000000000000000000000000000000000000000000000000008c616072565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b9261243c928492919004900b612fb7565b6124458b612541565b50505b6000808a11612458576000612473565b6124738a61246d6124688d6134f2565b613658565b9061280e565b600d54600260205260008051602061625883398151915254600080805260008051602061627883398151915254939450926001600160801b03909216916124ba919061605f565b6124c49190616072565b9050600081156124dd576124d88383613a48565b6124e0565b60005b604080518e8152602081018a9052908101869052606081018290529091508d907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a28b9a50505050505050505050505b92915050565b600260205260008051602061627883398151915254600d54600360f81b600090815260008051602061625883398151915254909161258a916001600160801b0390911690616072565b90506000612598828461605f565b905060006125a8612468866134f2565b905060006125b78583856126ad565b90506000806125c5886146f9565b9050828111156125dc576125d98382616072565b91505b60008211806125e9575083155b156125fa576125fa828587896147a5565b5050505050505050565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612636908490616072565b909155505060008381526002602052604081208054839290612659908490616072565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b60008260001904841183021582026126c457600080fd5b5091020490565b6000600160801b82106126f157604051630f0af95160e11b815260040160405180910390fd5b5090565b60006127076040830160208401615bec565b156127c6576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba087652846127496020860186615bc1565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af115801561279b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127bf9190615fcf565b905061253b565b6128076127d66020840184615bc1565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169085612121565b5090919050565b60006128238383670de0b6b3a76400006126ad565b9392505050565b6001600160a01b038416158061284757506001600160a01b038316155b156128655760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614612929576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff166129295760008581526004602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146129275760008681526004602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290612921908490616072565b90915550505b505b60008581526001602090815260408083206001600160a01b03881684529091528120805484929061295b908490616072565b909155505060008581526001602090815260408083206001600160a01b03871684529091528120805484929061299290849061605f565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b60006001600160f81b03821115612a155760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806000806000806000612a348861488e565b9050612a9e612a41613496565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006148df565b909850955093506000612b0c612ab2613496565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061494f565b9050612b428589612b3d847f0000000000000000000000000000000000000000000000000000000000000000614960565b614990565b15612b605760405163512095c760e01b815260040160405180910390fd5b612b6981614a19565b8a8a60008080612b7b85888887614b73565b9b509295509093509150612b9190508184616072565b612b9b908b61605f565b9950612ba7828461605f565b612bb1908c61605f565b9a50505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a612bec9190616072565b815260208101919091526040016000908120546001600160801b03169150428911612c2e576000898152600e60205260409020546001600160801b0316612c30565b895b9050612c608b8784848e7f0000000000000000000000000000000000000000000000000000000000000000614c7d565b9650612c6c8387616072565b9550612c7e8787878686866000614ccf565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b0316612cdd61101c82612cc085670de0b6b3a7640000616085565b600b54600160801b90046001600160801b031691908a6000614d4a565b600b80546001600160801b03928316600160801b029216919091179055612d03866126cb565b612d0d9082616022565b600a80546001600160801b03928316600160801b02921691909117905550612d34836126cb565b60088054600090612d4f9084906001600160801b03166160df565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612d7c82614dc4565b60098054600090612d91908490600f0b6160ff565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550612dc1846126cb565b60088054601090612de3908490600160801b90046001600160801b0316616022565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b6000612e3a7f000000000000000000000000000000000000000000000000000000000000000085616072565b9050600060026000612e4d6001886129eb565b8152602001908152602001600020549050600060026000612e6f6002896129eb565b8152602001908152602001600020549050816000148015612e8e575080155b15612eb3576000838152600e6020526040902080546001600160801b03169055612fab565b6000612ef78b612ec38c8961280e565b612ece906002616085565b8b612ed98c8b61280e565b612ee3919061605f565b612eed9190616072565b61101c919061605f565b90508415612f56576000848152600e602052604090208054829190601090612f2a908490600160801b9004600f0b61612c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550612fa9565b6000848152600e602052604090208054829190601090612f81908490600160801b9004600f0b6160ff565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b505b50505050505050505050565b8082138015612fc7575060008212155b1561305a576000612fd88282614e02565b612fe29084616159565b60095490915061300f9061300a908390600160801b90046001600160801b0316600f0b614e11565b614dc4565b60098054601090613031908490600160801b90046001600160801b0316616022565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b818113156106e557600082126130d05761307382614dc4565b61307c82614dc4565b613086919061612c565b600980546010906130a8908490600160801b90046001600160801b03166160df565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b61308661300a826000614e02565b60006130f06040830160208401615bec565b156130fc575082612823565b613106848461280e565b949350505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b341561325757604051631574f9f360e01b815260040160405180910390fd5b565b60008061326c6040840160208501615bec565b15613348576132a66001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333087614e20565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015613313573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906133379190615fcf565b9150613341612184565b905061338b565b8391506133806001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085614e20565b613388612184565b90505b9250929050565b6000806133a3846301e13380613a48565b90506133e96133df6133bd670de0b6b3a764000086614e58565b6133c7888561280e565b6133d990670de0b6b3a764000061605f565b90614e6d565b61246d888a61280e565b9150505b95945050505050565b60008381526001602090815260408083206001600160a01b03861684529091528120805483929061342890849061605f565b90915550506000838152600260205260408120805483929061344b90849061605f565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291016126a0565b600854600954600091612217916001600160801b0390911690600f0b614ec4565b6000806134c68787878661494f565b90506133e96134da82866301e13380614ee1565b6134ec83670de0b6b3a7640000616072565b90613a48565b61354f60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b54909161010083019161361e9116614f07565b8152600a546001600160801b03600160801b9182900481166020840152600b5460409093019261365092900416614f07565b905292915050565b60008061367883610140015184610120015161280e90919063ffffffff16565b61010084015160e085015161368c9161280e565b6136969190616159565b905060006136ac84600001518560200151614ec4565b9050600082131561374c5760006136ee8286604001518760a001518860c00151670de0b6b3a76400006136df9190616072565b89606001518a60800151614f7d565b90506136fa8184615017565b9050801561374657613733828660400151838860c00151670de0b6b3a76400006137249190616072565b89606001518a60800151615026565b85518690613742908390616072565b9052505b50613808565b60008212156138085761375e82616179565b915060006137928286604001518760c00151670de0b6b3a76400006137839190616072565b8860600151896080015161505a565b905061379e8184615017565b905080156137ea576137d7828660400151838860c00151670de0b6b3a76400006137c89190616072565b89606001518a608001516150f0565b855186906137e690839061605f565b9052505b6137f48184616072565b8551869061380390839061605f565b905250505b6000613837856101000151670de0b6b3a76400006138269190616072565b606087015160e088015191906126ad565b613865866101400151670de0b6b3a76400006138539190616072565b606088015161012089015191906126ad565b61386f9190616159565b905060008186600001516138839190616195565b90508560a001518112156138aa5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516138bc9082616072565b9695505050505050565b806000036138d15750565b6008546001600160801b03167f000000000000000000000000000000000000000000000000000000000000000081101561391e5760405163585fe6df60e11b815260040160405180910390fd5b600061392a8383616195565b90507f000000000000000000000000000000000000000000000000000000000000000081121561396d5760405163585fe6df60e11b815260040160405180910390fd5b613976816126cb565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b8181126139b8576139b18382866126ad565b91506139d8565b6139cc6139c482616179565b8490866126ad565b6139d590616179565b91505b6139e182614dc4565b600980546001600160801b0319166001600160801b03928316179055600854613a249161101c91600160801b900416613a1a8785614ec4565b6115948787614ec4565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600061282383670de0b6b3a7640000846126ad565b600080600080613aca613a6e613496565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000615185565b92506000613ad9612ab2613496565b9050613b0a8785612b3d847f00000000000000000000000000000000000000000000000000000000000000006151b1565b15613b285760405163512095c760e01b815260040160405180910390fd5b613b3181614a19565b600080613b3f89848a6151fe565b9092509050613b4e8287616072565b9450613b5a818661605f565b9550613b6781848a6126ad565b9350613b73848a616072565b965050505092959194509250565b600a546001600160801b0316613bbc61101c82613ba685670de0b6b3a7640000616085565b600b546001600160801b031691908a6001614d4a565b600b80546001600160801b0319166001600160801b0392909216919091179055613be5876126cb565b60088054600090613c009084906001600160801b03166160df565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550613c2d856126cb565b60088054601090613c4f908490600160801b90046001600160801b0316616022565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550613c7c866126cb565b613c8690826160df565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b90613ce2613ccd8b8961280e565b613cd88b6002616085565b61101c9190616072565b835490915081908490601090613d03908490600160801b9004600f0b6160ff565b82546001600160801b039182166101009390930a9283029190920219909116179055508254613d4090600f84810b91600160801b9004900b612fb7565b613d498761527e565b613d66576040516318846de960e01b815260040160405180910390fd5b612fab87612541565b600080600080613d7e886134f2565b90506000613d8b82613658565b9050613d9d613d98612184565b6146f9565b9450613daa858b896126ad565b9450613dbd613db886616179565b6138c6565b6008546001600160801b038082168452600954600f0b6020850152600160801b9091041660408301526000613df183613658565b90506000613e008a83856126ad565b9050613e0c8c8b616159565b613e169082616159565b90506000811215613e5f576000613e37613e2f83616179565b85908d6126ad565b9050613e438189616072565b9750613e4e816138c6565b613e59818a8e6152f0565b60009150505b94509092505050955095509592505050565b6000806000613edd613e81613496565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000615335565b915085613eea838761280e565b1115613f095760405163512095c760e01b815260040160405180910390fd5b6000613f16612ab2613496565b9050613f2181614a19565b600080613f3889670de0b6b3a7640000858b614b73565b509294509250613f4c915082905083616072565b613f569086616072565b9450613f9889613f668388616072565b89613f718c82615356565b8c7f0000000000000000000000000000000000000000000000000000000000000000614c7d565b95509250505093509350939050565b6000613fb96040830160208401615bec565b15613fc857613106848461280e565b5082612823565b600a546140199061101c90600160801b90046001600160801b0316613ffc84670de0b6b3a7640000616085565b600b54600160801b90046001600160801b03169190886001614d4a565b600b80546001600160801b03928316600160801b0292169190911790556000614041846126cb565b60085461405791906001600160801b0316616022565b600880546001600160801b0319166001600160801b038316179055905061407d856126cb565b6008805460109061409f908490600160801b90046001600160801b03166160df565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506140cc856126cb565b600a80546010906140ee908490600160801b90046001600160801b03166160df565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b91161215905061413d5760405163585fe6df60e11b815260040160405180910390fd5b600061414761221c565b6000818152600e6020526040902054909150600160801b9004600f0b61416c876126cb565b6000838152600e602052604090208054601090614194908490600160801b9004600f0b61612c565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e60205260409020546141de90600f83810b91600160801b9004900b612fb7565b6141e78561527e565b614204576040516318846de960e01b815260040160405180910390fd5b6109d785612541565b60008060008060008060006142218861488e565b905061428b61422e613496565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000615365565b90985096509350600061429f612ab2613496565b90506142aa81614a19565b6000806142b98d85858f614b73565b98509294509092506142cf915083905088616072565b96506142db818361605f565b6142e5908a616072565b98506142f1858a61605f565b97505050505061437585858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e61432e9190616072565b81526020810191909152604001600020546001600160801b0316428d1161436c5760008d8152600e60205260409020546001600160801b031661436e565b8d5b6001614ccf565b999d939c50919a5098509695509350505050565b600a546001600160801b03166143c461101c826143ae85670de0b6b3a7640000616085565b600b546001600160801b031691908a6000614d4a565b600b80546001600160801b0319166001600160801b03929092169190911790556143ed866126cb565b6143f79082616022565b600a80546001600160801b0319166001600160801b039290921691909117905550614421836126cb565b6008805460009061443c9084906001600160801b0316616022565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061446982614dc4565b6009805460009061447e908490600f0b61612c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506144ae846126cb565b600880546010906144d0908490600160801b90046001600160801b03166160df565b82546101009290920a6001600160801b038181021990931691831602179091556008547f00000000000000000000000000000000000000000000000000000000000000009116109050806145385750600954600854600f9190910b6001600160801b03909116125b15610e0f5760405163585fe6df60e11b815260040160405180910390fd5b60006145ab826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166153b19092919063ffffffff16565b90508051600014806145cc5750808060200190518101906145cc91906161bd565b6116665760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610757565b6000806146388686613a48565b91506000614666837f000000000000000000000000000000000000000000000000000000000000000061280e565b9050614692817f000000000000000000000000000000000000000000000000000000000000000061280e565b915083156146b5576146a48282616072565b6146ae9084616072565b92506146cc565b6146bf8282616072565b6146c9908461605f565b92505b848610156146ef576146df8387876126ad565b92506146ec8287876126ad565b91505b5094509492505050565b600954600090819061471b90600160801b90046001600160801b031684613a48565b90506147477f00000000000000000000000000000000000000000000000000000000000000008261605f565b6008546001600160801b0316111561479f576008547f0000000000000000000000000000000000000000000000000000000000000000906147929083906001600160801b0316616072565b61479c9190616072565b91505b50919050565b60008084116147b457826147bf565b6147bf8386866126ad565b9050806000036147cf57506109ed565b8085838211156147ea578391506147e78783856126ad565b90505b6147f3826126cb565b600d805460009061480e9084906001600160801b03166160df565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061483b816126cb565b600d805460109061485d908490600160801b90046001600160801b03166160df565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506109d781613db890616179565b60008061489961221c565b90508083116148a95760006148b3565b6148b38184616072565b915061479c827f0000000000000000000000000000000000000000000000000000000000000000613a48565b600080806149006148f888670de0b6b3a7640000616072565b8990876126ad565b905061490c888861280e565b91508115614942576149338a8a8461492c8a670de0b6b3a7640000616072565b89896150f0565b925061493f838261605f565b90505b9750975097945050505050565b60006133ed826133d98588886126ad565b600061497e61497784670de0b6b3a7640000616072565b83906153c0565b61282390670de0b6b3a7640000616072565b600080614a0e8561499f613496565b6149a9919061605f565b6008546149c7908790600160801b90046001600160801b0316616072565b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061494f565b909210949350505050565b6013546001600160801b03600160801b82048116911642614a5a7f00000000000000000000000000000000000000000000000000000000000000008461605f565b1115614a6557505050565b600060128281548110614a7a57614a7a616049565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b031690614aae8342616072565b601254909150878202830190600090614ac888600161605f565b614ad291906160cb565b905060405180604001604052804263ffffffff168152602001836001600160e01b031681525060128281548110614b0b57614b0b616049565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b600080808080614bbe88876115948c61246d614b978d670de0b6b3a7640000616072565b7f00000000000000000000000000000000000000000000000000000000000000009061280e565b9450614bea857f000000000000000000000000000000000000000000000000000000000000000061280e565b92506000614c0b614c038a670de0b6b3a7640000616072565b8b90896126ad565b9050614c37817f000000000000000000000000000000000000000000000000000000000000000061280e565b9450614c63857f000000000000000000000000000000000000000000000000000000000000000061280e565b9250614c6f838561605f565b915050945094509450945094565b600080614c9685614c8e88876153c0565b8a91906126ad565b9050614ca38884866126ad565b614cad908261605f565b905086811115614cc457614cc18782616072565b91505b509695505050505050565b60008060008060008088881015614d2c578615614cf457614cf18d898b6126ad565b9c505b614cff8c898b6126ad565b9b50614d0b8b8d616159565b9050614d188b898b6126ad565b9a50614d258a898b6126ad565b9950614d39565b614d368b8d616159565b90505b9b9c9a9b999a975050505050505050565b60008115614d8a57614d83614d5f848761605f565b614d69858761280e565b614d73888a61280e565b614d7d919061605f565b90614e58565b90506133ed565b828503614d99575060006133ed565b6138bc614da68487616072565b614db0858761280e565b614dba888a61280e565b614d7d9190616072565b600060016001607f1b03198212801590614de5575060016001607f1b038213155b6126f15760405163a5353be560e01b815260040160405180910390fd5b60008183136128075781612823565b600081831361479f5782612823565b6040516001600160a01b03808516602483015283166044820152606481018290526109ed9085906323b872dd60e01b9060840161214d565b600061282383670de0b6b3a764000084614ee1565b600081600003614e865750670de0b6b3a764000061253b565b82600003614e965750600061253b565b816000614ea2856153d5565b9050818102614eb9670de0b6b3a7640000826161da565b90506138bc816155e8565b600080614ed18385616159565b9050600081121561282357600080fd5b6000826000190484118302158202614ef857600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000614f1b61221c565b614f259190616085565b9050808311614f35576000614f3f565b614f3f8184616072565b915061479c614f76670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000616085565b8390613a48565b600080614f8d8888878787615773565b90506000614faa614fa2876133d9878b6153c0565b869086614ee1565b614fb49083616072565b9050670de0b6b3a76400008110614fe857614fe1614fda670de0b6b3a764000088613a48565b8290614e6d565b9050615000565b614ffd614fda670de0b6b3a764000088614e58565b90505b61500a8882616072565b9998505050505050505050565b600081831161479f5782612823565b6000806150378888888888886157a2565b909250905080614cc457604051637ac17d2560e01b815260040160405180910390fd5b60008061506a8787878787615864565b90506000615095670de0b6b3a76400006150848787613a48565b61508e919061605f565b8390614e58565b9050670de0b6b3a764000081106150c2576150bb614fda670de0b6b3a764000088614e58565b90506150da565b6150d7614fda670de0b6b3a764000088613a48565b90505b6150e48188616072565b98975050505050505050565b6000806151008888878787615864565b9050615110856133d9888a616072565b9650600061512a84866151238b86616072565b9190614ee1565b9050670de0b6b3a7640000811061515757615150614fda670de0b6b3a764000088614e58565b905061516f565b61516c614fda670de0b6b3a764000088613a48565b90505b6151798185614e58565b905061500a8982616072565b60006151a687878761519f88670de0b6b3a7640000616072565b8787615889565b979650505050505050565b60006128236151dd670de0b6b3a76400006151cc8187614e58565b6151d69190616072565b84906153c0565b6151ef90670de0b6b3a764000061605f565b670de0b6b3a764000090613a48565b6000806152488561246d85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061523e818c613a48565b61246d9190616072565b9150615274827f000000000000000000000000000000000000000000000000000000000000000061280e565b9050935093915050565b60006152aa7f00000000000000000000000000000000000000000000000000000000000000008361280e565b6009546008546152e8916000916001600160801b03600160801b9092048216600f0b916152d891168761280e565b6152e29190616159565b90614e02565b121592915050565b60006152fe612468836134f2565b60008080526002602052600080516020616278833981519152549192509061532790859061605f565b9050610e0f858383876147a5565b60006151a687878761534f88670de0b6b3a7640000616072565b8787615026565b60008183116128075781612823565b6000808061537e6148f888670de0b6b3a7640000616072565b9050861561494257615390888861280e565b91506149338a8a846153aa8a670de0b6b3a7640000616072565b8989615026565b6060613106848460008561591d565b60006128238383670de0b6b3a7640000614ee1565b60008082136153f757604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361560357506000919050565b680755bf798b4a1bf1e5821261562c5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600061577f8585614e6d565b615798615790866133d9868b61280e565b8590856126ad565b6138bc919061605f565b60008060006157b48989888888615864565b90506157c4866133d9898b61605f565b9750878110156157db576000809250925050615859565b60006157ec85876151238c86616072565b9050670de0b6b3a7640000811061581957615812614fda670de0b6b3a764000089614e58565b9050615831565b61582e614fda670de0b6b3a764000089613a48565b90505b61583b8186614e58565b9050808a11156158525761584f818b616072565b93505b6001925050505b965096945050505050565b60006158708585614e6d565b615798615881866133d9868b6153c0565b859085614ee1565b6000806158998888878787615864565b90506158b3856133d96158ac898c61605f565b869061280e565b97506158c08489856126ad565b975060006158ce8983616072565b9050670de0b6b3a764000081106158fb576158f4614fda670de0b6b3a764000088614e58565b9050615913565b615910614fda670de0b6b3a764000088613a48565b90505b61500a8189616072565b60608247101561597e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610757565b600080866001600160a01b0316858760405161599a9190616208565b60006040518083038185875af1925050503d80600081146159d7576040519150601f19603f3d011682016040523d82523d6000602084013e6159dc565b606091505b50915091506151a68783838760608315615a57578251600003615a50576001600160a01b0385163b615a505760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610757565b5081613106565b6131068383815115615a6c5781518083602001fd5b8060405162461bcd60e51b81526004016107579190616224565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015615ac55780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015615afe578181015183820152602001615ae6565b50506000910152565b600060208284031215615b1957600080fd5b815167ffffffffffffffff80821115615b3157600080fd5b818401915084601f830112615b4557600080fd5b815181811115615b5757615b57615acd565b604051601f8201601f19908116603f01168101908382118183101715615b7f57615b7f615acd565b81604052828152876020848701011115615b9857600080fd5b6151a6836020830160208801615ae3565b6001600160a01b0381168114615bbe57600080fd5b50565b600060208284031215615bd357600080fd5b813561282381615ba9565b8015158114615bbe57600080fd5b600060208284031215615bfe57600080fd5b813561282381615bde565b60006060828403121561479f57600080fd5b600080600060608486031215615c3057600080fd5b8335925060208401359150604084013567ffffffffffffffff811115615c5557600080fd5b615c6186828701615c09565b9150509250925092565b60008083601f840112615c7d57600080fd5b50813567ffffffffffffffff811115615c9557600080fd5b6020830191508360208260051b850101111561338b57600080fd5b60008060008060008060808789031215615cc957600080fd5b8635615cd481615ba9565b95506020870135615ce481615ba9565b9450604087013567ffffffffffffffff80821115615d0157600080fd5b615d0d8a838b01615c6b565b90965094506060890135915080821115615d2657600080fd5b50615d3389828a01615c6b565b979a9699509497509295939492505050565b60008060008060808587031215615d5b57600080fd5b843593506020850135615d6d81615ba9565b92506040850135615d7d81615ba9565b9396929550929360600135925050565b60008060008060808587031215615da357600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115615dcf57600080fd5b615ddb87828801615c09565b91505092959194509250565b600060208284031215615df957600080fd5b813567ffffffffffffffff811115615e1057600080fd5b61310684828501615c09565b60008060008060808587031215615e3257600080fd5b843593506020850135615e4481615ba9565b9250604085013591506060850135615e5b81615ba9565b939692955090935050565b60008060408385031215615e7957600080fd5b8235615e8481615ba9565b91506020830135615e9481615bde565b809150509250929050565b600080600080600080600060e0888a031215615eba57600080fd5b8735615ec581615ba9565b96506020880135615ed581615ba9565b95506040880135615ee581615bde565b945060608801359350608088013560ff81168114615f0257600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080600060608486031215615f3457600080fd5b833592506020840135615f4681615ba9565b929592945050506040919091013590565b600080600080600060a08688031215615f6f57600080fd5b853594506020860135615f8181615ba9565b93506040860135615f9181615ba9565b9250606086013591506080860135615fa881615ba9565b809150509295509295909350565b600060208284031215615fc857600080fd5b5035919050565b600060208284031215615fe157600080fd5b5051919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6001600160801b038281168282160390808211156160425761604261600c565b5092915050565b634e487b7160e01b600052603260045260246000fd5b8082018082111561253b5761253b61600c565b8181038181111561253b5761253b61600c565b808202811582820484141761253b5761253b61600c565b6000600182016160ae576160ae61600c565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826160da576160da6160b5565b500690565b6001600160801b038181168382160190808211156160425761604261600c565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561253b5761253b61600c565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561253b5761253b61600c565b81810360008312801583831316838312821617156160425761604261600c565b6000600160ff1b820161618e5761618e61600c565b5060000390565b80820182811260008312801582168215821617156161b5576161b561600c565b505092915050565b6000602082840312156161cf57600080fd5b815161282381615bde565b6000826161e9576161e96160b5565b600160ff1b8214600019841416156162035761620361600c565b500590565b6000825161621a818460208701615ae3565b9190910192915050565b6020815260008251806020840152616243816040850160208701615ae3565b601f01601f1916919091016040019291505056fe3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba2646970667358221220d6d6771fa2c698160e09416057d7df2c4259a8354d3b5bc45c097b312fd5045164736f6c63430008130033",
    "sourceMap": "845:7592:13:-:0;;;454:1:103;429:26;;1990:1793:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;843:28:0;;;;;1944:20:42;;;;1974:34;;;;2254:10:40::2;::::0;;;;::::2;::::0;;::::2;::::0;;-1:-1:-1;;;2254:10:40::2;::::0;;::::2;::::0;2077:264;;2221:7:13;;2230:13;;2245:15;;2262:14;;2221:7;;2230:13;;2245:15;;2262:14;;2221:7;;2230:13;;2245:15;;2262:14;;2077:264:40::2;::::0;2105:121:::2;::::0;2244:21;;2283:13:::2;::::0;2322:4:::2;::::0;2077:264:::2;4261:25:167::0;;;4317:2;4302:18;;4295:34;;;;4360:2;4345:18;;4338:34;-1:-1:-1;;;;;4408:32:167;4403:2;4388:18;;4381:60;4248:3;4233:19;;4030:417;2077:264:40::2;;::::0;;-1:-1:-1;;2077:264:40;;::::2;::::0;;;;;;2054:297;;2077:264:::2;2054:297:::0;;::::2;::::0;;;;2035:316:::2;::::0;4466:17:7;;-1:-1:-1;;;;;4453:30:7;;;5012:28;;;5043:3;-1:-1:-1;5008:113:7;;-1:-1:-1;5008:113:7;;-1:-1:-1;;5008:113:7;5069:41;;-1:-1:-1;;;5069:41:7;;;;;;;;;;;5008:113;5154:28;;;;5130:52;;5221:32;;;;5193:60;;5418:26;;;;5448:1;5418:31;5414:108;;5472:39;;-1:-1:-1;;;5472:39:7;;;;;;;;;;;5414:108;5553:26;;;;;5531:48;;5633:26;5606:24;;;;:53;;:127;;;5702:7;:26;;;5675:7;:24;;;:53;;;;:::i;:::-;:58;;5606:127;5589:224;;;5765:37;;-1:-1:-1;;;5765:37:7;;;;;;;;;;;5589:224;5842:24;;;;5822:44;;5891:19;;;;5876:34;;5941:25;;;;5920:46;;5990:18;;;;5976:11;:32;;-1:-1:-1;;;;;;5976:32:7;-1:-1:-1;;;;;5976:32:7;;;;;;;6034:20;;;6018:36;;;6082:12;;;;:18;6103:4;-1:-1:-1;;6082:65:7;;;6143:4;6123:7;:12;;;:17;;;:24;6082:65;:111;;;;6189:4;6163:7;:12;;;:23;;;:30;6082:111;6065:202;;;6225:31;;-1:-1:-1;;;6225:31:7;;;;;;;;;;;6065:202;6288:12;;;;;:18;6276:30;;6327:12;;:17;;;6316:28;;6371:12;:23;;;6354:40;;6452:17;;;6439:30;;6288:18;3768:182:2::2;3792:7;:18;;;3788:1;:22;3768:182;;;3841:38;::::0;;;;::::2;::::0;;;::::2;3859:15;3841:38:::0;::::2;::::0;;-1:-1:-1;3841:38:2::2;::::0;::::2;::::0;;;3828:7:::2;:52:::0;;::::2;::::0;;::::2;::::0;;;;;;;;;;-1:-1:-1;;;;;3828:52:2::2;::::0;::::2;::::0;::::2;::::0;;;::::2;::::0;;;::::2;::::0;3922:3:::2;3768:182;;;-1:-1:-1::0;;;;;;;;2330:12:13;::::1;;::::0;-1:-1:-1;2857:16:13::1;::::0;-1:-1:-1;;2857:14:13::1;:16:::0;-1:-1:-1;;;2857:16:13:i:1;:::-;2828:7;:25;;;:45;2824:121;;2896:38;;-1:-1:-1::0;;;2896:38:13::1;;;;;;;;;;;2824:121;2988:5;-1:-1:-1::0;;;;;2988:11:13::1;;:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;2958:43:13::1;2966:7;:17;;;-1:-1:-1::0;;;;;2958:43:13::1;;2954:111;;3024:30;;-1:-1:-1::0;;;3024:30:13::1;;;;;;;;;;;2954:111;3153:17:::0;;3187:4:::1;::::0;3153:59:::1;::::0;-1:-1:-1;;;3153:59:13;;-1:-1:-1;;;;;5122:32:167;;;3153:59:13::1;::::0;::::1;5104:51:167::0;-1:-1:-1;;5171:18:167;;;5164:34;3153:25:13;::::1;::::0;::::1;::::0;5077:18:167;;3153:59:13::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3148:126;;3235:28;;-1:-1:-1::0;;;3235:28:13::1;;;;;;;;;;;3148:126;3434:9;3429:348;3453:8;:15;3449:1;:19;3429:348;;;3489:14;3506:8;3515:1;3506:11;;;;;;;;:::i;:::-;;;;;;;3489:28;;3579:4;;-1:-1:-1::0;;;;;3552:32:13::1;3560:6;-1:-1:-1::0;;;;;3552:32:13::1;;:90;;;;3631:10;;-1:-1:-1::0;;;;;3604:38:13::1;3612:6;-1:-1:-1::0;;;;;3604:38:13::1;;3552:90;3531:196;;;3682:30;;-1:-1:-1::0;;;3682:30:13::1;;;;;;;;;;;3531:196;-1:-1:-1::0;;;;;3740:19:13::1;;::::0;;;:11:::1;:19;::::0;;;;:26;;-1:-1:-1;;3740:26:13::1;3762:4;3740:26;::::0;;3470:3;::::1;::::0;::::1;:::i;:::-;;;;3429:348;;;;1990:1793:::0;;;;;;845:7592;;6946:134;7030:4;;:43;;-1:-1:-1;;;7030:43:13;;565:4:33;7030:43:13;;;6006:25:167;7004:7:13;;-1:-1:-1;;;;;7030:20:13;;;;5979:18:167;;7030:43:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;7023:50;;6946:134;:::o;14:127:167:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:250;213:2;207:9;255:6;243:19;;-1:-1:-1;;;;;277:34:167;;313:22;;;274:62;271:88;;;339:18;;:::i;:::-;375:2;368:22;146:250;:::o;401:139::-;-1:-1:-1;;;;;484:31:167;;474:42;;464:70;;530:1;527;520:12;464:70;401:139;:::o;545:154::-;632:13;;654:39;632:13;654:39;:::i;:::-;545:154;;;:::o;704:525::-;766:5;814:4;802:9;797:3;793:19;789:30;786:50;;;832:1;829;822:12;786:50;865:2;859:9;907:4;895:17;;-1:-1:-1;;;;;927:34:167;;963:22;;;924:62;921:88;;;989:18;;:::i;:::-;1029:10;1025:2;1018:22;;1058:6;1049:15;;1094:9;1088:16;1080:6;1073:32;1159:2;1148:9;1144:18;1138:25;1133:2;1125:6;1121:15;1114:50;1218:2;1207:9;1203:18;1197:25;1192:2;1184:6;1180:15;1173:50;;704:525;;;;:::o;1234:982::-;1299:5;1352:3;1345:4;1337:6;1333:17;1329:27;1319:55;;1370:1;1367;1360:12;1319:55;1393:13;;1425:4;-1:-1:-1;;;;;1478:10:167;;;1475:36;;;1491:18;;:::i;:::-;1537:2;1534:1;1530:10;1569:2;1563:9;1632:2;1628:7;1623:2;1619;1615:11;1611:25;1603:6;1599:38;1687:6;1675:10;1672:22;1667:2;1655:10;1652:18;1649:46;1646:72;;;1698:18;;:::i;:::-;1734:2;1727:22;1784:18;;;1860:15;;;1856:24;;;1818:15;;;;-1:-1:-1;1892:15:167;;;1889:35;;;1920:1;1917;1910:12;1889:35;1956:2;1948:6;1944:15;1933:26;;1968:218;1984:6;1979:3;1976:15;1968:218;;;2057:3;2051:10;2074:39;2107:5;2074:39;:::i;:::-;2126:18;;2164:12;;;;2001;;;;1968:218;;;2204:6;1234:982;-1:-1:-1;;;;;;;1234:982:167:o;2221:1804::-;2406:6;2414;2422;2430;2438;2446;2490:9;2481:7;2477:23;2520:3;2516:2;2512:12;2509:32;;;2537:1;2534;2527:12;2509:32;2560:6;2586:2;2582;2578:11;2575:31;;;2602:1;2599;2592:12;2575:31;2628:17;;:::i;:::-;2615:30;;2668:48;2706:9;2668:48;:::i;:::-;2661:5;2654:63;2770:2;2759:9;2755:18;2749:25;2744:2;2737:5;2733:14;2726:49;2828:2;2817:9;2813:18;2807:25;2802:2;2795:5;2791:14;2784:49;2886:2;2875:9;2871:18;2865:25;2860:2;2853:5;2849:14;2842:49;2945:3;2934:9;2930:19;2924:26;2918:3;2911:5;2907:15;2900:51;3005:3;2994:9;2990:19;2984:26;2978:3;2971:5;2967:15;2960:51;3065:3;3054:9;3050:19;3044:26;3038:3;3031:5;3027:15;3020:51;3104:58;3157:3;3146:9;3142:19;3104:58;:::i;:::-;3098:3;3091:5;3087:15;3080:83;3182:3;3217:57;3270:2;3259:9;3255:18;3217:57;:::i;:::-;3201:14;;;3194:81;3294:3;3329:62;3383:7;3363:18;;;3329:62;:::i;:::-;3324:2;3317:5;3313:14;3306:86;;3449:6;3438:9;3434:22;3428:29;3419:6;3412:5;3408:18;3401:57;3515:3;3504:9;3500:19;3494:26;3485:6;3478:5;3474:18;3467:54;3540:5;3530:15;;3564:57;3617:2;3606:9;3602:18;3564:57;:::i;:::-;3554:67;;;;3661:3;3650:9;3646:19;3640:26;3630:36;;3685:58;3738:3;3727:9;3723:19;3685:58;:::i;:::-;3675:68;;3762:58;3815:3;3804:9;3800:19;3762:58;:::i;:::-;3864:3;3849:19;;3843:26;3752:68;;-1:-1:-1;;;;;;3881:30:167;;3878:50;;;3924:1;3921;3914:12;3878:50;3947:72;4011:7;4002:6;3991:9;3987:22;3947:72;:::i;:::-;3937:82;;;2221:1804;;;;;;;;:::o;4452:209::-;4484:1;4510;4500:132;;4554:10;4549:3;4545:20;4542:1;4535:31;4589:4;4586:1;4579:15;4617:4;4614:1;4607:15;4500:132;-1:-1:-1;4646:9:167;;4452:209::o;4666:259::-;4736:6;4789:2;4777:9;4768:7;4764:23;4760:32;4757:52;;;4805:1;4802;4795:12;4757:52;4837:9;4831:16;4856:39;4889:5;4856:39;:::i;:::-;4914:5;4666:259;-1:-1:-1;;;4666:259:167:o;5209:277::-;5276:6;5329:2;5317:9;5308:7;5304:23;5300:32;5297:52;;;5345:1;5342;5335:12;5297:52;5377:9;5371:16;5430:5;5423:13;5416:21;5409:5;5406:32;5396:60;;5452:1;5449;5442:12;5491:127;5552:10;5547:3;5543:20;5540:1;5533:31;5583:4;5580:1;5573:15;5607:4;5604:1;5597:15;5623:232;5662:3;5683:17;;;5680:140;;5742:10;5737:3;5733:20;5730:1;5723:31;5777:4;5774:1;5767:15;5805:4;5802:1;5795:15;5680:140;-1:-1:-1;5847:1:167;5836:13;;5623:232::o;6042:184::-;6112:6;6165:2;6153:9;6144:7;6140:23;6136:32;6133:52;;;6181:1;6178;6171:12;6133:52;-1:-1:-1;6204:16:167;;6042:184;-1:-1:-1;6042:184:167:o;:::-;845:7592:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x60806040526004361061014b5760003560e01c80639032c726116100b6578063cba2e58d1161006f578063cba2e58d146104ff578063cbc1343414610512578063dbbe807014610532578063ded0623114610545578063e44808bc14610565578063ed64bab2146105855761014b565b80639032c726146104205780639aa68462146104405780639cd241af14610453578063a22cb46514610473578063ab033ea914610493578063b334ed86146104b35761014b565b806330adf81f1161010857806330adf81f146103455780633644e515146103795780633e691db9146103ad5780634ed2d6ac146103cd5780637180c8ca146103ed57806377d05ff41461040d5761014b565b806301681a621461025b57806302329a291461027d578063074a6de91461029d57806317fad7fc146102d75780631c0f12b6146102f757806329b23fc114610317575b34801561015757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161019a929190615a86565b600060405180830381855af49150503d80600081146101d5576040519150601f19603f3d011682016040523d82523d6000602084013e6101da565b606091505b509150915081156101fe57604051638bb0a34b60e01b815260040160405180910390fd5b600061020982615a96565b90506001600160e01b03198116636e64089360e11b1461022b57815160208301fd5b81516003198101600484019081529261024c91810160200190602401615b07565b80519650602001945050505050f35b34801561026757600080fd5b5061027b610276366004615bc1565b6105a5565b005b34801561028957600080fd5b5061027b610298366004615bec565b6106e9565b3480156102a957600080fd5b506102bd6102b8366004615c1b565b610732565b604080519283526020830191909152015b60405180910390f35b3480156102e357600080fd5b5061027b6102f2366004615cb0565b61092c565b34801561030357600080fd5b5061027b610312366004615d45565b6109e0565b34801561032357600080fd5b50610337610332366004615d8d565b6109f3565b6040519081526020016102ce565b34801561035157600080fd5b506103377f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561038557600080fd5b506103377f000000000000000000000000000000000000000000000000000000000000000081565b3480156103b957600080fd5b506103376103c8366004615de7565b610c39565b3480156103d957600080fd5b5061027b6103e8366004615e1c565b610dc8565b3480156103f957600080fd5b5061027b610408366004615e66565b610e16565b61033761041b366004615c1b565b610e8e565b34801561042c57600080fd5b5061027b61043b366004615e9f565b61110e565b61033761044e366004615d8d565b61135d565b34801561045f57600080fd5b5061027b61046e366004615f1f565b61165a565b34801561047f57600080fd5b5061027b61048e366004615e66565b61166b565b34801561049f57600080fd5b5061027b6104ae366004615bc1565b6116d7565b3480156104bf57600080fd5b506104e77f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016102ce565b6102bd61050d366004615d8d565b61174b565b34801561051e57600080fd5b506102bd61052d366004615c1b565b61196c565b6102bd610540366004615d8d565b611b68565b34801561055157600080fd5b50610337610560366004615d8d565b611d9c565b34801561057157600080fd5b5061027b610580366004615f57565b611fcb565b34801561059157600080fd5b5061027b6105a0366004615fb6565b61201b565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015906105ee5750336000908152600f602052604090205460ff16155b1561060b576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03811660009081526014602052604090205460ff166106445760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa15801561068b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106af9190615fcf565b90506106e56001600160a01b0383167f000000000000000000000000000000000000000000000000000000000000000083612121565b5050565b336000908152600f602052604090205460ff16610718576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b6000806000546001146107605760405162461bcd60e51b815260040161075790615fe8565b60405180910390fd5b6002600090815561076f612184565b905061078261077c61221c565b82612252565b5061078c81612541565b600d548692506001600160801b0316808311156107b057806001600160801b031692505b826000036107c65760008093509350505061091d565b6107d5600360f81b3385612604565b600d546001600160801b03600160801b9091048116906000906107fd908690849086166126ad565b9050610808856126cb565b6108129084616022565b600d80546001600160801b0319166001600160801b039290921691909117905561083b816126cb565b600d805460109061085d908490600160801b90046001600160801b0316616022565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061088b81886126f5565b955085610898898761280e565b11156108b75760405163c972651760e01b815260040160405180910390fd5b6108c46020880188615bc1565b6001600160a01b03167f7986a4c20efd1390450c45fb0b11e794754bdce25f47ab5488efc8104169f754866108f9848861280e565b604080519283526020830191909152810187905260600160405180910390a2505050505b60016000559094909350915050565b6001600160a01b038616158061094957506001600160a01b038516155b156109675760405163f0dd15fd60e01b815260040160405180910390fd5b8281146109875760405163174861a760e31b815260040160405180910390fd5b60005b838110156109d7576109cf8585838181106109a7576109a7616049565b9050602002013588888686868181106109c2576109c2616049565b905060200201353361282a565b60010161098a565b50505050505050565b6109ed848484843361282a565b50505050565b60008054600114610a165760405162461bcd60e51b815260040161075790615fe8565b60026000557f0000000000000000000000000000000000000000000000000000000000000000841015610a5c5760405163211ddda360e11b815260040160405180910390fd5b6000610a66612184565b9050610a728682612252565b50610a88610a816002886129eb565b3387612604565b600080600080600080610a9c8b888e612a20565b949a509298509096509450925090508a8c8842821115610b6d578360106000828254610ac8919061605f565b90915550610adb9050838a898886612c94565b6000610b077f000000000000000000000000000000000000000000000000000000000000000084616072565b6000818152600e6020526040812054919250600160801b909104600f0b90610b3a9086908a908e908d9089908990612e0e565b6000828152600e6020526040902054610b6190600f83810b91600160801b9004900b612fb7565b610b6a83612541565b50505b6000610b79898e6126f5565b90508c6000610b89838e846130de565b90508f811015610bac5760405163c972651760e01b815260040160405180910390fd5b610bb76002866129eb565b8f6000016020810190610bca9190615bc1565b6040805188815260208101859052908101879052606081018990526001600160a01b0391909116907f32f37298489a8da0fde394937191ad6035015dd8a04bc97c304d59858e3bfd679060800160405180910390a3505060016000559f9e505050505050505050505050505050565b60008054600114610c5c5760405162461bcd60e51b815260040161075790615fe8565b60026000556001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016610c986020840184615bc1565b6001600160a01b031614610cbf57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600f602052604090205460ff16158015610d085750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610d1f57506011546001600160a01b03163314155b15610d3c576040516282b42960e81b815260040160405180910390fd5b601080546000909155610d4f81846126f5565b91507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa766eca44ec2dc18727bd04ada80599917cad7a27cf6a765026b2f1d0ce5c4ee83610da5612184565b6040805192835260208301919091520160405180910390a2506001600055919050565b83610dd28161310e565b6001600160a01b0316336001600160a01b031614610e0357604051632aab8bd360e01b815260040160405180910390fd5b610e0f858585856131cb565b5050505050565b6011546001600160a01b03163314610e40576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b60008054600114610eb15760405162461bcd60e51b815260040161075790615fe8565b6002600055610ebe613238565b600c5460ff1615610ee257604051637983c05160e01b815260040160405180910390fd5b600080610eef8685613259565b9092509050610f1f7f00000000000000000000000000000000000000000000000000000000000000006002616085565b821015610f3f57604051632afb507160e21b815260040160405180910390fd5b610f6a7f00000000000000000000000000000000000000000000000000000000000000006002616085565b610f749083616072565b600c805460ff191660011790559250610f8c826126cb565b600880546001600160801b0319166001600160801b039290921691909117905561102161101c837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000613392565b6126cb565b600880546001600160801b03928316600160801b02921691909117905561106a6000807f00000000000000000000000000000000000000000000000000000000000000006133f6565b611082600061107c6020870187615bc1565b856133f6565b61108d61077c61221c565b50600061109b8783876130de565b90506110aa6020860186615bc1565b6040805186815260208101849052908101849052606081018890526001600160a01b0391909116907fd93ddcd36a9d44373680f40bd3bcafe3c7e738748e10c90213e70453cff442319060800160405180910390a250505060016000559392505050565b8342111561112f5760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166111565760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611282573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146112c057604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038916600090815260076020526040812080549091906112e69061609c565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b600080546001146113805760405162461bcd60e51b815260040161075790615fe8565b6002600055600c54610100900460ff16156113ae576040516313d0ff5960e31b815260040160405180910390fd5b6113b6613238565b7f00000000000000000000000000000000000000000000000000000000000000008510156113f75760405163211ddda360e11b815260040160405180910390fd5b600061147f611404613496565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006134b7565b90508481108061148e57508381115b156114ac57604051633b61151160e11b815260040160405180910390fd5b6000806114b98886613259565b915091506114c861077c61221c565b50600d54600360f81b60009081526002602052600080516020616258833981519152549091611502916001600160801b0390911690616072565b60008080526002602052600080516020616278833981519152549192509061152b90839061605f565b9050600080600061153b866134f2565b905061154681613658565b9150611551876138c6565b6008546001600160801b038082168352600954600f0b6020840152600160801b90910416604082015261158381613658565b925061159b84836115948187616072565b91906126ad565b98506115b7905060006115b160208c018c615bc1565b8a6133f6565b6115c085612541565b600083156115d7576115d28285613a48565b6115da565b60005b90506115e960208b018b615bc1565b6001600160a01b03167fd92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e502396098a61161e8a8a61280e565b60408051928352602083019190915281018990526060810184905260800160405180910390a25050600160005550949998505050505050505050565b611666838383336131cb565b505050565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6011546001600160a01b03163314611701576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000806000546001146117705760405162461bcd60e51b815260040161075790615fe8565b6002600055600c54610100900460ff161561179e576040516313d0ff5960e31b815260040160405180910390fd5b6117a6613238565b6000806117b38886613259565b9150915060006117c48983886130de565b90507f00000000000000000000000000000000000000000000000000000000000000008110156118075760405163211ddda360e11b815260040160405180910390fd5b86821015611828576040516342af972b60e01b815260040160405180910390fd5b600061183261221c565b905061183e8184612252565b50600080600061184e8787613a5d565b909a5091945092509050878c11156118795760405163c972651760e01b815260040160405180910390fd5b806010600082825461188b919061605f565b909155506118bb90507f00000000000000000000000000000000000000000000000000000000000000008561605f565b98506118cb83898489888e613b81565b60006118d860018b6129eb565b90506118f1816118eb60208e018e615bc1565b8b6133f6565b806118ff60208d018d615bc1565b604080518d8152602081018a90529081018a9052606081018c90526001600160a01b0391909116907f8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda6869060800160405180910390a350505050505050506001600055909590945092505050565b6000806000546001146119915760405162461bcd60e51b815260040161075790615fe8565b60026000557f00000000000000000000000000000000000000000000000000000000000000008510156119d75760405163211ddda360e11b815260040160405180910390fd5b60006119e1612184565b90506119ee61077c61221c565b506119f881612541565b600260205260008051602061627883398151915254600d54600360f81b6000908152600080516020616258833981519152549091611a41916001600160801b0390911690616072565b90506000611a4f828461605f565b9050611a5d6000338b612604565b600080611a6d8b87858888613d6f565b9098509092509050611a90600360f81b611a8a60208c018c615bc1565b896133f6565b611a9a828a6126f5565b97506000611aa989888c6130de565b9050888b1115611acc5760405163c972651760e01b815260040160405180910390fd5b60008415611ae357611ade8386613a48565b611ae6565b60005b9050611af560208c018c615bc1565b604080518f8152602081018590529081018a9052606081018b9052608081018390526001600160a01b0391909116907fae97bda5fb1ee457c0490e5804bc10c54ab31a1fd9b01e2f85a1855072150be89060a00160405180910390a2505050505050505060016000559094909350915050565b600080600054600114611b8d5760405162461bcd60e51b815260040161075790615fe8565b6002600055600c54610100900460ff1615611bbb576040516313d0ff5960e31b815260040160405180910390fd5b611bc3613238565b7f0000000000000000000000000000000000000000000000000000000000000000861015611c045760405163211ddda360e11b815260040160405180910390fd5b6000611c0e612184565b905084811015611c31576040516342af972b60e01b815260040160405180910390fd5b6000611c3b61221c565b90506000611c498284612252565b90506000611c777f00000000000000000000000000000000000000000000000000000000000000008461605f565b90506000806000611c898d8887613e71565b9094509092509050611c9c82888c613fa7565b91508060106000828254611cb0919061605f565b909155505050808b1015611cd75760405163c972651760e01b815260040160405180910390fd5b6000611ce3828b613259565b509050611cf28d848987613fcf565b6000611cff6002866129eb565b90508d611d1982611d1360208f018f615bc1565b836133f6565b81611d2760208e018e615bc1565b6001600160a01b03167f80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef9588611d5c878e61280e565b60408051928352602083019190915281018d90526060810185905260800160405180910390a35050600160005550919b919a509098505050505050505050565b60008054600114611dbf5760405162461bcd60e51b815260040161075790615fe8565b60026000557f0000000000000000000000000000000000000000000000000000000000000000841015611e055760405163211ddda360e11b815260040160405180910390fd5b6000611e0f612184565b9050611e1b8682612252565b50611e2a610a816001886129eb565b600080600080600080611e3e8b888e61420d565b95509550955095509550955060008c90508c421015611f07578160106000828254611e69919061605f565b90915550611e7c90508c88878685614389565b6000611ea87f000000000000000000000000000000000000000000000000000000000000000083616072565b6000818152600e6020526040902054909150600160801b9004600f0b611ed48e878b8a878f6001612e0e565b6000828152600e6020526040902054611efb90600f83810b91600160801b9004900b612fb7565b611f048a612541565b50505b6000611f13878c6126f5565b90506000611f22828b8e6130de565b9050808d1115611f455760405163c972651760e01b815260040160405180910390fd5b8d611f516001856129eb565b611f5e60208f018f615bc1565b60408051878152602081018690529081018e9052606081018490526001600160a01b0391909116907f4c68e40241b8ae371bc7dae7035400158b60d0b7d69b35477b693759bb2c0ca09060800160405180910390a3505060016000559d9c50505050505050505050505050565b84611fd58161310e565b6001600160a01b0316336001600160a01b03161461200657604051632aab8bd360e01b815260040160405180910390fd5b612013868686868661282a565b505050505050565b6000818152600e60205260409020546001600160801b03161561203b5750565b600061204561221c565b90506120717f0000000000000000000000000000000000000000000000000000000000000000836160cb565b15158061207d57508181105b1561209b5760405163ecd29e8160e01b815260040160405180910390fd5b8082036120b357611666816120ae612184565b612252565b815b6000818152600e60205260409020546001600160801b03168282036120df576120dc612184565b90505b80156120ef57610e0f8482612252565b5061211a7f00000000000000000000000000000000000000000000000000000000000000008261605f565b90506120b5565b6040516001600160a01b03831660248201526044810182905261166690849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152614556565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa1580156121f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122179190615fcf565b905090565b60006122487f0000000000000000000000000000000000000000000000000000000000000000426160cb565b6122179042616072565b6000828152600e6020526040812080546001600160801b031615158061227757504284115b1561228d57546001600160801b0316905061253b565b612296836126cb565b81546001600160801b0319166001600160801b03919091161781556000600e816122e07f000000000000000000000000000000000000000000000000000000000000000088616072565b815260208101919091526040016000908120546001600160801b031691506123096002876129eb565b600081815260026020526040812054919250811561236257600080612331848a88600061462b565b915091508060106000828254612347919061605f565b9091555061235b905084600084808e612c94565b6001925050505b600061236f60018a6129eb565b60008181526002602052604090205490915080156123ca57600080612397838c8a600161462b565b9150915080601060008282546123ad919061605f565b909155508c90506123c2846000858085614389565b600195505050505b82156124485760006123fc7f00000000000000000000000000000000000000000000000000000000000000008c616072565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b9261243c928492919004900b612fb7565b6124458b612541565b50505b6000808a11612458576000612473565b6124738a61246d6124688d6134f2565b613658565b9061280e565b600d54600260205260008051602061625883398151915254600080805260008051602061627883398151915254939450926001600160801b03909216916124ba919061605f565b6124c49190616072565b9050600081156124dd576124d88383613a48565b6124e0565b60005b604080518e8152602081018a9052908101869052606081018290529091508d907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a28b9a50505050505050505050505b92915050565b600260205260008051602061627883398151915254600d54600360f81b600090815260008051602061625883398151915254909161258a916001600160801b0390911690616072565b90506000612598828461605f565b905060006125a8612468866134f2565b905060006125b78583856126ad565b90506000806125c5886146f9565b9050828111156125dc576125d98382616072565b91505b60008211806125e9575083155b156125fa576125fa828587896147a5565b5050505050505050565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612636908490616072565b909155505060008381526002602052604081208054839290612659908490616072565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b60008260001904841183021582026126c457600080fd5b5091020490565b6000600160801b82106126f157604051630f0af95160e11b815260040160405180910390fd5b5090565b60006127076040830160208401615bec565b156127c6576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba087652846127496020860186615bc1565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af115801561279b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127bf9190615fcf565b905061253b565b6128076127d66020840184615bc1565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169085612121565b5090919050565b60006128238383670de0b6b3a76400006126ad565b9392505050565b6001600160a01b038416158061284757506001600160a01b038316155b156128655760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614612929576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff166129295760008581526004602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146129275760008681526004602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290612921908490616072565b90915550505b505b60008581526001602090815260408083206001600160a01b03881684529091528120805484929061295b908490616072565b909155505060008581526001602090815260408083206001600160a01b03871684529091528120805484929061299290849061605f565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b60006001600160f81b03821115612a155760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806000806000806000612a348861488e565b9050612a9e612a41613496565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006148df565b909850955093506000612b0c612ab2613496565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061494f565b9050612b428589612b3d847f0000000000000000000000000000000000000000000000000000000000000000614960565b614990565b15612b605760405163512095c760e01b815260040160405180910390fd5b612b6981614a19565b8a8a60008080612b7b85888887614b73565b9b509295509093509150612b9190508184616072565b612b9b908b61605f565b9950612ba7828461605f565b612bb1908c61605f565b9a50505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a612bec9190616072565b815260208101919091526040016000908120546001600160801b03169150428911612c2e576000898152600e60205260409020546001600160801b0316612c30565b895b9050612c608b8784848e7f0000000000000000000000000000000000000000000000000000000000000000614c7d565b9650612c6c8387616072565b9550612c7e8787878686866000614ccf565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b0316612cdd61101c82612cc085670de0b6b3a7640000616085565b600b54600160801b90046001600160801b031691908a6000614d4a565b600b80546001600160801b03928316600160801b029216919091179055612d03866126cb565b612d0d9082616022565b600a80546001600160801b03928316600160801b02921691909117905550612d34836126cb565b60088054600090612d4f9084906001600160801b03166160df565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612d7c82614dc4565b60098054600090612d91908490600f0b6160ff565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550612dc1846126cb565b60088054601090612de3908490600160801b90046001600160801b0316616022565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b6000612e3a7f000000000000000000000000000000000000000000000000000000000000000085616072565b9050600060026000612e4d6001886129eb565b8152602001908152602001600020549050600060026000612e6f6002896129eb565b8152602001908152602001600020549050816000148015612e8e575080155b15612eb3576000838152600e6020526040902080546001600160801b03169055612fab565b6000612ef78b612ec38c8961280e565b612ece906002616085565b8b612ed98c8b61280e565b612ee3919061605f565b612eed9190616072565b61101c919061605f565b90508415612f56576000848152600e602052604090208054829190601090612f2a908490600160801b9004600f0b61612c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550612fa9565b6000848152600e602052604090208054829190601090612f81908490600160801b9004600f0b6160ff565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b505b50505050505050505050565b8082138015612fc7575060008212155b1561305a576000612fd88282614e02565b612fe29084616159565b60095490915061300f9061300a908390600160801b90046001600160801b0316600f0b614e11565b614dc4565b60098054601090613031908490600160801b90046001600160801b0316616022565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b818113156106e557600082126130d05761307382614dc4565b61307c82614dc4565b613086919061612c565b600980546010906130a8908490600160801b90046001600160801b03166160df565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b61308661300a826000614e02565b60006130f06040830160208401615bec565b156130fc575082612823565b613106848461280e565b949350505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b341561325757604051631574f9f360e01b815260040160405180910390fd5b565b60008061326c6040840160208501615bec565b15613348576132a66001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333087614e20565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015613313573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906133379190615fcf565b9150613341612184565b905061338b565b8391506133806001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085614e20565b613388612184565b90505b9250929050565b6000806133a3846301e13380613a48565b90506133e96133df6133bd670de0b6b3a764000086614e58565b6133c7888561280e565b6133d990670de0b6b3a764000061605f565b90614e6d565b61246d888a61280e565b9150505b95945050505050565b60008381526001602090815260408083206001600160a01b03861684529091528120805483929061342890849061605f565b90915550506000838152600260205260408120805483929061344b90849061605f565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291016126a0565b600854600954600091612217916001600160801b0390911690600f0b614ec4565b6000806134c68787878661494f565b90506133e96134da82866301e13380614ee1565b6134ec83670de0b6b3a7640000616072565b90613a48565b61354f60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b54909161010083019161361e9116614f07565b8152600a546001600160801b03600160801b9182900481166020840152600b5460409093019261365092900416614f07565b905292915050565b60008061367883610140015184610120015161280e90919063ffffffff16565b61010084015160e085015161368c9161280e565b6136969190616159565b905060006136ac84600001518560200151614ec4565b9050600082131561374c5760006136ee8286604001518760a001518860c00151670de0b6b3a76400006136df9190616072565b89606001518a60800151614f7d565b90506136fa8184615017565b9050801561374657613733828660400151838860c00151670de0b6b3a76400006137249190616072565b89606001518a60800151615026565b85518690613742908390616072565b9052505b50613808565b60008212156138085761375e82616179565b915060006137928286604001518760c00151670de0b6b3a76400006137839190616072565b8860600151896080015161505a565b905061379e8184615017565b905080156137ea576137d7828660400151838860c00151670de0b6b3a76400006137c89190616072565b89606001518a608001516150f0565b855186906137e690839061605f565b9052505b6137f48184616072565b8551869061380390839061605f565b905250505b6000613837856101000151670de0b6b3a76400006138269190616072565b606087015160e088015191906126ad565b613865866101400151670de0b6b3a76400006138539190616072565b606088015161012089015191906126ad565b61386f9190616159565b905060008186600001516138839190616195565b90508560a001518112156138aa5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516138bc9082616072565b9695505050505050565b806000036138d15750565b6008546001600160801b03167f000000000000000000000000000000000000000000000000000000000000000081101561391e5760405163585fe6df60e11b815260040160405180910390fd5b600061392a8383616195565b90507f000000000000000000000000000000000000000000000000000000000000000081121561396d5760405163585fe6df60e11b815260040160405180910390fd5b613976816126cb565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b8181126139b8576139b18382866126ad565b91506139d8565b6139cc6139c482616179565b8490866126ad565b6139d590616179565b91505b6139e182614dc4565b600980546001600160801b0319166001600160801b03928316179055600854613a249161101c91600160801b900416613a1a8785614ec4565b6115948787614ec4565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600061282383670de0b6b3a7640000846126ad565b600080600080613aca613a6e613496565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000615185565b92506000613ad9612ab2613496565b9050613b0a8785612b3d847f00000000000000000000000000000000000000000000000000000000000000006151b1565b15613b285760405163512095c760e01b815260040160405180910390fd5b613b3181614a19565b600080613b3f89848a6151fe565b9092509050613b4e8287616072565b9450613b5a818661605f565b9550613b6781848a6126ad565b9350613b73848a616072565b965050505092959194509250565b600a546001600160801b0316613bbc61101c82613ba685670de0b6b3a7640000616085565b600b546001600160801b031691908a6001614d4a565b600b80546001600160801b0319166001600160801b0392909216919091179055613be5876126cb565b60088054600090613c009084906001600160801b03166160df565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550613c2d856126cb565b60088054601090613c4f908490600160801b90046001600160801b0316616022565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550613c7c866126cb565b613c8690826160df565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b90613ce2613ccd8b8961280e565b613cd88b6002616085565b61101c9190616072565b835490915081908490601090613d03908490600160801b9004600f0b6160ff565b82546001600160801b039182166101009390930a9283029190920219909116179055508254613d4090600f84810b91600160801b9004900b612fb7565b613d498761527e565b613d66576040516318846de960e01b815260040160405180910390fd5b612fab87612541565b600080600080613d7e886134f2565b90506000613d8b82613658565b9050613d9d613d98612184565b6146f9565b9450613daa858b896126ad565b9450613dbd613db886616179565b6138c6565b6008546001600160801b038082168452600954600f0b6020850152600160801b9091041660408301526000613df183613658565b90506000613e008a83856126ad565b9050613e0c8c8b616159565b613e169082616159565b90506000811215613e5f576000613e37613e2f83616179565b85908d6126ad565b9050613e438189616072565b9750613e4e816138c6565b613e59818a8e6152f0565b60009150505b94509092505050955095509592505050565b6000806000613edd613e81613496565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000615335565b915085613eea838761280e565b1115613f095760405163512095c760e01b815260040160405180910390fd5b6000613f16612ab2613496565b9050613f2181614a19565b600080613f3889670de0b6b3a7640000858b614b73565b509294509250613f4c915082905083616072565b613f569086616072565b9450613f9889613f668388616072565b89613f718c82615356565b8c7f0000000000000000000000000000000000000000000000000000000000000000614c7d565b95509250505093509350939050565b6000613fb96040830160208401615bec565b15613fc857613106848461280e565b5082612823565b600a546140199061101c90600160801b90046001600160801b0316613ffc84670de0b6b3a7640000616085565b600b54600160801b90046001600160801b03169190886001614d4a565b600b80546001600160801b03928316600160801b0292169190911790556000614041846126cb565b60085461405791906001600160801b0316616022565b600880546001600160801b0319166001600160801b038316179055905061407d856126cb565b6008805460109061409f908490600160801b90046001600160801b03166160df565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506140cc856126cb565b600a80546010906140ee908490600160801b90046001600160801b03166160df565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b91161215905061413d5760405163585fe6df60e11b815260040160405180910390fd5b600061414761221c565b6000818152600e6020526040902054909150600160801b9004600f0b61416c876126cb565b6000838152600e602052604090208054601090614194908490600160801b9004600f0b61612c565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e60205260409020546141de90600f83810b91600160801b9004900b612fb7565b6141e78561527e565b614204576040516318846de960e01b815260040160405180910390fd5b6109d785612541565b60008060008060008060006142218861488e565b905061428b61422e613496565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000615365565b90985096509350600061429f612ab2613496565b90506142aa81614a19565b6000806142b98d85858f614b73565b98509294509092506142cf915083905088616072565b96506142db818361605f565b6142e5908a616072565b98506142f1858a61605f565b97505050505061437585858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e61432e9190616072565b81526020810191909152604001600020546001600160801b0316428d1161436c5760008d8152600e60205260409020546001600160801b031661436e565b8d5b6001614ccf565b999d939c50919a5098509695509350505050565b600a546001600160801b03166143c461101c826143ae85670de0b6b3a7640000616085565b600b546001600160801b031691908a6000614d4a565b600b80546001600160801b0319166001600160801b03929092169190911790556143ed866126cb565b6143f79082616022565b600a80546001600160801b0319166001600160801b039290921691909117905550614421836126cb565b6008805460009061443c9084906001600160801b0316616022565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061446982614dc4565b6009805460009061447e908490600f0b61612c565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506144ae846126cb565b600880546010906144d0908490600160801b90046001600160801b03166160df565b82546101009290920a6001600160801b038181021990931691831602179091556008547f00000000000000000000000000000000000000000000000000000000000000009116109050806145385750600954600854600f9190910b6001600160801b03909116125b15610e0f5760405163585fe6df60e11b815260040160405180910390fd5b60006145ab826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166153b19092919063ffffffff16565b90508051600014806145cc5750808060200190518101906145cc91906161bd565b6116665760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610757565b6000806146388686613a48565b91506000614666837f000000000000000000000000000000000000000000000000000000000000000061280e565b9050614692817f000000000000000000000000000000000000000000000000000000000000000061280e565b915083156146b5576146a48282616072565b6146ae9084616072565b92506146cc565b6146bf8282616072565b6146c9908461605f565b92505b848610156146ef576146df8387876126ad565b92506146ec8287876126ad565b91505b5094509492505050565b600954600090819061471b90600160801b90046001600160801b031684613a48565b90506147477f00000000000000000000000000000000000000000000000000000000000000008261605f565b6008546001600160801b0316111561479f576008547f0000000000000000000000000000000000000000000000000000000000000000906147929083906001600160801b0316616072565b61479c9190616072565b91505b50919050565b60008084116147b457826147bf565b6147bf8386866126ad565b9050806000036147cf57506109ed565b8085838211156147ea578391506147e78783856126ad565b90505b6147f3826126cb565b600d805460009061480e9084906001600160801b03166160df565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061483b816126cb565b600d805460109061485d908490600160801b90046001600160801b03166160df565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506109d781613db890616179565b60008061489961221c565b90508083116148a95760006148b3565b6148b38184616072565b915061479c827f0000000000000000000000000000000000000000000000000000000000000000613a48565b600080806149006148f888670de0b6b3a7640000616072565b8990876126ad565b905061490c888861280e565b91508115614942576149338a8a8461492c8a670de0b6b3a7640000616072565b89896150f0565b925061493f838261605f565b90505b9750975097945050505050565b60006133ed826133d98588886126ad565b600061497e61497784670de0b6b3a7640000616072565b83906153c0565b61282390670de0b6b3a7640000616072565b600080614a0e8561499f613496565b6149a9919061605f565b6008546149c7908790600160801b90046001600160801b0316616072565b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061494f565b909210949350505050565b6013546001600160801b03600160801b82048116911642614a5a7f00000000000000000000000000000000000000000000000000000000000000008461605f565b1115614a6557505050565b600060128281548110614a7a57614a7a616049565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b031690614aae8342616072565b601254909150878202830190600090614ac888600161605f565b614ad291906160cb565b905060405180604001604052804263ffffffff168152602001836001600160e01b031681525060128281548110614b0b57614b0b616049565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b600080808080614bbe88876115948c61246d614b978d670de0b6b3a7640000616072565b7f00000000000000000000000000000000000000000000000000000000000000009061280e565b9450614bea857f000000000000000000000000000000000000000000000000000000000000000061280e565b92506000614c0b614c038a670de0b6b3a7640000616072565b8b90896126ad565b9050614c37817f000000000000000000000000000000000000000000000000000000000000000061280e565b9450614c63857f000000000000000000000000000000000000000000000000000000000000000061280e565b9250614c6f838561605f565b915050945094509450945094565b600080614c9685614c8e88876153c0565b8a91906126ad565b9050614ca38884866126ad565b614cad908261605f565b905086811115614cc457614cc18782616072565b91505b509695505050505050565b60008060008060008088881015614d2c578615614cf457614cf18d898b6126ad565b9c505b614cff8c898b6126ad565b9b50614d0b8b8d616159565b9050614d188b898b6126ad565b9a50614d258a898b6126ad565b9950614d39565b614d368b8d616159565b90505b9b9c9a9b999a975050505050505050565b60008115614d8a57614d83614d5f848761605f565b614d69858761280e565b614d73888a61280e565b614d7d919061605f565b90614e58565b90506133ed565b828503614d99575060006133ed565b6138bc614da68487616072565b614db0858761280e565b614dba888a61280e565b614d7d9190616072565b600060016001607f1b03198212801590614de5575060016001607f1b038213155b6126f15760405163a5353be560e01b815260040160405180910390fd5b60008183136128075781612823565b600081831361479f5782612823565b6040516001600160a01b03808516602483015283166044820152606481018290526109ed9085906323b872dd60e01b9060840161214d565b600061282383670de0b6b3a764000084614ee1565b600081600003614e865750670de0b6b3a764000061253b565b82600003614e965750600061253b565b816000614ea2856153d5565b9050818102614eb9670de0b6b3a7640000826161da565b90506138bc816155e8565b600080614ed18385616159565b9050600081121561282357600080fd5b6000826000190484118302158202614ef857600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000614f1b61221c565b614f259190616085565b9050808311614f35576000614f3f565b614f3f8184616072565b915061479c614f76670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000616085565b8390613a48565b600080614f8d8888878787615773565b90506000614faa614fa2876133d9878b6153c0565b869086614ee1565b614fb49083616072565b9050670de0b6b3a76400008110614fe857614fe1614fda670de0b6b3a764000088613a48565b8290614e6d565b9050615000565b614ffd614fda670de0b6b3a764000088614e58565b90505b61500a8882616072565b9998505050505050505050565b600081831161479f5782612823565b6000806150378888888888886157a2565b909250905080614cc457604051637ac17d2560e01b815260040160405180910390fd5b60008061506a8787878787615864565b90506000615095670de0b6b3a76400006150848787613a48565b61508e919061605f565b8390614e58565b9050670de0b6b3a764000081106150c2576150bb614fda670de0b6b3a764000088614e58565b90506150da565b6150d7614fda670de0b6b3a764000088613a48565b90505b6150e48188616072565b98975050505050505050565b6000806151008888878787615864565b9050615110856133d9888a616072565b9650600061512a84866151238b86616072565b9190614ee1565b9050670de0b6b3a7640000811061515757615150614fda670de0b6b3a764000088614e58565b905061516f565b61516c614fda670de0b6b3a764000088613a48565b90505b6151798185614e58565b905061500a8982616072565b60006151a687878761519f88670de0b6b3a7640000616072565b8787615889565b979650505050505050565b60006128236151dd670de0b6b3a76400006151cc8187614e58565b6151d69190616072565b84906153c0565b6151ef90670de0b6b3a764000061605f565b670de0b6b3a764000090613a48565b6000806152488561246d85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061523e818c613a48565b61246d9190616072565b9150615274827f000000000000000000000000000000000000000000000000000000000000000061280e565b9050935093915050565b60006152aa7f00000000000000000000000000000000000000000000000000000000000000008361280e565b6009546008546152e8916000916001600160801b03600160801b9092048216600f0b916152d891168761280e565b6152e29190616159565b90614e02565b121592915050565b60006152fe612468836134f2565b60008080526002602052600080516020616278833981519152549192509061532790859061605f565b9050610e0f858383876147a5565b60006151a687878761534f88670de0b6b3a7640000616072565b8787615026565b60008183116128075781612823565b6000808061537e6148f888670de0b6b3a7640000616072565b9050861561494257615390888861280e565b91506149338a8a846153aa8a670de0b6b3a7640000616072565b8989615026565b6060613106848460008561591d565b60006128238383670de0b6b3a7640000614ee1565b60008082136153f757604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361560357506000919050565b680755bf798b4a1bf1e5821261562c5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600061577f8585614e6d565b615798615790866133d9868b61280e565b8590856126ad565b6138bc919061605f565b60008060006157b48989888888615864565b90506157c4866133d9898b61605f565b9750878110156157db576000809250925050615859565b60006157ec85876151238c86616072565b9050670de0b6b3a7640000811061581957615812614fda670de0b6b3a764000089614e58565b9050615831565b61582e614fda670de0b6b3a764000089613a48565b90505b61583b8186614e58565b9050808a11156158525761584f818b616072565b93505b6001925050505b965096945050505050565b60006158708585614e6d565b615798615881866133d9868b6153c0565b859085614ee1565b6000806158998888878787615864565b90506158b3856133d96158ac898c61605f565b869061280e565b97506158c08489856126ad565b975060006158ce8983616072565b9050670de0b6b3a764000081106158fb576158f4614fda670de0b6b3a764000088614e58565b9050615913565b615910614fda670de0b6b3a764000088613a48565b90505b61500a8189616072565b60608247101561597e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610757565b600080866001600160a01b0316858760405161599a9190616208565b60006040518083038185875af1925050503d80600081146159d7576040519150601f19603f3d011682016040523d82523d6000602084013e6159dc565b606091505b50915091506151a68783838760608315615a57578251600003615a50576001600160a01b0385163b615a505760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610757565b5081613106565b6131068383815115615a6c5781518083602001fd5b8060405162461bcd60e51b81526004016107579190616224565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015615ac55780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015615afe578181015183820152602001615ae6565b50506000910152565b600060208284031215615b1957600080fd5b815167ffffffffffffffff80821115615b3157600080fd5b818401915084601f830112615b4557600080fd5b815181811115615b5757615b57615acd565b604051601f8201601f19908116603f01168101908382118183101715615b7f57615b7f615acd565b81604052828152876020848701011115615b9857600080fd5b6151a6836020830160208801615ae3565b6001600160a01b0381168114615bbe57600080fd5b50565b600060208284031215615bd357600080fd5b813561282381615ba9565b8015158114615bbe57600080fd5b600060208284031215615bfe57600080fd5b813561282381615bde565b60006060828403121561479f57600080fd5b600080600060608486031215615c3057600080fd5b8335925060208401359150604084013567ffffffffffffffff811115615c5557600080fd5b615c6186828701615c09565b9150509250925092565b60008083601f840112615c7d57600080fd5b50813567ffffffffffffffff811115615c9557600080fd5b6020830191508360208260051b850101111561338b57600080fd5b60008060008060008060808789031215615cc957600080fd5b8635615cd481615ba9565b95506020870135615ce481615ba9565b9450604087013567ffffffffffffffff80821115615d0157600080fd5b615d0d8a838b01615c6b565b90965094506060890135915080821115615d2657600080fd5b50615d3389828a01615c6b565b979a9699509497509295939492505050565b60008060008060808587031215615d5b57600080fd5b843593506020850135615d6d81615ba9565b92506040850135615d7d81615ba9565b9396929550929360600135925050565b60008060008060808587031215615da357600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115615dcf57600080fd5b615ddb87828801615c09565b91505092959194509250565b600060208284031215615df957600080fd5b813567ffffffffffffffff811115615e1057600080fd5b61310684828501615c09565b60008060008060808587031215615e3257600080fd5b843593506020850135615e4481615ba9565b9250604085013591506060850135615e5b81615ba9565b939692955090935050565b60008060408385031215615e7957600080fd5b8235615e8481615ba9565b91506020830135615e9481615bde565b809150509250929050565b600080600080600080600060e0888a031215615eba57600080fd5b8735615ec581615ba9565b96506020880135615ed581615ba9565b95506040880135615ee581615bde565b945060608801359350608088013560ff81168114615f0257600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080600060608486031215615f3457600080fd5b833592506020840135615f4681615ba9565b929592945050506040919091013590565b600080600080600060a08688031215615f6f57600080fd5b853594506020860135615f8181615ba9565b93506040860135615f9181615ba9565b9250606086013591506080860135615fa881615ba9565b809150509295509295909350565b600060208284031215615fc857600080fd5b5035919050565b600060208284031215615fe157600080fd5b5051919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6001600160801b038281168282160390808211156160425761604261600c565b5092915050565b634e487b7160e01b600052603260045260246000fd5b8082018082111561253b5761253b61600c565b8181038181111561253b5761253b61600c565b808202811582820484141761253b5761253b61600c565b6000600182016160ae576160ae61600c565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826160da576160da6160b5565b500690565b6001600160801b038181168382160190808211156160425761604261600c565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561253b5761253b61600c565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561253b5761253b61600c565b81810360008312801583831316838312821617156160425761604261600c565b6000600160ff1b820161618e5761618e61600c565b5060000390565b80820182811260008312801582168215821617156161b5576161b561600c565b505092915050565b6000602082840312156161cf57600080fd5b815161282381615bde565b6000826161e9576161e96160b5565b600160ff1b8214600019841416156162035761620361600c565b500590565b6000825161621a818460208701615ae3565b9190910192915050565b6020815260008251806020840152616243816040850160208701615ae3565b601f01601f1916919091016040019291505056fe3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba2646970667358221220d6d6771fa2c698160e09416057d7df2c4259a8354d3b5bc45c097b312fd5045164736f6c63430008130033",
    "sourceMap": "845:7592:13:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1214:12:0;1481;1495:23;1522:12;-1:-1:-1;;;;;1522:25:0;1561:5;;1522:54;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1480:96;;;;1590:7;1586:76;;;1620:31;;-1:-1:-1;;;1620:31:0;;;;;;;;;;;1586:76;1671:15;1689:18;1696:10;1689:18;:::i;:::-;1671:36;-1:-1:-1;;;;;;;1721:43:0;;-1:-1:-1;;;1721:43:0;1717:160;;1841:10;1835:17;1830:2;1818:10;1814:19;1807:46;1717:160;2099:17;;-1:-1:-1;;2095:25:0;;2118:1;2073:20;;2066:55;;;2073:20;2201:31;;;;;;;;;;:::i;:::-;845:7592:13;;;-1:-1:-1;845:7592:13;;;-1:-1:-1;;;;;845:7592:13;7840:595;;;;;;;;;;-1:-1:-1;7840:595:13;;;;;:::i;:::-;;:::i;:::-;;6884:156:2;;;;;;;;;;-1:-1:-1;6884:156:2;;;;;:::i;:::-;;:::i;13249:2358:4:-;;;;;;;;;;-1:-1:-1;13249:2358:4;;;;;:::i;:::-;;:::i;:::-;;;;3563:25:167;;;3619:2;3604:18;;3597:34;;;;3536:18;13249:2358:4;;;;;;;;11164:688:40;;;;;;;;;;-1:-1:-1;11164:688:40;;;;;:::i;:::-;;:::i;4263:249::-;;;;;;;;;;-1:-1:-1;4263:249:40;;;;;:::i;:::-;;:::i;5353:3775:6:-;;;;;;;;;;-1:-1:-1;5353:3775:6;;;;;:::i;:::-;;:::i;:::-;;;6343:25:167;;;6331:2;6316:18;5353:3775:6;6197:177:167;1190:174:40;;;;;;;;;;;;1240:124;1190:174;;1044:41;;;;;;;;;;;;;;;7865:907:2;;;;;;;;;;-1:-1:-1;7865:907:2;;;;;:::i;:::-;;:::i;8739:234:40:-;;;;;;;;;;-1:-1:-1;8739:234:40;;;;;:::i;:::-;;:::i;6167:200:2:-;;;;;;;;;;-1:-1:-1;6167:200:2;;;;;:::i;:::-;;:::i;1350:3453:4:-;;;;;;:::i;:::-;;:::i;12957:1339:40:-;;;;;;;;;;-1:-1:-1;12957:1339:40;;;;;:::i;:::-;;:::i;5214:3711:4:-;;;;;;:::i;:::-;;:::i;8073:188:40:-;;;;;;;;;;-1:-1:-1;8073:188:40;;;;;:::i;:::-;;:::i;7362:308::-;;;;;;;;;;-1:-1:-1;7362:308:40;;;;;:::i;:::-;;:::i;6538:194:2:-;;;;;;;;;;-1:-1:-1;6538:194:2;;;;;:::i;:::-;;:::i;644:37:0:-;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;9600:32:167;;;9582:51;;9570:2;9555:18;644:37:0;9436:203:167;1609:2614:5;;;;;;:::i;:::-;;:::i;9953:2560:4:-;;;;;;;;;;-1:-1:-1;9953:2560:4;;;;;:::i;:::-;;:::i;1610:3336:6:-;;;;;;:::i;:::-;;:::i;4632:3419:5:-;;;;;;;;;;-1:-1:-1;4632:3419:5;;;;;:::i;:::-;;:::i;4912:294:40:-;;;;;;;;;;-1:-1:-1;4912:294:40;;;;;:::i;:::-;;:::i;1987:1524:1:-;;;;;;;;;;-1:-1:-1;1987:1524:1;;;;;:::i;:::-;;:::i;7840:595:13:-;7962:10;-1:-1:-1;;;;;7976:13:13;7962:27;;;;;:52;;-1:-1:-1;8003:10:13;7994:20;;;;:8;:20;;;;;;;;7993:21;7962:52;7958:103;;;8035:26;;-1:-1:-1;;;8035:26:13;;;;;;;;;;;7958:103;-1:-1:-1;;;;;8140:29:13;;;;;;:11;:29;;;;;;;;8135:98;;8192:30;;-1:-1:-1;;;8192:30:13;;;;;;;;;;;8135:98;8342:32;;-1:-1:-1;;;8342:32:13;;8368:4;8342:32;;;9582:51:167;8324:15:13;;-1:-1:-1;;;;;8342:17:13;;;;;9555:18:167;;8342:32:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8324:50;-1:-1:-1;8384:44:13;-1:-1:-1;;;;;8384:20:13;;8405:13;8324:50;8384:20;:44::i;:::-;7880:555;7840:595;:::o;6884:156:2:-;6946:10;6937:20;;;;:8;:20;;;;;;;;6932:60;;6966:26;;-1:-1:-1;;;6966:26:2;;;;;;;;;;;6932:60;7002:21;:31;;;;;;;-1:-1:-1;;7002:31:2;;;;;;;;;6884:156::o;13249:2358:4:-;13460:16;13478:32;512:6:103;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:103;;;;;;;:::i;:::-;;;;;;;;;558:1;549:6;:10;;;13580:16:4::1;:14;:16::i;:::-;13559:37;;13606:49;13623:19;:17;:19::i;:::-;13644:10;13606:16;:49::i;:::-;;13780:33;13802:10;13780:21;:33::i;:::-;14097:13;:29:::0;14043:17;;-1:-1:-1;;;;;;14097:29:4::1;14140:43:::0;;::::1;14136:117;;;14226:16;-1:-1:-1::0;;;;;14199:43:4::1;;;14136:117;14266:24;14294:1;14266:29:::0;14262:48:::1;;14305:1;14308::::0;14297:13:::1;;;;;;;;14262:48;14365:125;-1:-1:-1::0;;;14432:10:4::1;14456:24:::0;14365:5:::1;:125::i;:::-;14591:13;:22:::0;-1:-1:-1;;;;;;;;14591:22:4;;::::1;::::0;::::1;::::0;14571:17:::1;::::0;14647:116:::1;::::0;:24;;14591:22;;14647:116;::::1;:35;:116::i;:::-;14623:140;;14901:36;:24;:34;:36::i;:::-;14870:67;::::0;:16;:67:::1;:::i;:::-;14826:13;:111:::0;;-1:-1:-1;;;;;;14826:111:4::1;-1:-1:-1::0;;;;;14826:111:4;;;::::1;::::0;;;::::1;::::0;;14973:25:::1;:13:::0;:23:::1;:25::i;:::-;14947:13;:51:::0;;:22:::1;::::0;:51:::1;::::0;;;-1:-1:-1;;;14947:51:4;::::1;-1:-1:-1::0;;;;;14947:51:4::1;;:::i;:::-;;;;;;;;-1:-1:-1::0;;;;;14947:51:4::1;;;;;-1:-1:-1::0;;;;;14947:51:4::1;;;;;;15053:34;15063:13;15078:8;15053:9;:34::i;:::-;15042:45:::0;-1:-1:-1;15042:45:4;15156:52:::1;:18:::0;15183:24;15156:26:::1;:52::i;:::-;:63;15152:113;;;15240:25;;-1:-1:-1::0;;;15240:25:4::1;;;;;;;;;;;15152:113;15365:20;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;15329:217:4::1;;15399:24:::0;15458:33:::1;:13:::0;15480:10;15458:21:::1;:33::i;:::-;15329:217;::::0;;11724:25:167;;;11780:2;11765:18;;11758:34;;;;11808:18;;11801:34;;;11712:2;11697:18;15329:217:4::1;;;;;;;15557:43;;;;570:1:103;591::::0;582:6;:10;13249:2358:4;;;;-1:-1:-1;13249:2358:4;-1:-1:-1;;13249:2358:4:o;11164:688:40:-;-1:-1:-1;;;;;11374:18:40;;;;:38;;-1:-1:-1;;;;;;11396:16:40;;;11374:38;11370:98;;;11433:35;;-1:-1:-1;;;11433:35:40;;;;;;;;;;;11370:98;11524:27;;;11520:90;;11572:38;;-1:-1:-1;;;11572:38:40;;;;;;;;;;;11520:90;11675:9;11670:176;11690:14;;;11670:176;;;11722:54;11736:3;;11740:1;11736:6;;;;;;;:::i;:::-;;;;;;;11744:4;11750:2;11754:6;;11761:1;11754:9;;;;;;;:::i;:::-;;;;;;;11765:10;11722:13;:54::i;:::-;11818:3;;11670:176;;;;11164:688;;;;;;:::o;4263:249::-;4453:52;4467:7;4476:4;4482:2;4486:6;4494:10;4453:13;:52::i;:::-;4263:249;;;;:::o;5353:3775:6:-;5545:7;512:6:103;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:103;;;;;;;:::i;:::-;558:1;549:6;:10;5582:25:6::1;5568:39:::0;::::1;5564:115;;;5630:38;;-1:-1:-1::0;;;5630:38:6::1;;;;;;;;;;;5564:115;5722:18;5743:16;:14;:16::i;:::-;5722:37;;5769:43;5786:13;5801:10;5769:16;:43::i;:::-;;5873:143;5892:65;5914:27;5943:13;5892:21;:65::i;:::-;5971:10;5995:11;5873:5;:143::i;:::-;6224:25;6263:21:::0;6298:26:::1;6338:23:::0;6375:27:::1;6416:26:::0;6455:60:::1;6476:11;6489:10;6501:13;6455:20;:60::i;:::-;6210:305:::0;;-1:-1:-1;6210:305:6;;-1:-1:-1;6210:305:6;;-1:-1:-1;6210:305:6;-1:-1:-1;6210:305:6;-1:-1:-1;6210:305:6;-1:-1:-1;6738:11:6;6813:13;6889:10;6944:15:::1;:30:::0;-1:-1:-1;6940:1242:6::1;;;7062:18;7036:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;7173:197:6::1;::::0;-1:-1:-1;7207:10:6;7235:17;7270:18;7306:20;7344:12;7173:16:::1;:197::i;:::-;7446:22;7471:32;7486:17;7471:12:::0;:32:::1;:::i;:::-;7517:31;7575:28:::0;;;:12:::1;:28;::::0;;;;:41;7446:57;;-1:-1:-1;;;;7575:41:6;;::::1;;;::::0;7644:264:::1;::::0;7698:10;;7726:15;;7759:17;;7794:18;;7830:12;;7860:11;;7644:36:::1;:264::i;:::-;8001:28;::::0;;;:12:::1;:28;::::0;;;;:41;7922:134:::1;::::0;::::1;::::0;;::::1;::::0;-1:-1:-1;;;8001:41:6;::::1;::::0;::::1;7922:19;:134::i;:::-;8137:34;8159:11;8137:21;:34::i;:::-;6976:1206;;6940:1242;8391:16;8410:34;8420:13;8435:8;8410:9;:34::i;:::-;8391:53:::0;-1:-1:-1;8540:8:6;8589:20:::1;8612:101;8391:53:::0;8672:10;8540:8;8612:24:::1;:101::i;:::-;8589:124;;8742:10;8727:12;:25;8723:88;;;8775:25;;-1:-1:-1::0;;;8775:25:6::1;;;;;;;;;;;8723:88;8920:64;8942:27;8971:12;8920:21;:64::i;:::-;8886:8;:20;;;;;;;;;;:::i;:::-;8862:233;::::0;;12472:25:167;;;12528:2;12513:18;;12506:34;;;12556:18;;;12549:34;;;12614:2;12599:18;;12592:34;;;-1:-1:-1;;;;;8862:233:6;;;::::1;::::0;::::1;::::0;12459:3:167;12444:19;8862:233:6::1;;;;;;;-1:-1:-1::0;;591:1:103;582:6;:10;9113:8:6;5353:3775;-1:-1:-1;;;;;;;;;;;;;;;5353:3775:6:o;7865:907:2:-;7979:16;512:6:103;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:103;;;;;;;:::i;:::-;558:1;549:6;:10;-1:-1:-1;;;;;8103:13:2::1;8079:37;:20;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;8079:37:2::1;;8075:110;;8139:35;;-1:-1:-1::0;;;8139:35:2::1;;;;;;;;;;;8075:110;8287:10;8278:20;::::0;;;:8:::1;:20;::::0;;;;;::::1;;8277:21;:64:::0;::::1;;;-1:-1:-1::0;8314:10:2::1;-1:-1:-1::0;;;;;8328:13:2::1;8314:27;;;8277:64;:105;;;;-1:-1:-1::0;8371:11:2::1;::::0;-1:-1:-1;;;;;8371:11:2::1;8357:10;:25;;8277:105;8260:191;;;8414:26;;-1:-1:-1::0;;;8414:26:2::1;;;;;;;;;;;8260:191;8563:22;::::0;;8531:29:::1;8595::::0;;;8645:42:::1;8563:22:::0;8678:8;8645:9:::1;:42::i;:::-;8634:53;;8723:13;-1:-1:-1::0;;;;;8702:63:2::1;;8738:8;8748:16;:14;:16::i;:::-;8702:63;::::0;;3563:25:167;;;3619:2;3604:18;;3597:34;;;;3536:18;8702:63:2::1;;;;;;;-1:-1:-1::0;591:1:103;582:6;:10;7865:907:2;;-1:-1:-1;7865:907:2:o;8739:234:40:-;8900:7;3063:32;3087:7;3063:23;:32::i;:::-;-1:-1:-1;;;;;3049:46:40;:10;-1:-1:-1;;;;;3049:46:40;;3045:116;;3118:32;;-1:-1:-1;;;3118:32:40;;;;;;;;;;;3045:116;8919:47:::1;8932:7;8941:8;8951:6;8959;8919:12;:47::i;:::-;8739:234:::0;;;;;:::o;6167:200:2:-;6249:11;;-1:-1:-1;;;;;6249:11:2;6235:10;:25;6231:64;;6269:26;;-1:-1:-1;;;6269:26:2;;;;;;;;;;;6231:64;-1:-1:-1;;;;;6305:13:2;;;;;;:8;:13;;;;;;:22;;-1:-1:-1;;6305:22:2;;;;;;;6342:18;;;6305:13;6342:18;6167:200;;:::o;1350:3453:4:-;1515:16;512:6:103;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:103;;;;;;;:::i;:::-;558:1;549:6;:10;1610:20:4::1;:18;:20::i;:::-;1706:26:::0;;::::1;;1702:100;;;1755:36;;-1:-1:-1::0;;;1755:36:4::1;;;;;;;;;;;1702:100;1930:19;1951:18:::0;1973:67:::1;1995:13;2022:8;1973;:67::i;:::-;1929:111:::0;;-1:-1:-1;1929:111:4;-1:-1:-1;2965:25:4::1;2969:21;2965:1;:25;:::i;:::-;2951:11;:39;2947:115;;;3013:38;;-1:-1:-1::0;;;3013:38:4::1;;;;;;;;;;;2947:115;3096:25;3100:21;3096:1;:25;:::i;:::-;3082:39;::::0;:11;:39:::1;:::i;:::-;3178:26:::0;:33;;-1:-1:-1;;3178:33:4::1;3207:4;3178:33;::::0;;3071:50;-1:-1:-1;3380:23:4::1;:11:::0;:21:::1;:23::i;:::-;3351:12;:52:::0;;-1:-1:-1;;;;;;3351:52:4::1;-1:-1:-1::0;;;;;3351:52:4;;;::::1;::::0;;;::::1;::::0;;3441:247:::1;:222;3515:11:::0;3544:18:::1;3580:4:::0;3602:17:::1;3637:12;3441:56;:222::i;:::-;:245;:247::i;:::-;3413:12;:275:::0;;-1:-1:-1;;;;;3413:275:4;;::::1;-1:-1:-1::0;;;3413:275:4::1;::::0;::::1;::::0;;;::::1;::::0;;4193:62:::1;3413:25;::::0;4233:21:::1;4193:5;:62::i;:::-;4265:59;554:1:32;4293:20:4;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;4315:8;4265:5;:59::i;:::-;4376:49;4393:19;:17;:19::i;4376:49::-;;4473:24;4500:107;4538:13;4565:10;4589:8;4500:24;:107::i;:::-;4473:134:::0;-1:-1:-1;4646:20:4::1;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;4622:148;::::0;;12472:25:167;;;12528:2;12513:18;;12506:34;;;12556:18;;;12549:34;;;12614:2;12599:18;;12592:34;;;-1:-1:-1;;;;;4622:148:4;;;::::1;::::0;::::1;::::0;12459:3:167;12444:19;4622:148:4::1;;;;;;;4781:15;;;591:1:103::0;582:6;:10;1350:3453:4;;-1:-1:-1;;;1350:3453:4:o;12957:1339:40:-;13232:8;13214:15;:26;13210:68;;;13249:29;;-1:-1:-1;;;13249:29:40;;;;;;;;;;;13210:68;-1:-1:-1;;;;;13338:19:40;;13334:67;;13366:35;;-1:-1:-1;;;13366:35:40;;;;;;;;;;;13334:67;-1:-1:-1;;;;;13759:14:40;;;13412:18;13759:14;;;:7;:14;;;;;;;;;13583:246;;1240:124;13583:246;;;13091:25:167;13170:18;;;13163:43;;;;13242:15;;;13222:18;;;13215:43;13301:14;;13294:22;13274:18;;;13267:50;13333:19;;;13326:35;;;;13377:19;;;;13370:35;;;13583:246:40;;;;;;;;;;13063:19:167;;;13583:246:40;;;13552:295;;;;;;;;-1:-1:-1;;;13456:405:40;;;13674:27:167;13518:16:40;13717:11:167;;;13710:27;13753:12;;;13746:28;13790:12;;13456:405:40;;;-1:-1:-1;;13456:405:40;;;;;;;;;13433:438;;13456:405;13433:438;;;;13927:14;13944:30;;;;;;;;;14040:25:167;;;14113:4;14101:17;;14081:18;;;14074:45;;;;14135:18;;;14128:34;;;14178:18;;;14171:34;;;13433:438:40;;-1:-1:-1;13927:14:40;13944:30;;14012:19:167;;13944:30:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13927:47;;13998:5;-1:-1:-1;;;;;13988:15:40;:6;-1:-1:-1;;;;;13988:15:40;;13984:58;;14012:30;;-1:-1:-1;;;14012:30:40;;;;;;;;;;;13984:58;-1:-1:-1;;;;;14096:14:40;;;;;;:7;:14;;;;;14094:16;;14096:14;;;14094:16;;;:::i;:::-;;;;-1:-1:-1;;;;;;14145:24:40;;;;;;;:17;:24;;;;;;;;:33;;;;;;;;;;;;;:45;;-1:-1:-1;;14145:45:40;;;;;;;;;;14248:41;;14496::167;;;14248::40;;14469:18:167;14248:41:40;;;;;;;13147:1149;;12957:1339;;;;;;;:::o;5214:3711:4:-;5421:16;512:6:103;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:103;;;;;;;:::i;:::-;558:1;549:6;:10;7154:21:2;;::::1;::::0;::::1;;;7150:54;;;7184:20;;-1:-1:-1::0;;;7184:20:2::1;;;;;;;;;;;7150:54;5516:20:4::2;:18;:20::i;:::-;5566:25;5550:13;:41;5546:117;;;5614:38;;-1:-1:-1::0;;;5614:38:4::2;;;;;;;;;;;5546:117;5712:11;5726:208;5771:25;:23;:25::i;:::-;5810:12;:25:::0;-1:-1:-1;;;5810:25:4;::::2;-1:-1:-1::0;;;;;5810:25:4::2;5849:18;5881:17;5912:12;5726:31;:208::i;:::-;5712:222;;5954:7;5948:3;:13;:30;;;;5971:7;5965:3;:13;5948:30;5944:67;;;5987:24;;-1:-1:-1::0;;;5987:24:4::2;;;;;;;;;;;5944:67;6091:19;6112:18:::0;6134:67:::2;6156:13;6183:8;6134;:67::i;:::-;6090:111;;;;6245:49;6262:19;:17;:19::i;6245:49::-;-1:-1:-1::0;6823:13:4::2;:29:::0;-1:-1:-1;;;6712:35:4::2;6750:70:::0;;;:12:::2;:70;::::0;-1:-1:-1;;;;;;;;;;;6750:70:4;6712:35;;6750:102:::2;::::0;-1:-1:-1;;;;;6823:29:4;;::::2;::::0;6750:102:::2;:::i;:::-;6862:21;6886:34:::0;;;:12:::2;:34;::::0;-1:-1:-1;;;;;;;;;;;6886:34:4;6712:140;;-1:-1:-1;6862:21:4;6886:76:::2;::::0;6712:140;;6886:76:::2;:::i;:::-;6862:100;;7027:26;7063:28:::0;7188:63:::2;7254:34;7277:10;7254:22;:34::i;:::-;7188:100;;7325:44;7362:6;7325:36;:44::i;:::-;7302:67;;7492:37;7516:11;7492:16;:37::i;:::-;7566:12;:26:::0;-1:-1:-1;;;;;7566:26:4;;::::2;7543:49:::0;;7631:28;;::::2;;7606:22;::::0;::::2;:53:::0;-1:-1:-1;;;7695:25:4;;::::2;;7673:19;::::0;::::2;:47:::0;7755:44:::2;7543:6:::0;7755:36:::2;:44::i;:::-;7734:65:::0;-1:-1:-1;8199:137:4::2;8271:13:::0;8302:20;8200:41:::2;8302:20:::0;7734:65;8200:41:::2;:::i;:::-;8199:54:::0;:137;:54:::2;:137::i;:::-;8188:148:::0;-1:-1:-1;8400:59:4::2;::::0;-1:-1:-1;554:1:32::2;8428:20:4;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;8450:8;8400:5;:59::i;:::-;8532:33;8554:10;8532:21;:33::i;:::-;8615:20;8638:18:::0;;:92:::2;;8687:43;:20:::0;8716:13;8687:28:::2;:43::i;:::-;8638:92;;;8671:1;8638:92;8615:115:::0;-1:-1:-1;8771:20:4::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;-1:-1:-1::0;;;;;8745:173:4::2;;8805:8:::0;8827:31:::2;:11:::0;8847:10;8827:19:::2;:31::i;:::-;8745:173;::::0;;12472:25:167;;;12528:2;12513:18;;12506:34;;;;12556:18;;12549:34;;;12614:2;12599:18;;12592:34;;;12459:3;12444:19;8745:173:4::2;;;;;;;-1:-1:-1::0;;591:1:103;582:6;:10;-1:-1:-1;5214:3711:4;;;-1:-1:-1;;;;;;;;;5214:3711:4:o;8073:188:40:-;8203:51;8216:7;8225:8;8235:6;8243:10;8203:12;:51::i;:::-;8073:188;;;:::o;7362:308::-;7527:10;7509:29;;;;:17;:29;;;;;;;;-1:-1:-1;;;;;7509:39:40;;;;;;;;;;;;:50;;-1:-1:-1;;7509:50:40;;;;;;;;;;7617:46;;14496:41:167;;;7509:39:40;;7527:10;7617:46;;14469:18:167;7617:46:40;;;;;;;7362:308;;:::o;6538:194:2:-;6612:11;;-1:-1:-1;;;;;6612:11:2;6598:10;:25;6594:64;;6632:26;;-1:-1:-1;;;6632:26:2;;;;;;;;;;;6594:64;6668:11;:18;;-1:-1:-1;;;;;;6668:18:2;-1:-1:-1;;;;;6668:18:2;;;;;;;;6702:23;;;;-1:-1:-1;;6702:23:2;6538:194;:::o;1609:2614:5:-;1856:20;1878;512:6:103;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:103;;;;;;;:::i;:::-;558:1;549:6;:10;7154:21:2;;::::1;::::0;::::1;;;7150:54;;;7184:20;;-1:-1:-1::0;;;7184:20:2::1;;;;;;;;;;;7150:54;1964:20:5::2;:18;:20::i;:::-;2040:23;2065:18:::0;2087:61:::2;2109:7;2130:8;2087;:61::i;:::-;2039:109;;;;2214:21;2238:101;2276:7;2297:10;2321:8;2238:24;:101::i;:::-;2214:125;;2369:25;2353:13;:41;2349:117;;;2417:38;;-1:-1:-1::0;;;2417:38:5::2;;;;;;;;;;;2349:117;2492:14;2479:10;:27;2475:96;;;2529:31;;-1:-1:-1::0;;;2529:31:5::2;;;;;;;;;;;2475:96;2614:24;2641:19;:17;:19::i;:::-;2614:46;;2670;2687:16;2705:10;2670:16;:46::i;:::-;;2880:26;2916:25:::0;2951:26:::2;3121:47;3140:15;3157:10;3121:18;:47::i;:::-;2987:181:::0;;-1:-1:-1;2987:181:5;;-1:-1:-1;2987:181:5;-1:-1:-1;2987:181:5;-1:-1:-1;3219:25:5;;::::2;3215:63;;;3253:25;;-1:-1:-1::0;;;3253:25:5::2;;;;;;;;;;;3215:63;3356:18;3330:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;3445:36:5::2;::::0;-1:-1:-1;3464:17:5::2;3445:16:::0;:36:::2;:::i;:::-;3430:51;;3491:193;3519:18;3551:12;3577:17;3608:10;3632:16;3662:12;3491:14;:193::i;:::-;3768:15;3786:97;3821:26;3861:12;3786:21;:97::i;:::-;3768:115:::0;-1:-1:-1;3893:50:5::2;3768:115:::0;3908:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;3930:12;3893:5;:50::i;:::-;4050:7:::0;4016:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;3994:176;::::0;;12472:25:167;;;12528:2;12513:18;;12506:34;;;12556:18;;;12549:34;;;12614:2;12599:18;;12592:34;;;-1:-1:-1;;;;;3994:176:5;;;::::2;::::0;::::2;::::0;12459:3:167;12444:19;3994:176:5::2;;;;;;;4181:35;;;;;;;;591:1:103::0;582:6;:10;1609:2614:5;;;;-1:-1:-1;1609:2614:5;-1:-1:-1;;;1609:2614:5:o;9953:2560:4:-;10141:16;10159:24;512:6:103;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:103;;;;;;;:::i;:::-;558:1;549:6;:10;10215:25:4::1;10203:37:::0;::::1;10199:113;;;10263:38;;-1:-1:-1::0;;;10263:38:4::1;;;;;;;;;;;10199:113;10355:18;10376:16;:14;:16::i;:::-;10355:37;;10402:49;10419:19;:17;:19::i;10402:49::-;;10668:33;10690:10;10668:21;:33::i;:::-;10773:12;:34;::::0;-1:-1:-1;;;;;;;;;;;10773:34:4;10928:13:::1;:29:::0;-1:-1:-1;;;10743:27:4::1;10855:70:::0;;;-1:-1:-1;;;;;;;;;;;10855:70:4;10743:27;;10855:102:::1;::::0;-1:-1:-1;;;;;10928:29:4;;::::1;::::0;10855:102:::1;:::i;:::-;10817:140:::0;-1:-1:-1;10967:21:4::1;10991:61;10817:140:::0;10991:19;:61:::1;:::i;:::-;10967:85;;11062:50;554:1:32;11090:10:4;11102:9;11062:5;:50::i;:::-;11170:21;11201:28:::0;11343:179:::1;11378:9;11401:10;11425:13;11452:19;11485:27;11343:21;:179::i;:::-;11239:283:::0;;-1:-1:-1;11239:283:4;;-1:-1:-1;11239:283:4;-1:-1:-1;11582:127:4::1;-1:-1:-1::0;;;11649:20:4::1;;::::0;::::1;::::0;::::1;:::i;:::-;11683:16;11582:5;:127::i;:::-;11785:34;11795:13;11810:8;11785:9;:34::i;:::-;11774:45;;11866:20;11889:102;11927:8;11949:10;11973:8;11889:24;:102::i;:::-;11866:125;;12018:8;12005:10;:21;12001:59;;;12035:25;;-1:-1:-1::0;;;12035:25:4::1;;;;;;;;;;;12001:59;12112:20;12135:18:::0;;:92:::1;;12184:43;:20:::0;12213:13;12184:28:::1;:43::i;:::-;12135:92;;;12168:1;12135:92;12112:115:::0;-1:-1:-1;12271:20:4::1;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;12242:218;::::0;;14807:25:167;;;14863:2;14848:18;;14841:34;;;14891:18;;;14884:34;;;14949:2;14934:18;;14927:34;;;14992:3;14977:19;;14970:35;;;-1:-1:-1;;;;;12242:218:4;;;::::1;::::0;::::1;::::0;14794:3:167;14779:19;12242:218:4::1;;;;;;;12471:35;;;;;;;;591:1:103::0;582:6;:10;9953:2560:4;;;;-1:-1:-1;9953:2560:4;-1:-1:-1;;9953:2560:4:o;1610:3336:6:-;1823:7;1832;512:6:103;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:103;;;;;;;:::i;:::-;558:1;549:6;:10;7154:21:2;;::::1;::::0;::::1;;;7150:54;;;7184:20;;-1:-1:-1::0;;;7184:20:2::1;;;;;;;;;;;7150:54;1918:20:6::2;:18;:20::i;:::-;1966:25;1952:11;:39;1948:115;;;2014:38;;-1:-1:-1::0;;;2014:38:6::2;;;;;;;;;;;1948:115;2389:18;2410:16;:14;:16::i;:::-;2389:37;;2453:14;2440:10;:27;2436:96;;;2490:31;;-1:-1:-1::0;;;2490:31:6::2;;;;;;;;;;;2436:96;2541:24;2568:19;:17;:19::i;:::-;2541:46;;2597:22;2622:46;2639:16;2657:10;2622:16;:46::i;:::-;2597:71:::0;-1:-1:-1;2827:20:6::2;2850:36;2869:17;2850:16:::0;:36:::2;:::i;:::-;2827:59;;2896:26;2932:21:::0;2977:26:::2;3137:60;3157:11;3170:10;3182:14;3137:19;:60::i;:::-;3017:180:::0;;-1:-1:-1;3017:180:6;;-1:-1:-1;3017:180:6;-1:-1:-1;3354:125:6::2;3017:180:::0;3429:10;3457:8;3354:26:::2;:125::i;:::-;3338:141;;3566:18;3540:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;;;3871:27:6;;::::2;3867:90;;;3921:25;;-1:-1:-1::0;;;3921:25:6::2;;;;;;;;;;;3867:90;3967:23;3996:33;4005:13;4020:8;3996;:33::i;:::-;3966:63;;;4104:132;4133:11;4158:18;4190:10;4214:12;4104:15;:132::i;:::-;4396:15;4414:98;4449:27;4490:12;4414:21;:98::i;:::-;4396:116:::0;-1:-1:-1;4543:11:6;4595:48:::2;4396:116:::0;4610:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;4632:10;4595:5;:48::i;:::-;4752:7:::0;4718:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;-1:-1:-1::0;;;;;4695:197:6::2;;4773:12:::0;4799:35:::2;:15:::0;4823:10;4799:23:::2;:35::i;:::-;4695:197;::::0;;12472:25:167;;;12528:2;12513:18;;12506:34;;;;12556:18;;12549:34;;;12614:2;12599:18;;12592:34;;;12459:3;12444:19;4695:197:6::2;;;;;;;-1:-1:-1::0;;591:1:103;582:6;:10;-1:-1:-1;4911:12:6;;4925:13;;-1:-1:-1;1610:3336:6;;-1:-1:-1;;;;;;;;;1610:3336:6:o;4632:3419:5:-;4823:7;512:6:103;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:103;;;;;;;:::i;:::-;558:1;549:6;:10;4860:25:5::1;4846:39:::0;::::1;4842:115;;;4908:38;;-1:-1:-1::0;;;4908:38:5::1;;;;;;;;;;;4842:115;5190:18;5211:16;:14;:16::i;:::-;5190:37;;5237:43;5254:13;5269:10;5237:16;:43::i;:::-;;5340:142;5359:64;5381:26;5409:13;5359:21;:64::i;5340:142::-;5581:25;5620:21:::0;5655:26:::1;5695:23:::0;5732:27:::1;5773:26:::0;5812:59:::1;5832:11;5845:10;5857:13;5812:19;:59::i;:::-;5567:304;;;;;;;;;;;;6072:20;6095:13;6072:36;;6171:13;6153:15;:31;6149:1161;;;6271:18;6245:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;6303:197:5::1;::::0;-1:-1:-1;6336:11:5;6365:17;6400:18;6436:20;6474:12;6303:15:::1;:197::i;:::-;6576:22;6601:32;6616:17;6601:12:::0;:32:::1;:::i;:::-;6647:31;6705:28:::0;;;:12:::1;:28;::::0;;;;:41;6576:57;;-1:-1:-1;;;;6705:41:5;::::1;;;6774:263;6828:11:::0;6857:15;6890:17;6925:18;6961:12;6991:10;7019:4:::1;6774:36;:263::i;:::-;7130:28;::::0;;;:12:::1;:28;::::0;;;;:41;7051:134:::1;::::0;::::1;::::0;;::::1;::::0;-1:-1:-1;;;7130:41:5;::::1;::::0;::::1;7051:19;:134::i;:::-;7266:33;7288:10;7266:21;:33::i;:::-;6186:1124;;6149:1161;7366:16;7385:34;7395:13;7410:8;7385:9;:34::i;:::-;7366:53;;7466:20;7489:102;7527:8;7549:10;7573:8;7489:24;:102::i;:::-;7466:125;;7618:12;7605:10;:25;7601:63;;;7639:25;;-1:-1:-1::0;;;7639:25:5::1;;;;;;;;;;;7601:63;7731:11:::0;7845:63:::1;7867:26;7895:12:::0;7845:21:::1;:63::i;:::-;7811:20;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;7788:230;::::0;;12472:25:167;;;12528:2;12513:18;;12506:34;;;12556:18;;;12549:34;;;12614:2;12599:18;;12592:34;;;-1:-1:-1;;;;;7788:230:5;;;::::1;::::0;::::1;::::0;12459:3:167;12444:19;7788:230:5::1;;;;;;;-1:-1:-1::0;;591:1:103;582:6;:10;8036:8:5;4632:3419;-1:-1:-1;;;;;;;;;;;;;4632:3419:5:o;4912:294:40:-;5090:7;3063:32;3087:7;3063:23;:32::i;:::-;-1:-1:-1;;;;;3049:46:40;:10;-1:-1:-1;;;;;3049:46:40;;3045:116;;3118:32;;-1:-1:-1;;;3118:32:40;;;;;;;;;;;3045:116;5151:48:::1;5165:7;5174:4;5180:2;5184:6;5192;5151:13;:48::i;:::-;4912:294:::0;;;;;;:::o;1987:1524:1:-;2118:29;;;;:12;:29;;;;;:40;-1:-1:-1;;;;;2118:40:1;:45;2114:82;;1987:1524;:::o;2114:82::-;2375:24;2402:19;:17;:19::i;:::-;2375:46;-1:-1:-1;2448:37:1;2466:19;2448:15;:37;:::i;:::-;:42;;;:92;;;2525:15;2506:16;:34;2448:92;2431:187;;;2572:35;;-1:-1:-1;;;2572:35:1;;;;;;;;;;;2431:187;2871:16;2852:15;:35;2848:657;;2903:52;2920:16;2938;:14;:16::i;:::-;2903;:52::i;2848:657::-;3023:15;2986:509;3134:25;3162:18;;;:12;:18;;;;;:29;-1:-1:-1;;;;;3162:29:1;3213:24;;;3209:107;;3281:16;:14;:16::i;:::-;3261:36;;3209:107;3337:22;;3333:148;;3383:52;3400:15;3417:17;3383:16;:52::i;3333:148::-;-1:-1:-1;3074:27:1;3082:19;3074:27;;:::i;:::-;;;2986:509;;941:175:88;1050:58;;-1:-1:-1;;;;;15457:32:167;;1050:58:88;;;15439:51:167;15506:18;;;15499:34;;;1023:86:88;;1043:5;;-1:-1:-1;;;1073:23:88;15412:18:167;;1050:58:88;;;;-1:-1:-1;;1050:58:88;;;;;;;;;;;;;;-1:-1:-1;;;;;1050:58:88;-1:-1:-1;;;;;;1050:58:88;;;;;;;;;;1023:19;:86::i;6946:134:13:-;7030:43;;-1:-1:-1;;;7030:43:13;;565:4:33;7030:43:13;;;6343:25:167;7004:7:13;;7030:4;-1:-1:-1;;;;;7030:20:13;;;;6316:18:167;;7030:43:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;7023:50;;6946:134;:::o;7834:223:7:-;7910:24;8012:37;8030:19;8012:15;:37;:::i;:::-;7981:69;;:15;:69;:::i;3756:4414:1:-;3877:7;4009:51;;;:12;:51;;;;;4074:22;;-1:-1:-1;;;;;4074:22:1;:27;;;:64;;;4123:15;4105;:33;4074:64;4070:124;;;4161:22;-1:-1:-1;;;;;4161:22:1;;-1:-1:-1;4154:29:1;;4070:124;4275:23;:11;:21;:23::i;:::-;4250:48;;-1:-1:-1;;;;;;4250:48:1;-1:-1:-1;;;;;4250:48:1;;;;;;;-1:-1:-1;4787:12:1;-1:-1:-1;4813:35:1;4831:17;4813:15;:35;:::i;:::-;4787:71;;;;;;;;;;;-1:-1:-1;4787:71:1;;;:82;-1:-1:-1;;;;;4787:82:1;;-1:-1:-1;4902:101:1;4937:27;4978:15;4902:21;:101::i;:::-;5013:27;5043:26;;;:12;:26;;;;;;4879:124;;-1:-1:-1;5113:23:1;;5109:667;;5170:21;5209;5247:180;5294:19;5335:11;5368:14;5404:5;5247:25;:180::i;:::-;5152:275;;;;5467:13;5441:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5494:235:1;;-1:-1:-1;5528:19:1;5565:1;5584:13;;5700:15;5494:16;:235::i;:::-;5761:4;5743:22;;5138:638;;5109:667;5894:19;5916:100;5951:26;5991:15;5916:21;:100::i;:::-;6026:26;6055:25;;;:12;:25;;;;;;5894:122;;-1:-1:-1;6094:22:1;;6090:745;;6150:21;6189;6227:178;6274:18;6314:11;6347:14;6383:4;6227:25;:178::i;:::-;6132:273;;;;6445:13;6419:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;6497:15:1;;-1:-1:-1;6556:232:1;6589:18;6472:22;6644:13;;6497:15;6556;:232::i;:::-;6820:4;6802:22;;6118:717;;;6090:745;6906:15;6902:547;;;6937:20;6960:35;6978:17;6960:15;:35;:::i;:::-;7009:31;7067:26;;;:12;:26;;;;;:39;;-1:-1:-1;;;;;7134:43:1;;;;;;6937:58;;-1:-1:-1;;;;7067:39:1;;;;;;;;;7191:132;;7067:39;;7270;;;;;7191:19;:132::i;:::-;7404:34;7426:11;7404:21;:34::i;:::-;6923:526;;6902:547;7459:20;7496:1;7482:11;:15;:174;;7655:1;7482:174;;;7512:128;7628:11;7512:90;7566:35;7589:11;7566:22;:35::i;:::-;7512:53;:90::i;:::-;:115;;:128::i;:::-;7802:13;:29;7739:12;:48;;-1:-1:-1;;;;;;;;;;;7739:48:1;7666:21;7690:34;;;-1:-1:-1;;;;;;;;;;;7690:34:1;7459:197;;-1:-1:-1;7666:21:1;-1:-1:-1;;;;;7802:29:1;;;;7690:97;;7739:48;7690:97;:::i;:::-;:141;;;;:::i;:::-;7666:165;-1:-1:-1;7841:20:1;7864:18;;:84;;7913:35;:12;7934:13;7913:20;:35::i;:::-;7864:84;;;7897:1;7864:84;7963:171;;;12472:25:167;;;12528:2;12513:18;;12506:34;;;12556:18;;;12549:34;;;12614:2;12599:18;;12592:34;;;7841:107:1;;-1:-1:-1;7993:15:1;;7963:171;;12459:3:167;12444:19;7963:171:1;;;;;;;8152:11;8145:18;;;;;;;;;;;;3756:4414;;;;;:::o;22590:1546:4:-;22799:12;:34;;-1:-1:-1;;;;;;;;;;;22799:34:4;22954:13;:29;-1:-1:-1;;;22774:22:4;22881:70;;;-1:-1:-1;;;;;;;;;;;22881:70:4;22774:22;;22881:102;;-1:-1:-1;;;;;22954:29:4;;;;22881:102;:::i;:::-;22843:140;-1:-1:-1;22993:21:4;23017:44;22843:140;23017:14;:44;:::i;:::-;22993:68;;23071:20;23094:95;23144:35;23167:11;23144:22;:35::i;23094:95::-;23071:118;-1:-1:-1;23199:21:4;23223:88;:14;23071:118;23288:13;23223:25;:88::i;:::-;23199:112;;23669:26;23709:12;23724:40;23752:11;23724:27;:40::i;:::-;23709:55;;23785:13;23778:4;:20;23774:92;;;23835:20;23842:13;23835:4;:20;:::i;:::-;23814:41;;23774:92;23900:1;23879:18;:22;:43;;;-1:-1:-1;23905:17:4;;23879:43;23875:255;;;23938:181;23981:18;24017:12;24047:13;24078:27;23938:25;:181::i;:::-;22651:1485;;;;;;;22590:1546;:::o;10552:330:40:-;10681:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;10681:25:40;;;;;;;;;:35;;10710:6;;10681:19;:35;;10710:6;;10681:35;:::i;:::-;;;;-1:-1:-1;;10726:21:40;;;;:12;:21;;;;;:31;;10751:6;;10726:21;:31;;10751:6;;10726:31;:::i;:::-;;;;-1:-1:-1;;10814:61:40;;;3563:25:167;;;3619:2;3604:18;;3597:34;;;10855:1:40;;-1:-1:-1;;;;;10814:61:40;;;10829:10;;10814:61;;3536:18:167;10814:61:40;;;;;;;;10552:330;;;:::o;984:556:33:-;1100:9;1365:1;-1:-1:-1;;1348:19:33;1345:1;1342:26;1339:1;1335:34;1328:42;1315:11;1311:60;1284:146;;1414:1;1411;1404:12;1284:146;-1:-1:-1;1501:9:33;;1497:27;;984:556::o;640:190:35:-;693:9;-1:-1:-1;;;720:1:35;:12;714:86;;756:33;;-1:-1:-1;;;756:33:35;;;;;;;;;;;714:86;-1:-1:-1;821:1:35;640:190::o;6102:659:13:-;6226:23;6265:15;;;;;;;;:::i;:::-;6261:494;;;-1:-1:-1;;;;;6433:4:13;:11;;6462:7;6487:20;;;;:8;:20;:::i;:::-;6433:119;;-1:-1:-1;;;;;;6433:119:13;;;;;;;;;;15746:25:167;;;;-1:-1:-1;;;;;15845:15:167;15825:18;;;15818:43;6533:4:13;15877:18:167;;;15870:43;15719:18;;6433:119:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6415:137;;6261:494;;;6640:65;6675:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;6655:4:13;6640:34;;6697:7;6640:34;:65::i;:::-;-1:-1:-1;6737:7:13;;6102:659;-1:-1:-1;6102:659:13:o;1814:119:33:-;1876:7;1903:22;1914:1;1917;1920:4;1903:10;:22::i;:::-;1895:31;1814:119;-1:-1:-1;;;1814:119:33:o;5568:1565:40:-;-1:-1:-1;;;;;5780:18:40;;;;:38;;-1:-1:-1;;;;;;5802:16:40;;;5780:38;5776:98;;;5839:35;;-1:-1:-1;;;5839:35:40;;;;;;;;;;;5776:98;5983:4;-1:-1:-1;;;;;5973:14:40;:6;-1:-1:-1;;;;;5973:14:40;;5969:871;;-1:-1:-1;;;;;6123:23:40;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;6118:712;;6232:16;6251:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;6251:33:40;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;6367:29:40;;6363:453;;6746:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;6746:33:40;;;;;;;;;;;:41;;;;;;;;;;:51;;6791:6;;6746:27;:51;;6791:6;;6746:51;:::i;:::-;;;;-1:-1:-1;;6363:453:40;6156:674;6118:712;6984:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6984:25:40;;;;;;;;;:35;;7013:6;;6984:19;:35;;7013:6;;6984:35;:::i;:::-;;;;-1:-1:-1;;7029:19:40;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;7029:23:40;;;;;;;;;:33;;7056:6;;7029:19;:33;;7056:6;;7029:33;:::i;:::-;;;;-1:-1:-1;;7077:49:40;;;3563:25:167;;;3619:2;3604:18;;3597:34;;;-1:-1:-1;;;;;7077:49:40;;;;;;;;;;;;;;3536:18:167;7077:49:40;;;;;;;5568:1565;;;;;:::o;1198:469:32:-;1309:10;-1:-1:-1;;;;;1401:10:32;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:32;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:32;1620:18;;;;1617:34;;1198:469::o;19458:6485:6:-;19630:25;19669:21;19704:26;19744:23;19781:27;19822:26;20542:21;20566:38;20590:13;20566:23;:38::i;:::-;20542:62;;20739:289;20791:25;:23;:25::i;:::-;20834:12;:25;-1:-1:-1;;;20834:25:6;;-1:-1:-1;;;;;20834:25:6;20877:11;20906:13;20937:12;20967:11;20996:18;20739:34;:289::i;:::-;20618:410;;-1:-1:-1;20618:410:6;-1:-1:-1;20618:410:6;-1:-1:-1;21173:17:6;21193:199;21244:25;:23;:25::i;:::-;21287:12;:25;-1:-1:-1;;;21287:25:6;;-1:-1:-1;;;;;21287:25:6;21330:18;21366:12;21193:33;:199::i;:::-;21173:219;;21427:273;21468:15;21505:17;21544:138;21616:9;21651;21544:46;:138::i;:::-;21427:19;:273::i;:::-;21406:379;;;21740:30;;-1:-1:-1;;;21740:30:6;;;;;;;;;;;21406:379;21866:22;21878:9;21866:11;:22::i;:::-;22143:11;22214;22122:18;;;22542:152;22143:11;22612:13;22643:9;22214:11;22542:24;:152::i;:::-;22363:331;-1:-1:-1;22363:331:6;;-1:-1:-1;22363:331:6;;-1:-1:-1;22363:331:6;-1:-1:-1;23342:29:6;;-1:-1:-1;22363:331:6;;23342:29;:::i;:::-;23323:48;;;;:::i;:::-;;-1:-1:-1;23645:18:6;23656:7;23645:8;:18;:::i;:::-;23623:40;;;;:::i;:::-;;;20094:3580;;;;;;;23831:22;23856:12;:77;23902:17;23886:13;:33;;;;:::i;:::-;23856:77;;;;;;;;;;;-1:-1:-1;23856:77:6;;;:88;-1:-1:-1;;;;;23856:88:6;;-1:-1:-1;23984:15:6;:31;-1:-1:-1;23984:118:6;;24064:27;;;;:12;:27;;;;;:38;-1:-1:-1;;;;;24064:38:6;23984:118;;;24034:11;23984:118;23958:144;;24667:236;24722:11;24751:18;24787:14;24819:15;24852:11;24881:8;24667:37;:236::i;:::-;24651:252;-1:-1:-1;25109:40:6;25131:18;25109:40;;:::i;:::-;;;25641:285;25706:13;25737:18;25773:15;25806:18;25842:14;25874:15;25907:5;25641:47;:285::i;:::-;19458:6485;;25450:476;;-1:-1:-1;25450:476:6;;-1:-1:-1;25450:476:6;-1:-1:-1;25450:476:6;;-1:-1:-1;19458:6485:6;-1:-1:-1;;;;;;19458:6485:6:o;13001:1212::-;13321:30;;-1:-1:-1;;;13321:30:6;;-1:-1:-1;;;;;13321:30:6;13405:337;:308;13321:30;13582:20;:13;13598:4;13582:20;:::i;:::-;13430:37;;-1:-1:-1;;;13430:37:6;;-1:-1:-1;;;;;13430:37:6;;;13657:11;13690:5;13405:115;:308::i;:337::-;13365:37;:377;;-1:-1:-1;;;;;13365:377:6;;;-1:-1:-1;;;13365:377:6;;;;;;;;;13901:23;:11;:21;:23::i;:::-;13864:60;;:18;:60;:::i;:::-;13815:30;:109;;-1:-1:-1;;;;;13815:109:6;;;-1:-1:-1;;;13815:109:6;;;;;;;;;-1:-1:-1;14032:31:6;:19;:29;:31::i;:::-;14002:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;14002:61:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;14002:61:6;;;;;-1:-1:-1;;;;;14002:61:6;;;;;;14105:32;:21;:30;:32::i;:::-;14073:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;14073:64:6;;;;;;;-1:-1:-1;;;;;14073:64:6;;;;;;14176:30;:18;:28;:30::i;:::-;14147:12;:59;;:25;;:59;;;;-1:-1:-1;;;14147:59:6;;-1:-1:-1;;;;;14147:59:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;14147:59:6;;;;;-1:-1:-1;;;;;14147:59:6;;;;;;13001:1212;;;;;:::o;11253:1758:2:-;11541:22;11566:33;11582:17;11566:13;:33;:::i;:::-;11541:58;;11609:23;11635:12;:100;11661:64;11683:26;11711:13;11661:21;:64::i;:::-;11635:100;;;;;;;;;;;;11609:126;;11745:24;11772:12;:101;11798:65;11820:27;11849:13;11798:21;:65::i;:::-;11772:101;;;;;;;;;;;;11745:128;;11967:15;11986:1;11967:20;:45;;;;-1:-1:-1;11991:21:2;;11967:45;11963:1042;;;12072:1;12028:28;;;:12;:28;;;;;:45;;-1:-1:-1;;;;;12028:45:2;;;11963:1042;;;12338:12;12377:212;12565:11;12502:40;:19;12530:11;12502:27;:40::i;:::-;12478:64;;:1;:64;:::i;:::-;12437:18;12378:36;:15;12402:11;12378:23;:36::i;:::-;:77;;;;:::i;:::-;:164;;;;:::i;:::-;:198;;;;:::i;12377:212::-;12338:265;;12814:7;12810:185;;;12841:28;;;;:12;:28;;;;;:50;;12886:5;;12841:28;:41;;:50;;12886:5;;-1:-1:-1;;;12841:50:2;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12841:50:2;;;;;;;-1:-1:-1;;;;;12841:50:2;;;;;;12810:185;;;12930:28;;;;:12;:28;;;;;:50;;12975:5;;12930:28;:41;;:50;;12975:5;;-1:-1:-1;;;12930:50:2;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12930:50:2;;;;;;;-1:-1:-1;;;;;12930:50:2;;;;;;12810:185;12090:915;11963:1042;11531:1480;;;11253:1758;;;;;;;:::o;13182:890::-;13335:6;13325:7;:16;:32;;;;;13356:1;13345:7;:12;;13325:32;13321:745;;;13373:12;13405:13;:6;13373:12;13405:10;:13::i;:::-;13395:23;;:7;:23;:::i;:::-;13617:25;;13373:46;;-1:-1:-1;13600:55:2;;:44;;13373:46;;-1:-1:-1;;;13617:25:2;;-1:-1:-1;;;;;13617:25:2;13600:44;;:9;:44::i;:::-;:53;:55::i;:::-;13546:25;:123;;:25;;:123;;;;-1:-1:-1;;;13546:123:2;;-1:-1:-1;;;;;13546:123:2;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13546:123:2;;;;;-1:-1:-1;;;;;13546:123:2;;;;;;13359:321;7880:555:13;7840:595;:::o;13321:745:2:-;13767:7;13758:6;:16;13754:312;;;13805:1;13794:7;:12;13790:266;;13904:18;:7;:16;:18::i;:::-;13884:17;:6;:15;:17::i;:::-;:38;;;;:::i;:::-;13826:25;:114;;:25;;:114;;;;-1:-1:-1;;;13826:114:2;;-1:-1:-1;;;;;13826:114:2;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13826:114:2;;;;;-1:-1:-1;;;;;13826:114:2;;;;;;7880:555:13;7840:595;:::o;13790:266:2:-;14016:24;:13;:6;14027:1;14016:10;:13::i;20580:315::-;20744:7;20767:15;;;;;;;;:::i;:::-;20763:126;;;-1:-1:-1;20805:7:2;20798:14;;20763:126;20850:28;:7;20866:11;20850:15;:28::i;:::-;20843:35;20580:315;-1:-1:-1;;;;20580:315:2:o;3455:503:40:-;3650:34;;;3669:4;3650:34;;;;15439:51:167;;;;15506:18;;;15499:34;;;;3650::40;;;;;;;;;15412:18:167;;;;3650:34:40;;3640:45;;;;;;;;;-1:-1:-1;;;;;;3822:63:40;;;17046:39:167;3853:8:40;17118:15:167;;;-1:-1:-1;;17114:53:167;17101:11;;;17094:74;17184:12;;;17177:28;3869:15:40;17221:12:167;;;;17214:28;;;;3822:63:40;;;;;;;;;;17258:12:167;;;;3822:63:40;;;3799:96;;;;;;3455:503::o;9407:299::-;9553:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;9553:35:40;;;;;;;;;;;;:45;;;;;;;;;;;;;:54;;;9665:34;;6343:25:167;;;9553:35:40;;9665:34;;6316:18:167;9665:34:40;;;;;;;9407:299;;;;:::o;4142:144:2:-;4208:9;:14;4204:76;;4245:24;;-1:-1:-1;;;4245:24:2;;;;;;;;;;;4204:76;4142:144::o;4411:1026:13:-;4534:20;;4590:15;;;;;;;;:::i;:::-;4586:845;;;4673:63;-1:-1:-1;;;;;4673:10:13;:27;4701:10;4721:4;4728:7;4673:27;:63::i;:::-;4821:36;;-1:-1:-1;;;4821:36:13;;;;;17455:25:167;;;4851:4:13;17496:18:167;;;17489:60;4821:4:13;-1:-1:-1;;;;;4821:12:13;;;;17428:18:167;;4821:36:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4806:51;;4884:16;:14;:16::i;:::-;4871:29;;4586:845;;;5154:7;;-1:-1:-1;5236:141:13;-1:-1:-1;;;;;5251:4:13;5236:38;5292:10;5328:4;5154:7;5236:38;:141::i;:::-;5404:16;:14;:16::i;:::-;5391:29;;4586:845;4411:1026;;;;;:::o;4023:611:34:-;4254:20;;4363:35;:17;4389:8;4363:25;:35::i;:::-;4351:47;-1:-1:-1;4484:143:34;4561:52;4589:23;150:4:33;4599:12:34;4589:9;:23::i;:::-;4568:15;:4;4581:1;4568:12;:15::i;:::-;4562:21;;150:4:33;4562:21:34;:::i;:::-;4561:27;;:52::i;:::-;4484:51;:18;4511:23;4484:26;:51::i;:143::-;4465:162;;;4023:611;;;;;;;;:::o;9971:314:40:-;10088:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;10088:23:40;;;;;;;;;:33;;10115:6;;10088:19;:33;;10115:6;;10088:33;:::i;:::-;;;;-1:-1:-1;;10131:21:40;;;;:12;:21;;;;;:31;;10156:6;;10131:21;:31;;10156:6;;10131:31;:::i;:::-;;;;-1:-1:-1;;10219:59:40;;;3563:25:167;;;3619:2;3604:18;;3597:34;;;-1:-1:-1;;;;;10219:59:40;;;10254:1;;10234:10;;10219:59;;3536:18:167;10219:59:40;3389:248:167;8238:253:7;8398:12;:26;8442:28;;8296:7;;8334:150;;-1:-1:-1;;;;;8398:26:7;;;;8442:28;;8334:46;:150::i;2254:774:34:-;2482:11;2718:17;2738:150;2770:23;2807:13;2834:18;2866:12;2738:18;:150::i;:::-;2718:170;-1:-1:-1;2917:104:34;2960:47;2718:170;2979:17;2998:8;2960:18;:47::i;:::-;2918:15;2924:9;150:4:33;2918:15:34;:::i;:::-;2917:25;;:104::i;8679:1001:7:-;8793:53;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8793:53:7;8877:796;;;;;;;;8940:12;:26;-1:-1:-1;;;;;8940:26:7;;;8877:796;;8997:28;;;;8877:796;;;;-1:-1:-1;;;9053:25:7;;;;;8877:796;;;;;;;;;;;;;9148:18;8877:796;;;;9202:21;8877:796;;;;9250:12;8877:796;;;;9294:29;;;;8877:796;;;;9410:36;;8877:796;;8940:26;8877:796;;;9363:97;;9410:36;9363:29;:97::i;:::-;8877:796;;9493:30;;-1:-1:-1;;;;;;;;9493:30:7;;;;;;8877:796;;;;9611:37;;8877:796;;;;;9564:98;;9611:37;;;9564:29;:98::i;:::-;8877:796;;8862:811;8679:1001;-1:-1:-1;;8679:1001:7:o;20164:5466:34:-;20267:7;20417:20;20575:106;20630:7;:33;;;20575:7;:25;;;:33;;:106;;;;:::i;:::-;20493:32;;;;20460:24;;;;:66;;:32;:66::i;:::-;20440:255;;;;:::i;:::-;20417:278;;20705:30;20738:113;20783:7;:21;;;20818:7;:23;;;20738:31;:113::i;:::-;20705:146;;20881:1;20865:13;:17;20861:3671;;;21550:21;21574:291;21623:22;21663:7;:20;;;21701:7;:28;;;21753:7;:19;;;150:4:33;21747:25:34;;;;:::i;:::-;21790:7;:18;;;21826:7;:25;;;21574:31;:291::i;:::-;21550:315;-1:-1:-1;21895:41:34;21550:315;21921:13;21895:17;:41::i;:::-;21879:57;-1:-1:-1;22005:17:34;;22001:565;;22180:371;22276:22;22324:7;:20;;;22370:13;22415:7;:19;;;150:4:33;22409:25:34;;;;:::i;:::-;22460:7;:18;;;22504:7;:25;;;22180:70;:371::i;:::-;22155:396;;:7;;:396;;;;;:::i;:::-;;;-1:-1:-1;22001:565:34;20884:1692;20861:3671;;;22602:1;22586:13;:17;22582:1950;;;23407:14;23408:13;23407:14;:::i;:::-;23391:30;;23482:21;23506:244;23554:22;23594:7;:20;;;23638:7;:19;;;150:4:33;23632:25:34;;;;:::i;:::-;23675:7;:18;;;23711:7;:25;;;23506:30;:244::i;:::-;23482:268;-1:-1:-1;23780:41:34;23482:268;23806:13;23780:17;:41::i;:::-;23764:57;-1:-1:-1;23886:17:34;;23882:563;;24061:369;24155:22;24203:7;:20;;;24249:13;24294:7;:19;;;150:4:33;24288:25:34;;;;:::i;:::-;24339:7;:18;;;24383:7;:25;;;24061:68;:369::i;:::-;24036:394;;:7;;:394;;;;;:::i;:::-;;;-1:-1:-1;23882:563:34;24483:38;24508:13;24491;24483:38;:::i;:::-;24458:63;;:7;;:63;;;;;:::i;:::-;;;-1:-1:-1;;22582:1950:34;24665:19;24899:153;24962:7;:32;;;150:4:33;24956:38:34;;;;:::i;:::-;25016:18;;;;24899:24;;;;;:153;:35;:153::i;:::-;24707:143;24767:7;:33;;;150:4:33;24761:39:34;;;;:::i;:::-;24818:18;;;;24707:25;;;;;:143;:36;:143::i;:::-;24687:379;;;;:::i;:::-;24665:401;;25076:27;25150:12;25113:7;:21;;;25106:56;;;;:::i;:::-;25076:86;;25206:7;:28;;;25176:20;:59;25172:131;;;25258:34;;-1:-1:-1;;;25258:34:34;;;;;;;;;;;25172:131;25312:53;;;25595:28;;;;25571:52;;25344:20;25571:52;:::i;:::-;25564:59;20164:5466;-1:-1:-1;;;;;;20164:5466:34:o;15784:3325:4:-;15967:19;15990:1;15967:24;15963:61;;15784:3325;:::o;15963:61::-;16255:12;:26;-1:-1:-1;;;;;16255:26:4;16311:21;16295:37;;16291:109;;;16355:34;;-1:-1:-1;;;16355:34:4;;;;;;;;;;;16291:109;16569:27;16599:55;16635:19;16606:13;16599:55;:::i;:::-;16569:85;;16698:21;16668:20;:52;16664:124;;;16743:34;;-1:-1:-1;;;16743:34:4;;;;;;;;;;;16664:124;16826:41;16834:20;16826:39;:41::i;:::-;16797:12;:70;;-1:-1:-1;;;;;;16797:70:4;-1:-1:-1;;;;;16797:70:4;;;;;;;;;;17443:28;;-1:-1:-1;;17443:28:4;;17485:20;;;17481:488;;17570:139;17578:20;17640:15;17678:13;17570:40;:139::i;:::-;17521:202;;17481:488;;;17804:140;17874:16;17875:15;17874:16;:::i;:::-;17812:20;;17913:13;17804:40;:140::i;:::-;17779:179;;;:::i;:::-;17754:204;;17481:488;18009:33;:22;:31;:33::i;:::-;17978:28;:64;;-1:-1:-1;;;;;;17978:64:4;-1:-1:-1;;;;;17978:64:4;;;;;;:12;18884:25;18682:420;;:395;;-1:-1:-1;;;18884:25:4;;;18927:136;18995:13;19030:15;18927:46;:136::i;:::-;18682:160;18767:20;18806:22;18682:59;:160::i;:420::-;18654:12;:448;;-1:-1:-1;;;;;18654:448:4;;;-1:-1:-1;;;18654:448:4;;;;;;;;;-1:-1:-1;;;;;15784:3325:4:o;2207:165:33:-;2269:7;2296:22;2307:1;2310:4;2316:1;2296:10;:22::i;13979:3706:5:-;14119:26;14159:25;14198:20;14232:26;14454:241;14500:25;:23;:25::i;:::-;14539:12;:25;-1:-1:-1;;;14539:25:5;;-1:-1:-1;;;;;14539:25:5;14578:12;14616;14642:11;14667:18;14454:32;:241::i;:::-;14434:261;;14828:17;14848:179;14895:25;:23;:25::i;14848:179::-;14828:199;;15054:240;15091:12;15121:17;15156:124;15222:9;15253;15156:44;:124::i;15054:240::-;15037:330;;;15326:30;;-1:-1:-1;;;15326:30:5;;;;;;;;;;;15037:330;15440:22;15452:9;15440:11;:22::i;:::-;15639:16;15678:26;15726:63;15752:12;15766:9;15777:11;15726:25;:63::i;:::-;15625:164;;-1:-1:-1;15625:164:5;-1:-1:-1;15952:28:5;15625:164;15952:17;:28;:::i;:::-;15937:43;-1:-1:-1;16654:33:5;16669:18;15937:43;16654:33;:::i;:::-;16634:53;-1:-1:-1;17150:87:5;:18;17193:9;17216:11;17150:29;:87::i;:::-;17129:108;-1:-1:-1;17496:33:5;17129:108;17496:12;:33;:::i;:::-;17475:54;;17540:138;;;13979:3706;;;;;;;:::o;8586:2118::-;8860:29;;-1:-1:-1;;;;;8860:29:5;9001:309;:284;8860:29;9165:20;:13;9181:4;9165:20;:::i;:::-;9022:36;;-1:-1:-1;;;;;9022:36:5;;9001:284;9236:13;9267:4;9001:102;:284::i;:309::-;8962:36;:348;;-1:-1:-1;;;;;;8962:348:5;-1:-1:-1;;;;;8962:348:5;;;;;;;;;;9458:31;:19;:29;:31::i;:::-;9428:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;9428:61:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;9428:61:5;;;;;-1:-1:-1;;;;;9428:61:5;;;;;;9528:30;:18;:28;:30::i;:::-;9499:12;:59;;:25;;:59;;;;-1:-1:-1;;;9499:59:5;;-1:-1:-1;;;;;9499:59:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;9499:59:5;;;;;-1:-1:-1;;;;;9499:59:5;;;;;;9589:25;:13;:23;:25::i;:::-;9568:46;;;;:::i;:::-;9624:29;:49;;-1:-1:-1;;;;;;9624:49:5;-1:-1:-1;;;;;9624:49:5;;;;;-1:-1:-1;9987:51:5;;;:12;:51;;;;;10089:23;;9624:49;;-1:-1:-1;9987:51:5;-1:-1:-1;;;10089:23:5;;;;;10151:98;10196:40;:19;10224:11;10196:27;:40::i;:::-;10152:29;10168:13;10152:1;:29;:::i;:::-;:84;;;;:::i;10151:98::-;10259:52;;10123:126;;-1:-1:-1;10123:126:5;;10259:10;;:23;;:52;;10123:126;;-1:-1:-1;;;10259:52:5;;;;;:::i;:::-;;;-1:-1:-1;;;;;10259:52:5;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;10367:23:5;;10321:70;;10259:52;10321:70;;;;-1:-1:-1;;;10367:23:5;;;;10321:19;:70::i;:::-;10490:23;10501:11;10490:10;:23::i;:::-;10485:106;;10536:44;;-1:-1:-1;;;10536:44:5;;;;;;;;;;;10485:106;10663:34;10685:11;10663:21;:34::i;19829:2546:4:-;20054:21;20077:7;20086;20443:59;20505:35;20528:11;20505:22;:35::i;:::-;20443:97;;20550:28;20581:66;20631:6;20581:36;:66::i;:::-;20550:97;;20673:45;20701:16;:14;:16::i;:::-;20673:27;:45::i;:::-;20657:61;-1:-1:-1;20744:55:4;20657:61;20769:7;20778:20;20744:24;:55::i;:::-;20728:71;-1:-1:-1;20809:40:4;20826:22;20728:71;20826:22;:::i;:::-;20809:16;:40::i;:::-;20882:12;:26;-1:-1:-1;;;;;20882:26:4;;;20859:49;;20943:28;;;;20918:22;;;:53;-1:-1:-1;;;21003:25:4;;;;20981:19;;;:47;20882:26;21067:66;20859:6;21067:36;:66::i;:::-;21038:95;-1:-1:-1;21407:23:4;21453:67;:14;21038:95;21499:20;21453:25;:67::i;:::-;21407:123;-1:-1:-1;21560:40:4;21592:7;21567:14;21560:40;:::i;:::-;21540:60;;;;:::i;:::-;;;21633:1;21614:16;:20;21610:677;;;21807:29;21839:121;21896:17;21897:16;21896:17;:::i;:::-;21839:20;;21932:14;21839:31;:121::i;:::-;21807:153;-1:-1:-1;21974:38:4;21807:153;21974:38;;:::i;:::-;;;22026:47;22050:21;22026:16;:47::i;:::-;22087:152;22129:21;22168:28;22214:11;22087:24;:152::i;:::-;22253:23;;;21636:651;21610:677;22328:16;-1:-1:-1;22347:20:4;;-1:-1:-1;;;19829:2546:4;;;;;;;;;:::o;14792:3820:6:-;14965:21;15000:26;15040;15328:229;15375:25;:23;:25::i;:::-;15414:12;:25;-1:-1:-1;;;15414:25:6;;-1:-1:-1;;;;;15414:25:6;15453:11;15478:12;15504:11;15529:18;15328:33;:229::i;:::-;15307:250;-1:-1:-1;15818:11:6;15776:39;15307:250;15803:11;15776:26;:39::i;:::-;:53;15772:121;;;15852:30;;-1:-1:-1;;;15852:30:6;;;;;;;;;;;15772:121;16035:17;16055:179;16102:25;:23;:25::i;16055:179::-;16035:199;;16244:22;16256:9;16244:11;:22::i;:::-;16434:16;16460:26;16720:192;16758:11;565:4:33;16868:9:6;16891:11;16720:24;:192::i;:::-;-1:-1:-1;16496:416:6;;-1:-1:-1;16496:416:6;-1:-1:-1;17585:29:6;;-1:-1:-1;16496:416:6;;-1:-1:-1;16496:416:6;17585:29;:::i;:::-;17563:51;;;;:::i;:::-;;-1:-1:-1;18107:425:6;18158:11;18361:39;18382:18;17563:51;18361:39;:::i;:::-;18414:15;18443:32;:11;18414:15;18443;:32::i;:::-;18489:11;18514:8;18107:37;:425::i;:::-;18091:441;-1:-1:-1;18586:18:6;-1:-1:-1;;;14792:3820:6;;;;;;;:::o;21181:317:2:-;21347:7;21370:15;;;;;;;;:::i;:::-;21366:126;;;21408:28;:7;21424:11;21408:15;:28::i;21366:126::-;-1:-1:-1;21474:7:2;21467:14;;9507:3005:6;9907:30;;9786:312;;:287;;-1:-1:-1;;;9907:30:6;;-1:-1:-1;;;;;9907:30:6;9955:20;:13;9971:4;9955:20;:::i;:::-;9807:37;;-1:-1:-1;;;9807:37:6;;-1:-1:-1;;;;;9807:37:6;;;10026:11;10055:4;9786:103;:287::i;:312::-;9746:37;:352;;-1:-1:-1;;;;;9746:352:6;;;-1:-1:-1;;;9746:352:6;;;;;;;;;-1:-1:-1;10458:31:6;:19;:29;:31::i;:::-;10417:12;:26;:72;;;-1:-1:-1;;;;;10417:26:6;:72;:::i;:::-;10499:12;:43;;-1:-1:-1;;;;;;10499:43:6;-1:-1:-1;;;;;10499:43:6;;;;;;-1:-1:-1;10581:23:6;:11;:21;:23::i;:::-;10552:12;:52;;:25;;:52;;;;-1:-1:-1;;;10552:52:6;;-1:-1:-1;;;;;10552:52:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10552:52:6;;;;;-1:-1:-1;;;;;10552:52:6;;;;;;10648:23;:11;:21;:23::i;:::-;10614:30;:57;;:30;;:57;;;;-1:-1:-1;;;10614:57:6;;-1:-1:-1;;;;;10614:57:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10614:57:6;;;;;;;;;;;;;;;11273:28;;:12;11230:26;11273:28;;;;;11230:26;;11215:86;11198:180;;-1:-1:-1;11198:180:6;;11333:34;;-1:-1:-1;;;11333:34:6;;;;;;;;;;;11198:180;11470:25;11498:19;:17;:19::i;:::-;11527:31;11581;;;:12;:31;;;;;:44;11470:47;;-1:-1:-1;;;;11581:44:6;;;;11713:23;:11;:21;:23::i;:::-;11645:31;;;;:12;:31;;;;;:101;;:44;;:101;;;;-1:-1:-1;;;11645:101:6;;;;;:::i;:::-;;;-1:-1:-1;;;;;11645:101:6;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;11827:31:6;;;:12;:31;;;;;:44;11756:125;;11645:101;11756:125;;;;-1:-1:-1;;;11827:44:6;;;;11756:19;:125::i;:::-;12298:23;12309:11;12298:10;:23::i;:::-;12293:106;;12344:44;;-1:-1:-1;;;12344:44:6;;;;;;;;;;;12293:106;12471:34;12493:11;12471:21;:34::i;18521:4699:5:-;18692:25;18731:21;18766:26;18806:23;18843:27;18884:26;19558:21;19582:38;19606:13;19582:23;:38::i;:::-;19558:62;;19688:337;19760:25;:23;:25::i;:::-;19807:12;:25;-1:-1:-1;;;19807:25:5;;-1:-1:-1;;;;;19807:25:5;19854:11;19887:13;19922:12;19956:11;19989:18;19688:50;:337::i;:::-;19634:391;;-1:-1:-1;19634:391:5;-1:-1:-1;19634:391:5;-1:-1:-1;20080:17:5;20100:199;20151:25;:23;:25::i;20100:199::-;20080:219;;20313:22;20325:9;20313:11;:22::i;:::-;20576:16;20606:15;20805:154;20847:11;20876:13;20907:9;20934:11;20805:24;:154::i;:::-;20635:324;-1:-1:-1;20635:324:5;;-1:-1:-1;20635:324:5;;-1:-1:-1;21194:27:5;;-1:-1:-1;20635:324:5;;-1:-1:-1;21194:27:5;;:::i;:::-;;-1:-1:-1;21432:18:5;21443:7;21432:8;:18;:::i;:::-;21415:35;;;;:::i;:::-;;-1:-1:-1;21834:34:5;21850:18;21415:35;21834:34;:::i;:::-;21813:55;;19123:2756;;;;22326:887;22387:13;22414:18;22446:15;22475:18;22954:12;:47;22983:17;22967:13;:33;;;;:::i;:::-;22954:47;;;;;;;;;;;-1:-1:-1;22954:47:5;:58;-1:-1:-1;;;;;22954:58:5;23046:15;:31;-1:-1:-1;23046:118:5;;23126:27;;;;:12;:27;;;;;:38;-1:-1:-1;;;;;23126:38:5;23046:118;;;23096:11;23046:118;23199:4;22326:47;:887::i;:::-;18521:4699;;22159:1054;;-1:-1:-1;22159:1054:5;;-1:-1:-1;22159:1054:5;-1:-1:-1;22159:1054:5;;-1:-1:-1;18521:4699:5;-1:-1:-1;;;;18521:4699:5:o;11173:2273::-;11436:29;;-1:-1:-1;;;;;11436:29:5;11573:335;:306;11436:29;11748:20;:13;11764:4;11748:20;:::i;:::-;11598:36;;-1:-1:-1;;;;;11598:36:5;;11573:306;11823:11;11856:5;11573:114;:306::i;:335::-;11534:36;:374;;-1:-1:-1;;;;;;11534:374:5;-1:-1:-1;;;;;11534:374:5;;;;;;;;;;12062:23;:11;:21;:23::i;:::-;12026:59;;:17;:59;:::i;:::-;11978:29;:107;;-1:-1:-1;;;;;;11978:107:5;-1:-1:-1;;;;;11978:107:5;;;;;;;;;;-1:-1:-1;12647:31:5;:19;:29;:31::i;:::-;12617:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;12617:61:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12617:61:5;;;;;-1:-1:-1;;;;;12617:61:5;;;;;;12720:32;:21;:30;:32::i;:::-;12688:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12688:64:5;;;;;;;-1:-1:-1;;;;;12688:64:5;;;;;;12791:30;:18;:28;:30::i;:::-;12762:12;:59;;:25;;:59;;;;-1:-1:-1;;;12762:59:5;;-1:-1:-1;;;;;12762:59:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12762:59:5;;;;;;;;;;;;;;;13210:12;:26;13240:21;13210:26;;13202:59;;-1:-1:-1;13202:59:5;:161;;-1:-1:-1;13335:28:5;;:12;13292:26;13335:28;;;;;-1:-1:-1;;;;;13292:26:5;;;13277:86;13202:161;13185:255;;;13395:34;;-1:-1:-1;;;13395:34:5;;;;;;;;;;;5173:642:88;5592:23;5618:69;5646:4;5618:69;;;;;;;;;;;;;;;;;5626:5;-1:-1:-1;;;;;5618:27:88;;;:69;;;;;:::i;:::-;5592:95;;5705:10;:17;5726:1;5705:22;:56;;;;5742:10;5731:30;;;;;;;;;;;;:::i;:::-;5697:111;;;;-1:-1:-1;;;5697:111:88;;18374:2:167;5697:111:88;;;18356:21:167;18413:2;18393:18;;;18386:30;18452:34;18432:18;;;18425:62;-1:-1:-1;;;18503:18:167;;;18496:40;18553:19;;5697:111:88;18172:406:167;8796:2095:1;8973:21;;9256:32;:11;9276;9256:19;:32::i;:::-;9240:48;-1:-1:-1;9298:15:1;9316:31;9240:48;9338:8;9316:21;:31::i;:::-;9298:49;-1:-1:-1;9373:31:1;9298:49;9389:14;9373:15;:31::i;:::-;9357:47;;9831:7;9827:557;;;9871:23;9881:13;9871:7;:23;:::i;:::-;9854:40;;;;:::i;:::-;;;9827:557;;;10350:23;10360:13;10350:7;:23;:::i;:::-;10333:40;;;;:::i;:::-;;;9827:557;10597:15;10583:11;:29;10579:306;;;10644:100;:13;10686:11;10715:15;10644:24;:100::i;:::-;10628:116;-1:-1:-1;10774:100:1;:13;10816:11;10845:15;10774:24;:100::i;:::-;10758:116;;10579:306;9019:1872;8796:2095;;;;;;;:::o;14237:490:2:-;14393:25;;14332:18;;;;14385:77;;-1:-1:-1;;;14393:25:2;;-1:-1:-1;;;;;14393:25:2;14441:11;14385:42;:77::i;:::-;14362:100;-1:-1:-1;14505:36:2;14520:21;14362:100;14505:36;:::i;:::-;14476:12;:26;-1:-1:-1;;;;;14476:26:2;:65;14472:222;;;14586:12;:26;14662:21;;14586:57;;14631:12;;-1:-1:-1;;;;;14586:26:2;:57;:::i;:::-;:97;;;;:::i;:::-;14557:126;;14472:222;14703:17;14237:490;;;:::o;25635:1730:4:-;26328:25;26372:1;26356:13;:17;:122;;26464:14;26356:122;;;26388:61;:14;26414:19;26435:13;26388:25;:61::i;:::-;26328:150;;26492:17;26513:1;26492:22;26488:35;;26516:7;;;26488:35;26731:17;26791:19;26824:48;;;26820:274;;;26905:28;;-1:-1:-1;26972:111:4;:19;26905:28;27052:17;26972:30;:111::i;:::-;26947:136;;26820:274;27136:26;:14;:24;:26::i;:::-;27103:13;:59;;:29;;:59;;;;-1:-1:-1;;;;;27103:59:4;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;27103:59:4;;;;;-1:-1:-1;;;;;27103:59:4;;;;;;27198:34;:22;:32;:34::i;:::-;27172:13;:60;;:22;;:60;;;;-1:-1:-1;;;27172:60:4;;-1:-1:-1;;;;;27172:60:4;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;27172:60:4;;;;;-1:-1:-1;;;;;27172:60:4;;;;;;27309:49;27334:22;27326:31;;;:::i;6709:368:7:-;6802:21;6835:24;6862:19;:17;:19::i;:::-;6835:46;;6923:16;6907:13;:32;:95;;7001:1;6907:95;;;6954:32;6970:16;6954:13;:32;:::i;:::-;6891:111;-1:-1:-1;7028:42:7;6891:111;7052:17;7028:23;:42::i;13107:1882:34:-;13439:23;;;14115:100;14150:30;14156:24;150:4:33;14150:30:34;:::i;:::-;14115:10;;14194:11;14115:21;:100::i;:::-;14100:115;-1:-1:-1;14242:44:34;:10;14261:24;14242:18;:44::i;:::-;14225:61;-1:-1:-1;14300:18:34;;14296:687;;14452:475;14517:23;14558:13;14589:14;14830:18;14836:12;150:4:33;14830:18:34;:::i;:::-;14866:11;14895:18;14452:47;:475::i;:::-;14434:493;-1:-1:-1;14941:31:34;14434:493;14941:31;;:::i;:::-;;;14296:687;13107:1882;;;;;;;;;;;:::o;1246:449::-;1441:17;1575:113;1675:12;1575:82;:18;1618:23;1643:13;1575:42;:82::i;6077:213::-;6210:7;6242:41;6258:24;6264:18;150:4:33;6258:24:34;:::i;:::-;6242:9;;:15;:41::i;:::-;6236:47;;150:4:33;6236:47:34;:::i;9268:678:2:-;9424:4;9649:23;9675:216;9750:16;9722:25;:23;:25::i;:::-;:44;;;;:::i;:::-;9780:12;:25;:43;;9808:15;;-1:-1:-1;;;9780:25:2;;-1:-1:-1;;;;;9780:25:2;:43;:::i;:::-;9837:18;9869:12;9675:33;:216::i;:::-;-1:-1:-1;;;;9268:678:2;-1:-1:-1;;;;9268:678:2:o;1112:1260:8:-;1199:7;:21;-1:-1:-1;;;;;;;;1199:21:8;;;;;1254:12;1361:15;1332:26;1348:10;1199:21;1332:26;:::i;:::-;:44;1328:81;;;1392:7;;1112:1260;:::o;1328:81::-;1465:27;1495:7;1503:4;1495:13;;;;;;;;:::i;:::-;;;;;;;;;1549:18;;1495:13;;-1:-1:-1;1549:18:8;;;;1608:13;;;;-1:-1:-1;;;;;1608:13:8;;1674:30;1549:18;1674:15;:30;:::i;:::-;2101:7;:14;1658:46;;-1:-1:-1;1943:13:8;;;:27;;;1892:11;;2080:17;2088:4;2096:1;2080:17;:::i;:::-;2079:36;;;;:::i;:::-;2060:55;;2194:49;;;;;;;;2212:15;2194:49;;;;;;2238:3;-1:-1:-1;;;;;2194:49:8;;;;2174:7;2182:8;2174:17;;;;;;;;:::i;:::-;;;;;;;;;;:69;;;;;;-1:-1:-1;;;;;2174:69:8;;;;;;;;;;;:17;;:69;;;;2263:102;;;;;;;;;-1:-1:-1;;;;;2263:102:8;;;;;;2339:15;2263:102;;;;;;;;-1:-1:-1;;;2253:112:8;;:7;:112;-1:-1:-1;;;;;;;;1112:1260:8:o;17660:2619:2:-;17884:21;;;;;18850:159;18971:24;18997:11;18850:96;18938:7;18850:66;18881:34;18905:10;565:4:33;18881:34:2;:::i;:::-;18850:9;;:30;:66::i;:159::-;18834:175;-1:-1:-1;19221:37:2;18834:175;19243:14;19221:21;:37::i;:::-;19200:58;-1:-1:-1;19699:12:2;19714:115;19746:48;19770:24;565:4:33;19746:48:2;:::i;:::-;19714:7;;19808:11;19714:18;:115::i;:::-;19699:130;-1:-1:-1;19854:22:2;19699:130;19867:8;19854:12;:22::i;:::-;19839:37;-1:-1:-1;20083:36:2;19839:37;20104:14;20083:20;:36::i;:::-;20063:56;-1:-1:-1;20234:38:2;20063:56;20234:18;:38;:::i;:::-;20213:59;;18146:2133;17660:2619;;;;;;;;;:::o;26919:1230:34:-;27161:21;;27503:186;27539:16;27645:34;:15;27667:11;27645:21;:34::i;:::-;27503:11;;:186;:22;:186::i;:::-;27482:207;-1:-1:-1;27910:45:34;:11;27933:8;27943:11;27910:22;:45::i;:::-;27896:59;;;;:::i;:::-;;;27983:12;27970:10;:25;27966:147;;;28077:25;28090:12;28077:10;:25;:::i;:::-;28061:41;;27966:147;28122:20;26919:1230;;;;;;;;:::o;16838:2717::-;17138:7;17147;17156;17165:6;17173:7;18107:27;18167:15;18148:16;:34;18144:1219;;;18383:7;18379:181;;;18427:118;:14;18474:16;18512:15;18427:25;:118::i;:::-;18410:135;;18379:181;18635:111;:19;18683:16;18717:15;18635:30;:111::i;:::-;18613:133;-1:-1:-1;18854:70:34;18907:16;18613:133;18854:70;:::i;:::-;18815:109;-1:-1:-1;18957:108:34;:16;19002;19036:15;18957:27;:108::i;:::-;18938:127;-1:-1:-1;19101:111:34;:19;19149:16;19183:15;19101:30;:111::i;:::-;19079:133;;18144:1219;;;19282:70;19335:16;19289:19;19282:70;:::i;:::-;19243:109;;18144:1219;19394:14;;19422:19;;19455:16;;16838:2717;-1:-1:-1;;;;;;;;16838:2717:34:o;13582:678:33:-;13776:15;13807:9;13803:451;;;13842:152;13949:27;13964:12;13949;:27;:::i;:::-;13892:28;:12;13913:6;13892:20;:28::i;:::-;13843:30;:12;13864:8;13843:20;:30::i;:::-;:77;;;;:::i;:::-;13842:85;;:152::i;:::-;13832:162;;13803:451;;;14045:12;14029;:28;14025:42;;-1:-1:-1;14066:1:33;14059:8;;14025:42;14091:152;14198:27;14213:12;14198;:27;:::i;:::-;14141:28;:12;14162:6;14141:20;:28::i;:::-;14092:30;:12;14113:8;14092:20;:30::i;:::-;:77;;;;:::i;994:219:35:-;1045:8;-1:-1:-1;;;;;;1071:21:35;;;;;:46;;-1:-1:-1;;;;;;1096:21:35;;;1071:46;1065:119;;1141:32;;-1:-1:-1;;;1141:32:35;;;;;;;;;;;15261:101:33;15317:6;15346:1;15342;:5;:13;;15354:1;15342:13;;14987:101;15043:6;15072:1;15068;:5;:13;;15080:1;15068:13;;1355:203:88;1482:68;;-1:-1:-1;;;;;18841:15:167;;;1482:68:88;;;18823:34:167;18893:15;;18873:18;;;18866:43;18925:18;;;18918:34;;;1455:96:88;;1475:5;;-1:-1:-1;;;1505:27:88;18758:18:167;;1482:68:88;18583:375:167;4141:115:33;4201:7;4228:20;4237:1;4240:4;4246:1;4228:8;:20::i;4671:846::-;4729:7;4795:1;4800;4795:6;4791:50;;-1:-1:-1;565:4:33;4817:13;;4791:50;4894:1;4899;4894:6;4890:45;;-1:-1:-1;4923:1:33;4916:8;;4890:45;5098:1;5073:15;5276:14;5287:1;5276:3;:14::i;:::-;5263:27;-1:-1:-1;5368:18:33;;;5405:22;565:4;5368:18;5405:22;:::i;:::-;;;5500:9;5504:4;5500:3;:9::i;30120:340:34:-;30255:7;;30306:53;30343:16;30313:14;30306:53;:::i;:::-;30274:85;;30403:1;30377:22;:27;;30369:36;;;;;2726:748:33;2840:9;3105:1;-1:-1:-1;;3088:19:33;3085:1;3082:26;3079:1;3075:34;3068:42;3055:11;3051:60;3024:146;;3154:1;3151;3144:12;3024:146;-1:-1:-1;3421:9:33;;3368:27;;;3365:34;;3417:27;;;3344:114;;2726:748::o;7277:444:7:-;7376:21;7409:24;565:4:33;7436:19:7;:17;:19::i;:::-;:43;;;;:::i;:::-;7409:70;;7521:16;7505:13;:32;:95;;7599:1;7505:95;;;7552:32;7568:16;7552:13;:32;:::i;:::-;7489:111;-1:-1:-1;7626:88:7;7663:41;565:4:33;7663:17:7;:41;:::i;:::-;7627:13;;7626:23;:88::i;12091:1116:36:-;12264:7;12704:9;12716:21;12722:1;12725;12728;12731;12734:2;12716:5;:21::i;:::-;12704:33;-1:-1:-1;12747:16:36;12770:37;12781:21;12800:1;12781:14;:2;12790:4;12781:8;:14::i;:21::-;12770:1;;12804:2;12770:10;:37::i;:::-;12766:41;;:1;:41;:::i;:::-;12747:60;;150:4:33;12821:8:36;:15;12817:295;;12935:28;12948:14;150:4:33;12960:1:36;12948:11;:14::i;:::-;12935:8;;:12;:28::i;:::-;12924:39;;12817:295;;;13075:26;13088:12;150:4:33;13098:1:36;13088:9;:12::i;13075:26::-;13064:37;;12817:295;13188:12;13199:1;13188:8;:12;:::i;:::-;13181:19;12091:1116;-1:-1:-1;;;;;;;;;12091:1116:36:o;14433:104:33:-;14491:7;14521:1;14517;:5;:13;;14529:1;14517:13;;7297:489:36;7486:14;7512:12;7554:140;7606:1;7621;7636:2;7652:1;7667;7682:2;7554:38;:140::i;:::-;7534:160;;-1:-1:-1;7534:160:36;-1:-1:-1;7534:160:36;7704:76;;7739:30;;-1:-1:-1;;;7739:30:36;;;;;;;;;;;10391:1124;10541:7;11029:9;11041:19;11045:1;11048;11051;11054;11057:2;11041:3;:19::i;:::-;11029:31;-1:-1:-1;11070:16:36;11089:28;150:4:33;11097:13:36;:1;11107:2;11097:9;:13::i;:::-;:19;;;;:::i;:::-;11089:1;;:7;:28::i;:::-;11070:47;;150:4:33;11131:8:36;:15;11127:293;;11242:26;11255:12;150:4:33;11265:1:36;11255:9;:12::i;11242:26::-;11231:37;;11127:293;;;11381:28;11394:14;150:4:33;11406:1:36;11394:11;:14::i;11381:28::-;11370:39;;11127:293;11496:12;11500:8;11496:1;:12;:::i;:::-;11489:19;10391:1124;-1:-1:-1;;;;;;;;10391:1124:36:o;3827:1099::-;4014:7;4170:9;4182:19;4186:1;4189;4192;4195;4198:2;4182:3;:19::i;:::-;4170:31;-1:-1:-1;4244:15:36;4257:1;4245:6;4249:2;4245:1;:6;:::i;4244:15::-;4240:19;-1:-1:-1;4415:10:36;4428:23;4445:2;4449:1;4429:5;4240:19;4429:1;:5;:::i;:::-;4428:16;:23;:16;:23::i;:::-;4415:36;;150:4:33;4465:2:36;:9;4461:261;;4563:20;4570:12;150:4:33;4580:1:36;4570:9;:12::i;4563:20::-;4558:25;;4461:261;;;4689:22;4696:14;150:4:33;4708:1:36;4696:11;:14::i;4689:22::-;4684:27;;4461:261;4804:12;:2;4813;4804:8;:12::i;:::-;4799:17;-1:-1:-1;4913:6:36;4918:1;4799:17;4913:6;:::i;6975:872:34:-;7228:7;7365:475;7432:23;7473:13;7504:12;7743:18;7749:12;150:4:33;7743:18:34;:::i;:::-;7779:11;7808:18;7365:49;:475::i;:::-;7346:494;6975:872;-1:-1:-1;;;;;;;6975:872:34:o;5221:277::-;5352:7;5390:101;5425:52;150:4:33;5441:29:34;150:4:33;5451:18:34;5441:9;:29::i;:::-;:35;;;;:::i;:::-;5425:9;;:15;:52::i;:::-;5419:58;;150:4:33;5419:58:34;:::i;:::-;150:4:33;;5390:11:34;:101::i;15254:1612:2:-;15424:21;;16447:175;16614:7;16447:145;16580:11;16447:145;16548:9;565:4:33;16448:41:2;565:4:33;16478:10:2;16448:29;:41::i;:::-;:77;;;;:::i;16447:175::-;16431:191;-1:-1:-1;16822:37:2;16431:191;16844:14;16822:21;:37::i;:::-;16801:58;;15254:1612;;;;;;:::o;10267:313::-;10331:4;10530:42;:21;10560:11;10530:29;:42::i;:::-;10473:25;;:12;10400:26;10366:141;;10505:1;;-1:-1:-1;;;;;;;;10473:25:2;;;;;10367:132;;;10392:56;;10400:26;10436:11;10392:43;:56::i;:::-;10367:132;;;;:::i;:::-;10366:138;;:141::i;:::-;:207;;;10267:313;-1:-1:-1;;10267:313:2:o;24518:580:4:-;24689:20;24712:95;24762:35;24785:11;24762:22;:35::i;24712:95::-;24817:21;24841:34;;;:12;:34;;-1:-1:-1;;;;;;;;;;;24841:34:4;24689:118;;-1:-1:-1;24817:21:4;24841:77;;24890:28;;24841:77;:::i;:::-;24817:101;;24928:163;24967:19;25000:12;25026:13;25053:28;24928:25;:163::i;11325:846:34:-;11576:7;11692:472;11759:23;11800:13;11831:9;12067:18;12073:12;150:4:33;12067:18:34;:::i;:::-;12103:11;12132:18;11692:49;:472::i;14710:104:33:-;14768:7;14798:1;14794;:5;:13;;14806:1;14794:13;;8791:1862:34;9121:23;;;9700:99;9734:30;9740:24;150:4:33;9734:30:34;:::i;9700:99::-;9684:115;-1:-1:-1;9813:28:34;;9809:838;;9929:43;:9;9947:24;9929:17;:43::i;:::-;9912:60;-1:-1:-1;10113:477:34;10180:23;10221:13;9912:60;10493:18;10499:12;150:4:33;10493:18:34;:::i;:::-;10529:11;10558:18;10113:49;:477::i;4108:223:89:-;4241:12;4272:52;4294:6;4302:4;4308:1;4311:12;4272:21;:52::i;3750:115:33:-;3810:7;3837:20;3846:1;3849;3852:4;3837:8;:20::i;9632:3592::-;9677:8;9730:1;9725;:6;9721:60;;9740:41;;-1:-1:-1;;;9740:41:33;;;;;;;;;;;9721:60;-1:-1:-1;10747:2:33;-1:-1:-1;;;;;;;10158:1:33;10154:49;10261:9;;;10241:18;10238:33;10235:1;10231:41;10225:48;10323:9;;;10311:10;10308:25;10305:1;10301:33;10295:40;10381:9;;;10373:6;10370:21;10367:1;10363:29;10357:36;10437:9;;;10431:4;10428:19;10425:1;10421:27;;;10415:34;;;10492:9;;;10487:3;10484:18;10481:1;10477:26;10471:33;10547:9;;;10539:18;;;10536:1;10532:26;;;10526:33;;;10595:9;;;10587:18;;;10581:25;10777:3;:7;;;;;10763:22;;;;10810:17;;;11603:31;11599:35;;11654:5;;11653:13;;11670:32;11652:50;11722:5;;11721:13;;11738:33;11720:51;11791:5;;11790:13;;11807:33;11789:51;11860:5;;11859:13;;11876:33;11858:51;11929:5;;11928:13;;11945:32;11927:50;11997:5;;11996:13;;12013:30;11995:48;11000:31;10996:35;;11051:5;;11050:13;;11067:32;11049:50;11119:5;;11118:13;;11135:32;11117:50;11187:5;;11186:13;;-1:-1:-1;;11185:50:33;11255:5;;11254:13;;-1:-1:-1;;11253:50:33;11323:5;;11322:13;;;-1:-1:-1;;11321:50:33;11389:5;-1:-1:-1;;11389:46:33;12384:10;12774:43;12769:48;-1:-1:-1;;10743:6:33;;;;12897:71;:91;12876:112;13061:72;13056:77;13204:3;13198:9;;9632:3592::o;5773:3347::-;5819:8;-1:-1:-1;;5996:1:33;:26;5992:40;;-1:-1:-1;6031:1:33;;5773:3347;-1:-1:-1;5773:3347:33:o;5992:40::-;6231:21;6226:1;:26;6222:99;;6277:44;;-1:-1:-1;;;6277:44:33;;;;;;;;;;;6222:99;6594:7;6588:2;6583:7;;;6582:19;;-1:-1:-1;6930:8:33;7014:2;6954:29;6943:7;;;6942:41;-1:-1:-1;;;6942:51:33;6941:75;;7042:29;7038:33;;7034:37;;;-1:-1:-1;;7713:35:33;;7768:5;;7348:2;7767:13;;;7784:32;7766:50;7836:5;;7835:13;;-1:-1:-1;;7834:51:33;7905:5;;7904:13;;7921:34;7903:52;7975:5;;7974:13;;-1:-1:-1;;7973:53:33;8046:5;;8045:13;;8062:35;8044:53;7354:32;7287:31;7283:35;;7338:5;;7337:13;;7336:50;;;7411:5;;;-1:-1:-1;;7411:40:33;7471:5;7470:13;;;7487:35;7469:53;7540:5;;;-1:-1:-1;;;7540:50:33;8462:10;8999:49;8966:82;9081:3;:7;;;;8965:124;;;;;;-1:-1:-1;;5773:3347:33:o;14610:278:36:-;14750:7;14873:8;:1;14879;14873:5;:8::i;:::-;14832:38;14845:20;14863:1;14845:13;:2;14856:1;14845:10;:13::i;:20::-;14832:1;;14867:2;14832:12;:38::i;:::-;:49;;;;:::i;8540:1314::-;8733:14;8749:12;8910:9;8922:19;8926:1;8929;8932;8935;8938:2;8922:3;:19::i;:::-;8910:31;-1:-1:-1;8984:15:36;8997:1;8985:6;8989:2;8985:1;:6;:::i;8984:15::-;8980:19;;9081:1;9077;:5;9073:53;;;9106:1;9109:5;9098:17;;;;;;;9073:53;9281:10;9294:23;9311:2;9315:1;9295:5;9299:1;9295;:5;:::i;9294:23::-;9281:36;;150:4:33;9331:2:36;:9;9327:263;;9430:20;9437:12;150:4:33;9447:1:36;9437:9;:12::i;9430:20::-;9425:25;;9327:263;;;9557:22;9564:14;150:4:33;9576:1:36;9564:11;:14::i;9557:22::-;9552:27;;9327:263;9672:12;:2;9681;9672:8;:12::i;:::-;9667:17;;9780:2;9776:1;:6;9772:52;;;9807:6;9811:2;9807:1;:6;:::i;:::-;9798:15;;9772:52;9843:4;9833:14;;8763:1091;;8540:1314;;;;;;;;;;:::o;13772:272::-;13910:7;14029:8;:1;14035;14029:5;:8::i;:::-;13992:34;14003:18;14019:1;14003:11;:2;14012:1;14003:8;:11::i;:18::-;13992:1;;14023:2;13992:10;:34::i;2079:1170::-;2268:7;2424:9;2436:19;2440:1;2443;2446;2449;2452:2;2436:3;:19::i;:::-;2424:31;-1:-1:-1;2589:25:36;2612:1;2589:18;2600:6;2604:2;2600:1;:6;:::i;:::-;2589:2;;:10;:18::i;:25::-;2585:29;-1:-1:-1;2674:19:36;:1;2585:29;2690:2;2674:12;:19::i;:::-;2670:23;-1:-1:-1;2853:10:36;2866:5;2670:23;2866:1;:5;:::i;:::-;2853:18;;150:4:33;2885:2:36;:9;2881:261;;2983:20;2990:12;150:4:33;3000:1:36;2990:9;:12::i;2983:20::-;2978:25;;2881:261;;;3109:22;3116:14;150:4:33;3128:1:36;3116:11;:14::i;3109:22::-;3104:27;;2881:261;3236:6;3240:2;3236:1;:6;:::i;5165:446:89:-;5330:12;5387:5;5362:21;:30;;5354:81;;;;-1:-1:-1;;;5354:81:89;;19363:2:167;5354:81:89;;;19345:21:167;19402:2;19382:18;;;19375:30;19441:34;19421:18;;;19414:62;-1:-1:-1;;;19492:18:167;;;19485:36;19538:19;;5354:81:89;19161:402:167;5354:81:89;5446:12;5460:23;5487:6;-1:-1:-1;;;;;5487:11:89;5506:5;5513:4;5487:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5445:73;;;;5535:69;5562:6;5570:7;5579:10;5591:12;7851;7879:7;7875:418;;;7906:10;:17;7927:1;7906:22;7902:286;;-1:-1:-1;;;;;1702:19:89;;;8113:60;;;;-1:-1:-1;;;8113:60:89;;20062:2:167;8113:60:89;;;20044:21:167;20101:2;20081:18;;;20074:30;20140:31;20120:18;;;20113:59;20189:18;;8113:60:89;19860:353:167;8113:60:89;-1:-1:-1;8208:10:89;8201:17;;7875:418;8249:33;8257:10;8269:12;8980:17;;:21;8976:379;;9208:10;9202:17;9264:15;9251:10;9247:2;9243:19;9236:44;8976:379;9331:12;9324:20;;-1:-1:-1;;;9324:20:89;;;;;;;;:::i;14:271:167:-;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:167:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:167;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:250;873:1;883:113;897:6;894:1;891:13;883:113;;;973:11;;;967:18;954:11;;;947:39;919:2;912:10;883:113;;;-1:-1:-1;;1030:1:167;1012:16;;1005:27;788:250::o;1043:896::-;1122:6;1175:2;1163:9;1154:7;1150:23;1146:32;1143:52;;;1191:1;1188;1181:12;1143:52;1224:9;1218:16;1253:18;1294:2;1286:6;1283:14;1280:34;;;1310:1;1307;1300:12;1280:34;1348:6;1337:9;1333:22;1323:32;;1393:7;1386:4;1382:2;1378:13;1374:27;1364:55;;1415:1;1412;1405:12;1364:55;1444:2;1438:9;1466:2;1462;1459:10;1456:36;;;1472:18;;:::i;:::-;1547:2;1541:9;1515:2;1601:13;;-1:-1:-1;;1597:22:167;;;1621:2;1593:31;1589:40;1577:53;;;1645:18;;;1665:22;;;1642:46;1639:72;;;1691:18;;:::i;:::-;1731:10;1727:2;1720:22;1766:2;1758:6;1751:18;1806:7;1801:2;1796;1792;1788:11;1784:20;1781:33;1778:53;;;1827:1;1824;1817:12;1778:53;1840:68;1905:2;1900;1892:6;1888:15;1883:2;1879;1875:11;1840:68;:::i;1944:139::-;-1:-1:-1;;;;;2027:31:167;;2017:42;;2007:70;;2073:1;2070;2063:12;2007:70;1944:139;:::o;2088:270::-;2162:6;2215:2;2203:9;2194:7;2190:23;2186:32;2183:52;;;2231:1;2228;2221:12;2183:52;2270:9;2257:23;2289:39;2322:5;2289:39;:::i;2363:118::-;2449:5;2442:13;2435:21;2428:5;2425:32;2415:60;;2471:1;2468;2461:12;2486:241;2542:6;2595:2;2583:9;2574:7;2570:23;2566:32;2563:52;;;2611:1;2608;2601:12;2563:52;2650:9;2637:23;2669:28;2691:5;2669:28;:::i;2732:155::-;2792:5;2837:2;2828:6;2823:3;2819:16;2815:25;2812:45;;;2853:1;2850;2843:12;2892:492;2996:6;3004;3012;3065:2;3053:9;3044:7;3040:23;3036:32;3033:52;;;3081:1;3078;3071:12;3033:52;3117:9;3104:23;3094:33;;3174:2;3163:9;3159:18;3146:32;3136:42;;3229:2;3218:9;3214:18;3201:32;3256:18;3248:6;3245:30;3242:50;;;3288:1;3285;3278:12;3242:50;3311:67;3370:7;3361:6;3350:9;3346:22;3311:67;:::i;:::-;3301:77;;;2892:492;;;;;:::o;3642:367::-;3705:8;3715:6;3769:3;3762:4;3754:6;3750:17;3746:27;3736:55;;3787:1;3784;3777:12;3736:55;-1:-1:-1;3810:20:167;;3853:18;3842:30;;3839:50;;;3885:1;3882;3875:12;3839:50;3922:4;3914:6;3910:17;3898:29;;3982:3;3975:4;3965:6;3962:1;3958:14;3950:6;3946:27;3942:38;3939:47;3936:67;;;3999:1;3996;3989:12;4014:1066;4154:6;4162;4170;4178;4186;4194;4247:3;4235:9;4226:7;4222:23;4218:33;4215:53;;;4264:1;4261;4254:12;4215:53;4303:9;4290:23;4322:39;4355:5;4322:39;:::i;:::-;4380:5;-1:-1:-1;4437:2:167;4422:18;;4409:32;4450:41;4409:32;4450:41;:::i;:::-;4510:7;-1:-1:-1;4568:2:167;4553:18;;4540:32;4591:18;4621:14;;;4618:34;;;4648:1;4645;4638:12;4618:34;4687:70;4749:7;4740:6;4729:9;4725:22;4687:70;:::i;:::-;4776:8;;-1:-1:-1;4661:96:167;-1:-1:-1;4864:2:167;4849:18;;4836:32;;-1:-1:-1;4880:16:167;;;4877:36;;;4909:1;4906;4899:12;4877:36;;4948:72;5012:7;5001:8;4990:9;4986:24;4948:72;:::i;:::-;4014:1066;;;;-1:-1:-1;4014:1066:167;;-1:-1:-1;4014:1066:167;;5039:8;;4014:1066;-1:-1:-1;;;4014:1066:167:o;5085:541::-;5171:6;5179;5187;5195;5248:3;5236:9;5227:7;5223:23;5219:33;5216:53;;;5265:1;5262;5255:12;5216:53;5301:9;5288:23;5278:33;;5361:2;5350:9;5346:18;5333:32;5374:39;5407:5;5374:39;:::i;:::-;5432:5;-1:-1:-1;5489:2:167;5474:18;;5461:32;5502:41;5461:32;5502:41;:::i;:::-;5085:541;;;;-1:-1:-1;5562:7:167;;5616:2;5601:18;5588:32;;-1:-1:-1;;5085:541:167:o;5631:561::-;5744:6;5752;5760;5768;5821:3;5809:9;5800:7;5796:23;5792:33;5789:53;;;5838:1;5835;5828:12;5789:53;5874:9;5861:23;5851:33;;5931:2;5920:9;5916:18;5903:32;5893:42;;5982:2;5971:9;5967:18;5954:32;5944:42;;6037:2;6026:9;6022:18;6009:32;6064:18;6056:6;6053:30;6050:50;;;6096:1;6093;6086:12;6050:50;6119:67;6178:7;6169:6;6158:9;6154:22;6119:67;:::i;:::-;6109:77;;;5631:561;;;;;;;:::o;6561:356::-;6647:6;6700:2;6688:9;6679:7;6675:23;6671:32;6668:52;;;6716:1;6713;6706:12;6668:52;6756:9;6743:23;6789:18;6781:6;6778:30;6775:50;;;6821:1;6818;6811:12;6775:50;6844:67;6903:7;6894:6;6883:9;6879:22;6844:67;:::i;6922:541::-;7008:6;7016;7024;7032;7085:3;7073:9;7064:7;7060:23;7056:33;7053:53;;;7102:1;7099;7092:12;7053:53;7138:9;7125:23;7115:33;;7198:2;7187:9;7183:18;7170:32;7211:39;7244:5;7211:39;:::i;:::-;7269:5;-1:-1:-1;7321:2:167;7306:18;;7293:32;;-1:-1:-1;7377:2:167;7362:18;;7349:32;7390:41;7349:32;7390:41;:::i;:::-;6922:541;;;;-1:-1:-1;6922:541:167;;-1:-1:-1;;6922:541:167:o;7468:390::-;7533:6;7541;7594:2;7582:9;7573:7;7569:23;7565:32;7562:52;;;7610:1;7607;7600:12;7562:52;7649:9;7636:23;7668:39;7701:5;7668:39;:::i;:::-;7726:5;-1:-1:-1;7783:2:167;7768:18;;7755:32;7796:30;7755:32;7796:30;:::i;:::-;7845:7;7835:17;;;7468:390;;;;;:::o;7863:912::-;7971:6;7979;7987;7995;8003;8011;8019;8072:3;8060:9;8051:7;8047:23;8043:33;8040:53;;;8089:1;8086;8079:12;8040:53;8128:9;8115:23;8147:39;8180:5;8147:39;:::i;:::-;8205:5;-1:-1:-1;8262:2:167;8247:18;;8234:32;8275:41;8234:32;8275:41;:::i;:::-;8335:7;-1:-1:-1;8394:2:167;8379:18;;8366:32;8407:30;8366:32;8407:30;:::i;:::-;8456:7;-1:-1:-1;8510:2:167;8495:18;;8482:32;;-1:-1:-1;8566:3:167;8551:19;;8538:33;8615:4;8602:18;;8590:31;;8580:59;;8635:1;8632;8625:12;8580:59;7863:912;;;;-1:-1:-1;7863:912:167;;;;8658:7;8712:3;8697:19;;8684:33;;-1:-1:-1;8764:3:167;8749:19;;;8736:33;;7863:912;-1:-1:-1;;7863:912:167:o;8780:391::-;8857:6;8865;8873;8926:2;8914:9;8905:7;8901:23;8897:32;8894:52;;;8942:1;8939;8932:12;8894:52;8978:9;8965:23;8955:33;;9038:2;9027:9;9023:18;9010:32;9051:39;9084:5;9051:39;:::i;:::-;8780:391;;9109:5;;-1:-1:-1;;;9161:2:167;9146:18;;;;9133:32;;8780:391::o;9644:691::-;9739:6;9747;9755;9763;9771;9824:3;9812:9;9803:7;9799:23;9795:33;9792:53;;;9841:1;9838;9831:12;9792:53;9877:9;9864:23;9854:33;;9937:2;9926:9;9922:18;9909:32;9950:39;9983:5;9950:39;:::i;:::-;10008:5;-1:-1:-1;10065:2:167;10050:18;;10037:32;10078:41;10037:32;10078:41;:::i;:::-;10138:7;-1:-1:-1;10192:2:167;10177:18;;10164:32;;-1:-1:-1;10248:3:167;10233:19;;10220:33;10262:41;10220:33;10262:41;:::i;:::-;10322:7;10312:17;;;9644:691;;;;;;;;:::o;10340:180::-;10399:6;10452:2;10440:9;10431:7;10427:23;10423:32;10420:52;;;10468:1;10465;10458:12;10420:52;-1:-1:-1;10491:23:167;;10340:180;-1:-1:-1;10340:180:167:o;10525:184::-;10595:6;10648:2;10636:9;10627:7;10623:23;10619:32;10616:52;;;10664:1;10661;10654:12;10616:52;-1:-1:-1;10687:16:167;;10525:184;-1:-1:-1;10525:184:167:o;10714:334::-;10916:2;10898:21;;;10955:2;10935:18;;;10928:30;-1:-1:-1;;;10989:2:167;10974:18;;10967:40;11039:2;11024:18;;10714:334::o;11185:127::-;11246:10;11241:3;11237:20;11234:1;11227:31;11277:4;11274:1;11267:15;11301:4;11298:1;11291:15;11317:200;-1:-1:-1;;;;;11453:10:167;;;11441;;;11437:27;;11476:12;;;11473:38;;;11491:18;;:::i;:::-;11473:38;11317:200;;;;:::o;11846:127::-;11907:10;11902:3;11898:20;11895:1;11888:31;11938:4;11935:1;11928:15;11962:4;11959:1;11952:15;11978:125;12043:9;;;12064:10;;;12061:36;;;12077:18;;:::i;12108:128::-;12175:9;;;12196:11;;;12193:37;;;12210:18;;:::i;12637:168::-;12710:9;;;12741;;12758:15;;;12752:22;;12738:37;12728:71;;12779:18;;:::i;14216:135::-;14255:3;14276:17;;;14273:43;;14296:18;;:::i;:::-;-1:-1:-1;14343:1:167;14332:13;;14216:135::o;15016:127::-;15077:10;15072:3;15068:20;15065:1;15058:31;15108:4;15105:1;15098:15;15132:4;15129:1;15122:15;15148:112;15180:1;15206;15196:35;;15211:18;;:::i;:::-;-1:-1:-1;15245:9:167;;15148:112::o;15924:197::-;-1:-1:-1;;;;;16046:10:167;;;16058;;;16042:27;;16081:11;;;16078:37;;;16095:18;;:::i;16126:245::-;16224:2;16194:17;;;16213;;;;16190:41;-1:-1:-1;;;;;16246:44:167;;-1:-1:-1;;;;;;16292:49:167;;16243:99;16240:125;;;16345:18;;:::i;16376:249::-;16476:2;16465:17;;;16446;;;;16442:41;-1:-1:-1;;;;;;16498:50:167;;-1:-1:-1;;;;;16550:45:167;;16495:101;16492:127;;;16599:18;;:::i;16630:200::-;16696:9;;;16669:4;16724:9;;16752:10;;16764:12;;;16748:29;16787:12;;;16779:21;;16745:56;16742:82;;;16804:18;;:::i;17560:136::-;17595:3;-1:-1:-1;;;17616:22:167;;17613:48;;17641:18;;:::i;:::-;-1:-1:-1;17681:1:167;17677:13;;17560:136::o;17701:216::-;17765:9;;;17793:11;;;17740:3;17823:9;;17851:10;;17847:19;;17876:10;;17868:19;;17844:44;17841:70;;;17891:18;;:::i;:::-;17841:70;;17701:216;;;;:::o;17922:245::-;17989:6;18042:2;18030:9;18021:7;18017:23;18013:32;18010:52;;;18058:1;18055;18048:12;18010:52;18090:9;18084:16;18109:28;18131:5;18109:28;:::i;18963:193::-;19002:1;19028;19018:35;;19033:18;;:::i;:::-;-1:-1:-1;;;19069:18:167;;-1:-1:-1;;19089:13:167;;19065:38;19062:64;;;19106:18;;:::i;:::-;-1:-1:-1;19140:10:167;;18963:193::o;19568:287::-;19697:3;19735:6;19729:13;19751:66;19810:6;19805:3;19798:4;19790:6;19786:17;19751:66;:::i;:::-;19833:16;;;;;19568:287;-1:-1:-1;;19568:287:167:o;20218:396::-;20367:2;20356:9;20349:21;20330:4;20399:6;20393:13;20442:6;20437:2;20426:9;20422:18;20415:34;20458:79;20530:6;20525:2;20514:9;20510:18;20505:2;20497:6;20493:15;20458:79;:::i;:::-;20598:2;20577:15;-1:-1:-1;;20573:29:167;20558:45;;;;20605:2;20554:54;;20218:396;-1:-1:-1;;20218:396:167:o",
    "linkReferences": {},
    "immutableReferences": {
      "10": [
        {
          "start": 354,
          "length": 32
        },
        {
          "start": 1221,
          "length": 32
        }
      ],
      "11651": [
        {
          "start": 907,
          "length": 32
        },
        {
          "start": 4584,
          "length": 32
        }
      ],
      "12488": [
        {
          "start": 12620,
          "length": 32
        }
      ],
      "12490": [
        {
          "start": 12681,
          "length": 32
        }
      ],
      "4811": [
        {
          "start": 12926,
          "length": 32
        }
      ],
      "4814": [
        {
          "start": 8268,
          "length": 32
        },
        {
          "start": 8437,
          "length": 32
        },
        {
          "start": 8739,
          "length": 32
        }
      ],
      "4817": [
        {
          "start": 2786,
          "length": 32
        },
        {
          "start": 4055,
          "length": 32
        },
        {
          "start": 5178,
          "length": 32
        },
        {
          "start": 6294,
          "length": 32
        },
        {
          "start": 7250,
          "length": 32
        },
        {
          "start": 7811,
          "length": 32
        },
        {
          "start": 8891,
          "length": 32
        },
        {
          "start": 9175,
          "length": 32
        },
        {
          "start": 11202,
          "length": 32
        },
        {
          "start": 11797,
          "length": 32
        },
        {
          "start": 17156,
          "length": 32
        },
        {
          "start": 18619,
          "length": 32
        },
        {
          "start": 20306,
          "length": 32
        }
      ],
      "4820": [
        {
          "start": 4088,
          "length": 32
        },
        {
          "start": 5211,
          "length": 32
        },
        {
          "start": 10840,
          "length": 32
        },
        {
          "start": 10984,
          "length": 32
        },
        {
          "start": 13787,
          "length": 32
        },
        {
          "start": 14980,
          "length": 32
        },
        {
          "start": 16023,
          "length": 32
        },
        {
          "start": 16965,
          "length": 32
        },
        {
          "start": 18922,
          "length": 32
        }
      ],
      "4823": [
        {
          "start": 4021,
          "length": 32
        },
        {
          "start": 5145,
          "length": 32
        },
        {
          "start": 10874,
          "length": 32
        },
        {
          "start": 10951,
          "length": 32
        },
        {
          "start": 13711,
          "length": 32
        },
        {
          "start": 15014,
          "length": 32
        },
        {
          "start": 16057,
          "length": 32
        },
        {
          "start": 16999,
          "length": 32
        },
        {
          "start": 18889,
          "length": 32
        }
      ],
      "4826": [
        {
          "start": 3833,
          "length": 32
        },
        {
          "start": 3908,
          "length": 32
        },
        {
          "start": 4166,
          "length": 32
        },
        {
          "start": 13749,
          "length": 32
        },
        {
          "start": 14559,
          "length": 32
        },
        {
          "start": 14638,
          "length": 32
        },
        {
          "start": 17653,
          "length": 32
        },
        {
          "start": 18210,
          "length": 32
        },
        {
          "start": 18270,
          "length": 32
        },
        {
          "start": 21125,
          "length": 32
        }
      ],
      "4829": [
        {
          "start": 2589,
          "length": 32
        },
        {
          "start": 5048,
          "length": 32
        },
        {
          "start": 6088,
          "length": 32
        },
        {
          "start": 6552,
          "length": 32
        },
        {
          "start": 7109,
          "length": 32
        },
        {
          "start": 7622,
          "length": 32
        }
      ],
      "4840": [
        {
          "start": 11033,
          "length": 32
        },
        {
          "start": 15078,
          "length": 32
        },
        {
          "start": 19353,
          "length": 32
        },
        {
          "start": 21004,
          "length": 32
        }
      ],
      "4843": [
        {
          "start": 11324,
          "length": 32
        },
        {
          "start": 16244,
          "length": 32
        },
        {
          "start": 17986,
          "length": 32
        },
        {
          "start": 19475,
          "length": 32
        }
      ],
      "4846": [
        {
          "start": 18030,
          "length": 32
        },
        {
          "start": 19398,
          "length": 32
        },
        {
          "start": 19519,
          "length": 32
        },
        {
          "start": 21072,
          "length": 32
        }
      ],
      "4864": [
        {
          "start": 1456,
          "length": 32
        },
        {
          "start": 1728,
          "length": 32
        },
        {
          "start": 3179,
          "length": 32
        },
        {
          "start": 3301,
          "length": 32
        },
        {
          "start": 3411,
          "length": 32
        }
      ],
      "4867": [
        {
          "start": 18997,
          "length": 32
        }
      ],
      "6319": [
        {
          "start": 8612,
          "length": 32
        },
        {
          "start": 10006,
          "length": 32
        },
        {
          "start": 10208,
          "length": 32
        },
        {
          "start": 12994,
          "length": 32
        },
        {
          "start": 13144,
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
    "dataProvider()": "b334ed86",
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
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"oracleSize\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updateGap\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"_dataProvider\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"_linkerFactory\",\"type\":\"address\"},{\"internalType\":\"contract IERC4626\",\"name\":\"_pool\",\"type\":\"address\"},{\"internalType\":\"address[]\",\"name\":\"_targets\",\"type\":\"address[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"ApprovalFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BaseBufferExceedsShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BelowMinimumContribution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidApr\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidBaseToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointTime\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativeInterest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Paused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolAlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsupportedToken\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minApr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxApr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"dataProvider\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_withdrawalShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutputPerShare\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesRedeemed\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_lpShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalShares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_target\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_contribution\":\"The amount to supply.\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"lpShares\":\"The number of LP tokens created\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"the source account\",\"ids\":\"The array of token ids of the asset to transfer\",\"to\":\"the destination account\",\"values\":\"The amount of each token to transfer\"}},\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of longs to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum amount of base the trader will accept.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The amount of underlying the user receives.\"}},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of shorts to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum output of this trade.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The amount of base tokens produced by closing this short\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The amount of base collected.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\",\"_dataProvider\":\"The address of the data provider.\",\"_linkerCodeHash\":\"The hash of the ERC20 linker contract's        constructor code.\",\"_linkerFactory\":\"The factory which is used to deploy the ERC20        linker contracts.\",\"_pool\":\"The ERC4626 compatible yield source.\",\"_targets\":\"The addresses that can be swept by governance. This        allows governance to collect rewards derived from incentive        programs while also preventing edge cases where `sweep` is used        to access the pool or base tokens.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount to supply.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"lpShares\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_amount\":\"The amount to open a long with.\",\"_minOutput\":\"The minimum number of bonds to receive.\",\"_minSharePrice\":\"The minimum share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"bondProceeds\":\"The amount of bonds the user received\",\"maturityTime\":\"The maturity time of the bonds.\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade.\",\"_minSharePrice\":\"The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the short.\",\"_1\":\"The amount the user deposited for this trade.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should be generated with the      eth_signTypedData JSON RPC call instead of the eth_sign JSON RPC call. If using out of date      parity signing libraries the v component may need to be adjusted. Also it is very rare but possible      for v to be other values, those values are not supported.\",\"params\":{\"_approved\":\"a boolean of the approval status to set to\",\"deadline\":\"the timestamp which the signature must be submitted by to be valid\",\"owner\":\"the owner of the account which is having the new approval set\",\"r\":\"The r component of the ECDSA signature\",\"s\":\"The s component of the ECDSA signature\",\"spender\":\"the address which will be allowed to spend owner's tokens\",\"v\":\"Extra ECDSA data which allows public key recovery from signature assumed to be 27 or 28\"}},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_minOutputPerShare\":\"The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.\",\"_options\":\"The options that configure how the operation is settled.\",\"_withdrawalShares\":\"The withdrawal shares to redeem.\"},\"returns\":{\"proceeds\":\"The amount the LP received.\",\"withdrawalSharesRedeemed\":\"The amount of withdrawal shares that were redeemed.\"}},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_lpShares\":\"The LP shares to burn.\",\"_minOutput\":\"The minium amount of the base token to receive.Note - this        value is likely to be less than the amount LP shares are worth.        The remainder is in short and long withdraw shares which are hard        to game the value of.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"proceeds\":\"The amount the LP removing liquidity receives. The         LP receives a proportional amount of the pool's idle capital\",\"withdrawalShares\":\"The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal         in value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]\",\"operator\":\"The address who will be able to use the tokens\",\"tokenID\":\"The asset to approve the use of\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]\",\"caller\":\"The eth address which called the linking contract\",\"operator\":\"The address who will be able to use the tokens\",\"tokenID\":\"The asset to approve the use of\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval\",\"operator\":\"The eth address which can access the caller's assets\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"sweep(address)\":{\"details\":\"WARN: The entire balance of any of the sweep targets can be swept      by governance. If these sweep targets provide access to the base or      pool token, then governance has the ability to rug the pool.WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The token to sweep.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move\",\"from\":\"The address who's balance will be reduced\",\"to\":\"The address who's balance will be increased\",\"tokenID\":\"The token identifier\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move\",\"caller\":\"The msg.sender from the bridge\",\"from\":\"The address who's balance will be reduced\",\"to\":\"The address who's balance will be increased\",\"tokenID\":\"The token identifier\"}}},\"stateVariables\":{\"isSweepable\":{\"details\":\"A mapping from addresses to their status as a sweep target. This      mapping does not change after construction.\"},\"pool\":{\"details\":\"The yield source contract for this hyperdrive\"}},\"title\":\"ERC4626Hyperdrive\",\"version\":1},\"userdoc\":{\"errors\":{\"ApprovalFailed()\":[{\"notice\":\"################## ### Hyperdrive ### ##################\"}],\"BatchInputLengthMismatch()\":[{\"notice\":\"###################### ### ERC20Forwarder ### ######################\"}],\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}],\"Unauthorized()\":[{\"notice\":\"############### ### Factory ### ###############\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"###################### ### SafeCast ### ######################\"}]},\"events\":{\"PauserUpdated(address)\":{\"notice\":\"Pause ///\"}},\"kind\":\"user\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another\"},\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Initializes a Hyperdrive pool.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owners signature.\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to set asset approvals\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"sweep(address)\":{\"notice\":\"Some yield sources [eg Morpho] pay rewards directly to this         contract but we can't handle distributing them internally so we         sweep to the fee collector address to then redistribute to users.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permission-ed transfer for the bridge to access, only callable by         the ERC20 linking bridge\"}},\"notice\":\"An instance of Hyperdrive that utilizes ERC4626 vaults as a yield source.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/ERC4626Hyperdrive.sol\":\"ERC4626Hyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/DataProvider.sol\":{\"keccak256\":\"0x4ab8d6b27ad40963fde6512935aa0163c00259a51477bcb15d85f222d84ed0a6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3eaed8100e054b7b6d3dd34b80c72ab86669076d72e83daca1c6297441ac0e4b\",\"dweb:/ipfs/QmPCr6XchfY4nbvVdvnuJzPJc434AV6HAnjQXnSgo9vNDt\"]},\"contracts/src/Hyperdrive.sol\":{\"keccak256\":\"0x2a4cbe095d6b6818959ba078ba32a3d71b06bee714193a92431e0ee56ae714bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://31bad624349a8efd7f0d1ada9e8635b7d4191e0f80174b861ae76e63279917f6\",\"dweb:/ipfs/QmVBWfcxpNQLegXVLmoGYy1H5rwGaaAmkRwaLJiaxAaJmX\"]},\"contracts/src/HyperdriveBase.sol\":{\"keccak256\":\"0xd8b673eb52f74ac18cd75bcc4a9a4ba56bb952eb31600d522b6046c25e8d4c32\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://17a8b842f8538181e5a56fd3a904b7aa1bde2eb2c3d5e7fc55bbf5aea084ffbd\",\"dweb:/ipfs/QmVFB1ysPMXo6DPRdc3bAfMpWY8VCPwS3xhxmUFDRY4Zgu\"]},\"contracts/src/HyperdriveLP.sol\":{\"keccak256\":\"0x8d7edd9add98082a7a8d269f99788237a0b244c8dca3556a367b764bc3c17c02\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://abfe277c6982ed6344c8a2e4507e322d61fbbb76f62c673bdfbaa61495188669\",\"dweb:/ipfs/QmRp1Fc2WkAxQjxLWBr4Y7RL5j2VAQpqWMZ8Zd7sAAE2FJ\"]},\"contracts/src/HyperdriveLong.sol\":{\"keccak256\":\"0x7dda4c0437e908336901192a3ac4290dfd27a8afc618f4dd787c517ffe608d9c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://70133e63ca643fce51ac8eac8cadb96910fcabde98362e8c3cf91c0b629779f0\",\"dweb:/ipfs/QmTqAFsCvvA2X43oLfbmUFqvaj7eMLLHZ9odREFsBtzdmf\"]},\"contracts/src/HyperdriveShort.sol\":{\"keccak256\":\"0x0330ca18326c2da2cfd29a6433e15dc8fb6213ef5b70717ef02a4fa17f69e64a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c23b142bc142472a47c6e739d008c90471dbcf8ec5b9415fd0e86f5920ef5dc1\",\"dweb:/ipfs/QmdnW3Kk4R7kQ1FQBuQNV5M9VUdHSkEvvvsjNBDoVi5geX\"]},\"contracts/src/HyperdriveStorage.sol\":{\"keccak256\":\"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a\",\"dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY\"]},\"contracts/src/HyperdriveTWAP.sol\":{\"keccak256\":\"0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc\",\"dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac\"]},\"contracts/src/instances/ERC4626Hyperdrive.sol\":{\"keccak256\":\"0x7e65b944b0abe21e7f58ca9958efb6748c4262e5c95ffd3aae5c39d247ce23a5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://15727d969eab7810df00d33157a428338d52e64ed13809c8a079943f6a7b540d\",\"dweb:/ipfs/QmY8yGfRuuHvW3TrB4QHGAZ2K948w63aiTc37abrw7FawA\"]},\"contracts/src/interfaces/IDataProvider.sol\":{\"keccak256\":\"0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15\",\"dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc\",\"dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78\",\"dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206\",\"dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xa425f4064f7e95fc5da7763b26627ef0be68db76763bde67cd54cfda489a19ed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://abc4b8f6f8c66a0d966b1dc366d689fc2844a60d866ed3f19cdd3852a0c274f6\",\"dweb:/ipfs/QmUSo1URvRru11TYPMGSdQR6FDRZk7SPh8tcze3T6XL4gL\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xbd61fe3be6d0c8742f09a8174a5a2757e9070805b49d3fc7217f120b83c0ce0f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5b6524a56a3062a3d9b47c2ad2712f90643a84971cd155f8f00fd31ef7a432fe\",\"dweb:/ipfs/QmXYtLBzjaVkh4WhTxTE1GEoqjcyidw1peyAenfAd5vPPr\"]},\"contracts/src/token/MultiToken.sol\":{\"keccak256\":\"0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98\",\"dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy\"]},\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]}},\"version\":1}",
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
                      "name": "governance",
                      "type": "uint256"
                    }
                  ]
                },
                {
                  "internalType": "uint256",
                  "name": "oracleSize",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "updateGap",
                  "type": "uint256"
                }
              ]
            },
            {
              "internalType": "address",
              "name": "_dataProvider",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "_linkerCodeHash",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "_linkerFactory",
              "type": "address"
            },
            {
              "internalType": "contract IERC4626",
              "name": "_pool",
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
          "name": "ApprovalFailed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "BaseBufferExceedsShareReserves"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "BatchInputLengthMismatch"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "BelowMinimumContribution"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ExpiredDeadline"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FixedPointMath_InvalidExponent"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FixedPointMath_InvalidInput"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidApr"
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
          "name": "InvalidCheckpointTime"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidERC20Bridge"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidFeeAmounts"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidFeeDestination"
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
          "name": "InvalidShareReserves"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidSignature"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidTimestamp"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidTradeSize"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "MinimumSharePrice"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "MinimumTransactionAmount"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NegativeInterest"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NegativePresentValue"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NotPayable"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "OutputLimit"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Paused"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "PoolAlreadyInitialized"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "RestrictedZeroAddress"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Unauthorized"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnexpectedSuccess"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnsafeCastToInt128"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnsafeCastToUint128"
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
              "name": "baseFees",
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
              "name": "_contribution",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minApr",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_maxApr",
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
          "stateMutability": "payable",
          "type": "function",
          "name": "addLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "lpShares",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
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
              "name": "_checkpointTime",
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
              "name": "_maturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_bondAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
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
              "name": "_maturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_bondAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
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
          "name": "collectGovernanceFee",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "proceeds",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "dataProvider",
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
              "name": "_contribution",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_apr",
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
          "stateMutability": "payable",
          "type": "function",
          "name": "initialize",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "lpShares",
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
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minSharePrice",
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
          "stateMutability": "payable",
          "type": "function",
          "name": "openLong",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "bondProceeds",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_bondAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_maxDeposit",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minSharePrice",
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
              "name": "_status",
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
              "name": "_withdrawalShares",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutputPerShare",
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
          "name": "redeemWithdrawalShares",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "proceeds",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "withdrawalSharesRedeemed",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_lpShares",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
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
          "name": "removeLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "proceeds",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "withdrawalShares",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
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
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "caller",
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
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
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
              "name": "_who",
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
              "name": "who",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "status",
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
              "name": "_target",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "sweep"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
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
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "caller",
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
          "addLiquidity(uint256,uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_contribution": "The amount to supply.",
              "_maxApr": "The maximum APR at which the LP is willing to supply.",
              "_minApr": "The minimum APR at which the LP is willing to supply.",
              "_options": "The options that configure how the operation is settled."
            },
            "returns": {
              "lpShares": "The number of LP tokens created"
            }
          },
          "batchTransferFrom(address,address,uint256[],uint256[])": {
            "params": {
              "from": "the source account",
              "ids": "The array of token ids of the asset to transfer",
              "to": "the destination account",
              "values": "The amount of each token to transfer"
            }
          },
          "checkpoint(uint256)": {
            "params": {
              "_checkpointTime": "The time of the checkpoint to create."
            }
          },
          "closeLong(uint256,uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_bondAmount": "The amount of longs to close.",
              "_maturityTime": "The maturity time of the short.",
              "_minOutput": "The minimum amount of base the trader will accept.",
              "_options": "The options that configure how the trade is settled."
            },
            "returns": {
              "_0": "The amount of underlying the user receives."
            }
          },
          "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_bondAmount": "The amount of shorts to close.",
              "_maturityTime": "The maturity time of the short.",
              "_minOutput": "The minimum output of this trade.",
              "_options": "The options that configure how the trade is settled."
            },
            "returns": {
              "_0": "The amount of base tokens produced by closing this short"
            }
          },
          "collectGovernanceFee((address,bool,bytes))": {
            "params": {
              "_options": "The options that configure how the fees are settled."
            },
            "returns": {
              "proceeds": "The amount of base collected."
            }
          },
          "constructor": {
            "params": {
              "_config": "The configuration of the Hyperdrive pool.",
              "_dataProvider": "The address of the data provider.",
              "_linkerCodeHash": "The hash of the ERC20 linker contract's        constructor code.",
              "_linkerFactory": "The factory which is used to deploy the ERC20        linker contracts.",
              "_pool": "The ERC4626 compatible yield source.",
              "_targets": "The addresses that can be swept by governance. This        allows governance to collect rewards derived from incentive        programs while also preventing edge cases where `sweep` is used        to access the pool or base tokens."
            }
          },
          "initialize(uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_apr": "The target APR.",
              "_contribution": "The amount to supply.",
              "_options": "The options that configure how the operation is settled."
            },
            "returns": {
              "lpShares": "The initial number of LP shares created."
            }
          },
          "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_amount": "The amount to open a long with.",
              "_minOutput": "The minimum number of bonds to receive.",
              "_minSharePrice": "The minimum share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.",
              "_options": "The options that configure how the trade is settled."
            },
            "returns": {
              "bondProceeds": "The amount of bonds the user received",
              "maturityTime": "The maturity time of the bonds."
            }
          },
          "openShort(uint256,uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_bondAmount": "The amount of bonds to short.",
              "_maxDeposit": "The most the user expects to deposit for this trade.",
              "_minSharePrice": "The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.",
              "_options": "The options that configure how the trade is settled."
            },
            "returns": {
              "_0": "The maturity time of the short.",
              "_1": "The amount the user deposited for this trade."
            }
          },
          "pause(bool)": {
            "params": {
              "_status": "True to pause all deposits and false to unpause them."
            }
          },
          "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
            "details": "The signature for this function follows EIP 712 standard and should be generated with the      eth_signTypedData JSON RPC call instead of the eth_sign JSON RPC call. If using out of date      parity signing libraries the v component may need to be adjusted. Also it is very rare but possible      for v to be other values, those values are not supported.",
            "params": {
              "_approved": "a boolean of the approval status to set to",
              "deadline": "the timestamp which the signature must be submitted by to be valid",
              "owner": "the owner of the account which is having the new approval set",
              "r": "The r component of the ECDSA signature",
              "s": "The s component of the ECDSA signature",
              "spender": "the address which will be allowed to spend owner's tokens",
              "v": "Extra ECDSA data which allows public key recovery from signature assumed to be 27 or 28"
            }
          },
          "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_minOutputPerShare": "The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.",
              "_options": "The options that configure how the operation is settled.",
              "_withdrawalShares": "The withdrawal shares to redeem."
            },
            "returns": {
              "proceeds": "The amount the LP received.",
              "withdrawalSharesRedeemed": "The amount of withdrawal shares that were redeemed."
            }
          },
          "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_lpShares": "The LP shares to burn.",
              "_minOutput": "The minium amount of the base token to receive.Note - this        value is likely to be less than the amount LP shares are worth.        The remainder is in short and long withdraw shares which are hard        to game the value of.",
              "_options": "The options that configure how the operation is settled."
            },
            "returns": {
              "proceeds": "The amount the LP removing liquidity receives. The         LP receives a proportional amount of the pool's idle capital",
              "withdrawalShares": "The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal         in value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares."
            }
          },
          "setApproval(uint256,address,uint256)": {
            "params": {
              "amount": "The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]",
              "operator": "The address who will be able to use the tokens",
              "tokenID": "The asset to approve the use of"
            }
          },
          "setApprovalBridge(uint256,address,uint256,address)": {
            "params": {
              "amount": "The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]",
              "caller": "The eth address which called the linking contract",
              "operator": "The address who will be able to use the tokens",
              "tokenID": "The asset to approve the use of"
            }
          },
          "setApprovalForAll(address,bool)": {
            "params": {
              "approved": "True to approve, false to remove approval",
              "operator": "The eth address which can access the caller's assets"
            }
          },
          "setGovernance(address)": {
            "params": {
              "_who": "The new governance address."
            }
          },
          "setPauser(address,bool)": {
            "params": {
              "status": "The new pauser status.",
              "who": "The address to change."
            }
          },
          "sweep(address)": {
            "details": "WARN: The entire balance of any of the sweep targets can be swept      by governance. If these sweep targets provide access to the base or      pool token, then governance has the ability to rug the pool.WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.",
            "params": {
              "_target": "The token to sweep."
            }
          },
          "transferFrom(uint256,address,address,uint256)": {
            "params": {
              "amount": "The amount of token to move",
              "from": "The address who's balance will be reduced",
              "to": "The address who's balance will be increased",
              "tokenID": "The token identifier"
            }
          },
          "transferFromBridge(uint256,address,address,uint256,address)": {
            "params": {
              "amount": "The amount of token to move",
              "caller": "The msg.sender from the bridge",
              "from": "The address who's balance will be reduced",
              "to": "The address who's balance will be increased",
              "tokenID": "The token identifier"
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
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
            "notice": "Initializes a Hyperdrive pool."
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
            "notice": "Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owners signature."
          },
          "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": {
            "notice": "Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw."
          },
          "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
            "notice": "Allows an LP to burn shares and withdraw from the pool."
          },
          "setApproval(uint256,address,uint256)": {
            "notice": "Allows a user to set an approval for an individual asset with specific amount."
          },
          "setApprovalBridge(uint256,address,uint256,address)": {
            "notice": "Allows the compatibility linking contract to forward calls to set asset approvals"
          },
          "setApprovalForAll(address,bool)": {
            "notice": "Allows a user to approve an operator to use all of their assets"
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
          "transferFrom(uint256,address,address,uint256)": {
            "notice": "Transfers an amount of assets from the source to the destination"
          },
          "transferFromBridge(uint256,address,address,uint256,address)": {
            "notice": "Permission-ed transfer for the bridge to access, only callable by         the ERC20 linking bridge"
          }
        },
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/",
        "lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"
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
      "contracts/src/DataProvider.sol": {
        "keccak256": "0x4ab8d6b27ad40963fde6512935aa0163c00259a51477bcb15d85f222d84ed0a6",
        "urls": [
          "bzz-raw://3eaed8100e054b7b6d3dd34b80c72ab86669076d72e83daca1c6297441ac0e4b",
          "dweb:/ipfs/QmPCr6XchfY4nbvVdvnuJzPJc434AV6HAnjQXnSgo9vNDt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/Hyperdrive.sol": {
        "keccak256": "0x2a4cbe095d6b6818959ba078ba32a3d71b06bee714193a92431e0ee56ae714bf",
        "urls": [
          "bzz-raw://31bad624349a8efd7f0d1ada9e8635b7d4191e0f80174b861ae76e63279917f6",
          "dweb:/ipfs/QmVBWfcxpNQLegXVLmoGYy1H5rwGaaAmkRwaLJiaxAaJmX"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveBase.sol": {
        "keccak256": "0xd8b673eb52f74ac18cd75bcc4a9a4ba56bb952eb31600d522b6046c25e8d4c32",
        "urls": [
          "bzz-raw://17a8b842f8538181e5a56fd3a904b7aa1bde2eb2c3d5e7fc55bbf5aea084ffbd",
          "dweb:/ipfs/QmVFB1ysPMXo6DPRdc3bAfMpWY8VCPwS3xhxmUFDRY4Zgu"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveLP.sol": {
        "keccak256": "0x8d7edd9add98082a7a8d269f99788237a0b244c8dca3556a367b764bc3c17c02",
        "urls": [
          "bzz-raw://abfe277c6982ed6344c8a2e4507e322d61fbbb76f62c673bdfbaa61495188669",
          "dweb:/ipfs/QmRp1Fc2WkAxQjxLWBr4Y7RL5j2VAQpqWMZ8Zd7sAAE2FJ"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveLong.sol": {
        "keccak256": "0x7dda4c0437e908336901192a3ac4290dfd27a8afc618f4dd787c517ffe608d9c",
        "urls": [
          "bzz-raw://70133e63ca643fce51ac8eac8cadb96910fcabde98362e8c3cf91c0b629779f0",
          "dweb:/ipfs/QmTqAFsCvvA2X43oLfbmUFqvaj7eMLLHZ9odREFsBtzdmf"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveShort.sol": {
        "keccak256": "0x0330ca18326c2da2cfd29a6433e15dc8fb6213ef5b70717ef02a4fa17f69e64a",
        "urls": [
          "bzz-raw://c23b142bc142472a47c6e739d008c90471dbcf8ec5b9415fd0e86f5920ef5dc1",
          "dweb:/ipfs/QmdnW3Kk4R7kQ1FQBuQNV5M9VUdHSkEvvvsjNBDoVi5geX"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveStorage.sol": {
        "keccak256": "0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc",
        "urls": [
          "bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a",
          "dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveTWAP.sol": {
        "keccak256": "0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b",
        "urls": [
          "bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc",
          "dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/instances/ERC4626Hyperdrive.sol": {
        "keccak256": "0x7e65b944b0abe21e7f58ca9958efb6748c4262e5c95ffd3aae5c39d247ce23a5",
        "urls": [
          "bzz-raw://15727d969eab7810df00d33157a428338d52e64ed13809c8a079943f6a7b540d",
          "dweb:/ipfs/QmY8yGfRuuHvW3TrB4QHGAZ2K948w63aiTc37abrw7FawA"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IDataProvider.sol": {
        "keccak256": "0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843",
        "urls": [
          "bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15",
          "dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
      },
      "contracts/src/interfaces/IERC4626.sol": {
        "keccak256": "0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf",
        "urls": [
          "bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc",
          "dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia"
        ],
        "license": "GPL-2.0-or-later"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7",
        "urls": [
          "bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78",
          "dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3",
        "urls": [
          "bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993",
          "dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveWrite.sol": {
        "keccak256": "0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc",
        "urls": [
          "bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206",
          "dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a",
        "urls": [
          "bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0",
          "dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc",
        "urls": [
          "bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87",
          "dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05",
        "urls": [
          "bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939",
          "dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenWrite.sol": {
        "keccak256": "0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8",
        "urls": [
          "bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a",
          "dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"
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
        "keccak256": "0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd",
        "urls": [
          "bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b",
          "dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0xa425f4064f7e95fc5da7763b26627ef0be68db76763bde67cd54cfda489a19ed",
        "urls": [
          "bzz-raw://abc4b8f6f8c66a0d966b1dc366d689fc2844a60d866ed3f19cdd3852a0c274f6",
          "dweb:/ipfs/QmUSo1URvRru11TYPMGSdQR6FDRZk7SPh8tcze3T6XL4gL"
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
        "keccak256": "0xbd61fe3be6d0c8742f09a8174a5a2757e9070805b49d3fc7217f120b83c0ce0f",
        "urls": [
          "bzz-raw://5b6524a56a3062a3d9b47c2ad2712f90643a84971cd155f8f00fd31ef7a432fe",
          "dweb:/ipfs/QmXYtLBzjaVkh4WhTxTE1GEoqjcyidw1peyAenfAd5vPPr"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/token/MultiToken.sol": {
        "keccak256": "0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19",
        "urls": [
          "bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98",
          "dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/token/MultiTokenStorage.sol": {
        "keccak256": "0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8",
        "urls": [
          "bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6",
          "dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj"
        ],
        "license": "Apache-2.0"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        "urls": [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
        "keccak256": "0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb",
        "urls": [
          "bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0",
          "dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        "keccak256": "0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a",
        "urls": [
          "bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577",
          "dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        "keccak256": "0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26",
        "urls": [
          "bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f",
          "dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"
        ],
        "license": "MIT"
      },
      "lib/solmate/src/utils/ReentrancyGuard.sol": {
        "keccak256": "0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01",
        "urls": [
          "bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800",
          "dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/instances/ERC4626Hyperdrive.sol",
    "id": 6645,
    "exportedSymbols": {
      "ERC4626Hyperdrive": [
        6644
      ],
      "FixedPointMath": [
        9066
      ],
      "Hyperdrive": [
        549
      ],
      "IERC20": [
        6731
      ],
      "IERC4626": [
        6956
      ],
      "IHyperdrive": [
        7431
      ],
      "SafeERC20": [
        60369
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:8399:13",
    "nodes": [
      {
        "id": 6293,
        "nodeType": "PragmaDirective",
        "src": "39:23:13",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 6295,
        "nodeType": "ImportDirective",
        "src": "64:93:13",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol",
        "file": "openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6645,
        "sourceUnit": 60370,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6294,
              "name": "SafeERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 60369,
              "src": "73:9:13",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6297,
        "nodeType": "ImportDirective",
        "src": "158:47:13",
        "nodes": [],
        "absolutePath": "contracts/src/Hyperdrive.sol",
        "file": "../Hyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6645,
        "sourceUnit": 550,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6296,
              "name": "Hyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 549,
              "src": "167:10:13",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6299,
        "nodeType": "ImportDirective",
        "src": "206:50:13",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "../interfaces/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6645,
        "sourceUnit": 6732,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6298,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6731,
              "src": "215:6:13",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6301,
        "nodeType": "ImportDirective",
        "src": "257:54:13",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC4626.sol",
        "file": "../interfaces/IERC4626.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6645,
        "sourceUnit": 6957,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6300,
              "name": "IERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6956,
              "src": "266:8:13",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6303,
        "nodeType": "ImportDirective",
        "src": "312:60:13",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6645,
        "sourceUnit": 7432,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6302,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7431,
              "src": "321:11:13",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6305,
        "nodeType": "ImportDirective",
        "src": "373:65:13",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6645,
        "sourceUnit": 9067,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6304,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9066,
              "src": "382:14:13",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6644,
        "nodeType": "ContractDefinition",
        "src": "845:7592:13",
        "nodes": [
          {
            "id": 6311,
            "nodeType": "UsingForDirective",
            "src": "892:33:13",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 6309,
              "name": "FixedPointMath",
              "nameLocations": [
                "898:14:13"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9066,
              "src": "898:14:13"
            },
            "typeName": {
              "id": 6310,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "917:7:13",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 6315,
            "nodeType": "UsingForDirective",
            "src": "930:27:13",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 6312,
              "name": "SafeERC20",
              "nameLocations": [
                "936:9:13"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 60369,
              "src": "936:9:13"
            },
            "typeName": {
              "id": 6314,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 6313,
                "name": "IERC20",
                "nameLocations": [
                  "950:6:13"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6731,
                "src": "950:6:13"
              },
              "referencedDeclaration": 6731,
              "src": "950:6:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$6731",
                "typeString": "contract IERC20"
              }
            }
          },
          {
            "id": 6319,
            "nodeType": "VariableDeclaration",
            "src": "1022:32:13",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 6316,
              "nodeType": "StructuredDocumentation",
              "src": "963:54:13",
              "text": "@dev The yield source contract for this hyperdrive"
            },
            "mutability": "immutable",
            "name": "pool",
            "nameLocation": "1050:4:13",
            "scope": 6644,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC4626_$6956",
              "typeString": "contract IERC4626"
            },
            "typeName": {
              "id": 6318,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 6317,
                "name": "IERC4626",
                "nameLocations": [
                  "1022:8:13"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6956,
                "src": "1022:8:13"
              },
              "referencedDeclaration": 6956,
              "src": "1022:8:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC4626_$6956",
                "typeString": "contract IERC4626"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 6324,
            "nodeType": "VariableDeclaration",
            "src": "1196:61:13",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 6320,
              "nodeType": "StructuredDocumentation",
              "src": "1061:130:13",
              "text": "@dev A mapping from addresses to their status as a sweep target. This\n      mapping does not change after construction."
            },
            "mutability": "mutable",
            "name": "isSweepable",
            "nameLocation": "1246:11:13",
            "scope": 6644,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 6323,
              "keyName": "target",
              "keyNameLocation": "1212:6:13",
              "keyType": {
                "id": 6321,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1204:7:13",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1196:40:13",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueName": "canSweep",
              "valueNameLocation": "1227:8:13",
              "valueType": {
                "id": 6322,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1222:4:13",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 6454,
            "nodeType": "FunctionDefinition",
            "src": "1990:1793:13",
            "nodes": [],
            "body": {
              "id": 6453,
              "nodeType": "Block",
              "src": "2278:1505:13",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 6351,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6349,
                      "name": "pool",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6319,
                      "src": "2330:4:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC4626_$6956",
                        "typeString": "contract IERC4626"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6350,
                      "name": "_pool",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6337,
                      "src": "2337:5:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC4626_$6956",
                        "typeString": "contract IERC4626"
                      }
                    },
                    "src": "2330:12:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$6956",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "id": 6352,
                  "nodeType": "ExpressionStatement",
                  "src": "2330:12:13"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 6357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 6353,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6328,
                        "src": "2828:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 6354,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2836:17:13",
                      "memberName": "initialSharePrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7213,
                      "src": "2828:25:13",
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
                        "id": 6355,
                        "name": "_pricePerShare",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          6588
                        ],
                        "referencedDeclaration": 6588,
                        "src": "2857:14:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 6356,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2857:16:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2828:45:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6364,
                  "nodeType": "IfStatement",
                  "src": "2824:121:13",
                  "trueBody": {
                    "id": 6363,
                    "nodeType": "Block",
                    "src": "2875:70:13",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 6358,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "2896:11:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 6360,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2908:24:13",
                            "memberName": "InvalidInitialSharePrice",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7314,
                            "src": "2896:36:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 6361,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2896:38:13",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6362,
                        "nodeType": "RevertStatement",
                        "src": "2889:45:13"
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
                    "id": 6373,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 6367,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6328,
                            "src": "2966:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 6368,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2974:9:13",
                          "memberName": "baseToken",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7210,
                          "src": "2966:17:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$6731",
                            "typeString": "contract IERC20"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IERC20_$6731",
                            "typeString": "contract IERC20"
                          }
                        ],
                        "id": 6366,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2958:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 6365,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2958:7:13",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 6369,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2958:26:13",
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
                          "id": 6370,
                          "name": "_pool",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6337,
                          "src": "2988:5:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC4626_$6956",
                            "typeString": "contract IERC4626"
                          }
                        },
                        "id": 6371,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2994:5:13",
                        "memberName": "asset",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6825,
                        "src": "2988:11:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_address_$",
                          "typeString": "function () view external returns (address)"
                        }
                      },
                      "id": 6372,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2988:13:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2958:43:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6380,
                  "nodeType": "IfStatement",
                  "src": "2954:111:13",
                  "trueBody": {
                    "id": 6379,
                    "nodeType": "Block",
                    "src": "3003:62:13",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 6374,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "3024:11:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 6376,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3036:16:13",
                            "memberName": "InvalidBaseToken",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7308,
                            "src": "3024:28:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 6377,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3024:30:13",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6378,
                        "nodeType": "RevertStatement",
                        "src": "3017:37:13"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "id": 6394,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "3152:60:13",
                    "subExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 6386,
                              "name": "pool",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6319,
                              "src": "3187:4:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC4626_$6956",
                                "typeString": "contract IERC4626"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IERC4626_$6956",
                                "typeString": "contract IERC4626"
                              }
                            ],
                            "id": 6385,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3179:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 6384,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "3179:7:13",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 6387,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3179:13:13",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "id": 6390,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3199:7:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 6389,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3199:7:13",
                                  "typeDescriptions": {}
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                }
                              ],
                              "id": 6388,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -27,
                              "src": "3194:4:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 6391,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3194:13:13",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_uint256",
                              "typeString": "type(uint256)"
                            }
                          },
                          "id": 6392,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "3208:3:13",
                          "memberName": "max",
                          "nodeType": "MemberAccess",
                          "src": "3194:17:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "expression": {
                            "id": 6381,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6328,
                            "src": "3153:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 6382,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3161:9:13",
                          "memberName": "baseToken",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7210,
                          "src": "3153:17:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$6731",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 6383,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3171:7:13",
                        "memberName": "approve",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6718,
                        "src": "3153:25:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 6393,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3153:59:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6401,
                  "nodeType": "IfStatement",
                  "src": "3148:126:13",
                  "trueBody": {
                    "id": 6400,
                    "nodeType": "Block",
                    "src": "3214:60:13",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 6395,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "3235:11:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 6397,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3247:14:13",
                            "memberName": "ApprovalFailed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7298,
                            "src": "3235:26:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 6398,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3235:28:13",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6399,
                        "nodeType": "RevertStatement",
                        "src": "3228:35:13"
                      }
                    ]
                  }
                },
                {
                  "body": {
                    "id": 6451,
                    "nodeType": "Block",
                    "src": "3475:302:13",
                    "statements": [
                      {
                        "assignments": [
                          6414
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 6414,
                            "mutability": "mutable",
                            "name": "target",
                            "nameLocation": "3497:6:13",
                            "nodeType": "VariableDeclaration",
                            "scope": 6451,
                            "src": "3489:14:13",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "typeName": {
                              "id": 6413,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "3489:7:13",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 6418,
                        "initialValue": {
                          "baseExpression": {
                            "id": 6415,
                            "name": "_targets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6340,
                            "src": "3506:8:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 6417,
                          "indexExpression": {
                            "id": 6416,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6403,
                            "src": "3515:1:13",
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
                          "src": "3506:11:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3489:28:13"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 6437,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 6427,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 6421,
                                  "name": "target",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6414,
                                  "src": "3560:6:13",
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
                                "id": 6420,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3552:7:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 6419,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3552:7:13",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 6422,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3552:15:13",
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
                                  "id": 6425,
                                  "name": "pool",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6319,
                                  "src": "3579:4:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IERC4626_$6956",
                                    "typeString": "contract IERC4626"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IERC4626_$6956",
                                    "typeString": "contract IERC4626"
                                  }
                                ],
                                "id": 6424,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3571:7:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 6423,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3571:7:13",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 6426,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3571:13:13",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "3552:32:13",
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
                            "id": 6436,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 6430,
                                  "name": "target",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6414,
                                  "src": "3612:6:13",
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
                                "id": 6429,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3604:7:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 6428,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3604:7:13",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 6431,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3604:15:13",
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
                                  "id": 6434,
                                  "name": "_baseToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4811,
                                  "src": "3631:10:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IERC20_$6731",
                                    "typeString": "contract IERC20"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IERC20_$6731",
                                    "typeString": "contract IERC20"
                                  }
                                ],
                                "id": 6433,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3623:7:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 6432,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3623:7:13",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 6435,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3623:19:13",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "3604:38:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "3552:90:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 6444,
                        "nodeType": "IfStatement",
                        "src": "3531:196:13",
                        "trueBody": {
                          "id": 6443,
                          "nodeType": "Block",
                          "src": "3657:70:13",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "id": 6438,
                                    "name": "IHyperdrive",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7431,
                                    "src": "3682:11:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                      "typeString": "type(contract IHyperdrive)"
                                    }
                                  },
                                  "id": 6440,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "3694:16:13",
                                  "memberName": "UnsupportedToken",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 7350,
                                  "src": "3682:28:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 6441,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3682:30:13",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 6442,
                              "nodeType": "RevertStatement",
                              "src": "3675:37:13"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 6449,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 6445,
                              "name": "isSweepable",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6324,
                              "src": "3740:11:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 6447,
                            "indexExpression": {
                              "id": 6446,
                              "name": "target",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6414,
                              "src": "3752:6:13",
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
                            "src": "3740:19:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 6448,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3762:4:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "3740:26:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 6450,
                        "nodeType": "ExpressionStatement",
                        "src": "3740:26:13"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 6409,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 6406,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6403,
                      "src": "3449:1:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 6407,
                        "name": "_targets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6340,
                        "src": "3453:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 6408,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3462:6:13",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "3453:15:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3449:19:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6452,
                  "initializationExpression": {
                    "assignments": [
                      6403
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 6403,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "3442:1:13",
                        "nodeType": "VariableDeclaration",
                        "scope": 6452,
                        "src": "3434:9:13",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 6402,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3434:7:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 6405,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 6404,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3446:1:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3434:13:13"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 6411,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3470:3:13",
                      "subExpression": {
                        "id": 6410,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6403,
                        "src": "3470:1:13",
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
                    "id": 6412,
                    "nodeType": "ExpressionStatement",
                    "src": "3470:3:13"
                  },
                  "nodeType": "ForStatement",
                  "src": "3429:348:13"
                }
              ]
            },
            "documentation": {
              "id": 6325,
              "nodeType": "StructuredDocumentation",
              "src": "1264:721:13",
              "text": "@notice Initializes a Hyperdrive pool.\n @param _config The configuration of the Hyperdrive pool.\n @param _dataProvider The address of the data provider.\n @param _linkerCodeHash The hash of the ERC20 linker contract's\n        constructor code.\n @param _linkerFactory The factory which is used to deploy the ERC20\n        linker contracts.\n @param _pool The ERC4626 compatible yield source.\n @param _targets The addresses that can be swept by governance. This\n        allows governance to collect rewards derived from incentive\n        programs while also preventing edge cases where `sweep` is used\n        to access the pool or base tokens."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 6343,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6328,
                    "src": "2221:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  {
                    "id": 6344,
                    "name": "_dataProvider",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6330,
                    "src": "2230:13:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 6345,
                    "name": "_linkerCodeHash",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6332,
                    "src": "2245:15:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  {
                    "id": 6346,
                    "name": "_linkerFactory",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6334,
                    "src": "2262:14:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 6347,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 6342,
                  "name": "Hyperdrive",
                  "nameLocations": [
                    "2210:10:13"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 549,
                  "src": "2210:10:13"
                },
                "nodeType": "ModifierInvocation",
                "src": "2210:67:13"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 6341,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6328,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "2041:7:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6454,
                  "src": "2011:37:13",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 6327,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6326,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "2011:11:13",
                        "2023:10:13"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7245,
                      "src": "2011:22:13"
                    },
                    "referencedDeclaration": 7245,
                    "src": "2011:22:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7245_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6330,
                  "mutability": "mutable",
                  "name": "_dataProvider",
                  "nameLocation": "2066:13:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6454,
                  "src": "2058:21:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6329,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2058:7:13",
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
                  "id": 6332,
                  "mutability": "mutable",
                  "name": "_linkerCodeHash",
                  "nameLocation": "2097:15:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6454,
                  "src": "2089:23:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6331,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2089:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6334,
                  "mutability": "mutable",
                  "name": "_linkerFactory",
                  "nameLocation": "2130:14:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6454,
                  "src": "2122:22:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6333,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2122:7:13",
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
                  "id": 6337,
                  "mutability": "mutable",
                  "name": "_pool",
                  "nameLocation": "2163:5:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6454,
                  "src": "2154:14:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC4626_$6956",
                    "typeString": "contract IERC4626"
                  },
                  "typeName": {
                    "id": 6336,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6335,
                      "name": "IERC4626",
                      "nameLocations": [
                        "2154:8:13"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6956,
                      "src": "2154:8:13"
                    },
                    "referencedDeclaration": 6956,
                    "src": "2154:8:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$6956",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6340,
                  "mutability": "mutable",
                  "name": "_targets",
                  "nameLocation": "2195:8:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6454,
                  "src": "2178:25:13",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 6338,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2178:7:13",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 6339,
                    "nodeType": "ArrayTypeName",
                    "src": "2178:9:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2001:208:13"
            },
            "returnParameters": {
              "id": 6348,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2278:0:13"
            },
            "scope": 6644,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 6527,
            "nodeType": "FunctionDefinition",
            "src": "4411:1026:13",
            "nodes": [],
            "body": {
              "id": 6526,
              "nodeType": "Block",
              "src": "4576:861:13",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "expression": {
                      "id": 6468,
                      "name": "_options",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6460,
                      "src": "4590:8:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                        "typeString": "struct IHyperdrive.Options calldata"
                      }
                    },
                    "id": 6469,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "4599:6:13",
                    "memberName": "asBase",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 7291,
                    "src": "4590:15:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 6524,
                    "nodeType": "Block",
                    "src": "4917:514:13",
                    "statements": [
                      {
                        "expression": {
                          "id": 6501,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 6499,
                            "name": "sharesMinted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6464,
                            "src": "5139:12:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 6500,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6457,
                            "src": "5154:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5139:22:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6502,
                        "nodeType": "ExpressionStatement",
                        "src": "5139:22:13"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 6510,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "5292:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 6511,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5296:6:13",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "5292:10:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 6514,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "5328:4:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6644",
                                    "typeString": "contract ERC4626Hyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6644",
                                    "typeString": "contract ERC4626Hyperdrive"
                                  }
                                ],
                                "id": 6513,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "5320:7:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 6512,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "5320:7:13",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 6515,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5320:13:13",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 6516,
                              "name": "sharesMinted",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6464,
                              "src": "5351:12:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 6506,
                                      "name": "pool",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 6319,
                                      "src": "5251:4:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC4626_$6956",
                                        "typeString": "contract IERC4626"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IERC4626_$6956",
                                        "typeString": "contract IERC4626"
                                      }
                                    ],
                                    "id": 6505,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5243:7:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 6504,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5243:7:13",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 6507,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5243:13:13",
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
                                "id": 6503,
                                "name": "IERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6731,
                                "src": "5236:6:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC20_$6731_$",
                                  "typeString": "type(contract IERC20)"
                                }
                              },
                              "id": 6508,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5236:21:13",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$6731",
                                "typeString": "contract IERC20"
                              }
                            },
                            "id": 6509,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5258:16:13",
                            "memberName": "safeTransferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 60053,
                            "src": "5236:38:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$59686_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$59686_$",
                              "typeString": "function (contract IERC20,address,address,uint256)"
                            }
                          },
                          "id": 6517,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5236:141:13",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6518,
                        "nodeType": "ExpressionStatement",
                        "src": "5236:141:13"
                      },
                      {
                        "expression": {
                          "id": 6522,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 6519,
                            "name": "sharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6466,
                            "src": "5391:10:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 6520,
                              "name": "_pricePerShare",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                6588
                              ],
                              "referencedDeclaration": 6588,
                              "src": "5404:14:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                "typeString": "function () view returns (uint256)"
                              }
                            },
                            "id": 6521,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5404:16:13",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5391:29:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6523,
                        "nodeType": "ExpressionStatement",
                        "src": "5391:29:13"
                      }
                    ]
                  },
                  "id": 6525,
                  "nodeType": "IfStatement",
                  "src": "4586:845:13",
                  "trueBody": {
                    "id": 6498,
                    "nodeType": "Block",
                    "src": "4607:304:13",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 6473,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "4701:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 6474,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4705:6:13",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "4701:10:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 6477,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "4721:4:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6644",
                                    "typeString": "contract ERC4626Hyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6644",
                                    "typeString": "contract ERC4626Hyperdrive"
                                  }
                                ],
                                "id": 6476,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4713:7:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 6475,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4713:7:13",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 6478,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4713:13:13",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 6479,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6457,
                              "src": "4728:7:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 6470,
                              "name": "_baseToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4811,
                              "src": "4673:10:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$6731",
                                "typeString": "contract IERC20"
                              }
                            },
                            "id": 6472,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4684:16:13",
                            "memberName": "safeTransferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 60053,
                            "src": "4673:27:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$59686_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$59686_$",
                              "typeString": "function (contract IERC20,address,address,uint256)"
                            }
                          },
                          "id": 6480,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4673:63:13",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6481,
                        "nodeType": "ExpressionStatement",
                        "src": "4673:63:13"
                      },
                      {
                        "expression": {
                          "id": 6491,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 6482,
                            "name": "sharesMinted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6464,
                            "src": "4806:12:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 6485,
                                "name": "_amount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6457,
                                "src": "4834:7:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 6488,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "4851:4:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6644",
                                      "typeString": "contract ERC4626Hyperdrive"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6644",
                                      "typeString": "contract ERC4626Hyperdrive"
                                    }
                                  ],
                                  "id": 6487,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "4843:7:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 6486,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4843:7:13",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 6489,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4843:13:13",
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "id": 6483,
                                "name": "pool",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6319,
                                "src": "4821:4:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC4626_$6956",
                                  "typeString": "contract IERC4626"
                                }
                              },
                              "id": 6484,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4826:7:13",
                              "memberName": "deposit",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6841,
                              "src": "4821:12:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (uint256,address) external returns (uint256)"
                              }
                            },
                            "id": 6490,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4821:36:13",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4806:51:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6492,
                        "nodeType": "ExpressionStatement",
                        "src": "4806:51:13"
                      },
                      {
                        "expression": {
                          "id": 6496,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 6493,
                            "name": "sharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6466,
                            "src": "4871:10:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 6494,
                              "name": "_pricePerShare",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                6588
                              ],
                              "referencedDeclaration": 6588,
                              "src": "4884:14:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                "typeString": "function () view returns (uint256)"
                              }
                            },
                            "id": 6495,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4884:16:13",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4871:29:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6497,
                        "nodeType": "ExpressionStatement",
                        "src": "4871:29:13"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              790
            ],
            "documentation": {
              "id": 6455,
              "nodeType": "StructuredDocumentation",
              "src": "3815:591:13",
              "text": "@notice Accepts a trader's deposit in either base or vault shares. If\n         the deposit is settled in base, the base is deposited into the\n         yield source immediately.\n @param _amount The amount of token to transfer\n @param _options The options that configure the deposit. The only option\n        used in this implementation is \"asBase\" which determines if\n        the deposit is settled in base or vault shares.\n @return sharesMinted The shares this deposit creates\n @return sharePrice The share price at time of deposit."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_deposit",
            "nameLocation": "4420:8:13",
            "overrides": {
              "id": 6462,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "4516:8:13"
            },
            "parameters": {
              "id": 6461,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6457,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "4446:7:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6527,
                  "src": "4438:15:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6456,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4438:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6460,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "4492:8:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6527,
                  "src": "4463:37:13",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 6459,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6458,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "4463:11:13",
                        "4475:7:13"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7295,
                      "src": "4463:19:13"
                    },
                    "referencedDeclaration": 7295,
                    "src": "4463:19:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7295_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4428:78:13"
            },
            "returnParameters": {
              "id": 6467,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6464,
                  "mutability": "mutable",
                  "name": "sharesMinted",
                  "nameLocation": "4542:12:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6527,
                  "src": "4534:20:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6463,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4534:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6466,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "4564:10:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6527,
                  "src": "4556:18:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6465,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4556:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4533:42:13"
            },
            "scope": 6644,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6574,
            "nodeType": "FunctionDefinition",
            "src": "6102:659:13",
            "nodes": [],
            "body": {
              "id": 6573,
              "nodeType": "Block",
              "src": "6251:510:13",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "expression": {
                      "id": 6539,
                      "name": "_options",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6533,
                      "src": "6265:8:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                        "typeString": "struct IHyperdrive.Options calldata"
                      }
                    },
                    "id": 6540,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "6274:6:13",
                    "memberName": "asBase",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 7291,
                    "src": "6265:15:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 6571,
                    "nodeType": "Block",
                    "src": "6569:186:13",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 6562,
                                "name": "_options",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6533,
                                "src": "6675:8:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                                  "typeString": "struct IHyperdrive.Options calldata"
                                }
                              },
                              "id": 6563,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6684:11:13",
                              "memberName": "destination",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7288,
                              "src": "6675:20:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 6564,
                              "name": "_shares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6530,
                              "src": "6697:7:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 6558,
                                      "name": "pool",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 6319,
                                      "src": "6655:4:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC4626_$6956",
                                        "typeString": "contract IERC4626"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IERC4626_$6956",
                                        "typeString": "contract IERC4626"
                                      }
                                    ],
                                    "id": 6557,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6647:7:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 6556,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6647:7:13",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 6559,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6647:13:13",
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
                                "id": 6555,
                                "name": "IERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6731,
                                "src": "6640:6:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC20_$6731_$",
                                  "typeString": "type(contract IERC20)"
                                }
                              },
                              "id": 6560,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6640:21:13",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20_$6731",
                                "typeString": "contract IERC20"
                              }
                            },
                            "id": 6561,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6662:12:13",
                            "memberName": "safeTransfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 60026,
                            "src": "6640:34:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$59686_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$59686_$",
                              "typeString": "function (contract IERC20,address,uint256)"
                            }
                          },
                          "id": 6565,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6640:65:13",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6566,
                        "nodeType": "ExpressionStatement",
                        "src": "6640:65:13"
                      },
                      {
                        "expression": {
                          "id": 6569,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 6567,
                            "name": "amountWithdrawn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6537,
                            "src": "6719:15:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 6568,
                            "name": "_shares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6530,
                            "src": "6737:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6719:25:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6570,
                        "nodeType": "ExpressionStatement",
                        "src": "6719:25:13"
                      }
                    ]
                  },
                  "id": 6572,
                  "nodeType": "IfStatement",
                  "src": "6261:494:13",
                  "trueBody": {
                    "id": 6554,
                    "nodeType": "Block",
                    "src": "6282:281:13",
                    "statements": [
                      {
                        "expression": {
                          "id": 6552,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 6541,
                            "name": "amountWithdrawn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6537,
                            "src": "6415:15:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 6544,
                                "name": "_shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6530,
                                "src": "6462:7:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 6545,
                                  "name": "_options",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6533,
                                  "src": "6487:8:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                                    "typeString": "struct IHyperdrive.Options calldata"
                                  }
                                },
                                "id": 6546,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "6496:11:13",
                                "memberName": "destination",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7288,
                                "src": "6487:20:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 6549,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "6533:4:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6644",
                                      "typeString": "contract ERC4626Hyperdrive"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6644",
                                      "typeString": "contract ERC4626Hyperdrive"
                                    }
                                  ],
                                  "id": 6548,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "6525:7:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 6547,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "6525:7:13",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 6550,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6525:13:13",
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "id": 6542,
                                "name": "pool",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6319,
                                "src": "6433:4:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC4626_$6956",
                                  "typeString": "contract IERC4626"
                                }
                              },
                              "id": 6543,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6438:6:13",
                              "memberName": "redeem",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6875,
                              "src": "6433:11:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (uint256,address,address) external returns (uint256)"
                              }
                            },
                            "id": 6551,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6433:119:13",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6415:137:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6553,
                        "nodeType": "ExpressionStatement",
                        "src": "6415:137:13"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              801
            ],
            "documentation": {
              "id": 6528,
              "nodeType": "StructuredDocumentation",
              "src": "5443:654:13",
              "text": "@notice Processes a trader's withdrawal in either base or vault shares.\n         If the withdrawal is settled in base, the base will need to be\n         withdrawn from the yield source.\n @param _shares The amount of shares to withdraw from Hyperdrive.\n @param _options The options that configure the withdrawal. The options\n        used in this implementation are \"destination\" which specifies the\n        recipient of the withdrawal and \"asBase\" which determines\n        if the withdrawal is settled in base or vault shares.\n @return amountWithdrawn The amount withdrawn from the yield source."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_withdraw",
            "nameLocation": "6111:9:13",
            "overrides": {
              "id": 6535,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "6208:8:13"
            },
            "parameters": {
              "id": 6534,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6530,
                  "mutability": "mutable",
                  "name": "_shares",
                  "nameLocation": "6138:7:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6574,
                  "src": "6130:15:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6529,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6130:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6533,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "6184:8:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6574,
                  "src": "6155:37:13",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 6532,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6531,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "6155:11:13",
                        "6167:7:13"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7295,
                      "src": "6155:19:13"
                    },
                    "referencedDeclaration": 7295,
                    "src": "6155:19:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7295_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6120:78:13"
            },
            "returnParameters": {
              "id": 6538,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6537,
                  "mutability": "mutable",
                  "name": "amountWithdrawn",
                  "nameLocation": "6234:15:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6574,
                  "src": "6226:23:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6536,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6226:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6225:25:13"
            },
            "scope": 6644,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6588,
            "nodeType": "FunctionDefinition",
            "src": "6946:134:13",
            "nodes": [],
            "body": {
              "id": 6587,
              "nodeType": "Block",
              "src": "7013:67:13",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 6583,
                          "name": "FixedPointMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9066,
                          "src": "7051:14:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                            "typeString": "type(library FixedPointMath)"
                          }
                        },
                        "id": 6584,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "7066:6:13",
                        "memberName": "ONE_18",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8325,
                        "src": "7051:21:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 6581,
                        "name": "pool",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6319,
                        "src": "7030:4:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC4626_$6956",
                          "typeString": "contract IERC4626"
                        }
                      },
                      "id": 6582,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7035:15:13",
                      "memberName": "convertToAssets",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6891,
                      "src": "7030:20:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view external returns (uint256)"
                      }
                    },
                    "id": 6585,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7030:43:13",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 6580,
                  "id": 6586,
                  "nodeType": "Return",
                  "src": "7023:50:13"
                }
              ]
            },
            "baseFunctions": [
              807
            ],
            "documentation": {
              "id": 6575,
              "nodeType": "StructuredDocumentation",
              "src": "6767:174:13",
              "text": "@notice Loads the share price from the yield source.\n @return The current share price.\n @dev must remain consistent with the impl inside of the DataProvider"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_pricePerShare",
            "nameLocation": "6955:14:13",
            "overrides": {
              "id": 6577,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "6986:8:13"
            },
            "parameters": {
              "id": 6576,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6969:2:13"
            },
            "returnParameters": {
              "id": 6580,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6579,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6588,
                  "src": "7004:7:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6578,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7004:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7003:9:13"
            },
            "scope": 6644,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6643,
            "nodeType": "FunctionDefinition",
            "src": "7840:595:13",
            "nodes": [],
            "body": {
              "id": 6642,
              "nodeType": "Block",
              "src": "7880:555:13",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 6604,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 6598,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 6595,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "7962:3:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 6596,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7966:6:13",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "7962:10:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 6597,
                        "name": "_feeCollector",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4864,
                        "src": "7976:13:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "7962:27:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 6603,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "7993:21:13",
                      "subExpression": {
                        "baseExpression": {
                          "id": 6599,
                          "name": "_pausers",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4857,
                          "src": "7994:8:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 6602,
                        "indexExpression": {
                          "expression": {
                            "id": 6600,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "8003:3:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 6601,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8007:6:13",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "8003:10:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "7994:20:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "7962:52:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6610,
                  "nodeType": "IfStatement",
                  "src": "7958:103:13",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 6605,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7431,
                          "src": "8035:11:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 6607,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8047:12:13",
                        "memberName": "Unauthorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7373,
                        "src": "8035:24:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 6608,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8035:26:13",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 6609,
                    "nodeType": "RevertStatement",
                    "src": "8028:33:13"
                  }
                },
                {
                  "condition": {
                    "id": 6617,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "8139:30:13",
                    "subExpression": {
                      "baseExpression": {
                        "id": 6611,
                        "name": "isSweepable",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6324,
                        "src": "8140:11:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 6616,
                      "indexExpression": {
                        "arguments": [
                          {
                            "id": 6614,
                            "name": "_target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6592,
                            "src": "8160:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$6731",
                              "typeString": "contract IERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC20_$6731",
                              "typeString": "contract IERC20"
                            }
                          ],
                          "id": 6613,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8152:7:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 6612,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "8152:7:13",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 6615,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8152:16:13",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "8140:29:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6624,
                  "nodeType": "IfStatement",
                  "src": "8135:98:13",
                  "trueBody": {
                    "id": 6623,
                    "nodeType": "Block",
                    "src": "8171:62:13",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 6618,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "8192:11:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 6620,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8204:16:13",
                            "memberName": "UnsupportedToken",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7350,
                            "src": "8192:28:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 6621,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8192:30:13",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 6622,
                        "nodeType": "RevertStatement",
                        "src": "8185:37:13"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    6626
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6626,
                      "mutability": "mutable",
                      "name": "balance",
                      "nameLocation": "8332:7:13",
                      "nodeType": "VariableDeclaration",
                      "scope": 6642,
                      "src": "8324:15:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 6625,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8324:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6634,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 6631,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "8368:4:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6644",
                              "typeString": "contract ERC4626Hyperdrive"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ERC4626Hyperdrive_$6644",
                              "typeString": "contract ERC4626Hyperdrive"
                            }
                          ],
                          "id": 6630,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8360:7:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 6629,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "8360:7:13",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 6632,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8360:13:13",
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
                      "expression": {
                        "id": 6627,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6592,
                        "src": "8342:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$6731",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 6628,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8350:9:13",
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6688,
                      "src": "8342:17:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 6633,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8342:32:13",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8324:50:13"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6638,
                        "name": "_feeCollector",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4864,
                        "src": "8405:13:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 6639,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6626,
                        "src": "8420:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 6635,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6592,
                        "src": "8384:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$6731",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 6637,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8392:12:13",
                      "memberName": "safeTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 60026,
                      "src": "8384:20:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$59686_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$59686_$",
                        "typeString": "function (contract IERC20,address,uint256)"
                      }
                    },
                    "id": 6640,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8384:44:13",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6641,
                  "nodeType": "ExpressionStatement",
                  "src": "8384:44:13"
                }
              ]
            },
            "documentation": {
              "id": 6589,
              "nodeType": "StructuredDocumentation",
              "src": "7086:749:13",
              "text": "@notice Some yield sources [eg Morpho] pay rewards directly to this\n         contract but we can't handle distributing them internally so we\n         sweep to the fee collector address to then redistribute to users.\n @dev WARN: The entire balance of any of the sweep targets can be swept\n      by governance. If these sweep targets provide access to the base or\n      pool token, then governance has the ability to rug the pool.\n @dev WARN: It is unlikely but possible that there is a selector overlap\n      with 'transferFrom'. Any integrating contracts should be checked\n      for that, as it may result in an unexpected call from this address.\n @param _target The token to sweep."
            },
            "functionSelector": "01681a62",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sweep",
            "nameLocation": "7849:5:13",
            "parameters": {
              "id": 6593,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6592,
                  "mutability": "mutable",
                  "name": "_target",
                  "nameLocation": "7862:7:13",
                  "nodeType": "VariableDeclaration",
                  "scope": 6643,
                  "src": "7855:14:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$6731",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 6591,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6590,
                      "name": "IERC20",
                      "nameLocations": [
                        "7855:6:13"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6731,
                      "src": "7855:6:13"
                    },
                    "referencedDeclaration": 6731,
                    "src": "7855:6:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$6731",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7854:16:13"
            },
            "returnParameters": {
              "id": 6594,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7880:0:13"
            },
            "scope": 6644,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 6307,
              "name": "Hyperdrive",
              "nameLocations": [
                "875:10:13"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 549,
              "src": "875:10:13"
            },
            "id": 6308,
            "nodeType": "InheritanceSpecifier",
            "src": "875:10:13"
          }
        ],
        "canonicalName": "ERC4626Hyperdrive",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 6306,
          "nodeType": "StructuredDocumentation",
          "src": "489:356:13",
          "text": "@author DELV\n @title ERC4626Hyperdrive\n @notice An instance of Hyperdrive that utilizes ERC4626 vaults as a yield source.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          6644,
          549,
          4785,
          3908,
          3078,
          5300,
          1465,
          5167,
          12262,
          7668,
          7980,
          12544,
          64180,
          76,
          6652
        ],
        "name": "ERC4626Hyperdrive",
        "nameLocation": "854:17:13",
        "scope": 6645,
        "usedErrors": [
          7298,
          7300,
          7302,
          7306,
          7308,
          7310,
          7312,
          7314,
          7318,
          7320,
          7322,
          7324,
          7326,
          7328,
          7330,
          7334,
          7336,
          7338,
          7340,
          7350,
          7352,
          7354,
          7370,
          7373,
          7386,
          7388,
          7390,
          7392,
          7394,
          7413,
          7416,
          7418,
          7425,
          7428,
          7430
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 13
} as const;
