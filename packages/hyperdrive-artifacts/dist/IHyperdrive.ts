export const IHyperdrive = 
{
  "abi": [
    {
      "inputs": [],
      "name": "AlreadyClosed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalFailed",
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
      "name": "BelowMinimumShareReserves",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BondMatured",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BondNotMatured",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "underlyingError",
          "type": "bytes4"
        }
      ],
      "name": "CallFailed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "EndIndexTooLarge",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExpiredDeadline",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FeeTooHigh",
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
      "name": "FixedPointMath_NegativeInput",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FixedPointMath_NegativeOrZeroInput",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "HyperdriveDeployerAlreadyAdded",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "HyperdriveDeployerIndexMismatch",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "HyperdriveDeployerNotAdded",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InputLengthMismatch",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InsufficientLiquidity",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InsufficientPrice",
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
      "name": "InvalidContribution",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidDeployer",
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
      "name": "InvalidForwarderAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidIndexes",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidInitialSharePrice",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMaturityTime",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        }
      ],
      "name": "InvalidRecipient",
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
      "name": "InvalidToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidTradeSize",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MaxFeeTooHigh",
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
      "name": "MintPercentTooHigh",
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
      "name": "NoAssetsToWithdraw",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NonPayableInitialization",
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
      "name": "QueryOutOfRange",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RestrictedZeroAddress",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "ReturnData",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ShareReservesDeltaExceedsBondReservesDelta",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferFailed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Unauthorized",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnexpectedAssetId",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnexpectedSender",
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
      "inputs": [],
      "name": "ZeroLpTotalSupply",
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
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "baseToken",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_checkpointId",
          "type": "uint256"
        }
      ],
      "name": "getCheckpoint",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint128",
              "name": "sharePrice",
              "type": "uint128"
            }
          ],
          "internalType": "struct IHyperdrive.Checkpoint",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
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
      "name": "getCheckpointExposure",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMarketState",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint128",
              "name": "shareReserves",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "bondReserves",
              "type": "uint128"
            },
            {
              "internalType": "int128",
              "name": "shareAdjustment",
              "type": "int128"
            },
            {
              "internalType": "uint128",
              "name": "zombieShareReserves",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "longExposure",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "longsOutstanding",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "shortsOutstanding",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "longAverageMaturityTime",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "shortAverageMaturityTime",
              "type": "uint128"
            },
            {
              "internalType": "bool",
              "name": "isInitialized",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isPaused",
              "type": "bool"
            }
          ],
          "internalType": "struct IHyperdrive.MarketState",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPoolConfig",
      "outputs": [
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
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPoolInfo",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "shareReserves",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "shareAdjustment",
              "type": "int256"
            },
            {
              "internalType": "uint256",
              "name": "zombieShareReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "bondReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lpTotalSupply",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "longsOutstanding",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "longAverageMaturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "shortsOutstanding",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "shortAverageMaturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "withdrawalSharesReadyToWithdraw",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "withdrawalSharesProceeds",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lpSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "longExposure",
              "type": "uint256"
            }
          ],
          "internalType": "struct IHyperdrive.PoolInfo",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getUncollectedGovernanceFees",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getWithdrawPool",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint128",
              "name": "readyToWithdraw",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "proceeds",
              "type": "uint128"
            }
          ],
          "internalType": "struct IHyperdrive.WithdrawPool",
          "name": "",
          "type": "tuple"
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
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "_slots",
          "type": "uint256[]"
        }
      ],
      "name": "load",
      "outputs": [
        {
          "internalType": "bytes32[]",
          "name": "",
          "type": "bytes32[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "nonces",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
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
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "perTokenApprovals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
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
          "name": "_shares",
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
      "name": "redeemWithdrawalShares",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "proceeds",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sharesRedeemed",
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
          "name": "_shares",
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
          "name": "baseProceeds",
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
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
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
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
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
    "balanceOf(uint256,address)": "3656eec2",
    "baseToken()": "c55dae63",
    "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
    "checkpoint(uint256)": "ed64bab2",
    "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
    "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
    "collectGovernanceFee((address,bool,bytes))": "3e691db9",
    "getCheckpoint(uint256)": "20fc4881",
    "getCheckpointExposure(uint256)": "cf210e65",
    "getMarketState()": "d8165743",
    "getPoolConfig()": "b0d96580",
    "getPoolInfo()": "60246c88",
    "getUncollectedGovernanceFees()": "c69e16ad",
    "getWithdrawPool()": "fba56008",
    "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
    "isApprovedForAll(address,address)": "e985e9c5",
    "load(uint256[])": "becee9c3",
    "name(uint256)": "00ad800c",
    "nonces(address)": "7ecebe00",
    "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
    "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070",
    "pause(bool)": "02329a29",
    "perTokenApprovals(uint256,address,address)": "21ff32a9",
    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
    "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
    "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434",
    "setApproval(uint256,address,uint256)": "9cd241af",
    "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
    "setApprovalForAll(address,bool)": "a22cb465",
    "setGovernance(address)": "ab033ea9",
    "setPauser(address,bool)": "7180c8ca",
    "symbol(uint256)": "4e41a1fb",
    "target0()": "21b57d53",
    "target1()": "eac3e799",
    "totalSupply(uint256)": "bd85b039",
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"AlreadyClosed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ApprovalFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BelowMinimumContribution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BelowMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BondMatured\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BondNotMatured\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"underlyingError\",\"type\":\"bytes4\"}],\"name\":\"CallFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"EndIndexTooLarge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FeeTooHigh\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_NegativeInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_NegativeOrZeroInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveDeployerAlreadyAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveDeployerIndexMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"HyperdriveDeployerNotAdded\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientPrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidApr\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidBaseToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointTime\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidContribution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidDeployer\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidForwarderAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidIndexes\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMaturityTime\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"}],\"name\":\"InvalidRecipient\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MaxFeeTooHigh\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MintPercentTooHigh\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativeInterest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NoAssetsToWithdraw\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NonPayableInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Paused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolAlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"QueryOutOfRange\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ShareReservesDeltaExceedsBondReservesDelta\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedAssetId\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSender\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsupportedToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ZeroLpTotalSupply\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minApr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxApr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointId\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"sharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_baseAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"traderDeposit\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharesRedeemed\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalShares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"ApprovalFailed()\":[{\"notice\":\"################## ### Hyperdrive ### ##################\"}],\"BatchInputLengthMismatch()\":[{\"notice\":\"###################### ### ERC20Forwarder ### ######################\"}],\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidForwarderAddress()\":[{\"notice\":\"############################# ### ERC20ForwarderFactory ### #############################\"}],\"InvalidRecipient(address)\":[{\"notice\":\"################### ### BondWrapper ### ###################\"}],\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}],\"QueryOutOfRange()\":[{\"notice\":\"############ ### TWAP ### ############\"}],\"ReturnData(bytes)\":[{\"notice\":\"#################### ### DataProvider ### ####################\"}],\"Unauthorized()\":[{\"notice\":\"############### ### Factory ### ###############\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"################ ### SafeCast ### ################\"}]},\"events\":{\"Initialize(address,uint256,uint256,uint256,uint256)\":{\"notice\":\"Events ///\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Events ///\"}},\"kind\":\"user\",\"methods\":{\"checkpoint(uint256)\":{\"notice\":\"Checkpoints ///\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"Admin ///\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"LPs ///\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Longs ///\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Shorts ///\"},\"target0()\":{\"notice\":\"Getters ///\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdrive.sol\":\"IHyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8\",\"dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17\",\"dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]}},\"version\":1}",
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
          "name": "AlreadyClosed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ApprovalFailed"
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
          "name": "BelowMinimumShareReserves"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "BondMatured"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "BondNotMatured"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "underlyingError",
              "type": "bytes4"
            }
          ],
          "type": "error",
          "name": "CallFailed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "EndIndexTooLarge"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ExpiredDeadline"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FeeTooHigh"
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
          "name": "FixedPointMath_NegativeInput"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FixedPointMath_NegativeOrZeroInput"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "HyperdriveDeployerAlreadyAdded"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "HyperdriveDeployerIndexMismatch"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "HyperdriveDeployerNotAdded"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InputLengthMismatch"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InsufficientLiquidity"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InsufficientPrice"
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
          "name": "InvalidContribution"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidDeployer"
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
          "name": "InvalidForwarderAddress"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidIndexes"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidInitialSharePrice"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMaturityTime"
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
          "inputs": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "InvalidRecipient"
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
          "name": "InvalidToken"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidTradeSize"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "MaxFeeTooHigh"
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
          "name": "MintPercentTooHigh"
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
          "name": "NoAssetsToWithdraw"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NonPayableInitialization"
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
          "name": "QueryOutOfRange"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "RestrictedZeroAddress"
        },
        {
          "inputs": [
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "type": "error",
          "name": "ReturnData"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ShareReservesDeltaExceedsBondReservesDelta"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "TransferFailed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Unauthorized"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnexpectedAssetId"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnexpectedSender"
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
          "inputs": [],
          "type": "error",
          "name": "ZeroLpTotalSupply"
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
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "baseToken",
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
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_checkpointId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getCheckpoint",
          "outputs": [
            {
              "internalType": "struct IHyperdrive.Checkpoint",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint128",
                  "name": "sharePrice",
                  "type": "uint128"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_checkpointTime",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getCheckpointExposure",
          "outputs": [
            {
              "internalType": "int256",
              "name": "",
              "type": "int256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getMarketState",
          "outputs": [
            {
              "internalType": "struct IHyperdrive.MarketState",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint128",
                  "name": "shareReserves",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "bondReserves",
                  "type": "uint128"
                },
                {
                  "internalType": "int128",
                  "name": "shareAdjustment",
                  "type": "int128"
                },
                {
                  "internalType": "uint128",
                  "name": "zombieShareReserves",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "longExposure",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "longsOutstanding",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "shortsOutstanding",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "longAverageMaturityTime",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "shortAverageMaturityTime",
                  "type": "uint128"
                },
                {
                  "internalType": "bool",
                  "name": "isInitialized",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "isPaused",
                  "type": "bool"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getPoolConfig",
          "outputs": [
            {
              "internalType": "struct IHyperdrive.PoolConfig",
              "name": "",
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
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getPoolInfo",
          "outputs": [
            {
              "internalType": "struct IHyperdrive.PoolInfo",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint256",
                  "name": "shareReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "int256",
                  "name": "shareAdjustment",
                  "type": "int256"
                },
                {
                  "internalType": "uint256",
                  "name": "zombieShareReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "bondReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "lpTotalSupply",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "longsOutstanding",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "longAverageMaturityTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "shortsOutstanding",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "shortAverageMaturityTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "withdrawalSharesReadyToWithdraw",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "withdrawalSharesProceeds",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "lpSharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "longExposure",
                  "type": "uint256"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getUncollectedGovernanceFees",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getWithdrawPool",
          "outputs": [
            {
              "internalType": "struct IHyperdrive.WithdrawPool",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint128",
                  "name": "readyToWithdraw",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "proceeds",
                  "type": "uint128"
                }
              ]
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
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256[]",
              "name": "_slots",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "load",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "",
              "type": "bytes32[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "nonces",
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
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "perTokenApprovals",
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
              "name": "_shares",
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
          "name": "redeemWithdrawalShares",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "proceeds",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sharesRedeemed",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_shares",
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
              "name": "baseProceeds",
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
              "name": "id",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
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
              "name": "id",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "totalSupply",
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
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "checkpoint(uint256)": {
            "notice": "Checkpoints ///"
          },
          "collectGovernanceFee((address,bool,bytes))": {
            "notice": "Admin ///"
          },
          "initialize(uint256,uint256,(address,bool,bytes))": {
            "notice": "LPs ///"
          },
          "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Longs ///"
          },
          "openShort(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Shorts ///"
          },
          "target0()": {
            "notice": "Getters ///"
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
        "contracts/src/interfaces/IHyperdrive.sol": "IHyperdrive"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4",
        "urls": [
          "bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36",
          "dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL"
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
    "id": 4676,
    "exportedSymbols": {
      "IERC20": [
        3872
      ],
      "IHyperdrive": [
        4675
      ],
      "IHyperdriveCore": [
        4833
      ],
      "IHyperdriveRead": [
        4944
      ],
      "IMultiToken": [
        5121
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:12337:28",
    "nodes": [
      {
        "id": 4187,
        "nodeType": "PragmaDirective",
        "src": "39:23:28",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 4189,
        "nodeType": "ImportDirective",
        "src": "64:38:28",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "./IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 4676,
        "sourceUnit": 3873,
        "symbolAliases": [
          {
            "foreign": {
              "id": 4188,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3872,
              "src": "73:6:28",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 4191,
        "nodeType": "ImportDirective",
        "src": "103:56:28",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveCore.sol",
        "file": "./IHyperdriveCore.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 4676,
        "sourceUnit": 4834,
        "symbolAliases": [
          {
            "foreign": {
              "id": 4190,
              "name": "IHyperdriveCore",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4833,
              "src": "112:15:28",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 4193,
        "nodeType": "ImportDirective",
        "src": "160:56:28",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveRead.sol",
        "file": "./IHyperdriveRead.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 4676,
        "sourceUnit": 4945,
        "symbolAliases": [
          {
            "foreign": {
              "id": 4192,
              "name": "IHyperdriveRead",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4944,
              "src": "169:15:28",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 4195,
        "nodeType": "ImportDirective",
        "src": "217:48:28",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IMultiToken.sol",
        "file": "./IMultiToken.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 4676,
        "sourceUnit": 5122,
        "symbolAliases": [
          {
            "foreign": {
              "id": 4194,
              "name": "IMultiToken",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 5121,
              "src": "226:11:28",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 4675,
        "nodeType": "ContractDefinition",
        "src": "267:12108:28",
        "nodes": [
          {
            "id": 4214,
            "nodeType": "EventDefinition",
            "src": "364:160:28",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 4202,
              "nodeType": "StructuredDocumentation",
              "src": "344:15:28",
              "text": "Events ///"
            },
            "eventSelector": "d93ddcd36a9d44373680f40bd3bcafe3c7e738748e10c90213e70453cff44231",
            "name": "Initialize",
            "nameLocation": "370:10:28",
            "parameters": {
              "id": 4213,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4204,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "406:8:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4214,
                  "src": "390:24:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4203,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "390:7:28",
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
                  "id": 4206,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpAmount",
                  "nameLocation": "432:8:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4214,
                  "src": "424:16:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4205,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4208,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "458:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4214,
                  "src": "450:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4207,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "450:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4210,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "486:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4214,
                  "src": "478:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4209,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "478:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4212,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "514:3:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4214,
                  "src": "506:11:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4211,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "506:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "380:143:28"
            }
          },
          {
            "id": 4226,
            "nodeType": "EventDefinition",
            "src": "530:171:28",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "d92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e50239609",
            "name": "AddLiquidity",
            "nameLocation": "536:12:28",
            "parameters": {
              "id": 4225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4216,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "574:8:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4226,
                  "src": "558:24:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4215,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "558:7:28",
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
                  "id": 4218,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpAmount",
                  "nameLocation": "600:8:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4226,
                  "src": "592:16:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4217,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "592:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4220,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "626:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4226,
                  "src": "618:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4219,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "618:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4222,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "654:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4226,
                  "src": "646:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4221,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "646:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4224,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpSharePrice",
                  "nameLocation": "682:12:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4226,
                  "src": "674:20:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4223,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "674:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "548:152:28"
            }
          },
          {
            "id": 4240,
            "nodeType": "EventDefinition",
            "src": "707:213:28",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "ae97bda5fb1ee457c0490e5804bc10c54ab31a1fd9b01e2f85a1855072150be8",
            "name": "RemoveLiquidity",
            "nameLocation": "713:15:28",
            "parameters": {
              "id": 4239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4228,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "754:8:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4240,
                  "src": "738:24:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4227,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "738:7:28",
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
                  "id": 4230,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpAmount",
                  "nameLocation": "780:8:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4240,
                  "src": "772:16:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4229,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "772:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4232,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "806:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4240,
                  "src": "798:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4231,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "798:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4234,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "834:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4240,
                  "src": "826:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4233,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "826:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4236,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "withdrawalShareAmount",
                  "nameLocation": "862:21:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4240,
                  "src": "854:29:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4235,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "854:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4238,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpSharePrice",
                  "nameLocation": "901:12:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4240,
                  "src": "893:20:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4237,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "893:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "728:191:28"
            }
          },
          {
            "id": 4250,
            "nodeType": "EventDefinition",
            "src": "926:164:28",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "7986a4c20efd1390450c45fb0b11e794754bdce25f47ab5488efc8104169f754",
            "name": "RedeemWithdrawalShares",
            "nameLocation": "932:22:28",
            "parameters": {
              "id": 4249,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4242,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "980:8:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4250,
                  "src": "964:24:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4241,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "964:7:28",
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
                  "id": 4244,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "withdrawalShareAmount",
                  "nameLocation": "1006:21:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4250,
                  "src": "998:29:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4243,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "998:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4246,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1045:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4250,
                  "src": "1037:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4245,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1037:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4248,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1073:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4250,
                  "src": "1065:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4247,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1065:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "954:135:28"
            }
          },
          {
            "id": 4264,
            "nodeType": "EventDefinition",
            "src": "1096:200:28",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda686",
            "name": "OpenLong",
            "nameLocation": "1102:8:28",
            "parameters": {
              "id": 4263,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4252,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "1136:6:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4264,
                  "src": "1120:22:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4251,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1120:7:28",
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
                  "id": 4254,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "1168:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4264,
                  "src": "1152:23:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4253,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1152:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4256,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "1193:12:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4264,
                  "src": "1185:20:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4255,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1185:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4258,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1223:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4264,
                  "src": "1215:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4257,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1215:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4260,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1251:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4264,
                  "src": "1243:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4259,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1243:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4262,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "1279:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4264,
                  "src": "1271:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4261,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1271:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1110:185:28"
            }
          },
          {
            "id": 4278,
            "nodeType": "EventDefinition",
            "src": "1302:201:28",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef95",
            "name": "OpenShort",
            "nameLocation": "1308:9:28",
            "parameters": {
              "id": 4277,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4266,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "1343:6:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4278,
                  "src": "1327:22:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4265,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1327:7:28",
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
                  "id": 4268,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "1375:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4278,
                  "src": "1359:23:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4267,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1359:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4270,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "1400:12:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4278,
                  "src": "1392:20:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4269,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1392:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4272,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1430:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4278,
                  "src": "1422:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4271,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1422:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4274,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1458:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4278,
                  "src": "1450:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4273,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1450:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4276,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "1486:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4278,
                  "src": "1478:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4275,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1478:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1317:185:28"
            }
          },
          {
            "id": 4292,
            "nodeType": "EventDefinition",
            "src": "1509:201:28",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "4c68e40241b8ae371bc7dae7035400158b60d0b7d69b35477b693759bb2c0ca0",
            "name": "CloseLong",
            "nameLocation": "1515:9:28",
            "parameters": {
              "id": 4291,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4280,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "1550:6:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4292,
                  "src": "1534:22:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4279,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1534:7:28",
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
                  "id": 4282,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "1582:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4292,
                  "src": "1566:23:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4281,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1566:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4284,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "1607:12:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4292,
                  "src": "1599:20:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4283,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1599:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4286,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1637:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4292,
                  "src": "1629:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4285,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1629:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4288,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1665:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4292,
                  "src": "1657:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4287,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1657:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4290,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "1693:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4292,
                  "src": "1685:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4289,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1685:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1524:185:28"
            }
          },
          {
            "id": 4306,
            "nodeType": "EventDefinition",
            "src": "1716:202:28",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "32f37298489a8da0fde394937191ad6035015dd8a04bc97c304d59858e3bfd67",
            "name": "CloseShort",
            "nameLocation": "1722:10:28",
            "parameters": {
              "id": 4305,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4294,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "1758:6:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4306,
                  "src": "1742:22:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4293,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1742:7:28",
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
                  "id": 4296,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "1790:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4306,
                  "src": "1774:23:28",
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
                    "src": "1774:7:28",
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
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "1815:12:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4306,
                  "src": "1807:20:28",
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
                    "src": "1807:7:28",
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
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1845:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4306,
                  "src": "1837:18:28",
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
                    "src": "1837:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4302,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1873:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4306,
                  "src": "1865:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4301,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1865:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4304,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "1901:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4306,
                  "src": "1893:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4303,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1893:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1732:185:28"
            }
          },
          {
            "id": 4318,
            "nodeType": "EventDefinition",
            "src": "1924:188:28",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd1551",
            "name": "CreateCheckpoint",
            "nameLocation": "1930:16:28",
            "parameters": {
              "id": 4317,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4308,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "checkpointTime",
                  "nameLocation": "1972:14:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4318,
                  "src": "1956:30:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4307,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1956:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4310,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "2004:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4318,
                  "src": "1996:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4309,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1996:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4312,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturedShorts",
                  "nameLocation": "2032:13:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4318,
                  "src": "2024:21:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4311,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2024:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4314,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturedLongs",
                  "nameLocation": "2063:12:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4318,
                  "src": "2055:20:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4313,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2055:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4316,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpSharePrice",
                  "nameLocation": "2093:12:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4318,
                  "src": "2085:20:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4315,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2085:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1946:165:28"
            }
          },
          {
            "id": 4326,
            "nodeType": "EventDefinition",
            "src": "2118:122:28",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "a766eca44ec2dc18727bd04ada80599917cad7a27cf6a765026b2f1d0ce5c4ee",
            "name": "CollectGovernanceFee",
            "nameLocation": "2124:20:28",
            "parameters": {
              "id": 4325,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4320,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "collector",
                  "nameLocation": "2170:9:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4326,
                  "src": "2154:25:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4319,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2154:7:28",
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
                  "id": 4322,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseFees",
                  "nameLocation": "2197:8:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4326,
                  "src": "2189:16:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4321,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2189:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4324,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "2223:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4326,
                  "src": "2215:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4323,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2215:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2144:95:28"
            }
          },
          {
            "id": 4360,
            "nodeType": "StructDefinition",
            "src": "2267:1220:28",
            "nodes": [],
            "canonicalName": "IHyperdrive.MarketState",
            "members": [
              {
                "constant": false,
                "id": 4329,
                "mutability": "mutable",
                "name": "shareReserves",
                "nameLocation": "2348:13:28",
                "nodeType": "VariableDeclaration",
                "scope": 4360,
                "src": "2340:21:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 4328,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2340:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4332,
                "mutability": "mutable",
                "name": "bondReserves",
                "nameLocation": "2422:12:28",
                "nodeType": "VariableDeclaration",
                "scope": 4360,
                "src": "2414:20:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 4331,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2414:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4335,
                "mutability": "mutable",
                "name": "shareAdjustment",
                "nameLocation": "2588:15:28",
                "nodeType": "VariableDeclaration",
                "scope": 4360,
                "src": "2581:22:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int128",
                  "typeString": "int128"
                },
                "typeName": {
                  "id": 4334,
                  "name": "int128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2581:6:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int128",
                    "typeString": "int128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4338,
                "mutability": "mutable",
                "name": "zombieShareReserves",
                "nameLocation": "2744:19:28",
                "nodeType": "VariableDeclaration",
                "scope": 4360,
                "src": "2736:27:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 4337,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2736:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4341,
                "mutability": "mutable",
                "name": "longExposure",
                "nameLocation": "2848:12:28",
                "nodeType": "VariableDeclaration",
                "scope": 4360,
                "src": "2840:20:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 4340,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2840:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4344,
                "mutability": "mutable",
                "name": "longsOutstanding",
                "nameLocation": "2936:16:28",
                "nodeType": "VariableDeclaration",
                "scope": 4360,
                "src": "2928:24:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 4343,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "2928:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4347,
                "mutability": "mutable",
                "name": "shortsOutstanding",
                "nameLocation": "3029:17:28",
                "nodeType": "VariableDeclaration",
                "scope": 4360,
                "src": "3021:25:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 4346,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "3021:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4350,
                "mutability": "mutable",
                "name": "longAverageMaturityTime",
                "nameLocation": "3138:23:28",
                "nodeType": "VariableDeclaration",
                "scope": 4360,
                "src": "3130:31:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 4349,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "3130:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4353,
                "mutability": "mutable",
                "name": "shortAverageMaturityTime",
                "nameLocation": "3254:24:28",
                "nodeType": "VariableDeclaration",
                "scope": 4360,
                "src": "3246:32:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 4352,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "3246:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4356,
                "mutability": "mutable",
                "name": "isInitialized",
                "nameLocation": "3374:13:28",
                "nodeType": "VariableDeclaration",
                "scope": 4360,
                "src": "3369:18:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 4355,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "3369:4:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4359,
                "mutability": "mutable",
                "name": "isPaused",
                "nameLocation": "3472:8:28",
                "nodeType": "VariableDeclaration",
                "scope": 4360,
                "src": "3467:13:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 4358,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "3467:4:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "MarketState",
            "nameLocation": "2274:11:28",
            "scope": 4675,
            "visibility": "public"
          },
          {
            "id": 4364,
            "nodeType": "StructDefinition",
            "src": "3493:311:28",
            "nodes": [],
            "canonicalName": "IHyperdrive.Checkpoint",
            "members": [
              {
                "constant": false,
                "id": 4363,
                "mutability": "mutable",
                "name": "sharePrice",
                "nameLocation": "3787:10:28",
                "nodeType": "VariableDeclaration",
                "scope": 4364,
                "src": "3779:18:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 4362,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "3779:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Checkpoint",
            "nameLocation": "3500:10:28",
            "scope": 4675,
            "visibility": "public"
          },
          {
            "id": 4371,
            "nodeType": "StructDefinition",
            "src": "3810:230:28",
            "nodes": [],
            "canonicalName": "IHyperdrive.WithdrawPool",
            "members": [
              {
                "constant": false,
                "id": 4367,
                "mutability": "mutable",
                "name": "readyToWithdraw",
                "nameLocation": "3928:15:28",
                "nodeType": "VariableDeclaration",
                "scope": 4371,
                "src": "3920:23:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 4366,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "3920:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4370,
                "mutability": "mutable",
                "name": "proceeds",
                "nameLocation": "4025:8:28",
                "nodeType": "VariableDeclaration",
                "scope": 4371,
                "src": "4017:16:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint128",
                  "typeString": "uint128"
                },
                "typeName": {
                  "id": 4369,
                  "name": "uint128",
                  "nodeType": "ElementaryTypeName",
                  "src": "4017:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "WithdrawPool",
            "nameLocation": "3817:12:28",
            "scope": 4675,
            "visibility": "public"
          },
          {
            "id": 4384,
            "nodeType": "StructDefinition",
            "src": "4046:410:28",
            "nodes": [],
            "canonicalName": "IHyperdrive.Fees",
            "members": [
              {
                "constant": false,
                "id": 4374,
                "mutability": "mutable",
                "name": "curve",
                "nameLocation": "4145:5:28",
                "nodeType": "VariableDeclaration",
                "scope": 4384,
                "src": "4137:13:28",
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
                  "src": "4137:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4377,
                "mutability": "mutable",
                "name": "flat",
                "nameLocation": "4236:4:28",
                "nodeType": "VariableDeclaration",
                "scope": 4384,
                "src": "4228:12:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4376,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "4228:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4380,
                "mutability": "mutable",
                "name": "governanceLP",
                "nameLocation": "4326:12:28",
                "nodeType": "VariableDeclaration",
                "scope": 4384,
                "src": "4318:20:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4379,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "4318:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4383,
                "mutability": "mutable",
                "name": "governanceZombie",
                "nameLocation": "4433:16:28",
                "nodeType": "VariableDeclaration",
                "scope": 4384,
                "src": "4425:24:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4382,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "4425:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Fees",
            "nameLocation": "4053:4:28",
            "scope": 4675,
            "visibility": "public"
          },
          {
            "id": 4420,
            "nodeType": "StructDefinition",
            "src": "4462:1168:28",
            "nodes": [],
            "canonicalName": "IHyperdrive.PoolDeployConfig",
            "members": [
              {
                "constant": false,
                "id": 4388,
                "mutability": "mutable",
                "name": "baseToken",
                "nameLocation": "4551:9:28",
                "nodeType": "VariableDeclaration",
                "scope": 4420,
                "src": "4544:16:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IERC20_$3872",
                  "typeString": "contract IERC20"
                },
                "typeName": {
                  "id": 4387,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 4386,
                    "name": "IERC20",
                    "nameLocations": [
                      "4544:6:28"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 3872,
                    "src": "4544:6:28"
                  },
                  "referencedDeclaration": 3872,
                  "src": "4544:6:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$3872",
                    "typeString": "contract IERC20"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4391,
                "mutability": "mutable",
                "name": "linkerFactory",
                "nameLocation": "4648:13:28",
                "nodeType": "VariableDeclaration",
                "scope": 4420,
                "src": "4640:21:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 4390,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "4640:7:28",
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
                "id": 4394,
                "mutability": "mutable",
                "name": "linkerCodeHash",
                "nameLocation": "4839:14:28",
                "nodeType": "VariableDeclaration",
                "scope": 4420,
                "src": "4831:22:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 4393,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "4831:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4397,
                "mutability": "mutable",
                "name": "minimumShareReserves",
                "nameLocation": "4916:20:28",
                "nodeType": "VariableDeclaration",
                "scope": 4420,
                "src": "4908:28:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4396,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "4908:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4400,
                "mutability": "mutable",
                "name": "minimumTransactionAmount",
                "nameLocation": "5063:24:28",
                "nodeType": "VariableDeclaration",
                "scope": 4420,
                "src": "5055:32:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4399,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "5055:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4403,
                "mutability": "mutable",
                "name": "positionDuration",
                "nameLocation": "5168:16:28",
                "nodeType": "VariableDeclaration",
                "scope": 4420,
                "src": "5160:24:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4402,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "5160:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4406,
                "mutability": "mutable",
                "name": "checkpointDuration",
                "nameLocation": "5249:18:28",
                "nodeType": "VariableDeclaration",
                "scope": 4420,
                "src": "5241:26:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4405,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "5241:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4409,
                "mutability": "mutable",
                "name": "timeStretch",
                "nameLocation": "5361:11:28",
                "nodeType": "VariableDeclaration",
                "scope": 4420,
                "src": "5353:19:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4408,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "5353:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4412,
                "mutability": "mutable",
                "name": "governance",
                "nameLocation": "5447:10:28",
                "nodeType": "VariableDeclaration",
                "scope": 4420,
                "src": "5439:18:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 4411,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "5439:7:28",
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
                "id": 4415,
                "mutability": "mutable",
                "name": "feeCollector",
                "nameLocation": "5535:12:28",
                "nodeType": "VariableDeclaration",
                "scope": 4420,
                "src": "5527:20:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 4414,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "5527:7:28",
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
                "id": 4419,
                "mutability": "mutable",
                "name": "fees",
                "nameLocation": "5619:4:28",
                "nodeType": "VariableDeclaration",
                "scope": 4420,
                "src": "5602:21:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Fees_$4384_storage_ptr",
                  "typeString": "struct IHyperdrive.Fees"
                },
                "typeName": {
                  "id": 4418,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 4417,
                    "name": "IHyperdrive.Fees",
                    "nameLocations": [
                      "5602:11:28",
                      "5614:4:28"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 4384,
                    "src": "5602:16:28"
                  },
                  "referencedDeclaration": 4384,
                  "src": "5602:16:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Fees_$4384_storage_ptr",
                    "typeString": "struct IHyperdrive.Fees"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "PoolDeployConfig",
            "nameLocation": "4469:16:28",
            "scope": 4675,
            "visibility": "public"
          },
          {
            "id": 4459,
            "nodeType": "StructDefinition",
            "src": "5636:1239:28",
            "nodes": [],
            "canonicalName": "IHyperdrive.PoolConfig",
            "members": [
              {
                "constant": false,
                "id": 4424,
                "mutability": "mutable",
                "name": "baseToken",
                "nameLocation": "5719:9:28",
                "nodeType": "VariableDeclaration",
                "scope": 4459,
                "src": "5712:16:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IERC20_$3872",
                  "typeString": "contract IERC20"
                },
                "typeName": {
                  "id": 4423,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 4422,
                    "name": "IERC20",
                    "nameLocations": [
                      "5712:6:28"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 3872,
                    "src": "5712:6:28"
                  },
                  "referencedDeclaration": 3872,
                  "src": "5712:6:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$3872",
                    "typeString": "contract IERC20"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4427,
                "mutability": "mutable",
                "name": "linkerFactory",
                "nameLocation": "5816:13:28",
                "nodeType": "VariableDeclaration",
                "scope": 4459,
                "src": "5808:21:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 4426,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "5808:7:28",
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
                "id": 4430,
                "mutability": "mutable",
                "name": "linkerCodeHash",
                "nameLocation": "6007:14:28",
                "nodeType": "VariableDeclaration",
                "scope": 4459,
                "src": "5999:22:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 4429,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "5999:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4433,
                "mutability": "mutable",
                "name": "initialSharePrice",
                "nameLocation": "6081:17:28",
                "nodeType": "VariableDeclaration",
                "scope": 4459,
                "src": "6073:25:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4432,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "6073:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4436,
                "mutability": "mutable",
                "name": "minimumShareReserves",
                "nameLocation": "6161:20:28",
                "nodeType": "VariableDeclaration",
                "scope": 4459,
                "src": "6153:28:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4435,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "6153:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4439,
                "mutability": "mutable",
                "name": "minimumTransactionAmount",
                "nameLocation": "6308:24:28",
                "nodeType": "VariableDeclaration",
                "scope": 4459,
                "src": "6300:32:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4438,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "6300:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4442,
                "mutability": "mutable",
                "name": "positionDuration",
                "nameLocation": "6413:16:28",
                "nodeType": "VariableDeclaration",
                "scope": 4459,
                "src": "6405:24:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4441,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "6405:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4445,
                "mutability": "mutable",
                "name": "checkpointDuration",
                "nameLocation": "6494:18:28",
                "nodeType": "VariableDeclaration",
                "scope": 4459,
                "src": "6486:26:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4444,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "6486:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4448,
                "mutability": "mutable",
                "name": "timeStretch",
                "nameLocation": "6606:11:28",
                "nodeType": "VariableDeclaration",
                "scope": 4459,
                "src": "6598:19:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4447,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "6598:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4451,
                "mutability": "mutable",
                "name": "governance",
                "nameLocation": "6692:10:28",
                "nodeType": "VariableDeclaration",
                "scope": 4459,
                "src": "6684:18:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 4450,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "6684:7:28",
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
                "id": 4454,
                "mutability": "mutable",
                "name": "feeCollector",
                "nameLocation": "6780:12:28",
                "nodeType": "VariableDeclaration",
                "scope": 4459,
                "src": "6772:20:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 4453,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "6772:7:28",
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
                "id": 4458,
                "mutability": "mutable",
                "name": "fees",
                "nameLocation": "6864:4:28",
                "nodeType": "VariableDeclaration",
                "scope": 4459,
                "src": "6847:21:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Fees_$4384_storage_ptr",
                  "typeString": "struct IHyperdrive.Fees"
                },
                "typeName": {
                  "id": 4457,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 4456,
                    "name": "IHyperdrive.Fees",
                    "nameLocations": [
                      "6847:11:28",
                      "6859:4:28"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 4384,
                    "src": "6847:16:28"
                  },
                  "referencedDeclaration": 4384,
                  "src": "6847:16:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Fees_$4384_storage_ptr",
                    "typeString": "struct IHyperdrive.Fees"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "PoolConfig",
            "nameLocation": "5643:10:28",
            "scope": 4675,
            "visibility": "public"
          },
          {
            "id": 4502,
            "nodeType": "StructDefinition",
            "src": "6881:1688:28",
            "nodes": [],
            "canonicalName": "IHyperdrive.PoolInfo",
            "members": [
              {
                "constant": false,
                "id": 4462,
                "mutability": "mutable",
                "name": "shareReserves",
                "nameLocation": "6973:13:28",
                "nodeType": "VariableDeclaration",
                "scope": 4502,
                "src": "6965:21:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4461,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "6965:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4465,
                "mutability": "mutable",
                "name": "shareAdjustment",
                "nameLocation": "7228:15:28",
                "nodeType": "VariableDeclaration",
                "scope": 4502,
                "src": "7221:22:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                },
                "typeName": {
                  "id": 4464,
                  "name": "int256",
                  "nodeType": "ElementaryTypeName",
                  "src": "7221:6:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4468,
                "mutability": "mutable",
                "name": "zombieShareReserves",
                "nameLocation": "7383:19:28",
                "nodeType": "VariableDeclaration",
                "scope": 4502,
                "src": "7375:27:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4467,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "7375:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4471,
                "mutability": "mutable",
                "name": "bondReserves",
                "nameLocation": "7477:12:28",
                "nodeType": "VariableDeclaration",
                "scope": 4502,
                "src": "7469:20:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4470,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "7469:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4474,
                "mutability": "mutable",
                "name": "lpTotalSupply",
                "nameLocation": "7555:13:28",
                "nodeType": "VariableDeclaration",
                "scope": 4502,
                "src": "7547:21:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4473,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "7547:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4477,
                "mutability": "mutable",
                "name": "sharePrice",
                "nameLocation": "7628:10:28",
                "nodeType": "VariableDeclaration",
                "scope": 4502,
                "src": "7620:18:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4476,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "7620:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4480,
                "mutability": "mutable",
                "name": "longsOutstanding",
                "nameLocation": "7734:16:28",
                "nodeType": "VariableDeclaration",
                "scope": 4502,
                "src": "7726:24:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4479,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "7726:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4483,
                "mutability": "mutable",
                "name": "longAverageMaturityTime",
                "nameLocation": "7837:23:28",
                "nodeType": "VariableDeclaration",
                "scope": 4502,
                "src": "7829:31:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4482,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "7829:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4486,
                "mutability": "mutable",
                "name": "shortsOutstanding",
                "nameLocation": "7957:17:28",
                "nodeType": "VariableDeclaration",
                "scope": 4502,
                "src": "7949:25:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4485,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "7949:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4489,
                "mutability": "mutable",
                "name": "shortAverageMaturityTime",
                "nameLocation": "8062:24:28",
                "nodeType": "VariableDeclaration",
                "scope": 4502,
                "src": "8054:32:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4488,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "8054:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4492,
                "mutability": "mutable",
                "name": "withdrawalSharesReadyToWithdraw",
                "nameLocation": "8184:31:28",
                "nodeType": "VariableDeclaration",
                "scope": 4502,
                "src": "8176:39:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4491,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "8176:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4495,
                "mutability": "mutable",
                "name": "withdrawalSharesProceeds",
                "nameLocation": "8297:24:28",
                "nodeType": "VariableDeclaration",
                "scope": 4502,
                "src": "8289:32:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4494,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "8289:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4498,
                "mutability": "mutable",
                "name": "lpSharePrice",
                "nameLocation": "8449:12:28",
                "nodeType": "VariableDeclaration",
                "scope": 4502,
                "src": "8441:20:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4497,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "8441:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4501,
                "mutability": "mutable",
                "name": "longExposure",
                "nameLocation": "8550:12:28",
                "nodeType": "VariableDeclaration",
                "scope": 4502,
                "src": "8542:20:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 4500,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "8542:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "PoolInfo",
            "nameLocation": "6888:8:28",
            "scope": 4675,
            "visibility": "public"
          },
          {
            "id": 4512,
            "nodeType": "StructDefinition",
            "src": "8575:458:28",
            "nodes": [],
            "canonicalName": "IHyperdrive.Options",
            "members": [
              {
                "constant": false,
                "id": 4505,
                "mutability": "mutable",
                "name": "destination",
                "nameLocation": "8689:11:28",
                "nodeType": "VariableDeclaration",
                "scope": 4512,
                "src": "8681:19:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 4504,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "8681:7:28",
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
                "id": 4508,
                "mutability": "mutable",
                "name": "asBase",
                "nameLocation": "8873:6:28",
                "nodeType": "VariableDeclaration",
                "scope": 4512,
                "src": "8868:11:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 4507,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "8868:4:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 4511,
                "mutability": "mutable",
                "name": "extraData",
                "nameLocation": "9017:9:28",
                "nodeType": "VariableDeclaration",
                "scope": 4512,
                "src": "9011:15:28",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 4510,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "9011:5:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Options",
            "nameLocation": "8582:7:28",
            "scope": 4675,
            "visibility": "public"
          },
          {
            "id": 4515,
            "nodeType": "ErrorDefinition",
            "src": "9140:23:28",
            "nodes": [],
            "documentation": {
              "id": 4513,
              "nodeType": "StructuredDocumentation",
              "src": "9059:76:28",
              "text": "##################\n ### Hyperdrive ###\n ##################"
            },
            "errorSelector": "8164f842",
            "name": "ApprovalFailed",
            "nameLocation": "9146:14:28",
            "parameters": {
              "id": 4514,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9160:2:28"
            }
          },
          {
            "id": 4517,
            "nodeType": "ErrorDefinition",
            "src": "9168:33:28",
            "nodes": [],
            "errorSelector": "abed41c4",
            "name": "BelowMinimumContribution",
            "nameLocation": "9174:24:28",
            "parameters": {
              "id": 4516,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9198:2:28"
            }
          },
          {
            "id": 4519,
            "nodeType": "ErrorDefinition",
            "src": "9206:34:28",
            "nodes": [],
            "errorSelector": "6101d7a4",
            "name": "BelowMinimumShareReserves",
            "nameLocation": "9212:25:28",
            "parameters": {
              "id": 4518,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9237:2:28"
            }
          },
          {
            "id": 4521,
            "nodeType": "ErrorDefinition",
            "src": "9245:19:28",
            "nodes": [],
            "errorSelector": "76c22a22",
            "name": "InvalidApr",
            "nameLocation": "9251:10:28",
            "parameters": {
              "id": 4520,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9261:2:28"
            }
          },
          {
            "id": 4523,
            "nodeType": "ErrorDefinition",
            "src": "9269:25:28",
            "nodes": [],
            "errorSelector": "0e442a4a",
            "name": "InvalidBaseToken",
            "nameLocation": "9275:16:28",
            "parameters": {
              "id": 4522,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9291:2:28"
            }
          },
          {
            "id": 4525,
            "nodeType": "ErrorDefinition",
            "src": "9299:30:28",
            "nodes": [],
            "errorSelector": "ecd29e81",
            "name": "InvalidCheckpointTime",
            "nameLocation": "9305:21:28",
            "parameters": {
              "id": 4524,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9326:2:28"
            }
          },
          {
            "id": 4527,
            "nodeType": "ErrorDefinition",
            "src": "9334:34:28",
            "nodes": [],
            "errorSelector": "5428734d",
            "name": "InvalidCheckpointDuration",
            "nameLocation": "9340:25:28",
            "parameters": {
              "id": 4526,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9365:2:28"
            }
          },
          {
            "id": 4529,
            "nodeType": "ErrorDefinition",
            "src": "9373:33:28",
            "nodes": [],
            "errorSelector": "55f2a42f",
            "name": "InvalidInitialSharePrice",
            "nameLocation": "9379:24:28",
            "parameters": {
              "id": 4528,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9403:2:28"
            }
          },
          {
            "id": 4531,
            "nodeType": "ErrorDefinition",
            "src": "9411:28:28",
            "nodes": [],
            "errorSelector": "987dadd3",
            "name": "InvalidMaturityTime",
            "nameLocation": "9417:19:28",
            "parameters": {
              "id": 4530,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9436:2:28"
            }
          },
          {
            "id": 4533,
            "nodeType": "ErrorDefinition",
            "src": "9444:36:28",
            "nodes": [],
            "errorSelector": "49db44f5",
            "name": "InvalidMinimumShareReserves",
            "nameLocation": "9450:27:28",
            "parameters": {
              "id": 4532,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9477:2:28"
            }
          },
          {
            "id": 4535,
            "nodeType": "ErrorDefinition",
            "src": "9485:32:28",
            "nodes": [],
            "errorSelector": "4a7fff9e",
            "name": "InvalidPositionDuration",
            "nameLocation": "9491:23:28",
            "parameters": {
              "id": 4534,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9514:2:28"
            }
          },
          {
            "id": 4537,
            "nodeType": "ErrorDefinition",
            "src": "9522:29:28",
            "nodes": [],
            "errorSelector": "b0bfcdbe",
            "name": "InvalidShareReserves",
            "nameLocation": "9528:20:28",
            "parameters": {
              "id": 4536,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9548:2:28"
            }
          },
          {
            "id": 4539,
            "nodeType": "ErrorDefinition",
            "src": "9556:26:28",
            "nodes": [],
            "errorSelector": "45ee5986",
            "name": "InvalidFeeAmounts",
            "nameLocation": "9562:17:28",
            "parameters": {
              "id": 4538,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9579:2:28"
            }
          },
          {
            "id": 4541,
            "nodeType": "ErrorDefinition",
            "src": "9587:30:28",
            "nodes": [],
            "errorSelector": "2b44eccc",
            "name": "InvalidFeeDestination",
            "nameLocation": "9593:21:28",
            "parameters": {
              "id": 4540,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9614:2:28"
            }
          },
          {
            "id": 4543,
            "nodeType": "ErrorDefinition",
            "src": "9622:30:28",
            "nodes": [],
            "errorSelector": "bb55fd27",
            "name": "InsufficientLiquidity",
            "nameLocation": "9628:21:28",
            "parameters": {
              "id": 4542,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9649:2:28"
            }
          },
          {
            "id": 4545,
            "nodeType": "ErrorDefinition",
            "src": "9657:25:28",
            "nodes": [],
            "errorSelector": "512095c7",
            "name": "NegativeInterest",
            "nameLocation": "9663:16:28",
            "parameters": {
              "id": 4544,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9679:2:28"
            }
          },
          {
            "id": 4547,
            "nodeType": "ErrorDefinition",
            "src": "9687:29:28",
            "nodes": [],
            "errorSelector": "aeeb825d",
            "name": "NegativePresentValue",
            "nameLocation": "9693:20:28",
            "parameters": {
              "id": 4546,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9713:2:28"
            }
          },
          {
            "id": 4549,
            "nodeType": "ErrorDefinition",
            "src": "9721:27:28",
            "nodes": [],
            "errorSelector": "bb464a5e",
            "name": "NoAssetsToWithdraw",
            "nameLocation": "9727:18:28",
            "parameters": {
              "id": 4548,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9745:2:28"
            }
          },
          {
            "id": 4551,
            "nodeType": "ErrorDefinition",
            "src": "9753:19:28",
            "nodes": [],
            "errorSelector": "1574f9f3",
            "name": "NotPayable",
            "nameLocation": "9759:10:28",
            "parameters": {
              "id": 4550,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9769:2:28"
            }
          },
          {
            "id": 4553,
            "nodeType": "ErrorDefinition",
            "src": "9777:20:28",
            "nodes": [],
            "errorSelector": "c9726517",
            "name": "OutputLimit",
            "nameLocation": "9783:11:28",
            "parameters": {
              "id": 4552,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9794:2:28"
            }
          },
          {
            "id": 4555,
            "nodeType": "ErrorDefinition",
            "src": "9802:15:28",
            "nodes": [],
            "errorSelector": "9e87fac8",
            "name": "Paused",
            "nameLocation": "9808:6:28",
            "parameters": {
              "id": 4554,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9814:2:28"
            }
          },
          {
            "id": 4557,
            "nodeType": "ErrorDefinition",
            "src": "9822:31:28",
            "nodes": [],
            "errorSelector": "7983c051",
            "name": "PoolAlreadyInitialized",
            "nameLocation": "9828:22:28",
            "parameters": {
              "id": 4556,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9850:2:28"
            }
          },
          {
            "id": 4559,
            "nodeType": "ErrorDefinition",
            "src": "9858:51:28",
            "nodes": [],
            "errorSelector": "97c01bef",
            "name": "ShareReservesDeltaExceedsBondReservesDelta",
            "nameLocation": "9864:42:28",
            "parameters": {
              "id": 4558,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9906:2:28"
            }
          },
          {
            "id": 4561,
            "nodeType": "ErrorDefinition",
            "src": "9914:23:28",
            "nodes": [],
            "errorSelector": "90b8ec18",
            "name": "TransferFailed",
            "nameLocation": "9920:14:28",
            "parameters": {
              "id": 4560,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9934:2:28"
            }
          },
          {
            "id": 4563,
            "nodeType": "ErrorDefinition",
            "src": "9942:26:28",
            "nodes": [],
            "errorSelector": "e9bf5433",
            "name": "UnexpectedAssetId",
            "nameLocation": "9948:17:28",
            "parameters": {
              "id": 4562,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9965:2:28"
            }
          },
          {
            "id": 4565,
            "nodeType": "ErrorDefinition",
            "src": "9973:25:28",
            "nodes": [],
            "errorSelector": "f2fb3812",
            "name": "UnexpectedSender",
            "nameLocation": "9979:16:28",
            "parameters": {
              "id": 4564,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9995:2:28"
            }
          },
          {
            "id": 4567,
            "nodeType": "ErrorDefinition",
            "src": "10003:25:28",
            "nodes": [],
            "errorSelector": "6a172882",
            "name": "UnsupportedToken",
            "nameLocation": "10009:16:28",
            "parameters": {
              "id": 4566,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10025:2:28"
            }
          },
          {
            "id": 4569,
            "nodeType": "ErrorDefinition",
            "src": "10033:26:28",
            "nodes": [],
            "errorSelector": "42af972b",
            "name": "MinimumSharePrice",
            "nameLocation": "10039:17:28",
            "parameters": {
              "id": 4568,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10056:2:28"
            }
          },
          {
            "id": 4571,
            "nodeType": "ErrorDefinition",
            "src": "10064:33:28",
            "nodes": [],
            "errorSelector": "423bbb46",
            "name": "MinimumTransactionAmount",
            "nameLocation": "10070:24:28",
            "parameters": {
              "id": 4570,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10094:2:28"
            }
          },
          {
            "id": 4573,
            "nodeType": "ErrorDefinition",
            "src": "10102:26:28",
            "nodes": [],
            "errorSelector": "252c3a3e",
            "name": "ZeroLpTotalSupply",
            "nameLocation": "10108:17:28",
            "parameters": {
              "id": 4572,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10125:2:28"
            }
          },
          {
            "id": 4575,
            "nodeType": "ErrorDefinition",
            "src": "10133:23:28",
            "nodes": [],
            "errorSelector": "764e6b56",
            "name": "InvalidIndexes",
            "nameLocation": "10139:14:28",
            "parameters": {
              "id": 4574,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10153:2:28"
            }
          },
          {
            "id": 4577,
            "nodeType": "ErrorDefinition",
            "src": "10161:25:28",
            "nodes": [],
            "errorSelector": "e0f7becb",
            "name": "EndIndexTooLarge",
            "nameLocation": "10167:16:28",
            "parameters": {
              "id": 4576,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10183:2:28"
            }
          },
          {
            "id": 4579,
            "nodeType": "ErrorDefinition",
            "src": "10191:24:28",
            "nodes": [],
            "errorSelector": "043c669f",
            "name": "InvalidDeployer",
            "nameLocation": "10197:15:28",
            "parameters": {
              "id": 4578,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10212:2:28"
            }
          },
          {
            "id": 4582,
            "nodeType": "ErrorDefinition",
            "src": "10284:24:28",
            "nodes": [],
            "documentation": {
              "id": 4580,
              "nodeType": "StructuredDocumentation",
              "src": "10221:58:28",
              "text": "############\n ### TWAP ###\n ############"
            },
            "errorSelector": "a89817b0",
            "name": "QueryOutOfRange",
            "nameLocation": "10290:15:28",
            "parameters": {
              "id": 4581,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10305:2:28"
            }
          },
          {
            "id": 4587,
            "nodeType": "ErrorDefinition",
            "src": "10401:29:28",
            "nodes": [],
            "documentation": {
              "id": 4583,
              "nodeType": "StructuredDocumentation",
              "src": "10314:82:28",
              "text": "####################\n ### DataProvider ###\n ####################"
            },
            "errorSelector": "dcc81126",
            "name": "ReturnData",
            "nameLocation": "10407:10:28",
            "parameters": {
              "id": 4586,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4585,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "10424:4:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4587,
                  "src": "10418:10:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 4584,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "10418:5:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10417:12:28"
            }
          },
          {
            "id": 4591,
            "nodeType": "ErrorDefinition",
            "src": "10435:41:28",
            "nodes": [],
            "errorSelector": "efa64d4b",
            "name": "CallFailed",
            "nameLocation": "10441:10:28",
            "parameters": {
              "id": 4590,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4589,
                  "mutability": "mutable",
                  "name": "underlyingError",
                  "nameLocation": "10459:15:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4591,
                  "src": "10452:22:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 4588,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "10452:6:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10451:24:28"
            }
          },
          {
            "id": 4593,
            "nodeType": "ErrorDefinition",
            "src": "10481:26:28",
            "nodes": [],
            "errorSelector": "8bb0a34b",
            "name": "UnexpectedSuccess",
            "nameLocation": "10487:17:28",
            "parameters": {
              "id": 4592,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10504:2:28"
            }
          },
          {
            "id": 4596,
            "nodeType": "ErrorDefinition",
            "src": "10585:21:28",
            "nodes": [],
            "documentation": {
              "id": 4594,
              "nodeType": "StructuredDocumentation",
              "src": "10513:67:28",
              "text": "###############\n ### Factory ###\n ###############"
            },
            "errorSelector": "82b42900",
            "name": "Unauthorized",
            "nameLocation": "10591:12:28",
            "parameters": {
              "id": 4595,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10603:2:28"
            }
          },
          {
            "id": 4598,
            "nodeType": "ErrorDefinition",
            "src": "10611:28:28",
            "nodes": [],
            "errorSelector": "652122d9",
            "name": "InvalidContribution",
            "nameLocation": "10617:19:28",
            "parameters": {
              "id": 4597,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10636:2:28"
            }
          },
          {
            "id": 4600,
            "nodeType": "ErrorDefinition",
            "src": "10644:21:28",
            "nodes": [],
            "errorSelector": "c1ab6dc1",
            "name": "InvalidToken",
            "nameLocation": "10650:12:28",
            "parameters": {
              "id": 4599,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10662:2:28"
            }
          },
          {
            "id": 4602,
            "nodeType": "ErrorDefinition",
            "src": "10670:22:28",
            "nodes": [],
            "errorSelector": "a3932d2d",
            "name": "MaxFeeTooHigh",
            "nameLocation": "10676:13:28",
            "parameters": {
              "id": 4601,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10689:2:28"
            }
          },
          {
            "id": 4604,
            "nodeType": "ErrorDefinition",
            "src": "10697:19:28",
            "nodes": [],
            "errorSelector": "cd4e6167",
            "name": "FeeTooHigh",
            "nameLocation": "10703:10:28",
            "parameters": {
              "id": 4603,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10713:2:28"
            }
          },
          {
            "id": 4606,
            "nodeType": "ErrorDefinition",
            "src": "10721:33:28",
            "nodes": [],
            "errorSelector": "8fbc3bd9",
            "name": "NonPayableInitialization",
            "nameLocation": "10727:24:28",
            "parameters": {
              "id": 4605,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10751:2:28"
            }
          },
          {
            "id": 4608,
            "nodeType": "ErrorDefinition",
            "src": "10759:39:28",
            "nodes": [],
            "errorSelector": "c8809ad4",
            "name": "HyperdriveDeployerAlreadyAdded",
            "nameLocation": "10765:30:28",
            "parameters": {
              "id": 4607,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10795:2:28"
            }
          },
          {
            "id": 4610,
            "nodeType": "ErrorDefinition",
            "src": "10803:35:28",
            "nodes": [],
            "errorSelector": "8f268412",
            "name": "HyperdriveDeployerNotAdded",
            "nameLocation": "10809:26:28",
            "parameters": {
              "id": 4609,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10835:2:28"
            }
          },
          {
            "id": 4612,
            "nodeType": "ErrorDefinition",
            "src": "10843:40:28",
            "nodes": [],
            "errorSelector": "e1a1578d",
            "name": "HyperdriveDeployerIndexMismatch",
            "nameLocation": "10849:31:28",
            "parameters": {
              "id": 4611,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10880:2:28"
            }
          },
          {
            "id": 4615,
            "nodeType": "ErrorDefinition",
            "src": "10982:33:28",
            "nodes": [],
            "documentation": {
              "id": 4613,
              "nodeType": "StructuredDocumentation",
              "src": "10889:88:28",
              "text": "######################\n ### ERC20Forwarder ###\n ######################"
            },
            "errorSelector": "ba430d38",
            "name": "BatchInputLengthMismatch",
            "nameLocation": "10988:24:28",
            "parameters": {
              "id": 4614,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11012:2:28"
            }
          },
          {
            "id": 4617,
            "nodeType": "ErrorDefinition",
            "src": "11020:24:28",
            "nodes": [],
            "errorSelector": "f87d9271",
            "name": "ExpiredDeadline",
            "nameLocation": "11026:15:28",
            "parameters": {
              "id": 4616,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11041:2:28"
            }
          },
          {
            "id": 4619,
            "nodeType": "ErrorDefinition",
            "src": "11049:25:28",
            "nodes": [],
            "errorSelector": "8baa579f",
            "name": "InvalidSignature",
            "nameLocation": "11055:16:28",
            "parameters": {
              "id": 4618,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11071:2:28"
            }
          },
          {
            "id": 4621,
            "nodeType": "ErrorDefinition",
            "src": "11079:27:28",
            "nodes": [],
            "errorSelector": "2aab8bd3",
            "name": "InvalidERC20Bridge",
            "nameLocation": "11085:18:28",
            "parameters": {
              "id": 4620,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11103:2:28"
            }
          },
          {
            "id": 4623,
            "nodeType": "ErrorDefinition",
            "src": "11111:30:28",
            "nodes": [],
            "errorSelector": "f0dd15fd",
            "name": "RestrictedZeroAddress",
            "nameLocation": "11117:21:28",
            "parameters": {
              "id": 4622,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11138:2:28"
            }
          },
          {
            "id": 4626,
            "nodeType": "ErrorDefinition",
            "src": "11261:32:28",
            "nodes": [],
            "documentation": {
              "id": 4624,
              "nodeType": "StructuredDocumentation",
              "src": "11147:109:28",
              "text": "#############################\n ### ERC20ForwarderFactory ###\n #############################"
            },
            "errorSelector": "381dd540",
            "name": "InvalidForwarderAddress",
            "nameLocation": "11267:23:28",
            "parameters": {
              "id": 4625,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11290:2:28"
            }
          },
          {
            "id": 4631,
            "nodeType": "ErrorDefinition",
            "src": "11383:42:28",
            "nodes": [],
            "documentation": {
              "id": 4627,
              "nodeType": "StructuredDocumentation",
              "src": "11299:79:28",
              "text": "###################\n ### BondWrapper ###\n ###################"
            },
            "errorSelector": "17858bbe",
            "name": "InvalidRecipient",
            "nameLocation": "11389:16:28",
            "parameters": {
              "id": 4630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4629,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nameLocation": "11414:9:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 4631,
                  "src": "11406:17:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4628,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11406:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11405:19:28"
            }
          },
          {
            "id": 4633,
            "nodeType": "ErrorDefinition",
            "src": "11430:22:28",
            "nodes": [],
            "errorSelector": "9acb7e52",
            "name": "AlreadyClosed",
            "nameLocation": "11436:13:28",
            "parameters": {
              "id": 4632,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11449:2:28"
            }
          },
          {
            "id": 4635,
            "nodeType": "ErrorDefinition",
            "src": "11457:20:28",
            "nodes": [],
            "errorSelector": "3f8e46bc",
            "name": "BondMatured",
            "nameLocation": "11463:11:28",
            "parameters": {
              "id": 4634,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11474:2:28"
            }
          },
          {
            "id": 4637,
            "nodeType": "ErrorDefinition",
            "src": "11482:23:28",
            "nodes": [],
            "errorSelector": "915eceb1",
            "name": "BondNotMatured",
            "nameLocation": "11488:14:28",
            "parameters": {
              "id": 4636,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11502:2:28"
            }
          },
          {
            "id": 4639,
            "nodeType": "ErrorDefinition",
            "src": "11510:26:28",
            "nodes": [],
            "errorSelector": "d5481703",
            "name": "InsufficientPrice",
            "nameLocation": "11516:17:28",
            "parameters": {
              "id": 4638,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11533:2:28"
            }
          },
          {
            "id": 4641,
            "nodeType": "ErrorDefinition",
            "src": "11541:28:28",
            "nodes": [],
            "errorSelector": "aaad13f7",
            "name": "InputLengthMismatch",
            "nameLocation": "11547:19:28",
            "parameters": {
              "id": 4640,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11566:2:28"
            }
          },
          {
            "id": 4643,
            "nodeType": "ErrorDefinition",
            "src": "11574:27:28",
            "nodes": [],
            "errorSelector": "4a0dabae",
            "name": "MintPercentTooHigh",
            "nameLocation": "11580:18:28",
            "parameters": {
              "id": 4642,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11598:2:28"
            }
          },
          {
            "id": 4646,
            "nodeType": "ErrorDefinition",
            "src": "11679:25:28",
            "nodes": [],
            "documentation": {
              "id": 4644,
              "nodeType": "StructuredDocumentation",
              "src": "11607:67:28",
              "text": "###############\n ### AssetId ###\n ###############"
            },
            "errorSelector": "b7d09497",
            "name": "InvalidTimestamp",
            "nameLocation": "11685:16:28",
            "parameters": {
              "id": 4645,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11701:2:28"
            }
          },
          {
            "id": 4649,
            "nodeType": "ErrorDefinition",
            "src": "11803:39:28",
            "nodes": [],
            "documentation": {
              "id": 4647,
              "nodeType": "StructuredDocumentation",
              "src": "11710:88:28",
              "text": "######################\n ### FixedPointMath ###\n ######################"
            },
            "errorSelector": "df92cc9d",
            "name": "FixedPointMath_InvalidExponent",
            "nameLocation": "11809:30:28",
            "parameters": {
              "id": 4648,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11839:2:28"
            }
          },
          {
            "id": 4651,
            "nodeType": "ErrorDefinition",
            "src": "11847:36:28",
            "nodes": [],
            "errorSelector": "d071fdda",
            "name": "FixedPointMath_InvalidInput",
            "nameLocation": "11853:27:28",
            "parameters": {
              "id": 4650,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11880:2:28"
            }
          },
          {
            "id": 4653,
            "nodeType": "ErrorDefinition",
            "src": "11888:43:28",
            "nodes": [],
            "errorSelector": "ac5f1b8e",
            "name": "FixedPointMath_NegativeOrZeroInput",
            "nameLocation": "11894:34:28",
            "parameters": {
              "id": 4652,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11928:2:28"
            }
          },
          {
            "id": 4655,
            "nodeType": "ErrorDefinition",
            "src": "11936:37:28",
            "nodes": [],
            "errorSelector": "2c7949f5",
            "name": "FixedPointMath_NegativeInput",
            "nameLocation": "11942:28:28",
            "parameters": {
              "id": 4654,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11970:2:28"
            }
          },
          {
            "id": 4658,
            "nodeType": "ErrorDefinition",
            "src": "12072:25:28",
            "nodes": [],
            "documentation": {
              "id": 4656,
              "nodeType": "StructuredDocumentation",
              "src": "11979:88:28",
              "text": "######################\n ### YieldSpaceMath ###\n ######################"
            },
            "errorSelector": "7ac17d25",
            "name": "InvalidTradeSize",
            "nameLocation": "12078:16:28",
            "parameters": {
              "id": 4657,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12094:2:28"
            }
          },
          {
            "id": 4661,
            "nodeType": "ErrorDefinition",
            "src": "12178:28:28",
            "nodes": [],
            "documentation": {
              "id": 4659,
              "nodeType": "StructuredDocumentation",
              "src": "12103:70:28",
              "text": "################\n ### SafeCast ###\n ################"
            },
            "errorSelector": "1e15f2a2",
            "name": "UnsafeCastToUint128",
            "nameLocation": "12184:19:28",
            "parameters": {
              "id": 4660,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12203:2:28"
            }
          },
          {
            "id": 4663,
            "nodeType": "ErrorDefinition",
            "src": "12211:27:28",
            "nodes": [],
            "errorSelector": "a5353be5",
            "name": "UnsafeCastToInt128",
            "nameLocation": "12217:18:28",
            "parameters": {
              "id": 4662,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12235:2:28"
            }
          },
          {
            "id": 4669,
            "nodeType": "FunctionDefinition",
            "src": "12265:51:28",
            "nodes": [],
            "documentation": {
              "id": 4664,
              "nodeType": "StructuredDocumentation",
              "src": "12244:16:28",
              "text": "Getters ///"
            },
            "functionSelector": "21b57d53",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "target0",
            "nameLocation": "12274:7:28",
            "parameters": {
              "id": 4665,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12281:2:28"
            },
            "returnParameters": {
              "id": 4668,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4667,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 4669,
                  "src": "12307:7:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4666,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12307:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12306:9:28"
            },
            "scope": 4675,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 4674,
            "nodeType": "FunctionDefinition",
            "src": "12322:51:28",
            "nodes": [],
            "functionSelector": "eac3e799",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "target1",
            "nameLocation": "12331:7:28",
            "parameters": {
              "id": 4670,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12338:2:28"
            },
            "returnParameters": {
              "id": 4673,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4672,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 4674,
                  "src": "12364:7:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4671,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12364:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12363:9:28"
            },
            "scope": 4675,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 4196,
              "name": "IHyperdriveRead",
              "nameLocations": [
                "292:15:28"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 4944,
              "src": "292:15:28"
            },
            "id": 4197,
            "nodeType": "InheritanceSpecifier",
            "src": "292:15:28"
          },
          {
            "baseName": {
              "id": 4198,
              "name": "IHyperdriveCore",
              "nameLocations": [
                "309:15:28"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 4833,
              "src": "309:15:28"
            },
            "id": 4199,
            "nodeType": "InheritanceSpecifier",
            "src": "309:15:28"
          },
          {
            "baseName": {
              "id": 4200,
              "name": "IMultiToken",
              "nameLocations": [
                "326:11:28"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 5121,
              "src": "326:11:28"
            },
            "id": 4201,
            "nodeType": "InheritanceSpecifier",
            "src": "326:11:28"
          }
        ],
        "canonicalName": "IHyperdrive",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          4675,
          5121,
          5218,
          4833,
          5205,
          4944,
          5278
        ],
        "name": "IHyperdrive",
        "nameLocation": "277:11:28",
        "scope": 4676,
        "usedErrors": [
          4515,
          4517,
          4519,
          4521,
          4523,
          4525,
          4527,
          4529,
          4531,
          4533,
          4535,
          4537,
          4539,
          4541,
          4543,
          4545,
          4547,
          4549,
          4551,
          4553,
          4555,
          4557,
          4559,
          4561,
          4563,
          4565,
          4567,
          4569,
          4571,
          4573,
          4575,
          4577,
          4579,
          4582,
          4587,
          4591,
          4593,
          4596,
          4598,
          4600,
          4602,
          4604,
          4606,
          4608,
          4610,
          4612,
          4615,
          4617,
          4619,
          4621,
          4623,
          4626,
          4631,
          4633,
          4635,
          4637,
          4639,
          4641,
          4643,
          4646,
          4649,
          4651,
          4653,
          4655,
          4658,
          4661,
          4663
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 28
} as const;
