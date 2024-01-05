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
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "domainSeparator",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "permitTypeHash",
          "type": "bytes32"
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
          "internalType": "contract IERC20",
          "name": "_target",
          "type": "address"
        }
      ],
      "name": "sweep",
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
    "object": "0x61026060405260016000553480156200001757600080fd5b5060405162003d7538038062003d758339810160408190526200003a91620002d0565b81516001600160a01b031660809081528201518190839081906103e8111562000076576040516349db44f560e01b815260040160405180910390fd5b60808101516101a05260a08101516101c05260e0810151600003620000ae57604051635428734d60e01b815260040160405180910390fd5b60e08101805160a0525160c08201511080620000de57508060e001518160c00151620000db9190620003c4565b15155b15620000fd5760405163253fffcf60e11b815260040160405180910390fd5b60c081810151905261010081015160e052606081015161018052610120810151600880546001600160a01b0319166001600160a01b03928316179055610140820151166101e05261016081015151670de0b6b3a76400001080620001715750670de0b6b3a764000081610160015160200151115b806200018d5750670de0b6b3a764000081610160015160400151115b15620001ac576040516322f72cc360e11b815260040160405180910390fd5b61016080820180515161010052805160209081015161012052815160409081015161014052915160600151909252908201516001600160a01b039081166102005291015161022052919091166102405250620003e7915050565b60405161018081016001600160401b03811182821017156200023857634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200025657600080fd5b919050565b6000608082840312156200026e57600080fd5b604051608081016001600160401b03811182821017156200029f57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600080828403610200811215620002e657600080fd5b6101e080821215620002f757600080fd5b6200030162000206565b91506200030e856200023e565b82526200031e602086016200023e565b602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c083015260e085015160e08301526101008086015181840152506101206200037b8187016200023e565b908301526101406200038f8682016200023e565b90830152610160620003a4878783016200025b565b8184015250819350620003b98186016200023e565b925050509250929050565b600082620003e257634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051613864620005116000396000818161063d01528181611aa701528181611f4d0152612017015260008181610b0001526119d8015260008181610ad1015261199b0152600081816104ce015281816105de01528181610c2e0152818161170c0152818161178601526117f401526000610b72015260008181610b4c0152611be3015260008181610b260152611bbd01526000610cda01526000610cb401526000610c8e01526000610c68015260008181610be40152611c09015260008181610b9801528181610e8901526120bf015260008181610bbe01526121be015260008181610aa20152610dfa01526138646000f3fe608060405234801561001057600080fd5b50600436106101d95760003560e01c80637ecebe0011610104578063c55dae63116100a2578063d816574311610071578063d816574314610422578063e44808bc14610437578063e985e9c51461044a578063fba560081461045d57600080fd5b8063c55dae63146103dc578063c69e16ad146103e4578063cc962f8e146103ec578063cf210e651461040f57600080fd5b8063ab033ea9116100de578063ab033ea914610381578063b0d9658014610394578063bd85b039146103a9578063becee9c3146103bc57600080fd5b80637ecebe00146103485780639cd241af1461035b578063a22cb4651461036e57600080fd5b806320fc48811161017c5780634e41a1fb1161014b5780634e41a1fb146102fa5780634ed2d6ac1461030d57806360246c88146103205780637180c8ca1461033557600080fd5b806320fc48811461028857806321ff32a9146102b35780633656eec2146102d45780633e691db9146102e757600080fd5b806314e5f07b116101b857806314e5f07b1461022f57806316f0115b1461024257806317fad7fc146102625780631c0f12b61461027557600080fd5b8062ad800c146101de57806301681a621461020757806302329a291461021c575b600080fd5b6101f16101ec366004612dbe565b61048c565b6040516101fe9190612e27565b60405180910390f35b61021a610215366004612e4f565b6104c3565b005b61021a61022a366004612e7c565b610607565b61021a61023d366004612e97565b610613565b61024a61062f565b6040516001600160a01b0390911681526020016101fe565b61021a610270366004612f76565b610672565b61021a61028336600461300b565b610688565b61029b610296366004612dbe565b61069b565b60405190516001600160801b031681526020016101fe565b6102c66102c1366004613053565b6106dc565b6040519081526020016101fe565b6102c66102e2366004613095565b610722565b6102c66102f53660046130c5565b61075b565b6101f1610308366004612dbe565b610766565b61021a61031b366004613100565b610774565b6103286107c2565b6040516101fe919061314a565b61021a6103433660046131e0565b6109cd565b6102c6610356366004612e4f565b6109d7565b61021a610369366004613215565b610a03565b61021a61037c3660046131e0565b610a14565b61021a61038f366004612e4f565b610a80565b61039c610a89565b6040516101fe919061324d565b6102c66103b7366004612dbe565b610d0f565b6103cf6103ca36600461332a565b610d31565b6040516101fe919061336c565b61024a610dec565b6102c6610e2c565b6103ff6103fa366004612e4f565b610e46565b60405190151581526020016101fe565b6102c661041d366004612dbe565b610e7c565b61042a610ec5565b6040516101fe91906133b0565b61021a6104453660046134ad565b610f33565b6103ff61045836600461350c565b610f7b565b610465610fbf565b6040805182516001600160801b0390811682526020938401511692810192909252016101fe565b60606104be61049a8361101e565b6040516020016104aa9190612e27565b60405160208183030381529060405261114c565b919050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480159061050c5750336000908152600a602052604090205460ff16155b15610529576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03811660009081526010602052604090205460ff166105625760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa1580156105a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cd919061353a565b90506106036001600160a01b0383167f000000000000000000000000000000000000000000000000000000000000000083611170565b5050565b610610816111e8565b50565b610624898989898989898989611235565b505050505050505050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066f91016104aa565b90565b610680868686868686611448565b505050505050565b61069584848484336114fc565b50505050565b6040805160208101909152600081526104be600760008481526020019081526020016000206040516020016104aa91546001600160801b0316815260200190565b6000838152600e602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261071b91016104aa565b9392505050565b6000828152600b602090815260408083206001600160a01b038516845282528083205481519283015261075591016104aa565b92915050565b6000610755826116bd565b60606104be61049a8361186b565b8361077e8161195d565b6001600160a01b0316336001600160a01b0316146107af57604051632aab8bd360e01b815260040160405180910390fd5b6107bb85858585611a1a565b5050505050565b610834604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600061083e611a87565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b03909216916108a9919061357f565b6108b39190613592565b905060008083116108c55760006108e0565b6108e0836108da6108d586611b1f565b611c81565b90611cb1565b604080516101c0810182526001546001600160801b038082168352600254600f81900b6020850152600160801b9081900482169484019490945290839004811660608301526080820186905260a08201879052600354839004811660c0830152600454838104821660e0840152811661010083015260055481166101208301526006548082166101408401529290920490911661016082015290915060009061018081018415610999576109948486611cc6565b61099c565b60005b81526003546001600160801b03166020918201526040519192506109c6916104aa9184910161314a565b5050505090565b6106038282611cdb565b6001600160a01b0381166000908152600f60209081526040808320548151928301526104be91016104aa565b610a0f83838333611a1a565b505050565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61061081611d53565b610a91612d0e565b61066f6040518061018001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016104aa919061324d565b6000818152600c60209081526040808320548151928301526104be91016104aa565b606060008267ffffffffffffffff811115610d4e57610d4e6135a5565b604051908082528060200260200182016040528015610d77578160200160208202803683370190505b50905060005b83811015610dd0576000858583818110610d9957610d996135bb565b90506020020135905060008154905080848481518110610dbb57610dbb6135bb565b60209081029190910101525050600101610d7d565b50610de5816040516020016104aa919061336c565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066f91016104aa565b600061066f6009546040516020016104aa91815260200190565b6001600160a01b03811660009081526010602090815260408083205490516104be926104aa9260ff169101901515815260200190565b60006104be610eb3610eae7f00000000000000000000000000000000000000000000000000000000000000008561357f565b611dc7565b6040516020016104aa91815260200190565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915261066f60016040516020016104aa91906135d1565b84610f3d8161195d565b6001600160a01b0316336001600160a01b031614610f6e57604051632aab8bd360e01b815260040160405180910390fd5b61068086868686866114fc565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff909116151591810191909152909161075591016104aa565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261066f906060016104aa565b606060f882901c6001600160f81b038316600061103a82611e0f565b9050600083600381111561105057611050613553565b03611082576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611144565b600183600381111561109657611096613553565b036110c257806040516020016110ac919061365f565b6040516020818303038152906040529350611144565b60028360038111156110d6576110d6613553565b036110ec57806040516020016110ac9190613698565b600383600381111561110057611100613553565b03611144576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b81526004016111679190612e27565b60405180910390fd5b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806106955760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401611167565b336000908152600a602052604090205460ff16611217576040516282b42960e81b815260040160405180910390fd5b60058054911515600160881b0260ff60881b19909216919091179055565b834211156112565760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b03871661127d5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa15801561136b573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146113a957604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600f6020526040812080549091906113cf906136d2565b909155506001600160a01b038981166000818152600d60209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061146557506001600160a01b038516155b156114835760405163f0dd15fd60e01b815260040160405180910390fd5b8281146114a35760405163174861a760e31b815260040160405180910390fd5b60005b838110156114f3576114eb8585838181106114c3576114c36135bb565b9050602002013588888686868181106114de576114de6135bb565b90506020020135336114fc565b6001016114a6565b50505050505050565b6001600160a01b038416158061151957506001600160a01b038316155b156115375760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146115fb576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff166115fb576000858152600e602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146115f9576000868152600e602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906115f3908490613592565b90915550505b505b6000858152600b602090815260408083206001600160a01b03881684529091528120805484929061162d908490613592565b90915550506000858152600b602090815260408083206001600160a01b03871684529091528120805484929061166490849061357f565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b600080546001146116fd5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401611167565b60026000556001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166117396020840184612e4f565b6001600160a01b03161461176057604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff161580156117a95750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b80156117c057506008546001600160a01b03163314155b156117dd576040516282b42960e81b815260040160405180910390fd5b6009805460009091556117f08184611f1c565b91507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e4761184f84611849611a87565b87612045565b60405190815260200160405180910390a2506001600055919050565b606060f882901c6001600160f81b038316600061188782611e0f565b9050600083600381111561189d5761189d613553565b036118cf576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611144565b60018360038111156118e3576118e3613553565b036118f957806040516020016110ac91906136eb565b600283600381111561190d5761190d613553565b0361192357806040516020016110ac9190613723565b600383600381111561193757611937613553565b03611144576040516c485950455244524956452d575360981b6020820152602d01611132565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015611af6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b1a919061353a565b905090565b611b7c60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600254600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c0830152600354819004831660e08301526004549192610100840192611c5192900416612074565b81526004546001600160801b039081166020830152600554604090920191611c799116612074565b905292915050565b6000806000611c8f846120ea565b9150915080610de55760405163aeeb825d60e01b815260040160405180910390fd5b600061071b8383670de0b6b3a7640000612164565b600061071b83670de0b6b3a764000084612164565b6008546001600160a01b03163314611d05576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6008546001600160a01b03163314611d7d576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000600c6000611dd8600285612182565b815260200190815260200160002054600c6000611df6600186612182565b815260200190815260200160002054610755919061374f565b60408051604d808252608082019092526060919060009082602082018180368337019050509050611e41600a85613785565b611e4c90603061357f565b60f81b81611e5b600185613592565b81518110611e6b57611e6b6135bb565b60200101906001600160f81b031916908160001a905350611e8d600a85613799565b935060015b8415611f0e57611ea3600a86613785565b611eae90603061357f565b60f81b826001611ebe8487613592565b611ec89190613592565b81518110611ed857611ed86135bb565b60200101906001600160f81b031916908160001a905350611efa600a86613799565b945080611f06816136d2565b915050611e92565b918290030190815292915050565b600082600003611f2e57506000610755565b611f3e6040830160208401612e7c565b15611ffd576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba08765284611f806020860186612e4f565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af1158015611fd2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ff6919061353a565b9050610755565b61203e61200d6020840184612e4f565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169085611170565b5090919050565b60006120576040830160208401612e7c565b1561206357508261071b565b61206d8484611cb1565b905061071b565b600080670de0b6b3a76400006120886121b7565b61209291906137ad565b90508083116120a25760006120ac565b6120ac8184613592565b915061071b6120e3670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006137ad565b8390611cc6565b60008060008060006120fb866121ed565b915091508061211257506000958695509350505050565b8560a0015161212087612430565b875161212d9085906137c4565b61213791906137c4565b612141919061374f565b92505050600081121561215a5750600093849350915050565b9360019350915050565b600082600019048411830215820261217b57600080fd5b5091020490565b60006001600160f81b038211156121ac5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006121e37f000000000000000000000000000000000000000000000000000000000000000042613785565b611b1a9042613592565b600080600061220f846101400151856101200151611cb190919063ffffffff16565b61010085015160e086015161222391611cb1565b61222d919061374f565b9050600061224385600001518660200151612497565b90506000821315612346576000829050600080612294886000015189602001518a604001518b60a001518c60c00151670de0b6b3a76400006122859190613592565b8d606001518e608001516124b4565b91509150806122ad575060009788975095505050505050565b8282106123025760006122e7858a60400151868c60c00151670de0b6b3a76400006122d89190613592565b8d606001518e608001516125a3565b90506122f2816137e4565b9960019950975050505050505050565b60008860200151126123355760a088015161231d9085613592565b612326906137e4565b98600198509650505050505050565b60a0880151885161231d9190613592565b600082121561242257600061235a836137e4565b9050600061238e8388604001518960c00151670de0b6b3a764000061237f9190613592565b8a606001518b608001516125e2565b90508181106123ca576000612326848960400151858b60c00151670de0b6b3a76400006123bb9190613592565b8c606001518d60800151612678565b60006123fc8489604001518a60c00151670de0b6b3a76400006123ed9190613592565b8b606001518c6080015161271a565b9050612418886060015183856124129190613592565b90611cc6565b612326908261357f565b506000946001945092505050565b600061245f826101000151670de0b6b3a764000061244e9190613592565b606084015160e08501519190612164565b61248d836101400151670de0b6b3a764000061247b9190613592565b60608501516101208601519190612164565b610755919061374f565b6000806124a4838561374f565b9050600081121561071b57600080fd5b60008060008812156124d6576124c9886137e4565b6124d3908761357f565b95505b60006124e28a8a612497565b905060006124f3828a8989896127a9565b9050600061251661250e89612508898d6127e2565b906127f7565b88908861284e565b6125209083613592565b9050670de0b6b3a764000081106125545761254d612546670de0b6b3a76400008a611cc6565b82906127f7565b905061256c565b612569612546670de0b6b3a76400008a612874565b90505b898110156125835760008094509450505050612597565b61258d8a82613592565b6001945094505050505b97509795505050505050565b6000806125b4888888888888612889565b9092509050806125d757604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000806125f2878787878761294b565b9050600061261d670de0b6b3a764000061260c8787611cc6565b612616919061357f565b8390612874565b9050670de0b6b3a7640000811061264a57612643612546670de0b6b3a764000088612874565b9050612662565b61265f612546670de0b6b3a764000088611cc6565b90505b61266c8188613592565b98975050505050505050565b600080612688888887878761294b565b905061269885612508888a613592565b965060006126b284866126ab8b86613592565b919061284e565b9050670de0b6b3a764000081106126df576126d8612546670de0b6b3a764000088612874565b90506126f7565b6126f4612546670de0b6b3a764000088611cc6565b90505b6127018185612874565b905061270d8982613592565b9998505050505050505050565b60008061272a87878787876127a9565b9050600061274e670de0b6b3a76400006127448787612874565b6120e3919061357f565b9050670de0b6b3a7640000811061277b57612774612546670de0b6b3a764000088611cc6565b9050612793565b612790612546670de0b6b3a764000088612874565b90505b61279d8185611cc6565b905061266c8882613592565b60006127b585856127f7565b6127ce6127c686612508868b611cb1565b859085612164565b6127d8919061357f565b9695505050505050565b600061071b8383670de0b6b3a764000061284e565b6000816000036128105750670de0b6b3a7640000610755565b8260000361282057506000610755565b81600061282c85612970565b9050818102612843670de0b6b3a764000082613800565b90506127d881612b83565b600082600019048411830215820261286557600080fd5b50910281810615159190040190565b600061071b83670de0b6b3a76400008461284e565b600080600061289b898988888861294b565b90506128ab86612508898b61357f565b9750878110156128c2576000809250925050612940565b60006128d385876126ab8c86613592565b9050670de0b6b3a76400008110612900576128f9612546670de0b6b3a764000089612874565b9050612918565b612915612546670de0b6b3a764000089611cc6565b90505b6129228186612874565b9050808a111561293957612936818b613592565b93505b6001925050505b965096945050505050565b600061295785856127f7565b6127ce61296886612508868b6127e2565b85908561284e565b600080821361299257604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213612b9e57506000919050565b680755bf798b4a1bf1e58212612bc75760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001612db96040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b600060208284031215612dd057600080fd5b5035919050565b60005b83811015612df2578181015183820152602001612dda565b50506000910152565b60008151808452612e13816020860160208601612dd7565b601f01601f19169290920160200192915050565b60208152600061071b6020830184612dfb565b6001600160a01b038116811461061057600080fd5b600060208284031215612e6157600080fd5b813561071b81612e3a565b803580151581146104be57600080fd5b600060208284031215612e8e57600080fd5b61071b82612e6c565b60008060008060008060008060006101208a8c031215612eb657600080fd5b8935985060208a0135975060408a0135612ecf81612e3a565b965060608a0135612edf81612e3a565b9550612eed60808b01612e6c565b945060a08a0135935060c08a013560ff81168114612f0a57600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f840112612f3c57600080fd5b50813567ffffffffffffffff811115612f5457600080fd5b6020830191508360208260051b8501011115612f6f57600080fd5b9250929050565b60008060008060008060808789031215612f8f57600080fd5b8635612f9a81612e3a565b95506020870135612faa81612e3a565b9450604087013567ffffffffffffffff80821115612fc757600080fd5b612fd38a838b01612f2a565b90965094506060890135915080821115612fec57600080fd5b50612ff989828a01612f2a565b979a9699509497509295939492505050565b6000806000806080858703121561302157600080fd5b84359350602085013561303381612e3a565b9250604085013561304381612e3a565b9396929550929360600135925050565b60008060006060848603121561306857600080fd5b83359250602084013561307a81612e3a565b9150604084013561308a81612e3a565b809150509250925092565b600080604083850312156130a857600080fd5b8235915060208301356130ba81612e3a565b809150509250929050565b6000602082840312156130d757600080fd5b813567ffffffffffffffff8111156130ee57600080fd5b82016060818503121561071b57600080fd5b6000806000806080858703121561311657600080fd5b84359350602085013561312881612e3a565b925060408501359150606085013561313f81612e3a565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a091820151918101919091526101c00190565b600080604083850312156131f357600080fd5b82356131fe81612e3a565b915061320c60208401612e6c565b90509250929050565b60008060006060848603121561322a57600080fd5b83359250602084013561323c81612e3a565b929592945050506040919091013590565b81516001600160a01b031681526101e08101602083015161327960208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401516132dd828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016080840151805182850152602081015161018085015260408101516101a085015260608101516101c08501525b505092915050565b6000806020838503121561333d57600080fd5b823567ffffffffffffffff81111561335457600080fd5b61336085828601612f2a565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b818110156133a457835183529284019291840191600101613388565b50909695505050505050565b81516001600160801b03168152610160810160208301516133dc60208401826001600160801b03169052565b5060408301516133f16040840182600f0b9052565b50606083015161340c60608401826001600160801b03169052565b50608083015161342760808401826001600160801b03169052565b5060a083015161344260a08401826001600160801b03169052565b5060c083015161345d60c08401826001600160801b03169052565b5060e083015161347860e08401826001600160801b03169052565b50610100838101516001600160801b031690830152610120808401511515908301526101408084015180151582850152613322565b600080600080600060a086880312156134c557600080fd5b8535945060208601356134d781612e3a565b935060408601356134e781612e3a565b92506060860135915060808601356134fe81612e3a565b809150509295509295909350565b6000806040838503121561351f57600080fd5b823561352a81612e3a565b915060208301356130ba81612e3a565b60006020828403121561354c57600080fd5b5051919050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561075557610755613569565b8181038181111561075557610755613569565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b81546001600160801b038082168352608091821c60208401526001840154600f81900b6040850152821c6060840152600284015480821683850152821c60a0840152600384015480821660c0850152821c60e084015260048401549081166101008401529081901c60ff9081161515610120840152608882901c161515610140830152610160820190610de5565b700243cb832b9323934bb32902637b7339d1607d1b81526000825161368b816011850160208701612dd7565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516136c5816012850160208701612dd7565b9190910160120192915050565b6000600182016136e4576136e4613569565b5060010190565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613716816010850160208701612dd7565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161368b816011850160208701612dd7565b8181036000831280158383131683831282161715610de557610de5613569565b634e487b7160e01b600052601260045260246000fd5b6000826137945761379461376f565b500690565b6000826137a8576137a861376f565b500490565b808202811582820484141761075557610755613569565b808201828112600083128015821682158216171561332257613322613569565b6000600160ff1b82016137f9576137f9613569565b5060000390565b60008261380f5761380f61376f565b600160ff1b82146000198414161561382957613829613569565b50059056fea26469706673582212200109bad7a83edb1d439a635ef519f1546a059b6eed5d04dc3d24f9bc14b9b49f64736f6c63430008130033",
    "sourceMap": "912:2218:11:-:0;;;454:1:98;429:26;;1169:139:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5081:17:49;;-1:-1:-1;;;;;5068:30:49;;;;;5627:28;;;1298:6:11;;1277:7;;;;5658:3:49;-1:-1:-1;5623:113:49;;;5684:41;;-1:-1:-1;;;5684:41:49;;;;;;;;;;;5623:113;5769:28;;;;5745:52;;6085:32;;;;6057:60;;6282:26;;;;6312:1;6282:31;6278:108;;6336:39;;-1:-1:-1;;;6336:39:49;;;;;;;;;;;6278:108;6417:26;;;;;6395:48;;6497:26;6470:24;;;;:53;;:127;;;6566:7;:26;;;6539:7;:24;;;:53;;;;:::i;:::-;:58;;6470:127;6453:224;;;6629:37;;-1:-1:-1;;;6629:37:49;;;;;;;;;;;6453:224;6706:24;;;;;6686:44;;6755:19;;;;6740:34;;6805:25;;;;6784:46;;6854:18;;;;6840:11;:32;;-1:-1:-1;;;;;;6840:32:49;-1:-1:-1;;;;;6840:32:49;;;;;;6898:20;;;;6882:36;;;6988:12;;;;:18;7009:4;-1:-1:-1;;6988:65:49;;;7049:4;7029:7;:12;;;:17;;;:24;6988:65;:113;;;;7097:4;7069:7;:12;;;:25;;;:32;6988:113;6971:204;;;7133:31;;-1:-1:-1;;;7133:31:49;;;;;;;;;;;6971:204;7196:12;;;;;;:18;7184:30;;7235:12;;:17;;;;;7224:28;;7281:12;;-1:-1:-1;7281:25:49;;;;7262:44;;7339:12;;-1:-1:-1;7339:29:49;;7316:52;;;-1:-1:-1;;;7445:21:49;-1:-1:-1;;;;;7428:38:49;;;;;-1:-1:-1;;7494:22:49;7476:40;;1489:14:7;;;;;;-1:-1:-1;912:2218:11;;-1:-1:-1;;912:2218:11;14:347:161;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:161;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:161;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:161;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1376::-;1366:6;1374;1418:9;1409:7;1405:23;1448:3;1444:2;1440:12;1437:32;;;1465:1;1462;1455:12;1437:32;1488:6;1514:2;1510;1506:11;1503:31;;;1530:1;1527;1520:12;1503:31;1556:17;;:::i;:::-;1543:30;;1596:48;1634:9;1596:48;:::i;:::-;1589:5;1582:63;1677:57;1730:2;1719:9;1715:18;1677:57;:::i;:::-;1672:2;1665:5;1661:14;1654:81;1788:2;1777:9;1773:18;1767:25;1762:2;1755:5;1751:14;1744:49;1846:2;1835:9;1831:18;1825:25;1820:2;1813:5;1809:14;1802:49;1905:3;1894:9;1890:19;1884:26;1878:3;1871:5;1867:15;1860:51;1965:3;1954:9;1950:19;1944:26;1938:3;1931:5;1927:15;1920:51;2025:3;2014:9;2010:19;2004:26;1998:3;1991:5;1987:15;1980:51;2085:3;2074:9;2070:19;2064:26;2058:3;2051:5;2047:15;2040:51;2110:3;2166:2;2155:9;2151:18;2145:25;2140:2;2133:5;2129:14;2122:49;;2190:3;2225:57;2278:2;2267:9;2263:18;2225:57;:::i;:::-;2209:14;;;2202:81;2302:3;2337:57;2375:18;;;2337:57;:::i;:::-;2321:14;;;2314:81;2414:3;2449:62;2503:7;2483:18;;;2449:62;:::i;:::-;2444:2;2437:5;2433:14;2426:86;;2531:5;2521:15;;2555:57;2608:2;2597:9;2593:18;2555:57;:::i;:::-;2545:67;;;;1242:1376;;;;;:::o;2623:209::-;2655:1;2681;2671:132;;2725:10;2720:3;2716:20;2713:1;2706:31;2760:4;2757:1;2750:15;2788:4;2785:1;2778:15;2671:132;-1:-1:-1;2817:9:161;;2623:209::o;:::-;912:2218:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b50600436106101d95760003560e01c80637ecebe0011610104578063c55dae63116100a2578063d816574311610071578063d816574314610422578063e44808bc14610437578063e985e9c51461044a578063fba560081461045d57600080fd5b8063c55dae63146103dc578063c69e16ad146103e4578063cc962f8e146103ec578063cf210e651461040f57600080fd5b8063ab033ea9116100de578063ab033ea914610381578063b0d9658014610394578063bd85b039146103a9578063becee9c3146103bc57600080fd5b80637ecebe00146103485780639cd241af1461035b578063a22cb4651461036e57600080fd5b806320fc48811161017c5780634e41a1fb1161014b5780634e41a1fb146102fa5780634ed2d6ac1461030d57806360246c88146103205780637180c8ca1461033557600080fd5b806320fc48811461028857806321ff32a9146102b35780633656eec2146102d45780633e691db9146102e757600080fd5b806314e5f07b116101b857806314e5f07b1461022f57806316f0115b1461024257806317fad7fc146102625780631c0f12b61461027557600080fd5b8062ad800c146101de57806301681a621461020757806302329a291461021c575b600080fd5b6101f16101ec366004612dbe565b61048c565b6040516101fe9190612e27565b60405180910390f35b61021a610215366004612e4f565b6104c3565b005b61021a61022a366004612e7c565b610607565b61021a61023d366004612e97565b610613565b61024a61062f565b6040516001600160a01b0390911681526020016101fe565b61021a610270366004612f76565b610672565b61021a61028336600461300b565b610688565b61029b610296366004612dbe565b61069b565b60405190516001600160801b031681526020016101fe565b6102c66102c1366004613053565b6106dc565b6040519081526020016101fe565b6102c66102e2366004613095565b610722565b6102c66102f53660046130c5565b61075b565b6101f1610308366004612dbe565b610766565b61021a61031b366004613100565b610774565b6103286107c2565b6040516101fe919061314a565b61021a6103433660046131e0565b6109cd565b6102c6610356366004612e4f565b6109d7565b61021a610369366004613215565b610a03565b61021a61037c3660046131e0565b610a14565b61021a61038f366004612e4f565b610a80565b61039c610a89565b6040516101fe919061324d565b6102c66103b7366004612dbe565b610d0f565b6103cf6103ca36600461332a565b610d31565b6040516101fe919061336c565b61024a610dec565b6102c6610e2c565b6103ff6103fa366004612e4f565b610e46565b60405190151581526020016101fe565b6102c661041d366004612dbe565b610e7c565b61042a610ec5565b6040516101fe91906133b0565b61021a6104453660046134ad565b610f33565b6103ff61045836600461350c565b610f7b565b610465610fbf565b6040805182516001600160801b0390811682526020938401511692810192909252016101fe565b60606104be61049a8361101e565b6040516020016104aa9190612e27565b60405160208183030381529060405261114c565b919050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480159061050c5750336000908152600a602052604090205460ff16155b15610529576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03811660009081526010602052604090205460ff166105625760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa1580156105a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cd919061353a565b90506106036001600160a01b0383167f000000000000000000000000000000000000000000000000000000000000000083611170565b5050565b610610816111e8565b50565b610624898989898989898989611235565b505050505050505050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066f91016104aa565b90565b610680868686868686611448565b505050505050565b61069584848484336114fc565b50505050565b6040805160208101909152600081526104be600760008481526020019081526020016000206040516020016104aa91546001600160801b0316815260200190565b6000838152600e602090815260408083206001600160a01b038681168552908352818420908516845282528083205481519283015261071b91016104aa565b9392505050565b6000828152600b602090815260408083206001600160a01b038516845282528083205481519283015261075591016104aa565b92915050565b6000610755826116bd565b60606104be61049a8361186b565b8361077e8161195d565b6001600160a01b0316336001600160a01b0316146107af57604051632aab8bd360e01b815260040160405180910390fd5b6107bb85858585611a1a565b5050505050565b610834604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600061083e611a87565b600654600c6020527fe33c7a20958276ce9529c827d1e1b38c61245a6a2cb39f13852cf96fd6f7333d5460008080527f13649b2456f1b42fef0f0040b3aaeabcd21a76a0f3f5defd4f583839455116e854939450926001600160801b03909216916108a9919061357f565b6108b39190613592565b905060008083116108c55760006108e0565b6108e0836108da6108d586611b1f565b611c81565b90611cb1565b604080516101c0810182526001546001600160801b038082168352600254600f81900b6020850152600160801b9081900482169484019490945290839004811660608301526080820186905260a08201879052600354839004811660c0830152600454838104821660e0840152811661010083015260055481166101208301526006548082166101408401529290920490911661016082015290915060009061018081018415610999576109948486611cc6565b61099c565b60005b81526003546001600160801b03166020918201526040519192506109c6916104aa9184910161314a565b5050505090565b6106038282611cdb565b6001600160a01b0381166000908152600f60209081526040808320548151928301526104be91016104aa565b610a0f83838333611a1a565b505050565b336000818152600d602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61061081611d53565b610a91612d0e565b61066f6040518061018001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152602001600860009054906101000a90046001600160a01b03166001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815260200160405180608001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000008152508152506040516020016104aa919061324d565b6000818152600c60209081526040808320548151928301526104be91016104aa565b606060008267ffffffffffffffff811115610d4e57610d4e6135a5565b604051908082528060200260200182016040528015610d77578160200160208202803683370190505b50905060005b83811015610dd0576000858583818110610d9957610d996135bb565b90506020020135905060008154905080848481518110610dbb57610dbb6135bb565b60209081029190910101525050600101610d7d565b50610de5816040516020016104aa919061336c565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066f91016104aa565b600061066f6009546040516020016104aa91815260200190565b6001600160a01b03811660009081526010602090815260408083205490516104be926104aa9260ff169101901515815260200190565b60006104be610eb3610eae7f00000000000000000000000000000000000000000000000000000000000000008561357f565b611dc7565b6040516020016104aa91815260200190565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261014081019190915261066f60016040516020016104aa91906135d1565b84610f3d8161195d565b6001600160a01b0316336001600160a01b031614610f6e57604051632aab8bd360e01b815260040160405180910390fd5b61068086868686866114fc565b6001600160a01b038281166000908152600d60209081526040808320938516835292815282822054835160ff909116151591810191909152909161075591016104aa565b60408051808201909152600080825260208201526040805180820182526006546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261066f906060016104aa565b606060f882901c6001600160f81b038316600061103a82611e0f565b9050600083600381111561105057611050613553565b03611082576040518060400160405280600d81526020016c048797065726472697665204c5609c1b8152509350611144565b600183600381111561109657611096613553565b036110c257806040516020016110ac919061365f565b6040516020818303038152906040529350611144565b60028360038111156110d6576110d6613553565b036110ec57806040516020016110ac9190613698565b600383600381111561110057611100613553565b03611144576040517f48797065726472697665205769746864726177616c20536861726500000000006020820152603b015b60405160208183030381529060405293505b505050919050565b80604051636e64089360e11b81526004016111679190612e27565b60405180910390fd5b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806106955760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401611167565b336000908152600a602052604090205460ff16611217576040516282b42960e81b815260040160405180910390fd5b60058054911515600160881b0260ff60881b19909216919091179055565b834211156112565760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b03871661127d5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b038781166000818152600f602090815260408083205481518084018f905280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b61010083015261010282018c90526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa15801561136b573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146113a957604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600f6020526040812080549091906113cf906136d2565b909155506001600160a01b038981166000818152600d60209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050505050505050505050565b6001600160a01b038616158061146557506001600160a01b038516155b156114835760405163f0dd15fd60e01b815260040160405180910390fd5b8281146114a35760405163174861a760e31b815260040160405180910390fd5b60005b838110156114f3576114eb8585838181106114c3576114c36135bb565b9050602002013588888686868181106114de576114de6135bb565b90506020020135336114fc565b6001016114a6565b50505050505050565b6001600160a01b038416158061151957506001600160a01b038316155b156115375760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b0316146115fb576001600160a01b038085166000908152600d602090815260408083209385168352929052205460ff166115fb576000858152600e602090815260408083206001600160a01b038089168552908352818420908516845290915290205460001981146115f9576000868152600e602090815260408083206001600160a01b03808a1685529083528184209086168452909152812080548592906115f3908490613592565b90915550505b505b6000858152600b602090815260408083206001600160a01b03881684529091528120805484929061162d908490613592565b90915550506000858152600b602090815260408083206001600160a01b03871684529091528120805484929061166490849061357f565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b600080546001146116fd5760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b6044820152606401611167565b60026000556001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166117396020840184612e4f565b6001600160a01b03161461176057604051630ad13b3360e21b815260040160405180910390fd5b336000908152600a602052604090205460ff161580156117a95750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b80156117c057506008546001600160a01b03163314155b156117dd576040516282b42960e81b815260040160405180910390fd5b6009805460009091556117f08184611f1c565b91507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167fa4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e4761184f84611849611a87565b87612045565b60405190815260200160405180910390a2506001600055919050565b606060f882901c6001600160f81b038316600061188782611e0f565b9050600083600381111561189d5761189d613553565b036118cf576040518060400160405280600d81526020016c0485950455244524956452d4c5609c1b8152509350611144565b60018360038111156118e3576118e3613553565b036118f957806040516020016110ac91906136eb565b600283600381111561190d5761190d613553565b0361192357806040516020016110ac9190613723565b600383600381111561193757611937613553565b03611144576040516c485950455244524956452d575360981b6020820152602d01611132565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b6000848152600e602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015611af6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b1a919061353a565b905090565b611b7c60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526001546001600160801b038082168352600254600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c0830152600354819004831660e08301526004549192610100840192611c5192900416612074565b81526004546001600160801b039081166020830152600554604090920191611c799116612074565b905292915050565b6000806000611c8f846120ea565b9150915080610de55760405163aeeb825d60e01b815260040160405180910390fd5b600061071b8383670de0b6b3a7640000612164565b600061071b83670de0b6b3a764000084612164565b6008546001600160a01b03163314611d05576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600a6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6008546001600160a01b03163314611d7d576040516282b42960e81b815260040160405180910390fd5b600880546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000600c6000611dd8600285612182565b815260200190815260200160002054600c6000611df6600186612182565b815260200190815260200160002054610755919061374f565b60408051604d808252608082019092526060919060009082602082018180368337019050509050611e41600a85613785565b611e4c90603061357f565b60f81b81611e5b600185613592565b81518110611e6b57611e6b6135bb565b60200101906001600160f81b031916908160001a905350611e8d600a85613799565b935060015b8415611f0e57611ea3600a86613785565b611eae90603061357f565b60f81b826001611ebe8487613592565b611ec89190613592565b81518110611ed857611ed86135bb565b60200101906001600160f81b031916908160001a905350611efa600a86613799565b945080611f06816136d2565b915050611e92565b918290030190815292915050565b600082600003611f2e57506000610755565b611f3e6040830160208401612e7c565b15611ffd576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663ba08765284611f806020860186612e4f565b6040516001600160e01b031960e085901b16815260048101929092526001600160a01b031660248201523060448201526064016020604051808303816000875af1158015611fd2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ff6919061353a565b9050610755565b61203e61200d6020840184612e4f565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169085611170565b5090919050565b60006120576040830160208401612e7c565b1561206357508261071b565b61206d8484611cb1565b905061071b565b600080670de0b6b3a76400006120886121b7565b61209291906137ad565b90508083116120a25760006120ac565b6120ac8184613592565b915061071b6120e3670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006137ad565b8390611cc6565b60008060008060006120fb866121ed565b915091508061211257506000958695509350505050565b8560a0015161212087612430565b875161212d9085906137c4565b61213791906137c4565b612141919061374f565b92505050600081121561215a5750600093849350915050565b9360019350915050565b600082600019048411830215820261217b57600080fd5b5091020490565b60006001600160f81b038211156121ac5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60006121e37f000000000000000000000000000000000000000000000000000000000000000042613785565b611b1a9042613592565b600080600061220f846101400151856101200151611cb190919063ffffffff16565b61010085015160e086015161222391611cb1565b61222d919061374f565b9050600061224385600001518660200151612497565b90506000821315612346576000829050600080612294886000015189602001518a604001518b60a001518c60c00151670de0b6b3a76400006122859190613592565b8d606001518e608001516124b4565b91509150806122ad575060009788975095505050505050565b8282106123025760006122e7858a60400151868c60c00151670de0b6b3a76400006122d89190613592565b8d606001518e608001516125a3565b90506122f2816137e4565b9960019950975050505050505050565b60008860200151126123355760a088015161231d9085613592565b612326906137e4565b98600198509650505050505050565b60a0880151885161231d9190613592565b600082121561242257600061235a836137e4565b9050600061238e8388604001518960c00151670de0b6b3a764000061237f9190613592565b8a606001518b608001516125e2565b90508181106123ca576000612326848960400151858b60c00151670de0b6b3a76400006123bb9190613592565b8c606001518d60800151612678565b60006123fc8489604001518a60c00151670de0b6b3a76400006123ed9190613592565b8b606001518c6080015161271a565b9050612418886060015183856124129190613592565b90611cc6565b612326908261357f565b506000946001945092505050565b600061245f826101000151670de0b6b3a764000061244e9190613592565b606084015160e08501519190612164565b61248d836101400151670de0b6b3a764000061247b9190613592565b60608501516101208601519190612164565b610755919061374f565b6000806124a4838561374f565b9050600081121561071b57600080fd5b60008060008812156124d6576124c9886137e4565b6124d3908761357f565b95505b60006124e28a8a612497565b905060006124f3828a8989896127a9565b9050600061251661250e89612508898d6127e2565b906127f7565b88908861284e565b6125209083613592565b9050670de0b6b3a764000081106125545761254d612546670de0b6b3a76400008a611cc6565b82906127f7565b905061256c565b612569612546670de0b6b3a76400008a612874565b90505b898110156125835760008094509450505050612597565b61258d8a82613592565b6001945094505050505b97509795505050505050565b6000806125b4888888888888612889565b9092509050806125d757604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000806125f2878787878761294b565b9050600061261d670de0b6b3a764000061260c8787611cc6565b612616919061357f565b8390612874565b9050670de0b6b3a7640000811061264a57612643612546670de0b6b3a764000088612874565b9050612662565b61265f612546670de0b6b3a764000088611cc6565b90505b61266c8188613592565b98975050505050505050565b600080612688888887878761294b565b905061269885612508888a613592565b965060006126b284866126ab8b86613592565b919061284e565b9050670de0b6b3a764000081106126df576126d8612546670de0b6b3a764000088612874565b90506126f7565b6126f4612546670de0b6b3a764000088611cc6565b90505b6127018185612874565b905061270d8982613592565b9998505050505050505050565b60008061272a87878787876127a9565b9050600061274e670de0b6b3a76400006127448787612874565b6120e3919061357f565b9050670de0b6b3a7640000811061277b57612774612546670de0b6b3a764000088611cc6565b9050612793565b612790612546670de0b6b3a764000088612874565b90505b61279d8185611cc6565b905061266c8882613592565b60006127b585856127f7565b6127ce6127c686612508868b611cb1565b859085612164565b6127d8919061357f565b9695505050505050565b600061071b8383670de0b6b3a764000061284e565b6000816000036128105750670de0b6b3a7640000610755565b8260000361282057506000610755565b81600061282c85612970565b9050818102612843670de0b6b3a764000082613800565b90506127d881612b83565b600082600019048411830215820261286557600080fd5b50910281810615159190040190565b600061071b83670de0b6b3a76400008461284e565b600080600061289b898988888861294b565b90506128ab86612508898b61357f565b9750878110156128c2576000809250925050612940565b60006128d385876126ab8c86613592565b9050670de0b6b3a76400008110612900576128f9612546670de0b6b3a764000089612874565b9050612918565b612915612546670de0b6b3a764000089611cc6565b90505b6129228186612874565b9050808a111561293957612936818b613592565b93505b6001925050505b965096945050505050565b600061295785856127f7565b6127ce61296886612508868b6127e2565b85908561284e565b600080821361299257604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e198213612b9e57506000919050565b680755bf798b4a1bf1e58212612bc75760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000801916815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001612db96040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b600060208284031215612dd057600080fd5b5035919050565b60005b83811015612df2578181015183820152602001612dda565b50506000910152565b60008151808452612e13816020860160208601612dd7565b601f01601f19169290920160200192915050565b60208152600061071b6020830184612dfb565b6001600160a01b038116811461061057600080fd5b600060208284031215612e6157600080fd5b813561071b81612e3a565b803580151581146104be57600080fd5b600060208284031215612e8e57600080fd5b61071b82612e6c565b60008060008060008060008060006101208a8c031215612eb657600080fd5b8935985060208a0135975060408a0135612ecf81612e3a565b965060608a0135612edf81612e3a565b9550612eed60808b01612e6c565b945060a08a0135935060c08a013560ff81168114612f0a57600080fd5b8093505060e08a013591506101008a013590509295985092959850929598565b60008083601f840112612f3c57600080fd5b50813567ffffffffffffffff811115612f5457600080fd5b6020830191508360208260051b8501011115612f6f57600080fd5b9250929050565b60008060008060008060808789031215612f8f57600080fd5b8635612f9a81612e3a565b95506020870135612faa81612e3a565b9450604087013567ffffffffffffffff80821115612fc757600080fd5b612fd38a838b01612f2a565b90965094506060890135915080821115612fec57600080fd5b50612ff989828a01612f2a565b979a9699509497509295939492505050565b6000806000806080858703121561302157600080fd5b84359350602085013561303381612e3a565b9250604085013561304381612e3a565b9396929550929360600135925050565b60008060006060848603121561306857600080fd5b83359250602084013561307a81612e3a565b9150604084013561308a81612e3a565b809150509250925092565b600080604083850312156130a857600080fd5b8235915060208301356130ba81612e3a565b809150509250929050565b6000602082840312156130d757600080fd5b813567ffffffffffffffff8111156130ee57600080fd5b82016060818503121561071b57600080fd5b6000806000806080858703121561311657600080fd5b84359350602085013561312881612e3a565b925060408501359150606085013561313f81612e3a565b939692955090935050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a091820151918101919091526101c00190565b600080604083850312156131f357600080fd5b82356131fe81612e3a565b915061320c60208401612e6c565b90509250929050565b60008060006060848603121561322a57600080fd5b83359250602084013561323c81612e3a565b929592945050506040919091013590565b81516001600160a01b031681526101e08101602083015161327960208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401518184015250610120808401516132dd828501826001600160a01b03169052565b5050610140838101516001600160a01b03169083015261016080840151805182850152602081015161018085015260408101516101a085015260608101516101c08501525b505092915050565b6000806020838503121561333d57600080fd5b823567ffffffffffffffff81111561335457600080fd5b61336085828601612f2a565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b818110156133a457835183529284019291840191600101613388565b50909695505050505050565b81516001600160801b03168152610160810160208301516133dc60208401826001600160801b03169052565b5060408301516133f16040840182600f0b9052565b50606083015161340c60608401826001600160801b03169052565b50608083015161342760808401826001600160801b03169052565b5060a083015161344260a08401826001600160801b03169052565b5060c083015161345d60c08401826001600160801b03169052565b5060e083015161347860e08401826001600160801b03169052565b50610100838101516001600160801b031690830152610120808401511515908301526101408084015180151582850152613322565b600080600080600060a086880312156134c557600080fd5b8535945060208601356134d781612e3a565b935060408601356134e781612e3a565b92506060860135915060808601356134fe81612e3a565b809150509295509295909350565b6000806040838503121561351f57600080fd5b823561352a81612e3a565b915060208301356130ba81612e3a565b60006020828403121561354c57600080fd5b5051919050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561075557610755613569565b8181038181111561075557610755613569565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b81546001600160801b038082168352608091821c60208401526001840154600f81900b6040850152821c6060840152600284015480821683850152821c60a0840152600384015480821660c0850152821c60e084015260048401549081166101008401529081901c60ff9081161515610120840152608882901c161515610140830152610160820190610de5565b700243cb832b9323934bb32902637b7339d1607d1b81526000825161368b816011850160208701612dd7565b9190910160110192915050565b710243cb832b9323934bb329029b437b93a1d160751b8152600082516136c5816012850160208701612dd7565b9190910160120192915050565b6000600182016136e4576136e4613569565b5060010190565b6f242ca822a9222924ab2296a627a7239d60811b815260008251613716816010850160208701612dd7565b9190910160100192915050565b70242ca822a9222924ab2296a9a427a92a1d60791b81526000825161368b816011850160208701612dd7565b8181036000831280158383131683831282161715610de557610de5613569565b634e487b7160e01b600052601260045260246000fd5b6000826137945761379461376f565b500690565b6000826137a8576137a861376f565b500490565b808202811582820484141761075557610755613569565b808201828112600083128015821682158216171561332257613322613569565b6000600160ff1b82016137f9576137f9613569565b5060000390565b60008261380f5761380f61376f565b600160ff1b82146000198414161561382957613829613569565b50059056fea26469706673582212200109bad7a83edb1d439a635ef519f1546a059b6eed5d04dc3d24f9bc14b9b49f64736f6c63430008130033",
    "sourceMap": "912:2218:11:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15320:137:1;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2088:624:11;;;;;;:::i;:::-;;:::i;:::-;;2164:70:1;;;;;;:::i;:::-;;:::i;7617:482::-;;;;;;:::i;:::-;;:::i;2806:92:11:-;;;:::i;:::-;;;-1:-1:-1;;;;;3012:32:161;;;2994:51;;2982:2;2967:18;2806:92:11;2831:220:161;6092:209:1;;;;;;:::i;:::-;;:::i;3025:240::-;;;;;;:::i;:::-;;:::i;8427:179::-;;;;;;:::i;:::-;;:::i;:::-;;;5393:13:161;;-1:-1:-1;;;;;5389:54:161;5371:73;;5359:2;5344:18;8427:179:1;5169:281:161;14978:223:1;;;;;;:::i;:::-;;:::i;:::-;;;6078:25:161;;;6066:2;6051:18;14978:223:1;5932:177:161;13938:173:1;;;;;;:::i;:::-;;:::i;1838:174::-;;;;;;:::i;:::-;;:::i;15580:141::-;;;;;;:::i;:::-;;:::i;4462:225::-;;;;;;:::i;:::-;;:::i;10429:1519::-;;;:::i;:::-;;;;;;;:::i;2597:94::-;;;;;;:::i;:::-;;:::i;15870:119::-;;;;;;:::i;:::-;;:::i;5626:179::-;;;;;;:::i;:::-;;:::i;4919:277::-;;;;;;:::i;:::-;;:::i;2344:83::-;;;;;;:::i;:::-;;:::i;9189:1065::-;;;:::i;:::-;;;;;;;:::i;14246:129::-;;;;;;:::i;:::-;;:::i;13203:565::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;8195:101::-;;;:::i;12592:132::-;;;:::i;3002:126:11:-;;;;;;:::i;:::-;;:::i;:::-;;;12663:14:161;;12656:22;12638:41;;12626:2;12611:18;3002:126:11;12498:187:161;8771:213:1;;;;;;:::i;:::-;;:::i;12803:159::-;;;:::i;:::-;;;;;;;:::i;3670:285::-;;;;;;:::i;:::-;;:::i;14564:186::-;;;;;;:::i;:::-;;:::i;12072:367::-;;;:::i;:::-;;;;15866:13:161;;-1:-1:-1;;;;;15862:22:161;;;15844:41;;15945:4;15933:17;;;15927:24;15923:33;15901:20;;;15894:63;;;;15764:18;12072:367:1;15585:378:161;15320:137:1;15374:13;15399:51;15418:30;15440:7;15418:21;:30::i;:::-;15407:42;;;;;;;;:::i;:::-;;;;;;;;;;;;;15399:7;:51::i;:::-;15320:137;;;:::o;2088:624:11:-;2210:10;-1:-1:-1;;;;;2224:13:11;2210:27;;;;;:52;;-1:-1:-1;2251:10:11;2242:20;;;;:8;:20;;;;;;;;2241:21;2210:52;2206:116;;;2285:26;;-1:-1:-1;;;2285:26:11;;;;;;;;;;;2206:116;-1:-1:-1;;;;;2400:30:11;;;;;;:12;:30;;;;;;;;2395:99;;2453:30;;-1:-1:-1;;;2453:30:11;;;;;;;;;;;2395:99;2603:32;;-1:-1:-1;;;2603:32:11;;2629:4;2603:32;;;2994:51:161;2585:15:11;;-1:-1:-1;;;;;2603:17:11;;;;;2967:18:161;;2603:32:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2585:50;-1:-1:-1;2645:60:11;-1:-1:-1;;;;;2645:36:11;;2682:13;2585:50;2645:36;:60::i;:::-;2128:584;2088:624;:::o;2164:70:1:-;2212:15;2219:7;2212:6;:15::i;:::-;2164:70;:::o;7617:482::-;7882:210;7909:15;7938:14;7966:5;7985:7;8006:9;8029:8;8051:1;8066;8081;7882:13;:210::i;:::-;7617:482;;;;;;;;;:::o;2806:92:11:-;2873:17;;;-1:-1:-1;;;;;2884:5:11;3012:32:161;2873:17:11;;;2994:51:161;2845:8:11;;2865:26;;2967:18:161;2873:17:11;2831:220:161;2865:26:11;2806:92;:::o;6092:209:1:-;6253:41;6272:4;6278:2;6282:3;;6287:6;;6253:18;:41::i;:::-;6092:209;;;;;;:::o;3025:240::-;3206:52;3220:7;3229:4;3235:2;3239:6;3247:10;3206:13;:52::i;:::-;3025:240;;;;:::o;8427:179::-;-1:-1:-1;;;;;;;;;;;;8551:48:1;8570:12;:27;8583:13;8570:27;;;;;;;;;;;8559:39;;;;;;16378:13:161;-1:-1:-1;;;;;16374:54:161;16356:73;;16344:2;16329:18;;16157:278;14978:223:1;15109:7;15147:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;15147:36:1;;;;;;;;;;;:45;;;;;;;;;;;15136:57;;;;;6078:25:161;15128:66:1;;6051:18:161;15136:57:1;5932:177:161;15128:66:1;14978:223;;;;;:::o;13938:173::-;14036:7;14074:19;;;:10;:19;;;;;;;;-1:-1:-1;;;;;14074:28:1;;;;;;;;;;14063:40;;;;;6078:25:161;14055:49:1;;6051:18:161;14063:40:1;5932:177:161;14055:49:1;13938:173;;;;:::o;1838:174::-;1939:16;1974:31;1996:8;1974:21;:31::i;15580:141::-;15636:13;15661:53;15680:32;15704:7;15680:23;:32::i;4462:225::-;4614:7;1698:32:47;1722:7;1698:23;:32::i;:::-;-1:-1:-1;;;;;1684:46:47;:10;-1:-1:-1;;;;;1684:46:47;;1680:116;;1753:32;;-1:-1:-1;;;1753:32:47;;;;;;;;;;;1680:116;4633:47:1::1;4646:7;4655:8;4665:6;4673;4633:12;:47::i;:::-;4462:225:::0;;;;;:::o;10429:1519::-;10475:27;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10475:27:1;10514:18;10535:16;:14;:16::i;:::-;10697:13;:29;10634:12;:48;;;;10561:21;10585:34;;;;;10514:37;;-1:-1:-1;10561:21:1;-1:-1:-1;;;;;10697:29:1;;;;10585:97;;10634:48;10585:97;:::i;:::-;:141;;;;:::i;:::-;10561:165;;10736:20;10772:1;10759:10;:14;:163;;10921:1;10759:163;;;10788:118;10895:10;10788:81;10834:34;10857:10;10834:22;:34::i;:::-;10788:45;:81::i;:::-;:106;;:118::i;:::-;10971:931;;;;;;;;11021:12;:26;-1:-1:-1;;;;;11021:26:1;;;10971:931;;11078:28;;;;;;10971:931;;;;-1:-1:-1;;;11141:32:1;;;;;;10971:931;;;;;;;11201:25;;;;;;10971:931;;;;;;;;;;;;;;;;11294:29;;;;;;;10971:931;;;;11362:36;;;;;;;10971:931;;;;11431:30;;11021:26;10971:931;;;11501:37;;;;10971:931;;;;11747:13;:29;;;;10971:931;;;;11816:22;;;;;;;10971:931;;;;10736:186;;-1:-1:-1;10932:36:1;;10971:931;;;11608:18;;:92;;11665:35;:12;11686:13;11665:20;:35::i;:::-;11608:92;;;11645:1;11608:92;10971:931;;11866:25;;-1:-1:-1;;;;;11866:25:1;10971:931;;;;;11920:20;;10932:970;;-1:-1:-1;11912:29:1;;11920:20;;10932:970;;11920:20;;:::i;11912:29::-;10504:1444;;;;10429:1519;:::o;2597:94::-;2661:23;2672:3;2677:6;2661:10;:23::i;15870:119::-;-1:-1:-1;;;;;15964:16:1;;15926:7;15964:16;;;:7;:16;;;;;;;;;15953:28;;;;;6078:25:161;15945:37:1;;6051:18:161;15953:28:1;5932:177:161;5626:179:1;5747:51;5760:7;5769:8;5779:6;5787:10;5747:12;:51::i;:::-;5626:179;;;:::o;4919:277::-;5053:10;5035:29;;;;:17;:29;;;;;;;;-1:-1:-1;;;;;5035:39:1;;;;;;;;;;;;:50;;-1:-1:-1;;5035:50:1;;;;;;;;;;5143:46;;12638:41:161;;;5035:39:1;;5053:10;5143:46;;12611:18:161;5143:46:1;;;;;;;4919:277;;:::o;2344:83::-;2400:20;2415:4;2400:14;:20::i;9189:1065::-;9261:29;;:::i;:::-;9306:941;9355:868;;;;;;;;9411:10;-1:-1:-1;;;;;9355:868:1;;;;;9458:14;-1:-1:-1;;;;;9355:868:1;;;;;9510:15;9355:868;;;;9566:18;9355:868;;;;9628:21;9355:868;;;;9697:25;9355:868;;;;9762:17;9355:868;;;;9821:19;9355:868;;;;9875:12;9355:868;;;;9921:11;;;;;;;;;-1:-1:-1;;;;;9921:11:1;-1:-1:-1;;;;;9355:868:1;;;;;9968:13;-1:-1:-1;;;;;9355:868:1;;;;;10009:195;;;;;;;;10051:9;10009:195;;;;10086:8;10009:195;;;;10120:16;10009:195;;;;10162:20;10009:195;;;9355:868;;;9327:910;;;;;;;;:::i;14246:129::-;14307:7;14345:21;;;:12;:21;;;;;;;;;14334:33;;;;;6078:25:161;14326:42:1;;6051:18:161;14334:33:1;5932:177:161;13203:565:1;13281:16;13309:23;13349:6;13335:28;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;13335:28:1;;13309:54;;13435:9;13430:294;13450:17;;;13430:294;;;13485:12;13500:6;;13507:1;13500:9;;;;;;;:::i;:::-;;;;;;;13485:24;;13523:12;13606:4;13600:11;13592:19;;13650:4;13638:6;13645:1;13638:9;;;;;;;;:::i;:::-;;;;;;;;;;:16;-1:-1:-1;;13696:3:1;;13430:294;;;;13734:27;13753:6;13742:18;;;;;;;;:::i;13734:27::-;13299:469;13203:565;;;;:::o;8195:101::-;8266:22;;;-1:-1:-1;;;;;8277:10:1;3012:32:161;8266:22:1;;;2994:51:161;8239:7:1;;8258:31;;2967:18:161;8266:22:1;2831:220:161;12592:132:1;12655:7;12674:43;12693:22;;12682:34;;;;;;6078:25:161;;6066:2;6051:18;;5932:177;3002:126:11;-1:-1:-1;;;;;3098:21:11;;3063:4;3098:21;;;:12;:21;;;;;;;;;3087:33;;3079:42;;3087:33;;3098:21;;;3087:33;12663:14:161;;12656:22;12638:41;;12626:2;12611:18;;12498:187;8771:213:1;8864:6;8882:95;8914:52;8930:35;8948:17;8930:15;:35;:::i;:::-;8914:15;:52::i;:::-;8903:64;;;;;;6078:25:161;;6066:2;6051:18;;5932:177;12803:159:1;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12922:33:1;12941:12;12930:24;;;;;;;;:::i;3670:285::-;3839:7;1698:32:47;1722:7;1698:23;:32::i;:::-;-1:-1:-1;;;;;1684:46:47;:10;-1:-1:-1;;;;;1684:46:47;;1680:116;;1753:32;;-1:-1:-1;;;1753:32:47;;;;;;;;;;;1680:116;3900:48:1::1;3914:7;3923:4;3929:2;3933:6;3941;3900:13;:48::i;14564:186::-:0;-1:-1:-1;;;;;14705:26:1;;;14670:4;14705:26;;;:17;:26;;;;;;;;:36;;;;;;;;;;;;14694:48;;14705:36;;;;12663:14:161;12656:22;14694:48:1;;;12638:41:161;;;;14670:4:1;;14686:57;;12611:18:161;14694:48:1;12498:187:161;12072:367:1;-1:-1:-1;;;;;;;;;;;;;;;;;12242:166:1;;;;;;;;12306:13;:29;-1:-1:-1;;;;;12306:29:1;;;12242:166;;;-1:-1:-1;;;12367:22:1;;;;;12242:166;;;;;;;12214:208;;;;;15844:41:161;;;;15927:24;;15923:33;15901:20;;;15894:63;;;;12193:239:1;;15764:18:161;;12214:208:1;15585:378:161;2533:719:50;2606:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:50;;2638:20;2736:19;2253:120;2736:8;:19::i;:::-;2709:46;-1:-1:-1;2779:16:50;2769:6;:26;;;;;;;;:::i;:::-;;2765:481;;2811:23;;;;;;;;;;;;;-1:-1:-1;;;2811:23:50;;;;;2765:481;;;2865:18;2855:6;:28;;;;;;;;:::i;:::-;;2851:395;;2952:10;2914:49;;;;;;;;:::i;:::-;;;;;;;;;;;;;2899:65;;2851:395;;;2995:19;2985:6;:29;;;;;;;;:::i;:::-;;2981:265;;3084:10;3045:50;;;;;;;;:::i;2981:265::-;3127:29;3117:6;:39;;;;;;;;:::i;:::-;;3113:133;;3187:47;;19896:29:161;3187:47:50;;;19884:42:161;19942:12;;3187:47:50;;;;;;;;;;;;;3172:63;;3113:133;2627:625;;;2533:719;;;:::o;16198:106:1:-;16290:6;16267:30;;-1:-1:-1;;;16267:30:1;;;;;;;;:::i;:::-;;;;;;;;2950:1499:99;3062:12;3232:4;3226:11;-1:-1:-1;;;3355:17:99;3348:93;3488:2;3484:1;3465:17;3461:25;3454:37;3568:6;3563:2;3544:17;3540:26;3533:42;4370:2;4367:1;4363:2;4344:17;4341:1;4334:5;4327;4322:51;3891:16;3884:24;3878:2;3860:16;3857:24;3853:1;3849;3843:8;3840:15;3836:46;3833:76;3633:754;3622:765;;;4415:7;4407:35;;;;-1:-1:-1;;;4407:35:99;;20390:2:161;4407:35:99;;;20372:21:161;20429:2;20409:18;;;20402:30;-1:-1:-1;;;20448:18:161;;;20441:45;20503:18;;4407:35:99;20188:339:161;2208:157:42;2271:10;2262:20;;;;:8;:20;;;;;;;;2257:60;;2291:26;;-1:-1:-1;;;2291:26:42;;;;;;;;;;;2257:60;2327:21;:31;;;;;-1:-1:-1;;;2327:31:42;-1:-1:-1;;;;2327:31:42;;;;;;;;;2208:157::o;8021:1485:47:-;8363:8;8345:15;:26;8341:93;;;8394:29;;-1:-1:-1;;;8394:29:47;;;;;;;;;;;8341:93;-1:-1:-1;;;;;8495:19:47;;8491:92;;8537:35;;-1:-1:-1;;;8537:35:47;;;;;;;;;;;8491:92;-1:-1:-1;;;;;9010:14:47;;;8665:18;9010:14;;;:7;:14;;;;;;;;;8835:245;;;;;20813:25:161;;;20892:18;;;20885:43;;;;20964:15;;;20944:18;;;20937:43;21023:14;;21016:22;20996:18;;;20989:50;21055:19;;;21048:35;;;;21099:19;;;;21092:35;;;8835:245:47;;;;;;;;;;20785:19:161;;;8835:245:47;;;8804:294;;;;;;;;-1:-1:-1;;;8709:403:47;;;21396:27:161;21439:11;;;21432:27;;;21475:12;;;21468:28;21512:12;;8709:403:47;;;-1:-1:-1;;8709:403:47;;;;;;;;;8686:436;;8709:403;8686:436;;;;9132:14;9149:30;;;;;;;;;21762:25:161;;;21835:4;21823:17;;21803:18;;;21796:45;;;;21857:18;;;21850:34;;;21900:18;;;21893:34;;;8686:436:47;;-1:-1:-1;9132:14:47;9149:30;;21734:19:161;;9149:30:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9132:47;;9203:5;-1:-1:-1;;;;;9193:15:47;:6;-1:-1:-1;;;;;9193:15:47;;9189:58;;9217:30;;-1:-1:-1;;;9217:30:47;;;;;;;;;;;9189:58;-1:-1:-1;;;;;9302:14:47;;;;;;:7;:14;;;;;9300:16;;9302:14;;;9300:16;;;:::i;:::-;;;;-1:-1:-1;;;;;;9353:24:47;;;;;;;:17;:24;;;;;;;;:33;;;;;;;;;;;;;:45;;-1:-1:-1;;9353:45:47;;;;;;;;;;9458:41;;12638::161;;;9458::47;;12611:18:161;9458:41:47;;;;;;;8277:1229;;8021:1485;;;;;;;;;:::o;2139:692::-;-1:-1:-1;;;;;2351:18:47;;;;:38;;-1:-1:-1;;;;;;2373:16:47;;;2351:38;2347:98;;;2410:35;;-1:-1:-1;;;2410:35:47;;;;;;;;;;;2347:98;2502:27;;;2498:90;;2550:38;;-1:-1:-1;;;2550:38:47;;;;;;;;;;;2498:90;2654:9;2649:176;2669:14;;;2649:176;;;2701:54;2715:3;;2719:1;2715:6;;;;;;;:::i;:::-;;;;;;;2723:4;2729:2;2733:6;;2740:1;2733:9;;;;;;;:::i;:::-;;;;;;;2744:10;2701:13;:54::i;:::-;2797:3;;2649:176;;;;2139:692;;;;;;:::o;3182:1579::-;-1:-1:-1;;;;;3395:18:47;;;;:38;;-1:-1:-1;;;;;;3417:16:47;;;3395:38;3391:98;;;3454:35;;-1:-1:-1;;;3454:35:47;;;;;;;;;;;3391:98;3594:4;-1:-1:-1;;;;;3584:14:47;:6;-1:-1:-1;;;;;3584:14:47;;3580:888;;-1:-1:-1;;;;;3735:23:47;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;3730:728;;3845:16;3864:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;3864:33:47;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;3980:29:47;;3976:468;;4374:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;4374:33:47;;;;;;;;;;;:41;;;;;;;;;;:51;;4419:6;;4374:27;:51;;4419:6;;4374:51;:::i;:::-;;;;-1:-1:-1;;3976:468:47;3768:690;3730:728;4612:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4612:25:47;;;;;;;;;:35;;4641:6;;4612:19;:35;;4641:6;;4612:35;:::i;:::-;;;;-1:-1:-1;;4657:19:47;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;4657:23:47;;;;;;;;;:33;;4684:6;;4657:19;:33;;4684:6;;4657:33;:::i;:::-;;;;-1:-1:-1;;4705:49:47;;;22252:25:161;;;22308:2;22293:18;;22286:34;;;-1:-1:-1;;;;;4705:49:47;;;;;;;;;;;;;;22225:18:161;4705:49:47;;;;;;;3182:1579;;;;;:::o;1081:978:42:-;1196:16;512:6:98;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:98;;22533:2:161;504:34:98;;;22515:21:161;22572:2;22552:18;;;22545:30;-1:-1:-1;;;22591:18:161;;;22584:40;22641:18;;504:34:98;22331:334:161;504:34:98;558:1;549:6;:10;-1:-1:-1;;;;;1320:13:42::1;1296:37;:20;;::::0;::::1;:8:::0;:20:::1;:::i;:::-;-1:-1:-1::0;;;;;1296:37:42::1;;1292:110;;1356:35;;-1:-1:-1::0;;;1356:35:42::1;;;;;;;;;;;1292:110;1504:10;1495:20;::::0;;;:8:::1;:20;::::0;;;;;::::1;;1494:21;:64:::0;::::1;;;-1:-1:-1::0;1531:10:42::1;-1:-1:-1::0;;;;;1545:13:42::1;1531:27;;;1494:64;:105;;;;-1:-1:-1::0;1588:11:42::1;::::0;-1:-1:-1;;;;;1588:11:42::1;1574:10;:25;;1494:105;1477:191;;;1631:26;;-1:-1:-1::0;;;1631:26:42::1;;;;;;;;;;;1477:191;1780:22;::::0;;1748:29:::1;1812::::0;;;1862:42:::1;1780:22:::0;1895:8;1862:9:::1;:42::i;:::-;1851:53;;1953:13;-1:-1:-1::0;;;;;1919:133:42::1;;1980:62;2005:8;2015:16;:14;:16::i;:::-;2033:8;1980:24;:62::i;:::-;1919:133;::::0;6078:25:161;;;6066:2;6051:18;1919:133:42::1;;;;;;;-1:-1:-1::0;591:1:98;582:6;:10;1081:978:42;;-1:-1:-1;1081:978:42:o;3384:705:50:-;3459:19;2200:4;2196:14;;;-1:-1:-1;;;;;2253:120:50;;3491:20;3589:19;2253:120;3589:8;:19::i;:::-;3562:46;-1:-1:-1;3632:16:50;3622:6;:26;;;;;;;;:::i;:::-;;3618:465;;3664:23;;;;;;;;;;;;;-1:-1:-1;;;3664:23:50;;;;;3618:465;;;3718:18;3708:6;:28;;;;;;;;:::i;:::-;;3704:379;;3804:10;3767:48;;;;;;;;:::i;3704:379::-;3847:19;3837:6;:29;;;;;;;;:::i;:::-;;3833:250;;3935:10;3897:49;;;;;;;;:::i;3833:250::-;3978:29;3968:6;:39;;;;;;;;:::i;:::-;;3964:119;;4038:33;;-1:-1:-1;;;4038:33:50;;;23779:28:161;23823:12;;4038:33:50;23577:264:161;9756:590:47;9952:34;;;9971:4;9952:34;;;;24020:51:161;;;;24087:18;;;24080:34;;;;9952::47;;;;;;;;;23993:18:161;;;;9952:34:47;;9942:45;;;;;;;;;-1:-1:-1;;;;;;10126:147:47;;;24336:39:161;10190:14:47;24408:15:161;;;-1:-1:-1;;24404:53:161;24391:11;;;24384:74;24474:12;;;24467:28;10244:15:47;24511:12:161;;;;24504:28;;;;10126:147:47;;;;;;;;;;24548:12:161;;;;10126:147:47;;;10103:180;;;;;;9756:590::o;5218:301::-;5364:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;5364:35:47;;;;;;;;;;;;:45;;;;;;;;;;;;;:54;;;5478:34;;6078:25:161;;;5364:35:47;;5478:34;;6051:18:161;5478:34:47;;;;;;;5218:301;;;;:::o;5108:117:7:-;5192:26;;-1:-1:-1;;;5192:26:7;;150:4:51;5192:26:7;;;6078:25:161;5166:7:7;;5192:5;-1:-1:-1;;;;;5192:21:7;;;;6051:18:161;;5192:26:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5185:33;;5108:117;:::o;10698:945:43:-;10788:39;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10788:39:43;10848:788;;;;;;;;10903:12;:26;-1:-1:-1;;;;;10903:26:43;;;10848:788;;10960:28;;;;10848:788;;;;-1:-1:-1;;;11016:25:43;;;;;;10848:788;;;;;;;;;;;;;11111:18;10848:788;;;;11165:21;10848:788;;;;11213:12;10848:788;;;;11257:29;;;;;;;10848:788;;;;11373:36;;10848:788;;10903:26;10848:788;;;11326:97;;11373:36;;;11326:29;:97::i;:::-;10848:788;;11456:30;;-1:-1:-1;;;;;11456:30:43;;;10848:788;;;;11574:37;;10848:788;;;;;11527:98;;11574:37;11527:29;:98::i;:::-;10848:788;;10839:797;10698:945;-1:-1:-1;;10698:945:43:o;5846:342:53:-;5949:7;5969:20;5991:12;6007:56;6046:7;6007:25;:56::i;:::-;5968:95;;;;6078:7;6073:80;;6108:34;;-1:-1:-1;;;6108:34:53;;;;;;;;;;;1771:119:51;1833:7;1860:22;1871:1;1874;1877:4;1860:10;:22::i;2164:165::-;2226:7;2253:22;2264:1;2267:4;2273:1;2253:10;:22::i;2834:201:42:-;2917:11;;-1:-1:-1;;;;;2917:11:42;2903:10;:25;2899:64;;2937:26;;-1:-1:-1;;;2937:26:42;;;;;;;;;;;2899:64;-1:-1:-1;;;;;2973:13:42;;;;;;:8;:13;;;;;;:22;;-1:-1:-1;;2973:22:42;;;;;;;3010:18;;;2973:13;3010:18;2834:201;;:::o;2472:195::-;2547:11;;-1:-1:-1;;;;;2547:11:42;2533:10;:25;2529:64;;2567:26;;-1:-1:-1;;;2567:26:42;;;;;;;;;;;2529:64;2603:11;:18;;-1:-1:-1;;;;;;2603:18:42;-1:-1:-1;;;;;2603:18:42;;;;;;;;2637:23;;;;-1:-1:-1;;2637:23:42;2472:195;:::o;8094:827:43:-;8179:6;8713:12;:187;8747:135;8794:27;8847:13;8747:21;:135::i;:::-;8713:187;;;;;;;;;;;;8474:12;:186;8508:134;8555:26;8607:13;8508:21;:134::i;:::-;8474:186;;;;;;;;;;;;8450:464;;;;:::i;4247:1154:50:-;4582:26;;;4545:2;4582:26;;;;;;;;;4316:20;;4545:2;4519:23;;4545:2;4582:26;;;;;;;;;;-1:-1:-1;;4557:51:50;-1:-1:-1;4841:9:50;4848:2;4841:4;:9;:::i;:::-;4840:16;;4854:2;4840:16;:::i;:::-;4806:62;;4773:9;4783:19;4801:1;4783:15;:19;:::i;:::-;4773:30;;;;;;;;:::i;:::-;;;;:95;-1:-1:-1;;;;;4773:95:50;;;;;;;;-1:-1:-1;4878:10:50;4886:2;4878:10;;:::i;:::-;;-1:-1:-1;4915:1:50;4926:201;4933:9;;4926:201;;5039:9;5046:2;5039:4;:9;:::i;:::-;5038:16;;5052:2;5038:16;:::i;:::-;5000:70;;4958:9;4995:1;4968:24;4986:6;4968:15;:24;:::i;:::-;:28;;;;:::i;:::-;4958:39;;;;;;;;:::i;:::-;;;;:112;-1:-1:-1;;;;;4958:112:50;;;;;;;;-1:-1:-1;5084:10:50;5092:2;5084:10;;:::i;:::-;;-1:-1:-1;5108:8:50;;;;:::i;:::-;;;;4926:201;;;5298:28;;;;5283:44;5340:22;;;5283:44;4247:1154;-1:-1:-1;;4247:1154:50:o;4129:794:7:-;4253:23;4365:7;4376:1;4365:12;4361:51;;-1:-1:-1;4400:1:7;4393:8;;4361:51;4426:15;;;;;;;;:::i;:::-;4422:495;;;-1:-1:-1;;;;;4594:5:7;:12;;4624:7;4649:20;;;;:8;:20;:::i;:::-;4594:120;;-1:-1:-1;;;;;;4594:120:7;;;;;;;;;;25352:25:161;;;;-1:-1:-1;;;;;25451:15:161;25431:18;;;25424:43;4695:4:7;25483:18:161;;;25476:43;25325:18;;4594:120:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4576:138;;4422:495;;;4802:65;4837:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;4816:5:7;4802:34;;4859:7;4802:34;:65::i;:::-;-1:-1:-1;4899:7:7;;4129:794;-1:-1:-1;4129:794:7:o;22900:315:43:-;23064:7;23087:15;;;;;;;;:::i;:::-;23083:126;;;-1:-1:-1;23125:7:43;23118:14;;23083:126;23170:28;:7;23186:11;23170:15;:28::i;:::-;23163:35;;;;6600:386;6699:21;6732:24;150:4:51;6759:19:43;:17;:19::i;:::-;:25;;;;:::i;:::-;6732:52;;6826:16;6810:13;:32;:95;;6904:1;6810:95;;;6857:32;6873:16;6857:13;:32;:::i;:::-;6794:111;-1:-1:-1;6931:48:43;6955:23;150:4:51;6955:17:43;:23;:::i;:::-;6932:13;;6931:23;:48::i;6590:1166:53:-;6697:7;6706:4;7083:19;7127:20;7149:12;7165:65;7209:7;7165:26;:65::i;:::-;7126:104;;;;7249:7;7244:64;;-1:-1:-1;7284:1:53;;;;-1:-1:-1;6590:1166:53;-1:-1:-1;;;;6590:1166:53:o;7244:64::-;7488:7;:28;;;7432:30;7454:7;7432:21;:30::i;:::-;7359:21;;7352:61;;7400:13;;7352:61;:::i;:::-;:110;;;;:::i;:::-;:165;;;;:::i;:::-;7321:196;;7112:416;;7658:1;7643:12;:16;7639:64;;;-1:-1:-1;7683:1:53;;;;-1:-1:-1;6590:1166:53;-1:-1:-1;;6590:1166:53:o;7639:64::-;7729:12;7744:4;;-1:-1:-1;6590:1166:53;-1:-1:-1;;6590:1166:53:o;941:556:51:-;1057:9;1322:1;-1:-1:-1;;1305:19:51;1302:1;1299:26;1296:1;1292:34;1285:42;1272:11;1268:60;1241:146;;1371:1;1368;1361:12;1241:146;-1:-1:-1;1458:9:51;;1454:27;;941:556::o;1198:469:50:-;1309:10;-1:-1:-1;;;;;1401:10:50;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:50;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:50;1620:18;;;;1617:34;;1198:469::o;7099:223:43:-;7175:24;7277:37;7295:19;7277:15;:37;:::i;:::-;7246:69;;:15;:69;:::i;8127:6470:53:-;8235:6;8243:4;8662:23;8823:106;8878:7;:33;;;8823:7;:25;;;:33;;:106;;;;:::i;:::-;8741:32;;;;8708:24;;;;:66;;:32;:66::i;:::-;8688:255;;;;:::i;:::-;8662:281;;8953:30;8986:153;9063:7;:21;;;9102:7;:23;;;8986:59;:153::i;:::-;8953:186;;9389:1;9370:16;:20;9366:5198;;;9406:25;9442:16;9406:53;;9648:21;9671:12;9687:391;9768:7;:21;;;9811:7;:23;;;9856:7;:20;;;9898:7;:28;;;9954:7;:19;;;150:4:51;9948:25:53;;;;:::i;:::-;9995:7;:18;;;10035:7;:25;;;9687:59;:391::i;:::-;9647:431;;;;10097:7;10092:64;;-1:-1:-1;10132:1:53;;;;-1:-1:-1;8127:6470:53;-1:-1:-1;;;;;;8127:6470:53:o;10092:64::-;10333:17;10316:13;:34;10312:2034;;10370:21;10394:375;10490:22;10538:7;:20;;;10584:17;10633:7;:19;;;150:4:51;10627:25:53;;;;:::i;:::-;10678:7;:18;;;10722:7;:25;;;10394:70;:375::i;:::-;10370:399;-1:-1:-1;10795:22:53;10370:399;10795:22;:::i;:::-;10787:37;10819:4;;-1:-1:-1;8127:6470:53;-1:-1:-1;;;;;;;;8127:6470:53:o;10312:2034::-;11509:1;11482:7;:23;;;:28;11478:854;;11661:28;;;;11604:85;;:22;:85;:::i;:::-;11567:148;;;:::i;:::-;11534:233;11741:4;;-1:-1:-1;8127:6470:53;-1:-1:-1;;;;;;;8127:6470:53:o;11478:854::-;12207:28;;;;12183:21;;:52;;12207:28;12183:52;:::i;9366:5198::-;12471:1;12452:16;:20;12448:2116;;;12488:25;12524:17;12525:16;12524:17;:::i;:::-;12488:54;;12659:21;12683:252;12739:22;12779:7;:20;;;12823:7;:19;;;150:4:51;12817:25:53;;;;:::i;:::-;12860:7;:18;;;12896:7;:25;;;12683:38;:252::i;:::-;12659:276;;13113:17;13096:13;:34;13092:1462;;13150:21;13174:373;13268:22;13316:7;:20;;;13362:17;13411:7;:19;;;150:4:51;13405:25:53;;;;:::i;:::-;13456:7;:18;;;13500:7;:25;;;13174:68;:373::i;13092:1462::-;13876:23;13902:321;13987:22;14035:7;:20;;;14087:7;:19;;;150:4:51;14081:25:53;;;;:::i;:::-;14132:7;:18;;;14176:7;:25;;;13902:59;:321::i;:::-;13876:347;;14348:125;14425:7;:18;;;14369:13;14349:17;:33;;;;:::i;:::-;14348:43;;:125::i;:::-;14302:171;;:15;:171;:::i;12448:2116::-;-1:-1:-1;14582:1:53;;14585:4;;-1:-1:-1;8127:6470:53;-1:-1:-1;;;8127:6470:53:o;14887:934::-;14990:6;15647:153;15710:7;:32;;;150:4:51;15704:38:53;;;;:::i;:::-;15764:18;;;;15647:24;;;;;:153;:35;:153::i;:::-;15439:155;15503:7;:33;;;150:4:51;15497:39:53;;;;:::i;:::-;15558:18;;;;15439:25;;;;;:155;:36;:155::i;:::-;15415:399;;;;:::i;3613:340:52:-;3748:7;;3799:53;3836:16;3806:14;3799:53;:::i;:::-;3767:85;;3896:1;3870:22;:27;;3862:36;;;;;13167:1794:55;13372:7;13381:4;13678:1;13671:4;:8;13667:67;;;13717:5;13718:4;13717:5;:::i;:::-;13702:21;;:4;:21;:::i;:::-;13695:28;;13667:67;14229:10;14242:55;14289:1;14292:4;14242:46;:55::i;:::-;14229:68;;14307:9;14319:22;14325:2;14329:1;14332;14335;14338:2;14319:5;:22::i;:::-;14307:34;-1:-1:-1;14351:16:55;14374:37;14385:21;14404:1;14385:14;:2;14394:4;14385:8;:14::i;:::-;:18;;:21::i;:::-;14374:1;;14408:2;14374:10;:37::i;:::-;14370:41;;:1;:41;:::i;:::-;14351:60;;150:4:51;14425:8:55;:15;14421:295;;14539:28;14552:14;150:4:51;14564:1:55;14552:11;:14::i;:::-;14539:8;;:12;:28::i;:::-;14528:39;;14421:295;;;14679:26;14692:12;150:4:51;14702:1:55;14692:9;:12::i;14679:26::-;14668:37;;14421:295;14873:1;14862:8;:12;14858:60;;;14898:1;14901:5;14890:17;;;;;;;;;14858:60;14935:12;14946:1;14935:8;:12;:::i;:::-;14949:4;14927:27;;;;;;;13167:1794;;;;;;;;;;;:::o;7078:491::-;7268:14;7294:12;7336:141;7388:2;7404:1;7419:2;7435:1;7450;7465:2;7336:38;:141::i;:::-;7316:161;;-1:-1:-1;7316:161:55;-1:-1:-1;7316:161:55;7487:76;;7522:30;;-1:-1:-1;;;7522:30:55;;;;;;;;;;;7487:76;7284:285;7078:491;;;;;;;;:::o;11679:861::-;11838:7;12053:9;12065:20;12069:2;12073:1;12076;12079;12082:2;12065:3;:20::i;:::-;12053:32;-1:-1:-1;12095:16:55;12114:28;150:4:51;12122:13:55;:1;12132:2;12122:9;:13::i;:::-;:19;;;;:::i;:::-;12114:1;;:7;:28::i;:::-;12095:47;;150:4:51;12156:8:55;:15;12152:293;;12267:26;12280:12;150:4:51;12290:1:55;12280:9;:12::i;12267:26::-;12256:37;;12152:293;;;12406:28;12419:14;150:4:51;12431:1:55;12419:11;:14::i;12406:28::-;12395:39;;12152:293;12521:12;12525:8;12521:1;:12;:::i;:::-;12514:19;11679:861;-1:-1:-1;;;;;;;;11679:861:55:o;3719:1104::-;3907:7;4064:9;4076:20;4080:2;4084:1;4087;4090;4093:2;4076:3;:20::i;:::-;4064:32;-1:-1:-1;4139:15:55;4152:1;4140:6;4144:2;4140:1;:6;:::i;4139:15::-;4135:19;-1:-1:-1;4310:10:55;4323:23;4340:2;4344:1;4324:5;4135:19;4324:1;:5;:::i;:::-;4323:16;:23;:16;:23::i;:::-;4310:36;;150:4:51;4360:2:55;:9;4356:261;;4458:20;4465:12;150:4:51;4475:1:55;4465:9;:12::i;4458:20::-;4453:25;;4356:261;;;4584:22;4591:14;150:4:51;4603:1:55;4591:11;:14::i;4584:22::-;4579:27;;4356:261;4699:12;:2;4708;4699:8;:12::i;:::-;4694:17;-1:-1:-1;4809:7:55;4814:2;4694:17;4809:7;:::i;:::-;4802:14;3719:1104;-1:-1:-1;;;;;;;;;3719:1104:55:o;9985:1218::-;10144:7;10659:9;10671:22;10677:2;10681:1;10684;10687;10690:2;10671:5;:22::i;:::-;10659:34;-1:-1:-1;10703:17:55;10723:28;150:4:51;10733:11:55;:1;10741:2;10733:7;:11::i;:::-;:17;;;;:::i;10723:28::-;10703:48;;150:4:51;10765:9:55;:16;10761:300;;10881:29;10895:14;150:4:51;10907:1:55;10895:11;:14::i;10881:29::-;10869:41;;10761:300;;;11023:27;11037:12;150:4:51;11047:1:55;11037:9;:12::i;11023:27::-;11011:39;;10761:300;11082:21;:9;11100:2;11082:17;:21::i;:::-;11070:33;-1:-1:-1;11182:14:55;11194:2;11070:33;11182:14;:::i;16232:281::-;16373:7;16498:8;:1;16504;16498:5;:8::i;:::-;16456:39;16469:21;16488:1;16469:14;:2;16480;16469:10;:14::i;:21::-;16456:1;;16492:2;16456:12;:39::i;:::-;:50;;;;:::i;:::-;16449:57;16232:281;-1:-1:-1;;;;;;16232:281:55:o;3707:115:51:-;3767:7;3794:20;3803:1;3806;3809:4;3794:8;:20::i;4628:840::-;4686:7;4752:1;4757;4752:6;4748:47;;-1:-1:-1;150:4:51;4774:10;;4748:47;4848:1;4853;4848:6;4844:45;;-1:-1:-1;4877:1:51;4870:8;;4844:45;5052:1;5027:15;5230:14;5241:1;5230:3;:14::i;:::-;5217:27;-1:-1:-1;5322:18:51;;;5359:19;150:4;5322:18;5359:19;:::i;:::-;;;5451:9;5455:4;5451:3;:9::i;2683:748::-;2797:9;3062:1;-1:-1:-1;;3045:19:51;3042:1;3039:26;3036:1;3032:34;3025:42;3012:11;3008:60;2981:146;;3111:1;3108;3101:12;2981:146;-1:-1:-1;3378:9:51;;3325:27;;;3322:34;;3374:27;;;3301:114;;2683:748::o;4098:115::-;4158:7;4185:20;4194:1;4197:4;4203:1;4185:8;:20::i;8246:1320:55:-;8440:14;8456:12;8618:9;8630:20;8634:2;8638:1;8641;8644;8647:2;8630:3;:20::i;:::-;8618:32;-1:-1:-1;8693:15:55;8706:1;8694:6;8698:2;8694:1;:6;:::i;8693:15::-;8689:19;;8790:1;8786;:5;8782:53;;;8815:1;8818:5;8807:17;;;;;;;8782:53;8990:10;9003:23;9020:2;9024:1;9004:5;9008:1;9004;:5;:::i;9003:23::-;8990:36;;150:4:51;9040:2:55;:9;9036:263;;9139:20;9146:12;150:4:51;9156:1:55;9146:9;:12::i;9139:20::-;9134:25;;9036:263;;;9266:22;9273:14;150:4:51;9285:1:55;9273:11;:14::i;9266:22::-;9261:27;;9036:263;9381:12;:2;9390;9381:8;:12::i;:::-;9376:17;;9491:2;9486;:7;9482:54;;;9518:7;9523:2;9518;:7;:::i;:::-;9509:16;;9482:54;9555:4;9545:14;;8470:1096;;8246:1320;;;;;;;;;;:::o;15456:275::-;15595:7;15716:8;:1;15722;15716:5;:8::i;:::-;15678:35;15689:19;15706:1;15689:12;:2;15698;15689:8;:12::i;:19::-;15678:1;;15710:2;15678:10;:35::i;9583:3592:51:-;9628:8;9681:1;9676;:6;9672:60;;9691:41;;-1:-1:-1;;;9691:41:51;;;;;;;;;;;9672:60;-1:-1:-1;10698:2:51;-1:-1:-1;;;;;;;10109:1:51;10105:49;10212:9;;;10192:18;10189:33;10186:1;10182:41;10176:48;10274:9;;;10262:10;10259:25;10256:1;10252:33;10246:40;10332:9;;;10324:6;10321:21;10318:1;10314:29;10308:36;10388:9;;;10382:4;10379:19;10376:1;10372:27;;;10366:34;;;10443:9;;;10438:3;10435:18;10432:1;10428:26;10422:33;10498:9;;;10490:18;;;10487:1;10483:26;;;10477:33;;;10546:9;;;10538:18;;;10532:25;10728:3;:7;;;;;10714:22;;;;10761:17;;;11554:31;11550:35;;11605:5;;11604:13;;11621:32;11603:50;11673:5;;11672:13;;11689:33;11671:51;11742:5;;11741:13;;11758:33;11740:51;11811:5;;11810:13;;11827:33;11809:51;11880:5;;11879:13;;11896:32;11878:50;11948:5;;11947:13;;11964:30;11946:48;10951:31;10947:35;;11002:5;;11001:13;;11018:32;11000:50;11070:5;;11069:13;;11086:32;11068:50;11138:5;;11137:13;;-1:-1:-1;;11136:50:51;11206:5;;11205:13;;-1:-1:-1;;11204:50:51;11274:5;;11273:13;;;-1:-1:-1;;11272:50:51;11340:5;-1:-1:-1;;11340:46:51;12335:10;12725:43;12720:48;-1:-1:-1;;10694:6:51;;;;12848:71;:91;12827:112;13012:72;13007:77;13155:3;13149:9;;9583:3592::o;5724:3347::-;5770:8;-1:-1:-1;;5947:1:51;:26;5943:40;;-1:-1:-1;5982:1:51;;5724:3347;-1:-1:-1;5724:3347:51:o;5943:40::-;6182:21;6177:1;:26;6173:99;;6228:44;;-1:-1:-1;;;6228:44:51;;;;;;;;;;;6173:99;6545:7;6539:2;6534:7;;;6533:19;;-1:-1:-1;6881:8:51;6965:2;6905:29;6894:7;;;6893:41;-1:-1:-1;;;6893:51:51;6892:75;;6993:29;6989:33;;6985:37;;;-1:-1:-1;;7664:35:51;;7719:5;;7299:2;7718:13;;;7735:32;7717:50;7787:5;;7786:13;;-1:-1:-1;;7785:51:51;7856:5;;7855:13;;7872:34;7854:52;7926:5;;7925:13;;-1:-1:-1;;7924:53:51;7997:5;;7996:13;;8013:35;7995:53;7305:32;7238:31;7234:35;;7289:5;;7288:13;;7287:50;;;7362:5;;;-1:-1:-1;;7362:40:51;7422:5;7421:13;;;7438:35;7420:53;7491:5;;;-1:-1:-1;;;7491:50:51;8413:10;8950:49;8917:82;9032:3;:7;;;;8916:124;;;;;;-1:-1:-1;;5724:3347:51:o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:180:161:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:161;;14:180;-1:-1:-1;14:180:161:o;199:250::-;284:1;294:113;308:6;305:1;302:13;294:113;;;384:11;;;378:18;365:11;;;358:39;330:2;323:10;294:113;;;-1:-1:-1;;441:1:161;423:16;;416:27;199:250::o;454:271::-;496:3;534:5;528:12;561:6;556:3;549:19;577:76;646:6;639:4;634:3;630:14;623:4;616:5;612:16;577:76;:::i;:::-;707:2;686:15;-1:-1:-1;;682:29:161;673:39;;;;714:4;669:50;;454:271;-1:-1:-1;;454:271:161:o;730:220::-;879:2;868:9;861:21;842:4;899:45;940:2;929:9;925:18;917:6;899:45;:::i;955:139::-;-1:-1:-1;;;;;1038:31:161;;1028:42;;1018:70;;1084:1;1081;1074:12;1099:270;1173:6;1226:2;1214:9;1205:7;1201:23;1197:32;1194:52;;;1242:1;1239;1232:12;1194:52;1281:9;1268:23;1300:39;1333:5;1300:39;:::i;1374:160::-;1439:20;;1495:13;;1488:21;1478:32;;1468:60;;1524:1;1521;1514:12;1539:180;1595:6;1648:2;1636:9;1627:7;1623:23;1619:32;1616:52;;;1664:1;1661;1654:12;1616:52;1687:26;1703:9;1687:26;:::i;1724:983::-;1850:6;1858;1866;1874;1882;1890;1898;1906;1914;1967:3;1955:9;1946:7;1942:23;1938:33;1935:53;;;1984:1;1981;1974:12;1935:53;2020:9;2007:23;1997:33;;2077:2;2066:9;2062:18;2049:32;2039:42;;2131:2;2120:9;2116:18;2103:32;2144:39;2177:5;2144:39;:::i;:::-;2202:5;-1:-1:-1;2259:2:161;2244:18;;2231:32;2272:41;2231:32;2272:41;:::i;:::-;2332:7;-1:-1:-1;2358:36:161;2389:3;2374:19;;2358:36;:::i;:::-;2348:46;;2441:3;2430:9;2426:19;2413:33;2403:43;;2498:3;2487:9;2483:19;2470:33;2547:4;2538:7;2534:18;2525:7;2522:31;2512:59;;2567:1;2564;2557:12;2512:59;2590:7;2580:17;;;2644:3;2633:9;2629:19;2616:33;2606:43;;2696:3;2685:9;2681:19;2668:33;2658:43;;1724:983;;;;;;;;;;;:::o;3056:367::-;3119:8;3129:6;3183:3;3176:4;3168:6;3164:17;3160:27;3150:55;;3201:1;3198;3191:12;3150:55;-1:-1:-1;3224:20:161;;3267:18;3256:30;;3253:50;;;3299:1;3296;3289:12;3253:50;3336:4;3328:6;3324:17;3312:29;;3396:3;3389:4;3379:6;3376:1;3372:14;3364:6;3360:27;3356:38;3353:47;3350:67;;;3413:1;3410;3403:12;3350:67;3056:367;;;;;:::o;3428:1066::-;3568:6;3576;3584;3592;3600;3608;3661:3;3649:9;3640:7;3636:23;3632:33;3629:53;;;3678:1;3675;3668:12;3629:53;3717:9;3704:23;3736:39;3769:5;3736:39;:::i;:::-;3794:5;-1:-1:-1;3851:2:161;3836:18;;3823:32;3864:41;3823:32;3864:41;:::i;:::-;3924:7;-1:-1:-1;3982:2:161;3967:18;;3954:32;4005:18;4035:14;;;4032:34;;;4062:1;4059;4052:12;4032:34;4101:70;4163:7;4154:6;4143:9;4139:22;4101:70;:::i;:::-;4190:8;;-1:-1:-1;4075:96:161;-1:-1:-1;4278:2:161;4263:18;;4250:32;;-1:-1:-1;4294:16:161;;;4291:36;;;4323:1;4320;4313:12;4291:36;;4362:72;4426:7;4415:8;4404:9;4400:24;4362:72;:::i;:::-;3428:1066;;;;-1:-1:-1;3428:1066:161;;-1:-1:-1;3428:1066:161;;4453:8;;3428:1066;-1:-1:-1;;;3428:1066:161:o;4499:541::-;4585:6;4593;4601;4609;4662:3;4650:9;4641:7;4637:23;4633:33;4630:53;;;4679:1;4676;4669:12;4630:53;4715:9;4702:23;4692:33;;4775:2;4764:9;4760:18;4747:32;4788:39;4821:5;4788:39;:::i;:::-;4846:5;-1:-1:-1;4903:2:161;4888:18;;4875:32;4916:41;4875:32;4916:41;:::i;:::-;4499:541;;;;-1:-1:-1;4976:7:161;;5030:2;5015:18;5002:32;;-1:-1:-1;;4499:541:161:o;5455:472::-;5532:6;5540;5548;5601:2;5589:9;5580:7;5576:23;5572:32;5569:52;;;5617:1;5614;5607:12;5569:52;5653:9;5640:23;5630:33;;5713:2;5702:9;5698:18;5685:32;5726:39;5759:5;5726:39;:::i;:::-;5784:5;-1:-1:-1;5841:2:161;5826:18;;5813:32;5854:41;5813:32;5854:41;:::i;:::-;5914:7;5904:17;;;5455:472;;;;;:::o;6114:323::-;6182:6;6190;6243:2;6231:9;6222:7;6218:23;6214:32;6211:52;;;6259:1;6256;6249:12;6211:52;6295:9;6282:23;6272:33;;6355:2;6344:9;6340:18;6327:32;6368:39;6401:5;6368:39;:::i;:::-;6426:5;6416:15;;;6114:323;;;;;:::o;6442:386::-;6528:6;6581:2;6569:9;6560:7;6556:23;6552:32;6549:52;;;6597:1;6594;6587:12;6549:52;6637:9;6624:23;6670:18;6662:6;6659:30;6656:50;;;6702:1;6699;6692:12;6656:50;6725:22;;6781:2;6763:16;;;6759:25;6756:45;;;6797:1;6794;6787:12;6833:541;6919:6;6927;6935;6943;6996:3;6984:9;6975:7;6971:23;6967:33;6964:53;;;7013:1;7010;7003:12;6964:53;7049:9;7036:23;7026:33;;7109:2;7098:9;7094:18;7081:32;7122:39;7155:5;7122:39;:::i;:::-;7180:5;-1:-1:-1;7232:2:161;7217:18;;7204:32;;-1:-1:-1;7288:2:161;7273:18;;7260:32;7301:41;7260:32;7301:41;:::i;:::-;6833:541;;;;-1:-1:-1;6833:541:161;;-1:-1:-1;;6833:541:161:o;7379:1182::-;7596:13;;7578:32;;7666:4;7654:17;;;7648:24;7626:20;;;7619:54;7729:4;7717:17;;;7711:24;7689:20;;;7682:54;7792:4;7780:17;;;7774:24;7752:20;;;7745:54;7855:4;7843:17;;;7837:24;7815:20;;;7808:54;7918:4;7906:17;;;7900:24;7878:20;;;7871:54;7981:4;7969:17;;;7963:24;7941:20;;;7934:54;8044:4;8032:17;;;8026:24;8004:20;;;7997:54;8070:6;8118:15;;;8112:22;8092:18;;;8085:50;8154:6;8202:15;;;8196:22;8176:18;;;8169:50;8238:6;8286:15;;;8280:22;8260:18;;;8253:50;8322:6;8370:15;;;8364:22;8344:18;;;8337:50;8406:6;8454:15;;;8448:22;8428:18;;;8421:50;8490:6;8538:15;;;8532:22;8512:18;;;8505:50;;;;7565:3;7550:19;;7379:1182::o;8566:323::-;8631:6;8639;8692:2;8680:9;8671:7;8667:23;8663:32;8660:52;;;8708:1;8705;8698:12;8660:52;8747:9;8734:23;8766:39;8799:5;8766:39;:::i;:::-;8824:5;-1:-1:-1;8848:35:161;8879:2;8864:18;;8848:35;:::i;:::-;8838:45;;8566:323;;;;;:::o;9154:391::-;9231:6;9239;9247;9300:2;9288:9;9279:7;9275:23;9271:32;9268:52;;;9316:1;9313;9306:12;9268:52;9352:9;9339:23;9329:33;;9412:2;9401:9;9397:18;9384:32;9425:39;9458:5;9425:39;:::i;:::-;9154:391;;9483:5;;-1:-1:-1;;;9535:2:161;9520:18;;;;9507:32;;9154:391::o;9812:1298::-;10044:13;;-1:-1:-1;;;;;2788:31:161;2776:44;;10002:3;9987:19;;10116:4;10108:6;10104:17;10098:24;10131:64;10189:4;10178:9;10174:20;10160:12;-1:-1:-1;;;;;2788:31:161;2776:44;;2712:114;10131:64;;10251:4;10243:6;10239:17;10233:24;10226:4;10215:9;10211:20;10204:54;10314:4;10306:6;10302:17;10296:24;10289:4;10278:9;10274:20;10267:54;10377:4;10369:6;10365:17;10359:24;10352:4;10341:9;10337:20;10330:54;10440:4;10432:6;10428:17;10422:24;10415:4;10404:9;10400:20;10393:54;10503:4;10495:6;10491:17;10485:24;10478:4;10467:9;10463:20;10456:54;10566:4;10558:6;10554:17;10548:24;10541:4;10530:9;10526:20;10519:54;10592:6;10652:2;10644:6;10640:15;10634:22;10629:2;10618:9;10614:18;10607:50;;10676:6;10731:2;10723:6;10719:15;10713:22;10744:64;10804:2;10793:9;10789:18;10773:14;-1:-1:-1;;;;;2788:31:161;2776:44;;2712:114;10744:64;-1:-1:-1;;10827:6:161;10870:15;;;10864:22;-1:-1:-1;;;;;2788:31:161;10940:18;;;2776:44;10978:6;11021:15;;;11015:22;9620:12;;11085:18;;;9608:25;9682:4;9671:16;;9665:23;9649:14;;;9642:47;9738:4;9727:16;;9721:23;9705:14;;;9698:47;9794:4;9783:16;;9777:23;9761:14;;;9754:47;11046:58;;;9812:1298;;;;:::o;11115:437::-;11201:6;11209;11262:2;11250:9;11241:7;11237:23;11233:32;11230:52;;;11278:1;11275;11268:12;11230:52;11318:9;11305:23;11351:18;11343:6;11340:30;11337:50;;;11383:1;11380;11373:12;11337:50;11422:70;11484:7;11475:6;11464:9;11460:22;11422:70;:::i;:::-;11511:8;;11396:96;;-1:-1:-1;11115:437:161;-1:-1:-1;;;;11115:437:161:o;11557:632::-;11728:2;11780:21;;;11850:13;;11753:18;;;11872:22;;;11699:4;;11728:2;11951:15;;;;11925:2;11910:18;;;11699:4;11994:169;12008:6;12005:1;12002:13;11994:169;;;12069:13;;12057:26;;12138:15;;;;12103:12;;;;12030:1;12023:9;11994:169;;;-1:-1:-1;12180:3:161;;11557:632;-1:-1:-1;;;;;;11557:632:161:o;12968:1507::-;13192:13;;-1:-1:-1;;;;;5111:46:161;5099:59;;13160:3;13145:19;;13264:4;13256:6;13252:17;13246:24;13279:54;13327:4;13316:9;13312:20;13298:12;-1:-1:-1;;;;;5111:46:161;5099:59;;5045:119;13279:54;;13382:4;13374:6;13370:17;13364:24;13397:55;13446:4;13435:9;13431:20;13415:14;12946:2;12935:21;12923:34;;12870:93;13397:55;;13501:4;13493:6;13489:17;13483:24;13516:56;13566:4;13555:9;13551:20;13535:14;-1:-1:-1;;;;;5111:46:161;5099:59;;5045:119;13516:56;;13621:4;13613:6;13609:17;13603:24;13636:56;13686:4;13675:9;13671:20;13655:14;-1:-1:-1;;;;;5111:46:161;5099:59;;5045:119;13636:56;;13741:4;13733:6;13729:17;13723:24;13756:56;13806:4;13795:9;13791:20;13775:14;-1:-1:-1;;;;;5111:46:161;5099:59;;5045:119;13756:56;;13861:4;13853:6;13849:17;13843:24;13876:56;13926:4;13915:9;13911:20;13895:14;-1:-1:-1;;;;;5111:46:161;5099:59;;5045:119;13876:56;;13981:4;13973:6;13969:17;13963:24;13996:56;14046:4;14035:9;14031:20;14015:14;-1:-1:-1;;;;;5111:46:161;5099:59;;5045:119;13996:56;-1:-1:-1;14071:6:161;14114:15;;;14108:22;-1:-1:-1;;;;;5111:46:161;14174:18;;;5099:59;14212:6;14255:15;;;14249:22;12472:13;12465:21;14312:18;;;12453:34;14350:6;14393:15;;;14387:22;12472:13;;12465:21;14450:18;;;12453:34;14418:51;12402:91;14480:691;14575:6;14583;14591;14599;14607;14660:3;14648:9;14639:7;14635:23;14631:33;14628:53;;;14677:1;14674;14667:12;14628:53;14713:9;14700:23;14690:33;;14773:2;14762:9;14758:18;14745:32;14786:39;14819:5;14786:39;:::i;:::-;14844:5;-1:-1:-1;14901:2:161;14886:18;;14873:32;14914:41;14873:32;14914:41;:::i;:::-;14974:7;-1:-1:-1;15028:2:161;15013:18;;15000:32;;-1:-1:-1;15084:3:161;15069:19;;15056:33;15098:41;15056:33;15098:41;:::i;:::-;15158:7;15148:17;;;14480:691;;;;;;;;:::o;15176:404::-;15244:6;15252;15305:2;15293:9;15284:7;15280:23;15276:32;15273:52;;;15321:1;15318;15311:12;15273:52;15360:9;15347:23;15379:39;15412:5;15379:39;:::i;:::-;15437:5;-1:-1:-1;15494:2:161;15479:18;;15466:32;15507:41;15466:32;15507:41;:::i;15968:184::-;16038:6;16091:2;16079:9;16070:7;16066:23;16062:32;16059:52;;;16107:1;16104;16097:12;16059:52;-1:-1:-1;16130:16:161;;15968:184;-1:-1:-1;15968:184:161:o;16440:127::-;16501:10;16496:3;16492:20;16489:1;16482:31;16532:4;16529:1;16522:15;16556:4;16553:1;16546:15;16572:127;16633:10;16628:3;16624:20;16621:1;16614:31;16664:4;16661:1;16654:15;16688:4;16685:1;16678:15;16704:125;16769:9;;;16790:10;;;16787:36;;;16803:18;;:::i;16834:128::-;16901:9;;;16922:11;;;16919:37;;;16936:18;;:::i;16967:127::-;17028:10;17023:3;17019:20;17016:1;17009:31;17059:4;17056:1;17049:15;17083:4;17080:1;17073:15;17099:127;17160:10;17155:3;17151:20;17148:1;17141:31;17191:4;17188:1;17181:15;17215:4;17212:1;17205:15;17454:1314;17673:13;;-1:-1:-1;;;;;17767:18:161;;;5099:59;;17816:3;17847:18;;;17882:4;17867:20;;5099:59;17934:4;17922:17;;17916:24;17978:2;17967:27;;;18011:4;17996:20;;12923:34;18045:20;;18082:4;18067:20;;5099:59;18134:4;18122:17;;18116:24;18168:20;;;18190:18;;;5099:59;18237:20;;18274:4;18259:20;;5099:59;18326:4;18314:17;;18308:24;18360:20;;;18397:4;18382:20;;5099:59;18431:20;;18468:4;18453:20;;5099:59;18520:4;18508:17;;18502:24;18554:20;;;18591:6;18576:22;;5099:59;18628:20;;;;18650:4;18624:31;;;12472:13;12465:21;18672:6;18657:22;;12453:34;18713:3;18709:21;;;18705:32;12472:13;12465:21;18754:6;18739:22;;12453:34;17643:3;17628:19;;;18689:73;12402:91;18773:449;-1:-1:-1;;;19030:3:161;19023:32;19005:3;19084:6;19078:13;19100:75;19168:6;19163:2;19158:3;19154:12;19147:4;19139:6;19135:17;19100:75;:::i;:::-;19195:16;;;;19213:2;19191:25;;18773:449;-1:-1:-1;;18773:449:161:o;19227:450::-;-1:-1:-1;;;19484:3:161;19477:33;19459:3;19539:6;19533:13;19555:75;19623:6;19618:2;19613:3;19609:12;19602:4;19594:6;19590:17;19555:75;:::i;:::-;19650:16;;;;19668:2;19646:25;;19227:450;-1:-1:-1;;19227:450:161:o;21938:135::-;21977:3;21998:17;;;21995:43;;22018:18;;:::i;:::-;-1:-1:-1;22065:1:161;22054:13;;21938:135::o;22670:448::-;-1:-1:-1;;;22927:3:161;22920:31;22902:3;22980:6;22974:13;22996:75;23064:6;23059:2;23054:3;23050:12;23043:4;23035:6;23031:17;22996:75;:::i;:::-;23091:16;;;;23109:2;23087:25;;22670:448;-1:-1:-1;;22670:448:161:o;23123:449::-;-1:-1:-1;;;23380:3:161;23373:32;23355:3;23434:6;23428:13;23450:75;23518:6;23513:2;23508:3;23504:12;23497:4;23489:6;23485:17;23450:75;:::i;24571:200::-;24637:9;;;24610:4;24665:9;;24693:10;;24705:12;;;24689:29;24728:12;;;24720:21;;24686:56;24683:82;;;24745:18;;:::i;24776:127::-;24837:10;24832:3;24828:20;24825:1;24818:31;24868:4;24865:1;24858:15;24892:4;24889:1;24882:15;24908:112;24940:1;24966;24956:35;;24971:18;;:::i;:::-;-1:-1:-1;25005:9:161;;24908:112::o;25025:120::-;25065:1;25091;25081:35;;25096:18;;:::i;:::-;-1:-1:-1;25130:9:161;;25025:120::o;25530:168::-;25603:9;;;25634;;25651:15;;;25645:22;;25631:37;25621:71;;25672:18;;:::i;25703:216::-;25767:9;;;25795:11;;;25742:3;25825:9;;25853:10;;25849:19;;25878:10;;25870:19;;25846:44;25843:70;;;25893:18;;:::i;25924:136::-;25959:3;-1:-1:-1;;;25980:22:161;;25977:48;;26005:18;;:::i;:::-;-1:-1:-1;26045:1:161;26041:13;;25924:136::o;26065:193::-;26104:1;26130;26120:35;;26135:18;;:::i;:::-;-1:-1:-1;;;26171:18:161;;-1:-1:-1;;26191:13:161;;26167:38;26164:64;;;26208:18;;:::i;:::-;-1:-1:-1;26242:10:161;;26065:193::o",
    "linkReferences": {},
    "immutableReferences": {
      "2658": [
        {
          "start": 1597,
          "length": 32
        },
        {
          "start": 6823,
          "length": 32
        },
        {
          "start": 8013,
          "length": 32
        },
        {
          "start": 8215,
          "length": 32
        }
      ],
      "9815": [
        {
          "start": 2722,
          "length": 32
        },
        {
          "start": 3578,
          "length": 32
        }
      ],
      "9818": [
        {
          "start": 3006,
          "length": 32
        },
        {
          "start": 8638,
          "length": 32
        }
      ],
      "9821": [
        {
          "start": 2968,
          "length": 32
        },
        {
          "start": 3721,
          "length": 32
        },
        {
          "start": 8383,
          "length": 32
        }
      ],
      "9824": [
        {
          "start": 3044,
          "length": 32
        },
        {
          "start": 7177,
          "length": 32
        }
      ],
      "9827": [
        {
          "start": 3176,
          "length": 32
        }
      ],
      "9830": [
        {
          "start": 3214,
          "length": 32
        }
      ],
      "9833": [
        {
          "start": 3252,
          "length": 32
        }
      ],
      "9836": [
        {
          "start": 3290,
          "length": 32
        }
      ],
      "9839": [
        {
          "start": 2854,
          "length": 32
        },
        {
          "start": 7101,
          "length": 32
        }
      ],
      "9842": [
        {
          "start": 2892,
          "length": 32
        },
        {
          "start": 7139,
          "length": 32
        }
      ],
      "9845": [
        {
          "start": 2930,
          "length": 32
        }
      ],
      "9862": [
        {
          "start": 1230,
          "length": 32
        },
        {
          "start": 1502,
          "length": 32
        },
        {
          "start": 3118,
          "length": 32
        },
        {
          "start": 5900,
          "length": 32
        },
        {
          "start": 6022,
          "length": 32
        },
        {
          "start": 6132,
          "length": 32
        }
      ],
      "9876": [
        {
          "start": 2769,
          "length": 32
        },
        {
          "start": 6555,
          "length": 32
        }
      ],
      "9879": [
        {
          "start": 2816,
          "length": 32
        },
        {
          "start": 6616,
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
    "getCheckpointExposure(uint256)": "cf210e65",
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
    "permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)": "14e5f07b",
    "pool()": "16f0115b",
    "setApproval(uint256,address,uint256)": "9cd241af",
    "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
    "setApprovalForAll(address,bool)": "a22cb465",
    "setGovernance(address)": "ab033ea9",
    "setPauser(address,bool)": "7180c8ca",
    "sweep(address)": "01681a62",
    "symbol(uint256)": "4e41a1fb",
    "totalSupply(uint256)": "bd85b039",
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"},{\"internalType\":\"contract IERC4626\",\"name\":\"__pool\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeDestination\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsupportedToken\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointId\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"sharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_target\",\"type\":\"address\"}],\"name\":\"isSweepable\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"domainSeparator\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"permitTypeHash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pool\",\"outputs\":[{\"internalType\":\"contract IERC4626\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_target\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"account\":\"The account.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The balance.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"the source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"the destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The amount of base collected.\"}},\"constructor\":{\"params\":{\"__pool\":\"The ERC4626 pool.\",\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointId\":\"The checkpoint ID.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getCheckpointExposure(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint exposure.\"}},\"getMarketState()\":{\"returns\":{\"_0\":\"The market state.\"}},\"getPoolConfig()\":{\"details\":\"These parameters are immutable, so this should only need to be      called once.\",\"returns\":{\"_0\":\"The PoolConfig struct.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The PoolInfo struct.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"Governance fees denominated in shares yet to be collected.\"}},\"getWithdrawPool()\":{\"returns\":{\"_0\":\"Hyperdrive's withdrawal pool information.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"account\":\"The account.\",\"operator\":\"The operator.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"isSweepable(address)\":{\"params\":{\"_target\":\"The target address.\"}},\"load(uint256[])\":{\"params\":{\"_slots\":\"The storage slots the caller wants the data from.\"},\"returns\":{\"_0\":\"A raw array of loaded data.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The name.\"}},\"nonces(address)\":{\"params\":{\"account\":\"The account.\"},\"returns\":{\"_0\":\"The signature nonce.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"account\":\"The account.\",\"spender\":\"The spender.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"domainSeparator\":\"The EIP712 domain separator of the contract.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"permitTypeHash\":\"The EIP712 domain separator of the contract.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"pool()\":{\"returns\":{\"_0\":\"The 4626 pool.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"sweep(address)\":{\"details\":\"WARN: The entire balance of any of the sweep targets can be swept      by governance. If these sweep targets provide access to the base or      pool token, then governance has the ability to rug the pool.WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The token to sweep.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The symbol.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The total supply.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address who's balance will be reduced.\",\"to\":\"The address who's balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender from the bridge.\",\"from\":\"The address who's balance will be reduced.\",\"to\":\"The address who's balance will be increased.\",\"tokenID\":\"The token identifier.\"}}},\"title\":\"ERC4626Target0\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"###################### ### ERC20Forwarder ### ######################\"}],\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}],\"ReturnData(bytes)\":[{\"notice\":\"#################### ### DataProvider ### ####################\"}],\"Unauthorized()\":[{\"notice\":\"############### ### Factory ### ###############\"}]},\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets an account's balance of a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the base token.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Initializes the target0 contract.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets a specified checkpoint.\"},\"getCheckpointExposure(uint256)\":{\"notice\":\"Gets the checkpoint exposure at a specified time.\"},\"getMarketState()\":{\"notice\":\"Gets the market state.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets info about the fees presently accrued by the pool.\"},\"getWithdrawPool()\":{\"notice\":\"Gets information about the withdrawal pool.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"isSweepable(address)\":{\"notice\":\"Gets the sweepable status of a target.\"},\"load(uint256[])\":{\"notice\":\"Allows plugin data libs to provide getters or other complex         logic instead of the main.\"},\"name(uint256)\":{\"notice\":\"Gets the name of a sub-token.\"},\"nonces(address)\":{\"notice\":\"Gets the permitForAll signature nonce for an account.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature.\"},\"pool()\":{\"notice\":\"Gets the 4626 pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"sweep(address)\":{\"notice\":\"Some yield sources [eg Morpho] pay rewards directly to this         contract but we can't handle distributing them internally so we         sweep to the fee collector address to then redistribute to users.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of a sub-token.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of a sub-token.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"notice\":\"ERC4626Hyperdrive's target 0 logic contract. This contract contains         all of the getters for Hyperdrive as well as some stateful         functions.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/ERC4626Target0.sol\":\"ERC4626Target0\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0xe5889a0b6c43131543029af4368ee0ac4631b8281425766e07a38b590eecb8db\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://80497d157827cab2d7cefb429e9d1e2ac977ed8d1435a03c1b5d0f4d0d1861ba\",\"dweb:/ipfs/QmcW4fVGHaaRa5MYDaajynxj1uU3mcAauBVXfmJCi3FbMq\"]},\"contracts/src/instances/ERC4626Base.sol\":{\"keccak256\":\"0xc5e11f70a3e769fd322e4f02858a46f92c8434623a9af5c2454e0efba7fd9e7f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://658dd5495159b0e0c00d5d9b6ac8bd7b699cfbf0f429b3c6fdd6b8505010ce37\",\"dweb:/ipfs/QmSVi7t74sawCx4AqA1Mr9zLLps8R8vGbqfkTs4V9jVjgx\"]},\"contracts/src/instances/ERC4626Target0.sol\":{\"keccak256\":\"0xd47a4b1bbcbde29b41993088161903382cf5817f0d8218eef480867d120eebaa\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6ad667e6391215db447963eabeb628fd04b6344de6281bb28fcde63c97d6d134\",\"dweb:/ipfs/QmUp2p2YcJeMrCLEASy6GXdCHQn3eesqqrZkDt8wJemPag\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc\",\"dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0xe7076ded0fe36ac72c946258bc3183bebb6f1567cd0ce5d55720de84988f5312\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b84d02ec55ccbee1491ce25a2b890e7c371dd251cb69c2cc818179e49ddef780\",\"dweb:/ipfs/QmcXWYPF2Hy6w3TLqmegYiUj5pL9i9PqH44USV4Px9sk2k\"]},\"contracts/src/interfaces/IERC4626HyperdriveCore.sol\":{\"keccak256\":\"0xcea74eaf829d241754f74a8c2223fef0ec83459252d2aaedcd860bae538620c9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://464f58076e112b73957147b2abb52c85b1b806b306fa2d490d0e74f993ffe5a8\",\"dweb:/ipfs/QmNf3EACwEDsB7X1G1geLeqenR1xJHd9zGvSeZJ9f2nSmp\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0xa63f6d3d8b87fcf27202f4ea8609762ef695b9919e4907522930738eb2dcde7e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db88312fa9fed33207e1974d91f714ed8cbbe4a4a1d0e54a6ee5c15a8949f4fb\",\"dweb:/ipfs/QmSYCCuc6Xkh6oibhW5ovdQRhvT5nV4Hxj3Q2xEhjzYyWE\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8\",\"dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17\",\"dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x21d3173693bcb6ba589a0cda73f57c3c06af39af22308e3b3142f9e639f526e4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://54aacd825c1fbc109428040e43dd45f531a769c016e8362311bf18e209a34a0e\",\"dweb:/ipfs/QmV1CwV1MUREgLn83CEykLybihbM1f1ogh8p2Y6owZv91e\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0xb9ab7ab09e4e95f5e187418921f41f3b6d652c5a0889624b660495491ffc4148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7a05317c1fd4996fece6de20a672006163f31f9ae32fa23a855bbe8e89f573f2\",\"dweb:/ipfs/Qmf5kG78Za6KjSyRXeE8dFqdAE4T3BxhRQUXFKUkuuGGqK\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0xbdd9d63dcc57a2f23d2fd66a3f0440a220fb31664a1d99443a9e80b053393261\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6a16611ca56bf2c2360d39bfc9611d547b9ac76c80c9560e0a33a89958ee6eca\",\"dweb:/ipfs/QmQJUCU7HgydjvdKtJVte3wHitgwaK3BG6cN3FBm9FM5sy\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x863819651e0c159fc8aa27a357458c9ef3cd641287ff80382f566b6f839f795d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5b4675409abd6f0361b568e0912a8c430e601dbbae68961ca5d5ac5d5dcc3b8a\",\"dweb:/ipfs/QmRgL5Nvsb425tUxqMkC8tqHwyDzW5qmkf7UB2pkwf87uU\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xbcf204d47761b8da37b0dd1ac6a7a3226d98ad95972acdf9300476a3010b95e2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://756faa29691a56068a330d2de06febe4b7c286ee8ddaee40b1670e723350fbb0\",\"dweb:/ipfs/QmTixXWCvS5uLH6dd3U2PWKya9YZuEm5duNRGdQBDzwo6V\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x61b9f8eb5795fda17a5c35264f53879a7ef022e02b865b015bdb9f5811db6ba5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9498f4bfd969d78634da2b0a89b10f88ac467f52d565d9b62561dcc569ad00cd\",\"dweb:/ipfs/QmZdGwc5ezJf2qv8yheoTVF3UTfWJnh6FtAAq7wufhPZ5R\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xd4ea004cc74fba458e72066541257426e95f1b00ba0b25d53c7c0fce1726d991\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://35c8c8b5bfe4f71c1a5175c1d6549aff9352feec558f3816c9e02d1cab1e1a88\",\"dweb:/ipfs/QmY7qydf5ofXdVJWPeb4bUTtHCn7oWymcTY2RCpZSuSWKM\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xe150223822098026c7ce734cd68848e45b47b92b024d34bc25886e9c6af6ec67\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6590e590f4af53d55e81e06ba8d53346cfce71ce1fa8d1833141f273d74c8a8f\",\"dweb:/ipfs/QmTM582joUpK7KBDWvwWEBi4XT3Qt9x8VLkhwPYj8Qu93o\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xd87293bc10dfe09707a042bf05091baf40ba344bdca141bd99b62256a7611817\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f6eadd454c6671c26bd22095c31a3bbaea7083df9aa6548dbaba32a4907e336\",\"dweb:/ipfs/QmY1jMW9DuAk9CSfVS6MsG5onqjZHKzdBrv2TcHvj9yKj4\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x077931150bcba5b99dedcd9038f3fbeef9c9230046dc4649c457d75d4be32a5c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2a48e4046f7ae8acb965d0f8d79767f4f4c70c1a6a8d3cf635482587412d33fd\",\"dweb:/ipfs/QmcY8FbffppqTMBiMwniXG9R8i8eQoVJuLqqTXgpuiXyUr\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x2f9511684820be7510155adfe3c2c2ef7e2583472946bae37f379bac801fc263\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7e9a84e4168448e3320a6682c8ba248c8b51757df173b86507e9aba4b6167247\",\"dweb:/ipfs/QmSonetYBP22Fnc8HrcaTxAA1Zg2PCR5ptPiEp22sA77Ka\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4\",\"dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU\"]}},\"version\":1}",
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
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "domainSeparator",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "permitTypeHash",
              "type": "bytes32"
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
              "internalType": "contract IERC20",
              "name": "_target",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "sweep"
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
          "getCheckpointExposure(uint256)": {
            "params": {
              "_checkpointTime": "The checkpoint time."
            },
            "returns": {
              "_0": "The checkpoint exposure."
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
          "permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)": {
            "details": "The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.",
            "params": {
              "_approved": "A boolean of the approval status to set to.",
              "deadline": "The timestamp which the signature must be submitted by        to be valid.",
              "domainSeparator": "The EIP712 domain separator of the contract.",
              "owner": "The owner of the account which is having the new approval set.",
              "permitTypeHash": "The EIP712 domain separator of the contract.",
              "r": "The r component of the ECDSA signature.",
              "s": "The s component of the ECDSA signature.",
              "spender": "The address which will be allowed to spend owner's tokens.",
              "v": "Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28."
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
          "sweep(address)": {
            "details": "WARN: The entire balance of any of the sweep targets can be swept      by governance. If these sweep targets provide access to the base or      pool token, then governance has the ability to rug the pool.WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.",
            "params": {
              "_target": "The token to sweep."
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
          "getCheckpointExposure(uint256)": {
            "notice": "Gets the checkpoint exposure at a specified time."
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
          "permitForAll(bytes32,bytes32,address,address,bool,uint256,uint8,bytes32,bytes32)": {
            "notice": "Allows a caller who is not the owner of an account to execute the      functionality of 'approve' for all assets with the owners signature."
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
          "sweep(address)": {
            "notice": "Some yield sources [eg Morpho] pay rewards directly to this         contract but we can't handle distributing them internally so we         sweep to the fee collector address to then redistribute to users."
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
        "keccak256": "0xe5889a0b6c43131543029af4368ee0ac4631b8281425766e07a38b590eecb8db",
        "urls": [
          "bzz-raw://80497d157827cab2d7cefb429e9d1e2ac977ed8d1435a03c1b5d0f4d0d1861ba",
          "dweb:/ipfs/QmcW4fVGHaaRa5MYDaajynxj1uU3mcAauBVXfmJCi3FbMq"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/instances/ERC4626Base.sol": {
        "keccak256": "0xc5e11f70a3e769fd322e4f02858a46f92c8434623a9af5c2454e0efba7fd9e7f",
        "urls": [
          "bzz-raw://658dd5495159b0e0c00d5d9b6ac8bd7b699cfbf0f429b3c6fdd6b8505010ce37",
          "dweb:/ipfs/QmSVi7t74sawCx4AqA1Mr9zLLps8R8vGbqfkTs4V9jVjgx"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/instances/ERC4626Target0.sol": {
        "keccak256": "0xd47a4b1bbcbde29b41993088161903382cf5817f0d8218eef480867d120eebaa",
        "urls": [
          "bzz-raw://6ad667e6391215db447963eabeb628fd04b6344de6281bb28fcde63c97d6d134",
          "dweb:/ipfs/QmUp2p2YcJeMrCLEASy6GXdCHQn3eesqqrZkDt8wJemPag"
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
    "id": 3481,
    "exportedSymbols": {
      "ERC20": [
        63690
      ],
      "ERC4626Base": [
        2846
      ],
      "ERC4626Target0": [
        3480
      ],
      "HyperdriveTarget0": [
        1290
      ],
      "IERC20": [
        3872
      ],
      "IERC4626": [
        4097
      ],
      "IHyperdrive": [
        4675
      ],
      "SafeTransferLib": [
        63999
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:3092:11",
    "nodes": [
      {
        "id": 3346,
        "nodeType": "PragmaDirective",
        "src": "39:23:11",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 3348,
        "nodeType": "ImportDirective",
        "src": "64:49:11",
        "nodes": [],
        "absolutePath": "lib/solmate/src/tokens/ERC20.sol",
        "file": "solmate/tokens/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3481,
        "sourceUnit": 63691,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3347,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63690,
              "src": "73:5:11",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3350,
        "nodeType": "ImportDirective",
        "src": "114:68:11",
        "nodes": [],
        "absolutePath": "lib/solmate/src/utils/SafeTransferLib.sol",
        "file": "solmate/utils/SafeTransferLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3481,
        "sourceUnit": 64000,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3349,
              "name": "SafeTransferLib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63999,
              "src": "123:15:11",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3352,
        "nodeType": "ImportDirective",
        "src": "183:70:11",
        "nodes": [],
        "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
        "file": "../external/HyperdriveTarget0.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3481,
        "sourceUnit": 1291,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3351,
              "name": "HyperdriveTarget0",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 1290,
              "src": "192:17:11",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3354,
        "nodeType": "ImportDirective",
        "src": "254:50:11",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "../interfaces/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3481,
        "sourceUnit": 3873,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3353,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3872,
              "src": "263:6:11",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3356,
        "nodeType": "ImportDirective",
        "src": "305:54:11",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC4626.sol",
        "file": "../interfaces/IERC4626.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3481,
        "sourceUnit": 4098,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3355,
              "name": "IERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4097,
              "src": "314:8:11",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3358,
        "nodeType": "ImportDirective",
        "src": "360:60:11",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3481,
        "sourceUnit": 4676,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3357,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4675,
              "src": "369:11:11",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3360,
        "nodeType": "ImportDirective",
        "src": "421:48:11",
        "nodes": [],
        "absolutePath": "contracts/src/instances/ERC4626Base.sol",
        "file": "./ERC4626Base.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3481,
        "sourceUnit": 2847,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3359,
              "name": "ERC4626Base",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 2846,
              "src": "430:11:11",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3480,
        "nodeType": "ContractDefinition",
        "src": "912:2218:11",
        "nodes": [
          {
            "id": 3369,
            "nodeType": "UsingForDirective",
            "src": "976:32:11",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 3366,
              "name": "SafeTransferLib",
              "nameLocations": [
                "982:15:11"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 63999,
              "src": "982:15:11"
            },
            "typeName": {
              "id": 3368,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 3367,
                "name": "ERC20",
                "nameLocations": [
                  "1002:5:11"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 63690,
                "src": "1002:5:11"
              },
              "referencedDeclaration": 63690,
              "src": "1002:5:11",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$63690",
                "typeString": "contract ERC20"
              }
            }
          },
          {
            "id": 3386,
            "nodeType": "FunctionDefinition",
            "src": "1169:139:11",
            "nodes": [],
            "body": {
              "id": 3385,
              "nodeType": "Block",
              "src": "1306:2:11",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 3370,
              "nodeType": "StructuredDocumentation",
              "src": "1014:150:11",
              "text": "@notice Initializes the target0 contract.\n @param _config The configuration of the Hyperdrive pool.\n @param __pool The ERC4626 pool."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 3379,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3373,
                    "src": "1277:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 3380,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 3378,
                  "name": "HyperdriveTarget0",
                  "nameLocations": [
                    "1259:17:11"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1290,
                  "src": "1259:17:11"
                },
                "nodeType": "ModifierInvocation",
                "src": "1259:26:11"
              },
              {
                "arguments": [
                  {
                    "id": 3382,
                    "name": "__pool",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3376,
                    "src": "1298:6:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$4097",
                      "typeString": "contract IERC4626"
                    }
                  }
                ],
                "id": 3383,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 3381,
                  "name": "ERC4626Base",
                  "nameLocations": [
                    "1286:11:11"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 2846,
                  "src": "1286:11:11"
                },
                "nodeType": "ModifierInvocation",
                "src": "1286:19:11"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 3377,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3373,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "1220:7:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 3386,
                  "src": "1190:37:11",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 3372,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 3371,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "1190:11:11",
                        "1202:10:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4459,
                      "src": "1190:22:11"
                    },
                    "referencedDeclaration": 4459,
                    "src": "1190:22:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3376,
                  "mutability": "mutable",
                  "name": "__pool",
                  "nameLocation": "1246:6:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 3386,
                  "src": "1237:15:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC4626_$4097",
                    "typeString": "contract IERC4626"
                  },
                  "typeName": {
                    "id": 3375,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 3374,
                      "name": "IERC4626",
                      "nameLocations": [
                        "1237:8:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4097,
                      "src": "1237:8:11"
                    },
                    "referencedDeclaration": 4097,
                    "src": "1237:8:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$4097",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1180:78:11"
            },
            "returnParameters": {
              "id": 3384,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1306:0:11"
            },
            "scope": 3480,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 3446,
            "nodeType": "FunctionDefinition",
            "src": "2088:624:11",
            "nodes": [],
            "body": {
              "id": 3445,
              "nodeType": "Block",
              "src": "2128:584:11",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 3402,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 3396,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 3393,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2210:3:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 3394,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2214:6:11",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2210:10:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 3395,
                        "name": "_feeCollector",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9862,
                        "src": "2224:13:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "2210:27:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 3401,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "2241:21:11",
                      "subExpression": {
                        "baseExpression": {
                          "id": 3397,
                          "name": "_pausers",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9873,
                          "src": "2242:8:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 3400,
                        "indexExpression": {
                          "expression": {
                            "id": 3398,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2251:3:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 3399,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2255:6:11",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2251:10:11",
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
                        "src": "2242:20:11",
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
                    "src": "2210:52:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 3409,
                  "nodeType": "IfStatement",
                  "src": "2206:116:11",
                  "trueBody": {
                    "id": 3408,
                    "nodeType": "Block",
                    "src": "2264:58:11",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 3403,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "2285:11:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 3405,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2297:12:11",
                            "memberName": "Unauthorized",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4596,
                            "src": "2285:24:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 3406,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2285:26:11",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3407,
                        "nodeType": "RevertStatement",
                        "src": "2278:33:11"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "id": 3416,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "2399:31:11",
                    "subExpression": {
                      "baseExpression": {
                        "id": 3410,
                        "name": "_isSweepable",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2663,
                        "src": "2400:12:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 3415,
                      "indexExpression": {
                        "arguments": [
                          {
                            "id": 3413,
                            "name": "_target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3390,
                            "src": "2421:7:11",
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
                          "id": 3412,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2413:7:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 3411,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2413:7:11",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 3414,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2413:16:11",
                        "tryCall": false,
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
                      "src": "2400:30:11",
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
                  "id": 3423,
                  "nodeType": "IfStatement",
                  "src": "2395:99:11",
                  "trueBody": {
                    "id": 3422,
                    "nodeType": "Block",
                    "src": "2432:62:11",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 3417,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "2453:11:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 3419,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2465:16:11",
                            "memberName": "UnsupportedToken",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4567,
                            "src": "2453:28:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 3420,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2453:30:11",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3421,
                        "nodeType": "RevertStatement",
                        "src": "2446:37:11"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    3425
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3425,
                      "mutability": "mutable",
                      "name": "balance",
                      "nameLocation": "2593:7:11",
                      "nodeType": "VariableDeclaration",
                      "scope": 3445,
                      "src": "2585:15:11",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3424,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2585:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 3433,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 3430,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "2629:4:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC4626Target0_$3480",
                              "typeString": "contract ERC4626Target0"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ERC4626Target0_$3480",
                              "typeString": "contract ERC4626Target0"
                            }
                          ],
                          "id": 3429,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2621:7:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 3428,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2621:7:11",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 3431,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2621:13:11",
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
                        "id": 3426,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3390,
                        "src": "2603:7:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$3872",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 3427,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2611:9:11",
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3833,
                      "src": "2603:17:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
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
                    "src": "2603:32:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2585:50:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 3441,
                        "name": "_feeCollector",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9862,
                        "src": "2682:13:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 3442,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3425,
                        "src": "2697:7:11",
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
                                "id": 3437,
                                "name": "_target",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3390,
                                "src": "2659:7:11",
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
                              "id": 3436,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2651:7:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 3435,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "2651:7:11",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 3438,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2651:16:11",
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
                          "id": 3434,
                          "name": "ERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63690,
                          "src": "2645:5:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20_$63690_$",
                            "typeString": "type(contract ERC20)"
                          }
                        },
                        "id": 3439,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2645:23:11",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$63690",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 3440,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2669:12:11",
                      "memberName": "safeTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 63978,
                      "src": "2645:36:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$63690_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$63690_$",
                        "typeString": "function (contract ERC20,address,uint256)"
                      }
                    },
                    "id": 3443,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2645:60:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3444,
                  "nodeType": "ExpressionStatement",
                  "src": "2645:60:11"
                }
              ]
            },
            "documentation": {
              "id": 3387,
              "nodeType": "StructuredDocumentation",
              "src": "1334:749:11",
              "text": "@notice Some yield sources [eg Morpho] pay rewards directly to this\n         contract but we can't handle distributing them internally so we\n         sweep to the fee collector address to then redistribute to users.\n @dev WARN: The entire balance of any of the sweep targets can be swept\n      by governance. If these sweep targets provide access to the base or\n      pool token, then governance has the ability to rug the pool.\n @dev WARN: It is unlikely but possible that there is a selector overlap\n      with 'transferFrom'. Any integrating contracts should be checked\n      for that, as it may result in an unexpected call from this address.\n @param _target The token to sweep."
            },
            "functionSelector": "01681a62",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sweep",
            "nameLocation": "2097:5:11",
            "parameters": {
              "id": 3391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3390,
                  "mutability": "mutable",
                  "name": "_target",
                  "nameLocation": "2110:7:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 3446,
                  "src": "2103:14:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20_$3872",
                    "typeString": "contract IERC20"
                  },
                  "typeName": {
                    "id": 3389,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 3388,
                      "name": "IERC20",
                      "nameLocations": [
                        "2103:6:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3872,
                      "src": "2103:6:11"
                    },
                    "referencedDeclaration": 3872,
                    "src": "2103:6:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$3872",
                      "typeString": "contract IERC20"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2102:16:11"
            },
            "returnParameters": {
              "id": 3392,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2128:0:11"
            },
            "scope": 3480,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 3461,
            "nodeType": "FunctionDefinition",
            "src": "2806:92:11",
            "nodes": [],
            "body": {
              "id": 3460,
              "nodeType": "Block",
              "src": "2855:43:11",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 3456,
                            "name": "_pool",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2658,
                            "src": "2884:5:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC4626_$4097",
                              "typeString": "contract IERC4626"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC4626_$4097",
                              "typeString": "contract IERC4626"
                            }
                          ],
                          "expression": {
                            "id": 3454,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2873:3:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 3455,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2877:6:11",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "2873:10:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 3457,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2873:17:11",
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
                      "id": 3453,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1289,
                      "src": "2865:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 3458,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2865:26:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3459,
                  "nodeType": "ExpressionStatement",
                  "src": "2865:26:11"
                }
              ]
            },
            "documentation": {
              "id": 3447,
              "nodeType": "StructuredDocumentation",
              "src": "2739:62:11",
              "text": "@notice Gets the 4626 pool.\n @return The 4626 pool."
            },
            "functionSelector": "16f0115b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pool",
            "nameLocation": "2815:4:11",
            "parameters": {
              "id": 3448,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2819:2:11"
            },
            "returnParameters": {
              "id": 3452,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3451,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 3461,
                  "src": "2845:8:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC4626_$4097",
                    "typeString": "contract IERC4626"
                  },
                  "typeName": {
                    "id": 3450,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 3449,
                      "name": "IERC4626",
                      "nameLocations": [
                        "2845:8:11"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4097,
                      "src": "2845:8:11"
                    },
                    "referencedDeclaration": 4097,
                    "src": "2845:8:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$4097",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2844:10:11"
            },
            "scope": 3480,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 3479,
            "nodeType": "FunctionDefinition",
            "src": "3002:126:11",
            "nodes": [],
            "body": {
              "id": 3478,
              "nodeType": "Block",
              "src": "3069:59:11",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "baseExpression": {
                              "id": 3472,
                              "name": "_isSweepable",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2663,
                              "src": "3098:12:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 3474,
                            "indexExpression": {
                              "id": 3473,
                              "name": "_target",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3464,
                              "src": "3111:7:11",
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
                            "src": "3098:21:11",
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
                            "id": 3470,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "3087:3:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 3471,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "3091:6:11",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "3087:10:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 3475,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3087:33:11",
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
                      "id": 3469,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1289,
                      "src": "3079:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
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
                    "src": "3079:42:11",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3477,
                  "nodeType": "ExpressionStatement",
                  "src": "3079:42:11"
                }
              ]
            },
            "documentation": {
              "id": 3462,
              "nodeType": "StructuredDocumentation",
              "src": "2904:93:11",
              "text": "@notice Gets the sweepable status of a target.\n @param _target The target address."
            },
            "functionSelector": "cc962f8e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isSweepable",
            "nameLocation": "3011:11:11",
            "parameters": {
              "id": 3465,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3464,
                  "mutability": "mutable",
                  "name": "_target",
                  "nameLocation": "3031:7:11",
                  "nodeType": "VariableDeclaration",
                  "scope": 3479,
                  "src": "3023:15:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3463,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3023:7:11",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3022:17:11"
            },
            "returnParameters": {
              "id": 3468,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3467,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 3479,
                  "src": "3063:4:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3466,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3063:4:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3062:6:11"
            },
            "scope": 3480,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 3362,
              "name": "HyperdriveTarget0",
              "nameLocations": [
                "939:17:11"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1290,
              "src": "939:17:11"
            },
            "id": 3363,
            "nodeType": "InheritanceSpecifier",
            "src": "939:17:11"
          },
          {
            "baseName": {
              "id": 3364,
              "name": "ERC4626Base",
              "nameLocations": [
                "958:11:11"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2846,
              "src": "958:11:11"
            },
            "id": 3365,
            "nodeType": "InheritanceSpecifier",
            "src": "958:11:11"
          }
        ],
        "canonicalName": "ERC4626Target0",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 3361,
          "nodeType": "StructuredDocumentation",
          "src": "471:441:11",
          "text": "@author DELV\n @title ERC4626Target0\n @notice ERC4626Hyperdrive's target 0 logic contract. This contract contains\n         all of the getters for Hyperdrive as well as some stateful\n         functions.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          3480,
          2846,
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
        "name": "ERC4626Target0",
        "nameLocation": "921:14:11",
        "scope": 3481,
        "usedErrors": [
          4527,
          4533,
          4535,
          4539,
          4541,
          4547,
          4567,
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
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 11
} as const;
