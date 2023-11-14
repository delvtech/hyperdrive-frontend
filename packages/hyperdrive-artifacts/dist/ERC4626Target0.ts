export const ERC4626Target0 = 
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
          "internalType": "contract IERC4626",
          "name": "__pool",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "BatchInputLengthMismatch",
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
      "name": "InvalidTradeSize",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NegativePresentValue",
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
      "name": "Unauthorized",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "account",
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
            },
            {
              "internalType": "int128",
              "name": "exposure",
              "type": "int128"
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
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
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
          "internalType": "address",
          "name": "_target",
          "type": "address"
        }
      ],
      "name": "isSweepable",
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
          "name": "tokenId",
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
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
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
          "name": "account",
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
      "inputs": [],
      "name": "pool",
      "outputs": [
        {
          "internalType": "contract IERC4626",
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
          "name": "tokenId",
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
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
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
    "object": "0x61026060405260016000553480156200001757600080fd5b50604051620035ce380380620035ce8339810160408190526200003a91620002c8565b81516001600160a01b031660809081528201518190839081906103e8111562000076576040516349db44f560e01b815260040160405180910390fd5b60808101516101805260a08101516101a05260c08101516101c052610100810151600003620000b857604051635428734d60e01b815260040160405180910390fd5b6101008101805160a0525160e08201511080620000ea57508061010001518160e00151620000e79190620003c8565b15155b15620001095760405163253fffcf60e11b815260040160405180910390fd5b60e08181015160c05261012082015190526060810151610160908152610140820151600880546001600160a01b0319166001600160a01b0392831617905590820151166101e05261018081015151670de0b6b3a764000010806200017d5750670de0b6b3a764000081610180015160200151115b80620001995750670de0b6b3a764000081610180015160400151115b15620001b8576040516322f72cc360e11b815260040160405180910390fd5b610180810180515161010052805160209081015161012052905160409081015161014052908201516001600160a01b039081166102005291015161022052919091166102405250620003eb915050565b6040516101a081016001600160401b03811182821017156200023a57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200025857600080fd5b919050565b6000606082840312156200027057600080fd5b604051606081016001600160401b0381118282101715620002a157634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b600080828403610200811215620002de57600080fd5b6101e080821215620002ef57600080fd5b620002f962000208565b9150620003068562000240565b8252620003166020860162000240565b602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101208086015181840152506101406200037f81870162000240565b908301526101606200039386820162000240565b90830152610180620003a8878783016200025d565b8184015250819350620003bd81860162000240565b925050509250929050565b600082620003e657634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e0516102005161022051610240516130ce62000500600039600081816104820152818161160501528181611c950152611d5f015260008181610949015261153601526000818161091a01526114f9015260008181610a9d01528181611275015281816112ef015261135d015260006109e1015260006109bb015260008181610995015261174001526000818161096f015261171a01526000610b2301526000610afd01526000610ad7015260008181610a530152611766015260008181610a070152611dd8015260008181610a2d01526120dc0152600081816108eb0152610c4301526130ce6000f3fe608060405234801561001057600080fd5b50600436106101a85760003560e01c80637ecebe00116100f9578063c55dae6311610097578063d816574311610071578063d8165743146103c7578063e44808bc146103dc578063e985e9c5146103ef578063fba560081461040257600080fd5b8063c55dae6314610394578063c69e16ad1461039c578063cc962f8e146103a457600080fd5b8063ab033ea9116100d3578063ab033ea914610339578063b0d965801461034c578063bd85b03914610361578063becee9c31461037457600080fd5b80637ecebe00146103005780639cd241af14610313578063a22cb4651461032657600080fd5b806321ff32a9116101665780634e41a1fb116101405780634e41a1fb146102b25780634ed2d6ac146102c557806360246c88146102d85780637180c8ca146102ed57600080fd5b806321ff32a91461026b5780633656eec21461028c5780633e691db91461029f57600080fd5b8062ad800c146101ad57806302329a29146101d657806316f0115b146101eb57806317fad7fc1461020b5780631c0f12b61461021e57806320fc488114610231575b600080fd5b6101c06101bb366004612716565b610431565b6040516101cd919061277f565b60405180910390f35b6101e96101e43660046127a2565b610468565b005b6101f3610474565b6040516001600160a01b0390911681526020016101cd565b6101e9610219366004612820565b6104b7565b6101e961022c3660046128b1565b6104cd565b61024461023f366004612716565b6104e0565b6040805182516001600160801b03168152602092830151600f0b92810192909252016101cd565b61027e6102793660046128f5565b610532565b6040519081526020016101cd565b61027e61029a366004612931565b610578565b61027e6102ad36600461295d565b6105b1565b6101c06102c0366004612716565b6105bc565b6101e96102d3366004612998565b6105ca565b6102e0610618565b6040516101cd91906129de565b6101e96102fb366004612a69565b610812565b61027e61030e366004612a93565b610820565b6101e9610321366004612aae565b61084c565b6101e9610334366004612a69565b61085d565b6101e9610347366004612a93565b6108c9565b6103546108d2565b6040516101cd9190612ae3565b61027e61036f366004612716565b610b58565b610387610382366004612bc1565b610b7a565b6040516101cd9190612c03565b6101f3610c35565b61027e610c75565b6103b76103b2366004612a93565b610c8f565b60405190151581526020016101cd565b6103cf610cc5565b6040516101cd9190612c47565b6101e96103ea366004612d30565b610d2b565b6103b76103fd366004612d87565b610d73565b61040a610db7565b6040805182516001600160801b0390811682526020938401511692810192909252016101cd565b606061046361043f83610e16565b60405160200161044f919061277f565b604051602081830303815290604052610f44565b919050565b61047181610f68565b50565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916104b4910161044f565b90565b6104c5868686868686610fb1565b505050505050565b6104da8484848433611065565b50505050565b60408051808201909152600080825260208201526104636007600084815260200190815260200160002060405160200161044f91546001600160801b038116825260801d600f0b602082015260400190565b6000838152600e602090815260408083206001600160a01b0386811685529083528184209085168452825280832054815192830152610571910161044f565b9392505050565b6000828152600b602090815260408083206001600160a01b03851684528252808320548151928301526105ab910161044f565b92915050565b60006105ab82611226565b606061046361043f836113c9565b836105d4816114bb565b6001600160a01b0316336001600160a01b03161461060557604051632aab8bd360e01b815260040160405180910390fd5b61061185858585611578565b5050505050565b610683604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600061068d6115e5565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b03909216916106f89190612ddd565b6107029190612df0565b9050600080831161071457600061072f565b61072f836107296107248661167d565b6117e3565b90611a51565b604080516101a0810182526001546001600160801b038082168352600254600f0b6020840152600160801b91829004811693830193909352606082018690526080820187905260035480841660a084015260045480851660c085015290829004841660e0840152819004831661010083015260065480841661012084015204909116610140820152909150600090610160810184156107d7576107d28486611a66565b6107da565b60005b8152600254600160801b90046001600160801b031660209182015260405191925061080b9161044f918491016129de565b5050505090565b61081c8282611a7b565b5050565b6001600160a01b0381166000908152600f6020908152604080832054815192830152610463910161044f565b61085883838333611578565b505050565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61047181611af3565b6108da612666565b6104b4604051806101a001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180606001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081525081525060405160200161044f9190612ae3565b6000818152600c6020908152604080832054815192830152610463910161044f565b606060008267ffffffffffffffff811115610b9757610b97612e03565b604051908082528060200260200182016040528015610bc0578160200160208202803683370190505b50905060005b83811015610c19576000858583818110610be257610be2612e19565b90506020020135905060008154905080848481518110610c0457610c04612e19565b60209081029190910101525050600101610bc6565b50610c2e8160405160200161044f9190612c03565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916104b4910161044f565b60006104b460095460405160200161044f91815260200190565b6001600160a01b03811660009081526010602090815260408083205490516104639261044f9260ff169101901515815260200190565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526104b4600160405160200161044f9190612e2f565b84610d35816114bb565b6001600160a01b0316336001600160a01b031614610d6657604051632aab8bd360e01b815260040160405180910390fd5b6104c58686868686611065565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff90911615159181019190915290916105ab910161044f565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526104b49060600161044f565b606060f882901c6001600160f81b0383166000610e3282611b67565b90506000836003811115610e4857610e48612db1565b03610e7a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350610f3c565b6001836003811115610e8e57610e8e612db1565b03610eba5780604051602001610ea49190612eb0565b6040516020818303038152906040529350610f3c565b6002836003811115610ece57610ece612db1565b03610ee45780604051602001610ea49190612ee9565b6003836003811115610ef857610ef8612db1565b03610f3c576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b8152600401610f5f919061277f565b60405180910390fd5b336000908152600a602052604090205460ff16610f97576040516282b42960e81b815260040160405180910390fd5b600580549115156101000261ff0019909216919091179055565b6001600160a01b0386161580610fce57506001600160a01b038516155b15610fec5760405163f0dd15fd60e01b815260040160405180910390fd5b82811461100c5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561105c5761105485858381811061102c5761102c612e19565b90506020020135888886868681811061104757611047612e19565b9050602002013533611065565b60010161100f565b50505050505050565b6001600160a01b038416158061108257506001600160a01b038316155b156110a05760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611164576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff16611164576000858152600e602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611162576000868152600e602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061115c908490612df0565b90915550505b505b6000858152600b602090815260408083206001600160a01b038816845290915281208054849290611196908490612df0565b90915550506000858152600b602090815260408083206001600160a01b0387168452909152812080548492906111cd908490612ddd565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b600080546001146112665760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610f5f565b60026000556001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166112a26020840184612a93565b6001600160a01b0316146112c957604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff161580156113125750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b801561132957506008546001600160a01b03163314155b15611346576040516282b42960e81b815260040160405180910390fd5b6009805460009091556113598184611c74565b91507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47836040516113b691815260200190565b60405180910390a2506001600055919050565b606060f882901c6001600160f81b03831660006113e582611b67565b905060008360038111156113fb576113fb612db1565b0361142d576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350610f3c565b600183600381111561144157611441612db1565b036114575780604051602001610ea49190612f23565b600283600381111561146b5761146b612db1565b036114815780604051602001610ea49190612f5b565b600383600381111561149557611495612db1565b03610f3c576040516c485950455244524956452d575360981b6020820152602d01610f2a565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015611654573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116789190612f87565b905090565b6116da60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600254600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600354821660e082015260045490916101008301916117a99116611d8d565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926117db92900416611d8d565b905292915050565b600080611803836101400151846101200151611a5190919063ffffffff16565b61010084015160e085015161181791611a51565b6118219190612fa0565b9050600061183784600001518560200151611e03565b905060008213156118d75760006118798286604001518760a001518860c00151670de0b6b3a764000061186a9190612df0565b89606001518a60800151611e20565b90506118858184611ec0565b905080156118d1576118be828660400151838860c00151670de0b6b3a76400006118af9190612df0565b89606001518a60800151611ed5565b855186906118cd908390612df0565b9052505b50611993565b6000821215611993576118e982612fc0565b9150600061191d8286604001518760c00151670de0b6b3a764000061190e9190612df0565b88606001518960800151611f14565b90506119298184611ec0565b9050801561197557611962828660400151838860c00151670de0b6b3a76400006119539190612df0565b89606001518a60800151611faa565b85518690611971908390612ddd565b9052505b61197f8184612df0565b8551869061198e908390612ddd565b905250505b60006119c2856101000151670de0b6b3a76400006119b19190612df0565b606087015160e0880151919061203f565b6119f0866101400151670de0b6b3a76400006119de9190612df0565b6060880151610120890151919061203f565b6119fa9190612fa0565b90506000818660000151611a0e9190612fdc565b90508560a00151811215611a355760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151611a479082612df0565b9695505050505050565b60006105718383670de0b6b3a764000061203f565b600061057183670de0b6b3a76400008461203f565b6008546001600160a01b03163314611aa5576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6008546001600160a01b03163314611b1d576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b60408051604d808252608082019092526060919060009082602082018180368337019050509050611b99600a85613012565b611ba4906030612ddd565b60f81b81611bb3600185612df0565b81518110611bc357611bc3612e19565b60200101906001600160f81b031916908160001a905350611be5600a85613026565b935060015b8415611c6657611bfb600a86613012565b611c06906030612ddd565b60f81b826001611c168487612df0565b611c209190612df0565b81518110611c3057611c30612e19565b60200101906001600160f81b031916908160001a905350611c52600a86613026565b945080611c5e8161303a565b915050611bea565b918290030190815292915050565b6000611c8660408301602084016127a2565b15611d45576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba08765284611cc86020860186612a93565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af1158015611d1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d3e9190612f87565b90506105ab565b611d86611d556020840184612a93565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016908561205d565b5090919050565b600080670de0b6b3a7640000611da16120d5565b611dab9190613053565b9050808311611dbb576000611dc5565b611dc58184612df0565b9150610571611dfc670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613053565b8390611a66565b600080611e108385612fa0565b9050600081121561057157600080fd5b600080611e30888887878761210b565b90506000611e53611e4b87611e45878b61213a565b9061214f565b8690866121a6565b611e5d9083612df0565b9050670de0b6b3a76400008110611e9157611e8a611e83670de0b6b3a764000088611a66565b829061214f565b9050611ea9565b611ea6611e83670de0b6b3a7640000886121cc565b90505b611eb38882612df0565b9998505050505050505050565b6000818311611ecf5782610571565b50919050565b600080611ee68888888888886121e1565b909250905080611f0957604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b600080611f2487878787876122a3565b90506000611f4f670de0b6b3a7640000611f3e8787611a66565b611f489190612ddd565b83906121cc565b9050670de0b6b3a76400008110611f7c57611f75611e83670de0b6b3a7640000886121cc565b9050611f94565b611f91611e83670de0b6b3a764000088611a66565b90505b611f9e8188612df0565b98975050505050505050565b600080611fba88888787876122a3565b9050611fca85611e45888a612df0565b96506000611fe48486611fdd8b86612df0565b91906121a6565b9050670de0b6b3a764000081106120115761200a611e83670de0b6b3a7640000886121cc565b9050612029565b612026611e83670de0b6b3a764000088611a66565b90505b61203381856121cc565b9050611eb38982612df0565b600082600019048411830215820261205657600080fd5b5091020490565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806104da5760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610f5f565b60006121017f000000000000000000000000000000000000000000000000000000000000000042613012565b6116789042612df0565b6000612117858561214f565b61213061212886611e45868b611a51565b85908561203f565b611a479190612ddd565b60006105718383670de0b6b3a76400006121a6565b6000816000036121685750670de0b6b3a76400006105ab565b82600003612178575060006105ab565b816000612184856122c8565b905081810261219b670de0b6b3a76400008261306a565b9050611a47816124db565b60008260001904841183021582026121bd57600080fd5b50910281810615159190040190565b600061057183670de0b6b3a7640000846121a6565b60008060006121f389898888886122a3565b905061220386611e45898b612ddd565b97508781101561221a576000809250925050612298565b600061222b8587611fdd8c86612df0565b9050670de0b6b3a7640000811061225857612251611e83670de0b6b3a7640000896121cc565b9050612270565b61226d611e83670de0b6b3a764000089611a66565b90505b61227a81866121cc565b9050808a11156122915761228e818b612df0565b93505b6001925050505b965096945050505050565b60006122af858561214f565b6121306122c086611e45868b61213a565b8590856121a6565b60008082136122ea57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e1982136124f657506000919050565b680755bf798b4a1bf1e5821261251f5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b604051806101a0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200161271160405180606001604052806000815260200160008152602001600081525090565b905290565b60006020828403121561272857600080fd5b5035919050565b60005b8381101561274a578181015183820152602001612732565b50506000910152565b6000815180845261276b81602086016020860161272f565b601f01601f19169290920160200192915050565b6020815260006105716020830184612753565b8035801515811461046357600080fd5b6000602082840312156127b457600080fd5b61057182612792565b80356001600160a01b038116811461046357600080fd5b60008083601f8401126127e657600080fd5b50813567ffffffffffffffff8111156127fe57600080fd5b6020830191508360208260051b850101111561281957600080fd5b9250929050565b6000806000806000806080878903121561283957600080fd5b612842876127bd565b9550612850602088016127bd565b9450604087013567ffffffffffffffff8082111561286d57600080fd5b6128798a838b016127d4565b9096509450606089013591508082111561289257600080fd5b5061289f89828a016127d4565b979a9699509497509295939492505050565b600080600080608085870312156128c757600080fd5b843593506128d7602086016127bd565b92506128e5604086016127bd565b9396929550929360600135925050565b60008060006060848603121561290a57600080fd5b8335925061291a602085016127bd565b9150612928604085016127bd565b90509250925092565b6000806040838503121561294457600080fd5b82359150612954602084016127bd565b90509250929050565b60006020828403121561296f57600080fd5b813567ffffffffffffffff81111561298657600080fd5b82016060818503121561057157600080fd5b600080600080608085870312156129ae57600080fd5b843593506129be602086016127bd565b9250604085013591506129d3606086016127bd565b905092959194509250565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018091820151918101919091526101a00190565b60008060408385031215612a7c57600080fd5b612a85836127bd565b915061295460208401612792565b600060208284031215612aa557600080fd5b610571826127bd565b600080600060608486031215612ac357600080fd5b83359250612ad3602085016127bd565b9150604084013590509250925092565b81516001600160a01b031681526101e081016020830151612b0f60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151612b7f828501826001600160a01b03169052565b5050610160838101516001600160a01b0316908301526101808084015180518285015260208101516101a085015260408101516101c08501525b505092915050565b60008060208385031215612bd457600080fd5b823567ffffffffffffffff811115612beb57600080fd5b612bf7858286016127d4565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015612c3b57835183529284019291840191600101612c1f565b50909695505050505050565b81516001600160801b0316815261014081016020830151612c7360208401826001600160801b03169052565b506040830151612c886040840182600f0b9052565b506060830151612ca360608401826001600160801b03169052565b506080830151612cbe60808401826001600160801b03169052565b5060a0830151612cd960a08401826001600160801b03169052565b5060c0830151612cf460c08401826001600160801b03169052565b5060e0830151612d0f60e08401826001600160801b03169052565b50610100838101511515908301526101208084015180151582850152612bb9565b600080600080600060a08688031215612d4857600080fd5b85359450612d58602087016127bd565b9350612d66604087016127bd565b925060608601359150612d7b608087016127bd565b90509295509295909350565b60008060408385031215612d9a57600080fd5b612da3836127bd565b9150612954602084016127bd565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156105ab576105ab612dc7565b818103818111156105ab576105ab612dc7565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b81546001600160801b038082168352608091821c60208401526001840154600f81900b6040850152821c6060840152600284015480821683850152821c60a0840152600384015490811660c0840152901c60e0820152600482015460ff8082161515610100840152600882901c161515610120830152610140820190610c2e565b700243cb832b9323934bb32902637b7339d1607d1b815260008251612edc81601185016020870161272f565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251612f1681601285016020870161272f565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251612f4e81601085016020870161272f565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251612edc81601185016020870161272f565b600060208284031215612f9957600080fd5b5051919050565b8181036000831280158383131683831282161715610c2e57610c2e612dc7565b6000600160ff1b8201612fd557612fd5612dc7565b5060000390565b8082018281126000831280158216821582161715612bb957612bb9612dc7565b634e487b7160e01b600052601260045260246000fd5b60008261302157613021612ffc565b500690565b60008261303557613035612ffc565b500490565b60006001820161304c5761304c612dc7565b5060010190565b80820281158282048414176105ab576105ab612dc7565b60008261307957613079612ffc565b600160ff1b82146000198414161561309357613093612dc7565b50059056fea2646970667358221220a2684297d9cff897822b181728771ff1972e5a6a1d97f1121a683e3d31344ba864736f6c63430008130033",
    "sourceMap": "742:776:8:-:0;;;454:1:87;429:26;;961:139:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5110:17:40;;-1:-1:-1;;;;;5097:30:40;;;;;5656:28;;;1090:6:8;;1069:7;;;;5687:3:40;-1:-1:-1;5652:113:40;;;5713:41;;-1:-1:-1;;;5713:41:40;;;;;;;;;;;5652:113;5798:28;;;;5774:52;;5865:32;;;;5837:60;;5929:26;;;;5907:48;;6120:26;;;;6150:1;6120:31;6116:108;;6174:39;;-1:-1:-1;;;6174:39:40;;;;;;;;;;;6116:108;6255:26;;;;;6233:48;;6335:26;6308:24;;;;:53;;:127;;;6404:7;:26;;;6377:7;:24;;;:53;;;;:::i;:::-;:58;;6308:127;6291:224;;;6467:37;;-1:-1:-1;;;6467:37:40;;;;;;;;;;;6291:224;6544:24;;;;;6524:44;;6593:19;;;;6578:34;;6643:25;;;;6622:46;;;;6692:18;;;;6678:11;:32;;-1:-1:-1;;;;;;6678:32:40;-1:-1:-1;;;;;6678:32:40;;;;;;6736:20;;;;6720:36;;;6826:12;;;;:18;6847:4;-1:-1:-1;;6826:65:40;;;6887:4;6867:7;:12;;;:17;;;:24;6826:65;:111;;;;6933:4;6907:7;:12;;;:23;;;:30;6826:111;6809:202;;;6969:31;;-1:-1:-1;;;6969:31:40;;;;;;;;;;;6809:202;7032:12;;;;;:18;7020:30;;7071:12;;:17;;;;;7060:28;;7115:12;;:23;;;;;7098:40;;7215:21;;;;-1:-1:-1;;;;;7198:38:40;;;;;-1:-1:-1;;7264:22:40;7246:40;;1489:14:5;;;;;;-1:-1:-1;742:776:8;;-1:-1:-1;;742:776:8;14:347:149;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:149;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:149;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:622::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:149;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;;556:622;;;;:::o;1183:1456::-;1307:6;1315;1359:9;1350:7;1346:23;1389:3;1385:2;1381:12;1378:32;;;1406:1;1403;1396:12;1378:32;1429:6;1455:2;1451;1447:11;1444:31;;;1471:1;1468;1461:12;1444:31;1497:17;;:::i;:::-;1484:30;;1537:48;1575:9;1537:48;:::i;:::-;1530:5;1523:63;1618:57;1671:2;1660:9;1656:18;1618:57;:::i;:::-;1613:2;1606:5;1602:14;1595:81;1729:2;1718:9;1714:18;1708:25;1703:2;1696:5;1692:14;1685:49;1787:2;1776:9;1772:18;1766:25;1761:2;1754:5;1750:14;1743:49;1846:3;1835:9;1831:19;1825:26;1819:3;1812:5;1808:15;1801:51;1906:3;1895:9;1891:19;1885:26;1879:3;1872:5;1868:15;1861:51;1966:3;1955:9;1951:19;1945:26;1939:3;1932:5;1928:15;1921:51;2026:3;2015:9;2011:19;2005:26;1999:3;1992:5;1988:15;1981:51;2051:3;2107:2;2096:9;2092:18;2086:25;2081:2;2074:5;2070:14;2063:49;;2131:3;2187:2;2176:9;2172:18;2166:25;2161:2;2154:5;2150:14;2143:49;;2211:3;2246:57;2299:2;2288:9;2284:18;2246:57;:::i;:::-;2230:14;;;2223:81;2323:3;2358:57;2396:18;;;2358:57;:::i;:::-;2342:14;;;2335:81;2435:3;2470:62;2524:7;2504:18;;;2470:62;:::i;:::-;2465:2;2458:5;2454:14;2447:86;;2552:5;2542:15;;2576:57;2629:2;2618:9;2614:18;2576:57;:::i;:::-;2566:67;;;;1183:1456;;;;;:::o;2644:209::-;2676:1;2702;2692:132;;2746:10;2741:3;2737:20;2734:1;2727:31;2781:4;2778:1;2771:15;2809:4;2806:1;2799:15;2692:132;-1:-1:-1;2838:9:149;;2644:209::o;:::-;742:776:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b50600436106101a85760003560e01c80637ecebe00116100f9578063c55dae6311610097578063d816574311610071578063d8165743146103c7578063e44808bc146103dc578063e985e9c5146103ef578063fba560081461040257600080fd5b8063c55dae6314610394578063c69e16ad1461039c578063cc962f8e146103a457600080fd5b8063ab033ea9116100d3578063ab033ea914610339578063b0d965801461034c578063bd85b03914610361578063becee9c31461037457600080fd5b80637ecebe00146103005780639cd241af14610313578063a22cb4651461032657600080fd5b806321ff32a9116101665780634e41a1fb116101405780634e41a1fb146102b25780634ed2d6ac146102c557806360246c88146102d85780637180c8ca146102ed57600080fd5b806321ff32a91461026b5780633656eec21461028c5780633e691db91461029f57600080fd5b8062ad800c146101ad57806302329a29146101d657806316f0115b146101eb57806317fad7fc1461020b5780631c0f12b61461021e57806320fc488114610231575b600080fd5b6101c06101bb366004612716565b610431565b6040516101cd919061277f565b60405180910390f35b6101e96101e43660046127a2565b610468565b005b6101f3610474565b6040516001600160a01b0390911681526020016101cd565b6101e9610219366004612820565b6104b7565b6101e961022c3660046128b1565b6104cd565b61024461023f366004612716565b6104e0565b6040805182516001600160801b03168152602092830151600f0b92810192909252016101cd565b61027e6102793660046128f5565b610532565b6040519081526020016101cd565b61027e61029a366004612931565b610578565b61027e6102ad36600461295d565b6105b1565b6101c06102c0366004612716565b6105bc565b6101e96102d3366004612998565b6105ca565b6102e0610618565b6040516101cd91906129de565b6101e96102fb366004612a69565b610812565b61027e61030e366004612a93565b610820565b6101e9610321366004612aae565b61084c565b6101e9610334366004612a69565b61085d565b6101e9610347366004612a93565b6108c9565b6103546108d2565b6040516101cd9190612ae3565b61027e61036f366004612716565b610b58565b610387610382366004612bc1565b610b7a565b6040516101cd9190612c03565b6101f3610c35565b61027e610c75565b6103b76103b2366004612a93565b610c8f565b60405190151581526020016101cd565b6103cf610cc5565b6040516101cd9190612c47565b6101e96103ea366004612d30565b610d2b565b6103b76103fd366004612d87565b610d73565b61040a610db7565b6040805182516001600160801b0390811682526020938401511692810192909252016101cd565b606061046361043f83610e16565b60405160200161044f919061277f565b604051602081830303815290604052610f44565b919050565b61047181610f68565b50565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916104b4910161044f565b90565b6104c5868686868686610fb1565b505050505050565b6104da8484848433611065565b50505050565b60408051808201909152600080825260208201526104636007600084815260200190815260200160002060405160200161044f91546001600160801b038116825260801d600f0b602082015260400190565b6000838152600e602090815260408083206001600160a01b0386811685529083528184209085168452825280832054815192830152610571910161044f565b9392505050565b6000828152600b602090815260408083206001600160a01b03851684528252808320548151928301526105ab910161044f565b92915050565b60006105ab82611226565b606061046361043f836113c9565b836105d4816114bb565b6001600160a01b0316336001600160a01b03161461060557604051632aab8bd360e01b815260040160405180910390fd5b61061185858585611578565b5050505050565b610683604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600061068d6115e5565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b03909216916106f89190612ddd565b6107029190612df0565b9050600080831161071457600061072f565b61072f836107296107248661167d565b6117e3565b90611a51565b604080516101a0810182526001546001600160801b038082168352600254600f0b6020840152600160801b91829004811693830193909352606082018690526080820187905260035480841660a084015260045480851660c085015290829004841660e0840152819004831661010083015260065480841661012084015204909116610140820152909150600090610160810184156107d7576107d28486611a66565b6107da565b60005b8152600254600160801b90046001600160801b031660209182015260405191925061080b9161044f918491016129de565b5050505090565b61081c8282611a7b565b5050565b6001600160a01b0381166000908152600f6020908152604080832054815192830152610463910161044f565b61085883838333611578565b505050565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61047181611af3565b6108da612666565b6104b4604051806101a001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180606001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081525081525060405160200161044f9190612ae3565b6000818152600c6020908152604080832054815192830152610463910161044f565b606060008267ffffffffffffffff811115610b9757610b97612e03565b604051908082528060200260200182016040528015610bc0578160200160208202803683370190505b50905060005b83811015610c19576000858583818110610be257610be2612e19565b90506020020135905060008154905080848481518110610c0457610c04612e19565b60209081029190910101525050600101610bc6565b50610c2e8160405160200161044f9190612c03565b5092915050565b604080516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660208201526000916104b4910161044f565b60006104b460095460405160200161044f91815260200190565b6001600160a01b03811660009081526010602090815260408083205490516104639261044f9260ff169101901515815260200190565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526104b4600160405160200161044f9190612e2f565b84610d35816114bb565b6001600160a01b0316336001600160a01b031614610d6657604051632aab8bd360e01b815260040160405180910390fd5b6104c58686868686611065565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff90911615159181019190915290916105ab910161044f565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b90920481166020938401908152845193840192909252905116918101919091526104b49060600161044f565b606060f882901c6001600160f81b0383166000610e3282611b67565b90506000836003811115610e4857610e48612db1565b03610e7a576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350610f3c565b6001836003811115610e8e57610e8e612db1565b03610eba5780604051602001610ea49190612eb0565b6040516020818303038152906040529350610f3c565b6002836003811115610ece57610ece612db1565b03610ee45780604051602001610ea49190612ee9565b6003836003811115610ef857610ef8612db1565b03610f3c576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b8152600401610f5f919061277f565b60405180910390fd5b336000908152600a602052604090205460ff16610f97576040516282b42960e81b815260040160405180910390fd5b600580549115156101000261ff0019909216919091179055565b6001600160a01b0386161580610fce57506001600160a01b038516155b15610fec5760405163f0dd15fd60e01b815260040160405180910390fd5b82811461100c5760405163174861a760e31b815260040160405180910390fd5b60005b8381101561105c5761105485858381811061102c5761102c612e19565b90506020020135888886868681811061104757611047612e19565b9050602002013533611065565b60010161100f565b50505050505050565b6001600160a01b038416158061108257506001600160a01b038316155b156110a05760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614611164576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff16611164576000858152600e602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114611162576000868152600e602090815260408083206001600160a01b03808a16855290835281842090861684529091528120805485929061115c908490612df0565b90915550505b505b6000858152600b602090815260408083206001600160a01b038816845290915281208054849290611196908490612df0565b90915550506000858152600b602090815260408083206001600160a01b0387168452909152812080548492906111cd908490612ddd565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b600080546001146112665760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401610f5f565b60026000556001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166112a26020840184612a93565b6001600160a01b0316146112c957604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff161580156113125750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b801561132957506008546001600160a01b03163314155b15611346576040516282b42960e81b815260040160405180910390fd5b6009805460009091556113598184611c74565b91507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47836040516113b691815260200190565b60405180910390a2506001600055919050565b606060f882901c6001600160f81b03831660006113e582611b67565b905060008360038111156113fb576113fb612db1565b0361142d576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350610f3c565b600183600381111561144157611441612db1565b036114575780604051602001610ea49190612f23565b600283600381111561146b5761146b612db1565b036114815780604051602001610ea49190612f5b565b600383600381111561149557611495612db1565b03610f3c576040516c485950455244524956452d575360981b6020820152602d01610f2a565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015611654573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116789190612f87565b905090565b6116da60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600254600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600354821660e082015260045490916101008301916117a99116611d8d565b81526003546001600160801b03600160801b91829004811660208401526004546040909301926117db92900416611d8d565b905292915050565b600080611803836101400151846101200151611a5190919063ffffffff16565b61010084015160e085015161181791611a51565b6118219190612fa0565b9050600061183784600001518560200151611e03565b905060008213156118d75760006118798286604001518760a001518860c00151670de0b6b3a764000061186a9190612df0565b89606001518a60800151611e20565b90506118858184611ec0565b905080156118d1576118be828660400151838860c00151670de0b6b3a76400006118af9190612df0565b89606001518a60800151611ed5565b855186906118cd908390612df0565b9052505b50611993565b6000821215611993576118e982612fc0565b9150600061191d8286604001518760c00151670de0b6b3a764000061190e9190612df0565b88606001518960800151611f14565b90506119298184611ec0565b9050801561197557611962828660400151838860c00151670de0b6b3a76400006119539190612df0565b89606001518a60800151611faa565b85518690611971908390612ddd565b9052505b61197f8184612df0565b8551869061198e908390612ddd565b905250505b60006119c2856101000151670de0b6b3a76400006119b19190612df0565b606087015160e0880151919061203f565b6119f0866101400151670de0b6b3a76400006119de9190612df0565b6060880151610120890151919061203f565b6119fa9190612fa0565b90506000818660000151611a0e9190612fdc565b90508560a00151811215611a355760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151611a479082612df0565b9695505050505050565b60006105718383670de0b6b3a764000061203f565b600061057183670de0b6b3a76400008461203f565b6008546001600160a01b03163314611aa5576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6008546001600160a01b03163314611b1d576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b60408051604d808252608082019092526060919060009082602082018180368337019050509050611b99600a85613012565b611ba4906030612ddd565b60f81b81611bb3600185612df0565b81518110611bc357611bc3612e19565b60200101906001600160f81b031916908160001a905350611be5600a85613026565b935060015b8415611c6657611bfb600a86613012565b611c06906030612ddd565b60f81b826001611c168487612df0565b611c209190612df0565b81518110611c3057611c30612e19565b60200101906001600160f81b031916908160001a905350611c52600a86613026565b945080611c5e8161303a565b915050611bea565b918290030190815292915050565b6000611c8660408301602084016127a2565b15611d45576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba08765284611cc86020860186612a93565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af1158015611d1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d3e9190612f87565b90506105ab565b611d86611d556020840184612a93565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016908561205d565b5090919050565b600080670de0b6b3a7640000611da16120d5565b611dab9190613053565b9050808311611dbb576000611dc5565b611dc58184612df0565b9150610571611dfc670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000613053565b8390611a66565b600080611e108385612fa0565b9050600081121561057157600080fd5b600080611e30888887878761210b565b90506000611e53611e4b87611e45878b61213a565b9061214f565b8690866121a6565b611e5d9083612df0565b9050670de0b6b3a76400008110611e9157611e8a611e83670de0b6b3a764000088611a66565b829061214f565b9050611ea9565b611ea6611e83670de0b6b3a7640000886121cc565b90505b611eb38882612df0565b9998505050505050505050565b6000818311611ecf5782610571565b50919050565b600080611ee68888888888886121e1565b909250905080611f0957604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b600080611f2487878787876122a3565b90506000611f4f670de0b6b3a7640000611f3e8787611a66565b611f489190612ddd565b83906121cc565b9050670de0b6b3a76400008110611f7c57611f75611e83670de0b6b3a7640000886121cc565b9050611f94565b611f91611e83670de0b6b3a764000088611a66565b90505b611f9e8188612df0565b98975050505050505050565b600080611fba88888787876122a3565b9050611fca85611e45888a612df0565b96506000611fe48486611fdd8b86612df0565b91906121a6565b9050670de0b6b3a764000081106120115761200a611e83670de0b6b3a7640000886121cc565b9050612029565b612026611e83670de0b6b3a764000088611a66565b90505b61203381856121cc565b9050611eb38982612df0565b600082600019048411830215820261205657600080fd5b5091020490565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806104da5760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610f5f565b60006121017f000000000000000000000000000000000000000000000000000000000000000042613012565b6116789042612df0565b6000612117858561214f565b61213061212886611e45868b611a51565b85908561203f565b611a479190612ddd565b60006105718383670de0b6b3a76400006121a6565b6000816000036121685750670de0b6b3a76400006105ab565b82600003612178575060006105ab565b816000612184856122c8565b905081810261219b670de0b6b3a76400008261306a565b9050611a47816124db565b60008260001904841183021582026121bd57600080fd5b50910281810615159190040190565b600061057183670de0b6b3a7640000846121a6565b60008060006121f389898888886122a3565b905061220386611e45898b612ddd565b97508781101561221a576000809250925050612298565b600061222b8587611fdd8c86612df0565b9050670de0b6b3a7640000811061225857612251611e83670de0b6b3a7640000896121cc565b9050612270565b61226d611e83670de0b6b3a764000089611a66565b90505b61227a81866121cc565b9050808a11156122915761228e818b612df0565b93505b6001925050505b965096945050505050565b60006122af858561214f565b6121306122c086611e45868b61213a565b8590856121a6565b60008082136122ea57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e1982136124f657506000919050565b680755bf798b4a1bf1e5821261251f5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b604051806101a0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200161271160405180606001604052806000815260200160008152602001600081525090565b905290565b60006020828403121561272857600080fd5b5035919050565b60005b8381101561274a578181015183820152602001612732565b50506000910152565b6000815180845261276b81602086016020860161272f565b601f01601f19169290920160200192915050565b6020815260006105716020830184612753565b8035801515811461046357600080fd5b6000602082840312156127b457600080fd5b61057182612792565b80356001600160a01b038116811461046357600080fd5b60008083601f8401126127e657600080fd5b50813567ffffffffffffffff8111156127fe57600080fd5b6020830191508360208260051b850101111561281957600080fd5b9250929050565b6000806000806000806080878903121561283957600080fd5b612842876127bd565b9550612850602088016127bd565b9450604087013567ffffffffffffffff8082111561286d57600080fd5b6128798a838b016127d4565b9096509450606089013591508082111561289257600080fd5b5061289f89828a016127d4565b979a9699509497509295939492505050565b600080600080608085870312156128c757600080fd5b843593506128d7602086016127bd565b92506128e5604086016127bd565b9396929550929360600135925050565b60008060006060848603121561290a57600080fd5b8335925061291a602085016127bd565b9150612928604085016127bd565b90509250925092565b6000806040838503121561294457600080fd5b82359150612954602084016127bd565b90509250929050565b60006020828403121561296f57600080fd5b813567ffffffffffffffff81111561298657600080fd5b82016060818503121561057157600080fd5b600080600080608085870312156129ae57600080fd5b843593506129be602086016127bd565b9250604085013591506129d3606086016127bd565b905092959194509250565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018091820151918101919091526101a00190565b60008060408385031215612a7c57600080fd5b612a85836127bd565b915061295460208401612792565b600060208284031215612aa557600080fd5b610571826127bd565b600080600060608486031215612ac357600080fd5b83359250612ad3602085016127bd565b9150604084013590509250925092565b81516001600160a01b031681526101e081016020830151612b0f60208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151612b7f828501826001600160a01b03169052565b5050610160838101516001600160a01b0316908301526101808084015180518285015260208101516101a085015260408101516101c08501525b505092915050565b60008060208385031215612bd457600080fd5b823567ffffffffffffffff811115612beb57600080fd5b612bf7858286016127d4565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015612c3b57835183529284019291840191600101612c1f565b50909695505050505050565b81516001600160801b0316815261014081016020830151612c7360208401826001600160801b03169052565b506040830151612c886040840182600f0b9052565b506060830151612ca360608401826001600160801b03169052565b506080830151612cbe60808401826001600160801b03169052565b5060a0830151612cd960a08401826001600160801b03169052565b5060c0830151612cf460c08401826001600160801b03169052565b5060e0830151612d0f60e08401826001600160801b03169052565b50610100838101511515908301526101208084015180151582850152612bb9565b600080600080600060a08688031215612d4857600080fd5b85359450612d58602087016127bd565b9350612d66604087016127bd565b925060608601359150612d7b608087016127bd565b90509295509295909350565b60008060408385031215612d9a57600080fd5b612da3836127bd565b9150612954602084016127bd565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156105ab576105ab612dc7565b818103818111156105ab576105ab612dc7565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b81546001600160801b038082168352608091821c60208401526001840154600f81900b6040850152821c6060840152600284015480821683850152821c60a0840152600384015490811660c0840152901c60e0820152600482015460ff8082161515610100840152600882901c161515610120830152610140820190610c2e565b700243cb832b9323934bb32902637b7339d1607d1b815260008251612edc81601185016020870161272f565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b815260008251612f1681601285016020870161272f565b9190910160120192915050565b6f242ca822a9222924ab2296a627a7239d60811b815260008251612f4e81601085016020870161272f565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b815260008251612edc81601185016020870161272f565b600060208284031215612f9957600080fd5b5051919050565b8181036000831280158383131683831282161715610c2e57610c2e612dc7565b6000600160ff1b8201612fd557612fd5612dc7565b5060000390565b8082018281126000831280158216821582161715612bb957612bb9612dc7565b634e487b7160e01b600052601260045260246000fd5b60008261302157613021612ffc565b500690565b60008261303557613035612ffc565b500490565b60006001820161304c5761304c612dc7565b5060010190565b80820281158282048414176105ab576105ab612dc7565b60008261307957613079612ffc565b600160ff1b82146000198414161561309357613093612dc7565b50059056fea2646970667358221220a2684297d9cff897822b181728771ff1972e5a6a1d97f1121a683e3d31344ba864736f6c63430008130033",
    "sourceMap": "742:776:8:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13020:137:1;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2180:70;;;;;;:::i;:::-;;:::i;:::-;;1194:92:8;;;:::i;:::-;;;-1:-1:-1;;;;;1605:32:149;;;1587:51;;1575:2;1560:18;1194:92:8;1424:220:149;6108:209:1;;;;;;:::i;:::-;;:::i;3041:240::-;;;;;;:::i;:::-;;:::i;6645:179::-;;;;;;:::i;:::-;;:::i;:::-;;;;3974:13:149;;-1:-1:-1;;;;;3970:54:149;3952:73;;4096:4;4084:17;;;4078:24;4074:2;4063:40;4041:20;;;4034:70;;;;3925:18;6645:179:1;3750:360:149;12678:223:1;;;;;;:::i;:::-;;:::i;:::-;;;4594:25:149;;;4582:2;4567:18;12678:223:1;4448:177:149;11638:173:1;;;;;;:::i;:::-;;:::i;1854:174::-;;;;;;:::i;:::-;;:::i;13280:141::-;;;;;;:::i;:::-;;:::i;4478:225::-;;;;;;:::i;:::-;;:::i;8188:1460::-;;;:::i;:::-;;;;;;;:::i;2613:94::-;;;;;;:::i;:::-;;:::i;13570:119::-;;;;;;:::i;:::-;;:::i;5642:179::-;;;;;;:::i;:::-;;:::i;4935:277::-;;;;;;:::i;:::-;;:::i;2360:83::-;;;;;;:::i;:::-;;:::i;7029:984::-;;;:::i;:::-;;;;;;;:::i;11946:129::-;;;;;;:::i;:::-;;:::i;10903:565::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;6413:101::-;;;:::i;10292:132::-;;;:::i;1390:126:8:-;;;;;;:::i;:::-;;:::i;:::-;;;10703:14:149;;10696:22;10678:41;;10666:2;10651:18;1390:126:8;10538:187:149;10503:159:1;;;:::i;:::-;;;;;;;:::i;3686:285::-;;;;;;:::i;:::-;;:::i;12264:186::-;;;;;;:::i;:::-;;:::i;9772:367::-;;;:::i;:::-;;;;13124:13:149;;-1:-1:-1;;;;;13120:22:149;;;13102:41;;13203:4;13191:17;;;13185:24;13181:33;13159:20;;;13152:63;;;;13022:18;9772:367:1;12843:378:149;13020:137:1;13074:13;13099:51;13118:30;13140:7;13118:21;:30::i;:::-;13107:42;;;;;;;;:::i;:::-;;;;;;;;;;;;;13099:7;:51::i;:::-;13020:137;;;:::o;2180:70::-;2228:15;2235:7;2228:6;:15::i;:::-;2180:70;:::o;1194:92:8:-;1261:17;;;-1:-1:-1;;;;;1272:5:8;1605:32:149;1261:17:8;;;1587:51:149;1233:8:8;;1253:26;;1560:18:149;1261:17:8;1424:220:149;1253:26:8;1194:92;:::o;6108:209:1:-;6269:41;6288:4;6294:2;6298:3;;6303:6;;6269:18;:41::i;:::-;6108:209;;;;;;:::o;3041:240::-;3222:52;3236:7;3245:4;3251:2;3255:6;3263:10;3222:13;:52::i;:::-;3041:240;;;;:::o;6645:179::-;-1:-1:-1;;;;;;;;;;;;;;;;;6769:48:1;6788:12;:27;6801:13;6788:27;;;;;;;;;;;6777:39;;;;;;13442:13:149;-1:-1:-1;;;;;13482:50:149;;13464:69;;13590:3;13586:19;13582:2;13571:35;13564:4;13549:20;;13542:65;13413:2;13398:18;;13226:387;12678:223:1;12809:7;12847:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;12847:36:1;;;;;;;;;;;:45;;;;;;;;;;;12836:57;;;;;4594:25:149;12828:66:1;;4567:18:149;12836:57:1;4448:177:149;12828:66:1;12678:223;;;;;:::o;11638:173::-;11736:7;11774:19;;;:10;:19;;;;;;;;-1:-1:-1;;;;;11774:28:1;;;;;;;;;;11763:40;;;;;4594:25:149;11755:49:1;;4567:18:149;11763:40:1;4448:177:149;11755:49:1;11638:173;;;;:::o;1854:174::-;1955:16;1990:31;2012:8;1990:21;:31::i;13280:141::-;13336:13;13361:53;13380:32;13404:7;13380:23;:32::i;4478:225::-;4630:7;1698:32:37;1722:7;1698:23;:32::i;:::-;-1:-1:-1;;;;;1684:46:37;:10;-1:-1:-1;;;;;1684:46:37;;1680:116;;1753:32;;-1:-1:-1;;;1753:32:37;;;;;;;;;;;1680:116;4649:47:1::1;4662:7;4671:8;4681:6;4689;4649:12;:47::i;:::-;4478:225:::0;;;;;:::o;8188:1460::-;8234:27;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8234:27:1;8273:18;8294:16;:14;:16::i;:::-;8456:13;:29;8393:12;:48;;;;8320:21;8344:34;;;;;8273:37;;-1:-1:-1;8320:21:1;-1:-1:-1;;;;;8456:29:1;;;;8344:97;;8393:48;8344:97;:::i;:::-;:141;;;;:::i;:::-;8320:165;;8495:20;8531:1;8518:10;:14;:171;;8688:1;8518:171;;;8547:126;8662:10;8547:89;8601:34;8624:10;8601:22;:34::i;:::-;8547:53;:89::i;:::-;:114;;:126::i;:::-;8738:864;;;;;;;;8788:12;:26;-1:-1:-1;;;;;8788:26:1;;;8738:864;;8845:28;;;;8738:864;;;;-1:-1:-1;;;8901:25:1;;;;;;8738:864;;;;;;;;;;;;;;;;;;;8994:29;;;;;8738:864;;;;9062:36;;;;;8738:864;;;;9131:30;;;;;;8738:864;;;;9201:37;;;;;8788:26;8738:864;;;9447:13;:29;;;;8738:864;;;;9516:22;;;;8738:864;;;;8495:194;;-1:-1:-1;8699:36:1;;8738:864;;;9308:18;;:92;;9365:35;:12;9386:13;9365:20;:35::i;:::-;9308:92;;;9345:1;9308:92;8738:864;;9566:25;;-1:-1:-1;;;9566:25:1;;-1:-1:-1;;;;;9566:25:1;8738:864;;;;;9620:20;;8699:903;;-1:-1:-1;9612:29:1;;9620:20;;8699:903;;9620:20;;:::i;9612:29::-;8263:1385;;;;8188:1460;:::o;2613:94::-;2677:23;2688:3;2693:6;2677:10;:23::i;:::-;2613:94;;:::o;13570:119::-;-1:-1:-1;;;;;13664:16:1;;13626:7;13664:16;;;:7;:16;;;;;;;;;13653:28;;;;;4594:25:149;13645:37:1;;4567:18:149;13653:28:1;4448:177:149;5642:179:1;5763:51;5776:7;5785:8;5795:6;5803:10;5763:12;:51::i;:::-;5642:179;;;:::o;4935:277::-;5069:10;5051:29;;;;:17;:29;;;;;;;;-1:-1:-1;;;;;5051:39:1;;;;;;;;;;;;:50;;-1:-1:-1;;5051:50:1;;;;;;;;;;5159:46;;10678:41:149;;;5051:39:1;;5069:10;5159:46;;10651:18:149;5159:46:1;;;;;;;4935:277;;:::o;2360:83::-;2416:20;2431:4;2416:14;:20::i;7029:984::-;7101:29;;:::i;:::-;7146:860;7195:787;;;;;;;;7251:10;-1:-1:-1;;;;;7195:787:1;;;;;7298:14;-1:-1:-1;;;;;7195:787:1;;;;;7350:15;7195:787;;;;7406:18;7195:787;;;;7468:21;7195:787;;;;7537:25;7195:787;;;;7604:19;7195:787;;;;7663:17;7195:787;;;;7722:19;7195:787;;;;7776:12;7195:787;;;;7822:11;;;;;;;;;-1:-1:-1;;;;;7822:11:1;-1:-1:-1;;;;;7195:787:1;;;;;7869:13;-1:-1:-1;;;;;7195:787:1;;;;;7910:53;;;;;;;;7927:9;7910:53;;;;7938:8;7910:53;;;;7948:14;7910:53;;;7195:787;;;7167:829;;;;;;;;:::i;11946:129::-;12007:7;12045:21;;;:12;:21;;;;;;;;;12034:33;;;;;4594:25:149;12026:42:1;;4567:18:149;12034:33:1;4448:177:149;10903:565:1;10981:16;11009:23;11049:6;11035:28;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;11035:28:1;;11009:54;;11135:9;11130:294;11150:17;;;11130:294;;;11185:12;11200:6;;11207:1;11200:9;;;;;;;:::i;:::-;;;;;;;11185:24;;11223:12;11306:4;11300:11;11292:19;;11350:4;11338:6;11345:1;11338:9;;;;;;;;:::i;:::-;;;;;;;;;;:16;-1:-1:-1;;11396:3:1;;11130:294;;;;11434:27;11453:6;11442:18;;;;;;;;:::i;11434:27::-;10999:469;10903:565;;;;:::o;6413:101::-;6484:22;;;-1:-1:-1;;;;;6495:10:1;1605:32:149;6484:22:1;;;1587:51:149;6457:7:1;;6476:31;;1560:18:149;6484:22:1;1424:220:149;10292:132:1;10355:7;10374:43;10393:22;;10382:34;;;;;;4594:25:149;;4582:2;4567:18;;4448:177;1390:126:8;-1:-1:-1;;;;;1486:21:8;;1451:4;1486:21;;;:12;:21;;;;;;;;;1475:33;;1467:42;;1475:33;;1486:21;;;1475:33;10703:14:149;;10696:22;10678:41;;10666:2;10651:18;;10538:187;10503:159:1;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10622:33:1;10641:12;10630:24;;;;;;;;:::i;3686:285::-;3855:7;1698:32:37;1722:7;1698:23;:32::i;:::-;-1:-1:-1;;;;;1684:46:37;:10;-1:-1:-1;;;;;1684:46:37;;1680:116;;1753:32;;-1:-1:-1;;;1753:32:37;;;;;;;;;;;1680:116;3916:48:1::1;3930:7;3939:4;3945:2;3949:6;3957;3916:13;:48::i;12264:186::-:0;-1:-1:-1;;;;;12405:26:1;;;12370:4;12405:26;;;:17;:26;;;;;;;;:36;;;;;;;;;;;;12394:48;;12405:36;;;;10703:14:149;10696:22;12394:48:1;;;10678:41:149;;;;12370:4:1;;12386:57;;10651:18:149;12394:48:1;10538:187:149;9772:367:1;-1:-1:-1;;;;;;;;;;;;;;;;;9942:166:1;;;;;;;;10006:13;:29;-1:-1:-1;;;;;10006:29:1;;;9942:166;;;-1:-1:-1;;;10067:22:1;;;;;9942:166;;;;;;;9914:208;;;;;13102:41:149;;;;13185:24;;13181:33;13159:20;;;13152:63;;;;9893:239:1;;13022:18:149;;9914:208:1;12843:378:149;2533:719:41;2606:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:41;;2638:20;2736:19;2253:120;2736:8;:19::i;:::-;2709:46;-1:-1:-1;2779:16:41;2769:6;:26;;;;;;;;:::i;:::-;;2765:481;;2811:23;;;;;;;;;;;;;-1:-1:-1;;;2811:23:41;;;;;2765:481;;;2865:18;2855:6;:28;;;;;;;;:::i;:::-;;2851:395;;2952:10;2914:49;;;;;;;;:::i;:::-;;;;;;;;;;;;;2899:65;;2851:395;;;2995:19;2985:6;:29;;;;;;;;:::i;:::-;;2981:265;;3084:10;3045:50;;;;;;;;:::i;2981:265::-;3127:29;3117:6;:39;;;;;;;;:::i;:::-;;3113:133;;3187:47;;16973:29:149;3187:47:41;;;16961:42:149;17019:12;;3187:47:41;;;;;;;;;;;;;3172:63;;3113:133;2627:625;;;2533:719;;;:::o;13898:106:1:-;13990:6;13967:30;;-1:-1:-1;;;13967:30:1;;;;;;;;:::i;:::-;;;;;;;;2097:157:32;2160:10;2151:20;;;;:8;:20;;;;;;;;2146:60;;2180:26;;-1:-1:-1;;;2180:26:32;;;;;;;;;;;2146:60;2216:21;:31;;;;;;;-1:-1:-1;;2216:31:32;;;;;;;;;2097:157::o;2139:692:37:-;-1:-1:-1;;;;;2351:18:37;;;;:38;;-1:-1:-1;;;;;;2373:16:37;;;2351:38;2347:98;;;2410:35;;-1:-1:-1;;;2410:35:37;;;;;;;;;;;2347:98;2502:27;;;2498:90;;2550:38;;-1:-1:-1;;;2550:38:37;;;;;;;;;;;2498:90;2654:9;2649:176;2669:14;;;2649:176;;;2701:54;2715:3;;2719:1;2715:6;;;;;;;:::i;:::-;;;;;;;2723:4;2729:2;2733:6;;2740:1;2733:9;;;;;;;:::i;:::-;;;;;;;2744:10;2701:13;:54::i;:::-;2797:3;;2649:176;;;;2139:692;;;;;;:::o;3182:1579::-;-1:-1:-1;;;;;3395:18:37;;;;:38;;-1:-1:-1;;;;;;3417:16:37;;;3395:38;3391:98;;;3454:35;;-1:-1:-1;;;3454:35:37;;;;;;;;;;;3391:98;3594:4;-1:-1:-1;;;;;3584:14:37;:6;-1:-1:-1;;;;;3584:14:37;;3580:888;;-1:-1:-1;;;;;3735:23:37;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;3730:728;;3845:16;3864:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;3864:33:37;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;3980:29:37;;3976:468;;4374:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4374:33:37;;;;;;;;;;;:41;;;;;;;;;;:51;;4419:6;;4374:27;:51;;4419:6;;4374:51;:::i;:::-;;;;-1:-1:-1;;3976:468:37;3768:690;3730:728;4612:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4612:25:37;;;;;;;;;:35;;4641:6;;4612:19;:35;;4641:6;;4612:35;:::i;:::-;;;;-1:-1:-1;;4657:19:37;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4657:23:37;;;;;;;;;:33;;4684:6;;4657:19;:33;;4684:6;;4657:33;:::i;:::-;;;;-1:-1:-1;;4705:49:37;;;17439:25:149;;;17495:2;17480:18;;17473:34;;;-1:-1:-1;;;;;4705:49:37;;;;;;;;;;;;;;17412:18:149;4705:49:37;;;;;;;3182:1579;;;;;:::o;1058:890:32:-;1173:16;512:6:87;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:87;;17720:2:149;504:34:87;;;17702:21:149;17759:2;17739:18;;;17732:30;-1:-1:-1;;;17778:18:149;;;17771:40;17828:18;;504:34:87;17518:334:149;504:34:87;558:1;549:6;:10;-1:-1:-1;;;;;1297:13:32::1;1273:37;:20;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;1273:37:32::1;;1269:110;;1333:35;;-1:-1:-1::0;;;1333:35:32::1;;;;;;;;;;;1269:110;1481:10;1472:20;::::0;;;:8:::1;:20;::::0;;;;;::::1;;1471:21;:64:::0;::::1;;;-1:-1:-1::0;1508:10:32::1;-1:-1:-1::0;;;;;1522:13:32::1;1508:27;;;1471:64;:105;;;;-1:-1:-1::0;1565:11:32::1;::::0;-1:-1:-1;;;;;1565:11:32::1;1551:10;:25;;1471:105;1454:191;;;1608:26;;-1:-1:-1::0;;;1608:26:32::1;;;;;;;;;;;1454:191;1757:22;::::0;;1725:29:::1;1789::::0;;;1839:42:::1;1757:22:::0;1872:8;1839:9:::1;:42::i;:::-;1828:53;;1917:13;-1:-1:-1::0;;;;;1896:45:32::1;;1932:8;1896:45;;;;4594:25:149::0;;4582:2;4567:18;;4448:177;1896:45:32::1;;;;;;;;-1:-1:-1::0;591:1:87;582:6;:10;1058:890:32;;-1:-1:-1;1058:890:32:o;3384:705:41:-;3459:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:41;;3491:20;3589:19;2253:120;3589:8;:19::i;:::-;3562:46;-1:-1:-1;3632:16:41;3622:6;:26;;;;;;;;:::i;:::-;;3618:465;;3664:23;;;;;;;;;;;;;-1:-1:-1;;;3664:23:41;;;;;3618:465;;;3718:18;3708:6;:28;;;;;;;;:::i;:::-;;3704:379;;3804:10;3767:48;;;;;;;;:::i;3704:379::-;3847:19;3837:6;:29;;;;;;;;:::i;:::-;;3833:250;;3935:10;3897:49;;;;;;;;:::i;3833:250::-;3978:29;3968:6;:39;;;;;;;;:::i;:::-;;3964:119;;4038:33;;-1:-1:-1;;;4038:33:41;;;18966:28:149;19010:12;;4038:33:41;18764:264:149;6960:590:37;7156:34;;;7175:4;7156:34;;;;19207:51:149;;;;19274:18;;;19267:34;;;;7156::37;;;;;;;;;19180:18:149;;;;7156:34:37;;7146:45;;;;;;;;;-1:-1:-1;;;;;;7330:147:37;;;19523:39:149;7394:14:37;19595:15:149;;;-1:-1:-1;;19591:53:149;19578:11;;;19571:74;19661:12;;;19654:28;7448:15:37;19698:12:149;;;;19691:28;;;;7330:147:37;;;;;;;;;;19735:12:149;;;;7330:147:37;;;7307:180;;;;;;6960:590::o;5218:301::-;5364:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;5364:35:37;;;;;;;;;;;;:45;;;;;;;;;;;;;:54;;;5478:34;;4594:25:149;;;5364:35:37;;5478:34;;4567:18:149;5478:34:37;;;;;;;5218:301;;;;:::o;4944:117:5:-;5028:26;;-1:-1:-1;;;5028:26:5;;150:4:42;5028:26:5;;;4594:25:149;5002:7:5;;5028:5;-1:-1:-1;;;;;5028:21:5;;;;4567:18:149;;5028:26:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5021:33;;4944:117;:::o;7894:1001:33:-;8008:53;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8008:53:33;8092:796;;;;;;;;8155:12;:26;-1:-1:-1;;;;;8155:26:33;;;8092:796;;8212:28;;;;8092:796;;;;-1:-1:-1;;;8268:25:33;;;;;8092:796;;;;;;;;;;;;;8363:18;8092:796;;;;8417:21;8092:796;;;;8465:12;8092:796;;;;8509:29;;;;8092:796;;;;8625:36;;8092:796;;8155:26;8092:796;;;8578:97;;8625:36;8578:29;:97::i;:::-;8092:796;;8708:30;;-1:-1:-1;;;;;;;;8708:30:33;;;;;;8092:796;;;;8826:37;;8092:796;;;;;8779:98;;8826:37;;;8779:29;:98::i;:::-;8092:796;;8077:811;7894:1001;-1:-1:-1;;7894:1001:33:o;20164:5466:43:-;20267:7;20417:20;20575:106;20630:7;:33;;;20575:7;:25;;;:33;;:106;;;;:::i;:::-;20493:32;;;;20460:24;;;;:66;;:32;:66::i;:::-;20440:255;;;;:::i;:::-;20417:278;;20705:30;20738:113;20783:7;:21;;;20818:7;:23;;;20738:31;:113::i;:::-;20705:146;;20881:1;20865:13;:17;20861:3671;;;21550:21;21574:291;21623:22;21663:7;:20;;;21701:7;:28;;;21753:7;:19;;;150:4:42;21747:25:43;;;;:::i;:::-;21790:7;:18;;;21826:7;:25;;;21574:31;:291::i;:::-;21550:315;-1:-1:-1;21895:41:43;21550:315;21921:13;21895:17;:41::i;:::-;21879:57;-1:-1:-1;22005:17:43;;22001:565;;22180:371;22276:22;22324:7;:20;;;22370:13;22415:7;:19;;;150:4:42;22409:25:43;;;;:::i;:::-;22460:7;:18;;;22504:7;:25;;;22180:70;:371::i;:::-;22155:396;;:7;;:396;;;;;:::i;:::-;;;-1:-1:-1;22001:565:43;20884:1692;20861:3671;;;22602:1;22586:13;:17;22582:1950;;;23407:14;23408:13;23407:14;:::i;:::-;23391:30;;23482:21;23506:244;23554:22;23594:7;:20;;;23638:7;:19;;;150:4:42;23632:25:43;;;;:::i;:::-;23675:7;:18;;;23711:7;:25;;;23506:30;:244::i;:::-;23482:268;-1:-1:-1;23780:41:43;23482:268;23806:13;23780:17;:41::i;:::-;23764:57;-1:-1:-1;23886:17:43;;23882:563;;24061:369;24155:22;24203:7;:20;;;24249:13;24294:7;:19;;;150:4:42;24288:25:43;;;;:::i;:::-;24339:7;:18;;;24383:7;:25;;;24061:68;:369::i;:::-;24036:394;;:7;;:394;;;;;:::i;:::-;;;-1:-1:-1;23882:563:43;24483:38;24508:13;24491;24483:38;:::i;:::-;24458:63;;:7;;:63;;;;;:::i;:::-;;;-1:-1:-1;;22582:1950:43;24665:19;24899:153;24962:7;:32;;;150:4:42;24956:38:43;;;;:::i;:::-;25016:18;;;;24899:24;;;;;:153;:35;:153::i;:::-;24707:143;24767:7;:33;;;150:4:42;24761:39:43;;;;:::i;:::-;24818:18;;;;24707:25;;;;;:143;:36;:143::i;:::-;24687:379;;;;:::i;:::-;24665:401;;25076:27;25150:12;25113:7;:21;;;25106:56;;;;:::i;:::-;25076:86;;25206:7;:28;;;25176:20;:59;25172:131;;;25258:34;;-1:-1:-1;;;25258:34:43;;;;;;;;;;;25172:131;25312:53;;;25595:28;;;;25571:52;;25344:20;25571:52;:::i;:::-;25564:59;20164:5466;-1:-1:-1;;;;;;20164:5466:43:o;1771:119:42:-;1833:7;1860:22;1871:1;1874;1877:4;1860:10;:22::i;2164:165::-;2226:7;2253:22;2264:1;2267:4;2273:1;2253:10;:22::i;2723:201:32:-;2806:11;;-1:-1:-1;;;;;2806:11:32;2792:10;:25;2788:64;;2826:26;;-1:-1:-1;;;2826:26:32;;;;;;;;;;;2788:64;-1:-1:-1;;;;;2862:13:32;;;;;;:8;:13;;;;;;:22;;-1:-1:-1;;2862:22:32;;;;;;;2899:18;;;2862:13;2899:18;2723:201;;:::o;2361:195::-;2436:11;;-1:-1:-1;;;;;2436:11:32;2422:10;:25;2418:64;;2456:26;;-1:-1:-1;;;2456:26:32;;;;;;;;;;;2418:64;2492:11;:18;;-1:-1:-1;;;;;;2492:18:32;-1:-1:-1;;;;;2492:18:32;;;;;;;;2526:23;;;;-1:-1:-1;;2526:23:32;2361:195;:::o;4247:1154:41:-;4582:26;;;4545:2;4582:26;;;;;;;;;4316:20;;4545:2;4519:23;;4545:2;4582:26;;;;;;;;;;-1:-1:-1;;4557:51:41;-1:-1:-1;4841:9:41;4848:2;4841:4;:9;:::i;:::-;4840:16;;4854:2;4840:16;:::i;:::-;4806:62;;4773:9;4783:19;4801:1;4783:15;:19;:::i;:::-;4773:30;;;;;;;;:::i;:::-;;;;:95;-1:-1:-1;;;;;4773:95:41;;;;;;;;-1:-1:-1;4878:10:41;4886:2;4878:10;;:::i;:::-;;-1:-1:-1;4915:1:41;4926:201;4933:9;;4926:201;;5039:9;5046:2;5039:4;:9;:::i;:::-;5038:16;;5052:2;5038:16;:::i;:::-;5000:70;;4958:9;4995:1;4968:24;4986:6;4968:15;:24;:::i;:::-;:28;;;;:::i;:::-;4958:39;;;;;;;;:::i;:::-;;;;:112;-1:-1:-1;;;;;4958:112:41;;;;;;;;-1:-1:-1;5084:10:41;5092:2;5084:10;;:::i;:::-;;-1:-1:-1;5108:8:41;;;;:::i;:::-;;;;4926:201;;;5298:28;;;;5283:44;5340:22;;;5283:44;4247:1154;-1:-1:-1;;4247:1154:41:o;4099:660:5:-;4223:23;4262:15;;;;;;;;:::i;:::-;4258:495;;;-1:-1:-1;;;;;4430:5:5;:12;;4460:7;4485:20;;;;:8;:20;:::i;:::-;4430:120;;-1:-1:-1;;;;;;4430:120:5;;;;;;;;;;21230:25:149;;;;-1:-1:-1;;;;;21329:15:149;21309:18;;;21302:43;4531:4:5;21361:18:149;;;21354:43;21203:18;;4430:120:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4412:138;;4258:495;;;4638:65;4673:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;4652:5:5;4638:34;;4695:7;4638:34;:65::i;:::-;-1:-1:-1;4735:7:5;;4099:660;-1:-1:-1;4099:660:5:o;6550:386:33:-;6649:21;6682:24;150:4:42;6709:19:33;:17;:19::i;:::-;:25;;;;:::i;:::-;6682:52;;6776:16;6760:13;:32;:95;;6854:1;6760:95;;;6807:32;6823:16;6807:13;:32;:::i;:::-;6744:111;-1:-1:-1;6881:48:33;6905:23;150:4:42;6905:17:33;:23;:::i;:::-;6882:13;;6881:23;:48::i;28808:340:43:-;28943:7;;28994:53;29031:16;29001:14;28994:53;:::i;:::-;28962:85;;29091:1;29065:22;:27;;29057:36;;;;;12090:1116:45;12263:7;12703:9;12715:21;12721:1;12724;12727;12730;12733:2;12715:5;:21::i;:::-;12703:33;-1:-1:-1;12746:16:45;12769:37;12780:21;12799:1;12780:14;:2;12789:4;12780:8;:14::i;:::-;:18;;:21::i;:::-;12769:1;;12803:2;12769:10;:37::i;:::-;12765:41;;:1;:41;:::i;:::-;12746:60;;150:4:42;12820:8:45;:15;12816:295;;12934:28;12947:14;150:4:42;12959:1:45;12947:11;:14::i;:::-;12934:8;;:12;:28::i;:::-;12923:39;;12816:295;;;13074:26;13087:12;150:4:42;13097:1:45;13087:9;:12::i;13074:26::-;13063:37;;12816:295;13187:12;13198:1;13187:8;:12;:::i;:::-;13180:19;12090:1116;-1:-1:-1;;;;;;;;;12090:1116:45:o;14384:104:42:-;14442:7;14472:1;14468;:5;:13;;14480:1;14468:13;;;-1:-1:-1;14476:1:42;14384:104;-1:-1:-1;14384:104:42:o;7296:489:45:-;7485:14;7511:12;7553:140;7605:1;7620;7635:2;7651:1;7666;7681:2;7553:38;:140::i;:::-;7533:160;;-1:-1:-1;7533:160:45;-1:-1:-1;7533:160:45;7703:76;;7738:30;;-1:-1:-1;;;7738:30:45;;;;;;;;;;;7703:76;7501:284;7296:489;;;;;;;;:::o;10390:1124::-;10540:7;11028:9;11040:19;11044:1;11047;11050;11053;11056:2;11040:3;:19::i;:::-;11028:31;-1:-1:-1;11069:16:45;11088:28;150:4:42;11096:13:45;:1;11106:2;11096:9;:13::i;:::-;:19;;;;:::i;:::-;11088:1;;:7;:28::i;:::-;11069:47;;150:4:42;11130:8:45;:15;11126:293;;11241:26;11254:12;150:4:42;11264:1:45;11254:9;:12::i;11241:26::-;11230:37;;11126:293;;;11380:28;11393:14;150:4:42;11405:1:45;11393:11;:14::i;11380:28::-;11369:39;;11126:293;11495:12;11499:8;11495:1;:12;:::i;:::-;11488:19;10390:1124;-1:-1:-1;;;;;;;;10390:1124:45:o;3826:1099::-;4013:7;4169:9;4181:19;4185:1;4188;4191;4194;4197:2;4181:3;:19::i;:::-;4169:31;-1:-1:-1;4243:15:45;4256:1;4244:6;4248:2;4244:1;:6;:::i;4243:15::-;4239:19;-1:-1:-1;4414:10:45;4427:23;4444:2;4448:1;4428:5;4239:19;4428:1;:5;:::i;:::-;4427:16;:23;:16;:23::i;:::-;4414:36;;150:4:42;4464:2:45;:9;4460:261;;4562:20;4569:12;150:4:42;4579:1:45;4569:9;:12::i;4562:20::-;4557:25;;4460:261;;;4688:22;4695:14;150:4:42;4707:1:45;4695:11;:14::i;4688:22::-;4683:27;;4460:261;4803:12;:2;4812;4803:8;:12::i;:::-;4798:17;-1:-1:-1;4912:6:45;4917:1;4798:17;4912:6;:::i;941:556:42:-;1057:9;1322:1;-1:-1:-1;;1305:19:42;1302:1;1299:26;1296:1;1292:34;1285:42;1272:11;1268:60;1241:146;;1371:1;1368;1361:12;1241:146;-1:-1:-1;1458:9:42;;1454:27;;941:556::o;2950:1499:88:-;3062:12;3232:4;3226:11;-1:-1:-1;;;3355:17:88;3348:93;3488:2;3484:1;3465:17;3461:25;3454:37;3568:6;3563:2;3544:17;3540:26;3533:42;4370:2;4367:1;4363:2;4344:17;4341:1;4334:5;4327;4322:51;3891:16;3884:24;3878:2;3860:16;3857:24;3853:1;3849;3843:8;3840:15;3836:46;3833:76;3633:754;3622:765;;;4415:7;4407:35;;;;-1:-1:-1;;;4407:35:88;;21783:2:149;4407:35:88;;;21765:21:149;21822:2;21802:18;;;21795:30;-1:-1:-1;;;21841:18:149;;;21834:45;21896:18;;4407:35:88;21581:339:149;7049:223:33;7125:24;7227:37;7245:19;7227:15;:37;:::i;:::-;7196:69;;:15;:69;:::i;14609:278:45:-;14749:7;14872:8;:1;14878;14872:5;:8::i;:::-;14831:38;14844:20;14862:1;14844:13;:2;14855:1;14844:10;:13::i;:20::-;14831:1;;14866:2;14831:12;:38::i;:::-;:49;;;;:::i;3707:115:42:-;3767:7;3794:20;3803:1;3806;3809:4;3794:8;:20::i;4628:840::-;4686:7;4752:1;4757;4752:6;4748:47;;-1:-1:-1;150:4:42;4774:10;;4748:47;4848:1;4853;4848:6;4844:45;;-1:-1:-1;4877:1:42;4870:8;;4844:45;5052:1;5027:15;5230:14;5241:1;5230:3;:14::i;:::-;5217:27;-1:-1:-1;5322:18:42;;;5359:19;150:4;5322:18;5359:19;:::i;:::-;;;5451:9;5455:4;5451:3;:9::i;2683:748::-;2797:9;3062:1;-1:-1:-1;;3045:19:42;3042:1;3039:26;3036:1;3032:34;3025:42;3012:11;3008:60;2981:146;;3111:1;3108;3101:12;2981:146;-1:-1:-1;3378:9:42;;3325:27;;;3322:34;;3374:27;;;3301:114;;2683:748::o;4098:115::-;4158:7;4185:20;4194:1;4197:4;4203:1;4185:8;:20::i;8539:1314:45:-;8732:14;8748:12;8909:9;8921:19;8925:1;8928;8931;8934;8937:2;8921:3;:19::i;:::-;8909:31;-1:-1:-1;8983:15:45;8996:1;8984:6;8988:2;8984:1;:6;:::i;8983:15::-;8979:19;;9080:1;9076;:5;9072:53;;;9105:1;9108:5;9097:17;;;;;;;9072:53;9280:10;9293:23;9310:2;9314:1;9294:5;9298:1;9294;:5;:::i;9293:23::-;9280:36;;150:4:42;9330:2:45;:9;9326:263;;9429:20;9436:12;150:4:42;9446:1:45;9436:9;:12::i;9429:20::-;9424:25;;9326:263;;;9556:22;9563:14;150:4:42;9575:1:45;9563:11;:14::i;9556:22::-;9551:27;;9326:263;9671:12;:2;9680;9671:8;:12::i;:::-;9666:17;;9779:2;9775:1;:6;9771:52;;;9806:6;9810:2;9806:1;:6;:::i;:::-;9797:15;;9771:52;9842:4;9832:14;;8762:1091;;8539:1314;;;;;;;;;;:::o;13771:272::-;13909:7;14028:8;:1;14034;14028:5;:8::i;:::-;13991:34;14002:18;14018:1;14002:11;:2;14011:1;14002:8;:11::i;:18::-;13991:1;;14022:2;13991:10;:34::i;9583:3592:42:-;9628:8;9681:1;9676;:6;9672:60;;9691:41;;-1:-1:-1;;;9691:41:42;;;;;;;;;;;9672:60;-1:-1:-1;10698:2:42;-1:-1:-1;;;;;;;10109:1:42;10105:49;10212:9;;;10192:18;10189:33;10186:1;10182:41;10176:48;10274:9;;;10262:10;10259:25;10256:1;10252:33;10246:40;10332:9;;;10324:6;10321:21;10318:1;10314:29;10308:36;10388:9;;;10382:4;10379:19;10376:1;10372:27;;;10366:34;;;10443:9;;;10438:3;10435:18;10432:1;10428:26;10422:33;10498:9;;;10490:18;;;10487:1;10483:26;;;10477:33;;;10546:9;;;10538:18;;;10532:25;10728:3;:7;;;;;10714:22;;;;10761:17;;;11554:31;11550:35;;11605:5;;11604:13;;11621:32;11603:50;11673:5;;11672:13;;11689:33;11671:51;11742:5;;11741:13;;11758:33;11740:51;11811:5;;11810:13;;11827:33;11809:51;11880:5;;11879:13;;11896:32;11878:50;11948:5;;11947:13;;11964:30;11946:48;10951:31;10947:35;;11002:5;;11001:13;;11018:32;11000:50;11070:5;;11069:13;;11086:32;11068:50;11138:5;;11137:13;;-1:-1:-1;;11136:50:42;11206:5;;11205:13;;-1:-1:-1;;11204:50:42;11274:5;;11273:13;;;-1:-1:-1;;11272:50:42;11340:5;-1:-1:-1;;11340:46:42;12335:10;12725:43;12720:48;-1:-1:-1;;10694:6:42;;;;12848:71;:91;12827:112;13012:72;13007:77;13155:3;13149:9;;9583:3592::o;5724:3347::-;5770:8;-1:-1:-1;;5947:1:42;:26;5943:40;;-1:-1:-1;5982:1:42;;5724:3347;-1:-1:-1;5724:3347:42:o;5943:40::-;6182:21;6177:1;:26;6173:99;;6228:44;;-1:-1:-1;;;6228:44:42;;;;;;;;;;;6173:99;6545:7;6539:2;6534:7;;;6533:19;;-1:-1:-1;6881:8:42;6965:2;6905:29;6894:7;;;6893:41;-1:-1:-1;;;6893:51:42;6892:75;;6993:29;6989:33;;6985:37;;;-1:-1:-1;;7664:35:42;;7719:5;;7299:2;7718:13;;;7735:32;7717:50;7787:5;;7786:13;;-1:-1:-1;;7785:51:42;7856:5;;7855:13;;7872:34;7854:52;7926:5;;7925:13;;-1:-1:-1;;7924:53:42;7997:5;;7996:13;;8013:35;7995:53;7305:32;7238:31;7234:35;;7289:5;;7288:13;;7287:50;;;7362:5;;;-1:-1:-1;;7362:40:42;7422:5;7421:13;;;7438:35;7420:53;7491:5;;;-1:-1:-1;;;7491:50:42;8413:10;8950:49;8917:82;9032:3;:7;;;;8916:124;;;;;;-1:-1:-1;;5724:3347:42:o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:180:149:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:149;;14:180;-1:-1:-1;14:180:149:o;199:250::-;284:1;294:113;308:6;305:1;302:13;294:113;;;384:11;;;378:18;365:11;;;358:39;330:2;323:10;294:113;;;-1:-1:-1;;441:1:149;423:16;;416:27;199:250::o;454:271::-;496:3;534:5;528:12;561:6;556:3;549:19;577:76;646:6;639:4;634:3;630:14;623:4;616:5;612:16;577:76;:::i;:::-;707:2;686:15;-1:-1:-1;;682:29:149;673:39;;;;714:4;669:50;;454:271;-1:-1:-1;;454:271:149:o;730:220::-;879:2;868:9;861:21;842:4;899:45;940:2;929:9;925:18;917:6;899:45;:::i;955:160::-;1020:20;;1076:13;;1069:21;1059:32;;1049:60;;1105:1;1102;1095:12;1120:180;1176:6;1229:2;1217:9;1208:7;1204:23;1200:32;1197:52;;;1245:1;1242;1235:12;1197:52;1268:26;1284:9;1268:26;:::i;1649:173::-;1717:20;;-1:-1:-1;;;;;1766:31:149;;1756:42;;1746:70;;1812:1;1809;1802:12;1827:367;1890:8;1900:6;1954:3;1947:4;1939:6;1935:17;1931:27;1921:55;;1972:1;1969;1962:12;1921:55;-1:-1:-1;1995:20:149;;2038:18;2027:30;;2024:50;;;2070:1;2067;2060:12;2024:50;2107:4;2099:6;2095:17;2083:29;;2167:3;2160:4;2150:6;2147:1;2143:14;2135:6;2131:27;2127:38;2124:47;2121:67;;;2184:1;2181;2174:12;2121:67;1827:367;;;;;:::o;2199:922::-;2339:6;2347;2355;2363;2371;2379;2432:3;2420:9;2411:7;2407:23;2403:33;2400:53;;;2449:1;2446;2439:12;2400:53;2472:29;2491:9;2472:29;:::i;:::-;2462:39;;2520:38;2554:2;2543:9;2539:18;2520:38;:::i;:::-;2510:48;;2609:2;2598:9;2594:18;2581:32;2632:18;2673:2;2665:6;2662:14;2659:34;;;2689:1;2686;2679:12;2659:34;2728:70;2790:7;2781:6;2770:9;2766:22;2728:70;:::i;:::-;2817:8;;-1:-1:-1;2702:96:149;-1:-1:-1;2905:2:149;2890:18;;2877:32;;-1:-1:-1;2921:16:149;;;2918:36;;;2950:1;2947;2940:12;2918:36;;2989:72;3053:7;3042:8;3031:9;3027:24;2989:72;:::i;:::-;2199:922;;;;-1:-1:-1;2199:922:149;;-1:-1:-1;2199:922:149;;3080:8;;2199:922;-1:-1:-1;;;2199:922:149:o;3126:397::-;3212:6;3220;3228;3236;3289:3;3277:9;3268:7;3264:23;3260:33;3257:53;;;3306:1;3303;3296:12;3257:53;3342:9;3329:23;3319:33;;3371:38;3405:2;3394:9;3390:18;3371:38;:::i;:::-;3361:48;;3428:38;3462:2;3451:9;3447:18;3428:38;:::i;:::-;3126:397;;;;-1:-1:-1;3418:48:149;;3513:2;3498:18;3485:32;;-1:-1:-1;;3126:397:149:o;4115:328::-;4192:6;4200;4208;4261:2;4249:9;4240:7;4236:23;4232:32;4229:52;;;4277:1;4274;4267:12;4229:52;4313:9;4300:23;4290:33;;4342:38;4376:2;4365:9;4361:18;4342:38;:::i;:::-;4332:48;;4399:38;4433:2;4422:9;4418:18;4399:38;:::i;:::-;4389:48;;4115:328;;;;;:::o;4630:254::-;4698:6;4706;4759:2;4747:9;4738:7;4734:23;4730:32;4727:52;;;4775:1;4772;4765:12;4727:52;4811:9;4798:23;4788:33;;4840:38;4874:2;4863:9;4859:18;4840:38;:::i;:::-;4830:48;;4630:254;;;;;:::o;4889:386::-;4975:6;5028:2;5016:9;5007:7;5003:23;4999:32;4996:52;;;5044:1;5041;5034:12;4996:52;5084:9;5071:23;5117:18;5109:6;5106:30;5103:50;;;5149:1;5146;5139:12;5103:50;5172:22;;5228:2;5210:16;;;5206:25;5203:45;;;5244:1;5241;5234:12;5280:397;5366:6;5374;5382;5390;5443:3;5431:9;5422:7;5418:23;5414:33;5411:53;;;5460:1;5457;5450:12;5411:53;5496:9;5483:23;5473:33;;5525:38;5559:2;5548:9;5544:18;5525:38;:::i;:::-;5515:48;;5610:2;5599:9;5595:18;5582:32;5572:42;;5633:38;5667:2;5656:9;5652:18;5633:38;:::i;:::-;5623:48;;5280:397;;;;;;;:::o;5682:1098::-;5899:13;;5881:32;;5969:4;5957:17;;;5951:24;5929:20;;;5922:54;6032:4;6020:17;;;6014:24;5992:20;;;5985:54;6095:4;6083:17;;;6077:24;6055:20;;;6048:54;6158:4;6146:17;;;6140:24;6118:20;;;6111:54;6221:4;6209:17;;;6203:24;6181:20;;;6174:54;6284:4;6272:17;;;6266:24;6244:20;;;6237:54;6347:4;6335:17;;;6329:24;6307:20;;;6300:54;6373:6;6421:15;;;6415:22;6395:18;;;6388:50;6457:6;6505:15;;;6499:22;6479:18;;;6472:50;6541:6;6589:15;;;6583:22;6563:18;;;6556:50;6625:6;6673:15;;;6667:22;6647:18;;;6640:50;6709:6;6757:15;;;6751:22;6731:18;;;6724:50;;;;5868:3;5853:19;;5682:1098::o;6785:254::-;6850:6;6858;6911:2;6899:9;6890:7;6886:23;6882:32;6879:52;;;6927:1;6924;6917:12;6879:52;6950:29;6969:9;6950:29;:::i;:::-;6940:39;;6998:35;7029:2;7018:9;7014:18;6998:35;:::i;7044:186::-;7103:6;7156:2;7144:9;7135:7;7131:23;7127:32;7124:52;;;7172:1;7169;7162:12;7124:52;7195:29;7214:9;7195:29;:::i;7235:322::-;7312:6;7320;7328;7381:2;7369:9;7360:7;7356:23;7352:32;7349:52;;;7397:1;7394;7387:12;7349:52;7433:9;7420:23;7410:33;;7462:38;7496:2;7485:9;7481:18;7462:38;:::i;:::-;7452:48;;7547:2;7536:9;7532:18;7519:32;7509:42;;7235:322;;;;;:::o;7768:1382::-;8000:13;;-1:-1:-1;;;;;1381:31:149;1369:44;;7958:3;7943:19;;8072:4;8064:6;8060:17;8054:24;8087:64;8145:4;8134:9;8130:20;8116:12;-1:-1:-1;;;;;1381:31:149;1369:44;;1305:114;8087:64;;8207:4;8199:6;8195:17;8189:24;8182:4;8171:9;8167:20;8160:54;8270:4;8262:6;8258:17;8252:24;8245:4;8234:9;8230:20;8223:54;8333:4;8325:6;8321:17;8315:24;8308:4;8297:9;8293:20;8286:54;8396:4;8388:6;8384:17;8378:24;8371:4;8360:9;8356:20;8349:54;8459:4;8451:6;8447:17;8441:24;8434:4;8423:9;8419:20;8412:54;8522:4;8514:6;8510:17;8504:24;8497:4;8486:9;8482:20;8475:54;8548:6;8608:2;8600:6;8596:15;8590:22;8585:2;8574:9;8570:18;8563:50;;8632:6;8692:2;8684:6;8680:15;8674:22;8669:2;8658:9;8654:18;8647:50;;8716:6;8771:2;8763:6;8759:15;8753:22;8784:64;8844:2;8833:9;8829:18;8813:14;-1:-1:-1;;;;;1381:31:149;1369:44;;1305:114;8784:64;-1:-1:-1;;8867:6:149;8910:15;;;8904:22;-1:-1:-1;;;;;1381:31:149;8980:18;;;1369:44;9018:6;9061:15;;;9055:22;7632:12;;9125:18;;;7620:25;7694:4;7683:16;;7677:23;7661:14;;;7654:47;7750:4;7739:16;;7733:23;7717:14;;;7710:47;9086:58;;;7768:1382;;;;:::o;9155:437::-;9241:6;9249;9302:2;9290:9;9281:7;9277:23;9273:32;9270:52;;;9318:1;9315;9308:12;9270:52;9358:9;9345:23;9391:18;9383:6;9380:30;9377:50;;;9423:1;9420;9413:12;9377:50;9462:70;9524:7;9515:6;9504:9;9500:22;9462:70;:::i;:::-;9551:8;;9436:96;;-1:-1:-1;9155:437:149;-1:-1:-1;;;;9155:437:149:o;9597:632::-;9768:2;9820:21;;;9890:13;;9793:18;;;9912:22;;;9739:4;;9768:2;9991:15;;;;9965:2;9950:18;;;9739:4;10034:169;10048:6;10045:1;10042:13;10034:169;;;10109:13;;10097:26;;10178:15;;;;10143:12;;;;10070:1;10063:9;10034:169;;;-1:-1:-1;10220:3:149;;9597:632;-1:-1:-1;;;;;;9597:632:149:o;10730:1366::-;10954:13;;-1:-1:-1;;;;;3594:46:149;3582:59;;10922:3;10907:19;;11026:4;11018:6;11014:17;11008:24;11041:54;11089:4;11078:9;11074:20;11060:12;-1:-1:-1;;;;;3594:46:149;3582:59;;3528:119;11041:54;;11144:4;11136:6;11132:17;11126:24;11159:55;11208:4;11197:9;11193:20;11177:14;3728:2;3717:21;3705:34;;3652:93;11159:55;;11263:4;11255:6;11251:17;11245:24;11278:56;11328:4;11317:9;11313:20;11297:14;-1:-1:-1;;;;;3594:46:149;3582:59;;3528:119;11278:56;;11383:4;11375:6;11371:17;11365:24;11398:56;11448:4;11437:9;11433:20;11417:14;-1:-1:-1;;;;;3594:46:149;3582:59;;3528:119;11398:56;;11503:4;11495:6;11491:17;11485:24;11518:56;11568:4;11557:9;11553:20;11537:14;-1:-1:-1;;;;;3594:46:149;3582:59;;3528:119;11518:56;;11623:4;11615:6;11611:17;11605:24;11638:56;11688:4;11677:9;11673:20;11657:14;-1:-1:-1;;;;;3594:46:149;3582:59;;3528:119;11638:56;;11743:4;11735:6;11731:17;11725:24;11758:56;11808:4;11797:9;11793:20;11777:14;-1:-1:-1;;;;;3594:46:149;3582:59;;3528:119;11758:56;-1:-1:-1;11833:6:149;11876:15;;;11870:22;10512:13;10505:21;11933:18;;;10493:34;11971:6;12014:15;;;12008:22;10512:13;;10505:21;12071:18;;;10493:34;12039:51;10442:91;12101:472;12196:6;12204;12212;12220;12228;12281:3;12269:9;12260:7;12256:23;12252:33;12249:53;;;12298:1;12295;12288:12;12249:53;12334:9;12321:23;12311:33;;12363:38;12397:2;12386:9;12382:18;12363:38;:::i;:::-;12353:48;;12420:38;12454:2;12443:9;12439:18;12420:38;:::i;:::-;12410:48;;12505:2;12494:9;12490:18;12477:32;12467:42;;12528:39;12562:3;12551:9;12547:19;12528:39;:::i;:::-;12518:49;;12101:472;;;;;;;;:::o;12578:260::-;12646:6;12654;12707:2;12695:9;12686:7;12682:23;12678:32;12675:52;;;12723:1;12720;12713:12;12675:52;12746:29;12765:9;12746:29;:::i;:::-;12736:39;;12794:38;12828:2;12817:9;12813:18;12794:38;:::i;13618:127::-;13679:10;13674:3;13670:20;13667:1;13660:31;13710:4;13707:1;13700:15;13734:4;13731:1;13724:15;13750:127;13811:10;13806:3;13802:20;13799:1;13792:31;13842:4;13839:1;13832:15;13866:4;13863:1;13856:15;13882:125;13947:9;;;13968:10;;;13965:36;;;13981:18;;:::i;14012:128::-;14079:9;;;14100:11;;;14097:37;;;14114:18;;:::i;14145:127::-;14206:10;14201:3;14197:20;14194:1;14187:31;14237:4;14234:1;14227:15;14261:4;14258:1;14251:15;14277:127;14338:10;14333:3;14329:20;14326:1;14319:31;14369:4;14366:1;14359:15;14393:4;14390:1;14383:15;14632:1213;14851:13;;-1:-1:-1;;;;;14945:18:149;;;3582:59;;15007:3;15003:19;;;15039:4;15024:20;;3582:59;15091:4;15079:17;;15073:24;15135:2;15124:27;;;15168:4;15153:20;;3705:34;15202:21;;15240:4;15225:20;;3582:59;15292:4;15280:17;;15274:24;15326:20;;;15348:19;;;3582:59;15396:21;;15434:4;15419:20;;3582:59;15486:4;15474:17;;15468:24;15520:20;;;15557:4;15542:20;;3582:59;15591:21;;15629:4;15614:20;;3582:59;15681:4;15669:17;;15663:24;15729:4;15712:22;;;10512:13;10505:21;15751:6;15736:22;;10493:34;15792:1;15788:19;;;15784:30;10512:13;10505:21;15831:6;15816:22;;10493:34;14821:3;14806:19;;;15768:71;10442:91;15850:449;-1:-1:-1;;;16107:3:149;16100:32;16082:3;16161:6;16155:13;16177:75;16245:6;16240:2;16235:3;16231:12;16224:4;16216:6;16212:17;16177:75;:::i;:::-;16272:16;;;;16290:2;16268:25;;15850:449;-1:-1:-1;;15850:449:149:o;16304:450::-;-1:-1:-1;;;16561:3:149;16554:33;16536:3;16616:6;16610:13;16632:75;16700:6;16695:2;16690:3;16686:12;16679:4;16671:6;16667:17;16632:75;:::i;:::-;16727:16;;;;16745:2;16723:25;;16304:450;-1:-1:-1;;16304:450:149:o;17857:448::-;-1:-1:-1;;;18114:3:149;18107:31;18089:3;18167:6;18161:13;18183:75;18251:6;18246:2;18241:3;18237:12;18230:4;18222:6;18218:17;18183:75;:::i;:::-;18278:16;;;;18296:2;18274:25;;17857:448;-1:-1:-1;;17857:448:149:o;18310:449::-;-1:-1:-1;;;18567:3:149;18560:32;18542:3;18621:6;18615:13;18637:75;18705:6;18700:2;18695:3;18691:12;18684:4;18676:6;18672:17;18637:75;:::i;19758:184::-;19828:6;19881:2;19869:9;19860:7;19856:23;19852:32;19849:52;;;19897:1;19894;19887:12;19849:52;-1:-1:-1;19920:16:149;;19758:184;-1:-1:-1;19758:184:149:o;19947:200::-;20013:9;;;19986:4;20041:9;;20069:10;;20081:12;;;20065:29;20104:12;;;20096:21;;20062:56;20059:82;;;20121:18;;:::i;20152:136::-;20187:3;-1:-1:-1;;;20208:22:149;;20205:48;;20233:18;;:::i;:::-;-1:-1:-1;20273:1:149;20269:13;;20152:136::o;20293:216::-;20357:9;;;20385:11;;;20332:3;20415:9;;20443:10;;20439:19;;20468:10;;20460:19;;20436:44;20433:70;;;20483:18;;:::i;20514:127::-;20575:10;20570:3;20566:20;20563:1;20556:31;20606:4;20603:1;20596:15;20630:4;20627:1;20620:15;20646:112;20678:1;20704;20694:35;;20709:18;;:::i;:::-;-1:-1:-1;20743:9:149;;20646:112::o;20763:120::-;20803:1;20829;20819:35;;20834:18;;:::i;:::-;-1:-1:-1;20868:9:149;;20763:120::o;20888:135::-;20927:3;20948:17;;;20945:43;;20968:18;;:::i;:::-;-1:-1:-1;21015:1:149;21004:13;;20888:135::o;21408:168::-;21481:9;;;21512;;21529:15;;;21523:22;;21509:37;21499:71;;21550:18;;:::i;21925:193::-;21964:1;21990;21980:35;;21995:18;;:::i;:::-;-1:-1:-1;;;22031:18:149;;-1:-1:-1;;22051:13:149;;22027:38;22024:64;;;22068:18;;:::i;:::-;-1:-1:-1;22102:10:149;;21925:193::o",
    "linkReferences": {},
    "immutableReferences": {
      "2296": [
        {
          "start": 1154,
          "length": 32
        },
        {
          "start": 5637,
          "length": 32
        },
        {
          "start": 7317,
          "length": 32
        },
        {
          "start": 7519,
          "length": 32
        }
      ],
      "9215": [
        {
          "start": 2283,
          "length": 32
        },
        {
          "start": 3139,
          "length": 32
        }
      ],
      "9218": [
        {
          "start": 2605,
          "length": 32
        },
        {
          "start": 8412,
          "length": 32
        }
      ],
      "9221": [
        {
          "start": 2567,
          "length": 32
        },
        {
          "start": 7640,
          "length": 32
        }
      ],
      "9224": [
        {
          "start": 2643,
          "length": 32
        },
        {
          "start": 5990,
          "length": 32
        }
      ],
      "9227": [
        {
          "start": 2775,
          "length": 32
        }
      ],
      "9230": [
        {
          "start": 2813,
          "length": 32
        }
      ],
      "9233": [
        {
          "start": 2851,
          "length": 32
        }
      ],
      "9236": [
        {
          "start": 2415,
          "length": 32
        },
        {
          "start": 5914,
          "length": 32
        }
      ],
      "9239": [
        {
          "start": 2453,
          "length": 32
        },
        {
          "start": 5952,
          "length": 32
        }
      ],
      "9242": [
        {
          "start": 2491,
          "length": 32
        }
      ],
      "9245": [
        {
          "start": 2529,
          "length": 32
        }
      ],
      "9262": [
        {
          "start": 2717,
          "length": 32
        },
        {
          "start": 4725,
          "length": 32
        },
        {
          "start": 4847,
          "length": 32
        },
        {
          "start": 4957,
          "length": 32
        }
      ],
      "9276": [
        {
          "start": 2330,
          "length": 32
        },
        {
          "start": 5369,
          "length": 32
        }
      ],
      "9279": [
        {
          "start": 2377,
          "length": 32
        },
        {
          "start": 5430,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "balanceOf(uint256,address)": "3656eec2",
    "baseToken()": "c55dae63",
    "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
    "collectGovernanceFee((address,bool,bytes))": "3e691db9",
    "getCheckpoint(uint256)": "20fc4881",
    "getMarketState()": "d8165743",
    "getPoolConfig()": "b0d96580",
    "getPoolInfo()": "60246c88",
    "getUncollectedGovernanceFees()": "c69e16ad",
    "getWithdrawPool()": "fba56008",
    "isApprovedForAll(address,address)": "e985e9c5",
    "isSweepable(address)": "cc962f8e",
    "load(uint256[])": "becee9c3",
    "name(uint256)": "00ad800c",
    "nonces(address)": "7ecebe00",
    "pause(bool)": "02329a29",
    "perTokenApprovals(uint256,address,address)": "21ff32a9",
    "pool()": "16f0115b",
    "setApproval(uint256,address,uint256)": "9cd241af",
    "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
    "setApprovalForAll(address,bool)": "a22cb465",
    "setGovernance(address)": "ab033ea9",
    "setPauser(address,bool)": "7180c8ca",
    "symbol(uint256)": "4e41a1fb",
    "totalSupply(uint256)": "bd85b039",
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"precisionThreshold\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"contract IERC4626\",\"name\":\"__pool\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointId\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"sharePrice\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"exposure\",\"type\":\"int128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"precisionThreshold\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_target\",\"type\":\"address\"}],\"name\":\"isSweepable\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pool\",\"outputs\":[{\"internalType\":\"contract IERC4626\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"account\":\"The account.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The balance.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"the source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"the destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The amount of base collected.\"}},\"constructor\":{\"params\":{\"__pool\":\"The ERC4626 pool.\",\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointId\":\"The checkpoint ID.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getMarketState()\":{\"returns\":{\"_0\":\"The market state.\"}},\"getPoolConfig()\":{\"details\":\"These parameters are immutable, so this should only need to be      called once.\",\"returns\":{\"_0\":\"The PoolConfig struct.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The PoolInfo struct.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"Governance fees denominated in shares yet to be collected.\"}},\"getWithdrawPool()\":{\"returns\":{\"_0\":\"Hyperdrive's withdrawal pool information.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"account\":\"The account.\",\"operator\":\"The operator.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"isSweepable(address)\":{\"params\":{\"_target\":\"The target address.\"}},\"load(uint256[])\":{\"params\":{\"_slots\":\"The storage slots the caller wants the data from.\"},\"returns\":{\"_0\":\"A raw array of loaded data.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The name.\"}},\"nonces(address)\":{\"params\":{\"account\":\"The account.\"},\"returns\":{\"_0\":\"The signature nonce.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"account\":\"The account.\",\"spender\":\"The spender.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"pool()\":{\"returns\":{\"_0\":\"The 4626 pool.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The symbol.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The total supply.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address who's balance will be reduced.\",\"to\":\"The address who's balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender from the bridge.\",\"from\":\"The address who's balance will be reduced.\",\"to\":\"The address who's balance will be increased.\",\"tokenID\":\"The token identifier.\"}}},\"title\":\"ERC4626Target0\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"###################### ### ERC20Forwarder ### ######################\"}],\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}],\"ReturnData(bytes)\":[{\"notice\":\"#################### ### DataProvider ### ####################\"}],\"Unauthorized()\":[{\"notice\":\"############### ### Factory ### ###############\"}]},\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets an account's balance of a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the base token.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Initializes the target0 contract.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets a specified checkpoint.\"},\"getMarketState()\":{\"notice\":\"Gets the market state.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets info about the fees presently accrued by the pool.\"},\"getWithdrawPool()\":{\"notice\":\"Gets information about the withdrawal pool.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"isSweepable(address)\":{\"notice\":\"Gets the sweepable status of a target.\"},\"load(uint256[])\":{\"notice\":\"Allows plugin data libs to provide getters or other complex         logic instead of the main.\"},\"name(uint256)\":{\"notice\":\"Gets the name of a sub-token.\"},\"nonces(address)\":{\"notice\":\"Gets the permitForAll signature nonce for an account.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"pool()\":{\"notice\":\"Gets the 4626 pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of a sub-token.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of a sub-token.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"notice\":\"ERC4626Hyperdrive's target 0 logic contract. This contract contains         all of the getters for Hyperdrive as well as some stateful         functions.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/ERC4626Target0.sol\":\"ERC4626Target0\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x791a42ebc20362f968036d7a109bf2bdd757ebb20391b9dd3c52be5c30e2d9a4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c9f134b44e151928670f17f17cb9bbc0b4f0ef16ba3cba5c0e3790f002c5af4\",\"dweb:/ipfs/QmT4nFLpDCCZm6SGVKBkFPHfiHPFrsiS2xn3g4WMjvyEKV\"]},\"contracts/src/instances/ERC4626Base.sol\":{\"keccak256\":\"0x186f72e49a6542caa25f799fa9072c2b1b4a81cc7ab3475fbaad29fb56bb0229\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5dba800fe086f6ef89913f8a329887d4c9cb4d283be553e9534013882a7fcc44\",\"dweb:/ipfs/QmNts4c5uyZGmCjHeSREQpayigYkmro2xzRXVcSTqzH9r3\"]},\"contracts/src/instances/ERC4626Target0.sol\":{\"keccak256\":\"0xcecfd042565f0f5d0f543ec9ccdf9cb8ef5a4602f546330e35826a004a2e0603\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5731ccfd9e06661b7a25d576cc7977a380d0d3f643aeab1b673da78a1c234451\",\"dweb:/ipfs/QmNMLHzDsdZe7RCctVcRsbJyE7xsULPM1JRKdHzAunBCbb\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc\",\"dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0xe7076ded0fe36ac72c946258bc3183bebb6f1567cd0ce5d55720de84988f5312\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b84d02ec55ccbee1491ce25a2b890e7c371dd251cb69c2cc818179e49ddef780\",\"dweb:/ipfs/QmcXWYPF2Hy6w3TLqmegYiUj5pL9i9PqH44USV4Px9sk2k\"]},\"contracts/src/interfaces/IERC4626HyperdriveCore.sol\":{\"keccak256\":\"0xcea74eaf829d241754f74a8c2223fef0ec83459252d2aaedcd860bae538620c9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://464f58076e112b73957147b2abb52c85b1b806b306fa2d490d0e74f993ffe5a8\",\"dweb:/ipfs/QmNf3EACwEDsB7X1G1geLeqenR1xJHd9zGvSeZJ9f2nSmp\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0xa63f6d3d8b87fcf27202f4ea8609762ef695b9919e4907522930738eb2dcde7e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db88312fa9fed33207e1974d91f714ed8cbbe4a4a1d0e54a6ee5c15a8949f4fb\",\"dweb:/ipfs/QmSYCCuc6Xkh6oibhW5ovdQRhvT5nV4Hxj3Q2xEhjzYyWE\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70\",\"dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0xea9b7b3489ac95dd9c41ae7174c9f34a29f8ae14224ee5d2605434a8c8711784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9076244df4f436e8a8921faadfe925f243ae9a37ac7a16cbce3dd5b4a66631a8\",\"dweb:/ipfs/QmeRunYGGcgUZjRHS3m1AarzzjgV9vtp5K9UeUjTaaCrfs\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x328a01b0720b9a6494a2d6be1113539d41da589a382525578d4241fc077e9646\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4b9d7b56fd8056ae9264da99f8e0764ef16f17dca179218cf9375cf3236ec9fc\",\"dweb:/ipfs/Qmf11fXRipobZfMWTTxaScrYz9tZFUsdVxH5eZ4aLVQQC8\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0xd846aec9e34732c384a70ae306e8015eeb4a85ba7a68861d3a741310efc9eb57\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cdd512b5caa814e88813e3a8a03bfc5e460c78c81c4e403bc8e57300ae11a1d2\",\"dweb:/ipfs/QmUAMC52wZ6H86zUPQ7xPYVjAYjYQ97RiAfV1kn27ZYPsz\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x6779541f073ba5ce6e0656d10c7d9ef23734d2675b865b4d5310a023c30764ad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc569f006ef38723c1cb893b4e08d22ca0a448dc559c8abd18b28bd6967fcb7\",\"dweb:/ipfs/QmdPfZGuM8g3qp4CPsuztZe1wcVrytWkbqHQDbsTVEKBdF\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x45ba04560ca590427cc1ad2e98ec0122f9b6496ead2e3d4b3438339c982bd543\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ee1b36b7ab75044d12e8b91ead75c4377b9da1daa630ea7d1a0c413f963f916a\",\"dweb:/ipfs/QmPsoXubd1sfy7NNn7YWSrYTTrBEreuawVRFFjDrHQmKzZ\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x6b85590aeffa0a73aabf0c17a958bdec064a4d59c2e3d7595a8cb2d86fb01277\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d89ad612f8624723adab39bd85311389fe95f685cf496e1a5d116bfafd6588eb\",\"dweb:/ipfs/QmPWVwrfo65BZofeWubpZsM93yzxMFjhPfoNYsaT31yn28\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0x0dc04dc0f6070d51c2c58587f1d0f0604594e6c5728bf37e46da3a5952a0e0f0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1529824590ac5cdb7d4ffb67449be6a44f3bef9db40646bfa13bb5979e1a2f2d\",\"dweb:/ipfs/QmbXKFyqUaL1vv6wn7avWn463Uf8JgJvVLN6v5rUdJbys7\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xda130fbf6651046517801d119593b7f81e7a2a824f82cb15b1852495fa7fb148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c10ab3e768804fc8eee91502f34dd1e1d2d2e7d90d8ec0a26fac40d83ed940db\",\"dweb:/ipfs/QmNMqyFM6xC49uRAMeY3MhoQ9yK2ZHdQLt3QxrsNK9Kfkw\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xccfb106f6bd8829c369c19d08ef4f8ffc8ebbf5c51a9e148141733ff9bbc49f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d11ddba27aace6aefe451d75b4403ceb10f0a71cd61163e8f812728820107e62\",\"dweb:/ipfs/QmdSZJtY5LaJVnHYRwKAofo6oiihqpazC22Q1X9aL9uNbx\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x42a910bd6ee869fc53f18f2991cbf75a667d663ed41b4a11e18b328546ede7db\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://77345fdb9b99d0b04fa7cf719857eae63362e20db6b99da35ac886a13bf3b56a\",\"dweb:/ipfs/QmXatm27fhzsApgrMq978mye2u8fk62D89pUgV4WsjQeyH\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4\",\"dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU\"]}},\"version\":1}",
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
              "internalType": "contract IERC4626",
              "name": "__pool",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "BatchInputLengthMismatch"
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
          "name": "InvalidTradeSize"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NegativePresentValue"
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
          "name": "Unauthorized"
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
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "account",
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
                },
                {
                  "internalType": "int128",
                  "name": "exposure",
                  "type": "int128"
                }
              ]
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
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
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
              "internalType": "address",
              "name": "_target",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isSweepable",
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
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
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
              "name": "account",
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
              "name": "account",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "pool",
          "outputs": [
            {
              "internalType": "contract IERC4626",
              "name": "",
              "type": "address"
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
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
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
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
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
        "methods": {
          "balanceOf(uint256,address)": {
            "params": {
              "account": "The account.",
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The balance."
            }
          },
          "baseToken()": {
            "returns": {
              "_0": "The base token."
            }
          },
          "batchTransferFrom(address,address,uint256[],uint256[])": {
            "params": {
              "from": "the source account.",
              "ids": "The array of token ids of the asset to transfer.",
              "to": "the destination account.",
              "values": "The amount of each token to transfer."
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
              "__pool": "The ERC4626 pool.",
              "_config": "The configuration of the Hyperdrive pool."
            }
          },
          "getCheckpoint(uint256)": {
            "params": {
              "_checkpointId": "The checkpoint ID."
            },
            "returns": {
              "_0": "The checkpoint."
            }
          },
          "getMarketState()": {
            "returns": {
              "_0": "The market state."
            }
          },
          "getPoolConfig()": {
            "details": "These parameters are immutable, so this should only need to be      called once.",
            "returns": {
              "_0": "The PoolConfig struct."
            }
          },
          "getPoolInfo()": {
            "returns": {
              "_0": "The PoolInfo struct."
            }
          },
          "getUncollectedGovernanceFees()": {
            "returns": {
              "_0": "Governance fees denominated in shares yet to be collected."
            }
          },
          "getWithdrawPool()": {
            "returns": {
              "_0": "Hyperdrive's withdrawal pool information."
            }
          },
          "isApprovedForAll(address,address)": {
            "params": {
              "account": "The account.",
              "operator": "The operator."
            },
            "returns": {
              "_0": "The approval status."
            }
          },
          "isSweepable(address)": {
            "params": {
              "_target": "The target address."
            }
          },
          "load(uint256[])": {
            "params": {
              "_slots": "The storage slots the caller wants the data from."
            },
            "returns": {
              "_0": "A raw array of loaded data."
            }
          },
          "name(uint256)": {
            "params": {
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The name."
            }
          },
          "nonces(address)": {
            "params": {
              "account": "The account."
            },
            "returns": {
              "_0": "The signature nonce."
            }
          },
          "pause(bool)": {
            "params": {
              "_status": "True to pause all deposits and false to unpause them."
            }
          },
          "perTokenApprovals(uint256,address,address)": {
            "params": {
              "account": "The account.",
              "spender": "The spender.",
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The approval status."
            }
          },
          "pool()": {
            "returns": {
              "_0": "The 4626 pool."
            }
          },
          "setApproval(uint256,address,uint256)": {
            "params": {
              "amount": "The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].",
              "operator": "The address who will be able to use the tokens.",
              "tokenID": "The asset to approve the use of."
            }
          },
          "setApprovalBridge(uint256,address,uint256,address)": {
            "params": {
              "amount": "The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].",
              "caller": "The eth address which called the linking contract.",
              "operator": "The address who will be able to use the tokens.",
              "tokenID": "The asset to approve the use of."
            }
          },
          "setApprovalForAll(address,bool)": {
            "params": {
              "approved": "True to approve, false to remove approval.",
              "operator": "The eth address which can access the caller's assets."
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
          "symbol(uint256)": {
            "params": {
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The symbol."
            }
          },
          "totalSupply(uint256)": {
            "params": {
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The total supply."
            }
          },
          "transferFrom(uint256,address,address,uint256)": {
            "params": {
              "amount": "The amount of token to move.",
              "from": "The address who's balance will be reduced.",
              "to": "The address who's balance will be increased.",
              "tokenID": "The token identifier."
            }
          },
          "transferFromBridge(uint256,address,address,uint256,address)": {
            "params": {
              "amount": "The amount of token to move.",
              "caller": "The msg.sender from the bridge.",
              "from": "The address who's balance will be reduced.",
              "to": "The address who's balance will be increased.",
              "tokenID": "The token identifier."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "balanceOf(uint256,address)": {
            "notice": "Gets an account's balance of a sub-token."
          },
          "baseToken()": {
            "notice": "Gets the base token."
          },
          "batchTransferFrom(address,address,uint256[],uint256[])": {
            "notice": "Transfers several assets from one account to another."
          },
          "collectGovernanceFee((address,bool,bytes))": {
            "notice": "This function collects the governance fees accrued by the pool."
          },
          "constructor": {
            "notice": "Initializes the target0 contract."
          },
          "getCheckpoint(uint256)": {
            "notice": "Gets a specified checkpoint."
          },
          "getMarketState()": {
            "notice": "Gets the market state."
          },
          "getPoolConfig()": {
            "notice": "Gets the pool's configuration parameters."
          },
          "getPoolInfo()": {
            "notice": "Gets info about the pool's reserves and other state that is         important to evaluate potential trades."
          },
          "getUncollectedGovernanceFees()": {
            "notice": "Gets info about the fees presently accrued by the pool."
          },
          "getWithdrawPool()": {
            "notice": "Gets information about the withdrawal pool."
          },
          "isApprovedForAll(address,address)": {
            "notice": "Gets the approval status of an operator for an account."
          },
          "isSweepable(address)": {
            "notice": "Gets the sweepable status of a target."
          },
          "load(uint256[])": {
            "notice": "Allows plugin data libs to provide getters or other complex         logic instead of the main."
          },
          "name(uint256)": {
            "notice": "Gets the name of a sub-token."
          },
          "nonces(address)": {
            "notice": "Gets the permitForAll signature nonce for an account."
          },
          "pause(bool)": {
            "notice": "Allows an authorized address to pause this contract."
          },
          "perTokenApprovals(uint256,address,address)": {
            "notice": "Gets the approval status of an operator for an account."
          },
          "pool()": {
            "notice": "Gets the 4626 pool."
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
          "symbol(uint256)": {
            "notice": "Gets the symbol of a sub-token."
          },
          "totalSupply(uint256)": {
            "notice": "Gets the total supply of a sub-token."
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
        "contracts/src/instances/ERC4626Target0.sol": "ERC4626Target0"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/external/HyperdriveTarget0.sol": {
        "keccak256": "0x791a42ebc20362f968036d7a109bf2bdd757ebb20391b9dd3c52be5c30e2d9a4",
        "urls": [
          "bzz-raw://3c9f134b44e151928670f17f17cb9bbc0b4f0ef16ba3cba5c0e3790f002c5af4",
          "dweb:/ipfs/QmT4nFLpDCCZm6SGVKBkFPHfiHPFrsiS2xn3g4WMjvyEKV"
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
      "contracts/src/instances/ERC4626Target0.sol": {
        "keccak256": "0xcecfd042565f0f5d0f543ec9ccdf9cb8ef5a4602f546330e35826a004a2e0603",
        "urls": [
          "bzz-raw://5731ccfd9e06661b7a25d576cc7977a380d0d3f643aeab1b673da78a1c234451",
          "dweb:/ipfs/QmNMLHzDsdZe7RCctVcRsbJyE7xsULPM1JRKdHzAunBCbb"
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
    "absolutePath": "contracts/src/instances/ERC4626Target0.sol",
    "id": 2759,
    "exportedSymbols": {
      "ERC4626Base": [
        2468
      ],
      "ERC4626Target0": [
        2758
      ],
      "HyperdriveTarget0": [
        1174
      ],
      "IERC4626": [
        3255
      ],
      "IHyperdrive": [
        3759
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:1480:8",
    "nodes": [
      {
        "id": 2694,
        "nodeType": "PragmaDirective",
        "src": "39:23:8",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 2696,
        "nodeType": "ImportDirective",
        "src": "64:70:8",
        "nodes": [],
        "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
        "file": "../external/HyperdriveTarget0.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2759,
        "sourceUnit": 1175,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2695,
              "name": "HyperdriveTarget0",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 1174,
              "src": "73:17:8",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2698,
        "nodeType": "ImportDirective",
        "src": "135:54:8",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC4626.sol",
        "file": "../interfaces/IERC4626.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2759,
        "sourceUnit": 3256,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2697,
              "name": "IERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3255,
              "src": "144:8:8",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2700,
        "nodeType": "ImportDirective",
        "src": "190:60:8",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2759,
        "sourceUnit": 3760,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2699,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3759,
              "src": "199:11:8",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2702,
        "nodeType": "ImportDirective",
        "src": "251:48:8",
        "nodes": [],
        "absolutePath": "contracts/src/instances/ERC4626Base.sol",
        "file": "./ERC4626Base.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2759,
        "sourceUnit": 2469,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2701,
              "name": "ERC4626Base",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 2468,
              "src": "260:11:8",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2758,
        "nodeType": "ContractDefinition",
        "src": "742:776:8",
        "nodes": [
          {
            "id": 2724,
            "nodeType": "FunctionDefinition",
            "src": "961:139:8",
            "nodes": [],
            "body": {
              "id": 2723,
              "nodeType": "Block",
              "src": "1098:2:8",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 2708,
              "nodeType": "StructuredDocumentation",
              "src": "806:150:8",
              "text": "@notice Initializes the target0 contract.\n @param _config The configuration of the Hyperdrive pool.\n @param __pool The ERC4626 pool."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 2717,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2711,
                    "src": "1069:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 2718,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 2716,
                  "name": "HyperdriveTarget0",
                  "nameLocations": [
                    "1051:17:8"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1174,
                  "src": "1051:17:8"
                },
                "nodeType": "ModifierInvocation",
                "src": "1051:26:8"
              },
              {
                "arguments": [
                  {
                    "id": 2720,
                    "name": "__pool",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2714,
                    "src": "1090:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$3255",
                      "typeString": "contract IERC4626"
                    }
                  }
                ],
                "id": 2721,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 2719,
                  "name": "ERC4626Base",
                  "nameLocations": [
                    "1078:11:8"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 2468,
                  "src": "1078:11:8"
                },
                "nodeType": "ModifierInvocation",
                "src": "1078:19:8"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 2715,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2711,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "1012:7:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 2724,
                  "src": "982:37:8",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 2710,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2709,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "982:11:8",
                        "994:10:8"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3558,
                      "src": "982:22:8"
                    },
                    "referencedDeclaration": 3558,
                    "src": "982:22:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2714,
                  "mutability": "mutable",
                  "name": "__pool",
                  "nameLocation": "1038:6:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 2724,
                  "src": "1029:15:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC4626_$3255",
                    "typeString": "contract IERC4626"
                  },
                  "typeName": {
                    "id": 2713,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2712,
                      "name": "IERC4626",
                      "nameLocations": [
                        "1029:8:8"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3255,
                      "src": "1029:8:8"
                    },
                    "referencedDeclaration": 3255,
                    "src": "1029:8:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$3255",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "972:78:8"
            },
            "returnParameters": {
              "id": 2722,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1098:0:8"
            },
            "scope": 2758,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 2739,
            "nodeType": "FunctionDefinition",
            "src": "1194:92:8",
            "nodes": [],
            "body": {
              "id": 2738,
              "nodeType": "Block",
              "src": "1243:43:8",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 2734,
                            "name": "_pool",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2296,
                            "src": "1272:5:8",
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
                          "expression": {
                            "id": 2732,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1261:3:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 2733,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1265:6:8",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "1261:10:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 2735,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1261:17:8",
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
                      "id": 2731,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1173,
                      "src": "1253:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 2736,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1253:26:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2737,
                  "nodeType": "ExpressionStatement",
                  "src": "1253:26:8"
                }
              ]
            },
            "documentation": {
              "id": 2725,
              "nodeType": "StructuredDocumentation",
              "src": "1127:62:8",
              "text": "@notice Gets the 4626 pool.\n @return The 4626 pool."
            },
            "functionSelector": "16f0115b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pool",
            "nameLocation": "1203:4:8",
            "parameters": {
              "id": 2726,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1207:2:8"
            },
            "returnParameters": {
              "id": 2730,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2729,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2739,
                  "src": "1233:8:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC4626_$3255",
                    "typeString": "contract IERC4626"
                  },
                  "typeName": {
                    "id": 2728,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2727,
                      "name": "IERC4626",
                      "nameLocations": [
                        "1233:8:8"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3255,
                      "src": "1233:8:8"
                    },
                    "referencedDeclaration": 3255,
                    "src": "1233:8:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$3255",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1232:10:8"
            },
            "scope": 2758,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 2757,
            "nodeType": "FunctionDefinition",
            "src": "1390:126:8",
            "nodes": [],
            "body": {
              "id": 2756,
              "nodeType": "Block",
              "src": "1457:59:8",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "baseExpression": {
                              "id": 2750,
                              "name": "_isSweepable",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2301,
                              "src": "1486:12:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 2752,
                            "indexExpression": {
                              "id": 2751,
                              "name": "_target",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2742,
                              "src": "1499:7:8",
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
                            "src": "1486:21:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "expression": {
                            "id": 2748,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1475:3:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 2749,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1479:6:8",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "1475:10:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 2753,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1475:33:8",
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
                      "id": 2747,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1173,
                      "src": "1467:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 2754,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1467:42:8",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2755,
                  "nodeType": "ExpressionStatement",
                  "src": "1467:42:8"
                }
              ]
            },
            "documentation": {
              "id": 2740,
              "nodeType": "StructuredDocumentation",
              "src": "1292:93:8",
              "text": "@notice Gets the sweepable status of a target.\n @param _target The target address."
            },
            "functionSelector": "cc962f8e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isSweepable",
            "nameLocation": "1399:11:8",
            "parameters": {
              "id": 2743,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2742,
                  "mutability": "mutable",
                  "name": "_target",
                  "nameLocation": "1419:7:8",
                  "nodeType": "VariableDeclaration",
                  "scope": 2757,
                  "src": "1411:15:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2741,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1411:7:8",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1410:17:8"
            },
            "returnParameters": {
              "id": 2746,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2745,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2757,
                  "src": "1451:4:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2744,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1451:4:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1450:6:8"
            },
            "scope": 2758,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 2704,
              "name": "HyperdriveTarget0",
              "nameLocations": [
                "769:17:8"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1174,
              "src": "769:17:8"
            },
            "id": 2705,
            "nodeType": "InheritanceSpecifier",
            "src": "769:17:8"
          },
          {
            "baseName": {
              "id": 2706,
              "name": "ERC4626Base",
              "nameLocations": [
                "788:11:8"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2468,
              "src": "788:11:8"
            },
            "id": 2707,
            "nodeType": "InheritanceSpecifier",
            "src": "788:11:8"
          }
        ],
        "canonicalName": "ERC4626Target0",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 2703,
          "nodeType": "StructuredDocumentation",
          "src": "301:441:8",
          "text": "@author DELV\n @title ERC4626Target0\n @notice ERC4626Hyperdrive's target 0 logic contract. This contract contains\n         all of the getters for Hyperdrive as well as some stateful\n         functions.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          2758,
          2468,
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
        "name": "ERC4626Target0",
        "nameLocation": "751:14:8",
        "scope": 2759,
        "usedErrors": [
          3625,
          3631,
          3633,
          3637,
          3639,
          3643,
          3677,
          3686,
          3703,
          3709,
          3711,
          3733,
          3735,
          3742
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 8
} as const;
