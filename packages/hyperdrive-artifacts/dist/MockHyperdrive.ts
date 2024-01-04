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
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
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
      "name": "NegativeInterest",
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
          "name": "_bondAmount",
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
          "name": "_shareAmount",
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
          "name": "curveFee",
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
    "object": "0x6102e060405260016000553480156200001757600080fd5b5060405162015141380380620151418339810160408190526200003a916200048a565b80816040516200004a9062000388565b62000056919062000554565b604051809103906000f08015801562000073573d6000803e3d6000fd5b5082604051620000839062000396565b6200008f919062000554565b604051809103906000f080158015620000ac573d6000803e3d6000fd5b5083604051620000bc90620003a4565b620000c8919062000554565b604051809103906000f080158015620000e5573d6000803e3d6000fd5b5084604051620000f590620003b2565b62000101919062000554565b604051809103906000f0801580156200011e573d6000803e3d6000fd5b5084516001600160a01b0316608090815285015185906103e8111562000157576040516349db44f560e01b815260040160405180910390fd5b60808101516101a05260a08101516101c05260e08101516000036200018f57604051635428734d60e01b815260040160405180910390fd5b60e08101805160a0525160c08201511080620001bf57508060e001518160c00151620001bc919062000632565b15155b15620001de5760405163253fffcf60e11b815260040160405180910390fd5b60c081810151905261010081015160e052606081015161018052610120810151600880546001600160a01b0319166001600160a01b03928316179055610140820151166101e05261016081015151670de0b6b3a76400001080620002525750670de0b6b3a764000081610160015160200151115b806200026e5750670de0b6b3a764000081610160015160400151115b156200028d576040516322f72cc360e11b815260040160405180910390fd5b610160818101805151610100528051602090810151610120528151604090810151610140529151606090810151909352808401516001600160a01b03908116610200529382015161022052968316610240529482166102605292811661028052166102a0528151808301835260018152603160f81b9084015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818501527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6818401524691810191909152306080808301919091528251808303909101815260a090910190915280519101206102c05250620006559050565b613cee8062002e7483390190565b614ce98062006b6283390190565b614eb3806200b84b83390190565b614a4380620106fe83390190565b60405161018081016001600160401b0381118282101715620003f257634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200041057600080fd5b919050565b6000608082840312156200042857600080fd5b604051608081016001600160401b03811182821017156200045957634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006101e082840312156200049e57600080fd5b620004a8620003c0565b620004b383620003f8565b8152620004c360208401620003f8565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e082015261010080840151818301525061012062000520818501620003f8565b9082015261014062000534848201620003f8565b90820152610160620005498585830162000415565b908201529392505050565b81516001600160a01b031681526101e0810160208301516200058160208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151620005e6828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016092830151805193830193909352602083015161018083015260408301516101a08301526060909201516101c09091015290565b6000826200065057634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516102a0516102c05161267d620007f7600039600081816104e70152610cd50152600081816108ad0152610a320152600081816106c501528181610ec10152610f250152600081816109010152818161097801528181610c980152610e30015260008181610252015281816103f901528181610948015281816109aa015281816109dc01528181610a6601528181610c5101528181610d6601528181610e790152610ef401526000505060005050600050506000505060008181611218015281816114ce015261150a01526000818161135a015281816113a201526119d301526000505060008181610fc40152818161103d01526111bd0152600081816110110152611415015260008181610f8a0152818161117901526113f4015260008181611338015281816113c301526119f40152600081816111400152611593015260006112e2015260008181610ab401528181610b4e0152610bc1015261267d6000f3fe60806040526004361061023b5760003560e01c80639aa684621161012e578063ca6d38f7116100ab578063dbbe80701161006f578063dbbe807014610873578063ded0623114610473578063e44808bc146108cf578063eac3e799146108ef578063ed64bab2146109235761023b565b8063ca6d38f714610853578063cba2e58d14610873578063cbc134341461036d578063d5002f2e14610886578063d899e1121461089b5761023b565b8063a77384c1116100f2578063a77384c1146106e7578063ab033ea914610707578063ac25d47f14610722578063b1b4b170146107f6578063b4f8da39146108165761023b565b80639aa68462146106605780639bd33498146106735780639cd241af14610693578063a22cb465146105b8578063a6e8a859146106b35761023b565b80634ed2d6ac116101bc57806371f88b7c1161018057806371f88b7c146105d857806377d05ff4146105f85780638120a3e21461060b5780639032c7261461062b578063907c0f921461064b5761023b565b80634ed2d6ac14610529578063680962391461054457806368c2ecb814610564578063702db0eb146105845780637180c8ca146105b85761023b565b806322d5506b1161020357806322d5506b1461043357806329b23fc11461047357806330adf81f146104a15780633644e515146104d55780633e691db9146105095761023b565b806302329a291461034b578063074a6de91461036d57806317fad7fc146103a75780631c0f12b6146103c757806321b57d53146103e7575b34801561024757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161028a929190611ddb565b600060405180830381855af49150503d80600081146102c5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ca565b606091505b509150915081156102ee57604051638bb0a34b60e01b815260040160405180910390fd5b60006102f982611deb565b90506001600160e01b03198116636e64089360e11b1461031b57815160208301fd5b81516003198101600484019081529261033c91810160200190602401611e86565b80519650602001945050505050f35b34801561035757600080fd5b5061036b610366366004611f3d565b610943565b005b34801561037957600080fd5b5061038d610388366004611f6a565b610970565b604080519283526020830191909152015b60405180910390f35b3480156103b357600080fd5b5061036b6103c236600461201d565b6109a5565b3480156103d357600080fd5b5061036b6103e23660046120ae565b6109d7565b3480156103f357600080fd5b5061041b7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161039e565b34801561043f57600080fd5b5061045361044e3660046120f2565b610a07565b60408051948552602085019390935291830152606082015260800161039e565b34801561047f57600080fd5b5061049361048e366004612124565b610a2b565b60405190815260200161039e565b3480156104ad57600080fd5b506104937f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b3480156104e157600080fd5b506104937f000000000000000000000000000000000000000000000000000000000000000081565b34801561051557600080fd5b5061049361052436600461217e565b610a5f565b34801561053557600080fd5b5061036b6103e23660046121b3565b34801561055057600080fd5b5061036b61055f3660046121f9565b610a90565b34801561057057600080fd5b5061049361057f36600461221b565b610c3b565b34801561059057600080fd5b5061036b61059f36600461224b565b6001600160801b03908116600160801b02911617600155565b3480156105c457600080fd5b5061036b6105d336600461227e565b610c4c565b3480156105e457600080fd5b5061038d6105f33660046122a8565b610c75565b610493610606366004611f6a565b610c91565b34801561061757600080fd5b5061036b61062636600461221b565b610cc4565b34801561063757600080fd5b5061036b6106463660046122d4565b610cd0565b34801561065757600080fd5b50610493610e1a565b61049361066e366004612124565b610e29565b34801561067f57600080fd5b5061045361068e3660046121f9565b610e54565b34801561069f57600080fd5b5061036b6106ae36600461234e565b610e74565b3480156106bf57600080fd5b5061041b7f000000000000000000000000000000000000000000000000000000000000000081565b3480156106f357600080fd5b5061036b61070236600461221b565b601055565b34801561071357600080fd5b5061036b610366366004612383565b34801561072e57600080fd5b5061036b61073d3660046123b0565b805160208201516001600160801b03908116600160801b90810292821692909217600155604083015160608401518216830290821617600255608083015160a0840151821683029082161760035560c083015160e0840151821683029082161760045561010083015160058054610120860151610140909601511515600160881b0260ff60881b1996151590950270ffffffffffffffffffffffffffffffffff1990911692909316919091179190911792909216179055565b34801561080257600080fd5b5061049361081136600461221b565b610ea3565b34801561082257600080fd5b5061036b61083136600461248a565b600380546001600160801b0319166001600160801b0392909216919091179055565b34801561085f57600080fd5b5061049361086e36600461221b565b610eae565b61038d610881366004612124565b610eb9565b34801561089257600080fd5b50601054610493565b3480156108a757600080fd5b5061041b7f000000000000000000000000000000000000000000000000000000000000000081565b3480156108db57600080fd5b5061036b6108ea3660046124a5565b610eef565b3480156108fb57600080fd5b5061041b7f000000000000000000000000000000000000000000000000000000000000000081565b34801561092f57600080fd5b5061036b61093e36600461221b565b610f20565b61096c7f0000000000000000000000000000000000000000000000000000000000000000610f45565b5050565b60008061099c7f0000000000000000000000000000000000000000000000000000000000000000610f45565b50935093915050565b6109ce7f0000000000000000000000000000000000000000000000000000000000000000610f45565b50505050505050565b610a007f0000000000000000000000000000000000000000000000000000000000000000610f45565b5050505050565b600080600080610a1988888888610f65565b929b919a509850909650945050505050565b6000610a567f0000000000000000000000000000000000000000000000000000000000000000610f45565b50949350505050565b6000610a8a7f0000000000000000000000000000000000000000000000000000000000000000610f45565b50919050565b6040516370a0823160e01b8152306004820152600090610b26906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610afb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1f91906124fc565b8385611079565b9150506000811315610bae576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b158015610b9a57600080fd5b505af11580156109ce573d6000803e3d6000fd5b6000811215610c36576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac30610bf08461252b565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015610b9a57600080fd5b505050565b6000610c4682611113565b92915050565b610c367f0000000000000000000000000000000000000000000000000000000000000000610f45565b600080610c8385858561116b565b90925090505b935093915050565b6000610cbc7f0000000000000000000000000000000000000000000000000000000000000000610f45565b509392505050565b610ccd816111eb565b50565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b17905251610dc09190612547565b600060405180830381855af49150503d8060008114610dfb576040519150601f19603f3d011682016040523d82523d6000602084013e610e00565b606091505b509150915081610e1257805160208201fd5b805160208201f35b6000610e246112db565b905090565b6000610a567f0000000000000000000000000000000000000000000000000000000000000000610f45565b600080600080610e648686611311565b9299919850965090945092505050565b610e9d7f0000000000000000000000000000000000000000000000000000000000000000610f45565b50505050565b6000610c46826114ac565b6000610c4682611548565b600080610ee57f0000000000000000000000000000000000000000000000000000000000000000610f45565b5094509492505050565b610f187f0000000000000000000000000000000000000000000000000000000000000000610f45565b505050505050565b61096c7f00000000000000000000000000000000000000000000000000000000000000005b6060600080836001600160a01b0316600036604051610dc0929190611ddb565b6000808080610fbc8786610fb58b610faf610f888c670de0b6b3a7640000612563565b7f0000000000000000000000000000000000000000000000000000000000000000906115be565b906115be565b91906115cf565b9350610fe8847f00000000000000000000000000000000000000000000000000000000000000006115be565b9150600061100961100189670de0b6b3a7640000612563565b8a90886115cf565b9050611035817f00000000000000000000000000000000000000000000000000000000000000006115be565b9350611061847f00000000000000000000000000000000000000000000000000000000000000006115be565b61106b9084612576565b915050945094509450949050565b6000808061108b846301e133806115ed565b905060006110aa82600088126110a15787610faf565b610faf8861252b565b905060008613156110dd576110c86110c182611602565b88906115be565b93506110d48785612563565b92505050610c89565b6000861215611105576110f96110f282611602565b88906115ed565b93506110d48785612589565b509495600095509350505050565b60008061111e6112db565b905080831161112e576000611138565b6111388184612563565b9150611164827f00000000000000000000000000000000000000000000000000000000000000006115ed565b9392505050565b6000806111b585610faf85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006111ab818c6115ed565b610faf9190612563565b91506111e1827f00000000000000000000000000000000000000000000000000000000000000006115be565b9050935093915050565b6001546002546001600160801b0380831692600f9290920b91600160801b9004166000808061123d8686867f00000000000000000000000000000000000000000000000000000000000000008b61178d565b925092509250858314611274576112538361183a565b600180546001600160801b0319166001600160801b03929092169190911790555b8482146112a55761128482611864565b600280546001600160801b0319166001600160801b03929092169190911790555b8381146109ce576112b58161183a565b600180546001600160801b03928316600160801b02921691909117905550505050505050565b60006113077f0000000000000000000000000000000000000000000000000000000000000000426125c6565b610e249042612563565b60008060008061137e6113226118b4565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006118d5565b925060006113e761138d6118b4565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611901565b905061143e8785611439847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611921565b61199a565b1561145c5760405163512095c760e01b815260040160405180910390fd5b60008061146a89848a61116b565b90925090506114798287612563565b94506114858186612576565b955061149281848a6115cf565b935061149e848a612563565b965050505092959194509250565b60035460009081906114c7906001600160801b0316846115ed565b90506114f37f000000000000000000000000000000000000000000000000000000000000000082612576565b6001546001600160801b03161115610a8a576001547f00000000000000000000000000000000000000000000000000000000000000009061153e9083906001600160801b0316612563565b6111649190612563565b600080670de0b6b3a764000061155c6112db565b61156691906125da565b9050808311611576576000611580565b6115808184612563565b91506111646115b7670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006125da565b83906115ed565b60006111648383670de0b6b3a76400005b60008260001904841183021582026115e657600080fd5b5091020490565b600061116483670de0b6b3a7640000846115cf565b6000680248ce36a70cb26b3e19821361161d57506000919050565b680755bf798b4a1bf1e582126116465760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000806000836000036117a757508691508590508461182f565b60006117b3858a6125f1565b9050858112156117d65760405163585fe6df60e11b815260040160405180910390fd5b809350600088126117f3576117ec84898b6115cf565b9250611813565b6118076117ff8961252b565b85908b6115cf565b6118109061252b565b92505b61182b876118218b8b611a23565b610fb58787611a23565b9150505b955095509592505050565b6000600160801b821061186057604051630f0af95160e11b815260040160405180910390fd5b5090565b60006f7fffffffffffffffffffffffffffffff19821280159061189757506f7fffffffffffffffffffffffffffffff8213155b6118605760405163a5353be560e01b815260040160405180910390fd5b600154600254600091610e24916001600160801b0390911690600f0b611a23565b60006118f68787876118ef88670de0b6b3a7640000612563565b8787611a40565b979650505050505050565b6000611918826119128588886115cf565b90611ae8565b95945050505050565b600061199261196861193b84670de0b6b3a7640000612563565b611962670de0b6b3a7640000611951818a611b49565b61195b9190612563565b8790611b5e565b90611b5e565b61197a90670de0b6b3a7640000612576565b61198c84670de0b6b3a7640000612563565b906115ed565b949350505050565b600080611a18856119a96118b4565b6119b39190612576565b6001546119d1908790600160801b90046001600160801b0316612563565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611901565b909210949350505050565b600080611a308385612589565b9050600081121561116457600080fd5b600080611a508888878787611b73565b9050611a6a85611912611a63898c612576565b86906115be565b9750611a778489856115cf565b97506000611a858983612563565b9050670de0b6b3a76400008110611ab957611ab2611aab670de0b6b3a764000088611b49565b8290611ae8565b9050611ad1565b611ace611aab670de0b6b3a7640000886115ed565b90505b611adb8189612563565b9998505050505050505050565b600081600003611b015750670de0b6b3a7640000610c46565b82600003611b1157506000610c46565b816000611b1d85611ba2565b9050818102611b34670de0b6b3a764000082612619565b9050611b3f81611602565b9695505050505050565b600061116483670de0b6b3a764000084611db5565b60006111648383670de0b6b3a7640000611db5565b6000611b7f8585611ae8565b611b98611b9086611912868b611b5e565b859085611db5565b611b3f9190612576565b6000808213611bc457604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000826000190484118302158202611dcc57600080fd5b50910281810615159190040190565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015611e1a5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610160810167ffffffffffffffff81118282101715611e5c57611e5c611e22565b60405290565b60005b83811015611e7d578181015183820152602001611e65565b50506000910152565b600060208284031215611e9857600080fd5b815167ffffffffffffffff80821115611eb057600080fd5b818401915084601f830112611ec457600080fd5b815181811115611ed657611ed6611e22565b604051601f8201601f19908116603f01168101908382118183101715611efe57611efe611e22565b81604052828152876020848701011115611f1757600080fd5b6118f6836020830160208801611e62565b80358015158114611f3857600080fd5b919050565b600060208284031215611f4f57600080fd5b61116482611f28565b600060608284031215610a8a57600080fd5b600080600060608486031215611f7f57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115611fa457600080fd5b611fb086828701611f58565b9150509250925092565b80356001600160a01b0381168114611f3857600080fd5b60008083601f840112611fe357600080fd5b50813567ffffffffffffffff811115611ffb57600080fd5b6020830191508360208260051b850101111561201657600080fd5b9250929050565b6000806000806000806080878903121561203657600080fd5b61203f87611fba565b955061204d60208801611fba565b9450604087013567ffffffffffffffff8082111561206a57600080fd5b6120768a838b01611fd1565b9096509450606089013591508082111561208f57600080fd5b5061209c89828a01611fd1565b979a9699509497509295939492505050565b600080600080608085870312156120c457600080fd5b843593506120d460208601611fba565b92506120e260408601611fba565b9396929550929360600135925050565b6000806000806080858703121561210857600080fd5b5050823594602084013594506040840135936060013592509050565b6000806000806080858703121561213a57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561216657600080fd5b61217287828801611f58565b91505092959194509250565b60006020828403121561219057600080fd5b813567ffffffffffffffff8111156121a757600080fd5b61199284828501611f58565b600080600080608085870312156121c957600080fd5b843593506121d960208601611fba565b9250604085013591506121ee60608601611fba565b905092959194509250565b6000806040838503121561220c57600080fd5b50508035926020909101359150565b60006020828403121561222d57600080fd5b5035919050565b80356001600160801b0381168114611f3857600080fd5b6000806040838503121561225e57600080fd5b61226783612234565b915061227560208401612234565b90509250929050565b6000806040838503121561229157600080fd5b61229a83611fba565b915061227560208401611f28565b6000806000606084860312156122bd57600080fd5b505081359360208301359350604090920135919050565b600080600080600080600060e0888a0312156122ef57600080fd5b6122f888611fba565b965061230660208901611fba565b955061231460408901611f28565b945060608801359350608088013560ff8116811461233157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060006060848603121561236357600080fd5b8335925061237360208501611fba565b9150604084013590509250925092565b60006020828403121561239557600080fd5b61116482611fba565b8035600f81900b8114611f3857600080fd5b600061016082840312156123c357600080fd5b6123cb611e38565b6123d483612234565b81526123e260208401612234565b60208201526123f36040840161239e565b604082015261240460608401612234565b606082015261241560808401612234565b608082015261242660a08401612234565b60a082015261243760c08401612234565b60c082015261244860e08401612234565b60e082015261010061245b818501612234565b9082015261012061246d848201611f28565b9082015261014061247f848201611f28565b908201529392505050565b60006020828403121561249c57600080fd5b61116482612234565b600080600080600060a086880312156124bd57600080fd5b853594506124cd60208701611fba565b93506124db60408701611fba565b9250606086013591506124f060808701611fba565b90509295509295909350565b60006020828403121561250e57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b820161254057612540612515565b5060000390565b60008251612559818460208701611e62565b9190910192915050565b81810381811115610c4657610c46612515565b80820180821115610c4657610c46612515565b81810360008312801583831316838312821617156125a9576125a9612515565b5092915050565b634e487b7160e01b600052601260045260246000fd5b6000826125d5576125d56125b0565b500690565b8082028115828204841417610c4657610c46612515565b808201828112600083128015821682158216171561261157612611612515565b505092915050565b600082612628576126286125b0565b600160ff1b82146000198414161561264257612642612515565b50059056fea26469706673582212208f3014d395668fa2708209f3797ffb65d4291a17377559f06951fd5136f8af8564736f6c6343000813003361024060405260016000553480156200001757600080fd5b5060405162003cee38038062003cee8339810160408190526200003a91620002c2565b80516001600160a01b03166080908152810151819081906103e8111562000074576040516349db44f560e01b815260040160405180910390fd5b60808101516101a05260a08101516101c05260e0810151600003620000ac57604051635428734d60e01b815260040160405180910390fd5b60e08101805160a0525160c08201511080620000dc57508060e001518160c00151620000d991906200038c565b15155b15620000fb5760405163253fffcf60e11b815260040160405180910390fd5b60c081810151905261010081015160e052606081015161018052610120810151600880546001600160a01b0319166001600160a01b03928316179055610140820151166101e05261016081015151670de0b6b3a764000010806200016f5750670de0b6b3a764000081610160015160200151115b806200018b5750670de0b6b3a764000081610160015160400151115b15620001aa576040516322f72cc360e11b815260040160405180910390fd5b61016080820180515161010052805160209081015161012052815160409081015161014052915160600151909252908201516001600160a01b03166102005201516102205250620003af9050565b60405161018081016001600160401b03811182821017156200022a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200024857600080fd5b919050565b6000608082840312156200026057600080fd5b604051608081016001600160401b03811182821017156200029157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006101e08284031215620002d657600080fd5b620002e0620001f8565b620002eb8362000230565b8152620002fb6020840162000230565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206200035881850162000230565b908201526101406200036c84820162000230565b9082015261016062000381858583016200024d565b908201529392505050565b600082620003aa57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051613819620004d56000396000818161095601526117660152600081816109270152611729015260008181610a840152818161149a015281816115140152611582015260006109c80152600081816109a201526119d801526000818161097c01526119b201526000610b3001526000610b0a01526000610ae401526000610abe015260008181610a3a01526119fe0152600081816109ee01528181610c8f0152612077015260008181610a1401526121760152600081816108f801528181610c50015281816118300152818161187901528181611d4201528181611d8b01528181611e650152611f0301526138196000f3fe608060405234801561001057600080fd5b50600436106101c35760003560e01c80638e67f87e116100f9578063c55dae6311610097578063d816574311610071578063d8165743146103ce578063e44808bc146103e3578063e985e9c5146103f6578063fba560081461041957600080fd5b8063c55dae631461039b578063c69e16ad14610312578063cf210e65146103bb57600080fd5b8063ab033ea9116100d3578063ab033ea914610340578063b0d9658014610353578063bd85b03914610368578063becee9c31461037b57600080fd5b80638e67f87e146103125780639cd241af1461031a578063a22cb4651461032d57600080fd5b80633656eec2116101665780634ed2d6ac116101405780634ed2d6ac146102c457806360246c88146102d75780637180c8ca146102ec5780637ecebe00146102ff57600080fd5b80633656eec21461028b5780633e691db91461029e5780634e41a1fb146102b157600080fd5b806317fad7fc116101a257806317fad7fc146102195780631c0f12b61461022c57806320fc48811461023f57806321ff32a91461026a57600080fd5b8062ad800c146101c857806302329a29146101f157806314e5f07b14610206575b600080fd5b6101db6101d6366004612d7b565b610448565b6040516101e89190612de4565b60405180910390f35b6102046101ff366004612e05565b61047f565b005b610204610214366004612e39565b61048b565b610204610227366004612f16565b6104a7565b61020461023a366004612fa7565b6104bd565b61025261024d366004612d7b565b6104d0565b60405190516001600160801b031681526020016101e8565b61027d610278366004612feb565b610511565b6040519081526020016101e8565b61027d610299366004613027565b610557565b61027d6102ac366004613053565b610590565b6101db6102bf366004612d7b565b61059b565b6102046102d236600461308e565b6105a9565b6102df6105f7565b6040516101e891906130d4565b6102046102fa36600461316a565b610802565b61027d61030d3660046131a1565b610810565b61027d61083c565b6102046103283660046131bc565b610859565b61020461033b36600461316a565b61086a565b61020461034e3660046131a1565b6108d6565b61035b6108df565b6040516101e891906131f1565b61027d610376366004612d7b565b610b65565b61038e6103893660046132ce565b610b87565b6040516101e89190613310565b6103a3610c42565b6040516001600160a01b0390911681526020016101e8565b61027d6103c9366004612d7b565b610c82565b6103d6610ccb565b6040516101e89190613354565b6102046103f1366004613451565b610d39565b6104096104043660046134a8565b610d81565b60405190151581526020016101e8565b610421610dc5565b6040805182516001600160801b0390811682526020938401511692810192909252016101e8565b606061047a61045683610e24565b6040516020016104669190612de4565b604051602081830303815290604052610f52565b919050565b61048881610f76565b50565b61049c898989898989898989610fc3565b505050505050505050565b6104b58686868686866111d6565b505050505050565b6104ca848484843361128a565b50505050565b60408051602081019091526000815261047a6007600084815260200190815260200160002060405160200161046691546001600160801b0316815260200190565b6000838152600e602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526105509101610466565b9392505050565b6000828152600b602090815260408083206001600160a01b038516845282528083205481519283015261058a9101610466565b92915050565b600061058a8261144b565b606061047a610456836115f9565b836105b3816116eb565b6001600160a01b0316336001600160a01b0316146105e457604051632aab8bd360e01b815260040160405180910390fd5b6105f0858585856117a8565b5050505050565b610669604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000610673611815565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b03909216916106de91906134fe565b6106e89190613511565b905060008083116106fa576000610715565b6107158361070f61070a86611914565b611a76565b90611aa6565b604080516101c0810182526001546001600160801b038082168352600254600f81900b6020850152600160801b9081900482169484019490945290839004811660608301526080820186905260a08201879052600354839004811660c0830152600454838104821660e08401528116610100830152600554811661012083015260065480821661014084015292909204909116610160820152909150600090610180810184156107ce576107c98486611abb565b6107d1565b60005b81526003546001600160801b03166020918201526040519192506107fb91610466918491016130d4565b5050505090565b61080c8282611ad0565b5050565b6001600160a01b0381166000908152600f602090815260408083205481519283015261047a9101610466565b600061085660095460405160200161046691815260200190565b90565b610865838383336117a8565b505050565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61048881611b48565b6108e7612ccb565b6108566040518061018001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081525081525060405160200161046691906131f1565b6000818152600c602090815260408083205481519283015261047a9101610466565b606060008267ffffffffffffffff811115610ba457610ba4613524565b604051908082528060200260200182016040528015610bcd578160200160208202803683370190505b50905060005b83811015610c26576000858583818110610bef57610bef61353a565b90506020020135905060008154905080848481518110610c1157610c1161353a565b60209081029190910101525050600101610bd3565b50610c3b816040516020016104669190613310565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916108569101610466565b600061047a610cb9610cb47f0000000000000000000000000000000000000000000000000000000000000000856134fe565b611bbc565b60405160200161046691815260200190565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915261085660016040516020016104669190613550565b84610d43816116eb565b6001600160a01b0316336001600160a01b031614610d7457604051632aab8bd360e01b815260040160405180910390fd5b6104b5868686868661128a565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff909116151591810191909152909161058a9101610466565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261085690606001610466565b606060f882901c6001600160f81b0383166000610e4082611c04565b90506000836003811115610e5657610e566134d2565b03610e88576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350610f4a565b6001836003811115610e9c57610e9c6134d2565b03610ec85780604051602001610eb291906135de565b6040516020818303038152906040529350610f4a565b6002836003811115610edc57610edc6134d2565b03610ef25780604051602001610eb29190613617565b6003836003811115610f0657610f066134d2565b03610f4a576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b8152600401610f6d9190612de4565b60405180910390fd5b336000908152600a602052604090205460ff16610fa5576040516282b42960e81b815260040160405180910390fd5b60058054911515600160881b0260ff60881b19909216919091179055565b83421115610fe45760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b03871661100b5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156110f9573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461113757604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600f60205260408120805490919061115d90613651565b909155506001600160a01b038981166000818152600d60209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b03861615806111f357506001600160a01b038516155b156112115760405163f0dd15fd60e01b815260040160405180910390fd5b8281146112315760405163174861a760e31b815260040160405180910390fd5b60005b83811015611281576112798585838181106112515761125161353a565b90506020020135888886868681811061126c5761126c61353a565b905060200201353361128a565b600101611234565b50505050505050565b6001600160a01b03841615806112a757506001600160a01b038316155b156112c55760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611389576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff16611389576000858152600e602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611387576000868152600e602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290611381908490613511565b90915550505b505b6000858152600b602090815260408083206001600160a01b0388168452909152812080548492906113bb908490613511565b90915550506000858152600b602090815260408083206001600160a01b0387168452909152812080548492906113f29084906134fe565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000805460011461148b5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610f6d565b60026000556001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166114c760208401846131a1565b6001600160a01b0316146114ee57604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff161580156115375750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b801561154e57506008546001600160a01b03163314155b1561156b576040516282b42960e81b815260040160405180910390fd5b60098054600090915561157e8184611d11565b91507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e476115dd846115d7611815565b87611ffd565b60405190815260200160405180910390a2506001600055919050565b606060f882901c6001600160f81b038316600061161582611c04565b9050600083600381111561162b5761162b6134d2565b0361165d576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350610f4a565b6001836003811115611671576116716134d2565b036116875780604051602001610eb2919061366a565b600283600381111561169b5761169b6134d2565b036116b15780604051602001610eb291906136a2565b60038360038111156116c5576116c56134d2565b03610f4a576040516c485950455244524956452d575360981b6020820152602d01610f38565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016118645750476118ef565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156118c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118ec91906136ce565b90505b60105460000361190057600061190e565b60105461190e908290611abb565b91505090565b61197160405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600254600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c0830152600354819004831660e08301526004549192610100840192611a469290041661202c565b81526004546001600160801b039081166020830152600554604090920191611a6e911661202c565b905292915050565b6000806000611a84846120a2565b9150915080610c3b5760405163aeeb825d60e01b815260040160405180910390fd5b60006105508383670de0b6b3a764000061211c565b600061055083670de0b6b3a76400008461211c565b6008546001600160a01b03163314611afa576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6008546001600160a01b03163314611b72576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000600c6000611bcd60028561213a565b815260200190815260200160002054600c6000611beb60018661213a565b81526020019081526020016000205461058a91906136e7565b60408051604d808252608082019092526060919060009082602082018180368337019050509050611c36600a8561371d565b611c419060306134fe565b60f81b81611c50600185613511565b81518110611c6057611c6061353a565b60200101906001600160f81b031916908160001a905350611c82600a85613731565b935060015b8415611d0357611c98600a8661371d565b611ca39060306134fe565b60f81b826001611cb38487613511565b611cbd9190613511565b81518110611ccd57611ccd61353a565b60200101906001600160f81b031916908160001a905350611cef600a86613731565b945080611cfb81613651565b915050611c87565b918290030190815292915050565b60006010548311611d225782611d26565b6010545b9250600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611d76575047611e01565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611dda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dfe91906136ce565b90505b601054600003611e12576000611e31565b611e31611e2a60105483611abb90919063ffffffff16565b8590611aa6565b91508360106000828254611e459190613511565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611ef957611e9f60208501856131a1565b6001600160a01b03168360405160006040518083038185875af1925050503d8060008114611ee9576040519150601f19603f3d011682016040523d82523d6000602084013e611eee565b606091505b505080915050611fa9565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb611f3560208701876131a1565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018690526044016020604051808303816000875af1158015611f82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fa69190613745565b90505b80611fc7576040516312171d8360e31b815260040160405180910390fd5b611fd76040850160208601612e05565b611ff257611fed611fe6611815565b8490611abb565b611ff4565b825b95945050505050565b600061200f6040830160208401612e05565b1561201b575082610550565b6120258484611aa6565b9050610550565b600080670de0b6b3a764000061204061216f565b61204a9190613762565b905080831161205a576000612064565b6120648184613511565b915061055061209b670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613762565b8390611abb565b60008060008060006120b3866121aa565b91509150806120ca57506000958695509350505050565b8560a001516120d8876123ed565b87516120e5908590613779565b6120ef9190613779565b6120f991906136e7565b9250505060008112156121125750600093849350915050565b9360019350915050565b600082600019048411830215820261213357600080fd5b5091020490565b60006001600160f81b038211156121645760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600061219b7f00000000000000000000000000000000000000000000000000000000000000004261371d565b6121a59042613511565b905090565b60008060006121cc846101400151856101200151611aa690919063ffffffff16565b61010085015160e08601516121e091611aa6565b6121ea91906136e7565b9050600061220085600001518660200151612454565b90506000821315612303576000829050600080612251886000015189602001518a604001518b60a001518c60c00151670de0b6b3a76400006122429190613511565b8d606001518e60800151612471565b915091508061226a575060009788975095505050505050565b8282106122bf5760006122a4858a60400151868c60c00151670de0b6b3a76400006122959190613511565b8d606001518e60800151612560565b90506122af81613799565b9960019950975050505050505050565b60008860200151126122f25760a08801516122da9085613511565b6122e390613799565b98600198509650505050505050565b60a088015188516122da9190613511565b60008212156123df57600061231783613799565b9050600061234b8388604001518960c00151670de0b6b3a764000061233c9190613511565b8a606001518b6080015161259f565b90508181106123875760006122e3848960400151858b60c00151670de0b6b3a76400006123789190613511565b8c606001518d60800151612635565b60006123b98489604001518a60c00151670de0b6b3a76400006123aa9190613511565b8b606001518c608001516126d7565b90506123d5886060015183856123cf9190613511565b90611abb565b6122e390826134fe565b506000946001945092505050565b600061241c826101000151670de0b6b3a764000061240b9190613511565b606084015160e0850151919061211c565b61244a836101400151670de0b6b3a76400006124389190613511565b6060850151610120860151919061211c565b61058a91906136e7565b60008061246183856136e7565b9050600081121561055057600080fd5b60008060008812156124935761248688613799565b61249090876134fe565b95505b600061249f8a8a612454565b905060006124b0828a898989612766565b905060006124d36124cb896124c5898d61279f565b906127b4565b88908861280b565b6124dd9083613511565b9050670de0b6b3a764000081106125115761250a612503670de0b6b3a76400008a611abb565b82906127b4565b9050612529565b612526612503670de0b6b3a76400008a612831565b90505b898110156125405760008094509450505050612554565b61254a8a82613511565b6001945094505050505b97509795505050505050565b600080612571888888888888612846565b90925090508061259457604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000806125af8787878787612908565b905060006125da670de0b6b3a76400006125c98787611abb565b6125d391906134fe565b8390612831565b9050670de0b6b3a7640000811061260757612600612503670de0b6b3a764000088612831565b905061261f565b61261c612503670de0b6b3a764000088611abb565b90505b6126298188613511565b98975050505050505050565b6000806126458888878787612908565b9050612655856124c5888a613511565b9650600061266f84866126688b86613511565b919061280b565b9050670de0b6b3a7640000811061269c57612695612503670de0b6b3a764000088612831565b90506126b4565b6126b1612503670de0b6b3a764000088611abb565b90505b6126be8185612831565b90506126ca8982613511565b9998505050505050505050565b6000806126e78787878787612766565b9050600061270b670de0b6b3a76400006127018787612831565b61209b91906134fe565b9050670de0b6b3a7640000811061273857612731612503670de0b6b3a764000088611abb565b9050612750565b61274d612503670de0b6b3a764000088612831565b90505b61275a8185611abb565b90506126298882613511565b600061277285856127b4565b61278b612783866124c5868b611aa6565b85908561211c565b61279591906134fe565b9695505050505050565b60006105508383670de0b6b3a764000061280b565b6000816000036127cd5750670de0b6b3a764000061058a565b826000036127dd5750600061058a565b8160006127e98561292d565b9050818102612800670de0b6b3a7640000826137b5565b905061279581612b40565b600082600019048411830215820261282257600080fd5b50910281810615159190040190565b600061055083670de0b6b3a76400008461280b565b60008060006128588989888888612908565b9050612868866124c5898b6134fe565b97508781101561287f5760008092509250506128fd565b600061289085876126688c86613511565b9050670de0b6b3a764000081106128bd576128b6612503670de0b6b3a764000089612831565b90506128d5565b6128d2612503670de0b6b3a764000089611abb565b90505b6128df8186612831565b9050808a11156128f6576128f3818b613511565b93505b6001925050505b965096945050505050565b600061291485856127b4565b61278b612925866124c5868b61279f565b85908561280b565b600080821361294f57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213612b5b57506000919050565b680755bf798b4a1bf1e58212612b845760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001612d766040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b600060208284031215612d8d57600080fd5b5035919050565b60005b83811015612daf578181015183820152602001612d97565b50506000910152565b60008151808452612dd0816020860160208601612d94565b601f01601f19169290920160200192915050565b6020815260006105506020830184612db8565b801515811461048857600080fd5b600060208284031215612e1757600080fd5b813561055081612df7565b80356001600160a01b038116811461047a57600080fd5b60008060008060008060008060006101208a8c031215612e5857600080fd5b8935985060208a01359750612e6f60408b01612e22565b9650612e7d60608b01612e22565b955060808a0135612e8d81612df7565b945060a08a0135935060c08a013560ff81168114612eaa57600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f840112612edc57600080fd5b50813567ffffffffffffffff811115612ef457600080fd5b6020830191508360208260051b8501011115612f0f57600080fd5b9250929050565b60008060008060008060808789031215612f2f57600080fd5b612f3887612e22565b9550612f4660208801612e22565b9450604087013567ffffffffffffffff80821115612f6357600080fd5b612f6f8a838b01612eca565b90965094506060890135915080821115612f8857600080fd5b50612f9589828a01612eca565b979a9699509497509295939492505050565b60008060008060808587031215612fbd57600080fd5b84359350612fcd60208601612e22565b9250612fdb60408601612e22565b9396929550929360600135925050565b60008060006060848603121561300057600080fd5b8335925061301060208501612e22565b915061301e60408501612e22565b90509250925092565b6000806040838503121561303a57600080fd5b8235915061304a60208401612e22565b90509250929050565b60006020828403121561306557600080fd5b813567ffffffffffffffff81111561307c57600080fd5b82016060818503121561055057600080fd5b600080600080608085870312156130a457600080fd5b843593506130b460208601612e22565b9250604085013591506130c960608601612e22565b905092959194509250565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a091820151918101919091526101c00190565b6000806040838503121561317d57600080fd5b61318683612e22565b9150602083013561319681612df7565b809150509250929050565b6000602082840312156131b357600080fd5b61055082612e22565b6000806000606084860312156131d157600080fd5b833592506131e160208501612e22565b9150604084013590509250925092565b81516001600160a01b031681526101e08101602083015161321d60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151613281828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016080840151805182850152602081015161018085015260408101516101a085015260608101516101c08501525b505092915050565b600080602083850312156132e157600080fd5b823567ffffffffffffffff8111156132f857600080fd5b61330485828601612eca565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b818110156133485783518352928401929184019160010161332c565b50909695505050505050565b81516001600160801b031681526101608101602083015161338060208401826001600160801b03169052565b5060408301516133956040840182600f0b9052565b5060608301516133b060608401826001600160801b03169052565b5060808301516133cb60808401826001600160801b03169052565b5060a08301516133e660a08401826001600160801b03169052565b5060c083015161340160c08401826001600160801b03169052565b5060e083015161341c60e08401826001600160801b03169052565b50610100838101516001600160801b0316908301526101208084015115159083015261014080840151801515828501526132c6565b600080600080600060a0868803121561346957600080fd5b8535945061347960208701612e22565b935061348760408701612e22565b92506060860135915061349c60808701612e22565b90509295509295909350565b600080604083850312156134bb57600080fd5b6134c483612e22565b915061304a60208401612e22565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561058a5761058a6134e8565b8181038181111561058a5761058a6134e8565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b81546001600160801b038082168352608091821c60208401526001840154600f81900b6040850152821c6060840152600284015480821683850152821c60a0840152600384015480821660c0850152821c60e084015260048401549081166101008401529081901c60ff9081161515610120840152608882901c161515610140830152610160820190610c3b565b700243cb832b9323934bb32902637b7339d1607d1b81526000825161360a816011850160208701612d94565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251613644816012850160208701612d94565b9190910160120192915050565b600060018201613663576136636134e8565b5060010190565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613695816010850160208701612d94565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161360a816011850160208701612d94565b6000602082840312156136e057600080fd5b5051919050565b8181036000831280158383131683831282161715610c3b57610c3b6134e8565b634e487b7160e01b600052601260045260246000fd5b60008261372c5761372c613707565b500690565b60008261374057613740613707565b500490565b60006020828403121561375757600080fd5b815161055081612df7565b808202811582820484141761058a5761058a6134e8565b80820182811260008312801582168215821617156132c6576132c66134e8565b6000600160ff1b82016137ae576137ae6134e8565b5060000390565b6000826137c4576137c4613707565b600160ff1b8214600019841416156137de576137de6134e8565b50059056fea2646970667358221220138a46a05c906f59472500cd674e552aa1cb76538bc8c5c5bbb3ba901577809c64736f6c6343000813003361024060405260016000553480156200001757600080fd5b5060405162004ce938038062004ce98339810160408190526200003a91620002c2565b80516001600160a01b03166080908152810151819081906103e8111562000074576040516349db44f560e01b815260040160405180910390fd5b60808101516101a05260a08101516101c05260e0810151600003620000ac57604051635428734d60e01b815260040160405180910390fd5b60e08101805160a0525160c08201511080620000dc57508060e001518160c00151620000d991906200038c565b15155b15620000fb5760405163253fffcf60e11b815260040160405180910390fd5b60c081810151905261010081015160e052606081015161018052610120810151600880546001600160a01b0319166001600160a01b03928316179055610140820151166101e05261016081015151670de0b6b3a764000010806200016f5750670de0b6b3a764000081610160015160200151115b806200018b5750670de0b6b3a764000081610160015160400151115b15620001aa576040516322f72cc360e11b815260040160405180910390fd5b61016080820180515161010052805160209081015161012052815160409081015161014052915160600151909252908201516001600160a01b03166102005201516102205250620003af9050565b60405161018081016001600160401b03811182821017156200022a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200024857600080fd5b919050565b6000608082840312156200026057600080fd5b604051608081016001600160401b03811182821017156200029157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006101e08284031215620002d657600080fd5b620002e0620001f8565b620002eb8362000230565b8152620002fb6020840162000230565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206200035881850162000230565b908201526101406200036c84820162000230565b9082015261016062000381858583016200024d565b908201529392505050565b600082620003aa57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516147d362000516600039600050506000505060005050600081816104f8015281816107030152610834015260008181610280015281816102cb015281816103d3015281816115dd015281816116df01528181611ed4015281816120050152612041015260008181610342015281816105590152818161133c0152818161136901526115b7015260006119b701526000611b18015260008181610c210152611aec015260005050600081816103850152818161059b01526116030152600081816103640152818161057a01528181610b69015261260c015260008181610a6f0152610b1a015260008181610984015281816109cd0152818161107f01528181611139015281816111fe0152818161129601528181612229015281816122720152818161234c01526123ea01526147d36000f3fe60806040526004361061003f5760003560e01c8063074a6de91461004457806377d05ff41461007e5780639aa684621461009f578063cbc13434146100b2575b600080fd5b34801561005057600080fd5b5061006461005f36600461447b565b6100d2565b604080519283526020830191909152015b60405180910390f35b61009161008c36600461447b565b6100ed565b604051908152602001610075565b6100916100ad3660046144cb565b610104565b3480156100be57600080fd5b506100646100cd36600461447b565b61011b565b6000806100e0858585610129565b915091505b935093915050565b60006100fa84848461020e565b90505b9392505050565b60006101128585858561049b565b95945050505050565b6000806100e0858585610808565b6000806000546001146101575760405162461bcd60e51b815260040161014e90614525565b60405180910390fd5b60026000908155610166610969565b9050610179610173610a68565b82610aa3565b5061018381610dda565b61018e868686610f17565b909350915060006101a084838761104e565b90506101af6020860186614549565b60408051858152602081018490529081018490526001600160a01b0391909116907f7986a4c20efd1390450c45fb0b11e794754bdce25f47ab5488efc8104169f7549060600160405180910390a2505060016000559094909350915050565b600080546001146102315760405162461bcd60e51b815260040161014e90614525565b600260005561023e61107d565b600554600160801b900460ff161561026957604051637983c05160e01b815260040160405180910390fd5b60008061027686856110ea565b90925090506102a67f00000000000000000000000000000000000000000000000000000000000000006002614588565b8210156102c657604051632afb507160e21b815260040160405180910390fd5b6102f17f00000000000000000000000000000000000000000000000000000000000000006002614588565b6102fb908361459f565b6005805460ff60801b1916600160801b1790559250610319826113d7565b600180546001600160801b0319166001600160801b03929092169190911790556103ae6103a9837f0000000000000000000000000000000000000000000000000000000000000000887f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611401565b6113d7565b600180546001600160801b03928316600160801b0292169190911790556103f76000807f0000000000000000000000000000000000000000000000000000000000000000611469565b61040f60006104096020870187614549565b85611469565b61041a610173610a68565b50600061042887838761104e565b90506104376020860186614549565b6040805186815260208101849052908101849052606081018890526001600160a01b0391909116907fd93ddcd36a9d44373680f40bd3bcafe3c7e738748e10c90213e70453cff442319060800160405180910390a250505060016000559392505050565b600080546001146104be5760405162461bcd60e51b815260040161014e90614525565b6002600055600554600160881b900460ff16156104ee576040516313d0ff5960e31b815260040160405180910390fd5b6104f661107d565b7f00000000000000000000000000000000000000000000000000000000000000008510156105375760405163211ddda360e11b815260040160405180910390fd5b60006105bf610544611512565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611533565b9050848110806105ce57508381115b156105ec57604051633b61151160e11b815260040160405180910390fd5b6000806105f988866110ea565b91509150610608610173610a68565b50600654600360f81b6000908152600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d549091610654916001600160801b039091169061459f565b6000808052600c6020527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e8549192509061068f9083906145b2565b9050600080600061069f8661156e565b90506106aa8161167b565b91506106b5876116b2565b6001546001600160801b038082168352600254600f0b6020840152600160801b9091041660408201526106e78161167b565b92506106ff84836106f8818761459f565b91906117a3565b98507f00000000000000000000000000000000000000000000000000000000000000008910156107425760405163211ddda360e11b815260040160405180910390fd5b5061075b600061075560208c018c614549565b8a611469565b61076485610dda565b6000831561077b5761077682856117c1565b61077e565b60005b9050600061078d8e888d61104e565b905061079c60208c018c614549565b604080518c815260208101849052908101899052606081018490526001600160a01b0391909116907fd92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e502396099060800160405180910390a25050600160005550959a9950505050505050505050565b60008060005460011461082d5760405162461bcd60e51b815260040161014e90614525565b60026000557f00000000000000000000000000000000000000000000000000000000000000008510156108735760405163211ddda360e11b815260040160405180910390fd5b600061087d610969565b905061088a610173610a68565b50610897600033886117d6565b6108b2600360f81b6108ac6020870187614549565b88611469565b6108bb81610dda565b60006108c8878787610f17565b90945090506108d7818861459f565b925060006108e685848861104e565b90506108f56020870187614549565b6001600160a01b03167fae97bda5fb1ee457c0490e5804bc10c54ab31a1fd9b01e2f85a1855072150be88983868861092c89611876565b604080519586526020860194909452928401919091526060830152608082015260a00160405180910390a250505060016000559094909350915050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016109b8575047610a43565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610a1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4091906145c5565b90505b601054600003610a54576000610a62565b601054610a629082906117c1565b91505090565b6000610a947f0000000000000000000000000000000000000000000000000000000000000000426145f4565b610a9e904261459f565b905090565b600082815260076020526040812080546001600160801b0316151580610ac857504284115b15610ade57546001600160801b03169050610dd4565b610ae7836113d7565b81546001600160801b0319166001600160801b03918216178255600254610b5f91600160801b9091041660076000610b3f7f00000000000000000000000000000000000000000000000000000000000000008961459f565b81526020810191909152604001600020546001600160801b031685611934565b6000600781610b8e7f00000000000000000000000000000000000000000000000000000000000000008861459f565b815260208101919091526040016000908120546001600160801b03169150610bb7600287611aa0565b6000818152600c60205260408120549192508115610c9e57600080610bdf848a886000611ad5565b915091508060096000828254610bf591906145b2565b90915550610c09905084600084808e611ba3565b6000610c15858b6117c1565b9050610c458582898d8e7f0000000000000000000000000000000000000000000000000000000000000000611d15565b9250610c50836113d7565b60028054601090610c72908490600160801b90046001600160801b0316614608565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600193505050505b6000610cab60018a611aa0565b6000818152600c60205260409020549091508015610d5557600080610cd3838c8a6001611ad5565b915091508060096000828254610ce991906145b2565b909155508c9050610cfe846000858085611d60565b610d07836113d7565b60028054601090610d29908490600160801b90046001600160801b0316614608565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600195505050505b8215610d7857610d6f610d688583614628565b6000611f35565b610d7889610dda565b897f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15518a8684610da68e611876565b60408051948552602085019390935291830152606082015260800160405180910390a2889750505050505050505b92915050565b600654600360f81b6000908152600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d549091610e25916001600160801b039091169061459f565b905080600003610e33575050565b6000610e3e83611fe3565b905080600003610e4d57505050565b600080610e63610e5e848688612088565b612161565b91509150610e70826113d7565b60068054600090610e8b9084906001600160801b0316614608565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610eb8816113d7565b60068054601090610eda908490600160801b90046001600160801b0316614608565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610f1081610f0b90614648565b6116b2565b5050505050565b60065460009084906001600160801b031680821115610f3d57806001600160801b031691505b81600003610f525760008092509250506100e5565b610f61600360f81b33846117d6565b6006546001600160801b03600160801b909104811690600090610f89908590849086166117a3565b9050610f94846113d7565b610f9e9084614664565b600680546001600160801b0319166001600160801b0392909216919091179055610fc7816113d7565b60068054601090610fe9908490600160801b90046001600160801b0316614664565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061101781876121f8565b94508461102488866124e2565b11156110435760405163c972651760e01b815260040160405180910390fd5b505050935093915050565b60006110606040830160208401614695565b1561106c5750826100fd565b61107684846124e2565b90506100fd565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906110ca5750600034115b156110e857604051631574f9f360e01b815260040160405180910390fd5b565b600080806110fe6040850160208601614695565b6111195761111461110d610969565b86906124e2565b61111b565b845b90506000600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016111e9574791508234101561118a576040516312171d8360e31b815260040160405180910390fd5b823411156111e4573361119d843461459f565b604051600081818185875af1925050503d80600081146111d9576040519150601f19603f3d011682016040523d82523d6000602084013e6111de565b606091505b50909150505b61130e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561124d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061127191906145c5565b6040516323b872dd60e01b8152336004820152306024820152604481018590529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156112e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061130b91906146b2565b90505b8061132c576040516312171d8360e31b815260040160405180910390fd5b60105460000361139357611360877f00000000000000000000000000000000000000000000000000000000000000006117c1565b601081905594507f000000000000000000000000000000000000000000000000000000000000000093506113d092505050565b6010546000906113a49089856117a3565b905080601060008282546113b891906145b2565b909155508190506113c7610969565b95509550505050505b9250929050565b6000600160801b82106113fd57604051630f0af95160e11b815260040160405180910390fd5b5090565b600080611412846301e133806117c1565b905061145e61144e61142c670de0b6b3a7640000866124f7565b61143688856124e2565b61144890670de0b6b3a76400006145b2565b9061250c565b611458888a6124e2565b906124e2565b979650505050505050565b6000838152600b602090815260408083206001600160a01b03861684529091528120805483929061149b9084906145b2565b90915550506000838152600c6020526040812080548392906114be9084906145b2565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b600154600254600091610a9e916001600160801b0390911690600f0b61256d565b6000806115428787878661258a565b905061145e61155682866301e1338061259b565b61156883670de0b6b3a764000061459f565b906117c1565b6115766143bd565b60408051610160810182526001546001600160801b038082168352600254600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c0830152600354819004831660e0830152600454919261010084019261164b929004166125c1565b81526004546001600160801b03908116602083015260055460409092019161167391166125c1565b905292915050565b600080600061168984612637565b91509150806116ab5760405163aeeb825d60e01b815260040160405180910390fd5b5092915050565b6001546002546001600160801b0380831692600f9290920b91600160801b900416600080806117048686867f00000000000000000000000000000000000000000000000000000000000000008b6126b1565b92509250925085831461173b5761171a836113d7565b600180546001600160801b0319166001600160801b03929092169190911790555b84821461176c5761174b8261275e565b600280546001600160801b0319166001600160801b03929092169190911790555b83811461179a5761177c816113d7565b600180546001600160801b03928316600160801b0292169190911790555b50505050505050565b60008260001904841183021582026117ba57600080fd5b5091020490565b60006100fd83670de0b6b3a7640000846117a3565b6000838152600b602090815260408083206001600160a01b03861684529091528120805483929061180890849061459f565b90915550506000838152600c60205260408120805483929061182b90849061459f565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101611505565b6000806000831161188857600061189d565b61189d836114586118988661156e565b61167b565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b039092169161190891906145b2565b611912919061459f565b905080156119295761192482826117c1565b61192c565b60005b949350505050565b81811180156119435750600082115b15611a9b57600061195f611957848461459f565b8590846117a3565b905061196a816113d7565b6002805460109061198c908490600160801b90046001600160801b0316614664565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006119e57f0000000000000000000000000000000000000000000000000000000000000000836124e290919063ffffffff16565b905080600960008282546119f991906145b2565b90915550611a099050818361459f565b9150611a14826113d7565b60018054600090611a2f9084906001600160801b0316614608565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611a5c826113d7565b60028054600090611a71908490600f0b6146cf565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555050505b505050565b60006001600160f81b03821115611aca5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b600080611ae286866117c1565b91506000611b10837f00000000000000000000000000000000000000000000000000000000000000006124e2565b9050611b3c817f00000000000000000000000000000000000000000000000000000000000000006124e2565b91508315611b5f57611b4e828261459f565b611b58908461459f565b9250611b76565b611b69828261459f565b611b7390846145b2565b92505b84861015611b9957611b898387876117a3565b9250611b968287876117a3565b91505b5094509492505050565b6004546001600160801b0316611bde6103a982611bc885670de0b6b3a7640000614588565b6005546001600160801b031691908a600061279c565b600580546001600160801b0319166001600160801b0392909216919091179055611c07866113d7565b611c119082614664565b600480546001600160801b0319166001600160801b0392909216919091179055611c3a846113d7565b60018054600090611c559084906001600160801b0316614608565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611c828361275e565b60028054600090611c97908490600f0b6146cf565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611cc7856113d7565b60018054601090611ce9908490600160801b90046001600160801b0316614664565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b600080611d27846115688a888a6117a3565b9050611d348884866117a3565b611d3e90826145b2565b905086811115611d5557611d52878261459f565b91505b509695505050505050565b600354600160801b90046001600160801b0316611da96103a982611d8c85670de0b6b3a7640000614588565b600454600160801b90046001600160801b031691908a600061279c565b600480546001600160801b03928316600160801b029216919091179055611dcf866113d7565b611dd99082614664565b600380546001600160801b03928316600160801b02921691909117905550611e00836113d7565b60018054600090611e1b9084906001600160801b0316614664565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611e488261275e565b60028054600090611e5d908490600f0b6146fc565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611e8d846113d7565b60018054601090611eaf908490600160801b90046001600160801b0316614608565b82546101009290920a6001600160801b038181021990931691831602179091556001547f0000000000000000000000000000000000000000000000000000000000000000911610905080611f175750600254600154600f9190910b6001600160801b03909116125b15610f105760405163585fe6df60e11b815260040160405180910390fd5b6000611f5e611f448483612816565b611f4f846000612816565b611f599190614628565b61275e565b9050600081600f0b1315611fb35760038054829190600090611f8a9084906001600160801b0316614608565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215611a9b57611fc881614729565b60038054600090611f8a9084906001600160801b0316614664565b6003546000908190611ffe906001600160801b0316846117c1565b905061202a7f0000000000000000000000000000000000000000000000000000000000000000826145b2565b6001546001600160801b03161115612082576001547f0000000000000000000000000000000000000000000000000000000000000000906120759083906001600160801b031661459f565b61207f919061459f565b91505b50919050565b612090614417565b600061209b8361156e565b905060006120a88261167b565b905060006120c98361014001518461012001516124e290919063ffffffff16565b61010084015160e08501516120dd916124e2565b6120e79190614628565b604080516101208101825285815260208082019590955260008052600c85527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854818301526060810198909852608088019890985260a087015250815160c086015281015160e08501529093015161010083015250919050565b60008060006121788460c001518560e0015161256d565b90506000612186858361282c565b905060006121948683612b2a565b9050806000036121ac57506000958695509350505050565b856060015181116121c1579590945092505050565b50606085015160006121d38785612bd5565b9050806000036121ec5750600096879650945050505050565b90969095509350505050565b60006010548311612209578261220d565b6010545b9250600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161225d5750476122e8565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156122c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122e591906145c5565b90505b6010546000036122f9576000612318565b612318612311601054836117c190919063ffffffff16565b85906124e2565b9150836010600082825461232c919061459f565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016123e0576123866020850185614549565b6001600160a01b03168360405160006040518083038185875af1925050503d80600081146123d0576040519150601f19603f3d011682016040523d82523d6000602084013e6123d5565b606091505b505080915050612490565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb61241c6020870187614549565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018690526044016020604051808303816000875af1158015612469573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061248d91906146b2565b90505b806124ae576040516312171d8360e31b815260040160405180910390fd5b6124be6040850160208601614695565b6124d9576124d46124cd610969565b84906117c1565b610112565b50909392505050565b60006100fd8383670de0b6b3a76400006117a3565b60006100fd83670de0b6b3a76400008461259b565b6000816000036125255750670de0b6b3a7640000610dd4565b8260000361253557506000610dd4565b81600061254185612fff565b9050818102612558670de0b6b3a76400008261474f565b905061256381613212565b9695505050505050565b60008061257a8385614628565b905060008112156100fd57600080fd5b6000610112826114488588886117a3565b60008260001904841183021582026125b257600080fd5b50910281810615159190040190565b600080670de0b6b3a76400006125d5610a68565b6125df9190614588565b90508083116125ef5760006125f9565b6125f9818461459f565b915061207f612630670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614588565b83906117c1565b60008060008060006126488661339d565b915091508061265f57506000958695509350505050565b8560a0015161266d876135da565b875161267a90859061477d565b612684919061477d565b61268e9190614628565b9250505060008112156126a75750600093849350915050565b9360019350915050565b6000806000836000036126cb575086915085905084612753565b60006126d7858a61477d565b9050858112156126fa5760405163585fe6df60e11b815260040160405180910390fd5b809350600088126127175761271084898b6117a3565b9250612737565b61272b61272389614648565b85908b6117a3565b61273490614648565b92505b61274f876127458b8b61256d565b6106f8878761256d565b9150505b955095509592505050565b600060016001607f1b0319821280159061277f575060016001607f1b038213155b6113fd5760405163a5353be560e01b815260040160405180910390fd5b600081156127dc576127d56127b184876145b2565b6127bb85876124e2565b6127c5888a6124e2565b6127cf91906145b2565b906124f7565b9050610112565b8285036127eb57506000610112565b6125636127f8848761459f565b61280285876124e2565b61280c888a6124e2565b6127cf919061459f565b600081831361282557816100fd565b5090919050565b6000808360a001511261284457506080820151610dd4565b60008360a0015161285490614648565b90506128858460c001518560e00151866101000151876000015160a00151886080015161288090614648565b6126b1565b8651604081019190915260208082019290925291909152845180519101516000916128e5916128b4919061256d565b8651604081015160c0909101516128d390670de0b6b3a764000061459f565b88516060810151608090910151613641565b90508181106128fb575050506080820151610dd4565b5060006129098585846136de565b905060005b6003811015612a855761293d8660c001518760e00151886101000151896000015160a001518661288090614648565b88516040810191909152602080820192909252919091528651805191015160009161299d9161296c919061256d565b8851604081015160c09091015161298b90670de0b6b3a764000061459f565b8a516060810151608090910151613641565b90506000806129ac898961387c565b91509150806129bd57505050612a85565b85831115612a19578496506129e9620f4240670de0b6b3a76400006129e291906145b2565b87906124e2565b83116129fa57505050505050610dd4565b612a0882611568888661459f565b612a1290866145b2565b9450612a63565b85831015612a55576000612a3183611568868a61459f565b9050858110612a435750505050612a85565b612a4d818761459f565b955050612a63565b849650505050505050610dd4565b8860800151851115612a7757886080015194505b83600101935050505061290e565b50828114612b2257612ab38560c001518660e00151876101000151886000015160a001518561288090614648565b875160408101919091526020808201929092529190915285518051910151600091612b1391612ae2919061256d565b8751604081015160c090910151612b0190670de0b6b3a764000061459f565b89516060810151608090910151613641565b9050828110612b20578193505b505b505092915050565b6000612b528360c001518460e00151856101000151866000015160a001518661288090614648565b8551604081019190915260208101919091525282516000908190612b7590612637565b91509150801580612b8a575084602001518210155b15612b9a57600092505050610dd4565b600085606001518660400151612bb091906145b2565b9050612bcb838760200151836117a39092919063ffffffff16565b612563908261459f565b60008083606001518460400151612bec91906145b2565b90508360a00151600003612c165760608401516020850151612c0e91836117a3565b915050610dd4565b60208401516060850151600091612c2e9190846117a3565b905060008560a001511315612e705760005b6004811015612e6a57612c6f8660c001518760e00151886101000151896000015160a001518661288090614648565b885160408101919091526020810191909152528551600090612c909061167b565b9050612c9d878286613aea565b15612ca85750612e6a565b865180516020820151604083015160a084015160c0909401516000948594612cf59490939092909190612ce390670de0b6b3a764000061459f565b8e516060810151608090910151613b63565b9150915080612d0657505050612e6a565b6000828a60a0015111612d6957612d228a8a8c60a00151613c45565b92509050811580612d3b5750670de0b6b3a76400008110155b15612d50576000975050505050505050610dd4565b612d6281670de0b6b3a764000061459f565b9050612d9b565b612d728a613f03565b909650915081612d8c576000975050505050505050610dd4565b85975050505050505050610dd4565b6000612db88b604001518c60200151613fee90919063ffffffff16565b612dc2868a6124e2565b612dcc9190614628565b90506000811315612dfc57612deb612de4838a613fee565b82906117c1565b612df590886145b2565b9650612e5a565b6000811215612e50576000612e1d612e14848b613fee565b61156884614648565b905087811015612e3857612e31818961459f565b9750612e4a565b60009950505050505050505050610dd4565b50612e5a565b5050505050612e6a565b8560010195505050505050612c40565b5061192c565b60005b6004811015612ff657612ea28660c001518760e00151886101000151896000015160a001518661288090614648565b885160408101919091526020810191909152528551600090612ec39061167b565b9050612ed0878286613aea565b15612edb5750612ff6565b600080612ef689898b60a00151612ef190614648565b614003565b91509150801580612f0f5750670de0b6b3a76400008210155b15612f235760009650505050505050610dd4565b612f3582670de0b6b3a764000061459f565b91506000612f548a604001518b60200151613fee90919063ffffffff16565b612f5e85896124e2565b612f689190614628565b90506000811315612f9257612f818761156883866117c1565b612f8b90876145b2565b9550612fe7565b6000811215612fde576000612fac88611568868186614648565b905086811015612fc757612fc0818861459f565b9650612fd8565b600098505050505050505050610dd4565b50612fe7565b50505050612ff6565b84600101945050505050612e73565b50949350505050565b600080821361302157604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361322d57506000919050565b680755bf798b4a1bf1e582126132565760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60008060006133bf8461014001518561012001516124e290919063ffffffff16565b61010085015160e08601516133d3916124e2565b6133dd9190614628565b905060006133f38560000151866020015161256d565b905060008213156134f6576000829050600080613444886000015189602001518a604001518b60a001518c60c00151670de0b6b3a7640000613435919061459f565b8d606001518e60800151613b63565b915091508061345d575060009788975095505050505050565b8282106134b2576000613497858a60400151868c60c00151670de0b6b3a7640000613488919061459f565b8d606001518e60800151614142565b90506134a281614648565b9960019950975050505050505050565b60008860200151126134e55760a08801516134cd908561459f565b6134d690614648565b98600198509650505050505050565b60a088015188516134cd919061459f565b60008212156135cc57600061350a83614648565b9050600061353e8388604001518960c00151670de0b6b3a764000061352f919061459f565b8a606001518b60800151613641565b905081811061357a5760006134d6848960400151858b60c00151670de0b6b3a764000061356b919061459f565b8c606001518d60800151614176565b60006135ac8489604001518a60c00151670de0b6b3a764000061359d919061459f565b8b606001518c60800151614218565b90506135c288606001518385611568919061459f565b6134d690826145b2565b506000946001945092505050565b6000613609826101000151670de0b6b3a76400006135f8919061459f565b606084015160e085015191906117a3565b613637836101400151670de0b6b3a7640000613625919061459f565b606085015161012086015191906117a3565b610dd49190614628565b60008061365187878787876142a7565b9050600061367c670de0b6b3a764000061366b87876117c1565b61367591906145b2565b83906124f7565b9050670de0b6b3a764000081106136b0576136a96136a2670de0b6b3a7640000886124f7565b829061250c565b90506136c8565b6136c56136a2670de0b6b3a7640000886117c1565b90505b6136d2818861459f565b98975050505050505050565b82516080810151606090910151600091829161374791670de0b6b3a764000091613707916117c1565b61371191906145b2565b610100870151875160c001516127cf91889161373590670de0b6b3a764000061459f565b8a5160608101516080909101516142a7565b9050670de0b6b3a7640000811061378e57845160c00151613787906136a29061377890670de0b6b3a764000061459f565b670de0b6b3a7640000906124f7565b90506137c0565b845160c001516137bd906136a2906137ae90670de0b6b3a764000061459f565b670de0b6b3a7640000906117c1565b90505b6137ca83826145b2565b905060008560e00151126138265761381f6138186137f98760c001518860e001516124f790919063ffffffff16565b61380b90670de0b6b3a764000061459f565b61010088015190876117a3565b82906124f7565b9050613857565b6138546138186138428760c001518860e0015161156890614648565b61380b90670de0b6b3a76400006145b2565b90505b8460c00151811061386c5760009150506100fd565b808560c00151610112919061459f565b81518051602090910151600091829182916138969161256d565b855160c08101516040909101519192506000916138cd916138c1916138ba9161250c565b8790613fee565b610100880151906117c1565b865160c08101516080909101516138f8916138ec916114489087613fee565b885160600151906117c1565b61390291906145b2565b9050600061394183886000015160400151896000015160c00151670de0b6b3a764000061392f919061459f565b8a5160608101516080909101516142d6565b9050670de0b6b3a764000081106139985761399161398a613983896000015160c00151670de0b6b3a7640000613977919061459f565b8a5160c00151906117c1565b839061250c565b83906124e2565b91506139cc565b6139c961398a613983896000015160c00151670de0b6b3a76400006139bd919061459f565b8a5160c00151906124f7565b91505b613a1c6126306139f1896000015160c00151670de0b6b3a7640000613778919061459f565b89516080810151606090910151670de0b6b3a764000091613a1291906124f7565b61144891906145b2565b91506000613a38878961010001516124f790919063ffffffff16565b9050808311613a5257613a4b838261459f565b9250613a62565b60008095509550505050506113d0565b60008860e0015112613aac57613aa583613a8d8a60c001518b60e001516117c190919063ffffffff16565b613a9f90670de0b6b3a764000061459f565b90613fee565b9250613adb565b613ad883613ac68a60c001518b60e001516127cf90614648565b613a9f90670de0b6b3a76400006145b2565b92505b50909660019650945050505050565b600080613b048486602001516117c190919063ffffffff16565b90506000613b1f8660400151856117c190919063ffffffff16565b905081811015613b34576000925050506100fd565b8181101580156125635750613b5861398a633b9aca00670de0b6b3a76400006145b2565b101595945050505050565b6000806000881215613b8557613b7888614648565b613b8290876145b2565b95505b6000613b918a8a61256d565b90506000613ba2828a8989896142d6565b90506000613bbf613bb789611448898d613fee565b88908861259b565b613bc9908361459f565b9050670de0b6b3a76400008110613bf657613bef6136a2670de0b6b3a76400008a6117c1565b9050613c0e565b613c0b6136a2670de0b6b3a76400008a6124f7565b90505b89811015613c255760008094509450505050613c39565b613c2f8a8261459f565b6001945094505050505b97509795505050505050565b8251805160209091015160009182918291613c5f9161256d565b90506000613c9c613c90613c89896000015160c00151888b600001516040015161144891906145b2565b8890613fee565b610100890151906117c1565b875160c0810151604090910151613ccd91613cc191613cba9161250c565b89906124e2565b6101008a0151906124f7565b885160c0810151608090910151613cf891613cec9161144890886124e2565b8a5160600151906124f7565b613d0291906145b2565b613d0c919061459f565b90506000613d4b838960000151604001518a6000015160c00151670de0b6b3a7640000613d39919061459f565b8b5160608101516080909101516142a7565b90506000613d7f896000015160c00151670de0b6b3a7640000613d6e919061459f565b8a5160400151611448908a906145b2565b905080821015613d995760008095509550505050506100e5565b613dba613da6828461459f565b8a516060810151608090910151919061259b565b9050670de0b6b3a76400008110613dfe57885160c00151613df7906136a290613deb90670de0b6b3a764000061459f565b8b5160c00151906124f7565b9050613e2d565b885160c00151613e2a906136a290613e1e90670de0b6b3a764000061459f565b8b5160c00151906117c1565b90505b885160600151613e40908490839061259b565b925082670de0b6b3a764000010613e6a57613e6383670de0b6b3a764000061459f565b9250613e7b565b6000600195509550505050506100e5565b60008960e0015112613ec557613ebe613ea58a60c001518b60e001516124f790919063ffffffff16565b613eb790670de0b6b3a764000061459f565b84906124e2565b9250613ef3565b613ef0613ede8a60c001518b60e0015161156890614648565b613eb790670de0b6b3a76400006145b2565b92505b5090976001975095505050505050565b60008060008360e0015113613f1d57506000928392509050565b60c083015183515260e08301518351602001526101008301518351604001528251600090613f4a906135da565b90506000808212613f8c57604085015160608601518391613f7b91613f6f90826145b2565b6020890151919061259b565b613f85919061459f565b9050613fbb565b613f9582614648565b60408601516060870151613fae9190613f6f90826145b2565b613fb891906145b2565b90505b60e085015160c0860151613fd091839061259b565b9050808560c00151613fe2919061459f565b95600195509350505050565b60006100fd8383670de0b6b3a764000061259b565b825180516020909101516000918291829161401d9161256d565b90506000614047613c90613c89896000015160c00151888b6000015160400151611448919061459f565b875160c081015160409091015161406591613cc191613cba9161250c565b885160c081015160809091015161408491613cec9161144890886124e2565b61408e91906145b2565b614098919061459f565b905060006140c5838960000151604001518a6000015160c00151670de0b6b3a7640000613d39919061459f565b905060006140f9896000015160c00151670de0b6b3a76400006140e8919061459f565b8a5160400151611448908a9061459f565b9050808210156141135760008095509550505050506100e5565b614120613da6828461459f565b9050885160c00151613df7906136a290613deb90670de0b6b3a764000061459f565b6000806141538888888888886142fb565b909250905080611d5557604051637ac17d2560e01b815260040160405180910390fd5b60008061418688888787876142a7565b905061419685611448888a61459f565b965060006141b084866141a98b8661459f565b919061259b565b9050670de0b6b3a764000081106141dd576141d66136a2670de0b6b3a7640000886124f7565b90506141f5565b6141f26136a2670de0b6b3a7640000886117c1565b90505b6141ff81856124f7565b905061420b898261459f565b9998505050505050505050565b60008061422887878787876142d6565b9050600061424c670de0b6b3a764000061424287876124f7565b61263091906145b2565b9050670de0b6b3a76400008110614279576142726136a2670de0b6b3a7640000886117c1565b9050614291565b61428e6136a2670de0b6b3a7640000886124f7565b90505b61429b81856117c1565b90506136d2888261459f565b60006142b3858561250c565b6142cc6142c486611448868b613fee565b85908561259b565b61256391906145b2565b60006142e2858561250c565b6142cc6142f386611448868b6124e2565b8590856117a3565b600080600061430d89898888886142a7565b905061431d86611448898b6145b2565b9750878110156143345760008092509250506143b2565b600061434585876141a98c8661459f565b9050670de0b6b3a764000081106143725761436b6136a2670de0b6b3a7640000896124f7565b905061438a565b6143876136a2670de0b6b3a7640000896117c1565b90505b61439481866124f7565b9050808a11156143ab576143a8818b61459f565b93505b6001925050505b965096945050505050565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528061442b6143bd565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006060828403121561208257600080fd5b60008060006060848603121561449057600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156144b557600080fd5b6144c186828701614469565b9150509250925092565b600080600080608085870312156144e157600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561450d57600080fd5b61451987828801614469565b91505092959194509250565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b60006020828403121561455b57600080fd5b81356001600160a01b03811681146100fd57600080fd5b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610dd457610dd4614572565b81810381811115610dd457610dd4614572565b80820180821115610dd457610dd4614572565b6000602082840312156145d757600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b600082614603576146036145de565b500690565b6001600160801b038181168382160190808211156116ab576116ab614572565b81810360008312801583831316838312821617156116ab576116ab614572565b6000600160ff1b820161465d5761465d614572565b5060000390565b6001600160801b038281168282160390808211156116ab576116ab614572565b801515811461469257600080fd5b50565b6000602082840312156146a757600080fd5b81356100fd81614684565b6000602082840312156146c457600080fd5b81516100fd81614684565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610dd457610dd4614572565b600f82810b9082900b0360016001607f1b0319811260016001607f1b0382131715610dd457610dd4614572565b600081600f0b60016001607f1b0319810361474657614746614572565b60000392915050565b60008261475e5761475e6145de565b600160ff1b82146000198414161561477857614778614572565b500590565b8082018281126000831280158216821582161715612b2257612b2261457256fea2646970667358221220a65936b9995b35ff2865e0baa658890cd37e63b930975a9f124c59f132e6fe9f64736f6c6343000813003361024060405260016000553480156200001757600080fd5b5060405162004eb338038062004eb38339810160408190526200003a91620002c2565b80516001600160a01b03166080908152810151819081906103e8111562000074576040516349db44f560e01b815260040160405180910390fd5b60808101516101a05260a08101516101c05260e0810151600003620000ac57604051635428734d60e01b815260040160405180910390fd5b60e08101805160a0525160c08201511080620000dc57508060e001518160c00151620000d991906200038c565b15155b15620000fb5760405163253fffcf60e11b815260040160405180910390fd5b60c081810151905261010081015160e052606081015161018052610120810151600880546001600160a01b0319166001600160a01b03928316179055610140820151166101e05261016081015151670de0b6b3a764000010806200016f5750670de0b6b3a764000081610160015160200151115b806200018b5750670de0b6b3a764000081610160015160400151115b15620001aa576040516322f72cc360e11b815260040160405180910390fd5b61016080820180515161010052805160209081015161012052815160409081015161014052915160600151909252908201516001600160a01b03166102005201516102205250620003af9050565b60405161018081016001600160401b03811182821017156200022a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200024857600080fd5b919050565b6000608082840312156200026057600080fd5b604051608081016001600160401b03811182821017156200029157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006101e08284031215620002d657600080fd5b620002e0620001f8565b620002eb8362000230565b8152620002fb6020840162000230565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206200035881850162000230565b908201526101406200036c84820162000230565b9082015261016062000381858583016200024d565b908201529392505050565b600082620003aa57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516149696200054a60003960005050600050506000505060008181610172015261039f015260008181611b750152818161212c01528181612337015281816123730152818161255701526126890152600081816109450152818161097201528181610db601528181610dfe015281816112e701528181611f890152612663015260006116880152600081816117b30152818161202b015281816121fd0152612276015260008181610bb701528181610e710152818161139c01528181611787015261224a015260008181610e5001528181611fe701526121c9015260008181610d9401528181610e1f015281816112c501528181611faa01526126af0152600081816102400152818161042c01528181610aff015261319c0152600081816105a50152818161065a01528181610a050152610ab001526000818161068801528181610742015281816108070152818161089f015281816111bb015261120401526149696000f3fe6080604052600436106100345760003560e01c8063cba2e58d14610039578063dbbe807014610065578063ed64bab214610078575b600080fd5b61004c61004736600461466a565b61009a565b6040805192835260208301919091520160405180910390f35b61004c61007336600461466a565b6100b6565b34801561008457600080fd5b506100986100933660046146c9565b6100c5565b005b6000806100a9868686866100d1565b9150915094509492505050565b6000806100a986868686610323565b6100ce81610574565b50565b6000806000546001146101185760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064015b60405180910390fd5b6002600055600554600160881b900460ff1615610148576040516313d0ff5960e31b815260040160405180910390fd5b610150610686565b60008061015d88866106f3565b9092509050600061016e83836109e0565b90507f00000000000000000000000000000000000000000000000000000000000000008110156101b15760405163211ddda360e11b815260040160405180910390fd5b868210156101d2576040516342af972b60e01b815260040160405180910390fd5b60006101dc6109fe565b90506101e88184610a39565b5060008060006101f88787610d6d565b909a5091945092509050878c11156102235760405163c972651760e01b815260040160405180910390fd5b806009600082825461023591906146f8565b9091555061026590507f0000000000000000000000000000000000000000000000000000000000000000856146f8565b9850610274838984898d610f08565b600061028160018b611091565b905061029a8161029460208e018e61470b565b8b6110c6565b8d8b8a836102ab602084018461470b565b6001600160a01b03167f8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda6868f6102e1878f8861116e565b60408051928352602083019190915281018e90526060810185905260800160405180910390a39a50505050505050505050506001600055909590945092505050565b6000806000546001146103655760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b604482015260640161010f565b6002600055600554600160881b900460ff1615610395576040516313d0ff5960e31b815260040160405180910390fd5b61039d610686565b7f00000000000000000000000000000000000000000000000000000000000000008610156103de5760405163211ddda360e11b815260040160405180910390fd5b60006103e86111a0565b90508481101561040b576040516342af972b60e01b815260040160405180910390fd5b60006104156109fe565b905060006104238284610a39565b905060006104517f0000000000000000000000000000000000000000000000000000000000000000846146f8565b905060008060006104638d888761129f565b6009805492965092945092508291906000906104809084906146f8565b9250508190555050600061049582888c6113d6565b9050808c10156104b85760405163c972651760e01b815260040160405180910390fd5b6104c2818b6106f3565b50506104d08d8489876113fe565b60006104dd600286611091565b90508d6104f7826104f160208f018f61470b565b836110c6565b8161050560208e018e61470b565b60408051898152602081018890529081018c9052606081018490526001600160a01b0391909116907f80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef959060800160405180910390a350506001600055929c929b50919950505050505050505050565b6000818152600760205260409020546001600160801b0316156105945750565b600061059e6109fe565b90506105ca7f00000000000000000000000000000000000000000000000000000000000000008361474a565b1515806105d657508181105b156105f45760405163ecd29e8160e01b815260040160405180910390fd5b8082036106115761060c816106076111a0565b610a39565b505050565b815b6000818152600760205260409020546001600160801b031682820361063d5761063a6111a0565b90505b80156106545761064d8482610a39565b5050505050565b5061067f7f0000000000000000000000000000000000000000000000000000000000000000826146f8565b9050610613565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee148015906106d35750600034115b156106f157604051631574f9f360e01b815260040160405180910390fd5b565b60008080610707604085016020860161476c565b6107225761071d6107166111a0565b86906109e0565b610724565b845b90506000600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016107f25747915082341015610793576040516312171d8360e31b815260040160405180910390fd5b823411156107ed57336107a68434614789565b604051600081818185875af1925050503d80600081146107e2576040519150601f19603f3d011682016040523d82523d6000602084013e6107e7565b606091505b50909150505b610917565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610856573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087a919061479c565b6040516323b872dd60e01b8152336004820152306024820152604481018590529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af11580156108f0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091491906147b5565b90505b80610935576040516312171d8360e31b815260040160405180910390fd5b60105460000361099c57610969877f00000000000000000000000000000000000000000000000000000000000000006115ac565b601081905594507f000000000000000000000000000000000000000000000000000000000000000093506109d992505050565b6010546000906109ad9089856115bd565b905080601060008282546109c191906146f8565b909155508190506109d06111a0565b95509550505050505b9250929050565b60006109f58383670de0b6b3a76400006115bd565b90505b92915050565b6000610a2a7f00000000000000000000000000000000000000000000000000000000000000004261474a565b610a349042614789565b905090565b600082815260076020526040812080546001600160801b0316151580610a5e57504284115b15610a7457546001600160801b031690506109f8565b610a7d836115db565b81546001600160801b0319166001600160801b03918216178255600254610af591600160801b9091041660076000610ad57f000000000000000000000000000000000000000000000000000000000000000089614789565b81526020810191909152604001600020546001600160801b031685611605565b6000600781610b247f000000000000000000000000000000000000000000000000000000000000000088614789565b815260208101919091526040016000908120546001600160801b03169150610b4d600287611091565b6000818152600c60205260408120549192508115610c3457600080610b75848a886000611770565b915091508060096000828254610b8b91906146f8565b90915550610b9f905084600084808e61183e565b6000610bab858b6115ac565b9050610bdb8582898d8e7f00000000000000000000000000000000000000000000000000000000000000006119b0565b9250610be6836115db565b60028054601090610c08908490600160801b90046001600160801b03166147d2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600193505050505b6000610c4160018a611091565b6000818152600c60205260409020549091508015610ceb57600080610c69838c8a6001611770565b915091508060096000828254610c7f91906146f8565b909155508c9050610c94846000858085611a01565b610c9d836115db565b60028054601090610cbf908490600160801b90046001600160801b03166147d2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600195505050505b8215610d0e57610d05610cfe85836147f2565b6000611bd6565b610d0e89611c84565b897f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15518a8684610d3c8e611dba565b60408051948552602085019390935291830152606082015260800160405180910390a2509698975050505050505050565b600080600080610dda610d7e611e78565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000611e99565b92506000610e43610de9611e78565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ec5565b9050610e9a8785610e95847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ee5565b611f50565b15610eb85760405163512095c760e01b815260040160405180910390fd5b600080610ec689848a611fd9565b9092509050610ed58287614789565b9450610ee181866146f8565b9550610eee81848a6115bd565b9350610efa848a614789565b965050505092959194509250565b600354600160801b90046001600160801b0316610f56610f5182610f3485670de0b6b3a7640000614812565b600454600160801b90046001600160801b03169190896001612059565b6115db565b600480546001600160801b03928316600160801b029216919091179055610f7c866115db565b60018054600090610f979084906001600160801b03166147d2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610fc4846115db565b60018054601090610fe6908490600160801b90046001600160801b0316614829565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611013856115db565b61101d90826147d2565b600380546001600160801b03808416600160801b02911617905590506000611044836120dd565b9050611059816110548882614849565b611bd6565b61106284612125565b61107f5760405163bb55fd2760e01b815260040160405180910390fd5b61108884611c84565b50505050505050565b60006001600160f81b038211156110bb5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600b602090815260408083206001600160a01b0386168452909152812080548392906110f89084906146f8565b90915550506000838152600c60205260408120805483929061111b9084906146f8565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000611180604083016020840161476c565b1561118c575082611199565b61119684846109e0565b90505b9392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016111ef57504761127a565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611253573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611277919061479c565b90505b60105460000361128b576000611299565b6010546112999082906115ac565b91505090565b600080600061130b6112af611e78565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000612183565b91508561131883876109e0565b11156113375760405163512095c760e01b815260040160405180910390fd5b6000806000611347610de9611e78565b905061135d89670de0b6b3a7640000838b6121a4565b5091945090925061137090508284614789565b61137a9086614789565b94506113c6886113c08b61138e868a614789565b8b6113998e826122b2565b8e7f00000000000000000000000000000000000000000000000000000000000000006119b0565b906109e0565b9550909250505093509350939050565b60006113e8604083016020840161476c565b156113f4575082611199565b61119684846115ac565b60045461143a90610f51906001600160801b031661142484670de0b6b3a7640000614812565b6005546001600160801b03169190886001612059565b600580546001600160801b0319166001600160801b03929092169190911790556000611465846115db565b60015461147b91906001600160801b0316614829565b600180546001600160801b0319166001600160801b03831617905590506114a1856115db565b600180546010906114c3908490600160801b90046001600160801b03166147d2565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506114f0856115db565b6004805460009061150b9084906001600160801b03166147d2565b82546101009290920a6001600160801b03818102199093169183160217909155600254600154600f9190910b91161215905061155a5760405163585fe6df60e11b815260040160405180910390fd5b6000611565836120dd565b90506115758161105488826147f2565b61157e84612125565b61159b5760405163bb55fd2760e01b815260040160405180910390fd5b6115a484611c84565b505050505050565b60006109f583670de0b6b3a7640000845b60008260001904841183021582026115d457600080fd5b5091020490565b6000600160801b821061160157604051630f0af95160e11b815260040160405180910390fd5b5090565b81811180156116145750600082115b1561060c5760006116306116288484614789565b8590846115bd565b905061163b816115db565b6002805460109061165d908490600160801b90046001600160801b0316614829565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006116b67f0000000000000000000000000000000000000000000000000000000000000000836109e090919063ffffffff16565b905080600960008282546116ca91906146f8565b909155506116da90508183614789565b91506116e5826115db565b600180546000906117009084906001600160801b03166147d2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061172d826115db565b60028054600090611742908490600f0b614869565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505050505050565b60008061177d86866115ac565b915060006117ab837f00000000000000000000000000000000000000000000000000000000000000006109e0565b90506117d7817f00000000000000000000000000000000000000000000000000000000000000006109e0565b915083156117fa576117e98282614789565b6117f39084614789565b9250611811565b6118048282614789565b61180e90846146f8565b92505b84861015611834576118248387876115bd565b92506118318287876115bd565b91505b5094509492505050565b6004546001600160801b0316611879610f518261186385670de0b6b3a7640000614812565b6005546001600160801b031691908a6000612059565b600580546001600160801b0319166001600160801b03929092169190911790556118a2866115db565b6118ac9082614829565b600480546001600160801b0319166001600160801b03929092169190911790556118d5846115db565b600180546000906118f09084906001600160801b03166147d2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061191d836122c8565b60028054600090611932908490600f0b614869565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611962856115db565b60018054601090611984908490600160801b90046001600160801b0316614829565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806119c8846119c28a888a6115bd565b906115ac565b90506119d58884866115bd565b6119df90826146f8565b9050868111156119f6576119f38782614789565b91505b509695505050505050565b600354600160801b90046001600160801b0316611a4a610f5182611a2d85670de0b6b3a7640000614812565b600454600160801b90046001600160801b031691908a6000612059565b600480546001600160801b03928316600160801b029216919091179055611a70866115db565b611a7a9082614829565b600380546001600160801b03928316600160801b02921691909117905550611aa1836115db565b60018054600090611abc9084906001600160801b0316614829565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611ae9826122c8565b60028054600090611afe908490600f0b614896565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611b2e846115db565b60018054601090611b50908490600160801b90046001600160801b03166147d2565b82546101009290920a6001600160801b038181021990931691831602179091556001547f0000000000000000000000000000000000000000000000000000000000000000911610905080611bb85750600254600154600f9190910b6001600160801b03909116125b1561064d5760405163585fe6df60e11b815260040160405180910390fd5b6000611bff611be58483612306565b611bf0846000612306565b611bfa91906147f2565b6122c8565b9050600081600f0b1315611c545760038054829190600090611c2b9084906001600160801b03166147d2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561060c57611c69816148c3565b60038054600090611c2b9084906001600160801b0316614829565b600654600360f81b6000908152600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d549091611ccf916001600160801b0390911690614789565b905080600003611cdd575050565b6000611ce883612315565b905080600003611cf757505050565b600080611d0d611d088486886123ba565b612493565b91509150611d1a826115db565b60068054600090611d359084906001600160801b03166147d2565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611d62816115db565b60068054601090611d84908490600160801b90046001600160801b03166147d2565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061064d81611db5906148e9565b61252a565b60008060008311611dcc576000611de1565b611de1836113c0611ddc8661261a565b612727565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b0390921691611e4c91906146f8565b611e569190614789565b90508015611e6d57611e6882826115ac565b611e70565b60005b949350505050565b600154600254600091610a34916001600160801b0390911690600f0b61275e565b6000611eba878787611eb388670de0b6b3a7640000614789565b878761277b565b979650505050505050565b6000611edc82611ed68588886115bd565b9061281c565b95945050505050565b6000611196611f2c611eff84670de0b6b3a7640000614789565b611f26670de0b6b3a7640000611f15818a612873565b611f1f9190614789565b8790612888565b90612888565b611f3e90670de0b6b3a76400006146f8565b6119c284670de0b6b3a7640000614789565b600080611fce85611f5f611e78565b611f6991906146f8565b600154611f87908790600160801b90046001600160801b0316614789565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611ec5565b909210949350505050565b600080612023856113c085817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000612019818c6115ac565b6113c09190614789565b915061204f827f00000000000000000000000000000000000000000000000000000000000000006109e0565b9050935093915050565b600081156120995761209261206e84876146f8565b61207885876109e0565b612082888a6109e0565b61208c91906146f8565b90612873565b9050611edc565b8285036120a857506000611edc565b6120d36120b58487614789565b6120bf85876109e0565b6120c9888a6109e0565b61208c9190614789565b9695505050505050565b6000600c60006120ee600285611091565b815260200190815260200160002054600c600061210c600186611091565b8152602001908152602001600020546109f891906147f2565b60006121517f0000000000000000000000000000000000000000000000000000000000000000836109e0565b6003546001546001600160801b03918216600f0b916121719116856109e0565b61217b91906147f2565b121592915050565b6000611eba87878761219d88670de0b6b3a7640000614789565b878761289d565b60008080806121f587866121ee8b6113c06121c78c670de0b6b3a7640000614789565b7f0000000000000000000000000000000000000000000000000000000000000000906109e0565b91906115bd565b9350612221847f00000000000000000000000000000000000000000000000000000000000000006109e0565b9150600061224261223a89670de0b6b3a7640000614789565b8a90886115bd565b905061226e817f00000000000000000000000000000000000000000000000000000000000000006109e0565b935061229a847f00000000000000000000000000000000000000000000000000000000000000006109e0565b6122a490846146f8565b915050945094509450949050565b60008183116122c157816109f5565b5090919050565b600060016001607f1b031982128015906122e9575060016001607f1b038213155b6116015760405163a5353be560e01b815260040160405180910390fd5b60008183136122c157816109f5565b6003546000908190612330906001600160801b0316846115ac565b905061235c7f0000000000000000000000000000000000000000000000000000000000000000826146f8565b6001546001600160801b031611156123b4576001547f0000000000000000000000000000000000000000000000000000000000000000906123a79083906001600160801b0316614789565b6123b19190614789565b91505b50919050565b6123c26145be565b60006123cd8361261a565b905060006123da82612727565b905060006123fb8361014001518461012001516109e090919063ffffffff16565b61010084015160e085015161240f916109e0565b61241991906147f2565b604080516101208101825285815260208082019590955260008052600c85527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854818301526060810198909852608088019890985260a087015250815160c086015281015160e08501529093015161010083015250919050565b60008060006124aa8460c001518560e0015161275e565b905060006124b885836128d1565b905060006124c68683612bcf565b9050806000036124de57506000958695509350505050565b856060015181116124f3579590945092505050565b50606085015160006125058785612c7a565b90508060000361251e5750600096879650945050505050565b90969095509350505050565b6001546002546001600160801b0380831692600f9290920b91600160801b9004166000808061257c8686867f00000000000000000000000000000000000000000000000000000000000000008b6130a4565b9250925092508583146125b357612592836115db565b600180546001600160801b0319166001600160801b03929092169190911790555b8482146125e4576125c3826122c8565b600280546001600160801b0319166001600160801b03929092169190911790555b838114611088576125f4816115db565b600180546001600160801b03928316600160801b02921691909117905550505050505050565b612622614610565b60408051610160810182526001546001600160801b038082168352600254600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c0830152600354819004831660e083015260045491926101008401926126f792900416613151565b81526004546001600160801b03908116602083015260055460409092019161271f9116613151565b905292915050565b6000806000612735846131c7565b91509150806127575760405163aeeb825d60e01b815260040160405180910390fd5b5092915050565b60008061276b83856147f2565b905060008112156109f557600080fd5b60008061278b8888878787613241565b905061279e85611ed6610716898c6146f8565b97506127ab8489856115bd565b975060006127b98983614789565b9050670de0b6b3a764000081106127ed576127e66127df670de0b6b3a764000088612873565b829061281c565b9050612805565b6128026127df670de0b6b3a7640000886115ac565b90505b61280f8189614789565b9998505050505050505050565b6000816000036128355750670de0b6b3a76400006109f8565b82600003612845575060006109f8565b81600061285185613270565b9050818102612868670de0b6b3a764000082614905565b90506120d381613483565b60006109f583670de0b6b3a76400008461360e565b60006109f58383670de0b6b3a764000061360e565b6000806128ae888888888888613634565b9092509050806119f657604051637ac17d2560e01b815260040160405180910390fd5b6000808360a00151126128e9575060808201516109f8565b60008360a001516128f9906148e9565b905061292a8460c001518560e00151866101000151876000015160a001518860800151612925906148e9565b6130a4565b86516040810191909152602080820192909252919091528451805191015160009161298a91612959919061275e565b8651604081015160c09091015161297890670de0b6b3a7640000614789565b885160608101516080909101516136fd565b90508181106129a05750505060808201516109f8565b5060006129ae858584613793565b905060005b6003811015612b2a576129e28660c001518760e00151886101000151896000015160a0015186612925906148e9565b885160408101919091526020808201929092529190915286518051910151600091612a4291612a11919061275e565b8851604081015160c090910151612a3090670de0b6b3a7640000614789565b8a5160608101516080909101516136fd565b9050600080612a518989613931565b9150915080612a6257505050612b2a565b85831115612abe57849650612a8e620f4240670de0b6b3a7640000612a8791906146f8565b87906109e0565b8311612a9f575050505050506109f8565b612aad826119c28886614789565b612ab790866146f8565b9450612b08565b85831015612afa576000612ad6836119c2868a614789565b9050858110612ae85750505050612b2a565b612af28187614789565b955050612b08565b8496505050505050506109f8565b8860800151851115612b1c57886080015194505b8360010193505050506129b3565b50828114612bc757612b588560c001518660e00151876101000151886000015160a0015185612925906148e9565b875160408101919091526020808201929092529190915285518051910151600091612bb891612b87919061275e565b8751604081015160c090910151612ba690670de0b6b3a7640000614789565b895160608101516080909101516136fd565b9050828110612bc5578193505b505b505092915050565b6000612bf78360c001518460e00151856101000151866000015160a0015186612925906148e9565b8551604081019190915260208101919091525282516000908190612c1a906131c7565b91509150801580612c2f575084602001518210155b15612c3f576000925050506109f8565b600085606001518660400151612c5591906146f8565b9050612c70838760200151836115bd9092919063ffffffff16565b6120d39082614789565b60008083606001518460400151612c9191906146f8565b90508360a00151600003612cbb5760608401516020850151612cb391836115bd565b9150506109f8565b60208401516060850151600091612cd39190846115bd565b905060008560a001511315612f155760005b6004811015612f0f57612d148660c001518760e00151886101000151896000015160a0015186612925906148e9565b885160408101919091526020810191909152528551600090612d3590612727565b9050612d42878286613b92565b15612d4d5750612f0f565b865180516020820151604083015160a084015160c0909401516000948594612d9a9490939092909190612d8890670de0b6b3a7640000614789565b8e516060810151608090910151613c0b565b9150915080612dab57505050612f0f565b6000828a60a0015111612e0e57612dc78a8a8c60a00151613ced565b92509050811580612de05750670de0b6b3a76400008110155b15612df55760009750505050505050506109f8565b612e0781670de0b6b3a7640000614789565b9050612e40565b612e178a613fae565b909650915081612e315760009750505050505050506109f8565b859750505050505050506109f8565b6000612e5d8b604001518c6020015161288890919063ffffffff16565b612e67868a6109e0565b612e7191906147f2565b90506000811315612ea157612e90612e89838a612888565b82906115ac565b612e9a90886146f8565b9650612eff565b6000811215612ef5576000612ec2612eb9848b612888565b6119c2846148e9565b905087811015612edd57612ed68189614789565b9750612eef565b600099505050505050505050506109f8565b50612eff565b5050505050612f0f565b8560010195505050505050612ce5565b50611e70565b60005b600481101561309b57612f478660c001518760e00151886101000151896000015160a0015186612925906148e9565b885160408101919091526020810191909152528551600090612f6890612727565b9050612f75878286613b92565b15612f80575061309b565b600080612f9b89898b60a00151612f96906148e9565b614099565b91509150801580612fb45750670de0b6b3a76400008210155b15612fc857600096505050505050506109f8565b612fda82670de0b6b3a7640000614789565b91506000612ff98a604001518b6020015161288890919063ffffffff16565b61300385896109e0565b61300d91906147f2565b9050600081131561303757613026876119c283866115ac565b61303090876146f8565b955061308c565b6000811215613083576000613051886119c28681866148e9565b90508681101561306c576130658188614789565b965061307d565b6000985050505050505050506109f8565b5061308c565b5050505061309b565b84600101945050505050612f18565b50949350505050565b6000806000836000036130be575086915085905084613146565b60006130ca858a614849565b9050858112156130ed5760405163585fe6df60e11b815260040160405180910390fd5b8093506000881261310a5761310384898b6115bd565b925061312a565b61311e613116896148e9565b85908b6115bd565b613127906148e9565b92505b613142876131388b8b61275e565b6121ee878761275e565b9150505b955095509592505050565b600080670de0b6b3a76400006131656109fe565b61316f9190614812565b905080831161317f576000613189565b6131898184614789565b91506123b16131c0670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614812565b83906115ac565b60008060008060006131d8866141d8565b91509150806131ef57506000958695509350505050565b8560a001516131fd87614415565b875161320a908590614849565b6132149190614849565b61321e91906147f2565b9250505060008112156132375750600093849350915050565b9360019350915050565b600061324d858561281c565b61326661325e86611ed6868b612888565b85908561360e565b6120d391906146f8565b600080821361329257604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361349e57506000919050565b680755bf798b4a1bf1e582126134c75760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600082600019048411830215820261362557600080fd5b50910281810615159190040190565b60008060006136468989888888613241565b905061365686611ed6898b6146f8565b97508781101561366d5760008092509250506136f2565b6000613685858761367e8c86614789565b919061360e565b9050670de0b6b3a764000081106136b2576136ab6127df670de0b6b3a764000089612873565b90506136ca565b6136c76127df670de0b6b3a7640000896115ac565b90505b6136d48186612873565b9050808a11156136eb576136e8818b614789565b93505b6001925050505b965096945050505050565b60008061370d8787878787613241565b90506000613738670de0b6b3a764000061372787876115ac565b61373191906146f8565b8390612873565b9050670de0b6b3a764000081106137655761375e6127df670de0b6b3a764000088612873565b905061377d565b61377a6127df670de0b6b3a7640000886115ac565b90505b6137878188614789565b98975050505050505050565b8251608081015160609091015160009182916137fc91670de0b6b3a7640000916137bc916115ac565b6137c691906146f8565b610100870151875160c0015161208c9188916137ea90670de0b6b3a7640000614789565b8a516060810151608090910151613241565b9050670de0b6b3a7640000811061384357845160c0015161383c906127df9061382d90670de0b6b3a7640000614789565b670de0b6b3a764000090612873565b9050613875565b845160c00151613872906127df9061386390670de0b6b3a7640000614789565b670de0b6b3a7640000906115ac565b90505b61387f83826146f8565b905060008560e00151126138db576138d46138cd6138ae8760c001518860e0015161287390919063ffffffff16565b6138c090670de0b6b3a7640000614789565b61010088015190876115bd565b8290612873565b905061390c565b6139096138cd6138f78760c001518860e001516119c2906148e9565b6138c090670de0b6b3a76400006146f8565b90505b8460c001518110613921576000915050611199565b808560c00151611edc9190614789565b815180516020909101516000918291829161394b9161275e565b855160c081015160409091015191925060009161397b9161396f91611f1f9161281c565b610100880151906115ac565b865160c08101516080909101516139a69161399a91611ed69087612888565b885160600151906115ac565b6139b091906146f8565b905060006139ef83886000015160400151896000015160c00151670de0b6b3a76400006139dd9190614789565b8a51606081015160809091015161447c565b9050670de0b6b3a76400008110613a4657613a3f613a38613a31896000015160c00151670de0b6b3a7640000613a259190614789565b8a5160c00151906115ac565b839061281c565b83906109e0565b9150613a7a565b613a77613a38613a31896000015160c00151670de0b6b3a7640000613a6b9190614789565b8a5160c0015190612873565b91505b613aca6131c0613a9f896000015160c00151670de0b6b3a764000061382d9190614789565b89516080810151606090910151670de0b6b3a764000091613ac09190612873565b611ed691906146f8565b91506000613ae68789610100015161287390919063ffffffff16565b9050808311613b0057613af98382614789565b9250613b10565b60008095509550505050506109d9565b60008860e0015112613b5457613b4d83613b3b8a60c001518b60e001516115ac90919063ffffffff16565b611f2690670de0b6b3a7640000614789565b9250613b83565b613b8083613b6e8a60c001518b60e0015161208c906148e9565b611f2690670de0b6b3a76400006146f8565b92505b50909660019650945050505050565b600080613bac8486602001516115ac90919063ffffffff16565b90506000613bc78660400151856115ac90919063ffffffff16565b905081811015613bdc57600092505050611199565b8181101580156120d35750613c00613a38633b9aca00670de0b6b3a76400006146f8565b101595945050505050565b6000806000881215613c2d57613c20886148e9565b613c2a90876146f8565b95505b6000613c398a8a61275e565b90506000613c4a828a89898961447c565b90506000613c67613c5f89611ed6898d612888565b88908861360e565b613c719083614789565b9050670de0b6b3a76400008110613c9e57613c976127df670de0b6b3a76400008a6115ac565b9050613cb6565b613cb36127df670de0b6b3a76400008a612873565b90505b89811015613ccd5760008094509450505050613ce1565b613cd78a82614789565b6001945094505050505b97509795505050505050565b8251805160209091015160009182918291613d079161275e565b90506000613d44613d38613d31896000015160c00151888b6000015160400151611ed691906146f8565b8890612888565b610100890151906115ac565b875160c0810151604090910151613d7591613d6991613d629161281c565b89906109e0565b6101008a015190612873565b885160c0810151608090910151613da091613d9491611ed690886109e0565b8a516060015190612873565b613daa91906146f8565b613db49190614789565b90506000613df3838960000151604001518a6000015160c00151670de0b6b3a7640000613de19190614789565b8b516060810151608090910151613241565b90506000613e27896000015160c00151670de0b6b3a7640000613e169190614789565b8a5160400151611ed6908a906146f8565b905080821015613e41576000809550955050505050613fa6565b613e62613e4e8284614789565b8a516060810151608090910151919061360e565b9050670de0b6b3a76400008110613ea657885160c00151613e9f906127df90613e9390670de0b6b3a7640000614789565b8b5160c0015190612873565b9050613ed5565b885160c00151613ed2906127df90613ec690670de0b6b3a7640000614789565b8b5160c00151906115ac565b90505b885160600151613ee8908490839061360e565b925082670de0b6b3a764000010613f1257613f0b83670de0b6b3a7640000614789565b9250613f23565b600060019550955050505050613fa6565b60008960e0015112613f6d57613f66613f4d8a60c001518b60e0015161287390919063ffffffff16565b613f5f90670de0b6b3a7640000614789565b84906109e0565b9250613f9b565b613f98613f868a60c001518b60e001516119c2906148e9565b613f5f90670de0b6b3a76400006146f8565b92505b509093506001925050505b935093915050565b60008060008360e0015113613fc857506000928392509050565b60c083015183515260e08301518351602001526101008301518351604001528251600090613ff590614415565b90506000808212614037576040850151606086015183916140269161401a90826146f8565b6020890151919061360e565b6140309190614789565b9050614066565b614040826148e9565b60408601516060870151614059919061401a90826146f8565b61406391906146f8565b90505b60e085015160c086015161407b91839061360e565b9050808560c0015161408d9190614789565b95600195509350505050565b82518051602090910151600091829182916140b39161275e565b905060006140dd613d38613d31896000015160c00151888b6000015160400151611ed69190614789565b875160c08101516040909101516140fb91613d6991613d629161281c565b885160c081015160809091015161411a91613d9491611ed690886109e0565b61412491906146f8565b61412e9190614789565b9050600061415b838960000151604001518a6000015160c00151670de0b6b3a7640000613de19190614789565b9050600061418f896000015160c00151670de0b6b3a764000061417e9190614789565b8a5160400151611ed6908a90614789565b9050808210156141a9576000809550955050505050613fa6565b6141b6613e4e8284614789565b9050885160c00151613e9f906127df90613e9390670de0b6b3a7640000614789565b60008060006141fa8461014001518561012001516109e090919063ffffffff16565b61010085015160e086015161420e916109e0565b61421891906147f2565b9050600061422e8560000151866020015161275e565b9050600082131561433157600082905060008061427f886000015189602001518a604001518b60a001518c60c00151670de0b6b3a76400006142709190614789565b8d606001518e60800151613c0b565b9150915080614298575060009788975095505050505050565b8282106142ed5760006142d2858a60400151868c60c00151670de0b6b3a76400006142c39190614789565b8d606001518e6080015161289d565b90506142dd816148e9565b9960019950975050505050505050565b60008860200151126143205760a08801516143089085614789565b614311906148e9565b98600198509650505050505050565b60a088015188516143089190614789565b6000821215614407576000614345836148e9565b905060006143798388604001518960c00151670de0b6b3a764000061436a9190614789565b8a606001518b608001516136fd565b90508181106143b5576000614311848960400151858b60c00151670de0b6b3a76400006143a69190614789565b8c606001518d608001516144a1565b60006143e78489604001518a60c00151670de0b6b3a76400006143d89190614789565b8b606001518c6080015161452f565b90506143fd886060015183856119c29190614789565b61431190826146f8565b506000946001945092505050565b6000614444826101000151670de0b6b3a76400006144339190614789565b606084015160e085015191906115bd565b614472836101400151670de0b6b3a76400006144609190614789565b606085015161012086015191906115bd565b6109f891906147f2565b6000614488858561281c565b61326661449986611ed6868b6109e0565b8590856115bd565b6000806144b18888878787613241565b90506144c185611ed6888a614789565b965060006144d4848661367e8b86614789565b9050670de0b6b3a76400008110614501576144fa6127df670de0b6b3a764000088612873565b9050614519565b6145166127df670de0b6b3a7640000886115ac565b90505b6145238185612873565b905061280f8982614789565b60008061453f878787878761447c565b90506000614563670de0b6b3a76400006145598787612873565b6131c091906146f8565b9050670de0b6b3a76400008110614590576145896127df670de0b6b3a7640000886115ac565b90506145a8565b6145a56127df670de0b6b3a764000088612873565b90505b6145b281856115ac565b90506137878882614789565b6040518061012001604052806145d2614610565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561468057600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff8111156146ac57600080fd5b8501606081880312156146be57600080fd5b939692955090935050565b6000602082840312156146db57600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156109f8576109f86146e2565b60006020828403121561471d57600080fd5b81356001600160a01b03811681146109f557600080fd5b634e487b7160e01b600052601260045260246000fd5b60008261475957614759614734565b500690565b80151581146100ce57600080fd5b60006020828403121561477e57600080fd5b81356109f58161475e565b818103818111156109f8576109f86146e2565b6000602082840312156147ae57600080fd5b5051919050565b6000602082840312156147c757600080fd5b81516109f58161475e565b6001600160801b03818116838216019080821115612757576127576146e2565b8181036000831280158383131683831282161715612757576127576146e2565b80820281158282048414176109f8576109f86146e2565b6001600160801b03828116828216039080821115612757576127576146e2565b8082018281126000831280158216821582161715612bc757612bc76146e2565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156109f8576109f86146e2565b600f82810b9082900b0360016001607f1b0319811260016001607f1b03821317156109f8576109f86146e2565b600081600f0b60016001607f1b031981036148e0576148e06146e2565b60000392915050565b6000600160ff1b82016148fe576148fe6146e2565b5060000390565b60008261491457614914614734565b600160ff1b82146000198414161561492e5761492e6146e2565b50059056fea26469706673582212205a57cb68f22f2224a8d29564645c4f5033000ee589387562c405c5f2c408f90964736f6c6343000813003361024060405260016000553480156200001757600080fd5b5060405162004a4338038062004a438339810160408190526200003a91620002c2565b80516001600160a01b03166080908152810151819081906103e8111562000074576040516349db44f560e01b815260040160405180910390fd5b60808101516101a05260a08101516101c05260e0810151600003620000ac57604051635428734d60e01b815260040160405180910390fd5b60e08101805160a0525160c08201511080620000dc57508060e001518160c00151620000d991906200038c565b15155b15620000fb5760405163253fffcf60e11b815260040160405180910390fd5b60c081810151905261010081015160e052606081015161018052610120810151600880546001600160a01b0319166001600160a01b03928316179055610140820151166101e05261016081015151670de0b6b3a764000010806200016f5750670de0b6b3a764000081610160015160200151115b806200018b5750670de0b6b3a764000081610160015160400151115b15620001aa576040516322f72cc360e11b815260040160405180910390fd5b61016080820180515161010052805160209081015161012052815160409081015161014052915160600151909252908201516001600160a01b03166102005201516102205250620003af9050565b60405161018081016001600160401b03811182821017156200022a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200024857600080fd5b919050565b6000608082840312156200026057600080fd5b604051608081016001600160401b03811182821017156200029157634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006101e08284031215620002d657600080fd5b620002e0620001f8565b620002eb8362000230565b8152620002fb6020840162000230565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101206200035881850162000230565b908201526101406200036c84820162000230565b9082015261016062000381858583016200024d565b908201529392505050565b600082620003aa57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161452b620005186000396000505060005050600050506000818160e4015261035d01526000818161188101528181611f0f01528181611f4b0152818161212c01526122de015260008181610af301528181610b40015281816115f701528181611c3c01526122b80152600061116f01526000818161193a01528181611ce50152611d5e01526000818161080301528181610ca90152818161190e0152611d32015260008181610b920152611cb1015260008181610ad101528181610b61015281816115d501528181611c5d015261230401526000818161074b01528181610c2f0152818161168701528181611b070152612df90152600081816106fc01526110b80152600081816105a1015281816105ea015281816112b2015281816112fb015281816113d50152611473015261452b6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806329b23fc11461003b578063ded0623114610060575b600080fd5b61004e610049366004614242565b610073565b60405190815260200160405180910390f35b61004e61006e366004614242565b61008a565b600061008185858585610098565b95945050505050565b600061008185858585610316565b600080546001146100dd5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064015b60405180910390fd5b60026000557f00000000000000000000000000000000000000000000000000000000000000008410156101235760405163211ddda360e11b815260040160405180910390fd5b600061012d610586565b90506101398682610685565b5061014f6101486002886109bc565b33876109f1565b60008060008060006101628a878d610a99565b945094509450945094508a4210156101c857806009600082825461018691906142b7565b9091555061019990508a8685858f610d02565b60006101a48c610e79565b90506101b96101b38c836142ca565b82610ec1565b6101c287610f74565b50610252565b60006101d26110b1565b6000818152600760205260409020549091506101f99086906001600160801b0316896110ec565b600254600160801b90046001600160801b0316808610156102255761021e86826142ea565b9050610229565b5060005b61023281611257565b600280546001600160801b03928316600160801b02921691909117905550505b600061025e858a611281565b9050600061026d82898c61156b565b90508a8110156102905760405163c972651760e01b815260040160405180910390fd5b8b8d61029d6002826109bc565b6102aa60208e018e6142fd565b60408051848152602081018790529081018d9052606081018590526001600160a01b0391909116907f32f37298489a8da0fde394937191ad6035015dd8a04bc97c304d59858e3bfd679060800160405180910390a350506001600055509b9a5050505050505050505050565b600080546001146103565760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016100d4565b60026000557f000000000000000000000000000000000000000000000000000000000000000084101561039c5760405163211ddda360e11b815260040160405180910390fd5b60006103a6610586565b90506103b28682610685565b506103c16101486001886109bc565b60008060008060006103d48a878d61159d565b9450945094509450945060008b90508b4210156104395781600960008282546103fd91906142b7565b9091555061041090508b8786868561170d565b600061041b82610e79565b905061042a6101b38d83614326565b61043388610f74565b506104c3565b60006104436110b1565b60008181526007602052604090205490915061046a9087906001600160801b03168a6110ec565b600254600160801b90046001600160801b0316808710156104965761048f87826142ea565b905061049a565b5060005b6104a381611257565b600280546001600160801b03928316600160801b02921691909117905550505b60006104cf868b611281565b905060006104de828a8d61156b565b9050808c11156105015760405163c972651760e01b815260040160405180910390fd5b8c61050d6001856109bc565b61051a60208e018e6142fd565b60408051878152602081018690529081018d9052606081018490526001600160a01b0391909116907f4c68e40241b8ae371bc7dae7035400158b60d0b7d69b35477b693759bb2c0ca09060800160405180910390a3505060016000559c9b505050505050505050505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016105d5575047610660565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610639573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065d9190614346565b90505b60105460000361067157600061067f565b60105461067f9082906118e2565b91505090565b600082815260076020526040812080546001600160801b03161515806106aa57504284115b156106c057546001600160801b031690506109b6565b6106c983611257565b81546001600160801b0319166001600160801b0391821617825560025461074191600160801b90910416600760006107217f0000000000000000000000000000000000000000000000000000000000000000896142ea565b81526020810191909152604001600020546001600160801b0316856110ec565b60006007816107707f0000000000000000000000000000000000000000000000000000000000000000886142ea565b815260208101919091526040016000908120546001600160801b031691506107996002876109bc565b6000818152600c60205260408120549192508115610880576000806107c1848a8860006118f7565b9150915080600960008282546107d791906142b7565b909155506107eb905084600084808e610d02565b60006107f7858b6118e2565b90506108278582898d8e7f00000000000000000000000000000000000000000000000000000000000000006119c5565b925061083283611257565b60028054601090610854908490600160801b90046001600160801b031661435f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600193505050505b600061088d60018a6109bc565b6000818152600c60205260409020549091508015610937576000806108b5838c8a60016118f7565b9150915080600960008282546108cb91906142b7565b909155508c90506108e084600085808561170d565b6108e983611257565b6002805460109061090b908490600160801b90046001600160801b031661435f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600195505050505b821561095a5761095161094a85836142ca565b6000610ec1565b61095a89610f74565b897f5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd15518a86846109888e611a16565b60408051948552602085019390935291830152606082015260800160405180910390a2889750505050505050505b92915050565b60006001600160f81b038211156109e65760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600b602090815260408083206001600160a01b038616845290915281208054839290610a239084906142ea565b90915550506000838152600c602052604081208054839290610a469084906142ea565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000806000806000806000610aad88611ada565b9050610b17610aba611b2b565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000611b4c565b909850955091506000610b85610b2b611b2b565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611bbc565b9050610bbb8389610bb6847f0000000000000000000000000000000000000000000000000000000000000000611bd3565b611c03565b15610bd95760405163512095c760e01b815260040160405180910390fd5b8a8a60008080610beb85888887611c8c565b9b5091945092509050610bfe81846142ea565b610c0890896142b7565b9750610c1482846142b7565b610c1e908c6142b7565b9a50505050505050506000600760007f00000000000000000000000000000000000000000000000000000000000000008a610c5991906142ea565b815260208101919091526040016000908120546001600160801b03169150428911610c9b576000898152600760205260409020546001600160801b0316610c9d565b895b9050610ccd8b8784848e7f00000000000000000000000000000000000000000000000000000000000000006119c5565b9650610cd984876142ea565b9550610ceb8787858786866000611d9a565b9b9f939e50919c50909a5090975050505050505050565b6004546001600160801b0316610d42610d3d82610d2785670de0b6b3a764000061437f565b6005546001600160801b031691908a6000611e15565b611257565b600580546001600160801b0319166001600160801b0392909216919091179055610d6b86611257565b610d759082614396565b600480546001600160801b0319166001600160801b0392909216919091179055610d9e84611257565b60018054600090610db99084906001600160801b031661435f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610de683611e99565b60028054600090610dfb908490600f0b6143b6565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550610e2b85611257565b60018054601090610e4d908490600160801b90046001600160801b0316614396565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000600c6000610e8a6002856109bc565b815260200190815260200160002054600c6000610ea86001866109bc565b8152602001908152602001600020546109b691906142ca565b6000610eea610ed08483611ed7565b610edb846000611ed7565b610ee591906142ca565b611e99565b9050600081600f0b1315610f3f5760038054829190600090610f169084906001600160801b031661435f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b1215610f6f57610f54816143e3565b60038054600090610f169084906001600160801b0316614396565b505050565b600654600360f81b6000908152600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d549091610fbf916001600160801b03909116906142ea565b905080600003610fcd575050565b6000610fd883611eed565b905080600003610fe757505050565b600080610ffd610ff8848688611f8f565b612068565b9150915061100a82611257565b600680546000906110259084906001600160801b031661435f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061105281611257565b60068054601090611074908490600160801b90046001600160801b031661435f565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506110aa816110a590614409565b6120ff565b5050505050565b60006110dd7f00000000000000000000000000000000000000000000000000000000000000004261443b565b6110e790426142ea565b905090565b81811180156110fb5750600082115b15610f6f57600061111761110f84846142ea565b8590846121f0565b905061112281611257565b60028054601090611144908490600160801b90046001600160801b0316614396565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550600061119d7f00000000000000000000000000000000000000000000000000000000000000008361220e90919063ffffffff16565b905080600960008282546111b191906142b7565b909155506111c1905081836142ea565b91506111cc82611257565b600180546000906111e79084906001600160801b031661435f565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061121482611257565b60028054600090611229908490600f0b6143b6565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505050505050565b6000600160801b821061127d57604051630f0af95160e11b815260040160405180910390fd5b5090565b600060105483116112925782611296565b6010545b9250600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016112e6575047611371565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561134a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061136e9190614346565b90505b6010546000036113825760006113a1565b6113a161139a601054836118e290919063ffffffff16565b859061220e565b915083601060008282546113b591906142ea565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016114695761140f60208501856142fd565b6001600160a01b03168360405160006040518083038185875af1925050503d8060008114611459576040519150601f19603f3d011682016040523d82523d6000602084013e61145e565b606091505b505080915050611519565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb6114a560208701876142fd565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018690526044016020604051808303816000875af11580156114f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115169190614460565b90505b80611537576040516312171d8360e31b815260040160405180910390fd5b611547604085016020860161447d565b6115625761155d611556610586565b84906118e2565b610081565b50909392505050565b600061157d604083016020840161447d565b15611589575082611596565b611593848461220e565b90505b9392505050565b60008060008060008060006115b188611ada565b905061161b6115be611b2b565b600154600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000612223565b9098509650915060008080611631610b2b611b2b565b905061163f8d85838f611c8c565b98509194509250611652905083866142ea565b945061165e82846142b7565b611668908a6142ea565b9850611674868a6142b7565b9750505050506116f885858385600760007f00000000000000000000000000000000000000000000000000000000000000008e6116b191906142ea565b81526020810191909152604001600020546001600160801b0316428d116116ef5760008d8152600760205260409020546001600160801b03166116f1565b8d5b6001611d9a565b999d939c50919a509098509095505050505050565b600354600160801b90046001600160801b0316611756610d3d8261173985670de0b6b3a764000061437f565b600454600160801b90046001600160801b031691908a6000611e15565b600480546001600160801b03928316600160801b02921691909117905561177c86611257565b6117869082614396565b600380546001600160801b03928316600160801b029216919091179055506117ad83611257565b600180546000906117c89084906001600160801b0316614396565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506117f582611e99565b6002805460009061180a908490600f0b61449a565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061183a84611257565b6001805460109061185c908490600160801b90046001600160801b031661435f565b82546101009290920a6001600160801b038181021990931691831602179091556001547f00000000000000000000000000000000000000000000000000000000000000009116109050806118c45750600254600154600f9190910b6001600160801b03909116125b156110aa5760405163585fe6df60e11b815260040160405180910390fd5b600061159683670de0b6b3a7640000846121f0565b60008061190486866118e2565b91506000611932837f000000000000000000000000000000000000000000000000000000000000000061220e565b905061195e817f000000000000000000000000000000000000000000000000000000000000000061220e565b915083156119815761197082826142ea565b61197a90846142ea565b9250611998565b61198b82826142ea565b61199590846142b7565b92505b848610156119bb576119ab8387876121f0565b92506119b88287876121f0565b91505b5094509492505050565b6000806119dd846119d78a888a6121f0565b906118e2565b90506119ea8884866121f0565b6119f490826142b7565b905086811115611a0b57611a0887826142ea565b91505b509695505050505050565b60008060008311611a28576000611a43565b611a4383611a3d611a388661226f565b61237c565b9061220e565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b0390921691611aae91906142b7565b611ab891906142ea565b90508015611acf57611aca82826118e2565b611ad2565b60005b949350505050565b600080611ae56110b1565b9050808311611af5576000611aff565b611aff81846142ea565b9150611596827f00000000000000000000000000000000000000000000000000000000000000006118e2565b6001546002546000916110e7916001600160801b0390911690600f0b6123b3565b60008080611b6d611b6588670de0b6b3a76400006142ea565b8990876121f0565b90508615611baf57611b7f888861220e565b9150611ba08a8a84611b998a670de0b6b3a76400006142ea565b89896123d0565b9250611bac83826142b7565b90505b9750975097945050505050565b600061008182611bcd8588886121f0565b90612479565b6000611bf1611bea84670de0b6b3a76400006142ea565b83906124d0565b61159690670de0b6b3a76400006142ea565b600080611c8185611c12611b2b565b611c1c91906142b7565b600154611c3a908790600160801b90046001600160801b03166142ea565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611bbc565b909210949350505050565b6000808080611cdd8786611cd68b611a3d611caf8c670de0b6b3a76400006142ea565b7f00000000000000000000000000000000000000000000000000000000000000009061220e565b91906121f0565b9350611d09847f000000000000000000000000000000000000000000000000000000000000000061220e565b91506000611d2a611d2289670de0b6b3a76400006142ea565b8a90886121f0565b9050611d56817f000000000000000000000000000000000000000000000000000000000000000061220e565b9350611d82847f000000000000000000000000000000000000000000000000000000000000000061220e565b611d8c90846142b7565b915050945094509450949050565b60008060008060008088881015611df7578615611dbf57611dbc8d898b6121f0565b9c505b611dca8c898b6121f0565b9b50611dd68b8d6142ca565b9050611de38b898b6121f0565b9a50611df08a898b6121f0565b9950611e04565b611e018b8d6142ca565b90505b9b9c9a9b999a975050505050505050565b60008115611e5557611e4e611e2a84876142b7565b611e34858761220e565b611e3e888a61220e565b611e4891906142b7565b906124e5565b9050610081565b828503611e6457506000610081565b611e8f611e7184876142ea565b611e7b858761220e565b611e85888a61220e565b611e4891906142ea565b9695505050505050565b600060016001607f1b03198212801590611eba575060016001607f1b038213155b61127d5760405163a5353be560e01b815260040160405180910390fd5b6000818313611ee65781611596565b5090919050565b6003546000908190611f08906001600160801b0316846118e2565b9050611f347f0000000000000000000000000000000000000000000000000000000000000000826142b7565b6001546001600160801b03161115611f89576001547f000000000000000000000000000000000000000000000000000000000000000090611f7f9083906001600160801b03166142ea565b61159691906142ea565b50919050565b611f97614196565b6000611fa28361226f565b90506000611faf8261237c565b90506000611fd083610140015184610120015161220e90919063ffffffff16565b61010084015160e0850151611fe49161220e565b611fee91906142ca565b604080516101208101825285815260208082019590955260008052600c85527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854818301526060810198909852608088019890985260a087015250815160c086015281015160e08501529093015161010083015250919050565b600080600061207f8460c001518560e001516123b3565b9050600061208d85836124fa565b9050600061209b86836127f8565b9050806000036120b357506000958695509350505050565b856060015181116120c8579590945092505050565b50606085015160006120da87856128a3565b9050806000036120f35750600096879650945050505050565b90969095509350505050565b6001546002546001600160801b0380831692600f9290920b91600160801b900416600080806121518686867f00000000000000000000000000000000000000000000000000000000000000008b612ccd565b9250925092508583146121885761216783611257565b600180546001600160801b0319166001600160801b03929092169190911790555b8482146121b95761219882611e99565b600280546001600160801b0319166001600160801b03929092169190911790555b8381146121e7576121c981611257565b600180546001600160801b03928316600160801b0292169190911790555b50505050505050565b600082600019048411830215820261220757600080fd5b5091020490565b60006115968383670de0b6b3a76400006121f0565b6000808061223c611b6588670de0b6b3a76400006142ea565b90508615611baf5761224e888861220e565b9150611ba08a8a846122688a670de0b6b3a76400006142ea565b8989612d7a565b6122776141e8565b60408051610160810182526001546001600160801b038082168352600254600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c0830152600354819004831660e0830152600454919261010084019261234c92900416612dae565b81526004546001600160801b0390811660208301526005546040909201916123749116612dae565b905292915050565b600080600061238a84612e24565b91509150806123ac5760405163aeeb825d60e01b815260040160405180910390fd5b5092915050565b6000806123c083856142ca565b9050600081121561159657600080fd5b6000806123e08888878787612e9e565b90506123f085611bcd888a6142ea565b9650600061240a84866124038b866142ea565b9190612ecd565b9050670de0b6b3a7640000811061243e57612437612430670de0b6b3a7640000886124e5565b8290612479565b9050612456565b612453612430670de0b6b3a7640000886118e2565b90505b61246081856124e5565b905061246c89826142ea565b9998505050505050505050565b6000816000036124925750670de0b6b3a76400006109b6565b826000036124a2575060006109b6565b8160006124ae85612ef3565b90508181026124c5670de0b6b3a7640000826144c7565b9050611e8f81613106565b60006115968383670de0b6b3a7640000612ecd565b600061159683670de0b6b3a764000084612ecd565b6000808360a0015112612512575060808201516109b6565b60008360a0015161252290614409565b90506125538460c001518560e00151866101000151876000015160a00151886080015161254e90614409565b612ccd565b8651604081019190915260208082019290925291909152845180519101516000916125b39161258291906123b3565b8651604081015160c0909101516125a190670de0b6b3a76400006142ea565b88516060810151608090910151613291565b90508181106125c95750505060808201516109b6565b5060006125d7858584613327565b905060005b60038110156127535761260b8660c001518760e00151886101000151896000015160a001518661254e90614409565b88516040810191909152602080820192909252919091528651805191015160009161266b9161263a91906123b3565b8851604081015160c09091015161265990670de0b6b3a76400006142ea565b8a516060810151608090910151613291565b905060008061267a89896134c5565b915091508061268b57505050612753565b858311156126e7578496506126b7620f4240670de0b6b3a76400006126b091906142b7565b879061220e565b83116126c8575050505050506109b6565b6126d6826119d788866142ea565b6126e090866142b7565b9450612731565b858310156127235760006126ff836119d7868a6142ea565b90508581106127115750505050612753565b61271b81876142ea565b955050612731565b8496505050505050506109b6565b886080015185111561274557886080015194505b8360010193505050506125dc565b508281146127f0576127818560c001518660e00151876101000151886000015160a001518561254e90614409565b8751604081019190915260208082019290925291909152855180519101516000916127e1916127b091906123b3565b8751604081015160c0909101516127cf90670de0b6b3a76400006142ea565b89516060810151608090910151613291565b90508281106127ee578193505b505b505092915050565b60006128208360c001518460e00151856101000151866000015160a001518661254e90614409565b855160408101919091526020810191909152528251600090819061284390612e24565b91509150801580612858575084602001518210155b15612868576000925050506109b6565b60008560600151866040015161287e91906142b7565b9050612899838760200151836121f09092919063ffffffff16565b611e8f90826142ea565b600080836060015184604001516128ba91906142b7565b90508360a001516000036128e457606084015160208501516128dc91836121f0565b9150506109b6565b602084015160608501516000916128fc9190846121f0565b905060008560a001511315612b3e5760005b6004811015612b385761293d8660c001518760e00151886101000151896000015160a001518661254e90614409565b88516040810191909152602081019190915252855160009061295e9061237c565b905061296b878286613736565b156129765750612b38565b865180516020820151604083015160a084015160c09094015160009485946129c394909390929091906129b190670de0b6b3a76400006142ea565b8e5160608101516080909101516137af565b91509150806129d457505050612b38565b6000828a60a0015111612a37576129f08a8a8c60a00151613891565b92509050811580612a095750670de0b6b3a76400008110155b15612a1e5760009750505050505050506109b6565b612a3081670de0b6b3a76400006142ea565b9050612a69565b612a408a613b52565b909650915081612a5a5760009750505050505050506109b6565b859750505050505050506109b6565b6000612a868b604001518c602001516124d090919063ffffffff16565b612a90868a61220e565b612a9a91906142ca565b90506000811315612aca57612ab9612ab2838a6124d0565b82906118e2565b612ac390886142b7565b9650612b28565b6000811215612b1e576000612aeb612ae2848b6124d0565b6119d784614409565b905087811015612b0657612aff81896142ea565b9750612b18565b600099505050505050505050506109b6565b50612b28565b5050505050612b38565b856001019550505050505061290e565b50611ad2565b60005b6004811015612cc457612b708660c001518760e00151886101000151896000015160a001518661254e90614409565b885160408101919091526020810191909152528551600090612b919061237c565b9050612b9e878286613736565b15612ba95750612cc4565b600080612bc489898b60a00151612bbf90614409565b613c3d565b91509150801580612bdd5750670de0b6b3a76400008210155b15612bf157600096505050505050506109b6565b612c0382670de0b6b3a76400006142ea565b91506000612c228a604001518b602001516124d090919063ffffffff16565b612c2c858961220e565b612c3691906142ca565b90506000811315612c6057612c4f876119d783866118e2565b612c5990876142b7565b9550612cb5565b6000811215612cac576000612c7a886119d7868186614409565b905086811015612c9557612c8e81886142ea565b9650612ca6565b6000985050505050505050506109b6565b50612cb5565b50505050612cc4565b84600101945050505050612b41565b50949350505050565b600080600083600003612ce7575086915085905084612d6f565b6000612cf3858a614326565b905085811215612d165760405163585fe6df60e11b815260040160405180910390fd5b80935060008812612d3357612d2c84898b6121f0565b9250612d53565b612d47612d3f89614409565b85908b6121f0565b612d5090614409565b92505b612d6b87612d618b8b6123b3565b611cd687876123b3565b9150505b955095509592505050565b600080612d8b888888888888613d7c565b909250905080611a0b57604051637ac17d2560e01b815260040160405180910390fd5b600080670de0b6b3a7640000612dc26110b1565b612dcc919061437f565b9050808311612ddc576000612de6565b612de681846142ea565b9150611596612e1d670de0b6b3a76400007f000000000000000000000000000000000000000000000000000000000000000061437f565b83906118e2565b6000806000806000612e3586613e3e565b9150915080612e4c57506000958695509350505050565b8560a00151612e5a8761407b565b8751612e67908590614326565b612e719190614326565b612e7b91906142ca565b925050506000811215612e945750600093849350915050565b9360019350915050565b6000612eaa8585612479565b612ec3612ebb86611bcd868b6124d0565b859085612ecd565b611e8f91906142b7565b6000826000190484118302158202612ee457600080fd5b50910281810615159190040190565b6000808213612f1557604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361312157506000919050565b680755bf798b4a1bf1e5821261314a5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000806132a18787878787612e9e565b905060006132cc670de0b6b3a76400006132bb87876118e2565b6132c591906142b7565b83906124e5565b9050670de0b6b3a764000081106132f9576132f2612430670de0b6b3a7640000886124e5565b9050613311565b61330e612430670de0b6b3a7640000886118e2565b90505b61331b81886142ea565b98975050505050505050565b82516080810151606090910151600091829161339091670de0b6b3a764000091613350916118e2565b61335a91906142b7565b610100870151875160c00151611e4891889161337e90670de0b6b3a76400006142ea565b8a516060810151608090910151612e9e565b9050670de0b6b3a764000081106133d757845160c001516133d090612430906133c190670de0b6b3a76400006142ea565b670de0b6b3a7640000906124e5565b9050613409565b845160c0015161340690612430906133f790670de0b6b3a76400006142ea565b670de0b6b3a7640000906118e2565b90505b61341383826142b7565b905060008560e001511261346f576134686134616134428760c001518860e001516124e590919063ffffffff16565b61345490670de0b6b3a76400006142ea565b61010088015190876121f0565b82906124e5565b90506134a0565b61349d61346161348b8760c001518860e001516119d790614409565b61345490670de0b6b3a76400006142b7565b90505b8460c0015181106134b5576000915050611596565b808560c0015161008191906142ea565b81518051602090910151600091829182916134df916123b3565b855160c08101516040909101519192506000916135169161350a9161350391612479565b87906124d0565b610100880151906118e2565b865160c08101516080909101516135419161353591611bcd90876124d0565b885160600151906118e2565b61354b91906142b7565b9050600061358a83886000015160400151896000015160c00151670de0b6b3a764000061357891906142ea565b8a5160608101516080909101516140e2565b9050670de0b6b3a764000081106135e1576135da6135d36135cc896000015160c00151670de0b6b3a76400006135c091906142ea565b8a5160c00151906118e2565b8390612479565b839061220e565b9150613615565b6136126135d36135cc896000015160c00151670de0b6b3a764000061360691906142ea565b8a5160c00151906124e5565b91505b613665612e1d61363a896000015160c00151670de0b6b3a76400006133c191906142ea565b89516080810151606090910151670de0b6b3a76400009161365b91906124e5565b611bcd91906142b7565b91506000613681878961010001516124e590919063ffffffff16565b905080831161369b5761369483826142ea565b92506136ab565b600080955095505050505061372f565b60008860e00151126136f5576136ee836136d68a60c001518b60e001516118e290919063ffffffff16565b6136e890670de0b6b3a76400006142ea565b906124d0565b9250613724565b6137218361370f8a60c001518b60e00151611e4890614409565b6136e890670de0b6b3a76400006142b7565b92505b509093506001925050505b9250929050565b6000806137508486602001516118e290919063ffffffff16565b9050600061376b8660400151856118e290919063ffffffff16565b90508181101561378057600092505050611596565b818110158015611e8f57506137a46135d3633b9aca00670de0b6b3a76400006142b7565b101595945050505050565b60008060008812156137d1576137c488614409565b6137ce90876142b7565b95505b60006137dd8a8a6123b3565b905060006137ee828a8989896140e2565b9050600061380b61380389611bcd898d6124d0565b889088612ecd565b61381590836142ea565b9050670de0b6b3a764000081106138425761383b612430670de0b6b3a76400008a6118e2565b905061385a565b613857612430670de0b6b3a76400008a6124e5565b90505b898110156138715760008094509450505050613885565b61387b8a826142ea565b6001945094505050505b97509795505050505050565b82518051602090910151600091829182916138ab916123b3565b905060006138e86138dc6138d5896000015160c00151888b6000015160400151611bcd91906142b7565b88906124d0565b610100890151906118e2565b875160c08101516040909101516139199161390d9161390691612479565b899061220e565b6101008a0151906124e5565b885160c08101516080909101516139449161393891611bcd908861220e565b8a5160600151906124e5565b61394e91906142b7565b61395891906142ea565b90506000613997838960000151604001518a6000015160c00151670de0b6b3a764000061398591906142ea565b8b516060810151608090910151612e9e565b905060006139cb896000015160c00151670de0b6b3a76400006139ba91906142ea565b8a5160400151611bcd908a906142b7565b9050808210156139e5576000809550955050505050613b4a565b613a066139f282846142ea565b8a5160608101516080909101519190612ecd565b9050670de0b6b3a76400008110613a4a57885160c00151613a439061243090613a3790670de0b6b3a76400006142ea565b8b5160c00151906124e5565b9050613a79565b885160c00151613a769061243090613a6a90670de0b6b3a76400006142ea565b8b5160c00151906118e2565b90505b885160600151613a8c9084908390612ecd565b925082670de0b6b3a764000010613ab657613aaf83670de0b6b3a76400006142ea565b9250613ac7565b600060019550955050505050613b4a565b60008960e0015112613b1157613b0a613af18a60c001518b60e001516124e590919063ffffffff16565b613b0390670de0b6b3a76400006142ea565b849061220e565b9250613b3f565b613b3c613b2a8a60c001518b60e001516119d790614409565b613b0390670de0b6b3a76400006142b7565b92505b509093506001925050505b935093915050565b60008060008360e0015113613b6c57506000928392509050565b60c083015183515260e08301518351602001526101008301518351604001528251600090613b999061407b565b90506000808212613bdb57604085015160608601518391613bca91613bbe90826142b7565b60208901519190612ecd565b613bd491906142ea565b9050613c0a565b613be482614409565b60408601516060870151613bfd9190613bbe90826142b7565b613c0791906142b7565b90505b60e085015160c0860151613c1f918390612ecd565b9050808560c00151613c3191906142ea565b95600195509350505050565b8251805160209091015160009182918291613c57916123b3565b90506000613c816138dc6138d5896000015160c00151888b6000015160400151611bcd91906142ea565b875160c0810151604090910151613c9f9161390d9161390691612479565b885160c0810151608090910151613cbe9161393891611bcd908861220e565b613cc891906142b7565b613cd291906142ea565b90506000613cff838960000151604001518a6000015160c00151670de0b6b3a764000061398591906142ea565b90506000613d33896000015160c00151670de0b6b3a7640000613d2291906142ea565b8a5160400151611bcd908a906142ea565b905080821015613d4d576000809550955050505050613b4a565b613d5a6139f282846142ea565b9050885160c00151613a439061243090613a3790670de0b6b3a76400006142ea565b6000806000613d8e8989888888612e9e565b9050613d9e86611bcd898b6142b7565b975087811015613db5576000809250925050613e33565b6000613dc685876124038c866142ea565b9050670de0b6b3a76400008110613df357613dec612430670de0b6b3a7640000896124e5565b9050613e0b565b613e08612430670de0b6b3a7640000896118e2565b90505b613e1581866124e5565b9050808a1115613e2c57613e29818b6142ea565b93505b6001925050505b965096945050505050565b6000806000613e6084610140015185610120015161220e90919063ffffffff16565b61010085015160e0860151613e749161220e565b613e7e91906142ca565b90506000613e94856000015186602001516123b3565b90506000821315613f97576000829050600080613ee5886000015189602001518a604001518b60a001518c60c00151670de0b6b3a7640000613ed691906142ea565b8d606001518e608001516137af565b9150915080613efe575060009788975095505050505050565b828210613f53576000613f38858a60400151868c60c00151670de0b6b3a7640000613f2991906142ea565b8d606001518e60800151612d7a565b9050613f4381614409565b9960019950975050505050505050565b6000886020015112613f865760a0880151613f6e90856142ea565b613f7790614409565b98600198509650505050505050565b60a08801518851613f6e91906142ea565b600082121561406d576000613fab83614409565b90506000613fdf8388604001518960c00151670de0b6b3a7640000613fd091906142ea565b8a606001518b60800151613291565b905081811061401b576000613f77848960400151858b60c00151670de0b6b3a764000061400c91906142ea565b8c606001518d608001516123d0565b600061404d8489604001518a60c00151670de0b6b3a764000061403e91906142ea565b8b606001518c60800151614107565b9050614063886060015183856119d791906142ea565b613f7790826142b7565b506000946001945092505050565b60006140aa826101000151670de0b6b3a764000061409991906142ea565b606084015160e085015191906121f0565b6140d8836101400151670de0b6b3a76400006140c691906142ea565b606085015161012086015191906121f0565b6109b691906142ca565b60006140ee8585612479565b612ec36140ff86611bcd868b61220e565b8590856121f0565b60008061411787878787876140e2565b9050600061413b670de0b6b3a764000061413187876124e5565b612e1d91906142b7565b9050670de0b6b3a7640000811061416857614161612430670de0b6b3a7640000886118e2565b9050614180565b61417d612430670de0b6b3a7640000886124e5565b90505b61418a81856118e2565b905061331b88826142ea565b6040518061012001604052806141aa6141e8565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561425857600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561428457600080fd5b85016060818803121561429657600080fd5b939692955090935050565b634e487b7160e01b600052601160045260246000fd5b808201808211156109b6576109b66142a1565b81810360008312801583831316838312821617156123ac576123ac6142a1565b818103818111156109b6576109b66142a1565b60006020828403121561430f57600080fd5b81356001600160a01b038116811461159657600080fd5b80820182811260008312801582168215821617156127f0576127f06142a1565b60006020828403121561435857600080fd5b5051919050565b6001600160801b038181168382160190808211156123ac576123ac6142a1565b80820281158282048414176109b6576109b66142a1565b6001600160801b038281168282160390808211156123ac576123ac6142a1565b600f81810b9083900b0160016001607f1b03811360016001607f1b0319821217156109b6576109b66142a1565b600081600f0b60016001607f1b03198103614400576144006142a1565b60000392915050565b6000600160ff1b820161441e5761441e6142a1565b5060000390565b634e487b7160e01b600052601260045260246000fd5b60008261444a5761444a614425565b500690565b801515811461445d57600080fd5b50565b60006020828403121561447257600080fd5b81516115968161444f565b60006020828403121561448f57600080fd5b81356115968161444f565b600f82810b9082900b0360016001607f1b0319811260016001607f1b03821317156109b6576109b66142a1565b6000826144d6576144d6614425565b600160ff1b8214600019841416156144f0576144f06142a1565b50059056fea264697066735822122083263e85dfb7da20d877f9d8043909b17d939397d0130fa5dab1436dc9d8071764736f6c63430008130033",
    "sourceMap": "5746:4273:66:-:0;;;454:1:98;429:26;;5849:349:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5946:7;6001;5975:34;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;6058:7;6032:34;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;6115:7;6089:34;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;6172:7;6146:34;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;5081:17:49;;-1:-1:-1;;;;;5068:30:49;;;;;5627:28;;;2831:7:0;;5658:3:49;-1:-1:-1;5623:113:49;;;5684:41;;-1:-1:-1;;;5684:41:49;;;;;;;;;;;5623:113;5769:28;;;;5745:52;;6085:32;;;;6057:60;;6282:26;;;;6312:1;6282:31;6278:108;;6336:39;;-1:-1:-1;;;6336:39:49;;;;;;;;;;;6278:108;6417:26;;;;;6395:48;;6497:26;6470:24;;;;:53;;:127;;;6566:7;:26;;;6539:7;:24;;;:53;;;;:::i;:::-;:58;;6470:127;6453:224;;;6629:37;;-1:-1:-1;;;6629:37:49;;;;;;;;;;;6453:224;6706:24;;;;;6686:44;;6755:19;;;;6740:34;;6805:25;;;;6784:46;;6854:18;;;;6840:11;:32;;-1:-1:-1;;;;;;6840:32:49;-1:-1:-1;;;;;6840:32:49;;;;;;6898:20;;;;6882:36;;;6988:12;;;;:18;7009:4;-1:-1:-1;;6988:65:49;;;7049:4;7029:7;:12;;;:17;;;:24;6988:65;:113;;;;7097:4;7069:7;:12;;;:25;;;:32;6988:113;6971:204;;;7133:31;;-1:-1:-1;;;7133:31:49;;;;;;;;;;;6971:204;7196:12;;;;;;:18;7184:30;;7235:12;;:17;;;;;7224:28;;7281:12;;-1:-1:-1;7281:25:49;;;;7262:44;;7339:12;;-1:-1:-1;7339:29:49;;;;7316:52;;;-1:-1:-1;;;7445:21:49;-1:-1:-1;;;;;7428:38:49;;;;;-1:-1:-1;;;7494:22:49;7476:40;;2894:18:0;;::::1;;::::0;2922;;::::1;;::::0;2950;;::::1;;::::0;2978::::1;;::::0;3560:10;;;;::::1;::::0;;::::1;::::0;;-1:-1:-1;;;3560:10:0;;::::1;::::0;3383:264;;3411:121:::1;3383:264:::0;;::::1;4546:25:161::0;3550:21:0;4587:18:161;;;4580:34;3589:13:0::1;4630:18:161::0;;;4623:34;;;;3628:4:0::1;4673:18:161::0;;;;4666:60;;;;3383:264:0;;;;;;;;;;4518:19:161;;;;3383:264:0;;;3360:297;;;::::1;::::0;3341:316:::1;::::0;-1:-1:-1;5746:4273:66;;-1:-1:-1;5746:4273:66;;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;:::o;14:347:161:-;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:161;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:161;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:161;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1180::-;1340:6;1393:3;1381:9;1372:7;1368:23;1364:33;1361:53;;;1410:1;1407;1400:12;1361:53;1436:17;;:::i;:::-;1476:48;1514:9;1476:48;:::i;:::-;1469:5;1462:63;1557:57;1610:2;1599:9;1595:18;1557:57;:::i;:::-;1552:2;1545:5;1541:14;1534:81;1668:2;1657:9;1653:18;1647:25;1642:2;1635:5;1631:14;1624:49;1726:2;1715:9;1711:18;1705:25;1700:2;1693:5;1689:14;1682:49;1785:3;1774:9;1770:19;1764:26;1758:3;1751:5;1747:15;1740:51;1845:3;1834:9;1830:19;1824:26;1818:3;1811:5;1807:15;1800:51;1905:3;1894:9;1890:19;1884:26;1878:3;1871:5;1867:15;1860:51;1965:3;1954:9;1950:19;1944:26;1938:3;1931:5;1927:15;1920:51;1990:3;2046:2;2035:9;2031:18;2025:25;2020:2;2013:5;2009:14;2002:49;;2070:3;2105:57;2158:2;2147:9;2143:18;2105:57;:::i;:::-;2089:14;;;2082:81;2182:3;2217:57;2255:18;;;2217:57;:::i;:::-;2201:14;;;2194:81;2294:3;2329:62;2383:7;2363:18;;;2329:62;:::i;:::-;2313:14;;;2306:86;2317:5;1242:1180;-1:-1:-1;;;1242:1180:161:o;2806:1290::-;3036:13;;-1:-1:-1;;;;;2501:31:161;2489:44;;2996:3;2981:19;;3108:4;3100:6;3096:17;3090:24;3123:62;3179:4;3168:9;3164:20;3150:12;-1:-1:-1;;;;;2501:31:161;2489:44;;2427:112;3123:62;;3241:4;3233:6;3229:17;3223:24;3216:4;3205:9;3201:20;3194:54;3304:4;3296:6;3292:17;3286:24;3279:4;3268:9;3264:20;3257:54;3367:4;3359:6;3355:17;3349:24;3342:4;3331:9;3327:20;3320:54;3430:4;3422:6;3418:17;3412:24;3405:4;3394:9;3390:20;3383:54;3493:4;3485:6;3481:17;3475:24;3468:4;3457:9;3453:20;3446:54;3556:4;3548:6;3544:17;3538:24;3531:4;3520:9;3516:20;3509:54;3582:6;3642:2;3634:6;3630:15;3624:22;3619:2;3608:9;3604:18;3597:50;;3666:6;3721:2;3713:6;3709:15;3703:22;3734:62;3792:2;3781:9;3777:18;3761:14;-1:-1:-1;;;;;2501:31:161;2489:44;;2427:112;3734:62;-1:-1:-1;;3815:6:161;3858:15;;;3852:22;-1:-1:-1;;;;;2501:31:161;3926:18;;;2489:44;3964:6;4007:15;;;4001:22;2614:12;;4071:18;;;2602:25;;;;2676:4;2665:16;;2659:23;2643:14;;;2636:47;2732:4;2721:16;;2715:23;2699:14;;;2692:47;2788:4;2777:16;;;2771:23;2755:14;;;;2748:47;2806:1290;:::o;4101:209::-;4133:1;4159;4149:132;;4203:10;4198:3;4194:20;4191:1;4184:31;4238:4;4235:1;4228:15;4266:4;4263:1;4256:15;4149:132;-1:-1:-1;4295:9:161;;4101:209::o;4315:417::-;5746:4273:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x60806040526004361061023b5760003560e01c80639aa684621161012e578063ca6d38f7116100ab578063dbbe80701161006f578063dbbe807014610873578063ded0623114610473578063e44808bc146108cf578063eac3e799146108ef578063ed64bab2146109235761023b565b8063ca6d38f714610853578063cba2e58d14610873578063cbc134341461036d578063d5002f2e14610886578063d899e1121461089b5761023b565b8063a77384c1116100f2578063a77384c1146106e7578063ab033ea914610707578063ac25d47f14610722578063b1b4b170146107f6578063b4f8da39146108165761023b565b80639aa68462146106605780639bd33498146106735780639cd241af14610693578063a22cb465146105b8578063a6e8a859146106b35761023b565b80634ed2d6ac116101bc57806371f88b7c1161018057806371f88b7c146105d857806377d05ff4146105f85780638120a3e21461060b5780639032c7261461062b578063907c0f921461064b5761023b565b80634ed2d6ac14610529578063680962391461054457806368c2ecb814610564578063702db0eb146105845780637180c8ca146105b85761023b565b806322d5506b1161020357806322d5506b1461043357806329b23fc11461047357806330adf81f146104a15780633644e515146104d55780633e691db9146105095761023b565b806302329a291461034b578063074a6de91461036d57806317fad7fc146103a75780631c0f12b6146103c757806321b57d53146103e7575b34801561024757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161028a929190611ddb565b600060405180830381855af49150503d80600081146102c5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ca565b606091505b509150915081156102ee57604051638bb0a34b60e01b815260040160405180910390fd5b60006102f982611deb565b90506001600160e01b03198116636e64089360e11b1461031b57815160208301fd5b81516003198101600484019081529261033c91810160200190602401611e86565b80519650602001945050505050f35b34801561035757600080fd5b5061036b610366366004611f3d565b610943565b005b34801561037957600080fd5b5061038d610388366004611f6a565b610970565b604080519283526020830191909152015b60405180910390f35b3480156103b357600080fd5b5061036b6103c236600461201d565b6109a5565b3480156103d357600080fd5b5061036b6103e23660046120ae565b6109d7565b3480156103f357600080fd5b5061041b7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161039e565b34801561043f57600080fd5b5061045361044e3660046120f2565b610a07565b60408051948552602085019390935291830152606082015260800161039e565b34801561047f57600080fd5b5061049361048e366004612124565b610a2b565b60405190815260200161039e565b3480156104ad57600080fd5b506104937f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b3480156104e157600080fd5b506104937f000000000000000000000000000000000000000000000000000000000000000081565b34801561051557600080fd5b5061049361052436600461217e565b610a5f565b34801561053557600080fd5b5061036b6103e23660046121b3565b34801561055057600080fd5b5061036b61055f3660046121f9565b610a90565b34801561057057600080fd5b5061049361057f36600461221b565b610c3b565b34801561059057600080fd5b5061036b61059f36600461224b565b6001600160801b03908116600160801b02911617600155565b3480156105c457600080fd5b5061036b6105d336600461227e565b610c4c565b3480156105e457600080fd5b5061038d6105f33660046122a8565b610c75565b610493610606366004611f6a565b610c91565b34801561061757600080fd5b5061036b61062636600461221b565b610cc4565b34801561063757600080fd5b5061036b6106463660046122d4565b610cd0565b34801561065757600080fd5b50610493610e1a565b61049361066e366004612124565b610e29565b34801561067f57600080fd5b5061045361068e3660046121f9565b610e54565b34801561069f57600080fd5b5061036b6106ae36600461234e565b610e74565b3480156106bf57600080fd5b5061041b7f000000000000000000000000000000000000000000000000000000000000000081565b3480156106f357600080fd5b5061036b61070236600461221b565b601055565b34801561071357600080fd5b5061036b610366366004612383565b34801561072e57600080fd5b5061036b61073d3660046123b0565b805160208201516001600160801b03908116600160801b90810292821692909217600155604083015160608401518216830290821617600255608083015160a0840151821683029082161760035560c083015160e0840151821683029082161760045561010083015160058054610120860151610140909601511515600160881b0260ff60881b1996151590950270ffffffffffffffffffffffffffffffffff1990911692909316919091179190911792909216179055565b34801561080257600080fd5b5061049361081136600461221b565b610ea3565b34801561082257600080fd5b5061036b61083136600461248a565b600380546001600160801b0319166001600160801b0392909216919091179055565b34801561085f57600080fd5b5061049361086e36600461221b565b610eae565b61038d610881366004612124565b610eb9565b34801561089257600080fd5b50601054610493565b3480156108a757600080fd5b5061041b7f000000000000000000000000000000000000000000000000000000000000000081565b3480156108db57600080fd5b5061036b6108ea3660046124a5565b610eef565b3480156108fb57600080fd5b5061041b7f000000000000000000000000000000000000000000000000000000000000000081565b34801561092f57600080fd5b5061036b61093e36600461221b565b610f20565b61096c7f0000000000000000000000000000000000000000000000000000000000000000610f45565b5050565b60008061099c7f0000000000000000000000000000000000000000000000000000000000000000610f45565b50935093915050565b6109ce7f0000000000000000000000000000000000000000000000000000000000000000610f45565b50505050505050565b610a007f0000000000000000000000000000000000000000000000000000000000000000610f45565b5050505050565b600080600080610a1988888888610f65565b929b919a509850909650945050505050565b6000610a567f0000000000000000000000000000000000000000000000000000000000000000610f45565b50949350505050565b6000610a8a7f0000000000000000000000000000000000000000000000000000000000000000610f45565b50919050565b6040516370a0823160e01b8152306004820152600090610b26906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610afb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1f91906124fc565b8385611079565b9150506000811315610bae576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b158015610b9a57600080fd5b505af11580156109ce573d6000803e3d6000fd5b6000811215610c36576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac30610bf08461252b565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015610b9a57600080fd5b505050565b6000610c4682611113565b92915050565b610c367f0000000000000000000000000000000000000000000000000000000000000000610f45565b600080610c8385858561116b565b90925090505b935093915050565b6000610cbc7f0000000000000000000000000000000000000000000000000000000000000000610f45565b509392505050565b610ccd816111eb565b50565b6040517f000000000000000000000000000000000000000000000000000000000000000060248201527f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367360448201526001600160a01b038881166064830152878116608483015286151560a483015260c4820186905260ff851660e48301526101048201849052610124820183905260009182917f000000000000000000000000000000000000000000000000000000000000000016906101440160408051601f198184030181529181526020820180516001600160e01b03166314e5f07b60e01b17905251610dc09190612547565b600060405180830381855af49150503d8060008114610dfb576040519150601f19603f3d011682016040523d82523d6000602084013e610e00565b606091505b509150915081610e1257805160208201fd5b805160208201f35b6000610e246112db565b905090565b6000610a567f0000000000000000000000000000000000000000000000000000000000000000610f45565b600080600080610e648686611311565b9299919850965090945092505050565b610e9d7f0000000000000000000000000000000000000000000000000000000000000000610f45565b50505050565b6000610c46826114ac565b6000610c4682611548565b600080610ee57f0000000000000000000000000000000000000000000000000000000000000000610f45565b5094509492505050565b610f187f0000000000000000000000000000000000000000000000000000000000000000610f45565b505050505050565b61096c7f00000000000000000000000000000000000000000000000000000000000000005b6060600080836001600160a01b0316600036604051610dc0929190611ddb565b6000808080610fbc8786610fb58b610faf610f888c670de0b6b3a7640000612563565b7f0000000000000000000000000000000000000000000000000000000000000000906115be565b906115be565b91906115cf565b9350610fe8847f00000000000000000000000000000000000000000000000000000000000000006115be565b9150600061100961100189670de0b6b3a7640000612563565b8a90886115cf565b9050611035817f00000000000000000000000000000000000000000000000000000000000000006115be565b9350611061847f00000000000000000000000000000000000000000000000000000000000000006115be565b61106b9084612576565b915050945094509450949050565b6000808061108b846301e133806115ed565b905060006110aa82600088126110a15787610faf565b610faf8861252b565b905060008613156110dd576110c86110c182611602565b88906115be565b93506110d48785612563565b92505050610c89565b6000861215611105576110f96110f282611602565b88906115ed565b93506110d48785612589565b509495600095509350505050565b60008061111e6112db565b905080831161112e576000611138565b6111388184612563565b9150611164827f00000000000000000000000000000000000000000000000000000000000000006115ed565b9392505050565b6000806111b585610faf85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a76400006111ab818c6115ed565b610faf9190612563565b91506111e1827f00000000000000000000000000000000000000000000000000000000000000006115be565b9050935093915050565b6001546002546001600160801b0380831692600f9290920b91600160801b9004166000808061123d8686867f00000000000000000000000000000000000000000000000000000000000000008b61178d565b925092509250858314611274576112538361183a565b600180546001600160801b0319166001600160801b03929092169190911790555b8482146112a55761128482611864565b600280546001600160801b0319166001600160801b03929092169190911790555b8381146109ce576112b58161183a565b600180546001600160801b03928316600160801b02921691909117905550505050505050565b60006113077f0000000000000000000000000000000000000000000000000000000000000000426125c6565b610e249042612563565b60008060008061137e6113226118b4565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006118d5565b925060006113e761138d6118b4565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611901565b905061143e8785611439847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611921565b61199a565b1561145c5760405163512095c760e01b815260040160405180910390fd5b60008061146a89848a61116b565b90925090506114798287612563565b94506114858186612576565b955061149281848a6115cf565b935061149e848a612563565b965050505092959194509250565b60035460009081906114c7906001600160801b0316846115ed565b90506114f37f000000000000000000000000000000000000000000000000000000000000000082612576565b6001546001600160801b03161115610a8a576001547f00000000000000000000000000000000000000000000000000000000000000009061153e9083906001600160801b0316612563565b6111649190612563565b600080670de0b6b3a764000061155c6112db565b61156691906125da565b9050808311611576576000611580565b6115808184612563565b91506111646115b7670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006125da565b83906115ed565b60006111648383670de0b6b3a76400005b60008260001904841183021582026115e657600080fd5b5091020490565b600061116483670de0b6b3a7640000846115cf565b6000680248ce36a70cb26b3e19821361161d57506000919050565b680755bf798b4a1bf1e582126116465760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b6000806000836000036117a757508691508590508461182f565b60006117b3858a6125f1565b9050858112156117d65760405163585fe6df60e11b815260040160405180910390fd5b809350600088126117f3576117ec84898b6115cf565b9250611813565b6118076117ff8961252b565b85908b6115cf565b6118109061252b565b92505b61182b876118218b8b611a23565b610fb58787611a23565b9150505b955095509592505050565b6000600160801b821061186057604051630f0af95160e11b815260040160405180910390fd5b5090565b60006f7fffffffffffffffffffffffffffffff19821280159061189757506f7fffffffffffffffffffffffffffffff8213155b6118605760405163a5353be560e01b815260040160405180910390fd5b600154600254600091610e24916001600160801b0390911690600f0b611a23565b60006118f68787876118ef88670de0b6b3a7640000612563565b8787611a40565b979650505050505050565b6000611918826119128588886115cf565b90611ae8565b95945050505050565b600061199261196861193b84670de0b6b3a7640000612563565b611962670de0b6b3a7640000611951818a611b49565b61195b9190612563565b8790611b5e565b90611b5e565b61197a90670de0b6b3a7640000612576565b61198c84670de0b6b3a7640000612563565b906115ed565b949350505050565b600080611a18856119a96118b4565b6119b39190612576565b6001546119d1908790600160801b90046001600160801b0316612563565b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611901565b909210949350505050565b600080611a308385612589565b9050600081121561116457600080fd5b600080611a508888878787611b73565b9050611a6a85611912611a63898c612576565b86906115be565b9750611a778489856115cf565b97506000611a858983612563565b9050670de0b6b3a76400008110611ab957611ab2611aab670de0b6b3a764000088611b49565b8290611ae8565b9050611ad1565b611ace611aab670de0b6b3a7640000886115ed565b90505b611adb8189612563565b9998505050505050505050565b600081600003611b015750670de0b6b3a7640000610c46565b82600003611b1157506000610c46565b816000611b1d85611ba2565b9050818102611b34670de0b6b3a764000082612619565b9050611b3f81611602565b9695505050505050565b600061116483670de0b6b3a764000084611db5565b60006111648383670de0b6b3a7640000611db5565b6000611b7f8585611ae8565b611b98611b9086611912868b611b5e565b859085611db5565b611b3f9190612576565b6000808213611bc457604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000826000190484118302158202611dcc57600080fd5b50910281810615159190040190565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015611e1a5780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610160810167ffffffffffffffff81118282101715611e5c57611e5c611e22565b60405290565b60005b83811015611e7d578181015183820152602001611e65565b50506000910152565b600060208284031215611e9857600080fd5b815167ffffffffffffffff80821115611eb057600080fd5b818401915084601f830112611ec457600080fd5b815181811115611ed657611ed6611e22565b604051601f8201601f19908116603f01168101908382118183101715611efe57611efe611e22565b81604052828152876020848701011115611f1757600080fd5b6118f6836020830160208801611e62565b80358015158114611f3857600080fd5b919050565b600060208284031215611f4f57600080fd5b61116482611f28565b600060608284031215610a8a57600080fd5b600080600060608486031215611f7f57600080fd5b8335925060208401359150604084013567ffffffffffffffff811115611fa457600080fd5b611fb086828701611f58565b9150509250925092565b80356001600160a01b0381168114611f3857600080fd5b60008083601f840112611fe357600080fd5b50813567ffffffffffffffff811115611ffb57600080fd5b6020830191508360208260051b850101111561201657600080fd5b9250929050565b6000806000806000806080878903121561203657600080fd5b61203f87611fba565b955061204d60208801611fba565b9450604087013567ffffffffffffffff8082111561206a57600080fd5b6120768a838b01611fd1565b9096509450606089013591508082111561208f57600080fd5b5061209c89828a01611fd1565b979a9699509497509295939492505050565b600080600080608085870312156120c457600080fd5b843593506120d460208601611fba565b92506120e260408601611fba565b9396929550929360600135925050565b6000806000806080858703121561210857600080fd5b5050823594602084013594506040840135936060013592509050565b6000806000806080858703121561213a57600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561216657600080fd5b61217287828801611f58565b91505092959194509250565b60006020828403121561219057600080fd5b813567ffffffffffffffff8111156121a757600080fd5b61199284828501611f58565b600080600080608085870312156121c957600080fd5b843593506121d960208601611fba565b9250604085013591506121ee60608601611fba565b905092959194509250565b6000806040838503121561220c57600080fd5b50508035926020909101359150565b60006020828403121561222d57600080fd5b5035919050565b80356001600160801b0381168114611f3857600080fd5b6000806040838503121561225e57600080fd5b61226783612234565b915061227560208401612234565b90509250929050565b6000806040838503121561229157600080fd5b61229a83611fba565b915061227560208401611f28565b6000806000606084860312156122bd57600080fd5b505081359360208301359350604090920135919050565b600080600080600080600060e0888a0312156122ef57600080fd5b6122f888611fba565b965061230660208901611fba565b955061231460408901611f28565b945060608801359350608088013560ff8116811461233157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060006060848603121561236357600080fd5b8335925061237360208501611fba565b9150604084013590509250925092565b60006020828403121561239557600080fd5b61116482611fba565b8035600f81900b8114611f3857600080fd5b600061016082840312156123c357600080fd5b6123cb611e38565b6123d483612234565b81526123e260208401612234565b60208201526123f36040840161239e565b604082015261240460608401612234565b606082015261241560808401612234565b608082015261242660a08401612234565b60a082015261243760c08401612234565b60c082015261244860e08401612234565b60e082015261010061245b818501612234565b9082015261012061246d848201611f28565b9082015261014061247f848201611f28565b908201529392505050565b60006020828403121561249c57600080fd5b61116482612234565b600080600080600060a086880312156124bd57600080fd5b853594506124cd60208701611fba565b93506124db60408701611fba565b9250606086013591506124f060808701611fba565b90509295509295909350565b60006020828403121561250e57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b820161254057612540612515565b5060000390565b60008251612559818460208701611e62565b9190910192915050565b81810381811115610c4657610c46612515565b80820180821115610c4657610c46612515565b81810360008312801583831316838312821617156125a9576125a9612515565b5092915050565b634e487b7160e01b600052601260045260246000fd5b6000826125d5576125d56125b0565b500690565b8082028115828204841417610c4657610c46612515565b808201828112600083128015821682158216171561261157612611612515565b505092915050565b600082612628576126286125b0565b600160ff1b82146000198414161561264257612642612515565b50059056fea26469706673582212208f3014d395668fa2708209f3797ffb65d4291a17377559f06951fd5136f8af8564736f6c63430008130033",
    "sourceMap": "5746:4273:66:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4047:12:0;4201;4215:23;4242:7;-1:-1:-1;;;;;4242:20:0;4263:5;;4242:27;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4200:69;;;;4283:7;4279:76;;;4313:31;;-1:-1:-1;;;4313:31:0;;;;;;;;;;;4279:76;4364:15;4382:18;4389:10;4382:18;:::i;:::-;4364:36;-1:-1:-1;;;;;;;4414:43:0;;-1:-1:-1;;;4414:43:0;4410:160;;4534:10;4528:17;4523:2;4511:10;4507:19;4500:46;4410:160;4771:17;;-1:-1:-1;;4767:25:0;;4790:1;4745:20;;4738:55;;;4745:20;4872:31;;;;;;;;;;:::i;:::-;5746:4273:66;;;-1:-1:-1;5746:4273:66;;;-1:-1:-1;;;;;5746:4273:66;7750:65:0;;;;;;;;;;-1:-1:-1;7750:65:0;;;;;:::i;:::-;;:::i;:::-;;7038:181;;;;;;;;;;-1:-1:-1;7038:181:0;;;;;:::i;:::-;;:::i;:::-;;;;3377:25:161;;;3433:2;3418:18;;3411:34;;;;3350:18;7038:181:0;;;;;;;;9300:167;;;;;;;;;;-1:-1:-1;9300:167:0;;;;;:::i;:::-;;:::i;8221:102::-;;;;;;;;;;-1:-1:-1;8221:102:0;;;;;:::i;:::-;;:::i;1431:32::-;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5499:32:161;;;5481:51;;5469:2;5454:18;1431:32:0;5335:203:161;7576:812:66;;;;;;;;;;-1:-1:-1;7576:812:66;;;;;:::i;:::-;;:::i;:::-;;;;6164:25:161;;;6220:2;6205:18;;6198:34;;;;6248:18;;;6241:34;6306:2;6291:18;;6284:34;6151:3;6136:19;7576:812:66;5933:391:161;5784:177:0;;;;;;;;;;-1:-1:-1;5784:177:0;;;;;:::i;:::-;;:::i;:::-;;;7041:25:161;;;7029:2;7014:18;5784:177:0;6895::161;2033:174:0;;;;;;;;;;;;2083:124;2033:174;;2271:41;;;;;;;;;;;;;;;7539:136;;;;;;;;;;-1:-1:-1;7539:136:0;;;;;:::i;:::-;;:::i;8736:107::-;;;;;;;;;;-1:-1:-1;8736:107:0;;;;;:::i;6597:566:66:-;;;;;;;;;;-1:-1:-1;6597:566:66;;;;;:::i;:::-;;:::i;8818:177::-;;;;;;;;;;-1:-1:-1;8818:177:66;;;;;:::i;:::-;;:::i;9714:184::-;;;;;;;;;;-1:-1:-1;9714:184:66;;;;;:::i;:::-;-1:-1:-1;;;;;9851:40:66;;;-1:-1:-1;;;9851:40:66;9799:42;;9851:40;9799:12;9851:40;9714:184;8036:78:0;;;;;;;;;;-1:-1:-1;8036:78:0;;;;;:::i;:::-;;:::i;7169:401:66:-;;;;;;;;;;-1:-1:-1;7169:401:66;;;;;:::i;:::-;;:::i;6064:168:0:-;;;;;;:::i;:::-;;:::i;9320:116:66:-;;;;;;;;;;-1:-1:-1;9320:116:66;;;;;:::i;:::-;;:::i;10656:868:0:-;;;;;;;;;;-1:-1:-1;10656:868:0;;;;;:::i;:::-;;:::i;9196:118:66:-;;;;;;;;;;;;;:::i;6300:187:0:-;;;;;;:::i;:::-;;:::i;8437:375:66:-;;;;;;;;;;-1:-1:-1;8437:375:66;;;;;:::i;:::-;;:::i;9133:92:0:-;;;;;;;;;;-1:-1:-1;9133:92:0;;;;;:::i;:::-;;:::i;1751:32::-;;;;;;;;;;;;;;;6367:98:66;;;;;;;;;;-1:-1:-1;6367:98:66;;;;;:::i;:::-;6432:11;:26;6367:98;7877:76:0;;;;;;;;;;-1:-1:-1;7877:76:0;;;;;:::i;6223:138:66:-;;;;;;;;;;-1:-1:-1;6223:138:66;;;;;:::i;:::-;6326:28;;;;;;-1:-1:-1;;;;;6326:28:66;;;-1:-1:-1;;;6326:28:66;;;;;;;;;;:12;:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;6326:28:66;-1:-1:-1;;;;6326:28:66;;;;;;-1:-1:-1;;6326:28:66;;;;;;;;;;;;;;;;;;;;;;6223:138;9442:167;;;;;;;;;;-1:-1:-1;9442:167:66;;;;;:::i;:::-;;:::i;9904:113::-;;;;;;;;;;-1:-1:-1;9904:113:66;;;;;:::i;:::-;9970:25;:40;;-1:-1:-1;;;;;;9970:40:66;-1:-1:-1;;;;;9970:40:66;;;;;;;;;;9904:113;9001:189;;;;;;;;;;-1:-1:-1;9001:189:66;;;;;:::i;:::-;;:::i;5002:192:0:-;;;;;;:::i;:::-;;:::i;9615:93:66:-;;;;;;;;;;-1:-1:-1;9690:11:66;;9615:93;;1911:32:0;;;;;;;;;;;;;;;8452:163;;;;;;;;;;-1:-1:-1;8452:163:0;;;;;:::i;:::-;;:::i;1591:32::-;;;;;;;;;;;;;;;7306:73;;;;;;;;;;-1:-1:-1;7306:73:0;;;;;:::i;:::-;;:::i;7750:65::-;7790:18;7800:7;7790:9;:18::i;:::-;;7750:65;:::o;7038:181::-;7166:7;7175;7194:18;7204:7;7194:9;:18::i;:::-;;7038:181;;;;;;:::o;9300:167::-;9442:18;9452:7;9442:9;:18::i;:::-;;9300:167;;;;;;:::o;8221:102::-;8298:18;8308:7;8298:9;:18::i;:::-;;8221:102;;;;:::o;7576:812:66:-;7802:21;7837:20;7871:26;7911;8092:145;8130:11;8155:24;8193:10;8217;8092:24;:145::i;:::-;7962:275;;;;-1:-1:-1;7962:275:66;-1:-1:-1;7962:275:66;;-1:-1:-1;7576:812:66;-1:-1:-1;;;;;7576:812:66:o;5784:177:0:-;5917:7;5936:18;5946:7;5936:9;:18::i;:::-;;5784:177;;;;;;:::o;7539:136::-;7631:7;7650:18;7660:7;7650:9;:18::i;:::-;;7539:136;;;:::o;6597:566:66:-;6735:35;;-1:-1:-1;;;6735:35:66;;6764:4;6735:35;;;5481:51:161;6661:15:66;;6680:135;;-1:-1:-1;;;;;6735:10:66;:20;;;;5454:18:161;;6735:35:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6784:3;6801:4;6680:41;:135::i;:::-;6658:157;;;6841:1;6830:8;:12;6826:331;;;6858:119;;-1:-1:-1;;;6858:119:66;;6923:4;6858:119;;;13414:51:161;13481:18;;;13474:34;;;6880:10:66;-1:-1:-1;;;;;6858:39:66;;;;13387:18:161;;6858:119:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6826:331;7009:1;6998:8;:12;6994:163;;;-1:-1:-1;;;;;7048:10:66;7026:39;;7091:4;7122:9;7123:8;7122:9;:::i;:::-;7026:120;;-1:-1:-1;;;;;;7026:120:66;;;;;;;-1:-1:-1;;;;;13432:32:161;;;7026:120:66;;;13414:51:161;13481:18;;;13474:34;13387:18;;7026:120:66;;;;;;;;;;;;;;;;;;;6994:163;6648:515;6597:566;;:::o;8818:177::-;8910:21;8950:38;8974:13;8950:23;:38::i;:::-;8943:45;8818:177;-1:-1:-1;;8818:177:66:o;8036:78:0:-;8089:18;8099:7;8089:9;:18::i;7169:401:66:-;7318:16;7336:26;7407:109;7446:12;7472:10;7496;7407:25;:109::i;:::-;7374:142;;-1:-1:-1;7374:142:66;-1:-1:-1;7169:401:66;;;;;;;:::o;6064:168:0:-;6188:7;6207:18;6217:7;6207:9;:18::i;:::-;;6064:168;;;;;:::o;9320:116:66:-;9392:37;9409:19;9392:16;:37::i;:::-;9320:116;:::o;10656:868:0:-;10928:373;;11030:16;10928:373;;;14153:25:161;2083:124:0;14194:18:161;;;14187:34;-1:-1:-1;;;;;14295:15:161;;;14275:18;;;14268:43;14347:15;;;14327:18;;;14320:43;14407:14;;14400:22;14379:19;;;14372:51;14439:19;;;14432:35;;;14516:4;14504:17;;14483:19;;;14476:46;14538:19;;;14531:35;;;14582:19;;;14575:35;;;10857:12:0;;;;10894:7;:20;;14125:19:161;;10928:373:0;;;-1:-1:-1;;10928:373:0;;;;;;;;;;;;;;-1:-1:-1;;;;;10928:373:0;-1:-1:-1;;;10928:373:0;;;10894:417;;;10928:373;10894:417;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10856:455;;;;11326:7;11321:117;;11406:6;11400:13;11395:2;11387:6;11383:15;11376:38;11321:117;11500:6;11494:13;11489:2;11481:6;11477:15;11470:38;9196:118:66;9247:22;9288:19;:17;:19::i;:::-;9281:26;;9196:118;:::o;6300:187:0:-;6443:7;6462:18;6472:7;6462:9;:18::i;8437:375:66:-;8589:26;8629:25;8668:20;8702:26;8760:45;8779:12;8793:11;8760:18;:45::i;:::-;8753:52;;;;-1:-1:-1;8753:52:66;-1:-1:-1;8753:52:66;;-1:-1:-1;8437:375:66;-1:-1:-1;;;8437:375:66:o;9133:92:0:-;9200:18;9210:7;9200:9;:18::i;:::-;;9133:92;;;:::o;9442:167:66:-;9536:7;9562:40;9590:11;9562:27;:40::i;9001:189::-;9099:21;9139:44;9169:13;9139:29;:44::i;5002:192:0:-;5141:7;5150;5169:18;5179:7;5169:9;:18::i;:::-;;5002:192;;;;;;;:::o;8452:163::-;8590:18;8600:7;8590:9;:18::i;:::-;;8452:163;;;;;:::o;7306:73::-;7354:18;7364:7;11802:359;11856:12;11881;11895:19;11918:7;-1:-1:-1;;;;;11918:20:0;11939:8;;11918:30;;;;;;;:::i;20173:2413:43:-;20401:16;;;;21210:145;21317:24;21343:11;21210:82;21280:11;21210:48;21241:16;21247:10;150:4:51;21241:16:43;:::i;:::-;21210:9;;:30;:48::i;:::-;:69;;:82::i;:::-;:106;:145;:106;:145::i;:::-;21199:156;-1:-1:-1;21561:34:43;21199:156;21578:16;21561;:34::i;:::-;21540:55;-1:-1:-1;22036:12:43;22051:101;22087:30;22093:24;150:4:51;22087:30:43;:::i;:::-;22051:11;;22131;22051:22;:101::i;:::-;22036:116;-1:-1:-1;22172:22:43;22036:116;22185:8;22172:12;:22::i;:::-;22162:32;-1:-1:-1;22546:33:43;22162:32;22562:16;22546:15;:33::i;:::-;22513:66;;:18;:66;:::i;:::-;22480:99;;20541:2045;20173:2413;;;;;;;;;:::o;4984:1056:159:-;5121:19;;;5241:23;:5;5255:8;5241:13;:23::i;:::-;5216:48;;5274:10;5287:81;5344:14;5303:1;5295:5;:9;:26;;5316:5;5295:26;;;5307:6;5308:5;5307:6;:::i;5287:81::-;5274:94;;5391:1;5383:5;:9;5379:623;;;5422:89;5466:30;5492:2;5466:18;:30::i;:::-;5422:10;;:18;:89::i;:::-;5408:103;-1:-1:-1;5543:24:159;5557:10;5408:103;5543:24;:::i;:::-;5525:43;;5582:30;;;;5379:623;5641:1;5633:5;:9;5629:373;;;5793:89;5837:30;5863:2;5837:18;:30::i;:::-;5793:10;;:18;:89::i;:::-;5779:103;-1:-1:-1;5907:40:159;5936:10;5779:103;5907:40;:::i;5629:373::-;-1:-1:-1;6019:10:159;;6031:1;;-1:-1:-1;4984:1056:159;-1:-1:-1;;;;4984:1056:159:o;6032:368:43:-;6125:21;6158:24;6185:19;:17;:19::i;:::-;6158:46;;6246:16;6230:13;:32;:95;;6324:1;6230:95;;;6277:32;6293:16;6277:13;:32;:::i;:::-;6214:111;-1:-1:-1;6351:42:43;6214:111;6375:17;6351:23;:42::i;:::-;6335:58;6032:368;-1:-1:-1;;;6032:368:43:o;17979:1503::-;18130:16;;19115:132;19234:12;19115:97;19200:11;19115:97;19168:9;150:4:51;19116:23:43;150:4:51;19128:10:43;19116:11;:23::i;:::-;:29;;;;:::i;19115:132::-;19104:143;-1:-1:-1;19441:34:43;19104:143;19458:16;19441;:34::i;:::-;19420:55;;17979:1503;;;;;;:::o;18065:1121:45:-;18206:12;:26;18268:28;;-1:-1:-1;;;;;18206:26:45;;;;18268:28;;;;;;-1:-1:-1;;;18330:25:45;;;18181:22;;;18504:218;18206:26;18268:28;18330:25;18650:21;18689:19;18504:31;:218::i;:::-;18365:357;;;;;;18797:14;18773:20;:38;18769:130;;18856:32;:20;:30;:32::i;:::-;18827:12;:61;;-1:-1:-1;;;;;;18827:61:45;-1:-1:-1;;;;;18827:61:45;;;;;;;;;;18769:130;18938:16;18912:22;:42;18908:137;;19001:33;:22;:31;:33::i;:::-;18970:28;:64;;-1:-1:-1;;;;;;18970:64:45;-1:-1:-1;;;;;18970:64:45;;;;;;;;;;18908:137;19081:13;19058:19;:36;19054:126;;19138:31;:19;:29;:31::i;:::-;19110:12;:59;;-1:-1:-1;;;;;19110:59:45;;;-1:-1:-1;;;19110:59:45;;;;;;;;;18128:1058;;;;;;18065:1121;:::o;7099:223:43:-;7175:24;7277:37;7295:19;7277:15;:37;:::i;:::-;7246:69;;:15;:69;:::i;14763:3653:46:-;14916:26;14956:25;14995:20;15029:26;15251:241;15297:25;:23;:25::i;:::-;15336:12;:25;-1:-1:-1;;;15336:25:46;;-1:-1:-1;;;;;15336:25:46;15375:12;15413;15439:11;15464:18;15251:32;:241::i;:::-;15231:261;;15625:17;15645:179;15692:25;:23;:25::i;:::-;15731:12;:25;-1:-1:-1;;;15731:25:46;;-1:-1:-1;;;;;15731:25:46;15770:18;15802:12;15645:33;:179::i;:::-;15625:199;;15851:270;15888:12;15918:17;15953:154;16019:9;16050;16081:8;15953:44;:154::i;:::-;15851:19;:270::i;:::-;15834:360;;;16153:30;;-1:-1:-1;;;16153:30:46;;;;;;;;;;;15834:360;16370:16;16409:26;16457:63;16483:12;16497:9;16508:11;16457:25;:63::i;:::-;16356:164;;-1:-1:-1;16356:164:46;-1:-1:-1;16683:28:46;16356:164;16683:17;:28;:::i;:::-;16668:43;-1:-1:-1;17385:33:46;17400:18;16668:43;17385:33;:::i;:::-;17365:53;-1:-1:-1;17881:87:46;:18;17924:9;17947:11;17881:29;:87::i;:::-;17860:108;-1:-1:-1;18227:33:46;17860:108;18227:12;:33;:::i;:::-;18206:54;;18271:138;;;14763:3653;;;;;;;:::o;16125:490:43:-;16281:25;;16220:18;;;;16273:77;;-1:-1:-1;;;;;16281:25:43;16329:11;16273:42;:77::i;:::-;16250:100;-1:-1:-1;16393:36:43;16408:21;16250:100;16393:36;:::i;:::-;16364:12;:26;-1:-1:-1;;;;;16364:26:43;:65;16360:222;;;16474:12;:26;16550:21;;16474:57;;16519:12;;-1:-1:-1;;;;;16474:26:43;:57;:::i;:::-;:97;;;;:::i;6600:386::-;6699:21;6732:24;150:4:51;6759:19:43;:17;:19::i;:::-;:25;;;;:::i;:::-;6732:52;;6826:16;6810:13;:32;:95;;6904:1;6810:95;;;6857:32;6873:16;6857:13;:32;:::i;:::-;6794:111;-1:-1:-1;6931:48:43;6955:23;150:4:51;6955:17:43;:23;:::i;:::-;6932:13;;6931:23;:48::i;1771:119:51:-;1833:7;1860:22;1871:1;1874;1877:4;941:556;1057:9;1322:1;-1:-1:-1;;1305:19:51;1302:1;1299:26;1296:1;1292:34;1285:42;1272:11;1268:60;1241:146;;1371:1;1368;1361:12;1241:146;-1:-1:-1;1458:9:51;;1454:27;;941:556::o;2164:165::-;2226:7;2253:22;2264:1;2267:4;2273:1;2253:10;:22::i;5724:3347::-;5770:8;-1:-1:-1;;5947:1:51;:26;5943:40;;-1:-1:-1;5982:1:51;;5724:3347;-1:-1:-1;5724:3347:51:o;5943:40::-;6182:21;6177:1;:26;6173:99;;6228:44;;-1:-1:-1;;;6228:44:51;;;;;;;;;;;6173:99;6545:7;6539:2;6534:7;;;6533:19;;-1:-1:-1;6881:8:51;6965:2;6905:29;6894:7;;;6893:41;-1:-1:-1;;;6893:51:51;6892:75;;6993:29;6989:33;;6985:37;;;-1:-1:-1;;7664:35:51;;7719:5;;7299:2;7718:13;;;7735:32;7717:50;7787:5;;7786:13;;-1:-1:-1;;7785:51:51;7856:5;;7855:13;;7872:34;7854:52;7926:5;;7925:13;;-1:-1:-1;;7924:53:51;7997:5;;7996:13;;8013:35;7995:53;7305:32;7238:31;7234:35;;7289:5;;7288:13;;7287:50;;;7362:5;;;-1:-1:-1;;7362:40:51;7422:5;7421:13;;;7438:35;7420:53;7491:5;;;-1:-1:-1;;;7491:50:51;8413:10;8950:49;8917:82;9032:3;:7;;;;8916:124;;;;;;-1:-1:-1;;5724:3347:51:o;2162:2982:53:-;2433:21;2468:22;2504:20;2659:19;2682:1;2659:24;2655:111;;-1:-1:-1;2707:14:53;;-1:-1:-1;2723:16:53;;-1:-1:-1;2741:13:53;2699:56;;2655:111;2935:21;2959:44;2984:19;2966:14;2959:44;:::i;:::-;2935:68;;3041:21;3017:14;:46;3013:118;;;3086:34;;-1:-1:-1;;;3086:34:53;;;;;;;;;;;3013:118;3164:14;3140:39;;3754:1;3734:16;:21;3730:465;;3813:134;3821:13;3876:16;3915:14;3813:33;:134::i;:::-;3771:190;;3730:465;;;4035:135;4098:17;4099:16;4098:17;:::i;:::-;4043:13;;4138:14;4035:33;:135::i;:::-;4010:174;;;:::i;:::-;3992:192;;3730:465;4821:316;4954:13;4985:138;5053:14;5089:16;4985:46;:138::i;:::-;4821:91;4881:13;4896:15;4821:59;:91::i;:316::-;4806:331;;2539:2605;2162:2982;;;;;;;;;;:::o;640:190:54:-;693:9;-1:-1:-1;;;720:1:54;:12;714:86;;756:33;;-1:-1:-1;;;756:33:54;;;;;;;;;;;714:86;-1:-1:-1;821:1:54;640:190::o;994:219::-;1045:8;-1:-1:-1;;1071:21:54;;;;;:46;;-1:-1:-1;1101:16:54;1096:21;;;1071:46;1065:119;;1141:32;;-1:-1:-1;;;1141:32:54;;;;;;;;;;;7503:253:43;7663:12;:26;7707:28;;7561:7;;7599:150;;-1:-1:-1;;;;;7663:26:43;;;;7707:28;;7599:46;:150::i;10600:872:52:-;10853:7;10990:475;11057:23;11098:13;11129:12;11368:18;11374:12;150:4:51;11368:18:52;:::i;:::-;11404:11;11433:18;10990:49;:475::i;:::-;10971:494;10600:872;-1:-1:-1;;;;;;;10600:872:52:o;1246:449::-;1441:17;1575:113;1675:12;1575:82;:18;1618:23;1643:13;1575:42;:82::i;:::-;:99;;:113::i;:::-;1563:125;1246:449;-1:-1:-1;;;;;1246:449:52:o;8719:404::-;8876:7;8914:202;8982:120;9066:14;9072:8;150:4:51;9066:14:52;:::i;:::-;8982:52;150:4:51;8998:29:52;150:4:51;9008:18:52;8998:9;:29::i;:::-;:35;;;;:::i;:::-;8982:9;;:15;:52::i;:::-;:58;;:120::i;:::-;8956:146;;150:4:51;8956:146:52;:::i;:::-;8915:14;8921:8;150:4:51;8915:14:52;:::i;:::-;8914:24;;:202::i;:::-;8895:221;8719:404;-1:-1:-1;;;;8719:404:52:o;12118:678:43:-;12274:4;12499:23;12525:216;12600:16;12572:25;:23;:25::i;:::-;:44;;;;:::i;:::-;12630:12;:25;:43;;12658:15;;-1:-1:-1;;;12630:25:43;;-1:-1:-1;;;;;12630:25:43;:43;:::i;:::-;12687:18;12719:12;12525:33;:216::i;:::-;-1:-1:-1;;;;12118:678:43;-1:-1:-1;;;;12118:678:43:o;3613:340:52:-;3748:7;;3799:53;3836:16;3806:14;3799:53;:::i;:::-;3767:85;;3896:1;3870:22;:27;;3862:36;;;;;2017:1184:55;2207:7;2364:9;2376:20;2380:2;2384:1;2387;2390;2393:2;2376:3;:20::i;:::-;2364:32;-1:-1:-1;2534:26:55;2558:1;2534:19;2545:7;2550:2;2545;:7;:::i;:::-;2534:2;;:10;:19::i;:26::-;2529:31;-1:-1:-1;2623:20:55;:1;2529:31;2640:2;2623:12;:20::i;:::-;2618:25;-1:-1:-1;2804:10:55;2817:6;2618:25;2817:1;:6;:::i;:::-;2804:19;;150:4:51;2837:2:55;:9;2833:261;;2935:20;2942:12;150:4:51;2952:1:55;2942:9;:12::i;:::-;2935:2;;:6;:20::i;:::-;2930:25;;2833:261;;;3061:22;3068:14;150:4:51;3080:1:55;3068:11;:14::i;3061:22::-;3056:27;;2833:261;3188:6;3192:2;3188:1;:6;:::i;:::-;3181:13;2017:1184;-1:-1:-1;;;;;;;;;2017:1184:55:o;4628:840:51:-;4686:7;4752:1;4757;4752:6;4748:47;;-1:-1:-1;150:4:51;4774:10;;4748:47;4848:1;4853;4848:6;4844:45;;-1:-1:-1;4877:1:51;4870:8;;4844:45;5052:1;5027:15;5230:14;5241:1;5230:3;:14::i;:::-;5217:27;-1:-1:-1;5322:18:51;;;5359:19;150:4;5322:18;5359:19;:::i;:::-;;;5451:9;5455:4;5451:3;:9::i;:::-;5436:25;4628:840;-1:-1:-1;;;;;;4628:840:51:o;4098:115::-;4158:7;4185:20;4194:1;4197:4;4203:1;4185:8;:20::i;3707:115::-;3767:7;3794:20;3803:1;3806;3809:4;3794:8;:20::i;15456:275:55:-;15595:7;15716:8;:1;15722;15716:5;:8::i;:::-;15678:35;15689:19;15706:1;15689:12;:2;15698;15689:8;:12::i;:19::-;15678:1;;15710:2;15678:10;:35::i;:::-;:46;;;;:::i;9583:3592:51:-;9628:8;9681:1;9676;:6;9672:60;;9691:41;;-1:-1:-1;;;9691:41:51;;;;;;;;;;;9672:60;-1:-1:-1;10698:2:51;-1:-1:-1;;;;;;;10109:1:51;10105:49;10212:9;;;10192:18;10189:33;10186:1;10182:41;10176:48;10274:9;;;10262:10;10259:25;10256:1;10252:33;10246:40;10332:9;;;10324:6;10321:21;10318:1;10314:29;10308:36;10388:9;;;10382:4;10379:19;10376:1;10372:27;;;10366:34;;;10443:9;;;10438:3;10435:18;10432:1;10428:26;10422:33;10498:9;;;10490:18;;;10487:1;10483:26;;;10477:33;;;10546:9;;;10538:18;;;10532:25;10728:3;:7;;;;;10714:22;;;;10761:17;;;11554:31;11550:35;;11605:5;;11604:13;;11621:32;11603:50;11673:5;;11672:13;;11689:33;11671:51;11742:5;;11741:13;;11758:33;11740:51;11811:5;;11810:13;;11827:33;11809:51;11880:5;;11879:13;;11896:32;11878:50;11948:5;;11947:13;;11964:30;11946:48;10951:31;10947:35;;11002:5;;11001:13;;11018:32;11000:50;11070:5;;11069:13;;11086:32;11068:50;11138:5;;11137:13;;-1:-1:-1;;11136:50:51;11206:5;;11205:13;;-1:-1:-1;;11204:50:51;11274:5;;11273:13;;;-1:-1:-1;;11272:50:51;11340:5;-1:-1:-1;;11340:46:51;12335:10;12725:43;12720:48;-1:-1:-1;;10694:6:51;;;;12848:71;:91;12827:112;13012:72;13007:77;13155:3;13149:9;;9583:3592::o;2683:748::-;2797:9;3062:1;-1:-1:-1;;3045:19:51;3042:1;3039:26;3036:1;3032:34;3025:42;3012:11;3008:60;2981:146;;3111:1;3108;3101:12;2981:146;-1:-1:-1;3378:9:51;;3325:27;;;3322:34;;3374:27;;;3301:114;;2683:748::o;14:271:161:-;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:161:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:161;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:247;855:2;849:9;897:3;885:16;;931:18;916:34;;952:22;;;913:62;910:88;;;978:18;;:::i;:::-;1014:2;1007:22;788:247;:::o;1040:250::-;1125:1;1135:113;1149:6;1146:1;1143:13;1135:113;;;1225:11;;;1219:18;1206:11;;;1199:39;1171:2;1164:10;1135:113;;;-1:-1:-1;;1282:1:161;1264:16;;1257:27;1040:250::o;1295:896::-;1374:6;1427:2;1415:9;1406:7;1402:23;1398:32;1395:52;;;1443:1;1440;1433:12;1395:52;1476:9;1470:16;1505:18;1546:2;1538:6;1535:14;1532:34;;;1562:1;1559;1552:12;1532:34;1600:6;1589:9;1585:22;1575:32;;1645:7;1638:4;1634:2;1630:13;1626:27;1616:55;;1667:1;1664;1657:12;1616:55;1696:2;1690:9;1718:2;1714;1711:10;1708:36;;;1724:18;;:::i;:::-;1799:2;1793:9;1767:2;1853:13;;-1:-1:-1;;1849:22:161;;;1873:2;1845:31;1841:40;1829:53;;;1897:18;;;1917:22;;;1894:46;1891:72;;;1943:18;;:::i;:::-;1983:10;1979:2;1972:22;2018:2;2010:6;2003:18;2058:7;2053:2;2048;2044;2040:11;2036:20;2033:33;2030:53;;;2079:1;2076;2069:12;2030:53;2092:68;2157:2;2152;2144:6;2140:15;2135:2;2131;2127:11;2092:68;:::i;2196:160::-;2261:20;;2317:13;;2310:21;2300:32;;2290:60;;2346:1;2343;2336:12;2290:60;2196:160;;;:::o;2361:180::-;2417:6;2470:2;2458:9;2449:7;2445:23;2441:32;2438:52;;;2486:1;2483;2476:12;2438:52;2509:26;2525:9;2509:26;:::i;2546:155::-;2606:5;2651:2;2642:6;2637:3;2633:16;2629:25;2626:45;;;2667:1;2664;2657:12;2706:492;2810:6;2818;2826;2879:2;2867:9;2858:7;2854:23;2850:32;2847:52;;;2895:1;2892;2885:12;2847:52;2931:9;2918:23;2908:33;;2988:2;2977:9;2973:18;2960:32;2950:42;;3043:2;3032:9;3028:18;3015:32;3070:18;3062:6;3059:30;3056:50;;;3102:1;3099;3092:12;3056:50;3125:67;3184:7;3175:6;3164:9;3160:22;3125:67;:::i;:::-;3115:77;;;2706:492;;;;;:::o;3456:173::-;3524:20;;-1:-1:-1;;;;;3573:31:161;;3563:42;;3553:70;;3619:1;3616;3609:12;3634:367;3697:8;3707:6;3761:3;3754:4;3746:6;3742:17;3738:27;3728:55;;3779:1;3776;3769:12;3728:55;-1:-1:-1;3802:20:161;;3845:18;3834:30;;3831:50;;;3877:1;3874;3867:12;3831:50;3914:4;3906:6;3902:17;3890:29;;3974:3;3967:4;3957:6;3954:1;3950:14;3942:6;3938:27;3934:38;3931:47;3928:67;;;3991:1;3988;3981:12;3928:67;3634:367;;;;;:::o;4006:922::-;4146:6;4154;4162;4170;4178;4186;4239:3;4227:9;4218:7;4214:23;4210:33;4207:53;;;4256:1;4253;4246:12;4207:53;4279:29;4298:9;4279:29;:::i;:::-;4269:39;;4327:38;4361:2;4350:9;4346:18;4327:38;:::i;:::-;4317:48;;4416:2;4405:9;4401:18;4388:32;4439:18;4480:2;4472:6;4469:14;4466:34;;;4496:1;4493;4486:12;4466:34;4535:70;4597:7;4588:6;4577:9;4573:22;4535:70;:::i;:::-;4624:8;;-1:-1:-1;4509:96:161;-1:-1:-1;4712:2:161;4697:18;;4684:32;;-1:-1:-1;4728:16:161;;;4725:36;;;4757:1;4754;4747:12;4725:36;;4796:72;4860:7;4849:8;4838:9;4834:24;4796:72;:::i;:::-;4006:922;;;;-1:-1:-1;4006:922:161;;-1:-1:-1;4006:922:161;;4887:8;;4006:922;-1:-1:-1;;;4006:922:161:o;4933:397::-;5019:6;5027;5035;5043;5096:3;5084:9;5075:7;5071:23;5067:33;5064:53;;;5113:1;5110;5103:12;5064:53;5149:9;5136:23;5126:33;;5178:38;5212:2;5201:9;5197:18;5178:38;:::i;:::-;5168:48;;5235:38;5269:2;5258:9;5254:18;5235:38;:::i;:::-;4933:397;;;;-1:-1:-1;5225:48:161;;5320:2;5305:18;5292:32;;-1:-1:-1;;4933:397:161:o;5543:385::-;5629:6;5637;5645;5653;5706:3;5694:9;5685:7;5681:23;5677:33;5674:53;;;5723:1;5720;5713:12;5674:53;-1:-1:-1;;5746:23:161;;;5816:2;5801:18;;5788:32;;-1:-1:-1;5867:2:161;5852:18;;5839:32;;5918:2;5903:18;5890:32;;-1:-1:-1;5543:385:161;-1:-1:-1;5543:385:161:o;6329:561::-;6442:6;6450;6458;6466;6519:3;6507:9;6498:7;6494:23;6490:33;6487:53;;;6536:1;6533;6526:12;6487:53;6572:9;6559:23;6549:33;;6629:2;6618:9;6614:18;6601:32;6591:42;;6680:2;6669:9;6665:18;6652:32;6642:42;;6735:2;6724:9;6720:18;6707:32;6762:18;6754:6;6751:30;6748:50;;;6794:1;6791;6784:12;6748:50;6817:67;6876:7;6867:6;6856:9;6852:22;6817:67;:::i;:::-;6807:77;;;6329:561;;;;;;;:::o;7259:356::-;7345:6;7398:2;7386:9;7377:7;7373:23;7369:32;7366:52;;;7414:1;7411;7404:12;7366:52;7454:9;7441:23;7487:18;7479:6;7476:30;7473:50;;;7519:1;7516;7509:12;7473:50;7542:67;7601:7;7592:6;7581:9;7577:22;7542:67;:::i;7620:397::-;7706:6;7714;7722;7730;7783:3;7771:9;7762:7;7758:23;7754:33;7751:53;;;7800:1;7797;7790:12;7751:53;7836:9;7823:23;7813:33;;7865:38;7899:2;7888:9;7884:18;7865:38;:::i;:::-;7855:48;;7950:2;7939:9;7935:18;7922:32;7912:42;;7973:38;8007:2;7996:9;7992:18;7973:38;:::i;:::-;7963:48;;7620:397;;;;;;;:::o;8022:247::-;8089:6;8097;8150:2;8138:9;8129:7;8125:23;8121:32;8118:52;;;8166:1;8163;8156:12;8118:52;-1:-1:-1;;8189:23:161;;;8259:2;8244:18;;;8231:32;;-1:-1:-1;8022:247:161:o;8274:180::-;8333:6;8386:2;8374:9;8365:7;8361:23;8357:32;8354:52;;;8402:1;8399;8392:12;8354:52;-1:-1:-1;8425:23:161;;8274:180;-1:-1:-1;8274:180:161:o;8459:188::-;8527:20;;-1:-1:-1;;;;;8576:46:161;;8566:57;;8556:85;;8637:1;8634;8627:12;8652:260;8720:6;8728;8781:2;8769:9;8760:7;8756:23;8752:32;8749:52;;;8797:1;8794;8787:12;8749:52;8820:29;8839:9;8820:29;:::i;:::-;8810:39;;8868:38;8902:2;8891:9;8887:18;8868:38;:::i;:::-;8858:48;;8652:260;;;;;:::o;8917:254::-;8982:6;8990;9043:2;9031:9;9022:7;9018:23;9014:32;9011:52;;;9059:1;9056;9049:12;9011:52;9082:29;9101:9;9082:29;:::i;:::-;9072:39;;9130:35;9161:2;9150:9;9146:18;9130:35;:::i;9176:316::-;9253:6;9261;9269;9322:2;9310:9;9301:7;9297:23;9293:32;9290:52;;;9338:1;9335;9328:12;9290:52;-1:-1:-1;;9361:23:161;;;9431:2;9416:18;;9403:32;;-1:-1:-1;9482:2:161;9467:18;;;9454:32;;9176:316;-1:-1:-1;9176:316:161:o;9681:693::-;9789:6;9797;9805;9813;9821;9829;9837;9890:3;9878:9;9869:7;9865:23;9861:33;9858:53;;;9907:1;9904;9897:12;9858:53;9930:29;9949:9;9930:29;:::i;:::-;9920:39;;9978:38;10012:2;10001:9;9997:18;9978:38;:::i;:::-;9968:48;;10035:35;10066:2;10055:9;10051:18;10035:35;:::i;:::-;10025:45;;10117:2;10106:9;10102:18;10089:32;10079:42;;10171:3;10160:9;10156:19;10143:33;10216:4;10209:5;10205:16;10198:5;10195:27;10185:55;;10236:1;10233;10226:12;10185:55;9681:693;;;;-1:-1:-1;9681:693:161;;;;10259:5;10311:3;10296:19;;10283:33;;-1:-1:-1;10363:3:161;10348:19;;;10335:33;;9681:693;-1:-1:-1;;9681:693:161:o;10632:322::-;10709:6;10717;10725;10778:2;10766:9;10757:7;10753:23;10749:32;10746:52;;;10794:1;10791;10784:12;10746:52;10830:9;10817:23;10807:33;;10859:38;10893:2;10882:9;10878:18;10859:38;:::i;:::-;10849:48;;10944:2;10933:9;10929:18;10916:32;10906:42;;10632:322;;;;;:::o;10959:186::-;11018:6;11071:2;11059:9;11050:7;11046:23;11042:32;11039:52;;;11087:1;11084;11077:12;11039:52;11110:29;11129:9;11110:29;:::i;11150:162::-;11217:20;;11277:2;11266:21;;;11256:32;;11246:60;;11302:1;11299;11292:12;11317:1061;11405:6;11458:3;11446:9;11437:7;11433:23;11429:33;11426:53;;;11475:1;11472;11465:12;11426:53;11501:17;;:::i;:::-;11541:29;11560:9;11541:29;:::i;:::-;11534:5;11527:44;11603:38;11637:2;11626:9;11622:18;11603:38;:::i;:::-;11598:2;11591:5;11587:14;11580:62;11674:37;11707:2;11696:9;11692:18;11674:37;:::i;:::-;11669:2;11662:5;11658:14;11651:61;11744:38;11778:2;11767:9;11763:18;11744:38;:::i;:::-;11739:2;11732:5;11728:14;11721:62;11816:39;11850:3;11839:9;11835:19;11816:39;:::i;:::-;11810:3;11803:5;11799:15;11792:64;11889:39;11923:3;11912:9;11908:19;11889:39;:::i;:::-;11883:3;11876:5;11872:15;11865:64;11962:39;11996:3;11985:9;11981:19;11962:39;:::i;:::-;11956:3;11949:5;11945:15;11938:64;12035:39;12069:3;12058:9;12054:19;12035:39;:::i;:::-;12029:3;12022:5;12018:15;12011:64;12094:3;12129:38;12163:2;12152:9;12148:18;12129:38;:::i;:::-;12113:14;;;12106:62;12187:3;12222:35;12238:18;;;12222:35;:::i;:::-;12206:14;;;12199:59;12277:3;12312:35;12328:18;;;12312:35;:::i;:::-;12296:14;;;12289:59;12300:5;11317:1061;-1:-1:-1;;;11317:1061:161:o;12383:186::-;12442:6;12495:2;12483:9;12474:7;12470:23;12466:32;12463:52;;;12511:1;12508;12501:12;12463:52;12534:29;12553:9;12534:29;:::i;12574:472::-;12669:6;12677;12685;12693;12701;12754:3;12742:9;12733:7;12729:23;12725:33;12722:53;;;12771:1;12768;12761:12;12722:53;12807:9;12794:23;12784:33;;12836:38;12870:2;12859:9;12855:18;12836:38;:::i;:::-;12826:48;;12893:38;12927:2;12916:9;12912:18;12893:38;:::i;:::-;12883:48;;12978:2;12967:9;12963:18;12950:32;12940:42;;13001:39;13035:3;13024:9;13020:19;13001:39;:::i;:::-;12991:49;;12574:472;;;;;;;;:::o;13051:184::-;13121:6;13174:2;13162:9;13153:7;13149:23;13145:32;13142:52;;;13190:1;13187;13180:12;13142:52;-1:-1:-1;13213:16:161;;13051:184;-1:-1:-1;13051:184:161:o;13519:127::-;13580:10;13575:3;13571:20;13568:1;13561:31;13611:4;13608:1;13601:15;13635:4;13632:1;13625:15;13651:136;13686:3;-1:-1:-1;;;13707:22:161;;13704:48;;13732:18;;:::i;:::-;-1:-1:-1;13772:1:161;13768:13;;13651:136::o;14621:287::-;14750:3;14788:6;14782:13;14804:66;14863:6;14858:3;14851:4;14843:6;14839:17;14804:66;:::i;:::-;14886:16;;;;;14621:287;-1:-1:-1;;14621:287:161:o;14913:128::-;14980:9;;;15001:11;;;14998:37;;;15015:18;;:::i;15046:125::-;15111:9;;;15132:10;;;15129:36;;;15145:18;;:::i;15176:200::-;15242:9;;;15215:4;15270:9;;15298:10;;15310:12;;;15294:29;15333:12;;;15325:21;;15291:56;15288:82;;;15350:18;;:::i;:::-;15288:82;15176:200;;;;:::o;15381:127::-;15442:10;15437:3;15433:20;15430:1;15423:31;15473:4;15470:1;15463:15;15497:4;15494:1;15487:15;15513:112;15545:1;15571;15561:35;;15576:18;;:::i;:::-;-1:-1:-1;15610:9:161;;15513:112::o;15630:168::-;15703:9;;;15734;;15751:15;;;15745:22;;15731:37;15721:71;;15772:18;;:::i;15803:216::-;15867:9;;;15895:11;;;15842:3;15925:9;;15953:10;;15949:19;;15978:10;;15970:19;;15946:44;15943:70;;;15993:18;;:::i;:::-;15943:70;;15803:216;;;;:::o;16024:193::-;16063:1;16089;16079:35;;16094:18;;:::i;:::-;-1:-1:-1;;;16130:18:161;;-1:-1:-1;;16150:13:161;;16126:38;16123:64;;;16167:18;;:::i;:::-;-1:-1:-1;16201:10:161;;16024:193::o",
    "linkReferences": {},
    "immutableReferences": {
      "37": [
        {
          "start": 594,
          "length": 32
        },
        {
          "start": 1017,
          "length": 32
        },
        {
          "start": 2376,
          "length": 32
        },
        {
          "start": 2474,
          "length": 32
        },
        {
          "start": 2524,
          "length": 32
        },
        {
          "start": 2662,
          "length": 32
        },
        {
          "start": 3153,
          "length": 32
        },
        {
          "start": 3430,
          "length": 32
        },
        {
          "start": 3705,
          "length": 32
        },
        {
          "start": 3828,
          "length": 32
        }
      ],
      "40": [
        {
          "start": 2305,
          "length": 32
        },
        {
          "start": 2424,
          "length": 32
        },
        {
          "start": 3224,
          "length": 32
        },
        {
          "start": 3632,
          "length": 32
        }
      ],
      "43": [
        {
          "start": 1733,
          "length": 32
        },
        {
          "start": 3777,
          "length": 32
        },
        {
          "start": 3877,
          "length": 32
        }
      ],
      "46": [
        {
          "start": 2221,
          "length": 32
        },
        {
          "start": 2610,
          "length": 32
        }
      ],
      "55": [
        {
          "start": 1255,
          "length": 32
        },
        {
          "start": 3285,
          "length": 32
        }
      ],
      "9815": [
        {
          "start": 2740,
          "length": 32
        },
        {
          "start": 2894,
          "length": 32
        },
        {
          "start": 3009,
          "length": 32
        }
      ],
      "9818": [
        {
          "start": 4834,
          "length": 32
        }
      ],
      "9821": [
        {
          "start": 4416,
          "length": 32
        },
        {
          "start": 5523,
          "length": 32
        }
      ],
      "9824": [
        {
          "start": 4920,
          "length": 32
        },
        {
          "start": 5059,
          "length": 32
        },
        {
          "start": 6644,
          "length": 32
        }
      ],
      "9827": [
        {
          "start": 3978,
          "length": 32
        },
        {
          "start": 4473,
          "length": 32
        },
        {
          "start": 5108,
          "length": 32
        }
      ],
      "9830": [
        {
          "start": 4113,
          "length": 32
        },
        {
          "start": 5141,
          "length": 32
        }
      ],
      "9833": [
        {
          "start": 4036,
          "length": 32
        },
        {
          "start": 4157,
          "length": 32
        },
        {
          "start": 4541,
          "length": 32
        }
      ],
      "9839": [
        {
          "start": 4954,
          "length": 32
        },
        {
          "start": 5026,
          "length": 32
        },
        {
          "start": 6611,
          "length": 32
        }
      ],
      "9842": [
        {
          "start": 4632,
          "length": 32
        },
        {
          "start": 5326,
          "length": 32
        },
        {
          "start": 5386,
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
    "setMarketState((uint128,uint128,int128,uint128,uint128,uint128,uint128,uint128,uint128,bool,bool))": "ac25d47f",
    "setPauser(address,bool)": "7180c8ca",
    "setReserves(uint128,uint128)": "702db0eb",
    "setTotalShares(uint256)": "a77384c1",
    "target0()": "21b57d53",
    "target1()": "eac3e799",
    "target2()": "a6e8a859",
    "target3()": "d899e112",
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
    "updateLiquidity(int256)": "8120a3e2"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativeInterest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"time\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"apr\",\"type\":\"int256\"}],\"name\":\"accrue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_normalizedTimeRemaining\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_spotPrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateFeesGivenBonds\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalCurveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalFlatFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceCurveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalGovernanceFee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_spotPrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateFeesGivenShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"curveFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceCurveFee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_sharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateIdleShareReserves\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shareAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_sharePrice\",\"type\":\"uint256\"}],\"name\":\"calculateOpenLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shareReservesDelta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReservesDelta\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalGovernanceFee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"}],\"name\":\"calculateTimeRemaining\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timeRemaining\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"}],\"name\":\"calculateTimeRemainingScaled\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timeRemaining\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"latestCheckpoint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"}],\"name\":\"setLongExposure\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"_marketState_\",\"type\":\"tuple\"}],\"name\":\"setMarketState\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"}],\"name\":\"setReserves\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_totalShares\",\"type\":\"uint256\"}],\"name\":\"setTotalShares\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target2\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"target3\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"_shareReservesDelta\",\"type\":\"int256\"}],\"name\":\"updateLiquidity\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"collectGovernanceFee((address,bool,bytes))\":{\"returns\":{\"_0\":\"proceeds The amount of base collected.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"################ ### SafeCast ### ################\"}]},\"kind\":\"user\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"notice\":\"This contract's EIP712 domain separator.\"},\"PERMIT_TYPEHASH()\":{\"notice\":\"The typehash used to calculate the EIP712 hash for `permitForAll`.\"},\"addLiquidity(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another\"},\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setMarketState((uint128,uint128,int128,uint128,uint128,uint128,uint128,uint128,uint128,bool,bool))\":{\"notice\":\"Mocks ///\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"target0()\":{\"notice\":\"The target0 address. This is a logic contract that contains all         of the getters for the Hyperdrive pool as well as some stateful         functions.\"},\"target1()\":{\"notice\":\"The target1 address. This is a logic contract that contains all         some stateful functions.\"},\"target2()\":{\"notice\":\"The target2 address. This is a logic contract that contains all         some stateful functions.\"},\"target3()\":{\"notice\":\"The target3 address. This is a logic contract that contains all         some stateful functions.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockHyperdrive.sol\":\"MockHyperdrive\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x6179a7a5d516ba70894c081b0d3001f5eb95bd98ba693c6626d7d44743812056\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://35f3a3e7cff3b8fd657b5aa4bebeb5c6df3b9d6a83b58a3d86887339ceed1843\",\"dweb:/ipfs/QmdC36TA11uyQ5S2ZMsRrcv81RPuHs8tZCzNwWgwkvzPoY\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0xe5889a0b6c43131543029af4368ee0ac4631b8281425766e07a38b590eecb8db\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://80497d157827cab2d7cefb429e9d1e2ac977ed8d1435a03c1b5d0f4d0d1861ba\",\"dweb:/ipfs/QmcW4fVGHaaRa5MYDaajynxj1uU3mcAauBVXfmJCi3FbMq\"]},\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0xd3aaf757667aa997f7f1f0ebb52f99e2e07ba253a0e29e14892bceb799440174\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fa9a3b1071ff074a80f7c7935f6c5d4e70c47b1e2fc974604c8e1ae8df564e83\",\"dweb:/ipfs/QmSzJHpGBDFNztUXSCcXsBZCYnJf9domzLo6x5X7quk4tW\"]},\"contracts/src/external/HyperdriveTarget2.sol\":{\"keccak256\":\"0x42bbd7072af37adb276ea47f92dcc107686d93d91790528218c7de87be6d85e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1d0ffb9afea1a0b65b2304e79327b10e939d4a8db2d661d48939731d99998669\",\"dweb:/ipfs/QmZiuv8M9HjJ9n3nnUjg7cvWZQK4pFkPsbp6DfJG2p6MbU\"]},\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x279f635b4f2f54dac2ee0e586fe692dcb793be2d5c7c56c254736ab096ee1a0a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://91c50d93c2557a6ed2522d59b9c038f1e13ce4657f73b814d1b4118b98d63a06\",\"dweb:/ipfs/QmR9QCi3i6GA2Jj9yrmBK91aU57mSaEJo1Vgy43JTU1MtG\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8\",\"dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17\",\"dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x21d3173693bcb6ba589a0cda73f57c3c06af39af22308e3b3142f9e639f526e4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://54aacd825c1fbc109428040e43dd45f531a769c016e8362311bf18e209a34a0e\",\"dweb:/ipfs/QmV1CwV1MUREgLn83CEykLybihbM1f1ogh8p2Y6owZv91e\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0xb9ab7ab09e4e95f5e187418921f41f3b6d652c5a0889624b660495491ffc4148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7a05317c1fd4996fece6de20a672006163f31f9ae32fa23a855bbe8e89f573f2\",\"dweb:/ipfs/Qmf5kG78Za6KjSyRXeE8dFqdAE4T3BxhRQUXFKUkuuGGqK\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0xbdd9d63dcc57a2f23d2fd66a3f0440a220fb31664a1d99443a9e80b053393261\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6a16611ca56bf2c2360d39bfc9611d547b9ac76c80c9560e0a33a89958ee6eca\",\"dweb:/ipfs/QmQJUCU7HgydjvdKtJVte3wHitgwaK3BG6cN3FBm9FM5sy\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x863819651e0c159fc8aa27a357458c9ef3cd641287ff80382f566b6f839f795d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5b4675409abd6f0361b568e0912a8c430e601dbbae68961ca5d5ac5d5dcc3b8a\",\"dweb:/ipfs/QmRgL5Nvsb425tUxqMkC8tqHwyDzW5qmkf7UB2pkwf87uU\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xbcf204d47761b8da37b0dd1ac6a7a3226d98ad95972acdf9300476a3010b95e2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://756faa29691a56068a330d2de06febe4b7c286ee8ddaee40b1670e723350fbb0\",\"dweb:/ipfs/QmTixXWCvS5uLH6dd3U2PWKya9YZuEm5duNRGdQBDzwo6V\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x61b9f8eb5795fda17a5c35264f53879a7ef022e02b865b015bdb9f5811db6ba5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9498f4bfd969d78634da2b0a89b10f88ac467f52d565d9b62561dcc569ad00cd\",\"dweb:/ipfs/QmZdGwc5ezJf2qv8yheoTVF3UTfWJnh6FtAAq7wufhPZ5R\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xd4ea004cc74fba458e72066541257426e95f1b00ba0b25d53c7c0fce1726d991\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://35c8c8b5bfe4f71c1a5175c1d6549aff9352feec558f3816c9e02d1cab1e1a88\",\"dweb:/ipfs/QmY7qydf5ofXdVJWPeb4bUTtHCn7oWymcTY2RCpZSuSWKM\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xe150223822098026c7ce734cd68848e45b47b92b024d34bc25886e9c6af6ec67\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6590e590f4af53d55e81e06ba8d53346cfce71ce1fa8d1833141f273d74c8a8f\",\"dweb:/ipfs/QmTM582joUpK7KBDWvwWEBi4XT3Qt9x8VLkhwPYj8Qu93o\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xd87293bc10dfe09707a042bf05091baf40ba344bdca141bd99b62256a7611817\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f6eadd454c6671c26bd22095c31a3bbaea7083df9aa6548dbaba32a4907e336\",\"dweb:/ipfs/QmY1jMW9DuAk9CSfVS6MsG5onqjZHKzdBrv2TcHvj9yKj4\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x077931150bcba5b99dedcd9038f3fbeef9c9230046dc4649c457d75d4be32a5c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2a48e4046f7ae8acb965d0f8d79767f4f4c70c1a6a8d3cf635482587412d33fd\",\"dweb:/ipfs/QmcY8FbffppqTMBiMwniXG9R8i8eQoVJuLqqTXgpuiXyUr\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x2f9511684820be7510155adfe3c2c2ef7e2583472946bae37f379bac801fc263\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7e9a84e4168448e3320a6682c8ba248c8b51757df173b86507e9aba4b6167247\",\"dweb:/ipfs/QmSonetYBP22Fnc8HrcaTxAA1Zg2PCR5ptPiEp22sA77Ka\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0x4ac8b598e2502ea35c1f5aa8a1bd4ca9ed4152e1f8bfe9e6dad16b0a8bea4c01\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://513eaa91659eef7f92dad51f0a2e82c817e1a5938571c8ce28cce36f7d0dae4d\",\"dweb:/ipfs/QmYFv511pzXFEiM2DRjhBFxRe4TbdLopRutWKLwWnvZSxh\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0xe70c81e80e937bc7576f2afcee551fc7f90176e93392cc0a04019ecd6e7586fc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://507c22eff62966ef20806fd5ac6671ce50e9e118e5ae45361dcb8b3700df944f\",\"dweb:/ipfs/QmawyqAEhhPw3CeFNcm9eHLAkhDuqtGtzw1wT6TKyhreLb\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]},\"test/utils/Constants.sol\":{\"keccak256\":\"0xd7e0611edda0191fb3a6bf14a723975601dc64b1271584468a3b309ddf1b9e5b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e7e7f38a2b927f3c3e53e2c119537d8112c1ba61dfd56aeead7494b38a5277b0\",\"dweb:/ipfs/QmbaBBZKEJ857m3NDUcsTmemb93ajfuQjsjVNJVY2tRHs1\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0xb0691c312cfdeb389cd48e6de4c993cb215a20d9f79756bc4e4a2199fc8209d4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://52e15c4728c6fea47f6be85e69a70785a34a4b6223bf7b8d7de066f1cb3282ec\",\"dweb:/ipfs/QmQj8ebUPnhYRHixF9Qy8kxnCCjVXSpfL2NEqawZrS1BQM\"]}},\"version\":1}",
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
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
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
          "name": "NegativeInterest"
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
              "name": "_bondAmount",
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
              "name": "totalGovernanceFee",
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
              "name": "curveFee",
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
          "setMarketState((uint128,uint128,int128,uint128,uint128,uint128,uint128,uint128,uint128,bool,bool))": {
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
        "contracts/test/MockHyperdrive.sol": "MockHyperdrive"
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
      "contracts/src/external/HyperdriveTarget1.sol": {
        "keccak256": "0xd3aaf757667aa997f7f1f0ebb52f99e2e07ba253a0e29e14892bceb799440174",
        "urls": [
          "bzz-raw://fa9a3b1071ff074a80f7c7935f6c5d4e70c47b1e2fc974604c8e1ae8df564e83",
          "dweb:/ipfs/QmSzJHpGBDFNztUXSCcXsBZCYnJf9domzLo6x5X7quk4tW"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/external/HyperdriveTarget2.sol": {
        "keccak256": "0x42bbd7072af37adb276ea47f92dcc107686d93d91790528218c7de87be6d85e8",
        "urls": [
          "bzz-raw://1d0ffb9afea1a0b65b2304e79327b10e939d4a8db2d661d48939731d99998669",
          "dweb:/ipfs/QmZiuv8M9HjJ9n3nnUjg7cvWZQK4pFkPsbp6DfJG2p6MbU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/external/HyperdriveTarget3.sol": {
        "keccak256": "0x279f635b4f2f54dac2ee0e586fe692dcb793be2d5c7c56c254736ab096ee1a0a",
        "urls": [
          "bzz-raw://91c50d93c2557a6ed2522d59b9c038f1e13ce4657f73b814d1b4118b98d63a06",
          "dweb:/ipfs/QmR9QCi3i6GA2Jj9yrmBK91aU57mSaEJo1Vgy43JTU1MtG"
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
      "contracts/test/ERC20Mintable.sol": {
        "keccak256": "0x4ac8b598e2502ea35c1f5aa8a1bd4ca9ed4152e1f8bfe9e6dad16b0a8bea4c01",
        "urls": [
          "bzz-raw://513eaa91659eef7f92dad51f0a2e82c817e1a5938571c8ce28cce36f7d0dae4d",
          "dweb:/ipfs/QmYFv511pzXFEiM2DRjhBFxRe4TbdLopRutWKLwWnvZSxh"
        ],
        "license": "Apache-2.0"
      },
      "contracts/test/MockHyperdrive.sol": {
        "keccak256": "0xe70c81e80e937bc7576f2afcee551fc7f90176e93392cc0a04019ecd6e7586fc",
        "urls": [
          "bzz-raw://507c22eff62966ef20806fd5ac6671ce50e9e118e5ae45361dcb8b3700df944f",
          "dweb:/ipfs/QmawyqAEhhPw3CeFNcm9eHLAkhDuqtGtzw1wT6TKyhreLb"
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
        "keccak256": "0xb0691c312cfdeb389cd48e6de4c993cb215a20d9f79756bc4e4a2199fc8209d4",
        "urls": [
          "bzz-raw://52e15c4728c6fea47f6be85e69a70785a34a4b6223bf7b8d7de066f1cb3282ec",
          "dweb:/ipfs/QmQj8ebUPnhYRHixF9Qy8kxnCCjVXSpfL2NEqawZrS1BQM"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/test/MockHyperdrive.sol",
    "id": 17930,
    "exportedSymbols": {
      "ERC20Mintable": [
        16260
      ],
      "ETH": [
        124651
      ],
      "FixedPointMath": [
        11134
      ],
      "Hyperdrive": [
        563
      ],
      "HyperdriveBase": [
        6406
      ],
      "HyperdriveTarget0": [
        1290
      ],
      "HyperdriveTarget1": [
        1420
      ],
      "HyperdriveTarget2": [
        1524
      ],
      "HyperdriveTarget3": [
        1613
      ],
      "HyperdriveUtils": [
        130107
      ],
      "IHyperdrive": [
        4675
      ],
      "IMockHyperdrive": [
        17174
      ],
      "MockHyperdrive": [
        17855
      ],
      "MockHyperdriveBase": [
        17532
      ],
      "MockHyperdriveTarget0": [
        17884
      ],
      "MockHyperdriveTarget1": [
        17899
      ],
      "MockHyperdriveTarget2": [
        17914
      ],
      "MockHyperdriveTarget3": [
        17929
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:10838:66",
    "nodes": [
      {
        "id": 17106,
        "nodeType": "PragmaDirective",
        "src": "39:23:66",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 17108,
        "nodeType": "ImportDirective",
        "src": "64:67:66",
        "nodes": [],
        "absolutePath": "contracts/src/external/Hyperdrive.sol",
        "file": "contracts/src/external/Hyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 17930,
        "sourceUnit": 564,
        "symbolAliases": [
          {
            "foreign": {
              "id": 17107,
              "name": "Hyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 563,
              "src": "73:10:66",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 17110,
        "nodeType": "ImportDirective",
        "src": "132:81:66",
        "nodes": [],
        "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
        "file": "contracts/src/external/HyperdriveTarget0.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 17930,
        "sourceUnit": 1291,
        "symbolAliases": [
          {
            "foreign": {
              "id": 17109,
              "name": "HyperdriveTarget0",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 1290,
              "src": "141:17:66",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 17112,
        "nodeType": "ImportDirective",
        "src": "214:81:66",
        "nodes": [],
        "absolutePath": "contracts/src/external/HyperdriveTarget1.sol",
        "file": "contracts/src/external/HyperdriveTarget1.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 17930,
        "sourceUnit": 1421,
        "symbolAliases": [
          {
            "foreign": {
              "id": 17111,
              "name": "HyperdriveTarget1",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 1420,
              "src": "223:17:66",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 17114,
        "nodeType": "ImportDirective",
        "src": "296:81:66",
        "nodes": [],
        "absolutePath": "contracts/src/external/HyperdriveTarget2.sol",
        "file": "contracts/src/external/HyperdriveTarget2.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 17930,
        "sourceUnit": 1525,
        "symbolAliases": [
          {
            "foreign": {
              "id": 17113,
              "name": "HyperdriveTarget2",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 1524,
              "src": "305:17:66",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 17116,
        "nodeType": "ImportDirective",
        "src": "378:81:66",
        "nodes": [],
        "absolutePath": "contracts/src/external/HyperdriveTarget3.sol",
        "file": "contracts/src/external/HyperdriveTarget3.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 17930,
        "sourceUnit": 1614,
        "symbolAliases": [
          {
            "foreign": {
              "id": 17115,
              "name": "HyperdriveTarget3",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 1613,
              "src": "387:17:66",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 17118,
        "nodeType": "ImportDirective",
        "src": "460:75:66",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveBase.sol",
        "file": "contracts/src/internal/HyperdriveBase.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 17930,
        "sourceUnit": 6407,
        "symbolAliases": [
          {
            "foreign": {
              "id": 17117,
              "name": "HyperdriveBase",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6406,
              "src": "469:14:66",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 17120,
        "nodeType": "ImportDirective",
        "src": "536:71:66",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "contracts/src/interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 17930,
        "sourceUnit": 4676,
        "symbolAliases": [
          {
            "foreign": {
              "id": 17119,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4675,
              "src": "545:11:66",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 17122,
        "nodeType": "ImportDirective",
        "src": "608:71:66",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "contracts/src/interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 17930,
        "sourceUnit": 4676,
        "symbolAliases": [
          {
            "foreign": {
              "id": 17121,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4675,
              "src": "617:11:66",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 17124,
        "nodeType": "ImportDirective",
        "src": "680:76:66",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "contracts/src/libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 17930,
        "sourceUnit": 11135,
        "symbolAliases": [
          {
            "foreign": {
              "id": 17123,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 11134,
              "src": "689:14:66",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 17126,
        "nodeType": "ImportDirective",
        "src": "757:65:66",
        "nodes": [],
        "absolutePath": "contracts/test/ERC20Mintable.sol",
        "file": "contracts/test/ERC20Mintable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 17930,
        "sourceUnit": 16261,
        "symbolAliases": [
          {
            "foreign": {
              "id": 17125,
              "name": "ERC20Mintable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 16260,
              "src": "766:13:66",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 17128,
        "nodeType": "ImportDirective",
        "src": "823:47:66",
        "nodes": [],
        "absolutePath": "test/utils/Constants.sol",
        "file": "test/utils/Constants.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 17930,
        "sourceUnit": 124652,
        "symbolAliases": [
          {
            "foreign": {
              "id": 17127,
              "name": "ETH",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 124651,
              "src": "832:3:66",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 17130,
        "nodeType": "ImportDirective",
        "src": "871:65:66",
        "nodes": [],
        "absolutePath": "test/utils/HyperdriveUtils.sol",
        "file": "test/utils/HyperdriveUtils.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 17930,
        "sourceUnit": 130108,
        "symbolAliases": [
          {
            "foreign": {
              "id": 17129,
              "name": "HyperdriveUtils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 130107,
              "src": "880:15:66",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 17174,
        "nodeType": "ContractDefinition",
        "src": "938:594:66",
        "nodes": [
          {
            "id": 17137,
            "nodeType": "FunctionDefinition",
            "src": "970:51:66",
            "nodes": [],
            "functionSelector": "68096239",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "accrue",
            "nameLocation": "979:6:66",
            "parameters": {
              "id": 17135,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17132,
                  "mutability": "mutable",
                  "name": "time",
                  "nameLocation": "994:4:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17137,
                  "src": "986:12:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17131,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "986:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17134,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "1007:3:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17137,
                  "src": "1000:10:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 17133,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1000:6:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "985:26:66"
            },
            "returnParameters": {
              "id": 17136,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1020:0:66"
            },
            "scope": 17174,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17144,
            "nodeType": "FunctionDefinition",
            "src": "1027:101:66",
            "nodes": [],
            "functionSelector": "68c2ecb8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemaining",
            "nameLocation": "1036:22:66",
            "parameters": {
              "id": 17140,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17139,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "1076:13:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17144,
                  "src": "1068:21:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17138,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1068:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1058:37:66"
            },
            "returnParameters": {
              "id": 17143,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17142,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 17144,
                  "src": "1119:7:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17141,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1119:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1118:9:66"
            },
            "scope": 17174,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17151,
            "nodeType": "FunctionDefinition",
            "src": "1134:107:66",
            "nodes": [],
            "functionSelector": "ca6d38f7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemainingScaled",
            "nameLocation": "1143:28:66",
            "parameters": {
              "id": 17147,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17146,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "1189:13:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17151,
                  "src": "1181:21:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17145,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1181:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1171:37:66"
            },
            "returnParameters": {
              "id": 17150,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17149,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 17151,
                  "src": "1232:7:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17148,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1232:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1231:9:66"
            },
            "scope": 17174,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17156,
            "nodeType": "FunctionDefinition",
            "src": "1247:60:66",
            "nodes": [],
            "functionSelector": "907c0f92",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "latestCheckpoint",
            "nameLocation": "1256:16:66",
            "parameters": {
              "id": 17152,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1272:2:66"
            },
            "returnParameters": {
              "id": 17155,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17154,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 17156,
                  "src": "1298:7:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17153,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1298:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1297:9:66"
            },
            "scope": 17174,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17161,
            "nodeType": "FunctionDefinition",
            "src": "1313:62:66",
            "nodes": [],
            "functionSelector": "ced09112",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "updateLiquidity",
            "nameLocation": "1322:15:66",
            "parameters": {
              "id": 17159,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17158,
                  "mutability": "mutable",
                  "name": "shareReservesDelta",
                  "nameLocation": "1346:18:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17161,
                  "src": "1338:26:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17157,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1338:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1337:28:66"
            },
            "returnParameters": {
              "id": 17160,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1374:0:66"
            },
            "scope": 17174,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17168,
            "nodeType": "FunctionDefinition",
            "src": "1381:75:66",
            "nodes": [],
            "functionSelector": "8392b8c0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setReserves",
            "nameLocation": "1390:11:66",
            "parameters": {
              "id": 17166,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17163,
                  "mutability": "mutable",
                  "name": "shareReserves",
                  "nameLocation": "1410:13:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17168,
                  "src": "1402:21:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17162,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1402:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17165,
                  "mutability": "mutable",
                  "name": "bondReserves",
                  "nameLocation": "1433:12:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17168,
                  "src": "1425:20:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17164,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1425:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1401:45:66"
            },
            "returnParameters": {
              "id": 17167,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1455:0:66"
            },
            "scope": 17174,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17173,
            "nodeType": "FunctionDefinition",
            "src": "1462:68:66",
            "nodes": [],
            "functionSelector": "8e67f87e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getGovernanceFeesAccrued",
            "nameLocation": "1471:24:66",
            "parameters": {
              "id": 17169,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1495:2:66"
            },
            "returnParameters": {
              "id": 17172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17171,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 17173,
                  "src": "1521:7:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17170,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1521:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1520:9:66"
            },
            "scope": 17174,
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
          17174
        ],
        "name": "IMockHyperdrive",
        "nameLocation": "948:15:66",
        "scope": 17930,
        "usedErrors": []
      },
      {
        "id": 17532,
        "nodeType": "ContractDefinition",
        "src": "1534:4210:66",
        "nodes": [
          {
            "id": 17179,
            "nodeType": "UsingForDirective",
            "src": "1595:33:66",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 17177,
              "name": "FixedPointMath",
              "nameLocations": [
                "1601:14:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 11134,
              "src": "1601:14:66"
            },
            "typeName": {
              "id": 17178,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1620:7:66",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 17181,
            "nodeType": "VariableDeclaration",
            "src": "1634:28:66",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "totalShares",
            "nameLocation": "1651:11:66",
            "scope": 17532,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 17180,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1634:7:66",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 17331,
            "nodeType": "FunctionDefinition",
            "src": "1669:1667:66",
            "nodes": [],
            "body": {
              "id": 17330,
              "nodeType": "Block",
              "src": "1808:1528:66",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    17195
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17195,
                      "mutability": "mutable",
                      "name": "baseAmount",
                      "nameLocation": "1897:10:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 17330,
                      "src": "1889:18:66",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 17194,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1889:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 17205,
                  "initialValue": {
                    "condition": {
                      "expression": {
                        "id": 17196,
                        "name": "options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17186,
                        "src": "1910:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      },
                      "id": 17197,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1918:6:66",
                      "memberName": "asBase",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4508,
                      "src": "1910:14:66",
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
                            "id": 17201,
                            "name": "_pricePerShare",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              17508
                            ],
                            "referencedDeclaration": 17508,
                            "src": "1975:14:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 17202,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1975:16:66",
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
                          "id": 17199,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17183,
                          "src": "1960:6:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17200,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1967:7:66",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10432,
                        "src": "1960:14:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17203,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1960:32:66",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 17204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "1910:82:66",
                    "trueExpression": {
                      "id": 17198,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17183,
                      "src": "1939:6:66",
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
                  "src": "1889:103:66"
                },
                {
                  "assignments": [
                    17207
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17207,
                      "mutability": "mutable",
                      "name": "assets",
                      "nameLocation": "2141:6:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 17330,
                      "src": "2133:14:66",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 17206,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2133:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 17208,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2133:14:66"
                },
                {
                  "assignments": [
                    17210
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17210,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "2162:7:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 17330,
                      "src": "2157:12:66",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 17209,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2157:4:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 17212,
                  "initialValue": {
                    "hexValue": "74727565",
                    "id": 17211,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2172:4:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2157:19:66"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 17218,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 17215,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9815,
                          "src": "2198:10:66",
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
                        "id": 17214,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2190:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 17213,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2190:7:66",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 17216,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2190:19:66",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 17217,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 124651,
                      "src": "2213:3:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2190:26:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 17285,
                    "nodeType": "Block",
                    "src": "2573:217:66",
                    "statements": [
                      {
                        "expression": {
                          "id": 17270,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 17262,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17207,
                            "src": "2587:6:66",
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
                                    "id": 17267,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "2625:4:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$17532",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$17532",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  ],
                                  "id": 17266,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2617:7:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 17265,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2617:7:66",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 17268,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2617:13:66",
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
                                "id": 17263,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9815,
                                "src": "2596:10:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$3872",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 17264,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2607:9:66",
                              "memberName": "balanceOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 3833,
                              "src": "2596:20:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view external returns (uint256)"
                              }
                            },
                            "id": 17269,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2596:35:66",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2587:44:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17271,
                        "nodeType": "ExpressionStatement",
                        "src": "2587:44:66"
                      },
                      {
                        "expression": {
                          "id": 17283,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 17272,
                            "name": "success",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17210,
                            "src": "2645:7:66",
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
                                  "id": 17275,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "2696:3:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 17276,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "2700:6:66",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "2696:10:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 17279,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "2732:4:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$17532",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$17532",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  ],
                                  "id": 17278,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2724:7:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 17277,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2724:7:66",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 17280,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2724:13:66",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 17281,
                                "name": "baseAmount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 17195,
                                "src": "2755:10:66",
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
                                "id": 17273,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9815,
                                "src": "2655:10:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$3872",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 17274,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2666:12:66",
                              "memberName": "transferFrom",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 3871,
                              "src": "2655:23:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,address,uint256) external returns (bool)"
                              }
                            },
                            "id": 17282,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2655:124:66",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "2645:134:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 17284,
                        "nodeType": "ExpressionStatement",
                        "src": "2645:134:66"
                      }
                    ]
                  },
                  "id": 17286,
                  "nodeType": "IfStatement",
                  "src": "2186:604:66",
                  "trueBody": {
                    "id": 17261,
                    "nodeType": "Block",
                    "src": "2218:349:66",
                    "statements": [
                      {
                        "expression": {
                          "id": 17225,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 17219,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17207,
                            "src": "2232:6:66",
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
                                  "id": 17222,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "2249:4:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$17532",
                                    "typeString": "contract MockHyperdriveBase"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$17532",
                                    "typeString": "contract MockHyperdriveBase"
                                  }
                                ],
                                "id": 17221,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2241:7:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 17220,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2241:7:66",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 17223,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2241:13:66",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 17224,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2255:7:66",
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "src": "2241:21:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2232:30:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17226,
                        "nodeType": "ExpressionStatement",
                        "src": "2232:30:66"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 17230,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 17227,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "2280:3:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 17228,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2284:5:66",
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "2280:9:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "id": 17229,
                            "name": "baseAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17195,
                            "src": "2292:10:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2280:22:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 17237,
                        "nodeType": "IfStatement",
                        "src": "2276:96:66",
                        "trueBody": {
                          "id": 17236,
                          "nodeType": "Block",
                          "src": "2304:68:66",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "id": 17231,
                                    "name": "IHyperdrive",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4675,
                                    "src": "2329:11:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                      "typeString": "type(contract IHyperdrive)"
                                    }
                                  },
                                  "id": 17233,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "2341:14:66",
                                  "memberName": "TransferFailed",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 4561,
                                  "src": "2329:26:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 17234,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2329:28:66",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 17235,
                              "nodeType": "RevertStatement",
                              "src": "2322:35:66"
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
                          "id": 17241,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 17238,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "2389:3:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 17239,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2393:5:66",
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "2389:9:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "id": 17240,
                            "name": "baseAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17195,
                            "src": "2401:10:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2389:22:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 17260,
                        "nodeType": "IfStatement",
                        "src": "2385:172:66",
                        "trueBody": {
                          "id": 17259,
                          "nodeType": "Block",
                          "src": "2413:144:66",
                          "statements": [
                            {
                              "expression": {
                                "id": 17257,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "components": [
                                    {
                                      "id": 17242,
                                      "name": "success",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 17210,
                                      "src": "2432:7:66",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    },
                                    null
                                  ],
                                  "id": 17243,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "TupleExpression",
                                  "src": "2431:11:66",
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
                                      "id": 17255,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2539:2:66",
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
                                              "id": 17246,
                                              "name": "msg",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": -15,
                                              "src": "2453:3:66",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                              }
                                            },
                                            "id": 17247,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2457:6:66",
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "src": "2453:10:66",
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
                                          "id": 17245,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "2445:8:66",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_address_payable_$",
                                            "typeString": "type(address payable)"
                                          },
                                          "typeName": {
                                            "id": 17244,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2445:8:66",
                                            "stateMutability": "payable",
                                            "typeDescriptions": {}
                                          }
                                        },
                                        "id": 17248,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2445:19:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address_payable",
                                          "typeString": "address payable"
                                        }
                                      },
                                      "id": 17249,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "2465:4:66",
                                      "memberName": "call",
                                      "nodeType": "MemberAccess",
                                      "src": "2445:24:66",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                      }
                                    },
                                    "id": 17254,
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
                                        "id": 17253,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "expression": {
                                            "id": 17250,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -15,
                                            "src": "2498:3:66",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_message",
                                              "typeString": "msg"
                                            }
                                          },
                                          "id": 17251,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "2502:5:66",
                                          "memberName": "value",
                                          "nodeType": "MemberAccess",
                                          "src": "2498:9:66",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                          "id": 17252,
                                          "name": "baseAmount",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 17195,
                                          "src": "2510:10:66",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "2498:22:66",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "src": "2445:93:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                      "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                    }
                                  },
                                  "id": 17256,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2445:97:66",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                    "typeString": "tuple(bool,bytes memory)"
                                  }
                                },
                                "src": "2431:111:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 17258,
                              "nodeType": "ExpressionStatement",
                              "src": "2431:111:66"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "id": 17288,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "2803:8:66",
                    "subExpression": {
                      "id": 17287,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17210,
                      "src": "2804:7:66",
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
                  "id": 17295,
                  "nodeType": "IfStatement",
                  "src": "2799:74:66",
                  "trueBody": {
                    "id": 17294,
                    "nodeType": "Block",
                    "src": "2813:60:66",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 17289,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "2834:11:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 17291,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2846:14:66",
                            "memberName": "TransferFailed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4561,
                            "src": "2834:26:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 17292,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2834:28:66",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 17293,
                        "nodeType": "RevertStatement",
                        "src": "2827:35:66"
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
                    "id": 17298,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 17296,
                      "name": "totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17181,
                      "src": "3008:11:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 17297,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3023:1:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3008:16:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 17328,
                    "nodeType": "Block",
                    "src": "3159:171:66",
                    "statements": [
                      {
                        "assignments": [
                          17312
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 17312,
                            "mutability": "mutable",
                            "name": "newShares",
                            "nameLocation": "3181:9:66",
                            "nodeType": "VariableDeclaration",
                            "scope": 17328,
                            "src": "3173:17:66",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 17311,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3173:7:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 17318,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 17315,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17183,
                              "src": "3216:6:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 17316,
                              "name": "assets",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17207,
                              "src": "3224:6:66",
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
                              "id": 17313,
                              "name": "totalShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17181,
                              "src": "3193:11:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 17314,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3205:10:66",
                            "memberName": "mulDivDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 10414,
                            "src": "3193:22:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 17317,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3193:38:66",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3173:58:66"
                      },
                      {
                        "expression": {
                          "id": 17321,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 17319,
                            "name": "totalShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17181,
                            "src": "3245:11:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 17320,
                            "name": "newShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17312,
                            "src": "3260:9:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3245:24:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17322,
                        "nodeType": "ExpressionStatement",
                        "src": "3245:24:66"
                      },
                      {
                        "expression": {
                          "components": [
                            {
                              "id": 17323,
                              "name": "newShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17312,
                              "src": "3291:9:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 17324,
                                "name": "_pricePerShare",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [
                                  17508
                                ],
                                "referencedDeclaration": 17508,
                                "src": "3302:14:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                  "typeString": "function () view returns (uint256)"
                                }
                              },
                              "id": 17325,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3302:16:66",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 17326,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "3290:29:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256)"
                          }
                        },
                        "functionReturnParameters": 17193,
                        "id": 17327,
                        "nodeType": "Return",
                        "src": "3283:36:66"
                      }
                    ]
                  },
                  "id": 17329,
                  "nodeType": "IfStatement",
                  "src": "3004:326:66",
                  "trueBody": {
                    "id": 17310,
                    "nodeType": "Block",
                    "src": "3026:127:66",
                    "statements": [
                      {
                        "expression": {
                          "id": 17304,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 17299,
                            "name": "totalShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17181,
                            "src": "3040:11:66",
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
                                "id": 17302,
                                "name": "_initialSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9839,
                                "src": "3069:18:66",
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
                                "id": 17300,
                                "name": "amount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 17183,
                                "src": "3054:6:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 17301,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3061:7:66",
                              "memberName": "divDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 10450,
                              "src": "3054:14:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 17303,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3054:34:66",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3040:48:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17305,
                        "nodeType": "ExpressionStatement",
                        "src": "3040:48:66"
                      },
                      {
                        "expression": {
                          "components": [
                            {
                              "id": 17306,
                              "name": "totalShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17181,
                              "src": "3110:11:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 17307,
                              "name": "_initialSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9839,
                              "src": "3123:18:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 17308,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "3109:33:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256)"
                          }
                        },
                        "functionReturnParameters": 17193,
                        "id": 17309,
                        "nodeType": "Return",
                        "src": "3102:40:66"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              5659
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_deposit",
            "nameLocation": "1678:8:66",
            "overrides": {
              "id": 17188,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1772:8:66"
            },
            "parameters": {
              "id": 17187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17183,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1704:6:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17331,
                  "src": "1696:14:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17182,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1696:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17186,
                  "mutability": "mutable",
                  "name": "options",
                  "nameLocation": "1749:7:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17331,
                  "src": "1720:36:66",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 17185,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 17184,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "1720:11:66",
                        "1732:7:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4512,
                      "src": "1720:19:66"
                    },
                    "referencedDeclaration": 4512,
                    "src": "1720:19:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$4512_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1686:76:66"
            },
            "returnParameters": {
              "id": 17193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17190,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 17331,
                  "src": "1790:7:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17189,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1790:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17192,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 17331,
                  "src": "1799:7:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17191,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1799:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1789:18:66"
            },
            "scope": 17532,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 17459,
            "nodeType": "FunctionDefinition",
            "src": "3342:1480:66",
            "nodes": [],
            "body": {
              "id": 17458,
              "nodeType": "Block",
              "src": "3487:1335:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 17349,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 17342,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17333,
                      "src": "3717:6:66",
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
                        "id": 17345,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 17343,
                          "name": "shares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17333,
                          "src": "3726:6:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 17344,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17181,
                          "src": "3735:11:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3726:20:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "id": 17347,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17333,
                        "src": "3763:6:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 17348,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "3726:43:66",
                      "trueExpression": {
                        "id": 17346,
                        "name": "totalShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17181,
                        "src": "3749:11:66",
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
                    "src": "3717:52:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17350,
                  "nodeType": "ExpressionStatement",
                  "src": "3717:52:66"
                },
                {
                  "assignments": [
                    17352
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17352,
                      "mutability": "mutable",
                      "name": "assets",
                      "nameLocation": "3848:6:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 17458,
                      "src": "3840:14:66",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 17351,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3840:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 17353,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3840:14:66"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 17359,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 17356,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9815,
                          "src": "3876:10:66",
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
                        "id": 17355,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "3868:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 17354,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3868:7:66",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 17357,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3868:19:66",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 17358,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 124651,
                      "src": "3891:3:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3868:26:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 17379,
                    "nodeType": "Block",
                    "src": "3957:69:66",
                    "statements": [
                      {
                        "expression": {
                          "id": 17377,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 17369,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17352,
                            "src": "3971:6:66",
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
                                    "id": 17374,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "4009:4:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$17532",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$17532",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  ],
                                  "id": 17373,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "4001:7:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 17372,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4001:7:66",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 17375,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4001:13:66",
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
                                "id": 17370,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9815,
                                "src": "3980:10:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$3872",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 17371,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3991:9:66",
                              "memberName": "balanceOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 3833,
                              "src": "3980:20:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view external returns (uint256)"
                              }
                            },
                            "id": 17376,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3980:35:66",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3971:44:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17378,
                        "nodeType": "ExpressionStatement",
                        "src": "3971:44:66"
                      }
                    ]
                  },
                  "id": 17380,
                  "nodeType": "IfStatement",
                  "src": "3864:162:66",
                  "trueBody": {
                    "id": 17368,
                    "nodeType": "Block",
                    "src": "3896:55:66",
                    "statements": [
                      {
                        "expression": {
                          "id": 17366,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 17360,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17352,
                            "src": "3910:6:66",
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
                                  "id": 17363,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "3927:4:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$17532",
                                    "typeString": "contract MockHyperdriveBase"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$17532",
                                    "typeString": "contract MockHyperdriveBase"
                                  }
                                ],
                                "id": 17362,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3919:7:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 17361,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3919:7:66",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 17364,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3919:13:66",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 17365,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3933:7:66",
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "src": "3919:21:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3910:30:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17367,
                        "nodeType": "ExpressionStatement",
                        "src": "3910:30:66"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 17394,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 17381,
                      "name": "withdrawValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17340,
                      "src": "4076:13:66",
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
                        "id": 17384,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 17382,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17181,
                          "src": "4092:11:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 17383,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4107:1:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "4092:16:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 17392,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4181:1:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 17393,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "4092:90:66",
                      "trueExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 17389,
                                "name": "totalShares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 17181,
                                "src": "4153:11:66",
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
                                "id": 17387,
                                "name": "assets",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 17352,
                                "src": "4138:6:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 17388,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4145:7:66",
                              "memberName": "divDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 10450,
                              "src": "4138:14:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 17390,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4138:27:66",
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
                            "id": 17385,
                            "name": "shares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17333,
                            "src": "4123:6:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 17386,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4130:7:66",
                          "memberName": "mulDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10432,
                          "src": "4123:14:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 17391,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4123:43:66",
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
                    "src": "4076:106:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17395,
                  "nodeType": "ExpressionStatement",
                  "src": "4076:106:66"
                },
                {
                  "expression": {
                    "id": 17398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 17396,
                      "name": "totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17181,
                      "src": "4271:11:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "id": 17397,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17333,
                      "src": "4286:6:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4271:21:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17399,
                  "nodeType": "ExpressionStatement",
                  "src": "4271:21:66"
                },
                {
                  "assignments": [
                    17401
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17401,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "4307:7:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 17458,
                      "src": "4302:12:66",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 17400,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "4302:4:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 17402,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4302:12:66"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 17408,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 17405,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9815,
                          "src": "4336:10:66",
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
                        "id": 17404,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "4328:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 17403,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "4328:7:66",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 17406,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4328:19:66",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 17407,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 124651,
                      "src": "4351:3:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4328:26:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 17433,
                    "nodeType": "Block",
                    "src": "4490:90:66",
                    "statements": [
                      {
                        "expression": {
                          "id": 17431,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 17424,
                            "name": "success",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17401,
                            "src": "4504:7:66",
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
                                  "id": 17427,
                                  "name": "options",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 17336,
                                  "src": "4534:7:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                                    "typeString": "struct IHyperdrive.Options calldata"
                                  }
                                },
                                "id": 17428,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "4542:11:66",
                                "memberName": "destination",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 4505,
                                "src": "4534:19:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 17429,
                                "name": "withdrawValue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 17340,
                                "src": "4555:13:66",
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
                                "id": 17425,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9815,
                                "src": "4514:10:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$3872",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 17426,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4525:8:66",
                              "memberName": "transfer",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 3842,
                              "src": "4514:19:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) external returns (bool)"
                              }
                            },
                            "id": 17430,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4514:55:66",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "4504:65:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 17432,
                        "nodeType": "ExpressionStatement",
                        "src": "4504:65:66"
                      }
                    ]
                  },
                  "id": 17434,
                  "nodeType": "IfStatement",
                  "src": "4324:256:66",
                  "trueBody": {
                    "id": 17423,
                    "nodeType": "Block",
                    "src": "4356:128:66",
                    "statements": [
                      {
                        "expression": {
                          "id": 17421,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "components": [
                              {
                                "id": 17409,
                                "name": "success",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 17401,
                                "src": "4371:7:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              null
                            ],
                            "id": 17410,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "TupleExpression",
                            "src": "4370:11:66",
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
                                "id": 17419,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4470:2:66",
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
                                        "id": 17413,
                                        "name": "options",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 17336,
                                        "src": "4392:7:66",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                                          "typeString": "struct IHyperdrive.Options calldata"
                                        }
                                      },
                                      "id": 17414,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "4400:11:66",
                                      "memberName": "destination",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 4505,
                                      "src": "4392:19:66",
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
                                    "id": 17412,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "4384:8:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_payable_$",
                                      "typeString": "type(address payable)"
                                    },
                                    "typeName": {
                                      "id": 17411,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "4384:8:66",
                                      "stateMutability": "payable",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 17415,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4384:28:66",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "id": 17416,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "4413:4:66",
                                "memberName": "call",
                                "nodeType": "MemberAccess",
                                "src": "4384:33:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                  "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                }
                              },
                              "id": 17418,
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
                                  "id": 17417,
                                  "name": "withdrawValue",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 17340,
                                  "src": "4442:13:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "src": "4384:85:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                              }
                            },
                            "id": 17420,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4384:89:66",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                              "typeString": "tuple(bool,bytes memory)"
                            }
                          },
                          "src": "4370:103:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 17422,
                        "nodeType": "ExpressionStatement",
                        "src": "4370:103:66"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "id": 17436,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "4593:8:66",
                    "subExpression": {
                      "id": 17435,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17401,
                      "src": "4594:7:66",
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
                  "id": 17443,
                  "nodeType": "IfStatement",
                  "src": "4589:74:66",
                  "trueBody": {
                    "id": 17442,
                    "nodeType": "Block",
                    "src": "4603:60:66",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 17437,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "4624:11:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 17439,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4636:14:66",
                            "memberName": "TransferFailed",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4561,
                            "src": "4624:26:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 17440,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4624:28:66",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 17441,
                        "nodeType": "RevertStatement",
                        "src": "4617:35:66"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 17454,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 17444,
                      "name": "withdrawValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17340,
                      "src": "4672:13:66",
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
                          "id": 17445,
                          "name": "options",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17336,
                          "src": "4688:7:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                            "typeString": "struct IHyperdrive.Options calldata"
                          }
                        },
                        "id": 17446,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4696:6:66",
                        "memberName": "asBase",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4508,
                        "src": "4688:14:66",
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
                              "id": 17450,
                              "name": "_pricePerShare",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                17508
                              ],
                              "referencedDeclaration": 17508,
                              "src": "4767:14:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                "typeString": "function () view returns (uint256)"
                              }
                            },
                            "id": 17451,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4767:16:66",
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
                            "id": 17448,
                            "name": "withdrawValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17340,
                            "src": "4745:13:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 17449,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4759:7:66",
                          "memberName": "divDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10450,
                          "src": "4745:21:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 17452,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4745:39:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 17453,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "4688:96:66",
                      "trueExpression": {
                        "id": 17447,
                        "name": "withdrawValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17340,
                        "src": "4717:13:66",
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
                    "src": "4672:112:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17455,
                  "nodeType": "ExpressionStatement",
                  "src": "4672:112:66"
                },
                {
                  "expression": {
                    "id": 17456,
                    "name": "withdrawValue",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17340,
                    "src": "4802:13:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17341,
                  "id": 17457,
                  "nodeType": "Return",
                  "src": "4795:20:66"
                }
              ]
            },
            "baseFunctions": [
              5670
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_withdraw",
            "nameLocation": "3351:9:66",
            "overrides": {
              "id": 17338,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3446:8:66"
            },
            "parameters": {
              "id": 17337,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17333,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "3378:6:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17459,
                  "src": "3370:14:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17332,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3370:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17336,
                  "mutability": "mutable",
                  "name": "options",
                  "nameLocation": "3423:7:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17459,
                  "src": "3394:36:66",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 17335,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 17334,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "3394:11:66",
                        "3406:7:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4512,
                      "src": "3394:19:66"
                    },
                    "referencedDeclaration": 4512,
                    "src": "3394:19:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$4512_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3360:76:66"
            },
            "returnParameters": {
              "id": 17341,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17340,
                  "mutability": "mutable",
                  "name": "withdrawValue",
                  "nameLocation": "3472:13:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17459,
                  "src": "3464:21:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17339,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3464:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3463:23:66"
            },
            "scope": 17532,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 17508,
            "nodeType": "FunctionDefinition",
            "src": "4828:555:66",
            "nodes": [],
            "body": {
              "id": 17507,
              "nodeType": "Block",
              "src": "4942:441:66",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    17466
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17466,
                      "mutability": "mutable",
                      "name": "assets",
                      "nameLocation": "5020:6:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 17507,
                      "src": "5012:14:66",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 17465,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5012:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 17467,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5012:14:66"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 17473,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 17470,
                          "name": "_baseToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9815,
                          "src": "5048:10:66",
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
                        "id": 17469,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5040:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 17468,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5040:7:66",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 17471,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5040:19:66",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 17472,
                      "name": "ETH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 124651,
                      "src": "5063:3:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5040:26:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 17493,
                    "nodeType": "Block",
                    "src": "5129:69:66",
                    "statements": [
                      {
                        "expression": {
                          "id": 17491,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 17483,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17466,
                            "src": "5143:6:66",
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
                                    "id": 17488,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "5181:4:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$17532",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdriveBase_$17532",
                                      "typeString": "contract MockHyperdriveBase"
                                    }
                                  ],
                                  "id": 17487,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "5173:7:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 17486,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "5173:7:66",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 17489,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5173:13:66",
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
                                "id": 17484,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9815,
                                "src": "5152:10:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$3872",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 17485,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5163:9:66",
                              "memberName": "balanceOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 3833,
                              "src": "5152:20:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view external returns (uint256)"
                              }
                            },
                            "id": 17490,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5152:35:66",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5143:44:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17492,
                        "nodeType": "ExpressionStatement",
                        "src": "5143:44:66"
                      }
                    ]
                  },
                  "id": 17494,
                  "nodeType": "IfStatement",
                  "src": "5036:162:66",
                  "trueBody": {
                    "id": 17482,
                    "nodeType": "Block",
                    "src": "5068:55:66",
                    "statements": [
                      {
                        "expression": {
                          "id": 17480,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 17474,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17466,
                            "src": "5082:6:66",
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
                                  "id": 17477,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "5099:4:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$17532",
                                    "typeString": "contract MockHyperdriveBase"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdriveBase_$17532",
                                    "typeString": "contract MockHyperdriveBase"
                                  }
                                ],
                                "id": 17476,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "5091:7:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 17475,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "5091:7:66",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 17478,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5091:13:66",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 17479,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5105:7:66",
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "src": "5091:21:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5082:30:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17481,
                        "nodeType": "ExpressionStatement",
                        "src": "5082:30:66"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 17505,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 17495,
                      "name": "sharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17463,
                      "src": "5313:10:66",
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
                        "id": 17498,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 17496,
                          "name": "totalShares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17181,
                          "src": "5326:11:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 17497,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5341:1:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "5326:16:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 17503,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5375:1:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 17504,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "5326:50:66",
                      "trueExpression": {
                        "arguments": [
                          {
                            "id": 17501,
                            "name": "totalShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17181,
                            "src": "5360:11:66",
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
                            "id": 17499,
                            "name": "assets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17466,
                            "src": "5345:6:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 17500,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5352:7:66",
                          "memberName": "divDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10450,
                          "src": "5345:14:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 17502,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5345:27:66",
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
                    "src": "5313:63:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17506,
                  "nodeType": "ExpressionStatement",
                  "src": "5313:63:66"
                }
              ]
            },
            "baseFunctions": [
              5676
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_pricePerShare",
            "nameLocation": "4837:14:66",
            "overrides": {
              "id": 17461,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "4892:8:66"
            },
            "parameters": {
              "id": 17460,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4851:2:66"
            },
            "returnParameters": {
              "id": 17464,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17463,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "4926:10:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17508,
                  "src": "4918:18:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17462,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4918:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4917:20:66"
            },
            "scope": 17532,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 17531,
            "nodeType": "FunctionDefinition",
            "src": "5568:174:66",
            "nodes": [],
            "body": {
              "id": 17530,
              "nodeType": "Block",
              "src": "5621:121:66",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 17522,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 17517,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "id": 17514,
                            "name": "_baseToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9815,
                            "src": "5643:10:66",
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
                          "id": 17513,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5635:7:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 17512,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "5635:7:66",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 17515,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5635:19:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 17516,
                        "name": "ETH",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124651,
                        "src": "5658:3:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "5635:26:66",
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
                      "id": 17521,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 17518,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "5665:3:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17519,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5669:5:66",
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "src": "5665:9:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 17520,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5677:1:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "5665:13:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "5635:43:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 17529,
                  "nodeType": "IfStatement",
                  "src": "5631:105:66",
                  "trueBody": {
                    "id": 17528,
                    "nodeType": "Block",
                    "src": "5680:56:66",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 17523,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "5701:11:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 17525,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5713:10:66",
                            "memberName": "NotPayable",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4551,
                            "src": "5701:22:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 17526,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5701:24:66",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 17527,
                        "nodeType": "RevertStatement",
                        "src": "5694:31:66"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              5646
            ],
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkMessageValue",
            "nameLocation": "5577:18:66",
            "overrides": {
              "id": 17510,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "5612:8:66"
            },
            "parameters": {
              "id": 17509,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5595:2:66"
            },
            "returnParameters": {
              "id": 17511,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5621:0:66"
            },
            "scope": 17532,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 17175,
              "name": "HyperdriveBase",
              "nameLocations": [
                "1574:14:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 6406,
              "src": "1574:14:66"
            },
            "id": 17176,
            "nodeType": "InheritanceSpecifier",
            "src": "1574:14:66"
          }
        ],
        "canonicalName": "MockHyperdriveBase",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          17532,
          6406,
          10066,
          63914
        ],
        "name": "MockHyperdriveBase",
        "nameLocation": "1552:18:66",
        "scope": 17930,
        "usedErrors": [
          4527,
          4533,
          4535,
          4539
        ]
      },
      {
        "id": 17855,
        "nodeType": "ContractDefinition",
        "src": "5746:4273:66",
        "nodes": [
          {
            "id": 17539,
            "nodeType": "UsingForDirective",
            "src": "5810:33:66",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 17537,
              "name": "FixedPointMath",
              "nameLocations": [
                "5816:14:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 11134,
              "src": "5816:14:66"
            },
            "typeName": {
              "id": 17538,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "5835:7:66",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 17581,
            "nodeType": "FunctionDefinition",
            "src": "5849:349:66",
            "nodes": [],
            "body": {
              "id": 17580,
              "nodeType": "Block",
              "src": "6196:2:66",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 17545,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17542,
                    "src": "5946:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  },
                  {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 17551,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17542,
                            "src": "6001:7:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          ],
                          "id": 17550,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "5975:25:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$4459_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget0_$17884_$",
                            "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget0)"
                          },
                          "typeName": {
                            "id": 17549,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                              "id": 17548,
                              "name": "MockHyperdriveTarget0",
                              "nameLocations": [
                                "5979:21:66"
                              ],
                              "nodeType": "IdentifierPath",
                              "referencedDeclaration": 17884,
                              "src": "5979:21:66"
                            },
                            "referencedDeclaration": 17884,
                            "src": "5979:21:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$17884",
                              "typeString": "contract MockHyperdriveTarget0"
                            }
                          }
                        },
                        "id": 17552,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5975:34:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$17884",
                          "typeString": "contract MockHyperdriveTarget0"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$17884",
                          "typeString": "contract MockHyperdriveTarget0"
                        }
                      ],
                      "id": 17547,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5967:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 17546,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5967:7:66",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 17553,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5967:43:66",
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
                            "id": 17559,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17542,
                            "src": "6058:7:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          ],
                          "id": 17558,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "6032:25:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$4459_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget1_$17899_$",
                            "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget1)"
                          },
                          "typeName": {
                            "id": 17557,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                              "id": 17556,
                              "name": "MockHyperdriveTarget1",
                              "nameLocations": [
                                "6036:21:66"
                              ],
                              "nodeType": "IdentifierPath",
                              "referencedDeclaration": 17899,
                              "src": "6036:21:66"
                            },
                            "referencedDeclaration": 17899,
                            "src": "6036:21:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MockHyperdriveTarget1_$17899",
                              "typeString": "contract MockHyperdriveTarget1"
                            }
                          }
                        },
                        "id": 17560,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6032:34:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget1_$17899",
                          "typeString": "contract MockHyperdriveTarget1"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget1_$17899",
                          "typeString": "contract MockHyperdriveTarget1"
                        }
                      ],
                      "id": 17555,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6024:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 17554,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6024:7:66",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 17561,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6024:43:66",
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
                            "id": 17567,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17542,
                            "src": "6115:7:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          ],
                          "id": 17566,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "6089:25:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$4459_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget2_$17914_$",
                            "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget2)"
                          },
                          "typeName": {
                            "id": 17565,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                              "id": 17564,
                              "name": "MockHyperdriveTarget2",
                              "nameLocations": [
                                "6093:21:66"
                              ],
                              "nodeType": "IdentifierPath",
                              "referencedDeclaration": 17914,
                              "src": "6093:21:66"
                            },
                            "referencedDeclaration": 17914,
                            "src": "6093:21:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MockHyperdriveTarget2_$17914",
                              "typeString": "contract MockHyperdriveTarget2"
                            }
                          }
                        },
                        "id": 17568,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6089:34:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget2_$17914",
                          "typeString": "contract MockHyperdriveTarget2"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget2_$17914",
                          "typeString": "contract MockHyperdriveTarget2"
                        }
                      ],
                      "id": 17563,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6081:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 17562,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6081:7:66",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 17569,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6081:43:66",
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
                            "id": 17575,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17542,
                            "src": "6172:7:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          ],
                          "id": 17574,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "6146:25:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$4459_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget3_$17929_$",
                            "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget3)"
                          },
                          "typeName": {
                            "id": 17573,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                              "id": 17572,
                              "name": "MockHyperdriveTarget3",
                              "nameLocations": [
                                "6150:21:66"
                              ],
                              "nodeType": "IdentifierPath",
                              "referencedDeclaration": 17929,
                              "src": "6150:21:66"
                            },
                            "referencedDeclaration": 17929,
                            "src": "6150:21:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MockHyperdriveTarget3_$17929",
                              "typeString": "contract MockHyperdriveTarget3"
                            }
                          }
                        },
                        "id": 17576,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6146:34:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget3_$17929",
                          "typeString": "contract MockHyperdriveTarget3"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_MockHyperdriveTarget3_$17929",
                          "typeString": "contract MockHyperdriveTarget3"
                        }
                      ],
                      "id": 17571,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6138:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_address_$",
                        "typeString": "type(address)"
                      },
                      "typeName": {
                        "id": 17570,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6138:7:66",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 17577,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6138:43:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 17578,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 17544,
                  "name": "Hyperdrive",
                  "nameLocations": [
                    "5922:10:66"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 563,
                  "src": "5922:10:66"
                },
                "nodeType": "ModifierInvocation",
                "src": "5922:269:66"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 17543,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17542,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "5900:7:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17581,
                  "src": "5870:37:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 17541,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 17540,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "5870:11:66",
                        "5882:10:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4459,
                      "src": "5870:22:66"
                    },
                    "referencedDeclaration": 4459,
                    "src": "5870:22:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5860:53:66"
            },
            "returnParameters": {
              "id": 17579,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6196:0:66"
            },
            "scope": 17855,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 17593,
            "nodeType": "FunctionDefinition",
            "src": "6223:138:66",
            "nodes": [],
            "body": {
              "id": 17592,
              "nodeType": "Block",
              "src": "6316:45:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 17590,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 17588,
                      "name": "_marketState",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9849,
                      "src": "6326:12:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                        "typeString": "struct IHyperdrive.MarketState storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 17589,
                      "name": "_marketState_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17585,
                      "src": "6341:13:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_MarketState_$4360_memory_ptr",
                        "typeString": "struct IHyperdrive.MarketState memory"
                      }
                    },
                    "src": "6326:28:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                      "typeString": "struct IHyperdrive.MarketState storage ref"
                    }
                  },
                  "id": 17591,
                  "nodeType": "ExpressionStatement",
                  "src": "6326:28:66"
                }
              ]
            },
            "documentation": {
              "id": 17582,
              "nodeType": "StructuredDocumentation",
              "src": "6204:14:66",
              "text": "Mocks ///"
            },
            "functionSelector": "ac25d47f",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setMarketState",
            "nameLocation": "6232:14:66",
            "parameters": {
              "id": 17586,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17585,
                  "mutability": "mutable",
                  "name": "_marketState_",
                  "nameLocation": "6287:13:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17593,
                  "src": "6256:44:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_MarketState_$4360_memory_ptr",
                    "typeString": "struct IHyperdrive.MarketState"
                  },
                  "typeName": {
                    "id": 17584,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 17583,
                      "name": "IHyperdrive.MarketState",
                      "nameLocations": [
                        "6256:11:66",
                        "6268:11:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4360,
                      "src": "6256:23:66"
                    },
                    "referencedDeclaration": 4360,
                    "src": "6256:23:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_MarketState_$4360_storage_ptr",
                      "typeString": "struct IHyperdrive.MarketState"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6246:60:66"
            },
            "returnParameters": {
              "id": 17587,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6316:0:66"
            },
            "scope": 17855,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17603,
            "nodeType": "FunctionDefinition",
            "src": "6367:98:66",
            "nodes": [],
            "body": {
              "id": 17602,
              "nodeType": "Block",
              "src": "6422:43:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 17600,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 17598,
                      "name": "totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17181,
                      "src": "6432:11:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 17599,
                      "name": "_totalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17595,
                      "src": "6446:12:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6432:26:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17601,
                  "nodeType": "ExpressionStatement",
                  "src": "6432:26:66"
                }
              ]
            },
            "functionSelector": "a77384c1",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setTotalShares",
            "nameLocation": "6376:14:66",
            "parameters": {
              "id": 17596,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17595,
                  "mutability": "mutable",
                  "name": "_totalShares",
                  "nameLocation": "6399:12:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17603,
                  "src": "6391:20:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17594,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6391:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6390:22:66"
            },
            "returnParameters": {
              "id": 17597,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6422:0:66"
            },
            "scope": 17855,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17671,
            "nodeType": "FunctionDefinition",
            "src": "6597:566:66",
            "nodes": [],
            "body": {
              "id": 17670,
              "nodeType": "Block",
              "src": "6648:515:66",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    null,
                    17611
                  ],
                  "declarations": [
                    null,
                    {
                      "constant": false,
                      "id": 17611,
                      "mutability": "mutable",
                      "name": "interest",
                      "nameLocation": "6668:8:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 17670,
                      "src": "6661:15:66",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 17610,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6661:6:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 17624,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 17618,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "6764:4:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_MockHyperdrive_$17855",
                                  "typeString": "contract MockHyperdrive"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_MockHyperdrive_$17855",
                                  "typeString": "contract MockHyperdrive"
                                }
                              ],
                              "id": 17617,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "6756:7:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 17616,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "6756:7:66",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 17619,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6756:13:66",
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
                            "id": 17614,
                            "name": "_baseToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9815,
                            "src": "6735:10:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$3872",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 17615,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6746:9:66",
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3833,
                          "src": "6735:20:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view external returns (uint256)"
                          }
                        },
                        "id": 17620,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6735:35:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17621,
                        "name": "apr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17607,
                        "src": "6784:3:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 17622,
                        "name": "time",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17605,
                        "src": "6801:4:66",
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
                        "id": 17612,
                        "name": "HyperdriveUtils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 130107,
                        "src": "6680:15:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveUtils_$130107_$",
                          "typeString": "type(library HyperdriveUtils)"
                        }
                      },
                      "id": 17613,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6696:25:66",
                      "memberName": "calculateCompoundInterest",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 127423,
                      "src": "6680:41:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$returns$_t_uint256_$_t_int256_$",
                        "typeString": "function (uint256,int256,uint256) pure returns (uint256,int256)"
                      }
                    },
                    "id": 17623,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6680:135:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_int256_$",
                      "typeString": "tuple(uint256,int256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6658:157:66"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 17627,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 17625,
                      "name": "interest",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17611,
                      "src": "6830:8:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 17626,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6841:1:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6830:12:66",
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
                      "id": 17648,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 17646,
                        "name": "interest",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17611,
                        "src": "6998:8:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 17647,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7009:1:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "6998:12:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 17668,
                    "nodeType": "IfStatement",
                    "src": "6994:163:66",
                    "trueBody": {
                      "id": 17667,
                      "nodeType": "Block",
                      "src": "7012:145:66",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 17658,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "7091:4:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$17855",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_MockHyperdrive_$17855",
                                      "typeString": "contract MockHyperdrive"
                                    }
                                  ],
                                  "id": 17657,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "7083:7:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 17656,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "7083:7:66",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 17659,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7083:13:66",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 17663,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "UnaryOperation",
                                    "operator": "-",
                                    "prefix": true,
                                    "src": "7122:9:66",
                                    "subExpression": {
                                      "id": 17662,
                                      "name": "interest",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 17611,
                                      "src": "7123:8:66",
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
                                  "id": 17661,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "7114:7:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 17660,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "7114:7:66",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 17664,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7114:18:66",
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
                                        "id": 17652,
                                        "name": "_baseToken",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9815,
                                        "src": "7048:10:66",
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
                                      "id": 17651,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "7040:7:66",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_address_$",
                                        "typeString": "type(address)"
                                      },
                                      "typeName": {
                                        "id": 17650,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7040:7:66",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 17653,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "7040:19:66",
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
                                  "id": 17649,
                                  "name": "ERC20Mintable",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 16260,
                                  "src": "7026:13:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$16260_$",
                                    "typeString": "type(contract ERC20Mintable)"
                                  }
                                },
                                "id": 17654,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7026:34:66",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC20Mintable_$16260",
                                  "typeString": "contract ERC20Mintable"
                                }
                              },
                              "id": 17655,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "7061:4:66",
                              "memberName": "burn",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 16259,
                              "src": "7026:39:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                "typeString": "function (address,uint256) external"
                              }
                            },
                            "id": 17665,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7026:120:66",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 17666,
                          "nodeType": "ExpressionStatement",
                          "src": "7026:120:66"
                        }
                      ]
                    }
                  },
                  "id": 17669,
                  "nodeType": "IfStatement",
                  "src": "6826:331:66",
                  "trueBody": {
                    "id": 17645,
                    "nodeType": "Block",
                    "src": "6844:144:66",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 17637,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "6923:4:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$17855",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockHyperdrive_$17855",
                                    "typeString": "contract MockHyperdrive"
                                  }
                                ],
                                "id": 17636,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6915:7:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 17635,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "6915:7:66",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 17638,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6915:13:66",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 17641,
                                  "name": "interest",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 17611,
                                  "src": "6954:8:66",
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
                                "id": 17640,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6946:7:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 17639,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "6946:7:66",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 17642,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6946:17:66",
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
                                      "id": 17631,
                                      "name": "_baseToken",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9815,
                                      "src": "6880:10:66",
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
                                    "id": 17630,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6872:7:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 17629,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "6872:7:66",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 17632,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6872:19:66",
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
                                "id": 17628,
                                "name": "ERC20Mintable",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 16260,
                                "src": "6858:13:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$16260_$",
                                  "typeString": "type(contract ERC20Mintable)"
                                }
                              },
                              "id": 17633,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6858:34:66",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20Mintable_$16260",
                                "typeString": "contract ERC20Mintable"
                              }
                            },
                            "id": 17634,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6893:4:66",
                            "memberName": "mint",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 16230,
                            "src": "6858:39:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256) external"
                            }
                          },
                          "id": 17643,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6858:119:66",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 17644,
                        "nodeType": "ExpressionStatement",
                        "src": "6858:119:66"
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
            "nameLocation": "6606:6:66",
            "parameters": {
              "id": 17608,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17605,
                  "mutability": "mutable",
                  "name": "time",
                  "nameLocation": "6621:4:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17671,
                  "src": "6613:12:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17604,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6613:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17607,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "6634:3:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17671,
                  "src": "6627:10:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 17606,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6627:6:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6612:26:66"
            },
            "returnParameters": {
              "id": 17609,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6648:0:66"
            },
            "scope": 17855,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17699,
            "nodeType": "FunctionDefinition",
            "src": "7169:401:66",
            "nodes": [],
            "body": {
              "id": 17698,
              "nodeType": "Block",
              "src": "7364:206:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 17692,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 17684,
                          "name": "curveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17680,
                          "src": "7375:8:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 17685,
                          "name": "governanceCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17682,
                          "src": "7385:18:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 17686,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "7374:30:66",
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
                          "id": 17688,
                          "name": "_shareAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17673,
                          "src": "7446:12:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 17689,
                          "name": "_spotPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17675,
                          "src": "7472:10:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 17690,
                          "name": "sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17677,
                          "src": "7496:10:66",
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
                        "id": 17687,
                        "name": "_calculateFeesGivenShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6283,
                        "src": "7407:25:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) view returns (uint256,uint256)"
                        }
                      },
                      "id": 17691,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7407:109:66",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256)"
                      }
                    },
                    "src": "7374:142:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17693,
                  "nodeType": "ExpressionStatement",
                  "src": "7374:142:66"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 17694,
                        "name": "curveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17680,
                        "src": "7534:8:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17695,
                        "name": "governanceCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17682,
                        "src": "7544:18:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 17696,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "7533:30:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 17683,
                  "id": 17697,
                  "nodeType": "Return",
                  "src": "7526:37:66"
                }
              ]
            },
            "functionSelector": "71f88b7c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateFeesGivenShares",
            "nameLocation": "7178:24:66",
            "parameters": {
              "id": 17678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17673,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "7220:12:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17699,
                  "src": "7212:20:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17672,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7212:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17675,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "7250:10:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17699,
                  "src": "7242:18:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17674,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7242:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17677,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "7278:10:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17699,
                  "src": "7270:18:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17676,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7270:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7202:92:66"
            },
            "returnParameters": {
              "id": 17683,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17680,
                  "mutability": "mutable",
                  "name": "curveFee",
                  "nameLocation": "7326:8:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17699,
                  "src": "7318:16:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17679,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7318:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17682,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "7344:18:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17699,
                  "src": "7336:26:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17681,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7336:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7317:46:66"
            },
            "scope": 17855,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17738,
            "nodeType": "FunctionDefinition",
            "src": "7576:812:66",
            "nodes": [],
            "body": {
              "id": 17737,
              "nodeType": "Block",
              "src": "7952:436:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 17729,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "components": [
                        {
                          "id": 17718,
                          "name": "totalCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17710,
                          "src": "7976:13:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 17719,
                          "name": "totalFlatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17712,
                          "src": "8003:12:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 17720,
                          "name": "governanceCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17714,
                          "src": "8029:18:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 17721,
                          "name": "totalGovernanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17716,
                          "src": "8061:18:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 17722,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "7962:127:66",
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
                          "id": 17724,
                          "name": "_bondAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17701,
                          "src": "8130:11:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 17725,
                          "name": "_normalizedTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17703,
                          "src": "8155:24:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 17726,
                          "name": "_spotPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17705,
                          "src": "8193:10:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 17727,
                          "name": "sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17707,
                          "src": "8217:10:66",
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
                        "id": 17723,
                        "name": "_calculateFeesGivenBonds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6353,
                        "src": "8092:24:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256,uint256)"
                        }
                      },
                      "id": 17728,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8092:145:66",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "tuple(uint256,uint256,uint256,uint256)"
                      }
                    },
                    "src": "7962:275:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17730,
                  "nodeType": "ExpressionStatement",
                  "src": "7962:275:66"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 17731,
                        "name": "totalCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17710,
                        "src": "8268:13:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17732,
                        "name": "totalFlatFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17712,
                        "src": "8295:12:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17733,
                        "name": "governanceCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17714,
                        "src": "8321:18:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17734,
                        "name": "totalGovernanceFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17716,
                        "src": "8353:18:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 17735,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "8254:127:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 17717,
                  "id": 17736,
                  "nodeType": "Return",
                  "src": "8247:134:66"
                }
              ]
            },
            "functionSelector": "22d5506b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateFeesGivenBonds",
            "nameLocation": "7585:23:66",
            "parameters": {
              "id": 17708,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17701,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "7626:11:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17738,
                  "src": "7618:19:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17700,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7618:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17703,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "7655:24:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17738,
                  "src": "7647:32:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17702,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7647:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17705,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "7697:10:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17738,
                  "src": "7689:18:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17704,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7689:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17707,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "7725:10:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17738,
                  "src": "7717:18:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17706,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7717:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7608:133:66"
            },
            "returnParameters": {
              "id": 17717,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17710,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "7810:13:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17738,
                  "src": "7802:21:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17709,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7802:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17712,
                  "mutability": "mutable",
                  "name": "totalFlatFee",
                  "nameLocation": "7845:12:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17738,
                  "src": "7837:20:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17711,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7837:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17714,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "7879:18:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17738,
                  "src": "7871:26:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17713,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7871:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17716,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "7919:18:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17738,
                  "src": "7911:26:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17715,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7911:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7788:159:66"
            },
            "scope": 17855,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17759,
            "nodeType": "FunctionDefinition",
            "src": "8437:375:66",
            "nodes": [],
            "body": {
              "id": 17758,
              "nodeType": "Block",
              "src": "8743:69:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 17754,
                        "name": "_shareAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17740,
                        "src": "8779:12:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 17755,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17742,
                        "src": "8793:11:66",
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
                      "id": 17753,
                      "name": "_calculateOpenLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8349,
                      "src": "8760:18:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                        "typeString": "function (uint256,uint256) view returns (uint256,uint256,uint256,uint256)"
                      }
                    },
                    "id": 17756,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8760:45:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 17752,
                  "id": 17757,
                  "nodeType": "Return",
                  "src": "8753:52:66"
                }
              ]
            },
            "functionSelector": "9bd33498",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenLong",
            "nameLocation": "8446:17:66",
            "parameters": {
              "id": 17743,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17740,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "8481:12:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17759,
                  "src": "8473:20:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17739,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8473:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17742,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "8511:11:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17759,
                  "src": "8503:19:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17741,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8503:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8463:65:66"
            },
            "returnParameters": {
              "id": 17752,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17745,
                  "mutability": "mutable",
                  "name": "shareReservesDelta",
                  "nameLocation": "8597:18:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17759,
                  "src": "8589:26:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17744,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8589:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17747,
                  "mutability": "mutable",
                  "name": "bondReservesDelta",
                  "nameLocation": "8637:17:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17759,
                  "src": "8629:25:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17746,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8629:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17749,
                  "mutability": "mutable",
                  "name": "bondProceeds",
                  "nameLocation": "8676:12:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17759,
                  "src": "8668:20:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17748,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8668:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17751,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "8710:18:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17759,
                  "src": "8702:26:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17750,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8702:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8575:163:66"
            },
            "scope": 17855,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17771,
            "nodeType": "FunctionDefinition",
            "src": "8818:177:66",
            "nodes": [],
            "body": {
              "id": 17770,
              "nodeType": "Block",
              "src": "8933:62:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 17767,
                        "name": "_maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17761,
                        "src": "8974:13:66",
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
                      "id": 17766,
                      "name": "_calculateTimeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5732,
                      "src": "8950:23:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 17768,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8950:38:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17765,
                  "id": 17769,
                  "nodeType": "Return",
                  "src": "8943:45:66"
                }
              ]
            },
            "functionSelector": "68c2ecb8",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemaining",
            "nameLocation": "8827:22:66",
            "parameters": {
              "id": 17762,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17761,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "8867:13:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17771,
                  "src": "8859:21:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17760,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8859:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8849:37:66"
            },
            "returnParameters": {
              "id": 17765,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17764,
                  "mutability": "mutable",
                  "name": "timeRemaining",
                  "nameLocation": "8918:13:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17771,
                  "src": "8910:21:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17763,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8910:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8909:23:66"
            },
            "scope": 17855,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17783,
            "nodeType": "FunctionDefinition",
            "src": "9001:189:66",
            "nodes": [],
            "body": {
              "id": 17782,
              "nodeType": "Block",
              "src": "9122:68:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 17779,
                        "name": "_maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17773,
                        "src": "9169:13:66",
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
                      "id": 17778,
                      "name": "_calculateTimeRemainingScaled",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5769,
                      "src": "9139:29:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 17780,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9139:44:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17777,
                  "id": 17781,
                  "nodeType": "Return",
                  "src": "9132:51:66"
                }
              ]
            },
            "functionSelector": "ca6d38f7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeRemainingScaled",
            "nameLocation": "9010:28:66",
            "parameters": {
              "id": 17774,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17773,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "9056:13:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17783,
                  "src": "9048:21:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17772,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9048:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9038:37:66"
            },
            "returnParameters": {
              "id": 17777,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17776,
                  "mutability": "mutable",
                  "name": "timeRemaining",
                  "nameLocation": "9107:13:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17783,
                  "src": "9099:21:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17775,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9099:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9098:23:66"
            },
            "scope": 17855,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17792,
            "nodeType": "FunctionDefinition",
            "src": "9196:118:66",
            "nodes": [],
            "body": {
              "id": 17791,
              "nodeType": "Block",
              "src": "9271:43:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 17788,
                      "name": "_latestCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5787,
                      "src": "9288:17:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 17789,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9288:19:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17787,
                  "id": 17790,
                  "nodeType": "Return",
                  "src": "9281:26:66"
                }
              ]
            },
            "functionSelector": "907c0f92",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "latestCheckpoint",
            "nameLocation": "9205:16:66",
            "parameters": {
              "id": 17784,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9221:2:66"
            },
            "returnParameters": {
              "id": 17787,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17786,
                  "mutability": "mutable",
                  "name": "checkpointTime",
                  "nameLocation": "9255:14:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17792,
                  "src": "9247:22:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17785,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9247:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9246:24:66"
            },
            "scope": 17855,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17802,
            "nodeType": "FunctionDefinition",
            "src": "9320:116:66",
            "nodes": [],
            "body": {
              "id": 17801,
              "nodeType": "Block",
              "src": "9382:54:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 17798,
                        "name": "_shareReservesDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17794,
                        "src": "9409:19:66",
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
                      "id": 17797,
                      "name": "_updateLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7647,
                      "src": "9392:16:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$returns$__$",
                        "typeString": "function (int256)"
                      }
                    },
                    "id": 17799,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9392:37:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17800,
                  "nodeType": "ExpressionStatement",
                  "src": "9392:37:66"
                }
              ]
            },
            "functionSelector": "8120a3e2",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateLiquidity",
            "nameLocation": "9329:15:66",
            "parameters": {
              "id": 17795,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17794,
                  "mutability": "mutable",
                  "name": "_shareReservesDelta",
                  "nameLocation": "9352:19:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17802,
                  "src": "9345:26:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 17793,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9345:6:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9344:28:66"
            },
            "returnParameters": {
              "id": 17796,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9382:0:66"
            },
            "scope": 17855,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17814,
            "nodeType": "FunctionDefinition",
            "src": "9442:167:66",
            "nodes": [],
            "body": {
              "id": 17813,
              "nodeType": "Block",
              "src": "9545:64:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 17810,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17804,
                        "src": "9590:11:66",
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
                      "id": 17809,
                      "name": "_calculateIdleShareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6187,
                      "src": "9562:27:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 17811,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9562:40:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17808,
                  "id": 17812,
                  "nodeType": "Return",
                  "src": "9555:47:66"
                }
              ]
            },
            "functionSelector": "b1b4b170",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateIdleShareReserves",
            "nameLocation": "9451:26:66",
            "parameters": {
              "id": 17805,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17804,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "9495:11:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17814,
                  "src": "9487:19:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17803,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9487:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9477:35:66"
            },
            "returnParameters": {
              "id": 17808,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17807,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 17814,
                  "src": "9536:7:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17806,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9536:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9535:9:66"
            },
            "scope": 17855,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17822,
            "nodeType": "FunctionDefinition",
            "src": "9615:93:66",
            "nodes": [],
            "body": {
              "id": 17821,
              "nodeType": "Block",
              "src": "9673:35:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 17819,
                    "name": "totalShares",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17181,
                    "src": "9690:11:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17818,
                  "id": 17820,
                  "nodeType": "Return",
                  "src": "9683:18:66"
                }
              ]
            },
            "functionSelector": "d5002f2e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTotalShares",
            "nameLocation": "9624:14:66",
            "parameters": {
              "id": 17815,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9638:2:66"
            },
            "returnParameters": {
              "id": 17818,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17817,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 17822,
                  "src": "9664:7:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17816,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9664:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9663:9:66"
            },
            "scope": 17855,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17842,
            "nodeType": "FunctionDefinition",
            "src": "9714:184:66",
            "nodes": [],
            "body": {
              "id": 17841,
              "nodeType": "Block",
              "src": "9789:109:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 17833,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 17829,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9849,
                        "src": "9799:12:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 17831,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "9812:13:66",
                      "memberName": "shareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4329,
                      "src": "9799:26:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 17832,
                      "name": "shareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17824,
                      "src": "9828:13:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "9799:42:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 17834,
                  "nodeType": "ExpressionStatement",
                  "src": "9799:42:66"
                },
                {
                  "expression": {
                    "id": 17839,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 17835,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9849,
                        "src": "9851:12:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 17837,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "9864:12:66",
                      "memberName": "bondReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4332,
                      "src": "9851:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 17838,
                      "name": "bondReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17826,
                      "src": "9879:12:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "9851:40:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 17840,
                  "nodeType": "ExpressionStatement",
                  "src": "9851:40:66"
                }
              ]
            },
            "functionSelector": "702db0eb",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setReserves",
            "nameLocation": "9723:11:66",
            "parameters": {
              "id": 17827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17824,
                  "mutability": "mutable",
                  "name": "shareReserves",
                  "nameLocation": "9743:13:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17842,
                  "src": "9735:21:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 17823,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "9735:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17826,
                  "mutability": "mutable",
                  "name": "bondReserves",
                  "nameLocation": "9766:12:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17842,
                  "src": "9758:20:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 17825,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "9758:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9734:45:66"
            },
            "returnParameters": {
              "id": 17828,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9789:0:66"
            },
            "scope": 17855,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 17854,
            "nodeType": "FunctionDefinition",
            "src": "9904:113:66",
            "nodes": [],
            "body": {
              "id": 17853,
              "nodeType": "Block",
              "src": "9960:57:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 17851,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 17847,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9849,
                        "src": "9970:12:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 17849,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "9983:12:66",
                      "memberName": "longExposure",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4341,
                      "src": "9970:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 17850,
                      "name": "longExposure",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17844,
                      "src": "9998:12:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "9970:40:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 17852,
                  "nodeType": "ExpressionStatement",
                  "src": "9970:40:66"
                }
              ]
            },
            "functionSelector": "b4f8da39",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setLongExposure",
            "nameLocation": "9913:15:66",
            "parameters": {
              "id": 17845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17844,
                  "mutability": "mutable",
                  "name": "longExposure",
                  "nameLocation": "9937:12:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17854,
                  "src": "9929:20:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 17843,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "9929:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9928:22:66"
            },
            "returnParameters": {
              "id": 17846,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9960:0:66"
            },
            "scope": 17855,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 17533,
              "name": "Hyperdrive",
              "nameLocations": [
                "5773:10:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 563,
              "src": "5773:10:66"
            },
            "id": 17534,
            "nodeType": "InheritanceSpecifier",
            "src": "5773:10:66"
          },
          {
            "baseName": {
              "id": 17535,
              "name": "MockHyperdriveBase",
              "nameLocations": [
                "5785:18:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 17532,
              "src": "5785:18:66"
            },
            "id": 17536,
            "nodeType": "InheritanceSpecifier",
            "src": "5785:18:66"
          }
        ],
        "canonicalName": "MockHyperdrive",
        "contractDependencies": [
          17884,
          17899,
          17914,
          17929
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          17855,
          17532,
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
        "name": "MockHyperdrive",
        "nameLocation": "5755:14:66",
        "scope": 17930,
        "usedErrors": [
          4527,
          4533,
          4535,
          4537,
          4539,
          4545,
          4593,
          4649,
          4651,
          4661,
          4663
        ]
      },
      {
        "id": 17884,
        "nodeType": "ContractDefinition",
        "src": "10021:327:66",
        "nodes": [
          {
            "id": 17869,
            "nodeType": "FunctionDefinition",
            "src": "10099:94:66",
            "nodes": [],
            "body": {
              "id": 17868,
              "nodeType": "Block",
              "src": "10191:2:66",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 17865,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17862,
                    "src": "10182:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 17866,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 17864,
                  "name": "HyperdriveTarget0",
                  "nameLocations": [
                    "10164:17:66"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1290,
                  "src": "10164:17:66"
                },
                "nodeType": "ModifierInvocation",
                "src": "10164:26:66"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 17863,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17862,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "10150:7:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17869,
                  "src": "10120:37:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 17861,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 17860,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "10120:11:66",
                        "10132:10:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4459,
                      "src": "10120:22:66"
                    },
                    "referencedDeclaration": 4459,
                    "src": "10120:22:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10110:53:66"
            },
            "returnParameters": {
              "id": 17867,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10191:0:66"
            },
            "scope": 17884,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 17883,
            "nodeType": "FunctionDefinition",
            "src": "10218:128:66",
            "nodes": [],
            "body": {
              "id": 17882,
              "nodeType": "Block",
              "src": "10286:60:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 17878,
                            "name": "_governanceFeesAccrued",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9868,
                            "src": "10315:22:66",
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
                            "id": 17876,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "10304:3:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 17877,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "10308:6:66",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "10304:10:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 17879,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10304:34:66",
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
                      "id": 17875,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1289,
                      "src": "10296:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 17880,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10296:43:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17881,
                  "nodeType": "ExpressionStatement",
                  "src": "10296:43:66"
                }
              ]
            },
            "documentation": {
              "id": 17870,
              "nodeType": "StructuredDocumentation",
              "src": "10199:14:66",
              "text": "Mocks ///"
            },
            "functionSelector": "8e67f87e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getGovernanceFeesAccrued",
            "nameLocation": "10227:24:66",
            "parameters": {
              "id": 17871,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10251:2:66"
            },
            "returnParameters": {
              "id": 17874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17873,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 17883,
                  "src": "10277:7:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17872,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10277:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10276:9:66"
            },
            "scope": 17884,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 17856,
              "name": "HyperdriveTarget0",
              "nameLocations": [
                "10055:17:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1290,
              "src": "10055:17:66"
            },
            "id": 17857,
            "nodeType": "InheritanceSpecifier",
            "src": "10055:17:66"
          },
          {
            "baseName": {
              "id": 17858,
              "name": "MockHyperdriveBase",
              "nameLocations": [
                "10074:18:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 17532,
              "src": "10074:18:66"
            },
            "id": 17859,
            "nodeType": "InheritanceSpecifier",
            "src": "10074:18:66"
          }
        ],
        "canonicalName": "MockHyperdriveTarget0",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          17884,
          17532,
          1290,
          6845,
          9792,
          8477,
          7648,
          8937,
          5464,
          6406,
          10066,
          63914,
          4944,
          5278
        ],
        "name": "MockHyperdriveTarget0",
        "nameLocation": "10030:21:66",
        "scope": 17930,
        "usedErrors": [
          4527,
          4533,
          4535,
          4539,
          4541,
          4547,
          4561,
          4587,
          4596,
          4615,
          4617,
          4619,
          4621,
          4623,
          4646,
          4649,
          4651,
          4658
        ]
      },
      {
        "id": 17899,
        "nodeType": "ContractDefinition",
        "src": "10350:174:66",
        "nodes": [
          {
            "id": 17898,
            "nodeType": "FunctionDefinition",
            "src": "10428:94:66",
            "nodes": [],
            "body": {
              "id": 17897,
              "nodeType": "Block",
              "src": "10520:2:66",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 17894,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17891,
                    "src": "10511:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 17895,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 17893,
                  "name": "HyperdriveTarget1",
                  "nameLocations": [
                    "10493:17:66"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1420,
                  "src": "10493:17:66"
                },
                "nodeType": "ModifierInvocation",
                "src": "10493:26:66"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 17892,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17891,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "10479:7:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17898,
                  "src": "10449:37:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 17890,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 17889,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "10449:11:66",
                        "10461:10:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4459,
                      "src": "10449:22:66"
                    },
                    "referencedDeclaration": 4459,
                    "src": "10449:22:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10439:53:66"
            },
            "returnParameters": {
              "id": 17896,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10520:0:66"
            },
            "scope": 17899,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 17885,
              "name": "HyperdriveTarget1",
              "nameLocations": [
                "10384:17:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1420,
              "src": "10384:17:66"
            },
            "id": 17886,
            "nodeType": "InheritanceSpecifier",
            "src": "10384:17:66"
          },
          {
            "baseName": {
              "id": 17887,
              "name": "MockHyperdriveBase",
              "nameLocations": [
                "10403:18:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 17532,
              "src": "10403:18:66"
            },
            "id": 17888,
            "nodeType": "InheritanceSpecifier",
            "src": "10403:18:66"
          }
        ],
        "canonicalName": "MockHyperdriveTarget1",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          17899,
          17532,
          1420,
          6845,
          9792,
          8477,
          7648,
          8937,
          5464,
          6406,
          10066,
          63914
        ],
        "name": "MockHyperdriveTarget1",
        "nameLocation": "10359:21:66",
        "scope": 17930,
        "usedErrors": [
          4517,
          4521,
          4527,
          4533,
          4535,
          4537,
          4539,
          4547,
          4551,
          4553,
          4555,
          4557,
          4561,
          4571,
          4646,
          4649,
          4651,
          4658,
          4661,
          4663
        ]
      },
      {
        "id": 17914,
        "nodeType": "ContractDefinition",
        "src": "10526:174:66",
        "nodes": [
          {
            "id": 17913,
            "nodeType": "FunctionDefinition",
            "src": "10604:94:66",
            "nodes": [],
            "body": {
              "id": 17912,
              "nodeType": "Block",
              "src": "10696:2:66",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 17909,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17906,
                    "src": "10687:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 17910,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 17908,
                  "name": "HyperdriveTarget2",
                  "nameLocations": [
                    "10669:17:66"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1524,
                  "src": "10669:17:66"
                },
                "nodeType": "ModifierInvocation",
                "src": "10669:26:66"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 17907,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17906,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "10655:7:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17913,
                  "src": "10625:37:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 17905,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 17904,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "10625:11:66",
                        "10637:10:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4459,
                      "src": "10625:22:66"
                    },
                    "referencedDeclaration": 4459,
                    "src": "10625:22:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10615:53:66"
            },
            "returnParameters": {
              "id": 17911,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10696:0:66"
            },
            "scope": 17914,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 17900,
              "name": "HyperdriveTarget2",
              "nameLocations": [
                "10560:17:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1524,
              "src": "10560:17:66"
            },
            "id": 17901,
            "nodeType": "InheritanceSpecifier",
            "src": "10560:17:66"
          },
          {
            "baseName": {
              "id": 17902,
              "name": "MockHyperdriveBase",
              "nameLocations": [
                "10579:18:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 17532,
              "src": "10579:18:66"
            },
            "id": 17903,
            "nodeType": "InheritanceSpecifier",
            "src": "10579:18:66"
          }
        ],
        "canonicalName": "MockHyperdriveTarget2",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          17914,
          17532,
          1524,
          6845,
          9792,
          8477,
          7648,
          8937,
          5464,
          6406,
          10066,
          63914
        ],
        "name": "MockHyperdriveTarget2",
        "nameLocation": "10535:21:66",
        "scope": 17930,
        "usedErrors": [
          4525,
          4527,
          4533,
          4535,
          4537,
          4539,
          4543,
          4545,
          4547,
          4551,
          4553,
          4555,
          4561,
          4569,
          4571,
          4646,
          4649,
          4651,
          4658,
          4661,
          4663
        ]
      },
      {
        "id": 17929,
        "nodeType": "ContractDefinition",
        "src": "10702:174:66",
        "nodes": [
          {
            "id": 17928,
            "nodeType": "FunctionDefinition",
            "src": "10780:94:66",
            "nodes": [],
            "body": {
              "id": 17927,
              "nodeType": "Block",
              "src": "10872:2:66",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 17924,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17921,
                    "src": "10863:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 17925,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 17923,
                  "name": "HyperdriveTarget3",
                  "nameLocations": [
                    "10845:17:66"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1613,
                  "src": "10845:17:66"
                },
                "nodeType": "ModifierInvocation",
                "src": "10845:26:66"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 17922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17921,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "10831:7:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 17928,
                  "src": "10801:37:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 17920,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 17919,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "10801:11:66",
                        "10813:10:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4459,
                      "src": "10801:22:66"
                    },
                    "referencedDeclaration": 4459,
                    "src": "10801:22:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10791:53:66"
            },
            "returnParameters": {
              "id": 17926,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10872:0:66"
            },
            "scope": 17929,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 17915,
              "name": "HyperdriveTarget3",
              "nameLocations": [
                "10736:17:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1613,
              "src": "10736:17:66"
            },
            "id": 17916,
            "nodeType": "InheritanceSpecifier",
            "src": "10736:17:66"
          },
          {
            "baseName": {
              "id": 17917,
              "name": "MockHyperdriveBase",
              "nameLocations": [
                "10755:18:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 17532,
              "src": "10755:18:66"
            },
            "id": 17918,
            "nodeType": "InheritanceSpecifier",
            "src": "10755:18:66"
          }
        ],
        "canonicalName": "MockHyperdriveTarget3",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          17929,
          17532,
          1613,
          6845,
          9792,
          8477,
          7648,
          8937,
          5464,
          6406,
          10066,
          63914
        ],
        "name": "MockHyperdriveTarget3",
        "nameLocation": "10711:21:66",
        "scope": 17930,
        "usedErrors": [
          4527,
          4533,
          4535,
          4537,
          4539,
          4545,
          4547,
          4553,
          4561,
          4571,
          4646,
          4649,
          4651,
          4658,
          4661,
          4663
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 66
} as const;
