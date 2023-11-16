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
    }
  ],
  "bytecode": {
    "object": "0x6102c060405260016000553480156200001757600080fd5b5060405162004a3538038062004a358339810160408190526200003a91620006c3565b84516001600160a01b03166080908152850151829086908690869083906103e811156200007a576040516349db44f560e01b815260040160405180910390fd5b60808101516101805260a08101516101a05260c08101516101c052610100810151600003620000bc57604051635428734d60e01b815260040160405180910390fd5b6101008101805160a0525160e08201511080620000ee57508061010001518160e00151620000eb91906200081a565b15155b156200010d5760405163253fffcf60e11b815260040160405180910390fd5b60e08181015160c05261012082015190526060810151610160908152610140820151600880546001600160a01b0319166001600160a01b0392831617905590820151166101e05261018081015151670de0b6b3a76400001080620001815750670de0b6b3a764000081610180015160200151115b806200019d5750670de0b6b3a764000081610180015160400151115b15620001bc576040516322f72cc360e11b815260040160405180910390fd5b610180810180515161010052805160209081015161012052905160409081015161014052818301516001600160a01b039081166102005292810151610220528051808201825260018152603160f81b9083015280517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681830152466060820152306080828101919091528251808303909101815260a090910190915280519101206102405291821661026052811661028052919091166102a05250620002a6620004ca565b856060015114620002ca576040516355f2a42f60e01b815260040160405180910390fd5b6102a0516001600160a01b03166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200030c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200033291906200083d565b6001600160a01b031685600001516001600160a01b0316146200036857604051630722152560e11b815260040160405180910390fd5b84516102a05160405163095ea7b360e01b81526001600160a01b039182166004820152600019602482015291169063095ea7b3906044016020604051808303816000875af1158015620003bf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003e5919062000864565b62000403576040516340b27c2160e11b815260040160405180910390fd5b60005b8151811015620004be57600082828151811062000427576200042762000888565b602002602001015190506102a0516001600160a01b0316816001600160a01b031614806200046857506080516001600160a01b0316816001600160a01b0316145b15620004875760405163350b944160e11b815260040160405180910390fd5b6001600160a01b03166000908152601060205260409020805460ff1916600117905580620004b5816200089e565b91505062000406565b505050505050620008e0565b6102a0516040516303d1689d60e11b8152670de0b6b3a764000060048201526000916001600160a01b0316906307a2d13a90602401602060405180830381865afa1580156200051d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005439190620008c6565b905090565b634e487b7160e01b600052604160045260246000fd5b6040516101a081016001600160401b038111828210171562000584576200058462000548565b60405290565b6001600160a01b0381168114620005a057600080fd5b50565b8051620005b0816200058a565b919050565b600060608284031215620005c857600080fd5b604051606081016001600160401b0381118282101715620005ed57620005ed62000548565b80604052508091508251815260208301516020820152604083015160408201525092915050565b600082601f8301126200062657600080fd5b815160206001600160401b038083111562000645576200064562000548565b8260051b604051601f19603f830116810181811084821117156200066d576200066d62000548565b6040529384528581018301938381019250878511156200068c57600080fd5b83870191505b84821015620006b8578151620006a8816200058a565b8352918301919083019062000692565b979650505050505050565b6000806000806000858703610260811215620006de57600080fd5b6101e080821215620006ef57600080fd5b620006f96200055e565b91506200070688620005a3565b82526200071660208901620005a3565b602083015260408801516040830152606088015160608301526080880151608083015260a088015160a083015260c088015160c083015260e088015160e08301526101008089015181840152506101208089015181840152506101406200077f818a01620005a3565b9083015261016062000793898201620005a3565b90830152610180620007a88a8a8301620005b5565b8184015250819650620007bd818901620005a3565b95505050620007d06102008701620005a3565b9250620007e16102208701620005a3565b6102408701519092506001600160401b03811115620007ff57600080fd5b6200080d8882890162000614565b9150509295509295909350565b6000826200083857634e487b7160e01b600052601260045260246000fd5b500690565b6000602082840312156200085057600080fd5b81516200085d816200058a565b9392505050565b6000602082840312156200087757600080fd5b815180151581146200085d57600080fd5b634e487b7160e01b600052603260045260246000fd5b600060018201620008bf57634e487b7160e01b600052601160045260246000fd5b5060010190565b600060208284031215620008d957600080fd5b5051919050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a051613f6b62000aca60003960008181610fc10152818161105701526118a201526000818161054301528181610585015281816105de01528181610674015261070701526000818161017d01528181610344015281816105b20152818161061001528181610642015281816106a8015281816106d70152818161074701526107a10152600081816103f2015261092101526000505060005050600050506000611c08015260008181610b350152610d6101526000818161217b015281816124ad01528181612a1701528181612c9401528181612cd0015281816131c501526132140152600081816114430152818161148b0152818161195d0152818161248701526128c6015260008181611e0a0152818161296801528181612af00152612b69015260008181611a1301528181611dde0152612b3d0152600081816114dd015281816129240152612abc015260008181611421015281816114ac0152818161193b015281816124d301526128e7015260008181610c0301528181610dee015281816111530152818161126f0152612e47015260006110b601526000610f7d0152613f6b6000f3fe6080604052600436106101665760003560e01c806377d05ff4116100d1578063cba2e58d1161008a578063ded0623111610064578063ded062311461037e578063e44808bc14610511578063eac3e79914610531578063ed64bab21461056557610166565b8063cba2e58d146104eb578063cbc13434146102b8578063dbbe8070146104fe57610166565b806377d05ff41461046f5780639032c726146104825780639aa68462146104a25780639cd241af146104b0578063a22cb4651461044f578063ab033ea9146104d057610166565b806329b23fc11161012357806329b23fc11461037e57806330adf81f146103ac5780633644e515146103e05780633e691db9146104145780634ed2d6ac146104345780637180c8ca1461044f57610166565b806301681a621461027657806302329a2914610298578063074a6de9146102b857806317fad7fc146102f25780631c0f12b61461031257806321b57d5314610332575b34801561017257600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516101b5929190613808565b600060405180830381855af49150503d80600081146101f0576040519150601f19603f3d011682016040523d82523d6000602084013e6101f5565b606091505b5091509150811561021957604051638bb0a34b60e01b815260040160405180910390fd5b600061022482613818565b90506001600160e01b03198116636e64089360e11b1461024657815160208301fd5b81516003198101600484019081529261026791810160200190602401613865565b80519650602001945050505050f35b34801561028257600080fd5b50610296610291366004613947565b610580565b005b3480156102a457600080fd5b506102966102b3366004613979565b6105ad565b3480156102c457600080fd5b506102d86102d33660046139a6565b6105d6565b604080519283526020830191909152015b60405180910390f35b3480156102fe57600080fd5b5061029661030d366004613a3b565b61060b565b34801561031e57600080fd5b5061029661032d366004613ad0565b61063d565b34801561033e57600080fd5b506103667f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016102e9565b34801561038a57600080fd5b5061039e610399366004613b18565b61066d565b6040519081526020016102e9565b3480156103b857600080fd5b5061039e7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b3480156103ec57600080fd5b5061039e7f000000000000000000000000000000000000000000000000000000000000000081565b34801561042057600080fd5b5061039e61042f366004613b72565b6106a1565b34801561044057600080fd5b5061029661032d366004613baf565b34801561045b57600080fd5b5061029661046a366004613bf9565b6106d2565b61039e61047d3660046139a6565b610700565b34801561048e57600080fd5b5061029661049d366004613c25565b610733565b61039e610399366004613b18565b3480156104bc57600080fd5b506102966104cb366004613ca3565b610742565b3480156104dc57600080fd5b506102966102b3366004613947565b6102d86104f9366004613b18565b610771565b6102d861050c366004613b18565b61078d565b34801561051d57600080fd5b5061029661052c366004613cdb565b61079c565b34801561053d57600080fd5b506103667f000000000000000000000000000000000000000000000000000000000000000081565b34801561057157600080fd5b50610296610291366004613d3a565b6105a97f00000000000000000000000000000000000000000000000000000000000000006107cd565b5050565b6105a97f00000000000000000000000000000000000000000000000000000000000000006107cd565b6000806106027f00000000000000000000000000000000000000000000000000000000000000006107cd565b50935093915050565b6106347f00000000000000000000000000000000000000000000000000000000000000006107cd565b50505050505050565b6106667f00000000000000000000000000000000000000000000000000000000000000006107cd565b5050505050565b60006106987f00000000000000000000000000000000000000000000000000000000000000006107cd565b50949350505050565b60006106cc7f00000000000000000000000000000000000000000000000000000000000000006107cd565b50919050565b6106fb7f00000000000000000000000000000000000000000000000000000000000000006107cd565b505050565b600061072b7f00000000000000000000000000000000000000000000000000000000000000006107cd565b509392505050565b61063487878787878787610847565b61076b7f00000000000000000000000000000000000000000000000000000000000000006107cd565b50505050565b60008061078086868686610a96565b9150915094509492505050565b60008061078086868686610ce7565b6107c57f00000000000000000000000000000000000000000000000000000000000000006107cd565b505050505050565b6060600080836001600160a01b03166000366040516107ed929190613808565b600060405180830381855af49150503d8060008114610828576040519150601f19603f3d011682016040523d82523d6000602084013e61082d565b606091505b50915091508161083f57805160208201fd5b805160208201f35b834211156108685760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b03871661088f5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156109bb573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146109f957604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600f602052604081208054909190610a1f90613d69565b909155506001600160a01b038981166000818152600d60209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b600080600054600114610add5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064015b60405180910390fd5b6002600055600554610100900460ff1615610b0b576040516313d0ff5960e31b815260040160405180910390fd5b610b13610f37565b600080610b208886610f58565b90925090506000610b318383611091565b90507f0000000000000000000000000000000000000000000000000000000000000000811015610b745760405163211ddda360e11b815260040160405180910390fd5b86821015610b95576040516342af972b60e01b815260040160405180910390fd5b6000610b9f6110af565b9050610bab81846110ea565b506000806000610bbb87876113fa565b909a5091945092509050878c1115610be65760405163c972651760e01b815260040160405180910390fd5b8060096000828254610bf89190613d82565b90915550610c2890507f000000000000000000000000000000000000000000000000000000000000000085613d82565b9850610c3883898489888e611574565b6000610c4560018b611773565b9050610c5e81610c5860208e018e613947565b8b6117a8565b8d8b8a83610c6f6020840184613947565b6001600160a01b03167f8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda6868f610ca5878f88611850565b60408051928352602083019190915281018e90526060810185905260800160405180910390a39a50505050505050505050506001600055909590945092505050565b600080600054600114610d295760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610ad4565b6002600055600554610100900460ff1615610d57576040516313d0ff5960e31b815260040160405180910390fd5b610d5f610f37565b7f0000000000000000000000000000000000000000000000000000000000000000861015610da05760405163211ddda360e11b815260040160405180910390fd5b6000610daa611882565b905084811015610dcd576040516342af972b60e01b815260040160405180910390fd5b6000610dd76110af565b90506000610de582846110ea565b90506000610e137f000000000000000000000000000000000000000000000000000000000000000084613d82565b90506000806000610e258d8887611915565b600980549296509294509250829190600090610e42908490613d82565b92505081905550506000610e5782888c611a47565b9050808c1015610e7a5760405163c972651760e01b815260040160405180910390fd5b610e84818b610f58565b5050610e938d83858a88611a6f565b6000610ea0600286611773565b90508d610eba82610eb460208f018f613947565b836117a8565b81610ec860208e018e613947565b60408051898152602081018890529081018c9052606081018490526001600160a01b0391909116907f80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef959060800160405180910390a350506001600055929c929b50919950505050505050505050565b3415610f5657604051631574f9f360e01b815260040160405180910390fd5b565b600080610f6b6040840160208501613979565b1561104757610fa56001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333087611cfc565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015611012573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110369190613d95565b9150611040611882565b905061108a565b83915061107f6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085611cfc565b611087611882565b90505b9250929050565b60006110a68383670de0b6b3a7640000611d7f565b90505b92915050565b60006110db7f000000000000000000000000000000000000000000000000000000000000000042613dc4565b6110e59042613dd8565b905090565b600082815260076020526040812080546001600160801b031615158061110f57504284115b1561112557546001600160801b031690506110a9565b61112e83611d9d565b81546001600160801b0319166001600160801b039190911617815560006007816111787f000000000000000000000000000000000000000000000000000000000000000088613dd8565b815260208101919091526040016000908120546001600160801b031691506111a1600287611773565b6000818152600c602052604081205491925081156111fa576000806111c9848a886000611dc7565b9150915080600960008282546111df9190613d82565b909155506111f3905084600084808e611e95565b6001925050505b600061120760018a611773565b6000818152600c602052604090205490915080156112625760008061122f838c8a6001611dc7565b9150915080600960008282546112459190613d82565b909155508c905061125a84600085808561200f565b600195505050505b82156112e05760006112947f00000000000000000000000000000000000000000000000000000000000000008c613dd8565b600081815260076020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b926112d4928492919004900b6121dc565b6112dd8b612303565b50505b6000808a116112f057600061130b565b61130b8a6113056113008d6123ea565b612550565b90611091565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b03909216916113769190613d82565b6113809190613dd8565b9050600081156113995761139483836127be565b61139c565b60005b604080518e8152602081018a9052908101869052606081018290529091508d907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a250999b9a5050505050505050505050565b60008060008061146761140b6127d3565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006127f4565b925060006114d06114766127d3565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612820565b90506115068785611501847f0000000000000000000000000000000000000000000000000000000000000000612840565b61288d565b156115245760405163512095c760e01b815260040160405180910390fd5b60008061153289848a612916565b90925090506115418287613dd8565b945061154d8186613d82565b955061155a81848a611d7f565b9350611566848a613dd8565b965050505092959194509250565b6003546001600160801b03166115b46115af8261159985670de0b6b3a7640000613deb565b6004546001600160801b031691908a6001612996565b611d9d565b600480546001600160801b0319166001600160801b03929092169190911790556115dd87611d9d565b600180546000906115f89084906001600160801b0316613e02565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061162585611d9d565b60018054601090611647908490600160801b90046001600160801b0316613e29565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061167486611d9d565b61167e9082613e02565b600380546001600160801b0319166001600160801b0383161790556000848152600760205260408120805492935091600160801b9004600f0b906116da6116c58b89611091565b6116d08b6002613deb565b6115af9190613dd8565b8354909150819084906010906116fb908490600160801b9004600f0b613e49565b82546001600160801b039182166101009390930a928302919092021990911617905550825461173890600f84810b91600160801b9004900b6121dc565b61174187612a10565b61175e576040516318846de960e01b815260040160405180910390fd5b61176787612303565b50505050505050505050565b60006001600160f81b0382111561179d5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906117da908490613d82565b90915550506000838152600c6020526040812080548392906117fd908490613d82565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006118626040830160208401613979565b1561186e57508261187b565b6118788484611091565b90505b9392505050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa1580156118f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110e59190613d95565b60008060006119816119256127d3565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000612a75565b91508561198e8387611091565b11156119ad5760405163512095c760e01b815260040160405180910390fd5b60008060006119bd6114766127d3565b90506119d389670de0b6b3a7640000838b612a96565b5092955093506119e7915083905084613dd8565b6119f19086613dd8565b9450611a37886113058b611a05868a613dd8565b8b611a108e82612ba7565b8e7f0000000000000000000000000000000000000000000000000000000000000000612bbd565b9550909250505093509350939050565b6000611a596040830160208401613979565b15611a6557508261187b565b61187884846127be565b600354611ab9906115af90600160801b90046001600160801b0316611a9c84670de0b6b3a7640000613deb565b600454600160801b90046001600160801b03169190896001612996565b600480546001600160801b03928316600160801b0292169190911790556000611ae184611d9d565b600154611af791906001600160801b0316613e29565b600180546001600160801b0319166001600160801b0383161790559050611b1d86611d9d565b60018054601090611b3f908490600160801b90046001600160801b0316613e02565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b6c86611d9d565b60038054601090611b8e908490600160801b90046001600160801b0316613e02565b82546101009290920a6001600160801b03818102199093169183160217909155600254600154600f9190910b911612159050611bdd5760405163585fe6df60e11b815260040160405180910390fd5b6000611be76110af565b600081815260076020526040902054909150600160801b9004600f0b611c2d7f000000000000000000000000000000000000000000000000000000000000000088613dc4565b611c379088613dd8565b96506000611c458989613d82565b9050611c5081611d9d565b60008481526007602052604090208054601090611c78908490600160801b9004600f0b613e76565b82546001600160801b039182166101009390930a928302919092021990911617905550600083815260076020526040902054611cc290600f84810b91600160801b9004900b6121dc565b611ccb86612a10565b611ce8576040516318846de960e01b815260040160405180910390fd5b611cf186612303565b505050505050505050565b60006040516323b872dd60e01b81528460048201528360248201528260448201526020600060648360008a5af13d15601f3d11600160005114161716915050806106665760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610ad4565b6000826000190484118302158202611d9657600080fd5b5091020490565b6000600160801b8210611dc357604051630f0af95160e11b815260040160405180910390fd5b5090565b600080611dd486866127be565b91506000611e02837f0000000000000000000000000000000000000000000000000000000000000000611091565b9050611e2e817f0000000000000000000000000000000000000000000000000000000000000000611091565b91508315611e5157611e408282613dd8565b611e4a9084613dd8565b9250611e68565b611e5b8282613dd8565b611e659084613d82565b92505b84861015611e8b57611e7b838787611d7f565b9250611e88828787611d7f565b91505b5094509492505050565b600354600160801b90046001600160801b0316611ede6115af82611ec185670de0b6b3a7640000613deb565b600454600160801b90046001600160801b031691908a6000612996565b600480546001600160801b03928316600160801b029216919091179055611f0486611d9d565b611f0e9082613e29565b600380546001600160801b03928316600160801b029216919091179055611f3484611d9d565b60018054600090611f4f9084906001600160801b0316613e02565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f7c83612c0f565b60028054600090611f91908490600f0b613e49565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611fc185611d9d565b60018054601090611fe3908490600160801b90046001600160801b0316613e29565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6003546001600160801b031661204a6115af8261203485670de0b6b3a7640000613deb565b6004546001600160801b031691908a6000612996565b600480546001600160801b0319166001600160801b039290921691909117905561207386611d9d565b61207d9082613e29565b600380546001600160801b0319166001600160801b0392909216919091179055506120a783611d9d565b600180546000906120c29084906001600160801b0316613e29565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506120ef82612c0f565b60028054600090612104908490600f0b613e76565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061213484611d9d565b60018054601090612156908490600160801b90046001600160801b0316613e02565b82546101009290920a6001600160801b038181021990931691831602179091556001547f00000000000000000000000000000000000000000000000000000000000000009116109050806121be5750600254600154600f9190910b6001600160801b03909116125b156106665760405163585fe6df60e11b815260040160405180910390fd5b80821380156121ec575060008212155b1561227f5760006121fd8282612c4d565b6122079084613ea3565b6002549091506122349061222f908390600160801b90046001600160801b0316600f0b612c5c565b612c0f565b60028054601090612256908490600160801b90046001600160801b0316613e29565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b818113156105a957600082126122f55761229882612c0f565b6122a182612c0f565b6122ab9190613e76565b600280546010906122cd908490600160801b90046001600160801b0316613e02565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b6122ab61222f826000612c4d565b600c6020527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854600654600360f81b60009081527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d549091612370916001600160801b0390911690613dd8565b9050600061237e8284613d82565b9050600061238e611300866123ea565b9050600061239d858385611d7f565b90506000806123ab88612c6b565b9050828111156123c2576123bf8382613dd8565b91505b60008211806123cf575083155b156123e0576123e082858789612d0e565b5050505050505050565b61244760405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600254600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600354821660e082015260045490916101008301916125169116612dfc565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261254892900416612dfc565b905292915050565b60008061257083610140015184610120015161109190919063ffffffff16565b61010084015160e085015161258491611091565b61258e9190613ea3565b905060006125a484600001518560200151612e72565b905060008213156126445760006125e68286604001518760a001518860c00151670de0b6b3a76400006125d79190613dd8565b89606001518a60800151612e8f565b90506125f28184612f29565b9050801561263e5761262b828660400151838860c00151670de0b6b3a764000061261c9190613dd8565b89606001518a60800151612f38565b8551869061263a908390613dd8565b9052505b50612700565b60008212156127005761265682613ec3565b9150600061268a8286604001518760c00151670de0b6b3a764000061267b9190613dd8565b88606001518960800151612f6c565b90506126968184612f29565b905080156126e2576126cf828660400151838860c00151670de0b6b3a76400006126c09190613dd8565b89606001518a60800151613002565b855186906126de908390613d82565b9052505b6126ec8184613dd8565b855186906126fb908390613d82565b905250505b600061272f856101000151670de0b6b3a764000061271e9190613dd8565b606087015160e08801519190611d7f565b61275d866101400151670de0b6b3a764000061274b9190613dd8565b60608801516101208901519190611d7f565b6127679190613ea3565b9050600081866000015161277b9190613edf565b90508560a001518112156127a25760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516127b49082613dd8565b9695505050505050565b60006110a683670de0b6b3a764000084611d7f565b6001546002546000916110e5916001600160801b0390911690600f0b612e72565b600061281587878761280e88670de0b6b3a7640000613dd8565b8787613097565b979650505050505050565b600061283782612831858888611d7f565b9061312b565b95945050505050565b60006110a661286c670de0b6b3a764000061285b8187613182565b6128659190613dd8565b8490613197565b61287e90670de0b6b3a7640000613d82565b670de0b6b3a7640000906127be565b60008061290b8561289c6127d3565b6128a69190613d82565b6001546128c4908790600160801b90046001600160801b0316613dd8565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612820565b909210949350505050565b6000806129608561130585817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612956818c6127be565b6113059190613dd8565b915061298c827f0000000000000000000000000000000000000000000000000000000000000000611091565b9050935093915050565b600081156129d6576129cf6129ab8487613d82565b6129b58587611091565b6129bf888a611091565b6129c99190613d82565b90613182565b9050612837565b8285036129e557506000612837565b6127b46129f28487613dd8565b6129fc8587611091565b612a06888a611091565b6129c99190613dd8565b6000612a3c7f000000000000000000000000000000000000000000000000000000000000000083611091565b6002546001546001600160801b03600160801b9092048216600f0b91612a63911685611091565b612a6d9190613ea3565b121592915050565b6000612815878787612a8f88670de0b6b3a7640000613dd8565b8787612f38565b600080808080612ae88887612ae18c611305612aba8d670de0b6b3a7640000613dd8565b7f000000000000000000000000000000000000000000000000000000000000000090611091565b9190611d7f565b9450612b14857f0000000000000000000000000000000000000000000000000000000000000000611091565b92506000612b35612b2d8a670de0b6b3a7640000613dd8565b8b9089611d7f565b9050612b61817f0000000000000000000000000000000000000000000000000000000000000000611091565b9450612b8d857f0000000000000000000000000000000000000000000000000000000000000000611091565b9250612b998385613d82565b915050945094509450945094565b6000818311612bb657816110a6565b5090919050565b600080612bd685612bce8887613197565b8a9190611d7f565b9050612be3888486611d7f565b612bed9082613d82565b905086811115612c0457612c018782613dd8565b91505b509695505050505050565b600060016001607f1b03198212801590612c30575060016001607f1b038213155b611dc35760405163a5353be560e01b815260040160405180910390fd5b6000818313612bb657816110a6565b60008183136106cc57826110a6565b6002546000908190612c8d90600160801b90046001600160801b0316846127be565b9050612cb97f000000000000000000000000000000000000000000000000000000000000000082613d82565b6001546001600160801b031611156106cc576001547f000000000000000000000000000000000000000000000000000000000000000090612d049083906001600160801b0316613dd8565b61187b9190613dd8565b6000808411612d1d5782612d28565b612d28838686611d7f565b905080600003612d38575061076b565b808583821115612d5357839150612d50878385611d7f565b90505b612d5c82611d9d565b60068054600090612d779084906001600160801b0316613e02565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612da481611d9d565b60068054601090612dc6908490600160801b90046001600160801b0316613e02565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061063481612df790613ec3565b6131ac565b600080670de0b6b3a7640000612e106110af565b612e1a9190613deb565b9050808311612e2a576000612e34565b612e348184613dd8565b915061187b612e6b670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613deb565b83906127be565b600080612e7f8385613ea3565b905060008112156110a657600080fd5b600080612e9f888887878761332e565b90506000612ebc612eb487612831878b613197565b86908661335d565b612ec69083613dd8565b9050670de0b6b3a76400008110612efa57612ef3612eec670de0b6b3a7640000886127be565b829061312b565b9050612f12565b612f0f612eec670de0b6b3a764000088613182565b90505b612f1c8882613dd8565b9998505050505050505050565b60008183116106cc57826110a6565b600080612f49888888888888613383565b909250905080612c0457604051637ac17d2560e01b815260040160405180910390fd5b600080612f7c8787878787613445565b90506000612fa7670de0b6b3a7640000612f9687876127be565b612fa09190613d82565b8390613182565b9050670de0b6b3a76400008110612fd457612fcd612eec670de0b6b3a764000088613182565b9050612fec565b612fe9612eec670de0b6b3a7640000886127be565b90505b612ff68188613dd8565b98975050505050505050565b6000806130128888878787613445565b905061302285612831888a613dd8565b9650600061303c84866130358b86613dd8565b919061335d565b9050670de0b6b3a7640000811061306957613062612eec670de0b6b3a764000088613182565b9050613081565b61307e612eec670de0b6b3a7640000886127be565b90505b61308b8185613182565b9050612f1c8982613dd8565b6000806130a78888878787613445565b90506130c1856128316130ba898c613d82565b8690611091565b97506130ce848985611d7f565b975060006130dc8983613dd8565b9050670de0b6b3a7640000811061310957613102612eec670de0b6b3a764000088613182565b9050613121565b61311e612eec670de0b6b3a7640000886127be565b90505b612f1c8189613dd8565b6000816000036131445750670de0b6b3a76400006110a9565b82600003613154575060006110a9565b8160006131608561346a565b9050818102613177670de0b6b3a764000082613f07565b90506127b48161367d565b60006110a683670de0b6b3a76400008461335d565b60006110a68383670de0b6b3a764000061335d565b806000036131b75750565b6001546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156132045760405163585fe6df60e11b815260040160405180910390fd5b60006132108383613edf565b90507f00000000000000000000000000000000000000000000000000000000000000008112156132535760405163585fe6df60e11b815260040160405180910390fd5b61325c81611d9d565b600180546001600160801b0319166001600160801b0392909216919091179055600254600090600f0b81811261329e57613297838286611d7f565b91506132be565b6132b26132aa82613ec3565b849086611d7f565b6132bb90613ec3565b91505b6132c782612c0f565b600280546001600160801b0319166001600160801b0392831617905560015461330a916115af91600160801b9004166133008785612e72565b612ae18787612e72565b600180546001600160801b03928316600160801b0292169190911790555050505050565b600061333a858561312b565b61335361334b86612831868b611091565b859085611d7f565b6127b49190613d82565b600082600019048411830215820261337457600080fd5b50910281810615159190040190565b60008060006133958989888888613445565b90506133a586612831898b613d82565b9750878110156133bc57600080925092505061343a565b60006133cd85876130358c86613dd8565b9050670de0b6b3a764000081106133fa576133f3612eec670de0b6b3a764000089613182565b9050613412565b61340f612eec670de0b6b3a7640000896127be565b90505b61341c8186613182565b9050808a111561343357613430818b613dd8565b93505b6001925050505b965096945050505050565b6000613451858561312b565b61335361346286612831868b613197565b85908561335d565b600080821361348c57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361369857506000919050565b680755bf798b4a1bf1e582126136c15760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156138475780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561387857600080fd5b825167ffffffffffffffff8082111561389057600080fd5b818501915085601f8301126138a457600080fd5b8151818111156138b6576138b661384f565b604051601f8201601f19908116603f011681019083821181831017156138de576138de61384f565b8160405282815288868487010111156138f657600080fd5b600093505b8284101561391857848401860151818501870152928501926138fb565b600086848301015280965050505050505092915050565b6001600160a01b038116811461394457600080fd5b50565b60006020828403121561395957600080fd5b81356110a68161392f565b8035801515811461397457600080fd5b919050565b60006020828403121561398b57600080fd5b6110a682613964565b6000606082840312156106cc57600080fd5b6000806000606084860312156139bb57600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156139e057600080fd5b6139ec86828701613994565b9150509250925092565b60008083601f840112613a0857600080fd5b50813567ffffffffffffffff811115613a2057600080fd5b6020830191508360208260051b850101111561108a57600080fd5b60008060008060008060808789031215613a5457600080fd5b8635613a5f8161392f565b95506020870135613a6f8161392f565b9450604087013567ffffffffffffffff80821115613a8c57600080fd5b613a988a838b016139f6565b90965094506060890135915080821115613ab157600080fd5b50613abe89828a016139f6565b979a9699509497509295939492505050565b60008060008060808587031215613ae657600080fd5b843593506020850135613af88161392f565b92506040850135613b088161392f565b9396929550929360600135925050565b60008060008060808587031215613b2e57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613b5a57600080fd5b613b6687828801613994565b91505092959194509250565b600060208284031215613b8457600080fd5b813567ffffffffffffffff811115613b9b57600080fd5b613ba784828501613994565b949350505050565b60008060008060808587031215613bc557600080fd5b843593506020850135613bd78161392f565b9250604085013591506060850135613bee8161392f565b939692955090935050565b60008060408385031215613c0c57600080fd5b8235613c178161392f565b915061108760208401613964565b600080600080600080600060e0888a031215613c4057600080fd5b8735613c4b8161392f565b96506020880135613c5b8161392f565b9550613c6960408901613964565b945060608801359350608088013560ff81168114613c8657600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080600060608486031215613cb857600080fd5b833592506020840135613cca8161392f565b929592945050506040919091013590565b600080600080600060a08688031215613cf357600080fd5b853594506020860135613d058161392f565b93506040860135613d158161392f565b9250606086013591506080860135613d2c8161392f565b809150509295509295909350565b600060208284031215613d4c57600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b600060018201613d7b57613d7b613d53565b5060010190565b808201808211156110a9576110a9613d53565b600060208284031215613da757600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b600082613dd357613dd3613dae565b500690565b818103818111156110a9576110a9613d53565b80820281158282048414176110a9576110a9613d53565b6001600160801b03818116838216019080821115613e2257613e22613d53565b5092915050565b6001600160801b03828116828216039080821115613e2257613e22613d53565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156110a9576110a9613d53565b600f82810b9082900b0360016001607f1b0319811260016001607f1b03821317156110a9576110a9613d53565b8181036000831280158383131683831282161715613e2257613e22613d53565b6000600160ff1b8201613ed857613ed8613d53565b5060000390565b8082018281126000831280158216821582161715613eff57613eff613d53565b505092915050565b600082613f1657613f16613dae565b600160ff1b821460001984141615613f3057613f30613d53565b50059056fea2646970667358221220df9d8afc881dba7a5a970ee1f4b82727a700401722030c1d624c66ffd006cef864736f6c63430008130033",
    "sourceMap": "880:3151:6:-:0;;;454:1:87;429:26;;1555:1690:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5110:17:40;;-1:-1:-1;;;;;5097:30:40;;;;;5656:28;;;1784:6:6;;1743:7;;1752:8;;1762;;1743:7;;5687:3:40;-1:-1:-1;5652:113:40;;;5713:41;;-1:-1:-1;;;5713:41:40;;;;;;;;;;;5652:113;5798:28;;;;5774:52;;5865:32;;;;5837:60;;5929:26;;;;5907:48;;6120:26;;;;6150:1;6120:31;6116:108;;6174:39;;-1:-1:-1;;;6174:39:40;;;;;;;;;;;6116:108;6255:26;;;;;6233:48;;6335:26;6308:24;;;;:53;;:127;;;6404:7;:26;;;6377:7;:24;;;:53;;;;:::i;:::-;:58;;6308:127;6291:224;;;6467:37;;-1:-1:-1;;;6467:37:40;;;;;;;;;;;6291:224;6544:24;;;;;6524:44;;6593:19;;;;6578:34;;6643:25;;;;6622:46;;;;6692:18;;;;6678:11;:32;;-1:-1:-1;;;;;;6678:32:40;-1:-1:-1;;;;;6678:32:40;;;;;;6736:20;;;;6720:36;;;6826:12;;;;:18;6847:4;-1:-1:-1;;6826:65:40;;;6887:4;6867:7;:12;;;:17;;;:24;6826:65;:111;;;;6933:4;6907:7;:12;;;:23;;;:30;6826:111;6809:202;;;6969:31;;-1:-1:-1;;;6969:31:40;;;;;;;;;;;6809:202;7032:12;;;;;:18;7020:30;;7071:12;;:17;;;;;7060:28;;7115:12;;:23;;;;;7098:40;;7215:21;;;;-1:-1:-1;;;;;7198:38:40;;;;;-1:-1:-1;;;7264:22:40;7246:40;;1869:10:38;;;;;;;;;;-1:-1:-1;;;1869:10:38;;;;1692:264;;1720:121;1692:264;;;4556:25:149;1859:21:38;4597:18:149;;;4590:34;1898:13:38;-1:-1:-1;4640:18:149;;4633:34;1937:4:38;-1:-1:-1;4683:18:149;;;4676:60;;;;1692:264:38;;;;;;;;;;4528:19:149;;;;1692:264:38;;;1669:297;;;;;1650:316;;2083:18:0;;::::2;;::::0;2111;::::2;;::::0;1489:14:5;;;;;;-1:-1:-1;2306:16:6::2;:14;:16::i;:::-;2277:7;:25;;;:45;2273:121;;2345:38;;-1:-1:-1::0;;;2345:38:6::2;;;;;;;;;;;2273:121;2446:5;;-1:-1:-1::0;;;;;2437:21:6::2;;:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;2407:53:6::2;2415:7;:17;;;-1:-1:-1::0;;;;;2407:53:6::2;;2403:121;;2483:30;;-1:-1:-1::0;;;2483:30:6::2;;;;;;;;;;;2403:121;2612:17:::0;;2646:5:::2;::::0;2612:60:::2;::::0;-1:-1:-1;;;2612:60:6;;-1:-1:-1;;;;;5203:32:149;;;2612:60:6::2;::::0;::::2;5185:51:149::0;-1:-1:-1;;5252:18:149;;;5245:34;2612:25:6;::::2;::::0;::::2;::::0;5158:18:149;;2612:60:6::2;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2607:127;;2695:28;;-1:-1:-1::0;;;2695:28:6::2;;;;;;;;;;;2607:127;2894:9;2889:350;2913:8;:15;2909:1;:19;2889:350;;;2949:14;2966:8;2975:1;2966:11;;;;;;;;:::i;:::-;;;;;;;2949:28;;3039:5;;-1:-1:-1::0;;;;;3012:33:6::2;3020:6;-1:-1:-1::0;;;;;3012:33:6::2;;:91;;;;3092:10;;-1:-1:-1::0;;;;;3065:38:6::2;3073:6;-1:-1:-1::0;;;;;3065:38:6::2;;3012:91;2991:197;;;3143:30;;-1:-1:-1::0;;;3143:30:6::2;;;;;;;;;;;2991:197;-1:-1:-1::0;;;;;3201:20:6::2;;::::0;;;:12:::2;:20;::::0;;;;:27;;-1:-1:-1;;3201:27:6::2;3224:4;3201:27;::::0;;2930:3;::::2;::::0;::::2;:::i;:::-;;;;2889:350;;;;1555:1690:::0;;;;;880:3151;;4944:117:5;5028:5;;:26;;-1:-1:-1;;;5028:26:5;;150:4:42;5028:26:5;;;6087:25:149;5002:7:5;;-1:-1:-1;;;;;5028:21:5;;;;6060:18:149;;5028:26:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5021:33;;4944:117;:::o;14:127:149:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:250;213:2;207:9;255:6;243:19;;-1:-1:-1;;;;;277:34:149;;313:22;;;274:62;271:88;;;339:18;;:::i;:::-;375:2;368:22;146:250;:::o;401:139::-;-1:-1:-1;;;;;484:31:149;;474:42;;464:70;;530:1;527;520:12;464:70;401:139;:::o;545:154::-;632:13;;654:39;632:13;654:39;:::i;:::-;545:154;;;:::o;704:525::-;766:5;814:4;802:9;797:3;793:19;789:30;786:50;;;832:1;829;822:12;786:50;865:2;859:9;907:4;895:17;;-1:-1:-1;;;;;927:34:149;;963:22;;;924:62;921:88;;;989:18;;:::i;:::-;1029:10;1025:2;1018:22;;1058:6;1049:15;;1094:9;1088:16;1080:6;1073:32;1159:2;1148:9;1144:18;1138:25;1133:2;1125:6;1121:15;1114:50;1218:2;1207:9;1203:18;1197:25;1192:2;1184:6;1180:15;1173:50;;704:525;;;;:::o;1234:982::-;1299:5;1352:3;1345:4;1337:6;1333:17;1329:27;1319:55;;1370:1;1367;1360:12;1319:55;1393:13;;1425:4;-1:-1:-1;;;;;1478:10:149;;;1475:36;;;1491:18;;:::i;:::-;1537:2;1534:1;1530:10;1569:2;1563:9;1632:2;1628:7;1623:2;1619;1615:11;1611:25;1603:6;1599:38;1687:6;1675:10;1672:22;1667:2;1655:10;1652:18;1649:46;1646:72;;;1698:18;;:::i;:::-;1734:2;1727:22;1784:18;;;1860:15;;;1856:24;;;1818:15;;;;-1:-1:-1;1892:15:149;;;1889:35;;;1920:1;1917;1910:12;1889:35;1956:2;1948:6;1944:15;1933:26;;1968:218;1984:6;1979:3;1976:15;1968:218;;;2057:3;2051:10;2074:39;2107:5;2074:39;:::i;:::-;2126:18;;2164:12;;;;2001;;;;1968:218;;;2204:6;1234:982;-1:-1:-1;;;;;;;1234:982:149:o;2221:1885::-;2397:6;2405;2413;2421;2429;2473:9;2464:7;2460:23;2503:3;2499:2;2495:12;2492:32;;;2520:1;2517;2510:12;2492:32;2543:6;2569:2;2565;2561:11;2558:31;;;2585:1;2582;2575:12;2558:31;2611:17;;:::i;:::-;2598:30;;2651:48;2689:9;2651:48;:::i;:::-;2644:5;2637:63;2732:57;2785:2;2774:9;2770:18;2732:57;:::i;:::-;2727:2;2720:5;2716:14;2709:81;2843:2;2832:9;2828:18;2822:25;2817:2;2810:5;2806:14;2799:49;2901:2;2890:9;2886:18;2880:25;2875:2;2868:5;2864:14;2857:49;2960:3;2949:9;2945:19;2939:26;2933:3;2926:5;2922:15;2915:51;3020:3;3009:9;3005:19;2999:26;2993:3;2986:5;2982:15;2975:51;3080:3;3069:9;3065:19;3059:26;3053:3;3046:5;3042:15;3035:51;3140:3;3129:9;3125:19;3119:26;3113:3;3106:5;3102:15;3095:51;3165:3;3221:2;3210:9;3206:18;3200:25;3195:2;3188:5;3184:14;3177:49;;3245:3;3301:2;3290:9;3286:18;3280:25;3275:2;3268:5;3264:14;3257:49;;3325:3;3360:57;3413:2;3402:9;3398:18;3360:57;:::i;:::-;3344:14;;;3337:81;3437:3;3472:57;3510:18;;;3472:57;:::i;:::-;3456:14;;;3449:81;3549:3;3584:62;3638:7;3618:18;;;3584:62;:::i;:::-;3579:2;3572:5;3568:14;3561:86;;3666:5;3656:15;;3690:57;3743:2;3732:9;3728:18;3690:57;:::i;:::-;3680:67;;;;3766:58;3819:3;3808:9;3804:19;3766:58;:::i;:::-;3756:68;;3843:58;3896:3;3885:9;3881:19;3843:58;:::i;:::-;3945:3;3930:19;;3924:26;3833:68;;-1:-1:-1;;;;;;3962:30:149;;3959:50;;;4005:1;4002;3995:12;3959:50;4028:72;4092:7;4083:6;4072:9;4068:22;4028:72;:::i;:::-;4018:82;;;2221:1885;;;;;;;;:::o;4111:209::-;4143:1;4169;4159:132;;4213:10;4208:3;4204:20;4201:1;4194:31;4248:4;4245:1;4238:15;4276:4;4273:1;4266:15;4159:132;-1:-1:-1;4305:9:149;;4111:209::o;4747:259::-;4817:6;4870:2;4858:9;4849:7;4845:23;4841:32;4838:52;;;4886:1;4883;4876:12;4838:52;4918:9;4912:16;4937:39;4970:5;4937:39;:::i;:::-;4995:5;4747:259;-1:-1:-1;;;4747:259:149:o;5290:277::-;5357:6;5410:2;5398:9;5389:7;5385:23;5381:32;5378:52;;;5426:1;5423;5416:12;5378:52;5458:9;5452:16;5511:5;5504:13;5497:21;5490:5;5487:32;5477:60;;5533:1;5530;5523:12;5572:127;5633:10;5628:3;5624:20;5621:1;5614:31;5664:4;5661:1;5654:15;5688:4;5685:1;5678:15;5704:232;5743:3;5764:17;;;5761:140;;5823:10;5818:3;5814:20;5811:1;5804:31;5858:4;5855:1;5848:15;5886:4;5883:1;5876:15;5761:140;-1:-1:-1;5928:1:149;5917:13;;5704:232::o;6123:184::-;6193:6;6246:2;6234:9;6225:7;6221:23;6217:32;6214:52;;;6262:1;6259;6252:12;6214:52;-1:-1:-1;6285:16:149;;6123:184;-1:-1:-1;6123:184:149:o;:::-;880:3151:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052600436106101665760003560e01c806377d05ff4116100d1578063cba2e58d1161008a578063ded0623111610064578063ded062311461037e578063e44808bc14610511578063eac3e79914610531578063ed64bab21461056557610166565b8063cba2e58d146104eb578063cbc13434146102b8578063dbbe8070146104fe57610166565b806377d05ff41461046f5780639032c726146104825780639aa68462146104a25780639cd241af146104b0578063a22cb4651461044f578063ab033ea9146104d057610166565b806329b23fc11161012357806329b23fc11461037e57806330adf81f146103ac5780633644e515146103e05780633e691db9146104145780634ed2d6ac146104345780637180c8ca1461044f57610166565b806301681a621461027657806302329a2914610298578063074a6de9146102b857806317fad7fc146102f25780631c0f12b61461031257806321b57d5314610332575b34801561017257600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516101b5929190613808565b600060405180830381855af49150503d80600081146101f0576040519150601f19603f3d011682016040523d82523d6000602084013e6101f5565b606091505b5091509150811561021957604051638bb0a34b60e01b815260040160405180910390fd5b600061022482613818565b90506001600160e01b03198116636e64089360e11b1461024657815160208301fd5b81516003198101600484019081529261026791810160200190602401613865565b80519650602001945050505050f35b34801561028257600080fd5b50610296610291366004613947565b610580565b005b3480156102a457600080fd5b506102966102b3366004613979565b6105ad565b3480156102c457600080fd5b506102d86102d33660046139a6565b6105d6565b604080519283526020830191909152015b60405180910390f35b3480156102fe57600080fd5b5061029661030d366004613a3b565b61060b565b34801561031e57600080fd5b5061029661032d366004613ad0565b61063d565b34801561033e57600080fd5b506103667f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016102e9565b34801561038a57600080fd5b5061039e610399366004613b18565b61066d565b6040519081526020016102e9565b3480156103b857600080fd5b5061039e7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b3480156103ec57600080fd5b5061039e7f000000000000000000000000000000000000000000000000000000000000000081565b34801561042057600080fd5b5061039e61042f366004613b72565b6106a1565b34801561044057600080fd5b5061029661032d366004613baf565b34801561045b57600080fd5b5061029661046a366004613bf9565b6106d2565b61039e61047d3660046139a6565b610700565b34801561048e57600080fd5b5061029661049d366004613c25565b610733565b61039e610399366004613b18565b3480156104bc57600080fd5b506102966104cb366004613ca3565b610742565b3480156104dc57600080fd5b506102966102b3366004613947565b6102d86104f9366004613b18565b610771565b6102d861050c366004613b18565b61078d565b34801561051d57600080fd5b5061029661052c366004613cdb565b61079c565b34801561053d57600080fd5b506103667f000000000000000000000000000000000000000000000000000000000000000081565b34801561057157600080fd5b50610296610291366004613d3a565b6105a97f00000000000000000000000000000000000000000000000000000000000000006107cd565b5050565b6105a97f00000000000000000000000000000000000000000000000000000000000000006107cd565b6000806106027f00000000000000000000000000000000000000000000000000000000000000006107cd565b50935093915050565b6106347f00000000000000000000000000000000000000000000000000000000000000006107cd565b50505050505050565b6106667f00000000000000000000000000000000000000000000000000000000000000006107cd565b5050505050565b60006106987f00000000000000000000000000000000000000000000000000000000000000006107cd565b50949350505050565b60006106cc7f00000000000000000000000000000000000000000000000000000000000000006107cd565b50919050565b6106fb7f00000000000000000000000000000000000000000000000000000000000000006107cd565b505050565b600061072b7f00000000000000000000000000000000000000000000000000000000000000006107cd565b509392505050565b61063487878787878787610847565b61076b7f00000000000000000000000000000000000000000000000000000000000000006107cd565b50505050565b60008061078086868686610a96565b9150915094509492505050565b60008061078086868686610ce7565b6107c57f00000000000000000000000000000000000000000000000000000000000000006107cd565b505050505050565b6060600080836001600160a01b03166000366040516107ed929190613808565b600060405180830381855af49150503d8060008114610828576040519150601f19603f3d011682016040523d82523d6000602084013e61082d565b606091505b50915091508161083f57805160208201fd5b805160208201f35b834211156108685760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b03871661088f5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156109bb573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146109f957604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600f602052604081208054909190610a1f90613d69565b909155506001600160a01b038981166000818152600d60209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b600080600054600114610add5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064015b60405180910390fd5b6002600055600554610100900460ff1615610b0b576040516313d0ff5960e31b815260040160405180910390fd5b610b13610f37565b600080610b208886610f58565b90925090506000610b318383611091565b90507f0000000000000000000000000000000000000000000000000000000000000000811015610b745760405163211ddda360e11b815260040160405180910390fd5b86821015610b95576040516342af972b60e01b815260040160405180910390fd5b6000610b9f6110af565b9050610bab81846110ea565b506000806000610bbb87876113fa565b909a5091945092509050878c1115610be65760405163c972651760e01b815260040160405180910390fd5b8060096000828254610bf89190613d82565b90915550610c2890507f000000000000000000000000000000000000000000000000000000000000000085613d82565b9850610c3883898489888e611574565b6000610c4560018b611773565b9050610c5e81610c5860208e018e613947565b8b6117a8565b8d8b8a83610c6f6020840184613947565b6001600160a01b03167f8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda6868f610ca5878f88611850565b60408051928352602083019190915281018e90526060810185905260800160405180910390a39a50505050505050505050506001600055909590945092505050565b600080600054600114610d295760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610ad4565b6002600055600554610100900460ff1615610d57576040516313d0ff5960e31b815260040160405180910390fd5b610d5f610f37565b7f0000000000000000000000000000000000000000000000000000000000000000861015610da05760405163211ddda360e11b815260040160405180910390fd5b6000610daa611882565b905084811015610dcd576040516342af972b60e01b815260040160405180910390fd5b6000610dd76110af565b90506000610de582846110ea565b90506000610e137f000000000000000000000000000000000000000000000000000000000000000084613d82565b90506000806000610e258d8887611915565b600980549296509294509250829190600090610e42908490613d82565b92505081905550506000610e5782888c611a47565b9050808c1015610e7a5760405163c972651760e01b815260040160405180910390fd5b610e84818b610f58565b5050610e938d83858a88611a6f565b6000610ea0600286611773565b90508d610eba82610eb460208f018f613947565b836117a8565b81610ec860208e018e613947565b60408051898152602081018890529081018c9052606081018490526001600160a01b0391909116907f80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef959060800160405180910390a350506001600055929c929b50919950505050505050505050565b3415610f5657604051631574f9f360e01b815260040160405180910390fd5b565b600080610f6b6040840160208501613979565b1561104757610fa56001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333087611cfc565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af1158015611012573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110369190613d95565b9150611040611882565b905061108a565b83915061107f6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085611cfc565b611087611882565b90505b9250929050565b60006110a68383670de0b6b3a7640000611d7f565b90505b92915050565b60006110db7f000000000000000000000000000000000000000000000000000000000000000042613dc4565b6110e59042613dd8565b905090565b600082815260076020526040812080546001600160801b031615158061110f57504284115b1561112557546001600160801b031690506110a9565b61112e83611d9d565b81546001600160801b0319166001600160801b039190911617815560006007816111787f000000000000000000000000000000000000000000000000000000000000000088613dd8565b815260208101919091526040016000908120546001600160801b031691506111a1600287611773565b6000818152600c602052604081205491925081156111fa576000806111c9848a886000611dc7565b9150915080600960008282546111df9190613d82565b909155506111f3905084600084808e611e95565b6001925050505b600061120760018a611773565b6000818152600c602052604090205490915080156112625760008061122f838c8a6001611dc7565b9150915080600960008282546112459190613d82565b909155508c905061125a84600085808561200f565b600195505050505b82156112e05760006112947f00000000000000000000000000000000000000000000000000000000000000008c613dd8565b600081815260076020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b926112d4928492919004900b6121dc565b6112dd8b612303565b50505b6000808a116112f057600061130b565b61130b8a6113056113008d6123ea565b612550565b90611091565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b03909216916113769190613d82565b6113809190613dd8565b9050600081156113995761139483836127be565b61139c565b60005b604080518e8152602081018a9052908101869052606081018290529091508d907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a250999b9a5050505050505050505050565b60008060008061146761140b6127d3565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006127f4565b925060006114d06114766127d3565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612820565b90506115068785611501847f0000000000000000000000000000000000000000000000000000000000000000612840565b61288d565b156115245760405163512095c760e01b815260040160405180910390fd5b60008061153289848a612916565b90925090506115418287613dd8565b945061154d8186613d82565b955061155a81848a611d7f565b9350611566848a613dd8565b965050505092959194509250565b6003546001600160801b03166115b46115af8261159985670de0b6b3a7640000613deb565b6004546001600160801b031691908a6001612996565b611d9d565b600480546001600160801b0319166001600160801b03929092169190911790556115dd87611d9d565b600180546000906115f89084906001600160801b0316613e02565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061162585611d9d565b60018054601090611647908490600160801b90046001600160801b0316613e29565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061167486611d9d565b61167e9082613e02565b600380546001600160801b0319166001600160801b0383161790556000848152600760205260408120805492935091600160801b9004600f0b906116da6116c58b89611091565b6116d08b6002613deb565b6115af9190613dd8565b8354909150819084906010906116fb908490600160801b9004600f0b613e49565b82546001600160801b039182166101009390930a928302919092021990911617905550825461173890600f84810b91600160801b9004900b6121dc565b61174187612a10565b61175e576040516318846de960e01b815260040160405180910390fd5b61176787612303565b50505050505050505050565b60006001600160f81b0382111561179d5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906117da908490613d82565b90915550506000838152600c6020526040812080548392906117fd908490613d82565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b60006118626040830160208401613979565b1561186e57508261187b565b6118788484611091565b90505b9392505050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa1580156118f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110e59190613d95565b60008060006119816119256127d3565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000612a75565b91508561198e8387611091565b11156119ad5760405163512095c760e01b815260040160405180910390fd5b60008060006119bd6114766127d3565b90506119d389670de0b6b3a7640000838b612a96565b5092955093506119e7915083905084613dd8565b6119f19086613dd8565b9450611a37886113058b611a05868a613dd8565b8b611a108e82612ba7565b8e7f0000000000000000000000000000000000000000000000000000000000000000612bbd565b9550909250505093509350939050565b6000611a596040830160208401613979565b15611a6557508261187b565b61187884846127be565b600354611ab9906115af90600160801b90046001600160801b0316611a9c84670de0b6b3a7640000613deb565b600454600160801b90046001600160801b03169190896001612996565b600480546001600160801b03928316600160801b0292169190911790556000611ae184611d9d565b600154611af791906001600160801b0316613e29565b600180546001600160801b0319166001600160801b0383161790559050611b1d86611d9d565b60018054601090611b3f908490600160801b90046001600160801b0316613e02565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611b6c86611d9d565b60038054601090611b8e908490600160801b90046001600160801b0316613e02565b82546101009290920a6001600160801b03818102199093169183160217909155600254600154600f9190910b911612159050611bdd5760405163585fe6df60e11b815260040160405180910390fd5b6000611be76110af565b600081815260076020526040902054909150600160801b9004600f0b611c2d7f000000000000000000000000000000000000000000000000000000000000000088613dc4565b611c379088613dd8565b96506000611c458989613d82565b9050611c5081611d9d565b60008481526007602052604090208054601090611c78908490600160801b9004600f0b613e76565b82546001600160801b039182166101009390930a928302919092021990911617905550600083815260076020526040902054611cc290600f84810b91600160801b9004900b6121dc565b611ccb86612a10565b611ce8576040516318846de960e01b815260040160405180910390fd5b611cf186612303565b505050505050505050565b60006040516323b872dd60e01b81528460048201528360248201528260448201526020600060648360008a5af13d15601f3d11600160005114161716915050806106665760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610ad4565b6000826000190484118302158202611d9657600080fd5b5091020490565b6000600160801b8210611dc357604051630f0af95160e11b815260040160405180910390fd5b5090565b600080611dd486866127be565b91506000611e02837f0000000000000000000000000000000000000000000000000000000000000000611091565b9050611e2e817f0000000000000000000000000000000000000000000000000000000000000000611091565b91508315611e5157611e408282613dd8565b611e4a9084613dd8565b9250611e68565b611e5b8282613dd8565b611e659084613d82565b92505b84861015611e8b57611e7b838787611d7f565b9250611e88828787611d7f565b91505b5094509492505050565b600354600160801b90046001600160801b0316611ede6115af82611ec185670de0b6b3a7640000613deb565b600454600160801b90046001600160801b031691908a6000612996565b600480546001600160801b03928316600160801b029216919091179055611f0486611d9d565b611f0e9082613e29565b600380546001600160801b03928316600160801b029216919091179055611f3484611d9d565b60018054600090611f4f9084906001600160801b0316613e02565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611f7c83612c0f565b60028054600090611f91908490600f0b613e49565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611fc185611d9d565b60018054601090611fe3908490600160801b90046001600160801b0316613e29565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6003546001600160801b031661204a6115af8261203485670de0b6b3a7640000613deb565b6004546001600160801b031691908a6000612996565b600480546001600160801b0319166001600160801b039290921691909117905561207386611d9d565b61207d9082613e29565b600380546001600160801b0319166001600160801b0392909216919091179055506120a783611d9d565b600180546000906120c29084906001600160801b0316613e29565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506120ef82612c0f565b60028054600090612104908490600f0b613e76565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061213484611d9d565b60018054601090612156908490600160801b90046001600160801b0316613e02565b82546101009290920a6001600160801b038181021990931691831602179091556001547f00000000000000000000000000000000000000000000000000000000000000009116109050806121be5750600254600154600f9190910b6001600160801b03909116125b156106665760405163585fe6df60e11b815260040160405180910390fd5b80821380156121ec575060008212155b1561227f5760006121fd8282612c4d565b6122079084613ea3565b6002549091506122349061222f908390600160801b90046001600160801b0316600f0b612c5c565b612c0f565b60028054601090612256908490600160801b90046001600160801b0316613e29565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b818113156105a957600082126122f55761229882612c0f565b6122a182612c0f565b6122ab9190613e76565b600280546010906122cd908490600160801b90046001600160801b0316613e02565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b6122ab61222f826000612c4d565b600c6020527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854600654600360f81b60009081527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d549091612370916001600160801b0390911690613dd8565b9050600061237e8284613d82565b9050600061238e611300866123ea565b9050600061239d858385611d7f565b90506000806123ab88612c6b565b9050828111156123c2576123bf8382613dd8565b91505b60008211806123cf575083155b156123e0576123e082858789612d0e565b5050505050505050565b61244760405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600254600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600354821660e082015260045490916101008301916125169116612dfc565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261254892900416612dfc565b905292915050565b60008061257083610140015184610120015161109190919063ffffffff16565b61010084015160e085015161258491611091565b61258e9190613ea3565b905060006125a484600001518560200151612e72565b905060008213156126445760006125e68286604001518760a001518860c00151670de0b6b3a76400006125d79190613dd8565b89606001518a60800151612e8f565b90506125f28184612f29565b9050801561263e5761262b828660400151838860c00151670de0b6b3a764000061261c9190613dd8565b89606001518a60800151612f38565b8551869061263a908390613dd8565b9052505b50612700565b60008212156127005761265682613ec3565b9150600061268a8286604001518760c00151670de0b6b3a764000061267b9190613dd8565b88606001518960800151612f6c565b90506126968184612f29565b905080156126e2576126cf828660400151838860c00151670de0b6b3a76400006126c09190613dd8565b89606001518a60800151613002565b855186906126de908390613d82565b9052505b6126ec8184613dd8565b855186906126fb908390613d82565b905250505b600061272f856101000151670de0b6b3a764000061271e9190613dd8565b606087015160e08801519190611d7f565b61275d866101400151670de0b6b3a764000061274b9190613dd8565b60608801516101208901519190611d7f565b6127679190613ea3565b9050600081866000015161277b9190613edf565b90508560a001518112156127a25760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516127b49082613dd8565b9695505050505050565b60006110a683670de0b6b3a764000084611d7f565b6001546002546000916110e5916001600160801b0390911690600f0b612e72565b600061281587878761280e88670de0b6b3a7640000613dd8565b8787613097565b979650505050505050565b600061283782612831858888611d7f565b9061312b565b95945050505050565b60006110a661286c670de0b6b3a764000061285b8187613182565b6128659190613dd8565b8490613197565b61287e90670de0b6b3a7640000613d82565b670de0b6b3a7640000906127be565b60008061290b8561289c6127d3565b6128a69190613d82565b6001546128c4908790600160801b90046001600160801b0316613dd8565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612820565b909210949350505050565b6000806129608561130585817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612956818c6127be565b6113059190613dd8565b915061298c827f0000000000000000000000000000000000000000000000000000000000000000611091565b9050935093915050565b600081156129d6576129cf6129ab8487613d82565b6129b58587611091565b6129bf888a611091565b6129c99190613d82565b90613182565b9050612837565b8285036129e557506000612837565b6127b46129f28487613dd8565b6129fc8587611091565b612a06888a611091565b6129c99190613dd8565b6000612a3c7f000000000000000000000000000000000000000000000000000000000000000083611091565b6002546001546001600160801b03600160801b9092048216600f0b91612a63911685611091565b612a6d9190613ea3565b121592915050565b6000612815878787612a8f88670de0b6b3a7640000613dd8565b8787612f38565b600080808080612ae88887612ae18c611305612aba8d670de0b6b3a7640000613dd8565b7f000000000000000000000000000000000000000000000000000000000000000090611091565b9190611d7f565b9450612b14857f0000000000000000000000000000000000000000000000000000000000000000611091565b92506000612b35612b2d8a670de0b6b3a7640000613dd8565b8b9089611d7f565b9050612b61817f0000000000000000000000000000000000000000000000000000000000000000611091565b9450612b8d857f0000000000000000000000000000000000000000000000000000000000000000611091565b9250612b998385613d82565b915050945094509450945094565b6000818311612bb657816110a6565b5090919050565b600080612bd685612bce8887613197565b8a9190611d7f565b9050612be3888486611d7f565b612bed9082613d82565b905086811115612c0457612c018782613dd8565b91505b509695505050505050565b600060016001607f1b03198212801590612c30575060016001607f1b038213155b611dc35760405163a5353be560e01b815260040160405180910390fd5b6000818313612bb657816110a6565b60008183136106cc57826110a6565b6002546000908190612c8d90600160801b90046001600160801b0316846127be565b9050612cb97f000000000000000000000000000000000000000000000000000000000000000082613d82565b6001546001600160801b031611156106cc576001547f000000000000000000000000000000000000000000000000000000000000000090612d049083906001600160801b0316613dd8565b61187b9190613dd8565b6000808411612d1d5782612d28565b612d28838686611d7f565b905080600003612d38575061076b565b808583821115612d5357839150612d50878385611d7f565b90505b612d5c82611d9d565b60068054600090612d779084906001600160801b0316613e02565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612da481611d9d565b60068054601090612dc6908490600160801b90046001600160801b0316613e02565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061063481612df790613ec3565b6131ac565b600080670de0b6b3a7640000612e106110af565b612e1a9190613deb565b9050808311612e2a576000612e34565b612e348184613dd8565b915061187b612e6b670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613deb565b83906127be565b600080612e7f8385613ea3565b905060008112156110a657600080fd5b600080612e9f888887878761332e565b90506000612ebc612eb487612831878b613197565b86908661335d565b612ec69083613dd8565b9050670de0b6b3a76400008110612efa57612ef3612eec670de0b6b3a7640000886127be565b829061312b565b9050612f12565b612f0f612eec670de0b6b3a764000088613182565b90505b612f1c8882613dd8565b9998505050505050505050565b60008183116106cc57826110a6565b600080612f49888888888888613383565b909250905080612c0457604051637ac17d2560e01b815260040160405180910390fd5b600080612f7c8787878787613445565b90506000612fa7670de0b6b3a7640000612f9687876127be565b612fa09190613d82565b8390613182565b9050670de0b6b3a76400008110612fd457612fcd612eec670de0b6b3a764000088613182565b9050612fec565b612fe9612eec670de0b6b3a7640000886127be565b90505b612ff68188613dd8565b98975050505050505050565b6000806130128888878787613445565b905061302285612831888a613dd8565b9650600061303c84866130358b86613dd8565b919061335d565b9050670de0b6b3a7640000811061306957613062612eec670de0b6b3a764000088613182565b9050613081565b61307e612eec670de0b6b3a7640000886127be565b90505b61308b8185613182565b9050612f1c8982613dd8565b6000806130a78888878787613445565b90506130c1856128316130ba898c613d82565b8690611091565b97506130ce848985611d7f565b975060006130dc8983613dd8565b9050670de0b6b3a7640000811061310957613102612eec670de0b6b3a764000088613182565b9050613121565b61311e612eec670de0b6b3a7640000886127be565b90505b612f1c8189613dd8565b6000816000036131445750670de0b6b3a76400006110a9565b82600003613154575060006110a9565b8160006131608561346a565b9050818102613177670de0b6b3a764000082613f07565b90506127b48161367d565b60006110a683670de0b6b3a76400008461335d565b60006110a68383670de0b6b3a764000061335d565b806000036131b75750565b6001546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156132045760405163585fe6df60e11b815260040160405180910390fd5b60006132108383613edf565b90507f00000000000000000000000000000000000000000000000000000000000000008112156132535760405163585fe6df60e11b815260040160405180910390fd5b61325c81611d9d565b600180546001600160801b0319166001600160801b0392909216919091179055600254600090600f0b81811261329e57613297838286611d7f565b91506132be565b6132b26132aa82613ec3565b849086611d7f565b6132bb90613ec3565b91505b6132c782612c0f565b600280546001600160801b0319166001600160801b0392831617905560015461330a916115af91600160801b9004166133008785612e72565b612ae18787612e72565b600180546001600160801b03928316600160801b0292169190911790555050505050565b600061333a858561312b565b61335361334b86612831868b611091565b859085611d7f565b6127b49190613d82565b600082600019048411830215820261337457600080fd5b50910281810615159190040190565b60008060006133958989888888613445565b90506133a586612831898b613d82565b9750878110156133bc57600080925092505061343a565b60006133cd85876130358c86613dd8565b9050670de0b6b3a764000081106133fa576133f3612eec670de0b6b3a764000089613182565b9050613412565b61340f612eec670de0b6b3a7640000896127be565b90505b61341c8186613182565b9050808a111561343357613430818b613dd8565b93505b6001925050505b965096945050505050565b6000613451858561312b565b61335361346286612831868b613197565b85908561335d565b600080821361348c57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361369857506000919050565b680755bf798b4a1bf1e582126136c15760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156138475780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561387857600080fd5b825167ffffffffffffffff8082111561389057600080fd5b818501915085601f8301126138a457600080fd5b8151818111156138b6576138b661384f565b604051601f8201601f19908116603f011681019083821181831017156138de576138de61384f565b8160405282815288868487010111156138f657600080fd5b600093505b8284101561391857848401860151818501870152928501926138fb565b600086848301015280965050505050505092915050565b6001600160a01b038116811461394457600080fd5b50565b60006020828403121561395957600080fd5b81356110a68161392f565b8035801515811461397457600080fd5b919050565b60006020828403121561398b57600080fd5b6110a682613964565b6000606082840312156106cc57600080fd5b6000806000606084860312156139bb57600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156139e057600080fd5b6139ec86828701613994565b9150509250925092565b60008083601f840112613a0857600080fd5b50813567ffffffffffffffff811115613a2057600080fd5b6020830191508360208260051b850101111561108a57600080fd5b60008060008060008060808789031215613a5457600080fd5b8635613a5f8161392f565b95506020870135613a6f8161392f565b9450604087013567ffffffffffffffff80821115613a8c57600080fd5b613a988a838b016139f6565b90965094506060890135915080821115613ab157600080fd5b50613abe89828a016139f6565b979a9699509497509295939492505050565b60008060008060808587031215613ae657600080fd5b843593506020850135613af88161392f565b92506040850135613b088161392f565b9396929550929360600135925050565b60008060008060808587031215613b2e57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613b5a57600080fd5b613b6687828801613994565b91505092959194509250565b600060208284031215613b8457600080fd5b813567ffffffffffffffff811115613b9b57600080fd5b613ba784828501613994565b949350505050565b60008060008060808587031215613bc557600080fd5b843593506020850135613bd78161392f565b9250604085013591506060850135613bee8161392f565b939692955090935050565b60008060408385031215613c0c57600080fd5b8235613c178161392f565b915061108760208401613964565b600080600080600080600060e0888a031215613c4057600080fd5b8735613c4b8161392f565b96506020880135613c5b8161392f565b9550613c6960408901613964565b945060608801359350608088013560ff81168114613c8657600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080600060608486031215613cb857600080fd5b833592506020840135613cca8161392f565b929592945050506040919091013590565b600080600080600060a08688031215613cf357600080fd5b853594506020860135613d058161392f565b93506040860135613d158161392f565b9250606086013591506080860135613d2c8161392f565b809150509295509295909350565b600060208284031215613d4c57600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b600060018201613d7b57613d7b613d53565b5060010190565b808201808211156110a9576110a9613d53565b600060208284031215613da757600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b600082613dd357613dd3613dae565b500690565b818103818111156110a9576110a9613d53565b80820281158282048414176110a9576110a9613d53565b6001600160801b03818116838216019080821115613e2257613e22613d53565b5092915050565b6001600160801b03828116828216039080821115613e2257613e22613d53565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156110a9576110a9613d53565b600f82810b9082900b0360016001607f1b0319811260016001607f1b03821317156110a9576110a9613d53565b8181036000831280158383131683831282161715613e2257613e22613d53565b6000600160ff1b8201613ed857613ed8613d53565b5060000390565b8082018281126000831280158216821582161715613eff57613eff613d53565b505092915050565b600082613f1657613f16613dae565b600160ff1b821460001984141615613f3057613f30613d53565b50059056fea2646970667358221220df9d8afc881dba7a5a970ee1f4b82727a700401722030c1d624c66ffd006cef864736f6c63430008130033",
    "sourceMap": "880:3151:6:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2519:12:0;2673;2687:23;2714:7;-1:-1:-1;;;;;2714:20:0;2735:5;;2714:27;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2672:69;;;;2755:7;2751:76;;;2785:31;;-1:-1:-1;;;2785:31:0;;;;;;;;;;;2751:76;2836:15;2854:18;2861:10;2854:18;:::i;:::-;2836:36;-1:-1:-1;;;;;;;2886:43:0;;-1:-1:-1;;;2886:43:0;2882:160;;3006:10;3000:17;2995:2;2983:10;2979:19;2972:46;2882:160;3243:17;;-1:-1:-1;;3239:25:0;;3262:1;3217:20;;3210:55;;;3217:20;3344:31;;;;;;;;;;:::i;:::-;880:3151:6;;;-1:-1:-1;880:3151:6;;;-1:-1:-1;;;;;880:3151:6;3962:67;;;;;;;;;;-1:-1:-1;3962:67:6;;;;;:::i;:::-;;:::i;:::-;;7607:65:0;;;;;;;;;;-1:-1:-1;7607:65:0;;;;;:::i;:::-;;:::i;6895:181::-;;;;;;;;;;-1:-1:-1;6895:181:0;;;;;:::i;:::-;;:::i;:::-;;;;3434:25:149;;;3490:2;3475:18;;3468:34;;;;3407:18;6895:181:0;;;;;;;;9157:167;;;;;;;;;;-1:-1:-1;9157:167:0;;;;;:::i;:::-;;:::i;8078:102::-;;;;;;;;;;-1:-1:-1;8078:102:0;;;;;:::i;:::-;;:::i;1469:32::-;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5666:32:149;;;5648:51;;5636:2;5621:18;1469:32:0;5502:203:149;5641:177:0;;;;;;;;;;-1:-1:-1;5641:177:0;;;;;:::i;:::-;;:::i;:::-;;;6422:25:149;;;6410:2;6395:18;5641:177:0;6276::149;882:174:38;;;;;;;;;;;;932:124;882:174;;1120:41;;;;;;;;;;;;;;;7396:136:0;;;;;;;;;;-1:-1:-1;7396:136:0;;;;;:::i;:::-;;:::i;8593:107::-;;;;;;;;;;-1:-1:-1;8593:107:0;;;;;:::i;7893:78::-;;;;;;;;;;-1:-1:-1;7893:78:0;;;;;:::i;:::-;;:::i;5921:168::-;;;;;;:::i;:::-;;:::i;10513:266::-;;;;;;;;;;-1:-1:-1;10513:266:0;;;;;:::i;:::-;;:::i;6157:187::-;;;;;;:::i;8990:92::-;;;;;;;;;;-1:-1:-1;8990:92:0;;;;;:::i;:::-;;:::i;7734:76::-;;;;;;;;;;-1:-1:-1;7734:76:0;;;;;:::i;4036:314::-;;;;;;:::i;:::-;;:::i;5244:319::-;;;;;;:::i;:::-;;:::i;8309:163::-;;;;;;;;;;-1:-1:-1;8309:163:0;;;;;:::i;:::-;;:::i;1629:32::-;;;;;;;;;;;;;;;7163:73;;;;;;;;;;-1:-1:-1;7163:73:0;;;;;:::i;3962:67:6:-;4004:18;4014:7;4004:9;:18::i;:::-;;3962:67;:::o;7607:65:0:-;7647:18;7657:7;7647:9;:18::i;6895:181::-;7023:7;7032;7051:18;7061:7;7051:9;:18::i;:::-;;6895:181;;;;;;:::o;9157:167::-;9299:18;9309:7;9299:9;:18::i;:::-;;9157:167;;;;;;:::o;8078:102::-;8155:18;8165:7;8155:9;:18::i;:::-;;8078:102;;;;:::o;5641:177::-;5774:7;5793:18;5803:7;5793:9;:18::i;:::-;;5641:177;;;;;;:::o;7396:136::-;7488:7;7507:18;7517:7;7507:9;:18::i;:::-;;7396:136;;;:::o;7893:78::-;7946:18;7956:7;7946:9;:18::i;:::-;;7893:78;;:::o;5921:168::-;6045:7;6064:18;6074:7;6064:9;:18::i;:::-;;5921:168;;;;;:::o;10513:266::-;10713:59;10727:5;10734:7;10743:9;10754:8;10764:1;10767;10770;10713:13;:59::i;8990:92::-;9057:18;9067:7;9057:9;:18::i;:::-;;8990:92;;;:::o;4036:314::-;4222:20;4244;4283:60;4293:11;4306:10;4318:14;4334:8;4283:9;:60::i;:::-;4276:67;;;;4036:314;;;;;;;:::o;5244:319::-;5432:20;5454:21;5494:62;5505:11;5518;5531:14;5547:8;5494:10;:62::i;8309:163::-;8447:18;8457:7;8447:9;:18::i;:::-;;8309:163;;;;;:::o;11057:359::-;11111:12;11136;11150:19;11173:7;-1:-1:-1;;;;;11173:20:0;11194:8;;11173:30;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11135:68;;;;11218:7;11213:117;;11298:6;11292:13;11287:2;11279:6;11275:15;11268:38;11213:117;11392:6;11386:13;11381:2;11373:6;11369:15;11362:38;3132:1422:38;3409:8;3391:15;:26;3387:93;;;3440:29;;-1:-1:-1;;;3440:29:38;;;;;;;;;;;3387:93;-1:-1:-1;;;;;3541:19:38;;3537:92;;3583:35;;-1:-1:-1;;;3583:35:38;;;;;;;;;;;3537:92;-1:-1:-1;;;;;4058:14:38;;;3711:18;4058:14;;;:7;:14;;;;;;;;;3882:246;;932:124;3882:246;;;10543:25:149;10622:18;;;10615:43;;;;10694:15;;;10674:18;;;10667:43;10753:14;;10746:22;10726:18;;;10719:50;10785:19;;;10778:35;;;;10829:19;;;;10822:35;;;3882:246:38;;;;;;;;;;10515:19:149;;;3882:246:38;;;3851:295;;;;;;;;-1:-1:-1;;;3755:405:38;;;11126:27:149;3817:16:38;11169:11:149;;;11162:27;11205:12;;;11198:28;11242:12;;3755:405:38;;;-1:-1:-1;;3755:405:38;;;;;;;;;3732:438;;3755:405;3732:438;;;;4180:14;4197:30;;;;;;;;;11492:25:149;;;11565:4;11553:17;;11533:18;;;11526:45;;;;11587:18;;;11580:34;;;11630:18;;;11623:34;;;3732:438:38;;-1:-1:-1;4180:14:38;4197:30;;11464:19:149;;4197:30:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4180:47;;4251:5;-1:-1:-1;;;;;4241:15:38;:6;-1:-1:-1;;;;;4241:15:38;;4237:58;;4265:30;;-1:-1:-1;;;4265:30:38;;;;;;;;;;;4237:58;-1:-1:-1;;;;;4350:14:38;;;;;;:7;:14;;;;;4348:16;;4350:14;;;4348:16;;;:::i;:::-;;;;-1:-1:-1;;;;;;4401:24:38;;;;;;;:17;:24;;;;;;;;:33;;;;;;;;;;;;;:45;;-1:-1:-1;;4401:45:38;;;;;;;;;;4506:41;;12080::149;;;4506::38;;12053:18:149;4506:41:38;;;;;;;3323:1231;;3132:1422;;;;;;;:::o;1523:3224:36:-;1755:20;1777;512:6:87;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:87;;12334:2:149;504:34:87;;;12316:21:149;12373:2;12353:18;;;12346:30;-1:-1:-1;;;12392:18:149;;;12385:40;12442:18;;504:34:87;;;;;;;;;558:1;549:6;:10;5256:21:33;;::::1;::::0;::::1;;;5252:54;;;5286:20;;-1:-1:-1::0;;;5286:20:33::1;;;;;;;;;;;5252:54;1863:20:36::2;:18;:20::i;:::-;1939:23;1964:18:::0;1986:61:::2;2008:7;2029:8;1986;:61::i;:::-;1938:109:::0;;-1:-1:-1;1938:109:36;-1:-1:-1;2410:21:36::2;2434:35;1938:109:::0;;2434:23:::2;:35::i;:::-;2410:59;;2499:25;2483:13;:41;2479:117;;;2547:38;;-1:-1:-1::0;;;2547:38:36::2;;;;;;;;;;;2479:117;2622:14;2609:10;:27;2605:96;;;2659:31;;-1:-1:-1::0;;;2659:31:36::2;;;;;;;;;;;2605:96;2744:24;2771:19;:17;:19::i;:::-;2744:46;;2800;2817:16;2835:10;2800:16;:46::i;:::-;;3108:26;3144:25:::0;3179:26:::2;3349:47;3368:15;3385:10;3349:18;:47::i;:::-;3215:181:::0;;-1:-1:-1;3215:181:36;;-1:-1:-1;3215:181:36;-1:-1:-1;3215:181:36;-1:-1:-1;3447:25:36;;::::2;3443:88;;;3495:25;;-1:-1:-1::0;;;3495:25:36::2;;;;;;;;;;;3443:88;3608:18;3582:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;3697:36:36::2;::::0;-1:-1:-1;3716:17:36::2;3697:16:::0;:36:::2;:::i;:::-;3682:51;;3743:193;3771:18;3803:12;3829:17;3860:10;3884:16;3914:12;3743:14;:193::i;:::-;4020:15;4038:97;4073:26;4113:12;4038:21;:97::i;:::-;4020:115:::0;-1:-1:-1;4145:50:36::2;4020:115:::0;4160:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;4182:12;4145:5;:50::i;:::-;4258:7:::0;4345:8;4418:12;4532:7;4498:20:::2;;::::0;::::2;4345:8:::0;4498:20:::2;:::i;:::-;-1:-1:-1::0;;;;;4476:217:36::2;;4553:12;4579:53;4604:6;4612:10;4624:7;4579:24;:53::i;:::-;4476:217;::::0;;12832:25:149;;;12888:2;12873:18;;12866:34;;;;12916:18;;12909:34;;;12974:2;12959:18;;12952:34;;;12819:3;12804:19;4476:217:36::2;;;;;;;4726:13:::0;-1:-1:-1;;;;;;;;;;;591:1:87;582:6;:10;1523:3224:36;;;;-1:-1:-1;1523:3224:36;-1:-1:-1;;;1523:3224:36:o;1529:3736:39:-;1735:7;1744;512:6:87;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:87;;12334:2:149;504:34:87;;;12316:21:149;12373:2;12353:18;;;12346:30;-1:-1:-1;;;12392:18:149;;;12385:40;12442:18;;504:34:87;12132:334:149;504:34:87;558:1;549:6;:10;5256:21:33;;::::1;::::0;::::1;;;5252:54;;;5286:20;;-1:-1:-1::0;;;5286:20:33::1;;;;;;;;;;;5252:54;1830:20:39::2;:18;:20::i;:::-;1878:25;1864:11;:39;1860:115;;;1926:38;;-1:-1:-1::0;;;1926:38:39::2;;;;;;;;;;;1860:115;2301:18;2322:16;:14;:16::i;:::-;2301:37;;2365:14;2352:10;:27;2348:96;;;2402:31;;-1:-1:-1::0;;;2402:31:39::2;;;;;;;;;;;2348:96;2453:24;2480:19;:17;:19::i;:::-;2453:46;;2509:22;2534:46;2551:16;2569:10;2534:16;:46::i;:::-;2509:71:::0;-1:-1:-1;2819:20:39::2;2842:36;2861:17;2842:16:::0;:36:::2;:::i;:::-;2819:59;;2888:26;2924:19:::0;2967:26:::2;3125:60;3145:11;3158:10;3170:14;3125:19;:60::i;:::-;3246:22;:44:::0;;3007:178;;-1:-1:-1;3007:178:39;;-1:-1:-1;3007:178:39;-1:-1:-1;3007:178:39;;3246:22;::::2;::::0;:44:::2;::::0;3007:178;;3246:44:::2;:::i;:::-;;;;;;;;2953:348;3923:21;3947:105;3985:11;4010:10;4034:8;3947:24;:105::i;:::-;3923:129;;4080:13;4066:11;:27;4062:90;;;4116:25;;-1:-1:-1::0;;;4116:25:39::2;;;;;;;;;;;4062:90;4161:33;4170:13;4185:8;4161;:33::i;:::-;;;4422:157;4451:11;4476;4501:18;4533:10;4557:12;4422:15;:157::i;:::-;4739:15;4757:98;4792:27;4833:12;4757:21;:98::i;:::-;4739:116:::0;-1:-1:-1;4886:11:39;4938:48:::2;4739:116:::0;4953:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;4975:10;4938:5;:48::i;:::-;5095:7:::0;5061:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;5038:173;::::0;;12832:25:149;;;12888:2;12873:18;;12866:34;;;12916:18;;;12909:34;;;12974:2;12959:18;;12952:34;;;-1:-1:-1;;;;;5038:173:39;;;::::2;::::0;::::2;::::0;12819:3:149;12804:19;5038:173:39::2;;;;;;;-1:-1:-1::0;;591:1:87;582:6;:10;5230:12:39;;5244:13;;-1:-1:-1;1529:3736:39;;-1:-1:-1;;;;;;;;;;1529:3736:39:o;5179:145:5:-;5246:9;:14;5242:76;;5283:24;;-1:-1:-1;;;5283:24:5;;;;;;;;;;;5242:76;5179:145::o;2227:1105::-;2350:20;;2406:15;;;;;;;;:::i;:::-;2402:924;;;2489:141;-1:-1:-1;;;;;2503:10:5;2489:43;2550:10;2586:4;2609:7;2489:43;:141::i;:::-;2715:37;;-1:-1:-1;;;2715:37:5;;;;;13171:25:149;;;2746:4:5;13212:18:149;;;13205:60;2715:5:5;-1:-1:-1;;;;;2715:13:5;;;;13144:18:149;;2715:37:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2700:52;;2779:16;:14;:16::i;:::-;2766:29;;2402:924;;;3049:7;;-1:-1:-1;3131:141:5;-1:-1:-1;;;;;3145:5:5;3131:38;3187:10;3223:4;3049:7;3131:38;:141::i;:::-;3299:16;:14;:16::i;:::-;3286:29;;2402:924;2227:1105;;;;;:::o;1771:119:42:-;1833:7;1860:22;1871:1;1874;1877:4;1860:10;:22::i;:::-;1852:31;;1771:119;;;;;:::o;7049:223:33:-;7125:24;7227:37;7245:19;7227:15;:37;:::i;:::-;7196:69;;:15;:69;:::i;:::-;7165:100;;7049:223;:::o;2936:4513:34:-;3057:7;3189:51;;;:12;:51;;;;;3254:22;;-1:-1:-1;;;;;3254:22:34;:27;;;:64;;;3303:15;3285;:33;3254:64;3250:124;;;3341:22;-1:-1:-1;;;;;3341:22:34;;-1:-1:-1;3334:29:34;;3250:124;3455:23;:11;:21;:23::i;:::-;3430:48;;-1:-1:-1;;;;;;3430:48:34;-1:-1:-1;;;;;3430:48:34;;;;;;;-1:-1:-1;3967:12:34;-1:-1:-1;3993:35:34;4011:17;3993:15;:35;:::i;:::-;3967:71;;;;;;;;;;;-1:-1:-1;3967:71:34;;;:82;-1:-1:-1;;;;;3967:82:34;;-1:-1:-1;4082:101:34;4117:27;4158:15;4082:21;:101::i;:::-;4193:27;4223:26;;;:12;:26;;;;;;4059:124;;-1:-1:-1;4293:23:34;;4289:667;;4350:21;4389;4427:180;4474:19;4515:11;4548:14;4584:5;4427:25;:180::i;:::-;4332:275;;;;4647:13;4621:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;4674:235:34;;-1:-1:-1;4708:19:34;4745:1;4764:13;;4880:15;4674:16;:235::i;:::-;4941:4;4923:22;;4318:638;;4289:667;5074:19;5096:100;5131:26;5171:15;5096:21;:100::i;:::-;5206:26;5235:25;;;:12;:25;;;;;;5074:122;;-1:-1:-1;5274:22:34;;5270:745;;5330:21;5369;5407:178;5454:18;5494:11;5527:14;5563:4;5407:25;:178::i;:::-;5312:273;;;;5625:13;5599:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5677:15:34;;-1:-1:-1;5736:232:34;5769:18;5652:22;5824:13;;5677:15;5736;:232::i;:::-;6000:4;5982:22;;5298:717;;;5270:745;6097:15;6093:535;;;6128:20;6151:35;6169:17;6151:15;:35;:::i;:::-;6200:31;6258:26;;;:12;:26;;;;;:35;;-1:-1:-1;;;;;6321:39:34;;;;;;6128:58;;-1:-1:-1;;;;6258:35:34;;;;;;;;;6374:128;;6258:35;;6453;;;;;6374:19;:128::i;:::-;6583:34;6605:11;6583:21;:34::i;:::-;6114:514;;6093:535;6738:20;6775:1;6761:11;:15;:174;;6934:1;6761:174;;;6791:128;6907:11;6791:90;6845:35;6868:11;6845:22;:35::i;:::-;6791:53;:90::i;:::-;:115;;:128::i;:::-;7081:13;:29;7018:12;:48;;;;6945:21;6969:34;;;;;6738:197;;-1:-1:-1;6945:21:34;-1:-1:-1;;;;;7081:29:34;;;;6969:97;;7018:48;6969:97;:::i;:::-;:141;;;;:::i;:::-;6945:165;-1:-1:-1;7120:20:34;7143:18;;:84;;7192:35;:12;7213:13;7192:20;:35::i;:::-;7143:84;;;7176:1;7143:84;7242:171;;;12832:25:149;;;12888:2;12873:18;;12866:34;;;12916:18;;;12909:34;;;12974:2;12959:18;;12952:34;;;7120:107:34;;-1:-1:-1;7272:15:34;;7242:171;;12819:3:149;12804:19;7242:171:34;;;;;;;-1:-1:-1;7431:11:34;;2936:4513;-1:-1:-1;;;;;;;;;;;2936:4513:34:o;14813:3623:36:-;14966:26;15006:25;15045:20;15079:26;15301:241;15347:25;:23;:25::i;:::-;15386:12;:25;-1:-1:-1;;;15386:25:36;;-1:-1:-1;;;;;15386:25:36;15425:12;15463;15489:11;15514:18;15301:32;:241::i;:::-;15281:261;;15675:17;15695:179;15742:25;:23;:25::i;:::-;15781:12;:25;-1:-1:-1;;;15781:25:36;;-1:-1:-1;;;;;15781:25:36;15820:18;15852:12;15695:33;:179::i;:::-;15675:199;;15901:240;15938:12;15968:17;16003:124;16069:9;16100;16003:44;:124::i;:::-;15901:19;:240::i;:::-;15884:330;;;16173:30;;-1:-1:-1;;;16173:30:36;;;;;;;;;;;15884:330;16390:16;16429:26;16477:63;16503:12;16517:9;16528:11;16477:25;:63::i;:::-;16376:164;;-1:-1:-1;16376:164:36;-1:-1:-1;16703:28:36;16376:164;16703:17;:28;:::i;:::-;16688:43;-1:-1:-1;17405:33:36;17420:18;16688:43;17405:33;:::i;:::-;17385:53;-1:-1:-1;17901:87:36;:18;17944:9;17967:11;17901:29;:87::i;:::-;17880:108;-1:-1:-1;18247:33:36;17880:108;18247:12;:33;:::i;:::-;18226:54;;18291:138;;;14813:3623;;;;;;;:::o;9440:2098::-;9714:29;;-1:-1:-1;;;;;9714:29:36;9855:309;:284;9714:29;10019:20;:13;10035:4;10019:20;:::i;:::-;9876:36;;-1:-1:-1;;;;;9876:36:36;;9855:284;10090:13;10121:4;9855:102;:284::i;:::-;:307;:309::i;:::-;9816:36;:348;;-1:-1:-1;;;;;;9816:348:36;-1:-1:-1;;;;;9816:348:36;;;;;;;;;;10312:31;:19;:29;:31::i;:::-;10282:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;10282:61:36;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10282:61:36;;;;;-1:-1:-1;;;;;10282:61:36;;;;;;10382:30;:18;:28;:30::i;:::-;10353:12;:59;;:25;;:59;;;;-1:-1:-1;;;10353:59:36;;-1:-1:-1;;;;;10353:59:36;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10353:59:36;;;;;-1:-1:-1;;;;;10353:59:36;;;;;;10443:25;:13;:23;:25::i;:::-;10422:46;;;;:::i;:::-;10478:29;:49;;-1:-1:-1;;;;;;10478:49:36;-1:-1:-1;;;;;10478:49:36;;;;;-1:-1:-1;10841:51:36;;;:12;:51;;;;;10943:19;;10478:49;;-1:-1:-1;10841:51:36;-1:-1:-1;;;10943:19:36;;;;;10997:98;11042:40;:19;11070:11;11042:27;:40::i;:::-;10998:29;11014:13;10998:1;:29;:::i;:::-;:84;;;;:::i;10997:98::-;11105:44;;10973:122;;-1:-1:-1;10973:122:36;;11105:10;;:19;;:44;;10973:122;;-1:-1:-1;;;11105:44:36;;;;;:::i;:::-;;;-1:-1:-1;;;;;11105:44:36;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;11205:19:36;;11159:66;;11105:44;11159:66;;;;-1:-1:-1;;;11205:19:36;;;;11159;:66::i;:::-;11324:23;11335:11;11324:10;:23::i;:::-;11319:106;;11370:44;;-1:-1:-1;;;11370:44:36;;;;;;;;;;;11319:106;11497:34;11519:11;11497:21;:34::i;:::-;9676:1862;;;;9440:2098;;;;;;:::o;1198:469:41:-;1309:10;-1:-1:-1;;;;;1401:10:41;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:41;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:41;1620:18;;;;1617:34;;1198:469::o;5789:316:37:-;5906:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;5906:23:37;;;;;;;;;:33;;5933:6;;5906:19;:33;;5933:6;;5906:33;:::i;:::-;;;;-1:-1:-1;;5949:21:37;;;;:12;:21;;;;;:31;;5974:6;;5949:21;:31;;5974:6;;5949:31;:::i;:::-;;;;-1:-1:-1;;6039:59:37;;;3434:25:149;;;3490:2;3475:18;;3468:34;;;-1:-1:-1;;;;;6039:59:37;;;6074:1;;6054:10;;6039:59;;3407:18:149;6039:59:37;;;;;;;5789:316;;;:::o;20504:315:33:-;20668:7;20691:15;;;;;;;;:::i;:::-;20687:126;;;-1:-1:-1;20729:7:33;20722:14;;20687:126;20774:28;:7;20790:11;20774:15;:28::i;:::-;20767:35;;20687:126;20504:315;;;;;:::o;4944:117:5:-;5028:26;;-1:-1:-1;;;5028:26:5;;150:4:42;5028:26:5;;;6422:25:149;5002:7:5;;5028:5;-1:-1:-1;;;;;5028:21:5;;;;6395:18:149;;5028:26:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;16208:3731:39:-;16394:19;16427:26;16467;16755:229;16802:25;:23;:25::i;:::-;16841:12;:25;-1:-1:-1;;;16841:25:39;;-1:-1:-1;;;;;16841:25:39;16880:11;16905:12;16931:11;16956:18;16755:33;:229::i;:::-;16734:250;-1:-1:-1;17245:11:39;17203:39;16734:250;17230:11;17203:26;:39::i;:::-;:53;17199:121;;;17279:30;;-1:-1:-1;;;17279:30:39;;;;;;;;;;;17199:121;17487:16;17513:26;17549:17;17569:179;17616:25;:23;:25::i;17569:179::-;17549:199;;17982:174;18020:11;150:4:42;18112:9:39;18135:11;17982:24;:174::i;:::-;-1:-1:-1;17758:398:39;;-1:-1:-1;17758:398:39;-1:-1:-1;18829:29:39;;-1:-1:-1;17758:398:39;;-1:-1:-1;17758:398:39;18829:29;:::i;:::-;18807:51;;;;:::i;:::-;;-1:-1:-1;19349:512:39;19849:11;19349:478;19417:11;19636:39;19657:18;18807:51;19636:39;:::i;:::-;19693:15;19726:32;:11;19693:15;19726;:32::i;:::-;19776:11;19805:8;19349:50;:478::i;:512::-;19335:526;-1:-1:-1;19913:18:39;;-1:-1:-1;;;16208:3731:39;;;;;;;:::o;21103:315:33:-;21267:7;21290:15;;;;;;;;:::i;:::-;21286:126;;;-1:-1:-1;21328:7:33;21321:14;;21286:126;21373:28;:7;21389:11;21373:15;:28::i;10216:3800:39:-;10646:30;;10525:312;;:287;;-1:-1:-1;;;10646:30:39;;-1:-1:-1;;;;;10646:30:39;10694:20;:13;10710:4;10694:20;:::i;:::-;10546:37;;-1:-1:-1;;;10546:37:39;;-1:-1:-1;;;;;10546:37:39;;;10765:11;10794:4;10525:103;:287::i;:312::-;10485:37;:352;;-1:-1:-1;;;;;10485:352:39;;;-1:-1:-1;;;10485:352:39;;;;;;;;;-1:-1:-1;11197:31:39;:19;:29;:31::i;:::-;11156:12;:26;:72;;;-1:-1:-1;;;;;11156:26:39;:72;:::i;:::-;11238:12;:43;;-1:-1:-1;;;;;;11238:43:39;-1:-1:-1;;;;;11238:43:39;;;;;;-1:-1:-1;11320:23:39;:11;:21;:23::i;:::-;11291:12;:52;;:25;;:52;;;;-1:-1:-1;;;11291:52:39;;-1:-1:-1;;;;;11291:52:39;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;11291:52:39;;;;;-1:-1:-1;;;;;11291:52:39;;;;;;11387:23;:11;:21;:23::i;:::-;11353:30;:57;;:30;;:57;;;;-1:-1:-1;;;11353:57:39;;-1:-1:-1;;;;;11353:57:39;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;11353:57:39;;;;;;;;;;;;;;;12012:28;;-1:-1:-1;11969:26:39;12012:28;;;;;11969:26;;11954:86;11937:180;;-1:-1:-1;11937:180:39;;12072:34;;-1:-1:-1;;;12072:34:39;;;;;;;;;;;11937:180;12204:25;12232:19;:17;:19::i;:::-;12261:31;12315;;;:12;:31;;;;;:40;12204:47;;-1:-1:-1;;;;12315:40:39;;;;13050:34;13065:19;13050:12;:34;:::i;:::-;13034:51;;:12;:51;:::i;:::-;13019:66;-1:-1:-1;13095:21:39;13119:26;13134:11;13019:66;13119:26;:::i;:::-;13095:50;;13219:25;:13;:23;:25::i;:::-;13155:31;;;;:12;:31;;;;;:99;;:40;;:99;;;;-1:-1:-1;;;13155:99:39;;;;;:::i;:::-;;;-1:-1:-1;;;;;13155:99:39;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;13335:31:39;;;:12;:31;;;;;:40;13264:121;;13155:99;13264:121;;;;-1:-1:-1;;;13335:40:39;;;;13264:19;:121::i;:::-;13802:23;13813:11;13802:10;:23::i;:::-;13797:106;;13848:44;;-1:-1:-1;;;13848:44:39;;;;;;;;;;;13797:106;13975:34;13997:11;13975:21;:34::i;:::-;10412:3604;;;;10216:3800;;;;;:::o;1328:1616:88:-;1466:12;1636:4;1630:11;-1:-1:-1;;;1759:17:88;1752:93;1892:4;1888:1;1869:17;1865:25;1858:39;1976:2;1971;1952:17;1948:26;1941:38;2056:6;2051:2;2032:17;2028:26;2021:42;2860:2;2857:1;2852:3;2833:17;2830:1;2823:5;2816;2811:52;2379:16;2372:24;2366:2;2348:16;2345:24;2341:1;2337;2331:8;2328:15;2324:46;2321:76;2121:756;2110:767;;;2905:7;2897:40;;;;-1:-1:-1;;;2897:40:88;;15265:2:149;2897:40:88;;;15247:21:149;15304:2;15284:18;;;15277:30;-1:-1:-1;;;15323:18:149;;;15316:50;15383:18;;2897:40:88;15063:344:149;941:556:42;1057:9;1322:1;-1:-1:-1;;1305:19:42;1302:1;1299:26;1296:1;1292:34;1285:42;1272:11;1268:60;1241:146;;1371:1;1368;1361:12;1241:146;-1:-1:-1;1458:9:42;;1454:27;;941:556::o;640:190:44:-;693:9;-1:-1:-1;;;720:1:44;:12;714:86;;756:33;;-1:-1:-1;;;756:33:44;;;;;;;;;;;714:86;-1:-1:-1;821:1:44;640:190::o;8075:2095:34:-;8252:21;;8535:32;:11;8555;8535:19;:32::i;:::-;8519:48;-1:-1:-1;8577:15:34;8595:31;8519:48;8617:8;8595:21;:31::i;:::-;8577:49;-1:-1:-1;8652:31:34;8577:49;8668:14;8652:15;:31::i;:::-;8636:47;;9110:7;9106:557;;;9150:23;9160:13;9150:7;:23;:::i;:::-;9133:40;;;;:::i;:::-;;;9106:557;;;9629:23;9639:13;9629:7;:23;:::i;:::-;9612:40;;;;:::i;:::-;;;9106:557;9876:15;9862:11;:29;9858:306;;;9923:100;:13;9965:11;9994:15;9923:24;:100::i;:::-;9907:116;-1:-1:-1;10053:100:34;:13;10095:11;10124:15;10053:24;:100::i;:::-;10037:116;;9858:306;8298:1872;8075:2095;;;;;;;:::o;14505:1128:39:-;14807:30;;-1:-1:-1;;;14807:30:39;;-1:-1:-1;;;;;14807:30:39;14887:301;:276;14807:30;15044:20;:13;15060:4;15044:20;:::i;:::-;14908:37;;-1:-1:-1;;;14908:37:39;;-1:-1:-1;;;;;14908:37:39;;;15115:11;15144:5;14887:103;:276::i;:301::-;14847:37;:341;;-1:-1:-1;;;;;14847:341:39;;;-1:-1:-1;;;14847:341:39;;;;;;;;;15331:23;:11;:21;:23::i;:::-;15298:56;;:18;:56;:::i;:::-;15253:30;:101;;-1:-1:-1;;;;;15253:101:39;;;-1:-1:-1;;;15253:101:39;;;;;;;;;15452:31;:19;:29;:31::i;:::-;15422:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;15422:61:39;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15422:61:39;;;;;-1:-1:-1;;;;;15422:61:39;;;;;;15525:32;:21;:30;:32::i;:::-;15493:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15493:64:39;;;;;;;-1:-1:-1;;;;;15493:64:39;;;;;;15596:30;:18;:28;:30::i;:::-;15567:12;:59;;:25;;:59;;;;-1:-1:-1;;;15567:59:39;;-1:-1:-1;;;;;15567:59:39;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15567:59:39;;;;;-1:-1:-1;;;;;15567:59:39;;;;;;14717:916;14505:1128;;;;;:::o;12007:2273:36:-;12270:29;;-1:-1:-1;;;;;12270:29:36;12407:335;:306;12270:29;12582:20;:13;12598:4;12582:20;:::i;:::-;12432:36;;-1:-1:-1;;;;;12432:36:36;;12407:306;12657:11;12690:5;12407:114;:306::i;:335::-;12368:36;:374;;-1:-1:-1;;;;;;12368:374:36;-1:-1:-1;;;;;12368:374:36;;;;;;;;;;12896:23;:11;:21;:23::i;:::-;12860:59;;:17;:59;:::i;:::-;12812:29;:107;;-1:-1:-1;;;;;;12812:107:36;-1:-1:-1;;;;;12812:107:36;;;;;;;;;;-1:-1:-1;13481:31:36;:19;:29;:31::i;:::-;13451:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;13451:61:36;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13451:61:36;;;;;-1:-1:-1;;;;;13451:61:36;;;;;;13554:32;:21;:30;:32::i;:::-;13522:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13522:64:36;;;;;;;-1:-1:-1;;;;;13522:64:36;;;;;;13625:30;:18;:28;:30::i;:::-;13596:12;:59;;:25;;:59;;;;-1:-1:-1;;;13596:59:36;;-1:-1:-1;;;;;13596:59:36;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13596:59:36;;;;;;;;;;;;;;;-1:-1:-1;14044:26:36;14074:21;14044:26;;14036:59;;-1:-1:-1;14036:59:36;:161;;-1:-1:-1;14169:28:36;;:12;14126:26;14169:28;;;;;-1:-1:-1;;;;;14126:26:36;;;14111:86;14036:161;14019:255;;;14229:34;;-1:-1:-1;;;14229:34:36;;;;;;;;;;;13190:890:33;13343:6;13333:7;:16;:32;;;;;13364:1;13353:7;:12;;13333:32;13329:745;;;13381:12;13413:13;:6;13381:12;13413:10;:13::i;:::-;13403:23;;:7;:23;:::i;:::-;13625:25;;13381:46;;-1:-1:-1;13608:55:33;;:44;;13381:46;;-1:-1:-1;;;13625:25:33;;-1:-1:-1;;;;;13625:25:33;13608:44;;:9;:44::i;:::-;:53;:55::i;:::-;13554:25;:123;;:25;;:123;;;;-1:-1:-1;;;13554:123:33;;-1:-1:-1;;;;;13554:123:33;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13554:123:33;;;;;-1:-1:-1;;;;;13554:123:33;;;;;;13367:321;4004:18:6;3962:67;:::o;13329:745:33:-;13775:7;13766:6;:16;13762:312;;;13813:1;13802:7;:12;13798:266;;13912:18;:7;:16;:18::i;:::-;13892:17;:6;:15;:17::i;:::-;:38;;;;:::i;:::-;13834:25;:114;;:25;;:114;;;;-1:-1:-1;;;13834:114:33;;-1:-1:-1;;;;;13834:114:33;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13834:114:33;;;;;-1:-1:-1;;;;;13834:114:33;;;;;;4004:18:6;3962:67;:::o;13798:266:33:-;14024:24;:13;:6;14035:1;14024:10;:13::i;22908:1546:35:-;23117:12;:34;;;;23272:13;:29;-1:-1:-1;;;23092:22:35;23199:70;;;;;23092:22;;23199:102;;-1:-1:-1;;;;;23272:29:35;;;;23199:102;:::i;:::-;23161:140;-1:-1:-1;23311:21:35;23335:44;23161:140;23335:14;:44;:::i;:::-;23311:68;;23389:20;23412:95;23462:35;23485:11;23462:22;:35::i;23412:95::-;23389:118;-1:-1:-1;23517:21:35;23541:88;:14;23389:118;23606:13;23541:25;:88::i;:::-;23517:112;;23987:26;24027:12;24042:40;24070:11;24042:27;:40::i;:::-;24027:55;;24103:13;24096:4;:20;24092:92;;;24153:20;24160:13;24153:4;:20;:::i;:::-;24132:41;;24092:92;24218:1;24197:18;:22;:43;;;-1:-1:-1;24223:17:35;;24197:43;24193:255;;;24256:181;24299:18;24335:12;24365:13;24396:27;24256:25;:181::i;:::-;22969:1485;;;;;;;22908:1546;:::o;7894:1001:33:-;8008:53;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8008:53:33;8092:796;;;;;;;;8155:12;:26;-1:-1:-1;;;;;8155:26:33;;;8092:796;;8212:28;;;;8092:796;;;;-1:-1:-1;;;8268:25:33;;;;;8092:796;;;;;;;;;;;;;8363:18;8092:796;;;;8417:21;8092:796;;;;8465:12;8092:796;;;;8509:29;;;;8092:796;;;;8625:36;;8092:796;;8155:26;8092:796;;;8578:97;;8625:36;8578:29;:97::i;:::-;8092:796;;8708:30;;-1:-1:-1;;;;;;;;8708:30:33;;;;;;8092:796;;;;8826:37;;8092:796;;;;;8779:98;;8826:37;;;8779:29;:98::i;:::-;8092:796;;8077:811;7894:1001;-1:-1:-1;;7894:1001:33:o;20164:5466:43:-;20267:7;20417:20;20575:106;20630:7;:33;;;20575:7;:25;;;:33;;:106;;;;:::i;:::-;20493:32;;;;20460:24;;;;:66;;:32;:66::i;:::-;20440:255;;;;:::i;:::-;20417:278;;20705:30;20738:113;20783:7;:21;;;20818:7;:23;;;20738:31;:113::i;:::-;20705:146;;20881:1;20865:13;:17;20861:3671;;;21550:21;21574:291;21623:22;21663:7;:20;;;21701:7;:28;;;21753:7;:19;;;150:4:42;21747:25:43;;;;:::i;:::-;21790:7;:18;;;21826:7;:25;;;21574:31;:291::i;:::-;21550:315;-1:-1:-1;21895:41:43;21550:315;21921:13;21895:17;:41::i;:::-;21879:57;-1:-1:-1;22005:17:43;;22001:565;;22180:371;22276:22;22324:7;:20;;;22370:13;22415:7;:19;;;150:4:42;22409:25:43;;;;:::i;:::-;22460:7;:18;;;22504:7;:25;;;22180:70;:371::i;:::-;22155:396;;:7;;:396;;;;;:::i;:::-;;;-1:-1:-1;22001:565:43;20884:1692;20861:3671;;;22602:1;22586:13;:17;22582:1950;;;23407:14;23408:13;23407:14;:::i;:::-;23391:30;;23482:21;23506:244;23554:22;23594:7;:20;;;23638:7;:19;;;150:4:42;23632:25:43;;;;:::i;:::-;23675:7;:18;;;23711:7;:25;;;23506:30;:244::i;:::-;23482:268;-1:-1:-1;23780:41:43;23482:268;23806:13;23780:17;:41::i;:::-;23764:57;-1:-1:-1;23886:17:43;;23882:563;;24061:369;24155:22;24203:7;:20;;;24249:13;24294:7;:19;;;150:4:42;24288:25:43;;;;:::i;:::-;24339:7;:18;;;24383:7;:25;;;24061:68;:369::i;:::-;24036:394;;:7;;:394;;;;;:::i;:::-;;;-1:-1:-1;23882:563:43;24483:38;24508:13;24491;24483:38;:::i;:::-;24458:63;;:7;;:63;;;;;:::i;:::-;;;-1:-1:-1;;22582:1950:43;24665:19;24899:153;24962:7;:32;;;150:4:42;24956:38:43;;;;:::i;:::-;25016:18;;;;24899:24;;;;;:153;:35;:153::i;:::-;24707:143;24767:7;:33;;;150:4:42;24761:39:43;;;;:::i;:::-;24818:18;;;;24707:25;;;;;:143;:36;:143::i;:::-;24687:379;;;;:::i;:::-;24665:401;;25076:27;25150:12;25113:7;:21;;;25106:56;;;;:::i;:::-;25076:86;;25206:7;:28;;;25176:20;:59;25172:131;;;25258:34;;-1:-1:-1;;;25258:34:43;;;;;;;;;;;25172:131;25312:53;;;25595:28;;;;25571:52;;25344:20;25571:52;:::i;:::-;25564:59;20164:5466;-1:-1:-1;;;;;;20164:5466:43:o;2164:165:42:-;2226:7;2253:22;2264:1;2267:4;2273:1;2253:10;:22::i;7453:253:33:-;7613:12;:26;7657:28;;7511:7;;7549:150;;-1:-1:-1;;;;;7613:26:33;;;;7657:28;;7549:46;:150::i;6975:872:43:-;7228:7;7365:475;7432:23;7473:13;7504:12;7743:18;7749:12;150:4:42;7743:18:43;:::i;:::-;7779:11;7808:18;7365:49;:475::i;:::-;7346:494;6975:872;-1:-1:-1;;;;;;;6975:872:43:o;1246:449::-;1441:17;1575:113;1675:12;1575:82;:18;1618:23;1643:13;1575:42;:82::i;:::-;:99;;:113::i;:::-;1563:125;1246:449;-1:-1:-1;;;;;1246:449:43:o;5221:277::-;5352:7;5390:101;5425:52;150:4:42;5441:29:43;150:4:42;5451:18:43;5441:9;:29::i;:::-;:35;;;;:::i;:::-;5425:9;;:15;:52::i;:::-;5419:58;;150:4:42;5419:58:43;:::i;:::-;150:4:42;;5390:11:43;:101::i;9370:678:33:-;9526:4;9751:23;9777:216;9852:16;9824:25;:23;:25::i;:::-;:44;;;;:::i;:::-;9882:12;:25;:43;;9910:15;;-1:-1:-1;;;9882:25:33;;-1:-1:-1;;;;;9882:25:33;:43;:::i;:::-;9939:18;9971:12;9777:33;:216::i;:::-;-1:-1:-1;;;;9370:678:33;-1:-1:-1;;;;9370:678:33:o;15262:1564::-;15432:21;;16455:127;16574:7;16455:97;16540:11;16455:97;16508:9;150:4:42;16456:23:33;150:4:42;16468:10:33;16456:11;:23::i;:::-;:29;;;;:::i;16455:127::-;16439:143;-1:-1:-1;16782:37:33;16439:143;16804:14;16782:21;:37::i;:::-;16761:58;;15262:1564;;;;;;:::o;13533:678:42:-;13727:15;13758:9;13754:451;;;13793:152;13900:27;13915:12;13900;:27;:::i;:::-;13843:28;:12;13864:6;13843:20;:28::i;:::-;13794:30;:12;13815:8;13794:20;:30::i;:::-;:77;;;;:::i;:::-;13793:85;;:152::i;:::-;13783:162;;13754:451;;;13996:12;13980;:28;13976:42;;-1:-1:-1;14017:1:42;14010:8;;13976:42;14042:152;14149:27;14164:12;14149;:27;:::i;:::-;14092:28;:12;14113:6;14092:20;:28::i;:::-;14043:30;:12;14064:8;14043:20;:30::i;:::-;:77;;;;:::i;10369:290:33:-;10433:4;10609:42;:21;10639:11;10609:29;:42::i;:::-;10560:25;;:12;10484:26;-1:-1:-1;;;;;;;;10560:25:33;;;;;10468:118;;;10476:56;;10484:26;10520:11;10476:43;:56::i;:::-;10468:118;;;;:::i;:::-;:184;;;10369:290;-1:-1:-1;;10369:290:33:o;11325:846:43:-;11576:7;11692:472;11759:23;11800:13;11831:9;12067:18;12073:12;150:4:42;12067:18:43;:::i;:::-;12103:11;12132:18;11692:49;:472::i;17620:2583:33:-;17844:21;;;;;18810:141;18913:24;18939:11;18810:78;18880:7;18810:48;18841:16;18847:10;150:4:42;18841:16:33;:::i;:::-;18810:9;;:30;:48::i;:78::-;:102;:141;:102;:141::i;:::-;18794:157;-1:-1:-1;19163:37:33;18794:157;19185:14;19163:21;:37::i;:::-;19142:58;-1:-1:-1;19641:12:33;19656:97;19688:30;19694:24;150:4:42;19688:30:33;:::i;:::-;19656:7;;19732:11;19656:18;:97::i;:::-;19641:112;-1:-1:-1;19778:22:33;19641:112;19791:8;19778:12;:22::i;:::-;19763:37;-1:-1:-1;20007:36:33;19763:37;20028:14;20007:20;:36::i;:::-;19987:56;-1:-1:-1;20158:38:33;19987:56;20158:18;:38;:::i;:::-;20137:59;;18106:2097;17620:2583;;;;;;;;;:::o;14661:104:42:-;14719:7;14749:1;14745;:5;:13;;14757:1;14745:13;;;-1:-1:-1;14753:1:42;;14661:104;-1:-1:-1;14661:104:42:o;26993:1230:43:-;27235:21;;27577:186;27613:16;27719:34;:15;27741:11;27719:21;:34::i;:::-;27577:11;;:186;:22;:186::i;:::-;27556:207;-1:-1:-1;27984:45:43;:11;28007:8;28017:11;27984:22;:45::i;:::-;27970:59;;;;:::i;:::-;;;28057:12;28044:10;:25;28040:147;;;28151:25;28164:12;28151:10;:25;:::i;:::-;28135:41;;28040:147;28196:20;26993:1230;;;;;;;;:::o;994:219:44:-;1045:8;-1:-1:-1;;;;;;1071:21:44;;;;;:46;;-1:-1:-1;;;;;;1096:21:44;;;1071:46;1065:119;;1141:32;;-1:-1:-1;;;1141:32:44;;;;;;;;;;;15212:101:42;15268:6;15297:1;15293;:5;:13;;15305:1;15293:13;;14938:101;14994:6;15023:1;15019;:5;:13;;15031:1;15019:13;;14245:490:33;14401:25;;14340:18;;;;14393:77;;-1:-1:-1;;;14401:25:33;;-1:-1:-1;;;;;14401:25:33;14449:11;14393:42;:77::i;:::-;14370:100;-1:-1:-1;14513:36:33;14528:21;14370:100;14513:36;:::i;:::-;14484:12;:26;-1:-1:-1;;;;;14484:26:33;:65;14480:222;;;14594:12;:26;14670:21;;14594:57;;14639:12;;-1:-1:-1;;;;;14594:26:33;:57;:::i;:::-;:97;;;;:::i;25953:1730:35:-;26646:25;26690:1;26674:13;:17;:122;;26782:14;26674:122;;;26706:61;:14;26732:19;26753:13;26706:25;:61::i;:::-;26646:150;;26810:17;26831:1;26810:22;26806:35;;26834:7;;;26806:35;27049:17;27109:19;27142:48;;;27138:274;;;27223:28;;-1:-1:-1;27290:111:35;:19;27223:28;27370:17;27290:30;:111::i;:::-;27265:136;;27138:274;27454:26;:14;:24;:26::i;:::-;27421:13;:59;;:29;;:59;;;;-1:-1:-1;;;;;27421:59:35;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;27421:59:35;;;;;-1:-1:-1;;;;;27421:59:35;;;;;;27516:34;:22;:32;:34::i;:::-;27490:13;:60;;:22;;:60;;;;-1:-1:-1;;;27490:60:35;;-1:-1:-1;;;;;27490:60:35;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;27490:60:35;;;;;-1:-1:-1;;;;;27490:60:35;;;;;;27627:49;27652:22;27644:31;;;:::i;:::-;27627:16;:49::i;6550:386:33:-;6649:21;6682:24;150:4:42;6709:19:33;:17;:19::i;:::-;:25;;;;:::i;:::-;6682:52;;6776:16;6760:13;:32;:95;;6854:1;6760:95;;;6807:32;6823:16;6807:13;:32;:::i;:::-;6744:111;-1:-1:-1;6881:48:33;6905:23;150:4:42;6905:17:33;:23;:::i;:::-;6882:13;;6881:23;:48::i;28808:340:43:-;28943:7;;28994:53;29031:16;29001:14;28994:53;:::i;:::-;28962:85;;29091:1;29065:22;:27;;29057:36;;;;;12090:1116:45;12263:7;12703:9;12715:21;12721:1;12724;12727;12730;12733:2;12715:5;:21::i;:::-;12703:33;-1:-1:-1;12746:16:45;12769:37;12780:21;12799:1;12780:14;:2;12789:4;12780:8;:14::i;:21::-;12769:1;;12803:2;12769:10;:37::i;:::-;12765:41;;:1;:41;:::i;:::-;12746:60;;150:4:42;12820:8:45;:15;12816:295;;12934:28;12947:14;150:4:42;12959:1:45;12947:11;:14::i;:::-;12934:8;;:12;:28::i;:::-;12923:39;;12816:295;;;13074:26;13087:12;150:4:42;13097:1:45;13087:9;:12::i;13074:26::-;13063:37;;12816:295;13187:12;13198:1;13187:8;:12;:::i;:::-;13180:19;12090:1116;-1:-1:-1;;;;;;;;;12090:1116:45:o;14384:104:42:-;14442:7;14472:1;14468;:5;:13;;14480:1;14468:13;;7296:489:45;7485:14;7511:12;7553:140;7605:1;7620;7635:2;7651:1;7666;7681:2;7553:38;:140::i;:::-;7533:160;;-1:-1:-1;7533:160:45;-1:-1:-1;7533:160:45;7703:76;;7738:30;;-1:-1:-1;;;7738:30:45;;;;;;;;;;;10390:1124;10540:7;11028:9;11040:19;11044:1;11047;11050;11053;11056:2;11040:3;:19::i;:::-;11028:31;-1:-1:-1;11069:16:45;11088:28;150:4:42;11096:13:45;:1;11106:2;11096:9;:13::i;:::-;:19;;;;:::i;:::-;11088:1;;:7;:28::i;:::-;11069:47;;150:4:42;11130:8:45;:15;11126:293;;11241:26;11254:12;150:4:42;11264:1:45;11254:9;:12::i;11241:26::-;11230:37;;11126:293;;;11380:28;11393:14;150:4:42;11405:1:45;11393:11;:14::i;11380:28::-;11369:39;;11126:293;11495:12;11499:8;11495:1;:12;:::i;:::-;11488:19;10390:1124;-1:-1:-1;;;;;;;;10390:1124:45:o;3826:1099::-;4013:7;4169:9;4181:19;4185:1;4188;4191;4194;4197:2;4181:3;:19::i;:::-;4169:31;-1:-1:-1;4243:15:45;4256:1;4244:6;4248:2;4244:1;:6;:::i;4243:15::-;4239:19;-1:-1:-1;4414:10:45;4427:23;4444:2;4448:1;4428:5;4239:19;4428:1;:5;:::i;:::-;4427:16;:23;:16;:23::i;:::-;4414:36;;150:4:42;4464:2:45;:9;4460:261;;4562:20;4569:12;150:4:42;4579:1:45;4569:9;:12::i;4562:20::-;4557:25;;4460:261;;;4688:22;4695:14;150:4:42;4707:1:45;4695:11;:14::i;4688:22::-;4683:27;;4460:261;4803:12;:2;4812;4803:8;:12::i;:::-;4798:17;-1:-1:-1;4912:6:45;4917:1;4798:17;4912:6;:::i;2079:1169::-;2268:7;2424:9;2436:19;2440:1;2443;2446;2449;2452:2;2436:3;:19::i;:::-;2424:31;-1:-1:-1;2589:25:45;2612:1;2589:18;2600:6;2604:2;2600:1;:6;:::i;:::-;2589:2;;:10;:18::i;:25::-;2585:29;-1:-1:-1;2674:19:45;:1;2585:29;2690:2;2674:12;:19::i;:::-;2670:23;-1:-1:-1;2853:10:45;2866:5;2670:23;2866:1;:5;:::i;:::-;2853:18;;150:4:42;2885:2:45;:9;2881:261;;2983:20;2990:12;150:4:42;3000:1:45;2990:9;:12::i;2983:20::-;2978:25;;2881:261;;;3109:22;3116:14;150:4:42;3128:1:45;3116:11;:14::i;3109:22::-;3104:27;;2881:261;3235:6;3239:2;3235:1;:6;:::i;4628:840:42:-;4686:7;4752:1;4757;4752:6;4748:47;;-1:-1:-1;150:4:42;4774:10;;4748:47;4848:1;4853;4848:6;4844:45;;-1:-1:-1;4877:1:42;4870:8;;4844:45;5052:1;5027:15;5230:14;5241:1;5230:3;:14::i;:::-;5217:27;-1:-1:-1;5322:18:42;;;5359:19;150:4;5322:18;5359:19;:::i;:::-;;;5451:9;5455:4;5451:3;:9::i;4098:115::-;4158:7;4185:20;4194:1;4197:4;4203:1;4185:8;:20::i;3707:115::-;3767:7;3794:20;3803:1;3806;3809:4;3794:8;:20::i;16102:3325:35:-;16285:19;16308:1;16285:24;16281:61;;16102:3325;:::o;16281:61::-;16573:12;:26;-1:-1:-1;;;;;16573:26:35;16629:21;16613:37;;16609:109;;;16673:34;;-1:-1:-1;;;16673:34:35;;;;;;;;;;;16609:109;16887:27;16917:55;16953:19;16924:13;16917:55;:::i;:::-;16887:85;;17016:21;16986:20;:52;16982:124;;;17061:34;;-1:-1:-1;;;17061:34:35;;;;;;;;;;;16982:124;17144:41;17152:20;17144:39;:41::i;:::-;17115:12;:70;;-1:-1:-1;;;;;;17115:70:35;-1:-1:-1;;;;;17115:70:35;;;;;;;;;;17761:28;;-1:-1:-1;;17761:28:35;;17803:20;;;17799:488;;17888:139;17896:20;17958:15;17996:13;17888:40;:139::i;:::-;17839:202;;17799:488;;;18122:140;18192:16;18193:15;18192:16;:::i;:::-;18130:20;;18231:13;18122:40;:140::i;:::-;18097:179;;;:::i;:::-;18072:204;;17799:488;18327:33;:22;:31;:33::i;:::-;18296:28;:64;;-1:-1:-1;;;;;;18296:64:35;-1:-1:-1;;;;;18296:64:35;;;;;;-1:-1:-1;19202:25:35;19000:420;;:395;;-1:-1:-1;;;19202:25:35;;;19245:136;19313:13;19348:15;19245:46;:136::i;:::-;19000:160;19085:20;19124:22;19000:59;:160::i;:420::-;18972:12;:448;;-1:-1:-1;;;;;18972:448:35;;;-1:-1:-1;;;18972:448:35;;;;;;;;;-1:-1:-1;;;;;16102:3325:35:o;14609:278:45:-;14749:7;14872:8;:1;14878;14872:5;:8::i;:::-;14831:38;14844:20;14862:1;14844:13;:2;14855:1;14844:10;:13::i;:20::-;14831:1;;14866:2;14831:12;:38::i;:::-;:49;;;;:::i;2683:748:42:-;2797:9;3062:1;-1:-1:-1;;3045:19:42;3042:1;3039:26;3036:1;3032:34;3025:42;3012:11;3008:60;2981:146;;3111:1;3108;3101:12;2981:146;-1:-1:-1;3378:9:42;;3325:27;;;3322:34;;3374:27;;;3301:114;;2683:748::o;8539:1314:45:-;8732:14;8748:12;8909:9;8921:19;8925:1;8928;8931;8934;8937:2;8921:3;:19::i;:::-;8909:31;-1:-1:-1;8983:15:45;8996:1;8984:6;8988:2;8984:1;:6;:::i;8983:15::-;8979:19;;9080:1;9076;:5;9072:53;;;9105:1;9108:5;9097:17;;;;;;;9072:53;9280:10;9293:23;9310:2;9314:1;9294:5;9298:1;9294;:5;:::i;9293:23::-;9280:36;;150:4:42;9330:2:45;:9;9326:263;;9429:20;9436:12;150:4:42;9446:1:45;9436:9;:12::i;9429:20::-;9424:25;;9326:263;;;9556:22;9563:14;150:4:42;9575:1:45;9563:11;:14::i;9556:22::-;9551:27;;9326:263;9671:12;:2;9680;9671:8;:12::i;:::-;9666:17;;9779:2;9775:1;:6;9771:52;;;9806:6;9810:2;9806:1;:6;:::i;:::-;9797:15;;9771:52;9842:4;9832:14;;8762:1091;;8539:1314;;;;;;;;;;:::o;13771:272::-;13909:7;14028:8;:1;14034;14028:5;:8::i;:::-;13991:34;14002:18;14018:1;14002:11;:2;14011:1;14002:8;:11::i;:18::-;13991:1;;14022:2;13991:10;:34::i;9583:3592:42:-;9628:8;9681:1;9676;:6;9672:60;;9691:41;;-1:-1:-1;;;9691:41:42;;;;;;;;;;;9672:60;-1:-1:-1;10698:2:42;-1:-1:-1;;;;;;;10109:1:42;10105:49;10212:9;;;10192:18;10189:33;10186:1;10182:41;10176:48;10274:9;;;10262:10;10259:25;10256:1;10252:33;10246:40;10332:9;;;10324:6;10321:21;10318:1;10314:29;10308:36;10388:9;;;10382:4;10379:19;10376:1;10372:27;;;10366:34;;;10443:9;;;10438:3;10435:18;10432:1;10428:26;10422:33;10498:9;;;10490:18;;;10487:1;10483:26;;;10477:33;;;10546:9;;;10538:18;;;10532:25;10728:3;:7;;;;;10714:22;;;;10761:17;;;11554:31;11550:35;;11605:5;;11604:13;;11621:32;11603:50;11673:5;;11672:13;;11689:33;11671:51;11742:5;;11741:13;;11758:33;11740:51;11811:5;;11810:13;;11827:33;11809:51;11880:5;;11879:13;;11896:32;11878:50;11948:5;;11947:13;;11964:30;11946:48;10951:31;10947:35;;11002:5;;11001:13;;11018:32;11000:50;11070:5;;11069:13;;11086:32;11068:50;11138:5;;11137:13;;-1:-1:-1;;11136:50:42;11206:5;;11205:13;;-1:-1:-1;;11204:50:42;11274:5;;11273:13;;;-1:-1:-1;;11272:50:42;11340:5;-1:-1:-1;;11340:46:42;12335:10;12725:43;12720:48;-1:-1:-1;;10694:6:42;;;;12848:71;:91;12827:112;13012:72;13007:77;13155:3;13149:9;;9583:3592::o;5724:3347::-;5770:8;-1:-1:-1;;5947:1:42;:26;5943:40;;-1:-1:-1;5982:1:42;;5724:3347;-1:-1:-1;5724:3347:42:o;5943:40::-;6182:21;6177:1;:26;6173:99;;6228:44;;-1:-1:-1;;;6228:44:42;;;;;;;;;;;6173:99;6545:7;6539:2;6534:7;;;6533:19;;-1:-1:-1;6881:8:42;6965:2;6905:29;6894:7;;;6893:41;-1:-1:-1;;;6893:51:42;6892:75;;6993:29;6989:33;;6985:37;;;-1:-1:-1;;7664:35:42;;7719:5;;7299:2;7718:13;;;7735:32;7717:50;7787:5;;7786:13;;-1:-1:-1;;7785:51:42;7856:5;;7855:13;;7872:34;7854:52;7926:5;;7925:13;;-1:-1:-1;;7924:53:42;7997:5;;7996:13;;8013:35;7995:53;7305:32;7238:31;7234:35;;7289:5;;7288:13;;7287:50;;;7362:5;;;-1:-1:-1;;7362:40:42;7422:5;7421:13;;;7438:35;7420:53;7491:5;;;-1:-1:-1;;;7491:50:42;8413:10;8950:49;8917:82;9032:3;:7;;;;8916:124;;;;;;-1:-1:-1;;5724:3347:42:o;14:271:149:-;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:149:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:149;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:1041;867:6;898:2;941;929:9;920:7;916:23;912:32;909:52;;;957:1;954;947:12;909:52;990:9;984:16;1019:18;1060:2;1052:6;1049:14;1046:34;;;1076:1;1073;1066:12;1046:34;1114:6;1103:9;1099:22;1089:32;;1159:7;1152:4;1148:2;1144:13;1140:27;1130:55;;1181:1;1178;1171:12;1130:55;1210:2;1204:9;1232:2;1228;1225:10;1222:36;;;1238:18;;:::i;:::-;1313:2;1307:9;1281:2;1367:13;;-1:-1:-1;;1363:22:149;;;1387:2;1359:31;1355:40;1343:53;;;1411:18;;;1431:22;;;1408:46;1405:72;;;1457:18;;:::i;:::-;1497:10;1493:2;1486:22;1532:2;1524:6;1517:18;1572:7;1567:2;1562;1558;1554:11;1550:20;1547:33;1544:53;;;1593:1;1590;1583:12;1544:53;1615:1;1606:10;;1625:129;1639:2;1636:1;1633:9;1625:129;;;1727:10;;;1723:19;;1717:26;1696:14;;;1692:23;;1685:59;1650:10;;;;1625:129;;;1796:1;1791:2;1786;1778:6;1774:15;1770:24;1763:35;1817:6;1807:16;;;;;;;;788:1041;;;;:::o;1834:139::-;-1:-1:-1;;;;;1917:31:149;;1907:42;;1897:70;;1963:1;1960;1953:12;1897:70;1834:139;:::o;1978:270::-;2052:6;2105:2;2093:9;2084:7;2080:23;2076:32;2073:52;;;2121:1;2118;2111:12;2073:52;2160:9;2147:23;2179:39;2212:5;2179:39;:::i;2253:160::-;2318:20;;2374:13;;2367:21;2357:32;;2347:60;;2403:1;2400;2393:12;2347:60;2253:160;;;:::o;2418:180::-;2474:6;2527:2;2515:9;2506:7;2502:23;2498:32;2495:52;;;2543:1;2540;2533:12;2495:52;2566:26;2582:9;2566:26;:::i;2603:155::-;2663:5;2708:2;2699:6;2694:3;2690:16;2686:25;2683:45;;;2724:1;2721;2714:12;2763:492;2867:6;2875;2883;2936:2;2924:9;2915:7;2911:23;2907:32;2904:52;;;2952:1;2949;2942:12;2904:52;2988:9;2975:23;2965:33;;3045:2;3034:9;3030:18;3017:32;3007:42;;3100:2;3089:9;3085:18;3072:32;3127:18;3119:6;3116:30;3113:50;;;3159:1;3156;3149:12;3113:50;3182:67;3241:7;3232:6;3221:9;3217:22;3182:67;:::i;:::-;3172:77;;;2763:492;;;;;:::o;3513:367::-;3576:8;3586:6;3640:3;3633:4;3625:6;3621:17;3617:27;3607:55;;3658:1;3655;3648:12;3607:55;-1:-1:-1;3681:20:149;;3724:18;3713:30;;3710:50;;;3756:1;3753;3746:12;3710:50;3793:4;3785:6;3781:17;3769:29;;3853:3;3846:4;3836:6;3833:1;3829:14;3821:6;3817:27;3813:38;3810:47;3807:67;;;3870:1;3867;3860:12;3885:1066;4025:6;4033;4041;4049;4057;4065;4118:3;4106:9;4097:7;4093:23;4089:33;4086:53;;;4135:1;4132;4125:12;4086:53;4174:9;4161:23;4193:39;4226:5;4193:39;:::i;:::-;4251:5;-1:-1:-1;4308:2:149;4293:18;;4280:32;4321:41;4280:32;4321:41;:::i;:::-;4381:7;-1:-1:-1;4439:2:149;4424:18;;4411:32;4462:18;4492:14;;;4489:34;;;4519:1;4516;4509:12;4489:34;4558:70;4620:7;4611:6;4600:9;4596:22;4558:70;:::i;:::-;4647:8;;-1:-1:-1;4532:96:149;-1:-1:-1;4735:2:149;4720:18;;4707:32;;-1:-1:-1;4751:16:149;;;4748:36;;;4780:1;4777;4770:12;4748:36;;4819:72;4883:7;4872:8;4861:9;4857:24;4819:72;:::i;:::-;3885:1066;;;;-1:-1:-1;3885:1066:149;;-1:-1:-1;3885:1066:149;;4910:8;;3885:1066;-1:-1:-1;;;3885:1066:149:o;4956:541::-;5042:6;5050;5058;5066;5119:3;5107:9;5098:7;5094:23;5090:33;5087:53;;;5136:1;5133;5126:12;5087:53;5172:9;5159:23;5149:33;;5232:2;5221:9;5217:18;5204:32;5245:39;5278:5;5245:39;:::i;:::-;5303:5;-1:-1:-1;5360:2:149;5345:18;;5332:32;5373:41;5332:32;5373:41;:::i;:::-;4956:541;;;;-1:-1:-1;5433:7:149;;5487:2;5472:18;5459:32;;-1:-1:-1;;4956:541:149:o;5710:561::-;5823:6;5831;5839;5847;5900:3;5888:9;5879:7;5875:23;5871:33;5868:53;;;5917:1;5914;5907:12;5868:53;5953:9;5940:23;5930:33;;6010:2;5999:9;5995:18;5982:32;5972:42;;6061:2;6050:9;6046:18;6033:32;6023:42;;6116:2;6105:9;6101:18;6088:32;6143:18;6135:6;6132:30;6129:50;;;6175:1;6172;6165:12;6129:50;6198:67;6257:7;6248:6;6237:9;6233:22;6198:67;:::i;:::-;6188:77;;;5710:561;;;;;;;:::o;6640:356::-;6726:6;6779:2;6767:9;6758:7;6754:23;6750:32;6747:52;;;6795:1;6792;6785:12;6747:52;6835:9;6822:23;6868:18;6860:6;6857:30;6854:50;;;6900:1;6897;6890:12;6854:50;6923:67;6982:7;6973:6;6962:9;6958:22;6923:67;:::i;:::-;6913:77;6640:356;-1:-1:-1;;;;6640:356:149:o;7001:541::-;7087:6;7095;7103;7111;7164:3;7152:9;7143:7;7139:23;7135:33;7132:53;;;7181:1;7178;7171:12;7132:53;7217:9;7204:23;7194:33;;7277:2;7266:9;7262:18;7249:32;7290:39;7323:5;7290:39;:::i;:::-;7348:5;-1:-1:-1;7400:2:149;7385:18;;7372:32;;-1:-1:-1;7456:2:149;7441:18;;7428:32;7469:41;7428:32;7469:41;:::i;:::-;7001:541;;;;-1:-1:-1;7001:541:149;;-1:-1:-1;;7001:541:149:o;7547:323::-;7612:6;7620;7673:2;7661:9;7652:7;7648:23;7644:32;7641:52;;;7689:1;7686;7679:12;7641:52;7728:9;7715:23;7747:39;7780:5;7747:39;:::i;:::-;7805:5;-1:-1:-1;7829:35:149;7860:2;7845:18;;7829:35;:::i;7875:845::-;7983:6;7991;7999;8007;8015;8023;8031;8084:3;8072:9;8063:7;8059:23;8055:33;8052:53;;;8101:1;8098;8091:12;8052:53;8140:9;8127:23;8159:39;8192:5;8159:39;:::i;:::-;8217:5;-1:-1:-1;8274:2:149;8259:18;;8246:32;8287:41;8246:32;8287:41;:::i;:::-;8347:7;-1:-1:-1;8373:35:149;8404:2;8389:18;;8373:35;:::i;:::-;8363:45;;8455:2;8444:9;8440:18;8427:32;8417:42;;8511:3;8500:9;8496:19;8483:33;8560:4;8551:7;8547:18;8538:7;8535:31;8525:59;;8580:1;8577;8570:12;8525:59;7875:845;;;;-1:-1:-1;7875:845:149;;;;8603:7;8657:3;8642:19;;8629:33;;-1:-1:-1;8709:3:149;8694:19;;;8681:33;;7875:845;-1:-1:-1;;7875:845:149:o;8725:391::-;8802:6;8810;8818;8871:2;8859:9;8850:7;8846:23;8842:32;8839:52;;;8887:1;8884;8877:12;8839:52;8923:9;8910:23;8900:33;;8983:2;8972:9;8968:18;8955:32;8996:39;9029:5;8996:39;:::i;:::-;8725:391;;9054:5;;-1:-1:-1;;;9106:2:149;9091:18;;;;9078:32;;8725:391::o;9381:691::-;9476:6;9484;9492;9500;9508;9561:3;9549:9;9540:7;9536:23;9532:33;9529:53;;;9578:1;9575;9568:12;9529:53;9614:9;9601:23;9591:33;;9674:2;9663:9;9659:18;9646:32;9687:39;9720:5;9687:39;:::i;:::-;9745:5;-1:-1:-1;9802:2:149;9787:18;;9774:32;9815:41;9774:32;9815:41;:::i;:::-;9875:7;-1:-1:-1;9929:2:149;9914:18;;9901:32;;-1:-1:-1;9985:3:149;9970:19;;9957:33;9999:41;9957:33;9999:41;:::i;:::-;10059:7;10049:17;;;9381:691;;;;;;;;:::o;10077:180::-;10136:6;10189:2;10177:9;10168:7;10164:23;10160:32;10157:52;;;10205:1;10202;10195:12;10157:52;-1:-1:-1;10228:23:149;;10077:180;-1:-1:-1;10077:180:149:o;11668:127::-;11729:10;11724:3;11720:20;11717:1;11710:31;11760:4;11757:1;11750:15;11784:4;11781:1;11774:15;11800:135;11839:3;11860:17;;;11857:43;;11880:18;;:::i;:::-;-1:-1:-1;11927:1:149;11916:13;;11800:135::o;12471:125::-;12536:9;;;12557:10;;;12554:36;;;12570:18;;:::i;13276:184::-;13346:6;13399:2;13387:9;13378:7;13374:23;13370:32;13367:52;;;13415:1;13412;13405:12;13367:52;-1:-1:-1;13438:16:149;;13276:184;-1:-1:-1;13276:184:149:o;13465:127::-;13526:10;13521:3;13517:20;13514:1;13507:31;13557:4;13554:1;13547:15;13581:4;13578:1;13571:15;13597:112;13629:1;13655;13645:35;;13660:18;;:::i;:::-;-1:-1:-1;13694:9:149;;13597:112::o;13714:128::-;13781:9;;;13802:11;;;13799:37;;;13816:18;;:::i;13979:168::-;14052:9;;;14083;;14100:15;;;14094:22;;14080:37;14070:71;;14121:18;;:::i;14152:197::-;-1:-1:-1;;;;;14274:10:149;;;14286;;;14270:27;;14309:11;;;14306:37;;;14323:18;;:::i;:::-;14306:37;14152:197;;;;:::o;14354:200::-;-1:-1:-1;;;;;14490:10:149;;;14478;;;14474:27;;14513:12;;;14510:38;;;14528:18;;:::i;14559:245::-;14657:2;14627:17;;;14646;;;;14623:41;-1:-1:-1;;;;;14679:44:149;;-1:-1:-1;;;;;;14725:49:149;;14676:99;14673:125;;;14778:18;;:::i;14809:249::-;14909:2;14898:17;;;14879;;;;14875:41;-1:-1:-1;;;;;;14931:50:149;;-1:-1:-1;;;;;14983:45:149;;14928:101;14925:127;;;15032:18;;:::i;15412:200::-;15478:9;;;15451:4;15506:9;;15534:10;;15546:12;;;15530:29;15569:12;;;15561:21;;15527:56;15524:82;;;15586:18;;:::i;15617:136::-;15652:3;-1:-1:-1;;;15673:22:149;;15670:48;;15698:18;;:::i;:::-;-1:-1:-1;15738:1:149;15734:13;;15617:136::o;15758:216::-;15822:9;;;15850:11;;;15797:3;15880:9;;15908:10;;15904:19;;15933:10;;15925:19;;15901:44;15898:70;;;15948:18;;:::i;:::-;15898:70;;15758:216;;;;:::o;15979:193::-;16018:1;16044;16034:35;;16049:18;;:::i;:::-;-1:-1:-1;;;16085:18:149;;-1:-1:-1;;16105:13:149;;16081:38;16078:64;;;16122:18;;:::i;:::-;-1:-1:-1;16156:10:149;;15979:193::o",
    "linkReferences": {},
    "immutableReferences": {
      "2296": [
        {
          "start": 4033,
          "length": 32
        },
        {
          "start": 4183,
          "length": 32
        },
        {
          "start": 6306,
          "length": 32
        }
      ],
      "39": [
        {
          "start": 381,
          "length": 32
        },
        {
          "start": 836,
          "length": 32
        },
        {
          "start": 1458,
          "length": 32
        },
        {
          "start": 1552,
          "length": 32
        },
        {
          "start": 1602,
          "length": 32
        },
        {
          "start": 1704,
          "length": 32
        },
        {
          "start": 1751,
          "length": 32
        },
        {
          "start": 1863,
          "length": 32
        },
        {
          "start": 1953,
          "length": 32
        }
      ],
      "42": [
        {
          "start": 1347,
          "length": 32
        },
        {
          "start": 1413,
          "length": 32
        },
        {
          "start": 1502,
          "length": 32
        },
        {
          "start": 1652,
          "length": 32
        },
        {
          "start": 1799,
          "length": 32
        }
      ],
      "8180": [
        {
          "start": 1010,
          "length": 32
        },
        {
          "start": 2337,
          "length": 32
        }
      ],
      "9215": [
        {
          "start": 3965,
          "length": 32
        }
      ],
      "9218": [
        {
          "start": 4278,
          "length": 32
        }
      ],
      "9221": [
        {
          "start": 3075,
          "length": 32
        },
        {
          "start": 3566,
          "length": 32
        },
        {
          "start": 4435,
          "length": 32
        },
        {
          "start": 4719,
          "length": 32
        },
        {
          "start": 11847,
          "length": 32
        }
      ],
      "9224": [
        {
          "start": 5153,
          "length": 32
        },
        {
          "start": 5292,
          "length": 32
        },
        {
          "start": 6459,
          "length": 32
        },
        {
          "start": 9427,
          "length": 32
        },
        {
          "start": 10471,
          "length": 32
        }
      ],
      "9227": [
        {
          "start": 5341,
          "length": 32
        },
        {
          "start": 10532,
          "length": 32
        },
        {
          "start": 10940,
          "length": 32
        }
      ],
      "9230": [
        {
          "start": 6675,
          "length": 32
        },
        {
          "start": 7646,
          "length": 32
        },
        {
          "start": 11069,
          "length": 32
        }
      ],
      "9233": [
        {
          "start": 7690,
          "length": 32
        },
        {
          "start": 10600,
          "length": 32
        },
        {
          "start": 10992,
          "length": 32
        },
        {
          "start": 11113,
          "length": 32
        }
      ],
      "9236": [
        {
          "start": 5187,
          "length": 32
        },
        {
          "start": 5259,
          "length": 32
        },
        {
          "start": 6493,
          "length": 32
        },
        {
          "start": 9351,
          "length": 32
        },
        {
          "start": 10438,
          "length": 32
        }
      ],
      "9239": [
        {
          "start": 8571,
          "length": 32
        },
        {
          "start": 9389,
          "length": 32
        },
        {
          "start": 10775,
          "length": 32
        },
        {
          "start": 11412,
          "length": 32
        },
        {
          "start": 11472,
          "length": 32
        },
        {
          "start": 12741,
          "length": 32
        },
        {
          "start": 12820,
          "length": 32
        }
      ],
      "9242": [
        {
          "start": 2869,
          "length": 32
        },
        {
          "start": 3425,
          "length": 32
        }
      ],
      "9245": [
        {
          "start": 7176,
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
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"precisionThreshold\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"_target0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target1\",\"type\":\"address\"},{\"internalType\":\"contract IERC4626\",\"name\":\"__pool\",\"type\":\"address\"},{\"internalType\":\"address[]\",\"name\":\"_targets\",\"type\":\"address[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"ApprovalFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BaseBufferExceedsShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidBaseToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativeInterest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Paused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsupportedToken\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_baseAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"traderDeposit\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"collectGovernanceFee((address,bool,bytes))\":{\"returns\":{\"_0\":\"proceeds The amount of base collected.\"}},\"constructor\":{\"params\":{\"__pool\":\"The ERC4626 compatible yield source.\",\"_config\":\"The configuration of the Hyperdrive pool.\",\"_target0\":\"The target0 address.\",\"_target1\":\"The target1 address.\",\"_targets\":\"The addresses that can be swept by governance. This        allows governance to collect rewards derived from incentive        programs while also preventing edge cases where `sweep` is used        to access the pool or base tokens.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_baseAmount\":\"The amount of base to use when trading.\",\"_minOutput\":\"The minium number of bonds to receive.\",\"_minSharePrice\":\"The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"bondProceeds\":\"The amount of bonds the user received\",\"maturityTime\":\"The maturity time of the bonds.\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade\",\"_minSharePrice\":\"The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"maturityTime\":\"The maturity time of the short.\",\"traderDeposit\":\"The amount the user deposited for this trade.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"sweep(address)\":{\"details\":\"WARN: The entire balance of any of the sweep targets can be swept      by governance. If these sweep targets provide access to the base or      pool token, then governance has the ability to rug the pool.WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\"}},\"title\":\"ERC4626Hyperdrive\",\"version\":1},\"userdoc\":{\"errors\":{\"ApprovalFailed()\":[{\"notice\":\"################## ### Hyperdrive ### ##################\"}],\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"################ ### SafeCast ### ################\"}]},\"kind\":\"user\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"notice\":\"This contract's EIP712 domain separator.\"},\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"addLiquidity(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another\"},\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Instantiates Hyperdrive with a ERC4626 vault as the yield source.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"sweep(address)\":{\"notice\":\"Some yield sources [eg Morpho] pay rewards directly to this         contract but we can't handle distributing them internally so we         sweep to the fee collector address to then redistribute to users.\"},\"target0()\":{\"notice\":\"The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions.\"},\"target1()\":{\"notice\":\"The target1 address. This is a logic contract that contains all         some stateful functions.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"notice\":\"A Hyperdrive instance that uses a ERC4626 vault as the yield source.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/ERC4626Hyperdrive.sol\":\"ERC4626Hyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x5bd64741fef9540148a15f024de103722d99eb7687e1268f6e34005209aff1ed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d4424216a3fe46e13705855186f71fc0d88040fde55786c39696cef5b00128ac\",\"dweb:/ipfs/QmXW3XoGe3NuK9AK72v8fHfWdBtXj3mW173dtYJkTv3PDi\"]},\"contracts/src/instances/ERC4626Base.sol\":{\"keccak256\":\"0x186f72e49a6542caa25f799fa9072c2b1b4a81cc7ab3475fbaad29fb56bb0229\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5dba800fe086f6ef89913f8a329887d4c9cb4d283be553e9534013882a7fcc44\",\"dweb:/ipfs/QmNts4c5uyZGmCjHeSREQpayigYkmro2xzRXVcSTqzH9r3\"]},\"contracts/src/instances/ERC4626Hyperdrive.sol\":{\"keccak256\":\"0x4cb2cf4c8cca9daaa5971db97b1fadabf8f2fba43a67c762bf6ede559faed5a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2d0fc229b78c551c4b4acbb9f29562f73cb7e8330d570fca0e571fe6204c3ae4\",\"dweb:/ipfs/QmVpRBdV639KJz7THriVsD1iwwxcqxQ52TaUQ68duywiPi\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc\",\"dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0xe7076ded0fe36ac72c946258bc3183bebb6f1567cd0ce5d55720de84988f5312\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b84d02ec55ccbee1491ce25a2b890e7c371dd251cb69c2cc818179e49ddef780\",\"dweb:/ipfs/QmcXWYPF2Hy6w3TLqmegYiUj5pL9i9PqH44USV4Px9sk2k\"]},\"contracts/src/interfaces/IERC4626HyperdriveCore.sol\":{\"keccak256\":\"0xcea74eaf829d241754f74a8c2223fef0ec83459252d2aaedcd860bae538620c9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://464f58076e112b73957147b2abb52c85b1b806b306fa2d490d0e74f993ffe5a8\",\"dweb:/ipfs/QmNf3EACwEDsB7X1G1geLeqenR1xJHd9zGvSeZJ9f2nSmp\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0xa63f6d3d8b87fcf27202f4ea8609762ef695b9919e4907522930738eb2dcde7e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db88312fa9fed33207e1974d91f714ed8cbbe4a4a1d0e54a6ee5c15a8949f4fb\",\"dweb:/ipfs/QmSYCCuc6Xkh6oibhW5ovdQRhvT5nV4Hxj3Q2xEhjzYyWE\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70\",\"dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0xea9b7b3489ac95dd9c41ae7174c9f34a29f8ae14224ee5d2605434a8c8711784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9076244df4f436e8a8921faadfe925f243ae9a37ac7a16cbce3dd5b4a66631a8\",\"dweb:/ipfs/QmeRunYGGcgUZjRHS3m1AarzzjgV9vtp5K9UeUjTaaCrfs\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x328a01b0720b9a6494a2d6be1113539d41da589a382525578d4241fc077e9646\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4b9d7b56fd8056ae9264da99f8e0764ef16f17dca179218cf9375cf3236ec9fc\",\"dweb:/ipfs/Qmf11fXRipobZfMWTTxaScrYz9tZFUsdVxH5eZ4aLVQQC8\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0xd846aec9e34732c384a70ae306e8015eeb4a85ba7a68861d3a741310efc9eb57\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cdd512b5caa814e88813e3a8a03bfc5e460c78c81c4e403bc8e57300ae11a1d2\",\"dweb:/ipfs/QmUAMC52wZ6H86zUPQ7xPYVjAYjYQ97RiAfV1kn27ZYPsz\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x6779541f073ba5ce6e0656d10c7d9ef23734d2675b865b4d5310a023c30764ad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc569f006ef38723c1cb893b4e08d22ca0a448dc559c8abd18b28bd6967fcb7\",\"dweb:/ipfs/QmdPfZGuM8g3qp4CPsuztZe1wcVrytWkbqHQDbsTVEKBdF\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x45ba04560ca590427cc1ad2e98ec0122f9b6496ead2e3d4b3438339c982bd543\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ee1b36b7ab75044d12e8b91ead75c4377b9da1daa630ea7d1a0c413f963f916a\",\"dweb:/ipfs/QmPsoXubd1sfy7NNn7YWSrYTTrBEreuawVRFFjDrHQmKzZ\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x6b85590aeffa0a73aabf0c17a958bdec064a4d59c2e3d7595a8cb2d86fb01277\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d89ad612f8624723adab39bd85311389fe95f685cf496e1a5d116bfafd6588eb\",\"dweb:/ipfs/QmPWVwrfo65BZofeWubpZsM93yzxMFjhPfoNYsaT31yn28\"]},\"contracts/src/internal/HyperdrivePermitForAll.sol\":{\"keccak256\":\"0x6169d5a033b924d68b9374024fe420fda4cd9ccdb6c681b9d3febea0d68d6452\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7a897e5b336b652fb37471d5f972f5bd3e181f1355ff5989d018b8b0ef051f0b\",\"dweb:/ipfs/QmcEoXs942xzX1Yu7v7ubn1avxZ7MeNvXm33nWkLyRRLha\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0x0dc04dc0f6070d51c2c58587f1d0f0604594e6c5728bf37e46da3a5952a0e0f0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1529824590ac5cdb7d4ffb67449be6a44f3bef9db40646bfa13bb5979e1a2f2d\",\"dweb:/ipfs/QmbXKFyqUaL1vv6wn7avWn463Uf8JgJvVLN6v5rUdJbys7\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xda130fbf6651046517801d119593b7f81e7a2a824f82cb15b1852495fa7fb148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c10ab3e768804fc8eee91502f34dd1e1d2d2e7d90d8ec0a26fac40d83ed940db\",\"dweb:/ipfs/QmNMqyFM6xC49uRAMeY3MhoQ9yK2ZHdQLt3QxrsNK9Kfkw\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xccfb106f6bd8829c369c19d08ef4f8ffc8ebbf5c51a9e148141733ff9bbc49f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d11ddba27aace6aefe451d75b4403ceb10f0a71cd61163e8f812728820107e62\",\"dweb:/ipfs/QmdSZJtY5LaJVnHYRwKAofo6oiihqpazC22Q1X9aL9uNbx\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x42a910bd6ee869fc53f18f2991cbf75a667d663ed41b4a11e18b328546ede7db\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://77345fdb9b99d0b04fa7cf719857eae63362e20db6b99da35ac886a13bf3b56a\",\"dweb:/ipfs/QmXatm27fhzsApgrMq978mye2u8fk62D89pUgV4WsjQeyH\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4\",\"dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU\"]}},\"version\":1}",
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
              "_targets": "The addresses that can be swept by governance. This        allows governance to collect rewards derived from incentive        programs while also preventing edge cases where `sweep` is used        to access the pool or base tokens."
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
    "id": 2636,
    "exportedSymbols": {
      "ERC20": [
        60340
      ],
      "ERC4626Base": [
        2468
      ],
      "ERC4626Hyperdrive": [
        2635
      ],
      "FixedPointMath": [
        10533
      ],
      "Hyperdrive": [
        504
      ],
      "IERC20": [
        3030
      ],
      "IERC4626": [
        3255
      ],
      "IERC4626Hyperdrive": [
        3270
      ],
      "IHyperdrive": [
        3759
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:3993:6",
    "nodes": [
      {
        "id": 2470,
        "nodeType": "PragmaDirective",
        "src": "39:23:6",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 2472,
        "nodeType": "ImportDirective",
        "src": "64:49:6",
        "nodes": [],
        "absolutePath": "lib/solmate/src/tokens/ERC20.sol",
        "file": "solmate/tokens/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2636,
        "sourceUnit": 60341,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2471,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 60340,
              "src": "73:5:6",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2474,
        "nodeType": "ImportDirective",
        "src": "114:56:6",
        "nodes": [],
        "absolutePath": "contracts/src/external/Hyperdrive.sol",
        "file": "../external/Hyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2636,
        "sourceUnit": 505,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2473,
              "name": "Hyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 504,
              "src": "123:10:6",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2476,
        "nodeType": "ImportDirective",
        "src": "171:50:6",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "../interfaces/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2636,
        "sourceUnit": 3031,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2475,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3030,
              "src": "180:6:6",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2478,
        "nodeType": "ImportDirective",
        "src": "222:54:6",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC4626.sol",
        "file": "../interfaces/IERC4626.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2636,
        "sourceUnit": 3256,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2477,
              "name": "IERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3255,
              "src": "231:8:6",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2480,
        "nodeType": "ImportDirective",
        "src": "277:60:6",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2636,
        "sourceUnit": 3760,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2479,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3759,
              "src": "286:11:6",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2482,
        "nodeType": "ImportDirective",
        "src": "338:74:6",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC4626Hyperdrive.sol",
        "file": "../interfaces/IERC4626Hyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2636,
        "sourceUnit": 3271,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2481,
              "name": "IERC4626Hyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3270,
              "src": "347:18:6",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2484,
        "nodeType": "ImportDirective",
        "src": "413:65:6",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2636,
        "sourceUnit": 10534,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2483,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10533,
              "src": "422:14:6",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2486,
        "nodeType": "ImportDirective",
        "src": "479:48:6",
        "nodes": [],
        "absolutePath": "contracts/src/instances/ERC4626Base.sol",
        "file": "./ERC4626Base.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2636,
        "sourceUnit": 2469,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2485,
              "name": "ERC4626Base",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 2468,
              "src": "488:11:6",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2635,
        "nodeType": "ContractDefinition",
        "src": "880:3151:6",
        "nodes": [
          {
            "id": 2494,
            "nodeType": "UsingForDirective",
            "src": "940:33:6",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 2492,
              "name": "FixedPointMath",
              "nameLocations": [
                "946:14:6"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 10533,
              "src": "946:14:6"
            },
            "typeName": {
              "id": 2493,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "965:7:6",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 2622,
            "nodeType": "FunctionDefinition",
            "src": "1555:1690:6",
            "nodes": [],
            "body": {
              "id": 2621,
              "nodeType": "Block",
              "src": "1792:1453:6",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2523,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 2519,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2498,
                        "src": "2277:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 2520,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2285:17:6",
                      "memberName": "initialSharePrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3529,
                      "src": "2277:25:6",
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
                        "id": 2521,
                        "name": "_pricePerShare",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          2450
                        ],
                        "referencedDeclaration": 2450,
                        "src": "2306:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 2522,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2306:16:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2277:45:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2530,
                  "nodeType": "IfStatement",
                  "src": "2273:121:6",
                  "trueBody": {
                    "id": 2529,
                    "nodeType": "Block",
                    "src": "2324:70:6",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2524,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3759,
                              "src": "2345:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2526,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2357:24:6",
                            "memberName": "InvalidInitialSharePrice",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3627,
                            "src": "2345:36:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2527,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2345:38:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2528,
                        "nodeType": "RevertStatement",
                        "src": "2338:45:6"
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
                    "id": 2541,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 2533,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2498,
                            "src": "2415:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 2534,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2423:9:6",
                          "memberName": "baseToken",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3520,
                          "src": "2415:17:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$3030",
                            "typeString": "contract IERC20"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IERC20_$3030",
                            "typeString": "contract IERC20"
                          }
                        ],
                        "id": 2532,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2407:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 2531,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2407:7:6",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 2535,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2407:26:6",
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
                              "id": 2537,
                              "name": "_pool",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2296,
                              "src": "2446:5:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC4626_$3255",
                                "typeString": "contract IERC4626"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IERC4626_$3255",
                                "typeString": "contract IERC4626"
                              }
                            ],
                            "id": 2536,
                            "name": "IERC4626",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3255,
                            "src": "2437:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC4626_$3255_$",
                              "typeString": "type(contract IERC4626)"
                            }
                          },
                          "id": 2538,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2437:15:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC4626_$3255",
                            "typeString": "contract IERC4626"
                          }
                        },
                        "id": 2539,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2453:5:6",
                        "memberName": "asset",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3124,
                        "src": "2437:21:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$__$returns$_t_address_$",
                          "typeString": "function () view external returns (address)"
                        }
                      },
                      "id": 2540,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2437:23:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2407:53:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2548,
                  "nodeType": "IfStatement",
                  "src": "2403:121:6",
                  "trueBody": {
                    "id": 2547,
                    "nodeType": "Block",
                    "src": "2462:62:6",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2542,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3759,
                              "src": "2483:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2544,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2495:16:6",
                            "memberName": "InvalidBaseToken",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3621,
                            "src": "2483:28:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2545,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2483:30:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2546,
                        "nodeType": "RevertStatement",
                        "src": "2476:37:6"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "id": 2562,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "2611:61:6",
                    "subExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 2554,
                              "name": "_pool",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2296,
                              "src": "2646:5:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC4626_$3255",
                                "typeString": "contract IERC4626"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IERC4626_$3255",
                                "typeString": "contract IERC4626"
                              }
                            ],
                            "id": 2553,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2638:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 2552,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2638:7:6",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 2555,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2638:14:6",
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
                                "id": 2558,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2659:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 2557,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2659:7:6",
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
                              "id": 2556,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -27,
                              "src": "2654:4:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 2559,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2654:13:6",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_uint256",
                              "typeString": "type(uint256)"
                            }
                          },
                          "id": 2560,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2668:3:6",
                          "memberName": "max",
                          "nodeType": "MemberAccess",
                          "src": "2654:17:6",
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
                            "id": 2549,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2498,
                            "src": "2612:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 2550,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2620:9:6",
                          "memberName": "baseToken",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3520,
                          "src": "2612:17:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$3030",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 2551,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2630:7:6",
                        "memberName": "approve",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3018,
                        "src": "2612:25:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 2561,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2612:60:6",
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
                  "id": 2569,
                  "nodeType": "IfStatement",
                  "src": "2607:127:6",
                  "trueBody": {
                    "id": 2568,
                    "nodeType": "Block",
                    "src": "2674:60:6",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2563,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3759,
                              "src": "2695:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2565,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2707:14:6",
                            "memberName": "ApprovalFailed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3611,
                            "src": "2695:26:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2566,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2695:28:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2567,
                        "nodeType": "RevertStatement",
                        "src": "2688:35:6"
                      }
                    ]
                  }
                },
                {
                  "body": {
                    "id": 2619,
                    "nodeType": "Block",
                    "src": "2935:304:6",
                    "statements": [
                      {
                        "assignments": [
                          2582
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 2582,
                            "mutability": "mutable",
                            "name": "target",
                            "nameLocation": "2957:6:6",
                            "nodeType": "VariableDeclaration",
                            "scope": 2619,
                            "src": "2949:14:6",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "typeName": {
                              "id": 2581,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2949:7:6",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 2586,
                        "initialValue": {
                          "baseExpression": {
                            "id": 2583,
                            "name": "_targets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2508,
                            "src": "2966:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 2585,
                          "indexExpression": {
                            "id": 2584,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2571,
                            "src": "2975:1:6",
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
                          "src": "2966:11:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2949:28:6"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 2605,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 2595,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 2589,
                                  "name": "target",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2582,
                                  "src": "3020:6:6",
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
                                "id": 2588,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3012:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 2587,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3012:7:6",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 2590,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3012:15:6",
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
                                  "id": 2593,
                                  "name": "_pool",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2296,
                                  "src": "3039:5:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IERC4626_$3255",
                                    "typeString": "contract IERC4626"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IERC4626_$3255",
                                    "typeString": "contract IERC4626"
                                  }
                                ],
                                "id": 2592,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3031:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 2591,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3031:7:6",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 2594,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3031:14:6",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "3012:33:6",
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
                            "id": 2604,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 2598,
                                  "name": "target",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2582,
                                  "src": "3073:6:6",
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
                                "id": 2597,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3065:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 2596,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3065:7:6",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 2599,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3065:15:6",
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
                                  "id": 2602,
                                  "name": "_baseToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9215,
                                  "src": "3092:10:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IERC20_$3030",
                                    "typeString": "contract IERC20"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IERC20_$3030",
                                    "typeString": "contract IERC20"
                                  }
                                ],
                                "id": 2601,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3084:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 2600,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3084:7:6",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 2603,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3084:19:6",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "3065:38:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "3012:91:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 2612,
                        "nodeType": "IfStatement",
                        "src": "2991:197:6",
                        "trueBody": {
                          "id": 2611,
                          "nodeType": "Block",
                          "src": "3118:70:6",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "id": 2606,
                                    "name": "IHyperdrive",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3759,
                                    "src": "3143:11:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                      "typeString": "type(contract IHyperdrive)"
                                    }
                                  },
                                  "id": 2608,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "3155:16:6",
                                  "memberName": "UnsupportedToken",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 3663,
                                  "src": "3143:28:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 2609,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3143:30:6",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 2610,
                              "nodeType": "RevertStatement",
                              "src": "3136:37:6"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 2617,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 2613,
                              "name": "_isSweepable",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2301,
                              "src": "3201:12:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 2615,
                            "indexExpression": {
                              "id": 2614,
                              "name": "target",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2582,
                              "src": "3214:6:6",
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
                            "src": "3201:20:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 2616,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3224:4:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "3201:27:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 2618,
                        "nodeType": "ExpressionStatement",
                        "src": "3201:27:6"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2577,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2574,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2571,
                      "src": "2909:1:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 2575,
                        "name": "_targets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2508,
                        "src": "2913:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 2576,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2922:6:6",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2913:15:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2909:19:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2620,
                  "initializationExpression": {
                    "assignments": [
                      2571
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 2571,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "2902:1:6",
                        "nodeType": "VariableDeclaration",
                        "scope": 2620,
                        "src": "2894:9:6",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2570,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2894:7:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 2573,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 2572,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2906:1:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2894:13:6"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 2579,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2930:3:6",
                      "subExpression": {
                        "id": 2578,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2571,
                        "src": "2930:1:6",
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
                    "id": 2580,
                    "nodeType": "ExpressionStatement",
                    "src": "2930:3:6"
                  },
                  "nodeType": "ForStatement",
                  "src": "2889:350:6"
                }
              ]
            },
            "documentation": {
              "id": 2495,
              "nodeType": "StructuredDocumentation",
              "src": "979:571:6",
              "text": "@notice Instantiates Hyperdrive with a ERC4626 vault as the yield source.\n @param _config The configuration of the Hyperdrive pool.\n @param _target0 The target0 address.\n @param _target1 The target1 address.\n @param __pool The ERC4626 compatible yield source.\n @param _targets The addresses that can be swept by governance. This\n        allows governance to collect rewards derived from incentive\n        programs while also preventing edge cases where `sweep` is used\n        to access the pool or base tokens."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 2511,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2498,
                    "src": "1743:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  {
                    "id": 2512,
                    "name": "_target0",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2500,
                    "src": "1752:8:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 2513,
                    "name": "_target1",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2502,
                    "src": "1762:8:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 2514,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 2510,
                  "name": "Hyperdrive",
                  "nameLocations": [
                    "1732:10:6"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 504,
                  "src": "1732:10:6"
                },
                "nodeType": "ModifierInvocation",
                "src": "1732:39:6"
              },
              {
                "arguments": [
                  {
                    "id": 2516,
                    "name": "__pool",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2505,
                    "src": "1784:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$3255",
                      "typeString": "contract IERC4626"
                    }
                  }
                ],
                "id": 2517,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 2515,
                  "name": "ERC4626Base",
                  "nameLocations": [
                    "1772:11:6"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 2468,
                  "src": "1772:11:6"
                },
                "nodeType": "ModifierInvocation",
                "src": "1772:19:6"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 2509,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2498,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "1606:7:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 2622,
                  "src": "1576:37:6",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 2497,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2496,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "1576:11:6",
                        "1588:10:6"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3558,
                      "src": "1576:22:6"
                    },
                    "referencedDeclaration": 3558,
                    "src": "1576:22:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2500,
                  "mutability": "mutable",
                  "name": "_target0",
                  "nameLocation": "1631:8:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 2622,
                  "src": "1623:16:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2499,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1623:7:6",
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
                  "id": 2502,
                  "mutability": "mutable",
                  "name": "_target1",
                  "nameLocation": "1657:8:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 2622,
                  "src": "1649:16:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2501,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1649:7:6",
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
                  "id": 2505,
                  "mutability": "mutable",
                  "name": "__pool",
                  "nameLocation": "1684:6:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 2622,
                  "src": "1675:15:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC4626_$3255",
                    "typeString": "contract IERC4626"
                  },
                  "typeName": {
                    "id": 2504,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2503,
                      "name": "IERC4626",
                      "nameLocations": [
                        "1675:8:6"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3255,
                      "src": "1675:8:6"
                    },
                    "referencedDeclaration": 3255,
                    "src": "1675:8:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$3255",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2508,
                  "mutability": "mutable",
                  "name": "_targets",
                  "nameLocation": "1717:8:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 2622,
                  "src": "1700:25:6",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 2506,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1700:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 2507,
                    "nodeType": "ArrayTypeName",
                    "src": "1700:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1566:165:6"
            },
            "returnParameters": {
              "id": 2518,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1792:0:6"
            },
            "scope": 2635,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 2634,
            "nodeType": "FunctionDefinition",
            "src": "3962:67:6",
            "nodes": [],
            "body": {
              "id": 2633,
              "nodeType": "Block",
              "src": "3994:35:6",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2630,
                        "name": "target1",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42,
                        "src": "4014:7:6",
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
                      "id": 2629,
                      "name": "_delegate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 503,
                      "src": "4004:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address) returns (bytes memory)"
                      }
                    },
                    "id": 2631,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4004:18:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "id": 2632,
                  "nodeType": "ExpressionStatement",
                  "src": "4004:18:6"
                }
              ]
            },
            "documentation": {
              "id": 2623,
              "nodeType": "StructuredDocumentation",
              "src": "3251:706:6",
              "text": "@notice Some yield sources [eg Morpho] pay rewards directly to this\n         contract but we can't handle distributing them internally so we\n         sweep to the fee collector address to then redistribute to users.\n @dev WARN: The entire balance of any of the sweep targets can be swept\n      by governance. If these sweep targets provide access to the base or\n      pool token, then governance has the ability to rug the pool.\n @dev WARN: It is unlikely but possible that there is a selector overlap\n      with 'transferFrom'. Any integrating contracts should be checked\n      for that, as it may result in an unexpected call from this address."
            },
            "functionSelector": "01681a62",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sweep",
            "nameLocation": "3971:5:6",
            "parameters": {
              "id": 2627,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2626,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2634,
                  "src": "3977:6:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$3030",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 2625,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2624,
                      "name": "IERC20",
                      "nameLocations": [
                        "3977:6:6"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3030,
                      "src": "3977:6:6"
                    },
                    "referencedDeclaration": 3030,
                    "src": "3977:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$3030",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3976:8:6"
            },
            "returnParameters": {
              "id": 2628,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3994:0:6"
            },
            "scope": 2635,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 2488,
              "name": "Hyperdrive",
              "nameLocations": [
                "910:10:6"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 504,
              "src": "910:10:6"
            },
            "id": 2489,
            "nodeType": "InheritanceSpecifier",
            "src": "910:10:6"
          },
          {
            "baseName": {
              "id": 2490,
              "name": "ERC4626Base",
              "nameLocations": [
                "922:11:6"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2468,
              "src": "922:11:6"
            },
            "id": 2491,
            "nodeType": "InheritanceSpecifier",
            "src": "922:11:6"
          }
        ],
        "canonicalName": "ERC4626Hyperdrive",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 2487,
          "nodeType": "StructuredDocumentation",
          "src": "529:351:6",
          "text": "@author DELV\n @title ERC4626Hyperdrive\n @notice A Hyperdrive instance that uses a ERC4626 vault as the yield source.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
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
        "name": "ERC4626Hyperdrive",
        "nameLocation": "889:17:6",
        "scope": 2636,
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
  "id": 6
} as const;
