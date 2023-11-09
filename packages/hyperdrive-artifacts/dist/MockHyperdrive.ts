export const MockHyperdrive = 
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
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
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
          "name": "time",
          "type": "uint256"
        },
        {
          "internalType": "int256",
          "name": "apr",
          "type": "int256"
        }
      ],
      "name": "accrue",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "name": "_amountOut",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_normalizedTimeRemaining",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_spotPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        }
      ],
      "name": "calculateFeesGivenBonds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "totalCurveFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalFlatFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "governanceCurveFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "governanceFlatFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalGovernanceFee",
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
          "name": "_amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_spotPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        }
      ],
      "name": "calculateFeesGivenShares",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "totalCurveFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "governanceCurveFee",
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
          "name": "_sharePrice",
          "type": "uint256"
        }
      ],
      "name": "calculateIdleShareReserves",
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
          "name": "_shareAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_sharePrice",
          "type": "uint256"
        }
      ],
      "name": "calculateOpenLong",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "shareReservesDelta",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bondReservesDelta",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bondProceeds",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalGovernanceFee",
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
        }
      ],
      "name": "calculateTimeRemaining",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "timeRemaining",
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
          "name": "_maturityTime",
          "type": "uint256"
        }
      ],
      "name": "calculateTimeRemainingScaled",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "timeRemaining",
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
      "inputs": [],
      "name": "getOracleState",
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
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTotalShares",
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
      "inputs": [],
      "name": "latestCheckpoint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "checkpointTime",
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
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "loadOracle",
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
      "stateMutability": "view",
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
          "name": "data",
          "type": "uint256"
        }
      ],
      "name": "recordOracle",
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
          "internalType": "uint128",
          "name": "longExposure",
          "type": "uint128"
        }
      ],
      "name": "setLongExposure",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
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
          "name": "_marketState_",
          "type": "tuple"
        }
      ],
      "name": "setMarketState",
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
          "internalType": "uint128",
          "name": "shareReserves",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "bondReserves",
          "type": "uint128"
        }
      ],
      "name": "setReserves",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_totalShares",
          "type": "uint256"
        }
      ],
      "name": "setTotalShares",
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
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "_shareReservesDelta",
          "type": "int256"
        }
      ],
      "name": "updateLiquidity",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x61028060405260016000553480156200001757600080fd5b5060405162007345380380620073458339810160408190526200003a91620003d3565b6001600160a01b038181166080908152600060a081815260c082905260408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc68184015246606082015230818701528251808203909601865290920181528351939091019290922060e052845190921661010052830151839183918190849084908390819084906103e8111562000120576040516349db44f560e01b815260040160405180910390fd5b60408101516101a05260608101516101c05260a08101516000036200015857604051635428734d60e01b815260040160405180910390fd5b60a0810180516101205251608082015110806200018957508060a001518160800151620001869190620004bf565b15155b15620001a85760405163253fffcf60e11b815260040160405180910390fd5b60808101516101405260c08101516101605260208101516101805260e0810151601180546001600160a01b0319166001600160a01b03928316179055610100820151166102405261012081015151670de0b6b3a764000010806200021c5750670de0b6b3a764000081610120015160200151115b80620002385750670de0b6b3a764000081610120015160400151115b1562000257576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101e0528051602001516102005251604001516102205261016001516102605260005b84610140015181101562000302576040805180820190915263ffffffff4281168252600060208301818152601280546001818101835591909352935190516001600160e01b0316640100000000029216919091177fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3444909101550162000282565b5050505050505050505050620004e2565b60405161018081016001600160401b03811182821017156200034557634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200036357600080fd5b919050565b6000606082840312156200037b57600080fd5b604051606081016001600160401b0381118282101715620003ac57634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b6000808284036101e0811215620003e957600080fd5b6101c080821215620003fa57600080fd5b6200040462000313565b915062000411856200034b565b82526020850151602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c08301526200045d60e086016200034b565b60e0830152610100620004728187016200034b565b90830152610120620004878787830162000368565b81840152506101808501516101408301526101a0850151610160830152819350620004b48186016200034b565b925050509250929050565b600082620004dd57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051616bb4620007916000396000613a9f015260008181610f3701528181610fb1015261101f01526000818161317f015281816131f801528181613d1a01526153c60152600081816131cc0152818161348701528181614da1015261539a0152600081816131520152818161336401528181613cd601526147f4015260008181610ce9015281816118f001528181611d3101528181611f010152818161212e015261232f0152600081816114190152818161146401528181611566015281816141bd0152818161420c01528181614445015281816148b8015281816148f4015281816153220152615cd50152600081816114d501528181611951015281816132c50152818161331201528181614007015281816140340152818161441f015281816147b401528181614ce601528181615094015261562401526000818161151801528181611993015281816132a3015281816133330152818161446b0152818161479201528181614cc4015281816150720152615645015260008181610dae015281816114f70152818161197201528181611dff015281816121bb015281816123ec0152818161282c015281816129480152818161340d0152818161366001528181613ca40152818161498301526151310152600081816125b50152818161265e01526127940152600081816111820152818161121c0152818161128f015281816126a9015281816126f201528181612c9401528181612cdd01528181612db701528181612e5501528181613d4a01528181613e0401528181613ec90152613f610152600081816104a30152611711015260006139d401526000613997015260008181610252015261083d0152616bb46000f3fe60806040526004361061023b5760003560e01c80638fca1f7b1161012e578063b334ed86116100ab578063d5002f2e1161006f578063d5002f2e14610904578063dbbe807014610919578063ded062311461092c578063e44808bc1461094c578063ed64bab21461096c5761023b565b8063b334ed861461082b578063b4f8da3914610877578063ca6d38f7146108b1578063cba2e58d146108d1578063cbc13434146108e45761023b565b80639cd241af116100f25780639cd241af1461078b578063a22cb465146107ab578063a77384c1146107cb578063ab033ea9146107eb578063b1b4b1701461080b5761023b565b80638fca1f7b146106da5780639032c72614610703578063907c0f92146107235780639aa68462146107385780639bd334981461074b5761023b565b80634ed2d6ac116101bc5780637180c8ca116101805780637180c8ca146105b957806371f88b7c146105d957806377d05ff4146105f95780638120a3e21461060c578063883483971461062c5761023b565b80634ed2d6ac146105055780635a1a3e7c14610525578063680962391461054557806368c2ecb814610565578063702db0eb146105855761023b565b806329b23fc11161020357806329b23fc11461042f57806330adf81f1461045d5780633644e515146104915780633e691db9146104c55780634daa8b8f146104e55761023b565b806302329a291461034b578063074a6de91461036d57806317fad7fc146103a75780631c0f12b6146103c757806322d5506b146103e7575b34801561024757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161028a9291906161cc565b600060405180830381855af49150503d80600081146102c5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ca565b606091505b509150915081156102ee57604051638bb0a34b60e01b815260040160405180910390fd5b60006102f9826161dc565b90506001600160e01b03198116636e64089360e11b1461031b57815160208301fd5b81516003198101600484019081529261033c91810160200190602401616284565b80519650602001945050505050f35b34801561035757600080fd5b5061036b61036636600461634e565b61098c565b005b34801561037957600080fd5b5061038d61038836600461637d565b6109d5565b604080519283526020830191909152015b60405180910390f35b3480156103b357600080fd5b5061036b6103c2366004616429565b610bcf565b3480156103d357600080fd5b5061036b6103e23660046164ba565b610c83565b3480156103f357600080fd5b506104076104023660046164fe565b610c96565b604080519586526020860194909452928401919091526060830152608082015260a00161039e565b34801561043b57600080fd5b5061044f61044a366004616530565b610cbf565b60405190815260200161039e565b34801561046957600080fd5b5061044f7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561049d57600080fd5b5061044f7f000000000000000000000000000000000000000000000000000000000000000081565b3480156104d157600080fd5b5061044f6104e036600461658a565b610f05565b3480156104f157600080fd5b5061038d6105003660046165bf565b611094565b34801561051157600080fd5b5061036b6105203660046165d8565b611104565b34801561053157600080fd5b5061036b6105403660046165bf565b611152565b34801561055157600080fd5b5061036b61056036600461661e565b61115e565b34801561057157600080fd5b5061044f6105803660046165bf565b611309565b34801561059157600080fd5b5061036b6105a0366004616657565b6001600160801b03908116600160801b02911617600855565b3480156105c557600080fd5b5061036b6105d436600461668a565b61131a565b3480156105e557600080fd5b5061038d6105f43660046166c1565b611392565b61044f61060736600461637d565b6113ae565b34801561061857600080fd5b5061036b6106273660046165bf565b61162e565b34801561063857600080fd5b5061036b6106473660046166ff565b805160208201516001600160801b03918216600160801b91831682021760085560408301516060840151908316908316820217600955608083015160a0840151908316908316820217600a5560c083015160e084015190831692160217600b5561010080820151600c80546101209094015161ffff1990941691151561ff00191691909117921515909102919091179055565b3480156106e657600080fd5b506013546001600160801b0380821691600160801b90041661038d565b34801561070f57600080fd5b5061036b61071e3660046167c7565b611637565b34801561072f57600080fd5b5061044f611886565b61044f610746366004616530565b611895565b34801561075757600080fd5b5061076b61076636600461661e565b611b92565b60408051948552602085019390935291830152606082015260800161039e565b34801561079757600080fd5b5061036b6107a6366004616843565b611bb2565b3480156107b757600080fd5b5061036b6107c636600461668a565b611bbe565b3480156107d757600080fd5b5061036b6107e63660046165bf565b601455565b3480156107f757600080fd5b5061036b610806366004616878565b611c2a565b34801561081757600080fd5b5061044f6108263660046165bf565b611c9e565b34801561083757600080fd5b5061085f7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161039e565b34801561088357600080fd5b5061036b610892366004616893565b600980546001600160801b03928316600160801b029216919091179055565b3480156108bd57600080fd5b5061044f6108cc3660046165bf565b611ca9565b61038d6108df366004616530565b611cb4565b3480156108f057600080fd5b5061038d6108ff36600461637d565b611ed5565b34801561091057600080fd5b5060145461044f565b61038d610927366004616530565b6120d1565b34801561093857600080fd5b5061044f610947366004616530565b612305565b34801561095857600080fd5b5061036b6109673660046168ae565b612534565b34801561097857600080fd5b5061036b6109873660046165bf565b612584565b336000908152600f602052604090205460ff166109bb576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b600080600054600114610a035760405162461bcd60e51b81526004016109fa90616905565b60405180910390fd5b60026000908155610a1261268e565b9050610a25610a1f61278d565b826127c3565b50610a2f81612aaf565b600d548692506001600160801b031680831115610a5357806001600160801b031692505b82600003610a6957600080935093505050610bc0565b610a78600360f81b3385612b72565b600d546001600160801b03600160801b909104811690600090610aa090869084908616612c1b565b9050610aab85612c39565b610ab5908461693f565b600d80546001600160801b0319166001600160801b0392909216919091179055610ade81612c39565b600d8054601090610b00908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610b2e8188612c63565b955085610b3b8987612f4f565b1115610b5a5760405163c972651760e01b815260040160405180910390fd5b610b676020880188616878565b6001600160a01b03167f7986a4c20efd1390450c45fb0b11e794754bdce25f47ab5488efc8104169f75486610b9c8488612f4f565b604080519283526020830191909152810187905260600160405180910390a2505050505b60016000559094909350915050565b6001600160a01b0386161580610bec57506001600160a01b038516155b15610c0a5760405163f0dd15fd60e01b815260040160405180910390fd5b828114610c2a5760405163174861a760e31b815260040160405180910390fd5b60005b83811015610c7a57610c72858583818110610c4a57610c4a616966565b905060200201358888868686818110610c6557610c65616966565b9050602002013533612f6b565b600101610c2d565b50505050505050565b610c908484848433612f6b565b50505050565b6000806000806000610caa8989898961312c565b939d929c50909a509850909650945050505050565b60008054600114610ce25760405162461bcd60e51b81526004016109fa90616905565b60026000557f0000000000000000000000000000000000000000000000000000000000000000841015610d285760405163211ddda360e11b815260040160405180910390fd5b6000610d3261268e565b9050610d3e86826127c3565b50610d54610d4d600288613236565b3387612b72565b600080600080600080610d688b888e61326b565b949a509298509096509450925090508a8c8842821115610e39578360106000828254610d94919061697c565b90915550610da79050838a8988866134df565b6000610dd37f00000000000000000000000000000000000000000000000000000000000000008461698f565b6000818152600e6020526040812054919250600160801b909104600f0b90610e069086908a908e908d9089908990613659565b6000828152600e6020526040902054610e2d90600f83810b91600160801b9004900b613802565b610e3683612aaf565b50505b6000610e45898e612c63565b90508c6000610e55838e84613929565b90508f811015610e785760405163c972651760e01b815260040160405180910390fd5b610e83600286613236565b8f6000016020810190610e969190616878565b6040805188815260208101859052908101879052606081018990526001600160a01b0391909116907f32f37298489a8da0fde394937191ad6035015dd8a04bc97c304d59858e3bfd679060800160405180910390a3505060016000559f9e505050505050505050505050505050565b60008054600114610f285760405162461bcd60e51b81526004016109fa90616905565b60026000556001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016610f646020840184616878565b6001600160a01b031614610f8b57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600f602052604090205460ff16158015610fd45750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610feb57506011546001600160a01b03163314155b15611008576040516282b42960e81b815260040160405180910390fd5b60108054600090915561101b8184612c63565b91507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa766eca44ec2dc18727bd04ada80599917cad7a27cf6a765026b2f1d0ce5c4ee8361107161268e565b6040805192835260208301919091520160405180910390a2506001600055919050565b600080601283815481106110aa576110aa616966565b9060005260206000200160000160049054906101000a90046001600160e01b03166001600160e01b0316601284815481106110e7576110e7616966565b600091825260209091200154909463ffffffff9091169350915050565b8361110e81613959565b6001600160a01b0316336001600160a01b03161461113f57604051632aab8bd360e01b815260040160405180910390fd5b61114b85858585613a16565b5050505050565b61115b81613a83565b50565b6040516370a0823160e01b81523060048201526000906111f4906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156111c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ed91906169a2565b8385613bdd565b915050600081131561127c576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b15801561126857600080fd5b505af1158015610c7a573d6000803e3d6000fd5b6000811215611304576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac306112be846169bb565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b15801561126857600080fd5b505050565b600061131482613c77565b92915050565b6011546001600160a01b03163314611344576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6000806113a0858585613cc8565b90925090505b935093915050565b600080546001146113d15760405162461bcd60e51b81526004016109fa90616905565b60026000556113de613d48565b600c5460ff161561140257604051637983c05160e01b815260040160405180910390fd5b60008061140f8685613db5565b909250905061143f7f000000000000000000000000000000000000000000000000000000000000000060026169d7565b82101561145f57604051632afb507160e21b815260040160405180910390fd5b61148a7f000000000000000000000000000000000000000000000000000000000000000060026169d7565b611494908361698f565b600c805460ff1916600117905592506114ac82612c39565b600880546001600160801b0319166001600160801b039290921691909117905561154161153c837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006140a2565b612c39565b600880546001600160801b03928316600160801b02921691909117905561158a6000807f0000000000000000000000000000000000000000000000000000000000000000614104565b6115a2600061159c6020870187616878565b85614104565b6115ad610a1f61278d565b5060006115bb878387613929565b90506115ca6020860186616878565b6040805186815260208101849052908101849052606081018890526001600160a01b0391909116907fd93ddcd36a9d44373680f40bd3bcafe3c7e738748e10c90213e70453cff442319060800160405180910390a250505060016000559392505050565b61115b816141a4565b834211156116585760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b03871661167f5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156117ab573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146117e957604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600760205260408120805490919061180f906169ee565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b600061189061278d565b905090565b600080546001146118b85760405162461bcd60e51b81526004016109fa90616905565b6002600055600c54610100900460ff16156118e6576040516313d0ff5960e31b815260040160405180910390fd5b6118ee613d48565b7f000000000000000000000000000000000000000000000000000000000000000085101561192f5760405163211ddda360e11b815260040160405180910390fd5b60006119b761193c614326565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000614347565b9050848110806119c657508381115b156119e457604051633b61151160e11b815260040160405180910390fd5b6000806119f18886613db5565b91509150611a00610a1f61278d565b50600d54600360f81b60009081526002602052600080516020616b3f833981519152549091611a3a916001600160801b039091169061698f565b60008080526002602052600080516020616b5f8339815191525491925090611a6390839061697c565b90506000806000611a7386614382565b9050611a7e816144e8565b9150611a89876141a4565b6008546001600160801b038082168352600954600f0b6020840152600160801b909104166040820152611abb816144e8565b9250611ad38483611acc818761698f565b9190612c1b565b9850611aef90506000611ae960208c018c616878565b8a614104565b611af885612aaf565b60008315611b0f57611b0a8285614756565b611b12565b60005b9050611b2160208b018b616878565b6001600160a01b03167fd92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e502396098a611b568a8a612f4f565b60408051928352602083019190915281018990526060810184905260800160405180910390a25050600160005550949998505050505050505050565b600080600080611ba2868661476b565b9299919850965090945092505050565b61130483838333613a16565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6011546001600160a01b03163314611c54576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b60006113148261488f565b600061131482614938565b600080600054600114611cd95760405162461bcd60e51b81526004016109fa90616905565b6002600055600c54610100900460ff1615611d07576040516313d0ff5960e31b815260040160405180910390fd5b611d0f613d48565b600080611d1c8886613db5565b915091506000611d2d898388613929565b90507f0000000000000000000000000000000000000000000000000000000000000000811015611d705760405163211ddda360e11b815260040160405180910390fd5b86821015611d91576040516342af972b60e01b815260040160405180910390fd5b6000611d9b61278d565b9050611da781846127c3565b506000806000611db7878761476b565b909a5091945092509050878c1115611de25760405163c972651760e01b815260040160405180910390fd5b8060106000828254611df4919061697c565b90915550611e2490507f00000000000000000000000000000000000000000000000000000000000000008561697c565b9850611e3483898489888e6149ae565b6000611e4160018b613236565b9050611e5a81611e5460208e018e616878565b8b614104565b80611e6860208d018d616878565b604080518d8152602081018a90529081018a9052606081018c90526001600160a01b0391909116907f8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda6869060800160405180910390a350505050505050506001600055909590945092505050565b600080600054600114611efa5760405162461bcd60e51b81526004016109fa90616905565b60026000557f0000000000000000000000000000000000000000000000000000000000000000851015611f405760405163211ddda360e11b815260040160405180910390fd5b6000611f4a61268e565b9050611f57610a1f61278d565b50611f6181612aaf565b6002602052600080516020616b5f83398151915254600d54600360f81b6000908152600080516020616b3f833981519152549091611faa916001600160801b039091169061698f565b90506000611fb8828461697c565b9050611fc66000338b612b72565b600080611fd68b87858888614b9c565b9098509092509050611ff9600360f81b611ff360208c018c616878565b89614104565b612003828a612c63565b9750600061201289888c613929565b9050888b11156120355760405163c972651760e01b815260040160405180910390fd5b6000841561204c576120478386614756565b61204f565b60005b905061205e60208c018c616878565b604080518f8152602081018590529081018a9052606081018b9052608081018390526001600160a01b0391909116907fae97bda5fb1ee457c0490e5804bc10c54ab31a1fd9b01e2f85a1855072150be89060a00160405180910390a2505050505050505060016000559094909350915050565b6000806000546001146120f65760405162461bcd60e51b81526004016109fa90616905565b6002600055600c54610100900460ff1615612124576040516313d0ff5960e31b815260040160405180910390fd5b61212c613d48565b7f000000000000000000000000000000000000000000000000000000000000000086101561216d5760405163211ddda360e11b815260040160405180910390fd5b600061217761268e565b90508481101561219a576040516342af972b60e01b815260040160405180910390fd5b60006121a461278d565b905060006121b282846127c3565b905060006121e07f00000000000000000000000000000000000000000000000000000000000000008461697c565b905060008060006121f28d8887614c9e565b909450909250905061220582888c614dd4565b91508060106000828254612219919061697c565b909155505050808b10156122405760405163c972651760e01b815260040160405180910390fd5b600061224c828b613db5565b50905061225b8d848987614dfc565b6000612268600286613236565b90508d6122828261227c60208f018f616878565b83614104565b8161229060208e018e616878565b6001600160a01b03167f80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef95886122c5878e612f4f565b60408051928352602083019190915281018d90526060810185905260800160405180910390a35050600160005550919b919a509098505050505050505050565b600080546001146123285760405162461bcd60e51b81526004016109fa90616905565b60026000557f000000000000000000000000000000000000000000000000000000000000000084101561236e5760405163211ddda360e11b815260040160405180910390fd5b600061237861268e565b905061238486826127c3565b50612393610d4d600188613236565b6000806000806000806123a78b888e61503a565b95509550955095509550955060008c90508c4210156124705781601060008282546123d2919061697c565b909155506123e590508c888786856151b6565b60006124117f00000000000000000000000000000000000000000000000000000000000000008361698f565b6000818152600e6020526040902054909150600160801b9004600f0b61243d8e878b8a878f6001613659565b6000828152600e602052604090205461246490600f83810b91600160801b9004900b613802565b61246d8a612aaf565b50505b600061247c878c612c63565b9050600061248b828b8e613929565b9050808d11156124ae5760405163c972651760e01b815260040160405180910390fd5b8d6124ba600185613236565b6124c760208f018f616878565b60408051878152602081018690529081018e9052606081018490526001600160a01b0391909116907f4c68e40241b8ae371bc7dae7035400158b60d0b7d69b35477b693759bb2c0ca09060800160405180910390a3505060016000559d9c50505050505050505050505050565b8461253e81613959565b6001600160a01b0316336001600160a01b03161461256f57604051632aab8bd360e01b815260040160405180910390fd5b61257c8686868686612f6b565b505050505050565b6000818152600e60205260409020546001600160801b0316156125a45750565b60006125ae61278d565b90506125da7f000000000000000000000000000000000000000000000000000000000000000083616a1d565b1515806125e657508181105b156126045760405163ecd29e8160e01b815260040160405180910390fd5b80820361261c576113048161261761268e565b6127c3565b815b6000818152600e60205260409020546001600160801b03168282036126485761264561268e565b90505b80156126585761114b84826127c3565b506126837f00000000000000000000000000000000000000000000000000000000000000008261697c565b905061261e565b5050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016126dd575047612768565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612741573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061276591906169a2565b90505b601454600003612779576000612787565b601454612787908290614756565b91505090565b60006127b97f000000000000000000000000000000000000000000000000000000000000000042616a1d565b611890904261698f565b6000828152600e6020526040812080546001600160801b03161515806127e857504284115b156127fe57546001600160801b03169050611314565b61280783612c39565b81546001600160801b0319166001600160801b03919091161781556000600e816128517f00000000000000000000000000000000000000000000000000000000000000008861698f565b815260208101919091526040016000908120546001600160801b0316915061287a600287613236565b60008181526002602052604081205491925081156128d3576000806128a2848a886000615383565b9150915080601060008282546128b8919061697c565b909155506128cc905084600084808e6134df565b6001925050505b60006128e060018a613236565b600081815260026020526040902054909150801561293b57600080612908838c8a6001615383565b91509150806010600082825461291e919061697c565b909155508c90506129338460008580856151b6565b600195505050505b82156129b957600061296d7f00000000000000000000000000000000000000000000000000000000000000008c61698f565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b926129ad928492919004900b613802565b6129b68b612aaf565b50505b6000808a116129c95760006129e4565b6129e48a6129de6129d98d614382565b6144e8565b90612f4f565b600d546002602052600080516020616b3f833981519152546000808052600080516020616b5f83398151915254939450926001600160801b0390921691612a2b919061697c565b612a35919061698f565b905060008115612a4e57612a498383614756565b612a51565b60005b604080518e8152602081018a9052908101869052606081018290529091508d907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a250999b9a5050505050505050505050565b6002602052600080516020616b5f83398151915254600d54600360f81b6000908152600080516020616b3f833981519152549091612af8916001600160801b039091169061698f565b90506000612b06828461697c565b90506000612b166129d986614382565b90506000612b25858385612c1b565b9050600080612b338861488f565b905082811115612b4a57612b47838261698f565b91505b6000821180612b57575083155b15612b6857612b6882858789615451565b5050505050505050565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612ba490849061698f565b909155505060008381526002602052604081208054839290612bc790849061698f565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000826000190484118302158202612c3257600080fd5b5091020490565b6000600160801b8210612c5f57604051630f0af95160e11b815260040160405180910390fd5b5090565b60006014548311612c745782612c78565b6014545b9250600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612cc8575047612d53565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612d2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d5091906169a2565b90505b601454600003612d64576000612d83565b612d83612d7c6014548361475690919063ffffffff16565b8590612f4f565b91508360146000828254612d97919061698f565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612e4b57612df16020850185616878565b6001600160a01b03168360405160006040518083038185875af1925050503d8060008114612e3b576040519150601f19603f3d011682016040523d82523d6000602084013e612e40565b606091505b505080915050612efb565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb612e876020870187616878565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018690526044016020604051808303816000875af1158015612ed4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ef89190616a31565b90505b80612f19576040516312171d8360e31b815260040160405180910390fd5b612f29604085016020860161634e565b612f4457612f3f612f3861268e565b8490614756565b612f46565b825b95945050505050565b6000612f648383670de0b6b3a7640000612c1b565b9392505050565b6001600160a01b0384161580612f8857506001600160a01b038316155b15612fa65760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b03161461306a576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff1661306a5760008581526004602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146130685760008681526004602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061306290849061698f565b90915550505b505b60008581526001602090815260408083206001600160a01b03881684529091528120805484929061309c90849061698f565b909155505060008581526001602090815260408083206001600160a01b0387168452909152812080548492906130d390849061697c565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000808080806131778887611acc8c6129de6131508d670de0b6b3a764000061698f565b7f000000000000000000000000000000000000000000000000000000000000000090612f4f565b94506131a3857f0000000000000000000000000000000000000000000000000000000000000000612f4f565b925060006131c46131bc8a670de0b6b3a764000061698f565b8b9089612c1b565b90506131f0817f0000000000000000000000000000000000000000000000000000000000000000612f4f565b945061321c857f0000000000000000000000000000000000000000000000000000000000000000612f4f565b9250613228838561697c565b915050945094509450945094565b60006001600160f81b038211156132605760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080600080600080600061327f88613c77565b90506132e961328c614326565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f000000000000000000000000000000000000000000000000000000000000000061553a565b9098509550935060006133576132fd614326565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006155aa565b905061338d8589613388847f00000000000000000000000000000000000000000000000000000000000000006155bb565b6155eb565b156133ab5760405163512095c760e01b815260040160405180910390fd5b6133b481613a83565b8a8a600080806133c68588888761312c565b9b5092955090935091506133dc9050818461698f565b6133e6908b61697c565b99506133f2828461697c565b6133fc908c61697c565b9a50505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a613437919061698f565b815260208101919091526040016000908120546001600160801b03169150428911613479576000898152600e60205260409020546001600160801b031661347b565b895b90506134ab8b8784848e7f0000000000000000000000000000000000000000000000000000000000000000615674565b96506134b7838761698f565b95506134c987878786868660006156c6565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b031661352861153c8261350b85670de0b6b3a76400006169d7565b600b54600160801b90046001600160801b031691908a6000615741565b600b80546001600160801b03928316600160801b02921691909117905561354e86612c39565b613558908261693f565b600a80546001600160801b03928316600160801b0292169190911790555061357f83612c39565b6008805460009061359a9084906001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506135c7826157bb565b600980546000906135dc908490600f0b616a6e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061360c84612c39565b6008805460109061362e908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b60006136857f00000000000000000000000000000000000000000000000000000000000000008561698f565b9050600060026000613698600188613236565b81526020019081526020016000205490506000600260006136ba600289613236565b81526020019081526020016000205490508160001480156136d9575080155b156136fe576000838152600e6020526040902080546001600160801b031690556137f6565b60006137428b61370e8c89612f4f565b6137199060026169d7565b8b6137248c8b612f4f565b61372e919061697c565b613738919061698f565b61153c919061697c565b905084156137a1576000848152600e602052604090208054829190601090613775908490600160801b9004600f0b616a9b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506137f4565b6000848152600e6020526040902080548291906010906137cc908490600160801b9004600f0b616a6e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b505b50505050505050505050565b8082138015613812575060008212155b156138a557600061382382826157f9565b61382d9084616ac8565b60095490915061385a90613855908390600160801b90046001600160801b0316600f0b61580f565b6157bb565b6009805460109061387c908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b8181131561268a576000821261391b576138be826157bb565b6138c7826157bb565b6138d19190616a9b565b600980546010906138f3908490600160801b90046001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b6138d16138558260006157f9565b600061393b604083016020840161634e565b15613947575082612f64565b6139518484612f4f565b949350505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6013546001600160801b03600160801b82048116911642613ac47f00000000000000000000000000000000000000000000000000000000000000008461697c565b1115613acf57505050565b600060128281548110613ae457613ae4616966565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b031690613b18834261698f565b601254909150878202830190600090613b3288600161697c565b613b3c9190616a1d565b905060405180604001604052804263ffffffff168152602001836001600160e01b031681525060128281548110613b7557613b75616966565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b60008080613bef846301e13380614756565b90506000613c0e8260008812613c0557876129de565b6129de886169bb565b90506000861315613c4157613c2c613c258261581e565b8890612f4f565b9350613c38878561698f565b925050506113a6565b6000861215613c6957613c5d613c568261581e565b8890614756565b9350613c388785616ac8565b509495600095509350505050565b600080613c8261278d565b9050808311613c92576000613c9c565b613c9c818461698f565b9150612f64827f0000000000000000000000000000000000000000000000000000000000000000614756565b600080613d12856129de85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613d08818c614756565b6129de919061698f565b9150613d3e827f0000000000000000000000000000000000000000000000000000000000000000612f4f565b9050935093915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14801590613d955750600034115b15613db357604051631574f9f360e01b815260040160405180910390fd5b565b60008080613dc9604085016020860161634e565b613de457613ddf613dd861268e565b8690612f4f565b613de6565b845b90506000600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613eb45747915082341015613e55576040516312171d8360e31b815260040160405180910390fd5b82341115613eaf5733613e68843461698f565b604051600081818185875af1925050503d8060008114613ea4576040519150601f19603f3d011682016040523d82523d6000602084013e613ea9565b606091505b50909150505b613fd9565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015613f18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613f3c91906169a2565b6040516323b872dd60e01b8152336004820152306024820152604481018590529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015613fb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613fd69190616a31565b90505b80613ff7576040516312171d8360e31b815260040160405180910390fd5b60145460000361405e5761402b837f0000000000000000000000000000000000000000000000000000000000000000614756565b601481905594507f0000000000000000000000000000000000000000000000000000000000000000935061409b92505050565b60145460009061406f908585612c1b565b90508060146000828254614083919061697c565b9091555081905061409261268e565b95509550505050505b9250929050565b6000806140b3846301e13380614756565b90506140f96140ef6140cd670de0b6b3a7640000866159a9565b6140d78885612f4f565b6140e990670de0b6b3a764000061697c565b906159be565b6129de888a612f4f565b979650505050505050565b60008381526001602090815260408083206001600160a01b03861684529091528120805483929061413690849061697c565b90915550506000838152600260205260408120805483929061415990849061697c565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612c0e565b806000036141af5750565b6008546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156141fc5760405163585fe6df60e11b815260040160405180910390fd5b60006142088383616ae8565b90507f000000000000000000000000000000000000000000000000000000000000000081121561424b5760405163585fe6df60e11b815260040160405180910390fd5b61425481612c39565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b8181126142965761428f838286612c1b565b91506142b6565b6142aa6142a2826169bb565b849086612c1b565b6142b3906169bb565b91505b6142bf826157bb565b600980546001600160801b0319166001600160801b039283161790556008546143029161153c91600160801b9004166142f88785615a15565b611acc8787615a15565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600854600954600091611890916001600160801b0390911690600f0b615a15565b600080614356878787866155aa565b90506140f961436a82866301e13380615a32565b61437c83670de0b6b3a764000061698f565b90614756565b6143df60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b5490916101008301916144ae9116614938565b8152600a546001600160801b03600160801b9182900481166020840152600b546040909301926144e092900416614938565b905292915050565b600080614508836101400151846101200151612f4f90919063ffffffff16565b61010084015160e085015161451c91612f4f565b6145269190616ac8565b9050600061453c84600001518560200151615a15565b905060008213156145dc57600061457e8286604001518760a001518860c00151670de0b6b3a764000061456f919061698f565b89606001518a60800151615a58565b905061458a8184615af2565b905080156145d6576145c3828660400151838860c00151670de0b6b3a76400006145b4919061698f565b89606001518a60800151615b01565b855186906145d290839061698f565b9052505b50614698565b6000821215614698576145ee826169bb565b915060006146228286604001518760c00151670de0b6b3a7640000614613919061698f565b88606001518960800151615b35565b905061462e8184615af2565b9050801561467a57614667828660400151838860c00151670de0b6b3a7640000614658919061698f565b89606001518a60800151615bcb565b8551869061467690839061697c565b9052505b614684818461698f565b8551869061469390839061697c565b905250505b60006146c7856101000151670de0b6b3a76400006146b6919061698f565b606087015160e08801519190612c1b565b6146f5866101400151670de0b6b3a76400006146e3919061698f565b60608801516101208901519190612c1b565b6146ff9190616ac8565b905060008186600001516147139190616ae8565b90508560a0015181121561473a5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a086015161474c908261698f565b9695505050505050565b6000612f6483670de0b6b3a764000084612c1b565b6000806000806147d861477c614326565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000615c60565b925060006147e76132fd614326565b90506148188785613388847f0000000000000000000000000000000000000000000000000000000000000000615c81565b156148365760405163512095c760e01b815260040160405180910390fd5b61483f81613a83565b60008061484d89848a613cc8565b909250905061485c828761698f565b9450614868818661697c565b955061487581848a612c1b565b9350614881848a61698f565b965050505092959194509250565b60095460009081906148b190600160801b90046001600160801b031684614756565b90506148dd7f00000000000000000000000000000000000000000000000000000000000000008261697c565b6008546001600160801b03161115614932576008547f0000000000000000000000000000000000000000000000000000000000000000906149289083906001600160801b031661698f565b612f64919061698f565b50919050565b600080670de0b6b3a764000061494c61278d565b61495691906169d7565b9050808311614966576000614970565b614970818461698f565b9150612f646149a7670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006169d7565b8390614756565b600a546001600160801b03166149e961153c826149d385670de0b6b3a76400006169d7565b600b546001600160801b031691908a6001615741565b600b80546001600160801b0319166001600160801b0392909216919091179055614a1287612c39565b60088054600090614a2d9084906001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614a5a85612c39565b60088054601090614a7c908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614aa986612c39565b614ab39082616a4e565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b90614b0f614afa8b89612f4f565b614b058b60026169d7565b61153c919061698f565b835490915081908490601090614b30908490600160801b9004600f0b616a6e565b82546001600160801b039182166101009390930a9283029190920219909116179055508254614b6d90600f84810b91600160801b9004900b613802565b614b7687615cce565b614b93576040516318846de960e01b815260040160405180910390fd5b6137f687612aaf565b600080600080614bab88614382565b90506000614bb8826144e8565b9050614bca614bc561268e565b61488f565b9450614bd7858b89612c1b565b9450614bea614be5866169bb565b6141a4565b6008546001600160801b038082168452600954600f0b6020850152600160801b9091041660408301526000614c1e836144e8565b90506000614c2d8a8385612c1b565b9050614c398c8b616ac8565b614c439082616ac8565b90506000811215614c8c576000614c64614c5c836169bb565b85908d612c1b565b9050614c70818961698f565b9750614c7b816141a4565b614c86818a8e615d40565b60009150505b94509092505050955095509592505050565b6000806000614d0a614cae614326565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000615d85565b915085614d178387612f4f565b1115614d365760405163512095c760e01b815260040160405180910390fd5b6000614d436132fd614326565b9050614d4e81613a83565b600080614d6589670de0b6b3a7640000858b61312c565b509294509250614d7991508290508361698f565b614d83908661698f565b9450614dc589614d93838861698f565b89614d9e8c82615da6565b8c7f0000000000000000000000000000000000000000000000000000000000000000615674565b95509250505093509350939050565b6000614de6604083016020840161634e565b15614df5576139518484612f4f565b5082612f64565b600a54614e469061153c90600160801b90046001600160801b0316614e2984670de0b6b3a76400006169d7565b600b54600160801b90046001600160801b03169190886001615741565b600b80546001600160801b03928316600160801b0292169190911790556000614e6e84612c39565b600854614e8491906001600160801b031661693f565b600880546001600160801b0319166001600160801b0383161790559050614eaa85612c39565b60088054601090614ecc908490600160801b90046001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614ef985612c39565b600a8054601090614f1b908490600160801b90046001600160801b0316616a4e565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b911612159050614f6a5760405163585fe6df60e11b815260040160405180910390fd5b6000614f7461278d565b6000818152600e6020526040902054909150600160801b9004600f0b614f9987612c39565b6000838152600e602052604090208054601090614fc1908490600160801b9004600f0b616a9b565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e602052604090205461500b90600f83810b91600160801b9004900b613802565b61501485615cce565b615031576040516318846de960e01b815260040160405180910390fd5b610c7a85612aaf565b600080600080600080600061504e88613c77565b90506150b861505b614326565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000615db5565b9098509650935060006150cc6132fd614326565b90506150d781613a83565b6000806150e68d85858f61312c565b98509294509092506150fc91508390508861698f565b9650615108818361697c565b615112908a61698f565b985061511e858a61697c565b9750505050506151a285858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e61515b919061698f565b81526020810191909152604001600020546001600160801b0316428d116151995760008d8152600e60205260409020546001600160801b031661519b565b8d5b60016156c6565b999d939c50919a5098509695509350505050565b600a546001600160801b03166151f161153c826151db85670de0b6b3a76400006169d7565b600b546001600160801b031691908a6000615741565b600b80546001600160801b0319166001600160801b039290921691909117905561521a86612c39565b615224908261693f565b600a80546001600160801b0319166001600160801b03929092169190911790555061524e83612c39565b600880546000906152699084906001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550615296826157bb565b600980546000906152ab908490600f0b616a9b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506152db84612c39565b600880546010906152fd908490600160801b90046001600160801b0316616a4e565b82546101009290920a6001600160801b038181021990931691831602179091556008547f00000000000000000000000000000000000000000000000000000000000000009116109050806153655750600954600854600f9190910b6001600160801b03909116125b1561114b5760405163585fe6df60e11b815260040160405180910390fd5b6000806153908686614756565b915060006153be837f0000000000000000000000000000000000000000000000000000000000000000612f4f565b90506153ea817f0000000000000000000000000000000000000000000000000000000000000000612f4f565b9150831561540d576153fc828261698f565b615406908461698f565b9250615424565b615417828261698f565b615421908461697c565b92505b8486101561544757615437838787612c1b565b9250615444828787612c1b565b91505b5094509492505050565b6000808411615460578261546b565b61546b838686612c1b565b90508060000361547b5750610c90565b80858382111561549657839150615493878385612c1b565b90505b61549f82612c39565b600d80546000906154ba9084906001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506154e781612c39565b600d8054601090615509908490600160801b90046001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c7a81614be5906169bb565b6000808061555b61555388670de0b6b3a764000061698f565b899087612c1b565b90506155678888612f4f565b9150811561559d5761558e8a8a846155878a670de0b6b3a764000061698f565b8989615bcb565b925061559a838261697c565b90505b9750975097945050505050565b6000612f46826140e9858888612c1b565b60006155d96155d284670de0b6b3a764000061698f565b8390615e01565b612f6490670de0b6b3a764000061698f565b600080615669856155fa614326565b615604919061697c565b600854615622908790600160801b90046001600160801b031661698f565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006155aa565b909210949350505050565b60008061568d856156858887615e01565b8a9190612c1b565b905061569a888486612c1b565b6156a4908261697c565b9050868111156156bb576156b8878261698f565b91505b509695505050505050565b600080600080600080888810156157235786156156eb576156e88d898b612c1b565b9c505b6156f68c898b612c1b565b9b506157028b8d616ac8565b905061570f8b898b612c1b565b9a5061571c8a898b612c1b565b9950615730565b61572d8b8d616ac8565b90505b9b9c9a9b999a975050505050505050565b600081156157815761577a615756848761697c565b6157608587612f4f565b61576a888a612f4f565b615774919061697c565b906159a9565b9050612f46565b82850361579057506000612f46565b61474c61579d848761698f565b6157a78587612f4f565b6157b1888a612f4f565b615774919061698f565b600060016001607f1b031982128015906157dc575060016001607f1b038213155b612c5f5760405163a5353be560e01b815260040160405180910390fd5b60008183136158085781612f64565b5090919050565b60008183136149325782612f64565b6000680248ce36a70cb26b3e19821361583957506000919050565b680755bf798b4a1bf1e582126158625760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000612f6483670de0b6b3a764000084615a32565b6000816000036159d75750670de0b6b3a7640000611314565b826000036159e757506000611314565b8160006159f385615e16565b9050818102615a0a670de0b6b3a764000082616b10565b905061474c8161581e565b600080615a228385616ac8565b90506000811215612f6457600080fd5b6000826000190484118302158202615a4957600080fd5b50910281810615159190040190565b600080615a688888878787616029565b90506000615a85615a7d876140e9878b615e01565b869086615a32565b615a8f908361698f565b9050670de0b6b3a76400008110615ac357615abc615ab5670de0b6b3a764000088614756565b82906159be565b9050615adb565b615ad8615ab5670de0b6b3a7640000886159a9565b90505b615ae5888261698f565b9998505050505050505050565b60008183116149325782612f64565b600080615b12888888888888616058565b9092509050806156bb57604051637ac17d2560e01b815260040160405180910390fd5b600080615b45878787878761611a565b90506000615b70670de0b6b3a7640000615b5f8787614756565b615b69919061697c565b83906159a9565b9050670de0b6b3a76400008110615b9d57615b96615ab5670de0b6b3a7640000886159a9565b9050615bb5565b615bb2615ab5670de0b6b3a764000088614756565b90505b615bbf818861698f565b98975050505050505050565b600080615bdb888887878761611a565b9050615beb856140e9888a61698f565b96506000615c058486615bfe8b8661698f565b9190615a32565b9050670de0b6b3a76400008110615c3257615c2b615ab5670de0b6b3a7640000886159a9565b9050615c4a565b615c47615ab5670de0b6b3a764000088614756565b90505b615c5481856159a9565b9050615ae5898261698f565b60006140f9878787615c7a88670de0b6b3a764000061698f565b878761613f565b6000612f64615cad670de0b6b3a7640000615c9c81876159a9565b615ca6919061698f565b8490615e01565b615cbf90670de0b6b3a764000061697c565b670de0b6b3a764000090614756565b6000615cfa7f000000000000000000000000000000000000000000000000000000000000000083612f4f565b600954600854615d38916000916001600160801b03600160801b9092048216600f0b91615d28911687612f4f565b615d329190616ac8565b906157f9565b121592915050565b6000615d4e6129d983614382565b60008080526002602052600080516020616b5f8339815191525491925090615d7790859061697c565b905061114b85838387615451565b60006140f9878787615d9f88670de0b6b3a764000061698f565b8787615b01565b60008183116158085781612f64565b60008080615dce61555388670de0b6b3a764000061698f565b9050861561559d57615de08888612f4f565b915061558e8a8a84615dfa8a670de0b6b3a764000061698f565b8989615b01565b6000612f648383670de0b6b3a7640000615a32565b6000808213615e3857604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b600061603585856159be565b61604e616046866140e9868b612f4f565b859085612c1b565b61474c919061697c565b600080600061606a898988888861611a565b905061607a866140e9898b61697c565b97508781101561609157600080925092505061610f565b60006160a28587615bfe8c8661698f565b9050670de0b6b3a764000081106160cf576160c8615ab5670de0b6b3a7640000896159a9565b90506160e7565b6160e4615ab5670de0b6b3a764000089614756565b90505b6160f181866159a9565b9050808a111561610857616105818b61698f565b93505b6001925050505b965096945050505050565b600061612685856159be565b61604e616137866140e9868b615e01565b859085615a32565b60008061614f888887878761611a565b9050616162856140e9613dd8898c61697c565b975061616f848985612c1b565b9750600061617d898361698f565b9050670de0b6b3a764000081106161aa576161a3615ab5670de0b6b3a7640000886159a9565b90506161c2565b6161bf615ab5670de0b6b3a764000088614756565b90505b615ae5818961698f565b8183823760009101908152919050565b805160208201516001600160e01b0319808216929190600483101561620b5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561624d5761624d616213565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561627c5761627c616213565b604052919050565b6000602080838503121561629757600080fd5b825167ffffffffffffffff808211156162af57600080fd5b818501915085601f8301126162c357600080fd5b8151818111156162d5576162d5616213565b6162e7601f8201601f19168501616253565b915080825286848285010111156162fd57600080fd5b60005b8181101561631b578381018501518382018601528401616300565b50600090820190930192909252509392505050565b801515811461115b57600080fd5b803561634981616330565b919050565b60006020828403121561636057600080fd5b8135612f6481616330565b60006060828403121561493257600080fd5b60008060006060848603121561639257600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156163b757600080fd5b6163c38682870161636b565b9150509250925092565b80356001600160a01b038116811461634957600080fd5b60008083601f8401126163f657600080fd5b50813567ffffffffffffffff81111561640e57600080fd5b6020830191508360208260051b850101111561409b57600080fd5b6000806000806000806080878903121561644257600080fd5b61644b876163cd565b9550616459602088016163cd565b9450604087013567ffffffffffffffff8082111561647657600080fd5b6164828a838b016163e4565b9096509450606089013591508082111561649b57600080fd5b506164a889828a016163e4565b979a9699509497509295939492505050565b600080600080608085870312156164d057600080fd5b843593506164e0602086016163cd565b92506164ee604086016163cd565b9396929550929360600135925050565b6000806000806080858703121561651457600080fd5b5050823594602084013594506040840135936060013592509050565b6000806000806080858703121561654657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561657257600080fd5b61657e8782880161636b565b91505092959194509250565b60006020828403121561659c57600080fd5b813567ffffffffffffffff8111156165b357600080fd5b6139518482850161636b565b6000602082840312156165d157600080fd5b5035919050565b600080600080608085870312156165ee57600080fd5b843593506165fe602086016163cd565b925060408501359150616613606086016163cd565b905092959194509250565b6000806040838503121561663157600080fd5b50508035926020909101359150565b80356001600160801b038116811461634957600080fd5b6000806040838503121561666a57600080fd5b61667383616640565b915061668160208401616640565b90509250929050565b6000806040838503121561669d57600080fd5b6166a6836163cd565b915060208301356166b681616330565b809150509250929050565b6000806000606084860312156166d657600080fd5b505081359360208301359350604090920135919050565b8035600f81900b811461634957600080fd5b6000610140828403121561671257600080fd5b61671a616229565b61672383616640565b815261673160208401616640565b6020820152616742604084016166ed565b604082015261675360608401616640565b606082015261676460808401616640565b608082015261677560a08401616640565b60a082015261678660c08401616640565b60c082015261679760e08401616640565b60e08201526101006167aa81850161633e565b908201526101206167bc84820161633e565b908201529392505050565b600080600080600080600060e0888a0312156167e257600080fd5b6167eb886163cd565b96506167f9602089016163cd565b9550604088013561680981616330565b945060608801359350608088013560ff8116811461682657600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060006060848603121561685857600080fd5b83359250616868602085016163cd565b9150604084013590509250925092565b60006020828403121561688a57600080fd5b612f64826163cd565b6000602082840312156168a557600080fd5b612f6482616640565b600080600080600060a086880312156168c657600080fd5b853594506168d6602087016163cd565b93506168e4604087016163cd565b9250606086013591506168f9608087016163cd565b90509295509295909350565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6001600160801b0382811682821603908082111561695f5761695f616929565b5092915050565b634e487b7160e01b600052603260045260246000fd5b8082018082111561131457611314616929565b8181038181111561131457611314616929565b6000602082840312156169b457600080fd5b5051919050565b6000600160ff1b82016169d0576169d0616929565b5060000390565b808202811582820484141761131457611314616929565b600060018201616a0057616a00616929565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082616a2c57616a2c616a07565b500690565b600060208284031215616a4357600080fd5b8151612f6481616330565b6001600160801b0381811683821601908082111561695f5761695f616929565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561131457611314616929565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561131457611314616929565b818103600083128015838313168383128216171561695f5761695f616929565b8082018281126000831280158216821582161715616b0857616b08616929565b505092915050565b600082616b1f57616b1f616a07565b600160ff1b821460001984141615616b3957616b39616929565b50059056fe3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba2646970667358221220eda965e5fa99de157c3ca2b64570a81df567b9870f13771fa1c82b816774af0664736f6c63430008130033",
    "sourceMap": "2497:8785:50:-:0;;;454:1:103;429:26;;2615:157:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;843:28:0;;;;;;;2754:1:50;1944:20:42;;;;1974:34;;;;2254:10:40::2;::::0;;;;::::2;::::0;;::::2;::::0;;-1:-1:-1;;;2254:10:40::2;::::0;;::::2;::::0;2077:264;;2105:121:::2;2077:264:::0;;::::2;2715:25:167::0;2244:21:40;2756:18:167;;;2749:34;2283:13:40::2;-1:-1:-1::0;2799:18:167;;2792:34;2322:4:40::2;2842:18:167::0;;;2835:60;2077:264:40;;;;;;;;;;2687:19:167;;;2077:264:40;;2054:297;;;;;::::2;::::0;;;;2035:316:::2;::::0;4466:17:7;;4453:30;;;;;5012:28;;;2722:7:50;;843:28:0;;2754:1:50;;2722:7;;843:28:0;;2754:1:50;;;;2722:7;;5043:3:7;-1:-1:-1;5008:113:7;;;5069:41;;-1:-1:-1;;;5069:41:7;;;;;;;;;;;5008:113;5154:28;;;;5130:52;;5221:32;;;;5193:60;;5418:26;;;;5448:1;5418:31;5414:108;;5472:39;;-1:-1:-1;;;5472:39:7;;;;;;;;;;;5414:108;5553:26;;;;;5531:48;;5633:26;5606:24;;;;:53;;:127;;;5702:7;:26;;;5675:7;:24;;;:53;;;;:::i;:::-;:58;;5606:127;5589:224;;;5765:37;;-1:-1:-1;;;5765:37:7;;;;;;;;;;;5589:224;5842:24;;;;5822:44;;5891:19;;;;5876:34;;5941:25;;;;5920:46;;5990:18;;;;5976:11;:32;;-1:-1:-1;;;;;;5976:32:7;-1:-1:-1;;;;;5976:32:7;;;;;;;6034:20;;;6018:36;;;6082:12;;;;:18;6103:4;-1:-1:-1;;6082:65:7;;;6143:4;6123:7;:12;;;:17;;;:24;6082:65;:111;;;;6189:4;6163:7;:12;;;:23;;;:30;6082:111;6065:202;;;6225:31;;-1:-1:-1;;;6225:31:7;;;;;;;;;;;6065:202;6288:12;;;;;:18;6276:30;;6327:12;;:17;;;6316:28;;6371:12;:23;;;6354:40;;6452:17;;;6439:30;;6288:18;3768:182:2::2;3792:7;:18;;;3788:1;:22;3768:182;;;3841:38;::::0;;;;::::2;::::0;;;::::2;3859:15;3841:38:::0;::::2;::::0;;-1:-1:-1;3841:38:2::2;::::0;::::2;::::0;;;3828:7:::2;:52:::0;;::::2;::::0;;::::2;::::0;;;;;;;;;;-1:-1:-1;;;;;3828:52:2::2;::::0;::::2;::::0;::::2;::::0;;;::::2;::::0;;;::::2;::::0;3922:3:::2;3768:182;;;;3457:499:::0;;;;1581:235:1;;;;2615:157:50;;2497:8785;;14:347:167;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:167;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:167;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:622::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:167;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;;556:622;;;;:::o;1183:1296::-;1290:6;1298;1342:9;1333:7;1329:23;1372:3;1368:2;1364:12;1361:32;;;1389:1;1386;1379:12;1361:32;1412:6;1438:2;1434;1430:11;1427:31;;;1454:1;1451;1444:12;1427:31;1480:17;;:::i;:::-;1467:30;;1520:48;1558:9;1520:48;:::i;:::-;1513:5;1506:63;1622:2;1611:9;1607:18;1601:25;1596:2;1589:5;1585:14;1578:49;1680:2;1669:9;1665:18;1659:25;1654:2;1647:5;1643:14;1636:49;1738:2;1727:9;1723:18;1717:25;1712:2;1705:5;1701:14;1694:49;1797:3;1786:9;1782:19;1776:26;1770:3;1763:5;1759:15;1752:51;1857:3;1846:9;1842:19;1836:26;1830:3;1823:5;1819:15;1812:51;1917:3;1906:9;1902:19;1896:26;1890:3;1883:5;1879:15;1872:51;1956:58;2009:3;1998:9;1994:19;1956:58;:::i;:::-;1950:3;1943:5;1939:15;1932:83;2034:3;2069:57;2122:2;2111:9;2107:18;2069:57;:::i;:::-;2053:14;;;2046:81;2146:3;2181:62;2235:7;2215:18;;;2181:62;:::i;:::-;2176:2;2169:5;2165:14;2158:86;;2301:6;2290:9;2286:22;2280:29;2271:6;2264:5;2260:18;2253:57;2367:3;2356:9;2352:19;2346:26;2337:6;2330:5;2326:18;2319:54;2392:5;2382:15;;2416:57;2469:2;2458:9;2454:18;2416:57;:::i;:::-;2406:67;;;;1183:1296;;;;;:::o;2906:209::-;2938:1;2964;2954:132;;3008:10;3003:3;2999:20;2996:1;2989:31;3043:4;3040:1;3033:15;3071:4;3068:1;3061:15;2954:132;-1:-1:-1;3100:9:167;;2906:209::o;:::-;2497:8785:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x60806040526004361061023b5760003560e01c80638fca1f7b1161012e578063b334ed86116100ab578063d5002f2e1161006f578063d5002f2e14610904578063dbbe807014610919578063ded062311461092c578063e44808bc1461094c578063ed64bab21461096c5761023b565b8063b334ed861461082b578063b4f8da3914610877578063ca6d38f7146108b1578063cba2e58d146108d1578063cbc13434146108e45761023b565b80639cd241af116100f25780639cd241af1461078b578063a22cb465146107ab578063a77384c1146107cb578063ab033ea9146107eb578063b1b4b1701461080b5761023b565b80638fca1f7b146106da5780639032c72614610703578063907c0f92146107235780639aa68462146107385780639bd334981461074b5761023b565b80634ed2d6ac116101bc5780637180c8ca116101805780637180c8ca146105b957806371f88b7c146105d957806377d05ff4146105f95780638120a3e21461060c578063883483971461062c5761023b565b80634ed2d6ac146105055780635a1a3e7c14610525578063680962391461054557806368c2ecb814610565578063702db0eb146105855761023b565b806329b23fc11161020357806329b23fc11461042f57806330adf81f1461045d5780633644e515146104915780633e691db9146104c55780634daa8b8f146104e55761023b565b806302329a291461034b578063074a6de91461036d57806317fad7fc146103a75780631c0f12b6146103c757806322d5506b146103e7575b34801561024757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161028a9291906161cc565b600060405180830381855af49150503d80600081146102c5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ca565b606091505b509150915081156102ee57604051638bb0a34b60e01b815260040160405180910390fd5b60006102f9826161dc565b90506001600160e01b03198116636e64089360e11b1461031b57815160208301fd5b81516003198101600484019081529261033c91810160200190602401616284565b80519650602001945050505050f35b34801561035757600080fd5b5061036b61036636600461634e565b61098c565b005b34801561037957600080fd5b5061038d61038836600461637d565b6109d5565b604080519283526020830191909152015b60405180910390f35b3480156103b357600080fd5b5061036b6103c2366004616429565b610bcf565b3480156103d357600080fd5b5061036b6103e23660046164ba565b610c83565b3480156103f357600080fd5b506104076104023660046164fe565b610c96565b604080519586526020860194909452928401919091526060830152608082015260a00161039e565b34801561043b57600080fd5b5061044f61044a366004616530565b610cbf565b60405190815260200161039e565b34801561046957600080fd5b5061044f7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561049d57600080fd5b5061044f7f000000000000000000000000000000000000000000000000000000000000000081565b3480156104d157600080fd5b5061044f6104e036600461658a565b610f05565b3480156104f157600080fd5b5061038d6105003660046165bf565b611094565b34801561051157600080fd5b5061036b6105203660046165d8565b611104565b34801561053157600080fd5b5061036b6105403660046165bf565b611152565b34801561055157600080fd5b5061036b61056036600461661e565b61115e565b34801561057157600080fd5b5061044f6105803660046165bf565b611309565b34801561059157600080fd5b5061036b6105a0366004616657565b6001600160801b03908116600160801b02911617600855565b3480156105c557600080fd5b5061036b6105d436600461668a565b61131a565b3480156105e557600080fd5b5061038d6105f43660046166c1565b611392565b61044f61060736600461637d565b6113ae565b34801561061857600080fd5b5061036b6106273660046165bf565b61162e565b34801561063857600080fd5b5061036b6106473660046166ff565b805160208201516001600160801b03918216600160801b91831682021760085560408301516060840151908316908316820217600955608083015160a0840151908316908316820217600a5560c083015160e084015190831692160217600b5561010080820151600c80546101209094015161ffff1990941691151561ff00191691909117921515909102919091179055565b3480156106e657600080fd5b506013546001600160801b0380821691600160801b90041661038d565b34801561070f57600080fd5b5061036b61071e3660046167c7565b611637565b34801561072f57600080fd5b5061044f611886565b61044f610746366004616530565b611895565b34801561075757600080fd5b5061076b61076636600461661e565b611b92565b60408051948552602085019390935291830152606082015260800161039e565b34801561079757600080fd5b5061036b6107a6366004616843565b611bb2565b3480156107b757600080fd5b5061036b6107c636600461668a565b611bbe565b3480156107d757600080fd5b5061036b6107e63660046165bf565b601455565b3480156107f757600080fd5b5061036b610806366004616878565b611c2a565b34801561081757600080fd5b5061044f6108263660046165bf565b611c9e565b34801561083757600080fd5b5061085f7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161039e565b34801561088357600080fd5b5061036b610892366004616893565b600980546001600160801b03928316600160801b029216919091179055565b3480156108bd57600080fd5b5061044f6108cc3660046165bf565b611ca9565b61038d6108df366004616530565b611cb4565b3480156108f057600080fd5b5061038d6108ff36600461637d565b611ed5565b34801561091057600080fd5b5060145461044f565b61038d610927366004616530565b6120d1565b34801561093857600080fd5b5061044f610947366004616530565b612305565b34801561095857600080fd5b5061036b6109673660046168ae565b612534565b34801561097857600080fd5b5061036b6109873660046165bf565b612584565b336000908152600f602052604090205460ff166109bb576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b600080600054600114610a035760405162461bcd60e51b81526004016109fa90616905565b60405180910390fd5b60026000908155610a1261268e565b9050610a25610a1f61278d565b826127c3565b50610a2f81612aaf565b600d548692506001600160801b031680831115610a5357806001600160801b031692505b82600003610a6957600080935093505050610bc0565b610a78600360f81b3385612b72565b600d546001600160801b03600160801b909104811690600090610aa090869084908616612c1b565b9050610aab85612c39565b610ab5908461693f565b600d80546001600160801b0319166001600160801b0392909216919091179055610ade81612c39565b600d8054601090610b00908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610b2e8188612c63565b955085610b3b8987612f4f565b1115610b5a5760405163c972651760e01b815260040160405180910390fd5b610b676020880188616878565b6001600160a01b03167f7986a4c20efd1390450c45fb0b11e794754bdce25f47ab5488efc8104169f75486610b9c8488612f4f565b604080519283526020830191909152810187905260600160405180910390a2505050505b60016000559094909350915050565b6001600160a01b0386161580610bec57506001600160a01b038516155b15610c0a5760405163f0dd15fd60e01b815260040160405180910390fd5b828114610c2a5760405163174861a760e31b815260040160405180910390fd5b60005b83811015610c7a57610c72858583818110610c4a57610c4a616966565b905060200201358888868686818110610c6557610c65616966565b9050602002013533612f6b565b600101610c2d565b50505050505050565b610c908484848433612f6b565b50505050565b6000806000806000610caa8989898961312c565b939d929c50909a509850909650945050505050565b60008054600114610ce25760405162461bcd60e51b81526004016109fa90616905565b60026000557f0000000000000000000000000000000000000000000000000000000000000000841015610d285760405163211ddda360e11b815260040160405180910390fd5b6000610d3261268e565b9050610d3e86826127c3565b50610d54610d4d600288613236565b3387612b72565b600080600080600080610d688b888e61326b565b949a509298509096509450925090508a8c8842821115610e39578360106000828254610d94919061697c565b90915550610da79050838a8988866134df565b6000610dd37f00000000000000000000000000000000000000000000000000000000000000008461698f565b6000818152600e6020526040812054919250600160801b909104600f0b90610e069086908a908e908d9089908990613659565b6000828152600e6020526040902054610e2d90600f83810b91600160801b9004900b613802565b610e3683612aaf565b50505b6000610e45898e612c63565b90508c6000610e55838e84613929565b90508f811015610e785760405163c972651760e01b815260040160405180910390fd5b610e83600286613236565b8f6000016020810190610e969190616878565b6040805188815260208101859052908101879052606081018990526001600160a01b0391909116907f32f37298489a8da0fde394937191ad6035015dd8a04bc97c304d59858e3bfd679060800160405180910390a3505060016000559f9e505050505050505050505050505050565b60008054600114610f285760405162461bcd60e51b81526004016109fa90616905565b60026000556001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016610f646020840184616878565b6001600160a01b031614610f8b57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600f602052604090205460ff16158015610fd45750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610feb57506011546001600160a01b03163314155b15611008576040516282b42960e81b815260040160405180910390fd5b60108054600090915561101b8184612c63565b91507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa766eca44ec2dc18727bd04ada80599917cad7a27cf6a765026b2f1d0ce5c4ee8361107161268e565b6040805192835260208301919091520160405180910390a2506001600055919050565b600080601283815481106110aa576110aa616966565b9060005260206000200160000160049054906101000a90046001600160e01b03166001600160e01b0316601284815481106110e7576110e7616966565b600091825260209091200154909463ffffffff9091169350915050565b8361110e81613959565b6001600160a01b0316336001600160a01b03161461113f57604051632aab8bd360e01b815260040160405180910390fd5b61114b85858585613a16565b5050505050565b61115b81613a83565b50565b6040516370a0823160e01b81523060048201526000906111f4906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156111c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ed91906169a2565b8385613bdd565b915050600081131561127c576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b15801561126857600080fd5b505af1158015610c7a573d6000803e3d6000fd5b6000811215611304576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac306112be846169bb565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b15801561126857600080fd5b505050565b600061131482613c77565b92915050565b6011546001600160a01b03163314611344576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6000806113a0858585613cc8565b90925090505b935093915050565b600080546001146113d15760405162461bcd60e51b81526004016109fa90616905565b60026000556113de613d48565b600c5460ff161561140257604051637983c05160e01b815260040160405180910390fd5b60008061140f8685613db5565b909250905061143f7f000000000000000000000000000000000000000000000000000000000000000060026169d7565b82101561145f57604051632afb507160e21b815260040160405180910390fd5b61148a7f000000000000000000000000000000000000000000000000000000000000000060026169d7565b611494908361698f565b600c805460ff1916600117905592506114ac82612c39565b600880546001600160801b0319166001600160801b039290921691909117905561154161153c837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006140a2565b612c39565b600880546001600160801b03928316600160801b02921691909117905561158a6000807f0000000000000000000000000000000000000000000000000000000000000000614104565b6115a2600061159c6020870187616878565b85614104565b6115ad610a1f61278d565b5060006115bb878387613929565b90506115ca6020860186616878565b6040805186815260208101849052908101849052606081018890526001600160a01b0391909116907fd93ddcd36a9d44373680f40bd3bcafe3c7e738748e10c90213e70453cff442319060800160405180910390a250505060016000559392505050565b61115b816141a4565b834211156116585760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b03871661167f5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156117ab573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146117e957604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600760205260408120805490919061180f906169ee565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b600061189061278d565b905090565b600080546001146118b85760405162461bcd60e51b81526004016109fa90616905565b6002600055600c54610100900460ff16156118e6576040516313d0ff5960e31b815260040160405180910390fd5b6118ee613d48565b7f000000000000000000000000000000000000000000000000000000000000000085101561192f5760405163211ddda360e11b815260040160405180910390fd5b60006119b761193c614326565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000614347565b9050848110806119c657508381115b156119e457604051633b61151160e11b815260040160405180910390fd5b6000806119f18886613db5565b91509150611a00610a1f61278d565b50600d54600360f81b60009081526002602052600080516020616b3f833981519152549091611a3a916001600160801b039091169061698f565b60008080526002602052600080516020616b5f8339815191525491925090611a6390839061697c565b90506000806000611a7386614382565b9050611a7e816144e8565b9150611a89876141a4565b6008546001600160801b038082168352600954600f0b6020840152600160801b909104166040820152611abb816144e8565b9250611ad38483611acc818761698f565b9190612c1b565b9850611aef90506000611ae960208c018c616878565b8a614104565b611af885612aaf565b60008315611b0f57611b0a8285614756565b611b12565b60005b9050611b2160208b018b616878565b6001600160a01b03167fd92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e502396098a611b568a8a612f4f565b60408051928352602083019190915281018990526060810184905260800160405180910390a25050600160005550949998505050505050505050565b600080600080611ba2868661476b565b9299919850965090945092505050565b61130483838333613a16565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6011546001600160a01b03163314611c54576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b60006113148261488f565b600061131482614938565b600080600054600114611cd95760405162461bcd60e51b81526004016109fa90616905565b6002600055600c54610100900460ff1615611d07576040516313d0ff5960e31b815260040160405180910390fd5b611d0f613d48565b600080611d1c8886613db5565b915091506000611d2d898388613929565b90507f0000000000000000000000000000000000000000000000000000000000000000811015611d705760405163211ddda360e11b815260040160405180910390fd5b86821015611d91576040516342af972b60e01b815260040160405180910390fd5b6000611d9b61278d565b9050611da781846127c3565b506000806000611db7878761476b565b909a5091945092509050878c1115611de25760405163c972651760e01b815260040160405180910390fd5b8060106000828254611df4919061697c565b90915550611e2490507f00000000000000000000000000000000000000000000000000000000000000008561697c565b9850611e3483898489888e6149ae565b6000611e4160018b613236565b9050611e5a81611e5460208e018e616878565b8b614104565b80611e6860208d018d616878565b604080518d8152602081018a90529081018a9052606081018c90526001600160a01b0391909116907f8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda6869060800160405180910390a350505050505050506001600055909590945092505050565b600080600054600114611efa5760405162461bcd60e51b81526004016109fa90616905565b60026000557f0000000000000000000000000000000000000000000000000000000000000000851015611f405760405163211ddda360e11b815260040160405180910390fd5b6000611f4a61268e565b9050611f57610a1f61278d565b50611f6181612aaf565b6002602052600080516020616b5f83398151915254600d54600360f81b6000908152600080516020616b3f833981519152549091611faa916001600160801b039091169061698f565b90506000611fb8828461697c565b9050611fc66000338b612b72565b600080611fd68b87858888614b9c565b9098509092509050611ff9600360f81b611ff360208c018c616878565b89614104565b612003828a612c63565b9750600061201289888c613929565b9050888b11156120355760405163c972651760e01b815260040160405180910390fd5b6000841561204c576120478386614756565b61204f565b60005b905061205e60208c018c616878565b604080518f8152602081018590529081018a9052606081018b9052608081018390526001600160a01b0391909116907fae97bda5fb1ee457c0490e5804bc10c54ab31a1fd9b01e2f85a1855072150be89060a00160405180910390a2505050505050505060016000559094909350915050565b6000806000546001146120f65760405162461bcd60e51b81526004016109fa90616905565b6002600055600c54610100900460ff1615612124576040516313d0ff5960e31b815260040160405180910390fd5b61212c613d48565b7f000000000000000000000000000000000000000000000000000000000000000086101561216d5760405163211ddda360e11b815260040160405180910390fd5b600061217761268e565b90508481101561219a576040516342af972b60e01b815260040160405180910390fd5b60006121a461278d565b905060006121b282846127c3565b905060006121e07f00000000000000000000000000000000000000000000000000000000000000008461697c565b905060008060006121f28d8887614c9e565b909450909250905061220582888c614dd4565b91508060106000828254612219919061697c565b909155505050808b10156122405760405163c972651760e01b815260040160405180910390fd5b600061224c828b613db5565b50905061225b8d848987614dfc565b6000612268600286613236565b90508d6122828261227c60208f018f616878565b83614104565b8161229060208e018e616878565b6001600160a01b03167f80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef95886122c5878e612f4f565b60408051928352602083019190915281018d90526060810185905260800160405180910390a35050600160005550919b919a509098505050505050505050565b600080546001146123285760405162461bcd60e51b81526004016109fa90616905565b60026000557f000000000000000000000000000000000000000000000000000000000000000084101561236e5760405163211ddda360e11b815260040160405180910390fd5b600061237861268e565b905061238486826127c3565b50612393610d4d600188613236565b6000806000806000806123a78b888e61503a565b95509550955095509550955060008c90508c4210156124705781601060008282546123d2919061697c565b909155506123e590508c888786856151b6565b60006124117f00000000000000000000000000000000000000000000000000000000000000008361698f565b6000818152600e6020526040902054909150600160801b9004600f0b61243d8e878b8a878f6001613659565b6000828152600e602052604090205461246490600f83810b91600160801b9004900b613802565b61246d8a612aaf565b50505b600061247c878c612c63565b9050600061248b828b8e613929565b9050808d11156124ae5760405163c972651760e01b815260040160405180910390fd5b8d6124ba600185613236565b6124c760208f018f616878565b60408051878152602081018690529081018e9052606081018490526001600160a01b0391909116907f4c68e40241b8ae371bc7dae7035400158b60d0b7d69b35477b693759bb2c0ca09060800160405180910390a3505060016000559d9c50505050505050505050505050565b8461253e81613959565b6001600160a01b0316336001600160a01b03161461256f57604051632aab8bd360e01b815260040160405180910390fd5b61257c8686868686612f6b565b505050505050565b6000818152600e60205260409020546001600160801b0316156125a45750565b60006125ae61278d565b90506125da7f000000000000000000000000000000000000000000000000000000000000000083616a1d565b1515806125e657508181105b156126045760405163ecd29e8160e01b815260040160405180910390fd5b80820361261c576113048161261761268e565b6127c3565b815b6000818152600e60205260409020546001600160801b03168282036126485761264561268e565b90505b80156126585761114b84826127c3565b506126837f00000000000000000000000000000000000000000000000000000000000000008261697c565b905061261e565b5050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016126dd575047612768565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612741573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061276591906169a2565b90505b601454600003612779576000612787565b601454612787908290614756565b91505090565b60006127b97f000000000000000000000000000000000000000000000000000000000000000042616a1d565b611890904261698f565b6000828152600e6020526040812080546001600160801b03161515806127e857504284115b156127fe57546001600160801b03169050611314565b61280783612c39565b81546001600160801b0319166001600160801b03919091161781556000600e816128517f00000000000000000000000000000000000000000000000000000000000000008861698f565b815260208101919091526040016000908120546001600160801b0316915061287a600287613236565b60008181526002602052604081205491925081156128d3576000806128a2848a886000615383565b9150915080601060008282546128b8919061697c565b909155506128cc905084600084808e6134df565b6001925050505b60006128e060018a613236565b600081815260026020526040902054909150801561293b57600080612908838c8a6001615383565b91509150806010600082825461291e919061697c565b909155508c90506129338460008580856151b6565b600195505050505b82156129b957600061296d7f00000000000000000000000000000000000000000000000000000000000000008c61698f565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b926129ad928492919004900b613802565b6129b68b612aaf565b50505b6000808a116129c95760006129e4565b6129e48a6129de6129d98d614382565b6144e8565b90612f4f565b600d546002602052600080516020616b3f833981519152546000808052600080516020616b5f83398151915254939450926001600160801b0390921691612a2b919061697c565b612a35919061698f565b905060008115612a4e57612a498383614756565b612a51565b60005b604080518e8152602081018a9052908101869052606081018290529091508d907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a250999b9a5050505050505050505050565b6002602052600080516020616b5f83398151915254600d54600360f81b6000908152600080516020616b3f833981519152549091612af8916001600160801b039091169061698f565b90506000612b06828461697c565b90506000612b166129d986614382565b90506000612b25858385612c1b565b9050600080612b338861488f565b905082811115612b4a57612b47838261698f565b91505b6000821180612b57575083155b15612b6857612b6882858789615451565b5050505050505050565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612ba490849061698f565b909155505060008381526002602052604081208054839290612bc790849061698f565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6000826000190484118302158202612c3257600080fd5b5091020490565b6000600160801b8210612c5f57604051630f0af95160e11b815260040160405180910390fd5b5090565b60006014548311612c745782612c78565b6014545b9250600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612cc8575047612d53565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612d2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d5091906169a2565b90505b601454600003612d64576000612d83565b612d83612d7c6014548361475690919063ffffffff16565b8590612f4f565b91508360146000828254612d97919061698f565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601612e4b57612df16020850185616878565b6001600160a01b03168360405160006040518083038185875af1925050503d8060008114612e3b576040519150601f19603f3d011682016040523d82523d6000602084013e612e40565b606091505b505080915050612efb565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb612e876020870187616878565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018690526044016020604051808303816000875af1158015612ed4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ef89190616a31565b90505b80612f19576040516312171d8360e31b815260040160405180910390fd5b612f29604085016020860161634e565b612f4457612f3f612f3861268e565b8490614756565b612f46565b825b95945050505050565b6000612f648383670de0b6b3a7640000612c1b565b9392505050565b6001600160a01b0384161580612f8857506001600160a01b038316155b15612fa65760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b03161461306a576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff1661306a5760008581526004602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146130685760008681526004602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061306290849061698f565b90915550505b505b60008581526001602090815260408083206001600160a01b03881684529091528120805484929061309c90849061698f565b909155505060008581526001602090815260408083206001600160a01b0387168452909152812080548492906130d390849061697c565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000808080806131778887611acc8c6129de6131508d670de0b6b3a764000061698f565b7f000000000000000000000000000000000000000000000000000000000000000090612f4f565b94506131a3857f0000000000000000000000000000000000000000000000000000000000000000612f4f565b925060006131c46131bc8a670de0b6b3a764000061698f565b8b9089612c1b565b90506131f0817f0000000000000000000000000000000000000000000000000000000000000000612f4f565b945061321c857f0000000000000000000000000000000000000000000000000000000000000000612f4f565b9250613228838561697c565b915050945094509450945094565b60006001600160f81b038211156132605760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080600080600080600061327f88613c77565b90506132e961328c614326565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f000000000000000000000000000000000000000000000000000000000000000061553a565b9098509550935060006133576132fd614326565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006155aa565b905061338d8589613388847f00000000000000000000000000000000000000000000000000000000000000006155bb565b6155eb565b156133ab5760405163512095c760e01b815260040160405180910390fd5b6133b481613a83565b8a8a600080806133c68588888761312c565b9b5092955090935091506133dc9050818461698f565b6133e6908b61697c565b99506133f2828461697c565b6133fc908c61697c565b9a50505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a613437919061698f565b815260208101919091526040016000908120546001600160801b03169150428911613479576000898152600e60205260409020546001600160801b031661347b565b895b90506134ab8b8784848e7f0000000000000000000000000000000000000000000000000000000000000000615674565b96506134b7838761698f565b95506134c987878786868660006156c6565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b031661352861153c8261350b85670de0b6b3a76400006169d7565b600b54600160801b90046001600160801b031691908a6000615741565b600b80546001600160801b03928316600160801b02921691909117905561354e86612c39565b613558908261693f565b600a80546001600160801b03928316600160801b0292169190911790555061357f83612c39565b6008805460009061359a9084906001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506135c7826157bb565b600980546000906135dc908490600f0b616a6e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061360c84612c39565b6008805460109061362e908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b60006136857f00000000000000000000000000000000000000000000000000000000000000008561698f565b9050600060026000613698600188613236565b81526020019081526020016000205490506000600260006136ba600289613236565b81526020019081526020016000205490508160001480156136d9575080155b156136fe576000838152600e6020526040902080546001600160801b031690556137f6565b60006137428b61370e8c89612f4f565b6137199060026169d7565b8b6137248c8b612f4f565b61372e919061697c565b613738919061698f565b61153c919061697c565b905084156137a1576000848152600e602052604090208054829190601090613775908490600160801b9004600f0b616a9b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506137f4565b6000848152600e6020526040902080548291906010906137cc908490600160801b9004600f0b616a6e565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b505b50505050505050505050565b8082138015613812575060008212155b156138a557600061382382826157f9565b61382d9084616ac8565b60095490915061385a90613855908390600160801b90046001600160801b0316600f0b61580f565b6157bb565b6009805460109061387c908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b8181131561268a576000821261391b576138be826157bb565b6138c7826157bb565b6138d19190616a9b565b600980546010906138f3908490600160801b90046001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b6138d16138558260006157f9565b600061393b604083016020840161634e565b15613947575082612f64565b6139518484612f4f565b949350505050565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6013546001600160801b03600160801b82048116911642613ac47f00000000000000000000000000000000000000000000000000000000000000008461697c565b1115613acf57505050565b600060128281548110613ae457613ae4616966565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b031690613b18834261698f565b601254909150878202830190600090613b3288600161697c565b613b3c9190616a1d565b905060405180604001604052804263ffffffff168152602001836001600160e01b031681525060128281548110613b7557613b75616966565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b60008080613bef846301e13380614756565b90506000613c0e8260008812613c0557876129de565b6129de886169bb565b90506000861315613c4157613c2c613c258261581e565b8890612f4f565b9350613c38878561698f565b925050506113a6565b6000861215613c6957613c5d613c568261581e565b8890614756565b9350613c388785616ac8565b509495600095509350505050565b600080613c8261278d565b9050808311613c92576000613c9c565b613c9c818461698f565b9150612f64827f0000000000000000000000000000000000000000000000000000000000000000614756565b600080613d12856129de85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000613d08818c614756565b6129de919061698f565b9150613d3e827f0000000000000000000000000000000000000000000000000000000000000000612f4f565b9050935093915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14801590613d955750600034115b15613db357604051631574f9f360e01b815260040160405180910390fd5b565b60008080613dc9604085016020860161634e565b613de457613ddf613dd861268e565b8690612f4f565b613de6565b845b90506000600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613eb45747915082341015613e55576040516312171d8360e31b815260040160405180910390fd5b82341115613eaf5733613e68843461698f565b604051600081818185875af1925050503d8060008114613ea4576040519150601f19603f3d011682016040523d82523d6000602084013e613ea9565b606091505b50909150505b613fd9565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015613f18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613f3c91906169a2565b6040516323b872dd60e01b8152336004820152306024820152604481018590529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015613fb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613fd69190616a31565b90505b80613ff7576040516312171d8360e31b815260040160405180910390fd5b60145460000361405e5761402b837f0000000000000000000000000000000000000000000000000000000000000000614756565b601481905594507f0000000000000000000000000000000000000000000000000000000000000000935061409b92505050565b60145460009061406f908585612c1b565b90508060146000828254614083919061697c565b9091555081905061409261268e565b95509550505050505b9250929050565b6000806140b3846301e13380614756565b90506140f96140ef6140cd670de0b6b3a7640000866159a9565b6140d78885612f4f565b6140e990670de0b6b3a764000061697c565b906159be565b6129de888a612f4f565b979650505050505050565b60008381526001602090815260408083206001600160a01b03861684529091528120805483929061413690849061697c565b90915550506000838152600260205260408120805483929061415990849061697c565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612c0e565b806000036141af5750565b6008546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156141fc5760405163585fe6df60e11b815260040160405180910390fd5b60006142088383616ae8565b90507f000000000000000000000000000000000000000000000000000000000000000081121561424b5760405163585fe6df60e11b815260040160405180910390fd5b61425481612c39565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b8181126142965761428f838286612c1b565b91506142b6565b6142aa6142a2826169bb565b849086612c1b565b6142b3906169bb565b91505b6142bf826157bb565b600980546001600160801b0319166001600160801b039283161790556008546143029161153c91600160801b9004166142f88785615a15565b611acc8787615a15565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600854600954600091611890916001600160801b0390911690600f0b615a15565b600080614356878787866155aa565b90506140f961436a82866301e13380615a32565b61437c83670de0b6b3a764000061698f565b90614756565b6143df60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b5490916101008301916144ae9116614938565b8152600a546001600160801b03600160801b9182900481166020840152600b546040909301926144e092900416614938565b905292915050565b600080614508836101400151846101200151612f4f90919063ffffffff16565b61010084015160e085015161451c91612f4f565b6145269190616ac8565b9050600061453c84600001518560200151615a15565b905060008213156145dc57600061457e8286604001518760a001518860c00151670de0b6b3a764000061456f919061698f565b89606001518a60800151615a58565b905061458a8184615af2565b905080156145d6576145c3828660400151838860c00151670de0b6b3a76400006145b4919061698f565b89606001518a60800151615b01565b855186906145d290839061698f565b9052505b50614698565b6000821215614698576145ee826169bb565b915060006146228286604001518760c00151670de0b6b3a7640000614613919061698f565b88606001518960800151615b35565b905061462e8184615af2565b9050801561467a57614667828660400151838860c00151670de0b6b3a7640000614658919061698f565b89606001518a60800151615bcb565b8551869061467690839061697c565b9052505b614684818461698f565b8551869061469390839061697c565b905250505b60006146c7856101000151670de0b6b3a76400006146b6919061698f565b606087015160e08801519190612c1b565b6146f5866101400151670de0b6b3a76400006146e3919061698f565b60608801516101208901519190612c1b565b6146ff9190616ac8565b905060008186600001516147139190616ae8565b90508560a0015181121561473a5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a086015161474c908261698f565b9695505050505050565b6000612f6483670de0b6b3a764000084612c1b565b6000806000806147d861477c614326565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000615c60565b925060006147e76132fd614326565b90506148188785613388847f0000000000000000000000000000000000000000000000000000000000000000615c81565b156148365760405163512095c760e01b815260040160405180910390fd5b61483f81613a83565b60008061484d89848a613cc8565b909250905061485c828761698f565b9450614868818661697c565b955061487581848a612c1b565b9350614881848a61698f565b965050505092959194509250565b60095460009081906148b190600160801b90046001600160801b031684614756565b90506148dd7f00000000000000000000000000000000000000000000000000000000000000008261697c565b6008546001600160801b03161115614932576008547f0000000000000000000000000000000000000000000000000000000000000000906149289083906001600160801b031661698f565b612f64919061698f565b50919050565b600080670de0b6b3a764000061494c61278d565b61495691906169d7565b9050808311614966576000614970565b614970818461698f565b9150612f646149a7670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006169d7565b8390614756565b600a546001600160801b03166149e961153c826149d385670de0b6b3a76400006169d7565b600b546001600160801b031691908a6001615741565b600b80546001600160801b0319166001600160801b0392909216919091179055614a1287612c39565b60088054600090614a2d9084906001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614a5a85612c39565b60088054601090614a7c908490600160801b90046001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614aa986612c39565b614ab39082616a4e565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b90614b0f614afa8b89612f4f565b614b058b60026169d7565b61153c919061698f565b835490915081908490601090614b30908490600160801b9004600f0b616a6e565b82546001600160801b039182166101009390930a9283029190920219909116179055508254614b6d90600f84810b91600160801b9004900b613802565b614b7687615cce565b614b93576040516318846de960e01b815260040160405180910390fd5b6137f687612aaf565b600080600080614bab88614382565b90506000614bb8826144e8565b9050614bca614bc561268e565b61488f565b9450614bd7858b89612c1b565b9450614bea614be5866169bb565b6141a4565b6008546001600160801b038082168452600954600f0b6020850152600160801b9091041660408301526000614c1e836144e8565b90506000614c2d8a8385612c1b565b9050614c398c8b616ac8565b614c439082616ac8565b90506000811215614c8c576000614c64614c5c836169bb565b85908d612c1b565b9050614c70818961698f565b9750614c7b816141a4565b614c86818a8e615d40565b60009150505b94509092505050955095509592505050565b6000806000614d0a614cae614326565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000615d85565b915085614d178387612f4f565b1115614d365760405163512095c760e01b815260040160405180910390fd5b6000614d436132fd614326565b9050614d4e81613a83565b600080614d6589670de0b6b3a7640000858b61312c565b509294509250614d7991508290508361698f565b614d83908661698f565b9450614dc589614d93838861698f565b89614d9e8c82615da6565b8c7f0000000000000000000000000000000000000000000000000000000000000000615674565b95509250505093509350939050565b6000614de6604083016020840161634e565b15614df5576139518484612f4f565b5082612f64565b600a54614e469061153c90600160801b90046001600160801b0316614e2984670de0b6b3a76400006169d7565b600b54600160801b90046001600160801b03169190886001615741565b600b80546001600160801b03928316600160801b0292169190911790556000614e6e84612c39565b600854614e8491906001600160801b031661693f565b600880546001600160801b0319166001600160801b0383161790559050614eaa85612c39565b60088054601090614ecc908490600160801b90046001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614ef985612c39565b600a8054601090614f1b908490600160801b90046001600160801b0316616a4e565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b911612159050614f6a5760405163585fe6df60e11b815260040160405180910390fd5b6000614f7461278d565b6000818152600e6020526040902054909150600160801b9004600f0b614f9987612c39565b6000838152600e602052604090208054601090614fc1908490600160801b9004600f0b616a9b565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e602052604090205461500b90600f83810b91600160801b9004900b613802565b61501485615cce565b615031576040516318846de960e01b815260040160405180910390fd5b610c7a85612aaf565b600080600080600080600061504e88613c77565b90506150b861505b614326565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000615db5565b9098509650935060006150cc6132fd614326565b90506150d781613a83565b6000806150e68d85858f61312c565b98509294509092506150fc91508390508861698f565b9650615108818361697c565b615112908a61698f565b985061511e858a61697c565b9750505050506151a285858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e61515b919061698f565b81526020810191909152604001600020546001600160801b0316428d116151995760008d8152600e60205260409020546001600160801b031661519b565b8d5b60016156c6565b999d939c50919a5098509695509350505050565b600a546001600160801b03166151f161153c826151db85670de0b6b3a76400006169d7565b600b546001600160801b031691908a6000615741565b600b80546001600160801b0319166001600160801b039290921691909117905561521a86612c39565b615224908261693f565b600a80546001600160801b0319166001600160801b03929092169190911790555061524e83612c39565b600880546000906152699084906001600160801b031661693f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550615296826157bb565b600980546000906152ab908490600f0b616a9b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506152db84612c39565b600880546010906152fd908490600160801b90046001600160801b0316616a4e565b82546101009290920a6001600160801b038181021990931691831602179091556008547f00000000000000000000000000000000000000000000000000000000000000009116109050806153655750600954600854600f9190910b6001600160801b03909116125b1561114b5760405163585fe6df60e11b815260040160405180910390fd5b6000806153908686614756565b915060006153be837f0000000000000000000000000000000000000000000000000000000000000000612f4f565b90506153ea817f0000000000000000000000000000000000000000000000000000000000000000612f4f565b9150831561540d576153fc828261698f565b615406908461698f565b9250615424565b615417828261698f565b615421908461697c565b92505b8486101561544757615437838787612c1b565b9250615444828787612c1b565b91505b5094509492505050565b6000808411615460578261546b565b61546b838686612c1b565b90508060000361547b5750610c90565b80858382111561549657839150615493878385612c1b565b90505b61549f82612c39565b600d80546000906154ba9084906001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506154e781612c39565b600d8054601090615509908490600160801b90046001600160801b0316616a4e565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610c7a81614be5906169bb565b6000808061555b61555388670de0b6b3a764000061698f565b899087612c1b565b90506155678888612f4f565b9150811561559d5761558e8a8a846155878a670de0b6b3a764000061698f565b8989615bcb565b925061559a838261697c565b90505b9750975097945050505050565b6000612f46826140e9858888612c1b565b60006155d96155d284670de0b6b3a764000061698f565b8390615e01565b612f6490670de0b6b3a764000061698f565b600080615669856155fa614326565b615604919061697c565b600854615622908790600160801b90046001600160801b031661698f565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006155aa565b909210949350505050565b60008061568d856156858887615e01565b8a9190612c1b565b905061569a888486612c1b565b6156a4908261697c565b9050868111156156bb576156b8878261698f565b91505b509695505050505050565b600080600080600080888810156157235786156156eb576156e88d898b612c1b565b9c505b6156f68c898b612c1b565b9b506157028b8d616ac8565b905061570f8b898b612c1b565b9a5061571c8a898b612c1b565b9950615730565b61572d8b8d616ac8565b90505b9b9c9a9b999a975050505050505050565b600081156157815761577a615756848761697c565b6157608587612f4f565b61576a888a612f4f565b615774919061697c565b906159a9565b9050612f46565b82850361579057506000612f46565b61474c61579d848761698f565b6157a78587612f4f565b6157b1888a612f4f565b615774919061698f565b600060016001607f1b031982128015906157dc575060016001607f1b038213155b612c5f5760405163a5353be560e01b815260040160405180910390fd5b60008183136158085781612f64565b5090919050565b60008183136149325782612f64565b6000680248ce36a70cb26b3e19821361583957506000919050565b680755bf798b4a1bf1e582126158625760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000612f6483670de0b6b3a764000084615a32565b6000816000036159d75750670de0b6b3a7640000611314565b826000036159e757506000611314565b8160006159f385615e16565b9050818102615a0a670de0b6b3a764000082616b10565b905061474c8161581e565b600080615a228385616ac8565b90506000811215612f6457600080fd5b6000826000190484118302158202615a4957600080fd5b50910281810615159190040190565b600080615a688888878787616029565b90506000615a85615a7d876140e9878b615e01565b869086615a32565b615a8f908361698f565b9050670de0b6b3a76400008110615ac357615abc615ab5670de0b6b3a764000088614756565b82906159be565b9050615adb565b615ad8615ab5670de0b6b3a7640000886159a9565b90505b615ae5888261698f565b9998505050505050505050565b60008183116149325782612f64565b600080615b12888888888888616058565b9092509050806156bb57604051637ac17d2560e01b815260040160405180910390fd5b600080615b45878787878761611a565b90506000615b70670de0b6b3a7640000615b5f8787614756565b615b69919061697c565b83906159a9565b9050670de0b6b3a76400008110615b9d57615b96615ab5670de0b6b3a7640000886159a9565b9050615bb5565b615bb2615ab5670de0b6b3a764000088614756565b90505b615bbf818861698f565b98975050505050505050565b600080615bdb888887878761611a565b9050615beb856140e9888a61698f565b96506000615c058486615bfe8b8661698f565b9190615a32565b9050670de0b6b3a76400008110615c3257615c2b615ab5670de0b6b3a7640000886159a9565b9050615c4a565b615c47615ab5670de0b6b3a764000088614756565b90505b615c5481856159a9565b9050615ae5898261698f565b60006140f9878787615c7a88670de0b6b3a764000061698f565b878761613f565b6000612f64615cad670de0b6b3a7640000615c9c81876159a9565b615ca6919061698f565b8490615e01565b615cbf90670de0b6b3a764000061697c565b670de0b6b3a764000090614756565b6000615cfa7f000000000000000000000000000000000000000000000000000000000000000083612f4f565b600954600854615d38916000916001600160801b03600160801b9092048216600f0b91615d28911687612f4f565b615d329190616ac8565b906157f9565b121592915050565b6000615d4e6129d983614382565b60008080526002602052600080516020616b5f8339815191525491925090615d7790859061697c565b905061114b85838387615451565b60006140f9878787615d9f88670de0b6b3a764000061698f565b8787615b01565b60008183116158085781612f64565b60008080615dce61555388670de0b6b3a764000061698f565b9050861561559d57615de08888612f4f565b915061558e8a8a84615dfa8a670de0b6b3a764000061698f565b8989615b01565b6000612f648383670de0b6b3a7640000615a32565b6000808213615e3857604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b600061603585856159be565b61604e616046866140e9868b612f4f565b859085612c1b565b61474c919061697c565b600080600061606a898988888861611a565b905061607a866140e9898b61697c565b97508781101561609157600080925092505061610f565b60006160a28587615bfe8c8661698f565b9050670de0b6b3a764000081106160cf576160c8615ab5670de0b6b3a7640000896159a9565b90506160e7565b6160e4615ab5670de0b6b3a764000089614756565b90505b6160f181866159a9565b9050808a111561610857616105818b61698f565b93505b6001925050505b965096945050505050565b600061612685856159be565b61604e616137866140e9868b615e01565b859085615a32565b60008061614f888887878761611a565b9050616162856140e9613dd8898c61697c565b975061616f848985612c1b565b9750600061617d898361698f565b9050670de0b6b3a764000081106161aa576161a3615ab5670de0b6b3a7640000886159a9565b90506161c2565b6161bf615ab5670de0b6b3a764000088614756565b90505b615ae5818961698f565b8183823760009101908152919050565b805160208201516001600160e01b0319808216929190600483101561620b5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561624d5761624d616213565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561627c5761627c616213565b604052919050565b6000602080838503121561629757600080fd5b825167ffffffffffffffff808211156162af57600080fd5b818501915085601f8301126162c357600080fd5b8151818111156162d5576162d5616213565b6162e7601f8201601f19168501616253565b915080825286848285010111156162fd57600080fd5b60005b8181101561631b578381018501518382018601528401616300565b50600090820190930192909252509392505050565b801515811461115b57600080fd5b803561634981616330565b919050565b60006020828403121561636057600080fd5b8135612f6481616330565b60006060828403121561493257600080fd5b60008060006060848603121561639257600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156163b757600080fd5b6163c38682870161636b565b9150509250925092565b80356001600160a01b038116811461634957600080fd5b60008083601f8401126163f657600080fd5b50813567ffffffffffffffff81111561640e57600080fd5b6020830191508360208260051b850101111561409b57600080fd5b6000806000806000806080878903121561644257600080fd5b61644b876163cd565b9550616459602088016163cd565b9450604087013567ffffffffffffffff8082111561647657600080fd5b6164828a838b016163e4565b9096509450606089013591508082111561649b57600080fd5b506164a889828a016163e4565b979a9699509497509295939492505050565b600080600080608085870312156164d057600080fd5b843593506164e0602086016163cd565b92506164ee604086016163cd565b9396929550929360600135925050565b6000806000806080858703121561651457600080fd5b5050823594602084013594506040840135936060013592509050565b6000806000806080858703121561654657600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561657257600080fd5b61657e8782880161636b565b91505092959194509250565b60006020828403121561659c57600080fd5b813567ffffffffffffffff8111156165b357600080fd5b6139518482850161636b565b6000602082840312156165d157600080fd5b5035919050565b600080600080608085870312156165ee57600080fd5b843593506165fe602086016163cd565b925060408501359150616613606086016163cd565b905092959194509250565b6000806040838503121561663157600080fd5b50508035926020909101359150565b80356001600160801b038116811461634957600080fd5b6000806040838503121561666a57600080fd5b61667383616640565b915061668160208401616640565b90509250929050565b6000806040838503121561669d57600080fd5b6166a6836163cd565b915060208301356166b681616330565b809150509250929050565b6000806000606084860312156166d657600080fd5b505081359360208301359350604090920135919050565b8035600f81900b811461634957600080fd5b6000610140828403121561671257600080fd5b61671a616229565b61672383616640565b815261673160208401616640565b6020820152616742604084016166ed565b604082015261675360608401616640565b606082015261676460808401616640565b608082015261677560a08401616640565b60a082015261678660c08401616640565b60c082015261679760e08401616640565b60e08201526101006167aa81850161633e565b908201526101206167bc84820161633e565b908201529392505050565b600080600080600080600060e0888a0312156167e257600080fd5b6167eb886163cd565b96506167f9602089016163cd565b9550604088013561680981616330565b945060608801359350608088013560ff8116811461682657600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060006060848603121561685857600080fd5b83359250616868602085016163cd565b9150604084013590509250925092565b60006020828403121561688a57600080fd5b612f64826163cd565b6000602082840312156168a557600080fd5b612f6482616640565b600080600080600060a086880312156168c657600080fd5b853594506168d6602087016163cd565b93506168e4604087016163cd565b9250606086013591506168f9608087016163cd565b90509295509295909350565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6001600160801b0382811682821603908082111561695f5761695f616929565b5092915050565b634e487b7160e01b600052603260045260246000fd5b8082018082111561131457611314616929565b8181038181111561131457611314616929565b6000602082840312156169b457600080fd5b5051919050565b6000600160ff1b82016169d0576169d0616929565b5060000390565b808202811582820484141761131457611314616929565b600060018201616a0057616a00616929565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082616a2c57616a2c616a07565b500690565b600060208284031215616a4357600080fd5b8151612f6481616330565b6001600160801b0381811683821601908082111561695f5761695f616929565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561131457611314616929565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561131457611314616929565b818103600083128015838313168383128216171561695f5761695f616929565b8082018281126000831280158216821582161715616b0857616b08616929565b505092915050565b600082616b1f57616b1f616a07565b600160ff1b821460001984141615616b3957616b39616929565b50059056fe3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba2646970667358221220eda965e5fa99de157c3ca2b64570a81df567b9870f13771fa1c82b816774af0664736f6c63430008130033",
    "sourceMap": "2497:8785:50:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1214:12:0;1481;1495:23;1522:12;-1:-1:-1;;;;;1522:25:0;1561:5;;1522:54;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1480:96;;;;1590:7;1586:76;;;1620:31;;-1:-1:-1;;;1620:31:0;;;;;;;;;;;1586:76;1671:15;1689:18;1696:10;1689:18;:::i;:::-;1671:36;-1:-1:-1;;;;;;;1721:43:0;;-1:-1:-1;;;1721:43:0;1717:160;;1841:10;1835:17;1830:2;1818:10;1814:19;1807:46;1717:160;2099:17;;-1:-1:-1;;2095:25:0;;2118:1;2073:20;;2066:55;;;2073:20;2201:31;;;;;;;;;;:::i;:::-;2497:8785:50;;;-1:-1:-1;2497:8785:50;;;-1:-1:-1;;;;;2497:8785:50;6884:156:2;;;;;;;;;;-1:-1:-1;6884:156:2;;;;;:::i;:::-;;:::i;:::-;;13249:2358:4;;;;;;;;;;-1:-1:-1;13249:2358:4;;;;;:::i;:::-;;:::i;:::-;;;;3525:25:167;;;3581:2;3566:18;;3559:34;;;;3498:18;13249:2358:4;;;;;;;;11164:688:40;;;;;;;;;;-1:-1:-1;11164:688:40;;;;;:::i;:::-;;:::i;4263:249::-;;;;;;;;;;-1:-1:-1;4263:249:40;;;;;:::i;:::-;;:::i;4643:911:50:-;;;;;;;;;;-1:-1:-1;4643:911:50;;;;;:::i;:::-;;:::i;:::-;;;;6132:25:167;;;6188:2;6173:18;;6166:34;;;;6216:18;;;6209:34;;;;6274:2;6259:18;;6252:34;6317:3;6302:19;;6295:35;6119:3;6104:19;4643:911:50;5873:463:167;5353:3775:6;;;;;;;;;;-1:-1:-1;5353:3775:6;;;;;:::i;:::-;;:::i;:::-;;;7053:25:167;;;7041:2;7026:18;5353:3775:6;6907:177:167;1190:174:40;;;;;;;;;;;;1240:124;1190:174;;1044:41;;;;;;;;;;;;;;;7865:907:2;;;;;;;;;;-1:-1:-1;7865:907:2;;;;;:::i;:::-;;:::i;3895:213:50:-;;;;;;;;;;-1:-1:-1;3895:213:50;;;;;:::i;:::-;;:::i;8739:234:40:-;;;;;;;;;;-1:-1:-1;8739:234:40;;;;;:::i;:::-;;:::i;4114:79:50:-;;;;;;;;;;-1:-1:-1;4114:79:50;;;;;:::i;:::-;;:::i;3171:566::-;;;;;;;;;;-1:-1:-1;3171:566:50;;;;;:::i;:::-;;:::i;5971:177::-;;;;;;;;;;-1:-1:-1;5971:177:50;;;;;:::i;:::-;;:::i;6867:184::-;;;;;;;;;;-1:-1:-1;6867:184:50;;;;;:::i;:::-;-1:-1:-1;;;;;7004:40:50;;;-1:-1:-1;;;7004:40:50;6952:42;;7004:40;6952:12;7004:40;6867:184;6167:200:2;;;;;;;;;;-1:-1:-1;6167:200:2;;;;;:::i;:::-;;:::i;4199:438:50:-;;;;;;;;;;-1:-1:-1;4199:438:50;;;;;:::i;:::-;;:::i;1350:3453:4:-;;;;;;:::i;:::-;;:::i;6473:116:50:-;;;;;;;;;;-1:-1:-1;6473:116:50;;;;;:::i;:::-;;:::i;2797:138::-;;;;;;;;;;-1:-1:-1;2797:138:50;;;;;:::i;:::-;2900:28;;;;;;-1:-1:-1;;;;;2900:28:50;;;-1:-1:-1;;;2900:28:50;;;;;;:12;:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2900:28:50;;;;;;-1:-1:-1;;2900:28:50;;;;;;;;;;;;;;;;;2797:138;3743:146;;;;;;;;;;-1:-1:-1;3836:7:50;:12;-1:-1:-1;;;;;3836:12:50;;;;-1:-1:-1;;;3859:21:50;;;3743:146;;12957:1339:40;;;;;;;;;;-1:-1:-1;12957:1339:40;;;;;:::i;:::-;;:::i;6349:118:50:-;;;;;;;;;;;;;:::i;5214:3711:4:-;;;;;;:::i;:::-;;:::i;5603:362:50:-;;;;;;;;;;-1:-1:-1;5603:362:50;;;;;:::i;:::-;;:::i;:::-;;;;12150:25:167;;;12206:2;12191:18;;12184:34;;;;12234:18;;;12227:34;12292:2;12277:18;;12270:34;12137:3;12122:19;5603:362:50;11919:391:167;8073:188:40;;;;;;;;;;-1:-1:-1;8073:188:40;;;;;:::i;:::-;;:::i;7362:308::-;;;;;;;;;;-1:-1:-1;7362:308:40;;;;;:::i;:::-;;:::i;2941:98:50:-;;;;;;;;;;-1:-1:-1;2941:98:50;;;;;:::i;:::-;3006:11;:26;2941:98;6538:194:2;;;;;;;;;;-1:-1:-1;6538:194:2;;;;;:::i;:::-;;:::i;6595:167:50:-;;;;;;;;;;-1:-1:-1;6595:167:50;;;;;:::i;:::-;;:::i;644:37:0:-;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;12997:32:167;;;12979:51;;12967:2;12952:18;644:37:0;12833:203:167;7057:113:50;;;;;;;;;;-1:-1:-1;7057:113:50;;;;;:::i;:::-;7123:25;:40;;-1:-1:-1;;;;;7123:40:50;;;-1:-1:-1;;;7123:40:50;;;;;;;;;7057:113;6154:189;;;;;;;;;;-1:-1:-1;6154:189:50;;;;;:::i;:::-;;:::i;1609:2614:5:-;;;;;;:::i;:::-;;:::i;9953:2560:4:-;;;;;;;;;;-1:-1:-1;9953:2560:4;;;;;:::i;:::-;;:::i;6768:93:50:-;;;;;;;;;;-1:-1:-1;6843:11:50;;6768:93;;1610:3336:6;;;;;;:::i;:::-;;:::i;4632:3419:5:-;;;;;;;;;;-1:-1:-1;4632:3419:5;;;;;:::i;:::-;;:::i;4912:294:40:-;;;;;;;;;;-1:-1:-1;4912:294:40;;;;;:::i;:::-;;:::i;1987:1524:1:-;;;;;;;;;;-1:-1:-1;1987:1524:1;;;;;:::i;:::-;;:::i;6884:156:2:-;6946:10;6937:20;;;;:8;:20;;;;;;;;6932:60;;6966:26;;-1:-1:-1;;;6966:26:2;;;;;;;;;;;6932:60;7002:21;:31;;;;;;;-1:-1:-1;;7002:31:2;;;;;;;;;6884:156::o;13249:2358:4:-;13460:16;13478:32;512:6:103;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:103;;;;;;;:::i;:::-;;;;;;;;;558:1;549:6;:10;;;13580:16:4::1;:14;:16::i;:::-;13559:37;;13606:49;13623:19;:17;:19::i;:::-;13644:10;13606:16;:49::i;:::-;;13780:33;13802:10;13780:21;:33::i;:::-;14097:13;:29:::0;14043:17;;-1:-1:-1;;;;;;14097:29:4::1;14140:43:::0;;::::1;14136:117;;;14226:16;-1:-1:-1::0;;;;;14199:43:4::1;;;14136:117;14266:24;14294:1;14266:29:::0;14262:48:::1;;14305:1;14308::::0;14297:13:::1;;;;;;;;14262:48;14365:125;-1:-1:-1::0;;;14432:10:4::1;14456:24:::0;14365:5:::1;:125::i;:::-;14591:13;:22:::0;-1:-1:-1;;;;;;;;14591:22:4;;::::1;::::0;::::1;::::0;14571:17:::1;::::0;14647:116:::1;::::0;:24;;14591:22;;14647:116;::::1;:35;:116::i;:::-;14623:140;;14901:36;:24;:34;:36::i;:::-;14870:67;::::0;:16;:67:::1;:::i;:::-;14826:13;:111:::0;;-1:-1:-1;;;;;;14826:111:4::1;-1:-1:-1::0;;;;;14826:111:4;;;::::1;::::0;;;::::1;::::0;;14973:25:::1;:13:::0;:23:::1;:25::i;:::-;14947:13;:51:::0;;:22:::1;::::0;:51:::1;::::0;;;-1:-1:-1;;;14947:51:4;::::1;-1:-1:-1::0;;;;;14947:51:4::1;;:::i;:::-;;;;;;;;-1:-1:-1::0;;;;;14947:51:4::1;;;;;-1:-1:-1::0;;;;;14947:51:4::1;;;;;;15053:34;15063:13;15078:8;15053:9;:34::i;:::-;15042:45:::0;-1:-1:-1;15042:45:4;15156:52:::1;:18:::0;15183:24;15156:26:::1;:52::i;:::-;:63;15152:113;;;15240:25;;-1:-1:-1::0;;;15240:25:4::1;;;;;;;;;;;15152:113;15365:20;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;15329:217:4::1;;15399:24:::0;15458:33:::1;:13:::0;15480:10;15458:21:::1;:33::i;:::-;15329:217;::::0;;14719:25:167;;;14775:2;14760:18;;14753:34;;;;14803:18;;14796:34;;;14707:2;14692:18;15329:217:4::1;;;;;;;15557:43;;;;570:1:103;591::::0;582:6;:10;13249:2358:4;;;;-1:-1:-1;13249:2358:4;-1:-1:-1;;13249:2358:4:o;11164:688:40:-;-1:-1:-1;;;;;11374:18:40;;;;:38;;-1:-1:-1;;;;;;11396:16:40;;;11374:38;11370:98;;;11433:35;;-1:-1:-1;;;11433:35:40;;;;;;;;;;;11370:98;11524:27;;;11520:90;;11572:38;;-1:-1:-1;;;11572:38:40;;;;;;;;;;;11520:90;11675:9;11670:176;11690:14;;;11670:176;;;11722:54;11736:3;;11740:1;11736:6;;;;;;;:::i;:::-;;;;;;;11744:4;11750:2;11754:6;;11761:1;11754:9;;;;;;;:::i;:::-;;;;;;;11765:10;11722:13;:54::i;:::-;11818:3;;11670:176;;;;11164:688;;;;;;:::o;4263:249::-;4453:52;4467:7;4476:4;4482:2;4486:6;4494:10;4453:13;:52::i;:::-;4263:249;;;;:::o;4643:911:50:-;4868:21;4903:20;4937:26;4977:25;5016:26;5228:144;5266:10;5290:24;5328:10;5352;5228:24;:144::i;:::-;5067:305;;;;-1:-1:-1;5067:305:50;;-1:-1:-1;5067:305:50;-1:-1:-1;5067:305:50;;-1:-1:-1;4643:911:50;-1:-1:-1;;;;;4643:911:50:o;5353:3775:6:-;5545:7;512:6:103;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:103;;;;;;;:::i;:::-;558:1;549:6;:10;5582:25:6::1;5568:39:::0;::::1;5564:115;;;5630:38;;-1:-1:-1::0;;;5630:38:6::1;;;;;;;;;;;5564:115;5722:18;5743:16;:14;:16::i;:::-;5722:37;;5769:43;5786:13;5801:10;5769:16;:43::i;:::-;;5873:143;5892:65;5914:27;5943:13;5892:21;:65::i;:::-;5971:10;5995:11;5873:5;:143::i;:::-;6224:25;6263:21:::0;6298:26:::1;6338:23:::0;6375:27:::1;6416:26:::0;6455:60:::1;6476:11;6489:10;6501:13;6455:20;:60::i;:::-;6210:305:::0;;-1:-1:-1;6210:305:6;;-1:-1:-1;6210:305:6;;-1:-1:-1;6210:305:6;-1:-1:-1;6210:305:6;-1:-1:-1;6210:305:6;-1:-1:-1;6738:11:6;6813:13;6889:10;6944:15:::1;:30:::0;-1:-1:-1;6940:1242:6::1;;;7062:18;7036:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;7173:197:6::1;::::0;-1:-1:-1;7207:10:6;7235:17;7270:18;7306:20;7344:12;7173:16:::1;:197::i;:::-;7446:22;7471:32;7486:17;7471:12:::0;:32:::1;:::i;:::-;7517:31;7575:28:::0;;;:12:::1;:28;::::0;;;;:41;7446:57;;-1:-1:-1;;;;7575:41:6;;::::1;;;::::0;7644:264:::1;::::0;7698:10;;7726:15;;7759:17;;7794:18;;7830:12;;7860:11;;7644:36:::1;:264::i;:::-;8001:28;::::0;;;:12:::1;:28;::::0;;;;:41;7922:134:::1;::::0;::::1;::::0;;::::1;::::0;-1:-1:-1;;;8001:41:6;::::1;::::0;::::1;7922:19;:134::i;:::-;8137:34;8159:11;8137:21;:34::i;:::-;6976:1206;;6940:1242;8391:16;8410:34;8420:13;8435:8;8410:9;:34::i;:::-;8391:53:::0;-1:-1:-1;8540:8:6;8589:20:::1;8612:101;8391:53:::0;8672:10;8540:8;8612:24:::1;:101::i;:::-;8589:124;;8742:10;8727:12;:25;8723:88;;;8775:25;;-1:-1:-1::0;;;8775:25:6::1;;;;;;;;;;;8723:88;8920:64;8942:27;8971:12;8920:21;:64::i;:::-;8886:8;:20;;;;;;;;;;:::i;:::-;8862:233;::::0;;12150:25:167;;;12206:2;12191:18;;12184:34;;;12234:18;;;12227:34;;;12292:2;12277:18;;12270:34;;;-1:-1:-1;;;;;8862:233:6;;;::::1;::::0;::::1;::::0;12137:3:167;12122:19;8862:233:6::1;;;;;;;-1:-1:-1::0;;591:1:103;582:6;:10;9113:8:6;5353:3775;-1:-1:-1;;;;;;;;;;;;;;;5353:3775:6:o;7865:907:2:-;7979:16;512:6:103;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:103;;;;;;;:::i;:::-;558:1;549:6;:10;-1:-1:-1;;;;;8103:13:2::1;8079:37;:20;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;8079:37:2::1;;8075:110;;8139:35;;-1:-1:-1::0;;;8139:35:2::1;;;;;;;;;;;8075:110;8287:10;8278:20;::::0;;;:8:::1;:20;::::0;;;;;::::1;;8277:21;:64:::0;::::1;;;-1:-1:-1::0;8314:10:2::1;-1:-1:-1::0;;;;;8328:13:2::1;8314:27;;;8277:64;:105;;;;-1:-1:-1::0;8371:11:2::1;::::0;-1:-1:-1;;;;;8371:11:2::1;8357:10;:25;;8277:105;8260:191;;;8414:26;;-1:-1:-1::0;;;8414:26:2::1;;;;;;;;;;;8260:191;8563:22;::::0;;8531:29:::1;8595::::0;;;8645:42:::1;8563:22:::0;8678:8;8645:9:::1;:42::i;:::-;8634:53;;8723:13;-1:-1:-1::0;;;;;8702:63:2::1;;8738:8;8748:16;:14;:16::i;:::-;8702:63;::::0;;3525:25:167;;;3581:2;3566:18;;3559:34;;;;3498:18;8702:63:2::1;;;;;;;-1:-1:-1::0;591:1:103;582:6;:10;7865:907:2;;-1:-1:-1;7865:907:2:o;3895:213:50:-;3967:7;3976;4024;4032:5;4024:14;;;;;;;;:::i;:::-;;;;;;;;:19;;;;;;;;;;-1:-1:-1;;;;;4024:19:50;-1:-1:-1;;;;;4016:28:50;4066:7;4074:5;4066:14;;;;;;;;:::i;:::-;;;;;;;;;;:24;3995:106;;4066:24;;;;;-1:-1:-1;3895:213:50;-1:-1:-1;;3895:213:50:o;8739:234:40:-;8900:7;3063:32;3087:7;3063:23;:32::i;:::-;-1:-1:-1;;;;;3049:46:40;:10;-1:-1:-1;;;;;3049:46:40;;3045:116;;3118:32;;-1:-1:-1;;;3118:32:40;;;;;;;;;;;3045:116;8919:47:::1;8932:7;8941:8;8951:6;8959;8919:12;:47::i;:::-;8739:234:::0;;;;;:::o;4114:79:50:-;4169:17;4181:4;4169:11;:17::i;:::-;4114:79;:::o;3171:566::-;3309:35;;-1:-1:-1;;;3309:35:50;;3338:4;3309:35;;;12979:51:167;3235:15:50;;3254:135;;-1:-1:-1;;;;;3309:10:50;:20;;;;12952:18:167;;3309:35:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3358:3;3375:4;3254:41;:135::i;:::-;3232:157;;;3415:1;3404:8;:12;3400:331;;;3432:119;;-1:-1:-1;;;3432:119:50;;3497:4;3432:119;;;15599:51:167;15666:18;;;15659:34;;;3454:10:50;-1:-1:-1;;;;;3432:39:50;;;;15572:18:167;;3432:119:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3400:331;3583:1;3572:8;:12;3568:163;;;-1:-1:-1;;;;;3622:10:50;3600:39;;3665:4;3696:9;3697:8;3696:9;:::i;:::-;3600:120;;-1:-1:-1;;;;;;3600:120:50;;;;;;;-1:-1:-1;;;;;15617:32:167;;;3600:120:50;;;15599:51:167;15666:18;;;15659:34;15572:18;;3600:120:50;;;;;;;;;;;;;;;;;;;3568:163;3222:515;3171:566;;:::o;5971:177::-;6063:21;6103:38;6127:13;6103:23;:38::i;:::-;6096:45;5971:177;-1:-1:-1;;5971:177:50:o;6167:200:2:-;6249:11;;-1:-1:-1;;;;;6249:11:2;6235:10;:25;6231:64;;6269:26;;-1:-1:-1;;;6269:26:2;;;;;;;;;;;6231:64;-1:-1:-1;;;;;6305:13:2;;;;;;:8;:13;;;;;;:22;;-1:-1:-1;;6305:22:2;;;;;;;6342:18;;;6305:13;6342:18;6167:200;;:::o;4199:438:50:-;4369:21;4392:26;4472:106;4511:9;4534:10;4558;4472:25;:106::i;:::-;4434:144;;-1:-1:-1;4434:144:50;-1:-1:-1;4199:438:50;;;;;;;:::o;1350:3453:4:-;1515:16;512:6:103;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:103;;;;;;;:::i;:::-;558:1;549:6;:10;1610:20:4::1;:18;:20::i;:::-;1706:26:::0;;::::1;;1702:100;;;1755:36;;-1:-1:-1::0;;;1755:36:4::1;;;;;;;;;;;1702:100;1930:19;1951:18:::0;1973:67:::1;1995:13;2022:8;1973;:67::i;:::-;1929:111:::0;;-1:-1:-1;1929:111:4;-1:-1:-1;2965:25:4::1;2969:21;2965:1;:25;:::i;:::-;2951:11;:39;2947:115;;;3013:38;;-1:-1:-1::0;;;3013:38:4::1;;;;;;;;;;;2947:115;3096:25;3100:21;3096:1;:25;:::i;:::-;3082:39;::::0;:11;:39:::1;:::i;:::-;3178:26:::0;:33;;-1:-1:-1;;3178:33:4::1;3207:4;3178:33;::::0;;3071:50;-1:-1:-1;3380:23:4::1;:11:::0;:21:::1;:23::i;:::-;3351:12;:52:::0;;-1:-1:-1;;;;;;3351:52:4::1;-1:-1:-1::0;;;;;3351:52:4;;;::::1;::::0;;;::::1;::::0;;3441:247:::1;:222;3515:11:::0;3544:18:::1;3580:4:::0;3602:17:::1;3637:12;3441:56;:222::i;:::-;:245;:247::i;:::-;3413:12;:275:::0;;-1:-1:-1;;;;;3413:275:4;;::::1;-1:-1:-1::0;;;3413:275:4::1;::::0;::::1;::::0;;;::::1;::::0;;4193:62:::1;3413:25;::::0;4233:21:::1;4193:5;:62::i;:::-;4265:59;554:1:32;4293:20:4;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;4315:8;4265:5;:59::i;:::-;4376:49;4393:19;:17;:19::i;4376:49::-;;4473:24;4500:107;4538:13;4565:10;4589:8;4500:24;:107::i;:::-;4473:134:::0;-1:-1:-1;4646:20:4::1;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;4622:148;::::0;;12150:25:167;;;12206:2;12191:18;;12184:34;;;12234:18;;;12227:34;;;12292:2;12277:18;;12270:34;;;-1:-1:-1;;;;;4622:148:4;;;::::1;::::0;::::1;::::0;12137:3:167;12122:19;4622:148:4::1;;;;;;;4781:15;;;591:1:103::0;582:6;:10;1350:3453:4;;-1:-1:-1;;;1350:3453:4:o;6473:116:50:-;6545:37;6562:19;6545:16;:37::i;12957:1339:40:-;13232:8;13214:15;:26;13210:68;;;13249:29;;-1:-1:-1;;;13249:29:40;;;;;;;;;;;13210:68;-1:-1:-1;;;;;13338:19:40;;13334:67;;13366:35;;-1:-1:-1;;;13366:35:40;;;;;;;;;;;13334:67;-1:-1:-1;;;;;13759:14:40;;;13412:18;13759:14;;;:7;:14;;;;;;;;;13583:246;;1240:124;13583:246;;;16299:25:167;16378:18;;;16371:43;;;;16450:15;;;16430:18;;;16423:43;16509:14;;16502:22;16482:18;;;16475:50;16541:19;;;16534:35;;;;16585:19;;;;16578:35;;;13583:246:40;;;;;;;;;;16271:19:167;;;13583:246:40;;;13552:295;;;;;;;;-1:-1:-1;;;13456:405:40;;;16882:27:167;13518:16:40;16925:11:167;;;16918:27;16961:12;;;16954:28;16998:12;;13456:405:40;;;-1:-1:-1;;13456:405:40;;;;;;;;;13433:438;;13456:405;13433:438;;;;13927:14;13944:30;;;;;;;;;17248:25:167;;;17321:4;17309:17;;17289:18;;;17282:45;;;;17343:18;;;17336:34;;;17386:18;;;17379:34;;;13433:438:40;;-1:-1:-1;13927:14:40;13944:30;;17220:19:167;;13944:30:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13927:47;;13998:5;-1:-1:-1;;;;;13988:15:40;:6;-1:-1:-1;;;;;13988:15:40;;13984:58;;14012:30;;-1:-1:-1;;;14012:30:40;;;;;;;;;;;13984:58;-1:-1:-1;;;;;14096:14:40;;;;;;:7;:14;;;;;14094:16;;14096:14;;;14094:16;;;:::i;:::-;;;;-1:-1:-1;;;;;;14145:24:40;;;;;;;:17;:24;;;;;;;;:33;;;;;;;;;;;;;:45;;-1:-1:-1;;14145:45:40;;;;;;;;;;14248:41;;17704::167;;;14248::40;;17677:18:167;14248:41:40;;;;;;;13147:1149;;12957:1339;;;;;;;:::o;6349:118:50:-;6400:22;6441:19;:17;:19::i;:::-;6434:26;;6349:118;:::o;5214:3711:4:-;5421:16;512:6:103;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:103;;;;;;;:::i;:::-;558:1;549:6;:10;7154:21:2;;::::1;::::0;::::1;;;7150:54;;;7184:20;;-1:-1:-1::0;;;7184:20:2::1;;;;;;;;;;;7150:54;5516:20:4::2;:18;:20::i;:::-;5566:25;5550:13;:41;5546:117;;;5614:38;;-1:-1:-1::0;;;5614:38:4::2;;;;;;;;;;;5546:117;5712:11;5726:208;5771:25;:23;:25::i;:::-;5810:12;:25:::0;-1:-1:-1;;;5810:25:4;::::2;-1:-1:-1::0;;;;;5810:25:4::2;5849:18;5881:17;5912:12;5726:31;:208::i;:::-;5712:222;;5954:7;5948:3;:13;:30;;;;5971:7;5965:3;:13;5948:30;5944:67;;;5987:24;;-1:-1:-1::0;;;5987:24:4::2;;;;;;;;;;;5944:67;6091:19;6112:18:::0;6134:67:::2;6156:13;6183:8;6134;:67::i;:::-;6090:111;;;;6245:49;6262:19;:17;:19::i;6245:49::-;-1:-1:-1::0;6823:13:4::2;:29:::0;-1:-1:-1;;;6712:35:4::2;6750:70:::0;;;:12:::2;:70;::::0;-1:-1:-1;;;;;;;;;;;6750:70:4;6712:35;;6750:102:::2;::::0;-1:-1:-1;;;;;6823:29:4;;::::2;::::0;6750:102:::2;:::i;:::-;6862:21;6886:34:::0;;;:12:::2;:34;::::0;-1:-1:-1;;;;;;;;;;;6886:34:4;6712:140;;-1:-1:-1;6862:21:4;6886:76:::2;::::0;6712:140;;6886:76:::2;:::i;:::-;6862:100;;7027:26;7063:28:::0;7188:63:::2;7254:34;7277:10;7254:22;:34::i;:::-;7188:100;;7325:44;7362:6;7325:36;:44::i;:::-;7302:67;;7492:37;7516:11;7492:16;:37::i;:::-;7566:12;:26:::0;-1:-1:-1;;;;;7566:26:4;;::::2;7543:49:::0;;7631:28;;::::2;;7606:22;::::0;::::2;:53:::0;-1:-1:-1;;;7695:25:4;;::::2;;7673:19;::::0;::::2;:47:::0;7755:44:::2;7543:6:::0;7755:36:::2;:44::i;:::-;7734:65:::0;-1:-1:-1;8199:137:4::2;8271:13:::0;8302:20;8200:41:::2;8302:20:::0;7734:65;8200:41:::2;:::i;:::-;8199:54:::0;:137;:54:::2;:137::i;:::-;8188:148:::0;-1:-1:-1;8400:59:4::2;::::0;-1:-1:-1;554:1:32::2;8428:20:4;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;8450:8;8400:5;:59::i;:::-;8532:33;8554:10;8532:21;:33::i;:::-;8615:20;8638:18:::0;;:92:::2;;8687:43;:20:::0;8716:13;8687:28:::2;:43::i;:::-;8638:92;;;8671:1;8638:92;8615:115:::0;-1:-1:-1;8771:20:4::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;-1:-1:-1::0;;;;;8745:173:4::2;;8805:8:::0;8827:31:::2;:11:::0;8847:10;8827:19:::2;:31::i;:::-;8745:173;::::0;;12150:25:167;;;12206:2;12191:18;;12184:34;;;;12234:18;;12227:34;;;12292:2;12277:18;;12270:34;;;12137:3;12122:19;8745:173:4::2;;;;;;;-1:-1:-1::0;;591:1:103;582:6;:10;-1:-1:-1;5214:3711:4;;;-1:-1:-1;;;;;;;;;5214:3711:4:o;5603:362:50:-;5742:26;5782:25;5821:20;5855:26;5913:45;5932:12;5946:11;5913:18;:45::i;:::-;5906:52;;;;-1:-1:-1;5906:52:50;-1:-1:-1;5906:52:50;;-1:-1:-1;5603:362:50;-1:-1:-1;;;5603:362:50:o;8073:188:40:-;8203:51;8216:7;8225:8;8235:6;8243:10;8203:12;:51::i;7362:308::-;7527:10;7509:29;;;;:17;:29;;;;;;;;-1:-1:-1;;;;;7509:39:40;;;;;;;;;;;;:50;;-1:-1:-1;;7509:50:40;;;;;;;;;;7617:46;;17704:41:167;;;7509:39:40;;7527:10;7617:46;;17677:18:167;7617:46:40;;;;;;;7362:308;;:::o;6538:194:2:-;6612:11;;-1:-1:-1;;;;;6612:11:2;6598:10;:25;6594:64;;6632:26;;-1:-1:-1;;;6632:26:2;;;;;;;;;;;6594:64;6668:11;:18;;-1:-1:-1;;;;;;6668:18:2;-1:-1:-1;;;;;6668:18:2;;;;;;;;6702:23;;;;-1:-1:-1;;6702:23:2;6538:194;:::o;6595:167:50:-;6689:7;6715:40;6743:11;6715:27;:40::i;6154:189::-;6252:21;6292:44;6322:13;6292:29;:44::i;1609:2614:5:-;1856:20;1878;512:6:103;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:103;;;;;;;:::i;:::-;558:1;549:6;:10;7154:21:2;;::::1;::::0;::::1;;;7150:54;;;7184:20;;-1:-1:-1::0;;;7184:20:2::1;;;;;;;;;;;7150:54;1964:20:5::2;:18;:20::i;:::-;2040:23;2065:18:::0;2087:61:::2;2109:7;2130:8;2087;:61::i;:::-;2039:109;;;;2214:21;2238:101;2276:7;2297:10;2321:8;2238:24;:101::i;:::-;2214:125;;2369:25;2353:13;:41;2349:117;;;2417:38;;-1:-1:-1::0;;;2417:38:5::2;;;;;;;;;;;2349:117;2492:14;2479:10;:27;2475:96;;;2529:31;;-1:-1:-1::0;;;2529:31:5::2;;;;;;;;;;;2475:96;2614:24;2641:19;:17;:19::i;:::-;2614:46;;2670;2687:16;2705:10;2670:16;:46::i;:::-;;2880:26;2916:25:::0;2951:26:::2;3121:47;3140:15;3157:10;3121:18;:47::i;:::-;2987:181:::0;;-1:-1:-1;2987:181:5;;-1:-1:-1;2987:181:5;-1:-1:-1;2987:181:5;-1:-1:-1;3219:25:5;;::::2;3215:63;;;3253:25;;-1:-1:-1::0;;;3253:25:5::2;;;;;;;;;;;3215:63;3356:18;3330:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;3445:36:5::2;::::0;-1:-1:-1;3464:17:5::2;3445:16:::0;:36:::2;:::i;:::-;3430:51;;3491:193;3519:18;3551:12;3577:17;3608:10;3632:16;3662:12;3491:14;:193::i;:::-;3768:15;3786:97;3821:26;3861:12;3786:21;:97::i;:::-;3768:115:::0;-1:-1:-1;3893:50:5::2;3768:115:::0;3908:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;3930:12;3893:5;:50::i;:::-;4050:7:::0;4016:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;3994:176;::::0;;12150:25:167;;;12206:2;12191:18;;12184:34;;;12234:18;;;12227:34;;;12292:2;12277:18;;12270:34;;;-1:-1:-1;;;;;3994:176:5;;;::::2;::::0;::::2;::::0;12137:3:167;12122:19;3994:176:5::2;;;;;;;4181:35;;;;;;;;591:1:103::0;582:6;:10;1609:2614:5;;;;-1:-1:-1;1609:2614:5;-1:-1:-1;;;1609:2614:5:o;9953:2560:4:-;10141:16;10159:24;512:6:103;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:103;;;;;;;:::i;:::-;558:1;549:6;:10;10215:25:4::1;10203:37:::0;::::1;10199:113;;;10263:38;;-1:-1:-1::0;;;10263:38:4::1;;;;;;;;;;;10199:113;10355:18;10376:16;:14;:16::i;:::-;10355:37;;10402:49;10419:19;:17;:19::i;10402:49::-;;10668:33;10690:10;10668:21;:33::i;:::-;10773:12;:34;::::0;-1:-1:-1;;;;;;;;;;;10773:34:4;10928:13:::1;:29:::0;-1:-1:-1;;;10743:27:4::1;10855:70:::0;;;-1:-1:-1;;;;;;;;;;;10855:70:4;10743:27;;10855:102:::1;::::0;-1:-1:-1;;;;;10928:29:4;;::::1;::::0;10855:102:::1;:::i;:::-;10817:140:::0;-1:-1:-1;10967:21:4::1;10991:61;10817:140:::0;10991:19;:61:::1;:::i;:::-;10967:85;;11062:50;554:1:32;11090:10:4;11102:9;11062:5;:50::i;:::-;11170:21;11201:28:::0;11343:179:::1;11378:9;11401:10;11425:13;11452:19;11485:27;11343:21;:179::i;:::-;11239:283:::0;;-1:-1:-1;11239:283:4;;-1:-1:-1;11239:283:4;-1:-1:-1;11582:127:4::1;-1:-1:-1::0;;;11649:20:4::1;;::::0;::::1;::::0;::::1;:::i;:::-;11683:16;11582:5;:127::i;:::-;11785:34;11795:13;11810:8;11785:9;:34::i;:::-;11774:45;;11866:20;11889:102;11927:8;11949:10;11973:8;11889:24;:102::i;:::-;11866:125;;12018:8;12005:10;:21;12001:59;;;12035:25;;-1:-1:-1::0;;;12035:25:4::1;;;;;;;;;;;12001:59;12112:20;12135:18:::0;;:92:::1;;12184:43;:20:::0;12213:13;12184:28:::1;:43::i;:::-;12135:92;;;12168:1;12135:92;12112:115:::0;-1:-1:-1;12271:20:4::1;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;12242:218;::::0;;6132:25:167;;;6188:2;6173:18;;6166:34;;;6216:18;;;6209:34;;;6274:2;6259:18;;6252:34;;;6317:3;6302:19;;6295:35;;;-1:-1:-1;;;;;12242:218:4;;;::::1;::::0;::::1;::::0;6119:3:167;6104:19;12242:218:4::1;;;;;;;12471:35;;;;;;;;591:1:103::0;582:6;:10;9953:2560:4;;;;-1:-1:-1;9953:2560:4;-1:-1:-1;;9953:2560:4:o;1610:3336:6:-;1823:7;1832;512:6:103;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:103;;;;;;;:::i;:::-;558:1;549:6;:10;7154:21:2;;::::1;::::0;::::1;;;7150:54;;;7184:20;;-1:-1:-1::0;;;7184:20:2::1;;;;;;;;;;;7150:54;1918:20:6::2;:18;:20::i;:::-;1966:25;1952:11;:39;1948:115;;;2014:38;;-1:-1:-1::0;;;2014:38:6::2;;;;;;;;;;;1948:115;2389:18;2410:16;:14;:16::i;:::-;2389:37;;2453:14;2440:10;:27;2436:96;;;2490:31;;-1:-1:-1::0;;;2490:31:6::2;;;;;;;;;;;2436:96;2541:24;2568:19;:17;:19::i;:::-;2541:46;;2597:22;2622:46;2639:16;2657:10;2622:16;:46::i;:::-;2597:71:::0;-1:-1:-1;2827:20:6::2;2850:36;2869:17;2850:16:::0;:36:::2;:::i;:::-;2827:59;;2896:26;2932:21:::0;2977:26:::2;3137:60;3157:11;3170:10;3182:14;3137:19;:60::i;:::-;3017:180:::0;;-1:-1:-1;3017:180:6;;-1:-1:-1;3017:180:6;-1:-1:-1;3354:125:6::2;3017:180:::0;3429:10;3457:8;3354:26:::2;:125::i;:::-;3338:141;;3566:18;3540:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;;;3871:27:6;;::::2;3867:90;;;3921:25;;-1:-1:-1::0;;;3921:25:6::2;;;;;;;;;;;3867:90;3967:23;3996:33;4005:13;4020:8;3996;:33::i;:::-;3966:63;;;4104:132;4133:11;4158:18;4190:10;4214:12;4104:15;:132::i;:::-;4396:15;4414:98;4449:27;4490:12;4414:21;:98::i;:::-;4396:116:::0;-1:-1:-1;4543:11:6;4595:48:::2;4396:116:::0;4610:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;4632:10;4595:5;:48::i;:::-;4752:7:::0;4718:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;-1:-1:-1::0;;;;;4695:197:6::2;;4773:12:::0;4799:35:::2;:15:::0;4823:10;4799:23:::2;:35::i;:::-;4695:197;::::0;;12150:25:167;;;12206:2;12191:18;;12184:34;;;;12234:18;;12227:34;;;12292:2;12277:18;;12270:34;;;12137:3;12122:19;4695:197:6::2;;;;;;;-1:-1:-1::0;;591:1:103;582:6;:10;-1:-1:-1;4911:12:6;;4925:13;;-1:-1:-1;1610:3336:6;;-1:-1:-1;;;;;;;;;1610:3336:6:o;4632:3419:5:-;4823:7;512:6:103;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:103;;;;;;;:::i;:::-;558:1;549:6;:10;4860:25:5::1;4846:39:::0;::::1;4842:115;;;4908:38;;-1:-1:-1::0;;;4908:38:5::1;;;;;;;;;;;4842:115;5190:18;5211:16;:14;:16::i;:::-;5190:37;;5237:43;5254:13;5269:10;5237:16;:43::i;:::-;;5340:142;5359:64;5381:26;5409:13;5359:21;:64::i;5340:142::-;5581:25;5620:21:::0;5655:26:::1;5695:23:::0;5732:27:::1;5773:26:::0;5812:59:::1;5832:11;5845:10;5857:13;5812:19;:59::i;:::-;5567:304;;;;;;;;;;;;6072:20;6095:13;6072:36;;6171:13;6153:15;:31;6149:1161;;;6271:18;6245:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;6303:197:5::1;::::0;-1:-1:-1;6336:11:5;6365:17;6400:18;6436:20;6474:12;6303:15:::1;:197::i;:::-;6576:22;6601:32;6616:17;6601:12:::0;:32:::1;:::i;:::-;6647:31;6705:28:::0;;;:12:::1;:28;::::0;;;;:41;6576:57;;-1:-1:-1;;;;6705:41:5;::::1;;;6774:263;6828:11:::0;6857:15;6890:17;6925:18;6961:12;6991:10;7019:4:::1;6774:36;:263::i;:::-;7130:28;::::0;;;:12:::1;:28;::::0;;;;:41;7051:134:::1;::::0;::::1;::::0;;::::1;::::0;-1:-1:-1;;;7130:41:5;::::1;::::0;::::1;7051:19;:134::i;:::-;7266:33;7288:10;7266:21;:33::i;:::-;6186:1124;;6149:1161;7366:16;7385:34;7395:13;7410:8;7385:9;:34::i;:::-;7366:53;;7466:20;7489:102;7527:8;7549:10;7573:8;7489:24;:102::i;:::-;7466:125;;7618:12;7605:10;:25;7601:63;;;7639:25;;-1:-1:-1::0;;;7639:25:5::1;;;;;;;;;;;7601:63;7731:11:::0;7845:63:::1;7867:26;7895:12:::0;7845:21:::1;:63::i;:::-;7811:20;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;7788:230;::::0;;12150:25:167;;;12206:2;12191:18;;12184:34;;;12234:18;;;12227:34;;;12292:2;12277:18;;12270:34;;;-1:-1:-1;;;;;7788:230:5;;;::::1;::::0;::::1;::::0;12137:3:167;12122:19;7788:230:5::1;;;;;;;-1:-1:-1::0;;591:1:103;582:6;:10;8036:8:5;4632:3419;-1:-1:-1;;;;;;;;;;;;;4632:3419:5:o;4912:294:40:-;5090:7;3063:32;3087:7;3063:23;:32::i;:::-;-1:-1:-1;;;;;3049:46:40;:10;-1:-1:-1;;;;;3049:46:40;;3045:116;;3118:32;;-1:-1:-1;;;3118:32:40;;;;;;;;;;;3045:116;5151:48:::1;5165:7;5174:4;5180:2;5184:6;5192;5151:13;:48::i;:::-;4912:294:::0;;;;;;:::o;1987:1524:1:-;2118:29;;;;:12;:29;;;;;:40;-1:-1:-1;;;;;2118:40:1;:45;2114:82;;1987:1524;:::o;2114:82::-;2375:24;2402:19;:17;:19::i;:::-;2375:46;-1:-1:-1;2448:37:1;2466:19;2448:15;:37;:::i;:::-;:42;;;:92;;;2525:15;2506:16;:34;2448:92;2431:187;;;2572:35;;-1:-1:-1;;;2572:35:1;;;;;;;;;;;2431:187;2871:16;2852:15;:35;2848:657;;2903:52;2920:16;2938;:14;:16::i;:::-;2903;:52::i;2848:657::-;3023:15;2986:509;3134:25;3162:18;;;:12;:18;;;;;:29;-1:-1:-1;;;;;3162:29:1;3213:24;;;3209:107;;3281:16;:14;:16::i;:::-;3261:36;;3209:107;3337:22;;3333:148;;3383:52;3400:15;3417:17;3383:16;:52::i;3333:148::-;-1:-1:-1;3074:27:1;3082:19;3074:27;;:::i;:::-;;;2986:509;;2848:657;2039:1472;1987:1524;:::o;10725:555:50:-;10815:18;;-1:-1:-1;;10945:10:50;-1:-1:-1;;;;;10937:26:50;;10933:162;;-1:-1:-1;10988:21:50;10933:162;;;11049:35;;-1:-1:-1;;;11049:35:50;;11078:4;11049:35;;;12979:51:167;11049:10:50;-1:-1:-1;;;;;11049:20:50;;;;12952:18:167;;11049:35:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;11040:44;;10933:162;11223:11;;11238:1;11223:16;:50;;11272:1;11223:50;;;11257:11;;11242:27;;:6;;:14;:27::i;:::-;11210:63;;10839:441;10725:555;:::o;7834:223:7:-;7910:24;8012:37;8030:19;8012:15;:37;:::i;:::-;7981:69;;:15;:69;:::i;3756:4414:1:-;3877:7;4009:51;;;:12;:51;;;;;4074:22;;-1:-1:-1;;;;;4074:22:1;:27;;;:64;;;4123:15;4105;:33;4074:64;4070:124;;;4161:22;-1:-1:-1;;;;;4161:22:1;;-1:-1:-1;4154:29:1;;4070:124;4275:23;:11;:21;:23::i;:::-;4250:48;;-1:-1:-1;;;;;;4250:48:1;-1:-1:-1;;;;;4250:48:1;;;;;;;-1:-1:-1;4787:12:1;-1:-1:-1;4813:35:1;4831:17;4813:15;:35;:::i;:::-;4787:71;;;;;;;;;;;-1:-1:-1;4787:71:1;;;:82;-1:-1:-1;;;;;4787:82:1;;-1:-1:-1;4902:101:1;4937:27;4978:15;4902:21;:101::i;:::-;5013:27;5043:26;;;:12;:26;;;;;;4879:124;;-1:-1:-1;5113:23:1;;5109:667;;5170:21;5209;5247:180;5294:19;5335:11;5368:14;5404:5;5247:25;:180::i;:::-;5152:275;;;;5467:13;5441:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5494:235:1;;-1:-1:-1;5528:19:1;5565:1;5584:13;;5700:15;5494:16;:235::i;:::-;5761:4;5743:22;;5138:638;;5109:667;5894:19;5916:100;5951:26;5991:15;5916:21;:100::i;:::-;6026:26;6055:25;;;:12;:25;;;;;;5894:122;;-1:-1:-1;6094:22:1;;6090:745;;6150:21;6189;6227:178;6274:18;6314:11;6347:14;6383:4;6227:25;:178::i;:::-;6132:273;;;;6445:13;6419:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;6497:15:1;;-1:-1:-1;6556:232:1;6589:18;6472:22;6644:13;;6497:15;6556;:232::i;:::-;6820:4;6802:22;;6118:717;;;6090:745;6906:15;6902:547;;;6937:20;6960:35;6978:17;6960:15;:35;:::i;:::-;7009:31;7067:26;;;:12;:26;;;;;:39;;-1:-1:-1;;;;;7134:43:1;;;;;;6937:58;;-1:-1:-1;;;;7067:39:1;;;;;;;;;7191:132;;7067:39;;7270;;;;;7191:19;:132::i;:::-;7404:34;7426:11;7404:21;:34::i;:::-;6923:526;;6902:547;7459:20;7496:1;7482:11;:15;:174;;7655:1;7482:174;;;7512:128;7628:11;7512:90;7566:35;7589:11;7566:22;:35::i;:::-;7512:53;:90::i;:::-;:115;;:128::i;:::-;7802:13;:29;7739:12;:48;;-1:-1:-1;;;;;;;;;;;7739:48:1;7666:21;7690:34;;;-1:-1:-1;;;;;;;;;;;7690:34:1;7459:197;;-1:-1:-1;7666:21:1;-1:-1:-1;;;;;7802:29:1;;;;7690:97;;7739:48;7690:97;:::i;:::-;:141;;;;:::i;:::-;7666:165;-1:-1:-1;7841:20:1;7864:18;;:84;;7913:35;:12;7934:13;7913:20;:35::i;:::-;7864:84;;;7897:1;7864:84;7963:171;;;12150:25:167;;;12206:2;12191:18;;12184:34;;;12234:18;;;12227:34;;;12292:2;12277:18;;12270:34;;;7841:107:1;;-1:-1:-1;7993:15:1;;7963:171;;12137:3:167;12122:19;7963:171:1;;;;;;;-1:-1:-1;8152:11:1;;3756:4414;-1:-1:-1;;;;;;;;;;;3756:4414:1:o;22590:1546:4:-;22799:12;:34;;-1:-1:-1;;;;;;;;;;;22799:34:4;22954:13;:29;-1:-1:-1;;;22774:22:4;22881:70;;;-1:-1:-1;;;;;;;;;;;22881:70:4;22774:22;;22881:102;;-1:-1:-1;;;;;22954:29:4;;;;22881:102;:::i;:::-;22843:140;-1:-1:-1;22993:21:4;23017:44;22843:140;23017:14;:44;:::i;:::-;22993:68;;23071:20;23094:95;23144:35;23167:11;23144:22;:35::i;23094:95::-;23071:118;-1:-1:-1;23199:21:4;23223:88;:14;23071:118;23288:13;23223:25;:88::i;:::-;23199:112;;23669:26;23709:12;23724:40;23752:11;23724:27;:40::i;:::-;23709:55;;23785:13;23778:4;:20;23774:92;;;23835:20;23842:13;23835:4;:20;:::i;:::-;23814:41;;23774:92;23900:1;23879:18;:22;:43;;;-1:-1:-1;23905:17:4;;23879:43;23875:255;;;23938:181;23981:18;24017:12;24047:13;24078:27;23938:25;:181::i;:::-;22651:1485;;;;;;;22590:1546;:::o;10552:330:40:-;10681:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;10681:25:40;;;;;;;;;:35;;10710:6;;10681:19;:35;;10710:6;;10681:35;:::i;:::-;;;;-1:-1:-1;;10726:21:40;;;;:12;:21;;;;;:31;;10751:6;;10726:21;:31;;10751:6;;10726:31;:::i;:::-;;;;-1:-1:-1;;10814:61:40;;;3525:25:167;;;3581:2;3566:18;;3559:34;;;10855:1:40;;-1:-1:-1;;;;;10814:61:40;;;10829:10;;10814:61;;3498:18:167;10814:61:40;;;;;;;;10552:330;;;:::o;984:556:33:-;1100:9;1365:1;-1:-1:-1;;1348:19:33;1345:1;1342:26;1339:1;1335:34;1328:42;1315:11;1311:60;1284:146;;1414:1;1411;1404:12;1284:146;-1:-1:-1;1501:9:33;;1497:27;;984:556::o;640:190:35:-;693:9;-1:-1:-1;;;720:1:35;:12;714:86;;756:33;;-1:-1:-1;;;756:33:35;;;;;;;;;;;714:86;-1:-1:-1;821:1:35;640:190::o;9239:1480:50:-;9361:21;9632:11;;9623:6;:20;:43;;9660:6;9623:43;;;9646:11;;9623:43;9614:52;-1:-1:-1;9737:14:50;-1:-1:-1;;9773:10:50;-1:-1:-1;;;;;9765:26:50;;9761:162;;-1:-1:-1;9816:21:50;9761:162;;;9877:35;;-1:-1:-1;;;9877:35:50;;9906:4;9877:35;;;12979:51:167;9877:10:50;-1:-1:-1;;;;;9877:20:50;;;;12952:18:167;;9877:35:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;9868:44;;9761:162;9989:11;;10004:1;9989:16;:90;;10078:1;9989:90;;;10020:43;10035:27;10050:11;;10035:6;:14;;:27;;;;:::i;:::-;10020:6;;:14;:43::i;:::-;9973:106;;10183:6;10168:11;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;10199:12:50;;-1:-1:-1;;;10233:10:50;-1:-1:-1;;;;;10225:26:50;;10221:256;;10289:19;;;;:7;:19;:::i;:::-;-1:-1:-1;;;;;10281:33:50;10339:13;10281:89;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10267:103;;;;;10221:256;;;-1:-1:-1;;;;;10411:10:50;:19;;10431;;;;:7;:19;:::i;:::-;10411:55;;-1:-1:-1;;;;;;10411:55:50;;;;;;;-1:-1:-1;;;;;15617:32:167;;;10411:55:50;;;15599:51:167;15666:18;;;15659:34;;;15572:18;;10411:55:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;10401:65;;10221:256;10491:7;10486:74;;10521:28;;-1:-1:-1;;;10521:28:50;;;;;;;;;;;10486:74;10585:14;;;;;;;;:::i;:::-;:96;;10642:39;10664:16;:14;:16::i;:::-;10642:13;;:21;:39::i;:::-;10585:96;;;10614:13;10585:96;10569:112;9239:1480;-1:-1:-1;;;;;9239:1480:50:o;1814:119:33:-;1876:7;1903:22;1914:1;1917;1920:4;1903:10;:22::i;:::-;1895:31;1814:119;-1:-1:-1;;;1814:119:33:o;5568:1565:40:-;-1:-1:-1;;;;;5780:18:40;;;;:38;;-1:-1:-1;;;;;;5802:16:40;;;5780:38;5776:98;;;5839:35;;-1:-1:-1;;;5839:35:40;;;;;;;;;;;5776:98;5983:4;-1:-1:-1;;;;;5973:14:40;:6;-1:-1:-1;;;;;5973:14:40;;5969:871;;-1:-1:-1;;;;;6123:23:40;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;6118:712;;6232:16;6251:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;6251:33:40;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;6367:29:40;;6363:453;;6746:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;6746:33:40;;;;;;;;;;;:41;;;;;;;;;;:51;;6791:6;;6746:27;:51;;6791:6;;6746:51;:::i;:::-;;;;-1:-1:-1;;6363:453:40;6156:674;6118:712;6984:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6984:25:40;;;;;;;;;:35;;7013:6;;6984:19;:35;;7013:6;;6984:35;:::i;:::-;;;;-1:-1:-1;;7029:19:40;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;7029:23:40;;;;;;;;;:33;;7056:6;;7029:19;:33;;7056:6;;7029:33;:::i;:::-;;;;-1:-1:-1;;7077:49:40;;;3525:25:167;;;3581:2;3566:18;;3559:34;;;-1:-1:-1;;;;;7077:49:40;;;;;;;;;;;;;;3498:18:167;7077:49:40;;;;;;;5568:1565;;;;;:::o;17660:2619:2:-;17884:21;;;;;18850:159;18971:24;18997:11;18850:96;18938:7;18850:66;18881:34;18905:10;565:4:33;18881:34:2;:::i;:::-;18850:9;;:30;:66::i;:159::-;18834:175;-1:-1:-1;19221:37:2;18834:175;19243:14;19221:21;:37::i;:::-;19200:58;-1:-1:-1;19699:12:2;19714:115;19746:48;19770:24;565:4:33;19746:48:2;:::i;:::-;19714:7;;19808:11;19714:18;:115::i;:::-;19699:130;-1:-1:-1;19854:22:2;19699:130;19867:8;19854:12;:22::i;:::-;19839:37;-1:-1:-1;20083:36:2;19839:37;20104:14;20083:20;:36::i;:::-;20063:56;-1:-1:-1;20234:38:2;20063:56;20234:18;:38;:::i;:::-;20213:59;;18146:2133;17660:2619;;;;;;;;;:::o;1198:469:32:-;1309:10;-1:-1:-1;;;;;1401:10:32;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:32;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:32;1620:18;;;;1617:34;;1198:469::o;19458:6485:6:-;19630:25;19669:21;19704:26;19744:23;19781:27;19822:26;20542:21;20566:38;20590:13;20566:23;:38::i;:::-;20542:62;;20739:289;20791:25;:23;:25::i;:::-;20834:12;:25;-1:-1:-1;;;20834:25:6;;-1:-1:-1;;;;;20834:25:6;20877:11;20906:13;20937:12;20967:11;20996:18;20739:34;:289::i;:::-;20618:410;;-1:-1:-1;20618:410:6;-1:-1:-1;20618:410:6;-1:-1:-1;21173:17:6;21193:199;21244:25;:23;:25::i;:::-;21287:12;:25;-1:-1:-1;;;21287:25:6;;-1:-1:-1;;;;;21287:25:6;21330:18;21366:12;21193:33;:199::i;:::-;21173:219;;21427:273;21468:15;21505:17;21544:138;21616:9;21651;21544:46;:138::i;:::-;21427:19;:273::i;:::-;21406:379;;;21740:30;;-1:-1:-1;;;21740:30:6;;;;;;;;;;;21406:379;21866:22;21878:9;21866:11;:22::i;:::-;22143:11;22214;22122:18;;;22542:152;22143:11;22612:13;22643:9;22214:11;22542:24;:152::i;:::-;22363:331;-1:-1:-1;22363:331:6;;-1:-1:-1;22363:331:6;;-1:-1:-1;22363:331:6;-1:-1:-1;23342:29:6;;-1:-1:-1;22363:331:6;;23342:29;:::i;:::-;23323:48;;;;:::i;:::-;;-1:-1:-1;23645:18:6;23656:7;23645:8;:18;:::i;:::-;23623:40;;;;:::i;:::-;;;20094:3580;;;;;;;23831:22;23856:12;:77;23902:17;23886:13;:33;;;;:::i;:::-;23856:77;;;;;;;;;;;-1:-1:-1;23856:77:6;;;:88;-1:-1:-1;;;;;23856:88:6;;-1:-1:-1;23984:15:6;:31;-1:-1:-1;23984:118:6;;24064:27;;;;:12;:27;;;;;:38;-1:-1:-1;;;;;24064:38:6;23984:118;;;24034:11;23984:118;23958:144;;24667:236;24722:11;24751:18;24787:14;24819:15;24852:11;24881:8;24667:37;:236::i;:::-;24651:252;-1:-1:-1;25109:40:6;25131:18;25109:40;;:::i;:::-;;;25641:285;25706:13;25737:18;25773:15;25806:18;25842:14;25874:15;25907:5;25641:47;:285::i;:::-;19458:6485;;25450:476;;-1:-1:-1;25450:476:6;;-1:-1:-1;25450:476:6;-1:-1:-1;25450:476:6;;-1:-1:-1;19458:6485:6;-1:-1:-1;;;;;;19458:6485:6:o;13001:1212::-;13321:30;;-1:-1:-1;;;13321:30:6;;-1:-1:-1;;;;;13321:30:6;13405:337;:308;13321:30;13582:20;:13;13598:4;13582:20;:::i;:::-;13430:37;;-1:-1:-1;;;13430:37:6;;-1:-1:-1;;;;;13430:37:6;;;13657:11;13690:5;13405:115;:308::i;:337::-;13365:37;:377;;-1:-1:-1;;;;;13365:377:6;;;-1:-1:-1;;;13365:377:6;;;;;;;;;13901:23;:11;:21;:23::i;:::-;13864:60;;:18;:60;:::i;:::-;13815:30;:109;;-1:-1:-1;;;;;13815:109:6;;;-1:-1:-1;;;13815:109:6;;;;;;;;;-1:-1:-1;14032:31:6;:19;:29;:31::i;:::-;14002:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;14002:61:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;14002:61:6;;;;;-1:-1:-1;;;;;14002:61:6;;;;;;14105:32;:21;:30;:32::i;:::-;14073:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;14073:64:6;;;;;;;-1:-1:-1;;;;;14073:64:6;;;;;;14176:30;:18;:28;:30::i;:::-;14147:12;:59;;:25;;:59;;;;-1:-1:-1;;;14147:59:6;;-1:-1:-1;;;;;14147:59:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;14147:59:6;;;;;-1:-1:-1;;;;;14147:59:6;;;;;;13001:1212;;;;;:::o;11253:1758:2:-;11541:22;11566:33;11582:17;11566:13;:33;:::i;:::-;11541:58;;11609:23;11635:12;:100;11661:64;11683:26;11711:13;11661:21;:64::i;:::-;11635:100;;;;;;;;;;;;11609:126;;11745:24;11772:12;:101;11798:65;11820:27;11849:13;11798:21;:65::i;:::-;11772:101;;;;;;;;;;;;11745:128;;11967:15;11986:1;11967:20;:45;;;;-1:-1:-1;11991:21:2;;11967:45;11963:1042;;;12072:1;12028:28;;;:12;:28;;;;;:45;;-1:-1:-1;;;;;12028:45:2;;;11963:1042;;;12338:12;12377:212;12565:11;12502:40;:19;12530:11;12502:27;:40::i;:::-;12478:64;;:1;:64;:::i;:::-;12437:18;12378:36;:15;12402:11;12378:23;:36::i;:::-;:77;;;;:::i;:::-;:164;;;;:::i;:::-;:198;;;;:::i;12377:212::-;12338:265;;12814:7;12810:185;;;12841:28;;;;:12;:28;;;;;:50;;12886:5;;12841:28;:41;;:50;;12886:5;;-1:-1:-1;;;12841:50:2;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12841:50:2;;;;;;;-1:-1:-1;;;;;12841:50:2;;;;;;12810:185;;;12930:28;;;;:12;:28;;;;;:50;;12975:5;;12930:28;:41;;:50;;12975:5;;-1:-1:-1;;;12930:50:2;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12930:50:2;;;;;;;-1:-1:-1;;;;;12930:50:2;;;;;;12810:185;12090:915;11963:1042;11531:1480;;;11253:1758;;;;;;;:::o;13182:890::-;13335:6;13325:7;:16;:32;;;;;13356:1;13345:7;:12;;13325:32;13321:745;;;13373:12;13405:13;:6;13373:12;13405:10;:13::i;:::-;13395:23;;:7;:23;:::i;:::-;13617:25;;13373:46;;-1:-1:-1;13600:55:2;;:44;;13373:46;;-1:-1:-1;;;13617:25:2;;-1:-1:-1;;;;;13617:25:2;13600:44;;:9;:44::i;:::-;:53;:55::i;:::-;13546:25;:123;;:25;;:123;;;;-1:-1:-1;;;13546:123:2;;-1:-1:-1;;;;;13546:123:2;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13546:123:2;;;;;-1:-1:-1;;;;;13546:123:2;;;;;;13359:321;2039:1472:1;1987:1524;:::o;13321:745:2:-;13767:7;13758:6;:16;13754:312;;;13805:1;13794:7;:12;13790:266;;13904:18;:7;:16;:18::i;:::-;13884:17;:6;:15;:17::i;:::-;:38;;;;:::i;:::-;13826:25;:114;;:25;;:114;;;;-1:-1:-1;;;13826:114:2;;-1:-1:-1;;;;;13826:114:2;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13826:114:2;;;;;-1:-1:-1;;;;;13826:114:2;;;;;;2039:1472:1;1987:1524;:::o;13790:266:2:-;14016:24;:13;:6;14027:1;14016:10;:13::i;20580:315::-;20744:7;20767:15;;;;;;;;:::i;:::-;20763:126;;;-1:-1:-1;20805:7:2;20798:14;;20763:126;20850:28;:7;20866:11;20850:15;:28::i;:::-;20843:35;20580:315;-1:-1:-1;;;;20580:315:2:o;3455:503:40:-;3650:34;;;3669:4;3650:34;;;;15599:51:167;;;;15666:18;;;15659:34;;;;3650::40;;;;;;;;;15572:18:167;;;;3650:34:40;;3640:45;;;;;;;;;-1:-1:-1;;;;;;3822:63:40;;;19587:39:167;3853:8:40;19659:15:167;;;-1:-1:-1;;19655:53:167;19642:11;;;19635:74;19725:12;;;19718:28;3869:15:40;19762:12:167;;;;19755:28;;;;3822:63:40;;;;;;;;;;19799:12:167;;;;3822:63:40;;;3799:96;;;;;;3455:503::o;9407:299::-;9553:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;9553:35:40;;;;;;;;;;;;:45;;;;;;;;;;;;;:54;;;9665:34;;7053:25:167;;;9553:35:40;;9665:34;;7026:18:167;9665:34:40;;;;;;;9407:299;;;;:::o;1112:1260:8:-;1199:7;:21;-1:-1:-1;;;;;;;;1199:21:8;;;;;1254:12;1361:15;1332:26;1348:10;1199:21;1332:26;:::i;:::-;:44;1328:81;;;1392:7;;1112:1260;:::o;1328:81::-;1465:27;1495:7;1503:4;1495:13;;;;;;;;:::i;:::-;;;;;;;;;1549:18;;1495:13;;-1:-1:-1;1549:18:8;;;;1608:13;;;;-1:-1:-1;;;;;1608:13:8;;1674:30;1549:18;1674:15;:30;:::i;:::-;2101:7;:14;1658:46;;-1:-1:-1;1943:13:8;;;:27;;;1892:11;;2080:17;2088:4;2096:1;2080:17;:::i;:::-;2079:36;;;;:::i;:::-;2060:55;;2194:49;;;;;;;;2212:15;2194:49;;;;;;2238:3;-1:-1:-1;;;;;2194:49:8;;;;2174:7;2182:8;2174:17;;;;;;;;:::i;:::-;;;;;;;;;;:69;;;;;;-1:-1:-1;;;;;2174:69:8;;;;;;;;;;;:17;;:69;;;;2263:102;;;;;;;;;-1:-1:-1;;;;;2263:102:8;;;;;;2339:15;2263:102;;;;;;;;-1:-1:-1;;;2253:112:8;;:7;:112;-1:-1:-1;;;;;;;;1112:1260:8:o;4931:1028:165:-;5067:19;;;5187:23;:5;5201:8;5187:13;:23::i;:::-;5162:48;;5220:10;5233:56;5274:14;5248:1;5241:4;:8;:23;;5260:4;5241:23;;;5252:5;5253:4;5252:5;:::i;5233:56::-;5220:69;;5311:1;5304:4;:8;5300:621;;;5342:89;5386:30;5412:2;5386:18;:30::i;:::-;5342:10;;:18;:89::i;:::-;5328:103;-1:-1:-1;5463:24:165;5477:10;5328:103;5463:24;:::i;:::-;5445:43;;5502:30;;;;5300:621;5560:1;5553:4;:8;5549:372;;;5712:89;5756:30;5782:2;5756:18;:30::i;:::-;5712:10;;:18;:89::i;:::-;5698:103;-1:-1:-1;5826:40:165;5855:10;5698:103;5826:40;:::i;5549:372::-;-1:-1:-1;5938:10:165;;5950:1;;-1:-1:-1;4931:1028:165;-1:-1:-1;;;;4931:1028:165:o;6709:368:7:-;6802:21;6835:24;6862:19;:17;:19::i;:::-;6835:46;;6923:16;6907:13;:32;:95;;7001:1;6907:95;;;6954:32;6970:16;6954:13;:32;:::i;:::-;6891:111;-1:-1:-1;7028:42:7;6891:111;7052:17;7028:23;:42::i;15254:1612:2:-;15424:21;;16447:175;16614:7;16447:145;16580:11;16447:145;16548:9;565:4:33;16448:41:2;565:4:33;16478:10:2;16448:29;:41::i;:::-;:77;;;;:::i;16447:175::-;16431:191;-1:-1:-1;16822:37:2;16431:191;16844:14;16822:21;:37::i;:::-;16801:58;;15254:1612;;;;;;:::o;7378:174:50:-;7453:10;-1:-1:-1;;;;;7445:26:50;87:42:163;7445:26:50;;;;:43;;;7487:1;7475:9;:13;7445:43;7441:105;;;7511:24;;-1:-1:-1;;;7511:24:50;;;;;;;;;;;7441:105;7378:174::o;7558:1675::-;7679:7;;;7799:14;;;;;;;;:::i;:::-;:82;;7849:32;7864:16;:14;:16::i;:::-;7849:6;;:14;:32::i;:::-;7799:82;;;7828:6;7799:82;7778:103;-1:-1:-1;8022:14:50;8061:4;-1:-1:-1;;8087:10:50;-1:-1:-1;;;;;8079:26:50;;8075:604;;8130:21;8121:30;;8181:10;8169:9;:22;8165:96;;;8218:28;;-1:-1:-1;;;8218:28:50;;;;;;;;;;;8165:96;8290:10;8278:9;:22;8274:172;;;8342:10;8387:22;8399:10;8387:9;:22;:::i;:::-;8334:97;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;8320:111:50;;-1:-1:-1;;8274:172:50;8075:604;;;8485:35;;-1:-1:-1;;;8485:35:50;;8514:4;8485:35;;;12979:51:167;8485:10:50;-1:-1:-1;;;;;8485:20:50;;;;12952:18:167;;8485:35:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8544:124;;-1:-1:-1;;;8544:124:50;;8585:10;8544:124;;;20062:34:167;8621:4:50;20112:18:167;;;20105:43;20164:18;;;20157:34;;;8476:44:50;;-1:-1:-1;8544:10:50;-1:-1:-1;;;;;8544:23:50;;;;19997:18:167;;8544:124:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8534:134;;8075:604;8693:7;8688:74;;8723:28;;-1:-1:-1;;;8723:28:50;;;;;;;;;;;8688:74;8897:11;;8912:1;8897:16;8893:334;;8943:38;:10;8962:18;8943;:38::i;:::-;8929:11;:52;;;;-1:-1:-1;9016:18:50;;-1:-1:-1;8995:40:50;;-1:-1:-1;;;8995:40:50;8893:334;9086:11;;9066:17;;9086:42;;9109:10;9121:6;9086:22;:42::i;:::-;9066:62;;9157:9;9142:11;;:24;;;;;;;:::i;:::-;;;;-1:-1:-1;9188:9:50;;-1:-1:-1;9199:16:50;:14;:16::i;:::-;9180:36;;;;;;;;7558:1675;;;;;;:::o;4023:611:34:-;4254:20;;4363:35;:17;4389:8;4363:25;:35::i;:::-;4351:47;-1:-1:-1;4484:143:34;4561:52;4589:23;150:4:33;4599:12:34;4589:9;:23::i;:::-;4568:15;:4;4581:1;4568:12;:15::i;:::-;4562:21;;150:4:33;4562:21:34;:::i;:::-;4561:27;;:52::i;:::-;4484:51;:18;4511:23;4484:26;:51::i;:143::-;4465:162;4023:611;-1:-1:-1;;;;;;;4023:611:34:o;9971:314:40:-;10088:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;10088:23:40;;;;;;;;;:33;;10115:6;;10088:19;:33;;10115:6;;10088:33;:::i;:::-;;;;-1:-1:-1;;10131:21:40;;;;:12;:21;;;;;:31;;10156:6;;10131:21;:31;;10156:6;;10131:31;:::i;:::-;;;;-1:-1:-1;;10219:59:40;;;3525:25:167;;;3581:2;3566:18;;3559:34;;;-1:-1:-1;;;;;10219:59:40;;;10254:1;;10234:10;;10219:59;;3498:18:167;10219:59:40;3351:248:167;15784:3325:4;15967:19;15990:1;15967:24;15963:61;;15784:3325;:::o;15963:61::-;16255:12;:26;-1:-1:-1;;;;;16255:26:4;16311:21;16295:37;;16291:109;;;16355:34;;-1:-1:-1;;;16355:34:4;;;;;;;;;;;16291:109;16569:27;16599:55;16635:19;16606:13;16599:55;:::i;:::-;16569:85;;16698:21;16668:20;:52;16664:124;;;16743:34;;-1:-1:-1;;;16743:34:4;;;;;;;;;;;16664:124;16826:41;16834:20;16826:39;:41::i;:::-;16797:12;:70;;-1:-1:-1;;;;;;16797:70:4;-1:-1:-1;;;;;16797:70:4;;;;;;;;;;17443:28;;-1:-1:-1;;17443:28:4;;17485:20;;;17481:488;;17570:139;17578:20;17640:15;17678:13;17570:40;:139::i;:::-;17521:202;;17481:488;;;17804:140;17874:16;17875:15;17874:16;:::i;:::-;17812:20;;17913:13;17804:40;:140::i;:::-;17779:179;;;:::i;:::-;17754:204;;17481:488;18009:33;:22;:31;:33::i;:::-;17978:28;:64;;-1:-1:-1;;;;;;17978:64:4;-1:-1:-1;;;;;17978:64:4;;;;;;:12;18884:25;18682:420;;:395;;-1:-1:-1;;;18884:25:4;;;18927:136;18995:13;19030:15;18927:46;:136::i;:::-;18682:160;18767:20;18806:22;18682:59;:160::i;:420::-;18654:12;:448;;-1:-1:-1;;;;;18654:448:4;;;-1:-1:-1;;;18654:448:4;;;;;;;;;-1:-1:-1;;;;;15784:3325:4:o;8238:253:7:-;8398:12;:26;8442:28;;8296:7;;8334:150;;-1:-1:-1;;;;;8398:26:7;;;;8442:28;;8334:46;:150::i;2254:774:34:-;2482:11;2718:17;2738:150;2770:23;2807:13;2834:18;2866:12;2738:18;:150::i;:::-;2718:170;-1:-1:-1;2917:104:34;2960:47;2718:170;2979:17;2998:8;2960:18;:47::i;:::-;2918:15;2924:9;150:4:33;2918:15:34;:::i;:::-;2917:25;;:104::i;8679:1001:7:-;8793:53;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8793:53:7;8877:796;;;;;;;;8940:12;:26;-1:-1:-1;;;;;8940:26:7;;;8877:796;;8997:28;;;;8877:796;;;;-1:-1:-1;;;9053:25:7;;;;;8877:796;;;;;;;;;;;;;9148:18;8877:796;;;;9202:21;8877:796;;;;9250:12;8877:796;;;;9294:29;;;;8877:796;;;;9410:36;;8877:796;;8940:26;8877:796;;;9363:97;;9410:36;9363:29;:97::i;:::-;8877:796;;9493:30;;-1:-1:-1;;;;;;;;9493:30:7;;;;;;8877:796;;;;9611:37;;8877:796;;;;;9564:98;;9611:37;;;9564:29;:98::i;:::-;8877:796;;8862:811;8679:1001;-1:-1:-1;;8679:1001:7:o;20164:5466:34:-;20267:7;20417:20;20575:106;20630:7;:33;;;20575:7;:25;;;:33;;:106;;;;:::i;:::-;20493:32;;;;20460:24;;;;:66;;:32;:66::i;:::-;20440:255;;;;:::i;:::-;20417:278;;20705:30;20738:113;20783:7;:21;;;20818:7;:23;;;20738:31;:113::i;:::-;20705:146;;20881:1;20865:13;:17;20861:3671;;;21550:21;21574:291;21623:22;21663:7;:20;;;21701:7;:28;;;21753:7;:19;;;150:4:33;21747:25:34;;;;:::i;:::-;21790:7;:18;;;21826:7;:25;;;21574:31;:291::i;:::-;21550:315;-1:-1:-1;21895:41:34;21550:315;21921:13;21895:17;:41::i;:::-;21879:57;-1:-1:-1;22005:17:34;;22001:565;;22180:371;22276:22;22324:7;:20;;;22370:13;22415:7;:19;;;150:4:33;22409:25:34;;;;:::i;:::-;22460:7;:18;;;22504:7;:25;;;22180:70;:371::i;:::-;22155:396;;:7;;:396;;;;;:::i;:::-;;;-1:-1:-1;22001:565:34;20884:1692;20861:3671;;;22602:1;22586:13;:17;22582:1950;;;23407:14;23408:13;23407:14;:::i;:::-;23391:30;;23482:21;23506:244;23554:22;23594:7;:20;;;23638:7;:19;;;150:4:33;23632:25:34;;;;:::i;:::-;23675:7;:18;;;23711:7;:25;;;23506:30;:244::i;:::-;23482:268;-1:-1:-1;23780:41:34;23482:268;23806:13;23780:17;:41::i;:::-;23764:57;-1:-1:-1;23886:17:34;;23882:563;;24061:369;24155:22;24203:7;:20;;;24249:13;24294:7;:19;;;150:4:33;24288:25:34;;;;:::i;:::-;24339:7;:18;;;24383:7;:25;;;24061:68;:369::i;:::-;24036:394;;:7;;:394;;;;;:::i;:::-;;;-1:-1:-1;23882:563:34;24483:38;24508:13;24491;24483:38;:::i;:::-;24458:63;;:7;;:63;;;;;:::i;:::-;;;-1:-1:-1;;22582:1950:34;24665:19;24899:153;24962:7;:32;;;150:4:33;24956:38:34;;;;:::i;:::-;25016:18;;;;24899:24;;;;;:153;:35;:153::i;:::-;24707:143;24767:7;:33;;;150:4:33;24761:39:34;;;;:::i;:::-;24818:18;;;;24707:25;;;;;:143;:36;:143::i;:::-;24687:379;;;;:::i;:::-;24665:401;;25076:27;25150:12;25113:7;:21;;;25106:56;;;;:::i;:::-;25076:86;;25206:7;:28;;;25176:20;:59;25172:131;;;25258:34;;-1:-1:-1;;;25258:34:34;;;;;;;;;;;25172:131;25312:53;;;25595:28;;;;25571:52;;25344:20;25571:52;:::i;:::-;25564:59;20164:5466;-1:-1:-1;;;;;;20164:5466:34:o;2207:165:33:-;2269:7;2296:22;2307:1;2310:4;2316:1;2296:10;:22::i;13979:3706:5:-;14119:26;14159:25;14198:20;14232:26;14454:241;14500:25;:23;:25::i;:::-;14539:12;:25;-1:-1:-1;;;14539:25:5;;-1:-1:-1;;;;;14539:25:5;14578:12;14616;14642:11;14667:18;14454:32;:241::i;:::-;14434:261;;14828:17;14848:179;14895:25;:23;:25::i;14848:179::-;14828:199;;15054:240;15091:12;15121:17;15156:124;15222:9;15253;15156:44;:124::i;15054:240::-;15037:330;;;15326:30;;-1:-1:-1;;;15326:30:5;;;;;;;;;;;15037:330;15440:22;15452:9;15440:11;:22::i;:::-;15639:16;15678:26;15726:63;15752:12;15766:9;15777:11;15726:25;:63::i;:::-;15625:164;;-1:-1:-1;15625:164:5;-1:-1:-1;15952:28:5;15625:164;15952:17;:28;:::i;:::-;15937:43;-1:-1:-1;16654:33:5;16669:18;15937:43;16654:33;:::i;:::-;16634:53;-1:-1:-1;17150:87:5;:18;17193:9;17216:11;17150:29;:87::i;:::-;17129:108;-1:-1:-1;17496:33:5;17129:108;17496:12;:33;:::i;:::-;17475:54;;17540:138;;;13979:3706;;;;;;;:::o;14237:490:2:-;14393:25;;14332:18;;;;14385:77;;-1:-1:-1;;;14393:25:2;;-1:-1:-1;;;;;14393:25:2;14441:11;14385:42;:77::i;:::-;14362:100;-1:-1:-1;14505:36:2;14520:21;14362:100;14505:36;:::i;:::-;14476:12;:26;-1:-1:-1;;;;;14476:26:2;:65;14472:222;;;14586:12;:26;14662:21;;14586:57;;14631:12;;-1:-1:-1;;;;;14586:26:2;:57;:::i;:::-;:97;;;;:::i;14472:222::-;14703:17;14237:490;;;:::o;7277:444:7:-;7376:21;7409:24;565:4:33;7436:19:7;:17;:19::i;:::-;:43;;;;:::i;:::-;7409:70;;7521:16;7505:13;:32;:95;;7599:1;7505:95;;;7552:32;7568:16;7552:13;:32;:::i;:::-;7489:111;-1:-1:-1;7626:88:7;7663:41;565:4:33;7663:17:7;:41;:::i;:::-;7627:13;;7626:23;:88::i;8586:2118:5:-;8860:29;;-1:-1:-1;;;;;8860:29:5;9001:309;:284;8860:29;9165:20;:13;9181:4;9165:20;:::i;:::-;9022:36;;-1:-1:-1;;;;;9022:36:5;;9001:284;9236:13;9267:4;9001:102;:284::i;:309::-;8962:36;:348;;-1:-1:-1;;;;;;8962:348:5;-1:-1:-1;;;;;8962:348:5;;;;;;;;;;9458:31;:19;:29;:31::i;:::-;9428:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;9428:61:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;9428:61:5;;;;;-1:-1:-1;;;;;9428:61:5;;;;;;9528:30;:18;:28;:30::i;:::-;9499:12;:59;;:25;;:59;;;;-1:-1:-1;;;9499:59:5;;-1:-1:-1;;;;;9499:59:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;9499:59:5;;;;;-1:-1:-1;;;;;9499:59:5;;;;;;9589:25;:13;:23;:25::i;:::-;9568:46;;;;:::i;:::-;9624:29;:49;;-1:-1:-1;;;;;;9624:49:5;-1:-1:-1;;;;;9624:49:5;;;;;-1:-1:-1;9987:51:5;;;:12;:51;;;;;10089:23;;9624:49;;-1:-1:-1;9987:51:5;-1:-1:-1;;;10089:23:5;;;;;10151:98;10196:40;:19;10224:11;10196:27;:40::i;:::-;10152:29;10168:13;10152:1;:29;:::i;:::-;:84;;;;:::i;10151:98::-;10259:52;;10123:126;;-1:-1:-1;10123:126:5;;10259:10;;:23;;:52;;10123:126;;-1:-1:-1;;;10259:52:5;;;;;:::i;:::-;;;-1:-1:-1;;;;;10259:52:5;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;10367:23:5;;10321:70;;10259:52;10321:70;;;;-1:-1:-1;;;10367:23:5;;;;10321:19;:70::i;:::-;10490:23;10501:11;10490:10;:23::i;:::-;10485:106;;10536:44;;-1:-1:-1;;;10536:44:5;;;;;;;;;;;10485:106;10663:34;10685:11;10663:21;:34::i;19829:2546:4:-;20054:21;20077:7;20086;20443:59;20505:35;20528:11;20505:22;:35::i;:::-;20443:97;;20550:28;20581:66;20631:6;20581:36;:66::i;:::-;20550:97;;20673:45;20701:16;:14;:16::i;:::-;20673:27;:45::i;:::-;20657:61;-1:-1:-1;20744:55:4;20657:61;20769:7;20778:20;20744:24;:55::i;:::-;20728:71;-1:-1:-1;20809:40:4;20826:22;20728:71;20826:22;:::i;:::-;20809:16;:40::i;:::-;20882:12;:26;-1:-1:-1;;;;;20882:26:4;;;20859:49;;20943:28;;;;20918:22;;;:53;-1:-1:-1;;;21003:25:4;;;;20981:19;;;:47;20882:26;21067:66;20859:6;21067:36;:66::i;:::-;21038:95;-1:-1:-1;21407:23:4;21453:67;:14;21038:95;21499:20;21453:25;:67::i;:::-;21407:123;-1:-1:-1;21560:40:4;21592:7;21567:14;21560:40;:::i;:::-;21540:60;;;;:::i;:::-;;;21633:1;21614:16;:20;21610:677;;;21807:29;21839:121;21896:17;21897:16;21896:17;:::i;:::-;21839:20;;21932:14;21839:31;:121::i;:::-;21807:153;-1:-1:-1;21974:38:4;21807:153;21974:38;;:::i;:::-;;;22026:47;22050:21;22026:16;:47::i;:::-;22087:152;22129:21;22168:28;22214:11;22087:24;:152::i;:::-;22253:23;;;21636:651;21610:677;22328:16;-1:-1:-1;22347:20:4;;-1:-1:-1;;;19829:2546:4;;;;;;;;;:::o;14792:3820:6:-;14965:21;15000:26;15040;15328:229;15375:25;:23;:25::i;:::-;15414:12;:25;-1:-1:-1;;;15414:25:6;;-1:-1:-1;;;;;15414:25:6;15453:11;15478:12;15504:11;15529:18;15328:33;:229::i;:::-;15307:250;-1:-1:-1;15818:11:6;15776:39;15307:250;15803:11;15776:26;:39::i;:::-;:53;15772:121;;;15852:30;;-1:-1:-1;;;15852:30:6;;;;;;;;;;;15772:121;16035:17;16055:179;16102:25;:23;:25::i;16055:179::-;16035:199;;16244:22;16256:9;16244:11;:22::i;:::-;16434:16;16460:26;16720:192;16758:11;565:4:33;16868:9:6;16891:11;16720:24;:192::i;:::-;-1:-1:-1;16496:416:6;;-1:-1:-1;16496:416:6;-1:-1:-1;17585:29:6;;-1:-1:-1;16496:416:6;;-1:-1:-1;16496:416:6;17585:29;:::i;:::-;17563:51;;;;:::i;:::-;;-1:-1:-1;18107:425:6;18158:11;18361:39;18382:18;17563:51;18361:39;:::i;:::-;18414:15;18443:32;:11;18414:15;18443;:32::i;:::-;18489:11;18514:8;18107:37;:425::i;:::-;18091:441;-1:-1:-1;18586:18:6;-1:-1:-1;;;14792:3820:6;;;;;;;:::o;21181:317:2:-;21347:7;21370:15;;;;;;;;:::i;:::-;21366:126;;;21408:28;:7;21424:11;21408:15;:28::i;21366:126::-;-1:-1:-1;21474:7:2;21467:14;;9507:3005:6;9907:30;;9786:312;;:287;;-1:-1:-1;;;9907:30:6;;-1:-1:-1;;;;;9907:30:6;9955:20;:13;9971:4;9955:20;:::i;:::-;9807:37;;-1:-1:-1;;;9807:37:6;;-1:-1:-1;;;;;9807:37:6;;;10026:11;10055:4;9786:103;:287::i;:312::-;9746:37;:352;;-1:-1:-1;;;;;9746:352:6;;;-1:-1:-1;;;9746:352:6;;;;;;;;;-1:-1:-1;10458:31:6;:19;:29;:31::i;:::-;10417:12;:26;:72;;;-1:-1:-1;;;;;10417:26:6;:72;:::i;:::-;10499:12;:43;;-1:-1:-1;;;;;;10499:43:6;-1:-1:-1;;;;;10499:43:6;;;;;;-1:-1:-1;10581:23:6;:11;:21;:23::i;:::-;10552:12;:52;;:25;;:52;;;;-1:-1:-1;;;10552:52:6;;-1:-1:-1;;;;;10552:52:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10552:52:6;;;;;-1:-1:-1;;;;;10552:52:6;;;;;;10648:23;:11;:21;:23::i;:::-;10614:30;:57;;:30;;:57;;;;-1:-1:-1;;;10614:57:6;;-1:-1:-1;;;;;10614:57:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10614:57:6;;;;;;;;;;;;;;;11273:28;;:12;11230:26;11273:28;;;;;11230:26;;11215:86;11198:180;;-1:-1:-1;11198:180:6;;11333:34;;-1:-1:-1;;;11333:34:6;;;;;;;;;;;11198:180;11470:25;11498:19;:17;:19::i;:::-;11527:31;11581;;;:12;:31;;;;;:44;11470:47;;-1:-1:-1;;;;11581:44:6;;;;11713:23;:11;:21;:23::i;:::-;11645:31;;;;:12;:31;;;;;:101;;:44;;:101;;;;-1:-1:-1;;;11645:101:6;;;;;:::i;:::-;;;-1:-1:-1;;;;;11645:101:6;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;11827:31:6;;;:12;:31;;;;;:44;11756:125;;11645:101;11756:125;;;;-1:-1:-1;;;11827:44:6;;;;11756:19;:125::i;:::-;12298:23;12309:11;12298:10;:23::i;:::-;12293:106;;12344:44;;-1:-1:-1;;;12344:44:6;;;;;;;;;;;12293:106;12471:34;12493:11;12471:21;:34::i;18521:4699:5:-;18692:25;18731:21;18766:26;18806:23;18843:27;18884:26;19558:21;19582:38;19606:13;19582:23;:38::i;:::-;19558:62;;19688:337;19760:25;:23;:25::i;:::-;19807:12;:25;-1:-1:-1;;;19807:25:5;;-1:-1:-1;;;;;19807:25:5;19854:11;19887:13;19922:12;19956:11;19989:18;19688:50;:337::i;:::-;19634:391;;-1:-1:-1;19634:391:5;-1:-1:-1;19634:391:5;-1:-1:-1;20080:17:5;20100:199;20151:25;:23;:25::i;20100:199::-;20080:219;;20313:22;20325:9;20313:11;:22::i;:::-;20576:16;20606:15;20805:154;20847:11;20876:13;20907:9;20934:11;20805:24;:154::i;:::-;20635:324;-1:-1:-1;20635:324:5;;-1:-1:-1;20635:324:5;;-1:-1:-1;21194:27:5;;-1:-1:-1;20635:324:5;;-1:-1:-1;21194:27:5;;:::i;:::-;;-1:-1:-1;21432:18:5;21443:7;21432:8;:18;:::i;:::-;21415:35;;;;:::i;:::-;;-1:-1:-1;21834:34:5;21850:18;21415:35;21834:34;:::i;:::-;21813:55;;19123:2756;;;;22326:887;22387:13;22414:18;22446:15;22475:18;22954:12;:47;22983:17;22967:13;:33;;;;:::i;:::-;22954:47;;;;;;;;;;;-1:-1:-1;22954:47:5;:58;-1:-1:-1;;;;;22954:58:5;23046:15;:31;-1:-1:-1;23046:118:5;;23126:27;;;;:12;:27;;;;;:38;-1:-1:-1;;;;;23126:38:5;23046:118;;;23096:11;23046:118;23199:4;22326:47;:887::i;:::-;18521:4699;;22159:1054;;-1:-1:-1;22159:1054:5;;-1:-1:-1;22159:1054:5;-1:-1:-1;22159:1054:5;;-1:-1:-1;18521:4699:5;-1:-1:-1;;;;18521:4699:5:o;11173:2273::-;11436:29;;-1:-1:-1;;;;;11436:29:5;11573:335;:306;11436:29;11748:20;:13;11764:4;11748:20;:::i;:::-;11598:36;;-1:-1:-1;;;;;11598:36:5;;11573:306;11823:11;11856:5;11573:114;:306::i;:335::-;11534:36;:374;;-1:-1:-1;;;;;;11534:374:5;-1:-1:-1;;;;;11534:374:5;;;;;;;;;;12062:23;:11;:21;:23::i;:::-;12026:59;;:17;:59;:::i;:::-;11978:29;:107;;-1:-1:-1;;;;;;11978:107:5;-1:-1:-1;;;;;11978:107:5;;;;;;;;;;-1:-1:-1;12647:31:5;:19;:29;:31::i;:::-;12617:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;12617:61:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12617:61:5;;;;;-1:-1:-1;;;;;12617:61:5;;;;;;12720:32;:21;:30;:32::i;:::-;12688:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12688:64:5;;;;;;;-1:-1:-1;;;;;12688:64:5;;;;;;12791:30;:18;:28;:30::i;:::-;12762:12;:59;;:25;;:59;;;;-1:-1:-1;;;12762:59:5;;-1:-1:-1;;;;;12762:59:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;12762:59:5;;;;;;;;;;;;;;;13210:12;:26;13240:21;13210:26;;13202:59;;-1:-1:-1;13202:59:5;:161;;-1:-1:-1;13335:28:5;;:12;13292:26;13335:28;;;;;-1:-1:-1;;;;;13292:26:5;;;13277:86;13202:161;13185:255;;;13395:34;;-1:-1:-1;;;13395:34:5;;;;;;;;;;;8796:2095:1;8973:21;;9256:32;:11;9276;9256:19;:32::i;:::-;9240:48;-1:-1:-1;9298:15:1;9316:31;9240:48;9338:8;9316:21;:31::i;:::-;9298:49;-1:-1:-1;9373:31:1;9298:49;9389:14;9373:15;:31::i;:::-;9357:47;;9831:7;9827:557;;;9871:23;9881:13;9871:7;:23;:::i;:::-;9854:40;;;;:::i;:::-;;;9827:557;;;10350:23;10360:13;10350:7;:23;:::i;:::-;10333:40;;;;:::i;:::-;;;9827:557;10597:15;10583:11;:29;10579:306;;;10644:100;:13;10686:11;10715:15;10644:24;:100::i;:::-;10628:116;-1:-1:-1;10774:100:1;:13;10816:11;10845:15;10774:24;:100::i;:::-;10758:116;;10579:306;9019:1872;8796:2095;;;;;;;:::o;25635:1730:4:-;26328:25;26372:1;26356:13;:17;:122;;26464:14;26356:122;;;26388:61;:14;26414:19;26435:13;26388:25;:61::i;:::-;26328:150;;26492:17;26513:1;26492:22;26488:35;;26516:7;;;26488:35;26731:17;26791:19;26824:48;;;26820:274;;;26905:28;;-1:-1:-1;26972:111:4;:19;26905:28;27052:17;26972:30;:111::i;:::-;26947:136;;26820:274;27136:26;:14;:24;:26::i;:::-;27103:13;:59;;:29;;:59;;;;-1:-1:-1;;;;;27103:59:4;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;27103:59:4;;;;;-1:-1:-1;;;;;27103:59:4;;;;;;27198:34;:22;:32;:34::i;:::-;27172:13;:60;;:22;;:60;;;;-1:-1:-1;;;27172:60:4;;-1:-1:-1;;;;;27172:60:4;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;27172:60:4;;;;;-1:-1:-1;;;;;27172:60:4;;;;;;27309:49;27334:22;27326:31;;;:::i;13107:1882:34:-;13439:23;;;14115:100;14150:30;14156:24;150:4:33;14150:30:34;:::i;:::-;14115:10;;14194:11;14115:21;:100::i;:::-;14100:115;-1:-1:-1;14242:44:34;:10;14261:24;14242:18;:44::i;:::-;14225:61;-1:-1:-1;14300:18:34;;14296:687;;14452:475;14517:23;14558:13;14589:14;14830:18;14836:12;150:4:33;14830:18:34;:::i;:::-;14866:11;14895:18;14452:47;:475::i;:::-;14434:493;-1:-1:-1;14941:31:34;14434:493;14941:31;;:::i;:::-;;;14296:687;13107:1882;;;;;;;;;;;:::o;1246:449::-;1441:17;1575:113;1675:12;1575:82;:18;1618:23;1643:13;1575:42;:82::i;6077:213::-;6210:7;6242:41;6258:24;6264:18;150:4:33;6258:24:34;:::i;:::-;6242:9;;:15;:41::i;:::-;6236:47;;150:4:33;6236:47:34;:::i;9268:678:2:-;9424:4;9649:23;9675:216;9750:16;9722:25;:23;:25::i;:::-;:44;;;;:::i;:::-;9780:12;:25;:43;;9808:15;;-1:-1:-1;;;9780:25:2;;-1:-1:-1;;;;;9780:25:2;:43;:::i;:::-;9837:18;9869:12;9675:33;:216::i;:::-;-1:-1:-1;;;;9268:678:2;-1:-1:-1;;;;9268:678:2:o;26919:1230:34:-;27161:21;;27503:186;27539:16;27645:34;:15;27667:11;27645:21;:34::i;:::-;27503:11;;:186;:22;:186::i;:::-;27482:207;-1:-1:-1;27910:45:34;:11;27933:8;27943:11;27910:22;:45::i;:::-;27896:59;;;;:::i;:::-;;;27983:12;27970:10;:25;27966:147;;;28077:25;28090:12;28077:10;:25;:::i;:::-;28061:41;;27966:147;28122:20;26919:1230;;;;;;;;:::o;16838:2717::-;17138:7;17147;17156;17165:6;17173:7;18107:27;18167:15;18148:16;:34;18144:1219;;;18383:7;18379:181;;;18427:118;:14;18474:16;18512:15;18427:25;:118::i;:::-;18410:135;;18379:181;18635:111;:19;18683:16;18717:15;18635:30;:111::i;:::-;18613:133;-1:-1:-1;18854:70:34;18907:16;18613:133;18854:70;:::i;:::-;18815:109;-1:-1:-1;18957:108:34;:16;19002;19036:15;18957:27;:108::i;:::-;18938:127;-1:-1:-1;19101:111:34;:19;19149:16;19183:15;19101:30;:111::i;:::-;19079:133;;18144:1219;;;19282:70;19335:16;19289:19;19282:70;:::i;:::-;19243:109;;18144:1219;19394:14;;19422:19;;19455:16;;16838:2717;-1:-1:-1;;;;;;;;16838:2717:34:o;13582:678:33:-;13776:15;13807:9;13803:451;;;13842:152;13949:27;13964:12;13949;:27;:::i;:::-;13892:28;:12;13913:6;13892:20;:28::i;:::-;13843:30;:12;13864:8;13843:20;:30::i;:::-;:77;;;;:::i;:::-;13842:85;;:152::i;:::-;13832:162;;13803:451;;;14045:12;14029;:28;14025:42;;-1:-1:-1;14066:1:33;14059:8;;14025:42;14091:152;14198:27;14213:12;14198;:27;:::i;:::-;14141:28;:12;14162:6;14141:20;:28::i;:::-;14092:30;:12;14113:8;14092:20;:30::i;:::-;:77;;;;:::i;994:219:35:-;1045:8;-1:-1:-1;;;;;;1071:21:35;;;;;:46;;-1:-1:-1;;;;;;1096:21:35;;;1071:46;1065:119;;1141:32;;-1:-1:-1;;;1141:32:35;;;;;;;;;;;15261:101:33;15317:6;15346:1;15342;:5;:13;;15354:1;15342:13;;;-1:-1:-1;15350:1:33;;15261:101;-1:-1:-1;15261:101:33:o;14987:::-;15043:6;15072:1;15068;:5;:13;;15080:1;15068:13;;5773:3347;5819:8;-1:-1:-1;;5996:1:33;:26;5992:40;;-1:-1:-1;6031:1:33;;5773:3347;-1:-1:-1;5773:3347:33:o;5992:40::-;6231:21;6226:1;:26;6222:99;;6277:44;;-1:-1:-1;;;6277:44:33;;;;;;;;;;;6222:99;6594:7;6588:2;6583:7;;;6582:19;;-1:-1:-1;6930:8:33;7014:2;6954:29;6943:7;;;6942:41;-1:-1:-1;;;6942:51:33;6941:75;;7042:29;7038:33;;7034:37;;;-1:-1:-1;;7713:35:33;;7768:5;;7348:2;7767:13;;;7784:32;7766:50;7836:5;;7835:13;;-1:-1:-1;;7834:51:33;7905:5;;7904:13;;7921:34;7903:52;7975:5;;7974:13;;-1:-1:-1;;7973:53:33;8046:5;;8045:13;;8062:35;8044:53;7354:32;7287:31;7283:35;;7338:5;;7337:13;;7336:50;;;7411:5;;;-1:-1:-1;;7411:40:33;7471:5;7470:13;;;7487:35;7469:53;7540:5;;;-1:-1:-1;;;7540:50:33;8462:10;8999:49;8966:82;9081:3;:7;;;;8965:124;;;;;;-1:-1:-1;;5773:3347:33:o;4141:115::-;4201:7;4228:20;4237:1;4240:4;4246:1;4228:8;:20::i;4671:846::-;4729:7;4795:1;4800;4795:6;4791:50;;-1:-1:-1;565:4:33;4817:13;;4791:50;4894:1;4899;4894:6;4890:45;;-1:-1:-1;4923:1:33;4916:8;;4890:45;5098:1;5073:15;5276:14;5287:1;5276:3;:14::i;:::-;5263:27;-1:-1:-1;5368:18:33;;;5405:22;565:4;5368:18;5405:22;:::i;:::-;;;5500:9;5504:4;5500:3;:9::i;30120:340:34:-;30255:7;;30306:53;30343:16;30313:14;30306:53;:::i;:::-;30274:85;;30403:1;30377:22;:27;;30369:36;;;;;2726:748:33;2840:9;3105:1;-1:-1:-1;;3088:19:33;3085:1;3082:26;3079:1;3075:34;3068:42;3055:11;3051:60;3024:146;;3154:1;3151;3144:12;3024:146;-1:-1:-1;3421:9:33;;3368:27;;;3365:34;;3417:27;;;3344:114;;2726:748::o;12091:1116:36:-;12264:7;12704:9;12716:21;12722:1;12725;12728;12731;12734:2;12716:5;:21::i;:::-;12704:33;-1:-1:-1;12747:16:36;12770:37;12781:21;12800:1;12781:14;:2;12790:4;12781:8;:14::i;:21::-;12770:1;;12804:2;12770:10;:37::i;:::-;12766:41;;:1;:41;:::i;:::-;12747:60;;150:4:33;12821:8:36;:15;12817:295;;12935:28;12948:14;150:4:33;12960:1:36;12948:11;:14::i;:::-;12935:8;;:12;:28::i;:::-;12924:39;;12817:295;;;13075:26;13088:12;150:4:33;13098:1:36;13088:9;:12::i;13075:26::-;13064:37;;12817:295;13188:12;13199:1;13188:8;:12;:::i;:::-;13181:19;12091:1116;-1:-1:-1;;;;;;;;;12091:1116:36:o;14433:104:33:-;14491:7;14521:1;14517;:5;:13;;14529:1;14517:13;;7297:489:36;7486:14;7512:12;7554:140;7606:1;7621;7636:2;7652:1;7667;7682:2;7554:38;:140::i;:::-;7534:160;;-1:-1:-1;7534:160:36;-1:-1:-1;7534:160:36;7704:76;;7739:30;;-1:-1:-1;;;7739:30:36;;;;;;;;;;;10391:1124;10541:7;11029:9;11041:19;11045:1;11048;11051;11054;11057:2;11041:3;:19::i;:::-;11029:31;-1:-1:-1;11070:16:36;11089:28;150:4:33;11097:13:36;:1;11107:2;11097:9;:13::i;:::-;:19;;;;:::i;:::-;11089:1;;:7;:28::i;:::-;11070:47;;150:4:33;11131:8:36;:15;11127:293;;11242:26;11255:12;150:4:33;11265:1:36;11255:9;:12::i;11242:26::-;11231:37;;11127:293;;;11381:28;11394:14;150:4:33;11406:1:36;11394:11;:14::i;11381:28::-;11370:39;;11127:293;11496:12;11500:8;11496:1;:12;:::i;:::-;11489:19;10391:1124;-1:-1:-1;;;;;;;;10391:1124:36:o;3827:1099::-;4014:7;4170:9;4182:19;4186:1;4189;4192;4195;4198:2;4182:3;:19::i;:::-;4170:31;-1:-1:-1;4244:15:36;4257:1;4245:6;4249:2;4245:1;:6;:::i;4244:15::-;4240:19;-1:-1:-1;4415:10:36;4428:23;4445:2;4449:1;4429:5;4240:19;4429:1;:5;:::i;:::-;4428:16;:23;:16;:23::i;:::-;4415:36;;150:4:33;4465:2:36;:9;4461:261;;4563:20;4570:12;150:4:33;4580:1:36;4570:9;:12::i;4563:20::-;4558:25;;4461:261;;;4689:22;4696:14;150:4:33;4708:1:36;4696:11;:14::i;4689:22::-;4684:27;;4461:261;4804:12;:2;4813;4804:8;:12::i;:::-;4799:17;-1:-1:-1;4913:6:36;4918:1;4799:17;4913:6;:::i;6975:872:34:-;7228:7;7365:475;7432:23;7473:13;7504:12;7743:18;7749:12;150:4:33;7743:18:34;:::i;:::-;7779:11;7808:18;7365:49;:475::i;5221:277::-;5352:7;5390:101;5425:52;150:4:33;5441:29:34;150:4:33;5451:18:34;5441:9;:29::i;:::-;:35;;;;:::i;:::-;5425:9;;:15;:52::i;:::-;5419:58;;150:4:33;5419:58:34;:::i;:::-;150:4:33;;5390:11:34;:101::i;10267:313:2:-;10331:4;10530:42;:21;10560:11;10530:29;:42::i;:::-;10473:25;;:12;10400:26;10366:141;;10505:1;;-1:-1:-1;;;;;;;;10473:25:2;;;;;10367:132;;;10392:56;;10400:26;10436:11;10392:43;:56::i;:::-;10367:132;;;;:::i;:::-;10366:138;;:141::i;:::-;:207;;;10267:313;-1:-1:-1;;10267:313:2:o;24518:580:4:-;24689:20;24712:95;24762:35;24785:11;24762:22;:35::i;24712:95::-;24817:21;24841:34;;;:12;:34;;-1:-1:-1;;;;;;;;;;;24841:34:4;24689:118;;-1:-1:-1;24817:21:4;24841:77;;24890:28;;24841:77;:::i;:::-;24817:101;;24928:163;24967:19;25000:12;25026:13;25053:28;24928:25;:163::i;11325:846:34:-;11576:7;11692:472;11759:23;11800:13;11831:9;12067:18;12073:12;150:4:33;12067:18:34;:::i;:::-;12103:11;12132:18;11692:49;:472::i;14710:104:33:-;14768:7;14798:1;14794;:5;:13;;14806:1;14794:13;;8791:1862:34;9121:23;;;9700:99;9734:30;9740:24;150:4:33;9734:30:34;:::i;9700:99::-;9684:115;-1:-1:-1;9813:28:34;;9809:838;;9929:43;:9;9947:24;9929:17;:43::i;:::-;9912:60;-1:-1:-1;10113:477:34;10180:23;10221:13;9912:60;10493:18;10499:12;150:4:33;10493:18:34;:::i;:::-;10529:11;10558:18;10113:49;:477::i;3750:115:33:-;3810:7;3837:20;3846:1;3849;3852:4;3837:8;:20::i;9632:3592::-;9677:8;9730:1;9725;:6;9721:60;;9740:41;;-1:-1:-1;;;9740:41:33;;;;;;;;;;;9721:60;-1:-1:-1;10747:2:33;-1:-1:-1;;;;;;;10158:1:33;10154:49;10261:9;;;10241:18;10238:33;10235:1;10231:41;10225:48;10323:9;;;10311:10;10308:25;10305:1;10301:33;10295:40;10381:9;;;10373:6;10370:21;10367:1;10363:29;10357:36;10437:9;;;10431:4;10428:19;10425:1;10421:27;;;10415:34;;;10492:9;;;10487:3;10484:18;10481:1;10477:26;10471:33;10547:9;;;10539:18;;;10536:1;10532:26;;;10526:33;;;10595:9;;;10587:18;;;10581:25;10777:3;:7;;;;;10763:22;;;;10810:17;;;11603:31;11599:35;;11654:5;;11653:13;;11670:32;11652:50;11722:5;;11721:13;;11738:33;11720:51;11791:5;;11790:13;;11807:33;11789:51;11860:5;;11859:13;;11876:33;11858:51;11929:5;;11928:13;;11945:32;11927:50;11997:5;;11996:13;;12013:30;11995:48;11000:31;10996:35;;11051:5;;11050:13;;11067:32;11049:50;11119:5;;11118:13;;11135:32;11117:50;11187:5;;11186:13;;-1:-1:-1;;11185:50:33;11255:5;;11254:13;;-1:-1:-1;;11253:50:33;11323:5;;11322:13;;;-1:-1:-1;;11321:50:33;11389:5;-1:-1:-1;;11389:46:33;12384:10;12774:43;12769:48;-1:-1:-1;;10743:6:33;;;;12897:71;:91;12876:112;13061:72;13056:77;13204:3;13198:9;;9632:3592::o;14610:278:36:-;14750:7;14873:8;:1;14879;14873:5;:8::i;:::-;14832:38;14845:20;14863:1;14845:13;:2;14856:1;14845:10;:13::i;:20::-;14832:1;;14867:2;14832:12;:38::i;:::-;:49;;;;:::i;8540:1314::-;8733:14;8749:12;8910:9;8922:19;8926:1;8929;8932;8935;8938:2;8922:3;:19::i;:::-;8910:31;-1:-1:-1;8984:15:36;8997:1;8985:6;8989:2;8985:1;:6;:::i;8984:15::-;8980:19;;9081:1;9077;:5;9073:53;;;9106:1;9109:5;9098:17;;;;;;;9073:53;9281:10;9294:23;9311:2;9315:1;9295:5;9299:1;9295;:5;:::i;9294:23::-;9281:36;;150:4:33;9331:2:36;:9;9327:263;;9430:20;9437:12;150:4:33;9447:1:36;9437:9;:12::i;9430:20::-;9425:25;;9327:263;;;9557:22;9564:14;150:4:33;9576:1:36;9564:11;:14::i;9557:22::-;9552:27;;9327:263;9672:12;:2;9681;9672:8;:12::i;:::-;9667:17;;9780:2;9776:1;:6;9772:52;;;9807:6;9811:2;9807:1;:6;:::i;:::-;9798:15;;9772:52;9843:4;9833:14;;8763:1091;;8540:1314;;;;;;;;;;:::o;13772:272::-;13910:7;14029:8;:1;14035;14029:5;:8::i;:::-;13992:34;14003:18;14019:1;14003:11;:2;14012:1;14003:8;:11::i;:18::-;13992:1;;14023:2;13992:10;:34::i;2079:1170::-;2268:7;2424:9;2436:19;2440:1;2443;2446;2449;2452:2;2436:3;:19::i;:::-;2424:31;-1:-1:-1;2589:25:36;2612:1;2589:18;2600:6;2604:2;2600:1;:6;:::i;2589:25::-;2585:29;-1:-1:-1;2674:19:36;:1;2585:29;2690:2;2674:12;:19::i;:::-;2670:23;-1:-1:-1;2853:10:36;2866:5;2670:23;2866:1;:5;:::i;:::-;2853:18;;150:4:33;2885:2:36;:9;2881:261;;2983:20;2990:12;150:4:33;3000:1:36;2990:9;:12::i;2983:20::-;2978:25;;2881:261;;;3109:22;3116:14;150:4:33;3128:1:36;3116:11;:14::i;3109:22::-;3104:27;;2881:261;3236:6;3240:2;3236:1;:6;:::i;14:271:167:-;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:167:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:167;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:252;860:2;854:9;902:3;890:16;;936:18;921:34;;957:22;;;918:62;915:88;;;983:18;;:::i;:::-;1019:2;1012:22;788:252;:::o;1045:275::-;1116:2;1110:9;1181:2;1162:13;;-1:-1:-1;;1158:27:167;1146:40;;1216:18;1201:34;;1237:22;;;1198:62;1195:88;;;1263:18;;:::i;:::-;1299:2;1292:22;1045:275;;-1:-1:-1;1045:275:167:o;1325:862::-;1404:6;1435:2;1478;1466:9;1457:7;1453:23;1449:32;1446:52;;;1494:1;1491;1484:12;1446:52;1527:9;1521:16;1556:18;1597:2;1589:6;1586:14;1583:34;;;1613:1;1610;1603:12;1583:34;1651:6;1640:9;1636:22;1626:32;;1696:7;1689:4;1685:2;1681:13;1677:27;1667:55;;1718:1;1715;1708:12;1667:55;1747:2;1741:9;1769:2;1765;1762:10;1759:36;;;1775:18;;:::i;:::-;1817:53;1860:2;1841:13;;-1:-1:-1;;1837:27:167;1833:36;;1817:53;:::i;:::-;1804:66;;1893:2;1886:5;1879:17;1933:7;1928:2;1923;1919;1915:11;1911:20;1908:33;1905:53;;;1954:1;1951;1944:12;1905:53;1976:1;1986:128;2000:2;1997:1;1994:9;1986:128;;;2087:10;;;2083:19;;2077:26;2057:13;;;2053:22;;2046:58;2011:10;;1986:128;;;-1:-1:-1;2155:1:167;2134:14;;;2130:23;;;2123:34;;;;-1:-1:-1;2138:5:167;1325:862;-1:-1:-1;;;1325:862:167:o;2192:118::-;2278:5;2271:13;2264:21;2257:5;2254:32;2244:60;;2300:1;2297;2290:12;2315:128;2380:20;;2409:28;2380:20;2409:28;:::i;:::-;2315:128;;;:::o;2448:241::-;2504:6;2557:2;2545:9;2536:7;2532:23;2528:32;2525:52;;;2573:1;2570;2563:12;2525:52;2612:9;2599:23;2631:28;2653:5;2631:28;:::i;2694:155::-;2754:5;2799:2;2790:6;2785:3;2781:16;2777:25;2774:45;;;2815:1;2812;2805:12;2854:492;2958:6;2966;2974;3027:2;3015:9;3006:7;3002:23;2998:32;2995:52;;;3043:1;3040;3033:12;2995:52;3079:9;3066:23;3056:33;;3136:2;3125:9;3121:18;3108:32;3098:42;;3191:2;3180:9;3176:18;3163:32;3218:18;3210:6;3207:30;3204:50;;;3250:1;3247;3240:12;3204:50;3273:67;3332:7;3323:6;3312:9;3308:22;3273:67;:::i;:::-;3263:77;;;2854:492;;;;;:::o;3604:173::-;3672:20;;-1:-1:-1;;;;;3721:31:167;;3711:42;;3701:70;;3767:1;3764;3757:12;3782:367;3845:8;3855:6;3909:3;3902:4;3894:6;3890:17;3886:27;3876:55;;3927:1;3924;3917:12;3876:55;-1:-1:-1;3950:20:167;;3993:18;3982:30;;3979:50;;;4025:1;4022;4015:12;3979:50;4062:4;4054:6;4050:17;4038:29;;4122:3;4115:4;4105:6;4102:1;4098:14;4090:6;4086:27;4082:38;4079:47;4076:67;;;4139:1;4136;4129:12;4154:922;4294:6;4302;4310;4318;4326;4334;4387:3;4375:9;4366:7;4362:23;4358:33;4355:53;;;4404:1;4401;4394:12;4355:53;4427:29;4446:9;4427:29;:::i;:::-;4417:39;;4475:38;4509:2;4498:9;4494:18;4475:38;:::i;:::-;4465:48;;4564:2;4553:9;4549:18;4536:32;4587:18;4628:2;4620:6;4617:14;4614:34;;;4644:1;4641;4634:12;4614:34;4683:70;4745:7;4736:6;4725:9;4721:22;4683:70;:::i;:::-;4772:8;;-1:-1:-1;4657:96:167;-1:-1:-1;4860:2:167;4845:18;;4832:32;;-1:-1:-1;4876:16:167;;;4873:36;;;4905:1;4902;4895:12;4873:36;;4944:72;5008:7;4997:8;4986:9;4982:24;4944:72;:::i;:::-;4154:922;;;;-1:-1:-1;4154:922:167;;-1:-1:-1;4154:922:167;;5035:8;;4154:922;-1:-1:-1;;;4154:922:167:o;5081:397::-;5167:6;5175;5183;5191;5244:3;5232:9;5223:7;5219:23;5215:33;5212:53;;;5261:1;5258;5251:12;5212:53;5297:9;5284:23;5274:33;;5326:38;5360:2;5349:9;5345:18;5326:38;:::i;:::-;5316:48;;5383:38;5417:2;5406:9;5402:18;5383:38;:::i;:::-;5081:397;;;;-1:-1:-1;5373:48:167;;5468:2;5453:18;5440:32;;-1:-1:-1;;5081:397:167:o;5483:385::-;5569:6;5577;5585;5593;5646:3;5634:9;5625:7;5621:23;5617:33;5614:53;;;5663:1;5660;5653:12;5614:53;-1:-1:-1;;5686:23:167;;;5756:2;5741:18;;5728:32;;-1:-1:-1;5807:2:167;5792:18;;5779:32;;5858:2;5843:18;5830:32;;-1:-1:-1;5483:385:167;-1:-1:-1;5483:385:167:o;6341:561::-;6454:6;6462;6470;6478;6531:3;6519:9;6510:7;6506:23;6502:33;6499:53;;;6548:1;6545;6538:12;6499:53;6584:9;6571:23;6561:33;;6641:2;6630:9;6626:18;6613:32;6603:42;;6692:2;6681:9;6677:18;6664:32;6654:42;;6747:2;6736:9;6732:18;6719:32;6774:18;6766:6;6763:30;6760:50;;;6806:1;6803;6796:12;6760:50;6829:67;6888:7;6879:6;6868:9;6864:22;6829:67;:::i;:::-;6819:77;;;6341:561;;;;;;;:::o;7271:356::-;7357:6;7410:2;7398:9;7389:7;7385:23;7381:32;7378:52;;;7426:1;7423;7416:12;7378:52;7466:9;7453:23;7499:18;7491:6;7488:30;7485:50;;;7531:1;7528;7521:12;7485:50;7554:67;7613:7;7604:6;7593:9;7589:22;7554:67;:::i;7632:180::-;7691:6;7744:2;7732:9;7723:7;7719:23;7715:32;7712:52;;;7760:1;7757;7750:12;7712:52;-1:-1:-1;7783:23:167;;7632:180;-1:-1:-1;7632:180:167:o;7817:397::-;7903:6;7911;7919;7927;7980:3;7968:9;7959:7;7955:23;7951:33;7948:53;;;7997:1;7994;7987:12;7948:53;8033:9;8020:23;8010:33;;8062:38;8096:2;8085:9;8081:18;8062:38;:::i;:::-;8052:48;;8147:2;8136:9;8132:18;8119:32;8109:42;;8170:38;8204:2;8193:9;8189:18;8170:38;:::i;:::-;8160:48;;7817:397;;;;;;;:::o;8219:247::-;8286:6;8294;8347:2;8335:9;8326:7;8322:23;8318:32;8315:52;;;8363:1;8360;8353:12;8315:52;-1:-1:-1;;8386:23:167;;;8456:2;8441:18;;;8428:32;;-1:-1:-1;8219:247:167:o;8471:188::-;8539:20;;-1:-1:-1;;;;;8588:46:167;;8578:57;;8568:85;;8649:1;8646;8639:12;8664:260;8732:6;8740;8793:2;8781:9;8772:7;8768:23;8764:32;8761:52;;;8809:1;8806;8799:12;8761:52;8832:29;8851:9;8832:29;:::i;:::-;8822:39;;8880:38;8914:2;8903:9;8899:18;8880:38;:::i;:::-;8870:48;;8664:260;;;;;:::o;8929:315::-;8994:6;9002;9055:2;9043:9;9034:7;9030:23;9026:32;9023:52;;;9071:1;9068;9061:12;9023:52;9094:29;9113:9;9094:29;:::i;:::-;9084:39;;9173:2;9162:9;9158:18;9145:32;9186:28;9208:5;9186:28;:::i;:::-;9233:5;9223:15;;;8929:315;;;;;:::o;9249:316::-;9326:6;9334;9342;9395:2;9383:9;9374:7;9370:23;9366:32;9363:52;;;9411:1;9408;9401:12;9363:52;-1:-1:-1;;9434:23:167;;;9504:2;9489:18;;9476:32;;-1:-1:-1;9555:2:167;9540:18;;;9527:32;;9249:316;-1:-1:-1;9249:316:167:o;9754:162::-;9821:20;;9881:2;9870:21;;;9860:32;;9850:60;;9906:1;9903;9896:12;9921:973;10009:6;10062:3;10050:9;10041:7;10037:23;10033:33;10030:53;;;10079:1;10076;10069:12;10030:53;10105:22;;:::i;:::-;10150:29;10169:9;10150:29;:::i;:::-;10143:5;10136:44;10212:38;10246:2;10235:9;10231:18;10212:38;:::i;:::-;10207:2;10200:5;10196:14;10189:62;10283:37;10316:2;10305:9;10301:18;10283:37;:::i;:::-;10278:2;10271:5;10267:14;10260:61;10353:38;10387:2;10376:9;10372:18;10353:38;:::i;:::-;10348:2;10341:5;10337:14;10330:62;10425:39;10459:3;10448:9;10444:19;10425:39;:::i;:::-;10419:3;10412:5;10408:15;10401:64;10498:39;10532:3;10521:9;10517:19;10498:39;:::i;:::-;10492:3;10485:5;10481:15;10474:64;10571:39;10605:3;10594:9;10590:19;10571:39;:::i;:::-;10565:3;10558:5;10554:15;10547:64;10644:39;10678:3;10667:9;10663:19;10644:39;:::i;:::-;10638:3;10631:5;10627:15;10620:64;10703:3;10738:35;10769:2;10758:9;10754:18;10738:35;:::i;:::-;10722:14;;;10715:59;10793:3;10828:35;10844:18;;;10828:35;:::i;:::-;10812:14;;;10805:59;10816:5;9921:973;-1:-1:-1;;;9921:973:167:o;10899:762::-;11007:6;11015;11023;11031;11039;11047;11055;11108:3;11096:9;11087:7;11083:23;11079:33;11076:53;;;11125:1;11122;11115:12;11076:53;11148:29;11167:9;11148:29;:::i;:::-;11138:39;;11196:38;11230:2;11219:9;11215:18;11196:38;:::i;:::-;11186:48;;11284:2;11273:9;11269:18;11256:32;11297:28;11319:5;11297:28;:::i;:::-;11344:5;-1:-1:-1;11396:2:167;11381:18;;11368:32;;-1:-1:-1;11452:3:167;11437:19;;11424:33;11501:4;11488:18;;11476:31;;11466:59;;11521:1;11518;11511:12;11466:59;10899:762;;;;-1:-1:-1;10899:762:167;;;;11544:7;11598:3;11583:19;;11570:33;;-1:-1:-1;11650:3:167;11635:19;;;11622:33;;10899:762;-1:-1:-1;;10899:762:167:o;12315:322::-;12392:6;12400;12408;12461:2;12449:9;12440:7;12436:23;12432:32;12429:52;;;12477:1;12474;12467:12;12429:52;12513:9;12500:23;12490:33;;12542:38;12576:2;12565:9;12561:18;12542:38;:::i;:::-;12532:48;;12627:2;12616:9;12612:18;12599:32;12589:42;;12315:322;;;;;:::o;12642:186::-;12701:6;12754:2;12742:9;12733:7;12729:23;12725:32;12722:52;;;12770:1;12767;12760:12;12722:52;12793:29;12812:9;12793:29;:::i;13041:186::-;13100:6;13153:2;13141:9;13132:7;13128:23;13124:32;13121:52;;;13169:1;13166;13159:12;13121:52;13192:29;13211:9;13192:29;:::i;13232:472::-;13327:6;13335;13343;13351;13359;13412:3;13400:9;13391:7;13387:23;13383:33;13380:53;;;13429:1;13426;13419:12;13380:53;13465:9;13452:23;13442:33;;13494:38;13528:2;13517:9;13513:18;13494:38;:::i;:::-;13484:48;;13551:38;13585:2;13574:9;13570:18;13551:38;:::i;:::-;13541:48;;13636:2;13625:9;13621:18;13608:32;13598:42;;13659:39;13693:3;13682:9;13678:19;13659:39;:::i;:::-;13649:49;;13232:472;;;;;;;;:::o;13709:334::-;13911:2;13893:21;;;13950:2;13930:18;;;13923:30;-1:-1:-1;;;13984:2:167;13969:18;;13962:40;14034:2;14019:18;;13709:334::o;14180:127::-;14241:10;14236:3;14232:20;14229:1;14222:31;14272:4;14269:1;14262:15;14296:4;14293:1;14286:15;14312:200;-1:-1:-1;;;;;14448:10:167;;;14436;;;14432:27;;14471:12;;;14468:38;;;14486:18;;:::i;:::-;14468:38;14312:200;;;;:::o;14841:127::-;14902:10;14897:3;14893:20;14890:1;14883:31;14933:4;14930:1;14923:15;14957:4;14954:1;14947:15;14973:125;15038:9;;;15059:10;;;15056:36;;;15072:18;;:::i;15103:128::-;15170:9;;;15191:11;;;15188:37;;;15205:18;;:::i;15236:184::-;15306:6;15359:2;15347:9;15338:7;15334:23;15330:32;15327:52;;;15375:1;15372;15365:12;15327:52;-1:-1:-1;15398:16:167;;15236:184;-1:-1:-1;15236:184:167:o;15704:136::-;15739:3;-1:-1:-1;;;15760:22:167;;15757:48;;15785:18;;:::i;:::-;-1:-1:-1;15825:1:167;15821:13;;15704:136::o;15845:168::-;15918:9;;;15949;;15966:15;;;15960:22;;15946:37;15936:71;;15987:18;;:::i;17424:135::-;17463:3;17484:17;;;17481:43;;17504:18;;:::i;:::-;-1:-1:-1;17551:1:167;17540:13;;17424:135::o;17756:127::-;17817:10;17812:3;17808:20;17805:1;17798:31;17848:4;17845:1;17838:15;17872:4;17869:1;17862:15;17888:112;17920:1;17946;17936:35;;17951:18;;:::i;:::-;-1:-1:-1;17985:9:167;;17888:112::o;18215:245::-;18282:6;18335:2;18323:9;18314:7;18310:23;18306:32;18303:52;;;18351:1;18348;18341:12;18303:52;18383:9;18377:16;18402:28;18424:5;18402:28;:::i;18465:197::-;-1:-1:-1;;;;;18587:10:167;;;18599;;;18583:27;;18622:11;;;18619:37;;;18636:18;;:::i;18667:245::-;18765:2;18735:17;;;18754;;;;18731:41;-1:-1:-1;;;;;18787:44:167;;-1:-1:-1;;;;;;18833:49:167;;18784:99;18781:125;;;18886:18;;:::i;18917:249::-;19017:2;19006:17;;;18987;;;;18983:41;-1:-1:-1;;;;;;19039:50:167;;-1:-1:-1;;;;;19091:45:167;;19036:101;19033:127;;;19140:18;;:::i;19171:200::-;19237:9;;;19210:4;19265:9;;19293:10;;19305:12;;;19289:29;19328:12;;;19320:21;;19286:56;19283:82;;;19345:18;;:::i;20202:216::-;20266:9;;;20294:11;;;20241:3;20324:9;;20352:10;;20348:19;;20377:10;;20369:19;;20345:44;20342:70;;;20392:18;;:::i;:::-;20342:70;;20202:216;;;;:::o;20423:193::-;20462:1;20488;20478:35;;20493:18;;:::i;:::-;-1:-1:-1;;;20529:18:167;;-1:-1:-1;;20549:13:167;;20525:38;20522:64;;;20566:18;;:::i;:::-;-1:-1:-1;20600:10:167;;20423:193::o",
    "linkReferences": {},
    "immutableReferences": {
      "10": [
        {
          "start": 594,
          "length": 32
        },
        {
          "start": 2109,
          "length": 32
        }
      ],
      "11651": [
        {
          "start": 1187,
          "length": 32
        },
        {
          "start": 5905,
          "length": 32
        }
      ],
      "12488": [
        {
          "start": 14743,
          "length": 32
        }
      ],
      "12490": [
        {
          "start": 14804,
          "length": 32
        }
      ],
      "4811": [
        {
          "start": 4482,
          "length": 32
        },
        {
          "start": 4636,
          "length": 32
        },
        {
          "start": 4751,
          "length": 32
        },
        {
          "start": 9897,
          "length": 32
        },
        {
          "start": 9970,
          "length": 32
        },
        {
          "start": 11412,
          "length": 32
        },
        {
          "start": 11485,
          "length": 32
        },
        {
          "start": 11703,
          "length": 32
        },
        {
          "start": 11861,
          "length": 32
        },
        {
          "start": 15690,
          "length": 32
        },
        {
          "start": 15876,
          "length": 32
        },
        {
          "start": 16073,
          "length": 32
        },
        {
          "start": 16225,
          "length": 32
        }
      ],
      "4814": [
        {
          "start": 9653,
          "length": 32
        },
        {
          "start": 9822,
          "length": 32
        },
        {
          "start": 10132,
          "length": 32
        }
      ],
      "4817": [
        {
          "start": 3502,
          "length": 32
        },
        {
          "start": 5367,
          "length": 32
        },
        {
          "start": 6514,
          "length": 32
        },
        {
          "start": 7679,
          "length": 32
        },
        {
          "start": 8635,
          "length": 32
        },
        {
          "start": 9196,
          "length": 32
        },
        {
          "start": 10284,
          "length": 32
        },
        {
          "start": 10568,
          "length": 32
        },
        {
          "start": 13325,
          "length": 32
        },
        {
          "start": 13920,
          "length": 32
        },
        {
          "start": 15524,
          "length": 32
        },
        {
          "start": 18819,
          "length": 32
        },
        {
          "start": 20785,
          "length": 32
        }
      ],
      "4820": [
        {
          "start": 5400,
          "length": 32
        },
        {
          "start": 6547,
          "length": 32
        },
        {
          "start": 12963,
          "length": 32
        },
        {
          "start": 13107,
          "length": 32
        },
        {
          "start": 17515,
          "length": 32
        },
        {
          "start": 18322,
          "length": 32
        },
        {
          "start": 19652,
          "length": 32
        },
        {
          "start": 20594,
          "length": 32
        },
        {
          "start": 22085,
          "length": 32
        }
      ],
      "4823": [
        {
          "start": 5333,
          "length": 32
        },
        {
          "start": 6481,
          "length": 32
        },
        {
          "start": 12997,
          "length": 32
        },
        {
          "start": 13074,
          "length": 32
        },
        {
          "start": 16391,
          "length": 32
        },
        {
          "start": 16436,
          "length": 32
        },
        {
          "start": 17439,
          "length": 32
        },
        {
          "start": 18356,
          "length": 32
        },
        {
          "start": 19686,
          "length": 32
        },
        {
          "start": 20628,
          "length": 32
        },
        {
          "start": 22052,
          "length": 32
        }
      ],
      "4826": [
        {
          "start": 5145,
          "length": 32
        },
        {
          "start": 5220,
          "length": 32
        },
        {
          "start": 5478,
          "length": 32
        },
        {
          "start": 16829,
          "length": 32
        },
        {
          "start": 16908,
          "length": 32
        },
        {
          "start": 17477,
          "length": 32
        },
        {
          "start": 18616,
          "length": 32
        },
        {
          "start": 18676,
          "length": 32
        },
        {
          "start": 21282,
          "length": 32
        },
        {
          "start": 23765,
          "length": 32
        }
      ],
      "4829": [
        {
          "start": 3305,
          "length": 32
        },
        {
          "start": 6384,
          "length": 32
        },
        {
          "start": 7473,
          "length": 32
        },
        {
          "start": 7937,
          "length": 32
        },
        {
          "start": 8494,
          "length": 32
        },
        {
          "start": 9007,
          "length": 32
        }
      ],
      "4840": [
        {
          "start": 12626,
          "length": 32
        },
        {
          "start": 13156,
          "length": 32
        },
        {
          "start": 15574,
          "length": 32
        },
        {
          "start": 18420,
          "length": 32
        }
      ],
      "4843": [
        {
          "start": 12748,
          "length": 32
        },
        {
          "start": 13447,
          "length": 32
        },
        {
          "start": 19873,
          "length": 32
        },
        {
          "start": 21402,
          "length": 32
        }
      ],
      "4846": [
        {
          "start": 12671,
          "length": 32
        },
        {
          "start": 12792,
          "length": 32
        },
        {
          "start": 15642,
          "length": 32
        },
        {
          "start": 21446,
          "length": 32
        }
      ],
      "4864": [
        {
          "start": 3895,
          "length": 32
        },
        {
          "start": 4017,
          "length": 32
        },
        {
          "start": 4127,
          "length": 32
        }
      ],
      "4867": [
        {
          "start": 15007,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "DOMAIN_SEPARATOR()": "3644e515",
    "PERMIT_TYPEHASH()": "30adf81f",
    "accrue(uint256,int256)": "68096239",
    "addLiquidity(uint256,uint256,uint256,(address,bool,bytes))": "9aa68462",
    "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
    "calculateFeesGivenBonds(uint256,uint256,uint256,uint256)": "22d5506b",
    "calculateFeesGivenShares(uint256,uint256,uint256)": "71f88b7c",
    "calculateIdleShareReserves(uint256)": "b1b4b170",
    "calculateOpenLong(uint256,uint256)": "9bd33498",
    "calculateTimeRemaining(uint256)": "68c2ecb8",
    "calculateTimeRemainingScaled(uint256)": "ca6d38f7",
    "checkpoint(uint256)": "ed64bab2",
    "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
    "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
    "collectGovernanceFee((address,bool,bytes))": "3e691db9",
    "dataProvider()": "b334ed86",
    "getOracleState()": "8fca1f7b",
    "getTotalShares()": "d5002f2e",
    "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
    "latestCheckpoint()": "907c0f92",
    "loadOracle(uint256)": "4daa8b8f",
    "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
    "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070",
    "pause(bool)": "02329a29",
    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
    "recordOracle(uint256)": "5a1a3e7c",
    "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
    "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434",
    "setApproval(uint256,address,uint256)": "9cd241af",
    "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
    "setApprovalForAll(address,bool)": "a22cb465",
    "setGovernance(address)": "ab033ea9",
    "setLongExposure(uint128)": "b4f8da39",
    "setMarketState((uint128,uint128,int128,uint128,uint128,uint128,uint128,uint128,bool,bool))": "88348397",
    "setPauser(address,bool)": "7180c8ca",
    "setReserves(uint128,uint128)": "702db0eb",
    "setTotalShares(uint256)": "a77384c1",
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
    "updateLiquidity(int256)": "8120a3e2"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"oracleSize\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updateGap\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"_dataProvider\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"BaseBufferExceedsShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BelowMinimumContribution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidApr\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointTime\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativeInterest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Paused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolAlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseFees\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"time\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"apr\",\"type\":\"int256\"}],\"name\":\"accrue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minApr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxApr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amountOut\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_normalizedTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_spotPrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateFeesGivenBonds\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalCurveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalFlatFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceCurveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceFlatFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalGovernanceFee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_spotPrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateFeesGivenShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalCurveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceCurveFee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_sharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateIdleShareReserves\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_sharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateOpenLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shareReservesDelta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReservesDelta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalGovernanceFee\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"}],\"name\":\"calculateTimeRemaining\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timeRemaining\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"}],\"name\":\"calculateTimeRemainingScaled\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timeRemaining\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"dataProvider\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getOracleState\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestCheckpoint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"loadOracle\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"data\",\"type\":\"uint256\"}],\"name\":\"recordOracle\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_withdrawalShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutputPerShare\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesRedeemed\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_lpShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalShares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"}],\"name\":\"setLongExposure\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"_marketState_\",\"type\":\"tuple\"}],\"name\":\"setMarketState\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"}],\"name\":\"setReserves\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_totalShares\",\"type\":\"uint256\"}],\"name\":\"setTotalShares\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"_shareReservesDelta\",\"type\":\"int256\"}],\"name\":\"updateLiquidity\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_contribution\":\"The amount to supply.\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"lpShares\":\"The number of LP tokens created\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"the source account\",\"ids\":\"The array of token ids of the asset to transfer\",\"to\":\"the destination account\",\"values\":\"The amount of each token to transfer\"}},\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of longs to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum amount of base the trader will accept.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The amount of underlying the user receives.\"}},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of shorts to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum output of this trade.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The amount of base tokens produced by closing this short\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The amount of base collected.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount to supply.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"lpShares\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_amount\":\"The amount to open a long with.\",\"_minOutput\":\"The minimum number of bonds to receive.\",\"_minSharePrice\":\"The minimum share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"bondProceeds\":\"The amount of bonds the user received\",\"maturityTime\":\"The maturity time of the bonds.\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade.\",\"_minSharePrice\":\"The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the short.\",\"_1\":\"The amount the user deposited for this trade.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should be generated with the      eth_signTypedData JSON RPC call instead of the eth_sign JSON RPC call. If using out of date      parity signing libraries the v component may need to be adjusted. Also it is very rare but possible      for v to be other values, those values are not supported.\",\"params\":{\"_approved\":\"a boolean of the approval status to set to\",\"deadline\":\"the timestamp which the signature must be submitted by to be valid\",\"owner\":\"the owner of the account which is having the new approval set\",\"r\":\"The r component of the ECDSA signature\",\"s\":\"The s component of the ECDSA signature\",\"spender\":\"the address which will be allowed to spend owner's tokens\",\"v\":\"Extra ECDSA data which allows public key recovery from signature assumed to be 27 or 28\"}},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_minOutputPerShare\":\"The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.\",\"_options\":\"The options that configure how the operation is settled.\",\"_withdrawalShares\":\"The withdrawal shares to redeem.\"},\"returns\":{\"proceeds\":\"The amount the LP received.\",\"withdrawalSharesRedeemed\":\"The amount of withdrawal shares that were redeemed.\"}},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_lpShares\":\"The LP shares to burn.\",\"_minOutput\":\"The minium amount of the base token to receive.Note - this        value is likely to be less than the amount LP shares are worth.        The remainder is in short and long withdraw shares which are hard        to game the value of.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"proceeds\":\"The amount the LP removing liquidity receives. The         LP receives a proportional amount of the pool's idle capital\",\"withdrawalShares\":\"The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal         in value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]\",\"operator\":\"The address who will be able to use the tokens\",\"tokenID\":\"The asset to approve the use of\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]\",\"caller\":\"The eth address which called the linking contract\",\"operator\":\"The address who will be able to use the tokens\",\"tokenID\":\"The asset to approve the use of\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval\",\"operator\":\"The eth address which can access the caller's assets\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move\",\"from\":\"The address who's balance will be reduced\",\"to\":\"The address who's balance will be increased\",\"tokenID\":\"The token identifier\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move\",\"caller\":\"The msg.sender from the bridge\",\"from\":\"The address who's balance will be reduced\",\"to\":\"The address who's balance will be increased\",\"tokenID\":\"The token identifier\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"###################### ### ERC20Forwarder ### ######################\"}],\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}],\"Unauthorized()\":[{\"notice\":\"############### ### Factory ### ###############\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"###################### ### SafeCast ### ######################\"}]},\"events\":{\"PauserUpdated(address)\":{\"notice\":\"Pause ///\"}},\"kind\":\"user\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another\"},\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owners signature.\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to set asset approvals\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setMarketState((uint128,uint128,int128,uint128,uint128,uint128,uint128,uint128,bool,bool))\":{\"notice\":\"Mocks ///\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permission-ed transfer for the bridge to access, only callable by         the ERC20 linking bridge\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockHyperdrive.sol\":\"MockHyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/DataProvider.sol\":{\"keccak256\":\"0x4ab8d6b27ad40963fde6512935aa0163c00259a51477bcb15d85f222d84ed0a6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3eaed8100e054b7b6d3dd34b80c72ab86669076d72e83daca1c6297441ac0e4b\",\"dweb:/ipfs/QmPCr6XchfY4nbvVdvnuJzPJc434AV6HAnjQXnSgo9vNDt\"]},\"contracts/src/Hyperdrive.sol\":{\"keccak256\":\"0x2a4cbe095d6b6818959ba078ba32a3d71b06bee714193a92431e0ee56ae714bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://31bad624349a8efd7f0d1ada9e8635b7d4191e0f80174b861ae76e63279917f6\",\"dweb:/ipfs/QmVBWfcxpNQLegXVLmoGYy1H5rwGaaAmkRwaLJiaxAaJmX\"]},\"contracts/src/HyperdriveBase.sol\":{\"keccak256\":\"0xd8b673eb52f74ac18cd75bcc4a9a4ba56bb952eb31600d522b6046c25e8d4c32\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://17a8b842f8538181e5a56fd3a904b7aa1bde2eb2c3d5e7fc55bbf5aea084ffbd\",\"dweb:/ipfs/QmVFB1ysPMXo6DPRdc3bAfMpWY8VCPwS3xhxmUFDRY4Zgu\"]},\"contracts/src/HyperdriveDataProvider.sol\":{\"keccak256\":\"0xa3bc354d7e923ff1aad4191999ff6cd98e2ac4c034ac3188c87d5b974194820c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fa2503a7ed51e469625aef59b0870b64c6fd0c9e774ed08f39decc5c8e4d74c6\",\"dweb:/ipfs/QmbUFAPgVb8uXmHUdQP9Ck3gZCHxRQBNGuWGJydkM8EGhG\"]},\"contracts/src/HyperdriveLP.sol\":{\"keccak256\":\"0x8d7edd9add98082a7a8d269f99788237a0b244c8dca3556a367b764bc3c17c02\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://abfe277c6982ed6344c8a2e4507e322d61fbbb76f62c673bdfbaa61495188669\",\"dweb:/ipfs/QmRp1Fc2WkAxQjxLWBr4Y7RL5j2VAQpqWMZ8Zd7sAAE2FJ\"]},\"contracts/src/HyperdriveLong.sol\":{\"keccak256\":\"0x7dda4c0437e908336901192a3ac4290dfd27a8afc618f4dd787c517ffe608d9c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://70133e63ca643fce51ac8eac8cadb96910fcabde98362e8c3cf91c0b629779f0\",\"dweb:/ipfs/QmTqAFsCvvA2X43oLfbmUFqvaj7eMLLHZ9odREFsBtzdmf\"]},\"contracts/src/HyperdriveShort.sol\":{\"keccak256\":\"0x0330ca18326c2da2cfd29a6433e15dc8fb6213ef5b70717ef02a4fa17f69e64a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c23b142bc142472a47c6e739d008c90471dbcf8ec5b9415fd0e86f5920ef5dc1\",\"dweb:/ipfs/QmdnW3Kk4R7kQ1FQBuQNV5M9VUdHSkEvvvsjNBDoVi5geX\"]},\"contracts/src/HyperdriveStorage.sol\":{\"keccak256\":\"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a\",\"dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY\"]},\"contracts/src/HyperdriveTWAP.sol\":{\"keccak256\":\"0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc\",\"dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac\"]},\"contracts/src/interfaces/IDataProvider.sol\":{\"keccak256\":\"0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15\",\"dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78\",\"dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206\",\"dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xa425f4064f7e95fc5da7763b26627ef0be68db76763bde67cd54cfda489a19ed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://abc4b8f6f8c66a0d966b1dc366d689fc2844a60d866ed3f19cdd3852a0c274f6\",\"dweb:/ipfs/QmUSo1URvRru11TYPMGSdQR6FDRZk7SPh8tcze3T6XL4gL\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xbd61fe3be6d0c8742f09a8174a5a2757e9070805b49d3fc7217f120b83c0ce0f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5b6524a56a3062a3d9b47c2ad2712f90643a84971cd155f8f00fd31ef7a432fe\",\"dweb:/ipfs/QmXYtLBzjaVkh4WhTxTE1GEoqjcyidw1peyAenfAd5vPPr\"]},\"contracts/src/token/MultiToken.sol\":{\"keccak256\":\"0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98\",\"dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy\"]},\"contracts/src/token/MultiTokenDataProvider.sol\":{\"keccak256\":\"0xd1317d856f35950481598cedcb42722c7068e2483f6a220be615128baa607c57\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1c9641add84eb43fc5a4a68921ac492b416223523d269a41b50e1858a8dc86a0\",\"dweb:/ipfs/QmUdADg8AwChKPyGxm9TJuwb7gvgqewoXfNzT4qqdyHWcs\"]},\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0x4ac8b598e2502ea35c1f5aa8a1bd4ca9ed4152e1f8bfe9e6dad16b0a8bea4c01\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://513eaa91659eef7f92dad51f0a2e82c817e1a5938571c8ce28cce36f7d0dae4d\",\"dweb:/ipfs/QmYFv511pzXFEiM2DRjhBFxRe4TbdLopRutWKLwWnvZSxh\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0x180bd1e125dc35405886e74abf66d48d98802e42ff80e48edcc9931b6c38ee5e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62261e811c9cc6187a4cb8108d3f364707a1f2ce84090c055103d280e590577a\",\"dweb:/ipfs/QmW4nzqcDuKstJJ8FEziGFJf2XZnjkvsj2bbWzJAPNngKP\"]},\"lib/openzeppelin-contracts/contracts/access/AccessControl.sol\":{\"keccak256\":\"0xbc7fc49ba05b312e318d3d7b517ed0254489320bedef2e91f80c3bd4e904fc0c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e411d112f89fcadbff89da0579d61eafdf76272aaa91fb18728a86337440bb88\",\"dweb:/ipfs/QmfKJqMJ2CF1mw4UwDajoFdrrfKWSZwetkAByUP56EeqSQ\"]},\"lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol\":{\"keccak256\":\"0x13f5e15f2a0650c0b6aaee2ef19e89eaf4870d6e79662d572a393334c1397247\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7ee05f28f549a5d6515e152580716b87636ed4bfab9812499a6e3803df88288b\",\"dweb:/ipfs/QmeEnhdwY1t5Y3YU5a4ffzgXuToydH2PNdNxV9W7dEPRQJ\"]},\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a\",\"dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh\"]},\"lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol\":{\"keccak256\":\"0xba4459ab871dfa300f5212c6c30178b63898c03533a1ede28436f11546626676\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dcc7b09bfa6e18aab262ca372f4a9b1fc82e294b430706a4e1378cf58e6a276\",\"dweb:/ipfs/QmT8oSAcesdctR15HMLhr2a1HRpXymxdjTfdtfTYJcj2N2\"]},\"lib/openzeppelin-contracts/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xb62681ccbf84aef125665cfdfc0bf13b532925b1a520d6c935913560f539a31b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://21dbc5b8aede7dee8f0e3bf296a58270f376f8e40d6f8becccde5b3cf34bc8df\",\"dweb:/ipfs/QmfHPWrtGiMNhTtLDYtqSd1eVd35Zqgd4PW9bR3i23oJgg\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol\":{\"keccak256\":\"0x0d19410453cda55960a818e02bd7c18952a5c8fe7a3036e81f0d599f34487a7b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4c0f62d3d5bef22b5ca00cc3903e7de6152cb68d2d22401a463f373cda54c00f\",\"dweb:/ipfs/QmSfzjZux7LC7NW2f7rjCXTHeFMUCWERqDkhpCTBy7kxTe\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Pausable.sol\":{\"keccak256\":\"0xbced39fde26b27a8db47f4c705ea3f81fad997052afefc957fe3436aa06c3d5a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3b6c5e06e1bd9222b57c1855b2e18646357efe961f629a8ce69ac0de6bd07790\",\"dweb:/ipfs/QmcYQWqN1222Dmrq1uwAQq6wvU5RRBtFGjQM6h4Fopigu9\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol\":{\"keccak256\":\"0x2cd54808b851c4db22f459065af0b7a952262741a85a73923e7a660767cd7baa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://750c4a78e953fe92317bba7166afd0a4b7725723e5822ea1b92ffd4e72d2d36b\",\"dweb:/ipfs/QmZNyCSrdYXGQfmB6LkbX8R6y4gGZRNh1d2pJobYBpkaRF\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x2626d8ab3dfdad0fad630c212ad146d59473d0f48b771784c61a7c1dbbea1f3f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d7c144532f1e7c76ac95fb6a8f617c1f740d7a73442a907eb60910e99dfa1fbf\",\"dweb:/ipfs/QmZsGyooD6emxB8JCuugRjnRYS2MPZEL586uuV7dgC8Jng\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4\",\"dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7\",\"dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6\"]},\"lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol\":{\"keccak256\":\"0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72\",\"dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]},\"test/utils/Constants.sol\":{\"keccak256\":\"0xd7e0611edda0191fb3a6bf14a723975601dc64b1271584468a3b309ddf1b9e5b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e7e7f38a2b927f3c3e53e2c119537d8112c1ba61dfd56aeead7494b38a5277b0\",\"dweb:/ipfs/QmbaBBZKEJ857m3NDUcsTmemb93ajfuQjsjVNJVY2tRHs1\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x5861db03144fda3f71c21354d8a639396bacb85acaca8804f6dbaf600428cf9a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c01ebbc32504f67bb4eaf65ef613431a0afc05530dbbc9a0489c342f722904b7\",\"dweb:/ipfs/QmZEVPaEqhD4p13yzfrKf1K5MFrvNaeF9pn7hSZxs9YfmQ\"]}},\"version\":1}",
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
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
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
              "name": "time",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "apr",
              "type": "int256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "accrue"
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
              "name": "_amountOut",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_normalizedTimeRemaining",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_spotPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "calculateFeesGivenBonds",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "totalCurveFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalFlatFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "governanceCurveFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "governanceFlatFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalGovernanceFee",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_spotPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "calculateFeesGivenShares",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "totalCurveFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "governanceCurveFee",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_sharePrice",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "calculateIdleShareReserves",
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
              "name": "_shareAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_sharePrice",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "calculateOpenLong",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "shareReservesDelta",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "bondReservesDelta",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "bondProceeds",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalGovernanceFee",
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
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "calculateTimeRemaining",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "timeRemaining",
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
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "calculateTimeRemainingScaled",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "timeRemaining",
              "type": "uint256"
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getOracleState",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getTotalShares",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "latestCheckpoint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "checkpointTime",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "loadOracle",
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
              "name": "data",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "recordOracle"
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
              "internalType": "uint128",
              "name": "longExposure",
              "type": "uint128"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setLongExposure"
        },
        {
          "inputs": [
            {
              "internalType": "struct IHyperdrive.MarketState",
              "name": "_marketState_",
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
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setMarketState"
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
              "internalType": "uint128",
              "name": "shareReserves",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "bondReserves",
              "type": "uint128"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setReserves"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_totalShares",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setTotalShares"
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
        },
        {
          "inputs": [
            {
              "internalType": "int256",
              "name": "_shareReservesDelta",
              "type": "int256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateLiquidity"
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
          "setMarketState((uint128,uint128,int128,uint128,uint128,uint128,uint128,uint128,bool,bool))": {
            "notice": "Mocks ///"
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
        "contracts/test/MockHyperdrive.sol": "MockHyperdrive"
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
      "contracts/src/HyperdriveDataProvider.sol": {
        "keccak256": "0xa3bc354d7e923ff1aad4191999ff6cd98e2ac4c034ac3188c87d5b974194820c",
        "urls": [
          "bzz-raw://fa2503a7ed51e469625aef59b0870b64c6fd0c9e774ed08f39decc5c8e4d74c6",
          "dweb:/ipfs/QmbUFAPgVb8uXmHUdQP9Ck3gZCHxRQBNGuWGJydkM8EGhG"
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
      "contracts/src/token/MultiTokenDataProvider.sol": {
        "keccak256": "0xd1317d856f35950481598cedcb42722c7068e2483f6a220be615128baa607c57",
        "urls": [
          "bzz-raw://1c9641add84eb43fc5a4a68921ac492b416223523d269a41b50e1858a8dc86a0",
          "dweb:/ipfs/QmUdADg8AwChKPyGxm9TJuwb7gvgqewoXfNzT4qqdyHWcs"
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
      "contracts/test/ERC20Mintable.sol": {
        "keccak256": "0x4ac8b598e2502ea35c1f5aa8a1bd4ca9ed4152e1f8bfe9e6dad16b0a8bea4c01",
        "urls": [
          "bzz-raw://513eaa91659eef7f92dad51f0a2e82c817e1a5938571c8ce28cce36f7d0dae4d",
          "dweb:/ipfs/QmYFv511pzXFEiM2DRjhBFxRe4TbdLopRutWKLwWnvZSxh"
        ],
        "license": "Apache-2.0"
      },
      "contracts/test/MockHyperdrive.sol": {
        "keccak256": "0x180bd1e125dc35405886e74abf66d48d98802e42ff80e48edcc9931b6c38ee5e",
        "urls": [
          "bzz-raw://62261e811c9cc6187a4cb8108d3f364707a1f2ce84090c055103d280e590577a",
          "dweb:/ipfs/QmW4nzqcDuKstJJ8FEziGFJf2XZnjkvsj2bbWzJAPNngKP"
        ],
        "license": "Apache-2.0"
      },
      "lib/openzeppelin-contracts/contracts/access/AccessControl.sol": {
        "keccak256": "0xbc7fc49ba05b312e318d3d7b517ed0254489320bedef2e91f80c3bd4e904fc0c",
        "urls": [
          "bzz-raw://e411d112f89fcadbff89da0579d61eafdf76272aaa91fb18728a86337440bb88",
          "dweb:/ipfs/QmfKJqMJ2CF1mw4UwDajoFdrrfKWSZwetkAByUP56EeqSQ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol": {
        "keccak256": "0x13f5e15f2a0650c0b6aaee2ef19e89eaf4870d6e79662d572a393334c1397247",
        "urls": [
          "bzz-raw://7ee05f28f549a5d6515e152580716b87636ed4bfab9812499a6e3803df88288b",
          "dweb:/ipfs/QmeEnhdwY1t5Y3YU5a4ffzgXuToydH2PNdNxV9W7dEPRQJ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/access/IAccessControl.sol": {
        "keccak256": "0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57",
        "urls": [
          "bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a",
          "dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol": {
        "keccak256": "0xba4459ab871dfa300f5212c6c30178b63898c03533a1ede28436f11546626676",
        "urls": [
          "bzz-raw://3dcc7b09bfa6e18aab262ca372f4a9b1fc82e294b430706a4e1378cf58e6a276",
          "dweb:/ipfs/QmT8oSAcesdctR15HMLhr2a1HRpXymxdjTfdtfTYJcj2N2"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/security/Pausable.sol": {
        "keccak256": "0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773",
        "urls": [
          "bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004",
          "dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
        "keccak256": "0xb62681ccbf84aef125665cfdfc0bf13b532925b1a520d6c935913560f539a31b",
        "urls": [
          "bzz-raw://21dbc5b8aede7dee8f0e3bf296a58270f376f8e40d6f8becccde5b3cf34bc8df",
          "dweb:/ipfs/QmfHPWrtGiMNhTtLDYtqSd1eVd35Zqgd4PW9bR3i23oJgg"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        "urls": [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol": {
        "keccak256": "0x0d19410453cda55960a818e02bd7c18952a5c8fe7a3036e81f0d599f34487a7b",
        "urls": [
          "bzz-raw://4c0f62d3d5bef22b5ca00cc3903e7de6152cb68d2d22401a463f373cda54c00f",
          "dweb:/ipfs/QmSfzjZux7LC7NW2f7rjCXTHeFMUCWERqDkhpCTBy7kxTe"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Pausable.sol": {
        "keccak256": "0xbced39fde26b27a8db47f4c705ea3f81fad997052afefc957fe3436aa06c3d5a",
        "urls": [
          "bzz-raw://3b6c5e06e1bd9222b57c1855b2e18646357efe961f629a8ce69ac0de6bd07790",
          "dweb:/ipfs/QmcYQWqN1222Dmrq1uwAQq6wvU5RRBtFGjQM6h4Fopigu9"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
        "keccak256": "0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca",
        "urls": [
          "bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd",
          "dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8"
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
      "lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol": {
        "keccak256": "0x2cd54808b851c4db22f459065af0b7a952262741a85a73923e7a660767cd7baa",
        "urls": [
          "bzz-raw://750c4a78e953fe92317bba7166afd0a4b7725723e5822ea1b92ffd4e72d2d36b",
          "dweb:/ipfs/QmZNyCSrdYXGQfmB6LkbX8R6y4gGZRNh1d2pJobYBpkaRF"
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
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        "keccak256": "0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7",
        "urls": [
          "bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92",
          "dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Strings.sol": {
        "keccak256": "0x2626d8ab3dfdad0fad630c212ad146d59473d0f48b771784c61a7c1dbbea1f3f",
        "urls": [
          "bzz-raw://d7c144532f1e7c76ac95fb6a8f617c1f740d7a73442a907eb60910e99dfa1fbf",
          "dweb:/ipfs/QmZsGyooD6emxB8JCuugRjnRYS2MPZEL586uuV7dgC8Jng"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol": {
        "keccak256": "0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b",
        "urls": [
          "bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d",
          "dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
        "keccak256": "0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1",
        "urls": [
          "bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f",
          "dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
        "keccak256": "0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858",
        "urls": [
          "bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4",
          "dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol": {
        "keccak256": "0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc",
        "urls": [
          "bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7",
          "dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol": {
        "keccak256": "0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598",
        "urls": [
          "bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72",
          "dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ"
        ],
        "license": "MIT"
      },
      "lib/solmate/src/auth/Auth.sol": {
        "keccak256": "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c",
        "urls": [
          "bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac",
          "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": {
        "keccak256": "0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3",
        "urls": [
          "bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef",
          "dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"
        ],
        "license": "AGPL-3.0-only"
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
      "test/utils/Constants.sol": {
        "keccak256": "0xd7e0611edda0191fb3a6bf14a723975601dc64b1271584468a3b309ddf1b9e5b",
        "urls": [
          "bzz-raw://e7e7f38a2b927f3c3e53e2c119537d8112c1ba61dfd56aeead7494b38a5277b0",
          "dweb:/ipfs/QmbaBBZKEJ857m3NDUcsTmemb93ajfuQjsjVNJVY2tRHs1"
        ],
        "license": "Apache-2.0"
      },
      "test/utils/HyperdriveUtils.sol": {
        "keccak256": "0x5861db03144fda3f71c21354d8a639396bacb85acaca8804f6dbaf600428cf9a",
        "urls": [
          "bzz-raw://c01ebbc32504f67bb4eaf65ef613431a0afc05530dbbc9a0489c342f722904b7",
          "dweb:/ipfs/QmZEVPaEqhD4p13yzfrKf1K5MFrvNaeF9pn7hSZxs9YfmQ"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/test/MockHyperdrive.sol",
    "id": 14423,
    "exportedSymbols": {
      "ERC20Mintable": [
        12669
      ],
      "ERC20PresetMinterPauser": [
        59993
      ],
      "ETH": [
        119578
      ],
      "FixedPointMath": [
        9066
      ],
      "Hyperdrive": [
        549
      ],
      "HyperdriveDataProvider": [
        1927
      ],
      "HyperdriveUtils": [
        124790
      ],
      "IHyperdrive": [
        7431
      ],
      "IMockHyperdrive": [
        13633
      ],
      "MockHyperdrive": [
        14346
      ],
      "MockHyperdriveDataProvider": [
        14422
      ],
      "MultiTokenDataProvider": [
        12483
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:12053:50",
    "nodes": [
      {
        "id": 13514,
        "nodeType": "PragmaDirective",
        "src": "39:23:50",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 13516,
        "nodeType": "ImportDirective",
        "src": "64:123:50",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol",
        "file": "openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14423,
        "sourceUnit": 59994,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13515,
              "name": "ERC20PresetMinterPauser",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 59993,
              "src": "73:23:50",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13518,
        "nodeType": "ImportDirective",
        "src": "188:58:50",
        "nodes": [],
        "absolutePath": "contracts/src/Hyperdrive.sol",
        "file": "contracts/src/Hyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14423,
        "sourceUnit": 550,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13517,
              "name": "Hyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 549,
              "src": "197:10:50",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13520,
        "nodeType": "ImportDirective",
        "src": "247:82:50",
        "nodes": [],
        "absolutePath": "contracts/src/HyperdriveDataProvider.sol",
        "file": "contracts/src/HyperdriveDataProvider.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14423,
        "sourceUnit": 1928,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13519,
              "name": "HyperdriveDataProvider",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 1927,
              "src": "256:22:50",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13522,
        "nodeType": "ImportDirective",
        "src": "330:71:50",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "contracts/src/interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14423,
        "sourceUnit": 7432,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13521,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7431,
              "src": "339:11:50",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13524,
        "nodeType": "ImportDirective",
        "src": "402:71:50",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "contracts/src/interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14423,
        "sourceUnit": 7432,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13523,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7431,
              "src": "411:11:50",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13526,
        "nodeType": "ImportDirective",
        "src": "474:76:50",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "contracts/src/libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14423,
        "sourceUnit": 9067,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13525,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9066,
              "src": "483:14:50",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13528,
        "nodeType": "ImportDirective",
        "src": "551:88:50",
        "nodes": [],
        "absolutePath": "contracts/src/token/MultiTokenDataProvider.sol",
        "file": "contracts/src/token/MultiTokenDataProvider.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14423,
        "sourceUnit": 12484,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13527,
              "name": "MultiTokenDataProvider",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 12483,
              "src": "560:22:50",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13530,
        "nodeType": "ImportDirective",
        "src": "640:65:50",
        "nodes": [],
        "absolutePath": "contracts/test/ERC20Mintable.sol",
        "file": "contracts/test/ERC20Mintable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14423,
        "sourceUnit": 12670,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13529,
              "name": "ERC20Mintable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 12669,
              "src": "649:13:50",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13532,
        "nodeType": "ImportDirective",
        "src": "706:47:50",
        "nodes": [],
        "absolutePath": "test/utils/Constants.sol",
        "file": "test/utils/Constants.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14423,
        "sourceUnit": 119579,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13531,
              "name": "ETH",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 119578,
              "src": "715:3:50",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13534,
        "nodeType": "ImportDirective",
        "src": "754:65:50",
        "nodes": [],
        "absolutePath": "test/utils/HyperdriveUtils.sol",
        "file": "test/utils/HyperdriveUtils.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14423,
        "sourceUnit": 124791,
        "symbolAliases": [
          {
            "foreign": {
              "id": 13533,
              "name": "HyperdriveUtils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 124790,
              "src": "763:15:50",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13633,
        "nodeType": "ContractDefinition",
        "src": "821:1674:50",
        "nodes": [
          {
            "id": 13541,
            "nodeType": "FunctionDefinition",
            "src": "853:51:50",
            "nodes": [],
            "functionSelector": "68096239",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "accrue",
            "nameLocation": "862:6:50",
            "parameters": {
              "id": 13539,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13536,
                  "mutability": "mutable",
                  "name": "time",
                  "nameLocation": "877:4:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13541,
                  "src": "869:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13535,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "869:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13538,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "890:3:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13541,
                  "src": "883:10:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 13537,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "883:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "868:26:50"
            },
            "returnParameters": {
              "id": 13540,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "903:0:50"
            },
            "scope": 13633,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13562,
            "nodeType": "FunctionDefinition",
            "src": "910:398:50",
            "nodes": [],
            "functionSelector": "5f0088f7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateFeesGivenShares",
            "nameLocation": "919:24:50",
            "parameters": {
              "id": 13552,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13543,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "961:9:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13562,
                  "src": "953:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13542,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "953:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13545,
                  "mutability": "mutable",
                  "name": "_amountOut",
                  "nameLocation": "988:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13562,
                  "src": "980:18:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13544,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "980:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13547,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "1016:24:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13562,
                  "src": "1008:32:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13546,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1008:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13549,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "1058:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13562,
                  "src": "1050:18:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13548,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1050:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13551,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1086:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13562,
                  "src": "1078:18:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13550,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1078:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "943:159:50"
            },
            "returnParameters": {
              "id": 13561,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13554,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "1171:13:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13562,
                  "src": "1163:21:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13553,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1163:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13556,
                  "mutability": "mutable",
                  "name": "totalFlatFee",
                  "nameLocation": "1206:12:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13562,
                  "src": "1198:20:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13555,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1198:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13558,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "1240:18:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13562,
                  "src": "1232:26:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13557,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1232:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13560,
                  "mutability": "mutable",
                  "name": "governanceFlatFee",
                  "nameLocation": "1280:17:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13562,
                  "src": "1272:25:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13559,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1272:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1149:158:50"
            },
            "scope": 13633,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13579,
            "nodeType": "FunctionDefinition",
            "src": "1314:330:50",
            "nodes": [],
            "functionSelector": "22d5506b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateFeesGivenBonds",
            "nameLocation": "1323:23:50",
            "parameters": {
              "id": 13571,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13564,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "1364:9:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13579,
                  "src": "1356:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13563,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1356:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13566,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "1391:24:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13579,
                  "src": "1383:32:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13565,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1383:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13568,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "1433:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13579,
                  "src": "1425:18:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13567,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1425:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13570,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1461:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13579,
                  "src": "1453:18:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13569,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1453:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1346:131:50"
            },
            "returnParameters": {
              "id": 13578,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13573,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "1546:13:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13579,
                  "src": "1538:21:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13572,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1538:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13575,
                  "mutability": "mutable",
                  "name": "totalFlatFee",
                  "nameLocation": "1581:12:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13579,
                  "src": "1573:20:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13574,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1573:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13577,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "1615:18:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13579,
                  "src": "1607:26:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13576,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1607:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1524:119:50"
            },
            "scope": 13633,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13596,
            "nodeType": "FunctionDefinition",
            "src": "1650:334:50",
            "nodes": [],
            "functionSelector": "fa0f861d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenLong",
            "nameLocation": "1659:17:50",
            "parameters": {
              "id": 13586,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13581,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "1694:12:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13596,
                  "src": "1686:20:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13580,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1686:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13583,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "1724:11:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13596,
                  "src": "1716:19:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13582,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1716:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13585,
                  "mutability": "mutable",
                  "name": "_timeRemaining",
                  "nameLocation": "1753:14:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13596,
                  "src": "1745:22:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13584,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1745:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1676:97:50"
            },
            "returnParameters": {
              "id": 13595,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13588,
                  "mutability": "mutable",
                  "name": "shareReservesDelta",
                  "nameLocation": "1842:18:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13596,
                  "src": "1834:26:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13587,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1834:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13590,
                  "mutability": "mutable",
                  "name": "bondReservesDelta",
                  "nameLocation": "1882:17:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13596,
                  "src": "1874:25:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13589,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1874:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13592,
                  "mutability": "mutable",
                  "name": "bondProceeds",
                  "nameLocation": "1921:12:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13596,
                  "src": "1913:20:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13591,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1913:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13594,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "1955:18:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13596,
                  "src": "1947:26:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13593,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1947:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1820:163:50"
            },
            "scope": 13633,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13603,
            "nodeType": "FunctionDefinition",
            "src": "1990:101:50",
            "nodes": [],
            "functionSelector": "68c2ecb8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemaining",
            "nameLocation": "1999:22:50",
            "parameters": {
              "id": 13599,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13598,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "2039:13:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13603,
                  "src": "2031:21:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13597,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2031:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2021:37:50"
            },
            "returnParameters": {
              "id": 13602,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13601,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13603,
                  "src": "2082:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13600,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2082:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2081:9:50"
            },
            "scope": 13633,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13610,
            "nodeType": "FunctionDefinition",
            "src": "2097:107:50",
            "nodes": [],
            "functionSelector": "ca6d38f7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemainingScaled",
            "nameLocation": "2106:28:50",
            "parameters": {
              "id": 13606,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13605,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "2152:13:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13610,
                  "src": "2144:21:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13604,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2144:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2134:37:50"
            },
            "returnParameters": {
              "id": 13609,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13608,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13610,
                  "src": "2195:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13607,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2195:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2194:9:50"
            },
            "scope": 13633,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13615,
            "nodeType": "FunctionDefinition",
            "src": "2210:60:50",
            "nodes": [],
            "functionSelector": "907c0f92",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "latestCheckpoint",
            "nameLocation": "2219:16:50",
            "parameters": {
              "id": 13611,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2235:2:50"
            },
            "returnParameters": {
              "id": 13614,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13613,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13615,
                  "src": "2261:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13612,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2261:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2260:9:50"
            },
            "scope": 13633,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13620,
            "nodeType": "FunctionDefinition",
            "src": "2276:62:50",
            "nodes": [],
            "functionSelector": "ced09112",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "updateLiquidity",
            "nameLocation": "2285:15:50",
            "parameters": {
              "id": 13618,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13617,
                  "mutability": "mutable",
                  "name": "shareReservesDelta",
                  "nameLocation": "2309:18:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13620,
                  "src": "2301:26:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13616,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2301:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2300:28:50"
            },
            "returnParameters": {
              "id": 13619,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2337:0:50"
            },
            "scope": 13633,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13627,
            "nodeType": "FunctionDefinition",
            "src": "2344:75:50",
            "nodes": [],
            "functionSelector": "8392b8c0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setReserves",
            "nameLocation": "2353:11:50",
            "parameters": {
              "id": 13625,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13622,
                  "mutability": "mutable",
                  "name": "shareReserves",
                  "nameLocation": "2373:13:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13627,
                  "src": "2365:21:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13621,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2365:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13624,
                  "mutability": "mutable",
                  "name": "bondReserves",
                  "nameLocation": "2396:12:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13627,
                  "src": "2388:20:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13623,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2388:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2364:45:50"
            },
            "returnParameters": {
              "id": 13626,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2418:0:50"
            },
            "scope": 13633,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13632,
            "nodeType": "FunctionDefinition",
            "src": "2425:68:50",
            "nodes": [],
            "functionSelector": "8e67f87e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getGovernanceFeesAccrued",
            "nameLocation": "2434:24:50",
            "parameters": {
              "id": 13628,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2458:2:50"
            },
            "returnParameters": {
              "id": 13631,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13630,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13632,
                  "src": "2484:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13629,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2484:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2483:9:50"
            },
            "scope": 13633,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IMockHyperdrive",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          13633
        ],
        "name": "IMockHyperdrive",
        "nameLocation": "831:15:50",
        "scope": 14423,
        "usedErrors": []
      },
      {
        "id": 14346,
        "nodeType": "ContractDefinition",
        "src": "2497:8785:50",
        "nodes": [
          {
            "id": 13638,
            "nodeType": "UsingForDirective",
            "src": "2541:33:50",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 13636,
              "name": "FixedPointMath",
              "nameLocations": [
                "2547:14:50"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9066,
              "src": "2547:14:50"
            },
            "typeName": {
              "id": 13637,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2566:7:50",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 13640,
            "nodeType": "VariableDeclaration",
            "src": "2580:28:50",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "totalShares",
            "nameLocation": "2597:11:50",
            "scope": 14346,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 13639,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2580:7:50",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13661,
            "nodeType": "FunctionDefinition",
            "src": "2615:157:50",
            "nodes": [],
            "body": {
              "id": 13660,
              "nodeType": "Block",
              "src": "2770:2:50",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 13648,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13643,
                    "src": "2722:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  {
                    "id": 13649,
                    "name": "_dataProvider",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13645,
                    "src": "2731:13:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "arguments": [
                      {
                        "hexValue": "30",
                        "id": 13652,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2754:1:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "id": 13651,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2746:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes32_$",
                        "typeString": "type(bytes32)"
                      },
                      "typeName": {
                        "id": 13650,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "2746:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 13653,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2746:10:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  {
                    "arguments": [
                      {
                        "hexValue": "30",
                        "id": 13656,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2766:1:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "id": 13655,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2758:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 13654,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2758:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 13657,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2758:10:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 13658,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 13647,
                  "name": "Hyperdrive",
                  "nameLocations": [
                    "2711:10:50"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 549,
                  "src": "2711:10:50"
                },
                "nodeType": "ModifierInvocation",
                "src": "2711:58:50"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 13646,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13643,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "2666:7:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13661,
                  "src": "2636:37:50",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 13642,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 13641,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "2636:11:50",
                        "2648:10:50"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7245,
                      "src": "2636:22:50"
                    },
                    "referencedDeclaration": 7245,
                    "src": "2636:22:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7245_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13645,
                  "mutability": "mutable",
                  "name": "_dataProvider",
                  "nameLocation": "2691:13:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13661,
                  "src": "2683:21:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13644,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2683:7:50",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2626:84:50"
            },
            "returnParameters": {
              "id": 13659,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2770:0:50"
            },
            "scope": 14346,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 13673,
            "nodeType": "FunctionDefinition",
            "src": "2797:138:50",
            "nodes": [],
            "body": {
              "id": 13672,
              "nodeType": "Block",
              "src": "2890:45:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 13670,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13668,
                      "name": "_marketState",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4833,
                      "src": "2900:12:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                        "typeString": "struct IHyperdrive.MarketState storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 13669,
                      "name": "_marketState_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13665,
                      "src": "2915:13:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_MarketState_$7175_memory_ptr",
                        "typeString": "struct IHyperdrive.MarketState memory"
                      }
                    },
                    "src": "2900:28:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                      "typeString": "struct IHyperdrive.MarketState storage ref"
                    }
                  },
                  "id": 13671,
                  "nodeType": "ExpressionStatement",
                  "src": "2900:28:50"
                }
              ]
            },
            "documentation": {
              "id": 13662,
              "nodeType": "StructuredDocumentation",
              "src": "2778:14:50",
              "text": "Mocks ///"
            },
            "functionSelector": "88348397",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setMarketState",
            "nameLocation": "2806:14:50",
            "parameters": {
              "id": 13666,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13665,
                  "mutability": "mutable",
                  "name": "_marketState_",
                  "nameLocation": "2861:13:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13673,
                  "src": "2830:44:50",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_MarketState_$7175_memory_ptr",
                    "typeString": "struct IHyperdrive.MarketState"
                  },
                  "typeName": {
                    "id": 13664,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 13663,
                      "name": "IHyperdrive.MarketState",
                      "nameLocations": [
                        "2830:11:50",
                        "2842:11:50"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7175,
                      "src": "2830:23:50"
                    },
                    "referencedDeclaration": 7175,
                    "src": "2830:23:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_MarketState_$7175_storage_ptr",
                      "typeString": "struct IHyperdrive.MarketState"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2820:60:50"
            },
            "returnParameters": {
              "id": 13667,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2890:0:50"
            },
            "scope": 14346,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13683,
            "nodeType": "FunctionDefinition",
            "src": "2941:98:50",
            "nodes": [],
            "body": {
              "id": 13682,
              "nodeType": "Block",
              "src": "2996:43:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 13680,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13678,
                      "name": "totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13640,
                      "src": "3006:11:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 13679,
                      "name": "_totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13675,
                      "src": "3020:12:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3006:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 13681,
                  "nodeType": "ExpressionStatement",
                  "src": "3006:26:50"
                }
              ]
            },
            "functionSelector": "a77384c1",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setTotalShares",
            "nameLocation": "2950:14:50",
            "parameters": {
              "id": 13676,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13675,
                  "mutability": "mutable",
                  "name": "_totalShares",
                  "nameLocation": "2973:12:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13683,
                  "src": "2965:20:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13674,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2965:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2964:22:50"
            },
            "returnParameters": {
              "id": 13677,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2996:0:50"
            },
            "scope": 14346,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13751,
            "nodeType": "FunctionDefinition",
            "src": "3171:566:50",
            "nodes": [],
            "body": {
              "id": 13750,
              "nodeType": "Block",
              "src": "3222:515:50",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    null,
                    13691
                  ],
                  "declarations": [
                    null,
                    {
                      "constant": false,
                      "id": 13691,
                      "mutability": "mutable",
                      "name": "interest",
                      "nameLocation": "3242:8:50",
                      "nodeType": "VariableDeclaration",
                      "scope": 13750,
                      "src": "3235:15:50",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 13690,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3235:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13704,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 13698,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "3338:4:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                  "typeString": "contract MockHyperdrive"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                  "typeString": "contract MockHyperdrive"
                                }
                              ],
                              "id": 13697,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3330:7:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 13696,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3330:7:50",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 13699,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3330:13:50",
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
                            "id": 13694,
                            "name": "_baseToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4811,
                            "src": "3309:10:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$6731",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 13695,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3320:9:50",
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6688,
                          "src": "3309:20:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view external returns (uint256)"
                          }
                        },
                        "id": 13700,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3309:35:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13701,
                        "name": "apr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13687,
                        "src": "3358:3:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 13702,
                        "name": "time",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13685,
                        "src": "3375:4:50",
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
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 13692,
                        "name": "HyperdriveUtils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124790,
                        "src": "3254:15:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveUtils_$124790_$",
                          "typeString": "type(library HyperdriveUtils)"
                        }
                      },
                      "id": 13693,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3270:25:50",
                      "memberName": "calculateCompoundInterest",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 122272,
                      "src": "3254:41:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$returns$_t_uint256_$_t_int256_$",
                        "typeString": "function (uint256,int256,uint256) pure returns (uint256,int256)"
                      }
                    },
                    "id": 13703,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3254:135:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_int256_$",
                      "typeString": "tuple(uint256,int256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3232:157:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 13707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 13705,
                      "name": "interest",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13691,
                      "src": "3404:8:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 13706,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3415:1:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3404:12:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 13728,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 13726,
                        "name": "interest",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13691,
                        "src": "3572:8:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 13727,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3583:1:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "3572:12:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 13748,
                    "nodeType": "IfStatement",
                    "src": "3568:163:50",
                    "trueBody": {
                      "id": 13747,
                      "nodeType": "Block",
                      "src": "3586:145:50",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 13738,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "3665:4:50",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  ],
                                  "id": 13737,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "3657:7:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 13736,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "3657:7:50",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 13739,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3657:13:50",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 13743,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "UnaryOperation",
                                    "operator": "-",
                                    "prefix": true,
                                    "src": "3696:9:50",
                                    "subExpression": {
                                      "id": 13742,
                                      "name": "interest",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 13691,
                                      "src": "3697:8:50",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  ],
                                  "id": 13741,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "3688:7:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 13740,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "3688:7:50",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 13744,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3688:18:50",
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
                                        "id": 13732,
                                        "name": "_baseToken",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 4811,
                                        "src": "3622:10:50",
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
                                      "id": 13731,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "3614:7:50",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_address_$",
                                        "typeString": "type(address)"
                                      },
                                      "typeName": {
                                        "id": 13730,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3614:7:50",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 13733,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "3614:19:50",
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
                                  "id": 13729,
                                  "name": "ERC20Mintable",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 12669,
                                  "src": "3600:13:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$12669_$",
                                    "typeString": "type(contract ERC20Mintable)"
                                  }
                                },
                                "id": 13734,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3600:34:50",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC20Mintable_$12669",
                                  "typeString": "contract ERC20Mintable"
                                }
                              },
                              "id": 13735,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3635:4:50",
                              "memberName": "burn",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 12668,
                              "src": "3600:39:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                "typeString": "function (address,uint256) external"
                              }
                            },
                            "id": 13745,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3600:120:50",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 13746,
                          "nodeType": "ExpressionStatement",
                          "src": "3600:120:50"
                        }
                      ]
                    }
                  },
                  "id": 13749,
                  "nodeType": "IfStatement",
                  "src": "3400:331:50",
                  "trueBody": {
                    "id": 13725,
                    "nodeType": "Block",
                    "src": "3418:144:50",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 13717,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "3497:4:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                ],
                                "id": 13716,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3489:7:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 13715,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3489:7:50",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 13718,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3489:13:50",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 13721,
                                  "name": "interest",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 13691,
                                  "src": "3528:8:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                ],
                                "id": 13720,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3520:7:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 13719,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3520:7:50",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 13722,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3520:17:50",
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
                                      "id": 13711,
                                      "name": "_baseToken",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4811,
                                      "src": "3454:10:50",
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
                                    "id": 13710,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "3446:7:50",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 13709,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3446:7:50",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 13712,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3446:19:50",
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
                                "id": 13708,
                                "name": "ERC20Mintable",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12669,
                                "src": "3432:13:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$12669_$",
                                  "typeString": "type(contract ERC20Mintable)"
                                }
                              },
                              "id": 13713,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3432:34:50",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20Mintable_$12669",
                                "typeString": "contract ERC20Mintable"
                              }
                            },
                            "id": 13714,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3467:4:50",
                            "memberName": "mint",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 12639,
                            "src": "3432:39:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256) external"
                            }
                          },
                          "id": 13723,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3432:119:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 13724,
                        "nodeType": "ExpressionStatement",
                        "src": "3432:119:50"
                      }
                    ]
                  }
                }
              ]
            },
            "functionSelector": "68096239",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "accrue",
            "nameLocation": "3180:6:50",
            "parameters": {
              "id": 13688,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13685,
                  "mutability": "mutable",
                  "name": "time",
                  "nameLocation": "3195:4:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13751,
                  "src": "3187:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13684,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3187:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13687,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "3208:3:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13751,
                  "src": "3201:10:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 13686,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3201:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3186:26:50"
            },
            "returnParameters": {
              "id": 13689,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3222:0:50"
            },
            "scope": 14346,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13771,
            "nodeType": "FunctionDefinition",
            "src": "3743:146:50",
            "nodes": [],
            "body": {
              "id": 13770,
              "nodeType": "Block",
              "src": "3810:79:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 13760,
                              "name": "_oracle",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4881,
                              "src": "3836:7:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_OracleState_$7206_storage",
                                "typeString": "struct IHyperdrive.OracleState storage ref"
                              }
                            },
                            "id": 13761,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3844:4:50",
                            "memberName": "head",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7202,
                            "src": "3836:12:50",
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
                          "id": 13759,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3828:7:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 13758,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3828:7:50",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 13762,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3828:21:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 13765,
                              "name": "_oracle",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4881,
                              "src": "3859:7:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_OracleState_$7206_storage",
                                "typeString": "struct IHyperdrive.OracleState storage ref"
                              }
                            },
                            "id": 13766,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3867:13:50",
                            "memberName": "lastTimestamp",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7205,
                            "src": "3859:21:50",
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
                          "id": 13764,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3851:7:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 13763,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3851:7:50",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 13767,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3851:30:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 13768,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "3827:55:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 13757,
                  "id": 13769,
                  "nodeType": "Return",
                  "src": "3820:62:50"
                }
              ]
            },
            "functionSelector": "8fca1f7b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getOracleState",
            "nameLocation": "3752:14:50",
            "parameters": {
              "id": 13752,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3766:2:50"
            },
            "returnParameters": {
              "id": 13757,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13754,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13771,
                  "src": "3792:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13753,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3792:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13756,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13771,
                  "src": "3801:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13755,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3801:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3791:18:50"
            },
            "scope": 14346,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13797,
            "nodeType": "FunctionDefinition",
            "src": "3895:213:50",
            "nodes": [],
            "body": {
              "id": 13796,
              "nodeType": "Block",
              "src": "3985:123:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "baseExpression": {
                                "id": 13782,
                                "name": "_buffer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4877,
                                "src": "4024:7:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_OracleData_$4872_storage_$dyn_storage",
                                  "typeString": "struct HyperdriveStorage.OracleData storage ref[] storage ref"
                                }
                              },
                              "id": 13784,
                              "indexExpression": {
                                "id": 13783,
                                "name": "index",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13773,
                                "src": "4032:5:50",
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
                              "src": "4024:14:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_OracleData_$4872_storage",
                                "typeString": "struct HyperdriveStorage.OracleData storage ref"
                              }
                            },
                            "id": 13785,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4039:4:50",
                            "memberName": "data",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4871,
                            "src": "4024:19:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint224",
                              "typeString": "uint224"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint224",
                              "typeString": "uint224"
                            }
                          ],
                          "id": 13781,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4016:7:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 13780,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "4016:7:50",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 13786,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4016:28:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "expression": {
                              "baseExpression": {
                                "id": 13789,
                                "name": "_buffer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4877,
                                "src": "4066:7:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_OracleData_$4872_storage_$dyn_storage",
                                  "typeString": "struct HyperdriveStorage.OracleData storage ref[] storage ref"
                                }
                              },
                              "id": 13791,
                              "indexExpression": {
                                "id": 13790,
                                "name": "index",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13773,
                                "src": "4074:5:50",
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
                              "src": "4066:14:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_OracleData_$4872_storage",
                                "typeString": "struct HyperdriveStorage.OracleData storage ref"
                              }
                            },
                            "id": 13792,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4081:9:50",
                            "memberName": "timestamp",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4869,
                            "src": "4066:24:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint32",
                              "typeString": "uint32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint32",
                              "typeString": "uint32"
                            }
                          ],
                          "id": 13788,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4058:7:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 13787,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "4058:7:50",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 13793,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4058:33:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 13794,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "4002:99:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 13779,
                  "id": 13795,
                  "nodeType": "Return",
                  "src": "3995:106:50"
                }
              ]
            },
            "functionSelector": "4daa8b8f",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "loadOracle",
            "nameLocation": "3904:10:50",
            "parameters": {
              "id": 13774,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13773,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "3932:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13797,
                  "src": "3924:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13772,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3924:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3914:29:50"
            },
            "returnParameters": {
              "id": 13779,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13776,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13797,
                  "src": "3967:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13775,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3967:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13778,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13797,
                  "src": "3976:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13777,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3976:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3966:18:50"
            },
            "scope": 14346,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13807,
            "nodeType": "FunctionDefinition",
            "src": "4114:79:50",
            "nodes": [],
            "body": {
              "id": 13806,
              "nodeType": "Block",
              "src": "4159:34:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 13803,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13799,
                        "src": "4181:4:50",
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
                      "id": 13802,
                      "name": "recordPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5299,
                      "src": "4169:11:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 13804,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4169:17:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13805,
                  "nodeType": "ExpressionStatement",
                  "src": "4169:17:50"
                }
              ]
            },
            "functionSelector": "5a1a3e7c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "recordOracle",
            "nameLocation": "4123:12:50",
            "parameters": {
              "id": 13800,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13799,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "4144:4:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13807,
                  "src": "4136:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13798,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4136:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4135:14:50"
            },
            "returnParameters": {
              "id": 13801,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4159:0:50"
            },
            "scope": 14346,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13835,
            "nodeType": "FunctionDefinition",
            "src": "4199:438:50",
            "nodes": [],
            "body": {
              "id": 13834,
              "nodeType": "Block",
              "src": "4424:213:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 13828,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 13820,
                          "name": "totalCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13816,
                          "src": "4435:13:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 13821,
                          "name": "governanceCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13818,
                          "src": "4450:18:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 13822,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "4434:35:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 13824,
                          "name": "_amountIn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13809,
                          "src": "4511:9:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 13825,
                          "name": "_spotPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13811,
                          "src": "4534:10:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 13826,
                          "name": "sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13813,
                          "src": "4558:10:50",
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
                        "id": 13823,
                        "name": "_calculateFeesGivenShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1334,
                        "src": "4472:25:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) view returns (uint256,uint256)"
                        }
                      },
                      "id": 13827,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4472:106:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "4434:144:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13829,
                  "nodeType": "ExpressionStatement",
                  "src": "4434:144:50"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 13830,
                        "name": "totalCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13816,
                        "src": "4596:13:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13831,
                        "name": "governanceCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13818,
                        "src": "4611:18:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 13832,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "4595:35:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 13819,
                  "id": 13833,
                  "nodeType": "Return",
                  "src": "4588:42:50"
                }
              ]
            },
            "functionSelector": "71f88b7c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateFeesGivenShares",
            "nameLocation": "4208:24:50",
            "parameters": {
              "id": 13814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13809,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "4250:9:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13835,
                  "src": "4242:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13808,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4242:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13811,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "4277:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13835,
                  "src": "4269:18:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13810,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4269:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13813,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "4305:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13835,
                  "src": "4297:18:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13812,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4297:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4232:89:50"
            },
            "returnParameters": {
              "id": 13819,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13816,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "4377:13:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13835,
                  "src": "4369:21:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13815,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4369:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13818,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "4400:18:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13835,
                  "src": "4392:26:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13817,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4392:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4368:51:50"
            },
            "scope": 14346,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13878,
            "nodeType": "FunctionDefinition",
            "src": "4643:911:50",
            "nodes": [],
            "body": {
              "id": 13877,
              "nodeType": "Block",
              "src": "5057:497:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 13868,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 13856,
                          "name": "totalCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13846,
                          "src": "5081:13:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 13857,
                          "name": "totalFlatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13848,
                          "src": "5108:12:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 13858,
                          "name": "governanceCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13850,
                          "src": "5134:18:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 13859,
                          "name": "governanceFlatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13852,
                          "src": "5166:17:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 13860,
                          "name": "totalGovernanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13854,
                          "src": "5197:18:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 13861,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "5067:158:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 13863,
                          "name": "_amountOut",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13837,
                          "src": "5266:10:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 13864,
                          "name": "_normalizedTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13839,
                          "src": "5290:24:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 13865,
                          "name": "_spotPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13841,
                          "src": "5328:10:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 13866,
                          "name": "sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13843,
                          "src": "5352:10:50",
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
                        "id": 13862,
                        "name": "_calculateFeesGivenBonds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1412,
                        "src": "5228:24:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256,uint256,uint256)"
                        }
                      },
                      "id": 13867,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5228:144:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "src": "5067:305:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13869,
                  "nodeType": "ExpressionStatement",
                  "src": "5067:305:50"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 13870,
                        "name": "totalCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13846,
                        "src": "5403:13:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13871,
                        "name": "totalFlatFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13848,
                        "src": "5430:12:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13872,
                        "name": "governanceCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13850,
                        "src": "5456:18:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13873,
                        "name": "governanceFlatFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13852,
                        "src": "5488:17:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13874,
                        "name": "totalGovernanceFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13854,
                        "src": "5519:18:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 13875,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "5389:158:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 13855,
                  "id": 13876,
                  "nodeType": "Return",
                  "src": "5382:165:50"
                }
              ]
            },
            "functionSelector": "22d5506b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateFeesGivenBonds",
            "nameLocation": "4652:23:50",
            "parameters": {
              "id": 13844,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13837,
                  "mutability": "mutable",
                  "name": "_amountOut",
                  "nameLocation": "4693:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13878,
                  "src": "4685:18:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13836,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4685:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13839,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "4721:24:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13878,
                  "src": "4713:32:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13838,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4713:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13841,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "4763:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13878,
                  "src": "4755:18:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13840,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4755:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13843,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "4791:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13878,
                  "src": "4783:18:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13842,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4783:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4675:132:50"
            },
            "returnParameters": {
              "id": 13855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13846,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "4876:13:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13878,
                  "src": "4868:21:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13845,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4868:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13848,
                  "mutability": "mutable",
                  "name": "totalFlatFee",
                  "nameLocation": "4911:12:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13878,
                  "src": "4903:20:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13847,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4903:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13850,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "4945:18:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13878,
                  "src": "4937:26:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13849,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4937:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13852,
                  "mutability": "mutable",
                  "name": "governanceFlatFee",
                  "nameLocation": "4985:17:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13878,
                  "src": "4977:25:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13851,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4977:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13854,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "5024:18:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13878,
                  "src": "5016:26:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13853,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5016:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4854:198:50"
            },
            "scope": 14346,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13899,
            "nodeType": "FunctionDefinition",
            "src": "5603:362:50",
            "nodes": [],
            "body": {
              "id": 13898,
              "nodeType": "Block",
              "src": "5896:69:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 13894,
                        "name": "_shareAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13880,
                        "src": "5932:12:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13895,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13882,
                        "src": "5946:11:50",
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
                      "id": 13893,
                      "name": "_calculateOpenLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3777,
                      "src": "5913:18:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "function (uint256,uint256) returns (uint256,uint256,uint256,uint256)"
                      }
                    },
                    "id": 13896,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5913:45:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 13892,
                  "id": 13897,
                  "nodeType": "Return",
                  "src": "5906:52:50"
                }
              ]
            },
            "functionSelector": "9bd33498",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenLong",
            "nameLocation": "5612:17:50",
            "parameters": {
              "id": 13883,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13880,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "5647:12:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13899,
                  "src": "5639:20:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13879,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5639:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13882,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "5677:11:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13899,
                  "src": "5669:19:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13881,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5669:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5629:65:50"
            },
            "returnParameters": {
              "id": 13892,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13885,
                  "mutability": "mutable",
                  "name": "shareReservesDelta",
                  "nameLocation": "5750:18:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13899,
                  "src": "5742:26:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13884,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5742:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13887,
                  "mutability": "mutable",
                  "name": "bondReservesDelta",
                  "nameLocation": "5790:17:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13899,
                  "src": "5782:25:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13886,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5782:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13889,
                  "mutability": "mutable",
                  "name": "bondProceeds",
                  "nameLocation": "5829:12:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13899,
                  "src": "5821:20:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13888,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5821:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13891,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "5863:18:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13899,
                  "src": "5855:26:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13890,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5855:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5728:163:50"
            },
            "scope": 14346,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13911,
            "nodeType": "FunctionDefinition",
            "src": "5971:177:50",
            "nodes": [],
            "body": {
              "id": 13910,
              "nodeType": "Block",
              "src": "6086:62:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 13907,
                        "name": "_maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13901,
                        "src": "6127:13:50",
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
                      "id": 13906,
                      "name": "_calculateTimeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5056,
                      "src": "6103:23:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 13908,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6103:38:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13905,
                  "id": 13909,
                  "nodeType": "Return",
                  "src": "6096:45:50"
                }
              ]
            },
            "functionSelector": "68c2ecb8",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemaining",
            "nameLocation": "5980:22:50",
            "parameters": {
              "id": 13902,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13901,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "6020:13:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13911,
                  "src": "6012:21:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13900,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6012:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6002:37:50"
            },
            "returnParameters": {
              "id": 13905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13904,
                  "mutability": "mutable",
                  "name": "timeRemaining",
                  "nameLocation": "6071:13:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13911,
                  "src": "6063:21:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13903,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6063:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6062:23:50"
            },
            "scope": 14346,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13923,
            "nodeType": "FunctionDefinition",
            "src": "6154:189:50",
            "nodes": [],
            "body": {
              "id": 13922,
              "nodeType": "Block",
              "src": "6275:68:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 13919,
                        "name": "_maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13913,
                        "src": "6322:13:50",
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
                      "id": 13918,
                      "name": "_calculateTimeRemainingScaled",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5095,
                      "src": "6292:29:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 13920,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6292:44:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13917,
                  "id": 13921,
                  "nodeType": "Return",
                  "src": "6285:51:50"
                }
              ]
            },
            "functionSelector": "ca6d38f7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemainingScaled",
            "nameLocation": "6163:28:50",
            "parameters": {
              "id": 13914,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13913,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "6209:13:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13923,
                  "src": "6201:21:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13912,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6201:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6191:37:50"
            },
            "returnParameters": {
              "id": 13917,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13916,
                  "mutability": "mutable",
                  "name": "timeRemaining",
                  "nameLocation": "6260:13:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13923,
                  "src": "6252:21:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13915,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6252:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6251:23:50"
            },
            "scope": 14346,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13932,
            "nodeType": "FunctionDefinition",
            "src": "6349:118:50",
            "nodes": [],
            "body": {
              "id": 13931,
              "nodeType": "Block",
              "src": "6424:43:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 13928,
                      "name": "_latestCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5113,
                      "src": "6441:17:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 13929,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6441:19:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13927,
                  "id": 13930,
                  "nodeType": "Return",
                  "src": "6434:26:50"
                }
              ]
            },
            "functionSelector": "907c0f92",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "latestCheckpoint",
            "nameLocation": "6358:16:50",
            "parameters": {
              "id": 13924,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6374:2:50"
            },
            "returnParameters": {
              "id": 13927,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13926,
                  "mutability": "mutable",
                  "name": "checkpointTime",
                  "nameLocation": "6408:14:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13932,
                  "src": "6400:22:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13925,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6400:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6399:24:50"
            },
            "scope": 14346,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13942,
            "nodeType": "FunctionDefinition",
            "src": "6473:116:50",
            "nodes": [],
            "body": {
              "id": 13941,
              "nodeType": "Block",
              "src": "6535:54:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 13938,
                        "name": "_shareReservesDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13934,
                        "src": "6562:19:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 13937,
                      "name": "_updateLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2721,
                      "src": "6545:16:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$returns$__$",
                        "typeString": "function (int256)"
                      }
                    },
                    "id": 13939,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6545:37:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13940,
                  "nodeType": "ExpressionStatement",
                  "src": "6545:37:50"
                }
              ]
            },
            "functionSelector": "8120a3e2",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateLiquidity",
            "nameLocation": "6482:15:50",
            "parameters": {
              "id": 13935,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13934,
                  "mutability": "mutable",
                  "name": "_shareReservesDelta",
                  "nameLocation": "6505:19:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13942,
                  "src": "6498:26:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 13933,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6498:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6497:28:50"
            },
            "returnParameters": {
              "id": 13936,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6535:0:50"
            },
            "scope": 14346,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13954,
            "nodeType": "FunctionDefinition",
            "src": "6595:167:50",
            "nodes": [],
            "body": {
              "id": 13953,
              "nodeType": "Block",
              "src": "6698:64:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 13950,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13944,
                        "src": "6743:11:50",
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
                      "id": 13949,
                      "name": "_calculateIdleShareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1291,
                      "src": "6715:27:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 13951,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6715:40:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13948,
                  "id": 13952,
                  "nodeType": "Return",
                  "src": "6708:47:50"
                }
              ]
            },
            "functionSelector": "b1b4b170",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateIdleShareReserves",
            "nameLocation": "6604:26:50",
            "parameters": {
              "id": 13945,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13944,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "6648:11:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13954,
                  "src": "6640:19:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13943,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6640:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6630:35:50"
            },
            "returnParameters": {
              "id": 13948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13947,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13954,
                  "src": "6689:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13946,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6689:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6688:9:50"
            },
            "scope": 14346,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13962,
            "nodeType": "FunctionDefinition",
            "src": "6768:93:50",
            "nodes": [],
            "body": {
              "id": 13961,
              "nodeType": "Block",
              "src": "6826:35:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 13959,
                    "name": "totalShares",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13640,
                    "src": "6843:11:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13958,
                  "id": 13960,
                  "nodeType": "Return",
                  "src": "6836:18:50"
                }
              ]
            },
            "functionSelector": "d5002f2e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTotalShares",
            "nameLocation": "6777:14:50",
            "parameters": {
              "id": 13955,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6791:2:50"
            },
            "returnParameters": {
              "id": 13958,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13957,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13962,
                  "src": "6817:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13956,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6817:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6816:9:50"
            },
            "scope": 14346,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13982,
            "nodeType": "FunctionDefinition",
            "src": "6867:184:50",
            "nodes": [],
            "body": {
              "id": 13981,
              "nodeType": "Block",
              "src": "6942:109:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 13973,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 13969,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "6952:12:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 13971,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "6965:13:50",
                      "memberName": "shareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7147,
                      "src": "6952:26:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 13972,
                      "name": "shareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13964,
                      "src": "6981:13:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "6952:42:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 13974,
                  "nodeType": "ExpressionStatement",
                  "src": "6952:42:50"
                },
                {
                  "expression": {
                    "id": 13979,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 13975,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "7004:12:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 13977,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "7017:12:50",
                      "memberName": "bondReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7150,
                      "src": "7004:25:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 13978,
                      "name": "bondReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13966,
                      "src": "7032:12:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "7004:40:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 13980,
                  "nodeType": "ExpressionStatement",
                  "src": "7004:40:50"
                }
              ]
            },
            "functionSelector": "702db0eb",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setReserves",
            "nameLocation": "6876:11:50",
            "parameters": {
              "id": 13967,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13964,
                  "mutability": "mutable",
                  "name": "shareReserves",
                  "nameLocation": "6896:13:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13982,
                  "src": "6888:21:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 13963,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "6888:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13966,
                  "mutability": "mutable",
                  "name": "bondReserves",
                  "nameLocation": "6919:12:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13982,
                  "src": "6911:20:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 13965,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "6911:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6887:45:50"
            },
            "returnParameters": {
              "id": 13968,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6942:0:50"
            },
            "scope": 14346,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13994,
            "nodeType": "FunctionDefinition",
            "src": "7057:113:50",
            "nodes": [],
            "body": {
              "id": 13993,
              "nodeType": "Block",
              "src": "7113:57:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 13991,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 13987,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4833,
                        "src": "7123:12:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 13989,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "7136:12:50",
                      "memberName": "longExposure",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7156,
                      "src": "7123:25:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 13990,
                      "name": "longExposure",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13984,
                      "src": "7151:12:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "7123:40:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 13992,
                  "nodeType": "ExpressionStatement",
                  "src": "7123:40:50"
                }
              ]
            },
            "functionSelector": "b4f8da39",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setLongExposure",
            "nameLocation": "7066:15:50",
            "parameters": {
              "id": 13985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13984,
                  "mutability": "mutable",
                  "name": "longExposure",
                  "nameLocation": "7090:12:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 13994,
                  "src": "7082:20:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 13983,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "7082:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7081:22:50"
            },
            "returnParameters": {
              "id": 13986,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7113:0:50"
            },
            "scope": 14346,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14018,
            "nodeType": "FunctionDefinition",
            "src": "7378:174:50",
            "nodes": [],
            "body": {
              "id": 14017,
              "nodeType": "Block",
              "src": "7431:121:50",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 14009,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 14004,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "id": 14001,
                            "name": "_baseToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4811,
                            "src": "7453:10:50",
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
                          "id": 14000,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "7445:7:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 13999,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "7445:7:50",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 14002,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7445:19:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 14003,
                        "name": "ETH",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 119578,
                        "src": "7468:3:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "7445:26:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 14008,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 14005,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "7475:3:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 14006,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7479:5:50",
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "src": "7475:9:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 14007,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7487:1:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "7475:13:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "7445:43:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 14016,
                  "nodeType": "IfStatement",
                  "src": "7441:105:50",
                  "trueBody": {
                    "id": 14015,
                    "nodeType": "Block",
                    "src": "7490:56:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 14010,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "7511:11:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 14012,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7523:10:50",
                            "memberName": "NotPayable",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7334,
                            "src": "7511:22:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 14013,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7511:24:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 14014,
                        "nodeType": "RevertStatement",
                        "src": "7504:31:50"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              777
            ],
            "documentation": {
              "id": 13995,
              "nodeType": "StructuredDocumentation",
              "src": "7176:18:50",
              "text": "Overrides ///"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkMessageValue",
            "nameLocation": "7387:18:50",
            "overrides": {
              "id": 13997,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "7422:8:50"
            },
            "parameters": {
              "id": 13996,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7405:2:50"
            },
            "returnParameters": {
              "id": 13998,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7431:0:50"
            },
            "scope": 14346,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 14168,
            "nodeType": "FunctionDefinition",
            "src": "7558:1675:50",
            "nodes": [],
            "body": {
              "id": 14167,
              "nodeType": "Block",
              "src": "7697:1536:50",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14032
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14032,
                      "mutability": "mutable",
                      "name": "baseAmount",
                      "nameLocation": "7786:10:50",
                      "nodeType": "VariableDeclaration",
                      "scope": 14167,
                      "src": "7778:18:50",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14031,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7778:7:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14042,
                  "initialValue": {
                    "condition": {
                      "expression": {
                        "id": 14033,
                        "name": "options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14023,
                        "src": "7799:7:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      },
                      "id": 14034,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7807:6:50",
                      "memberName": "asBase",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7291,
                      "src": "7799:14:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "arguments": [
                        {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 14038,
                            "name": "_pricePerShare",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              14345
                            ],
                            "referencedDeclaration": 14345,
                            "src": "7864:14:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 14039,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7864:16:50",
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
                        "expression": {
                          "id": 14036,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14020,
                          "src": "7849:6:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14037,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7856:7:50",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8364,
                        "src": "7849:14:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 14040,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7849:32:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 14041,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "7799:82:50",
                    "trueExpression": {
                      "id": 14035,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14020,
                      "src": "7828:6:50",
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
                  "src": "7778:103:50"
                },
                {
                  "assignments": [
                    14044
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14044,
                      "mutability": "mutable",
                      "name": "assets",
                      "nameLocation": "8030:6:50",
                      "nodeType": "VariableDeclaration",
                      "scope": 14167,
                      "src": "8022:14:50",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14043,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8022:7:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14045,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8022:14:50"
                },
                {
                  "assignments": [
                    14047
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14047,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "8051:7:50",
                      "nodeType": "VariableDeclaration",
                      "scope": 14167,
                      "src": "8046:12:50",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 14046,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "8046:4:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14049,
                  "initialValue": {
                    "hexValue": "74727565",
                    "id": 14048,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "8061:4:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8046:19:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 14055,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 14052,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4811,
                          "src": "8087:10:50",
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
                        "id": 14051,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "8079:7:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 14050,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "8079:7:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 14053,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8079:19:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 14054,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119578,
                      "src": "8102:3:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "8079:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 14122,
                    "nodeType": "Block",
                    "src": "8462:217:50",
                    "statements": [
                      {
                        "expression": {
                          "id": 14107,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14099,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14044,
                            "src": "8476:6:50",
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
                                "arguments": [
                                  {
                                    "id": 14104,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "8514:4:50",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  ],
                                  "id": 14103,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "8506:7:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 14102,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8506:7:50",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 14105,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8506:13:50",
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
                                "id": 14100,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4811,
                                "src": "8485:10:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$6731",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 14101,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8496:9:50",
                              "memberName": "balanceOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6688,
                              "src": "8485:20:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view external returns (uint256)"
                              }
                            },
                            "id": 14106,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8485:35:50",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8476:44:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14108,
                        "nodeType": "ExpressionStatement",
                        "src": "8476:44:50"
                      },
                      {
                        "expression": {
                          "id": 14120,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14109,
                            "name": "success",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14047,
                            "src": "8534:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 14112,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "8585:3:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 14113,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "8589:6:50",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "8585:10:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 14116,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "8621:4:50",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  ],
                                  "id": 14115,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "8613:7:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 14114,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8613:7:50",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 14117,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8613:13:50",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 14118,
                                "name": "baseAmount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14032,
                                "src": "8644:10:50",
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
                                "id": 14110,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4811,
                                "src": "8544:10:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$6731",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 14111,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8555:12:50",
                              "memberName": "transferFrom",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6730,
                              "src": "8544:23:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,address,uint256) external returns (bool)"
                              }
                            },
                            "id": 14119,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8544:124:50",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "8534:134:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 14121,
                        "nodeType": "ExpressionStatement",
                        "src": "8534:134:50"
                      }
                    ]
                  },
                  "id": 14123,
                  "nodeType": "IfStatement",
                  "src": "8075:604:50",
                  "trueBody": {
                    "id": 14098,
                    "nodeType": "Block",
                    "src": "8107:349:50",
                    "statements": [
                      {
                        "expression": {
                          "id": 14062,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14056,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14044,
                            "src": "8121:6:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 14059,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "8138:4:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                ],
                                "id": 14058,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "8130:7:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 14057,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "8130:7:50",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 14060,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8130:13:50",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 14061,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8144:7:50",
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "src": "8130:21:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8121:30:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14063,
                        "nodeType": "ExpressionStatement",
                        "src": "8121:30:50"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 14067,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 14064,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "8169:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 14065,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8173:5:50",
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "8169:9:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "id": 14066,
                            "name": "baseAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14032,
                            "src": "8181:10:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8169:22:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 14074,
                        "nodeType": "IfStatement",
                        "src": "8165:96:50",
                        "trueBody": {
                          "id": 14073,
                          "nodeType": "Block",
                          "src": "8193:68:50",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "id": 14068,
                                    "name": "IHyperdrive",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7431,
                                    "src": "8218:11:50",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                      "typeString": "type(contract IHyperdrive)"
                                    }
                                  },
                                  "id": 14070,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8230:14:50",
                                  "memberName": "TransferFailed",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 7344,
                                  "src": "8218:26:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 14071,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8218:28:50",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 14072,
                              "nodeType": "RevertStatement",
                              "src": "8211:35:50"
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
                          "id": 14078,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 14075,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "8278:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 14076,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8282:5:50",
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "8278:9:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "id": 14077,
                            "name": "baseAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14032,
                            "src": "8290:10:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8278:22:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 14097,
                        "nodeType": "IfStatement",
                        "src": "8274:172:50",
                        "trueBody": {
                          "id": 14096,
                          "nodeType": "Block",
                          "src": "8302:144:50",
                          "statements": [
                            {
                              "expression": {
                                "id": 14094,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "components": [
                                    {
                                      "id": 14079,
                                      "name": "success",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 14047,
                                      "src": "8321:7:50",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    null
                                  ],
                                  "id": 14080,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "TupleExpression",
                                  "src": "8320:11:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$_t_bool_$__$",
                                    "typeString": "tuple(bool,)"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "arguments": [
                                    {
                                      "hexValue": "",
                                      "id": 14092,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "8428:2:50",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                        "typeString": "literal_string \"\""
                                      },
                                      "value": ""
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                        "typeString": "literal_string \"\""
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                          "typeString": "literal_string \"\""
                                        }
                                      ],
                                      "expression": {
                                        "arguments": [
                                          {
                                            "expression": {
                                              "id": 14083,
                                              "name": "msg",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": -15,
                                              "src": "8342:3:50",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                              }
                                            },
                                            "id": 14084,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "8346:6:50",
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "src": "8342:10:50",
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
                                          "id": 14082,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "8334:8:50",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_address_payable_$",
                                            "typeString": "type(address payable)"
                                          },
                                          "typeName": {
                                            "id": 14081,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "8334:8:50",
                                            "stateMutability": "payable",
                                            "typeDescriptions": {}
                                          }
                                        },
                                        "id": 14085,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8334:19:50",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address_payable",
                                          "typeString": "address payable"
                                        }
                                      },
                                      "id": 14086,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "8354:4:50",
                                      "memberName": "call",
                                      "nodeType": "MemberAccess",
                                      "src": "8334:24:50",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                      }
                                    },
                                    "id": 14091,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "names": [
                                      "value"
                                    ],
                                    "nodeType": "FunctionCallOptions",
                                    "options": [
                                      {
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 14090,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "expression": {
                                            "id": 14087,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -15,
                                            "src": "8387:3:50",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_message",
                                              "typeString": "msg"
                                            }
                                          },
                                          "id": 14088,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "8391:5:50",
                                          "memberName": "value",
                                          "nodeType": "MemberAccess",
                                          "src": "8387:9:50",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                          "id": 14089,
                                          "name": "baseAmount",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 14032,
                                          "src": "8399:10:50",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "8387:22:50",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "src": "8334:93:50",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                      "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                    }
                                  },
                                  "id": 14093,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "8334:97:50",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                    "typeString": "tuple(bool,bytes memory)"
                                  }
                                },
                                "src": "8320:111:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 14095,
                              "nodeType": "ExpressionStatement",
                              "src": "8320:111:50"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "id": 14125,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "8692:8:50",
                    "subExpression": {
                      "id": 14124,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14047,
                      "src": "8693:7:50",
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
                  "id": 14132,
                  "nodeType": "IfStatement",
                  "src": "8688:74:50",
                  "trueBody": {
                    "id": 14131,
                    "nodeType": "Block",
                    "src": "8702:60:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 14126,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "8723:11:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 14128,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8735:14:50",
                            "memberName": "TransferFailed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7344,
                            "src": "8723:26:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 14129,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8723:28:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 14130,
                        "nodeType": "RevertStatement",
                        "src": "8716:35:50"
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
                    "id": 14135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 14133,
                      "name": "totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13640,
                      "src": "8897:11:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 14134,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "8912:1:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "8897:16:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 14165,
                    "nodeType": "Block",
                    "src": "9052:175:50",
                    "statements": [
                      {
                        "assignments": [
                          14149
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 14149,
                            "mutability": "mutable",
                            "name": "newShares",
                            "nameLocation": "9074:9:50",
                            "nodeType": "VariableDeclaration",
                            "scope": 14165,
                            "src": "9066:17:50",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 14148,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "9066:7:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 14155,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 14152,
                              "name": "baseAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14032,
                              "src": "9109:10:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 14153,
                              "name": "assets",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14044,
                              "src": "9121:6:50",
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
                              "id": 14150,
                              "name": "totalShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13640,
                              "src": "9086:11:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 14151,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9098:10:50",
                            "memberName": "mulDivDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8346,
                            "src": "9086:22:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 14154,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9086:42:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "9066:62:50"
                      },
                      {
                        "expression": {
                          "id": 14158,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14156,
                            "name": "totalShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13640,
                            "src": "9142:11:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 14157,
                            "name": "newShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14149,
                            "src": "9157:9:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9142:24:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14159,
                        "nodeType": "ExpressionStatement",
                        "src": "9142:24:50"
                      },
                      {
                        "expression": {
                          "components": [
                            {
                              "id": 14160,
                              "name": "newShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14149,
                              "src": "9188:9:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 14161,
                                "name": "_pricePerShare",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [
                                  14345
                                ],
                                "referencedDeclaration": 14345,
                                "src": "9199:14:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                  "typeString": "function () view returns (uint256)"
                                }
                              },
                              "id": 14162,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9199:16:50",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 14163,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "9187:29:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256)"
                          }
                        },
                        "functionReturnParameters": 14030,
                        "id": 14164,
                        "nodeType": "Return",
                        "src": "9180:36:50"
                      }
                    ]
                  },
                  "id": 14166,
                  "nodeType": "IfStatement",
                  "src": "8893:334:50",
                  "trueBody": {
                    "id": 14147,
                    "nodeType": "Block",
                    "src": "8915:131:50",
                    "statements": [
                      {
                        "expression": {
                          "id": 14141,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14136,
                            "name": "totalShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13640,
                            "src": "8929:11:50",
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
                                "id": 14139,
                                "name": "_initialSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4823,
                                "src": "8962:18:50",
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
                                "id": 14137,
                                "name": "baseAmount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14032,
                                "src": "8943:10:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 14138,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8954:7:50",
                              "memberName": "divDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8382,
                              "src": "8943:18:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 14140,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8943:38:50",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8929:52:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14142,
                        "nodeType": "ExpressionStatement",
                        "src": "8929:52:50"
                      },
                      {
                        "expression": {
                          "components": [
                            {
                              "id": 14143,
                              "name": "totalShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13640,
                              "src": "9003:11:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 14144,
                              "name": "_initialSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4823,
                              "src": "9016:18:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 14145,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "9002:33:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256)"
                          }
                        },
                        "functionReturnParameters": 14030,
                        "id": 14146,
                        "nodeType": "Return",
                        "src": "8995:40:50"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              790
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_deposit",
            "nameLocation": "7567:8:50",
            "overrides": {
              "id": 14025,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "7661:8:50"
            },
            "parameters": {
              "id": 14024,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14020,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "7593:6:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 14168,
                  "src": "7585:14:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14019,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7585:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14023,
                  "mutability": "mutable",
                  "name": "options",
                  "nameLocation": "7638:7:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 14168,
                  "src": "7609:36:50",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 14022,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 14021,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "7609:11:50",
                        "7621:7:50"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7295,
                      "src": "7609:19:50"
                    },
                    "referencedDeclaration": 7295,
                    "src": "7609:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7295_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7575:76:50"
            },
            "returnParameters": {
              "id": 14030,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14027,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14168,
                  "src": "7679:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14026,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7679:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14029,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14168,
                  "src": "7688:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14028,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7688:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7678:18:50"
            },
            "scope": 14346,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 14296,
            "nodeType": "FunctionDefinition",
            "src": "9239:1480:50",
            "nodes": [],
            "body": {
              "id": 14295,
              "nodeType": "Block",
              "src": "9384:1335:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 14186,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14179,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14170,
                      "src": "9614:6:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 14182,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 14180,
                          "name": "shares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14170,
                          "src": "9623:6:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 14181,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13640,
                          "src": "9632:11:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "9623:20:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "id": 14184,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14170,
                        "src": "9660:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 14185,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "9623:43:50",
                      "trueExpression": {
                        "id": 14183,
                        "name": "totalShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13640,
                        "src": "9646:11:50",
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
                    "src": "9614:52:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 14187,
                  "nodeType": "ExpressionStatement",
                  "src": "9614:52:50"
                },
                {
                  "assignments": [
                    14189
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14189,
                      "mutability": "mutable",
                      "name": "assets",
                      "nameLocation": "9745:6:50",
                      "nodeType": "VariableDeclaration",
                      "scope": 14295,
                      "src": "9737:14:50",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14188,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9737:7:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14190,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9737:14:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 14196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 14193,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4811,
                          "src": "9773:10:50",
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
                        "id": 14192,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "9765:7:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 14191,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "9765:7:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 14194,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9765:19:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 14195,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119578,
                      "src": "9788:3:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9765:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 14216,
                    "nodeType": "Block",
                    "src": "9854:69:50",
                    "statements": [
                      {
                        "expression": {
                          "id": 14214,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14206,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14189,
                            "src": "9868:6:50",
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
                                "arguments": [
                                  {
                                    "id": 14211,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "9906:4:50",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  ],
                                  "id": 14210,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "9898:7:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 14209,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "9898:7:50",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 14212,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9898:13:50",
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
                                "id": 14207,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4811,
                                "src": "9877:10:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$6731",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 14208,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9888:9:50",
                              "memberName": "balanceOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6688,
                              "src": "9877:20:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view external returns (uint256)"
                              }
                            },
                            "id": 14213,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9877:35:50",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9868:44:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14215,
                        "nodeType": "ExpressionStatement",
                        "src": "9868:44:50"
                      }
                    ]
                  },
                  "id": 14217,
                  "nodeType": "IfStatement",
                  "src": "9761:162:50",
                  "trueBody": {
                    "id": 14205,
                    "nodeType": "Block",
                    "src": "9793:55:50",
                    "statements": [
                      {
                        "expression": {
                          "id": 14203,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14197,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14189,
                            "src": "9807:6:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 14200,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "9824:4:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                ],
                                "id": 14199,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "9816:7:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 14198,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "9816:7:50",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 14201,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9816:13:50",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 14202,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9830:7:50",
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "src": "9816:21:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9807:30:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14204,
                        "nodeType": "ExpressionStatement",
                        "src": "9807:30:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 14231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14218,
                      "name": "withdrawValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14177,
                      "src": "9973:13:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 14221,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 14219,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13640,
                          "src": "9989:11:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 14220,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10004:1:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "9989:16:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 14229,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10078:1:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 14230,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "9989:90:50",
                      "trueExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 14226,
                                "name": "totalShares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13640,
                                "src": "10050:11:50",
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
                                "id": 14224,
                                "name": "assets",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14189,
                                "src": "10035:6:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 14225,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "10042:7:50",
                              "memberName": "divDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8382,
                              "src": "10035:14:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 14227,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10035:27:50",
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
                          "expression": {
                            "id": 14222,
                            "name": "shares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14170,
                            "src": "10020:6:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 14223,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10027:7:50",
                          "memberName": "mulDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8364,
                          "src": "10020:14:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 14228,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10020:43:50",
                        "tryCall": false,
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
                    "src": "9973:106:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 14232,
                  "nodeType": "ExpressionStatement",
                  "src": "9973:106:50"
                },
                {
                  "expression": {
                    "id": 14235,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14233,
                      "name": "totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13640,
                      "src": "10168:11:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "id": 14234,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14170,
                      "src": "10183:6:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10168:21:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 14236,
                  "nodeType": "ExpressionStatement",
                  "src": "10168:21:50"
                },
                {
                  "assignments": [
                    14238
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14238,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "10204:7:50",
                      "nodeType": "VariableDeclaration",
                      "scope": 14295,
                      "src": "10199:12:50",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 14237,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "10199:4:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14239,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10199:12:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 14245,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 14242,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4811,
                          "src": "10233:10:50",
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
                        "id": 14241,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10225:7:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 14240,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10225:7:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 14243,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10225:19:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 14244,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119578,
                      "src": "10248:3:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10225:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 14270,
                    "nodeType": "Block",
                    "src": "10387:90:50",
                    "statements": [
                      {
                        "expression": {
                          "id": 14268,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14261,
                            "name": "success",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14238,
                            "src": "10401:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 14264,
                                  "name": "options",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 14173,
                                  "src": "10431:7:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                                    "typeString": "struct IHyperdrive.Options calldata"
                                  }
                                },
                                "id": 14265,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "10439:11:50",
                                "memberName": "destination",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7288,
                                "src": "10431:19:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 14266,
                                "name": "withdrawValue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14177,
                                "src": "10452:13:50",
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
                                "id": 14262,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4811,
                                "src": "10411:10:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$6731",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 14263,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "10422:8:50",
                              "memberName": "transfer",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6698,
                              "src": "10411:19:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) external returns (bool)"
                              }
                            },
                            "id": 14267,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10411:55:50",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "10401:65:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 14269,
                        "nodeType": "ExpressionStatement",
                        "src": "10401:65:50"
                      }
                    ]
                  },
                  "id": 14271,
                  "nodeType": "IfStatement",
                  "src": "10221:256:50",
                  "trueBody": {
                    "id": 14260,
                    "nodeType": "Block",
                    "src": "10253:128:50",
                    "statements": [
                      {
                        "expression": {
                          "id": 14258,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "components": [
                              {
                                "id": 14246,
                                "name": "success",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14238,
                                "src": "10268:7:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              null
                            ],
                            "id": 14247,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "TupleExpression",
                            "src": "10267:11:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_bool_$__$",
                              "typeString": "tuple(bool,)"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "hexValue": "",
                                "id": 14256,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10367:2:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                  "typeString": "literal_string \"\""
                                },
                                "value": ""
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                  "typeString": "literal_string \"\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                    "typeString": "literal_string \"\""
                                  }
                                ],
                                "expression": {
                                  "arguments": [
                                    {
                                      "expression": {
                                        "id": 14250,
                                        "name": "options",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 14173,
                                        "src": "10289:7:50",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                                          "typeString": "struct IHyperdrive.Options calldata"
                                        }
                                      },
                                      "id": 14251,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "10297:11:50",
                                      "memberName": "destination",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 7288,
                                      "src": "10289:19:50",
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
                                    "id": 14249,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "10281:8:50",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_payable_$",
                                      "typeString": "type(address payable)"
                                    },
                                    "typeName": {
                                      "id": 14248,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "10281:8:50",
                                      "stateMutability": "payable",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 14252,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "10281:28:50",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "id": 14253,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "10310:4:50",
                                "memberName": "call",
                                "nodeType": "MemberAccess",
                                "src": "10281:33:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                  "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                }
                              },
                              "id": 14255,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "names": [
                                "value"
                              ],
                              "nodeType": "FunctionCallOptions",
                              "options": [
                                {
                                  "id": 14254,
                                  "name": "withdrawValue",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 14177,
                                  "src": "10339:13:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "src": "10281:85:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                              }
                            },
                            "id": 14257,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10281:89:50",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                              "typeString": "tuple(bool,bytes memory)"
                            }
                          },
                          "src": "10267:103:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 14259,
                        "nodeType": "ExpressionStatement",
                        "src": "10267:103:50"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "id": 14273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "10490:8:50",
                    "subExpression": {
                      "id": 14272,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14238,
                      "src": "10491:7:50",
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
                  "id": 14280,
                  "nodeType": "IfStatement",
                  "src": "10486:74:50",
                  "trueBody": {
                    "id": 14279,
                    "nodeType": "Block",
                    "src": "10500:60:50",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 14274,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "10521:11:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 14276,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10533:14:50",
                            "memberName": "TransferFailed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7344,
                            "src": "10521:26:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 14277,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10521:28:50",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 14278,
                        "nodeType": "RevertStatement",
                        "src": "10514:35:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 14291,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14281,
                      "name": "withdrawValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14177,
                      "src": "10569:13:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "condition": {
                        "expression": {
                          "id": 14282,
                          "name": "options",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14173,
                          "src": "10585:7:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                            "typeString": "struct IHyperdrive.Options calldata"
                          }
                        },
                        "id": 14283,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10593:6:50",
                        "memberName": "asBase",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7291,
                        "src": "10585:14:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "arguments": [
                          {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 14287,
                              "name": "_pricePerShare",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                14345
                              ],
                              "referencedDeclaration": 14345,
                              "src": "10664:14:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                "typeString": "function () view returns (uint256)"
                              }
                            },
                            "id": 14288,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10664:16:50",
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
                          "expression": {
                            "id": 14285,
                            "name": "withdrawValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14177,
                            "src": "10642:13:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 14286,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10656:7:50",
                          "memberName": "divDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8382,
                          "src": "10642:21:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 14289,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10642:39:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 14290,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "10585:96:50",
                      "trueExpression": {
                        "id": 14284,
                        "name": "withdrawValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14177,
                        "src": "10614:13:50",
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
                    "src": "10569:112:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 14292,
                  "nodeType": "ExpressionStatement",
                  "src": "10569:112:50"
                },
                {
                  "expression": {
                    "id": 14293,
                    "name": "withdrawValue",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14177,
                    "src": "10699:13:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14178,
                  "id": 14294,
                  "nodeType": "Return",
                  "src": "10692:20:50"
                }
              ]
            },
            "baseFunctions": [
              801
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_withdraw",
            "nameLocation": "9248:9:50",
            "overrides": {
              "id": 14175,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "9343:8:50"
            },
            "parameters": {
              "id": 14174,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14170,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "9275:6:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 14296,
                  "src": "9267:14:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14169,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9267:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14173,
                  "mutability": "mutable",
                  "name": "options",
                  "nameLocation": "9320:7:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 14296,
                  "src": "9291:36:50",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7295_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 14172,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 14171,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "9291:11:50",
                        "9303:7:50"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7295,
                      "src": "9291:19:50"
                    },
                    "referencedDeclaration": 7295,
                    "src": "9291:19:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7295_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9257:76:50"
            },
            "returnParameters": {
              "id": 14178,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14177,
                  "mutability": "mutable",
                  "name": "withdrawValue",
                  "nameLocation": "9369:13:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 14296,
                  "src": "9361:21:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14176,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9361:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9360:23:50"
            },
            "scope": 14346,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 14345,
            "nodeType": "FunctionDefinition",
            "src": "10725:555:50",
            "nodes": [],
            "body": {
              "id": 14344,
              "nodeType": "Block",
              "src": "10839:441:50",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14303
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14303,
                      "mutability": "mutable",
                      "name": "assets",
                      "nameLocation": "10917:6:50",
                      "nodeType": "VariableDeclaration",
                      "scope": 14344,
                      "src": "10909:14:50",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14302,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10909:7:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14304,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10909:14:50"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 14310,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 14307,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4811,
                          "src": "10945:10:50",
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
                        "id": 14306,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10937:7:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 14305,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10937:7:50",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 14308,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10937:19:50",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 14309,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119578,
                      "src": "10960:3:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10937:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 14330,
                    "nodeType": "Block",
                    "src": "11026:69:50",
                    "statements": [
                      {
                        "expression": {
                          "id": 14328,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14320,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14303,
                            "src": "11040:6:50",
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
                                "arguments": [
                                  {
                                    "id": 14325,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "11078:4:50",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  ],
                                  "id": 14324,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "11070:7:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 14323,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "11070:7:50",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 14326,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "11070:13:50",
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
                                "id": 14321,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4811,
                                "src": "11049:10:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$6731",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 14322,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "11060:9:50",
                              "memberName": "balanceOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6688,
                              "src": "11049:20:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view external returns (uint256)"
                              }
                            },
                            "id": 14327,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11049:35:50",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "11040:44:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14329,
                        "nodeType": "ExpressionStatement",
                        "src": "11040:44:50"
                      }
                    ]
                  },
                  "id": 14331,
                  "nodeType": "IfStatement",
                  "src": "10933:162:50",
                  "trueBody": {
                    "id": 14319,
                    "nodeType": "Block",
                    "src": "10965:55:50",
                    "statements": [
                      {
                        "expression": {
                          "id": 14317,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14311,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14303,
                            "src": "10979:6:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 14314,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "10996:4:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$14346",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                ],
                                "id": 14313,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "10988:7:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 14312,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "10988:7:50",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 14315,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "10988:13:50",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 14316,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11002:7:50",
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "src": "10988:21:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "10979:30:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14318,
                        "nodeType": "ExpressionStatement",
                        "src": "10979:30:50"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 14342,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14332,
                      "name": "sharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14300,
                      "src": "11210:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 14335,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 14333,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13640,
                          "src": "11223:11:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 14334,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11238:1:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "11223:16:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 14340,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11272:1:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 14341,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "11223:50:50",
                      "trueExpression": {
                        "arguments": [
                          {
                            "id": 14338,
                            "name": "totalShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13640,
                            "src": "11257:11:50",
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
                            "id": 14336,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14303,
                            "src": "11242:6:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 14337,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "11249:7:50",
                          "memberName": "divDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8382,
                          "src": "11242:14:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 14339,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11242:27:50",
                        "tryCall": false,
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
                    "src": "11210:63:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 14343,
                  "nodeType": "ExpressionStatement",
                  "src": "11210:63:50"
                }
              ]
            },
            "baseFunctions": [
              807
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_pricePerShare",
            "nameLocation": "10734:14:50",
            "overrides": {
              "id": 14298,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "10789:8:50"
            },
            "parameters": {
              "id": 14297,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10748:2:50"
            },
            "returnParameters": {
              "id": 14301,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14300,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "10823:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 14345,
                  "src": "10815:18:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14299,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10815:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10814:20:50"
            },
            "scope": 14346,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 13634,
              "name": "Hyperdrive",
              "nameLocations": [
                "2524:10:50"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 549,
              "src": "2524:10:50"
            },
            "id": 13635,
            "nodeType": "InheritanceSpecifier",
            "src": "2524:10:50"
          }
        ],
        "canonicalName": "MockHyperdrive",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          14346,
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
        "name": "MockHyperdrive",
        "nameLocation": "2506:14:50",
        "scope": 14423,
        "usedErrors": [
          7300,
          7302,
          7306,
          7310,
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
          7344,
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
      },
      {
        "id": 14422,
        "nodeType": "ContractDefinition",
        "src": "11284:807:50",
        "nodes": [
          {
            "id": 14353,
            "nodeType": "UsingForDirective",
            "src": "11384:33:50",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 14351,
              "name": "FixedPointMath",
              "nameLocations": [
                "11390:14:50"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9066,
              "src": "11390:14:50"
            },
            "typeName": {
              "id": 14352,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11409:7:50",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 14355,
            "nodeType": "VariableDeclaration",
            "src": "11423:28:50",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "totalShares",
            "nameLocation": "11440:11:50",
            "scope": 14422,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 14354,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11423:7:50",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 14375,
            "nodeType": "FunctionDefinition",
            "src": "11458:166:50",
            "nodes": [],
            "body": {
              "id": 14374,
              "nodeType": "Block",
              "src": "11622:2:50",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 14361,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14358,
                    "src": "11554:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 14362,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 14360,
                  "name": "HyperdriveDataProvider",
                  "nameLocations": [
                    "11531:22:50"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1927,
                  "src": "11531:22:50"
                },
                "nodeType": "ModifierInvocation",
                "src": "11531:31:50"
              },
              {
                "arguments": [
                  {
                    "arguments": [
                      {
                        "hexValue": "30",
                        "id": 14366,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11602:1:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "id": 14365,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "11594:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes32_$",
                        "typeString": "type(bytes32)"
                      },
                      "typeName": {
                        "id": 14364,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "11594:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 14367,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11594:10:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  {
                    "arguments": [
                      {
                        "hexValue": "30",
                        "id": 14370,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11614:1:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "id": 14369,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "11606:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 14368,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "11606:7:50",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 14371,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11606:10:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 14372,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 14363,
                  "name": "MultiTokenDataProvider",
                  "nameLocations": [
                    "11571:22:50"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 12483,
                  "src": "11571:22:50"
                },
                "nodeType": "ModifierInvocation",
                "src": "11571:46:50"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 14359,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14358,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "11509:7:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 14375,
                  "src": "11479:37:50",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 14357,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 14356,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "11479:11:50",
                        "11491:10:50"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7245,
                      "src": "11479:22:50"
                    },
                    "referencedDeclaration": 7245,
                    "src": "11479:22:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7245_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11469:53:50"
            },
            "returnParameters": {
              "id": 14373,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11622:0:50"
            },
            "scope": 14422,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 14389,
            "nodeType": "FunctionDefinition",
            "src": "11649:128:50",
            "nodes": [],
            "body": {
              "id": 14388,
              "nodeType": "Block",
              "src": "11717:60:50",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 14384,
                            "name": "_governanceFeesAccrued",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4859,
                            "src": "11746:22:50",
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
                            "id": 14382,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "11735:3:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 14383,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "11739:6:50",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "11735:10:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 14385,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11735:34:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 14381,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "11727:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 14386,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11727:43:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 14387,
                  "nodeType": "ExpressionStatement",
                  "src": "11727:43:50"
                }
              ]
            },
            "documentation": {
              "id": 14376,
              "nodeType": "StructuredDocumentation",
              "src": "11630:14:50",
              "text": "Mocks ///"
            },
            "functionSelector": "8e67f87e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getGovernanceFeesAccrued",
            "nameLocation": "11658:24:50",
            "parameters": {
              "id": 14377,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11682:2:50"
            },
            "returnParameters": {
              "id": 14380,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14379,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14389,
                  "src": "11708:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14378,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11708:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11707:9:50"
            },
            "scope": 14422,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14421,
            "nodeType": "FunctionDefinition",
            "src": "11806:283:50",
            "nodes": [],
            "body": {
              "id": 14420,
              "nodeType": "Block",
              "src": "11920:169:50",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14397
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14397,
                      "mutability": "mutable",
                      "name": "assets",
                      "nameLocation": "11938:6:50",
                      "nodeType": "VariableDeclaration",
                      "scope": 14420,
                      "src": "11930:14:50",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14396,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11930:7:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14405,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 14402,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "11976:4:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MockHyperdriveDataProvider_$14422",
                              "typeString": "contract MockHyperdriveDataProvider"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MockHyperdriveDataProvider_$14422",
                              "typeString": "contract MockHyperdriveDataProvider"
                            }
                          ],
                          "id": 14401,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11968:7:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 14400,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "11968:7:50",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 14403,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11968:13:50",
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
                        "id": 14398,
                        "name": "_baseToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4811,
                        "src": "11947:10:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$6731",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 14399,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11958:9:50",
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6688,
                      "src": "11947:20:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 14404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11947:35:50",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11930:52:50"
                },
                {
                  "expression": {
                    "id": 14416,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14406,
                      "name": "sharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14394,
                      "src": "11992:10:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 14409,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 14407,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14355,
                          "src": "12005:11:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 14408,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12020:1:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "12005:16:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 14414,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12054:1:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 14415,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "12005:50:50",
                      "trueExpression": {
                        "arguments": [
                          {
                            "id": 14412,
                            "name": "totalShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14355,
                            "src": "12039:11:50",
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
                            "id": 14410,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14397,
                            "src": "12024:6:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 14411,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "12031:7:50",
                          "memberName": "divDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8382,
                          "src": "12024:14:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 14413,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12024:27:50",
                        "tryCall": false,
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
                    "src": "11992:63:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 14417,
                  "nodeType": "ExpressionStatement",
                  "src": "11992:63:50"
                },
                {
                  "expression": {
                    "id": 14418,
                    "name": "sharePrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14394,
                    "src": "12072:10:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14395,
                  "id": 14419,
                  "nodeType": "Return",
                  "src": "12065:17:50"
                }
              ]
            },
            "baseFunctions": [
              1508
            ],
            "documentation": {
              "id": 14390,
              "nodeType": "StructuredDocumentation",
              "src": "11783:18:50",
              "text": "Overrides ///"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_pricePerShare",
            "nameLocation": "11815:14:50",
            "overrides": {
              "id": 14392,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "11870:8:50"
            },
            "parameters": {
              "id": 14391,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11829:2:50"
            },
            "returnParameters": {
              "id": 14395,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14394,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "11904:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 14421,
                  "src": "11896:18:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14393,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11896:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11895:20:50"
            },
            "scope": 14422,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 14347,
              "name": "MultiTokenDataProvider",
              "nameLocations": [
                "11327:22:50"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 12483,
              "src": "11327:22:50"
            },
            "id": 14348,
            "nodeType": "InheritanceSpecifier",
            "src": "11327:22:50"
          },
          {
            "baseName": {
              "id": 14349,
              "name": "HyperdriveDataProvider",
              "nameLocations": [
                "11355:22:50"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1927,
              "src": "11355:22:50"
            },
            "id": 14350,
            "nodeType": "InheritanceSpecifier",
            "src": "11355:22:50"
          }
        ],
        "canonicalName": "MockHyperdriveDataProvider",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          14422,
          1927,
          12483,
          5167,
          7515,
          7868,
          12544,
          64180
        ],
        "name": "MockHyperdriveDataProvider",
        "nameLocation": "11293:26:50",
        "scope": 14423,
        "usedErrors": [
          7312,
          7318,
          7320,
          7324,
          7330,
          7359,
          7364,
          7416,
          7418,
          7425
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 50
} as const;
