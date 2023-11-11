export const HyperdriveLong = 
{
  "abi": [
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
      "name": "InvalidCheckpointDuration",
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
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
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
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"BaseBufferExceedsShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BelowMinimumContribution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidApr\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativeInterest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Paused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolAlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minApr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxApr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"dataProvider\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"traderDeposit\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_withdrawalShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutputPerShare\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesRedeemed\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_lpShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalShares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_contribution\":\"The amount to supply.\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"lpShares\":\"The number of LP tokens created\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"the source account\",\"ids\":\"The array of token ids of the asset to transfer\",\"to\":\"the destination account\",\"values\":\"The amount of each token to transfer\"}},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of longs to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum amount of base the trader will accept.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The amount of underlying the user receives.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The amount of base collected.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount to supply.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"lpShares\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_amount\":\"The amount to open a long with.\",\"_minOutput\":\"The minimum number of bonds to receive.\",\"_minSharePrice\":\"The minimum share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"bondProceeds\":\"The amount of bonds the user received\",\"maturityTime\":\"The maturity time of the bonds.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should be generated with the      eth_signTypedData JSON RPC call instead of the eth_sign JSON RPC call. If using out of date      parity signing libraries the v component may need to be adjusted. Also it is very rare but possible      for v to be other values, those values are not supported.\",\"params\":{\"_approved\":\"a boolean of the approval status to set to\",\"deadline\":\"the timestamp which the signature must be submitted by to be valid\",\"owner\":\"the owner of the account which is having the new approval set\",\"r\":\"The r component of the ECDSA signature\",\"s\":\"The s component of the ECDSA signature\",\"spender\":\"the address which will be allowed to spend owner's tokens\",\"v\":\"Extra ECDSA data which allows public key recovery from signature assumed to be 27 or 28\"}},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_minOutputPerShare\":\"The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.\",\"_options\":\"The options that configure how the operation is settled.\",\"_withdrawalShares\":\"The withdrawal shares to redeem.\"},\"returns\":{\"proceeds\":\"The amount the LP received.\",\"withdrawalSharesRedeemed\":\"The amount of withdrawal shares that were redeemed.\"}},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_lpShares\":\"The LP shares to burn.\",\"_minOutput\":\"The minium amount of the base token to receive.Note - this        value is likely to be less than the amount LP shares are worth.        The remainder is in short and long withdraw shares which are hard        to game the value of.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"proceeds\":\"The amount the LP removing liquidity receives. The         LP receives a proportional amount of the pool's idle capital\",\"withdrawalShares\":\"The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal         in value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]\",\"operator\":\"The address who will be able to use the tokens\",\"tokenID\":\"The asset to approve the use of\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]\",\"caller\":\"The eth address which called the linking contract\",\"operator\":\"The address who will be able to use the tokens\",\"tokenID\":\"The asset to approve the use of\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval\",\"operator\":\"The eth address which can access the caller's assets\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move\",\"from\":\"The address who's balance will be reduced\",\"to\":\"The address who's balance will be increased\",\"tokenID\":\"The token identifier\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move\",\"caller\":\"The msg.sender from the bridge\",\"from\":\"The address who's balance will be reduced\",\"to\":\"The address who's balance will be increased\",\"tokenID\":\"The token identifier\"}}},\"title\":\"HyperdriveLong\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"###################### ### ERC20Forwarder ### ######################\"}],\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}],\"Unauthorized()\":[{\"notice\":\"############### ### Factory ### ###############\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"###################### ### SafeCast ### ######################\"}]},\"events\":{\"PauserUpdated(address)\":{\"notice\":\"Pause ///\"}},\"kind\":\"user\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owners signature.\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to set asset approvals\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permission-ed transfer for the bridge to access, only callable by         the ERC20 linking bridge\"}},\"notice\":\"Implements the long accounting for Hyperdrive.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/HyperdriveLong.sol\":\"HyperdriveLong\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/DataProvider.sol\":{\"keccak256\":\"0x4ab8d6b27ad40963fde6512935aa0163c00259a51477bcb15d85f222d84ed0a6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3eaed8100e054b7b6d3dd34b80c72ab86669076d72e83daca1c6297441ac0e4b\",\"dweb:/ipfs/QmPCr6XchfY4nbvVdvnuJzPJc434AV6HAnjQXnSgo9vNDt\"]},\"contracts/src/HyperdriveBase.sol\":{\"keccak256\":\"0xd8b673eb52f74ac18cd75bcc4a9a4ba56bb952eb31600d522b6046c25e8d4c32\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://17a8b842f8538181e5a56fd3a904b7aa1bde2eb2c3d5e7fc55bbf5aea084ffbd\",\"dweb:/ipfs/QmVFB1ysPMXo6DPRdc3bAfMpWY8VCPwS3xhxmUFDRY4Zgu\"]},\"contracts/src/HyperdriveLP.sol\":{\"keccak256\":\"0x8d7edd9add98082a7a8d269f99788237a0b244c8dca3556a367b764bc3c17c02\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://abfe277c6982ed6344c8a2e4507e322d61fbbb76f62c673bdfbaa61495188669\",\"dweb:/ipfs/QmRp1Fc2WkAxQjxLWBr4Y7RL5j2VAQpqWMZ8Zd7sAAE2FJ\"]},\"contracts/src/HyperdriveLong.sol\":{\"keccak256\":\"0x7dda4c0437e908336901192a3ac4290dfd27a8afc618f4dd787c517ffe608d9c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://70133e63ca643fce51ac8eac8cadb96910fcabde98362e8c3cf91c0b629779f0\",\"dweb:/ipfs/QmTqAFsCvvA2X43oLfbmUFqvaj7eMLLHZ9odREFsBtzdmf\"]},\"contracts/src/HyperdriveStorage.sol\":{\"keccak256\":\"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a\",\"dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY\"]},\"contracts/src/HyperdriveTWAP.sol\":{\"keccak256\":\"0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc\",\"dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac\"]},\"contracts/src/interfaces/IDataProvider.sol\":{\"keccak256\":\"0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15\",\"dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78\",\"dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206\",\"dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xa425f4064f7e95fc5da7763b26627ef0be68db76763bde67cd54cfda489a19ed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://abc4b8f6f8c66a0d966b1dc366d689fc2844a60d866ed3f19cdd3852a0c274f6\",\"dweb:/ipfs/QmUSo1URvRru11TYPMGSdQR6FDRZk7SPh8tcze3T6XL4gL\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xbd61fe3be6d0c8742f09a8174a5a2757e9070805b49d3fc7217f120b83c0ce0f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5b6524a56a3062a3d9b47c2ad2712f90643a84971cd155f8f00fd31ef7a432fe\",\"dweb:/ipfs/QmXYtLBzjaVkh4WhTxTE1GEoqjcyidw1peyAenfAd5vPPr\"]},\"contracts/src/token/MultiToken.sol\":{\"keccak256\":\"0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98\",\"dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy\"]},\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
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
          "name": "InvalidCheckpointDuration"
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
          "collectGovernanceFee((address,bool,bytes))": {
            "params": {
              "_options": "The options that configure how the fees are settled."
            },
            "returns": {
              "proceeds": "The amount of base collected."
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
          "closeLong(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Closes a long position with a specified maturity time."
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
        "openzeppelin/=lib/openzeppelin-contracts/contracts/",
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
        "contracts/src/HyperdriveLong.sol": "HyperdriveLong"
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
    "absolutePath": "contracts/src/HyperdriveLong.sol",
    "id": 3909,
    "exportedSymbols": {
      "AssetId": [
        8311
      ],
      "FixedPointMath": [
        9066
      ],
      "HyperdriveLP": [
        3078
      ],
      "HyperdriveLong": [
        3908
      ],
      "HyperdriveMath": [
        9918
      ],
      "IHyperdrive": [
        7431
      ],
      "IHyperdriveWrite": [
        7668
      ],
      "SafeCast": [
        9994
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:23184:5",
    "nodes": [
      {
        "id": 3080,
        "nodeType": "PragmaDirective",
        "src": "39:23:5",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 3082,
        "nodeType": "ImportDirective",
        "src": "64:50:5",
        "nodes": [],
        "absolutePath": "contracts/src/HyperdriveLP.sol",
        "file": "./HyperdriveLP.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3909,
        "sourceUnit": 3079,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3081,
              "name": "HyperdriveLP",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3078,
              "src": "73:12:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3084,
        "nodeType": "ImportDirective",
        "src": "115:59:5",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "./interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3909,
        "sourceUnit": 7432,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3083,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7431,
              "src": "124:11:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3086,
        "nodeType": "ImportDirective",
        "src": "175:69:5",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveWrite.sol",
        "file": "./interfaces/IHyperdriveWrite.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3909,
        "sourceUnit": 7669,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3085,
              "name": "IHyperdriveWrite",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7668,
              "src": "184:16:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3088,
        "nodeType": "ImportDirective",
        "src": "245:50:5",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/AssetId.sol",
        "file": "./libraries/AssetId.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3909,
        "sourceUnit": 8312,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3087,
              "name": "AssetId",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8311,
              "src": "254:7:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3090,
        "nodeType": "ImportDirective",
        "src": "296:64:5",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "./libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3909,
        "sourceUnit": 9067,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3089,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9066,
              "src": "305:14:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3092,
        "nodeType": "ImportDirective",
        "src": "361:64:5",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
        "file": "./libraries/HyperdriveMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3909,
        "sourceUnit": 9919,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3091,
              "name": "HyperdriveMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9918,
              "src": "370:14:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3094,
        "nodeType": "ImportDirective",
        "src": "426:52:5",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/SafeCast.sol",
        "file": "./libraries/SafeCast.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3909,
        "sourceUnit": 9995,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3093,
              "name": "SafeCast",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9994,
              "src": "435:8:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3908,
        "nodeType": "ContractDefinition",
        "src": "806:22416:5",
        "nodes": [
          {
            "id": 3102,
            "nodeType": "UsingForDirective",
            "src": "879:33:5",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 3100,
              "name": "FixedPointMath",
              "nameLocations": [
                "885:14:5"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9066,
              "src": "885:14:5"
            },
            "typeName": {
              "id": 3101,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "904:7:5",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 3105,
            "nodeType": "UsingForDirective",
            "src": "917:32:5",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 3103,
              "name": "FixedPointMath",
              "nameLocations": [
                "923:14:5"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9066,
              "src": "923:14:5"
            },
            "typeName": {
              "id": 3104,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "942:6:5",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            }
          },
          {
            "id": 3108,
            "nodeType": "UsingForDirective",
            "src": "954:27:5",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 3106,
              "name": "SafeCast",
              "nameLocations": [
                "960:8:5"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9994,
              "src": "960:8:5"
            },
            "typeName": {
              "id": 3107,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "973:7:5",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 3111,
            "nodeType": "UsingForDirective",
            "src": "986:26:5",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 3109,
              "name": "SafeCast",
              "nameLocations": [
                "992:8:5"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9994,
              "src": "992:8:5"
            },
            "typeName": {
              "id": 3110,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "1005:6:5",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            }
          },
          {
            "id": 3262,
            "nodeType": "FunctionDefinition",
            "src": "1609:2614:5",
            "nodes": [],
            "body": {
              "id": 3261,
              "nodeType": "Block",
              "src": "1904:2319:5",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 3132,
                      "name": "_checkMessageValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 777,
                      "src": "1964:18:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$__$",
                        "typeString": "function () view"
                      }
                    },
                    "id": 3133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1964:20:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3134,
                  "nodeType": "ExpressionStatement",
                  "src": "1964:20:5"
                },
                {
                  "assignments": [
                    3136,
                    3138
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3136,
                      "mutability": "mutable",
                      "name": "sharesDeposited",
                      "nameLocation": "2048:15:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3261,
                      "src": "2040:23:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3135,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2040:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 3138,
                      "mutability": "mutable",
                      "name": "sharePrice",
                      "nameLocation": "2073:10:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3261,
                      "src": "2065:18:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3137,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2065:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3143,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 3140,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3114,
                        "src": "2109:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3141,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3121,
                        "src": "2130:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
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
                          "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      ],
                      "id": 3139,
                      "name": "_deposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 790,
                      "src": "2087:8:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$7295_calldata_ptr_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)"
                      }
                    },
                    "id": 3142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2087:61:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2039:109:5"
                },
                {
                  "assignments": [
                    3145
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3145,
                      "mutability": "mutable",
                      "name": "baseDeposited",
                      "nameLocation": "2222:13:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3261,
                      "src": "2214:21:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3144,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2214:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3151,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 3147,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3114,
                        "src": "2276:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3148,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3138,
                        "src": "2297:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3149,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3121,
                        "src": "2321:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      ],
                      "id": 3146,
                      "name": "_convertToBaseFromOption",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1438,
                      "src": "2238:24:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$7295_calldata_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                      }
                    },
                    "id": 3150,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2238:101:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2214:125:5"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 3154,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 3152,
                      "name": "baseDeposited",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3145,
                      "src": "2353:13:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 3153,
                      "name": "_minimumTransactionAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4829,
                      "src": "2369:25:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2353:41:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 3161,
                  "nodeType": "IfStatement",
                  "src": "2349:117:5",
                  "trueBody": {
                    "id": 3160,
                    "nodeType": "Block",
                    "src": "2396:70:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 3155,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "2417:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 3157,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2429:24:5",
                            "memberName": "MinimumTransactionAmount",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7354,
                            "src": "2417:36:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 3158,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2417:38:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3159,
                        "nodeType": "RevertStatement",
                        "src": "2410:45:5"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 3164,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 3162,
                      "name": "sharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3138,
                      "src": "2479:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 3163,
                      "name": "_minSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3118,
                      "src": "2492:14:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2479:27:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 3171,
                  "nodeType": "IfStatement",
                  "src": "2475:96:5",
                  "trueBody": {
                    "id": 3170,
                    "nodeType": "Block",
                    "src": "2508:63:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 3165,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "2529:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 3167,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2541:17:5",
                            "memberName": "MinimumSharePrice",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7352,
                            "src": "2529:29:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 3168,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2529:31:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3169,
                        "nodeType": "RevertStatement",
                        "src": "2522:38:5"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    3173
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3173,
                      "mutability": "mutable",
                      "name": "latestCheckpoint",
                      "nameLocation": "2622:16:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3261,
                      "src": "2614:24:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3172,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2614:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3176,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 3174,
                      "name": "_latestCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5113,
                      "src": "2641:17:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 3175,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2641:19:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2614:46:5"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 3178,
                        "name": "latestCheckpoint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3173,
                        "src": "2687:16:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3179,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3138,
                        "src": "2705:10:5",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3177,
                      "name": "_applyCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 917,
                      "src": "2670:16:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 3180,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2670:46:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3181,
                  "nodeType": "ExpressionStatement",
                  "src": "2670:46:5"
                },
                {
                  "assignments": [
                    3183
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3183,
                      "mutability": "mutable",
                      "name": "shareReservesDelta",
                      "nameLocation": "2888:18:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3261,
                      "src": "2880:26:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3182,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2880:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3184,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2880:26:5"
                },
                {
                  "assignments": [
                    3186
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3186,
                      "mutability": "mutable",
                      "name": "bondReservesDelta",
                      "nameLocation": "2924:17:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3261,
                      "src": "2916:25:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3185,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2916:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3187,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2916:25:5"
                },
                {
                  "assignments": [
                    3189
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3189,
                      "mutability": "mutable",
                      "name": "totalGovernanceFee",
                      "nameLocation": "2959:18:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3261,
                      "src": "2951:26:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3188,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2951:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3190,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2951:26:5"
                },
                {
                  "expression": {
                    "id": 3200,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 3191,
                          "name": "shareReservesDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3183,
                          "src": "3001:18:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 3192,
                          "name": "bondReservesDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3186,
                          "src": "3033:17:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 3193,
                          "name": "bondProceeds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3130,
                          "src": "3064:12:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 3194,
                          "name": "totalGovernanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3189,
                          "src": "3090:18:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 3195,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "2987:131:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 3197,
                          "name": "sharesDeposited",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3136,
                          "src": "3140:15:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 3198,
                          "name": "sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3138,
                          "src": "3157:10:5",
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
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 3196,
                        "name": "_calculateOpenLong",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3777,
                        "src": "3121:18:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                          "typeString": "function (uint256,uint256) returns (uint256,uint256,uint256,uint256)"
                        }
                      },
                      "id": 3199,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3121:47:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,uint256)"
                      }
                    },
                    "src": "2987:181:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3201,
                  "nodeType": "ExpressionStatement",
                  "src": "2987:181:5"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 3204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 3202,
                      "name": "_minOutput",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3116,
                      "src": "3219:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 3203,
                      "name": "bondProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3130,
                      "src": "3232:12:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3219:25:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 3210,
                  "nodeType": "IfStatement",
                  "src": "3215:63:5",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 3205,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7431,
                          "src": "3253:11:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 3207,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3265:11:5",
                        "memberName": "OutputLimit",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7336,
                        "src": "3253:23:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 3208,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3253:25:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3209,
                    "nodeType": "RevertStatement",
                    "src": "3246:32:5"
                  }
                },
                {
                  "expression": {
                    "id": 3213,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 3211,
                      "name": "_governanceFeesAccrued",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4859,
                      "src": "3330:22:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 3212,
                      "name": "totalGovernanceFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3189,
                      "src": "3356:18:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3330:44:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3214,
                  "nodeType": "ExpressionStatement",
                  "src": "3330:44:5"
                },
                {
                  "expression": {
                    "id": 3219,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 3215,
                      "name": "maturityTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3128,
                      "src": "3430:12:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 3218,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 3216,
                        "name": "latestCheckpoint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3173,
                        "src": "3445:16:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "id": 3217,
                        "name": "_positionDuration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4817,
                        "src": "3464:17:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3445:36:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3430:51:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3220,
                  "nodeType": "ExpressionStatement",
                  "src": "3430:51:5"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 3222,
                        "name": "shareReservesDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3183,
                        "src": "3519:18:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3223,
                        "name": "bondProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3130,
                        "src": "3551:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3224,
                        "name": "bondReservesDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3186,
                        "src": "3577:17:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3225,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3138,
                        "src": "3608:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3226,
                        "name": "latestCheckpoint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3173,
                        "src": "3632:16:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3227,
                        "name": "maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3128,
                        "src": "3662:12:5",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3221,
                      "name": "_applyOpenLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3571,
                      "src": "3491:14:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "id": 3228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3491:193:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3229,
                  "nodeType": "ExpressionStatement",
                  "src": "3491:193:5"
                },
                {
                  "assignments": [
                    3231
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3231,
                      "mutability": "mutable",
                      "name": "assetId",
                      "nameLocation": "3776:7:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3261,
                      "src": "3768:15:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3230,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3768:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3239,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "expression": {
                            "id": 3234,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8311,
                            "src": "3821:7:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                              "typeString": "type(library AssetId)"
                            }
                          },
                          "id": 3235,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3829:13:5",
                          "memberName": "AssetIdPrefix",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8017,
                          "src": "3821:21:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$8017_$",
                            "typeString": "type(enum AssetId.AssetIdPrefix)"
                          }
                        },
                        "id": 3236,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "3843:4:5",
                        "memberName": "Long",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8014,
                        "src": "3821:26:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        }
                      },
                      {
                        "id": 3237,
                        "name": "maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3128,
                        "src": "3861:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 3232,
                        "name": "AssetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8311,
                        "src": "3786:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                          "typeString": "type(library AssetId)"
                        }
                      },
                      "id": 3233,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3794:13:5",
                      "memberName": "encodeAssetId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8040,
                      "src": "3786:21:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$8017_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 3238,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3786:97:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3768:115:5"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 3241,
                        "name": "assetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3231,
                        "src": "3899:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 3242,
                          "name": "_options",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3121,
                          "src": "3908:8:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                            "typeString": "struct IHyperdrive.Options calldata"
                          }
                        },
                        "id": 3243,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3917:11:5",
                        "memberName": "destination",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7288,
                        "src": "3908:20:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 3244,
                        "name": "bondProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3130,
                        "src": "3930:12:5",
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
                      "id": 3240,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12051,
                      "src": "3893:5:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,address,uint256)"
                      }
                    },
                    "id": 3245,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3893:50:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3246,
                  "nodeType": "ExpressionStatement",
                  "src": "3893:50:5"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 3248,
                          "name": "_options",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3121,
                          "src": "4016:8:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                            "typeString": "struct IHyperdrive.Options calldata"
                          }
                        },
                        "id": 3249,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4025:11:5",
                        "memberName": "destination",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7288,
                        "src": "4016:20:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 3250,
                        "name": "assetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3231,
                        "src": "4050:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3251,
                        "name": "maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3128,
                        "src": "4071:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3252,
                        "name": "baseDeposited",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3145,
                        "src": "4097:13:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3253,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3138,
                        "src": "4124:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3254,
                        "name": "bondProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3130,
                        "src": "4148:12:5",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3247,
                      "name": "OpenLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 650,
                      "src": "3994:8:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "id": 3255,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3994:176:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3256,
                  "nodeType": "EmitStatement",
                  "src": "3989:181:5"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 3257,
                        "name": "maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3128,
                        "src": "4189:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3258,
                        "name": "bondProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3130,
                        "src": "4203:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 3259,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "4188:28:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 3131,
                  "id": 3260,
                  "nodeType": "Return",
                  "src": "4181:35:5"
                }
              ]
            },
            "baseFunctions": [
              7610
            ],
            "documentation": {
              "id": 3112,
              "nodeType": "StructuredDocumentation",
              "src": "1018:586:5",
              "text": "@notice Opens a long position.\n @param _amount The amount to open a long with.\n @param _minOutput The minimum number of bonds to receive.\n @param _minSharePrice The minimum share price at which to open the long.\n        This allows traders to protect themselves from opening a long in\n        a checkpoint where negative interest has accrued.\n @param _options The options that configure how the trade is settled.\n @return maturityTime The maturity time of the bonds.\n @return bondProceeds The amount of bonds the user received"
            },
            "functionSelector": "cba2e58d",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 3124,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 3123,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "1806:12:5"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 64179,
                  "src": "1806:12:5"
                },
                "nodeType": "ModifierInvocation",
                "src": "1806:12:5"
              },
              {
                "id": 3126,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 3125,
                  "name": "isNotPaused",
                  "nameLocations": [
                    "1827:11:5"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 907,
                  "src": "1827:11:5"
                },
                "nodeType": "ModifierInvocation",
                "src": "1827:11:5"
              }
            ],
            "name": "openLong",
            "nameLocation": "1618:8:5",
            "parameters": {
              "id": 3122,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3114,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "1644:7:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3262,
                  "src": "1636:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3113,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1636:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3116,
                  "mutability": "mutable",
                  "name": "_minOutput",
                  "nameLocation": "1669:10:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3262,
                  "src": "1661:18:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3115,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1661:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3118,
                  "mutability": "mutable",
                  "name": "_minSharePrice",
                  "nameLocation": "1697:14:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3262,
                  "src": "1689:22:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3117,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1689:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3121,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "1750:8:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3262,
                  "src": "1721:37:5",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 3120,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 3119,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "1721:11:5",
                        "1733:7:5"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7295,
                      "src": "1721:19:5"
                    },
                    "referencedDeclaration": 7295,
                    "src": "1721:19:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7295_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1626:138:5"
            },
            "returnParameters": {
              "id": 3131,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3128,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "1864:12:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3262,
                  "src": "1856:20:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3127,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1856:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3130,
                  "mutability": "mutable",
                  "name": "bondProceeds",
                  "nameLocation": "1886:12:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3262,
                  "src": "1878:20:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3129,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1878:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1855:44:5"
            },
            "scope": 3908,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 3437,
            "nodeType": "FunctionDefinition",
            "src": "4632:3419:5",
            "nodes": [],
            "body": {
              "id": 3436,
              "nodeType": "Block",
              "src": "4832:3219:5",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 3281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 3279,
                      "name": "_bondAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3267,
                      "src": "4846:11:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 3280,
                      "name": "_minimumTransactionAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4829,
                      "src": "4860:25:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4846:39:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 3288,
                  "nodeType": "IfStatement",
                  "src": "4842:115:5",
                  "trueBody": {
                    "id": 3287,
                    "nodeType": "Block",
                    "src": "4887:70:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 3282,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "4908:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 3284,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4920:24:5",
                            "memberName": "MinimumTransactionAmount",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7354,
                            "src": "4908:36:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 3285,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4908:38:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3286,
                        "nodeType": "RevertStatement",
                        "src": "4901:45:5"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    3290
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3290,
                      "mutability": "mutable",
                      "name": "sharePrice",
                      "nameLocation": "5198:10:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3436,
                      "src": "5190:18:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3289,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5190:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3293,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 3291,
                      "name": "_pricePerShare",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 807,
                      "src": "5211:14:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 3292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5211:16:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5190:37:5"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 3295,
                        "name": "_maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3265,
                        "src": "5254:13:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3296,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3290,
                        "src": "5269:10:5",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3294,
                      "name": "_applyCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 917,
                      "src": "5237:16:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 3297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5237:43:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3298,
                  "nodeType": "ExpressionStatement",
                  "src": "5237:43:5"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "expression": {
                                "id": 3302,
                                "name": "AssetId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8311,
                                "src": "5381:7:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                                  "typeString": "type(library AssetId)"
                                }
                              },
                              "id": 3303,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5389:13:5",
                              "memberName": "AssetIdPrefix",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8017,
                              "src": "5381:21:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$8017_$",
                                "typeString": "type(enum AssetId.AssetIdPrefix)"
                              }
                            },
                            "id": 3304,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "5403:4:5",
                            "memberName": "Long",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8014,
                            "src": "5381:26:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                              "typeString": "enum AssetId.AssetIdPrefix"
                            }
                          },
                          {
                            "id": 3305,
                            "name": "_maturityTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3265,
                            "src": "5409:13:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                              "typeString": "enum AssetId.AssetIdPrefix"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 3300,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8311,
                            "src": "5359:7:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                              "typeString": "type(library AssetId)"
                            }
                          },
                          "id": 3301,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5367:13:5",
                          "memberName": "encodeAssetId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8040,
                          "src": "5359:21:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$8017_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 3306,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5359:64:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 3307,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "5437:3:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 3308,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5441:6:5",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5437:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 3309,
                        "name": "_bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3267,
                        "src": "5461:11:5",
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
                      "id": 3299,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12088,
                      "src": "5340:5:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,address,uint256)"
                      }
                    },
                    "id": 3310,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5340:142:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3311,
                  "nodeType": "ExpressionStatement",
                  "src": "5340:142:5"
                },
                {
                  "assignments": [
                    3313,
                    3315,
                    3317,
                    3319,
                    3321,
                    3323
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3313,
                      "mutability": "mutable",
                      "name": "bondReservesDelta",
                      "nameLocation": "5589:17:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3436,
                      "src": "5581:25:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3312,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5581:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 3315,
                      "mutability": "mutable",
                      "name": "shareProceeds",
                      "nameLocation": "5628:13:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3436,
                      "src": "5620:21:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3314,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5620:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 3317,
                      "mutability": "mutable",
                      "name": "shareReservesDelta",
                      "nameLocation": "5663:18:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3436,
                      "src": "5655:26:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3316,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5655:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 3319,
                      "mutability": "mutable",
                      "name": "shareCurveDelta",
                      "nameLocation": "5703:15:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3436,
                      "src": "5695:23:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3318,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5695:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 3321,
                      "mutability": "mutable",
                      "name": "shareAdjustmentDelta",
                      "nameLocation": "5739:20:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3436,
                      "src": "5732:27:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 3320,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5732:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 3323,
                      "mutability": "mutable",
                      "name": "totalGovernanceFee",
                      "nameLocation": "5781:18:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3436,
                      "src": "5773:26:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3322,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5773:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3329,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 3325,
                        "name": "_bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3267,
                        "src": "5832:11:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3326,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3290,
                        "src": "5845:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3327,
                        "name": "_maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3265,
                        "src": "5857:13:5",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3324,
                      "name": "_calculateCloseLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3907,
                      "src": "5812:19:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) returns (uint256,uint256,uint256,uint256,int256,uint256)"
                      }
                    },
                    "id": 3328,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5812:59:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,uint256,int256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5567:304:5"
                },
                {
                  "assignments": [
                    3331
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3331,
                      "mutability": "mutable",
                      "name": "maturityTime",
                      "nameLocation": "6080:12:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3436,
                      "src": "6072:20:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3330,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6072:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3333,
                  "initialValue": {
                    "id": 3332,
                    "name": "_maturityTime",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3265,
                    "src": "6095:13:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6072:36:5"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 3337,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 3334,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "6153:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 3335,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6159:9:5",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "6153:15:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 3336,
                      "name": "_maturityTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3265,
                      "src": "6171:13:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6153:31:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 3389,
                  "nodeType": "IfStatement",
                  "src": "6149:1161:5",
                  "trueBody": {
                    "id": 3388,
                    "nodeType": "Block",
                    "src": "6186:1124:5",
                    "statements": [
                      {
                        "expression": {
                          "id": 3340,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 3338,
                            "name": "_governanceFeesAccrued",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4859,
                            "src": "6245:22:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 3339,
                            "name": "totalGovernanceFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3323,
                            "src": "6271:18:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6245:44:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 3341,
                        "nodeType": "ExpressionStatement",
                        "src": "6245:44:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 3343,
                              "name": "_bondAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3267,
                              "src": "6336:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3344,
                              "name": "bondReservesDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3313,
                              "src": "6365:17:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3345,
                              "name": "shareReservesDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3317,
                              "src": "6400:18:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3346,
                              "name": "shareAdjustmentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3321,
                              "src": "6436:20:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 3347,
                              "name": "maturityTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3331,
                              "src": "6474:12:5",
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
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 3342,
                            "name": "_applyCloseLong",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3672,
                            "src": "6303:15:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256,int256,uint256)"
                            }
                          },
                          "id": 3348,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6303:197:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3349,
                        "nodeType": "ExpressionStatement",
                        "src": "6303:197:5"
                      },
                      {
                        "assignments": [
                          3351
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 3351,
                            "mutability": "mutable",
                            "name": "checkpointTime",
                            "nameLocation": "6584:14:5",
                            "nodeType": "VariableDeclaration",
                            "scope": 3388,
                            "src": "6576:22:5",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 3350,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6576:7:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 3355,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 3354,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 3352,
                            "name": "maturityTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3331,
                            "src": "6601:12:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 3353,
                            "name": "_positionDuration",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4817,
                            "src": "6616:17:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6601:32:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6576:57:5"
                      },
                      {
                        "assignments": [
                          3357
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 3357,
                            "mutability": "mutable",
                            "name": "checkpointExposureBefore",
                            "nameLocation": "6654:24:5",
                            "nodeType": "VariableDeclaration",
                            "scope": 3388,
                            "src": "6647:31:5",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int128",
                              "typeString": "int128"
                            },
                            "typeName": {
                              "id": 3356,
                              "name": "int128",
                              "nodeType": "ElementaryTypeName",
                              "src": "6647:6:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 3365,
                        "initialValue": {
                          "arguments": [
                            {
                              "expression": {
                                "baseExpression": {
                                  "id": 3360,
                                  "name": "_checkpoints",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4852,
                                  "src": "6705:12:5",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7182_storage_$",
                                    "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                  }
                                },
                                "id": 3362,
                                "indexExpression": {
                                  "id": 3361,
                                  "name": "checkpointTime",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3351,
                                  "src": "6718:14:5",
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
                                "src": "6705:28:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Checkpoint_$7182_storage",
                                  "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                }
                              },
                              "id": 3363,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6734:12:5",
                              "memberName": "longExposure",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7181,
                              "src": "6705:41:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              }
                            ],
                            "id": 3359,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6681:6:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int128_$",
                              "typeString": "type(int128)"
                            },
                            "typeName": {
                              "id": 3358,
                              "name": "int128",
                              "nodeType": "ElementaryTypeName",
                              "src": "6681:6:5",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 3364,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6681:79:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_int128",
                            "typeString": "int128"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6647:113:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 3367,
                              "name": "_bondAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3267,
                              "src": "6828:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3368,
                              "name": "shareCurveDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3319,
                              "src": "6857:15:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3369,
                              "name": "bondReservesDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3313,
                              "src": "6890:17:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3370,
                              "name": "shareReservesDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3317,
                              "src": "6925:18:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3371,
                              "name": "maturityTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3331,
                              "src": "6961:12:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3372,
                              "name": "sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3290,
                              "src": "6991:10:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "74727565",
                              "id": 3373,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7019:4:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "true"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "id": 3366,
                            "name": "_updateCheckpointLongExposureOnClose",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1164,
                            "src": "6774:36:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256,bool)"
                            }
                          },
                          "id": 3374,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6774:263:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3375,
                        "nodeType": "ExpressionStatement",
                        "src": "6774:263:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 3377,
                              "name": "checkpointExposureBefore",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3357,
                              "src": "7088:24:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              }
                            },
                            {
                              "expression": {
                                "baseExpression": {
                                  "id": 3378,
                                  "name": "_checkpoints",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4852,
                                  "src": "7130:12:5",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7182_storage_$",
                                    "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                  }
                                },
                                "id": 3380,
                                "indexExpression": {
                                  "id": 3379,
                                  "name": "checkpointTime",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3351,
                                  "src": "7143:14:5",
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
                                "src": "7130:28:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Checkpoint_$7182_storage",
                                  "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                }
                              },
                              "id": 3381,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "7159:12:5",
                              "memberName": "longExposure",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7181,
                              "src": "7130:41:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              },
                              {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              }
                            ],
                            "id": 3376,
                            "name": "_updateLongExposure",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1252,
                            "src": "7051:19:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$",
                              "typeString": "function (int256,int256)"
                            }
                          },
                          "id": 3382,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7051:134:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3383,
                        "nodeType": "ExpressionStatement",
                        "src": "7051:134:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 3385,
                              "name": "sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3290,
                              "src": "7288:10:5",
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
                            "id": 3384,
                            "name": "_distributeExcessIdle",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2961,
                            "src": "7266:21:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 3386,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7266:33:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3387,
                        "nodeType": "ExpressionStatement",
                        "src": "7266:33:5"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    3391
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3391,
                      "mutability": "mutable",
                      "name": "proceeds",
                      "nameLocation": "7374:8:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3436,
                      "src": "7366:16:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3390,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7366:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3396,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 3393,
                        "name": "shareProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3315,
                        "src": "7395:13:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3394,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3272,
                        "src": "7410:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
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
                          "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      ],
                      "id": 3392,
                      "name": "_withdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 801,
                      "src": "7385:9:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$7295_calldata_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,struct IHyperdrive.Options calldata) returns (uint256)"
                      }
                    },
                    "id": 3395,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7385:34:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7366:53:5"
                },
                {
                  "assignments": [
                    3398
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3398,
                      "mutability": "mutable",
                      "name": "baseProceeds",
                      "nameLocation": "7474:12:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3436,
                      "src": "7466:20:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3397,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7466:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3404,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 3400,
                        "name": "proceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3391,
                        "src": "7527:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3401,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3290,
                        "src": "7549:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3402,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3272,
                        "src": "7573:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      ],
                      "id": 3399,
                      "name": "_convertToBaseFromOption",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1438,
                      "src": "7489:24:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$7295_calldata_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                      }
                    },
                    "id": 3403,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7489:102:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7466:125:5"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 3407,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 3405,
                      "name": "_minOutput",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3269,
                      "src": "7605:10:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 3406,
                      "name": "baseProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3398,
                      "src": "7618:12:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7605:25:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 3413,
                  "nodeType": "IfStatement",
                  "src": "7601:63:5",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 3408,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7431,
                          "src": "7639:11:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 3410,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7651:11:5",
                        "memberName": "OutputLimit",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7336,
                        "src": "7639:23:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 3411,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7639:25:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3412,
                    "nodeType": "RevertStatement",
                    "src": "7632:32:5"
                  }
                },
                {
                  "assignments": [
                    3415
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3415,
                      "mutability": "mutable",
                      "name": "bondAmount",
                      "nameLocation": "7718:10:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3436,
                      "src": "7710:18:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3414,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7710:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3417,
                  "initialValue": {
                    "id": 3416,
                    "name": "_bondAmount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3267,
                    "src": "7731:11:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7710:32:5"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 3419,
                          "name": "_options",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3272,
                          "src": "7811:8:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                            "typeString": "struct IHyperdrive.Options calldata"
                          }
                        },
                        "id": 3420,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7820:11:5",
                        "memberName": "destination",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7288,
                        "src": "7811:20:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "expression": {
                                "id": 3423,
                                "name": "AssetId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8311,
                                "src": "7867:7:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                                  "typeString": "type(library AssetId)"
                                }
                              },
                              "id": 3424,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "7875:13:5",
                              "memberName": "AssetIdPrefix",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8017,
                              "src": "7867:21:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$8017_$",
                                "typeString": "type(enum AssetId.AssetIdPrefix)"
                              }
                            },
                            "id": 3425,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "7889:4:5",
                            "memberName": "Long",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8014,
                            "src": "7867:26:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                              "typeString": "enum AssetId.AssetIdPrefix"
                            }
                          },
                          {
                            "id": 3426,
                            "name": "maturityTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3331,
                            "src": "7895:12:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                              "typeString": "enum AssetId.AssetIdPrefix"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 3421,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8311,
                            "src": "7845:7:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                              "typeString": "type(library AssetId)"
                            }
                          },
                          "id": 3422,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7853:13:5",
                          "memberName": "encodeAssetId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8040,
                          "src": "7845:21:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$8017_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 3427,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7845:63:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3428,
                        "name": "maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3331,
                        "src": "7922:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3429,
                        "name": "baseProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3398,
                        "src": "7948:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3430,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3290,
                        "src": "7974:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3431,
                        "name": "bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3415,
                        "src": "7998:10:5",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3418,
                      "name": "CloseLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 678,
                      "src": "7788:9:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "id": 3432,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7788:230:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3433,
                  "nodeType": "EmitStatement",
                  "src": "7783:235:5"
                },
                {
                  "expression": {
                    "id": 3434,
                    "name": "proceeds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3391,
                    "src": "8036:8:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 3278,
                  "id": 3435,
                  "nodeType": "Return",
                  "src": "8029:15:5"
                }
              ]
            },
            "baseFunctions": [
              7624
            ],
            "documentation": {
              "id": 3263,
              "nodeType": "StructuredDocumentation",
              "src": "4229:398:5",
              "text": "@notice Closes a long position with a specified maturity time.\n @param _maturityTime The maturity time of the short.\n @param _bondAmount The amount of longs to close.\n @param _minOutput The minimum amount of base the trader will accept.\n @param _options The options that configure how the trade is settled.\n @return The amount of underlying the user receives."
            },
            "functionSelector": "ded06231",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 3275,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 3274,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "4801:12:5"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 64179,
                  "src": "4801:12:5"
                },
                "nodeType": "ModifierInvocation",
                "src": "4801:12:5"
              }
            ],
            "name": "closeLong",
            "nameLocation": "4641:9:5",
            "parameters": {
              "id": 3273,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3265,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "4668:13:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3437,
                  "src": "4660:21:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3264,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4660:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3267,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "4699:11:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3437,
                  "src": "4691:19:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3266,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4691:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3269,
                  "mutability": "mutable",
                  "name": "_minOutput",
                  "nameLocation": "4728:10:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3437,
                  "src": "4720:18:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3268,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4720:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3272,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "4777:8:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3437,
                  "src": "4748:37:5",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 3271,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 3270,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "4748:11:5",
                        "4760:7:5"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7295,
                      "src": "4748:19:5"
                    },
                    "referencedDeclaration": 7295,
                    "src": "4748:19:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7295_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4650:141:5"
            },
            "returnParameters": {
              "id": 3278,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3277,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 3437,
                  "src": "4823:7:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3276,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4823:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4822:9:5"
            },
            "scope": 3908,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 3571,
            "nodeType": "FunctionDefinition",
            "src": "8586:2118:5",
            "nodes": [],
            "body": {
              "id": 3570,
              "nodeType": "Block",
              "src": "8822:1882:5",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    3454
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3454,
                      "mutability": "mutable",
                      "name": "longsOutstanding_",
                      "nameLocation": "8840:17:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3570,
                      "src": "8832:25:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      },
                      "typeName": {
                        "id": 3453,
                        "name": "uint128",
                        "nodeType": "ElementaryTypeName",
                        "src": "8832:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3457,
                  "initialValue": {
                    "expression": {
                      "id": 3455,
                      "name": "_marketState",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4833,
                      "src": "8860:12:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                        "typeString": "struct IHyperdrive.MarketState storage ref"
                      }
                    },
                    "id": 3456,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "8873:16:5",
                    "memberName": "longsOutstanding",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 7159,
                    "src": "8860:29:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8832:57:5"
                },
                {
                  "expression": {
                    "id": 3479,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 3458,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "8962:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 3460,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "8975:23:5",
                      "memberName": "longAverageMaturityTime",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7165,
                      "src": "8962:36:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 3469,
                                  "name": "longsOutstanding_",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3454,
                                  "src": "9129:17:5",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint128",
                                    "typeString": "uint128"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint128",
                                    "typeString": "uint128"
                                  }
                                ],
                                "id": 3468,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "9121:7:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 3467,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "9121:7:5",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 3470,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9121:26:5",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 3473,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 3471,
                                "name": "_maturityTime",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3450,
                                "src": "9165:13:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "31653138",
                                "id": 3472,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9181:4:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                  "typeString": "int_const 1000000000000000000"
                                },
                                "value": "1e18"
                              },
                              "src": "9165:20:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3474,
                              "name": "_bondProceeds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3442,
                              "src": "9236:13:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "74727565",
                              "id": 3475,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9267:4:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "true"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "expression": {
                                    "id": 3463,
                                    "name": "_marketState",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4833,
                                    "src": "9022:12:5",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                      "typeString": "struct IHyperdrive.MarketState storage ref"
                                    }
                                  },
                                  "id": 3464,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "9035:23:5",
                                  "memberName": "longAverageMaturityTime",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 7165,
                                  "src": "9022:36:5",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint128",
                                    "typeString": "uint128"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint128",
                                    "typeString": "uint128"
                                  }
                                ],
                                "id": 3462,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "9001:7:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 3461,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "9001:7:5",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 3465,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9001:67:5",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 3466,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9082:21:5",
                            "memberName": "updateWeightedAverage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8993,
                            "src": "9001:102:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256,uint256,bool) pure returns (uint256)"
                            }
                          },
                          "id": 3476,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9001:284:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 3477,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9299:9:5",
                        "memberName": "toUint128",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9953,
                        "src": "9001:307:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint128)"
                        }
                      },
                      "id": 3478,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9001:309:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "8962:348:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 3480,
                  "nodeType": "ExpressionStatement",
                  "src": "8962:348:5"
                },
                {
                  "expression": {
                    "id": 3487,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 3481,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "9428:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 3483,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "9441:13:5",
                      "memberName": "shareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7147,
                      "src": "9428:26:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 3484,
                          "name": "_shareReservesDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3440,
                          "src": "9458:19:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 3485,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9478:9:5",
                        "memberName": "toUint128",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9953,
                        "src": "9458:29:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint128)"
                        }
                      },
                      "id": 3486,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9458:31:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "9428:61:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 3488,
                  "nodeType": "ExpressionStatement",
                  "src": "9428:61:5"
                },
                {
                  "expression": {
                    "id": 3495,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 3489,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "9499:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 3491,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "9512:12:5",
                      "memberName": "bondReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7150,
                      "src": "9499:25:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 3492,
                          "name": "_bondReservesDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3444,
                          "src": "9528:18:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 3493,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9547:9:5",
                        "memberName": "toUint128",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9953,
                        "src": "9528:28:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint128)"
                        }
                      },
                      "id": 3494,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9528:30:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "9499:59:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 3496,
                  "nodeType": "ExpressionStatement",
                  "src": "9499:59:5"
                },
                {
                  "expression": {
                    "id": 3501,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 3497,
                      "name": "longsOutstanding_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3454,
                      "src": "9568:17:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 3498,
                          "name": "_bondProceeds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3442,
                          "src": "9589:13:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 3499,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9603:9:5",
                        "memberName": "toUint128",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9953,
                        "src": "9589:23:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint128)"
                        }
                      },
                      "id": 3500,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9589:25:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "9568:46:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 3502,
                  "nodeType": "ExpressionStatement",
                  "src": "9568:46:5"
                },
                {
                  "expression": {
                    "id": 3507,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 3503,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "9624:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 3505,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "9637:16:5",
                      "memberName": "longsOutstanding",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7159,
                      "src": "9624:29:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 3506,
                      "name": "longsOutstanding_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3454,
                      "src": "9656:17:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "9624:49:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 3508,
                  "nodeType": "ExpressionStatement",
                  "src": "9624:49:5"
                },
                {
                  "assignments": [
                    3513
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3513,
                      "mutability": "mutable",
                      "name": "checkpoint",
                      "nameLocation": "9974:10:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3570,
                      "src": "9943:41:5",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Checkpoint_$7182_storage_ptr",
                        "typeString": "struct IHyperdrive.Checkpoint"
                      },
                      "typeName": {
                        "id": 3512,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 3511,
                          "name": "IHyperdrive.Checkpoint",
                          "nameLocations": [
                            "9943:11:5",
                            "9955:10:5"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 7182,
                          "src": "9943:22:5"
                        },
                        "referencedDeclaration": 7182,
                        "src": "9943:22:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Checkpoint_$7182_storage_ptr",
                          "typeString": "struct IHyperdrive.Checkpoint"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3517,
                  "initialValue": {
                    "baseExpression": {
                      "id": 3514,
                      "name": "_checkpoints",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4852,
                      "src": "9987:12:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7182_storage_$",
                        "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                      }
                    },
                    "id": 3516,
                    "indexExpression": {
                      "id": 3515,
                      "name": "_checkpointTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3448,
                      "src": "10013:15:5",
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
                    "src": "9987:51:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Checkpoint_$7182_storage",
                      "typeString": "struct IHyperdrive.Checkpoint storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9943:95:5"
                },
                {
                  "assignments": [
                    3519
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3519,
                      "mutability": "mutable",
                      "name": "checkpointExposureBefore",
                      "nameLocation": "10055:24:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3570,
                      "src": "10048:31:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      },
                      "typeName": {
                        "id": 3518,
                        "name": "int128",
                        "nodeType": "ElementaryTypeName",
                        "src": "10048:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3525,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 3522,
                          "name": "checkpoint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3513,
                          "src": "10089:10:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Checkpoint_$7182_storage_ptr",
                            "typeString": "struct IHyperdrive.Checkpoint storage pointer"
                          }
                        },
                        "id": 3523,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10100:12:5",
                        "memberName": "longExposure",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7181,
                        "src": "10089:23:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      ],
                      "id": 3521,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "10082:6:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int128_$",
                        "typeString": "type(int128)"
                      },
                      "typeName": {
                        "id": 3520,
                        "name": "int128",
                        "nodeType": "ElementaryTypeName",
                        "src": "10082:6:5",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 3524,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10082:31:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int128",
                      "typeString": "int128"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10048:65:5"
                },
                {
                  "assignments": [
                    3527
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3527,
                      "mutability": "mutable",
                      "name": "longExposureDelta",
                      "nameLocation": "10131:17:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3570,
                      "src": "10123:25:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      },
                      "typeName": {
                        "id": 3526,
                        "name": "uint128",
                        "nodeType": "ElementaryTypeName",
                        "src": "10123:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3539,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 3535,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 3530,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "32",
                                "id": 3528,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10152:1:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "id": 3529,
                                "name": "_bondProceeds",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3442,
                                "src": "10168:13:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "10152:29:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "arguments": [
                                {
                                  "id": 3533,
                                  "name": "_sharePrice",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3446,
                                  "src": "10224:11:5",
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
                                  "id": 3531,
                                  "name": "_shareReservesDelta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3440,
                                  "src": "10196:19:5",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 3532,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "10216:7:5",
                                "memberName": "mulDown",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8364,
                                "src": "10196:27:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 3534,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "10196:40:5",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "10152:84:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 3536,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "10151:86:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 3537,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10238:9:5",
                      "memberName": "toUint128",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9953,
                      "src": "10151:96:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256) pure returns (uint128)"
                      }
                    },
                    "id": 3538,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10151:98:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10123:126:5"
                },
                {
                  "expression": {
                    "id": 3547,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 3540,
                        "name": "checkpoint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3513,
                        "src": "10259:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Checkpoint_$7182_storage_ptr",
                          "typeString": "struct IHyperdrive.Checkpoint storage pointer"
                        }
                      },
                      "id": 3542,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10270:12:5",
                      "memberName": "longExposure",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7181,
                      "src": "10259:23:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 3545,
                          "name": "longExposureDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3527,
                          "src": "10293:17:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        ],
                        "id": 3544,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10286:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int128_$",
                          "typeString": "type(int128)"
                        },
                        "typeName": {
                          "id": 3543,
                          "name": "int128",
                          "nodeType": "ElementaryTypeName",
                          "src": "10286:6:5",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 3546,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10286:25:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      }
                    },
                    "src": "10259:52:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int128",
                      "typeString": "int128"
                    }
                  },
                  "id": 3548,
                  "nodeType": "ExpressionStatement",
                  "src": "10259:52:5"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 3550,
                        "name": "checkpointExposureBefore",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3519,
                        "src": "10341:24:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      },
                      {
                        "expression": {
                          "id": 3551,
                          "name": "checkpoint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3513,
                          "src": "10367:10:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Checkpoint_$7182_storage_ptr",
                            "typeString": "struct IHyperdrive.Checkpoint storage pointer"
                          }
                        },
                        "id": 3552,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10378:12:5",
                        "memberName": "longExposure",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7181,
                        "src": "10367:23:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        },
                        {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      ],
                      "id": 3549,
                      "name": "_updateLongExposure",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1252,
                      "src": "10321:19:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$",
                        "typeString": "function (int256,int256)"
                      }
                    },
                    "id": 3553,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10321:70:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3554,
                  "nodeType": "ExpressionStatement",
                  "src": "10321:70:5"
                },
                {
                  "condition": {
                    "id": 3558,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "10489:24:5",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 3556,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3446,
                          "src": "10501:11:5",
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
                        "id": 3555,
                        "name": "_isSolvent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1056,
                        "src": "10490:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (uint256) view returns (bool)"
                        }
                      },
                      "id": 3557,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10490:23:5",
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
                  "id": 3565,
                  "nodeType": "IfStatement",
                  "src": "10485:106:5",
                  "trueBody": {
                    "id": 3564,
                    "nodeType": "Block",
                    "src": "10515:76:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 3559,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "10536:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 3561,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10548:30:5",
                            "memberName": "BaseBufferExceedsShareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7300,
                            "src": "10536:42:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 3562,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10536:44:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3563,
                        "nodeType": "RevertStatement",
                        "src": "10529:51:5"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 3567,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3446,
                        "src": "10685:11:5",
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
                      "id": 3566,
                      "name": "_distributeExcessIdle",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2961,
                      "src": "10663:21:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 3568,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10663:34:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3569,
                  "nodeType": "ExpressionStatement",
                  "src": "10663:34:5"
                }
              ]
            },
            "documentation": {
              "id": 3438,
              "nodeType": "StructuredDocumentation",
              "src": "8057:524:5",
              "text": "@dev Applies an open long to the state. This includes updating the\n      reserves and maintaining the reserve invariants.\n @param _shareReservesDelta The amount of shares paid to the curve.\n @param _bondProceeds The amount of bonds purchased by the trader.\n @param _bondReservesDelta The amount of bonds sold by the curve.\n @param _sharePrice The share price.\n @param _checkpointTime The time of the latest checkpoint.\n @param _maturityTime The maturity time of the long."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_applyOpenLong",
            "nameLocation": "8595:14:5",
            "parameters": {
              "id": 3451,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3440,
                  "mutability": "mutable",
                  "name": "_shareReservesDelta",
                  "nameLocation": "8627:19:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3571,
                  "src": "8619:27:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3439,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8619:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3442,
                  "mutability": "mutable",
                  "name": "_bondProceeds",
                  "nameLocation": "8664:13:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3571,
                  "src": "8656:21:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3441,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8656:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3444,
                  "mutability": "mutable",
                  "name": "_bondReservesDelta",
                  "nameLocation": "8695:18:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3571,
                  "src": "8687:26:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3443,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8687:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3446,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "8731:11:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3571,
                  "src": "8723:19:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3445,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8723:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3448,
                  "mutability": "mutable",
                  "name": "_checkpointTime",
                  "nameLocation": "8760:15:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3571,
                  "src": "8752:23:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3447,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8752:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3450,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "8793:13:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3571,
                  "src": "8785:21:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3449,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8785:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8609:203:5"
            },
            "returnParameters": {
              "id": 3452,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8822:0:5"
            },
            "scope": 3908,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 3672,
            "nodeType": "FunctionDefinition",
            "src": "11173:2273:5",
            "nodes": [],
            "body": {
              "id": 3671,
              "nodeType": "Block",
              "src": "11384:2062:5",
              "nodes": [],
              "statements": [
                {
                  "id": 3620,
                  "nodeType": "Block",
                  "src": "11394:702:5",
                  "statements": [
                    {
                      "assignments": [
                        3586
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 3586,
                          "mutability": "mutable",
                          "name": "longsOutstanding_",
                          "nameLocation": "11416:17:5",
                          "nodeType": "VariableDeclaration",
                          "scope": 3620,
                          "src": "11408:25:5",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          },
                          "typeName": {
                            "id": 3585,
                            "name": "uint128",
                            "nodeType": "ElementaryTypeName",
                            "src": "11408:7:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 3589,
                      "initialValue": {
                        "expression": {
                          "id": 3587,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4833,
                          "src": "11436:12:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 3588,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11449:16:5",
                        "memberName": "longsOutstanding",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7159,
                        "src": "11436:29:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "11408:57:5"
                    },
                    {
                      "expression": {
                        "id": 3608,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "expression": {
                            "id": 3590,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4833,
                            "src": "11534:12:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 3592,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "memberLocation": "11547:23:5",
                          "memberName": "longAverageMaturityTime",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7165,
                          "src": "11534:36:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "arguments": [
                                {
                                  "id": 3599,
                                  "name": "longsOutstanding_",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3586,
                                  "src": "11709:17:5",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint128",
                                    "typeString": "uint128"
                                  }
                                },
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 3602,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 3600,
                                    "name": "_maturityTime",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3582,
                                    "src": "11748:13:5",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "hexValue": "31653138",
                                    "id": 3601,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "11764:4:5",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                      "typeString": "int_const 1000000000000000000"
                                    },
                                    "value": "1e18"
                                  },
                                  "src": "11748:20:5",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "id": 3603,
                                  "name": "_bondAmount",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3574,
                                  "src": "11823:11:5",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "hexValue": "66616c7365",
                                  "id": 3604,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "bool",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11856:5:5",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "value": "false"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint128",
                                    "typeString": "uint128"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                ],
                                "expression": {
                                  "arguments": [
                                    {
                                      "expression": {
                                        "id": 3595,
                                        "name": "_marketState",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 4833,
                                        "src": "11598:12:5",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                          "typeString": "struct IHyperdrive.MarketState storage ref"
                                        }
                                      },
                                      "id": 3596,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "11611:23:5",
                                      "memberName": "longAverageMaturityTime",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 7165,
                                      "src": "11598:36:5",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint128",
                                        "typeString": "uint128"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint128",
                                        "typeString": "uint128"
                                      }
                                    ],
                                    "id": 3594,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "11573:7:5",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint256_$",
                                      "typeString": "type(uint256)"
                                    },
                                    "typeName": {
                                      "id": 3593,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "11573:7:5",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 3597,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "11573:75:5",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 3598,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "11666:21:5",
                                "memberName": "updateWeightedAverage",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8993,
                                "src": "11573:114:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256,uint256,uint256,bool) pure returns (uint256)"
                                }
                              },
                              "id": 3605,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "11573:306:5",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 3606,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11897:9:5",
                            "memberName": "toUint128",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9953,
                            "src": "11573:333:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256) pure returns (uint128)"
                            }
                          },
                          "id": 3607,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11573:335:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "src": "11534:374:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      "id": 3609,
                      "nodeType": "ExpressionStatement",
                      "src": "11534:374:5"
                    },
                    {
                      "expression": {
                        "id": 3618,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "expression": {
                            "id": 3610,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4833,
                            "src": "11978:12:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 3612,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "memberLocation": "11991:16:5",
                          "memberName": "longsOutstanding",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7159,
                          "src": "11978:29:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          },
                          "id": 3617,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 3613,
                            "name": "longsOutstanding_",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3586,
                            "src": "12026:17:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "expression": {
                                "id": 3614,
                                "name": "_bondAmount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3574,
                                "src": "12062:11:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 3615,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "12074:9:5",
                              "memberName": "toUint128",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9953,
                              "src": "12062:21:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256) pure returns (uint128)"
                              }
                            },
                            "id": 3616,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "12062:23:5",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "src": "12026:59:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "src": "11978:107:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      "id": 3619,
                      "nodeType": "ExpressionStatement",
                      "src": "11978:107:5"
                    }
                  ]
                },
                {
                  "expression": {
                    "id": 3627,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 3621,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "12617:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 3623,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "12630:13:5",
                      "memberName": "shareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7147,
                      "src": "12617:26:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 3624,
                          "name": "_shareReservesDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3578,
                          "src": "12647:19:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 3625,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "12667:9:5",
                        "memberName": "toUint128",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9953,
                        "src": "12647:29:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint128)"
                        }
                      },
                      "id": 3626,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12647:31:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "12617:61:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 3628,
                  "nodeType": "ExpressionStatement",
                  "src": "12617:61:5"
                },
                {
                  "expression": {
                    "id": 3635,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 3629,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "12688:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 3631,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "12701:15:5",
                      "memberName": "shareAdjustment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7153,
                      "src": "12688:28:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 3632,
                          "name": "_shareAdjustmentDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3580,
                          "src": "12720:21:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 3633,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "12742:8:5",
                        "memberName": "toInt128",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9993,
                        "src": "12720:30:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$",
                          "typeString": "function (int256) pure returns (int128)"
                        }
                      },
                      "id": 3634,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12720:32:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      }
                    },
                    "src": "12688:64:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int128",
                      "typeString": "int128"
                    }
                  },
                  "id": 3636,
                  "nodeType": "ExpressionStatement",
                  "src": "12688:64:5"
                },
                {
                  "expression": {
                    "id": 3643,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 3637,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "12762:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 3639,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "12775:12:5",
                      "memberName": "bondReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7150,
                      "src": "12762:25:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 3640,
                          "name": "_bondReservesDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3576,
                          "src": "12791:18:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 3641,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "12810:9:5",
                        "memberName": "toUint128",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9953,
                        "src": "12791:28:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint128)"
                        }
                      },
                      "id": 3642,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12791:30:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "12762:59:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 3644,
                  "nodeType": "ExpressionStatement",
                  "src": "12762:59:5"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 3663,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 3651,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "expression": {
                              "id": 3647,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4833,
                              "src": "13210:12:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 3648,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "13223:13:5",
                            "memberName": "shareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7147,
                            "src": "13210:26:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          ],
                          "id": 3646,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "13202:7:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 3645,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13202:7:5",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 3649,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13202:35:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 3650,
                        "name": "_minimumShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4826,
                        "src": "13240:21:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "13202:59:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 3662,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 3656,
                                  "name": "_marketState",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4833,
                                  "src": "13292:12:5",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                  }
                                },
                                "id": 3657,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "13305:13:5",
                                "memberName": "shareReserves",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7147,
                                "src": "13292:26:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                }
                              ],
                              "id": 3655,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "13284:7:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 3654,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "13284:7:5",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 3658,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13284:35:5",
                            "tryCall": false,
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
                          "id": 3653,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "13277:6:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_int256_$",
                            "typeString": "type(int256)"
                          },
                          "typeName": {
                            "id": 3652,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13277:6:5",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 3659,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13277:43:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "expression": {
                          "id": 3660,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4833,
                          "src": "13335:12:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 3661,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "13348:15:5",
                        "memberName": "shareAdjustment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7153,
                        "src": "13335:28:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      },
                      "src": "13277:86:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "13202:161:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 3670,
                  "nodeType": "IfStatement",
                  "src": "13185:255:5",
                  "trueBody": {
                    "id": 3669,
                    "nodeType": "Block",
                    "src": "13374:66:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 3664,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "13395:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 3666,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "13407:20:5",
                            "memberName": "InvalidShareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7322,
                            "src": "13395:32:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 3667,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13395:34:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3668,
                        "nodeType": "RevertStatement",
                        "src": "13388:41:5"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 3572,
              "nodeType": "StructuredDocumentation",
              "src": "10710:458:5",
              "text": "@dev Applies the trading deltas from a closed long to the reserves and\n      the withdrawal pool.\n @param _bondAmount The amount of longs that were closed.\n @param _bondReservesDelta The bonds to add to the reserves.\n @param _shareReservesDelta The shares to remove from the reserves.\n @param _shareAdjustmentDelta The amount to decrease the share adjustment.\n @param _maturityTime The maturity time of the long."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_applyCloseLong",
            "nameLocation": "11182:15:5",
            "parameters": {
              "id": 3583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3574,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "11215:11:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3672,
                  "src": "11207:19:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3573,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11207:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3576,
                  "mutability": "mutable",
                  "name": "_bondReservesDelta",
                  "nameLocation": "11244:18:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3672,
                  "src": "11236:26:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3575,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11236:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3578,
                  "mutability": "mutable",
                  "name": "_shareReservesDelta",
                  "nameLocation": "11280:19:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3672,
                  "src": "11272:27:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3577,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11272:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3580,
                  "mutability": "mutable",
                  "name": "_shareAdjustmentDelta",
                  "nameLocation": "11316:21:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3672,
                  "src": "11309:28:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 3579,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11309:6:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3582,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "11355:13:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3672,
                  "src": "11347:21:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3581,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11347:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11197:177:5"
            },
            "returnParameters": {
              "id": 3584,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11384:0:5"
            },
            "scope": 3908,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 3777,
            "nodeType": "FunctionDefinition",
            "src": "13979:3706:5",
            "nodes": [],
            "body": {
              "id": 3776,
              "nodeType": "Block",
              "src": "14273:3412:5",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 3700,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 3688,
                      "name": "bondReservesDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3682,
                      "src": "14434:17:5",
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
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 3691,
                            "name": "_effectiveShareReserves",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5128,
                            "src": "14500:23:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 3692,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14500:25:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 3693,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4833,
                            "src": "14539:12:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 3694,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "14552:12:5",
                          "memberName": "bondReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7150,
                          "src": "14539:25:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        {
                          "id": 3695,
                          "name": "_shareAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3675,
                          "src": "14578:12:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 3696,
                          "name": "_timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4820,
                          "src": "14616:12:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 3697,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3677,
                          "src": "14642:11:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 3698,
                          "name": "_initialSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4823,
                          "src": "14667:18:5",
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
                          },
                          {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 3689,
                          "name": "HyperdriveMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9918,
                          "src": "14454:14:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                            "typeString": "type(library HyperdriveMath)"
                          }
                        },
                        "id": 3690,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "14469:17:5",
                        "memberName": "calculateOpenLong",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9272,
                        "src": "14454:32:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 3699,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14454:241:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "14434:261:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3701,
                  "nodeType": "ExpressionStatement",
                  "src": "14434:261:5"
                },
                {
                  "assignments": [
                    3703
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3703,
                      "mutability": "mutable",
                      "name": "spotPrice",
                      "nameLocation": "14836:9:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3776,
                      "src": "14828:17:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3702,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "14828:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3713,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 3706,
                          "name": "_effectiveShareReserves",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5128,
                          "src": "14895:23:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                            "typeString": "function () view returns (uint256)"
                          }
                        },
                        "id": 3707,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14895:25:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 3708,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4833,
                          "src": "14934:12:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 3709,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "14947:12:5",
                        "memberName": "bondReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7150,
                        "src": "14934:25:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "id": 3710,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4823,
                        "src": "14973:18:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3711,
                        "name": "_timeStretch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4820,
                        "src": "15005:12:5",
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
                        },
                        {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 3704,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9918,
                        "src": "14848:14:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 3705,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "14863:18:5",
                      "memberName": "calculateSpotPrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9113,
                      "src": "14848:33:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 3712,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14848:179:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "14828:199:5"
                },
                {
                  "condition": {
                    "arguments": [
                      {
                        "id": 3715,
                        "name": "_shareAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3675,
                        "src": "15091:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3716,
                        "name": "bondReservesDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3682,
                        "src": "15121:17:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 3719,
                            "name": "spotPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3703,
                            "src": "15222:9:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 3720,
                            "name": "_curveFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4840,
                            "src": "15253:9:5",
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
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 3717,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9918,
                            "src": "15156:14:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                              "typeString": "type(library HyperdriveMath)"
                            }
                          },
                          "id": 3718,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "15171:29:5",
                          "memberName": "calculateOpenLongMaxSpotPrice",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9221,
                          "src": "15156:44:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 3721,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "15156:124:5",
                        "tryCall": false,
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3714,
                      "name": "_isNegativeInterest",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1016,
                      "src": "15054:19:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (uint256,uint256,uint256) view returns (bool)"
                      }
                    },
                    "id": 3722,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15054:240:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 3729,
                  "nodeType": "IfStatement",
                  "src": "15037:330:5",
                  "trueBody": {
                    "id": 3728,
                    "nodeType": "Block",
                    "src": "15305:62:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 3723,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "15326:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 3725,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "15338:16:5",
                            "memberName": "NegativeInterest",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7328,
                            "src": "15326:28:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 3726,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "15326:30:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3727,
                        "nodeType": "RevertStatement",
                        "src": "15319:37:5"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 3731,
                        "name": "spotPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3703,
                        "src": "15452:9:5",
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
                      "id": 3730,
                      "name": "recordPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5299,
                      "src": "15440:11:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 3732,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15440:22:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3733,
                  "nodeType": "ExpressionStatement",
                  "src": "15440:22:5"
                },
                {
                  "assignments": [
                    3735,
                    3737
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3735,
                      "mutability": "mutable",
                      "name": "curveFee",
                      "nameLocation": "15647:8:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3776,
                      "src": "15639:16:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3734,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "15639:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 3737,
                      "mutability": "mutable",
                      "name": "governanceCurveFee",
                      "nameLocation": "15686:18:5",
                      "nodeType": "VariableDeclaration",
                      "scope": 3776,
                      "src": "15678:26:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3736,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "15678:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3743,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 3739,
                        "name": "_shareAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3675,
                        "src": "15752:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3740,
                        "name": "spotPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3703,
                        "src": "15766:9:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3741,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3677,
                        "src": "15777:11:5",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3738,
                      "name": "_calculateFeesGivenShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1334,
                      "src": "15726:25:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) view returns (uint256,uint256)"
                      }
                    },
                    "id": 3742,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15726:63:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "15625:164:5"
                },
                {
                  "expression": {
                    "id": 3748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 3744,
                      "name": "bondProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3684,
                      "src": "15937:12:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 3747,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 3745,
                        "name": "bondReservesDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3682,
                        "src": "15952:17:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 3746,
                        "name": "curveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3735,
                        "src": "15972:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "15952:28:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "15937:43:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3749,
                  "nodeType": "ExpressionStatement",
                  "src": "15937:43:5"
                },
                {
                  "expression": {
                    "id": 3754,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 3750,
                      "name": "bondReservesDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3682,
                      "src": "16634:17:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 3753,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 3751,
                        "name": "bondProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3684,
                        "src": "16654:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "id": 3752,
                        "name": "governanceCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3737,
                        "src": "16669:18:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "16654:33:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "16634:53:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3755,
                  "nodeType": "ExpressionStatement",
                  "src": "16634:53:5"
                },
                {
                  "expression": {
                    "id": 3762,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 3756,
                      "name": "totalGovernanceFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3686,
                      "src": "17129:18:5",
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
                          "id": 3759,
                          "name": "spotPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3703,
                          "src": "17193:9:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 3760,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3677,
                          "src": "17216:11:5",
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
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 3757,
                          "name": "governanceCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3737,
                          "src": "17150:18:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 3758,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "17169:10:5",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8346,
                        "src": "17150:29:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 3761,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "17150:87:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "17129:108:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3763,
                  "nodeType": "ExpressionStatement",
                  "src": "17129:108:5"
                },
                {
                  "expression": {
                    "id": 3768,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 3764,
                      "name": "shareReservesDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3680,
                      "src": "17475:18:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 3767,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 3765,
                        "name": "_shareAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3675,
                        "src": "17496:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 3766,
                        "name": "totalGovernanceFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3686,
                        "src": "17511:18:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "17496:33:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "17475:54:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 3769,
                  "nodeType": "ExpressionStatement",
                  "src": "17475:54:5"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 3770,
                        "name": "shareReservesDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3680,
                        "src": "17561:18:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3771,
                        "name": "bondReservesDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3682,
                        "src": "17593:17:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3772,
                        "name": "bondProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3684,
                        "src": "17624:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3773,
                        "name": "totalGovernanceFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3686,
                        "src": "17650:18:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 3774,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "17547:131:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 3687,
                  "id": 3775,
                  "nodeType": "Return",
                  "src": "17540:138:5"
                }
              ]
            },
            "documentation": {
              "id": 3673,
              "nodeType": "StructuredDocumentation",
              "src": "13452:522:5",
              "text": "@dev Calculate the pool reserve and trader deltas that result from\n      opening a long. This calculation includes trading fees.\n @param _shareAmount The amount of shares being paid to open the long.\n @param _sharePrice The current share price.\n @return shareReservesDelta The change in the share reserves.\n @return bondReservesDelta The change in the bond reserves.\n @return bondProceeds The proceeds in bonds.\n @return totalGovernanceFee The governance fee in shares."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateOpenLong",
            "nameLocation": "13988:18:5",
            "parameters": {
              "id": 3678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3675,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "14024:12:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3777,
                  "src": "14016:20:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3674,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14016:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3677,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "14054:11:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3777,
                  "src": "14046:19:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3676,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14046:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14006:65:5"
            },
            "returnParameters": {
              "id": 3687,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3680,
                  "mutability": "mutable",
                  "name": "shareReservesDelta",
                  "nameLocation": "14127:18:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3777,
                  "src": "14119:26:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3679,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14119:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3682,
                  "mutability": "mutable",
                  "name": "bondReservesDelta",
                  "nameLocation": "14167:17:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3777,
                  "src": "14159:25:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3681,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14159:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3684,
                  "mutability": "mutable",
                  "name": "bondProceeds",
                  "nameLocation": "14206:12:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3777,
                  "src": "14198:20:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3683,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14198:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3686,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "14240:18:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3777,
                  "src": "14232:26:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3685,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14232:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14105:163:5"
            },
            "scope": 3908,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 3907,
            "nodeType": "FunctionDefinition",
            "src": "18521:4699:5",
            "nodes": [],
            "body": {
              "id": 3906,
              "nodeType": "Block",
              "src": "18925:4295:5",
              "nodes": [],
              "statements": [
                {
                  "id": 3873,
                  "nodeType": "Block",
                  "src": "19123:2756:5",
                  "statements": [
                    {
                      "assignments": [
                        3800
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 3800,
                          "mutability": "mutable",
                          "name": "timeRemaining",
                          "nameLocation": "19566:13:5",
                          "nodeType": "VariableDeclaration",
                          "scope": 3873,
                          "src": "19558:21:5",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 3799,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "19558:7:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 3804,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 3802,
                            "name": "_maturityTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3784,
                            "src": "19606:13:5",
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
                          "id": 3801,
                          "name": "_calculateTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5056,
                          "src": "19582:23:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) view returns (uint256)"
                          }
                        },
                        "id": 3803,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "19582:38:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "19558:62:5"
                    },
                    {
                      "expression": {
                        "id": 3821,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "components": [
                            {
                              "id": 3805,
                              "name": "shareCurveDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3793,
                              "src": "19635:15:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3806,
                              "name": "bondReservesDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3787,
                              "src": "19652:17:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3807,
                              "name": "shareProceeds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3789,
                              "src": "19671:13:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 3808,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "TupleExpression",
                          "src": "19634:51:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256,uint256)"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "arguments": [
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 3811,
                                "name": "_effectiveShareReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5128,
                                "src": "19760:23:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                  "typeString": "function () view returns (uint256)"
                                }
                              },
                              "id": 3812,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "19760:25:5",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 3813,
                                "name": "_marketState",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4833,
                                "src": "19807:12:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                  "typeString": "struct IHyperdrive.MarketState storage ref"
                                }
                              },
                              "id": 3814,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "19820:12:5",
                              "memberName": "bondReserves",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7150,
                              "src": "19807:25:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            },
                            {
                              "id": 3815,
                              "name": "_bondAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3780,
                              "src": "19854:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3816,
                              "name": "timeRemaining",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3800,
                              "src": "19887:13:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3817,
                              "name": "_timeStretch",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4820,
                              "src": "19922:12:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3818,
                              "name": "_sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3782,
                              "src": "19956:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3819,
                              "name": "_initialSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4823,
                              "src": "19989:18:5",
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
                              },
                              {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 3809,
                              "name": "HyperdriveMath",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9918,
                              "src": "19688:14:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                                "typeString": "type(library HyperdriveMath)"
                              }
                            },
                            "id": 3810,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "19720:18:5",
                            "memberName": "calculateCloseLong",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9337,
                            "src": "19688:50:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256,uint256,uint256)"
                            }
                          },
                          "id": 3820,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "19688:337:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256,uint256)"
                          }
                        },
                        "src": "19634:391:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 3822,
                      "nodeType": "ExpressionStatement",
                      "src": "19634:391:5"
                    },
                    {
                      "assignments": [
                        3824
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 3824,
                          "mutability": "mutable",
                          "name": "spotPrice",
                          "nameLocation": "20088:9:5",
                          "nodeType": "VariableDeclaration",
                          "scope": 3873,
                          "src": "20080:17:5",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 3823,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "20080:7:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 3834,
                      "initialValue": {
                        "arguments": [
                          {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 3827,
                              "name": "_effectiveShareReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5128,
                              "src": "20151:23:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                "typeString": "function () view returns (uint256)"
                              }
                            },
                            "id": 3828,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "20151:25:5",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 3829,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4833,
                              "src": "20194:12:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 3830,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "20207:12:5",
                            "memberName": "bondReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7150,
                            "src": "20194:25:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          {
                            "id": 3831,
                            "name": "_initialSharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4823,
                            "src": "20237:18:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 3832,
                            "name": "_timeStretch",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4820,
                            "src": "20273:12:5",
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
                            },
                            {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 3825,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9918,
                            "src": "20100:14:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                              "typeString": "type(library HyperdriveMath)"
                            }
                          },
                          "id": 3826,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "20115:18:5",
                          "memberName": "calculateSpotPrice",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9113,
                          "src": "20100:33:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 3833,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "20100:199:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "20080:219:5"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "id": 3836,
                            "name": "spotPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3824,
                            "src": "20325:9:5",
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
                          "id": 3835,
                          "name": "recordPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5299,
                          "src": "20313:11:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                            "typeString": "function (uint256)"
                          }
                        },
                        "id": 3837,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "20313:22:5",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 3838,
                      "nodeType": "ExpressionStatement",
                      "src": "20313:22:5"
                    },
                    {
                      "assignments": [
                        3840
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 3840,
                          "mutability": "mutable",
                          "name": "curveFee",
                          "nameLocation": "20584:8:5",
                          "nodeType": "VariableDeclaration",
                          "scope": 3873,
                          "src": "20576:16:5",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 3839,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "20576:7:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 3841,
                      "nodeType": "VariableDeclarationStatement",
                      "src": "20576:16:5"
                    },
                    {
                      "assignments": [
                        3843
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 3843,
                          "mutability": "mutable",
                          "name": "flatFee",
                          "nameLocation": "20614:7:5",
                          "nodeType": "VariableDeclaration",
                          "scope": 3873,
                          "src": "20606:15:5",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 3842,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "20606:7:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 3844,
                      "nodeType": "VariableDeclarationStatement",
                      "src": "20606:15:5"
                    },
                    {
                      "expression": {
                        "id": 3855,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "components": [
                            {
                              "id": 3845,
                              "name": "curveFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3840,
                              "src": "20653:8:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3846,
                              "name": "flatFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3843,
                              "src": "20689:7:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            null,
                            null,
                            {
                              "id": 3847,
                              "name": "totalGovernanceFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3797,
                              "src": "20760:18:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 3848,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "TupleExpression",
                          "src": "20635:167:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$__$__$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256,,,uint256)"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "arguments": [
                            {
                              "id": 3850,
                              "name": "_bondAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3780,
                              "src": "20847:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3851,
                              "name": "timeRemaining",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3800,
                              "src": "20876:13:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3852,
                              "name": "spotPrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3824,
                              "src": "20907:9:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 3853,
                              "name": "_sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3782,
                              "src": "20934:11:5",
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
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 3849,
                            "name": "_calculateFeesGivenBonds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1412,
                            "src": "20805:24:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256,uint256,uint256)"
                            }
                          },
                          "id": 3854,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "20805:154:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256,uint256,uint256,uint256)"
                          }
                        },
                        "src": "20635:324:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 3856,
                      "nodeType": "ExpressionStatement",
                      "src": "20635:324:5"
                    },
                    {
                      "expression": {
                        "id": 3859,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 3857,
                          "name": "shareCurveDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3793,
                          "src": "21194:15:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "-=",
                        "rightHandSide": {
                          "id": 3858,
                          "name": "curveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3840,
                          "src": "21213:8:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "21194:27:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 3860,
                      "nodeType": "ExpressionStatement",
                      "src": "21194:27:5"
                    },
                    {
                      "expression": {
                        "id": 3865,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 3861,
                          "name": "shareProceeds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3789,
                          "src": "21415:13:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "-=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 3864,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 3862,
                            "name": "curveFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3840,
                            "src": "21432:8:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 3863,
                            "name": "flatFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3843,
                            "src": "21443:7:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "21432:18:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "21415:35:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 3866,
                      "nodeType": "ExpressionStatement",
                      "src": "21415:35:5"
                    },
                    {
                      "expression": {
                        "id": 3871,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 3867,
                          "name": "shareReservesDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3791,
                          "src": "21813:18:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 3870,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 3868,
                            "name": "shareProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3789,
                            "src": "21834:13:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 3869,
                            "name": "totalGovernanceFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3797,
                            "src": "21850:18:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "21834:34:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "21813:55:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 3872,
                      "nodeType": "ExpressionStatement",
                      "src": "21813:55:5"
                    }
                  ]
                },
                {
                  "expression": {
                    "id": 3904,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 3874,
                          "name": "shareProceeds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3789,
                          "src": "22173:13:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 3875,
                          "name": "shareReservesDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3791,
                          "src": "22200:18:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 3876,
                          "name": "shareCurveDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3793,
                          "src": "22232:15:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 3877,
                          "name": "shareAdjustmentDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3795,
                          "src": "22261:20:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "id": 3878,
                          "name": "totalGovernanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3797,
                          "src": "22295:18:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 3879,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "22159:164:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,int256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 3882,
                          "name": "shareProceeds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3789,
                          "src": "22387:13:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 3883,
                          "name": "shareReservesDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3791,
                          "src": "22414:18:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 3884,
                          "name": "shareCurveDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3793,
                          "src": "22446:15:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 3885,
                          "name": "totalGovernanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3797,
                          "src": "22475:18:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "baseExpression": {
                              "id": 3886,
                              "name": "_checkpoints",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4852,
                              "src": "22954:12:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7182_storage_$",
                                "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                              }
                            },
                            "id": 3890,
                            "indexExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 3889,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 3887,
                                "name": "_maturityTime",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3784,
                                "src": "22967:13:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 3888,
                                "name": "_positionDuration",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4817,
                                "src": "22983:17:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "22967:33:5",
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
                            "src": "22954:47:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Checkpoint_$7182_storage",
                              "typeString": "struct IHyperdrive.Checkpoint storage ref"
                            }
                          },
                          "id": 3891,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "23002:10:5",
                          "memberName": "sharePrice",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7178,
                          "src": "22954:58:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        {
                          "condition": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 3895,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "id": 3892,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -4,
                                "src": "23046:5:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 3893,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "23052:9:5",
                              "memberName": "timestamp",
                              "nodeType": "MemberAccess",
                              "src": "23046:15:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<",
                            "rightExpression": {
                              "id": 3894,
                              "name": "_maturityTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3784,
                              "src": "23064:13:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "23046:31:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseExpression": {
                            "expression": {
                              "baseExpression": {
                                "id": 3897,
                                "name": "_checkpoints",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4852,
                                "src": "23126:12:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7182_storage_$",
                                  "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                }
                              },
                              "id": 3899,
                              "indexExpression": {
                                "id": 3898,
                                "name": "_maturityTime",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3784,
                                "src": "23139:13:5",
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
                              "src": "23126:27:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Checkpoint_$7182_storage",
                                "typeString": "struct IHyperdrive.Checkpoint storage ref"
                              }
                            },
                            "id": 3900,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "23154:10:5",
                            "memberName": "sharePrice",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7178,
                            "src": "23126:38:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "id": 3901,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "Conditional",
                          "src": "23046:118:5",
                          "trueExpression": {
                            "id": 3896,
                            "name": "_sharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3782,
                            "src": "23096:11:5",
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
                        {
                          "hexValue": "74727565",
                          "id": 3902,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "23199:4:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "expression": {
                          "id": 3880,
                          "name": "HyperdriveMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9918,
                          "src": "22326:14:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                            "typeString": "type(library HyperdriveMath)"
                          }
                        },
                        "id": 3881,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "22341:32:5",
                        "memberName": "calculateNegativeInterestOnClose",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9537,
                        "src": "22326:47:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256,bool) pure returns (uint256,uint256,uint256,int256,uint256)"
                        }
                      },
                      "id": 3903,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "22326:887:5",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,int256,uint256)"
                      }
                    },
                    "src": "22159:1054:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3905,
                  "nodeType": "ExpressionStatement",
                  "src": "22159:1054:5"
                }
              ]
            },
            "documentation": {
              "id": 3778,
              "nodeType": "StructuredDocumentation",
              "src": "17691:825:5",
              "text": "@dev Calculate the pool reserve and trader deltas that result from\n      closing a long. This calculation includes trading fees.\n @param _bondAmount The amount of bonds being purchased to close the short.\n @param _sharePrice The current share price.\n @param _maturityTime The maturity time of the short position.\n @return bondReservesDelta The bonds added to the reserves.\n @return shareProceeds The proceeds in shares of selling the bonds.\n @return shareReservesDelta The shares removed from the reserves.\n @return shareCurveDelta The curve portion of the payment that LPs need\n         to make to the trader in shares.\n @return shareAdjustmentDelta The change in the share adjustment.\n @return totalGovernanceFee The governance fee in shares."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateCloseLong",
            "nameLocation": "18530:19:5",
            "parameters": {
              "id": 3785,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3780,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "18567:11:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3907,
                  "src": "18559:19:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3779,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18559:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3782,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "18596:11:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3907,
                  "src": "18588:19:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3781,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18588:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3784,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "18625:13:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3907,
                  "src": "18617:21:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3783,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18617:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18549:95:5"
            },
            "returnParameters": {
              "id": 3798,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3787,
                  "mutability": "mutable",
                  "name": "bondReservesDelta",
                  "nameLocation": "18700:17:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3907,
                  "src": "18692:25:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3786,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18692:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3789,
                  "mutability": "mutable",
                  "name": "shareProceeds",
                  "nameLocation": "18739:13:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3907,
                  "src": "18731:21:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3788,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18731:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3791,
                  "mutability": "mutable",
                  "name": "shareReservesDelta",
                  "nameLocation": "18774:18:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3907,
                  "src": "18766:26:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3790,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18766:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3793,
                  "mutability": "mutable",
                  "name": "shareCurveDelta",
                  "nameLocation": "18814:15:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3907,
                  "src": "18806:23:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3792,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18806:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3795,
                  "mutability": "mutable",
                  "name": "shareAdjustmentDelta",
                  "nameLocation": "18850:20:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3907,
                  "src": "18843:27:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 3794,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18843:6:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3797,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "18892:18:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 3907,
                  "src": "18884:26:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3796,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18884:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18678:242:5"
            },
            "scope": 3908,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 3096,
              "name": "IHyperdriveWrite",
              "nameLocations": [
                "842:16:5"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7668,
              "src": "842:16:5"
            },
            "id": 3097,
            "nodeType": "InheritanceSpecifier",
            "src": "842:16:5"
          },
          {
            "baseName": {
              "id": 3098,
              "name": "HyperdriveLP",
              "nameLocations": [
                "860:12:5"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 3078,
              "src": "860:12:5"
            },
            "id": 3099,
            "nodeType": "InheritanceSpecifier",
            "src": "860:12:5"
          }
        ],
        "canonicalName": "HyperdriveLong",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 3095,
          "nodeType": "StructuredDocumentation",
          "src": "480:326:5",
          "text": "@author DELV\n @title HyperdriveLong\n @notice Implements the long accounting for Hyperdrive.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
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
        "name": "HyperdriveLong",
        "nameLocation": "824:14:5",
        "scope": 3909,
        "usedErrors": [
          7300,
          7302,
          7306,
          7312,
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
  "id": 5
} as const;
