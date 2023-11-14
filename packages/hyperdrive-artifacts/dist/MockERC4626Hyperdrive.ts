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
              "name": "precisionThreshold",
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
      "name": "RestrictedZeroAddress",
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
          "name": "_baseAmount",
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
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "traderDeposit",
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
    "object": "0x6102c060405260016000553480156200001757600080fd5b5060405162004cfd38038062004cfd8339810160408190526200003a91620006d8565b8484848484818585858280600001516001600160a01b03166080816001600160a01b0316815250506103e8816080015110156200008a576040516349db44f560e01b815260040160405180910390fd5b60808101516101805260a08101516101a05260c08101516101c052610100810151600003620000cc57604051635428734d60e01b815260040160405180910390fd5b6101008101805160a0525160e08201511080620000fe57508061010001518160e00151620000fb91906200082f565b15155b156200011d5760405163253fffcf60e11b815260040160405180910390fd5b60e08181015160c05261012082015190526060810151610160908152610140820151600880546001600160a01b0319166001600160a01b0392831617905590820151166101e05261018081015151670de0b6b3a76400001080620001915750670de0b6b3a764000081610180015160200151115b80620001ad5750670de0b6b3a764000081610180015160400151115b15620001cc576040516322f72cc360e11b815260040160405180910390fd5b610180810180515161010052805160209081015161012052905160409081015161014052818301516001600160a01b039081166102005292810151610220528051808201825260018152603160f81b9083015280517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681830152466060820152306080828101919091528251808303909101815260a090910190915280519101206102405291821661026052811661028052919091166102a05250620002b6620004df565b856060015114620002da576040516355f2a42f60e01b815260040160405180910390fd5b6102a0516001600160a01b03166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200031c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000342919062000852565b6001600160a01b031685600001516001600160a01b0316146200037857604051630722152560e11b815260040160405180910390fd5b84516102a05160405163095ea7b360e01b81526001600160a01b039182166004820152600019602482015291169063095ea7b3906044016020604051808303816000875af1158015620003cf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003f5919062000879565b62000413576040516340b27c2160e11b815260040160405180910390fd5b60005b8151811015620004ce5760008282815181106200043757620004376200089d565b602002602001015190506102a0516001600160a01b0316816001600160a01b031614806200047857506080516001600160a01b0316816001600160a01b0316145b15620004975760405163350b944160e11b815260040160405180910390fd5b6001600160a01b03166000908152601060205260409020805460ff1916600117905580620004c581620008b3565b91505062000416565b5050505050505050505050620008f5565b6102a0516040516303d1689d60e11b8152670de0b6b3a764000060048201526000916001600160a01b0316906307a2d13a90602401602060405180830381865afa15801562000532573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005589190620008db565b905090565b634e487b7160e01b600052604160045260246000fd5b6040516101a081016001600160401b03811182821017156200059957620005996200055d565b60405290565b6001600160a01b0381168114620005b557600080fd5b50565b8051620005c5816200059f565b919050565b600060608284031215620005dd57600080fd5b604051606081016001600160401b03811182821017156200060257620006026200055d565b80604052508091508251815260208301516020820152604083015160408201525092915050565b600082601f8301126200063b57600080fd5b815160206001600160401b03808311156200065a576200065a6200055d565b8260051b604051601f19603f830116810181811084821117156200068257620006826200055d565b604052938452858101830193838101925087851115620006a157600080fd5b83870191505b84821015620006cd578151620006bd816200059f565b83529183019190830190620006a7565b979650505050505050565b6000806000806000858703610260811215620006f357600080fd5b6101e0808212156200070457600080fd5b6200070e62000573565b91506200071b88620005b8565b82526200072b60208901620005b8565b602083015260408801516040830152606088015160608301526080880151608083015260a088015160a083015260c088015160c083015260e088015160e083015261010080890151818401525061012080890151818401525061014062000794818a01620005b8565b90830152610160620007a8898201620005b8565b90830152610180620007bd8a8a8301620005ca565b8184015250819650620007d2818901620005b8565b95505050620007e56102008701620005b8565b9250620007f66102208701620005b8565b6102408701519092506001600160401b038111156200081457600080fd5b620008228882890162000629565b9150509295509295909350565b6000826200084d57634e487b7160e01b600052601260045260246000fd5b500690565b6000602082840312156200086557600080fd5b815162000872816200059f565b9392505050565b6000602082840312156200088c57600080fd5b815180151581146200087257600080fd5b634e487b7160e01b600052603260045260246000fd5b600060018201620008d457634e487b7160e01b600052601160045260246000fd5b5060010190565b600060208284031215620008ee57600080fd5b5051919050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a05161421062000aed6000396000818161099301528181610a2901528181610cd101528181610fb601526110800152600081816105e90152818161062b015281816106840152818161071a01526107ad0152600081816101ce0152818161039501528181610658015281816106b6015281816106e80152818161074e0152818161077d0152818161081501526108840152600081816104430152610b3c01526000505060005050600050506000611ef0015260008181610de301526111280152600081816123e00152818161271201528181612c7c01528181612ef201528181612f2e0152818161342301526134720152600081816117460152818161178e01528181611c45015281816126ec0152612b2b01526000818161206f01528181612bcd01528181612d550152612dce015260008181611cfb015281816120430152612da20152600081816117e001528181612b890152612d21015260008181611724015281816117af01528181611c23015281816127380152612b4c015260008181610eb1015281816111b5015281816114560152818161157201526130a5015260006113be0152600061094f01526142106000f3fe6080604052600436106101b75760003560e01c80639032c726116100ec578063cbc134341161008a578063ded0623111610064578063ded06231146103cf578063e44808bc146105b7578063eac3e799146105d7578063ed64bab21461060b576101b7565b8063cbc1343414610309578063d55cefec14610584578063dbbe8070146105a4576101b7565b80639cd241af116100c65780639cd241af14610536578063a22cb465146104a0578063ab033ea914610556578063cba2e58d14610571576101b7565b80639032c726146104f357806399530b06146105135780639aa6846214610528576101b7565b806330adf81f116101595780634ed2d6ac116101335780634ed2d6ac146104855780637180c8ca146104a057806377d05ff4146104c0578063829555d4146104d3576101b7565b806330adf81f146103fd5780633644e515146104315780633e691db914610465576101b7565b806317fad7fc1161019557806317fad7fc146103435780631c0f12b61461036357806321b57d531461038357806329b23fc1146103cf576101b7565b806301681a62146102c757806302329a29146102e9578063074a6de914610309575b3480156101c357600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168585604051610206929190613a66565b600060405180830381855af49150503d8060008114610241576040519150601f19603f3d011682016040523d82523d6000602084013e610246565b606091505b5091509150811561026a57604051638bb0a34b60e01b815260040160405180910390fd5b600061027582613a76565b90506001600160e01b03198116636e64089360e11b1461029757815160208301fd5b8151600319810160048401908152926102b891810160200190602401613ac3565b80519650602001945050505050f35b3480156102d357600080fd5b506102e76102e2366004613ba5565b610626565b005b3480156102f557600080fd5b506102e7610304366004613bd7565b610653565b34801561031557600080fd5b50610329610324366004613c04565b61067c565b604080519283526020830191909152015b60405180910390f35b34801561034f57600080fd5b506102e761035e366004613c99565b6106b1565b34801561036f57600080fd5b506102e761037e366004613d2e565b6106e3565b34801561038f57600080fd5b506103b77f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161033a565b3480156103db57600080fd5b506103ef6103ea366004613d76565b610713565b60405190815260200161033a565b34801561040957600080fd5b506103ef7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561043d57600080fd5b506103ef7f000000000000000000000000000000000000000000000000000000000000000081565b34801561047157600080fd5b506103ef610480366004613dd0565b610747565b34801561049157600080fd5b506102e761037e366004613e0d565b3480156104ac57600080fd5b506102e76104bb366004613e57565b610778565b6103ef6104ce366004613c04565b6107a6565b3480156104df57600080fd5b506103296104ee366004613e83565b6107d9565b3480156104ff57600080fd5b506102e761050e366004613eca565b6107f2565b34801561051f57600080fd5b506103ef610801565b6103ef6103ea366004613d76565b34801561054257600080fd5b506102e7610551366004613f48565b610810565b34801561056257600080fd5b506102e7610304366004613ba5565b61032961057f366004613d76565b61083f565b34801561059057600080fd5b506103ef61059f366004613e83565b61085b565b6103296105b2366004613d76565b610870565b3480156105c357600080fd5b506102e76105d2366004613f80565b61087f565b3480156105e357600080fd5b506103b77f000000000000000000000000000000000000000000000000000000000000000081565b34801561061757600080fd5b506102e76102e2366004613fdf565b61064f7f00000000000000000000000000000000000000000000000000000000000000006108b0565b5050565b61064f7f00000000000000000000000000000000000000000000000000000000000000006108b0565b6000806106a87f00000000000000000000000000000000000000000000000000000000000000006108b0565b50935093915050565b6106da7f00000000000000000000000000000000000000000000000000000000000000006108b0565b50505050505050565b61070c7f00000000000000000000000000000000000000000000000000000000000000006108b0565b5050505050565b600061073e7f00000000000000000000000000000000000000000000000000000000000000006108b0565b50949350505050565b60006107727f00000000000000000000000000000000000000000000000000000000000000006108b0565b50919050565b6107a17f00000000000000000000000000000000000000000000000000000000000000006108b0565b505050565b60006107d17f00000000000000000000000000000000000000000000000000000000000000006108b0565b509392505050565b6000806107e6848461092a565b915091505b9250929050565b6106da87878787878787610a62565b600061080b610cb1565b905090565b6108397f00000000000000000000000000000000000000000000000000000000000000006108b0565b50505050565b60008061084e86868686610d44565b9150915094509492505050565b60006108678383610f95565b90505b92915050565b60008061084e868686866110ae565b6108a87f00000000000000000000000000000000000000000000000000000000000000006108b0565b505050505050565b6060600080836001600160a01b03166000366040516108d0929190613a66565b600060405180830381855af49150503d806000811461090b576040519150601f19603f3d011682016040523d82523d6000602084013e610910565b606091505b50915091508161092257805160208201fd5b805160208201f35b60008061093d6040840160208501613bd7565b15610a19576109776001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330876112fe565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af11580156109e4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a089190613ff8565b9150610a12610cb1565b90506107eb565b839150610a516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330856112fe565b610a59610cb1565b90509250929050565b83421115610a835760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b038716610aaa5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015610bd6573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b031614610c1457604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600f602052604081208054909190610c3a90614027565b909155506001600160a01b038981166000818152600d60209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015610d20573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080b9190613ff8565b600080600054600114610d8b5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064015b60405180910390fd5b6002600055600554610100900460ff1615610db9576040516313d0ff5960e31b815260040160405180910390fd5b610dc1611381565b600080610dce888661092a565b90925090506000610ddf83836113a2565b90507f0000000000000000000000000000000000000000000000000000000000000000811015610e225760405163211ddda360e11b815260040160405180910390fd5b86821015610e43576040516342af972b60e01b815260040160405180910390fd5b6000610e4d6113b7565b9050610e5981846113ed565b506000806000610e6987876116fd565b909a5091945092509050878c1115610e945760405163c972651760e01b815260040160405180910390fd5b8060096000828254610ea69190614040565b90915550610ed690507f000000000000000000000000000000000000000000000000000000000000000085614040565b9850610ee683898489888e611877565b6000610ef360018b611a76565b9050610f0c81610f0660208e018e613ba5565b8b611aab565b8d8b8a83610f1d6020840184613ba5565b6001600160a01b03167f8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda6868f610f53878f88611b53565b60408051928352602083019190915281018e90526060810185905260800160405180910390a39a50505050505050505050506001600055909590945092505050565b6000610fa76040830160208401613bd7565b15611066576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba08765284610fe96020860186613ba5565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af115801561103b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061105f9190613ff8565b905061086a565b6110a76110766020840184613ba5565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169085611b85565b5090919050565b6000806000546001146110f05760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610d82565b6002600055600554610100900460ff161561111e576040516313d0ff5960e31b815260040160405180910390fd5b611126611381565b7f00000000000000000000000000000000000000000000000000000000000000008610156111675760405163211ddda360e11b815260040160405180910390fd5b6000611171610cb1565b905084811015611194576040516342af972b60e01b815260040160405180910390fd5b600061119e6113b7565b905060006111ac82846113ed565b905060006111da7f000000000000000000000000000000000000000000000000000000000000000084614040565b905060008060006111ec8d8887611bfd565b600980549296509294509250829190600090611209908490614040565b9250508190555050600061121e82888c611d2f565b9050808c10156112415760405163c972651760e01b815260040160405180910390fd5b61124b818b61092a565b505061125a8d83858a88611d57565b6000611267600286611a76565b90508d6112818261127b60208f018f613ba5565b83611aab565b8161128f60208e018e613ba5565b60408051898152602081018890529081018c9052606081018490526001600160a01b0391909116907f80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef959060800160405180910390a350506001600055929c929b50919950505050505050505050565b60006040516323b872dd60e01b81528460048201528360248201528260448201526020600060648360008a5af13d15601f3d116001600051141617169150508061070c5760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610d82565b34156113a057604051631574f9f360e01b815260040160405180910390fd5b565b60006108678383670de0b6b3a7640000611fe4565b60006113e37f000000000000000000000000000000000000000000000000000000000000000042614069565b61080b904261407d565b600082815260076020526040812080546001600160801b031615158061141257504284115b1561142857546001600160801b0316905061086a565b61143183612002565b81546001600160801b0319166001600160801b0391909116178155600060078161147b7f00000000000000000000000000000000000000000000000000000000000000008861407d565b815260208101919091526040016000908120546001600160801b031691506114a4600287611a76565b6000818152600c602052604081205491925081156114fd576000806114cc848a88600061202c565b9150915080600960008282546114e29190614040565b909155506114f6905084600084808e6120fa565b6001925050505b600061150a60018a611a76565b6000818152600c6020526040902054909150801561156557600080611532838c8a600161202c565b9150915080600960008282546115489190614040565b909155508c905061155d846000858085612274565b600195505050505b82156115e35760006115977f00000000000000000000000000000000000000000000000000000000000000008c61407d565b600081815260076020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b926115d7928492919004900b612441565b6115e08b612568565b50505b6000808a116115f357600061160e565b61160e8a6116086116038d61264f565b6127b5565b906113a2565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b03909216916116799190614040565b611683919061407d565b90506000811561169c576116978383612a23565b61169f565b60005b604080518e8152602081018a9052908101869052606081018290529091508d907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a250999b9a5050505050505050505050565b60008060008061176a61170e612a38565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000612a59565b925060006117d3611779612a38565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612a85565b90506118098785611804847f0000000000000000000000000000000000000000000000000000000000000000612aa5565b612af2565b156118275760405163512095c760e01b815260040160405180910390fd5b60008061183589848a612b7b565b9092509050611844828761407d565b94506118508186614040565b955061185d81848a611fe4565b9350611869848a61407d565b965050505092959194509250565b6003546001600160801b03166118b76118b28261189c85670de0b6b3a7640000614090565b6004546001600160801b031691908a6001612bfb565b612002565b600480546001600160801b0319166001600160801b03929092169190911790556118e087612002565b600180546000906118fb9084906001600160801b03166140a7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061192885612002565b6001805460109061194a908490600160801b90046001600160801b03166140ce565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061197786612002565b61198190826140a7565b600380546001600160801b0319166001600160801b0383161790556000848152600760205260408120805492935091600160801b9004600f0b906119dd6119c88b896113a2565b6119d38b6002614090565b6118b2919061407d565b8354909150819084906010906119fe908490600160801b9004600f0b6140ee565b82546001600160801b039182166101009390930a9283029190920219909116179055508254611a3b90600f84810b91600160801b9004900b612441565b611a4487612c75565b611a61576040516318846de960e01b815260040160405180910390fd5b611a6a87612568565b50505050505050505050565b60006001600160f81b03821115611aa05760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600b602090815260408083206001600160a01b038616845290915281208054839290611add908490614040565b90915550506000838152600c602052604081208054839290611b00908490614040565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000611b656040830160208401613bd7565b15611b71575082611b7e565b611b7b84846113a2565b90505b9392505050565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806108395760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610d82565b6000806000611c69611c0d612a38565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000612cda565b915085611c7683876113a2565b1115611c955760405163512095c760e01b815260040160405180910390fd5b6000806000611ca5611779612a38565b9050611cbb89670de0b6b3a7640000838b612cfb565b509295509350611ccf91508390508461407d565b611cd9908661407d565b9450611d1f886116088b611ced868a61407d565b8b611cf88e82612e0c565b8e7f0000000000000000000000000000000000000000000000000000000000000000612e1b565b9550909250505093509350939050565b6000611d416040830160208401613bd7565b15611d4d575082611b7e565b611b7b8484612a23565b600354611da1906118b290600160801b90046001600160801b0316611d8484670de0b6b3a7640000614090565b600454600160801b90046001600160801b03169190896001612bfb565b600480546001600160801b03928316600160801b0292169190911790556000611dc984612002565b600154611ddf91906001600160801b03166140ce565b600180546001600160801b0319166001600160801b0383161790559050611e0586612002565b60018054601090611e27908490600160801b90046001600160801b03166140a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e5486612002565b60038054601090611e76908490600160801b90046001600160801b03166140a7565b82546101009290920a6001600160801b03818102199093169183160217909155600254600154600f9190910b911612159050611ec55760405163585fe6df60e11b815260040160405180910390fd5b6000611ecf6113b7565b600081815260076020526040902054909150600160801b9004600f0b611f157f000000000000000000000000000000000000000000000000000000000000000088614069565b611f1f908861407d565b96506000611f2d8989614040565b9050611f3881612002565b60008481526007602052604090208054601090611f60908490600160801b9004600f0b61411b565b82546001600160801b039182166101009390930a928302919092021990911617905550600083815260076020526040902054611faa90600f84810b91600160801b9004900b612441565b611fb386612c75565b611fd0576040516318846de960e01b815260040160405180910390fd5b611fd986612568565b505050505050505050565b6000826000190484118302158202611ffb57600080fd5b5091020490565b6000600160801b821061202857604051630f0af95160e11b815260040160405180910390fd5b5090565b6000806120398686612a23565b91506000612067837f00000000000000000000000000000000000000000000000000000000000000006113a2565b9050612093817f00000000000000000000000000000000000000000000000000000000000000006113a2565b915083156120b6576120a5828261407d565b6120af908461407d565b92506120cd565b6120c0828261407d565b6120ca9084614040565b92505b848610156120f0576120e0838787611fe4565b92506120ed828787611fe4565b91505b5094509492505050565b600354600160801b90046001600160801b03166121436118b28261212685670de0b6b3a7640000614090565b600454600160801b90046001600160801b031691908a6000612bfb565b600480546001600160801b03928316600160801b02921691909117905561216986612002565b61217390826140ce565b600380546001600160801b03928316600160801b02921691909117905561219984612002565b600180546000906121b49084906001600160801b03166140a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506121e183612e6d565b600280546000906121f6908490600f0b6140ee565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061222685612002565b60018054601090612248908490600160801b90046001600160801b03166140ce565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6003546001600160801b03166122af6118b28261229985670de0b6b3a7640000614090565b6004546001600160801b031691908a6000612bfb565b600480546001600160801b0319166001600160801b03929092169190911790556122d886612002565b6122e290826140ce565b600380546001600160801b0319166001600160801b03929092169190911790555061230c83612002565b600180546000906123279084906001600160801b03166140ce565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061235482612e6d565b60028054600090612369908490600f0b61411b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061239984612002565b600180546010906123bb908490600160801b90046001600160801b03166140a7565b82546101009290920a6001600160801b038181021990931691831602179091556001547f00000000000000000000000000000000000000000000000000000000000000009116109050806124235750600254600154600f9190910b6001600160801b03909116125b1561070c5760405163585fe6df60e11b815260040160405180910390fd5b8082138015612451575060008212155b156124e45760006124628282612eab565b61246c9084614148565b60025490915061249990612494908390600160801b90046001600160801b0316600f0b612eba565b612e6d565b600280546010906124bb908490600160801b90046001600160801b03166140ce565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b8181131561064f576000821261255a576124fd82612e6d565b61250682612e6d565b612510919061411b565b60028054601090612532908490600160801b90046001600160801b03166140a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b612510612494826000612eab565b600c6020527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854600654600360f81b60009081527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5490916125d5916001600160801b039091169061407d565b905060006125e38284614040565b905060006125f36116038661264f565b90506000612602858385611fe4565b905060008061261088612ec9565b90508281111561262757612624838261407d565b91505b6000821180612634575083155b156126455761264582858789612f6c565b5050505050505050565b6126ac60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600254600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600354821660e0820152600454909161010083019161277b911661305a565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926127ad9290041661305a565b905292915050565b6000806127d58361014001518461012001516113a290919063ffffffff16565b61010084015160e08501516127e9916113a2565b6127f39190614148565b90506000612809846000015185602001516130d0565b905060008213156128a957600061284b8286604001518760a001518860c00151670de0b6b3a764000061283c919061407d565b89606001518a608001516130ed565b90506128578184613187565b905080156128a357612890828660400151838860c00151670de0b6b3a7640000612881919061407d565b89606001518a60800151613196565b8551869061289f90839061407d565b9052505b50612965565b6000821215612965576128bb82614168565b915060006128ef8286604001518760c00151670de0b6b3a76400006128e0919061407d565b886060015189608001516131ca565b90506128fb8184613187565b9050801561294757612934828660400151838860c00151670de0b6b3a7640000612925919061407d565b89606001518a60800151613260565b85518690612943908390614040565b9052505b612951818461407d565b85518690612960908390614040565b905250505b6000612994856101000151670de0b6b3a7640000612983919061407d565b606087015160e08801519190611fe4565b6129c2866101400151670de0b6b3a76400006129b0919061407d565b60608801516101208901519190611fe4565b6129cc9190614148565b905060008186600001516129e09190614184565b90508560a00151811215612a075760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151612a19908261407d565b9695505050505050565b600061086783670de0b6b3a764000084611fe4565b60015460025460009161080b916001600160801b0390911690600f0b6130d0565b6000612a7a878787612a7388670de0b6b3a764000061407d565b87876132f5565b979650505050505050565b6000612a9c82612a96858888611fe4565b90613389565b95945050505050565b6000610867612ad1670de0b6b3a7640000612ac081876133e0565b612aca919061407d565b84906133f5565b612ae390670de0b6b3a7640000614040565b670de0b6b3a764000090612a23565b600080612b7085612b01612a38565b612b0b9190614040565b600154612b29908790600160801b90046001600160801b031661407d565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612a85565b909210949350505050565b600080612bc58561160885817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612bbb818c612a23565b611608919061407d565b9150612bf1827f00000000000000000000000000000000000000000000000000000000000000006113a2565b9050935093915050565b60008115612c3b57612c34612c108487614040565b612c1a85876113a2565b612c24888a6113a2565b612c2e9190614040565b906133e0565b9050612a9c565b828503612c4a57506000612a9c565b612a19612c57848761407d565b612c6185876113a2565b612c6b888a6113a2565b612c2e919061407d565b6000612ca17f0000000000000000000000000000000000000000000000000000000000000000836113a2565b6002546001546001600160801b03600160801b9092048216600f0b91612cc89116856113a2565b612cd29190614148565b121592915050565b6000612a7a878787612cf488670de0b6b3a764000061407d565b8787613196565b600080808080612d4d8887612d468c611608612d1f8d670de0b6b3a764000061407d565b7f0000000000000000000000000000000000000000000000000000000000000000906113a2565b9190611fe4565b9450612d79857f00000000000000000000000000000000000000000000000000000000000000006113a2565b92506000612d9a612d928a670de0b6b3a764000061407d565b8b9089611fe4565b9050612dc6817f00000000000000000000000000000000000000000000000000000000000000006113a2565b9450612df2857f00000000000000000000000000000000000000000000000000000000000000006113a2565b9250612dfe8385614040565b915050945094509450945094565b60008183116110a75781610867565b600080612e3485612e2c88876133f5565b8a9190611fe4565b9050612e41888486611fe4565b612e4b9082614040565b905086811115612e6257612e5f878261407d565b91505b509695505050505050565b600060016001607f1b03198212801590612e8e575060016001607f1b038213155b6120285760405163a5353be560e01b815260040160405180910390fd5b60008183136110a75781610867565b60008183136107725782610867565b6002546000908190612eeb90600160801b90046001600160801b031684612a23565b9050612f177f000000000000000000000000000000000000000000000000000000000000000082614040565b6001546001600160801b03161115610772576001547f000000000000000000000000000000000000000000000000000000000000000090612f629083906001600160801b031661407d565b611b7e919061407d565b6000808411612f7b5782612f86565b612f86838686611fe4565b905080600003612f965750610839565b808583821115612fb157839150612fae878385611fe4565b90505b612fba82612002565b60068054600090612fd59084906001600160801b03166140a7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061300281612002565b60068054601090613024908490600160801b90046001600160801b03166140a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506106da8161305590614168565b61340a565b600080670de0b6b3a764000061306e6113b7565b6130789190614090565b9050808311613088576000613092565b613092818461407d565b9150611b7e6130c9670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614090565b8390612a23565b6000806130dd8385614148565b9050600081121561086757600080fd5b6000806130fd888887878761358c565b9050600061311a61311287612a96878b6133f5565b8690866135bb565b613124908361407d565b9050670de0b6b3a764000081106131585761315161314a670de0b6b3a764000088612a23565b8290613389565b9050613170565b61316d61314a670de0b6b3a7640000886133e0565b90505b61317a888261407d565b9998505050505050505050565b60008183116107725782610867565b6000806131a78888888888886135e1565b909250905080612e6257604051637ac17d2560e01b815260040160405180910390fd5b6000806131da87878787876136a3565b90506000613205670de0b6b3a76400006131f48787612a23565b6131fe9190614040565b83906133e0565b9050670de0b6b3a764000081106132325761322b61314a670de0b6b3a7640000886133e0565b905061324a565b61324761314a670de0b6b3a764000088612a23565b90505b613254818861407d565b98975050505050505050565b60008061327088888787876136a3565b905061328085612a96888a61407d565b9650600061329a84866132938b8661407d565b91906135bb565b9050670de0b6b3a764000081106132c7576132c061314a670de0b6b3a7640000886133e0565b90506132df565b6132dc61314a670de0b6b3a764000088612a23565b90505b6132e981856133e0565b905061317a898261407d565b60008061330588888787876136a3565b905061331f85612a96613318898c614040565b86906113a2565b975061332c848985611fe4565b9750600061333a898361407d565b9050670de0b6b3a764000081106133675761336061314a670de0b6b3a7640000886133e0565b905061337f565b61337c61314a670de0b6b3a764000088612a23565b90505b61317a818961407d565b6000816000036133a25750670de0b6b3a764000061086a565b826000036133b25750600061086a565b8160006133be856136c8565b90508181026133d5670de0b6b3a7640000826141ac565b9050612a19816138db565b600061086783670de0b6b3a7640000846135bb565b60006108678383670de0b6b3a76400006135bb565b806000036134155750565b6001546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156134625760405163585fe6df60e11b815260040160405180910390fd5b600061346e8383614184565b90507f00000000000000000000000000000000000000000000000000000000000000008112156134b15760405163585fe6df60e11b815260040160405180910390fd5b6134ba81612002565b600180546001600160801b0319166001600160801b0392909216919091179055600254600090600f0b8181126134fc576134f5838286611fe4565b915061351c565b61351061350882614168565b849086611fe4565b61351990614168565b91505b61352582612e6d565b600280546001600160801b0319166001600160801b03928316179055600154613568916118b291600160801b90041661355e87856130d0565b612d4687876130d0565b600180546001600160801b03928316600160801b0292169190911790555050505050565b60006135988585613389565b6135b16135a986612a96868b6113a2565b859085611fe4565b612a199190614040565b60008260001904841183021582026135d257600080fd5b50910281810615159190040190565b60008060006135f389898888886136a3565b905061360386612a96898b614040565b97508781101561361a576000809250925050613698565b600061362b85876132938c8661407d565b9050670de0b6b3a764000081106136585761365161314a670de0b6b3a7640000896133e0565b9050613670565b61366d61314a670de0b6b3a764000089612a23565b90505b61367a81866133e0565b9050808a11156136915761368e818b61407d565b93505b6001925050505b965096945050505050565b60006136af8585613389565b6135b16136c086612a96868b6133f5565b8590856135bb565b60008082136136ea57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e1982136138f657506000919050565b680755bf798b4a1bf1e5821261391f5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015613aa55780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215613ad657600080fd5b825167ffffffffffffffff80821115613aee57600080fd5b818501915085601f830112613b0257600080fd5b815181811115613b1457613b14613aad565b604051601f8201601f19908116603f01168101908382118183101715613b3c57613b3c613aad565b816040528281528886848701011115613b5457600080fd5b600093505b82841015613b765784840186015181850187015292850192613b59565b600086848301015280965050505050505092915050565b6001600160a01b0381168114613ba257600080fd5b50565b600060208284031215613bb757600080fd5b813561086781613b8d565b80358015158114613bd257600080fd5b919050565b600060208284031215613be957600080fd5b61086782613bc2565b60006060828403121561077257600080fd5b600080600060608486031215613c1957600080fd5b8335925060208401359150604084013567ffffffffffffffff811115613c3e57600080fd5b613c4a86828701613bf2565b9150509250925092565b60008083601f840112613c6657600080fd5b50813567ffffffffffffffff811115613c7e57600080fd5b6020830191508360208260051b85010111156107eb57600080fd5b60008060008060008060808789031215613cb257600080fd5b8635613cbd81613b8d565b95506020870135613ccd81613b8d565b9450604087013567ffffffffffffffff80821115613cea57600080fd5b613cf68a838b01613c54565b90965094506060890135915080821115613d0f57600080fd5b50613d1c89828a01613c54565b979a9699509497509295939492505050565b60008060008060808587031215613d4457600080fd5b843593506020850135613d5681613b8d565b92506040850135613d6681613b8d565b9396929550929360600135925050565b60008060008060808587031215613d8c57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613db857600080fd5b613dc487828801613bf2565b91505092959194509250565b600060208284031215613de257600080fd5b813567ffffffffffffffff811115613df957600080fd5b613e0584828501613bf2565b949350505050565b60008060008060808587031215613e2357600080fd5b843593506020850135613e3581613b8d565b9250604085013591506060850135613e4c81613b8d565b939692955090935050565b60008060408385031215613e6a57600080fd5b8235613e7581613b8d565b9150610a5960208401613bc2565b60008060408385031215613e9657600080fd5b82359150602083013567ffffffffffffffff811115613eb457600080fd5b613ec085828601613bf2565b9150509250929050565b600080600080600080600060e0888a031215613ee557600080fd5b8735613ef081613b8d565b96506020880135613f0081613b8d565b9550613f0e60408901613bc2565b945060608801359350608088013560ff81168114613f2b57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080600060608486031215613f5d57600080fd5b833592506020840135613f6f81613b8d565b929592945050506040919091013590565b600080600080600060a08688031215613f9857600080fd5b853594506020860135613faa81613b8d565b93506040860135613fba81613b8d565b9250606086013591506080860135613fd181613b8d565b809150509295509295909350565b600060208284031215613ff157600080fd5b5035919050565b60006020828403121561400a57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60006001820161403957614039614011565b5060010190565b8082018082111561086a5761086a614011565b634e487b7160e01b600052601260045260246000fd5b60008261407857614078614053565b500690565b8181038181111561086a5761086a614011565b808202811582820484141761086a5761086a614011565b6001600160801b038181168382160190808211156140c7576140c7614011565b5092915050565b6001600160801b038281168282160390808211156140c7576140c7614011565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561086a5761086a614011565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561086a5761086a614011565b81810360008312801583831316838312821617156140c7576140c7614011565b6000600160ff1b820161417d5761417d614011565b5060000390565b80820182811260008312801582168215821617156141a4576141a4614011565b505092915050565b6000826141bb576141bb614053565b600160ff1b8214600019841416156141d5576141d5614011565b50059056fea2646970667358221220659bebeacf9a9606a4f932c34a3d5a80a66fb8a43289e94fc3da1380ca6fa0d864736f6c63430008130033",
    "sourceMap": "439:941:54:-:0;;;454:1:87;429:26;;497:252:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;696:7;705:8;715;725:5;732:13;1784:6:6;1743:7;1752:8;1762;1995:7:0;5110::40;:17;;;-1:-1:-1;;;;;5097:30:40;;;-1:-1:-1;;;;;5097:30:40;;;;;5687:3;5656:7;:28;;;:34;5652:113;;;5713:41;;-1:-1:-1;;;5713:41:40;;;;;;;;;;;5652:113;5798:28;;;;5774:52;;5865:32;;;;5837:60;;5929:26;;;;5907:48;;6120:26;;;;6150:1;6120:31;6116:108;;6174:39;;-1:-1:-1;;;6174:39:40;;;;;;;;;;;6116:108;6255:26;;;;;6233:48;;6335:26;6308:24;;;;:53;;:127;;;6404:7;:26;;;6377:7;:24;;;:53;;;;:::i;:::-;:58;;6308:127;6291:224;;;6467:37;;-1:-1:-1;;;6467:37:40;;;;;;;;;;;6291:224;6544:24;;;;;6524:44;;6593:19;;;;6578:34;;6643:25;;;;6622:46;;;;6692:18;;;;6678:11;:32;;-1:-1:-1;;;;;;6678:32:40;-1:-1:-1;;;;;6678:32:40;;;;;;6736:20;;;;6720:36;;;6826:12;;;;:18;6847:4;-1:-1:-1;;6826:65:40;;;6887:4;6867:7;:12;;;:17;;;:24;6826:65;:111;;;;6933:4;6907:7;:12;;;:23;;;:30;6826:111;6809:202;;;6969:31;;-1:-1:-1;;;6969:31:40;;;;;;;;;;;6809:202;7032:12;;;;;:18;7020:30;;7071:12;;:17;;;;;7060:28;;7115:12;;:23;;;;;7098:40;;7215:21;;;;-1:-1:-1;;;;;7198:38:40;;;;;-1:-1:-1;;;7264:22:40;7246:40;;1869:10:38;;;;;;;;;;-1:-1:-1;;;1869:10:38;;;;1692:264;;1720:121;1692:264;;;4556:25:149;1859:21:38;4597:18:149;;;4590:34;1898:13:38;-1:-1:-1;4640:18:149;;4633:34;1937:4:38;-1:-1:-1;4683:18:149;;;4676:60;;;;1692:264:38;;;;;;;;;;4528:19:149;;;;1692:264:38;;;1669:297;;;;;1650:316;;2083:18:0;;::::2;;::::0;2111;::::2;;::::0;1489:14:5;;;;;;-1:-1:-1;2306:16:6::2;:14;:16::i;:::-;2277:7;:25;;;:45;2273:121;;2345:38;;-1:-1:-1::0;;;2345:38:6::2;;;;;;;;;;;2273:121;2446:5;;-1:-1:-1::0;;;;;2437:21:6::2;;:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;2407:53:6::2;2415:7;:17;;;-1:-1:-1::0;;;;;2407:53:6::2;;2403:121;;2483:30;;-1:-1:-1::0;;;2483:30:6::2;;;;;;;;;;;2403:121;2612:17:::0;;2646:5:::2;::::0;2612:60:::2;::::0;-1:-1:-1;;;2612:60:6;;-1:-1:-1;;;;;5203:32:149;;;2612:60:6::2;::::0;::::2;5185:51:149::0;-1:-1:-1;;5252:18:149;;;5245:34;2612:25:6;::::2;::::0;::::2;::::0;5158:18:149;;2612:60:6::2;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2607:127;;2695:28;;-1:-1:-1::0;;;2695:28:6::2;;;;;;;;;;;2607:127;2894:9;2889:350;2913:8;:15;2909:1;:19;2889:350;;;2949:14;2966:8;2975:1;2966:11;;;;;;;;:::i;:::-;;;;;;;2949:28;;3039:5;;-1:-1:-1::0;;;;;3012:33:6::2;3020:6;-1:-1:-1::0;;;;;3012:33:6::2;;:91;;;;3092:10;;-1:-1:-1::0;;;;;3065:38:6::2;3073:6;-1:-1:-1::0;;;;;3065:38:6::2;;3012:91;2991:197;;;3143:30;;-1:-1:-1::0;;;3143:30:6::2;;;;;;;;;;;2991:197;-1:-1:-1::0;;;;;3201:20:6::2;;::::0;;;:12:::2;:20;::::0;;;;:27;;-1:-1:-1;;3201:27:6::2;3224:4;3201:27;::::0;;2930:3;::::2;::::0;::::2;:::i;:::-;;;;2889:350;;;;1555:1690:::0;;;;;497:252:54;;;;;439:941;;4944:117:5;5028:5;;:26;;-1:-1:-1;;;5028:26:5;;150:4:42;5028:26:5;;;6087:25:149;5002:7:5;;-1:-1:-1;;;;;5028:21:5;;;;6060:18:149;;5028:26:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5021:33;;4944:117;:::o;14:127:149:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:250;213:2;207:9;255:6;243:19;;-1:-1:-1;;;;;277:34:149;;313:22;;;274:62;271:88;;;339:18;;:::i;:::-;375:2;368:22;146:250;:::o;401:139::-;-1:-1:-1;;;;;484:31:149;;474:42;;464:70;;530:1;527;520:12;464:70;401:139;:::o;545:154::-;632:13;;654:39;632:13;654:39;:::i;:::-;545:154;;;:::o;704:525::-;766:5;814:4;802:9;797:3;793:19;789:30;786:50;;;832:1;829;822:12;786:50;865:2;859:9;907:4;895:17;;-1:-1:-1;;;;;927:34:149;;963:22;;;924:62;921:88;;;989:18;;:::i;:::-;1029:10;1025:2;1018:22;;1058:6;1049:15;;1094:9;1088:16;1080:6;1073:32;1159:2;1148:9;1144:18;1138:25;1133:2;1125:6;1121:15;1114:50;1218:2;1207:9;1203:18;1197:25;1192:2;1184:6;1180:15;1173:50;;704:525;;;;:::o;1234:982::-;1299:5;1352:3;1345:4;1337:6;1333:17;1329:27;1319:55;;1370:1;1367;1360:12;1319:55;1393:13;;1425:4;-1:-1:-1;;;;;1478:10:149;;;1475:36;;;1491:18;;:::i;:::-;1537:2;1534:1;1530:10;1569:2;1563:9;1632:2;1628:7;1623:2;1619;1615:11;1611:25;1603:6;1599:38;1687:6;1675:10;1672:22;1667:2;1655:10;1652:18;1649:46;1646:72;;;1698:18;;:::i;:::-;1734:2;1727:22;1784:18;;;1860:15;;;1856:24;;;1818:15;;;;-1:-1:-1;1892:15:149;;;1889:35;;;1920:1;1917;1910:12;1889:35;1956:2;1948:6;1944:15;1933:26;;1968:218;1984:6;1979:3;1976:15;1968:218;;;2057:3;2051:10;2074:39;2107:5;2074:39;:::i;:::-;2126:18;;2164:12;;;;2001;;;;1968:218;;;2204:6;1234:982;-1:-1:-1;;;;;;;1234:982:149:o;2221:1885::-;2397:6;2405;2413;2421;2429;2473:9;2464:7;2460:23;2503:3;2499:2;2495:12;2492:32;;;2520:1;2517;2510:12;2492:32;2543:6;2569:2;2565;2561:11;2558:31;;;2585:1;2582;2575:12;2558:31;2611:17;;:::i;:::-;2598:30;;2651:48;2689:9;2651:48;:::i;:::-;2644:5;2637:63;2732:57;2785:2;2774:9;2770:18;2732:57;:::i;:::-;2727:2;2720:5;2716:14;2709:81;2843:2;2832:9;2828:18;2822:25;2817:2;2810:5;2806:14;2799:49;2901:2;2890:9;2886:18;2880:25;2875:2;2868:5;2864:14;2857:49;2960:3;2949:9;2945:19;2939:26;2933:3;2926:5;2922:15;2915:51;3020:3;3009:9;3005:19;2999:26;2993:3;2986:5;2982:15;2975:51;3080:3;3069:9;3065:19;3059:26;3053:3;3046:5;3042:15;3035:51;3140:3;3129:9;3125:19;3119:26;3113:3;3106:5;3102:15;3095:51;3165:3;3221:2;3210:9;3206:18;3200:25;3195:2;3188:5;3184:14;3177:49;;3245:3;3301:2;3290:9;3286:18;3280:25;3275:2;3268:5;3264:14;3257:49;;3325:3;3360:57;3413:2;3402:9;3398:18;3360:57;:::i;:::-;3344:14;;;3337:81;3437:3;3472:57;3510:18;;;3472:57;:::i;:::-;3456:14;;;3449:81;3549:3;3584:62;3638:7;3618:18;;;3584:62;:::i;:::-;3579:2;3572:5;3568:14;3561:86;;3666:5;3656:15;;3690:57;3743:2;3732:9;3728:18;3690:57;:::i;:::-;3680:67;;;;3766:58;3819:3;3808:9;3804:19;3766:58;:::i;:::-;3756:68;;3843:58;3896:3;3885:9;3881:19;3843:58;:::i;:::-;3945:3;3930:19;;3924:26;3833:68;;-1:-1:-1;;;;;;3962:30:149;;3959:50;;;4005:1;4002;3995:12;3959:50;4028:72;4092:7;4083:6;4072:9;4068:22;4028:72;:::i;:::-;4018:82;;;2221:1885;;;;;;;;:::o;4111:209::-;4143:1;4169;4159:132;;4213:10;4208:3;4204:20;4201:1;4194:31;4248:4;4245:1;4238:15;4276:4;4273:1;4266:15;4159:132;-1:-1:-1;4305:9:149;;4111:209::o;4747:259::-;4817:6;4870:2;4858:9;4849:7;4845:23;4841:32;4838:52;;;4886:1;4883;4876:12;4838:52;4918:9;4912:16;4937:39;4970:5;4937:39;:::i;:::-;4995:5;4747:259;-1:-1:-1;;;4747:259:149:o;5290:277::-;5357:6;5410:2;5398:9;5389:7;5385:23;5381:32;5378:52;;;5426:1;5423;5416:12;5378:52;5458:9;5452:16;5511:5;5504:13;5497:21;5490:5;5487:32;5477:60;;5533:1;5530;5523:12;5572:127;5633:10;5628:3;5624:20;5621:1;5614:31;5664:4;5661:1;5654:15;5688:4;5685:1;5678:15;5704:232;5743:3;5764:17;;;5761:140;;5823:10;5818:3;5814:20;5811:1;5804:31;5858:4;5855:1;5848:15;5886:4;5883:1;5876:15;5761:140;-1:-1:-1;5928:1:149;5917:13;;5704:232::o;6123:184::-;6193:6;6246:2;6234:9;6225:7;6221:23;6217:32;6214:52;;;6262:1;6259;6252:12;6214:52;-1:-1:-1;6285:16:149;;6123:184;-1:-1:-1;6123:184:149:o;:::-;439:941:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052600436106101b75760003560e01c80639032c726116100ec578063cbc134341161008a578063ded0623111610064578063ded06231146103cf578063e44808bc146105b7578063eac3e799146105d7578063ed64bab21461060b576101b7565b8063cbc1343414610309578063d55cefec14610584578063dbbe8070146105a4576101b7565b80639cd241af116100c65780639cd241af14610536578063a22cb465146104a0578063ab033ea914610556578063cba2e58d14610571576101b7565b80639032c726146104f357806399530b06146105135780639aa6846214610528576101b7565b806330adf81f116101595780634ed2d6ac116101335780634ed2d6ac146104855780637180c8ca146104a057806377d05ff4146104c0578063829555d4146104d3576101b7565b806330adf81f146103fd5780633644e515146104315780633e691db914610465576101b7565b806317fad7fc1161019557806317fad7fc146103435780631c0f12b61461036357806321b57d531461038357806329b23fc1146103cf576101b7565b806301681a62146102c757806302329a29146102e9578063074a6de914610309575b3480156101c357600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168585604051610206929190613a66565b600060405180830381855af49150503d8060008114610241576040519150601f19603f3d011682016040523d82523d6000602084013e610246565b606091505b5091509150811561026a57604051638bb0a34b60e01b815260040160405180910390fd5b600061027582613a76565b90506001600160e01b03198116636e64089360e11b1461029757815160208301fd5b8151600319810160048401908152926102b891810160200190602401613ac3565b80519650602001945050505050f35b3480156102d357600080fd5b506102e76102e2366004613ba5565b610626565b005b3480156102f557600080fd5b506102e7610304366004613bd7565b610653565b34801561031557600080fd5b50610329610324366004613c04565b61067c565b604080519283526020830191909152015b60405180910390f35b34801561034f57600080fd5b506102e761035e366004613c99565b6106b1565b34801561036f57600080fd5b506102e761037e366004613d2e565b6106e3565b34801561038f57600080fd5b506103b77f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161033a565b3480156103db57600080fd5b506103ef6103ea366004613d76565b610713565b60405190815260200161033a565b34801561040957600080fd5b506103ef7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561043d57600080fd5b506103ef7f000000000000000000000000000000000000000000000000000000000000000081565b34801561047157600080fd5b506103ef610480366004613dd0565b610747565b34801561049157600080fd5b506102e761037e366004613e0d565b3480156104ac57600080fd5b506102e76104bb366004613e57565b610778565b6103ef6104ce366004613c04565b6107a6565b3480156104df57600080fd5b506103296104ee366004613e83565b6107d9565b3480156104ff57600080fd5b506102e761050e366004613eca565b6107f2565b34801561051f57600080fd5b506103ef610801565b6103ef6103ea366004613d76565b34801561054257600080fd5b506102e7610551366004613f48565b610810565b34801561056257600080fd5b506102e7610304366004613ba5565b61032961057f366004613d76565b61083f565b34801561059057600080fd5b506103ef61059f366004613e83565b61085b565b6103296105b2366004613d76565b610870565b3480156105c357600080fd5b506102e76105d2366004613f80565b61087f565b3480156105e357600080fd5b506103b77f000000000000000000000000000000000000000000000000000000000000000081565b34801561061757600080fd5b506102e76102e2366004613fdf565b61064f7f00000000000000000000000000000000000000000000000000000000000000006108b0565b5050565b61064f7f00000000000000000000000000000000000000000000000000000000000000006108b0565b6000806106a87f00000000000000000000000000000000000000000000000000000000000000006108b0565b50935093915050565b6106da7f00000000000000000000000000000000000000000000000000000000000000006108b0565b50505050505050565b61070c7f00000000000000000000000000000000000000000000000000000000000000006108b0565b5050505050565b600061073e7f00000000000000000000000000000000000000000000000000000000000000006108b0565b50949350505050565b60006107727f00000000000000000000000000000000000000000000000000000000000000006108b0565b50919050565b6107a17f00000000000000000000000000000000000000000000000000000000000000006108b0565b505050565b60006107d17f00000000000000000000000000000000000000000000000000000000000000006108b0565b509392505050565b6000806107e6848461092a565b915091505b9250929050565b6106da87878787878787610a62565b600061080b610cb1565b905090565b6108397f00000000000000000000000000000000000000000000000000000000000000006108b0565b50505050565b60008061084e86868686610d44565b9150915094509492505050565b60006108678383610f95565b90505b92915050565b60008061084e868686866110ae565b6108a87f00000000000000000000000000000000000000000000000000000000000000006108b0565b505050505050565b6060600080836001600160a01b03166000366040516108d0929190613a66565b600060405180830381855af49150503d806000811461090b576040519150601f19603f3d011682016040523d82523d6000602084013e610910565b606091505b50915091508161092257805160208201fd5b805160208201f35b60008061093d6040840160208501613bd7565b15610a19576109776001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330876112fe565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af11580156109e4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a089190613ff8565b9150610a12610cb1565b90506107eb565b839150610a516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330856112fe565b610a59610cb1565b90509250929050565b83421115610a835760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b038716610aaa5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015610bd6573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b031614610c1457604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600f602052604081208054909190610c3a90614027565b909155506001600160a01b038981166000818152600d60209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015610d20573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080b9190613ff8565b600080600054600114610d8b5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064015b60405180910390fd5b6002600055600554610100900460ff1615610db9576040516313d0ff5960e31b815260040160405180910390fd5b610dc1611381565b600080610dce888661092a565b90925090506000610ddf83836113a2565b90507f0000000000000000000000000000000000000000000000000000000000000000811015610e225760405163211ddda360e11b815260040160405180910390fd5b86821015610e43576040516342af972b60e01b815260040160405180910390fd5b6000610e4d6113b7565b9050610e5981846113ed565b506000806000610e6987876116fd565b909a5091945092509050878c1115610e945760405163c972651760e01b815260040160405180910390fd5b8060096000828254610ea69190614040565b90915550610ed690507f000000000000000000000000000000000000000000000000000000000000000085614040565b9850610ee683898489888e611877565b6000610ef360018b611a76565b9050610f0c81610f0660208e018e613ba5565b8b611aab565b8d8b8a83610f1d6020840184613ba5565b6001600160a01b03167f8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda6868f610f53878f88611b53565b60408051928352602083019190915281018e90526060810185905260800160405180910390a39a50505050505050505050506001600055909590945092505050565b6000610fa76040830160208401613bd7565b15611066576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba08765284610fe96020860186613ba5565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af115801561103b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061105f9190613ff8565b905061086a565b6110a76110766020840184613ba5565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169085611b85565b5090919050565b6000806000546001146110f05760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610d82565b6002600055600554610100900460ff161561111e576040516313d0ff5960e31b815260040160405180910390fd5b611126611381565b7f00000000000000000000000000000000000000000000000000000000000000008610156111675760405163211ddda360e11b815260040160405180910390fd5b6000611171610cb1565b905084811015611194576040516342af972b60e01b815260040160405180910390fd5b600061119e6113b7565b905060006111ac82846113ed565b905060006111da7f000000000000000000000000000000000000000000000000000000000000000084614040565b905060008060006111ec8d8887611bfd565b600980549296509294509250829190600090611209908490614040565b9250508190555050600061121e82888c611d2f565b9050808c10156112415760405163c972651760e01b815260040160405180910390fd5b61124b818b61092a565b505061125a8d83858a88611d57565b6000611267600286611a76565b90508d6112818261127b60208f018f613ba5565b83611aab565b8161128f60208e018e613ba5565b60408051898152602081018890529081018c9052606081018490526001600160a01b0391909116907f80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef959060800160405180910390a350506001600055929c929b50919950505050505050505050565b60006040516323b872dd60e01b81528460048201528360248201528260448201526020600060648360008a5af13d15601f3d116001600051141617169150508061070c5760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610d82565b34156113a057604051631574f9f360e01b815260040160405180910390fd5b565b60006108678383670de0b6b3a7640000611fe4565b60006113e37f000000000000000000000000000000000000000000000000000000000000000042614069565b61080b904261407d565b600082815260076020526040812080546001600160801b031615158061141257504284115b1561142857546001600160801b0316905061086a565b61143183612002565b81546001600160801b0319166001600160801b0391909116178155600060078161147b7f00000000000000000000000000000000000000000000000000000000000000008861407d565b815260208101919091526040016000908120546001600160801b031691506114a4600287611a76565b6000818152600c602052604081205491925081156114fd576000806114cc848a88600061202c565b9150915080600960008282546114e29190614040565b909155506114f6905084600084808e6120fa565b6001925050505b600061150a60018a611a76565b6000818152600c6020526040902054909150801561156557600080611532838c8a600161202c565b9150915080600960008282546115489190614040565b909155508c905061155d846000858085612274565b600195505050505b82156115e35760006115977f00000000000000000000000000000000000000000000000000000000000000008c61407d565b600081815260076020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b926115d7928492919004900b612441565b6115e08b612568565b50505b6000808a116115f357600061160e565b61160e8a6116086116038d61264f565b6127b5565b906113a2565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b03909216916116799190614040565b611683919061407d565b90506000811561169c576116978383612a23565b61169f565b60005b604080518e8152602081018a9052908101869052606081018290529091508d907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a250999b9a5050505050505050505050565b60008060008061176a61170e612a38565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000612a59565b925060006117d3611779612a38565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612a85565b90506118098785611804847f0000000000000000000000000000000000000000000000000000000000000000612aa5565b612af2565b156118275760405163512095c760e01b815260040160405180910390fd5b60008061183589848a612b7b565b9092509050611844828761407d565b94506118508186614040565b955061185d81848a611fe4565b9350611869848a61407d565b965050505092959194509250565b6003546001600160801b03166118b76118b28261189c85670de0b6b3a7640000614090565b6004546001600160801b031691908a6001612bfb565b612002565b600480546001600160801b0319166001600160801b03929092169190911790556118e087612002565b600180546000906118fb9084906001600160801b03166140a7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061192885612002565b6001805460109061194a908490600160801b90046001600160801b03166140ce565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061197786612002565b61198190826140a7565b600380546001600160801b0319166001600160801b0383161790556000848152600760205260408120805492935091600160801b9004600f0b906119dd6119c88b896113a2565b6119d38b6002614090565b6118b2919061407d565b8354909150819084906010906119fe908490600160801b9004600f0b6140ee565b82546001600160801b039182166101009390930a9283029190920219909116179055508254611a3b90600f84810b91600160801b9004900b612441565b611a4487612c75565b611a61576040516318846de960e01b815260040160405180910390fd5b611a6a87612568565b50505050505050505050565b60006001600160f81b03821115611aa05760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600b602090815260408083206001600160a01b038616845290915281208054839290611add908490614040565b90915550506000838152600c602052604081208054839290611b00908490614040565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000611b656040830160208401613bd7565b15611b71575082611b7e565b611b7b84846113a2565b90505b9392505050565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806108395760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610d82565b6000806000611c69611c0d612a38565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000612cda565b915085611c7683876113a2565b1115611c955760405163512095c760e01b815260040160405180910390fd5b6000806000611ca5611779612a38565b9050611cbb89670de0b6b3a7640000838b612cfb565b509295509350611ccf91508390508461407d565b611cd9908661407d565b9450611d1f886116088b611ced868a61407d565b8b611cf88e82612e0c565b8e7f0000000000000000000000000000000000000000000000000000000000000000612e1b565b9550909250505093509350939050565b6000611d416040830160208401613bd7565b15611d4d575082611b7e565b611b7b8484612a23565b600354611da1906118b290600160801b90046001600160801b0316611d8484670de0b6b3a7640000614090565b600454600160801b90046001600160801b03169190896001612bfb565b600480546001600160801b03928316600160801b0292169190911790556000611dc984612002565b600154611ddf91906001600160801b03166140ce565b600180546001600160801b0319166001600160801b0383161790559050611e0586612002565b60018054601090611e27908490600160801b90046001600160801b03166140a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e5486612002565b60038054601090611e76908490600160801b90046001600160801b03166140a7565b82546101009290920a6001600160801b03818102199093169183160217909155600254600154600f9190910b911612159050611ec55760405163585fe6df60e11b815260040160405180910390fd5b6000611ecf6113b7565b600081815260076020526040902054909150600160801b9004600f0b611f157f000000000000000000000000000000000000000000000000000000000000000088614069565b611f1f908861407d565b96506000611f2d8989614040565b9050611f3881612002565b60008481526007602052604090208054601090611f60908490600160801b9004600f0b61411b565b82546001600160801b039182166101009390930a928302919092021990911617905550600083815260076020526040902054611faa90600f84810b91600160801b9004900b612441565b611fb386612c75565b611fd0576040516318846de960e01b815260040160405180910390fd5b611fd986612568565b505050505050505050565b6000826000190484118302158202611ffb57600080fd5b5091020490565b6000600160801b821061202857604051630f0af95160e11b815260040160405180910390fd5b5090565b6000806120398686612a23565b91506000612067837f00000000000000000000000000000000000000000000000000000000000000006113a2565b9050612093817f00000000000000000000000000000000000000000000000000000000000000006113a2565b915083156120b6576120a5828261407d565b6120af908461407d565b92506120cd565b6120c0828261407d565b6120ca9084614040565b92505b848610156120f0576120e0838787611fe4565b92506120ed828787611fe4565b91505b5094509492505050565b600354600160801b90046001600160801b03166121436118b28261212685670de0b6b3a7640000614090565b600454600160801b90046001600160801b031691908a6000612bfb565b600480546001600160801b03928316600160801b02921691909117905561216986612002565b61217390826140ce565b600380546001600160801b03928316600160801b02921691909117905561219984612002565b600180546000906121b49084906001600160801b03166140a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506121e183612e6d565b600280546000906121f6908490600f0b6140ee565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061222685612002565b60018054601090612248908490600160801b90046001600160801b03166140ce565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6003546001600160801b03166122af6118b28261229985670de0b6b3a7640000614090565b6004546001600160801b031691908a6000612bfb565b600480546001600160801b0319166001600160801b03929092169190911790556122d886612002565b6122e290826140ce565b600380546001600160801b0319166001600160801b03929092169190911790555061230c83612002565b600180546000906123279084906001600160801b03166140ce565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061235482612e6d565b60028054600090612369908490600f0b61411b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061239984612002565b600180546010906123bb908490600160801b90046001600160801b03166140a7565b82546101009290920a6001600160801b038181021990931691831602179091556001547f00000000000000000000000000000000000000000000000000000000000000009116109050806124235750600254600154600f9190910b6001600160801b03909116125b1561070c5760405163585fe6df60e11b815260040160405180910390fd5b8082138015612451575060008212155b156124e45760006124628282612eab565b61246c9084614148565b60025490915061249990612494908390600160801b90046001600160801b0316600f0b612eba565b612e6d565b600280546010906124bb908490600160801b90046001600160801b03166140ce565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b8181131561064f576000821261255a576124fd82612e6d565b61250682612e6d565b612510919061411b565b60028054601090612532908490600160801b90046001600160801b03166140a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b612510612494826000612eab565b600c6020527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854600654600360f81b60009081527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5490916125d5916001600160801b039091169061407d565b905060006125e38284614040565b905060006125f36116038661264f565b90506000612602858385611fe4565b905060008061261088612ec9565b90508281111561262757612624838261407d565b91505b6000821180612634575083155b156126455761264582858789612f6c565b5050505050505050565b6126ac60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600254600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600354821660e0820152600454909161010083019161277b911661305a565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926127ad9290041661305a565b905292915050565b6000806127d58361014001518461012001516113a290919063ffffffff16565b61010084015160e08501516127e9916113a2565b6127f39190614148565b90506000612809846000015185602001516130d0565b905060008213156128a957600061284b8286604001518760a001518860c00151670de0b6b3a764000061283c919061407d565b89606001518a608001516130ed565b90506128578184613187565b905080156128a357612890828660400151838860c00151670de0b6b3a7640000612881919061407d565b89606001518a60800151613196565b8551869061289f90839061407d565b9052505b50612965565b6000821215612965576128bb82614168565b915060006128ef8286604001518760c00151670de0b6b3a76400006128e0919061407d565b886060015189608001516131ca565b90506128fb8184613187565b9050801561294757612934828660400151838860c00151670de0b6b3a7640000612925919061407d565b89606001518a60800151613260565b85518690612943908390614040565b9052505b612951818461407d565b85518690612960908390614040565b905250505b6000612994856101000151670de0b6b3a7640000612983919061407d565b606087015160e08801519190611fe4565b6129c2866101400151670de0b6b3a76400006129b0919061407d565b60608801516101208901519190611fe4565b6129cc9190614148565b905060008186600001516129e09190614184565b90508560a00151811215612a075760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151612a19908261407d565b9695505050505050565b600061086783670de0b6b3a764000084611fe4565b60015460025460009161080b916001600160801b0390911690600f0b6130d0565b6000612a7a878787612a7388670de0b6b3a764000061407d565b87876132f5565b979650505050505050565b6000612a9c82612a96858888611fe4565b90613389565b95945050505050565b6000610867612ad1670de0b6b3a7640000612ac081876133e0565b612aca919061407d565b84906133f5565b612ae390670de0b6b3a7640000614040565b670de0b6b3a764000090612a23565b600080612b7085612b01612a38565b612b0b9190614040565b600154612b29908790600160801b90046001600160801b031661407d565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612a85565b909210949350505050565b600080612bc58561160885817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612bbb818c612a23565b611608919061407d565b9150612bf1827f00000000000000000000000000000000000000000000000000000000000000006113a2565b9050935093915050565b60008115612c3b57612c34612c108487614040565b612c1a85876113a2565b612c24888a6113a2565b612c2e9190614040565b906133e0565b9050612a9c565b828503612c4a57506000612a9c565b612a19612c57848761407d565b612c6185876113a2565b612c6b888a6113a2565b612c2e919061407d565b6000612ca17f0000000000000000000000000000000000000000000000000000000000000000836113a2565b6002546001546001600160801b03600160801b9092048216600f0b91612cc89116856113a2565b612cd29190614148565b121592915050565b6000612a7a878787612cf488670de0b6b3a764000061407d565b8787613196565b600080808080612d4d8887612d468c611608612d1f8d670de0b6b3a764000061407d565b7f0000000000000000000000000000000000000000000000000000000000000000906113a2565b9190611fe4565b9450612d79857f00000000000000000000000000000000000000000000000000000000000000006113a2565b92506000612d9a612d928a670de0b6b3a764000061407d565b8b9089611fe4565b9050612dc6817f00000000000000000000000000000000000000000000000000000000000000006113a2565b9450612df2857f00000000000000000000000000000000000000000000000000000000000000006113a2565b9250612dfe8385614040565b915050945094509450945094565b60008183116110a75781610867565b600080612e3485612e2c88876133f5565b8a9190611fe4565b9050612e41888486611fe4565b612e4b9082614040565b905086811115612e6257612e5f878261407d565b91505b509695505050505050565b600060016001607f1b03198212801590612e8e575060016001607f1b038213155b6120285760405163a5353be560e01b815260040160405180910390fd5b60008183136110a75781610867565b60008183136107725782610867565b6002546000908190612eeb90600160801b90046001600160801b031684612a23565b9050612f177f000000000000000000000000000000000000000000000000000000000000000082614040565b6001546001600160801b03161115610772576001547f000000000000000000000000000000000000000000000000000000000000000090612f629083906001600160801b031661407d565b611b7e919061407d565b6000808411612f7b5782612f86565b612f86838686611fe4565b905080600003612f965750610839565b808583821115612fb157839150612fae878385611fe4565b90505b612fba82612002565b60068054600090612fd59084906001600160801b03166140a7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061300281612002565b60068054601090613024908490600160801b90046001600160801b03166140a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506106da8161305590614168565b61340a565b600080670de0b6b3a764000061306e6113b7565b6130789190614090565b9050808311613088576000613092565b613092818461407d565b9150611b7e6130c9670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614090565b8390612a23565b6000806130dd8385614148565b9050600081121561086757600080fd5b6000806130fd888887878761358c565b9050600061311a61311287612a96878b6133f5565b8690866135bb565b613124908361407d565b9050670de0b6b3a764000081106131585761315161314a670de0b6b3a764000088612a23565b8290613389565b9050613170565b61316d61314a670de0b6b3a7640000886133e0565b90505b61317a888261407d565b9998505050505050505050565b60008183116107725782610867565b6000806131a78888888888886135e1565b909250905080612e6257604051637ac17d2560e01b815260040160405180910390fd5b6000806131da87878787876136a3565b90506000613205670de0b6b3a76400006131f48787612a23565b6131fe9190614040565b83906133e0565b9050670de0b6b3a764000081106132325761322b61314a670de0b6b3a7640000886133e0565b905061324a565b61324761314a670de0b6b3a764000088612a23565b90505b613254818861407d565b98975050505050505050565b60008061327088888787876136a3565b905061328085612a96888a61407d565b9650600061329a84866132938b8661407d565b91906135bb565b9050670de0b6b3a764000081106132c7576132c061314a670de0b6b3a7640000886133e0565b90506132df565b6132dc61314a670de0b6b3a764000088612a23565b90505b6132e981856133e0565b905061317a898261407d565b60008061330588888787876136a3565b905061331f85612a96613318898c614040565b86906113a2565b975061332c848985611fe4565b9750600061333a898361407d565b9050670de0b6b3a764000081106133675761336061314a670de0b6b3a7640000886133e0565b905061337f565b61337c61314a670de0b6b3a764000088612a23565b90505b61317a818961407d565b6000816000036133a25750670de0b6b3a764000061086a565b826000036133b25750600061086a565b8160006133be856136c8565b90508181026133d5670de0b6b3a7640000826141ac565b9050612a19816138db565b600061086783670de0b6b3a7640000846135bb565b60006108678383670de0b6b3a76400006135bb565b806000036134155750565b6001546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156134625760405163585fe6df60e11b815260040160405180910390fd5b600061346e8383614184565b90507f00000000000000000000000000000000000000000000000000000000000000008112156134b15760405163585fe6df60e11b815260040160405180910390fd5b6134ba81612002565b600180546001600160801b0319166001600160801b0392909216919091179055600254600090600f0b8181126134fc576134f5838286611fe4565b915061351c565b61351061350882614168565b849086611fe4565b61351990614168565b91505b61352582612e6d565b600280546001600160801b0319166001600160801b03928316179055600154613568916118b291600160801b90041661355e87856130d0565b612d4687876130d0565b600180546001600160801b03928316600160801b0292169190911790555050505050565b60006135988585613389565b6135b16135a986612a96868b6113a2565b859085611fe4565b612a199190614040565b60008260001904841183021582026135d257600080fd5b50910281810615159190040190565b60008060006135f389898888886136a3565b905061360386612a96898b614040565b97508781101561361a576000809250925050613698565b600061362b85876132938c8661407d565b9050670de0b6b3a764000081106136585761365161314a670de0b6b3a7640000896133e0565b9050613670565b61366d61314a670de0b6b3a764000089612a23565b90505b61367a81866133e0565b9050808a11156136915761368e818b61407d565b93505b6001925050505b965096945050505050565b60006136af8585613389565b6135b16136c086612a96868b6133f5565b8590856135bb565b60008082136136ea57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e1982136138f657506000919050565b680755bf798b4a1bf1e5821261391f5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015613aa55780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215613ad657600080fd5b825167ffffffffffffffff80821115613aee57600080fd5b818501915085601f830112613b0257600080fd5b815181811115613b1457613b14613aad565b604051601f8201601f19908116603f01168101908382118183101715613b3c57613b3c613aad565b816040528281528886848701011115613b5457600080fd5b600093505b82841015613b765784840186015181850187015292850192613b59565b600086848301015280965050505050505092915050565b6001600160a01b0381168114613ba257600080fd5b50565b600060208284031215613bb757600080fd5b813561086781613b8d565b80358015158114613bd257600080fd5b919050565b600060208284031215613be957600080fd5b61086782613bc2565b60006060828403121561077257600080fd5b600080600060608486031215613c1957600080fd5b8335925060208401359150604084013567ffffffffffffffff811115613c3e57600080fd5b613c4a86828701613bf2565b9150509250925092565b60008083601f840112613c6657600080fd5b50813567ffffffffffffffff811115613c7e57600080fd5b6020830191508360208260051b85010111156107eb57600080fd5b60008060008060008060808789031215613cb257600080fd5b8635613cbd81613b8d565b95506020870135613ccd81613b8d565b9450604087013567ffffffffffffffff80821115613cea57600080fd5b613cf68a838b01613c54565b90965094506060890135915080821115613d0f57600080fd5b50613d1c89828a01613c54565b979a9699509497509295939492505050565b60008060008060808587031215613d4457600080fd5b843593506020850135613d5681613b8d565b92506040850135613d6681613b8d565b9396929550929360600135925050565b60008060008060808587031215613d8c57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613db857600080fd5b613dc487828801613bf2565b91505092959194509250565b600060208284031215613de257600080fd5b813567ffffffffffffffff811115613df957600080fd5b613e0584828501613bf2565b949350505050565b60008060008060808587031215613e2357600080fd5b843593506020850135613e3581613b8d565b9250604085013591506060850135613e4c81613b8d565b939692955090935050565b60008060408385031215613e6a57600080fd5b8235613e7581613b8d565b9150610a5960208401613bc2565b60008060408385031215613e9657600080fd5b82359150602083013567ffffffffffffffff811115613eb457600080fd5b613ec085828601613bf2565b9150509250929050565b600080600080600080600060e0888a031215613ee557600080fd5b8735613ef081613b8d565b96506020880135613f0081613b8d565b9550613f0e60408901613bc2565b945060608801359350608088013560ff81168114613f2b57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080600060608486031215613f5d57600080fd5b833592506020840135613f6f81613b8d565b929592945050506040919091013590565b600080600080600060a08688031215613f9857600080fd5b853594506020860135613faa81613b8d565b93506040860135613fba81613b8d565b9250606086013591506080860135613fd181613b8d565b809150509295509295909350565b600060208284031215613ff157600080fd5b5035919050565b60006020828403121561400a57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60006001820161403957614039614011565b5060010190565b8082018082111561086a5761086a614011565b634e487b7160e01b600052601260045260246000fd5b60008261407857614078614053565b500690565b8181038181111561086a5761086a614011565b808202811582820484141761086a5761086a614011565b6001600160801b038181168382160190808211156140c7576140c7614011565b5092915050565b6001600160801b038281168282160390808211156140c7576140c7614011565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561086a5761086a614011565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561086a5761086a614011565b81810360008312801583831316838312821617156140c7576140c7614011565b6000600160ff1b820161417d5761417d614011565b5060000390565b80820182811260008312801582168215821617156141a4576141a4614011565b505092915050565b6000826141bb576141bb614053565b600160ff1b8214600019841416156141d5576141d5614011565b50059056fea2646970667358221220659bebeacf9a9606a4f932c34a3d5a80a66fb8a43289e94fc3da1380ca6fa0d864736f6c63430008130033",
    "sourceMap": "439:941:54:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2519:12:0;2673;2687:23;2714:7;-1:-1:-1;;;;;2714:20:0;2735:5;;2714:27;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2672:69;;;;2755:7;2751:76;;;2785:31;;-1:-1:-1;;;2785:31:0;;;;;;;;;;;2751:76;2836:15;2854:18;2861:10;2854:18;:::i;:::-;2836:36;-1:-1:-1;;;;;;;2886:43:0;;-1:-1:-1;;;2886:43:0;2882:160;;3006:10;3000:17;2995:2;2983:10;2979:19;2972:46;2882:160;3243:17;;-1:-1:-1;;3239:25:0;;3262:1;3217:20;;3210:55;;;3217:20;3344:31;;;;;;;;;;:::i;:::-;439:941:54;;;-1:-1:-1;439:941:54;;;-1:-1:-1;;;;;439:941:54;3962:67:6;;;;;;;;;;-1:-1:-1;3962:67:6;;;;;:::i;:::-;;:::i;:::-;;7607:65:0;;;;;;;;;;-1:-1:-1;7607:65:0;;;;;:::i;:::-;;:::i;6895:181::-;;;;;;;;;;-1:-1:-1;6895:181:0;;;;;:::i;:::-;;:::i;:::-;;;;3434:25:149;;;3490:2;3475:18;;3468:34;;;;3407:18;6895:181:0;;;;;;;;9157:167;;;;;;;;;;-1:-1:-1;9157:167:0;;;;;:::i;:::-;;:::i;8078:102::-;;;;;;;;;;-1:-1:-1;8078:102:0;;;;;:::i;:::-;;:::i;1469:32::-;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5666:32:149;;;5648:51;;5636:2;5621:18;1469:32:0;5502:203:149;5641:177:0;;;;;;;;;;-1:-1:-1;5641:177:0;;;;;:::i;:::-;;:::i;:::-;;;6422:25:149;;;6410:2;6395:18;5641:177:0;6276::149;882:174:38;;;;;;;;;;;;932:124;882:174;;1120:41;;;;;;;;;;;;;;;7396:136:0;;;;;;;;;;-1:-1:-1;7396:136:0;;;;;:::i;:::-;;:::i;8593:107::-;;;;;;;;;;-1:-1:-1;8593:107:0;;;;;:::i;7893:78::-;;;;;;;;;;-1:-1:-1;7893:78:0;;;;;:::i;:::-;;:::i;5921:168::-;;;;;;:::i;:::-;;:::i;755:204:54:-;;;;;;;;;;-1:-1:-1;755:204:54;;;;;:::i;:::-;;:::i;10513:266:0:-;;;;;;;;;;-1:-1:-1;10513:266:0;;;;;:::i;:::-;;:::i;1272:106:54:-;;;;;;;;;;;;;:::i;6157:187:0:-;;;;;;:::i;8990:92::-;;;;;;;;;;-1:-1:-1;8990:92:0;;;;;:::i;:::-;;:::i;7734:76::-;;;;;;;;;;-1:-1:-1;7734:76:0;;;;;:::i;4036:314::-;;;;;;:::i;:::-;;:::i;965:189:54:-;;;;;;;;;;-1:-1:-1;965:189:54;;;;;:::i;:::-;;:::i;5244:319:0:-;;;;;;:::i;:::-;;:::i;8309:163::-;;;;;;;;;;-1:-1:-1;8309:163:0;;;;;:::i;:::-;;:::i;1629:32::-;;;;;;;;;;;;;;;7163:73;;;;;;;;;;-1:-1:-1;7163:73:0;;;;;:::i;3962:67:6:-;4004:18;4014:7;4004:9;:18::i;:::-;;3962:67;:::o;7607:65:0:-;7647:18;7657:7;7647:9;:18::i;6895:181::-;7023:7;7032;7051:18;7061:7;7051:9;:18::i;:::-;;6895:181;;;;;;:::o;9157:167::-;9299:18;9309:7;9299:9;:18::i;:::-;;9157:167;;;;;;:::o;8078:102::-;8155:18;8165:7;8155:9;:18::i;:::-;;8078:102;;;;:::o;5641:177::-;5774:7;5793:18;5803:7;5793:9;:18::i;:::-;;5641:177;;;;;;:::o;7396:136::-;7488:7;7507:18;7517:7;7507:9;:18::i;:::-;;7396:136;;;:::o;7893:78::-;7946:18;7956:7;7946:9;:18::i;:::-;;7893:78;;:::o;5921:168::-;6045:7;6064:18;6074:7;6064:9;:18::i;:::-;;5921:168;;;;;:::o;755:204:54:-;866:20;888:18;925:27;934:7;943:8;925;:27::i;:::-;918:34;;;;755:204;;;;;;:::o;10513:266:0:-;10713:59;10727:5;10734:7;10743:9;10754:8;10764:1;10767;10770;10713:13;:59::i;1272:106:54:-;1318:18;1355:16;:14;:16::i;:::-;1348:23;;1272:106;:::o;8990:92:0:-;9057:18;9067:7;9057:9;:18::i;:::-;;8990:92;;;:::o;4036:314::-;4222:20;4244;4283:60;4293:11;4306:10;4318:14;4334:8;4283:9;:60::i;:::-;4276:67;;;;4036:314;;;;;;;:::o;965:189:54:-;1077:23;1119:28;1129:7;1138:8;1119:9;:28::i;:::-;1112:35;;965:189;;;;;:::o;5244:319:0:-;5432:20;5454:21;5494:62;5505:11;5518;5531:14;5547:8;5494:10;:62::i;8309:163::-;8447:18;8457:7;8447:9;:18::i;:::-;;8309:163;;;;;:::o;11057:359::-;11111:12;11136;11150:19;11173:7;-1:-1:-1;;;;;11173:20:0;11194:8;;11173:30;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11135:68;;;;11218:7;11213:117;;11298:6;11292:13;11287:2;11279:6;11275:15;11268:38;11213:117;11392:6;11386:13;11381:2;11373:6;11369:15;11362:38;2227:1105:5;2350:20;;2406:15;;;;;;;;:::i;:::-;2402:924;;;2489:141;-1:-1:-1;;;;;2503:10:5;2489:43;2550:10;2586:4;2609:7;2489:43;:141::i;:::-;2715:37;;-1:-1:-1;;;2715:37:5;;;;;10865:25:149;;;2746:4:5;10906:18:149;;;10899:60;2715:5:5;-1:-1:-1;;;;;2715:13:5;;;;10838:18:149;;2715:37:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2700:52;;2779:16;:14;:16::i;:::-;2766:29;;2402:924;;;3049:7;;-1:-1:-1;3131:141:5;-1:-1:-1;;;;;3145:5:5;3131:38;3187:10;3223:4;3049:7;3131:38;:141::i;:::-;3299:16;:14;:16::i;:::-;3286:29;;2227:1105;;;;;:::o;3132:1422:38:-;3409:8;3391:15;:26;3387:93;;;3440:29;;-1:-1:-1;;;3440:29:38;;;;;;;;;;;3387:93;-1:-1:-1;;;;;3541:19:38;;3537:92;;3583:35;;-1:-1:-1;;;3583:35:38;;;;;;;;;;;3537:92;-1:-1:-1;;;;;4058:14:38;;;3711:18;4058:14;;;:7;:14;;;;;;;;;3882:246;;932:124;3882:246;;;11440:25:149;11519:18;;;11512:43;;;;11591:15;;;11571:18;;;11564:43;11650:14;;11643:22;11623:18;;;11616:50;11682:19;;;11675:35;;;;11726:19;;;;11719:35;;;3882:246:38;;;;;;;;;;11412:19:149;;;3882:246:38;;;3851:295;;;;;;;;-1:-1:-1;;;3755:405:38;;;12023:27:149;3817:16:38;12066:11:149;;;12059:27;12102:12;;;12095:28;12139:12;;3755:405:38;;;-1:-1:-1;;3755:405:38;;;;;;;;;3732:438;;3755:405;3732:438;;;;4180:14;4197:30;;;;;;;;;12389:25:149;;;12462:4;12450:17;;12430:18;;;12423:45;;;;12484:18;;;12477:34;;;12527:18;;;12520:34;;;3732:438:38;;-1:-1:-1;4180:14:38;4197:30;;12361:19:149;;4197:30:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4180:47;;4251:5;-1:-1:-1;;;;;4241:15:38;:6;-1:-1:-1;;;;;4241:15:38;;4237:58;;4265:30;;-1:-1:-1;;;4265:30:38;;;;;;;;;;;4237:58;-1:-1:-1;;;;;4350:14:38;;;;;;:7;:14;;;;;4348:16;;4350:14;;;4348:16;;;:::i;:::-;;;;-1:-1:-1;;;;;;4401:24:38;;;;;;;:17;:24;;;;;;;;:33;;;;;;;;;;;;;:45;;-1:-1:-1;;4401:45:38;;;;;;;;;;4506:41;;12977::149;;;4506::38;;12950:18:149;4506:41:38;;;;;;;3323:1231;;3132:1422;;;;;;;:::o;4944:117:5:-;5028:26;;-1:-1:-1;;;5028:26:5;;150:4:42;5028:26:5;;;6422:25:149;5002:7:5;;5028:5;-1:-1:-1;;;;;5028:21:5;;;;6395:18:149;;5028:26:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;1523:3224:36:-;1755:20;1777;512:6:87;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:87;;13231:2:149;504:34:87;;;13213:21:149;13270:2;13250:18;;;13243:30;-1:-1:-1;;;13289:18:149;;;13282:40;13339:18;;504:34:87;;;;;;;;;558:1;549:6;:10;5256:21:33;;::::1;::::0;::::1;;;5252:54;;;5286:20;;-1:-1:-1::0;;;5286:20:33::1;;;;;;;;;;;5252:54;1863:20:36::2;:18;:20::i;:::-;1939:23;1964:18:::0;1986:61:::2;2008:7;2029:8;1986;:61::i;:::-;1938:109:::0;;-1:-1:-1;1938:109:36;-1:-1:-1;2410:21:36::2;2434:35;1938:109:::0;;2434:23:::2;:35::i;:::-;2410:59;;2499:25;2483:13;:41;2479:117;;;2547:38;;-1:-1:-1::0;;;2547:38:36::2;;;;;;;;;;;2479:117;2622:14;2609:10;:27;2605:96;;;2659:31;;-1:-1:-1::0;;;2659:31:36::2;;;;;;;;;;;2605:96;2744:24;2771:19;:17;:19::i;:::-;2744:46;;2800;2817:16;2835:10;2800:16;:46::i;:::-;;3108:26;3144:25:::0;3179:26:::2;3349:47;3368:15;3385:10;3349:18;:47::i;:::-;3215:181:::0;;-1:-1:-1;3215:181:36;;-1:-1:-1;3215:181:36;-1:-1:-1;3215:181:36;-1:-1:-1;3447:25:36;;::::2;3443:88;;;3495:25;;-1:-1:-1::0;;;3495:25:36::2;;;;;;;;;;;3443:88;3608:18;3582:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;3697:36:36::2;::::0;-1:-1:-1;3716:17:36::2;3697:16:::0;:36:::2;:::i;:::-;3682:51;;3743:193;3771:18;3803:12;3829:17;3860:10;3884:16;3914:12;3743:14;:193::i;:::-;4020:15;4038:97;4073:26;4113:12;4038:21;:97::i;:::-;4020:115:::0;-1:-1:-1;4145:50:36::2;4020:115:::0;4160:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;4182:12;4145:5;:50::i;:::-;4258:7:::0;4345:8;4418:12;4532:7;4498:20:::2;;::::0;::::2;4345:8:::0;4498:20:::2;:::i;:::-;-1:-1:-1::0;;;;;4476:217:36::2;;4553:12;4579:53;4604:6;4612:10;4624:7;4579:24;:53::i;:::-;4476:217;::::0;;13729:25:149;;;13785:2;13770:18;;13763:34;;;;13813:18;;13806:34;;;13871:2;13856:18;;13849:34;;;13716:3;13701:19;4476:217:36::2;;;;;;;4726:13:::0;-1:-1:-1;;;;;;;;;;;591:1:87;582:6;:10;1523:3224:36;;;;-1:-1:-1;1523:3224:36;-1:-1:-1;;;1523:3224:36:o;4099:660:5:-;4223:23;4262:15;;;;;;;;:::i;:::-;4258:495;;;-1:-1:-1;;;;;4430:5:5;:12;;4460:7;4485:20;;;;:8;:20;:::i;:::-;4430:120;;-1:-1:-1;;;;;;4430:120:5;;;;;;;;;;14096:25:149;;;;-1:-1:-1;;;;;14195:15:149;14175:18;;;14168:43;4531:4:5;14227:18:149;;;14220:43;14069:18;;4430:120:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4412:138;;4258:495;;;4638:65;4673:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;4652:5:5;4638:34;;4695:7;4638:34;:65::i;:::-;-1:-1:-1;4735:7:5;;4099:660;-1:-1:-1;4099:660:5:o;1529:3736:39:-;1735:7;1744;512:6:87;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:87;;13231:2:149;504:34:87;;;13213:21:149;13270:2;13250:18;;;13243:30;-1:-1:-1;;;13289:18:149;;;13282:40;13339:18;;504:34:87;13029:334:149;504:34:87;558:1;549:6;:10;5256:21:33;;::::1;::::0;::::1;;;5252:54;;;5286:20;;-1:-1:-1::0;;;5286:20:33::1;;;;;;;;;;;5252:54;1830:20:39::2;:18;:20::i;:::-;1878:25;1864:11;:39;1860:115;;;1926:38;;-1:-1:-1::0;;;1926:38:39::2;;;;;;;;;;;1860:115;2301:18;2322:16;:14;:16::i;:::-;2301:37;;2365:14;2352:10;:27;2348:96;;;2402:31;;-1:-1:-1::0;;;2402:31:39::2;;;;;;;;;;;2348:96;2453:24;2480:19;:17;:19::i;:::-;2453:46;;2509:22;2534:46;2551:16;2569:10;2534:16;:46::i;:::-;2509:71:::0;-1:-1:-1;2819:20:39::2;2842:36;2861:17;2842:16:::0;:36:::2;:::i;:::-;2819:59;;2888:26;2924:19:::0;2967:26:::2;3125:60;3145:11;3158:10;3170:14;3125:19;:60::i;:::-;3246:22;:44:::0;;3007:178;;-1:-1:-1;3007:178:39;;-1:-1:-1;3007:178:39;-1:-1:-1;3007:178:39;;3246:22;::::2;::::0;:44:::2;::::0;3007:178;;3246:44:::2;:::i;:::-;;;;;;;;2953:348;3923:21;3947:105;3985:11;4010:10;4034:8;3947:24;:105::i;:::-;3923:129;;4080:13;4066:11;:27;4062:90;;;4116:25;;-1:-1:-1::0;;;4116:25:39::2;;;;;;;;;;;4062:90;4161:33;4170:13;4185:8;4161;:33::i;:::-;;;4422:157;4451:11;4476;4501:18;4533:10;4557:12;4422:15;:157::i;:::-;4739:15;4757:98;4792:27;4833:12;4757:21;:98::i;:::-;4739:116:::0;-1:-1:-1;4886:11:39;4938:48:::2;4739:116:::0;4953:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;4975:10;4938:5;:48::i;:::-;5095:7:::0;5061:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;5038:173;::::0;;13729:25:149;;;13785:2;13770:18;;13763:34;;;13813:18;;;13806:34;;;13871:2;13856:18;;13849:34;;;-1:-1:-1;;;;;5038:173:39;;;::::2;::::0;::::2;::::0;13716:3:149;13701:19;5038:173:39::2;;;;;;;-1:-1:-1::0;;591:1:87;582:6;:10;5230:12:39;;5244:13;;-1:-1:-1;1529:3736:39;;-1:-1:-1;;;;;;;;;;1529:3736:39:o;1328:1616:88:-;1466:12;1636:4;1630:11;-1:-1:-1;;;1759:17:88;1752:93;1892:4;1888:1;1869:17;1865:25;1858:39;1976:2;1971;1952:17;1948:26;1941:38;2056:6;2051:2;2032:17;2028:26;2021:42;2860:2;2857:1;2852:3;2833:17;2830:1;2823:5;2816;2811:52;2379:16;2372:24;2366:2;2348:16;2345:24;2341:1;2337;2331:8;2328:15;2324:46;2321:76;2121:756;2110:767;;;2905:7;2897:40;;;;-1:-1:-1;;;2897:40:88;;14476:2:149;2897:40:88;;;14458:21:149;14515:2;14495:18;;;14488:30;-1:-1:-1;;;14534:18:149;;;14527:50;14594:18;;2897:40:88;14274:344:149;5179:145:5;5246:9;:14;5242:76;;5283:24;;-1:-1:-1;;;5283:24:5;;;;;;;;;;;5242:76;5179:145::o;1771:119:42:-;1833:7;1860:22;1871:1;1874;1877:4;1860:10;:22::i;7049:223:33:-;7125:24;7227:37;7245:19;7227:15;:37;:::i;:::-;7196:69;;:15;:69;:::i;2936:4513:34:-;3057:7;3189:51;;;:12;:51;;;;;3254:22;;-1:-1:-1;;;;;3254:22:34;:27;;;:64;;;3303:15;3285;:33;3254:64;3250:124;;;3341:22;-1:-1:-1;;;;;3341:22:34;;-1:-1:-1;3334:29:34;;3250:124;3455:23;:11;:21;:23::i;:::-;3430:48;;-1:-1:-1;;;;;;3430:48:34;-1:-1:-1;;;;;3430:48:34;;;;;;;-1:-1:-1;3967:12:34;-1:-1:-1;3993:35:34;4011:17;3993:15;:35;:::i;:::-;3967:71;;;;;;;;;;;-1:-1:-1;3967:71:34;;;:82;-1:-1:-1;;;;;3967:82:34;;-1:-1:-1;4082:101:34;4117:27;4158:15;4082:21;:101::i;:::-;4193:27;4223:26;;;:12;:26;;;;;;4059:124;;-1:-1:-1;4293:23:34;;4289:667;;4350:21;4389;4427:180;4474:19;4515:11;4548:14;4584:5;4427:25;:180::i;:::-;4332:275;;;;4647:13;4621:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;4674:235:34;;-1:-1:-1;4708:19:34;4745:1;4764:13;;4880:15;4674:16;:235::i;:::-;4941:4;4923:22;;4318:638;;4289:667;5074:19;5096:100;5131:26;5171:15;5096:21;:100::i;:::-;5206:26;5235:25;;;:12;:25;;;;;;5074:122;;-1:-1:-1;5274:22:34;;5270:745;;5330:21;5369;5407:178;5454:18;5494:11;5527:14;5563:4;5407:25;:178::i;:::-;5312:273;;;;5625:13;5599:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5677:15:34;;-1:-1:-1;5736:232:34;5769:18;5652:22;5824:13;;5677:15;5736;:232::i;:::-;6000:4;5982:22;;5298:717;;;5270:745;6097:15;6093:535;;;6128:20;6151:35;6169:17;6151:15;:35;:::i;:::-;6200:31;6258:26;;;:12;:26;;;;;:35;;-1:-1:-1;;;;;6321:39:34;;;;;;6128:58;;-1:-1:-1;;;;6258:35:34;;;;;;;;;6374:128;;6258:35;;6453;;;;;6374:19;:128::i;:::-;6583:34;6605:11;6583:21;:34::i;:::-;6114:514;;6093:535;6738:20;6775:1;6761:11;:15;:174;;6934:1;6761:174;;;6791:128;6907:11;6791:90;6845:35;6868:11;6845:22;:35::i;:::-;6791:53;:90::i;:::-;:115;;:128::i;:::-;7081:13;:29;7018:12;:48;;;;6945:21;6969:34;;;;;6738:197;;-1:-1:-1;6945:21:34;-1:-1:-1;;;;;7081:29:34;;;;6969:97;;7018:48;6969:97;:::i;:::-;:141;;;;:::i;:::-;6945:165;-1:-1:-1;7120:20:34;7143:18;;:84;;7192:35;:12;7213:13;7192:20;:35::i;:::-;7143:84;;;7176:1;7143:84;7242:171;;;13729:25:149;;;13785:2;13770:18;;13763:34;;;13813:18;;;13806:34;;;13871:2;13856:18;;13849:34;;;7120:107:34;;-1:-1:-1;7272:15:34;;7242:171;;13716:3:149;13701:19;7242:171:34;;;;;;;-1:-1:-1;7431:11:34;;2936:4513;-1:-1:-1;;;;;;;;;;;2936:4513:34:o;14813:3623:36:-;14966:26;15006:25;15045:20;15079:26;15301:241;15347:25;:23;:25::i;:::-;15386:12;:25;-1:-1:-1;;;15386:25:36;;-1:-1:-1;;;;;15386:25:36;15425:12;15463;15489:11;15514:18;15301:32;:241::i;:::-;15281:261;;15675:17;15695:179;15742:25;:23;:25::i;:::-;15781:12;:25;-1:-1:-1;;;15781:25:36;;-1:-1:-1;;;;;15781:25:36;15820:18;15852:12;15695:33;:179::i;:::-;15675:199;;15901:240;15938:12;15968:17;16003:124;16069:9;16100;16003:44;:124::i;:::-;15901:19;:240::i;:::-;15884:330;;;16173:30;;-1:-1:-1;;;16173:30:36;;;;;;;;;;;15884:330;16390:16;16429:26;16477:63;16503:12;16517:9;16528:11;16477:25;:63::i;:::-;16376:164;;-1:-1:-1;16376:164:36;-1:-1:-1;16703:28:36;16376:164;16703:17;:28;:::i;:::-;16688:43;-1:-1:-1;17405:33:36;17420:18;16688:43;17405:33;:::i;:::-;17385:53;-1:-1:-1;17901:87:36;:18;17944:9;17967:11;17901:29;:87::i;:::-;17880:108;-1:-1:-1;18247:33:36;17880:108;18247:12;:33;:::i;:::-;18226:54;;18291:138;;;14813:3623;;;;;;;:::o;9440:2098::-;9714:29;;-1:-1:-1;;;;;9714:29:36;9855:309;:284;9714:29;10019:20;:13;10035:4;10019:20;:::i;:::-;9876:36;;-1:-1:-1;;;;;9876:36:36;;9855:284;10090:13;10121:4;9855:102;:284::i;:::-;:307;:309::i;:::-;9816:36;:348;;-1:-1:-1;;;;;;9816:348:36;-1:-1:-1;;;;;9816:348:36;;;;;;;;;;10312:31;:19;:29;:31::i;:::-;10282:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;10282:61:36;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10282:61:36;;;;;-1:-1:-1;;;;;10282:61:36;;;;;;10382:30;:18;:28;:30::i;:::-;10353:12;:59;;:25;;:59;;;;-1:-1:-1;;;10353:59:36;;-1:-1:-1;;;;;10353:59:36;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10353:59:36;;;;;-1:-1:-1;;;;;10353:59:36;;;;;;10443:25;:13;:23;:25::i;:::-;10422:46;;;;:::i;:::-;10478:29;:49;;-1:-1:-1;;;;;;10478:49:36;-1:-1:-1;;;;;10478:49:36;;;;;-1:-1:-1;10841:51:36;;;:12;:51;;;;;10943:19;;10478:49;;-1:-1:-1;10841:51:36;-1:-1:-1;;;10943:19:36;;;;;10997:98;11042:40;:19;11070:11;11042:27;:40::i;:::-;10998:29;11014:13;10998:1;:29;:::i;:::-;:84;;;;:::i;10997:98::-;11105:44;;10973:122;;-1:-1:-1;10973:122:36;;11105:10;;:19;;:44;;10973:122;;-1:-1:-1;;;11105:44:36;;;;;:::i;:::-;;;-1:-1:-1;;;;;11105:44:36;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;11205:19:36;;11159:66;;11105:44;11159:66;;;;-1:-1:-1;;;11205:19:36;;;;11159;:66::i;:::-;11324:23;11335:11;11324:10;:23::i;:::-;11319:106;;11370:44;;-1:-1:-1;;;11370:44:36;;;;;;;;;;;11319:106;11497:34;11519:11;11497:21;:34::i;:::-;9676:1862;;;;9440:2098;;;;;;:::o;1198:469:41:-;1309:10;-1:-1:-1;;;;;1401:10:41;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:41;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:41;1620:18;;;;1617:34;;1198:469::o;5789:316:37:-;5906:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;5906:23:37;;;;;;;;;:33;;5933:6;;5906:19;:33;;5933:6;;5906:33;:::i;:::-;;;;-1:-1:-1;;5949:21:37;;;;:12;:21;;;;;:31;;5974:6;;5949:21;:31;;5974:6;;5949:31;:::i;:::-;;;;-1:-1:-1;;6039:59:37;;;3434:25:149;;;3490:2;3475:18;;3468:34;;;-1:-1:-1;;;;;6039:59:37;;;6074:1;;6054:10;;6039:59;;3407:18:149;6039:59:37;;;;;;;5789:316;;;:::o;20504:315:33:-;20668:7;20691:15;;;;;;;;:::i;:::-;20687:126;;;-1:-1:-1;20729:7:33;20722:14;;20687:126;20774:28;:7;20790:11;20774:15;:28::i;:::-;20767:35;;20687:126;20504:315;;;;;:::o;2950:1499:88:-;3062:12;3232:4;3226:11;-1:-1:-1;;;3355:17:88;3348:93;3488:2;3484:1;3465:17;3461:25;3454:37;3568:6;3563:2;3544:17;3540:26;3533:42;4370:2;4367:1;4363:2;4344:17;4341:1;4334:5;4327;4322:51;3891:16;3884:24;3878:2;3860:16;3857:24;3853:1;3849;3843:8;3840:15;3836:46;3833:76;3633:754;3622:765;;;4415:7;4407:35;;;;-1:-1:-1;;;4407:35:88;;16169:2:149;4407:35:88;;;16151:21:149;16208:2;16188:18;;;16181:30;-1:-1:-1;;;16227:18:149;;;16220:45;16282:18;;4407:35:88;15967:339:149;16208:3731:39;16394:19;16427:26;16467;16755:229;16802:25;:23;:25::i;:::-;16841:12;:25;-1:-1:-1;;;16841:25:39;;-1:-1:-1;;;;;16841:25:39;16880:11;16905:12;16931:11;16956:18;16755:33;:229::i;:::-;16734:250;-1:-1:-1;17245:11:39;17203:39;16734:250;17230:11;17203:26;:39::i;:::-;:53;17199:121;;;17279:30;;-1:-1:-1;;;17279:30:39;;;;;;;;;;;17199:121;17487:16;17513:26;17549:17;17569:179;17616:25;:23;:25::i;17569:179::-;17549:199;;17982:174;18020:11;150:4:42;18112:9:39;18135:11;17982:24;:174::i;:::-;-1:-1:-1;17758:398:39;;-1:-1:-1;17758:398:39;-1:-1:-1;18829:29:39;;-1:-1:-1;17758:398:39;;-1:-1:-1;17758:398:39;18829:29;:::i;:::-;18807:51;;;;:::i;:::-;;-1:-1:-1;19349:512:39;19849:11;19349:478;19417:11;19636:39;19657:18;18807:51;19636:39;:::i;:::-;19693:15;19726:32;:11;19693:15;19726;:32::i;:::-;19776:11;19805:8;19349:50;:478::i;:512::-;19335:526;-1:-1:-1;19913:18:39;;-1:-1:-1;;;16208:3731:39;;;;;;;:::o;21103:315:33:-;21267:7;21290:15;;;;;;;;:::i;:::-;21286:126;;;-1:-1:-1;21328:7:33;21321:14;;21286:126;21373:28;:7;21389:11;21373:15;:28::i;10216:3800:39:-;10646:30;;10525:312;;:287;;-1:-1:-1;;;10646:30:39;;-1:-1:-1;;;;;10646:30:39;10694:20;:13;10710:4;10694:20;:::i;:::-;10546:37;;-1:-1:-1;;;10546:37:39;;-1:-1:-1;;;;;10546:37:39;;;10765:11;10794:4;10525:103;:287::i;:312::-;10485:37;:352;;-1:-1:-1;;;;;10485:352:39;;;-1:-1:-1;;;10485:352:39;;;;;;;;;-1:-1:-1;11197:31:39;:19;:29;:31::i;:::-;11156:12;:26;:72;;;-1:-1:-1;;;;;11156:26:39;:72;:::i;:::-;11238:12;:43;;-1:-1:-1;;;;;;11238:43:39;-1:-1:-1;;;;;11238:43:39;;;;;;-1:-1:-1;11320:23:39;:11;:21;:23::i;:::-;11291:12;:52;;:25;;:52;;;;-1:-1:-1;;;11291:52:39;;-1:-1:-1;;;;;11291:52:39;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;11291:52:39;;;;;-1:-1:-1;;;;;11291:52:39;;;;;;11387:23;:11;:21;:23::i;:::-;11353:30;:57;;:30;;:57;;;;-1:-1:-1;;;11353:57:39;;-1:-1:-1;;;;;11353:57:39;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;11353:57:39;;;;;;;;;;;;;;;12012:28;;-1:-1:-1;11969:26:39;12012:28;;;;;11969:26;;11954:86;11937:180;;-1:-1:-1;11937:180:39;;12072:34;;-1:-1:-1;;;12072:34:39;;;;;;;;;;;11937:180;12204:25;12232:19;:17;:19::i;:::-;12261:31;12315;;;:12;:31;;;;;:40;12204:47;;-1:-1:-1;;;;12315:40:39;;;;13050:34;13065:19;13050:12;:34;:::i;:::-;13034:51;;:12;:51;:::i;:::-;13019:66;-1:-1:-1;13095:21:39;13119:26;13134:11;13019:66;13119:26;:::i;:::-;13095:50;;13219:25;:13;:23;:25::i;:::-;13155:31;;;;:12;:31;;;;;:99;;:40;;:99;;;;-1:-1:-1;;;13155:99:39;;;;;:::i;:::-;;;-1:-1:-1;;;;;13155:99:39;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;13335:31:39;;;:12;:31;;;;;:40;13264:121;;13155:99;13264:121;;;;-1:-1:-1;;;13335:40:39;;;;13264:19;:121::i;:::-;13802:23;13813:11;13802:10;:23::i;:::-;13797:106;;13848:44;;-1:-1:-1;;;13848:44:39;;;;;;;;;;;13797:106;13975:34;13997:11;13975:21;:34::i;:::-;10412:3604;;;;10216:3800;;;;;:::o;941:556:42:-;1057:9;1322:1;-1:-1:-1;;1305:19:42;1302:1;1299:26;1296:1;1292:34;1285:42;1272:11;1268:60;1241:146;;1371:1;1368;1361:12;1241:146;-1:-1:-1;1458:9:42;;1454:27;;941:556::o;640:190:44:-;693:9;-1:-1:-1;;;720:1:44;:12;714:86;;756:33;;-1:-1:-1;;;756:33:44;;;;;;;;;;;714:86;-1:-1:-1;821:1:44;640:190::o;8075:2095:34:-;8252:21;;8535:32;:11;8555;8535:19;:32::i;:::-;8519:48;-1:-1:-1;8577:15:34;8595:31;8519:48;8617:8;8595:21;:31::i;:::-;8577:49;-1:-1:-1;8652:31:34;8577:49;8668:14;8652:15;:31::i;:::-;8636:47;;9110:7;9106:557;;;9150:23;9160:13;9150:7;:23;:::i;:::-;9133:40;;;;:::i;:::-;;;9106:557;;;9629:23;9639:13;9629:7;:23;:::i;:::-;9612:40;;;;:::i;:::-;;;9106:557;9876:15;9862:11;:29;9858:306;;;9923:100;:13;9965:11;9994:15;9923:24;:100::i;:::-;9907:116;-1:-1:-1;10053:100:34;:13;10095:11;10124:15;10053:24;:100::i;:::-;10037:116;;9858:306;8298:1872;8075:2095;;;;;;;:::o;14505:1128:39:-;14807:30;;-1:-1:-1;;;14807:30:39;;-1:-1:-1;;;;;14807:30:39;14887:301;:276;14807:30;15044:20;:13;15060:4;15044:20;:::i;:::-;14908:37;;-1:-1:-1;;;14908:37:39;;-1:-1:-1;;;;;14908:37:39;;;15115:11;15144:5;14887:103;:276::i;:301::-;14847:37;:341;;-1:-1:-1;;;;;14847:341:39;;;-1:-1:-1;;;14847:341:39;;;;;;;;;15331:23;:11;:21;:23::i;:::-;15298:56;;:18;:56;:::i;:::-;15253:30;:101;;-1:-1:-1;;;;;15253:101:39;;;-1:-1:-1;;;15253:101:39;;;;;;;;;15452:31;:19;:29;:31::i;:::-;15422:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;15422:61:39;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15422:61:39;;;;;-1:-1:-1;;;;;15422:61:39;;;;;;15525:32;:21;:30;:32::i;:::-;15493:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15493:64:39;;;;;;;-1:-1:-1;;;;;15493:64:39;;;;;;15596:30;:18;:28;:30::i;:::-;15567:12;:59;;:25;;:59;;;;-1:-1:-1;;;15567:59:39;;-1:-1:-1;;;;;15567:59:39;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15567:59:39;;;;;-1:-1:-1;;;;;15567:59:39;;;;;;14717:916;14505:1128;;;;;:::o;12007:2273:36:-;12270:29;;-1:-1:-1;;;;;12270:29:36;12407:335;:306;12270:29;12582:20;:13;12598:4;12582:20;:::i;:::-;12432:36;;-1:-1:-1;;;;;12432:36:36;;12407:306;12657:11;12690:5;12407:114;:306::i;:335::-;12368:36;:374;;-1:-1:-1;;;;;;12368:374:36;-1:-1:-1;;;;;12368:374:36;;;;;;;;;;12896:23;:11;:21;:23::i;:::-;12860:59;;:17;:59;:::i;:::-;12812:29;:107;;-1:-1:-1;;;;;;12812:107:36;-1:-1:-1;;;;;12812:107:36;;;;;;;;;;-1:-1:-1;13481:31:36;:19;:29;:31::i;:::-;13451:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;13451:61:36;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13451:61:36;;;;;-1:-1:-1;;;;;13451:61:36;;;;;;13554:32;:21;:30;:32::i;:::-;13522:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13522:64:36;;;;;;;-1:-1:-1;;;;;13522:64:36;;;;;;13625:30;:18;:28;:30::i;:::-;13596:12;:59;;:25;;:59;;;;-1:-1:-1;;;13596:59:36;;-1:-1:-1;;;;;13596:59:36;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13596:59:36;;;;;;;;;;;;;;;-1:-1:-1;14044:26:36;14074:21;14044:26;;14036:59;;-1:-1:-1;14036:59:36;:161;;-1:-1:-1;14169:28:36;;:12;14126:26;14169:28;;;;;-1:-1:-1;;;;;14126:26:36;;;14111:86;14036:161;14019:255;;;14229:34;;-1:-1:-1;;;14229:34:36;;;;;;;;;;;13190:890:33;13343:6;13333:7;:16;:32;;;;;13364:1;13353:7;:12;;13333:32;13329:745;;;13381:12;13413:13;:6;13381:12;13413:10;:13::i;:::-;13403:23;;:7;:23;:::i;:::-;13625:25;;13381:46;;-1:-1:-1;13608:55:33;;:44;;13381:46;;-1:-1:-1;;;13625:25:33;;-1:-1:-1;;;;;13625:25:33;13608:44;;:9;:44::i;:::-;:53;:55::i;:::-;13554:25;:123;;:25;;:123;;;;-1:-1:-1;;;13554:123:33;;-1:-1:-1;;;;;13554:123:33;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13554:123:33;;;;;-1:-1:-1;;;;;13554:123:33;;;;;;13367:321;4004:18:6;3962:67;:::o;13329:745:33:-;13775:7;13766:6;:16;13762:312;;;13813:1;13802:7;:12;13798:266;;13912:18;:7;:16;:18::i;:::-;13892:17;:6;:15;:17::i;:::-;:38;;;;:::i;:::-;13834:25;:114;;:25;;:114;;;;-1:-1:-1;;;13834:114:33;;-1:-1:-1;;;;;13834:114:33;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13834:114:33;;;;;-1:-1:-1;;;;;13834:114:33;;;;;;4004:18:6;3962:67;:::o;13798:266:33:-;14024:24;:13;:6;14035:1;14024:10;:13::i;22908:1546:35:-;23117:12;:34;;;;23272:13;:29;-1:-1:-1;;;23092:22:35;23199:70;;;;;23092:22;;23199:102;;-1:-1:-1;;;;;23272:29:35;;;;23199:102;:::i;:::-;23161:140;-1:-1:-1;23311:21:35;23335:44;23161:140;23335:14;:44;:::i;:::-;23311:68;;23389:20;23412:95;23462:35;23485:11;23462:22;:35::i;23412:95::-;23389:118;-1:-1:-1;23517:21:35;23541:88;:14;23389:118;23606:13;23541:25;:88::i;:::-;23517:112;;23987:26;24027:12;24042:40;24070:11;24042:27;:40::i;:::-;24027:55;;24103:13;24096:4;:20;24092:92;;;24153:20;24160:13;24153:4;:20;:::i;:::-;24132:41;;24092:92;24218:1;24197:18;:22;:43;;;-1:-1:-1;24223:17:35;;24197:43;24193:255;;;24256:181;24299:18;24335:12;24365:13;24396:27;24256:25;:181::i;:::-;22969:1485;;;;;;;22908:1546;:::o;7894:1001:33:-;8008:53;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8008:53:33;8092:796;;;;;;;;8155:12;:26;-1:-1:-1;;;;;8155:26:33;;;8092:796;;8212:28;;;;8092:796;;;;-1:-1:-1;;;8268:25:33;;;;;8092:796;;;;;;;;;;;;;8363:18;8092:796;;;;8417:21;8092:796;;;;8465:12;8092:796;;;;8509:29;;;;8092:796;;;;8625:36;;8092:796;;8155:26;8092:796;;;8578:97;;8625:36;8578:29;:97::i;:::-;8092:796;;8708:30;;-1:-1:-1;;;;;;;;8708:30:33;;;;;;8092:796;;;;8826:37;;8092:796;;;;;8779:98;;8826:37;;;8779:29;:98::i;:::-;8092:796;;8077:811;7894:1001;-1:-1:-1;;7894:1001:33:o;20164:5466:43:-;20267:7;20417:20;20575:106;20630:7;:33;;;20575:7;:25;;;:33;;:106;;;;:::i;:::-;20493:32;;;;20460:24;;;;:66;;:32;:66::i;:::-;20440:255;;;;:::i;:::-;20417:278;;20705:30;20738:113;20783:7;:21;;;20818:7;:23;;;20738:31;:113::i;:::-;20705:146;;20881:1;20865:13;:17;20861:3671;;;21550:21;21574:291;21623:22;21663:7;:20;;;21701:7;:28;;;21753:7;:19;;;150:4:42;21747:25:43;;;;:::i;:::-;21790:7;:18;;;21826:7;:25;;;21574:31;:291::i;:::-;21550:315;-1:-1:-1;21895:41:43;21550:315;21921:13;21895:17;:41::i;:::-;21879:57;-1:-1:-1;22005:17:43;;22001:565;;22180:371;22276:22;22324:7;:20;;;22370:13;22415:7;:19;;;150:4:42;22409:25:43;;;;:::i;:::-;22460:7;:18;;;22504:7;:25;;;22180:70;:371::i;:::-;22155:396;;:7;;:396;;;;;:::i;:::-;;;-1:-1:-1;22001:565:43;20884:1692;20861:3671;;;22602:1;22586:13;:17;22582:1950;;;23407:14;23408:13;23407:14;:::i;:::-;23391:30;;23482:21;23506:244;23554:22;23594:7;:20;;;23638:7;:19;;;150:4:42;23632:25:43;;;;:::i;:::-;23675:7;:18;;;23711:7;:25;;;23506:30;:244::i;:::-;23482:268;-1:-1:-1;23780:41:43;23482:268;23806:13;23780:17;:41::i;:::-;23764:57;-1:-1:-1;23886:17:43;;23882:563;;24061:369;24155:22;24203:7;:20;;;24249:13;24294:7;:19;;;150:4:42;24288:25:43;;;;:::i;:::-;24339:7;:18;;;24383:7;:25;;;24061:68;:369::i;:::-;24036:394;;:7;;:394;;;;;:::i;:::-;;;-1:-1:-1;23882:563:43;24483:38;24508:13;24491;24483:38;:::i;:::-;24458:63;;:7;;:63;;;;;:::i;:::-;;;-1:-1:-1;;22582:1950:43;24665:19;24899:153;24962:7;:32;;;150:4:42;24956:38:43;;;;:::i;:::-;25016:18;;;;24899:24;;;;;:153;:35;:153::i;:::-;24707:143;24767:7;:33;;;150:4:42;24761:39:43;;;;:::i;:::-;24818:18;;;;24707:25;;;;;:143;:36;:143::i;:::-;24687:379;;;;:::i;:::-;24665:401;;25076:27;25150:12;25113:7;:21;;;25106:56;;;;:::i;:::-;25076:86;;25206:7;:28;;;25176:20;:59;25172:131;;;25258:34;;-1:-1:-1;;;25258:34:43;;;;;;;;;;;25172:131;25312:53;;;25595:28;;;;25571:52;;25344:20;25571:52;:::i;:::-;25564:59;20164:5466;-1:-1:-1;;;;;;20164:5466:43:o;2164:165:42:-;2226:7;2253:22;2264:1;2267:4;2273:1;2253:10;:22::i;7453:253:33:-;7613:12;:26;7657:28;;7511:7;;7549:150;;-1:-1:-1;;;;;7613:26:33;;;;7657:28;;7549:46;:150::i;6975:872:43:-;7228:7;7365:475;7432:23;7473:13;7504:12;7743:18;7749:12;150:4:42;7743:18:43;:::i;:::-;7779:11;7808:18;7365:49;:475::i;:::-;7346:494;6975:872;-1:-1:-1;;;;;;;6975:872:43:o;1246:449::-;1441:17;1575:113;1675:12;1575:82;:18;1618:23;1643:13;1575:42;:82::i;:::-;:99;;:113::i;:::-;1563:125;1246:449;-1:-1:-1;;;;;1246:449:43:o;5221:277::-;5352:7;5390:101;5425:52;150:4:42;5441:29:43;150:4:42;5451:18:43;5441:9;:29::i;:::-;:35;;;;:::i;:::-;5425:9;;:15;:52::i;:::-;5419:58;;150:4:42;5419:58:43;:::i;:::-;150:4:42;;5390:11:43;:101::i;9370:678:33:-;9526:4;9751:23;9777:216;9852:16;9824:25;:23;:25::i;:::-;:44;;;;:::i;:::-;9882:12;:25;:43;;9910:15;;-1:-1:-1;;;9882:25:33;;-1:-1:-1;;;;;9882:25:33;:43;:::i;:::-;9939:18;9971:12;9777:33;:216::i;:::-;-1:-1:-1;;;;9370:678:33;-1:-1:-1;;;;9370:678:33:o;15262:1564::-;15432:21;;16455:127;16574:7;16455:97;16540:11;16455:97;16508:9;150:4:42;16456:23:33;150:4:42;16468:10:33;16456:11;:23::i;:::-;:29;;;;:::i;16455:127::-;16439:143;-1:-1:-1;16782:37:33;16439:143;16804:14;16782:21;:37::i;:::-;16761:58;;15262:1564;;;;;;:::o;13533:678:42:-;13727:15;13758:9;13754:451;;;13793:152;13900:27;13915:12;13900;:27;:::i;:::-;13843:28;:12;13864:6;13843:20;:28::i;:::-;13794:30;:12;13815:8;13794:20;:30::i;:::-;:77;;;;:::i;:::-;13793:85;;:152::i;:::-;13783:162;;13754:451;;;13996:12;13980;:28;13976:42;;-1:-1:-1;14017:1:42;14010:8;;13976:42;14042:152;14149:27;14164:12;14149;:27;:::i;:::-;14092:28;:12;14113:6;14092:20;:28::i;:::-;14043:30;:12;14064:8;14043:20;:30::i;:::-;:77;;;;:::i;10369:290:33:-;10433:4;10609:42;:21;10639:11;10609:29;:42::i;:::-;10560:25;;:12;10484:26;-1:-1:-1;;;;;;;;10560:25:33;;;;;10468:118;;;10476:56;;10484:26;10520:11;10476:43;:56::i;:::-;10468:118;;;;:::i;:::-;:184;;;10369:290;-1:-1:-1;;10369:290:33:o;11325:846:43:-;11576:7;11692:472;11759:23;11800:13;11831:9;12067:18;12073:12;150:4:42;12067:18:43;:::i;:::-;12103:11;12132:18;11692:49;:472::i;17620:2583:33:-;17844:21;;;;;18810:141;18913:24;18939:11;18810:78;18880:7;18810:48;18841:16;18847:10;150:4:42;18841:16:33;:::i;:::-;18810:9;;:30;:48::i;:78::-;:102;:141;:102;:141::i;:::-;18794:157;-1:-1:-1;19163:37:33;18794:157;19185:14;19163:21;:37::i;:::-;19142:58;-1:-1:-1;19641:12:33;19656:97;19688:30;19694:24;150:4:42;19688:30:33;:::i;:::-;19656:7;;19732:11;19656:18;:97::i;:::-;19641:112;-1:-1:-1;19778:22:33;19641:112;19791:8;19778:12;:22::i;:::-;19763:37;-1:-1:-1;20007:36:33;19763:37;20028:14;20007:20;:36::i;:::-;19987:56;-1:-1:-1;20158:38:33;19987:56;20158:18;:38;:::i;:::-;20137:59;;18106:2097;17620:2583;;;;;;;;;:::o;14661:104:42:-;14719:7;14749:1;14745;:5;:13;;14757:1;14745:13;;26993:1230:43;27235:21;;27577:186;27613:16;27719:34;:15;27741:11;27719:21;:34::i;:::-;27577:11;;:186;:22;:186::i;:::-;27556:207;-1:-1:-1;27984:45:43;:11;28007:8;28017:11;27984:22;:45::i;:::-;27970:59;;;;:::i;:::-;;;28057:12;28044:10;:25;28040:147;;;28151:25;28164:12;28151:10;:25;:::i;:::-;28135:41;;28040:147;28196:20;26993:1230;;;;;;;;:::o;994:219:44:-;1045:8;-1:-1:-1;;;;;;1071:21:44;;;;;:46;;-1:-1:-1;;;;;;1096:21:44;;;1071:46;1065:119;;1141:32;;-1:-1:-1;;;1141:32:44;;;;;;;;;;;15212:101:42;15268:6;15297:1;15293;:5;:13;;15305:1;15293:13;;14938:101;14994:6;15023:1;15019;:5;:13;;15031:1;15019:13;;14245:490:33;14401:25;;14340:18;;;;14393:77;;-1:-1:-1;;;14401:25:33;;-1:-1:-1;;;;;14401:25:33;14449:11;14393:42;:77::i;:::-;14370:100;-1:-1:-1;14513:36:33;14528:21;14370:100;14513:36;:::i;:::-;14484:12;:26;-1:-1:-1;;;;;14484:26:33;:65;14480:222;;;14594:12;:26;14670:21;;14594:57;;14639:12;;-1:-1:-1;;;;;14594:26:33;:57;:::i;:::-;:97;;;;:::i;25953:1730:35:-;26646:25;26690:1;26674:13;:17;:122;;26782:14;26674:122;;;26706:61;:14;26732:19;26753:13;26706:25;:61::i;:::-;26646:150;;26810:17;26831:1;26810:22;26806:35;;26834:7;;;26806:35;27049:17;27109:19;27142:48;;;27138:274;;;27223:28;;-1:-1:-1;27290:111:35;:19;27223:28;27370:17;27290:30;:111::i;:::-;27265:136;;27138:274;27454:26;:14;:24;:26::i;:::-;27421:13;:59;;:29;;:59;;;;-1:-1:-1;;;;;27421:59:35;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;27421:59:35;;;;;-1:-1:-1;;;;;27421:59:35;;;;;;27516:34;:22;:32;:34::i;:::-;27490:13;:60;;:22;;:60;;;;-1:-1:-1;;;27490:60:35;;-1:-1:-1;;;;;27490:60:35;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;27490:60:35;;;;;-1:-1:-1;;;;;27490:60:35;;;;;;27627:49;27652:22;27644:31;;;:::i;:::-;27627:16;:49::i;6550:386:33:-;6649:21;6682:24;150:4:42;6709:19:33;:17;:19::i;:::-;:25;;;;:::i;:::-;6682:52;;6776:16;6760:13;:32;:95;;6854:1;6760:95;;;6807:32;6823:16;6807:13;:32;:::i;:::-;6744:111;-1:-1:-1;6881:48:33;6905:23;150:4:42;6905:17:33;:23;:::i;:::-;6882:13;;6881:23;:48::i;28808:340:43:-;28943:7;;28994:53;29031:16;29001:14;28994:53;:::i;:::-;28962:85;;29091:1;29065:22;:27;;29057:36;;;;;12090:1116:45;12263:7;12703:9;12715:21;12721:1;12724;12727;12730;12733:2;12715:5;:21::i;:::-;12703:33;-1:-1:-1;12746:16:45;12769:37;12780:21;12799:1;12780:14;:2;12789:4;12780:8;:14::i;:21::-;12769:1;;12803:2;12769:10;:37::i;:::-;12765:41;;:1;:41;:::i;:::-;12746:60;;150:4:42;12820:8:45;:15;12816:295;;12934:28;12947:14;150:4:42;12959:1:45;12947:11;:14::i;:::-;12934:8;;:12;:28::i;:::-;12923:39;;12816:295;;;13074:26;13087:12;150:4:42;13097:1:45;13087:9;:12::i;13074:26::-;13063:37;;12816:295;13187:12;13198:1;13187:8;:12;:::i;:::-;13180:19;12090:1116;-1:-1:-1;;;;;;;;;12090:1116:45:o;14384:104:42:-;14442:7;14472:1;14468;:5;:13;;14480:1;14468:13;;7296:489:45;7485:14;7511:12;7553:140;7605:1;7620;7635:2;7651:1;7666;7681:2;7553:38;:140::i;:::-;7533:160;;-1:-1:-1;7533:160:45;-1:-1:-1;7533:160:45;7703:76;;7738:30;;-1:-1:-1;;;7738:30:45;;;;;;;;;;;10390:1124;10540:7;11028:9;11040:19;11044:1;11047;11050;11053;11056:2;11040:3;:19::i;:::-;11028:31;-1:-1:-1;11069:16:45;11088:28;150:4:42;11096:13:45;:1;11106:2;11096:9;:13::i;:::-;:19;;;;:::i;:::-;11088:1;;:7;:28::i;:::-;11069:47;;150:4:42;11130:8:45;:15;11126:293;;11241:26;11254:12;150:4:42;11264:1:45;11254:9;:12::i;11241:26::-;11230:37;;11126:293;;;11380:28;11393:14;150:4:42;11405:1:45;11393:11;:14::i;11380:28::-;11369:39;;11126:293;11495:12;11499:8;11495:1;:12;:::i;:::-;11488:19;10390:1124;-1:-1:-1;;;;;;;;10390:1124:45:o;3826:1099::-;4013:7;4169:9;4181:19;4185:1;4188;4191;4194;4197:2;4181:3;:19::i;:::-;4169:31;-1:-1:-1;4243:15:45;4256:1;4244:6;4248:2;4244:1;:6;:::i;4243:15::-;4239:19;-1:-1:-1;4414:10:45;4427:23;4444:2;4448:1;4428:5;4239:19;4428:1;:5;:::i;:::-;4427:16;:23;:16;:23::i;:::-;4414:36;;150:4:42;4464:2:45;:9;4460:261;;4562:20;4569:12;150:4:42;4579:1:45;4569:9;:12::i;4562:20::-;4557:25;;4460:261;;;4688:22;4695:14;150:4:42;4707:1:45;4695:11;:14::i;4688:22::-;4683:27;;4460:261;4803:12;:2;4812;4803:8;:12::i;:::-;4798:17;-1:-1:-1;4912:6:45;4917:1;4798:17;4912:6;:::i;2079:1169::-;2268:7;2424:9;2436:19;2440:1;2443;2446;2449;2452:2;2436:3;:19::i;:::-;2424:31;-1:-1:-1;2589:25:45;2612:1;2589:18;2600:6;2604:2;2600:1;:6;:::i;:::-;2589:2;;:10;:18::i;:25::-;2585:29;-1:-1:-1;2674:19:45;:1;2585:29;2690:2;2674:12;:19::i;:::-;2670:23;-1:-1:-1;2853:10:45;2866:5;2670:23;2866:1;:5;:::i;:::-;2853:18;;150:4:42;2885:2:45;:9;2881:261;;2983:20;2990:12;150:4:42;3000:1:45;2990:9;:12::i;2983:20::-;2978:25;;2881:261;;;3109:22;3116:14;150:4:42;3128:1:45;3116:11;:14::i;3109:22::-;3104:27;;2881:261;3235:6;3239:2;3235:1;:6;:::i;4628:840:42:-;4686:7;4752:1;4757;4752:6;4748:47;;-1:-1:-1;150:4:42;4774:10;;4748:47;4848:1;4853;4848:6;4844:45;;-1:-1:-1;4877:1:42;4870:8;;4844:45;5052:1;5027:15;5230:14;5241:1;5230:3;:14::i;:::-;5217:27;-1:-1:-1;5322:18:42;;;5359:19;150:4;5322:18;5359:19;:::i;:::-;;;5451:9;5455:4;5451:3;:9::i;4098:115::-;4158:7;4185:20;4194:1;4197:4;4203:1;4185:8;:20::i;3707:115::-;3767:7;3794:20;3803:1;3806;3809:4;3794:8;:20::i;16102:3325:35:-;16285:19;16308:1;16285:24;16281:61;;16102:3325;:::o;16281:61::-;16573:12;:26;-1:-1:-1;;;;;16573:26:35;16629:21;16613:37;;16609:109;;;16673:34;;-1:-1:-1;;;16673:34:35;;;;;;;;;;;16609:109;16887:27;16917:55;16953:19;16924:13;16917:55;:::i;:::-;16887:85;;17016:21;16986:20;:52;16982:124;;;17061:34;;-1:-1:-1;;;17061:34:35;;;;;;;;;;;16982:124;17144:41;17152:20;17144:39;:41::i;:::-;17115:12;:70;;-1:-1:-1;;;;;;17115:70:35;-1:-1:-1;;;;;17115:70:35;;;;;;;;;;17761:28;;-1:-1:-1;;17761:28:35;;17803:20;;;17799:488;;17888:139;17896:20;17958:15;17996:13;17888:40;:139::i;:::-;17839:202;;17799:488;;;18122:140;18192:16;18193:15;18192:16;:::i;:::-;18130:20;;18231:13;18122:40;:140::i;:::-;18097:179;;;:::i;:::-;18072:204;;17799:488;18327:33;:22;:31;:33::i;:::-;18296:28;:64;;-1:-1:-1;;;;;;18296:64:35;-1:-1:-1;;;;;18296:64:35;;;;;;-1:-1:-1;19202:25:35;19000:420;;:395;;-1:-1:-1;;;19202:25:35;;;19245:136;19313:13;19348:15;19245:46;:136::i;:::-;19000:160;19085:20;19124:22;19000:59;:160::i;:420::-;18972:12;:448;;-1:-1:-1;;;;;18972:448:35;;;-1:-1:-1;;;18972:448:35;;;;;;;;;-1:-1:-1;;;;;16102:3325:35:o;14609:278:45:-;14749:7;14872:8;:1;14878;14872:5;:8::i;:::-;14831:38;14844:20;14862:1;14844:13;:2;14855:1;14844:10;:13::i;:20::-;14831:1;;14866:2;14831:12;:38::i;:::-;:49;;;;:::i;2683:748:42:-;2797:9;3062:1;-1:-1:-1;;3045:19:42;3042:1;3039:26;3036:1;3032:34;3025:42;3012:11;3008:60;2981:146;;3111:1;3108;3101:12;2981:146;-1:-1:-1;3378:9:42;;3325:27;;;3322:34;;3374:27;;;3301:114;;2683:748::o;8539:1314:45:-;8732:14;8748:12;8909:9;8921:19;8925:1;8928;8931;8934;8937:2;8921:3;:19::i;:::-;8909:31;-1:-1:-1;8983:15:45;8996:1;8984:6;8988:2;8984:1;:6;:::i;8983:15::-;8979:19;;9080:1;9076;:5;9072:53;;;9105:1;9108:5;9097:17;;;;;;;9072:53;9280:10;9293:23;9310:2;9314:1;9294:5;9298:1;9294;:5;:::i;9293:23::-;9280:36;;150:4:42;9330:2:45;:9;9326:263;;9429:20;9436:12;150:4:42;9446:1:45;9436:9;:12::i;9429:20::-;9424:25;;9326:263;;;9556:22;9563:14;150:4:42;9575:1:45;9563:11;:14::i;9556:22::-;9551:27;;9326:263;9671:12;:2;9680;9671:8;:12::i;:::-;9666:17;;9779:2;9775:1;:6;9771:52;;;9806:6;9810:2;9806:1;:6;:::i;:::-;9797:15;;9771:52;9842:4;9832:14;;8762:1091;;8539:1314;;;;;;;;;;:::o;13771:272::-;13909:7;14028:8;:1;14034;14028:5;:8::i;:::-;13991:34;14002:18;14018:1;14002:11;:2;14011:1;14002:8;:11::i;:18::-;13991:1;;14022:2;13991:10;:34::i;9583:3592:42:-;9628:8;9681:1;9676;:6;9672:60;;9691:41;;-1:-1:-1;;;9691:41:42;;;;;;;;;;;9672:60;-1:-1:-1;10698:2:42;-1:-1:-1;;;;;;;10109:1:42;10105:49;10212:9;;;10192:18;10189:33;10186:1;10182:41;10176:48;10274:9;;;10262:10;10259:25;10256:1;10252:33;10246:40;10332:9;;;10324:6;10321:21;10318:1;10314:29;10308:36;10388:9;;;10382:4;10379:19;10376:1;10372:27;;;10366:34;;;10443:9;;;10438:3;10435:18;10432:1;10428:26;10422:33;10498:9;;;10490:18;;;10487:1;10483:26;;;10477:33;;;10546:9;;;10538:18;;;10532:25;10728:3;:7;;;;;10714:22;;;;10761:17;;;11554:31;11550:35;;11605:5;;11604:13;;11621:32;11603:50;11673:5;;11672:13;;11689:33;11671:51;11742:5;;11741:13;;11758:33;11740:51;11811:5;;11810:13;;11827:33;11809:51;11880:5;;11879:13;;11896:32;11878:50;11948:5;;11947:13;;11964:30;11946:48;10951:31;10947:35;;11002:5;;11001:13;;11018:32;11000:50;11070:5;;11069:13;;11086:32;11068:50;11138:5;;11137:13;;-1:-1:-1;;11136:50:42;11206:5;;11205:13;;-1:-1:-1;;11204:50:42;11274:5;;11273:13;;;-1:-1:-1;;11272:50:42;11340:5;-1:-1:-1;;11340:46:42;12335:10;12725:43;12720:48;-1:-1:-1;;10694:6:42;;;;12848:71;:91;12827:112;13012:72;13007:77;13155:3;13149:9;;9583:3592::o;5724:3347::-;5770:8;-1:-1:-1;;5947:1:42;:26;5943:40;;-1:-1:-1;5982:1:42;;5724:3347;-1:-1:-1;5724:3347:42:o;5943:40::-;6182:21;6177:1;:26;6173:99;;6228:44;;-1:-1:-1;;;6228:44:42;;;;;;;;;;;6173:99;6545:7;6539:2;6534:7;;;6533:19;;-1:-1:-1;6881:8:42;6965:2;6905:29;6894:7;;;6893:41;-1:-1:-1;;;6893:51:42;6892:75;;6993:29;6989:33;;6985:37;;;-1:-1:-1;;7664:35:42;;7719:5;;7299:2;7718:13;;;7735:32;7717:50;7787:5;;7786:13;;-1:-1:-1;;7785:51:42;7856:5;;7855:13;;7872:34;7854:52;7926:5;;7925:13;;-1:-1:-1;;7924:53:42;7997:5;;7996:13;;8013:35;7995:53;7305:32;7238:31;7234:35;;7289:5;;7288:13;;7287:50;;;7362:5;;;-1:-1:-1;;7362:40:42;7422:5;7421:13;;;7438:35;7420:53;7491:5;;;-1:-1:-1;;;7491:50:42;8413:10;8950:49;8917:82;9032:3;:7;;;;8916:124;;;;;;-1:-1:-1;;5724:3347:42:o;14:271:149:-;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:149:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:149;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:1041;867:6;898:2;941;929:9;920:7;916:23;912:32;909:52;;;957:1;954;947:12;909:52;990:9;984:16;1019:18;1060:2;1052:6;1049:14;1046:34;;;1076:1;1073;1066:12;1046:34;1114:6;1103:9;1099:22;1089:32;;1159:7;1152:4;1148:2;1144:13;1140:27;1130:55;;1181:1;1178;1171:12;1130:55;1210:2;1204:9;1232:2;1228;1225:10;1222:36;;;1238:18;;:::i;:::-;1313:2;1307:9;1281:2;1367:13;;-1:-1:-1;;1363:22:149;;;1387:2;1359:31;1355:40;1343:53;;;1411:18;;;1431:22;;;1408:46;1405:72;;;1457:18;;:::i;:::-;1497:10;1493:2;1486:22;1532:2;1524:6;1517:18;1572:7;1567:2;1562;1558;1554:11;1550:20;1547:33;1544:53;;;1593:1;1590;1583:12;1544:53;1615:1;1606:10;;1625:129;1639:2;1636:1;1633:9;1625:129;;;1727:10;;;1723:19;;1717:26;1696:14;;;1692:23;;1685:59;1650:10;;;;1625:129;;;1796:1;1791:2;1786;1778:6;1774:15;1770:24;1763:35;1817:6;1807:16;;;;;;;;788:1041;;;;:::o;1834:139::-;-1:-1:-1;;;;;1917:31:149;;1907:42;;1897:70;;1963:1;1960;1953:12;1897:70;1834:139;:::o;1978:270::-;2052:6;2105:2;2093:9;2084:7;2080:23;2076:32;2073:52;;;2121:1;2118;2111:12;2073:52;2160:9;2147:23;2179:39;2212:5;2179:39;:::i;2253:160::-;2318:20;;2374:13;;2367:21;2357:32;;2347:60;;2403:1;2400;2393:12;2347:60;2253:160;;;:::o;2418:180::-;2474:6;2527:2;2515:9;2506:7;2502:23;2498:32;2495:52;;;2543:1;2540;2533:12;2495:52;2566:26;2582:9;2566:26;:::i;2603:155::-;2663:5;2708:2;2699:6;2694:3;2690:16;2686:25;2683:45;;;2724:1;2721;2714:12;2763:492;2867:6;2875;2883;2936:2;2924:9;2915:7;2911:23;2907:32;2904:52;;;2952:1;2949;2942:12;2904:52;2988:9;2975:23;2965:33;;3045:2;3034:9;3030:18;3017:32;3007:42;;3100:2;3089:9;3085:18;3072:32;3127:18;3119:6;3116:30;3113:50;;;3159:1;3156;3149:12;3113:50;3182:67;3241:7;3232:6;3221:9;3217:22;3182:67;:::i;:::-;3172:77;;;2763:492;;;;;:::o;3513:367::-;3576:8;3586:6;3640:3;3633:4;3625:6;3621:17;3617:27;3607:55;;3658:1;3655;3648:12;3607:55;-1:-1:-1;3681:20:149;;3724:18;3713:30;;3710:50;;;3756:1;3753;3746:12;3710:50;3793:4;3785:6;3781:17;3769:29;;3853:3;3846:4;3836:6;3833:1;3829:14;3821:6;3817:27;3813:38;3810:47;3807:67;;;3870:1;3867;3860:12;3885:1066;4025:6;4033;4041;4049;4057;4065;4118:3;4106:9;4097:7;4093:23;4089:33;4086:53;;;4135:1;4132;4125:12;4086:53;4174:9;4161:23;4193:39;4226:5;4193:39;:::i;:::-;4251:5;-1:-1:-1;4308:2:149;4293:18;;4280:32;4321:41;4280:32;4321:41;:::i;:::-;4381:7;-1:-1:-1;4439:2:149;4424:18;;4411:32;4462:18;4492:14;;;4489:34;;;4519:1;4516;4509:12;4489:34;4558:70;4620:7;4611:6;4600:9;4596:22;4558:70;:::i;:::-;4647:8;;-1:-1:-1;4532:96:149;-1:-1:-1;4735:2:149;4720:18;;4707:32;;-1:-1:-1;4751:16:149;;;4748:36;;;4780:1;4777;4770:12;4748:36;;4819:72;4883:7;4872:8;4861:9;4857:24;4819:72;:::i;:::-;3885:1066;;;;-1:-1:-1;3885:1066:149;;-1:-1:-1;3885:1066:149;;4910:8;;3885:1066;-1:-1:-1;;;3885:1066:149:o;4956:541::-;5042:6;5050;5058;5066;5119:3;5107:9;5098:7;5094:23;5090:33;5087:53;;;5136:1;5133;5126:12;5087:53;5172:9;5159:23;5149:33;;5232:2;5221:9;5217:18;5204:32;5245:39;5278:5;5245:39;:::i;:::-;5303:5;-1:-1:-1;5360:2:149;5345:18;;5332:32;5373:41;5332:32;5373:41;:::i;:::-;4956:541;;;;-1:-1:-1;5433:7:149;;5487:2;5472:18;5459:32;;-1:-1:-1;;4956:541:149:o;5710:561::-;5823:6;5831;5839;5847;5900:3;5888:9;5879:7;5875:23;5871:33;5868:53;;;5917:1;5914;5907:12;5868:53;5953:9;5940:23;5930:33;;6010:2;5999:9;5995:18;5982:32;5972:42;;6061:2;6050:9;6046:18;6033:32;6023:42;;6116:2;6105:9;6101:18;6088:32;6143:18;6135:6;6132:30;6129:50;;;6175:1;6172;6165:12;6129:50;6198:67;6257:7;6248:6;6237:9;6233:22;6198:67;:::i;:::-;6188:77;;;5710:561;;;;;;;:::o;6640:356::-;6726:6;6779:2;6767:9;6758:7;6754:23;6750:32;6747:52;;;6795:1;6792;6785:12;6747:52;6835:9;6822:23;6868:18;6860:6;6857:30;6854:50;;;6900:1;6897;6890:12;6854:50;6923:67;6982:7;6973:6;6962:9;6958:22;6923:67;:::i;:::-;6913:77;6640:356;-1:-1:-1;;;;6640:356:149:o;7001:541::-;7087:6;7095;7103;7111;7164:3;7152:9;7143:7;7139:23;7135:33;7132:53;;;7181:1;7178;7171:12;7132:53;7217:9;7204:23;7194:33;;7277:2;7266:9;7262:18;7249:32;7290:39;7323:5;7290:39;:::i;:::-;7348:5;-1:-1:-1;7400:2:149;7385:18;;7372:32;;-1:-1:-1;7456:2:149;7441:18;;7428:32;7469:41;7428:32;7469:41;:::i;:::-;7001:541;;;;-1:-1:-1;7001:541:149;;-1:-1:-1;;7001:541:149:o;7547:323::-;7612:6;7620;7673:2;7661:9;7652:7;7648:23;7644:32;7641:52;;;7689:1;7686;7679:12;7641:52;7728:9;7715:23;7747:39;7780:5;7747:39;:::i;:::-;7805:5;-1:-1:-1;7829:35:149;7860:2;7845:18;;7829:35;:::i;7875:424::-;7970:6;7978;8031:2;8019:9;8010:7;8006:23;8002:32;7999:52;;;8047:1;8044;8037:12;7999:52;8083:9;8070:23;8060:33;;8144:2;8133:9;8129:18;8116:32;8171:18;8163:6;8160:30;8157:50;;;8203:1;8200;8193:12;8157:50;8226:67;8285:7;8276:6;8265:9;8261:22;8226:67;:::i;:::-;8216:77;;;7875:424;;;;;:::o;8304:845::-;8412:6;8420;8428;8436;8444;8452;8460;8513:3;8501:9;8492:7;8488:23;8484:33;8481:53;;;8530:1;8527;8520:12;8481:53;8569:9;8556:23;8588:39;8621:5;8588:39;:::i;:::-;8646:5;-1:-1:-1;8703:2:149;8688:18;;8675:32;8716:41;8675:32;8716:41;:::i;:::-;8776:7;-1:-1:-1;8802:35:149;8833:2;8818:18;;8802:35;:::i;:::-;8792:45;;8884:2;8873:9;8869:18;8856:32;8846:42;;8940:3;8929:9;8925:19;8912:33;8989:4;8980:7;8976:18;8967:7;8964:31;8954:59;;9009:1;9006;8999:12;8954:59;8304:845;;;;-1:-1:-1;8304:845:149;;;;9032:7;9086:3;9071:19;;9058:33;;-1:-1:-1;9138:3:149;9123:19;;;9110:33;;8304:845;-1:-1:-1;;8304:845:149:o;9154:391::-;9231:6;9239;9247;9300:2;9288:9;9279:7;9275:23;9271:32;9268:52;;;9316:1;9313;9306:12;9268:52;9352:9;9339:23;9329:33;;9412:2;9401:9;9397:18;9384:32;9425:39;9458:5;9425:39;:::i;:::-;9154:391;;9483:5;;-1:-1:-1;;;9535:2:149;9520:18;;;;9507:32;;9154:391::o;9810:691::-;9905:6;9913;9921;9929;9937;9990:3;9978:9;9969:7;9965:23;9961:33;9958:53;;;10007:1;10004;9997:12;9958:53;10043:9;10030:23;10020:33;;10103:2;10092:9;10088:18;10075:32;10116:39;10149:5;10116:39;:::i;:::-;10174:5;-1:-1:-1;10231:2:149;10216:18;;10203:32;10244:41;10203:32;10244:41;:::i;:::-;10304:7;-1:-1:-1;10358:2:149;10343:18;;10330:32;;-1:-1:-1;10414:3:149;10399:19;;10386:33;10428:41;10386:33;10428:41;:::i;:::-;10488:7;10478:17;;;9810:691;;;;;;;;:::o;10506:180::-;10565:6;10618:2;10606:9;10597:7;10593:23;10589:32;10586:52;;;10634:1;10631;10624:12;10586:52;-1:-1:-1;10657:23:149;;10506:180;-1:-1:-1;10506:180:149:o;10970:184::-;11040:6;11093:2;11081:9;11072:7;11068:23;11064:32;11061:52;;;11109:1;11106;11099:12;11061:52;-1:-1:-1;11132:16:149;;10970:184;-1:-1:-1;10970:184:149:o;12565:127::-;12626:10;12621:3;12617:20;12614:1;12607:31;12657:4;12654:1;12647:15;12681:4;12678:1;12671:15;12697:135;12736:3;12757:17;;;12754:43;;12777:18;;:::i;:::-;-1:-1:-1;12824:1:149;12813:13;;12697:135::o;13368:125::-;13433:9;;;13454:10;;;13451:36;;;13467:18;;:::i;14623:127::-;14684:10;14679:3;14675:20;14672:1;14665:31;14715:4;14712:1;14705:15;14739:4;14736:1;14729:15;14755:112;14787:1;14813;14803:35;;14818:18;;:::i;:::-;-1:-1:-1;14852:9:149;;14755:112::o;14872:128::-;14939:9;;;14960:11;;;14957:37;;;14974:18;;:::i;15137:168::-;15210:9;;;15241;;15258:15;;;15252:22;;15238:37;15228:71;;15279:18;;:::i;15310:197::-;-1:-1:-1;;;;;15432:10:149;;;15444;;;15428:27;;15467:11;;;15464:37;;;15481:18;;:::i;:::-;15464:37;15310:197;;;;:::o;15512:200::-;-1:-1:-1;;;;;15648:10:149;;;15636;;;15632:27;;15671:12;;;15668:38;;;15686:18;;:::i;15717:245::-;15815:2;15785:17;;;15804;;;;15781:41;-1:-1:-1;;;;;15837:44:149;;-1:-1:-1;;;;;;15883:49:149;;15834:99;15831:125;;;15936:18;;:::i;16311:249::-;16411:2;16400:17;;;16381;;;;16377:41;-1:-1:-1;;;;;;16433:50:149;;-1:-1:-1;;;;;16485:45:149;;16430:101;16427:127;;;16534:18;;:::i;16565:200::-;16631:9;;;16604:4;16659:9;;16687:10;;16699:12;;;16683:29;16722:12;;;16714:21;;16680:56;16677:82;;;16739:18;;:::i;16770:136::-;16805:3;-1:-1:-1;;;16826:22:149;;16823:48;;16851:18;;:::i;:::-;-1:-1:-1;16891:1:149;16887:13;;16770:136::o;16911:216::-;16975:9;;;17003:11;;;16950:3;17033:9;;17061:10;;17057:19;;17086:10;;17078:19;;17054:44;17051:70;;;17101:18;;:::i;:::-;17051:70;;16911:216;;;;:::o;17132:193::-;17171:1;17197;17187:35;;17202:18;;:::i;:::-;-1:-1:-1;;;17238:18:149;;-1:-1:-1;;17258:13:149;;17234:38;17231:64;;;17275:18;;:::i;:::-;-1:-1:-1;17309:10:149;;17132:193::o",
    "linkReferences": {},
    "immutableReferences": {
      "2296": [
        {
          "start": 2451,
          "length": 32
        },
        {
          "start": 2601,
          "length": 32
        },
        {
          "start": 3281,
          "length": 32
        },
        {
          "start": 4022,
          "length": 32
        },
        {
          "start": 4224,
          "length": 32
        }
      ],
      "39": [
        {
          "start": 462,
          "length": 32
        },
        {
          "start": 917,
          "length": 32
        },
        {
          "start": 1624,
          "length": 32
        },
        {
          "start": 1718,
          "length": 32
        },
        {
          "start": 1768,
          "length": 32
        },
        {
          "start": 1870,
          "length": 32
        },
        {
          "start": 1917,
          "length": 32
        },
        {
          "start": 2069,
          "length": 32
        },
        {
          "start": 2180,
          "length": 32
        }
      ],
      "42": [
        {
          "start": 1513,
          "length": 32
        },
        {
          "start": 1579,
          "length": 32
        },
        {
          "start": 1668,
          "length": 32
        },
        {
          "start": 1818,
          "length": 32
        },
        {
          "start": 1965,
          "length": 32
        }
      ],
      "8180": [
        {
          "start": 1091,
          "length": 32
        },
        {
          "start": 2876,
          "length": 32
        }
      ],
      "9215": [
        {
          "start": 2383,
          "length": 32
        }
      ],
      "9218": [
        {
          "start": 5054,
          "length": 32
        }
      ],
      "9221": [
        {
          "start": 3761,
          "length": 32
        },
        {
          "start": 4533,
          "length": 32
        },
        {
          "start": 5206,
          "length": 32
        },
        {
          "start": 5490,
          "length": 32
        },
        {
          "start": 12453,
          "length": 32
        }
      ],
      "9224": [
        {
          "start": 5924,
          "length": 32
        },
        {
          "start": 6063,
          "length": 32
        },
        {
          "start": 7203,
          "length": 32
        },
        {
          "start": 10040,
          "length": 32
        },
        {
          "start": 11084,
          "length": 32
        }
      ],
      "9227": [
        {
          "start": 6112,
          "length": 32
        },
        {
          "start": 11145,
          "length": 32
        },
        {
          "start": 11553,
          "length": 32
        }
      ],
      "9230": [
        {
          "start": 7419,
          "length": 32
        },
        {
          "start": 8259,
          "length": 32
        },
        {
          "start": 11682,
          "length": 32
        }
      ],
      "9233": [
        {
          "start": 8303,
          "length": 32
        },
        {
          "start": 11213,
          "length": 32
        },
        {
          "start": 11605,
          "length": 32
        },
        {
          "start": 11726,
          "length": 32
        }
      ],
      "9236": [
        {
          "start": 5958,
          "length": 32
        },
        {
          "start": 6030,
          "length": 32
        },
        {
          "start": 7237,
          "length": 32
        },
        {
          "start": 9964,
          "length": 32
        },
        {
          "start": 11051,
          "length": 32
        }
      ],
      "9239": [
        {
          "start": 9184,
          "length": 32
        },
        {
          "start": 10002,
          "length": 32
        },
        {
          "start": 11388,
          "length": 32
        },
        {
          "start": 12018,
          "length": 32
        },
        {
          "start": 12078,
          "length": 32
        },
        {
          "start": 13347,
          "length": 32
        },
        {
          "start": 13426,
          "length": 32
        }
      ],
      "9242": [
        {
          "start": 3555,
          "length": 32
        },
        {
          "start": 4392,
          "length": 32
        }
      ],
      "9245": [
        {
          "start": 7920,
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
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
    "withdraw(uint256,(address,bool,bytes))": "d55cefec"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"precisionThreshold\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"_target0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target1\",\"type\":\"address\"},{\"internalType\":\"contract IERC4626\",\"name\":\"_pool\",\"type\":\"address\"},{\"internalType\":\"address[]\",\"name\":\"_sweepTargets\",\"type\":\"address[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"ApprovalFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BaseBufferExceedsShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidBaseToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativeInterest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Paused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsupportedToken\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"sharesMinted\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_baseAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"traderDeposit\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pricePerShare\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountWithdrawn\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"collectGovernanceFee((address,bool,bytes))\":{\"returns\":{\"_0\":\"proceeds The amount of base collected.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_baseAmount\":\"The amount of base to use when trading.\",\"_minOutput\":\"The minium number of bonds to receive.\",\"_minSharePrice\":\"The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"bondProceeds\":\"The amount of bonds the user received\",\"maturityTime\":\"The maturity time of the bonds.\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade\",\"_minSharePrice\":\"The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"maturityTime\":\"The maturity time of the short.\",\"traderDeposit\":\"The amount the user deposited for this trade.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"pricePerShare()\":{\"returns\":{\"sharePrice\":\"The current share price.\"}},\"sweep(address)\":{\"details\":\"WARN: The entire balance of any of the sweep targets can be swept      by governance. If these sweep targets provide access to the base or      pool token, then governance has the ability to rug the pool.WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\"}},\"version\":1},\"userdoc\":{\"errors\":{\"ApprovalFailed()\":[{\"notice\":\"################## ### Hyperdrive ### ##################\"}],\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"################ ### SafeCast ### ################\"}]},\"kind\":\"user\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"notice\":\"This contract's EIP712 domain separator.\"},\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"addLiquidity(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another\"},\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"},\"pricePerShare()\":{\"notice\":\"Loads the share price from the yield source\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"sweep(address)\":{\"notice\":\"Some yield sources [eg Morpho] pay rewards directly to this         contract but we can't handle distributing them internally so we         sweep to the fee collector address to then redistribute to users.\"},\"target0()\":{\"notice\":\"The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions.\"},\"target1()\":{\"notice\":\"The target1 address. This is a logic contract that contains all         some stateful functions.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockERC4626Hyperdrive.sol\":\"MockERC4626Hyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x5bd64741fef9540148a15f024de103722d99eb7687e1268f6e34005209aff1ed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d4424216a3fe46e13705855186f71fc0d88040fde55786c39696cef5b00128ac\",\"dweb:/ipfs/QmXW3XoGe3NuK9AK72v8fHfWdBtXj3mW173dtYJkTv3PDi\"]},\"contracts/src/instances/ERC4626Base.sol\":{\"keccak256\":\"0x186f72e49a6542caa25f799fa9072c2b1b4a81cc7ab3475fbaad29fb56bb0229\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5dba800fe086f6ef89913f8a329887d4c9cb4d283be553e9534013882a7fcc44\",\"dweb:/ipfs/QmNts4c5uyZGmCjHeSREQpayigYkmro2xzRXVcSTqzH9r3\"]},\"contracts/src/instances/ERC4626Hyperdrive.sol\":{\"keccak256\":\"0x4cb2cf4c8cca9daaa5971db97b1fadabf8f2fba43a67c762bf6ede559faed5a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2d0fc229b78c551c4b4acbb9f29562f73cb7e8330d570fca0e571fe6204c3ae4\",\"dweb:/ipfs/QmVpRBdV639KJz7THriVsD1iwwxcqxQ52TaUQ68duywiPi\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc\",\"dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0xe7076ded0fe36ac72c946258bc3183bebb6f1567cd0ce5d55720de84988f5312\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b84d02ec55ccbee1491ce25a2b890e7c371dd251cb69c2cc818179e49ddef780\",\"dweb:/ipfs/QmcXWYPF2Hy6w3TLqmegYiUj5pL9i9PqH44USV4Px9sk2k\"]},\"contracts/src/interfaces/IERC4626HyperdriveCore.sol\":{\"keccak256\":\"0xcea74eaf829d241754f74a8c2223fef0ec83459252d2aaedcd860bae538620c9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://464f58076e112b73957147b2abb52c85b1b806b306fa2d490d0e74f993ffe5a8\",\"dweb:/ipfs/QmNf3EACwEDsB7X1G1geLeqenR1xJHd9zGvSeZJ9f2nSmp\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0xa63f6d3d8b87fcf27202f4ea8609762ef695b9919e4907522930738eb2dcde7e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db88312fa9fed33207e1974d91f714ed8cbbe4a4a1d0e54a6ee5c15a8949f4fb\",\"dweb:/ipfs/QmSYCCuc6Xkh6oibhW5ovdQRhvT5nV4Hxj3Q2xEhjzYyWE\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70\",\"dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0xea9b7b3489ac95dd9c41ae7174c9f34a29f8ae14224ee5d2605434a8c8711784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9076244df4f436e8a8921faadfe925f243ae9a37ac7a16cbce3dd5b4a66631a8\",\"dweb:/ipfs/QmeRunYGGcgUZjRHS3m1AarzzjgV9vtp5K9UeUjTaaCrfs\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x328a01b0720b9a6494a2d6be1113539d41da589a382525578d4241fc077e9646\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4b9d7b56fd8056ae9264da99f8e0764ef16f17dca179218cf9375cf3236ec9fc\",\"dweb:/ipfs/Qmf11fXRipobZfMWTTxaScrYz9tZFUsdVxH5eZ4aLVQQC8\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0xd846aec9e34732c384a70ae306e8015eeb4a85ba7a68861d3a741310efc9eb57\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cdd512b5caa814e88813e3a8a03bfc5e460c78c81c4e403bc8e57300ae11a1d2\",\"dweb:/ipfs/QmUAMC52wZ6H86zUPQ7xPYVjAYjYQ97RiAfV1kn27ZYPsz\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x6779541f073ba5ce6e0656d10c7d9ef23734d2675b865b4d5310a023c30764ad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc569f006ef38723c1cb893b4e08d22ca0a448dc559c8abd18b28bd6967fcb7\",\"dweb:/ipfs/QmdPfZGuM8g3qp4CPsuztZe1wcVrytWkbqHQDbsTVEKBdF\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x45ba04560ca590427cc1ad2e98ec0122f9b6496ead2e3d4b3438339c982bd543\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ee1b36b7ab75044d12e8b91ead75c4377b9da1daa630ea7d1a0c413f963f916a\",\"dweb:/ipfs/QmPsoXubd1sfy7NNn7YWSrYTTrBEreuawVRFFjDrHQmKzZ\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x6b85590aeffa0a73aabf0c17a958bdec064a4d59c2e3d7595a8cb2d86fb01277\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d89ad612f8624723adab39bd85311389fe95f685cf496e1a5d116bfafd6588eb\",\"dweb:/ipfs/QmPWVwrfo65BZofeWubpZsM93yzxMFjhPfoNYsaT31yn28\"]},\"contracts/src/internal/HyperdrivePermitForAll.sol\":{\"keccak256\":\"0x6169d5a033b924d68b9374024fe420fda4cd9ccdb6c681b9d3febea0d68d6452\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7a897e5b336b652fb37471d5f972f5bd3e181f1355ff5989d018b8b0ef051f0b\",\"dweb:/ipfs/QmcEoXs942xzX1Yu7v7ubn1avxZ7MeNvXm33nWkLyRRLha\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0x0dc04dc0f6070d51c2c58587f1d0f0604594e6c5728bf37e46da3a5952a0e0f0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1529824590ac5cdb7d4ffb67449be6a44f3bef9db40646bfa13bb5979e1a2f2d\",\"dweb:/ipfs/QmbXKFyqUaL1vv6wn7avWn463Uf8JgJvVLN6v5rUdJbys7\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xda130fbf6651046517801d119593b7f81e7a2a824f82cb15b1852495fa7fb148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c10ab3e768804fc8eee91502f34dd1e1d2d2e7d90d8ec0a26fac40d83ed940db\",\"dweb:/ipfs/QmNMqyFM6xC49uRAMeY3MhoQ9yK2ZHdQLt3QxrsNK9Kfkw\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xccfb106f6bd8829c369c19d08ef4f8ffc8ebbf5c51a9e148141733ff9bbc49f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d11ddba27aace6aefe451d75b4403ceb10f0a71cd61163e8f812728820107e62\",\"dweb:/ipfs/QmdSZJtY5LaJVnHYRwKAofo6oiihqpazC22Q1X9aL9uNbx\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x42a910bd6ee869fc53f18f2991cbf75a667d663ed41b4a11e18b328546ede7db\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://77345fdb9b99d0b04fa7cf719857eae63362e20db6b99da35ac886a13bf3b56a\",\"dweb:/ipfs/QmXatm27fhzsApgrMq978mye2u8fk62D89pUgV4WsjQeyH\"]},\"contracts/test/MockERC4626Hyperdrive.sol\":{\"keccak256\":\"0x9d0afcd78cd1da0d167210a17f27f3c299377788bc7e058df369769b0d838003\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fc3ddb840218abeca40338b2a9b0fd3c4669e665b9c02090af7d7b7322f680ec\",\"dweb:/ipfs/QmSQCmZiwb2bjSuGAPP1Q3qDsQJe7gBnqbQwbviMPB3Gjj\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4\",\"dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU\"]}},\"version\":1}",
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
                  "name": "precisionThreshold",
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
          "name": "RestrictedZeroAddress"
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
              "name": "_baseAmount",
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
              "name": "maturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "traderDeposit",
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
          "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_baseAmount": "The amount of base to use when trading.",
              "_minOutput": "The minium number of bonds to receive.",
              "_minSharePrice": "The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.",
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
              "_maxDeposit": "The most the user expects to deposit for this trade",
              "_minSharePrice": "The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.",
              "_options": "The options that configure how the trade is settled."
            },
            "returns": {
              "maturityTime": "The maturity time of the short.",
              "traderDeposit": "The amount the user deposited for this trade."
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
        "keccak256": "0x5bd64741fef9540148a15f024de103722d99eb7687e1268f6e34005209aff1ed",
        "urls": [
          "bzz-raw://d4424216a3fe46e13705855186f71fc0d88040fde55786c39696cef5b00128ac",
          "dweb:/ipfs/QmXW3XoGe3NuK9AK72v8fHfWdBtXj3mW173dtYJkTv3PDi"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/instances/ERC4626Base.sol": {
        "keccak256": "0x186f72e49a6542caa25f799fa9072c2b1b4a81cc7ab3475fbaad29fb56bb0229",
        "urls": [
          "bzz-raw://5dba800fe086f6ef89913f8a329887d4c9cb4d283be553e9534013882a7fcc44",
          "dweb:/ipfs/QmNts4c5uyZGmCjHeSREQpayigYkmro2xzRXVcSTqzH9r3"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/instances/ERC4626Hyperdrive.sol": {
        "keccak256": "0x4cb2cf4c8cca9daaa5971db97b1fadabf8f2fba43a67c762bf6ede559faed5a0",
        "urls": [
          "bzz-raw://2d0fc229b78c551c4b4acbb9f29562f73cb7e8330d570fca0e571fe6204c3ae4",
          "dweb:/ipfs/QmVpRBdV639KJz7THriVsD1iwwxcqxQ52TaUQ68duywiPi"
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
        "keccak256": "0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5",
        "urls": [
          "bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70",
          "dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3"
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
        "keccak256": "0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3",
        "urls": [
          "bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993",
          "dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"
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
        "keccak256": "0xea9b7b3489ac95dd9c41ae7174c9f34a29f8ae14224ee5d2605434a8c8711784",
        "urls": [
          "bzz-raw://9076244df4f436e8a8921faadfe925f243ae9a37ac7a16cbce3dd5b4a66631a8",
          "dweb:/ipfs/QmeRunYGGcgUZjRHS3m1AarzzjgV9vtp5K9UeUjTaaCrfs"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveBase.sol": {
        "keccak256": "0x328a01b0720b9a6494a2d6be1113539d41da589a382525578d4241fc077e9646",
        "urls": [
          "bzz-raw://4b9d7b56fd8056ae9264da99f8e0764ef16f17dca179218cf9375cf3236ec9fc",
          "dweb:/ipfs/Qmf11fXRipobZfMWTTxaScrYz9tZFUsdVxH5eZ4aLVQQC8"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveCheckpoint.sol": {
        "keccak256": "0xd846aec9e34732c384a70ae306e8015eeb4a85ba7a68861d3a741310efc9eb57",
        "urls": [
          "bzz-raw://cdd512b5caa814e88813e3a8a03bfc5e460c78c81c4e403bc8e57300ae11a1d2",
          "dweb:/ipfs/QmUAMC52wZ6H86zUPQ7xPYVjAYjYQ97RiAfV1kn27ZYPsz"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveLP.sol": {
        "keccak256": "0x6779541f073ba5ce6e0656d10c7d9ef23734d2675b865b4d5310a023c30764ad",
        "urls": [
          "bzz-raw://5cc569f006ef38723c1cb893b4e08d22ca0a448dc559c8abd18b28bd6967fcb7",
          "dweb:/ipfs/QmdPfZGuM8g3qp4CPsuztZe1wcVrytWkbqHQDbsTVEKBdF"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveLong.sol": {
        "keccak256": "0x45ba04560ca590427cc1ad2e98ec0122f9b6496ead2e3d4b3438339c982bd543",
        "urls": [
          "bzz-raw://ee1b36b7ab75044d12e8b91ead75c4377b9da1daa630ea7d1a0c413f963f916a",
          "dweb:/ipfs/QmPsoXubd1sfy7NNn7YWSrYTTrBEreuawVRFFjDrHQmKzZ"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveMultiToken.sol": {
        "keccak256": "0x6b85590aeffa0a73aabf0c17a958bdec064a4d59c2e3d7595a8cb2d86fb01277",
        "urls": [
          "bzz-raw://d89ad612f8624723adab39bd85311389fe95f685cf496e1a5d116bfafd6588eb",
          "dweb:/ipfs/QmPWVwrfo65BZofeWubpZsM93yzxMFjhPfoNYsaT31yn28"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdrivePermitForAll.sol": {
        "keccak256": "0x6169d5a033b924d68b9374024fe420fda4cd9ccdb6c681b9d3febea0d68d6452",
        "urls": [
          "bzz-raw://7a897e5b336b652fb37471d5f972f5bd3e181f1355ff5989d018b8b0ef051f0b",
          "dweb:/ipfs/QmcEoXs942xzX1Yu7v7ubn1avxZ7MeNvXm33nWkLyRRLha"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveShort.sol": {
        "keccak256": "0x0dc04dc0f6070d51c2c58587f1d0f0604594e6c5728bf37e46da3a5952a0e0f0",
        "urls": [
          "bzz-raw://1529824590ac5cdb7d4ffb67449be6a44f3bef9db40646bfa13bb5979e1a2f2d",
          "dweb:/ipfs/QmbXKFyqUaL1vv6wn7avWn463Uf8JgJvVLN6v5rUdJbys7"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveStorage.sol": {
        "keccak256": "0xda130fbf6651046517801d119593b7f81e7a2a824f82cb15b1852495fa7fb148",
        "urls": [
          "bzz-raw://c10ab3e768804fc8eee91502f34dd1e1d2d2e7d90d8ec0a26fac40d83ed940db",
          "dweb:/ipfs/QmNMqyFM6xC49uRAMeY3MhoQ9yK2ZHdQLt3QxrsNK9Kfkw"
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
        "keccak256": "0xccfb106f6bd8829c369c19d08ef4f8ffc8ebbf5c51a9e148141733ff9bbc49f3",
        "urls": [
          "bzz-raw://d11ddba27aace6aefe451d75b4403ceb10f0a71cd61163e8f812728820107e62",
          "dweb:/ipfs/QmdSZJtY5LaJVnHYRwKAofo6oiihqpazC22Q1X9aL9uNbx"
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
        "keccak256": "0x42a910bd6ee869fc53f18f2991cbf75a667d663ed41b4a11e18b328546ede7db",
        "urls": [
          "bzz-raw://77345fdb9b99d0b04fa7cf719857eae63362e20db6b99da35ac886a13bf3b56a",
          "dweb:/ipfs/QmXatm27fhzsApgrMq978mye2u8fk62D89pUgV4WsjQeyH"
        ],
        "license": "Apache-2.0"
      },
      "contracts/test/MockERC4626Hyperdrive.sol": {
        "keccak256": "0x9d0afcd78cd1da0d167210a17f27f3c299377788bc7e058df369769b0d838003",
        "urls": [
          "bzz-raw://fc3ddb840218abeca40338b2a9b0fd3c4669e665b9c02090af7d7b7322f680ec",
          "dweb:/ipfs/QmSQCmZiwb2bjSuGAPP1Q3qDsQJe7gBnqbQwbviMPB3Gjj"
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
    "id": 13818,
    "exportedSymbols": {
      "ERC4626Hyperdrive": [
        2635
      ],
      "IERC4626": [
        3255
      ],
      "IHyperdrive": [
        3759
      ],
      "MockERC4626Hyperdrive": [
        13817
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:1342:54",
    "nodes": [
      {
        "id": 13740,
        "nodeType": "PragmaDirective",
        "src": "39:23:54",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 13742,
        "nodeType": "ImportDirective",
        "src": "64:65:54",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC4626.sol",
        "file": "contracts/src/interfaces/IERC4626.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13818,
        "sourceUnit": 3256,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13741,
              "name": "IERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3255,
              "src": "73:8:54",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13744,
        "nodeType": "ImportDirective",
        "src": "130:71:54",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "contracts/src/interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13818,
        "sourceUnit": 3760,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13743,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3759,
              "src": "139:11:54",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13746,
        "nodeType": "ImportDirective",
        "src": "202:82:54",
        "nodes": [],
        "absolutePath": "contracts/src/instances/ERC4626Hyperdrive.sol",
        "file": "contracts/src/instances/ERC4626Hyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13818,
        "sourceUnit": 2636,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13745,
              "name": "ERC4626Hyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 2635,
              "src": "211:17:54",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13817,
        "nodeType": "ContractDefinition",
        "src": "439:941:54",
        "nodes": [
          {
            "id": 13772,
            "nodeType": "FunctionDefinition",
            "src": "497:252:54",
            "nodes": [],
            "body": {
              "id": 13771,
              "nodeType": "Block",
              "src": "747:2:54",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 13764,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13751,
                    "src": "696:7:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  {
                    "id": 13765,
                    "name": "_target0",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13753,
                    "src": "705:8:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 13766,
                    "name": "_target1",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13755,
                    "src": "715:8:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 13767,
                    "name": "_pool",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13758,
                    "src": "725:5:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$3255",
                      "typeString": "contract IERC4626"
                    }
                  },
                  {
                    "id": 13768,
                    "name": "_sweepTargets",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13761,
                    "src": "732:13:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  }
                ],
                "id": 13769,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 13763,
                  "name": "ERC4626Hyperdrive",
                  "nameLocations": [
                    "678:17:54"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 2635,
                  "src": "678:17:54"
                },
                "nodeType": "ModifierInvocation",
                "src": "678:68:54"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 13762,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13751,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "548:7:54",
                  "nodeType": "VariableDeclaration",
                  "scope": 13772,
                  "src": "518:37:54",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 13750,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 13749,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "518:11:54",
                        "530:10:54"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3558,
                      "src": "518:22:54"
                    },
                    "referencedDeclaration": 3558,
                    "src": "518:22:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13753,
                  "mutability": "mutable",
                  "name": "_target0",
                  "nameLocation": "573:8:54",
                  "nodeType": "VariableDeclaration",
                  "scope": 13772,
                  "src": "565:16:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13752,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "565:7:54",
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
                  "id": 13755,
                  "mutability": "mutable",
                  "name": "_target1",
                  "nameLocation": "599:8:54",
                  "nodeType": "VariableDeclaration",
                  "scope": 13772,
                  "src": "591:16:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13754,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "591:7:54",
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
                  "id": 13758,
                  "mutability": "mutable",
                  "name": "_pool",
                  "nameLocation": "626:5:54",
                  "nodeType": "VariableDeclaration",
                  "scope": 13772,
                  "src": "617:14:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC4626_$3255",
                    "typeString": "contract IERC4626"
                  },
                  "typeName": {
                    "id": 13757,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 13756,
                      "name": "IERC4626",
                      "nameLocations": [
                        "617:8:54"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3255,
                      "src": "617:8:54"
                    },
                    "referencedDeclaration": 3255,
                    "src": "617:8:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$3255",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13761,
                  "mutability": "mutable",
                  "name": "_sweepTargets",
                  "nameLocation": "658:13:54",
                  "nodeType": "VariableDeclaration",
                  "scope": 13772,
                  "src": "641:30:54",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 13759,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "641:7:54",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 13760,
                    "nodeType": "ArrayTypeName",
                    "src": "641:9:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "508:169:54"
            },
            "returnParameters": {
              "id": 13770,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "747:0:54"
            },
            "scope": 13817,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 13790,
            "nodeType": "FunctionDefinition",
            "src": "755:204:54",
            "nodes": [],
            "body": {
              "id": 13789,
              "nodeType": "Block",
              "src": "908:51:54",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 13785,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13774,
                        "src": "934:7:54",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13786,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13777,
                        "src": "943:8:54",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
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
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      ],
                      "id": 13784,
                      "name": "_deposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2390
                      ],
                      "referencedDeclaration": 2390,
                      "src": "925:8:54",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$3608_calldata_ptr_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)"
                      }
                    },
                    "id": 13787,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "925:27:54",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 13783,
                  "id": 13788,
                  "nodeType": "Return",
                  "src": "918:34:54"
                }
              ]
            },
            "functionSelector": "829555d4",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nameLocation": "764:7:54",
            "parameters": {
              "id": 13778,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13774,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "789:7:54",
                  "nodeType": "VariableDeclaration",
                  "scope": 13790,
                  "src": "781:15:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13773,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "781:7:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13777,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "835:8:54",
                  "nodeType": "VariableDeclaration",
                  "scope": 13790,
                  "src": "806:37:54",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 13776,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 13775,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "806:11:54",
                        "818:7:54"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3608,
                      "src": "806:19:54"
                    },
                    "referencedDeclaration": 3608,
                    "src": "806:19:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$3608_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "771:78:54"
            },
            "returnParameters": {
              "id": 13783,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13780,
                  "mutability": "mutable",
                  "name": "sharesMinted",
                  "nameLocation": "874:12:54",
                  "nodeType": "VariableDeclaration",
                  "scope": 13790,
                  "src": "866:20:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13779,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "866:7:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13782,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "896:10:54",
                  "nodeType": "VariableDeclaration",
                  "scope": 13790,
                  "src": "888:18:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13781,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "888:7:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "865:42:54"
            },
            "scope": 13817,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 13806,
            "nodeType": "FunctionDefinition",
            "src": "965:189:54",
            "nodes": [],
            "body": {
              "id": 13805,
              "nodeType": "Block",
              "src": "1102:52:54",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 13801,
                        "name": "_shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13792,
                        "src": "1129:7:54",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13802,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13795,
                        "src": "1138:8:54",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
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
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      ],
                      "id": 13800,
                      "name": "_withdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2437
                      ],
                      "referencedDeclaration": 2437,
                      "src": "1119:9:54",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$3608_calldata_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,struct IHyperdrive.Options calldata) returns (uint256)"
                      }
                    },
                    "id": 13803,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1119:28:54",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13799,
                  "id": 13804,
                  "nodeType": "Return",
                  "src": "1112:35:54"
                }
              ]
            },
            "functionSelector": "d55cefec",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "974:8:54",
            "parameters": {
              "id": 13796,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13792,
                  "mutability": "mutable",
                  "name": "_shares",
                  "nameLocation": "1000:7:54",
                  "nodeType": "VariableDeclaration",
                  "scope": 13806,
                  "src": "992:15:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13791,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "992:7:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13795,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "1046:8:54",
                  "nodeType": "VariableDeclaration",
                  "scope": 13806,
                  "src": "1017:37:54",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 13794,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 13793,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "1017:11:54",
                        "1029:7:54"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3608,
                      "src": "1017:19:54"
                    },
                    "referencedDeclaration": 3608,
                    "src": "1017:19:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$3608_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "982:78:54"
            },
            "returnParameters": {
              "id": 13799,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13798,
                  "mutability": "mutable",
                  "name": "amountWithdrawn",
                  "nameLocation": "1085:15:54",
                  "nodeType": "VariableDeclaration",
                  "scope": 13806,
                  "src": "1077:23:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13797,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1077:7:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1076:25:54"
            },
            "scope": 13817,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 13816,
            "nodeType": "FunctionDefinition",
            "src": "1272:106:54",
            "nodes": [],
            "body": {
              "id": 13815,
              "nodeType": "Block",
              "src": "1338:40:54",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 13812,
                      "name": "_pricePerShare",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        2450
                      ],
                      "referencedDeclaration": 2450,
                      "src": "1355:14:54",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 13813,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1355:16:54",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13811,
                  "id": 13814,
                  "nodeType": "Return",
                  "src": "1348:23:54"
                }
              ]
            },
            "documentation": {
              "id": 13807,
              "nodeType": "StructuredDocumentation",
              "src": "1160:107:54",
              "text": "@notice Loads the share price from the yield source\n @return sharePrice The current share price."
            },
            "functionSelector": "99530b06",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pricePerShare",
            "nameLocation": "1281:13:54",
            "parameters": {
              "id": 13808,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1294:2:54"
            },
            "returnParameters": {
              "id": 13811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13810,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1326:10:54",
                  "nodeType": "VariableDeclaration",
                  "scope": 13816,
                  "src": "1318:18:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13809,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1318:7:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1317:20:54"
            },
            "scope": 13817,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 13747,
              "name": "ERC4626Hyperdrive",
              "nameLocations": [
                "473:17:54"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2635,
              "src": "473:17:54"
            },
            "id": 13748,
            "nodeType": "InheritanceSpecifier",
            "src": "473:17:54"
          }
        ],
        "canonicalName": "MockERC4626Hyperdrive",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          13817,
          2635,
          2468,
          504,
          5801,
          9192,
          7805,
          6967,
          4506,
          8312,
          8158,
          5354,
          9465,
          60564,
          4265,
          3917,
          4252
        ],
        "name": "MockERC4626Hyperdrive",
        "nameLocation": "448:21:54",
        "scope": 13818,
        "usedErrors": [
          3611,
          3613,
          3621,
          3625,
          3627,
          3631,
          3633,
          3635,
          3637,
          3641,
          3643,
          3647,
          3649,
          3651,
          3663,
          3665,
          3667,
          3683,
          3705,
          3707,
          3711,
          3730,
          3733,
          3735,
          3742,
          3745,
          3747
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 54
} as const;
