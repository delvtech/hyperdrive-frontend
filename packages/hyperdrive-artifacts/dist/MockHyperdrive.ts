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
          "name": "withdrawalShareAmount",
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
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
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
      "name": "calculateFeesInGivenBondsOut",
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
      "name": "calculateFeesOutGivenBondsIn",
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
      "name": "calculateFeesOutGivenSharesIn",
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
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
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
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
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
          "internalType": "bool",
          "name": "asUnderlying",
          "type": "bool"
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
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
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
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
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
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
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
          "name": "status",
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
          "name": "_shares",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutputPerShare",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
        }
      ],
      "name": "redeemWithdrawalShares",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "baseProceeds",
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
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
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
          "name": "who",
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
    "object": "0x61028060405260016000553480156200001757600080fd5b5060405162006e7738038062006e778339810160408190526200003a91620003d3565b6001600160a01b038181166080908152600060a081815260c082905260408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc68184015246606082015230818701528251808203909601865290920181528351939091019290922060e052845190921661010052830151839183918190849084908390819084906103e8111562000120576040516349db44f560e01b815260040160405180910390fd5b60408101516101a05260608101516101c05260a08101516000036200015857604051635428734d60e01b815260040160405180910390fd5b60a0810180516101205251608082015110806200018957508060a001518160800151620001869190620004bf565b15155b15620001a85760405163253fffcf60e11b815260040160405180910390fd5b60808101516101405260c08101516101605260208101516101805260e0810151601180546001600160a01b0319166001600160a01b03928316179055610100820151166102405261012081015151670de0b6b3a764000010806200021c5750670de0b6b3a764000081610120015160200151115b80620002385750670de0b6b3a764000081610120015160400151115b1562000257576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101e0528051602001516102005251604001516102205261016001516102605260005b84610140015181101562000302576040805180820190915263ffffffff4281168252600060208301818152601280546001818101835591909352935190516001600160e01b0316640100000000029216919091177fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3444909101550162000282565b5050505050505050505050620004e2565b60405161018081016001600160401b03811182821017156200034557634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200036357600080fd5b919050565b6000606082840312156200037b57600080fd5b604051606081016001600160401b0381118282101715620003ac57634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b6000808284036101e0811215620003e957600080fd5b6101c080821215620003fa57600080fd5b6200040462000313565b915062000411856200034b565b82526020850151602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c08301526200045d60e086016200034b565b60e0830152610100620004728187016200034b565b90830152610120620004878787830162000368565b81840152506101808501516101408301526101a0850151610160830152819350620004b48186016200034b565b925050509250929050565b600082620004dd57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516166ed6200078a6000396000613795015260008181610f8a0152610ff00152600081816141b10152818161422a015281816146220152818161469301528181614d51015261511b015260008181613b3a015281816141fe0152818161435f0152818161466701526150ef015260008181614185015281816145f60152614d0d015260008181610a02015281816114a101528181611a7101528181611d4501528181611f2b015261233d015260008181610d5301528181610d9e01528181610eb201528181613ff401528181614043015281816146f80152818161473401528181614974015281816150620152615281015260008181610adb01528181610e2101528181611f8c015281816127ac015281816127d901528181612acf01528181612b1701528181613a18015281816142a40152818161494e0152614dd9015260008181610e6401528181611fce01528181612aad01528181612b38015281816139f6015281816142820152818161499a0152614db7015260008181610b5d01528181610e43015281816115af01528181611afc01528181611fad015281816123fa015281816128e401528181612a090152818161399a01528181613ac001528181613d1301528181614cd40152614e7101526000818161221e015281816122c7015261284c0152600081816112df01528181611379015281816113ec01528181612520015281816125a90152818161266e01528181612706015281816131520152818161319b0152818161327501528181613321015281816133d3015261341c0152600081816104610152611840015260006136ca0152600061368d0152600061025201526166ed6000f3fe60806040526004361061023b5760003560e01c80639032c7261161012e578063b1b4b170116100ab578063d5002f2e1161006f578063d5002f2e146108be578063e44808bc146108d3578063ed64bab2146108f3578063f6e5544914610913578063fa3fcea7146109335761023b565b8063b1b4b17014610811578063b4f8da3914610831578063c23632a71461086b578063c326a9031461088b578063ca6d38f71461089e5761023b565b8063a179403b116100f2578063a179403b14610763578063a22cb46514610776578063a30b7e3d14610796578063a77384c1146107d1578063ab033ea9146107f15761023b565b80639032c726146106ae578063907c0f92146106ce57806395530b75146106e35780639bd33498146107235780639cd241af146107435761023b565b80634ed2d6ac116101bc578063702db0eb11610180578063702db0eb146105635780637180c8ca146105975780638120a3e2146105b757806388348397146105d75780638fca1f7b146106855761023b565b80634ed2d6ac146104c35780635a1a3e7c146104e3578063680962391461050357806368c2ecb8146105235780636f8c3a5b146105435761023b565b80632787d595116102035780632787d595146103fb57806330adf81f1461041b5780633644e5151461044f5780634536ee2f146104835780634daa8b8f146104a35761023b565b806302329a291461034b57806306dae82a1461036d57806317fad7fc1461039a5780631c0f12b6146103ba5780632002b333146103da575b34801561024757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161028a929190615d7a565b600060405180830381855af49150503d80600081146102c5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ca565b606091505b509150915081156102ee57604051638bb0a34b60e01b815260040160405180910390fd5b60006102f982615d8a565b90506001600160e01b03198116636e64089360e11b1461031b57815160208301fd5b81516003198101600484019081529261033c91810160200190602401615e32565b80519650602001945050505050f35b34801561035757600080fd5b5061036b610366366004615efc565b610953565b005b61038061037b366004615f30565b61099c565b604080519283526020830191909152015b60405180910390f35b3480156103a657600080fd5b5061036b6103b5366004615fc9565b610c21565b3480156103c657600080fd5b5061036b6103d536600461605a565b610cd5565b6103ed6103e836600461609e565b610ce8565b604051908152602001610391565b34801561040757600080fd5b506103ed610416366004615efc565b610f3d565b34801561042757600080fd5b506103ed7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561045b57600080fd5b506103ed7f000000000000000000000000000000000000000000000000000000000000000081565b34801561048f57600080fd5b5061038061049e36600461609e565b611021565b3480156104af57600080fd5b506103806104be3660046160e6565b6111f1565b3480156104cf57600080fd5b5061036b6104de3660046160ff565b611261565b3480156104ef57600080fd5b5061036b6104fe3660046160e6565b6112af565b34801561050f57600080fd5b5061036b61051e366004616145565b6112bb565b34801561052f57600080fd5b506103ed61053e3660046160e6565b611466565b34801561054f57600080fd5b506103ed61055e366004615f30565b611477565b34801561056f57600080fd5b5061036b61057e36600461617e565b6001600160801b03908116600160801b02911617600855565b3480156105a357600080fd5b5061036b6105b23660046161b1565b6116e5565b3480156105c357600080fd5b5061036b6105d23660046160e6565b61175d565b3480156105e357600080fd5b5061036b6105f23660046161fa565b805160208201516001600160801b03918216600160801b91831682021760085560408301516060840151908316908316820217600955608083015160a0840151908316908316820217600a5560c083015160e084015190831692160217600b5561010080820151600c80546101209094015161ffff1990941691151561ff00191691909117921515909102919091179055565b34801561069157600080fd5b506013546001600160801b0380821691600160801b900416610380565b3480156106ba57600080fd5b5061036b6106c93660046162c2565b611766565b3480156106da57600080fd5b506103ed6119b5565b3480156106ef57600080fd5b506107036106fe36600461633e565b6119c4565b604080519485526020850193909352918301526060820152608001610391565b34801561072f57600080fd5b5061070361073e366004616145565b6119e8565b34801561074f57600080fd5b5061036b61075e366004616370565b611a08565b610380610771366004615f30565b611a14565b34801561078257600080fd5b5061036b6107913660046161b1565b611c0d565b3480156107a257600080fd5b506107b66107b136600461633e565b611c79565b60408051938452602084019290925290820152606001610391565b3480156107dd57600080fd5b5061036b6107ec3660046160e6565b601455565b3480156107fd57600080fd5b5061036b61080c3660046163a5565b611c9a565b34801561081d57600080fd5b506103ed61082c3660046160e6565b611d0e565b34801561083d57600080fd5b5061036b61084c3660046163c0565b600980546001600160801b03928316600160801b029216919091179055565b34801561087757600080fd5b5061038061088636600461609e565b611d19565b6103ed610899366004615f30565b611ed0565b3480156108aa57600080fd5b506103ed6108b93660046160e6565b612192565b3480156108ca57600080fd5b506014546103ed565b3480156108df57600080fd5b5061036b6108ee3660046163db565b61219d565b3480156108ff57600080fd5b5061036b61090e3660046160e6565b6121ed565b34801561091f57600080fd5b5061038061092e366004616432565b6122f7565b34801561093f57600080fd5b506103ed61094e366004615f30565b612313565b336000908152600f602052604090205460ff16610982576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b6000806000546001146109ca5760405162461bcd60e51b81526004016109c19061645e565b60405180910390fd5b6002600055600c54610100900460ff16156109f8576040516313d0ff5960e31b815260040160405180910390fd5b610a0061251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015610a415760405163211ddda360e11b815260040160405180910390fd5b600080610a4e898661258b565b9150915086811015610a73576040516342af972b60e01b815260040160405180910390fd5b6000610a7d612845565b9050610a89818361287b565b506000806000610a998686612a86565b600854919a50929550909350909150610ac3908390600160801b90046001600160801b0316616498565b610b0084610acf612bb7565b610ad991906164ab565b7f000000000000000000000000000000000000000000000000000000000000000090612bd8565b1115610b1f5760405163512095c760e01b815260040160405180910390fd5b868c1115610b405760405163c972651760e01b815260040160405180910390fd5b8060106000828254610b5291906164ab565b90915550610b8290507f0000000000000000000000000000000000000000000000000000000000000000856164ab565b9750610b9283888488888d612bf4565b6000610b9f60018a612dee565b9050610bac818c8a612e23565b60008e9050818c6001600160a01b03167f7b7d51ee23746cf6ef2078de2a5b53073226b516a1c892a1e882c581026bf4b38c848d604051610c00939291909283526020830191909152604082015260600190565b60405180910390a35050505050505050600160005590969095509350505050565b6001600160a01b0386161580610c3e57506001600160a01b038516155b15610c5c5760405163f0dd15fd60e01b815260040160405180910390fd5b828114610c7c5760405163174861a760e31b815260040160405180910390fd5b60005b83811015610ccc57610cc4858583818110610c9c57610c9c6164be565b905060200201358888868686818110610cb757610cb76164be565b9050602002013533612ecc565b600101610c7f565b50505050505050565b610ce28484848433612ecc565b50505050565b60008054600114610d0b5760405162461bcd60e51b81526004016109c19061645e565b6002600055610d1861251e565b600c5460ff1615610d3c57604051637983c05160e01b815260040160405180910390fd5b600080610d49878561258b565b9092509050610d797f000000000000000000000000000000000000000000000000000000000000000060026164d4565b821015610d9957604051632afb507160e21b815260040160405180910390fd5b610dc47f000000000000000000000000000000000000000000000000000000000000000060026164d4565b610dce9083616498565b9250610de1610ddb612845565b8261287b565b50600c805460ff19166001179055610df88261308d565b600880546001600160801b0319166001600160801b0392909216919091179055610e8d610e88837f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006130b7565b61308d565b600880546001600160801b03928316600160801b029216919091179055610ed66000807f0000000000000000000000000000000000000000000000000000000000000000612e23565b610ee260008685612e23565b60408051848152602081018990529081018790526001600160a01b038616907f60c26087830ee0ee6d86bdb3a10e19f3fd49af366c77421d7fe4596811d6274e9060600160405180910390a250506001600055949350505050565b60008054600114610f605760405162461bcd60e51b81526004016109c19061645e565b60026000908155338152600f602052604090205460ff16158015610fad5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610fc457506011546001600160a01b03163314155b15610fe1576040516282b42960e81b815260040160405180910390fd5b601080546000909155611015817f000000000000000000000000000000000000000000000000000000000000000085613121565b60016000559392505050565b6000806000546001146110465760405162461bcd60e51b81526004016109c19061645e565b600260009081556110556133b8565b9050611062610ddb612845565b5061106c816134b7565b600d548792506001600160801b03168083111561109057806001600160801b031692505b826000036110a6576000809350935050506111e1565b6110b5600360f81b3385613591565b600d546001600160801b03600160801b9091048116906000906110dd90869084908616613631565b90506110e88561308d565b6110f290846164eb565b600d80546001600160801b0319166001600160801b039290921691909117905561111b8161308d565b600d805460109061113d908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116c818989613121565b9550856111798a87612bd8565b11156111985760405163c972651760e01b815260040160405180910390fd5b60408051868152602081018890526001600160a01b038a16917f07cd0949bbc0d60ad35053a0459db413c148f758b7781aaf6b258018d18ad0ac910160405180910390a2505050505b6001600055909590945092505050565b60008060128381548110611207576112076164be565b9060005260206000200160000160049054906101000a90046001600160e01b03166001600160e01b031660128481548110611244576112446164be565b600091825260209091200154909463ffffffff9091169350915050565b8361126b8161364f565b6001600160a01b0316336001600160a01b03161461129c57604051632aab8bd360e01b815260040160405180910390fd5b6112a88585858561370c565b5050505050565b6112b881613779565b50565b6040516370a0823160e01b8152306004820152600090611351906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611326573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134a9190616512565b83856138d3565b91505060008113156113d9576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b1580156113c557600080fd5b505af1158015610ccc573d6000803e3d6000fd5b6000811215611461576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac3061141b8461652b565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b1580156113c557600080fd5b505050565b60006114718261396d565b92915050565b6000805460011461149a5760405162461bcd60e51b81526004016109c19061645e565b60026000557f00000000000000000000000000000000000000000000000000000000000000008510156114e05760405163211ddda360e11b815260040160405180910390fd5b60006114ea6133b8565b90506114f6878261287b565b5061150c611505600289612dee565b3388613591565b6000806000806000806115208c888f6139be565b600854959b5093995091975095509350915061154d908790600160801b90046001600160801b0316616498565b61155984610acf612bb7565b11156115785760405163512095c760e01b815260040160405180910390fd5b8b8d884282111561163a57836010600082825461159591906164ab565b909155506115a89050838a898886613b92565b60006115d47f000000000000000000000000000000000000000000000000000000000000000084616498565b6000818152600e6020526040812054919250600160801b909104600f0b906116079086908a908e908d9089908990613d0c565b6000828152600e602052604090205461162e90600f83810b91600160801b9004900b613eb4565b6116378c6134b7565b50505b6000611647898f8f613121565b90508e81101561166a5760405163c972651760e01b815260040160405180910390fd5b611675600284612dee565b8e6001600160a01b03167f39d1403e56c69205ef368007a55ee1304b0f388631dca237a1710d04e3e8950f8584886040516116c3939291909283526020830191909152604082015260600190565b60405180910390a39a5050505050505050505050600160005595945050505050565b6011546001600160a01b0316331461170f576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6112b881613fdb565b834211156117875760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166117ae5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156118da573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461191857604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600760205260408120805490919061193e90616547565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b60006119bf612845565b905090565b6000806000806119d68888888861415d565b929b919a509850909650945050505050565b6000806000806119f88686612a86565b9299919850965090945092505050565b6114618383833361370c565b600080600054600114611a395760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611a67576040516313d0ff5960e31b815260040160405180910390fd5b611a6f61251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015611ab05760405163211ddda360e11b815260040160405180910390fd5b6000611aba6133b8565b905085811015611add576040516342af972b60e01b815260040160405180910390fd5b6000611ae7612845565b90506000611af5828461287b565b9050611b217f0000000000000000000000000000000000000000000000000000000000000000836164ab565b9450600080611b318c868561425c565b6010805493995091945092508291600090611b4d9084906164ab565b909155505050848a1015611b745760405163c972651760e01b815260040160405180910390fd5b611b7e858861258b565b5050611b8c8b828689614390565b6000611b99600288612dee565b9050611ba6818a8e612e23565b60408051888152602081018890529081018d90528c9082906001600160a01b038c16907f851bac68873b7adb346bcf4bff36324c6f322b58f9f0f50c1d3a8568242ca66b9060600160405180910390a3505050505050600160005590969095509350505050565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6000806000611c8a878787876145ce565b9199909850909650945050505050565b6011546001600160a01b03163314611cc4576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611471826146cf565b600080600054600114611d3e5760405162461bcd60e51b81526004016109c19061645e565b60026000557f0000000000000000000000000000000000000000000000000000000000000000861015611d845760405163211ddda360e11b815260040160405180910390fd5b6000611d8e6133b8565b9050611d9b610ddb612845565b50611da5816134b7565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091611e00916001600160801b0390911690616498565b90506000611e0e82846164ab565b9050611e1c6000338c613591565b6000611e2b8b86848787614778565b96509050611e3e600360f81b8a88612e23565b611e49818a8a613121565b9650868a1115611e6c5760405163c972651760e01b815260040160405180910390fd5b604080518c8152602081018990529081018790528b906001600160a01b038b16907f59c3a0b60c6ab7deb62e1440c9e72441db6db7dfe514dba8cb18e60c0d896efa9060600160405180910390a25050505050506001600055909590945092505050565b60008054600114611ef35760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611f21576040516313d0ff5960e31b815260040160405180910390fd5b611f2961251e565b7f0000000000000000000000000000000000000000000000000000000000000000861015611f6a5760405163211ddda360e11b815260040160405180910390fd5b6000611ff2611f77612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000614876565b90508581108061200157508481115b1561201f57604051633b61151160e11b815260040160405180910390fd5b60008061202c898661258b565b9150915061203b610ddb612845565b50600d54600360f81b600090815260026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091612087916001600160801b0390911690616498565b6000808052600260205260008051602061669883398151915254919250906120b09083906164ab565b90506000806120be856148b1565b905060006120cb82614a17565b90506120d687613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015261210882614a17565b925061212084826121198187616498565b9190613631565b9850505061213060008a89612e23565b612139846134b7565b60408051888152602081018e90526001600160a01b038b16917f06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca910160405180910390a250506001600055509298975050505050505050565b600061147182614c89565b846121a78161364f565b6001600160a01b0316336001600160a01b0316146121d857604051632aab8bd360e01b815260040160405180910390fd5b6121e58686868686612ecc565b505050505050565b6000818152600e60205260409020546001600160801b03161561220d5750565b6000612217612845565b90506122437f000000000000000000000000000000000000000000000000000000000000000083616576565b15158061224f57508181105b1561226d5760405163ecd29e8160e01b815260040160405180910390fd5b80820361228557611461816122806133b8565b61287b565b815b6000818152600e60205260409020546001600160801b03168282036122b1576122ae6133b8565b90505b80156122c1576112a8848261287b565b506122ec7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b9050612287565b5050565b600080612305858585614cff565b90925090505b935093915050565b600080546001146123365760405162461bcd60e51b81526004016109c19061645e565b60026000557f000000000000000000000000000000000000000000000000000000000000000085101561237c5760405163211ddda360e11b815260040160405180910390fd5b60006123866133b8565b9050612392878261287b565b506123a1611505600189612dee565b6000806000806000806123b58c888f614d7f565b95509550955095509550955060008d90508d42101561247e5781601060008282546123e091906164ab565b909155506123f390508d88878685614ef6565b600061241f7f000000000000000000000000000000000000000000000000000000000000000083616498565b6000818152600e6020526040902054909150600160801b9004600f0b61244b8f878b8a878f6001613d0c565b6000828152600e602052604090205461247290600f83810b91600160801b9004900b613eb4565b61247b8a6134b7565b50505b600061248b878d8d613121565b9050808d11156124ae5760405163c972651760e01b815260040160405180910390fd5b8d6124ba600184612dee565b60408051858152602081018590529081018390526001600160a01b038f16907fe8c2c201cc00307ad7ec0d92d7ee5f89a796b4b1134d1672b08939eaf504d68c9060600160405180910390a35060016000559e9d5050505050505050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061256b5750600034115b1561258957604051631574f9f360e01b815260040160405180910390fd5b565b60008080600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161265957479150853410156125fa576040516312171d8360e31b815260040160405180910390fd5b85341115612654573361260d8734616498565b604051600081818185875af1925050503d8060008114612649576040519150601f19603f3d011682016040523d82523d6000602084013e61264e565b606091505b50909150505b61277e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156126bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126e19190616512565b6040516323b872dd60e01b8152336004820152306024820152604481018890529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612757573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061277b919061658a565b90505b8061279c576040516312171d8360e31b815260040160405180910390fd5b601454600003612802576127d0867f00000000000000000000000000000000000000000000000000000000000000006150c3565b601481905593507f0000000000000000000000000000000000000000000000000000000000000000925061283e915050565b601454600090612813908885613631565b9050806014600082825461282791906164ab565b909155508190506128366133b8565b945094505050505b9250929050565b60006128717f000000000000000000000000000000000000000000000000000000000000000042616576565b6119bf9042616498565b6000828152600e6020526040812080546001600160801b03161515806128a057504284115b156128b657546001600160801b03169050611471565b6128bf8361308d565b81546001600160801b0319166001600160801b03919091161781556000600e816129097f000000000000000000000000000000000000000000000000000000000000000088616498565b815260208101919091526040016000908120546001600160801b031691506002816129348289612dee565b81526020019081526020016000205490506000808211156129905760008061295f84898760006150d8565b91509150806010600082825461297591906164ab565b90915550612989905084600084808d613b92565b6001925050505b6000600260006129a160018b612dee565b815260200190815260200160002054905060008111156129fc576000806129cb838a8860016150d8565b9150915080601060008282546129e191906164ab565b909155506129f5905083600084808e614ef6565b6001935050505b8115612a7a576000612a2e7f00000000000000000000000000000000000000000000000000000000000000008a616498565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b92612a6e928492919004900b613eb4565b612a77896134b7565b50505b50949695505050505050565b600080600080612af3612a97612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006151a6565b92506000612b5c612b02612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006151d2565b9050612b6781613779565b600080612b7589848a614cff565b9092509050612b848287616498565b9450612b9081866164ab565b9550612b9d81848a613631565b9350612ba9848a616498565b965050505092959194509250565b6008546009546000916119bf916001600160801b0390911690600f0b6151e3565b6000612bed8383670de0b6b3a7640000613631565b9392505050565b600a546001600160801b0316612c2f610e8882612c1985670de0b6b3a76400006164d4565b600b546001600160801b031691908a6001615200565b600b80546001600160801b0319166001600160801b0392909216919091179055612c588761308d565b60088054600090612c739084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612ca08561308d565b60088054601090612cc2908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612cef8661308d565b612cf990826165a7565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b90612d55612d408b89612bd8565b612d4b8b60026164d4565b610e889190616498565b835490915081908490601090612d76908490600160801b9004600f0b6165c7565b82546001600160801b039182166101009390930a9283029190920219909116179055508254612db390600f84810b91600160801b9004900b613eb4565b612dbc8761527a565b612dd9576040516318846de960e01b815260040160405180910390fd5b612de2876134b7565b50505050505050505050565b60006001600160f81b03821115612e185760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612e559084906164ab565b909155505060008381526002602052604081208054839290612e789084906164ab565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6001600160a01b0384161580612ee957506001600160a01b038316155b15612f075760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614612fcb576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff16612fcb5760008581526004602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114612fc95760008681526004602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290612fc3908490616498565b90915550505b505b60008581526001602090815260408083206001600160a01b038816845290915281208054849290612ffd908490616498565b909155505060008581526001602090815260408083206001600160a01b0387168452909152812080548492906130349084906164ab565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000600160801b82106130b357604051630f0af95160e11b815260040160405180910390fd5b5090565b6000806130c8846301e133806150c3565b90506131146131046130e2670de0b6b3a7640000866152ec565b6130ec8885612bd8565b6130fe90670de0b6b3a76400006164ab565b90615301565b61310e888a612bd8565b90612bd8565b9150505b95945050505050565b600060145484116131325783613136565b6014545b9350600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613186575047613211565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156131ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061320e9190616512565b90505b601454600003613222576000613241565b61324161323a601454836150c390919063ffffffff16565b8690612bd8565b915084601460008282546132559190616498565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016132fb576040516001600160a01b038616908490600081818185875af1925050503d80600081146132eb576040519150601f19603f3d011682016040523d82523d6000602084013e6132f0565b606091505b505080915050613391565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018590527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561336a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061338e919061658a565b90505b806133af576040516312171d8360e31b815260040160405180910390fd5b50509392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613407575047613492565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561346b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061348f9190616512565b90505b6014546000036134a35760006134b1565b6014546134b19082906150c3565b91505090565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091613512916001600160801b0390911690616498565b9050600061352082846164ab565b90506000613535613530866148b1565b614a17565b90506000613544858385613631565b9050600080613552886146cf565b905082811115613569576135668382616498565b91505b6000821180613576575083155b156135875761358782858789615358565b5050505050505050565b60008381526001602090815260408083206001600160a01b0386168452909152812080548392906135c3908490616498565b9091555050600083815260026020526040812080548392906135e6908490616498565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612ebf565b600082600019048411830215820261364857600080fd5b5091020490565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6013546001600160801b03600160801b820481169116426137ba7f0000000000000000000000000000000000000000000000000000000000000000846164ab565b11156137c557505050565b6000601282815481106137da576137da6164be565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b03169061380e8342616498565b6012549091508782028301906000906138288860016164ab565b6138329190616576565b905060405180604001604052804263ffffffff168152602001836001600160e01b03168152506012828154811061386b5761386b6164be565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b600080806138e5846301e133806150c3565b9050600061390482600088126138fb578761310e565b61310e8861652b565b905060008613156139375761392261391b82615441565b8890612bd8565b935061392e8785616498565b9250505061230b565b600086121561395f5761395361394c82615441565b88906150c3565b935061392e87856165f4565b509495600095509350505050565b600080613978612845565b9050808311613988576000613992565b6139928184616498565b9150612bed827f00000000000000000000000000000000000000000000000000000000000000006150c3565b60008060008060008060006139d28861396d565b9050613a3c6139df612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006155cc565b909850955093506000613a50612b02612bb7565b9050613a5b81613779565b8a8a6000808080613a6e8689898861415d565b93509350935093508082613a8291906164ab565b9850613a8e8285616498565b613a98908c6164ab565b9a50613aa483856164ab565b613aae908d6164ab565b9b5050505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a613aea9190616498565b815260208101919091526040016000908120546001600160801b03169150428911613b2c576000898152600e60205260409020546001600160801b0316613b2e565b895b9050613b5e8b8784848e7f000000000000000000000000000000000000000000000000000000000000000061563c565b9650613b6a8387616498565b9550613b7c878787868686600061568e565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b0316613bdb610e8882613bbe85670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b031691908a6000615200565b600b80546001600160801b03928316600160801b029216919091179055613c018661308d565b613c0b90826164eb565b600a80546001600160801b03928316600160801b02921691909117905550613c328361308d565b60088054600090613c4d9084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550613c7a82615709565b60098054600090613c8f908490600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613cbf8461308d565b60088054601090613ce1908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b6000613d387f000000000000000000000000000000000000000000000000000000000000000085616498565b9050600060026000613d4b600188612dee565b8152602001908152602001600020549050600060026000613d6d600289612dee565b8152602001908152602001600020549050816000148015613d8c575080155b15613db1576000838152600e6020526040902080546001600160801b03169055612de2565b6000613df58b613dc18c89612bd8565b613dcc9060026164d4565b8b613dd78c8b612bd8565b613de191906164ab565b613deb9190616498565b610e8891906164ab565b90508415613e54576000848152600e602052604090208054829190601090613e28908490600160801b9004600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613ea7565b6000848152600e602052604090208054829190601090613e7f908490600160801b9004600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b5050505050505050505050565b8082138015613ec4575060008212155b15613f57576000613ed58282615747565b613edf90846165f4565b600954909150613f0c90613f07908390600160801b90046001600160801b0316600f0b61575d565b615709565b60098054601090613f2e908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b818113156122f35760008212613fcd57613f7082615709565b613f7982615709565b613f839190616614565b60098054601090613fa5908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b613f83613f07826000615747565b80600003613fe65750565b6008546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156140335760405163585fe6df60e11b815260040160405180910390fd5b600061403f8383616641565b90507f00000000000000000000000000000000000000000000000000000000000000008112156140825760405163585fe6df60e11b815260040160405180910390fd5b61408b8161308d565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b8181126140cd576140c6838286613631565b91506140ed565b6140e16140d98261652b565b849086613631565b6140ea9061652b565b91505b6140f682615709565b600980546001600160801b0319166001600160801b0392831617905560085461413991610e8891600160801b90041661412f87856151e3565b61211987876151e3565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600080808061417486670de0b6b3a7640000616498565b93506141a987866121198b61310e897f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506141d5847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915060006141f66141ee89670de0b6b3a7640000616498565b8a9088613631565b9050614222817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b935061424e847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915050945094509450949050565b60008060006142c861426c612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061576c565b9150856142d58387612bd8565b11156142f45760405163512095c760e01b815260040160405180910390fd5b6000614301612b02612bb7565b905061430c81613779565b600061432288670de0b6b3a7640000848a6145ce565b945090915061433390508382616498565b61433d9085616498565b93506143838761310e8a6143518789616498565b8a61435c8d8261578d565b8d7f000000000000000000000000000000000000000000000000000000000000000061563c565b9450505093509350939050565b600a546143da90610e8890600160801b90046001600160801b03166143bd84670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b03169190886001615200565b600b80546001600160801b03928316600160801b02921691909117905560006144028461308d565b60085461441891906001600160801b03166164eb565b600880546001600160801b0319166001600160801b038316179055905061443e8561308d565b60088054601090614460908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061448d8561308d565b600a80546010906144af908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b9116121590506144fe5760405163585fe6df60e11b815260040160405180910390fd5b6000614508612845565b6000818152600e6020526040902054909150600160801b9004600f0b61452d8761308d565b6000838152600e602052604090208054601090614555908490600160801b9004600f0b616614565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e602052604090205461459f90600f83810b91600160801b9004900b613eb4565b6145a88561527a565b6145c5576040516318846de960e01b815260040160405180910390fd5b610ccc856134b7565b60008080806145e586670de0b6b3a7640000616498565b905061461a87866121198b61310e867f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9350614646847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9150600061465f6141ee89670de0b6b3a7640000616498565b905061468b817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506146b7847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b6146c190846164ab565b925050509450945094915050565b60095460009081906146f190600160801b90046001600160801b0316846150c3565b905061471d7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b6008546001600160801b03161115614772576008547f0000000000000000000000000000000000000000000000000000000000000000906147689083906001600160801b0316616498565b612bed9190616498565b50919050565b6000806000614786876148b1565b9050600061479382614a17565b90506147a56147a06133b8565b6146cf565b93506147b2848a88613631565b93506147c56147c08561652b565b613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015260006147f983614a17565b90506000614808898385613631565b90506148148b8a6165f4565b61481e90826165f4565b9050600081121561486757600061483f6148378361652b565b85908c613631565b905061484b8188616498565b965061485681613fdb565b61486181898d61579c565b60009150505b93505050509550959350505050565b600080614885878787866151d2565b905061311461489982866301e133806157e1565b6148ab83670de0b6b3a7640000616498565b906150c3565b61490e60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b5490916101008301916149dd9116614c89565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192614a0f92900416614c89565b905292915050565b600080614a37836101400151846101200151612bd890919063ffffffff16565b61010084015160e0850151614a4b91612bd8565b614a5591906165f4565b90506000614a6b846000015185602001516151e3565b90506000821315614b0d576000614aad8286604001518760a001518860c00151670de0b6b3a7640000614a9e9190616498565b89606001518a60800151615807565b9150614abb90508184615883565b90508015614b0757614af4828660400151838860c00151670de0b6b3a7640000614ae59190616498565b89606001518a60800151615892565b85518690614b03908390616498565b9052505b50614bcb565b6000821215614bcb57614b1f8261652b565b91506000614b538286604001518760c00151670de0b6b3a7640000614b449190616498565b886060015189608001516158c6565b9150614b6190508184615883565b90508015614bad57614b9a828660400151838860c00151670de0b6b3a7640000614b8b9190616498565b89606001518a60800151615950565b85518690614ba99083906164ab565b9052505b614bb78184616498565b85518690614bc69083906164ab565b905250505b6000614bfa856101000151670de0b6b3a7640000614be99190616498565b606087015160e08801519190613631565b614c28866101400151670de0b6b3a7640000614c169190616498565b60608801516101208901519190613631565b614c3291906165f4565b90506000818660000151614c469190616641565b90508560a00151811215614c6d5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151614c7f9082616498565b9695505050505050565b600080670de0b6b3a7640000614c9d612845565b614ca791906164d4565b9050808311614cb7576000614cc1565b614cc18184616498565b9150612bed614cf8670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006164d4565b83906150c3565b600080614d498561310e85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000614d3f818c6150c3565b61310e9190616498565b9150614d75827f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9050935093915050565b6000806000806000806000614d938861396d565b9050614dfd614da0612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006159cb565b909850965093506000614e11612b02612bb7565b9050614e1c81613779565b600080614e2b8d85858f6145ce565b96509092509050614e3c8288616498565b9650614e4881836164ab565b614e52908a616498565b9850614e5e858a6164ab565b975050505050614ee285858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e614e9b9190616498565b81526020810191909152604001600020546001600160801b0316428d11614ed95760008d8152600e60205260409020546001600160801b0316614edb565b8d5b600161568e565b999d939c50919a5098509695509350505050565b600a546001600160801b0316614f31610e8882614f1b85670de0b6b3a76400006164d4565b600b546001600160801b031691908a6000615200565b600b80546001600160801b0319166001600160801b0392909216919091179055614f5a8661308d565b614f6490826164eb565b600a80546001600160801b0319166001600160801b039290921691909117905550614f8e8361308d565b60088054600090614fa99084906001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614fd682615709565b60098054600090614feb908490600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061501b8461308d565b6008805460109061503d908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b038181021990931691831602179091556008547f00000000000000000000000000000000000000000000000000000000000000009116109050806150a55750600954600854600f9190910b6001600160801b03909116125b156112a85760405163585fe6df60e11b815260040160405180910390fd5b6000612bed83670de0b6b3a764000084613631565b6000806150e586866150c3565b91506000615113837f0000000000000000000000000000000000000000000000000000000000000000612bd8565b905061513f817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b91508315615162576151518282616498565b61515b9084616498565b9250615179565b61516c8282616498565b61517690846164ab565b92505b8486101561519c5761518c838787613631565b9250615199828787613631565b91505b5094509492505050565b60006151c78787876151c088670de0b6b3a7640000616498565b8787615a17565b979650505050505050565b6000613118826130fe858888613631565b6000806151f083856165f4565b90506000811215612bed57600080fd5b600081156152405761523961521584876164ab565b61521f8587612bd8565b615229888a612bd8565b61523391906164ab565b906152ec565b9050613118565b82850361524f57506000613118565b614c7f61525c8487616498565b6152668587612bd8565b615270888a612bd8565b6152339190616498565b60006152a67f000000000000000000000000000000000000000000000000000000000000000083612bd8565b6009546008546152e4916000916001600160801b03600160801b9092048216600f0b916152d4911687612bd8565b6152de91906165f4565b90615747565b121592915050565b6000612bed83670de0b6b3a7640000846157e1565b60008160000361531a5750670de0b6b3a7640000611471565b8260000361532a57506000611471565b81600061533685615a8a565b905081810261534d670de0b6b3a764000082616669565b9050614c7f81615441565b60008084116153675782615372565b615372838686613631565b9050806000036153825750610ce2565b80858382111561539d5783915061539a878385613631565b90505b6153a68261308d565b600d80546000906153c19084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506153ee8161308d565b600d8054601090615410908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ccc816147c09061652b565b6000680248ce36a70cb26b3e19821361545c57506000919050565b680755bf798b4a1bf1e582126154855760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600080806155ed6155e588670de0b6b3a7640000616498565b899087613631565b90506155f98888612bd8565b9150811561562f576156208a8a846156198a670de0b6b3a7640000616498565b8989615950565b925061562c83826164ab565b90505b9750975097945050505050565b6000806156558561564d8887615c9d565b8a9190613631565b9050615662888486613631565b61566c90826164ab565b905086811115615683576156808782616498565b91505b509695505050505050565b600080600080600080888810156156eb5786156156b3576156b08d898b613631565b9c505b6156be8c898b613631565b9b506156ca8b8d6165f4565b90506156d78b898b613631565b9a506156e48a898b613631565b99506156f8565b6156f58b8d6165f4565b90505b9b9c9a9b999a975050505050505050565b600060016001607f1b0319821280159061572a575060016001607f1b038213155b6130b35760405163a5353be560e01b815260040160405180910390fd5b60008183136157565781612bed565b5090919050565b60008183136147725782612bed565b60006151c787878761578688670de0b6b3a7640000616498565b8787615892565b60008183116157565781612bed565b60006157aa613530836148b1565b6000808052600260205260008051602061669883398151915254919250906157d39085906164ab565b90506112a885838387615358565b60008260001904841183021582026157f857600080fd5b50910281810615159190040190565b6000808061581585856150c3565b9050600061582682868c8a8d615cb2565b9050600061585a61583f670de0b6b3a76400008a6150c3565b61585061323a8b6130fe8b8f612bd8565b6130fe9085616498565b9050615866898c616498565b6158708b83616498565b945094505050505b965096945050505050565b60008183116147725782612bed565b6000806158a3888888888888615cd9565b90925090508061568357604051637ac17d2560e01b815260040160405180910390fd5b600080806158d485856150c3565b905060006158e582868b8a8c615cb2565b9050600061591a6158fe670de0b6b3a76400008a6150c3565b6130fe615913670de0b6b3a7640000876164ab565b85906150c3565b9050600061592882886150c3565b90506159348b82616498565b61593e838c616498565b95509550505050509550959350505050565b60008061595d84846150c3565b9050600061596e82858b898c615cb2565b905061597e866130fe898b616498565b975060006159a5615997670de0b6b3a7640000896152ec565b6130fe856148ab8d87616498565b90506159b181866150c3565b90506159bd8a82616498565b9a9950505050505050505050565b600080806159e46155e588670de0b6b3a7640000616498565b9050861561562f576159f68888612bd8565b91506156208a8a84615a108a670de0b6b3a7640000616498565b8989615892565b600080615a2484846150c3565b90506000615a3582858b898c615cb2565b9050615a4f866130fe615a488a8d6164ab565b8790612bd8565b9850615a5b828a612bd8565b98506000615a7e615a74670de0b6b3a7640000896152ec565b6130fe8c85616498565b90506159bd818a616498565b6000808213615aac57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000612bed8383670de0b6b3a76400006157e1565b6000615cbe8284615301565b615ccf61391b856130fe8989612bd8565b614c7f91906164ab565b60008080615ce785856150c3565b90506000615cf882868c8a8d615cb2565b9050615d08876130fe8a8c6164ab565b985088811015615d2057600080935093505050615878565b6000615d45615d37670de0b6b3a76400008a6152ec565b6130fe856148ab8e87616498565b9050615d5181876150c3565b9050808b1115615d6857615d65818c616498565b94505b60019350505050965096945050505050565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015615db95780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715615dfb57615dfb615dc1565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715615e2a57615e2a615dc1565b604052919050565b60006020808385031215615e4557600080fd5b825167ffffffffffffffff80821115615e5d57600080fd5b818501915085601f830112615e7157600080fd5b815181811115615e8357615e83615dc1565b615e95601f8201601f19168501615e01565b91508082528684828501011115615eab57600080fd5b60005b81811015615ec9578381018501518382018601528401615eae565b50600090820190930192909252509392505050565b80151581146112b857600080fd5b8035615ef781615ede565b919050565b600060208284031215615f0e57600080fd5b8135612bed81615ede565b80356001600160a01b0381168114615ef757600080fd5b600080600080600060a08688031215615f4857600080fd5b853594506020860135935060408601359250615f6660608701615f19565b91506080860135615f7681615ede565b809150509295509295909350565b60008083601f840112615f9657600080fd5b50813567ffffffffffffffff811115615fae57600080fd5b6020830191508360208260051b850101111561283e57600080fd5b60008060008060008060808789031215615fe257600080fd5b615feb87615f19565b9550615ff960208801615f19565b9450604087013567ffffffffffffffff8082111561601657600080fd5b6160228a838b01615f84565b9096509450606089013591508082111561603b57600080fd5b5061604889828a01615f84565b979a9699509497509295939492505050565b6000806000806080858703121561607057600080fd5b8435935061608060208601615f19565b925061608e60408601615f19565b9396929550929360600135925050565b600080600080608085870312156160b457600080fd5b84359350602085013592506160cb60408601615f19565b915060608501356160db81615ede565b939692955090935050565b6000602082840312156160f857600080fd5b5035919050565b6000806000806080858703121561611557600080fd5b8435935061612560208601615f19565b92506040850135915061613a60608601615f19565b905092959194509250565b6000806040838503121561615857600080fd5b50508035926020909101359150565b80356001600160801b0381168114615ef757600080fd5b6000806040838503121561619157600080fd5b61619a83616167565b91506161a860208401616167565b90509250929050565b600080604083850312156161c457600080fd5b6161cd83615f19565b915060208301356161dd81615ede565b809150509250929050565b8035600f81900b8114615ef757600080fd5b6000610140828403121561620d57600080fd5b616215615dd7565b61621e83616167565b815261622c60208401616167565b602082015261623d604084016161e8565b604082015261624e60608401616167565b606082015261625f60808401616167565b608082015261627060a08401616167565b60a082015261628160c08401616167565b60c082015261629260e08401616167565b60e08201526101006162a5818501615eec565b908201526101206162b7848201615eec565b908201529392505050565b600080600080600080600060e0888a0312156162dd57600080fd5b6162e688615f19565b96506162f460208901615f19565b9550604088013561630481615ede565b945060608801359350608088013560ff8116811461632157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000806080858703121561635457600080fd5b5050823594602084013594506040840135936060013592509050565b60008060006060848603121561638557600080fd5b8335925061639560208501615f19565b9150604084013590509250925092565b6000602082840312156163b757600080fd5b612bed82615f19565b6000602082840312156163d257600080fd5b612bed82616167565b600080600080600060a086880312156163f357600080fd5b8535945061640360208701615f19565b935061641160408701615f19565b92506060860135915061642660808701615f19565b90509295509295909350565b60008060006060848603121561644757600080fd5b505081359360208301359350604090920135919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561147157611471616482565b8082018082111561147157611471616482565b634e487b7160e01b600052603260045260246000fd5b808202811582820484141761147157611471616482565b6001600160801b0382811682821603908082111561650b5761650b616482565b5092915050565b60006020828403121561652457600080fd5b5051919050565b6000600160ff1b820161654057616540616482565b5060000390565b60006001820161655957616559616482565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261658557616585616560565b500690565b60006020828403121561659c57600080fd5b8151612bed81615ede565b6001600160801b0381811683821601908082111561650b5761650b616482565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561147157611471616482565b818103600083128015838313168383128216171561650b5761650b616482565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561147157611471616482565b808201828112600083128015821682158216171561666157616661616482565b505092915050565b60008261667857616678616560565b600160ff1b82146000198414161561669257616692616482565b50059056feac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba26469706673582212205c6935797a2bd1e3d6a854cb0b8641b88a38d76ff0333efa7578030e63b949dd64736f6c63430008130033",
    "sourceMap": "2888:8858:133:-:0;;;454:1:97;429:26;;3006:157:133;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;764:28:0;;;;;;;3145:1:133;1944:20:41;;;;1974:34;;;;2254:10:39::2;::::0;;;;::::2;::::0;;::::2;::::0;;-1:-1:-1;;;2254:10:39::2;::::0;;::::2;::::0;2077:264;;2105:121:::2;2077:264:::0;;::::2;2715:25:165::0;2244:21:39;2756:18:165;;;2749:34;2283:13:39::2;-1:-1:-1::0;2799:18:165;;2792:34;2322:4:39::2;2842:18:165::0;;;2835:60;2077:264:39;;;;;;;;;;2687:19:165;;;2077:264:39;;2054:297;;;;;::::2;::::0;;;;2035:316:::2;::::0;4466:17:7;;4453:30;;;;;5012:28;;;3113:7:133;;764:28:0;;3145:1:133;;3113:7;;764:28:0;;3145:1:133;;;;3113:7;;5043:3:7;-1:-1:-1;5008:113:7;;;5069:41;;-1:-1:-1;;;5069:41:7;;;;;;;;;;;5008:113;5154:28;;;;5130:52;;5221:32;;;;5193:60;;5418:26;;;;5448:1;5418:31;5414:108;;5472:39;;-1:-1:-1;;;5472:39:7;;;;;;;;;;;5414:108;5553:26;;;;;5531:48;;5633:26;5606:24;;;;:53;;:127;;;5702:7;:26;;;5675:7;:24;;;:53;;;;:::i;:::-;:58;;5606:127;5589:224;;;5765:37;;-1:-1:-1;;;5765:37:7;;;;;;;;;;;5589:224;5842:24;;;;5822:44;;5891:19;;;;5876:34;;5941:25;;;;5920:46;;5990:18;;;;5976:11;:32;;-1:-1:-1;;;;;;5976:32:7;-1:-1:-1;;;;;5976:32:7;;;;;;;6034:20;;;6018:36;;;6082:12;;;;:18;6103:4;-1:-1:-1;;6082:65:7;;;6143:4;6123:7;:12;;;:17;;;:24;6082:65;:111;;;;6189:4;6163:7;:12;;;:23;;;:30;6082:111;6065:202;;;6225:31;;-1:-1:-1;;;6225:31:7;;;;;;;;;;;6065:202;6288:12;;;;;:18;6276:30;;6327:12;;:17;;;6316:28;;6371:12;:23;;;6354:40;;6452:17;;;6439:30;;6288:18;3062:182:2::2;3086:7;:18;;;3082:1;:22;3062:182;;;3135:38;::::0;;;;::::2;::::0;;;::::2;3153:15;3135:38:::0;::::2;::::0;;-1:-1:-1;3135:38:2::2;::::0;::::2;::::0;;;3122:7:::2;:52:::0;;::::2;::::0;;::::2;::::0;;;;;;;;;;-1:-1:-1;;;;;3122:52:2::2;::::0;::::2;::::0;::::2;::::0;;;::::2;::::0;;;::::2;::::0;3216:3:::2;3062:182;;;;2751:499:::0;;;;1521:235:1;;;;3006:157:133;;2888:8858;;14:347:165;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:165;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:165;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:622::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:165;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;;556:622;;;;:::o;1183:1296::-;1290:6;1298;1342:9;1333:7;1329:23;1372:3;1368:2;1364:12;1361:32;;;1389:1;1386;1379:12;1361:32;1412:6;1438:2;1434;1430:11;1427:31;;;1454:1;1451;1444:12;1427:31;1480:17;;:::i;:::-;1467:30;;1520:48;1558:9;1520:48;:::i;:::-;1513:5;1506:63;1622:2;1611:9;1607:18;1601:25;1596:2;1589:5;1585:14;1578:49;1680:2;1669:9;1665:18;1659:25;1654:2;1647:5;1643:14;1636:49;1738:2;1727:9;1723:18;1717:25;1712:2;1705:5;1701:14;1694:49;1797:3;1786:9;1782:19;1776:26;1770:3;1763:5;1759:15;1752:51;1857:3;1846:9;1842:19;1836:26;1830:3;1823:5;1819:15;1812:51;1917:3;1906:9;1902:19;1896:26;1890:3;1883:5;1879:15;1872:51;1956:58;2009:3;1998:9;1994:19;1956:58;:::i;:::-;1950:3;1943:5;1939:15;1932:83;2034:3;2069:57;2122:2;2111:9;2107:18;2069:57;:::i;:::-;2053:14;;;2046:81;2146:3;2181:62;2235:7;2215:18;;;2181:62;:::i;:::-;2176:2;2169:5;2165:14;2158:86;;2301:6;2290:9;2286:22;2280:29;2271:6;2264:5;2260:18;2253:57;2367:3;2356:9;2352:19;2346:26;2337:6;2330:5;2326:18;2319:54;2392:5;2382:15;;2416:57;2469:2;2458:9;2454:18;2416:57;:::i;:::-;2406:67;;;;1183:1296;;;;;:::o;2906:209::-;2938:1;2964;2954:132;;3008:10;3003:3;2999:20;2996:1;2989:31;3043:4;3040:1;3033:15;3071:4;3068:1;3061:15;2954:132;-1:-1:-1;3100:9:165;;2906:209::o;:::-;2888:8858:133;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x60806040526004361061023b5760003560e01c80639032c7261161012e578063b1b4b170116100ab578063d5002f2e1161006f578063d5002f2e146108be578063e44808bc146108d3578063ed64bab2146108f3578063f6e5544914610913578063fa3fcea7146109335761023b565b8063b1b4b17014610811578063b4f8da3914610831578063c23632a71461086b578063c326a9031461088b578063ca6d38f71461089e5761023b565b8063a179403b116100f2578063a179403b14610763578063a22cb46514610776578063a30b7e3d14610796578063a77384c1146107d1578063ab033ea9146107f15761023b565b80639032c726146106ae578063907c0f92146106ce57806395530b75146106e35780639bd33498146107235780639cd241af146107435761023b565b80634ed2d6ac116101bc578063702db0eb11610180578063702db0eb146105635780637180c8ca146105975780638120a3e2146105b757806388348397146105d75780638fca1f7b146106855761023b565b80634ed2d6ac146104c35780635a1a3e7c146104e3578063680962391461050357806368c2ecb8146105235780636f8c3a5b146105435761023b565b80632787d595116102035780632787d595146103fb57806330adf81f1461041b5780633644e5151461044f5780634536ee2f146104835780634daa8b8f146104a35761023b565b806302329a291461034b57806306dae82a1461036d57806317fad7fc1461039a5780631c0f12b6146103ba5780632002b333146103da575b34801561024757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161028a929190615d7a565b600060405180830381855af49150503d80600081146102c5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ca565b606091505b509150915081156102ee57604051638bb0a34b60e01b815260040160405180910390fd5b60006102f982615d8a565b90506001600160e01b03198116636e64089360e11b1461031b57815160208301fd5b81516003198101600484019081529261033c91810160200190602401615e32565b80519650602001945050505050f35b34801561035757600080fd5b5061036b610366366004615efc565b610953565b005b61038061037b366004615f30565b61099c565b604080519283526020830191909152015b60405180910390f35b3480156103a657600080fd5b5061036b6103b5366004615fc9565b610c21565b3480156103c657600080fd5b5061036b6103d536600461605a565b610cd5565b6103ed6103e836600461609e565b610ce8565b604051908152602001610391565b34801561040757600080fd5b506103ed610416366004615efc565b610f3d565b34801561042757600080fd5b506103ed7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561045b57600080fd5b506103ed7f000000000000000000000000000000000000000000000000000000000000000081565b34801561048f57600080fd5b5061038061049e36600461609e565b611021565b3480156104af57600080fd5b506103806104be3660046160e6565b6111f1565b3480156104cf57600080fd5b5061036b6104de3660046160ff565b611261565b3480156104ef57600080fd5b5061036b6104fe3660046160e6565b6112af565b34801561050f57600080fd5b5061036b61051e366004616145565b6112bb565b34801561052f57600080fd5b506103ed61053e3660046160e6565b611466565b34801561054f57600080fd5b506103ed61055e366004615f30565b611477565b34801561056f57600080fd5b5061036b61057e36600461617e565b6001600160801b03908116600160801b02911617600855565b3480156105a357600080fd5b5061036b6105b23660046161b1565b6116e5565b3480156105c357600080fd5b5061036b6105d23660046160e6565b61175d565b3480156105e357600080fd5b5061036b6105f23660046161fa565b805160208201516001600160801b03918216600160801b91831682021760085560408301516060840151908316908316820217600955608083015160a0840151908316908316820217600a5560c083015160e084015190831692160217600b5561010080820151600c80546101209094015161ffff1990941691151561ff00191691909117921515909102919091179055565b34801561069157600080fd5b506013546001600160801b0380821691600160801b900416610380565b3480156106ba57600080fd5b5061036b6106c93660046162c2565b611766565b3480156106da57600080fd5b506103ed6119b5565b3480156106ef57600080fd5b506107036106fe36600461633e565b6119c4565b604080519485526020850193909352918301526060820152608001610391565b34801561072f57600080fd5b5061070361073e366004616145565b6119e8565b34801561074f57600080fd5b5061036b61075e366004616370565b611a08565b610380610771366004615f30565b611a14565b34801561078257600080fd5b5061036b6107913660046161b1565b611c0d565b3480156107a257600080fd5b506107b66107b136600461633e565b611c79565b60408051938452602084019290925290820152606001610391565b3480156107dd57600080fd5b5061036b6107ec3660046160e6565b601455565b3480156107fd57600080fd5b5061036b61080c3660046163a5565b611c9a565b34801561081d57600080fd5b506103ed61082c3660046160e6565b611d0e565b34801561083d57600080fd5b5061036b61084c3660046163c0565b600980546001600160801b03928316600160801b029216919091179055565b34801561087757600080fd5b5061038061088636600461609e565b611d19565b6103ed610899366004615f30565b611ed0565b3480156108aa57600080fd5b506103ed6108b93660046160e6565b612192565b3480156108ca57600080fd5b506014546103ed565b3480156108df57600080fd5b5061036b6108ee3660046163db565b61219d565b3480156108ff57600080fd5b5061036b61090e3660046160e6565b6121ed565b34801561091f57600080fd5b5061038061092e366004616432565b6122f7565b34801561093f57600080fd5b506103ed61094e366004615f30565b612313565b336000908152600f602052604090205460ff16610982576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b6000806000546001146109ca5760405162461bcd60e51b81526004016109c19061645e565b60405180910390fd5b6002600055600c54610100900460ff16156109f8576040516313d0ff5960e31b815260040160405180910390fd5b610a0061251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015610a415760405163211ddda360e11b815260040160405180910390fd5b600080610a4e898661258b565b9150915086811015610a73576040516342af972b60e01b815260040160405180910390fd5b6000610a7d612845565b9050610a89818361287b565b506000806000610a998686612a86565b600854919a50929550909350909150610ac3908390600160801b90046001600160801b0316616498565b610b0084610acf612bb7565b610ad991906164ab565b7f000000000000000000000000000000000000000000000000000000000000000090612bd8565b1115610b1f5760405163512095c760e01b815260040160405180910390fd5b868c1115610b405760405163c972651760e01b815260040160405180910390fd5b8060106000828254610b5291906164ab565b90915550610b8290507f0000000000000000000000000000000000000000000000000000000000000000856164ab565b9750610b9283888488888d612bf4565b6000610b9f60018a612dee565b9050610bac818c8a612e23565b60008e9050818c6001600160a01b03167f7b7d51ee23746cf6ef2078de2a5b53073226b516a1c892a1e882c581026bf4b38c848d604051610c00939291909283526020830191909152604082015260600190565b60405180910390a35050505050505050600160005590969095509350505050565b6001600160a01b0386161580610c3e57506001600160a01b038516155b15610c5c5760405163f0dd15fd60e01b815260040160405180910390fd5b828114610c7c5760405163174861a760e31b815260040160405180910390fd5b60005b83811015610ccc57610cc4858583818110610c9c57610c9c6164be565b905060200201358888868686818110610cb757610cb76164be565b9050602002013533612ecc565b600101610c7f565b50505050505050565b610ce28484848433612ecc565b50505050565b60008054600114610d0b5760405162461bcd60e51b81526004016109c19061645e565b6002600055610d1861251e565b600c5460ff1615610d3c57604051637983c05160e01b815260040160405180910390fd5b600080610d49878561258b565b9092509050610d797f000000000000000000000000000000000000000000000000000000000000000060026164d4565b821015610d9957604051632afb507160e21b815260040160405180910390fd5b610dc47f000000000000000000000000000000000000000000000000000000000000000060026164d4565b610dce9083616498565b9250610de1610ddb612845565b8261287b565b50600c805460ff19166001179055610df88261308d565b600880546001600160801b0319166001600160801b0392909216919091179055610e8d610e88837f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006130b7565b61308d565b600880546001600160801b03928316600160801b029216919091179055610ed66000807f0000000000000000000000000000000000000000000000000000000000000000612e23565b610ee260008685612e23565b60408051848152602081018990529081018790526001600160a01b038616907f60c26087830ee0ee6d86bdb3a10e19f3fd49af366c77421d7fe4596811d6274e9060600160405180910390a250506001600055949350505050565b60008054600114610f605760405162461bcd60e51b81526004016109c19061645e565b60026000908155338152600f602052604090205460ff16158015610fad5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610fc457506011546001600160a01b03163314155b15610fe1576040516282b42960e81b815260040160405180910390fd5b601080546000909155611015817f000000000000000000000000000000000000000000000000000000000000000085613121565b60016000559392505050565b6000806000546001146110465760405162461bcd60e51b81526004016109c19061645e565b600260009081556110556133b8565b9050611062610ddb612845565b5061106c816134b7565b600d548792506001600160801b03168083111561109057806001600160801b031692505b826000036110a6576000809350935050506111e1565b6110b5600360f81b3385613591565b600d546001600160801b03600160801b9091048116906000906110dd90869084908616613631565b90506110e88561308d565b6110f290846164eb565b600d80546001600160801b0319166001600160801b039290921691909117905561111b8161308d565b600d805460109061113d908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116c818989613121565b9550856111798a87612bd8565b11156111985760405163c972651760e01b815260040160405180910390fd5b60408051868152602081018890526001600160a01b038a16917f07cd0949bbc0d60ad35053a0459db413c148f758b7781aaf6b258018d18ad0ac910160405180910390a2505050505b6001600055909590945092505050565b60008060128381548110611207576112076164be565b9060005260206000200160000160049054906101000a90046001600160e01b03166001600160e01b031660128481548110611244576112446164be565b600091825260209091200154909463ffffffff9091169350915050565b8361126b8161364f565b6001600160a01b0316336001600160a01b03161461129c57604051632aab8bd360e01b815260040160405180910390fd5b6112a88585858561370c565b5050505050565b6112b881613779565b50565b6040516370a0823160e01b8152306004820152600090611351906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611326573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134a9190616512565b83856138d3565b91505060008113156113d9576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b1580156113c557600080fd5b505af1158015610ccc573d6000803e3d6000fd5b6000811215611461576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac3061141b8461652b565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b1580156113c557600080fd5b505050565b60006114718261396d565b92915050565b6000805460011461149a5760405162461bcd60e51b81526004016109c19061645e565b60026000557f00000000000000000000000000000000000000000000000000000000000000008510156114e05760405163211ddda360e11b815260040160405180910390fd5b60006114ea6133b8565b90506114f6878261287b565b5061150c611505600289612dee565b3388613591565b6000806000806000806115208c888f6139be565b600854959b5093995091975095509350915061154d908790600160801b90046001600160801b0316616498565b61155984610acf612bb7565b11156115785760405163512095c760e01b815260040160405180910390fd5b8b8d884282111561163a57836010600082825461159591906164ab565b909155506115a89050838a898886613b92565b60006115d47f000000000000000000000000000000000000000000000000000000000000000084616498565b6000818152600e6020526040812054919250600160801b909104600f0b906116079086908a908e908d9089908990613d0c565b6000828152600e602052604090205461162e90600f83810b91600160801b9004900b613eb4565b6116378c6134b7565b50505b6000611647898f8f613121565b90508e81101561166a5760405163c972651760e01b815260040160405180910390fd5b611675600284612dee565b8e6001600160a01b03167f39d1403e56c69205ef368007a55ee1304b0f388631dca237a1710d04e3e8950f8584886040516116c3939291909283526020830191909152604082015260600190565b60405180910390a39a5050505050505050505050600160005595945050505050565b6011546001600160a01b0316331461170f576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6112b881613fdb565b834211156117875760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166117ae5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156118da573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461191857604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600760205260408120805490919061193e90616547565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b60006119bf612845565b905090565b6000806000806119d68888888861415d565b929b919a509850909650945050505050565b6000806000806119f88686612a86565b9299919850965090945092505050565b6114618383833361370c565b600080600054600114611a395760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611a67576040516313d0ff5960e31b815260040160405180910390fd5b611a6f61251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015611ab05760405163211ddda360e11b815260040160405180910390fd5b6000611aba6133b8565b905085811015611add576040516342af972b60e01b815260040160405180910390fd5b6000611ae7612845565b90506000611af5828461287b565b9050611b217f0000000000000000000000000000000000000000000000000000000000000000836164ab565b9450600080611b318c868561425c565b6010805493995091945092508291600090611b4d9084906164ab565b909155505050848a1015611b745760405163c972651760e01b815260040160405180910390fd5b611b7e858861258b565b5050611b8c8b828689614390565b6000611b99600288612dee565b9050611ba6818a8e612e23565b60408051888152602081018890529081018d90528c9082906001600160a01b038c16907f851bac68873b7adb346bcf4bff36324c6f322b58f9f0f50c1d3a8568242ca66b9060600160405180910390a3505050505050600160005590969095509350505050565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6000806000611c8a878787876145ce565b9199909850909650945050505050565b6011546001600160a01b03163314611cc4576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611471826146cf565b600080600054600114611d3e5760405162461bcd60e51b81526004016109c19061645e565b60026000557f0000000000000000000000000000000000000000000000000000000000000000861015611d845760405163211ddda360e11b815260040160405180910390fd5b6000611d8e6133b8565b9050611d9b610ddb612845565b50611da5816134b7565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091611e00916001600160801b0390911690616498565b90506000611e0e82846164ab565b9050611e1c6000338c613591565b6000611e2b8b86848787614778565b96509050611e3e600360f81b8a88612e23565b611e49818a8a613121565b9650868a1115611e6c5760405163c972651760e01b815260040160405180910390fd5b604080518c8152602081018990529081018790528b906001600160a01b038b16907f59c3a0b60c6ab7deb62e1440c9e72441db6db7dfe514dba8cb18e60c0d896efa9060600160405180910390a25050505050506001600055909590945092505050565b60008054600114611ef35760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611f21576040516313d0ff5960e31b815260040160405180910390fd5b611f2961251e565b7f0000000000000000000000000000000000000000000000000000000000000000861015611f6a5760405163211ddda360e11b815260040160405180910390fd5b6000611ff2611f77612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000614876565b90508581108061200157508481115b1561201f57604051633b61151160e11b815260040160405180910390fd5b60008061202c898661258b565b9150915061203b610ddb612845565b50600d54600360f81b600090815260026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091612087916001600160801b0390911690616498565b6000808052600260205260008051602061669883398151915254919250906120b09083906164ab565b90506000806120be856148b1565b905060006120cb82614a17565b90506120d687613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015261210882614a17565b925061212084826121198187616498565b9190613631565b9850505061213060008a89612e23565b612139846134b7565b60408051888152602081018e90526001600160a01b038b16917f06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca910160405180910390a250506001600055509298975050505050505050565b600061147182614c89565b846121a78161364f565b6001600160a01b0316336001600160a01b0316146121d857604051632aab8bd360e01b815260040160405180910390fd5b6121e58686868686612ecc565b505050505050565b6000818152600e60205260409020546001600160801b03161561220d5750565b6000612217612845565b90506122437f000000000000000000000000000000000000000000000000000000000000000083616576565b15158061224f57508181105b1561226d5760405163ecd29e8160e01b815260040160405180910390fd5b80820361228557611461816122806133b8565b61287b565b815b6000818152600e60205260409020546001600160801b03168282036122b1576122ae6133b8565b90505b80156122c1576112a8848261287b565b506122ec7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b9050612287565b5050565b600080612305858585614cff565b90925090505b935093915050565b600080546001146123365760405162461bcd60e51b81526004016109c19061645e565b60026000557f000000000000000000000000000000000000000000000000000000000000000085101561237c5760405163211ddda360e11b815260040160405180910390fd5b60006123866133b8565b9050612392878261287b565b506123a1611505600189612dee565b6000806000806000806123b58c888f614d7f565b95509550955095509550955060008d90508d42101561247e5781601060008282546123e091906164ab565b909155506123f390508d88878685614ef6565b600061241f7f000000000000000000000000000000000000000000000000000000000000000083616498565b6000818152600e6020526040902054909150600160801b9004600f0b61244b8f878b8a878f6001613d0c565b6000828152600e602052604090205461247290600f83810b91600160801b9004900b613eb4565b61247b8a6134b7565b50505b600061248b878d8d613121565b9050808d11156124ae5760405163c972651760e01b815260040160405180910390fd5b8d6124ba600184612dee565b60408051858152602081018590529081018390526001600160a01b038f16907fe8c2c201cc00307ad7ec0d92d7ee5f89a796b4b1134d1672b08939eaf504d68c9060600160405180910390a35060016000559e9d5050505050505050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061256b5750600034115b1561258957604051631574f9f360e01b815260040160405180910390fd5b565b60008080600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161265957479150853410156125fa576040516312171d8360e31b815260040160405180910390fd5b85341115612654573361260d8734616498565b604051600081818185875af1925050503d8060008114612649576040519150601f19603f3d011682016040523d82523d6000602084013e61264e565b606091505b50909150505b61277e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156126bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126e19190616512565b6040516323b872dd60e01b8152336004820152306024820152604481018890529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612757573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061277b919061658a565b90505b8061279c576040516312171d8360e31b815260040160405180910390fd5b601454600003612802576127d0867f00000000000000000000000000000000000000000000000000000000000000006150c3565b601481905593507f0000000000000000000000000000000000000000000000000000000000000000925061283e915050565b601454600090612813908885613631565b9050806014600082825461282791906164ab565b909155508190506128366133b8565b945094505050505b9250929050565b60006128717f000000000000000000000000000000000000000000000000000000000000000042616576565b6119bf9042616498565b6000828152600e6020526040812080546001600160801b03161515806128a057504284115b156128b657546001600160801b03169050611471565b6128bf8361308d565b81546001600160801b0319166001600160801b03919091161781556000600e816129097f000000000000000000000000000000000000000000000000000000000000000088616498565b815260208101919091526040016000908120546001600160801b031691506002816129348289612dee565b81526020019081526020016000205490506000808211156129905760008061295f84898760006150d8565b91509150806010600082825461297591906164ab565b90915550612989905084600084808d613b92565b6001925050505b6000600260006129a160018b612dee565b815260200190815260200160002054905060008111156129fc576000806129cb838a8860016150d8565b9150915080601060008282546129e191906164ab565b909155506129f5905083600084808e614ef6565b6001935050505b8115612a7a576000612a2e7f00000000000000000000000000000000000000000000000000000000000000008a616498565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b92612a6e928492919004900b613eb4565b612a77896134b7565b50505b50949695505050505050565b600080600080612af3612a97612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006151a6565b92506000612b5c612b02612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006151d2565b9050612b6781613779565b600080612b7589848a614cff565b9092509050612b848287616498565b9450612b9081866164ab565b9550612b9d81848a613631565b9350612ba9848a616498565b965050505092959194509250565b6008546009546000916119bf916001600160801b0390911690600f0b6151e3565b6000612bed8383670de0b6b3a7640000613631565b9392505050565b600a546001600160801b0316612c2f610e8882612c1985670de0b6b3a76400006164d4565b600b546001600160801b031691908a6001615200565b600b80546001600160801b0319166001600160801b0392909216919091179055612c588761308d565b60088054600090612c739084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612ca08561308d565b60088054601090612cc2908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612cef8661308d565b612cf990826165a7565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b90612d55612d408b89612bd8565b612d4b8b60026164d4565b610e889190616498565b835490915081908490601090612d76908490600160801b9004600f0b6165c7565b82546001600160801b039182166101009390930a9283029190920219909116179055508254612db390600f84810b91600160801b9004900b613eb4565b612dbc8761527a565b612dd9576040516318846de960e01b815260040160405180910390fd5b612de2876134b7565b50505050505050505050565b60006001600160f81b03821115612e185760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612e559084906164ab565b909155505060008381526002602052604081208054839290612e789084906164ab565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6001600160a01b0384161580612ee957506001600160a01b038316155b15612f075760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614612fcb576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff16612fcb5760008581526004602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114612fc95760008681526004602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290612fc3908490616498565b90915550505b505b60008581526001602090815260408083206001600160a01b038816845290915281208054849290612ffd908490616498565b909155505060008581526001602090815260408083206001600160a01b0387168452909152812080548492906130349084906164ab565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000600160801b82106130b357604051630f0af95160e11b815260040160405180910390fd5b5090565b6000806130c8846301e133806150c3565b90506131146131046130e2670de0b6b3a7640000866152ec565b6130ec8885612bd8565b6130fe90670de0b6b3a76400006164ab565b90615301565b61310e888a612bd8565b90612bd8565b9150505b95945050505050565b600060145484116131325783613136565b6014545b9350600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613186575047613211565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156131ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061320e9190616512565b90505b601454600003613222576000613241565b61324161323a601454836150c390919063ffffffff16565b8690612bd8565b915084601460008282546132559190616498565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016132fb576040516001600160a01b038616908490600081818185875af1925050503d80600081146132eb576040519150601f19603f3d011682016040523d82523d6000602084013e6132f0565b606091505b505080915050613391565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018590527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561336a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061338e919061658a565b90505b806133af576040516312171d8360e31b815260040160405180910390fd5b50509392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613407575047613492565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561346b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061348f9190616512565b90505b6014546000036134a35760006134b1565b6014546134b19082906150c3565b91505090565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091613512916001600160801b0390911690616498565b9050600061352082846164ab565b90506000613535613530866148b1565b614a17565b90506000613544858385613631565b9050600080613552886146cf565b905082811115613569576135668382616498565b91505b6000821180613576575083155b156135875761358782858789615358565b5050505050505050565b60008381526001602090815260408083206001600160a01b0386168452909152812080548392906135c3908490616498565b9091555050600083815260026020526040812080548392906135e6908490616498565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612ebf565b600082600019048411830215820261364857600080fd5b5091020490565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6013546001600160801b03600160801b820481169116426137ba7f0000000000000000000000000000000000000000000000000000000000000000846164ab565b11156137c557505050565b6000601282815481106137da576137da6164be565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b03169061380e8342616498565b6012549091508782028301906000906138288860016164ab565b6138329190616576565b905060405180604001604052804263ffffffff168152602001836001600160e01b03168152506012828154811061386b5761386b6164be565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b600080806138e5846301e133806150c3565b9050600061390482600088126138fb578761310e565b61310e8861652b565b905060008613156139375761392261391b82615441565b8890612bd8565b935061392e8785616498565b9250505061230b565b600086121561395f5761395361394c82615441565b88906150c3565b935061392e87856165f4565b509495600095509350505050565b600080613978612845565b9050808311613988576000613992565b6139928184616498565b9150612bed827f00000000000000000000000000000000000000000000000000000000000000006150c3565b60008060008060008060006139d28861396d565b9050613a3c6139df612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006155cc565b909850955093506000613a50612b02612bb7565b9050613a5b81613779565b8a8a6000808080613a6e8689898861415d565b93509350935093508082613a8291906164ab565b9850613a8e8285616498565b613a98908c6164ab565b9a50613aa483856164ab565b613aae908d6164ab565b9b5050505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a613aea9190616498565b815260208101919091526040016000908120546001600160801b03169150428911613b2c576000898152600e60205260409020546001600160801b0316613b2e565b895b9050613b5e8b8784848e7f000000000000000000000000000000000000000000000000000000000000000061563c565b9650613b6a8387616498565b9550613b7c878787868686600061568e565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b0316613bdb610e8882613bbe85670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b031691908a6000615200565b600b80546001600160801b03928316600160801b029216919091179055613c018661308d565b613c0b90826164eb565b600a80546001600160801b03928316600160801b02921691909117905550613c328361308d565b60088054600090613c4d9084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550613c7a82615709565b60098054600090613c8f908490600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613cbf8461308d565b60088054601090613ce1908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b6000613d387f000000000000000000000000000000000000000000000000000000000000000085616498565b9050600060026000613d4b600188612dee565b8152602001908152602001600020549050600060026000613d6d600289612dee565b8152602001908152602001600020549050816000148015613d8c575080155b15613db1576000838152600e6020526040902080546001600160801b03169055612de2565b6000613df58b613dc18c89612bd8565b613dcc9060026164d4565b8b613dd78c8b612bd8565b613de191906164ab565b613deb9190616498565b610e8891906164ab565b90508415613e54576000848152600e602052604090208054829190601090613e28908490600160801b9004600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613ea7565b6000848152600e602052604090208054829190601090613e7f908490600160801b9004600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b5050505050505050505050565b8082138015613ec4575060008212155b15613f57576000613ed58282615747565b613edf90846165f4565b600954909150613f0c90613f07908390600160801b90046001600160801b0316600f0b61575d565b615709565b60098054601090613f2e908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b818113156122f35760008212613fcd57613f7082615709565b613f7982615709565b613f839190616614565b60098054601090613fa5908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b613f83613f07826000615747565b80600003613fe65750565b6008546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156140335760405163585fe6df60e11b815260040160405180910390fd5b600061403f8383616641565b90507f00000000000000000000000000000000000000000000000000000000000000008112156140825760405163585fe6df60e11b815260040160405180910390fd5b61408b8161308d565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b8181126140cd576140c6838286613631565b91506140ed565b6140e16140d98261652b565b849086613631565b6140ea9061652b565b91505b6140f682615709565b600980546001600160801b0319166001600160801b0392831617905560085461413991610e8891600160801b90041661412f87856151e3565b61211987876151e3565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600080808061417486670de0b6b3a7640000616498565b93506141a987866121198b61310e897f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506141d5847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915060006141f66141ee89670de0b6b3a7640000616498565b8a9088613631565b9050614222817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b935061424e847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915050945094509450949050565b60008060006142c861426c612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061576c565b9150856142d58387612bd8565b11156142f45760405163512095c760e01b815260040160405180910390fd5b6000614301612b02612bb7565b905061430c81613779565b600061432288670de0b6b3a7640000848a6145ce565b945090915061433390508382616498565b61433d9085616498565b93506143838761310e8a6143518789616498565b8a61435c8d8261578d565b8d7f000000000000000000000000000000000000000000000000000000000000000061563c565b9450505093509350939050565b600a546143da90610e8890600160801b90046001600160801b03166143bd84670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b03169190886001615200565b600b80546001600160801b03928316600160801b02921691909117905560006144028461308d565b60085461441891906001600160801b03166164eb565b600880546001600160801b0319166001600160801b038316179055905061443e8561308d565b60088054601090614460908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061448d8561308d565b600a80546010906144af908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b9116121590506144fe5760405163585fe6df60e11b815260040160405180910390fd5b6000614508612845565b6000818152600e6020526040902054909150600160801b9004600f0b61452d8761308d565b6000838152600e602052604090208054601090614555908490600160801b9004600f0b616614565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e602052604090205461459f90600f83810b91600160801b9004900b613eb4565b6145a88561527a565b6145c5576040516318846de960e01b815260040160405180910390fd5b610ccc856134b7565b60008080806145e586670de0b6b3a7640000616498565b905061461a87866121198b61310e867f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9350614646847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9150600061465f6141ee89670de0b6b3a7640000616498565b905061468b817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506146b7847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b6146c190846164ab565b925050509450945094915050565b60095460009081906146f190600160801b90046001600160801b0316846150c3565b905061471d7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b6008546001600160801b03161115614772576008547f0000000000000000000000000000000000000000000000000000000000000000906147689083906001600160801b0316616498565b612bed9190616498565b50919050565b6000806000614786876148b1565b9050600061479382614a17565b90506147a56147a06133b8565b6146cf565b93506147b2848a88613631565b93506147c56147c08561652b565b613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015260006147f983614a17565b90506000614808898385613631565b90506148148b8a6165f4565b61481e90826165f4565b9050600081121561486757600061483f6148378361652b565b85908c613631565b905061484b8188616498565b965061485681613fdb565b61486181898d61579c565b60009150505b93505050509550959350505050565b600080614885878787866151d2565b905061311461489982866301e133806157e1565b6148ab83670de0b6b3a7640000616498565b906150c3565b61490e60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b5490916101008301916149dd9116614c89565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192614a0f92900416614c89565b905292915050565b600080614a37836101400151846101200151612bd890919063ffffffff16565b61010084015160e0850151614a4b91612bd8565b614a5591906165f4565b90506000614a6b846000015185602001516151e3565b90506000821315614b0d576000614aad8286604001518760a001518860c00151670de0b6b3a7640000614a9e9190616498565b89606001518a60800151615807565b9150614abb90508184615883565b90508015614b0757614af4828660400151838860c00151670de0b6b3a7640000614ae59190616498565b89606001518a60800151615892565b85518690614b03908390616498565b9052505b50614bcb565b6000821215614bcb57614b1f8261652b565b91506000614b538286604001518760c00151670de0b6b3a7640000614b449190616498565b886060015189608001516158c6565b9150614b6190508184615883565b90508015614bad57614b9a828660400151838860c00151670de0b6b3a7640000614b8b9190616498565b89606001518a60800151615950565b85518690614ba99083906164ab565b9052505b614bb78184616498565b85518690614bc69083906164ab565b905250505b6000614bfa856101000151670de0b6b3a7640000614be99190616498565b606087015160e08801519190613631565b614c28866101400151670de0b6b3a7640000614c169190616498565b60608801516101208901519190613631565b614c3291906165f4565b90506000818660000151614c469190616641565b90508560a00151811215614c6d5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151614c7f9082616498565b9695505050505050565b600080670de0b6b3a7640000614c9d612845565b614ca791906164d4565b9050808311614cb7576000614cc1565b614cc18184616498565b9150612bed614cf8670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006164d4565b83906150c3565b600080614d498561310e85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000614d3f818c6150c3565b61310e9190616498565b9150614d75827f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9050935093915050565b6000806000806000806000614d938861396d565b9050614dfd614da0612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006159cb565b909850965093506000614e11612b02612bb7565b9050614e1c81613779565b600080614e2b8d85858f6145ce565b96509092509050614e3c8288616498565b9650614e4881836164ab565b614e52908a616498565b9850614e5e858a6164ab565b975050505050614ee285858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e614e9b9190616498565b81526020810191909152604001600020546001600160801b0316428d11614ed95760008d8152600e60205260409020546001600160801b0316614edb565b8d5b600161568e565b999d939c50919a5098509695509350505050565b600a546001600160801b0316614f31610e8882614f1b85670de0b6b3a76400006164d4565b600b546001600160801b031691908a6000615200565b600b80546001600160801b0319166001600160801b0392909216919091179055614f5a8661308d565b614f6490826164eb565b600a80546001600160801b0319166001600160801b039290921691909117905550614f8e8361308d565b60088054600090614fa99084906001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614fd682615709565b60098054600090614feb908490600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061501b8461308d565b6008805460109061503d908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b038181021990931691831602179091556008547f00000000000000000000000000000000000000000000000000000000000000009116109050806150a55750600954600854600f9190910b6001600160801b03909116125b156112a85760405163585fe6df60e11b815260040160405180910390fd5b6000612bed83670de0b6b3a764000084613631565b6000806150e586866150c3565b91506000615113837f0000000000000000000000000000000000000000000000000000000000000000612bd8565b905061513f817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b91508315615162576151518282616498565b61515b9084616498565b9250615179565b61516c8282616498565b61517690846164ab565b92505b8486101561519c5761518c838787613631565b9250615199828787613631565b91505b5094509492505050565b60006151c78787876151c088670de0b6b3a7640000616498565b8787615a17565b979650505050505050565b6000613118826130fe858888613631565b6000806151f083856165f4565b90506000811215612bed57600080fd5b600081156152405761523961521584876164ab565b61521f8587612bd8565b615229888a612bd8565b61523391906164ab565b906152ec565b9050613118565b82850361524f57506000613118565b614c7f61525c8487616498565b6152668587612bd8565b615270888a612bd8565b6152339190616498565b60006152a67f000000000000000000000000000000000000000000000000000000000000000083612bd8565b6009546008546152e4916000916001600160801b03600160801b9092048216600f0b916152d4911687612bd8565b6152de91906165f4565b90615747565b121592915050565b6000612bed83670de0b6b3a7640000846157e1565b60008160000361531a5750670de0b6b3a7640000611471565b8260000361532a57506000611471565b81600061533685615a8a565b905081810261534d670de0b6b3a764000082616669565b9050614c7f81615441565b60008084116153675782615372565b615372838686613631565b9050806000036153825750610ce2565b80858382111561539d5783915061539a878385613631565b90505b6153a68261308d565b600d80546000906153c19084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506153ee8161308d565b600d8054601090615410908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ccc816147c09061652b565b6000680248ce36a70cb26b3e19821361545c57506000919050565b680755bf798b4a1bf1e582126154855760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600080806155ed6155e588670de0b6b3a7640000616498565b899087613631565b90506155f98888612bd8565b9150811561562f576156208a8a846156198a670de0b6b3a7640000616498565b8989615950565b925061562c83826164ab565b90505b9750975097945050505050565b6000806156558561564d8887615c9d565b8a9190613631565b9050615662888486613631565b61566c90826164ab565b905086811115615683576156808782616498565b91505b509695505050505050565b600080600080600080888810156156eb5786156156b3576156b08d898b613631565b9c505b6156be8c898b613631565b9b506156ca8b8d6165f4565b90506156d78b898b613631565b9a506156e48a898b613631565b99506156f8565b6156f58b8d6165f4565b90505b9b9c9a9b999a975050505050505050565b600060016001607f1b0319821280159061572a575060016001607f1b038213155b6130b35760405163a5353be560e01b815260040160405180910390fd5b60008183136157565781612bed565b5090919050565b60008183136147725782612bed565b60006151c787878761578688670de0b6b3a7640000616498565b8787615892565b60008183116157565781612bed565b60006157aa613530836148b1565b6000808052600260205260008051602061669883398151915254919250906157d39085906164ab565b90506112a885838387615358565b60008260001904841183021582026157f857600080fd5b50910281810615159190040190565b6000808061581585856150c3565b9050600061582682868c8a8d615cb2565b9050600061585a61583f670de0b6b3a76400008a6150c3565b61585061323a8b6130fe8b8f612bd8565b6130fe9085616498565b9050615866898c616498565b6158708b83616498565b945094505050505b965096945050505050565b60008183116147725782612bed565b6000806158a3888888888888615cd9565b90925090508061568357604051637ac17d2560e01b815260040160405180910390fd5b600080806158d485856150c3565b905060006158e582868b8a8c615cb2565b9050600061591a6158fe670de0b6b3a76400008a6150c3565b6130fe615913670de0b6b3a7640000876164ab565b85906150c3565b9050600061592882886150c3565b90506159348b82616498565b61593e838c616498565b95509550505050509550959350505050565b60008061595d84846150c3565b9050600061596e82858b898c615cb2565b905061597e866130fe898b616498565b975060006159a5615997670de0b6b3a7640000896152ec565b6130fe856148ab8d87616498565b90506159b181866150c3565b90506159bd8a82616498565b9a9950505050505050505050565b600080806159e46155e588670de0b6b3a7640000616498565b9050861561562f576159f68888612bd8565b91506156208a8a84615a108a670de0b6b3a7640000616498565b8989615892565b600080615a2484846150c3565b90506000615a3582858b898c615cb2565b9050615a4f866130fe615a488a8d6164ab565b8790612bd8565b9850615a5b828a612bd8565b98506000615a7e615a74670de0b6b3a7640000896152ec565b6130fe8c85616498565b90506159bd818a616498565b6000808213615aac57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000612bed8383670de0b6b3a76400006157e1565b6000615cbe8284615301565b615ccf61391b856130fe8989612bd8565b614c7f91906164ab565b60008080615ce785856150c3565b90506000615cf882868c8a8d615cb2565b9050615d08876130fe8a8c6164ab565b985088811015615d2057600080935093505050615878565b6000615d45615d37670de0b6b3a76400008a6152ec565b6130fe856148ab8e87616498565b9050615d5181876150c3565b9050808b1115615d6857615d65818c616498565b94505b60019350505050965096945050505050565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015615db95780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715615dfb57615dfb615dc1565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715615e2a57615e2a615dc1565b604052919050565b60006020808385031215615e4557600080fd5b825167ffffffffffffffff80821115615e5d57600080fd5b818501915085601f830112615e7157600080fd5b815181811115615e8357615e83615dc1565b615e95601f8201601f19168501615e01565b91508082528684828501011115615eab57600080fd5b60005b81811015615ec9578381018501518382018601528401615eae565b50600090820190930192909252509392505050565b80151581146112b857600080fd5b8035615ef781615ede565b919050565b600060208284031215615f0e57600080fd5b8135612bed81615ede565b80356001600160a01b0381168114615ef757600080fd5b600080600080600060a08688031215615f4857600080fd5b853594506020860135935060408601359250615f6660608701615f19565b91506080860135615f7681615ede565b809150509295509295909350565b60008083601f840112615f9657600080fd5b50813567ffffffffffffffff811115615fae57600080fd5b6020830191508360208260051b850101111561283e57600080fd5b60008060008060008060808789031215615fe257600080fd5b615feb87615f19565b9550615ff960208801615f19565b9450604087013567ffffffffffffffff8082111561601657600080fd5b6160228a838b01615f84565b9096509450606089013591508082111561603b57600080fd5b5061604889828a01615f84565b979a9699509497509295939492505050565b6000806000806080858703121561607057600080fd5b8435935061608060208601615f19565b925061608e60408601615f19565b9396929550929360600135925050565b600080600080608085870312156160b457600080fd5b84359350602085013592506160cb60408601615f19565b915060608501356160db81615ede565b939692955090935050565b6000602082840312156160f857600080fd5b5035919050565b6000806000806080858703121561611557600080fd5b8435935061612560208601615f19565b92506040850135915061613a60608601615f19565b905092959194509250565b6000806040838503121561615857600080fd5b50508035926020909101359150565b80356001600160801b0381168114615ef757600080fd5b6000806040838503121561619157600080fd5b61619a83616167565b91506161a860208401616167565b90509250929050565b600080604083850312156161c457600080fd5b6161cd83615f19565b915060208301356161dd81615ede565b809150509250929050565b8035600f81900b8114615ef757600080fd5b6000610140828403121561620d57600080fd5b616215615dd7565b61621e83616167565b815261622c60208401616167565b602082015261623d604084016161e8565b604082015261624e60608401616167565b606082015261625f60808401616167565b608082015261627060a08401616167565b60a082015261628160c08401616167565b60c082015261629260e08401616167565b60e08201526101006162a5818501615eec565b908201526101206162b7848201615eec565b908201529392505050565b600080600080600080600060e0888a0312156162dd57600080fd5b6162e688615f19565b96506162f460208901615f19565b9550604088013561630481615ede565b945060608801359350608088013560ff8116811461632157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000806080858703121561635457600080fd5b5050823594602084013594506040840135936060013592509050565b60008060006060848603121561638557600080fd5b8335925061639560208501615f19565b9150604084013590509250925092565b6000602082840312156163b757600080fd5b612bed82615f19565b6000602082840312156163d257600080fd5b612bed82616167565b600080600080600060a086880312156163f357600080fd5b8535945061640360208701615f19565b935061641160408701615f19565b92506060860135915061642660808701615f19565b90509295509295909350565b60008060006060848603121561644757600080fd5b505081359360208301359350604090920135919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561147157611471616482565b8082018082111561147157611471616482565b634e487b7160e01b600052603260045260246000fd5b808202811582820484141761147157611471616482565b6001600160801b0382811682821603908082111561650b5761650b616482565b5092915050565b60006020828403121561652457600080fd5b5051919050565b6000600160ff1b820161654057616540616482565b5060000390565b60006001820161655957616559616482565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261658557616585616560565b500690565b60006020828403121561659c57600080fd5b8151612bed81615ede565b6001600160801b0381811683821601908082111561650b5761650b616482565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561147157611471616482565b818103600083128015838313168383128216171561650b5761650b616482565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561147157611471616482565b808201828112600083128015821682158216171561666157616661616482565b505092915050565b60008261667857616678616560565b600160ff1b82146000198414161561669257616692616482565b50059056feac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba26469706673582212205c6935797a2bd1e3d6a854cb0b8641b88a38d76ff0333efa7578030e63b949dd64736f6c63430008130033",
    "sourceMap": "2888:8858:133:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1135:12:0;1402;1416:23;1443:12;-1:-1:-1;;;;;1443:25:0;1482:5;;1443:54;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1401:96;;;;1511:7;1507:76;;;1541:31;;-1:-1:-1;;;1541:31:0;;;;;;;;;;;1507:76;1592:15;1610:18;1617:10;1610:18;:::i;:::-;1592:36;-1:-1:-1;;;;;;;1642:43:0;;-1:-1:-1;;;1642:43:0;1638:160;;1762:10;1756:17;1751:2;1739:10;1735:19;1728:46;1638:160;2020:17;;-1:-1:-1;;2016:25:0;;2039:1;1994:20;;1987:55;;;1994:20;2122:31;;;;;;;;;;:::i;:::-;2888:8858:133;;;-1:-1:-1;2888:8858:133;;;-1:-1:-1;;;;;2888:8858:133;5984:154:2;;;;;;;;;;-1:-1:-1;5984:154:2;;;;;:::i;:::-;;:::i;:::-;;1716:3078:5;;;;;;:::i;:::-;;:::i;:::-;;;;3572:25:165;;;3628:2;3613:18;;3606:34;;;;3545:18;1716:3078:5;;;;;;;;11164:688:39;;;;;;;;;;-1:-1:-1;11164:688:39;;;;;:::i;:::-;;:::i;4263:249::-;;;;;;;;;;-1:-1:-1;4263:249:39;;;;;:::i;:::-;;:::i;1499:3200:4:-;;;;;;:::i;:::-;;:::i;:::-;;;5955:25:165;;;5943:2;5928:18;1499:3200:4;5809:177:165;7172:567:2;;;;;;;;;;-1:-1:-1;7172:567:2;;;;;:::i;:::-;;:::i;1190:174:39:-;;;;;;;;;;;;1240:124;1190:174;;1044:41;;;;;;;;;;;;;;;13214:2087:4;;;;;;;;;;-1:-1:-1;13214:2087:4;;;;;:::i;:::-;;:::i;4286:213:133:-;;;;;;;;;;-1:-1:-1;4286:213:133;;;;;:::i;:::-;;:::i;8739:234:39:-;;;;;;;;;;-1:-1:-1;8739:234:39;;;;;:::i;:::-;;:::i;4505:79:133:-;;;;;;;;;;-1:-1:-1;4505:79:133;;;;;:::i;:::-;;:::i;3562:566::-;;;;;;;;;;-1:-1:-1;3562:566:133;;;;;:::i;:::-;;:::i;6952:177::-;;;;;;;;;;-1:-1:-1;6952:177:133;;;;;:::i;:::-;;:::i;5326:4188:6:-;;;;;;;;;;-1:-1:-1;5326:4188:6;;;;;:::i;:::-;;:::i;7848:184:133:-;;;;;;;;;;-1:-1:-1;7848:184:133;;;;;:::i;:::-;-1:-1:-1;;;;;7985:40:133;;;-1:-1:-1;;;7985:40:133;7933:42;;7985:40;7933:12;7985:40;7848:184;5280:200:2;;;;;;;;;;-1:-1:-1;5280:200:2;;;;;:::i;:::-;;:::i;7454:116:133:-;;;;;;;;;;-1:-1:-1;7454:116:133;;;;;:::i;:::-;;:::i;3188:138::-;;;;;;;;;;-1:-1:-1;3188:138:133;;;;;:::i;:::-;3291:28;;;;;;-1:-1:-1;;;;;3291:28:133;;;-1:-1:-1;;;3291:28:133;;;;;;:12;:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3291:28:133;;;;;;-1:-1:-1;;3291:28:133;;;;;;;;;;;;;;;;;3188:138;4134:146;;;;;;;;;;-1:-1:-1;4227:7:133;:12;-1:-1:-1;;;;;4227:12:133;;;;-1:-1:-1;;;4250:21:133;;;4134:146;;12957:1339:39;;;;;;;;;;-1:-1:-1;12957:1339:39;;;;;:::i;:::-;;:::i;7330:118:133:-;;;;;;;;;;;;;:::i;5718:817::-;;;;;;;;;;-1:-1:-1;5718:817:133;;;;;:::i;:::-;;:::i;:::-;;;;10507:25:165;;;10563:2;10548:18;;10541:34;;;;10591:18;;;10584:34;10649:2;10634:18;;10627:34;10494:3;10479:19;5718:817:133;10276:391:165;6584:362:133;;;;;;;;;;-1:-1:-1;6584:362:133;;;;;:::i;:::-;;:::i;8073:188:39:-;;;;;;;;;;-1:-1:-1;8073:188:39;;;;;:::i;:::-;;:::i;1742:2987:6:-;;;;;;:::i;:::-;;:::i;7362:308:39:-;;;;;;;;;;-1:-1:-1;7362:308:39;;;;;:::i;:::-;;:::i;5044:668:133:-;;;;;;;;;;-1:-1:-1;5044:668:133;;;;;:::i;:::-;;:::i;:::-;;;;11454:25:165;;;11510:2;11495:18;;11488:34;;;;11538:18;;;11531:34;11442:2;11427:18;5044:668:133;11252:319:165;3332:98:133;;;;;;;;;;-1:-1:-1;3332:98:133;;;;;:::i;:::-;3397:11;:26;3332:98;5646:191:2;;;;;;;;;;-1:-1:-1;5646:191:2;;;;;:::i;:::-;;:::i;7576:167:133:-;;;;;;;;;;-1:-1:-1;7576:167:133;;;;;:::i;:::-;;:::i;8038:113::-;;;;;;;;;;-1:-1:-1;8038:113:133;;;;;:::i;:::-;8104:25;:40;;-1:-1:-1;;;;;8104:40:133;;;-1:-1:-1;;;8104:40:133;;;;;;;;;8038:113;10070:2176:4;;;;;;;;;;-1:-1:-1;10070:2176:4;;;;;:::i;:::-;;:::i;5355:3470::-;;;;;;:::i;:::-;;:::i;7135:189:133:-;;;;;;;;;;-1:-1:-1;7135:189:133;;;;;:::i;:::-;;:::i;7749:93::-;;;;;;;;;;-1:-1:-1;7824:11:133;;7749:93;;4912:294:39;;;;;;;;;;-1:-1:-1;4912:294:39;;;;;:::i;:::-;;:::i;1927:1533:1:-;;;;;;;;;;-1:-1:-1;1927:1533:1;;;;;:::i;:::-;;:::i;4590:448:133:-;;;;;;;;;;-1:-1:-1;4590:448:133;;;;;:::i;:::-;;:::i;5410:3338:5:-;;;;;;;;;;-1:-1:-1;5410:3338:5;;;;;:::i;:::-;;:::i;5984:154:2:-;6045:10;6036:20;;;;:8;:20;;;;;;;;6031:60;;6065:26;;-1:-1:-1;;;6065:26:2;;;;;;;;;;;6031:60;6101:21;:30;;;;;;;-1:-1:-1;;6101:30:2;;;;;;;;;5984:154::o;1716:3078:5:-;1978:20;2000;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;;;;;;;;;558:1;549:6;:10;6250:21:2;;::::1;::::0;::::1;;;6246:54;;;6280:20;;-1:-1:-1::0;;;6280:20:2::1;;;;;;;;;;;6246:54;2103:20:5::2;:18;:20::i;:::-;2151:25;2137:11;:39;2133:115;;;2199:38;;-1:-1:-1::0;;;2199:38:5::2;;;;;;;;;;;2133:115;2295:14;2311:18:::0;2333:70:::2;2355:11;2380:13;2333:8;:70::i;:::-;2294:109;;;;2430:14;2417:10;:27;2413:96;;;2467:31;;-1:-1:-1::0;;;2467:31:5::2;;;;;;;;;;;2413:96;2552:24;2579:19;:17;:19::i;:::-;2552:46;;2608;2625:16;2643:10;2608:16;:46::i;:::-;;2818:26;2854:25:::0;2889:26:::2;3059:38;3078:6;3086:10;3059:18;:38::i;:::-;3592:12;:25:::0;2925:172;;-1:-1:-1;2925:172:5;;-1:-1:-1;2925:172:5;;-1:-1:-1;2925:172:5;;-1:-1:-1;3592:45:5::2;::::0;2925:172;;-1:-1:-1;;;3592:25:5;::::2;-1:-1:-1::0;;;;;3592:25:5::2;:45;:::i;:::-;3485:104;3557:18;3529:25;:23;:25::i;:::-;:46;;;;:::i;:::-;3485:18;::::0;:26:::2;:104::i;:::-;:152;3468:242;;;3669:30;;-1:-1:-1::0;;;3669:30:5::2;;;;;;;;;;;3468:242;3773:12;3760:10;:25;3756:63;;;3794:25;;-1:-1:-1::0;;;3794:25:5::2;;;;;;;;;;;3756:63;3897:18;3871:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;3986:36:5::2;::::0;-1:-1:-1;4005:17:5::2;3986:16:::0;:36:::2;:::i;:::-;3971:51;;4032:193;4060:18;4092:12;4118:17;4149:10;4173:16;4203:12;4032:14;:193::i;:::-;4309:15;4327:97;4362:26;4402:12;4327:21;:97::i;:::-;4309:115;;4434:42;4440:7;4449:12;4463;4434:5;:42::i;:::-;4522:18;4543:11;4522:32;;4648:7;4622:12;-1:-1:-1::0;;;;;4600:141:5::2;;4669:12;4695:10;4719:12;4600:141;;;;;;;11454:25:165::0;;;11510:2;11495:18;;11488:34;;;;11553:2;11538:18;;11531:34;11442:2;11427:18;;11252:319;4600:141:5::2;;;;;;;;4752:35;;;;;;;;591:1:97::0;582:6;:10;1716:3078:5;;;;-1:-1:-1;1716:3078:5;-1:-1:-1;;;;1716:3078:5:o;11164:688:39:-;-1:-1:-1;;;;;11374:18:39;;;;:38;;-1:-1:-1;;;;;;11396:16:39;;;11374:38;11370:98;;;11433:35;;-1:-1:-1;;;11433:35:39;;;;;;;;;;;11370:98;11524:27;;;11520:90;;11572:38;;-1:-1:-1;;;11572:38:39;;;;;;;;;;;11520:90;11675:9;11670:176;11690:14;;;11670:176;;;11722:54;11736:3;;11740:1;11736:6;;;;;;;:::i;:::-;;;;;;;11744:4;11750:2;11754:6;;11761:1;11754:9;;;;;;;:::i;:::-;;;;;;;11765:10;11722:13;:54::i;:::-;11818:3;;11670:176;;;;11164:688;;;;;;:::o;4263:249::-;4453:52;4467:7;4476:4;4482:2;4486:6;4494:10;4453:13;:52::i;:::-;4263:249;;;;:::o;1499:3200:4:-;1675:16;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;1770:20:4::1;:18;:20::i;:::-;1866:26:::0;;::::1;;1862:100;;;1915:36;;-1:-1:-1::0;;;1915:36:4::1;;;;;;;;;;;1862:100;2090:14;2106:18:::0;2128:72:::1;2150:13;2177;2128:8;:72::i;:::-;2089:111:::0;;-1:-1:-1;2089:111:4;-1:-1:-1;3121:25:4::1;3125:21;3121:1;:25;:::i;:::-;3112:6;:34;3108:110;;;3169:38;;-1:-1:-1::0;;;3169:38:4::1;;;;;;;;;;;3108:110;3247:25;3251:21;3247:1;:25;:::i;:::-;3238:34;::::0;:6;:34:::1;:::i;:::-;3227:45;;3324:49;3341:19;:17;:19::i;:::-;3362:10;3324:16;:49::i;:::-;-1:-1:-1::0;3430:26:4;:33;;-1:-1:-1;;3430:33:4::1;3459:4;3430:33;::::0;;3632:18:::1;:6:::0;:16:::1;:18::i;:::-;3603:12;:47:::0;;-1:-1:-1;;;;;;3603:47:4::1;-1:-1:-1::0;;;;;3603:47:4;;;::::1;::::0;;;::::1;::::0;;3688:242:::1;:217;3762:6:::0;3786:18:::1;3822:4:::0;3844:17:::1;3879:12;3688:56;:217::i;:::-;:240;:242::i;:::-;3660:12;:270:::0;;-1:-1:-1;;;;;3660:270:4;;::::1;-1:-1:-1::0;;;3660:270:4::1;::::0;::::1;::::0;;;::::1;::::0;;4435:62:::1;3660:25;::::0;4475:21:::1;4435:5;:62::i;:::-;4507:51;554:1:31;4535:12:4;4549:8;4507:5;:51::i;:::-;4611:55;::::0;;11454:25:165;;;11510:2;11495:18;;11488:34;;;11538:18;;;11531:34;;;-1:-1:-1;;;;;4611:55:4;::::1;::::0;::::1;::::0;11442:2:165;11427:18;4611:55:4::1;;;;;;;4677:15;;591:1:97::0;582:6;:10;1499:3200:4;;-1:-1:-1;;;;1499:3200:4:o;7172:567:2:-;7266:16;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;;;7362::2::1;7353:20:::0;;:8:::1;:20;::::0;;;;;::::1;;7352:21;:64:::0;::::1;;;-1:-1:-1::0;7389:10:2::1;-1:-1:-1::0;;;;;7403:13:2::1;7389:27;;;7352:64;:105;;;;-1:-1:-1::0;7446:11:2::1;::::0;-1:-1:-1;;;;;7446:11:2::1;7432:10;:25;;7352:105;7335:166;;;7475:26;;-1:-1:-1::0;;;7475:26:2::1;;;;;;;;;;;7335:166;7543:22;::::0;;7511:29:::1;7575::::0;;;7625:107:::1;7543:22:::0;7683:13:::1;7710:12:::0;7625:9:::1;:107::i;:::-;591:1:97::0;582:6;:10;7614:118:2;7172:567;-1:-1:-1;;;7172:567:2:o;13214:2087:4:-;13426:20;13448:22;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;;;13540:16:4::1;:14;:16::i;:::-;13519:37;;13566:49;13583:19;:17;:19::i;13566:49::-;;13740:33;13762:10;13740:21;:33::i;:::-;14037:13;:29:::0;13993:7;;-1:-1:-1;;;;;;14037:29:4::1;14080:33:::0;;::::1;14076:97;;;14146:16;-1:-1:-1::0;;;;;14129:33:4::1;;;14076:97;14186:14;14204:1;14186:19:::0;14182:38:::1;;14215:1;14218::::0;14207:13:::1;;;;;;;;14182:38;14275:69;-1:-1:-1::0;;;14317:10:4::1;14329:14:::0;14275:5:::1;:69::i;:::-;14445:13;:22:::0;-1:-1:-1;;;;;;;;14445:22:4;;::::1;::::0;::::1;::::0;14425:17:::1;::::0;14501:106:::1;::::0;:14;;14445:22;;14501:106;::::1;:25;:106::i;:::-;14477:130;;14745:26;:14;:24;:26::i;:::-;14714:57;::::0;:16;:57:::1;:::i;:::-;14670:13;:101:::0;;-1:-1:-1;;;;;;14670:101:4::1;-1:-1:-1::0;;;;;14670:101:4;;;::::1;::::0;;;::::1;::::0;;14807:25:::1;:13:::0;:23:::1;:25::i;:::-;14781:13;:51:::0;;:22:::1;::::0;:51:::1;::::0;;;-1:-1:-1;;;14781:51:4;::::1;-1:-1:-1::0;;;;;14781:51:4::1;;:::i;:::-;;;;;;;;-1:-1:-1::0;;;;;14781:51:4::1;;;;;-1:-1:-1::0;;;;;14781:51:4::1;;;;;;14891:53;14901:13;14916:12;14930:13;14891:9;:53::i;:::-;14876:68:::0;-1:-1:-1;14876:68:4;15013:42:::1;:18:::0;15040:14;15013:26:::1;:42::i;:::-;:57;15009:107;;;15091:25;;-1:-1:-1::0;;;15091:25:4::1;;;;;;;;;;;15009:107;15180:66;::::0;;3572:25:165;;;3628:2;3613:18;;3606:34;;;-1:-1:-1;;;;;15180:66:4;::::1;::::0;::::1;::::0;3545:18:165;15180:66:4::1;;;;;;;15257:37;;;;570:1:97;591::::0;582:6;:10;13214:2087:4;;;;-1:-1:-1;13214:2087:4;-1:-1:-1;;;13214:2087:4:o;4286:213:133:-;4358:7;4367;4415;4423:5;4415:14;;;;;;;;:::i;:::-;;;;;;;;:19;;;;;;;;;;-1:-1:-1;;;;;4415:19:133;-1:-1:-1;;;;;4407:28:133;4457:7;4465:5;4457:14;;;;;;;;:::i;:::-;;;;;;;;;;:24;4386:106;;4457:24;;;;;-1:-1:-1;4286:213:133;-1:-1:-1;;4286:213:133:o;8739:234:39:-;8900:7;3063:32;3087:7;3063:23;:32::i;:::-;-1:-1:-1;;;;;3049:46:39;:10;-1:-1:-1;;;;;3049:46:39;;3045:116;;3118:32;;-1:-1:-1;;;3118:32:39;;;;;;;;;;;3045:116;8919:47:::1;8932:7;8941:8;8951:6;8959;8919:12;:47::i;:::-;8739:234:::0;;;;;:::o;4505:79:133:-;4560:17;4572:4;4560:11;:17::i;:::-;4505:79;:::o;3562:566::-;3700:35;;-1:-1:-1;;;3700:35:133;;3729:4;3700:35;;;14278:51:165;3626:15:133;;3645:135;;-1:-1:-1;;;;;3700:10:133;:20;;;;14251:18:165;;3700:35:133;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3749:3;3766:4;3645:41;:135::i;:::-;3623:157;;;3806:1;3795:8;:12;3791:331;;;3823:119;;-1:-1:-1;;;3823:119:133;;3888:4;3823:119;;;14703:51:165;14770:18;;;14763:34;;;3845:10:133;-1:-1:-1;;;;;3823:39:133;;;;14676:18:165;;3823:119:133;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3791:331;3974:1;3963:8;:12;3959:163;;;-1:-1:-1;;;;;4013:10:133;3991:39;;4056:4;4087:9;4088:8;4087:9;:::i;:::-;3991:120;;-1:-1:-1;;;;;;3991:120:133;;;;;;;-1:-1:-1;;;;;14721:32:165;;;3991:120:133;;;14703:51:165;14770:18;;;14763:34;14676:18;;3991:120:133;;;;;;;;;;;;;;;;;;;3959:163;3613:515;3562:566;;:::o;6952:177::-;7044:21;7084:38;7108:13;7084:23;:38::i;:::-;7077:45;6952:177;-1:-1:-1;;6952:177:133:o;5326:4188:6:-;5529:7;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;5566:25:6::1;5552:39:::0;::::1;5548:115;;;5614:38;;-1:-1:-1::0;;;5614:38:6::1;;;;;;;;;;;5548:115;5706:18;5727:16;:14;:16::i;:::-;5706:37;;5753:43;5770:13;5785:10;5753:16;:43::i;:::-;;5857:143;5876:65;5898:27;5927:13;5876:21;:65::i;:::-;5955:10;5979:11;5857:5;:143::i;:::-;6208:25;6247:21:::0;6282:26:::1;6322:23:::0;6359:27:::1;6400:26:::0;6439:60:::1;6460:11;6473:10;6485:13;6439:20;:60::i;:::-;6991:12;:25:::0;6194:305;;-1:-1:-1;6194:305:6;;-1:-1:-1;6194:305:6;;-1:-1:-1;6194:305:6;-1:-1:-1;6194:305:6;-1:-1:-1;6194:305:6;-1:-1:-1;6991:45:6::1;::::0;6194:305;;-1:-1:-1;;;6991:25:6;::::1;-1:-1:-1::0;;;;;6991:25:6::1;:45;:::i;:::-;6887:101;6959:15;6931:25;:23;:25::i;6887:101::-;:149;6870:239;;;7068:30;;-1:-1:-1::0;;;7068:30:6::1;;;;;;;;;;;6870:239;7331:11:::0;7406:13;7482:10;7537:15:::1;:30:::0;-1:-1:-1;7533:1241:6::1;;;7655:18;7629:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;7766:197:6::1;::::0;-1:-1:-1;7800:10:6;7828:17;7863:18;7899:20;7937:12;7766:16:::1;:197::i;:::-;8039:22;8064:32;8079:17;8064:12:::0;:32:::1;:::i;:::-;8110:31;8168:28:::0;;;:12:::1;:28;::::0;;;;:41;8039:57;;-1:-1:-1;;;;8168:41:6;;::::1;;;::::0;8237:264:::1;::::0;8291:10;;8319:15;;8352:17;;8387:18;;8423:12;;8453:11;;8237:36:::1;:264::i;:::-;8594:28;::::0;;;:12:::1;:28;::::0;;;;:41;8515:134:::1;::::0;::::1;::::0;;::::1;::::0;-1:-1:-1;;;8594:41:6;::::1;::::0;::::1;8515:19;:134::i;:::-;8730:33;8752:10;8730:21;:33::i;:::-;7569:1205;;7533:1241;8983:20;9006:99;9029:13;9056:12;9082:13;9006:9;:99::i;:::-;8983:122;;9181:10;9166:12;:25;9162:63;;;9200:25;;-1:-1:-1::0;;;9200:25:6::1;;;;;;;;;;;9162:63;9327:64;9349:27;9378:12;9327:21;:64::i;:::-;9301:12;-1:-1:-1::0;;;;;9277:200:6::1;;9405:12;9431;9457:10;9277:200;;;;;;;11454:25:165::0;;;11510:2;11495:18;;11488:34;;;;11553:2;11538:18;;11531:34;11442:2;11427:18;;11252:319;9277:200:6::1;;;;;;;;9495:12:::0;-1:-1:-1;;;;;;;;;;;591:1:97;582:6;:10;5326:4188:6;;-1:-1:-1;;;;;5326:4188:6:o;5280:200:2:-;5362:11;;-1:-1:-1;;;;;5362:11:2;5348:10;:25;5344:64;;5382:26;;-1:-1:-1;;;5382:26:2;;;;;;;;;;;5344:64;-1:-1:-1;;;;;5418:13:2;;;;;;:8;:13;;;;;;:22;;-1:-1:-1;;5418:22:2;;;;;;;5455:18;;;5418:13;5455:18;5280:200;;:::o;7454:116:133:-;7526:37;7543:19;7526:16;:37::i;12957:1339:39:-;13232:8;13214:15;:26;13210:68;;;13249:29;;-1:-1:-1;;;13249:29:39;;;;;;;;;;;13210:68;-1:-1:-1;;;;;13338:19:39;;13334:67;;13366:35;;-1:-1:-1;;;13366:35:39;;;;;;;;;;;13334:67;-1:-1:-1;;;;;13759:14:39;;;13412:18;13759:14;;;:7;:14;;;;;;;;;13583:246;;1240:124;13583:246;;;15230:25:165;15309:18;;;15302:43;;;;15381:15;;;15361:18;;;15354:43;15440:14;;15433:22;15413:18;;;15406:50;15472:19;;;15465:35;;;;15516:19;;;;15509:35;;;13583:246:39;;;;;;;;;;15202:19:165;;;13583:246:39;;;13552:295;;;;;;;;-1:-1:-1;;;13456:405:39;;;15813:27:165;13518:16:39;15856:11:165;;;15849:27;15892:12;;;15885:28;15929:12;;13456:405:39;;;-1:-1:-1;;13456:405:39;;;;;;;;;13433:438;;13456:405;13433:438;;;;13927:14;13944:30;;;;;;;;;16179:25:165;;;16252:4;16240:17;;16220:18;;;16213:45;;;;16274:18;;;16267:34;;;16317:18;;;16310:34;;;13433:438:39;;-1:-1:-1;13927:14:39;13944:30;;16151:19:165;;13944:30:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13927:47;;13998:5;-1:-1:-1;;;;;13988:15:39;:6;-1:-1:-1;;;;;13988:15:39;;13984:58;;14012:30;;-1:-1:-1;;;14012:30:39;;;;;;;;;;;13984:58;-1:-1:-1;;;;;14096:14:39;;;;;;:7;:14;;;;;14094:16;;14096:14;;;14094:16;;;:::i;:::-;;;;-1:-1:-1;;;;;;14145:24:39;;;;;;;:17;:24;;;;;;;;:33;;;;;;;;;;;;;:45;;-1:-1:-1;;14145:45:39;;;;;;;;;;14248:41;;16635::165;;;14248::39;;16608:18:165;14248:41:39;;;;;;;13147:1149;;12957:1339;;;;;;;:::o;7330:118:133:-;7381:22;7422:19;:17;:19::i;:::-;7415:26;;7330:118;:::o;5718:817::-;5948:21;5983:20;6017:26;6057:25;6236:149;6279:10;6303:24;6341:10;6365;6236:29;:149::i;:::-;6107:278;;;;-1:-1:-1;6107:278:133;-1:-1:-1;6107:278:133;;-1:-1:-1;5718:817:133;-1:-1:-1;;;;;5718:817:133:o;6584:362::-;6723:26;6763:25;6802:20;6836:26;6894:45;6913:12;6927:11;6894:18;:45::i;:::-;6887:52;;;;-1:-1:-1;6887:52:133;-1:-1:-1;6887:52:133;;-1:-1:-1;6584:362:133;-1:-1:-1;;;6584:362:133:o;8073:188:39:-;8203:51;8216:7;8225:8;8235:6;8243:10;8203:12;:51::i;1742:2987:6:-;2006:20;2028:21;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;6250:21:2;;::::1;::::0;::::1;;;6246:54;;;6280:20;;-1:-1:-1::0;;;6280:20:2::1;;;;;;;;;;;6246:54;2132:20:6::2;:18;:20::i;:::-;2180:25;2166:11;:39;2162:115;;;2228:38;;-1:-1:-1::0;;;2228:38:6::2;;;;;;;;;;;2162:115;2603:18;2624:16;:14;:16::i;:::-;2603:37;;2667:14;2654:10;:27;2650:96;;;2704:31;;-1:-1:-1::0;;;2704:31:6::2;;;;;;;;;;;2650:96;2755:24;2782:19;:17;:19::i;:::-;2755:46;;2811:22;2836:46;2853:16;2871:10;2836:16;:46::i;:::-;2811:71:::0;-1:-1:-1;3056:36:6::2;3075:17;3056:16:::0;:36:::2;:::i;:::-;3041:51;;3102:26;3152::::0;3312:60:::2;3332:11;3345:10;3357:14;3312:19;:60::i;:::-;3433:22;:44:::0;;3192:180;;-1:-1:-1;3192:180:6;;-1:-1:-1;3192:180:6;-1:-1:-1;3192:180:6;;3433:22:::2;::::0;:44:::2;::::0;3192:180;;3433:44:::2;:::i;:::-;::::0;;;-1:-1:-1;;;3764:27:6;;::::2;3760:65;;;3800:25;;-1:-1:-1::0;;;3800:25:6::2;;;;;;;;;;;3760:65;3835:38;3844:13;3859;3835:8;:38::i;:::-;;;3948:132;3977:11;4002:18;4034:10;4058:12;3948:15;:132::i;:::-;4240:15;4258:98;4293:27;4334:12;4258:21;:98::i;:::-;4240:116;;4366:41;4372:7;4381:12;4395:11;4366:5;:41::i;:::-;4532:143;::::0;;11454:25:165;;;11510:2;11495:18;;11488:34;;;11538:18;;;11531:34;;;4475:11:6;;4581:7;;-1:-1:-1;;;;;4532:143:6;::::2;::::0;::::2;::::0;11442:2:165;11427:18;4532:143:6::2;;;;;;;4686:36;;;;;;591:1:97::0;582:6;:10;1742:2987:6;;;;-1:-1:-1;1742:2987:6;-1:-1:-1;;;;1742:2987:6:o;7362:308:39:-;7527:10;7509:29;;;;:17;:29;;;;;;;;-1:-1:-1;;;;;7509:39:39;;;;;;;;;;;;:50;;-1:-1:-1;;7509:50:39;;;;;;;;;;7617:46;;16635:41:165;;;7509:39:39;;7527:10;7617:46;;16608:18:165;7617:46:39;;;;;;;7362:308;;:::o;5044:668:133:-;5273:21;5308:20;5342:26;5491:148;5534:9;5557:24;5595:10;5619;5491:29;:148::i;:::-;5393:246;;;;-1:-1:-1;5393:246:133;;-1:-1:-1;5044:668:133;-1:-1:-1;;;;;5044:668:133:o;5646:191:2:-;5719:11;;-1:-1:-1;;;;;5719:11:2;5705:10;:25;5701:64;;5739:26;;-1:-1:-1;;;5739:26:2;;;;;;;;;;;5701:64;5775:11;:17;;-1:-1:-1;;;;;;5775:17:2;-1:-1:-1;;;;;5775:17:2;;;;;;;;5808:22;;;;-1:-1:-1;;5808:22:2;5646:191;:::o;7576:167:133:-;7670:7;7696:40;7724:11;7696:27;:40::i;10070:2176:4:-;10267:20;10289:24;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;10343:25:4::1;10333:35:::0;::::1;10329:111;;;10391:38;;-1:-1:-1::0;;;10391:38:4::1;;;;;;;;;;;10329:111;10483:18;10504:16;:14;:16::i;:::-;10483:37;;10530:49;10547:19;:17;:19::i;10530:49::-;;10796:33;10818:10;10796:21;:33::i;:::-;10901:12;:34;::::0;-1:-1:-1;;;;;;;;;;;10901:34:4;11056:13:::1;:29:::0;-1:-1:-1;;;10871:27:4::1;10983:70:::0;;;;;10871:27;;10983:102:::1;::::0;-1:-1:-1;;;;;11056:29:4;;::::1;::::0;10983:102:::1;:::i;:::-;10945:140:::0;-1:-1:-1;11095:21:4::1;11119:61;10945:140:::0;11119:19;:61:::1;:::i;:::-;11095:85;;11190:48;554:1:31;11218:10:4;11230:7;11190:5;:48::i;:::-;11296:21;11363:177;11398:7;11419:10;11443:13;11470:19;11503:27;11363:21;:177::i;:::-;11327:213:::0;-1:-1:-1;11327:213:4;-1:-1:-1;11600:119:4::1;-1:-1:-1::0;;;11667:12:4;11327:213;11600:5:::1;:119::i;:::-;11799:53;11809:13;11824:12;11838:13;11799:9;:53::i;:::-;11784:68;;11916:12;11903:10;:25;11899:63;;;11937:25;;-1:-1:-1::0;;;11937:25:4::1;;;;;;;;;;;11899:63;12053:136;::::0;;11454:25:165;;;11510:2;11495:18;;11488:34;;;11538:18;;;11531:34;;;12031:7:4;;-1:-1:-1;;;;;12053:136:4;::::1;::::0;::::1;::::0;11442:2:165;11427:18;12053:136:4::1;;;;;;;12200:39;;;;;;591:1:97::0;582:6;:10;10070:2176:4;;;;-1:-1:-1;10070:2176:4;-1:-1:-1;;;10070:2176:4:o;5355:3470::-;5573:16;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;6250:21:2;;::::1;::::0;::::1;;;6246:54;;;6280:20;;-1:-1:-1::0;;;6280:20:2::1;;;;;;;;;;;6246:54;5668:20:4::2;:18;:20::i;:::-;5718:25;5702:13;:41;5698:117;;;5766:38;;-1:-1:-1::0;;;5766:38:4::2;;;;;;;;;;;5698:117;5864:11;5878:216;5931:25;:23;:25::i;:::-;5970:12;:25:::0;-1:-1:-1;;;5970:25:4;::::2;-1:-1:-1::0;;;;;5970:25:4::2;6009:18;6041:17;6072:12;5878:39;:216::i;:::-;5864:230;;6114:7;6108:3;:13;:30;;;;6131:7;6125:3;:13;6108:30;6104:67;;;6147:24;;-1:-1:-1::0;;;6147:24:4::2;;;;;;;;;;;6104:67;6251:14;6267:18:::0;6289:72:::2;6311:13;6338;6289:8;:72::i;:::-;6250:111;;;;6405:49;6422:19;:17;:19::i;6405:49::-;-1:-1:-1::0;6983:13:4::2;:29:::0;-1:-1:-1;;;6872:35:4::2;6910:70:::0;;;:12:::2;:70;::::0;;;6872:35;;6910:102:::2;::::0;-1:-1:-1;;;;;6983:29:4;;::::2;::::0;6910:102:::2;:::i;:::-;7022:21;7046:34:::0;;;:12:::2;:34;::::0;-1:-1:-1;;;;;;;;;;;7046:34:4;6872:140;;-1:-1:-1;7022:21:4;7046:76:::2;::::0;6872:140;;7046:76:::2;:::i;:::-;7022:100;;7187:26;7310:63:::0;7376:34:::2;7399:10;7376:22;:34::i;:::-;7310:100;;7424:28;7455:74;7509:6;7455:36;:74::i;:::-;7424:105;;7652:32;7676:6;7652:16;:32::i;:::-;7721:12;:26:::0;-1:-1:-1;;;;;7721:26:4;;::::2;7698:49:::0;;7786:28;;::::2;;7761:22;::::0;::::2;:53:::0;-1:-1:-1;;;7850:25:4;;::::2;;7828:19;::::0;::::2;:47:::0;7910:44:::2;7698:6:::0;7910:36:::2;:44::i;:::-;7889:65:::0;-1:-1:-1;8354:137:4::2;8426:13:::0;8457:20;8355:41:::2;8457:20:::0;7889:65;8355:41:::2;:::i;:::-;8354:54:::0;:137;:54:::2;:137::i;:::-;8343:148;;7223:1279;;8555:51;554:1:31;8583:12:4;8597:8;8555:5;:51::i;:::-;8679:33;8701:10;8679:21;:33::i;:::-;8767:51;::::0;;3572:25:165;;;3628:2;3613:18;;3606:34;;;-1:-1:-1;;;;;8767:51:4;::::2;::::0;::::2;::::0;3545:18:165;8767:51:4::2;;;;;;;-1:-1:-1::0;;591:1:97;582:6;:10;-1:-1:-1;5355:3470:4;;;-1:-1:-1;;;;;;;;5355:3470:4:o;7135:189:133:-;7233:21;7273:44;7303:13;7273:29;:44::i;4912:294:39:-;5090:7;3063:32;3087:7;3063:23;:32::i;:::-;-1:-1:-1;;;;;3049:46:39;:10;-1:-1:-1;;;;;3049:46:39;;3045:116;;3118:32;;-1:-1:-1;;;3118:32:39;;;;;;;;;;;3045:116;5151:48:::1;5165:7;5174:4;5180:2;5184:6;5192;5151:13;:48::i;:::-;4912:294:::0;;;;;;:::o;1927:1533:1:-;2067:29;;;;:12;:29;;;;;:40;-1:-1:-1;;;;;2067:40:1;:45;2063:82;;1927:1533;:::o;2063:82::-;2324:24;2351:19;:17;:19::i;:::-;2324:46;-1:-1:-1;2397:37:1;2415:19;2397:15;:37;:::i;:::-;:42;;;:92;;;2474:15;2455:16;:34;2397:92;2380:187;;;2521:35;;-1:-1:-1;;;2521:35:1;;;;;;;;;;;2380:187;2820:16;2801:15;:35;2797:657;;2852:52;2869:16;2887;:14;:16::i;:::-;2852;:52::i;2797:657::-;2972:15;2935:509;3083:25;3111:18;;;:12;:18;;;;;:29;-1:-1:-1;;;;;3111:29:1;3162:24;;;3158:107;;3230:16;:14;:16::i;:::-;3210:36;;3158:107;3286:22;;3282:148;;3332:52;3349:15;3366:17;3332:16;:52::i;3282:148::-;-1:-1:-1;3023:27:1;3031:19;3023:27;;:::i;:::-;;;2935:509;;2797:657;1988:1472;1927:1533;:::o;4590:448:133:-;4765:21;4788:26;4868:111;4912:9;4935:10;4959;4868:30;:111::i;:::-;4830:149;;-1:-1:-1;4830:149:133;-1:-1:-1;4590:448:133;;;;;;;:::o;5410:3338:5:-;5612:7;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;5649:25:5::1;5635:39:::0;::::1;5631:115;;;5697:38;;-1:-1:-1::0;;;5697:38:5::1;;;;;;;;;;;5631:115;5979:18;6000:16;:14;:16::i;:::-;5979:37;;6026:43;6043:13;6058:10;6026:16;:43::i;:::-;;6129:142;6148:64;6170:26;6198:13;6148:21;:64::i;6129:142::-;6370:25;6409:21:::0;6444:26:::1;6484:23:::0;6521:27:::1;6562:26:::0;6601:59:::1;6621:11;6634:10;6646:13;6601:19;:59::i;:::-;6356:304;;;;;;;;;;;;6861:20;6884:13;6861:36;;6960:13;6942:15;:31;6938:1161;;;7060:18;7034:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;7092:197:5::1;::::0;-1:-1:-1;7125:11:5;7154:17;7189:18;7225:20;7263:12;7092:15:::1;:197::i;:::-;7365:22;7390:32;7405:17;7390:12:::0;:32:::1;:::i;:::-;7436:31;7494:28:::0;;;:12:::1;:28;::::0;;;;:41;7365:57;;-1:-1:-1;;;;7494:41:5;::::1;;;7563:263;7617:11:::0;7646:15;7679:17;7714:18;7750:12;7780:10;7808:4:::1;7563:36;:263::i;:::-;7919:28;::::0;;;:12:::1;:28;::::0;;;;:41;7840:134:::1;::::0;::::1;::::0;;::::1;::::0;-1:-1:-1;;;7919:41:5;::::1;::::0;::::1;7840:19;:134::i;:::-;8055:33;8077:10;8055:21;:33::i;:::-;6975:1124;;6938:1161;8155:20;8178:99;8201:13;8228:12;8254:13;8178:9;:99::i;:::-;8155:122;;8341:12;8328:10;:25;8324:63;;;8362:25;;-1:-1:-1::0;;;8362:25:5::1;;;;;;;;;;;8324:63;8454:11:::0;8560:63:::1;8582:26;8610:12:::0;8560:21:::1;:63::i;:::-;8511:198;::::0;;11454:25:165;;;11510:2;11495:18;;11488:34;;;11538:18;;;11531:34;;;-1:-1:-1;;;;;8511:198:5;::::1;::::0;::::1;::::0;11442:2:165;11427:18;8511:198:5::1;;;;;;;-1:-1:-1::0;591:1:97;582:6;:10;8728:12:5;5410:3338;-1:-1:-1;;;;;;;;;;;;;;5410:3338:5:o;8359:174:133:-;8434:10;-1:-1:-1;;;;;8426:26:133;87:42:161;8426:26:133;;;;:43;;;8468:1;8456:9;:13;8426:43;8422:105;;;8492:24;;-1:-1:-1;;;8492:24:133;;;;;;;;;;;8422:105;8359:174::o;8539:1435::-;8628:7;;;8826:4;-1:-1:-1;;8852:10:133;-1:-1:-1;;;;;8844:26:133;;8840:588;;8895:21;8886:30;;8946:6;8934:9;:18;8930:92;;;8979:28;;-1:-1:-1;;;8979:28:133;;;;;;;;;;;8930:92;9051:6;9039:9;:18;9035:164;;;9099:10;9144:18;9156:6;9144:9;:18;:::i;:::-;9091:93;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;9077:107:133;;-1:-1:-1;;9035:164:133;8840:588;;;9238:35;;-1:-1:-1;;;9238:35:133;;9267:4;9238:35;;;14278:51:165;9238:10:133;-1:-1:-1;;;;;9238:20:133;;;;14251:18:165;;9238:35:133;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;9297:120;;-1:-1:-1;;;9297:120:133;;9338:10;9297:120;;;17386:34:165;9374:4:133;17436:18:165;;;17429:43;17488:18;;;17481:34;;;9229:44:133;;-1:-1:-1;9297:10:133;-1:-1:-1;;;;;9297:23:133;;;;17321:18:165;;9297:120:133;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;9287:130;;8840:588;9442:7;9437:74;;9472:28;;-1:-1:-1;;;9472:28:133;;;;;;;;;;;9437:74;9646:11;;9661:1;9646:16;9642:326;;9692:34;:6;9707:18;9692:14;:34::i;:::-;9678:11;:48;;;;-1:-1:-1;9761:18:133;;-1:-1:-1;9740:40:133;;-1:-1:-1;;9740:40:133;9642:326;9831:11;;9811:17;;9831:38;;9854:6;9862;9831:22;:38::i;:::-;9811:58;;9898:9;9883:11;;:24;;;;;;;:::i;:::-;;;;-1:-1:-1;9929:9:133;;-1:-1:-1;9940:16:133;:14;:16::i;:::-;9921:36;;;;;;;8539:1435;;;;;;:::o;7834:223:7:-;7910:24;8012:37;8030:19;8012:15;:37;:::i;:::-;7981:69;;:15;:69;:::i;3705:3533:1:-;3826:7;3958:51;;;:12;:51;;;;;4023:22;;-1:-1:-1;;;;;4023:22:1;:27;;;:64;;;4072:15;4054;:33;4023:64;4019:124;;;4110:22;-1:-1:-1;;;;;4110:22:1;;-1:-1:-1;4103:29:1;;4019:124;4224:23;:11;:21;:23::i;:::-;4199:48;;-1:-1:-1;;;;;;4199:48:1;-1:-1:-1;;;;;4199:48:1;;;;;;;-1:-1:-1;4736:12:1;-1:-1:-1;4762:35:1;4780:17;4762:15;:35;:::i;:::-;4736:71;;;;;;;;;;;-1:-1:-1;4736:71:1;;;:82;-1:-1:-1;;;;;4736:82:1;;-1:-1:-1;4858:12:1;-1:-1:-1;4884:67:1;4858:12;4935:15;4884:21;:67::i;:::-;4858:103;;;;;;;;;;;;4828:133;;4971:20;5027:1;5005:19;:23;5001:667;;;5062:21;5101;5139:180;5186:19;5227:11;5260:14;5296:5;5139:25;:180::i;:::-;5044:275;;;;5359:13;5333:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5386:235:1;;-1:-1:-1;5420:19:1;5457:1;5476:13;;5592:15;5386:16;:235::i;:::-;5653:4;5635:22;;5030:638;;5001:667;5786:26;5815:12;:102;5841:66;5863:26;5891:15;5841:21;:66::i;:::-;5815:102;;;;;;;;;;;;5786:131;;5952:1;5931:18;:22;5927:662;;;5987:21;6026;6064:178;6111:18;6151:11;6184:14;6220:4;6064:25;:178::i;:::-;5969:273;;;;6282:13;6256:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;6309:233:1;;-1:-1:-1;6342:18:1;6378:1;6397:13;;6513:15;6309;:233::i;:::-;6574:4;6556:22;;5955:634;;5927:662;6660:15;6656:547;;;6691:20;6714:35;6732:17;6714:15;:35;:::i;:::-;6763:31;6821:26;;;:12;:26;;;;;:39;;-1:-1:-1;;;;;6888:43:1;;;;;;6691:58;;-1:-1:-1;;;;6821:39:1;;;;;;;;;6945:132;;6821:39;;7024;;;;;6945:19;:132::i;:::-;7158:34;7180:11;7158:21;:34::i;:::-;6677:526;;6656:547;-1:-1:-1;7220:11:1;;3705:3533;-1:-1:-1;;;;;;3705:3533:1:o;14676:3563:5:-;14816:26;14856:25;14895:20;14929:26;15151:241;15197:25;:23;:25::i;:::-;15236:12;:25;-1:-1:-1;;;15236:25:5;;-1:-1:-1;;;;;15236:25:5;15275:12;15313;15339:11;15364:18;15151:32;:241::i;:::-;15131:261;;15662:17;15682:179;15729:25;:23;:25::i;:::-;15768:12;:25;-1:-1:-1;;;15768:25:5;;-1:-1:-1;;;;;15768:25:5;15807:18;15839:12;15682:33;:179::i;:::-;15662:199;;15907:22;15919:9;15907:11;:22::i;:::-;16111:21;16155:26;16203:130;16251:12;16281:9;16308:11;16203:30;:130::i;:::-;16097:236;;-1:-1:-1;16097:236:5;-1:-1:-1;16496:33:5;16097:236;16496:17;:33;:::i;:::-;16481:48;-1:-1:-1;17208:33:5;17223:18;16481:48;17208:33;:::i;:::-;17188:53;-1:-1:-1;17704:87:5;:18;17747:9;17770:11;17704:29;:87::i;:::-;17683:108;-1:-1:-1;18050:33:5;17683:108;18050:12;:33;:::i;:::-;18029:54;;18094:138;;;14676:3563;;;;;;;:::o;8238:253:7:-;8398:12;:26;8442:28;;8296:7;;8334:150;;-1:-1:-1;;;;;8398:26:7;;;;8442:28;;8334:46;:150::i;1814:119:32:-;1876:7;1903:22;1914:1;1917;1920:4;1903:10;:22::i;:::-;1895:31;1814:119;-1:-1:-1;;;1814:119:32:o;9283:2118:5:-;9557:29;;-1:-1:-1;;;;;9557:29:5;9698:309;:284;9557:29;9862:20;:13;9878:4;9862:20;:::i;:::-;9719:36;;-1:-1:-1;;;;;9719:36:5;;9698:284;9933:13;9964:4;9698:102;:284::i;:309::-;9659:36;:348;;-1:-1:-1;;;;;;9659:348:5;-1:-1:-1;;;;;9659:348:5;;;;;;;;;;10155:31;:19;:29;:31::i;:::-;10125:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;10125:61:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10125:61:5;;;;;-1:-1:-1;;;;;10125:61:5;;;;;;10225:30;:18;:28;:30::i;:::-;10196:12;:59;;:25;;:59;;;;-1:-1:-1;;;10196:59:5;;-1:-1:-1;;;;;10196:59:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10196:59:5;;;;;-1:-1:-1;;;;;10196:59:5;;;;;;10286:25;:13;:23;:25::i;:::-;10265:46;;;;:::i;:::-;10321:29;:49;;-1:-1:-1;;;;;;10321:49:5;-1:-1:-1;;;;;10321:49:5;;;;;-1:-1:-1;10684:51:5;;;:12;:51;;;;;10786:23;;10321:49;;-1:-1:-1;10684:51:5;-1:-1:-1;;;10786:23:5;;;;;10848:98;10893:40;:19;10921:11;10893:27;:40::i;:::-;10849:29;10865:13;10849:1;:29;:::i;:::-;:84;;;;:::i;10848:98::-;10956:52;;10820:126;;-1:-1:-1;10820:126:5;;10956:10;;:23;;:52;;10820:126;;-1:-1:-1;;;10956:52:5;;;;;:::i;:::-;;;-1:-1:-1;;;;;10956:52:5;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;11064:23:5;;11018:70;;10956:52;11018:70;;;;-1:-1:-1;;;11064:23:5;;;;11018:19;:70::i;:::-;11187:23;11198:11;11187:10;:23::i;:::-;11182:106;;11233:44;;-1:-1:-1;;;11233:44:5;;;;;;;;;;;11182:106;11360:34;11382:11;11360:21;:34::i;:::-;9519:1882;;;;9283:2118;;;;;;:::o;1198:469:31:-;1309:10;-1:-1:-1;;;;;1401:10:31;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:31;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:31;1620:18;;;;1617:34;;1198:469::o;9971:314:39:-;10088:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;10088:23:39;;;;;;;;;:33;;10115:6;;10088:19;:33;;10115:6;;10088:33;:::i;:::-;;;;-1:-1:-1;;10131:21:39;;;;:12;:21;;;;;:31;;10156:6;;10131:21;:31;;10156:6;;10131:31;:::i;:::-;;;;-1:-1:-1;;10219:59:39;;;3572:25:165;;;3628:2;3613:18;;3606:34;;;-1:-1:-1;;;;;10219:59:39;;;10254:1;;10234:10;;10219:59;;3545:18:165;10219:59:39;;;;;;;;9971:314;;;:::o;5568:1565::-;-1:-1:-1;;;;;5780:18:39;;;;:38;;-1:-1:-1;;;;;;5802:16:39;;;5780:38;5776:98;;;5839:35;;-1:-1:-1;;;5839:35:39;;;;;;;;;;;5776:98;5983:4;-1:-1:-1;;;;;5973:14:39;:6;-1:-1:-1;;;;;5973:14:39;;5969:871;;-1:-1:-1;;;;;6123:23:39;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;6118:712;;6232:16;6251:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;6251:33:39;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;6367:29:39;;6363:453;;6746:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;6746:33:39;;;;;;;;;;;:41;;;;;;;;;;:51;;6791:6;;6746:27;:51;;6791:6;;6746:51;:::i;:::-;;;;-1:-1:-1;;6363:453:39;6156:674;6118:712;6984:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6984:25:39;;;;;;;;;:35;;7013:6;;6984:19;:35;;7013:6;;6984:35;:::i;:::-;;;;-1:-1:-1;;7029:19:39;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;7029:23:39;;;;;;;;;:33;;7056:6;;7029:19;:33;;7056:6;;7029:33;:::i;:::-;;;;-1:-1:-1;;7077:49:39;;;3572:25:165;;;3628:2;3613:18;;3606:34;;;-1:-1:-1;;;;;7077:49:39;;;;;;;;;;;;;;3545:18:165;7077:49:39;;;;;;;5568:1565;;;;;:::o;640:190:34:-;693:9;-1:-1:-1;;;720:1:34;:12;714:86;;756:33;;-1:-1:-1;;;756:33:34;;;;;;;;;;;714:86;-1:-1:-1;821:1:34;640:190::o;4089:611:33:-;4320:20;;4429:35;:17;4455:8;4429:25;:35::i;:::-;4417:47;-1:-1:-1;4550:143:33;4627:52;4655:23;150:4:32;4665:12:33;4655:9;:23::i;:::-;4634:15;:4;4647:1;4634:12;:15::i;:::-;4628:21;;150:4:32;4628:21:33;:::i;:::-;4627:27;;:52::i;:::-;4550:51;:18;4577:23;4550:26;:51::i;:::-;:59;;:143::i;:::-;4531:162;;;4089:611;;;;;;;;:::o;9980:1203:133:-;10099:21;10262:11;;10253:6;:20;:43;;10290:6;10253:43;;;10276:11;;10253:43;10244:52;-1:-1:-1;10367:14:133;-1:-1:-1;;10403:10:133;-1:-1:-1;;;;;10395:26:133;;10391:162;;-1:-1:-1;10446:21:133;10391:162;;;10507:35;;-1:-1:-1;;;10507:35:133;;10536:4;10507:35;;;14278:51:165;10507:10:133;-1:-1:-1;;;;;10507:20:133;;;;14251:18:165;;10507:35:133;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;10498:44;;10391:162;10619:11;;10634:1;10619:16;:90;;10708:1;10619:90;;;10650:43;10665:27;10680:11;;10665:6;:14;;:27;;;;:::i;:::-;10650:6;;:14;:43::i;:::-;10603:106;;10813:6;10798:11;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;10829:12:133;;-1:-1:-1;;;10863:10:133;-1:-1:-1;;;;;10855:26:133;;10851:212;;10911:53;;-1:-1:-1;;;;;10911:25:133;;;10945:13;;10911:53;;;;10945:13;10911:25;:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10897:67;;;;;10851:212;;;11005:47;;-1:-1:-1;;;11005:47:133;;-1:-1:-1;;;;;14721:32:165;;;11005:47:133;;;14703:51:165;14770:18;;;14763:34;;;11005:10:133;:19;;;;14676:18:165;;11005:47:133;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;10995:57;;10851:212;11077:7;11072:74;;11107:28;;-1:-1:-1;;;11107:28:133;;;;;;;;;;;11072:74;11156:20;;9980:1203;;;;;:::o;11189:555::-;11279:18;;-1:-1:-1;;11409:10:133;-1:-1:-1;;;;;11401:26:133;;11397:162;;-1:-1:-1;11452:21:133;11397:162;;;11513:35;;-1:-1:-1;;;11513:35:133;;11542:4;11513:35;;;14278:51:165;11513:10:133;-1:-1:-1;;;;;11513:20:133;;;;14251:18:165;;11513:35:133;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;11504:44;;11397:162;11687:11;;11702:1;11687:16;:50;;11736:1;11687:50;;;11721:11;;11706:27;;:6;;:14;:27::i;:::-;11674:63;;11303:441;11189:555;:::o;22173:1546:4:-;22382:12;:34;;-1:-1:-1;;;;;;;;;;;22382:34:4;22537:13;:29;-1:-1:-1;;;22357:22:4;22464:70;;;;;22357:22;;22464:102;;-1:-1:-1;;;;;22537:29:4;;;;22464:102;:::i;:::-;22426:140;-1:-1:-1;22576:21:4;22600:44;22426:140;22600:14;:44;:::i;:::-;22576:68;;22654:20;22677:95;22727:35;22750:11;22727:22;:35::i;:::-;22677:36;:95::i;:::-;22654:118;-1:-1:-1;22782:21:4;22806:88;:14;22654:118;22871:13;22806:25;:88::i;:::-;22782:112;;23252:26;23292:12;23307:40;23335:11;23307:27;:40::i;:::-;23292:55;;23368:13;23361:4;:20;23357:92;;;23418:20;23425:13;23418:4;:20;:::i;:::-;23397:41;;23357:92;23483:1;23462:18;:22;:43;;;-1:-1:-1;23488:17:4;;23462:43;23458:255;;;23521:181;23564:18;23600:12;23630:13;23661:27;23521:25;:181::i;:::-;22234:1485;;;;;;;22173:1546;:::o;10552:330:39:-;10681:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;10681:25:39;;;;;;;;;:35;;10710:6;;10681:19;:35;;10710:6;;10681:35;:::i;:::-;;;;-1:-1:-1;;10726:21:39;;;;:12;:21;;;;;:31;;10751:6;;10726:21;:31;;10751:6;;10726:31;:::i;:::-;;;;-1:-1:-1;;10814:61:39;;;3572:25:165;;;3628:2;3613:18;;3606:34;;;10855:1:39;;-1:-1:-1;;;;;10814:61:39;;;10829:10;;10814:61;;3545:18:165;10814:61:39;3398:248:165;984:556:32;1100:9;1365:1;-1:-1:-1;;1348:19:32;1345:1;1342:26;1339:1;1335:34;1328:42;1315:11;1311:60;1284:146;;1414:1;1411;1404:12;1284:146;-1:-1:-1;1501:9:32;;1497:27;;984:556::o;3455:503:39:-;3650:34;;;3669:4;3650:34;;;;14703:51:165;;;;14770:18;;;14763:34;;;;3650::39;;;;;;;;;14676:18:165;;;;3650:34:39;;3640:45;;;;;;;;;-1:-1:-1;;;;;;3822:63:39;;;18439:39:165;3853:8:39;18511:15:165;;;-1:-1:-1;;18507:53:165;18494:11;;;18487:74;18577:12;;;18570:28;3869:15:39;18614:12:165;;;;18607:28;;;;3822:63:39;;;;;;;;;;18651:12:165;;;;3822:63:39;;;3799:96;;;;;;3455:503::o;9407:299::-;9553:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;9553:35:39;;;;;;;;;;;;:45;;;;;;;;;;;;;:54;;;9665:34;;5955:25:165;;;9553:35:39;;9665:34;;5928:18:165;9665:34:39;;;;;;;9407:299;;;;:::o;1112:1260:8:-;1199:7;:21;-1:-1:-1;;;;;;;;1199:21:8;;;;;1254:12;1361:15;1332:26;1348:10;1199:21;1332:26;:::i;:::-;:44;1328:81;;;1392:7;;1112:1260;:::o;1328:81::-;1465:27;1495:7;1503:4;1495:13;;;;;;;;:::i;:::-;;;;;;;;;1549:18;;1495:13;;-1:-1:-1;1549:18:8;;;;1608:13;;;;-1:-1:-1;;;;;1608:13:8;;1674:30;1549:18;1674:15;:30;:::i;:::-;2101:7;:14;1658:46;;-1:-1:-1;1943:13:8;;;:27;;;1892:11;;2080:17;2088:4;2096:1;2080:17;:::i;:::-;2079:36;;;;:::i;:::-;2060:55;;2194:49;;;;;;;;2212:15;2194:49;;;;;;2238:3;-1:-1:-1;;;;;2194:49:8;;;;2174:7;2182:8;2174:17;;;;;;;;:::i;:::-;;;;;;;;;;:69;;;;;;-1:-1:-1;;;;;2174:69:8;;;;;;;;;;;:17;;:69;;;;2263:102;;;;;;;;;-1:-1:-1;;;;;2263:102:8;;;;;;2339:15;2263:102;;;;;;;;-1:-1:-1;;;2253:112:8;;:7;:112;-1:-1:-1;;;;;;;;1112:1260:8:o;8691:1028:163:-;8827:19;;;8947:23;:5;8961:8;8947:13;:23::i;:::-;8922:48;;8980:10;8993:56;9034:14;9008:1;9001:4;:8;:23;;9020:4;9001:23;;;9012:5;9013:4;9012:5;:::i;8993:56::-;8980:69;;9071:1;9064:4;:8;9060:621;;;9102:89;9146:30;9172:2;9146:18;:30::i;:::-;9102:10;;:18;:89::i;:::-;9088:103;-1:-1:-1;9223:24:163;9237:10;9088:103;9223:24;:::i;:::-;9205:43;;9262:30;;;;9060:621;9320:1;9313:4;:8;9309:372;;;9472:89;9516:30;9542:2;9516:18;:30::i;:::-;9472:10;;:18;:89::i;:::-;9458:103;-1:-1:-1;9586:40:163;9615:10;9458:103;9586:40;:::i;9309:372::-;-1:-1:-1;9698:10:163;;9710:1;;-1:-1:-1;8691:1028:163;-1:-1:-1;;;;8691:1028:163:o;6709:368:7:-;6802:21;6835:24;6862:19;:17;:19::i;:::-;6835:46;;6923:16;6907:13;:32;:95;;7001:1;6907:95;;;6954:32;6970:16;6954:13;:32;:::i;:::-;6891:111;-1:-1:-1;7028:42:7;6891:111;7052:17;7028:23;:42::i;19765:6067:6:-;19937:25;19976:21;20011:26;20051:23;20088:27;20129:26;20849:21;20873:38;20897:13;20873:23;:38::i;:::-;20849:62;;21046:289;21098:25;:23;:25::i;:::-;21141:12;:25;-1:-1:-1;;;21141:25:6;;-1:-1:-1;;;;;21141:25:6;21184:11;21213:13;21244:12;21274:11;21303:18;21046:34;:289::i;:::-;20925:410;;-1:-1:-1;20925:410:6;-1:-1:-1;20925:410:6;-1:-1:-1;21389:17:6;21409:199;21460:25;:23;:25::i;21409:199::-;21389:219;;21622:22;21634:9;21622:11;:22::i;:::-;21899:11;21970;21878:18;;;;22201:177;21899:11;22284:13;22319:9;21970:11;22201:29;:177::i;:::-;22020:358;;;;;;;;22434:17;22413:18;:38;;;;:::i;:::-;22392:59;-1:-1:-1;23150:34:6;23166:18;23150:13;:34;:::i;:::-;23131:53;;;;:::i;:::-;;-1:-1:-1;23524:28:6;23540:12;23524:13;:28;:::i;:::-;23502:50;;;;:::i;:::-;;;20401:3162;;;;;;;;23720:22;23745:12;:77;23791:17;23775:13;:33;;;;:::i;:::-;23745:77;;;;;;;;;;;-1:-1:-1;23745:77:6;;;:88;-1:-1:-1;;;;;23745:88:6;;-1:-1:-1;23873:15:6;:31;-1:-1:-1;23873:118:6;;23953:27;;;;:12;:27;;;;;:38;-1:-1:-1;;;;;23953:38:6;23873:118;;;23923:11;23873:118;23847:144;;24556:236;24611:11;24640:18;24676:14;24708:15;24741:11;24770:8;24556:37;:236::i;:::-;24540:252;-1:-1:-1;24998:40:6;25020:18;24998:40;;:::i;:::-;;;25530:285;25595:13;25626:18;25662:15;25695:18;25731:14;25763:15;25796:5;25530:47;:285::i;:::-;19765:6067;;25339:476;;-1:-1:-1;25339:476:6;;-1:-1:-1;25339:476:6;-1:-1:-1;25339:476:6;;-1:-1:-1;19765:6067:6;-1:-1:-1;;;;;;19765:6067:6:o;13387:1212::-;13707:30;;-1:-1:-1;;;13707:30:6;;-1:-1:-1;;;;;13707:30:6;13791:337;:308;13707:30;13968:20;:13;13984:4;13968:20;:::i;:::-;13816:37;;-1:-1:-1;;;13816:37:6;;-1:-1:-1;;;;;13816:37:6;;;14043:11;14076:5;13791:115;:308::i;:337::-;13751:37;:377;;-1:-1:-1;;;;;13751:377:6;;;-1:-1:-1;;;13751:377:6;;;;;;;;;14287:23;:11;:21;:23::i;:::-;14250:60;;:18;:60;:::i;:::-;14201:30;:109;;-1:-1:-1;;;;;14201:109:6;;;-1:-1:-1;;;14201:109:6;;;;;;;;;-1:-1:-1;14418:31:6;:19;:29;:31::i;:::-;14388:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;14388:61:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;14388:61:6;;;;;-1:-1:-1;;;;;14388:61:6;;;;;;14491:32;:21;:30;:32::i;:::-;14459:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;14459:64:6;;;;;;;-1:-1:-1;;;;;14459:64:6;;;;;;14562:30;:18;:28;:30::i;:::-;14533:12;:59;;:25;;:59;;;;-1:-1:-1;;;14533:59:6;;-1:-1:-1;;;;;14533:59:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;14533:59:6;;;;;-1:-1:-1;;;;;14533:59:6;;;;;;13387:1212;;;;;:::o;8388:1713:2:-;8676:22;8701:33;8717:17;8701:13;:33;:::i;:::-;8676:58;;8744:23;8770:12;:100;8796:64;8818:26;8846:13;8796:21;:64::i;:::-;8770:100;;;;;;;;;;;;8744:126;;8880:24;8907:12;:101;8933:65;8955:27;8984:13;8933:21;:65::i;:::-;8907:101;;;;;;;;;;;;8880:128;;9102:15;9121:1;9102:20;:45;;;;-1:-1:-1;9126:21:2;;9102:45;9098:997;;;9207:1;9163:28;;;:12;:28;;;;;:45;;-1:-1:-1;;;;;9163:45:2;;;9098:997;;;9443:12;9482:212;9670:11;9607:40;:19;9635:11;9607:27;:40::i;:::-;9583:64;;:1;:64;:::i;:::-;9542:18;9483:36;:15;9507:11;9483:23;:36::i;:::-;:77;;;;:::i;:::-;:164;;;;:::i;:::-;:198;;;;:::i;9482:212::-;9443:265;;9904:7;9900:185;;;9931:28;;;;:12;:28;;;;;:50;;9976:5;;9931:28;:41;;:50;;9976:5;;-1:-1:-1;;;9931:50:2;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;9931:50:2;;;;;;;-1:-1:-1;;;;;9931:50:2;;;;;;9900:185;;;10020:28;;;;:12;:28;;;;;:50;;10065:5;;10020:28;:41;;:50;;10065:5;;-1:-1:-1;;;10020:50:2;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10020:50:2;;;;;;;-1:-1:-1;;;;;10020:50:2;;;;;;9900:185;9225:870;8666:1435;;;8388:1713;;;;;;;:::o;10272:874::-;10425:6;10415:7;:16;:32;;;;;10446:1;10435:7;:12;;10415:32;10411:729;;;10463:12;10495:13;:6;10463:12;10495:10;:13::i;:::-;10485:23;;:7;:23;:::i;:::-;10691:25;;10463:46;;-1:-1:-1;10674:55:2;;:44;;10463:46;;-1:-1:-1;;;10691:25:2;;-1:-1:-1;;;;;10691:25:2;10674:44;;:9;:44::i;:::-;:53;:55::i;:::-;10620:25;:123;;:25;;:123;;;;-1:-1:-1;;;10620:123:2;;-1:-1:-1;;;;;10620:123:2;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10620:123:2;;;;;-1:-1:-1;;;;;10620:123:2;;;;;;10449:305;1988:1472:1;1927:1533;:::o;10411:729:2:-;10841:7;10832:6;:16;10828:312;;;10879:1;10868:7;:12;10864:266;;10978:18;:7;:16;:18::i;:::-;10958:17;:6;:15;:17::i;:::-;:38;;;;:::i;:::-;10900:25;:114;;:25;;:114;;;;-1:-1:-1;;;10900:114:2;;-1:-1:-1;;;;;10900:114:2;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10900:114:2;;;;;-1:-1:-1;;;;;10900:114:2;;;;;;1988:1472:1;1927:1533;:::o;10864:266:2:-;11090:24;:13;:6;11101:1;11090:10;:13::i;15478:3325:4:-;15661:19;15684:1;15661:24;15657:61;;15478:3325;:::o;15657:61::-;15949:12;:26;-1:-1:-1;;;;;15949:26:4;16005:21;15989:37;;15985:109;;;16049:34;;-1:-1:-1;;;16049:34:4;;;;;;;;;;;15985:109;16263:27;16293:55;16329:19;16300:13;16293:55;:::i;:::-;16263:85;;16392:21;16362:20;:52;16358:124;;;16437:34;;-1:-1:-1;;;16437:34:4;;;;;;;;;;;16358:124;16520:41;16528:20;16520:39;:41::i;:::-;16491:12;:70;;-1:-1:-1;;;;;;16491:70:4;-1:-1:-1;;;;;16491:70:4;;;;;;;;;;17137:28;;-1:-1:-1;;17137:28:4;;17179:20;;;17175:488;;17264:139;17272:20;17334:15;17372:13;17264:40;:139::i;:::-;17215:202;;17175:488;;;17498:140;17568:16;17569:15;17568:16;:::i;:::-;17506:20;;17607:13;17498:40;:140::i;:::-;17473:179;;;:::i;:::-;17448:204;;17175:488;17703:33;:22;:31;:33::i;:::-;17672:28;:64;;-1:-1:-1;;;;;;17672:64:4;-1:-1:-1;;;;;17672:64:4;;;;;;:12;18578:25;18376:420;;:395;;-1:-1:-1;;;18578:25:4;;;18621:136;18689:13;18724:15;18621:46;:136::i;:::-;18376:160;18461:20;18500:22;18376:59;:160::i;:420::-;18348:12;:448;;-1:-1:-1;;;;;18348:448:4;;;-1:-1:-1;;;18348:448:4;;;;;;;;;-1:-1:-1;;;;;15478:3325:4:o;18315:2337:2:-;18547:21;;;;19366:34;19390:10;565:4:32;19366:34:2;:::i;:::-;19350:50;-1:-1:-1;19426:141:2;19529:24;19555:11;19426:78;19493:10;19426:45;19350:50;19461:9;19426:34;:45::i;:141::-;19410:157;-1:-1:-1;19767:37:2;19410:157;19789:14;19767:21;:37::i;:::-;19746:58;-1:-1:-1;20234:12:2;20249:118;20284:48;20308:24;565:4:32;20284:48:2;:::i;:::-;20249:10;;20346:11;20249:21;:118::i;:::-;20234:133;-1:-1:-1;20392:22:2;20234:133;20405:8;20392:12;:22::i;:::-;20377:37;-1:-1:-1;20609:36:2;20377:37;20630:14;20609:20;:36::i;:::-;20589:56;;18696:1956;18315:2337;;;;;;;;;:::o;15166:3749:6:-;15339:21;15374:26;15414;15702:229;15749:25;:23;:25::i;:::-;15788:12;:25;-1:-1:-1;;;15788:25:6;;-1:-1:-1;;;;;15788:25:6;15827:11;15852:12;15878:11;15903:18;15702:33;:229::i;:::-;15681:250;-1:-1:-1;16192:11:6;16150:39;15681:250;16177:11;16150:26;:39::i;:::-;:53;16146:121;;;16226:30;;-1:-1:-1;;;16226:30:6;;;;;;;;;;;16146:121;16538:17;16558:179;16605:25;:23;:25::i;16558:179::-;16538:199;;16824:22;16836:9;16824:11;:22::i;:::-;17014:21;17173:197;17216:11;565:4:32;17326:9:6;17349:11;17173:29;:197::i;:::-;17045:325;-1:-1:-1;17045:325:6;;-1:-1:-1;17796:34:6;;-1:-1:-1;17045:325:6;;17796:34;:::i;:::-;17774:56;;;;:::i;:::-;;-1:-1:-1;18323:512:6;18823:11;18323:478;18391:11;18610:39;18631:18;17774:56;18610:39;:::i;:::-;18667:15;18700:32;:11;18667:15;18700;:32::i;:::-;18750:11;18779:8;18323:50;:478::i;:512::-;18307:528;;18846:62;;15166:3749;;;;;;;:::o;9893:3005::-;10293:30;;10172:312;;:287;;-1:-1:-1;;;10293:30:6;;-1:-1:-1;;;;;10293:30:6;10341:20;:13;10357:4;10341:20;:::i;:::-;10193:37;;-1:-1:-1;;;10193:37:6;;-1:-1:-1;;;;;10193:37:6;;;10412:11;10441:4;10172:103;:287::i;:312::-;10132:37;:352;;-1:-1:-1;;;;;10132:352:6;;;-1:-1:-1;;;10132:352:6;;;;;;;;;-1:-1:-1;10844:31:6;:19;:29;:31::i;:::-;10803:12;:26;:72;;;-1:-1:-1;;;;;10803:26:6;:72;:::i;:::-;10885:12;:43;;-1:-1:-1;;;;;;10885:43:6;-1:-1:-1;;;;;10885:43:6;;;;;;-1:-1:-1;10967:23:6;:11;:21;:23::i;:::-;10938:12;:52;;:25;;:52;;;;-1:-1:-1;;;10938:52:6;;-1:-1:-1;;;;;10938:52:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10938:52:6;;;;;-1:-1:-1;;;;;10938:52:6;;;;;;11034:23;:11;:21;:23::i;:::-;11000:30;:57;;:30;;:57;;;;-1:-1:-1;;;11000:57:6;;-1:-1:-1;;;;;11000:57:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;11000:57:6;;;;;;;;;;;;;;;11659:28;;:12;11616:26;11659:28;;;;;11616:26;;11601:86;11584:180;;-1:-1:-1;11584:180:6;;11719:34;;-1:-1:-1;;;11719:34:6;;;;;;;;;;;11584:180;11856:25;11884:19;:17;:19::i;:::-;11913:31;11967;;;:12;:31;;;;;:44;11856:47;;-1:-1:-1;;;;11967:44:6;;;;12099:23;:11;:21;:23::i;:::-;12031:31;;;;:12;:31;;;;;:101;;:44;;:101;;;;-1:-1:-1;;;12031:101:6;;;;;:::i;:::-;;;-1:-1:-1;;;;;12031:101:6;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;12213:31:6;;;:12;:31;;;;;:44;12142:125;;12031:101;12142:125;;;;-1:-1:-1;;;12213:44:6;;;;12142:19;:125::i;:::-;12684:23;12695:11;12684:10;:23::i;:::-;12679:106;;12730:44;;-1:-1:-1;;;12730:44:6;;;;;;;;;;;12679:106;12857:34;12879:11;12857:21;:34::i;15102:2464:2:-;15333:21;;;;16118:34;16142:10;565:4:32;16118:34:2;:::i;:::-;16097:55;-1:-1:-1;16178:137:2;16277:24;16303:11;16178:74;16242:9;16178:42;16097:55;16210:9;16178:31;:42::i;:137::-;16162:153;-1:-1:-1;16515:37:2;16162:153;16537:14;16515:21;:37::i;:::-;16494:58;-1:-1:-1;16982:12:2;16997:117;17031:48;17055:24;565:4:32;17031:48:2;:::i;16997:117::-;16982:132;-1:-1:-1;17139:22:2;16982:132;17152:8;17139:12;:22::i;:::-;17124:37;-1:-1:-1;17523:36:2;17124:37;17544:14;17523:20;:36::i;:::-;17501:58;;;;:::i;:::-;;;15443:2123;;15102:2464;;;;;;;;:::o;11297:490::-;11453:25;;11392:18;;;;11445:77;;-1:-1:-1;;;11453:25:2;;-1:-1:-1;;;;;11453:25:2;11501:11;11445:42;:77::i;:::-;11422:100;-1:-1:-1;11565:36:2;11580:21;11422:100;11565:36;:::i;:::-;11536:12;:26;-1:-1:-1;;;;;11536:26:2;:65;11532:222;;;11646:12;:26;11722:21;;11646:57;;11691:12;;-1:-1:-1;;;;;11646:26:2;:57;:::i;:::-;:97;;;;:::i;11532:222::-;11763:17;11297:490;;;:::o;19443:2515:4:-;19668:21;19691:7;20048:59;20110:35;20133:11;20110:22;:35::i;:::-;20048:97;;20155:28;20186:66;20236:6;20186:36;:66::i;:::-;20155:97;;20278:45;20306:16;:14;:16::i;:::-;20278:27;:45::i;:::-;20262:61;-1:-1:-1;20349:55:4;20262:61;20374:7;20383:20;20349:24;:55::i;:::-;20333:71;-1:-1:-1;20414:40:4;20431:22;20333:71;20431:22;:::i;:::-;20414:16;:40::i;:::-;20487:12;:26;-1:-1:-1;;;;;20487:26:4;;;20464:49;;20548:28;;;;20523:22;;;:53;-1:-1:-1;;;20608:25:4;;;;20586:19;;;:47;20487:26;20672:66;20464:6;20672:36;:66::i;:::-;20643:95;-1:-1:-1;21012:23:4;21058:67;:14;20643:95;21104:20;21058:25;:67::i;:::-;21012:123;-1:-1:-1;21165:40:4;21197:7;21172:14;21165:40;:::i;:::-;21145:60;;;;:::i;:::-;;;21238:1;21219:16;:20;21215:677;;;21412:29;21444:121;21501:17;21502:16;21501:17;:::i;:::-;21444:20;;21537:14;21444:31;:121::i;:::-;21412:153;-1:-1:-1;21579:38:4;21412:153;21579:38;;:::i;:::-;;;21631:47;21655:21;21631:16;:47::i;:::-;21692:152;21734:21;21773:28;21819:11;21692:24;:152::i;:::-;21858:23;;;21241:651;21215:677;21933:16;-1:-1:-1;;;;19443:2515:4;;;;;;;;:::o;2312:782:33:-;2548:11;2784:17;2804:150;2836:23;2873:13;2900:18;2932:12;2804:18;:150::i;:::-;2784:170;-1:-1:-1;2983:104:33;3026:47;2784:170;3045:17;3064:8;3026:18;:47::i;:::-;2984:15;2990:9;150:4:32;2984:15:33;:::i;:::-;2983:25;;:104::i;8679:1001:7:-;8793:53;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8793:53:7;8877:796;;;;;;;;8940:12;:26;-1:-1:-1;;;;;8940:26:7;;;8877:796;;8997:28;;;;8877:796;;;;-1:-1:-1;;;9053:25:7;;;;;8877:796;;;;;;;;;;;;;9148:18;8877:796;;;;9202:21;8877:796;;;;9250:12;8877:796;;;;9294:29;;;;8877:796;;;;9410:36;;8877:796;;8940:26;8877:796;;;9363:97;;9410:36;9363:29;:97::i;:::-;8877:796;;9493:30;;-1:-1:-1;;;;;;;;9493:30:7;;;;;;8877:796;;;;9611:37;;8877:796;;;;;9564:98;;9611:37;;;9564:29;:98::i;:::-;8877:796;;8862:811;8679:1001;-1:-1:-1;;8679:1001:7:o;58989:5242:33:-;59092:7;59242:20;59400:106;59455:7;:33;;;59400:7;:25;;;:33;;:106;;;;:::i;:::-;59318:32;;;;59285:24;;;;:66;;:32;:66::i;:::-;59265:255;;;;:::i;:::-;59242:278;;59530:30;59563:113;59608:7;:21;;;59643:7;:23;;;59563:31;:113::i;:::-;59530:146;;59706:1;59690:13;:17;59686:3447;;;60378:21;60403:291;60452:22;60492:7;:20;;;60530:7;:28;;;60582:7;:19;;;150:4:32;60576:25:33;;;;:::i;:::-;60619:7;:18;;;60655:7;:25;;;60403:31;:291::i;:::-;60375:319;-1:-1:-1;60724:41:33;;-1:-1:-1;60375:319:33;60750:13;60724:17;:41::i;:::-;60708:57;-1:-1:-1;60834:17:33;;60830:448;;60896:367;60988:22;61036:7;:20;;;61082:13;61127:7;:19;;;150:4:32;61121:25:33;;;;:::i;:::-;61172:7;:18;;;61216:7;:25;;;60896:66;:367::i;:::-;60871:392;;:7;;:392;;;;;:::i;:::-;;;-1:-1:-1;60830:448:33;59709:1579;59686:3447;;;61314:1;61298:13;:17;61294:1839;;;62119:14;62120:13;62119:14;:::i;:::-;62103:30;;62197:21;62222:244;62270:22;62310:7;:20;;;62354:7;:19;;;150:4:32;62348:25:33;;;;:::i;:::-;62391:7;:18;;;62427:7;:25;;;62222:30;:244::i;:::-;62194:272;-1:-1:-1;62496:41:33;;-1:-1:-1;62194:272:33;62522:13;62496:17;:41::i;:::-;62480:57;-1:-1:-1;62602:17:33;;62598:448;;62664:367;62756:22;62804:7;:20;;;62850:13;62895:7;:19;;;150:4:32;62889:25:33;;;;:::i;:::-;62940:7;:18;;;62984:7;:25;;;62664:66;:367::i;:::-;62639:392;;:7;;:392;;;;;:::i;:::-;;;-1:-1:-1;62598:448:33;63084:38;63109:13;63092;63084:38;:::i;:::-;63059:63;;:7;;:63;;;;;:::i;:::-;;;-1:-1:-1;;61294:1839:33;63266:19;63500:153;63563:7;:32;;;150:4:32;63557:38:33;;;;:::i;:::-;63617:18;;;;63500:24;;;;;:153;:35;:153::i;:::-;63308:143;63368:7;:33;;;150:4:32;63362:39:33;;;;:::i;:::-;63419:18;;;;63308:25;;;;;:143;:36;:143::i;:::-;63288:379;;;;:::i;:::-;63266:401;;63677:27;63751:12;63714:7;:21;;;63707:56;;;;:::i;:::-;63677:86;;63807:7;:28;;;63777:20;:59;63773:131;;;63859:34;;-1:-1:-1;;;63859:34:33;;;;;;;;;;;63773:131;63913:53;;;64196:28;;;;64172:52;;63945:20;64172:52;:::i;:::-;64165:59;58989:5242;-1:-1:-1;;;;;;58989:5242:33:o;7277:444:7:-;7376:21;7409:24;565:4:32;7436:19:7;:17;:19::i;:::-;:43;;;;:::i;:::-;7409:70;;7521:16;7505:13;:32;:95;;7599:1;7505:95;;;7552:32;7568:16;7552:13;:32;:::i;:::-;7489:111;-1:-1:-1;7626:88:7;7663:41;565:4:32;7663:17:7;:41;:::i;:::-;7627:13;;7626:23;:88::i;12874:1582:2:-;13051:21;;14035:177;14202:9;14035:145;14168:11;14035:145;14136:9;565:4:32;14036:41:2;565:4:32;14066:10:2;14036:29;:41::i;:::-;:77;;;;:::i;14035:177::-;14019:193;-1:-1:-1;14412:37:2;14019:193;14434:14;14412:21;:37::i;:::-;14391:58;;12874:1582;;;;;;:::o;19075:4703:5:-;19246:25;19285:21;19320:26;19360:23;19397:27;19438:26;20112:21;20136:38;20160:13;20136:23;:38::i;:::-;20112:62;;20242:337;20314:25;:23;:25::i;:::-;20361:12;:25;-1:-1:-1;;;20361:25:5;;-1:-1:-1;;;;;20361:25:5;20408:11;20441:13;20476:12;20510:11;20543:18;20242:50;:337::i;:::-;20188:391;;-1:-1:-1;20188:391:5;-1:-1:-1;20188:391:5;-1:-1:-1;20634:17:5;20654:199;20705:25;:23;:25::i;20654:199::-;20634:219;;20867:22;20879:9;20867:11;:22::i;:::-;21130:21;21165:20;21343:159;21390:11;21419:13;21450:9;21477:11;21343:29;:159::i;:::-;21199:303;-1:-1:-1;21199:303:5;;-1:-1:-1;21199:303:5;-1:-1:-1;21737:32:5;21199:303;21737:32;;:::i;:::-;;-1:-1:-1;21980:28:5;21996:12;21980:13;:28;:::i;:::-;21963:45;;;;:::i;:::-;;-1:-1:-1;22392:34:5;22408:18;21963:45;22392:34;:::i;:::-;22371:55;;19677:2760;;;;22884:887;22945:13;22972:18;23004:15;23033:18;23512:12;:47;23541:17;23525:13;:33;;;;:::i;:::-;23512:47;;;;;;;;;;;-1:-1:-1;23512:47:5;:58;-1:-1:-1;;;;;23512:58:5;23604:15;:31;-1:-1:-1;23604:118:5;;23684:27;;;;:12;:27;;;;;:38;-1:-1:-1;;;;;23684:38:5;23604:118;;;23654:11;23604:118;23757:4;22884:47;:887::i;:::-;19075:4703;;22717:1054;;-1:-1:-1;22717:1054:5;;-1:-1:-1;22717:1054:5;-1:-1:-1;22717:1054:5;;-1:-1:-1;19075:4703:5;-1:-1:-1;;;;19075:4703:5:o;11870:2273::-;12133:29;;-1:-1:-1;;;;;12133:29:5;12270:335;:306;12133:29;12445:20;:13;12461:4;12445:20;:::i;:::-;12295:36;;-1:-1:-1;;;;;12295:36:5;;12270:306;12520:11;12553:5;12270:114;:306::i;:335::-;12231:36;:374;;-1:-1:-1;;;;;;12231:374:5;-1:-1:-1;;;;;12231:374:5;;;;;;;;;;12759:23;:11;:21;:23::i;:::-;12723:59;;:17;:59;:::i;:::-;12675:29;:107;;-1:-1:-1;;;;;;12675:107:5;-1:-1:-1;;;;;12675:107:5;;;;;;;;;;-1:-1:-1;13344:31:5;:19;:29;:31::i;:::-;13314:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;13314:61:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13314:61:5;;;;;-1:-1:-1;;;;;13314:61:5;;;;;;13417:32;:21;:30;:32::i;:::-;13385:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13385:64:5;;;;;;;-1:-1:-1;;;;;13385:64:5;;;;;;13488:30;:18;:28;:30::i;:::-;13459:12;:59;;:25;;:59;;;;-1:-1:-1;;;13459:59:5;;-1:-1:-1;;;;;13459:59:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13459:59:5;;;;;;;;;;;;;;;13907:12;:26;13937:21;13907:26;;13899:59;;-1:-1:-1;13899:59:5;:161;;-1:-1:-1;14032:28:5;;:12;13989:26;14032:28;;;;;-1:-1:-1;;;;;13989:26:5;;;13974:86;13899:161;13882:255;;;14092:34;;-1:-1:-1;;;14092:34:5;;;;;;;;;;;2207:165:32;2269:7;2296:22;2307:1;2310:4;2316:1;2296:10;:22::i;7864:2095:1:-;8041:21;;8324:32;:11;8344;8324:19;:32::i;:::-;8308:48;-1:-1:-1;8366:15:1;8384:31;8308:48;8406:8;8384:21;:31::i;:::-;8366:49;-1:-1:-1;8441:31:1;8366:49;8457:14;8441:15;:31::i;:::-;8425:47;;8899:7;8895:557;;;8939:23;8949:13;8939:7;:23;:::i;:::-;8922:40;;;;:::i;:::-;;;8895:557;;;9418:23;9428:13;9418:7;:23;:::i;:::-;9401:40;;;;:::i;:::-;;;8895:557;9665:15;9651:11;:29;9647:306;;;9712:100;:13;9754:11;9783:15;9712:24;:100::i;:::-;9696:116;-1:-1:-1;9842:100:1;:13;9884:11;9913:15;9842:24;:100::i;:::-;9826:116;;9647:306;8087:1872;7864:2095;;;;;;;:::o;5385:642:33:-;5638:7;5758:262;5821:23;5862:13;5893:12;5923:18;5929:12;150:4:32;5923:18:33;:::i;:::-;5959:11;5988:18;5758:45;:262::i;:::-;5739:281;5385:642;-1:-1:-1;;;;;;;5385:642:33:o;1246:449::-;1441:17;1575:113;1675:12;1575:82;:18;1618:23;1643:13;1575:42;:82::i;68721:340::-;68856:7;;68907:53;68944:16;68914:14;68907:53;:::i;:::-;68875:85;;69004:1;68978:22;:27;;68970:36;;;;;13582:678:32;13776:15;13807:9;13803:451;;;13842:152;13949:27;13964:12;13949;:27;:::i;:::-;13892:28;:12;13913:6;13892:20;:28::i;:::-;13843:30;:12;13864:8;13843:20;:30::i;:::-;:77;;;;:::i;:::-;13842:85;;:152::i;:::-;13832:162;;13803:451;;;14045:12;14029;:28;14025:42;;-1:-1:-1;14066:1:32;14059:8;;14025:42;14091:152;14198:27;14213:12;14198;:27;:::i;:::-;14141:28;:12;14162:6;14141:20;:28::i;:::-;14092:30;:12;14113:8;14092:20;:30::i;:::-;:77;;;;:::i;12079:313:2:-;12143:4;12342:42;:21;12372:11;12342:29;:42::i;:::-;12285:25;;:12;12212:26;12178:141;;12317:1;;-1:-1:-1;;;;;;;;12285:25:2;;;;;12179:132;;;12204:56;;12212:26;12248:11;12204:43;:56::i;:::-;12179:132;;;;:::i;:::-;12178:138;;:141::i;:::-;:207;;;12079:313;-1:-1:-1;;12079:313:2:o;4141:115:32:-;4201:7;4228:20;4237:1;4240:4;4246:1;4228:8;:20::i;4671:846::-;4729:7;4795:1;4800;4795:6;4791:50;;-1:-1:-1;565:4:32;4817:13;;4791:50;4894:1;4899;4894:6;4890:45;;-1:-1:-1;4923:1:32;4916:8;;4890:45;5098:1;5073:15;5276:14;5287:1;5276:3;:14::i;:::-;5263:27;-1:-1:-1;5368:18:32;;;5405:22;565:4;5368:18;5405:22;:::i;:::-;;;5500:9;5504:4;5500:3;:9::i;25218:1730:4:-;25911:25;25955:1;25939:13;:17;:122;;26047:14;25939:122;;;25971:61;:14;25997:19;26018:13;25971:25;:61::i;:::-;25911:150;;26075:17;26096:1;26075:22;26071:35;;26099:7;;;26071:35;26314:17;26374:19;26407:48;;;26403:274;;;26488:28;;-1:-1:-1;26555:111:4;:19;26488:28;26635:17;26555:30;:111::i;:::-;26530:136;;26403:274;26719:26;:14;:24;:26::i;:::-;26686:13;:59;;:29;;:59;;;;-1:-1:-1;;;;;26686:59:4;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;26686:59:4;;;;;-1:-1:-1;;;;;26686:59:4;;;;;;26781:34;:22;:32;:34::i;:::-;26755:13;:60;;:22;;:60;;;;-1:-1:-1;;;26755:60:4;;-1:-1:-1;;;;;26755:60:4;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;26755:60:4;;;;;-1:-1:-1;;;;;26755:60:4;;;;;;26892:49;26917:22;26909:31;;;:::i;5773:3347:32:-;5819:8;-1:-1:-1;;5996:1:32;:26;5992:40;;-1:-1:-1;6031:1:32;;5773:3347;-1:-1:-1;5773:3347:32:o;5992:40::-;6231:21;6226:1;:26;6222:99;;6277:44;;-1:-1:-1;;;6277:44:32;;;;;;;;;;;6222:99;6594:7;6588:2;6583:7;;;6582:19;;-1:-1:-1;6930:8:32;7014:2;6954:29;6943:7;;;6942:41;-1:-1:-1;;;6942:51:32;6941:75;;7042:29;7038:33;;7034:37;;;-1:-1:-1;;7713:35:32;;7768:5;;7348:2;7767:13;;;7784:32;7766:50;7836:5;;7835:13;;-1:-1:-1;;7834:51:32;7905:5;;7904:13;;7921:34;7903:52;7975:5;;7974:13;;-1:-1:-1;;7973:53:32;8046:5;;8045:13;;8062:35;8044:53;7354:32;7287:31;7283:35;;7338:5;;7337:13;;7336:50;;;7411:5;;;-1:-1:-1;;7411:40:32;7471:5;7470:13;;;7487:35;7469:53;7540:5;;;-1:-1:-1;;;7540:50:32;8462:10;8999:49;8966:82;9081:3;:7;;;;8965:124;;;;;;-1:-1:-1;;5773:3347:32:o;10814:1571:33:-;11146:23;;;11822:100;11857:30;11863:24;150:4:32;11857:30:33;:::i;:::-;11822:10;;11901:11;11822:21;:100::i;:::-;11807:115;-1:-1:-1;11949:44:33;:10;11968:24;11949:18;:44::i;:::-;11932:61;-1:-1:-1;12007:18:33;;12003:376;;12059:264;12122:23;12163:13;12194:14;12226:18;12232:12;150:4:32;12226:18:33;:::i;:::-;12262:11;12291:18;12059:45;:264::i;:::-;12041:282;-1:-1:-1;12337:31:33;12041:282;12337:31;;:::i;:::-;;;12003:376;10814:1571;;;;;;;;;;;:::o;65520:1230::-;65762:21;;66104:186;66140:16;66246:34;:15;66268:11;66246:21;:34::i;:::-;66104:11;;:186;:22;:186::i;:::-;66083:207;-1:-1:-1;66511:45:33;:11;66534:8;66544:11;66511:22;:45::i;:::-;66497:59;;;;:::i;:::-;;;66584:12;66571:10;:25;66567:147;;;66678:25;66691:12;66678:10;:25;:::i;:::-;66662:41;;66567:147;66723:20;65520:1230;;;;;;;;:::o;14234:2717::-;14534:7;14543;14552;14561:6;14569:7;15503:27;15563:15;15544:16;:34;15540:1219;;;15779:7;15775:181;;;15823:118;:14;15870:16;15908:15;15823:25;:118::i;:::-;15806:135;;15775:181;16031:111;:19;16079:16;16113:15;16031:30;:111::i;:::-;16009:133;-1:-1:-1;16250:70:33;16303:16;16009:133;16250:70;:::i;:::-;16211:109;-1:-1:-1;16353:108:33;:16;16398;16432:15;16353:27;:108::i;:::-;16334:127;-1:-1:-1;16497:111:33;:19;16545:16;16579:15;16497:30;:111::i;:::-;16475:133;;15540:1219;;;16678:70;16731:16;16685:19;16678:70;:::i;:::-;16639:109;;15540:1219;16790:14;;16818:19;;16851:16;;14234:2717;-1:-1:-1;;;;;;;;14234:2717:33:o;994:219:34:-;1045:8;-1:-1:-1;;;;;;1071:21:34;;;;;:46;;-1:-1:-1;;;;;;1096:21:34;;;1071:46;1065:119;;1141:32;;-1:-1:-1;;;1141:32:34;;;;;;;;;;;15261:101:32;15317:6;15346:1;15342;:5;:13;;15354:1;15342:13;;;-1:-1:-1;15350:1:32;;15261:101;-1:-1:-1;15261:101:32:o;14987:::-;15043:6;15072:1;15068;:5;:13;;15080:1;15068:13;;9270:637:33;9521:7;9641:259;9704:23;9745:13;9776:9;9803:18;9809:12;150:4:32;9803:18:33;:::i;:::-;9839:11;9868:18;9641:45;:259::i;14710:104:32:-;14768:7;14798:1;14794;:5;:13;;14806:1;14794:13;;24101:580:4;24272:20;24295:95;24345:35;24368:11;24345:22;:35::i;24295:95::-;24400:21;24424:34;;;:12;:34;;-1:-1:-1;;;;;;;;;;;24424:34:4;24272:118;;-1:-1:-1;24400:21:4;24424:77;;24473:28;;24424:77;:::i;:::-;24400:101;;24511:163;24550:19;24583:12;24609:13;24636:28;24511:25;:163::i;2726:748:32:-;2840:9;3105:1;-1:-1:-1;;3088:19:32;3085:1;3082:26;3079:1;3075:34;3068:42;3055:11;3051:60;3024:146;;3154:1;3151;3144:12;3024:146;-1:-1:-1;3421:9:32;;3368:27;;;3365:34;;3417:27;;;3344:114;;2726:748::o;9241:983:35:-;9414:7;;;9880:13;:1;9890:2;9880:9;:13::i;:::-;9863:30;;9903:9;9915:47;9942:6;9950:2;9954:1;9957;9960;9915:26;:47::i;:::-;9903:59;-1:-1:-1;9972:16:35;9991:105;10054:32;565:4:32;10084:1:35;10054:29;:32::i;:::-;9996:39;10011:23;10032:1;10011:16;:2;10022:4;10011:10;:16::i;9996:39::-;9992:43;;:1;:43;:::i;9991:105::-;9972:124;-1:-1:-1;10194:8:35;10198:4;10194:1;:8;:::i;:::-;10204:12;10215:1;10204:8;:12;:::i;:::-;10186:31;;;;;;;9241:983;;;;;;;;;;:::o;14433:104:32:-;14491:7;14521:1;14517;:5;:13;;14529:1;14517:13;;4871:481:35;5056:14;5082:12;5124:136;5172:1;5187;5202:2;5218:1;5233;5248:2;5124:34;:136::i;:::-;5104:156;;-1:-1:-1;5104:156:35;-1:-1:-1;5104:156:35;5270:76;;5305:30;;-1:-1:-1;;;5305:30:35;;;;;;;;;;;7623:1046;7773:7;;;8276:13;:1;8286:2;8276:9;:13::i;:::-;8259:30;;8299:9;8311:47;8338:6;8346:2;8350:1;8353;8356;8311:26;:47::i;:::-;8299:59;-1:-1:-1;8368:16:35;8387:103;8448:32;565:4:32;8478:1:35;8448:29;:32::i;:::-;8388:41;8398:30;565:4:32;8398:6:35;:30;:::i;:::-;8388:1;;:9;:41::i;8387:103::-;8368:122;-1:-1:-1;8500:16:35;8519:20;8368:122;8536:2;8519:16;:20::i;:::-;8500:39;-1:-1:-1;8635:12:35;8646:1;8500:39;8635:12;:::i;:::-;8649;8653:8;8649:1;:12;:::i;:::-;8627:35;;;;;;;;7623:1046;;;;;;;;:::o;3358:892::-;3543:7;;3595:13;:1;3605:2;3595:9;:13::i;:::-;3578:30;;3669:9;3681:47;3708:6;3716:2;3720:1;3723;3726;3681:26;:47::i;:::-;3669:59;-1:-1:-1;3770:15:35;3783:1;3771:6;3775:2;3771:1;:6;:::i;3770:15::-;3766:19;-1:-1:-1;3884:10:35;3897:81;3938:30;565:4:32;3966:1:35;3938:27;:30::i;:::-;3897:23;3913:6;3898:5;3902:1;3898;:5;:::i;3897:81::-;3884:94;-1:-1:-1;4088:14:35;3884:94;4099:2;4088:10;:14::i;:::-;4083:19;-1:-1:-1;4237:6:35;4242:1;4083:19;4237:6;:::i;:::-;4230:13;3358:892;-1:-1:-1;;;;;;;;;;3358:892:35:o;6971:1627:33:-;7301:23;;;7880:99;7914:30;7920:24;150:4:32;7914:30:33;:::i;7880:99::-;7864:115;-1:-1:-1;7993:28:33;;7989:603;;8109:43;:9;8127:24;8109:17;:43::i;:::-;8092:60;-1:-1:-1;8271:264:33;8334:23;8375:13;8092:60;8438:18;8444:12;150:4:32;8438:18:33;:::i;:::-;8474:11;8503:18;8271:45;:264::i;2008:837:35:-;2193:7;;2245:13;:1;2255:2;2245:9;:13::i;:::-;2228:30;;2319:9;2331:47;2358:6;2366:2;2370:1;2373;2376;2331:26;:47::i;:::-;2319:59;-1:-1:-1;2427:25:35;2450:1;2427:18;2438:6;2442:2;2438:1;:6;:::i;:::-;2427:2;;:10;:18::i;:25::-;2423:29;-1:-1:-1;2512:17:35;:6;2423:29;2512:14;:17::i;:::-;2508:21;-1:-1:-1;2644:10:35;2657:43;2669:30;565:4:32;2697:1:35;2669:27;:30::i;:::-;2658:5;2662:1;2658;:5;:::i;2657:43::-;2644:56;-1:-1:-1;2832:6:35;2644:56;2832:1;:6;:::i;9632:3592:32:-;9677:8;9730:1;9725;:6;9721:60;;9740:41;;-1:-1:-1;;;9740:41:32;;;;;;;;;;;9721:60;-1:-1:-1;10747:2:32;-1:-1:-1;;;;;;;10158:1:32;10154:49;10261:9;;;10241:18;10238:33;10235:1;10231:41;10225:48;10323:9;;;10311:10;10308:25;10305:1;10301:33;10295:40;10381:9;;;10373:6;10370:21;10367:1;10363:29;10357:36;10437:9;;;10431:4;10428:19;10425:1;10421:27;;;10415:34;;;10492:9;;;10487:3;10484:18;10481:1;10477:26;10471:33;10547:9;;;10539:18;;;10536:1;10532:26;;;10526:33;;;10595:9;;;10587:18;;;10581:25;10777:3;:7;;;;;10763:22;;;;10810:17;;;11603:31;11599:35;;11654:5;;11653:13;;11670:32;11652:50;11722:5;;11721:13;;11738:33;11720:51;11791:5;;11790:13;;11807:33;11789:51;11860:5;;11859:13;;11876:33;11858:51;11929:5;;11928:13;;11945:32;11927:50;11997:5;;11996:13;;12013:30;11995:48;11000:31;10996:35;;11051:5;;11050:13;;11067:32;11049:50;11119:5;;11118:13;;11135:32;11117:50;11187:5;;11186:13;;-1:-1:-1;;11185:50:32;11255:5;;11254:13;;-1:-1:-1;;11253:50:32;11323:5;;11322:13;;;-1:-1:-1;;11321:50:32;11389:5;-1:-1:-1;;11389:46:32;12384:10;12774:43;12769:48;-1:-1:-1;;10743:6:32;;;;12897:71;:91;12876:112;13061:72;13056:77;13204:3;13198:9;;9632:3592::o;3750:115::-;3810:7;3837:20;3846:1;3849;3852:4;3837:8;:20::i;10669:302:35:-;10835:7;10956:8;:1;10962;10956:5;:8::i;:::-;10917:36;10932:20;10950:1;10932:13;:2;10943:1;10932:10;:13::i;10917:36::-;:47;;;;:::i;6050:1039::-;6239:14;;;6312:13;:1;6322:2;6312:9;:13::i;:::-;6295:30;;6386:9;6398:47;6425:6;6433:2;6437:1;6440;6443;6398:26;:47::i;:::-;6386:59;-1:-1:-1;6487:15:35;6500:1;6488:6;6492:2;6488:1;:6;:::i;6487:15::-;6483:19;;6520:1;6516;:5;6512:53;;;6545:1;6548:5;6537:17;;;;;;;;6512:53;6663:10;6676:81;6717:30;565:4:32;6745:1:35;6717:27;:30::i;:::-;6676:23;6692:6;6677:5;6681:1;6677;:5;:::i;6676:81::-;6663:94;-1:-1:-1;6867:14:35;6663:94;6878:2;6867:10;:14::i;:::-;6862:19;;7015:2;7011:1;:6;7007:52;;;7042:6;7046:2;7042:1;:6;:::i;:::-;7033:15;;7007:52;7078:4;7068:14;;6269:820;;;6050:1039;;;;;;;;;:::o;14:271:165:-;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:165:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:165;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:252;860:2;854:9;902:3;890:16;;936:18;921:34;;957:22;;;918:62;915:88;;;983:18;;:::i;:::-;1019:2;1012:22;788:252;:::o;1045:275::-;1116:2;1110:9;1181:2;1162:13;;-1:-1:-1;;1158:27:165;1146:40;;1216:18;1201:34;;1237:22;;;1198:62;1195:88;;;1263:18;;:::i;:::-;1299:2;1292:22;1045:275;;-1:-1:-1;1045:275:165:o;1325:862::-;1404:6;1435:2;1478;1466:9;1457:7;1453:23;1449:32;1446:52;;;1494:1;1491;1484:12;1446:52;1527:9;1521:16;1556:18;1597:2;1589:6;1586:14;1583:34;;;1613:1;1610;1603:12;1583:34;1651:6;1640:9;1636:22;1626:32;;1696:7;1689:4;1685:2;1681:13;1677:27;1667:55;;1718:1;1715;1708:12;1667:55;1747:2;1741:9;1769:2;1765;1762:10;1759:36;;;1775:18;;:::i;:::-;1817:53;1860:2;1841:13;;-1:-1:-1;;1837:27:165;1833:36;;1817:53;:::i;:::-;1804:66;;1893:2;1886:5;1879:17;1933:7;1928:2;1923;1919;1915:11;1911:20;1908:33;1905:53;;;1954:1;1951;1944:12;1905:53;1976:1;1986:128;2000:2;1997:1;1994:9;1986:128;;;2087:10;;;2083:19;;2077:26;2057:13;;;2053:22;;2046:58;2011:10;;1986:128;;;-1:-1:-1;2155:1:165;2134:14;;;2130:23;;;2123:34;;;;-1:-1:-1;2138:5:165;1325:862;-1:-1:-1;;;1325:862:165:o;2192:118::-;2278:5;2271:13;2264:21;2257:5;2254:32;2244:60;;2300:1;2297;2290:12;2315:128;2380:20;;2409:28;2380:20;2409:28;:::i;:::-;2315:128;;;:::o;2448:241::-;2504:6;2557:2;2545:9;2536:7;2532:23;2528:32;2525:52;;;2573:1;2570;2563:12;2525:52;2612:9;2599:23;2631:28;2653:5;2631:28;:::i;2694:173::-;2762:20;;-1:-1:-1;;;;;2811:31:165;;2801:42;;2791:70;;2857:1;2854;2847:12;2872:521;2964:6;2972;2980;2988;2996;3049:3;3037:9;3028:7;3024:23;3020:33;3017:53;;;3066:1;3063;3056:12;3017:53;3102:9;3089:23;3079:33;;3159:2;3148:9;3144:18;3131:32;3121:42;;3210:2;3199:9;3195:18;3182:32;3172:42;;3233:38;3267:2;3256:9;3252:18;3233:38;:::i;:::-;3223:48;;3321:3;3310:9;3306:19;3293:33;3335:28;3357:5;3335:28;:::i;:::-;3382:5;3372:15;;;2872:521;;;;;;;;:::o;3651:367::-;3714:8;3724:6;3778:3;3771:4;3763:6;3759:17;3755:27;3745:55;;3796:1;3793;3786:12;3745:55;-1:-1:-1;3819:20:165;;3862:18;3851:30;;3848:50;;;3894:1;3891;3884:12;3848:50;3931:4;3923:6;3919:17;3907:29;;3991:3;3984:4;3974:6;3971:1;3967:14;3959:6;3955:27;3951:38;3948:47;3945:67;;;4008:1;4005;3998:12;4023:922;4163:6;4171;4179;4187;4195;4203;4256:3;4244:9;4235:7;4231:23;4227:33;4224:53;;;4273:1;4270;4263:12;4224:53;4296:29;4315:9;4296:29;:::i;:::-;4286:39;;4344:38;4378:2;4367:9;4363:18;4344:38;:::i;:::-;4334:48;;4433:2;4422:9;4418:18;4405:32;4456:18;4497:2;4489:6;4486:14;4483:34;;;4513:1;4510;4503:12;4483:34;4552:70;4614:7;4605:6;4594:9;4590:22;4552:70;:::i;:::-;4641:8;;-1:-1:-1;4526:96:165;-1:-1:-1;4729:2:165;4714:18;;4701:32;;-1:-1:-1;4745:16:165;;;4742:36;;;4774:1;4771;4764:12;4742:36;;4813:72;4877:7;4866:8;4855:9;4851:24;4813:72;:::i;:::-;4023:922;;;;-1:-1:-1;4023:922:165;;-1:-1:-1;4023:922:165;;4904:8;;4023:922;-1:-1:-1;;;4023:922:165:o;4950:397::-;5036:6;5044;5052;5060;5113:3;5101:9;5092:7;5088:23;5084:33;5081:53;;;5130:1;5127;5120:12;5081:53;5166:9;5153:23;5143:33;;5195:38;5229:2;5218:9;5214:18;5195:38;:::i;:::-;5185:48;;5252:38;5286:2;5275:9;5271:18;5252:38;:::i;:::-;4950:397;;;;-1:-1:-1;5242:48:165;;5337:2;5322:18;5309:32;;-1:-1:-1;;4950:397:165:o;5352:452::-;5435:6;5443;5451;5459;5512:3;5500:9;5491:7;5487:23;5483:33;5480:53;;;5529:1;5526;5519:12;5480:53;5565:9;5552:23;5542:33;;5622:2;5611:9;5607:18;5594:32;5584:42;;5645:38;5679:2;5668:9;5664:18;5645:38;:::i;:::-;5635:48;;5733:2;5722:9;5718:18;5705:32;5746:28;5768:5;5746:28;:::i;:::-;5352:452;;;;-1:-1:-1;5352:452:165;;-1:-1:-1;;5352:452:165:o;6173:180::-;6232:6;6285:2;6273:9;6264:7;6260:23;6256:32;6253:52;;;6301:1;6298;6291:12;6253:52;-1:-1:-1;6324:23:165;;6173:180;-1:-1:-1;6173:180:165:o;6358:397::-;6444:6;6452;6460;6468;6521:3;6509:9;6500:7;6496:23;6492:33;6489:53;;;6538:1;6535;6528:12;6489:53;6574:9;6561:23;6551:33;;6603:38;6637:2;6626:9;6622:18;6603:38;:::i;:::-;6593:48;;6688:2;6677:9;6673:18;6660:32;6650:42;;6711:38;6745:2;6734:9;6730:18;6711:38;:::i;:::-;6701:48;;6358:397;;;;;;;:::o;6760:247::-;6827:6;6835;6888:2;6876:9;6867:7;6863:23;6859:32;6856:52;;;6904:1;6901;6894:12;6856:52;-1:-1:-1;;6927:23:165;;;6997:2;6982:18;;;6969:32;;-1:-1:-1;6760:247:165:o;7012:188::-;7080:20;;-1:-1:-1;;;;;7129:46:165;;7119:57;;7109:85;;7190:1;7187;7180:12;7205:260;7273:6;7281;7334:2;7322:9;7313:7;7309:23;7305:32;7302:52;;;7350:1;7347;7340:12;7302:52;7373:29;7392:9;7373:29;:::i;:::-;7363:39;;7421:38;7455:2;7444:9;7440:18;7421:38;:::i;:::-;7411:48;;7205:260;;;;;:::o;7470:315::-;7535:6;7543;7596:2;7584:9;7575:7;7571:23;7567:32;7564:52;;;7612:1;7609;7602:12;7564:52;7635:29;7654:9;7635:29;:::i;:::-;7625:39;;7714:2;7703:9;7699:18;7686:32;7727:28;7749:5;7727:28;:::i;:::-;7774:5;7764:15;;;7470:315;;;;;:::o;7974:162::-;8041:20;;8101:2;8090:21;;;8080:32;;8070:60;;8126:1;8123;8116:12;8141:973;8229:6;8282:3;8270:9;8261:7;8257:23;8253:33;8250:53;;;8299:1;8296;8289:12;8250:53;8325:22;;:::i;:::-;8370:29;8389:9;8370:29;:::i;:::-;8363:5;8356:44;8432:38;8466:2;8455:9;8451:18;8432:38;:::i;:::-;8427:2;8420:5;8416:14;8409:62;8503:37;8536:2;8525:9;8521:18;8503:37;:::i;:::-;8498:2;8491:5;8487:14;8480:61;8573:38;8607:2;8596:9;8592:18;8573:38;:::i;:::-;8568:2;8561:5;8557:14;8550:62;8645:39;8679:3;8668:9;8664:19;8645:39;:::i;:::-;8639:3;8632:5;8628:15;8621:64;8718:39;8752:3;8741:9;8737:19;8718:39;:::i;:::-;8712:3;8705:5;8701:15;8694:64;8791:39;8825:3;8814:9;8810:19;8791:39;:::i;:::-;8785:3;8778:5;8774:15;8767:64;8864:39;8898:3;8887:9;8883:19;8864:39;:::i;:::-;8858:3;8851:5;8847:15;8840:64;8923:3;8958:35;8989:2;8978:9;8974:18;8958:35;:::i;:::-;8942:14;;;8935:59;9013:3;9048:35;9064:18;;;9048:35;:::i;:::-;9032:14;;;9025:59;9036:5;8141:973;-1:-1:-1;;;8141:973:165:o;9119:762::-;9227:6;9235;9243;9251;9259;9267;9275;9328:3;9316:9;9307:7;9303:23;9299:33;9296:53;;;9345:1;9342;9335:12;9296:53;9368:29;9387:9;9368:29;:::i;:::-;9358:39;;9416:38;9450:2;9439:9;9435:18;9416:38;:::i;:::-;9406:48;;9504:2;9493:9;9489:18;9476:32;9517:28;9539:5;9517:28;:::i;:::-;9564:5;-1:-1:-1;9616:2:165;9601:18;;9588:32;;-1:-1:-1;9672:3:165;9657:19;;9644:33;9721:4;9708:18;;9696:31;;9686:59;;9741:1;9738;9731:12;9686:59;9119:762;;;;-1:-1:-1;9119:762:165;;;;9764:7;9818:3;9803:19;;9790:33;;-1:-1:-1;9870:3:165;9855:19;;;9842:33;;9119:762;-1:-1:-1;;9119:762:165:o;9886:385::-;9972:6;9980;9988;9996;10049:3;10037:9;10028:7;10024:23;10020:33;10017:53;;;10066:1;10063;10056:12;10017:53;-1:-1:-1;;10089:23:165;;;10159:2;10144:18;;10131:32;;-1:-1:-1;10210:2:165;10195:18;;10182:32;;10261:2;10246:18;10233:32;;-1:-1:-1;9886:385:165;-1:-1:-1;9886:385:165:o;10925:322::-;11002:6;11010;11018;11071:2;11059:9;11050:7;11046:23;11042:32;11039:52;;;11087:1;11084;11077:12;11039:52;11123:9;11110:23;11100:33;;11152:38;11186:2;11175:9;11171:18;11152:38;:::i;:::-;11142:48;;11237:2;11226:9;11222:18;11209:32;11199:42;;10925:322;;;;;:::o;11576:186::-;11635:6;11688:2;11676:9;11667:7;11663:23;11659:32;11656:52;;;11704:1;11701;11694:12;11656:52;11727:29;11746:9;11727:29;:::i;11767:186::-;11826:6;11879:2;11867:9;11858:7;11854:23;11850:32;11847:52;;;11895:1;11892;11885:12;11847:52;11918:29;11937:9;11918:29;:::i;11958:472::-;12053:6;12061;12069;12077;12085;12138:3;12126:9;12117:7;12113:23;12109:33;12106:53;;;12155:1;12152;12145:12;12106:53;12191:9;12178:23;12168:33;;12220:38;12254:2;12243:9;12239:18;12220:38;:::i;:::-;12210:48;;12277:38;12311:2;12300:9;12296:18;12277:38;:::i;:::-;12267:48;;12362:2;12351:9;12347:18;12334:32;12324:42;;12385:39;12419:3;12408:9;12404:19;12385:39;:::i;:::-;12375:49;;11958:472;;;;;;;;:::o;12435:316::-;12512:6;12520;12528;12581:2;12569:9;12560:7;12556:23;12552:32;12549:52;;;12597:1;12594;12587:12;12549:52;-1:-1:-1;;12620:23:165;;;12690:2;12675:18;;12662:32;;-1:-1:-1;12741:2:165;12726:18;;;12713:32;;12435:316;-1:-1:-1;12435:316:165:o;12756:334::-;12958:2;12940:21;;;12997:2;12977:18;;;12970:30;-1:-1:-1;;;13031:2:165;13016:18;;13009:40;13081:2;13066:18;;12756:334::o;13095:127::-;13156:10;13151:3;13147:20;13144:1;13137:31;13187:4;13184:1;13177:15;13211:4;13208:1;13201:15;13227:128;13294:9;;;13315:11;;;13312:37;;;13329:18;;:::i;13360:125::-;13425:9;;;13446:10;;;13443:36;;;13459:18;;:::i;13490:127::-;13551:10;13546:3;13542:20;13539:1;13532:31;13582:4;13579:1;13572:15;13606:4;13603:1;13596:15;13622:168;13695:9;;;13726;;13743:15;;;13737:22;;13723:37;13713:71;;13764:18;;:::i;13927:200::-;-1:-1:-1;;;;;14063:10:165;;;14051;;;14047:27;;14086:12;;;14083:38;;;14101:18;;:::i;:::-;14083:38;13927:200;;;;:::o;14340:184::-;14410:6;14463:2;14451:9;14442:7;14438:23;14434:32;14431:52;;;14479:1;14476;14469:12;14431:52;-1:-1:-1;14502:16:165;;14340:184;-1:-1:-1;14340:184:165:o;14808:136::-;14843:3;-1:-1:-1;;;14864:22:165;;14861:48;;14889:18;;:::i;:::-;-1:-1:-1;14929:1:165;14925:13;;14808:136::o;16355:135::-;16394:3;16415:17;;;16412:43;;16435:18;;:::i;:::-;-1:-1:-1;16482:1:165;16471:13;;16355:135::o;16687:127::-;16748:10;16743:3;16739:20;16736:1;16729:31;16779:4;16776:1;16769:15;16803:4;16800:1;16793:15;16819:112;16851:1;16877;16867:35;;16882:18;;:::i;:::-;-1:-1:-1;16916:9:165;;16819:112::o;17526:245::-;17593:6;17646:2;17634:9;17625:7;17621:23;17617:32;17614:52;;;17662:1;17659;17652:12;17614:52;17694:9;17688:16;17713:28;17735:5;17713:28;:::i;17776:197::-;-1:-1:-1;;;;;17898:10:165;;;17910;;;17894:27;;17933:11;;;17930:37;;;17947:18;;:::i;17978:245::-;18076:2;18046:17;;;18065;;;;18042:41;-1:-1:-1;;;;;18098:44:165;;-1:-1:-1;;;;;;18144:49:165;;18095:99;18092:125;;;18197:18;;:::i;18674:200::-;18740:9;;;18713:4;18768:9;;18796:10;;18808:12;;;18792:29;18831:12;;;18823:21;;18789:56;18786:82;;;18848:18;;:::i;18879:249::-;18979:2;18968:17;;;18949;;;;18945:41;-1:-1:-1;;;;;;19001:50:165;;-1:-1:-1;;;;;19053:45:165;;18998:101;18995:127;;;19102:18;;:::i;19133:216::-;19197:9;;;19225:11;;;19172:3;19255:9;;19283:10;;19279:19;;19308:10;;19300:19;;19276:44;19273:70;;;19323:18;;:::i;:::-;19273:70;;19133:216;;;;:::o;19354:193::-;19393:1;19419;19409:35;;19424:18;;:::i;:::-;-1:-1:-1;;;19460:18:165;;-1:-1:-1;;19480:13:165;;19456:38;19453:64;;;19497:18;;:::i;:::-;-1:-1:-1;19531:10:165;;19354:193::o",
    "linkReferences": {},
    "immutableReferences": {
      "12307": [
        {
          "start": 1121,
          "length": 32
        },
        {
          "start": 6208,
          "length": 32
        }
      ],
      "13140": [
        {
          "start": 13965,
          "length": 32
        }
      ],
      "13142": [
        {
          "start": 14026,
          "length": 32
        }
      ],
      "4548": [
        {
          "start": 4831,
          "length": 32
        },
        {
          "start": 4985,
          "length": 32
        },
        {
          "start": 5100,
          "length": 32
        },
        {
          "start": 9504,
          "length": 32
        },
        {
          "start": 9641,
          "length": 32
        },
        {
          "start": 9838,
          "length": 32
        },
        {
          "start": 9990,
          "length": 32
        },
        {
          "start": 12626,
          "length": 32
        },
        {
          "start": 12699,
          "length": 32
        },
        {
          "start": 12917,
          "length": 32
        },
        {
          "start": 13089,
          "length": 32
        },
        {
          "start": 13267,
          "length": 32
        },
        {
          "start": 13340,
          "length": 32
        }
      ],
      "4551": [
        {
          "start": 8734,
          "length": 32
        },
        {
          "start": 8903,
          "length": 32
        },
        {
          "start": 10316,
          "length": 32
        }
      ],
      "4554": [
        {
          "start": 2909,
          "length": 32
        },
        {
          "start": 3651,
          "length": 32
        },
        {
          "start": 5551,
          "length": 32
        },
        {
          "start": 6908,
          "length": 32
        },
        {
          "start": 8109,
          "length": 32
        },
        {
          "start": 9210,
          "length": 32
        },
        {
          "start": 10468,
          "length": 32
        },
        {
          "start": 10761,
          "length": 32
        },
        {
          "start": 14746,
          "length": 32
        },
        {
          "start": 15040,
          "length": 32
        },
        {
          "start": 15635,
          "length": 32
        },
        {
          "start": 19668,
          "length": 32
        },
        {
          "start": 20081,
          "length": 32
        }
      ],
      "4557": [
        {
          "start": 3684,
          "length": 32
        },
        {
          "start": 8142,
          "length": 32
        },
        {
          "start": 10925,
          "length": 32
        },
        {
          "start": 11064,
          "length": 32
        },
        {
          "start": 14838,
          "length": 32
        },
        {
          "start": 17026,
          "length": 32
        },
        {
          "start": 18842,
          "length": 32
        },
        {
          "start": 19895,
          "length": 32
        }
      ],
      "4560": [
        {
          "start": 2779,
          "length": 32
        },
        {
          "start": 3617,
          "length": 32
        },
        {
          "start": 8076,
          "length": 32
        },
        {
          "start": 10156,
          "length": 32
        },
        {
          "start": 10201,
          "length": 32
        },
        {
          "start": 10959,
          "length": 32
        },
        {
          "start": 11031,
          "length": 32
        },
        {
          "start": 14872,
          "length": 32
        },
        {
          "start": 17060,
          "length": 32
        },
        {
          "start": 18766,
          "length": 32
        },
        {
          "start": 19929,
          "length": 32
        }
      ],
      "4563": [
        {
          "start": 3411,
          "length": 32
        },
        {
          "start": 3486,
          "length": 32
        },
        {
          "start": 3762,
          "length": 32
        },
        {
          "start": 16372,
          "length": 32
        },
        {
          "start": 16451,
          "length": 32
        },
        {
          "start": 18168,
          "length": 32
        },
        {
          "start": 18228,
          "length": 32
        },
        {
          "start": 18804,
          "length": 32
        },
        {
          "start": 20578,
          "length": 32
        },
        {
          "start": 21121,
          "length": 32
        }
      ],
      "4566": [
        {
          "start": 2562,
          "length": 32
        },
        {
          "start": 5281,
          "length": 32
        },
        {
          "start": 6769,
          "length": 32
        },
        {
          "start": 7493,
          "length": 32
        },
        {
          "start": 7979,
          "length": 32
        },
        {
          "start": 9021,
          "length": 32
        }
      ],
      "4577": [
        {
          "start": 16773,
          "length": 32
        },
        {
          "start": 17910,
          "length": 32
        },
        {
          "start": 19725,
          "length": 32
        }
      ],
      "4580": [
        {
          "start": 15162,
          "length": 32
        },
        {
          "start": 16894,
          "length": 32
        },
        {
          "start": 17247,
          "length": 32
        },
        {
          "start": 18023,
          "length": 32
        },
        {
          "start": 20719,
          "length": 32
        }
      ],
      "4583": [
        {
          "start": 16817,
          "length": 32
        },
        {
          "start": 16938,
          "length": 32
        },
        {
          "start": 17954,
          "length": 32
        },
        {
          "start": 18067,
          "length": 32
        },
        {
          "start": 19793,
          "length": 32
        },
        {
          "start": 20763,
          "length": 32
        }
      ],
      "4601": [
        {
          "start": 3978,
          "length": 32
        },
        {
          "start": 4080,
          "length": 32
        }
      ],
      "4604": [
        {
          "start": 14229,
          "length": 32
        }
      ],
      "6": [
        {
          "start": 594,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "DOMAIN_SEPARATOR()": "3644e515",
    "PERMIT_TYPEHASH()": "30adf81f",
    "accrue(uint256,int256)": "68096239",
    "addLiquidity(uint256,uint256,uint256,address,bool)": "c326a903",
    "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
    "calculateFeesInGivenBondsOut(uint256,uint256,uint256,uint256)": "95530b75",
    "calculateFeesOutGivenBondsIn(uint256,uint256,uint256,uint256)": "a30b7e3d",
    "calculateFeesOutGivenSharesIn(uint256,uint256,uint256)": "f6e55449",
    "calculateIdleShareReserves(uint256)": "b1b4b170",
    "calculateOpenLong(uint256,uint256)": "9bd33498",
    "calculateTimeRemaining(uint256)": "68c2ecb8",
    "calculateTimeRemainingScaled(uint256)": "ca6d38f7",
    "checkpoint(uint256)": "ed64bab2",
    "closeLong(uint256,uint256,uint256,address,bool)": "fa3fcea7",
    "closeShort(uint256,uint256,uint256,address,bool)": "6f8c3a5b",
    "collectGovernanceFee(bool)": "2787d595",
    "getOracleState()": "8fca1f7b",
    "getTotalShares()": "d5002f2e",
    "initialize(uint256,uint256,address,bool)": "2002b333",
    "latestCheckpoint()": "907c0f92",
    "loadOracle(uint256)": "4daa8b8f",
    "openLong(uint256,uint256,uint256,address,bool)": "06dae82a",
    "openShort(uint256,uint256,uint256,address,bool)": "a179403b",
    "pause(bool)": "02329a29",
    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
    "recordOracle(uint256)": "5a1a3e7c",
    "redeemWithdrawalShares(uint256,uint256,address,bool)": "4536ee2f",
    "removeLiquidity(uint256,uint256,address,bool)": "c23632a7",
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"oracleSize\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updateGap\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"address\",\"name\":\"_dataProvider\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"BaseBufferExceedsShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"BelowMinimumContribution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidApr\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointTime\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativeInterest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Paused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolAlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"time\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"apr\",\"type\":\"int256\"}],\"name\":\"accrue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minApr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxApr\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amountOut\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_normalizedTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_spotPrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateFeesInGivenBondsOut\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalCurveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalFlatFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceCurveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceFlatFee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_normalizedTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_spotPrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateFeesOutGivenBondsIn\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalCurveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalFlatFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalGovernanceFee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_spotPrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateFeesOutGivenSharesIn\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalCurveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceCurveFee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_sharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateIdleShareReserves\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_sharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateOpenLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shareReservesDelta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReservesDelta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalGovernanceFee\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"}],\"name\":\"calculateTimeRemaining\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timeRemaining\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"}],\"name\":\"calculateTimeRemainingScaled\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timeRemaining\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"asUnderlying\",\"type\":\"bool\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getOracleState\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestCheckpoint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"loadOracle\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_baseAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"traderDeposit\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"data\",\"type\":\"uint256\"}],\"name\":\"recordOracle\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutputPerShare\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharesRedeemed\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalShares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"}],\"name\":\"setLongExposure\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"_marketState_\",\"type\":\"tuple\"}],\"name\":\"setMarketState\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"}],\"name\":\"setReserves\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_totalShares\",\"type\":\"uint256\"}],\"name\":\"setTotalShares\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"_shareReservesDelta\",\"type\":\"int256\"}],\"name\":\"updateLiquidity\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,address,bool)\":{\"params\":{\"_asUnderlying\":\"If true the user is charged in underlying if false                      the contract transfers in yield source directly.                      Note - for some paths one choice may be disabled or blocked.\",\"_contribution\":\"The amount of base to supply.\",\"_destination\":\"The address which will hold the LP shares\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\"},\"returns\":{\"lpShares\":\"The number of LP tokens created\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"the source account\",\"ids\":\"The array of token ids of the asset to transfer\",\"to\":\"the destination account\",\"values\":\"The amount of each token to transfer\"}},\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"closeLong(uint256,uint256,uint256,address,bool)\":{\"params\":{\"_asUnderlying\":\"A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.\",\"_bondAmount\":\"The amount of longs to close.\",\"_destination\":\"The address which will receive the proceeds of this sale\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum base the user should receive from this trade\"},\"returns\":{\"_0\":\"The amount of underlying the user receives.\"}},\"closeShort(uint256,uint256,uint256,address,bool)\":{\"params\":{\"_asUnderlying\":\"A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.\",\"_bondAmount\":\"The amount of shorts to close.\",\"_destination\":\"The address that receives the short proceeds.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum output of this trade.\"},\"returns\":{\"_0\":\"The amount of base tokens produced by closing this short\"}},\"collectGovernanceFee(bool)\":{\"params\":{\"asUnderlying\":\"Indicates if the fees should be paid in underlying or yielding token\"},\"returns\":{\"proceeds\":\"The amount of base collected.\"}},\"initialize(uint256,uint256,address,bool)\":{\"params\":{\"_apr\":\"The target APR.\",\"_asUnderlying\":\"If true the user is charged in underlying if false                      the contract transfers in yield source directly.                      Note - for some paths one choice may be disabled or blocked.\",\"_contribution\":\"The amount of base to supply.\",\"_destination\":\"The destination of the LP shares.\"},\"returns\":{\"lpShares\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,address,bool)\":{\"params\":{\"_asUnderlying\":\"A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.\",\"_baseAmount\":\"The amount of base to use when trading.\",\"_destination\":\"The address which will receive the bonds\",\"_minOutput\":\"The minium number of bonds to receive.\",\"_minSharePrice\":\"The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.\"},\"returns\":{\"bondProceeds\":\"The amount of bonds the user received\",\"maturityTime\":\"The maturity time of the bonds.\"}},\"openShort(uint256,uint256,uint256,address,bool)\":{\"params\":{\"_asUnderlying\":\"A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.\",\"_bondAmount\":\"The amount of bonds to short.\",\"_destination\":\"The address which gets credited with share tokens\",\"_maxDeposit\":\"The most the user expects to deposit for this trade\",\"_minSharePrice\":\"The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.\"},\"returns\":{\"maturityTime\":\"The maturity time of the short.\",\"traderDeposit\":\"The amount the user deposited for this trade.\"}},\"pause(bool)\":{\"params\":{\"status\":\"True to pause all deposits and false to unpause them\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should be generated with the      eth_signTypedData JSON RPC call instead of the eth_sign JSON RPC call. If using out of date      parity signing libraries the v component may need to be adjusted. Also it is very rare but possible      for v to be other values, those values are not supported.\",\"params\":{\"_approved\":\"a boolean of the approval status to set to\",\"deadline\":\"the timestamp which the signature must be submitted by to be valid\",\"owner\":\"the owner of the account which is having the new approval set\",\"r\":\"The r component of the ECDSA signature\",\"s\":\"The s component of the ECDSA signature\",\"spender\":\"the address which will be allowed to spend owner's tokens\",\"v\":\"Extra ECDSA data which allows public key recovery from signature assumed to be 27 or 28\"}},\"redeemWithdrawalShares(uint256,uint256,address,bool)\":{\"params\":{\"_asUnderlying\":\"If true the user is paid in underlying if false                      the contract transfers in yield source directly.                      Note - for some paths one choice may be disabled or blocked.\",\"_destination\":\"The address which receive the withdraw proceeds\",\"_minOutputPerShare\":\"The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.\",\"_shares\":\"The withdrawal shares to redeem.\"},\"returns\":{\"baseProceeds\":\"The amount of base the LP received.\",\"sharesRedeemed\":\"The amount of withdrawal shares that were redeemed.\"}},\"removeLiquidity(uint256,uint256,address,bool)\":{\"params\":{\"_asUnderlying\":\"If true the user is paid in underlying if false        the contract transfers in yield source directly.        Note - for some paths one choice may be disabled or blocked.\",\"_destination\":\"The address which will receive the withdraw proceeds\",\"_minOutput\":\"The minium amount of the base token to receive.Note - this        value is likely to be less than the amount LP shares are worth.        The remainder is in short and long withdraw shares which are hard        to game the value of.\",\"_shares\":\"The LP shares to burn.\"},\"returns\":{\"baseProceeds\":\"The base the LP removing liquidity receives. The         LP receives a proportional amount of the pool's idle capital\",\"withdrawalShares\":\"The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal         in value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]\",\"operator\":\"The address who will be able to use the tokens\",\"tokenID\":\"The asset to approve the use of\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]\",\"caller\":\"The eth address which called the linking contract\",\"operator\":\"The address who will be able to use the tokens\",\"tokenID\":\"The asset to approve the use of\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval\",\"operator\":\"The eth address which can access the caller's assets\"}},\"setGovernance(address)\":{\"params\":{\"who\":\"The new governance address\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status\",\"who\":\"The address to change\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move\",\"from\":\"The address who's balance will be reduced\",\"to\":\"The address who's balance will be increased\",\"tokenID\":\"The token identifier\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move\",\"caller\":\"The msg.sender from the bridge\",\"from\":\"The address who's balance will be reduced\",\"to\":\"The address who's balance will be increased\",\"tokenID\":\"The token identifier\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"###################### ### ERC20Forwarder ### ######################\"}],\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}],\"Unauthorized()\":[{\"notice\":\"############### ### Factory ### ###############\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"###################### ### SafeCast ### ######################\"}]},\"events\":{\"PauserUpdated(address)\":{\"notice\":\"Pause ///\"}},\"kind\":\"user\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,address,bool)\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another\"},\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"closeLong(uint256,uint256,uint256,address,bool)\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,address,bool)\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee(bool)\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"initialize(uint256,uint256,address,bool)\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,address,bool)\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,address,bool)\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owners signature.\"},\"redeemWithdrawalShares(uint256,uint256,address,bool)\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,address,bool)\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to set asset approvals\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance\"},\"setMarketState((uint128,uint128,int128,uint128,uint128,uint128,uint128,uint128,bool,bool))\":{\"notice\":\"Mocks ///\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to set the ability of an address to pause deposits\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permission-ed transfer for the bridge to access, only callable by         the ERC20 linking bridge\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/mocks/MockHyperdrive.sol\":\"MockHyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/DataProvider.sol\":{\"keccak256\":\"0xd23ffd6ff77b03ea16b61130fdfcda6d2bfa430576241003f89b35cd76f51e30\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cc1ab2f99af4241f81feeeda6514fd30f11997adafddcdb48bebd2b383aae212\",\"dweb:/ipfs/QmSPp2B1Pka73Ur1KQMybMs3u73VUrDhev5w6U9iGLTmw7\"]},\"contracts/src/Hyperdrive.sol\":{\"keccak256\":\"0xd2e2e47f45dab0447497a20b8ef54960190d3c01ce2f53dbfae6abe2d095f1f5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c8d8f034071cf69e922975cddb6123fe125862688ecbe2c3fc01c1f235a4a72e\",\"dweb:/ipfs/QmQraAs5iFKtRYQTqFmpRLh6NSyYxbqrBMFgkGJL2E2ZCN\"]},\"contracts/src/HyperdriveBase.sol\":{\"keccak256\":\"0x978cac18e731453de1268355e70fae31f71718e4149ad1969a56133d1f04cf95\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3c37a688a10766ade884f36c111925d71318306e46c6e2d207c85ecc7adfb3e\",\"dweb:/ipfs/QmZJu7M9zPNKd2XahfHAtCLX9483228MzMrgP2fVaS1jbn\"]},\"contracts/src/HyperdriveDataProvider.sol\":{\"keccak256\":\"0x548a0d3b7b46f4e7f99745aa1b83ac1d264e6e82af61e6580a05335bd94bc39d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6505d7514910ff3a44932a42376f323f739204d6154bc4b997c60e5cbee050e5\",\"dweb:/ipfs/QmdKke5nXGZDxAcGDXFenJ6emxSUhE2QT8rdBZ8JhNpFaA\"]},\"contracts/src/HyperdriveLP.sol\":{\"keccak256\":\"0xe2f37ecc51c9eba59c4b5c13549ed4cdc0415d8af1902442d52ed012e4b9c22a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://53efc435c55fa29822d5ae3271cc42bf4ae096e4dfc9fb150a410f39cd43651e\",\"dweb:/ipfs/QmQgRowy4YqCsxV9A9mFyxzGF7FigC4Huc66Cxy8YfeYAv\"]},\"contracts/src/HyperdriveLong.sol\":{\"keccak256\":\"0x004b7cadd3e9090ca6f5a59510696e3b844839e6305c9076cd3fd31d9b0a3188\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da04266d0c817b69cde906770f047e9add9f8983a12553413c67b2c60ff15c2f\",\"dweb:/ipfs/QmNmKcdUVGLmjxMvUq8kyETZrkfW43JDXfcPHJfP4GrF6V\"]},\"contracts/src/HyperdriveShort.sol\":{\"keccak256\":\"0x3bdfd1e33a2498c6183dfb1684b0db7e6775e9ae2e1097800aeccc869b9e2baa\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e5c9337dfb069d806644ea7ceabe425222f1bc5766248648ba7a9a420715bee8\",\"dweb:/ipfs/QmaL1ZHX4zyAXxMqNmJB4mZ5o54JUTWLnTrKGMBJmbnRDa\"]},\"contracts/src/HyperdriveStorage.sol\":{\"keccak256\":\"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a\",\"dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY\"]},\"contracts/src/HyperdriveTWAP.sol\":{\"keccak256\":\"0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc\",\"dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e\",\"dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467\",\"dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806\",\"dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75\",\"dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef\",\"dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr\"]},\"contracts/src/token/MultiToken.sol\":{\"keccak256\":\"0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98\",\"dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy\"]},\"contracts/src/token/MultiTokenDataProvider.sol\":{\"keccak256\":\"0x1b2f98b9d6feaf0fc13ac4010dee2d2f49ecd33bf75d0c5be7e3318a6df2620f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4230f69efbb31e8194a78fb3ef5e2a69d349fe6f8b8aa4cf6b280484f3653cef\",\"dweb:/ipfs/QmScBP66WMXxXh28ScmU6SgSCWYhsRQHpZ755NyxTfCJoV\"]},\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0x43aae73d059561cab83b67044a3602c1899f584fda312edc1640c575a6a04389\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8eac46f31959bc5111826cc457473b1b3f0257588607c98c7adbe376f9365f65\",\"dweb:/ipfs/QmQjWWRgve9Cc8Fs96QPekK1gVJNwSdqEjmMaYxy8mw7ui\"]},\"lib/openzeppelin-contracts/contracts/access/AccessControl.sol\":{\"keccak256\":\"0xbc7fc49ba05b312e318d3d7b517ed0254489320bedef2e91f80c3bd4e904fc0c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e411d112f89fcadbff89da0579d61eafdf76272aaa91fb18728a86337440bb88\",\"dweb:/ipfs/QmfKJqMJ2CF1mw4UwDajoFdrrfKWSZwetkAByUP56EeqSQ\"]},\"lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol\":{\"keccak256\":\"0x13f5e15f2a0650c0b6aaee2ef19e89eaf4870d6e79662d572a393334c1397247\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7ee05f28f549a5d6515e152580716b87636ed4bfab9812499a6e3803df88288b\",\"dweb:/ipfs/QmeEnhdwY1t5Y3YU5a4ffzgXuToydH2PNdNxV9W7dEPRQJ\"]},\"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a\",\"dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh\"]},\"lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol\":{\"keccak256\":\"0xba4459ab871dfa300f5212c6c30178b63898c03533a1ede28436f11546626676\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dcc7b09bfa6e18aab262ca372f4a9b1fc82e294b430706a4e1378cf58e6a276\",\"dweb:/ipfs/QmT8oSAcesdctR15HMLhr2a1HRpXymxdjTfdtfTYJcj2N2\"]},\"lib/openzeppelin-contracts/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xb62681ccbf84aef125665cfdfc0bf13b532925b1a520d6c935913560f539a31b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://21dbc5b8aede7dee8f0e3bf296a58270f376f8e40d6f8becccde5b3cf34bc8df\",\"dweb:/ipfs/QmfHPWrtGiMNhTtLDYtqSd1eVd35Zqgd4PW9bR3i23oJgg\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol\":{\"keccak256\":\"0x0d19410453cda55960a818e02bd7c18952a5c8fe7a3036e81f0d599f34487a7b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4c0f62d3d5bef22b5ca00cc3903e7de6152cb68d2d22401a463f373cda54c00f\",\"dweb:/ipfs/QmSfzjZux7LC7NW2f7rjCXTHeFMUCWERqDkhpCTBy7kxTe\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Pausable.sol\":{\"keccak256\":\"0xbced39fde26b27a8db47f4c705ea3f81fad997052afefc957fe3436aa06c3d5a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3b6c5e06e1bd9222b57c1855b2e18646357efe961f629a8ce69ac0de6bd07790\",\"dweb:/ipfs/QmcYQWqN1222Dmrq1uwAQq6wvU5RRBtFGjQM6h4Fopigu9\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol\":{\"keccak256\":\"0x2cd54808b851c4db22f459065af0b7a952262741a85a73923e7a660767cd7baa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://750c4a78e953fe92317bba7166afd0a4b7725723e5822ea1b92ffd4e72d2d36b\",\"dweb:/ipfs/QmZNyCSrdYXGQfmB6LkbX8R6y4gGZRNh1d2pJobYBpkaRF\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x2626d8ab3dfdad0fad630c212ad146d59473d0f48b771784c61a7c1dbbea1f3f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d7c144532f1e7c76ac95fb6a8f617c1f740d7a73442a907eb60910e99dfa1fbf\",\"dweb:/ipfs/QmZsGyooD6emxB8JCuugRjnRYS2MPZEL586uuV7dgC8Jng\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4\",\"dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7\",\"dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6\"]},\"lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol\":{\"keccak256\":\"0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72\",\"dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]},\"test/mocks/MockHyperdrive.sol\":{\"keccak256\":\"0x1b6b377dd429b195da1bd51223a6db4a26b0580db82217e26278a5ecd13ae465\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b933615c0b1455400c66f3be95db8dc576efff91cfb9c805cc642549d3177378\",\"dweb:/ipfs/QmQDaiWtH81BeMFHjkkNU2NA1x5bLUJsSZfufG6UKtCDAn\"]},\"test/utils/Constants.sol\":{\"keccak256\":\"0xd7e0611edda0191fb3a6bf14a723975601dc64b1271584468a3b309ddf1b9e5b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e7e7f38a2b927f3c3e53e2c119537d8112c1ba61dfd56aeead7494b38a5277b0\",\"dweb:/ipfs/QmbaBBZKEJ857m3NDUcsTmemb93ajfuQjsjVNJVY2tRHs1\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0xc411e7547bd25ef39ae919350a801ddd87293b921906cae01a1f77457de68c9c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://370cbaee430cce8a4a118b31efdcc4039134b67b3f7c66f1747c767a10714d82\",\"dweb:/ipfs/QmcmLB393VxCbi8kDK4TDLXrTGD29yZKsEAcBP68BybdsN\"]}},\"version\":1}",
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
              "name": "withdrawalShareAmount",
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
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
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
          "name": "calculateFeesInGivenBondsOut",
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
          "name": "calculateFeesOutGivenBondsIn",
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
          "name": "calculateFeesOutGivenSharesIn",
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
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
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
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
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
              "internalType": "bool",
              "name": "asUnderlying",
              "type": "bool"
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
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
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
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
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
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
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
              "name": "status",
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
              "name": "_shares",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutputPerShare",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "redeemWithdrawalShares",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "baseProceeds",
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
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
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
              "name": "who",
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
          "addLiquidity(uint256,uint256,uint256,address,bool)": {
            "params": {
              "_asUnderlying": "If true the user is charged in underlying if false                      the contract transfers in yield source directly.                      Note - for some paths one choice may be disabled or blocked.",
              "_contribution": "The amount of base to supply.",
              "_destination": "The address which will hold the LP shares",
              "_maxApr": "The maximum APR at which the LP is willing to supply.",
              "_minApr": "The minimum APR at which the LP is willing to supply."
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
          "closeLong(uint256,uint256,uint256,address,bool)": {
            "params": {
              "_asUnderlying": "A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.",
              "_bondAmount": "The amount of longs to close.",
              "_destination": "The address which will receive the proceeds of this sale",
              "_maturityTime": "The maturity time of the short.",
              "_minOutput": "The minimum base the user should receive from this trade"
            },
            "returns": {
              "_0": "The amount of underlying the user receives."
            }
          },
          "closeShort(uint256,uint256,uint256,address,bool)": {
            "params": {
              "_asUnderlying": "A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.",
              "_bondAmount": "The amount of shorts to close.",
              "_destination": "The address that receives the short proceeds.",
              "_maturityTime": "The maturity time of the short.",
              "_minOutput": "The minimum output of this trade."
            },
            "returns": {
              "_0": "The amount of base tokens produced by closing this short"
            }
          },
          "collectGovernanceFee(bool)": {
            "params": {
              "asUnderlying": "Indicates if the fees should be paid in underlying or yielding token"
            },
            "returns": {
              "proceeds": "The amount of base collected."
            }
          },
          "initialize(uint256,uint256,address,bool)": {
            "params": {
              "_apr": "The target APR.",
              "_asUnderlying": "If true the user is charged in underlying if false                      the contract transfers in yield source directly.                      Note - for some paths one choice may be disabled or blocked.",
              "_contribution": "The amount of base to supply.",
              "_destination": "The destination of the LP shares."
            },
            "returns": {
              "lpShares": "The initial number of LP shares created."
            }
          },
          "openLong(uint256,uint256,uint256,address,bool)": {
            "params": {
              "_asUnderlying": "A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.",
              "_baseAmount": "The amount of base to use when trading.",
              "_destination": "The address which will receive the bonds",
              "_minOutput": "The minium number of bonds to receive.",
              "_minSharePrice": "The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued."
            },
            "returns": {
              "bondProceeds": "The amount of bonds the user received",
              "maturityTime": "The maturity time of the bonds."
            }
          },
          "openShort(uint256,uint256,uint256,address,bool)": {
            "params": {
              "_asUnderlying": "A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.",
              "_bondAmount": "The amount of bonds to short.",
              "_destination": "The address which gets credited with share tokens",
              "_maxDeposit": "The most the user expects to deposit for this trade",
              "_minSharePrice": "The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued."
            },
            "returns": {
              "maturityTime": "The maturity time of the short.",
              "traderDeposit": "The amount the user deposited for this trade."
            }
          },
          "pause(bool)": {
            "params": {
              "status": "True to pause all deposits and false to unpause them"
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
          "redeemWithdrawalShares(uint256,uint256,address,bool)": {
            "params": {
              "_asUnderlying": "If true the user is paid in underlying if false                      the contract transfers in yield source directly.                      Note - for some paths one choice may be disabled or blocked.",
              "_destination": "The address which receive the withdraw proceeds",
              "_minOutputPerShare": "The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.",
              "_shares": "The withdrawal shares to redeem."
            },
            "returns": {
              "baseProceeds": "The amount of base the LP received.",
              "sharesRedeemed": "The amount of withdrawal shares that were redeemed."
            }
          },
          "removeLiquidity(uint256,uint256,address,bool)": {
            "params": {
              "_asUnderlying": "If true the user is paid in underlying if false        the contract transfers in yield source directly.        Note - for some paths one choice may be disabled or blocked.",
              "_destination": "The address which will receive the withdraw proceeds",
              "_minOutput": "The minium amount of the base token to receive.Note - this        value is likely to be less than the amount LP shares are worth.        The remainder is in short and long withdraw shares which are hard        to game the value of.",
              "_shares": "The LP shares to burn."
            },
            "returns": {
              "baseProceeds": "The base the LP removing liquidity receives. The         LP receives a proportional amount of the pool's idle capital",
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
              "who": "The new governance address"
            }
          },
          "setPauser(address,bool)": {
            "params": {
              "status": "The new pauser status",
              "who": "The address to change"
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
          "addLiquidity(uint256,uint256,uint256,address,bool)": {
            "notice": "Allows LPs to supply liquidity for LP shares."
          },
          "batchTransferFrom(address,address,uint256[],uint256[])": {
            "notice": "Transfers several assets from one account to another"
          },
          "checkpoint(uint256)": {
            "notice": "Allows anyone to mint a new checkpoint."
          },
          "closeLong(uint256,uint256,uint256,address,bool)": {
            "notice": "Closes a long position with a specified maturity time."
          },
          "closeShort(uint256,uint256,uint256,address,bool)": {
            "notice": "Closes a short position with a specified maturity time."
          },
          "collectGovernanceFee(bool)": {
            "notice": "This function collects the governance fees accrued by the pool."
          },
          "initialize(uint256,uint256,address,bool)": {
            "notice": "Allows the first LP to initialize the market with a target APR."
          },
          "openLong(uint256,uint256,uint256,address,bool)": {
            "notice": "Opens a long position."
          },
          "openShort(uint256,uint256,uint256,address,bool)": {
            "notice": "Opens a short position."
          },
          "pause(bool)": {
            "notice": "Allows an authorized address to pause this contract"
          },
          "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
            "notice": "Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owners signature."
          },
          "redeemWithdrawalShares(uint256,uint256,address,bool)": {
            "notice": "Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw."
          },
          "removeLiquidity(uint256,uint256,address,bool)": {
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
            "notice": "Allows governance to change governance"
          },
          "setMarketState((uint128,uint128,int128,uint128,uint128,uint128,uint128,uint128,bool,bool))": {
            "notice": "Mocks ///"
          },
          "setPauser(address,bool)": {
            "notice": "Allows governance to set the ability of an address to pause deposits"
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
        "test/mocks/MockHyperdrive.sol": "MockHyperdrive"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/DataProvider.sol": {
        "keccak256": "0xd23ffd6ff77b03ea16b61130fdfcda6d2bfa430576241003f89b35cd76f51e30",
        "urls": [
          "bzz-raw://cc1ab2f99af4241f81feeeda6514fd30f11997adafddcdb48bebd2b383aae212",
          "dweb:/ipfs/QmSPp2B1Pka73Ur1KQMybMs3u73VUrDhev5w6U9iGLTmw7"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/Hyperdrive.sol": {
        "keccak256": "0xd2e2e47f45dab0447497a20b8ef54960190d3c01ce2f53dbfae6abe2d095f1f5",
        "urls": [
          "bzz-raw://c8d8f034071cf69e922975cddb6123fe125862688ecbe2c3fc01c1f235a4a72e",
          "dweb:/ipfs/QmQraAs5iFKtRYQTqFmpRLh6NSyYxbqrBMFgkGJL2E2ZCN"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveBase.sol": {
        "keccak256": "0x978cac18e731453de1268355e70fae31f71718e4149ad1969a56133d1f04cf95",
        "urls": [
          "bzz-raw://a3c37a688a10766ade884f36c111925d71318306e46c6e2d207c85ecc7adfb3e",
          "dweb:/ipfs/QmZJu7M9zPNKd2XahfHAtCLX9483228MzMrgP2fVaS1jbn"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveDataProvider.sol": {
        "keccak256": "0x548a0d3b7b46f4e7f99745aa1b83ac1d264e6e82af61e6580a05335bd94bc39d",
        "urls": [
          "bzz-raw://6505d7514910ff3a44932a42376f323f739204d6154bc4b997c60e5cbee050e5",
          "dweb:/ipfs/QmdKke5nXGZDxAcGDXFenJ6emxSUhE2QT8rdBZ8JhNpFaA"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveLP.sol": {
        "keccak256": "0xe2f37ecc51c9eba59c4b5c13549ed4cdc0415d8af1902442d52ed012e4b9c22a",
        "urls": [
          "bzz-raw://53efc435c55fa29822d5ae3271cc42bf4ae096e4dfc9fb150a410f39cd43651e",
          "dweb:/ipfs/QmQgRowy4YqCsxV9A9mFyxzGF7FigC4Huc66Cxy8YfeYAv"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveLong.sol": {
        "keccak256": "0x004b7cadd3e9090ca6f5a59510696e3b844839e6305c9076cd3fd31d9b0a3188",
        "urls": [
          "bzz-raw://da04266d0c817b69cde906770f047e9add9f8983a12553413c67b2c60ff15c2f",
          "dweb:/ipfs/QmNmKcdUVGLmjxMvUq8kyETZrkfW43JDXfcPHJfP4GrF6V"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveShort.sol": {
        "keccak256": "0x3bdfd1e33a2498c6183dfb1684b0db7e6775e9ae2e1097800aeccc869b9e2baa",
        "urls": [
          "bzz-raw://e5c9337dfb069d806644ea7ceabe425222f1bc5766248648ba7a9a420715bee8",
          "dweb:/ipfs/QmaL1ZHX4zyAXxMqNmJB4mZ5o54JUTWLnTrKGMBJmbnRDa"
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
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5",
        "urls": [
          "bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e",
          "dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5"
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
        "keccak256": "0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8",
        "urls": [
          "bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467",
          "dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk"
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
        "keccak256": "0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384",
        "urls": [
          "bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806",
          "dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT"
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
        "keccak256": "0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2",
        "urls": [
          "bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75",
          "dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb"
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
        "keccak256": "0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04",
        "urls": [
          "bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef",
          "dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr"
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
        "keccak256": "0x1b2f98b9d6feaf0fc13ac4010dee2d2f49ecd33bf75d0c5be7e3318a6df2620f",
        "urls": [
          "bzz-raw://4230f69efbb31e8194a78fb3ef5e2a69d349fe6f8b8aa4cf6b280484f3653cef",
          "dweb:/ipfs/QmScBP66WMXxXh28ScmU6SgSCWYhsRQHpZ755NyxTfCJoV"
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
        "keccak256": "0x43aae73d059561cab83b67044a3602c1899f584fda312edc1640c575a6a04389",
        "urls": [
          "bzz-raw://8eac46f31959bc5111826cc457473b1b3f0257588607c98c7adbe376f9365f65",
          "dweb:/ipfs/QmQjWWRgve9Cc8Fs96QPekK1gVJNwSdqEjmMaYxy8mw7ui"
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
      "test/mocks/MockHyperdrive.sol": {
        "keccak256": "0x1b6b377dd429b195da1bd51223a6db4a26b0580db82217e26278a5ecd13ae465",
        "urls": [
          "bzz-raw://b933615c0b1455400c66f3be95db8dc576efff91cfb9c805cc642549d3177378",
          "dweb:/ipfs/QmQDaiWtH81BeMFHjkkNU2NA1x5bLUJsSZfufG6UKtCDAn"
        ],
        "license": "Apache-2.0"
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
        "keccak256": "0xc411e7547bd25ef39ae919350a801ddd87293b921906cae01a1f77457de68c9c",
        "urls": [
          "bzz-raw://370cbaee430cce8a4a118b31efdcc4039134b67b3f7c66f1747c767a10714d82",
          "dweb:/ipfs/QmcmLB393VxCbi8kDK4TDLXrTGD29yZKsEAcBP68BybdsN"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "test/mocks/MockHyperdrive.sol",
    "id": 92631,
    "exportedSymbols": {
      "ERC20Mintable": [
        13321
      ],
      "ERC20PresetMinterPauser": [
        59287
      ],
      "ETH": [
        118842
      ],
      "FixedPointMath": [
        8486
      ],
      "Hyperdrive": [
        478
      ],
      "HyperdriveDataProvider": [
        1778
      ],
      "HyperdriveUtils": [
        122442
      ],
      "IHyperdrive": [
        7103
      ],
      "IMockHyperdrive": [
        91836
      ],
      "MockHyperdrive": [
        92554
      ],
      "MockHyperdriveDataProvider": [
        92630
      ],
      "MultiTokenDataProvider": [
        13135
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:12517:133",
    "nodes": [
      {
        "id": 91698,
        "nodeType": "PragmaDirective",
        "src": "39:23:133",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 91700,
        "nodeType": "ImportDirective",
        "src": "64:123:133",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol",
        "file": "openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92631,
        "sourceUnit": 59288,
        "symbolAliases": [
          {
            "foreign": {
              "id": 91699,
              "name": "ERC20PresetMinterPauser",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 59287,
              "src": "73:23:133",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 91702,
        "nodeType": "ImportDirective",
        "src": "188:58:133",
        "nodes": [],
        "absolutePath": "contracts/src/Hyperdrive.sol",
        "file": "contracts/src/Hyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92631,
        "sourceUnit": 479,
        "symbolAliases": [
          {
            "foreign": {
              "id": 91701,
              "name": "Hyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 478,
              "src": "197:10:133",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 91704,
        "nodeType": "ImportDirective",
        "src": "247:82:133",
        "nodes": [],
        "absolutePath": "contracts/src/HyperdriveDataProvider.sol",
        "file": "contracts/src/HyperdriveDataProvider.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92631,
        "sourceUnit": 1779,
        "symbolAliases": [
          {
            "foreign": {
              "id": 91703,
              "name": "HyperdriveDataProvider",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 1778,
              "src": "256:22:133",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 91706,
        "nodeType": "ImportDirective",
        "src": "330:71:133",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "contracts/src/interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92631,
        "sourceUnit": 7104,
        "symbolAliases": [
          {
            "foreign": {
              "id": 91705,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7103,
              "src": "339:11:133",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 91708,
        "nodeType": "ImportDirective",
        "src": "402:71:133",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "contracts/src/interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92631,
        "sourceUnit": 7104,
        "symbolAliases": [
          {
            "foreign": {
              "id": 91707,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7103,
              "src": "411:11:133",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 91710,
        "nodeType": "ImportDirective",
        "src": "474:76:133",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "contracts/src/libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92631,
        "sourceUnit": 8487,
        "symbolAliases": [
          {
            "foreign": {
              "id": 91709,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8486,
              "src": "483:14:133",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 91712,
        "nodeType": "ImportDirective",
        "src": "551:88:133",
        "nodes": [],
        "absolutePath": "contracts/src/token/MultiTokenDataProvider.sol",
        "file": "contracts/src/token/MultiTokenDataProvider.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92631,
        "sourceUnit": 13136,
        "symbolAliases": [
          {
            "foreign": {
              "id": 91711,
              "name": "MultiTokenDataProvider",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 13135,
              "src": "560:22:133",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 91714,
        "nodeType": "ImportDirective",
        "src": "640:65:133",
        "nodes": [],
        "absolutePath": "contracts/test/ERC20Mintable.sol",
        "file": "contracts/test/ERC20Mintable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92631,
        "sourceUnit": 13322,
        "symbolAliases": [
          {
            "foreign": {
              "id": 91713,
              "name": "ERC20Mintable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 13321,
              "src": "649:13:133",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 91716,
        "nodeType": "ImportDirective",
        "src": "706:47:133",
        "nodes": [],
        "absolutePath": "test/utils/Constants.sol",
        "file": "test/utils/Constants.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92631,
        "sourceUnit": 118843,
        "symbolAliases": [
          {
            "foreign": {
              "id": 91715,
              "name": "ETH",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 118842,
              "src": "715:3:133",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 91718,
        "nodeType": "ImportDirective",
        "src": "754:65:133",
        "nodes": [],
        "absolutePath": "test/utils/HyperdriveUtils.sol",
        "file": "test/utils/HyperdriveUtils.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 92631,
        "sourceUnit": 122443,
        "symbolAliases": [
          {
            "foreign": {
              "id": 91717,
              "name": "HyperdriveUtils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 122442,
              "src": "763:15:133",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 91836,
        "nodeType": "ContractDefinition",
        "src": "821:2065:133",
        "nodes": [
          {
            "id": 91725,
            "nodeType": "FunctionDefinition",
            "src": "853:51:133",
            "nodes": [],
            "functionSelector": "68096239",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "accrue",
            "nameLocation": "862:6:133",
            "parameters": {
              "id": 91723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91720,
                  "mutability": "mutable",
                  "name": "time",
                  "nameLocation": "877:4:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91725,
                  "src": "869:12:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91719,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "869:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91722,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "890:3:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91725,
                  "src": "883:10:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 91721,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "883:6:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "868:26:133"
            },
            "returnParameters": {
              "id": 91724,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "903:0:133"
            },
            "scope": 91836,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 91746,
            "nodeType": "FunctionDefinition",
            "src": "910:403:133",
            "nodes": [],
            "functionSelector": "c3a29753",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateFeesOutGivenSharesIn",
            "nameLocation": "919:29:133",
            "parameters": {
              "id": 91736,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91727,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "966:9:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91746,
                  "src": "958:17:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91726,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "958:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91729,
                  "mutability": "mutable",
                  "name": "_amountOut",
                  "nameLocation": "993:10:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91746,
                  "src": "985:18:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91728,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "985:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91731,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "1021:24:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91746,
                  "src": "1013:32:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91730,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1013:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91733,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "1063:10:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91746,
                  "src": "1055:18:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91732,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1055:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91735,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1091:10:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91746,
                  "src": "1083:18:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91734,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1083:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "948:159:133"
            },
            "returnParameters": {
              "id": 91745,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91738,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "1176:13:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91746,
                  "src": "1168:21:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91737,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1168:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91740,
                  "mutability": "mutable",
                  "name": "totalFlatFee",
                  "nameLocation": "1211:12:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91746,
                  "src": "1203:20:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91739,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1203:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91742,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "1245:18:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91746,
                  "src": "1237:26:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91741,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1237:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91744,
                  "mutability": "mutable",
                  "name": "governanceFlatFee",
                  "nameLocation": "1285:17:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91746,
                  "src": "1277:25:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91743,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1277:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1154:158:133"
            },
            "scope": 91836,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 91763,
            "nodeType": "FunctionDefinition",
            "src": "1319:335:133",
            "nodes": [],
            "functionSelector": "a30b7e3d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateFeesOutGivenBondsIn",
            "nameLocation": "1328:28:133",
            "parameters": {
              "id": 91755,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91748,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "1374:9:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91763,
                  "src": "1366:17:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91747,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1366:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91750,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "1401:24:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91763,
                  "src": "1393:32:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91749,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1393:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91752,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "1443:10:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91763,
                  "src": "1435:18:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91751,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1435:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91754,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1471:10:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91763,
                  "src": "1463:18:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91753,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1463:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1356:131:133"
            },
            "returnParameters": {
              "id": 91762,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91757,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "1556:13:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91763,
                  "src": "1548:21:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91756,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1548:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91759,
                  "mutability": "mutable",
                  "name": "totalFlatFee",
                  "nameLocation": "1591:12:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91763,
                  "src": "1583:20:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91758,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1583:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91761,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "1625:18:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91763,
                  "src": "1617:26:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91760,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1617:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1534:119:133"
            },
            "scope": 91836,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 91782,
            "nodeType": "FunctionDefinition",
            "src": "1660:375:133",
            "nodes": [],
            "functionSelector": "95530b75",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateFeesInGivenBondsOut",
            "nameLocation": "1669:28:133",
            "parameters": {
              "id": 91772,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91765,
                  "mutability": "mutable",
                  "name": "_amountOut",
                  "nameLocation": "1715:10:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91782,
                  "src": "1707:18:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91764,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1707:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91767,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "1743:24:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91782,
                  "src": "1735:32:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91766,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1735:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91769,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "1785:10:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91782,
                  "src": "1777:18:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91768,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1777:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91771,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1813:10:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91782,
                  "src": "1805:18:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91770,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1805:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1697:132:133"
            },
            "returnParameters": {
              "id": 91781,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91774,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "1898:13:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91782,
                  "src": "1890:21:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91773,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1890:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91776,
                  "mutability": "mutable",
                  "name": "totalFlatFee",
                  "nameLocation": "1933:12:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91782,
                  "src": "1925:20:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91775,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1925:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91778,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "1967:18:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91782,
                  "src": "1959:26:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91777,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1959:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91780,
                  "mutability": "mutable",
                  "name": "governanceFlatFee",
                  "nameLocation": "2007:17:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91782,
                  "src": "1999:25:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91779,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1999:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1876:158:133"
            },
            "scope": 91836,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 91799,
            "nodeType": "FunctionDefinition",
            "src": "2041:334:133",
            "nodes": [],
            "functionSelector": "fa0f861d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenLong",
            "nameLocation": "2050:17:133",
            "parameters": {
              "id": 91789,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91784,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "2085:12:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91799,
                  "src": "2077:20:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91783,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2077:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91786,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "2115:11:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91799,
                  "src": "2107:19:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91785,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2107:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91788,
                  "mutability": "mutable",
                  "name": "_timeRemaining",
                  "nameLocation": "2144:14:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91799,
                  "src": "2136:22:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91787,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2136:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2067:97:133"
            },
            "returnParameters": {
              "id": 91798,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91791,
                  "mutability": "mutable",
                  "name": "shareReservesDelta",
                  "nameLocation": "2233:18:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91799,
                  "src": "2225:26:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91790,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2225:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91793,
                  "mutability": "mutable",
                  "name": "bondReservesDelta",
                  "nameLocation": "2273:17:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91799,
                  "src": "2265:25:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91792,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2265:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91795,
                  "mutability": "mutable",
                  "name": "bondProceeds",
                  "nameLocation": "2312:12:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91799,
                  "src": "2304:20:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91794,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2304:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91797,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "2346:18:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91799,
                  "src": "2338:26:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91796,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2338:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2211:163:133"
            },
            "scope": 91836,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 91806,
            "nodeType": "FunctionDefinition",
            "src": "2381:101:133",
            "nodes": [],
            "functionSelector": "68c2ecb8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemaining",
            "nameLocation": "2390:22:133",
            "parameters": {
              "id": 91802,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91801,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "2430:13:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91806,
                  "src": "2422:21:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91800,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2422:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2412:37:133"
            },
            "returnParameters": {
              "id": 91805,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91804,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 91806,
                  "src": "2473:7:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91803,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2473:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2472:9:133"
            },
            "scope": 91836,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 91813,
            "nodeType": "FunctionDefinition",
            "src": "2488:107:133",
            "nodes": [],
            "functionSelector": "ca6d38f7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemainingScaled",
            "nameLocation": "2497:28:133",
            "parameters": {
              "id": 91809,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91808,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "2543:13:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91813,
                  "src": "2535:21:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91807,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2535:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2525:37:133"
            },
            "returnParameters": {
              "id": 91812,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91811,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 91813,
                  "src": "2586:7:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91810,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2586:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2585:9:133"
            },
            "scope": 91836,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 91818,
            "nodeType": "FunctionDefinition",
            "src": "2601:60:133",
            "nodes": [],
            "functionSelector": "907c0f92",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "latestCheckpoint",
            "nameLocation": "2610:16:133",
            "parameters": {
              "id": 91814,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2626:2:133"
            },
            "returnParameters": {
              "id": 91817,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91816,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 91818,
                  "src": "2652:7:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91815,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2652:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2651:9:133"
            },
            "scope": 91836,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 91823,
            "nodeType": "FunctionDefinition",
            "src": "2667:62:133",
            "nodes": [],
            "functionSelector": "ced09112",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "updateLiquidity",
            "nameLocation": "2676:15:133",
            "parameters": {
              "id": 91821,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91820,
                  "mutability": "mutable",
                  "name": "shareReservesDelta",
                  "nameLocation": "2700:18:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91823,
                  "src": "2692:26:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91819,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2692:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2691:28:133"
            },
            "returnParameters": {
              "id": 91822,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2728:0:133"
            },
            "scope": 91836,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 91830,
            "nodeType": "FunctionDefinition",
            "src": "2735:75:133",
            "nodes": [],
            "functionSelector": "8392b8c0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setReserves",
            "nameLocation": "2744:11:133",
            "parameters": {
              "id": 91828,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91825,
                  "mutability": "mutable",
                  "name": "shareReserves",
                  "nameLocation": "2764:13:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91830,
                  "src": "2756:21:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91824,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2756:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91827,
                  "mutability": "mutable",
                  "name": "bondReserves",
                  "nameLocation": "2787:12:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91830,
                  "src": "2779:20:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91826,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2779:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2755:45:133"
            },
            "returnParameters": {
              "id": 91829,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2809:0:133"
            },
            "scope": 91836,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 91835,
            "nodeType": "FunctionDefinition",
            "src": "2816:68:133",
            "nodes": [],
            "functionSelector": "8e67f87e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getGovernanceFeesAccrued",
            "nameLocation": "2825:24:133",
            "parameters": {
              "id": 91831,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2849:2:133"
            },
            "returnParameters": {
              "id": 91834,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91833,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 91835,
                  "src": "2875:7:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91832,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2875:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2874:9:133"
            },
            "scope": 91836,
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
          91836
        ],
        "name": "IMockHyperdrive",
        "nameLocation": "831:15:133",
        "scope": 92631,
        "usedErrors": []
      },
      {
        "id": 92554,
        "nodeType": "ContractDefinition",
        "src": "2888:8858:133",
        "nodes": [
          {
            "id": 91841,
            "nodeType": "UsingForDirective",
            "src": "2932:33:133",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 91839,
              "name": "FixedPointMath",
              "nameLocations": [
                "2938:14:133"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8486,
              "src": "2938:14:133"
            },
            "typeName": {
              "id": 91840,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2957:7:133",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 91843,
            "nodeType": "VariableDeclaration",
            "src": "2971:28:133",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "totalShares",
            "nameLocation": "2988:11:133",
            "scope": 92554,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 91842,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2971:7:133",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 91864,
            "nodeType": "FunctionDefinition",
            "src": "3006:157:133",
            "nodes": [],
            "body": {
              "id": 91863,
              "nodeType": "Block",
              "src": "3161:2:133",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 91851,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 91846,
                    "src": "3113:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  {
                    "id": 91852,
                    "name": "_dataProvider",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 91848,
                    "src": "3122:13:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "arguments": [
                      {
                        "hexValue": "30",
                        "id": 91855,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3145:1:133",
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
                      "id": 91854,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3137:7:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes32_$",
                        "typeString": "type(bytes32)"
                      },
                      "typeName": {
                        "id": 91853,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3137:7:133",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 91856,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3137:10:133",
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
                        "id": 91859,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3157:1:133",
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
                      "id": 91858,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3149:7:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 91857,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3149:7:133",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 91860,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3149:10:133",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 91861,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 91850,
                  "name": "Hyperdrive",
                  "nameLocations": [
                    "3102:10:133"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 478,
                  "src": "3102:10:133"
                },
                "nodeType": "ModifierInvocation",
                "src": "3102:58:133"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 91849,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91846,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "3057:7:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91864,
                  "src": "3027:37:133",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 91845,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 91844,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "3027:11:133",
                        "3039:10:133"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6924,
                      "src": "3027:22:133"
                    },
                    "referencedDeclaration": 6924,
                    "src": "3027:22:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91848,
                  "mutability": "mutable",
                  "name": "_dataProvider",
                  "nameLocation": "3082:13:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91864,
                  "src": "3074:21:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 91847,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3074:7:133",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3017:84:133"
            },
            "returnParameters": {
              "id": 91862,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3161:0:133"
            },
            "scope": 92554,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 91876,
            "nodeType": "FunctionDefinition",
            "src": "3188:138:133",
            "nodes": [],
            "body": {
              "id": 91875,
              "nodeType": "Block",
              "src": "3281:45:133",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 91873,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 91871,
                      "name": "_marketState",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4570,
                      "src": "3291:12:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                        "typeString": "struct IHyperdrive.MarketState storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 91872,
                      "name": "_marketState_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 91868,
                      "src": "3306:13:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_MarketState_$6861_memory_ptr",
                        "typeString": "struct IHyperdrive.MarketState memory"
                      }
                    },
                    "src": "3291:28:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                      "typeString": "struct IHyperdrive.MarketState storage ref"
                    }
                  },
                  "id": 91874,
                  "nodeType": "ExpressionStatement",
                  "src": "3291:28:133"
                }
              ]
            },
            "documentation": {
              "id": 91865,
              "nodeType": "StructuredDocumentation",
              "src": "3169:14:133",
              "text": "Mocks ///"
            },
            "functionSelector": "88348397",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setMarketState",
            "nameLocation": "3197:14:133",
            "parameters": {
              "id": 91869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91868,
                  "mutability": "mutable",
                  "name": "_marketState_",
                  "nameLocation": "3252:13:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91876,
                  "src": "3221:44:133",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_MarketState_$6861_memory_ptr",
                    "typeString": "struct IHyperdrive.MarketState"
                  },
                  "typeName": {
                    "id": 91867,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 91866,
                      "name": "IHyperdrive.MarketState",
                      "nameLocations": [
                        "3221:11:133",
                        "3233:11:133"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6861,
                      "src": "3221:23:133"
                    },
                    "referencedDeclaration": 6861,
                    "src": "3221:23:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_MarketState_$6861_storage_ptr",
                      "typeString": "struct IHyperdrive.MarketState"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3211:60:133"
            },
            "returnParameters": {
              "id": 91870,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3281:0:133"
            },
            "scope": 92554,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 91886,
            "nodeType": "FunctionDefinition",
            "src": "3332:98:133",
            "nodes": [],
            "body": {
              "id": 91885,
              "nodeType": "Block",
              "src": "3387:43:133",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 91883,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 91881,
                      "name": "totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 91843,
                      "src": "3397:11:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 91882,
                      "name": "_totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 91878,
                      "src": "3411:12:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3397:26:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 91884,
                  "nodeType": "ExpressionStatement",
                  "src": "3397:26:133"
                }
              ]
            },
            "functionSelector": "a77384c1",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setTotalShares",
            "nameLocation": "3341:14:133",
            "parameters": {
              "id": 91879,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91878,
                  "mutability": "mutable",
                  "name": "_totalShares",
                  "nameLocation": "3364:12:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91886,
                  "src": "3356:20:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91877,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3356:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3355:22:133"
            },
            "returnParameters": {
              "id": 91880,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3387:0:133"
            },
            "scope": 92554,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 91954,
            "nodeType": "FunctionDefinition",
            "src": "3562:566:133",
            "nodes": [],
            "body": {
              "id": 91953,
              "nodeType": "Block",
              "src": "3613:515:133",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    null,
                    91894
                  ],
                  "declarations": [
                    null,
                    {
                      "constant": false,
                      "id": 91894,
                      "mutability": "mutable",
                      "name": "interest",
                      "nameLocation": "3633:8:133",
                      "nodeType": "VariableDeclaration",
                      "scope": 91953,
                      "src": "3626:15:133",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 91893,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3626:6:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 91907,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 91901,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "3729:4:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                  "typeString": "contract MockHyperdrive"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                  "typeString": "contract MockHyperdrive"
                                }
                              ],
                              "id": 91900,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3721:7:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 91899,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3721:7:133",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 91902,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3721:13:133",
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
                            "id": 91897,
                            "name": "_baseToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4548,
                            "src": "3700:10:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$6461",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 91898,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3711:9:133",
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6418,
                          "src": "3700:20:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view external returns (uint256)"
                          }
                        },
                        "id": 91903,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3700:35:133",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 91904,
                        "name": "apr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 91890,
                        "src": "3749:3:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 91905,
                        "name": "time",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 91888,
                        "src": "3766:4:133",
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
                        "id": 91895,
                        "name": "HyperdriveUtils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 122442,
                        "src": "3645:15:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveUtils_$122442_$",
                          "typeString": "type(library HyperdriveUtils)"
                        }
                      },
                      "id": 91896,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3661:25:133",
                      "memberName": "calculateCompoundInterest",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 121534,
                      "src": "3645:41:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$returns$_t_uint256_$_t_int256_$",
                        "typeString": "function (uint256,int256,uint256) pure returns (uint256,int256)"
                      }
                    },
                    "id": 91906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3645:135:133",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_int256_$",
                      "typeString": "tuple(uint256,int256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3623:157:133"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 91910,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 91908,
                      "name": "interest",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 91894,
                      "src": "3795:8:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 91909,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3806:1:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3795:12:133",
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
                      "id": 91931,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 91929,
                        "name": "interest",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 91894,
                        "src": "3963:8:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 91930,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3974:1:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "3963:12:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 91951,
                    "nodeType": "IfStatement",
                    "src": "3959:163:133",
                    "trueBody": {
                      "id": 91950,
                      "nodeType": "Block",
                      "src": "3977:145:133",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 91941,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "4056:4:133",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  ],
                                  "id": 91940,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "4048:7:133",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 91939,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4048:7:133",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 91942,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4048:13:133",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 91946,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "UnaryOperation",
                                    "operator": "-",
                                    "prefix": true,
                                    "src": "4087:9:133",
                                    "subExpression": {
                                      "id": 91945,
                                      "name": "interest",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 91894,
                                      "src": "4088:8:133",
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
                                  "id": 91944,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "4079:7:133",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 91943,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4079:7:133",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 91947,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4079:18:133",
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
                                        "id": 91935,
                                        "name": "_baseToken",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 4548,
                                        "src": "4013:10:133",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_contract$_IERC20_$6461",
                                          "typeString": "contract IERC20"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_contract$_IERC20_$6461",
                                          "typeString": "contract IERC20"
                                        }
                                      ],
                                      "id": 91934,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "4005:7:133",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_address_$",
                                        "typeString": "type(address)"
                                      },
                                      "typeName": {
                                        "id": 91933,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4005:7:133",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 91936,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "4005:19:133",
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
                                  "id": 91932,
                                  "name": "ERC20Mintable",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 13321,
                                  "src": "3991:13:133",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$13321_$",
                                    "typeString": "type(contract ERC20Mintable)"
                                  }
                                },
                                "id": 91937,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3991:34:133",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC20Mintable_$13321",
                                  "typeString": "contract ERC20Mintable"
                                }
                              },
                              "id": 91938,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4026:4:133",
                              "memberName": "burn",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13320,
                              "src": "3991:39:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                "typeString": "function (address,uint256) external"
                              }
                            },
                            "id": 91948,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3991:120:133",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 91949,
                          "nodeType": "ExpressionStatement",
                          "src": "3991:120:133"
                        }
                      ]
                    }
                  },
                  "id": 91952,
                  "nodeType": "IfStatement",
                  "src": "3791:331:133",
                  "trueBody": {
                    "id": 91928,
                    "nodeType": "Block",
                    "src": "3809:144:133",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 91920,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "3888:4:133",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                ],
                                "id": 91919,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3880:7:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 91918,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3880:7:133",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 91921,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3880:13:133",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 91924,
                                  "name": "interest",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 91894,
                                  "src": "3919:8:133",
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
                                "id": 91923,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3911:7:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 91922,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3911:7:133",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 91925,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3911:17:133",
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
                                      "id": 91914,
                                      "name": "_baseToken",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4548,
                                      "src": "3845:10:133",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$6461",
                                        "typeString": "contract IERC20"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IERC20_$6461",
                                        "typeString": "contract IERC20"
                                      }
                                    ],
                                    "id": 91913,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "3837:7:133",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 91912,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3837:7:133",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 91915,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3837:19:133",
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
                                "id": 91911,
                                "name": "ERC20Mintable",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13321,
                                "src": "3823:13:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$13321_$",
                                  "typeString": "type(contract ERC20Mintable)"
                                }
                              },
                              "id": 91916,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3823:34:133",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20Mintable_$13321",
                                "typeString": "contract ERC20Mintable"
                              }
                            },
                            "id": 91917,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3858:4:133",
                            "memberName": "mint",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13291,
                            "src": "3823:39:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256) external"
                            }
                          },
                          "id": 91926,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3823:119:133",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 91927,
                        "nodeType": "ExpressionStatement",
                        "src": "3823:119:133"
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
            "nameLocation": "3571:6:133",
            "parameters": {
              "id": 91891,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91888,
                  "mutability": "mutable",
                  "name": "time",
                  "nameLocation": "3586:4:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91954,
                  "src": "3578:12:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91887,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3578:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91890,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "3599:3:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 91954,
                  "src": "3592:10:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 91889,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3592:6:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3577:26:133"
            },
            "returnParameters": {
              "id": 91892,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3613:0:133"
            },
            "scope": 92554,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 91974,
            "nodeType": "FunctionDefinition",
            "src": "4134:146:133",
            "nodes": [],
            "body": {
              "id": 91973,
              "nodeType": "Block",
              "src": "4201:79:133",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 91963,
                              "name": "_oracle",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4618,
                              "src": "4227:7:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_OracleState_$6971_storage",
                                "typeString": "struct IHyperdrive.OracleState storage ref"
                              }
                            },
                            "id": 91964,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4235:4:133",
                            "memberName": "head",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6967,
                            "src": "4227:12:133",
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
                          "id": 91962,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4219:7:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 91961,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "4219:7:133",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 91965,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4219:21:133",
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
                              "id": 91968,
                              "name": "_oracle",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4618,
                              "src": "4250:7:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_OracleState_$6971_storage",
                                "typeString": "struct IHyperdrive.OracleState storage ref"
                              }
                            },
                            "id": 91969,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4258:13:133",
                            "memberName": "lastTimestamp",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6970,
                            "src": "4250:21:133",
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
                          "id": 91967,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4242:7:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 91966,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "4242:7:133",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 91970,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4242:30:133",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 91971,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "4218:55:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 91960,
                  "id": 91972,
                  "nodeType": "Return",
                  "src": "4211:62:133"
                }
              ]
            },
            "functionSelector": "8fca1f7b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getOracleState",
            "nameLocation": "4143:14:133",
            "parameters": {
              "id": 91955,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4157:2:133"
            },
            "returnParameters": {
              "id": 91960,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91957,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 91974,
                  "src": "4183:7:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91956,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4183:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91959,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 91974,
                  "src": "4192:7:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91958,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4192:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4182:18:133"
            },
            "scope": 92554,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92000,
            "nodeType": "FunctionDefinition",
            "src": "4286:213:133",
            "nodes": [],
            "body": {
              "id": 91999,
              "nodeType": "Block",
              "src": "4376:123:133",
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
                                "id": 91985,
                                "name": "_buffer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4614,
                                "src": "4415:7:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_OracleData_$4609_storage_$dyn_storage",
                                  "typeString": "struct HyperdriveStorage.OracleData storage ref[] storage ref"
                                }
                              },
                              "id": 91987,
                              "indexExpression": {
                                "id": 91986,
                                "name": "index",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 91976,
                                "src": "4423:5:133",
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
                              "src": "4415:14:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_OracleData_$4609_storage",
                                "typeString": "struct HyperdriveStorage.OracleData storage ref"
                              }
                            },
                            "id": 91988,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4430:4:133",
                            "memberName": "data",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4608,
                            "src": "4415:19:133",
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
                          "id": 91984,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4407:7:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 91983,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "4407:7:133",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 91989,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4407:28:133",
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
                                "id": 91992,
                                "name": "_buffer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4614,
                                "src": "4457:7:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_OracleData_$4609_storage_$dyn_storage",
                                  "typeString": "struct HyperdriveStorage.OracleData storage ref[] storage ref"
                                }
                              },
                              "id": 91994,
                              "indexExpression": {
                                "id": 91993,
                                "name": "index",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 91976,
                                "src": "4465:5:133",
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
                              "src": "4457:14:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_OracleData_$4609_storage",
                                "typeString": "struct HyperdriveStorage.OracleData storage ref"
                              }
                            },
                            "id": 91995,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4472:9:133",
                            "memberName": "timestamp",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4606,
                            "src": "4457:24:133",
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
                          "id": 91991,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4449:7:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 91990,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "4449:7:133",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 91996,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4449:33:133",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 91997,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "4393:99:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 91982,
                  "id": 91998,
                  "nodeType": "Return",
                  "src": "4386:106:133"
                }
              ]
            },
            "functionSelector": "4daa8b8f",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "loadOracle",
            "nameLocation": "4295:10:133",
            "parameters": {
              "id": 91977,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91976,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "4323:5:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92000,
                  "src": "4315:13:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91975,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4315:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4305:29:133"
            },
            "returnParameters": {
              "id": 91982,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91979,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 92000,
                  "src": "4358:7:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91978,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4358:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91981,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 92000,
                  "src": "4367:7:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91980,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4367:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4357:18:133"
            },
            "scope": 92554,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92010,
            "nodeType": "FunctionDefinition",
            "src": "4505:79:133",
            "nodes": [],
            "body": {
              "id": 92009,
              "nodeType": "Block",
              "src": "4550:34:133",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 92006,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92002,
                        "src": "4572:4:133",
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
                      "id": 92005,
                      "name": "recordPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5036,
                      "src": "4560:11:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 92007,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4560:17:133",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92008,
                  "nodeType": "ExpressionStatement",
                  "src": "4560:17:133"
                }
              ]
            },
            "functionSelector": "5a1a3e7c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "recordOracle",
            "nameLocation": "4514:12:133",
            "parameters": {
              "id": 92003,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92002,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "4535:4:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92010,
                  "src": "4527:12:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92001,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4527:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4526:14:133"
            },
            "returnParameters": {
              "id": 92004,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4550:0:133"
            },
            "scope": 92554,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92038,
            "nodeType": "FunctionDefinition",
            "src": "4590:448:133",
            "nodes": [],
            "body": {
              "id": 92037,
              "nodeType": "Block",
              "src": "4820:218:133",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 92031,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 92023,
                          "name": "totalCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92019,
                          "src": "4831:13:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 92024,
                          "name": "governanceCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92021,
                          "src": "4846:18:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 92025,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "4830:35:133",
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
                          "id": 92027,
                          "name": "_amountIn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92012,
                          "src": "4912:9:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 92028,
                          "name": "_spotPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92014,
                          "src": "4935:10:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 92029,
                          "name": "sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92016,
                          "src": "4959:10:133",
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
                        "id": 92026,
                        "name": "_calculateFeesOutGivenSharesIn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1173,
                        "src": "4868:30:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) view returns (uint256,uint256)"
                        }
                      },
                      "id": 92030,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4868:111:133",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "4830:149:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92032,
                  "nodeType": "ExpressionStatement",
                  "src": "4830:149:133"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 92033,
                        "name": "totalCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92019,
                        "src": "4997:13:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 92034,
                        "name": "governanceCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92021,
                        "src": "5012:18:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 92035,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "4996:35:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 92022,
                  "id": 92036,
                  "nodeType": "Return",
                  "src": "4989:42:133"
                }
              ]
            },
            "functionSelector": "f6e55449",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateFeesOutGivenSharesIn",
            "nameLocation": "4599:29:133",
            "parameters": {
              "id": 92017,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92012,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "4646:9:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92038,
                  "src": "4638:17:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92011,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4638:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92014,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "4673:10:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92038,
                  "src": "4665:18:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92013,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4665:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92016,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "4701:10:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92038,
                  "src": "4693:18:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92015,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4693:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4628:89:133"
            },
            "returnParameters": {
              "id": 92022,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92019,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "4773:13:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92038,
                  "src": "4765:21:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92018,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4765:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92021,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "4796:18:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92038,
                  "src": "4788:26:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92020,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4788:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4764:51:133"
            },
            "scope": 92554,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92073,
            "nodeType": "FunctionDefinition",
            "src": "5044:668:133",
            "nodes": [],
            "body": {
              "id": 92072,
              "nodeType": "Block",
              "src": "5383:329:133",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 92065,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 92055,
                          "name": "totalCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92049,
                          "src": "5407:13:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 92056,
                          "name": "totalFlatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92051,
                          "src": "5434:12:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 92057,
                          "name": "totalGovernanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92053,
                          "src": "5460:18:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 92058,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "5393:95:133",
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
                          "id": 92060,
                          "name": "_amountIn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92040,
                          "src": "5534:9:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 92061,
                          "name": "_normalizedTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92042,
                          "src": "5557:24:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 92062,
                          "name": "_spotPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92044,
                          "src": "5595:10:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 92063,
                          "name": "sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92046,
                          "src": "5619:10:133",
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
                        "id": 92059,
                        "name": "_calculateFeesOutGivenBondsIn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1245,
                        "src": "5491:29:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256)"
                        }
                      },
                      "id": 92064,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5491:148:133",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256)"
                      }
                    },
                    "src": "5393:246:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92066,
                  "nodeType": "ExpressionStatement",
                  "src": "5393:246:133"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 92067,
                        "name": "totalCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92049,
                        "src": "5657:13:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 92068,
                        "name": "totalFlatFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92051,
                        "src": "5672:12:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 92069,
                        "name": "totalGovernanceFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92053,
                        "src": "5686:18:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 92070,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "5656:49:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 92054,
                  "id": 92071,
                  "nodeType": "Return",
                  "src": "5649:56:133"
                }
              ]
            },
            "functionSelector": "a30b7e3d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateFeesOutGivenBondsIn",
            "nameLocation": "5053:28:133",
            "parameters": {
              "id": 92047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92040,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "5099:9:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92073,
                  "src": "5091:17:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92039,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5091:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92042,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "5126:24:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92073,
                  "src": "5118:32:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92041,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5118:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92044,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "5168:10:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92073,
                  "src": "5160:18:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92043,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5160:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92046,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "5196:10:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92073,
                  "src": "5188:18:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92045,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5188:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5081:131:133"
            },
            "returnParameters": {
              "id": 92054,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92049,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "5281:13:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92073,
                  "src": "5273:21:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92048,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5273:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92051,
                  "mutability": "mutable",
                  "name": "totalFlatFee",
                  "nameLocation": "5316:12:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92073,
                  "src": "5308:20:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92050,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5308:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92053,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "5350:18:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92073,
                  "src": "5342:26:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92052,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5342:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5259:119:133"
            },
            "scope": 92554,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92112,
            "nodeType": "FunctionDefinition",
            "src": "5718:817:133",
            "nodes": [],
            "body": {
              "id": 92111,
              "nodeType": "Block",
              "src": "6097:438:133",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 92103,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 92092,
                          "name": "totalCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92084,
                          "src": "6121:13:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 92093,
                          "name": "totalFlatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92086,
                          "src": "6148:12:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 92094,
                          "name": "governanceCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92088,
                          "src": "6174:18:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 92095,
                          "name": "governanceFlatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92090,
                          "src": "6206:17:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 92096,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "6107:126:133",
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
                          "id": 92098,
                          "name": "_amountOut",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92075,
                          "src": "6279:10:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 92099,
                          "name": "_normalizedTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92077,
                          "src": "6303:24:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 92100,
                          "name": "_spotPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92079,
                          "src": "6341:10:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 92101,
                          "name": "sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92081,
                          "src": "6365:10:133",
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
                        "id": 92097,
                        "name": "_calculateFeesInGivenBondsOut",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1319,
                        "src": "6236:29:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256,uint256)"
                        }
                      },
                      "id": 92102,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6236:149:133",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,uint256)"
                      }
                    },
                    "src": "6107:278:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92104,
                  "nodeType": "ExpressionStatement",
                  "src": "6107:278:133"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 92105,
                        "name": "totalCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92084,
                        "src": "6416:13:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 92106,
                        "name": "totalFlatFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92086,
                        "src": "6443:12:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 92107,
                        "name": "governanceCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92088,
                        "src": "6469:18:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 92108,
                        "name": "governanceFlatFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92090,
                        "src": "6501:17:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 92109,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "6402:126:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 92091,
                  "id": 92110,
                  "nodeType": "Return",
                  "src": "6395:133:133"
                }
              ]
            },
            "functionSelector": "95530b75",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateFeesInGivenBondsOut",
            "nameLocation": "5727:28:133",
            "parameters": {
              "id": 92082,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92075,
                  "mutability": "mutable",
                  "name": "_amountOut",
                  "nameLocation": "5773:10:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92112,
                  "src": "5765:18:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92074,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5765:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92077,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "5801:24:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92112,
                  "src": "5793:32:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92076,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5793:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92079,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "5843:10:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92112,
                  "src": "5835:18:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92078,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5835:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92081,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "5871:10:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92112,
                  "src": "5863:18:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92080,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5863:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5755:132:133"
            },
            "returnParameters": {
              "id": 92091,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92084,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "5956:13:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92112,
                  "src": "5948:21:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92083,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5948:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92086,
                  "mutability": "mutable",
                  "name": "totalFlatFee",
                  "nameLocation": "5991:12:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92112,
                  "src": "5983:20:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92085,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5983:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92088,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "6025:18:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92112,
                  "src": "6017:26:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92087,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6017:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92090,
                  "mutability": "mutable",
                  "name": "governanceFlatFee",
                  "nameLocation": "6065:17:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92112,
                  "src": "6057:25:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92089,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6057:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5934:158:133"
            },
            "scope": 92554,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92133,
            "nodeType": "FunctionDefinition",
            "src": "6584:362:133",
            "nodes": [],
            "body": {
              "id": 92132,
              "nodeType": "Block",
              "src": "6877:69:133",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 92128,
                        "name": "_shareAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92114,
                        "src": "6913:12:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 92129,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92116,
                        "src": "6927:11:133",
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
                      "id": 92127,
                      "name": "_calculateOpenLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3551,
                      "src": "6894:18:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "function (uint256,uint256) returns (uint256,uint256,uint256,uint256)"
                      }
                    },
                    "id": 92130,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6894:45:133",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 92126,
                  "id": 92131,
                  "nodeType": "Return",
                  "src": "6887:52:133"
                }
              ]
            },
            "functionSelector": "9bd33498",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenLong",
            "nameLocation": "6593:17:133",
            "parameters": {
              "id": 92117,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92114,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "6628:12:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92133,
                  "src": "6620:20:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92113,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6620:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92116,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "6658:11:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92133,
                  "src": "6650:19:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92115,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6650:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6610:65:133"
            },
            "returnParameters": {
              "id": 92126,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92119,
                  "mutability": "mutable",
                  "name": "shareReservesDelta",
                  "nameLocation": "6731:18:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92133,
                  "src": "6723:26:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92118,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6723:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92121,
                  "mutability": "mutable",
                  "name": "bondReservesDelta",
                  "nameLocation": "6771:17:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92133,
                  "src": "6763:25:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92120,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6763:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92123,
                  "mutability": "mutable",
                  "name": "bondProceeds",
                  "nameLocation": "6810:12:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92133,
                  "src": "6802:20:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92122,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6802:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92125,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "6844:18:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92133,
                  "src": "6836:26:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92124,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6836:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6709:163:133"
            },
            "scope": 92554,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92145,
            "nodeType": "FunctionDefinition",
            "src": "6952:177:133",
            "nodes": [],
            "body": {
              "id": 92144,
              "nodeType": "Block",
              "src": "7067:62:133",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 92141,
                        "name": "_maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92135,
                        "src": "7108:13:133",
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
                      "id": 92140,
                      "name": "_calculateTimeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4793,
                      "src": "7084:23:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 92142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7084:38:133",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 92139,
                  "id": 92143,
                  "nodeType": "Return",
                  "src": "7077:45:133"
                }
              ]
            },
            "functionSelector": "68c2ecb8",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemaining",
            "nameLocation": "6961:22:133",
            "parameters": {
              "id": 92136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92135,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "7001:13:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92145,
                  "src": "6993:21:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92134,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6993:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6983:37:133"
            },
            "returnParameters": {
              "id": 92139,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92138,
                  "mutability": "mutable",
                  "name": "timeRemaining",
                  "nameLocation": "7052:13:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92145,
                  "src": "7044:21:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92137,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7044:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7043:23:133"
            },
            "scope": 92554,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92157,
            "nodeType": "FunctionDefinition",
            "src": "7135:189:133",
            "nodes": [],
            "body": {
              "id": 92156,
              "nodeType": "Block",
              "src": "7256:68:133",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 92153,
                        "name": "_maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92147,
                        "src": "7303:13:133",
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
                      "id": 92152,
                      "name": "_calculateTimeRemainingScaled",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4832,
                      "src": "7273:29:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 92154,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7273:44:133",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 92151,
                  "id": 92155,
                  "nodeType": "Return",
                  "src": "7266:51:133"
                }
              ]
            },
            "functionSelector": "ca6d38f7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemainingScaled",
            "nameLocation": "7144:28:133",
            "parameters": {
              "id": 92148,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92147,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "7190:13:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92157,
                  "src": "7182:21:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92146,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7182:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7172:37:133"
            },
            "returnParameters": {
              "id": 92151,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92150,
                  "mutability": "mutable",
                  "name": "timeRemaining",
                  "nameLocation": "7241:13:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92157,
                  "src": "7233:21:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92149,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7233:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7232:23:133"
            },
            "scope": 92554,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92166,
            "nodeType": "FunctionDefinition",
            "src": "7330:118:133",
            "nodes": [],
            "body": {
              "id": 92165,
              "nodeType": "Block",
              "src": "7405:43:133",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 92162,
                      "name": "_latestCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4850,
                      "src": "7422:17:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 92163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7422:19:133",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 92161,
                  "id": 92164,
                  "nodeType": "Return",
                  "src": "7415:26:133"
                }
              ]
            },
            "functionSelector": "907c0f92",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "latestCheckpoint",
            "nameLocation": "7339:16:133",
            "parameters": {
              "id": 92158,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7355:2:133"
            },
            "returnParameters": {
              "id": 92161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92160,
                  "mutability": "mutable",
                  "name": "checkpointTime",
                  "nameLocation": "7389:14:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92166,
                  "src": "7381:22:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92159,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7381:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7380:24:133"
            },
            "scope": 92554,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92176,
            "nodeType": "FunctionDefinition",
            "src": "7454:116:133",
            "nodes": [],
            "body": {
              "id": 92175,
              "nodeType": "Block",
              "src": "7516:54:133",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 92172,
                        "name": "_shareReservesDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92168,
                        "src": "7543:19:133",
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
                      "id": 92171,
                      "name": "_updateLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2512,
                      "src": "7526:16:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$returns$__$",
                        "typeString": "function (int256)"
                      }
                    },
                    "id": 92173,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7526:37:133",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92174,
                  "nodeType": "ExpressionStatement",
                  "src": "7526:37:133"
                }
              ]
            },
            "functionSelector": "8120a3e2",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateLiquidity",
            "nameLocation": "7463:15:133",
            "parameters": {
              "id": 92169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92168,
                  "mutability": "mutable",
                  "name": "_shareReservesDelta",
                  "nameLocation": "7486:19:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92176,
                  "src": "7479:26:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 92167,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7479:6:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7478:28:133"
            },
            "returnParameters": {
              "id": 92170,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7516:0:133"
            },
            "scope": 92554,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92188,
            "nodeType": "FunctionDefinition",
            "src": "7576:167:133",
            "nodes": [],
            "body": {
              "id": 92187,
              "nodeType": "Block",
              "src": "7679:64:133",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 92184,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92178,
                        "src": "7724:11:133",
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
                      "id": 92183,
                      "name": "_calculateIdleShareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1090,
                      "src": "7696:27:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 92185,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7696:40:133",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 92182,
                  "id": 92186,
                  "nodeType": "Return",
                  "src": "7689:47:133"
                }
              ]
            },
            "functionSelector": "b1b4b170",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateIdleShareReserves",
            "nameLocation": "7585:26:133",
            "parameters": {
              "id": 92179,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92178,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "7629:11:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92188,
                  "src": "7621:19:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92177,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7621:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7611:35:133"
            },
            "returnParameters": {
              "id": 92182,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92181,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 92188,
                  "src": "7670:7:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92180,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7670:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7669:9:133"
            },
            "scope": 92554,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92196,
            "nodeType": "FunctionDefinition",
            "src": "7749:93:133",
            "nodes": [],
            "body": {
              "id": 92195,
              "nodeType": "Block",
              "src": "7807:35:133",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 92193,
                    "name": "totalShares",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 91843,
                    "src": "7824:11:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 92192,
                  "id": 92194,
                  "nodeType": "Return",
                  "src": "7817:18:133"
                }
              ]
            },
            "functionSelector": "d5002f2e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTotalShares",
            "nameLocation": "7758:14:133",
            "parameters": {
              "id": 92189,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7772:2:133"
            },
            "returnParameters": {
              "id": 92192,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92191,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 92196,
                  "src": "7798:7:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92190,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7798:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7797:9:133"
            },
            "scope": 92554,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92216,
            "nodeType": "FunctionDefinition",
            "src": "7848:184:133",
            "nodes": [],
            "body": {
              "id": 92215,
              "nodeType": "Block",
              "src": "7923:109:133",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 92207,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 92203,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4570,
                        "src": "7933:12:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 92205,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "7946:13:133",
                      "memberName": "shareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6833,
                      "src": "7933:26:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 92206,
                      "name": "shareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 92198,
                      "src": "7962:13:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "7933:42:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 92208,
                  "nodeType": "ExpressionStatement",
                  "src": "7933:42:133"
                },
                {
                  "expression": {
                    "id": 92213,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 92209,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4570,
                        "src": "7985:12:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 92211,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "7998:12:133",
                      "memberName": "bondReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6836,
                      "src": "7985:25:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 92212,
                      "name": "bondReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 92200,
                      "src": "8013:12:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "7985:40:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 92214,
                  "nodeType": "ExpressionStatement",
                  "src": "7985:40:133"
                }
              ]
            },
            "functionSelector": "702db0eb",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setReserves",
            "nameLocation": "7857:11:133",
            "parameters": {
              "id": 92201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92198,
                  "mutability": "mutable",
                  "name": "shareReserves",
                  "nameLocation": "7877:13:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92216,
                  "src": "7869:21:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 92197,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "7869:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92200,
                  "mutability": "mutable",
                  "name": "bondReserves",
                  "nameLocation": "7900:12:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92216,
                  "src": "7892:20:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 92199,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "7892:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7868:45:133"
            },
            "returnParameters": {
              "id": 92202,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7923:0:133"
            },
            "scope": 92554,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92228,
            "nodeType": "FunctionDefinition",
            "src": "8038:113:133",
            "nodes": [],
            "body": {
              "id": 92227,
              "nodeType": "Block",
              "src": "8094:57:133",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 92225,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 92221,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4570,
                        "src": "8104:12:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 92223,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "8117:12:133",
                      "memberName": "longExposure",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6842,
                      "src": "8104:25:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 92224,
                      "name": "longExposure",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 92218,
                      "src": "8132:12:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "8104:40:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 92226,
                  "nodeType": "ExpressionStatement",
                  "src": "8104:40:133"
                }
              ]
            },
            "functionSelector": "b4f8da39",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setLongExposure",
            "nameLocation": "8047:15:133",
            "parameters": {
              "id": 92219,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92218,
                  "mutability": "mutable",
                  "name": "longExposure",
                  "nameLocation": "8071:12:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92228,
                  "src": "8063:20:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 92217,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "8063:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8062:22:133"
            },
            "returnParameters": {
              "id": 92220,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8094:0:133"
            },
            "scope": 92554,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92252,
            "nodeType": "FunctionDefinition",
            "src": "8359:174:133",
            "nodes": [],
            "body": {
              "id": 92251,
              "nodeType": "Block",
              "src": "8412:121:133",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 92243,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 92238,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "id": 92235,
                            "name": "_baseToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4548,
                            "src": "8434:10:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$6461",
                              "typeString": "contract IERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC20_$6461",
                              "typeString": "contract IERC20"
                            }
                          ],
                          "id": 92234,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8426:7:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 92233,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "8426:7:133",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 92236,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8426:19:133",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 92237,
                        "name": "ETH",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 118842,
                        "src": "8449:3:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "8426:26:133",
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
                      "id": 92242,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 92239,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "8456:3:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 92240,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8460:5:133",
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "src": "8456:9:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 92241,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8468:1:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "8456:13:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "8426:43:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 92250,
                  "nodeType": "IfStatement",
                  "src": "8422:105:133",
                  "trueBody": {
                    "id": 92249,
                    "nodeType": "Block",
                    "src": "8471:56:133",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 92244,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "8492:11:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 92246,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8504:10:133",
                            "memberName": "NotPayable",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7008,
                            "src": "8492:22:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 92247,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8492:24:133",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 92248,
                        "nodeType": "RevertStatement",
                        "src": "8485:31:133"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              662
            ],
            "documentation": {
              "id": 92229,
              "nodeType": "StructuredDocumentation",
              "src": "8157:18:133",
              "text": "Overrides ///"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkMessageValue",
            "nameLocation": "8368:18:133",
            "overrides": {
              "id": 92231,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "8403:8:133"
            },
            "parameters": {
              "id": 92230,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8386:2:133"
            },
            "returnParameters": {
              "id": 92232,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8412:0:133"
            },
            "scope": 92554,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 92389,
            "nodeType": "FunctionDefinition",
            "src": "8539:1435:133",
            "nodes": [],
            "body": {
              "id": 92388,
              "nodeType": "Block",
              "src": "8646:1328:133",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    92265
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 92265,
                      "mutability": "mutable",
                      "name": "assets",
                      "nameLocation": "8795:6:133",
                      "nodeType": "VariableDeclaration",
                      "scope": 92388,
                      "src": "8787:14:133",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 92264,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8787:7:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 92266,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8787:14:133"
                },
                {
                  "assignments": [
                    92268
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 92268,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "8816:7:133",
                      "nodeType": "VariableDeclaration",
                      "scope": 92388,
                      "src": "8811:12:133",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 92267,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "8811:4:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 92270,
                  "initialValue": {
                    "hexValue": "74727565",
                    "id": 92269,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "8826:4:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8811:19:133"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 92276,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 92273,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4548,
                          "src": "8852:10:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$6461",
                            "typeString": "contract IERC20"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IERC20_$6461",
                            "typeString": "contract IERC20"
                          }
                        ],
                        "id": 92272,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "8844:7:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 92271,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "8844:7:133",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 92274,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8844:19:133",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 92275,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 118842,
                      "src": "8867:3:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "8844:26:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 92343,
                    "nodeType": "Block",
                    "src": "9215:213:133",
                    "statements": [
                      {
                        "expression": {
                          "id": 92328,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 92320,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92265,
                            "src": "9229:6:133",
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
                                    "id": 92325,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "9267:4:133",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  ],
                                  "id": 92324,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "9259:7:133",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 92323,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "9259:7:133",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 92326,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9259:13:133",
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
                                "id": 92321,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4548,
                                "src": "9238:10:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$6461",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 92322,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9249:9:133",
                              "memberName": "balanceOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6418,
                              "src": "9238:20:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view external returns (uint256)"
                              }
                            },
                            "id": 92327,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9238:35:133",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9229:44:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 92329,
                        "nodeType": "ExpressionStatement",
                        "src": "9229:44:133"
                      },
                      {
                        "expression": {
                          "id": 92341,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 92330,
                            "name": "success",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92268,
                            "src": "9287:7:133",
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
                                  "id": 92333,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "9338:3:133",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 92334,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "9342:6:133",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "9338:10:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 92337,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "9374:4:133",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  ],
                                  "id": 92336,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "9366:7:133",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 92335,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "9366:7:133",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 92338,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9366:13:133",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 92339,
                                "name": "amount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 92254,
                                "src": "9397:6:133",
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
                                "id": 92331,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4548,
                                "src": "9297:10:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$6461",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 92332,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9308:12:133",
                              "memberName": "transferFrom",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6460,
                              "src": "9297:23:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,address,uint256) external returns (bool)"
                              }
                            },
                            "id": 92340,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9297:120:133",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "9287:130:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 92342,
                        "nodeType": "ExpressionStatement",
                        "src": "9287:130:133"
                      }
                    ]
                  },
                  "id": 92344,
                  "nodeType": "IfStatement",
                  "src": "8840:588:133",
                  "trueBody": {
                    "id": 92319,
                    "nodeType": "Block",
                    "src": "8872:337:133",
                    "statements": [
                      {
                        "expression": {
                          "id": 92283,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 92277,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92265,
                            "src": "8886:6:133",
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
                                  "id": 92280,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "8903:4:133",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                ],
                                "id": 92279,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "8895:7:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 92278,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "8895:7:133",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 92281,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8895:13:133",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 92282,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8909:7:133",
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "src": "8895:21:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8886:30:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 92284,
                        "nodeType": "ExpressionStatement",
                        "src": "8886:30:133"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 92288,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 92285,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "8934:3:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 92286,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8938:5:133",
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "8934:9:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "id": 92287,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92254,
                            "src": "8946:6:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8934:18:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 92295,
                        "nodeType": "IfStatement",
                        "src": "8930:92:133",
                        "trueBody": {
                          "id": 92294,
                          "nodeType": "Block",
                          "src": "8954:68:133",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "id": 92289,
                                    "name": "IHyperdrive",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7103,
                                    "src": "8979:11:133",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                      "typeString": "type(contract IHyperdrive)"
                                    }
                                  },
                                  "id": 92291,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8991:14:133",
                                  "memberName": "TransferFailed",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 7018,
                                  "src": "8979:26:133",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 92292,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8979:28:133",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 92293,
                              "nodeType": "RevertStatement",
                              "src": "8972:35:133"
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
                          "id": 92299,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 92296,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "9039:3:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 92297,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9043:5:133",
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "9039:9:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "id": 92298,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92254,
                            "src": "9051:6:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9039:18:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 92318,
                        "nodeType": "IfStatement",
                        "src": "9035:164:133",
                        "trueBody": {
                          "id": 92317,
                          "nodeType": "Block",
                          "src": "9059:140:133",
                          "statements": [
                            {
                              "expression": {
                                "id": 92315,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "components": [
                                    {
                                      "id": 92300,
                                      "name": "success",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 92268,
                                      "src": "9078:7:133",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    null
                                  ],
                                  "id": 92301,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "TupleExpression",
                                  "src": "9077:11:133",
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
                                      "id": 92313,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "9181:2:133",
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
                                              "id": 92304,
                                              "name": "msg",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": -15,
                                              "src": "9099:3:133",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                              }
                                            },
                                            "id": 92305,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "9103:6:133",
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "src": "9099:10:133",
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
                                          "id": 92303,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "9091:8:133",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_address_payable_$",
                                            "typeString": "type(address payable)"
                                          },
                                          "typeName": {
                                            "id": 92302,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "9091:8:133",
                                            "stateMutability": "payable",
                                            "typeDescriptions": {}
                                          }
                                        },
                                        "id": 92306,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9091:19:133",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address_payable",
                                          "typeString": "address payable"
                                        }
                                      },
                                      "id": 92307,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "9111:4:133",
                                      "memberName": "call",
                                      "nodeType": "MemberAccess",
                                      "src": "9091:24:133",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                      }
                                    },
                                    "id": 92312,
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
                                        "id": 92311,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "expression": {
                                            "id": 92308,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -15,
                                            "src": "9144:3:133",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_message",
                                              "typeString": "msg"
                                            }
                                          },
                                          "id": 92309,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "9148:5:133",
                                          "memberName": "value",
                                          "nodeType": "MemberAccess",
                                          "src": "9144:9:133",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                          "id": 92310,
                                          "name": "amount",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 92254,
                                          "src": "9156:6:133",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "9144:18:133",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "src": "9091:89:133",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                      "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                    }
                                  },
                                  "id": 92314,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "9091:93:133",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                    "typeString": "tuple(bool,bytes memory)"
                                  }
                                },
                                "src": "9077:107:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 92316,
                              "nodeType": "ExpressionStatement",
                              "src": "9077:107:133"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "id": 92346,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "9441:8:133",
                    "subExpression": {
                      "id": 92345,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 92268,
                      "src": "9442:7:133",
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
                  "id": 92353,
                  "nodeType": "IfStatement",
                  "src": "9437:74:133",
                  "trueBody": {
                    "id": 92352,
                    "nodeType": "Block",
                    "src": "9451:60:133",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 92347,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "9472:11:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 92349,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9484:14:133",
                            "memberName": "TransferFailed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7018,
                            "src": "9472:26:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 92350,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9472:28:133",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 92351,
                        "nodeType": "RevertStatement",
                        "src": "9465:35:133"
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
                    "id": 92356,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 92354,
                      "name": "totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 91843,
                      "src": "9646:11:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 92355,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9661:1:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "9646:16:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 92386,
                    "nodeType": "Block",
                    "src": "9797:171:133",
                    "statements": [
                      {
                        "assignments": [
                          92370
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 92370,
                            "mutability": "mutable",
                            "name": "newShares",
                            "nameLocation": "9819:9:133",
                            "nodeType": "VariableDeclaration",
                            "scope": 92386,
                            "src": "9811:17:133",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 92369,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "9811:7:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 92376,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 92373,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 92254,
                              "src": "9854:6:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 92374,
                              "name": "assets",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 92265,
                              "src": "9862:6:133",
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
                              "id": 92371,
                              "name": "totalShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 91843,
                              "src": "9831:11:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 92372,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9843:10:133",
                            "memberName": "mulDivDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7766,
                            "src": "9831:22:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 92375,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9831:38:133",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "9811:58:133"
                      },
                      {
                        "expression": {
                          "id": 92379,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 92377,
                            "name": "totalShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 91843,
                            "src": "9883:11:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 92378,
                            "name": "newShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92370,
                            "src": "9898:9:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9883:24:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 92380,
                        "nodeType": "ExpressionStatement",
                        "src": "9883:24:133"
                      },
                      {
                        "expression": {
                          "components": [
                            {
                              "id": 92381,
                              "name": "newShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 92370,
                              "src": "9929:9:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 92382,
                                "name": "_pricePerShare",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [
                                  92553
                                ],
                                "referencedDeclaration": 92553,
                                "src": "9940:14:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                  "typeString": "function () view returns (uint256)"
                                }
                              },
                              "id": 92383,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9940:16:133",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 92384,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "9928:29:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256)"
                          }
                        },
                        "functionReturnParameters": 92263,
                        "id": 92385,
                        "nodeType": "Return",
                        "src": "9921:36:133"
                      }
                    ]
                  },
                  "id": 92387,
                  "nodeType": "IfStatement",
                  "src": "9642:326:133",
                  "trueBody": {
                    "id": 92368,
                    "nodeType": "Block",
                    "src": "9664:127:133",
                    "statements": [
                      {
                        "expression": {
                          "id": 92362,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 92357,
                            "name": "totalShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 91843,
                            "src": "9678:11:133",
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
                                "id": 92360,
                                "name": "_initialSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4560,
                                "src": "9707:18:133",
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
                                "id": 92358,
                                "name": "amount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 92254,
                                "src": "9692:6:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 92359,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9699:7:133",
                              "memberName": "divDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7802,
                              "src": "9692:14:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 92361,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9692:34:133",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9678:48:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 92363,
                        "nodeType": "ExpressionStatement",
                        "src": "9678:48:133"
                      },
                      {
                        "expression": {
                          "components": [
                            {
                              "id": 92364,
                              "name": "totalShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 91843,
                              "src": "9748:11:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 92365,
                              "name": "_initialSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4560,
                              "src": "9761:18:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 92366,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "9747:33:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256)"
                          }
                        },
                        "functionReturnParameters": 92263,
                        "id": 92367,
                        "nodeType": "Return",
                        "src": "9740:40:133"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              674
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_deposit",
            "nameLocation": "8548:8:133",
            "overrides": {
              "id": 92258,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "8610:8:133"
            },
            "parameters": {
              "id": 92257,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92254,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "8574:6:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92389,
                  "src": "8566:14:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92253,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8566:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92256,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 92389,
                  "src": "8590:4:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 92255,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8590:4:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8556:44:133"
            },
            "returnParameters": {
              "id": 92263,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92260,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 92389,
                  "src": "8628:7:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92259,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8628:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92262,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 92389,
                  "src": "8637:7:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92261,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8637:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8627:18:133"
            },
            "scope": 92554,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 92504,
            "nodeType": "FunctionDefinition",
            "src": "9980:1203:133",
            "nodes": [],
            "body": {
              "id": 92503,
              "nodeType": "Block",
              "src": "10122:1061:133",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 92408,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 92401,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 92391,
                      "src": "10244:6:133",
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
                        "id": 92404,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 92402,
                          "name": "shares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92391,
                          "src": "10253:6:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 92403,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 91843,
                          "src": "10262:11:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "10253:20:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "id": 92406,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92391,
                        "src": "10290:6:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 92407,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "10253:43:133",
                      "trueExpression": {
                        "id": 92405,
                        "name": "totalShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 91843,
                        "src": "10276:11:133",
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
                    "src": "10244:52:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 92409,
                  "nodeType": "ExpressionStatement",
                  "src": "10244:52:133"
                },
                {
                  "assignments": [
                    92411
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 92411,
                      "mutability": "mutable",
                      "name": "assets",
                      "nameLocation": "10375:6:133",
                      "nodeType": "VariableDeclaration",
                      "scope": 92503,
                      "src": "10367:14:133",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 92410,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10367:7:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 92412,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10367:14:133"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 92418,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 92415,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4548,
                          "src": "10403:10:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$6461",
                            "typeString": "contract IERC20"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IERC20_$6461",
                            "typeString": "contract IERC20"
                          }
                        ],
                        "id": 92414,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10395:7:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 92413,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10395:7:133",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 92416,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10395:19:133",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 92417,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 118842,
                      "src": "10418:3:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10395:26:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 92438,
                    "nodeType": "Block",
                    "src": "10484:69:133",
                    "statements": [
                      {
                        "expression": {
                          "id": 92436,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 92428,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92411,
                            "src": "10498:6:133",
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
                                    "id": 92433,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "10536:4:133",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  ],
                                  "id": 92432,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "10528:7:133",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 92431,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "10528:7:133",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 92434,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "10528:13:133",
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
                                "id": 92429,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4548,
                                "src": "10507:10:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$6461",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 92430,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "10518:9:133",
                              "memberName": "balanceOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6418,
                              "src": "10507:20:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view external returns (uint256)"
                              }
                            },
                            "id": 92435,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10507:35:133",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "10498:44:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 92437,
                        "nodeType": "ExpressionStatement",
                        "src": "10498:44:133"
                      }
                    ]
                  },
                  "id": 92439,
                  "nodeType": "IfStatement",
                  "src": "10391:162:133",
                  "trueBody": {
                    "id": 92427,
                    "nodeType": "Block",
                    "src": "10423:55:133",
                    "statements": [
                      {
                        "expression": {
                          "id": 92425,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 92419,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92411,
                            "src": "10437:6:133",
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
                                  "id": 92422,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "10454:4:133",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                ],
                                "id": 92421,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "10446:7:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 92420,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "10446:7:133",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 92423,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "10446:13:133",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 92424,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "10460:7:133",
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "src": "10446:21:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "10437:30:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 92426,
                        "nodeType": "ExpressionStatement",
                        "src": "10437:30:133"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 92453,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 92440,
                      "name": "withdrawValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 92399,
                      "src": "10603:13:133",
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
                        "id": 92443,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 92441,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 91843,
                          "src": "10619:11:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 92442,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10634:1:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "10619:16:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 92451,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10708:1:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 92452,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "10619:90:133",
                      "trueExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 92448,
                                "name": "totalShares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 91843,
                                "src": "10680:11:133",
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
                                "id": 92446,
                                "name": "assets",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 92411,
                                "src": "10665:6:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 92447,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "10672:7:133",
                              "memberName": "divDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7802,
                              "src": "10665:14:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 92449,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10665:27:133",
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
                            "id": 92444,
                            "name": "shares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92391,
                            "src": "10650:6:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 92445,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10657:7:133",
                          "memberName": "mulDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7784,
                          "src": "10650:14:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 92450,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10650:43:133",
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
                    "src": "10603:106:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 92454,
                  "nodeType": "ExpressionStatement",
                  "src": "10603:106:133"
                },
                {
                  "expression": {
                    "id": 92457,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 92455,
                      "name": "totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 91843,
                      "src": "10798:11:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "id": 92456,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 92391,
                      "src": "10813:6:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10798:21:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 92458,
                  "nodeType": "ExpressionStatement",
                  "src": "10798:21:133"
                },
                {
                  "assignments": [
                    92460
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 92460,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "10834:7:133",
                      "nodeType": "VariableDeclaration",
                      "scope": 92503,
                      "src": "10829:12:133",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 92459,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "10829:4:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 92461,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10829:12:133"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 92467,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 92464,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4548,
                          "src": "10863:10:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$6461",
                            "typeString": "contract IERC20"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IERC20_$6461",
                            "typeString": "contract IERC20"
                          }
                        ],
                        "id": 92463,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10855:7:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 92462,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10855:7:133",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 92465,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10855:19:133",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 92466,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 118842,
                      "src": "10878:3:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10855:26:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 92490,
                    "nodeType": "Block",
                    "src": "10981:82:133",
                    "statements": [
                      {
                        "expression": {
                          "id": 92488,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 92482,
                            "name": "success",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92460,
                            "src": "10995:7:133",
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
                                "id": 92485,
                                "name": "destination",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 92393,
                                "src": "11025:11:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 92486,
                                "name": "withdrawValue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 92399,
                                "src": "11038:13:133",
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
                                "id": 92483,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4548,
                                "src": "11005:10:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$6461",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 92484,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "11016:8:133",
                              "memberName": "transfer",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6428,
                              "src": "11005:19:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) external returns (bool)"
                              }
                            },
                            "id": 92487,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11005:47:133",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "10995:57:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 92489,
                        "nodeType": "ExpressionStatement",
                        "src": "10995:57:133"
                      }
                    ]
                  },
                  "id": 92491,
                  "nodeType": "IfStatement",
                  "src": "10851:212:133",
                  "trueBody": {
                    "id": 92481,
                    "nodeType": "Block",
                    "src": "10883:92:133",
                    "statements": [
                      {
                        "expression": {
                          "id": 92479,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "components": [
                              {
                                "id": 92468,
                                "name": "success",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 92460,
                                "src": "10898:7:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              null
                            ],
                            "id": 92469,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "TupleExpression",
                            "src": "10897:11:133",
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
                                "id": 92477,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10961:2:133",
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
                                      "id": 92472,
                                      "name": "destination",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 92393,
                                      "src": "10919:11:133",
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
                                    "id": 92471,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "10911:8:133",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_payable_$",
                                      "typeString": "type(address payable)"
                                    },
                                    "typeName": {
                                      "id": 92470,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "10911:8:133",
                                      "stateMutability": "payable",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 92473,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "10911:20:133",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "id": 92474,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "10932:4:133",
                                "memberName": "call",
                                "nodeType": "MemberAccess",
                                "src": "10911:25:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                  "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                }
                              },
                              "id": 92476,
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
                                  "id": 92475,
                                  "name": "withdrawValue",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 92399,
                                  "src": "10945:13:133",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "src": "10911:49:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                              }
                            },
                            "id": 92478,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10911:53:133",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                              "typeString": "tuple(bool,bytes memory)"
                            }
                          },
                          "src": "10897:67:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 92480,
                        "nodeType": "ExpressionStatement",
                        "src": "10897:67:133"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "id": 92493,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "11076:8:133",
                    "subExpression": {
                      "id": 92492,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 92460,
                      "src": "11077:7:133",
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
                  "id": 92500,
                  "nodeType": "IfStatement",
                  "src": "11072:74:133",
                  "trueBody": {
                    "id": 92499,
                    "nodeType": "Block",
                    "src": "11086:60:133",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 92494,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "11107:11:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 92496,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11119:14:133",
                            "memberName": "TransferFailed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7018,
                            "src": "11107:26:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 92497,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11107:28:133",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 92498,
                        "nodeType": "RevertStatement",
                        "src": "11100:35:133"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 92501,
                    "name": "withdrawValue",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 92399,
                    "src": "11163:13:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 92400,
                  "id": 92502,
                  "nodeType": "Return",
                  "src": "11156:20:133"
                }
              ]
            },
            "baseFunctions": [
              686
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_withdraw",
            "nameLocation": "9989:9:133",
            "overrides": {
              "id": 92397,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "10081:8:133"
            },
            "parameters": {
              "id": 92396,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92391,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "10016:6:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92504,
                  "src": "10008:14:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92390,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10008:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92393,
                  "mutability": "mutable",
                  "name": "destination",
                  "nameLocation": "10040:11:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92504,
                  "src": "10032:19:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 92392,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10032:7:133",
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
                  "id": 92395,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 92504,
                  "src": "10061:4:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 92394,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10061:4:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9998:73:133"
            },
            "returnParameters": {
              "id": 92400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92399,
                  "mutability": "mutable",
                  "name": "withdrawValue",
                  "nameLocation": "10107:13:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92504,
                  "src": "10099:21:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92398,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10099:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10098:23:133"
            },
            "scope": 92554,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 92553,
            "nodeType": "FunctionDefinition",
            "src": "11189:555:133",
            "nodes": [],
            "body": {
              "id": 92552,
              "nodeType": "Block",
              "src": "11303:441:133",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    92511
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 92511,
                      "mutability": "mutable",
                      "name": "assets",
                      "nameLocation": "11381:6:133",
                      "nodeType": "VariableDeclaration",
                      "scope": 92552,
                      "src": "11373:14:133",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 92510,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11373:7:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 92512,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11373:14:133"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 92518,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 92515,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4548,
                          "src": "11409:10:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$6461",
                            "typeString": "contract IERC20"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_IERC20_$6461",
                            "typeString": "contract IERC20"
                          }
                        ],
                        "id": 92514,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "11401:7:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 92513,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "11401:7:133",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 92516,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11401:19:133",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 92517,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 118842,
                      "src": "11424:3:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "11401:26:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 92538,
                    "nodeType": "Block",
                    "src": "11490:69:133",
                    "statements": [
                      {
                        "expression": {
                          "id": 92536,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 92528,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92511,
                            "src": "11504:6:133",
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
                                    "id": 92533,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "11542:4:133",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  ],
                                  "id": 92532,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "11534:7:133",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 92531,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "11534:7:133",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 92534,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "11534:13:133",
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
                                "id": 92529,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4548,
                                "src": "11513:10:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$6461",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 92530,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "11524:9:133",
                              "memberName": "balanceOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6418,
                              "src": "11513:20:133",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view external returns (uint256)"
                              }
                            },
                            "id": 92535,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "11513:35:133",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "11504:44:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 92537,
                        "nodeType": "ExpressionStatement",
                        "src": "11504:44:133"
                      }
                    ]
                  },
                  "id": 92539,
                  "nodeType": "IfStatement",
                  "src": "11397:162:133",
                  "trueBody": {
                    "id": 92527,
                    "nodeType": "Block",
                    "src": "11429:55:133",
                    "statements": [
                      {
                        "expression": {
                          "id": 92525,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 92519,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92511,
                            "src": "11443:6:133",
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
                                  "id": 92522,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "11460:4:133",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$92554",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                ],
                                "id": 92521,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "11452:7:133",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 92520,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "11452:7:133",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 92523,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "11452:13:133",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 92524,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11466:7:133",
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "src": "11452:21:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "11443:30:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 92526,
                        "nodeType": "ExpressionStatement",
                        "src": "11443:30:133"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 92550,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 92540,
                      "name": "sharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 92508,
                      "src": "11674:10:133",
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
                        "id": 92543,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 92541,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 91843,
                          "src": "11687:11:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 92542,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11702:1:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "11687:16:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 92548,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "11736:1:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 92549,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "11687:50:133",
                      "trueExpression": {
                        "arguments": [
                          {
                            "id": 92546,
                            "name": "totalShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 91843,
                            "src": "11721:11:133",
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
                            "id": 92544,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92511,
                            "src": "11706:6:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 92545,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "11713:7:133",
                          "memberName": "divDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7802,
                          "src": "11706:14:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 92547,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11706:27:133",
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
                    "src": "11674:63:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 92551,
                  "nodeType": "ExpressionStatement",
                  "src": "11674:63:133"
                }
              ]
            },
            "baseFunctions": [
              692
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_pricePerShare",
            "nameLocation": "11198:14:133",
            "overrides": {
              "id": 92506,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "11253:8:133"
            },
            "parameters": {
              "id": 92505,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11212:2:133"
            },
            "returnParameters": {
              "id": 92509,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92508,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "11287:10:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92553,
                  "src": "11279:18:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92507,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11279:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11278:20:133"
            },
            "scope": 92554,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 91837,
              "name": "Hyperdrive",
              "nameLocations": [
                "2915:10:133"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 478,
              "src": "2915:10:133"
            },
            "id": 91838,
            "nodeType": "InheritanceSpecifier",
            "src": "2915:10:133"
          }
        ],
        "canonicalName": "MockHyperdrive",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          92554,
          478,
          4522,
          3682,
          2866,
          5037,
          1320,
          4904,
          12918,
          7657,
          13196,
          63474,
          72
        ],
        "name": "MockHyperdrive",
        "nameLocation": "2897:14:133",
        "scope": 92631,
        "usedErrors": [
          6976,
          6978,
          6982,
          6986,
          6988,
          6994,
          6996,
          6998,
          7000,
          7002,
          7004,
          7008,
          7010,
          7012,
          7014,
          7018,
          7026,
          7028,
          7044,
          7047,
          7060,
          7062,
          7064,
          7066,
          7068,
          7085,
          7088,
          7090,
          7097,
          7100,
          7102
        ]
      },
      {
        "id": 92630,
        "nodeType": "ContractDefinition",
        "src": "11748:807:133",
        "nodes": [
          {
            "id": 92561,
            "nodeType": "UsingForDirective",
            "src": "11848:33:133",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 92559,
              "name": "FixedPointMath",
              "nameLocations": [
                "11854:14:133"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8486,
              "src": "11854:14:133"
            },
            "typeName": {
              "id": 92560,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11873:7:133",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 92563,
            "nodeType": "VariableDeclaration",
            "src": "11887:28:133",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "totalShares",
            "nameLocation": "11904:11:133",
            "scope": 92630,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 92562,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "11887:7:133",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 92583,
            "nodeType": "FunctionDefinition",
            "src": "11922:166:133",
            "nodes": [],
            "body": {
              "id": 92582,
              "nodeType": "Block",
              "src": "12086:2:133",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 92569,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 92566,
                    "src": "12018:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 92570,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 92568,
                  "name": "HyperdriveDataProvider",
                  "nameLocations": [
                    "11995:22:133"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1778,
                  "src": "11995:22:133"
                },
                "nodeType": "ModifierInvocation",
                "src": "11995:31:133"
              },
              {
                "arguments": [
                  {
                    "arguments": [
                      {
                        "hexValue": "30",
                        "id": 92574,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12066:1:133",
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
                      "id": 92573,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "12058:7:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes32_$",
                        "typeString": "type(bytes32)"
                      },
                      "typeName": {
                        "id": 92572,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "12058:7:133",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 92575,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12058:10:133",
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
                        "id": 92578,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12078:1:133",
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
                      "id": 92577,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "12070:7:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 92576,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "12070:7:133",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 92579,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12070:10:133",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 92580,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 92571,
                  "name": "MultiTokenDataProvider",
                  "nameLocations": [
                    "12035:22:133"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 13135,
                  "src": "12035:22:133"
                },
                "nodeType": "ModifierInvocation",
                "src": "12035:46:133"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 92567,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92566,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "11973:7:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92583,
                  "src": "11943:37:133",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 92565,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 92564,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "11943:11:133",
                        "11955:10:133"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6924,
                      "src": "11943:22:133"
                    },
                    "referencedDeclaration": 6924,
                    "src": "11943:22:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11933:53:133"
            },
            "returnParameters": {
              "id": 92581,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12086:0:133"
            },
            "scope": 92630,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 92597,
            "nodeType": "FunctionDefinition",
            "src": "12113:128:133",
            "nodes": [],
            "body": {
              "id": 92596,
              "nodeType": "Block",
              "src": "12181:60:133",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 92592,
                            "name": "_governanceFeesAccrued",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4596,
                            "src": "12210:22:133",
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
                            "id": 92590,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "12199:3:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 92591,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "12203:6:133",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "12199:10:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 92593,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12199:34:133",
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
                      "id": 92589,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13134,
                      "src": "12191:7:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 92594,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12191:43:133",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 92595,
                  "nodeType": "ExpressionStatement",
                  "src": "12191:43:133"
                }
              ]
            },
            "documentation": {
              "id": 92584,
              "nodeType": "StructuredDocumentation",
              "src": "12094:14:133",
              "text": "Mocks ///"
            },
            "functionSelector": "8e67f87e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getGovernanceFeesAccrued",
            "nameLocation": "12122:24:133",
            "parameters": {
              "id": 92585,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12146:2:133"
            },
            "returnParameters": {
              "id": 92588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92587,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 92597,
                  "src": "12172:7:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92586,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12172:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12171:9:133"
            },
            "scope": 92630,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 92629,
            "nodeType": "FunctionDefinition",
            "src": "12270:283:133",
            "nodes": [],
            "body": {
              "id": 92628,
              "nodeType": "Block",
              "src": "12384:169:133",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    92605
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 92605,
                      "mutability": "mutable",
                      "name": "assets",
                      "nameLocation": "12402:6:133",
                      "nodeType": "VariableDeclaration",
                      "scope": 92628,
                      "src": "12394:14:133",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 92604,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12394:7:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 92613,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 92610,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "12440:4:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MockHyperdriveDataProvider_$92630",
                              "typeString": "contract MockHyperdriveDataProvider"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MockHyperdriveDataProvider_$92630",
                              "typeString": "contract MockHyperdriveDataProvider"
                            }
                          ],
                          "id": 92609,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "12432:7:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 92608,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "12432:7:133",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 92611,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12432:13:133",
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
                        "id": 92606,
                        "name": "_baseToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4548,
                        "src": "12411:10:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$6461",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 92607,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12422:9:133",
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6418,
                      "src": "12411:20:133",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 92612,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12411:35:133",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12394:52:133"
                },
                {
                  "expression": {
                    "id": 92624,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 92614,
                      "name": "sharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 92602,
                      "src": "12456:10:133",
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
                        "id": 92617,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 92615,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 92563,
                          "src": "12469:11:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 92616,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12484:1:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "12469:16:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 92622,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12518:1:133",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 92623,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "12469:50:133",
                      "trueExpression": {
                        "arguments": [
                          {
                            "id": 92620,
                            "name": "totalShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92563,
                            "src": "12503:11:133",
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
                            "id": 92618,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92605,
                            "src": "12488:6:133",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 92619,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "12495:7:133",
                          "memberName": "divDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7802,
                          "src": "12488:14:133",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 92621,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "12488:27:133",
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
                    "src": "12456:63:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 92625,
                  "nodeType": "ExpressionStatement",
                  "src": "12456:63:133"
                },
                {
                  "expression": {
                    "id": 92626,
                    "name": "sharePrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 92602,
                    "src": "12536:10:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 92603,
                  "id": 92627,
                  "nodeType": "Return",
                  "src": "12529:17:133"
                }
              ]
            },
            "baseFunctions": [
              1359
            ],
            "documentation": {
              "id": 92598,
              "nodeType": "StructuredDocumentation",
              "src": "12247:18:133",
              "text": "Overrides ///"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_pricePerShare",
            "nameLocation": "12279:14:133",
            "overrides": {
              "id": 92600,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "12334:8:133"
            },
            "parameters": {
              "id": 92599,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12293:2:133"
            },
            "returnParameters": {
              "id": 92603,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92602,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "12368:10:133",
                  "nodeType": "VariableDeclaration",
                  "scope": 92629,
                  "src": "12360:18:133",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 92601,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12360:7:133",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12359:20:133"
            },
            "scope": 92630,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 92555,
              "name": "MultiTokenDataProvider",
              "nameLocations": [
                "11791:22:133"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 13135,
              "src": "11791:22:133"
            },
            "id": 92556,
            "nodeType": "InheritanceSpecifier",
            "src": "11791:22:133"
          },
          {
            "baseName": {
              "id": 92557,
              "name": "HyperdriveDataProvider",
              "nameLocations": [
                "11819:22:133"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1778,
              "src": "11819:22:133"
            },
            "id": 92558,
            "nodeType": "InheritanceSpecifier",
            "src": "11819:22:133"
          }
        ],
        "canonicalName": "MockHyperdriveDataProvider",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          92630,
          1778,
          13135,
          7545,
          4904,
          13196,
          63474
        ],
        "name": "MockHyperdriveDataProvider",
        "nameLocation": "11757:26:133",
        "scope": 92631,
        "usedErrors": [
          6988,
          6994,
          6996,
          7000,
          7004,
          7033,
          7038,
          7088,
          7090,
          7097
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 133
} as const;
