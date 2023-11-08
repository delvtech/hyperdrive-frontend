export const HyperdriveShort = 
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"BaseBufferExceedsShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BelowMinimumContribution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidApr\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativeInterest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Paused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolAlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minApr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxApr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"dataProvider\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_baseAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_withdrawalShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutputPerShare\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesRedeemed\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_lpShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalShares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_contribution\":\"The amount to supply.\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"lpShares\":\"The number of LP tokens created\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"the source account\",\"ids\":\"The array of token ids of the asset to transfer\",\"to\":\"the destination account\",\"values\":\"The amount of each token to transfer\"}},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of shorts to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum output of this trade.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The amount of base tokens produced by closing this short\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The amount of base collected.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount to supply.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"lpShares\":\"The initial number of LP shares created.\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade.\",\"_minSharePrice\":\"The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the short.\",\"_1\":\"The amount the user deposited for this trade.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should be generated with the      eth_signTypedData JSON RPC call instead of the eth_sign JSON RPC call. If using out of date      parity signing libraries the v component may need to be adjusted. Also it is very rare but possible      for v to be other values, those values are not supported.\",\"params\":{\"_approved\":\"a boolean of the approval status to set to\",\"deadline\":\"the timestamp which the signature must be submitted by to be valid\",\"owner\":\"the owner of the account which is having the new approval set\",\"r\":\"The r component of the ECDSA signature\",\"s\":\"The s component of the ECDSA signature\",\"spender\":\"the address which will be allowed to spend owner's tokens\",\"v\":\"Extra ECDSA data which allows public key recovery from signature assumed to be 27 or 28\"}},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_minOutputPerShare\":\"The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.\",\"_options\":\"The options that configure how the operation is settled.\",\"_withdrawalShares\":\"The withdrawal shares to redeem.\"},\"returns\":{\"proceeds\":\"The amount the LP received.\",\"withdrawalSharesRedeemed\":\"The amount of withdrawal shares that were redeemed.\"}},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_lpShares\":\"The LP shares to burn.\",\"_minOutput\":\"The minium amount of the base token to receive.Note - this        value is likely to be less than the amount LP shares are worth.        The remainder is in short and long withdraw shares which are hard        to game the value of.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"proceeds\":\"The amount the LP removing liquidity receives. The         LP receives a proportional amount of the pool's idle capital\",\"withdrawalShares\":\"The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal         in value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]\",\"operator\":\"The address who will be able to use the tokens\",\"tokenID\":\"The asset to approve the use of\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]\",\"caller\":\"The eth address which called the linking contract\",\"operator\":\"The address who will be able to use the tokens\",\"tokenID\":\"The asset to approve the use of\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval\",\"operator\":\"The eth address which can access the caller's assets\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move\",\"from\":\"The address who's balance will be reduced\",\"to\":\"The address who's balance will be increased\",\"tokenID\":\"The token identifier\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move\",\"caller\":\"The msg.sender from the bridge\",\"from\":\"The address who's balance will be reduced\",\"to\":\"The address who's balance will be increased\",\"tokenID\":\"The token identifier\"}}},\"title\":\"HyperdriveShort\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"###################### ### ERC20Forwarder ### ######################\"}],\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}],\"Unauthorized()\":[{\"notice\":\"############### ### Factory ### ###############\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"###################### ### SafeCast ### ######################\"}]},\"events\":{\"PauserUpdated(address)\":{\"notice\":\"Pause ///\"}},\"kind\":\"user\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owners signature.\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to set asset approvals\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permission-ed transfer for the bridge to access, only callable by         the ERC20 linking bridge\"}},\"notice\":\"Implements the short accounting for Hyperdrive.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/HyperdriveShort.sol\":\"HyperdriveShort\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/DataProvider.sol\":{\"keccak256\":\"0x4ab8d6b27ad40963fde6512935aa0163c00259a51477bcb15d85f222d84ed0a6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3eaed8100e054b7b6d3dd34b80c72ab86669076d72e83daca1c6297441ac0e4b\",\"dweb:/ipfs/QmPCr6XchfY4nbvVdvnuJzPJc434AV6HAnjQXnSgo9vNDt\"]},\"contracts/src/HyperdriveBase.sol\":{\"keccak256\":\"0xd8b673eb52f74ac18cd75bcc4a9a4ba56bb952eb31600d522b6046c25e8d4c32\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://17a8b842f8538181e5a56fd3a904b7aa1bde2eb2c3d5e7fc55bbf5aea084ffbd\",\"dweb:/ipfs/QmVFB1ysPMXo6DPRdc3bAfMpWY8VCPwS3xhxmUFDRY4Zgu\"]},\"contracts/src/HyperdriveLP.sol\":{\"keccak256\":\"0x8d7edd9add98082a7a8d269f99788237a0b244c8dca3556a367b764bc3c17c02\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://abfe277c6982ed6344c8a2e4507e322d61fbbb76f62c673bdfbaa61495188669\",\"dweb:/ipfs/QmRp1Fc2WkAxQjxLWBr4Y7RL5j2VAQpqWMZ8Zd7sAAE2FJ\"]},\"contracts/src/HyperdriveShort.sol\":{\"keccak256\":\"0x0330ca18326c2da2cfd29a6433e15dc8fb6213ef5b70717ef02a4fa17f69e64a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c23b142bc142472a47c6e739d008c90471dbcf8ec5b9415fd0e86f5920ef5dc1\",\"dweb:/ipfs/QmdnW3Kk4R7kQ1FQBuQNV5M9VUdHSkEvvvsjNBDoVi5geX\"]},\"contracts/src/HyperdriveStorage.sol\":{\"keccak256\":\"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a\",\"dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY\"]},\"contracts/src/HyperdriveTWAP.sol\":{\"keccak256\":\"0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc\",\"dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac\"]},\"contracts/src/interfaces/IDataProvider.sol\":{\"keccak256\":\"0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15\",\"dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78\",\"dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206\",\"dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xa425f4064f7e95fc5da7763b26627ef0be68db76763bde67cd54cfda489a19ed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://abc4b8f6f8c66a0d966b1dc366d689fc2844a60d866ed3f19cdd3852a0c274f6\",\"dweb:/ipfs/QmUSo1URvRru11TYPMGSdQR6FDRZk7SPh8tcze3T6XL4gL\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xbd61fe3be6d0c8742f09a8174a5a2757e9070805b49d3fc7217f120b83c0ce0f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5b6524a56a3062a3d9b47c2ad2712f90643a84971cd155f8f00fd31ef7a432fe\",\"dweb:/ipfs/QmXYtLBzjaVkh4WhTxTE1GEoqjcyidw1peyAenfAd5vPPr\"]},\"contracts/src/token/MultiToken.sol\":{\"keccak256\":\"0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98\",\"dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy\"]},\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]}},\"version\":1}",
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
          "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Closes a short position with a specified maturity time."
          },
          "collectGovernanceFee((address,bool,bytes))": {
            "notice": "This function collects the governance fees accrued by the pool."
          },
          "initialize(uint256,uint256,(address,bool,bytes))": {
            "notice": "Allows the first LP to initialize the market with a target APR."
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
        "contracts/src/HyperdriveShort.sol": "HyperdriveShort"
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
    "absolutePath": "contracts/src/HyperdriveShort.sol",
    "id": 4786,
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
      "HyperdriveMath": [
        9918
      ],
      "HyperdriveShort": [
        4785
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
    "src": "39:25907:6",
    "nodes": [
      {
        "id": 3910,
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
        "id": 3912,
        "nodeType": "ImportDirective",
        "src": "64:50:6",
        "nodes": [],
        "absolutePath": "contracts/src/HyperdriveLP.sol",
        "file": "./HyperdriveLP.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 4786,
        "sourceUnit": 3079,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3911,
              "name": "HyperdriveLP",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3078,
              "src": "73:12:6",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3914,
        "nodeType": "ImportDirective",
        "src": "115:59:6",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "./interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 4786,
        "sourceUnit": 7432,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3913,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7431,
              "src": "124:11:6",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3916,
        "nodeType": "ImportDirective",
        "src": "175:69:6",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveWrite.sol",
        "file": "./interfaces/IHyperdriveWrite.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 4786,
        "sourceUnit": 7669,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3915,
              "name": "IHyperdriveWrite",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7668,
              "src": "184:16:6",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3918,
        "nodeType": "ImportDirective",
        "src": "245:50:6",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/AssetId.sol",
        "file": "./libraries/AssetId.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 4786,
        "sourceUnit": 8312,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3917,
              "name": "AssetId",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8311,
              "src": "254:7:6",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3920,
        "nodeType": "ImportDirective",
        "src": "296:64:6",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "./libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 4786,
        "sourceUnit": 9067,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3919,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9066,
              "src": "305:14:6",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3922,
        "nodeType": "ImportDirective",
        "src": "361:64:6",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
        "file": "./libraries/HyperdriveMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 4786,
        "sourceUnit": 9919,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3921,
              "name": "HyperdriveMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9918,
              "src": "370:14:6",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3924,
        "nodeType": "ImportDirective",
        "src": "426:52:6",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/SafeCast.sol",
        "file": "./libraries/SafeCast.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 4786,
        "sourceUnit": 9995,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3923,
              "name": "SafeCast",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9994,
              "src": "435:8:6",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 4785,
        "nodeType": "ContractDefinition",
        "src": "808:25137:6",
        "nodes": [
          {
            "id": 3932,
            "nodeType": "UsingForDirective",
            "src": "882:33:6",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 3930,
              "name": "FixedPointMath",
              "nameLocations": [
                "888:14:6"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9066,
              "src": "888:14:6"
            },
            "typeName": {
              "id": 3931,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "907:7:6",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 3935,
            "nodeType": "UsingForDirective",
            "src": "920:32:6",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 3933,
              "name": "FixedPointMath",
              "nameLocations": [
                "926:14:6"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9066,
              "src": "926:14:6"
            },
            "typeName": {
              "id": 3934,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "945:6:6",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            }
          },
          {
            "id": 3938,
            "nodeType": "UsingForDirective",
            "src": "957:27:6",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 3936,
              "name": "SafeCast",
              "nameLocations": [
                "963:8:6"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9994,
              "src": "963:8:6"
            },
            "typeName": {
              "id": 3937,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "976:7:6",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 3941,
            "nodeType": "UsingForDirective",
            "src": "989:26:6",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 3939,
              "name": "SafeCast",
              "nameLocations": [
                "995:8:6"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9994,
              "src": "995:8:6"
            },
            "typeName": {
              "id": 3940,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "1008:6:6",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            }
          },
          {
            "id": 4104,
            "nodeType": "FunctionDefinition",
            "src": "1610:3336:6",
            "nodes": [],
            "body": {
              "id": 4103,
              "nodeType": "Block",
              "src": "1841:3105:6",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 3962,
                      "name": "_checkMessageValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 777,
                      "src": "1918:18:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$__$",
                        "typeString": "function () view"
                      }
                    },
                    "id": 3963,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1918:20:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3964,
                  "nodeType": "ExpressionStatement",
                  "src": "1918:20:6"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 3967,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 3965,
                      "name": "_bondAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3944,
                      "src": "1952:11:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 3966,
                      "name": "_minimumTransactionAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4829,
                      "src": "1966:25:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1952:39:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 3974,
                  "nodeType": "IfStatement",
                  "src": "1948:115:6",
                  "trueBody": {
                    "id": 3973,
                    "nodeType": "Block",
                    "src": "1993:70:6",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 3968,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "2014:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 3970,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2026:24:6",
                            "memberName": "MinimumTransactionAmount",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7354,
                            "src": "2014:36:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 3971,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2014:38:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3972,
                        "nodeType": "RevertStatement",
                        "src": "2007:45:6"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    3976
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3976,
                      "mutability": "mutable",
                      "name": "sharePrice",
                      "nameLocation": "2397:10:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4103,
                      "src": "2389:18:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3975,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2389:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3979,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 3977,
                      "name": "_pricePerShare",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 807,
                      "src": "2410:14:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 3978,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2410:16:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2389:37:6"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 3982,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 3980,
                      "name": "sharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3976,
                      "src": "2440:10:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 3981,
                      "name": "_minSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3948,
                      "src": "2453:14:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2440:27:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 3989,
                  "nodeType": "IfStatement",
                  "src": "2436:96:6",
                  "trueBody": {
                    "id": 3988,
                    "nodeType": "Block",
                    "src": "2469:63:6",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 3983,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "2490:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 3985,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2502:17:6",
                            "memberName": "MinimumSharePrice",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7352,
                            "src": "2490:29:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 3986,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2490:31:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3987,
                        "nodeType": "RevertStatement",
                        "src": "2483:38:6"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    3991
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3991,
                      "mutability": "mutable",
                      "name": "latestCheckpoint",
                      "nameLocation": "2549:16:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4103,
                      "src": "2541:24:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3990,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2541:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3994,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 3992,
                      "name": "_latestCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5113,
                      "src": "2568:17:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 3993,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2568:19:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2541:46:6"
                },
                {
                  "assignments": [
                    3996
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3996,
                      "mutability": "mutable",
                      "name": "openSharePrice",
                      "nameLocation": "2605:14:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4103,
                      "src": "2597:22:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3995,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2597:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4001,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 3998,
                        "name": "latestCheckpoint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3991,
                        "src": "2639:16:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 3999,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3976,
                        "src": "2657:10:6",
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
                      "id": 3997,
                      "name": "_applyCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 917,
                      "src": "2622:16:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 4000,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2622:46:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2597:71:6"
                },
                {
                  "assignments": [
                    4003
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4003,
                      "mutability": "mutable",
                      "name": "maturityTime",
                      "nameLocation": "2835:12:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4103,
                      "src": "2827:20:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4002,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2827:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4007,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 4006,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 4004,
                      "name": "latestCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3991,
                      "src": "2850:16:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "id": 4005,
                      "name": "_positionDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4817,
                      "src": "2869:17:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2850:36:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2827:59:6"
                },
                {
                  "assignments": [
                    4009
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4009,
                      "mutability": "mutable",
                      "name": "shareReservesDelta",
                      "nameLocation": "2904:18:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4103,
                      "src": "2896:26:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4008,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2896:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4010,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2896:26:6"
                },
                {
                  "assignments": [
                    4012
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4012,
                      "mutability": "mutable",
                      "name": "traderDeposit",
                      "nameLocation": "2940:13:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4103,
                      "src": "2932:21:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4011,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2932:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4013,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2932:21:6"
                },
                {
                  "id": 4040,
                  "nodeType": "Block",
                  "src": "2963:632:6",
                  "statements": [
                    {
                      "assignments": [
                        4015
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 4015,
                          "mutability": "mutable",
                          "name": "totalGovernanceFee",
                          "nameLocation": "2985:18:6",
                          "nodeType": "VariableDeclaration",
                          "scope": 4040,
                          "src": "2977:26:6",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 4014,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2977:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 4016,
                      "nodeType": "VariableDeclarationStatement",
                      "src": "2977:26:6"
                    },
                    {
                      "expression": {
                        "id": 4026,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "components": [
                            {
                              "id": 4017,
                              "name": "traderDeposit",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4012,
                              "src": "3035:13:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4018,
                              "name": "shareReservesDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4009,
                              "src": "3066:18:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4019,
                              "name": "totalGovernanceFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4015,
                              "src": "3102:18:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 4020,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "TupleExpression",
                          "src": "3017:117:6",
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
                              "id": 4022,
                              "name": "_bondAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3944,
                              "src": "3157:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4023,
                              "name": "sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3976,
                              "src": "3170:10:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4024,
                              "name": "openSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3996,
                              "src": "3182:14:6",
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
                            "id": 4021,
                            "name": "_calculateOpenShort",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4605,
                            "src": "3137:19:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) returns (uint256,uint256,uint256)"
                            }
                          },
                          "id": 4025,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3137:60:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256,uint256)"
                          }
                        },
                        "src": "3017:180:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 4027,
                      "nodeType": "ExpressionStatement",
                      "src": "3017:180:6"
                    },
                    {
                      "expression": {
                        "id": 4034,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 4028,
                          "name": "traderDeposit",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4012,
                          "src": "3338:13:6",
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
                              "id": 4030,
                              "name": "traderDeposit",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4012,
                              "src": "3398:13:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4031,
                              "name": "sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3976,
                              "src": "3429:10:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4032,
                              "name": "_options",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3951,
                              "src": "3457:8:6",
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
                            "id": 4029,
                            "name": "_convertToOptionFromShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1464,
                            "src": "3354:26:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$7295_calldata_ptr_$returns$_t_uint256_$",
                              "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                            }
                          },
                          "id": 4033,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3354:125:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3338:141:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 4035,
                      "nodeType": "ExpressionStatement",
                      "src": "3338:141:6"
                    },
                    {
                      "expression": {
                        "id": 4038,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 4036,
                          "name": "_governanceFeesAccrued",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4859,
                          "src": "3540:22:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "id": 4037,
                          "name": "totalGovernanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4015,
                          "src": "3566:18:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3540:44:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 4039,
                      "nodeType": "ExpressionStatement",
                      "src": "3540:44:6"
                    }
                  ]
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 4043,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 4041,
                      "name": "_maxDeposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3946,
                      "src": "3871:11:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 4042,
                      "name": "traderDeposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4012,
                      "src": "3885:13:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3871:27:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 4050,
                  "nodeType": "IfStatement",
                  "src": "3867:90:6",
                  "trueBody": {
                    "id": 4049,
                    "nodeType": "Block",
                    "src": "3900:57:6",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 4044,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "3921:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 4046,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3933:11:6",
                            "memberName": "OutputLimit",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7336,
                            "src": "3921:23:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 4047,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3921:25:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4048,
                        "nodeType": "RevertStatement",
                        "src": "3914:32:6"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    4052,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4052,
                      "mutability": "mutable",
                      "name": "sharesDeposited",
                      "nameLocation": "3975:15:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4103,
                      "src": "3967:23:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4051,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3967:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 4057,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 4054,
                        "name": "traderDeposit",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4012,
                        "src": "4005:13:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4055,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3951,
                        "src": "4020:8:6",
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
                      "id": 4053,
                      "name": "_deposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 790,
                      "src": "3996:8:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$7295_calldata_ptr_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)"
                      }
                    },
                    "id": 4056,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3996:33:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3966:63:6"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 4059,
                        "name": "_bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3944,
                        "src": "4133:11:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4060,
                        "name": "shareReservesDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4009,
                        "src": "4158:18:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4061,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3976,
                        "src": "4190:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4062,
                        "name": "maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4003,
                        "src": "4214:12:6",
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
                      "id": 4058,
                      "name": "_applyOpenShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4424,
                      "src": "4104:15:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256,uint256)"
                      }
                    },
                    "id": 4063,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4104:132:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4064,
                  "nodeType": "ExpressionStatement",
                  "src": "4104:132:6"
                },
                {
                  "assignments": [
                    4066
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4066,
                      "mutability": "mutable",
                      "name": "assetId",
                      "nameLocation": "4404:7:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4103,
                      "src": "4396:15:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4065,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4396:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4074,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "expression": {
                            "id": 4069,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8311,
                            "src": "4449:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                              "typeString": "type(library AssetId)"
                            }
                          },
                          "id": 4070,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4457:13:6",
                          "memberName": "AssetIdPrefix",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8017,
                          "src": "4449:21:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$8017_$",
                            "typeString": "type(enum AssetId.AssetIdPrefix)"
                          }
                        },
                        "id": 4071,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "4471:5:6",
                        "memberName": "Short",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8015,
                        "src": "4449:27:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        }
                      },
                      {
                        "id": 4072,
                        "name": "maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4003,
                        "src": "4490:12:6",
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
                        "id": 4067,
                        "name": "AssetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8311,
                        "src": "4414:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                          "typeString": "type(library AssetId)"
                        }
                      },
                      "id": 4068,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4422:13:6",
                      "memberName": "encodeAssetId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8040,
                      "src": "4414:21:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$8017_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 4073,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4414:98:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4396:116:6"
                },
                {
                  "assignments": [
                    4076
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4076,
                      "mutability": "mutable",
                      "name": "bondAmount",
                      "nameLocation": "4530:10:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4103,
                      "src": "4522:18:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4075,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4522:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4078,
                  "initialValue": {
                    "id": 4077,
                    "name": "_bondAmount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3944,
                    "src": "4543:11:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4522:32:6"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 4080,
                        "name": "assetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4066,
                        "src": "4601:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 4081,
                          "name": "_options",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3951,
                          "src": "4610:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                            "typeString": "struct IHyperdrive.Options calldata"
                          }
                        },
                        "id": 4082,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4619:11:6",
                        "memberName": "destination",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7288,
                        "src": "4610:20:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 4083,
                        "name": "bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4076,
                        "src": "4632:10:6",
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
                      "id": 4079,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12051,
                      "src": "4595:5:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,address,uint256)"
                      }
                    },
                    "id": 4084,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4595:48:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4085,
                  "nodeType": "ExpressionStatement",
                  "src": "4595:48:6"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 4087,
                          "name": "_options",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3951,
                          "src": "4718:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                            "typeString": "struct IHyperdrive.Options calldata"
                          }
                        },
                        "id": 4088,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4727:11:6",
                        "memberName": "destination",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7288,
                        "src": "4718:20:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 4089,
                        "name": "assetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4066,
                        "src": "4752:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4090,
                        "name": "maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4003,
                        "src": "4773:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 4093,
                            "name": "sharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3976,
                            "src": "4823:10:6",
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
                            "id": 4091,
                            "name": "sharesDeposited",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4052,
                            "src": "4799:15:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 4092,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4815:7:6",
                          "memberName": "mulDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8364,
                          "src": "4799:23:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 4094,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4799:35:6",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4095,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3976,
                        "src": "4848:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4096,
                        "name": "bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4076,
                        "src": "4872:10:6",
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
                      "id": 4086,
                      "name": "OpenShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 664,
                      "src": "4695:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "id": 4097,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4695:197:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4098,
                  "nodeType": "EmitStatement",
                  "src": "4690:202:6"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 4099,
                        "name": "maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4003,
                        "src": "4911:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4100,
                        "name": "traderDeposit",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4012,
                        "src": "4925:13:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 4101,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "4910:29:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 3961,
                  "id": 4102,
                  "nodeType": "Return",
                  "src": "4903:36:6"
                }
              ]
            },
            "baseFunctions": [
              7640
            ],
            "documentation": {
              "id": 3942,
              "nodeType": "StructuredDocumentation",
              "src": "1021:584:6",
              "text": "@notice Opens a short position.\n @param _bondAmount The amount of bonds to short.\n @param _maxDeposit The most the user expects to deposit for this trade.\n @param _minSharePrice The minium share price at which to open the long.\n        This allows traders to protect themselves from opening a long in\n        a checkpoint where negative interest has accrued.\n @param _options The options that configure how the trade is settled.\n @return The maturity time of the short.\n @return The amount the user deposited for this trade."
            },
            "functionSelector": "dbbe8070",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 3954,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 3953,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "1789:12:6"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 64179,
                  "src": "1789:12:6"
                },
                "nodeType": "ModifierInvocation",
                "src": "1789:12:6"
              },
              {
                "id": 3956,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 3955,
                  "name": "isNotPaused",
                  "nameLocations": [
                    "1802:11:6"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 907,
                  "src": "1802:11:6"
                },
                "nodeType": "ModifierInvocation",
                "src": "1802:11:6"
              }
            ],
            "name": "openShort",
            "nameLocation": "1619:9:6",
            "parameters": {
              "id": 3952,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3944,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "1646:11:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4104,
                  "src": "1638:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3943,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1638:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3946,
                  "mutability": "mutable",
                  "name": "_maxDeposit",
                  "nameLocation": "1675:11:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4104,
                  "src": "1667:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3945,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1667:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3948,
                  "mutability": "mutable",
                  "name": "_minSharePrice",
                  "nameLocation": "1704:14:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4104,
                  "src": "1696:22:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3947,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1696:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3951,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "1757:8:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4104,
                  "src": "1728:37:6",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 3950,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 3949,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "1728:11:6",
                        "1740:7:6"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7295,
                      "src": "1728:19:6"
                    },
                    "referencedDeclaration": 7295,
                    "src": "1728:19:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7295_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1628:143:6"
            },
            "returnParameters": {
              "id": 3961,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3958,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 4104,
                  "src": "1823:7:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3957,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1823:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3960,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 4104,
                  "src": "1832:7:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3959,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1832:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1822:18:6"
            },
            "scope": 4785,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 4291,
            "nodeType": "FunctionDefinition",
            "src": "5353:3775:6",
            "nodes": [],
            "body": {
              "id": 4290,
              "nodeType": "Block",
              "src": "5554:3574:6",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 4123,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 4121,
                      "name": "_bondAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4109,
                      "src": "5568:11:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 4122,
                      "name": "_minimumTransactionAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4829,
                      "src": "5582:25:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5568:39:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 4130,
                  "nodeType": "IfStatement",
                  "src": "5564:115:6",
                  "trueBody": {
                    "id": 4129,
                    "nodeType": "Block",
                    "src": "5609:70:6",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 4124,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "5630:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 4126,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5642:24:6",
                            "memberName": "MinimumTransactionAmount",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7354,
                            "src": "5630:36:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 4127,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5630:38:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4128,
                        "nodeType": "RevertStatement",
                        "src": "5623:45:6"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    4132
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4132,
                      "mutability": "mutable",
                      "name": "sharePrice",
                      "nameLocation": "5730:10:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4290,
                      "src": "5722:18:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4131,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5722:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4135,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 4133,
                      "name": "_pricePerShare",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 807,
                      "src": "5743:14:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 4134,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5743:16:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5722:37:6"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 4137,
                        "name": "_maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4107,
                        "src": "5786:13:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4138,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4132,
                        "src": "5801:10:6",
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
                      "id": 4136,
                      "name": "_applyCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 917,
                      "src": "5769:16:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256) returns (uint256)"
                      }
                    },
                    "id": 4139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5769:43:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4140,
                  "nodeType": "ExpressionStatement",
                  "src": "5769:43:6"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "expression": {
                                "id": 4144,
                                "name": "AssetId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8311,
                                "src": "5914:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                                  "typeString": "type(library AssetId)"
                                }
                              },
                              "id": 4145,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5922:13:6",
                              "memberName": "AssetIdPrefix",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8017,
                              "src": "5914:21:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$8017_$",
                                "typeString": "type(enum AssetId.AssetIdPrefix)"
                              }
                            },
                            "id": 4146,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "5936:5:6",
                            "memberName": "Short",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8015,
                            "src": "5914:27:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                              "typeString": "enum AssetId.AssetIdPrefix"
                            }
                          },
                          {
                            "id": 4147,
                            "name": "_maturityTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4107,
                            "src": "5943:13:6",
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
                            "id": 4142,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8311,
                            "src": "5892:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                              "typeString": "type(library AssetId)"
                            }
                          },
                          "id": 4143,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5900:13:6",
                          "memberName": "encodeAssetId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8040,
                          "src": "5892:21:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$8017_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 4148,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5892:65:6",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 4149,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "5971:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 4150,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5975:6:6",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5971:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 4151,
                        "name": "_bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4109,
                        "src": "5995:11:6",
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
                      "id": 4141,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12088,
                      "src": "5873:5:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,address,uint256)"
                      }
                    },
                    "id": 4152,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5873:143:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4153,
                  "nodeType": "ExpressionStatement",
                  "src": "5873:143:6"
                },
                {
                  "assignments": [
                    4155,
                    4157,
                    4159,
                    4161,
                    4163,
                    4165
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4155,
                      "mutability": "mutable",
                      "name": "bondReservesDelta",
                      "nameLocation": "6232:17:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4290,
                      "src": "6224:25:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4154,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6224:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 4157,
                      "mutability": "mutable",
                      "name": "shareProceeds",
                      "nameLocation": "6271:13:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4290,
                      "src": "6263:21:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4156,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6263:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 4159,
                      "mutability": "mutable",
                      "name": "shareReservesDelta",
                      "nameLocation": "6306:18:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4290,
                      "src": "6298:26:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4158,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6298:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 4161,
                      "mutability": "mutable",
                      "name": "shareCurveDelta",
                      "nameLocation": "6346:15:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4290,
                      "src": "6338:23:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4160,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6338:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 4163,
                      "mutability": "mutable",
                      "name": "shareAdjustmentDelta",
                      "nameLocation": "6382:20:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4290,
                      "src": "6375:27:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 4162,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6375:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 4165,
                      "mutability": "mutable",
                      "name": "totalGovernanceFee",
                      "nameLocation": "6424:18:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4290,
                      "src": "6416:26:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4164,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6416:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4171,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 4167,
                        "name": "_bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4109,
                        "src": "6476:11:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4168,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4132,
                        "src": "6489:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4169,
                        "name": "_maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4107,
                        "src": "6501:13:6",
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
                      "id": 4166,
                      "name": "_calculateCloseShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4784,
                      "src": "6455:20:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) returns (uint256,uint256,uint256,uint256,int256,uint256)"
                      }
                    },
                    "id": 4170,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6455:60:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,uint256,int256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6210:305:6"
                },
                {
                  "assignments": [
                    4173
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4173,
                      "mutability": "mutable",
                      "name": "bondAmount",
                      "nameLocation": "6725:10:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4290,
                      "src": "6717:18:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4172,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6717:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4175,
                  "initialValue": {
                    "id": 4174,
                    "name": "_bondAmount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4109,
                    "src": "6738:11:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6717:32:6"
                },
                {
                  "assignments": [
                    4177
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4177,
                      "mutability": "mutable",
                      "name": "maturityTime",
                      "nameLocation": "6798:12:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4290,
                      "src": "6790:20:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4176,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6790:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4179,
                  "initialValue": {
                    "id": 4178,
                    "name": "_maturityTime",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4107,
                    "src": "6813:13:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6790:36:6"
                },
                {
                  "assignments": [
                    4181
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4181,
                      "mutability": "mutable",
                      "name": "sharePrice_",
                      "nameLocation": "6875:11:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4290,
                      "src": "6867:19:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4180,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6867:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4183,
                  "initialValue": {
                    "id": 4182,
                    "name": "sharePrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4132,
                    "src": "6889:10:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6867:32:6"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 4187,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 4184,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "6944:5:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 4185,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6950:9:6",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "6944:15:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 4186,
                      "name": "maturityTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4177,
                      "src": "6962:12:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6944:30:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 4239,
                  "nodeType": "IfStatement",
                  "src": "6940:1242:6",
                  "trueBody": {
                    "id": 4238,
                    "nodeType": "Block",
                    "src": "6976:1206:6",
                    "statements": [
                      {
                        "expression": {
                          "id": 4190,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 4188,
                            "name": "_governanceFeesAccrued",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4859,
                            "src": "7036:22:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 4189,
                            "name": "totalGovernanceFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4165,
                            "src": "7062:18:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7036:44:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 4191,
                        "nodeType": "ExpressionStatement",
                        "src": "7036:44:6"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 4193,
                              "name": "bondAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4173,
                              "src": "7207:10:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4194,
                              "name": "bondReservesDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4155,
                              "src": "7235:17:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4195,
                              "name": "shareReservesDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4159,
                              "src": "7270:18:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4196,
                              "name": "shareAdjustmentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4163,
                              "src": "7306:20:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 4197,
                              "name": "maturityTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4177,
                              "src": "7344:12:6",
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
                            "id": 4192,
                            "name": "_applyCloseShort",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4499,
                            "src": "7173:16:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256,int256,uint256)"
                            }
                          },
                          "id": 4198,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7173:197:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4199,
                        "nodeType": "ExpressionStatement",
                        "src": "7173:197:6"
                      },
                      {
                        "assignments": [
                          4201
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 4201,
                            "mutability": "mutable",
                            "name": "checkpointTime",
                            "nameLocation": "7454:14:6",
                            "nodeType": "VariableDeclaration",
                            "scope": 4238,
                            "src": "7446:22:6",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 4200,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "7446:7:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 4205,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 4204,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 4202,
                            "name": "maturityTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4177,
                            "src": "7471:12:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 4203,
                            "name": "_positionDuration",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4817,
                            "src": "7486:17:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7471:32:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "7446:57:6"
                      },
                      {
                        "assignments": [
                          4207
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 4207,
                            "mutability": "mutable",
                            "name": "checkpointExposureBefore",
                            "nameLocation": "7524:24:6",
                            "nodeType": "VariableDeclaration",
                            "scope": 4238,
                            "src": "7517:31:6",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int128",
                              "typeString": "int128"
                            },
                            "typeName": {
                              "id": 4206,
                              "name": "int128",
                              "nodeType": "ElementaryTypeName",
                              "src": "7517:6:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 4215,
                        "initialValue": {
                          "arguments": [
                            {
                              "expression": {
                                "baseExpression": {
                                  "id": 4210,
                                  "name": "_checkpoints",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4852,
                                  "src": "7575:12:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7182_storage_$",
                                    "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                  }
                                },
                                "id": 4212,
                                "indexExpression": {
                                  "id": 4211,
                                  "name": "checkpointTime",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4201,
                                  "src": "7588:14:6",
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
                                "src": "7575:28:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Checkpoint_$7182_storage",
                                  "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                }
                              },
                              "id": 4213,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "7604:12:6",
                              "memberName": "longExposure",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7181,
                              "src": "7575:41:6",
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
                            "id": 4209,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7551:6:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int128_$",
                              "typeString": "type(int128)"
                            },
                            "typeName": {
                              "id": 4208,
                              "name": "int128",
                              "nodeType": "ElementaryTypeName",
                              "src": "7551:6:6",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 4214,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7551:79:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_int128",
                            "typeString": "int128"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "7517:113:6"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 4217,
                              "name": "bondAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4173,
                              "src": "7698:10:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4218,
                              "name": "shareCurveDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4161,
                              "src": "7726:15:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4219,
                              "name": "bondReservesDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4155,
                              "src": "7759:17:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4220,
                              "name": "shareReservesDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4159,
                              "src": "7794:18:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4221,
                              "name": "maturityTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4177,
                              "src": "7830:12:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4222,
                              "name": "sharePrice_",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4181,
                              "src": "7860:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "66616c7365",
                              "id": 4223,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7889:5:6",
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
                            "id": 4216,
                            "name": "_updateCheckpointLongExposureOnClose",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1164,
                            "src": "7644:36:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256,bool)"
                            }
                          },
                          "id": 4224,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7644:264:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4225,
                        "nodeType": "ExpressionStatement",
                        "src": "7644:264:6"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 4227,
                              "name": "checkpointExposureBefore",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4207,
                              "src": "7959:24:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              }
                            },
                            {
                              "expression": {
                                "baseExpression": {
                                  "id": 4228,
                                  "name": "_checkpoints",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4852,
                                  "src": "8001:12:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7182_storage_$",
                                    "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                  }
                                },
                                "id": 4230,
                                "indexExpression": {
                                  "id": 4229,
                                  "name": "checkpointTime",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4201,
                                  "src": "8014:14:6",
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
                                "src": "8001:28:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Checkpoint_$7182_storage",
                                  "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                }
                              },
                              "id": 4231,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8030:12:6",
                              "memberName": "longExposure",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7181,
                              "src": "8001:41:6",
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
                            "id": 4226,
                            "name": "_updateLongExposure",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1252,
                            "src": "7922:19:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$",
                              "typeString": "function (int256,int256)"
                            }
                          },
                          "id": 4232,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7922:134:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4233,
                        "nodeType": "ExpressionStatement",
                        "src": "7922:134:6"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 4235,
                              "name": "sharePrice_",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4181,
                              "src": "8159:11:6",
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
                            "id": 4234,
                            "name": "_distributeExcessIdle",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2961,
                            "src": "8137:21:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 4236,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8137:34:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4237,
                        "nodeType": "ExpressionStatement",
                        "src": "8137:34:6"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    4241
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4241,
                      "mutability": "mutable",
                      "name": "proceeds",
                      "nameLocation": "8399:8:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4290,
                      "src": "8391:16:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4240,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8391:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4246,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 4243,
                        "name": "shareProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4157,
                        "src": "8420:13:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4244,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4114,
                        "src": "8435:8:6",
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
                      "id": 4242,
                      "name": "_withdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 801,
                      "src": "8410:9:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$7295_calldata_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,struct IHyperdrive.Options calldata) returns (uint256)"
                      }
                    },
                    "id": 4245,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8410:34:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8391:53:6"
                },
                {
                  "assignments": [
                    4251
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4251,
                      "mutability": "mutable",
                      "name": "options",
                      "nameLocation": "8530:7:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4290,
                      "src": "8501:36:6",
                      "stateVariable": false,
                      "storageLocation": "calldata",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                        "typeString": "struct IHyperdrive.Options"
                      },
                      "typeName": {
                        "id": 4250,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 4249,
                          "name": "IHyperdrive.Options",
                          "nameLocations": [
                            "8501:11:6",
                            "8513:7:6"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 7295,
                          "src": "8501:19:6"
                        },
                        "referencedDeclaration": 7295,
                        "src": "8501:19:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$7295_storage_ptr",
                          "typeString": "struct IHyperdrive.Options"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4253,
                  "initialValue": {
                    "id": 4252,
                    "name": "_options",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4114,
                    "src": "8540:8:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                      "typeString": "struct IHyperdrive.Options calldata"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8501:47:6"
                },
                {
                  "assignments": [
                    4255
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4255,
                      "mutability": "mutable",
                      "name": "baseProceeds",
                      "nameLocation": "8597:12:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4290,
                      "src": "8589:20:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4254,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8589:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4261,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 4257,
                        "name": "proceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4241,
                        "src": "8650:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4258,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4132,
                        "src": "8672:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4259,
                        "name": "options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4251,
                        "src": "8696:7:6",
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
                      "id": 4256,
                      "name": "_convertToBaseFromOption",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1438,
                      "src": "8612:24:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$7295_calldata_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                      }
                    },
                    "id": 4260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8612:101:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8589:124:6"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 4264,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 4262,
                      "name": "baseProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4255,
                      "src": "8727:12:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 4263,
                      "name": "_minOutput",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4111,
                      "src": "8742:10:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8727:25:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 4271,
                  "nodeType": "IfStatement",
                  "src": "8723:88:6",
                  "trueBody": {
                    "id": 4270,
                    "nodeType": "Block",
                    "src": "8754:57:6",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 4265,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "8775:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 4267,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8787:11:6",
                            "memberName": "OutputLimit",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7336,
                            "src": "8775:23:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 4268,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8775:25:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4269,
                        "nodeType": "RevertStatement",
                        "src": "8768:32:6"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 4273,
                          "name": "_options",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4114,
                          "src": "8886:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                            "typeString": "struct IHyperdrive.Options calldata"
                          }
                        },
                        "id": 4274,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8895:11:6",
                        "memberName": "destination",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7288,
                        "src": "8886:20:6",
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
                                "id": 4277,
                                "name": "AssetId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8311,
                                "src": "8942:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                                  "typeString": "type(library AssetId)"
                                }
                              },
                              "id": 4278,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8950:13:6",
                              "memberName": "AssetIdPrefix",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8017,
                              "src": "8942:21:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$8017_$",
                                "typeString": "type(enum AssetId.AssetIdPrefix)"
                              }
                            },
                            "id": 4279,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "8964:5:6",
                            "memberName": "Short",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8015,
                            "src": "8942:27:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_AssetIdPrefix_$8017",
                              "typeString": "enum AssetId.AssetIdPrefix"
                            }
                          },
                          {
                            "id": 4280,
                            "name": "maturityTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4177,
                            "src": "8971:12:6",
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
                            "id": 4275,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8311,
                            "src": "8920:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                              "typeString": "type(library AssetId)"
                            }
                          },
                          "id": 4276,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8928:13:6",
                          "memberName": "encodeAssetId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8040,
                          "src": "8920:21:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$8017_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 4281,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8920:64:6",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4282,
                        "name": "maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4177,
                        "src": "8998:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4283,
                        "name": "baseProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4255,
                        "src": "9024:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4284,
                        "name": "sharePrice_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4181,
                        "src": "9050:11:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4285,
                        "name": "bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4173,
                        "src": "9075:10:6",
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
                      "id": 4272,
                      "name": "CloseShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 692,
                      "src": "8862:10:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "id": 4286,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8862:233:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4287,
                  "nodeType": "EmitStatement",
                  "src": "8857:238:6"
                },
                {
                  "expression": {
                    "id": 4288,
                    "name": "proceeds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4241,
                    "src": "9113:8:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 4120,
                  "id": 4289,
                  "nodeType": "Return",
                  "src": "9106:15:6"
                }
              ]
            },
            "baseFunctions": [
              7654
            ],
            "documentation": {
              "id": 4105,
              "nodeType": "StructuredDocumentation",
              "src": "4952:396:6",
              "text": "@notice Closes a short position with a specified maturity time.\n @param _maturityTime The maturity time of the short.\n @param _bondAmount The amount of shorts to close.\n @param _minOutput The minimum output of this trade.\n @param _options The options that configure how the trade is settled.\n @return The amount of base tokens produced by closing this short"
            },
            "functionSelector": "29b23fc1",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 4117,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 4116,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "5523:12:6"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 64179,
                  "src": "5523:12:6"
                },
                "nodeType": "ModifierInvocation",
                "src": "5523:12:6"
              }
            ],
            "name": "closeShort",
            "nameLocation": "5362:10:6",
            "parameters": {
              "id": 4115,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4107,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "5390:13:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4291,
                  "src": "5382:21:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4106,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5382:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4109,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "5421:11:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4291,
                  "src": "5413:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4108,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5413:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4111,
                  "mutability": "mutable",
                  "name": "_minOutput",
                  "nameLocation": "5450:10:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4291,
                  "src": "5442:18:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4110,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5442:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4114,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "5499:8:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4291,
                  "src": "5470:37:6",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 4113,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 4112,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "5470:11:6",
                        "5482:7:6"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7295,
                      "src": "5470:19:6"
                    },
                    "referencedDeclaration": 7295,
                    "src": "5470:19:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7295_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5372:141:6"
            },
            "returnParameters": {
              "id": 4120,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4119,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 4291,
                  "src": "5545:7:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4118,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5545:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5544:9:6"
            },
            "scope": 4785,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 4424,
            "nodeType": "FunctionDefinition",
            "src": "9507:3005:6",
            "nodes": [],
            "body": {
              "id": 4423,
              "nodeType": "Block",
              "src": "9673:2839:6",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 4322,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 4303,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "9746:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 4305,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "9759:24:6",
                      "memberName": "shortAverageMaturityTime",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7168,
                      "src": "9746:37:6",
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
                              "expression": {
                                "id": 4312,
                                "name": "_marketState",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4833,
                                "src": "9907:12:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                  "typeString": "struct IHyperdrive.MarketState storage ref"
                                }
                              },
                              "id": 4313,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9920:17:6",
                              "memberName": "shortsOutstanding",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7162,
                              "src": "9907:30:6",
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
                              "id": 4316,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 4314,
                                "name": "_maturityTime",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4300,
                                "src": "9955:13:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "hexValue": "31653138",
                                "id": 4315,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "9971:4:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                  "typeString": "int_const 1000000000000000000"
                                },
                                "value": "1e18"
                              },
                              "src": "9955:20:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4317,
                              "name": "_bondAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294,
                              "src": "10026:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "74727565",
                              "id": 4318,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10055:4:6",
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
                                    "id": 4308,
                                    "name": "_marketState",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4833,
                                    "src": "9807:12:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                      "typeString": "struct IHyperdrive.MarketState storage ref"
                                    }
                                  },
                                  "id": 4309,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "9820:24:6",
                                  "memberName": "shortAverageMaturityTime",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 7168,
                                  "src": "9807:37:6",
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
                                "id": 4307,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "9786:7:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 4306,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "9786:7:6",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 4310,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9786:68:6",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 4311,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9868:21:6",
                            "memberName": "updateWeightedAverage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8993,
                            "src": "9786:103:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256,uint256,bool) pure returns (uint256)"
                            }
                          },
                          "id": 4319,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9786:287:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 4320,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10087:9:6",
                        "memberName": "toUint128",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9953,
                        "src": "9786:310:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint128)"
                        }
                      },
                      "id": 4321,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9786:312:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "9746:352:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 4323,
                  "nodeType": "ExpressionStatement",
                  "src": "9746:352:6"
                },
                {
                  "assignments": [
                    4325
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4325,
                      "mutability": "mutable",
                      "name": "shareReserves_",
                      "nameLocation": "10400:14:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4423,
                      "src": "10392:22:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      },
                      "typeName": {
                        "id": 4324,
                        "name": "uint128",
                        "nodeType": "ElementaryTypeName",
                        "src": "10392:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4332,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    },
                    "id": 4331,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 4326,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "10417:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 4327,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10430:13:6",
                      "memberName": "shareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7147,
                      "src": "10417:26:6",
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
                          "id": 4328,
                          "name": "_shareReservesDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4296,
                          "src": "10458:19:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 4329,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10478:9:6",
                        "memberName": "toUint128",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9953,
                        "src": "10458:29:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint128)"
                        }
                      },
                      "id": 4330,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10458:31:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "10417:72:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10392:97:6"
                },
                {
                  "expression": {
                    "id": 4337,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 4333,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "10499:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 4335,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10512:13:6",
                      "memberName": "shareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7147,
                      "src": "10499:26:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 4336,
                      "name": "shareReserves_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4325,
                      "src": "10528:14:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "10499:43:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 4338,
                  "nodeType": "ExpressionStatement",
                  "src": "10499:43:6"
                },
                {
                  "expression": {
                    "id": 4345,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 4339,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "10552:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 4341,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10565:12:6",
                      "memberName": "bondReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7150,
                      "src": "10552:25:6",
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
                          "id": 4342,
                          "name": "_bondAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294,
                          "src": "10581:11:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 4343,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10593:9:6",
                        "memberName": "toUint128",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9953,
                        "src": "10581:21:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint128)"
                        }
                      },
                      "id": 4344,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10581:23:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "10552:52:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 4346,
                  "nodeType": "ExpressionStatement",
                  "src": "10552:52:6"
                },
                {
                  "expression": {
                    "id": 4353,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 4347,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "10614:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 4349,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10627:17:6",
                      "memberName": "shortsOutstanding",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7162,
                      "src": "10614:30:6",
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
                          "id": 4350,
                          "name": "_bondAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294,
                          "src": "10648:11:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 4351,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10660:9:6",
                        "memberName": "toUint128",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9953,
                        "src": "10648:21:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint128)"
                        }
                      },
                      "id": 4352,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10648:23:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "10614:57:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 4354,
                  "nodeType": "ExpressionStatement",
                  "src": "10614:57:6"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 4365,
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
                                "id": 4359,
                                "name": "_marketState",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4833,
                                "src": "11230:12:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                  "typeString": "struct IHyperdrive.MarketState storage ref"
                                }
                              },
                              "id": 4360,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "11243:13:6",
                              "memberName": "shareReserves",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7147,
                              "src": "11230:26:6",
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
                            "id": 4358,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "11222:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 4357,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "11222:7:6",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 4361,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11222:35:6",
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
                        "id": 4356,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "11215:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 4355,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "11215:6:6",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 4362,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11215:43:6",
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
                        "id": 4363,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "11273:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 4364,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11286:15:6",
                      "memberName": "shareAdjustment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7153,
                      "src": "11273:28:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      }
                    },
                    "src": "11215:86:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 4372,
                  "nodeType": "IfStatement",
                  "src": "11198:180:6",
                  "trueBody": {
                    "id": 4371,
                    "nodeType": "Block",
                    "src": "11312:66:6",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 4366,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "11333:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 4368,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11345:20:6",
                            "memberName": "InvalidShareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7322,
                            "src": "11333:32:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 4369,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11333:34:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4370,
                        "nodeType": "RevertStatement",
                        "src": "11326:41:6"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    4374
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4374,
                      "mutability": "mutable",
                      "name": "_latestCheckpoint",
                      "nameLocation": "11478:17:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4423,
                      "src": "11470:25:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4373,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11470:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4377,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 4375,
                      "name": "_latestCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5113,
                      "src": "11498:17:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 4376,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11498:19:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11470:47:6"
                },
                {
                  "assignments": [
                    4379
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4379,
                      "mutability": "mutable",
                      "name": "checkpointExposureBefore",
                      "nameLocation": "11534:24:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4423,
                      "src": "11527:31:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      },
                      "typeName": {
                        "id": 4378,
                        "name": "int128",
                        "nodeType": "ElementaryTypeName",
                        "src": "11527:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4387,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "baseExpression": {
                            "id": 4382,
                            "name": "_checkpoints",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4852,
                            "src": "11581:12:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7182_storage_$",
                              "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                            }
                          },
                          "id": 4384,
                          "indexExpression": {
                            "id": 4383,
                            "name": "_latestCheckpoint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4374,
                            "src": "11594:17:6",
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
                          "src": "11581:31:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Checkpoint_$7182_storage",
                            "typeString": "struct IHyperdrive.Checkpoint storage ref"
                          }
                        },
                        "id": 4385,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11613:12:6",
                        "memberName": "longExposure",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7181,
                        "src": "11581:44:6",
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
                      "id": 4381,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "11561:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int128_$",
                        "typeString": "type(int128)"
                      },
                      "typeName": {
                        "id": 4380,
                        "name": "int128",
                        "nodeType": "ElementaryTypeName",
                        "src": "11561:6:6",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 4386,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11561:74:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int128",
                      "typeString": "int128"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11527:108:6"
                },
                {
                  "expression": {
                    "id": 4398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 4388,
                          "name": "_checkpoints",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4852,
                          "src": "11645:12:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7182_storage_$",
                            "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                          }
                        },
                        "id": 4390,
                        "indexExpression": {
                          "id": 4389,
                          "name": "_latestCheckpoint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4374,
                          "src": "11658:17:6",
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
                        "src": "11645:31:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Checkpoint_$7182_storage",
                          "typeString": "struct IHyperdrive.Checkpoint storage ref"
                        }
                      },
                      "id": 4391,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "11677:12:6",
                      "memberName": "longExposure",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7181,
                      "src": "11645:44:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 4394,
                              "name": "_bondAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294,
                              "src": "11713:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 4395,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11725:9:6",
                            "memberName": "toUint128",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9953,
                            "src": "11713:21:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256) pure returns (uint128)"
                            }
                          },
                          "id": 4396,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11713:23:6",
                          "tryCall": false,
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
                        "id": 4393,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "11693:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int128_$",
                          "typeString": "type(int128)"
                        },
                        "typeName": {
                          "id": 4392,
                          "name": "int128",
                          "nodeType": "ElementaryTypeName",
                          "src": "11693:6:6",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 4397,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11693:53:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      }
                    },
                    "src": "11645:101:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int128",
                      "typeString": "int128"
                    }
                  },
                  "id": 4399,
                  "nodeType": "ExpressionStatement",
                  "src": "11645:101:6"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 4401,
                        "name": "checkpointExposureBefore",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4379,
                        "src": "11789:24:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      },
                      {
                        "expression": {
                          "baseExpression": {
                            "id": 4402,
                            "name": "_checkpoints",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4852,
                            "src": "11827:12:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7182_storage_$",
                              "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                            }
                          },
                          "id": 4404,
                          "indexExpression": {
                            "id": 4403,
                            "name": "_latestCheckpoint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4374,
                            "src": "11840:17:6",
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
                          "src": "11827:31:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Checkpoint_$7182_storage",
                            "typeString": "struct IHyperdrive.Checkpoint storage ref"
                          }
                        },
                        "id": 4405,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11859:12:6",
                        "memberName": "longExposure",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7181,
                        "src": "11827:44:6",
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
                      "id": 4400,
                      "name": "_updateLongExposure",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1252,
                      "src": "11756:19:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$",
                        "typeString": "function (int256,int256)"
                      }
                    },
                    "id": 4406,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11756:125:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4407,
                  "nodeType": "ExpressionStatement",
                  "src": "11756:125:6"
                },
                {
                  "condition": {
                    "id": 4411,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "12297:24:6",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 4409,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4298,
                          "src": "12309:11:6",
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
                        "id": 4408,
                        "name": "_isSolvent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1056,
                        "src": "12298:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (uint256) view returns (bool)"
                        }
                      },
                      "id": 4410,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12298:23:6",
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
                  "id": 4418,
                  "nodeType": "IfStatement",
                  "src": "12293:106:6",
                  "trueBody": {
                    "id": 4417,
                    "nodeType": "Block",
                    "src": "12323:76:6",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 4412,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "12344:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 4414,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "12356:30:6",
                            "memberName": "BaseBufferExceedsShareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7300,
                            "src": "12344:42:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 4415,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12344:44:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4416,
                        "nodeType": "RevertStatement",
                        "src": "12337:51:6"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 4420,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4298,
                        "src": "12493:11:6",
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
                      "id": 4419,
                      "name": "_distributeExcessIdle",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2961,
                      "src": "12471:21:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 4421,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12471:34:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4422,
                  "nodeType": "ExpressionStatement",
                  "src": "12471:34:6"
                }
              ]
            },
            "documentation": {
              "id": 4292,
              "nodeType": "StructuredDocumentation",
              "src": "9134:368:6",
              "text": "@dev Applies an open short to the state. This includes updating the\n      reserves and maintaining the reserve invariants.\n @param _bondAmount The amount of bonds shorted.\n @param _shareReservesDelta The amount of shares paid to the curve.\n @param _sharePrice The share price.\n @param _maturityTime The maturity time of the long."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_applyOpenShort",
            "nameLocation": "9516:15:6",
            "parameters": {
              "id": 4301,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4294,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "9549:11:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4424,
                  "src": "9541:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4293,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9541:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4296,
                  "mutability": "mutable",
                  "name": "_shareReservesDelta",
                  "nameLocation": "9578:19:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4424,
                  "src": "9570:27:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4295,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9570:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4298,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "9615:11:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4424,
                  "src": "9607:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4297,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9607:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4300,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "9644:13:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4424,
                  "src": "9636:21:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4299,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9636:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9531:132:6"
            },
            "returnParameters": {
              "id": 4302,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9673:0:6"
            },
            "scope": 4785,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 4499,
            "nodeType": "FunctionDefinition",
            "src": "13001:1212:6",
            "nodes": [],
            "body": {
              "id": 4498,
              "nodeType": "Block",
              "src": "13213:1000:6",
              "nodes": [],
              "statements": [
                {
                  "id": 4473,
                  "nodeType": "Block",
                  "src": "13223:712:6",
                  "statements": [
                    {
                      "assignments": [
                        4439
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 4439,
                          "mutability": "mutable",
                          "name": "shortsOutstanding_",
                          "nameLocation": "13300:18:6",
                          "nodeType": "VariableDeclaration",
                          "scope": 4473,
                          "src": "13292:26:6",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          },
                          "typeName": {
                            "id": 4438,
                            "name": "uint128",
                            "nodeType": "ElementaryTypeName",
                            "src": "13292:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 4442,
                      "initialValue": {
                        "expression": {
                          "id": 4440,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4833,
                          "src": "13321:12:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 4441,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "13334:17:6",
                        "memberName": "shortsOutstanding",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7162,
                        "src": "13321:30:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "13292:59:6"
                    },
                    {
                      "expression": {
                        "id": 4461,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "expression": {
                            "id": 4443,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4833,
                            "src": "13365:12:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 4445,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "memberLocation": "13378:24:6",
                          "memberName": "shortAverageMaturityTime",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7168,
                          "src": "13365:37:6",
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
                                  "id": 4452,
                                  "name": "shortsOutstanding_",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4439,
                                  "src": "13542:18:6",
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
                                  "id": 4455,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 4453,
                                    "name": "_maturityTime",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4435,
                                    "src": "13582:13:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "*",
                                  "rightExpression": {
                                    "hexValue": "31653138",
                                    "id": 4454,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "13598:4:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                      "typeString": "int_const 1000000000000000000"
                                    },
                                    "value": "1e18"
                                  },
                                  "src": "13582:20:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "id": 4456,
                                  "name": "_bondAmount",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4427,
                                  "src": "13657:11:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "hexValue": "66616c7365",
                                  "id": 4457,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "bool",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "13690:5:6",
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
                                        "id": 4448,
                                        "name": "_marketState",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 4833,
                                        "src": "13430:12:6",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                          "typeString": "struct IHyperdrive.MarketState storage ref"
                                        }
                                      },
                                      "id": 4449,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "13443:24:6",
                                      "memberName": "shortAverageMaturityTime",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 7168,
                                      "src": "13430:37:6",
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
                                    "id": 4447,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "13405:7:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint256_$",
                                      "typeString": "type(uint256)"
                                    },
                                    "typeName": {
                                      "id": 4446,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "13405:7:6",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 4450,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "13405:76:6",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 4451,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "13499:21:6",
                                "memberName": "updateWeightedAverage",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8993,
                                "src": "13405:115:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256,uint256,uint256,bool) pure returns (uint256)"
                                }
                              },
                              "id": 4458,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "13405:308:6",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 4459,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "13731:9:6",
                            "memberName": "toUint128",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9953,
                            "src": "13405:335:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256) pure returns (uint128)"
                            }
                          },
                          "id": 4460,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13405:337:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "src": "13365:377:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      "id": 4462,
                      "nodeType": "ExpressionStatement",
                      "src": "13365:377:6"
                    },
                    {
                      "expression": {
                        "id": 4471,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "expression": {
                            "id": 4463,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4833,
                            "src": "13815:12:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 4465,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "memberLocation": "13828:17:6",
                          "memberName": "shortsOutstanding",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7162,
                          "src": "13815:30:6",
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
                          "id": 4470,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 4466,
                            "name": "shortsOutstanding_",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4439,
                            "src": "13864:18:6",
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
                                "id": 4467,
                                "name": "_bondAmount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4427,
                                "src": "13901:11:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 4468,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "13913:9:6",
                              "memberName": "toUint128",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9953,
                              "src": "13901:21:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256) pure returns (uint128)"
                              }
                            },
                            "id": 4469,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13901:23:6",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "src": "13864:60:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "src": "13815:109:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      "id": 4472,
                      "nodeType": "ExpressionStatement",
                      "src": "13815:109:6"
                    }
                  ]
                },
                {
                  "expression": {
                    "id": 4480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 4474,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "14002:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 4476,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "14015:13:6",
                      "memberName": "shareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7147,
                      "src": "14002:26:6",
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
                          "id": 4477,
                          "name": "_shareReservesDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4431,
                          "src": "14032:19:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 4478,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "14052:9:6",
                        "memberName": "toUint128",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9953,
                        "src": "14032:29:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint128)"
                        }
                      },
                      "id": 4479,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14032:31:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "14002:61:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 4481,
                  "nodeType": "ExpressionStatement",
                  "src": "14002:61:6"
                },
                {
                  "expression": {
                    "id": 4488,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 4482,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "14073:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 4484,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "14086:15:6",
                      "memberName": "shareAdjustment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7153,
                      "src": "14073:28:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 4485,
                          "name": "_shareAdjustmentDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4433,
                          "src": "14105:21:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 4486,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "14127:8:6",
                        "memberName": "toInt128",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9993,
                        "src": "14105:30:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$",
                          "typeString": "function (int256) pure returns (int128)"
                        }
                      },
                      "id": 4487,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14105:32:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      }
                    },
                    "src": "14073:64:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int128",
                      "typeString": "int128"
                    }
                  },
                  "id": 4489,
                  "nodeType": "ExpressionStatement",
                  "src": "14073:64:6"
                },
                {
                  "expression": {
                    "id": 4496,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 4490,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "14147:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 4492,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "14160:12:6",
                      "memberName": "bondReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7150,
                      "src": "14147:25:6",
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
                          "id": 4493,
                          "name": "_bondReservesDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4429,
                          "src": "14176:18:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 4494,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "14195:9:6",
                        "memberName": "toUint128",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9953,
                        "src": "14176:28:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint128)"
                        }
                      },
                      "id": 4495,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14176:30:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "14147:59:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 4497,
                  "nodeType": "ExpressionStatement",
                  "src": "14147:59:6"
                }
              ]
            },
            "documentation": {
              "id": 4425,
              "nodeType": "StructuredDocumentation",
              "src": "12518:478:6",
              "text": "@dev Applies the trading deltas from a closed short to the reserves and\n      the withdrawal pool.\n @param _bondAmount The amount of shorts that were closed.\n @param _bondReservesDelta The amount of bonds removed from the reserves.\n @param _shareReservesDelta The amount of shares added to the reserves.\n @param _shareAdjustmentDelta The amount to increase the share adjustment.\n @param _maturityTime The maturity time of the short."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_applyCloseShort",
            "nameLocation": "13010:16:6",
            "parameters": {
              "id": 4436,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4427,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "13044:11:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4499,
                  "src": "13036:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4426,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13036:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4429,
                  "mutability": "mutable",
                  "name": "_bondReservesDelta",
                  "nameLocation": "13073:18:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4499,
                  "src": "13065:26:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4428,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13065:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4431,
                  "mutability": "mutable",
                  "name": "_shareReservesDelta",
                  "nameLocation": "13109:19:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4499,
                  "src": "13101:27:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4430,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13101:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4433,
                  "mutability": "mutable",
                  "name": "_shareAdjustmentDelta",
                  "nameLocation": "13145:21:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4499,
                  "src": "13138:28:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 4432,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13138:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4435,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "13184:13:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4499,
                  "src": "13176:21:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4434,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13176:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13026:177:6"
            },
            "returnParameters": {
              "id": 4437,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "13213:0:6"
            },
            "scope": 4785,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 4605,
            "nodeType": "FunctionDefinition",
            "src": "14792:3820:6",
            "nodes": [],
            "body": {
              "id": 4604,
              "nodeType": "Block",
              "src": "15081:3531:6",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 4527,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4515,
                      "name": "shareReservesDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4511,
                      "src": "15307:18:6",
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
                            "id": 4518,
                            "name": "_effectiveShareReserves",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5128,
                            "src": "15375:23:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 4519,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "15375:25:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 4520,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4833,
                            "src": "15414:12:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 4521,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "15427:12:6",
                          "memberName": "bondReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7150,
                          "src": "15414:25:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        {
                          "id": 4522,
                          "name": "_bondAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4502,
                          "src": "15453:11:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 4523,
                          "name": "_timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4820,
                          "src": "15478:12:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 4524,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4504,
                          "src": "15504:11:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 4525,
                          "name": "_initialSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4823,
                          "src": "15529:18:6",
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
                          "id": 4516,
                          "name": "HyperdriveMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9918,
                          "src": "15328:14:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                            "typeString": "type(library HyperdriveMath)"
                          }
                        },
                        "id": 4517,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "15343:18:6",
                        "memberName": "calculateOpenShort",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9368,
                        "src": "15328:33:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 4526,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "15328:229:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "15307:250:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4528,
                  "nodeType": "ExpressionStatement",
                  "src": "15307:250:6"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 4534,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 4531,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4504,
                          "src": "15803:11:6",
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
                          "id": 4529,
                          "name": "shareReservesDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4511,
                          "src": "15776:18:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 4530,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "15795:7:6",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8364,
                        "src": "15776:26:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 4532,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "15776:39:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 4533,
                      "name": "_bondAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4502,
                      "src": "15818:11:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "15776:53:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 4541,
                  "nodeType": "IfStatement",
                  "src": "15772:121:6",
                  "trueBody": {
                    "id": 4540,
                    "nodeType": "Block",
                    "src": "15831:62:6",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 4535,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "15852:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 4537,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "15864:16:6",
                            "memberName": "NegativeInterest",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7328,
                            "src": "15852:28:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 4538,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "15852:30:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4539,
                        "nodeType": "RevertStatement",
                        "src": "15845:37:6"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    4543
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4543,
                      "mutability": "mutable",
                      "name": "spotPrice",
                      "nameLocation": "16043:9:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4604,
                      "src": "16035:17:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4542,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "16035:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4553,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 4546,
                          "name": "_effectiveShareReserves",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5128,
                          "src": "16102:23:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                            "typeString": "function () view returns (uint256)"
                          }
                        },
                        "id": 4547,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "16102:25:6",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 4548,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4833,
                          "src": "16141:12:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 4549,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "16154:12:6",
                        "memberName": "bondReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7150,
                        "src": "16141:25:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "id": 4550,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4823,
                        "src": "16180:18:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4551,
                        "name": "_timeStretch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4820,
                        "src": "16212:12:6",
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
                        "id": 4544,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9918,
                        "src": "16055:14:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 4545,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16070:18:6",
                      "memberName": "calculateSpotPrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9113,
                      "src": "16055:33:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 4552,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16055:179:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "16035:199:6"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 4555,
                        "name": "spotPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4543,
                        "src": "16256:9:6",
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
                      "id": 4554,
                      "name": "recordPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5299,
                      "src": "16244:11:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 4556,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16244:22:6",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4557,
                  "nodeType": "ExpressionStatement",
                  "src": "16244:22:6"
                },
                {
                  "assignments": [
                    4559
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4559,
                      "mutability": "mutable",
                      "name": "curveFee",
                      "nameLocation": "16442:8:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4604,
                      "src": "16434:16:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4558,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "16434:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4560,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "16434:16:6"
                },
                {
                  "assignments": [
                    4562
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4562,
                      "mutability": "mutable",
                      "name": "governanceCurveFee",
                      "nameLocation": "16468:18:6",
                      "nodeType": "VariableDeclaration",
                      "scope": 4604,
                      "src": "16460:26:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4561,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "16460:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4563,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "16460:26:6"
                },
                {
                  "expression": {
                    "id": 4574,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 4564,
                          "name": "curveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4559,
                          "src": "16510:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        null,
                        {
                          "id": 4565,
                          "name": "governanceCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4562,
                          "src": "16557:18:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        null,
                        null
                      ],
                      "id": 4566,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "16496:221:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$__$_t_uint256_$__$__$",
                        "typeString": "tuple(uint256,,uint256,,)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 4568,
                          "name": "_bondAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4502,
                          "src": "16758:11:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 4569,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9066,
                            "src": "16783:14:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$9066_$",
                              "typeString": "type(library FixedPointMath)"
                            }
                          },
                          "id": 4570,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "16798:6:6",
                          "memberName": "ONE_18",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8325,
                          "src": "16783:21:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 4571,
                          "name": "spotPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4543,
                          "src": "16868:9:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 4572,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4504,
                          "src": "16891:11:6",
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
                        "id": 4567,
                        "name": "_calculateFeesGivenBonds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1412,
                        "src": "16720:24:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256,uint256,uint256)"
                        }
                      },
                      "id": 4573,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "16720:192:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "src": "16496:416:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4575,
                  "nodeType": "ExpressionStatement",
                  "src": "16496:416:6"
                },
                {
                  "expression": {
                    "id": 4580,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4576,
                      "name": "shareReservesDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4511,
                      "src": "17563:18:6",
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
                      "id": 4579,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 4577,
                        "name": "curveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4559,
                        "src": "17585:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 4578,
                        "name": "governanceCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4562,
                        "src": "17596:18:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "17585:29:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "17563:51:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4581,
                  "nodeType": "ExpressionStatement",
                  "src": "17563:51:6"
                },
                {
                  "expression": {
                    "id": 4597,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4582,
                      "name": "traderDeposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4509,
                      "src": "18091:13:6",
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
                          "id": 4585,
                          "name": "_bondAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4502,
                          "src": "18158:11:6",
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
                          "id": 4588,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 4586,
                            "name": "shareReservesDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4511,
                            "src": "18361:18:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 4587,
                            "name": "governanceCurveFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4562,
                            "src": "18382:18:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "18361:39:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 4589,
                          "name": "_openSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4506,
                          "src": "18414:15:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 4592,
                              "name": "_openSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4506,
                              "src": "18459:15:6",
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
                              "id": 4590,
                              "name": "_sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4504,
                              "src": "18443:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 4591,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "18455:3:6",
                            "memberName": "max",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9029,
                            "src": "18443:15:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 4593,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "18443:32:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 4594,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4504,
                          "src": "18489:11:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 4595,
                          "name": "_flatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4843,
                          "src": "18514:8:6",
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
                        "expression": {
                          "id": 4583,
                          "name": "HyperdriveMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9918,
                          "src": "18107:14:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                            "typeString": "type(library HyperdriveMath)"
                          }
                        },
                        "id": 4584,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "18122:22:6",
                        "memberName": "calculateShortProceeds",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9853,
                        "src": "18107:37:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 4596,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "18107:425:6",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "18091:441:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4598,
                  "nodeType": "ExpressionStatement",
                  "src": "18091:441:6"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 4599,
                        "name": "traderDeposit",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4509,
                        "src": "18551:13:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4600,
                        "name": "shareReservesDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4511,
                        "src": "18566:18:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 4601,
                        "name": "governanceCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4562,
                        "src": "18586:18:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 4602,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "18550:55:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 4514,
                  "id": 4603,
                  "nodeType": "Return",
                  "src": "18543:62:6"
                }
              ]
            },
            "documentation": {
              "id": 4500,
              "nodeType": "StructuredDocumentation",
              "src": "14219:568:6",
              "text": "@dev Calculate the pool reserve and trader deltas that result from\n      opening a short. This calculation includes trading fees.\n @param _bondAmount The amount of bonds being sold to open the short.\n @param _sharePrice The current share price.\n @param _openSharePrice The share price at the beginning of the checkpoint.\n @return traderDeposit The deposit, in shares, required to open the short.\n @return shareReservesDelta The change in the share reserves.\n @return totalGovernanceFee The governance fee in shares."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateOpenShort",
            "nameLocation": "14801:19:6",
            "parameters": {
              "id": 4507,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4502,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "14838:11:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4605,
                  "src": "14830:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4501,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14830:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4504,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "14867:11:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4605,
                  "src": "14859:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4503,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14859:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4506,
                  "mutability": "mutable",
                  "name": "_openSharePrice",
                  "nameLocation": "14896:15:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4605,
                  "src": "14888:23:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4505,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14888:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14820:97:6"
            },
            "returnParameters": {
              "id": 4514,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4509,
                  "mutability": "mutable",
                  "name": "traderDeposit",
                  "nameLocation": "14973:13:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4605,
                  "src": "14965:21:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4508,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14965:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4511,
                  "mutability": "mutable",
                  "name": "shareReservesDelta",
                  "nameLocation": "15008:18:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4605,
                  "src": "15000:26:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4510,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15000:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4513,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "15048:18:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4605,
                  "src": "15040:26:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4512,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15040:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14951:125:6"
            },
            "scope": 4785,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 4784,
            "nodeType": "FunctionDefinition",
            "src": "19458:6485:6",
            "nodes": [],
            "body": {
              "id": 4783,
              "nodeType": "Block",
              "src": "19863:6080:6",
              "nodes": [],
              "statements": [
                {
                  "id": 4725,
                  "nodeType": "Block",
                  "src": "20094:3580:6",
                  "statements": [
                    {
                      "assignments": [
                        4628
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 4628,
                          "mutability": "mutable",
                          "name": "timeRemaining",
                          "nameLocation": "20550:13:6",
                          "nodeType": "VariableDeclaration",
                          "scope": 4725,
                          "src": "20542:21:6",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 4627,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "20542:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 4632,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 4630,
                            "name": "_maturityTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4612,
                            "src": "20590:13:6",
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
                          "id": 4629,
                          "name": "_calculateTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5056,
                          "src": "20566:23:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256) view returns (uint256)"
                          }
                        },
                        "id": 4631,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "20566:38:6",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "20542:62:6"
                    },
                    {
                      "expression": {
                        "id": 4649,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "components": [
                            {
                              "id": 4633,
                              "name": "shareCurveDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4621,
                              "src": "20636:15:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4634,
                              "name": "bondReservesDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4615,
                              "src": "20669:17:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4635,
                              "name": "shareReservesDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4619,
                              "src": "20704:18:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 4636,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "TupleExpression",
                          "src": "20618:118:6",
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
                                "id": 4639,
                                "name": "_effectiveShareReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5128,
                                "src": "20791:23:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                  "typeString": "function () view returns (uint256)"
                                }
                              },
                              "id": 4640,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "20791:25:6",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 4641,
                                "name": "_marketState",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4833,
                                "src": "20834:12:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                  "typeString": "struct IHyperdrive.MarketState storage ref"
                                }
                              },
                              "id": 4642,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "20847:12:6",
                              "memberName": "bondReserves",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7150,
                              "src": "20834:25:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            },
                            {
                              "id": 4643,
                              "name": "_bondAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4608,
                              "src": "20877:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4644,
                              "name": "timeRemaining",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4628,
                              "src": "20906:13:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4645,
                              "name": "_timeStretch",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4820,
                              "src": "20937:12:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4646,
                              "name": "_sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4610,
                              "src": "20967:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4647,
                              "name": "_initialSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4823,
                              "src": "20996:18:6",
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
                              "id": 4637,
                              "name": "HyperdriveMath",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9918,
                              "src": "20739:14:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                                "typeString": "type(library HyperdriveMath)"
                              }
                            },
                            "id": 4638,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "20754:19:6",
                            "memberName": "calculateCloseShort",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9433,
                            "src": "20739:34:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256,uint256,uint256)"
                            }
                          },
                          "id": 4648,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "20739:289:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256,uint256)"
                          }
                        },
                        "src": "20618:410:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 4650,
                      "nodeType": "ExpressionStatement",
                      "src": "20618:410:6"
                    },
                    {
                      "assignments": [
                        4652
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 4652,
                          "mutability": "mutable",
                          "name": "spotPrice",
                          "nameLocation": "21181:9:6",
                          "nodeType": "VariableDeclaration",
                          "scope": 4725,
                          "src": "21173:17:6",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 4651,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "21173:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 4662,
                      "initialValue": {
                        "arguments": [
                          {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 4655,
                              "name": "_effectiveShareReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5128,
                              "src": "21244:23:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                "typeString": "function () view returns (uint256)"
                              }
                            },
                            "id": 4656,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "21244:25:6",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 4657,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4833,
                              "src": "21287:12:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 4658,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "21300:12:6",
                            "memberName": "bondReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7150,
                            "src": "21287:25:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          {
                            "id": 4659,
                            "name": "_initialSharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4823,
                            "src": "21330:18:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 4660,
                            "name": "_timeStretch",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4820,
                            "src": "21366:12:6",
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
                            "id": 4653,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9918,
                            "src": "21193:14:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                              "typeString": "type(library HyperdriveMath)"
                            }
                          },
                          "id": 4654,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "21208:18:6",
                          "memberName": "calculateSpotPrice",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9113,
                          "src": "21193:33:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 4661,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "21193:199:6",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "21173:219:6"
                    },
                    {
                      "condition": {
                        "arguments": [
                          {
                            "id": 4664,
                            "name": "shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4621,
                            "src": "21468:15:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 4665,
                            "name": "bondReservesDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4615,
                            "src": "21505:17:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 4668,
                                "name": "spotPrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4652,
                                "src": "21616:9:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 4669,
                                "name": "_curveFee",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4840,
                                "src": "21651:9:6",
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
                                "id": 4666,
                                "name": "HyperdriveMath",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9918,
                                "src": "21544:14:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                                  "typeString": "type(library HyperdriveMath)"
                                }
                              },
                              "id": 4667,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "21559:31:6",
                              "memberName": "calculateCloseShortMaxSpotPrice",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9241,
                              "src": "21544:46:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 4670,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "21544:138:6",
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
                          "id": 4663,
                          "name": "_isNegativeInterest",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1016,
                          "src": "21427:19:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256,uint256,uint256) view returns (bool)"
                          }
                        },
                        "id": 4671,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "21427:273:6",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 4678,
                      "nodeType": "IfStatement",
                      "src": "21406:379:6",
                      "trueBody": {
                        "id": 4677,
                        "nodeType": "Block",
                        "src": "21715:70:6",
                        "statements": [
                          {
                            "errorCall": {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "id": 4672,
                                  "name": "IHyperdrive",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7431,
                                  "src": "21740:11:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                    "typeString": "type(contract IHyperdrive)"
                                  }
                                },
                                "id": 4674,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "21752:16:6",
                                "memberName": "NegativeInterest",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7328,
                                "src": "21740:28:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                  "typeString": "function () pure"
                                }
                              },
                              "id": 4675,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "21740:30:6",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 4676,
                            "nodeType": "RevertStatement",
                            "src": "21733:37:6"
                          }
                        ]
                      }
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "id": 4680,
                            "name": "spotPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4652,
                            "src": "21878:9:6",
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
                          "id": 4679,
                          "name": "recordPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5299,
                          "src": "21866:11:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                            "typeString": "function (uint256)"
                          }
                        },
                        "id": 4681,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "21866:22:6",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 4682,
                      "nodeType": "ExpressionStatement",
                      "src": "21866:22:6"
                    },
                    {
                      "assignments": [
                        4684
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 4684,
                          "mutability": "mutable",
                          "name": "bondAmount",
                          "nameLocation": "22130:10:6",
                          "nodeType": "VariableDeclaration",
                          "scope": 4725,
                          "src": "22122:18:6",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 4683,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "22122:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 4686,
                      "initialValue": {
                        "id": 4685,
                        "name": "_bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4608,
                        "src": "22143:11:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "22122:32:6"
                    },
                    {
                      "assignments": [
                        4688
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 4688,
                          "mutability": "mutable",
                          "name": "sharePrice",
                          "nameLocation": "22201:10:6",
                          "nodeType": "VariableDeclaration",
                          "scope": 4725,
                          "src": "22193:18:6",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 4687,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "22193:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 4690,
                      "initialValue": {
                        "id": 4689,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4610,
                        "src": "22214:11:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "22193:32:6"
                    },
                    {
                      "assignments": [
                        4692
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 4692,
                          "mutability": "mutable",
                          "name": "curveFee",
                          "nameLocation": "22272:8:6",
                          "nodeType": "VariableDeclaration",
                          "scope": 4725,
                          "src": "22264:16:6",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 4691,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "22264:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 4693,
                      "nodeType": "VariableDeclarationStatement",
                      "src": "22264:16:6"
                    },
                    {
                      "assignments": [
                        4695
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 4695,
                          "mutability": "mutable",
                          "name": "flatFee",
                          "nameLocation": "22302:7:6",
                          "nodeType": "VariableDeclaration",
                          "scope": 4725,
                          "src": "22294:15:6",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 4694,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "22294:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 4696,
                      "nodeType": "VariableDeclarationStatement",
                      "src": "22294:15:6"
                    },
                    {
                      "assignments": [
                        4698
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 4698,
                          "mutability": "mutable",
                          "name": "governanceCurveFee",
                          "nameLocation": "22331:18:6",
                          "nodeType": "VariableDeclaration",
                          "scope": 4725,
                          "src": "22323:26:6",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 4697,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "22323:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 4699,
                      "nodeType": "VariableDeclarationStatement",
                      "src": "22323:26:6"
                    },
                    {
                      "expression": {
                        "id": 4711,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "components": [
                            {
                              "id": 4700,
                              "name": "curveFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4692,
                              "src": "22381:8:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4701,
                              "name": "flatFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4695,
                              "src": "22407:7:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4702,
                              "name": "governanceCurveFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4698,
                              "src": "22432:18:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            null,
                            {
                              "id": 4703,
                              "name": "totalGovernanceFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4625,
                              "src": "22507:18:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 4704,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "TupleExpression",
                          "src": "22363:176:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$__$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256,uint256,,uint256)"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "arguments": [
                            {
                              "id": 4706,
                              "name": "bondAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4684,
                              "src": "22584:10:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4707,
                              "name": "timeRemaining",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4628,
                              "src": "22612:13:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4708,
                              "name": "spotPrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4652,
                              "src": "22643:9:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4709,
                              "name": "sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4688,
                              "src": "22670:10:6",
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
                            "id": 4705,
                            "name": "_calculateFeesGivenBonds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1412,
                            "src": "22542:24:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256,uint256,uint256)"
                            }
                          },
                          "id": 4710,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "22542:152:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256,uint256,uint256,uint256)"
                          }
                        },
                        "src": "22363:331:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 4712,
                      "nodeType": "ExpressionStatement",
                      "src": "22363:331:6"
                    },
                    {
                      "expression": {
                        "id": 4717,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 4713,
                          "name": "shareCurveDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4621,
                          "src": "23323:15:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 4716,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 4714,
                            "name": "curveFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4692,
                            "src": "23342:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 4715,
                            "name": "governanceCurveFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4698,
                            "src": "23353:18:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "23342:29:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "23323:48:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 4718,
                      "nodeType": "ExpressionStatement",
                      "src": "23323:48:6"
                    },
                    {
                      "expression": {
                        "id": 4723,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 4719,
                          "name": "shareReservesDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4619,
                          "src": "23623:18:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 4722,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 4720,
                            "name": "curveFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4692,
                            "src": "23645:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 4721,
                            "name": "flatFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4695,
                            "src": "23656:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "23645:18:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "23623:40:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 4724,
                      "nodeType": "ExpressionStatement",
                      "src": "23623:40:6"
                    }
                  ]
                },
                {
                  "id": 4782,
                  "nodeType": "Block",
                  "src": "23817:2120:6",
                  "statements": [
                    {
                      "assignments": [
                        4727
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 4727,
                          "mutability": "mutable",
                          "name": "openSharePrice",
                          "nameLocation": "23839:14:6",
                          "nodeType": "VariableDeclaration",
                          "scope": 4782,
                          "src": "23831:22:6",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 4726,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "23831:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 4734,
                      "initialValue": {
                        "expression": {
                          "baseExpression": {
                            "id": 4728,
                            "name": "_checkpoints",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4852,
                            "src": "23856:12:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7182_storage_$",
                              "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                            }
                          },
                          "id": 4732,
                          "indexExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 4731,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 4729,
                              "name": "_maturityTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4612,
                              "src": "23886:13:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 4730,
                              "name": "_positionDuration",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4817,
                              "src": "23902:17:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "23886:33:6",
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
                          "src": "23856:77:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Checkpoint_$7182_storage",
                            "typeString": "struct IHyperdrive.Checkpoint storage ref"
                          }
                        },
                        "id": 4733,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "23934:10:6",
                        "memberName": "sharePrice",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7178,
                        "src": "23856:88:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "23831:113:6"
                    },
                    {
                      "assignments": [
                        4736
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 4736,
                          "mutability": "mutable",
                          "name": "closeSharePrice",
                          "nameLocation": "23966:15:6",
                          "nodeType": "VariableDeclaration",
                          "scope": 4782,
                          "src": "23958:23:6",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 4735,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "23958:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 4747,
                      "initialValue": {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 4740,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 4737,
                              "name": "block",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -4,
                              "src": "23984:5:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_block",
                                "typeString": "block"
                              }
                            },
                            "id": 4738,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "23990:9:6",
                            "memberName": "timestamp",
                            "nodeType": "MemberAccess",
                            "src": "23984:15:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "id": 4739,
                            "name": "_maturityTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4612,
                            "src": "24002:13:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "23984:31:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 4742,
                              "name": "_checkpoints",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4852,
                              "src": "24064:12:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7182_storage_$",
                                "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                              }
                            },
                            "id": 4744,
                            "indexExpression": {
                              "id": 4743,
                              "name": "_maturityTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4612,
                              "src": "24077:13:6",
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
                            "src": "24064:27:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Checkpoint_$7182_storage",
                              "typeString": "struct IHyperdrive.Checkpoint storage ref"
                            }
                          },
                          "id": 4745,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "24092:10:6",
                          "memberName": "sharePrice",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7178,
                          "src": "24064:38:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "id": 4746,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "Conditional",
                        "src": "23984:118:6",
                        "trueExpression": {
                          "id": 4741,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4610,
                          "src": "24034:11:6",
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
                      "nodeType": "VariableDeclarationStatement",
                      "src": "23958:144:6"
                    },
                    {
                      "expression": {
                        "id": 4758,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 4748,
                          "name": "shareProceeds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4617,
                          "src": "24651:13:6",
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
                              "id": 4751,
                              "name": "_bondAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4608,
                              "src": "24722:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4752,
                              "name": "shareReservesDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4619,
                              "src": "24751:18:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4753,
                              "name": "openSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4727,
                              "src": "24787:14:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4754,
                              "name": "closeSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4736,
                              "src": "24819:15:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4755,
                              "name": "_sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4610,
                              "src": "24852:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4756,
                              "name": "_flatFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4843,
                              "src": "24881:8:6",
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
                            "expression": {
                              "id": 4749,
                              "name": "HyperdriveMath",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9918,
                              "src": "24667:14:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                                "typeString": "type(library HyperdriveMath)"
                              }
                            },
                            "id": 4750,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "24682:22:6",
                            "memberName": "calculateShortProceeds",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9853,
                            "src": "24667:37:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 4757,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "24667:236:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "24651:252:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 4759,
                      "nodeType": "ExpressionStatement",
                      "src": "24651:252:6"
                    },
                    {
                      "expression": {
                        "id": 4762,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 4760,
                          "name": "shareReservesDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4619,
                          "src": "25109:18:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "-=",
                        "rightHandSide": {
                          "id": 4761,
                          "name": "totalGovernanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4625,
                          "src": "25131:18:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "25109:40:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 4763,
                      "nodeType": "ExpressionStatement",
                      "src": "25109:40:6"
                    },
                    {
                      "expression": {
                        "id": 4780,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "components": [
                            {
                              "id": 4764,
                              "name": "shareProceeds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4617,
                              "src": "25468:13:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4765,
                              "name": "shareReservesDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4619,
                              "src": "25499:18:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4766,
                              "name": "shareCurveDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4621,
                              "src": "25535:15:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4767,
                              "name": "shareAdjustmentDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4623,
                              "src": "25568:20:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 4768,
                              "name": "totalGovernanceFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4625,
                              "src": "25606:18:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 4769,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "TupleExpression",
                          "src": "25450:188:6",
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
                              "id": 4772,
                              "name": "shareProceeds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4617,
                              "src": "25706:13:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4773,
                              "name": "shareReservesDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4619,
                              "src": "25737:18:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4774,
                              "name": "shareCurveDelta",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4621,
                              "src": "25773:15:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4775,
                              "name": "totalGovernanceFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4625,
                              "src": "25806:18:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4776,
                              "name": "openSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4727,
                              "src": "25842:14:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 4777,
                              "name": "closeSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4736,
                              "src": "25874:15:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "66616c7365",
                              "id": 4778,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "25907:5:6",
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
                            "expression": {
                              "id": 4770,
                              "name": "HyperdriveMath",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9918,
                              "src": "25641:14:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                                "typeString": "type(library HyperdriveMath)"
                              }
                            },
                            "id": 4771,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "25656:32:6",
                            "memberName": "calculateNegativeInterestOnClose",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9537,
                            "src": "25641:47:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256,bool) pure returns (uint256,uint256,uint256,int256,uint256)"
                            }
                          },
                          "id": 4779,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "25641:285:6",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256,uint256,int256,uint256)"
                          }
                        },
                        "src": "25450:476:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 4781,
                      "nodeType": "ExpressionStatement",
                      "src": "25450:476:6"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 4606,
              "nodeType": "StructuredDocumentation",
              "src": "18618:835:6",
              "text": "@dev Calculate the pool reserve and trader deltas that result from\n      closing a short. This calculation includes trading fees.\n @param _bondAmount The amount of bonds being purchased to close the\n        short.\n @param _sharePrice The current share price.\n @param _maturityTime The maturity time of the short position.\n @return bondReservesDelta The change in the bond reserves.\n @return shareProceeds The proceeds in shares of closing the short.\n @return shareReservesDelta The shares added to the reserves.\n @return shareCurveDelta The curve portion of the proceeds that LPs\n         receive from the trader in shares.\n @return shareAdjustmentDelta The change in the share adjustment.\n @return totalGovernanceFee The governance fee in shares."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateCloseShort",
            "nameLocation": "19467:20:6",
            "parameters": {
              "id": 4613,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4608,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "19505:11:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4784,
                  "src": "19497:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4607,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19497:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4610,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "19534:11:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4784,
                  "src": "19526:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4609,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19526:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4612,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "19563:13:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4784,
                  "src": "19555:21:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4611,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19555:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19487:95:6"
            },
            "returnParameters": {
              "id": 4626,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4615,
                  "mutability": "mutable",
                  "name": "bondReservesDelta",
                  "nameLocation": "19638:17:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4784,
                  "src": "19630:25:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4614,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19630:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4617,
                  "mutability": "mutable",
                  "name": "shareProceeds",
                  "nameLocation": "19677:13:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4784,
                  "src": "19669:21:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4616,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19669:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4619,
                  "mutability": "mutable",
                  "name": "shareReservesDelta",
                  "nameLocation": "19712:18:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4784,
                  "src": "19704:26:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4618,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19704:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4621,
                  "mutability": "mutable",
                  "name": "shareCurveDelta",
                  "nameLocation": "19752:15:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4784,
                  "src": "19744:23:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4620,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19744:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4623,
                  "mutability": "mutable",
                  "name": "shareAdjustmentDelta",
                  "nameLocation": "19788:20:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4784,
                  "src": "19781:27:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 4622,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19781:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4625,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "19830:18:6",
                  "nodeType": "VariableDeclaration",
                  "scope": 4784,
                  "src": "19822:26:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4624,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19822:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19616:242:6"
            },
            "scope": 4785,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 3926,
              "name": "IHyperdriveWrite",
              "nameLocations": [
                "845:16:6"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7668,
              "src": "845:16:6"
            },
            "id": 3927,
            "nodeType": "InheritanceSpecifier",
            "src": "845:16:6"
          },
          {
            "baseName": {
              "id": 3928,
              "name": "HyperdriveLP",
              "nameLocations": [
                "863:12:6"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 3078,
              "src": "863:12:6"
            },
            "id": 3929,
            "nodeType": "InheritanceSpecifier",
            "src": "863:12:6"
          }
        ],
        "canonicalName": "HyperdriveShort",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 3925,
          "nodeType": "StructuredDocumentation",
          "src": "480:328:6",
          "text": "@author DELV\n @title HyperdriveShort\n @notice Implements the short accounting for Hyperdrive.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          4785,
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
        "name": "HyperdriveShort",
        "nameLocation": "826:15:6",
        "scope": 4786,
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
  "id": 6
} as const;
