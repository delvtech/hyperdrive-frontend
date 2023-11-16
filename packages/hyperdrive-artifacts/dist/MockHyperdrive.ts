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
      "name": "TransferFailed",
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
    "object": "0x6102a060405260016000553480156200001757600080fd5b506040516200d0b03803806200d0b08339810160408190526200003a91620003e2565b80816040516200004a9062000306565b620000569190620004b8565b604051809103906000f08015801562000073573d6000803e3d6000fd5b5082604051620000839062000314565b6200008f9190620004b8565b604051809103906000f080158015620000ac573d6000803e3d6000fd5b5082516001600160a01b0316608090815283015183906103e81115620000e5576040516349db44f560e01b815260040160405180910390fd5b60808101516101805260a08101516101a05260c08101516101c0526101008101516000036200012757604051635428734d60e01b815260040160405180910390fd5b6101008101805160a0525160e082015110806200015957508061010001518160e0015162000156919062000597565b15155b15620001785760405163253fffcf60e11b815260040160405180910390fd5b60e08181015160c05261012082015190526060810151610160908152610140820151600880546001600160a01b0319166001600160a01b0392831617905590820151166101e05261018081015151670de0b6b3a76400001080620001ec5750670de0b6b3a764000081610180015160200151115b80620002085750670de0b6b3a764000081610180015160400151115b1562000227576040516322f72cc360e11b815260040160405180910390fd5b610180810180515161010052805160209081015161012052905160409081015161014052818301516001600160a01b039081166102005292810151610220528051808201825260018152603160f81b9083015280517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc681830152466060820152306080828101919091528251808303909101815260a090910190915280519101206102405291821661026052166102805250620005ba9050565b6136e580620051b083390190565b61481b806200889583390190565b6040516101a081016001600160401b03811182821017156200035457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200037257600080fd5b919050565b6000606082840312156200038a57600080fd5b604051606081016001600160401b0381118282101715620003bb57634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101e08284031215620003f657600080fd5b6200040062000322565b6200040b836200035a565b81526200041b602084016200035a565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250610140620004848185016200035a565b90820152610160620004988482016200035a565b90820152610180620004ad8585830162000377565b908201529392505050565b81516001600160a01b031681526101e081016020830151620004e560208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015162000556828501826001600160a01b03169052565b5050610160838101516001600160a01b0316908301526101809283015180519383019390935260208301516101a08301526040909201516101c09091015290565b600082620005b557634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516149d8620007d86000396000818161089001528181610907015281816109c601528181610c2c0152610d4801526000818161023c015281816103e3015281816108d7015281816109390152818161096b015281816109fa01528181610be501528181610ca70152610d170152600081816104d901526112cc01526000505060005050600050506000612c9e0152600081816117a901526119d5015260008181611084015281816110d30152818161161a0152818161165601528181613272015281816135a4015261392c0152600081816114c00152818161150801528181611ef2015281816122010152818161222e015281816129f3015261357e015260008181610e4201528181610ebb0152818161103d0152612f01015260008181610e8f01528181612aa90152612ed5015260008181610e0801528181610ff9015261155a01526000818161149e0152818161152901528181611f13015281816129d101526135ca015260008181610fc0015281816116df0152818161187701528181611a6201528181612305015261242101526000611448015260008181610a4801528181610ae201528181610b5501528181611f4401528181611ffe015281816120c30152818161215b015281816128c7015261291001526149d86000f3fe6080604052600436106102255760003560e01c80639032c72611610123578063b4f8da39116100ab578063dbbe80701161006f578063dbbe80701461084b578063ded0623114610465578063e44808bc1461085e578063eac3e7991461087e578063ed64bab2146108b257610225565b8063b4f8da39146107c9578063ca6d38f714610803578063cba2e58d14610823578063cbc1343414610357578063d5002f2e1461083657610225565b80639cd241af116100f25780639cd241af1461074e578063a22cb465146105aa578063a77384c11461076e578063ab033ea91461078e578063b1b4b170146107a957610225565b80639032c726146106cb578063907c0f92146106eb5780639aa68462146107005780639bd334981461070e57610225565b80633e691db9116101b15780637180c8ca116101755780637180c8ca146105aa57806371f88b7c146105ca57806377d05ff4146105ea5780638120a3e2146105fd578063883483971461061d57610225565b80633e691db9146104fb5780634ed2d6ac1461051b578063680962391461053657806368c2ecb814610556578063702db0eb1461057657610225565b806321b57d53116101f857806321b57d53146103d157806322d5506b1461041d57806329b23fc11461046557806330adf81f146104935780633644e515146104c757610225565b806302329a2914610335578063074a6de91461035757806317fad7fc146103915780631c0f12b6146103b1575b34801561023157600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168585604051610274929190614062565b600060405180830381855af49150503d80600081146102af576040519150601f19603f3d011682016040523d82523d6000602084013e6102b4565b606091505b509150915081156102d857604051638bb0a34b60e01b815260040160405180910390fd5b60006102e382614072565b90506001600160e01b03198116636e64089360e11b1461030557815160208301fd5b8151600319810160048401908152926103269181016020019060240161411a565b80519650602001945050505050f35b34801561034157600080fd5b506103556103503660046141e4565b6108d2565b005b34801561036357600080fd5b50610377610372366004614213565b6108ff565b604080519283526020830191909152015b60405180910390f35b34801561039d57600080fd5b506103556103ac3660046142bf565b610934565b3480156103bd57600080fd5b506103556103cc366004614350565b610966565b3480156103dd57600080fd5b506104057f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610388565b34801561042957600080fd5b5061043d610438366004614394565b610996565b604080519586526020860194909452928401919091526060830152608082015260a001610388565b34801561047157600080fd5b506104856104803660046143c6565b6109bf565b604051908152602001610388565b34801561049f57600080fd5b506104857f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b3480156104d357600080fd5b506104857f000000000000000000000000000000000000000000000000000000000000000081565b34801561050757600080fd5b50610485610516366004614420565b6109f3565b34801561052757600080fd5b506103556103cc36600461445d565b34801561054257600080fd5b506103556105513660046144a3565b610a24565b34801561056257600080fd5b506104856105713660046144c5565b610bcf565b34801561058257600080fd5b506103556105913660046144f5565b6001600160801b03908116600160801b02911617600155565b3480156105b657600080fd5b506103556105c5366004614528565b610be0565b3480156105d657600080fd5b506103776105e536600461455f565b610c09565b6104856105f8366004614213565b610c25565b34801561060957600080fd5b506103556106183660046144c5565b610c58565b34801561062957600080fd5b5061035561063836600461459d565b805160208201516001600160801b03918216600160801b91831682021760015560408301516060840151908316908316820217600255608083015160a084015190831690831682021760035560c083015160e08401519083169216021760045561010080820151600580546101209094015161ffff1990941691151561ff00191691909117921515909102919091179055565b3480156106d757600080fd5b506103556106e6366004614665565b610c64565b3480156106f757600080fd5b50610485610c73565b6104856104803660046143c6565b34801561071a57600080fd5b5061072e6107293660046144a3565b610c82565b604080519485526020850193909352918301526060820152608001610388565b34801561075a57600080fd5b506103556107693660046146e1565b610ca2565b34801561077a57600080fd5b506103556107893660046144c5565b601055565b34801561079a57600080fd5b50610355610350366004614716565b3480156107b557600080fd5b506104856107c43660046144c5565b610cd1565b3480156107d557600080fd5b506103556107e4366004614731565b600280546001600160801b03928316600160801b029216919091179055565b34801561080f57600080fd5b5061048561081e3660046144c5565b610cdc565b6103776108313660046143c6565b610ce7565b34801561084257600080fd5b50601054610485565b6103776108593660046143c6565b610d03565b34801561086a57600080fd5b5061035561087936600461474c565b610d12565b34801561088a57600080fd5b506104057f000000000000000000000000000000000000000000000000000000000000000081565b3480156108be57600080fd5b506103556108cd3660046144c5565b610d43565b6108fb7f0000000000000000000000000000000000000000000000000000000000000000610d68565b5050565b60008061092b7f0000000000000000000000000000000000000000000000000000000000000000610d68565b50935093915050565b61095d7f0000000000000000000000000000000000000000000000000000000000000000610d68565b50505050505050565b61098f7f0000000000000000000000000000000000000000000000000000000000000000610d68565b5050505050565b60008060008060006109aa89898989610de2565b939d929c50909a509850909650945050505050565b60006109ea7f0000000000000000000000000000000000000000000000000000000000000000610d68565b50949350505050565b6000610a1e7f0000000000000000000000000000000000000000000000000000000000000000610d68565b50919050565b6040516370a0823160e01b8152306004820152600090610aba906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610a8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab391906147a3565b8385610ef9565b9150506000811315610b42576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b158015610b2e57600080fd5b505af115801561095d573d6000803e3d6000fd5b6000811215610bca576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac30610b84846147d2565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015610b2e57600080fd5b505050565b6000610bda82610f93565b92915050565b610bca7f0000000000000000000000000000000000000000000000000000000000000000610d68565b600080610c17858585610feb565b90925090505b935093915050565b6000610c507f0000000000000000000000000000000000000000000000000000000000000000610d68565b509392505050565b610c618161106b565b50565b61095d878787878787876111f2565b6000610c7d611441565b905090565b600080600080610c928686611477565b9299919850965090945092505050565b610ccb7f0000000000000000000000000000000000000000000000000000000000000000610d68565b50505050565b6000610bda826115f1565b6000610bda82611694565b600080610cf68686868661170a565b9150915094509492505050565b600080610cf68686868661195b565b610d3b7f0000000000000000000000000000000000000000000000000000000000000000610d68565b505050505050565b6108fb7f00000000000000000000000000000000000000000000000000000000000000005b6060600080836001600160a01b0316600036604051610d88929190614062565b600060405180830381855af49150503d8060008114610dc3576040519150601f19603f3d011682016040523d82523d6000602084013e610dc8565b606091505b509150915081610dda57805160208201fd5b805160208201f35b600080808080610e3a8887610e338c610e2d610e068d670de0b6b3a76400006147ee565b7f000000000000000000000000000000000000000000000000000000000000000090611bab565b90611bab565b9190611bbc565b9450610e66857f0000000000000000000000000000000000000000000000000000000000000000611bab565b92506000610e87610e7f8a670de0b6b3a76400006147ee565b8b9089611bbc565b9050610eb3817f0000000000000000000000000000000000000000000000000000000000000000611bab565b9450610edf857f0000000000000000000000000000000000000000000000000000000000000000611bab565b9250610eeb8385614801565b915050945094509450945094565b60008080610f0b846301e13380611bda565b90506000610f2a8260008812610f215787610e2d565b610e2d886147d2565b90506000861315610f5d57610f48610f4182611bef565b8890611bab565b9350610f5487856147ee565b92505050610c1d565b6000861215610f8557610f79610f7282611bef565b8890611bda565b9350610f548785614814565b509495600095509350505050565b600080610f9e611441565b9050808311610fae576000610fb8565b610fb881846147ee565b9150610fe4827f0000000000000000000000000000000000000000000000000000000000000000611bda565b9392505050565b60008061103585610e2d85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061102b818c611bda565b610e2d91906147ee565b9150611061827f0000000000000000000000000000000000000000000000000000000000000000611bab565b9050935093915050565b806000036110765750565b6001546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156110c35760405163585fe6df60e11b815260040160405180910390fd5b60006110cf838361483b565b90507f00000000000000000000000000000000000000000000000000000000000000008112156111125760405163585fe6df60e11b815260040160405180910390fd5b61111b81611d7a565b600180546001600160801b0319166001600160801b0392909216919091179055600254600090600f0b81811261115d57611156838286611bbc565b915061117d565b611171611169826147d2565b849086611bbc565b61117a906147d2565b91505b61118682611da4565b600280546001600160801b0319166001600160801b039283161790556001546111ce916111c991600160801b9004166111bf8785611de2565b610e338787611de2565b611d7a565b600180546001600160801b03928316600160801b0292169190911790555050505050565b834211156112135760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b03871661123a5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611366573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146113a457604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600f6020526040812080549091906113ca90614863565b909155506001600160a01b038981166000818152600d60209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b600061146d7f000000000000000000000000000000000000000000000000000000000000000042614892565b610c7d90426147ee565b6000806000806114e4611488611dff565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000611e20565b9250600061154d6114f3611dff565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e4c565b9050611583878561157e847f0000000000000000000000000000000000000000000000000000000000000000611e6c565b611eb9565b156115a15760405163512095c760e01b815260040160405180910390fd5b6000806115af89848a610feb565b90925090506115be82876147ee565b94506115ca8186614801565b95506115d781848a611bbc565b93506115e3848a6147ee565b965050505092959194509250565b600254600090819061161390600160801b90046001600160801b031684611bda565b905061163f7f000000000000000000000000000000000000000000000000000000000000000082614801565b6001546001600160801b03161115610a1e576001547f00000000000000000000000000000000000000000000000000000000000000009061168a9083906001600160801b03166147ee565b610fe491906147ee565b600080670de0b6b3a76400006116a8611441565b6116b291906148a6565b90508083116116c25760006116cc565b6116cc81846147ee565b9150610fe4611703670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006148a6565b8390611bda565b6000806000546001146117515760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064015b60405180910390fd5b6002600055600554610100900460ff161561177f576040516313d0ff5960e31b815260040160405180910390fd5b611787611f42565b6000806117948886611faf565b909250905060006117a58383611bab565b90507f00000000000000000000000000000000000000000000000000000000000000008110156117e85760405163211ddda360e11b815260040160405180910390fd5b86821015611809576040516342af972b60e01b815260040160405180910390fd5b6000611813611441565b905061181f818461229c565b50600080600061182f8787611477565b909a5091945092509050878c111561185a5760405163c972651760e01b815260040160405180910390fd5b806009600082825461186c9190614801565b9091555061189c90507f000000000000000000000000000000000000000000000000000000000000000085614801565b98506118ac83898489888e6125a6565b60006118b960018b6127a0565b90506118d2816118cc60208e018e614716565b8b6127d5565b8d8b8a836118e36020840184614716565b6001600160a01b03167f8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda6868f611919878f8861287d565b60408051928352602083019190915281018e90526060810185905260800160405180910390a39a50505050505050505050506001600055909590945092505050565b60008060005460011461199d5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401611748565b6002600055600554610100900460ff16156119cb576040516313d0ff5960e31b815260040160405180910390fd5b6119d3611f42565b7f0000000000000000000000000000000000000000000000000000000000000000861015611a145760405163211ddda360e11b815260040160405180910390fd5b6000611a1e6128ac565b905084811015611a41576040516342af972b60e01b815260040160405180910390fd5b6000611a4b611441565b90506000611a59828461229c565b90506000611a877f000000000000000000000000000000000000000000000000000000000000000084614801565b90506000806000611a998d88876129ab565b600980549296509294509250829190600090611ab6908490614801565b92505081905550506000611acb82888c612add565b9050808c1015611aee5760405163c972651760e01b815260040160405180910390fd5b611af8818b611faf565b5050611b078d83858a88612b05565b6000611b146002866127a0565b90508d611b2e82611b2860208f018f614716565b836127d5565b81611b3c60208e018e614716565b60408051898152602081018890529081018c9052606081018490526001600160a01b0391909116907f80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef959060800160405180910390a350506001600055929c929b50919950505050505050505050565b6000610fe48383670de0b6b3a76400005b6000826000190484118302158202611bd357600080fd5b5091020490565b6000610fe483670de0b6b3a764000084611bbc565b6000680248ce36a70cb26b3e198213611c0a57506000919050565b680755bf798b4a1bf1e58212611c335760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000600160801b8210611da057604051630f0af95160e11b815260040160405180910390fd5b5090565b600060016001607f1b03198212801590611dc5575060016001607f1b038213155b611da05760405163a5353be560e01b815260040160405180910390fd5b600080611def8385614814565b90506000811215610fe457600080fd5b600154600254600091610c7d916001600160801b0390911690600f0b611de2565b6000611e41878787611e3a88670de0b6b3a76400006147ee565b8787612d92565b979650505050505050565b6000611e6382611e5d858888611bbc565b90612e33565b95945050505050565b6000610fe4611e98670de0b6b3a7640000611e878187612e94565b611e9191906147ee565b8490612ea9565b611eaa90670de0b6b3a7640000614801565b670de0b6b3a764000090611bda565b600080611f3785611ec8611dff565b611ed29190614801565b600154611ef0908790600160801b90046001600160801b03166147ee565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e4c565b909210949350505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14801590611f8f5750600034115b15611fad57604051631574f9f360e01b815260040160405180910390fd5b565b60008080611fc360408501602086016141e4565b611fde57611fd9611fd26128ac565b8690611bab565b611fe0565b845b90506000600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016120ae574791508234101561204f576040516312171d8360e31b815260040160405180910390fd5b823411156120a9573361206284346147ee565b604051600081818185875af1925050503d806000811461209e576040519150601f19603f3d011682016040523d82523d6000602084013e6120a3565b606091505b50909150505b6121d3565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612112573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061213691906147a3565b6040516323b872dd60e01b8152336004820152306024820152604481018590529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156121ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121d091906148bd565b90505b806121f1576040516312171d8360e31b815260040160405180910390fd5b60105460000361225857612225877f0000000000000000000000000000000000000000000000000000000000000000611bda565b601081905594507f0000000000000000000000000000000000000000000000000000000000000000935061229592505050565b601054600090612269908985611bbc565b9050806010600082825461227d9190614801565b9091555081905061228c6128ac565b95509550505050505b9250929050565b600082815260076020526040812080546001600160801b03161515806122c157504284115b156122d757546001600160801b03169050610bda565b6122e083611d7a565b81546001600160801b0319166001600160801b0391909116178155600060078161232a7f0000000000000000000000000000000000000000000000000000000000000000886147ee565b815260208101919091526040016000908120546001600160801b031691506123536002876127a0565b6000818152600c602052604081205491925081156123ac5760008061237b848a886000612ebe565b9150915080600960008282546123919190614801565b909155506123a5905084600084808e612f8c565b6001925050505b60006123b960018a6127a0565b6000818152600c60205260409020549091508015612414576000806123e1838c8a6001612ebe565b9150915080600960008282546123f79190614801565b909155508c905061240c846000858085613106565b600195505050505b82156124925760006124467f00000000000000000000000000000000000000000000000000000000000000008c6147ee565b600081815260076020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b92612486928492919004900b6132d3565b61248f8b6133fa565b50505b6000808a116124a25760006124b7565b6124b78a610e2d6124b28d6134e1565b613647565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b03909216916125229190614801565b61252c91906147ee565b905060008115612545576125408383611bda565b612548565b60005b604080518e8152602081018a9052908101869052606081018290529091508d907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a250999b9a5050505050505050505050565b6003546001600160801b03166125e16111c9826125cb85670de0b6b3a76400006148a6565b6004546001600160801b031691908a60016138ab565b600480546001600160801b0319166001600160801b039290921691909117905561260a87611d7a565b600180546000906126259084906001600160801b03166148da565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061265285611d7a565b60018054601090612674908490600160801b90046001600160801b03166148fa565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506126a186611d7a565b6126ab90826148da565b600380546001600160801b0319166001600160801b0383161790556000848152600760205260408120805492935091600160801b9004600f0b906127076126f28b89611bab565b6126fd8b60026148a6565b6111c991906147ee565b835490915081908490601090612728908490600160801b9004600f0b61491a565b82546001600160801b039182166101009390930a928302919092021990911617905550825461276590600f84810b91600160801b9004900b6132d3565b61276e87613925565b61278b576040516318846de960e01b815260040160405180910390fd5b612794876133fa565b50505050505050505050565b60006001600160f81b038211156127ca5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600b602090815260408083206001600160a01b038616845290915281208054839290612807908490614801565b90915550506000838152600c60205260408120805483929061282a908490614801565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061288f60408301602084016141e4565b1561289b575082610fe4565b6128a58484611bab565b9050610fe4565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016128fb575047612986565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561295f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061298391906147a3565b90505b6010546000036129975760006129a5565b6010546129a5908290611bda565b91505090565b6000806000612a176129bb611dff565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061398a565b915085612a248387611bab565b1115612a435760405163512095c760e01b815260040160405180910390fd5b6000806000612a536114f3611dff565b9050612a6989670de0b6b3a7640000838b610de2565b509295509350612a7d9150839050846147ee565b612a8790866147ee565b9450612acd88610e2d8b612a9b868a6147ee565b8b612aa68e826139ab565b8e7f00000000000000000000000000000000000000000000000000000000000000006139c1565b9550909250505093509350939050565b6000612aef60408301602084016141e4565b15612afb575082610fe4565b6128a58484611bda565b600354612b4f906111c990600160801b90046001600160801b0316612b3284670de0b6b3a76400006148a6565b600454600160801b90046001600160801b031691908960016138ab565b600480546001600160801b03928316600160801b0292169190911790556000612b7784611d7a565b600154612b8d91906001600160801b03166148fa565b600180546001600160801b0319166001600160801b0383161790559050612bb386611d7a565b60018054601090612bd5908490600160801b90046001600160801b03166148da565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612c0286611d7a565b60038054601090612c24908490600160801b90046001600160801b03166148da565b82546101009290920a6001600160801b03818102199093169183160217909155600254600154600f9190910b911612159050612c735760405163585fe6df60e11b815260040160405180910390fd5b6000612c7d611441565b600081815260076020526040902054909150600160801b9004600f0b612cc37f000000000000000000000000000000000000000000000000000000000000000088614892565b612ccd90886147ee565b96506000612cdb8989614801565b9050612ce681611d7a565b60008481526007602052604090208054601090612d0e908490600160801b9004600f0b614947565b82546001600160801b039182166101009390930a928302919092021990911617905550600083815260076020526040902054612d5890600f84810b91600160801b9004900b6132d3565b612d6186613925565b612d7e576040516318846de960e01b815260040160405180910390fd5b612d87866133fa565b505050505050505050565b600080612da28888878787613a13565b9050612db585611e5d611fd2898c614801565b9750612dc2848985611bbc565b97506000612dd089836147ee565b9050670de0b6b3a76400008110612e0457612dfd612df6670de0b6b3a764000088612e94565b8290612e33565b9050612e1c565b612e19612df6670de0b6b3a764000088611bda565b90505b612e2681896147ee565b9998505050505050505050565b600081600003612e4c5750670de0b6b3a7640000610bda565b82600003612e5c57506000610bda565b816000612e6885613a42565b9050818102612e7f670de0b6b3a764000082614974565b9050612e8a81611bef565b9695505050505050565b6000610fe483670de0b6b3a764000084613c55565b6000610fe48383670de0b6b3a7640000613c55565b600080612ecb8686611bda565b91506000612ef9837f0000000000000000000000000000000000000000000000000000000000000000611bab565b9050612f25817f0000000000000000000000000000000000000000000000000000000000000000611bab565b91508315612f4857612f3782826147ee565b612f4190846147ee565b9250612f5f565b612f5282826147ee565b612f5c9084614801565b92505b84861015612f8257612f72838787611bbc565b9250612f7f828787611bbc565b91505b5094509492505050565b600354600160801b90046001600160801b0316612fd56111c982612fb885670de0b6b3a76400006148a6565b600454600160801b90046001600160801b031691908a60006138ab565b600480546001600160801b03928316600160801b029216919091179055612ffb86611d7a565b61300590826148fa565b600380546001600160801b03928316600160801b02921691909117905561302b84611d7a565b600180546000906130469084906001600160801b03166148da565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061307383611da4565b60028054600090613088908490600f0b61491a565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506130b885611d7a565b600180546010906130da908490600160801b90046001600160801b03166148fa565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6003546001600160801b03166131416111c98261312b85670de0b6b3a76400006148a6565b6004546001600160801b031691908a60006138ab565b600480546001600160801b0319166001600160801b039290921691909117905561316a86611d7a565b61317490826148fa565b600380546001600160801b0319166001600160801b03929092169190911790555061319e83611d7a565b600180546000906131b99084906001600160801b03166148fa565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506131e682611da4565b600280546000906131fb908490600f0b614947565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061322b84611d7a565b6001805460109061324d908490600160801b90046001600160801b03166148da565b82546101009290920a6001600160801b038181021990931691831602179091556001547f00000000000000000000000000000000000000000000000000000000000000009116109050806132b55750600254600154600f9190910b6001600160801b03909116125b1561098f5760405163585fe6df60e11b815260040160405180910390fd5b80821380156132e3575060008212155b156133765760006132f48282613c7b565b6132fe9084614814565b60025490915061332b90613326908390600160801b90046001600160801b0316600f0b613c8a565b611da4565b6002805460109061334d908490600160801b90046001600160801b03166148fa565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b818113156108fb57600082126133ec5761338f82611da4565b61339882611da4565b6133a29190614947565b600280546010906133c4908490600160801b90046001600160801b03166148da565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b6133a2613326826000613c7b565b600c6020527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854600654600360f81b60009081527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d549091613467916001600160801b03909116906147ee565b905060006134758284614801565b905060006134856124b2866134e1565b90506000613494858385611bbc565b90506000806134a2886115f1565b9050828111156134b9576134b683826147ee565b91505b60008211806134c6575083155b156134d7576134d782858789613c99565b5050505050505050565b61353e60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600254600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600354821660e0820152600454909161010083019161360d9116611694565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261363f92900416611694565b905292915050565b600080613667836101400151846101200151611bab90919063ffffffff16565b61010084015160e085015161367b91611bab565b6136859190614814565b9050600061369b84600001518560200151611de2565b9050600082131561373b5760006136dd8286604001518760a001518860c00151670de0b6b3a76400006136ce91906147ee565b89606001518a60800151613d87565b90506136e98184613e0d565b9050801561373557613722828660400151838860c00151670de0b6b3a764000061371391906147ee565b89606001518a60800151613e1c565b855186906137319083906147ee565b9052505b506137f7565b60008212156137f75761374d826147d2565b915060006137818286604001518760c00151670de0b6b3a764000061377291906147ee565b88606001518960800151613e50565b905061378d8184613e0d565b905080156137d9576137c6828660400151838860c00151670de0b6b3a76400006137b791906147ee565b89606001518a60800151613ee6565b855186906137d5908390614801565b9052505b6137e381846147ee565b855186906137f2908390614801565b905250505b6000613826856101000151670de0b6b3a764000061381591906147ee565b606087015160e08801519190611bbc565b613854866101400151670de0b6b3a764000061384291906147ee565b60608801516101208901519190611bbc565b61385e9190614814565b90506000818660000151613872919061483b565b90508560a001518112156138995760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151612e8a90826147ee565b600081156138eb576138e46138c08487614801565b6138ca8587611bab565b6138d4888a611bab565b6138de9190614801565b90612e94565b9050611e63565b8285036138fa57506000611e63565b612e8a61390784876147ee565b6139118587611bab565b61391b888a611bab565b6138de91906147ee565b60006139517f000000000000000000000000000000000000000000000000000000000000000083611bab565b6002546001546001600160801b03600160801b9092048216600f0b91613978911685611bab565b6139829190614814565b121592915050565b6000611e418787876139a488670de0b6b3a76400006147ee565b8787613e1c565b60008183116139ba5781610fe4565b5090919050565b6000806139da856139d28887612ea9565b8a9190611bbc565b90506139e7888486611bbc565b6139f19082614801565b905086811115613a0857613a0587826147ee565b91505b509695505050505050565b6000613a1f8585612e33565b613a38613a3086611e5d868b612ea9565b859085613c55565b612e8a9190614801565b6000808213613a6457604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000826000190484118302158202613c6c57600080fd5b50910281810615159190040190565b60008183136139ba5781610fe4565b6000818313610a1e5782610fe4565b6000808411613ca85782613cb3565b613cb3838686611bbc565b905080600003613cc35750610ccb565b808583821115613cde57839150613cdb878385611bbc565b90505b613ce782611d7a565b60068054600090613d029084906001600160801b03166148da565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550613d2f81611d7a565b60068054601090613d51908490600160801b90046001600160801b03166148da565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061095d81613d82906147d2565b61106b565b600080613d978888878787613f7b565b90506000613db4613dac87611e5d878b612ea9565b869086613c55565b613dbe90836147ee565b9050670de0b6b3a76400008110613deb57613de4612df6670de0b6b3a764000088611bda565b9050613e03565b613e00612df6670de0b6b3a764000088612e94565b90505b612e2688826147ee565b6000818311610a1e5782610fe4565b600080613e2d888888888888613fa0565b909250905080613a0857604051637ac17d2560e01b815260040160405180910390fd5b600080613e608787878787613a13565b90506000613e8b670de0b6b3a7640000613e7a8787611bda565b613e849190614801565b8390612e94565b9050670de0b6b3a76400008110613eb857613eb1612df6670de0b6b3a764000088612e94565b9050613ed0565b613ecd612df6670de0b6b3a764000088611bda565b90505b613eda81886147ee565b98975050505050505050565b600080613ef68888878787613a13565b9050613f0685611e5d888a6147ee565b96506000613f208486613f198b866147ee565b9190613c55565b9050670de0b6b3a76400008110613f4d57613f46612df6670de0b6b3a764000088612e94565b9050613f65565b613f62612df6670de0b6b3a764000088611bda565b90505b613f6f8185612e94565b9050612e2689826147ee565b6000613f878585612e33565b613a38613f9886611e5d868b611bab565b859085611bbc565b6000806000613fb28989888888613a13565b9050613fc286611e5d898b614801565b975087811015613fd9576000809250925050614057565b6000613fea8587613f198c866147ee565b9050670de0b6b3a7640000811061401757614010612df6670de0b6b3a764000089612e94565b905061402f565b61402c612df6670de0b6b3a764000089611bda565b90505b6140398186612e94565b9050808a11156140505761404d818b6147ee565b93505b6001925050505b965096945050505050565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156140a15780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156140e3576140e36140a9565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715614112576141126140a9565b604052919050565b6000602080838503121561412d57600080fd5b825167ffffffffffffffff8082111561414557600080fd5b818501915085601f83011261415957600080fd5b81518181111561416b5761416b6140a9565b61417d601f8201601f191685016140e9565b9150808252868482850101111561419357600080fd5b60005b818110156141b1578381018501518382018601528401614196565b50600090820190930192909252509392505050565b8015158114610c6157600080fd5b80356141df816141c6565b919050565b6000602082840312156141f657600080fd5b8135610fe4816141c6565b600060608284031215610a1e57600080fd5b60008060006060848603121561422857600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561424d57600080fd5b61425986828701614201565b9150509250925092565b80356001600160a01b03811681146141df57600080fd5b60008083601f84011261428c57600080fd5b50813567ffffffffffffffff8111156142a457600080fd5b6020830191508360208260051b850101111561229557600080fd5b600080600080600080608087890312156142d857600080fd5b6142e187614263565b95506142ef60208801614263565b9450604087013567ffffffffffffffff8082111561430c57600080fd5b6143188a838b0161427a565b9096509450606089013591508082111561433157600080fd5b5061433e89828a0161427a565b979a9699509497509295939492505050565b6000806000806080858703121561436657600080fd5b8435935061437660208601614263565b925061438460408601614263565b9396929550929360600135925050565b600080600080608085870312156143aa57600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080608085870312156143dc57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561440857600080fd5b61441487828801614201565b91505092959194509250565b60006020828403121561443257600080fd5b813567ffffffffffffffff81111561444957600080fd5b61445584828501614201565b949350505050565b6000806000806080858703121561447357600080fd5b8435935061448360208601614263565b92506040850135915061449860608601614263565b905092959194509250565b600080604083850312156144b657600080fd5b50508035926020909101359150565b6000602082840312156144d757600080fd5b5035919050565b80356001600160801b03811681146141df57600080fd5b6000806040838503121561450857600080fd5b614511836144de565b915061451f602084016144de565b90509250929050565b6000806040838503121561453b57600080fd5b61454483614263565b91506020830135614554816141c6565b809150509250929050565b60008060006060848603121561457457600080fd5b505081359360208301359350604090920135919050565b8035600f81900b81146141df57600080fd5b600061014082840312156145b057600080fd5b6145b86140bf565b6145c1836144de565b81526145cf602084016144de565b60208201526145e06040840161458b565b60408201526145f1606084016144de565b6060820152614602608084016144de565b608082015261461360a084016144de565b60a082015261462460c084016144de565b60c082015261463560e084016144de565b60e08201526101006146488185016141d4565b9082015261012061465a8482016141d4565b908201529392505050565b600080600080600080600060e0888a03121561468057600080fd5b61468988614263565b965061469760208901614263565b955060408801356146a7816141c6565b945060608801359350608088013560ff811681146146c457600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000606084860312156146f657600080fd5b8335925061470660208501614263565b9150604084013590509250925092565b60006020828403121561472857600080fd5b610fe482614263565b60006020828403121561474357600080fd5b610fe4826144de565b600080600080600060a0868803121561476457600080fd5b8535945061477460208701614263565b935061478260408701614263565b92506060860135915061479760808701614263565b90509295509295909350565b6000602082840312156147b557600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b82016147e7576147e76147bc565b5060000390565b81810381811115610bda57610bda6147bc565b80820180821115610bda57610bda6147bc565b8181036000831280158383131683831282161715614834576148346147bc565b5092915050565b808201828112600083128015821682158216171561485b5761485b6147bc565b505092915050565b600060018201614875576148756147bc565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826148a1576148a161487c565b500690565b8082028115828204841417610bda57610bda6147bc565b6000602082840312156148cf57600080fd5b8151610fe4816141c6565b6001600160801b03818116838216019080821115614834576148346147bc565b6001600160801b03828116828216039080821115614834576148346147bc565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610bda57610bda6147bc565b600f82810b9082900b0360016001607f1b0319811260016001607f1b0382131715610bda57610bda6147bc565b6000826149835761498361487c565b600160ff1b82146000198414161561499d5761499d6147bc565b50059056fea264697066735822122077b9245650ed68d10f3b5188132bded68d43fff2dcbe26aca6e1d4482bf472c564736f6c6343000813003361024060405260016000553480156200001757600080fd5b50604051620036e5380380620036e58339810160408190526200003a91620002ba565b80516001600160a01b03166080908152810151819081906103e8111562000074576040516349db44f560e01b815260040160405180910390fd5b60808101516101805260a08101516101a05260c08101516101c052610100810151600003620000b657604051635428734d60e01b815260040160405180910390fd5b6101008101805160a0525160e08201511080620000e857508061010001518160e00151620000e5919062000390565b15155b15620001075760405163253fffcf60e11b815260040160405180910390fd5b60e08181015160c05261012082015190526060810151610160908152610140820151600880546001600160a01b0319166001600160a01b0392831617905590820151166101e05261018081015151670de0b6b3a764000010806200017b5750670de0b6b3a764000081610180015160200151115b80620001975750670de0b6b3a764000081610180015160400151115b15620001b6576040516322f72cc360e11b815260040160405180910390fd5b610180810180515161010052805160209081015161012052905160409081015161014052908201516001600160a01b03166102005201516102205250620003b39050565b6040516101a081016001600160401b03811182821017156200022c57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200024a57600080fd5b919050565b6000606082840312156200026257600080fd5b604051606081016001600160401b03811182821017156200029357634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101e08284031215620002ce57600080fd5b620002d8620001fa565b620002e38362000232565b8152620002f36020840162000232565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200035c81850162000232565b908201526101606200037084820162000232565b9082015261018062000385858583016200024f565b908201529392505050565b600082620003ae57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051613213620004d2600039600081816108ed015261148a0152600081816108be015261144d015260008181610a41015281816111c90152818161124301526112b1015260006109850152600061095f01526000818161093901526116fb01526000818161091301526116d501526000610ac701526000610aa101526000610a7b0152600081816109f701526117210152600081816109ab0152611f660152600081816109d101526121f201526000818161088f01528181610be7015281816115540152818161159d01528181611c6001528181611ca901528181611d830152611e2101526132136000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c80638e67f87e116100de578063becee9c311610097578063d816574311610071578063d816574314610381578063e44808bc14610396578063e985e9c5146103a9578063fba56008146103cc57600080fd5b8063becee9c314610341578063c55dae6314610361578063c69e16ad146102d857600080fd5b80638e67f87e146102d85780639cd241af146102e0578063a22cb465146102f3578063ab033ea914610306578063b0d9658014610319578063bd85b0391461032e57600080fd5b80633656eec21161014b5780634ed2d6ac116101255780634ed2d6ac1461028a57806360246c881461029d5780637180c8ca146102b25780637ecebe00146102c557600080fd5b80633656eec2146102515780633e691db9146102645780634e41a1fb1461027757600080fd5b8062ad800c1461019257806302329a29146101bb57806317fad7fc146101d05780631c0f12b6146101e357806320fc4881146101f657806321ff32a914610230575b600080fd5b6101a56101a0366004612831565b6103fb565b6040516101b2919061289a565b60405180910390f35b6101ce6101c93660046128bb565b610432565b005b6101ce6101de36600461293b565b61043e565b6101ce6101f13660046129cc565b610454565b610209610204366004612831565b610467565b6040805182516001600160801b03168152602092830151600f0b92810192909252016101b2565b61024361023e366004612a10565b6104b9565b6040519081526020016101b2565b61024361025f366004612a4c565b6104ff565b610243610272366004612a78565b610538565b6101a5610285366004612831565b610543565b6101ce610298366004612ab3565b610551565b6102a561059f565b6040516101b29190612af9565b6101ce6102c0366004612b84565b610799565b6102436102d3366004612bbb565b6107a7565b6102436107d3565b6101ce6102ee366004612bd6565b6107f0565b6101ce610301366004612b84565b610801565b6101ce610314366004612bbb565b61086d565b610321610876565b6040516101b29190612c0b565b61024361033c366004612831565b610afc565b61035461034f366004612ce9565b610b1e565b6040516101b29190612d2b565b610369610bd9565b6040516001600160a01b0390911681526020016101b2565b610389610c19565b6040516101b29190612d6f565b6101ce6103a4366004612e58565b610c7f565b6103bc6103b7366004612eaf565b610cc7565b60405190151581526020016101b2565b6103d4610d0b565b6040805182516001600160801b0390811682526020938401511692810192909252016101b2565b606061042d61040983610d6a565b604051602001610419919061289a565b604051602081830303815290604052610e98565b919050565b61043b81610ebc565b50565b61044c868686868686610f05565b505050505050565b6104618484848433610fb9565b50505050565b604080518082019091526000808252602082015261042d6007600084815260200190815260200160002060405160200161041991546001600160801b038116825260801d600f0b602082015260400190565b6000838152600e602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526104f89101610419565b9392505050565b6000828152600b602090815260408083206001600160a01b03851684528252808320548151928301526105329101610419565b92915050565b60006105328261117a565b606061042d6104098361131d565b8361055b8161140f565b6001600160a01b0316336001600160a01b03161461058c57604051632aab8bd360e01b815260040160405180910390fd5b610598858585856114cc565b5050505050565b61060a604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610614611539565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b039092169161067f9190612f05565b6106899190612f18565b9050600080831161069b5760006106b6565b6106b6836106b06106ab86611638565b61179e565b90611a0c565b604080516101a0810182526001546001600160801b038082168352600254600f0b6020840152600160801b91829004811693830193909352606082018690526080820187905260035480841660a084015260045480851660c085015290829004841660e08401528190048316610100830152600654808416610120840152049091166101408201529091506000906101608101841561075e576107598486611a21565b610761565b60005b8152600254600160801b90046001600160801b03166020918201526040519192506107929161041991849101612af9565b5050505090565b6107a38282611a36565b5050565b6001600160a01b0381166000908152600f602090815260408083205481519283015261042d9101610419565b60006107ed60095460405160200161041991815260200190565b90565b6107fc838383336114cc565b505050565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61043b81611aae565b61087e612781565b6107ed604051806101a001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180606001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016104199190612c0b565b6000818152600c602090815260408083205481519283015261042d9101610419565b606060008267ffffffffffffffff811115610b3b57610b3b612f2b565b604051908082528060200260200182016040528015610b64578160200160208202803683370190505b50905060005b83811015610bbd576000858583818110610b8657610b86612f41565b90506020020135905060008154905080848481518110610ba857610ba8612f41565b60209081029190910101525050600101610b6a565b50610bd2816040516020016104199190612d2b565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916107ed9101610419565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526107ed60016040516020016104199190612f57565b84610c898161140f565b6001600160a01b0316336001600160a01b031614610cba57604051632aab8bd360e01b815260040160405180910390fd5b61044c8686868686610fb9565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff90911615159181019190915290916105329101610419565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526107ed90606001610419565b606060f882901c6001600160f81b0383166000610d8682611b22565b90506000836003811115610d9c57610d9c612ed9565b03610dce576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350610e90565b6001836003811115610de257610de2612ed9565b03610e0e5780604051602001610df89190612fd8565b6040516020818303038152906040529350610e90565b6002836003811115610e2257610e22612ed9565b03610e385780604051602001610df89190613011565b6003836003811115610e4c57610e4c612ed9565b03610e90576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b8152600401610eb3919061289a565b60405180910390fd5b336000908152600a602052604090205460ff16610eeb576040516282b42960e81b815260040160405180910390fd5b600580549115156101000261ff0019909216919091179055565b6001600160a01b0386161580610f2257506001600160a01b038516155b15610f405760405163f0dd15fd60e01b815260040160405180910390fd5b828114610f605760405163174861a760e31b815260040160405180910390fd5b60005b83811015610fb057610fa8858583818110610f8057610f80612f41565b905060200201358888868686818110610f9b57610f9b612f41565b9050602002013533610fb9565b600101610f63565b50505050505050565b6001600160a01b0384161580610fd657506001600160a01b038316155b15610ff45760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146110b8576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff166110b8576000858152600e602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146110b6576000868152600e602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906110b0908490612f18565b90915550505b505b6000858152600b602090815260408083206001600160a01b0388168452909152812080548492906110ea908490612f18565b90915550506000858152600b602090815260408083206001600160a01b038716845290915281208054849290611121908490612f05565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b600080546001146111ba5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610eb3565b60026000556001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166111f66020840184612bbb565b6001600160a01b03161461121d57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff161580156112665750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b801561127d57506008546001600160a01b03163314155b1561129a576040516282b42960e81b815260040160405180910390fd5b6009805460009091556112ad8184611c2f565b91507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e478360405161130a91815260200190565b60405180910390a2506001600055919050565b606060f882901c6001600160f81b038316600061133982611b22565b9050600083600381111561134f5761134f612ed9565b03611381576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350610e90565b600183600381111561139557611395612ed9565b036113ab5780604051602001610df8919061304b565b60028360038111156113bf576113bf612ed9565b036113d55780604051602001610df89190613083565b60038360038111156113e9576113e9612ed9565b03610e90576040516c485950455244524956452d575360981b6020820152602d01610e7e565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611588575047611613565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156115ec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061161091906130af565b90505b601054600003611624576000611632565b601054611632908290611a21565b91505090565b61169560405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600254600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600354821660e082015260045490916101008301916117649116611f1b565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261179692900416611f1b565b905292915050565b6000806117be836101400151846101200151611a0c90919063ffffffff16565b61010084015160e08501516117d291611a0c565b6117dc91906130c8565b905060006117f284600001518560200151611f91565b905060008213156118925760006118348286604001518760a001518860c00151670de0b6b3a76400006118259190612f18565b89606001518a60800151611fae565b9050611840818461204e565b9050801561188c57611879828660400151838860c00151670de0b6b3a764000061186a9190612f18565b89606001518a60800151612063565b85518690611888908390612f18565b9052505b5061194e565b600082121561194e576118a4826130e8565b915060006118d88286604001518760c00151670de0b6b3a76400006118c99190612f18565b886060015189608001516120a2565b90506118e4818461204e565b905080156119305761191d828660400151838860c00151670de0b6b3a764000061190e9190612f18565b89606001518a60800151612138565b8551869061192c908390612f05565b9052505b61193a8184612f18565b85518690611949908390612f05565b905250505b600061197d856101000151670de0b6b3a764000061196c9190612f18565b606087015160e088015191906121cd565b6119ab866101400151670de0b6b3a76400006119999190612f18565b606088015161012089015191906121cd565b6119b591906130c8565b905060008186600001516119c99190613104565b90508560a001518112156119f05760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151611a029082612f18565b9695505050505050565b60006104f88383670de0b6b3a76400006121cd565b60006104f883670de0b6b3a7640000846121cd565b6008546001600160a01b03163314611a60576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6008546001600160a01b03163314611ad8576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b60408051604d808252608082019092526060919060009082602082018180368337019050509050611b54600a8561313a565b611b5f906030612f05565b60f81b81611b6e600185612f18565b81518110611b7e57611b7e612f41565b60200101906001600160f81b031916908160001a905350611ba0600a8561314e565b935060015b8415611c2157611bb6600a8661313a565b611bc1906030612f05565b60f81b826001611bd18487612f18565b611bdb9190612f18565b81518110611beb57611beb612f41565b60200101906001600160f81b031916908160001a905350611c0d600a8661314e565b945080611c1981613162565b915050611ba5565b918290030190815292915050565b60006010548311611c405782611c44565b6010545b9250600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611c94575047611d1f565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611cf8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d1c91906130af565b90505b601054600003611d30576000611d4f565b611d4f611d4860105483611a2190919063ffffffff16565b8590611a0c565b91508360106000828254611d639190612f18565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611e1757611dbd6020850185612bbb565b6001600160a01b03168360405160006040518083038185875af1925050503d8060008114611e07576040519150601f19603f3d011682016040523d82523d6000602084013e611e0c565b606091505b505080915050611ec7565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb611e536020870187612bbb565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018690526044016020604051808303816000875af1158015611ea0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ec4919061317b565b90505b80611ee5576040516312171d8360e31b815260040160405180910390fd5b611ef560408501602086016128bb565b611f1057611f0b611f04611539565b8490611a21565b611f12565b825b95945050505050565b600080670de0b6b3a7640000611f2f6121eb565b611f399190613198565b9050808311611f49576000611f53565b611f538184612f18565b91506104f8611f8a670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613198565b8390611a21565b600080611f9e83856130c8565b905060008112156104f857600080fd5b600080611fbe8888878787612226565b90506000611fe1611fd987611fd3878b612255565b9061226a565b8690866122c1565b611feb9083612f18565b9050670de0b6b3a7640000811061201f57612018612011670de0b6b3a764000088611a21565b829061226a565b9050612037565b612034612011670de0b6b3a7640000886122e7565b90505b6120418882612f18565b9998505050505050505050565b600081831161205d57826104f8565b50919050565b6000806120748888888888886122fc565b90925090508061209757604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000806120b287878787876123be565b905060006120dd670de0b6b3a76400006120cc8787611a21565b6120d69190612f05565b83906122e7565b9050670de0b6b3a7640000811061210a57612103612011670de0b6b3a7640000886122e7565b9050612122565b61211f612011670de0b6b3a764000088611a21565b90505b61212c8188612f18565b98975050505050505050565b60008061214888888787876123be565b905061215885611fd3888a612f18565b96506000612172848661216b8b86612f18565b91906122c1565b9050670de0b6b3a7640000811061219f57612198612011670de0b6b3a7640000886122e7565b90506121b7565b6121b4612011670de0b6b3a764000088611a21565b90505b6121c181856122e7565b90506120418982612f18565b60008260001904841183021582026121e457600080fd5b5091020490565b60006122177f00000000000000000000000000000000000000000000000000000000000000004261313a565b6122219042612f18565b905090565b6000612232858561226a565b61224b61224386611fd3868b611a0c565b8590856121cd565b611a029190612f05565b60006104f88383670de0b6b3a76400006122c1565b6000816000036122835750670de0b6b3a7640000610532565b8260000361229357506000610532565b81600061229f856123e3565b90508181026122b6670de0b6b3a7640000826131af565b9050611a02816125f6565b60008260001904841183021582026122d857600080fd5b50910281810615159190040190565b60006104f883670de0b6b3a7640000846122c1565b600080600061230e89898888886123be565b905061231e86611fd3898b612f05565b9750878110156123355760008092509250506123b3565b6000612346858761216b8c86612f18565b9050670de0b6b3a764000081106123735761236c612011670de0b6b3a7640000896122e7565b905061238b565b612388612011670de0b6b3a764000089611a21565b90505b61239581866122e7565b9050808a11156123ac576123a9818b612f18565b93505b6001925050505b965096945050505050565b60006123ca858561226a565b61224b6123db86611fd3868b612255565b8590856122c1565b600080821361240557604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361261157506000919050565b680755bf798b4a1bf1e5821261263a5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b604051806101a0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200161282c60405180606001604052806000815260200160008152602001600081525090565b905290565b60006020828403121561284357600080fd5b5035919050565b60005b8381101561286557818101518382015260200161284d565b50506000910152565b6000815180845261288681602086016020860161284a565b601f01601f19169290920160200192915050565b6020815260006104f8602083018461286e565b801515811461043b57600080fd5b6000602082840312156128cd57600080fd5b81356104f8816128ad565b80356001600160a01b038116811461042d57600080fd5b60008083601f84011261290157600080fd5b50813567ffffffffffffffff81111561291957600080fd5b6020830191508360208260051b850101111561293457600080fd5b9250929050565b6000806000806000806080878903121561295457600080fd5b61295d876128d8565b955061296b602088016128d8565b9450604087013567ffffffffffffffff8082111561298857600080fd5b6129948a838b016128ef565b909650945060608901359150808211156129ad57600080fd5b506129ba89828a016128ef565b979a9699509497509295939492505050565b600080600080608085870312156129e257600080fd5b843593506129f2602086016128d8565b9250612a00604086016128d8565b9396929550929360600135925050565b600080600060608486031215612a2557600080fd5b83359250612a35602085016128d8565b9150612a43604085016128d8565b90509250925092565b60008060408385031215612a5f57600080fd5b82359150612a6f602084016128d8565b90509250929050565b600060208284031215612a8a57600080fd5b813567ffffffffffffffff811115612aa157600080fd5b8201606081850312156104f857600080fd5b60008060008060808587031215612ac957600080fd5b84359350612ad9602086016128d8565b925060408501359150612aee606086016128d8565b905092959194509250565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018091820151918101919091526101a00190565b60008060408385031215612b9757600080fd5b612ba0836128d8565b91506020830135612bb0816128ad565b809150509250929050565b600060208284031215612bcd57600080fd5b6104f8826128d8565b600080600060608486031215612beb57600080fd5b83359250612bfb602085016128d8565b9150604084013590509250925092565b81516001600160a01b031681526101e081016020830151612c3760208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151612ca7828501826001600160a01b03169052565b5050610160838101516001600160a01b0316908301526101808084015180518285015260208101516101a085015260408101516101c08501525b505092915050565b60008060208385031215612cfc57600080fd5b823567ffffffffffffffff811115612d1357600080fd5b612d1f858286016128ef565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015612d6357835183529284019291840191600101612d47565b50909695505050505050565b81516001600160801b0316815261014081016020830151612d9b60208401826001600160801b03169052565b506040830151612db06040840182600f0b9052565b506060830151612dcb60608401826001600160801b03169052565b506080830151612de660808401826001600160801b03169052565b5060a0830151612e0160a08401826001600160801b03169052565b5060c0830151612e1c60c08401826001600160801b03169052565b5060e0830151612e3760e08401826001600160801b03169052565b50610100838101511515908301526101208084015180151582850152612ce1565b600080600080600060a08688031215612e7057600080fd5b85359450612e80602087016128d8565b9350612e8e604087016128d8565b925060608601359150612ea3608087016128d8565b90509295509295909350565b60008060408385031215612ec257600080fd5b612ecb836128d8565b9150612a6f602084016128d8565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561053257610532612eef565b8181038181111561053257610532612eef565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b81546001600160801b038082168352608091821c60208401526001840154600f81900b6040850152821c6060840152600284015480821683850152821c60a0840152600384015490811660c0840152901c60e0820152600482015460ff8082161515610100840152600882901c161515610120830152610140820190610bd2565b700243cb832b9323934bb32902637b7339d1607d1b81526000825161300481601185016020870161284a565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b81526000825161303e81601285016020870161284a565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b81526000825161307681601085016020870161284a565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161300481601185016020870161284a565b6000602082840312156130c157600080fd5b5051919050565b8181036000831280158383131683831282161715610bd257610bd2612eef565b6000600160ff1b82016130fd576130fd612eef565b5060000390565b8082018281126000831280158216821582161715612ce157612ce1612eef565b634e487b7160e01b600052601260045260246000fd5b60008261314957613149613124565b500690565b60008261315d5761315d613124565b500490565b60006001820161317457613174612eef565b5060010190565b60006020828403121561318d57600080fd5b81516104f8816128ad565b808202811582820484141761053257610532612eef565b6000826131be576131be613124565b600160ff1b8214600019841416156131d8576131d8612eef565b50059056fea26469706673582212201f66b7363e7a954057eede9f7ab5e1451fe8ea5e9d338d0373d736bf05b74f5164736f6c6343000813003361024060405260016000553480156200001757600080fd5b506040516200481b3803806200481b8339810160408190526200003a91620002ba565b80516001600160a01b03166080908152810151819081906103e8111562000074576040516349db44f560e01b815260040160405180910390fd5b60808101516101805260a08101516101a05260c08101516101c052610100810151600003620000b657604051635428734d60e01b815260040160405180910390fd5b6101008101805160a0525160e08201511080620000e857508061010001518160e00151620000e5919062000390565b15155b15620001075760405163253fffcf60e11b815260040160405180910390fd5b60e08181015160c05261012082015190526060810151610160908152610140820151600880546001600160a01b0319166001600160a01b0392831617905590820151166101e05261018081015151670de0b6b3a764000010806200017b5750670de0b6b3a764000081610180015160200151115b80620001975750670de0b6b3a764000081610180015160400151115b15620001b6576040516322f72cc360e11b815260040160405180910390fd5b610180810180515161010052805160209081015161012052905160409081015161014052908201516001600160a01b03166102005201516102205250620003b39050565b6040516101a081016001600160401b03811182821017156200022c57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200024a57600080fd5b919050565b6000606082840312156200026257600080fd5b604051606081016001600160401b03811182821017156200029357634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101e08284031215620002ce57600080fd5b620002d8620001fa565b620002e38362000232565b8152620002f36020840162000232565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200035c81850162000232565b908201526101606200037084820162000232565b9082015261018062000385858583016200024f565b908201529392505050565b600082620003ae57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051614260620005bb6000396000505060005050600050506000505060008181610407015281816108fe01528181610ae501528181610c160152610e1001526000818161068e015281816106d9015281816107db0152818161269b015281816129c501528181612a1401528181612f230152818161307b01526130b701526000818161074a0152818161095f01528181611a9601528181611ae3015281816123df0152818161240c0152818161267501528181612c9f015261332c015260008181612fc7015281816133cf0152613448015260008181611c4f01528181612f9b015261341c015260008181611b3501526133a201526000818161078d015281816109a101528181611a7401528181611b04015281816126c101528181612c7d015261334d0152600081816104cc0152818161076c0152818161098001528181610ecd015281816112ce015281816113ea01528181611bd501528181611e2801528181612d320152818161321e015261372a015260008181611046015281816110fb01526112310152600081816111460152818161118f01528181611739015281816117820152818161185c015281816118fa01528181612122015281816121dc015281816122a1015261233901526142606000f3fe6080604052600436106100705760003560e01c80639aa684621161004e5780639aa68462146100f0578063cbc1343414610103578063ded0623114610123578063ed64bab21461014357600080fd5b8063074a6de91461007557806329b23fc1146100af57806377d05ff4146100dd575b600080fd5b34801561008157600080fd5b50610095610090366004613ec9565b610165565b604080519283526020830191909152015b60405180910390f35b3480156100bb57600080fd5b506100cf6100ca366004613f19565b61017f565b6040519081526020016100a6565b6100cf6100eb366004613ec9565b610196565b6100cf6100fe366004613f19565b6101ad565b34801561010f57600080fd5b5061009561011e366004613ec9565b6101bb565b34801561012f57600080fd5b506100cf61013e366004613f19565b6101c9565b34801561014f57600080fd5b5061016361015e366004613f73565b6101d7565b005b6000806101738585856101e3565b91509150935093915050565b600061018d858585856103dd565b95945050505050565b60006101a3848484610623565b90505b9392505050565b600061018d858585856108a3565b600080610173858585610bea565b600061018d85858585610de6565b6101e081611015565b50565b6000806000546001146102115760405162461bcd60e51b815260040161020890613f8c565b60405180910390fd5b6002600090815561022061112b565b905061023361022d61122a565b82611265565b5061023d81611554565b6006548692506001600160801b03168083111561026157806001600160801b031692505b82600003610277576000809350935050506103ce565b610286600360f81b3385611617565b6006546001600160801b03600160801b9091048116906000906102ae908690849086166116c0565b90506102b9856116de565b6102c39084613fc6565b600680546001600160801b0319166001600160801b03929092169190911790556102ec816116de565b6006805460109061030e908490600160801b90046001600160801b0316613fc6565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061033c8188611708565b95508561034989876119f2565b11156103685760405163c972651760e01b815260040160405180910390fd5b6103756020880188613fed565b6001600160a01b03167f7986a4c20efd1390450c45fb0b11e794754bdce25f47ab5488efc8104169f754866103aa84886119f2565b604080519283526020830191909152810187905260600160405180910390a2505050505b60016000559094909350915050565b600080546001146104005760405162461bcd60e51b815260040161020890613f8c565b60026000557f00000000000000000000000000000000000000000000000000000000000000008410156104465760405163211ddda360e11b815260040160405180910390fd5b600061045061112b565b905061045c8682611265565b5061047261046b600288611a07565b3387611617565b6000806000806000806104868b888e611a3c565b949a509298509096509450925090508a8c88428211156105575783600960008282546104b29190614016565b909155506104c59050838a898886611ca7565b60006104f17f000000000000000000000000000000000000000000000000000000000000000084614029565b600081815260076020526040812054919250600160801b909104600f0b906105249086908a908e908d9089908990611e21565b60008281526007602052604090205461054b90600f83810b91600160801b9004900b611fca565b61055483611554565b50505b6000610563898e611708565b90508c6000610573838e846120f1565b90508f8110156105965760405163c972651760e01b815260040160405180910390fd5b6105a1600286611a07565b8f60000160208101906105b49190613fed565b6040805188815260208101859052908101879052606081018990526001600160a01b0391909116907f32f37298489a8da0fde394937191ad6035015dd8a04bc97c304d59858e3bfd679060800160405180910390a3505060016000559f9e505050505050505050505050505050565b600080546001146106465760405162461bcd60e51b815260040161020890613f8c565b6002600055610653612120565b60055460ff161561067757604051637983c05160e01b815260040160405180910390fd5b600080610684868561218d565b90925090506106b47f0000000000000000000000000000000000000000000000000000000000000000600261403c565b8210156106d457604051632afb507160e21b815260040160405180910390fd5b6106ff7f0000000000000000000000000000000000000000000000000000000000000000600261403c565b6107099083614029565b6005805460ff191660011790559250610721826116de565b600180546001600160801b0319166001600160801b03929092169190911790556107b66107b1837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061247a565b6116de565b600180546001600160801b03928316600160801b0292169190911790556107ff6000807f00000000000000000000000000000000000000000000000000000000000000006124dc565b61081760006108116020870187613fed565b856124dc565b61082261022d61122a565b5060006108308783876120f1565b905061083f6020860186613fed565b6040805186815260208101849052908101849052606081018890526001600160a01b0391909116907fd93ddcd36a9d44373680f40bd3bcafe3c7e738748e10c90213e70453cff442319060800160405180910390a250505060016000559392505050565b600080546001146108c65760405162461bcd60e51b815260040161020890613f8c565b6002600055600554610100900460ff16156108f4576040516313d0ff5960e31b815260040160405180910390fd5b6108fc612120565b7f000000000000000000000000000000000000000000000000000000000000000085101561093d5760405163211ddda360e11b815260040160405180910390fd5b60006109c561094a61257c565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061259d565b9050848110806109d457508381115b156109f257604051633b61151160e11b815260040160405180910390fd5b6000806109ff888661218d565b91509150610a0e61022d61122a565b50600654600360f81b6000908152600c60205260008051602061420b833981519152549091610a48916001600160801b0390911690614029565b6000808052600c6020526000805160206141eb8339815191525491925090610a71908390614016565b90506000806000610a81866125d8565b9050610a8c8161273e565b9150610a97876129ac565b6001546001600160801b038082168352600254600f0b6020840152600160801b909104166040820152610ac98161273e565b9250610ae18483610ada8187614029565b91906116c0565b98507f0000000000000000000000000000000000000000000000000000000000000000891015610b245760405163211ddda360e11b815260040160405180910390fd5b50610b3d6000610b3760208c018c613fed565b8a6124dc565b610b4685611554565b60008315610b5d57610b588285612b2e565b610b60565b60005b90506000610b6f8e888d6120f1565b9050610b7e60208c018c613fed565b604080518c815260208101849052908101899052606081018490526001600160a01b0391909116907fd92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e502396099060800160405180910390a25050600160005550959a9950505050505050505050565b600080600054600114610c0f5760405162461bcd60e51b815260040161020890613f8c565b60026000557f0000000000000000000000000000000000000000000000000000000000000000851015610c555760405163211ddda360e11b815260040160405180910390fd5b6000610c5f61112b565b9050610c6c61022d61122a565b50610c7681611554565b600c6020526000805160206141eb83398151915254600654600360f81b600090815260008051602061420b833981519152549091610cbf916001600160801b0390911690614029565b90506000610ccd8284614016565b9050610cdb6000338b611617565b600080610ceb8b87858888612b43565b9098509092509050610d0e600360f81b610d0860208c018c613fed565b896124dc565b610d18828a611708565b97506000610d2789888c6120f1565b9050888b1115610d4a5760405163c972651760e01b815260040160405180910390fd5b60008415610d6157610d5c8386612b2e565b610d64565b60005b9050610d7360208c018c613fed565b604080518f8152602081018590529081018a9052606081018b9052608081018390526001600160a01b0391909116907fae97bda5fb1ee457c0490e5804bc10c54ab31a1fd9b01e2f85a1855072150be89060a00160405180910390a2505050505050505060016000559094909350915050565b60008054600114610e095760405162461bcd60e51b815260040161020890613f8c565b60026000557f0000000000000000000000000000000000000000000000000000000000000000841015610e4f5760405163211ddda360e11b815260040160405180910390fd5b6000610e5961112b565b9050610e658682611265565b50610e7461046b600188611a07565b600080600080600080610e888b888e612c45565b95509550955095509550955060008c90508c421015610f51578160096000828254610eb39190614016565b90915550610ec690508c88878685612db7565b6000610ef27f000000000000000000000000000000000000000000000000000000000000000083614029565b600081815260076020526040902054909150600160801b9004600f0b610f1e8e878b8a878f6001611e21565b600082815260076020526040902054610f4590600f83810b91600160801b9004900b611fca565b610f4e8a611554565b50505b6000610f5d878c611708565b90506000610f6c828b8e6120f1565b9050808d1115610f8f5760405163c972651760e01b815260040160405180910390fd5b8d610f9b600185611a07565b610fa860208f018f613fed565b60408051878152602081018690529081018e9052606081018490526001600160a01b0391909116907f4c68e40241b8ae371bc7dae7035400158b60d0b7d69b35477b693759bb2c0ca09060800160405180910390a3505060016000559d9c50505050505050505050505050565b6000818152600760205260409020546001600160801b0316156110355750565b600061103f61122a565b905061106b7f000000000000000000000000000000000000000000000000000000000000000083614069565b15158061107757508181105b156110955760405163ecd29e8160e01b815260040160405180910390fd5b8082036110b2576110ad816110a861112b565b611265565b505050565b815b6000818152600760205260409020546001600160801b03168282036110de576110db61112b565b90505b80156110f5576110ee8482611265565b5050505050565b506111207f000000000000000000000000000000000000000000000000000000000000000082614016565b90506110b4565b5050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161117a575047611205565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156111de573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611202919061407d565b90505b601054600003611216576000611224565b601054611224908290612b2e565b91505090565b60006112567f000000000000000000000000000000000000000000000000000000000000000042614069565b6112609042614029565b905090565b600082815260076020526040812080546001600160801b031615158061128a57504284115b156112a057546001600160801b0316905061154e565b6112a9836116de565b81546001600160801b0319166001600160801b039190911617815560006007816112f37f000000000000000000000000000000000000000000000000000000000000000088614029565b815260208101919091526040016000908120546001600160801b0316915061131c600287611a07565b6000818152600c6020526040812054919250811561137557600080611344848a886000612f84565b91509150806009600082825461135a9190614016565b9091555061136e905084600084808e611ca7565b6001925050505b600061138260018a611a07565b6000818152600c602052604090205490915080156113dd576000806113aa838c8a6001612f84565b9150915080600960008282546113c09190614016565b909155508c90506113d5846000858085612db7565b600195505050505b821561145b57600061140f7f00000000000000000000000000000000000000000000000000000000000000008c614029565b600081815260076020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b9261144f928492919004900b611fca565b6114588b611554565b50505b6000808a1161146b576000611486565b6114868a61148061147b8d6125d8565b61273e565b906119f2565b600654600c60205260008051602061420b8339815191525460008080526000805160206141eb83398151915254939450926001600160801b03909216916114cd9190614016565b6114d79190614029565b9050600081156114f0576114eb8383612b2e565b6114f3565b60005b604080518e8152602081018a9052908101869052606081018290529091508d907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a28b9a50505050505050505050505b92915050565b600c6020526000805160206141eb83398151915254600654600360f81b600090815260008051602061420b83398151915254909161159d916001600160801b0390911690614029565b905060006115ab8284614016565b905060006115bb61147b866125d8565b905060006115ca8583856116c0565b90506000806115d888613052565b9050828111156115ef576115ec8382614029565b91505b60008211806115fc575083155b1561160d5761160d828587896130fe565b5050505050505050565b6000838152600b602090815260408083206001600160a01b038616845290915281208054839290611649908490614029565b90915550506000838152600c60205260408120805483929061166c908490614029565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b60008260001904841183021582026116d757600080fd5b5091020490565b6000600160801b821061170457604051630f0af95160e11b815260040160405180910390fd5b5090565b60006010548311611719578261171d565b6010545b9250600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161176d5750476117f8565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156117d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117f5919061407d565b90505b601054600003611809576000611828565b61182861182160105483612b2e90919063ffffffff16565b85906119f2565b9150836010600082825461183c9190614029565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016118f0576118966020850185613fed565b6001600160a01b03168360405160006040518083038185875af1925050503d80600081146118e0576040519150601f19603f3d011682016040523d82523d6000602084013e6118e5565b606091505b5050809150506119a0565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb61192c6020870187613fed565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018690526044016020604051808303816000875af1158015611979573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061199d91906140a4565b90505b806119be576040516312171d8360e31b815260040160405180910390fd5b6119ce60408501602086016140c1565b6119e9576119e46119dd61112b565b8490612b2e565b61018d565b50909392505050565b60006101a68383670de0b6b3a76400006116c0565b60006001600160f81b03821115611a315760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000806000806000806000611a50886131f1565b9050611aba611a5d61257c565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000613242565b909850955093506000611b28611ace61257c565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006132b2565b9050611b5e8589611b59847f00000000000000000000000000000000000000000000000000000000000000006132c3565b6132f3565b15611b7c5760405163512095c760e01b815260040160405180910390fd5b8a8a60008080611b8e8588888761337c565b9b509295509093509150611ba490508184614029565b611bae908b614016565b9950611bba8284614016565b611bc4908c614016565b9a50505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008a611bff9190614029565b815260208101919091526040016000908120546001600160801b03169150428911611c41576000898152600760205260409020546001600160801b0316611c43565b895b9050611c738b8784848e7f0000000000000000000000000000000000000000000000000000000000000000613486565b9650611c7f8387614029565b9550611c9187878786868660006134d8565b9b9f939e50919c509a5098975095505050505050565b600354600160801b90046001600160801b0316611cf06107b182611cd385670de0b6b3a764000061403c565b600454600160801b90046001600160801b031691908a6000613553565b600480546001600160801b03928316600160801b029216919091179055611d16866116de565b611d209082613fc6565b600380546001600160801b03928316600160801b029216919091179055611d46846116de565b60018054600090611d619084906001600160801b03166140de565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611d8e836135cd565b60028054600090611da3908490600f0b6140fe565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611dd3856116de565b60018054601090611df5908490600160801b90046001600160801b0316613fc6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000611e4d7f000000000000000000000000000000000000000000000000000000000000000085614029565b90506000600c6000611e60600188611a07565b81526020019081526020016000205490506000600c6000611e82600289611a07565b8152602001908152602001600020549050816000148015611ea1575080155b15611ec657600083815260076020526040902080546001600160801b03169055611fbe565b6000611f0a8b611ed68c896119f2565b611ee190600261403c565b8b611eec8c8b6119f2565b611ef69190614016565b611f009190614029565b6107b19190614016565b90508415611f695760008481526007602052604090208054829190601090611f3d908490600160801b9004600f0b61412b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611fbc565b60008481526007602052604090208054829190601090611f94908490600160801b9004600f0b6140fe565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b505b50505050505050505050565b8082138015611fda575060008212155b1561206d576000611feb828261360b565b611ff59084614158565b6002549091506120229061201d908390600160801b90046001600160801b0316600f0b613621565b6135cd565b60028054601090612044908490600160801b90046001600160801b0316613fc6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b8181131561112757600082126120e357612086826135cd565b61208f826135cd565b612099919061412b565b600280546010906120bb908490600160801b90046001600160801b03166140de565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b61209961201d82600061360b565b600061210360408301602084016140c1565b1561210f5750826101a6565b61211984846119f2565b90506101a6565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061216d5750600034115b1561218b57604051631574f9f360e01b815260040160405180910390fd5b565b600080806121a160408501602086016140c1565b6121bc576121b76121b061112b565b86906119f2565b6121be565b845b90506000600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161228c574791508234101561222d576040516312171d8360e31b815260040160405180910390fd5b8234111561228757336122408434614029565b604051600081818185875af1925050503d806000811461227c576040519150601f19603f3d011682016040523d82523d6000602084013e612281565b606091505b50909150505b6123b1565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156122f0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612314919061407d565b6040516323b872dd60e01b8152336004820152306024820152604481018590529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af115801561238a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123ae91906140a4565b90505b806123cf576040516312171d8360e31b815260040160405180910390fd5b60105460000361243657612403877f0000000000000000000000000000000000000000000000000000000000000000612b2e565b601081905594507f0000000000000000000000000000000000000000000000000000000000000000935061247392505050565b6010546000906124479089856116c0565b9050806010600082825461245b9190614016565b9091555081905061246a61112b565b95509550505050505b9250929050565b60008061248b846301e13380612b2e565b90506124d16124c76124a5670de0b6b3a764000086613630565b6124af88856119f2565b6124c190670de0b6b3a7640000614016565b90613645565b611480888a6119f2565b979650505050505050565b6000838152600b602090815260408083206001600160a01b03861684529091528120805483929061250e908490614016565b90915550506000838152600c602052604081208054839290612531908490614016565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291016116b3565b600154600254600091611260916001600160801b0390911690600f0b61369c565b6000806125ac878787866132b2565b90506124d16125c082866301e133806136b9565b6125d283670de0b6b3a7640000614029565b90612b2e565b61263560405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600254600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600354821660e0820152600454909161010083019161270491166136df565b81526003546001600160801b03600160801b9182900481166020840152600454604090930192612736929004166136df565b905292915050565b60008061275e8361014001518461012001516119f290919063ffffffff16565b61010084015160e0850151612772916119f2565b61277c9190614158565b905060006127928460000151856020015161369c565b905060008213156128325760006127d48286604001518760a001518860c00151670de0b6b3a76400006127c59190614029565b89606001518a60800151613755565b90506127e081846137ef565b9050801561282c57612819828660400151838860c00151670de0b6b3a764000061280a9190614029565b89606001518a608001516137fe565b85518690612828908390614029565b9052505b506128ee565b60008212156128ee5761284482614178565b915060006128788286604001518760c00151670de0b6b3a76400006128699190614029565b88606001518960800151613832565b905061288481846137ef565b905080156128d0576128bd828660400151838860c00151670de0b6b3a76400006128ae9190614029565b89606001518a608001516138c8565b855186906128cc908390614016565b9052505b6128da8184614029565b855186906128e9908390614016565b905250505b600061291d856101000151670de0b6b3a764000061290c9190614029565b606087015160e088015191906116c0565b61294b866101400151670de0b6b3a76400006129399190614029565b606088015161012089015191906116c0565b6129559190614158565b905060008186600001516129699190614194565b90508560a001518112156129905760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516129a29082614029565b9695505050505050565b806000036129b75750565b6001546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000811015612a045760405163585fe6df60e11b815260040160405180910390fd5b6000612a108383614194565b90507f0000000000000000000000000000000000000000000000000000000000000000811215612a535760405163585fe6df60e11b815260040160405180910390fd5b612a5c816116de565b600180546001600160801b0319166001600160801b0392909216919091179055600254600090600f0b818112612a9e57612a978382866116c0565b9150612abe565b612ab2612aaa82614178565b8490866116c0565b612abb90614178565b91505b612ac7826135cd565b600280546001600160801b0319166001600160801b03928316179055600154612b0a916107b191600160801b900416612b00878561369c565b610ada878761369c565b600180546001600160801b03928316600160801b0292169190911790555050505050565b60006101a683670de0b6b3a7640000846116c0565b600080600080612b52886125d8565b90506000612b5f8261273e565b9050612b71612b6c61112b565b613052565b9450612b7e858b896116c0565b9450612b91612b8c86614178565b6129ac565b6001546001600160801b038082168452600254600f0b6020850152600160801b9091041660408301526000612bc58361273e565b90506000612bd48a83856116c0565b9050612be08c8b614158565b612bea9082614158565b90506000811215612c33576000612c0b612c0383614178565b85908d6116c0565b9050612c178189614029565b9750612c22816129ac565b612c2d818a8e61395d565b60009150505b94509092505050955095509592505050565b6000806000806000806000612c59886131f1565b9050612cc3612c6661257c565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006139a2565b9098509650935060008080612cd9611ace61257c565b9050612ce78d85838f61337c565b9850929550909350612cfd915084905088614029565b9650612d098284614016565b612d13908a614029565b9850612d1f858a614016565b975050505050612da385858584600760007f00000000000000000000000000000000000000000000000000000000000000008e612d5c9190614029565b81526020810191909152604001600020546001600160801b0316428d11612d9a5760008d8152600760205260409020546001600160801b0316612d9c565b8d5b60016134d8565b999d939c50919a5098509695509350505050565b6003546001600160801b0316612df26107b182612ddc85670de0b6b3a764000061403c565b6004546001600160801b031691908a6000613553565b600480546001600160801b0319166001600160801b0392909216919091179055612e1b866116de565b612e259082613fc6565b600380546001600160801b0319166001600160801b039290921691909117905550612e4f836116de565b60018054600090612e6a9084906001600160801b0316613fc6565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612e97826135cd565b60028054600090612eac908490600f0b61412b565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550612edc846116de565b60018054601090612efe908490600160801b90046001600160801b03166140de565b82546101009290920a6001600160801b038181021990931691831602179091556001547f0000000000000000000000000000000000000000000000000000000000000000911610905080612f665750600254600154600f9190910b6001600160801b03909116125b156110ee5760405163585fe6df60e11b815260040160405180910390fd5b600080612f918686612b2e565b91506000612fbf837f00000000000000000000000000000000000000000000000000000000000000006119f2565b9050612feb817f00000000000000000000000000000000000000000000000000000000000000006119f2565b9150831561300e57612ffd8282614029565b6130079084614029565b9250613025565b6130188282614029565b6130229084614016565b92505b84861015613048576130388387876116c0565b92506130458287876116c0565b91505b5094509492505050565b600254600090819061307490600160801b90046001600160801b031684612b2e565b90506130a07f000000000000000000000000000000000000000000000000000000000000000082614016565b6001546001600160801b031611156130f8576001547f0000000000000000000000000000000000000000000000000000000000000000906130eb9083906001600160801b0316614029565b6130f59190614029565b91505b50919050565b600080841161310d5782613118565b6131188386866116c0565b90508060000361312857506131eb565b808583821115613143578391506131408783856116c0565b90505b61314c826116de565b600680546000906131679084906001600160801b03166140de565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550613194816116de565b600680546010906131b6908490600160801b90046001600160801b03166140de565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506131e781612b8c90614178565b5050505b50505050565b6000806131fc61122a565b905080831161320c576000613216565b6132168184614029565b91506130f5827f0000000000000000000000000000000000000000000000000000000000000000612b2e565b6000808061326361325b88670de0b6b3a7640000614029565b8990876116c0565b905061326f88886119f2565b915081156132a5576132968a8a8461328f8a670de0b6b3a7640000614029565b89896138c8565b92506132a28382614016565b90505b9750975097945050505050565b600061018d826124c18588886116c0565b60006132e16132da84670de0b6b3a7640000614029565b83906139ee565b6101a690670de0b6b3a7640000614029565b6000806133718561330261257c565b61330c9190614016565b60015461332a908790600160801b90046001600160801b0316614029565b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006132b2565b909210949350505050565b6000808080806133c78887610ada8c6114806133a08d670de0b6b3a7640000614029565b7f0000000000000000000000000000000000000000000000000000000000000000906119f2565b94506133f3857f00000000000000000000000000000000000000000000000000000000000000006119f2565b9250600061341461340c8a670de0b6b3a7640000614029565b8b90896116c0565b9050613440817f00000000000000000000000000000000000000000000000000000000000000006119f2565b945061346c857f00000000000000000000000000000000000000000000000000000000000000006119f2565b92506134788385614016565b915050945094509450945094565b60008061349f8561349788876139ee565b8a91906116c0565b90506134ac8884866116c0565b6134b69082614016565b9050868111156134cd576134ca8782614029565b91505b509695505050505050565b600080600080600080888810156135355786156134fd576134fa8d898b6116c0565b9c505b6135088c898b6116c0565b9b506135148b8d614158565b90506135218b898b6116c0565b9a5061352e8a898b6116c0565b9950613542565b61353f8b8d614158565b90505b9b9c9a9b999a975050505050505050565b600081156135935761358c6135688487614016565b61357285876119f2565b61357c888a6119f2565b6135869190614016565b90613630565b905061018d565b8285036135a25750600061018d565b6129a26135af8487614029565b6135b985876119f2565b6135c3888a6119f2565b6135869190614029565b600060016001607f1b031982128015906135ee575060016001607f1b038213155b6117045760405163a5353be560e01b815260040160405180910390fd5b600081831361361a57816101a6565b5090919050565b60008183136130f857826101a6565b60006101a683670de0b6b3a7640000846136b9565b60008160000361365e5750670de0b6b3a764000061154e565b8260000361366e5750600061154e565b81600061367a85613a03565b9050818102613691670de0b6b3a7640000826141bc565b90506129a281613c16565b6000806136a98385614158565b905060008112156101a657600080fd5b60008260001904841183021582026136d057600080fd5b50910281810615159190040190565b600080670de0b6b3a76400006136f361122a565b6136fd919061403c565b905080831161370d576000613717565b6137178184614029565b91506130f561374e670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061403c565b8390612b2e565b6000806137658888878787613da1565b9050600061378261377a876124c1878b6139ee565b8690866136b9565b61378c9083614029565b9050670de0b6b3a764000081106137c0576137b96137b2670de0b6b3a764000088612b2e565b8290613645565b90506137d8565b6137d56137b2670de0b6b3a764000088613630565b90505b6137e28882614029565b9998505050505050505050565b60008183116130f857826101a6565b60008061380f888888888888613dd0565b9092509050806134cd57604051637ac17d2560e01b815260040160405180910390fd5b6000806138428787878787613e92565b9050600061386d670de0b6b3a764000061385c8787612b2e565b6138669190614016565b8390613630565b9050670de0b6b3a7640000811061389a576138936137b2670de0b6b3a764000088613630565b90506138b2565b6138af6137b2670de0b6b3a764000088612b2e565b90505b6138bc8188614029565b98975050505050505050565b6000806138d88888878787613e92565b90506138e8856124c1888a614029565b9650600061390284866138fb8b86614029565b91906136b9565b9050670de0b6b3a7640000811061392f576139286137b2670de0b6b3a764000088613630565b9050613947565b6139446137b2670de0b6b3a764000088612b2e565b90505b6139518185613630565b90506137e28982614029565b600061396b61147b836125d8565b6000808052600c6020526000805160206141eb8339815191525491925090613994908590614016565b90506110ee858383876130fe565b600080806139bb61325b88670de0b6b3a7640000614029565b905086156132a5576139cd88886119f2565b91506132968a8a846139e78a670de0b6b3a7640000614029565b89896137fe565b60006101a68383670de0b6b3a76400006136b9565b6000808213613a2557604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213613c3157506000919050565b680755bf798b4a1bf1e58212613c5a5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000613dad8585613645565b613dc6613dbe866124c1868b6119f2565b8590856116c0565b6129a29190614016565b6000806000613de28989888888613e92565b9050613df2866124c1898b614016565b975087811015613e09576000809250925050613e87565b6000613e1a85876138fb8c86614029565b9050670de0b6b3a76400008110613e4757613e406137b2670de0b6b3a764000089613630565b9050613e5f565b613e5c6137b2670de0b6b3a764000089612b2e565b90505b613e698186613630565b9050808a1115613e8057613e7d818b614029565b93505b6001925050505b965096945050505050565b6000613e9e8585613645565b613dc6613eaf866124c1868b6139ee565b8590856136b9565b6000606082840312156130f857600080fd5b600080600060608486031215613ede57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115613f0357600080fd5b613f0f86828701613eb7565b9150509250925092565b60008060008060808587031215613f2f57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff811115613f5b57600080fd5b613f6787828801613eb7565b91505092959194509250565b600060208284031215613f8557600080fd5b5035919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6001600160801b03828116828216039080821115613fe657613fe6613fb0565b5092915050565b600060208284031215613fff57600080fd5b81356001600160a01b03811681146101a657600080fd5b8082018082111561154e5761154e613fb0565b8181038181111561154e5761154e613fb0565b808202811582820484141761154e5761154e613fb0565b634e487b7160e01b600052601260045260246000fd5b60008261407857614078614053565b500690565b60006020828403121561408f57600080fd5b5051919050565b80151581146101e057600080fd5b6000602082840312156140b657600080fd5b81516101a681614096565b6000602082840312156140d357600080fd5b81356101a681614096565b6001600160801b03818116838216019080821115613fe657613fe6613fb0565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561154e5761154e613fb0565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561154e5761154e613fb0565b8181036000831280158383131683831282161715613fe657613fe6613fb0565b6000600160ff1b820161418d5761418d613fb0565b5060000390565b80820182811260008312801582168215821617156141b4576141b4613fb0565b505092915050565b6000826141cb576141cb614053565b600160ff1b8214600019841416156141e5576141e5613fb0565b50059056fe13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e8e33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333da264697066735822122046d714ca7003fc0524b6e27ffbe559f112d5f1e351abae77986d0dcf75e83edb64736f6c63430008130033",
    "sourceMap": "6662:4295:56:-:0;;;454:1:87;429:26;;6765:235:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6862:7;6917;6891:34;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;6974:7;6948:34;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;5110:17:40;;-1:-1:-1;;;;;5097:30:40;;;;;5656:28;;;1995:7:0;;5687:3:40;-1:-1:-1;5652:113:40;;;5713:41;;-1:-1:-1;;;5713:41:40;;;;;;;;;;;5652:113;5798:28;;;;5774:52;;5865:32;;;;5837:60;;5929:26;;;;5907:48;;6120:26;;;;6150:1;6120:31;6116:108;;6174:39;;-1:-1:-1;;;6174:39:40;;;;;;;;;;;6116:108;6255:26;;;;;6233:48;;6335:26;6308:24;;;;:53;;:127;;;6404:7;:26;;;6377:7;:24;;;:53;;;;:::i;:::-;:58;;6308:127;6291:224;;;6467:37;;-1:-1:-1;;;6467:37:40;;;;;;;;;;;6291:224;6544:24;;;;;6524:44;;6593:19;;;;6578:34;;6643:25;;;;6622:46;;;;6692:18;;;;6678:11;:32;;-1:-1:-1;;;;;;6678:32:40;-1:-1:-1;;;;;6678:32:40;;;;;;6736:20;;;;6720:36;;;6826:12;;;;:18;6847:4;-1:-1:-1;;6826:65:40;;;6887:4;6867:7;:12;;;:17;;;:24;6826:65;:111;;;;6933:4;6907:7;:12;;;:23;;;:30;6826:111;6809:202;;;6969:31;;-1:-1:-1;;;6969:31:40;;;;;;;;;;;6809:202;7032:12;;;;;:18;7020:30;;7071:12;;:17;;;;;7060:28;;7115:12;;:23;;;;;7098:40;;7215:21;;;;-1:-1:-1;;;;;7198:38:40;;;;;-1:-1:-1;;;7264:22:40;7246:40;;1869:10:38;;;;;;;;;;-1:-1:-1;;;1869:10:38;;;;1692:264;;1720:121;1692:264;;;4595:25:149;1859:21:38;4636:18:149;;;4629:34;1898:13:38;-1:-1:-1;4679:18:149;;4672:34;1937:4:38;-1:-1:-1;4722:18:149;;;4715:60;;;;1692:264:38;;;;;;;;;;4567:19:149;;;;1692:264:38;;;1669:297;;;;;1650:316;;2083:18:0;;::::2;;::::0;2111::::2;;::::0;-1:-1:-1;6662:4295:56;;-1:-1:-1;6662:4295:56;;;;;;;;;:::o;:::-;;;;;;;;:::o;14:347:149:-;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:149;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:149;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:622::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:149;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;;556:622;;;;:::o;1183:1260::-;1281:6;1334:3;1322:9;1313:7;1309:23;1305:33;1302:53;;;1351:1;1348;1341:12;1302:53;1377:17;;:::i;:::-;1417:48;1455:9;1417:48;:::i;:::-;1410:5;1403:63;1498:57;1551:2;1540:9;1536:18;1498:57;:::i;:::-;1493:2;1486:5;1482:14;1475:81;1609:2;1598:9;1594:18;1588:25;1583:2;1576:5;1572:14;1565:49;1667:2;1656:9;1652:18;1646:25;1641:2;1634:5;1630:14;1623:49;1726:3;1715:9;1711:19;1705:26;1699:3;1692:5;1688:15;1681:51;1786:3;1775:9;1771:19;1765:26;1759:3;1752:5;1748:15;1741:51;1846:3;1835:9;1831:19;1825:26;1819:3;1812:5;1808:15;1801:51;1906:3;1895:9;1891:19;1885:26;1879:3;1872:5;1868:15;1861:51;1931:3;1987:2;1976:9;1972:18;1966:25;1961:2;1954:5;1950:14;1943:49;;2011:3;2067:2;2056:9;2052:18;2046:25;2041:2;2034:5;2030:14;2023:49;;2091:3;2126:57;2179:2;2168:9;2164:18;2126:57;:::i;:::-;2110:14;;;2103:81;2203:3;2238:57;2276:18;;;2238:57;:::i;:::-;2222:14;;;2215:81;2315:3;2350:62;2404:7;2384:18;;;2350:62;:::i;:::-;2334:14;;;2327:86;2338:5;1183:1260;-1:-1:-1;;;1183:1260:149:o;2771:1374::-;3001:13;;-1:-1:-1;;;;;2522:31:149;2510:44;;2961:3;2946:19;;3073:4;3065:6;3061:17;3055:24;3088:62;3144:4;3133:9;3129:20;3115:12;-1:-1:-1;;;;;2522:31:149;2510:44;;2448:112;3088:62;;3206:4;3198:6;3194:17;3188:24;3181:4;3170:9;3166:20;3159:54;3269:4;3261:6;3257:17;3251:24;3244:4;3233:9;3229:20;3222:54;3332:4;3324:6;3320:17;3314:24;3307:4;3296:9;3292:20;3285:54;3395:4;3387:6;3383:17;3377:24;3370:4;3359:9;3355:20;3348:54;3458:4;3450:6;3446:17;3440:24;3433:4;3422:9;3418:20;3411:54;3521:4;3513:6;3509:17;3503:24;3496:4;3485:9;3481:20;3474:54;3547:6;3607:2;3599:6;3595:15;3589:22;3584:2;3573:9;3569:18;3562:50;;3631:6;3691:2;3683:6;3679:15;3673:22;3668:2;3657:9;3653:18;3646:50;;3715:6;3770:2;3762:6;3758:15;3752:22;3783:62;3841:2;3830:9;3826:18;3810:14;-1:-1:-1;;;;;2522:31:149;2510:44;;2448:112;3783:62;-1:-1:-1;;3864:6:149;3907:15;;;3901:22;-1:-1:-1;;;;;2522:31:149;3975:18;;;2510:44;4013:6;4056:15;;;4050:22;2635:12;;4120:18;;;2623:25;;;;2697:4;2686:16;;2680:23;2664:14;;;2657:47;2753:4;2742:16;;;2736:23;2720:14;;;;2713:47;2771:1374;:::o;4150:209::-;4182:1;4208;4198:132;;4252:10;4247:3;4243:20;4240:1;4233:31;4287:4;4284:1;4277:15;4315:4;4312:1;4305:15;4198:132;-1:-1:-1;4344:9:149;;4150:209::o;4364:417::-;6662:4295:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080604052600436106102255760003560e01c80639032c72611610123578063b4f8da39116100ab578063dbbe80701161006f578063dbbe80701461084b578063ded0623114610465578063e44808bc1461085e578063eac3e7991461087e578063ed64bab2146108b257610225565b8063b4f8da39146107c9578063ca6d38f714610803578063cba2e58d14610823578063cbc1343414610357578063d5002f2e1461083657610225565b80639cd241af116100f25780639cd241af1461074e578063a22cb465146105aa578063a77384c11461076e578063ab033ea91461078e578063b1b4b170146107a957610225565b80639032c726146106cb578063907c0f92146106eb5780639aa68462146107005780639bd334981461070e57610225565b80633e691db9116101b15780637180c8ca116101755780637180c8ca146105aa57806371f88b7c146105ca57806377d05ff4146105ea5780638120a3e2146105fd578063883483971461061d57610225565b80633e691db9146104fb5780634ed2d6ac1461051b578063680962391461053657806368c2ecb814610556578063702db0eb1461057657610225565b806321b57d53116101f857806321b57d53146103d157806322d5506b1461041d57806329b23fc11461046557806330adf81f146104935780633644e515146104c757610225565b806302329a2914610335578063074a6de91461035757806317fad7fc146103915780631c0f12b6146103b1575b34801561023157600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168585604051610274929190614062565b600060405180830381855af49150503d80600081146102af576040519150601f19603f3d011682016040523d82523d6000602084013e6102b4565b606091505b509150915081156102d857604051638bb0a34b60e01b815260040160405180910390fd5b60006102e382614072565b90506001600160e01b03198116636e64089360e11b1461030557815160208301fd5b8151600319810160048401908152926103269181016020019060240161411a565b80519650602001945050505050f35b34801561034157600080fd5b506103556103503660046141e4565b6108d2565b005b34801561036357600080fd5b50610377610372366004614213565b6108ff565b604080519283526020830191909152015b60405180910390f35b34801561039d57600080fd5b506103556103ac3660046142bf565b610934565b3480156103bd57600080fd5b506103556103cc366004614350565b610966565b3480156103dd57600080fd5b506104057f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610388565b34801561042957600080fd5b5061043d610438366004614394565b610996565b604080519586526020860194909452928401919091526060830152608082015260a001610388565b34801561047157600080fd5b506104856104803660046143c6565b6109bf565b604051908152602001610388565b34801561049f57600080fd5b506104857f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b3480156104d357600080fd5b506104857f000000000000000000000000000000000000000000000000000000000000000081565b34801561050757600080fd5b50610485610516366004614420565b6109f3565b34801561052757600080fd5b506103556103cc36600461445d565b34801561054257600080fd5b506103556105513660046144a3565b610a24565b34801561056257600080fd5b506104856105713660046144c5565b610bcf565b34801561058257600080fd5b506103556105913660046144f5565b6001600160801b03908116600160801b02911617600155565b3480156105b657600080fd5b506103556105c5366004614528565b610be0565b3480156105d657600080fd5b506103776105e536600461455f565b610c09565b6104856105f8366004614213565b610c25565b34801561060957600080fd5b506103556106183660046144c5565b610c58565b34801561062957600080fd5b5061035561063836600461459d565b805160208201516001600160801b03918216600160801b91831682021760015560408301516060840151908316908316820217600255608083015160a084015190831690831682021760035560c083015160e08401519083169216021760045561010080820151600580546101209094015161ffff1990941691151561ff00191691909117921515909102919091179055565b3480156106d757600080fd5b506103556106e6366004614665565b610c64565b3480156106f757600080fd5b50610485610c73565b6104856104803660046143c6565b34801561071a57600080fd5b5061072e6107293660046144a3565b610c82565b604080519485526020850193909352918301526060820152608001610388565b34801561075a57600080fd5b506103556107693660046146e1565b610ca2565b34801561077a57600080fd5b506103556107893660046144c5565b601055565b34801561079a57600080fd5b50610355610350366004614716565b3480156107b557600080fd5b506104856107c43660046144c5565b610cd1565b3480156107d557600080fd5b506103556107e4366004614731565b600280546001600160801b03928316600160801b029216919091179055565b34801561080f57600080fd5b5061048561081e3660046144c5565b610cdc565b6103776108313660046143c6565b610ce7565b34801561084257600080fd5b50601054610485565b6103776108593660046143c6565b610d03565b34801561086a57600080fd5b5061035561087936600461474c565b610d12565b34801561088a57600080fd5b506104057f000000000000000000000000000000000000000000000000000000000000000081565b3480156108be57600080fd5b506103556108cd3660046144c5565b610d43565b6108fb7f0000000000000000000000000000000000000000000000000000000000000000610d68565b5050565b60008061092b7f0000000000000000000000000000000000000000000000000000000000000000610d68565b50935093915050565b61095d7f0000000000000000000000000000000000000000000000000000000000000000610d68565b50505050505050565b61098f7f0000000000000000000000000000000000000000000000000000000000000000610d68565b5050505050565b60008060008060006109aa89898989610de2565b939d929c50909a509850909650945050505050565b60006109ea7f0000000000000000000000000000000000000000000000000000000000000000610d68565b50949350505050565b6000610a1e7f0000000000000000000000000000000000000000000000000000000000000000610d68565b50919050565b6040516370a0823160e01b8152306004820152600090610aba906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610a8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab391906147a3565b8385610ef9565b9150506000811315610b42576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b158015610b2e57600080fd5b505af115801561095d573d6000803e3d6000fd5b6000811215610bca576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac30610b84846147d2565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015610b2e57600080fd5b505050565b6000610bda82610f93565b92915050565b610bca7f0000000000000000000000000000000000000000000000000000000000000000610d68565b600080610c17858585610feb565b90925090505b935093915050565b6000610c507f0000000000000000000000000000000000000000000000000000000000000000610d68565b509392505050565b610c618161106b565b50565b61095d878787878787876111f2565b6000610c7d611441565b905090565b600080600080610c928686611477565b9299919850965090945092505050565b610ccb7f0000000000000000000000000000000000000000000000000000000000000000610d68565b50505050565b6000610bda826115f1565b6000610bda82611694565b600080610cf68686868661170a565b9150915094509492505050565b600080610cf68686868661195b565b610d3b7f0000000000000000000000000000000000000000000000000000000000000000610d68565b505050505050565b6108fb7f00000000000000000000000000000000000000000000000000000000000000005b6060600080836001600160a01b0316600036604051610d88929190614062565b600060405180830381855af49150503d8060008114610dc3576040519150601f19603f3d011682016040523d82523d6000602084013e610dc8565b606091505b509150915081610dda57805160208201fd5b805160208201f35b600080808080610e3a8887610e338c610e2d610e068d670de0b6b3a76400006147ee565b7f000000000000000000000000000000000000000000000000000000000000000090611bab565b90611bab565b9190611bbc565b9450610e66857f0000000000000000000000000000000000000000000000000000000000000000611bab565b92506000610e87610e7f8a670de0b6b3a76400006147ee565b8b9089611bbc565b9050610eb3817f0000000000000000000000000000000000000000000000000000000000000000611bab565b9450610edf857f0000000000000000000000000000000000000000000000000000000000000000611bab565b9250610eeb8385614801565b915050945094509450945094565b60008080610f0b846301e13380611bda565b90506000610f2a8260008812610f215787610e2d565b610e2d886147d2565b90506000861315610f5d57610f48610f4182611bef565b8890611bab565b9350610f5487856147ee565b92505050610c1d565b6000861215610f8557610f79610f7282611bef565b8890611bda565b9350610f548785614814565b509495600095509350505050565b600080610f9e611441565b9050808311610fae576000610fb8565b610fb881846147ee565b9150610fe4827f0000000000000000000000000000000000000000000000000000000000000000611bda565b9392505050565b60008061103585610e2d85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061102b818c611bda565b610e2d91906147ee565b9150611061827f0000000000000000000000000000000000000000000000000000000000000000611bab565b9050935093915050565b806000036110765750565b6001546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156110c35760405163585fe6df60e11b815260040160405180910390fd5b60006110cf838361483b565b90507f00000000000000000000000000000000000000000000000000000000000000008112156111125760405163585fe6df60e11b815260040160405180910390fd5b61111b81611d7a565b600180546001600160801b0319166001600160801b0392909216919091179055600254600090600f0b81811261115d57611156838286611bbc565b915061117d565b611171611169826147d2565b849086611bbc565b61117a906147d2565b91505b61118682611da4565b600280546001600160801b0319166001600160801b039283161790556001546111ce916111c991600160801b9004166111bf8785611de2565b610e338787611de2565b611d7a565b600180546001600160801b03928316600160801b0292169190911790555050505050565b834211156112135760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b03871661123a5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611366573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146113a457604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600f6020526040812080549091906113ca90614863565b909155506001600160a01b038981166000818152600d60209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b600061146d7f000000000000000000000000000000000000000000000000000000000000000042614892565b610c7d90426147ee565b6000806000806114e4611488611dff565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000611e20565b9250600061154d6114f3611dff565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e4c565b9050611583878561157e847f0000000000000000000000000000000000000000000000000000000000000000611e6c565b611eb9565b156115a15760405163512095c760e01b815260040160405180910390fd5b6000806115af89848a610feb565b90925090506115be82876147ee565b94506115ca8186614801565b95506115d781848a611bbc565b93506115e3848a6147ee565b965050505092959194509250565b600254600090819061161390600160801b90046001600160801b031684611bda565b905061163f7f000000000000000000000000000000000000000000000000000000000000000082614801565b6001546001600160801b03161115610a1e576001547f00000000000000000000000000000000000000000000000000000000000000009061168a9083906001600160801b03166147ee565b610fe491906147ee565b600080670de0b6b3a76400006116a8611441565b6116b291906148a6565b90508083116116c25760006116cc565b6116cc81846147ee565b9150610fe4611703670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006148a6565b8390611bda565b6000806000546001146117515760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064015b60405180910390fd5b6002600055600554610100900460ff161561177f576040516313d0ff5960e31b815260040160405180910390fd5b611787611f42565b6000806117948886611faf565b909250905060006117a58383611bab565b90507f00000000000000000000000000000000000000000000000000000000000000008110156117e85760405163211ddda360e11b815260040160405180910390fd5b86821015611809576040516342af972b60e01b815260040160405180910390fd5b6000611813611441565b905061181f818461229c565b50600080600061182f8787611477565b909a5091945092509050878c111561185a5760405163c972651760e01b815260040160405180910390fd5b806009600082825461186c9190614801565b9091555061189c90507f000000000000000000000000000000000000000000000000000000000000000085614801565b98506118ac83898489888e6125a6565b60006118b960018b6127a0565b90506118d2816118cc60208e018e614716565b8b6127d5565b8d8b8a836118e36020840184614716565b6001600160a01b03167f8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda6868f611919878f8861287d565b60408051928352602083019190915281018e90526060810185905260800160405180910390a39a50505050505050505050506001600055909590945092505050565b60008060005460011461199d5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401611748565b6002600055600554610100900460ff16156119cb576040516313d0ff5960e31b815260040160405180910390fd5b6119d3611f42565b7f0000000000000000000000000000000000000000000000000000000000000000861015611a145760405163211ddda360e11b815260040160405180910390fd5b6000611a1e6128ac565b905084811015611a41576040516342af972b60e01b815260040160405180910390fd5b6000611a4b611441565b90506000611a59828461229c565b90506000611a877f000000000000000000000000000000000000000000000000000000000000000084614801565b90506000806000611a998d88876129ab565b600980549296509294509250829190600090611ab6908490614801565b92505081905550506000611acb82888c612add565b9050808c1015611aee5760405163c972651760e01b815260040160405180910390fd5b611af8818b611faf565b5050611b078d83858a88612b05565b6000611b146002866127a0565b90508d611b2e82611b2860208f018f614716565b836127d5565b81611b3c60208e018e614716565b60408051898152602081018890529081018c9052606081018490526001600160a01b0391909116907f80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef959060800160405180910390a350506001600055929c929b50919950505050505050505050565b6000610fe48383670de0b6b3a76400005b6000826000190484118302158202611bd357600080fd5b5091020490565b6000610fe483670de0b6b3a764000084611bbc565b6000680248ce36a70cb26b3e198213611c0a57506000919050565b680755bf798b4a1bf1e58212611c335760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000600160801b8210611da057604051630f0af95160e11b815260040160405180910390fd5b5090565b600060016001607f1b03198212801590611dc5575060016001607f1b038213155b611da05760405163a5353be560e01b815260040160405180910390fd5b600080611def8385614814565b90506000811215610fe457600080fd5b600154600254600091610c7d916001600160801b0390911690600f0b611de2565b6000611e41878787611e3a88670de0b6b3a76400006147ee565b8787612d92565b979650505050505050565b6000611e6382611e5d858888611bbc565b90612e33565b95945050505050565b6000610fe4611e98670de0b6b3a7640000611e878187612e94565b611e9191906147ee565b8490612ea9565b611eaa90670de0b6b3a7640000614801565b670de0b6b3a764000090611bda565b600080611f3785611ec8611dff565b611ed29190614801565b600154611ef0908790600160801b90046001600160801b03166147ee565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611e4c565b909210949350505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14801590611f8f5750600034115b15611fad57604051631574f9f360e01b815260040160405180910390fd5b565b60008080611fc360408501602086016141e4565b611fde57611fd9611fd26128ac565b8690611bab565b611fe0565b845b90506000600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016120ae574791508234101561204f576040516312171d8360e31b815260040160405180910390fd5b823411156120a9573361206284346147ee565b604051600081818185875af1925050503d806000811461209e576040519150601f19603f3d011682016040523d82523d6000602084013e6120a3565b606091505b50909150505b6121d3565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612112573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061213691906147a3565b6040516323b872dd60e01b8152336004820152306024820152604481018590529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156121ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121d091906148bd565b90505b806121f1576040516312171d8360e31b815260040160405180910390fd5b60105460000361225857612225877f0000000000000000000000000000000000000000000000000000000000000000611bda565b601081905594507f0000000000000000000000000000000000000000000000000000000000000000935061229592505050565b601054600090612269908985611bbc565b9050806010600082825461227d9190614801565b9091555081905061228c6128ac565b95509550505050505b9250929050565b600082815260076020526040812080546001600160801b03161515806122c157504284115b156122d757546001600160801b03169050610bda565b6122e083611d7a565b81546001600160801b0319166001600160801b0391909116178155600060078161232a7f0000000000000000000000000000000000000000000000000000000000000000886147ee565b815260208101919091526040016000908120546001600160801b031691506123536002876127a0565b6000818152600c602052604081205491925081156123ac5760008061237b848a886000612ebe565b9150915080600960008282546123919190614801565b909155506123a5905084600084808e612f8c565b6001925050505b60006123b960018a6127a0565b6000818152600c60205260409020549091508015612414576000806123e1838c8a6001612ebe565b9150915080600960008282546123f79190614801565b909155508c905061240c846000858085613106565b600195505050505b82156124925760006124467f00000000000000000000000000000000000000000000000000000000000000008c6147ee565b600081815260076020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b92612486928492919004900b6132d3565b61248f8b6133fa565b50505b6000808a116124a25760006124b7565b6124b78a610e2d6124b28d6134e1565b613647565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b03909216916125229190614801565b61252c91906147ee565b905060008115612545576125408383611bda565b612548565b60005b604080518e8152602081018a9052908101869052606081018290529091508d907f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15519060800160405180910390a250999b9a5050505050505050505050565b6003546001600160801b03166125e16111c9826125cb85670de0b6b3a76400006148a6565b6004546001600160801b031691908a60016138ab565b600480546001600160801b0319166001600160801b039290921691909117905561260a87611d7a565b600180546000906126259084906001600160801b03166148da565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061265285611d7a565b60018054601090612674908490600160801b90046001600160801b03166148fa565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506126a186611d7a565b6126ab90826148da565b600380546001600160801b0319166001600160801b0383161790556000848152600760205260408120805492935091600160801b9004600f0b906127076126f28b89611bab565b6126fd8b60026148a6565b6111c991906147ee565b835490915081908490601090612728908490600160801b9004600f0b61491a565b82546001600160801b039182166101009390930a928302919092021990911617905550825461276590600f84810b91600160801b9004900b6132d3565b61276e87613925565b61278b576040516318846de960e01b815260040160405180910390fd5b612794876133fa565b50505050505050505050565b60006001600160f81b038211156127ca5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600b602090815260408083206001600160a01b038616845290915281208054839290612807908490614801565b90915550506000838152600c60205260408120805483929061282a908490614801565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b600061288f60408301602084016141e4565b1561289b575082610fe4565b6128a58484611bab565b9050610fe4565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016128fb575047612986565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561295f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061298391906147a3565b90505b6010546000036129975760006129a5565b6010546129a5908290611bda565b91505090565b6000806000612a176129bb611dff565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061398a565b915085612a248387611bab565b1115612a435760405163512095c760e01b815260040160405180910390fd5b6000806000612a536114f3611dff565b9050612a6989670de0b6b3a7640000838b610de2565b509295509350612a7d9150839050846147ee565b612a8790866147ee565b9450612acd88610e2d8b612a9b868a6147ee565b8b612aa68e826139ab565b8e7f00000000000000000000000000000000000000000000000000000000000000006139c1565b9550909250505093509350939050565b6000612aef60408301602084016141e4565b15612afb575082610fe4565b6128a58484611bda565b600354612b4f906111c990600160801b90046001600160801b0316612b3284670de0b6b3a76400006148a6565b600454600160801b90046001600160801b031691908960016138ab565b600480546001600160801b03928316600160801b0292169190911790556000612b7784611d7a565b600154612b8d91906001600160801b03166148fa565b600180546001600160801b0319166001600160801b0383161790559050612bb386611d7a565b60018054601090612bd5908490600160801b90046001600160801b03166148da565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612c0286611d7a565b60038054601090612c24908490600160801b90046001600160801b03166148da565b82546101009290920a6001600160801b03818102199093169183160217909155600254600154600f9190910b911612159050612c735760405163585fe6df60e11b815260040160405180910390fd5b6000612c7d611441565b600081815260076020526040902054909150600160801b9004600f0b612cc37f000000000000000000000000000000000000000000000000000000000000000088614892565b612ccd90886147ee565b96506000612cdb8989614801565b9050612ce681611d7a565b60008481526007602052604090208054601090612d0e908490600160801b9004600f0b614947565b82546001600160801b039182166101009390930a928302919092021990911617905550600083815260076020526040902054612d5890600f84810b91600160801b9004900b6132d3565b612d6186613925565b612d7e576040516318846de960e01b815260040160405180910390fd5b612d87866133fa565b505050505050505050565b600080612da28888878787613a13565b9050612db585611e5d611fd2898c614801565b9750612dc2848985611bbc565b97506000612dd089836147ee565b9050670de0b6b3a76400008110612e0457612dfd612df6670de0b6b3a764000088612e94565b8290612e33565b9050612e1c565b612e19612df6670de0b6b3a764000088611bda565b90505b612e2681896147ee565b9998505050505050505050565b600081600003612e4c5750670de0b6b3a7640000610bda565b82600003612e5c57506000610bda565b816000612e6885613a42565b9050818102612e7f670de0b6b3a764000082614974565b9050612e8a81611bef565b9695505050505050565b6000610fe483670de0b6b3a764000084613c55565b6000610fe48383670de0b6b3a7640000613c55565b600080612ecb8686611bda565b91506000612ef9837f0000000000000000000000000000000000000000000000000000000000000000611bab565b9050612f25817f0000000000000000000000000000000000000000000000000000000000000000611bab565b91508315612f4857612f3782826147ee565b612f4190846147ee565b9250612f5f565b612f5282826147ee565b612f5c9084614801565b92505b84861015612f8257612f72838787611bbc565b9250612f7f828787611bbc565b91505b5094509492505050565b600354600160801b90046001600160801b0316612fd56111c982612fb885670de0b6b3a76400006148a6565b600454600160801b90046001600160801b031691908a60006138ab565b600480546001600160801b03928316600160801b029216919091179055612ffb86611d7a565b61300590826148fa565b600380546001600160801b03928316600160801b02921691909117905561302b84611d7a565b600180546000906130469084906001600160801b03166148da565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061307383611da4565b60028054600090613088908490600f0b61491a565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506130b885611d7a565b600180546010906130da908490600160801b90046001600160801b03166148fa565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6003546001600160801b03166131416111c98261312b85670de0b6b3a76400006148a6565b6004546001600160801b031691908a60006138ab565b600480546001600160801b0319166001600160801b039290921691909117905561316a86611d7a565b61317490826148fa565b600380546001600160801b0319166001600160801b03929092169190911790555061319e83611d7a565b600180546000906131b99084906001600160801b03166148fa565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506131e682611da4565b600280546000906131fb908490600f0b614947565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061322b84611d7a565b6001805460109061324d908490600160801b90046001600160801b03166148da565b82546101009290920a6001600160801b038181021990931691831602179091556001547f00000000000000000000000000000000000000000000000000000000000000009116109050806132b55750600254600154600f9190910b6001600160801b03909116125b1561098f5760405163585fe6df60e11b815260040160405180910390fd5b80821380156132e3575060008212155b156133765760006132f48282613c7b565b6132fe9084614814565b60025490915061332b90613326908390600160801b90046001600160801b0316600f0b613c8a565b611da4565b6002805460109061334d908490600160801b90046001600160801b03166148fa565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b818113156108fb57600082126133ec5761338f82611da4565b61339882611da4565b6133a29190614947565b600280546010906133c4908490600160801b90046001600160801b03166148da565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b6133a2613326826000613c7b565b600c6020527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854600654600360f81b60009081527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d549091613467916001600160801b03909116906147ee565b905060006134758284614801565b905060006134856124b2866134e1565b90506000613494858385611bbc565b90506000806134a2886115f1565b9050828111156134b9576134b683826147ee565b91505b60008211806134c6575083155b156134d7576134d782858789613c99565b5050505050505050565b61353e60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600254600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600354821660e0820152600454909161010083019161360d9116611694565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261363f92900416611694565b905292915050565b600080613667836101400151846101200151611bab90919063ffffffff16565b61010084015160e085015161367b91611bab565b6136859190614814565b9050600061369b84600001518560200151611de2565b9050600082131561373b5760006136dd8286604001518760a001518860c00151670de0b6b3a76400006136ce91906147ee565b89606001518a60800151613d87565b90506136e98184613e0d565b9050801561373557613722828660400151838860c00151670de0b6b3a764000061371391906147ee565b89606001518a60800151613e1c565b855186906137319083906147ee565b9052505b506137f7565b60008212156137f75761374d826147d2565b915060006137818286604001518760c00151670de0b6b3a764000061377291906147ee565b88606001518960800151613e50565b905061378d8184613e0d565b905080156137d9576137c6828660400151838860c00151670de0b6b3a76400006137b791906147ee565b89606001518a60800151613ee6565b855186906137d5908390614801565b9052505b6137e381846147ee565b855186906137f2908390614801565b905250505b6000613826856101000151670de0b6b3a764000061381591906147ee565b606087015160e08801519190611bbc565b613854866101400151670de0b6b3a764000061384291906147ee565b60608801516101208901519190611bbc565b61385e9190614814565b90506000818660000151613872919061483b565b90508560a001518112156138995760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151612e8a90826147ee565b600081156138eb576138e46138c08487614801565b6138ca8587611bab565b6138d4888a611bab565b6138de9190614801565b90612e94565b9050611e63565b8285036138fa57506000611e63565b612e8a61390784876147ee565b6139118587611bab565b61391b888a611bab565b6138de91906147ee565b60006139517f000000000000000000000000000000000000000000000000000000000000000083611bab565b6002546001546001600160801b03600160801b9092048216600f0b91613978911685611bab565b6139829190614814565b121592915050565b6000611e418787876139a488670de0b6b3a76400006147ee565b8787613e1c565b60008183116139ba5781610fe4565b5090919050565b6000806139da856139d28887612ea9565b8a9190611bbc565b90506139e7888486611bbc565b6139f19082614801565b905086811115613a0857613a0587826147ee565b91505b509695505050505050565b6000613a1f8585612e33565b613a38613a3086611e5d868b612ea9565b859085613c55565b612e8a9190614801565b6000808213613a6457604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000826000190484118302158202613c6c57600080fd5b50910281810615159190040190565b60008183136139ba5781610fe4565b6000818313610a1e5782610fe4565b6000808411613ca85782613cb3565b613cb3838686611bbc565b905080600003613cc35750610ccb565b808583821115613cde57839150613cdb878385611bbc565b90505b613ce782611d7a565b60068054600090613d029084906001600160801b03166148da565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550613d2f81611d7a565b60068054601090613d51908490600160801b90046001600160801b03166148da565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061095d81613d82906147d2565b61106b565b600080613d978888878787613f7b565b90506000613db4613dac87611e5d878b612ea9565b869086613c55565b613dbe90836147ee565b9050670de0b6b3a76400008110613deb57613de4612df6670de0b6b3a764000088611bda565b9050613e03565b613e00612df6670de0b6b3a764000088612e94565b90505b612e2688826147ee565b6000818311610a1e5782610fe4565b600080613e2d888888888888613fa0565b909250905080613a0857604051637ac17d2560e01b815260040160405180910390fd5b600080613e608787878787613a13565b90506000613e8b670de0b6b3a7640000613e7a8787611bda565b613e849190614801565b8390612e94565b9050670de0b6b3a76400008110613eb857613eb1612df6670de0b6b3a764000088612e94565b9050613ed0565b613ecd612df6670de0b6b3a764000088611bda565b90505b613eda81886147ee565b98975050505050505050565b600080613ef68888878787613a13565b9050613f0685611e5d888a6147ee565b96506000613f208486613f198b866147ee565b9190613c55565b9050670de0b6b3a76400008110613f4d57613f46612df6670de0b6b3a764000088612e94565b9050613f65565b613f62612df6670de0b6b3a764000088611bda565b90505b613f6f8185612e94565b9050612e2689826147ee565b6000613f878585612e33565b613a38613f9886611e5d868b611bab565b859085611bbc565b6000806000613fb28989888888613a13565b9050613fc286611e5d898b614801565b975087811015613fd9576000809250925050614057565b6000613fea8587613f198c866147ee565b9050670de0b6b3a7640000811061401757614010612df6670de0b6b3a764000089612e94565b905061402f565b61402c612df6670de0b6b3a764000089611bda565b90505b6140398186612e94565b9050808a11156140505761404d818b6147ee565b93505b6001925050505b965096945050505050565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156140a15780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156140e3576140e36140a9565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715614112576141126140a9565b604052919050565b6000602080838503121561412d57600080fd5b825167ffffffffffffffff8082111561414557600080fd5b818501915085601f83011261415957600080fd5b81518181111561416b5761416b6140a9565b61417d601f8201601f191685016140e9565b9150808252868482850101111561419357600080fd5b60005b818110156141b1578381018501518382018601528401614196565b50600090820190930192909252509392505050565b8015158114610c6157600080fd5b80356141df816141c6565b919050565b6000602082840312156141f657600080fd5b8135610fe4816141c6565b600060608284031215610a1e57600080fd5b60008060006060848603121561422857600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561424d57600080fd5b61425986828701614201565b9150509250925092565b80356001600160a01b03811681146141df57600080fd5b60008083601f84011261428c57600080fd5b50813567ffffffffffffffff8111156142a457600080fd5b6020830191508360208260051b850101111561229557600080fd5b600080600080600080608087890312156142d857600080fd5b6142e187614263565b95506142ef60208801614263565b9450604087013567ffffffffffffffff8082111561430c57600080fd5b6143188a838b0161427a565b9096509450606089013591508082111561433157600080fd5b5061433e89828a0161427a565b979a9699509497509295939492505050565b6000806000806080858703121561436657600080fd5b8435935061437660208601614263565b925061438460408601614263565b9396929550929360600135925050565b600080600080608085870312156143aa57600080fd5b5050823594602084013594506040840135936060013592509050565b600080600080608085870312156143dc57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561440857600080fd5b61441487828801614201565b91505092959194509250565b60006020828403121561443257600080fd5b813567ffffffffffffffff81111561444957600080fd5b61445584828501614201565b949350505050565b6000806000806080858703121561447357600080fd5b8435935061448360208601614263565b92506040850135915061449860608601614263565b905092959194509250565b600080604083850312156144b657600080fd5b50508035926020909101359150565b6000602082840312156144d757600080fd5b5035919050565b80356001600160801b03811681146141df57600080fd5b6000806040838503121561450857600080fd5b614511836144de565b915061451f602084016144de565b90509250929050565b6000806040838503121561453b57600080fd5b61454483614263565b91506020830135614554816141c6565b809150509250929050565b60008060006060848603121561457457600080fd5b505081359360208301359350604090920135919050565b8035600f81900b81146141df57600080fd5b600061014082840312156145b057600080fd5b6145b86140bf565b6145c1836144de565b81526145cf602084016144de565b60208201526145e06040840161458b565b60408201526145f1606084016144de565b6060820152614602608084016144de565b608082015261461360a084016144de565b60a082015261462460c084016144de565b60c082015261463560e084016144de565b60e08201526101006146488185016141d4565b9082015261012061465a8482016141d4565b908201529392505050565b600080600080600080600060e0888a03121561468057600080fd5b61468988614263565b965061469760208901614263565b955060408801356146a7816141c6565b945060608801359350608088013560ff811681146146c457600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000606084860312156146f657600080fd5b8335925061470660208501614263565b9150604084013590509250925092565b60006020828403121561472857600080fd5b610fe482614263565b60006020828403121561474357600080fd5b610fe4826144de565b600080600080600060a0868803121561476457600080fd5b8535945061477460208701614263565b935061478260408701614263565b92506060860135915061479760808701614263565b90509295509295909350565b6000602082840312156147b557600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b82016147e7576147e76147bc565b5060000390565b81810381811115610bda57610bda6147bc565b80820180821115610bda57610bda6147bc565b8181036000831280158383131683831282161715614834576148346147bc565b5092915050565b808201828112600083128015821682158216171561485b5761485b6147bc565b505092915050565b600060018201614875576148756147bc565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826148a1576148a161487c565b500690565b8082028115828204841417610bda57610bda6147bc565b6000602082840312156148cf57600080fd5b8151610fe4816141c6565b6001600160801b03818116838216019080821115614834576148346147bc565b6001600160801b03828116828216039080821115614834576148346147bc565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610bda57610bda6147bc565b600f82810b9082900b0360016001607f1b0319811260016001607f1b0382131715610bda57610bda6147bc565b6000826149835761498361487c565b600160ff1b82146000198414161561499d5761499d6147bc565b50059056fea264697066735822122077b9245650ed68d10f3b5188132bded68d43fff2dcbe26aca6e1d4482bf472c564736f6c63430008130033",
    "sourceMap": "6662:4295:56:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2519:12:0;2673;2687:23;2714:7;-1:-1:-1;;;;;2714:20:0;2735:5;;2714:27;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2672:69;;;;2755:7;2751:76;;;2785:31;;-1:-1:-1;;;2785:31:0;;;;;;;;;;;2751:76;2836:15;2854:18;2861:10;2854:18;:::i;:::-;2836:36;-1:-1:-1;;;;;;;2886:43:0;;-1:-1:-1;;;2886:43:0;2882:160;;3006:10;3000:17;2995:2;2983:10;2979:19;2972:46;2882:160;3243:17;;-1:-1:-1;;3239:25:0;;3262:1;3217:20;;3210:55;;;3217:20;3344:31;;;;;;;;;;:::i;:::-;6662:4295:56;;;-1:-1:-1;6662:4295:56;;;-1:-1:-1;;;;;6662:4295:56;7607:65:0;;;;;;;;;;-1:-1:-1;7607:65:0;;;;;:::i;:::-;;:::i;:::-;;6895:181;;;;;;;;;;-1:-1:-1;6895:181:0;;;;;:::i;:::-;;:::i;:::-;;;;3525:25:149;;;3581:2;3566:18;;3559:34;;;;3498:18;6895:181:0;;;;;;;;9157:167;;;;;;;;;;-1:-1:-1;9157:167:0;;;;;:::i;:::-;;:::i;8078:102::-;;;;;;;;;;-1:-1:-1;8078:102:0;;;;;:::i;:::-;;:::i;1469:32::-;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5647:32:149;;;5629:51;;5617:2;5602:18;1469:32:0;5483:203:149;8415:911:56;;;;;;;;;;-1:-1:-1;8415:911:56;;;;;:::i;:::-;;:::i;:::-;;;;6340:25:149;;;6396:2;6381:18;;6374:34;;;;6424:18;;;6417:34;;;;6482:2;6467:18;;6460:34;6525:3;6510:19;;6503:35;6327:3;6312:19;8415:911:56;6081:463:149;5641:177:0;;;;;;;;;;-1:-1:-1;5641:177:0;;;;;:::i;:::-;;:::i;:::-;;;7261:25:149;;;7249:2;7234:18;5641:177:0;7115::149;882:174:38;;;;;;;;;;;;932:124;882:174;;1120:41;;;;;;;;;;;;;;;7396:136:0;;;;;;;;;;-1:-1:-1;7396:136:0;;;;;:::i;:::-;;:::i;8593:107::-;;;;;;;;;;-1:-1:-1;8593:107:0;;;;;:::i;7399:566:56:-;;;;;;;;;;-1:-1:-1;7399:566:56;;;;;:::i;:::-;;:::i;9756:177::-;;;;;;;;;;-1:-1:-1;9756:177:56;;;;;:::i;:::-;;:::i;10652:184::-;;;;;;;;;;-1:-1:-1;10652:184:56;;;;;:::i;:::-;-1:-1:-1;;;;;10789:40:56;;;-1:-1:-1;;;10789:40:56;10737:42;;10789:40;10737:12;10789:40;10652:184;7893:78:0;;;;;;;;;;-1:-1:-1;7893:78:0;;;;;:::i;:::-;;:::i;7971:438:56:-;;;;;;;;;;-1:-1:-1;7971:438:56;;;;;:::i;:::-;;:::i;5921:168:0:-;;;;;;:::i;:::-;;:::i;10258:116:56:-;;;;;;;;;;-1:-1:-1;10258:116:56;;;;;:::i;:::-;;:::i;7025:138::-;;;;;;;;;;-1:-1:-1;7025:138:56;;;;;:::i;:::-;7128:28;;;;;;-1:-1:-1;;;;;7128:28:56;;;-1:-1:-1;;;7128:28:56;;;;;;:12;:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;7128:28:56;;;;;;-1:-1:-1;;7128:28:56;;;;;;;;;;;;;;;;;7025:138;10513:266:0;;;;;;;;;;-1:-1:-1;10513:266:0;;;;;:::i;:::-;;:::i;10134:118:56:-;;;;;;;;;;;;;:::i;6157:187:0:-;;;;;;:::i;9375:375:56:-;;;;;;;;;;-1:-1:-1;9375:375:56;;;;;:::i;:::-;;:::i;:::-;;;;12358:25:149;;;12414:2;12399:18;;12392:34;;;;12442:18;;;12435:34;12500:2;12485:18;;12478:34;12345:3;12330:19;9375:375:56;12127:391:149;8990:92:0;;;;;;;;;;-1:-1:-1;8990:92:0;;;;;:::i;:::-;;:::i;7169:98:56:-;;;;;;;;;;-1:-1:-1;7169:98:56;;;;;:::i;:::-;7234:11;:26;7169:98;7734:76:0;;;;;;;;;;-1:-1:-1;7734:76:0;;;;;:::i;10380:167:56:-;;;;;;;;;;-1:-1:-1;10380:167:56;;;;;:::i;:::-;;:::i;10842:113::-;;;;;;;;;;-1:-1:-1;10842:113:56;;;;;:::i;:::-;10908:25;:40;;-1:-1:-1;;;;;10908:40:56;;;-1:-1:-1;;;10908:40:56;;;;;;;;;10842:113;9939:189;;;;;;;;;;-1:-1:-1;9939:189:56;;;;;:::i;:::-;;:::i;4036:314:0:-;;;;;;:::i;:::-;;:::i;10553:93:56:-;;;;;;;;;;-1:-1:-1;10628:11:56;;10553:93;;5244:319:0;;;;;;:::i;:::-;;:::i;8309:163::-;;;;;;;;;;-1:-1:-1;8309:163:0;;;;;:::i;:::-;;:::i;1629:32::-;;;;;;;;;;;;;;;7163:73;;;;;;;;;;-1:-1:-1;7163:73:0;;;;;:::i;:::-;;:::i;7607:65::-;7647:18;7657:7;7647:9;:18::i;:::-;;7607:65;:::o;6895:181::-;7023:7;7032;7051:18;7061:7;7051:9;:18::i;:::-;;6895:181;;;;;;:::o;9157:167::-;9299:18;9309:7;9299:9;:18::i;:::-;;9157:167;;;;;;:::o;8078:102::-;8155:18;8165:7;8155:9;:18::i;:::-;;8078:102;;;;:::o;8415:911:56:-;8640:21;8675:20;8709:26;8749:25;8788:26;9000:144;9038:10;9062:24;9100:10;9124;9000:24;:144::i;:::-;8839:305;;;;-1:-1:-1;8839:305:56;;-1:-1:-1;8839:305:56;-1:-1:-1;8839:305:56;;-1:-1:-1;8415:911:56;-1:-1:-1;;;;;8415:911:56:o;5641:177:0:-;5774:7;5793:18;5803:7;5793:9;:18::i;:::-;;5641:177;;;;;;:::o;7396:136::-;7488:7;7507:18;7517:7;7507:9;:18::i;:::-;;7396:136;;;:::o;7399:566:56:-;7537:35;;-1:-1:-1;;;7537:35:56;;7566:4;7537:35;;;5629:51:149;7463:15:56;;7482:135;;-1:-1:-1;;;;;7537:10:56;:20;;;;5602:18:149;;7537:35:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;7586:3;7603:4;7482:41;:135::i;:::-;7460:157;;;7643:1;7632:8;:12;7628:331;;;7660:119;;-1:-1:-1;;;7660:119:56;;7725:4;7660:119;;;14072:51:149;14139:18;;;14132:34;;;7682:10:56;-1:-1:-1;;;;;7660:39:56;;;;14045:18:149;;7660:119:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7628:331;7811:1;7800:8;:12;7796:163;;;-1:-1:-1;;;;;7850:10:56;7828:39;;7893:4;7924:9;7925:8;7924:9;:::i;:::-;7828:120;;-1:-1:-1;;;;;;7828:120:56;;;;;;;-1:-1:-1;;;;;14090:32:149;;;7828:120:56;;;14072:51:149;14139:18;;;14132:34;14045:18;;7828:120:56;;;;;;;;;;;;;;;;;;;7796:163;7450:515;7399:566;;:::o;9756:177::-;9848:21;9888:38;9912:13;9888:23;:38::i;:::-;9881:45;9756:177;-1:-1:-1;;9756:177:56:o;7893:78:0:-;7946:18;7956:7;7946:9;:18::i;7971:438:56:-;8141:21;8164:26;8244:106;8283:9;8306:10;8330;8244:25;:106::i;:::-;8206:144;;-1:-1:-1;8206:144:56;-1:-1:-1;7971:438:56;;;;;;;:::o;5921:168:0:-;6045:7;6064:18;6074:7;6064:9;:18::i;:::-;;5921:168;;;;;:::o;10258:116:56:-;10330:37;10347:19;10330:16;:37::i;:::-;10258:116;:::o;10513:266:0:-;10713:59;10727:5;10734:7;10743:9;10754:8;10764:1;10767;10770;10713:13;:59::i;10134:118:56:-;10185:22;10226:19;:17;:19::i;:::-;10219:26;;10134:118;:::o;9375:375::-;9527:26;9567:25;9606:20;9640:26;9698:45;9717:12;9731:11;9698:18;:45::i;:::-;9691:52;;;;-1:-1:-1;9691:52:56;-1:-1:-1;9691:52:56;;-1:-1:-1;9375:375:56;-1:-1:-1;;;9375:375:56:o;8990:92:0:-;9057:18;9067:7;9057:9;:18::i;:::-;;8990:92;;;:::o;10380:167:56:-;10474:7;10500:40;10528:11;10500:27;:40::i;9939:189::-;10037:21;10077:44;10107:13;10077:29;:44::i;4036:314:0:-;4222:20;4244;4283:60;4293:11;4306:10;4318:14;4334:8;4283:9;:60::i;:::-;4276:67;;;;4036:314;;;;;;;:::o;5244:319::-;5432:20;5454:21;5494:62;5505:11;5518;5531:14;5547:8;5494:10;:62::i;8309:163::-;8447:18;8457:7;8447:9;:18::i;:::-;;8309:163;;;;;:::o;7163:73::-;7211:18;7221:7;11057:359;11111:12;11136;11150:19;11173:7;-1:-1:-1;;;;;11173:20:0;11194:8;;11173:30;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11135:68;;;;11218:7;11213:117;;11298:6;11292:13;11287:2;11279:6;11275:15;11268:38;11213:117;11392:6;11386:13;11381:2;11373:6;11369:15;11362:38;17620:2583:33;17844:21;;;;;18810:141;18913:24;18939:11;18810:78;18880:7;18810:48;18841:16;18847:10;150:4:42;18841:16:33;:::i;:::-;18810:9;;:30;:48::i;:::-;:69;;:78::i;:::-;:102;:141;:102;:141::i;:::-;18794:157;-1:-1:-1;19163:37:33;18794:157;19185:14;19163:21;:37::i;:::-;19142:58;-1:-1:-1;19641:12:33;19656:97;19688:30;19694:24;150:4:42;19688:30:33;:::i;:::-;19656:7;;19732:11;19656:18;:97::i;:::-;19641:112;-1:-1:-1;19778:22:33;19641:112;19791:8;19778:12;:22::i;:::-;19763:37;-1:-1:-1;20007:36:33;19763:37;20028:14;20007:20;:36::i;:::-;19987:56;-1:-1:-1;20158:38:33;19987:56;20158:18;:38;:::i;:::-;20137:59;;18106:2097;17620:2583;;;;;;;;;:::o;4931:1028:147:-;5067:19;;;5187:23;:5;5201:8;5187:13;:23::i;:::-;5162:48;;5220:10;5233:56;5274:14;5248:1;5241:4;:8;:23;;5260:4;5241:23;;;5252:5;5253:4;5252:5;:::i;5233:56::-;5220:69;;5311:1;5304:4;:8;5300:621;;;5342:89;5386:30;5412:2;5386:18;:30::i;:::-;5342:10;;:18;:89::i;:::-;5328:103;-1:-1:-1;5463:24:147;5477:10;5328:103;5463:24;:::i;:::-;5445:43;;5502:30;;;;5300:621;5560:1;5553:4;:8;5549:372;;;5712:89;5756:30;5782:2;5756:18;:30::i;:::-;5712:10;;:18;:89::i;:::-;5698:103;-1:-1:-1;5826:40:147;5855:10;5698:103;5826:40;:::i;5549:372::-;-1:-1:-1;5938:10:147;;5950:1;;-1:-1:-1;4931:1028:147;-1:-1:-1;;;;4931:1028:147:o;5982:368:33:-;6075:21;6108:24;6135:19;:17;:19::i;:::-;6108:46;;6196:16;6180:13;:32;:95;;6274:1;6180:95;;;6227:32;6243:16;6227:13;:32;:::i;:::-;6164:111;-1:-1:-1;6301:42:33;6164:111;6325:17;6301:23;:42::i;:::-;6285:58;5982:368;-1:-1:-1;;;5982:368:33:o;15262:1564::-;15432:21;;16455:127;16574:7;16455:97;16540:11;16455:97;16508:9;150:4:42;16456:23:33;150:4:42;16468:10:33;16456:11;:23::i;:::-;:29;;;;:::i;16455:127::-;16439:143;-1:-1:-1;16782:37:33;16439:143;16804:14;16782:21;:37::i;:::-;16761:58;;15262:1564;;;;;;:::o;16102:3325:35:-;16285:19;16308:1;16285:24;16281:61;;16102:3325;:::o;16281:61::-;16573:12;:26;-1:-1:-1;;;;;16573:26:35;16629:21;16613:37;;16609:109;;;16673:34;;-1:-1:-1;;;16673:34:35;;;;;;;;;;;16609:109;16887:27;16917:55;16953:19;16924:13;16917:55;:::i;:::-;16887:85;;17016:21;16986:20;:52;16982:124;;;17061:34;;-1:-1:-1;;;17061:34:35;;;;;;;;;;;16982:124;17144:41;17152:20;17144:39;:41::i;:::-;17115:12;:70;;-1:-1:-1;;;;;;17115:70:35;-1:-1:-1;;;;;17115:70:35;;;;;;;;;;17761:28;;-1:-1:-1;;17761:28:35;;17803:20;;;17799:488;;17888:139;17896:20;17958:15;17996:13;17888:40;:139::i;:::-;17839:202;;17799:488;;;18122:140;18192:16;18193:15;18192:16;:::i;:::-;18130:20;;18231:13;18122:40;:140::i;:::-;18097:179;;;:::i;:::-;18072:204;;17799:488;18327:33;:22;:31;:33::i;:::-;18296:28;:64;;-1:-1:-1;;;;;;18296:64:35;-1:-1:-1;;;;;18296:64:35;;;;;;-1:-1:-1;19202:25:35;19000:420;;:395;;-1:-1:-1;;;19202:25:35;;;19245:136;19313:13;19348:15;19245:46;:136::i;:::-;19000:160;19085:20;19124:22;19000:59;:160::i;:395::-;:418;:420::i;:::-;18972:12;:448;;-1:-1:-1;;;;;18972:448:35;;;-1:-1:-1;;;18972:448:35;;;;;;;;;-1:-1:-1;;;;;16102:3325:35:o;3132:1422:38:-;3409:8;3391:15;:26;3387:93;;;3440:29;;-1:-1:-1;;;3440:29:38;;;;;;;;;;;3387:93;-1:-1:-1;;;;;3541:19:38;;3537:92;;3583:35;;-1:-1:-1;;;3583:35:38;;;;;;;;;;;3537:92;-1:-1:-1;;;;;4058:14:38;;;3711:18;4058:14;;;:7;:14;;;;;;;;;3882:246;;932:124;3882:246;;;15420:25:149;15499:18;;;15492:43;;;;15571:15;;;15551:18;;;15544:43;15630:14;;15623:22;15603:18;;;15596:50;15662:19;;;15655:35;;;;15706:19;;;;15699:35;;;3882:246:38;;;;;;;;;;15392:19:149;;;3882:246:38;;;3851:295;;;;;;;;-1:-1:-1;;;3755:405:38;;;16003:27:149;3817:16:38;16046:11:149;;;16039:27;16082:12;;;16075:28;16119:12;;3755:405:38;;;-1:-1:-1;;3755:405:38;;;;;;;;;3732:438;;3755:405;3732:438;;;;4180:14;4197:30;;;;;;;;;16369:25:149;;;16442:4;16430:17;;16410:18;;;16403:45;;;;16464:18;;;16457:34;;;16507:18;;;16500:34;;;3732:438:38;;-1:-1:-1;4180:14:38;4197:30;;16341:19:149;;4197:30:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4180:47;;4251:5;-1:-1:-1;;;;;4241:15:38;:6;-1:-1:-1;;;;;4241:15:38;;4237:58;;4265:30;;-1:-1:-1;;;4265:30:38;;;;;;;;;;;4237:58;-1:-1:-1;;;;;4350:14:38;;;;;;:7;:14;;;;;4348:16;;4350:14;;;4348:16;;;:::i;:::-;;;;-1:-1:-1;;;;;;4401:24:38;;;;;;;:17;:24;;;;;;;;:33;;;;;;;;;;;;;:45;;-1:-1:-1;;4401:45:38;;;;;;;;;;4506:41;;16825::149;;;4506::38;;16798:18:149;4506:41:38;;;;;;;3323:1231;;3132:1422;;;;;;;:::o;7049:223:33:-;7125:24;7227:37;7245:19;7227:15;:37;:::i;:::-;7196:69;;:15;:69;:::i;14813:3623:36:-;14966:26;15006:25;15045:20;15079:26;15301:241;15347:25;:23;:25::i;:::-;15386:12;:25;-1:-1:-1;;;15386:25:36;;-1:-1:-1;;;;;15386:25:36;15425:12;15463;15489:11;15514:18;15301:32;:241::i;:::-;15281:261;;15675:17;15695:179;15742:25;:23;:25::i;:::-;15781:12;:25;-1:-1:-1;;;15781:25:36;;-1:-1:-1;;;;;15781:25:36;15820:18;15852:12;15695:33;:179::i;:::-;15675:199;;15901:240;15938:12;15968:17;16003:124;16069:9;16100;16003:44;:124::i;:::-;15901:19;:240::i;:::-;15884:330;;;16173:30;;-1:-1:-1;;;16173:30:36;;;;;;;;;;;15884:330;16390:16;16429:26;16477:63;16503:12;16517:9;16528:11;16477:25;:63::i;:::-;16376:164;;-1:-1:-1;16376:164:36;-1:-1:-1;16703:28:36;16376:164;16703:17;:28;:::i;:::-;16688:43;-1:-1:-1;17405:33:36;17420:18;16688:43;17405:33;:::i;:::-;17385:53;-1:-1:-1;17901:87:36;:18;17944:9;17967:11;17901:29;:87::i;:::-;17880:108;-1:-1:-1;18247:33:36;17880:108;18247:12;:33;:::i;:::-;18226:54;;18291:138;;;14813:3623;;;;;;;:::o;14245:490:33:-;14401:25;;14340:18;;;;14393:77;;-1:-1:-1;;;14401:25:33;;-1:-1:-1;;;;;14401:25:33;14449:11;14393:42;:77::i;:::-;14370:100;-1:-1:-1;14513:36:33;14528:21;14370:100;14513:36;:::i;:::-;14484:12;:26;-1:-1:-1;;;;;14484:26:33;:65;14480:222;;;14594:12;:26;14670:21;;14594:57;;14639:12;;-1:-1:-1;;;;;14594:26:33;:57;:::i;:::-;:97;;;;:::i;6550:386::-;6649:21;6682:24;150:4:42;6709:19:33;:17;:19::i;:::-;:25;;;;:::i;:::-;6682:52;;6776:16;6760:13;:32;:95;;6854:1;6760:95;;;6807:32;6823:16;6807:13;:32;:::i;:::-;6744:111;-1:-1:-1;6881:48:33;6905:23;150:4:42;6905:17:33;:23;:::i;:::-;6882:13;;6881:23;:48::i;1523:3224:36:-;1755:20;1777;512:6:87;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:87;;17501:2:149;504:34:87;;;17483:21:149;17540:2;17520:18;;;17513:30;-1:-1:-1;;;17559:18:149;;;17552:40;17609:18;;504:34:87;;;;;;;;;558:1;549:6;:10;5256:21:33;;::::1;::::0;::::1;;;5252:54;;;5286:20;;-1:-1:-1::0;;;5286:20:33::1;;;;;;;;;;;5252:54;1863:20:36::2;:18;:20::i;:::-;1939:23;1964:18:::0;1986:61:::2;2008:7;2029:8;1986;:61::i;:::-;1938:109:::0;;-1:-1:-1;1938:109:36;-1:-1:-1;2410:21:36::2;2434:35;1938:109:::0;;2434:23:::2;:35::i;:::-;2410:59;;2499:25;2483:13;:41;2479:117;;;2547:38;;-1:-1:-1::0;;;2547:38:36::2;;;;;;;;;;;2479:117;2622:14;2609:10;:27;2605:96;;;2659:31;;-1:-1:-1::0;;;2659:31:36::2;;;;;;;;;;;2605:96;2744:24;2771:19;:17;:19::i;:::-;2744:46;;2800;2817:16;2835:10;2800:16;:46::i;:::-;;3108:26;3144:25:::0;3179:26:::2;3349:47;3368:15;3385:10;3349:18;:47::i;:::-;3215:181:::0;;-1:-1:-1;3215:181:36;;-1:-1:-1;3215:181:36;-1:-1:-1;3215:181:36;-1:-1:-1;3447:25:36;;::::2;3443:88;;;3495:25;;-1:-1:-1::0;;;3495:25:36::2;;;;;;;;;;;3443:88;3608:18;3582:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;3697:36:36::2;::::0;-1:-1:-1;3716:17:36::2;3697:16:::0;:36:::2;:::i;:::-;3682:51;;3743:193;3771:18;3803:12;3829:17;3860:10;3884:16;3914:12;3743:14;:193::i;:::-;4020:15;4038:97;4073:26;4113:12;4038:21;:97::i;:::-;4020:115:::0;-1:-1:-1;4145:50:36::2;4020:115:::0;4160:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;4182:12;4145:5;:50::i;:::-;4258:7:::0;4345:8;4418:12;4532:7;4498:20:::2;;::::0;::::2;4345:8:::0;4498:20:::2;:::i;:::-;-1:-1:-1::0;;;;;4476:217:36::2;;4553:12;4579:53;4604:6;4612:10;4624:7;4579:24;:53::i;:::-;4476:217;::::0;;12358:25:149;;;12414:2;12399:18;;12392:34;;;;12442:18;;12435:34;;;12500:2;12485:18;;12478:34;;;12345:3;12330:19;4476:217:36::2;;;;;;;4726:13:::0;-1:-1:-1;;;;;;;;;;;591:1:87;582:6;:10;1523:3224:36;;;;-1:-1:-1;1523:3224:36;-1:-1:-1;;;1523:3224:36:o;1529:3736:39:-;1735:7;1744;512:6:87;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:87;;17501:2:149;504:34:87;;;17483:21:149;17540:2;17520:18;;;17513:30;-1:-1:-1;;;17559:18:149;;;17552:40;17609:18;;504:34:87;17299:334:149;504:34:87;558:1;549:6;:10;5256:21:33;;::::1;::::0;::::1;;;5252:54;;;5286:20;;-1:-1:-1::0;;;5286:20:33::1;;;;;;;;;;;5252:54;1830:20:39::2;:18;:20::i;:::-;1878:25;1864:11;:39;1860:115;;;1926:38;;-1:-1:-1::0;;;1926:38:39::2;;;;;;;;;;;1860:115;2301:18;2322:16;:14;:16::i;:::-;2301:37;;2365:14;2352:10;:27;2348:96;;;2402:31;;-1:-1:-1::0;;;2402:31:39::2;;;;;;;;;;;2348:96;2453:24;2480:19;:17;:19::i;:::-;2453:46;;2509:22;2534:46;2551:16;2569:10;2534:16;:46::i;:::-;2509:71:::0;-1:-1:-1;2819:20:39::2;2842:36;2861:17;2842:16:::0;:36:::2;:::i;:::-;2819:59;;2888:26;2924:19:::0;2967:26:::2;3125:60;3145:11;3158:10;3170:14;3125:19;:60::i;:::-;3246:22;:44:::0;;3007:178;;-1:-1:-1;3007:178:39;;-1:-1:-1;3007:178:39;-1:-1:-1;3007:178:39;;3246:22;::::2;::::0;:44:::2;::::0;3007:178;;3246:44:::2;:::i;:::-;;;;;;;;2953:348;3923:21;3947:105;3985:11;4010:10;4034:8;3947:24;:105::i;:::-;3923:129;;4080:13;4066:11;:27;4062:90;;;4116:25;;-1:-1:-1::0;;;4116:25:39::2;;;;;;;;;;;4062:90;4161:33;4170:13;4185:8;4161;:33::i;:::-;;;4422:157;4451:11;4476;4501:18;4533:10;4557:12;4422:15;:157::i;:::-;4739:15;4757:98;4792:27;4833:12;4757:21;:98::i;:::-;4739:116:::0;-1:-1:-1;4886:11:39;4938:48:::2;4739:116:::0;4953:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;4975:10;4938:5;:48::i;:::-;5095:7:::0;5061:20:::2;;::::0;::::2;:8:::0;:20:::2;:::i;:::-;5038:173;::::0;;12358:25:149;;;12414:2;12399:18;;12392:34;;;12442:18;;;12435:34;;;12500:2;12485:18;;12478:34;;;-1:-1:-1;;;;;5038:173:39;;;::::2;::::0;::::2;::::0;12345:3:149;12330:19;5038:173:39::2;;;;;;;-1:-1:-1::0;;591:1:87;582:6;:10;5230:12:39;;5244:13;;-1:-1:-1;1529:3736:39;;-1:-1:-1;;;;;;;;;;1529:3736:39:o;1771:119:42:-;1833:7;1860:22;1871:1;1874;1877:4;941:556;1057:9;1322:1;-1:-1:-1;;1305:19:42;1302:1;1299:26;1296:1;1292:34;1285:42;1272:11;1268:60;1241:146;;1371:1;1368;1361:12;1241:146;-1:-1:-1;1458:9:42;;1454:27;;941:556::o;2164:165::-;2226:7;2253:22;2264:1;2267:4;2273:1;2253:10;:22::i;5724:3347::-;5770:8;-1:-1:-1;;5947:1:42;:26;5943:40;;-1:-1:-1;5982:1:42;;5724:3347;-1:-1:-1;5724:3347:42:o;5943:40::-;6182:21;6177:1;:26;6173:99;;6228:44;;-1:-1:-1;;;6228:44:42;;;;;;;;;;;6173:99;6545:7;6539:2;6534:7;;;6533:19;;-1:-1:-1;6881:8:42;6965:2;6905:29;6894:7;;;6893:41;-1:-1:-1;;;6893:51:42;6892:75;;6993:29;6989:33;;6985:37;;;-1:-1:-1;;7664:35:42;;7719:5;;7299:2;7718:13;;;7735:32;7717:50;7787:5;;7786:13;;-1:-1:-1;;7785:51:42;7856:5;;7855:13;;7872:34;7854:52;7926:5;;7925:13;;-1:-1:-1;;7924:53:42;7997:5;;7996:13;;8013:35;7995:53;7305:32;7238:31;7234:35;;7289:5;;7288:13;;7287:50;;;7362:5;;;-1:-1:-1;;7362:40:42;7422:5;7421:13;;;7438:35;7420:53;7491:5;;;-1:-1:-1;;;7491:50:42;8413:10;8950:49;8917:82;9032:3;:7;;;;8916:124;;;;;;-1:-1:-1;;5724:3347:42:o;640:190:44:-;693:9;-1:-1:-1;;;720:1:44;:12;714:86;;756:33;;-1:-1:-1;;;756:33:44;;;;;;;;;;;714:86;-1:-1:-1;821:1:44;640:190::o;994:219::-;1045:8;-1:-1:-1;;;;;;1071:21:44;;;;;:46;;-1:-1:-1;;;;;;1096:21:44;;;1071:46;1065:119;;1141:32;;-1:-1:-1;;;1141:32:44;;;;;;;;;;;28808:340:43;28943:7;;28994:53;29031:16;29001:14;28994:53;:::i;:::-;28962:85;;29091:1;29065:22;:27;;29057:36;;;;;7453:253:33;7613:12;:26;7657:28;;7511:7;;7549:150;;-1:-1:-1;;;;;7613:26:33;;;;7657:28;;7549:46;:150::i;6975:872:43:-;7228:7;7365:475;7432:23;7473:13;7504:12;7743:18;7749:12;150:4:42;7743:18:43;:::i;:::-;7779:11;7808:18;7365:49;:475::i;:::-;7346:494;6975:872;-1:-1:-1;;;;;;;6975:872:43:o;1246:449::-;1441:17;1575:113;1675:12;1575:82;:18;1618:23;1643:13;1575:42;:82::i;:::-;:99;;:113::i;:::-;1563:125;1246:449;-1:-1:-1;;;;;1246:449:43:o;5221:277::-;5352:7;5390:101;5425:52;150:4:42;5441:29:43;150:4:42;5451:18:43;5441:9;:29::i;:::-;:35;;;;:::i;:::-;5425:9;;:15;:52::i;:::-;5419:58;;150:4:42;5419:58:43;:::i;:::-;150:4:42;;5390:11:43;:101::i;9370:678:33:-;9526:4;9751:23;9777:216;9852:16;9824:25;:23;:25::i;:::-;:44;;;;:::i;:::-;9882:12;:25;:43;;9910:15;;-1:-1:-1;;;9882:25:33;;-1:-1:-1;;;;;9882:25:33;:43;:::i;:::-;9939:18;9971:12;9777:33;:216::i;:::-;-1:-1:-1;;;;9370:678:33;-1:-1:-1;;;;9370:678:33:o;6484:174:56:-;6559:10;-1:-1:-1;;;;;6551:26:56;87:42:145;6551:26:56;;;;:43;;;6593:1;6581:9;:13;6551:43;6547:105;;;6617:24;;-1:-1:-1;;;6617:24:56;;;;;;;;;;;6547:105;6484:174::o;2585:1667::-;2706:7;;;2826:14;;;;;;;;:::i;:::-;:82;;2876:32;2891:16;:14;:16::i;:::-;2876:6;;:14;:32::i;:::-;2826:82;;;2855:6;2826:82;2805:103;-1:-1:-1;3049:14:56;3088:4;-1:-1:-1;;3114:10:56;-1:-1:-1;;;;;3106:26:56;;3102:604;;3157:21;3148:30;;3208:10;3196:9;:22;3192:96;;;3245:28;;-1:-1:-1;;;3245:28:56;;;;;;;;;;;3192:96;3317:10;3305:9;:22;3301:172;;;3369:10;3414:22;3426:10;3414:9;:22;:::i;:::-;3361:97;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3347:111:56;;-1:-1:-1;;3301:172:56;3102:604;;;3512:35;;-1:-1:-1;;;3512:35:56;;3541:4;3512:35;;;5629:51:149;3512:10:56;-1:-1:-1;;;;;3512:20:56;;;;5602:18:149;;3512:35:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3571:124;;-1:-1:-1;;;3571:124:56;;3612:10;3571:124;;;18088:34:149;3648:4:56;18138:18:149;;;18131:43;18190:18;;;18183:34;;;3503:44:56;;-1:-1:-1;3571:10:56;-1:-1:-1;;;;;3571:23:56;;;;18023:18:149;;3571:124:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3561:134;;3102:604;3720:7;3715:74;;3750:28;;-1:-1:-1;;;3750:28:56;;;;;;;;;;;3715:74;3924:11;;3939:1;3924:16;3920:326;;3970:34;:6;3985:18;3970:14;:34::i;:::-;3956:11;:48;;;;-1:-1:-1;4039:18:56;;-1:-1:-1;4018:40:56;;-1:-1:-1;;;4018:40:56;3920:326;4109:11;;4089:17;;4109:38;;4132:6;4140;4109:22;:38::i;:::-;4089:58;;4176:9;4161:11;;:24;;;;;;;:::i;:::-;;;;-1:-1:-1;4207:9:56;;-1:-1:-1;4218:16:56;:14;:16::i;:::-;4199:36;;;;;;;;2585:1667;;;;;;:::o;2936:4513:34:-;3057:7;3189:51;;;:12;:51;;;;;3254:22;;-1:-1:-1;;;;;3254:22:34;:27;;;:64;;;3303:15;3285;:33;3254:64;3250:124;;;3341:22;-1:-1:-1;;;;;3341:22:34;;-1:-1:-1;3334:29:34;;3250:124;3455:23;:11;:21;:23::i;:::-;3430:48;;-1:-1:-1;;;;;;3430:48:34;-1:-1:-1;;;;;3430:48:34;;;;;;;-1:-1:-1;3967:12:34;-1:-1:-1;3993:35:34;4011:17;3993:15;:35;:::i;:::-;3967:71;;;;;;;;;;;-1:-1:-1;3967:71:34;;;:82;-1:-1:-1;;;;;3967:82:34;;-1:-1:-1;4082:101:34;4117:27;4158:15;4082:21;:101::i;:::-;4193:27;4223:26;;;:12;:26;;;;;;4059:124;;-1:-1:-1;4293:23:34;;4289:667;;4350:21;4389;4427:180;4474:19;4515:11;4548:14;4584:5;4427:25;:180::i;:::-;4332:275;;;;4647:13;4621:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;4674:235:34;;-1:-1:-1;4708:19:34;4745:1;4764:13;;4880:15;4674:16;:235::i;:::-;4941:4;4923:22;;4318:638;;4289:667;5074:19;5096:100;5131:26;5171:15;5096:21;:100::i;:::-;5206:26;5235:25;;;:12;:25;;;;;;5074:122;;-1:-1:-1;5274:22:34;;5270:745;;5330:21;5369;5407:178;5454:18;5494:11;5527:14;5563:4;5407:25;:178::i;:::-;5312:273;;;;5625:13;5599:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5677:15:34;;-1:-1:-1;5736:232:34;5769:18;5652:22;5824:13;;5677:15;5736;:232::i;:::-;6000:4;5982:22;;5298:717;;;5270:745;6097:15;6093:535;;;6128:20;6151:35;6169:17;6151:15;:35;:::i;:::-;6200:31;6258:26;;;:12;:26;;;;;:35;;-1:-1:-1;;;;;6321:39:34;;;;;;6128:58;;-1:-1:-1;;;;6258:35:34;;;;;;;;;6374:128;;6258:35;;6453;;;;;6374:19;:128::i;:::-;6583:34;6605:11;6583:21;:34::i;:::-;6114:514;;6093:535;6738:20;6775:1;6761:11;:15;:174;;6934:1;6761:174;;;6791:128;6907:11;6791:90;6845:35;6868:11;6845:22;:35::i;:::-;6791:53;:90::i;:128::-;7081:13;:29;7018:12;:48;;;;6945:21;6969:34;;;;;6738:197;;-1:-1:-1;6945:21:34;-1:-1:-1;;;;;7081:29:34;;;;6969:97;;7018:48;6969:97;:::i;:::-;:141;;;;:::i;:::-;6945:165;-1:-1:-1;7120:20:34;7143:18;;:84;;7192:35;:12;7213:13;7192:20;:35::i;:::-;7143:84;;;7176:1;7143:84;7242:171;;;12358:25:149;;;12414:2;12399:18;;12392:34;;;12442:18;;;12435:34;;;12500:2;12485:18;;12478:34;;;7120:107:34;;-1:-1:-1;7272:15:34;;7242:171;;12345:3:149;12330:19;7242:171:34;;;;;;;-1:-1:-1;7431:11:34;;2936:4513;-1:-1:-1;;;;;;;;;;;2936:4513:34:o;9440:2098:36:-;9714:29;;-1:-1:-1;;;;;9714:29:36;9855:309;:284;9714:29;10019:20;:13;10035:4;10019:20;:::i;:::-;9876:36;;-1:-1:-1;;;;;9876:36:36;;9855:284;10090:13;10121:4;9855:102;:284::i;:309::-;9816:36;:348;;-1:-1:-1;;;;;;9816:348:36;-1:-1:-1;;;;;9816:348:36;;;;;;;;;;10312:31;:19;:29;:31::i;:::-;10282:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;10282:61:36;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10282:61:36;;;;;-1:-1:-1;;;;;10282:61:36;;;;;;10382:30;:18;:28;:30::i;:::-;10353:12;:59;;:25;;:59;;;;-1:-1:-1;;;10353:59:36;;-1:-1:-1;;;;;10353:59:36;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10353:59:36;;;;;-1:-1:-1;;;;;10353:59:36;;;;;;10443:25;:13;:23;:25::i;:::-;10422:46;;;;:::i;:::-;10478:29;:49;;-1:-1:-1;;;;;;10478:49:36;-1:-1:-1;;;;;10478:49:36;;;;;-1:-1:-1;10841:51:36;;;:12;:51;;;;;10943:19;;10478:49;;-1:-1:-1;10841:51:36;-1:-1:-1;;;10943:19:36;;;;;10997:98;11042:40;:19;11070:11;11042:27;:40::i;:::-;10998:29;11014:13;10998:1;:29;:::i;:::-;:84;;;;:::i;10997:98::-;11105:44;;10973:122;;-1:-1:-1;10973:122:36;;11105:10;;:19;;:44;;10973:122;;-1:-1:-1;;;11105:44:36;;;;;:::i;:::-;;;-1:-1:-1;;;;;11105:44:36;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;11205:19:36;;11159:66;;11105:44;11159:66;;;;-1:-1:-1;;;11205:19:36;;;;11159;:66::i;:::-;11324:23;11335:11;11324:10;:23::i;:::-;11319:106;;11370:44;;-1:-1:-1;;;11370:44:36;;;;;;;;;;;11319:106;11497:34;11519:11;11497:21;:34::i;:::-;9676:1862;;;;9440:2098;;;;;;:::o;1198:469:41:-;1309:10;-1:-1:-1;;;;;1401:10:41;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:41;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:41;1620:18;;;;1617:34;;1198:469::o;5789:316:37:-;5906:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;5906:23:37;;;;;;;;;:33;;5933:6;;5906:19;:33;;5933:6;;5906:33;:::i;:::-;;;;-1:-1:-1;;5949:21:37;;;;:12;:21;;;;;:31;;5974:6;;5949:21;:31;;5974:6;;5949:31;:::i;:::-;;;;-1:-1:-1;;6039:59:37;;;3525:25:149;;;3581:2;3566:18;;3559:34;;;-1:-1:-1;;;;;6039:59:37;;;6074:1;;6054:10;;6039:59;;3498:18:149;6039:59:37;;;;;;;5789:316;;;:::o;20504:315:33:-;20668:7;20691:15;;;;;;;;:::i;:::-;20687:126;;;-1:-1:-1;20729:7:33;20722:14;;20687:126;20774:28;:7;20790:11;20774:15;:28::i;:::-;20767:35;;;;5744:555:56;5834:18;;-1:-1:-1;;5964:10:56;-1:-1:-1;;;;;5956:26:56;;5952:162;;-1:-1:-1;6007:21:56;5952:162;;;6068:35;;-1:-1:-1;;;6068:35:56;;6097:4;6068:35;;;5629:51:149;6068:10:56;-1:-1:-1;;;;;6068:20:56;;;;5602:18:149;;6068:35:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6059:44;;5952:162;6242:11;;6257:1;6242:16;:50;;6291:1;6242:50;;;6276:11;;6261:27;;:6;;:14;:27::i;:::-;6229:63;;5858:441;5744:555;:::o;16208:3731:39:-;16394:19;16427:26;16467;16755:229;16802:25;:23;:25::i;:::-;16841:12;:25;-1:-1:-1;;;16841:25:39;;-1:-1:-1;;;;;16841:25:39;16880:11;16905:12;16931:11;16956:18;16755:33;:229::i;:::-;16734:250;-1:-1:-1;17245:11:39;17203:39;16734:250;17230:11;17203:26;:39::i;:::-;:53;17199:121;;;17279:30;;-1:-1:-1;;;17279:30:39;;;;;;;;;;;17199:121;17487:16;17513:26;17549:17;17569:179;17616:25;:23;:25::i;17569:179::-;17549:199;;17982:174;18020:11;150:4:42;18112:9:39;18135:11;17982:24;:174::i;:::-;-1:-1:-1;17758:398:39;;-1:-1:-1;17758:398:39;-1:-1:-1;18829:29:39;;-1:-1:-1;17758:398:39;;-1:-1:-1;17758:398:39;18829:29;:::i;:::-;18807:51;;;;:::i;:::-;;-1:-1:-1;19349:512:39;19849:11;19349:478;19417:11;19636:39;19657:18;18807:51;19636:39;:::i;:::-;19693:15;19726:32;:11;19693:15;19726;:32::i;:::-;19776:11;19805:8;19349:50;:478::i;:512::-;19335:526;-1:-1:-1;19913:18:39;;-1:-1:-1;;;16208:3731:39;;;;;;;:::o;21103:315:33:-;21267:7;21290:15;;;;;;;;:::i;:::-;21286:126;;;-1:-1:-1;21328:7:33;21321:14;;21286:126;21373:28;:7;21389:11;21373:15;:28::i;10216:3800:39:-;10646:30;;10525:312;;:287;;-1:-1:-1;;;10646:30:39;;-1:-1:-1;;;;;10646:30:39;10694:20;:13;10710:4;10694:20;:::i;:::-;10546:37;;-1:-1:-1;;;10546:37:39;;-1:-1:-1;;;;;10546:37:39;;;10765:11;10794:4;10525:103;:287::i;:312::-;10485:37;:352;;-1:-1:-1;;;;;10485:352:39;;;-1:-1:-1;;;10485:352:39;;;;;;;;;-1:-1:-1;11197:31:39;:19;:29;:31::i;:::-;11156:12;:26;:72;;;-1:-1:-1;;;;;11156:26:39;:72;:::i;:::-;11238:12;:43;;-1:-1:-1;;;;;;11238:43:39;-1:-1:-1;;;;;11238:43:39;;;;;;-1:-1:-1;11320:23:39;:11;:21;:23::i;:::-;11291:12;:52;;:25;;:52;;;;-1:-1:-1;;;11291:52:39;;-1:-1:-1;;;;;11291:52:39;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;11291:52:39;;;;;-1:-1:-1;;;;;11291:52:39;;;;;;11387:23;:11;:21;:23::i;:::-;11353:30;:57;;:30;;:57;;;;-1:-1:-1;;;11353:57:39;;-1:-1:-1;;;;;11353:57:39;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;11353:57:39;;;;;;;;;;;;;;;12012:28;;-1:-1:-1;11969:26:39;12012:28;;;;;11969:26;;11954:86;11937:180;;-1:-1:-1;11937:180:39;;12072:34;;-1:-1:-1;;;12072:34:39;;;;;;;;;;;11937:180;12204:25;12232:19;:17;:19::i;:::-;12261:31;12315;;;:12;:31;;;;;:40;12204:47;;-1:-1:-1;;;;12315:40:39;;;;13050:34;13065:19;13050:12;:34;:::i;:::-;13034:51;;:12;:51;:::i;:::-;13019:66;-1:-1:-1;13095:21:39;13119:26;13134:11;13019:66;13119:26;:::i;:::-;13095:50;;13219:25;:13;:23;:25::i;:::-;13155:31;;;;:12;:31;;;;;:99;;:40;;:99;;;;-1:-1:-1;;;13155:99:39;;;;;:::i;:::-;;;-1:-1:-1;;;;;13155:99:39;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;13335:31:39;;;:12;:31;;;;;:40;13264:121;;13155:99;13264:121;;;;-1:-1:-1;;;13335:40:39;;;;13264:19;:121::i;:::-;13802:23;13813:11;13802:10;:23::i;:::-;13797:106;;13848:44;;-1:-1:-1;;;13848:44:39;;;;;;;;;;;13797:106;13975:34;13997:11;13975:21;:34::i;:::-;10412:3604;;;;10216:3800;;;;;:::o;2079:1169:45:-;2268:7;2424:9;2436:19;2440:1;2443;2446;2449;2452:2;2436:3;:19::i;:::-;2424:31;-1:-1:-1;2589:25:45;2612:1;2589:18;2600:6;2604:2;2600:1;:6;:::i;2589:25::-;2585:29;-1:-1:-1;2674:19:45;:1;2585:29;2690:2;2674:12;:19::i;:::-;2670:23;-1:-1:-1;2853:10:45;2866:5;2670:23;2866:1;:5;:::i;:::-;2853:18;;150:4:42;2885:2:45;:9;2881:261;;2983:20;2990:12;150:4:42;3000:1:45;2990:9;:12::i;:::-;2983:2;;:6;:20::i;:::-;2978:25;;2881:261;;;3109:22;3116:14;150:4:42;3128:1:45;3116:11;:14::i;3109:22::-;3104:27;;2881:261;3235:6;3239:2;3235:1;:6;:::i;:::-;3228:13;2079:1169;-1:-1:-1;;;;;;;;;2079:1169:45:o;4628:840:42:-;4686:7;4752:1;4757;4752:6;4748:47;;-1:-1:-1;150:4:42;4774:10;;4748:47;4848:1;4853;4848:6;4844:45;;-1:-1:-1;4877:1:42;4870:8;;4844:45;5052:1;5027:15;5230:14;5241:1;5230:3;:14::i;:::-;5217:27;-1:-1:-1;5322:18:42;;;5359:19;150:4;5322:18;5359:19;:::i;:::-;;;5451:9;5455:4;5451:3;:9::i;:::-;5436:25;4628:840;-1:-1:-1;;;;;;4628:840:42:o;4098:115::-;4158:7;4185:20;4194:1;4197:4;4203:1;4185:8;:20::i;3707:115::-;3767:7;3794:20;3803:1;3806;3809:4;3794:8;:20::i;8075:2095:34:-;8252:21;;8535:32;:11;8555;8535:19;:32::i;:::-;8519:48;-1:-1:-1;8577:15:34;8595:31;8519:48;8617:8;8595:21;:31::i;:::-;8577:49;-1:-1:-1;8652:31:34;8577:49;8668:14;8652:15;:31::i;:::-;8636:47;;9110:7;9106:557;;;9150:23;9160:13;9150:7;:23;:::i;:::-;9133:40;;;;:::i;:::-;;;9106:557;;;9629:23;9639:13;9629:7;:23;:::i;:::-;9612:40;;;;:::i;:::-;;;9106:557;9876:15;9862:11;:29;9858:306;;;9923:100;:13;9965:11;9994:15;9923:24;:100::i;:::-;9907:116;-1:-1:-1;10053:100:34;:13;10095:11;10124:15;10053:24;:100::i;:::-;10037:116;;9858:306;8298:1872;8075:2095;;;;;;;:::o;14505:1128:39:-;14807:30;;-1:-1:-1;;;14807:30:39;;-1:-1:-1;;;;;14807:30:39;14887:301;:276;14807:30;15044:20;:13;15060:4;15044:20;:::i;:::-;14908:37;;-1:-1:-1;;;14908:37:39;;-1:-1:-1;;;;;14908:37:39;;;15115:11;15144:5;14887:103;:276::i;:301::-;14847:37;:341;;-1:-1:-1;;;;;14847:341:39;;;-1:-1:-1;;;14847:341:39;;;;;;;;;15331:23;:11;:21;:23::i;:::-;15298:56;;:18;:56;:::i;:::-;15253:30;:101;;-1:-1:-1;;;;;15253:101:39;;;-1:-1:-1;;;15253:101:39;;;;;;;;;15452:31;:19;:29;:31::i;:::-;15422:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;15422:61:39;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15422:61:39;;;;;-1:-1:-1;;;;;15422:61:39;;;;;;15525:32;:21;:30;:32::i;:::-;15493:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15493:64:39;;;;;;;-1:-1:-1;;;;;15493:64:39;;;;;;15596:30;:18;:28;:30::i;:::-;15567:12;:59;;:25;;:59;;;;-1:-1:-1;;;15567:59:39;;-1:-1:-1;;;;;15567:59:39;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15567:59:39;;;;;-1:-1:-1;;;;;15567:59:39;;;;;;14717:916;14505:1128;;;;;:::o;12007:2273:36:-;12270:29;;-1:-1:-1;;;;;12270:29:36;12407:335;:306;12270:29;12582:20;:13;12598:4;12582:20;:::i;:::-;12432:36;;-1:-1:-1;;;;;12432:36:36;;12407:306;12657:11;12690:5;12407:114;:306::i;:335::-;12368:36;:374;;-1:-1:-1;;;;;;12368:374:36;-1:-1:-1;;;;;12368:374:36;;;;;;;;;;12896:23;:11;:21;:23::i;:::-;12860:59;;:17;:59;:::i;:::-;12812:29;:107;;-1:-1:-1;;;;;;12812:107:36;-1:-1:-1;;;;;12812:107:36;;;;;;;;;;-1:-1:-1;13481:31:36;:19;:29;:31::i;:::-;13451:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;13451:61:36;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13451:61:36;;;;;-1:-1:-1;;;;;13451:61:36;;;;;;13554:32;:21;:30;:32::i;:::-;13522:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13522:64:36;;;;;;;-1:-1:-1;;;;;13522:64:36;;;;;;13625:30;:18;:28;:30::i;:::-;13596:12;:59;;:25;;:59;;;;-1:-1:-1;;;13596:59:36;;-1:-1:-1;;;;;13596:59:36;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13596:59:36;;;;;;;;;;;;;;;-1:-1:-1;14044:26:36;14074:21;14044:26;;14036:59;;-1:-1:-1;14036:59:36;:161;;-1:-1:-1;14169:28:36;;:12;14126:26;14169:28;;;;;-1:-1:-1;;;;;14126:26:36;;;14111:86;14036:161;14019:255;;;14229:34;;-1:-1:-1;;;14229:34:36;;;;;;;;;;;13190:890:33;13343:6;13333:7;:16;:32;;;;;13364:1;13353:7;:12;;13333:32;13329:745;;;13381:12;13413:13;:6;13381:12;13413:10;:13::i;:::-;13403:23;;:7;:23;:::i;:::-;13625:25;;13381:46;;-1:-1:-1;13608:55:33;;:44;;13381:46;;-1:-1:-1;;;13625:25:33;;-1:-1:-1;;;;;13625:25:33;13608:44;;:9;:44::i;:::-;:53;:55::i;:::-;13554:25;:123;;:25;;:123;;;;-1:-1:-1;;;13554:123:33;;-1:-1:-1;;;;;13554:123:33;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13554:123:33;;;;;-1:-1:-1;;;;;13554:123:33;;;;;;13367:321;7647:18:0;7607:65;:::o;13329:745:33:-;13775:7;13766:6;:16;13762:312;;;13813:1;13802:7;:12;13798:266;;13912:18;:7;:16;:18::i;:::-;13892:17;:6;:15;:17::i;:::-;:38;;;;:::i;:::-;13834:25;:114;;:25;;:114;;;;-1:-1:-1;;;13834:114:33;;-1:-1:-1;;;;;13834:114:33;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13834:114:33;;;;;-1:-1:-1;;;;;13834:114:33;;;;;;7647:18:0;7607:65;:::o;13798:266:33:-;14024:24;:13;:6;14035:1;14024:10;:13::i;22908:1546:35:-;23117:12;:34;;;;23272:13;:29;-1:-1:-1;;;23092:22:35;23199:70;;;;;23092:22;;23199:102;;-1:-1:-1;;;;;23272:29:35;;;;23199:102;:::i;:::-;23161:140;-1:-1:-1;23311:21:35;23335:44;23161:140;23335:14;:44;:::i;:::-;23311:68;;23389:20;23412:95;23462:35;23485:11;23462:22;:35::i;23412:95::-;23389:118;-1:-1:-1;23517:21:35;23541:88;:14;23389:118;23606:13;23541:25;:88::i;:::-;23517:112;;23987:26;24027:12;24042:40;24070:11;24042:27;:40::i;:::-;24027:55;;24103:13;24096:4;:20;24092:92;;;24153:20;24160:13;24153:4;:20;:::i;:::-;24132:41;;24092:92;24218:1;24197:18;:22;:43;;;-1:-1:-1;24223:17:35;;24197:43;24193:255;;;24256:181;24299:18;24335:12;24365:13;24396:27;24256:25;:181::i;:::-;22969:1485;;;;;;;22908:1546;:::o;7894:1001:33:-;8008:53;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8008:53:33;8092:796;;;;;;;;8155:12;:26;-1:-1:-1;;;;;8155:26:33;;;8092:796;;8212:28;;;;8092:796;;;;-1:-1:-1;;;8268:25:33;;;;;8092:796;;;;;;;;;;;;;8363:18;8092:796;;;;8417:21;8092:796;;;;8465:12;8092:796;;;;8509:29;;;;8092:796;;;;8625:36;;8092:796;;8155:26;8092:796;;;8578:97;;8625:36;8578:29;:97::i;:::-;8092:796;;8708:30;;-1:-1:-1;;;;;;;;8708:30:33;;;;;;8092:796;;;;8826:37;;8092:796;;;;;8779:98;;8826:37;;;8779:29;:98::i;:::-;8092:796;;8077:811;7894:1001;-1:-1:-1;;7894:1001:33:o;20164:5466:43:-;20267:7;20417:20;20575:106;20630:7;:33;;;20575:7;:25;;;:33;;:106;;;;:::i;:::-;20493:32;;;;20460:24;;;;:66;;:32;:66::i;:::-;20440:255;;;;:::i;:::-;20417:278;;20705:30;20738:113;20783:7;:21;;;20818:7;:23;;;20738:31;:113::i;:::-;20705:146;;20881:1;20865:13;:17;20861:3671;;;21550:21;21574:291;21623:22;21663:7;:20;;;21701:7;:28;;;21753:7;:19;;;150:4:42;21747:25:43;;;;:::i;:::-;21790:7;:18;;;21826:7;:25;;;21574:31;:291::i;:::-;21550:315;-1:-1:-1;21895:41:43;21550:315;21921:13;21895:17;:41::i;:::-;21879:57;-1:-1:-1;22005:17:43;;22001:565;;22180:371;22276:22;22324:7;:20;;;22370:13;22415:7;:19;;;150:4:42;22409:25:43;;;;:::i;:::-;22460:7;:18;;;22504:7;:25;;;22180:70;:371::i;:::-;22155:396;;:7;;:396;;;;;:::i;:::-;;;-1:-1:-1;22001:565:43;20884:1692;20861:3671;;;22602:1;22586:13;:17;22582:1950;;;23407:14;23408:13;23407:14;:::i;:::-;23391:30;;23482:21;23506:244;23554:22;23594:7;:20;;;23638:7;:19;;;150:4:42;23632:25:43;;;;:::i;:::-;23675:7;:18;;;23711:7;:25;;;23506:30;:244::i;:::-;23482:268;-1:-1:-1;23780:41:43;23482:268;23806:13;23780:17;:41::i;:::-;23764:57;-1:-1:-1;23886:17:43;;23882:563;;24061:369;24155:22;24203:7;:20;;;24249:13;24294:7;:19;;;150:4:42;24288:25:43;;;;:::i;:::-;24339:7;:18;;;24383:7;:25;;;24061:68;:369::i;:::-;24036:394;;:7;;:394;;;;;:::i;:::-;;;-1:-1:-1;23882:563:43;24483:38;24508:13;24491;24483:38;:::i;:::-;24458:63;;:7;;:63;;;;;:::i;:::-;;;-1:-1:-1;;22582:1950:43;24665:19;24899:153;24962:7;:32;;;150:4:42;24956:38:43;;;;:::i;:::-;25016:18;;;;24899:24;;;;;:153;:35;:153::i;:::-;24707:143;24767:7;:33;;;150:4:42;24761:39:43;;;;:::i;:::-;24818:18;;;;24707:25;;;;;:143;:36;:143::i;:::-;24687:379;;;;:::i;:::-;24665:401;;25076:27;25150:12;25113:7;:21;;;25106:56;;;;:::i;:::-;25076:86;;25206:7;:28;;;25176:20;:59;25172:131;;;25258:34;;-1:-1:-1;;;25258:34:43;;;;;;;;;;;25172:131;25312:53;;;25595:28;;;;25571:52;;25344:20;25571:52;:::i;13533:678:42:-;13727:15;13758:9;13754:451;;;13793:152;13900:27;13915:12;13900;:27;:::i;:::-;13843:28;:12;13864:6;13843:20;:28::i;:::-;13794:30;:12;13815:8;13794:20;:30::i;:::-;:77;;;;:::i;:::-;13793:85;;:152::i;:::-;13783:162;;13754:451;;;13996:12;13980;:28;13976:42;;-1:-1:-1;14017:1:42;14010:8;;13976:42;14042:152;14149:27;14164:12;14149;:27;:::i;:::-;14092:28;:12;14113:6;14092:20;:28::i;:::-;14043:30;:12;14064:8;14043:20;:30::i;:::-;:77;;;;:::i;10369:290:33:-;10433:4;10609:42;:21;10639:11;10609:29;:42::i;:::-;10560:25;;:12;10484:26;-1:-1:-1;;;;;;;;10560:25:33;;;;;10468:118;;;10476:56;;10484:26;10520:11;10476:43;:56::i;:::-;10468:118;;;;:::i;:::-;:184;;;10369:290;-1:-1:-1;;10369:290:33:o;11325:846:43:-;11576:7;11692:472;11759:23;11800:13;11831:9;12067:18;12073:12;150:4:42;12067:18:43;:::i;:::-;12103:11;12132:18;11692:49;:472::i;14661:104:42:-;14719:7;14749:1;14745;:5;:13;;14757:1;14745:13;;;-1:-1:-1;14753:1:42;;14661:104;-1:-1:-1;14661:104:42:o;26993:1230:43:-;27235:21;;27577:186;27613:16;27719:34;:15;27741:11;27719:21;:34::i;:::-;27577:11;;:186;:22;:186::i;:::-;27556:207;-1:-1:-1;27984:45:43;:11;28007:8;28017:11;27984:22;:45::i;:::-;27970:59;;;;:::i;:::-;;;28057:12;28044:10;:25;28040:147;;;28151:25;28164:12;28151:10;:25;:::i;:::-;28135:41;;28040:147;28196:20;26993:1230;;;;;;;;:::o;13771:272:45:-;13909:7;14028:8;:1;14034;14028:5;:8::i;:::-;13991:34;14002:18;14018:1;14002:11;:2;14011:1;14002:8;:11::i;:18::-;13991:1;;14022:2;13991:10;:34::i;:::-;:45;;;;:::i;9583:3592:42:-;9628:8;9681:1;9676;:6;9672:60;;9691:41;;-1:-1:-1;;;9691:41:42;;;;;;;;;;;9672:60;-1:-1:-1;10698:2:42;-1:-1:-1;;;;;;;10109:1:42;10105:49;10212:9;;;10192:18;10189:33;10186:1;10182:41;10176:48;10274:9;;;10262:10;10259:25;10256:1;10252:33;10246:40;10332:9;;;10324:6;10321:21;10318:1;10314:29;10308:36;10388:9;;;10382:4;10379:19;10376:1;10372:27;;;10366:34;;;10443:9;;;10438:3;10435:18;10432:1;10428:26;10422:33;10498:9;;;10490:18;;;10487:1;10483:26;;;10477:33;;;10546:9;;;10538:18;;;10532:25;10728:3;:7;;;;;10714:22;;;;10761:17;;;11554:31;11550:35;;11605:5;;11604:13;;11621:32;11603:50;11673:5;;11672:13;;11689:33;11671:51;11742:5;;11741:13;;11758:33;11740:51;11811:5;;11810:13;;11827:33;11809:51;11880:5;;11879:13;;11896:32;11878:50;11948:5;;11947:13;;11964:30;11946:48;10951:31;10947:35;;11002:5;;11001:13;;11018:32;11000:50;11070:5;;11069:13;;11086:32;11068:50;11138:5;;11137:13;;-1:-1:-1;;11136:50:42;11206:5;;11205:13;;-1:-1:-1;;11204:50:42;11274:5;;11273:13;;;-1:-1:-1;;11272:50:42;11340:5;-1:-1:-1;;11340:46:42;12335:10;12725:43;12720:48;-1:-1:-1;;10694:6:42;;;;12848:71;:91;12827:112;13012:72;13007:77;13155:3;13149:9;;9583:3592::o;2683:748::-;2797:9;3062:1;-1:-1:-1;;3045:19:42;3042:1;3039:26;3036:1;3032:34;3025:42;3012:11;3008:60;2981:146;;3111:1;3108;3101:12;2981:146;-1:-1:-1;3378:9:42;;3325:27;;;3322:34;;3374:27;;;3301:114;;2683:748::o;15212:101::-;15268:6;15297:1;15293;:5;:13;;15305:1;15293:13;;14938:101;14994:6;15023:1;15019;:5;:13;;15031:1;15019:13;;25953:1730:35;26646:25;26690:1;26674:13;:17;:122;;26782:14;26674:122;;;26706:61;:14;26732:19;26753:13;26706:25;:61::i;:::-;26646:150;;26810:17;26831:1;26810:22;26806:35;;26834:7;;;26806:35;27049:17;27109:19;27142:48;;;27138:274;;;27223:28;;-1:-1:-1;27290:111:35;:19;27223:28;27370:17;27290:30;:111::i;:::-;27265:136;;27138:274;27454:26;:14;:24;:26::i;:::-;27421:13;:59;;:29;;:59;;;;-1:-1:-1;;;;;27421:59:35;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;27421:59:35;;;;;-1:-1:-1;;;;;27421:59:35;;;;;;27516:34;:22;:32;:34::i;:::-;27490:13;:60;;:22;;:60;;;;-1:-1:-1;;;27490:60:35;;-1:-1:-1;;;;;27490:60:35;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;27490:60:35;;;;;-1:-1:-1;;;;;27490:60:35;;;;;;27627:49;27652:22;27644:31;;;:::i;:::-;27627:16;:49::i;12090:1116:45:-;12263:7;12703:9;12715:21;12721:1;12724;12727;12730;12733:2;12715:5;:21::i;:::-;12703:33;-1:-1:-1;12746:16:45;12769:37;12780:21;12799:1;12780:14;:2;12789:4;12780:8;:14::i;:21::-;12769:1;;12803:2;12769:10;:37::i;:::-;12765:41;;:1;:41;:::i;:::-;12746:60;;150:4:42;12820:8:45;:15;12816:295;;12934:28;12947:14;150:4:42;12959:1:45;12947:11;:14::i;12934:28::-;12923:39;;12816:295;;;13074:26;13087:12;150:4:42;13097:1:45;13087:9;:12::i;13074:26::-;13063:37;;12816:295;13187:12;13198:1;13187:8;:12;:::i;14384:104:42:-;14442:7;14472:1;14468;:5;:13;;14480:1;14468:13;;7296:489:45;7485:14;7511:12;7553:140;7605:1;7620;7635:2;7651:1;7666;7681:2;7553:38;:140::i;:::-;7533:160;;-1:-1:-1;7533:160:45;-1:-1:-1;7533:160:45;7703:76;;7738:30;;-1:-1:-1;;;7738:30:45;;;;;;;;;;;10390:1124;10540:7;11028:9;11040:19;11044:1;11047;11050;11053;11056:2;11040:3;:19::i;:::-;11028:31;-1:-1:-1;11069:16:45;11088:28;150:4:42;11096:13:45;:1;11106:2;11096:9;:13::i;:::-;:19;;;;:::i;:::-;11088:1;;:7;:28::i;:::-;11069:47;;150:4:42;11130:8:45;:15;11126:293;;11241:26;11254:12;150:4:42;11264:1:45;11254:9;:12::i;11241:26::-;11230:37;;11126:293;;;11380:28;11393:14;150:4:42;11405:1:45;11393:11;:14::i;11380:28::-;11369:39;;11126:293;11495:12;11499:8;11495:1;:12;:::i;:::-;11488:19;10390:1124;-1:-1:-1;;;;;;;;10390:1124:45:o;3826:1099::-;4013:7;4169:9;4181:19;4185:1;4188;4191;4194;4197:2;4181:3;:19::i;:::-;4169:31;-1:-1:-1;4243:15:45;4256:1;4244:6;4248:2;4244:1;:6;:::i;4243:15::-;4239:19;-1:-1:-1;4414:10:45;4427:23;4444:2;4448:1;4428:5;4239:19;4428:1;:5;:::i;:::-;4427:16;:23;:16;:23::i;:::-;4414:36;;150:4:42;4464:2:45;:9;4460:261;;4562:20;4569:12;150:4:42;4579:1:45;4569:9;:12::i;4562:20::-;4557:25;;4460:261;;;4688:22;4695:14;150:4:42;4707:1:45;4695:11;:14::i;4688:22::-;4683:27;;4460:261;4803:12;:2;4812;4803:8;:12::i;:::-;4798:17;-1:-1:-1;4912:6:45;4917:1;4798:17;4912:6;:::i;14609:278::-;14749:7;14872:8;:1;14878;14872:5;:8::i;:::-;14831:38;14844:20;14862:1;14844:13;:2;14855:1;14844:10;:13::i;:20::-;14831:1;;14866:2;14831:12;:38::i;8539:1314::-;8732:14;8748:12;8909:9;8921:19;8925:1;8928;8931;8934;8937:2;8921:3;:19::i;:::-;8909:31;-1:-1:-1;8983:15:45;8996:1;8984:6;8988:2;8984:1;:6;:::i;8983:15::-;8979:19;;9080:1;9076;:5;9072:53;;;9105:1;9108:5;9097:17;;;;;;;9072:53;9280:10;9293:23;9310:2;9314:1;9294:5;9298:1;9294;:5;:::i;9293:23::-;9280:36;;150:4:42;9330:2:45;:9;9326:263;;9429:20;9436:12;150:4:42;9446:1:45;9436:9;:12::i;9429:20::-;9424:25;;9326:263;;;9556:22;9563:14;150:4:42;9575:1:45;9563:11;:14::i;9556:22::-;9551:27;;9326:263;9671:12;:2;9680;9671:8;:12::i;:::-;9666:17;;9779:2;9775:1;:6;9771:52;;;9806:6;9810:2;9806:1;:6;:::i;:::-;9797:15;;9771:52;9842:4;9832:14;;8762:1091;;8539:1314;;;;;;;;;;:::o;14:271:149:-;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:149:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:149;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:252;860:2;854:9;902:3;890:16;;936:18;921:34;;957:22;;;918:62;915:88;;;983:18;;:::i;:::-;1019:2;1012:22;788:252;:::o;1045:275::-;1116:2;1110:9;1181:2;1162:13;;-1:-1:-1;;1158:27:149;1146:40;;1216:18;1201:34;;1237:22;;;1198:62;1195:88;;;1263:18;;:::i;:::-;1299:2;1292:22;1045:275;;-1:-1:-1;1045:275:149:o;1325:862::-;1404:6;1435:2;1478;1466:9;1457:7;1453:23;1449:32;1446:52;;;1494:1;1491;1484:12;1446:52;1527:9;1521:16;1556:18;1597:2;1589:6;1586:14;1583:34;;;1613:1;1610;1603:12;1583:34;1651:6;1640:9;1636:22;1626:32;;1696:7;1689:4;1685:2;1681:13;1677:27;1667:55;;1718:1;1715;1708:12;1667:55;1747:2;1741:9;1769:2;1765;1762:10;1759:36;;;1775:18;;:::i;:::-;1817:53;1860:2;1841:13;;-1:-1:-1;;1837:27:149;1833:36;;1817:53;:::i;:::-;1804:66;;1893:2;1886:5;1879:17;1933:7;1928:2;1923;1919;1915:11;1911:20;1908:33;1905:53;;;1954:1;1951;1944:12;1905:53;1976:1;1986:128;2000:2;1997:1;1994:9;1986:128;;;2087:10;;;2083:19;;2077:26;2057:13;;;2053:22;;2046:58;2011:10;;1986:128;;;-1:-1:-1;2155:1:149;2134:14;;;2130:23;;;2123:34;;;;-1:-1:-1;2138:5:149;1325:862;-1:-1:-1;;;1325:862:149:o;2192:118::-;2278:5;2271:13;2264:21;2257:5;2254:32;2244:60;;2300:1;2297;2290:12;2315:128;2380:20;;2409:28;2380:20;2409:28;:::i;:::-;2315:128;;;:::o;2448:241::-;2504:6;2557:2;2545:9;2536:7;2532:23;2528:32;2525:52;;;2573:1;2570;2563:12;2525:52;2612:9;2599:23;2631:28;2653:5;2631:28;:::i;2694:155::-;2754:5;2799:2;2790:6;2785:3;2781:16;2777:25;2774:45;;;2815:1;2812;2805:12;2854:492;2958:6;2966;2974;3027:2;3015:9;3006:7;3002:23;2998:32;2995:52;;;3043:1;3040;3033:12;2995:52;3079:9;3066:23;3056:33;;3136:2;3125:9;3121:18;3108:32;3098:42;;3191:2;3180:9;3176:18;3163:32;3218:18;3210:6;3207:30;3204:50;;;3250:1;3247;3240:12;3204:50;3273:67;3332:7;3323:6;3312:9;3308:22;3273:67;:::i;:::-;3263:77;;;2854:492;;;;;:::o;3604:173::-;3672:20;;-1:-1:-1;;;;;3721:31:149;;3711:42;;3701:70;;3767:1;3764;3757:12;3782:367;3845:8;3855:6;3909:3;3902:4;3894:6;3890:17;3886:27;3876:55;;3927:1;3924;3917:12;3876:55;-1:-1:-1;3950:20:149;;3993:18;3982:30;;3979:50;;;4025:1;4022;4015:12;3979:50;4062:4;4054:6;4050:17;4038:29;;4122:3;4115:4;4105:6;4102:1;4098:14;4090:6;4086:27;4082:38;4079:47;4076:67;;;4139:1;4136;4129:12;4154:922;4294:6;4302;4310;4318;4326;4334;4387:3;4375:9;4366:7;4362:23;4358:33;4355:53;;;4404:1;4401;4394:12;4355:53;4427:29;4446:9;4427:29;:::i;:::-;4417:39;;4475:38;4509:2;4498:9;4494:18;4475:38;:::i;:::-;4465:48;;4564:2;4553:9;4549:18;4536:32;4587:18;4628:2;4620:6;4617:14;4614:34;;;4644:1;4641;4634:12;4614:34;4683:70;4745:7;4736:6;4725:9;4721:22;4683:70;:::i;:::-;4772:8;;-1:-1:-1;4657:96:149;-1:-1:-1;4860:2:149;4845:18;;4832:32;;-1:-1:-1;4876:16:149;;;4873:36;;;4905:1;4902;4895:12;4873:36;;4944:72;5008:7;4997:8;4986:9;4982:24;4944:72;:::i;:::-;4154:922;;;;-1:-1:-1;4154:922:149;;-1:-1:-1;4154:922:149;;5035:8;;4154:922;-1:-1:-1;;;4154:922:149:o;5081:397::-;5167:6;5175;5183;5191;5244:3;5232:9;5223:7;5219:23;5215:33;5212:53;;;5261:1;5258;5251:12;5212:53;5297:9;5284:23;5274:33;;5326:38;5360:2;5349:9;5345:18;5326:38;:::i;:::-;5316:48;;5383:38;5417:2;5406:9;5402:18;5383:38;:::i;:::-;5081:397;;;;-1:-1:-1;5373:48:149;;5468:2;5453:18;5440:32;;-1:-1:-1;;5081:397:149:o;5691:385::-;5777:6;5785;5793;5801;5854:3;5842:9;5833:7;5829:23;5825:33;5822:53;;;5871:1;5868;5861:12;5822:53;-1:-1:-1;;5894:23:149;;;5964:2;5949:18;;5936:32;;-1:-1:-1;6015:2:149;6000:18;;5987:32;;6066:2;6051:18;6038:32;;-1:-1:-1;5691:385:149;-1:-1:-1;5691:385:149:o;6549:561::-;6662:6;6670;6678;6686;6739:3;6727:9;6718:7;6714:23;6710:33;6707:53;;;6756:1;6753;6746:12;6707:53;6792:9;6779:23;6769:33;;6849:2;6838:9;6834:18;6821:32;6811:42;;6900:2;6889:9;6885:18;6872:32;6862:42;;6955:2;6944:9;6940:18;6927:32;6982:18;6974:6;6971:30;6968:50;;;7014:1;7011;7004:12;6968:50;7037:67;7096:7;7087:6;7076:9;7072:22;7037:67;:::i;:::-;7027:77;;;6549:561;;;;;;;:::o;7479:356::-;7565:6;7618:2;7606:9;7597:7;7593:23;7589:32;7586:52;;;7634:1;7631;7624:12;7586:52;7674:9;7661:23;7707:18;7699:6;7696:30;7693:50;;;7739:1;7736;7729:12;7693:50;7762:67;7821:7;7812:6;7801:9;7797:22;7762:67;:::i;:::-;7752:77;7479:356;-1:-1:-1;;;;7479:356:149:o;7840:397::-;7926:6;7934;7942;7950;8003:3;7991:9;7982:7;7978:23;7974:33;7971:53;;;8020:1;8017;8010:12;7971:53;8056:9;8043:23;8033:33;;8085:38;8119:2;8108:9;8104:18;8085:38;:::i;:::-;8075:48;;8170:2;8159:9;8155:18;8142:32;8132:42;;8193:38;8227:2;8216:9;8212:18;8193:38;:::i;:::-;8183:48;;7840:397;;;;;;;:::o;8242:247::-;8309:6;8317;8370:2;8358:9;8349:7;8345:23;8341:32;8338:52;;;8386:1;8383;8376:12;8338:52;-1:-1:-1;;8409:23:149;;;8479:2;8464:18;;;8451:32;;-1:-1:-1;8242:247:149:o;8494:180::-;8553:6;8606:2;8594:9;8585:7;8581:23;8577:32;8574:52;;;8622:1;8619;8612:12;8574:52;-1:-1:-1;8645:23:149;;8494:180;-1:-1:-1;8494:180:149:o;8679:188::-;8747:20;;-1:-1:-1;;;;;8796:46:149;;8786:57;;8776:85;;8857:1;8854;8847:12;8872:260;8940:6;8948;9001:2;8989:9;8980:7;8976:23;8972:32;8969:52;;;9017:1;9014;9007:12;8969:52;9040:29;9059:9;9040:29;:::i;:::-;9030:39;;9088:38;9122:2;9111:9;9107:18;9088:38;:::i;:::-;9078:48;;8872:260;;;;;:::o;9137:315::-;9202:6;9210;9263:2;9251:9;9242:7;9238:23;9234:32;9231:52;;;9279:1;9276;9269:12;9231:52;9302:29;9321:9;9302:29;:::i;:::-;9292:39;;9381:2;9370:9;9366:18;9353:32;9394:28;9416:5;9394:28;:::i;:::-;9441:5;9431:15;;;9137:315;;;;;:::o;9457:316::-;9534:6;9542;9550;9603:2;9591:9;9582:7;9578:23;9574:32;9571:52;;;9619:1;9616;9609:12;9571:52;-1:-1:-1;;9642:23:149;;;9712:2;9697:18;;9684:32;;-1:-1:-1;9763:2:149;9748:18;;;9735:32;;9457:316;-1:-1:-1;9457:316:149:o;9962:162::-;10029:20;;10089:2;10078:21;;;10068:32;;10058:60;;10114:1;10111;10104:12;10129:973;10217:6;10270:3;10258:9;10249:7;10245:23;10241:33;10238:53;;;10287:1;10284;10277:12;10238:53;10313:22;;:::i;:::-;10358:29;10377:9;10358:29;:::i;:::-;10351:5;10344:44;10420:38;10454:2;10443:9;10439:18;10420:38;:::i;:::-;10415:2;10408:5;10404:14;10397:62;10491:37;10524:2;10513:9;10509:18;10491:37;:::i;:::-;10486:2;10479:5;10475:14;10468:61;10561:38;10595:2;10584:9;10580:18;10561:38;:::i;:::-;10556:2;10549:5;10545:14;10538:62;10633:39;10667:3;10656:9;10652:19;10633:39;:::i;:::-;10627:3;10620:5;10616:15;10609:64;10706:39;10740:3;10729:9;10725:19;10706:39;:::i;:::-;10700:3;10693:5;10689:15;10682:64;10779:39;10813:3;10802:9;10798:19;10779:39;:::i;:::-;10773:3;10766:5;10762:15;10755:64;10852:39;10886:3;10875:9;10871:19;10852:39;:::i;:::-;10846:3;10839:5;10835:15;10828:64;10911:3;10946:35;10977:2;10966:9;10962:18;10946:35;:::i;:::-;10930:14;;;10923:59;11001:3;11036:35;11052:18;;;11036:35;:::i;:::-;11020:14;;;11013:59;11024:5;10129:973;-1:-1:-1;;;10129:973:149:o;11107:762::-;11215:6;11223;11231;11239;11247;11255;11263;11316:3;11304:9;11295:7;11291:23;11287:33;11284:53;;;11333:1;11330;11323:12;11284:53;11356:29;11375:9;11356:29;:::i;:::-;11346:39;;11404:38;11438:2;11427:9;11423:18;11404:38;:::i;:::-;11394:48;;11492:2;11481:9;11477:18;11464:32;11505:28;11527:5;11505:28;:::i;:::-;11552:5;-1:-1:-1;11604:2:149;11589:18;;11576:32;;-1:-1:-1;11660:3:149;11645:19;;11632:33;11709:4;11696:18;;11684:31;;11674:59;;11729:1;11726;11719:12;11674:59;11107:762;;;;-1:-1:-1;11107:762:149;;;;11752:7;11806:3;11791:19;;11778:33;;-1:-1:-1;11858:3:149;11843:19;;;11830:33;;11107:762;-1:-1:-1;;11107:762:149:o;12523:322::-;12600:6;12608;12616;12669:2;12657:9;12648:7;12644:23;12640:32;12637:52;;;12685:1;12682;12675:12;12637:52;12721:9;12708:23;12698:33;;12750:38;12784:2;12773:9;12769:18;12750:38;:::i;:::-;12740:48;;12835:2;12824:9;12820:18;12807:32;12797:42;;12523:322;;;;;:::o;12850:186::-;12909:6;12962:2;12950:9;12941:7;12937:23;12933:32;12930:52;;;12978:1;12975;12968:12;12930:52;13001:29;13020:9;13001:29;:::i;13041:186::-;13100:6;13153:2;13141:9;13132:7;13128:23;13124:32;13121:52;;;13169:1;13166;13159:12;13121:52;13192:29;13211:9;13192:29;:::i;13232:472::-;13327:6;13335;13343;13351;13359;13412:3;13400:9;13391:7;13387:23;13383:33;13380:53;;;13429:1;13426;13419:12;13380:53;13465:9;13452:23;13442:33;;13494:38;13528:2;13517:9;13513:18;13494:38;:::i;:::-;13484:48;;13551:38;13585:2;13574:9;13570:18;13551:38;:::i;:::-;13541:48;;13636:2;13625:9;13621:18;13608:32;13598:42;;13659:39;13693:3;13682:9;13678:19;13659:39;:::i;:::-;13649:49;;13232:472;;;;;;;;:::o;13709:184::-;13779:6;13832:2;13820:9;13811:7;13807:23;13803:32;13800:52;;;13848:1;13845;13838:12;13800:52;-1:-1:-1;13871:16:149;;13709:184;-1:-1:-1;13709:184:149:o;14177:127::-;14238:10;14233:3;14229:20;14226:1;14219:31;14269:4;14266:1;14259:15;14293:4;14290:1;14283:15;14309:136;14344:3;-1:-1:-1;;;14365:22:149;;14362:48;;14390:18;;:::i;:::-;-1:-1:-1;14430:1:149;14426:13;;14309:136::o;14450:128::-;14517:9;;;14538:11;;;14535:37;;;14552:18;;:::i;14583:125::-;14648:9;;;14669:10;;;14666:36;;;14682:18;;:::i;14713:200::-;14779:9;;;14752:4;14807:9;;14835:10;;14847:12;;;14831:29;14870:12;;;14862:21;;14828:56;14825:82;;;14887:18;;:::i;:::-;14825:82;14713:200;;;;:::o;14918:216::-;14982:9;;;15010:11;;;14957:3;15040:9;;15068:10;;15064:19;;15093:10;;15085:19;;15061:44;15058:70;;;15108:18;;:::i;:::-;15058:70;;14918:216;;;;:::o;16545:135::-;16584:3;16605:17;;;16602:43;;16625:18;;:::i;:::-;-1:-1:-1;16672:1:149;16661:13;;16545:135::o;16877:127::-;16938:10;16933:3;16929:20;16926:1;16919:31;16969:4;16966:1;16959:15;16993:4;16990:1;16983:15;17009:112;17041:1;17067;17057:35;;17072:18;;:::i;:::-;-1:-1:-1;17106:9:149;;17009:112::o;17126:168::-;17199:9;;;17230;;17247:15;;;17241:22;;17227:37;17217:71;;17268:18;;:::i;18228:245::-;18295:6;18348:2;18336:9;18327:7;18323:23;18319:32;18316:52;;;18364:1;18361;18354:12;18316:52;18396:9;18390:16;18415:28;18437:5;18415:28;:::i;18610:197::-;-1:-1:-1;;;;;18732:10:149;;;18744;;;18728:27;;18767:11;;;18764:37;;;18781:18;;:::i;18812:200::-;-1:-1:-1;;;;;18948:10:149;;;18936;;;18932:27;;18971:12;;;18968:38;;;18986:18;;:::i;19017:245::-;19115:2;19085:17;;;19104;;;;19081:41;-1:-1:-1;;;;;19137:44:149;;-1:-1:-1;;;;;;19183:49:149;;19134:99;19131:125;;;19236:18;;:::i;19267:249::-;19367:2;19356:17;;;19337;;;;19333:41;-1:-1:-1;;;;;;19389:50:149;;-1:-1:-1;;;;;19441:45:149;;19386:101;19383:127;;;19490:18;;:::i;19521:193::-;19560:1;19586;19576:35;;19591:18;;:::i;:::-;-1:-1:-1;;;19627:18:149;;-1:-1:-1;;19647:13:149;;19623:38;19620:64;;;19664:18;;:::i;:::-;-1:-1:-1;19698:10:149;;19521:193::o",
    "linkReferences": {},
    "immutableReferences": {
      "39": [
        {
          "start": 572,
          "length": 32
        },
        {
          "start": 995,
          "length": 32
        },
        {
          "start": 2263,
          "length": 32
        },
        {
          "start": 2361,
          "length": 32
        },
        {
          "start": 2411,
          "length": 32
        },
        {
          "start": 2554,
          "length": 32
        },
        {
          "start": 3045,
          "length": 32
        },
        {
          "start": 3239,
          "length": 32
        },
        {
          "start": 3351,
          "length": 32
        }
      ],
      "42": [
        {
          "start": 2192,
          "length": 32
        },
        {
          "start": 2311,
          "length": 32
        },
        {
          "start": 2502,
          "length": 32
        },
        {
          "start": 3116,
          "length": 32
        },
        {
          "start": 3400,
          "length": 32
        }
      ],
      "8180": [
        {
          "start": 1241,
          "length": 32
        },
        {
          "start": 4812,
          "length": 32
        }
      ],
      "9215": [
        {
          "start": 2632,
          "length": 32
        },
        {
          "start": 2786,
          "length": 32
        },
        {
          "start": 2901,
          "length": 32
        },
        {
          "start": 8004,
          "length": 32
        },
        {
          "start": 8190,
          "length": 32
        },
        {
          "start": 8387,
          "length": 32
        },
        {
          "start": 8539,
          "length": 32
        },
        {
          "start": 10439,
          "length": 32
        },
        {
          "start": 10512,
          "length": 32
        }
      ],
      "9218": [
        {
          "start": 5192,
          "length": 32
        }
      ],
      "9221": [
        {
          "start": 4032,
          "length": 32
        },
        {
          "start": 5855,
          "length": 32
        },
        {
          "start": 6263,
          "length": 32
        },
        {
          "start": 6754,
          "length": 32
        },
        {
          "start": 8965,
          "length": 32
        },
        {
          "start": 9249,
          "length": 32
        }
      ],
      "9224": [
        {
          "start": 5278,
          "length": 32
        },
        {
          "start": 5417,
          "length": 32
        },
        {
          "start": 7955,
          "length": 32
        },
        {
          "start": 10705,
          "length": 32
        },
        {
          "start": 13770,
          "length": 32
        }
      ],
      "9227": [
        {
          "start": 3592,
          "length": 32
        },
        {
          "start": 4089,
          "length": 32
        },
        {
          "start": 5466,
          "length": 32
        }
      ],
      "9230": [
        {
          "start": 3727,
          "length": 32
        },
        {
          "start": 10921,
          "length": 32
        },
        {
          "start": 11989,
          "length": 32
        }
      ],
      "9233": [
        {
          "start": 3650,
          "length": 32
        },
        {
          "start": 3771,
          "length": 32
        },
        {
          "start": 4157,
          "length": 32
        },
        {
          "start": 12033,
          "length": 32
        }
      ],
      "9236": [
        {
          "start": 5312,
          "length": 32
        },
        {
          "start": 5384,
          "length": 32
        },
        {
          "start": 7922,
          "length": 32
        },
        {
          "start": 8705,
          "length": 32
        },
        {
          "start": 8750,
          "length": 32
        },
        {
          "start": 10739,
          "length": 32
        },
        {
          "start": 13694,
          "length": 32
        }
      ],
      "9239": [
        {
          "start": 4228,
          "length": 32
        },
        {
          "start": 4307,
          "length": 32
        },
        {
          "start": 5658,
          "length": 32
        },
        {
          "start": 5718,
          "length": 32
        },
        {
          "start": 12914,
          "length": 32
        },
        {
          "start": 13732,
          "length": 32
        },
        {
          "start": 14636,
          "length": 32
        }
      ],
      "9242": [
        {
          "start": 6057,
          "length": 32
        },
        {
          "start": 6613,
          "length": 32
        }
      ],
      "9245": [
        {
          "start": 11422,
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
    "getTotalShares()": "d5002f2e",
    "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
    "latestCheckpoint()": "907c0f92",
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
    "setLongExposure(uint128)": "b4f8da39",
    "setMarketState((uint128,uint128,int128,uint128,uint128,uint128,uint128,uint128,bool,bool))": "88348397",
    "setPauser(address,bool)": "7180c8ca",
    "setReserves(uint128,uint128)": "702db0eb",
    "setTotalShares(uint256)": "a77384c1",
    "target0()": "21b57d53",
    "target1()": "eac3e799",
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
    "updateLiquidity(int256)": "8120a3e2"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"precisionThreshold\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"BaseBufferExceedsShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativeInterest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Paused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"time\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"apr\",\"type\":\"int256\"}],\"name\":\"accrue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amountOut\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_normalizedTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_spotPrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateFeesGivenBonds\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalCurveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalFlatFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceCurveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceFlatFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalGovernanceFee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_spotPrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateFeesGivenShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalCurveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceCurveFee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_sharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateIdleShareReserves\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_sharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateOpenLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shareReservesDelta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReservesDelta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalGovernanceFee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"}],\"name\":\"calculateTimeRemaining\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timeRemaining\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"}],\"name\":\"calculateTimeRemainingScaled\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timeRemaining\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestCheckpoint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_baseAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"traderDeposit\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"}],\"name\":\"setLongExposure\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"_marketState_\",\"type\":\"tuple\"}],\"name\":\"setMarketState\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"}],\"name\":\"setReserves\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_totalShares\",\"type\":\"uint256\"}],\"name\":\"setTotalShares\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"_shareReservesDelta\",\"type\":\"int256\"}],\"name\":\"updateLiquidity\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"collectGovernanceFee((address,bool,bytes))\":{\"returns\":{\"_0\":\"proceeds The amount of base collected.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_baseAmount\":\"The amount of base to use when trading.\",\"_minOutput\":\"The minium number of bonds to receive.\",\"_minSharePrice\":\"The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"bondProceeds\":\"The amount of bonds the user received\",\"maturityTime\":\"The maturity time of the bonds.\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade\",\"_minSharePrice\":\"The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"maturityTime\":\"The maturity time of the short.\",\"traderDeposit\":\"The amount the user deposited for this trade.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"################ ### SafeCast ### ################\"}]},\"kind\":\"user\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"notice\":\"This contract's EIP712 domain separator.\"},\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"addLiquidity(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another\"},\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setMarketState((uint128,uint128,int128,uint128,uint128,uint128,uint128,uint128,bool,bool))\":{\"notice\":\"Mocks ///\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"target0()\":{\"notice\":\"The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions.\"},\"target1()\":{\"notice\":\"The target1 address. This is a logic contract that contains all         some stateful functions.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockHyperdrive.sol\":\"MockHyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x5bd64741fef9540148a15f024de103722d99eb7687e1268f6e34005209aff1ed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d4424216a3fe46e13705855186f71fc0d88040fde55786c39696cef5b00128ac\",\"dweb:/ipfs/QmXW3XoGe3NuK9AK72v8fHfWdBtXj3mW173dtYJkTv3PDi\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x791a42ebc20362f968036d7a109bf2bdd757ebb20391b9dd3c52be5c30e2d9a4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c9f134b44e151928670f17f17cb9bbc0b4f0ef16ba3cba5c0e3790f002c5af4\",\"dweb:/ipfs/QmT4nFLpDCCZm6SGVKBkFPHfiHPFrsiS2xn3g4WMjvyEKV\"]},\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0x7d95b2b8abfdb4518963c0a06f568969b499f3e07fc7e42ff54722d42fae78c2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0ee08b9c5ffcc231eeca7413e358bec99df0a6f2b8315463d64edacd2ba7f283\",\"dweb:/ipfs/QmfGFMnbvHcCh1YJ1KZEUiJucuJosaD9xbrURbg3rDenRG\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70\",\"dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0xea9b7b3489ac95dd9c41ae7174c9f34a29f8ae14224ee5d2605434a8c8711784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9076244df4f436e8a8921faadfe925f243ae9a37ac7a16cbce3dd5b4a66631a8\",\"dweb:/ipfs/QmeRunYGGcgUZjRHS3m1AarzzjgV9vtp5K9UeUjTaaCrfs\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x328a01b0720b9a6494a2d6be1113539d41da589a382525578d4241fc077e9646\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4b9d7b56fd8056ae9264da99f8e0764ef16f17dca179218cf9375cf3236ec9fc\",\"dweb:/ipfs/Qmf11fXRipobZfMWTTxaScrYz9tZFUsdVxH5eZ4aLVQQC8\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0xd846aec9e34732c384a70ae306e8015eeb4a85ba7a68861d3a741310efc9eb57\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cdd512b5caa814e88813e3a8a03bfc5e460c78c81c4e403bc8e57300ae11a1d2\",\"dweb:/ipfs/QmUAMC52wZ6H86zUPQ7xPYVjAYjYQ97RiAfV1kn27ZYPsz\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x6779541f073ba5ce6e0656d10c7d9ef23734d2675b865b4d5310a023c30764ad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc569f006ef38723c1cb893b4e08d22ca0a448dc559c8abd18b28bd6967fcb7\",\"dweb:/ipfs/QmdPfZGuM8g3qp4CPsuztZe1wcVrytWkbqHQDbsTVEKBdF\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x45ba04560ca590427cc1ad2e98ec0122f9b6496ead2e3d4b3438339c982bd543\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ee1b36b7ab75044d12e8b91ead75c4377b9da1daa630ea7d1a0c413f963f916a\",\"dweb:/ipfs/QmPsoXubd1sfy7NNn7YWSrYTTrBEreuawVRFFjDrHQmKzZ\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x6b85590aeffa0a73aabf0c17a958bdec064a4d59c2e3d7595a8cb2d86fb01277\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d89ad612f8624723adab39bd85311389fe95f685cf496e1a5d116bfafd6588eb\",\"dweb:/ipfs/QmPWVwrfo65BZofeWubpZsM93yzxMFjhPfoNYsaT31yn28\"]},\"contracts/src/internal/HyperdrivePermitForAll.sol\":{\"keccak256\":\"0x6169d5a033b924d68b9374024fe420fda4cd9ccdb6c681b9d3febea0d68d6452\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7a897e5b336b652fb37471d5f972f5bd3e181f1355ff5989d018b8b0ef051f0b\",\"dweb:/ipfs/QmcEoXs942xzX1Yu7v7ubn1avxZ7MeNvXm33nWkLyRRLha\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0x0dc04dc0f6070d51c2c58587f1d0f0604594e6c5728bf37e46da3a5952a0e0f0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1529824590ac5cdb7d4ffb67449be6a44f3bef9db40646bfa13bb5979e1a2f2d\",\"dweb:/ipfs/QmbXKFyqUaL1vv6wn7avWn463Uf8JgJvVLN6v5rUdJbys7\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xda130fbf6651046517801d119593b7f81e7a2a824f82cb15b1852495fa7fb148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c10ab3e768804fc8eee91502f34dd1e1d2d2e7d90d8ec0a26fac40d83ed940db\",\"dweb:/ipfs/QmNMqyFM6xC49uRAMeY3MhoQ9yK2ZHdQLt3QxrsNK9Kfkw\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xccfb106f6bd8829c369c19d08ef4f8ffc8ebbf5c51a9e148141733ff9bbc49f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d11ddba27aace6aefe451d75b4403ceb10f0a71cd61163e8f812728820107e62\",\"dweb:/ipfs/QmdSZJtY5LaJVnHYRwKAofo6oiihqpazC22Q1X9aL9uNbx\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x42a910bd6ee869fc53f18f2991cbf75a667d663ed41b4a11e18b328546ede7db\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://77345fdb9b99d0b04fa7cf719857eae63362e20db6b99da35ac886a13bf3b56a\",\"dweb:/ipfs/QmXatm27fhzsApgrMq978mye2u8fk62D89pUgV4WsjQeyH\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0x4ac8b598e2502ea35c1f5aa8a1bd4ca9ed4152e1f8bfe9e6dad16b0a8bea4c01\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://513eaa91659eef7f92dad51f0a2e82c817e1a5938571c8ce28cce36f7d0dae4d\",\"dweb:/ipfs/QmYFv511pzXFEiM2DRjhBFxRe4TbdLopRutWKLwWnvZSxh\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0xc05621361d7f37ba5b81ba0ebae4895620e50a011f9e6d7f0ad74b5fdad42de0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1679aba3da99eb68c0446110979dbd4522df64aedfafaaf5fbb539c5fe2eaff1\",\"dweb:/ipfs/QmPxadfofKR5kyUGgChY3kzD81qta3nU77BxgxVaidWA5R\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]},\"test/utils/Constants.sol\":{\"keccak256\":\"0xd7e0611edda0191fb3a6bf14a723975601dc64b1271584468a3b309ddf1b9e5b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e7e7f38a2b927f3c3e53e2c119537d8112c1ba61dfd56aeead7494b38a5277b0\",\"dweb:/ipfs/QmbaBBZKEJ857m3NDUcsTmemb93ajfuQjsjVNJVY2tRHs1\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x4a5167fc8cda981a45520c772fb15a255ba0fb521d4ed54262f9415ea087ff4f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51046b9d97a1bf7a1008166d4da90decde2ec7c2d78a72bac8f17a0f0f722445\",\"dweb:/ipfs/QmTaghvxU6AJkKmh98C7zRzWLjpG4JA8KxWApDRF9oyzQg\"]}},\"version\":1}",
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
          "name": "TransferFailed"
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
          "stateMutability": "view",
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
          "setMarketState((uint128,uint128,int128,uint128,uint128,uint128,uint128,uint128,bool,bool))": {
            "notice": "Mocks ///"
          },
          "setPauser(address,bool)": {
            "notice": "Allows governance to change the pauser status of an address."
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
        "contracts/test/MockHyperdrive.sol": "MockHyperdrive"
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
      "contracts/src/external/HyperdriveTarget0.sol": {
        "keccak256": "0x791a42ebc20362f968036d7a109bf2bdd757ebb20391b9dd3c52be5c30e2d9a4",
        "urls": [
          "bzz-raw://3c9f134b44e151928670f17f17cb9bbc0b4f0ef16ba3cba5c0e3790f002c5af4",
          "dweb:/ipfs/QmT4nFLpDCCZm6SGVKBkFPHfiHPFrsiS2xn3g4WMjvyEKV"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/external/HyperdriveTarget1.sol": {
        "keccak256": "0x7d95b2b8abfdb4518963c0a06f568969b499f3e07fc7e42ff54722d42fae78c2",
        "urls": [
          "bzz-raw://0ee08b9c5ffcc231eeca7413e358bec99df0a6f2b8315463d64edacd2ba7f283",
          "dweb:/ipfs/QmfGFMnbvHcCh1YJ1KZEUiJucuJosaD9xbrURbg3rDenRG"
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
      "contracts/test/ERC20Mintable.sol": {
        "keccak256": "0x4ac8b598e2502ea35c1f5aa8a1bd4ca9ed4152e1f8bfe9e6dad16b0a8bea4c01",
        "urls": [
          "bzz-raw://513eaa91659eef7f92dad51f0a2e82c817e1a5938571c8ce28cce36f7d0dae4d",
          "dweb:/ipfs/QmYFv511pzXFEiM2DRjhBFxRe4TbdLopRutWKLwWnvZSxh"
        ],
        "license": "Apache-2.0"
      },
      "contracts/test/MockHyperdrive.sol": {
        "keccak256": "0xc05621361d7f37ba5b81ba0ebae4895620e50a011f9e6d7f0ad74b5fdad42de0",
        "urls": [
          "bzz-raw://1679aba3da99eb68c0446110979dbd4522df64aedfafaaf5fbb539c5fe2eaff1",
          "dweb:/ipfs/QmPxadfofKR5kyUGgChY3kzD81qta3nU77BxgxVaidWA5R"
        ],
        "license": "Apache-2.0"
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
        "keccak256": "0x4a5167fc8cda981a45520c772fb15a255ba0fb521d4ed54262f9415ea087ff4f",
        "urls": [
          "bzz-raw://51046b9d97a1bf7a1008166d4da90decde2ec7c2d78a72bac8f17a0f0f722445",
          "dweb:/ipfs/QmTaghvxU6AJkKmh98C7zRzWLjpG4JA8KxWApDRF9oyzQg"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/test/MockHyperdrive.sol",
    "id": 14869,
    "exportedSymbols": {
      "ERC20Mintable": [
        13194
      ],
      "ETH": [
        115616
      ],
      "FixedPointMath": [
        10533
      ],
      "Hyperdrive": [
        504
      ],
      "HyperdriveBase": [
        5354
      ],
      "HyperdriveTarget0": [
        1174
      ],
      "HyperdriveTarget1": [
        1361
      ],
      "HyperdriveUtils": [
        120738
      ],
      "IHyperdrive": [
        3759
      ],
      "IMockHyperdrive": [
        14155
      ],
      "MockHyperdrive": [
        14824
      ],
      "MockHyperdriveBase": [
        14513
      ],
      "MockHyperdriveTarget0": [
        14853
      ],
      "MockHyperdriveTarget1": [
        14868
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:11424:56",
    "nodes": [
      {
        "id": 14036,
        "nodeType": "PragmaDirective",
        "src": "39:23:56",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 14038,
        "nodeType": "ImportDirective",
        "src": "64:67:56",
        "nodes": [],
        "absolutePath": "contracts/src/external/Hyperdrive.sol",
        "file": "contracts/src/external/Hyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14869,
        "sourceUnit": 505,
        "symbolAliases": [
          {
            "foreign": {
              "id": 14037,
              "name": "Hyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 504,
              "src": "73:10:56",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 14040,
        "nodeType": "ImportDirective",
        "src": "132:81:56",
        "nodes": [],
        "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
        "file": "contracts/src/external/HyperdriveTarget0.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14869,
        "sourceUnit": 1175,
        "symbolAliases": [
          {
            "foreign": {
              "id": 14039,
              "name": "HyperdriveTarget0",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 1174,
              "src": "141:17:56",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 14042,
        "nodeType": "ImportDirective",
        "src": "214:81:56",
        "nodes": [],
        "absolutePath": "contracts/src/external/HyperdriveTarget1.sol",
        "file": "contracts/src/external/HyperdriveTarget1.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14869,
        "sourceUnit": 1362,
        "symbolAliases": [
          {
            "foreign": {
              "id": 14041,
              "name": "HyperdriveTarget1",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 1361,
              "src": "223:17:56",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 14044,
        "nodeType": "ImportDirective",
        "src": "296:75:56",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveBase.sol",
        "file": "contracts/src/internal/HyperdriveBase.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14869,
        "sourceUnit": 5355,
        "symbolAliases": [
          {
            "foreign": {
              "id": 14043,
              "name": "HyperdriveBase",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 5354,
              "src": "305:14:56",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 14046,
        "nodeType": "ImportDirective",
        "src": "372:71:56",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "contracts/src/interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14869,
        "sourceUnit": 3760,
        "symbolAliases": [
          {
            "foreign": {
              "id": 14045,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3759,
              "src": "381:11:56",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 14048,
        "nodeType": "ImportDirective",
        "src": "444:71:56",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "contracts/src/interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14869,
        "sourceUnit": 3760,
        "symbolAliases": [
          {
            "foreign": {
              "id": 14047,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3759,
              "src": "453:11:56",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 14050,
        "nodeType": "ImportDirective",
        "src": "516:76:56",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "contracts/src/libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14869,
        "sourceUnit": 10534,
        "symbolAliases": [
          {
            "foreign": {
              "id": 14049,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10533,
              "src": "525:14:56",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 14052,
        "nodeType": "ImportDirective",
        "src": "593:65:56",
        "nodes": [],
        "absolutePath": "contracts/test/ERC20Mintable.sol",
        "file": "contracts/test/ERC20Mintable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14869,
        "sourceUnit": 13195,
        "symbolAliases": [
          {
            "foreign": {
              "id": 14051,
              "name": "ERC20Mintable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 13194,
              "src": "602:13:56",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 14054,
        "nodeType": "ImportDirective",
        "src": "659:47:56",
        "nodes": [],
        "absolutePath": "test/utils/Constants.sol",
        "file": "test/utils/Constants.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14869,
        "sourceUnit": 115617,
        "symbolAliases": [
          {
            "foreign": {
              "id": 14053,
              "name": "ETH",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 115616,
              "src": "668:3:56",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 14056,
        "nodeType": "ImportDirective",
        "src": "707:65:56",
        "nodes": [],
        "absolutePath": "test/utils/HyperdriveUtils.sol",
        "file": "test/utils/HyperdriveUtils.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 14869,
        "sourceUnit": 120739,
        "symbolAliases": [
          {
            "foreign": {
              "id": 14055,
              "name": "HyperdriveUtils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 120738,
              "src": "716:15:56",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 14155,
        "nodeType": "ContractDefinition",
        "src": "774:1674:56",
        "nodes": [
          {
            "id": 14063,
            "nodeType": "FunctionDefinition",
            "src": "806:51:56",
            "nodes": [],
            "functionSelector": "68096239",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "accrue",
            "nameLocation": "815:6:56",
            "parameters": {
              "id": 14061,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14058,
                  "mutability": "mutable",
                  "name": "time",
                  "nameLocation": "830:4:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14063,
                  "src": "822:12:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14057,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "822:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14060,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "843:3:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14063,
                  "src": "836:10:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 14059,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "836:6:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "821:26:56"
            },
            "returnParameters": {
              "id": 14062,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "856:0:56"
            },
            "scope": 14155,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14084,
            "nodeType": "FunctionDefinition",
            "src": "863:398:56",
            "nodes": [],
            "functionSelector": "5f0088f7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateFeesGivenShares",
            "nameLocation": "872:24:56",
            "parameters": {
              "id": 14074,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14065,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "914:9:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14084,
                  "src": "906:17:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14064,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "906:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14067,
                  "mutability": "mutable",
                  "name": "_amountOut",
                  "nameLocation": "941:10:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14084,
                  "src": "933:18:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14066,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "933:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14069,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "969:24:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14084,
                  "src": "961:32:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14068,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "961:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14071,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "1011:10:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14084,
                  "src": "1003:18:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14070,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1003:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14073,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1039:10:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14084,
                  "src": "1031:18:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14072,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1031:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "896:159:56"
            },
            "returnParameters": {
              "id": 14083,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14076,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "1124:13:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14084,
                  "src": "1116:21:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14075,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1116:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14078,
                  "mutability": "mutable",
                  "name": "totalFlatFee",
                  "nameLocation": "1159:12:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14084,
                  "src": "1151:20:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14077,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1151:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14080,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "1193:18:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14084,
                  "src": "1185:26:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14079,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1185:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14082,
                  "mutability": "mutable",
                  "name": "governanceFlatFee",
                  "nameLocation": "1233:17:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14084,
                  "src": "1225:25:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14081,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1225:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1102:158:56"
            },
            "scope": 14155,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14101,
            "nodeType": "FunctionDefinition",
            "src": "1267:330:56",
            "nodes": [],
            "functionSelector": "22d5506b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateFeesGivenBonds",
            "nameLocation": "1276:23:56",
            "parameters": {
              "id": 14093,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14086,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "1317:9:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14101,
                  "src": "1309:17:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14085,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1309:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14088,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "1344:24:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14101,
                  "src": "1336:32:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14087,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1336:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14090,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "1386:10:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14101,
                  "src": "1378:18:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14089,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1378:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14092,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1414:10:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14101,
                  "src": "1406:18:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14091,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1406:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1299:131:56"
            },
            "returnParameters": {
              "id": 14100,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14095,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "1499:13:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14101,
                  "src": "1491:21:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14094,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1491:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14097,
                  "mutability": "mutable",
                  "name": "totalFlatFee",
                  "nameLocation": "1534:12:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14101,
                  "src": "1526:20:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14096,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1526:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14099,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "1568:18:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14101,
                  "src": "1560:26:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14098,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1560:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1477:119:56"
            },
            "scope": 14155,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14118,
            "nodeType": "FunctionDefinition",
            "src": "1603:334:56",
            "nodes": [],
            "functionSelector": "fa0f861d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenLong",
            "nameLocation": "1612:17:56",
            "parameters": {
              "id": 14108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14103,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "1647:12:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14118,
                  "src": "1639:20:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14102,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1639:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14105,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "1677:11:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14118,
                  "src": "1669:19:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14104,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1669:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14107,
                  "mutability": "mutable",
                  "name": "_timeRemaining",
                  "nameLocation": "1706:14:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14118,
                  "src": "1698:22:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14106,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1698:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1629:97:56"
            },
            "returnParameters": {
              "id": 14117,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14110,
                  "mutability": "mutable",
                  "name": "shareReservesDelta",
                  "nameLocation": "1795:18:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14118,
                  "src": "1787:26:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14109,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1787:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14112,
                  "mutability": "mutable",
                  "name": "bondReservesDelta",
                  "nameLocation": "1835:17:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14118,
                  "src": "1827:25:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14111,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1827:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14114,
                  "mutability": "mutable",
                  "name": "bondProceeds",
                  "nameLocation": "1874:12:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14118,
                  "src": "1866:20:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14113,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1866:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14116,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "1908:18:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14118,
                  "src": "1900:26:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14115,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1900:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1773:163:56"
            },
            "scope": 14155,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14125,
            "nodeType": "FunctionDefinition",
            "src": "1943:101:56",
            "nodes": [],
            "functionSelector": "68c2ecb8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemaining",
            "nameLocation": "1952:22:56",
            "parameters": {
              "id": 14121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14120,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "1992:13:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14125,
                  "src": "1984:21:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14119,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1984:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1974:37:56"
            },
            "returnParameters": {
              "id": 14124,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14123,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14125,
                  "src": "2035:7:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14122,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2035:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2034:9:56"
            },
            "scope": 14155,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14132,
            "nodeType": "FunctionDefinition",
            "src": "2050:107:56",
            "nodes": [],
            "functionSelector": "ca6d38f7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemainingScaled",
            "nameLocation": "2059:28:56",
            "parameters": {
              "id": 14128,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14127,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "2105:13:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14132,
                  "src": "2097:21:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14126,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2097:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2087:37:56"
            },
            "returnParameters": {
              "id": 14131,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14130,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14132,
                  "src": "2148:7:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14129,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2148:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2147:9:56"
            },
            "scope": 14155,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14137,
            "nodeType": "FunctionDefinition",
            "src": "2163:60:56",
            "nodes": [],
            "functionSelector": "907c0f92",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "latestCheckpoint",
            "nameLocation": "2172:16:56",
            "parameters": {
              "id": 14133,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2188:2:56"
            },
            "returnParameters": {
              "id": 14136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14135,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14137,
                  "src": "2214:7:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14134,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2214:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2213:9:56"
            },
            "scope": 14155,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14142,
            "nodeType": "FunctionDefinition",
            "src": "2229:62:56",
            "nodes": [],
            "functionSelector": "ced09112",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "updateLiquidity",
            "nameLocation": "2238:15:56",
            "parameters": {
              "id": 14140,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14139,
                  "mutability": "mutable",
                  "name": "shareReservesDelta",
                  "nameLocation": "2262:18:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14142,
                  "src": "2254:26:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14138,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2254:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2253:28:56"
            },
            "returnParameters": {
              "id": 14141,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2290:0:56"
            },
            "scope": 14155,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14149,
            "nodeType": "FunctionDefinition",
            "src": "2297:75:56",
            "nodes": [],
            "functionSelector": "8392b8c0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setReserves",
            "nameLocation": "2306:11:56",
            "parameters": {
              "id": 14147,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14144,
                  "mutability": "mutable",
                  "name": "shareReserves",
                  "nameLocation": "2326:13:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14149,
                  "src": "2318:21:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14143,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2318:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14146,
                  "mutability": "mutable",
                  "name": "bondReserves",
                  "nameLocation": "2349:12:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14149,
                  "src": "2341:20:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14145,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2341:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2317:45:56"
            },
            "returnParameters": {
              "id": 14148,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2371:0:56"
            },
            "scope": 14155,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14154,
            "nodeType": "FunctionDefinition",
            "src": "2378:68:56",
            "nodes": [],
            "functionSelector": "8e67f87e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getGovernanceFeesAccrued",
            "nameLocation": "2387:24:56",
            "parameters": {
              "id": 14150,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2411:2:56"
            },
            "returnParameters": {
              "id": 14153,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14152,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14154,
                  "src": "2437:7:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14151,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2437:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2436:9:56"
            },
            "scope": 14155,
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
          14155
        ],
        "name": "IMockHyperdrive",
        "nameLocation": "784:15:56",
        "scope": 14869,
        "usedErrors": []
      },
      {
        "id": 14513,
        "nodeType": "ContractDefinition",
        "src": "2450:4210:56",
        "nodes": [
          {
            "id": 14160,
            "nodeType": "UsingForDirective",
            "src": "2511:33:56",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 14158,
              "name": "FixedPointMath",
              "nameLocations": [
                "2517:14:56"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 10533,
              "src": "2517:14:56"
            },
            "typeName": {
              "id": 14159,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2536:7:56",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 14162,
            "nodeType": "VariableDeclaration",
            "src": "2550:28:56",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "totalShares",
            "nameLocation": "2567:11:56",
            "scope": 14513,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 14161,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2550:7:56",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 14312,
            "nodeType": "FunctionDefinition",
            "src": "2585:1667:56",
            "nodes": [],
            "body": {
              "id": 14311,
              "nodeType": "Block",
              "src": "2724:1528:56",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14176
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14176,
                      "mutability": "mutable",
                      "name": "baseAmount",
                      "nameLocation": "2813:10:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 14311,
                      "src": "2805:18:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14175,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2805:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14186,
                  "initialValue": {
                    "condition": {
                      "expression": {
                        "id": 14177,
                        "name": "options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14167,
                        "src": "2826:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      },
                      "id": 14178,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2834:6:56",
                      "memberName": "asBase",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3604,
                      "src": "2826:14:56",
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
                            "id": 14182,
                            "name": "_pricePerShare",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              14489
                            ],
                            "referencedDeclaration": 14489,
                            "src": "2891:14:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 14183,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2891:16:56",
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
                          "id": 14180,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14164,
                          "src": "2876:6:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14181,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2883:7:56",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9831,
                        "src": "2876:14:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 14184,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2876:32:56",
                      "tryCall": false,
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
                    "src": "2826:82:56",
                    "trueExpression": {
                      "id": 14179,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14164,
                      "src": "2855:6:56",
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
                  "src": "2805:103:56"
                },
                {
                  "assignments": [
                    14188
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14188,
                      "mutability": "mutable",
                      "name": "assets",
                      "nameLocation": "3057:6:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 14311,
                      "src": "3049:14:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14187,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3049:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14189,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3049:14:56"
                },
                {
                  "assignments": [
                    14191
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14191,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "3078:7:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 14311,
                      "src": "3073:12:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 14190,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "3073:4:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14193,
                  "initialValue": {
                    "hexValue": "74727565",
                    "id": 14192,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3088:4:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3073:19:56"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 14199,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 14196,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9215,
                          "src": "3114:10:56",
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
                        "id": 14195,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "3106:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 14194,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3106:7:56",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 14197,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3106:19:56",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 14198,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 115616,
                      "src": "3129:3:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3106:26:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 14266,
                    "nodeType": "Block",
                    "src": "3489:217:56",
                    "statements": [
                      {
                        "expression": {
                          "id": 14251,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14243,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14188,
                            "src": "3503:6:56",
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
                                    "id": 14248,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "3541:4:56",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$14513",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$14513",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  ],
                                  "id": 14247,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "3533:7:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 14246,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "3533:7:56",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 14249,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3533:13:56",
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
                                "id": 14244,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9215,
                                "src": "3512:10:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$3030",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 14245,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3523:9:56",
                              "memberName": "balanceOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 2991,
                              "src": "3512:20:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view external returns (uint256)"
                              }
                            },
                            "id": 14250,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3512:35:56",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3503:44:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14252,
                        "nodeType": "ExpressionStatement",
                        "src": "3503:44:56"
                      },
                      {
                        "expression": {
                          "id": 14264,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14253,
                            "name": "success",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14191,
                            "src": "3561:7:56",
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
                                  "id": 14256,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "3612:3:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 14257,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3616:6:56",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "3612:10:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 14260,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "3648:4:56",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$14513",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$14513",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  ],
                                  "id": 14259,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "3640:7:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 14258,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "3640:7:56",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 14261,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3640:13:56",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 14262,
                                "name": "baseAmount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14176,
                                "src": "3671:10:56",
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
                                "id": 14254,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9215,
                                "src": "3571:10:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$3030",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 14255,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3582:12:56",
                              "memberName": "transferFrom",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 3029,
                              "src": "3571:23:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,address,uint256) external returns (bool)"
                              }
                            },
                            "id": 14263,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3571:124:56",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "3561:134:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 14265,
                        "nodeType": "ExpressionStatement",
                        "src": "3561:134:56"
                      }
                    ]
                  },
                  "id": 14267,
                  "nodeType": "IfStatement",
                  "src": "3102:604:56",
                  "trueBody": {
                    "id": 14242,
                    "nodeType": "Block",
                    "src": "3134:349:56",
                    "statements": [
                      {
                        "expression": {
                          "id": 14206,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14200,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14188,
                            "src": "3148:6:56",
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
                                  "id": 14203,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "3165:4:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$14513",
                                    "typeString": "contract MockHyperdriveBase"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$14513",
                                    "typeString": "contract MockHyperdriveBase"
                                  }
                                ],
                                "id": 14202,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3157:7:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 14201,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3157:7:56",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 14204,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3157:13:56",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 14205,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3171:7:56",
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "src": "3157:21:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3148:30:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14207,
                        "nodeType": "ExpressionStatement",
                        "src": "3148:30:56"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 14211,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 14208,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "3196:3:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 14209,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3200:5:56",
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "3196:9:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "id": 14210,
                            "name": "baseAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14176,
                            "src": "3208:10:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3196:22:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 14218,
                        "nodeType": "IfStatement",
                        "src": "3192:96:56",
                        "trueBody": {
                          "id": 14217,
                          "nodeType": "Block",
                          "src": "3220:68:56",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "id": 14212,
                                    "name": "IHyperdrive",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3759,
                                    "src": "3245:11:56",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                      "typeString": "type(contract IHyperdrive)"
                                    }
                                  },
                                  "id": 14214,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "3257:14:56",
                                  "memberName": "TransferFailed",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 3657,
                                  "src": "3245:26:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 14215,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3245:28:56",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 14216,
                              "nodeType": "RevertStatement",
                              "src": "3238:35:56"
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
                          "id": 14222,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 14219,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "3305:3:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 14220,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3309:5:56",
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "3305:9:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "id": 14221,
                            "name": "baseAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14176,
                            "src": "3317:10:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3305:22:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 14241,
                        "nodeType": "IfStatement",
                        "src": "3301:172:56",
                        "trueBody": {
                          "id": 14240,
                          "nodeType": "Block",
                          "src": "3329:144:56",
                          "statements": [
                            {
                              "expression": {
                                "id": 14238,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "components": [
                                    {
                                      "id": 14223,
                                      "name": "success",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 14191,
                                      "src": "3348:7:56",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    null
                                  ],
                                  "id": 14224,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "TupleExpression",
                                  "src": "3347:11:56",
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
                                      "id": 14236,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3455:2:56",
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
                                              "id": 14227,
                                              "name": "msg",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": -15,
                                              "src": "3369:3:56",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                              }
                                            },
                                            "id": 14228,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3373:6:56",
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "src": "3369:10:56",
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
                                          "id": 14226,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "3361:8:56",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_address_payable_$",
                                            "typeString": "type(address payable)"
                                          },
                                          "typeName": {
                                            "id": 14225,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3361:8:56",
                                            "stateMutability": "payable",
                                            "typeDescriptions": {}
                                          }
                                        },
                                        "id": 14229,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3361:19:56",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address_payable",
                                          "typeString": "address payable"
                                        }
                                      },
                                      "id": 14230,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "3381:4:56",
                                      "memberName": "call",
                                      "nodeType": "MemberAccess",
                                      "src": "3361:24:56",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                      }
                                    },
                                    "id": 14235,
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
                                        "id": 14234,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "expression": {
                                            "id": 14231,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -15,
                                            "src": "3414:3:56",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_message",
                                              "typeString": "msg"
                                            }
                                          },
                                          "id": 14232,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "3418:5:56",
                                          "memberName": "value",
                                          "nodeType": "MemberAccess",
                                          "src": "3414:9:56",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                          "id": 14233,
                                          "name": "baseAmount",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 14176,
                                          "src": "3426:10:56",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "3414:22:56",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "src": "3361:93:56",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                      "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                    }
                                  },
                                  "id": 14237,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3361:97:56",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                    "typeString": "tuple(bool,bytes memory)"
                                  }
                                },
                                "src": "3347:111:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 14239,
                              "nodeType": "ExpressionStatement",
                              "src": "3347:111:56"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "id": 14269,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "3719:8:56",
                    "subExpression": {
                      "id": 14268,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14191,
                      "src": "3720:7:56",
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
                  "id": 14276,
                  "nodeType": "IfStatement",
                  "src": "3715:74:56",
                  "trueBody": {
                    "id": 14275,
                    "nodeType": "Block",
                    "src": "3729:60:56",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 14270,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3759,
                              "src": "3750:11:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 14272,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3762:14:56",
                            "memberName": "TransferFailed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3657,
                            "src": "3750:26:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 14273,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3750:28:56",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 14274,
                        "nodeType": "RevertStatement",
                        "src": "3743:35:56"
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
                    "id": 14279,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 14277,
                      "name": "totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14162,
                      "src": "3924:11:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 14278,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3939:1:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3924:16:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 14309,
                    "nodeType": "Block",
                    "src": "4075:171:56",
                    "statements": [
                      {
                        "assignments": [
                          14293
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 14293,
                            "mutability": "mutable",
                            "name": "newShares",
                            "nameLocation": "4097:9:56",
                            "nodeType": "VariableDeclaration",
                            "scope": 14309,
                            "src": "4089:17:56",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 14292,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "4089:7:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 14299,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 14296,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14164,
                              "src": "4132:6:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 14297,
                              "name": "assets",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14188,
                              "src": "4140:6:56",
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
                              "id": 14294,
                              "name": "totalShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14162,
                              "src": "4109:11:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 14295,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4121:10:56",
                            "memberName": "mulDivDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9813,
                            "src": "4109:22:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 14298,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4109:38:56",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "4089:58:56"
                      },
                      {
                        "expression": {
                          "id": 14302,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14300,
                            "name": "totalShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14162,
                            "src": "4161:11:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 14301,
                            "name": "newShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14293,
                            "src": "4176:9:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4161:24:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14303,
                        "nodeType": "ExpressionStatement",
                        "src": "4161:24:56"
                      },
                      {
                        "expression": {
                          "components": [
                            {
                              "id": 14304,
                              "name": "newShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14293,
                              "src": "4207:9:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 14305,
                                "name": "_pricePerShare",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [
                                  14489
                                ],
                                "referencedDeclaration": 14489,
                                "src": "4218:14:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                  "typeString": "function () view returns (uint256)"
                                }
                              },
                              "id": 14306,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4218:16:56",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 14307,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "4206:29:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256)"
                          }
                        },
                        "functionReturnParameters": 14174,
                        "id": 14308,
                        "nodeType": "Return",
                        "src": "4199:36:56"
                      }
                    ]
                  },
                  "id": 14310,
                  "nodeType": "IfStatement",
                  "src": "3920:326:56",
                  "trueBody": {
                    "id": 14291,
                    "nodeType": "Block",
                    "src": "3942:127:56",
                    "statements": [
                      {
                        "expression": {
                          "id": 14285,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14280,
                            "name": "totalShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14162,
                            "src": "3956:11:56",
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
                                "id": 14283,
                                "name": "_initialSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9236,
                                "src": "3985:18:56",
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
                                "id": 14281,
                                "name": "amount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14164,
                                "src": "3970:6:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 14282,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3977:7:56",
                              "memberName": "divDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9849,
                              "src": "3970:14:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 14284,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3970:34:56",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3956:48:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14286,
                        "nodeType": "ExpressionStatement",
                        "src": "3956:48:56"
                      },
                      {
                        "expression": {
                          "components": [
                            {
                              "id": 14287,
                              "name": "totalShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14162,
                              "src": "4026:11:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 14288,
                              "name": "_initialSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9236,
                              "src": "4039:18:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 14289,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "4025:33:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256)"
                          }
                        },
                        "functionReturnParameters": 14174,
                        "id": 14290,
                        "nodeType": "Return",
                        "src": "4018:40:56"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              4699
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_deposit",
            "nameLocation": "2594:8:56",
            "overrides": {
              "id": 14169,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2688:8:56"
            },
            "parameters": {
              "id": 14168,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14164,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2620:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14312,
                  "src": "2612:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14163,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2612:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14167,
                  "mutability": "mutable",
                  "name": "options",
                  "nameLocation": "2665:7:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14312,
                  "src": "2636:36:56",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 14166,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 14165,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "2636:11:56",
                        "2648:7:56"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3608,
                      "src": "2636:19:56"
                    },
                    "referencedDeclaration": 3608,
                    "src": "2636:19:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$3608_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2602:76:56"
            },
            "returnParameters": {
              "id": 14174,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14171,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14312,
                  "src": "2706:7:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14170,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2706:7:56",
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
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14312,
                  "src": "2715:7:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14172,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2715:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2705:18:56"
            },
            "scope": 14513,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 14440,
            "nodeType": "FunctionDefinition",
            "src": "4258:1480:56",
            "nodes": [],
            "body": {
              "id": 14439,
              "nodeType": "Block",
              "src": "4403:1335:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 14330,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14323,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14314,
                      "src": "4633:6:56",
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
                        "id": 14326,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 14324,
                          "name": "shares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14314,
                          "src": "4642:6:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 14325,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14162,
                          "src": "4651:11:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4642:20:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "id": 14328,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14314,
                        "src": "4679:6:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 14329,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "4642:43:56",
                      "trueExpression": {
                        "id": 14327,
                        "name": "totalShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14162,
                        "src": "4665:11:56",
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
                    "src": "4633:52:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 14331,
                  "nodeType": "ExpressionStatement",
                  "src": "4633:52:56"
                },
                {
                  "assignments": [
                    14333
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14333,
                      "mutability": "mutable",
                      "name": "assets",
                      "nameLocation": "4764:6:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 14439,
                      "src": "4756:14:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14332,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4756:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14334,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4756:14:56"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 14340,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 14337,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9215,
                          "src": "4792:10:56",
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
                        "id": 14336,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "4784:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 14335,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "4784:7:56",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 14338,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4784:19:56",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 14339,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 115616,
                      "src": "4807:3:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4784:26:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 14360,
                    "nodeType": "Block",
                    "src": "4873:69:56",
                    "statements": [
                      {
                        "expression": {
                          "id": 14358,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14350,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14333,
                            "src": "4887:6:56",
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
                                    "id": 14355,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "4925:4:56",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$14513",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$14513",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  ],
                                  "id": 14354,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "4917:7:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 14353,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4917:7:56",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 14356,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4917:13:56",
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
                                "id": 14351,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9215,
                                "src": "4896:10:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$3030",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 14352,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4907:9:56",
                              "memberName": "balanceOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 2991,
                              "src": "4896:20:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view external returns (uint256)"
                              }
                            },
                            "id": 14357,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4896:35:56",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4887:44:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14359,
                        "nodeType": "ExpressionStatement",
                        "src": "4887:44:56"
                      }
                    ]
                  },
                  "id": 14361,
                  "nodeType": "IfStatement",
                  "src": "4780:162:56",
                  "trueBody": {
                    "id": 14349,
                    "nodeType": "Block",
                    "src": "4812:55:56",
                    "statements": [
                      {
                        "expression": {
                          "id": 14347,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14341,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14333,
                            "src": "4826:6:56",
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
                                  "id": 14344,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "4843:4:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$14513",
                                    "typeString": "contract MockHyperdriveBase"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$14513",
                                    "typeString": "contract MockHyperdriveBase"
                                  }
                                ],
                                "id": 14343,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4835:7:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 14342,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4835:7:56",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 14345,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4835:13:56",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 14346,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4849:7:56",
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "src": "4835:21:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4826:30:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14348,
                        "nodeType": "ExpressionStatement",
                        "src": "4826:30:56"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 14375,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14362,
                      "name": "withdrawValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14321,
                      "src": "4992:13:56",
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
                        "id": 14365,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 14363,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14162,
                          "src": "5008:11:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 14364,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5023:1:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "5008:16:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 14373,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5097:1:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 14374,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "5008:90:56",
                      "trueExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 14370,
                                "name": "totalShares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14162,
                                "src": "5069:11:56",
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
                                "id": 14368,
                                "name": "assets",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14333,
                                "src": "5054:6:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 14369,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5061:7:56",
                              "memberName": "divDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9849,
                              "src": "5054:14:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 14371,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5054:27:56",
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
                            "id": 14366,
                            "name": "shares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14314,
                            "src": "5039:6:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 14367,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5046:7:56",
                          "memberName": "mulDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9831,
                          "src": "5039:14:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 14372,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5039:43:56",
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
                    "src": "4992:106:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 14376,
                  "nodeType": "ExpressionStatement",
                  "src": "4992:106:56"
                },
                {
                  "expression": {
                    "id": 14379,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14377,
                      "name": "totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14162,
                      "src": "5187:11:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "id": 14378,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14314,
                      "src": "5202:6:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5187:21:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 14380,
                  "nodeType": "ExpressionStatement",
                  "src": "5187:21:56"
                },
                {
                  "assignments": [
                    14382
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14382,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "5223:7:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 14439,
                      "src": "5218:12:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 14381,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "5218:4:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14383,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5218:12:56"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 14389,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 14386,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9215,
                          "src": "5252:10:56",
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
                        "id": 14385,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5244:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 14384,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5244:7:56",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 14387,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5244:19:56",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 14388,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 115616,
                      "src": "5267:3:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5244:26:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 14414,
                    "nodeType": "Block",
                    "src": "5406:90:56",
                    "statements": [
                      {
                        "expression": {
                          "id": 14412,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14405,
                            "name": "success",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14382,
                            "src": "5420:7:56",
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
                                  "id": 14408,
                                  "name": "options",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 14317,
                                  "src": "5450:7:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                                    "typeString": "struct IHyperdrive.Options calldata"
                                  }
                                },
                                "id": 14409,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "5458:11:56",
                                "memberName": "destination",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 3601,
                                "src": "5450:19:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 14410,
                                "name": "withdrawValue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14321,
                                "src": "5471:13:56",
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
                                "id": 14406,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9215,
                                "src": "5430:10:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$3030",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 14407,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5441:8:56",
                              "memberName": "transfer",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 3000,
                              "src": "5430:19:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) external returns (bool)"
                              }
                            },
                            "id": 14411,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5430:55:56",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "5420:65:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 14413,
                        "nodeType": "ExpressionStatement",
                        "src": "5420:65:56"
                      }
                    ]
                  },
                  "id": 14415,
                  "nodeType": "IfStatement",
                  "src": "5240:256:56",
                  "trueBody": {
                    "id": 14404,
                    "nodeType": "Block",
                    "src": "5272:128:56",
                    "statements": [
                      {
                        "expression": {
                          "id": 14402,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "components": [
                              {
                                "id": 14390,
                                "name": "success",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14382,
                                "src": "5287:7:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              null
                            ],
                            "id": 14391,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "TupleExpression",
                            "src": "5286:11:56",
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
                                "id": 14400,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5386:2:56",
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
                                        "id": 14394,
                                        "name": "options",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 14317,
                                        "src": "5308:7:56",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                                          "typeString": "struct IHyperdrive.Options calldata"
                                        }
                                      },
                                      "id": 14395,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "5316:11:56",
                                      "memberName": "destination",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 3601,
                                      "src": "5308:19:56",
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
                                    "id": 14393,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5300:8:56",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_payable_$",
                                      "typeString": "type(address payable)"
                                    },
                                    "typeName": {
                                      "id": 14392,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5300:8:56",
                                      "stateMutability": "payable",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 14396,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5300:28:56",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "id": 14397,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "5329:4:56",
                                "memberName": "call",
                                "nodeType": "MemberAccess",
                                "src": "5300:33:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                  "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                }
                              },
                              "id": 14399,
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
                                  "id": 14398,
                                  "name": "withdrawValue",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 14321,
                                  "src": "5358:13:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "src": "5300:85:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                              }
                            },
                            "id": 14401,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5300:89:56",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                              "typeString": "tuple(bool,bytes memory)"
                            }
                          },
                          "src": "5286:103:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 14403,
                        "nodeType": "ExpressionStatement",
                        "src": "5286:103:56"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "id": 14417,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "5509:8:56",
                    "subExpression": {
                      "id": 14416,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14382,
                      "src": "5510:7:56",
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
                  "id": 14424,
                  "nodeType": "IfStatement",
                  "src": "5505:74:56",
                  "trueBody": {
                    "id": 14423,
                    "nodeType": "Block",
                    "src": "5519:60:56",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 14418,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3759,
                              "src": "5540:11:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 14420,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5552:14:56",
                            "memberName": "TransferFailed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3657,
                            "src": "5540:26:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 14421,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5540:28:56",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 14422,
                        "nodeType": "RevertStatement",
                        "src": "5533:35:56"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 14435,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14425,
                      "name": "withdrawValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14321,
                      "src": "5588:13:56",
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
                          "id": 14426,
                          "name": "options",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14317,
                          "src": "5604:7:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                            "typeString": "struct IHyperdrive.Options calldata"
                          }
                        },
                        "id": 14427,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5612:6:56",
                        "memberName": "asBase",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3604,
                        "src": "5604:14:56",
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
                              "id": 14431,
                              "name": "_pricePerShare",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                14489
                              ],
                              "referencedDeclaration": 14489,
                              "src": "5683:14:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                "typeString": "function () view returns (uint256)"
                              }
                            },
                            "id": 14432,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5683:16:56",
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
                            "id": 14429,
                            "name": "withdrawValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14321,
                            "src": "5661:13:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 14430,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5675:7:56",
                          "memberName": "divDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9849,
                          "src": "5661:21:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 14433,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5661:39:56",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 14434,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "5604:96:56",
                      "trueExpression": {
                        "id": 14428,
                        "name": "withdrawValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14321,
                        "src": "5633:13:56",
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
                    "src": "5588:112:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 14436,
                  "nodeType": "ExpressionStatement",
                  "src": "5588:112:56"
                },
                {
                  "expression": {
                    "id": 14437,
                    "name": "withdrawValue",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14321,
                    "src": "5718:13:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14322,
                  "id": 14438,
                  "nodeType": "Return",
                  "src": "5711:20:56"
                }
              ]
            },
            "baseFunctions": [
              4710
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_withdraw",
            "nameLocation": "4267:9:56",
            "overrides": {
              "id": 14319,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "4362:8:56"
            },
            "parameters": {
              "id": 14318,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14314,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "4294:6:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14440,
                  "src": "4286:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14313,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4286:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14317,
                  "mutability": "mutable",
                  "name": "options",
                  "nameLocation": "4339:7:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14440,
                  "src": "4310:36:56",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 14316,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 14315,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "4310:11:56",
                        "4322:7:56"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3608,
                      "src": "4310:19:56"
                    },
                    "referencedDeclaration": 3608,
                    "src": "4310:19:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$3608_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4276:76:56"
            },
            "returnParameters": {
              "id": 14322,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14321,
                  "mutability": "mutable",
                  "name": "withdrawValue",
                  "nameLocation": "4388:13:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14440,
                  "src": "4380:21:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14320,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4380:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4379:23:56"
            },
            "scope": 14513,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 14489,
            "nodeType": "FunctionDefinition",
            "src": "5744:555:56",
            "nodes": [],
            "body": {
              "id": 14488,
              "nodeType": "Block",
              "src": "5858:441:56",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14447
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14447,
                      "mutability": "mutable",
                      "name": "assets",
                      "nameLocation": "5936:6:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 14488,
                      "src": "5928:14:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14446,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5928:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14448,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5928:14:56"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 14454,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 14451,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9215,
                          "src": "5964:10:56",
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
                        "id": 14450,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5956:7:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 14449,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5956:7:56",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 14452,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5956:19:56",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 14453,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 115616,
                      "src": "5979:3:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5956:26:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 14474,
                    "nodeType": "Block",
                    "src": "6045:69:56",
                    "statements": [
                      {
                        "expression": {
                          "id": 14472,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14464,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14447,
                            "src": "6059:6:56",
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
                                    "id": 14469,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "6097:4:56",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$14513",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$14513",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  ],
                                  "id": 14468,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "6089:7:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 14467,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "6089:7:56",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 14470,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6089:13:56",
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
                                "id": 14465,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9215,
                                "src": "6068:10:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$3030",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 14466,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6079:9:56",
                              "memberName": "balanceOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 2991,
                              "src": "6068:20:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view external returns (uint256)"
                              }
                            },
                            "id": 14471,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6068:35:56",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6059:44:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14473,
                        "nodeType": "ExpressionStatement",
                        "src": "6059:44:56"
                      }
                    ]
                  },
                  "id": 14475,
                  "nodeType": "IfStatement",
                  "src": "5952:162:56",
                  "trueBody": {
                    "id": 14463,
                    "nodeType": "Block",
                    "src": "5984:55:56",
                    "statements": [
                      {
                        "expression": {
                          "id": 14461,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14455,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14447,
                            "src": "5998:6:56",
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
                                  "id": 14458,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "6015:4:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$14513",
                                    "typeString": "contract MockHyperdriveBase"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$14513",
                                    "typeString": "contract MockHyperdriveBase"
                                  }
                                ],
                                "id": 14457,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6007:7:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 14456,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "6007:7:56",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 14459,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6007:13:56",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 14460,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6021:7:56",
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "src": "6007:21:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5998:30:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14462,
                        "nodeType": "ExpressionStatement",
                        "src": "5998:30:56"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 14486,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14476,
                      "name": "sharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14444,
                      "src": "6229:10:56",
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
                        "id": 14479,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 14477,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14162,
                          "src": "6242:11:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 14478,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6257:1:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "6242:16:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 14484,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6291:1:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 14485,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "6242:50:56",
                      "trueExpression": {
                        "arguments": [
                          {
                            "id": 14482,
                            "name": "totalShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14162,
                            "src": "6276:11:56",
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
                            "id": 14480,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14447,
                            "src": "6261:6:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 14481,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6268:7:56",
                          "memberName": "divDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9849,
                          "src": "6261:14:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 14483,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6261:27:56",
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
                    "src": "6229:63:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 14487,
                  "nodeType": "ExpressionStatement",
                  "src": "6229:63:56"
                }
              ]
            },
            "baseFunctions": [
              4716
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_pricePerShare",
            "nameLocation": "5753:14:56",
            "overrides": {
              "id": 14442,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "5808:8:56"
            },
            "parameters": {
              "id": 14441,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5767:2:56"
            },
            "returnParameters": {
              "id": 14445,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14444,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "5842:10:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14489,
                  "src": "5834:18:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14443,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5834:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5833:20:56"
            },
            "scope": 14513,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 14512,
            "nodeType": "FunctionDefinition",
            "src": "6484:174:56",
            "nodes": [],
            "body": {
              "id": 14511,
              "nodeType": "Block",
              "src": "6537:121:56",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 14503,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 14498,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "id": 14495,
                            "name": "_baseToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9215,
                            "src": "6559:10:56",
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
                          "id": 14494,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6551:7:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 14493,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "6551:7:56",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 14496,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6551:19:56",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 14497,
                        "name": "ETH",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115616,
                        "src": "6574:3:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "6551:26:56",
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
                      "id": 14502,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 14499,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "6581:3:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 14500,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6585:5:56",
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "src": "6581:9:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 14501,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6593:1:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "6581:13:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "6551:43:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 14510,
                  "nodeType": "IfStatement",
                  "src": "6547:105:56",
                  "trueBody": {
                    "id": 14509,
                    "nodeType": "Block",
                    "src": "6596:56:56",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 14504,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3759,
                              "src": "6617:11:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 14506,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6629:10:56",
                            "memberName": "NotPayable",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3647,
                            "src": "6617:22:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 14507,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6617:24:56",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 14508,
                        "nodeType": "RevertStatement",
                        "src": "6610:31:56"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              4686
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkMessageValue",
            "nameLocation": "6493:18:56",
            "overrides": {
              "id": 14491,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "6528:8:56"
            },
            "parameters": {
              "id": 14490,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6511:2:56"
            },
            "returnParameters": {
              "id": 14492,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6537:0:56"
            },
            "scope": 14513,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 14156,
              "name": "HyperdriveBase",
              "nameLocations": [
                "2490:14:56"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 5354,
              "src": "2490:14:56"
            },
            "id": 14157,
            "nodeType": "InheritanceSpecifier",
            "src": "2490:14:56"
          }
        ],
        "canonicalName": "MockHyperdriveBase",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          14513,
          5354,
          9465,
          60564
        ],
        "name": "MockHyperdriveBase",
        "nameLocation": "2468:18:56",
        "scope": 14869,
        "usedErrors": [
          3625,
          3631,
          3633,
          3637
        ]
      },
      {
        "id": 14824,
        "nodeType": "ContractDefinition",
        "src": "6662:4295:56",
        "nodes": [
          {
            "id": 14520,
            "nodeType": "UsingForDirective",
            "src": "6726:33:56",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 14518,
              "name": "FixedPointMath",
              "nameLocations": [
                "6732:14:56"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 10533,
              "src": "6732:14:56"
            },
            "typeName": {
              "id": 14519,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "6751:7:56",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 14546,
            "nodeType": "FunctionDefinition",
            "src": "6765:235:56",
            "nodes": [],
            "body": {
              "id": 14545,
              "nodeType": "Block",
              "src": "6998:2:56",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 14526,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14523,
                    "src": "6862:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 14532,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14523,
                            "src": "6917:7:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          ],
                          "id": 14531,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "6891:25:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$3558_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget0_$14853_$",
                            "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget0)"
                          },
                          "typeName": {
                            "id": 14530,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                              "id": 14529,
                              "name": "MockHyperdriveTarget0",
                              "nameLocations": [
                                "6895:21:56"
                              ],
                              "nodeType": "IdentifierPath",
                              "referencedDeclaration": 14853,
                              "src": "6895:21:56"
                            },
                            "referencedDeclaration": 14853,
                            "src": "6895:21:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$14853",
                              "typeString": "contract MockHyperdriveTarget0"
                            }
                          }
                        },
                        "id": 14533,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6891:34:56",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$14853",
                          "typeString": "contract MockHyperdriveTarget0"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$14853",
                          "typeString": "contract MockHyperdriveTarget0"
                        }
                      ],
                      "id": 14528,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6883:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 14527,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6883:7:56",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 14534,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6883:43:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 14540,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14523,
                            "src": "6974:7:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          ],
                          "id": 14539,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "6948:25:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$3558_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget1_$14868_$",
                            "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget1)"
                          },
                          "typeName": {
                            "id": 14538,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                              "id": 14537,
                              "name": "MockHyperdriveTarget1",
                              "nameLocations": [
                                "6952:21:56"
                              ],
                              "nodeType": "IdentifierPath",
                              "referencedDeclaration": 14868,
                              "src": "6952:21:56"
                            },
                            "referencedDeclaration": 14868,
                            "src": "6952:21:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MockHyperdriveTarget1_$14868",
                              "typeString": "contract MockHyperdriveTarget1"
                            }
                          }
                        },
                        "id": 14541,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6948:34:56",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget1_$14868",
                          "typeString": "contract MockHyperdriveTarget1"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget1_$14868",
                          "typeString": "contract MockHyperdriveTarget1"
                        }
                      ],
                      "id": 14536,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6940:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 14535,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6940:7:56",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 14542,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6940:43:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 14543,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 14525,
                  "name": "Hyperdrive",
                  "nameLocations": [
                    "6838:10:56"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 504,
                  "src": "6838:10:56"
                },
                "nodeType": "ModifierInvocation",
                "src": "6838:155:56"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 14524,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14523,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "6816:7:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14546,
                  "src": "6786:37:56",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 14522,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 14521,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "6786:11:56",
                        "6798:10:56"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3558,
                      "src": "6786:22:56"
                    },
                    "referencedDeclaration": 3558,
                    "src": "6786:22:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6776:53:56"
            },
            "returnParameters": {
              "id": 14544,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6998:0:56"
            },
            "scope": 14824,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 14558,
            "nodeType": "FunctionDefinition",
            "src": "7025:138:56",
            "nodes": [],
            "body": {
              "id": 14557,
              "nodeType": "Block",
              "src": "7118:45:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 14555,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14553,
                      "name": "_marketState",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9249,
                      "src": "7128:12:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_MarketState_$3492_storage",
                        "typeString": "struct IHyperdrive.MarketState storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 14554,
                      "name": "_marketState_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14550,
                      "src": "7143:13:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_MarketState_$3492_memory_ptr",
                        "typeString": "struct IHyperdrive.MarketState memory"
                      }
                    },
                    "src": "7128:28:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_MarketState_$3492_storage",
                      "typeString": "struct IHyperdrive.MarketState storage ref"
                    }
                  },
                  "id": 14556,
                  "nodeType": "ExpressionStatement",
                  "src": "7128:28:56"
                }
              ]
            },
            "documentation": {
              "id": 14547,
              "nodeType": "StructuredDocumentation",
              "src": "7006:14:56",
              "text": "Mocks ///"
            },
            "functionSelector": "88348397",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setMarketState",
            "nameLocation": "7034:14:56",
            "parameters": {
              "id": 14551,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14550,
                  "mutability": "mutable",
                  "name": "_marketState_",
                  "nameLocation": "7089:13:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14558,
                  "src": "7058:44:56",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_MarketState_$3492_memory_ptr",
                    "typeString": "struct IHyperdrive.MarketState"
                  },
                  "typeName": {
                    "id": 14549,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 14548,
                      "name": "IHyperdrive.MarketState",
                      "nameLocations": [
                        "7058:11:56",
                        "7070:11:56"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3492,
                      "src": "7058:23:56"
                    },
                    "referencedDeclaration": 3492,
                    "src": "7058:23:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_MarketState_$3492_storage_ptr",
                      "typeString": "struct IHyperdrive.MarketState"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7048:60:56"
            },
            "returnParameters": {
              "id": 14552,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7118:0:56"
            },
            "scope": 14824,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14568,
            "nodeType": "FunctionDefinition",
            "src": "7169:98:56",
            "nodes": [],
            "body": {
              "id": 14567,
              "nodeType": "Block",
              "src": "7224:43:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 14565,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14563,
                      "name": "totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14162,
                      "src": "7234:11:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 14564,
                      "name": "_totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14560,
                      "src": "7248:12:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7234:26:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 14566,
                  "nodeType": "ExpressionStatement",
                  "src": "7234:26:56"
                }
              ]
            },
            "functionSelector": "a77384c1",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setTotalShares",
            "nameLocation": "7178:14:56",
            "parameters": {
              "id": 14561,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14560,
                  "mutability": "mutable",
                  "name": "_totalShares",
                  "nameLocation": "7201:12:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14568,
                  "src": "7193:20:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14559,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7193:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7192:22:56"
            },
            "returnParameters": {
              "id": 14562,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7224:0:56"
            },
            "scope": 14824,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14636,
            "nodeType": "FunctionDefinition",
            "src": "7399:566:56",
            "nodes": [],
            "body": {
              "id": 14635,
              "nodeType": "Block",
              "src": "7450:515:56",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    null,
                    14576
                  ],
                  "declarations": [
                    null,
                    {
                      "constant": false,
                      "id": 14576,
                      "mutability": "mutable",
                      "name": "interest",
                      "nameLocation": "7470:8:56",
                      "nodeType": "VariableDeclaration",
                      "scope": 14635,
                      "src": "7463:15:56",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 14575,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7463:6:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14589,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 14583,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "7566:4:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_MockHyperdrive_$14824",
                                  "typeString": "contract MockHyperdrive"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_MockHyperdrive_$14824",
                                  "typeString": "contract MockHyperdrive"
                                }
                              ],
                              "id": 14582,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "7558:7:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 14581,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "7558:7:56",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 14584,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7558:13:56",
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
                            "id": 14579,
                            "name": "_baseToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9215,
                            "src": "7537:10:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$3030",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 14580,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7548:9:56",
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 2991,
                          "src": "7537:20:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view external returns (uint256)"
                          }
                        },
                        "id": 14585,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7537:35:56",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14586,
                        "name": "apr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14572,
                        "src": "7586:3:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 14587,
                        "name": "time",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14570,
                        "src": "7603:4:56",
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
                        "id": 14577,
                        "name": "HyperdriveUtils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120738,
                        "src": "7482:15:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveUtils_$120738_$",
                          "typeString": "type(library HyperdriveUtils)"
                        }
                      },
                      "id": 14578,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7498:25:56",
                      "memberName": "calculateCompoundInterest",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 118221,
                      "src": "7482:41:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$returns$_t_uint256_$_t_int256_$",
                        "typeString": "function (uint256,int256,uint256) pure returns (uint256,int256)"
                      }
                    },
                    "id": 14588,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7482:135:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_int256_$",
                      "typeString": "tuple(uint256,int256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7460:157:56"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 14592,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 14590,
                      "name": "interest",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14576,
                      "src": "7632:8:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 14591,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7643:1:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "7632:12:56",
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
                      "id": 14613,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 14611,
                        "name": "interest",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14576,
                        "src": "7800:8:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 14612,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7811:1:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "7800:12:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 14633,
                    "nodeType": "IfStatement",
                    "src": "7796:163:56",
                    "trueBody": {
                      "id": 14632,
                      "nodeType": "Block",
                      "src": "7814:145:56",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 14623,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "7893:4:56",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$14824",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$14824",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  ],
                                  "id": 14622,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "7885:7:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 14621,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "7885:7:56",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 14624,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7885:13:56",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 14628,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "UnaryOperation",
                                    "operator": "-",
                                    "prefix": true,
                                    "src": "7924:9:56",
                                    "subExpression": {
                                      "id": 14627,
                                      "name": "interest",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 14576,
                                      "src": "7925:8:56",
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
                                  "id": 14626,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "7916:7:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 14625,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "7916:7:56",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 14629,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7916:18:56",
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
                                        "id": 14617,
                                        "name": "_baseToken",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9215,
                                        "src": "7850:10:56",
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
                                      "id": 14616,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "7842:7:56",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_address_$",
                                        "typeString": "type(address)"
                                      },
                                      "typeName": {
                                        "id": 14615,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7842:7:56",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 14618,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "7842:19:56",
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
                                  "id": 14614,
                                  "name": "ERC20Mintable",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 13194,
                                  "src": "7828:13:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$13194_$",
                                    "typeString": "type(contract ERC20Mintable)"
                                  }
                                },
                                "id": 14619,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7828:34:56",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC20Mintable_$13194",
                                  "typeString": "contract ERC20Mintable"
                                }
                              },
                              "id": 14620,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "7863:4:56",
                              "memberName": "burn",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13193,
                              "src": "7828:39:56",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                "typeString": "function (address,uint256) external"
                              }
                            },
                            "id": 14630,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7828:120:56",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 14631,
                          "nodeType": "ExpressionStatement",
                          "src": "7828:120:56"
                        }
                      ]
                    }
                  },
                  "id": 14634,
                  "nodeType": "IfStatement",
                  "src": "7628:331:56",
                  "trueBody": {
                    "id": 14610,
                    "nodeType": "Block",
                    "src": "7646:144:56",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 14602,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "7725:4:56",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$14824",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$14824",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                ],
                                "id": 14601,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "7717:7:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 14600,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "7717:7:56",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 14603,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7717:13:56",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 14606,
                                  "name": "interest",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 14576,
                                  "src": "7756:8:56",
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
                                "id": 14605,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "7748:7:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 14604,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "7748:7:56",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 14607,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7748:17:56",
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
                                      "id": 14596,
                                      "name": "_baseToken",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9215,
                                      "src": "7682:10:56",
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
                                    "id": 14595,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "7674:7:56",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 14594,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "7674:7:56",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 14597,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "7674:19:56",
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
                                "id": 14593,
                                "name": "ERC20Mintable",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13194,
                                "src": "7660:13:56",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$13194_$",
                                  "typeString": "type(contract ERC20Mintable)"
                                }
                              },
                              "id": 14598,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7660:34:56",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20Mintable_$13194",
                                "typeString": "contract ERC20Mintable"
                              }
                            },
                            "id": 14599,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7695:4:56",
                            "memberName": "mint",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13164,
                            "src": "7660:39:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256) external"
                            }
                          },
                          "id": 14608,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7660:119:56",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 14609,
                        "nodeType": "ExpressionStatement",
                        "src": "7660:119:56"
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
            "nameLocation": "7408:6:56",
            "parameters": {
              "id": 14573,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14570,
                  "mutability": "mutable",
                  "name": "time",
                  "nameLocation": "7423:4:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14636,
                  "src": "7415:12:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14569,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7415:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14572,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "7436:3:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14636,
                  "src": "7429:10:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 14571,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7429:6:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7414:26:56"
            },
            "returnParameters": {
              "id": 14574,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7450:0:56"
            },
            "scope": 14824,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14664,
            "nodeType": "FunctionDefinition",
            "src": "7971:438:56",
            "nodes": [],
            "body": {
              "id": 14663,
              "nodeType": "Block",
              "src": "8196:213:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 14657,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 14649,
                          "name": "totalCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14645,
                          "src": "8207:13:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14650,
                          "name": "governanceCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14647,
                          "src": "8222:18:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 14651,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "8206:35:56",
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
                          "id": 14653,
                          "name": "_amountIn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14638,
                          "src": "8283:9:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14654,
                          "name": "_spotPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14640,
                          "src": "8306:10:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14655,
                          "name": "sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14642,
                          "src": "8330:10:56",
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
                        "id": 14652,
                        "name": "_calculateFeesGivenShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5225,
                        "src": "8244:25:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) view returns (uint256,uint256)"
                        }
                      },
                      "id": 14656,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8244:106:56",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "8206:144:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 14658,
                  "nodeType": "ExpressionStatement",
                  "src": "8206:144:56"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 14659,
                        "name": "totalCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14645,
                        "src": "8368:13:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14660,
                        "name": "governanceCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14647,
                        "src": "8383:18:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 14661,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "8367:35:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 14648,
                  "id": 14662,
                  "nodeType": "Return",
                  "src": "8360:42:56"
                }
              ]
            },
            "functionSelector": "71f88b7c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateFeesGivenShares",
            "nameLocation": "7980:24:56",
            "parameters": {
              "id": 14643,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14638,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "8022:9:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14664,
                  "src": "8014:17:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14637,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8014:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14640,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "8049:10:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14664,
                  "src": "8041:18:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14639,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8041:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14642,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "8077:10:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14664,
                  "src": "8069:18:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14641,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8069:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8004:89:56"
            },
            "returnParameters": {
              "id": 14648,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14645,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "8149:13:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14664,
                  "src": "8141:21:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14644,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8141:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14647,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "8172:18:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14664,
                  "src": "8164:26:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14646,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8164:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8140:51:56"
            },
            "scope": 14824,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14707,
            "nodeType": "FunctionDefinition",
            "src": "8415:911:56",
            "nodes": [],
            "body": {
              "id": 14706,
              "nodeType": "Block",
              "src": "8829:497:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 14697,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 14685,
                          "name": "totalCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14675,
                          "src": "8853:13:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14686,
                          "name": "totalFlatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14677,
                          "src": "8880:12:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14687,
                          "name": "governanceCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14679,
                          "src": "8906:18:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14688,
                          "name": "governanceFlatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14681,
                          "src": "8938:17:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14689,
                          "name": "totalGovernanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14683,
                          "src": "8969:18:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 14690,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "8839:158:56",
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
                          "id": 14692,
                          "name": "_amountOut",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14666,
                          "src": "9038:10:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14693,
                          "name": "_normalizedTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14668,
                          "src": "9062:24:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14694,
                          "name": "_spotPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14670,
                          "src": "9100:10:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14695,
                          "name": "sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14672,
                          "src": "9124:10:56",
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
                        "id": 14691,
                        "name": "_calculateFeesGivenBonds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5301,
                        "src": "9000:24:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256,uint256,uint256)"
                        }
                      },
                      "id": 14696,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9000:144:56",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "src": "8839:305:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 14698,
                  "nodeType": "ExpressionStatement",
                  "src": "8839:305:56"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 14699,
                        "name": "totalCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14675,
                        "src": "9175:13:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14700,
                        "name": "totalFlatFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14677,
                        "src": "9202:12:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14701,
                        "name": "governanceCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14679,
                        "src": "9228:18:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14702,
                        "name": "governanceFlatFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14681,
                        "src": "9260:17:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14703,
                        "name": "totalGovernanceFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14683,
                        "src": "9291:18:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 14704,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "9161:158:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 14684,
                  "id": 14705,
                  "nodeType": "Return",
                  "src": "9154:165:56"
                }
              ]
            },
            "functionSelector": "22d5506b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateFeesGivenBonds",
            "nameLocation": "8424:23:56",
            "parameters": {
              "id": 14673,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14666,
                  "mutability": "mutable",
                  "name": "_amountOut",
                  "nameLocation": "8465:10:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14707,
                  "src": "8457:18:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14665,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8457:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14668,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "8493:24:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14707,
                  "src": "8485:32:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14667,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8485:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14670,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "8535:10:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14707,
                  "src": "8527:18:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14669,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8527:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14672,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "8563:10:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14707,
                  "src": "8555:18:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14671,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8555:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8447:132:56"
            },
            "returnParameters": {
              "id": 14684,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14675,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "8648:13:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14707,
                  "src": "8640:21:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14674,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8640:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14677,
                  "mutability": "mutable",
                  "name": "totalFlatFee",
                  "nameLocation": "8683:12:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14707,
                  "src": "8675:20:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14676,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8675:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14679,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "8717:18:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14707,
                  "src": "8709:26:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14678,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8709:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14681,
                  "mutability": "mutable",
                  "name": "governanceFlatFee",
                  "nameLocation": "8757:17:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14707,
                  "src": "8749:25:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14680,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8749:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14683,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "8796:18:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14707,
                  "src": "8788:26:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14682,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8788:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8626:198:56"
            },
            "scope": 14824,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14728,
            "nodeType": "FunctionDefinition",
            "src": "9375:375:56",
            "nodes": [],
            "body": {
              "id": 14727,
              "nodeType": "Block",
              "src": "9681:69:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 14723,
                        "name": "_shareAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14709,
                        "src": "9717:12:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14724,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14711,
                        "src": "9731:11:56",
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
                      "id": 14722,
                      "name": "_calculateOpenLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7678,
                      "src": "9698:18:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "function (uint256,uint256) view returns (uint256,uint256,uint256,uint256)"
                      }
                    },
                    "id": 14725,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9698:45:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 14721,
                  "id": 14726,
                  "nodeType": "Return",
                  "src": "9691:52:56"
                }
              ]
            },
            "functionSelector": "9bd33498",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenLong",
            "nameLocation": "9384:17:56",
            "parameters": {
              "id": 14712,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14709,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "9419:12:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14728,
                  "src": "9411:20:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14708,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9411:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14711,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "9449:11:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14728,
                  "src": "9441:19:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14710,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9441:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9401:65:56"
            },
            "returnParameters": {
              "id": 14721,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14714,
                  "mutability": "mutable",
                  "name": "shareReservesDelta",
                  "nameLocation": "9535:18:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14728,
                  "src": "9527:26:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14713,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9527:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14716,
                  "mutability": "mutable",
                  "name": "bondReservesDelta",
                  "nameLocation": "9575:17:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14728,
                  "src": "9567:25:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14715,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9567:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14718,
                  "mutability": "mutable",
                  "name": "bondProceeds",
                  "nameLocation": "9614:12:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14728,
                  "src": "9606:20:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14717,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9606:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14720,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "9648:18:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14728,
                  "src": "9640:26:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14719,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9640:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9513:163:56"
            },
            "scope": 14824,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14740,
            "nodeType": "FunctionDefinition",
            "src": "9756:177:56",
            "nodes": [],
            "body": {
              "id": 14739,
              "nodeType": "Block",
              "src": "9871:62:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 14736,
                        "name": "_maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14730,
                        "src": "9912:13:56",
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
                      "id": 14735,
                      "name": "_calculateTimeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4772,
                      "src": "9888:23:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 14737,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9888:38:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14734,
                  "id": 14738,
                  "nodeType": "Return",
                  "src": "9881:45:56"
                }
              ]
            },
            "functionSelector": "68c2ecb8",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemaining",
            "nameLocation": "9765:22:56",
            "parameters": {
              "id": 14731,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14730,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "9805:13:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14740,
                  "src": "9797:21:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14729,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9797:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9787:37:56"
            },
            "returnParameters": {
              "id": 14734,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14733,
                  "mutability": "mutable",
                  "name": "timeRemaining",
                  "nameLocation": "9856:13:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14740,
                  "src": "9848:21:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14732,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9848:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9847:23:56"
            },
            "scope": 14824,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14752,
            "nodeType": "FunctionDefinition",
            "src": "9939:189:56",
            "nodes": [],
            "body": {
              "id": 14751,
              "nodeType": "Block",
              "src": "10060:68:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 14748,
                        "name": "_maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14742,
                        "src": "10107:13:56",
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
                      "id": 14747,
                      "name": "_calculateTimeRemainingScaled",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4809,
                      "src": "10077:29:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 14749,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10077:44:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14746,
                  "id": 14750,
                  "nodeType": "Return",
                  "src": "10070:51:56"
                }
              ]
            },
            "functionSelector": "ca6d38f7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemainingScaled",
            "nameLocation": "9948:28:56",
            "parameters": {
              "id": 14743,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14742,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "9994:13:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14752,
                  "src": "9986:21:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14741,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9986:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9976:37:56"
            },
            "returnParameters": {
              "id": 14746,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14745,
                  "mutability": "mutable",
                  "name": "timeRemaining",
                  "nameLocation": "10045:13:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14752,
                  "src": "10037:21:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14744,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10037:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10036:23:56"
            },
            "scope": 14824,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14761,
            "nodeType": "FunctionDefinition",
            "src": "10134:118:56",
            "nodes": [],
            "body": {
              "id": 14760,
              "nodeType": "Block",
              "src": "10209:43:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 14757,
                      "name": "_latestCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4827,
                      "src": "10226:17:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 14758,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10226:19:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14756,
                  "id": 14759,
                  "nodeType": "Return",
                  "src": "10219:26:56"
                }
              ]
            },
            "functionSelector": "907c0f92",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "latestCheckpoint",
            "nameLocation": "10143:16:56",
            "parameters": {
              "id": 14753,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10159:2:56"
            },
            "returnParameters": {
              "id": 14756,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14755,
                  "mutability": "mutable",
                  "name": "checkpointTime",
                  "nameLocation": "10193:14:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14761,
                  "src": "10185:22:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14754,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10185:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10184:24:56"
            },
            "scope": 14824,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14771,
            "nodeType": "FunctionDefinition",
            "src": "10258:116:56",
            "nodes": [],
            "body": {
              "id": 14770,
              "nodeType": "Block",
              "src": "10320:54:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 14767,
                        "name": "_shareReservesDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14763,
                        "src": "10347:19:56",
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
                      "id": 14766,
                      "name": "_updateLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6610,
                      "src": "10330:16:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$returns$__$",
                        "typeString": "function (int256)"
                      }
                    },
                    "id": 14768,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10330:37:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 14769,
                  "nodeType": "ExpressionStatement",
                  "src": "10330:37:56"
                }
              ]
            },
            "functionSelector": "8120a3e2",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateLiquidity",
            "nameLocation": "10267:15:56",
            "parameters": {
              "id": 14764,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14763,
                  "mutability": "mutable",
                  "name": "_shareReservesDelta",
                  "nameLocation": "10290:19:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14771,
                  "src": "10283:26:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 14762,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10283:6:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10282:28:56"
            },
            "returnParameters": {
              "id": 14765,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10320:0:56"
            },
            "scope": 14824,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14783,
            "nodeType": "FunctionDefinition",
            "src": "10380:167:56",
            "nodes": [],
            "body": {
              "id": 14782,
              "nodeType": "Block",
              "src": "10483:64:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 14779,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14773,
                        "src": "10528:11:56",
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
                      "id": 14778,
                      "name": "_calculateIdleShareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5184,
                      "src": "10500:27:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 14780,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10500:40:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14777,
                  "id": 14781,
                  "nodeType": "Return",
                  "src": "10493:47:56"
                }
              ]
            },
            "functionSelector": "b1b4b170",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateIdleShareReserves",
            "nameLocation": "10389:26:56",
            "parameters": {
              "id": 14774,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14773,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "10433:11:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14783,
                  "src": "10425:19:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14772,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10425:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10415:35:56"
            },
            "returnParameters": {
              "id": 14777,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14776,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14783,
                  "src": "10474:7:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14775,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10474:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10473:9:56"
            },
            "scope": 14824,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14791,
            "nodeType": "FunctionDefinition",
            "src": "10553:93:56",
            "nodes": [],
            "body": {
              "id": 14790,
              "nodeType": "Block",
              "src": "10611:35:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 14788,
                    "name": "totalShares",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14162,
                    "src": "10628:11:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14787,
                  "id": 14789,
                  "nodeType": "Return",
                  "src": "10621:18:56"
                }
              ]
            },
            "functionSelector": "d5002f2e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTotalShares",
            "nameLocation": "10562:14:56",
            "parameters": {
              "id": 14784,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10576:2:56"
            },
            "returnParameters": {
              "id": 14787,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14786,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14791,
                  "src": "10602:7:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14785,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10602:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10601:9:56"
            },
            "scope": 14824,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14811,
            "nodeType": "FunctionDefinition",
            "src": "10652:184:56",
            "nodes": [],
            "body": {
              "id": 14810,
              "nodeType": "Block",
              "src": "10727:109:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 14802,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 14798,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9249,
                        "src": "10737:12:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$3492_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 14800,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10750:13:56",
                      "memberName": "shareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3464,
                      "src": "10737:26:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 14801,
                      "name": "shareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14793,
                      "src": "10766:13:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "10737:42:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 14803,
                  "nodeType": "ExpressionStatement",
                  "src": "10737:42:56"
                },
                {
                  "expression": {
                    "id": 14808,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 14804,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9249,
                        "src": "10789:12:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$3492_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 14806,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10802:12:56",
                      "memberName": "bondReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3467,
                      "src": "10789:25:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 14807,
                      "name": "bondReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14795,
                      "src": "10817:12:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "10789:40:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 14809,
                  "nodeType": "ExpressionStatement",
                  "src": "10789:40:56"
                }
              ]
            },
            "functionSelector": "702db0eb",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setReserves",
            "nameLocation": "10661:11:56",
            "parameters": {
              "id": 14796,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14793,
                  "mutability": "mutable",
                  "name": "shareReserves",
                  "nameLocation": "10681:13:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14811,
                  "src": "10673:21:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 14792,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "10673:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14795,
                  "mutability": "mutable",
                  "name": "bondReserves",
                  "nameLocation": "10704:12:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14811,
                  "src": "10696:20:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 14794,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "10696:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10672:45:56"
            },
            "returnParameters": {
              "id": 14797,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10727:0:56"
            },
            "scope": 14824,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 14823,
            "nodeType": "FunctionDefinition",
            "src": "10842:113:56",
            "nodes": [],
            "body": {
              "id": 14822,
              "nodeType": "Block",
              "src": "10898:57:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 14820,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 14816,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9249,
                        "src": "10908:12:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$3492_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 14818,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "10921:12:56",
                      "memberName": "longExposure",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3473,
                      "src": "10908:25:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 14819,
                      "name": "longExposure",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14813,
                      "src": "10936:12:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "10908:40:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 14821,
                  "nodeType": "ExpressionStatement",
                  "src": "10908:40:56"
                }
              ]
            },
            "functionSelector": "b4f8da39",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setLongExposure",
            "nameLocation": "10851:15:56",
            "parameters": {
              "id": 14814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14813,
                  "mutability": "mutable",
                  "name": "longExposure",
                  "nameLocation": "10875:12:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14823,
                  "src": "10867:20:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 14812,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "10867:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10866:22:56"
            },
            "returnParameters": {
              "id": 14815,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10898:0:56"
            },
            "scope": 14824,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 14514,
              "name": "Hyperdrive",
              "nameLocations": [
                "6689:10:56"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 504,
              "src": "6689:10:56"
            },
            "id": 14515,
            "nodeType": "InheritanceSpecifier",
            "src": "6689:10:56"
          },
          {
            "baseName": {
              "id": 14516,
              "name": "MockHyperdriveBase",
              "nameLocations": [
                "6701:18:56"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 14513,
              "src": "6701:18:56"
            },
            "id": 14517,
            "nodeType": "InheritanceSpecifier",
            "src": "6701:18:56"
          }
        ],
        "canonicalName": "MockHyperdrive",
        "contractDependencies": [
          14853,
          14868
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          14824,
          14513,
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
        "name": "MockHyperdrive",
        "nameLocation": "6671:14:56",
        "scope": 14869,
        "usedErrors": [
          3613,
          3625,
          3631,
          3633,
          3635,
          3637,
          3641,
          3643,
          3647,
          3649,
          3651,
          3657,
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
      },
      {
        "id": 14853,
        "nodeType": "ContractDefinition",
        "src": "10959:327:56",
        "nodes": [
          {
            "id": 14838,
            "nodeType": "FunctionDefinition",
            "src": "11037:94:56",
            "nodes": [],
            "body": {
              "id": 14837,
              "nodeType": "Block",
              "src": "11129:2:56",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 14834,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14831,
                    "src": "11120:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 14835,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 14833,
                  "name": "HyperdriveTarget0",
                  "nameLocations": [
                    "11102:17:56"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1174,
                  "src": "11102:17:56"
                },
                "nodeType": "ModifierInvocation",
                "src": "11102:26:56"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 14832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14831,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "11088:7:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14838,
                  "src": "11058:37:56",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 14830,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 14829,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "11058:11:56",
                        "11070:10:56"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3558,
                      "src": "11058:22:56"
                    },
                    "referencedDeclaration": 3558,
                    "src": "11058:22:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11048:53:56"
            },
            "returnParameters": {
              "id": 14836,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11129:0:56"
            },
            "scope": 14853,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 14852,
            "nodeType": "FunctionDefinition",
            "src": "11156:128:56",
            "nodes": [],
            "body": {
              "id": 14851,
              "nodeType": "Block",
              "src": "11224:60:56",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 14847,
                            "name": "_governanceFeesAccrued",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9268,
                            "src": "11253:22:56",
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
                            "id": 14845,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "11242:3:56",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 14846,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "11246:6:56",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "11242:10:56",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 14848,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11242:34:56",
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
                      "id": 14844,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1173,
                      "src": "11234:7:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 14849,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11234:43:56",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 14850,
                  "nodeType": "ExpressionStatement",
                  "src": "11234:43:56"
                }
              ]
            },
            "documentation": {
              "id": 14839,
              "nodeType": "StructuredDocumentation",
              "src": "11137:14:56",
              "text": "Mocks ///"
            },
            "functionSelector": "8e67f87e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getGovernanceFeesAccrued",
            "nameLocation": "11165:24:56",
            "parameters": {
              "id": 14840,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11189:2:56"
            },
            "returnParameters": {
              "id": 14843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14842,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14852,
                  "src": "11215:7:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14841,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11215:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11214:9:56"
            },
            "scope": 14853,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 14825,
              "name": "HyperdriveTarget0",
              "nameLocations": [
                "10993:17:56"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1174,
              "src": "10993:17:56"
            },
            "id": 14826,
            "nodeType": "InheritanceSpecifier",
            "src": "10993:17:56"
          },
          {
            "baseName": {
              "id": 14827,
              "name": "MockHyperdriveBase",
              "nameLocations": [
                "11012:18:56"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 14513,
              "src": "11012:18:56"
            },
            "id": 14828,
            "nodeType": "InheritanceSpecifier",
            "src": "11012:18:56"
          }
        ],
        "canonicalName": "MockHyperdriveTarget0",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          14853,
          14513,
          1174,
          5801,
          9192,
          7805,
          6967,
          8158,
          4506,
          5354,
          9465,
          60564,
          3999,
          4325
        ],
        "name": "MockHyperdriveTarget0",
        "nameLocation": "10968:21:56",
        "scope": 14869,
        "usedErrors": [
          3625,
          3631,
          3633,
          3637,
          3639,
          3643,
          3657,
          3677,
          3686,
          3703,
          3709,
          3711,
          3733,
          3735,
          3742
        ]
      },
      {
        "id": 14868,
        "nodeType": "ContractDefinition",
        "src": "11288:174:56",
        "nodes": [
          {
            "id": 14867,
            "nodeType": "FunctionDefinition",
            "src": "11366:94:56",
            "nodes": [],
            "body": {
              "id": 14866,
              "nodeType": "Block",
              "src": "11458:2:56",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 14863,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14860,
                    "src": "11449:7:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 14864,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 14862,
                  "name": "HyperdriveTarget1",
                  "nameLocations": [
                    "11431:17:56"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1361,
                  "src": "11431:17:56"
                },
                "nodeType": "ModifierInvocation",
                "src": "11431:26:56"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 14861,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14860,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "11417:7:56",
                  "nodeType": "VariableDeclaration",
                  "scope": 14867,
                  "src": "11387:37:56",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 14859,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 14858,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "11387:11:56",
                        "11399:10:56"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3558,
                      "src": "11387:22:56"
                    },
                    "referencedDeclaration": 3558,
                    "src": "11387:22:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11377:53:56"
            },
            "returnParameters": {
              "id": 14865,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "11458:0:56"
            },
            "scope": 14868,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 14854,
              "name": "HyperdriveTarget1",
              "nameLocations": [
                "11322:17:56"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1361,
              "src": "11322:17:56"
            },
            "id": 14855,
            "nodeType": "InheritanceSpecifier",
            "src": "11322:17:56"
          },
          {
            "baseName": {
              "id": 14856,
              "name": "MockHyperdriveBase",
              "nameLocations": [
                "11341:18:56"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 14513,
              "src": "11341:18:56"
            },
            "id": 14857,
            "nodeType": "InheritanceSpecifier",
            "src": "11341:18:56"
          }
        ],
        "canonicalName": "MockHyperdriveTarget1",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          14868,
          14513,
          1361,
          5801,
          9192,
          7805,
          6967,
          8158,
          4506,
          5354,
          9465,
          60564
        ],
        "name": "MockHyperdriveTarget1",
        "nameLocation": "11297:21:56",
        "scope": 14869,
        "usedErrors": [
          3615,
          3619,
          3623,
          3625,
          3631,
          3633,
          3635,
          3637,
          3641,
          3643,
          3647,
          3649,
          3651,
          3653,
          3657,
          3667,
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
  "id": 56
} as const;
